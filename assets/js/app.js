/* Genesis Consulting — Brandbook site
   Zero build, zero dependencies. All paths relative so it works at any
   GitHub Pages subpath (user.github.io/repo/) or a custom domain. */
(function () {
  'use strict';

  /* Cores que coincidem com a superfície do card e por isso precisam de um
     contorno no chip — senão a amostra desaparece contra o próprio card.
     #242824 é surface-raised no tema escuro. */
  var CHIP_OUTLINE = ['#242824'];

  /* ===================== links das práticas ============================ */
  /* Iguais nos dois idiomas — o site institucional é único. O utm_source é o
     que permite medir no analytics quanto tráfego o brandbook encaminha. */
  var UTM = '?utm_source=brandbook_Genesis';
  var PRACTICE_URLS = {
    'AI & Data':         'https://br.genesisconsulting.com/ai-data/',
    'Digital Solutions': 'https://br.genesisconsulting.com/digital-solutions/',
    'Cloud Computing':   'https://br.genesisconsulting.com/cloud-computing/',
    'SAP':               'https://br.genesisconsulting.com/sap/',
    'SAP Concur':        'https://br.genesisconsulting.com/sap-concur/',
    'Business Agility':  'https://br.genesisconsulting.com/business-agility/'
  };

  /* ============================== i18n ================================= */
  var I18N = {
    pt: {
      skip:'Ir para o conteúdo', themeDark:'Escuro', themeLight:'Claro',
      navBrand:'A marca', navLogo:'Logo', navColor:'Cores', navPair:'Botões',
      navType:'Tipografia', navIcons:'Ícones', navSpace:'Espaçamento', navShape:'Formas',
      navA11y:'Acessibilidade', navAI:'Marcadores de IA', navDown:'Downloads',
      heroKicker:'Manual de identidade visual · v.01/2026',
      heroA:'Movidos por valor.', heroB:'Focados em performance.',
      heroLede:'Tudo que você precisa para aplicar a marca Genesis Consulting — pronto para copiar e baixar. Clique em qualquer cor, token ou ícone para copiar.',
      heroBtn1:'Baixar os assets', heroBtn2:'Ver as cores',
      brandT:'A marca',
      brandI:'A Genesis Consulting entrega valor imediato: mais do que implementar soluções, oferecemos consultoria em TI voltada a resolver os desafios críticos do negócio. Esta identidade é dark-first — a superfície quase-preta domina e o verde aparece como pontuação funcional, nunca como área.',
      logoT:'Logo',
      logoR1T:'Área de respiro', logoR1:'1X — a altura do símbolo. Nenhum elemento invade essa zona. 0,5X é tolerado apenas em layout móvel denso.',
      logoR2T:'Redução mínima', logoR2:'32px para o lockup horizontal · 64px para o vertical (Slogan) · 16px para o monograma isolado.',
      logoR3T:'Nunca', logoR3:'Distorcer, rotacionar, recolorir fora dos temas, aplicar sombra ou contorno, nem usar a versão colorida sobre superfície escura — mede 1,95:1 e desaparece.',
      colorT:'Cores',
      colorI:'Clique em qualquer amostra para copiar o hex. Todo neutro tem subtom verde — não existe cinza neutro neste sistema, e trocar por um cinza puro descaracteriza a marca visivelmente.',
      colorBrand:'Marca', colorNeutral:'Neutros', colorStatus:'Status', colorViz:'Rampa de dados',
      colorStatusN:'Cada status é um par: um valor para o tema escuro, outro para o claro. Status nunca é comunicado só por cor — sempre acompanha ícone ou palavra.',
      colorVizN:'Limitação conhecida: sob protanopia três séries não adjacentes se aproximam. Toda legenda nomeia a série COM o valor — o rótulo é o que carrega o sentido, não a cor.',
      devSummary:'Para desenvolvedores',
      pairT:'Botões',
      pairI:'A decisão que organiza todo o sistema: o verde de marca não é uma cor, são duas. Nenhum verde único passa em contraste nas duas superfícies.',
      pairDark:'Tema escuro', pairLight:'Tema claro', passAA:'PASSA AA', ctaCanon:'Fale com um especialista',
      pairErrT:'O erro mais comum do sistema',
      pairErr:'Rótulo branco sobre #46a239 mede 2,87:1 e reprova. A polaridade de text/on-brand INVERTE entre temas — nunca a fixe em branco.',
      typeT:'Tipografia',
      typeI:'Plus Jakarta Sans carrega todo o sistema. Space Mono existe só para código. Sukhumvit Set — a face das diretrizes impressas — é vetor de logo e impressão, nunca texto vivo na web.',
      typeOddT:'Dois valores parecem erro e não são',
      typeOdd:'heading/3 tem tracking POSITIVO de +2px, e label/tag tem +20px. Ambos confirmados como intencionais — não normalize.',
      iconT:'Ícones',
      iconI:'106 ícones Phosphor peso Light, no grid de 24px do design system — 52 do núcleo original e 54 acrescentados para pessoas, negócio, marketing, produto e utilidades. Clique para copiar o SVG; o botão baixa o arquivo. Todos usam currentColor — assumem a cor do contexto onde você colar.',
      iconSearch:'Buscar ícone…', iconZip:'Baixar todos (.zip)',
      spaceT:'Espaçamento e grid',
      spaceI:'Base 4px. A escala dobra até 64 e depois vira irregular — essa cauda é ritmo de seção, não espaçamento de componente. Nunca use 3xl dentro de um card.',
      shapeT:'Formas e raios',
      shapeI:'Cantos modestos. Botões usam 8px, não pílula — só badge, tag, avatar e spinner são totalmente redondos. Cantos modestos comunicam precisão técnica; a pílula comunica leveza de consumo.',
      a11yT:'Acessibilidade',
      a11yI:'WCAG 2.1 AA em toda superfície, web e e-mail. Não é um checklist posterior — é a restrição que definiu a paleta. 196 pares auditados, zero reprovações no sistema construído.',
      a11yExT:'Três exceções documentadas',
      a11yEx:'Accent Neon como texto claro (bloqueado por escopo de token) · border/subtle como hairline decorativo · text/disabled sob a isenção WCAG 1.4.3 para controles inativos.',
      aiT:'Marcadores de IA',
      aiI:'A assinatura de governança da marca. Toda peça tocada por IA declara essa procedência — visivelmente, e nunca só por cor. A palavra é obrigatória: é o que torna o marcador legível para quem não distingue as cores, e o que o torna auditável.',
      downT:'Downloads',
      downI:'Tudo empacotado. Os logos são SVG vetorial; os PNG vão junto como fallback para ferramentas que não aceitam vetor.',
      footA:'Genesis Consulting · Manual de Identidade Visual v.01/2026',
      footB:'Em caso de dúvidas sobre a aplicação da identidade, procure o time de Marketing Institucional.',
      copied:'Copiado', copiedSvg:'SVG copiado', copyFail:'Não foi possível copiar — selecione manualmente',
      thToken:'Token', thSize:'Tam.', thLh:'Entrelinha', thLs:'Tracking', thWeight:'Peso',
      thDark:'Escuro', thLight:'Claro', thPair:'Par de contraste', thSample:'Amostra', thRatio:'Razão', thProp:'Propriedade', thValue:'Valor',
      noIcons:'Nenhum ícone encontrado.',
      dlLogos:'Logos', dlLogosD:'6 SVG + 6 PNG — Principal, Slogan e Monograma em colorido e branco.',
      dlIcons:'Ícones', dlIconsD:'106 SVG com currentColor, nomeados como no design system.',
      dlTokens:'Tokens CSS', dlTokensD:'Custom properties dos dois temas, geradas do tokens.json.',
      dlJson:'tokens.json', dlJsonD:'A fonte de verdade do design system, com IDs reais do Figma.',
      dlPdf:'Manual (PDF)', dlPdfD:'30 páginas — o manual completo para enviar a stakeholders.',
      secPractices:['AI & Data','Digital Solutions','Cloud Computing','SAP','SAP Concur','Business Agility'],
      newTab:'abre em nova aba',
      markers:['Sugerido por IA','Adaptado por IA','Revisado por IA','Autoria humana'],
      gridRows:[['Largura máx. de conteúdo','1200px'],['Gutter de página','40px'],['Colunas','12'],['Gap de grid','24px'],['Sidebar','280px'],['Modal máx.','560px'],['Breakpoints','320 · 800 · 1280'],['Alturas de controle','32 · 40 · 48px']]
    },
    en: {
      skip:'Skip to content', themeDark:'Dark', themeLight:'Light',
      navBrand:'The brand', navLogo:'Logo', navColor:'Colour', navPair:'Buttons',
      navType:'Typography', navIcons:'Icons', navSpace:'Spacing', navShape:'Shape',
      navA11y:'Accessibility', navAI:'AI markers', navDown:'Downloads',
      heroKicker:'Visual identity guidelines · v.01/2026',
      heroA:'Value driven.', heroB:'Performance focused.',
      heroLede:'Everything you need to apply the Genesis Consulting brand — ready to copy and download. Click any colour, token or icon to copy it.',
      heroBtn1:'Download assets', heroBtn2:'See the colours',
      brandT:'The brand',
      brandI:'Genesis Consulting delivers immediate value: more than implementing solutions, we offer IT consulting aimed at the business-critical problems. This identity is dark-first — the near-black surface dominates and the green appears as functional punctuation, never as an area.',
      logoT:'Logo',
      logoR1T:'Clear space', logoR1:'1X — the height of the symbol. Nothing may enter that zone. 0.5X is tolerated only in dense mobile layouts.',
      logoR2T:'Minimum size', logoR2:'32px for the horizontal lockup · 64px for the vertical (Slogan) · 16px for the standalone monogram.',
      logoR3T:'Never', logoR3:'Distort, rotate, recolour outside the three themes, add shadow or outline, or place the colour version on a dark surface — it measures 1.95:1 and disappears.',
      colorT:'Colour',
      colorI:'Click any swatch to copy its hex. Every neutral carries a green undertone — there is no neutral grey in this system, and substituting one visibly de-brands the work.',
      colorBrand:'Brand', colorNeutral:'Neutrals', colorStatus:'Status', colorViz:'Data ramp',
      colorStatusN:'Each status is a pair: one value for the dark theme, another for light. Status is never communicated by colour alone — always with an icon or a word.',
      colorVizN:'Known limitation: under protanopia three non-adjacent series converge. Every legend names the series WITH its value — the label carries the meaning, not the colour.',
      devSummary:'For developers',
      pairT:'Buttons',
      pairI:'The decision that organises the whole system: the brand green is not one colour, it is two. No single green clears contrast on both surfaces.',
      pairDark:'Dark theme', pairLight:'Light theme', passAA:'PASSES AA', ctaCanon:'Talk to a specialist',
      pairErrT:'The most common mistake in this system',
      pairErr:'A white label on #46a239 measures 2.87:1 and fails. The polarity of text/on-brand INVERTS between themes — never hardcode it to white.',
      typeT:'Typography',
      typeI:'Plus Jakarta Sans carries the whole system. Space Mono exists for code only. Sukhumvit Set — the face in the printed guidelines — is logo vector and print, never live web text.',
      typeOddT:'Two values look like mistakes and are not',
      typeOdd:'heading/3 has POSITIVE +2px tracking, and label/tag has +20px. Both confirmed intentional — do not normalise them.',
      iconT:'Icons',
      iconI:'106 Phosphor Light icons on the design system’s 24px grid — 52 from the original core and 54 added for people, business, marketing, product and utilities. Click to copy the SVG; the button downloads the file. All use currentColor — they take the colour of wherever you paste them.',
      iconSearch:'Search icons…', iconZip:'Download all (.zip)',
      spaceT:'Spacing and grid',
      spaceI:'4px base. The scale doubles to 64 then goes irregular — that tail is section rhythm, not component spacing. Never reach for 3xl inside a card.',
      shapeT:'Shape and radii',
      shapeI:'Modest corners. Buttons use 8px, not pills — only badge, tag, avatar and spinner are fully round. Modest corners read as technical precision; the pill reads as consumer lightness.',
      a11yT:'Accessibility',
      a11yI:'WCAG 2.1 AA on every surface, web and email. Not a later checklist — it is the constraint that shaped the palette. 196 pairs audited, zero failures in the built system.',
      a11yExT:'Three documented exceptions',
      a11yEx:'Accent Neon as light-theme text (blocked by token scope) · border/subtle as a decorative hairline · text/disabled under the WCAG 1.4.3 inactive-control exemption.',
      aiT:'AI markers',
      aiI:'The brand’s governance signature. Every AI-touched piece declares that provenance — visibly, and never by colour alone. The word is mandatory: it is what makes the marker legible to people who cannot distinguish the colours, and what makes it auditable.',
      downT:'Downloads',
      downI:'Everything packaged. Logos are vector SVG; the PNGs ship alongside as a fallback for tools that will not take vector.',
      footA:'Genesis Consulting · Visual Identity Guidelines v.01/2026',
      footB:'For questions about applying the identity, contact the Institutional Marketing team.',
      copied:'Copied', copiedSvg:'SVG copied', copyFail:'Could not copy — please select manually',
      thToken:'Token', thSize:'Size', thLh:'Line height', thLs:'Tracking', thWeight:'Weight',
      thDark:'Dark', thLight:'Light', thPair:'Contrast pair', thSample:'Sample', thRatio:'Ratio', thProp:'Property', thValue:'Value',
      noIcons:'No icons found.',
      dlLogos:'Logos', dlLogosD:'6 SVG + 6 PNG — Primary, Slogan and Monogram in colour and white.',
      dlIcons:'Icons', dlIconsD:'106 SVGs using currentColor, named as in the design system.',
      dlTokens:'Token CSS', dlTokensD:'Custom properties for both themes, generated from tokens.json.',
      dlJson:'tokens.json', dlJsonD:'The design system’s source of truth, with real Figma IDs.',
      dlPdf:'Guidelines (PDF)', dlPdfD:'30 pages — the full manual to send to stakeholders.',
      secPractices:['AI & Data','Digital Solutions','Cloud Computing','SAP','SAP Concur','Business Agility'],
      newTab:'opens in a new tab',
      markers:['AI-suggested','AI-adapted','AI-reviewed','Human-authored'],
      gridRows:[['Content max-width','1200px'],['Page gutter','40px'],['Columns','12'],['Grid gap','24px'],['Sidebar','280px'],['Modal max','560px'],['Breakpoints','320 · 800 · 1280'],['Control heights','32 · 40 · 48px']]
    }
  };

  var lang = 'pt', M = null;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var t = function (k) { return (I18N[lang] && I18N[lang][k]) || k; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) {
    return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]; }); };

  /* ============================== toast ================================ */
  var toastEl, toastTimer;
  function toast(msg) {
    toastEl = toastEl || $('#toast');
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 1600);
  }

  function copy(text, msg) {
    var done = function () { toast(msg || t('copied')); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text, done); });
    } else { fallback(text, done); }
  }
  function fallback(text, done) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:absolute;left:-9999px';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta); done();
    } catch (e) { toast(t('copyFail')); }
  }

  /* ============================ rendering ============================== */
  function swatch(o) {
    var meta = [];
    if (o.pantone) meta.push('Pantone ' + o.pantone);
    if (o.rgb) meta.push('rgb(' + o.rgb + ')');
    if (o.cmyk) meta.push('cmyk(' + o.cmyk + ')');
    var role = o.role ? (o.role[lang] || o.role.pt || '') : '';
    return '<button class="sw" data-copy="' + o.hex + '" title="' + esc(o.hex) + '">' +
      '<span class="sw-chip' +
      (CHIP_OUTLINE.indexOf(String(o.hex).toLowerCase()) > -1 ? ' needs-outline' : '') +
      '" style="background:' + o.hex + '"></span><span class="sw-body">' +
      '<span class="sw-name">' + esc(o.name) + '</span>' +
      '<span class="sw-hex">' + o.hex + '</span>' +
      (o.token ? '<span class="sw-tok">' + esc(o.token) + '</span>' : '') +
      (role ? '<span class="sw-role">' + esc(role) + '</span>' : '') +
      (meta.length ? '<span class="sw-meta">' + esc(meta.join(' · ')) + '</span>' : '') +
      '</span></button>';
  }

  function statusSwatch(o) {
    var name = o.name[lang] || o.name.pt;
    return '<button class="sw" data-copy="' + o.dark + '" title="' + esc(o.dark) + '">' +
      '<span class="sw-chip split"><span style="background:' + o.dark + '"></span>' +
      '<span style="background:' + o.light + '"></span></span><span class="sw-body">' +
      '<span class="sw-name">' + esc(name) + '</span>' +
      '<span class="sw-hex">' + o.dark + ' / ' + o.light + '</span>' +
      '<span class="sw-tok">' + esc(o.token) + '</span></span></button>';
  }

  function render() {
    if (!M) return;

    /* practices — cada uma leva à página do serviço, com utm para medição */
    var pr = I18N[lang].secPractices || [];
    $('#practices').innerHTML = pr.map(function (p) {
      var url = PRACTICE_URLS[p];
      if (!url) return '<div class="card"><h4>' + esc(p) + '</h4></div>';
      return '<a class="card card-link" href="' + url + UTM + '" target="_blank" ' +
        'rel="noopener noreferrer" aria-label="' + esc(p) + ' — ' + esc(t('newTab')) + '">' +
        '<h4>' + esc(p) + '</h4>' +
        '<svg class="card-go" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">' +
        '<path d="M5.5 10.5 10.5 5.5M6.5 5.5h4v4" fill="none" stroke="currentColor" ' +
        'stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
    }).join('');

    /* logos */
    $('#logoGrid').innerHTML = M.logos.map(function (l) {
      var lbl = l.label[lang] || l.label.pt;
      var use = l.use ? (l.use[lang] || l.use.pt) : '';
      return '<div class="logo-card">' +
        '<div class="logo-stage on-dark"><img src="assets/logo/' + l.file + '-branco.svg" alt="' + esc(lbl) + '" loading="lazy"></div>' +
        '<div class="logo-info"><b>' + esc(lbl) + '</b><code>' + esc(l.module) + ' · min ' + l.min + '</code>' +
        (use ? '<p class="logo-use">' + esc(use) + '</p>' : '') +
        '<div class="logo-dls">' +
        '<a href="assets/logo/' + l.file + '-branco.svg" download>SVG branco</a>' +
        '<a href="assets/logo/' + l.file + '-colorido.svg" download>SVG colorido</a>' +
        '<a href="assets/logo/' + l.file + '-branco.png" download>PNG</a>' +
        '</div></div></div>';
    }).join('');

    /* colour */
    $('#swBrand').innerHTML   = M.brand.map(swatch).join('');
    $('#swNeutral').innerHTML = M.neutrals.map(swatch).join('');
    $('#swStatus').innerHTML  = M.status.map(statusSwatch).join('');
    $('#swViz').innerHTML = M.dataviz.map(function (h, i) {
      return '<button data-copy="' + h + '" style="background:' + h + '">' + (i + 1) + '<br>' + h + '</button>';
    }).join('');

    /* semantic table (dev disclosure) */
    var keys = Object.keys(M.semantic).sort();
    $('#semTable').innerHTML = '<div class="table"><table><thead><tr><th>' + t('thToken') +
      '</th><th class="mono">' + t('thDark') + '</th><th class="mono">' + t('thLight') +
      '</th></tr></thead><tbody>' + keys.map(function (k) {
        var v = M.semantic[k];
        return '<tr><td><span class="tok">' + esc(k) + '</span></td>' +
          '<td><span class="val">' + (v.dark || '—') + '</span></td>' +
          '<td><span class="val">' + (v.light || '—') + '</span></td></tr>';
      }).join('') + '</tbody></table></div>';

    /* type scale */
    $('#typeTable').innerHTML = '<table><thead><tr><th>' + t('thToken') + '</th><th>' + t('thSize') +
      '</th><th>' + t('thLh') + '</th><th>' + t('thLs') + '</th><th>' + t('thWeight') +
      '</th></tr></thead><tbody>' + M.type.map(function (r) {
        // cada token desenhado com a própria definição; ls vem como '+2px'
        var spec = 'font-family:' + (r.mono ? 'var(--mono)' : 'var(--font)') +
          ';font-size:' + r.size + 'px;line-height:' + r.lh +
          ';letter-spacing:' + String(r.ls).replace('+', '') +
          ';font-weight:' + r.w +
          (r.uc ? ';text-transform:uppercase' : '');
        return '<tr><td><span class="tok-spec" style="' + spec + '">' + esc(r.token) +
          '</span>' + (r.mono ? ' <span class="tok">⌨</span>' : '') + '</td>' +
          '<td><span class="val">' + r.size + 'px</span></td><td class="mono">' + r.lh +
          '</td><td class="mono">' + r.ls + '</td><td class="mono">' + r.w + '</td></tr>';
      }).join('') + '</tbody></table>';

    /* spacing */
    var max = 200;
    $('#spaceScale').innerHTML = M.spacing.map(function (p) {
      var pct = Math.max(1.2, p[1] / max * 100);
      return '<div class="scale-row"><b>' + p[0] + '</b><span>' + p[1] + 'px</span>' +
        '<div class="scale-bar' + (p[1] > 64 ? ' sect' : '') + '" style="width:' + pct + '%"></div></div>';
    }).join('');
    var gr = I18N[lang].gridRows || [];
    $('#gridTable').innerHTML = '<table><thead><tr><th>' + t('thProp') + '</th><th>' + t('thValue') +
      '</th></tr></thead><tbody>' + gr.map(function (r) {
        return '<tr><td>' + esc(r[0]) + '</td><td><span class="val">' + esc(r[1]) + '</span></td></tr>';
      }).join('') + '</tbody></table>';

    /* radii */
    $('#radiiRow').innerHTML = M.radius.map(function (r) {
      var px = r[1] === 9999 ? 999 : r[1];
      return '<div style="border-radius:' + px + 'px"><b>' + (r[1] === 9999 ? 'full' : r[1] + 'px') +
        '</b><code>radius/' + r[0] + '</code></div>';
    }).join('');

    /* contrast — a razão é simétrica, então cada par vale nos dois sentidos:
       a coluna de amostra mostra A sobre B e B sobre A, aplicados de verdade. */
    $('#contrastTable').innerHTML = '<table><thead><tr><th>' + t('thPair') + '</th><th>' +
      t('thSample') + '</th><th>' + t('thRatio') + '</th></tr></thead><tbody>' +
      M.contrast.map(function (c) {
        var nomes = c[0].split('/'), fg = c[3], bg = c[4];
        var caixa = function (texto, fundo, titulo) {
          return '<span class="cbox" style="color:' + texto + ';background:' + fundo +
            '" title="' + esc(titulo) + '">Aa</span>';
        };
        return '<tr><td>' + esc(nomes[0].trim()) + ' <span class="chex">' + fg + '</span><br>' +
          esc(nomes[1].trim()) + ' <span class="chex">' + bg + '</span></td>' +
          '<td><span class="cpair">' +
          caixa(fg, bg, nomes[0].trim() + ' sobre ' + nomes[1].trim()) +
          caixa(bg, fg, nomes[1].trim() + ' sobre ' + nomes[0].trim()) +
          '</span></td>' +
          '<td class="' + (c[2] ? 'ok' : 'no') + '">' + c[1] + ':1</td></tr>';
      }).join('') + '</tbody></table>';

    /* AI markers */
    var cols = ['var(--brand)', 'var(--accent)', 'var(--st-info)', 'var(--text-secondary)'];
    $('#markers').innerHTML = (I18N[lang].markers || []).map(function (m, i) {
      return '<span class="marker"><i style="background:' + cols[i] + '"></i>' + esc(m) + '</span>';
    }).join('');

    /* downloads */
    var dls = [
      ['dlLogos','dlLogosD','assets/downloads/genesis-logos.zip','ZIP · 181 KB'],
      ['dlIcons','dlIconsD','assets/downloads/genesis-icons.zip','ZIP · 72 KB'],
      ['dlTokens','dlTokensD','assets/downloads/genesis-tokens.css','CSS'],
      ['dlJson','dlJsonD','assets/data/tokens.json','JSON · 50 KB'],
      ['dlPdf','dlPdfD','assets/downloads/genesis-miv.pdf','PDF · 1,2 MB']
    ];
    $('#dlGrid').innerHTML = dls.map(function (d) {
      return '<a href="' + d[2] + '" download><b>' + esc(t(d[0])) + '</b><span>' +
        esc(t(d[1])) + '</span><em>' + d[3] + '</em></a>';
    }).join('');

    renderIcons($('#iconSearch') ? $('#iconSearch').value : '');
  }

  var ICON_CACHE = {};
  function renderIcons(q) {
    var grid = $('#iconGrid'); if (!grid || !M) return;
    q = (q || '').trim().toLowerCase();
    var html = '', total = 0;
    Object.keys(M.iconGroups).sort().forEach(function (g) {
      var list = M.iconGroups[g].filter(function (n) { return !q || n.indexOf(q) !== -1; });
      if (!list.length) return;
      total += list.length;
      html += '<div class="icon-group"><h3>' + esc(g) + ' · ' + list.length + '</h3><div class="icon-grid">' +
        list.map(function (n) {
          return '<button class="icon" data-icon="' + n + '" title="icon/' + esc(g) + '/' +
            esc(n.slice(g.length + 1)) + '">' +
            '<span class="icon-slot" data-slot="' + n + '"></span>' +
            '<span class="icon-name">' + esc(n.slice(g.length + 1)) + '</span>' +
            '<a class="icon-dl" href="assets/icons/' + n + '.svg" download onclick="event.stopPropagation()">↓ SVG</a>' +
            '</button>';
        }).join('') + '</div></div>';
    });
    grid.innerHTML = total ? html : '<p class="empty">' + esc(t('noIcons')) + '</p>';
    // inject the actual SVG markup (kept out of the template to avoid double-escaping)
    $$('.icon-slot', grid).forEach(function (slot) {
      var n = slot.getAttribute('data-slot');
      if (ICON_CACHE[n]) { slot.innerHTML = ICON_CACHE[n]; return; }
      fetch('assets/icons/' + n + '.svg').then(function (r) { return r.ok ? r.text() : ''; })
        .then(function (svg) { if (svg) { ICON_CACHE[n] = svg; slot.innerHTML = svg; } })
        .catch(function () {});
    });
  }

  /* ============================ i18n apply ============================= */
  function applyLang() {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    $$('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n'); var v = I18N[lang][k];
      if (typeof v === 'string') el.textContent = v;
    });
    $$('[data-i18n-ph]').forEach(function (el) {
      var v = I18N[lang][el.getAttribute('data-i18n-ph')];
      if (typeof v === 'string') el.setAttribute('placeholder', v);
    });
    try { localStorage.setItem('gc-lang', lang); } catch (e) {}
    render();
  }

  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    $$('[data-theme-set]').forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-theme-set') === mode); });
    try { localStorage.setItem('gc-theme', mode); } catch (e) {}
  }

  /* ============================== events =============================== */
  document.addEventListener('click', function (e) {
    var sw = e.target.closest('[data-copy]');
    if (sw) { copy(sw.getAttribute('data-copy')); return; }

    var ic = e.target.closest('[data-icon]');
    if (ic) {
      var n = ic.getAttribute('data-icon');
      if (ICON_CACHE[n]) { copy(ICON_CACHE[n], t('copiedSvg')); }
      else {
        fetch('assets/icons/' + n + '.svg').then(function (r) { return r.text(); })
          .then(function (s) { ICON_CACHE[n] = s; copy(s, t('copiedSvg')); })
          .catch(function () { toast(t('copyFail')); });
      }
      return;
    }

    var lb = e.target.closest('[data-lang]');
    if (lb) {
      lang = lb.getAttribute('data-lang');
      $$('[data-lang]').forEach(function (b) { b.classList.toggle('is-on', b === lb); });
      applyLang(); return;
    }

    var tb = e.target.closest('[data-theme-set]');
    if (tb) { setTheme(tb.getAttribute('data-theme-set')); return; }

    var mb = e.target.closest('.menu-btn');
    if (mb) {
      var side = $('.side'); var open = side.classList.toggle('is-open');
      mb.setAttribute('aria-expanded', String(open)); return;
    }
    if (e.target.closest('.side a')) {
      $('.side').classList.remove('is-open');
      var m = $('.menu-btn'); if (m) m.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('input', function (e) {
    if (e.target.id === 'iconSearch') renderIcons(e.target.value);
  });

  /* ============================== scroll spy ===========================
     Era IntersectionObserver e tinha três furos:

     1. O IO só avisa quando a interseção MUDA. No fim da página não há mais
        scroll possível, então clicar em "Downloads" não mudava interseção
        nenhuma e o item nunca acendia — as últimas seções eram inalcançáveis.
     2. `if (!en.isIntersecting) return` descartava as saídas, e quando duas
        seções estavam na faixa ao mesmo tempo quem vencia era a última do
        array de entries, cuja ordem o IO não garante ser a do documento.
     3. Não havia estado inicial garantido: em alguns pontos nenhum item
        ficava aceso.

     Agora o ativo é recalculado do zero a cada evento, a partir da geometria.
     Sempre existe exatamente um, e a ordem é a do documento. */
  function spy() {
    var links = $$('.side a'); if (!links.length) return;
    var itens = links.map(function (a) {
      return { a: a, sec: document.querySelector(a.getAttribute('href')) };
    }).filter(function (x) { return x.sec; });
    if (!itens.length) return;

    var LINHA = 140;     // linha de leitura, logo abaixo da topbar fixa
    var aceso = null;    // evita tocar no DOM quando nada mudou
    var alvo = null;     // seção clicada
    var alvoAte = 0;     // até quando o clique manda, enquanto o scroll assenta

    function pintar(x) {
      if (x === aceso) return;
      aceso = x;
      itens.forEach(function (i) { i.a.classList.toggle('is-active', i === x); });
    }

    function calcular() {
      var doc = document.scrollingElement || document.documentElement;
      var noFim = doc.scrollTop >= doc.scrollHeight - innerHeight - 2;

      // Enquanto o scroll do clique não assenta, manda o clique: senão cada
      // seção atravessada durante o scroll suave pisca como ativa.
      if (alvo && Date.now() < alvoAte) return pintar(alvo);

      // No fim da página as últimas seções nunca alcançam a linha de leitura,
      // porque não há mais para onde rolar. Vale o clique, ou a última seção.
      if (noFim) {
        if (alvo && alvo.sec.getBoundingClientRect().bottom > 0) return pintar(alvo);
        return pintar(itens[itens.length - 1]);
      }

      alvo = null;
      var atual = itens[0];
      for (var i = 0; i < itens.length; i++) {
        if (itens[i].sec.getBoundingClientRect().top <= LINHA) atual = itens[i];
      }
      pintar(atual);
    }

    itens.forEach(function (x) {
      x.a.addEventListener('click', function () {
        alvo = x; alvoAte = Date.now() + 800; pintar(x);
      });
    });
    addEventListener('scroll', calcular, { passive: true });
    addEventListener('resize', calcular);
    addEventListener('hashchange', calcular);
    calcular();
  }

  /* ============================== boot ================================= */
  try {
    var savedT = localStorage.getItem('gc-theme');
    if (savedT === 'light' || savedT === 'dark') setTheme(savedT);
    var savedL = localStorage.getItem('gc-lang');
    if (savedL === 'pt' || savedL === 'en') {
      lang = savedL;
      $$('[data-lang]').forEach(function (b) {
        b.classList.toggle('is-on', b.getAttribute('data-lang') === lang); });
    }
  } catch (e) {}

  fetch('assets/data/manifest.json')
    .then(function (r) { if (!r.ok) throw new Error('manifest ' + r.status); return r.json(); })
    .then(function (data) { M = data; applyLang(); spy(); })
    .catch(function (err) {
      var m = $('#main');
      if (m) m.insertAdjacentHTML('afterbegin',
        '<div class="callout danger" style="margin:24px 0"><h4>Erro ao carregar os dados</h4>' +
        '<p>manifest.json não pôde ser lido (' + esc(err.message) + '). Se você abriu o arquivo ' +
        'direto do disco (file://), use um servidor local: <code>python3 -m http.server</code></p></div>');
    });
})();
