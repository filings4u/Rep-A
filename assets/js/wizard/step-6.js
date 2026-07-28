// ============================================================================ //
// // UI_CORE_INJECTOR.JS - PART A: CORE ARCHITECTURE & SKELETON RENDERER (FIXED)
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

    // 🎯 FIX 1: Clean up total calculation into a single deterministic source
    const rawTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total") || 0;
    const total = parseFloat(rawTotal);

    // 🎯 FIX 2: Explicitly scrape user details along with company details to sync local state
    const compName = window.currentOrderCorePayload?.company_name || localStorage.getItem("wizard_field_company_name") || localStorage.getItem("wizard_company_name") || localStorage.getItem("f4u_company_name") || "";
    const firstName = window.currentOrderCorePayload?.first_name || localStorage.getItem("wizard_first_name") || localStorage.getItem("first_name") || "";
    const lastName = window.currentOrderCorePayload?.last_name || localStorage.getItem("wizard_last_name") || localStorage.getItem("last_name") || "";
    const phoneNumber = window.currentOrderCorePayload?.phone_number || localStorage.getItem("wizard_phone_number") || localStorage.getItem("phone_number") || "";
    const emailAddress = window.currentOrderCorePayload?.email_address || localStorage.getItem("wizard_email_address") || localStorage.getItem("email_address") || "";

    const servKey = window.routeActiveServiceKey || window.currentOrderCorePayload?.service_key || localStorage.getItem("wizard_service_key") || "";
    const servTitle = window.currentOrderCorePayload?.service_title || localStorage.getItem("wizard_field_selected_package_offering") || "Corporate Asset Filing Package";
    const planTier = window.routeActivePlanKey || window.currentOrderCorePayload?.plan_tier || localStorage.getItem("wizard_plan_tier_key") || "standard";

    // 🎯 FIX 3: Eliminate random token generation if a tracking row already exists in Supabase
  let tracking = localStorage.getItem("f4u_active_tracking_token") || localStorage.getItem("tracking_number");
    
    // If the token is missing or corrupted, use your original step generator to build the F4U identifier
    if (!tracking || tracking === "GUEST-INTAKE" || tracking.includes("UNKNOWN")) {
      tracking = "F4U-" + Math.random().toString(36).substring(2, 12).toUpperCase();
      localStorage.setItem("f4u_active_tracking_token", tracking);
      localStorage.setItem("tracking_number", tracking); 
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

    // 🎯 FIX 4: Build a comprehensive local data object containing the missing customer fields
    window.currentOrderCorePayload = {
      company_name: compName,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email_address: emailAddress,
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
// // UI_CORE_INJECTOR.JS - PART B: VIEW TREE HTML SKELETON ASSEMBLER (FIXED)
// ============================================================================ //
(function() {
  "use strict";

  window.assembleCleanUILayoutTree = function(baseContainer, total, compName, servTitle, planTier, tracking) {
    console.log("📡 [Stripe Flow Engine] Preparing fresh layout trees for conversion checkout passes...");

    // 🎯 EXTRACT INPUT STRINGS FROM MEMORY
    let formFirstName = localStorage.getItem("first_name") || localStorage.getItem("wizard_field_first_name") || "";
    let formLastName = localStorage.getItem("last_name") || localStorage.getItem("wizard_field_last_name") || "";
    let formEmailAddress = localStorage.getItem("email_address") || localStorage.getItem("wizard_field_email") || localStorage.getItem("email") || "";
    let formPhoneNumber = localStorage.getItem("phone_number") || localStorage.getItem("wizard_field_phone") || localStorage.getItem("phone") || "";

    // Secure Shield: Strip away any historical systemic placeholder text so inputs start clean
    const layoutPlaceholders = ["pending input", "pending", "empty", "not specified", "null", "undefined"];
    if (layoutPlaceholders.includes(formFirstName.toLowerCase().trim())) formFirstName = "";
    if (layoutPlaceholders.includes(formLastName.toLowerCase().trim())) formLastName = "";
    if (layoutPlaceholders.includes(formEmailAddress.toLowerCase().trim())) formEmailAddress = "";
    if (layoutPlaceholders.includes(formPhoneNumber.toLowerCase().trim())) formPhoneNumber = "";

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

      <!-- 1. VERIFIED ENTERPRISE METADATA BOX -->
      <div style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; box-sizing: border-box; width: 100%;">
        <div style="font-size: 0.725rem; font-weight: 800; color: #475569; letter-spacing: 0.05em; margin-bottom: 4px;">VERIFIED ENTERPRISE FILING METADATA</div>
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
          <input type="text" id="portal_user_first_name" required value="${formFirstName}" placeholder="John" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Last Name *</label>
          <input type="text" id="portal_user_last_name" required value="${formLastName}" placeholder="Doe" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Email Address *</label>
          <input type="email" id="portal_user_email_input" required value="${formEmailAddress}" placeholder="john.doe@example.com" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
        <div style="grid-column: span 1; display: flex; flex-direction: column;">
          <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Phone Number *</label>
          <input type="text" id="portal_user_phone" required value="${formPhoneNumber}" placeholder="(555) 555-5555" style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;">
        </div>
      </div>

      <div id="step6-error-banner-target" style="display: none; padding: 14px; background: #fef2f2; border: 1px solid #fca5a5; color: #991b1b; border-radius: 6px; margin-bottom: 20px; font-size: 0.9rem;"></div>

      <!-- STRIPE ISOLATION MOUNTING TARGET BOX -->
      <div id="stripe-payment-element-mount-point" style="margin-bottom: 24px; min-height: 150px; width: 100%;"></div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box;">
        <button type="button" id="wizardBackBtnElement" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Back</button>
        <button type="button" id="wizardSubmitBtnElement" style="background: #047857; border: none; color: white; padding: 12px 32px; border-radius: 6px; font-weight: 700; cursor: pointer;">
          <span id="wizardSubmitBtnDefaultState"> Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i> </span>
          <span id="wizardSubmitBtnLoadingState" style="display: none;"> <i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds... </span>
        </button>
      </div>
    `;

    // 🎯 FIX: Live Input Synchronization with Runtime Payload Object
    const syncInputsToPayload = () => {
      if (!window.currentOrderCorePayload) window.currentOrderCorePayload = {};
      window.currentOrderCorePayload.first_name = document.getElementById("portal_user_first_name")?.value || "";
      window.currentOrderCorePayload.last_name = document.getElementById("portal_user_last_name")?.value || "";
      window.currentOrderCorePayload.email_address = document.getElementById("portal_user_email_input")?.value || "";
      window.currentOrderCorePayload.phone_number = document.getElementById("portal_user_phone")?.value || "";
    };

    document.getElementById("portal_user_first_name")?.addEventListener("input", syncInputsToPayload);
    document.getElementById("portal_user_last_name")?.addEventListener("input", syncInputsToPayload);
    document.getElementById("portal_user_email_input")?.addEventListener("input", syncInputsToPayload);
    document.getElementById("portal_user_phone")?.addEventListener("input", syncInputsToPayload);

    document.getElementById("wizardBackBtnElement")?.addEventListener("click", () => {
      if (typeof window.goToPreviousWizardStep === 'function') {
        window.goToPreviousWizardStep();
      }
    });
  };
})();


// ============================================================================ //
// // FILE 2: STRIPE_ELEMENTS_MOUNT.JS (REPAIRED & ROUTED)
// ============================================================================ //
(function() {
  "use strict";

  async function executeStripeMountingPipeline(total) {
    const errorBanner = document.getElementById("step6-error-banner-target");
    const targetNode = document.getElementById('stripe-payment-element-mount-point');
    const trackingInput = document.getElementById("schema_orders_tracking_number");
    const submitBtn = document.getElementById("wizardSubmitBtnElement");
    const btnDefaultText = document.getElementById("wizardSubmitBtnDefaultState");
    const btnLoadingText = document.getElementById("wizardSubmitBtnLoadingState");

    if (!targetNode) {
      console.error("✕ [Stripe Mount Error]: '#stripe-payment-element-mount-point' absent from DOM layout.");
      return;
    }

    function showCheckoutError(message) {
      if (errorBanner) {
        errorBanner.textContent = message;
        errorBanner.style.display = "block";
      }
      resetSubmitButtonState();
    }

    function resetSubmitButtonState() {
      if (submitBtn) submitBtn.removeAttribute("disabled");
      if (btnDefaultText) btnDefaultText.style.display = "inline-block";
      if (btnLoadingText) btnLoadingText.style.display = "none";
    }

    function setSubmitButtonLoading() {
      if (submitBtn) submitBtn.setAttribute("disabled", "true");
      if (btnDefaultText) btnDefaultText.style.display = "none";
      if (btnLoadingText) btnLoadingText.style.display = "inline-block";
    }

    try {
      // 1. GATHER LIVE INPUTS FROM THE CONTACT FORM FIELDS
      let firstName = document.getElementById("portal_user_first_name")?.value.trim() || localStorage.getItem("first_name") || "";
      let lastName = document.getElementById("portal_user_last_name")?.value.trim() || localStorage.getItem("last_name") || "";
      let emailAddress = document.getElementById("portal_user_email_input")?.value.trim() || localStorage.getItem("email_address") || "";
      let phoneNumber = document.getElementById("portal_user_phone")?.value.trim() || localStorage.getItem("phone_number") || "";
      
      const compName = document.getElementById("schema_orders_company_name")?.value || localStorage.getItem("company_name") || "Not Specified";
      const servTitle = document.getElementById("schema_orders_service_title")?.value || localStorage.getItem("service_title") || "Corporate Asset Filing Package";
      const planTier = document.getElementById("schema_orders_plan_tier")?.value || localStorage.getItem("selected_plan") || "standard";
      
      // 🎯 FIX 1: Resolve the tracking number safely from your active DOM or Storage definitions
      const activeTrackingToken = trackingInput?.value || localStorage.getItem("f4u_active_tracking_token") || localStorage.getItem("tracking_number") || "F4U-RECONCILE";

      // Clean up any rogue system placeholders instantly before validation checks
      const placeholders = ["pending input", "pending", "empty", "not specified", "null", "undefined"];
      if (placeholders.includes(firstName.toLowerCase())) firstName = "";
      if (placeholders.includes(lastName.toLowerCase())) lastName = "";
      if (placeholders.includes(emailAddress.toLowerCase())) emailAddress = "";
      if (placeholders.includes(phoneNumber.toLowerCase())) phoneNumber = "";

      // Save verified properties straight into your runtime state to keep the submission bundle unified
      window.currentOrderCorePayload = {
        company_name: compName,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email_address: emailAddress,
        service_title: servTitle,
        plan_tier: planTier,
        total_fee: total,
        tracking_number: activeTrackingToken,
        selected_upsells: localStorage.getItem("selected_upsells") || "None Selected"
      };

      console.log("✅ [Stripe Flow Engine] Data fields packaged successfully into local runtime context. Standby for payment confirmation trigger...");



    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to initialize financial checkout gateway parameters.");
    }

    // 🎯 FIX 1: Read JSON token safely without multi-read stream lock crashes
    const checkoutSessionData = await response.json();
    const finalizedSecret = checkoutSessionData.clientSecret;
    const returnedTrackingNumber = checkoutSessionData.trackingNumber;

    // Overwrite the UI inputs and localStorage with your clean server-generated tracking number
    if (returnedTrackingNumber && !returnedTrackingNumber.includes("UNKNOWN")) {
      console.log(`🎯 Real tracking code generated by edge worker: ${returnedTrackingNumber}`);
      localStorage.setItem("tracking_number", returnedTrackingNumber);
      if (trackingInput) {
        trackingInput.value = returnedTrackingNumber;
      }
    }

    // 3. MOUNT STRIPE ELEMENTS SECURELY USING FLAT REBRANDING INTERFACE PARAMETERS
    if (!window.stripeInstance && window.Stripe) {
      window.stripeInstance = window.Stripe("pk_test_51TTy4i0dNjSlvyScX676lZwB34Lby8nEuv0sRorwo6kGYKkTJYiTyPQA6PVjzwUSjB9Kz90LdHtCh2E1BTMMEkTX00HCLPKUkf");
    }

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
      console.error("✕ [Stripe Framework Load Error Intercepted]:", errEvent.error);
    });

    // Clear the target node workspace and mount the iframe cleanly
    targetNode.innerHTML = "";
    window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point');
    console.log("✅ [Stripe Engine] Secured card iframe mounted successfully.");

    // 4. BIND CLICK EVENT TO THE PRIMARY ACTION BUTTON
    if (submitBtn) {
      const freshSubmitBtn = submitBtn.cloneNode(true);
      submitBtn.parentNode.replaceChild(freshSubmitBtn, submitBtn);

      freshSubmitBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        setSubmitButtonLoading();

        if (errorBanner) {
          errorBanner.style.display = "none";
          errorBanner.textContent = "";
        }

        // Gather what the user typed right now instead of database defaults
        const liveFirstName = document.getElementById("portal_user_first_name")?.value.trim() || "";
        const liveLastName = document.getElementById("portal_user_last_name")?.value.trim() || "";
        const liveEmailAddress = document.getElementById("portal_user_email_input")?.value.trim() || "";
        const livePhoneNumber = document.getElementById("portal_user_phone")?.value.trim() || "";

        if (!liveFirstName || !liveLastName || !liveEmailAddress || !livePhoneNumber) {
          showCheckoutError("✕ Form Verification Failure: Please fill in all profile contact fields.");
          return;
        }

        const activeTrackingCode = localStorage.getItem("tracking_number") || returnedTrackingNumber || "F4U-UNKNOWN";

        // 🎯 FIX 2: Attach data explicitly to the confirmation payload using Stripe Shipping Metadata rules
        const { error: stripeConfirmationError } = await window.stripeInstance.confirmPayment({
          elements: window.stripeElementsContainer,
          confirmParams: {
            return_url: `https://filings4u.com?token=${encodeURIComponent(activeTrackingCode)}`,
            receipt_email: liveEmailAddress,
            shipping: {
              name: `${liveFirstName} ${liveLastName}`.trim(),
              phone: livePhoneNumber,
              address: {
                line1: "Form Checkout Layer",
                postal_code: activeTrackingCode, // We can bundle the tracking key safely inside the routing structure here
                country: "US"
              }
            },
            payment_method_data: {
              billing_details: {
                name: `${liveFirstName} ${liveLastName}`.trim(),
                email: liveEmailAddress,
                phone: livePhoneNumber
              }
            }
          }
        });

        if (stripeConfirmationError) {
          showCheckoutError(stripeConfirmationError.message || "An operational payment decline exception occurred.");
        }
      });
    }
  } catch (scopeException) {
    console.error("✕ [Stripe Mounting Fatal Exception Context]", scopeException);
    showCheckoutError(scopeException.message || "A network transaction interface bottleneck disrupted processing workflows.");
  }
}

