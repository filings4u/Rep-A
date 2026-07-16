// step-6.js
(function() {
  "use strict";

  const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE';
  
  window.stripeInstance = window.stripeInstance || null;
  window.stripeElementsContainer = window.stripeElementsContainer || null;
  window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

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

      // 🟢 FIXED: Dynamic variable tracking hook check with total safeguard rules applied
      const currentGrandTotal = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total"));
      
      if (isNaN(currentGrandTotal) || currentGrandTotal <= 0) {
        console.warn("[Stripe Loader] Calculation parameters missing. Refreshing running values...");
        baseContainer.innerHTML = "<p style='color: #475569; font-size: 0.85rem;'>Calculating final statement values... Please wait a moment.</p>";
        setTimeout(initializeFlatStripeCheckoutElement, 300);
        return;
      }

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

        <!-- INTEGRATED PORTAL ACCOUNT PROFILE GENERATION LAYER -->
        <div class="integrated-profile-matrix" style="margin-bottom: 20px; box-sizing: border-box; text-align: left; width: 100%; display: flex; flex-direction: column; gap: 16px;">
          
          <!-- ROW 1: FIRST NAME & LAST NAME (Side by Side) -->
          <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;">
            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
              <label for="portal_user_first_name" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">First Name</label>
              <input type="text" id="portal_user_first_name" required placeholder="John" style="width: 100%; padding: 14px 16px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
              <label for="portal_user_last_name" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Last Name</label>
              <input type="text" id="portal_user_last_name" required placeholder="Doe" style="width: 100%; padding: 14px 16px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
            </div>
          </div>

          <!-- ROW 2: EMAIL ADDRESS & PHONE NUMBER (Side by Side) -->
          <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;">
            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
              <label for="portal_user_email_input" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Account Email Address</label>
              <div style="position: relative; display: flex; align-items: center; width: 100%;">
                <span style="position: absolute; left: 16px; color: #64748b; font-size: 0.9rem;"><i class="fa-solid fa-envelope"></i></span>
                <input type="email" id="portal_user_email_input" required placeholder="you@example.com" style="width: 100%; padding: 14px 16px 14px 44px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;">
              <label for="portal_user_phone" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Contact Phone Number</label>
              <div style="position: relative; display: flex; align-items: center; width: 100%;">
                <span style="position: absolute; left: 16px; color: #64748b; font-size: 0.9rem;"><i class="fa-solid fa-phone"></i></span>
                <input type="tel" id="portal_user_phone" required placeholder="(555) 000-0000" style="width: 100%; padding: 14px 16px 14px 44px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
              </div>
            </div>
          </div>
        </div>

        <style>
          .field-error-shake {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15) !important;
            animation: inlineFieldShake 0.4s ease-in-out;
          }
          .field-validated-emerald {
            border-color: #10b981 !important;
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1) !important;
          }
          @keyframes inlineFieldShake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-6px); }
            40%, 80% { transform: translateX(6px); }
          }
          @media (max-width: 480px) {
            .integrated-profile-matrix > div {
              flex-direction: column !important;
              gap: 16px !important;
            }
          }
        </style>

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

        <style>
  /* 📱 MOBILE VIEWPORT BREAKPOINT: STEP 6 CHECKOUT GATEWAY */
  @media (max-width: 600px) {
    /* Clears side-by-side flex constraints next to your mounted iframe card mount point */
    .wizard-action-row {
      flex-direction: column-reverse !important;
      gap: 12px !important;
      align-items: center !important;
      width: 100% !important;
      margin-top: 24px !important;
    }
    
    /* Expands your inline payment processing tap boundaries safely */
    #wizard-next-trigger-btn,
    .wizard-action-row button {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      padding: 14px !important;
      margin: 0 !important;
      box-sizing: border-box !important;
    }
  }
