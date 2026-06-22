/**
 * filings4u Platform Architecture
 * Module: hero.js (Part 1 - Fixed Visual Layout Injector)
 */

(function() {
    // 1. Establish unique frontend target configurations to prevent collision
    const targetConfig = {
        elementId: "filings4u-global-hero-root",
        styleId: "filings4u-hero-styles"
    };

    // 2. Inject completely self-contained responsive CSS rules
    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .responsive-hero-grid {
                display: flex !important;
                flex-direction: row !important;
                flex-wrap: wrap !important;
                align-items: stretch !important;
                justify-content: space-between !important;
                gap: 40px !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }
            #${targetConfig.elementId} .hero-image-container {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex: 1 !important;
                min-width: 320px !important;
                max-width: 520px !important;
                box-sizing: border-box !important;
            }
            #${targetConfig.elementId} .content-area {
                flex: 1.2 !important;
                min-width: 320px !important;
                box-sizing: border-box !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
            }

            /* MOBILE SCREEN RESPONSIVE LAYOUT OVERRIDES */
            @media (max-width: 991px) {
                #${targetConfig.elementId} main {
                    padding: 20px 0 10px 0 !important;
                }
                #${targetConfig.elementId} .responsive-hero-grid {
                    flex-direction: column !important;
                    gap: 24px !important;
                    margin-top: 10px !important;
                }
                #${targetConfig.elementId} .hero-image-container {
                    order: 1 !important;
                    max-width: 100% !important;
                    width: 100% !important;
                    padding: 10px 0 !important;
                }
                #${targetConfig.elementId} .content-area {
                    order: 2 !important;
                    width: 100% !important;
                    padding: 10px 0 !important;
                }
                #${targetConfig.elementId} .hero-headline {
                    font-size: 2.2rem !important;
                    line-height: 1.2 !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    window.FILINGS4U_HERO_TARGET = targetConfig.elementId;
})();

/* Part 2: Core Context Architecture & Smooth Scroll Compiler */
function renderMasterHeroEngine(overrideTargetId, metaDataRecord) {
    try {
        // 1. Establish the clean isolated default target configuration
        const targetId = overrideTargetId || window.FILINGS4U_HERO_TARGET || "filings4u-global-hero-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // 2. Discover slug names cleanly using path configurations
        let slug = "index";
        if (targetId !== "index-hero-zone" && targetId !== "dynamic-hero-zone" && targetId !== "filings4u-global-hero-root") {
            slug = targetId.replace("-hero-zone", "").toLowerCase().trim();
        } else {
            const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
            if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
                slug = rawPathname.replace(".html", "");
            }
        }

        // 3. Dynamic fallback lookup system maps context payloads
        const liveRecordSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
        
        const displayPillText = liveRecordSource.pill || "Statutory Data Security Covenant";
        const displayHeroTitle = liveRecordSource.hero_title || liveRecordSource.service_title || liveRecordSource.title || "Compliance Portal";
        const displayHeroLead = liveRecordSource.hero_lead || liveRecordSource.description || "Automated Inter-Jurisdictional Regulatory Licensing, Onboarding Compliance Systems, and Provisioning Pipelines.";
        const dynamicHeroImgSrc = "images/" + slug + "-hero.jpg";

        // 4. Calculate link routes dynamically
        var computedActionLinkDestination = "#pricing-framework-target";
        if (slug === "index") {
            computedActionLinkDestination = "get-started.html";
        }

        // 5. Output synchronized layout markup string
        zone.innerHTML = `
        <main class="page-container" style="background: #ffffff; padding: 15px 0 10px 0 !important; margin: 0 !important; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; display: block;">
            <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 80px 50px 40px !important; box-sizing: border-box !important;">
                <div class="responsive-hero-grid">
                    
                    <!-- TEXT COLUMN LAYER -->
                    <article class="content-area">
                        <span style="background: rgba(16,185,129,0.1); color: #10b981; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; display: inline-block; align-self: flex-start;">${displayPillText}</span>
                        <h1 class="hero-headline" style="font-size: 3rem; font-weight: 800; margin: 16px 0; line-height: 1.15; color: #0a1f44;">${displayHeroTitle}</h1>
                        <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">${displayHeroLead}</p>
                        <a href="${computedActionLinkDestination}" style="background: #10b981; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block; align-self: flex-start;">Initialize Application &rarr;</a>
                    </article>
                    
                    <!-- FLUID VISUAL IMAGE CONTAINER -->
                    <aside class="hero-image-container">
                        <img src="${dynamicHeroImgSrc}" class="hero-display-img" alt="Framework Layout Preview" style="width: 100%; height: 100%; max-height: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15); display: block;" onerror="this.onerror=null; this.src='images/default-hero.jpg';">
                    </aside>
                    
                </div>
            </div>
        </main>
        `;

        // 6. Hook smooth vertical page jumps if landing point exists
        if (slug !== "index") {
            setTimeout(function() {
                const heroActionAnchor = zone.querySelector('a[href="#pricing-framework-target"]');
                if (heroActionAnchor) {
                    heroActionAnchor.addEventListener("click", function(clickEvent) {
                        const scrollDestinationNode = document.getElementById("pricing-framework-target") || document.getElementById("filings4u-pricing-board-root");
                        if (scrollDestinationNode) {
                            clickEvent.preventDefault();
                            scrollDestinationNode.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    });
                }
            }, 40);
        }

    } catch (err) {
        console.error("Hero dynamic engine calculation runtime error:", err);
    }
}

// 7. Global Variable Assignments Export Link
window.renderMasterHeroEngine = renderMasterHeroEngine;