window.executeStripeMountingPipeline = executeStripeMountingPipeline;
})();


// ============================================================================ //
// FILE 3: INTERACTION_CONTROLLER.JS (FIXED)
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

    // 🎯 SCHEMA MATCH PIPELINE: Maps inputs directly to your explicit database column properties
    const elementKeyMaps = {
      "portal_user_first_name": "first_name",
      "portal_user_last_name": "last_name",
      "portal_user_email_input": "email_address",
      "portal_user_phone": "phone_number"
    };

    inputs.forEach(id => {
      const inputTarget = document.getElementById(id);
      if (!inputTarget) return;

      // 🎯 FIX: Explicitly strip out historical validation styling classes before re-evaluating
      inputTarget.classList.remove("field-validated-emerald", "field-error-shake", "invalid-shake-trigger");

      if (!inputTarget.value.trim() || (inputTarget.required && !inputTarget.checkValidity())) {
        inputTarget.classList.add("field-error-shake");
        textFieldsValid = false;
      } else {
        inputTarget.classList.add("field-validated-emerald");
        
        // 🎯 STRICT SYSTEM UPDATE: Locks parameters down using exact database schema layout keys
        localStorage.setItem(elementKeyMaps[id], inputTarget.value.trim());
      }
    });

    return textFieldsValid;
  }

  window.validateBaseProfileMatrix = validateBaseProfileMatrix;
})();


