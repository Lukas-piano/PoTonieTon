/*
 * Linki do folderów ("akordy/", "../") działają na serwerze WWW.
 * Przy otwarciu z dysku (file://) lub w osadzonym podglądzie folder nie otwiera
 * automatycznie index.html, więc dopisujemy go do linków oznaczonych data-home / data-app.
 */
(function () {
  var local = location.protocol === 'file:' || window.self !== window.top;
  window.forestHref = function (url) {
    return local && /\/$/.test(url) ? url + 'index.html' : url;
  };
  function fix() {
    document.querySelectorAll('a[data-home], a[data-app]').forEach(function (a) {
      a.setAttribute('href', window.forestHref(a.getAttribute('href')));
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fix);
  else fix();
})();
