/**
 * filings4u Platform Architecture
 * Module: hero.js (Part 1 - Dynamic Style Injector)
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
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: stretch !important;
                justify-content: space-between;
                gap: 40px;
                width: 100%;
            }
            #${targetConfig.elementId} .hero-image-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            /* MOBILE OPTIMIZATIONS & SPACING OVERRIDES */
            @media (max-width: 768px) {
                #${targetConfig.elementId} section { 
                    margin-bottom: 20px !important; 
                }
                #${targetConfig.elementId} .responsive-hero-grid { 
                    margin-top: 20px !important; 
                    flex-direction: column !important;
                    gap: 24px !important;
                }
                #${targetConfig.elementId} .hero-image-container { 
                    order: 1 !important;
                    max-width: 100% !important;
                    width: 100% !important;
                    padding-bottom: 10px !important; 
                }
                #${targetConfig.elementId} .responsive-hero-grid > div:first-child { 
                    order: 2 !important;
                    width: 100% !important;
                    padding-bottom: 10px !important; 
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

/* Part 2: Dynamic Core Context Architecture & Smooth Scroll Compiler */
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

   /* Part 3: Tightened Spacing Responsive Template HTML Compiler */
function executeHeroCompiler(zone, displayTitle, displaySlug) {
    zone.innerHTML = `
    <!-- MAIN HERO CANVAS CONTAINER (TIGHTENED VERTICAL MARGINS AND PADDING) -->
    <main class="page-container" style="background: #ffffff; padding: 15px 0 10px 0 !important; margin: 0 !important; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; display: block;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            
            <div class="responsive-hero-grid" style="margin-top: 10px !important;">
                
                <!-- TEXT COLUMN LAYER -->
                <article class="content-area" style="flex: 1.2; min-width: 320px; box-sizing: border-box; margin: 0; padding: 20px 0; display: flex; flex-direction: column; justify-content: center;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; align-self: flex-start;">${displayPillText}</span>
                    
                    <h1 class="hero-headline" style="color: #0a1f44; font-size: 3rem; font-weight: 900; margin: 0 0 14px 0; line-height: 1.15; letter-spacing: -1px;">
                        ${displayHeroTitle}
                    </h1>
                    
                    <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">${displayHeroLead}</p>
                    
                    <a href="${computedActionLinkDestination}" style="background: #10b981; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block; align-self: flex-start;">Initialize Application &rarr;</a>
                </article>
                
                <!-- IMAGE LAYER FIXED CONTAINER -->
                <aside class="hero-image-container" style="flex: 1; min-width: 320px; max-width: 520px; margin: 0; padding: 20px 0;">
                    <img src="${dynamicHeroImgSrc}" class="hero-display-img" alt="Framework Layout Preview" style="width: 100%; height: 100%; max-height: 100%; object-fit: cover; display: block; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15);" onerror="this.onerror=null; this.src='images/default-hero.jpg';">
                </aside>
                
            </div>
        </div>
    </main>
    `;
}


        // 5. Output synchronized layout markup string
        zone.innerHTML = `
        <section style="padding: 0 !important; background: #ffffff; color: #0a1f44; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; overflow: hidden; margin-top: 30px !important; margin-bottom: 50px !important;">
            <div class="responsive-hero-grid" style="max-width: 1450px; margin: 40px auto 0 auto; padding: 0 40px; box-sizing: border-box;">
                
                <!-- CONTENT COLUMN LAYER -->
                <div style="flex: 1; min-width: 320px; box-sizing: border-box; padding: 40px 0; display: flex; flex-direction: column; justify-content: center;">
                    <span style="background: rgba(16,185,129,0.1); color: #10b981; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; display: inline-block; align-self: flex-start;">${displayPillText}</span>
                    <h1 class="hero-headline" style="font-size: 3rem; font-weight: 800; margin: 16px 0; line-height: 1.15; color: #0a1f44;">${displayHeroTitle}</h1>
                    <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">${displayHeroLead}</p>
                    <a href="${computedActionLinkDestination}" style="background: #10b981; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block; align-self: flex-start;">Initialize Application &rarr;</a>
                </div>
                
                <!-- FLUID VISUAL IMAGE CONTAINER -->
                <div class="hero-image-container" style="flex: 1; min-width: 320px; box-sizing: border-box; padding: 40px 0;">
                    <img src="${dynamicHeroImgSrc}" class="hero-display-img" alt="Framework Layout Preview" style="width: 100%; height: 100%; max-height: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15); display: block;" onerror="this.onerror=null; this.src='images/default-hero.jpg';">
                </div>
                
            </div>
        </section>
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
