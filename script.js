const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const year = document.querySelector(".year");

openBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});

year.textContent = new Date().getFullYear();
