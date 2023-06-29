const navToggle = document.querySelector(".header__nav-toggle");
const navMenu = document.querySelector(".header__nav-menu");

function toggleNav() {
  if (this.getAttribute("aria-expanded") === "true") {
    this.setAttribute("aria-expanded", "false");
    document.body.classList.remove("disable-scroll");
  } else {
    this.setAttribute("aria-expanded", "true");
    document.body.classList.add("disable-scroll");
  }
}

function closeNavOnEscape(event) {
  if (event.key === "Escape") {
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("disable-scroll");
  }
}

function closeNavOnClickOutside(event) {
  if (!navMenu.contains(event.target) && event.target !== navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("disable-scroll");
  }
}

function closeNavOnFocusOut(event) {
  if (!navMenu.contains(event.relatedTarget) && event.target !== navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("disable-scroll");
  }
}

navToggle.addEventListener("click", toggleNav);
document.addEventListener("keydown", closeNavOnEscape);
document.addEventListener("click", closeNavOnClickOutside);
navMenu.addEventListener("focusout", closeNavOnFocusOut);
