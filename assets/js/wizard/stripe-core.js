// ============================================================================ //
// // 📁 stripe-core.js - REGISTRY INITIALIZATION LAYER (UPDATED) //
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
 let cachedSecret = storedState.stripeClientSecret || storedState.clientSecret || null;
 if (cachedSecret && typeof cachedSecret === 'string') {
 cachedSecret = cachedSecret.trim().replace(/"/g, "");
 // 🚀 THE CRITICAL PARSER PATATION LAYER:
 // Wipes out corrupted trailing string loops inherited from old sandbox sessions
 if (cachedSecret.startsWith('cs_test_') || cachedSecret.startsWith('cs_live_')) {
 const parts = cachedSecret.split('_secret_');
 if (parts.length > 2) {
 cachedSecret = `${parts[0]}_secret_${parts[1]}`;
 }
 }
 window.stripeClientSecret = cachedSecret;
 console.log("✅ [Stripe Matrix Core] Cleaned authorization state restored from session storage caches.");
 }
 
 // 🎯 THE PIPELINE HANDSHAKE FIX: Ensure profile metrics match separate schema variables if nested inside state objects
 if (storedState.first_name || storedState.wizard_first_name) {
 localStorage.setItem("wizard_first_name", storedState.first_name || storedState.wizard_first_name);
 }
 if (storedState.last_name || storedState.wizard_last_name) {
 localStorage.setItem("wizard_last_name", storedState.last_name || storedState.wizard_last_name);
 }
 if (storedState.phone_number || storedState.wizard_phone_number) {
 localStorage.setItem("wizard_phone_number", storedState.phone_number || storedState.wizard_phone_number);
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

  function handleStripeSessionRecovery() { 
    console.log("[Stripe Recovery Channel] Synchronizing active dashboard session back to Step 6 payment gateway viewports."); 
    
    if (typeof window.forceStep6StripePaymentGatewayRefreshPass === "function") { 
      window.forceStep6StripePaymentGatewayRefreshPass(window.stripeClientSecret); 
    } else if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
      // FIX: Explicitly forward the global state secret down to your mount handler
      window.initializeFlatStripeCheckoutElement(window.stripeClientSecret); 
    } else { 
      console.warn("[Stripe Recovery Channel] Checkout layout initialization modules are unpopulated."); 
    } 
  } 

  window.onStripeSessionRecoveryTrigger = handleStripeSessionRecovery; 
})();


// ============================================================================ // 
// 📁 stripe-core.js - REWRITE CONSTRAINTS ROUTER                               // 
// ============================================================================ // 
(function() { 
  "use strict"; 

  function verifyLayoutRewritePermissions(flagKey) { 
    // FIX: Fallback to reading the true active numeric state or directly targeting the step container
    const currentActiveWizardStep = parseInt(window.currentWizardActiveStep, 10) || 0; 
    const step6Panel = document.getElementById('step-panel-6');
    const isStep6Visible = step6Panel && (step6Panel.classList.contains('active') || step6Panel.style.display !== 'none');

    if (currentActiveWizardStep === 6 || isStep6Visible) { 
      console.log(`[Stripe Shield] Suppressed compilation DOM rewrite for flag "${flagKey}" on payment canvas to protect Stripe Elements.`); 
      return true; 
    } 
    return false; 
  } 

  window.shouldSuppressCompilationLayoutRewrites = verifyLayoutRewritePermissions; 
})();


// ============================================================================ // 
// 📁 stripe-core.js - SECURE INPUT FILTERS REGISTRY                            // 
// ============================================================================ // 
(function() { 
  "use strict"; 

  function isStripeFieldInstance(element) { 
    if (!element) return false; 
    
    // FIX: Swapped out strict case id checking for case-insensitive class & ID validation
    const elementId = element.id || "";
    const hasStripeId = /stripe|card-element|payment-element/i.test(elementId);

    return !!( 
      element.closest('.StripeElement') || 
      element.closest('.__PrivateStripeElement') ||
      hasStripeId || 
      element.classList.contains('StripeElement') ||
      element.closest('[class*="Stripe"]')
    ); 
  } 

  window.checkIsProtectedExternalField = isStripeFieldInstance; 
})();


