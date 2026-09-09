(function () {
  "use strict";

  var button = document.querySelector("[data-nav-button]");
  var nav = document.querySelector("[data-nav]");
  if (!button || !nav) return;

  var openLabel = button.querySelector("[data-nav-open]");
  var closeLabel = button.querySelector("[data-nav-close]");

  function isDesktop() {
    return window.matchMedia("(min-width: 800px)").matches;
  }

  function isOpen() {
    return button.getAttribute("aria-expanded") === "true";
  }

  function setOpen(open) {
    var expanded = open && !isDesktop();
    button.setAttribute("aria-expanded", expanded ? "true" : "false");
    document.body.classList.toggle("nav-open", expanded);
    if (openLabel) openLabel.hidden = expanded;
    if (closeLabel) closeLabel.hidden = !expanded;
  }

  function closeNav(returnFocus) {
    if (!isOpen()) return;
    setOpen(false);
    if (returnFocus) button.focus();
  }

  button.addEventListener("click", function () {
    setOpen(!isOpen());
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (isDesktop() || !isOpen()) return;
    event.preventDefault();
    closeNav(true);
  });

  document.addEventListener("click", function (event) {
    if (isDesktop() || !isOpen()) return;
    if (button.contains(event.target) || nav.contains(event.target)) return;
    closeNav(false);
  });

  nav.addEventListener("keydown", function (event) {
    if (isDesktop() || !isOpen()) return;
    if (event.key !== "Tab") return;

    var links = nav.querySelectorAll("a");
    if (!links.length) return;

    var first = links[0];
    var last = links[links.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      button.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      button.focus();
    }
  });

  button.addEventListener("keydown", function (event) {
    if (isDesktop() || !isOpen()) return;
    if (event.key !== "Tab") return;
    var links = nav.querySelectorAll("a");
    if (!links.length) return;
    event.preventDefault();
    if (event.shiftKey) {
      links[links.length - 1].focus();
    } else {
      links[0].focus();
    }
  });

  var desktopQuery = window.matchMedia("(min-width: 800px)");
  function onBreakpoint(event) {
    if (event.matches) setOpen(false);
  }

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", onBreakpoint);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(onBreakpoint);
  }

  setOpen(false);
})();
