/**
 * Filings4U Platform Architecture
 * Module: index-router.js (Part 1 - Stylesheet & Registry Map)
 */
(function() {
    const targetConfig = { 
        elementId: "filings4u-homepage-router-root", 
        styleId: "filings4u-router-styles" 
    };

    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .state-opt:hover {
                border-color: #10b981 !important;
                background-color: #f0fdf4 !important;
            }
            #${targetConfig.elementId} .state-opt.active-state {
                border-color: #10b981 !important;
                background-color: #f0fdf4 !important;
                box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
            }
            #${targetConfig.elementId} div::-webkit-scrollbar {
                width: 6px;
            }
            #${targetConfig.elementId} div::-webkit-scrollbar-track {
                background: #f1f5f9;
                border-radius: 4px;
            }
            #${targetConfig.elementId} div::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 4px;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Map your states directly to real-time fee databases
    window.STATES_DASHBOARD_REGISTRY = {
        DE: { name: "State of Delaware", portal: "OFFICIAL CORPORATE FILINGS PORTAL", serviceSlug: "llc" },
        NV: { name: "State of Nevada", portal: "NV SILVER FLUME SYSTEM", serviceSlug: "llc" },
        WY: { name: "State of Wyoming", portal: "COMMERCIAL REGISTRY CONNECTION", serviceSlug: "llc" },
        CA: { name: "State of California", portal: "CA BIZFILE ONLINE NODE", serviceSlug: "llc" },
        TX: { name: "State of Texas", portal: "TX SOSDIRECT SYSTEM", serviceSlug: "llc" },
        FL: { name: "State of Florida", portal: "SUNBIZ AUTOMATED FILING NODE", serviceSlug: "llc" }
    };

    window.FILINGS4U_ROUTER_TARGET = targetConfig.elementId;
})();

/**
 * Filings4U Platform Architecture
 * Part 2: Main HTML Frame Template & Left Panel Generator
 */
