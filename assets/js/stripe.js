const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_live_51TTy4i0dNjSlvyScbq19wWCQjOhDKdFMUzkV4Et4ok1NAWFFab4qV2KyZB5CwAp6dAvpLSuMZq2xKAR3BZ1gfuTM00KtmvEgc4';

window.stripeInstance = window.stripeInstance || null;
window.stripeElementsContainer = window.stripeElementsContainer || null;
window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

(function() {
  const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_live_51TTy4i0dNjSlvyScbq19wWCQjOhDKdFMUzkV4Et4ok1NAWFFab4qV2KyZB5CwAp6dAvpLSuMZq2xKAR3BZ1gfuTM00KtmvEgc4';

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



async function executeOnboardingTransactionPayloadSubmitVanilla() {
  console.log("[Stripe Dispatch] Packing customer inputs and preparing secure gateway channels...");
  
  let liveStripe = window.stripeInstance;
  let liveElements = window.stripeElementsContainer;
  let livePaymentElement = window.stripePaymentElementInstance;

  if (!liveStripe && typeof Stripe !== "undefined") {
    window.stripeInstance = Stripe('pk_live_51TTy4i0dNjSlvyScbq19wWCQjOhDKdFMUzkV4Et4ok1NAWFFab4qV2KyZB5CwAp6dAvpLSuMZq2xKAR3BZ1gfuTM00KtmvEgc4');
    liveStripe = window.stripeInstance;
  }

  if (!liveStripe || !livePaymentElement || !liveElements) {
    alert("Stripe Integration Failure: The secure gateway payment component has not finished mounting inside Step 6.");
    return;
  }

  var activeNextButtonReference = document.getElementById('wizard-next-trigger-btn') || document.getElementById('poa-next-btn') || document.querySelector("#step-panel-6 .btn-wizard-main");
  
  // 🌟 STEP 1: Force Stripe to validate the input fields before submitting the payload
  const { error: validationError } = await liveElements.submit();
  
  if (validationError) {
    // 🌟 STEP 2: Alert the user that their credit card data is missing or incomplete
    alert("Missing Payment Information: Please fill out all required credit card fields completely before submitting your order.");
    
    // 🌟 STEP 3: Target the outer card wrapper element and turn its border red
    const secureCardWrapperCell = document.querySelector("#stripe-payment-element-mount-point")?.parentElement;
    if (secureCardWrapperCell) {
      secureCardWrapperCell.style.borderColor = "#ef4444";
      secureCardWrapperCell.style.borderWidth = "2px";
      secureCardWrapperCell.style.boxShadow = "0 0 0 4px rgba(239, 68, 68, 0.15)";
    }
    return;
  }

  if (activeNextButtonReference) {
    activeNextButtonReference.disabled = true;
    activeNextButtonReference.style.background = '#64748b';
    activeNextButtonReference.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';
  }

  let auxiliaryAddonsArray = [];
  if (window.currentCartState && Array.isArray(window.currentCartState.addons)) {
    window.currentCartState.addons.forEach(addon => {
      if(addon.id) auxiliaryAddonsArray.push(addon.id);
    });
  } else {
    document.querySelectorAll('.addon-checkbox:checked, .upsell-checkbox:checked').forEach(checkbox => {
      auxiliaryAddonsArray.push(checkbox.id || checkbox.getAttribute('data-id'));
    });
  }

  const extractProductionFieldValue = (elementIdentifier) => {
    const targetNode = document.getElementById(elementIdentifier) || document.querySelector(`[name="${elementIdentifier}"]`) || document.querySelector(`[name="${elementIdentifier}[]"]`);
    return targetNode ? targetNode.value.trim() : '';
  };

  const safeServiceKey = window.routeActiveServiceKey || "";
  const safePlanKey = window.routeActivePlanKey || "";
  const targetRunningGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 0;
  const targetRunningGovFee = window.computedWizardStateGovernmentFee || 0;

  const primarySubmissionPayloadData = {
    transaction_hash_id: window.f4u_tx_session_hash || "",
    target_service_id: safeServiceKey,
    deployment_speed_tier: safePlanKey,
    authority_jurisdiction: extractProductionFieldValue('wizard-target-jurisdiction') || extractProductionFieldValue('formation_state'),
    legal_entity_name: extractProductionFieldValue('llc_proposed_name') || extractProductionFieldValue('ent_legal_name') || extractProductionFieldValue('company_name'),
    taxpayer_ein: extractProductionFieldValue('llc_existing_ein_field') || extractProductionFieldValue('ent_ein') || '',
    office_address_street: extractProductionFieldValue('ent_address_street') || extractProductionFieldValue('member_street_1'),
    office_address_city: extractProductionFieldValue('ent_address_city') || extractProductionFieldValue('member_city_1'),
    office_address_zip: extractProductionFieldValue('ent_address_zip') || extractProductionFieldValue('member_zip_1'),
    communications_email: extractProductionFieldValue('company_email') || extractProductionFieldValue('portal_user_email'),
    active_addons_list: auxiliaryAddonsArray,
    printed_signature_auth: extractProductionFieldValue('poa_typed_signature') || extractProductionFieldValue('signature_input'),
    digital_signature_raster_vector: localStorage.getItem("poa-signature-pad-data") || null,
    financials_subtotal_amount: targetRunningGrandTotal - targetRunningGovFee,
    financials_grand_total_charge: targetRunningGrandTotal,
    client_session_timestamp: new Date().toISOString()
  };

  try {
    sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));
  } catch (sessionCacheError) {
    console.error("[Storage Error] Receipt serialization failed:", sessionCacheError);
  }

  if (typeof window.processFinalSecureCheckoutSubmission === "function") {
    try {
      await window.processFinalSecureCheckoutSubmission(primarySubmissionPayloadData);
    } catch (backendError) {
      console.error("[Database Sync Error] Pre-checkout registry failed:", backendError);
    }
  } else {
    console.warn("[Database Sync Warning] window.processFinalSecureCheckoutSubmission missing from memory runtime mapping layers.");
  }

  const baseOriginPath = window.location.origin + window.location.pathname.replace('wizard.html', '');
  const successRedirectionUrl = baseOriginPath + "success.html";
  const communicationEmailValue = primarySubmissionPayloadData.communications_email || '';

  try {
    const { error } = await liveStripe.confirmPayment({
      elements: liveElements,
      confirmParams: {
        return_url: successRedirectionUrl,
        receipt_email: communicationEmailValue
      }
    });

    if (error) {
      alert("Payment Transaction Rejected: " + error.message);
      if (activeNextButtonReference) {
        activeNextButtonReference.disabled = false;
        activeNextButtonReference.style.background = '#10b981';
        activeNextButtonReference.innerHTML = ' Complete Order & Submit';
      }
    }
  } catch (stripeGatewayException) {
    console.error("[Stripe Connection Error] Critical network exception caught:", stripeGatewayException);
    if (activeNextButtonReference) {
      activeNextButtonReference.disabled = false;
      activeNextButtonReference.style.background = '#10b981';
      activeNextButtonReference.innerHTML = ' Complete Order & Submit';
    }
  }
}

window.executeOnboardingTransactionPayloadSubmitVanilla = executeOnboardingTransactionPayloadSubmitVanilla;
