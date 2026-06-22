/**
 * filings4u Platform Architecture
 * Module: section2.js (Part 1 - Advanced Pricing Grid Architecture & Isolated Styles)
 */

(function() {
    const targetConfig = {
        elementId: "filings4u-pricing-board-root",
        styleId: "filings4u-pricing-styles"
    };

    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .pricing-grid-master-section {
                padding: 80px 0 !important; 
                background: #ffffff; 
                color: #0a1f44; 
                width: 100% !important; 
                box-sizing: border-box; 
                font-family: system-ui, sans-serif; 
                margin: 0 !important;
            }
            #${targetConfig.elementId} .pricing-grid-header-block {
                text-align: center; 
                max-width: 700px; 
                margin: 0 auto 50px auto;
            }
            #${targetConfig.elementId} .pricing-grid-main-title {
                margin: 0 0 16px 0; 
                font-size: 2.6rem; 
                font-weight: 900; 
                letter-spacing: -1px; 
                line-height: 1.15;
                color: #0a1f44;
            }
            #${targetConfig.elementId} .pricing-grid-subtitle {
                color: #475569; 
                font-size: 1.05rem; 
                line-height: 1.5; 
                margin: 0;
            }
            #${targetConfig.elementId} .pricing-cards-responsive-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 30px;
                width: 100%;
                align-items: stretch !important;
                box-sizing: border-box;
                margin: 0;
            }
            #${targetConfig.elementId} .pricing-card-node {
                background: #f8fafc; 
                border: 1px solid #e2e8f0; 
                border-radius: 16px; 
                padding: 40px 30px; 
                box-sizing: border-box; 
                display: flex; 
                flex-direction: column; 
                justify-content: space-between; 
                min-height: 520px;
                position: relative;
                transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }
            #${targetConfig.elementId} .pricing-card-node:hover {
                transform: translateY(-8px);
                border-color: #10b981 !important;
                box-shadow: 0 20px 40px -10px rgba(10, 31, 68, 0.05), 0 0 30px 4px rgba(16, 185, 129, 0.25) !important;
            }
            #${targetConfig.elementId} .pricing-card-highlighted {
                background: #ffffff; 
                border: 2px solid #10b981;
                box-shadow: 0 15px 30px rgba(10, 31, 68, 0.05), 0 0 20px 2px rgba(16, 185, 129, 0.15);
            }
            #${targetConfig.elementId} .pricing-card-popular-badge {
                position: absolute; 
                top: -14px; 
                left: 50%; 
                transform: translateX(-50%); 
                background: #10b981; 
                color: #ffffff; 
                padding: 4px 14px; 
                border-radius: 20px; 
                font-size: 0.75rem; 
                font-weight: 800; 
                text-transform: uppercase; 
                letter-spacing: 0.05em;
                z-index: 10;
            }
            #${targetConfig.elementId} .pricing-card-tier-title {
                margin: 0 0 12px 0; 
                font-size: 1.4rem; 
                font-weight: 800;
                color: #0a1f44;
            }
            #${targetConfig.elementId} .pricing-card-rate-row {
                margin-bottom: 24px;
                display: flex;
                align-items: baseline;
            }
            #${targetConfig.elementId} .pricing-card-price-integer {
                font-size: 2.8rem; 
                font-weight: 900; 
                color: #0a1f44; 
                font-family: monospace;
            }
            #${targetConfig.elementId} .pricing-card-price-integer.color-primary {
                color: #10b981;
            }
            #${targetConfig.elementId} .pricing-card-cadence-label {
                font-size: 0.9rem; 
                font-weight: 500; 
                color: #64748b;
                margin-left: 4px;
            }
            #${targetConfig.elementId} .pricing-card-bullets-list {
                list-style: none; 
                padding: 0; 
                margin: 0;
            }
            #${targetConfig.elementId} .pricing-card-bullet-item {
                margin-bottom: 10px; 
                font-size: 0.95rem;
                color: #475569;
                font-weight: 500; 
                display: flex; 
                align-items: flex-start; 
                gap: 8px;
            }
            #${targetConfig.elementId} .pricing-card-bullet-item span {
                color: #10b981;
                font-weight: bold;
            }
            #${targetConfig.elementId} .pricing-card-action-btn {
                color: #ffffff; 
                font-weight: 700; 
                text-decoration: none; 
                padding: 14px; 
                border-radius: 8px; 
                text-align: center; 
                display: block; 
                font-size: 0.95rem;
                transition: background 0.2s;
            }
            #${targetConfig.elementId} .starter-btn-theme, #${targetConfig.elementId} .enterprise-btn-theme {
                background: #0a1f44;
            }
            #${targetConfig.elementId} .starter-btn-theme:hover, #${targetConfig.elementId} .enterprise-btn-theme:hover {
                background: #123066;
            }
            #${targetConfig.elementId} .compliance-btn-theme {
                background: #10b981;
                box-shadow: 0 5px 15px rgba(16, 185, 129, 0.25);
            }
            #${targetConfig.elementId} .compliance-btn-theme:hover {
                background: #0e9f6e;
            }

            /* MOBILE GRID BREAKDOWN OVERRIDES */
            @media (max-width: 991px) {
                #${targetConfig.elementId} .pricing-grid-master-section { padding: 40px 0 !important; }
                #${targetConfig.elementId} .pricing-grid-main-title { font-size: 1.8rem !important; }
                #${targetConfig.elementId} .pricing-cards-responsive-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
                #${targetConfig.elementId} .pricing-card-node { padding: 24px !important; min-height: auto !important; }
                #${targetConfig.elementId} .pricing-card-node:hover { transform: none !important; }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    window.FILINGS4U_PRICING_TARGET = targetConfig.elementId;
})();


