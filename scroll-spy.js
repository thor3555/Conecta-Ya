document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Scroll Smooth
  // =========================
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 70, // ajustar según altura del navbar
        behavior: "smooth"
      });

      // cerrar menú en móviles
      const navbarCollapse = document.getElementById("navbarNavAltMarkup");
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
        bsCollapse.hide();
      }
    });
  });

  // =========================
  // Scroll Spy
  // =========================
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // ajustar según altura del navbar
      const sectionHeight = section.offsetHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // =========================
  // Cerrar menú al hacer click fuera
  // =========================
  document.addEventListener("click", function(event) {
    const navbarCollapse = document.getElementById("navbarNavAltMarkup");
    const navbarToggler = document.querySelector(".navbar-toggler");

    if (
      navbarCollapse.classList.contains("show") &&
      !navbarCollapse.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  });
});
