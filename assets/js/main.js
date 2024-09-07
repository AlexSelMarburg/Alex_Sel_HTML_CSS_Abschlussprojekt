"use strict";

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 250) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

function setRisizeBtnPosition() {
  const scrollUp = document.getElementById("scroll-up");
  const pageWrapperWidth = document.querySelector(".page-wrapper").offsetWidth;
  const viewportWidth = window.innerWidth;

  scrollUp.style.right = `${(viewportWidth - pageWrapperWidth) / 2 + 20}px`;
}

window.addEventListener("resize", (event) => {
  setRisizeBtnPosition();
});

window.addEventListener("load", (event) => {
  setRisizeBtnPosition();
});

/*==================== DARK LIGHT THEME TOGGEL====================*/

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const themeBtn = document.querySelector("[data-theme-toggle]");

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

function setThemeBtnIcon(theme) {
  if (theme === "dark") {
    themeBtn.classList.remove("ri-moon-line");
    themeBtn.classList.add("ri-sun-line");
  } else {
    themeBtn.classList.add("ri-moon-line");
    themeBtn.classList.remove("ri-sun-line");
  }

  document.querySelector("html").setAttribute("data-theme", theme);
}
setThemeBtnIcon(currentThemeSetting);

themeBtn.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  setThemeBtnIcon(newTheme);

  document.querySelector("html").setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  currentThemeSetting = newTheme;
});

// ---orevent-form-submit----
const form = document.querySelector("#contact-container form");

form.addEventListener("submit", (e) => e.preventDefault());

// ---animation---settingd

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    delay: 150,
  });
});
