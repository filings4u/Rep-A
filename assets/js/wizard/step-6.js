(function() {
    // ==========================================
    // BLOCK 1: INITIAL VARIABLE SET & GLOBAL MEMORY
    // ==========================================
    const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE';
    window.stripeInstance = window.stripeInstance || null;
    window.stripeElementsContainer = window.stripeElementsContainer || null;
    window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

    // ==========================================
    // BLOCK 2: TARGET DOM SAFETY GUARD & CONFIG LOADING
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
            const finalEmail = (document.getElementById("lead_email") || document.getElementById("portal_user_email") || document.querySelector(".master-onboarding-form input[type='email']"))?.value.trim().toLowerCase() || "guest-checkout@filings4u.com";
            const uniqueTrackingToken = "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase();

            const poaState = window.wizardPoaSignedState || localStorage.getItem("cached_wizard_poa_signed_state") || "signed_verified";
            const poaSignatureStr = window.wizardPoaSignatureVerificationString || localStorage.getItem("cached_wizard_poa_signature_verification_string") || "Verified Electronic Signature Profile Entry";
            const currentUserId = window.wizardCurrentUserId || "anonymous_user";
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
            // ==========================================
            // BLOCK 4: SERVER API HANDSHAKE & INITIALIZATION
            // ==========================================
            console.log("[Stripe Loader] Handshaking with checkout edge router...");
            const response = await fetch('https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amountValue: currentGrandTotal,
                    trackingNumber: uniqueTrackingToken,
                    isTestModeRequested: true,
                    poa_signed_state: poaState,
                    poa_signature_verification_string: poaSignatureStr,
                    user_id: currentUserId,
                    email: finalEmail,
                    company_name: localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile",
                    service_key: window.wizardActiveServiceKeyIdentifier || "llc-formation",
                    service_title: window.wizardActiveServiceTitleString || "LLC Formation Service",
                    plan_tier: window.routeActivePlanTierName || "Compliance Update Filing Package"
                })
            });

            const responseData = await response.json();
            if (!response.ok) throw new Error(responseData.error || "Failed communication handshake link with checkout edge router.");

            const clientSecret = responseData.clientSecret;

            if (window.stripePaymentElementInstance) {
                window.stripePaymentElementInstance.destroy();
                window.stripePaymentElementInstance = null;
            }

            // Initialize container layout using the server-side clientSecret
            window.stripeElementsContainer = window.stripeInstance.elements({
                clientSecret: clientSecret,
                appearance: {
                    theme: 'stripe',
                    variables: { colorPrimary: '#0a1f44', colorBackground: '#ffffff', colorText: '#0a1f44', borderRadius: '6px', spacingGridRow: '16px' }
                }
            });

            // Mount Element onto your injection mount point
            window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', {
                layout: { type: 'accordion', defaultCollapsed: false }
            });
            window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point');

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
                submitBtn.onclick = function(e) {
                    window.executeOnboardingTransactionPayloadSubmitVanilla(e, clientSecret, uniqueTrackingToken, finalEmail, currentGrandTotal);
                };
            }

        } catch (err) {
            console.error("[Stripe Loading Error]", err);
            const errorBanner = document.getElementById("step6-error-banner-target");
            if (errorBanner) {
                errorBanner.innerText = `Checkout Element Offline: ${err.message}`;
                errorBanner.style.display = "block";
            }
        }
    }
    // ==========================================
    // BLOCK 5 & 6: SECURE CHECKOUT SUBMISSION AND REDIRECT
    // ==========================================
    window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event, clientSecret, uniqueTrackingToken, finalEmail, activeGrandCost) {
        if (event && typeof event.preventDefault === "function") event.preventDefault();

        const submitBtn = document.getElementById("wizard-next-trigger-btn");
        const errorBanner = document.getElementById("step6-error-banner-target");
        const step6Panel = document.getElementById("step-panel-6");

        if (errorBanner) {
            errorBanner.style.display = "none";
            errorBanner.innerHTML = "";
        }

        // Inline input validator scan logic
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

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...';
        }

        try {
            // Trigger front-end formatting validation checks inside Stripe iframe
            const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
            if (stripeSubmitError) throw stripeSubmitError;

            console.log("[Stripe Submission Engine] Directing active payment authorization intent via secure Stripe API...");
            
            // Confirm transaction using pre-fetched secret token properties
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

            // Pack manifestation receipt arrays
            const checkoutManifestPayload = {
                transaction_hash_id: uniqueTrackingToken,
                communications_email: finalEmail,
                financials_grand_total_charge: activeGrandCost,
                legal_entity_name: localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile",
                taxpayer_ein: localStorage.getItem("wizard_field_ein") || "Processing Summary...",
                selected_package_title: window.routeActivePlanTierName || "Compliance Update Filing Package"
            };
            sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(checkoutManifestPayload));

            // Shift step active view layouts natively
            if (typeof window.switchWizardActiveViewLayout === "function") {
                console.log("[Stripe Submission Engine] Payment complete. Transitioning control to step-7.js...");
                window.switchWizardActiveViewLayout(7);
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

    window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;

    if (parseInt(window.currentWizardActiveStep, 10) === 6) {
        initializeFlatStripeCheckoutElement();
    }
})();
