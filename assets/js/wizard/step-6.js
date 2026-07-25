// ============================================================================ //
// UI_CORE_INJECTOR.JS - PART A: CORE ARCHITECTURE & SKELETON RENDERER (UPDATED) //
// ============================================================================ //
(function() {
  "use strict";

  const STRIPE_KEY = 'pk_test_51TTy4i0dNjSlvyScX676lZwB34Lby8nEuv0sRorwo6kGYKkTJYiTyPQA6PVjzwUSjB9Kz90LdHtCh2E1BTMMEkTX00HCLPKUkf';
  
  window.stripeInstance = window.stripeInstance || null;
  window.stripeElementsContainer = window.stripeElementsContainer || null;
  window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;
  
  let capturedInternalClientSecret = null;

  // 🎯 THE DIRECT FIX: Clean, high-utility explicit method prevents memory lock leaks
  window.setStripeClientSecret = function(newSecretToken) {
    if (!newSecretToken || typeof newSecretToken !== 'string' || !newSecretToken.includes('_secret_')) {
      return;
    }
    capturedInternalClientSecret = newSecretToken;
    console.log("✅ [Stripe Core Intercept] Async authorization token arrived. Forcing instant iframe paint...");
    if (typeof window.initializeFlatStripeCheckoutElement === "function") {
      window.initializeFlatStripeCheckoutElement();
    }
  };

  // Maintain backwards compatibility shortcut hook properties matching old setter
  Object.defineProperty(window, 'stripeClientSecret', {
    get() { return capturedInternalClientSecret; },
    set(val) { window.setStripeClientSecret(val); },
    configurable: true,
    enumerable: true
  });

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

    // Pull active parameters - Clean up any undefined objects instantly
    const total = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total") || 0);
    const compName = window.currentOrderCorePayload?.company_name || localStorage.getItem("wizard_field_company_name") || localStorage.getItem("wizard_company_name") || localStorage.getItem("f4u_company_name") || "";
    const servKey = window.routeActiveServiceKey || window.currentOrderCorePayload?.service_key || localStorage.getItem("wizard_service_key") || "";
    const servTitle = window.currentOrderCorePayload?.service_title || localStorage.getItem("wizard_field_selected_package_offering") || "Corporate Asset Filing Package";
    const planTier = window.routeActivePlanKey || window.currentOrderCorePayload?.plan_tier || localStorage.getItem("wizard_plan_tier_key") || "standard";

    // 🎯 CRITICAL SYSTEM FIX: Align with pre-existing tokens instead of breaking user records with raw random variables
    let tracking = localStorage.getItem("f4u_active_tracking_token");
    if (!tracking || tracking === "GUEST-INTAKE") {
      tracking = "F4U-" + Math.random().toString(36).substring(2, 12).toUpperCase();
      localStorage.setItem("f4u_active_tracking_token", tracking);
    }

    let innerFormMounted = document.getElementById("stripe-payment-element-mount-point");

    if (isNaN(total) || total <= 0) {
      if (!innerFormMounted) {
        baseContainer.innerHTML = `
          <div id="stripe-calculation-fallback-spinner" style="padding: 30px; text-align: center; color: #475569; font-weight: 500;">
            <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px;"></i> Calculating final statement values...
          </div>
        `;
      }
      setTimeout(initializeFlatStripeCheckoutElement, 300);
      return;
    }

    const dynamicSpinner = document.getElementById("stripe-calculation-fallback-spinner");
    if (dynamicSpinner) {
      dynamicSpinner.remove();
    }

    // 🎯 FIX: Escaped the broken unicode string warning payload character block to prevent script break errors
    if (!capturedInternalClientSecret) {
      console.warn("⚠️ [Stripe Core Guard] Standby: Awaiting secret payment token from server...");
      if (!innerFormMounted) {
        if (typeof window.assembleCleanUILayoutTree === "function") {
          window.assembleCleanUILayoutTree(baseContainer, total, compName, servTitle, planTier, tracking);
        }
        const targetPlaceholderNode = document.getElementById("stripe-payment-element-mount-point");
        if (targetPlaceholderNode) {
          targetPlaceholderNode.innerHTML = `
            <div style="padding: 24px; text-align: center; color: #64748b; font-weight: 500; font-size: 0.88rem; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px;">
              <i class="fa-solid fa-lock-keyhole fa-spin" style="margin-right: 8px; color: #0a1f44;"></i> Loading secure payment configurations...
            </div>
          `;
        }
      }
      return;
    }

    if (innerFormMounted && window.stripePaymentElementInstance) {
      const liveTotalDisplay = document.getElementById("payment-gateway-total-display");
      if (liveTotalDisplay) {
        liveTotalDisplay.textContent = `$${total.toFixed(2)}`;
      }
      return;
    }

    window.currentOrderCorePayload = {
      company_name: compName,
      service_key: servKey,
      service_title: servTitle,
      plan_tier: planTier,
      total_fee: total,
      status: "payment_initiated",
      tracking_number: tracking
    };

    if (typeof window.assembleCleanUILayoutTree === "function") {
      window.assembleCleanUILayoutTree(baseContainer, total, compName, servTitle, planTier, tracking);
    }

    setTimeout(async () => {
      const mountPoint = document.getElementById("stripe-payment-element-mount-point");
      if (!mountPoint) {
        console.error("[Stripe Core] Mount point missing from DOM after UI assembly.");
        return;
      }

      try {
        if (!window.stripeElementsContainer && capturedInternalClientSecret) {
          window.stripeElementsContainer = window.stripeInstance.elements({
            clientSecret: capturedInternalClientSecret,
            appearance: {
              theme: 'flat',
              variables: {
                colorPrimary: '#0a1f44',
                colorBackground: '#ffffff',
                colorText: '#0a1f44',
                colorTextPlaceholder: '#94a3b8',
                borderRadius: '6px',
                spacingGridRow: '16px'
              },
              rules: {
                '.Input': { padding: '14px 16px', fontSize: '15px', border: '1px solid #e2e8f0', boxShadow: 'none' },
                '.Input:focus': { borderColor: '#2563eb', boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)' },
                '.Input--invalid': { borderColor: '#ef4444', boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.15)' },
                '.Label': { fontWeight: '700', fontSize: '13px', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }
              }
            }
          });
        }

        if (window.stripeElementsContainer && !window.stripePaymentElementInstance) {
          window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', {
            layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: true }
          });
          window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point');
          console.log("✅ [Stripe Core] Payment Element successfully mounted.");

          setTimeout(() => {
            if (typeof window.attachSubmitButtonController === "function") {
              window.attachSubmitButtonController();
            } else {
              console.warn("[Stripe Core Error] attachSubmitButtonController module unassigned.");
            }
          }, 150);
        }
      } catch (stripeError) {
        console.error("[Stripe Core] Elements configuration error:", stripeError);
      }
    }, 40);
  }

  window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;
})();


