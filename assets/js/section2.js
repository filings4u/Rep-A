/**
 * filings4u Platform Architecture
 * Module: pricing-styles.js (Part 1 - Premium Responsive Layout Stylesheet)
 */
(function injectPricingStyles() {
    const targetId = "filings4u-pricing-board-root";
    const styleId = "f4u-pricing-premium-glow-animations";
    
    if (document.getElementById(styleId)) return;
    
    const s = document.createElement("style");
    s.id = styleId;
    s.textContent = `
        #${targetId} .pricing-premium-card { 
            background: #ffffff !important; 
            border: 1px solid #e2e8f0 !important; 
            border-radius: 14px !important; 
            padding: 35px 24px !important; 
            box-shadow: 0 10px 25px -5px rgba(10, 31, 68, 0.02) !important; 
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important; 
        } 
        #${targetId} .pricing-premium-card:hover { 
            transform: translateY(-6px) !important; 
        } 
        #${targetId} .pricing-premium-card.standard-glow:hover { 
            border-color: #10b981 !important; 
        } 
        #${targetId} .pricing-premium-card.popular-glow { 
            border: 2px solid #10b981 !important; 
        } 
        #${targetId} .f4u-responsive-pricing-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 30px !important;
            align-items: stretch !important;
            box-sizing: border-box !important;
        }
        /* MOBILE RESPONSIVE LAYOUT CONSTRAINTS BELOW 991PX */ 
        @media (max-width: 991px) { 
            #${targetId} .f4u-responsive-pricing-grid { 
                grid-template-columns: 1fr !important; 
                gap: 24px !important; 
            } 
            #${targetId} .dynamic-section-title { 
                font-size: 1.5rem !important; 
            } 
            #${targetId} .dynamic-price-display { 
                font-size: 1.6rem !important; 
            } 
            #${targetId} .dynamic-price-cents { 
                font-size: 0.75rem !important; 
            } 
            #${targetId} .dynamic-price-fee { 
                font-size: 0.98rem !important; 
                margin-left: 2px !important; 
            } 
            #${targetId} .emerald-check { 
                font-size: 0.75rem !important; 
            } 
        } 
    `;
    document.head.appendChild(s);
})();


/**
 * filings4u Platform Architecture
 * Module: pricing-engine.js (Part 2 - Core Resolution and Grid Interface Renderer)
 */

/* Central Plan Pricing Resolver Bridge */
function resolveCentralPricingObject(slug) { 
    const sourceMatrix = window.CENTRAL_SERVICE_PLAN_DB || {}; 
    const safeSlug = slug ? slug.toLowerCase().trim() : ""; 
    const record = sourceMatrix[safeSlug] || sourceMatrix[safeSlug.replace(/-/g, '_')] || sourceMatrix[safeSlug.replace(/_/g, '-')]; 
    
    if (!record) { 
        throw new Error(`Data configuration parameters missing in centralized registry for service path: "${safeSlug}"`); 
    } 
    return { 
        starterPrice: record.starter, 
        compliancePrice: record.compliance, 
        enterprisePrice: record.enterprise, 
        bullets: record.bullets, 
        name: record.name || safeSlug 
    }; 
} 

/* Master Automated Pricing Renderer Interface */
function renderMasterPricingEngine(overrideTargetId, metaDataRecord) { 
    try { 
        const targetId = overrideTargetId || "filings4u-pricing-board-root"; 
        const zone = document.getElementById(targetId); 
        if (!zone) return; 

        let slug = "index"; 
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim(); 
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) { 
            slug = rawPathname.replace(".html", ""); 
        } 
        if (metaDataRecord && metaDataRecord.slug) { 
            slug = metaDataRecord.slug; 
        } 
        if (slug === "index") { 
            zone.innerHTML = '<!-- Pricing module skipped on index per configuration rule -->'; 
            return; 
        } 

        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {}; 
        const dynamicPrices = resolveCentralPricingObject(slug); 
        const rawTitle = contextSource.title || contextSource.hero_title || dynamicPrices.name || slug; 

        // Synchronized Text Utility Formatter Node
        const titleUpperCaseFormatted = rawTitle.replace(/-/g, ' ').split(" ").map(function(w) { 
            if(["llc", "ein", "dot", "ucr", "clia", "dba"].includes(w.toLowerCase())) return w.toUpperCase(); 
            return w.charAt(0).toUpperCase() + w.slice(1); 
        }).join(" "); 

        const meta = { slug: slug, title: titleUpperCaseFormatted }; 
        executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices); 
    } catch (err) { 
        console.error("Pricing runtime failure:", err); 
        const zone = document.getElementById(overrideTargetId || "filings4u-pricing-board-root"); 
        if (zone) { 
            zone.innerHTML = ` 
                <div style="color:#ef4444;background:#fef2f2;border:1px solid #fee2e2;padding:24px;border-radius:8px;font-family:sans-serif;max-width:600px;margin:20px auto;text-align:left;"> 
                    <h4 style="margin:0 0 8px 0;font-weight:700;">Pricing Integration Error</h4> 
                    <p style="margin:0;font-size:0.9rem;">${err.message}</p> 
                </div>`; 
        } 
    } 
} 
window.renderMasterPricingEngine = renderMasterPricingEngine; 

