// ============================================================================ //
// 📊 PART 1 OF 3: STEP 5 MATRIX INITIALIZATION & VALUE GUARD CONTROLLER        //
// ============================================================================ //
let lastObservedGrandTotalStringField = "";

function executeMarketplaceSummaryRenderLoop() {
  const step5PanelContainer = document.getElementById("step-panel-5") || document.getElementById("step-5");
  if (!step5PanelContainer) return;

  // 🟢 FIXED MOUNT STABILITY CHECK:
  // First, verify if the root summary layout board component already exists in the container area.
  // This completely stops duplicate card injection loops if the container query is temporarily micro-lagged!
  let summaryInvoiceBoard = step5PanelContainer.querySelector(".summary-invoice-board");
  let rowsContainer = document.getElementById("summary-purchase-rows-container");

  if (!summaryInvoiceBoard || !rowsContainer) {
    // Clean out any partial stray nodes to prevent layout fragmentation cascades
    if (summaryInvoiceBoard) summaryInvoiceBoard.remove();

    const internalSummaryCard = document.createElement("div");
    internalSummaryCard.className = "step-panel-form-card summary-invoice-board";
    internalSummaryCard.style.cssText = "width: 100%; display: flex; flex-direction: column; gap: 16px; box-sizing: border-box; text-align: left; margin-bottom: 20px;";
    
    internalSummaryCard.innerHTML = `
      <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 4px;">
        <h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; margin: 0 0 6px 0; text-align: left;">5. Review & Confirm Final Purchase Summary</h3>
        <p style="color: #64748b; font-size: 0.88rem; margin: 0; line-height: 1.4; text-align: left;">Verify your choices prior to secure checkout.</p>
      </div>
      <div id="summary-purchase-rows-container" style="display: flex; flex-direction: column; width: 100%; box-sizing: border-box; clear: both; gap: 8px;"></div>
      <div style="display: flex; justify-content: space-between; align-items: center; font-size: 1.2rem; color: #0a1f44; font-weight: 800; border-top: 2px dashed #cbd5e1; padding-top: 16px; margin-top: 12px; width: 100%; box-sizing: border-box; clear: both;">
        <span>Grand Total Due:</span>
        <span id="summary-grand-total-display" style="font-family: monospace; color: #10b981; font-weight: 800; font-size: 1.35rem;">$0.00</span>
      </div>`;
      
    step5PanelContainer.appendChild(internalSummaryCard);
    rowsContainer = document.getElementById("summary-purchase-rows-container");
  }

  const grandTotalDisplay = document.getElementById("summary-grand-total-display");

  // 1. Call layout calculations only if text state updates cleanly
  if (typeof window.processSummaryItemizedProductLoops === "function") {
    window.processSummaryItemizedProductLoops(rowsContainer, null, null, grandTotalDisplay);
  }

  if (grandTotalDisplay) {
    const currentTotalText = (grandTotalDisplay.textContent || "$0.00").trim();
    
    // 🟢 LOOP TERMINATOR: Stop execution dead if the pricing value hasn't shifted values!
    if (window.lastObservedGrandTotalStringField === currentTotalText) {
      return; 
    }
    
    window.lastObservedGrandTotalStringField = currentTotalText;
    console.log(`[Summary Engine] Recalculating itemized matrix rows pass... [Value: ${currentTotalText}]`);

    const cleanedNumericValue = parseFloat(currentTotalText.replace(/[^0-9.]/g, ""));
    if (!isNaN(cleanedNumericValue) && cleanedNumericValue > 0) {
      window.computedWizardGrandTotalAmount = cleanedNumericValue;
      window.wizardCalculatedFinalTotalAmount = cleanedNumericValue;
    }
  }
}

// Expose methods cleanly back into global window records registries
window.executeMarketplaceSummaryRenderLoop = executeMarketplaceSummaryRenderLoop;
window.recalculateSummaryItemizedMatrixRows = executeMarketplaceSummaryRenderLoop;