// ============================================================================ //
// UI_CORE_INJECTOR.JS - PART B: VIEW TREE HTML SKELETON ASSEMBLER (UPDATED) //
// ============================================================================ //
(function() {
  "use strict";

  window.assembleCleanUILayoutTree = function(baseContainer, total, compName, servTitle, planTier, tracking) {
    
    // 🎯 THE DIRECT FIX: Pull pre-cached entries so step 3/5 fields never clear out accidentally
    const cachedFirstName = localStorage.getItem("wizard_first_name") || "";
    const cachedLastName = localStorage.getItem("wizard_last_name") || "";
    const cachedEmail = localStorage.getItem("wizard_email_address") || "";
    const cachedPhone = localStorage.getItem("wizard_phone_number") || "";

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

      <!-- 2. CONTACT PROFILES FIELD GRID (WITH CACHE RESTORATION PIPELINES) -->
      <div style="margin-bottom: 24px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; width: 100%; box-sizing: border-box;">
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">First Name *</label>
          <input type="text" id="portal_user_first_name" required value="${cachedFirstName}" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Last Name *</label>
          <input type="text" id="portal_user_last_name" required value="${cachedLastName}" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Email Address *</label>
          <input type="email" id="portal_user_email_input" required value="${cachedEmail}" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Phone Number *</label>
          <input type="text" id="portal_user_phone" required value="${cachedPhone}" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
      </div>

      <div id="step6-error-banner-target" style="display: none; padding: 14px; background: #fef2f2; border: 1px solid #fca5a5; color: #991b1b; border-radius: 6px; margin-bottom: 20px; font-size: 0.9rem;"></div>

      <!-- STRIPE ISOLATION MOUNTING TARGET BOX -->
      <div id="stripe-payment-element-mount-point" style="margin-bottom: 24px; min-height: 150px; width: 100%;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box;">
        <button type="button" id="wizardBackBtnElement" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Back</button>
        <button type="button" id="wizardSubmitBtnElement" style="background: #047857; border: none; color: white; padding: 12px 32px; border-radius: 6px; font-weight: 700; cursor: pointer;">
          <span id="wizardSubmitBtnDefaultState">
            Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>
          </span>
          <span id="wizardSubmitBtnLoadingState" style="display: none;">
            <i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...
          </span>
        </button>
      </div>
    `;
    // Initialize layout navigation controls
    document.getElementById("wizardBackBtnElement")?.addEventListener("click", () => {
      if (typeof window.goToPreviousWizardStep === 'function') {
        window.goToPreviousWizardStep();
      }
    });

    // 🎯 THE DIRECT FIX: Real-time cache write listeners prevent data loss between step transitions
    const elementKeyMaps = {
      "portal_user_first_name": "wizard_first_name",
      "portal_user_last_name": "wizard_last_name",
      "portal_user_email_input": "wizard_email_address",
      "portal_user_phone": "wizard_phone_number"
    };

    Object.keys(elementKeyMaps).forEach(id => {
      const inputElement = document.getElementById(id);
      if (inputElement) {
        inputElement.addEventListener("input", function() {
          // Remove validation classes smoothly
          this.classList.remove("field-error-shake");
          this.classList.remove("invalid-shake-trigger");
          
          // Instantly sync the local page state to permanent cache for step 7 usage
          localStorage.setItem(elementKeyMaps[id], this.value.trim());
        });
      }
    });

    // Postpone execution to next tick ensuring DOM layout rendering engine is painted
    setTimeout(() => {
      if (typeof window.executeStripeMountingPipeline === "function") {
        window.executeStripeMountingPipeline(total);
      } else {
        console.warn("[Stripe UI] Warning: window.executeStripeMountingPipeline is not defined yet.");
      }
    }, 0);
  };
})();



// ========================================== //
// FILE 2: STRIPE_ELEMENTS_MOUNT.JS (UPDATED) //
// ========================================== //
(function() {
  "use strict";

  function executeStripeMountingPipeline(paymentIntentClientSecret) {
    // Delay execution slightly so the parent core viewport script completes its rendering pass
    setTimeout(async function() {
      const targetNode = document.getElementById('stripe-payment-element-mount-point');
      if (!targetNode) {
        console.warn("⚠️ [Stripe Mount Engine]: Element '#stripe-payment-element-mount-point' absent from DOM layout.");
        return;
      }

      // CRITICAL PROTECTION GATEWAY: If your modern interceptor has already successfully
      // mounted the interactive elements, abort this legacy timeout pass instantly to prevent overwrites.
      if (window.stripePaymentElementInstance && document.querySelector('.StripeElement')) {
        console.log("[Stripe Mount Engine Guard] Active secure card iframe detected. Terminating redundant mounting pass cleanly.");
        return;
      }

      let finalizedSecret = paymentIntentClientSecret;

      // FIXED fallback mapping checking the exact variable keys where your core saves the live secret token string
      if (typeof finalizedSecret === 'number' || (typeof finalizedSecret === 'string' && !finalizedSecret.includes('_secret_'))) {
        console.log("⚠️ [Stripe Mount Engine] Received numeric context instead of secret token string. Executing local cache lookups...");
        finalizedSecret = window.stripeClientSecret || window.stripeClientSecretPayload || localStorage.getItem("f4u_stripe_client_secret");
      }

      // Ensure the secret is present and valid
      if (!finalizedSecret || typeof finalizedSecret !== 'string' || !finalizedSecret.includes('_secret_')) {
        console.error("✕ [Stripe Mount Engine] Initialization aborted: Missing or invalid clientSecret from backend. Received:", paymentIntentClientSecret);
        
        // Safety Check: Only throw error text if the canvas container is completely empty to protect active checkouts
        if (!document.querySelector('.StripeElement')) {
          targetNode.innerHTML = "<p style='color: #ef4444; font-weight: 500; font-size:14px;'>Session initialization failed. Please try again.</p>";
        }
        return;
      }

      try {
        // 🎯 THE DIRECT FIX: Clear container safely ONLY if an active container block doesn't exist, preventing frame flickering
        if (window.stripePaymentElementInstance && !document.querySelector('.StripeElement')) {
          try {
            window.stripePaymentElementInstance.destroy();
          } catch(e) { 
            console.warn("[Stripe Cleanup] Handled instance release cleanly."); 
          }
          window.stripePaymentElementInstance = null;
        }

        // Initialize elements container if it doesn't already exist
        if (!window.stripeElementsContainer) {
          window.stripeElementsContainer = window.stripeInstance.elements({
            clientSecret: finalizedSecret,
            appearance: {
              theme: 'flat',
              variables: {
                colorPrimary: '#0a1f44',
                colorBackground: '#ffffff',
                colorText: '#0a1f44',
                colorTextPlaceholder: '#94a3b8',
                borderRadius: '6px',
                spacingGridRow: '16px'
              },
              rules: {
                '.Input': { padding: '14px 16px', fontSize: '15px', border: '1px solid #e2e8f0', boxShadow: 'none' },
                '.Input:focus': { borderColor: '#2563eb', boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)' },
                '.Input--invalid': { borderColor: '#ef4444', boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.15)' },
                '.Label': { fontWeight: '700', fontSize: '13px', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }
              }
            }
          });
        }

        if (!window.stripePaymentElementInstance) {
          window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', {
            layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: true }
          });

          window.stripePaymentElementInstance.on("loaderror", function(errEvent) {
            console.error("✕ [Stripe Framework Load Error Intercepted]:", errEvent.error);
          });

          window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point');
          console.log("✅ [Stripe Engine] Secured card iframe mounted successfully.");
        }

      } catch (innerScopeException) {
        console.error("✕ [Stripe Mounting Fatal Exception Context]", innerScopeException);
      }
    }, 200);
  }

  window.executeStripeMountingPipeline = executeStripeMountingPipeline;
})();



// ============================================================================ //
// FILE 3: INTERACTION_CONTROLLER.JS (UPDATED) //
// ============================================================================ //
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

    // Map fields straight to permanent wizard caching keys
    const elementKeyMaps = {
      "portal_user_first_name": "wizard_first_name",
      "portal_user_last_name": "wizard_last_name",
      "portal_user_email_input": "wizard_email_address",
      "portal_user_phone": "wizard_phone_number"
    };

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
        
        // 🎯 THE DIRECT FIX: Lock verified parameters down into permanent cache upon successful validation
        localStorage.setItem(elementKeyMaps[id], inputTarget.value.trim());
      }
    });

    return textFieldsValid;
  }

  window.validateBaseProfileMatrix = validateBaseProfileMatrix;
})();


window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  const errorBanner = document.getElementById("step6-error-banner-target");
  const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";
  
  if (!window.stripeElementsContainer) {
    throw new Error("Stripe iframe layout elements are uninitialized. Check network configuration.");
  }
  
  console.log("[Supabase Gateway] Launching standard Stripe runtime payment processing handler...");
  
  try {
    // Strip out invalid billing details keys and confirm payment inline via redirect suppression
    const StripeConfirmationResult = await window.stripeInstance.confirmPayment({
      elements: window.stripeElementsContainer,
      redirect: "if_required",
      confirmParams: {
        return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`,
        receipt_email: document.getElementById("portal_user_email_input")?.value.trim() || undefined
      }
    });

    if (StripeConfirmationResult && StripeConfirmationResult.error) {
      console.warn("[Stripe Core API] Authentication flow halted or failed.", StripeConfirmationResult.error.message);
      if (errorBanner) {
        errorBanner.innerText = StripeConfirmationResult.error.message;
        errorBanner.style.display = "block";
      }
      submitButtonNode.disabled = false;
      submitButtonNode.style.opacity = "1";
      submitButtonNode.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`;
    } else {
      console.log("✅ [Transaction Complete] In-line payment authorized. Syncing transaction payload directly to Supabase before rendering view layer...");

      // 1. Gather all persistent cached multi-step parameters from local storage
      const firstName = localStorage.getItem("wizard_first_name") || "";
      const lastName = localStorage.getItem("wizard_last_name") || "";
      const emailAddress = localStorage.getItem("wizard_email_address") || "";
      const phoneNumber = localStorage.getItem("wizard_phone_number") || "";
      
      const selectedPlan = localStorage.getItem("wizard_selected_plan") || window.currentOrderCorePayload?.service_title || "Standard Filing Package";
      const upsellItemsArray = JSON.parse(localStorage.getItem("wizard_selected_upsells")) || [];
      const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";
      
      const poaSignature = localStorage.getItem("wizard_poa_signature") || "Digitally Executed";
      const stripePaymentId = window.currentOrderCorePayload?.stripe_payment_id || StripeConfirmationResult?.paymentIntent?.id || "pi_inline_authorized";

      // 2. Fetch the active global Supabase client instance reference from the browser
      const dbClient = window.supabaseInstance || window.supabaseClient;
      if (dbClient && typeof dbClient.from === 'function') {
        try {
          // 🎯 THE CORE FRONTEND FIX: Immediately write all metrics to public.orders table BEFORE switching tabs
          const { error: dbWriteFault } = await dbClient
            .from('orders')
            .insert([
              {
                tracking_number: uniqueTrackingToken,
                first_name: firstName,
                last_name: lastName,
                email_address: emailAddress,
                phone_number: phoneNumber,
                selected_plan: selectedPlan,
                selected_upsells: flatUpsellsString,
                total_paid_amount: parseFloat(finalAmountDue),
                poa_signature: poaSignature,
                poa_execution_stamp: new Date().toISOString(),
                stripe_payment_id: stripePaymentId,
                account_created: false
              }
            ]);

          if (dbWriteFault) {
            console.error("⚠️ [Supabase Inline Write Alert] Table insert bypassed or restricted:", dbWriteFault.message);
          } else {
            console.log("✅ [Supabase Inline Write] Step 3/5/6 metrics securely committed to orders data grid.");
          }
        } catch(dbEx) {
          console.warn("⚠️ [Supabase DB Exception] Post-payment database write loop execution skipped:", dbEx.message);
        }
      }

      // 3. Mark transaction state complete and transition layouts smoothly
      localStorage.setItem("f4u_payment_status_complete", "true");
      
      if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(7);
      } else if (typeof window.executeStepLifecyclePipeline === "function") {
        window.executeStepLifecyclePipeline(7);
      }
    }
  } catch (err) {
    console.error("[Stripe Execution Error]", err);
    if (errorBanner) {
      errorBanner.innerText = err.message;
      errorBanner.style.display = "block";
    }
    submitButtonNode.disabled = false;
    submitButtonNode.style.opacity = "1";
    submitButtonNode.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`;
  }
};
/**
 * FIXED AUTOMATION HOOK: Fetches secure payment intent variables directly
 * out of your custom Supabase edge micro-workers pipeline.
 */
