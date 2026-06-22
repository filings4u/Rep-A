/**
 * filings4u Platform Architecture
 * Module: section2.js (Part 1 - Premium Animation & Shadow Engine)
 */

window.FILINGS4U_PRICING_TARGET = "filings4u-pricing-board-root";

(function injectAdvancedPricingGlows() {
    const styleId = "f4u-pricing-premium-glow-animations";
    
    // Inject self-contained, high-end hover dynamics and pulse states into the head
    if (!document.getElementById(styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = styleId;
        styleSheet.textContent = `
            /* ADVANCED INTERACTIVE HOVER PHYSICS */
            .pricing-premium-card {
                background: #ffffff !important;
                border: 1px solid #e2e8f0 !important;
                border-radius: 20px !important;
                padding: 45px 35px !important;
                box-shadow: 0 10px 30px -5px rgba(10, 31, 68, 0.03), 0 1px 3px rgba(10, 31, 68, 0.01) !important;
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease !important;
                transform: translateY(0);
                will-change: transform, box-shadow;
            }
            
            .pricing-premium-card:hover {
                transform: translateY(-10px) !important;
            }
            
            /* STANDARD BOX TRANSITION STATE */
            .pricing-premium-card.standard-glow:hover {
                border-color: #10b981 !important;
                box-shadow: 0 25px 50px -12px rgba(10, 31, 68, 0.05), 0 0 35px 4px rgba(16, 185, 129, 0.22) !important;
            }
            
            /* FEATURED MIDDLE CARD BREATHING GLOW SYSTEM */
            .pricing-premium-card.popular-glow {
                border: 2px solid #10b981 !important;
                animation: emeraldBreathingPulse 3.5s infinite ease-in-out !important;
            }
            
            .pricing-premium-card.popular-glow:hover {
                border-color: #0e9f6e !important;
                box-shadow: 0 30px 60px -15px rgba(10, 31, 68, 0.08), 0 0 45px 8px rgba(16, 185, 129, 0.42) !important;
                animation-play-state: paused !important;
            }
            
            @keyframes emeraldBreathingPulse {
                0% {
                    box-shadow: 0 15px 35px -5px rgba(10,31,68,0.04), 0 0 22px 2px rgba(16, 185, 129, 0.16);
                }
                50% {
                    box-shadow: 0 15px 35px -5px rgba(10,31,68,0.04), 0 0 35px 6px rgba(16, 185, 129, 0.30);
                    border-color: #34d399 !important;
                }
                100% {
                    box-shadow: 0 15px 35px -5px rgba(10,31,68,0.04), 0 0 22px 2px rgba(16, 185, 129, 0.16);
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
})();

function resolveCentralPricingObject(slug) {
    const sourceMatrix = window.GLOBAL_COMPANY_PRICING || window.statePricingData || {};
    const packagesSource = sourceMatrix.packages || sourceMatrix || {};
    const record = packagesSource[slug] || packagesSource[slug.replace(/-/g, '_')];
    
    if (record) {
        return {
            starterPrice: record.starter || record.starterPrice || "199.00",
            compliancePrice: record.compliance || record.compliancePrice || "299.00",
            enterprisePrice: record.enterprise || record.enterprisePrice || "499.00",
            bullets: record.bullets || null
        };
    }
    return { starterPrice: "199.00", compliancePrice: "299.00", enterprisePrice: "499.00", bullets: null };
}

function renderMasterPricingEngine(overrideTargetId, metaDataRecord) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_PRICING_TARGET || "filings4u-pricing-board-root";
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
            zone.innerHTML = '<!-- Pricing module skipped on index landing profile per configuration rule -->';
            return;
        }

        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
        const meta = {
            slug: slug,
            title: contextSource.title || contextSource.hero_title || "Filing"
        };

        const dynamicPrices = resolveCentralPricingObject(meta.slug);

        executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices);

    } catch (err) {
        console.error("Pricing framework engine initialization critical runtime failure:", err);
    }
}
window.renderMasterPricingEngine = renderMasterPricingEngine;


/* Part 2: Split-Safe Data-Bound Cards Grid Builder (Premium Design Module) */
function executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices) {
    var cardsHtml = "";
    
    var plansConfig = [
        { key: "starter", name: "Starter", class: "pricing-premium-card standard-glow" },
        { key: "compliance", name: "Compliance", class: "pricing-premium-card popular-glow" },
        { key: "enterprise", name: "Enterprise", class: "pricing-premium-card standard-glow" }
    ];

    plansConfig.forEach(function(plan) {
        var basePrice = dynamicPrices[plan.key + "Price"] || "0.00";
        var badgeHtml = "";
        
        // Premium corporate element sizing adjustments
        var containerStyles = "display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; height: 100%; position: relative; text-align: left;";
        var actionBtnStyles = "width: 100%; background: #0a1f44; color: #ffffff; border: none; padding: 16px 24px; font-weight: 700; font-size: 1rem; border-radius: 10px; cursor: pointer; text-decoration: none; text-align: center; display: block; box-sizing: border-box; margin-top: auto; transition: background 0.2s ease, transform 0.2s ease; box-shadow: 0 4px 12px rgba(10, 31, 68, 0.15);";

        if (plan.key === "compliance") {
            badgeHtml = '<span style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #10b981; color: #ffffff; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.08em; padding: 5px 16px; border-radius: 20px; display: block; line-height: 1.2; text-transform: uppercase; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3); z-index: 10;">MOST POPULAR</span>';
            actionBtnStyles = "width: 100%; background: #10b981; color: #ffffff; border: none; padding: 16px 24px; font-weight: 700; font-size: 1rem; border-radius: 10px; cursor: pointer; text-decoration: none; text-align: center; display: block; box-sizing: border-box; margin-top: auto; transition: background 0.2s ease, transform 0.2s ease; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);";
        }

        var defaultBullets = {
            starter: ["Basic application preparation"],
            compliance: ["Everything in Starter (Plus)", "Compliance support", "Mandatory 21-Day Public Protest Period Status Monitoring Management"],
            enterprise: ["Everything in Compliance (Plus)", "Full service with network connections", "Expedited Authority Certificate Delivery Dispatch Route"]
        };

        var activeBulletsList = (dynamicPrices.bullets && dynamicPrices.bullets[plan.key]) || defaultBullets[plan.key] || [];
        var bulletListHtml = "";
        
        activeBulletsList.forEach(function(bulletText) {
            bulletListHtml += '<li style="margin-bottom: 16px; font-size: 0.95rem; color: #475569; display: flex; align-items: flex-start; gap: 10px; border-bottom: none !important; text-decoration: none !important; padding-bottom: 0 !important; line-height: 1.5; font-family: \'Plus Jakarta Sans\', sans-serif;">';
            bulletListHtml += '  <span style="color: #10b981 !important; font-weight: 900; display: inline-block; font-size: 1.1rem; line-height: 1; border-bottom: none !important; text-decoration: none !important; user-select: none;">✓</span>';
            bulletListHtml += '  <div style="border-bottom: none !important; text-decoration: none !important; font-weight: 500;">' + bulletText + '</div>';
            bulletListHtml += '</li>';
        });

        cardsHtml += '<div class="' + plan.class + '" style="' + containerStyles + '">' + 
            badgeHtml + 
            '  <div style="display: flex; flex-direction: column; width: 100%; box-sizing: border-box; margin-bottom: 35px;">' +
            '    <h3 style="color: #0a1f44; font-size: 1.5rem; font-weight: 800; margin: 0 0 15px 0; text-align: center; width: 100%; font-family: \'Plus Jakarta Sans\', sans-serif; letter-spacing: -0.5px;">' + plan.name + '</h3>' + 
            '    <div style="color: #0a1f44; font-size: 3rem; font-weight: 900; margin: 15px 0; display: flex; align-items: baseline; justify-content: center; width: 100%; gap: 2px; line-height: 1; font-family: \'Plus Jakarta Sans\', sans-serif; letter-spacing: -1px;">' +
            '       <span>$' + Math.floor(Number(basePrice)) + '</span>' + 
            '       <span style="font-size: 1rem; font-weight: 700; color: #0a1f44; align-self: flex-start; margin-top: 4px;">.00</span>' +
            '       <span style="font-size: 0.85rem; font-weight: 600; color: #94a3b8; margin-left: 6px; line-height: 1; letter-spacing: 0;">+ State Fee</span>' +
            '    </div>' + 
            '    <ul style="list-style: none; padding: 0; margin: 25px 0 0 0; display: block; width: 100%; border-bottom: none !important; text-decoration: none !important;">' + bulletListHtml + '</ul>' + 
            '  </div>' + 
            '  <a href="wizard.html?service=' + meta.slug + '&plan=' + plan.key + '" class="f4u-pricing-action-btn" style="' + actionBtnStyles + '" onmouseover="this.style.opacity=\'0.9\'; this.style.transform=\'translateY(-1px)\';" onmouseout="this.style.opacity=\'1\'; this.style.transform=\'translateY(0)\';">Select ' + plan.name + '</a>' + 
            '</div>';
    });

    var finalLayoutHtml = '';
    finalLayoutHtml += '<section style="background: #f8fafc; padding: 90px 0; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; display: block; margin: 0 !important;">';
    finalLayoutHtml += '  <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">';
    
    finalLayoutHtml += '    <div style="text-align: center; margin-bottom: 60px; width: 100%; display: block;">';
    finalLayoutHtml += '      <h2 style="color: #0a1f44; font-size: 2.6rem; font-weight: 900; margin: 0; line-height: 1.2; font-family: \'Plus Jakarta Sans\', sans-serif; letter-spacing: -1px; text-transform: capitalize;">' + meta.title.replace(/-/g, ' ') + ' Processing Options</h2>';
    finalLayoutHtml += '    </div>';

    finalLayoutHtml += '    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 35px; width: 100%; align-items: stretch; box-sizing: border-box; margin: 0; padding: 0;">' + cardsHtml + '</div>';
    finalLayoutHtml += '  </div>';
    finalLayoutHtml += '</section>';

    zone.innerHTML = finalLayoutHtml;
}
