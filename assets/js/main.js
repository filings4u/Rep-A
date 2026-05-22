/**
 * ==========================================================================
 * 🌐 FILINGS4U MAIN INTEGRATION APPLICATION ENGINE (ANTI-COLLISION BUILD)
 * ==========================================================================
 */

// 🔄 FIXED: Supabase v2 compliance client initialization block
const supabaseUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';

// Instantiates the global object so your downstream function scopes execute flawlessly
if (typeof supabase !== 'undefined' && supabase.createClient) {
  window.supabase = supabase.createClient(supabaseUrl, supabaseKey);
}

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

  // Create and inject the Navy "X" Close Button dynamically inside the white drawer if it doesn't exist
  if (navLinksDrawer && !document.querySelector(".mobile-close-btn")) {
    const closeBtn = document.createElement("button");
    closeBtn.className = "mobile-close-btn";
    closeBtn.innerHTML = "✕";
    closeBtn.setAttribute("aria-label", "Close Menu");
    navLinksDrawer.appendChild(closeBtn);

    // Event listener for the Navy X Close Button
    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeMobileMenu();
    });
  }

  // Helper function to close the menu cleanly
  function closeMobileMenu() {
    document.body.classList.remove("nav-open");
    if (navLinksDrawer) {
      navLinksDrawer.classList.remove("active");
    }
    if (mobileToggleBtn) {
      mobileToggleBtn.setAttribute("aria-expanded", "false");
    }
    console.log("📱 Mobile navigation slide-drawer menu hidden.");
  }

  if (mobileToggleBtn && navLinksDrawer) {
    mobileToggleBtn.addEventListener("click", (event) => {
      event.preventDefault();
      // FIXED: Prevents the document click listener from instantly firing and closing the menu
      event.stopPropagation();
      event.stopImmediatePropagation(); 
      
      // Toggle CSS hook classes on the body and nav panel
      document.body.classList.toggle("nav-open");
      navLinksDrawer.classList.toggle("active");

      if (document.body.classList.contains("nav-open")) {
        mobileToggleBtn.setAttribute("aria-expanded", "true");
        console.log("📱 Mobile navigation slide-drawer menu revealed.");
      } else {
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
    if (document.body.classList.contains("nav-open")) {
      const isClickInsideMenu = navLinksDrawer && navLinksDrawer.contains(event.target);
      const isClickOnToggleButton = mobileToggleBtn && mobileToggleBtn.contains(event.target);
      
      // Only close if the click was genuinely outside both elements
      if (!isClickInsideMenu && !isClickOnToggleButton) {
        closeMobileMenu();
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

    articles.forEach((item) => {
      const dateFormatted = new Date(item.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
      const postCard = document.createElement("a");
      postCard.className = "blog-card price-card wizard-card icon-box faq-item";
      postCard.href = `article.html?slug=${item.slug}`;
      postCard.innerHTML = `
        <div class="blog-card-img" style="background-image: url('${item.image_url || 'images/blog-fallback.jpg'}'); height: 180px; width: 100%; background-size: cover; background-position: center; border-radius: 8px 8px 0 0;"></div>
        <div class="blog-card-body" style="padding: 24px; text-align: left; background: #ffffff;">
          <div class="blog-card-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span class="blog-card-category" style="background: #10b981; color: #ffffff; font-size: 0.7rem; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase;">${item.category}</span>
            <span class="blog-card-date" style="font-size: 0.75rem; color: #94a3b8; font-weight: 600;">${dateFormatted}</span>
          </div>
          <h3 class="blog-card-title" style="margin: 0 0 10px 0; font-size: 1.2rem; font-weight: 700; color: #0a1f44; line-height: 1.4;">${item.title}</h3>
          <p class="blog-card-summary" style="margin: 0; font-size: 0.9rem; color: #64748b; line-height: 1.5;">${item.summary || 'Click to view full insight data analysis report...'}</p>
        </div>
      `;
      container.appendChild(postCard);
    });
  } catch (err) {
    console.error("Database sync operation caught a failure:", err);
    container.innerHTML = '<div class="blog-error-msg">Unable to display recent updates.</div>';
  }
}

// 🚫 REMOVED PREVIOUS JQUERYS INLINE DISPLAY MANIPULATION TO PREVENT ANIMATION CONFLICTS WITH SLIDE PANEL
