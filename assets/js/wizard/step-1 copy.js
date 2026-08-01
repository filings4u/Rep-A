// ============================================================================ //
// ðŸ§± STEP 1 PACKAGE REVIEWS AND PLAN MARKUP CARD BUILDER (COMBINED SYSTEM)     //
// ============================================================================ //
function renderOnboardingPlanOverviewCard(serviceDataNode, tierTitleDisplay, activeBullets = [], finalBaseFee = 0.00) {
  if (window.isPlanCardRenderingLockActive) return;
  window.isPlanCardRenderingLockActive = true;
  try {
    const serviceName = serviceDataNode?.name || "Service Allocation";
    const tierName = tierTitleDisplay || "Selected Package";
    const finalizedPlanTitleContainerHeaderText = serviceName + " (" + tierName.toUpperCase() + ")";

    // 1. EXTRACT PARAMS DYNAMICALLY FROM THE URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlStateCode = String(urlParams.get('state') || "").toUpperCase().trim();
    const urlServiceSlug = String(urlParams.get('service') || "").toLowerCase().trim();
    let combinedGovernmentFees = 0;
    let extraFilingFeesHtmlRows = "";

    // --- A. REGIONAL STATE FILING FEE LOGIC ---
    if (urlStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[urlStateCode]) {
      const stateRecord = window.STATE_FILING_FEES[urlStateCode];
      let mappingKey = urlServiceSlug.replace("-formation", "");
      if (mappingKey === "corporations") mappingKey = "c_corp";
      if (mappingKey === "series-llc") mappingKey = "series_llc";
      if (mappingKey === "nonprofits") mappingKey = "non_profit";
      
      // Restored your exact original fallback mechanism to populate state fees perfectly
      const discoveredStateFee = stateRecord[mappingKey] || stateRecord["llc"] || 0;
      const stateGovFee = parseFloat(discoveredStateFee) || 0;
      if (stateGovFee > 0) {
        combinedGovernmentFees += stateGovFee;
        extraFilingFeesHtmlRows += `
          <div class="runtime-state-fee-notice-card" style="background: #f8fafc; border: 1px solid var(--border, #e2e8f0); border-left: 4px solid #10b981; border-radius: 8px; padding: 12px 16px; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; text-align: left; box-sizing: border-box; width: 100%;">
            <div style="display: flex; flex-direction: column;">
              <span style="font-weight: 700; color: var(--navy, #0a1f44); font-size: 0.85rem;">Mandatory ${stateRecord.name} Fee:</span>
              <small style="color: var(--navy, #0a1f44); font-weight: 500; font-size: 0.725rem;"><i class="fa-solid fa-clock"></i> Est. Processing: ${stateRecord.time}</small>
            </div>
            <strong style="font-family: monospace; color: #10b981; font-size: 1.1rem;">+$${stateGovFee.toFixed(2)}</strong>
          </div>
        `;
      }
    }
    // --- B. FMCSA & REGULATORY GOVERNMENT FEE LOGIC ---
    if (urlServiceSlug && window.GOVT_REGULATORY_FEES && window.GOVT_REGULATORY_FEES[urlServiceSlug]) {
      const govRecord = window.GOVT_REGULATORY_FEES[urlServiceSlug];
      const discoveredGovFee = govRecord[urlServiceSlug] !== undefined ? govRecord[urlServiceSlug] : (govRecord["filing-fee"] || 0);
      const targetGovRegulatoryFee = parseFloat(discoveredGovFee) || 0;
      if (targetGovRegulatoryFee > 0) {
        combinedGovernmentFees += targetGovRegulatoryFee;
        extraFilingFeesHtmlRows += `
          <div class="runtime-gov-fee-notice-card" style="background: #f8fafc; border: 1px solid var(--border, #e2e8f0); border-left: 4px solid #0a1f44; border-radius: 8px; padding: 12px 16px; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; text-align: left; box-sizing: border-box; width: 100%;">
            <div style="display: flex; flex-direction: column;">
              <span style="font-weight: 700; color: var(--navy, #0a1f44); font-size: 0.85rem;">Mandatory Gov Filing Fee:</span>
              <small style="color: var(--navy, #0a1f44); font-weight: 500; font-size: 0.725rem;"><i class="fa-solid fa-clock"></i> Est. Processing: ${govRecord.time || "Processing"}</small>
            </div>
            <strong style="font-family: monospace; color: #10b981; font-size: 1.1rem;">+$${targetGovRegulatoryFee.toFixed(2)}</strong>
          </div>
        `;
      }
    }

    // 2. SAFE STRING ESCAPE PROCESSING
    let mainBoxListMarkup = "";
    activeBullets.forEach(function(bulletItem) {
      const safeText = (typeof window.secureWizardStringEscape === "function") ? window.secureWizardStringEscape(bulletItem) : bulletItem;
      mainBoxListMarkup += `<li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;"><i class="fa-solid fa-circle-check" style="color: #10b981;"></i><span class="f4u-pristine-bullet-text" style="font-size: 0.9rem; color: var(--navy, #0a1f44); font-weight: 600;">${safeText}</span></li>`;
    });

    const masterPanelTarget = document.getElementById("step-1-injection-placeholder");
    if (masterPanelTarget) {
      masterPanelTarget.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box; text-align: left; clear: both;">
          <div style="border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 12px;">
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--slate, #64748b); text-transform: uppercase; letter-spacing: 0.5px;">Selected Package</span>
            <h3 style="margin: 4px 0 0 0; color: var(--navy, #0a1f44); font-size: 1.15rem; font-weight: 800;">${finalizedPlanTitleContainerHeaderText}</h3>
          </div>
          <div style="margin-top: 4px; margin-bottom: 4px;">
            <label style="font-weight: 800; font-size: 0.75rem; text-transform: uppercase; color: var(--navy, #0a1f44); display: block; margin-bottom: 10px; letter-spacing: 0.5px;">What Comes with the Package</label>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px;">
              ${mainBoxListMarkup}
            </ul>
          </div>
          <div style="background: #f8fafc; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; padding: 14px 16px; margin-top: 4px; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box; width: 100%;">
            <span style="font-weight: 800; color: var(--navy, #0a1f44); font-size: 0.95rem;">Base Fee:</span>
            <strong style="font-family: monospace; color: #10b981; font-size: 1.35rem;">$${finalBaseFee.toFixed(2)}</strong>
          </div>
          ${extraFilingFeesHtmlRows}
          <div class="wizard-action-footer" style="display: flex; justify-content: flex-end; align-items: center; width: 100%; margin-top: 16px; border-top: 1px solid var(--border, #e2e8f0); padding-top: 16px; box-sizing: border-box; clear: both;">
            <button type="button" class="btn-wizard-main" onclick="window.switchWizardActiveViewLayout(2)" style="background: #0a1f44; color: #ffffff; padding: 12px 32px; border: none; border-radius: 6px; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: background 0.2s;">
              Continue to Service Form <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;
    }

    const numericalBaseInput = document.getElementById("wizard-base-package-fee-input");
    if (numericalBaseInput) {
      numericalBaseInput.value = finalBaseFee.toFixed(2);
      numericalBaseInput.dispatchEvent(new Event('change', { bubbles: true }));
    }

    window.computedWizardStateGovernmentFee = combinedGovernmentFees;
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
      window.updateDynamicPricingMatrixVanilla();
    }
    if (typeof window.populatePurchaseSummaryReviewMatrix === "function") {
      window.populatePurchaseSummaryReviewMatrix();
    }
  } catch (err) {
    console.error("[Overview Renderer Failure]", err);
  } finally {
    window.isPlanCardRenderingLockActive = false;
  }
}
window.renderOnboardingPlanOverviewCard = renderOnboardingPlanOverviewCard;
// step-1.js (Part 2/2) - Parameter Ingestion Engine Logic
function autoInjectMainWebsitePricingPlan() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlService = urlParams.get('service');
  const urlPlan = urlParams.get('plan');
  const urlState = urlParams.get('state') || urlParams.get('stateCode') || "";

  if (!urlService || !urlPlan) {
    const currentUriPath = window.location.pathname.toLowerCase();
    if (!currentUriPath.includes("get-started.html")) {
      console.warn("[Traffic Router] Missing product service/plan intent details. Redirecting to initialization hub...");
      window.location.href = "get-started.html";
      return;
    } else {
      console.log("[Traffic Router] Restoring clean baseline organic session context on start hub page.");
      return;
    }
  }

  let sanitizedServiceKey = urlService.toLowerCase().trim();
  const coreDatabaseRegistry = window.CENTRAL_SERVICE_PLAN_DB || (window.GLOBAL_COMPANY_PRICING && window.GLOBAL_COMPANY_PRICING.packages);
  if (coreDatabaseRegistry && !coreDatabaseRegistry[sanitizedServiceKey]) {
    const dynamicKeyMatch = Object.keys(coreDatabaseRegistry).find(key => sanitizedServiceKey.includes(key) || key.includes(sanitizedServiceKey));
    if (dynamicKeyMatch) {
      sanitizedServiceKey = dynamicKeyMatch;
    }
  }

  const textInputService = document.getElementById("wizard-route-service-id");
  const textInputPlan = document.getElementById("wizard-route-tier-id");

  if (!coreDatabaseRegistry || !coreDatabaseRegistry[sanitizedServiceKey]) {
    console.log(`[Boot Sync Delay] Central service database unparsed for key "${sanitizedServiceKey}". Re-queueing...`);
    setTimeout(autoInjectMainWebsitePricingPlan, 100);
    return;
  }

  window.routeActiveServiceKey = sanitizedServiceKey;
  window.routeActivePlanKey = urlPlan.toLowerCase().trim();
  localStorage.setItem('wizard_service_key', window.routeActiveServiceKey);
  localStorage.setItem('wizard_plan_tier_key', window.routeActivePlanKey);

  let finalizedStateToken = urlState.toUpperCase().trim();
  if (!finalizedStateToken) {
    const defaultStateField = document.getElementById("wizard_formation_state_select") || document.getElementById("formation_state");
    if (defaultStateField) {
      finalizedStateToken = String(defaultStateField.value).toUpperCase().trim();
    }
  }

  if (finalizedStateToken) {
    window.selectedFormationStateCode = finalizedStateToken.replace(/[^A-Z]/g, "").substring(0, 2);
    localStorage.setItem('wizard_selected_state', window.selectedFormationStateCode);
  }

  if (window.selectedFormationStateCode && typeof resolveActiveStateFee === "function") {
    resolveActiveStateFee(window.selectedFormationStateCode, window.routeActiveServiceKey);
  }

  if (textInputService) {
    textInputService.value = coreDatabaseRegistry[window.routeActiveServiceKey]?.name || urlService;
    localStorage.setItem('wizard_field_selected_package_offering', textInputService.value);
  }

  if (textInputPlan && window.routeActivePlanKey) {
    const rawTier = window.routeActivePlanKey;
    textInputPlan.value = rawTier.charAt(0).toUpperCase() + rawTier.slice(1);
    localStorage.setItem('wizard_field_selected_plan_tier', textInputPlan.value);
  }

  // DIRECT MAP: Binds data straight to structural payload for public.orders insertion
  window.currentOrderCorePayload = window.currentOrderCorePayload || {};
  window.currentOrderCorePayload.service_key = window.routeActiveServiceKey;
  window.currentOrderCorePayload.service_title = textInputService ? textInputService.value : urlService;
  window.currentOrderCorePayload.plan_tier = window.routeActivePlanKey;

  const currentPlanConfig = coreDatabaseRegistry[window.routeActiveServiceKey];
  if (currentPlanConfig && typeof processDynamicMarketingLayoutDecorations === "function") {
    processDynamicMarketingLayoutDecorations(currentPlanConfig, window.routeActivePlanKey);
  }

  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }

  console.log("[Router UI Engine] Parameter ingestion successful. Handing over control to wizard-master-core.");
}