// ============================================================================ // 
// 📁 stripe-core.js - UNIFIED TRANSACTION EXECUTION BLOCK                      // 
// ============================================================================ // 
(function() {
  "use strict";

  async function processCheckoutHandshake() { 
    var targetAmount = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 194.00; 
    var uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || ""; 
    var dynamicCompanySelector = [ "#ar_business_name", "#boc_legal_name", "#ba_legal_name", "#bins_legal_name", "#bl_applicant_name", "#cage_legal_name", "#cgs_company_name", "#clia_lab_name", "#corp_proposed_name", "#dba_proposed_name", "#dbe_legal_name", "#dot_con_legal_name", "#prm_legal_name", "#dqf_carrier_name", "#duns_legal_name", "#ein_applicant_name", "#fed_tax_legal_name", "#fq_proposed_name", "#fran_tax_legal_name", "#haz_legal_name", "#hut_legal_name", "#ifta_legal_name", "#ifta_rep_legal_name", "#llc_desired_name", "#rein_original_name", "#mcs_legal_name", "#mbe_legal_name", "#nea_legal_name", "#np_proposed_name", "#oa_company_name", "#pr_legal_name", "#ra_client_name", "#st_legal_name", "#scac_legal_name", "#sllc_proposed_name", "#sm_proposed_name", "#sp_proposed_name", "#ta_legal_name", "#ins_legal_name", "#wbe_legal_name" ].join(","); 
    var companyNameInput = document.querySelector(dynamicCompanySelector); 
    var companyName = (window.currentOrderCorePayload && window.currentOrderCorePayload.company_name) || localStorage.getItem("f4u_company_name") || (companyNameInput ? companyNameInput.value.trim() : ""); 
    var serviceTitle = (window.currentOrderCorePayload && window.currentOrderCorePayload.service_title) || localStorage.getItem("f4u_service_title") || window.currentSelectedServiceTitle || "Corporate Filing Package"; 
    var planTier = (window.currentOrderCorePayload && window.currentOrderCorePayload.plan_tier) || localStorage.getItem("f4u_plan_tier") || "standard"; 
    var signatureString = (window.currentOrderCorePayload && window.currentOrderCorePayload.poa_signature_verification_string) || localStorage.getItem("f4u_poa_signature") || ""; 
    var activeUserId = null; 

    try { 
      var rawAuthToken = localStorage.getItem("sb-lrbimrlbskjweynxlgas-auth-token"); 
      if (rawAuthToken) { 
        var parsedTokenObj = JSON.parse(rawAuthToken); 
        activeUserId = parsedTokenObj?.user?.id || parsedTokenObj?.currentSession?.user?.id || null; 
      } 
    } catch (e) { 
      console.warn("[Stripe Handshake] Session lookup skipped."); 
    } 

    var emailInput = document.querySelector('input[type="email"]') || document.getElementById("portal_user_email_input") || document.getElementById("customer_email"); 
    var clientEmail = emailInput ? emailInput.value.trim() : ""; 
    if (!clientEmail) { 
      clientEmail = localStorage.getItem("f4u_customer_email") || ""; 
    } 

    if (!companyName || companyName.trim() === "") { 
      throw new Error("Required field 'company_name' is missing. Please review Step 2 form entries."); 
    } 
    localStorage.setItem("f4u_company_name", companyName.trim()); 

    var schemaDatabasePayload = { company_name: companyName.trim(), service_title: serviceTitle.trim(), plan_tier: planTier.trim().toLowerCase(), total_fee: targetAmount, status: "initiated", poa_signed_state: signatureString.trim() !== "", poa_signature_verification_string: signatureString.trim(), tracking_number: uniqueTrackingToken.trim(), user_id: activeUserId, email: clientEmail.trim().toLowerCase(), action_intent: "initialize_payment_intent", collected_payload_metadata: { wizard_step_checkpoint: 6, timestamp_capture: new Date().toISOString() } };
    console.log("📡 [Supabase Gateway] Dispatching secure transactional payload to live Edge Function..."); 

    try { 
      // FIX: Directed network stream target to hit your real, live working Supabase Function endpoint
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
      var receivedSecretToken = transactionTokenPayload.clientSecret || transactionTokenPayload.client_secret; 
      
      if (!receivedSecretToken) { 
        throw new Error("Payload mapping error: clientSecret key is missing from Supabase response."); 
      } 
      
      var pristineSecret = String(receivedSecretToken).trim().replace(/"/g, ""); 
      window.stripeClientSecret = pristineSecret; 
      window.stripePaymentIntentId = transactionTokenPayload.paymentIntentId || transactionTokenPayload.id; 
      
      if (!window.currentOrderCorePayload) { 
        window.currentOrderCorePayload = {}; 
      } 
      window.currentOrderCorePayload.stripe_payment_id = window.stripePaymentIntentId; 
      
      var activeOnboardingState = JSON.parse(localStorage.getItem("f4u_wizard_onboarding_state") || "{}"); 
      activeOnboardingState.stripeClientSecret = pristineSecret; 
      localStorage.setItem("f4u_wizard_onboarding_state", JSON.stringify(activeOnboardingState)); 
      
      console.log("✅ [Handshake Envelope] Pristine Checkout Session token cached cleanly: ", pristineSecret); 
      
      if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
        window.initializeFlatStripeCheckoutElement(pristineSecret); 
      } 
      return transactionTokenPayload; 
    } catch (handshakeFault) { 
      console.error("🚨 [Handshake Fault]: ", handshakeFault.message); 
      throw handshakeFault; 
    } 
  } 

  window.executeStabaseCheckoutTransactionHandshake = processCheckoutHandshake; 
})();








