/* Strona główna: rysuje karty na podstawie katalogu z assets/apps.js. */
(function () {
  'use strict';

  /* Grafiki kart. Nowa aplikacja może użyć istniejącej albo dodać tu własną. */
  var IKONY = {
    metronom:
      '<svg viewBox="0 0 120 84" aria-hidden="true"><path class="wood" d="M46 76 56 12h8l10 64z"/>' +
      '<path class="line" d="M42 76h36"/><g class="pendulum"><path class="line" d="M60 68V18"/>' +
      '<rect class="amber" x="55" y="30" width="10" height="8" rx="2"/></g>' +
      '<path class="tick" d="M22 60a44 44 0 0 1 12-28M98 60a44 44 0 0 0-12-28"/></svg>',
    akordy:
      '<svg viewBox="0 0 120 84" aria-hidden="true"><rect class="keys" x="11" y="14" width="98" height="56" rx="4"/>' +
      '<path class="keyline" d="M25 14v56M39 14v56M53 14v56M67 14v56M81 14v56M95 14v56"/>' +
      '<path class="black" d="M21 14h8v34h-8zM35 14h8v34h-8zM63 14h8v34h-8zM77 14h8v34h-8zM91 14h8v34h-8z"/>' +
      '<circle class="amber" cx="18" cy="59" r="4.5"/><circle class="amber" cx="46" cy="59" r="4.5"/><circle class="amber" cx="74" cy="59" r="4.5"/></svg>',
    interwaly:
      '<svg viewBox="0 0 120 84" aria-hidden="true"><path class="tick" d="M10 60h100M10 46h100M10 32h100M10 18h100"/>' +
      '<path class="line" d="M10 52c9 0 9-14 18-14s9 14 18 14"/>' +
      '<path class="wave" d="M34 60C50 60 58 18 86 18"/>' +
      '<circle class="cream" cx="34" cy="60" r="6"/><circle class="amber" cx="86" cy="18" r="6"/></svg>',
    rozpoznawanie:
      '<svg viewBox="0 0 120 84" aria-hidden="true"><path class="tick" d="M8 62h52M8 50h52M8 38h52M8 26h52"/>' +
      '<path class="wave" d="M22 56C32 56 36 32 46 32"/>' +
      '<circle class="cream" cx="22" cy="56" r="6"/><circle class="amber" cx="46" cy="32" r="6"/>' +
      '<path class="line" d="M74 22h30a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H92l-9 9v-9h-9a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6z"/>' +
      '<path class="line" d="M79 38v0M84 34v8M89 30v16M94 34v8M99 38v0"/></svg>',
    ogolna:
      '<svg viewBox="0 0 120 84" aria-hidden="true"><path class="line" d="M48 62V22l30-6v40"/>' +
      '<circle class="amber" cx="41" cy="62" r="7"/><circle class="amber" cx="71" cy="56" r="7"/></svg>'
  };

  var href = window.forestHref || function (u) { return u; };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function karta(app) {
    var dostepna = app.status === 'dostepna';
    var li = el('li', 'card' + (dostepna ? '' : ' card--soon'));
    li.id = 'karta-' + app.id;

    var art = el('div', 'card__art');
    art.innerHTML = IKONY[app.ikona] || IKONY.ogolna;
    li.appendChild(art);

    var body = el('div', 'card__body');
    body.appendChild(el('h3', 'card__title', app.nazwa));
    body.appendChild(el('p', 'card__text', app.opis));
    li.appendChild(body);

    var foot = el('div', 'card__foot');
    if (dostepna) {
      var a = el('a', 'btn btn--primary', 'Uruchom');
      a.href = href(app.adres);
      a.setAttribute('aria-label', 'Uruchom: ' + app.nazwa);
      foot.appendChild(a);
      if (app.uwaga) foot.appendChild(el('span', 'card__note', app.uwaga));
    } else {
      foot.appendChild(el('span', 'badge', 'Chwilowo niedostępne'));
      if (app.uwaga) foot.appendChild(el('span', 'card__note', app.uwaga));
    }
    li.appendChild(foot);
    return li;
  }

  var lista = document.getElementById('lista-aplikacji');
  if (lista && window.FOREST_APPS) {
    lista.innerHTML = '';
    window.FOREST_APPS.forEach(function (app) { lista.appendChild(karta(app)); });
  }

  /* Ozdobna klawiatura w nagłówku: tyle klawiszy, ile mieści szerokość, z trójdźwiękiem C-dur. */
  var kb = document.getElementById('klawiatura');
  function klawiatura(first) {
    var w = kb.clientWidth, h = kb.clientHeight;
    if (!w || !h) return;
    var n = Math.max(8, Math.round(w / 44)), W = w / n, i;
    var s = '<svg width="' + w + '" height="' + h + '" aria-hidden="true">';
    for (i = 0; i < n; i++) s += '<rect class="kw" x="' + (i * W + 1) + '" y="0" width="' + (W - 2) + '" height="' + (h - 2) + '" rx="3"/>';
    for (i = 0; i < n - 1; i++) if ([0, 1, 3, 4, 5].indexOf(i % 7) >= 0) s += '<rect class="kb" x="' + ((i + 1) * W - W * 0.3) + '" y="0" width="' + W * 0.6 + '" height="' + h * 0.6 + '" rx="2"/>';
    [0, 2, 4].forEach(function (k, j) {
      s += '<circle class="kd' + (first ? ' kd--in' : '') + '" style="animation-delay:' + (j * 0.18) + 's" cx="' + (k * W + W / 2) + '" cy="' + (h * 0.82) + '" r="' + Math.min(7, W * 0.2) + '"/>';
    });
    kb.innerHTML = s + '</svg>';
  }
  if (kb) {
    klawiatura(true);
    window.addEventListener('resize', function () { klawiatura(false); });
  }
})();