window.autoInjectMainWebsitePricingPlan = autoInjectMainWebsitePricingPlan;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", autoInjectMainWebsitePricingPlan);
} else {
  autoInjectMainWebsitePricingPlan();
}




// ============================================================================ //
// ðŸ“¡ PART 1 OF 2: DYNAMIC FILE TARGET CONSTRUCTOR                             //
// ============================================================================ //
function resolveDynamicScriptAssetPath() {
  const queryScanner = new URLSearchParams(window.location.search);
  
  // Scans all taxonomy keys dynamically without using hardcoded strings
  const activeServiceId = queryScanner.get('service') || 
                          queryScanner.get('package') || 
                          queryScanner.get('id') || "";
                          
  if (!activeServiceId) return null;

  const sanitizedSlug = String(activeServiceId).toLowerCase().trim().replace(/[\s_]+/g, "-");
  
  // Generates a path based on your real-time address bar query parameter
  return `assets/js/wizard/${sanitizedSlug}.js`;
}

// ============================================================================ //
// ðŸ“¡ PART 2 OF 2: NON-BLOCKING ASYNC MOUNTING CONTROLLER                      //
// ============================================================================ //
function prefetchStepTwoDynamicAsset() {
  const targetScriptSrc = resolveDynamicScriptAssetPath();
  if (!targetScriptSrc) return;

  // Stop execution if the asset module has already been mounted to the document header
  if (document.querySelector(`script[src="${targetScriptSrc}"]`)) {
    console.log(`[Pre-fetch] Script asset already initialized in DOM scope: "${targetScriptSrc}"`);
    return;
  }

  console.log(`[Pre-fetch Engine] Initiating asynchronous background load path for: "${targetScriptSrc}"`);

  // Dynamically assemble a non-blocking script tag node element
  const dynamicScriptTag = document.createElement("script");
  dynamicScriptTag.src = targetScriptSrc;
  dynamicScriptTag.async = true;
  dynamicScriptTag.type = "text/javascript";

  // Error safety feedback fallback
  dynamicScriptTag.onerror = function() {
    console.warn(`[Pre-fetch Warning] Dynamic asset could not be loaded from disk: "${targetScriptSrc}"`);
  };

  document.head.appendChild(dynamicScriptTag);
}

