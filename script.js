const menuBtn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const body = document.body;

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
  body.style.overflow = navbar.classList.contains('menu-open') ? 'hidden' : '';
});

// Mobile dropdown toggle
const dropdownItems = document.querySelectorAll('.has-dropdown');
dropdownItems.forEach(item => {
  const link = item.querySelector('.nav-link');
  link.addEventListener('click', (e) => {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      item.classList.toggle('active');
    }
  });
});

const btnHero = document.querySelector(".btn-hero");
btnHero.addEventListener("click", () => {
  btnHero.style.backgroundColor = "#8AB4E6";
  btnHero.style.color = "#153964";
});

const originalBgColor = "#153964";
const originalTextColor = "#fff";

btnHero.addEventListener("mouseleave", () => {
    btnHero.style.backgroundColor = originalBgColor;
    btnHero.style.color = originalTextColor;
});