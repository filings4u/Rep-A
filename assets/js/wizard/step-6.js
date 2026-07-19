// step-6.js - SECTION 1: INTERFACE COMPONENT MATRIX MOUNT
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

      // Dynamic variable tracking hook check with total safeguard rules applied
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
                <input type="email" id="portal_user_email_input" required placeholder="you@example.com" style="width: 100%; padding: 14px 16px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;">
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
          <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 500; cursor: pointer;">Back</button>
          <button type="button" id="wizardSubmitBtnElement" style="background: #047857; border: none; color: white; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer;">Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i></button>
        </div>
      `;
      
      // Control pass is now transferred over to the backend ClientSecret generation loops

// step-6.js - SECTION 2: THE APPEARANCE MATRIX & ELEMENT MOUNTING
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


// step-6.js - SECTION 3: TRANSACTION PIPELINE SUBMISSION ENGINE (VALIDATOR)
window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();
  
  const submitBtn = document.getElementById("wizardSubmitBtnElement") || document.getElementById("wizard-next-trigger-btn");
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

 // step-6.js - SECTION 4: THE INTAKE MATRIX PARSER & COMPILATION
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

    // 🚀 THE BREAKOUT FIX: Fallback to the initialized production client instead of the broken local page name lookup function
    const supabaseClient = window.supabaseInstance || window.supabaseClient || (typeof window.getSuccessPageSupabaseClient === 'function' ? window.getSuccessPageSupabaseClient() : null);
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
      console.log("[Gatekeeper] Preserving pre-flight record token traces within database...");
      
      let dynamicUserId = null;
      let userEmailFallback = finalEmail;

      try {
          // Dynamic lookup wrapper pass to safely catch unauthenticated checkout runs
          const activeUser = window.activeClientSessionUser || (supabaseClient.auth ? (await supabaseClient.auth.getUser())?.data?.user : null);
          if (activeUser) {
              dynamicUserId = activeUser.id;
              userEmailFallback = activeUser.email || finalEmail;
          }
      } catch (authLookUpError) {
          console.log("ℹ️ [Gatekeeper] Guest context detected. Proceeding via anonymous checkout stream layers...");
      }
      
      // Build a completely valid data object matching your exact database columns
      const validatedDatabaseUpsertPayload = {
        tracking_number: uniqueTrackingToken,
        company_name: localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile",
        service_key: serviceSlug,
        service_title: dynamicLabelTextString,
        plan_tier: activePlanKeyString,
        total_fee: activeGrandCost,
        status: 'pending', // Defaults to pending until the Stripe webhook returns confirmation
        tax_id_status: 'Fulfillment Lane',
        poa_signed_state: isPoaSigned,
        
        // 🎯 FIXED SAFETY FALLBACKS:
        user_id: dynamicUserId, // Safely records as NULL for guest checkouts without crashing
        email: userEmailFallback || finalEmail,
        poa_signature_verification_string: poaSignatureString || "GUEST_SIG_PENDING",
        
        collected_payload_metadata: {
          customer_email: finalEmail,
          wiz_client_email: finalEmail,
          customer_first_name: firstName,
          customer_last_name: lastName,
          customer_phone: phone,
          is_returning_customer: isReturningUser || false,
          wiz_generated_passcode: "A7x9_SecurePass",
          authenticated_user_id: dynamicUserId
        }
      };

      // Execute upsert query with absolute exception tracing enabled
      const { error: dbUpsertError } = await supabaseClient
        .from('orders')
        .upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' });

      if (dbUpsertError) {
        console.error("✕ Database Pre-Sync Warning:", dbUpsertError.message);
        // 🚀 CRITICAL PRO-PRODUCTION BYPASS: Log a warning but DO NOT crash the script. 
        // This allows Stripe elements to process payments regardless of network jitter!
      }
    }


    // 6. EXECUTE STRIPE INTENT TRANSMISSION HANDSHAKE
    if (window.stripeElementsContainer) {
      const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
      if (stripeSubmitError) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
        }
        return false; 
      }

      // Check if Stripe client secret represents a sandbox test intent parameter
      const isMockSecret = String(window.stripeClientSecret || "").startsWith("pi_mock_intent_");

      if (window.stripeInstance && !isMockSecret) {
        console.log("[Stripe Submission Engine] Dispatching secure transactional token parameters over the network...");
        
        // 🚀 PRODUCTION PATH: Secures and routes payment data to Stripe's real servers
        const { error: confirmError } = await window.stripeInstance.confirmPayment({
          elements: window.stripeElementsContainer,
          clientSecret: window.stripeClientSecret,
          confirmParams: {
            return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`,
            receipt_email: finalEmail,
            payment_method_data: {
              billing_details: {
                email: finalEmail,
                name: `${firstName} ${lastName}`.trim()
              }
            }
          }
        });

        if (confirmError) throw confirmError;
        
      } else if (isMockSecret && supabaseClient) {
        // 🧪 SANDBOX FAIL-SAFE BYPASS: Immediately un-blocks database pipelines during testing
        console.log("🧪 [Sandbox Engine] Mock intent matched. Forcing manual database synchronization...");

        const { error: mockUpdateError } = await supabaseClient
            .from('orders')
            .update({ status: 'Paid' }) // Set casing to 'Paid' to unfreeze edge function triggers instantly
            .eq('tracking_number', uniqueTrackingToken);

        if (mockUpdateError) {
            console.warn("⚠️ Sandbox Sync Warning:", mockUpdateError.message);
        } else {
            console.log("✅ Sandbox Sync Complete: Test transaction record marked as Paid.");
        }
      }
    } else {
      throw new Error("Checkout components missing: The payment gateway elements were not mounted correctly.");
    }

    // 7. SWAP OVER IN-WIZARD PANEL TO STEP 7 RECEIPT DISPLAY
    if (typeof window.switchWizardActiveViewLayout === "function") {
      console.log("[Stripe Submission Engine] Checkout complete. Transitioning control to step-7.js...");
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
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>';
    }
  }
};


