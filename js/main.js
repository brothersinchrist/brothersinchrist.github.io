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
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  if (!toggle || !nav) return;

  // Toggle open/close when hamburger is tapped
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close menu when any link is clicked
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

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
