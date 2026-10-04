/*
 * Wspólny pasek portalu na górze każdej aplikacji: powrót na stronę główną
 * i szybkie przejście do innych narzędzi (lista pochodzi z assets/apps.js).
 * Dołącz w aplikacji przed </body>, po portal-link.js i apps.js.
 */
(function () {
  'use strict';
  var apps = (window.FOREST_APPS || []).filter(function (a) { return a.status === 'dostepna'; });
  var href = window.forestHref || function (u) { return u; };
  var here = location.pathname.replace(/index\.html$/, '').split('/').filter(Boolean).pop();

  var css =
    '.fm-bar{display:flex;align-items:center;gap:10px;margin:0 0 12px;padding:6px 12px;' +
    'padding-top:calc(6px + env(safe-area-inset-top,0px));background:#1e1b19;border-bottom:3px solid #8b5e3c;' +
    'font:500 15px/1.2 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#f2eadc;text-align:left}' +
    '.fm-bar a{color:#f2eadc;text-decoration:none;display:inline-flex;align-items:center;min-height:40px;' +
    'padding:0 12px;border-radius:9px;white-space:nowrap;border:1px solid transparent}' +
    '.fm-bar a:focus-visible{outline:3px solid #e6a23c;outline-offset:2px}' +
    '.fm-bar .fm-home{gap:8px;border-color:#e6a23c;color:#e6a23c;font-weight:600}' +
    '.fm-bar .fm-home:hover{background:#e6a23c;color:#2a1c08}' +
    '.fm-bar .fm-brand{font-family:"Iowan Old Style","Palatino Linotype",Palatino,"Noto Serif",Georgia,serif;' +
    'font-size:18px;font-weight:400;color:#f2eadc;margin-right:auto;padding:0 4px}' +
    '.fm-bar .fm-brand i{color:#c69c6d}' +
    '.fm-bar .fm-tools{display:flex;gap:4px;margin-left:auto;overflow-x:auto;scrollbar-width:none}' +
    '.fm-bar .fm-tools::-webkit-scrollbar{display:none}' +
    '.fm-bar .fm-tools a{color:#b9ad9d}' +
    '.fm-bar .fm-tools a:hover{color:#f2eadc;background:#292522}' +
    '.fm-bar .fm-tools a[aria-current]{color:#f2eadc;background:#322d29;border-color:#453d37}' +
    '@media(max-width:600px){.fm-bar{gap:6px;padding-left:8px;padding-right:8px}.fm-bar .fm-brand{display:none}' +
    '.fm-bar a{padding:0 10px}}' +
    '.fm-bar .fm-s{display:none}@media(max-width:520px){.fm-bar .fm-l{display:none}.fm-bar .fm-s{display:inline}.fm-bar a{padding:0 8px}.fm-bar{font-size:14px}}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.className = 'fm-bar';
  bar.setAttribute('role', 'navigation');
  bar.setAttribute('aria-label', 'Po tonie ton');

  function link(cls, url, html, label) {
    var a = document.createElement('a');
    if (cls) a.className = cls;
    a.href = href(url);
    a.innerHTML = html;
    if (label) a.setAttribute('aria-label', label);
    return a;
  }

  bar.appendChild(link('fm-home', '../', '<span aria-hidden="true">←</span><span class="fm-l">Strona główna</span><span class="fm-s">Główna</span>', 'Wróć na stronę główną Po tonie ton'));
  var brand = document.createElement('span');
  brand.className = 'fm-brand';
  brand.innerHTML = 'Po tonie <i>ton</i>';
  bar.appendChild(brand);

  var tools = document.createElement('div');
  tools.className = 'fm-tools';
  apps.forEach(function (app) {
    var a = link('', '../' + app.adres, '', null);
    a.textContent = app.krotko || app.nazwa;
    if (app.adres.replace(/\/$/, '') === here) a.setAttribute('aria-current', 'page');
    tools.appendChild(a);
  });
  bar.appendChild(tools);

  document.body.style.paddingTop = '0';
  document.body.insertBefore(bar, document.body.firstChild);
})();