/* Part 2: Dynamic Pricing Card Architecture & Secure Grid Compiler */
function secureGridStringEscape(primitiveValue) {
    if (primitiveValue === null || primitiveValue === undefined) return "";
    return String(primitiveValue)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderMasterPricingEngine(overrideTargetId, metaDataRecord) {
    try {
        // 1. Establish the clean isolated default target configuration
        const targetId = overrideTargetId || window.FILINGS4U_PRICING_TARGET || "filings4u-pricing-board-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // 2. Discover slug names cleanly using path configurations
        let slug = "index";
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
            slug = rawPathname.replace(".html", "");
        }
        
        if (metaDataRecord && metaDataRecord.slug) {
            slug = metaDataRecord.slug;
        }

        // Skip pricing block rendering on index landing profile per configuration rule
        if (slug === "index") {
            zone.innerHTML = '<!-- Pricing module skipped on index landing profile per configuration rule -->';
            return;
        }

        // 3. Resolve database references securely from global plan objects
        const universalSourceMatrix = window.CENTRAL_SERVICE_PLAN_DB || {};
        const pricingDatasetNode = universalSourceMatrix[slug] || (metaDataRecord && metaDataRecord.pricing) || {};

        if (!pricingDatasetNode || Object.keys(pricingDatasetNode).length === 0) {
            console.warn("Pricing record context unassigned for active page slug key: ", slug);
            return;
        }

        // 4. Inner sub-loop bullet features parsing utility
        const compileBulletsSubLoopMarkup = function(bulletArrayData) {
            if (!Array.isArray(bulletArrayData)) return "";
            return bulletArrayData.map(function(singleBulletString) {
                const structuralEscapedString = typeof secureGridStringEscape === "function" ? secureGridStringEscape(singleBulletString) : singleBulletString;
                return '<li class="pricing-card-bullet-item"><span>✓</span> <span>' + structuralEscapedString + '</span></li>';
            }).join("");
        };

        // 5. Structure defaults if matrix fields are empty
        const coreTiersRegistryList = pricingDatasetNode.tiers || [
            { key: "starter", name: pricingDatasetNode.starter_label || "Starter Package", price: parseFloat(pricingDatasetNode.starter) || 0, highlighted: false },
            { key: "compliance", name: pricingDatasetNode.compliance_label || "Compliance Guard", price: parseFloat(pricingDatasetNode.compliance) || 0, highlighted: true },
            { key: "enterprise", name: pricingDatasetNode.enterprise_label || "Enterprise Asset Suite", price: parseFloat(pricingDatasetNode.enterprise) || 0, highlighted: false }
        ];

        const frameworkSectionTitleText = pricingDatasetNode.section_title || "Flexible Pricing Framework Options";
        const frameworkSectionSubtitleText = pricingDatasetNode.section_subtitle || "Select the optimal processing speed and protection depth your operation requires.";
        const dynamicCadenceDescriptorLabel = pricingDatasetNode.cadence_label || " / registration";
        const dynamicPopularBadgeTextString = pricingDatasetNode.popular_badge_text || "Most Popular Option";
        const dynamicButtonActionVerbText = pricingDatasetNode.button_text || "Select Plan Option";

        // 6. Generate cards structural markup layout array strings
        var pricingCardsGeneratedHtmlArrayString = "";
        coreTiersRegistryList.forEach(function(tierRecordObj) {
            const tierUniqueKeyId = tierRecordObj.key;
            const tierPresentationName = tierRecordObj.name;
            const numericPriceValueFloat = parseFloat(tierRecordObj.price) || 0;
            const isCardHighlightedActive = tierRecordObj.highlighted || false;
            const targetedBulletsSourceArray = pricingDatasetNode.bullets && pricingDatasetNode.bullets[tierUniqueKeyId] ? pricingDatasetNode.bullets[tierUniqueKeyId] : [];

            var conditionalBadgeMarkupCell = "";
            var structuralHighlightClassNameSelector = "pricing-card-node text-center-mobile";
            var integerColorHighlightClassNameSelector = "pricing-card-price-integer";

            if (isCardHighlightedActive) {
                conditionalBadgeMarkupCell = '<span class="pricing-card-popular-badge">' + dynamicPopularBadgeTextString + '</span>';
                structuralHighlightClassNameSelector = "pricing-card-node pricing-card-highlighted text-center-mobile";
                integerColorHighlightClassNameSelector = "pricing-card-price-integer color-primary";
            }

            pricingCardsGeneratedHtmlArrayString += '<div class="' + structuralHighlightClassNameSelector + '">' + 
                conditionalBadgeMarkupCell + 
                '<div class="pricing-card-upper-content">' +
                    '<h3 class="pricing-card-tier-title">' + tierPresentationName + '</h3>' +
                    '<div class="pricing-card-rate-row">' +
                        '<span class="' + integerColorHighlightClassNameSelector + '">$' + numericPriceValueFloat.toFixed(2) + '</span>' +
                        '<span class="pricing-card-cadence-label">' + dynamicCadenceDescriptorLabel + '</span>' +
                    '</div>' +
                    '<ul class="pricing-card-bullets-list">' + compileBulletsSubLoopMarkup(targetedBulletsSourceArray) + '</ul>' +
                '</div>' +
                '<a href="wizard.html?service=' + slug + '&plan=' + tierUniqueKeyId + '" class="pricing-card-action-btn ' + tierUniqueKeyId + '-btn-theme">' + dynamicButtonActionVerbText + '</a>' +
            '</div>';
        });

        // 7. Inject layout into page target container node
        zone.innerHTML = '<section id="pricing-framework-target" class="pricing-grid-master-section"><div class="site-width-alignment-guard prgrid-container"><div class="pricing-grid-header-block"><h2 class="pricing-grid-main-title">' + frameworkSectionTitleText + '</h2><p class="pricing-grid-subtitle">' + frameworkSectionSubtitleText + '</p></div><div class="pricing-cards-responsive-grid">' + pricingCardsGeneratedHtmlArrayString + '</div></div></section>';

        // 8. Attach responsive click intercept scroll physics
        setTimeout(function() {
            const livePageAnchorNodesArray = zone.querySelectorAll('a') || document.querySelectorAll('a');
            livePageAnchorNodesArray.forEach(function(individualAnchorElement) {
                const internalAnchorTextContent = individualAnchorElement.textContent || "";
                if (internalAnchorTextContent.trim() !== "") {
                    individualAnchorElement.addEventListener("click", function(clickInterceptEvent) {
                        if (individualAnchorElement.getAttribute("href") === "#pricing-framework-target") {
                            const viewScrollTargetElementNode = document.getElementById("pricing-framework-target") || zone.querySelector(".pricing-grid-master-section");
                            if (viewScrollTargetElementNode) {
                                clickInterceptEvent.preventDefault();
                                viewScrollTargetElementNode.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                        }
                    });
                }
            });
        }, 60);

    } catch (runtimeExceptionError) {
        console.error("Pricing loop system renderer compilation crash: ", runtimeExceptionError);
    }
}

// 9. Global Variable Assignments Export Link
window.renderMasterPricingEngine = renderMasterPricingEngine;