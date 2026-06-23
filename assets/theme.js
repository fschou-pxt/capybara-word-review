// Theme switcher — Classic / Sakura / Ocean (matches the app). Persists choice.
(function () {
  var KEY = 'catw_theme';
  function apply(t) {
    document.body.setAttribute('data-theme', t);
    var sw = document.querySelectorAll('.sw');
    for (var i = 0; i < sw.length; i++) {
      sw[i].classList.toggle('active', sw[i].getAttribute('data-theme') === t);
    }
    try { localStorage.setItem(KEY, t); } catch (e) {}
  }
  var saved = 'classic';
  try { saved = localStorage.getItem(KEY) || 'classic'; } catch (e) {}
  document.addEventListener('DOMContentLoaded', function () {
    apply(saved);
    var sw = document.querySelectorAll('.sw');
    for (var i = 0; i < sw.length; i++) {
      sw[i].addEventListener('click', function () { apply(this.getAttribute('data-theme')); });
    }
  });
})();