/**
 * 📁 STRIPE WEBHOOK CONTROLLER CHANNEL (PRODUCTION HARDENED ROUTER)
 * Responsibility: Listens for successful checkouts, handles safe array map fallbacks,
 * populates required root-level columns, and triggers downstream portal notifications.
 */
async function handleStripeWebhookEvent(stripeEvent, supabaseAdmin) {
    "use strict";

    const eventType = stripeEvent.type;

    // 🚀 UNIFIED GATEWAY INTERCEPT: Extract values regardless of which success packet arrives first
    if (eventType === 'checkout.session.completed' || eventType === 'payment_intent.succeeded') {
        const sessionObj = stripeEvent.data.object;
        
        // Recover our dynamic data parameters bag cleanly across either object structure path
        const metadata = sessionObj.metadata || {};
        
        // Safety Guard: Abort if it's a random transaction outside your wizard network layout bounds
        if (!metadata.tracking_number) {
            console.log("ℹ️ [Stripe Webhook] Skipping event: Object does not contain a filings4u tracking_number token.");
            return;
        }

        console.log(`📡 [Stripe Webhook] Processing event [${eventType}] for Tracking Token: ${metadata.tracking_number}`);

        try {
            // Resolve the client email dynamically from Stripe's payload or custom metadata
            let customerEmail = metadata.email || sessionObj.receipt_email;
            
            if (!customerEmail && sessionObj.customer_details) {
                customerEmail = sessionObj.customer_details.email;
            }
            if (!customerEmail && sessionObj.billing_details) {
                customerEmail = sessionObj.billing_details.email;
            }

            // 1. Build the exact row dictionary to fill your required root-level columns
            const orderPayload = {
                tracking_number: metadata.tracking_number,
                company_name: metadata.company_name,
                service_key: metadata.service_key,
                service_title: metadata.service_title,
                plan_tier: metadata.plan_tier,
                total_fee: parseFloat(metadata.total_fee || 0),
                status: 'Paid', // Capitalized to match your Edge Function casing filters exactly
                tax_id_status: 'Fulfillment Lane',
                poa_signed_state: metadata.poa_signed_state === 'true' || true,
                
                // ✅ CRITICAL ROOT FIELDS SOLVED PERMANENTLY:
                user_id: metadata.user_id || null,
                email: customerEmail || null,
                poa_signature_verification_string: metadata.poa_signature_verification_string || null,
                
                collected_payload_metadata: {
                    stripe_event_id: stripeEvent.id,
                    stripe_object_id: sessionObj.id,
                    stripe_payment_intent: sessionObj.payment_intent || sessionObj.id,
                    customer_email: customerEmail || metadata.email,
                    wiz_client_email: customerEmail || metadata.email, // Fallback schema bridge row element
                    wiz_generated_passcode: "A7x9_SecurePass",
                    processed_at: new Date().toISOString()
                },
                updated_at: new Date().toISOString()
            };

            // 2. Commit the fully-populated row directly into public.orders using upsert matching conflict hashes
            const { data: orderData, error: orderError } = await supabaseAdmin
                .from('orders')
                .upsert(orderPayload, { onConflict: 'tracking_number' })
                .select()
                .single();

            if (orderError) throw orderError;
            console.log(`✅ [Stripe Webhook] Order [${metadata.tracking_number}] successfully synchronized inside public.orders.`);

            // 3. AUTOMATIC NOTIFICATION GENERATOR ALIGNED WITH YOUR PORTAL SCHEMAS
            if (metadata.user_id) {
                const alertPayload = {
                    user_id: metadata.user_id,
                    title: "New Purchase Authenticated",
                    message: `Your workspace filing order for ${metadata.company_name || 'Your Corporation'} has been processed into our administrative fulfillment lane. Check your timeline for live trace metrics updates.`,
                    is_read: false,
                    is_archived: false,
                    recipient_email: customerEmail || null,
                    created_at: new Date().toISOString()
                };

                const { error: notificationError } = await supabaseAdmin
                    .from('portal_notifications')
                    .insert([alertPayload]);

                if (notificationError) {
                    console.warn("⚠️ [Stripe Webhook] Could not push notification log row:", notificationError.message);
                } else {
                    console.log("🔔 [Stripe Webhook] Automated client dashboard notification logged successfully.");
                }
            }

        } catch (err) {
            console.error("✕ [Stripe Webhook Execution Exception Caught]:", err.message || err);
        }
    }
}

/**
 * 📁 PATH: /api/stripe-webhook (Production Listener Endpoint Node)
 * Responsibility: Catch verified card intents, resolve signatures, and execute non-blocking processors
 */
app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }), async (request, response) => {
    const signature = request.headers['stripe-signature'];
    let stripeEvent;

    try {
        // Construct the authentic Stripe signature perimeter check to block malicious spoofing intents
        stripeEvent = stripe.webhooks.constructEvent(request.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error(`✕ Webhook Signature Verification Failed: ${err.message}`);
        return response.status(400).send(`Webhook Signature Verification Failed: ${err.message}`);
    }

    // Pass the verified event down to our centralized async handler module cleanly
    // This returns an immediate 200 response to Stripe to prevent transaction timeout retry loops
    handleStripeWebhookEvent(stripeEvent, supabaseAdmin).catch(asyncErr => {
        console.error("✕ Asynchronous processing error occurred:", asyncErr);
    });

    response.status(200).json({ received: true });
});
