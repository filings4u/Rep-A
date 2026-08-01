// ============================================================================
// ðŸš› FILINGS4U HEAVY TAX ENGINE - STEP 6: PURCHASE SUMMARY ORDER LEDGER
// ============================================================================
;(function() {
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

   // ============================================================================
// ðŸš› FILINGS4U HEAVY TAX ENGINE - STEP 6: PURCHASE ORDER LEDGER RENDERER
// ============================================================================

// --- DYNAMIC ADD-ON COMPILATION STRINGS PASS ---
// Ensure your background array conditions wrap lines precisely like this:
if (activeAddons.auditShield) {
  mathAccumulatedTotalFee += 29.00;
  compiledAddonHtmlLines += `
    <div class="f4u-invoice-row" style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0; margin-bottom: 12px; font-size: 0.85rem;">
      <span class="f4u-invoice-label" style="color: #475569; font-weight: 500; text-align: left;">Comprehensive Audit Defense Shield Upgrade:</span>
      <strong class="f4u-invoice-price" style="font-family: monospace; color: #0f172a; min-width: 75px; text-align: right;">+$29.00</strong>
    </div>
  `;
}
if (activeAddons.priorityQueue) {
  mathAccumulatedTotalFee += 19.00;
  compiledAddonHtmlLines += `
    <div class="f4u-invoice-row" style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0; margin-bottom: 12px; font-size: 0.85rem;">
      <span class="f4u-invoice-label" style="color: #475569; font-weight: 500; text-align: left;">Expedited Priority IRS Submission E-File Queue:</span>
      <strong class="f4u-invoice-price" style="font-family: monospace; color: #0f172a; min-width: 75px; text-align: right;">+$19.00</strong>
    </div>
  `;
}
if (activeAddons.vaultStorage) {
  mathAccumulatedTotalFee += 9.00;
  compiledAddonHtmlLines += `
    <div class="f4u-invoice-row" style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0; margin-bottom: 12px; font-size: 0.85rem;">
      <span class="f4u-invoice-label" style="color: #475569; font-weight: 500; text-align: left;">Lifetime Schedule 1 Off-Site Document Vault Storage:</span>
      <strong class="f4u-invoice-price" style="font-family: monospace; color: #0f172a; min-width: 75px; text-align: right;">+$9.00</strong>
    </div>
  `;
}

// --- OVERWRITE MASTER ITEMIZATION CARD INNER CONTAINER STRINGS ---
placeholder.innerHTML = `
  <div style="border-bottom: 2px solid #0a1f44 !important; padding-bottom: 12px !important; margin-bottom: 24px !important; box-sizing: border-box !important; width: 100% !important;">
    <h3 style="margin: 0 !important; color: #0a1f44 !important; font-size: 1.35rem !important; font-weight: 800 !important; letter-spacing: -0.4px !important;">ðŸ“‹ Purchase Order Ledger Review</h3>
    <p style="margin: 6px 0 0 0 !important; color: #64748b !important; font-size: 0.85rem !important; font-weight: 500 !important;">Review your itemized ledger invoices before advancing to secure checkout encryption keys.</p>
  </div>

  <div style="border: 1px solid #cbd5e1 !important; border-radius: 8px !important; overflow: hidden !important; width: 100% !important; box-sizing: border-box !important; margin-bottom: 24px !important; background: #ffffff !important; text-align: left !important;">
    <div style="background: #0a1f44 !important; padding: 12px 16px !important; font-weight: 800 !important; font-size: 0.8rem !important; color: #ffffff !important; text-transform: uppercase !important; letter-spacing: 0.5px !important;">Final Itemized Order Invoice Statement</div>
    
    <div style="padding: 16px !important; display: flex !important; flex-direction: column !important; box-sizing: border-box !important; width: 100% !important;">
      
      <div class="f4u-invoice-row" style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0; margin-bottom: 12px; font-size: 0.85rem;">
        <span class="f4u-invoice-label" style="color: #475569; font-weight: 500; text-align: left;">Combined Fleet IRS Form 2290 Tax Liability:</span>
        <strong class="f4u-invoice-price" style="font-family: monospace; color: #0f172a; min-width: 75px; text-align: right;">$${irsTaxOwed.toFixed(2)}</strong>
      </div>

      <div class="f4u-invoice-row" style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0; margin-bottom: 12px; font-size: 0.85rem;">
        <span class="f4u-invoice-label" style="color: #475569; font-weight: 500; text-align: left;">Platform Transmission Processing Fee:</span>
        <strong class="f4u-invoice-price" style="font-family: monospace; color: #0f172a; min-width: 75px; text-align: right;">$${portalServiceFee.toFixed(2)}</strong>
      </div>
      
      ${compiledAddonHtmlLines}
      
      <div class="f4u-invoice-total-row" style="border-top: 2px solid #0a1f44 !important; padding-top: 14px !important; margin-top: 8px !important; display: flex !important; justify-content: space-between !important; align-items: center !important; color: #0a1f44 !important; width: 100% !important; box-sizing: border-box !important;">
        <span style="font-weight: 800 !important; font-size: 0.95rem !important;">Total Collectible Billing Amount:</span>
        <strong style="font-family: monospace !important; color: #10b981 !important; font-size: 1.45rem !important;">$${mathAccumulatedTotalFee.toFixed(2)}</strong>
      </div>
    </div>
  </div>

  <div style="background: #f8fafc !important; border: 1px solid #cbd5e1 !important; border-radius: 8px !important; padding: 16px !important; margin-bottom: 24px !important; display: flex !important; gap: 12px !important; align-items: center !important; text-align: left !important; width: 100% !important; box-sizing: border-box !important;">
    <span style="font-size: 1.25rem !important; line-height: 1 !important; color: #10b981 !important;"><i class="fa-solid fa-shield-halved"></i></span>
    <p style="margin: 0 !important; font-size: 0.825rem !important; color: #334155 !important; line-height: 1.4 !important; font-weight: 600 !important;">
      <strong>Secure Transmission Lock Ready:</strong> Your authorization token signatures and fleet vehicle arrays are locked into memory. Continuing will redirect your parameters to our secure checkout gateway.
    </p>
  </div>

  <!-- FIXED NAVIGATION FOOTER BUTTON ROWS -->
  <div style="display: flex !important; justify-content: space-between !important; align-items: center !important; border-top: 1px solid #e2e8f0 !important; padding-top: 20px !important; width: 100% !important; box-sizing: border-box !important; clear: both !important;">
    <button type="button" onclick="window.switchHeavyTaxViewPanel(5)" style="padding: 12px 20px !important; background: #f1f5f9 !important; border: 1px solid #cbd5e1 !important; border-radius: 6px !important; font-size: 0.875rem !important; font-weight: 700 !important; color: #475569 !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 6px !important;">
      <i class="fa-solid fa-arrow-left"></i> Back
    </button>
    <button type="button" onclick="window.advanceToStep7Payment()" style="padding: 14px 36px !important; background: #0a1f44 !important; color: #ffffff !important; border: none !important; border-radius: 6px !important; font-weight: 700 !important; font-size: 0.95rem !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 8px !important;">
      Proceed to Secure Checkout <i class="fa-solid fa-credit-card"></i>
    </button>
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

