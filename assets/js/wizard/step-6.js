(function() { 
"use strict";

// ============================================================================
// 🔵 BLOCK 1: INITIAL VARIABLE SET & GLOBAL MEMORY
// ============================================================================
const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4i0dNjSlvyScX676lZwB34Lby8nEuv0sRorwo6kGYKkTJYiTyPQA6PVjzwUSjB9Kz90LdHtCh2E1BTMMEkTX00HCLPKUkf';

window.stripeInstance = window.stripeInstance || null;
window.stripeElementsContainer = window.stripeElementsContainer || null;
window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

// ============================================================================
// 🔵 BLOCK 2: INPUT VALIDATION & SHAKE INTERCEPT (REPAIRED)
// ============================================================================
window.initializeFlatStripeCheckoutElement = async function() {
  console.log("[Stripe Loader] Initiating payment elements accordion layout...");
  
  const baseContainer = document.getElementById("step-6-injection-placeholder");
  if (!baseContainer) return;
  
  if (typeof Stripe === "undefined") {
    baseContainer.innerHTML = "<p style='color: red; font-size: 0.85rem; font-weight: 600;'>Payment system offline. Please refresh.</p>";
    return;
  }

  // Read active input targets across your layout form elements
  const emailInput = document.getElementById("lead_email") || 
                     document.getElementById("portal_user_email") || 
                     document.querySelector(".master-onboarding-form input[type='email']");
                     
  const finalEmail = emailInput?.value.trim().toLowerCase() || "";

  // STRICT INTERCEPT: If email is missing, trigger shake animation and halt execution
  if (!finalEmail && emailInput) {
    console.warn("[Validation Engine] Email empty. Aborting payment mount and triggering shake alert.");
    
    emailInput.style.transition = "all 0.1s ease";
    emailInput.style.borderColor = "#ef4444";
    emailInput.style.boxShadow = "0 0 0 3px rgba(239, 68, 68, 0.2)";
    
    const shakeSequence = [10, -10, 10, -10, 5, -5, 0];
    let step = 0;
    
    const shakeInterval = setInterval(() => {
      if (step < shakeSequence.length) {
        emailInput.style.transform = `translateX(${shakeSequence[step]}px)`;
        step++;
      } else {
        clearInterval(shakeInterval);
        emailInput.style.transform = "none";
      }
    }, 50);
    
    emailInput.focus();
    
    const errorBanner = document.getElementById("step6-error-banner-target");
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <strong>Information Required:</strong> Please provide a valid email address to complete secure checkout initialization.`;
    }
    return;
  }

  // NOTE: The try/catch block now wraps the payload generation and layout safely
  try {
    const currentGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 0.00;
    const uniqueTrackingToken = window.wizardTrackingNumber || localStorage.getItem("cached_wizard_tracking_number") || "";
    const poaState = window.wizardPoaSignedState || localStorage.getItem("cached_wizard_poa_signed_state") || "";
    const poaSignatureStr = window.wizardPoaSignatureVerificationString || localStorage.getItem("cached_wizard_poa_signature_verification_string") || "";
    const currentUserId = window.wizardCurrentUserId || "";

    // ============================================================================
    // 🔵 BLOCK 3: HTML VIEW GENERATION TEMPLATE (REPAIRED)
    // ============================================================================
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
        <button id="wizard-next-trigger-btn" type="button" class="btn-wizard-main btn-wizard-nav-next" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.2); display: inline-flex; align-items: center;">
          Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>
        </button>
      </div>
    `;

    const submitBtn = document.getElementById("wizard-next-trigger-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Initializing Checkout...';
    }

// ============================================================================
// 🔵 BLOCK 4: HIGH-SPEED PARALLEL API HANDSHAKE & EXPLICIT MOUNT SPINNER
// ============================================================================
console.log("[Stripe Loader] Triggering transitional pipeline lock...");

// 1. Force the centralized spinner elements to remain active, bypassing the 180ms auto-fade decay
const baselineSpinnerOverlay = document.getElementById("f4u-global-transition-overlay");
if (baselineSpinnerOverlay) {
  baselineSpinnerOverlay.style.display = "flex";
  baselineSpinnerOverlay.style.opacity = "1";
  baselineSpinnerOverlay.style.pointerEvents = "auto";
}

if (typeof window.triggerWorkspaceTransitionSpinner === "function") {
  window.triggerWorkspaceTransitionSpinner(async function executeHighSpeedPipeline() {
    try {
      const localSubmitBtn = document.getElementById("wizard-next-trigger-btn");
      
      // 2. PERFORMANCE OPTIMIZATION: Run API Fetch and DB Insert in parallel via Promise hooks
      console.log("[Stripe Loader] Handshaking with edge router and database channels concurrently...");
      
      const routerHandshakePromise = fetch('https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-checkout', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ 
          amountValue: currentGrandTotal, 
          trackingNumber: uniqueTrackingToken, 
          isTestModeRequested: true, 
          poa_signed_state: poaState, 
          poa_signature_verification_string: poaSignatureStr, 
          user_id: (currentUserId && currentUserId !== "anonymous_user" && currentUserId.trim() !== "") ? currentUserId : "", 
          email: finalEmail, 
          company_name: localStorage.getItem("wizard_field_company_name") || "", 
          service_key: window.wizardActiveServiceKeyIdentifier || "", 
          service_title: window.wizardActiveServiceTitleString || "", 
          plan_tier: window.routeActivePlanTierName || "" 
        }) 
      });

      // Prepare database payload skeleton
      const ordersRecordPayload = { 
        company_name: localStorage.getItem("wizard_field_company_name") || "", 
        service_key: window.wizardActiveServiceKeyIdentifier || "", 
        service_title: window.wizardActiveServiceTitleString || "", 
        plan_tier: window.routeActivePlanTierName || "", 
        total_fee: currentGrandTotal, 
        tracking_number: uniqueTrackingToken, 
        email: finalEmail, 
        status: 'Fulfillment Lane', 
        poa_signed_state: poaState === "signed_verified" || poaState === true, 
        poa_signature_verification_string: poaSignatureStr || null,
        updated_at: new Date().toISOString()
      };
      if (currentUserId && currentUserId !== "anonymous_user" && currentUserId.trim() !== "") {
        ordersRecordPayload.user_id = currentUserId;
      }

      const activeSupabaseClient = typeof supabaseClientInstance !== "undefined" ? supabaseClientInstance : typeof supabase !== "undefined" ? supabase : window.supabaseClientInstance || window.supabase;
      if (!activeSupabaseClient) {
        throw new ReferenceError("Supabase client instance could not be resolved in global scope.");
      }

      // Execute both network actions side-by-side to increase speed
      const [routerResponse, dbUpsertResult] = await Promise.all([
        routerHandshakePromise,
        activeSupabaseClient.from('orders').upsert([ordersRecordPayload], { onConflict: 'tracking_number' })
      ]);

      if (!routerResponse.ok) {
        const responseData = await routerResponse.json();
        throw new Error(responseData.error || "Failed communication handshake link with checkout edge router.");
      }
      if (dbUpsertResult.error) throw dbUpsertResult.error;

      const responseData = await routerResponse.json();
      const clientSecret = responseData.clientSecret;
      const extractedStripePaymentId = clientSecret && clientSecret.includes('_secret') ? clientSecret.split('_secret')[0] : "";

      // Backfill the newly generated stripe payment id asynchronously into the database without blocking the UI
      activeSupabaseClient.from('orders').update({ stripe_payment_id: extractedStripePaymentId }).eq('tracking_number', uniqueTrackingToken);

      // 3. STRIPE ENGINE ACCELERATION & MOUNT CONTEXT
      if (!window.stripeInstance && typeof Stripe !== "undefined") {
        window.stripeInstance = Stripe(ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY);
      }
      if (!window.stripeInstance) {
        throw new Error("Stripe engine library failed to initialize globally.");
      }

      if (window.stripePaymentElementInstance) {
        window.stripePaymentElementInstance.destroy();
        window.stripePaymentElementInstance = null;
      }

      window.stripeElementsContainer = window.stripeInstance.elements({ 
        clientSecret: clientSecret, 
        appearance: { 
          theme: 'stripe', 
          variables: { colorPrimary: '#0a1f44', colorBackground: '#ffffff', colorText: '#0a1f44', borderRadius: '6px', spacingGridRow: '16px' } 
        } 
      });

      // Optimization: Enforce immediate iframe layout calculations 
      window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', { 
        layout: { type: 'accordion', defaultCollapsed: false } 
      });

      // 4. CRITICAL SPINNER ANCHOR: Keep the spinner alive until Stripe completely finishes loading its frame
      window.stripePaymentElementInstance.on('ready', function() {
        console.log("[Stripe Elements] UI iframe fully drawn and interactive. Dismissing layout lock.");
        const dynamicSpinnerOverlay = document.getElementById("f4u-global-transition-overlay");
        if (dynamicSpinnerOverlay) {
          dynamicSpinnerOverlay.style.opacity = "0";
          dynamicSpinnerOverlay.style.pointerEvents = "none";
          setTimeout(() => { dynamicSpinnerOverlay.style.display = "none"; }, 200);
        }
      });

      window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point');

      if (localSubmitBtn) {
        localSubmitBtn.disabled = false;
        localSubmitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
        localSubmitBtn.onclick = function(e) { 
          window.executeOnboardingTransactionPayloadSubmitVanilla(e, clientSecret, uniqueTrackingToken, finalEmail, currentGrandTotal); 
        };
      }

    } catch (err) {
      console.error("[Checkout Pipeline Failed]", err);
      const errorBanner = document.getElementById("step6-error-banner-target");
      if (errorBanner) {
        errorBanner.innerText = `Portal Configuration Failure: ${err.message || err}`;
        errorBanner.style.display = "block";
      }
      // Force hide spinner if an unhandled network error occurs
      const dynamicSpinnerOverlay = document.getElementById("f4u-global-transition-overlay");
      if (dynamicSpinnerOverlay) { dynamicSpinnerOverlay.style.display = "none"; }
    }
  });

  } else {
    console.warn("[Spinner Engine] Structural transition spinner interceptor missing.");
  }

  } catch (initializationError) {
    console.error("[Stripe Initialization Failure]:", initializationError);
    const baseErrorBanner = document.getElementById("step6-error-banner-target") || document.getElementById("stripe-core-error-container");
    if (baseErrorBanner) {
      baseErrorBanner.style.display = "block";
      baseErrorBanner.textContent = "Payment initialization failed. Please reload the page and try again.";
    }
  }
}
// Left open explicitly to be terminated cleanly by the closing blocks of your step file


