// ============================================================================ //
// 💳 STRIPE CORE FRAMEWORK LAYER & ROUTING MODULE
// ============================================================================ //
const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_live_51TTy4i0dNjSlvyScbq19wWCQjOhDKdFMUzkV4Et4ok1NAWFFab4qV2KyZB5CwAp6dAvpLSuMZq2xKAR3BZ1gfuTM00KtmvEgc4'; // 👈 INSERT YOUR STRIPE PK KEY HERE!

// Initialize core state matrix flags globally on the window context map layer
window.stripeInstance = window.stripeInstance || null;
window.stripeElementsContainer = window.stripeElementsContainer || null;
window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

/**
 * MODULE A: DYNAMIC DOM MOUNT ENGINE
 * Instantiates the Stripe framework and draws flat credit card inputs into Step 6.
 */
async function initializeFlatStripeCheckoutElement() {
    console.log("[Stripe Loader] Initiating payment element mount sequence...");
    
    const mountPoint = document.getElementById("stripe-payment-element-mount-point");
    if (!mountPoint) {
        console.warn("[Stripe Error] Mount point target node not found in DOM.");
        return;
    }

    // Prevent duplicate frames from breaking the UI when moving back and forth across steps
    if (window.stripePaymentElementInstance) {
        console.log("[Stripe Loader] Stripe element already exists. Skipping duplicate generation.");
        return;
    }

    // Verify the global Stripe JS library has finished loading from the CDN
    if (typeof Stripe === "undefined") {
        console.error("[Stripe Error] Stripe.js SDK script missing or not loaded yet.");
        mountPoint.innerHTML = "<p style='color: red; font-size: 0.85rem; font-weight: 600;'>Payment system offline. Please refresh.</p>";
        return;
    }

    try {
        // Instantiate the global Stripe object if it doesn't exist yet
        if (!window.stripeInstance) {
            window.stripeInstance = Stripe(ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY);
        }

        // Convert the total charge to integer cents (Stripe standard: e.g., $100.00 = 10000)
        const totalAmountCents = Math.round((window.wizardCalculatedFinalTotalAmount || 0) * 100);
        
        if (totalAmountCents <= 0) {
            console.warn("[Stripe Loader] Grand total is $0.00. Postponing intent registration.");
            return;
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

        // Create the elements collection frame wrapper
        window.stripeElementsContainer = window.stripeInstance.elements(checkoutOptions);

        // Build a clean, flat input layout card container row matrix
        window.stripePaymentElementInstance = window.stripeElementsContainer.create("payment", {
            layout: {
                type: 'accordion',
                defaultCollapsed: false,
                radios: false,
                spacedAccordionItems: false
            }
        });

        // Wipe old inner HTML containers and physically mount the fields into view
        mountPoint.innerHTML = "";
        window.stripePaymentElementInstance.mount("#stripe-payment-element-mount-point");
        console.log("[Stripe Success] Secure payment gateway field container safely mounted.");

    } catch (mountError) {
        console.error("[Stripe Core Exception] Failed loading interface framework:", mountError);
        mountPoint.innerHTML = "<p style='color: #ef4444; font-size: 0.85rem;'>Secure gateway loading failed. Please refresh and try again.</p>";
    }
}

/**
 * MODULE B: SECURE TRANSACTION PAYLOAD SUBMITTER (FAIL-SAFE)
 * Packs customer form field strings and passes active elements to Stripe.
 */
async function executeOnboardingTransactionPayloadSubmitVanilla() {
    console.log("[Stripe Dispatch] Packing customer inputs and preparing secure gateway channels...");

    // Capture current window variable scopes securely
    let liveStripe = window.stripeInstance;
    let liveElements = window.stripeElementsContainer;
    let livePaymentElement = window.stripePaymentElementInstance;

    // Fallback: Try to build instances if they got unlinked in the global tree
    if (!liveStripe && typeof Stripe !== "undefined") {
        window.stripeInstance = Stripe(ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY);
        liveStripe = window.stripeInstance;
    }

    if (!liveStripe || !livePaymentElement || !liveElements) {
        alert("Stripe Integration Failure: The secure gateway component has not finished mounting inside Step 6.");
        return;
    }

    const nextBtn = document.getElementById('wizard-next-trigger-btn');
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.style.background = '#64748b';
        nextBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';
    }

    // Map checked marketplace accessory checkboxes
    let auxiliaryAddonsArray = [];
    document.querySelectorAll('.addon-checkbox:checked, .upsell-checkbox:checked').forEach(checkbox => {
        auxiliaryAddonsArray.push(checkbox.getAttribute('data-id'));
    });

    // Helper closure to extract input values defensively from multiple matching schemas
    const extractProductionFieldValue = (elementIdentifier) => {
        const targetNode = document.getElementById(elementIdentifier) || 
                           document.querySelector(`[name="${elementIdentifier}"]`) || 
                           document.querySelector(`[name="${elementIdentifier}[]"]`);
        return targetNode ? targetNode.value.trim() : '';
    };

    const safeServiceKey = window.routeActiveServiceKey || "hazmat-registration";
    const safePlanKey = window.routeActivePlanKey || "elite";

    // Build the production-hardened payload matrix manifest
    const primarySubmissionPayloadData = {
        transaction_hash_id: window.f4u_tx_session_hash || "F4U-TX-LIVE-FALLBACK",
        target_service_id: safeServiceKey,
        deployment_speed_tier: safePlanKey,
        authority_jurisdiction: extractProductionFieldValue('wizard-target-jurisdiction'),
        legal_entity_name: extractProductionFieldValue('ent_legal_name') || extractProductionFieldValue('fed_tax_legal_name') || extractProductionFieldValue('legal-name') || extractProductionFieldValue('ra_secondary_entity_name'),
        taxpayer_ein: extractProductionFieldValue('ent_ein') || extractProductionFieldValue('fed_tax_ein') || extractProductionFieldValue('ein'),
        office_address_street: extractProductionFieldValue('ent_address_street') || extractProductionFieldValue('fed_tax_principal_street') || extractProductionFieldValue('business-address') || extractProductionFieldValue('member_street'),
        office_address_city: extractProductionFieldValue('ent_address_city') || extractProductionFieldValue('fed_tax_principal_city') || extractProductionFieldValue('member_city'),
        office_address_zip: extractProductionFieldValue('ent_address_zip') || extractProductionFieldValue('fed_tax_principal_zip') || extractProductionFieldValue('member_zip'),
        communications_email: extractProductionFieldValue('portal_user_email') || extractProductionFieldValue('ent_comms_email') || extractProductionFieldValue('np_board_contact'),
        active_addons_list: auxiliaryAddonsArray,
        printed_signature_auth: extractProductionFieldValue('poa_signer_printed'),
        digital_signature_raster_vector: localStorage.getItem("poa-signature-pad-data") || null,
        financials_subtotal_amount: (window.wizardCalculatedFinalTotalAmount || 0) - (typeof CENTRAL_SERVICE_PLAN_DB !== "undefined" && CENTRAL_SERVICE_PLAN_DB[safeServiceKey]?.gov_fee || 0),
        financials_grand_total_charge: window.wizardCalculatedFinalTotalAmount || 0,
        client_session_timestamp: new Date().toISOString()
    };

    try {
        sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));
    } catch (sessionCacheError) {
        console.error("[Storage Error] Receipt serialization failed:", sessionCacheError);
    }

    const baseOriginPath = window.location.origin + window.location.pathname.replace('wizard.html', '');
    const successRedirectionUrl = `${baseOriginPath}success.html?tx_hash=${window.f4u_tx_session_hash || 'TX-PENDING'}&status=validated_cleared`;
    const communicationEmailValue = extractProductionFieldValue('portal_user_email') || 'compliance@yourcompany.com';
    
    console.log(`[Stripe API] Redirect target configured: ${successRedirectionUrl}`);

    try {
        const { error } = await liveStripe.confirmPayment({
            elements: liveElements,
            confirmParams: {
                return_url: successRedirectionUrl,
                receipt_email: communicationEmailValue
            }
        });

        if (error) {
            alert(`Payment Transaction Rejected: ${error.message}`);
            if (nextBtn) {
                nextBtn.disabled = false;
                nextBtn.style.background = '#10b981';
                nextBtn.innerHTML = '<i class="fa-solid fa-credit-card"></i> Complete Order & Submit';
            }
        }
    } catch (stripeGatewayException) {
        console.error("[Stripe Connection Error] Critical network exception caught:", stripeGatewayException);
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.style.background = '#10b981';
            nextBtn.innerHTML = '<i class="fa-solid fa-credit-card"></i> Complete Order & Submit';
        }
    }
}

function executeOnboardingTransactionPayloadSubmitVanilla(targetStepIndex) {
    // 1. Process your validation logic here...
    // 2. Fire Stripe element charge operations...
    stripe.confirmPayment({ /* payment parameters */ }).then(function(result) {
        if (!result.error) {
            // Secure payment verified! Release the navigation block to show final panel safely:
            window.goToNextWizardStep(targetStepIndex);
        } else {
            console.error("[Checkout Failure] " + result.error.message);
        }
    });
}
