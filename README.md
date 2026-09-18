# Genesis Consulting — Identidade Visual

Site estático do manual de identidade visual. Qualquer stakeholder consulta as
cores, tipografia, logos e ícones online, e copia ou baixa cada elemento
diretamente.

**Bilíngue** (pt-BR / inglês) · **tema escuro e claro** · **zero build**

---

## Publicar no GitHub Pages

1. Crie um repositório e envie o conteúdo desta pasta para a raiz dele:

```bash
git init
git add .
git commit -m "Genesis Consulting — identidade visual"
git branch -M main
git remote add origin git@github.com:SUA-ORG/genesis-brandbook.git
git push -u origin main
```

2. No GitHub: **Settings → Pages → Source: Deploy from a branch**, escolha
   `main` e a pasta `/ (root)`. Salve.

3. Em cerca de um minuto o site fica em
   `https://SUA-ORG.github.io/genesis-brandbook/`.

Não há passo de build. Não há dependência de npm. O que está no repositório é
o que vai ao ar.

### Publicar em outro domínio

Todos os caminhos são **relativos** — nenhum começa com `/`. Por isso o site
funciona igual em três situações, sem editar nada:

| Onde | Exemplo |
|---|---|
| GitHub Pages em subpasta | `org.github.io/genesis-brandbook/` |
| Domínio próprio | `marca.genesisconsulting.com` |
| Qualquer hospedagem estática | Netlify, Vercel, S3, um diretório em Apache |

Para domínio próprio no GitHub Pages, crie um arquivo `CNAME` na raiz com o
domínio dentro, e aponte o DNS conforme a documentação do GitHub.

O arquivo `.nojekyll` existe para o GitHub Pages servir os arquivos como estão,
sem processar com Jekyll.

---

## Rodar localmente

```bash
python3 -m http.server 8765
```

Depois abra `http://localhost:8765`.

**É preciso um servidor.** Abrir o `index.html` direto do disco (`file://`) não
funciona: o site carrega `manifest.json` e os SVGs por `fetch()`, e o navegador
bloqueia isso em `file://`. Se você fizer isso, a página mostra um aviso
explicando — não falha em silêncio.

---

## O que tem dentro

```
index.html                    página única
assets/css/style.css          estilos, tokens da marca nas custom properties
assets/js/app.js              i18n, tema, copiar, busca de ícones
assets/data/manifest.json     dados do site — gerado do tokens.json
assets/data/tokens.json       a fonte de verdade do design system
assets/logo/                  6 SVG + 6 PNG
assets/icons/                 106 SVG (currentColor)
assets/fonts/                 Plus Jakarta Sans (OFL) + a licença
assets/downloads/             ZIPs, tokens CSS e o manual em PDF
```

### De onde vêm os valores

As cores, a escala tipográfica, o espaçamento e os raios são lidos de
`assets/data/manifest.json`, que foi **gerado** do `tokens.json` do design
system — não transcritos à mão. Se um token mudar no Figma e o `tokens.json`
for sincronizado, é só regerar o manifesto.

Os textos editoriais e as razões de contraste estão escritos no
`assets/js/app.js`, no dicionário `I18N`.

### Os ícones

106 SVGs no grid de 24px, com os nomes do design system
(`navigation-caret-down`, `status-shield-check`…), em nove grupos.

Duas origens, e a diferença importa:

- **52 do núcleo** — `action`, `content`, `navigation`, `status`. Exportados
  direto do arquivo Figma publicado e conferidos um a um contra o
  `iconography.md`: 52 declarados, 52 exportados, nenhum a mais nem a menos.
- **54 de ampliação** — `people`, `business`, `marketing`, `product`,
  `utility`. Tirados do Phosphor Light oficial (mesmo conjunto e mesmo peso do
  núcleo) e reescalados de 256 para o grid de 24px. Também já estão no arquivo
  Figma, como component sets com as mesmas três variantes de tamanho e o mesmo
  vínculo de cor; o `iconography.md` lista os 162 node keys. Falta apenas
  **republicar a biblioteca** no Figma para que arquivos consumidores enxerguem
  os novos.

Todos usam `fill="currentColor"`, então assumem a cor do contexto onde você
colar. Coordenadas arredondadas a 2 decimais — visualmente idêntico em
16–32px e cerca de 25% menor.

---

## Editar

**Trocar um texto** → `assets/js/app.js`, dicionário `I18N` (tem `pt` e `en`;
mude os dois).

**Trocar uma cor** → mude no `tokens.json` do design system, regere o
manifesto e copie para `assets/data/`. Mudar só o CSS faz o site divergir do
sistema.

**Adicionar um ícone** → coloque o SVG em `assets/icons/` com o padrão
`grupo-nome.svg` e acrescente o nome em `manifest.json → icons`.

---

## Acessibilidade

- Contraste WCAG 2.1 AA nos dois temas — a paleta foi construída sob essa restrição
- Navegação por teclado com foco visível, e um link "ir para o conteúdo"
- `prefers-reduced-motion` respeitado
- Toasts com `role="status"` e `aria-live`
- Zero rolagem horizontal de 375px para cima (verificado por medição)

---

## Licenças

**Plus Jakarta Sans** — SIL Open Font License 1.1. A licença completa está em
`assets/fonts/OFL-PlusJakartaSans.txt`. A OFL permite redistribuir a fonte
junto com o site, e é por isso que ela está aqui em vez de vir de uma CDN: a
marca não fica dependendo de um serviço externo.

**Space Mono** — também OFL, carregada do Google Fonts. Usada só para código.

**Marca Genesis Consulting** — logos, nome e identidade são propriedade da
Genesis Consulting. O uso segue as regras deste próprio manual.

---

## Nota sobre o conteúdo publicado

Este repositório é público e contém o manual em **PDF**. A versão **PPTX**
editável foi deliberadamente deixada de fora: ela carrega a narrativa de
negócio e a estratégia da camada agêntica, e circula por canal interno.
Se precisar dela, peça ao time de Marketing Institucional.
