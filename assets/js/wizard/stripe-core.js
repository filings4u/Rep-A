// ============================================================================ //
// 📁 stripe-core.js - REGISTRY INITIALIZATION LAYER                           //
// ============================================================================ //
(function() {
"use strict";

const urlParamsMatrix = new URLSearchParams(window.location.search);

// Isolate and control Stripe context parameters globally
window.stripePublicKey = window.stripePublicKey || urlParamsMatrix.get('pk') || null;
window.stripeClientSecret = window.stripeClientSecret || null;
window.stripeElementsContainer = window.stripeElementsContainer || null;
window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

// Safe session storage tracking framework for Stripe metadata parsing
try {
    const storedState = JSON.parse(localStorage.getItem("f4u_wizard_onboarding_state") || "{}");
    if (storedState.stripeClientSecret) {
        window.stripeClientSecret = storedState.stripeClientSecret;
    }
} catch (paymentCacheErr) {
    console.warn("[Stripe Matrix Core] Local storage state reading restricted:", paymentCacheErr);
}

})();


// ============================================================================ //
// 📁 stripe-core.js - SESSION RECOVERY INTERCEPTOR MODULE                      //
// ============================================================================ //
(function() {
"use strict";

/**
 * Global Bridge Hook: Invoked by wizard-master-core.js when an authenticated 
 * user is detected navigating within the checkout viewport.
 */
function handleStripeSessionRecovery() {
    console.log("[Stripe Recovery Channel] Synchronizing active dashboard session back to Step 6 payment gateway viewports.");
    
    // Safety check: Fire the refresh pass if available in your payment components layer
    if (typeof window.forceStep6StripePaymentGatewayRefreshPass === "function") {
        window.forceStep6StripePaymentGatewayRefreshPass();
    } else if (typeof window.initializeFlatStripeCheckoutElement === "function") {
        window.initializeFlatStripeCheckoutElement();
    } else {
        console.warn("[Stripe Recovery Channel] Checkout layout initialization modules are unpopulated.");
    }
}

// Expose the interface bridge method onto the global window instance
window.onStripeSessionRecoveryTrigger = handleStripeSessionRecovery;

})();


// ============================================================================ //
// 📁 stripe-core.js - REWRITE CONSTRAINTS ROUTER                               //
// ============================================================================ //
(function() {
"use strict";

/**
 * Global Bridge Hook: Intercepts flag assignments from wizard-master-core.js 
 * to shield active payment inputs from layout disruption during step mounting loops.
 */
function verifyLayoutRewritePermissions(flagKey) {
    const currentActiveWizardStep = parseInt(window.currentWizardActiveStep, 10) || 0;
    
    if (currentActiveWizardStep === 6) {
        console.log(`[Stripe Shield] Suppressed compilation DOM rewrite for flag "${flagKey}" on payment canvas to protect Stripe Elements.`);
        return true; // Affirm translation suppression rule
    }
    return false; // Proceed with compilation rewrite pass
}

// Map check onto global verification hook registry
window.shouldSuppressCompilationLayoutRewrites = verifyLayoutRewritePermissions;

})();

// ============================================================================ //
// 📁 stripe-core.js - SECURE INPUT FILTERS REGISTRY                            //
// ============================================================================ //
(function() {
"use strict";

/**
 * Global Bridge Hook: Evaluates if a given DOM element node is generated or
 * controlled by Stripe's cross-origin iframe architectures.
 * Returning true tells the core validation loop to step over this element safely.
 * @param {HTMLElement} element - The dynamic input target node.
 * @returns {boolean} True if the field belongs to Stripe's secure boundary.
 */
function isStripeFieldInstance(element) {
    if (!element) return false;
    
    return !!(
        element.closest('.StripeElement') || 
        element.closest('[id*="stripe"]') || 
        element.closest('[id*="card-element"]') || 
        element.closest('[id*="payment-element"]') || 
        element.classList.contains('StripeElement')
    );
}

// Attach filter utility into the global bridge namespace
window.checkIsProtectedExternalField = isStripeFieldInstance;

})();


