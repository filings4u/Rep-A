/**
 * filings4u Platform Architecture
 * Module: section3.js (Part 1 - Isolated Stylesheet Engine)
 */

(function() {
    // 1. Establish unique frontend target configurations to prevent collision
    const targetConfig = {
        elementId: "filings4u-processing-packages-root",
        styleId: "filings4u-processing-packages-styles"
    };

    // 2. Inject completely self-contained responsive CSS layout rules
    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .processing-options-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 30px;
                width: 100%;
                align-items: stretch !important;
                box-sizing: border-box;
            }

            /* MOBILE SCREEN OPTIMIZATIONS */
            @media (max-width: 991px) {
                #${targetConfig.elementId} section {
                    padding: 40px 0 !important;
                }
                #${targetConfig.elementId} h2 {
                    font-size: 1.8rem !important;
                }
                #${targetConfig.elementId} .processing-options-grid {
                    grid-template-columns: 1fr !important;
                    gap: 20px !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    window.FILINGS4U_PACKAGES_TARGET = targetConfig.elementId;
})();


/* Part 2: Safe Routing & Dynamic Data Context Tunneler */
function resolvePricingObjectWithRetry(slug) {
    const source = window.statePricingData || window.servicesPricing || window.pricingData || {};
    const record = source[slug] || source[slug.replace(/-/g, '_')] || source[slug.toUpperCase()];
    
    if (record) {
        return {
            starterPrice: record.starter || record.starterPrice || "99",
            compliancePrice: record.compliance || record.compliancePrice || "199",
            enterprisePrice: record.enterprise || record.enterprisePrice || "349"
        };
    }
    return { starterPrice: "99", compliancePrice: "199", enterprisePrice: "349" };
}

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

        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
        const displayTitle = contextSource.title || contextSource.hero_title || "Filing";
        const displaySlug = contextSource.slug || slug;
        
        // Fetch dynamic pricing objects securely from the window matrix
        const prices = resolvePricingObjectWithRetry(displaySlug);

        executePackagesCompiler(zone, displayTitle, displaySlug, prices);

    } catch (err) {
        console.error("Processing packages engine critical routing failure:", err);
    }
}
/* Part 3: Responsive Processing Packages Template HTML Compiler */
function executePackagesCompiler(zone, displayTitle, displaySlug, prices) {
    zone.innerHTML = `
    <section style="background: #f1f5f9; padding: 80px 0; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; margin: 0 !important;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            
            <div style="text-align: center; margin-bottom: 50px;">
                <span style="color: #4f46e5; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(79, 70, 229, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(79, 70, 229, 0.15);">Infrastructure Selection</span>
                <h2 style="color: #0a1f44; font-size: 2.6rem; font-weight: 900; margin: 0; line-height: 1.2;">Standard ${displayTitle} Processing Options</h2>
                <p style="color: #475569; font-size: 1.05rem; margin: 10px 0 0 0;">Select the management structure engineered for your profile setup needs.</p>
            </div>

            <div class="processing-options-grid">
                
                <!-- PLAN CARD 1: BASIC -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.02); box-sizing: border-box;">
                    <div>
                        <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;">
                            <img src="images/${displaySlug}-secc.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';">
                        </div>
                        <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Basic Setup Plan</h3>
                        <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$${prices.starterPrice} <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
                        <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Standard registry declaration files processed securely with immediate dispatch validation arrays.</p>
                    </div>
                    <button onclick="sessionStorage.setItem('wiz_cached_desc', 'Standard registry declaration files processed securely with immediate dispatch validation arrays.'); window.location.href='wizard.html?service=${displaySlug}&plan=starter'" style="width: 100%; background: #10b981; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Starter Plan</button>
                </div>

                <!-- PLAN CARD 2: SHIELD -->
                <div style="background: #ffffff; border: 2px solid #10b981; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); position: relative; box-sizing: border-box;">
                    <span style="position: absolute; top: -14px; right: 25px; background: #10b981; color: #ffffff; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.05em; padding: 4px 14px; border-radius: 20px;">POPULAR</span>
                    <div>
                        <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;">
                            <img src="images/${displaySlug}-secd.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';">
                        </div>
                        <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Complete Shield Matrix</h3>
                        <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$${prices.compliancePrice} <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
                        <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Includes proactive automated calendar sweeps, compliance risk metrics alerts, and asset guard protection sheets.</p>
                    </div>
                    <button onclick="sessionStorage.setItem('wiz_cached_desc', 'Includes proactive automated calendar sweeps, compliance risk metrics alerts, and asset guard protection sheets.'); window.location.href='wizard.html?service=${displaySlug}&plan=compliance'" style="width: 100%; background: #0a1f44; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Compliance Plan</button>
                </div>

                <!-- PLAN CARD 3: ENTERPRISE -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.02); box-sizing: border-box;">
                    <div>
                        <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;">
                            <img src="images/${displaySlug}-pricing-premium.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';">
                        </div>
                        <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Enterprise Growth Suite</h3>
                        <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$${prices.enterprisePrice} <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
                        <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Custom structural multi-member provisions, real-time banking gateway data mapping integration, and lifetime revision sheets storage.</p>
                    </div>
                    <button onclick="sessionStorage.setItem('wiz_cached_desc', 'Custom structural multi-member provisions, real-time banking gateway data mapping integration, and lifetime revision sheets storage.'); window.location.href='wizard.html?service=${displaySlug}&plan=enterprise'" style="width: 100%; background: #4f46e5; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Enterprise Plan</button>
                </div>

            </div>
        </div>
    </section>
    `;
}


