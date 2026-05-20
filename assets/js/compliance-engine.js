/**
 * ==========================================================================
 * 📚 COMPLIANCE HUB KNOWLEDGE BASE LOGIC ENGINE
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initAccordionMechanics();
  initLiveKBSearch();
  initSidebarActiveTracker();
});

/**
 * 1. TOGGLE ACCORDION COLLAPSE ENTRIES
 */
function initAccordionMechanics() {
  const accordionTriggers = document.querySelectorAll(".kb-trigger-bar");

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parentItem = trigger.closest(".kb-accordion-item");
      if (!parentItem) return;

      // Toggle current container visibility state
      parentItem.classList.toggle("is-expanded");
    });
  });
}

/**
 * 2. REAL-TIME CONTENT BLOCKS FILTER ENGINE
 */
function initLiveKBSearch() {
  const searchInput = document.getElementById("kbSearchInput");
  const accordionItems = document.querySelectorAll(".kb-accordion-item");
  const topicGroups = document.querySelectorAll(".kb-article-group");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const queryText = e.target.value.toLowerCase().trim();

    accordionItems.forEach((item) => {
      const headingText = item.querySelector("h4").textContent.toLowerCase();
      const bodyText = item.querySelector(".kb-panel-body").textContent.toLowerCase();

      if (queryText === "") {
        // Reset default layout values when clear
        item.style.display = "block";
        item.classList.remove("is-expanded");
      } else if (headingText.includes(queryText) || bodyText.includes(queryText)) {
        // Show item and expand accordion to reveal text highlights matching keyword
        item.style.display = "block";
        item.classList.add("is-expanded");
      } else {
        // Hide item completely if out of bounds
        item.style.display = "none";
        item.classList.remove("is-expanded");
      }
    });

    // Clean up visibility layers on parent category wrappers if they contain zero matches
    topicGroups.forEach((group) => {
      const visibleChildren = Array.from(group.querySelectorAll(".kb-accordion-item"))
        .filter(item => item.style.display !== "none");

      if (visibleChildren.length === 0 && queryText !== "") {
        group.style.display = "none";
      } else {
        group.style.display = "block";
      }
    });
  });
}

/**
 * 3. SIDEBAR CATEGORY MENU SCROLL ACTIVATOR
 */
function initSidebarActiveTracker() {
  const sideLinks = document.querySelectorAll(".kb-side-link");

  sideLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      sideLinks.forEach(l => l.classList.remove("active-topic"));
      link.classList.add("active-topic");
    });
  });
}
