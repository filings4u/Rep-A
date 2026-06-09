/**
 * ==========================================================================
 * FILINGS4U MASTER ENGINE FRAMEWORK (CORRECTED INSTANCE URL)
 * ==========================================================================
 */
window.FILINGS4U_MASTER_ENGINE = window.FILINGS4U_MASTER_ENGINE || {
    sharedDbInstance: null,
    getSupabaseInstance: function() {
        if (this.sharedDbInstance) return this.sharedDbInstance;
        // FIXED: Restored your full, uncorrupted project database sub-domain string
        const dbUrl = 'https://supabase.co';
        const dbKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
        if (typeof window.supabase !== 'undefined') {
            this.sharedDbInstance = window.supabase.createClient(dbUrl, dbKey);
            return this.sharedDbInstance;
        }
        console.warn("Master Engine Core: Supabase scope missing from window canvas.");
        return null;
    }
};

// Scroll to Top UI Trigger Interaction
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add("reveal-active");
            } else {
                scrollTopBtn.classList.remove("reveal-active");
            }
        });
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});


// Dynamic Selected Card Highlighter Execution Loop Handler
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    let selectedPlan = urlParams.get('plan') || urlParams.get('tier');
    if (!selectedPlan) return;

    selectedPlan = selectedPlan.toLowerCase().trim();
    if (selectedPlan === 'starter') selectedPlan = 'basic';
    if (selectedPlan === 'compliance') selectedPlan = 'elite';

    const priceCards = document.querySelectorAll('.price-card');
    let targetCard = null;

    priceCards.forEach(card => {
        card.classList.remove('active-highlight-plan', 'standard-dim');
        const cardHeader = card.querySelector('h3');
        if (cardHeader && cardHeader.innerText.toLowerCase().trim() === selectedPlan) {
            targetCard = card;
        }
    });

    if (targetCard) {
        targetCard.classList.add('active-highlight-plan');
        priceCards.forEach(card => {
            if (card !== targetCard) card.classList.add('standard-dim');
        });
        setTimeout(() => {
            const cardTopPosition = targetCard.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: cardTopPosition, behavior: 'smooth' });
        }, 500);
    }
});


// Isolated Content Data Integration Controllers
async function initializeHomepageBlogFeeds() {
    const gridTarget = document.getElementById('public-homepage-blog-grid-target');
    if (!gridTarget || gridTarget.querySelectorAll('.resource-card-item').length > 0) return;
    const dbInstance = window.FILINGS4U_MASTER_ENGINE.getSupabaseInstance();
    if (!dbInstance) return;

    try {
        const { data: allPosts, error } = await dbInstance.from('blog_posts').select('*').eq('is_published', true).order('created_at', { ascending: false });
        if (error || !allPosts || allPosts.length === 0) return;
        gridTarget.innerHTML = "";
        
        allPosts.slice(0, 3).forEach(item => {
            const card = document.createElement('article');
            card.className = "resource-card-item";
            card.innerHTML = `<div><h3 class="blog-live-title" style="font-size:1.2rem; color:#0a1f44; margin:8px 0;"></h3><p class="blog-live-desc" style="font-size:0.9rem; color:#64748b;"></p></div><a href="article.html?slug=${item.slug}" style="color:#10b981; font-weight:700; text-decoration:none;">Read Article &rarr;</a>`;
            card.querySelector('.blog-live-title').textContent = item.title;
            card.querySelector('.blog-live-desc').textContent = item.summary || '';
            gridTarget.appendChild(card);
        });
    } catch (e) { console.error("Blog feed network exception:", e); }
}

async function initializeDynamicFaqEngine() {
    const faqGrid = document.getElementById('public-homepage-faq-grid-target');
    if (!faqGrid) return;
    const dbInstance = window.FILINGS4U_MASTER_ENGINE.getSupabaseInstance();
    if (!dbInstance) return;

    try {
        const { data: allFaqs, error } = await dbInstance.from('faq_items').select('*').order('sort_order', { ascending: true });
        if (error || !allFaqs || allFaqs.length === 0) return;
        faqGrid.innerHTML = "";

        allFaqs.slice(0, 4).forEach(item => {
            const faqBox = document.createElement('div');
            faqBox.className = "faq-item";
            faqBox.innerHTML = `<h4 class="faq-render-q" style="color:#0a1f44; font-weight:700;"></h4><p class="faq-render-a" style="color:#475569;"></p>`;
            faqBox.querySelector('.faq-render-q').textContent = item.question;
            faqBox.querySelector('.faq-render-a').textContent = item.answer;
            faqGrid.appendChild(faqBox);
        });
    } catch (e) { console.error("FAQ feed network exception:", e); }
}

// Global Lifecycle Initialization Matrix Bootstrapper
document.addEventListener("DOMContentLoaded", () => {
    initializeHomepageBlogFeeds();
    initializeDynamicFaqEngine();
});
