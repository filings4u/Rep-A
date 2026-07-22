// ==========================================
// FILE 1: UI_CORE_INJECTOR.JS (FIXED 4-COLUMN LAYOUT)
// ==========================================
(function() {
  "use strict";

  const STRIPE_KEY = 'pk_test_51TTy4i0dNjSlvyScX676lZwB34Lby8nEuv0sRorwo6kGYKkTJYiTyPQA6PVjzwUSjB9Kz90LdHtCh2E1BTMMEkTX00HCLPKUkf';

  window.stripeInstance = window.stripeInstance || null;
  window.stripeElementsContainer = window.stripeElementsContainer || null;
  window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

  async function initializeFlatStripeCheckoutElement() {
    console.log("[Stripe Core] Rendering UI layout skeleton...");
    const baseContainer = document.getElementById("step-6-injection-placeholder");
    if (!baseContainer) {
      console.error("[Stripe Core] Execution halted. Target placeholder not found.");
      return;
    }

    if (typeof Stripe === "undefined") {
      baseContainer.innerHTML = "<p style='color: red; font-weight: 600;'>Payment system offline. Please refresh.</p>";
      return;
    }

    if (!window.stripeInstance) {
      window.stripeInstance = Stripe(STRIPE_KEY);
    }

    const total = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total") || 0);
    const compName = window.currentOrderCorePayload?.company_name || localStorage.getItem("wizard_field_company_name") || localStorage.getItem("wizard_company_name") || localStorage.getItem("f4u_company_name") || "";
    const servKey = window.routeActiveServiceKey || window.currentOrderCorePayload?.service_key || localStorage.getItem("wizard_service_key") || "";
    const servTitle = window.currentOrderCorePayload?.service_title || localStorage.getItem("wizard_field_selected_package_offering") || "Operating Agreement Drafting";
    const planTier = window.routeActivePlanKey || window.currentOrderCorePayload?.plan_tier || localStorage.getItem("wizard_plan_tier_key") || "starter";
    const tracking = localStorage.getItem("f4u_active_tracking_token") || "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase();
    localStorage.setItem("f4u_active_tracking_token", tracking);

    if (isNaN(total) || total <= 0) {
      baseContainer.innerHTML = "<p style='color: #475569;'>Calculating final statement values...</p>";
      setTimeout(initializeFlatStripeCheckoutElement, 300);
      return;
    }

    window.currentOrderCorePayload = {
      company_name: compName,
      service_key: servKey,
      service_title: servTitle,
      plan_tier: planTier,
      total_fee: total,
      status: "payment_pending",
      tax_id_status: "pending",
      poa_signed_state: false,
      poa_signature_verification_string: "pending"
    };

    baseContainer.innerHTML = `
      <div style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box;">
        <div>
          <h2 style="margin: 0 0 4px 0; color: #0a1f44; font-weight: 800; font-size: 1.35rem;">Secure Checkout</h2>
          <p style="color: #64748b; font-size: 0.88rem; margin: 0;">Authorize your compliance filing package payment below.</p>
        </div>
        <div style="text-align: right; background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 6px;">
          <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #64748b; display: block;">Total Due:</span>
          <span id="payment-gateway-total-display" style="font-size: 1.5rem; font-weight: 800; color: #10b981; font-family: monospace;">$${total.toFixed(2)}</span>
        </div>
      </div>

        <!-- 1. VERIFIED ENTERPRISE METADATA BOX (EXPLICIT TWO ROWS OF TWO COLUMNS) -->
      <div style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; box-sizing: border-box; width: 100%;">
        <div style="font-size: 0.725rem; font-weight: 800; color: #475569; letter-spacing: 0.05em; margin-bottom: 4px;">VERIFIED ENTERPRISE FILING METADATA</div>
        
        <!-- ROW 1: COMPANY NAME & SERVICE TITLE -->
        <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;">
          <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;">
            <label style="font-weight: 700; font-size: 0.725rem; color: #64748b;">COMPANY NAME</label>
            <input type="text" id="schema_orders_company_name" readonly disabled value="${compName}" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #475569; box-sizing: border-box;">
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;">
            <label style="font-weight: 700; font-size: 0.725rem; color: #64748b;">SERVICE TITLE</label>
            <input type="text" id="schema_orders_service_title" readonly disabled value="${servTitle}" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #475569; box-sizing: border-box;">
          </div>
        </div>
        
        <!-- ROW 2: PLAN TIER & TRACKING NUMBER -->
        <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;">
          <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;">
            <label style="font-weight: 700; font-size: 0.725rem; color: #64748b;">PLAN TIER</label>
            <input type="text" id="schema_orders_plan_tier" readonly disabled value="${planTier.toUpperCase()}" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #475569; box-sizing: border-box;">
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;">
            <label style="font-weight: 700; font-size: 0.725rem; color: #64748b;">TRACKING NUMBER</label>
            <input type="text" id="schema_orders_tracking_number" readonly disabled value="${tracking}" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #475569; font-family: monospace; box-sizing: border-box;">
          </div>
        </div>
      </div>


      <!-- 2. CONTACT PROFILES FIELD GRID -->
      <div style="margin-bottom: 24px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; width: 100%; box-sizing: border-box;">
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">First Name *</label>
          <input type="text" id="portal_user_first_name" required style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Last Name *</label>
          <input type="text" id="portal_user_last_name" required style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Email Address *</label>
          <input type="email" id="portal_user_email_input" required style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Phone Number *</label>
          <input type="text" id="portal_user_phone" required style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
      </div>

      <div id="step6-error-banner-target" style="display: none; padding: 14px; background: #fef2f2; border: 1px solid #fca5a5; color: #991b1b; border-radius: 6px; margin-bottom: 20px; font-size: 0.9rem;"></div>

      <!-- STRIPE CONTAINER -->
      <div id="stripe-payment-element-mount-point" style="margin-bottom: 24px; min-height: 150px; width: 100%;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box;">
        <button type="button" id="wizardBackBtnElement" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Back</button>
        <button type="button" id="wizardSubmitBtnElement" style="background: #047857; border: none; color: white; padding: 12px 32px; border-radius: 6px; font-weight: 700; cursor: pointer;">
          Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>
        </button>
      </div>
    `;

    document.getElementById("wizardBackBtnElement")?.addEventListener("click", () => {
      if(typeof window.goToPreviousWizardStep === 'function') {
        window.goToPreviousWizardStep();
      }
    });

    ["portal_user_first_name", "portal_user_last_name", "portal_user_email_input", "portal_user_phone"].forEach(id => {
      document.getElementById(id)?.addEventListener("input", function() {
        this.classList.remove("field-error-shake");
      });
    });

    if (typeof window.executeStripeMountingPipeline === "function") {
      window.executeStripeMountingPipeline(total);
    }
  }

  window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;
})();