// ============================================================================ //
// 📊 PART 2 OF 3: THE ITEMIZED PRODUCT LOOP COMPILER & TARGET PRICE RESOLVER  //
// ============================================================================ //
window.processSummaryItemizedProductLoops = function(rowsContainer, subtotalDisplay, govFeesDisplay, grandTotalDisplay) {
  let catalog = window.MASTER_UPSELLS_CATALOG || window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
  const identityStateMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
  
  let compiledRowsHtml = "";
  let aggregateUpsellCost = 0;

  const urlParams = new URLSearchParams(window.location.search);
  const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "llc-formation").toLowerCase().trim();
  const activePlanKeyString = String(urlParams.get('plan') || window.routeActivePlanKey || window.currentPlanKey || "enterprise").toLowerCase().trim();

  // 1. EXTRACT PACKAGES PRICING FROM REAL-TIME CONTEXT REGISTRIES
  let foundationFilingCost = 0;
  if (window._tempCalcContext && window._tempCalcContext.baseTierPrice !== undefined) {
    foundationFilingCost = parseFloat(window._tempCalcContext.baseTierPrice) || 0;
  } else if (window._tempAddonContext && window._tempAddonContext.baseTierPrice !== undefined) {
    foundationFilingCost = parseFloat(window._tempAddonContext.baseTierPrice) || 0;
  }

  // Fallback: Programmatically read from database schemas if un-hydrated on early initialization
  if (foundationFilingCost === 0 && window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[serviceSlug]) {
    const serviceNode = window.CENTRAL_SERVICE_PLAN_DB[serviceSlug];
    if (activePlanKeyString.includes("enterprise") || activePlanKeyString.includes("premium")) {
      foundationFilingCost = parseFloat(serviceNode.enterprise || serviceNode.premium) || 0;
    } else if (activePlanKeyString.includes("standard") || activePlanKeyString.includes("compliance") || activePlanKeyString.includes("pro")) {
      foundationFilingCost = parseFloat(serviceNode.compliance || serviceNode.standard || serviceNode.pro) || 0;
    } else {
      foundationFilingCost = parseFloat(serviceNode.starter || serviceNode.economy) || 0;
    }
  }

  // Secondary fallback guard block ensures a hard number is always ready
  if (foundationFilingCost === 0) {
    if (activePlanKeyString.includes("enterprise") || activePlanKeyString.includes("premium")) foundationFilingCost = 399.00;
    else if (activePlanKeyString.includes("standard") || activePlanKeyString.includes("pro")) foundationFilingCost = 149.00;
    else foundationFilingCost = 49.00;
  }

  // Format text label parameters exactly as requested: "filings4u Processing Fee (TIER-NAME)"
  let extractedTierTokenName = activePlanKeyString.toUpperCase();
  const dynamicLabelTextString = `filings4u Processing Fee (${extractedTierTokenName})`;

  compiledRowsHtml += `
    <div class="runtime-package-base-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; box-sizing: border-box; width: 100%; clear: both; margin-bottom: 4px;">
      <div style="display: flex; flex-direction: column; text-align: left;">
        <span style="font-weight: 800; font-size: 0.95rem; color: #0a1f44; text-align: left;">${dynamicLabelTextString}</span>
        <small style="color: #64748b; font-weight: 500; margin-top: 2px; text-align: left;"><i class="fa-solid fa-layer-group"></i> Core Organization Setup Shell Inclusions</small>
      </div>
      <div style="font-weight: 800; font-size: 1.05rem; color: #0a1f44; font-family: monospace;">$${foundationFilingCost.toFixed(2)}</div>
    </div>`;

  // 🟢 FIXED CONTEXT CATEGORY FILTER:
  // Dynamically evaluate aliases through clean string tags instead of forcing a blind corporate fallback loop.
  // This guarantees that trucking audit selections match up with trucking databases perfectly!
  let targetDataset = {};
  if (catalog[serviceSlug]) {
    targetDataset = catalog[serviceSlug];
  } else if (serviceSlug.includes("corp") || serviceSlug.includes("llc") || serviceSlug.includes("formation")) {
    targetDataset = catalog["corp-formation"] || catalog["formations"] || {};
  } else if (serviceSlug.includes("audit") || serviceSlug.includes("entrant")) {
    targetDataset = catalog["new-entrant-audit"] || {};
  } else if (serviceSlug.includes("dot") || serviceSlug.includes("authority")) {
    targetDataset = catalog["dot-authority"] || {};
  } else {
    // Ultimate absolute fallback matching original prototype shapes safely
    targetDataset = typeof window.getCategoryAddonsByServiceKey === "function" ? 
      window.getCategoryAddonsByServiceKey(serviceSlug) : (catalog["corp-formation"] || {});
  }

  // 2. Loop over and parse selected marketplace addon item matrices cleanly
  const itemKeys = Array.isArray(targetDataset) ? targetDataset : Object.keys(targetDataset);

  itemKeys.forEach(keyOrObj => {
    const item = (typeof keyOrObj === 'object' && keyOrObj !== null) ? keyOrObj : targetDataset[keyOrObj];
    if (!item || !item.id) return;

    const catalogSlug = item.id;
    const checkboxId = identityStateMap[catalogSlug] || catalogSlug;
    
    const storedFieldState = localStorage.getItem(`wizard_field_${checkboxId}`) || localStorage.getItem(`wizard_field_${catalogSlug}`);
    const isCurrentlySelected = (storedFieldState === "true" || storedFieldState === "yes" || storedFieldState === true || !!window[checkboxId]);

    if (isCurrentlySelected) {
      const parsedItemPrice = parseFloat(item.price) || 0;
      aggregateUpsellCost += parsedItemPrice;

      compiledRowsHtml += `
        <div class="runtime-upsell-summary-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; box-sizing: border-box; width: 100%; clear: both; margin-bottom: 4px;">
          <div style="display: flex; flex-direction: column; min-width: 0; flex: 1; text-align: left;">
            <span style="font-weight: 700; font-size: 0.95rem; color: #0a1f44; text-align: left;">+ ${item.name || item.label || catalogSlug}</span>
          </div>
          <div style="font-weight: 800; font-size: 1.05rem; color: #10b981; font-family: monospace;">+$${parsedItemPrice.toFixed(2)}</div>
        </div>`;
    }
  });

