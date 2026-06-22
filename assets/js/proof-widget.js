/**
 * filings4u Platform Architecture
 * Module: proof-widget.js (Dynamic Social Proof Engine)
 */

(function() {
    const config = {
        elementId: "f4u-dynamic-proof-widget",
        styleId: "f4u-proof-widget-styles"
    };

    // 1. Inject self-contained CSS layout transformations into document head
    if (!document.getElementById(config.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = config.styleId;
        styleSheet.textContent = `
            #${config.elementId} {
                position: fixed;
                bottom: 30px;
                left: 30px;
                background: #ffffff;
                border: 1px solid #e2e8f0;
                box-shadow: 0 20px 25px -5px rgba(10,31,68,0.1), 0 10px 10px -5px rgba(10,31,68,0.04);
                border-radius: 12px;
                padding: 16px 44px 16px 18px;
                max-width: 360px;
                z-index: 99999;
                font-family: system-ui, sans-serif;
                font-size: 0.88rem;
                color: #0a1f44;
                cursor: pointer;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.4s ease, transform 0.4s ease;
                display: block;
                box-sizing: border-box;
            }
            #${config.elementId} strong {
                color: #10b981;
                font-weight: 700;
            }
            #f4u-proof-text-node a {
                color: inherit;
                text-decoration: none;
            }
            #f4u-close-proof-node {
                position: absolute;
                top: 50%;
                right: 14px;
                transform: translateY(-50%);
                background: none;
                border: none;
                color: #94a3b8;
                font-size: 1.25rem;
                cursor: pointer;
                padding: 4px;
                line-height: 1;
                transition: color 0.2s;
            }
            #f4u-close-proof-node:hover {
                color: #ef4444;
            }

            /* MOBILE SCREEN LAYOUT OVERRIDES */
            @media (max-width: 520px) {
                #${config.elementId} {
                    left: 16px !important;
                    right: 16px !important;
                    bottom: 16px !important;
                    max-width: calc(100% - 32px) !important;
                    padding: 14px 40px 14px 16px !important;
                    font-size: 0.82rem !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 2. Self-mount markup blueprints directly into the DOM tree
    document.addEventListener("DOMContentLoaded", function() {
        if (document.getElementById(config.elementId)) return;

        const widgetWrapper = document.createElement("div");
        widgetWrapper.id = config.elementId;
        widgetWrapper.innerHTML = `
            <div id="f4u-proof-text-node"></div>
            <button id="f4u-close-proof-node" aria-label="Close Notification">×</button>
        `;
        document.body.appendChild(widgetWrapper);

        // Initialize core engine logic hooks
        initializeProofEngine(widgetWrapper);
    });

    // 3. Structural Engine Controllers Matrix
    function initializeProofEngine(proofWidget) {
        const textTarget = document.getElementById("f4u-proof-text-node");
        const closeBtn = document.getElementById("f4u-close-proof-node");
        if (!proofWidget || !textTarget || !closeBtn) return;

        const proofTemplates = [
            { text: "<strong>140,000+ Active Profiles</strong> currently protected across our automated state filing grid.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Filing Confirmed:</strong> New LLC profile registered and locked inside Delaware registry {MINUTES}.", dynamicTime: true, baseMinutes: 4, url: "llc-formation.html" },
            { text: "<strong>Audit Protection Matrix Active:</strong> 0.00% entity penalty exposure rate maintained this month.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Filing Confirmed:</strong> Corporate compliance synchronization completed in California {MINUTES}.", dynamicTime: true, baseMinutes: 12, url: "compliance.html" },
            { text: "<strong>Asset Shield Multilocked:</strong> Anonymity proxy layers fully deployed on 4 new Nevada corporations.", dynamicTime: false, url: "llc-formation.html" },
            { text: "<strong>State Dept Update:</strong> Automated background check matched against latest Q2 entity law changes.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Filing Confirmed:</strong> Bi-annual reporting compliance documents validated and filed in Texas {MINUTES}.", dynamicTime: true, baseMinutes: 8, url: "compliance.html" },
            { text: "<strong>Instant Gateway Sync:</strong> Structural franchise tax check cleared across 12 tracking accounts.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Dissolution Shield Active:</strong> Accidental corporate forfeiture blocked for Wyoming entity layout.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Filing Confirmed:</strong> Registered Agent appointment update completely processed in Florida {MINUTES}.", dynamicTime: true, baseMinutes: 18, url: "llc-formation.html" },
            { text: "<strong>Network Integration Secure:</strong> Real-time zero-gap database lock established for 14 enterprise records.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Filing Confirmed:</strong> New operating agreement parameter profile successfully compiled in New York.", dynamicTime: false, url: "llc-formation.html" },
            { text: "<strong>State Registry Update:</strong> Automated verification scanned 50 state department portals in 0.4 seconds.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Penalty Exposure Defeated:</strong> Automatic deadline checker saved $1,250 in late processing fees.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Filing Confirmed:</strong> Foreign qualification cross-state certificate locked inside Illinois {MINUTES}.", dynamicTime: true, baseMinutes: 15, url: "llc-formation.html" },
            { text: "<strong>Corporate Shield Sealed:</strong> Asset protection protocols confirmed for 8 newly formed entity layers.", dynamicTime: false, url: "llc-formation.html" },
            { text: "<strong>Filing Confirmed:</strong> Annual list of managers successfully structured and submitted in Utah {MINUTES}.", dynamicTime: true, baseMinutes: 6, url: "compliance.html" },
            { text: "<strong>Active Tracking Online:</strong> Continuous background checker monitoring shifts across all active profiles.", dynamicTime: false, url: "compliance.html" },
            { text: "<strong>Filing Confirmed:</strong> Articles of organization verified and approved in Georgia {MINUTES}.", dynamicTime: true, baseMinutes: 22, url: "llc-formation.html" },
            { text: "<strong>Guaranteed Status Verified:</strong> Good Standing certificates auto-renewed for 19 corporate entities.", dynamicTime: false, url: "compliance.html" }
        ];

        const pageLoadTime = Date.now();
        let currentIndex = 0;
        let rotationTimeout;

        function getFormattedMessage(item) {
            if (!item.dynamicTime) return item.text;
            const currentMsElapsed = Date.now() - pageLoadTime;
            const extraMinutes = Math.floor(currentMsElapsed / 60000);
            const liveMinutes = item.baseMinutes + extraMinutes;
            const timeString = liveMinutes === 1 ? "1 min ago" : liveMinutes + " mins ago";
            return item.text.replace("{MINUTES}", timeString);
        }

        function rotateProofMessage() {
            proofWidget.style.opacity = "0";
            proofWidget.style.transform = "translateY(20px)";
            
            setTimeout(function() {
                const activeItem = proofTemplates[currentIndex];
                textTarget.innerHTML = getFormattedMessage(activeItem);
                proofWidget.setAttribute("data-url", activeItem.url);
                
                proofWidget.style.opacity = "1";
                proofWidget.style.transform = "translateY(0)";
                
                currentIndex = (currentIndex + 1) % proofTemplates.length;
                rotationTimeout = setTimeout(rotateProofMessage, 5000);
            }, 400);
        }

        proofWidget.addEventListener("click", function(e) {
            if (e.target === closeBtn || closeBtn.contains(e.target)) return;
            const targetUrl = proofWidget.getAttribute("data-url");
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });

        closeBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            clearTimeout(rotationTimeout);
            proofWidget.style.opacity = "0";
            proofWidget.style.transform = "translateY(20px)";
            setTimeout(function() {
                proofWidget.style.display = "none";
                proofWidget.remove();
            }, 400);
        });

        // Delay initial render slightly to ensure core layout finishes painting
        setTimeout(rotateProofMessage, 2000);
    }
})();
