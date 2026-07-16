/**
 * filings4u Platform Architecture
 * Module: section5.js (Part 1 of 2)
 * Unified Shield Matrix Layout Engine & Styles
 */
(function() {
    const targetConfig = {
        elementId: "filings4u-security-shield-root",
        styleId: "filings4u-security-shield-styles"
    };

    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .sec-hero-main-container {
                position: relative !important;
                background-color: #0a1f44 !important;
                padding: 60px 0 !important;
                overflow: hidden !important;
            }
            #${targetConfig.elementId} .sec-vector-dots-overlay {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                opacity: 0.03 !important;
                pointer-events: none !important;
                background-image: radial-gradient(#ffffff 1px, transparent 1px) !important;
                background-size: 20px 20px !important;
            }
            #${targetConfig.elementId} .sec-hero-grid {
                display: grid !important;
                grid-template-columns: 1.1fr 0.9fr !important;
                gap: 60px !important;
                align-items: center !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }
            
            /* DESKTOP MATRIX DIRECTION: POSITION TEXT LEFT, IMAGE RIGHT */
            #${targetConfig.elementId} .sec-hero-grid > div:first-child { order: 1 !important; }
            #${targetConfig.elementId} .sec-hero-grid > div:last-child { order: 2 !important; }

            /* UNIFIED MOBILE VIEW RESPONSIVE MEDIA HOOKS */
            @media (max-width: 991px) {
                #${targetConfig.elementId} .sec-hero-main-container {
                    padding: 40px 0 !important;
                }
                #${targetConfig.elementId} h2 {
                    font-size: 1.8rem !important;
                }
                #${targetConfig.elementId} .site-width-alignment-guard {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 20px !important;
                }
                #${targetConfig.elementId} .sec-hero-grid {
                    grid-template-columns: 1fr !important;
                    gap: 40px !important;
                }
                
                /* MOBILE ROW FLIP STACKING: IMAGE TOP (LAST IN DOM), TEXT BOTTOM (FIRST IN DOM) */
                #${targetConfig.elementId} .sec-hero-grid > div:last-child { order: 1 !important; }
                #${targetConfig.elementId} .sec-hero-grid > div:first-child { order: 2 !important; }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    window.FILINGS4U_SECURITY_TARGET = targetConfig.elementId;
})();

/* Part 2: Safe Routing & Context Layer Injection */
function renderSecurityInfrastructurePage(overrideTargetId, metaDataRecord) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_SECURITY_TARGET || "filings4u-security-shield-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;
        
        let slug = "index";
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
            slug = rawPathname.replace(".html", "");
        }
        
        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
        const displayTitle = contextSource.title || contextSource.hero_title || "Filing";
        const displaySlug = contextSource.slug || slug;
        
        executeSecurityCompiler(zone, displayTitle, displaySlug, contextSource);
    } catch (err) {
        console.error("Security matrix feature engine routing failure:", err);
    }
}
window.renderMasterTrustShieldMatrix = renderSecurityInfrastructurePage;

/**
 * filings4u Platform Architecture
 * Module: section5.js (Part 2 of 2)
 * Normalized HTML Content Compiler & Ignition Hooks
 */

function executeSecurityCompiler(zone, displayTitle, displaySlug, metaDataRecord) {
    const resolvedImageSrc = (metaDataRecord && metaDataRecord.secfImage) ? metaDataRecord.secfImage : "images/" + displaySlug + "-secf.jpg";
    
    // Normalize and capitalize title text cleanly matching your uppercase patterns
    const titleUpperCaseFormatted = displayTitle.replace(/-/g, ' ').split(" ").map(function(w) {
        if(["llc", "ein", "dot", "ucr", "clia", "dba", "scac", "boc-3", "boc"].includes(w.toLowerCase())) return w.toUpperCase();
        return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");

    zone.innerHTML = `
        <main class="sec-hero-main-container" style="box-sizing: border-box; margin: 0 !important; display: block; width: 100% !important; max-width: 100% !important; font-family: system-ui, sans-serif;">
            <!-- White Vector Dots Background Overlay -->
            <div class="sec-vector-dots-overlay"></div>
            
            <div class="site-width-alignment-guard" style="width: 1450px; max-width: 1450px; margin: 0 auto !important; padding: 0 40px; box-sizing: border-box !important; position: relative; z-index: 10;">
                <div class="sec-hero-grid">
                    
                    <!-- CONTENT ARTIFACT BLOCK LAYER (DESKTOP: LEFT SIDE / MOBILE: BOTTOM) -->
                    <div style="width: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; text-align: left;">
                        <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; align-self: flex-start;">Guaranteed Audit Protection</span>
                        
                        <h2 style="color: #ffffff; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">
                            Institutional Shield. <br><span style="color: #10b981;">Never Miss A Filing.</span>
                        </h2>
                        
                        <p style="color: #cbd5e1; font-weight: 700; font-size: 1.0rem; margin: 0 0 12px 0; line-height: 1.4;">
                            Active database synchronization safeguards your status across state lines.
                        </p>
                        
                        <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin: 0 0 28px 0;">
                            Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your ${titleUpperCaseFormatted} operational status is permanently shielded.
                        </p>
                        
                        <a href="get-started.html" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 1rem; display: inline-block; align-self: flex-start;">Explore Security Infrastructure &rarr;</a>
                    </div>
                    
                    <!-- FLUID VISUAL IMAGE CONTAINER (DESKTOP: RIGHT SIDE / MOBILE: TOP) -->
                    <div style="display: flex; justify-content: center; width: 100%; box-sizing: border-box;">
                        <img src="${resolvedImageSrc}" alt="${titleUpperCaseFormatted} Protection Asset" style="width: 100%; max-width: 620px; height: auto; aspect-ratio: 16 / 10; object-fit: cover; display: block; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);" onerror="this.onerror=null; this.removeAttribute('onerror'); this.src='images/regulatory-consulting.jpg';">
                    </div>
                    
                </div>
            </div>
        </main>
    `;
}

// --- SECURE LIFECYCLE EVENT HANDLER RIGGING ---
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() { renderSecurityInfrastructurePage(); });
} else {
    renderSecurityInfrastructurePage();
}
