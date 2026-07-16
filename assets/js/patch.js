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


/**
 * Filings4U Platform Architecture
 * Target Module: assets/js/patch.js
 * Theme Link Alignment & Structural Schema Injection Module
 */
(function() {
    // 1. Maintain and safeguard path alignment mapping links across standard subfolders
    const currentPathString = window.location.pathname;
    const isSubfolderLevel = currentPathString.split('/').filter(Boolean).length > 1;

    // Direct corrective loop fixes style sheet and asset tracking directories on the fly
    if (isSubfolderLevel) {
        document.querySelectorAll('link[href^="assets/"], script[src^="assets/"]').forEach(node => {
            if (node.tagName === 'LINK') {
                const rawHref = node.getAttribute('href');
                if (!rawHref.startsWith('../')) node.setAttribute('href', '../' + rawHref);
            } else if (node.tagName === 'SCRIPT') {
                const rawSrc = node.getAttribute('src');
                if (!rawSrc.startsWith('../')) node.setAttribute('src', '../' + rawSrc);
            }
        });
    }

    // 2. Automated Structured JSON-LD Corporate Schema Injection
    let structuredSchemaNode = document.getElementById("f4u-automated-jsonld-schema");
    if (!structuredSchemaNode) {
        structuredSchemaNode = document.createElement('script');
        structuredSchemaNode.id = "f4u-automated-jsonld-schema";
        structuredSchemaNode.type = "application/ld+json";
        
        // Comprehensive corporate profiling map to rank safely inside search engines
        const globalCorporateSchema = {
            "@context": "https://schema.org",
            "@type": "Corporation",
            "name": "filings4u",
            "url": window.location.origin,
            "logo": window.location.origin + "/images/fav.png",
            "description": "Authorized FMCSA and USDOT compliance filing clearinghouse providing automated motor carrier registration setups.",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-0199", // Update with your actual corporate helpline metrics
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "en"
            }
        };

        structuredSchemaNode.textContent = JSON.stringify(globalCorporateSchema, null, 2);
        document.head.appendChild(structuredSchemaNode);
    }
})();
