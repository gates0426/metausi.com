'use strict';
// Native links and semantic HTML keep the entire blog usable without JavaScript.
const links = document.querySelectorAll('.toc a');
if ('IntersectionObserver' in window && links.length) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(link => {
        if(link.hash === '#' + entry.target.id) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('.prose h2[id]').forEach(el => observer.observe(el));
}