// Note: The function window.initializeFlatStripeCheckoutElement is left open on purpose here, 
// to be closed properly at the end of Block 7.
// ============================================================================
// 🔵 BLOCK 5 & 6: SECURE CHECKOUT SUBMISSION & STATUS UPGRADE (REPAIRED)
// ============================================================================
window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event, clientSecret, uniqueTrackingToken, finalEmail, activeGrandCost) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();

  const submitBtn = document.getElementById("wizard-next-trigger-btn");
  const errorBanner = document.getElementById("step6-error-banner-target");
  const step6Panel = document.getElementById("step-panel-6");

  if (errorBanner) {
    errorBanner.style.display = "none";
    errorBanner.innerHTML = "";
  }

  // 1. Inline raw input field validation checks
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

  // 2. Local button loading fallback state
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...';
  }

  // 3. Intercept submission natively
  try {
    // A. Trigger layout form validation inside Stripe iframe elements prior to blocking UI
    console.log("[Stripe Submission Engine] Checking validation rules inside payment token fields...");
    const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
    if (stripeSubmitError) throw stripeSubmitError;

    // B. Force overlay display manually before executing heavy payment pipeline to counter 180ms decay
    const dynamicSpinnerOverlay = document.getElementById("f4u-global-transition-overlay");
    if (dynamicSpinnerOverlay) {
      dynamicSpinnerOverlay.style.display = "flex";
      dynamicSpinnerOverlay.style.opacity = "1";
      dynamicSpinnerOverlay.style.pointerEvents = "auto";
    }

    if (typeof window.triggerWorkspaceTransitionSpinner === "function") {
      window.triggerWorkspaceTransitionSpinner(processPaymentPipeline);
    } else {
      console.warn("[Spinner Engine] Transition interceptor missing. Processing payment raw.");
      await processPaymentPipeline();
    }

  } catch (validationError) {
    handlePipelineFailure(validationError);
  }

  async function processPaymentPipeline() {
    try {
      // C. Confirm payment authorization via secure Stripe API endpoints
      console.log("[Stripe Submission Engine] Directing active payment authorization intent via secure Stripe API...");
      const { error: confirmError } = await window.stripeInstance.confirmPayment({
        elements: window.stripeElementsContainer,
        clientSecret: clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/wizard.html?step=7&token=${uniqueTrackingToken}&email=${encodeURIComponent(finalEmail)}`,
          receipt_email: finalEmail
        },
        redirect: "if_required"
      });

      if (confirmError) throw confirmError;

      // D. Dynamic database state escalation to 'Paid' using optimal fallback instances
      console.log("[Database Integration] Updating order payment status to power dashboards...");
      
      let clientInstance;
      const activeSupabaseClient = typeof supabaseClientInstance !== "undefined" ? supabaseClientInstance : typeof supabase !== "undefined" ? supabase : window.supabaseClientInstance || window.supabase;
      
      if (activeSupabaseClient) {
        clientInstance = activeSupabaseClient;
      } else {
        const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2');
        clientInstance = createClient(
          'https://lrbimrlbskjweynxlgas.supabase.co',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU'
        );
      }

      const { error: dbUpdateError } = await clientInstance
        .from('orders')
        .update({ status: 'Paid', updated_at: new Date().toISOString() })
        .eq('tracking_number', uniqueTrackingToken);

      if (dbUpdateError) throw dbUpdateError;

      // E. Cache transaction local manifest tokens
      const checkoutManifestPayload = {
        transaction_hash_id: uniqueTrackingToken,
        communications_email: finalEmail,
        financials_grand_total_charge: activeGrandCost,
        legal_entity_name: localStorage.getItem("wizard_field_company_name") || "",
        taxpayer_ein: localStorage.getItem("wizard_field_ein") || "",
        selected_package_title: window.routeActivePlanTierName || ""
      };
      sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(checkoutManifestPayload));

      // F. Clear spinner explicitly right before UI transitions out
      const structuralSpinner = document.getElementById("f4u-global-transition-overlay");
      if (structuralSpinner) {
        structuralSpinner.style.opacity = "0";
        structuralSpinner.style.pointerEvents = "none";
        setTimeout(() => { structuralSpinner.style.display = "none"; }, 200);
      }

      // G. Transition layout panels smoothly
      if (typeof window.switchWizardActiveViewLayout === "function") {
        console.log("[Stripe Submission Engine] Payment complete. Transitioning control to step-7.js...");
        window.switchWizardActiveViewLayout(7);
      }

    } catch (checkoutError) {
      handlePipelineFailure(checkoutError);
    }
  }

  function handlePipelineFailure(error) {
    console.error("[Fatal Payment Intercept Catch]", error);
    
    // Safety clear spinner visible properties on crash loops
    const structuralSpinner = document.getElementById("f4u-global-transition-overlay");
    if (structuralSpinner) {
      structuralSpinner.style.opacity = "0";
      structuralSpinner.style.pointerEvents = "none";
      setTimeout(() => { structuralSpinner.style.display = "none"; }, 200);
    }

    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Transaction Aborted:</strong> ${error.message || error}`;
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
    }
  }
};

// ============================================================================
// 🔵 BLOCK 7: DYNAMIC DOM MOUNT WATCHER LOOP (REPAIRED)
// ============================================================================
function bootStripeWhenElementIsReady() {
  const placeholderElement = document.getElementById("step-6-injection-placeholder");

  // If the wizard has not physically rendered the container layout yet, wait 50ms and check again
  if (!placeholderElement) {
    setTimeout(bootStripeWhenElementIsReady, 50);
    return;
  }

  console.log("[Stripe Lifecycle] Target container found in DOM layout tree. Resolving client layers...");

  try {
    // 1. Resolve Supabase reference safely to prevent the early ReferenceError inside Block 4
    const supabaseClient = 
      typeof supabaseClientInstance !== "undefined" ? supabaseClientInstance : 
      typeof supabase !== "undefined" ? supabase : 
      window.supabaseClient || window.supabase;

    if (!supabaseClient) {
      throw new ReferenceError(
        "Supabase client could not be located in local or global window scope."
      );
    }

    // 2. Attach the safe client back to the global scope to guarantee Block 4 access
    if (typeof window.supabaseClientInstance === "undefined") {
      window.supabaseClientInstance = supabaseClient;
    }

    console.log("[Stripe Lifecycle] Launching checkout element initialization engine...");
    
    // 3. Fire the core setup cleanly (Letting Block 4 trigger the transition spinner at the right time)
    if (typeof window.initializeFlatStripeCheckoutElement === "function") {
      window.initializeFlatStripeCheckoutElement();
    } else {
      throw new TypeError("window.initializeFlatStripeCheckoutElement is not registered as a function expression.");
    }

  } catch (pipelineError) {
    console.error("[Checkout Intercept Engine Failure]:", pipelineError.message);
    
    // Inject user-facing error message safely if container exists
    const fallbackErrorView = document.getElementById("step6-error-banner-target") || document.getElementById("stripe-core-error-container");
    if (fallbackErrorView) {
      fallbackErrorView.style.display = "block";
      fallbackErrorView.textContent = "Billing system synchronization error. Please reload.";
    }
  }
}

// Initialize watcher execution context based on active layout visibility
if (parseInt(window.currentWizardActiveStep, 10) === 6) {
  bootStripeWhenElementIsReady();
}

// Expose structural observer hook so your main layout router can force a remount on click
window.forceStripeCheckoutUIRefresh = function() {
  bootStripeWhenElementIsReady();
};

})(); // Cleanly closes the master IIFE scope layout initialized in Block 1
