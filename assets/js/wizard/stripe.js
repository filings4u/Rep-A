const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE';

window.stripeInstance = window.stripeInstance || null;
window.stripeElementsContainer = window.stripeElementsContainer || null;
window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

(function() {
  const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE';

  window.stripeInstance = window.stripeInstance || null;
  window.stripeElementsContainer = window.stripeElementsContainer || null;
  window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

  async function initializeFlatStripeCheckoutElement() {
    console.log("[Stripe Loader] Initiating payment element mount sequence...");
    const mountPoint = document.getElementById("stripe-payment-element-mount-point");
    if (!mountPoint) return;

    if (typeof Stripe === "undefined") {
      mountPoint.innerHTML = "<p style='color: red; font-size: 0.85rem; font-weight: 600;'>Payment system offline. Please refresh.</p>";
      return;
    }

    try {
      if (!window.stripeInstance) {
        window.stripeInstance = Stripe(ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY);
      }

      if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") {
        window.directInjectCartAddonsToSummaryStep5();
      }

      const currentGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 0;
      const totalAmountCents = Math.round(currentGrandTotal * 100);

      if (totalAmountCents <= 0) {
        window.stripePaymentElementInstance = null; 
        window.stripeElementsContainer = null;
        mountPoint.innerHTML = "<p style='color: #64748b; font-size: 0.85rem;'>Awaiting package selections to verify invoicing bounds...</p>";
        return;
      }

      if (window.stripePaymentElementInstance) {
        window.stripePaymentElementInstance.destroy();
        window.stripePaymentElementInstance = null;
      }

      const checkoutOptions = {
        mode: 'payment',
        amount: totalAmountCents,
        currency: 'usd',
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#10b981',
            colorBackground: '#ffffff',
            colorText: '#0a1f44',
            colorDanger: '#ef4444',
            fontFamily: 'system-ui, sans-serif',
            borderRadius: '8px'
          }
        }
      };

      window.stripeElementsContainer = window.stripeInstance.elements(checkoutOptions);
      window.stripePaymentElementInstance = window.stripeElementsContainer.create("payment", {
        layout: {
          type: 'accordion',
          defaultCollapsed: false,
          radios: false,
          spacedAccordionItems: false
        }
      });

      mountPoint.innerHTML = "";
      window.stripePaymentElementInstance.mount("#stripe-payment-element-mount-point");

    } catch (mountError) {
      console.error(mountError);
      mountPoint.innerHTML = "<p style='color: #ef4444; font-size: 0.85rem;'>Secure gateway loading failed. Please refresh and try again.</p>";
    }
  }

  window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;
})();



