/* Floating background-music toggle for the website.
 * Browsers block autoplay with sound until the user interacts, and surprise
 * audio is bad UX — so this defaults to OFF, the user clicks to start, and the
 * choice persists across pages (resuming when the browser allows). */
(function () {
  var SRC = (document.currentScript && document.currentScript.dataset.src) || 'assets/audio/background-music.mp3';
  var KEY = 'wr_music_on';
  var VOL = 0.22; // soft

  // ---- styles ----
  var css = document.createElement('style');
  css.textContent =
    '.wr-music{position:fixed;right:16px;bottom:16px;z-index:9999;width:48px;height:48px;border-radius:50%;' +
    'border:none;cursor:pointer;background:var(--teal,#2E8B7A);color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.18);' +
    'display:flex;align-items:center;justify-content:center;font-size:20px;transition:transform .15s,background .2s;}' +
    '.wr-music:hover{transform:scale(1.08);}' +
    '.wr-music.off{background:#b9b2a6;}' +
    '.wr-music .bars{display:inline-flex;gap:2px;align-items:flex-end;height:18px;}' +
    '.wr-music .bars i{width:3px;background:#fff;border-radius:2px;height:6px;animation:wrEq .9s ease-in-out infinite;}' +
    '.wr-music .bars i:nth-child(2){animation-delay:.15s;height:14px;}' +
    '.wr-music .bars i:nth-child(3){animation-delay:.3s;height:10px;}' +
    '.wr-music.off .bars i{animation-play-state:paused;height:8px;background:#fff;}' +
    '@keyframes wrEq{0%,100%{height:5px;}50%{height:16px;}}';
  document.head.appendChild(css);

  // ---- audio ----
  var audio = new Audio(SRC);
  audio.loop = true;
  audio.volume = VOL;
  audio.preload = 'none';

  // ---- button ----
  var btn = document.createElement('button');
  btn.className = 'wr-music off';
  btn.setAttribute('aria-label', 'Toggle background music');
  btn.title = 'Background music';
  btn.innerHTML = '<span class="bars"><i></i><i></i><i></i></span>';
  document.body.appendChild(btn);

  function render(on) {
    btn.classList.toggle('off', !on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function setOn(on) {
    if (on) {
      var p = audio.play();
      if (p && p.catch) p.catch(function () {/* blocked until a gesture */});
    } else {
      audio.pause();
    }
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
    render(on);
  }

  btn.addEventListener('click', function () {
    setOn(audio.paused);
  });

  // Restore preference. If the user previously turned it on, try to resume; if
  // the browser blocks it, start on the first interaction anywhere on the page.
  var wanted = false;
  try { wanted = localStorage.getItem(KEY) === '1'; } catch (e) {}
  render(wanted);
  if (wanted) {
    var p = audio.play();
    if (p && p.catch) {
      p.catch(function () {
        var resume = function () {
          if (localStorage.getItem(KEY) === '1') setOn(true);
          window.removeEventListener('pointerdown', resume);
          window.removeEventListener('keydown', resume);
        };
        window.addEventListener('pointerdown', resume, { once: true });
        window.addEventListener('keydown', resume, { once: true });
      });
    }
  }
})();
