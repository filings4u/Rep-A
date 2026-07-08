// step-6.js
(function() {
  const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE';
  
  window.stripeInstance = window.stripeInstance || null;
  window.stripeElementsContainer = window.stripeElementsContainer || null;
  window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

    async function initializeFlatStripeCheckoutElement() {
    console.log("[Stripe Loader] Initiating payment element mount sequence...");
    const mountPoint = document.getElementById("stripe-payment-element-mount-point");
    
    // If the base mount point isn't explicitly ready in wizard.html yet, find your main container placeholder
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

      // Calculate the real price currently compiled by your multi-step wizard choices
      const currentGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 249.00;
      const totalAmountCents = Math.round(currentGrandTotal * 100);

      if (totalAmountCents <= 0) {
        baseContainer.innerHTML = "<p style='color: #64748b; font-size: 0.85rem;'>Awaiting package selections to verify invoicing bounds...</p>";
        return;
      }

      // 🎨 STEP 1: Programmatically draw the pricing canvas header, the stripe frame mount, error flags, and buttons
      baseContainer.innerHTML = `
        <!-- HEADER ROW + DYNAMIC PRICING SLOTS -->
        <div class="step-header-container" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; clear: both; width: 100%; box-sizing: border-box;">
          <div style="text-align: left;">
            <h2 class="step-main-title" style="margin: 0 0 4px 0; color: #0a1f44; font-weight: 800; font-size: 1.35rem;">Secure Checkout</h2>
            <p class="step-subtitle" style="color: #64748b; font-size: 0.88rem; margin: 0;">Authorize your compliance filing package payment below.</p>
          </div>
          <div style="text-align: right; background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 6px;">
            <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #64748b; display: block; letter-spacing: 0.05em;">Total Due:</span>
            <!-- 🟢 ID Target used by core.js data scraping nodes -->
            <span id="payment-gateway-total-display" style="font-size: 1.5rem; font-weight: 800; color: #10b981; font-family: monospace;">$${currentGrandTotal.toFixed(2)}</span>
          </div>
        </div>

        <!-- 💳 STRIPE IFRAME CONTAINER TARGET -->
        <div id="stripe-payment-element-mount-point" style="min-height: 200px; margin-bottom: 24px; clear: both; width: 100%;"></div>

        <!-- DYNAMIC SYSTEM ERROR BANNER SLOTS -->
        <div id="step6-error-banner-target" style="display: none; color: #ef4444; background: #fef2f2; border: 1px solid #fee2e2; padding: 12px; border-radius: 6px; font-size: 0.85rem; margin-bottom: 24px; font-weight: 500; text-align: left; clear: both;"></div>

        <!-- 🔘 DYNAMIC NAVIGATION BUTTON BLOCK -->
        <div class="wizard-action-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box; clear: both;">
          <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center;">
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

      // Configure Stripe Layout Rules
      const checkoutOptions = {
        mode: 'payment',
        amount: totalAmountCents,
        currency: 'usd',
        appearance: {
          theme: 'stripe',
          variables: { colorPrimary: '#10b981', colorBackground: '#ffffff', colorText: '#0a1f44', borderRadius: '8px' }
        }
      };

      window.stripeElementsContainer = window.stripeInstance.elements(checkoutOptions);
      window.stripePaymentElementInstance = window.stripeElementsContainer.create("payment", {
        layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: false }
      });

      // Mount Stripe cleanly into the freshly drawn DOM layout slot
      window.stripePaymentElementInstance.mount("#stripe-payment-element-mount-point");

    } catch (mountError) {
      console.error(mountError);
      const errBanner = document.getElementById("step6-error-banner-target");
      if (errBanner) {
        errBanner.style.display = "block";
        errBanner.innerHTML = "Secure gateway loading failed. Please refresh and try again.";
      }
    }
  }


  window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;

    // 💳 FORCE MOUNT INTERLOCK FALLBACK:
  // If the user is already standing on Step 6 when this script finishing loading,
  // execute the checkout layout initialization automatically!
  if (parseInt(window.currentWizardActiveStep, 10) === 6) {
    console.log("[Stripe Safe Boot] Script loaded while user is actively viewing Step 6. Engaging instant mount pass...");
    initializeFlatStripeCheckoutElement();
  }

})();

// Execution Action Function
window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();

  const submitBtn = document.getElementById("wizard-next-trigger-btn");
  const errorBanner = document.getElementById("step6-error-banner-target");
  
  // Find your active Stripe mount container element to apply dynamic styling feedback
  const paymentContainer = document.getElementById("stripe-payment-element-mount-point");
  const step6Panel = document.getElementById("step-panel-6");

  if (errorBanner) { errorBanner.style.display = "none"; errorBanner.innerHTML = ""; }

  try {
    // 🟢 1. IDENTIFY INLINE CHECKOUT INPUT FIELDS BUILT ON THE SCREEN AT STEP 6
    // Gathers whatever input, selector, or contact boxes sit right inside your Step 6 form layout panel boundaries
    let emptyFieldFound = null;
    if (step6Panel) {
      const inlineInputs = step6Panel.querySelectorAll("input:not([type='hidden']), select, textarea");
      
      inlineInputs.forEach(field => {
        // Completely ignore the hidden technical iframe interior properties owned by Stripe
        const isStripeInternalField = field.closest('.StripeElement') || field.closest('[id*="stripe"]') || field.classList.contains('StripeElement');
        if (isStripeInternalField) return;

        // Reset styling rules back to baseline clean parameters before the fresh verification sweep
        field.style.removeProperty("border");
        field.style.removeProperty("box-shadow");
        field.classList.remove("wizard-input-field-error-state");

        // If a standard checkout box is left completely empty, capture the first occurrence
        if (field.hasAttribute("required") && field.value.trim() === "") {
          if (!emptyFieldFound) emptyFieldFound = field;
        }
      });
    }

    // 🔴 2. INTERCEPT LOOP IF AN INLINE CHECKOUT INPUT FIELD IS COMPLETELY EMPTY
    if (emptyFieldFound) {
      
      // 🟢 A. Highlight the specific empty checkout input field in clear RED
      emptyFieldFound.style.setProperty("border", "2px solid #ef4444", "important");
      emptyFieldFound.style.setProperty("box-shadow", "0 0 0 4px rgba(239, 68, 68, 0.25)", "important");
      emptyFieldFound.classList.add("wizard-input-field-error-state");

      // 🟢 B. Make the main Stripe secure interface box border turn Emerald Green and shake
      if (paymentContainer) {
        paymentContainer.style.setProperty("border", "2px solid #10b981", "important");
        paymentContainer.style.setProperty("box-shadow", "0 0 0 4px rgba(16, 185, 129, 0.25)", "important");
        paymentContainer.style.setProperty("border-radius", "8px", "important");
        paymentContainer.style.setProperty("transition", "border-color 0.2s ease, box-shadow 0.2s ease", "important");

        // Inject the active layout shake animation
        paymentContainer.classList.add("compliance-shake-triggered");
        setTimeout(() => {
          paymentContainer.classList.remove("compliance-shake-triggered");
        }, 400);
      }

      // 🟢 C. Smoothly scroll the window right to the top of the empty input field container
      setTimeout(() => {
        emptyFieldFound.scrollIntoView({ behavior: "smooth", block: "center" });
        emptyFieldFound.focus();
      }, 50);

      // Clean reset on the action button state without firing a raw textual error banner display
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Complete Order & Submit';
      }
      return false; // Exit out safely and focus visual attention onto the fields
    }

    // 🟢 CLEAR STRIPE EMERALD BORDERS IF THE INPUT SWEEP IS FULLY VALIDATED
    if (paymentContainer) {
      paymentContainer.style.removeProperty("border");
      paymentContainer.style.removeProperty("box-shadow");
    }

    // 3. SECURELY COMPILE SERIALIZED PROFILE PARAMETERS FOR SYSTEM WRITES
    const finalEmail = (document.getElementById("lead_email") || document.getElementById("portal_user_email") || document.querySelector("input[type='email']"))?.value.trim().toLowerCase() || "guest-checkout@filings4u.com";
    const businessName = (document.getElementById("mbe_legal_name") || document.querySelector("input[placeholder*='Business']") || document.querySelector("input[placeholder*='Company']"))?.value.trim() || "Filing Enterprise";
    const stateFormation = (document.getElementById("mbe_state_of_formation") || document.querySelector("select[name*='state']"))?.value.trim() || "US";
    const taxpayerEin = (document.getElementById("mbe_federal_ein") || document.querySelector("input[placeholder*='EIN']"))?.value.trim() || "";
    const addressStreet = (document.getElementById("mbe_target_agency_name") || document.querySelector("input[placeholder*='Address']"))?.value.trim() || "";

    const activeBaseCost = parseFloat(localStorage.getItem("wizard_field_step-1-base-fee-value")) || 150.00;
    const activeGrandCost = parseFloat(document.getElementById("payment-gateway-total-display")?.textContent.replace(/[^0-9.]/g, "")) || 249.00;
    const uniqueTrackingToken = "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    // Advance button text state into network submission loaders
    if (submitBtn) { 
      submitBtn.disabled = true; 
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verifying Live Assets...'; 
    }

       // 🟢 FIXED DATABASE ACCESSOR: Prioritizes your exact wizard core database instance wrapper
    let supabaseClient = window.supabaseClientInstance || window.supabase || window.supabaseClient || window.sb;
    
    // Safety check: If the primary object is an auth sub-module wrapper, look at its parent layer
    if (supabaseClient && typeof supabaseClient.from !== 'function' && supabaseClient.supabase) {
      supabaseClient = supabaseClient.supabase;
    }

    if (!supabaseClient || typeof supabaseClient.from !== 'function') {
      throw new Error("Secure connection to database host timed out. Database accessor is unmapped on window scope.");
    }


    let isReturningUser = false;
    try {
      const { data: profileCheck, error: profileErr } = await supabaseClient
        .from('profiles')
        .select('id')
        .eq('email', finalEmail)
        .maybeSingle();

      if (!profileErr && profileCheck) {
        isReturningUser = true;
      }
    } catch (dbCheckErr) {
      console.warn("[Backend Scan Deferred]:", dbCheckErr.message);
    }

    // Submit card token assets directly to Stripe to catch payment issues
    const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
    if (stripeSubmitError) {
      if (paymentContainer) {
        paymentContainer.style.setProperty("border", "2px solid #10b981", "important");
        paymentContainer.style.setProperty("box-shadow", "0 0 0 4px rgba(16, 185, 129, 0.25)", "important");
        paymentContainer.classList.add("compliance-shake-triggered");
        setTimeout(() => { paymentContainer.classList.remove("compliance-shake-triggered"); }, 400);
      }
      throw stripeSubmitError;
    }

    // Persist production ledger records downstream into your true tables
    await supabaseClient.from('orders').insert([{
      company_name: businessName,
      service_key: window.routeActiveServiceKey || "mcs-150-update",
      service_title: document.querySelector(".step-main-title")?.textContent || "Compliance Update Filing Package",
      plan_tier: "starter",
      total_fee: activeGrandCost,
      status: "paid_validated",
      tracking_number: uniqueTrackingToken,
      collected_payload_metadata: {
        email: finalEmail,
        taxpayer_ein: taxpayerEin,
        office_address_street: addressStreet,
        state_of_formation: stateFormation,
        active_addons: window.currentSelectedAddonsListArrayMatrix || [],
        financials_subtotal: activeBaseCost
      }
    }]);

    await supabaseClient.from('filing_orders').insert([{
      company_name: businessName,
      service_title: document.querySelector(".step-main-title")?.textContent || "Compliance Update Filing Package",
      total_fee: activeGrandCost,
      status: "paid_validated",
      state: stateFormation || "US",
      reference_id: uniqueTrackingToken
    }]);

    const checkoutManifestPayload = {
      account_number: uniqueTrackingToken,
      email: finalEmail,
      is_returning: isReturningUser,
      legal_entity_name: businessName,
      taxpayer_ein: taxpayerEin,
      office_address_street: addressStreet,
      selected_package_title: "Compliance Update Filing Package",
      financials_subtotal_amount: activeBaseCost,
      financials_grand_total_charge: activeGrandCost,
      active_addons_list: window.currentSelectedAddonsListArrayMatrix || []
    };
    sessionStorage.setItem("f4u_checkout_manifest", JSON.stringify(checkoutManifestPayload));

    // Execute charge confirmation routing pass out to success.html
    const secureRedirectUrl = `${window.location.origin}/success.html?token=${uniqueTrackingToken}&email=${encodeURIComponent(finalEmail)}`;
    
    const { error: confirmError } = await window.stripeInstance.confirmPayment({
      elements: window.stripeElementsContainer,
      confirmParams: {
        return_url: secureRedirectUrl,
        receipt_email: finalEmail
      },
    });

    if (confirmError) throw new Error(confirmError.message);

  } catch (checkoutError) {
    console.error("[Fatal Payment Intercept Catch]", checkoutError);
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = ` <i class="fa-solid fa-triangle-exclamation"></i> <strong>Transaction Deferred:</strong> ${checkoutError.message} `;
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Complete Order & Submit';
    }
  }
};