// ==========================================
// FILE 2: STRIPE_ELEMENTS_MOUNT.JS
// ==========================================
(function() {
  "use strict";

  function executeStripeMountingPipeline(currentGrandTotal) {
    const targetNode = document.getElementById('stripe-payment-element-mount-point');
    if (!targetNode) {
      console.warn("⚠️ [Stripe Mount Engine]: Element '#stripe-payment-element-mount-point' absent from DOM layout.");
      return;
    }

    try {
      if (window.stripePaymentElementInstance) { 
        window.stripePaymentElementInstance.destroy(); 
        window.stripePaymentElementInstance = null; 
      } 

      window.stripeElementsContainer = window.stripeInstance.elements({ 
        mode: 'payment', 
        currency: 'usd', 
        amount: Math.round((currentGrandTotal || 0) * 100), 
        appearance: { 
          theme: 'flat', 
          variables: { 
            colorPrimary: '#0a1f44', colorBackground: '#ffffff', colorText: '#0a1f44', 
            colorTextPlaceholder: '#94a3b8', borderRadius: '6px', spacingGridRow: '16px' 
          }, 
          rules: { 
            '.Input': { padding: '14px 16px', fontSize: '15px', border: '1px solid #e2e8f0', boxShadow: 'none' }, 
            '.Input:focus': { borderColor: '#10b981', boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)' }, 
            '.Input--invalid': { borderColor: '#ef4444', boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.15)' }, 
            '.Label': { fontWeight: '700', fontSize: '13px', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' } 
          } 
        } 
      }); 

      window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', { 
        layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: true } 
      }); 

      window.stripePaymentElementInstance.on("loaderror", function(errEvent) { 
        console.warn("✕ [Stripe Framework Load Error Intercepted]:", errEvent.error); 
      }); 

      window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point'); 
      console.log("✅ [Stripe Engine] Secured card iframe mounted successfully.");

    } catch (innerScopeException) {
      console.error("✕ [Stripe Mounting Fatal Exception Context]", innerScopeException);
    }
  }

  window.executeStripeMountingPipeline = executeStripeMountingPipeline;
})();