// ============================================================================ //
// 📁 stripe-core.js - SECURE TRANSACTIONAL HANDSHAKE ENVELOPE MODULE          //
// ============================================================================ //
(function() {
"use strict";

/**
 * Isolated Handshake Method: Processes checkout parameters, communicates with the 
 * Supabase Edge cloud gateway, extracts and maps token attributes.
 */
async function processCheckoutHandshake() {
    var targetAmount = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 194.00; 
    var uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN"; 
    
    var dynamicCompanySelector = [ 
        "#ar_business_name", "#boc_legal_name", "#ba_legal_name", "#bins_legal_name", "#bl_applicant_name", 
        "#cage_legal_name", "#cgs_company_name", "#clia_lab_name", "#corp_proposed_name", "#dba_proposed_name", 
        "#dbe_legal_name", "#dot_con_legal_name", "#prm_legal_name", "#dqf_carrier_name", "#duns_legal_name", 
        "#ein_applicant_name", "#fed_tax_legal_name", "#fq_proposed_name", "#fran_tax_legal_name", "#haz_legal_name", 
        "#hut_legal_name", "#ifta_legal_name", "#ifta_rep_legal_name", "#llc_desired_name", "#rein_original_name", 
        "#mcs_legal_name", "#mbe_legal_name", "#nea_legal_name", "#np_proposed_name", "#oa_company_name", 
        "#pr_legal_name", "#ra_client_name", "#st_legal_name", "#scac_legal_name", "#sllc_proposed_name", 
        "#sm_proposed_name", "#sp_proposed_name", "#ta_legal_name", "#ins_legal_name", "#wbe_legal_name" 
    ].join(","); 
    
    var companyNameInput = document.querySelector(dynamicCompanySelector); 
    var companyName = (window.currentOrderCorePayload && window.currentOrderCorePayload.company_name) || localStorage.getItem("f4u_company_name") || (companyNameInput ? companyNameInput.value.trim() : ""); 
    var serviceTitle = (window.currentOrderCorePayload && window.currentOrderCorePayload.service_title) || localStorage.getItem("f4u_service_title") || window.currentSelectedServiceTitle || "llc-formation"; 
    var planTier = (window.currentOrderCorePayload && window.currentOrderCorePayload.plan_tier) || localStorage.getItem("f4u_plan_tier") || "starter"; 
    var signatureString = (window.currentOrderCorePayload && window.currentOrderCorePayload.poa_signature_verification_string) || localStorage.getItem("f4u_poa_signature") || "pending"; 
    var activeUserId = (window.currentOrderCorePayload && window.currentOrderCorePayload.user_id) || localStorage.getItem("supabase.auth.token") || "00000000-0000-0000-0000-000000000000"; 
    
    var emailInput = document.querySelector('input[type="email"]') || document.getElementById("portal_user_email_input") || document.getElementById("customer_email"); 
    var clientEmail = emailInput ? emailInput.value.trim() : ""; 
    
    if (!clientEmail) { 
        clientEmail = localStorage.getItem("f4u_customer_email") || "guest-checkout@fulfillment-lane.com"; 
    } 
    
    if (!companyName || companyName.trim() === "") { 
        throw new Error("Required field 'company_name' is missing. Please review Step 2 form entries."); 
    } 
    
    localStorage.setItem("f4u_company_name", companyName.trim()); 
    
    var schemaDatabasePayload = { 
        company_name: companyName.trim(), 
        service_title: serviceTitle.trim(), 
        plan_tier: planTier.trim(), 
        total_fee: targetAmount, 
        status: "payment_pending", 
        poa_signed_state: true, 
        poa_signature_verification_string: signatureString.trim(), 
        tracking_number: uniqueTrackingToken.trim(), 
        user_id: activeUserId.trim(), 
        email: clientEmail.trim(), 
        collected_payload_metadata: { 
            wizard_step_checkpoint: 6, 
            timestamp_capture: new Date().toISOString() 
        } 
    }; 
    
    console.log("📡 [Supabase Gateway] Dispatching secure transactional payload to live Edge Function..."); 
    
    var responseStream = await fetch("https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-webhook", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(schemaDatabasePayload) 
    }); 
    
    if (!responseStream.ok) { 
        var serverFailureMessage = await responseStream.text(); 
        throw new Error("Supabase Edge Function Rejected Request: " + serverFailureMessage); 
    } 
    
    var transactionTokenPayload = await responseStream.json(); 
    if (!transactionTokenPayload || !transactionTokenPayload.clientSecret) { 
        throw new Error("Payload mapping error: clientSecret key is missing from Supabase response."); 
    } 
    
    // Global state cache setting matching your structural expectations
    window.stripeClientSecret = transactionTokenPayload.clientSecret; 
    window.stripePaymentIntentId = transactionTokenPayload.paymentIntentId; 
    
    if (!window.currentOrderCorePayload) { 
        window.currentOrderCorePayload = {}; 
    } 
    window.currentOrderCorePayload.stripe_payment_id = transactionTokenPayload.paymentIntentId; 
    
    var activeOnboardingState = JSON.parse(localStorage.getItem("f4u_wizard_onboarding_state") || "{}"); 
    activeOnboardingState.stripeClientSecret = transactionTokenPayload.clientSecret; 
    localStorage.setItem("f4u_wizard_onboarding_state", JSON.stringify(activeOnboardingState)); 
}

// Expose the interface bridge method onto the global window instance
window.executeStabaseCheckoutTransactionHandshake = processCheckoutHandshake;

})();