// ========================================================================= //
// 🏛️ FIX: UNIFIED ADAPTIVE PRICING CONTROLLER (STATE VS FEDERAL FEES)       //
// ============================================================================ //
  let baseGovAgencyFee = 0;
  let feeLabelTextString = "Mandatory State Filing Fee";
  let feeDescriptionTextString = "Local Jurisdiction Filing Assessment";

  // check window registries or keyword maps to detect if a Federal Service is currently running
  const federalPricingDb = window.FILINGS4U_GOVERNMENT_PRICING || {};
  const isFederalService = Object.prototype.hasOwnProperty.call(federalPricingDb, serviceSlug) && serviceSlug !== "llc-formation" && serviceSlug !== "corporations";
  const isFederalKeyword = serviceSlug.includes("cage") || serviceSlug.includes("sam") || serviceSlug.includes("tax") || serviceSlug.includes("ein") || serviceSlug.includes("authority") || serviceSlug.includes("audit") || serviceSlug.includes("entrant");

  if (isFederalService || isFederalKeyword) {
    // Dynamic Federal Ingestion Pass: read pricing from FILINGS4U_GOVERNMENT_PRICING object directly
    baseGovAgencyFee = parseFloat(federalPricingDb[serviceSlug] || 0);
    feeLabelTextString = "Mandatory Government Filing Fee";
    feeDescriptionTextString = "Federal Agency Administrative Processing Assessment";
    
    // Cache to global scopes instantly to maintain data flow parity
    window.computedWizardFederalGovernmentFee = baseGovAgencyFee;
    window.computedWizardStateGovernmentFee = 0;
  } else {
    // Standard Regional State track lookup pass parameters
    window.computedWizardFederalGovernmentFee = 0;
    const targetStateCode = String(window.selectedJurisdiction || urlParams.get('state') || "").toUpperCase().trim();
    
    if (targetStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[targetStateCode]) {
      const stateRecord = window.STATE_FILING_FEES[targetStateCode];
      feeLabelTextString = `Mandatory ${stateRecord.name || targetStateCode} State Fee`;
      
      let mappingKey = serviceSlug.replace("-formation", "");
      if (mappingKey === "corporations") mappingKey = "c_corp";
      
      // 🟢 FIXED STATE BOUNDARY RESOLVER:
      // Verify the target property key exists on the state record before falling back to standard LLC arrays!
      if (stateRecord[mappingKey] !== undefined) {
        baseGovAgencyFee = parseFloat(stateRecord[mappingKey]) || 0;
      } else {
        baseGovAgencyFee = parseFloat(stateRecord["llc"] || 0);
      }
    }
  }

  // Preserve values if already calculated early by master wizard files
  if (baseGovAgencyFee === 0) {
    baseGovAgencyFee = parseFloat(window.computedWizardFederalGovernmentFee || window.computedWizardStateGovernmentFee || window.baseGovAgencyFee || 0);
  }

  if (baseGovAgencyFee > 0) {
    compiledRowsHtml += `
      <div class="runtime-state-fee-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; background: #f8fafc; box-sizing: border-box; width: 100%; clear: both; margin-bottom: 4px;">
        <div style="display: flex; flex-direction: column; text-align: left;">
          <span style="font-weight: 700; font-size: 0.95rem; color: #0a1f44; text-align: left;">${feeLabelTextString}:</span>
          <small style="color: #64748b; font-weight: 500; margin-top: 2px; text-align: left;"><i class="fa-solid fa-building-shield"></i> ${feeDescriptionTextString}</small>
        </div>
        <div style="font-weight: 800; font-size: 1.05rem; color: #0a1f44; font-family: monospace;">+$${baseGovAgencyFee.toFixed(2)}</div>
      </div>`;
  }

  if (rowsContainer) {
    rowsContainer.innerHTML = compiledRowsHtml;
  }

  // 🟢 FIXED CONTEXT ALIGNMENT PASS:
  // Write calculated figures cleanly to your temporary calculation context object properties 
  // BEFORE running the UI layout renderer to stop the pricing stack disconnect!
  window._tempCalcContext = window._tempCalcContext || {};
  window._tempCalcContext.baseTierPrice = foundationFilingCost;
  window._tempCalcContext.incrementalAddonTotal = aggregateUpsellCost;
  window._tempCalcContext.descriptiveInvoiceRowsHtml = compiledRowsHtml;

  if (typeof window.finalizePricingMatrixUiRender === "function") {
    window.finalizePricingMatrixUiRender();
  }
};

