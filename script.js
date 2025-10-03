const menuBtn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
});


const button = document.getElementById('toggle-darkmode');
if (button) {
  button.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch(e) {}
    button.setAttribute('aria-pressed', next === 'dark');
    button.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}