/**
 * ==========================================================================
 * 🌐 FILINGS4U MAIN INTEGRATION APPLICATION ENGINE
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigationEngine();
  initDynamicBlogSync();
});

/**
 * 1. NAVIGATION DRAWER & ACCORDION ACTION HANDLERS
 */
function initNavigationEngine() {
  const mobileToggleBtn = document.querySelector(".mobile-toggle-btn");
  const navLinksDrawer = document.querySelector(".nav-links");
  const dropdownTriggers = document.querySelectorAll(".nav-item-dropdown > a");

  if (mobileToggleBtn && navLinksDrawer) {
    mobileToggleBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      navLinksDrawer.classList.toggle("active");

      if (navLinksDrawer.classList.contains("active")) {
        mobileToggleBtn.textContent = "✕";
        mobileToggleBtn.setAttribute("aria-expanded", "true");
      } else {
        mobileToggleBtn.textContent = "☰";
        mobileToggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      if (window.innerWidth < 992) {
        event.preventDefault();
        event.stopPropagation();

        const targetDropdown = trigger.closest(".nav-item-dropdown");
        
        if (targetDropdown) {
          document.querySelectorAll(".nav-item-dropdown").forEach((item) => {
            if (item !== targetDropdown) {
              item.classList.remove("active-toggle");
            }
          });
          targetDropdown.classList.toggle("active-toggle");
        }
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (navLinksDrawer && navLinksDrawer.classList.contains("active")) {
      if (!navLinksDrawer.contains(event.target) && !mobileToggleBtn.contains(event.target)) {
        navLinksDrawer.classList.remove("active");
        mobileToggleBtn.textContent = "☰";
        mobileToggleBtn.setAttribute("aria-expanded", "false");
      }
    }
  });
}

/**
 * 2. INITIALIZE SUPABASE DATA CONNECTION CHANNELS
 */
async function initDynamicBlogSync() {
  const targetContainer = document.getElementById("public-homepage-blog-grid-target");
  if (!targetContainer) return;

  // Poll window namespace references safely for asynchronous script confirmation
  const connectionCheckInterval = setInterval(async () => {
    if (window.supabase) {
      clearInterval(connectionCheckInterval);
      await fetchHomepageArticles(targetContainer);
    }
  }, 100);

  setTimeout(() => clearInterval(connectionCheckInterval), 4000);
}

/**
 * 3. ASYNCHRONOUS ENGINE FOR BLOG LAYOUT HOOK INJECTION
 */
async function fetchHomepageArticles(container) {
  try {
    const { data: articles, error } = await window.supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);

    if (error) throw error;

    // FIXED: Correctly flushes away the #blog-loading-spinner placeholder frame block element out of view
    const loadingSpinner = document.getElementById("blog-loading-spinner");
    if (loadingSpinner) {
      loadingSpinner.remove();
    }

    if (!articles || articles.length === 0) {
      container.innerHTML = '<div class="blog-fallback-msg">No recent updates found.</div>';
      return;
    }

    // Append custom record objects purely via native clean classes matching site-elite.css definitions
    articles.forEach((item) => {
      const dateFormatted = new Date(item.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });

      const postCard = document.createElement("a");
      postCard.className = "blog-card";
      postCard.href = `article.html?slug=${item.slug}`;

      postCard.innerHTML = `
        <div class="blog-card-img" style="background-image: url('${item.image_url || 'images/blog-fallback.jpg'}');"></div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="blog-card-category">${item.category}</span>
            <span class="blog-card-date">${dateFormatted}</span>
          </div>
          <h3 class="blog-card-title">${item.title}</h3>
          <p class="blog-card-summary">${item.summary || 'Click to view full insight data analysis report...'}</p>
        </div>
      `;
      container.appendChild(postCard);
    });
  } catch (err) {
    console.error("Database sync operation caught a failure:", err);
    container.innerHTML = '<div class="blog-error-msg">Unable to display recent updates.</div>';
  }
}