// ============================================================================ //
// 📊 PART 3 OF 3: THE ARITHMETIC MATRIX ACCUMULATOR & BINDINGS INJECTION      //
// ============================================================================ //
window.finalizePricingMatrixUiRender = function(foundationFilingCost, aggregateUpsellCost, baseGovAgencyFee, grandTotalDisplay) {
  
  // 🟢 FIXED ARITHMETIC PARAMETER CONTRACT RESOLVER:
  // Fall back to reading figures cleanly from your temporary calc context object if parameters pass down empty.
  // This completely eliminates the NaN (Not a Number) execution loops that break Stripe checkout!
  const ctx = window._tempCalcContext || {};
  
  const finalBaseCost = typeof foundationFilingCost === "number" ? foundationFilingCost : (parseFloat(ctx.baseTierPrice) || 0);
  const finalAddonCost = typeof aggregateUpsellCost === "number" ? aggregateUpsellCost : (parseFloat(ctx.incrementalAddonTotal) || 0);
  const finalGovAgencyFee = typeof baseGovAgencyFee === "number" ? baseGovAgencyFee : (parseFloat(window.computedWizardStateGovernmentFee || window.computedWizardFederalGovernmentFee) || 0);

  const comprehensiveGrandTotal = finalBaseCost + finalAddonCost + finalGovAgencyFee;
  const grandNode = grandTotalDisplay || document.getElementById("summary-grand-total-display");
  
  if (grandNode) {
    grandNode.textContent = `$${comprehensiveGrandTotal.toFixed(2)}`;
  }

  // Sync adjacent global elements if active on sidebar blocks
  const sidebarTotalDisplay = document.getElementById("matrix-invoice-grand-total") || document.getElementById("grand-total-display");
  if (sidebarTotalDisplay) {
    sidebarTotalDisplay.innerText = `$${comprehensiveGrandTotal.toFixed(2)}`;
  }

  // Globally register final balances for Step 6 Stripe Gateway charge operations safely
  window.summaryCalculatedGrandTotal = comprehensiveGrandTotal;
  window.computedWizardGrandTotalAmount = comprehensiveGrandTotal;
  window.wizardCalculatedFinalTotalAmount = comprehensiveGrandTotal;

  // SELF-HEALING NAVIGATION ACTIONS FOOTER ROW
  const parentCardShell = document.querySelector(".summary-invoice-board");
  if (parentCardShell && !document.getElementById("summary-footer-action-panel-row")) {
    const actionRowFooter = document.createElement("div");
    actionRowFooter.id = "summary-footer-action-panel-row";
    actionRowFooter.className = "wizard-footer-action-row";
    actionRowFooter.style.cssText = "display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; clear: both; box-sizing: border-box;";
    
    actionRowFooter.innerHTML = `
      <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
        <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Back to PoA
      </button>
      <button type="button" class="btn-wizard-main btn-wizard-nav-next" onclick="if(typeof window.goToNextWizardStep === 'function') { window.goToNextWizardStep(6, event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.2);">
        Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>
      </button>`;
      
    parentCardShell.appendChild(actionRowFooter);
  }
};

// ============================================================================ //
// 📊 STEP 5 INTERACTIVE VISIBILITY REAL-TIME INVOICE REFRESHER                 //
// ============================================================================ //

// Global tracking parameter handles block recursive call stack crashes instantly
window.isStep5RefreshPassCurrentlyActive = false;

/**
 * Programmatic recalculation gate. Forces your data loops to scan and group
 * checked items without creating duplicate execution loops.
 */
function forceStep5SummaryInvoiceRefresh() {
  // FIX 1: Strict Concurrency Lock Gate breaks recursive call loop cascades instantly
  if (window.isStep5RefreshPassCurrentlyActive) return;
  window.isStep5RefreshPassCurrentlyActive = true;
  
  console.log("[Summary Hub] Step 5 panel active. Forcing real-time invoice calculations update...");

  // 1. Force the dynamic state discovery crawl to scan and merge all selections if available
  if (typeof window.runPricingMatrixDataCrawlPass === "function") {
    window.runPricingMatrixDataCrawlPass();
  }

  // 2. Force the itemized marketplace rows to reconstruct
  if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") {
    window.directInjectCartAddonsToSummaryStep5();
  }

  // 3. Centralized layout compiler routing execution pass
  if (typeof window.executeMarketplaceSummaryRenderLoop === "function") {
    console.log("[Summary Hub] Routing execution directly to your central unified layout compiler...");
    try {
      window.executeMarketplaceSummaryRenderLoop();
    } catch (err) {
      console.error("[Summary Hub Error] Error running central invoice loops:", err);
    }
  } else {
    console.warn("[Summary Hub Warning] executeMarketplaceSummaryRenderLoop is unassigned.");
  }

  // Fallback support matrix preserves legacy alias routing hooks if active on sidebars
  if (typeof window.finalizePricingMatrixUiRender !== "function" && typeof window.updateDynamicPricingMatrixVanilla === "function") {
    requestAnimationFrame(() => {
      if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
      }
      window.isStep5RefreshPassCurrentlyActive = false;
    });
    return;
  }

  // 🟢 FIXED LOCK SYNCHRONIZATION TRIGGER:
  // Release the active processing gate cleanly within a predictable microtask delay 
  // to ensure upcoming DOM template injections have completely stabilized.
  setTimeout(() => {
    window.isStep5RefreshPassCurrentlyActive = false;
  }, 40);
}

