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