// ============================================================================ // 
// 📁 stripe-core.js - PANEL VISIBILITY ADJUSTMENTS CORE INTERLOCK             // 
// ============================================================================ // 
(function() { 
  "use strict"; 

  function applyStep6DisplayReflowAdjustments(panelNode, targetStepInt) { 
    if (!panelNode || targetStepInt !== 6) return; 

    panelNode.style.setProperty("opacity", "1", "important"); 
    panelNode.style.setProperty("visibility", "visible", "important"); 

    // FIX: Defer layout calculation to an animation frame to avoid thread thrashing
    requestAnimationFrame(function() {
      const forcedLayoutReflowMarker = panelNode.offsetHeight; 
      console.log("[Stripe Core Reflow] Layout queue flushed for Step 6 iframe container nodes."); 
    });
  } 

  window.executeExternalVisibilityAdjustments = applyStep6DisplayReflowAdjustments; 
})();


// BLOCK 1: Hardened Interlock Lifecycle Retrier 
// ============================================================================ // 
// 📁 stripe-core.js - LIFECYCLE FLOW INTERCEPTOR GATE (POLLING RECOVERY ARRAYS) // 
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

    let initializationAttempts = 0; 
    const MAX_POLLING_ATTEMPTS = 20; 

    function attemptSecureIframeMount() { 
      if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
        // FIX: Replaced deep nested loops with a clean single execution pass
        requestAnimationFrame(() => { 
          console.log("✅ [Stripe Core Shield] Viewport skinning verified. Mounting secure checkout iframe..."); 
          
          // FIX: Forward your globally cached token state straight down to your step renderer
          const targetSecret = window.stripeClientSecret || localStorage.getItem("f4u_stripe_client_secret");
          window.initializeFlatStripeCheckoutElement(targetSecret); 
        }); 
      } else if (initializationAttempts < MAX_POLLING_ATTEMPTS) { 
        initializationAttempts++; 
        console.log(`📡 [Stripe Core Deferral] Core method unassigned. Scheduling initialization poll context: [Attempt ${initializationAttempts}/${MAX_POLLING_ATTEMPTS}]`); 
        setTimeout(attemptSecureIframeMount, 100); 
      } else { 
        console.error("✕ [Stripe Lifecycle Interlock Error] Fatal: initializeFlatStripeCheckoutElement from step-6.js failed to resolve inside window context bounds."); 
      } 
    } 

    attemptSecureIframeMount(); 
  } 

  window.executeStripeLifecycleHandoffGate = handleStripeLifecycleHandoff; 
})();



// ============================================================================ // 
// 📁 stripe-core.js - DEFERRED CANVAS RECOVERY FILTER                          // 
// ============================================================================ // 
(function() { 
  "use strict"; 

  function handleStripeDisplayRecovery(stepToLoad) { 
    if (stepToLoad !== 6) return; 
    
    const paymentPanel = document.getElementById("step-panel-6"); 
    if (paymentPanel) { 
      paymentPanel.style.setProperty("display", "block", "important"); 
      // FIX: Added matching layout visibility and opacity safety constraints
      paymentPanel.style.setProperty("opacity", "1", "important");
      paymentPanel.style.setProperty("visibility", "visible", "important");
      paymentPanel.classList.add("active"); 
      
      console.log("[Stripe Core Gate] Secure checkout panel unhidden for active frame recovery pass."); 
    } 
  } 

  window.executeStripeDisplayRecoveryOverride = handleStripeDisplayRecovery; 
})();

// ============================================================================ // 
// 📁 stripe-core.js - LIFECYCLE INITIALIZATION OVERRIDE TRACKING MODULE       // 
// ============================================================================ // 
(function() { 
  "use strict"; 

  function handleStripeBootOverride(activeStepIndex) { 
    if (activeStepIndex !== 6) return; 
    
    const paymentPanelNode = document.getElementById("step-panel-6"); 
    if (paymentPanelNode) { 
      paymentPanelNode.style.setProperty("display", "block", "important"); 
      paymentPanelNode.style.setProperty("opacity", "1", "important");
      paymentPanelNode.style.setProperty("visibility", "visible", "important");
      paymentPanelNode.classList.add("active"); 
      
      console.log("[Stripe Core Boot Guard] Pre-emptively adjusted layout variables for Step 6 container nodes.");
      
      // FIX: Pre-emptively invoke your lifecycle gate to mount Stripe inputs on boot recovery
      if (typeof window.executeStripeLifecycleHandoffGate === "function") {
        window.executeStripeLifecycleHandoffGate();
      }
    } 
  } 

  window.executeStripeBootOverrideGuard = handleStripeBootOverride; 
})();