// Global window exposure pass mapping
window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefresh;

// SAFE INTERCEPT ROUTER: Prevents Call Stack Exceeded recursive locks
if (typeof window.switchWizardActiveViewLayout === "function" && !window.switchWizardActiveViewLayout.isWrappedBySummaryEngine) {
  const originalActiveLayoutSwapper = window.switchWizardActiveViewLayout;
  
  window.switchWizardActiveViewLayout = function(activeStepTarget) {
    // Execute the baseline visibility panel swapping routine first
    originalActiveLayoutSwapper(activeStepTarget);
    
    // Force evaluation sweeps if target matches summary indices
    if (parseInt(activeStepTarget, 10) === 5) {
      forceStep5SummaryInvoiceRefresh();
    }
  };
  
  window.switchWizardActiveViewLayout.isWrappedBySummaryEngine = true; // Sets identification flag to block re-wrapping bugs
  console.log("[Summary Hub] Intercept router securely wrapped around active layout swapper engine.");
}

window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefresh;

// ============================================================================ //
// 🎯 PART 5: UNIFIED ISOLATED VIEW OBSERVER ENGINE                             //
// ============================================================================ //

/**
 * Replaces both duplicate observers with one clean, unified layout tracking pass.
 */
function initStep5PurchaseSummaryVisibilityTracker() {
  const summaryPanelNodeElement = document.getElementById("step-panel-5") || document.getElementById("step-5");
  if (!summaryPanelNodeElement) return;

  // Disconnect any existing observer instance to clear out background memory leaks
  if (window.summaryPanelViewObserverInstance) {
    window.summaryPanelViewObserverInstance.disconnect();
  }

  // FIX 1: Introduce a localized tracking timestamp to block rapid consecutive re-firing triggers
  let lastRefreshedTimestamp = 0;

  const summaryPanelViewObserver = new MutationObserver(() => {
    // Runs immediately when display changes from display: none to block
    if (summaryPanelNodeElement.style.display !== "none" && summaryPanelNodeElement.classList.contains("active")) {
      const currentSystemTimeMs = Date.now();
      
      // FIX 2: Throttle threshold lock. Short-circuit if invoked within the last 300ms.
      if (currentSystemTimeMs - lastRefreshedTimestamp < 300) {
        return;
      }
      lastRefreshedTimestamp = currentSystemTimeMs;
      console.log("[Visibility Observer] Step 5 panel active state detected. Invoking calculation pipeline...");

      // Execute the master calculation and row assembly pass exactly ONCE
      if (typeof window.forceStep5SummaryInvoiceRefresh === "function") {
        window.forceStep5SummaryInvoiceRefresh();
      }

      // FIX 3: Re-arm your custom real-time chronometer widget to ensure time stays ticking on step 5
      if (typeof window.initializeDynamicChronometerWidget12Hr === "function") {
        window.initializeDynamicChronometerWidget12Hr();
      }
    }
  });

  summaryPanelViewObserver.observe(summaryPanelNodeElement, { attributes: true, attributeFilter: ["style", "class"] });
  window.summaryPanelViewObserverInstance = summaryPanelViewObserver;
}

// Register initialization execution safely on app startup paths
if (document.readyState !== "loading") {
  initStep5PurchaseSummaryVisibilityTracker();
} else {
  document.addEventListener("DOMContentLoaded", initStep5PurchaseSummaryVisibilityTracker);
}

