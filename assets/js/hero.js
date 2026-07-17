/**
 * filings4u Platform Architecture
 * Module: hero.js (Part 1 of 2)
 * Refined Spacing Engine & Page Title Name Interceptor
 */
(function() {
    const targetConfig = {
        elementId: "filings4u-global-hero-root",
        styleId: "filings4u-hero-styles"
    };

    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .launchpad-grid-matrix {
                display: grid !important;
                grid-template-columns: 1.1fr 0.9fr !important;
                gap: 60px !important;
                align-items: center !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }

            /* MOBILE SCREEN RESPONSIVE RE-ALIGNMENTS WITH EXTRA TOP VIEW PORT SLOTS */
            @media (max-width: 991px) {
                #${targetConfig.elementId} main {
                    padding: 120px 0 40px 0 !important; /* Increased padding top spacing safety bounds */
                    margin-top: 80px !important;        /* Increased gap from navigation bar elements */
                }
                #${targetConfig.elementId} .site-width-alignment-guard {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 20px !important;
                }
                #${targetConfig.elementId} h1.hero-headline {
                    font-size: 2.2rem !important;
                }
                #${targetConfig.elementId} .launchpad-grid-matrix {
                    grid-template-columns: 1fr !important;
                    gap: 40px !important;
                }
                #${targetConfig.elementId} .launchpad-grid-matrix > div:last-child {
                    order: 1 !important;
                }
                #${targetConfig.elementId} .launchpad-grid-matrix > div:first-child {
                    order: 2 !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    window.FILINGS4U_HERO_TARGET = targetConfig.elementId;
})();

/* Part 2: Core Data Routing and Context Processing Pipeline */
function renderMasterHeroEngine(overrideTargetId, metaDataRecord) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_HERO_TARGET || "filings4u-global-hero-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        const pathSegments = window.location.pathname.split("/").filter(Boolean);
        let slug = pathSegments.pop() || "index";
        slug = slug.replace(".html", "").split("?")[0].split("#")[0].toLowerCase().trim();

        if (metaDataRecord && metaDataRecord.slug) {
            slug = metaDataRecord.slug.toLowerCase().trim();
        }

        // --- HARDCODE REPLACEMENT: INTERCEPT HOME/INDEX SLUGS FOR DYNAMIC ALIGNMENT ---
        let lookupSlug = slug;
        let finalDisplaySlug = slug;
        if (slug === "index" || slug === "home" || slug === "") {
            lookupSlug = "index";
            finalDisplaySlug = "compliance"; // Clears "index" references from system lookups
        }

        const statePricingSource = window.STATE_PRICING || {};
        const govtPricingSource = window.GOVT_PRICING || {};
        const pricingDataNode = statePricingSource[lookupSlug] || govtPricingSource[lookupSlug] || {};

        // Calculate and replace raw page labels
        const serviceRawName = pricingDataNode.service_name || pricingDataNode.title || finalDisplaySlug;
        const serviceFormattedName = serviceRawName.split("-").map(function(w) {
            if(["llc", "ein", "dot", "ucr", "clia", "dba", "scac", "boc-3", "boc"].includes(w.toLowerCase())) return w.toUpperCase();
            return w.charAt(0).toUpperCase() + w.slice(1);
        }).join(" ");

        const displayPillText = pricingDataNode.category || pricingDataNode.pill || "Compliance Operations Framework";
        const displayHeroTitle = `Streamlined <br><span style="color:#10b981;">${serviceFormattedName} Automation</span>`;
        const displayHeroLead = pricingDataNode.description || pricingDataNode.hero_lead || "Complete corporate formations, multi-state commercial carrier registration portals, and federal logistics compliance filings securely online.";
        const dynamicHeroImgSrc = pricingDataNode.image || pricingDataNode.img_src || ("images/" + lookupSlug + "-hero.jpg");
        const computedActionLinkDestination = "#pricing-framework-target";

        executePreservedHeroCompiler(zone, displayPillText, displayHeroTitle, displayHeroLead, dynamicHeroImgSrc, computedActionLinkDestination);
    } catch (err) {
        console.error("Hero context lifecycle attachment failure:", err);
    }
}
window.renderMasterHeroEngine = renderMasterHeroEngine;


/**
 * filings4u Platform Architecture
 * Module: hero.js (Part 2 of 2)
 * Harmonized HTML Template Compiler & Smooth Interaction Controls
 */

function executePreservedHeroCompiler(zone, displayPillText, displayHeroTitle, displayHeroLead, dynamicHeroImgSrc, computedActionLinkDestination) {
    zone.innerHTML = `
        <main style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; display: block; margin: 0 !important;">
            <div class="site-width-alignment-guard" style="width: 1450px; max-width: 1450px; margin: 0 auto !important; padding: 0 40px; box-sizing: border-box !important;">
                <div class="launchpad-grid-matrix">
                    
                    <!-- CONTENT ARTIFACT BLOCK LAYER -->
                    <div style="width: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; text-align: left;">
                        <span class="f4u-hero-pill-node" style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; align-self: flex-start;"></span>
                        
                        <h1 class="hero-headline f4u-hero-title-node" style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;"></h1>
                        
                        <p class="f4u-hero-lead-node" style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0 0 28px 0; max-width: 580px;"></p>
                        
                        <a href="${computedActionLinkDestination}" class="f4u-hero-action-anchor" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 1rem; display: inline-block; align-self: flex-start;">Initialize Application &rarr;</a>
                    </div>
                    
                    <!-- FLUID VISUAL IMAGE CONTAINER -->
                    <div style="display: flex; justify-content: center; width: 100%; height: 100%; box-sizing: border-box;">
                        <img src="" class="hero-display-img" alt="Service Preview" style="width: 100%; max-width: 620px; height: auto; aspect-ratio: 16 / 10; object-fit: cover; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);">
                    </div>
                    
                </div>
            </div>
        </main>
    `;

    const pill = zone.querySelector(".f4u-hero-pill-node");
    const title = zone.querySelector(".f4u-hero-title-node");
    const lead = zone.querySelector(".f4u-hero-lead-node");
    const img = zone.querySelector(".hero-display-img");

    if (pill) pill.textContent = displayPillText;
    if (title) title.innerHTML = displayHeroTitle;
    if (lead) lead.innerHTML = displayHeroLead;
    if (img) img.src = dynamicHeroImgSrc;

    // Dynamic Element ID Interceptor Engine
    setTimeout(function() {
        const anchor = zone.querySelector('.f4u-hero-action-anchor');
        if (anchor) {
            anchor.addEventListener("click", function(e) {
                // Intercept anchor action mapping directly to pricing page elements
                const dest = document.getElementById("pricing-framework-target") || 
                             document.getElementById("filings4u-pricing-board-root") || 
                             document.querySelector(".filings4u-pricing-section");
                if (dest) {
                    e.preventDefault();
                    dest.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        }
    }, 40);
}
