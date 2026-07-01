const whatsappNumber = "5500000000000";

const sections = document.querySelectorAll(".fade-section");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".listas");
const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".pesq");
const searchableItems = document.querySelectorAll(".searchable");
const contactForm = document.querySelector(".contact-form");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.16 }
);

sections.forEach((section) => observer.observe(section));

menuToggle?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menu.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filterContent(term) {
  const normalizedTerm = normalizeText(term.trim());

  searchableItems.forEach((item) => {
    const matches = normalizeText(item.textContent).includes(normalizedTerm);
    item.classList.toggle("hidden-by-search", normalizedTerm && !matches);
  });
}

searchInput?.addEventListener("input", (event) => {
  filterContent(event.target.value);
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstMatch = document.querySelector(
    ".searchable:not(.hidden-by-search)"
  );

  firstMatch?.scrollIntoView({ behavior: "smooth", block: "center" });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  const text = [
    "Olá, quero fazer um pedido na Trivox.",
    `Nome: ${name}`,
    `Contato: ${email}`,
    `Produto desejado: ${message}`,
  ].join("\n");

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener"
  );
});
