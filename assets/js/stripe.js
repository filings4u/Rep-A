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
    let supabaseClient = window.supabase;
    if (!supabaseClient || typeof supabaseClient.from !== 'function') {
      supabaseClient = window.supabaseClient || window.sb;
    }
    if (!supabaseClient) throw new Error('Supabase integration missing.');

    // State-Neutral Token Tracking Generation Matches your tracking_number formats
    const uniqueTrackingToken = "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    // Scrub active form elements entries
    const customerEmail = (document.getElementById("lead_email")?.value || "").trim().toLowerCase(); 
    const businessName = (document.getElementById("mbe_legal_name")?.value || document.getElementById("wizard-route-service-id")?.value || "Filing Enterprise").trim();
    const taxpayerEin = (document.getElementById("mbe_federal_ein")?.value || "").trim();
    const addressStreet = (document.getElementById("mbe_target_agency_name")?.value || "").trim();
    const stateFormation = (document.getElementById("mbe_state_of_formation")?.value || "").trim();

    const activeBaseCost = parseFloat(document.getElementById("step-1-base-fee-value")?.textContent.replace(/[^0-9.]/g, "")) || 150.00;
    const activeGrandCost = parseFloat(document.getElementById("payment-gateway-total-display")?.textContent.replace(/[^0-9.]/g, "")) || 249.00;

    // Compile entire wizard history parameters to preserve inputs inside the jsonb cell block
    const fullFormMetadataProfile = {
      email: customerEmail,
      taxpayer_ein: taxpayerEin,
      office_address_street: addressStreet,
      state_of_formation: stateFormation,
      active_addons: window.currentSelectedAddonsListArrayMatrix || [],
      financials_subtotal: activeBaseCost
    };

    // 1. 🟢 SYNC PASSTHROUGH A: INSERT MASTER PARAMETERS INTO 'orders'
    const ordersPayload = {
      company_name: businessName,
      service_key: window.routeActiveServiceKey || "mcs-150-update",
      service_title: document.querySelector(".step-main-title")?.textContent || "Compliance Update Filing Package",
      plan_tier: "starter",
      total_fee: activeGrandCost,
      status: "paid_validated",
      tracking_number: uniqueTrackingToken,
      collected_payload_metadata: fullFormMetadataProfile
    };

    const { error: ordersError } = await supabaseClient.from('orders').insert([ordersPayload]);
    if (ordersError) throw ordersError;

    // 2. 🟢 SYNC PASSTHROUGH B: INSERT TRANSACTION RECORD INTO 'filing_orders'
    const filingOrdersPayload = {
      company_name: businessName,
      service_title: document.querySelector(".step-main-title")?.textContent || "Compliance Update Filing Package",
      total_fee: activeGrandCost,
      status: "paid_validated",
      state: stateFormation || "US",
      reference_id: uniqueTrackingToken
    };

    const { error: filingOrdersError } = await supabaseClient.from('filing_orders').insert([filingOrdersPayload]);
    if (filingOrdersError) {
      console.warn("[Database Notice] Profile saved to master orders, transaction sub-log deferred:", filingOrdersError);
    }

    // 3. Cache variables payload into browser session memory vault maps
    const checkoutManifestPayload = {
      tracking_token_id: uniqueTrackingToken,
      communications_email: customerEmail,
      legal_entity_name: businessName,
      taxpayer_ein: taxpayerEin,
      office_address_street: addressStreet,
      selected_package_title: document.querySelector(".step-main-title")?.textContent || "Compliance Update Filing Package",
      financials_subtotal_amount: activeBaseCost,
      financials_grand_total_charge: activeGrandCost,
      active_addons_list: window.currentSelectedAddonsListArrayMatrix || []
    };

    sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(checkoutManifestPayload));

    // 4. Complete the checkout funnel pass by redirecting directly onto success page
    window.location.href = `success.html?token=${uniqueTrackingToken}&email=${encodeURIComponent(customerEmail)}`;

  } catch (checkoutError) {
    console.error("[Fatal Payment Intercept Catch]", checkoutError);
    
    if (errorBanner) {
      errorBanner.style.display = "block";
      errorBanner.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i> 
        <strong>Filing Transaction Interrupted:</strong> Secure payment authorization failed or connection timed out. Please check your credit card details or network profile settings and try again.
      `;

      const parentStepPanel = document.getElementById("step-panel-6");
      if (parentStepPanel) {
        parentStepPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Complete Order & Submit';
    }
  }
};
window.executeOnboardingTransactionPayloadSubmitVanilla = executeOnboardingTransactionPayloadSubmitVanilla;


