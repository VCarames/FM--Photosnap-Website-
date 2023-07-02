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

const checkbox = document.querySelector(".toggle__checkbox");
const priceMonth = document.querySelectorAll(".price__monthly");
const priceYear = document.querySelectorAll(".price__yearly");

const monthlyText = document.querySelectorAll(".monthly__text");
const yearlyText = document.querySelectorAll(".yearly__text");

// Check the value in localStorage and update the checkbox accordingly
const savedCheckboxState = localStorage.getItem("checkboxState");
if (savedCheckboxState === "true") {
  checkbox.checked = true;
  showYearlyPrices();
} else {
  checkbox.checked = false;
  showMonthlyPrices();
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    showYearlyPrices();
  } else {
    showMonthlyPrices();
  }

  // Store the state of the checkbox in localStorage
  localStorage.setItem("checkboxState", checkbox.checked);
});

function showYearlyPrices() {
  priceYear.forEach((price) => price.classList.remove("hidden"));
  yearlyText.forEach((price) => price.classList.remove("hidden"));

  priceMonth.forEach((price) => price.classList.add("hidden"));
  monthlyText.forEach((price) => price.classList.add("hidden"));
}

function showMonthlyPrices() {
  priceYear.forEach((price) => price.classList.add("hidden"));
  yearlyText.forEach((price) => price.classList.add("hidden"));

  priceMonth.forEach((price) => price.classList.remove("hidden"));
  monthlyText.forEach((price) => price.classList.remove("hidden"));
}
