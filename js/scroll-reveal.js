/**
 * scroll-reveal.js
 * Añade la clase .visible a cada .reveal
 * cuando el elemento entra en el viewport.
 * Usa IntersectionObserver para mejor rendimiento.
 */

(function () {
  'use strict';

  const THRESHOLD = 0.15;   // % del elemento visible para activar
  const CLASS_IN  = 'visible';
  const SELECTOR  = '.reveal';

  const elements = document.querySelectorAll(SELECTOR);

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(CLASS_IN);
          observer.unobserve(entry.target); // sólo una vez
        }
      });
    },
    { threshold: THRESHOLD }
  );

  elements.forEach((el) => observer.observe(el));
})();
