// Small interactions for the portfolio.
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile navigation after selecting a section.
document.querySelectorAll("#navLinks .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navLinks");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Reveal sections gently as they enter the viewport.
const revealItems = document.querySelectorAll(".skill-card, .project-card, .mini-project, .timeline-item, .about-note");
revealItems.forEach((item) => item.classList.add("reveal"));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));