// ========================================== //
// FILE 3: INTERACTION_CONTROLLER.JS (FIXED)  //
// ========================================== //
(function() { 
  "use strict"; 

  function validateBaseProfileMatrix() { 
    let textFieldsValid = true; 
    const inputs = [ 
      "portal_user_first_name", 
      "portal_user_last_name", 
      "portal_user_email_input", 
      "portal_user_phone" 
    ]; 
    inputs.forEach(id => { 
      const inputTarget = document.getElementById(id); 
      if (!inputTarget) return; 
      if (!inputTarget.value.trim() || (inputTarget.required && !inputTarget.checkValidity())) { 
        inputTarget.classList.remove("field-validated-emerald"); 
        inputTarget.classList.add("field-error-shake"); 
        textFieldsValid = false; 
      } else { 
        inputTarget.classList.remove("field-error-shake"); 
        inputTarget.classList.add("field-validated-emerald"); 
      } 
    }); 
    return textFieldsValid; 
  } 

  function attachSubmitButtonController() { 
    const masterSubmitActionBtn = document.getElementById("wizardSubmitBtnElement"); 
    if (!masterSubmitActionBtn) {
      console.warn("[Stripe Controller] '#wizardSubmitBtnElement' not found in DOM yet.");
      return;
    } 

    // Remove any existing listener to prevent double-binding
    masterSubmitActionBtn.replaceWith(masterSubmitActionBtn.cloneNode(true));
    const cleanBtn = document.getElementById("wizardSubmitBtnElement");

    cleanBtn.addEventListener("click", async (clickEvent) => { 
      clickEvent.preventDefault(); 
      const errorBanner = document.getElementById("step6-error-banner-target"); 
      if (errorBanner) errorBanner.style.display = "none"; 

      if (!validateBaseProfileMatrix()) { 
        console.warn("[Submit Validation] Aborting pipeline submission. Fields missing."); 
        if (errorBanner) { 
          errorBanner.innerText = "Please complete all required contact fields before processing payment."; 
          errorBanner.style.display = "block"; 
        } 
        return; 
      } 

      cleanBtn.disabled = true; 
      cleanBtn.style.opacity = "0.6"; 
      cleanBtn.innerHTML = `Processing Transaction <i class="fa-solid fa-spinner fa-spin" style="margin-left: 6px;"></i>`; 

      try { 
        const currentGrandTotal = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total") || 0); 
        const userEmail = document.getElementById("portal_user_email_input").value.trim(); 

        if (window.currentOrderCorePayload) { 
          window.currentOrderCorePayload.email = userEmail; 
          window.currentOrderCorePayload.collected_payload_metadata = { 
            first_name: document.getElementById("portal_user_first_name").value.trim(), 
            last_name: document.getElementById("portal_user_last_name").value.trim(), 
            phone: document.getElementById("portal_user_phone").value.trim(), 
            wizard_step_checkpoint: 6, 
            timestamp_capture: new Date().toISOString() 
          }; 
        } 

        // Execute processing pipeline with explicit logging
        if (typeof window.executeOnboardingTransactionPayloadSubmitVanilla === 'function') { 
          console.log("[Stripe Pipeline] Running vanilla payload submit...");
          await window.executeOnboardingTransactionPayloadSubmitVanilla(clickEvent); 
        } else if (typeof window.executeSecurePaymentConfirmationPipeline === "function") { 
          console.log("[Stripe Pipeline] Running secure confirmation pipeline...");
          await window.executeSecurePaymentConfirmationPipeline(currentGrandTotal, cleanBtn); 
        } else { 
          throw new Error("Stripe transaction pipelines are uninitialized. Check if your main Stripe JS file loaded correctly."); 
        } 
      } catch (pipelineException) { 
        console.error("[Stripe Runtime Pipeline Error]", pipelineException); 
        if (errorBanner) { 
          errorBanner.innerText = pipelineException.message || "An unexpected processing error occurred."; 
          errorBanner.style.display = "block"; 
        } 
        cleanBtn.disabled = false; 
        cleanBtn.style.opacity = "1"; 
        cleanBtn.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`; 
      } 
    }); 
    console.log("[Stripe Controller] Secure Payment button event listener successfully attached.");
  } 

  function bootloaderRuntimeGate() { 
    // 1. Always attempt to initialize the payment element UI if available
    if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
      window.initializeFlatStripeCheckoutElement(); 
    } else {
      console.warn("[Stripe Controller] window.initializeFlatStripeCheckoutElement is not a function.");
    }

    // 2. Always bind the button click event regardless of step state
    attachSubmitButtonController(); 
  } 

  if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", bootloaderRuntimeGate); 
  } else { 
    bootloaderRuntimeGate(); 
  } 

  window.triggerStep6StripeBootloader = bootloaderRuntimeGate; 
})();

window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) { 
  const errorBanner = document.getElementById("step6-error-banner-target"); 
  const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN"; 

  // Parse authentic Supabase Auth UUID from local storage if available
  let parsedSupabaseUserId = "00000000-0000-0000-0000-000000000000";
  try {
    const rawAuthToken = localStorage.getItem("supabase.auth.token");
    if (rawAuthToken) {
      const parsedTokenObj = JSON.parse(rawAuthToken);
      if (parsedTokenObj?.currentSession?.user?.id) {
        parsedSupabaseUserId = parsedTokenObj.currentSession.user.id;
      } else if (parsedTokenObj?.user?.id) {
        parsedSupabaseUserId = parsedTokenObj.user.id;
      }
    }
  } catch (e) {
    console.warn("[Supabase Token Parser] Failed to parse local auth session object. Defaulting to system fallback uuid.");
  }

  // Strict enterprise profile attribute construction mapping directly to your public.orders schema 
  const profileTransactionPayload = { 
    company_name: window.currentOrderCorePayload?.company_name || localStorage.getItem("f4u_company_name") || "", 
    service_key: window.currentOrderCorePayload?.service_key || localStorage.getItem("f4u_service_key") || "", 
    service_title: window.currentOrderCorePayload?.service_title || localStorage.getItem("f4u_service_title") || "", 
    plan_tier: window.currentOrderCorePayload?.plan_tier || localStorage.getItem("f4u_plan_tier") || "starter", 
    total_fee: finalAmountDue, 
    email: document.getElementById("portal_user_email_input")?.value.trim() || "", 
    tracking_number: uniqueTrackingToken, 
    status: window.currentOrderCorePayload?.status || "payment_pending", 
    tax_id_status: window.currentOrderCorePayload?.tax_id_status || "pending", 
    poa_signed_state: window.currentOrderCorePayload?.poa_signed_state || false, 
    poa_signature_verification_string: window.currentOrderCorePayload?.poa_signature_verification_string || "pending", 
    user_id: window.currentOrderCorePayload?.user_id || parsedSupabaseUserId, 
    collected_payload_metadata: { 
      first_name: document.getElementById("portal_user_first_name")?.value.trim() || "", 
      last_name: document.getElementById("portal_user_last_name")?.value.trim() || "", 
      phone: document.getElementById("portal_user_phone")?.value.trim() || "", 
      amount_in_cents: Math.round(finalAmountDue * 100), 
      currency: "usd", 
      wizard_step_checkpoint: 6, 
      timestamp_capture: new Date().toISOString() 
    } 
  }; 

  // Integrity constraint assertion pass: Fail out completely before calling server gateway if fields are empty 
  if (!profileTransactionPayload.company_name || !profileTransactionPayload.email || !profileTransactionPayload.tracking_number) { 
    throw new Error("[Enterprise Critical Error] Mandatory field parameters are missing. Transmission aborted to prevent database insertion failure."); 
  } 

  console.log("📡 [Supabase Gateway] Dispatching secure transactional payload to live Edge Function..."); 
  const pipelineEndpointResponse = await fetch('https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-checkout', { 
    method: "POST", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify(profileTransactionPayload) 
  }); 

  if (!pipelineEndpointResponse.ok) { 
    const serverFailureMessage = await pipelineEndpointResponse.text(); 
    throw new Error(`Supabase Edge Function Rejected Request (${pipelineEndpointResponse.status}): ${serverFailureMessage}`); 
  } 

  const completedTransactionIntentJSON = await pipelineEndpointResponse.json(); 
  
  // Safe validation check matching both standard payment intent layouts and custom nested properties
window.stripeClientSecret = completedTransactionIntentJSON.clientSecret || completedTransactionIntentJSON.client_secret;
const verifiedPaymentIntentId = completedTransactionIntentJSON.paymentIntentId || completedTransactionIntentJSON.payment_intent_id || completedTransactionIntentJSON.id;


  if (verifiedPaymentIntentId) { 
    window.currentOrderCorePayload = window.currentOrderCorePayload || {}; 
    window.currentOrderCorePayload.stripe_payment_id = verifiedPaymentIntentId; 
    profileTransactionPayload.stripe_payment_id = verifiedPaymentIntentId; 
  } else { 
    throw new Error("[Enterprise Critical Error] Supabase Edge Function response omitted mandatory paymentIntentId structural reference."); 
  } 

  if (!window.stripeClientSecret) { 
    throw new Error("Critical structural mismatch. Transaction token identifier (clientSecret) was omitted by the Supabase Edge Function."); 
  } 

  console.log("[Supabase Gateway] Handshake complete. Verification token cached. Launching standard Stripe runtime handler..."); 
  
  // Standard correct execution signature for Stripe confirmation elements
  const StripeConfirmationResult = await window.stripeInstance.confirmPayment({ 
    elements: window.stripeElementsContainer, 
    confirmParams: { 
      return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`, 
      receipt_email: profileTransactionPayload.email, 
      billing_details: { 
        name: `${profileTransactionPayload.collected_payload_metadata.first_name} ${profileTransactionPayload.collected_payload_metadata.last_name}`.trim(), 
        email: profileTransactionPayload.email, 
        phone: profileTransactionPayload.collected_payload_metadata.phone || undefined
      } 
    } 
  }); 

  if (StripeConfirmationResult.error) { 
    console.warn("[Stripe Core API] Authentication flow halted or failed.", StripeConfirmationResult.error.message); 
    if (errorBanner) { 
      errorBanner.innerText = StripeConfirmationResult.error.message; 
      errorBanner.style.display = "block"; 
    } 
    submitButtonNode.disabled = false; 
    submitButtonNode.style.opacity = "1"; 
    submitButtonNode.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`; 
  } 
};


// ============================================================================ //
// step-6.js - PART 4: PRODUCTION EDGE FUNCTION HANDSHAKE (REPLACE PREVIOUS PART 4) //
// ============================================================================ //
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  const errorBanner = document.getElementById("step6-error-banner-target");
  const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

  // 1. Compile profile attribute dictionaries matching the explicit public.orders schema definitions
  const profileTransactionPayload = {
    company_name: window.currentOrderCorePayload?.company_name || localStorage.getItem("f4u_company_name") || "",
    service_key: window.currentOrderCorePayload?.service_key || localStorage.getItem("f4u_service_key") || "",
    service_title: window.currentOrderCorePayload?.service_title || localStorage.getItem("f4u_service_title") || "",
    plan_tier: window.currentOrderCorePayload?.plan_tier || localStorage.getItem("f4u_plan_tier") || "starter",
    total_fee: finalAmountDue,
    email: document.getElementById("portal_user_email_input")?.value.trim() || "",
    tracking_number: uniqueTrackingToken,
    status: window.currentOrderCorePayload?.status || "payment_pending",
    tax_id_status: window.currentOrderCorePayload?.tax_id_status || "pending",
    poa_signed_state: window.currentOrderCorePayload?.poa_signed_state || false,
    poa_signature_verification_string: window.currentOrderCorePayload?.poa_signature_verification_string || "pending",
    user_id: window.currentOrderCorePayload?.user_id || localStorage.getItem("supabase.auth.token") || "00000000-0000-0000-0000-000000000000",
    collected_payload_metadata: {
      first_name: document.getElementById("portal_user_first_name")?.value.trim(),
      last_name: document.getElementById("portal_user_last_name")?.value.trim(),
      phone: document.getElementById("portal_user_phone")?.value.trim(),
      amount_in_cents: Math.round(finalAmountDue * 100),
      currency: "usd",
      wizard_step_checkpoint: 6,
      timestamp_capture: new Date().toISOString()
    }
  };

  // ========================================================================= //
  // LOCATION: assets/js/step-6.js (FRAGMENT A)                                //
  // ========================================================================= //
  console.log("📡 [Supabase Production Gateway] Dispatching secure transactional payload to live Edge Function...");

  try {
    // Formatted cleanly with split strings to ensure full delivery
    const productionCloudUrl = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-checkout';
    
    const pipelineEndpointResponse = await fetch(productionCloudUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileTransactionPayload)
    });

    if (!pipelineEndpointResponse.ok) {
      const serverFailureMessage = await pipelineEndpointResponse.text();
      throw new Error(`Supabase Edge Function Rejected Request (${pipelineEndpointResponse.status}): ${serverFailureMessage}`);
    }

    // 🚀 FIXED: Securely extract the token payload and save it where Stripe expects it
    const transactionTokenPayload = await pipelineEndpointResponse.json();
    window.stripeClientSecret = transactionTokenPayload.clientSecret;

   if (transactionTokenPayload.paymentIntentId) {
  window.currentOrderCorePayload = window.currentOrderCorePayload || {}; // Ensures the object exists
  window.currentOrderCorePayload.stripe_payment_id = transactionTokenPayload.paymentIntentId;
}


    if (!window.stripeClientSecret) {
      throw new Error("Handshake structural failure: Secret authorization token omitted by cloud gateway.");
    }

    // ============================================================================ //
    // step-6.js - PART 5: DATA PRESERVATION & STRIPE INTENT TRANSMISSION (FIXED) //
    // ============================================================================ //
    // 6. EXECUTE STRIPE INTENT TRANSMISSION HANDSHAKE
    if (window.stripeElementsContainer) {
      console.log("[Stripe Controller] Submitting payment components context...");

    // ============================================================================ //
    // step-6.js - PART 5: FRAGMENT B (STRIPE TRANSMISSION & VIEW SWAP)             //
    // ============================================================================ //
    const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
    if (stripeSubmitError) {
      if (submitButtonNode) {
        submitButtonNode.disabled = false;
        submitButtonNode.style.opacity = "1";
        submitButtonNode.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
      }
      if (errorBanner) {
        errorBanner.style.display = "block";
        errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> ${stripeSubmitError.message}`;
      }
      return false;
    }

    const isMockSecret = String(window.stripeClientSecret || "").startsWith("pi_mock_intent_");
    
    if (window.stripeInstance && !isMockSecret) {
      console.log("[Stripe Submission Engine] Dispatching secure transactional parameters over network...");
      
      const { error: confirmError } = await window.stripeInstance.confirmPayment({
        elements: window.stripeElementsContainer,
        clientSecret: window.stripeClientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`,
          receipt_email: profileTransactionPayload.email,
          billing_details: {
            email: profileTransactionPayload.email,
            name: `${profileTransactionPayload.collected_payload_metadata.first_name} ${profileTransactionPayload.collected_payload_metadata.last_name}`.trim(),
            phone: profileTransactionPayload.collected_payload_metadata.phone
          }
        }
      });
      if (confirmError) throw confirmError;
    } else if (isMockSecret && window.supabaseClient) {
      console.log("🧪 [Sandbox Engine] Mock intent matched. Forcing manual database synchronization...");
      
      // Strict database row compilation mapping directly to public.orders table schema
      const fullSchemaDatabaseRowUpsertNode = {
        id: window.currentOrderCorePayload?.id || crypto.randomUUID(),
        company_name: profileTransactionPayload.company_name,
        service_key: profileTransactionPayload.service_key,
        service_title: profileTransactionPayload.service_title,
        plan_tier: profileTransactionPayload.plan_tier,
        total_fee: profileTransactionPayload.total_fee,
        status: "Paid",
        tax_id_status: profileTransactionPayload.tax_id_status,
        poa_signed_state: profileTransactionPayload.poa_signed_state,
        poa_signature_verification_string: profileTransactionPayload.poa_signature_verification_string,
        collected_payload_metadata: profileTransactionPayload.collected_payload_metadata,
        tracking_number: profileTransactionPayload.tracking_number,
        user_id: profileTransactionPayload.user_id,
        email: profileTransactionPayload.email,
        stripe_payment_id: window.currentOrderCorePayload?.stripe_payment_id || "mock_payment_id_settled"
      };

      const { error: mockUpdateError } = await window.supabaseClient
        .from('orders')
        .upsert(fullSchemaDatabaseRowUpsertNode, { onConflict: 'tracking_number' });

      if (mockUpdateError) {
        console.warn("⚠️ Sandbox Sync Warning:", mockUpdateError.message);
        throw new Error(`Sandbox database tracking synchronization rejected: ${mockUpdateError.message}`);
      } else {
        console.log("✅ Sandbox Sync Complete: Test transaction record marked as Paid inside public.orders.");
      }
    }
  } else {
    throw new Error("Checkout components missing: The payment elements were not mounted correctly.");
  }

  if (typeof window.switchWizardActiveViewLayout === "function") {
    console.log("[Stripe Submission Engine] Checkout complete. Transitioning control to step-7.js...");
    window.switchWizardActiveViewLayout(7);
  } else if (typeof window.goToNextWizardStep === "function") {
    window.goToNextWizardStep();
  }
  
  } catch (checkoutError) {
    console.error("[Fatal Payment Intercept Catch]", checkoutError);
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError}
      `;
    }
    if (submitButtonNode) {
      submitButtonNode.disabled = false;
      submitButtonNode.style.opacity = "1";
      submitButtonNode.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
    }
  }
};


// ============================================================================ //
// step-6.js - SECTION 5: DATA PRESERVATION & STRIPE INTENT TRANSMISSION        //
// ============================================================================ //
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  "use strict";

  // 1. Resolve UI elements using production matrix identifiers
  const submitBtn = submitButtonNode || document.getElementById("wizardSubmitBtnElement") || document.getElementById("wizard-next-trigger-btn");
  const errorBanner = document.getElementById("step6-error-banner-target");
  const emailInputNode = document.getElementById("portal_user_email_input");
  const firstNameInputNode = document.getElementById("portal_user_first_name");
  const lastNameInputNode = document.getElementById("portal_user_last_name");
  const phoneInputNode = document.getElementById("portal_user_phone");

  // 2. Extract values cleanly matching your variable mapping dependencies
  const finalEmail = emailInputNode ? emailInputNode.value.trim().toLowerCase() : localStorage.getItem("f4u_checkout_email") || "";
  const firstName = firstNameInputNode ? firstNameInputNode.value.trim() : "";
  const lastName = lastNameInputNode ? lastNameInputNode.value.trim() : "";
  const phone = phoneInputNode ? phoneInputNode.value.trim() : "";
  
  // ✅ FIXED: Completely dynamic amount matching. No hardcoded dollar amounts.
  const rawTotalText = document.getElementById("payment-gateway-total-display")?.textContent || "";
  const parsedDOMCost = parseFloat(rawTotalText.replace(/[^0-9.]/g, ""));
  const activeGrandCost = !isNaN(parsedDOMCost) ? parsedDOMCost : finalAmountDue;

  const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";
  const urlParams = new URLSearchParams(window.location.search);
  const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "llc-formation").toLowerCase().trim();
  const activePlanKeyString = String(urlParams.get('plan') || window.routeActivePlanKey || window.currentPlanKey || "enterprise").toLowerCase().trim();
  const dynamicLabelTextString = `filings4u Processing Fee (${activePlanKeyString.toUpperCase()})`;
  const isPoaSigned = localStorage.getItem("wizard_field_poa_accepted") === "true" || localStorage.getItem("wizard_field_poa_signed") === "true";
  const poaSignatureString = localStorage.getItem("wizard_field_poa_signature_string") || localStorage.getItem("wizard_field_poa_verification_hash") || "";
  const isReturningUser = localStorage.getItem("f4u_is_returning_customer") === "true";

  // 3. Client mapping layout rules for pure serverless environments
  const supabaseClient = window.supabaseInstance || window.supabaseClient || (typeof window.getSuccessPageSupabaseClient === 'function' ? window.getSuccessPageSupabaseClient() : null);

  // 4. Zero Fetch Duplication: Process payment directly using cached token
  try {
    if (!window.stripeClientSecret) {
      throw new Error("Missing transaction secure secret token. Please return to the previous review layout step.");
    }

    console.log("💳 [Stripe Runtime] Dynamic Amount Verified: $" + activeGrandCost + ". Launching checkout window...");

    const StripeConfirmationResult = await window.stripeInstance.confirmPayment({
      elements: window.stripeElementsContainer,
      clientSecret: window.stripeClientSecret,
      confirmParams: {
        return_url: window.location.origin + "/client-dashboard.html?status=success&token=" + uniqueTrackingToken,
        receipt_email: finalEmail || undefined,
        billing_details: {
          name: (firstName + " " + lastName).trim() || undefined,
          email: finalEmail || undefined,
          phone: phone || undefined
        }
      }
    });

    if (StripeConfirmationResult.error) {
      console.warn("[Stripe Core API] Authentication flow halted or failed.", StripeConfirmationResult.error.message);
      if (errorBanner) {
        errorBanner.innerText = StripeConfirmationResult.error.message;
        errorBanner.style.display = "block";
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
      }
    }

  } catch (globalPipelineError) {
    console.error("🚨 [Pipeline Intercept Failure]:", globalPipelineError.message);
    if (errorBanner) {
      errorBanner.innerText = globalPipelineError.message;
      errorBanner.style.display = "block";
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
      submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
    }
  }
};


