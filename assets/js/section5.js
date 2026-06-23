/**
 * filings4u Platform Architecture
 * Module: section5.js (Part 1 - Absolute Image-on-Top Mobile Stacking)
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
            #${targetConfig.elementId} .sec-hero-main-container { position: relative; background-color: #0a1f44 !important; padding: 80px 0 !important; overflow: hidden; }
            #${targetConfig.elementId} .sec-vector-dots-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.03; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px; }
            #${targetConfig.elementId} .sec-max-width-alignment-guard { max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; position: relative; z-index: 10; }
            #${targetConfig.elementId} .sec-hero-grid { display: flex; flex-wrap: wrap; gap: 40px; align-items: center; justify-content: space-between; }
            #${targetConfig.elementId} .sec-hero-col { flex: 1; min-width: 320px; box-sizing: border-box; }

            /* MOBILE SCREEN RESPONSIVE LAYOUT OVERRIDES */
            @media (max-width: 768px) {
                #${targetConfig.elementId} .sec-max-width-alignment-guard { padding: 0 20px !important; }
                #${targetConfig.elementId} .sec-hero-main-container { padding: 40px 0 !important; }
                #${targetConfig.elementId} .sec-hero-grid { display: flex !important; flex-direction: column !important; gap: 30px !important; }
                #${targetConfig.elementId} .sec-hero-col { width: 100% !important; text-align: left !important; display: flex !important; flex-direction: column !important; align-items: flex-start !important; }
                
                /* EXACT STRUCTURAL FLEX ORDER: TARGETS CLASSES BY CONTENT TYPE */
                /* Forces the graphic container to the top */
                #${targetConfig.elementId} .hero-image-container,
                #${targetConfig.elementId} aside,
                #${targetConfig.elementId} .sec-hero-grid > div:has(img) { 
                    order: 1 !important; 
                }
                
                /* Forces the text content container to the bottom */
                #${targetConfig.elementId} .content-area,
                #${targetConfig.elementId} article,
                #${targetConfig.elementId} .sec-hero-grid > div:has(h2),
                #${targetConfig.elementId} .sec-hero-grid > div:has(h1) { 
                    order: 2 !important; 
                }
                
                /* UNIFORM ACCENT TYPOGRAPHY SIZING LOCKS */
                #${targetConfig.elementId} h1, #${targetConfig.elementId} h2 { font-size: 2rem !important; line-height: 1.2 !important; text-align: left !important; font-weight: 900 !important; }
                #${targetConfig.elementId} h3 { font-size: 1.3rem !important; text-align: left !important; font-weight: 800 !important; }
                #${targetConfig.elementId} p { font-size: 0.95rem !important; line-height: 1.6 !important; text-align: left !important; font-weight: 500 !important; color: #94a3b8 !important; }
                #${targetConfig.elementId} .btn-main, #${targetConfig.elementId} a { align-self: flex-start !important; width: auto !important; }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    window.FILINGS4U_SECURITY_TARGET = targetConfig.elementId;
})();




/* Part 2 Update inside section5.js */
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

        // Pass variables directly down into compiler
        executeSecurityCompiler(zone, displayTitle, contextSource);
    } catch (err) {
        console.error(err);
    }
}
window.renderMasterTrustShieldMatrix = renderSecurityInfrastructurePage; // Add global fallback name matching definition

/* Part 3: Responsive Security Shield Template HTML Compiler (Updated with Trust Columns & Images) */
function executeSecurityCompiler(zone, displayTitle, metaDataRecord) {
    const resolvedImageSrc = (metaDataRecord && metaDataRecord.secfImage) ? metaDataRecord.secfImage : "images/regulatory-compliance.jpg";

    zone.innerHTML = `
    <div class="sec-infrastructure-page-root" style="font-family: system-ui, sans-serif !important; background-color: #f8fafc !important; color: #0a1f44 !important; line-height: 1.5 !important; box-sizing: border-box; margin: 0; padding: 0;">
        <main class="sec-hero-main-container" style="box-sizing: border-box; margin: 0 !important;">
            
            <!-- White Vector Dots Background Overlay -->
            <div class="sec-vector-dots-overlay"></div>
            
            <div class="sec-max-width-alignment-guard">
                <div class="sec-hero-grid" style="display: flex; flex-wrap: wrap; gap: 40px; align-items: center; justify-content: space-between;">
                    
                    <!-- LEFT SIDE: DYNAMIC IMAGE COLUMN BUILDER -->
                    <div class="sec-hero-col" style="flex: 1; min-width: 320px; max-width: 550px; display: flex; justify-content: center; box-sizing: border-box;">
                        <img src="${resolvedImageSrc}" alt="${displayTitle} Protection Asset" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px rgba(0, 0, 0, 0.65), 0 10px 20px rgba(0, 0, 0, 0.3);" onerror="this.onerror=null; this.src='images/regulatory-compliance.jpg';">
                    </div>
                    
                    <!-- RIGHT SIDE: CONTENT BASE -->
                    <div class="sec-hero-col" style="flex: 1; min-width: 320px; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                        <span style="font-size: 0.75rem !important; font-weight: 700 !important; color: #10b981 !important; background: rgba(16, 185, 129, 0.12) !important; padding: 6px 14px !important; border-radius: 20px !important; display: inline-block !important; margin-bottom: 20px !important; border: 1px solid rgba(16, 185, 129, 0.25) !important; text-transform: uppercase !important; width: fit-content; align-self: flex-start;">Guaranteed Audit Protection</span>
                        <h2 style="color: #ffffff; font-size: 2.5rem !important; font-weight: 900 !important; margin: 0 0 18px 0 !important; line-height: 1.15 !important; letter-spacing: -0.5px !important;">Institutional Shield.<br><span style="color: #10b981 !important;">Never Miss A Filing.</span></h2>
                        <p style="color: #cbd5e1 !important; font-weight: 700 !important; font-size: 1.2rem !important; margin: 0 0 16px 0 !important; line-height: 1.4 !important;">Active database synchronization safeguards your status across state lines.</p>
                        <p style="color: #94a3b8 !important; font-size: 1.05rem !important; line-height: 1.6 !important; margin: 0 0 28px 0 !important;">Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your ${displayTitle} operational status is permanently shielded.</p>
                        <a href="compliance.html" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 0.95rem; align-self: flex-start;">Explore Security Infrastructure &rarr;</a>
                    </div>
                    
                </div>
            </div>
        </main>
    </div>
    `;
}

/* Part 4: Global Module Binding & Self-Execution Listeners */
window.renderSecurityInfrastructurePage = renderSecurityInfrastructurePage;

// Auto-boot sequence optimized exclusively to run via modern DOM event states
document.addEventListener("DOMContentLoaded", function() {
    renderSecurityInfrastructurePage();
});
