/** 
 * ========================================================================== 
 * 🌐 FILINGS4U MAIN INTEGRATION APPLICATION ENGINE (ANTI-COLLISION BUILD) 
 * ========================================================================== 
 */ 

// 1. GLOBAL SCOPE DIRECT SYSTEM HOOKS (Ensures HTML onclick attributes can always execute)
window.toggleMobileMenu = function() {
  const navLinksDrawer = document.querySelector(".nav-links");
  const toggleBtn = document.querySelector(".mobile-toggle-btn");
  
  document.body.classList.toggle("nav-open");
  if (navLinksDrawer) {
    navLinksDrawer.classList.toggle("active");
  }
  
  const isCurrentlyOpen = document.body.classList.contains("nav-open");
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-expanded", isCurrentlyOpen ? "true" : "false");
  }
  console.log("📱 Global Mobile Menu Triggered. Active Open State:", isCurrentlyOpen);
};

window.toggleMobileDropdown = function(event, anchorElement) {
  if (window.innerWidth < 992) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    const parentDropdown = anchorElement.closest(".nav-item-dropdown");
    if (parentDropdown) {
      // Collapse other active accordion elements
      document.querySelectorAll(".nav-item-dropdown").forEach((item) => {
        if (item !== parentDropdown) {
          item.classList.remove("active-toggle");
        }
      });
      // Toggle current accordion state selection
      parentDropdown.classList.toggle("active-toggle");
      console.log("📂 Accordion sub-menu toggled.");
    }
  }
};

// 2. BACKEND API STORAGE REFS
const supabaseUrl = 'https://lrbimrlbskjweynxlgas.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU'; 

if (typeof supabase !== 'undefined' && supabase.createClient) { 
  window.supabase = supabase.createClient(supabaseUrl, supabaseKey); 
} 

// 3. INITIALIZATION ON SYSTEM READY
document.addEventListener("DOMContentLoaded", () => { 
  // Automatically insert close button inside mobile container layout if missing
  const navLinksDrawer = document.querySelector(".nav-links");
  if (navLinksDrawer && !document.querySelector(".mobile-close-btn")) { 
    const closeBtn = document.createElement("button"); 
    closeBtn.className = "mobile-close-btn"; 
    closeBtn.innerHTML = "✕"; 
    closeBtn.setAttribute("aria-label", "Close Menu"); 
    closeBtn.setAttribute("onclick", "toggleMobileMenu()");
    navLinksDrawer.insertBefore(closeBtn, navLinksDrawer.firstChild); 
  }
  
  // Set up click-away background dim overlay handler
  document.addEventListener("click", (event) => {
    if (document.body.classList.contains("nav-open")) {
      const drawer = document.querySelector(".nav-links");
      const toggleBtn = document.querySelector(".mobile-toggle-btn");
      
      const clickedInsideMenu = drawer && drawer.contains(event.target);
      const clickedToggleButton = toggleBtn && toggleBtn.contains(event.target);
      
      if (!clickedInsideMenu && !clickedToggleButton) {
        window.toggleMobileMenu();
      }
    }
  });

  initDynamicBlogSync(); 
}); 

/** 
 * 4. ASYNCHRONOUS INITIALIZER FOR BLOG CHANNEL
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
 * 5. FETCH BLOG CARDS ENGINE
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
