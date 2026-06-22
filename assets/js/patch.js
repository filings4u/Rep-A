/**
 * filings4u Platform Architecture
 * Module: patch.js (Bypass & Suppress Layout Framework Patch)
 */
(function() {
    // 1. Create a safe fallback global object structure
    window.PRICE_OBJECT_CONFIGS = window.PRICE_OBJECT_CONFIGS || {};
    
    // 2. Lock down an empty 'index' layout profile so internal engines don't crash
    if (!window.PRICE_OBJECT_CONFIGS["index"]) {
        window.PRICE_OBJECT_CONFIGS["index"] = {
            name: "Homepage Engine Fallback",
            llc: 0,
            c_corp: 0,
            series_llc: 0,
            packages: {},
            features: [],
            addons: {}
        };
    }

    // 3. Intercept and isolate the automated layout compiler method itself
    const originalPricingEngine = window.renderMasterPricingEngine;
    window.renderMasterPricingEngine = function(id, ...args) {
        // Drop execution silently if the engine targets the 'index' profile string
        if (id === "index" || (typeof id === "string" && id.startsWith("index-"))) {
            return null;
        }
        if (typeof originalPricingEngine === "function") {
            return originalPricingEngine.apply(this, [id, ...args]);
        }
    };
})();
