/**
 * filings4u Global Navigation Interactions
 * Main website navigation / mobile drawer
 */
(function () {
  "use strict";

  function bind() {
    const trigger = document.getElementById("mobile-menu-trigger");
    const drawer = document.getElementById("nav-links-container");

    if (!trigger || !drawer || trigger.dataset.bound === "true") return;

    function close() {
      drawer.classList.remove("active", "mobile-active");
      document.body.classList.remove("nav-open");
      trigger.setAttribute("aria-expanded", "false");

      drawer.querySelectorAll(".nav-item-dropdown").forEach(function (item) {
        item.classList.remove("mobile-open", "active-toggle");
      });
    }

    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", "nav-links-container");

    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const open = !drawer.classList.contains("active");

      drawer.classList.toggle("active", open);
      drawer.classList.toggle("mobile-active", open);
      document.body.classList.toggle("nav-open", open);
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    drawer.addEventListener("click", function (event) {
      const toggle = event.target.closest(".dropdown-toggle");

      if (toggle && window.innerWidth <= 1024) {
        event.preventDefault();

        const parent = toggle.closest(".nav-item-dropdown");
        if (!parent) return;

        drawer.querySelectorAll(".nav-item-dropdown").forEach(function (item) {
          if (item !== parent) {
            item.classList.remove("mobile-open", "active-toggle");
          }
        });

        parent.classList.toggle("mobile-open");
        parent.classList.toggle("active-toggle");
        return;
      }

      if (
        event.target.closest("a") &&
        window.innerWidth <= 1024 &&
        !event.target.closest(".dropdown-toggle")
      ) {
        close();
      }
    });

    document.addEventListener("click", function (event) {
      if (
        window.innerWidth <= 1024 &&
        drawer.classList.contains("active") &&
        !drawer.contains(event.target) &&
        !trigger.contains(event.target)
      ) {
        close();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && drawer.classList.contains("active")) {
        close();
        trigger.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) close();
    });

    trigger.dataset.bound = "true";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(bind, 0);
    });
  } else {
    setTimeout(bind, 0);
  }

  document.addEventListener("filings4u:navigation-rendered", bind);

  const observer = new MutationObserver(bind);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  setTimeout(function () {
    observer.disconnect();
  }, 3000);
})();
