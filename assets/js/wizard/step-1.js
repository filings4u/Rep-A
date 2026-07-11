// ============================================================================ //
// 🧱 STEP 1 PACKAGE REVIEWS AND PLAN MARKUP CARD BUILDER (COMBINED SYSTEM)     //
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

    /**
     * ONE CONTAINER FIX: Stripped out the inner wrapper container card.
     * Elements flow directly inside the outer placeholder box context,
     * making the card footprint identical to Step 0's layout container.
     */
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

          <!-- Integrated Action Footer Navigation Bar -->
          <div class="wizard-action-footer" style="display: flex; justify-content: flex-end; align-items: center; width: 100%; margin-top: 16px; border-top: 1px solid var(--border, #e2e8f0); padding-top: 16px; box-sizing: border-box; clear: both;">
            <button type="button" class="btn-wizard-main" onclick="window.switchWizardActiveViewLayout(2)" style="background: #0a1f44; color: #ffffff; padding: 12px 32px; border: none; border-radius: 6px; font-weight: 700; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: background 0.2s;">
              Continue to Service Form <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;
    }

    // 4. SYNC FORM METRICS ACROSS PARSING LOGIC
    const numericalBaseInput = document.getElementById("wizard-base-package-fee-input");
    if (numericalBaseInput) {
      numericalBaseInput.value = finalBaseFee.toFixed(2);
      numericalBaseInput.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // Sync calculated combined government fees back to your processing engine variable
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

    const currentPlanConfig = coreDatabaseRegistry[window.routeActiveServiceKey];
    if (currentPlanConfig && typeof processDynamicMarketingLayoutDecorations === "function") {
        processDynamicMarketingLayoutDecorations(currentPlanConfig, window.routeActivePlanKey);
    }

    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    }

     // ========================================================================= 
    // FINAL ARCHITECTURE CLEANUP: DEFER TO NATIVE CORE ROUTING PIPELINE
    // ========================================================================= 
    console.log("[Router UI Engine] Parameter ingestion successful. Handing over control to wizard-master-core.");

    // Strip out all manual CSS injectors, class modifications, and DOM selector overrides.
    // Let your updated switchWizardActiveViewLayout handle the visual layout transition naturally.
    
} // This safely closes your autoInjectMainWebsitePricingPlan function wrapper cleanly.

window.autoInjectMainWebsitePricingPlan = autoInjectMainWebsitePricingPlan; 

// Keep your DOM listener intact to parse URL variables immediately on initialization
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInjectMainWebsitePricingPlan);
} else {
    autoInjectMainWebsitePricingPlan();
}


// ============================================================================ //
// 📡 PART 1 OF 2: DYNAMIC FILE TARGET CONSTRUCTOR                             //
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
// 📡 PART 2 OF 2: NON-BLOCKING ASYNC MOUNTING CONTROLLER                      //
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
// 📁 GLOBAL SYSTEM STATE REGISTRY MATRIX (INITIALIZE TO PREVENT RACE ERRORS)   //
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
// 🔗 URL PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE (DYNAMIC)    //
// ============================================================================ //
function initializeUrlParameterParserEngineVanilla() { 
    const searchUrlQueryStrings = new URLSearchParams(window.location.search); 
    const queryPassedService = searchUrlQueryStrings.get('service') || localStorage.getItem('wizard_service_key'); 
    const queryPassedPlan = searchUrlQueryStrings.get('plan') || localStorage.getItem('wizard_plan_tier_key'); 
    
    const inputServiceNode = document.getElementById("wizard-route-service-id"); 
    const inputPlanNode = document.getElementById("wizard-route-tier-id"); 
    
    if (queryPassedService) { 
        window.routeActiveServiceKey = queryPassedService.toLowerCase().trim(); 
        localStorage.setItem('wizard_service_key', window.routeActiveServiceKey); 
        
        if (inputServiceNode) { 
            if (window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) { 
                inputServiceNode.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name || ""; 
            } else { 
                let cleanLabel = window.routeActiveServiceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); 
                inputServiceNode.value = cleanLabel; 
            } 
        } 
    } 
    
    if (queryPassedPlan) { 
        window.routeActivePlanKey = queryPassedPlan.toLowerCase().trim(); 
        localStorage.setItem('wizard_plan_tier_key', window.routeActivePlanKey); 
        
        if (inputPlanNode) { 
            const activeServiceRecord = window.CENTRAL_SERVICE_PLAN_DB ? window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey] : null; 
            if (activeServiceRecord && activeServiceRecord.plans && activeServiceRecord.plans[window.routeActivePlanKey]) { 
                inputPlanNode.value = activeServiceRecord.plans[window.routeActivePlanKey].name || window.routeActivePlanKey; 
            } else { 
                let cleanPlanLabel = window.routeActivePlanKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); 
                inputPlanNode.value = cleanPlanLabel; 
            } 
        } 
    } 
    
    if (window.routeActiveServiceKey) { 
        if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
            window.executeStepTwoDynamicFormInjection(true, window.routeActiveServiceKey); 
        } else if (typeof window.executeDynamicRegulatoryFieldInjection === "function") { 
            window.executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey); 
        } 
    } 
} 