// Expose cleanly to global parameters scope window records
window.prefetchStepTwoDynamicAsset = prefetchStepTwoDynamicAsset;

// Auto-initialize layout hooks cleanly only after main thread settles down
if (document.readyState !== "loading") {
  window.prefetchStepTwoDynamicAsset();
} else {
  document.addEventListener("DOMContentLoaded", window.prefetchStepTwoDynamicAsset);
}



// ============================================================================ //
// ðŸ“ GLOBAL SYSTEM STATE REGISTRY MATRIX (INITIALIZE TO PREVENT RACE ERRORS)   //
// ============================================================================ //
window.currentSelectedAddonsListArrayMatrix = window.currentSelectedAddonsListArrayMatrix || [];
window.routeActiveServiceKey = window.routeActiveServiceKey || localStorage.getItem('wizard_service_key') || "";
window.routeActivePlanTierName = window.routeActivePlanTierName || localStorage.getItem('wizard_plan_tier_key') || "";

if (typeof window.syncModalCheckboxChangeToBackgroundForm !== "function") {
    window.syncModalCheckboxChangeToBackgroundForm = function(elementRef, event) {
        console.warn("[Safe Fallback Module] syncModalCheckboxChangeToBackgroundForm missing from execution layers.");
    };
}

if (typeof window.attachGooglePlacesAutocompleteToNode !== "function") {
    window.attachGooglePlacesAutocompleteToNode = function(elementInputRef) {
        console.warn("[Google Places Bridge] attachGooglePlacesAutocompleteToNode invoked but library assets are unmapped. Bypassing safely to secure stability.");
        if (elementInputRef) {
            elementInputRef.removeAttribute("onfocus");
        }
    };
}
// ============================================================================ //
// ðŸ”— URL PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE (DYNAMIC)     //
// ============================================================================ //
function initializeUrlParameterParserEngineVanilla() {
  const searchUrlQueryStrings = new URLSearchParams(window.location.search);
  const queryPassedService = searchUrlQueryStrings.get('service') || localStorage.getItem('wizard_service_key');
  const queryPassedPlan = searchUrlQueryStrings.get('plan') || localStorage.getItem('wizard_plan_tier_key');
  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  if (!queryPassedService || queryPassedService.trim() === "") {
    throw new Error("[Enterprise Critical Error] System context parameter 'service' mapping to public.orders.service_key is entirely missing.");
  }
  if (!queryPassedPlan || queryPassedPlan.trim() === "") {
    throw new Error("[Enterprise Critical Error] System context parameter 'plan' mapping to public.orders.plan_tier is entirely missing.");
  }

  window.routeActiveServiceKey = queryPassedService.toLowerCase().trim();
  localStorage.setItem('wizard_service_key', window.routeActiveServiceKey);

  if (inputServiceNode) {
    if (!window.CENTRAL_SERVICE_PLAN_DB || !window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) {
      throw new Error(`[Enterprise Critical Error] service_key '${window.routeActiveServiceKey}' has no valid tracking definitions in CENTRAL_SERVICE_PLAN_DB.`);
    }
    const targetDbName = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name;
    if (!targetDbName || targetDbName.trim() === "") {
      throw new Error(`[Enterprise Critical Error] Found service key '${window.routeActiveServiceKey}' but its database 'name' descriptor is blank.`);
    }
    inputServiceNode.value = targetDbName;
  }

  window.routeActivePlanKey = queryPassedPlan.toLowerCase().trim();
  localStorage.setItem('wizard_plan_tier_key', window.routeActivePlanKey);

  if (inputPlanNode) {
    const activeServiceRecord = window.CENTRAL_SERVICE_PLAN_DB ? window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey] : null;
    if (!activeServiceRecord || !activeServiceRecord.plans || !activeServiceRecord.plans[window.routeActivePlanKey]) {
      throw new Error(`[Enterprise Critical Error] plan_tier key '${window.routeActivePlanKey}' matches no schema packages within catalog database.`);
    }
    const targetPlanDbName = activeServiceRecord.plans[window.routeActivePlanKey].name;
    if (!targetPlanDbName || targetPlanDbName.trim() === "") {
      throw new Error(`[Enterprise Critical Error] Catalog package key '${window.routeActivePlanKey}' has an unconfigured or empty name field string.`);
    }
    inputPlanNode.value = targetPlanDbName;
  }

  // DIRECT SCHEMA MAPPING: Enforces target records flow into the active transaction transaction model
  window.currentOrderCorePayload = window.currentOrderCorePayload || {};
  window.currentOrderCorePayload.service_key = window.routeActiveServiceKey;
  window.currentOrderCorePayload.service_title = inputServiceNode ? inputServiceNode.value : "";
  window.currentOrderCorePayload.plan_tier = window.routeActivePlanKey;

  if (typeof window.executeStepTwoDynamicFormInjection === "function") {
    window.executeStepTwoDynamicFormInjection(true, window.routeActiveServiceKey);
  } else if (typeof window.executeDynamicRegulatoryFieldInjection === "function") {
    window.executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  } else {
    throw new Error("[Enterprise Critical Error] Failed to route step initialization pipeline. Injection dependencies missing.");
  }
}

