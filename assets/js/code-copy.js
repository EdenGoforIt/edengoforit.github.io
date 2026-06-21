(function () {
  function getCodeText(pre) {
    var code = pre.querySelector("code");
    return code ? code.innerText : pre.innerText;
  }

  function setButtonState(button, label) {
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.querySelector("[data-code-copy-label]").textContent = label;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      document.body.removeChild(textarea);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var blocks = document.querySelectorAll(".content pre");

    blocks.forEach(function (pre) {
      if (pre.querySelector("[data-code-copy]")) {
        return;
      }

      var button = document.createElement("button");
      button.className = "code-copy";
      button.type = "button";
      button.setAttribute("data-code-copy", "");
      button.innerHTML = '<span class="code-copy__icon" aria-hidden="true"></span><span class="code-copy__label" data-code-copy-label>Copy</span>';
      setButtonState(button, "Copy code");

      button.addEventListener("click", function () {
        copyText(getCodeText(pre)).then(function () {
          setButtonState(button, "Copied");
          button.classList.add("is-copied");

          window.setTimeout(function () {
            setButtonState(button, "Copy code");
            button.classList.remove("is-copied");
          }, 1600);
        }).catch(function () {
          setButtonState(button, "Copy failed");
          button.classList.add("is-error");

          window.setTimeout(function () {
            setButtonState(button, "Copy code");
            button.classList.remove("is-error");
          }, 1600);
        });
      });

      pre.appendChild(button);
    });
  });
})();
