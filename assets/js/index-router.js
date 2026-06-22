/**
 * filings4u Platform Architecture
 * Module: index-router.js (Part 1 - Database & Stylesheet Engine)
 */

(function() {
    // 1. Expanded Database Registry Config including the two new states
    const STATES_DASHBOARD_REGISTRY = { 
        delaware: { 
            name: "State of Delaware", 
            portal: "OFFICIAL CORPORATE FILINGS PORTAL", 
            title: "State Filing Checklist", 
            steps: [ 
                { title: "Official Business Registration", desc: "We check name availability with local registries and file your official Articles of Organization immediately to create your protective asset boundary.", color: "#10b981" }, 
                { title: "Local DBA and Trade Name Handling", desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.", color: "#10b981" }, 
                { title: "Tax ID & Sales Ledger Setup", desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.", color: "#38bdf8" } 
            ] 
        }, 
        nevada: { 
            name: "State of Nevada", 
            portal: "NV SILVER FLUME SYSTEM", 
            title: "Nevada Filing Checklist", 
            steps: [ 
                { title: "Official Business Registration", desc: "Direct filing with the Nevada Secretary of State. We verify name availability and lodge your organizational paperwork instantly.", color: "#10b981" }, 
                { title: "Local DBA and Trade Name Handling", desc: "File your trade names locally and establish your asset protection protocols under Nevada's favorable privacy laws.", color: "#10b981" }, 
                { title: "Tax ID & Sales Ledger Setup", desc: "Obtain your IRS Federal EIN and instantly map your business structure to Nevada's zero-corporate-tax infrastructure.", color: "#38bdf8" } 
            ] 
        }, 
        wyoming: { 
            name: "State of Wyoming", 
            portal: "COMMERCIAL REGISTRY CONNECTION", 
            title: "Wyoming Filing Checklist", 
            steps: [ 
                { title: "Official Business Registration", desc: "Direct filing with the Wyoming Secretary of State. We verify name availability and lodge your organizational paperwork instantly.", color: "#10b981" }, 
                { title: "Local DBA and Trade Name Handling", desc: "File your trade names locally and establish your asset protection protocols under Wyoming's favorable privacy laws.", color: "#10b981" }, 
                { title: "Tax ID & Sales Ledger Setup", desc: "Obtain your IRS Federal EIN and instantly map your business structure to Wyoming's zero-corporate-tax infrastructure.", color: "#38bdf8" } 
            ] 
        }, 
        california: { 
            name: "State of California", 
            portal: "CA BIZFILE ONLINE NODE", 
            title: "California Filing Checklist", 
            steps: [ 
                { title: "Official Business Registration", desc: "Essential framework for businesses operating locally within the California market. Streamlines regional sales permits, local compliance, and franchise taxes.", color: "#10b981" }, 
                { title: "Local DBA and Trade Name Handling", desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.", color: "#10b981" }, 
                { title: "Tax ID & Sales Ledger Setup", desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.", color: "#38bdf8" } 
            ] 
        }, 
        texas: { 
            name: "State of Texas", 
            portal: "TX SOSDIRECT SYSTEM", 
            title: "Texas Filing Checklist", 
            steps: [ 
                { title: "Official Business Registration", desc: "Top choice for establishing physical local operations. Synchronizes direct tax filings seamlessly with the Texas Comptroller of Public Accounts.", color: "#10b981" }, 
                { title: "Local DBA and Trade Name Handling", desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.", color: "#10b981" }, 
                { title: "Tax ID & Sales Ledger Setup", desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.", color: "#38bdf8" } 
            ] 
        }, 
        florida: { 
            name: "State of Florida", 
            portal: "SUNBIZ AUTOMATED FILING NODE", 
            title: "State Filing Checklist", 
            steps: [ 
                { title: "Official Business Registration", desc: "We check name availability with local registries and file your official Articles of Organization immediately to create your protective asset boundary.", color: "#10b981" }, 
                { title: "Local DBA and Trade Name Handling", desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.", color: "#10b981" }, 
                { title: "Tax ID & Sales Ledger Setup", desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.", color: "#38bdf8" } 
            ] 
        }
    };

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
    
    window.STATES_DASHBOARD_REGISTRY = STATES_DASHBOARD_REGISTRY;
    window.FILINGS4U_ROUTER_TARGET = targetConfig.elementId;
})();


/* Part 2: Left Side State Options List Compiler */
function renderHomepageOperationsRouter() {
    try {
        const targetId = window.FILINGS4U_ROUTER_TARGET || "filings4u-homepage-router-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        const sd = window.STATES_DASHBOARD_REGISTRY;

        zone.innerHTML = `
        <section style="padding: 90px 0; background: #ffffff; color: #0a1f44; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
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
                                ${["delaware", "nevada", "wyoming"].map(k => `
                                <div class="state-opt" data-key="${k}" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease;">
                                    <div>
                                        <div style="font-weight: 600; font-size: 1rem; color: #0a1f44;">${sd[k] ? sd[k].name : k}</div>
                                        <span style="font-size: 0.75rem; color: #64748b; font-family: monospace;">${sd[k] ? sd[k].portal : 'Commercial Registry Connection'}</span>
                                    </div>
                                    <span style="font-size: 0.8rem; font-weight: 600; color: #10b981; font-family: monospace;">ONLINE</span>
                                </div>
                                `).join('')}
                            </div>
                            
                            <h4 style="margin: 0 0 12px 0; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Top for Local Businesses</h4>
                            <div style="display: flex; flex-direction: column; gap: 10px; padding-bottom: 4px;">
                                ${["california", "texas", "florida"].map(k => `
                                <div class="state-opt" data-key="${k}" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease;">
                                    <div>
                                        <div style="font-weight: 600; font-size: 1rem; color: #0a1f44;">${sd[k] ? sd[k].name : k}</div>
                                        <span style="font-size: 0.75rem; color: #64748b; font-family: monospace;">${sd[k] ? sd[k].portal : 'Local Revenue Node'}</span>
                                    </div>
                                    <span style="font-size: 0.8rem; font-weight: 600; color: #10b981; font-family: monospace;">ONLINE</span>
                                </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <!-- Right column insertion target placeholder -->
        `;
    } catch (err) {
        console.error("Router panel compilation failure:", err);
    }
}


/* Part 3: Right Side Preview Board Wrapper */
(function() {
    // Dynamic compiler extension hook
    window.appendRightSidePreviewBoard = function(zone) {
        const rightSideHTML = `
                    <!-- RIGHT SIDE PLATFORM PREVIEW DASHBOARD BLOCK -->
                    <div style="flex: 1; min-width: 320px; background: #0a1f44; border-radius: 16px; padding: 40px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; color: #ffffff; box-shadow: 0 20px 40px rgba(10, 31, 68, 0.15);">
                        
                        <!-- DYNAMIC HEADER METRICS LAYER -->
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
                            
                            <!-- DYNAMIC TRACKING CARDS INSERTION TARGET BLOCK -->
                            <div id="router-steps-output-container" style="display: flex; flex-direction: column; gap: 20px;">
                                <!-- Live steps process maps display here -->
                            </div>
                        </div>

                        <!-- LIVE SYSTEM FOOTER CONSOLE STATS -->
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
                            <div style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">
                                Latency Rate: <span style="color:#10b981;">0.04s</span> <br>
                                Secure Hash: <span style="color:#38bdf8;">SHA-256 v7.4</span>
                            </div>
                            <a href="get-started.html" style="background: #10b981; color: #ffffff; text-decoration: none; font-weight: 700; padding: 12px 24px; border-radius: 6px; font-size: 0.9rem; box-shadow: 0 10px 20px rgba(16,185,129,0.2); transition: background 0.2s;">Initialize State Filing &rarr;</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        `;
        return rightSideHTML;
    };
})();


/* Part 4: Dynamic Step Visualization Card Renderer */
(function() {
    window.renderRouterStepsMarkup = function(stepsArray) {
        if (!stepsArray || stepsArray.length === 0) return '';
        
        return stepsArray.map((step, index) => `
            <div style="display: flex; gap: 16px; align-items: flex-start; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 18px; border-radius: 10px; box-sizing: border-box; width: 100%;">
                
                <!-- PROGRESS DOT ENGINE -->
                <div style="display: flex; flex-direction: column; align-items: center; margin-top: 4px;">
                    <div style="width: 14px; height: 14px; border-radius: 50%; background: ${step.color || '#10b981'}; box-shadow: 0 0 8px ${step.color || '#10b981'};"></div>
                    ${index < stepsArray.length - 1 ? `<div style="width: 2px; height: 40px; background: rgba(255,255,255,0.1); margin-top: 4px;"></div>` : ''}
                </div>
                
                <!-- CONTENT CONTAINER LAYER -->
                <div style="flex: 1;">
                    <h5 style="margin: 0 0 6px 0; font-size: 1rem; font-weight: 700; color: #ffffff;">${step.title}</h5>
                    <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">${step.desc}</p>
                </div>
                
            </div>
        `).join('');
    };
})();

/* Part 5: State Switching Interaction Engine Data Connector */
(function() {
    // Extend the core rendering handler defined in Part 2
    const baseRouterEngine = window.renderHomepageOperationsRouter;
    
    window.renderHomepageOperationsRouter = function() {
        // 1. Run the base markup generation framework first
        baseRouterEngine();
        
        const targetId = window.FILINGS4U_ROUTER_TARGET || "filings4u-homepage-router-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // 2. Append the right column layout dashboard framework cleanly
        const innerGrid = zone.querySelector(".responsive-grid-wrapper");
        if (!innerGrid) return;
        
        const rightPanelHTML = window.appendRightSidePreviewBoard();
        innerGrid.insertAdjacentHTML('beforeend', rightPanelHTML);

        // 3. Locate live update DOM nodes
        const stepsContainer = zone.querySelector("#router-steps-output-container");
        const stateTitleNode = zone.querySelector("#router-state-title");
        const portalBadgeNode = zone.querySelector("#router-portal-badge");
        const stateOptions = zone.querySelectorAll(".state-opt");
        const sd = window.STATES_DASHBOARD_REGISTRY;

        // 4. Central engine function to update text layouts on the fly
        function updateActiveStatePreview(stateKey) {
            const data = sd[stateKey];
            if (!data) return;

            // Smoothly update matching textual attributes
            if (stateTitleNode) stateTitleNode.textContent = data.name;
            if (portalBadgeNode) portalBadgeNode.textContent = data.portal;
            
            // Re-render the child process card blocks mapping arrays
            if (stepsContainer) {
                stepsContainer.innerHTML = window.renderRouterStepsMarkup(data.steps);
            }

            // Sync structural class nodes for styled borders
            stateOptions.forEach(opt => {
                if (opt.getAttribute("data-key") === stateKey) {
                    opt.classList.add("active-state");
                } else {
                    opt.classList.remove("active-state");
                }
            });
        }

        // 5. Connect click listeners across option items array
        stateOptions.forEach(option => {
            option.addEventListener("click", function(e) {
                e.preventDefault();
                const key = this.getAttribute("data-key");
                updateActiveStatePreview(key);
            });
        });

        // 6. Set initial state view to Delaware on first load 
        updateActiveStatePreview("delaware");
    };
})();

/* Part 6: Global Module Binding */
window.renderHomepageOperationsRouter = window.renderHomepageOperationsRouter;