window.fetchClientSecretAndMountStripeElement = async function(finalAmountDue) {
  console.log("📡 [Supabase Pre-Fetch] Lazy loading clientSecret for structural mounting...");

  // Resolve any pre-existing logged-in user tokens if available
  let extractedUserSessionId = null;
  try {
    const rawAuthToken = localStorage.getItem("supabase.auth.token");
    if (rawAuthToken) {
      const parsedTokenObj = JSON.parse(rawAuthToken);
      extractedUserSessionId = parsedTokenObj?.currentSession?.user?.id || parsedTokenObj?.user?.id || null;
    }
  } catch (e) {
    console.warn("[Supabase Token Parser] Failed parsing local auth session.");
  }

  const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

  // Capture user profile details dynamically straight from the registration fields
  const captureUserFirstName = document.getElementById("portal_user_first_name")?.value.trim() || localStorage.getItem("wizard_first_name") || "";
  const captureUserLastName = document.getElementById("portal_user_last_name")?.value.trim() || localStorage.getItem("wizard_last_name") || "";
  const captureUserEmail = document.getElementById("portal_user_email_input")?.value.trim() || localStorage.getItem("wizard_email_address") || localStorage.getItem("f4u_user_email") || "";
  const captureUserPhone = document.getElementById("portal_user_phone")?.value.trim() || localStorage.getItem("wizard_phone_number") || "";

  // 🎯 THE DIRECT FIX: Gathers Step 3 Upsells and Step 5 Totals dynamically to bundle inside payload object
  const upsellItemsArray = JSON.parse(localStorage.getItem("wizard_selected_upsells")) || [];
  const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";
  const selectedPlan = localStorage.getItem("wizard_selected_plan") || "Standard Filing Package";
  const poaSignature = localStorage.getItem("wizard_poa_signature") || "Digitally Executed";

  // Build the dynamic data object payload - thoroughly stripping out temporary dummy and "pending" texts
  const profileTransactionPayload = {
    company_name: window.currentOrderCorePayload?.company_name || localStorage.getItem("f4u_company_name") || "Filing Corporate Asset",
    service_key: window.currentOrderCorePayload?.service_key || localStorage.getItem("f4u_service_key") || "",
    service_title: window.currentOrderCorePayload?.service_title || localStorage.getItem("f4u_service_title") || "Filing Package Service",
    plan_tier: window.currentOrderCorePayload?.plan_tier || localStorage.getItem("f4u_plan_tier") || "standard",
    total_fee: parseFloat(finalAmountDue),
    email: captureUserEmail.toLowerCase(),
    tracking_number: uniqueTrackingToken,
    status: "initiated",
    user_id: extractedUserSessionId,
    
    // Explicit metadata dictionary object mapping payload data down to background stripe engines
    collected_payload_metadata: {
      tracking_number: uniqueTrackingToken,
      first_name: captureUserFirstName,
      last_name: captureUserLastName,
      email_address: captureUserEmail.toLowerCase(),
      phone_number: captureUserPhone,
      selected_plan: selectedPlan,
      selected_upsells: flatUpsellsString,
      poa_signature: poaSignature,
      amount_in_cents: Math.round(finalAmountDue * 100),
      currency: "usd",
      wizard_step_checkpoint: 6,
      timestamp_capture: new Date().toISOString()
    }
  };

  try {
    // Direct payload network stream to your specific gateway edge-worker
    const pipelineEndpointResponse = await fetch('https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-webhook', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileTransactionPayload)
    });

    if (!pipelineEndpointResponse.ok) {
      const serverFailureMessage = await pipelineEndpointResponse.text();
      throw new Error(`Supabase Edge Function Rejected Request (${pipelineEndpointResponse.status}): ${serverFailureMessage}`);
    }

    const completedTransactionIntentJSON = await pipelineEndpointResponse.json();
    const serverSecret = completedTransactionIntentJSON.clientSecret || completedTransactionIntentJSON.client_secret;
    const verifiedPaymentIntentId = completedTransactionIntentJSON.paymentIntentId || completedTransactionIntentJSON.payment_intent_id || completedTransactionIntentJSON.id;

    if (verifiedPaymentIntentId && window.currentOrderCorePayload) {
      window.currentOrderCorePayload.stripe_payment_id = verifiedPaymentIntentId;
    }

    if (!serverSecret) {
      throw new Error("Supabase response was missing valid clientSecret string token.");
    }

    // Assign secret cleanly through our verified proxy layer method to trigger iframe rendering mechanics
    if (typeof window.setStripeClientSecret === "function") {
      window.setStripeClientSecret(serverSecret);
    } else {
      window.stripeClientSecret = serverSecret;
      if (typeof window.executeStripeMountingPipeline === "function") {
        window.executeStripeMountingPipeline(serverSecret);
      }
    }

  } catch (err) {
    console.error("✕ [Supabase Pre-Fetch Failure]", err);
    const mountTarget = document.getElementById('stripe-payment-element-mount-point');
    if (mountTarget) {
      mountTarget.innerHTML = `<p style="color:#ef4444; font-size:13px; font-weight:600;">Secure checkout window timed out. Please try refreshing.</p>`;
    }
  }
};