// ============================================================================ //
// 🛒 STEP 5 INVOICE CALCULATOR & MARKTUP BUILDER ENGINE                        //
// ============================================================================ //
function directInjectCartAddonsToSummaryStep5() {
  console.log("[Summary Engine] Recalculating itemized matrix rows pass...");
  const rowsTargetNode = document.getElementById("summary-purchase-rows-container");
  if (!rowsTargetNode) return;

  let runningSubtotalAmount = 0;
  let itemsMarkupString = "";
  
  const ctx = window._tempCalcContext || {};
  
  // Fallback context values ensure that baseline pricing doesn't error out if variables are cleared
  const basePackagePriceValue = parseFloat(ctx.baseTierPrice) || parseFloat(localStorage.getItem('wizard_base_package_cost')) || 0;
  const safePlanName = ctx.planConfig?.name || localStorage.getItem('wizard_service_key')?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Compliance Package';
  const safePlanTier = ctx.currentPlanKey ? String(ctx.currentPlanKey).toUpperCase() : (localStorage.getItem('wizard_plan_tier_key') || '').toUpperCase();

  runningSubtotalAmount += basePackagePriceValue;

  // 🧠 🟢 PERSISTENT STORAGE ARRAY HOOK: Recover selections out of local storage parameters securely
  let persistentAddonsArray = [];
  try {
    const savedAddonsMatrixString = localStorage.getItem('wizard_selected_addons_matrix');
    if (savedAddonsMatrixString) {
      persistentAddonsArray = JSON.parse(savedAddonsMatrixString) || [];
    }
  } catch (arrayParseErr) {
    console.warn("[Summary Engine] Unable to parse persistent addon cache payload matrix:", arrayParseErr);
  }

  // Loop over recovered marketplace add-on selections natively
  persistentAddonsArray.forEach(addonItem => {
    if (!addonItem || !addonItem.id) return;
    
    const labelString = addonItem.title || addonItem.name || "Compliance Shield Asset";
    const priceValue = parseFloat(addonItem.price) || 0;
    
    runningSubtotalAmount += priceValue;
    
    itemsMarkupString += `
      <div class="summary-receipt-row-item" data-source-checkbox-id="${addonItem.id}" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: #475569; padding: 10px 0; border-bottom: 1px dashed #e2e8f0; width: 100%; box-sizing: border-box; clear: both;">
        <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
          <span style="font-weight: 600; color: #0a1f44; text-align: left;">+ ${labelString}</span>
          <button type="button" onclick="if(typeof window.removeSelectedAddonItemStraightFromSummaryCard === 'function'){ window.removeSelectedAddonItemStraightFromSummaryCard('${addonItem.id}'); }" style="background: transparent; border: none; color: #ef4444; font-size: 0.725rem; font-weight: 700; cursor: pointer; padding: 0; text-align: left; width: fit-content; display: flex; align-items: center; gap: 4px; margin-top: 2px; transition: opacity 0.1s;"><i class="fa-solid fa-trash-can"></i> Remove from Invoice</button>
        </div>
        <span style="font-family: monospace; font-weight: 700; color: #0a1f44; font-size: 0.95rem;">$${priceValue.toFixed(2)}</span>
      </div>`;
  });

  const tierDisplayString = safePlanTier ? ' (' + safePlanTier + ')' : '';
  const baselineHeaderRow = `<div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 4px; width: 100%; box-sizing: border-box; clear: both;"><span>${safePlanName}${tierDisplayString}</span><span style="font-family: monospace;">$${basePackagePriceValue.toFixed(2)}</span></div>`;
  
  // Update the row container block HTML with itemized lines safely
  rowsTargetNode.innerHTML = baselineHeaderRow + itemsMarkupString;

  // 🟢 FIXED CALCULATION COUPLING:
  // Instead of manually overriding the text displays using an incomplete subtotal array,
  // we update our temporary calculation context object parameters first.
  window._tempCalcContext = window._tempCalcContext || {};
  window._tempCalcContext.baseTierPrice = basePackagePriceValue;
  window._tempCalcContext.incrementalAddonTotal = (runningSubtotalAmount - basePackagePriceValue);
  window._tempCalcContext.descriptiveInvoiceRowsHtml = rowsTargetNode.innerHTML;

  // Then pass execution directly to your master arithmetic calculator to compute state/federal fees!
  if (typeof window.finalizePricingMatrixUiRender === "function") {
    window.finalizePricingMatrixUiRender();
  } else {
    // Local manual display fallback check if master matrix engine hasn't fully registered yet
    const grandTotalTargetElements = [
      document.getElementById("summary-grand-total-display"),
      document.getElementById("step-5-total-value"),
      document.getElementById("invoice-grand-total")
    ];
    grandTotalTargetElements.forEach(targetElement => {
      if (targetElement) {
        targetElement.innerText = `$${runningSubtotalAmount.toFixed(2)}`;
      }
    });
    window.finalComputedOnboardingInvoiceTotalAmount = runningSubtotalAmount;
    window.summaryCalculatedGrandTotal = runningSubtotalAmount;
  }
}

// Bind method cleanly to global window boundaries
window.directInjectCartAddonsToSummaryStep5 = directInjectCartAddonsToSummaryStep5;

// ============================================================================ //
// 📊 PART 1 OF 2: STEP 5 CART REMOVE ACTUATOR ENGINE (STATE SYNCHRONIZED REPAIR) //
// ============================================================================ //

/**
 * Allows users to un-check an option directly from Step 5 without resetting their workflow.
 * @param {string} targetCheckboxElementId - The target checkbox ID token to wipe
 */