window.initializeUrlParameterParserEngineVanilla = initializeUrlParameterParserEngineVanilla; 

// Run rendering and configuration logic workflows automatically on window DOM initialization 
document.addEventListener("DOMContentLoaded", () => { 
    // 🟢 FIXED: Wiped out the broken 'renderStepOneLayoutMarkup()' function call to eliminate the reference crash loop!
    initializeUrlParameterParserEngineVanilla(); 
});



// ============================================================================ //
// 🚀 PART 1 OF 3: MASTER DATA LAYER HYDRATION INITIALIZER                       //
// ============================================================================ //
function extractActiveBootContext() {
  const urlEngineParams = new URLSearchParams(window.location.search);
  
  let resolvedSlug = urlEngineParams.get('service') || urlEngineParams.get('package') || urlEngineParams.get('id') || localStorage.getItem('wizard_service_key') || "";
  let resolvedPlan = urlEngineParams.get('plan') || urlEngineParams.get('tier') || localStorage.getItem('wizard_plan_tier_key') || "";
  const resolvedState = urlEngineParams.get('state') || localStorage.getItem('wizard_selected_state') || "";

  if (!resolvedSlug || !resolvedPlan) {
    console.warn("[Boot Engine Context] Pipeline parameters unassigned or pending background streaming sync.");
    return null;
  }

  window.routeActiveServiceKey = resolvedSlug.toLowerCase().trim().replace(/[\s_]+/g, "-");
  window.routeActivePlanKey = resolvedPlan.toLowerCase().trim();

  localStorage.setItem('wizard_service_key', window.routeActiveServiceKey);
  localStorage.setItem('wizard_plan_tier_key', window.routeActivePlanKey);

  if (resolvedState) {
    window.selectedFormationStateCode = resolvedState.toUpperCase().trim();
    localStorage.setItem('wizard_selected_state', window.selectedFormationStateCode);
  }

  return { service: window.routeActiveServiceKey, plan: window.routeActivePlanKey };
}
// ============================================================================ //
// 🚀 PART 2 OF 3: STATE SYNCHRONIZATION AND BOUNDARY CONTROL                  //
// ============================================================================ //
function synchronizeActiveWizardStepTracker() {
  const sessionStatePayload = localStorage.getItem("f4u_wizard_onboarding_state");
  let savedStepTracker = 1;

  if (sessionStatePayload) {
    try {
      const parsedState = JSON.parse(sessionStatePayload);
      if (parsedState.currentWizardActiveStep) {
        savedStepTracker = parseInt(parsedState.currentWizardActiveStep, 10);
      }
    } catch(e) {}
  }

  window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || savedStepTracker || 1;

  // Mirror variables securely into on-screen tracking elements if present
  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  if (inputServiceNode && window.CENTRAL_SERVICE_PLAN_DB?.[window.routeActiveServiceKey]) {
    inputServiceNode.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]?.name || "";
  }
  if (inputPlanNode && window.routeActivePlanKey) {
    const rawTier = window.routeActivePlanKey;
    inputPlanNode.value = rawTier.charAt(0).toUpperCase() + rawTier.slice(1);
  }
}
// ============================================================================ //
// 🚀 PART 3 OF 3: ISOLATED DOWNSTREAM LIFE-CYCLE ROUTING ENGINE                //
// ============================================================================ //
window.wizardBootRetryAttempts = window.wizardBootRetryAttempts || 0;