window.initializeUrlParameterParserEngineVanilla = initializeUrlParameterParserEngineVanilla;

document.addEventListener("DOMContentLoaded", () => {
  initializeUrlParameterParserEngineVanilla();
});


// ============================================================================ //
// ðŸš€ PART 1 OF 3: MASTER DATA LAYER HYDRATION INITIALIZER                      //
// ============================================================================ //
function extractActiveBootContext() {
  const urlEngineParams = new URLSearchParams(window.location.search);
  
  // Strict matching parameters: mapping directly to database column expectations
  let resolvedSlug = urlEngineParams.get('service') || localStorage.getItem('wizard_service_key') || "";
  let resolvedPlan = urlEngineParams.get('plan') || localStorage.getItem('wizard_plan_tier_key') || "";
  const resolvedState = urlEngineParams.get('state') || localStorage.getItem('wizard_selected_state') || "";

  if (!resolvedSlug || resolvedSlug.trim() === "") {
    throw new Error("[Enterprise Critical Error] Context parameter 'service' mapping to public.orders.service_key is blank.");
  }
  if (!resolvedPlan || resolvedPlan.trim() === "") {
    throw new Error("[Enterprise Critical Error] Context parameter 'plan' mapping to public.orders.plan_tier is blank.");
  }

  window.routeActiveServiceKey = resolvedSlug.toLowerCase().trim();
  window.routeActivePlanKey = resolvedPlan.toLowerCase().trim();
  
  localStorage.setItem('wizard_service_key', window.routeActiveServiceKey);
  localStorage.setItem('wizard_plan_tier_key', window.routeActivePlanKey);

  if (resolvedState && resolvedState.trim() !== "") {
    window.selectedFormationStateCode = resolvedState.toUpperCase().trim();
    localStorage.setItem('wizard_selected_state', window.selectedFormationStateCode);
  }

  // DIRECT PAYLOAD SYNCHRONIZATION: Binds the data directly into order tracking structures
  window.currentOrderCorePayload = window.currentOrderCorePayload || {};
  window.currentOrderCorePayload.service_key = window.routeActiveServiceKey;
  window.currentOrderCorePayload.plan_tier = window.routeActivePlanKey;

  return { 
    service: window.routeActiveServiceKey, 
    plan: window.routeActivePlanKey 
  };
}

