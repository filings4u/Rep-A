// ============================================================================ //
// step-6.js - PART 1: VISUAL CONTAINER & INPUT MATRIX (SUPABASE SERVERLESS)     //
// ============================================================================ //
(function() {
  "use strict";

  const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4i0dNjSlvyScX676lZwB34Lby8nEuv0sRorwo6kGYKkTJYiTyPQA6PVjzwUSjB9Kz90LdHtCh2E1BTMMEkTX00HCLPKUkf';
  window.stripeInstance = window.stripeInstance || null;
  window.stripeElementsContainer = window.stripeElementsContainer || null;
  window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

  async function initializeFlatStripeCheckoutElement() {
    console.log("[Stripe Loader] Initiating payment elements accordion layout...");
    const baseContainer = document.getElementById("step-6-injection-placeholder");
    if (!baseContainer) {
      console.error("[Stripe Loader] Execution halted. Selector '#step-6-injection-placeholder' not found in DOM.");
      return;
    }
    if (typeof Stripe === "undefined") {
      baseContainer.innerHTML = "<p style='color: red; font-size: 0.85rem; font-weight: 600;'>Payment system offline. Please refresh.</p>";
      return;
    }
    try {
      if (!window.stripeInstance) {
        window.stripeInstance = Stripe(ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY);
      }
      const currentGrandTotal = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total") || 0);
      const extractedCompanyName = window.wizardCompanyName || localStorage.getItem("f4u_company_name") || "";
      const extractedServiceKey = window.wizardServiceKey || localStorage.getItem("f4u_service_key") || "";
      const extractedServiceTitle = window.wizardServiceTitle || localStorage.getItem("f4u_service_title") || "";
      const extractedPlanTier = window.wizardPlanTier || localStorage.getItem("f4u_plan_tier") || "starter";

      if (isNaN(currentGrandTotal) || currentGrandTotal <= 0) {
        console.warn("[Stripe Loader] Calculation parameters missing. Refreshing running values...");
        baseContainer.innerHTML = "<p style='color: #475569; font-size: 0.85rem;'>Calculating final statement values... Please wait a moment.</p>";
        setTimeout(initializeFlatStripeCheckoutElement, 300);
        return;
      }

      baseContainer.innerHTML = `
        <div class="step-header-container" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; clear: both; width: 100%; box-sizing: border-box; text-align: left;">
          <div style="text-align: left;">
            <h2 class="step-main-title" style="margin: 0 0 4px 0; color: #0a1f44; font-weight: 800; font-size: 1.35rem;">Secure Checkout</h2>
            <p class="step-subtitle" style="color: #64748b; font-size: 0.88rem; margin: 0;">Authorize your compliance filing package payment below.</p>
          </div>
          <div style="text-align: right; background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 6px;">
            <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #64748b; display: block; letter-spacing: 0.05em;">Total Due:</span>
            <span id="payment-gateway-total-display" style="font-size: 1.5rem; font-weight: 800; color: #10b981; font-family: monospace;">$${currentGrandTotal.toFixed(2)}</span>
          </div>
        </div>
        <div class="integrated-profile-matrix" style="margin-bottom: 20px; box-sizing: border-box; text-align: left; width: 100%; display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;">
            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
              <label for="portal_user_first_name" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">First Name</label>
              <input type="text" id="portal_user_first_name" required placeholder="John" style="width: 100%; padding: 14px 16px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
              <label for="portal_user_last_name" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Last Name</label>
              <input type="text" id="portal_user_last_name" required placeholder="Doe" style="width: 100%; padding: 14px 16px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
            </div>
          </div>
          <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;">
            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
              <label for="portal_user_email_input" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Account Email Address</label>
              <div style="position: relative; display: flex; align-items: center; width: 100%;">
                <span style="position: absolute; left: 16px; color: #64748b; font-size: 0.9rem;"><i class="fa-solid fa-envelope"></i></span>
                <input type="email" id="portal_user_email_input" required placeholder="you@example.com" style="width: 100%; padding: 14px 16px 14px 44px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
              <label for="portal_user_phone" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Contact Phone Number</label>
              <div style="position: relative; display: flex; align-items: center; width: 100%;">
                <span style="position: absolute; left: 16px; color: #64748b; font-size: 0.9rem;"><i class="fa-solid fa-phone"></i></span>
                <input type="tel" id="portal_user_phone" required placeholder="(555) 000-0000" style="width: 100%; padding: 14px 16px 14px 44px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
              </div>
            </div>
          </div>
        </div>
        <style>
          .field-error-shake { border-color: #ef4444 !important; box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15) !important; animation: inlineFieldShake 0.4s ease-in-out; }
          .field-validated-emerald { border-color: #10b981 !important; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1) !important; }
          @keyframes inlineFieldShake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }
          @media (max-width: 480px) { .integrated-profile-matrix > div { flex-direction: column !important; gap: 16px !important; } }
        </style>
        <div id="stripe-payment-element-mount-point" style="min-height: 200px; margin-bottom: 24px; clear: both; width: 100%;"></div>
        <div id="step6-error-banner-target" style="display: none; color: #ef4444; background: #fef2f2; border: 1px solid #fee2e2; padding: 12px; border-radius: 6px; font-size: 0.85rem; margin-bottom: 24px; font-weight: 500; text-align: left; clear: both;"></div>
        <div class="wizard-action-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box; clear: both;">
          <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 500; cursor: pointer;">Back</button>
          <button type="button" id="wizardSubmitBtnElement" style="background: #047857; border: none; color: white; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer;">Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i></button>
        </div>
      `;

      // Absolute data-mapping initialization matching public.orders table constraints perfectly
      window.currentOrderCorePayload = {
        company_name: extractedCompanyName,
        service_key: extractedServiceKey,
        service_title: extractedServiceTitle,
        plan_tier: extractedPlanTier,
        total_fee: currentGrandTotal,
        status: "payment_pending",
        tax_id_status: "pending",
        poa_signed_state: false,
        poa_signature_verification_string: "pending"
      };
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
          variables: { colorPrimary: '#0a1f44', colorBackground: '#ffffff', colorText: '#0a1f44', colorTextPlaceholder: '#94a3b8', borderRadius: '6px', spacingGridRow: '16px' },
          rules: {
            '.Input': { padding: '14px 16px', fontSize: '15px', transition: 'all 0.2s ease-in-out', border: '1px solid #e2e8f0', boxShadow: 'none' },
            '.Input:focus': { borderColor: '#10b981', boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)' },
            '.Input--invalid': { borderColor: '#ef4444', boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.15)' },
            '.Label': { fontWeight: '700', fontSize: '13px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }
          }
        }
      });

      window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', {
        layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: true }
      });

      window.stripePaymentElementInstance.on("loaderror", function(loadEvent) {
        console.error("✕ [Stripe Framework Load Error Intercepted]:", loadEvent.error);
        const mountPointContainer = document.getElementById("stripe-payment-element-mount-point");
        if (mountPointContainer) {
          mountPointContainer.innerHTML = `
            <div style="background: #fff1f2; border: 1px solid #fecdd3; border-left: 4px solid #e11d48; padding: 16px; border-radius: 6px; text-align: left; margin: 10px 0;">
              <strong style="color: #9f1239; font-size: 0.9rem; display: block; margin-bottom: 4px;"><i class="fa-solid fa-triangle-exclamation"></i> Payment Gateway Authentication Failed (401)</strong>
              <p style="margin: 0; color: #4c0519; font-size: 0.82rem; line-height: 1.4;">The provided Stripe publishable API key is invalid or has been revoked. Please check your developer dashboard credentials to restore live billing connections.</p>
            </div>
          `;
        }
      });

      window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point');
    } catch (error) {
      console.error("[Stripe Structural Failure]", error);
      const errorBanner = document.getElementById("step6-error-banner-target");
      if (errorBanner) {
        errorBanner.innerText = "Critical Initialization Error. Unable to load interface components.";
        errorBanner.style.display = "block";
      }
    }
  }
  window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;

  if (parseInt(window.currentWizardActiveStep, 10) === 6) {
    initializeFlatStripeCheckoutElement();
  }
  function validateBaseProfileMatrix() {
    let textFieldsValid = true;
    const standardFormInputs = [ "portal_user_first_name", "portal_user_last_name", "portal_user_email_input", "portal_user_phone" ];
    standardFormInputs.forEach(inputSelector => {
      const inputTarget = document.getElementById(inputSelector);
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

  const masterSubmitActionBtn = document.getElementById("wizardSubmitBtnElement");
  if (masterSubmitActionBtn) {
    masterSubmitActionBtn.addEventListener("click", async (clickEvent) => {
      clickEvent.preventDefault();
      const errorBanner = document.getElementById("step6-error-banner-target");
      if (errorBanner) errorBanner.style.display = "none";
      if (!validateBaseProfileMatrix()) {
        console.warn("[Stripe Validator] Halting submission. Required field structures are missing values.");
        if (errorBanner) {
          errorBanner.innerText = "Please complete all required contact fields before processing payment.";
          errorBanner.style.display = "block";
        }
        return;
      }
      masterSubmitActionBtn.disabled = true;
      masterSubmitActionBtn.style.opacity = "0.6";
      masterSubmitActionBtn.innerHTML = `Processing Transaction <i class="fa-solid fa-spinner fa-spin" style="margin-left: 6px;"></i>`;
      try {
        console.log("[Stripe Controller] Compiling fields for explicit Supabase schema conversion...");
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
        if (typeof window.executeSecurePaymentConfirmationPipeline === "function") {
          await window.executeSecurePaymentConfirmationPipeline(currentGrandTotal, masterSubmitActionBtn);
        } else {
          throw new Error("Target transaction pipeline reference is uninitialized.");
        }
      } catch (pipelineException) {
        console.error("[Stripe Runtime Failure]", pipelineException);
        if (errorBanner) {
          errorBanner.innerText = pipelineException.message || "An unexpected processing error occurred.";
          errorBanner.style.display = "block";
        }
        masterSubmitActionBtn.disabled = false;
        masterSubmitActionBtn.style.opacity = "1";
        masterSubmitActionBtn.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`;
      }
    });
  }

  ["portal_user_first_name", "portal_user_last_name", "portal_user_email_input", "portal_user_phone"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", function() {
      this.classList.remove("field-error-shake");
    });
  });

})(); // <--- FIXED: Safely closes the top-level self-executing function block perfectly!



window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  const errorBanner = document.getElementById("step6-error-banner-target");
  const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

  // Strict enterprise profile attribute construction mapping directly to your public.orders schema
  const profileTransactionPayload = {
    company_name: window.currentOrderCorePayload?.company_name || localStorage.getItem("f4u_company_name") || "",
    service_key: window.currentOrderCorePayload?.service_key || localStorage.getItem("f4u_service_key") || "",
    service_title: window.currentOrderCorePayload?.service_title || localStorage.getItem("f4u_service_title") || "",
    plan_tier: window.currentOrderCorePayload?.plan_tier || localStorage.getItem("f4u_plan_tier") || "starter",
    total_fee: finalAmountDue,
    email: document.getElementById("portal_user_email_input")?.value.trim() || "",
    tracking_number: uniqueTrackingToken,
    
    // Explicit direct mapping for missing NOT NULL schema constraint fields
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
  window.stripeClientSecret = completedTransactionIntentJSON.clientSecret;

  // Mapping Stripe's programmatic transaction reference back to public.orders.stripe_payment_id schema path
  if (completedTransactionIntentJSON.paymentIntentId) {
    window.currentOrderCorePayload = window.currentOrderCorePayload || {};
    window.currentOrderCorePayload.stripe_payment_id = completedTransactionIntentJSON.paymentIntentId;
    profileTransactionPayload.stripe_payment_id = completedTransactionIntentJSON.paymentIntentId;
  } else {
    throw new Error("[Enterprise Critical Error] Supabase Edge Function response omitted mandatory paymentIntentId structural reference.");
  }

  if (!window.stripeClientSecret) {
    throw new Error("Critical structural mismatch. Transaction token identifier was omitted by the Supabase Edge Function.");
  }
  console.log("[Supabase Gateway] Handshake complete. Verification token cached. Launching standard Stripe runtime handler...");

  const StripeConfirmationResult = await window.stripeInstance.confirmPayment({
    elements: window.stripeElementsContainer,
    clientSecret: window.stripeClientSecret,
    confirmParams: {
      return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`,
      receipt_email: profileTransactionPayload.email,
      billing_details: {
        name: `${profileTransactionPayload.collected_payload_metadata.first_name} ${profileTransactionPayload.collected_payload_metadata.last_name}`.trim(),
        email: profileTransactionPayload.email,
        phone: profileTransactionPayload.collected_payload_metadata.phone
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
    const productionCloudUrl = 'https' + '://' + 'lrbimrlbskjweynxlgas' + '.supabase' + '.co' + '/functions' + '/v1' + '/stripe-checkout';
    
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
// step-6.js - SECTION 5: DATA PRESERVATION & STRIPE INTENT TRANSMISSION       //
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
  
  const rawTotalText = document.getElementById("payment-gateway-total-display")?.textContent || "";
  const activeGrandCost = parseFloat(rawTotalText.replace(/[^0-9.]/g, "")) || finalAmountDue || 249.00;
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

  try {
    if (supabaseClient) {
      console.log("[Gatekeeper] Preserving pre-flight record token traces within database...");
      
      let dynamicUserId = null;
      let userEmailFallback = finalEmail;

      const activeUser = window.activeClientSessionUser || (supabaseClient.auth ? (await supabaseClient.auth.getUser())?.data?.user : null);
      if (activeUser) {
        dynamicUserId = activeUser.id;
        userEmailFallback = activeUser.email || finalEmail;
      }

      // STRICT ENTERPRISE SCHEMA ASSERTION: If user_id cannot be found, look up an active session state property.
      // If it evaluates to null, throw an explicit error instantly rather than violating public.orders.user_id not null constraints.
      if (!dynamicUserId) {
        dynamicUserId = window.currentOrderCorePayload?.user_id || localStorage.getItem("wizard_user_id");
        if (!dynamicUserId) {
          throw new Error("[Enterprise Critical Error] Mapping failed for required database column: orders.user_id cannot be NULL.");
        }
      }

      if (!poaSignatureString || poaSignatureString.trim() === "") {
        throw new Error("[Enterprise Critical Error] Mapping failed for required database column: orders.poa_signature_verification_string cannot be blank or NULL.");
      }

      const validatedDatabaseUpsertPayload = {
        tracking_number: uniqueTrackingToken,
        company_name: localStorage.getItem("wizard_field_company_name") || window.currentOrderCorePayload?.company_name || "Your Corporate Entity Profile",
        service_key: serviceSlug,
        service_title: dynamicLabelTextString,
        plan_tier: activePlanKeyString,
        total_fee: parseFloat(activeGrandCost.toFixed(2)),
        status: 'pending',
        tax_id_status: 'Fulfillment Lane',
        poa_signed_state: isPoaSigned,
        user_id: dynamicUserId,
        email: userEmailFallback || finalEmail,
        poa_signature_verification_string: poaSignatureString,
        collected_payload_metadata: {
          customer_email: finalEmail,
          wiz_client_email: finalEmail,
          customer_first_name: firstName,
          customer_last_name: lastName,
          customer_phone: phone,
          is_returning_customer: isReturningUser || false,
          wiz_generated_passcode: "A7x9_SecurePass",
          authenticated_user_id: dynamicUserId
        }
      };

      const { error: dbUpsertError } = await supabaseClient
        .from('orders')
        .upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' });

      if (dbUpsertError) {
        throw new Error(`[Enterprise Critical Error] Database upsert transaction rejected by Supabase engine: ${dbUpsertError.message}`);
      }
    }
    // 4. Execute Stripe checkout submission routine loops
    if (window.stripeElementsContainer) {
      const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
      if (stripeSubmitError) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = "1";
          submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
        }
        if (errorBanner) {
          errorBanner.style.display = "block";
          errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> ${stripeSubmitError.message}`;
        }
        return false;
      }

      const isMockSecret = String(window.stripeClientSecret || "").startsWith("pi_mock_intent_");
      
      if (window.stripeInstance && !isMockSecret) {
        console.log("[Stripe Submission Engine] Dispatching secure transactional token parameters over the network...");
        
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

      } else if (isMockSecret && supabaseClient) {
        console.log("🧪 [Sandbox Engine] Mock intent matched. Forcing manual database synchronization...");
        
        const { error: mockUpdateError } = await supabaseClient
          .from('orders')
          .update({ status: 'Paid' })
          .eq('tracking_number', uniqueTrackingToken);

        if (mockUpdateError) {
          throw new Error(`[Sandbox Failure] Failed to synchronize mock billing transition inside public.orders table: ${mockUpdateError.message}`);
        } else {
          console.log("✅ Sandbox Sync Complete: Test transaction record marked as Paid.");
        }
      }
    } else {
      throw new Error("Checkout components missing: The payment gateway elements were not mounted correctly.");
    }

    // 5. Route wizard layout layers forward to complete the transaction loop
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
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
      submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
    }
  }
};


/**
 * 📁 STRIPE WEBHOOK CONTROLLER CHANNEL (PRODUCTION HARDENED ROUTER)
 * Responsibility: Listens for successful checkouts, handles safe array map fallbacks,
 * populates required root-level columns, and triggers downstream portal notifications.
 */
async function handleStripeWebhookEvent(stripeEvent, supabaseAdmin) {
  "use strict";

  const eventType = stripeEvent.type;

  // UNIFIED GATEWAY INTERCEPT: Extract values regardless of which success packet arrives first
  if (eventType === 'checkout.session.completed' || eventType === 'payment_intent.succeeded') {
    const sessionObj = stripeEvent.data.object;
    
    // Multi-layered metadata extraction parameter check
    let metadata = sessionObj.metadata || {};
    if (!metadata.tracking_number && sessionObj.payment_intent_parsed_object?.metadata) {
      metadata = sessionObj.payment_intent_parsed_object.metadata;
    }

    // Safety Guard: Abort if it's a random transaction outside your wizard network layout bounds
    if (!metadata.tracking_number || metadata.tracking_number.trim() === "") {
      console.log("ℹ️ [Stripe Webhook] Skipping event: Object does not contain a tracking_number token.");
      return;
    }

    console.log(`📡 [Stripe Webhook] Processing event [${eventType}] for Tracking Token: ${metadata.tracking_number}`);

    try {
      // Resolve the client email dynamically from Stripe's payload or custom metadata
      let customerEmail = metadata.email || sessionObj.receipt_email;
      if (!customerEmail && sessionObj.customer_details) {
        customerEmail = sessionObj.customer_details.email;
      }
      if (!customerEmail && sessionObj.billing_details) {
        customerEmail = sessionObj.billing_details.email;
      }

      // Hardened type casting validation variables to prevent database type exceptions
      const rawAmount = sessionObj.amount_total || sessionObj.amount || 0;
      const castedFee = parseFloat(metadata.total_fee) || parseFloat(rawAmount / 100);
      const castedPoaState = metadata.poa_signed_state === 'true' || metadata.poa_signed_state === true;

      // Extract programmatic transaction references to fulfill the orders.stripe_payment_id column requirement
      const liveStripePaymentId = sessionObj.payment_intent || sessionObj.id;

      // STRICT SCHEMA ENFORCEMENT: Validate that all required NOT NULL keys exist. No placeholder fallbacks allowed.
      if (!metadata.company_name || metadata.company_name.trim() === "") throw new Error("Metadata field 'company_name' is missing or blank.");
      if (!metadata.service_key || metadata.service_key.trim() === "") throw new Error("Metadata field 'service_key' is missing or blank.");
      if (!metadata.service_title || metadata.service_title.trim() === "") throw new Error("Metadata field 'service_title' is missing or blank.");
      if (!metadata.plan_tier || metadata.plan_tier.trim() === "") throw new Error("Metadata field 'plan_tier' is missing or blank.");
      if (!customerEmail || customerEmail.trim() === "") throw new Error("Customer checkout email parameter could not be resolved.");
      if (!metadata.poa_signature_verification_string || metadata.poa_signature_verification_string.trim() === "") throw new Error("Metadata field 'poa_signature_verification_string' is missing or blank.");
      if (!metadata.user_id || metadata.user_id.trim() === "") throw new Error("Metadata field 'user_id' is missing or blank.");
      if (!liveStripePaymentId) throw new Error("Stripe transaction object lacks a valid payment intent identification string.");
      // 1. Build the exact row dictionary to fill your required root-level columns with absolute data inputs
      const orderPayload = {
        tracking_number: metadata.tracking_number,
        company_name: metadata.company_name.trim(),
        service_key: metadata.service_key.trim(),
        service_title: metadata.service_title.trim(),
        plan_tier: metadata.plan_tier.trim(),
        total_fee: parseFloat(castedFee.toFixed(2)),
        status: 'Paid',
        tax_id_status: 'Fulfillment Lane',
        poa_signed_state: castedPoaState,
        user_id: metadata.user_id.trim(),
        email: customerEmail.trim(),
        poa_signature_verification_string: metadata.poa_signature_verification_string.trim(),
        stripe_payment_id: liveStripePaymentId,
        collected_payload_metadata: {
          stripe_event_id: stripeEvent.id,
          stripe_object_id: sessionObj.id,
          stripe_payment_intent: liveStripePaymentId,
          customer_email: customerEmail,
          wiz_client_email: customerEmail,
          wiz_generated_passcode: "A7x9_SecurePass",
          processed_at: new Date().toISOString()
        },
        updated_at: new Date().toISOString()
      };

      // 2. Commit the fully-populated row directly into public.orders using upsert matching conflict hashes
      const { data: orderData, error: orderError } = await supabaseAdmin
        .from('orders')
        .upsert(orderPayload, { onConflict: 'tracking_number' })
        .select()
        .maybeSingle();

      if (orderError) throw orderError;
      console.log(`✅ [Stripe Webhook] Order [${metadata.tracking_number}] successfully synchronized inside public.orders.`);

      // 3. AUTOMATIC NOTIFICATION GENERATOR ALIGNED WITH YOUR PORTAL SCHEMAS
      if (metadata.user_id) {
        const alertPayload = {
          user_id: metadata.user_id,
          title: metadata.notification_title || "New Purchase Authenticated",
          message: metadata.notification_message || `Your tracking order ${metadata.tracking_number} has been processed into our administrative fulfillment lane. Check your timeline for live trace metrics updates.`,
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
    const productionUrlGateway = 'https' + '://' + 'lrbimrlbskjweynxlgas' + '.supabase' + '.co' + '/functions' + '/v1' + '/stripe-checkout';
    
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

    let uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...';
    }

    // Resolve parameter context matching your window scope parameters
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim();
    const activePlanKeyString = String(urlParams.get('plan') || window.routeActivePlanKey || "").toLowerCase().trim();
    const dynamicLabelTextString = `Processing Fee (${activePlanKeyString.toUpperCase()})`;

    const companyNameParameter = localStorage.getItem("wizard_field_company_name") || window.currentOrderCorePayload?.company_name || "";
    const poaSignatureParameter = localStorage.getItem("wizard_field_poa_signature_string") || window.currentOrderCorePayload?.poa_signature_verification_string || "";

    // STRICT ENTERPRISE SCHEMA CHECKS: Assert values exist to satisfy database constraints
    if (!companyNameParameter || companyNameParameter.trim() === "") throw new Error("Validation aborted: Company Name mapping parameters are completely blank.");
    if (!serviceSlug || serviceSlug.trim() === "") throw new Error("Validation aborted: Service alignment parameter tokens are missing.");
    if (!activePlanKeyString || activePlanKeyString.trim() === "") throw new Error("Validation aborted: Selected plan tier identifier variables are unassigned.");
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
        tracking_number: uniqueTrackingToken,
        company_name: companyNameParameter.trim(),
        service_key: serviceSlug.trim(),
        service_title: dynamicLabelTextString.trim(),
        plan_tier: activePlanKeyString.trim(),
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
