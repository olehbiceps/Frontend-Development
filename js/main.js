const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu--close");

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list--open");
    menuShadow.classList.toggle("menu--open");
});
menuClose.addEventListener("click", () => {
    menuList.classList.remove("menu__list--open");
    menuShadow.classList.remove("menu--open");
});

// const menuBtn = document.querySelector(".menubtn");
// const menuClose = document.querySelector(".menuclose-btn");
// const menuList = document.querySelector(".menulist");
// const menuShadow = document.querySelector(".menu--close");

// function isMobileView() {
//     return window.innerWidth <= 800;
// }

// menuBtn.addEventListener("click", () => {
//     menuList.classList.toggle("menulist--open");
//     if (isMobileView()) {
//         menuShadow.classList.toggle("menu--open");
//     }
// });

// menuClose.addEventListener("click", () => {
//     menuList.classList.remove("menulist--open");
//     menuShadow.classList.remove("menu--open");
// });

// menuShadow.addEventListener("click", (event) => {
//     if (event.target === menuShadow) {
//         menuList.classList.remove("menulist--open");
//         menuShadow.classList.remove("menu--open");
//     }
// });

// window.addEventListener("resize", () => {
//     if (!isMobileView()) {
//         menuShadow.classList.remove("menu--open");
//     }
// });