// ============================================================================ //
// ðŸš€ PART 2 OF 3: STATE SYNCHRONIZATION AND BOUNDARY CONTROL                  //
// ============================================================================ //
function synchronizeActiveWizardStepTracker() {
  const sessionStatePayload = localStorage.getItem("f4u_wizard_onboarding_state");
  let savedStepTracker = 1;

  if (sessionStatePayload) {
    try {
      const parsedState = JSON.parse(sessionStatePayload);
      if (parsedState && parsedState.currentWizardActiveStep) {
        savedStepTracker = parseInt(parsedState.currentWizardActiveStep, 10);
      }
    } catch(e) {
      throw new Error(`[Enterprise Critical Error] Session tracking state JSON payload is corrupt: ${e.message}`);
    }
  }

  window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || savedStepTracker || 1;

  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  if (inputServiceNode) {
    if (!window.CENTRAL_SERVICE_PLAN_DB?.[window.routeActiveServiceKey]) {
      throw new Error(`[Enterprise Critical Error] Core service tracking database definition missing for key: "${window.routeActiveServiceKey}"`);
    }
    const targetDbName = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name;
    if (!targetDbName || targetDbName.trim() === "") {
      throw new Error(`[Enterprise Critical Error] Found service tracking definition for '${window.routeActiveServiceKey}' but string parameter 'name' is blank.`);
    }
    inputServiceNode.value = targetDbName;
  }

  if (inputPlanNode && window.routeActivePlanKey) {
    const rawTier = window.routeActivePlanKey;
    inputPlanNode.value = rawTier.charAt(0).toUpperCase() + rawTier.slice(1);
  }

  // DIRECT SCHEMA TARGET BINDING: Structural synchronization to orders table memory map
  window.currentOrderCorePayload = window.currentOrderCorePayload || {};
  window.currentOrderCorePayload.service_title = inputServiceNode ? inputServiceNode.value : "";
}

// ============================================================================ //
// ðŸš€ PART 3 OF 3: ISOLATED DOWNSTREAM LIFE-CYCLE ROUTING ENGINE                //
// ============================================================================ //
async function runUnifiedWizardBootEngine() {
  "use strict";
  console.log("[Boot Engine] Initializing sequence-independent parameter scanning...");

  // 1. Core Data Validation & Hydration Checks - Elimination of retry looping workarounds
  if (typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined" || window.CENTRAL_SERVICE_PLAN_DB === null) {
    throw new Error("[Enterprise Critical Error] Core database dictionary 'CENTRAL_SERVICE_PLAN_DB' is uninitialized at boot execution.");
  }

  // 2. Extract Data Context and Synchronize State Steps
  if (typeof window.extractActiveBootContext !== "function") {
    throw new Error("[Enterprise Critical Error] Mandatory dependency subroutine 'extractActiveBootContext' is missing.");
  }
  
  const activeContext = window.extractActiveBootContext();
  if (!activeContext) {
    throw new Error("[Enterprise Critical Error] Active pipeline database initialization parameters could not be constructed.");
  }

  if (typeof window.synchronizeActiveWizardStepTracker !== "function") {
    throw new Error("[Enterprise Critical Error] Mandatory dependency subroutine 'synchronizeActiveWizardStepTracker' is missing.");
  }
  window.synchronizeActiveWizardStepTracker();

  // Enforce rigid verification on step integer boundaries without blind fallback catch statements
  if (window.currentWizardActiveStep === undefined || window.currentWizardActiveStep === null || isNaN(window.currentWizardActiveStep)) {
    const stateCache = localStorage.getItem("f4u_wizard_onboarding_state");
    if (!stateCache) {
      throw new Error("[Enterprise Critical Error] Current wizard layout step is unassigned and state storage cache is missing.");
    }
    try {
      const parsed = JSON.parse(stateCache);
      if (parsed.currentWizardActiveStep === undefined) {
        throw new Error("Property currentWizardActiveStep missing in stored state payload.");
      }
      window.currentWizardActiveStep = parseInt(parsed.currentWizardActiveStep, 10);
    } catch (e) {
      throw new Error(`[Enterprise Critical Error] Core layout tracking step identifier is invalid or corrupt: ${e.message}`);
    }
  }

  console.log(`[Boot Engine Presenter] Pipeline aligned for Active Step Index: ${window.currentWizardActiveStep}`);

  // ========================================================================= //
  // ðŸš€ MODULE 3: CONDITIONAL DOWNSTREAM VIEW CONTENT INJECTOR (PURE PRESENTATION) //
  // ========================================================================= //
  if (typeof window.autoInjectMainWebsitePricingPlan !== "function") {
    throw new Error("[Enterprise Critical Error] Core ingestion router function 'autoInjectMainWebsitePricingPlan' is unassigned.");
  }
  window.autoInjectMainWebsitePricingPlan();

  // 3. Conditional Downstream Execution Matrix (Strict Step Routing)
  if (window.currentWizardActiveStep === 0) {
    console.log("[Boot Engine] Step 0 active. Initializing introductory state jurisdiction controls.");
    // Wiped out the duplicate broken renderOnboardingPlanOverviewCard(null, null, null, 0) placeholder call!
  }

  if (window.currentWizardActiveStep === 1) {
    if (typeof window.renderStep1CustomFeatureBullets !== "function") {
      throw new Error("[Enterprise Critical Error] Bullet compilation renderer layout engine function is missing.");
    }
    window.renderStep1CustomFeatureBullets(window.routeActiveServiceKey);
  }

  if (window.currentWizardActiveStep === 2) {
    if (typeof window.executeStepTwoDynamicFormInjection !== "function") {
      throw new Error("[Enterprise Critical Error] Step 2 structural markup compilation engine function is missing.");
    }
    // Execution failure inside data injection loops crashes the sequence immediately
    await window.executeStepTwoDynamicFormInjection(true, window.routeActiveServiceKey);
  }

  if (window.currentWizardActiveStep === 4) {
    if (typeof window.initCursiveSignatureCaptureLivePreview !== "function") {
      throw new Error("[Enterprise Critical Error] Digital signature rendering engine hook is unassigned.");
    }
    window.initCursiveSignatureCaptureLivePreview();
  }

  if (window.currentWizardActiveStep === 5) {
    if (typeof window.recalculateSummaryItemizedMatrixRows !== "function") {
      throw new Error("[Enterprise Critical Error] Summary aggregation compilation matrix engine is unassigned.");
    }
    window.recalculateSummaryItemizedMatrixRows();
  }

  // 4. Run Core Production Pipelines and Timeline Position Indicators
  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(true);
  }
  if (typeof window.autoDiscoverAndHookAddressNodes === "function") {
    window.autoDiscoverAndHookAddressNodes();
  }

  if (typeof window.updateApplicationMapTimelineBubbles !== "function") {
    throw new Error("[Enterprise Critical Error] Application map progression sidebar indicator subroutine is missing.");
  }
  window.updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);

  if (typeof window.updateDynamicPricingMatrixVanilla !== "function") {
    throw new Error("[Enterprise Critical Error] Calculation ledger processing subroutine 'updateDynamicPricingMatrixVanilla' is missing.");
  }
  window.updateDynamicPricingMatrixVanilla();

  console.log("[Boot Engine Success] Onboarding pipeline active. Step views isolated safely.");
}

