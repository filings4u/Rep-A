// ============================================================================
// 🚛 FILINGS4U HEAVY TAX ENGINE - STEP 4: ADD-ONS SELECTION SUITE
// ============================================================================
(function() {
  "use strict";

  // Persistent background selections tracker
  window.selectedHeavyTaxAddonsRegistry = {
    auditShield: false,
    priorityQueue: false,
    vaultStorage: false
  };

  window.initializeHeavyAddonsPanelStep4 = function() {
    const placeholder = document.getElementById("heavy-panel-4");
    if (!placeholder) return;

    placeholder.innerHTML = `
      <div style="border-bottom: 2px solid #0a1f44; padding-bottom: 12px; margin-bottom: 24px; box-sizing: border-box; width: 100%;">
        <h3 style="margin: 0; color: #0a1f44; font-size: 1.35rem; font-weight: 800; letter-spacing: -0.4px;">🛡️ Premium Compliance Upgrades</h3>
        <p style="margin: 6px 0 0 0; color: #64748b; font-size: 0.85rem; font-weight: 500;">Protect your fleet, expedite IRS queues, and unlock priority audit recovery resources.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box; margin-bottom: 24px;">
        
        <!-- CARD 1: AUDIT SHIELD -->
        <div id="card_addon_audit" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; display: flex; justify-content: space-between; align-items: center; background: #ffffff; box-sizing: border-box; transition: all 0.2s ease;">
          <div style="max-width: 75%; text-align: left;">
            <strong style="color: #0a1f44; font-size: 0.95rem; display: block; margin-bottom: 4px;">Comprehensive Audit Defense Shield</strong>
            <p style="margin: 0; font-size: 0.825rem; color: #64748b; line-height: 1.45;">Full CPA representation if the IRS reviews your Form 2290 mileage or logging suspension status logs.</p>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; gap: 8px; align-items: flex-end;">
            <strong style="font-family: monospace; color: #10b981; font-size: 1.15rem;">$29.00</strong>
            <button type="button" onclick="window.toggleHeavyTaxAddonItem('auditShield')" id="btn_addon_audit" style="padding: 8px 16px; background: #0a1f44; color: #fff; font-weight: 700; border: none; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">Add Shield</button>
          </div>
        </div>

        <!-- CARD 2: PRIORITY QUEUE -->
        <div id="card_addon_priority" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; display: flex; justify-content: space-between; align-items: center; background: #ffffff; box-sizing: border-box; transition: all 0.2s ease;">
          <div style="max-width: 75%; text-align: left;">
            <strong style="color: #0a1f44; font-size: 0.95rem; display: block; margin-bottom: 4px;">Expedited Priority E-File Queue</strong>
            <p style="margin: 0; font-size: 0.825rem; color: #64748b; line-height: 1.45;">Skips our standard pipeline and submits your data models to the IRS gateway instantly upon pay authorization.</p>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; gap: 8px; align-items: flex-end;">
            <strong style="font-family: monospace; color: #10b981; font-size: 1.15rem;">$19.00</strong>
            <button type="button" onclick="window.toggleHeavyTaxAddonItem('priorityQueue')" id="btn_addon_priority" style="padding: 8px 16px; background: #0a1f44; color: #fff; font-weight: 700; border: none; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">Add Option</button>
          </div>
        </div>

        <!-- CARD 3: VAULT STORAGE -->
        <div id="card_addon_vault" style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; display: flex; justify-content: space-between; align-items: center; background: #ffffff; box-sizing: border-box; transition: all 0.2s ease;">
          <div style="max-width: 75%; text-align: left;">
            <strong style="color: #0a1f44; font-size: 0.95rem; display: block; margin-bottom: 4px;">Lifetime Schedule 1 Document Vault Duplicates</strong>
            <p style="margin: 0; font-size: 0.825rem; color: #64748b; line-height: 1.45;">Secure off-site backup. Instantly retrieve watermarked IRS verification sheets anytime if you lose your files during roadside checks.</p>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; gap: 8px; align-items: flex-end;">
            <strong style="font-family: monospace; color: #10b981; font-size: 1.15rem;">$9.00</strong>
            <button type="button" onclick="window.toggleHeavyTaxAddonItem('vaultStorage')" id="btn_addon_vault" style="padding: 8px 16px; background: #0a1f44; color: #fff; font-weight: 700; border: none; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">Add Vault</button>
          </div>
        </div>

      </div>

      <!-- ACTION ACCENT ROW FOOTER -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 16px; box-sizing: border-box; width: 100%; clear: both;">
        <button type="button" onclick="window.switchHeavyTaxViewPanel(3)" style="padding: 10px 18px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.85rem; font-weight: 700; color: #475569; cursor: pointer; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-arrow-left"></i> Back</button>
        <button type="button" onclick="window.advanceToStep5Signature()" style="padding: 12px 32px; background: #0a1f44; color: #ffffff; border: none; border-radius: 6px; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px;">Continue to Authorization <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    `;

    // Refresh UI layout elements states to reflect current background cache data selection properties
    window.syncAddonButtonsVisualStates();
  };

   // --- ADD-ON ITEM TOGGLE INTERCEPTOR LOGIC ---
  window.toggleHeavyTaxAddonItem = function(key) {
    if (window.selectedHeavyTaxAddonsRegistry[key] !== undefined) {
      window.selectedHeavyTaxAddonsRegistry[key] = !window.selectedHeavyTaxAddonsRegistry[key];
      console.log(`[Add-On Sync] Toggle applied to element: "${key}" | New state: ${window.selectedHeavyTaxAddonsRegistry[key]}`);
      window.syncAddonButtonsVisualStates();
    }
  };

  // --- FLAT COMPONENT VISUAL STATE REPAINTER ---
  window.syncAddonButtonsVisualStates = function() {
    const addonsConfigs = {
      auditShield: { cardId: "card_addon_audit", btnId: "btn_addon_audit", textAdded: "Remove Shield", textRemoved: "Add Shield" },
      priorityQueue: { cardId: "card_addon_priority", btnId: "btn_addon_priority", textAdded: "Remove Option", textRemoved: "Add Option" },
      vaultStorage: { cardId: "card_addon_vault", btnId: "btn_addon_vault", textAdded: "Remove Vault", textRemoved: "Add Vault" }
    };

    Object.keys(addonsConfigs).forEach(key => {
      const config = addonsConfigs[key];
      const card = document.getElementById(config.cardId);
      const btn = document.getElementById(config.btnId);
      const isSelected = window.selectedHeavyTaxAddonsRegistry[key];

      if (!card || !btn) return;

      if (isSelected) {
        // High-utility active state: Emerald green outline borders with dark text accents
        card.style.setProperty("border-color", "#10b981", "important");
        card.style.setProperty("background", "rgba(16,185,129,0.01)", "important");
        btn.style.setProperty("background", "#10b981", "important");
        btn.innerText = config.textAdded;
      } else {
        // Baseline inactive state: Soft slate borders matching the flat design grid parameters
        card.style.setProperty("border-color", "#cbd5e1", "important");
        card.style.setProperty("background", "#ffffff", "important");
        btn.style.setProperty("background", "#0a1f44", "important");
        btn.innerText = config.textRemoved;
      }
    });
  };

  // --- SECURE DISPATCH ROUTING FORWARD GATES ---
  window.advanceToStep5Signature = function() {
    console.log("[Heavy Step 4] Moving forward to Step 5 Authorization canvas elements...");
    
    // SAFE INITIALIZATION PREFLIGHT: Proactively fire the canvas constructor matching Step 5 targets
    if (typeof window.initializeHeavySignaturePanelStep5 === "function") {
      window.initializeHeavySignaturePanelStep5();
    } else {
      console.log("[Failsafe Active] Step 5 controller unmounted from DOM memory. Building layout card...");
      const panel5 = document.getElementById("heavy-panel-5");
      if (panel5) {
        panel5.innerHTML = `
          <div style="border-bottom: 2px solid #0a1f44; padding-bottom: 12px; margin-bottom: 24px;">
            <h3 style="margin: 0; color: #0a1f44; font-size: 1.35rem; font-weight: 800;">✍️ Authorization Signature</h3>
            <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.85rem;">Sign or type legal name credentials to authorize transmission protocols.</p>
          </div>
          <div style="padding: 40px; text-align:center; color: #64748b; font-weight:600; font-size:0.9rem; background:#f8fafc; border: 1px dashed #cbd5e1; border-radius:8px; margin-bottom:24px;">
            Signature pad initializing. Advance directly to purchase order summary ledger reviews.
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #cbd5e1; padding-top: 16px;">
            <button type="button" onclick="window.switchHeavyTaxViewPanel(4)" style="padding: 10px 18px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 700; color: #475569; cursor: pointer;"><i class="fa-solid fa-arrow-left"></i> Back</button>
            <button type="button" onclick="window.switchHeavyTaxViewPanel(6); if(typeof window.compileFilingFeePurchaseSummaryStep6 === 'function'){ window.compileFilingFeePurchaseSummaryStep6(); }" style="padding: 12px 32px; background: #0a1f44; color: #fff; border: none; border-radius: 6px; font-weight: 700; cursor: pointer;">Continue to Invoice <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        `;
      }
    }

    if (typeof window.switchHeavyTaxViewPanel === "function") {
      window.switchHeavyTaxViewPanel(5);
    }
  };

})();