/* Part 3: Responsive Processing Packages Template HTML Compiler */
function executePackagesCompiler(zone, displayTitle, displaySlug) {
    zone.innerHTML = `
    <section style="background: #f1f5f9; padding: 80px 0; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; margin: 0 !important;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            
            <div style="text-align: center; margin-bottom: 50px;">
                <span style="color: #4f46e5; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(79, 70, 229, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(79, 70, 229, 0.15);">Infrastructure Selection</span>
                <h2 style="color: #0a1f44; font-size: 2.6rem; font-weight: 900; margin: 0; line-height: 1.2;">Standard ${displayTitle} Processing Options</h2>
                <p style="color: #475569; font-size: 1.05rem; margin: 10px 0 0 0;">Select the management structure engineered for your profile setup needs.</p>
            </div>

            <div class="processing-options-grid">
                
                <!-- PLAN CARD 1: BASIC -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.02); box-sizing: border-box;">
                    <div>
                        <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;">
                            <img src="images/${displaySlug}-secc.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';">
                        </div>
                        <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Basic Setup Plan</h3>
                        <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$99 <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
                        <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Standard registry declaration files processed securely with immediate dispatch validation arrays.</p>
                    </div>
                    <button onclick="sessionStorage.setItem('wiz_cached_desc', 'Standard registry declaration files processed securely with immediate dispatch validation arrays.'); window.location.href='wizard.html?service=${displaySlug}&plan=starter'" style="width: 100%; background: #10b981; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Starter Plan</button>
                </div>

                <!-- PLAN CARD 2: SHIELD -->
                <div style="background: #ffffff; border: 2px solid #10b981; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); position: relative; box-sizing: border-box;">
                    <span style="position: absolute; top: -14px; right: 25px; background: #10b981; color: #ffffff; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.05em; padding: 4px 14px; border-radius: 20px;">POPULAR</span>
                    <div>
                        <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;">
                            <img src="images/${displaySlug}-secd.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';">
                        </div>
                        <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Complete Shield Matrix</h3>
                        <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$199 <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
                        <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Includes proactive automated calendar sweeps, compliance risk metrics alerts, and asset guard protection sheets.</p>
                    </div>
                    <button onclick="sessionStorage.setItem('wiz_cached_desc', 'Includes proactive automated calendar sweeps, compliance risk metrics alerts, and asset guard protection sheets.'); window.location.href='wizard.html?service=${displaySlug}&plan=compliance'" style="width: 100%; background: #0a1f44; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Compliance Plan</button>
                </div>

                <!-- PLAN CARD 3: ENTERPRISE -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.02); box-sizing: border-box;">
                    <div>
                        <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;">
                            <img src="images/${displaySlug}-pricing-premium.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';">
                        </div>
                        <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Enterprise Growth Suite</h3>
                        <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$349 <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
                        <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Custom structural multi-member provisions, real-time banking gateway data mapping integration, and lifetime revision sheets storage.</p>
                    </div>
                    <button onclick="sessionStorage.setItem('wiz_cached_desc', 'Custom structural multi-member provisions, real-time banking gateway data mapping integration, and lifetime revision sheets storage.'); window.location.href='wizard.html?service=${displaySlug}&plan=enterprise'" style="width: 100%; background: #4f46e5; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Enterprise Plan</button>
                </div>

            </div>
        </div>
    </section>
    `;
}

/* Part 4: Global Module Binding */
window.renderMasterPricingEngine = renderMasterProcessingPackagesEngine;