/* Layout DOM innerHTML Template Grid Compiler */
function executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices) { 
    var cardsHtml = ""; 
    var plansConfig = [ 
        { key: "starter", name: "Starter", class: "pricing-premium-card standard-glow" }, 
        { key: "compliance", name: "Compliance", class: "pricing-premium-card popular-glow" }, 
        { key: "enterprise", name: "Enterprise", class: "pricing-premium-card standard-glow" } 
    ]; 

    const landingUrlParams = new URLSearchParams(window.location.search); 
    const contextStateCode = String(landingUrlParams.get('state') || window.selectedJurisdiction || "IL").toUpperCase().trim(); 

    plansConfig.forEach(function(plan) { 
        var basePrice = dynamicPrices[plan.key + "Price"]; 
        var isComp = plan.key === "compliance"; 
        var badgeHtml = isComp ? '<span style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#10b981;color:#fff;font-weight:800;font-size:0.72rem;padding:4px 12px;border-radius:20px;z-index:10;font-family:sans-serif;letter-spacing:0.5px;">MOST POPULAR</span>' : ''; 
        var btnBg = isComp ? '#10b981' : '#0a1f44'; 
        var activeBulletsList = []; 

        if (dynamicPrices.bullets) { 
            activeBulletsList = dynamicPrices.bullets[plan.key] || dynamicPrices.bullets; 
        } 
        if (!Array.isArray(activeBulletsList) || activeBulletsList.length === 0) { 
            throw new Error("The bullets array list configuration for tier " + plan.key + " is unassigned or invalid in database files."); 
        } 

        var bulletListHtml = ""; 
        activeBulletsList.forEach(function(bulletText) { 
            bulletListHtml += '<li style="margin-bottom:12px;font-size:0.85rem;color:#0a1f44;display:flex;gap:8px;line-height:1.4;font-weight:500;"><span class="emerald-check" style="color:#10b981!important;font-weight:900;font-size:0.95rem;">✓</span><div>' + bulletText + '</div></li>'; 
        }); 

        cardsHtml += '<div class="' + plan.class + '" style="display:flex;flex-direction:column;justify-content:space-between;height:100%;position:relative;text-align:left;box-sizing:border-box;">' + badgeHtml + '<div style="display:flex;flex-direction:column;margin-bottom:25px;"><h3 style="color:#0a1f44;font-size:1.25rem;font-weight:800;margin:0 0 10px 0;text-align:center;">' + plan.name + '</h3><div style="color:#0a1f44;margin:10px 0;display:flex;align-items:baseline;justify-content:center;gap:1px;line-height:1;"><span class="dynamic-price-display" style="font-size:2.2rem;font-weight:900;letter-spacing:-0.5px;">$' + Math.floor(Number(basePrice)) + '</span><span class="dynamic-price-cents" style="font-size:0.9rem;font-weight:700;align-self:flex-start;margin-top:2px;">.00</span><span class="dynamic-price-fee" style="font-size:0.8rem;color:#94a3b8;margin-left:4px;font-weight:600;">+ State Fee</span></div><ul style="list-style:none;padding:15px 0 0 0;margin:15px 0 0 0;border-top:1px solid #f1f5f9;">' + bulletListHtml + '</ul></div><a href="wizard.html?service=' + meta.slug + '&plan=' + plan.key + '&state=' + contextStateCode + '" class="f4u-pricing-action-btn" style="width:100%;background:' + btnBg + ';color:#fff;border:none;padding:12px 20px;font-weight:700;font-size:0.9rem;border-radius:8px;cursor:pointer;text-decoration:none;text-align:center;display:block;box-sizing:border-box;margin-top:auto;font-family:sans-serif;">Select ' + plan.name + '</a></div>'; 
    }); 

    var finalTitleText = meta.title + ' Options'; 
    zone.innerHTML = '<section id="pricing-framework-target" style="background:#f8fafc;padding:60px 0;font-family:sans-serif;width:100%;box-sizing:border-box;"><div style="width:100%;max-width:1450px;margin:0 auto;padding:0 40px;box-sizing:border-box;"><div style="text-align:center;margin-bottom:45px;width:100%;display:block;"><h2 class="dynamic-section-title" style="color:#0a1f44;font-size:2.1rem;font-weight:900;margin:0;line-height:1.2;">' + finalTitleText + '</h2></div><div class="f4u-responsive-pricing-grid">' + cardsHtml + '</div></div></section>'; 
}
