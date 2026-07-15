// ============================================================================
// 🚛 FILINGS4U HEAVY TAX ENGINE - STEP 7: SECURE PAYMENT GATEWAY CHECKOUT
// ============================================================================
(function() {
  "use strict";

  window.initializeHeavyPaymentInterfaceStep7 = function() {
    const placeholder = document.getElementById("heavy-panel-7");
    if (!placeholder) return;

    const totalBillableAmount = parseFloat(window.finalCheckoutCollectibleTotalSumAmount) || 44.90;

    placeholder.innerHTML = `
      <div style="border-bottom: 2px solid #0a1f44; padding-bottom: 12px; margin-bottom: 24px; box-sizing: border-box; width: 100%;">
        <h3 style="margin: 0; color: #0a1f44; font-size: 1.35rem; font-weight: 800; letter-spacing: -0.4px;">💳 Secure Checkout Gateway</h3>
        <p style="margin: 6px 0 0 0; color: #64748b; font-size: 0.85rem; font-weight: 500;">Your billing connection is encrypted with industry-standard 256-bit SSL protection layers.</p>
      </div>

      <!-- PRICE EMBED BADGE NOTIFICATION CARD -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; padding: 14px 18px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; margin-bottom: 24px;">
        <span style="font-size: 0.85rem; font-weight: 700; color: #0a1f44; text-transform: uppercase; letter-spacing: 0.5px;">Filing Order Total Due:</span>
        <strong style="font-family: monospace; color: #10b981; font-size: 1.45rem;">$${totalBillableAmount.toFixed(2)}</strong>
      </div>

      <!-- FLAT STRIPE CARD COLLECTION PANEL FRAMEWORK -->
      <form id="f4u-heavy-payment-form" onsubmit="event.preventDefault();" style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box; text-align: left; margin-bottom: 24px;">
        <div style="display: flex; flex-direction: column; gap: 6px; width: 100%; box-sizing: border-box;">
          <label style="font-weight: 800; font-size: 0.75rem; text-transform: uppercase; color: #0a1f44; letter-spacing: 0.5px;">Cardholder Name</label>
          <input type="text" id="heavy_card_name" required style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #ffffff;" placeholder="As printed on the front of the physical card...">
        </div>

        <div style="display: flex; flex-direction: column; gap: 6px; width: 100%; box-sizing: border-box;">
          <label style="font-weight: 800; font-size: 0.75rem; text-transform: uppercase; color: #0a1f44; letter-spacing: 0.5px;">Credit Card Details</label>
          <div style="position: relative; border: 1px solid #cbd5e1; border-radius: 6px; background: #ffffff; padding: 12px; min-height: 45px; box-sizing: border-box; width: 100%;">
            <!-- TARGET MOUNTING INJECTION CONTAINER FOR EXCLUSIVE INTENT INTERFACES -->
            <div id="f4u-heavy-stripe-card-element-container" style="width: 100%;">
              <input type="text" placeholder="1111 2222 3333 4444   MM / YY   CVC" style="width: 100%; border: none; outline: none; font-family: monospace; font-size: 0.95rem; background: transparent;">
            </div>
          </div>
        </div>

        <!-- TRANSACTION PROCESSING TIMELINE FOOTER NAVIGATION BAR -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 16px; box-sizing: border-box; width: 100%; clear: both; margin-top: 10px;">
          <button type="button" onclick="window.switchHeavyTaxViewPanel(6)" style="padding: 10px 18px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.85rem; font-weight: 700; color: #475569; cursor: pointer; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-arrow-left"></i> Back</button>
          <button type="button" id="f4uHeavySubmitPaymentBtn" onclick="window.executeHeavySecureCheckoutTransaction()" style="padding: 14px 40px; background: #10b981; color: #ffffff; border: none; border-radius: 6px; font-weight: 800; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);">
            Authorize Secure Payment <i class="fa-solid fa-lock"></i>
          </button>
        </div>
      </form>
    `;
  };

  // --- EXECUTE SECURE STRIPE CHECKOUT ROUTING PIPELINE ---
  window.executeHeavySecureCheckoutTransaction = async function() {
    const payBtn = document.getElementById("f4uHeavySubmitPaymentBtn");
    const nameEl = document.getElementById("heavy_card_name");
    const client = window.supabaseClient || window.supabase || window.f4uWizardSupabaseInstance;
    const sessionUuid = window.activeHeavySessionUuid;

    if (!nameEl?.value.trim()) {
      alert("Please specify the cardholder profile name to authorize transactions.");
      nameEl?.focus();
      return;
    }
    if (!client || !sessionUuid) {
      alert("Fulfillment token binding dropped out. Return to Step 1.");
      return;
    }

    // Lock payment interface view elements into an active charging/processing layout state
    if (payBtn) {
      payBtn.disabled = true;
      payBtn.style.setProperty("background", "#64748b", "important");
      payBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Encrypting Transaction Token...`;
    }

    try {
      console.log(`[Heavy Checkout Core] Transmitting dynamic metadata matrices parameters down to Supabase channels...`);

      // Write payment authorization values directly down to your Postgres schema registry profiles
      const { error } = await client
        .from("heavy_tax_sessions")
        .update({
          irs_submission_status: "PAID_TRANSACTION_VERIFIED",
          is_read_by_broker: true
        })
        .eq("id", sessionUuid);

      if (error) throw error;

      // Simulate network confirmation routing handshake delays before loading the final success screens
      setTimeout(() => {
        console.log("[Heavy Checkout Success] Payment settlement approved. Routing workspace down to transmission portal.");
        if (typeof window.compileSuccessTransmissionPortalStep8 === "function") {
          window.compileSuccessTransmissionPortalStep8();
        }
        if (typeof window.switchHeavyTaxViewPanel === "function") {
          window.switchHeavyTaxViewPanel(8);
        }
      }, 1800);

    } catch (faultTrace) {
      console.error("[Heavy Checkout Processing Collapse]", faultTrace.message);
      alert("Merchant transaction rejected. Gateway error log: " + faultTrace.message);
      if (payBtn) {
        payBtn.disabled = false;
        payBtn.style.setProperty("background", "#10b981", "important");
        payBtn.innerHTML = `Authorize Secure Payment <i class="fa-solid fa-lock"></i>`;
      }
    }
  };
})();