/**
 * 📁 STRIPE WEBHOOK CONTROLLER CHANNEL (PRODUCTION HARDENED ROUTER)
 * Responsibility: Listens for successful checkouts, looks up matching database rows 
 * by tracking number, and sets the transaction status to 'Paid'.
 */
async function handleStripeWebhookEvent(stripeEvent, supabaseAdmin) {
  "use strict";
  const eventType = stripeEvent.type;

  // UNIFIED GATEWAY INTERCEPT: Capture valid transaction updates regardless of trigger race condition
  if (eventType === 'checkout.session.completed' || eventType === 'payment_intent.succeeded') {
    const sessionObj = stripeEvent.data.object;

    // Direct extraction of custom metadata properties
    let metadata = sessionObj.metadata || {};
    if (!metadata.tracking_number && sessionObj.payment_intent_parsed_object?.metadata) {
      metadata = sessionObj.payment_intent_parsed_object.metadata;
    }

    // Safety Guard: Avoid processing transactions from outside your wizard lifecycle boundaries
    if (!metadata.tracking_number || metadata.tracking_number.trim() === "") {
      console.log("ℹ️ [Stripe Webhook] Skipping event: Object does not contain a tracking_number token.");
      return;
    }

    console.log(`📡 [Stripe Webhook] Processing event [${eventType}] for Tracking Token: ${metadata.tracking_number}`);

    try {
      // 1. Query the pre-existing row inserted during frontend checkout creation
      const { data: existingOrder, error: fetchError } = await supabaseAdmin
        .from('orders')
        .select('*')
        .eq('tracking_number', metadata.tracking_number)
        .maybeSingle();

      if (fetchError) throw fetchError;
      
      if (!existingOrder) {
        throw new Error(`Order record with tracking number ${metadata.tracking_number} not found inside public.orders.`);
      }

      // Resolve user's actual communication email dynamically from payload channels
      let customerEmail = metadata.email || sessionObj.receipt_email || existingOrder.email;
      if (!customerEmail && sessionObj.customer_details) {
        customerEmail = sessionObj.customer_details.email;
      }
      if (!customerEmail && sessionObj.billing_details) {
        customerEmail = sessionObj.billing_details.email;
      }

      // Extract unique programmatic hash identifiers to fulfill your schema fields
      const liveStripePaymentId = sessionObj.payment_intent || sessionObj.id;
      if (!liveStripePaymentId) throw new Error("Stripe transaction object lacks a valid payment intent identification string.");

      // 2. Build the optimized update payload matching only your specified database table columns
      const updatePayload = {
        status: 'Paid',
        email: customerEmail.trim(),
        stripe_payment_id: liveStripePaymentId,
        collected_payload_metadata: {
          ...existingOrder.collected_payload_metadata, // Safely preserves the user's custom form inputs
          stripe_event_id: stripeEvent.id,
          stripe_object_id: sessionObj.id,
          stripe_payment_intent: liveStripePaymentId,
          processed_at: new Date().toISOString()
        },
        updated_at: new Date().toISOString()
      };

      // 3. Commit the row updates directly using your unique tracking constraint parameter
      const { error: orderError } = await supabaseAdmin
        .from('orders')
        .update(updatePayload)
        .eq('tracking_number', metadata.tracking_number);

      if (orderError) throw orderError;
      console.log(`✅ [Stripe Webhook] Order [${metadata.tracking_number}] successfully updated to Paid.`);

      // 4. AUTOMATIC NOTIFICATION GENERATOR ALIGNED WITH YOUR PORTAL SCHEMAS
      if (existingOrder.user_id) {
        const alertPayload = {
          user_id: existingOrder.user_id,
          title: "New Purchase Authenticated",
          message: `Your tracking order ${metadata.tracking_number} has been processed into our administrative fulfillment lane. Check your timeline for live trace metrics updates.`,
          is_read: false,
          is_archived: false,
          recipient_email: customerEmail,
          created_at: new Date().toISOString()
        };

        const { error: notificationError } = await supabaseAdmin
          .from('portal_notifications')
          .insert([alertPayload]);

        if (notificationError) {
          console.warn("⚠️ [Stripe Webhook] Could not push notification log row:", notificationError.message);
        } else {
          console.log("🔔 [Stripe Webhook] Automated client dashboard notification logged successfully.");
        }
      }
    } catch (err) {
      console.error("✕ [Stripe Webhook Execution Exception Caught]:", err.message || err);
    }
  }
}



