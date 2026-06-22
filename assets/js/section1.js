/**
 * filings4u Platform Architecture
 * Module: section1.js (Part 1 - Isolated Stylesheet Engine)
 */

(function() {
    // 1. Establish unique frontend target configurations to prevent collision
    const targetConfig = {
        elementId: "filings4u-metrics-board-root",
        styleId: "filings4u-metrics-styles"
    };

    // 2. Inject completely self-contained responsive CSS rules
    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .metrics-dashboard-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                gap: 30px;
                width: 100%;
                box-sizing: border-box;
                margin: 0;
            }

            /* MOBILE LAYOUT ADJUSTMENTS */
            @media (max-width: 768px) {
                #${targetConfig.elementId} .enterprise-metrics-section {
                    padding: 30px 0 !important;
                }
                #${targetConfig.elementId} .site-width-alignment-guard > div:first-child {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                    gap: 16px !important;
                    margin-bottom: 24px !important;
                }
                #${targetConfig.elementId} .site-width-alignment-guard h2 {
                    font-size: 1.6rem !important;
                }
                #${targetConfig.elementId} .site-width-alignment-guard div[style*="text-align: right"] {
                    text-align: left !important;
                }
                #${targetConfig.elementId} .metrics-dashboard-grid {
                    grid-template-columns: 1fr !important;
                    gap: 16px !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    window.FILINGS4U_METRICS_TARGET = targetConfig.elementId;
})();


/* Part 2: Safe Context Engine */
function renderMasterMetricsEngine(overrideTargetId, metaDataRecord) {
    try {
        // 1. Establish the clean isolated default target configuration
        const targetId = overrideTargetId || window.FILINGS4U_METRICS_TARGET || "filings4u-metrics-board-root";
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

        const displayTitle = contextSource.title || contextSource.hero_title || contextSource.service_title || "Compliance";

        // Pass parameters into our template compiler
        executeMetricsCompiler(zone, displayTitle);

    } catch (err) {
        console.error("Metrics engine critical routing failure:", err);
    }
}


/* Part 3: Layout HTML & Card Array Template */
function executeMetricsCompiler(zone, displayTitle) {
    zone.innerHTML = `
    <section class="enterprise-metrics-section" style="padding: 60px 0 !important; background: #0a1f44; color: #f4f7fa; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important; font-family: system-ui, sans-serif;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10;">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid rgba(244,247,250,0.1); padding-bottom: 24px; margin-bottom: 40px; flex-wrap: wrap; gap: 24px; width: 100%; box-sizing: border-box;">
                <div style="text-align: left; max-width: 600px;">
                    <h2 style="margin: 0; font-size: 2.2rem; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">${displayTitle} Filing Infrastructure</h2>
                </div>
                <div style="text-align: right;">
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 700; color: #10b981; font-family: monospace; background: rgba(16,185,129,0.1); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(16,185,129,0.2);">
                        <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span> ALL CLEAR: SECURE REST GATEWAYS ACTIVE
                    </div>
                </div>
            </div>

            <div class="metrics-dashboard-grid">
                <!-- CARD 1 -->
                <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                    <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🏢</span>
                    <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">142K+</div>
                    <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Corporate Entities Formed</div>
                    <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Authorized Articles of Organization across all 50 State Secretary registries.</p>
                </div>

                <!-- CARD 2 -->
                <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                    <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🚛</span>
                    <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">38,410</div>
                    <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Active Transits Monitored</div>
                    <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">USDOT & MC operating authorities actively synchronized across databases.</p>
                </div>

                <!-- CARD 3 -->
                <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                    <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">⚡</span>
                    <div style="font-size: 2.4rem; font-weight: 900; color: #10b981; font-family: monospace; line-height: 1;">1.8s</div>
                    <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Average API Pipeline Turn</div>
                    <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Secure, real-time rest requests to launch bank check intents and pre-saves.</p>
                </div>

                <!-- CARD 4 -->
                <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                    <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🔒</span>
                    <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">99.98%</div>
                    <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Filing Accuracy Quotient</div>
                    <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Sophisticated layout routing eliminates syntax rejection errors from state systems.</p>
                </div>
            </div>

        </div>
    </section>
    `;
}

/* Part 4: Global Module Binding */
window.renderMasterMetricsEngine = renderMasterMetricsEngine;

