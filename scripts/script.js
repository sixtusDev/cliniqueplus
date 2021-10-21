const navLinks = document.querySelectorAll(".nav__link-list-item");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "lis":
        document.querySelector("#lis-sub").classList.toggle("hide");
        document.querySelector("#right-icon-lis").classList.toggle("hide");
        document.querySelector("#down-icon-lis").classList.toggle("hide");
        break;
      case "fo":
        document.querySelector("#fo-sub").classList.toggle("hide");
        document.querySelector("#right-icon-fo").classList.toggle("hide");
        document.querySelector("#down-icon-fo").classList.toggle("hide");
        break;
      case "his":
        document.querySelector("#his-sub").classList.toggle("hide");
        document.querySelector("#right-icon-his").classList.toggle("hide");
        document.querySelector("#down-icon-his").classList.toggle("hide");
        break;
      default:
        return;
    }
  });
});

const userEl = document.querySelector(".user");
userEl.addEventListener("mouseover", () => {
  document.querySelector(".user__menu").classList.remove("hide");
  document.querySelector("#right-icon-user-menu").classList.add("hide");
  document.querySelector("#down-icon-user-menu").classList.remove("hide");
});

userEl.addEventListener("mouseout", () => {
  document.querySelector(".user__menu").classList.add("hide");
  document.querySelector("#right-icon-user-menu").classList.remove("hide");
  document.querySelector("#down-icon-user-menu").classList.add("hide");
});

const menuIconEl = document.querySelector(".menu__icon");
menuIconEl.addEventListener("click", () => {
  document
    .querySelector(".page__left")
    .classList.toggle("toggle-page-left-width");
  document
    .querySelector(".page__right")
    .classList.toggle("toggle-page-right-width");
});

document.querySelector(".search__icon").addEventListener("click", () => {
  document.querySelector(".search__input").focus();
});