function renderHomepageOperationsRouter() {
    try {
        const targetId = window.FILINGS4U_ROUTER_TARGET || "filings4u-homepage-router-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        const sd = window.STATES_DASHBOARD_REGISTRY;

        // Render Frame Layout (border-bottom explicitly set to none)
        zone.innerHTML = `
            <section style="padding: 90px 0; background: #ffffff; color: #0a1f44; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; border-top: 1px solid #e2e8f0; border-bottom: none;">
                <div class="site-width-alignment-guard" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box;">
                    
                    <div style="text-align: center; margin-bottom: 50px;">
                        <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.12); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.25);">Choose Your Location</span>
                        <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">Launch Your Business. <span style="color: #10b981;">Locally.</span></h2>
                    </div>

                    <div class="responsive-grid-wrapper" style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: stretch; gap: 40px; width: 100%; box-sizing: border-box;">
                        
                        <!-- LEFT SIDE COLUMN PANEL -->
                        <div style="flex: 1; min-width: 320px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-start;">
                            <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 8px 0; color: #0a1f44;">Select Your State</h3>
                            <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin: 0 0 24px 0;">Pick where your business operates to review processing timelines and state rules.</p>
                            
                            <div style="max-height: 460px; overflow-y: auto; padding-right: 8px; box-sizing: border-box; width: 100%;">
                                <h4 style="margin: 0 0 12px 0; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Top for Corporations</h4>
                                <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
                                    ${["DE", "NV", "WY"].map(k => `
                                        <div class="state-opt" data-key="${k}" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease;">
                                            <div>
                                                <div style="font-weight: 600; font-size: 1rem; color: #0a1f44;">${sd[k] ? sd[k].name : k}</div>
                                                <span style="font-size: 0.75rem; color: #64748b; font-family: monospace;">${sd[k] ? sd[k].portal : ''}</span>
                                            </div>
                                            <span style="font-size: 0.8rem; font-weight: 600; color: #10b981; font-family: monospace;">ONLINE</span>
                                        </div>
                                    `).join('')}
                                </div>
                                
                                <h4 style="margin: 0 0 12px 0; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Top for Local Businesses</h4>
                                <div style="display: flex; flex-direction: column; gap: 10px; padding-bottom: 4px;">
                                    ${["CA", "TX", "FL"].map(k => `
                                        <div class="state-opt" data-key="${k}" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease;">
                                            <div>
                                                <div style="font-weight: 600; font-size: 1rem; color: #0a1f44;">${sd[k] ? sd[k].name : k}</div>
                                                <span style="font-size: 0.75rem; color: #64748b; font-family: monospace;">${sd[k] ? sd[k].portal : ''}</span>
                                            </div>
                                            <span style="font-size: 0.8rem; font-weight: 600; color: #10b981; font-family: monospace;">ONLINE</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- RIGHT SIDE PLATFORM PREVIEW DASHBOARD BLOCK -->
                        <div id="router-preview-board-container" style="flex: 1; min-width: 320px; display: flex; flex-direction: column;"></div>

                    </div>
                </div>
            </section>
        `;

        // Safely invoke interaction connectors
        if (window.bindRouterInteractiveEvents) {
            window.bindRouterInteractiveEvents(zone);
        }

    } catch (err) {
        console.error("Router master frame compiling failure:", err);
    }
}
window.renderHomepageOperationsRouter = renderHomepageOperationsRouter;


/**
 * Filings4U Platform Architecture
 * Part 3: Original Right Side Board, Real-Time Steps & Dynamic Wizard Parameters
 */
window.bindRouterInteractiveEvents = function(zone) {
    try {
        const boardContainer = document.getElementById("router-preview-board-container");
        if (!boardContainer) return;

        // 1. Restore your exact original layout markup architecture
        boardContainer.innerHTML = `
            <div style="flex: 1; background: #0a1f44; border-radius: 16px; padding: 40px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; color: #ffffff; box-shadow: 0 20px 40px rgba(10, 31, 68, 0.15);">
                <div style="width: 100%; box-sizing: border-box;">
                    
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 30px;">
                        <div>
                            <span id="router-portal-badge" style="font-family: monospace; font-size: 0.75rem; color: #38bdf8; font-weight: 700; letter-spacing: 0.5px;">OFFICIAL CORPORATE FILINGS PORTAL</span>
                            <h3 id="router-state-title" style="font-size: 1.6rem; font-weight: 800; margin: 6px 0 0 0; color: #ffffff; letter-spacing: -0.5px;">State of Delaware</h3>
                        </div>
                        <div style="background: rgba(16,185,129,0.15); color: #10b981; padding: 6px 14px; border-radius: 30px; font-size: 0.75rem; font-weight: 700; font-family: monospace; display: flex; align-items: center; gap: 6px; border: 1px solid rgba(16,185,129,0.2);">
                            <span style="width:6px; height:6px; background:#10b981; border-radius:50%;"></span> SYSTEM READY
                        </div>
                    </div>

                    <div id="router-steps-output-container" style="display: flex; flex-direction: column; gap: 20px;">
                        <!-- Checklists inject here exactly in your original card format -->
                    </div>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
                    <div style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">
                        Latency Rate: <span style="color:#10b981;">0.04s</span> <br>
                        Secure Hash: <span style="color:#38bdf8;">SHA-256 v7.4</span>
                    </div>
                    <a id="initialize-wizard-btn" href="wizard.html" style="background: #10b981; color: #ffffff; text-decoration: none; font-weight: 700; padding: 12px 24px; border-radius: 6px; font-size: 0.9rem; box-shadow: 0 10px 20px rgba(16,185,129,0.2); transition: background 0.2s;">Initialize State Filing &rarr;</a>
                </div>
            </div>
        `;

        const stepsContainer = zone.querySelector("#router-steps-output-container");
        const stateTitleNode = zone.querySelector("#router-state-title");
        const portalBadgeNode = zone.querySelector("#router-portal-badge");
        const wizardButtonNode = zone.querySelector("#initialize-wizard-btn");
        const stateOptions = zone.querySelectorAll(".state-opt");

        const sd = window.STATES_DASHBOARD_REGISTRY;

        // 2. Micro card layout compilation handler to restore your clean visual cards
        function renderOriginalStepsMarkup(stateKey) {
            const feesDb = window.STATE_FILING_FEES || {};
            const feeData = feesDb[stateKey] || { time: "3-5 Business Days", llc: 100.00 };
            const currentConfig = sd[stateKey] || { name: stateKey };

            const stepsArray = [
                { title: "Official Business Registration", desc: `Direct processing with registry. Estimated completion time: ${feeData.time}.`, color: "#10b981" },
                { title: "Statutory Registry Handling", desc: `Coordination of state validation protocols. Mandatory local filing fee: $${Number(feeData.llc).toFixed(2)}.`, color: "#10b981" },
                { title: "Tax ID & Sales Ledger Setup", desc: "Secure official Federal EIN from the IRS and coordinate processing queues seamlessly.", color: "#38bdf8" }
            ];

            return stepsArray.map((step, index) => `
                <div style="display: flex; gap: 16px; align-items: flex-start; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 18px; border-radius: 10px; box-sizing: border-box; width: 100%;">
                    <div style="display: flex; flex-direction: column; align-items: center; margin-top: 4px;">
                        <div style="width: 14px; height: 14px; border-radius: 50%; background: ${step.color}; box-shadow: 0 0 8px ${step.color};"></div>
                        ${index < stepsArray.length - 1 ? `<div style="width: 2px; height: 40px; background: rgba(255,255,255,0.1); margin-top: 4px;"></div>` : ''}
                    </div>
                    <div style="flex: 1;">
                        <h5 style="margin: 0 0 6px 0; font-size: 1rem; font-weight: 700; color: #ffffff;">${step.title}</h5>
                        <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">${step.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // 3. Central listener synchronization logic to cleanly output wizard variables
        function updateActiveStatePreview(stateKey) {
            const data = sd[stateKey];
            if (!data) return;

            if (stateTitleNode) stateTitleNode.textContent = data.name;
            if (portalBadgeNode) portalBadgeNode.textContent = data.portal;
            if (stepsContainer) stepsContainer.innerHTML = renderOriginalStepsMarkup(stateKey);

            // Dynamic Wizard link compiler generating URL parameters based on your criteria
            if (wizardButtonNode) {
                const cleanStateParam = data.name.toLowerCase().replace("state of ", "").trim().replace(/\s+/g, "-");
                wizardButtonNode.href = `get-started.html`;
            }

            // Sync visual active class borders
            stateOptions.forEach(opt => {
                if (opt.getAttribute("data-key") === stateKey) {
                    opt.classList.add("active-state");
                } else {
                    opt.classList.remove("active-state");
                }
            });
        }

        // Bind interactive mouse click sequences
        stateOptions.forEach(option => {
            option.addEventListener("click", function(e) {
                e.preventDefault();
                const key = this.getAttribute("data-key");
                updateActiveStatePreview(key);
            });
        });

        // Instantiate master load sequence target 
        updateActiveStatePreview("DE");

    } catch (err) {
        console.error("Interactive state configuration binding layer failed:", err);
    }
};