// ============================================================================ //
// step-6.js - UNIFIED TRANSACTION AUTHORIZATION PIPELINE ENGINE               //
// ============================================================================ //

/**
 * Requests a secure Payment Intent authorization token from the production Edge Function gateway.
 * @param {number} grandTotalAmount - The running wizard balance tracking value.
 * @param {string} trackingNumberToken - The distinct hash id reference for public.orders.
 * @returns {Promise<string|null>} Resolves the client secret string or null on network failures.
 */
async function resolveStripeClientAuthorizationSecret(grandTotalAmount, trackingNumberToken) {
  "use strict";
  try {
    console.log("[Stripe Loader] Requesting secure Payment Intent token from live production Edge Function...");
    
    // Corrected target path route leading to your specialized edge microservice deployment domain
    const productionUrlGateway = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-checkout';
    
    const response = await fetch(productionUrlGateway, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        amountValue: grandTotalAmount, 
        trackingNumber: trackingNumberToken 
      })
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      throw new Error(errorPayload.error || "Edge Function rejected credentials generation lookups.");
    }

    const data = await response.json();
    window.stripeClientSecret = data.clientSecret;

    // Fulfill the stripe_payment_id table requirement down your runtime tracking structures
    if (data.paymentIntentId && window.currentOrderCorePayload) {
      window.currentOrderCorePayload.stripe_payment_id = data.paymentIntentId;
    }

    return window.stripeClientSecret;
  } catch (err) {
    console.error("✕ [Stripe Loader Critical Endpoint Failure]:", err.message || err);
    throw err; // Fail-fast compilation check
  }
}

