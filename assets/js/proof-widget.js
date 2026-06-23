/**
 * filings4u Platform Architecture
 * Module: proof-widget.js (Part 1 - Custom Card Layout Link)
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
      /* LINKS THE DYNAMIC TRANSFORMS TO YOUR EXISTING HTML CONTAINER ID */
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
        opacity: 0; /* Starts hidden to allow smooth fade-in */
        transform: translateY(20px);
        transition: opacity 0.4s ease, transform 0.4s ease !important;
        box-sizing: border-box !important;
      }
      
      /* STYLING FOR THE CUSTOM STARS RATING LAYER */
      #${config.elementId} .f4u-proof-stars {
        color: #10b981 !important;
        font-size: 0.95rem !important;
        margin-bottom: 4px !important;
        font-weight: 700 !important;
      }

      #${config.elementId} strong { color: #10b981 !important; font-weight: 700 !important; }
      
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
      #${config.elementId} .f4u-proof-close-btn:hover { color: #ef4444 !important; }

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

  const proofTemplates = [
    { text: "<strong>140,000+ Active Profiles</strong> currently protected across our automated state filing grid.", dynamicTime: false, url: "get-started.html" },
    { text: "<strong>Filing Confirmed:</strong> New LLC profile registered and locked inside Delaware registry {MINUTES}.", dynamicTime: true, baseMinutes: 4, url: "llc-formation.html" },
    { text: "<strong>Audit Protection Matrix Active:</strong> 0.00% entity penalty exposure rate maintained this month.", dynamicTime: false, url: "get-started.html" },
    { text: "<strong>Filing Confirmed:</strong> Corporate compliance synchronization completed in California {MINUTES}.", dynamicTime: true, baseMinutes: 12, url: "get-started.html" },
    { text: "<strong>Asset Shield Multilocked:</strong> Proxy layers fully deployed on 4 new Nevada corporations.", dynamicTime: false, url: "llc-formation.html" },
    { text: "<strong>State Dept Update:</strong> Automated background check matched against latest Q2 entity law changes.", dynamicTime: false, url: "get-started.html" },
    { text: "<strong>Filing Confirmed:</strong> Bi-annual reporting compliance documents filed in Texas {MINUTES}.", dynamicTime: true, baseMinutes: 8, url: "get-started.html" },
    { text: "<strong>Instant Gateway Sync:</strong> Structural franchise tax check cleared across 12 tracking accounts.", dynamicTime: false, url: "get-started.html" },
    { text: "<strong>Dissolution Shield Active:</strong> Accidental corporate forfeiture blocked for Wyoming entity.", dynamicTime: false, url: "get-started.html" },
    { text: "<strong>Filing Confirmed:</strong> Registered Agent appointment completely processed in Florida {MINUTES}.", dynamicTime: true, baseMinutes: 18, url: "llc-formation.html" }
  ];

  const pageLoadTime = Date.now();
  let currentIndex = 0;
  let rotationTimeout;

  function getFormattedMessage(item) {
    if (!item.dynamicTime) return item.text;
    const currentMsElapsed = Date.now() - pageLoadTime;
    const extraMinutes = Math.floor(currentMsElapsed / 60000);
    const liveMinutes = item.baseMinutes + extraMinutes;
    return item.text.replace("{MINUTES}", liveMinutes === 1 ? "1 min ago" : liveMinutes + " mins ago");
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
    if (targetUrl) { window.location.href = targetUrl; }
  });

  closeBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    clearTimeout(rotationTimeout);
    proofWidget.style.opacity = "0";
    proofWidget.style.transform = "translateY(20px)";
    setTimeout(function() { proofWidget.remove(); }, 400);
  });

  // Delay initial text change slightly so page loads cleanly
  setTimeout(rotateProofMessage, 2000);
}

/* Part 3: Asynchronous Guard & DOM Binding Initialization */
function bootProofWidgetEngine() {
  const elementId = window.FILINGS4U_PROOF_TARGET || "f4u-dynamic-proof-widget";
  const existingWidget = document.getElementById(elementId);
  
  // FIXED: If the element already exists in the HTML, hook into it directly instead of recreating it
  if (existingWidget) {
    initializeProofEngine(existingWidget);
  } else {
    // Fail-safe wrapper if the element is missing from the layout file
    console.warn(`Proof Widget Node [${elementId}] missing from template structure context.`);
  }
}

// Fixed Lifecycle: Handles slow browser renders or immediate hot cache paints
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootProofWidgetEngine);
} else {
  bootProofWidgetEngine();
}
