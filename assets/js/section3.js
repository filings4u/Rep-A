/**
 * filings4u Platform Architecture
 * Module: section3.js (Part 1 - Aligned Production Data Engine & Custom Styles)
 */

window.FILINGS4U_PACKAGES_TARGET = "filings4u-processing-packages-root";

(function injectSection3VisualDesign() {
    const targetId = "filings4u-processing-packages-root";
    const styleId = "f4u-section3-production-design-overrides";

    // Inject high-priority overrides for your requested card design, navy bullet text, and price fonts
    if (!document.getElementById(styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = styleId;
        styleSheet.textContent = `
            /* MASTER OVERRIDE FORCE SETS RE-ALIGNED DESIGNS BASED ON SELECTOR INHERITANCE MAPS */
            #${targetId} .pricing-section,
            #${targetId} .pricing-grid,
            #${targetId} .price-card {
                font-family: 'Plus Jakarta Sans', sans-serif !important;
                -webkit-font-smoothing: antialiased;
            }

            /* LEFT AND RIGHT SIDE CARDS: FORCED WHITE BACKGROUND WITH CRISP SLATE BORDER */
            #${targetId} .price-card:not(.featured) {
                background: #ffffff !important;
                border: 1px solid #e2e8f0 !important;
                box-shadow: 0 10px 30px rgba(10, 31, 68, 0.03) !important;
            }

            /* PRICE TEXT: FORCED TO USE YOUR PRODUCTION NAVY/WEIGHT RULES NATIVELY */
            #${targetId} .price-card .amount {
                color: #0a1f44 !important; /* Premium corporate Navy color */
                font-weight: 800 !important;
                display: flex !important;
                align-items: baseline !important;
                gap: 5px !important;
            }

            /* BULLETPOINT TEXT: FORCED TO USE YOUR PRECISE NAVY TYPOGRAPHY HEX */
            #${targetId} .price-features li {
                color: #0a1f44 !important; /* Beautiful corporate Navy Blue text color rule */
                font-weight: 500 !important;
                font-size: 0.95rem !important;
                margin-bottom: 14px !important;
                display: list-item !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }
})();

function renderMasterProcessingPackagesEngine(overrideTargetId, metaDataRecord) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_PACKAGES_TARGET || "filings4u-processing-packages-root";
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

        const sourceMatrix = window.GLOBAL_COMPANY_PRICING || {};
        const packagesSource = sourceMatrix.packages || {};
        const serviceData = packagesSource[slug] || (metaDataRecord && metaDataRecord.pricing) || null;

        if (!serviceData || Object.keys(serviceData).length === 0) {
            console.warn("Pricing Engine Note: No pricing configurations registered for key [" + slug + "]");
            return;
        }

        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
        const displayTitle = contextSource.title || contextSource.hero_title || "Filing";

        executeProductionWebsitePricingCards(zone, slug, displayTitle, serviceData);

    } catch (err) {
        console.error("Processing packages engine critical initialization failure:", err);
    }
}
window.renderMasterPricingEngine = renderMasterProcessingPackagesEngine;

/* Part 2: Flat Structural HTML Compiler Layout */
function executeProductionWebsitePricingCards(zone, targetServiceKey, displayTitle, serviceData) {
    var cardsHtml = "";
    
    // 1. Array blueprint aligned exactly to your production class names
    var plansConfig = [
        { key: "starter", name: "Basic", class: "price-card" },
        { key: "compliance", name: "Elite", class: "price-card featured" },
        { key: "enterprise", name: "Enterprise", class: "price-card" }
    ];

    // 2. Build flat cards with standard string concatenations to be split-safe
    plansConfig.forEach(function(plan) {
        var basePrice = serviceData[plan.key] || 0;
        var bullets = (serviceData.bullets && serviceData.bullets[plan.key]) ? serviceData.bullets[plan.key] : [];
        var bulletListHtml = "";
        
        // Output clean flat list tags with explicit green color checkmarks inside the string content
        bullets.forEach(function(bulletText) {
            bulletListHtml += '<li><span style="color: #10b981 !important; font-weight: 900; margin-right: 8px; display: inline-block;">✓</span>' + bulletText + '</li>';
        });

        var badgeHtml = (plan.key === "compliance") ? '<div class="price-badge">Most Popular</div>' : '';

        // FLAT INTERIOR TREE: Completely stripped of extra layout wraps to pull CSS auto margins perfectly
        cardsHtml += '<div class="' + plan.class + '">' + 
            badgeHtml + 
            '<h3>' + plan.name + '</h3>' + 
            '<div class="amount">$' + basePrice.toFixed(2) + ' <span>+ State Fee</span></div>' + 
            '<ul class="price-features">' + bulletListHtml + '</ul>' + 
            '<a href="wizard.html?service=' + targetServiceKey + '&plan=' + plan.key + '" class="btn-main" style="width: 100%; text-align: center;">Select ' + plan.name + '</a>' + 
        '</div>';
    });

    // 3. FINAL CONTAINER MOUNT: Wraps cards neatly inside your strict CSS selectors
    var containerHtml = '';
    containerHtml += '<section class="pricing-section-container">';
    containerHtml += '  <div class="site-width-alignment-guard prgrid-container" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box;">';
    containerHtml += '    <div class="pricing-header-block">';
    containerHtml += '      <span class="pricing-section-badge">Infrastructure Selection</span>';
    containerHtml += '      <h2 class="pricing-main-title">Standard ' + displayTitle + ' Processing Options</h2>';
    containerHtml += '      <p class="pricing-subtitle-desc">Select the management structure engineered for your profile setup needs.</p>';
    containerHtml += '    </div>';
    containerHtml += '    <div class="pricing-grid">' + cardsHtml + '</div>';
    containerHtml += '  </div>';
    containerHtml += '</section>';

    zone.innerHTML = containerHtml;

    // 4. Attach performance-optimized vertical coordinates transformations
    setTimeout(function() {
        const livePageAnchorNodesArray = zone.querySelectorAll('a') || document.querySelectorAll('a');
        livePageAnchorNodesArray.forEach(function(individualAnchorElement) {
            if ((individualAnchorElement.textContent || "").trim() !== "") {
                individualAnchorElement.addEventListener("click", function(clickInterceptEvent) {
                    if (individualAnchorElement.getAttribute("href") === "#pricing") {
                        const viewScrollTargetElementNode = zone.querySelector(".pricing-section-container");
                        if (viewScrollTargetElementNode) {
                            clickInterceptEvent.preventDefault();
                            viewScrollTargetElementNode.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }
                });
            }
        });
    }, 60);
}
