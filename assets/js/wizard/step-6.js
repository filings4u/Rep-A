// step-6.js
(function() {
  // ==========================================
  // BLOCK 1: INITIAL VARIABLE SET & GLOBAL MEMORY
  // ==========================================
  const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE';
  
  window.stripeInstance = window.stripeInstance || null;
  window.stripeElementsContainer = window.stripeElementsContainer || null;
  window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

  // ==========================================
  // BLOCK 2: TARGET DOM SAFETY GUARD
  // ==========================================
  async function initializeFlatStripeCheckoutElement() {
    console.log("[Stripe Loader] Initiating payment elements accordion layout...");
    const baseContainer = document.getElementById("step-6-injection-placeholder");
    if (!baseContainer) return;
    
    if (typeof Stripe === "undefined") {
      baseContainer.innerHTML = "<p style='color: red; font-size: 0.85rem; font-weight: 600;'>Payment system offline. Please refresh.</p>";
      return;
    }

    try {
      if (!window.stripeInstance) {
        window.stripeInstance = Stripe(ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY);
      }
      
      const currentGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 249.00;

      // ==========================================
      // BLOCK 3: HTML VIEW GENERATION TEMPLATE
      // ==========================================
      baseContainer.innerHTML = `
        <div class="step-header-container" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; clear: both; width: 100%; box-sizing: border-box;">
          <div style="text-align: left;">
            <h2 class="step-main-title" style="margin: 0 0 4px 0; color: #0a1f44; font-weight: 800; font-size: 1.35rem;">Secure Checkout</h2>
            <p class="step-subtitle" style="color: #64748b; font-size: 0.88rem; margin: 0;">Authorize your compliance filing package payment below.</p>
          </div>
          <div style="text-align: right; background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 6px;">
            <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #64748b; display: block; letter-spacing: 0.05em;">Total Due:</span>
            <span id="payment-gateway-total-display" style="font-size: 1.5rem; font-weight: 800; color: #10b981; font-family: monospace;">$${currentGrandTotal.toFixed(2)}</span>
          </div>
        </div>
        <div id="stripe-payment-element-mount-point" style="min-height: 200px; margin-bottom: 24px; clear: both; width: 100%;"></div>
        <div id="step6-error-banner-target" style="display: none; color: #ef4444; background: #fef2f2; border: 1px solid #fee2e2; padding: 12px; border-radius: 6px; font-size: 0.85rem; margin-bottom: 24px; font-weight: 500; text-align: left; clear: both;"></div>
        <div class="wizard-action-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box; clear: both;">
          <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center;">
            <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Back to PoA
          </button>
          <button id="wizard-next-trigger-btn" type="button" class="btn-wizard-main btn-wizard-nav-next" onclick="if(typeof window.executeOnboardingTransactionPayloadSubmitVanilla === 'function') { window.executeOnboardingTransactionPayloadSubmitVanilla(event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.2); display: inline-flex; align-items: center;">
            Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>
          </button>
        </div>
      `;

      if (window.stripePaymentElementInstance) {
        window.stripePaymentElementInstance.destroy();
        window.stripePaymentElementInstance = null;
      }

      // ==========================================
      // BLOCK 4: STRIPE PAYMENT CONTEXT SPECIFICATION (FIXED)
      // ==========================================
      window.stripeElementsContainer = window.stripeInstance.elements({
        mode: 'payment', // Fixed: Changed from 'setup' to 'payment' to process actual captures
        amount: Math.round(currentGrandTotal * 100), // Converted float to integer cents
        currency: 'usd',
        appearance: {
          theme: 'stripe',
          variables: { colorPrimary: '#0a1f44', colorBackground: '#ffffff', colorText: '#0a1f44', borderRadius: '6px', spacingGridRow: '16px' }
        }
      });

      // ==========================================
      // BLOCK 5: DOM ELEMENT MOUNT & INPUT MONITORING
      // ==========================================
      window.stripePaymentElementInstance = window.stripeElementsContainer.create("payment", {
        layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: true }
      });
      window.stripePaymentElementInstance.mount("#stripe-payment-element-mount-point");
      console.log("[Stripe Success] Secure payment elements accordion successfully attached.");

      window.stripePaymentElementInstance.on("change", function(event) {
        const errorDisplayNode = document.getElementById("step6-error-banner-target");
        if (errorDisplayNode) {
          if (event.error) {
            errorDisplayNode.style.display = "block";
            errorDisplayNode.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${event.error.message}`;
          } else {
            errorDisplayNode.style.display = "none";
            errorDisplayNode.innerHTML = "";
          }
        }
      });

    } catch (mountError) {
      console.error(mountError);
    }
  }

  // ==========================================
  // BLOCK 6: SUPABASE PIPELINE SUBMISSION AND PAYMENT COMPLETION (NEW)
  // ==========================================
  async function executeOnboardingTransactionPayloadSubmitVanilla(event) {
    if (event) event.preventDefault();

    const submitButton = document.getElementById("wizard-next-trigger-btn");
    const errorDisplayNode = document.getElementById("step6-error-banner-target");
    if (submitButton) submitButton.disabled = true;

    try {
      // 1. Trigger front-end input fields formatting validation checks
      const { error: submitError } = await window.stripeElementsContainer.submit();
      if (submitError) throw submitError;

      const currentGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 249.00;
      const trackingNo = window.wizardTrackingNumber || "UNKNOWN-TRK";
      
      // Collect your 4 needed database columns from global window state
      const poaState = window.wizardPoaSignedState || "pending";
      const poaSigStr = window.wizardPoaSignatureVerificationString || "";
      const currentUserId = window.wizardCurrentUserId || "";
      const currentUserEmail = window.wizardCurrentUserEmail || "";

      // 2. Post payload parameters to your deployed Supabase Edge Function
      // ⚠️ UPDATE THIS LINK VALUE TO MATCH YOUR EXACT SUPABASE PROJECT ID
      const edgeFunctionUrl = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-checkout';

      const response = await fetch(edgeFunctionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amountValue: currentGrandTotal,
          trackingNumber: trackingNo,
          isTestModeRequested: true, // Forces Deno worker to fetch STRIPE_TEST_SECRET_KEY
          poa_signed_state: poaState,
          poa_signature_verification_string: poaSigStr,
          user_id: currentUserId,
          email: currentUserEmail
        })
      });

      const responseData = await response.json();
      if (!response.ok) throw new Error(responseData.error || "Failed secure handshake token verification with the server.");

      // 3. Complete checkout process and trigger the bank verification challenge overlay
      const { error: confirmError } = await window.stripeInstance.confirmPayment({
        elements: window.stripeElementsContainer,
        clientSecret: responseData.clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/dashboard/payment-success`,
        },
      });

      if (confirmError) throw confirmError;

    } catch (err) {
      console.error("❌ [Checkout Execution Error]:", err.message);
      if (errorDisplayNode) {
        errorDisplayNode.style.display = "block";
        errorDisplayNode.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${err.message}`;
      }
      if (submitButton) submitButton.disabled = false;
    }
  }

  // Bind functions cleanly back onto global window framework runtime
  window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;
  window.executeOnboardingTransactionPayloadSubmitVanilla = executeOnboardingTransactionPayloadSubmitVanilla;

  if (parseInt(window.currentWizardActiveStep, 10) === 6) {
    initializeFlatStripeCheckoutElement();
  }
})();



// ============================================================================ // 
// 💳 TRANSACTION PIPELINE SUBMISSION ENGINE (STRIPE-CONFIRM ARCHITECTURE)      // 
// ============================================================================ // 
window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event) { 
  if (event && typeof event.preventDefault === "function") event.preventDefault(); 
  
  const submitBtn = document.getElementById("wizard-next-trigger-btn"); 
  const errorBanner = document.getElementById("step6-error-banner-target"); 
  const step6Panel = document.getElementById("step-panel-6"); 
  
  if (errorBanner) { 
    errorBanner.style.display = "none"; 
    errorBanner.innerHTML = ""; 
  } 

  try { 
    // 1. INLINE CHECKOUT INPUT FIELD VALIDATOR SCAN 
    let emptyFieldFound = null; 
    if (step6Panel) { 
      const inlineInputs = step6Panel.querySelectorAll("input:not([type='hidden']), select, textarea"); 
      inlineInputs.forEach(field => { 
        if (field.closest('.StripeElement') || field.closest("[id*='stripe']") || field.closest("[id*='payment-element']")) return; 
        if (field.hasAttribute("required") && field.value.trim() === "") { 
          if (!emptyFieldFound) emptyFieldFound = field; 
        } 
      }); 
    } 

    if (emptyFieldFound) { 
      emptyFieldFound.focus(); 
      emptyFieldFound.style.borderColor = "#b91c1c"; 
      return false; 
    } 

    // 2. COMPILE PAYLOAD PARAMETERS AND ACCOUNT TRACKING SIGNATURES 
    const finalEmail = (document.getElementById("lead_email") || document.getElementById("portal_user_email") || document.querySelector(".master-onboarding-form input[type='email']"))?.value.trim().toLowerCase() || "guest-checkout@filings4u.com"; 
    const activeGrandCost = parseFloat(document.getElementById("payment-gateway-total-display")?.textContent.replace(/[^0-9.]/g, "")) || 249.00; 
    
    // Generate tracking token
    const uniqueTrackingToken = "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase(); 

    if (submitBtn) { 
      submitBtn.disabled = true; 
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...'; 
    } 

    let isReturningUser = localStorage.getItem("f4u_is_returning_customer") === "true"; 

    // 3. FETCH CLIENT SECRET AND EXECUTE STRIPE ROUTING PAYLOADS
    if (window.stripeElementsContainer && window.stripeInstance) { 
      
      // Step A: Trigger front-end input fields validation inside Stripe iframe frame
      const { error: stripeSubmitError } = await window.stripeElementsContainer.submit(); 
      if (stripeSubmitError) throw stripeSubmitError; 

      // Step B: Resolve your 4 custom tracking rows from memory states
      const poaState = window.wizardPoaSignedState || "pending";
      const poaSignatureStr = window.wizardPoaSignatureVerificationString || "unassigned_verification";
      const currentUserId = window.wizardCurrentUserId || "anonymous_user";
      const currentUserEmail = finalEmail; // Maps clean layout collection target

      console.log("[Stripe Submission Engine] Initializing backend client secret handshake payload...");

      // Step C: Route parameters over into your deployed Supabase Edge Function
      // ⚠️ UPDATE THIS LINK PATH STRING TO MATCH YOUR EXACT PROJECT ID
      const supabaseEdgeUrl = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-checkout';
      
      const response = await fetch(supabaseEdgeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amountValue: activeGrandCost,
          trackingNumber: uniqueTrackingToken,
          isTestModeRequested: true, // Forces Deno script to pick STRIPE_TEST_SECRET_KEY
          poa_signed_state: poaState,
          poa_signature_verification_string: poaSignatureStr,
          user_id: currentUserId,
          email: currentUserEmail
        })
      });

      const responseData = await response.json();
      if (!response.ok) throw new Error(responseData.error || "Failed communication handshake link with your checkout edge router.");

      console.log("[Stripe Submission Engine] Directing active payment authorization intent via secure Stripe API..."); 

      // Step D: Invoke full card verification challenge overlay using the received token
      const { error: confirmError } = await window.stripeInstance.confirmPayment({ 
        elements: window.stripeElementsContainer, 
        clientSecret: responseData.clientSecret, 
        confirmParams: { 
          return_url: `${window.location.origin}/wizard.html?step=7&token=${uniqueTrackingToken}&email=${encodeURIComponent(finalEmail)}`, 
          receipt_email: finalEmail 
        }, 
        // Bypasses page reloads if cards do not enforce 3D-Secure prompts
        redirect: "if_required" 
      }); 

      if (confirmError) throw confirmError; 

    } else { 
      throw new Error("Checkout components missing: The payment gateway elements were not mounted correctly."); 
    } 

    // 4. PACK UNIFIED ACCOUNT MANIFEST CONTEXT PASSTHROUGH 
    const checkoutManifestPayload = { 
      transaction_hash_id: uniqueTrackingToken, 
      communications_email: finalEmail, 
      is_returning: isReturningUser, 
      financials_grand_total_charge: activeGrandCost, 
      legal_entity_name: localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile", 
      taxpayer_ein: localStorage.getItem("wizard_field_ein") || "Processing Summary...", 
      office_address_street: localStorage.getItem("wizard_field_principal_address") || "Form Submission Record Entry", 
      selected_package_title: window.routeActivePlanTierName || "Compliance Update Filing Package", 
      financials_subtotal_amount: parseFloat(localStorage.getItem("wizard_field-1-base-fee-value")) || 150.00 
    }; 

    sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(checkoutManifestPayload)); 

    // 5. IN-WIZARD TRANSITION STRAIGHT TO STEP 7 
    if (typeof window.switchWizardActiveViewLayout === "function") { 
      console.log("[Stripe Submission Engine] Payment complete. Transitioning control to step-7.js..."); 
      window.switchWizardActiveViewLayout(7); 
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
      submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
    } 
  } 
};
