// ============================================================================ //
// 🏛️ PART 2: REFLECTIVE INFRASTRUCTURE HYDRATION LAYER
// ============================================================================ //
(function() {
    // Safeguard root objects out-of-order execution frameworks defensively
    window.CENTRAL_SERVICE_PLAN_DB = window.CENTRAL_SERVICE_PLAN_DB || {};
    window.GLOBAL_COMPANY_PRICING = window.GLOBAL_COMPANY_PRICING || {};
    window.GLOBAL_COMPANY_PRICING.packages = window.GLOBAL_COMPANY_PRICING.packages || window.CENTRAL_SERVICE_PLAN_DB;
    
    if (!window.GLOBAL_COMPANY_PRICING.addons) {
        window.GLOBAL_COMPANY_PRICING.addons = {};
    }

    // Capture user selections straight from the address parameter bar
    const urlScanner = new URLSearchParams(window.location.search);
    const rawUrlService = urlScanner.get('service');
    const rawUrlPlan = urlScanner.get('plan') || 'compliance';

    // Default to the first element in your database array if the URL parameter string is totally blank
    let fallbackInitialKey = Object.keys(window.CENTRAL_SERVICE_PLAN_DB)[0] || "llc-formation";
    let activeKeyToCommit = rawUrlService ? rawUrlService : fallbackInitialKey;

    // Pass whatever key comes from the URL directly into our discovery scanner
    if (typeof resolvePricingConfigurationDynamically === "function") {
        const dynamicMatch = resolvePricingConfigurationDynamically(activeKeyToCommit);
        if (dynamicMatch) {
            activeKeyToCommit = dynamicMatch.matchedKey;
        }
    }

    // Set globally synchronized runtime hooks for Step 1
    window.routeActiveServiceKey = activeKeyToCommit;
    window.routeActivePlanKey = rawUrlPlan.toLowerCase().trim();

    console.log(`[Dynamic Boot] Successfully resolved active system paths. Verified Registry Node: "${window.routeActiveServiceKey}"`);
})();


/**
 * URL Parameter Extractor Hook
 * Automatically populates routing states from URL tracking if left unassigned
 */
function syncUrlStateToWizardEngine() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (!window.routeActiveServiceKey && urlParams.has('service')) {
        window.routeActiveServiceKey = urlParams.get('service').toLowerCase().trim();
    }
    if (!window.routeActivePlanKey && urlParams.has('plan')) {
        window.routeActivePlanKey = urlParams.get('plan').toLowerCase().trim();
    }
}
syncUrlStateToWizardEngine();

/**
 * Defensive Bootstrapper Guard
 * Stubs missing initialization frames to prevent execution engine lockups
 */
if (typeof window.initSevenStepWizardSystem !== "function") {
    window.initSevenStepWizardSystem = function() {
        console.log("[Pricing Boot] Safety interceptor triggered: System initializing downstream templates...");
        // Automatically kick off Step 1 overview processing if parameters exist
        if (window.routeActiveServiceKey && typeof window.renderOnboardingPlanOverviewCard === "function") {
            window.renderOnboardingPlanOverviewCard(null, null, null, 0);
        }
    };
}
