const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("menu-open");
});

// Darkmode button 

const themeCheck = document.getElementById('theme-toggle');
const root = document.documentElement;

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
  root.classList.add('dark-mode');
  themeCheck.checked = true;
}

themeCheck.addEventListener('change', (e) => {
  const isON = e.currentTarget.checked;
  if (isON) {
    root.classList.add('dark-mode');
  } else {
    root.classList.remove('dark-mode');
  }
});

const btnHero = document.querySelector(".btn-hero");
btnHero.addEventListener("click", () => {
  btnHero.style.backgroundColor = "#8AB4E6";
  btnHero.style.color = "#153964";
});
