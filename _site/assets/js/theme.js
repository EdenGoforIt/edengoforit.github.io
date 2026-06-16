(function () {
  var storageKey = "edengoforit-theme";
  var root = document.documentElement;

  function readCookieTheme() {
    var match = document.cookie.match(new RegExp("(^| )" + storageKey + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
  }

  function saveCookieTheme(theme) {
    document.cookie = storageKey + "=" + encodeURIComponent(theme) + "; path=/; max-age=31536000; SameSite=Lax";
  }

  function readSavedTheme() {
    try {
      return localStorage.getItem(storageKey) || readCookieTheme();
    } catch (error) {
      return readCookieTheme();
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
    }

    saveCookieTheme(theme);
  }

  function getPreferredTheme() {
    var savedTheme = readSavedTheme();
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return "dark";
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
