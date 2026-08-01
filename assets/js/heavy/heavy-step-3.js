// ============================================================================
// ðŸš› FILINGS4U HEAVY TAX ENGINE - STEP 3: REAL-TIME TAX MATRIX REVIEW (PART 1)
// ============================================================================
;(function() {
  "use strict";

  window.compileHeavyTaxCalculationsSummaryStep3 = async function() {
    const client = window.supabaseClient || window.supabase || window.f4uWizardSupabaseInstance;
    const sessionUuid = window.activeHeavySessionUuid;
    const reviewPlaceholder = document.getElementById("heavy-panel-3");

    if (!reviewPlaceholder) {
      console.error("[Heavy Step 3 Error] Target container #heavy-panel-3 missing from DOM.");
      return;
    }

    // Force step panel visibility parameters flat on screen instantly
    reviewPlaceholder.style.setProperty("display", "block", "important");

    // Mount an on-screen loader while the analytical calculations process
    reviewPlaceholder.innerHTML = `
      <div style="text-align: center !important; padding: 60px 0 !important; color: #0a1f44 !important; width: 100% !important; box-sizing: border-box !important; clear: both !important;">
        <div style="width: 40px; height: 40px; border: 4px solid #cbd5e1; border-top: 4px solid #0a1f44; border-radius: 50%; animation: f4uPlatformCoreSpin 0.8s linear infinite; margin: 0 auto 12px auto; box-sizing: border-box;"></div>
        <h5 style="margin: 0 !important; font-weight: 700 !important; font-size: 0.9rem !important; letter-spacing: 0.5px !important; text-transform: uppercase !important;">Compiling Itemized IRS Tax Schedules...</h5>
      </div>
    `;

    let totalIrsTaxLiability = 0;
    let standardTrucksCount = 0;
    let suspendedTrucksCount = 0;
    let loggingTrucksCount = 0;

    // 1. DATA HARVESTING LOCK: Pull configurations straight from memory arrays or database logs
    if (window.activeLoadedFleetVehiclesArray && window.activeLoadedFleetVehiclesArray.length > 0) {
      window.activeLoadedFleetVehiclesArray.forEach(function(truck) {
        const currentTax = parseFloat(truck.tax) || 0;
        totalIrsTaxLiability += currentTax;
        
        if (truck.isSuspended) suspendedTrucksCount++;
        else if (truck.isLogging) loggingTrucksCount++;
        else standardTrucksCount++;
      });
    } else if (client && typeof client.from === "function" && sessionUuid && !sessionUuid.startsWith("temp_")) {
      try {
        const { data: vehicles } = await client.from("heavy_tax_vehicles").select("*").eq("session_id", sessionUuid);
        if (vehicles && vehicles.length > 0) {
          vehicles.forEach(function(truck) {
            const currentTax = parseFloat(truck.calculated_irs_tax) || 0;
            totalIrsTaxLiability += currentTax;
            if (truck.is_suspended_exempt) suspendedTrucksCount++;
            else if (truck.is_logging_truck) loggingTrucksCount++;
            else standardTrucksCount++;
          });
        }
      } catch(err) {
        console.warn("[Heavy Step 3 DB Fallback Warning]", err.message);
      }
    }

    // Lock global calculation numbers for subsequent checkout layer scopes
    window.computedIrsTaxOwedBaseAmount = totalIrsTaxLiability;
    window.platformFilingServiceFeeValue = 44.90; // Fixed baseline processing cost
    const initialTotalSum = totalIrsTaxLiability + window.platformFilingServiceFeeValue;
    // 2. FLAT LAYOUT STRING OVERWRITE (EDGE-TO-EDGE RESPONSIVE VIEW)
    // This safely replaces the loading spinner markup completely, preventing frozen screen bugs
    reviewPlaceholder.innerHTML = `
      <!-- FLAT TIMELINE HEADER -->
      <div style="border-bottom: 2px solid #0a1f44 !important; padding-bottom: 12px !important; margin-bottom: 28px !important; box-sizing: border-box !important; width: 100% !important;">
        <h3 style="margin: 0 !important; color: #0a1f44 !important; font-size: 1.35rem !important; font-weight: 800 !important; letter-spacing: -0.4px !important;">ðŸ“‹ Real-Time Tax Summary Review</h3>
        <p style="margin: 6px 0 0 0 !important; color: #64748b !important; font-size: 0.85rem !important; font-weight: 500 !important;">Review your itemized calculations before applying filing extensions.</p>
      </div>

      <!-- METRICS GRID ROW -->
      <div style="display: grid !important; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important; gap: 16px !important; margin-bottom: 28px !important; width: 100% !important; box-sizing: border-box !important;">
        <div style="background: #ffffff !important; border: 1px solid #cbd5e1 !important; padding: 16px !important; border-radius: 8px !important; text-align: center !important;">
          <div style="font-size: 1.5rem !important; font-weight: 800 !important; color: #0a1f44 !important; font-family: monospace !important;">${standardTrucksCount}</div>
          <small style="color: #64748b !important; font-weight: 700 !important; font-size: 0.75rem !important; text-transform: uppercase !important; display: block !important; margin-top: 4px !important; letter-spacing: 0.3px !important;">Standard Trucks</small>
        </div>
        <div style="background: #ffffff !important; border: 1px solid #cbd5e1 !important; padding: 16px !important; border-radius: 8px !important; text-align: center !important;">
          <div style="font-size: 1.5rem !important; font-weight: 800 !important; color: #0a1f44 !important; font-family: monospace !important;">${loggingTrucksCount}</div>
          <small style="color: #64748b !important; font-weight: 700 !important; font-size: 0.75rem !important; text-transform: uppercase !important; display: block !important; margin-top: 4px !important; letter-spacing: 0.3px !important;">Logging Trucks</small>
        </div>
        <div style="background: #ffffff !important; border: 1px solid #cbd5e1 !important; padding: 16px !important; border-radius: 8px !important; text-align: center !important;">
          <div style="font-size: 1.5rem !important; font-weight: 800 !important; color: #10b981 !important; font-family: monospace !important;">${suspendedTrucksCount}</div>
          <small style="color: #64748b !important; font-weight: 700 !important; font-size: 0.75rem !important; text-transform: uppercase !important; display: block !important; margin-top: 4px !important; letter-spacing: 0.3px !important;">Suspended ($0)</small>
        </div>
      </div>

      <!-- ITEMIZED PRICING INVOICE STACK -->
      <div style="border: 1px solid #cbd5e1 !important; border-radius: 8px !important; overflow: hidden !important; width: 100% !important; box-sizing: border-box !important; margin-bottom: 28px !important; background: #ffffff !important; text-align: left !important;">
        <div style="background: #0a1f44 !important; padding: 14px 18px !important; font-weight: 800 !important; font-size: 0.8rem !important; color: #ffffff !important; text-transform: uppercase !important; letter-spacing: 0.5px !important;">IRS Form 2290 Tax Liability Itemization</div>
        
        <div style="padding: 20px !important; display: flex !important; flex-direction: column !important; gap: 14px !important; font-size: 0.9rem !important;">
          <div style="display: flex !important; justify-content: space-between !important; align-items: center !important; color: #475569 !important; padding-bottom: 10px !important; border-bottom: 1px dashed #cbd5e1 !important;">
            <span style="font-weight: 600 !important;">Combined Fleet IRS Regulatory Tax Owed:</span>
            <strong style="font-family: monospace !important; color: #0f172a !important; font-size: 1.1rem !important;">$${totalIrsTaxLiability.toFixed(2)}</strong>
          </div>
          <div style="display: flex !important; justify-content: space-between !important; align-items: center !important; color: #475569 !important; padding-bottom: 10px !important; border-bottom: 1px dashed #cbd5e1 !important;">
            <span style="font-weight: 600 !important;">E-Filing Portal Transmission Service Fee:</span>
            <strong style="font-family: monospace !important; color: #0f172a !important; font-size: 1.1rem !important;">$${window.platformFilingServiceFeeValue.toFixed(2)}</strong>
          </div>
          
          <div style="padding-top: 6px !important; display: flex !important; justify-content: space-between !important; align-items: center !important; color: #0a1f44 !important;">
            <span style="font-weight: 800 !important; font-size: 1rem !important;">Total Initial Order Value:</span>
            <strong style="font-family: monospace !important; color: #10b981 !important; font-size: 1.45rem !important;">$${initialTotalSum.toFixed(2)}</strong>
          </div>
        </div>
      </div>

      <!-- WORKSPACE ROUTING FOOTER ACTIONS -->
      <div style="display: flex !important; justify-content: space-between !important; align-items: center !important; border-top: 1px solid #e2e8f0 !important; padding-top: 20px !important; width: 100% !important; box-sizing: border-box !important; clear: both !important;">
        <button type="button" onclick="window.switchHeavyTaxViewPanel(2)" style="padding: 12px 20px !important; background: #f1f5f9 !important; border: 1px solid #cbd5e1 !important; border-radius: 6px !important; font-size: 0.875rem !important; font-weight: 700 !important; color: #475569 !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 6px !important; transition: background 0.15s ease !important;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          <i class="fa-solid fa-arrow-left"></i> Back to Spreadsheet
        </button>
        <button type="button" onclick="window.advanceToStep4Addons()" style="padding: 14px 36px !important; background: #0a1f44 !important; color: #ffffff !important; border: none !important; border-radius: 6px !important; font-weight: 700 !important; font-size: 0.95rem !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 8px !important; transition: background 0.15s ease !important;" onmouseover="this.style.background='#1e293b'" onmouseout="this.style.background='#0a1f44'">
          Continue to Options <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
  };

  // --- AUTOMATED FALLBACK ADVANCER DISPATCHER (BLOCKS FREEZES) ---
  window.advanceToStep4Addons = function() {
    console.log("[Heavy Step 3] Advancing timeline to Step 4 Premium Options...");
    
    if (typeof window.initializeHeavyAddonsPanelStep4 === "function") {
      window.initializeHeavyAddonsPanelStep4();
    }

    if (typeof window.switchHeavyTaxViewPanel === "function") {
      window.switchHeavyTaxViewPanel(4);
    }
  };

})();