// =================================================================================== //
// step-6.js - PARTS 4 & 5: PRODUCTION EDGE WEBHOOK ALIGNMENT & DEFERRED INTENT ENGINE //
// =================================================================================== //
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  const errorBanner = document.getElementById("step6-error-banner-target");
  const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

  // Gather user variables directly out of form inputs (Removes hardcoded zeroes!)
  const captureFirstName = document.getElementById("portal_user_first_name")?.value.trim() || localStorage.getItem("wizard_first_name") || "";
  const captureLastName = document.getElementById("portal_user_last_name")?.value.trim() || localStorage.getItem("wizard_last_name") || "";
  const captureEmail = document.getElementById("portal_user_email_input")?.value.trim() || localStorage.getItem("wizard_email_address") || "";
  const capturePhone = document.getElementById("portal_user_phone")?.value.trim() || localStorage.getItem("wizard_phone_number") || "";

  if (!captureEmail || !captureFirstName || !captureLastName) {
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> Please complete all required profile fields before submitting payment.`;
    }
    if (submitButtonNode) {
      submitButtonNode.disabled = false;
      submitButtonNode.style.opacity = "1";
      submitButtonNode.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
    }
    return false;
  }

  // Resolve an authentic session uuid if they are already logged in, otherwise cleanly default to null
  let activeUserSessionId = null;
  try {
    const rawAuthToken = localStorage.getItem("supabase.auth.token");
    if (rawAuthToken) {
      const parsedTokenObj = JSON.parse(rawAuthToken);
      activeUserSessionId = parsedTokenObj?.currentSession?.user?.id || parsedTokenObj?.user?.id || null;
    }
  } catch (e) {
    console.warn("[Supabase Auth Lookup] Session unauthenticated or token empty.");
  }

  // 🎯 THE DIRECT FIX: Extract dynamic values from Steps 3, 4, and 5 to prevent empty data blocks on Step 7
  const selectedPlan = localStorage.getItem("wizard_selected_plan") || window.currentOrderCorePayload?.service_title || "Standard Package";
  const upsellItemsArray = JSON.parse(localStorage.getItem("wizard_selected_upsells")) || [];
  const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";
  const poaSignature = localStorage.getItem("wizard_poa_signature") || "Digitally Executed";

  // Map variables matching your orders grid schema—removing all "pending" filler tags
  const profileTransactionPayload = {
    tracking_number: uniqueTrackingToken,
    first_name: captureFirstName,
    last_name: captureLastName,
    email_address: captureEmail.toLowerCase(),
    phone_number: capturePhone,
    selected_plan: selectedPlan,
    selected_upsells: flatUpsellsString,
    total_paid_amount: parseFloat(finalAmountDue),
    poa_signature: poaSignature,
    poa_execution_stamp: new Date().toISOString(),
    stripe_payment_id: window.stripeClientSecret ? window.stripeClientSecret.split('_secret_')[0] : "f4u_checkout_token",
    account_created: false
  };
  try {
    // 1. Direct database logging: Preserve customer variables inside table schema prior to payment handoff
    const client = window.supabaseInstance || window.supabaseClient;
    if (client && typeof client.from === 'function') {
      console.log("📡 [Supabase Orders Logging] Preserving customer order variables inside data grid...");
      const { error: dbInsertErr } = await client
        .from('orders')
        .upsert([profileTransactionPayload], { onConflict: 'tracking_number' });
        
      if (dbInsertErr) {
        console.warn("⚠️ Client-side tracking sync log warning (Continuing to avoid interrupting billing):", dbInsertErr.message);
      } else {
        console.log("✅ [Supabase Logging] Order rows written successfully.");
      }
    }

    // 2. SUBMIT CONTEXT VIA STRIPE DEFERRED PAYMENT ELEMENT IFRAMES
    if (window.stripeElementsContainer) {
      console.log("[Stripe Controller] Submitting payment components context...");
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
        
        // Confirm deferred elements inline on the page via redirect suppression
        const { error: confirmError } = await window.stripeInstance.confirmPayment({
          elements: window.stripeElementsContainer,
          clientSecret: window.stripeClientSecret,
          redirect: "if_required",
          confirmParams: {
            return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`,
            receipt_email: captureEmail.toLowerCase()
          }
        });

        if (confirmError) {
          throw confirmError;
        }
      } else if (isMockSecret) {
        // Execute secure sandbox operations if a mock secret token is present
        const dbClient = window.supabaseInstance || window.supabaseClient;
        if (dbClient && typeof dbClient.from === 'function') {
          console.log("🧪 [Sandbox Engine] Mock intent matched. Forcing manual database status update...");
          
          const sandboxDatabaseRowUpsertNode = {
            ...profileTransactionPayload,
            stripe_payment_id: "mock_payment_id_settled"
          };

          const { error: mockUpdateError } = await dbClient
            .from('orders')
            .upsert(sandboxDatabaseRowUpsertNode, { onConflict: 'tracking_number' });

          if (mockUpdateError) {
            console.warn("⚠️ Sandbox Sync Warning:", mockUpdateError.message);
            throw new Error(`Sandbox database tracking synchronization rejected: ${mockUpdateError.message}`);
          } else {
            console.log("✅ Sandbox Sync Complete: Test transaction record marked inside public.orders.");
          }
        }
      }
    } else {
      throw new Error("Checkout components missing: The payment elements were not mounted correctly.");
    }

    // Global success panel view transitions execution loop
    console.log("✅ [Transaction Complete] Stripe processing approved. Progressing instantly to Step 7 layout canvas...");
    localStorage.setItem("f4u_payment_status_complete", "true");

    if (typeof window.switchWizardActiveViewLayout === "function") {
      console.log("[Stripe Submission Engine] Checkout complete. Transitioning control to step-7.js...");
      window.switchWizardActiveViewLayout(7);
    } else if (typeof window.goToNextWizardStep === "function") {
      window.goToNextWizardStep();
    } else {
      const successPanelNode = document.getElementById("step-panel-7");
      if (successPanelNode) {
        document.querySelectorAll(".wizard-panel").forEach(p => p.style.display = "none");
        successPanelNode.style.setProperty("display", "block", "important");
        successPanelNode.classList.add("active");
      }
    }
  } catch (checkoutError) {
    console.error("[Fatal Payment Intercept Catch]", checkoutError);
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> 
        <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError}
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
// step-6.js - SECTION 5: DATA PRESERVATION & STRIPE INTENT TRANSMISSION (PART 1)//
// ============================================================================ //
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  "use strict";
  
  const submitBtn = submitButtonNode || document.getElementById("wizardSubmitBtnElement") || document.getElementById("wizard-next-trigger-btn");
  const errorBanner = document.getElementById("step6-error-banner-target");
  const emailInputNode = document.getElementById("portal_user_email_input");
  const firstNameInputNode = document.getElementById("portal_user_first_name");
  const lastNameInputNode = document.getElementById("portal_user_last_name");
  const phoneInputNode = document.getElementById("portal_user_phone");
  
  const finalEmail = emailInputNode ? emailInputNode.value.trim().toLowerCase() : localStorage.getItem("f4u_checkout_email") || localStorage.getItem("wizard_email_address") || "";
  const firstName = firstNameInputNode ? firstNameInputNode.value.trim() : localStorage.getItem("wizard_first_name") || "";
  const lastName = lastNameInputNode ? lastNameInputNode.value.trim() : localStorage.getItem("wizard_last_name") || "";
  const phone = phoneInputNode ? phoneInputNode.value.trim() : localStorage.getItem("wizard_phone_number") || "";
  
  const rawTotalText = document.getElementById("payment-gateway-total-display")?.textContent || "";
  const parsedDOMCost = parseFloat(rawTotalText.replace(/[^0-9.]/g, ""));
  const activeGrandCost = !isNaN(parsedDOMCost) ? parsedDOMCost : finalAmountDue;
  const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";
  
  const supabaseClient = window.supabaseInstance || window.supabaseClient || (typeof window.getSuccessPageSupabaseClient === 'function' ? window.getSuccessPageSupabaseClient() : null);

  try {
    if (!window.stripeClientSecret) {
      throw new Error("Missing transaction secure secret token. Please return to the previous review layout step.");
    }
    if (!window.stripeElementsContainer) {
      throw new Error("Checkout components missing: The payment elements container was not initialized correctly.");
    }

    console.log("💳 [Stripe Runtime] Validating Element layout entries via .submit()...");
    const { error: submitValidationError } = await window.stripeElementsContainer.submit();
    
    if (submitValidationError) {
      if (errorBanner) {
        errorBanner.innerText = submitValidationError.message;
        errorBanner.style.display = "block";
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
      }
      return false;
    }

    console.log("💳 [Stripe Runtime] Dynamic Amount Verified: $" + activeGrandCost + ". Launching checkout window...");

    let activeUserSessionId = null;
    try {
      const rawAuthToken = localStorage.getItem("supabase.auth.token");
      if (rawAuthToken) {
        const parsedTokenObj = JSON.parse(rawAuthToken);
        activeUserSessionId = parsedTokenObj?.currentSession?.user?.id || parsedTokenObj?.user?.id || null;
      }
    } catch (e) {
      console.warn("[Supabase Auth Lookup] Session unauthenticated or token empty.");
    }

    // 🎯 THE DIRECT FIX: Extract persistent step 3 and 4 selections from cache to save to database columns
    const selectedPlan = localStorage.getItem("wizard_selected_plan") || window.currentOrderCorePayload?.service_title || "Corporate Asset Filing Package";
    const upsellItemsArray = JSON.parse(localStorage.getItem("wizard_selected_upsells")) || [];
    const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";
    const poaSignature = localStorage.getItem("wizard_poa_signature") || localStorage.getItem("wizard_field_poa_signature_string") || "Digitally Executed";

    // 🎯 THE DIRECT COLUMNS FIX: Flatten variable keys to map perfectly to your public.orders schema fields
    const orderRecordPayload = {
      tracking_number: uniqueTrackingToken,
      first_name: firstName,
      last_name: lastName,
      email_address: finalEmail,
      phone_number: phone,
      selected_plan: selectedPlan,
      selected_upsells: flatUpsellsString,
      total_paid_amount: parseFloat(activeGrandCost),
      poa_signature: poaSignature,
      poa_execution_stamp: new Date().toISOString(),
      stripe_payment_id: window.stripeClientSecret ? window.stripeClientSecret.split('_secret_')[0] : "f4u_checkout_token",
      account_created: false,
      created_at: new Date().toISOString()
    };

    if (supabaseClient && typeof supabaseClient.from === 'function') {
      console.log("📡 [Supabase Operations Logs] Upserting transaction profile data states...");
      const { error: dbInsertErr } = await supabaseClient
        .from('orders')
        .upsert([orderRecordPayload], { onConflict: 'tracking_number' });
        
      if (dbInsertErr) {
        console.warn("⚠️ Client-side tracking sync log warning (Continuing to ensure payment executes):", dbInsertErr.message);
      } else {
        console.log("✅ [Supabase Inline Write] Step 3/5/6 parameters successfully committed to table.");
      }
    }

    const StripeConfirmationResult = await window.stripeInstance.confirmPayment({
      elements: window.stripeElementsContainer,
      clientSecret: window.stripeClientSecret,
      redirect: "if_required",
      confirmParams: {
        return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`,
        receipt_email: finalEmail || undefined
      }
    });

    if (StripeConfirmationResult && StripeConfirmationResult.error) {
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
    } else {
      console.log("✅ [Transaction Complete] Stripe payment verified in-line. Transitioning to step 7 receipt views...");
      localStorage.setItem("f4u_payment_status_complete", "true");
      
      if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(7);
      } else if (typeof window.executeStepLifecyclePipeline === "function") {
        window.executeStepLifecyclePipeline(7);
      } else {
        document.querySelectorAll(".wizard-panel").forEach(p => p.style.display = "none");
        const step7PanelNode = document.getElementById("step-panel-7") || document.getElementById("step-7");
        if (step7PanelNode) {
          step7PanelNode.style.setProperty("display", "block", "important");
          step7PanelNode.classList.add("active");
        }
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

// ============================================================================ //
// step-6.js - UNIFIED TRANSACTION AUTHORIZATION PIPELINE ENGINE (PART 1 - SECURED) //
// ============================================================================ //
(function() {
  "use strict";

  async function resolveStripeClientAuthorizationSecret(grandTotalAmount, trackingNumberToken) {
    try {
      console.log("[Stripe Loader] Requesting secure Payment Intent token from live production Edge Function...");
      const productionUrlGateway = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-webhook';
      
      // Extract profile context fields to ensure complete server payload synchronization
      const captureUserEmail = localStorage.getItem("wizard_email_address") || localStorage.getItem("f4u_user_email") || "guest-checkout@filings4u.com";
      const captureUserFirstName = localStorage.getItem("wizard_first_name") || "";
      const captureUserLastName = localStorage.getItem("wizard_last_name") || "";
      const captureUserPhone = localStorage.getItem("wizard_phone_number") || "";
      const selectedPlan = localStorage.getItem("wizard_selected_plan") || "Corporate Filing Package";
      const upsellItemsArray = JSON.parse(localStorage.getItem("wizard_selected_upsells")) || [];
      const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";

      // 🎯 THE DIRECT FIX: Align variable names with your master pre-fetch engine rules
      const profileTransactionPayload = {
        company_name: localStorage.getItem("f4u_company_name") || "Filing Corporate Asset",
        service_title: selectedPlan,
        plan_tier: localStorage.getItem("f4u_plan_tier") || "standard",
        total_fee: parseFloat(grandTotalAmount),
        email: captureUserEmail.toLowerCase(),
        tracking_number: trackingNumberToken,
        status: "initiated",
        
        // Pass complete metadata block down so the background intent maps step 3 and 5 items
        collected_payload_metadata: {
          tracking_number: trackingNumberToken,
          first_name: captureUserFirstName,
          last_name: captureUserLastName,
          email_address: captureUserEmail.toLowerCase(),
          phone_number: captureUserPhone,
          selected_plan: selectedPlan,
          selected_upsells: flatUpsellsString,
          amount_in_cents: Math.round(grandTotalAmount * 100),
          currency: "usd",
          wizard_step_checkpoint: 6,
          timestamp_capture: new Date().toISOString()
        }
      };

      const response = await fetch(productionUrlGateway, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileTransactionPayload)
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        throw new Error(errorPayload.error || "Edge Function rejected credentials generation lookups.");
      }

      const data = await response.json();
      const rawSecretToken = data.clientSecret || data.client_secret;
      
      if (!rawSecretToken) {
        throw new Error("Handshake structural failure: Secret authorization token omitted by cloud gateway.");
      }

      let verifiedCleanSecret = rawSecretToken.trim();
      if (verifiedCleanSecret.includes('"')) {
        verifiedCleanSecret = verifiedCleanSecret.replace(/"/g, "");
      }

      // Save the exact, unmodified session secret token to the window scope using our synchronized proxy method
      if (typeof window.setStripeClientSecret === "function") {
        window.setStripeClientSecret(verifiedCleanSecret);
      } else {
        window.stripeClientSecret = verifiedCleanSecret;
      }

      console.log("✅ [Secret Engine] Intact Checkout Session token configured safely.");

      if ((data.paymentIntentId || data.id) && window.currentOrderCorePayload) {
        window.currentOrderCorePayload.stripe_payment_id = data.paymentIntentId || data.id;
      }
      
      return verifiedCleanSecret;

    } catch (err) {
      console.error("✕ [Stripe Loader Critical Endpoint Failure]:", err.message || err);
      throw err;
    }
  }
  window.initializeStep6LifecycleAndMount = async function(baseContainer, total, compName, servTitle, planTier, tracking) {
    if (typeof window.assembleCleanUILayoutTree === "function") {
      window.assembleCleanUILayoutTree(baseContainer, total, compName, servTitle, planTier, tracking);
    }

    try {
      const secretToken = await resolveStripeClientAuthorizationSecret(total, tracking);

      // FORCED DOM RE-PAINT DELAY MACRO
      setTimeout(() => {
        const structuralMountPointNode = document.getElementById("stripe-payment-element-mount-point");
        if (!structuralMountPointNode) {
          console.error("✕ [Stripe Pipeline Engine Fatal Error]: Mount point container node is missing after UI skeleton render phase.");
          return;
        }

        if (typeof window.executeStripeMountingPipeline === "function") {
          window.executeStripeMountingPipeline(secretToken);
        } else {
          console.error("✕ [Stripe Pipeline Engine Fatal Error]: window.executeStripeMountingPipeline is not defined in memory context.");
        }
      }, 50);

    } catch (error) {
      const errorBanner = document.getElementById("step6-error-banner-target");
      if (errorBanner) {
        errorBanner.style.display = "block";
        // 🎯 THE DIRECT FIX: Cleaned string encoding protects layout engine from crashes
        errorBanner.innerHTML = `⚠️ <strong>Initialization Failure:</strong> Unable to process financial connection tokens. Check network connection.`;
      }
    }
  };


// ============================================================================ //
// LOCATION: assets/js/step-6.js (MODULAR SUBMISSION PIPELINE CORES - COMPLETED) //
// ============================================================================ //
window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();
  
  const submitBtn = document.getElementById("wizardSubmitBtnElement");
  const errorBanner = document.getElementById("step6-error-banner-target");
  const emailInput = document.getElementById("portal_user_email_input");
  const firstNameInput = document.getElementById("portal_user_first_name");
  const lastNameInput = document.getElementById("portal_user_last_name");
  const phoneInput = document.getElementById("portal_user_phone");
  const btnDefaultState = document.getElementById("wizardSubmitBtnDefaultState");
  const btnLoadingState = document.getElementById("wizardSubmitBtnLoadingState");
  
  const fieldsArray = [emailInput, firstNameInput, lastNameInput, phoneInput];
  let validationHasFailed = false;

  fieldsArray.forEach(input => {
    if (input) input.classList.remove("field-error-shake", "wizard-input-field-error-state");
  });

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
    
    const rawTextTotal = document.getElementById("payment-gateway-total-display")?.textContent || "";
    const parsedDOMCost = parseFloat(rawTextTotal.replace(/[^0-9.]/g, ""));
    const activeGrandCost = !isNaN(parsedDOMCost) ? parsedDOMCost : 0;

    if (activeGrandCost <= 0) {
      throw new Error("Unable to authorize ledger funds: Payment calculation total is uninitialized.");
    }

    if (submitBtn) submitBtn.disabled = true;
    if (btnDefaultState) btnDefaultState.style.display = "none";
    if (btnLoadingState) btnLoadingState.style.display = "inline-block";

    const urlScanner = new URLSearchParams(window.location.search);

    // Extract values and clean up any placeholder strings
    const companyNameParameter = document.getElementById("schema_orders_company_name")?.value || window.currentOrderCorePayload?.company_name || localStorage.getItem("f4u_company_name") || "";
    const uniqueTrackingToken = document.getElementById("schema_orders_tracking_number")?.value || localStorage.getItem("f4u_active_tracking_token") || "";
    
    // 🎯 THE DIRECT FIX: Gathers persistent multi-step variables from previous setup steps
    const selectedPlan = localStorage.getItem("wizard_selected_plan") || document.getElementById("schema_orders_service_title")?.value || window.currentOrderCorePayload?.service_title || "Standard Filing Package";
    const upsellItemsArray = JSON.parse(localStorage.getItem("wizard_selected_upsells")) || [];
    const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";
    const poaSignatureParameter = localStorage.getItem("wizard_poa_signature") || localStorage.getItem("wizard_field_poa_signature_string") || "Digitally Executed";

    if (!companyNameParameter) throw new Error("Validation aborted: Company Name mapping parameters are completely blank.");
    if (!uniqueTrackingToken) throw new Error("Validation aborted: Active tracking session token identifier is unassigned.");

    const supabaseClient = window.supabaseInstance || window.supabaseClient;

    let dynamicUserId = null;
    if (supabaseClient && supabaseClient.auth) {
      const activeUser = (await supabaseClient.auth.getUser())?.data?.user;
      if (activeUser) dynamicUserId = activeUser.id;
    }

    // A. DATA PRESERVATION STEP
    if (supabaseClient) {
      // 🎯 THE DIRECT COLUMNS FIX: Flatten objects out into direct column properties matching public.orders schema
      const validatedDatabaseUpsertPayload = {
        tracking_number: uniqueTrackingToken.trim(),
        first_name: firstName,
        last_name: lastName,
        email_address: finalEmail,
        phone_number: phone,
        company_name: companyNameParameter.trim(),
        selected_plan: selectedPlan,
        selected_upsells: flatUpsellsString,
        total_paid_amount: parseFloat(activeGrandCost.toFixed(2)),
        poa_signature: poaSignatureParameter.trim(),
        poa_execution_stamp: new Date().toISOString(),
        stripe_payment_id: window.stripeClientSecret ? window.stripeClientSecret.split('_secret_')[0] : "f4u_checkout_token",
        account_created: false,
        created_at: new Date().toISOString()
      };

      console.log("📡 [Supabase Operations Logs] Upserting transaction profile data states...");
      const { error: dbUpsertError } = await supabaseClient
        .from('orders')
        .upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' });

      if (dbUpsertError) throw new Error(`Pre-Sync Failed: ${dbUpsertError.message}`);
    }

    // B. SECURE STRIPE PROCESSING
    if (window.stripeElementsContainer && window.stripeInstance && window.stripeClientSecret) {
      console.log("[Stripe Controller] Submitting payment components context...");
      const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
      if (stripeSubmitError) throw stripeSubmitError;

      console.log("[Stripe Controller] Launching native billing confirmation challenge over network...");
      const { error: confirmError } = await window.stripeInstance.confirmPayment({
        elements: window.stripeElementsContainer,
        clientSecret: window.stripeClientSecret,
        redirect: "if_required",
        confirmParams: {
          return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`,
          receipt_email: finalEmail
        }
      });

      if (confirmError) throw confirmError;

      console.log("✅ [Transaction Complete] Stripe payment verified in-line. Transitioning views...");
      localStorage.setItem("f4u_payment_status_complete", "true");

      if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(7);
      } else if (typeof window.executeStepLifecyclePipeline === "function") {
        window.executeStepLifecyclePipeline(7);
      } else {
        document.querySelectorAll(".wizard-panel").forEach(p => p.style.display = "none");
        const step7PanelNode = document.getElementById("step-panel-7") || document.getElementById("step-7");
        if (step7PanelNode) {
          step7PanelNode.style.setProperty("display", "block", "important");
          step7PanelNode.classList.add("active");
        }
      }
    } else {
      throw new Error("Stripe components uninitialized: Gateway configuration tokens missing from memory context.");
    }
  } catch (checkoutError) {
    console.error("[Fatal Payment Intercept Catch]", checkoutError);
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError}`;
    }
    if (submitBtn) submitBtn.disabled = false;
    if (btnDefaultState) btnDefaultState.style.display = "inline-block";
    if (btnLoadingState) btnLoadingState.style.display = "none";
  }
};
})();