</style>

      `;

      if (window.stripePaymentElementInstance) {
        window.stripePaymentElementInstance.destroy();
        window.stripePaymentElementInstance = null;
      }

      // 🟢 STRIPE APPEARANCE ENGINE HOOKS: Synchronizes iframe card nodes to flash red and turn emerald green perfectly
      window.stripeElementsContainer = window.stripeInstance.elements({
        mode: 'setup',
        currency: 'usd',
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#0a1f44',
            colorBackground: '#ffffff',
            colorText: '#0a1f44',
            colorTextPlaceholder: '#94a3b8',
            borderRadius: '6px',
            spacingGridRow: '16px',
            // Default active element state configurations
            borderWidth: '1px',
            borderColor: '#e2e8f0',
            boxShadow: 'none'
          },
                   rules: {
            '.Input': {
              padding: '12px',
              fontSize: '15px',
              transition: 'all 0.2s ease-in-out'
            },
            '.Input:focus': {
              borderColor: '#10b981',
              boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)'
            },
            // 🟢 ERROR SYNCHRONIZATION: Causes Stripe iframe elements to match your exact crimson theme border
            '.Input--invalid': {
              borderColor: '#ef4444',
              boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.15)'
            }
          }
        }
      });

      window.stripePaymentElementInstance = window.stripeElementsContainer.create("payment", {
        layout: {
          type: 'accordion',
          defaultCollapsed: false,
          radios: false,
          spacedAccordionItems: true
        }
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

  window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement;

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
  
  // 1. Target your exact 4 horizontal layout fields
  const emailInput = document.getElementById("portal_user_email_input");
  const firstNameInput = document.getElementById("portal_user_first_name");
  const lastNameInput = document.getElementById("portal_user_last_name");
  const phoneInput = document.getElementById("portal_user_phone");

  const fieldsArray = [emailInput, firstNameInput, lastNameInput, phoneInput];
  let validationHasFailed = false;

  if (errorBanner) {
    errorBanner.style.display = "none";
    errorBanner.innerHTML = "";
  }

  // Clear previous error styles and bind real-time emerald transition checks
  fieldsArray.forEach(input => {
    if (input) {
      input.classList.remove("field-error-shake");
      
      if (!input.dataset.listenerBound) {
        input.dataset.listenerBound = "true";
        input.addEventListener("input", () => {
          if (input.value.trim() !== "") {
            input.classList.remove("field-error-shake");
            input.classList.add("field-validated-emerald");
          } else {
            input.classList.remove("field-validated-emerald");
          }
        });
      }
    }
  });

  // 2. RUN VALIDATION LAYER: Shake empty fields without browser alerts
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
    
    const activeGrandCost = parseFloat(document.getElementById("payment-gateway-total-display")?.textContent.replace(/[^0-9.]/g, "")) || 249.00;

    // ACCOUNT GENERATOR: Pull tracking token from state parameters or generate new
    let uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token");
    if (!uniqueTrackingToken) {
      uniqueTrackingToken = "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase();
      localStorage.setItem("f4u_active_tracking_token", uniqueTrackingToken);
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...';
    }

    // 3. RESOLVE URL METRICS IN LINE WITH YOUR LIVE SCHEMAS
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "llc-formation").toLowerCase().trim();
    const activePlanKeyString = String(urlParams.get('plan') || window.routeActivePlanKey || window.currentPlanKey || "enterprise").toLowerCase().trim();

    let foundationFilingCost = 0;
    if (window._tempCalcContext && window._tempCalcContext.baseTierPrice !== undefined) {
      foundationFilingCost = parseFloat(window._tempCalcContext.baseTierPrice) || 0;
    }

    let extractedTierTokenName = activePlanKeyString.toUpperCase();
    const dynamicLabelTextString = `filings4u Processing Fee (${extractedTierTokenName})`;

    // Compile receipt payload for session context
    const checkoutManifestPayload = {
      transaction_hash_id: uniqueTrackingToken,
      communications_email: finalEmail,
      is_returning: false, // Default state; updated dynamically below via database check
      financials_grand_total_charge: activeGrandCost,
      legal_entity_name: localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile",
      taxpayer_ein: localStorage.getItem("wizard_field_ein") || "Processing Summary...",
      office_address_street: localStorage.getItem("wizard_field_principal_address") || "Form Submission Record Entry",
      selected_package_title: dynamicLabelTextString,
      financials_subtotal_amount: foundationFilingCost
    };

    const supabaseClient = window.getSuccessPageSupabaseClient();
    let isReturningUser = false;

    // 4. EXTRACT INTERLOCK DISCOVERY PARAMS FROM ABANDONED LIFECYCLE REGISTERS
    if (supabaseClient) {
      console.log("[Gatekeeper] Interrogating wizard_abandoned_leads registry context...");
      const { data: leadCheck, error: leadCheckError } = await supabaseClient
        .from('wizard_abandoned_leads')
        .select('id')
        .eq('email', finalEmail)
        .maybeSingle();

      if (!leadCheckError && leadCheck) {
        isReturningUser = true;
        checkoutManifestPayload.is_returning = true;
        localStorage.setItem("f4u_is_returning_customer", "true");
      } else {
        localStorage.setItem("f4u_is_returning_customer", "false");
      }
    }

    sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(checkoutManifestPayload));
    localStorage.setItem("f4u_checkout_email", finalEmail);

    // 5. EXTRACT POA STEP DATA DIRECTLY FROM WIZARD PROGRESS INTAKE MEMORY
    const isPoaSigned = localStorage.getItem("wizard_field_poa_accepted") === "true" || 
                        localStorage.getItem("wizard_field_poa_signed") === "true";
                        
    const poaSignatureString = localStorage.getItem("wizard_field_poa_signature_string") || 
                               localStorage.getItem("wizard_field_poa_verification_hash") || null;

 
    // ============================================================================ //
    // DATA PRESERVATION: FIXED AUTOMATED UPSERT TRANSACTION SCHEMA RECORD SAVE     //
    // ============================================================================ //
    if (supabaseClient) {
      console.log("[Gatekeeper] Preserving transaction log signatures inside Supabase database cluster...");
      
      // FIXED SCHEMA PAYLOAD: Removed the phantom root-level "email" field 
      // All user contact elements are now passed inside the nested JSON data structure
      const validatedDatabaseUpsertPayload = {
        tracking_number: uniqueTrackingToken,
        company_name: localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile",
        service_key: serviceSlug,
        service_title: dynamicLabelTextString,
        plan_tier: activePlanKeyString,
        total_fee: activeGrandCost,
        status: 'pending',
        tax_id_status: 'Fulfillment Lane',
        poa_signed_state: isPoaSigned,
        poa_signature_verification_string: poaSignatureString,
        collected_payload_metadata: {
          customer_email: finalEmail, // Securely tracked inside the JSON vault column
          customer_first_name: firstName,
          customer_last_name: lastName,
          customer_phone: phone,
          is_returning_customer: isReturningUser
        }
      };

      const { error: dbUpsertError } = await supabaseClient
        .from('orders')
        .upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' });

      if (dbUpsertError) {
        throw new Error(`Database Pre-Synchronization Failed: ${dbUpsertError.message}`);
      }
    }

    // 6. EXECUTE INLINE STRIPE CONFIRMATION INTERFACE ENGINE HANDSHAKE
    if (window.stripeElementsContainer) {
      const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
      if (stripeSubmitError) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
        }
        return false; 
      }


      const isMockSecret = String(window.stripeClientSecret).startsWith("pi_mock_intent_");

      if (window.stripeInstance && !isMockSecret) {
        console.log("[Stripe Submission Engine] Directing active payment authorization intent via secure Stripe API...");
        
        const { error: confirmError } = await window.stripeInstance.confirmPayment({
          elements: window.stripeElementsContainer,
          clientSecret: window.stripeClientSecret,
          confirmParams: {
            return_url: `${window.location.origin}/wizard.html?step=7&status=success&token=${uniqueTrackingToken}&email=${encodeURIComponent(finalEmail)}`,
            receipt_email: finalEmail
          },
          redirect: "if_required"
        });

        if (confirmError) throw confirmError;
      }
    } else {
      throw new Error("Checkout components missing: The payment gateway elements were not mounted correctly.");
    }

    // Explicit update backup loop in case window redirect rules bypass standard hook lifecycles
    if (supabaseClient) {
      await supabaseClient
        .from('orders')
        .update({ status: 'paid' })
        .eq('tracking_number', uniqueTrackingToken);
    }

    // 7. SWAP OVER IN-WIZARD PANEL TO STEP 7 RECEIPT DISPLAY
    if (typeof window.switchWizardActiveViewLayout === "function") {
      console.log("[Stripe Submission Engine] Payment complete. Transitioning control to step-7.js...");
      window.switchWizardActiveViewLayout(7);
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
    if (submitBtn) {
submitBtn.disabled = false;submitBtn.innerHTML = 'Secure Payment ';}}};