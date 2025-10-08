document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const navbarCollapse = document.getElementById("navbarNavAltMarkup");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarEl = document.querySelector(".navbar") || document.querySelector("nav");
  const NAVBAR_HEIGHT = navbarEl ? Math.round(navbarEl.getBoundingClientRect().height) : 70;

  // =========================
  // Scroll Suave (solo en enlaces internos)
  // =========================
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const top = window.scrollY + targetSection.getBoundingClientRect().top - NAVBAR_HEIGHT;
          window.scrollTo({ top, behavior: "smooth" });

          // Actualizar el history (opcional)
          try {
            history.replaceState(null, "", `#${targetId}`);
          } catch (err) {}
        }
      }

      // cerrar menú en móviles siempre (si existe)
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        try {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        } catch (err) {
          // fallback: si no hay bootstrap, quitar clase show
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });

  // =========================
  // Cerrar menú al hacer clic fuera (si existe)
  // =========================
  document.addEventListener("click", event => {
    if (
      navbarCollapse &&
      navbarCollapse.classList.contains("show") &&
      !navbarCollapse.contains(event.target) &&
      !(navbarToggler && navbarToggler.contains(event.target))
    ) {
      try {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      } catch (err) {
        navbarCollapse.classList.remove("show");
      }
    }
  });

  // =========================
  // Scroll-spy robusto: calcula fracción visible y elige la mejor sección
  // =========================
  function computeVisibleFraction(rect, navHeight, viewportHeight) {
    // Zona visible considerando navbar como "top" de referencia
    const visibleTop = Math.max(rect.top, navHeight);
    const visibleBottom = Math.min(rect.bottom, viewportHeight);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    return rect.height > 0 ? visibleHeight / rect.height : 0;
  }

  function setActiveLinkById(id) {
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
  }

  function updateActiveByVisibility() {
    const vpHeight = window.innerHeight;
    let best = { id: null, fraction: 0, dist: Infinity };

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const frac = computeVisibleFraction(rect, NAVBAR_HEIGHT, vpHeight);
      const dist = Math.abs(rect.top - NAVBAR_HEIGHT); // distancia al punto de anclaje

      if (frac > best.fraction || (frac === best.fraction && dist < best.dist)) {
        best = { id: section.id, fraction: frac, dist };
      }
    });

    // Si ninguna sección tiene presencia relevante, hacemos fallback:
    // - Si estamos arriba del primer bloque, activamos la primera sección (o podés dejar ninguna activa)
    // - Si no, escogemos la sección "más cercana" al navbar
    const MIN_FRACTION = 0.02; // umbral muy pequeño para evitar quedarse en blanco
    if (!best.id || best.fraction <= MIN_FRACTION) {
      const scrollY = window.scrollY;
      const firstTop = sections[0] ? sections[0].offsetTop : 0;

      if (scrollY + NAVBAR_HEIGHT < firstTop - 5) {
        // estamos antes del primer bloque: activa la primera (o limpiar si preferís)
        if (sections[0]) setActiveLinkById(sections[0].id);
        return;
      }

      // fallback: elegir la sección con top más cercano al NAVBAR_HEIGHT
      const nearest = sections
        .map(s => ({ id: s.id, dist: Math.abs(s.getBoundingClientRect().top - NAVBAR_HEIGHT) }))
        .sort((a, b) => a.dist - b.dist)[0];

      if (nearest) {
        setActiveLinkById(nearest.id);
        return;
      }
      // si todo falla, limpiamos
      navLinks.forEach(link => link.classList.remove("active"));
      return;
    }

    setActiveLinkById(best.id);
  }

  // Usar rAF para no saturar con eventos de scroll
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveByVisibility();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => updateActiveByVisibility());

  // inicial
  updateActiveByVisibility();
});
