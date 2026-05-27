/**
 * nav-active.js
 * Resalta el enlace de navegación correspondiente
 * a la sección visible en pantalla.
 */

(function () {
  'use strict';

  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const CLASS_ACT = 'active';

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Quitar active de todos
        navLinks.forEach((link) => link.classList.remove(CLASS_ACT));

        // Añadir active al link que coincide con la sección visible
        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add(CLASS_ACT);
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => observer.observe(section));
})();
