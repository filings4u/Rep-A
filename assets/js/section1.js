/**
 * filings4u Platform Architecture
 * Module: section1.js (Part 1 of 2)
 * Harmonized Metrics Dashboard Engine & Home Name Interceptor Fix
 */
(function() {
    const targetConfig = {
        elementId: "filings4u-metrics-board-root",
        styleId: "filings4u-metrics-styles"
    };

    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .metrics-dashboard-grid {
                display: grid !important;
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 24px !important;
                width: 100% !important;
                box-sizing: border-box !important;
                margin: 0 !important;
            }

            /* UNIFIED MOBILE VIEW RESPONSIVE MEDIA HOOKS */
            @media (max-width: 991px) {
                #${targetConfig.elementId} .enterprise-metrics-section {
                    padding: 40px 0 !important;
                }
                #${targetConfig.elementId} .site-width-alignment-guard {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 20px !important;
                }
                #${targetConfig.elementId} h2 {
                    font-size: 1.8rem !important;
                }
                #${targetConfig.elementId} .metrics-dashboard-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 16px !important;
                }
            }

            @media (max-width: 600px) {
                #${targetConfig.elementId} .metrics-dashboard-grid {
                    grid-template-columns: 1fr !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    window.FILINGS4U_METRICS_TARGET = targetConfig.elementId;
})();

/* Part 2: Safe Context Engine & HTML Layout Compiler */
function renderMasterMetricsEngine(overrideTargetId, metaDataRecord) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_METRICS_TARGET || "filings4u-metrics-board-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        let slug = "compliance"; // Changed default fallback from "index" to "compliance"
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
        
        // --- 🚨 CRITICAL INTERCEPTOR FIX: STOP SEARCHING FOR THE WORD "INDEX" ---
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
            slug = rawPathname.replace(".html", "");
        } else {
            slug = "compliance"; // Forces any home landing route to evaluate as compliance data
        }

        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
        
        // Final fallback safeguard check to guarantee the string "index" is never used
        let displayTitle = contextSource.title || contextSource.service_title || "Compliance";
        if (displayTitle.toLowerCase() === "index") {
            displayTitle = "Compliance";
        }

        executeMetricsCompiler(zone, displayTitle);
    } catch (err) {
        console.error("Metrics engine critical routing failure:", err);
    }
}
window.renderMasterMetricsEngine = renderMasterMetricsEngine;

/**
 * filings4u Platform Architecture
 * Module: section1.js (Part 2 of 2)
 * Normalized Metrics Layout Compiler & Component Guards
 */
function executeMetricsCompiler(zone, displayTitle) {
    // Normalize and capitalize title text cleanly matching your uppercase patterns
    const titleUpperCaseFormatted = displayTitle.replace(/-/g, ' ').split(" ").map(function(w) {
        if(["llc", "ein", "dot", "ucr", "clia", "dba", "scac", "boc-3", "boc"].includes(w.toLowerCase())) return w.toUpperCase();
        return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");

    zone.innerHTML = `
        <section class="enterprise-metrics-section" style="padding: 60px 0 !important; background: #0a1f44; color: #f4f7fa; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important; font-family: system-ui, sans-serif;">
            <!-- White Vector Dots Background Overlay -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
            
            <div class="site-width-alignment-guard" style="width: 1450px; max-width: 1450px; margin: 0 auto !important; padding: 0 40px; box-sizing: border-box !important; position: relative; z-index: 10;">
                
                <!-- TOP HEADER CONTROL BALANCE ROW -->
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(244,247,250,0.1); padding-bottom: 20px; margin-bottom: 35px; flex-wrap: wrap; gap: 24px; width: 100%; box-sizing: border-box;">
                    <div style="text-align: left; max-width: 600px;">
                        <h2 style="margin: 0; font-size: 2.5rem; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; line-height: 1.15;">
                            ${titleUpperCaseFormatted} Filing Infrastructure
                        </h2>
                    </div>
                    <div style="text-align: right;">
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.75rem; font-weight: 700; color: #10b981; font-family: monospace; background: rgba(16,185,129,0.1); padding: 6px 14px; border-radius: 30px; border: 1px solid rgba(16,185,129,0.2); white-space: nowrap;">
                            <span style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; display: inline-block;"></span> ALL CLEAR: SECURE REST GATEWAYS ACTIVE
                        </div>
                    </div>
                </div>

                <!-- FOUR-COLUMN GRID WRAPPER MATRIX -->
                <div class="metrics-dashboard-grid">
                    
                    <!-- CARD 1 -->
                    <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px 20px; box-sizing: border-box; display: flex; flex-direction: column; gap: 6px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                        <span style="font-size: 1.5rem; display: block; margin-bottom: 2px;">🏢</span>
                        <div style="font-size: 2.1rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">142K+</div>
                        <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 2px;">Corporate Entities Formed</div>
                        <p style="margin: 0; font-size: 0.825rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Authorized Articles of Organization across all 50 State Secretary registries.</p>
                    </div>

                    <!-- CARD 2 -->
                    <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px 20px; box-sizing: border-box; display: flex; flex-direction: column; gap: 6px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                        <span style="font-size: 1.5rem; display: block; margin-bottom: 2px;">🚛</span>
                        <div style="font-size: 2.1rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">38,410</div>
                        <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 2px;">Active Transits Monitored</div>
                        <p style="margin: 0; font-size: 0.825rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">USDOT &amp; MC operating authorities actively synchronized across databases.</p>
                    </div>

                    <!-- CARD 3 -->
                    <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px 20px; box-sizing: border-box; display: flex; flex-direction: column; gap: 6px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                        <span style="font-size: 1.5rem; display: block; margin-bottom: 2px;">⚡</span>
                        <div style="font-size: 2.1rem; font-weight: 900; color: #10b981; font-family: monospace; line-height: 1;">1.8s</div>
                        <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 2px;">Average API Pipeline Turn</div>
                        <p style="margin: 0; font-size: 0.825rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Secure, real-time rest requests to launch bank check intents and pre-saves.</p>
                    </div>

                    <!-- CARD 4 -->
                    <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px 20px; box-sizing: border-box; display: flex; flex-direction: column; gap: 6px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
                        <span style="font-size: 1.5rem; display: block; margin-bottom: 2px;">🔒</span>
                        <div style="font-size: 2.1rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">99.98%</div>
                        <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 2px;">Filing Accuracy Quotient</div>
                        <p style="margin: 0; font-size: 0.825rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Sophisticated automated filter protocols eliminate syntax and formatting rejection errors.</p>
                    </div>

                </div>
            </div>
        </section>
    `;
}
