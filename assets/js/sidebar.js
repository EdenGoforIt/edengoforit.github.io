(function () {
  var toggles = document.querySelectorAll("[data-sidebar-toggle]");

  toggles.forEach(function (toggle) {
    var targetId = toggle.getAttribute("aria-controls");
    var target = targetId ? document.getElementById(targetId) : null;

    if (!target) {
      return;
    }

    toggle.addEventListener("click", function () {
      var shouldExpand = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(shouldExpand));
      toggle.setAttribute("aria-label", (shouldExpand ? "Collapse" : "Expand") + " " + toggle.nextElementSibling.textContent.trim() + " pages");
      target.hidden = !shouldExpand;
    });
  });
})();