function removeSelectedAddonItemStraightFromSummaryCard(targetCheckboxElementId) {
  if (!targetCheckboxElementId) return;
  console.log(`[Summary Engine] Action Click: Wiping item card #${targetCheckboxElementId} straight from memory pools...`);

  // 1. If the physical checkbox element happens to be currently present on the page layout, uncheck it natively
  const physicalCheckbox = document.getElementById(targetCheckboxElementId);
  if (physicalCheckbox) {
    physicalCheckbox.checked = false;
    
    // 🟢 FIXED ISOLATED CALL ROUTING:
    // Route directly through the smart click interceptor instead of dispatching raw bubbling events 
    // that confuse background layout engines!
    if (typeof window.executeUpsellStateToggleIntercept === "function") {
      window.executeUpsellStateToggleIntercept(physicalCheckbox);
      return; // Exit early as the interceptor safely handles the downstream array syncs and pricing math!
    } else if (typeof window.handleBackgroundUpsellTogglePass === "function") {
      window.handleBackgroundUpsellTogglePass(physicalCheckbox);
      return;
    }
  }

  // 2. BACKUP UNMOUNTED PATHWAY COUPLING: Executed only if Step 3 fields are completely out of viewport range
  window[targetCheckboxElementId] = false;
  
  const trackingStateKey = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP ? window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP[targetCheckboxElementId] : null;
  if (trackingStateKey) {
    window[trackingStateKey] = false;
  }

  // 3. Clear from legacy cart state array contexts if active on window
  if (window.currentCartState && Array.isArray(window.currentCartState.addons)) {
    window.currentCartState.addons = window.currentCartState.addons.filter(addon => 
      addon.id !== targetCheckboxElementId && addon.name !== targetCheckboxElementId
    );
  }

  // 4. Rebuild the persistent localStorage selected addons array matrix context safely
  try {
    const savedAddonsMatrixString = localStorage.getItem('wizard_selected_addons_matrix');
    if (savedAddonsMatrixString) {
      let existingAddonsArray = JSON.parse(savedAddonsMatrixString) || [];
      let upgradedAddonsArray = existingAddonsArray.filter(item => item.id !== targetCheckboxElementId);
      
      window.currentSelectedAddonsListArrayMatrix = upgradedAddonsArray;
      localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(upgradedAddonsArray));
    }
    
    // Force the explicit isolated flag down to false so data-summary loops drop it
    localStorage.setItem(`wizard_field_${targetCheckboxElementId}`, "false");
  } catch (cacheArrayMutationErr) {
    console.error("[Summary Engine Actuator Failure]", cacheArrayMutationErr);
  }

  // 5. Force a progressive real-time serialization pass across all active viewport metrics
  if (typeof window.saveWizardFormStatesVanilla === "function") {
    window.saveWizardFormStatesVanilla();
  }

  // 6. 🟢 FIXED UNIFIED CALCULATION EXECUTION:
  // We execute a single, unified data-injection loop pass. This blocks dual-firing 
  // race conditions and guarantees your invoice values stay rock-solid!
  if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") {
    window.directInjectCartAddonsToSummaryStep5();
  } else if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
}

// Global window parameter exposure mapping definitions
window.removeSelectedAddonItemStraightFromSummaryCard = removeSelectedAddonItemStraightFromSummaryCard;

// Maintain alias function pointers safely for backwards compatibility across older files
window.forceStep5PurchaseSummaryRenderCycle = typeof forceStep5SummaryInvoiceRefresh !== "undefined" ? forceStep5SummaryInvoiceRefresh : window.forceStep5SummaryInvoiceRefresh;
window.forceStep5SummaryInvoiceRefresh = typeof forceStep5SummaryInvoiceRefresh !== "undefined" ? forceStep5SummaryInvoiceRefresh : window.forceStep5SummaryInvoiceRefresh;
window.initStep5PurchaseSummaryVisibilityTracker = typeof initStep5PurchaseSummaryVisibilityTracker !== "undefined" ? initStep5PurchaseSummaryVisibilityTracker : window.initStep5PurchaseSummaryVisibilityTracker;
window.directInjectCartAddonsToSummaryStep5 = typeof directInjectCartAddonsToSummaryStep5 !== "undefined" ? directInjectCartAddonsToSummaryStep5 : window.directInjectCartAddonsToSummaryStep5;


// ============================================================================ //
// 🎯 PART 2 OF 2: VISIBILITY INTERLOCK ALIGNMENT                               //
// ============================================================================ //

/**
 * 🟢 FIXED COMPONENT ISOLATION:
 * The competing duplicate MutationObserver container block has been fully stripped out.
 * This guarantees that your master visibility tracker ('initStep5PurchaseSummaryVisibilityTracker')
 * coordinates all rendering pipelines sequentially without re-entrant loop storms!
 */
console.log("[Summary Engine UI] Interlock initialization boundaries successfully established.");

// ============================================================================ //
// 🎨 STEP 5 UI SUMMARY PANEL OVERRIDE & DISPLAY LAYOUT FORMATTER (DYNAMIC)    //
// ============================================================================ //

/**
 * filings4u, LLC - Fail-Safe Step 5 UI Formatter
 * Directly targets live screen text nodes to fix layout display rows.
 * Unified calculations version.
 * @param {Object} currentCartState - Optional context object parameters.
 */
