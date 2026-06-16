(function () {
  var storageKey = "edengoforit-sidebar-open";
  var toggles = document.querySelectorAll("[data-sidebar-toggle]");
  var openFolders = [];

  function readOpenFolders() {
    try {
      var storedValue = localStorage.getItem(storageKey);
      var parsedValue = storedValue ? JSON.parse(storedValue) : [];

      return Array.isArray(parsedValue) ? parsedValue : [];
    } catch (error) {
      return [];
    }
  }

  function writeOpenFolders() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(openFolders));
    } catch (error) {
      return;
    }
  }

  function setExpanded(toggle, target, shouldExpand) {
    toggle.setAttribute("aria-expanded", String(shouldExpand));
    toggle.setAttribute("aria-label", (shouldExpand ? "Collapse" : "Expand") + " " + toggle.nextElementSibling.textContent.trim() + " pages");
    target.hidden = !shouldExpand;
  }

  openFolders = readOpenFolders();

  toggles.forEach(function (toggle) {
    var targetId = toggle.getAttribute("aria-controls");
    var target = targetId ? document.getElementById(targetId) : null;

    if (!target) {
      return;
    }

    if (openFolders.indexOf(targetId) !== -1) {
      setExpanded(toggle, target, true);
    }

    toggle.addEventListener("click", function () {
      var shouldExpand = toggle.getAttribute("aria-expanded") !== "true";
      setExpanded(toggle, target, shouldExpand);

      if (shouldExpand && openFolders.indexOf(targetId) === -1) {
        openFolders.push(targetId);
      }

      if (!shouldExpand) {
        openFolders = openFolders.filter(function (openFolder) {
          return openFolder !== targetId;
        });
      }

      writeOpenFolders();
    });
  });
})();
