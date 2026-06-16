(function () {
  var storageKey = "edengoforit-theme";
  var root = document.documentElement;

  function readSavedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  function getPreferredTheme() {
    var savedTheme = readSavedTheme();
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    saveTheme(theme);

    var button = document.querySelector("[data-theme-toggle]");
    if (button) {
      var nextTheme = theme === "dark" ? "light" : "dark";
      button.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
      button.setAttribute("title", "Switch to " + nextTheme + " theme");
      button.querySelector("[data-theme-toggle-label]").textContent = theme === "dark" ? "Dark" : "Light";
    }
  }

  setTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    setTheme(root.getAttribute("data-theme") || getPreferredTheme());

    var button = document.querySelector("[data-theme-toggle]");
    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      var currentTheme = root.getAttribute("data-theme") || "light";
      setTheme(currentTheme === "dark" ? "light" : "dark");
    });
  });
})();
