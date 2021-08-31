const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

menuButton.addEventListener("click", ()=> {
  menu.classList.add("is-active");
  menuCloseButton.add("is-active");
});
menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("is-active");
  menuCloseButton.remove("is-active");
});