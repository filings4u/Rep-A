/**
 * filings4u Platform Architecture
 * Module: proof-widget.js (Part 1 of 2)
 * Service-Aware Routing Matrix & Mobile Safety Spacing
 */
(function() {
    const config = {
        elementId: "f4u-dynamic-proof-widget",
        styleId: "f4u-proof-widget-styles"
    };

    if (!document.getElementById(config.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = config.styleId;
        styleSheet.textContent = `
            #${config.elementId} {
                position: fixed !important;
                bottom: 30px !important;
                left: 30px !important;
                background: #ffffff !important;
                border: 1px solid #e2e8f0 !important;
                box-shadow: 0 20px 25px -5px rgba(10,31,68,0.1) !important;
                border-radius: 12px !important;
                padding: 16px 44px 16px 18px !important;
                max-width: 360px !important;
                z-index: 99999 !important;
                font-family: system-ui, sans-serif !important;
                font-size: 0.88rem !important;
                color: #0a1f44 !important;
                cursor: pointer !important;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.4s ease, transform 0.4s ease !important;
                box-sizing: border-box !important;
            }
            #${config.elementId} .f4u-proof-stars {
                color: #10b981 !important;
                font-size: 0.95rem !important;
                margin-bottom: 4px !important;
                font-weight: 700 !important;
            }
            #${config.elementId} strong {
                color: #10b981 !important;
                font-weight: 700 !important;
            }
            #${config.elementId} .f4u-proof-close-btn {
                position: absolute !important;
                top: 14px !important;
                right: 14px !important;
                background: none !important;
                border: none !important;
                color: #94a3b8 !important;
                font-size: 1.25rem !important;
                cursor: pointer !important;
                padding: 4px !important;
                line-height: 1 !important;
            }
            #${config.elementId} .f4u-proof-close-btn:hover {
                color: #ef4444 !important;
            }
            
            /* RESPONSIVE MOBILE POSITION AND DEPTH CORRECTIVE HOOKS */
            @media (max-width: 991px) {
                #${config.elementId} {
                    left: 20px !important;
                    bottom: 20px !important;
                    max-width: 320px !important;
                }
            }
            @media (max-width: 520px) {
                #${config.elementId} {
                    left: 16px !important;
                    right: 16px !important;
                    bottom: 16px !important;
                    max-width: calc(100% - 32px) !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    window.FILINGS4U_PROOF_TARGET = config.elementId;
})();

/* Part 2: Rotation Mechanics Bound to Existing DOM Card */
function initializeProofEngine(proofWidget) {
    const textTarget = document.getElementById("f4u-proof-text-node");
    const closeBtn = document.getElementById("f4u-close-proof-node");
    if (!proofWidget || !textTarget || !closeBtn) return;

    // --- STEP 1: RESOLVE THE CURRENT PAGE PATHWAY SLUG ON THE FLY ---
    let activePageSlug = "compliance";
    const rawPath = window.location.pathname.split("/").pop().toLowerCase().trim();
    if (rawPath !== "" && !rawPath.includes("index") && !rawPath.includes("home")) {
        activePageSlug = rawPath.replace(".html", "");
    }

    // Pull localized title names dynamically from your catalog dataset definitions
    const catalogSource = window.PLATFORM_METRICS_CATALOG || {};
    const contextRecord = catalogSource[activePageSlug] || {};
    const dynamicServiceName = contextRecord.name || "Compliance Operations Framework";

    // --- STEP 2: EXPANDED HIGH-CONVERSION TELEMETRY TEMPLATES MATRIX ---
    const proofTemplates = [
        { text: `<strong>Filing Confirmed:</strong> New ${dynamicServiceName} application completely submitted and locked {MINUTES}.`, dynamicTime: true, baseMinutes: 4, url: activePageSlug + ".html" },
        { text: "<strong>142K+ Active Profiles</strong> currently synchronized across our automated compliance filing network grid.", dynamicTime: false, url: "get-started.html" },
        { text: "<strong>IRS Form 2290 Heavy Use Tax:</strong> Watermarked Schedule 1 printouts successfully batched for 14 fleet vehicles.", dynamicTime: false, url: "heavy-use-tax-2290.html" },
        { text: `<strong>Audit Protection Active:</strong> Structural protection shield permanently bound to active ${dynamicServiceName} pipeline.`, dynamicTime: false, url: activePageSlug + ".html" },
        { text: "<strong>BOC-3 Process Agent Appointment:</strong> Federal legal representation multi-locked across all 50 transit states.", dynamicTime: false, url: "process-agents-boc-3.html" },
        { text: `<strong>Filing Confirmed:</strong> Statutory ${dynamicServiceName} ledger parameters verified across state registries {MINUTES}.`, dynamicTime: true, baseMinutes: 9, url: activePageSlug + ".html" },
        { text: "<strong>Employer ID (EIN):</strong> IRS direct rest gateway clearance generated business banking authorization files.", dynamicTime: false, url: "employer-id-ein.html" },
        { text: "<strong>Trucker Authority (MC Number):</strong> Operating rights pre-checked background applications cleared for safety.", dynamicTime: false, url: "trucker-authority.html" },
        { text: "<strong>SCAC Code Allocation:</strong> Unique carrier identifiers indexed natively within intermodal border crossings systems.", dynamicTime: false, url: "scac-code.html" },
        { text: `<strong>Database Sync Complete:</strong> Background telemetry loops verified zero entity penalty exposure for ${dynamicServiceName}.`, dynamicTime: false, url: activePageSlug + ".html" },
        { text: "<strong>Driver Qualification File (DQF):</strong> Fleet operator logs completely updated to satisfy FMCSA Part 391 audits.", dynamicTime: false, url: "driver-file.html" }
    ];

    /**
 * filings4u Platform Architecture
 * Module: proof-widget.js (Part 2 of 2)
 * Dynamic Text Interceptors, Click Anchors, & Micro-Load Initializers
 */
    const pageLoadTime = Date.now();
    let currentIndex = 0;
    let rotationTimeout;

    // --- TRACKING LOOP 1: RESOLVE MINUTES ELAPSED ON THE FLY ---
    function getFormattedMessage(item) {
        if (!item.dynamicTime) return item.text;
        const currentMsElapsed = Date.now() - pageLoadTime;
        const extraMinutes = Math.floor(currentMsElapsed / 60000);
        const liveMinutes = item.baseMinutes + extraMinutes;
        return item.text.replace("{MINUTES}", liveMinutes === 1 ? "1 min ago" : liveMinutes + " mins ago");
    }

    // --- TRACKING LOOP 2: ROTATE MESSAGES WITH SMOOTH SLIDE ANIMATIONS ---
    function rotateProofMessage() {
        proofWidget.style.opacity = "0";
        proofWidget.style.transform = "translateY(20px)";
        
        setTimeout(function() {
            const activeItem = proofTemplates[currentIndex];
            textTarget.innerHTML = getFormattedMessage(activeItem);
            
            // Map the link directly to the localized or global page URL parameter
            let finalUrl = activeItem.url;
            if (activeItem.url.includes("compliance.html")) {
                finalUrl = "get-started.html";
            }
            
            proofWidget.setAttribute("data-url", finalUrl);
            proofWidget.style.opacity = "1";
            proofWidget.style.transform = "translateY(0)";
            
            currentIndex = (currentIndex + 1) % proofTemplates.length;
            rotationTimeout = setTimeout(rotateProofMessage, 6000); // 6-second rotation intervals
        }, 400);
    }

    // --- TRACKING LOOP 3: WIRE UP USER INTERACTION CLICK MATRICES ---
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
            proofWidget.remove();
        }, 400);
    });

    // Fire the initial telemetry rotation loop after a 2-second buffer window
    setTimeout(rotateProofMessage, 2000);
}

// --- SECURE LIFECYCLE IGNITION ENGINE TRIGGER ---
function bootProofWidgetEngine() {
    const elementId = window.FILINGS4U_PROOF_TARGET || "f4u-dynamic-proof-widget";
    const existingWidget = document.getElementById(elementId);

    if (existingWidget) {
        initializeProofEngine(existingWidget);
    } else {
        console.warn(`Proof Widget Node [${elementId}] missing from template structure context.`);
    }
}

// Coordinate load routines alongside slow network paints or fast cached configurations
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootProofWidgetEngine);
} else {
    bootProofWidgetEngine();
}
