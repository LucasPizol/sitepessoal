const headerNav = document.querySelector(".header-div nav");
const headerMenu = document.querySelector(".menu");

AOS.init()

headerMenu.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  headerMenu.classList.toggle("activeMenu");
});
