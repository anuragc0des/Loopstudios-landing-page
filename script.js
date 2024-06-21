const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".closeBtn");
const mobileMenu = document.querySelector(".mobile-menu");

openBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});
