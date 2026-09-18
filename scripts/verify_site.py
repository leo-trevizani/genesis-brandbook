#!/usr/bin/env python3
"""Verificações de integridade do brandbook-site, feitas só com o repositório.

Deliberadamente offline e determinístico, para servir de portão a cada push.
O teste dos links externos NÃO está aqui: ele depende da rede e o site de
destino responde 503 esporadicamente — ver check_links.py, que roda em
agenda separada.

O que é conferido:
  1. todo card de download aponta para um arquivo que existe
  2. o rótulo de tamanho de cada card bate com o tamanho real do arquivo
  3. manifest.json é JSON válido e a lista de ícones bate com os arquivos
  4. todo SVG de ícone é XML válido, usa currentColor e está no grid de 24
  5. os logos citados no manifest existem, em SVG e PNG
  6. os assets versionados carregam ?v= no index.html

Uso:
    python3 scripts/verify_site.py
Saída: 0 se tudo passou · 1 se algo falhou.
"""

import json
import os
import re
import sys
import xml.etree.ElementTree as ET

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
falhas = []


def erro(msg):
    falhas.append(msg)


def caminho(rel):
    return os.path.join(RAIZ, rel)


def rotulo_esperado(rel, fmt):
    n = os.path.getsize(caminho(rel))
    if n >= 1024 * 1024:
        return "%s · %s MB" % (fmt, ("%.1f" % (n / 1048576.0)).replace(".", ","))
    return "%s · %d KB" % (fmt, round(n / 1024.0))


def checa_downloads(app):
    cards = re.findall(r"\['(\w+)','\w+','([^']+)','([^']*)'\]", app)
    if len(cards) < 5:
        erro("não consegui ler os cards de download em app.js (achei %d)" % len(cards))
        return
    for chave, rel, rotulo in cards:
        if not os.path.exists(caminho(rel)):
            erro("card %s aponta para %s, que não existe" % (chave, rel))
            continue
        if "·" not in rotulo:      # o card de CSS não anuncia tamanho
            continue
        fmt = rotulo.split("·")[0].strip()
        esperado = rotulo_esperado(rel, fmt)
        if rotulo != esperado:
            erro("card %s diz %r mas %s tem %r" % (chave, rotulo, rel, esperado))
    print("  %d cards de download conferidos" % len(cards))


def checa_icones(man):
    pasta = caminho("assets/icons")
    arquivos = {f[:-4] for f in os.listdir(pasta) if f.endswith(".svg")}
    declarados = set(man["icons"])
    for n in sorted(declarados - arquivos):
        erro("manifest declara o ícone %s, mas não há %s.svg" % (n, n))
    for n in sorted(arquivos - declarados):
        erro("existe %s.svg mas o manifest não o declara" % n)

    agrupados = {n for grupo in man["iconGroups"].values() for n in grupo}
    if agrupados != declarados:
        erro("iconGroups e icons divergem em %d nome(s)" % len(agrupados ^ declarados))

    for n in sorted(arquivos):
        txt = open(os.path.join(pasta, "%s.svg" % n), encoding="utf-8").read()
        try:
            ET.fromstring(txt)
        except Exception as e:
            erro("%s.svg não é XML válido: %s" % (n, e)); continue
        if "currentColor" not in txt:
            erro("%s.svg não usa currentColor" % n)
        if 'viewBox="0 0 24 24"' not in txt:
            erro("%s.svg está fora do grid de 24" % n)
        if not re.search(r'\sd="[^"]{40,}"', txt):
            erro("%s.svg tem path vazio ou curto demais" % n)
    print("  %d ícones conferidos" % len(arquivos))


def checa_logos(man):
    for l in man["logos"]:
        for suf in ("-branco.svg", "-colorido.svg", "-branco.png"):
            rel = "assets/logo/%s%s" % (l["file"], suf)
            if not os.path.exists(caminho(rel)):
                erro("logo ausente: %s" % rel)
    print("  %d logos conferidos" % len(man["logos"]))


def checa_versao(html):
    versionados = re.findall(r'(?:href|src)="(assets/(?:css/style\.css|js/app\.js))(\?v=\d+)?"', html)
    for rel, v in versionados:
        if not v:
            erro("%s está sem ?v= no index.html — um deploy não chegará a quem já visitou" % rel)
    if len(versionados) != 2:
        erro("esperava style.css e app.js versionados, achei %d" % len(versionados))
    else:
        print("  assets versionados: %s" % ", ".join(v for _, v in versionados if v))


def main():
    app = open(caminho("assets/js/app.js"), encoding="utf-8").read()
    html = open(caminho("index.html"), encoding="utf-8").read()
    try:
        man = json.load(open(caminho("assets/data/manifest.json"), encoding="utf-8"))
    except Exception as e:
        print("manifest.json inválido: %s" % e)
        return 1

    checa_downloads(app)
    checa_icones(man)
    checa_logos(man)
    checa_versao(html)

    if falhas:
        print("\n%d falha(s):" % len(falhas))
        for f in falhas:
            print("  - %s" % f)
        return 1
    print("\nTudo íntegro.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
