/**
 * ==========================================================================
 * FILINGS4U MASTER ENGINE FRAMEWORK
 * Handles responsive utilities, layout interactions, and pricing configurations
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollTopBtn) {
        // Monitor browser scroll depth thresholds
        window.addEventListener("scroll", function () {
            // Show the button once the user scrolls past 400px of content depth
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add("reveal-active");
            } else {
                scrollTopBtn.classList.remove("reveal-active");
            }
        });

        // Handle click event tracking to trigger the viewport sweep back up
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Native engine handles smooth acceleration transitions
            });
        });
    }
});

/**
 * ==========================================================================
 * AUTOMATED PLAN HIGHLIGHTER HANDLER
 * Visually selects and scrolls to the package chosen from the dashboard
 * ==========================================================================
 */
$(document).ready(function() {
    // 1. Parse the URL to look for the active plan parameter matching your cards
    const urlParams = new URLSearchParams(window.location.search);
    
    // Looks for incoming package tags (maps standard -> starter, elite -> compliance, enterprise -> enterprise)
    let selectedPlan = urlParams.get('plan') || urlParams.get('tier');

    if (selectedPlan) {
        // Standardize naming variables to catch your custom visual card names
        selectedPlan = selectedPlan.toLowerCase().trim();
        if (selectedPlan === 'starter') selectedPlan = 'standard';
        if (selectedPlan === 'compliance') selectedPlan = 'elite';

        console.log("Auto-selecting package tier: " + selectedPlan);
        
        // 2. Clear any existing active style highlights from your pricing grid elements
        $('.price-card').removeClass('active-highlight-plan standard-dim');

        // 3. Locate the card based on the text inside the <h3> header tag
        let targetCard = null;
        $('.price-card h3').each(function() {
            if ($(this).text().toLowerCase().trim() === selectedPlan) {
                targetCard = $(this).closest('.price-card');
            }
        });

        // 4. If a matching visual card is found, highlight it beautifully
        if (targetCard && targetCard.length > 0) {
            targetCard.addClass('active-highlight-plan');
            
            // Dim out the other choices to make the match instantly pop out
            $('.price-card').not(targetCard).addClass('standard-dim');
            
            // Smoothly slide the user's viewport right down to their plan choice matrix
            $('html, body').animate({
                scrollTop: targetCard.offset().top - 100
            }, 600);
        }
    }
});

/**
 * ==========================================================================
 * 📊 AUTOMATED HOME BLOG GRID RENDERING ENGINE
 * Dispatches matching card arrays and resolves the loading flicker loop instantly
 * ==========================================================================
 */
function initializeHomepageBlogFeeds() {
    const gridTarget = document.getElementById('public-homepage-blog-grid-target');
    if (!gridTarget) return;

    // 1. Guard Gate Check: If items are already rendered, stop execution immediately
    if (gridTarget.querySelectorAll('.resource-card-item').length > 0) {
        return;
    }

    // Curated articles pool matching your platform's tracking tracks
    const articlePool = [
        {
            title: "Understanding FMCSA New Entrant Audits",
            slug: "understanding-fmcsa-new-entrant-audits",
            desc: "Learn what logs, driver qualification sheets, and maintenance data profiles are evaluated during your initial 12-month compliance window.",
            date: "May 20, 2026"
        },
        {
            title: "Mastering Multi-State Sales Tax Nexus Rules",
            slug: "mastering-multi-state-sales-tax-nexus-rules",
            desc: "A breakdown of threshold limits that require logistics firms and remote sales structures to secure state filing permits.",
            date: "May 12, 2026"
        },
        {
            title: "The Ultimate Guide to Heavy Use Tax Form 2290",
            slug: "the-ultimate-guide-to-heavy-use-tax-form-2290",
            desc: "How to quickly secure your stamped Schedule 1 watermarks without causing structural delays inside your freight network logs.",
            date: "April 28, 2026"
        }
    ];

    // 2. Clear out the loading spinner completely right before writing the clean elements
    gridTarget.innerHTML = "";

    // 3. Loop over the database items and safely append clean card wrappers
    articlePool.forEach(article => {
        const card = document.createElement('article');
        card.className = "resource-card-item";
        
        // Inherits native styles directly while applying structural padding alignment
        card.style.cssText = "background: #ffffff; border: 1px solid #e2e8f0; padding: 22px; border-radius: 12px; text-align: left; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);";
        
        card.innerHTML = `
            <div>
                <span style="font-size: 0.8rem; color: #10b981; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${article.date}</span>
                <h3 style="font-size: 1.2rem; font-weight: 800; color: #0a1f44; margin: 8px 0 10px 0; line-height: 1.3;">${article.title}</h3>
                <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin: 0 0 20px 0;">${article.desc}</p>
            </div>
            <a href="blog/${article.slug}.html" style="color: #0a1f44; font-weight: 700; text-decoration: none; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 4px; transition: color 0.2s;" onmouseover="this.style.color='#10b981'" onmouseout="this.style.color='#0a1f44'">
                Read Article &rarr;
            </a>
        `;
        gridTarget.appendChild(card);
    });
}

// 4. Safely initialize the engine once the browser page has fully mounted
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHomepageBlogFeeds);
} else {
    initializeHomepageBlogFeeds();
}
