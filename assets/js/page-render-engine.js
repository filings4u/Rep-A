// ============================================================================
// 🎛️ MODULE 2: PRODUCTION CONNECTIVITY MATRIX & AUTOMATED BILLING GENERATOR
// ============================================================================

function generateDynamicPricingCards(serviceKey, servicePricingObj) {
    if (!servicePricingObj) return '';
    
    const plansConfig = [
        { key: "starter", name: "Basic", class: "price-card", btnStyle: "background: var(--navy);" },
        { key: "compliance", name: "Elite", class: "price-card featured", btnStyle: "" },
        { key: "enterprise", name: "Enterprise", class: "price-card", btnStyle: "background: var(--navy);" }
    ];

    let cardsHtml = "";
    plansConfig.forEach(plan => {
        const basePrice = servicePricingObj[plan.key] || 0;
        const bullets = (servicePricingObj.bullets && servicePricingObj.bullets[plan.key]) ? servicePricingObj.bullets[plan.key] : [];
        
        let bulletListHtml = "";
        bullets.forEach(bulletText => {
            bulletListHtml += `<li style="display:flex; align-items:center; gap:8px; margin-bottom:10px; color:#475569; font-size:0.95rem; font-weight:500;"><span style="color:#10b981; font-weight:bold;">✓</span> ${bulletText}</li>`;
        });

        const badgeHtml = (plan.key === "compliance") ? '<div class="price-badge" style="position:absolute; top:-12px; left:24px; background:#10b981; color:#ffffff; font-size:0.75rem; font-weight:800; padding:4px 12px; border-radius:20px; text-transform:uppercase; letter-spacing:0.05em; z-index:10;">Most Popular</div>' : '';

        // 💳 INTEGRATED HARDSHAKE ACTIONS PASS-THROUGH HANDLER
        cardsHtml += `
        <div class="${plan.class}" style="position:relative; background:#ffffff; border:1px solid rgba(10,31,68,0.1); padding:32px 24px; border-radius:12px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(0,0,0,0.02); box-sizing:border-box; width:100%;">
            <div>
                ${badgeHtml}
                <h3 style="color:#0a1f44; font-size:1.4rem; font-weight:800; margin:0 0 12px 0;">${plan.name}</h3>
                <div class="amount" style="font-size:2.4rem; font-weight:900; color:#0a1f44; margin-bottom:20px;">$${basePrice.toFixed(2)} <span style="font-size:0.85rem; color:#475569; font-weight:500;">+ State Fee</span></div>
                <ul class="price-features" style="list-style:none; padding:0; margin:0 0 24px 0;">${bulletListHtml}</ul>
            </div>
            
            <!-- 🚀 STEP 3 WIZARD PAYMENTS HANDSHAKE GATEWAY -->
            <a href="wizard.html?service=${serviceKey}&plan=${plan.key}" class="btn-main" style="width:100%; text-align:center; padding:14px 20px; border-radius:6px; color:#ffffff; text-decoration:none; font-weight:700; display:block; box-sizing:border-box; background:#10b981; box-shadow:0 6px 12px rgba(16,185,129,0.15); transition:background 0.2s; ${plan.btnStyle}">Select ${plan.name}</a>
        </div>`;
    });

    return `
    <section id="pricing" class="pricing-section" style="background:#ffffff !important; max-width:1450px !important; width:100% !important; margin:60px auto !important; padding:40px 40px 0 40px !important; box-sizing:border-box !important; border:none !important; box-shadow:none !important; display:block !important;">
        <div style="margin-bottom:40px; text-align:center;">
            <span style="color:#10b981; font-weight:800; text-transform:uppercase; font-size:0.8rem; letter-spacing:0.05em;">Deployment Tiers</span>
            <h2 style="color:#0a1f44; font-size:2.5rem; font-weight:900; margin:4px 0 0 0; letter-spacing:-0.5px;">Transparent Pricing Plans.</h2>
        </div>
        <div class="pricing-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:30px; width:100%; box-sizing:border-box;">
            ${cardsHtml}
        </div>
    </section>`;
}

