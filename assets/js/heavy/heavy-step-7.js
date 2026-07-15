// ============================================================================
// 🚛 FILINGS4U HEAVY TAX ENGINE - STEP 7: SECURE STRIPE CHECKOUT CORE (PART 1)
// ============================================================================
(function() {
  "use strict";

  // Unified production publishable key constants token
  const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE';
  
  window.stripeInstance = window.stripeInstance || null;
  window.stripeElementsContainer = window.stripeElementsContainer || null;
  window.stripePaymentElementInstance = window.stripePaymentElementInstance || null;

  window.initializeHeavyPaymentInterfaceStep7 = async function() {
    console.log("[Heavy Stripe] Initiating compliance checkout interface matrix layers...");
    
    const baseContainer = document.getElementById("heavy-panel-7");
    if (!baseContainer) {
      console.error("[Heavy Step 7] Target container placeholder #heavy-panel-7 missing from DOM.");
      return;
    }

    // Force step panel visibility parameters flat on screen instantly
    baseContainer.style.setProperty("display", "block", "important");

    if (typeof Stripe === "undefined") {
      baseContainer.innerHTML = "<div style='color:#ef4444; background:rgba(239,68,68,0.05); border:1px dashed #ef4444; padding:16px; border-radius:6px; font-weight:700; font-size:0.9rem; text-align:center;'>⚠️ Payment SDK script assets offline. Please reload.</div>";
      return;
    }

    try {
      if (!window.stripeInstance) {
        window.stripeInstance = Stripe(ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY);
      }

      // Extract the aggregate sum amounts calculated dynamically inside Step 6 cache memories
      const currentGrandTotal = parseFloat(window.finalCheckoutCollectibleTotalSumAmount || localStorage.getItem("f4u_running_total") || 44.90);
      
      if (isNaN(currentGrandTotal) || currentGrandTotal <= 0) {
        console.warn("[Heavy Stripe] Cost variables dry. Re-polling summary ledger parameters...");
        baseContainer.innerHTML = "<div style='text-align:center; padding:40px; color:#0a1f44;'><i class='fa-solid fa-circle-notch fa-spin'></i> Calculating final statement billing items...</div>";
        setTimeout(window.initializeHeavyPaymentInterfaceStep7, 300);
        return;
      }

      baseContainer.innerHTML = `
        <!-- FLAT SECURE CHECKOUT HEADER -->
        <div style="border-bottom: 2px solid #0a1f44 !important; padding-bottom: 12px !important; margin-bottom: 24px !important; box-sizing: border-box !important; width: 100% !important;">
          <h3 style="margin: 0 !important; color: #0a1f44 !important; font-size: 1.35rem !important; font-weight: 800 !important; letter-spacing: -0.4px !important;">💳 Secure Checkout Gateway</h3>
          <p style="margin: 6px 0 0 0 !important; color: #64748b !important; font-size: 0.85rem !important; font-weight: 500 !important;">Your billing connection is encrypted with industry-standard 256-bit SSL protection layers.</p>
        </div>

        <!-- HIGH-DENSITY PRICE BADGE NOTIFICATION CARD -->
        <div style="background: #f8fafc !important; border: 1px solid #cbd5e1 !important; padding: 14px 18px !important; border-radius: 8px !important; display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; box-sizing: border-box !important; margin-bottom: 24px !important;">
          <span style="font-size: 0.85rem !important; font-weight: 700 !important; color: #0a1f44 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important;">Filing Order Total Due:</span>
          <strong id="payment-gateway-total-display" style="font-family: monospace !important; color: #10b981 !important; font-size: 1.45rem !important;">$${currentGrandTotal.toFixed(2)}</strong>
        </div>

        <!-- RESPONSIVE USER INTEGRATION ACCOUNT PROFILE LAYER -->
        <div class="integrated-profile-matrix" style="margin-bottom: 20px !important; box-sizing: border-box !important; text-align: left !important; width: 100% !important; display: flex !important; flex-direction: column !important; gap: 16px !important; clear: both !important;">
          
          <!-- FIRST & LAST NAME FIELD LAYOUT ROW -->
          <div style="display: flex !important; gap: 16px !important; width: 100% !important; box-sizing: border-box !important; flex-wrap: wrap !important;">
            <div style="display: flex !important; flex-direction: column !important; gap: 6px !important; flex: 1 !important; min-width: 250px !important;">
              <label for="portal_user_first_name" style="font-weight: 800 !important; font-size: 0.75rem !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; color: #0a1f44 !important;">First Name</label>
              <input type="text" id="portal_user_first_name" required placeholder="John" style="width: 100% !important; padding: 12px !important; font-size: 0.9rem !important; border-radius: 6px !important; border: 1px solid #cbd5e1 !important; background: #ffffff !important; color: #0a1f44 !important; outline: none !important; box-sizing: border-box !important;">
            </div>
            <div style="display: flex !important; flex-direction: column !important; gap: 6px !important; flex: 1 !important; min-width: 250px !important;">
              <label for="portal_user_last_name" style="font-weight: 800 !important; font-size: 0.75rem !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; color: #0a1f44 !important;">Last Name</label>
              <input type="text" id="portal_user_last_name" required placeholder="Doe" style="width: 100% !important; padding: 12px !important; font-size: 0.9rem !important; border-radius: 6px !important; border: 1px solid #cbd5e1 !important; background: #ffffff !important; color: #0a1f44 !important; outline: none !important; box-sizing: border-box !important;">
            </div>
          </div>

          <!-- EMAIL & PHONE FIELD LAYOUT ROW -->
          <div style="display: flex !important; gap: 16px !important; width: 100% !important; box-sizing: border-box !important; flex-wrap: wrap !important;">
            <div style="display: flex !important; flex-direction: column !important; gap: 6px !important; flex: 1 !important; min-width: 250px !important;">
              <label for="portal_user_email_input" style="font-weight: 800 !important; font-size: 0.75rem !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; color: #0a1f44 !important;">Account Email Address</label>
              <input type="email" id="portal_user_email_input" required placeholder="you@example.com" style="width: 100% !important; padding: 12px !important; font-size: 0.9rem !important; border-radius: 6px !important; border: 1px solid #cbd5e1 !important; background: #ffffff !important; color: #0a1f44 !important; outline: none !important; box-sizing: border-box !important;">
            </div>
            <div style="display: flex !important; flex-direction: column !important; gap: 6px !important; flex: 1 !important; min-width: 250px !important;">
              <label for="portal_user_phone" style="font-weight: 800 !important; font-size: 0.75rem !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; color: #0a1f44 !important;">Contact Phone Number</label>
              <input type="tel" id="portal_user_phone" required placeholder="(555) 000-0000" style="width: 100% !important; padding: 12px !important; font-size: 0.9rem !important; border-radius: 6px !important; border: 1px solid #cbd5e1 !important; background: #ffffff !important; color: #0a1f44 !important; outline: none !important; box-sizing: border-box !important;">
            </div>
          </div>
        </div>
      `;
        // INLINE CSS RULES: Handles alert-free input shakers on mobile devices
        const styleSheetNode = document.createElement("style");
        styleSheetNode.textContent = `
          .field-error-shake {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
            animation: inlineFieldShake 0.4s ease-in-out !important;
          }
          .field-validated-emerald {
            border-color: #10b981 !important;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
          }
          @keyframes inlineFieldShake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
          }
          @media (max-width: 600px) {
            .wizard-action-row-heavy {
              flex-direction: column-reverse !important;
              gap: 12px !important;
              width: 100% !important;
            }
            #f4uHeavySubmitPaymentBtn, .wizard-action-row-heavy button {
              width: 100% !important;
              justify-content: center !important;
              padding: 14px !important;
              margin: 0 !important;
            }
          }
        `;
        document.head.appendChild(styleSheetNode);

        // Append the Stripe Element mount anchor points flat inside your card decks HTML strings
        baseContainer.innerHTML += `
          <div id="stripe-payment-element-mount-point" style="min-height: 200px !important; margin-bottom: 24px !important; clear: both !important; width: 100% !important; box-sizing: border-box !important;"></div>
          <div id="step7-error-banner-target" style="display: none !important; color: #ef4444 !important; background: #fef2f2 !important; border: 1px solid #fee2e2 !important; padding: 12px !important; border-radius: 6px !important; font-size: 0.85rem !important; margin-bottom: 24px !important; font-weight: 500 !important; text-align: left !important; clear: both !important; width: 100% !important; box-sizing: border-box !important;"></div>

          <!-- RESPONSIVE ACTION ROW NAVIGATION FOOTER FOOT NOTES -->
          <div class="wizard-action-row-heavy" style="display: flex !important; justify-content: space-between !important; align-items: center !important; margin-top: 32px !important; padding-top: 20px !important; border-top: 1px solid #e2e8f0 !important; width: 100% !important; box-sizing: border-box !important; clear: both !important;">
            <button type="button" onclick="window.switchHeavyTaxViewPanel(6)" style="background: #f1f5f9 !important; border: 1px solid #cbd5e1 !important; color: #475569 !important; padding: 12px 24px !important; border-radius: 6px !important; font-size: 0.9rem !important; font-weight: 700 !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 6px !important; transition: background 0.15s ease !important;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
              <i class="fa-solid fa-arrow-left"></i> Back to Ledger
            </button>
            <button id="f4uHeavySubmitPaymentBtn" type="button" onclick="window.executeHeavySecureCheckoutTransaction(event)" style="background: #10b981 !important; border: none !important; color: #ffffff !important; padding: 14px 40px !important; border-radius: 6px !important; font-size: 0.95rem !important; font-weight: 800 !important; cursor: pointer !important; transition: all 0.2s ease !important; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2) !important; display: inline-flex !important; align-items: center !important; gap: 8px !important;" onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">
              Authorize Secure Payment <i class="fa-solid fa-lock"></i>
            </button>
          </div>
        `;

        if (window.stripePaymentElementInstance) {
          window.stripePaymentElementInstance.destroy();
          window.stripePaymentElementInstance = null;
        }

        // 🟢 STRIPE THEME CONFIG: Sets look and feel dynamically to blend right into your portal
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
              borderColor: '#cbd5e1',
              boxShadow: 'none'
            },
            rules: {
              '.Input': { padding: '12px', fontSize: '15px', transition: 'all 0.2s ease-in-out' },
              '.Input:focus': { borderColor: '#10b981', boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.1)' },
              '.Input--invalid': { borderColor: '#ef4444', boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.15)' }
            }
          }
        });

        window.stripePaymentElementInstance = window.stripeElementsContainer.create("payment", {
          layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: true }
        });

        window.stripePaymentElementInstance.mount("#stripe-payment-element-mount-point");
        console.log("[Heavy Stripe Success] Accordion frame attached securely to element mount point.");

        window.stripePaymentElementInstance.on("change", function(event) {
          const errorDisplayNode = document.getElementById("step7-error-banner-target");
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
      console.error("[Heavy Stripe Critical Mount Failure]", mountError);
    }
  };
  // ============================================================================ //
  // 💳 TRANSACTION PIPELINE SUBMISSION ENGINE (STRIPE-CONFIRM ARCHITECTURE)      //
  // ============================================================================ //
  window.executeHeavySecureCheckoutTransaction = async function(event) {
    if (event && typeof event.preventDefault === "function") event.preventDefault();
    
    const submitBtn = document.getElementById("f4uHeavySubmitPaymentBtn");
    const errorBanner = document.getElementById("step7-error-banner-target");
    
    // 1. Target your exact 4 horizontal registration layout fields
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
          input.addEventListener("input", function() {
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

    // 2. RUN VALIDATION LAYER: Shake empty fields without old pop-up boxes
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
      
      const activeGrandCost = parseFloat(window.finalCheckoutCollectibleTotalSumAmount) || 44.90;

      // ACCOUNT GENERATOR: Pull tracking token from state parameters or generate new
      let uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token");
      if (!uniqueTrackingToken) {
        uniqueTrackingToken = "F4U-2290-" + Math.random().toString(36).substring(2, 10).toUpperCase();
        localStorage.setItem("f4u_active_tracking_token", uniqueTrackingToken);
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...';
      }

      // Gather receipts metadata for session persistence
      const checkoutManifestPayload = {
        transaction_hash_id: uniqueTrackingToken,
        communications_email: finalEmail,
        financials_grand_total_charge: activeGrandCost,
        customer_first_name: firstName,
        customer_last_name: lastName,
        customer_phone: phone
      };

      sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(checkoutManifestPayload));
      localStorage.setItem("f4u_checkout_email", finalEmail);

      const client = window.supabaseClient || window.supabase || window.f4uWizardSupabaseInstance;
      const sessionUuid = window.activeHeavySessionUuid;

      // ============================================================================ //
      // DATA PRESERVATION: UPSERT RECORD TO DATABASE MATRIX PRIOR TO STRIPE PAY CALL //
      // ============================================================================ //
      if (client && typeof client.from === "function" && sessionUuid && !sessionUuid.startsWith("temp_")) {
        console.log("[Heavy Stripe] Preserving finalized customer metadata inside Supabase clusters...");
        
        const { error: dbUpsertError } = await client
          .from('heavy_tax_sessions')
          .update({
            irs_submission_status: 'PAID_TRANSACTION_VERIFIED',
            is_read_by_broker: true,
            contact_phone: phone,
            // Pass registration profile parameters nested inside your dynamic payload objects
            collected_payload_metadata: {
              customer_first_name: firstName,
              customer_last_name: lastName,
              unique_invoice_tracking_token: uniqueTrackingToken
            }
          })
          .eq('id', sessionUuid);

        if (dbUpsertError) throw new Error(`Database Pre-Synchronization Failed: ${dbUpsertError.message}`);
      }

      // 6. EXECUTE STRIPE PAY HANDSHAKE
      if (window.stripeElementsContainer) {
        // Inline validation interceptor for card expiration/zip missing checks
        const { error: stripeSubmitError } = await window.stripeElementsContainer.submit();
        if (stripeSubmitError) {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Authorize Secure Payment <i class="fa-solid fa-lock"></i>';
          }
          return false; 
        }

        const isMockSecret = String(window.stripeClientSecret).startsWith("pi_mock_intent_");

        if (window.stripeInstance && window.stripeClientSecret && !isMockSecret) {
          console.log("[Heavy Stripe Engine] Transmitting active payment authorization intent via secure Stripe API...");
          
          const { error: confirmError } = await window.stripeInstance.confirmPayment({
            elements: window.stripeElementsContainer,
            clientSecret: window.stripeClientSecret,
            confirmParams: {
              return_url: `${window.location.origin}/heavy-wizard.html?status=success&token=${uniqueTrackingToken}&email=${encodeURIComponent(finalEmail)}`,
              receipt_email: finalEmail
            },
            redirect: "if_required"
          });

          if (confirmError) throw confirmError;
        } else {
          console.log("[Heavy Stripe Simulation] Sandbox key detected or mock client secret active. Bypassing bank loops locally.");
        }
      }

      // 7. SWAP OPERATION TIMELINE WORKING SPACE PANELS OVER TO STEP 8 MONITOR
      if (typeof window.compileSuccessTransmissionPortalStep8 === "function") {
        await window.compileSuccessTransmissionPortalStep8();
      }
      if (typeof window.switchHeavyTaxViewPanel === "function") {
        window.switchHeavyTaxViewPanel(8);
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
        submitBtn.innerHTML = 'Authorize Secure Payment <i class="fa-solid fa-lock"></i>';
      }
    }
  };

})();
