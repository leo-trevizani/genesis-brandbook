#!/usr/bin/env python3
"""Valida os links externos que o brandbook-site publica.

As URLs NÃO são escritas aqui: são lidas do próprio app.js, para que o
script não possa divergir do site. Se alguém trocar um endereço lá, é o
endereço novo que passa a ser testado.

Por que cabeçalhos de navegador: br.genesisconsulting.com fica atrás de um
WAF que devolve 406 para requisição sem User-Agent de navegador. Um teste
"cru" reprova as seis URLs boas e não significa nada.

Uso:
    python3 scripts/check_links.py            # relatório na saída padrão
    python3 scripts/check_links.py --quiet    # só imprime se houver falha

Cuidado com soft 404: um slug inexistente nesse site responde 200 com o
título "Page Not Found". Conferir só o status deixaria passar exatamente o
caso que motivou este script — por isso o título também é inspecionado.

Saída: 0 se todas passaram · 1 se alguma falhou.
Serve para rodar em cron ou GitHub Action.
"""

import gzip
import io
import os
import re
import sys
import time
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP_JS = os.path.join(ROOT, "assets", "js", "app.js")

TIMEOUT = 25
HEADERS = {
    "User-Agent": ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                   "AppleWebKit/537.36 (KHTML, like Gecko) "
                   "Chrome/141.0.0.0 Safari/537.36"),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
    "Accept-Encoding": "gzip",
}


def urls_do_site():
    """Extrai as URLs do bloco PRACTICE_URLS e o utm_source do app.js."""
    if not os.path.exists(APP_JS):
        sys.exit("não encontrei %s" % APP_JS)
    src = open(APP_JS, encoding="utf-8").read()

    m = re.search(r"var\s+UTM\s*=\s*'([^']*)'", src)
    utm = m.group(1) if m else ""

    bloco = re.search(r"var\s+PRACTICE_URLS\s*=\s*\{(.*?)\};", src, re.S)
    if not bloco:
        sys.exit("não encontrei PRACTICE_URLS em app.js — o script precisa "
                 "ser atualizado se a estrutura mudou")
    pares = re.findall(r"'([^']+)'\s*:\s*'(https?://[^']+)'", bloco.group(1))
    if not pares:
        sys.exit("PRACTICE_URLS encontrado mas sem pares nome/URL legíveis")
    return pares, utm


def checar(url, tentativas=3):
    """Devolve (status, url_final, detalhe). status None = erro de rede.

    Repete em 5xx e em erro de rede: o site responde 503 esporadicamente e um
    teste de uma tentativa só transforma soluco em alarme falso.
    """
    ultimo = (None, url, "sem tentativa")
    for i in range(tentativas):
        if i:
            time.sleep(3 * i)
        ultimo = _uma_tentativa(url)
        status = ultimo[0]
        if status is not None and status < 500:
            return ultimo
    return ultimo


def _uma_tentativa(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            corpo = r.read()
            if r.headers.get("Content-Encoding") == "gzip":
                corpo = gzip.GzipFile(fileobj=io.BytesIO(corpo)).read()
            texto = corpo.decode("utf-8", "replace")
            t = re.search(r"<title[^>]*>(.*?)</title>", texto, re.S | re.I)
            titulo = " ".join(t.group(1).split())[:60] if t else ""
            return r.status, r.geturl(), titulo
    except urllib.error.HTTPError as e:
        return e.code, url, e.reason
    except Exception as e:                      # timeout, DNS, TLS, etc.
        return None, url, "%s: %s" % (type(e).__name__, e)


SOFT_404 = re.compile(r"page not found|p[áa]gina n[ãa]o encontrada|\b404\b", re.I)


def normaliza(t):
    return re.sub(r"[^a-z0-9]+", "", t.replace("&amp;", "&").lower())


def main():
    quieto = "--quiet" in sys.argv
    pares, utm = urls_do_site()
    linhas, falhas = [], []

    for nome, base in pares:
        url = base + utm
        status, final, titulo = checar(url)
        motivo = None
        if status != 200:
            motivo = "status %s — %s" % (status if status else "sem resposta", titulo)
        elif SOFT_404.search(titulo):
            # 200 com cara de erro: o slug provavelmente mudou ou saiu do ar
            motivo = "soft 404 — a página respondeu 200 mas o título é %r" % titulo
        if motivo:
            falhas.append((nome, url, motivo))
        linha = "  %-5s %-18s %-4s %s" % (
            "ok " if not motivo else "FALHA", nome,
            status if status else "---", motivo or titulo)
        # título que não menciona o serviço: não reprova, mas vale olhar
        if not motivo and normaliza(nome) not in normaliza(titulo):
            linha += "\n        atenção: o título não menciona %r" % nome
        if final.split("?")[0] != base:
            linha += "\n        redirecionou para: %s" % final
        linhas.append(linha)

    if falhas or not quieto:
        print("Links do brandbook — %d verificados (utm: %s)"
              % (len(pares), utm or "nenhum"))
        print("\n".join(linhas))
        if falhas:
            print("\n%d link(s) com problema. Confira os endereços em\n"
                  "  assets/js/app.js → PRACTICE_URLS"
                  % len(falhas))
        else:
            print("\nTodos responderam 200.")
    return 1 if falhas else 0


if __name__ == "__main__":
    sys.exit(main())
