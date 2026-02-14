  const header = document.querySelector('.mog-header');
  const nav = document.getElementById('mogNav');
  const toggle = document.getElementById('mogNavToggle');

  // Transparent â†’ solid on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle mobile menu
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    toggle.classList.toggle('active');
  });

  // Auto-close when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      toggle.classList.remove('active');
    });
  });

  // Auto-close when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      nav.classList.remove('show');
      toggle.classList.remove('active');
    }
  });

