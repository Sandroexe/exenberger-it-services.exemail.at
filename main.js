// Mobile menu toggle
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger) burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

// Active nav link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = document.getElementById('toast');
    t.classList.add('show');
    form.reset();
    setTimeout(() => t.classList.remove('show'), 3500);
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