window.runUnifiedWizardBootEngine = runUnifiedWizardBootEngine;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.runUnifiedWizardBootEngine);
} else {
  window.runUnifiedWizardBootEngine();
}

// ============================================================================ //
// ðŸš€ PART 1 OF 2: MASTER ORCHESTRATION PIPELINE GATING CHASSIS                 //
// ============================================================================ //
async function executeSynchronizedPlatformBoot() {
  "use strict";
  console.log("[Master Orchestrator] Step A: Executing sequence-independent parameter scanning...");

  // 1. Core Parameter Initialization Pass
  if (typeof window.runUnifiedWizardBootEngine !== "function") {
    throw new Error("[Enterprise Critical Error] Core workflow engine function 'runUnifiedWizardBootEngine' is completely unassigned.");
  }
  
  // Wait completely for database setups, core state checks, and step routing to complete
  await window.runUnifiedWizardBootEngine();

  // SECURE STEP ZERO TRACKING PROTECTION GATEWAY - Hard validation constraints enforced
  const baselineStepVerification = parseInt(window.currentWizardActiveStep, 10);
  if (isNaN(baselineStepVerification)) {
    throw new Error("[Enterprise Critical Error] The current active step counter value evaluated to NaN. Workflow aborted.");
  }

  if (baselineStepVerification === 0) {
    console.log("[Master Orchestrator Interlock] Enforcing strict 0-index lifecycle lock for introductory view.");
    
    const coreStateString = localStorage.getItem("f4u_wizard_onboarding_state");
    if (!coreStateString) {
      throw new Error("[Enterprise Critical Error] Stored layout payload record 'f4u_wizard_onboarding_state' is completely missing.");
    }

    try {
      const parsedObj = JSON.parse(coreStateString);
      parsedObj.currentWizardActiveStep = 0;
      localStorage.setItem("f4u_wizard_onboarding_state", JSON.stringify(parsedObj));
    } catch (e) {
      throw new Error(`[Enterprise Critical Error] Failed to update storage tracking bounds during interlock pass: ${e.message}`);
    }
  }

  console.log("[Master Orchestrator] Step B: Parameter tracking established. Launching downstream widgets...");

  // 2. Secondary Interface Hydration Pass
  if (typeof window.runUnifiedPlatformLifecycleBoot !== "function") {
    throw new Error("[Enterprise Critical Error] Core visual architecture function 'runUnifiedPlatformLifecycleBoot' is missing.");
  }
  window.runUnifiedPlatformLifecycleBoot();

  // RE-ARM INTERACTION BUBBLES
  if (typeof window.updateApplicationMapTimelineBubbles !== "function") {
    throw new Error("[Enterprise Critical Error] Timeline indicator modifier 'updateApplicationMapTimelineBubbles' is unassigned.");
  }
  window.updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);
}


// ============================================================================ //
// ðŸš€ PART 2 OF 2: SECURE FRAMEWORK INITIALIZATION ATTACHMENT                 //
// ============================================================================ //
async function runCombinedMasterBootSequence() {
  console.log("[Master Orchestrator] Triggering single synchronized boot frame...");
  
  if (typeof executeSynchronizedPlatformBoot !== "function") {
    throw new Error("[Enterprise Critical Error] Core initialization hook 'executeSynchronizedPlatformBoot' is unassigned.");
  }

  // Pure execution pass without error masking. Failures trigger absolute, fatal browser-level runtime unhandled exceptions.
  await executeSynchronizedPlatformBoot();
}

// Bind cleanly back into universal global window scope references safely
window.runCombinedMasterBootSequence = runCombinedMasterBootSequence;

// Structural self-trigger execution matching actual DOM ready timelines
if (document.readyState !== "loading") {
  window.runCombinedMasterBootSequence();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    window.runCombinedMasterBootSequence();
  });
}

