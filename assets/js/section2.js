/**
 * filings4u Platform Architecture
 * Module: government-pricing.js (Part 1 of 2)
 * Dynamic Pricing Layout Stylesheet & Zero-Hardcode 404 Route Interceptor
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
            width: 100% !important;
        }

        /* MOBILE RESPONSIVE LAYOUT CONSTRAINTS UNIFIED WITH SECTION 4 & 5 */
        @media (max-width: 991px) {
            #${targetId} section {
                padding: 40px 0 !important;
            }
            #${targetId} .site-width-alignment-guard {
                width: 100% !important;
                max-width: 100% !important;
                padding: 0 20px !important;
            }
            #${targetId} .f4u-responsive-pricing-grid {
                grid-template-columns: 1fr !important;
                gap: 24px !important;
            }
            #${targetId} .dynamic-section-title {
                font-size: 1.8rem !important;
            }
            #${targetId} .dynamic-price-display {
                font-size: 2.1rem !important;
            }
            #${targetId} .dynamic-price-cents {
                font-size: 0.9rem !important;
            }
            #${targetId} .dynamic-price-fee {
                font-size: 0.8rem !important;
                margin-left: 4px !important;
            }
            #${targetId} .emerald-check {
                font-size: 0.95rem !important;
            }
        }
    `;
    document.head.appendChild(s);
})();

/* Central Plan Pricing Resolver Bridge */
function resolveCentralPricingObject(slug) {
    const sourceMatrix = window.CENTRAL_SERVICE_PLAN_DB || {};
    let safeSlug = slug ? slug.toLowerCase().trim() : "";
    
    if (safeSlug === "index" || safeSlug === "home" || safeSlug === "") {
        safeSlug = "index";
    }

    const record = sourceMatrix[safeSlug] || sourceMatrix[safeSlug.replace(/-/g, '_')] || sourceMatrix[safeSlug.replace(/_/g, '-')];
    
    // --- 🚨 ZERO HARDCODE FAILSAFE: IMMEDIATELY DROP INVALID PATHS TO THE 404 ROUTE ---
    if (!record) {
        window.location.href = "404.html";
        return null;
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

        let lookupKey = slug;
        if (slug === "index" || slug === "home" || slug === "") {
            lookupKey = "index"; 
        }

        const dynamicPrices = resolveCentralPricingObject(lookupKey);
        if (!dynamicPrices) return; // Terminate engine if redirected to 404

        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[lookupKey]) || {};
        
        let rawTitle = contextSource.name || dynamicPrices.name || lookupKey;
        if (rawTitle.toLowerCase() === "index") {
            rawTitle = "Compliance";
        }

        const titleUpperCaseFormatted = rawTitle.replace(/-/g, ' ').split(" ").map(function(w) {
            if(["llc", "ein", "dot", "ucr", "clia", "dba", "scac", "boc-3", "boc"].includes(w.toLowerCase())) return w.toUpperCase();
            return w.charAt(0).toUpperCase() + w.slice(1);
        }).join(" ");

        const meta = { slug: lookupKey, title: titleUpperCaseFormatted };
        executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices);
    } catch (err) {
        console.error("Pricing runtime failure:", err);
        window.location.href = "404.html";
    }
}
window.renderMasterPricingEngine = renderMasterPricingEngine;

/**
 * filings4u Platform Architecture
 * Module: government-pricing.js (Part 2 of 2)
 * Normalized HTML Package Grid Matrix Compiler & Zero-Hardcode Exception Verification
 */
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
        
        var badgeHtml = isComp ? '<span style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#10b981;color:#fff;font-weight:800;font-size:0.72rem;padding:4px 12px;border-radius:20px;z-index:10;font-family:inherit;letter-spacing:0.5px;white-space:nowrap;">MOST POPULAR</span>' : '';
        var btnBg = isComp ? '#10b981' : '#0a1f44';
        
        var activeBulletsList = [];
        if (dynamicPrices.bullets) {
            activeBulletsList = dynamicPrices.bullets[plan.key] || dynamicPrices.bullets;
        }

        // --- 🚨 ZERO HARDCODE METRIC: BOOT MISSING DATA STREAMS DIRECT TO 404 ROUTE ---
        if (!Array.isArray(activeBulletsList) || activeBulletsList.length === 0 || basePrice === undefined) {
            window.location.href = "404.html";
            return;
        }

        var bulletListHtml = "";
        activeBulletsList.forEach(function(bulletText) {
            bulletListHtml += '<li style="margin-bottom:12px;font-size:0.85rem;color:#0a1f44;display:flex;gap:8px;line-height:1.4;font-weight:500;text-align:left;"><span class="emerald-check" style="color:#10b981!important;font-weight:900;font-size:0.95rem;flex-shrink:0;">✓</span><div>' + bulletText + '</div></li>';
        });

        cardsHtml += '<div class="' + plan.class + '" style="display:flex;flex-direction:column;justify-content:space-between;height:100%;position:relative;text-align:left;box-sizing:border-box;">' + 
            badgeHtml + 
            '<div style="display:flex;flex-direction:column;margin-bottom:25px;width:100%;box-sizing:border-box;">' +
                '<h3 style="color:#0a1f44;font-size:1.25rem;font-weight:800;margin:0 0 10px 0;text-align:center;">' + plan.name + '</h3>' +
                '<div style="color:#0a1f44;margin:10px 0;display:flex;align-items:baseline;justify-content:center;gap:1px;line-height:1;">' +
                    '<span class="dynamic-price-display" style="font-size:2.2rem;font-weight:900;letter-spacing:-0.5px;">$' + Math.floor(Number(basePrice)) + '</span>' +
                    '<span class="dynamic-price-cents" style="font-size:0.9rem;font-weight:700;align-self:flex-start;margin-top:2px;">.00</span>' +
                    '<span class="dynamic-price-fee" style="font-size:0.8rem;color:#94a3b8;margin-left:4px;font-weight:600;">+ State Fee</span>' +
                '</div>' +
                '<ul style="list-style:none;padding:15px 0 0 0;margin:15px 0 0 0;border-top:1px solid #f1f5f9;width:100%;box-sizing:border-box;">' + bulletListHtml + '</ul>' +
            '</div>' +
            '<a href="wizard.html?service=' + meta.slug + '&amp;plan=' + plan.key + '&amp;state=' + contextStateCode + '" class="f4u-pricing-action-btn" style="width:100%;background:' + btnBg + ';color:#fff;border:none;padding:12px 20px;font-weight:700;font-size:0.9rem;border-radius:8px;cursor:pointer;text-decoration:none;text-align:center;display:block;box-sizing:border-box;margin-top:auto;font-family:inherit;white-space:nowrap;">Select ' + plan.name + '</a>' +
        '</div>';
    });

    var finalTitleText = meta.title + ' Options';
    
    zone.innerHTML = `
        <section id="pricing-framework-target" style="background:#f8fafc; padding:60px 0; font-family:system-ui, sans-serif; width:100%; box-sizing:border-box; margin:0 !important; display:block;">
            <div class="site-width-alignment-guard" style="width:1450px; max-width:1450px; margin:0 auto !important; padding:0 40px; box-sizing:border-box !important;">
                <div style="text-align:center; margin-bottom:45px; width:100%; display:block;">
                    <h2 class="dynamic-section-title" style="color:#0a1f44; font-size:2.5rem; font-weight:900; margin:0; line-height:1.15; letter-spacing:-0.5px;">
                        ${finalTitleText}
                    </h2>
                </div>
                <div class="f4u-responsive-pricing-grid">
                    ${cardsHtml}
                </div>
            </div>
        </section>
    `;
}