// ============================================================================ //
// 📁 stripe-core.js - PANEL VISIBILITY ADJUSTMENTS CORE INTERLOCK              //
// ============================================================================ //
(function() {
"use strict";

/**
 * Global Bridge Hook: Invoked during switchWizardActiveViewLayout to perform 
 * urgent styles and dimension reflow adjustments specifically for the step 6 payment canvas.
 * @param {HTMLElement} panelNode - The active panel DOM container target node.
 * @param {number} targetStepInt - The incoming computed step tracking index.
 */
function applyStep6DisplayReflowAdjustments(panelNode, targetStepInt) {
    if (!panelNode || targetStepInt !== 6) return;

    // Enforce clear styling definitions so Stripe's inner elements maintain structured layouts
    panelNode.style.setProperty("opacity", "1", "important"); 
    panelNode.style.setProperty("visibility", "visible", "important"); 
    
    // Force browser rendering engine execution pass to compute sizes cleanly
    const forcedLayoutReflowMarker = panelNode.offsetHeight; 
    console.log("[Stripe Core Reflow] Layout queue flushed for Step 6 iframe container nodes.");
}

// Bind visibility helper into the bridge hook namespace
window.executeExternalVisibilityAdjustments = applyStep6DisplayReflowAdjustments;

})();


// ============================================================================ //
// 📁 stripe-core.js - LIFECYCLE FLOW INTERCEPTOR GATE (FINAL TIMING HARDENED)  //
// ============================================================================ //
(function() {
"use strict";

function handleStripeLifecycleHandoff() {
    const stripePanelContainer = document.getElementById("step-panel-6"); 
    if (!stripePanelContainer) return;

    stripePanelContainer.style.setProperty("display", "block", "important"); 
    stripePanelContainer.style.setProperty("opacity", "1", "important"); 
    stripePanelContainer.style.setProperty("visibility", "visible", "important"); 
    stripePanelContainer.classList.add("active"); 
    
    // Flush layout styles immediately
    stripePanelContainer.offsetHeight; 
    
    // ============================================================================
    // 🚀 THE ULTIMATE TIMING FIX: DOUBLE-ANIMATION FRAME DEFERMENT
    // ============================================================================
    // Forces the runtime thread to yield control back to the browser layout engine.
    // This guarantees wizard-master-core.js finishes applying '[Viewport Engine]' 
    // mobile layout skinning parameters before Stripe attempts to paint its iframe.
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
                console.log("✅ [Stripe Core Shield] Viewport skinning stable. Mounting secure checkout iframe..."); 
                window.initializeFlatStripeCheckoutElement(); 
            } else { 
                console.warn("[Stripe Lifecycle Interlock Error] initializeFlatStripeCheckoutElement from step-6.js missing."); 
            } 
        });
    });
}

// Bind method onto global routing namespace context
window.executeStripeLifecycleHandoffGate = handleStripeLifecycleHandoff;

})();



// ============================================================================ //
// 📁 stripe-core.js - DEFERRED CANVAS RECOVERY FILTER                          //
// ============================================================================ //
(function() {
"use strict";

/**
 * Global Bridge Hook: Invoked by enforceJurisdictionGateEvaluation when loading 
 * progress directly into the checkout phase. Forces an immediate layout un-hide.
 * @param {number} stepToLoad - The target index step value to un-hide.
 */
function handleStripeDisplayRecovery(stepToLoad) {
    if (stepToLoad !== 6) return;

    const paymentPanel = document.getElementById("step-panel-6"); 
    if (paymentPanel) { 
        paymentPanel.style.setProperty("display", "block", "important"); 
        paymentPanel.classList.add("active"); 
        console.log("[Stripe Core Gate] Secure checkout panel unhidden for active frame recovery pass.");
    } 
}

// Map the alignment method onto the global bridge hook register
window.executeStripeDisplayRecoveryOverride = handleStripeDisplayRecovery;

})();


// ============================================================================ //
// 📁 stripe-core.js - LIFECYCLE INITIALIZATION OVERRIDE TRACKING MODULE       //
// ============================================================================ //
(function() {
"use strict";

/**
 * Global Bridge Hook: Invoked by runUnifiedPlatformLifecycleBoot when restoring 
 * user state parameters. Safeguards Stripe elements from mounting to a flattened node.
 * @param {number} activeStepIndex - The computed incoming active panel index.
 */
function handleStripeBootOverride(activeStepIndex) {
    if (activeStepIndex !== 6) return;

    const paymentPanelNode = document.getElementById("step-panel-6"); 
    if (paymentPanelNode) { 
        paymentPanelNode.style.setProperty("display", "block", "important"); 
        paymentPanelNode.classList.add("active"); 
        console.log("[Stripe Core Boot Guard] Pre-emptively adjusted layout variables for Step 6 container nodes.");
    } 
}

// Map method onto cross-file bridge verification registries
window.executeStripeBootOverrideGuard = handleStripeBootOverride;

})();