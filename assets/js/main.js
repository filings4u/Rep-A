/** * ========================================================================== * 🌐 FILINGS4U MAIN INTEGRATION APPLICATION ENGINE (ANTI-COLLISION BUILD) * ========================================================================== */ 

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

        // Append custom record objects purely via native clean classes matching desktop & mobile structural definitions
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

/**
 * 📱 MOBILE HEADER NAVIGATION SLIDEOUT CONTROL
 * Activates display transitions on navigation link menus natively via click paths.
 */
$(document).ready(function() {
    $('.mobile-toggle-btn').off('click').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        // Target your nav links panel element
        const menuDrawer = $('.nav-links');
        
        if (menuDrawer.is(':visible')) {
            // Smoothly tucks the navigation window away
            menuDrawer.attr('style', 'display: none !important;');
        } else {
            // Forces the menu block open and displays links underneath the logo bar
            menuDrawer.attr('style', 'display: flex !important;');
        }
    });
});
