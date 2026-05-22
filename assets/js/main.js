/** 
 * ========================================================================== 
 * 🌐 FILINGS4U MAIN INTEGRATION APPLICATION ENGINE (ANTI-COLLISION BUILD) 
 * ========================================================================== 
 */ 

const supabaseUrl = 'https://lrbimrlbskjweynxlgas.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU'; 

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
  const navLinksDrawer = document.querySelector(".nav-links"); 

  // Injects the clean close button icon into your menu drawer structure
  const verifyAndInjectCloseBtn = () => {
    if (navLinksDrawer && !document.querySelector(".mobile-close-btn")) { 
      const closeBtn = document.createElement("button"); 
      closeBtn.className = "mobile-close-btn"; 
      closeBtn.innerHTML = "✕"; 
      closeBtn.setAttribute("aria-label", "Close Menu"); 
      navLinksDrawer.insertBefore(closeBtn, navLinksDrawer.firstChild); 
    }
  };

  verifyAndInjectCloseBtn();

  function closeMobileMenu() { 
    document.body.classList.remove("nav-open"); 
    const toggle = document.getElementById("mobile-menu-trigger");
    if (navLinksDrawer) navLinksDrawer.classList.remove("active"); 
    if (toggle) toggle.setAttribute("aria-expanded", "false"); 
    console.log("📱 Mobile navigation menu collapsed."); 
  } 

  // EVENT DELEGATOR: Intercepts actions natively
  document.addEventListener("click", (event) => {
    const toggleBtn = event.target.closest("#mobile-menu-trigger");
    const closeBtn = event.target.closest(".mobile-close-btn");
    const dropdownTrigger = event.target.closest(".nav-item-dropdown > a");

    // TOGGLE MENU ACTIONS
    if (toggleBtn) {
      event.preventDefault();
      event.stopPropagation();
      
      document.body.classList.toggle("nav-open");
      if (navLinksDrawer) navLinksDrawer.classList.toggle("active");
      
      const isCurrentlyOpen = document.body.classList.contains("nav-open");
      toggleBtn.setAttribute("aria-expanded", isCurrentlyOpen ? "true" : "false");
      console.log("📱 Toggle clicked. Drawer active:", isCurrentlyOpen);
      return;
    }

    // CLOSE BUTTON ACTIONS
    if (closeBtn) {
      event.preventDefault();
      event.stopPropagation();
      closeMobileMenu();
      return;
    }

    // SUB-LEVEL ACCORDION TOGGLES
    if (dropdownTrigger) {
      // Only capture click behavior on mobile viewpoints
      if (window.innerWidth < 992) {
        event.preventDefault();
        event.stopPropagation();
        
        const parentElement = dropdownTrigger.closest(".nav-item-dropdown");
        if (parentElement) {
          // Close other open accordions
          document.querySelectorAll(".nav-item-dropdown").forEach((item) => {
            if (item !== parentElement) item.classList.remove("active-toggle");
          });
          parentElement.classList.toggle("active-toggle");
          console.log("📂 Accordion sub-menu item state toggled.");
        }
      }
      return;
    }

    // DISMISS ON CLICKING OUTSIDE BOUNDS
    if (document.body.classList.contains("nav-open")) {
      const isInsideMenu = navLinksDrawer && navLinksDrawer.contains(event.target);
      if (!isInsideMenu) {
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
      .from("blog_posts") .select("*") .order("created_at", { ascending: false }) .limit(3); 
    if (error) throw error; 

    const loadingSpinner = document.getElementById("blog-loading-spinner"); 
    if (loadingSpinner) { loadingSpinner.remove(); } 

    if (!articles || articles.length === 0) { 
      container.innerHTML = '<div class="blog-fallback-msg">No recent updates found.</div>'; 
      return; 
    } 
    container.innerHTML = ""; 
    
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
        </div> `; 
      container.appendChild(postCard); 
    }); 
  } catch (err) { 
    console.error("Database sync operation caught a failure:", err); 
    container.innerHTML = '<div class="blog-error-msg">Unable to display recent updates.</div>'; 
  } 
}