function formatStepFiveSummaryInvoiceDisplayLayout(currentCartState = {}) {
  const rowsContainer = document.getElementById("summary-purchase-rows-container");
  const subtotalDisplay = document.getElementById("summary-subtotal-display");
  const govFeesDisplay = document.getElementById("summary-gov-fees-display");
  const grandTotalDisplay = document.getElementById("summary-grand-total-display");

  if (!rowsContainer) return;

  const activeRows = Array.from(rowsContainer.children);

  // Extract parameters directly from global trackers to guarantee calculation matches
  const serviceKey = currentCartState.serviceKey || window.routeActiveServiceKey || "";
  const formationServiceKeys = ["llc-formation", "corporations", "series-llc", "foreign-qualification", "nonprofits"];
  const isFormationTrack = formationServiceKeys.includes(serviceKey);

  // Read totals safely out of calculation engine context entries
  const liveCalculatedGrandTotal = parseFloat(window.wizardCalculatedFinalTotalAmount || window.computedWizardGrandTotalAmount || 0);
  const liveGovAgencyFee = parseFloat(window.computedWizardStateGovernmentFee || window.computedWizardFederalGovernmentFee || 0);

  // 1. PASS THROUGH LINE ITEMS IN THE CONTAINER AND STANDARD REGISTRATION FIELDS cleanly
  activeRows.forEach(row => {
    if (!row) return;
    let rowText = (row.innerText || row.textContent || "").trim();
    
    // 🟢 FIXED VISUAL ELEMENT MATCHING:
    // Maintain flex layout structure for government fee line elements so they display 
    // itemized metrics to the customer accurately, keeping totals aligned with Stripe!
    if (rowText.includes("State Filing Fee") || rowText.includes("Government Filing Fee")) {
      if (liveGovAgencyFee > 0) {
        row.style.setProperty("display", "flex", "important");
      } else {
        row.style.setProperty("display", "none", "important");
      }
    }
  });

  // 2. DYNAMIC PACKAGE SUB-TOTAL COMPILATION PASS
  if (subtotalDisplay) {
    let subtotalValue = 0;
    if (window._tempCalcContext && window._tempCalcContext.baseTierPrice !== undefined) {
      const basePrice = parseFloat(window._tempCalcContext.baseTierPrice) || 0;
      const addonPrice = parseFloat(window._tempCalcContext.incrementalAddonTotal) || 0;
      const truckingPrice = parseFloat(window.lastCalculatedNewEntrantAddonTotal) || 0;
      
      subtotalValue = basePrice + addonPrice + truckingPrice;
    }
    
    subtotalDisplay.innerText = "$" + subtotalValue.toFixed(2);
    
    const labelNode = subtotalDisplay.previousElementSibling;
    if (labelNode) {
      const displayServiceLabel = window._tempCalcContext?.planConfig?.name || "Filing & Add-on";
      labelNode.innerText = `${displayServiceLabel} Subtotal:`;
    }
  }

  // 3. DYNAMICALLY RENDER GOVERNMENT FEES ROW INTERFACES
  if (govFeesDisplay) {
    // Read directly from the frozen global metrics cache to guarantee matching calculation outputs
    govFeesDisplay.innerText = "$" + liveGovAgencyFee.toFixed(2);
    
    const govRowParent = govFeesDisplay.parentElement;
    if (govRowParent) {
      const govDisplayVisibility = (liveGovAgencyFee > 0) ? "flex" : "none";
      govRowParent.style.setProperty("display", govDisplayVisibility, "important");
    }
  }

  // 4. TOTAL SUMMARY AMOUNT MATCHES CORE ENGINES
  if (grandTotalDisplay && liveCalculatedGrandTotal > 0) {
    grandTotalDisplay.innerText = "$" + liveCalculatedGrandTotal.toFixed(2);
  }
}

// Map parameters cleanly back to global workspace scopes window trackers
window.formatStepFiveSummaryInvoiceDisplayLayout = formatStepFiveSummaryInvoiceDisplayLayout;


// ============================================================================ //
// 🔍 AUTOMATED OBSERVATION TRIGGER: INITIALIZE LIVE SHEET LISTENER INTERFACES //
// ============================================================================ //

/**
 * UI Mutation Guard Hook
 * Automatically runs the formatter whenever your wizard updates the summary panel.
 * Connected layout trigger directly to the newly isolated formatter module handler.
 */
(function activateSummaryObserver() {
  const summaryTarget = document.getElementById("summary-purchase-rows-container");
  
  if (!summaryTarget) {
    // Non-blocking timeout pool checks for element injection
    setTimeout(activateSummaryObserver, 250);
    return;
  }

  // 🟢 FIXED ASYNC LAYOUT INTERLOCK:
  // Use a debounced lock state flag instead of volatile disconnect/reconnect loops.
  // This completely eliminates micro-flicker loops and keeps prices stable!
  let isObserverProcessingMutations = false;

  const summaryObserver = new MutationObserver(() => {
    if (isObserverProcessingMutations) return;
    isObserverProcessingMutations = true;

    // Defer the formatting logic smoothly by one microtask frame step 
    // to give the DOM time to finish settling before style updates run.
    setTimeout(() => {
      try {
        if (typeof window.formatStepFiveSummaryInvoiceDisplayLayout === "function") {
          window.formatStepFiveSummaryInvoiceDisplayLayout(window.currentCartState || {});
        }
      } catch (err) {
        console.error("[Observer Engine Error] Formatting execution pass failed:", err);
      } finally {
        isObserverProcessingMutations = false;
      }
    }, 0);
  });

  summaryObserver.observe(summaryTarget, { childList: true, subtree: true });
  console.log("[Observer Engine] Step 5 layout monitor active, stabilized, and loop-protected.");
})();