async function runUnifiedWizardBootEngine() {
    console.log("[Boot Engine] Initializing sequence-independent parameter scanning...");

    // 1. Core Data Validation & Hydration Checks
    if (typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined") {
        if (window.wizardBootRetryAttempts < 50) {
            window.wizardBootRetryAttempts++;
            setTimeout(runUnifiedWizardBootEngine, 100);
        } else {
            console.error("[Boot Terminal Failure] Database connection timed out.");
        }
        return;
    }
    window.wizardBootRetryAttempts = 0;

    // 2. Extract Data Context and Synchronize State Steps
    if (typeof extractActiveBootContext === "function") {
        const activeContext = extractActiveBootContext();
        if (!activeContext) return; // Exit gracefully; let fallback parameters catch up
    }

    if (typeof synchronizeActiveWizardStepTracker === "function") {
        synchronizeActiveWizardStepTracker();
    }

    // FIX 1: Enforce zero-index fallback if step tracker parsing returns unassigned or falsy
    if (window.currentWizardActiveStep === undefined || window.currentWizardActiveStep === null || isNaN(window.currentWizardActiveStep)) {
        const stateCache = localStorage.getItem("f4u_wizard_onboarding_state");
        try {
            const parsed = stateCache ? JSON.parse(stateCache) : {};
            window.currentWizardActiveStep = parsed.currentWizardActiveStep !== undefined ? parseInt(parsed.currentWizardActiveStep, 10) : 0;
        } catch (e) {
            window.currentWizardActiveStep = 0;
        }
    }

    console.log(`[Boot Engine] Pipeline executing for Active Step Index: ${window.currentWizardActiveStep}`);

    // 3. Conditional Downstream Execution Matrix (Strict Step Routing)
    if (typeof autoInjectMainWebsitePricingPlan === "function") {
        autoInjectMainWebsitePricingPlan();
    }

    // FIX 2: Added explicit execution block handle for Step 0 initialization passes
    if (window.currentWizardActiveStep === 0) {
        console.log("[Boot Engine] Step 0 active. Building introductory view models...");
        if (typeof window.renderOnboardingPlanOverviewCard === "function") {
            window.renderOnboardingPlanOverviewCard(null, null, null, 0);
        }
    }

    if (window.currentWizardActiveStep === 1 && typeof renderStep1CustomFeatureBullets === "function") {
        renderStep1CustomFeatureBullets(window.routeActiveServiceKey);
    }

    if (window.currentWizardActiveStep === 2 && typeof window.executeStepTwoDynamicFormInjection === "function") {
        const urlParamsFallback = new URLSearchParams(window.location.search);
        const resolvedServiceToken = window.routeActiveServiceKey || String(urlParamsFallback.get('service') || "").toLowerCase().trim();
        console.log(`[Boot Engine] Compiling Step 2 content using key: "${resolvedServiceToken}"`);
        try {
            await window.executeStepTwoDynamicFormInjection(true, resolvedServiceToken);
        } catch (err) {
            console.error("[Boot Engine Failure] Error rendering dynamic Step 2 inputs:", err);
        }
    }

    if (window.currentWizardActiveStep === 4 && typeof window.initCursiveSignatureCaptureLivePreview === "function") {
        window.initCursiveSignatureCaptureLivePreview();
    }

    if (window.currentWizardActiveStep === 5 && typeof window.recalculateSummaryItemizedMatrixRows === "function") {
        window.recalculateSummaryItemizedMatrixRows();
    }

    // 4. Run Fallback Hydrators and Timeline Updates
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(true);
    }
    if (typeof autoDiscoverAndHookAddressNodes === "function") {
        autoDiscoverAndHookAddressNodes();
    }
    
    // Force sidebar indicators to paint elements matching your verified active step index parameter
    if (typeof updateApplicationMapTimelineBubbles === "function") {
        window.updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);
    }

    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
        console.log("[Boot Engine Success] Onboarding pipeline active. Step views isolated safely.");
    }
}

window.runUnifiedWizardBootEngine = runUnifiedWizardBootEngine;

// Coordinate initialization startup execution paths cleanly
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runUnifiedWizardBootEngine);
} else {
    runUnifiedWizardBootEngine();
}