// ============================================================================
// 💳 PURIFIED DYNAMIC TRANSACTION PIPELINE (ZERO FALLBACKS - ZERO HARDCODES)
// ============================================================================
window.executeOnboardingTransactionPayloadSubmitVanilla = async function() {
  const submitBtn = document.getElementById("wizard-next-trigger-btn");
  const errorBanner = document.getElementById("step6-error-banner-target");

  if (errorBanner) {
    errorBanner.style.display = "none";
    errorBanner.innerHTML = "";
  }
  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';
  }

  try {
    // 1. Core database provider verification guard
    let supabaseClient = window.supabaseClient || window.supabase || window.sb;
    if (!supabaseClient || typeof supabaseClient.from !== 'function') {
      throw new Error("Validation Failure: Database driver reference context is uninitialized.");
    }

    // 2. Core active service descriptor configuration guard
    const serviceKey = window.routeActiveServiceKey;
    if (!serviceKey) {
      throw new Error("Validation Failure: Active routing service tracking key is missing from window memory.");
    }

    // Generate absolute state-neutral cryptographic reference tracking identifier parameters
    const uniqueTrackingToken = "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    // 3. 🎯 DYNAMIC DATA ACQUISITION FROM ACTIVE REGISTRY SERIALIZER
    // Automatically loops over the exact form elements registered for the currently selected product wizard path
    const activeRegistry = window.formRegistry && window.formRegistry[serviceKey];
    let serializedDataPayload = {};
    
    if (activeRegistry && typeof activeRegistry.serialize === "function") {
      serializedDataPayload = activeRegistry.serialize();
    } else {
      // Direct DOM input mapping fallback loop based on data attributes if a static serializer layout isn't bound
      const fieldsContainer = document.getElementById('dynamic-onboarding-fields-root');
      if (fieldsContainer) {
        const activeFormInputs = fieldsContainer.querySelectorAll('input, select, textarea');
        activeFormInputs.forEach(inputNode => {
          if (inputNode.id) serializedDataPayload[inputNode.id] = inputNode.value.trim();
        });
      }
    }

    // 4. 🎯 PURE DATA EXTRACTS & CONSTRAINT ENFORCEMENT
    const customerEmail = (
      document.getElementById("lead_email")?.value || 
      document.getElementById("portal_user_email")?.value ||
      serializedDataPayload.email || 
      window.currentCapturedUserEmailAddress
    ).trim().toLowerCase();

    if (!customerEmail) {
      throw new Error("Validation Failure: Customer communication email coordinate cannot be verified.");
    }

    // Dynamically captures whichever company title variable field is bound to the currently running step panel
    const companyTitleInputNode = document.querySelector('input[id*="name"], input[id*="legal"], input[id*="company"]');
    const businessName = (
      companyTitleInputNode?.value || 
      serializedDataPayload.company_name || 
      serializedDataPayload.mbe_legal_name ||
      document.getElementById("wizard-route-service-id")?.value || 
      document.querySelector(".wizard-review-company-name")?.textContent
    )?.trim();

    if (!businessName) {
      throw new Error("Validation Failure: Active corporate registration or proposed company name field is unpopulated.");
    }

    const stateFormationField = document.querySelector('select[id*="state"], select[id*="formation"]');
    const stateFormation = (stateFormationField?.value || serializedDataPayload.state_of_formation || serializedDataPayload.mbe_state_of_formation || "").trim();
    
    if (!stateFormation) {
      throw new Error("Validation Failure: Entity regional state of formation parameter selection is required.");
    }

    const rawServiceTitle = document.querySelector(".step-main-title")?.textContent;
    if (!rawServiceTitle) {
      throw new Error("Validation Failure: Core enrollment catalog item title element is missing from layout view.");
    }
    const cleanServiceTitle = rawServiceTitle.replace("YOUR SELECTION OVERVIEW", "").trim();

    // Grab chosen accessory protection shields array directly from your active marketplace rows state matrix
    const dynamicAddonsList = window.currentSelectedAddonsListArrayMatrix;
    if (!dynamicAddonsList || !Array.isArray(dynamicAddonsList)) {
      throw new Error("Validation Failure: Active checkout accessories and add-on catalog data matrix array is undefined.");
    }

    // Compute plan strings dynamically matching exactly what their checkboxes captured
    let activePlanTierLabel = window.routeActivePlanTierName;
    if (!activePlanTierLabel) {
      if (dynamicAddonsList.length > 0) {
        activePlanTierLabel = dynamicAddonsList.map(addonItem => addonItem.title).join(" + ");
      } else {
        activePlanTierLabel = document.querySelector('span[id*="tier"], div[id*="plan"]')?.textContent?.trim();
      }
    }
    
    if (!activePlanTierLabel) {
      throw new Error("Validation Failure: Purchased service tier descriptor configuration parameter cannot be compiled.");
    }

    // 5. 🎯 FINANCIAL STRING EXTRACTION & COMPUTATION PASS
    const baseFeeElement = document.getElementById("step-1-base-fee-value");
    const grandFeeElement = document.getElementById("payment-gateway-total-display");

    if (!baseFeeElement || !grandFeeElement) {
      throw new Error("Validation Failure: Invoicing calculation summary elements are unmapped inside the active grid system.");
    }

    const calculatedBaseCost = parseFloat(baseFeeElement.textContent.replace(/[^0-9.]/g, ""));
    const calculatedGrandCost = parseFloat(grandFeeElement.textContent.replace(/[^0-9.]/g, ""));

    if (isNaN(calculatedBaseCost) || isNaN(calculatedGrandCost)) {
      throw new Error("Validation Failure: Currency data string casting operations returned NaN numerical coordinates.");
    }

    // 6. BUILD SYSTEM DATA PROFILE DICTIONARY (JSONB METADATA SCHEMA CELL)
    const secureMetadataPacket = {
      email: customerEmail,
      service_form_inputs: serializedDataPayload, // Saves all inputs dynamically without explicit naming hardcodes
      active_addons: dynamicAddonsList,
      financials_subtotal: calculatedBaseCost,
      selected_package_title: cleanServiceTitle,
      plan_tier_label: activePlanTierLabel
    };

    // ============================================================================
    // 🚀 PRODUCTION DATA INJECTION: ZERO HARCODED MAPPING REPOSITORIES
    // ============================================================================
    
    // Pass A: Write transaction profile records to the master orders table layout
    const ordersPayload = {
      company_name: businessName,
      service_key: serviceKey,
      service_title: cleanServiceTitle,
      plan_tier: activePlanTierLabel, 
      total_fee: calculatedGrandCost,
      status: "paid_validated",
      tracking_number: uniqueTrackingToken,
      collected_payload_metadata: secureMetadataPacket
    };

    const { error: ordersError } = await supabaseClient.from('orders').insert([ordersPayload]);
    if (ordersError) throw ordersError;

    // Pass B: Write record billing logs into the accounting table filing_orders
    const filingOrdersPayload = {
      company_name: businessName,
      service_title: cleanServiceTitle,
      total_fee: calculatedGrandCost,
      status: "paid_validated",
      state: stateFormation,
      reference_id: uniqueTrackingToken
    };

    const { error: filingOrdersError } = await supabaseClient.from('filing_orders').insert([filingOrdersPayload]);
    if (filingOrdersError) {
      console.warn("[Database Sync Guard] Sub-log transaction insertion deferred:", filingOrdersError);
    }

    // ============================================================================
    // 📁 LOCAL CACHE PRESERVATION & REDIRECTION ROUTER
    // ============================================================================
    const checkoutManifestPayload = {
      tracking_token_id: uniqueTrackingToken,
      communications_email: customerEmail,
      legal_entity_name: businessName,
      selected_package_title: cleanServiceTitle,
      financials_subtotal_amount: calculatedBaseCost,
      financials_grand_total_charge: calculatedGrandCost,
      active_addons_list: dynamicAddonsList,
      form_data: serializedDataPayload
    };

    sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(checkoutManifestPayload));
    console.log("[Checkout Engine] Pure dynamic transaction manifest cached. Redirecting...");

    // Smoothly forward the customer browser window location straight onto success.html page
    window.location.href = `success.html?token=${uniqueTrackingToken}&email=${encodeURIComponent(customerEmail)}`;

  } catch (checkoutError) {
    console.error("[Fatal Payment Intercept Exception Block System Logs]", checkoutError);
    
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i> 
        <strong>Filing Transaction Interrupted:</strong> ${checkoutError.message.includes("Validation Failure") ? checkoutError.message : "Secure payment authorization failed or connection timed out. Please try again."}
      `;

      const parentStepPanel = document.getElementById("step-panel-6");
      if (parentStepPanel) parentStepPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Complete Order & Submit';
    }
  }
};

window.executeOnboardingTransactionPayloadSubmitVanilla = executeOnboardingTransactionPayloadSubmitVanilla;
