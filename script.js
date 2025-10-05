const menuBtn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
});

const btnHero = document.querySelector(".btn-hero");
btnHero.addEventListener("click", () => {
  btnHero.style.backgroundColor = "#8AB4E6";
  btnHero.style.color = "#153964";
});