// Unified transmission pipeline submission engine handler
window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event) {
  "use strict";
  if (event && typeof event.preventDefault === "function") event.preventDefault();

  const submitBtn = document.getElementById("wizardSubmitBtnElement");
  const errorBanner = document.getElementById("step6-error-banner-target");
  
  const emailInput = document.getElementById("portal_user_email_input");
  const firstNameInput = document.getElementById("portal_user_first_name");
  const lastNameInput = document.getElementById("portal_user_last_name");
  const phoneInput = document.getElementById("portal_user_phone");
  const fieldsArray = [emailInput, firstNameInput, lastNameInput, phoneInput];
  
  let validationHasFailed = false;

  // Clear previous field error states
  fieldsArray.forEach(input => {
    if (input) input.classList.remove("field-error-shake");
  });

  // Run empty validation checks
  fieldsArray.forEach(input => {
    if (input && input.value.trim() === "") {
      validationHasFailed = true;
      input.classList.add("field-error-shake");
    }
  });

  if (validationHasFailed) {
    const firstEmpty = fieldsArray.find(i => i && i.value.trim() === "");
    if (firstEmpty) firstEmpty.focus();
    return false;
  }
  try {
    const finalEmail = emailInput.value.trim().toLowerCase();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phone = phoneInput.value.trim();

    // Extract total fees dynamically without fallback defaults
    const rawTextTotal = document.getElementById("payment-gateway-total-display")?.textContent || "";
    const activeGrandCost = parseFloat(rawTextTotal.replace(/[^0-9.]/g, ""));
    
    if (isNaN(activeGrandCost) || activeGrandCost <= 0) {
      throw new Error("Unable to authorize ledger funds: Payment calculation total is uninitialized.");
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...';
    }

    // TARGETED DOM EXTRACTION: Read straight from the locked layout fields populated on screen
    const companyNameParameter = document.getElementById("schema_orders_company_name")?.value || "";
    const serviceSlug = document.getElementById("schema_orders_service_key")?.value || "";
    const dynamicLabelTextString = document.getElementById("schema_orders_service_title")?.value || "";
    const activePlanKeyString = document.getElementById("schema_orders_plan_tier")?.value || "";
    const uniqueTrackingToken = document.getElementById("schema_orders_tracking_number")?.value || "";

    const poaSignatureParameter = localStorage.getItem("wizard_field_poa_signature_string") || window.currentOrderCorePayload?.poa_signature_verification_string || "";

    // STRICT ENTERPRISE SCHEMA CHECKS: Assert values exist to satisfy database constraints
    if (!companyNameParameter || companyNameParameter.trim() === "") throw new Error("Validation aborted: Company Name mapping parameters are completely blank.");
    if (!serviceSlug || serviceSlug.trim() === "") throw new Error("Validation aborted: Service alignment parameter tokens are missing.");
    if (!dynamicLabelTextString || dynamicLabelTextString.trim() === "") throw new Error("Validation aborted: Service title parameter tokens are missing.");
    if (!activePlanKeyString || activePlanKeyString.trim() === "") throw new Error("Validation aborted: Selected plan tier identifier variables are unassigned.");
    if (!uniqueTrackingToken || uniqueTrackingToken.trim() === "" || uniqueTrackingToken === "F4U-PENDING") throw new Error("Validation aborted: Active tracking session token identifier is unassigned.");
    if (!poaSignatureParameter || poaSignatureParameter.trim() === "") throw new Error("Validation aborted: Power of Attorney verification signatures are unpopulated.");

    // Execute the secure token handshake before processing down to DB/Stripe layers
    const verifiedSecretToken = await resolveStripeClientAuthorizationSecret(activeGrandCost, uniqueTrackingToken);
    if (!verifiedSecretToken) {
      throw new Error("Secure payment token handshake failed. Authentication authorization missing.");
    }

    const supabaseClient = window.supabaseInstance || window.supabaseClient;
    let dynamicUserId = null;
    if (supabaseClient && supabaseClient.auth) {
      const activeUser = (await supabaseClient.auth.getUser())?.data?.user;
      if (activeUser) dynamicUserId = activeUser.id;
    }

    if (!dynamicUserId) {
      dynamicUserId = window.currentOrderCorePayload?.user_id || localStorage.getItem("wizard_user_id") || "00000000-0000-0000-0000-000000000000";
    }
    // A. DATA PRESERVATION: Pre-save your required columns into your database as 'pending'
    if (supabaseClient) {
      const validatedDatabaseUpsertPayload = {
        tracking_number: uniqueTrackingToken.trim(),
        company_name: companyNameParameter.trim(),
        service_key: serviceSlug.trim().toLowerCase(),
        service_title: dynamicLabelTextString.trim(),
        plan_tier: activePlanKeyString.trim().toLowerCase(),
        total_fee: parseFloat(activeGrandCost.toFixed(2)),
        status: 'pending',
        tax_id_status: 'Fulfillment Lane',
        poa_signed_state: localStorage.getItem("wizard_field_poa_accepted") === "true",
        user_id: dynamicUserId,
        email: finalEmail,
        poa_signature_verification_string: poaSignatureParameter.trim(),
        stripe_payment_id: window.currentOrderCorePayload?.stripe_payment_id || "intent_token_pending",
        collected_payload_metadata: {
          customer_email: finalEmail,
          customer_first_name: firstName,
          customer_last_name: lastName,
          customer_phone: phone
        }
      };

      const { error: dbUpsertError } = await supabaseClient
        .from('orders')
        .upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' });

      if (dbUpsertError) throw new Error(`Pre-Sync Failed: ${dbUpsertError.message}`);
    }

    // B. STRIPE PAYMENT INTENT CONFIRMATION PASS
    if (window.stripeElementsContainer && window.stripeInstance && window.stripeClientSecret) {
      console.log("[Stripe Controller] Submitting payment components schema context...");
      const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
      if (stripeSubmitError) throw stripeSubmitError;

      console.log("[Stripe Controller] Launching native billing confirmation challenge over network...");
      const { error: confirmError } = await window.stripeInstance.confirmPayment({
        elements: window.stripeElementsContainer,
        clientSecret: window.stripeClientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`,
          receipt_email: finalEmail,
          billing_details: {
            email: finalEmail,
            name: `${firstName} ${lastName}`.trim(),
            phone: phone
          }
        }
      });
      if (confirmError) throw confirmError;
    } else {
      throw new Error("Stripe components uninitialized: Gateway configuration tokens missing from memory context.");
    }
  } catch (checkoutError) {
    console.error("[Fatal Payment Intercept Catch]", checkoutError);
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError}`;
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
    }
  }
};

