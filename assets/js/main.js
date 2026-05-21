/**
 * ==========================================================================
 * 🌐 FILINGS4U MAIN INTEGRATION APPLICATION ENGINE (ANTI-COLLISION BUILD)
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
        // High-sensitivity pointer handle overrides for clean touch interface execution
        mobileToggleBtn.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            // 🚀 RE-LOCKED FOR MOBILE.CSS COMPLIANCE: Toggle nav-open state on body element
            document.body.classList.toggle("nav-open");
            
            // Sync status flags based on the body state
            if (document.body.classList.contains("nav-open")) {
                mobileToggleBtn.textContent = "✕";
                mobileToggleBtn.setAttribute("aria-expanded", "true");
                console.log("📱 Mobile navigation slide-drawer menu revealed.");
            } else {
                mobileToggleBtn.textContent = "☰";
                mobileToggleBtn.setAttribute("aria-expanded", "false");
                console.log("📱 Mobile navigation slide-drawer menu hidden.");
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

    // Global background document window tap dismiss handle
    document.addEventListener("click", (event) => {
        // 🚀 RE-LOCKED FOR MOBILE.CSS COMPLIANCE: Check body class instead
        if (document.body.classList.contains("nav-open")) {
            const isClickInsideMenu = navLinksDrawer.contains(event.target);
            const isClickOnToggleButton = mobileToggleBtn && mobileToggleBtn.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggleButton) {
                // Remove nav-open to hide drawer smoothly
                document.body.classList.remove("nav-open");
                if (mobileToggleBtn) {
                    mobileToggleBtn.textContent = "☰";
                    mobileToggleBtn.setAttribute("aria-expanded", "false");
                }
                console.log("📱 Mobile drawer reset via external viewport canvas tap dismiss.");
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

    // Correctly flushes away the loading spinner placeholder block element out of view
    const loadingSpinner = document.getElementById("blog-loading-spinner");
    if (loadingSpinner) {
      loadingSpinner.remove();
    }

    if (!articles || articles.length === 0) {
      container.innerHTML = '<div class="blog-fallback-msg">No recent updates found.</div>';
      return;
    }

    container.innerHTML = ""; // Clear active initialization text frames securely

    // Append custom record objects purely via native clean classes matching site-elite.css definitions
    articles.forEach((item) => {
      const dateFormatted = new Date(item.created_at).toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric"
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

/**
 * 🔄 MOBILE ACCORDION COMPONENT HELPER TRIGGER
 * Fires directly via your HTML inline 'onclick' parameters on smartphone screens
 */
function toggleMobileDropdown(event, anchorElement) {
    if (window.innerWidth < 992) {
        event.preventDefault();
        event.stopPropagation();
        
        // Find the parent dropdown box wrapper container
        const targetDropdown = anchorElement.closest(".nav-item-dropdown");
        
        if (targetDropdown) {
            // Force-close all OTHER open mobile menus to prevent layouts overlaying
            document.querySelectorAll(".nav-item-dropdown").forEach((item) => {
                if (item !== targetDropdown) {
                    item.classList.remove("active-toggle");
                }
            });
            
            // Toggle the current element's open layout drawer state
            targetDropdown.classList.toggle("active-toggle");
            console.log("📱 Mobile dropdown accordion toggled state changed.");
        }
    }
}
