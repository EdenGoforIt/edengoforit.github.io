(function () {
  var openButton = document.querySelector("[data-search-open]");
  var backdrop = document.querySelector("[data-search-backdrop]");
  var closeButton = document.querySelector("[data-search-close]");
  var input = document.querySelector("[data-search-input]");
  var results = document.querySelector("[data-search-results]");
  var indexNode = document.getElementById("site-search-index");
  var pages = [];
  var activeIndex = 0;

  if (!openButton || !backdrop || !input || !results || !indexNode) {
    return;
  }

  try {
    pages = JSON.parse(indexNode.textContent).filter(function (page) {
      return page.url && page.url.indexOf("/assets/") !== 0;
    });
  } catch (error) {
    pages = [];
  }

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function pageText(page) {
    return normalize([page.title, page.description, page.path, page.content].join(" "));
  }

  function scorePage(page, query) {
    var title = normalize(page.title);
    var path = normalize(page.path);
    var description = normalize(page.description);
    var content = normalize(page.content);

    if (title === query) return 100;
    if (title.indexOf(query) !== -1) return 80;
    if (path.indexOf(query) !== -1) return 60;
    if (description.indexOf(query) !== -1) return 40;
    if (content.indexOf(query) !== -1) return 20;
    return 0;
  }

  function getMatches(query) {
    if (!query) {
      return pages.slice(0, 8);
    }

    return pages
      .map(function (page) {
        return {
          page: page,
          score: scorePage(page, query)
        };
      })
      .filter(function (result) {
        return result.score > 0 || pageText(result.page).indexOf(query) !== -1;
      })
      .sort(function (a, b) {
        return b.score - a.score || a.page.title.localeCompare(b.page.title);
      })
      .slice(0, 12)
      .map(function (result) {
        return result.page;
      });
  }

  function resultLabel(page) {
    return page.description || page.path || page.url;
  }

  function renderResults() {
    var query = normalize(input.value);
    var matches = getMatches(query);
    activeIndex = 0;

    if (!matches.length) {
      results.innerHTML = '<div class="search-results__empty">No matching pages</div>';
      return;
    }

    results.innerHTML = matches.map(function (page, index) {
      return [
        '<a class="search-result' + (index === activeIndex ? " is-active" : "") + '" role="option" data-search-result href="' + page.url + '">',
        '<span class="search-result__title">' + escapeHtml(page.title || page.path) + '</span>',
        '<span class="search-result__meta">' + escapeHtml(resultLabel(page)) + '</span>',
        '</a>'
      ].join("");
    }).join("");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setActiveResult(nextIndex) {
    var items = results.querySelectorAll("[data-search-result]");
    if (!items.length) return;

    items[activeIndex].classList.remove("is-active");
    activeIndex = (nextIndex + items.length) % items.length;
    items[activeIndex].classList.add("is-active");
    items[activeIndex].scrollIntoView({ block: "nearest" });
  }

  function openSearch() {
    backdrop.hidden = false;
    document.body.classList.add("is-search-open");
    input.value = "";
    renderResults();
    window.setTimeout(function () {
      input.focus();
    }, 0);
  }

  function closeSearch() {
    backdrop.hidden = true;
    document.body.classList.remove("is-search-open");
    openButton.focus();
  }

  function goToActiveResult() {
    var item = results.querySelectorAll("[data-search-result]")[activeIndex];
    if (item) {
      window.location.href = item.href;
    }
  }

  openButton.addEventListener("click", openSearch);
  closeButton.addEventListener("click", closeSearch);
  input.addEventListener("input", renderResults);

  backdrop.addEventListener("click", function (event) {
    if (event.target === backdrop) {
      closeSearch();
    }
  });

  document.addEventListener("keydown", function (event) {
    var target = event.target;
    var isTyping = target && ["INPUT", "TEXTAREA", "SELECT"].indexOf(target.tagName) !== -1;

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "f" && !isTyping) {
      event.preventDefault();
      openSearch();
      return;
    }

    if (backdrop.hidden) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeSearch();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveResult(activeIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveResult(activeIndex - 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      goToActiveResult();
    }
  });
})();

