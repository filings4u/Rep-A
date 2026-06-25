/** * filings4u Platform Architecture * Module: section3.js (Part 1 - Mobile Fluid Style Sheet Setup) */ 
(function injectSection3VisualDesign() { 
    const targetId = "filings4u-processing-packages-root"; 
    const styleId = "f4u-section3-production-design-overrides"; 
    if (!document.getElementById(styleId)) { 
        const s = document.createElement("style"); 
        s.id = styleId; 
        s.textContent = ` 
            #${targetId} .pricing-section { background: #ffffff; padding: 60px 0; width: 100%; box-sizing: border-box; } 
            #${targetId} .hero-tag { color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; }
            #${targetId} h2 { color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 10px 0 40px 0; } 
            #${targetId} .pricing-grid { display: grid!important; grid-template-columns: repeat(3, 1fr)!important; gap: 30px!important; width: 100%; box-sizing: border-box; } 
            #${targetId} .price-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 40px 30px; position: relative; box-sizing: border-box; display: flex; flex-direction: column; } 
            #${targetId} .price-card.featured { border: 2px solid #10b981; box-shadow: 0 20px 25px -5px rgba(16,185,129,0.1); } 
            #${targetId} .price-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #10b981; color: #fff; padding: 4px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; white-space: nowrap; z-index: 10; } 
            #${targetId} .price-card h3 { color: #0a1f44; font-size: 1.3rem; font-weight: 800; text-transform: uppercase; margin: 0 0 20px 0; } 
            #${targetId} .price-card .amount { color: #0a1f44!important; font-size: 2.8rem!important; font-weight: 800!important; display: flex; align-items: baseline; gap: 4px; margin-bottom: 25px; } 
            #${targetId} .price-card .amount span { color: #94a3b8; font-size: 0.9rem; font-weight: 500; } 
            #${targetId} .price-features { list-style: none; padding: 0; margin: 0 0 35px 0; flex-grow: 1; text-align: left; } 
            #${targetId} .price-features li { color: #475569!important; font-size: 0.95rem!important; font-weight: 500!important; margin-bottom: 14px; display: flex; align-items: flex-start; } 
            #${targetId} .btn-main { display: block; width: 100%; background: #0a1f44; color: #fff; text-align: center; padding: 14px; border-radius: 8px; font-weight: 700; text-decoration: none; box-sizing: border-box; margin-top: auto; transition: background 0.2s; } 
            #${targetId} .price-card.featured .btn-main { background: #10b981; } 
            @media (max-width: 991px) { 
                #${targetId} .pricing-section { padding: 40px 0 !important; } 
                #${targetId} .pricing-grid { grid-template-columns: 1fr !important; gap: 24px !important; } 
                #${targetId} h2 { font-size: 1.6rem !important; } 
                #${targetId} .price-card { padding: 30px 20px !important; } 
                #${targetId} .price-card h3 { font-size: 1.15rem !important; margin-bottom: 15px !important; } 
                #${targetId} .price-card .amount { font-size: 2.1rem !important; margin-bottom: 16px !important; } 
                #${targetId} .price-features li { font-size: 0.8rem !important; margin-bottom: 10px !important; } 
                #${targetId} .btn-main { padding: 12px 16px !important; font-size: 0.88rem !important; } 
            } 
        `; 
        document.head.appendChild(s); 
    } 
    window.FILINGS4U_PACKAGES_TARGET = targetId; 
})(); 

/* Part 2: High-Performance Data Extraction and Direct Compiler Output */
function renderMasterProcessingPackagesEngine(overrideTargetId, metaDataRecord) {
    try {
        const nativeId = overrideTargetId || window.FILINGS4U_PACKAGES_TARGET || "filings4u-processing-packages-root";
        const zone = document.getElementById(nativeId);
        if (!zone) return;

        // 1. Resolve active page routing slug name context
        let slug = "index";
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
            slug = rawPathname.replace(".html", "").split("?")[0].split("#")[0];
        }
        if (metaDataRecord && metaDataRecord.slug) {
            slug = metaDataRecord.slug.toLowerCase().trim();
        }

        // 2. Fetch direct objects safely from window database namespaces
        const packagesDB = window.GLOBAL_COMPANY_PRICING?.packages || window.CENTRAL_SERVICE_PLAN_DB || {};
        const serviceData = packagesDB[slug];

        if (!serviceData) {
            console.warn("Pricing Adapter: No package configurations found for key [" + slug + "]");
            return;
        }

        // 3. Replicate the master blueprint generator loops manually onto the native container
        var cardsHtml = ""; 
        var plansConfig = [ 
            { key: "starter", name: "Starter", class: "price-card", btnStyle: "background: #0a1f44;" }, 
            { key: "compliance", name: "Compliance", class: "price-card featured", btnStyle: "background: #10b981;" }, 
            { key: "enterprise", name: "Enterprise", class: "price-card", btnStyle: "background: #0a1f44;" } 
        ]; 

        plansConfig.forEach(function(plan) { 
            var basePrice = serviceData[plan.key] || 0; 
            var bullets = (serviceData.bullets && serviceData.bullets[plan.key]) ? serviceData.bullets[plan.key] : []; 
            var bulletListHtml = ""; 
            
            bullets.forEach(function(bulletText) { 
                bulletListHtml += '<li><span style="color: #10b981 !important; font-weight: 900; margin-right: 8px; display: inline-block;">✓</span>' + bulletText + '</li>'; 
            }); 

            var badgeHtml = (plan.key === "compliance") ? '<div class="price-badge">Most Popular</div>' : ''; 
            
            cardsHtml += '<div class="' + plan.class + '">' + badgeHtml + '<h3>' + plan.name + '</h3>' + '<div class="amount">$' + basePrice.toFixed(2) + ' <span>+ State Fee</span></div>' + '<ul class="price-features">' + bulletListHtml + '</ul>' + '<a href="wizard.html?service=' + slug + '&plan=' + plan.key + '" class="btn-main" style="' + plan.btnStyle + '">Select ' + plan.name + '</a>' + '</div>'; 
        }); 

        // 4. Inject exactly into the active element container 
        zone.innerHTML = `
            <section id="pricing" class="pricing-section" style="text-align: center; padding: 60px 20px;">
                <div class="site-width-alignment-guard" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box;">
                    <span class="hero-tag">Deployment Tiers</span>
                    <h2>Transparent formation pricing.</h2>
                    <div class="pricing-grid">${cardsHtml}</div>
                </div>
            </section>
        `;

    } catch (err) {
        console.error("Direct pricing template compiler crashed:", err);
    }
}
window.renderMasterProcessingPackagesEngine = renderMasterProcessingPackagesEngine;
