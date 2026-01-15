// ----------------------------
// PAGE INIT
// ----------------------------
window.pageInit = function() {
  initHamburger();
  startRotation();
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', adjustHeaderOffset, { passive: true });
  adjustHeaderOffset();
};

// ----------------------------
// DOMContentLoaded listener
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.pageInit === "function") window.pageInit();
});

// ----------------------------
// Hamburger
// ----------------------------
function initHamburger() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("navMenu");
  if (!toggle || !nav) return;

  // Toggle menu when hamburger clicked
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("active"); // optional if you want to animate bars
  });

  // Close menu when any nav link clicked
  const links = nav.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("active");
    });
  });
}

// Close menu if user navigates back/forward
window.addEventListener("pageshow", () => {
  const nav = document.getElementById("navMenu");
  const toggle = document.querySelector(".nav-toggle");
  if (nav) nav.classList.remove("open");
  if (toggle) toggle.classList.remove("active");
});

// ----------------------------
// Hero Rotating Text
// ----------------------------
const statements = [
  "Men called to lead their families and serve their country.",
  "Right conversations build strong leaders.",
  "Faith, responsibility, and love of country.",
  "Strong families build a strong nation.",
  "Growing as leaders under God."
];

function startRotation() {
  const el = document.getElementById("rotating-text");
  if (!el) return;
  let index = 0;
  setInterval(() => {
    el.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % statements.length;
      el.textContent = statements[index];
      el.style.opacity = 1;
    }, 800);
  }, 3500);
}

// ----------------------------
// Sticky Header + After Hero
// ----------------------------
function handleScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 10) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');

  const hero = document.querySelector('.hero');
  if (hero) {
    const headerBottom = header.getBoundingClientRect().bottom;
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom <= headerBottom) header.classList.add('after-hero');
    else header.classList.remove('after-hero');
  }
}

// ----------------------------
// Adjust header height (for fixed header)
// ----------------------------
function adjustHeaderOffset() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const h = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', h + 'px');
  document.body.style.paddingTop = h + 'px';
  handleScroll();
}