// ============================================================================ //
// ðŸ“ SERVICE URL REGISTRY MAP DICTIONARY                                       //
// ============================================================================ //
const SERVICE_URL_REGISTRY = { 
  "llc-formation": "llc-formation", 
  "corporations": "corporations", 
  "sole-proprietorship": "sole-proprietorship", 
  "dba-registration": "dba-registration", 
  "nonprofits": "nonprofits", 
  "series-llc": "series-llc", 
  "foreign-qualification": "foreign-qualification", 
  "llc-reinstatement": "llc-reinstatement", 
  "servicemark-filing": "servicemark-filing", 
  "annual-reports": "annual-reports", 
  "operating-agreement": "operating-agreement", 
  "registered-agent": "registered-agent", 
  "business-licenses": "business-licenses", 
  "dissolution": "dissolution", 
  "certificate-of-good-standing": "certificate-of-good-standing", 
  "clia-certificate": "clia-certificate", 
  "regulatory-consulting": "regulatory-consulting", 
  "state-tax": "state-tax", 
  "franchise-tax": "franchise-tax", 
  "sales-tax-registration": "sales-tax-registration", 
  "payroll-tax-940-941": "payroll-tax-940-941", 
  "duns-number": "duns-number", 
  "minority-certificate": "minority-certificate", 
  "ifta-registration": "ifta-registration", 
  "dot-permits": "dot-permits", 
  "ifta-quarterly-returns": "ifta-quarterly-returns", 
  "federal-tax": "federal-tax", 
  "employer-id-ein": "employer-id-ein", 
  "heavy-use-tax-2290": "heavy-use-tax-2290", 
  "cage-code": "cage-code", 
  "owner-operators": "owner-operators", 
  "trucker-authority": "trucker-authority", 
  "broker-authority": "broker-authority", 
  "ucr-registration": "ucr-registration", 
  "scac-code": "scac-code", 
  "dot-consortium": "dot-consortium", 
  "driver-file": "driver-file", 
  "process-agents-boc-3": "process-agents-boc-3", 
  "hazmat-registration": "hazmat-registration", 
  "trucker-insurance-quote": "trucker-insurance-quote", 
  "broker-insurance-quote": "broker-insurance-quote", 
  "new-entrant-audit": "new-entrant-audit", 
  "mcs-150-update": "mcs-150-update", 
  "boc-3-amendment": "boc-3-amendment", 
  "apostille-services": "apostille-services" 
};

window.SERVICE_URL_REGISTRY = SERVICE_URL_REGISTRY;



// ============================================================================ //
// ðŸ“‹ FEATURE BULLET LIST CONTENT RESOLVER & CONFIGURATION BRIDGE
// ============================================================================ //
/**
 * Public structural bridge to resolve feature bullet list content parameters dynamically.
 * Zero Hardcoding: Eliminates automatic default assignments to block visual seeping bugs.
 * @param {string} activeSlug - The raw matching service handle code from the portal.
 */
function renderStep1CustomFeatureBullets(activeSlug) {
  // ðŸ›¡ï¸ RUNTIME LIFECYCLE GUARD:
  if (typeof window.getPricingConfiguration !== "function") {
    setTimeout;(function() { renderStep1CustomFeatureBullets(activeSlug); }, 50);
    return;
  }

  // Pure dynamic variable resolution â€” No default parameter strings assumed
  const activePlanKey = window.routeActivePlanKey;
  if (!activePlanKey) {
    setTimeout;(function() { renderStep1CustomFeatureBullets(activeSlug); }, 50);
    return;
  }

  const activeTierKey = String(activePlanKey).toLowerCase().trim();

  // 1. Fetch the data configuration object directly
  const resolvedConfig = window.getPricingConfiguration(activeSlug);
  if (!resolvedConfig || !resolvedConfig.serviceKey) {
    console.error(`[Lifecycle Sync Failure] Timing engine could not resolve configurations for: "${activeSlug}"`);
    return;
  }
  console.log(`[Lifecycle Sync Success] Extracted properties for service path: "${resolvedConfig.serviceKey}"`);

  // 2. Clear property tracking mapping arrays
  const activeBulletsArray = resolvedConfig.bullets || [];
  const resolvedPackageFeeAmount = resolvedConfig.basePrice || 0;
  const tierTitleDisplay = activeTierKey.charAt(0).toUpperCase() + activeTierKey.slice(1);

  // 3. Extract the root database record
  const rawDatabaseSource = window.CENTRAL_SERVICE_PLAN_DB || (window.GLOBAL_COMPANY_PRICING ? window.GLOBAL_COMPANY_PRICING.packages : null);
  const actualServiceDataNode = rawDatabaseSource?.[resolvedConfig.serviceKey];
  if (!actualServiceDataNode) {
    console.error(`[Lifecycle Sync Failure] Database entry missing for key lookup index: "${resolvedConfig.serviceKey}"`);
    return;
  }

  // 4. CRITICAL STEP CONTAINMENT CHECK:
  // Verify visibility boundaries to prevent heavy layout adjustments during step transitions.
  const activeStepBlock = document.querySelector(".wizard-panel.active") || document.querySelector(".wizard-step-container-block.active") || document.body;
  if (activeStepBlock && activeStepBlock.id) {
    const activePanelId = String(activeStepBlock.id).trim().toLowerCase();
    
    if (activePanelId !== "step-panel-1" && activePanelId !== "step-1") {
      // ðŸŸ¢ INTEGRITY ATTACHMENT GATE:
      const preExistingPlanCard = document.getElementById("step-1-selected-plan-overview");
      if (preExistingPlanCard && preExistingPlanCard.children.length > 0) {
        console.log(`[Lifecycle Sync Pass] Pricing values protected. Visual redraw suppressed for active view: #${activePanelId}`);
        return; // Safe exit: Instantly returns without letting the data loop blank out subsequent screen nodes
      }
    }
  }

  // ðŸŸ¢ OPTIMIZATION FIX RELOCATED: 
  // Moved beneath step validation gates so it only applies math parameters when safe to execute!
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }

  if (typeof window.renderOnboardingPlanOverviewCard === "function") {
    console.log(`[Lifecycle Sync Dispatch] Pushing verified records down to UI card builder.`);
    window.renderOnboardingPlanOverviewCard(
      actualServiceDataNode,
      tierTitleDisplay,
      activeBulletsArray,
      resolvedPackageFeeAmount
    );
  } else {
    console.error("[Lifecycle Sync Failure] Render card builder method is missing from global scope memory.");
  }
}