window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  const errorBanner = document.getElementById("step6-error-banner-target");
  const trackingNumberToken = localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";
  
  if (!window.stripeElementsContainer) {
    throw new Error("Stripe iframe layout elements are uninitialized. Check network configuration.");
  }
  
  console.log("[Supabase Gateway] Launching standard Stripe runtime payment processing handler...");
  
  try {
    // 🎯 SECURE CHECKOUT HARMONIZATION: Pull capture fields out of synchronized local DOM keys
    const captureFirstName = document.getElementById("portal_user_first_name")?.value.trim() || localStorage.getItem("first_name") || "";
    const captureLastName = document.getElementById("portal_user_last_name")?.value.trim() || localStorage.getItem("last_name") || "";
    const captureEmail = document.getElementById("portal_user_email_input")?.value.trim() || localStorage.getItem("email_address") || "";
    const capturePhone = document.getElementById("portal_user_phone")?.value.trim() || localStorage.getItem("phone_number") || "";
    
    // Pull metadata choices from your running wizard memory footprint
    const compName = document.getElementById("schema_orders_company_name")?.value || localStorage.getItem("company_name") || "Not Specified";
    const servTitle = document.getElementById("schema_orders_service_title")?.value || localStorage.getItem("service_title") || "Corporate Asset Filing Package";
    const planTier = document.getElementById("schema_orders_plan_tier")?.value || localStorage.getItem("selected_plan") || "standard";
    const chosenUpsells = localStorage.getItem("selected_upsells") || "None Selected";

    const StripeConfirmationResult = await window.stripeInstance.confirmPayment({
      elements: window.stripeElementsContainer,
      redirect: "if_required", // Clean explicit syntax string handles inline step transitions safely
      confirmParams: {
        return_url: `https://portal.filings4u.com/client-status.html?token=${encodeURIComponent(trackingNumberToken)}`,
        receipt_email: captureEmail || undefined,
        
        // 🎯 FIX: Bundle all customer details inside the Stripe shipping tree so your webhook can read it
        shipping: {
          name: `${captureFirstName} ${captureLastName}`.trim(),
          phone: capturePhone || undefined,
          address: {
            line1: "Wizard Form Checkout Layer",
            city: compName.substring(0, 35),      // Pass company name safely inside structural lines
            state: planTier.substring(0, 10),     // Pass tier choice safely
            postal_code: trackingNumberToken,     // Pass your unique F4U tracking reference string 
            country: "US"
          }
        },
        
        payment_method_data: {
          billing_details: {
            name: `${captureFirstName} ${captureLastName}`.trim(),
            email: captureEmail || undefined,
            phone: capturePhone || undefined
          }
        }
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
      console.log("✅ [Transaction Complete] In-line payment authorized. State synchronized cleanly.");
      localStorage.setItem("f4u_payment_status_complete", "true");
      
      // Smooth programmatic layout fallback transition directly straight to step 7
      if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(7);
      } else if (typeof window.executeStepLifecyclePipeline === "function") {
        window.executeStepLifecyclePipeline(7);
      } else if (typeof window.showWizardStepCard === "function") {
        window.showWizardStepCard(7);
      } else {
        // Ultimate location navigation routing escape hatch if no wizard objects are exposed in window space
        window.location.href = `https://portal.filings4u.com/client-status.html?token=${encodeURIComponent(trackingNumberToken)}`;
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

// ============================================================================ //
// FILE 4: GLUE_LAYER_CONTROLLER.JS (FIXED)
// ============================================================================ //
(function() {
  "use strict";

  // 🎯 SECURE GLUE LAYER: Connect your skeleton tree button directly to this handler module execution path
  window.attachSubmitButtonController = function() {
    const paymentBtn = document.getElementById("wizardSubmitBtnElement");
    if (!paymentBtn) {
      console.warn("⚠️ [Glue Layer Exception]: Target button anchor '#wizardSubmitBtnElement' unassigned.");
      return;
    }

    // Clean out legacy event listeners to prevent duplicate submissions or dual execution tracks
    const freshPaymentBtn = paymentBtn.cloneNode(true);
    paymentBtn.parentNode.replaceChild(freshPaymentBtn, paymentBtn);

    freshPaymentBtn.addEventListener("click", async function(e) {
      e.preventDefault();
      const banner = document.getElementById("step6-error-banner-target");
      if (banner) {
        banner.style.display = "none";
        banner.textContent = "";
      }

      // 1. Verify contact profile form input validation fields before processing financial payment frames
      if (typeof window.validateBaseProfileMatrix === "function") {
        if (!window.validateBaseProfileMatrix()) {
          if (banner) {
            banner.innerText = "✕ Please complete all required profile verification fields securely.";
            banner.style.display = "block";
          }
          return;
        }
      }

      // 2. Set layout button elements to loading state configuration rules cleanly
      this.disabled = true;
      this.setAttribute("disabled", "true");
      const btnDefaultText = document.getElementById("wizardSubmitBtnDefaultState");
      const btnLoadingText = document.getElementById("wizardSubmitBtnLoadingState");
      
      if (btnDefaultText) btnDefaultText.style.display = "none";
      if (btnLoadingText) {
        btnLoadingText.style.display = "inline-block";
      } else {
        this.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...`;
      }

      // 3. Extract final statement price calculations dynamically out of the active user viewport
      const totalDisplayNode = document.getElementById("payment-gateway-total-display");
      const activeTotal = totalDisplayNode ? parseFloat(totalDisplayNode.textContent.replace('$', '')) : parseFloat(window.computedWizardGrandTotalAmount || "0");

      // 4. Smoothly hand execution off directly to Stripe's confirmation network layer engine
      if (typeof window.executeSecurePaymentConfirmationPipeline === "function") {
        await window.executeSecurePaymentConfirmationPipeline(activeTotal, this);
      } else {
        console.warn("⚠️ [Glue Layer Alert]: Core payment confirmation method reference unassigned.");
      }
    });
  };

  /**
   * STRICT AUTOMATION HOOK: Passes cleanly structured database columns into the Edge Function gateway
   */
  window.fetchClientSecretAndMountStripeElement = async function(finalAmountDue) {
    console.log("📡 [Supabase Pre-Fetch] Lazy loading clientSecret...");
    
    const trackingNumberToken = localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

    // Capture parameters with comprehensive storage fallbacks
    const captureUserFirstName = document.getElementById("portal_user_first_name")?.value.trim() || localStorage.getItem("first_name") || localStorage.getItem("wizard_field_first_name") || localStorage.getItem("poa_first_name") || "";
    const captureUserLastName = document.getElementById("portal_user_last_name")?.value.trim() || localStorage.getItem("last_name") || localStorage.getItem("wizard_field_last_name") || localStorage.getItem("poa_last_name") || "";
    const captureUserEmail = document.getElementById("portal_user_email_input")?.value.trim() || localStorage.getItem("email_address") || localStorage.getItem("email") || localStorage.getItem("wizard_field_email") || "";
    const captureUserPhone = document.getElementById("portal_user_phone")?.value.trim() || localStorage.getItem("phone_number") || localStorage.getItem("phone") || localStorage.getItem("wizard_field_phone") || "";
    
    const upsellItemsArray = JSON.parse(localStorage.getItem("selected_upsells")) || [];
    const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";
    
    // 🎯 FIX 1: Aligned variable names to prevent reference crashes
    const targetSelectedPlan = localStorage.getItem("selected_plan") || "Standard Filing Package";
    const resolvedCompanyName = localStorage.getItem("company_name") || localStorage.getItem("wizard_company_name") || "Not Specified";

    // 🎯 THE RUNTIME PRE-FETCH GUARD: Halt early background loops instantly if fields are currently empty
    if (!captureUserEmail || captureUserEmail.trim() === "") {
      console.warn("⚠️ [Pre-Fetch Guard] Postponing background intent call: Payer email variable is blank.");
      return; 
    }

    // Map variables directly to top-level object fields to match Edge Function parsing logic
    const profileTransactionPayload = {
      tracking_number: trackingNumberToken,
      first_name: captureUserFirstName,
      last_name: captureUserLastName,
      email: captureUserEmail.toLowerCase(),
      emailAddress: captureUserEmail.toLowerCase(),
      phone_number: captureUserPhone,
      company_name: resolvedCompanyName,
      service_title: targetSelectedPlan, // 🎯 FIXED: Corrected reference mismatch variable crash
      total_fee: parseFloat(finalAmountDue),
      collected_payload_metadata: {
        selected_upsells: flatUpsellsString,
        total_fee: parseFloat(finalAmountDue)
      }
    };

    try {
      // NOTE: Ensure your endpoint accurately matches your payment intent generation router on the server
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

      // Save token to localStorage to allow mounting module to read it natively
      localStorage.setItem("f4u_stripe_client_secret", serverSecret);

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
        mountTarget.innerHTML = `<p style="color:#ef4444; font-size:13px; font-weight:700;">Secure checkout window timed out. Please try refreshing.</p>`;
      }
    }
  };
})();


// =================================================================================== //
// step-6.js - PARTS 4 & 5 CONSOLIDATED: SYNTAX-VALID RUNTIME ENGINE
// =================================================================================== //
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  const errorBanner = document.getElementById("step6-error-banner-target");
  
  // 🎯 STRICT SCHEMA SYNC: Query parameters using strict public.orders key formats
  const trackingNumberToken = localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";
  const captureFirstName = document.getElementById("portal_user_first_name")?.value.trim() || localStorage.getItem("first_name") || "";
  const captureLastName = document.getElementById("portal_user_last_name")?.value.trim() || localStorage.getItem("last_name") || "";
  const captureEmail = document.getElementById("portal_user_email_input")?.value.trim() || localStorage.getItem("email_address") || "";
  const capturePhone = document.getElementById("portal_user_phone")?.value.trim() || localStorage.getItem("phone_number") || "";
  const captureCompany = localStorage.getItem("company_name") || "Not Specified";

  if (!captureEmail || !captureFirstName || !captureLastName || !capturePhone) {
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

  const activeSelectedPlan = localStorage.getItem("selected_plan") || window.currentOrderCorePayload?.service_title || "Standard Package";
  const upsellItemsArray = JSON.parse(localStorage.getItem("selected_upsells")) || [];
  const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";
  const poaSignature = localStorage.getItem("poa_signature") || "Digitally Executed";

  // 🎯 STRICT SCHEMA MATRIX: Map variables to match public.orders database constraints exactly
  const profileTransactionPayload = {
    tracking_number: trackingNumberToken,
    first_name: captureFirstName,
    last_name: captureLastName,
    email_address: captureEmail.toLowerCase(),
    phone_number: capturePhone,
    company_name: captureCompany,
    selected_plan: activeSelectedPlan,
    selected_upsells: flatUpsellsString,
    total_paid_amount: parseFloat(finalAmountDue),
    poa_signature: poaSignature,
    poa_execution_stamp: new Date().toISOString(),
    stripe_payment_id: window.stripeClientSecret ? window.stripeClientSecret.split('_secret_')[0] : "f4u_checkout_token",
    account_created: false
  };

  try {
    // 1. Safe Client Database Logging via standard select/insert logic to bypass the ON CONFLICT bug
    const client = window.supabaseInstance || window.supabaseClient;
    if (client && typeof client.from === 'function') {
      console.log("📡 [Supabase Orders Logging] Preserving customer order variables inside data grid...");
      
      const { data: existingRow } = await client
        .from('orders')
        .select('id')
        .eq('tracking_number', trackingNumberToken)
        .maybeSingle();

      if (existingRow) {
        const { error: dbUpdateErr } = await client
          .from('orders')
          .update(profileTransactionPayload)
          .eq('id', existingRow.id);
        
        if (dbUpdateErr) throw new Error(`Database Update failed: ${dbUpdateErr.message}`);
      } else {
        const { error: dbInsertErr } = await client
          .from('orders')
          .insert([profileTransactionPayload]);
        
        if (dbInsertErr) throw new Error(`Database Insert failed: ${dbInsertErr.message}`);
      }
      console.log("✅ [Supabase Logging] Order rows written successfully.");
    }

    // 2. SUBMIT CONTEXT VIA STRIPE DEFERRED PAYMENT ELEMENT IFRAMES
    if (window.stripeElementsContainer) {
      console.log("[Stripe Controller] Submitting payment components context...");
      const stripeSubmitResult = await window.stripeElementsContainer.submit();
      
      if (stripeSubmitResult && stripeSubmitResult.error) {
        if (submitButtonNode) {
          submitButtonNode.disabled = false;
          submitButtonNode.style.opacity = "1";
          submitButtonNode.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
        }
        if (errorBanner) {
          errorBanner.style.display = "block";
          errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> ${stripeSubmitResult.error.message}`;
        }
        return false;
      }

      const isMockSecret = String(window.stripeClientSecret || "").startsWith("pi_mock_intent_");
      
      if (window.stripeInstance && !isMockSecret) {
        console.log("[Stripe Submission Engine] Dispatching secure transactional parameters over network...");
        
        // 🎯 FIX: Explicitly package your shipping parameters down into the confirmation parameters object
        const { error: confirmError } = await window.stripeInstance.confirmPayment({
          elements: window.stripeElementsContainer,
          clientSecret: window.stripeClientSecret,
          redirect: "if_required",
          confirmParams: {
            return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${trackingNumberToken}`,
            receipt_email: captureEmail.toLowerCase(),
            shipping: {
              name: `${captureFirstName} ${captureLastName}`.trim(),
              phone: capturePhone,
              address: {
                line1: "Form Wizard Payment Layer",
                city: captureCompany.substring(0, 35),
                state: activeSelectedPlan.substring(0, 10),
                postal_code: trackingNumberToken,
                country: "US"
              }
            }
          }
        });

        if (confirmError) {
          if (submitButtonNode) {
            submitButtonNode.disabled = false;
            submitButtonNode.style.opacity = "1";
            submitButtonNode.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
          }
          if (errorBanner) {
            errorBanner.style.display = "block";
            errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> ${confirmError.message}`;
          }
          return false;
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

          const { data: existingMockRow } = await dbClient
            .from('orders')
            .select('id')
            .eq('tracking_number', trackingNumberToken)
            .maybeSingle();

          if (existingMockRow) {
            const { error: mockUpdateError } = await dbClient
              .from('orders')
              .update(sandboxDatabaseRowUpsertNode)
              .eq('id', existingMockRow.id);
            
            if (mockUpdateError) throw new Error(mockUpdateError.message);
          } else {
            const { error: mockInsertError } = await dbClient
              .from('orders')
              .insert([sandboxDatabaseRowUpsertNode]);
            
            if (mockInsertError) throw new Error(mockInsertError.message);
          }
          console.log("✅ Sandbox Sync Complete: Test transaction record marked inside public.orders.");
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
// step-6.js - BUTTON HANDLER CONFIGURATION (PART 1 - FIXED)                    //
// ============================================================================ //
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
  "use strict";
  
  const submitBtn = submitButtonNode || document.getElementById("wizardSubmitBtnElement");
  const errorBanner = document.getElementById("step6-error-banner-target");
  
  // 🎯 THE DIRECT FIX: Read the true database token painted inside your layout input box!
  const trackingInputNode = document.getElementById("schema_orders_tracking_number");
  const uniqueTrackingToken = trackingInputNode ? trackingInputNode.value.trim() : (localStorage.getItem("tracking_number") || "F4U-RECONCILE");

  const firstNameNode = document.getElementById("portal_user_first_name");
  const lastNameNode = document.getElementById("portal_user_last_name");
  const emailInputNode = document.getElementById("portal_user_email_input");
  const phoneInputNode = document.getElementById("portal_user_phone");

  const firstName = firstNameNode ? firstNameNode.value.trim() : "";
  const lastName = lastNameNode ? lastNameNode.value.trim() : "";
  const finalEmail = emailInputNode ? emailInputNode.value.trim().toLowerCase() : "";
  const phone = phoneInputNode ? phoneInputNode.value.trim() : "";


  // Pull secondary environment parameters from local memory
  const companyName = (localStorage.getItem("company_name") || localStorage.getItem("wizard_field_company_name") || "Not Specified").trim();
  const trackingNumberToken = (localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "").trim();
  
  const rawTotalText = document.getElementById("payment-gateway-total-display")?.textContent || "";
  const parsedDOMCost = parseFloat(rawTotalText.replace(/[^0-9.]/g, ""));
  const activeGrandCost = !isNaN(parsedDOMCost) ? parsedDOMCost : finalAmountDue;
  
  const supabaseClient = window.supabaseInstance || window.supabaseClient;

  try {
    // 1. FRONTEND DATA PROFILE VALIDATION SENSORS
    if (!firstName || !lastName || !finalEmail || !phone) {
      throw new Error("Validation failed: Please fill out your First Name, Last Name, Email, and Phone Number.");
    }

    const bannedPlaceholders = ["pending input", "pending", "empty", "not specified", "null", "undefined"];
    if (bannedPlaceholders.includes(firstName.toLowerCase()) || bannedPlaceholders.includes(lastName.toLowerCase())) {
      throw new Error("Validation failed: Please enter a valid first and last name to verify your operational profile.");
    }

    if (!trackingNumberToken || bannedPlaceholders.includes(trackingNumberToken.toLowerCase())) {
      throw new Error("System configuration alert: Active tracking reference token missing.");
    }

    console.log("⏳ [Stripe Runtime] Validating input parameters context over .submit()...");
    const { error: submitValidationError } = await window.stripeElementsContainer.submit();
    
    if (submitValidationError) {
      if (errorBanner) {
        errorBanner.innerText = submitValidationError.message;
        errorBanner.style.display = "block";
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
      }
      return false;
    }

    console.log("⏳ [Stripe Runtime] Dynamic Amount Verified: $" + activeGrandCost + ". Launching checkout window...");

    const selectedPlan = localStorage.getItem("wizard_selected_plan") || localStorage.getItem("selected_plan") || window.currentOrderCorePayload?.service_title || "Corporate Asset Filing Package";
    
    let flatUpsellsString = "None Selected";
    try {
      const cachedUpsells = localStorage.getItem("selected_upsells");
      if (cachedUpsells && cachedUpsells.trim() !== "" && cachedUpsells.startsWith("[")) {
        const upsellItemsArray = JSON.parse(cachedUpsells);
        if (Array.isArray(upsellItemsArray) && upsellItemsArray.length > 0) {
          flatUpsellsString = upsellItemsArray.join(", ");
        }
      } else if (cachedUpsells && !cachedUpsells.includes("None Selected")) {
        flatUpsellsString = cachedUpsells;
      }
    } catch (jsonErr) {
      console.warn("[Upsell Parser fallback] Overriding legacy string array syntax errors:", jsonErr);
    }

    const poaSignature = localStorage.getItem("wizard_poa_signature") || localStorage.getItem("poa_signature") || localStorage.getItem("wizard_field_poa_signature_string") || "Digitally Executed";
    const targetSecretToken = window.stripeClientSecret || localStorage.getItem("f4u_stripe_client_secret") || "";

    // 🎯 STRICT SCHEMA MATRIX: Map variables to match public.orders database constraints exactly
    const orderRecordPayload = {
      tracking_number: trackingNumberToken.trim(),
      first_name: firstName,
      last_name: lastName,
      email_address: finalEmail,
      phone_number: phone,
      company_name: companyName.trim(),
      selected_plan: selectedPlan.trim(),
      selected_upsells: flatUpsellsString,
      total_paid_amount: parseFloat(activeGrandCost),
      poa_signature: poaSignature.trim(),
      poa_execution_stamp: new Date().toISOString(),
      stripe_payment_id: targetSecretToken ? targetSecretToken.split('_secret_')[0] : "f4u_checkout_token",
      account_created: false
    };

    // 2. SAFE PRE-CHECKOUT DATABASE BACKUP LOGGING (REPAIRED)
    if (supabaseClient && typeof supabaseClient.from === 'function') {
      console.log("📡 [Supabase Operations Logs] Pushing custom HTML form strings down to schema records...");
      
      const { data: matchedRow } = await supabaseClient
        .from('orders')
        .select('id')
        .eq('tracking_number', trackingNumberToken.trim())
        .maybeSingle();

      if (matchedRow) {
        const { error: dbUpdateErr } = await supabaseClient
          .from('orders')
          .update(orderRecordPayload)
          .eq('id', matchedRow.id);
        
        if (dbUpdateErr) throw new Error(`Database record synchronization failed: ${dbUpdateErr.message}`);
      } else {
        const { error: dbInsertErr } = await supabaseClient
          .from('orders')
          .insert([orderRecordPayload]);
        
        if (dbInsertErr) throw new Error(`Database record synchronization failed: ${dbInsertErr.message}`);
      }
      console.log("✅ [Supabase Inline Write] Clean form elements successfully written to public.orders table.");
    }

    console.log("💳 Dispatching secure transactional parameters over network...");

      // ============================================================================ //
    // 📁 step-6.js - DYNAMIC TRANSACTION AUTHORIZATION LAYER (PART 1 - FIXED)      //
    // ============================================================================ //
    const StripeConfirmationResult = await window.stripeInstance.confirmPayment({
      elements: window.stripeElementsContainer,
      clientSecret: targetSecretToken,
      redirect: "if_required",
      confirmParams: {
        return_url: `${window.location.origin}/client-status.html?token=${encodeURIComponent(uniqueTrackingToken)}`,
        receipt_email: finalEmail,
        
        // 🎯 FIXED: Every customer now gets their own unique F4U tracking number dynamically mapped here
        shipping: {
          name: `${firstName} ${lastName}`.trim(),
          phone: phone,
          address: {
            line1: "Form Wizard Payment Layer",
            city: companyName.substring(0, 35),
            state: selectedPlan.substring(0, 10),
            postal_code: uniqueTrackingToken, // ✅ Dynamically passes their specific F4U token to the email engine
            country: "US"
          }
        },
        payment_method_data: {
          billing_details: {
            name: `${firstName} ${lastName}`.trim(),
            email: finalEmail,
            phone: phone
          }
        }
      }
    });
// ============================================================================ //
// 📁 step-6.js - DYNAMIC TRANSACTION AUTHORIZATION LAYER (PART 2 - CONCLUDED)  //
// ============================================================================ //
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
// step-6.js - UNIFIED TRANSACTION AUTHORIZATION PIPELINE ENGINE (PART 1 - FIXED) //
// ============================================================================ //
(function() {
  "use strict";

  async function resolveStripeClientAuthorizationSecret(grandTotalAmount, trackingNumberToken) {
    try {
      console.log("[Stripe Loader] Requesting secure Payment Intent token from live production Edge Function...");
      const productionUrlGateway = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-webhook';

      // Isolate customer parameters with storage fallbacks
      const captureUserEmail = (localStorage.getItem("email_address") || "").toLowerCase().trim();
      const captureUserFirstName = (localStorage.getItem("first_name") || "").trim();
      const captureUserLastName = (localStorage.getItem("last_name") || "").trim();
      const captureUserPhone = (localStorage.getItem("phone_number") || "").trim();
      const captureCompany = (localStorage.getItem("company_name") || "").trim();
      
      const computedFilingPlan = localStorage.getItem("selected_plan") || "Corporate Filing Package";
      const upsellItemsArray = JSON.parse(localStorage.getItem("selected_upsells") || "[]");
      const flatUpsellsString = upsellItemsArray.join(", ") || "None Selected";

      // STRICT AUTHENTICATION GATING
      if (!trackingNumberToken || trackingNumberToken.includes("UNKNOWN") || !captureUserFirstName || !captureUserLastName || !captureUserEmail || !captureUserPhone || !captureCompany) {
        throw new Error("Validation failed: Real customer parameter profiles missing from memory cache layers.");
      }

      // 🎯 FIXED: Mapped keys directly to the function arguments and variables defined above to prevent crash loops
      const profileTransactionPayload = {
        tracking_number: trackingNumberToken,
        first_name: captureUserFirstName,
        last_name: captureUserLastName,
        email: captureUserEmail,
        emailAddress: captureUserEmail,
        phone_number: captureUserPhone,
        company_name: captureCompany,
        service_title: computedFilingPlan,
        total_fee: parseFloat(grandTotalAmount),
        collected_payload_metadata: {
          selected_upsells: flatUpsellsString,
          total_fee: parseFloat(grandTotalAmount)
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

      // Save the exact, unmodified session secret token to the window scope and local storage natively
      localStorage.setItem("f4u_stripe_client_secret", verifiedCleanSecret);
      
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
          window.executeStripeMountingPipeline(total);
        } else {
          console.error("✕ [Stripe Pipeline Engine Fatal Error]: window.executeStripeMountingPipeline is not defined in memory context.");
        }
      }, 50);
    } catch (error) {
      const errorBanner = document.getElementById("step6-error-banner-target");
      if (errorBanner) {
        errorBanner.style.display = "block";
        errorBanner.innerHTML = `🚨 <strong>Initialization Failure:</strong> ${error.message || "Unable to process financial connection tokens."}`;
      }
    }
  };
})();


// ============================================================================ //
// step-6.js - UNIFIED PAYLOAD SUBMIT PIPELINE ENGINE (PART 1 - FIXED)           //
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

    // 🎯 RE-SYNC DYNAMIC STORAGE STATES FOR STEP 7 PERSISTENCE
    localStorage.setItem("wizard_first_name", firstName);
    localStorage.setItem("wizard_last_name", lastName);
    localStorage.setItem("wizard_email_address", finalEmail);
    localStorage.setItem("wizard_phone_number", phone);

    const rawTextTotal = document.getElementById("payment-gateway-total-display")?.textContent || "";
    const parsedDOMCost = parseFloat(rawTextTotal.replace(/[^0-9.]/g, ""));
    const activeGrandCost = !isNaN(parsedDOMCost) ? parsedDOMCost : 0;

    if (activeGrandCost <= 0) {
      throw new Error("Unable to authorize funds: Payment calculation total is uninitialized.");
    }

    if (submitBtn) submitBtn.disabled = true;
    if (btnDefaultState) btnDefaultState.style.display = "none";
    if (btnLoadingState) btnLoadingState.style.display = "inline-block";

    const companyNameParameter = document.getElementById("schema_orders_company_name")?.value || localStorage.getItem("f4u_company_name") || "";
    const trackingNumberToken = document.getElementById("schema_orders_tracking_number")?.value || localStorage.getItem("f4u_active_tracking_token") || "";
    
    const targetStepPlan = localStorage.getItem("wizard_selected_plan") || localStorage.getItem("wizard_field_selected_package_offering") || "Corporate Filing Package";
    
    let flatUpsellsString = "None Selected";
    try {
      const cachedUpsells = localStorage.getItem("wizard_selected_upsells");
      if (cachedUpsells && cachedUpsells.trim() !== "" && cachedUpsells.startsWith("[")) {
        const upsellItemsArray = JSON.parse(cachedUpsells);
        if (Array.isArray(upsellItemsArray) && upsellItemsArray.length > 0) {
          flatUpsellsString = upsellItemsArray.join(", ");
        }
      } else if (cachedUpsells && !cachedUpsells.includes("None Selected")) {
        flatUpsellsString = cachedUpsells;
      }
    } catch (jsonErr) {
      console.warn("[Upsell Logic Recovery] Safely bypassing legacy string layout array syntax error profiles.", jsonErr);
    }

    const poaSignatureParameter = localStorage.getItem("wizard_poa_signature") || localStorage.getItem("wizard_field_poa_signature_string") || "Digitally Executed";

    if (!companyNameParameter) throw new Error("Validation aborted: Company Name mapping parameters are completely blank.");
    if (!trackingNumberToken) throw new Error("Validation aborted: Active tracking token is unassigned.");

    const supabaseClient = window.supabaseInstance || window.supabaseClient;
    const targetSecretToken = window.stripeClientSecret || localStorage.getItem("f4u_stripe_client_secret") || "";

    const validatedDatabaseUpsertPayload = {
      tracking_number: trackingNumberToken.trim(),
      first_name: firstName,
      last_name: lastName,
      email_address: finalEmail,
      phone_number: phone,
      company_name: companyNameParameter.trim(),
      selected_plan: targetStepPlan.trim(),
      selected_upsells: flatUpsellsString.trim(),
      total_paid_amount: parseFloat(activeGrandCost.toFixed(2)),
      poa_signature: poaSignatureParameter.trim(),
      poa_execution_stamp: new Date().toISOString(),
      stripe_payment_id: targetSecretToken ? targetSecretToken.split('_secret_')[0] : "f4u_checkout_token",
      account_created: false,
      created_at: new Date().toISOString()
    };

    // 🎯 FIX 1: Safely handle pre-checkout logging using standard check-then-write conditional updates
    if (supabaseClient) {
      console.log("📡 [Supabase Operations Logs] Checking existing database records...");
      const { data: matchedRow } = await supabaseClient
        .from('orders')
        .select('id')
        .eq('tracking_number', trackingNumberToken.trim())
        .maybeSingle();

      if (matchedRow) {
        const { error: dbUpdateErr } = await supabaseClient
          .from('orders')
          .update(validatedDatabaseUpsertPayload)
          .eq('id', matchedRow.id);
        
        if (dbUpdateErr) throw new Error(`Pre-Sync Database Update Failed: ${dbUpdateErr.message}`);
      } else {
        const { error: dbInsertErr } = await supabaseClient
          .from('orders')
          .insert([validatedDatabaseUpsertPayload]);
        
        if (dbInsertErr) throw new Error(`Pre-Sync Database Insert Failed: ${dbInsertErr.message}`);
      }
      console.log("✅ [Supabase Operations Logs] Orders table state safely buffered on data grid.");
    }

// ============================================================================ //
// step-6.js - UNIFIED PAYLOAD SUBMIT PIPELINE ENGINE (PART 2 - CONCLUDED)       //
// ============================================================================ //
    // B. SECURE STRIPE PROCESSING
    if (window.stripeElementsContainer && window.stripeInstance && window.stripeClientSecret) {
      console.log("[Stripe Controller] Submitting payment components schema context...");
      const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
      if (stripeSubmitError) throw stripeSubmitError;

      console.log("[Stripe Controller] Launching native billing confirmation challenge over network...");
      
      // 🎯 FIX 2: Attach customer profile and tracking number directly to Stripe's payment network layer
      const { error: confirmError } = await window.stripeInstance.confirmPayment({
        elements: window.stripeElementsContainer,
        clientSecret: window.stripeClientSecret,
        redirect: "if_required",
        confirmParams: {
          return_url: `${window.location.origin}/client-status.html?token=${encodeURIComponent(trackingNumberToken)}`,
          receipt_email: finalEmail,
          shipping: {
            name: `${firstName} ${lastName}`.trim(),
            phone: phone,
            address: {
              line1: "Form Wizard Payment Layer",
              city: companyNameParameter.substring(0, 35),
              state: targetStepPlan.substring(0, 10),
              postal_code: trackingNumberToken, // 🎯 Essential: Securely bundles tracking ID into the Stripe Webhook payload
              country: "US"
            }
          }
        }
      });

      if (confirmError) throw confirmError;

// ============================================================================ //
// step-6.js - SUCCESS ROUTING ALIGNMENT (PART 1 - FIXED)                       //
// ============================================================================ //
      console.log("✅ [Transaction Complete] Stripe payment verified in-line. Transitioning views...");
      localStorage.setItem("f4u_payment_status_complete", "true");

      // ============================================================================ //
      // 🔄 BRIDGE CONFIGURATION: ASSEMBLE MANIFEST FOR STEP-7 RENDERING SESSIONS    //
      // ============================================================================ //
      const companyNameParameter = document.getElementById("schema_orders_company_name")?.value || localStorage.getItem("f4u_company_name") || "";
      const subtotalAmount = parseFloat(window._tempCalcContext?.baseTierPrice || window._tempAddonContext?.baseTierPrice || activeGrandCost);
      const selectedPlanTitle = localStorage.getItem("wizard_selected_plan") || localStorage.getItem("selected_plan") || "Corporate Filing Package";

      const blueprintReceiptManifest = {
        transaction_hash_id: uniqueTrackingToken, // 🎯 FIXED: Directs token metrics using your active tracking variable
        communications_email: finalEmail,
        legal_entity_name: companyNameParameter,
        taxpayer_ein: localStorage.getItem("wizard_field_ein") || "Processing Summary...",
        office_address_street: localStorage.getItem("wizard_field_principal_address") || "Form Submission Record Entry",
        selected_package_title: `filings4u Processing Fee (${selectedPlanTitle.toUpperCase()})`,
        financials_subtotal_amount: subtotalAmount,
        financials_grand_total_charge: activeGrandCost
      };

      sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(blueprintReceiptManifest));
      localStorage.setItem("f4u_active_tracking_token", uniqueTrackingToken);
      localStorage.setItem("wizard_field_lead_email", finalEmail);


     // ============================================================================ //
// step-6.js - SUCCESS ROUTING ALIGNMENT (PART 2 - CONCLUDED)                   //
// ============================================================================ //
      // ============================================================================ //
      // 🔄 ROUTING INJECTION: BIND QUERY PARAMETERS AND EXECUTE LIFECYCLE STEP       //
      // ============================================================================ //
      const currentUrlParams = new URLSearchParams(window.location.search);
      currentUrlParams.set("step", "7");
      currentUrlParams.set("token", uniqueTrackingToken); // 🎯 FIXED: Replaced undefined reference variable with uniqueTrackingToken
      currentUrlParams.set("email", encodeURIComponent(finalEmail));

      // Append parameters into history context to satisfy step-7 URL lookups cleanly
      window.history.pushState({}, '', `${window.location.pathname}?${currentUrlParams.toString()}`);

      // Wake up your Step 7 hydration engine channels safely
      if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(7);
      } else if (typeof window.executeStepLifecyclePipeline === "function") {
        window.executeStepLifecyclePipeline(7);
      } else if (typeof window.initializeSecureStep7AccountHydration === "function") {
        window.initializeSecureStep7AccountHydration();
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
    // Reset the button visual states safely so the guest can clear corrections and click again
    if (submitBtn) submitBtn.disabled = false;
    if (btnDefaultState) btnDefaultState.style.display = "inline-block";
    if (btnLoadingState) btnLoadingState.style.display = "none";
  }
};


  // 🎯 ATTACHING MODULE SCOPE LIFE-HOOKS DIRECTLY TO THE GLOBAL WINDOW LAYERS
  window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;
  window.executeStripeMountingPipeline = executeStripeMountingPipeline;


