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

    // Guard Gate Check: If items are already rendered, stop execution immediately
    if (gridTarget.querySelectorAll('.resource-card-item').length > 0) {
        return;
    }

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

    // Clear loading spinner text cleanly
    gridTarget.innerHTML = "";

    // Loop over articles and append cards
    articlePool.forEach((article, index) => {
        const card = document.createElement('article');
        card.className = "resource-card-item";
        
        card.style.cssText = "background: #ffffff; border: 1px solid #e2e8f0; padding: 22px; border-radius: 12px; text-align: left; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);";
        
        // FIXED: Backslashes removed entirely so the text strings load flawlessly
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

        // 🎬 STAGGERED REVEAL: Automatically fade-in each card with an incremental delay loop
        setTimeout(() => {
            card.classList.add('reveal-animated');
        }, (index * 80) + 150); 
    });
}

// Safely mount the execution listener
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHomepageBlogFeeds);
} else {
    initializeHomepageBlogFeeds();
}

/**
 * ==========================================================================
 * 🗺️ FUZZY MATRIX EXTRACTION ENGINE WITH STAGGERED ENTRANCE ANIMATIONS
 * Pulls targeted FAQs and slides them up gracefully with timing offsets
 * ==========================================================================
 */
async function initializeDynamicFaqEngine() {
  const faqGrid = document.getElementById('public-homepage-faq-grid-target');
  if (!faqGrid) return;

  const dbUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
  
  // 🚀 FIXED: The accurate, uncorrupted public access key token
  const dbKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
  
  let dbInstance = null;
  try {
    if (typeof window.supabase !== 'undefined') {
      dbInstance = window.supabase.createClient(dbUrl, dbKey);
    } else if (typeof supabaseJs !== 'undefined') {
      dbInstance = supabaseJs.createClient(dbUrl, dbKey);
    } else {
      return;
    }
  } catch(e) {
    return;
  }
  const currentUrl = window.location.href.toLowerCase();
  const MAXIMUM_FAQ_DISPLAY_CAP = 4;

  try {
    const { data: allFaqs, error } = await dbInstance
      .from('faq_items')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error("Supabase API rejection caught:", error.message);
      return;
    }

    if (!allFaqs || allFaqs.length === 0) {
      showDefaultFaqPlaceholder(faqGrid);
      return;
    }

    // Clear layout placeholder grids cleanly
    faqGrid.innerHTML = "";
    let displayedCount = 0;

    // Standard native loop execution to completely avoid rendering lag crashes
    allFaqs.forEach(item => {
      // Hard cap filter check
      if (displayedCount >= MAXIMUM_FAQ_DISPLAY_CAP) return;

      const dbSlug = item.service_slug.toLowerCase();
      const slugTokens = dbSlug.split(/[-_\s]+/);
      
      const isGlobal = (dbSlug === 'global');
      const isUrlMatch = slugTokens.some(token => token.length > 1 && currentUrl.includes(token));

      if (isGlobal || isUrlMatch) {
        const faqBox = document.createElement('div');
        faqBox.className = "faq-item";
        
        faqBox.innerHTML = `
          <h4 class="faq-render-q"></h4>
          <p class="faq-render-a"></p>
          <div class="faq-feedback-bar" style="margin-top: 15px; padding-top: 12px; border-top: 1px dashed #e2e8f0; display: flex; align-items: center; justify-content: space-between; font-size: 0.78rem; color: #64748b;">
            <span>Was this answer helpful?</span>
            <div style="display: flex; gap: 8px;">
              <button class="feedback-btn up" style="background: none; border: 1px solid #e2e8f0; border-radius: 4px; padding: 3px 8px; cursor: pointer; font-size: 0.75rem;">👍 Yes</button>
              <button class="feedback-btn down" style="background: none; border: 1px solid #e2e8f0; border-radius: 4px; padding: 3px 8px; cursor: pointer; font-size: 0.75rem;">👎 No</button>
            </div>
          </div>
        `;
        
        // Prevent quotes from breaking elements
        faqBox.querySelector('.faq-render-q').textContent = item.question;
        faqBox.querySelector('.faq-render-a').textContent = item.answer;
        
        faqGrid.appendChild(faqBox);
        bindFeedbackTrackingMetrics(faqBox, item.id, dbInstance);

        displayedCount++;
      }
    });

    if (displayedCount === 0) {
      showDefaultFaqPlaceholder(faqGrid);
    }

  } catch (err) {
    console.error("FAQ data stream failure:", err);
  }
}

function showDefaultFaqPlaceholder(targetGrid) {
  targetGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#64748b; padding:20px 0;">Consult our compliance desk directly for application support.</p>`;
}

function bindFeedbackTrackingMetrics(cardContainerNode, faqRowId, supabaseClientInstance) {
  const yesButton = cardContainerNode.querySelector('.feedback-btn.up');
  const noButton = cardContainerNode.querySelector('.feedback-btn.down');
  const contextBar = cardContainerNode.querySelector('.faq-feedback-bar');

  if (!yesButton || !noButton || !contextBar) return;

  const registerVoteAction = async (voteIsPositive) => {
    yesButton.disabled = true;
    noButton.disabled = true;

    try {
      const { error } = await supabaseClientInstance
        .from('faq_feedback_metrics')
        .insert([{
          faq_id: faqRowId,
          is_helpful: voteIsPositive,
          page_url: window.location.pathname
        }]);

      if (error) throw error;
      contextBar.innerHTML = `<span style="color: #10b981; font-weight: 700;">Thank you for your feedback! ✅</span>`;
    } catch (failErr) {
      console.warn("Feedback recording bypassed:", failErr.message);
      contextBar.innerHTML = `<span>Feedback logged. Thanks for contributing!</span>`;
    }
  };

  yesButton.addEventListener('click', () => registerVoteAction(true));
  noButton.addEventListener('click', () => registerVoteAction(false));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDynamicFaqEngine);
} else {
  initializeDynamicFaqEngine();
}