const LayoutBlueprints = {
    "text-left-split": function(data, pricingCardsHtml) {
        return `
        <main class="page-container" style="background:#ffffff !important; padding:60px 0; font-family:system-ui, sans-serif; width:100% !important; max-width:1450px; box-sizing:border-box; margin:0 auto;">
            <div class="site-width-alignment-guard" style="width:100% !important; max-width:1450px; margin:0 auto !important; padding:0 40px !important; box-sizing:border-box !important;">
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%;">
                    <article class="content-area" style="width:100%; box-sizing:border-box;">
                        <span style="color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.15);">${data.pill_tag}</span>
                        <h1 style="color:#0a1f44; font-size:3.2rem; font-weight:900; margin:0 0 18px 0; line-height:1.1; letter-spacing:-1px;">${data.headline_main}<br><span style="color:#10b981;">${data.headline_accent}</span></h1>
                        <p style="color:#475569; font-size:1.1rem; line-height:1.6; margin:0 0 32px 0;">${data.description_paragraph}</p>
                        <div class="active-sync-badge-wrapper" style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                            <div class="badge-line" style="height:2px; width:24px; background:#10b981;"></div>
                            <span class="badge-text" style="color:#0a1f44; font-weight:700; font-size:0.9rem;">${data.badge_text || "Active Entity Sync: Verified"}</span>
                        </div>
                    </article>
                    <aside class="hero-image-container" style="display:flex; justify-content:center; width:100%;">
                        <img src="${data.hero_image_url}" alt="${data.service_title}" style="width:100%; height:auto; display:block; border-radius:12px; border:1px solid rgba(10,31,68,0.15); box-shadow:0 20px 40px rgba(10,31,68,0.25), 0 4px 12px rgba(10,31,68,0.1);">
                    </aside>
                </div>
            </div>
        </main>
        ${pricingCardsHtml}`;
    },

    "image-left-split": function(data, pricingCardsHtml) {
        return `
        <section style="background:#ffffff !important; padding:60px 0; font-family:system-ui, sans-serif; width:100% !important; max-width:100% !important; box-sizing:border-box;">
            <div class="site-width-alignment-guard" style="width:100% !important; max-width:1450px !important; margin:0 auto !important; padding:0 40px !important; box-sizing:border-box !important;">
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%;">
                    <div style="display:flex; justify-content:center; width:100%;">
                        <img src="${data.hero_image_url}" alt="${data.service_title}" style="width:100%; height:auto; display:block; border-radius:12px; border:1px solid rgba(10,31,68,0.15); box-shadow:0 20px 40px rgba(10,31,68,0.25), 0 4px 12px rgba(10,31,68,0.1);">
                    </div>
                    <div style="width:100%; box-sizing:border-box;">
                        <span style="color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.15);">${data.pill_tag}</span>
                        <h2 style="color:#0a1f44; font-size:2.5rem; font-weight:900; margin:0 0 18px 0; line-height:1.15; letter-spacing:-0.5px;">${data.headline_main}<br><span style="color:#10b981;">${data.headline_accent}</span></h2>
                        <p style="color:#475569; font-size:1rem; line-height:1.6; margin:0 0 32px 0;">${data.description_paragraph}</p>
                    </div>
                </div>
            </div>
        </section>
        ${pricingCardsHtml}`;
    }
};

// ============================================================================
// 📡 MODULE 3: CORRELATION ENGINE CONTROLLER
// ============================================================================
const SUPABASE_PROJECT_URL = "https://supabase.co"; 
const SUPABASE_PUBLIC_ANON_KEY = "your-anon-key-here";
const supabaseClient = supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLIC_ANON_KEY);

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const activeServiceKey = urlParams.get('id');
        if (!activeServiceKey) return;

        // 1. Fetch content layout properties natively from Supabase rows
        const { data: databaseRecord, error: connectionError } = await supabaseClient
            .from('services')
            .select('*')
            .eq('slug', activeServiceKey)
            .single();

        if (!connectionError && databaseRecord) {
            document.title = databaseRecord.service_title + " | filings4u";
            
            // 2. Locate match records out of your client matrix global variable files
            const localPricingObj = window.GLOBAL_COMPANY_PRICING?.packages?.[activeServiceKey];
            
            // 3. Compile the exact fully developed pricing array grid layouts
            const computedPricingMarkup = generateDynamicPricingCards(activeServiceKey, localPricingObj);
            
            const chosenDesignKey = databaseRecord.layout_type || "text-left-split";
            const renderTemplate = LayoutBlueprints[chosenDesignKey];
            
            if (renderTemplate) {
                document.getElementById("dynamic-layout-root").innerHTML = renderTemplate(databaseRecord, computedPricingMarkup);
}}} catch (err) { console.error("Global core landing initialization failure:", err); }});