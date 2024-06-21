const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.getElementById(".mobile-menu");

openBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});