// ============================================================================ //
// 🚀 PART 1 OF 2: MASTER ORCHESTRATION PIPELINE GATING CHASSIS                 //
// ============================================================================ //
async function executeSynchronizedPlatformBoot() {
    console.log("[Master Orchestrator] Step A: Executing sequence-independent parameter scanning...");

    // 1. Core Parameter Initialization Pass
    if (typeof window.runUnifiedWizardBootEngine === "function") {
        // Wait completely for database setups, core state checks, and step routing to complete
        await window.runUnifiedWizardBootEngine();
    }

    // FIX 1: SECURE STEP ZERO TRACKING PROTECTION GATEWAY
    const baselineStepVerification = parseInt(window.currentWizardActiveStep, 10);
    if (baselineStepVerification === 0 || isNaN(baselineStepVerification)) {
        console.log("[Master Orchestrator Interlock] Enforcing strict 0-index lifecycle lock for introductory view.");
        window.currentWizardActiveStep = 0;
        
        // Match the structural local storage payload configurations precisely
        const coreStateString = localStorage.getItem("f4u_wizard_onboarding_state") || "{}";
        try {
            const parsedObj = JSON.parse(coreStateString);
            parsedObj.currentWizardActiveStep = 0;
            localStorage.setItem("f4u_wizard_onboarding_state", JSON.stringify(parsedObj));
        } catch (e) {
            console.warn("[Master Orchestrator] Caching boundary write bypass:", e);
        }
    }

    console.log("[Master Orchestrator] Step B: Parameter tracking established. Launching downstream widgets...");

    // 2. Secondary Interface Hydration Pass
    if (typeof window.runUnifiedPlatformLifecycleBoot === "function") {
        // Fire platform lifecycle decorators safely now that step view targets are stable
        window.runUnifiedPlatformLifecycleBoot();
    }

    // FIX 2: RE-ARM INTERACTION BUBBLES
    if (typeof window.updateApplicationMapTimelineBubbles === "function") {
        window.updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);
    }
}

// ============================================================================ //
// 🚀 PART 2 OF 2: SECURE FRAMEWORK INITIALIZATION ATTACHMENT                 //
// ============================================================================ //
// FIX 3: Re-declared as a standard hoisted named function signature block.
// This allows compilation engines to map the entry token safely prior to scope execution.
function runCombinedMasterBootSequence() {
    console.log("[Master Orchestrator] Triggering single synchronized boot frame...");
    // Prevent system-wide crashes by executing through the gated lifecycle engine in Part 1
    executeSynchronizedPlatformBoot().catch(err => {
        console.error("[Master Orchestrator Fatal] Synchronization pass crashed:", err);
    });
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
// 📁 SERVICE URL REGISTRY MAP DICTIONARY                                      //
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
    "licenses-permits": "licenses-permits", 
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

// Bind to window scope so secondary files can reference it if needed
window.SERVICE_URL_REGISTRY = SERVICE_URL_REGISTRY;


// ============================================================================ //
// 📋 FEATURE BULLET LIST CONTENT RESOLVER & CONFIGURATION BRIDGE
// ============================================================================ //
/**
 * Public structural bridge to resolve feature bullet list content parameters dynamically.
 * Zero Hardcoding: Eliminates automatic default assignments to block visual seeping bugs.
 * @param {string} activeSlug - The raw matching service handle code from the portal.
 */
function renderStep1CustomFeatureBullets(activeSlug) {
  // 🛡️ RUNTIME LIFECYCLE GUARD:
  if (typeof window.getPricingConfiguration !== "function") {
    setTimeout(function() { renderStep1CustomFeatureBullets(activeSlug); }, 50);
    return;
  }

  // Pure dynamic variable resolution — No default parameter strings assumed
  const activePlanKey = window.routeActivePlanKey;
  if (!activePlanKey) {
    setTimeout(function() { renderStep1CustomFeatureBullets(activeSlug); }, 50);
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
      // 🟢 INTEGRITY ATTACHMENT GATE:
      const preExistingPlanCard = document.getElementById("step-1-selected-plan-overview");
      if (preExistingPlanCard && preExistingPlanCard.children.length > 0) {
        console.log(`[Lifecycle Sync Pass] Pricing values protected. Visual redraw suppressed for active view: #${activePanelId}`);
        return; // Safe exit: Instantly returns without letting the data loop blank out subsequent screen nodes
      }
    }
  }

  // 🟢 OPTIMIZATION FIX RELOCATED: 
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
// 🎯 DATA LIFESTYLE VALIDATOR: TIMING-INDEPENDENT LIFECYCLE ENFORCER           //
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
            setTimeout(function() { 
                // 🟢 FIXED ARGUMENTS INDEX: Corrected variable routing positions to ensure retry count accumulates 
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
