const openBtn = document.querySelector(".open-nav-btn");
const closeBtn = document.querySelector(".close-nav-btn");
const header = document.querySelector(".header");

function openMenu() {
  header.classList.add("active");
}

function closeMenu() {
  header.classList.remove("active");
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
