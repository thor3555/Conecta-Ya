document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navbarNavAltMarkup");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // =========================
  // Scroll Suave
  // =========================
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 70, // altura navbar
        behavior: "smooth"
      });

      // cerrar menú en móviles
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
        bsCollapse.hide();
      }
    });
  });

  // =========================
  // Cerrar menú al hacer clic fuera
  // =========================
  document.addEventListener("click", event => {
    if (
      navbarCollapse.classList.contains("show") &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  });

  // =========================
  // Scroll Spy más confiable
  // =========================
  const observer = new IntersectionObserver(
    entries => {
      let visibleSections = [];

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleSections.push({
            id: entry.target.getAttribute("id"),
            ratio: entry.intersectionRatio
          });
        }
      });

      // limpiar todos
      navLinks.forEach(link => link.classList.remove("active"));

      if (visibleSections.length > 0) {
        // Activar la sección con más visibilidad
        visibleSections.sort((a, b) => b.ratio - a.ratio);
        const current = visibleSections[0].id;

        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
      }
    },
    {
      rootMargin: "-70px 0px -70px 0px", // compensa navbar
      threshold: [0.3, 0.5, 0.7] // revisa distintas proporciones
    }
  );

  sections.forEach(section => observer.observe(section));
});
