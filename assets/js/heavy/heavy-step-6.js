// ============================================================================
// 🚛 FILINGS4U HEAVY TAX ENGINE - STEP 6: PURCHASE SUMMARY ORDER LEDGER
// ============================================================================
(function() {
  "use strict";

  window.compileFilingFeePurchaseSummaryStep6 = function() {
    const placeholder = document.getElementById("heavy-panel-6");
    if (!placeholder) return;

    // Gather global numbers and properties established in prior steps
    const irsTaxOwed = parseFloat(window.computedIrsTaxOwedBaseAmount) || 0;
    const portalServiceFee = parseFloat(window.platformFilingServiceFeeValue) || 44.90;
    
    let compiledAddonHtmlLines = "";
    let mathAccumulatedTotalFee = irsTaxOwed + portalServiceFee;

    // 1. Cross-reference the active selections cached inside your add-on module registry
    const activeAddons = window.selectedHeavyTaxAddonsRegistry || {};

    if (activeAddons.auditShield) {
      mathAccumulatedTotalFee += 29.00;
      compiledAddonHtmlLines += `
        <div style="display: flex; justify-content: space-between; align-items: center; color: #475569; padding-bottom: 8px;">
          <span>Comprehensive Audit Defense Shield Upgrade:</span>
          <strong style="font-family: monospace; color: #0f172a;">+$29.00</strong>
        </div>
      `;
    }
    if (activeAddons.priorityQueue) {
      mathAccumulatedTotalFee += 19.00;
      compiledAddonHtmlLines += `
        <div style="display: flex; justify-content: space-between; align-items: center; color: #475569; padding-bottom: 8px;">
          <span>Expedited Priority IRS Submission E-File Queue:</span>
          <strong style="font-family: monospace; color: #0f172a;">+$19.00</strong>
        </div>
      `;
    }
    if (activeAddons.vaultStorage) {
      mathAccumulatedTotalFee += 9.00;
      compiledAddonHtmlLines += `
        <div style="display: flex; justify-content: space-between; align-items: center; color: #475569; padding-bottom: 8px;">
          <span>Lifetime Schedule 1 Off-Site Document Vault Storage:</span>
          <strong style="font-family: monospace; color: #0f172a;">+$9.00</strong>
        </div>
      `;
    }

    // Lock the final aggregate amount so your upcoming Stripe transaction system loads it safely
    window.finalCheckoutCollectibleTotalSumAmount = mathAccumulatedTotalFee;

    // Flat HTML order ledger visualization panel injection
    placeholder.innerHTML = `
      <div style="border-bottom: 2px solid #0a1f44; padding-bottom: 12px; margin-bottom: 24px; box-sizing: border-box; width: 100%;">
        <h3 style="margin: 0; color: #0a1f44; font-size: 1.35rem; font-weight: 800; letter-spacing: -0.4px;">📋 Purchase Order Ledger Review</h3>
        <p style="margin: 6px 0 0 0; color: #64748b; font-size: 0.85rem; font-weight: 500;">Review your itemized ledger invoices before advancing to secure checkout encryption keys.</p>
      </div>

      <!-- HIGHER DENSITY ITEMIZED INVOICE SHEET CARD -->
      <div style="border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; width: 100%; box-sizing: border-box; margin-bottom: 24px; background: #ffffff; text-align: left;">
        <div style="background: #0a1f44; padding: 12px 16px; font-weight: 800; font-size: 0.8rem; color: #ffffff; text-transform: uppercase; letter-spacing: 0.5px;">Final Itemized Order Invoice Statement</div>
        
        <div style="padding: 18px; display: flex; flex-direction: column; gap: 12px; font-size: 0.9rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; color: #475569; padding-bottom: 8px; border-bottom: 1px dashed #e2e8f0;">
            <span>Combined Fleet IRS Form 2290 Tax Liability:</span>
            <strong style="font-family: monospace; color: #0f172a;">$${irsTaxOwed.toFixed(2)}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; color: #475569; padding-bottom: 8px; border-bottom: 1px dashed #e2e8f0;">
            <span>E-Filing Portal Platform Transmission Processing Fee:</span>
            <strong style="font-family: monospace; color: #0f172a;">$${portalServiceFee.toFixed(2)}</strong>
          </div>
          
          ${compiledAddonHtmlLines}
          
          <div style="border-top: 2px solid #0a1f44; padding-top: 14px; margin-top: 6px; display: flex; justify-content: space-between; align-items: center; color: #0a1f44;">
            <span style="font-weight: 800; font-size: 1rem;">Total Collectible Billing Amount:</span>
            <strong style="font-family: monospace; color: #10b981; font-size: 1.45rem;">$${mathAccumulatedTotalFee.toFixed(2)}</strong>
          </div>
        </div>
      </div>

      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 24px; display: flex; gap: 12px; align-items: center; text-align: left;">
        <span style="font-size: 1.35rem; line-height: 1; color: #10b981;"><i class="fa-solid fa-shield-halved"></i></span>
        <p style="margin: 0; font-size: 0.825rem; color: #334155; line-height: 1.4; font-weight: 600;">
          <strong>Secure Transmission Lock Ready:</strong> Your authorization token signatures and fleet vehicle arrays are locked into memory. Continuing will redirect your parameters to our secure checkout gateway.
        </p>
      </div>

      <!-- ACTION ACCENT ROW FOOTER -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 16px; box-sizing: border-box; width: 100%; clear: both;">
        <button type="button" onclick="window.switchHeavyTaxViewPanel(5)" style="padding: 10px 18px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.85rem; font-weight: 700; color: #475569; cursor: pointer; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-arrow-left"></i> Back</button>
        <button type="button" onclick="window.advanceToStep7Payment()" style="padding: 12px 36px; background: #0a1f44; color: #ffffff; border: none; border-radius: 6px; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px;">Proceed to Secure Checkout <i class="fa-solid fa-credit-card"></i></button>
      </div>
    `;
  };

  window.advanceToStep7Payment = function() {
    if (typeof window.initializeHeavyPaymentInterfaceStep7 === "function") {
      window.initializeHeavyPaymentInterfaceStep7();
    }
    if (typeof window.switchHeavyTaxViewPanel === "function") {
      window.switchHeavyTaxViewPanel(7);
    }
  };

})();
