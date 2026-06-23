/**
 * filings4u Platform Architecture
 * Module: section4.js (Flawless Dynamic Launchpad Engine)
 */

(function() {
    // 1. Establish unique frontend target configurations to prevent collision
    const targetConfig = {
        elementId: "filings4u-launchpad-feature-root",
        styleId: "filings4u-launchpad-styles"
    };

    // 2. Inject completely self-contained responsive CSS layout rules
    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .launchpad-grid-matrix {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 60px;
                align-items: center;
                width: 100%;
            }

            /* MOBILE SCREEN OPTIMIZATIONS */
            @media (max-width: 768px) {
                #${targetConfig.elementId} section {
                    padding: 40px 0 !important;
                }
                #${targetConfig.elementId} h2 {
                    font-size: 1.8rem !important;
                }
                #${targetConfig.elementId} .launchpad-grid-matrix {
                    grid-template-columns: 1fr !important;
                    gap: 30px !important;
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
    
    window.FILINGS4U_LAUNCHPAD_TARGET = targetConfig.elementId;
})();

/* Part 2: Safe Routing & Context Layer */
function renderMasterLaunchpadEngine(overrideTargetId, metaDataRecord) {
    try {
        // 1. Establish the clean isolated default target configuration
        const targetId = overrideTargetId || window.FILINGS4U_LAUNCHPAD_TARGET || "filings4u-launchpad-feature-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // 2. Discover slug names cleanly using path configurations
        let slug = "index";
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
            slug = rawPathname.replace(".html", "");
        }

        // 3. Dynamic parameter lookup chain (Record -> Catalog -> Default Fallbacks)
        const contextSource = metaDataRecord || 
                              (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || 
                              {};

        const displayTitle = contextSource.title || contextSource.hero_title || "Filing";
        const displaySlug = contextSource.slug || slug;

        // Pass resolved parameters down into our template compiler safely
        executeLaunchpadCompiler(zone, displayTitle, displaySlug, contextSource);

    } catch (err) {
        console.error("Launchpad feature engine critical routing failure:", err);
    }
}

/* Part 3: Responsive Launchpad Feature HTML Compiler */
function executeLaunchpadCompiler(zone, displayTitle, displaySlug, metaDataRecord) {
    // FIXED 404 ENGINES: Pre-calculating path variables with clean fallback guards
    const primaryImageSrc = (metaDataRecord && metaDataRecord.seceImage) ? metaDataRecord.seceImage : "images/" + displaySlug + "-sece.jpg";

    zone.innerHTML = `
    <section style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; margin: 0 !important;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            
            <div class="launchpad-grid-matrix">
                
                <!-- CONTENT ARTIFACT BLOCK LAYER -->
                <div style="width: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; align-self: flex-start;">Launch Infrastructure</span>
                    
                    <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">
                        Startup Launchpad. <br><span style="color: #10b981;">Built For Scale.</span>
                    </h2>
                    
                    <p style="color: #0a1f44; font-weight: 700; font-size: 1.0rem; margin: 0 0 12px 0; line-height: 1.4;">Turn your business idea into an officially recognized state legal entity overnight.</p>
                    
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0 0 28px 0;">Accelerate your early-stage venture with robust entity setup frameworks built for founders. We automate formations, corporate bylaw preparation, tax ID filings (EIN), and state registry submissions for your active ${displayTitle} pipeline.</p>
                    
                    <a href="get-started.html" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 1rem; display: inline-block; align-self: flex-start;">Launch Your Startup &rarr;</a>
                </div>
                
                <!-- FLUID VISUAL IMAGE CONTAINER -->
                <div style="display: flex; justify-content: center; width: 100%;">
                    <!-- FIXED onerror INTERCEPTOR: Wipes out the 404 loop and swaps inside a default fallback asset cleanly -->
                    <img src="${primaryImageSrc}" alt="Startup Launch" style="width: 100%; height: 100%; max-height: 100%; object-fit: cover; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);" onerror="this.onerror=null; this.removeAttribute('onerror'); this.src='images/startup-launch.jpg';">
                </div>
                
            </div>
        </div>
    </section>
    `;
}

/* Part 4: Global Module Binding */
window.renderMasterLaunchpadEngine = renderMasterLaunchpadEngine;
