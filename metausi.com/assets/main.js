'use strict';
// Native links and semantic HTML keep the entire blog readable and navigable
// with JavaScript disabled. Everything below is progressive enhancement.

// Theme toggle: persists to localStorage, defaults to prefers-color-scheme.
// A tiny inline script in <head> sets data-theme before first paint (no flash).
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  function label(t) { return t === 'dark' ? '切换浅色模式' : '切换深色模式'; }
  function sync() { btn.setAttribute('aria-label', label(root.getAttribute('data-theme') || 'light')); }
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('metausi-theme', next); } catch (e) {}
    sync();
  });
  sync();
})();

// TOC highlight (article pages only).
(function () {
  var links = document.querySelectorAll('.toc a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (!entry.isIntersecting) continue;
      links.forEach(function (link) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('.prose h2[id]').forEach(function (el) { observer.observe(el); });
})();

// Reading progress bar (article pages only; created here so no-JS stays clean).
(function () {
  if (!document.querySelector('.prose')) return;
  var bar = document.createElement('div');
  bar.className = 'progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var doc = document.documentElement;
  function update() {
    var max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + '%';
  }
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();