// Map safely back to global layers so your initial page boots can invoke it
window.renderStep1CustomFeatureBullets = renderStep1CustomFeatureBullets;

// ============================================================================ //
// ðŸŽ¯ DATA LIFESTYLE VALIDATOR: TIMING-INDEPENDENT LIFECYCLE ENFORCER           //
// ============================================================================ //
/**
 * Asynchronous-safe strict data lifecycle validator for binding landing page parameters.
 * Dynamic strategy: No fallbacks, no hardcoded package profiles. Fully data-driven.
 */
function processDynamicMarketingLayoutDecorations(planConfig, activePlanKeyString, retryCount) { 
    const textInputService = document.getElementById("wizard-route-service-id"); 
    const textInputTier = document.getElementById("wizard-route-tier-id"); 
    const currentRetry = typeof retryCount !== "undefined" ? parseInt(retryCount, 10) : 0; 
    
    // Extract from transferred URL query layout collections 
    const urlParams = new URLSearchParams(window.location.search); 
    const cleanServiceKey = String(urlParams.get('service') || "").toLowerCase().trim(); 
    const cleanPlanTierKey = String(urlParams.get('plan') || "").toLowerCase().trim(); 

    // VALIDATION GATE 1: Verify the URL parameter strings arrived intact 
    if (!cleanServiceKey || !cleanPlanTierKey) { 
        console.error(`[Data Validation Failure] Transaction Stop: Address parameters missing.`); 
        return false; 
    } 

    // Extract configuration context registry dynamically 
    const coreDatabaseRegistry = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages; 

    // TIMING BRIDGE: Self-correcting loading check loops 
    if (!coreDatabaseRegistry || !coreDatabaseRegistry[cleanServiceKey]) { 
        if (currentRetry < 3) { 
            console.log(`[Lifecycle Sync] Target database node is initializing. Retrying context hook (${currentRetry + 1}/3)...`); 
            setTimeout;(function() { 
                // ðŸŸ¢ FIXED ARGUMENTS INDEX: Corrected variable routing positions to ensure retry count accumulates 
                processDynamicMarketingLayoutDecorations(planConfig, activePlanKeyString, currentRetry + 1); 
            }, 100); 
            return false; 
        } 
        console.error(`[Data Validation Failure] Registry Exception: Service code not found.`); 
        return false; 
    } 

    const targetServiceNode = coreDatabaseRegistry[cleanServiceKey]; 

    // VALIDATION GATE 2: Pure data-driven validation against the database keys 
    if (!Object.prototype.hasOwnProperty.call(targetServiceNode.plans || targetServiceNode, cleanPlanTierKey)) { 
        console.error(`[Data Validation Failure] Tier Mismatch: "${cleanPlanTierKey}" doesn't exist in registry records.`); 
        return false; 
    } 

    // Calculate descriptive string parameters cleanly 
    let tierTitleDisplay = cleanPlanTierKey.charAt(0).toUpperCase() + cleanPlanTierKey.slice(1); 

    // Synchronize configurations cleanly down to internal trackers without breaking steps 
    if (textInputService) { 
        textInputService.value = targetServiceNode.name || ""; 
    } 
    if (textInputTier) { 
        textInputTier.value = tierTitleDisplay; 
    } 

    // VALIDATION GATE 3: Verify dynamic data feature matrices are present 
    let dynamicBulletsArray = null; 
    if (targetServiceNode.bullets) { 
        if (Array.isArray(targetServiceNode.bullets[cleanPlanTierKey])) { 
            dynamicBulletsArray = targetServiceNode.bullets[cleanPlanTierKey]; 
        } else if (Array.isArray(targetServiceNode.bullets)) { 
            dynamicBulletsArray = targetServiceNode.bullets; 
        } 
    } 

    if (!Array.isArray(dynamicBulletsArray)) { 
        console.error(`[Data Validation Failure] Schema Mismatch: Bullets array missing for tier: ${cleanPlanTierKey}`); 
        return false; 
    } 

    const basePackageFeeAmount = parseFloat(targetServiceNode[cleanPlanTierKey] || targetServiceNode.plans?.[cleanPlanTierKey]?.price); 
    if (isNaN(basePackageFeeAmount)) { 
        console.error(`[Data Validation Failure] Price Matrix Exception: Package numerical value invalid.`); 
        return false; 
    } 

    // Lock configuration arrays globally for contextual operations loops 
    window.routeActiveServiceKey = cleanServiceKey; 
    window.routeActivePlanKey = cleanPlanTierKey; 
    window.activeWizardRouteMarketingBullets = dynamicBulletsArray; 
    console.log(`[Data Lifecycle Verified] Service: ${cleanServiceKey} | Tier: ${cleanPlanTierKey}`); 

    // Pipe variables safely down into independent presentation layer targets 
    if (typeof window.renderOnboardingPlanOverviewCard === "function") { 
        window.renderOnboardingPlanOverviewCard(targetServiceNode, tierTitleDisplay, dynamicBulletsArray, basePackageFeeAmount); 
    } 

    // TRIGGER: Explicitly force state field rendering checks upon passing criteria validations 
    if (typeof autoPopulateAllUsStateSelectDropdowns === "function") { 
        autoPopulateAllUsStateSelectDropdowns(); 
    } 
    return true; 
} 

// Bind cleanly back into universal global window scope references safely 
window.processDynamicMarketingLayoutDecorations = processDynamicMarketingLayoutDecorations;

