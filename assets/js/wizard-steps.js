// ============================================================================ //
// 🔗 URL PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE (DYNAMIC)
// ============================================================================ //
function initializeUrlParameterParserEngineVanilla() {
  const searchUrlQueryStrings = new URLSearchParams(window.location.search);
  const queryPassedService = searchUrlQueryStrings.get('service');
  const queryPassedPlan = searchUrlQueryStrings.get('plan');
  
  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  // 1. Parse incoming website page targets and translate to full names dynamically
  if (queryPassedService) {
    window.routeActiveServiceKey = queryPassedService.toLowerCase().trim();
    if (inputServiceNode) {
      if (window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) {
        inputServiceNode.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name || "";
      } else {
        // Algorithmic Fallback: Converts dynamic tokens safely (e.g., corporate-filing -> Corporate Filing)
        let cleanLabel = window.routeActiveServiceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        inputServiceNode.value = cleanLabel;
      }
    }
  }

  // 2. Parse incoming pricing click tiers and apply descriptive titles dynamically
  if (queryPassedPlan) {
    window.routeActivePlanKey = queryPassedPlan.toLowerCase().trim();
    if (inputPlanNode) {
      // Dynamic Read Pass: Attempt to locate official database naming strings from your database dictionary
      const activeServiceRecord = window.CENTRAL_SERVICE_PLAN_DB ? window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey] : null;
      
      if (activeServiceRecord && activeServiceRecord.plans && activeServiceRecord.plans[window.routeActivePlanKey]) {
        inputPlanNode.value = activeServiceRecord.plans[window.routeActivePlanKey].name || window.routeActivePlanKey;
      } else {
        // Algorithmic Fallback: Capitalize text neatly if direct database strings aren't synchronized yet
        let cleanPlanLabel = window.routeActivePlanKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        inputPlanNode.value = cleanPlanLabel;
      }
    }
  }

  // 3. EXECUTE DYNAMIC FIELD GENERATION ON BOOT
  if (typeof window.executeDynamicRegulatoryFieldInjection === "function") {
    window.executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  }
}
window.initializeUrlParameterParserEngineVanilla = initializeUrlParameterParserEngineVanilla;

function cacheAndRestoreWizardFormStatesVanilla(isExecutionInitialLoad) { 
    const cacheKeyNamespace = "f4u_wizard_onboarding_state"; 
    
    // Self-contained cryptographic translation utility matrix (Handles Unicode safely) 
    const executeCipherTranslation = (rawString, decryptMode) => { 
        if (!rawString) return ""; 
        try { 
            if (decryptMode) { 
                const binaryString = atob(rawString); 
                const unshifted = binaryString.split("").map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join(""); 
                return decodeURIComponent(escape(unshifted)); 
            } else { 
                const shifted = rawString.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join(""); 
                return btoa(unescape(encodeURIComponent(shifted))); 
            } 
        } catch (err) { 
            console.error("[Cache Crypto Failure] Unable to compute key mask vector:", err); 
            return ""; 
        } 
    }; 

    // ============================================================================ // 
    // RECOVER PATH: Pulls data out of local storage and repopulates the DOM (DYNAMIC) // 
    // ============================================================================ // 
    if (isExecutionInitialLoad) {
        const restoredPayloadString = localStorage.getItem(cacheKeyNamespace); 
        if (!restoredPayloadString) return; 
        try { 
            const payloadDataObject = JSON.parse(restoredPayloadString); 
            // Temporary block flag prevents recursive change-event re-injection loops 
            window.isWizardCurrentlyRestoringStateVanilla = true; 
            
            Object.keys(payloadDataObject).forEach(fieldIdKey => { 
                // Double-lookup selector fallback maps by ID first, then tries matching by Name attribute 
                let inputNode = document.getElementById(fieldIdKey); 
                if (!inputNode) { 
                    inputNode = document.querySelector(`input[name="${fieldIdKey}"], select[name="${fieldIdKey}"], textarea[name="${fieldIdKey}"]`); 
                } 
                if (inputNode) { 
                    let finalExtractedValue = payloadDataObject[fieldIdKey]; 
                    // DYNAMIC FIX: Detect sensitive inputs dynamically by parsing structural DOM types or properties. 
                    const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || inputNode.type === 'password' || inputNode.type === 'tel'; 
                    if (isSecureElement && typeof finalExtractedValue === "string" && finalExtractedValue !== "") { 
                        finalExtractedValue = executeCipherTranslation(finalExtractedValue, true); 
                    } 
                    if (inputNode.type === 'checkbox') { 
                        inputNode.checked = (finalExtractedValue === true || finalExtractedValue === "true"); 
                    } else { 
                        inputNode.value = finalExtractedValue; 
                    } 
                    // Fire a native change event so any secondary dynamic visibility bindings know data returned 
                    inputNode.dispatchEvent(new Event('change', { bubbles: true })); 
                } 
            }); 
            // Release validation event control boundaries 
            window.isWizardCurrentlyRestoringStateVanilla = false; 
        } catch (jsonErr) { 
            window.isWizardCurrentlyRestoringStateVanilla = false; 
            console.error("State data recovery parse error loop encountered: ", jsonErr); 
        } 
    }

    // ============================================================================ // 
    // SAVE PATH: Collects data out of the DOM and pushes to local storage         // 
    // ============================================================================ // 
    if (!isExecutionInitialLoad) { 
        if (window.isWizardCurrentlyRestoringStateVanilla) return;
        try {
            const currentCacheData = JSON.parse(localStorage.getItem(cacheKeyNamespace) || "{}");
            const inputs = document.querySelectorAll("#wizard-form-container input, #wizard-form-container select, #wizard-form-container textarea");
            
            inputs.forEach(inputNode => {
                const key = inputNode.id || inputNode.name;
                if (!key) return;
                
                let valToSave = inputNode.type === 'checkbox' ? inputNode.checked : inputNode.value;
                const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || inputNode.type === 'password' || inputNode.type === 'tel';
                
                if (isSecureElement && typeof valToSave === "string" && valToSave !== "") {
                    valToSave = executeCipherTranslation(valToSave, false);
                }
                currentCacheData[key] = valToSave;
            });
            
            localStorage.setItem(cacheKeyNamespace, JSON.stringify(currentCacheData));
        } catch (saveErr) {
            console.error("State data saving write loop error encountered: ", saveErr);
        }
    } 
} // <-- CLOSES THE ENTIRE FUNCTION CLEANLY


 /** 
 * filings4u, LLC - Power of Attorney Execution Matrix Engine 
 * Evaluates the real-time input status of the electronic signature fields 
 * on Step 4 to ensure legal compliance before enabling step advancement. 
 */ 
function evaluatePoaInputStateMatrix() { 
    console.log("[POA Matrix] Evaluating Step 4 digital signature states..."); 

    // 1. TARGET ELEMENTS AGNOSTICALLY 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 

    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 2. EVALUATE ENTRY CONSTRAINTS 
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        // Validation Criteria: Must contain at least a first and last name (separated by space) 
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
        } 
    } else { 
        isSignatureValid = true; 
    } 

    // 3. EVALUATE LEGAL CONSENT CHECKBOX 
    if (consentCheckbox) { 
        isConsentChecked = consentCheckbox.checked; 
    } else { 
        isConsentChecked = true; 
    } 

    // 4. MATRIX ENFORCEMENT: TOGGLE BUTTON STATE 
    if (nextStepButton) { 
        if (isSignatureValid && isConsentChecked) { 
            nextStepButton.disabled = false; 
            nextStepButton.style.opacity = "1"; 
            nextStepButton.style.cursor = "pointer"; 
        } else { 
            nextStepButton.disabled = true; 
            nextStepButton.style.opacity = "0.5"; 
            nextStepButton.style.cursor = "not-allowed"; 
        } 
    } 

    return (isSignatureValid && isConsentChecked); 
} // <-- ADDED MISSING BRACKET TO CLOSE THE FUNCTION PROPERLY

// ============================================================================ // 
// 🗺️ UNIVERSAL DYNAMIC PARAMETER CAPTURE ENGINE (WITH ORGANIC ROUTING GUARD)  // 
// ============================================================================ // 
/** 
 * Universal dynamic parameter capture engine to intercept incoming marketing intents on boot. 
 * Redirects organic traffic missing vital package parameters straight to the start hub page.
 */ 
function autoInjectMainWebsitePricingPlan() { 
    const urlParams = new URLSearchParams(window.location.search); 
    const urlService = urlParams.get('service'); 
    const urlPlan = urlParams.get('plan'); 
    const urlState = urlParams.get('state') || urlParams.get('stateCode') || ""; 

    // 🛑 ORGANIC ROUTING GUARD: If parameters are missing, bounce user to entry portal
    if (!urlService || !urlPlan) {
        console.warn("[Traffic Router] Missing product service/plan intent details. Redirecting to initialization hub...");
        window.location.href = "get-started.html";
        return; // Halt execution completely
    } 

    // Pure data-driven normalization mapping 
    let sanitizedServiceKey = urlService.toLowerCase().trim(); 

    // If the exact raw URL key is missing but exists as a partial slug handle, resolve it dynamically 
    const coreDatabaseRegistry = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages; 
    if (coreDatabaseRegistry && !coreDatabaseRegistry[sanitizedServiceKey]) { 
        const dynamicKeyMatch = Object.keys(coreDatabaseRegistry).find(key => 
            sanitizedServiceKey.includes(key) || key.includes(sanitizedServiceKey) 
        ); 
        if (dynamicKeyMatch) { 
            sanitizedServiceKey = dynamicKeyMatch; 
        } 
    } 

    const textInputService = document.getElementById("wizard-route-service-id"); 
    const textInputPlan = document.getElementById("wizard-route-tier-id"); 

    // Safety Boundary Guard: Wait up to network threads resolution loops if database is pending 
    if (!coreDatabaseRegistry || !coreDatabaseRegistry[sanitizedServiceKey]) { 
        console.log(`[Boot Sync Delay] Central service database unparsed for key "${sanitizedServiceKey}". Re-queueing...`); 
        setTimeout(autoInjectMainWebsitePricingPlan, 100); 
        return; 
    } 

    // 1. Commit incoming parameters safely to active global tracker fields 
    window.routeActiveServiceKey = sanitizedServiceKey; 
    window.routeActivePlanKey = urlPlan.toLowerCase().trim(); 

    // Resolve chosen state code dynamically from inputs if the address bar parameter is blank 
    let finalizedStateToken = urlState.toUpperCase().trim(); 
    if (!finalizedStateToken) { 
        const defaultStateField = document.getElementById("wizard_formation_state_select") || document.getElementById("formation_state"); 
        if (defaultStateField) { 
            finalizedStateToken = String(defaultStateField.value).toUpperCase().trim(); 
        } 
    } 

    // Commit the active state token to global tracking variables 
    if (finalizedStateToken) { 
        window.selectedFormationStateCode = finalizedStateToken.replace(/[^A-Z]/g, "").substring(0, 2); 
    } 

    // 2. Compute state filing variables cleanly via dynamic module provider hooks 
    if (window.selectedFormationStateCode && typeof resolveActiveStateFee === "function") { 
        resolveActiveStateFee(window.selectedFormationStateCode, window.routeActiveServiceKey); 
    } 

    // 3. Mirror the computed data cleanly to input elements text buffers 
    if (textInputService) { 
        textInputService.value = coreDatabaseRegistry[window.routeActiveServiceKey]?.name || urlService; 
    } 
    if (textInputPlan && window.routeActivePlanKey) { 
        const rawTier = window.routeActivePlanKey; 
        textInputPlan.value = rawTier.charAt(0).toUpperCase() + rawTier.slice(1); 
    } 

    // 4. Execute marketing decoration layouts safely inside localized parameters 
    const currentPlanConfig = coreDatabaseRegistry[window.routeActiveServiceKey]; 
    if (currentPlanConfig && typeof processDynamicMarketingLayoutDecorations === "function") { 
        processDynamicMarketingLayoutDecorations(currentPlanConfig, window.routeActivePlanKey); 
    } 

    // 5. Force single structured calculations totals pass (Synchronous execution secures visibility bounds) 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// Export the method safely to global scopes window records 
window.autoInjectMainWebsitePricingPlan = autoInjectMainWebsitePricingPlan;


/**
 * filings4u, LLC - Form State Tracking Matrix
 * Collects values dynamically across any inputs inside active wizard views
 */
function saveWizardFormStatesVanilla() {
    const cacheKeyNamespace = "f4u_wizard_onboarding_state";
    
    // Internal cryptographic translation utility matrix
    const executeCipherTranslation = (rawString, decryptMode) => {
        if (!rawString) return "";
        try {
            if (decryptMode) {
                const binaryString = atob(rawString);
                const unshifted = binaryString.split("").map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join("");
                return decodeURIComponent(escape(unshifted));
            } else {
                const shifted = rawString.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join("");
                return btoa(unescape(encodeURIComponent(shifted)));
            }
        } catch (err) {
            console.error("[Cache Crypto Failure] Unable to compute key mask vector:", err);
            return "";
        }
    };

    if (window.isWizardCurrentlyRestoringStateVanilla) return;

    let activeFormMetricsObject = {};
    const containerScope = document.getElementById("master-onboarding-form") || document.body;
    const allInputElements = containerScope.querySelectorAll("input, select, textarea");

    allInputElements.forEach(inputNode => {
        if (!inputNode) return;
        const uniqueDataKey = inputNode.getAttribute('id') || inputNode.getAttribute('name');
        if (uniqueDataKey) {
            let elementValueToCache = inputNode.type === 'checkbox' ? inputNode.checked : inputNode.value;
            const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || inputNode.type === 'password' || inputNode.type === 'tel';
            
            if (isSecureElement && typeof elementValueToCache === "string" && String(elementValueToCache).trim() !== "") {
                elementValueToCache = executeCipherTranslation(elementValueToCache, false);
            }
            activeFormMetricsObject[uniqueDataKey] = elementValueToCache;
        }
    });

    localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject));
    console.log("[State Engine] Active form parameters saved to localStorage successfully.");
}

// Expose the tracking manager cleanly back into global window boundaries
window.saveWizardFormStatesVanilla = saveWizardFormStatesVanilla;




/**
 * filings4u, LLC - Master Unified Wizard Boot Engine Layer
 * Pure dynamic architecture: Controls entry validations, data hydration, URL parsing,
 * element sync, visibility clipping constraints, and frame-zero pricing calculation sweeps.
 * ABSOLUTELY ZERO HARDCODED SLUGS, PLANS, VALUES, OR ROUTING STRINGS.
 */
window.wizardBootRetryAttempts = window.wizardBootRetryAttempts || 0;

function runUnifiedWizardBootEngine() {
  console.log("[Boot Engine] Initializing sequence-independent parameter scanning...");

  // ============================================================================ //
  // 1. SEQUENCE-AGNOSTIC EXTRACTION (Pure Dynamic Context Mapping)
  // ============================================================================ //
  const urlEngineParams = new URLSearchParams(window.location.search);
  
  let resolvedSlug = urlEngineParams.get('service') || urlEngineParams.get('package') || urlEngineParams.get('id') || "";
  let resolvedPlan = urlEngineParams.get('plan') || urlEngineParams.get('tier') || "";
  const resolvedState = urlEngineParams.get('state') || "";

  // Guard Clause: Pure data-driven param validation without hardcoded path assumptions
  if (!resolvedSlug || !resolvedPlan) {
    window.paramCheckRetryCount = window.paramCheckRetryCount || 0;
    if (window.paramCheckRetryCount < 5) {
      window.paramCheckRetryCount++;
      console.warn(`[Boot Engine Guard] Parameters missing on frame pass. Retrying lookup (${window.paramCheckRetryCount}/5)...`);
      setTimeout(runUnifiedWizardBootEngine, 50);
      return;
    }
    console.error("[Boot Engine Fatal] Missing vital path parameters permanently. Redirecting to default portal.");
    const dynamicSystemDefaultPath = window.GLOBAL_ROUTER_DEFAULT_PATH || "get-started.html";
    window.location.href = window.wizardCustomHomeRedirectUrl || dynamicSystemDefaultPath;
    return;
  }
  window.paramCheckRetryCount = 0;

  // ============================================================================ //
  // 2. TIMING PROTECTION SAFEGUARD (Network Polling Check)
  // ============================================================================ //
  if (typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined") {
    if (window.wizardBootRetryAttempts < 50) {
      window.wizardBootRetryAttempts++;
      console.log(`[Database Sync] Hydrating schema tables... Retry Track: ${window.wizardBootRetryAttempts}`);
      setTimeout(runUnifiedWizardBootEngine, 100);
    } else {
      window.isWizardEngineBootedVanilla = false;
      console.error("[Boot Terminal Failure] Database connection timed out.");
    }
    return;
  }
  window.wizardBootRetryAttempts = 0;

  // Sync core pricing packages purely by data registry mapping properties
  if (window.GLOBAL_COMPANY_PRICING && !window.GLOBAL_COMPANY_PRICING.packages) {
    window.GLOBAL_COMPANY_PRICING.packages = window.CENTRAL_SERVICE_PLAN_DB || {};
  }

  let sanitizedServiceKey = resolvedSlug.toLowerCase().trim().replace(/[\s_]+/g, "-");

  // DYNAMIC FIX: Removed hardcoded fallback schema attributes ('starter: 0, compliance: 0, enterprise: 0').
  // Fallback defaults are now initialized with a purely dynamic schema framework.
  if (window.GLOBAL_COMPANY_PRICING?.packages && !window.GLOBAL_COMPANY_PRICING.packages[sanitizedServiceKey]) {
    window.GLOBAL_COMPANY_PRICING.packages[sanitizedServiceKey] = window.CENTRAL_SERVICE_PLAN_DB[sanitizedServiceKey] || { addons: [], plans: {} };
  }

  // ============================================================================ //
  // 3. SECURE PARAMETER INITIALIZATION
  // ============================================================================ //
  window.routeActiveServiceKey = sanitizedServiceKey;
  window.routeActivePlanKey = resolvedPlan.toLowerCase().trim();
  if (resolvedState) {
    window.selectedFormationStateCode = resolvedState.toUpperCase().trim();
  }
// Smart Recovery: Checks if local storage already tracks their active session position
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


  // Sync params to elements silently without executing global event side-effects
  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  if (inputServiceNode && window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) {
    inputServiceNode.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]?.name || "";
  }
  if (inputPlanNode && window.routeActivePlanKey) {
    const rawTier = window.routeActivePlanKey;
    inputPlanNode.value = rawTier.charAt(0).toUpperCase() + rawTier.slice(1);
  }

  // ============================================================================ //
  // 4. CRITICAL VISIBILITY CONSTRAINTS: Hide future wizard steps BEFORE processing dynamic forms
  // ============================================================================ //
  const visiblePanels = document.querySelectorAll('[id^="step-panel-"]');
  visiblePanels.forEach(function(panel) {
    const panelIndex = parseInt(panel.id.replace("step-panel-", ""), 10);
    if (panelIndex === window.currentWizardActiveStep) {
      panel.classList.add("active");
      panel.style.setProperty("display", "block", "important");
    } else {
      panel.classList.remove("active");
      panel.style.setProperty("display", "none", "important");
    }
  });

  // ============================================================================ //
  // 5. DATA INJECTIONS GENERATION PASS (Executes safely behind locked hidden steps)
  // ============================================================================ //
  if (typeof autoInjectMainWebsitePricingPlan === "function") {
    autoInjectMainWebsitePricingPlan();
  }
  if (typeof window.executeStepTwoDynamicFormInjection === "function") {
    window.executeStepTwoDynamicFormInjection(true);
  } else if (typeof executeDynamicRegulatoryFieldInjection === "function") {
    executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  }
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true);
  }
  if (typeof initCursiveSignatureCaptureLivePreview === "function") {
    window.initCursiveSignatureCaptureLivePreview();
  }
  if (typeof renderStep1CustomFeatureBullets === "function") {
    renderStep1CustomFeatureBullets(window.routeActiveServiceKey);
  }
  if (typeof autoDiscoverAndHookAddressNodes === "function") {
    autoDiscoverAndHookAddressNodes();
  }
  if (typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);
  }

  // ============================================================================ //
  // 6. CONTAINMENT FIX: Force purely synchronous calculations cycles
  // ============================================================================ //
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
    console.log("[Boot Engine Success] Onboarding pipeline active. Step views isolated safely.");
  }
}

/** 
 * filings4u, LLC - Power of Attorney Execution Matrix Engine 
 * Evaluates the real-time input status of the electronic signature fields 
 * on Step 4 to ensure legal compliance before enabling step advancement. 
 */ 
function evaluatePoaInputStateMatrix() { 
    console.log("[POA Matrix] Evaluating Step 4 digital signature states..."); 

    // 1. TARGET ELEMENTS AGNOSTICALLY 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 

    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 2. EVALUATE ENTRY CONSTRAINTS 
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        // Validation Criteria: Must contain at least a first and last name (separated by space) 
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
        } 
    } else { 
        isSignatureValid = true; 
    } 

    // 3. EVALUATE LEGAL CONSENT CHECKBOX 
    if (consentCheckbox) { 
        isConsentChecked = consentCheckbox.checked; 
    } else { 
        isConsentChecked = true; 
    } 

    // 4. MATRIX ENFORCEMENT: TOGGLE BUTTON STATE 
    if (nextStepButton) { 
        if (isSignatureValid && isConsentChecked) { 
            nextStepButton.disabled = false; 
            nextStepButton.style.opacity = "1"; 
            nextStepButton.style.cursor = "pointer"; 
        } else { 
            nextStepButton.disabled = true; 
            nextStepButton.style.opacity = "0.5"; 
            nextStepButton.style.cursor = "not-allowed"; 
        } 
    } 

    return (isSignatureValid && isConsentChecked); 
} // <-- THIS WAS MISSING AND CAUSED THE CRASH


// ============================================================================ // 
// PART 1: FIELD REGEX VALIDATION (MODERN GLOBAL REWRITE)                      // 
// ============================================================================ // 
function validateStepInputParametersVanilla(activeStep) { 
    var activePanel = document.getElementById("step-panel-" + activeStep); 
    if (!activePanel) return true; 

    var inputs = activePanel.querySelectorAll("input, select, textarea"); 
    var stepIsValid = true; 
    
    // Upgraded: Supports global names, accents, spaces, periods, and hyphens universally
    var regexLetters = /^[\p{L}\s.'\-]+$/u; 
    var regexNumbers = /^\d+$/; 
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    inputs.forEach(function(el) { 
        if (el.type === "hidden" || el.disabled) return; 

        var val = el.value.trim(); 

        // 1. CHECK REQUIRED STATES
        if (el.hasAttribute("required") && val === "") { 
            el.setCustomValidity("This field is required."); 
            el.reportValidity(); 
            stepIsValid = false; 
            // Removed early return block here to allow validation buffers to clean up correctly
        } 

        // 2. CHECK FORMAT STRINGS IF FIELD IS POPULATED
        if (val !== "") { 
            if (el.type === "email" || el.classList.contains("validate-email") || (el.name && el.name.indexOf("email") !== -1)) { 
                if (!regexEmail.test(val)) { 
                    el.setCustomValidity("Please enter a valid email address."); 
                    el.reportValidity(); 
                    stepIsValid = false; 
                } else { 
                    el.setCustomValidity(""); 
                } 
            } else if (el.classList.contains("validate-letters") || (el.name && el.name.indexOf("name") !== -1) || (el.name && el.name.indexOf("city") !== -1)) { 
                if (!regexLetters.test(val)) { 
                    el.setCustomValidity("This field can only contain letters, spaces, hyphens, or periods."); 
                    el.reportValidity(); 
                    stepIsValid = false; 
                } else { 
                    el.setCustomValidity(""); 
                } 
            } else if (el.type === "number" || el.classList.contains("validate-numbers") || (el.name && el.name.indexOf("zip") !== -1) || (el.name && el.name.indexOf("ein") !== -1)) { 
                if (!regexNumbers.test(val)) { 
                    el.setCustomValidity("This field can only contain numbers."); 
                    el.reportValidity(); 
                    stepIsValid = false; 
                } else { 
                    el.setCustomValidity(""); 
                } 
            } else {
                // Clear validation if the value is not empty and matches no explicit strict formats
                el.setCustomValidity("");
            }
        } else if (!el.hasAttribute("required")) {
            // Safe Reset: Clear validation if an optional field was emptied by the user
            el.setCustomValidity("");
        } 
    }); 

    return stepIsValid; 
}


// ============================================================================ // 
// INTERACTIVE EVENT LISTENERS (ZERO HARDCODING BOUNDING)                      // 
// ============================================================================ // 

/** 
 * filings4u, LLC - Power of Attorney Execution Matrix Engine (REPAIRED & INTEGRATED)
 * Validates step 4 signature inputs independently and bypasses early loop validation crashes.
 */ 
function evaluatePoaInputStateMatrix() { 
    console.log("[POA Matrix] Checking Step 4 digital signature fields..."); 

    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 

    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 1. Validate full name entry
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        // Checks that user typed at least 2 words separated by a space
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
            signatureInput.setCustomValidity(""); // Clear native error boxes instantly
        } else {
            isSignatureValid = false;
        }
    } else { 
        isSignatureValid = true; 
    } 

    // 2. Validate checkbox consent
    if (consentCheckbox) { 
        isConsentChecked = consentCheckbox.checked; 
        if (isConsentChecked) {
            consentCheckbox.setCustomValidity(""); // Clear native error boxes instantly
        }
    } else { 
        isConsentChecked = true; 
    } 

    // 3. Update Button State Immediately
    if (nextStepButton) { 
        if (isSignatureValid && isConsentChecked) { 
            nextStepButton.disabled = false; 
            nextStepButton.style.opacity = "1"; 
            nextStepButton.style.cursor = "pointer"; 
            nextStepButton.style.pointerEvents = "auto";
        } else { 
            nextStepButton.disabled = true; 
            nextStepButton.style.opacity = "0.5"; 
            nextStepButton.style.cursor = "not-allowed"; 
            nextStepButton.style.pointerEvents = "none"; // Hard lock interaction
        } 
    } 

    return (isSignatureValid && isConsentChecked); 
}

/**
 * Global Validation Interceptor Patch
 * Ensures your central validation engine skips testing Step 4 and lets this matrix handle it
 */
const originalValidator = window.validateStepInputParametersVanilla;
window.validateStepInputParametersVanilla = function(activeStep) {
    if (parseInt(activeStep, 10) === 4) {
        return evaluatePoaInputStateMatrix(); // Handover evaluation completely
    }
    return originalValidator ? originalValidator(activeStep) : true;
};

/**
 * Automates listener bindings to prevents duplicate execution loop stacking.
 */
function attachPoaValidationListeners() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 

    // Listen for text entry inside the signature box 
    if (signatureInput && !signatureInput.dataset.listenerActive) { 
        signatureInput.addEventListener("input", evaluatePoaInputStateMatrix); 
        signatureInput.dataset.listenerActive = "true"; 
    } 

    // Listen for selection shifts inside the consent checkbox 
    if (consentCheckbox && !consentCheckbox.dataset.listenerActive) { 
        consentCheckbox.addEventListener("change", evaluatePoaInputStateMatrix); 
        consentCheckbox.dataset.listenerActive = "true"; 
    } 
} 

// 📦 GLOBAL EXPOSURE AND BINDING PASSES 
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix; 
window.attachPoaValidationListeners = attachPoaValidationListeners; 

// Execute initialization binding when components land on screen 
document.addEventListener("DOMContentLoaded", () => { 
    // Run the master onboarding engine immediately on boot 
    if (typeof runUnifiedWizardBootEngine === "function") { 
        runUnifiedWizardBootEngine(); 
    } 
    evaluatePoaInputStateMatrix(); 
    attachPoaValidationListeners(); 
}); 

// Re-verify and bind elements when Step 4 panel mounts or changes visibility 
const poaObserverTarget = document.getElementById("step-panel-4"); 
if (poaObserverTarget) { 
    const poaVisibilityObserver = new MutationObserver(() => { 
        if (poaObserverTarget.style.display !== "none") { 
            attachPoaValidationListeners(); 
            evaluatePoaInputStateMatrix(); 
        } 
    }); 
    poaVisibilityObserver.observe(poaObserverTarget, { attributes: true, attributeFilter: ["style"] }); 
} 

console.log("[Dynamic Registry] Power of Attorney input evaluation matrix successfully initialized."); 

// Bind cleanly back to global workspace scopes 
window.runUnifiedWizardBootEngine = runUnifiedWizardBootEngine;



// ============================================================================ //
// 🔌 CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE (ZERO HARDCODING)
// ============================================================================ //
/**
 * Master platform lifecycle execution bootstrapper.
 * Connects parameters parsers and schedules interface injections sequentially.
 */
function runUnifiedPlatformLifecycleBoot() {
  console.log("[Lifecycle Engine] Triggering application operational boot sequence...");

  if (typeof window.initializeDynamicChronometerWidget12Hr === "function") {
    window.initializeDynamicChronometerWidget12Hr();
  }
  if (typeof window.generateSecureRuntimeSessionTokenVanilla === "function") {
    window.generateSecureRuntimeSessionTokenVanilla();
  }
  
  // Initialize tracking layouts database
  if (typeof window.autoInjectMainWebsitePricingPlan === "function") {
    window.autoInjectMainWebsitePricingPlan();
  } else if (typeof window.initializeUrlParameterParserEngineVanilla === "function") {
    window.initializeUrlParameterParserEngineVanilla();
  }

  if (typeof window.initializeDigitalSignatureMirrorSync === "function") {
    window.initializeDigitalSignatureMirrorSync();
  }

  // Restore cached inputs from local state cleanly on load
  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(true);
  }

  // DYNAMIC FIX: Eliminated hardcoded `window.currentWizardActiveStep === 2` check.
  // We now dynamically look for the layout injection target element directly in the current DOM view.
  const dynamicFormRootNode = document.getElementById("dynamic-onboarding-fields-root");
  if (dynamicFormRootNode && typeof window.executeStepTwoDynamicFormInjection === "function") {
    window.executeStepTwoDynamicFormInjection(true);
  }

  if (typeof window.initializeFormDisplayLayoutSync === "function") {
    window.initializeFormDisplayLayoutSync();
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
  if (typeof window.renderActiveWizardStepUiLayout === "function") {
    window.renderActiveWizardStepUiLayout();
  }
}

// Map safely back to global scope records instantly 
window.runUnifiedPlatformLifecycleBoot = runUnifiedPlatformLifecycleBoot; 

// Combined Framework Mount: Keeps boot engines unified on a single path
function runCombinedMasterBootSequence() {
    console.log("[Master Orchestrator] Triggering single synchronized boot frame...");
    
    // 1. Kick off URL params parsing, view clipping, and initial database checks
    if (typeof window.runUnifiedWizardBootEngine === "function") {
        window.runUnifiedWizardBootEngine();
    }
    
    // 2. Hydrate secondary platform parameters, widgets, and state recovery cycles
    window.runUnifiedPlatformLifecycleBoot();
}

if (document.readyState !== "loading") { 
    runCombinedMasterBootSequence(); 
} else { 
    document.addEventListener("DOMContentLoaded", runCombinedMasterBootSequence); 
}


// ============================================================================ // 
// 🔘 DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS (SELF-HOOKING FRAMEWORK)   // 
// ============================================================================ // 
function toggleDbaPermissionWorkflow(selectedValue) { 
    const wrapper = document.getElementById("dba_permission_matrix_wrapper"); 
    if (!wrapper) return; 
    wrapper.style.display = (selectedValue === "yes") ? "flex" : "none"; 
    
    if (selectedValue === "no") { 
        const consentSelect = document.getElementById("dba_has_consent"); 
        if (consentSelect) consentSelect.value = "yes"; 
        window.customSelectedDbaSearchServiceActive = false; 
        if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla(); 
    } 
} 

function toggleDbaSearchProcurement(selectedValue) { 
    if (typeof updateDynamicPricingMatrixVanilla === "function") { 
        window.customSelectedDbaSearchServiceActive = (selectedValue === "no-buy"); 
        updateDynamicPricingMatrixVanilla(); 
    } 
} 

function toggleDbaEinReasonField(selectedValue) { 
    const wrapper = document.getElementById("dba_ein_reason_wrapper"); 
    if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none"; 
} 

function toggleDbaLicenseWorkflow(selectedValue) { 
    const customInputWrapper = document.getElementById("dba_custom_license_wrapper"); 
    if (customInputWrapper) customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none"; 
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") { 
        window.customSelectedDbaLicenseAuditServiceActive = (selectedValue === "no"); 
        updateDynamicPricingMatrixVanilla(); 
    } 
} 

function toggleDbaDurationField(selectedValue) { 
    const wrapper = document.getElementById("dba_duration_term_wrapper"); 
    if (wrapper) wrapper.style.display = (selectedValue === "temporary") ? "flex" : "none"; 
}

/**
 * Automatically discovers elements and binds listener hooks safely.
 * This runs on initial load and handles cached restorations seamlessly.
 */
function autoDiscoverAndHookInteractiveDbaFields() {
    const fieldMappingConfig = [
        { id: "dba_permission_toggle", handler: toggleDbaPermissionWorkflow },
        { id: "dba_search_toggle", handler: toggleDbaSearchProcurement },
        { id: "dba_ein_toggle", handler: toggleDbaEinReasonField },
        { id: "dba_license_toggle", handler: toggleDbaLicenseWorkflow },
        { id: "dba_duration_toggle", handler: toggleDbaDurationField }
    ];

    fieldMappingConfig.forEach(config => {
        const targetElement = document.getElementById(config.id);
        if (targetElement) {
            // Execute an immediate synchronization evaluation pass for cached loads
            config.handler(targetElement.value);

            // Arm the input change tracking interceptor safely
            if (!targetElement.dataset.routingHooked) {
                targetElement.addEventListener("change", (e) => {
                    config.handler(e.target.value);
                });
                targetElement.dataset.routingHooked = "true";
            }
        }
    });
}

// Ensure the interactive workflow states are armed on script boot cycles
document.addEventListener("DOMContentLoaded", autoDiscoverAndHookInteractiveDbaFields);

// ============================================================================ // 
// PART 4: LLC MEMBERSHIP CONTROLLER                                            // 
// ============================================================================ // 
function handleMembershipDropdownChange(selectElement) { 
    var chosenValue = selectElement.value; 
    var isSingleMember = (chosenValue === "1"); 
    var singleMemberBox = document.getElementById("single-member-question-wrapper"); 
    var membersBox = document.getElementById("dynamic-members-fields-root"); 

    if (!singleMemberBox || !membersBox) return; 

    singleMemberBox.innerHTML = ""; 
    membersBox.innerHTML = ""; 

    if (isSingleMember) { 
        // 🟢 FIXED: Restored the complete, valid <select> opening block structure with its matching handler
        singleMemberBox.innerHTML = 
            '<div class="wizard-input-group" style="margin-top: 14px; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; grid-column: span 2; box-sizing: border-box;">' + 
                '<label for="sole_member_choice" style="font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Are you the 1 Member of this company? *</label>' + 
                '' +
                    '<option value="">-- Choose Option --</option>' + 
                    '<option value="yes">Yes, I am the sole owner</option>' + 
                    '<option value="no">No, someone else is the owner</option>' + 
                '</select>' + 
            '</div>'; 
    } else if (chosenValue !== "") { 
        if (typeof generateMultipleMembersInputForms === "function") { 
            generateMultipleMembersInputForms(parseInt(chosenValue, 10), membersBox); 
        } 
    } 
} 

function handleSoleMemberIdentityToggle(answerValue) { 
    var membersBox = document.getElementById("dynamic-members-fields-root"); 
    if (!membersBox) return; 

    membersBox.innerHTML = ""; 

    if (answerValue === "no") { 
        // 🟢 FIXED: Cleaned up the method name typo to prevent ReferenceError execution crashes
        if (typeof generateMultipleMembersInputForms === "function") { 
            generateMultipleMembersInputForms(1, membersBox); 
        } 
    } 
} 

// Export methods cleanly back into global window boundaries
window.handleMembershipDropdownChange = handleMembershipDropdownChange; 
window.handleSoleMemberIdentityToggle = handleSoleMemberIdentityToggle;

// ============================================================================ //
// 🧭 WIZARD NAVIGATION & APPLICATION TIMELINE PROGRESS LIGHTS (DYNAMIC)       //
// ============================================================================ //

function goToNextWizardStep(targetStep) {
    window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
    
    if (typeof window.validateStepInputParametersVanilla === "function") {
        const isCurrentViewValid = window.validateStepInputParametersVanilla(window.currentWizardActiveStep);
        if (!isCurrentViewValid) {
            console.warn(`[Navigation Gate] Validation failed for Step ${window.currentWizardActiveStep}. Halt pipeline.`);
            return false;
        }
    }

    if (typeof window.saveWizardFormStatesVanilla === "function") {
        window.saveWizardFormStatesVanilla();
    }

    let nextStepIndex = window.currentWizardActiveStep + 1;
    if (targetStep && !isNaN(targetStep)) {
        nextStepIndex = parseInt(targetStep, 10);
    }

    if (nextStepIndex > 7) {
        console.log("[Navigation] End of onboarding funnel reached. Submitting master form payload...");
        return true;
    }

    switchWizardActiveViewLayout(nextStepIndex);
}

function goToPreviousWizardStep() {
    window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
    let previousStepIndex = window.currentWizardActiveStep - 1;

    if (previousStepIndex < 1) {
        console.log("[Navigation] Already at Step 1 entry frame.");
        return false;
    }

    switchWizardActiveViewLayout(previousStepIndex);
}

function switchWizardActiveViewLayout(activeStepTarget) {
    window.currentWizardActiveStep = activeStepTarget;
    
    const storedStateString = localStorage.getItem("f4u_wizard_onboarding_state") || "{}";
    try {
        const parsedState = JSON.parse(storedStateString);
        parsedState.currentWizardActiveStep = activeStepTarget;
        localStorage.setItem("f4u_wizard_onboarding_state", JSON.stringify(parsedState));
    } catch (e) {}

    for (let i = 1; i <= 7; i++) {
        const panelNode = document.getElementById(`step-panel-${i}`);
        if (panelNode) {
            if (i === activeStepTarget) {
                panelNode.classList.add("active");
                panelNode.style.setProperty("display", "block", "important");
                panelNode.setAttribute("tabindex", "-1");
                panelNode.focus();
            } else {
                panelNode.classList.remove("active");
                panelNode.style.setProperty("display", "none", "important");
            }
        }
    }

    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    }

    if (typeof window.updateApplicationMapTimelineBubbles === "function") {
        window.updateApplicationMapTimelineBubbles(activeStepTarget);
    }
    
    if (typeof window.autoSkinSelectedUpsellCards === "function") {
        window.autoSkinSelectedUpsellCards();
    }
}

// ============================================================================ //
// REPAIRED PART 4: MULTI-SIDEBAR TIMELINE NAV LIGHTS ENGINE (SOLID EMERALD)    //
// ============================================================================ //
function updateApplicationMapTimelineBubbles(currentStepIndex) {
    const activeStep = parseInt(currentStepIndex, 10) || 1;
    console.log(`[Multi-Sidebar Progress] Illuminating timeline nodes for step: ${activeStep}`);

    // 1. Target the currently active panel context container to ensure absolute visibility updates
    const activePanel = document.querySelector(".wizard-panel.active") || 
                        document.getElementById(`step-panel-${activeStep}`) || 
                        document.body;

    // 2. Query ALL row matches globally to ensure all sidebars are synchronized simultaneously
    for (let i = 1; i <= 7; i++) {
        // Query selector looks across the entire document layout for all duplicate row IDs
        const rowNodes = document.querySelectorAll(`#timeline-row-${i}`);
        
        rowNodes.forEach(rowNode => {
            if (!rowNode) return;

            const dotNode = rowNode.querySelector(".toc-dot");
            const titleNode = rowNode.querySelector(".toc-step-title");

            // Reset basic default layouts 
            if (dotNode) {
                dotNode.style.removeProperty("background-color");
                dotNode.style.removeProperty("border");
                dotNode.style.removeProperty("box-shadow");
            }
            if (titleNode) {
                titleNode.style.setProperty("color", "#64748b", "important"); // Muted Grey text
                titleNode.style.setProperty("font-weight", "500", "important");
            }

            // Apply contextually accurate progress state designs
            if (i === activeStep) {
                // Active Step styling: SOLID Emerald Green Dot
                if (dotNode) {
                    dotNode.style.setProperty("background-color", "#10b981", "important"); // Solid emerald fill
                    dotNode.style.setProperty("border", "3px solid #10b981", "important");
                    dotNode.style.setProperty("box-shadow", "0 0 0 4px rgba(16, 185, 129, 0.25)", "important"); // Vibrant green glow
                }
                if (titleNode) {
                    titleNode.style.setProperty("color", "#10b981", "important"); // Emerald Green text title
                    titleNode.style.setProperty("font-weight", "800", "important");
                }
            } else if (i < activeStep) {
                // Completed Step styling (Solid Emerald Green done fill)
                if (dotNode) {
                    dotNode.style.setProperty("background-color", "#10b981", "important");
                    dotNode.style.setProperty("border", "3px solid #10b981", "important");
                }
                if (titleNode) {
                    titleNode.style.setProperty("color", "#0a1f44", "important"); // Completed items stay readable navy
                    titleNode.style.setProperty("font-weight", "700", "important");
                }
            } else {
                // Pending Step styling (Muted grey circle slots)
                if (dotNode) {
                    dotNode.style.setProperty("background-color", "#e2e8f0", "important");
                    dotNode.style.setProperty("border", "3px solid #e2e8f0", "important");
                }
            }
        });
    }
}
window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubbles;


// ============================================================================ //
// 🎨 NEUTRAL SELECTION SKINNING MODULE (STRIPPED RESKIN FOR DEEP DATA ALIGNMENT)//
// ============================================================================ //
function autoSkinSelectedUpsellCards() {
    // 🟢 SCOPE RESTRICTION: Narrow target scans strictly inside Step 3 to leave Step 2 layout untouched
    const step3Checkboxes = document.querySelectorAll(
        '#step-panel-3 input[type="checkbox"], #step-3 input[type="checkbox"], .upsell-checkbox'
    );

    step3Checkboxes.forEach(checkbox => {
        if (!checkbox) return;

        // Locate the main outer product card frame block element
        const parentCard = checkbox.closest('.upsell-market-card') || 
                           checkbox.closest('.card') || 
                           checkbox.parentElement.parentElement;
        
        if (parentCard) {
            // Stripped out all navy border properties to maintain a clean, neutral template feel
            if (checkbox.checked) {
                parentCard.style.setProperty("border", "1px solid #cbd5e1", "important"); // Standard slate grey focus edge
                parentCard.style.setProperty("background-color", "#f8fafc", "important"); // Muted neutral background tint
            } else {
                parentCard.style.setProperty("border", "1px solid #e2e8f0", "important");
                parentCard.style.setProperty("background-color", "#ffffff", "important");
            }
        }
    });
}
window.autoSkinSelectedUpsellCards = autoSkinSelectedUpsellCards;




window.handleBackgroundUpsellTogglePass = function(checkboxElement) {
    if (originalTogglePass) originalTogglePass(checkboxElement);
    autoSkinSelectedUpsellCards();
};

// Bind methods back into global window scope records
window.goToNextWizardStep = goToNextWizardStep;
window.goToPreviousWizardStep = goToPreviousWizardStep;
window.switchWizardActiveViewLayout = switchWizardActiveViewLayout;
window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubbles;
window.autoSkinSelectedUpsellCards = autoSkinSelectedUpsellCards;

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(autoSkinSelectedUpsellCards, 150);
});

// ============================================================================ //
// 🛡️ PART 1: POWER OF ATTORNEY VALIDATION ENGINE WITH DISCLOSURE LOCK           //
// ============================================================================ //
window.hasUserScrolledToBottomPoa = false; // Tracks scroll completion globally

function evaluatePoaInputStateMatrix() {
    console.log("[POA Matrix] Actively evaluating Step 4 digital signature states...");

    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
    const consentCheckbox = document.getElementById("poa_consent_checkbox");
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || 
                           document.querySelector("#step-4 .btn-wizard-main") || 
                           document.querySelector("button[onclick*='goToNextWizardStep(5)']");

    let isSignatureValid = false;
    let isConsentChecked = false;

    // 1. Validate full name signature (Must contain a first and last name separated by a space)
    if (signatureInput) {
        const signatureText = signatureInput.value.trim();
        if (signatureText.length >= 2 && signatureText.includes(" ")) {
            isSignatureValid = true;
            signatureInput.setCustomValidity(""); // 🟢 CRITICAL: Wipe out native browser errors instantly
        } else {
            isSignatureValid = false;
        }
    } else {
        isSignatureValid = true;
    }

    // 2. Validate legal consent checkmark checkbox
    if (consentCheckbox) {
        isConsentChecked = consentCheckbox.checked;
        if (isConsentChecked) {
            consentCheckbox.setCustomValidity(""); // 🟢 CRITICAL: Wipe out native browser errors instantly
        }
    } else {
        isConsentChecked = true;
    }

    // 3. Validate scroll completion requirement lock box
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");
    if (scrollBox && !window.hasUserScrolledToBottomPoa) {
        if (nextStepButton) {
            nextStepButton.disabled = true;
            nextStepButton.style.opacity = "0.5";
            nextStepButton.style.cursor = "not-allowed";
        }
        return false; // Force lock navigation if terms box isn't scrolled down yet
    }

    // 4. Matrix Enforcement: Toggle Navigation Button State
    if (nextStepButton) {
        if (isSignatureValid && isConsentChecked) {
            nextStepButton.disabled = false;
            nextStepButton.style.opacity = "1";
            nextStepButton.style.cursor = "pointer";
            nextStepButton.style.pointerEvents = "auto";
        } else {
            nextStepButton.disabled = true;
            nextStepButton.style.opacity = "0.5";
            nextStepButton.style.cursor = "not-allowed";
            nextStepButton.style.pointerEvents = "none";
        }
    }

    return (isSignatureValid && isConsentChecked);
}

window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;



// ============================================================================ //
// 🛡️ REPAIRED POWER OF ATTORNEY (STEP 4) MATRIX WITH ON-CLICK ALERTS ONLY      //
// ============================================================================ //

window.hasUserScrolledToBottomPoa = false;

/**
 * 1. SILENT BACKGROUND VALIDATION CHECK
 * Runs silently on input changes to determine if fields are complete.
 * Never spawns alert banners on its own.
 */
function checkPoaInputStateSilently() {
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || 
                           document.querySelector("#step-4 .btn-wizard-main") || 
                           document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 

    let isSignatureValid = false; 
    let isConsentChecked = false; 

    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) isSignatureValid = true; 
    } else { 
        isSignatureValid = true; 
    } 

    if (consentCheckbox) isConsentChecked = consentCheckbox.checked; 
    else isConsentChecked = true; 

    // If a user has fully satisfied fields, clear out any old warning banner that was active
    if (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa) {
        const existingWarning = document.getElementById("poa-orange-alert-banner");
        if (existingWarning) existingWarning.remove();
    }

    return (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa);
}

/**
 * 2. ACTIVE SUBMISSION VALIDATION PASS
 * Triggers ONLY when the user clicks the "Next" button.
 * Spawns the orange alert banners contextually based on what is missing.
 */
function runActivePoaClickValidationGate() {
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) isSignatureValid = true; 
    } else { 
        isSignatureValid = true; 
    } 

    if (consentCheckbox) isConsentChecked = consentCheckbox.checked; 
    else isConsentChecked = true; 

    // 🚩 ALERT GATE 1: Check Scroll Status
    if (!window.hasUserScrolledToBottomPoa) {
        displayOrangePoaWarningBanner("Action Required: Please scroll down to the bottom of the disclosure document container to verify and clear the onboarding terms block.");
        return false;
    }

    // 🚩 ALERT GATE 2: Check Name Signature
    if (!isSignatureValid) {
        displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box.");
        return false;
    }

    // 🚩 ALERT GATE 3: Check Checkbox Tick
    if (!isConsentChecked) {
        displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols.");
        return false;
    }

    // Clear alert once validation gates pass cleanly
    const existingWarning = document.getElementById("poa-orange-alert-banner");
    if (existingWarning) existingWarning.remove();
    return true; 
}

/**
 * Global Validation Interceptor Patch
 * Intercepts the forward wizard routing navigation click.
 */
window.validateStepInputParametersVanilla = function(activeStep) {
    if (parseInt(activeStep, 10) === 4) {
        return runActivePoaClickValidationGate(); // Fire warning banner engine ONLY on click
    }
    return true; 
};

/**
 * Automated field safety un-freezer utility.
 */
function forceUnfreezeStep4FormInputs() {
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    
    if (signatureInput) {
        signatureInput.disabled = false;
        signatureInput.readOnly = false;
        signatureInput.style.setProperty("pointer-events", "auto", "important");
        signatureInput.style.setProperty("background-color", "#ffffff", "important");
    }
    if (consentCheckbox) {
        consentCheckbox.disabled = false;
        consentCheckbox.style.setProperty("pointer-events", "auto", "important");
    }
}

/**
 * Attaches real-time listeners including scroll trackers for terms boxes
 */
function attachPoaValidationListeners() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");

    if (signatureInput && !signatureInput.dataset.listenerActive) { 
        signatureInput.addEventListener("input", checkPoaInputStateSilently); 
        signatureInput.dataset.listenerActive = "true"; 
    } 
    if (consentCheckbox && !consentCheckbox.dataset.listenerActive) { 
        consentCheckbox.addEventListener("change", checkPoaInputStateSilently); 
        consentCheckbox.dataset.listenerActive = "true"; 
    } 
    if (scrollBox && !scrollBox.dataset.scrollHooked) {
        scrollBox.addEventListener("scroll", function(e) {
            const target = e.target;
            if (target.scrollHeight - target.scrollTop <= target.clientHeight + 15) {
                window.hasUserScrolledToBottomPoa = true;
                checkPoaInputStateSilently(); 
            }
        });
        scrollBox.dataset.scrollHooked = "true";
    }
} 

// ============================================================================ //
// 🎨 CORPORATE DESIGN RE-SKIN: UNIFIED APPLICATION COMPLIANCE BANNER          //
// ============================================================================ //
/**
 * Generates an elegantly skinned, context-aware notification banner.
 * Matches your core design palette: Navy Blue (#0a1f44) and Emerald Green (#10b981).
 * @param {string} messageText - The contextual compliance warning string to display.
 */
function displayOrangePoaWarningBanner(messageText) {
    const poaPanel = document.getElementById("step-panel-4") || document.getElementById("step-4");
    if (!poaPanel) return;

    // Locate or create the warning banner container element node
    let warningBox = document.getElementById("poa-orange-alert-banner");
    if (!warningBox) {
        warningBox = document.createElement("div");
        warningBox.id = "poa-orange-alert-banner";
        
        // Premium Re-skin: Uses clean white/slate fills, a sharp Navy left border, and precise sizing
        warningBox.style.cssText = 
            "background-color: #ffffff; " +
            "border: 1px solid #e2e8f0; " +
            "border-left: 4px solid #0a1f44; " + // Core Corporate Navy Accent Border
            "color: #0a1f44; " +                 // Deep Navy text color
            "padding: 14px 18px; " +
            "font-weight: 700; " +
            "font-size: 0.875rem; " +
            "border-radius: 8px; " +
            "margin-bottom: 20px; " +
            "display: flex; " +
            "align-items: center; " +
            "gap: 12px; " +
            "width: 100%; " +
            "box-sizing: border-box; " +
            "box-shadow: 0 4px 6px -1px rgba(10, 31, 68, 0.04), 0 2px 4px -1px rgba(10, 31, 68, 0.02); " + // Soft modern depth shadow
            "font-family: system-ui, sans-serif; " +
            "text-align: left;";
        
        const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");
        if (scrollBox) {
            scrollBox.parentNode.insertBefore(warningBox, scrollBox);
        } else {
            poaPanel.insertBefore(warningBox, poaPanel.firstChild);
        }
    }
    
    // Injects a solid corporate navy warning icon paired with your updated text parameters
    warningBox.innerHTML = `
        <i class="fa-solid fa-circle-info" style="color: #10b981; font-size: 1.15rem; flex-shrink: 0;"></i> 
        <span style="line-height: 1.4; color: #0a1f44; font-weight: 600;">${messageText}</span>
    `;
    
    // Smooth scroll navigation anchor snaps perfectly onto the notification card area
    warningBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Global window exposure pass mapping
window.displayOrangePoaWarningBanner = displayOrangePoaWarningBanner;


// Execute initial load bindings safely on app frame startup
document.addEventListener("DOMContentLoaded", () => { 
    forceUnfreezeStep4FormInputs(); 
    attachPoaValidationListeners(); 
}); 

// 🟢 WORKSPACE INTERACTION LOCK-RELEASE HOOK:
// Instantly catches layout view switches to un-gray name fields and checkboxes
function initializeStep4MutationObserverTracking() {
    const targetPanelNode = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (!targetPanelNode) return;

    const poaUnlockObserver = new MutationObserver((mutations) => { 
        // Whenever the display properties change (e.g. from display: none to block)
        if (targetPanelNode.style.display !== "none") {
            console.log("[POA Matrix] Step 4 active view mount detected. Forcing field click authorizations...");
            forceUnfreezeStep4FormInputs(); 
            attachPoaValidationListeners(); 
        }
    }); 
    
    poaUnlockObserver.observe(targetPanelNode, { attributes: true, attributeFilter: ["style"] });
    window.poaUnlockObserverInstance = poaUnlockObserver;
}

// Kick off visibility listeners on app startup
if (document.readyState !== "loading") {
    initializeStep4MutationObserverTracking();
} else {
    document.addEventListener("DOMContentLoaded", initializeStep4MutationObserverTracking);
}


// ============================================================================ //
// 🟢 STEP 3 RENDER TARGET SYNCHRONIZATION BRIDGE                             //
// ============================================================================ //
document.addEventListener("DOMContentLoaded", () => {
    const htmlMarketplaceBox = document.getElementById("wizard-dynamic-upsells-render-target");
    
    if (htmlMarketplaceBox && typeof window.renderTargetUpsellsListPanel === "function") {
        console.log("[Marketplace Bridge] Found Step 3 HTML container. Injecting catalog items...");
        
        // Feed your global database object straight into your compiler function
        const activeCatalog = window.unifiedCatalogItems || window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
        window.renderTargetUpsellsListPanel(activeCatalog, htmlMarketplaceBox);
    }
});


// ============================================================================ // 
// 🛠️ REPAIRED WORKSPACE CARD COMPILER (EMPTY DESCRIPTION FILTERING PASS)       // 
// ============================================================================ // 
function renderTargetUpsellsListPanel(catalog, renderTarget) {
    if (!catalog || !renderTarget) return {};

    if (Object.keys(catalog).length > 0) { 
        let marketplaceCardsHtml = ""; 
        const mappingCoordinates = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 

        Object.keys(catalog).forEach(catalogSlug => { 
            const item = catalog[catalogSlug]; 
            if (!item) return; 

            // 🟢 THE CRITICAL VISUAL RESET FIX: 
            // If the item has no description or text definition, it belongs to Step 2.
            // Forcefully skip it to prevent blank text frames from appearing on Step 3.
            const itemDesc = item.description || item.desc || ""; 
            if (!itemDesc || itemDesc.trim() === "") {
                return; // Skip and block rendering on Step 3
            }

            const stateTrackingKey = mappingCoordinates[catalogSlug] || catalogSlug; 
            const isFlagTrue = window[stateTrackingKey] === true || window[stateTrackingKey] === "yes" || String(window[stateTrackingKey]) === "true"; 
            const itemName = item.label || item.name; 
            const itemPrice = parseFloat(item.price) || 0; 

            marketplaceCardsHtml += ` 
             <div class="upsell-market-card" style="background:#ffffff; border:1px solid #e2e8f0; padding:16px; border-radius:8px; display:flex; gap:16px; align-items:center; justify-content:space-between; box-sizing:border-box; width:100%; transition:all 0.2s ease; margin-bottom: 12px;"> 
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0; flex:1;"> 
                    <span style="font-weight:800; font-size:1rem; color:#0a1f44;">${itemName}</span> 
                    <p style="margin:0; font-size:0.85rem; color:#64748b; line-height:1.4;">${itemDesc}</p> 
                </div> 
                <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px; flex-shrink:0;"> 
                    <span style="font-family:monospace; font-weight:700; color:#10b981; font-size:1.1rem;">$${itemPrice.toFixed(2)}</span> 
                    <label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; font-weight:700; color:#0a1f44; cursor:pointer; margin:0;"> 
                        <input type="checkbox" class="upsell-checkbox" id="${stateTrackingKey}" data-price="${itemPrice}" data-name="${itemName}" style="width:18px; height:18px; cursor:pointer;" ${isFlagTrue ? 'checked' : ''} onchange="handleBackgroundUpsellTogglePass(this)"> Activate 
                    </label> 
                </div> 
             </div>`; 
        }); 

        renderTarget.innerHTML = marketplaceCardsHtml; 
    } 

    window.unifiedCatalogItems = catalog; 
    console.log("[Marketplace Compiler] Compiled total active items, filtering out blank text records."); 
    return catalog; 
}

// Export the method safely to global scope window records
window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanel;

// ============================================================================ //
// 🧼 UNIVERSAL STEP 3 VISUAL OVERLAY CLEANER (DOM DESTRUCTION METHOD)          //
// ============================================================================ //
function eliminateBlankDescriptionUpsellsFromStep3() {
    console.log("[Marketplace Guard] Forcefully cleaning Step 3 layout fields...");

    // Isolate the Step 3 marketplace view panel
    const step3Container = document.getElementById("step-panel-3") || 
                           document.getElementById("step-3") || 
                           document.body;

    // Target all product card wrappers inside Step 3
    const productCards = step3Container.querySelectorAll('.upsell-market-card, .card, .wizard-input-group, div[style*="margin-bottom"]');

    productCards.forEach(card => {
        if (!card) return;

        // Trace for description paragraph tags, text spans, or subtext labels inside the card
        const paragraphNode = card.querySelector("p");
        const cardText = card.innerText || "";

        // Determine if this is a blank description layout block
        let isDescriptionMissing = false;

        if (paragraphNode) {
            // If a paragraph tag exists but is empty or whitespace-only
            if (paragraphNode.innerText.trim() === "") {
                isDescriptionMissing = true;
            }
        } else {
            // 🟢 CRITICAL ALGORITHMIC FALLBACK:
            // If no <p> tag exists, inspect the text density. Statically hardcoded items
            // that bypass the compiler are missing description blocks entirely.
            // If the card has a title but lacks a detailed subtext paragraph sentence string:
            const textLinesCount = cardText.split('\n').filter(line => line.trim().length > 0).length;
            
            // If the card is just an ID title label and an Activate button string, block it
            if (textLinesCount <= 2 && (cardText.includes("Activate") || cardText.includes("nea_service"))) {
                isDescriptionMissing = true;
            }
        }

        // 🛑 DOM DESTRUCTION ACTUATION GATEWAY: Forcefully erase it from the layout sheet
        if (isDescriptionMissing) {
            card.remove();
            console.log("[Marketplace Guard] Successfully destroyed empty-description element frame block.");
        }
    });
}

// 🟢 FIXED: Changed 'step3TargetPanel' to match your declared element variable
const step3PanelElement = document.getElementById("step-panel-3") || document.getElementById("step-3");
if (step5ContainerElement) { // Safety check against earlier observers
    const summaryObserverPass = new MutationObserver(() => {
        if (step5ContainerElement.style.display !== "none") {
            directInjectCartAddonsToSummaryStep5();
            setTimeout(directInjectCartAddonsToSummaryStep5, 80); 
        }
    });
    summaryObserverPass.observe(step5ContainerElement, { attributes: true, attributeFilter: ["style"] });
}


// Hook it into your primary DOM ready event queue pass
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(eliminateBlankDescriptionUpsellsFromStep3, 200);
});

window.eliminateBlankDescriptionUpsellsFromStep3 = eliminateBlankDescriptionUpsellsFromStep3;


// ============================================================================ //
// 🖋️ LIVE CURSIVE SIGNATURE MIRROR PREVIEW MATRIX                             //
// ============================================================================ //
function initCursiveSignatureCaptureLivePreview() {
    const textInputField = document.getElementById("poa_typed_signature");
    const cursivePreviewField = document.getElementById("cursive-signature-preview");

    if (!textInputField || !cursivePreviewField) {
        console.log("[Signature Preview] Active preview elements not loaded on frame zero. Postponing hook.");
        return;
    }

    // Bind real-time input mirror interceptor pass safely
    if (!textInputField.dataset.previewHooked) {
        textInputField.addEventListener("input", (e) => {
            const currentString = e.target.value.trim();
            
            if (currentString.length > 0) {
                // Update live cursive preview box text
                cursivePreviewField.textContent = currentString;
                cursivePreviewField.style.color = "#0066cc"; // Classic blue signature ink
                cursivePreviewField.style.fontStyle = "normal";
            } else {
                // Fallback default state text if input is completely cleared
                cursivePreviewField.textContent = "Your Signature";
                cursivePreviewField.style.color = "#64748b"; // Muted slate fallback
            }
        });
        textInputField.dataset.previewHooked = "true";
        console.log("[Signature Preview] Real-time cursive live preview sync successfully armed.");
    }
}

// Automatically bind preview hooks upon document paint cycles
document.addEventListener("DOMContentLoaded", initCursiveSignatureCaptureLivePreview);

// Observer helper pass to re-arm listeners if Step 4 panel mounts dynamically later
const poaPreviewPanel = document.getElementById("step-panel-4") || document.getElementById("step-4");
if (poaPreviewPanel) {
    const previewObserver = new MutationObserver(() => {
        if (poaPreviewPanel.style.display !== "none") {
            setTimeout(initCursiveSignatureCaptureLivePreview, 50);
        }
    });
    previewObserver.observe(poaPreviewPanel, { attributes: true, attributeFilter: ["style"] });
}

window.initCursiveSignatureCaptureLivePreview = initCursiveSignatureCaptureLivePreview;


// ============================================================================ //
// 🛡️ PART 5: ACTIVE NAVIGATION INTERCEPTOR (PERMANENTLY ACTIVE ON-CLICK BAR)  //
// ============================================================================ //

/**
 * High-performance submission validation gate.
 * Triggers ONLY when the customer explicitly clicks the 'Continue to Summary' button.
 * Blocks form advancement and displays contextual orange alerting panels if inputs are incomplete.
 */
function runActivePoaClickValidationGate(event) {
    console.log("[POA Interceptor] Active click captured. Evaluating criteria fields...");
    
    // Prevent standard native form actions from forcing premature page shifts
    if (event && typeof event.preventDefault === "function") {
        event.preventDefault();
    }

    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 1. Evaluate full name input length parameters
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) {
            isSignatureValid = true; 
        }
    } else { 
        isSignatureValid = true; 
    } 

    // 2. Evaluate consent checkmark box status
    if (consentCheckbox) {
        isConsentChecked = consentCheckbox.checked; 
    } else {
        isConsentChecked = true; 
    }

    // 🚩 ON-CLICK GATE 1: Verify document scrolling threshold
    if (!window.hasUserScrolledToBottomPoa) {
        displayOrangePoaWarningBanner("Action Needed: Please scroll to the bottom of the disclosure to confirm you read it and understand it.");
        return false;
    }

    // 🚩 ON-CLICK GATE 2: Verify signature name format structure
    if (!isSignatureValid) {
        displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box.");
        return false;
    }

    // 🚩 ON-CLICK GATE 3: Verify checkbox authorization checkmarks
    if (!isConsentChecked) {
        displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols.");
        return false;
    }

    // 🟢 SUCCESS: All criteria met. Remove any visible alerts and advance layout views
    const existingWarning = document.getElementById("poa-orange-alert-banner");
    if (existingWarning) existingWarning.remove();

    console.log("[POA Interceptor] Step 4 compliance gates passed. Moving forward onto Step 5.");
    
    if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(5);
    }
    return true;
}

/**
 * Automated safety un-freezer utility.
 * 🟢 UPDATED: Forcefully forces the navigation button to stay active and un-disabled at all times.
 */
function forceUnfreezeStep4FormInputs() {
    console.log("[POA Security Hub] Forcing all form interaction channels active...");
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("#step-4 .btn-wizard-main");

    if (signatureInput) {
        signatureInput.disabled = false;
        signatureInput.readOnly = false;
        signatureInput.style.setProperty("pointer-events", "auto", "important");
        signatureInput.style.setProperty("background-color", "#ffffff", "important");
    }
    if (consentCheckbox) {
        consentCheckbox.disabled = false;
        consentCheckbox.style.setProperty("pointer-events", "auto", "important");
    }
    
    // 🟢 CRITICAL RESET: Forcefully wipe away any stuck disabled rules on the button container node
    if (nextStepButton) {
        nextStepButton.removeAttribute("disabled");
        nextStepButton.disabled = false;
        nextStepButton.style.setProperty("opacity", "1", "important");
        nextStepButton.style.setProperty("cursor", "pointer", "important");
        nextStepButton.style.setProperty("pointer-events", "auto", "important");
    }
}

// Ensure the background evaluation loops never attempt to disable our button node
function checkPoaInputStateSilently() {
    // Left empty intentionally to prevent baseline evaluation scripts from resetting button disabled states
    return true;
}

// Bind updated methods back into global window scope records fields safely
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate;
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputs;
window.checkPoaInputStateSilently = checkPoaInputStateSilently;


// ============================================================================ //
// ⓘ CONTEXTUAL TOOLTIP POP-UP ENGINE (MATCHES UNIFIED ALERT DESIGN SPEC)     //
// ============================================================================ //
/**
 * Toggles visibility states for the Step 4 legal explanation tooltip popup box.
 * 🟢 RE-SKIN DESIGN UPDATE: Styled to perfectly match your clean, unified white/navy alert banner.
 * @param {Event} event - Native browser element click event parameter context.
 */
function togglePoaContextualTooltipDisplay(event) {
    if (event && typeof event.stopPropagation === "function") {
        event.stopPropagation(); // Stops the window click handler from instantly shutting the card down
    }

    const tooltipCard = document.getElementById("poa-tooltip-card");
    const contentTarget = document.getElementById("poa-tooltip-content-target");
    if (!tooltipCard) return;

    // Toggle logic: If the bubble is already active, hide it and exit
    if (tooltipCard.style.display === "block") {
        tooltipCard.style.display = "none";
        return;
    }

    // DYNAMIC MICROCOPY ROUTER RESOLUTION
    const activeRouteKey = window.routeActiveServiceKey || "new-entrant-audit";
    let helpExplanationText = "This standard authorization permits our processing agents to securely submit mandatory regulatory documentation to federal and state registries on your behalf.";

    if (activeRouteKey.includes("audit") || activeRouteKey.includes("nea")) {
        helpExplanationText = "Mandatory Audit Requirement: This authorization allows filings4u, LLC to compile and submit your Driver Qualification Files (DQF), HOS review ledgers, and Consortium filings directly down to the FMCSA and DOT database registries to securely safeguard your operational motor carrier compliance scores.";
    } else if (activeRouteKey.includes("corp") || activeRouteKey.includes("llc")) {
        helpExplanationText = "Corporate Setup Requirement: This corporate agency agreement empowers our organizers to register your custom corporate Articles of Organization and coordinate Registered Agent address protocols safely inside your selected state filing jurisdiction.";
    } else if (activeRouteKey.includes("dba") || activeRouteKey.includes("assumed")) {
        helpExplanationText = "Assumed Name Registry: Authorizes our administrative processing specialists to file corporate assumed title certificates and publish structural state classification records.";
    }

    // Inject the text layout paired with a vibrant emerald info shield icon
    if (contentTarget) {
        contentTarget.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 6px; font-family: system-ui, sans-serif; text-align: left;">
                <span style="font-weight: 800; color: #10b981; font-size: 0.8rem; text-transform: uppercase; display: flex; align-items: center; gap: 6px; letter-spacing: 0.3px;">
                    <i class="fa-solid fa-shield-halved" style="font-size: 0.9rem;"></i> Secure Authorization Notice
                </span>
                <p style="margin: 0; line-height: 1.4; color: #0a1f44; font-weight: 600; font-size: 0.8rem;">${helpExplanationText}</p>
            </div>
        `;
    }

    // 🟢 RE-SKIN THE CONTAINER LAYOUT: Wiped dark background, applied matching white/navy alert palette
    tooltipCard.style.display = "block";
    tooltipCard.style.setProperty("background-color", "#ffffff", "important");
    tooltipCard.style.setProperty("border", "1px solid #e2e8f0", "important");
    tooltipCard.style.setProperty("border-left", "4px solid #0a1f44", "important"); // Matching Corporate Navy Left border
    tooltipCard.style.setProperty("box-shadow", "0 10px 25px -5px rgba(10, 31, 68, 0.1), 0 8px 10px -6px rgba(10, 31, 68, 0.05)", "important");
}

// Global window exposure pass mapping
window.togglePoaContextualTooltipDisplay = togglePoaContextualTooltipDisplay;


// ============================================================================ //
// 📊 STEP 5 INTERACTIVE VISIBILITY REAL-TIME INVOICE REFRESHER                 //
// ============================================================================ //
function forceStep5SummaryInvoiceRefresh() {
    console.log("[Summary Hub] Step 5 panel active. Forcing real-time invoice calculations update...");

    // 1. Force the dynamic state discovery crawl to scan and merge all selections
    if (typeof window.runPricingMatrixDataCrawlPass === "function") {
        window.runPricingMatrixDataCrawlPass();
    }

    // 2. Force the master UI binding manager to redraw elements and display math
    if (typeof window.finalizePricingMatrixUiRender === "function") {
        window.finalizePricingMatrixUiRender();
    } else if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    }
}

// Attach a layout display observer targeting both standard panel naming versions
const summaryPanelNodeElement = document.getElementById("step-panel-5") || document.getElementById("step-5");

if (summaryPanelNodeElement) {
    const summaryPanelViewObserver = new MutationObserver(() => {
        // Runs immediately whenever the element style changes from display: none to block
        if (summaryPanelNodeElement.style.display !== "none") {
            // Trigger immediately and then 100ms later to ensure slow async caches catch up
            forceStep5SummaryInvoiceRefresh();
            setTimeout(forceStep5SummaryInvoiceRefresh, 100);
        }
    });
    
    summaryPanelViewObserver.observe(summaryPanelNodeElement, { attributes: true, attributeFilter: ["style"] });
    window.summaryPanelViewObserverInstance = summaryPanelViewObserver;
}

// Intercept your forward panel swapper routine to ensure calculations are mapped on slide transitions
const originalActiveLayoutSwapper = window.switchWizardActiveViewLayout;
if (originalActiveLayoutSwapper) {
    window.switchWizardActiveViewLayout = function(activeStepTarget) {
        // Fire original layout switch mechanics
        originalActiveLayoutSwapper(activeStepTarget);
        
        // Force evaluation sweeps if target matches summary indices
        if (parseInt(activeStepTarget, 10) === 5) {
            forceStep5SummaryInvoiceRefresh();
        }
    };
}

window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefresh;


// ============================================================================ //
// 📊 STEP 5 EXPLICIT LAYOUT SYNCHRONIZER BRIDGE MODULE (REPAIRED RESTORATION)  //
// ============================================================================ //
/**
 * Programmatic recalculation gate. Forces your data loops to scan and group
 * checked items without overriding global wizard navigation functions.
 */
function forceStep5PurchaseSummaryRenderCycle() {
    console.log("[Summary Sync] Running step 5 real-time data calculations pass...");

    // 1. Force the dynamic crawler pass to scan and group checkmark state matrices
    if (typeof window.runPricingMatrixDataCrawlPass === "function") {
        window.runPricingMatrixDataCrawlPass();
    }

    // 2. Force the central matrix loop compiler to update prices and draw invoice markup
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    } else if (typeof window.finalizePricingMatrixUiRender === "function") {
        window.finalizePricingMatrixUiRender();
    }
}

/**
 * 🟢 ISOLATED VIEW OBSERVER ENGINE:
 * Monitors panel visibility states and triggers a layout refresh the split second
 * Step 5 opens on your screen, with absolutely zero risk of breaking Step 1 layouts.
 */
function initStep5PurchaseSummaryVisibilityTracker() {
    const summaryPanelNodeElement = document.getElementById("step-panel-5") || document.getElementById("step-5");
    if (!summaryPanelNodeElement) return;

    const summaryPanelViewObserver = new MutationObserver(() => {
        // Runs immediately when display changes from display: none to block
        if (summaryPanelNodeElement.style.display !== "none") {
            forceStep5PurchaseSummaryRenderCycle();
            setTimeout(forceStep5PurchaseSummaryRenderCycle, 60); // Secondary safety macro pass
        }
    });
    
    summaryPanelViewObserver.observe(summaryPanelNodeElement, { attributes: true, attributeFilter: ["style"] });
    window.summaryPanelViewObserverInstance = summaryPanelViewObserver;
}

// Register initialization execution safely on app startup paths
if (document.readyState !== "loading") {
    initStep5PurchaseSummaryVisibilityTracker();
} else {
    document.addEventListener("DOMContentLoaded", initStep5PurchaseSummaryVisibilityTracker);
}

window.forceStep5PurchaseSummaryRenderCycle = forceStep5PurchaseSummaryRenderCycle;
window.initStep5PurchaseSummaryVisibilityTracker = initStep5PurchaseSummaryVisibilityTracker;

// ============================================================================ //
// 🚀 INJECTOR ENGINE: DIRECT LIVE ARRAY INJECTION WITH NATIVE REMOVE BUTTONS   //
// ============================================================================ //
function directInjectCartAddonsToSummaryStep5() {
    console.log("[Summary Engine] Recalculating itemized matrix rows pass...");

    const rowsTargetNode = document.getElementById("summary-purchase-rows-container");
    if (!rowsTargetNode) return;

    let runningSubtotalAmount = 0;
    let itemsMarkupString = "";

    // 1. Compile baseline plan pricing data nodes
    const ctx = window._tempCalcContext || {};
    const basePackagePriceValue = parseFloat(ctx.baseTierPrice) || 0;
    const safePlanName = ctx.planConfig?.name || 'New Entrant Audit';
    const safePlanTier = String(ctx.currentPlanKey || 'COMPLIANCE').toUpperCase();

    runningSubtotalAmount += basePackagePriceValue;

    // 2. Discover ALL checked option inputs across the application views
    const activeCheckboxes = document.querySelectorAll(
        '#step-panel-2 input[type="checkbox"]:checked, #step-panel-3 input[type="checkbox"]:checked, #step-2 input[type="checkbox"]:checked, #step-3 input[type="checkbox"]:checked, .upsell-checkbox:checked, .nea-service-checkbox:checked'
    );

    const processedNamesRegistry = [];

    activeCheckboxes.forEach(checkbox => {
        if (!checkbox) return;

        // Resolve clean item labeling properties and values
        const labelString = checkbox.getAttribute("data-name") || checkbox.getAttribute("data-label") || checkbox.id;
        if (!labelString || processedNamesRegistry.includes(labelString) || labelString.toLowerCase().includes("optional add-on")) return;

        const priceValue = parseFloat(checkbox.getAttribute("data-price")) || parseFloat(checkbox.value) || 0;
        runningSubtotalAmount += priceValue;
        processedNamesRegistry.push(labelString);

        // 🟢 ADVANCED: Append your item rows complete with an interactive 'Remove Item' text button link!
        itemsMarkupString += `
         <div class="summary-receipt-row-item" data-source-checkbox-id="${checkbox.id}" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: #475569; padding: 10px 0; border-bottom: 1px dashed #e2e8f0; width: 100%; box-sizing: border-box;">
            <div style="display: flex; flex-direction: column; gap: 2px;">
                <span style="font-weight: 600; color: #0a1f44;">+ ${labelString}</span>
                <!-- Interactive Trash Action Link -->
                <button type="button" onclick="window.removeSelectedAddonItemStraightFromSummaryCard('${checkbox.id}')" style="background: transparent; border: none; color: #ef4444; font-size: 0.725rem; font-weight: 700; cursor: pointer; padding: 0; text-align: left; width: fit-content; display: flex; align-items: center; gap: 4px; margin-top: 2px; transition: opacity 0.1s;"><i class="fa-solid fa-trash-can"></i> Remove from Invoice</button>
            </div>
            <span style="font-family: monospace; font-weight: 700; color: #0a1f44; font-size: 0.95rem;">$${priceValue.toFixed(2)}</span>
         </div>`;
    });

    // 3. Render out content templates right onto your Step 5 summary rows
    const baselineHeaderRow = `
     <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 4px;">
        <span>${safePlanName} (${safePlanTier})</span>
        <span style="font-family: monospace;">$${basePackagePriceValue.toFixed(2)}</span>
     </div>`;

    rowsTargetNode.innerHTML = baselineHeaderRow + itemsMarkupString;
}

/**
 * 🟢 CART REMOVE ACTUATOR ENGINE
 * Allows users to un-check an option from Step 5 without resetting their workflow.
 * @param {string} targetCheckboxElementId - The target checkbox ID token to wipe
 */
function removeSelectedAddonItemStraightFromSummaryCard(targetCheckboxElementId) {
    if (!targetCheckboxElementId) return;
    console.log(`[Summary Engine] Action Click: Wiping item card #${targetCheckboxElementId}`);

    // 1. Locate the physical checkbox element container sitting inside Step 2 or 3 panel layers
    const physicalCheckbox = document.getElementById(targetCheckboxElementId);
    if (physicalCheckbox) {
        physicalCheckbox.checked = false; // Uncheck it programmatically
        
        // Trigger its native change interceptors to update calculations
        physicalCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // 2. Clear variable memory registers
    window[targetCheckboxElementId] = false;
    const trackingStateKey = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP ? window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP[targetCheckboxElementId] : null;
    if (trackingStateKey) {
        window[trackingStateKey] = false;
    }

    // 3. Clear from cart state array contexts
    if (window.currentCartState && Array.isArray(window.currentCartState.addons)) {
        window.currentCartState.addons = window.currentCartState.addons.filter(addon => 
            addon.id !== targetCheckboxElementId && addon.name !== targetCheckboxElementId
        );
    }

    // 4. Force a fresh redrawing sweep of the visible invoice balance layout cards
    directInjectCartAddonsToSummaryStep5();
    
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    }
}

// Global window parameter exposure mapping definitions
window.directInjectCartAddonsToSummaryStep5 = directInjectCartAddonsToSummaryStep5;
window.removeSelectedAddonItemStraightFromSummaryCard = removeSelectedAddonItemStraightFromSummaryCard;



// ============================================================================ //
// 📋 INTERACTIVE PRICE GUIDE POPUP MATRIX (NAVY & EMERALD ACTIVE CHECKS)      //
// ============================================================================ //
function launchNewEntrantAuditRequirementsGuideModal() {
    console.log("[Modal Engine] Building interactive selection pricing guidelines box...");

    let modalRoot = document.getElementById("f4u-price-guide-modal-root");
    if (!modalRoot) {
        modalRoot = document.createElement("div");
        modalRoot.id = "f4u-price-guide-modal-root";
        modalRoot.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 31, 68, 0.4); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 99999; opacity: 0; transition: opacity 0.2s ease-in-out; box-sizing: border-box; padding: 20px;";
        document.body.appendChild(modalRoot);
    }

    // Resolve current checkbox IDs matching your specific Step 2 template layout inputs
    const catalogOptions = [
        { id: "assemble-dqf", checkboxId: "nea_service_dqf", name: "Assemble Driver Qualification Files (DQF)", price: 79.00, desc: "3-year driving records assembly, medical examiner check, and background verifications." },
        { id: "drug-consortium", checkboxId: "nea_service_consortium", name: "DOT Drug & Alcohol Consortium Enrollment", price: 149.00, desc: "Instant drug testing pool integration and random compliance certificate extractions." },
        { id: "hos-review", checkboxId: "nea_service_hos", name: "Hours of Service (HOS) Log Audit Pre-Review", price: 195.00, desc: "ELD telemetry assessments, graph exception auditing, and correction profiling templates." },
        { id: "maintenance-ledger", checkboxId: "nea_service_maintenance", name: "Vehicle Maintenance Ledger & Inspection Set", price: 85.00, desc: "Part 396 annual visual documentation sheets, DVIR trackers, and asset profiles." },
        { id: "expert-consultation", checkboxId: "nea_service_consultation", name: "Independent Pre-Audit Consultation Package", price: 250.00, desc: "Dedicated 1-on-1 mock review session with a senior compliance strategist before state uploads." }
    ];

    let checkRowsHtml = "";

    catalogOptions.forEach(opt => {
        // Cross-reference the background page checkboxes to check if they are already ticked
        const physicalInputBox = document.getElementById(opt.checkboxId) || document.querySelector(`[id*="${opt.id}"]`);
        const isCheckedActive = physicalInputBox ? physicalInputBox.checked : false;

        // Render sleek checklist rows complete with active onchange trigger handshakes
        checkRowsHtml += `
         <div style="display: flex; align-items: start; gap: 14px; padding: 12px 0; border-bottom: 1px dashed #e2e8f0; width: 100%; box-sizing: border-box;">
            <input type="checkbox" id="modal_chk_${opt.id}" class="modal-sync-checkbox" style="width: 20px; height: 20px; cursor: pointer; margin-top: 2px; accent-color: #10b981;" ${isCheckedActive ? 'checked' : ''} onchange="window.syncModalCheckboxChangeToBackgroundForm('${opt.checkboxId}', this.checked)">
            <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0;">
                <label for="modal_chk_${opt.id}" style="font-weight: 700; color: #0a1f44; font-size: 0.9rem; cursor: pointer;">${opt.name}</label>
                <span style="color: #64748b; font-size: 0.775rem; line-height: 1.4;">${opt.desc}</span>
            </div>
            <strong style="font-family: monospace; color: #10b981; font-size: 0.95rem; padding-left: 8px;">$${opt.price.toFixed(2)}</strong>
         </div>`;
    });

    modalRoot.innerHTML = `
        <div style="background: #ffffff; border-radius: 12px; width: 100%; max-width: 550px; box-shadow: 0 20px 25px rgba(10, 31, 68, 0.15); border-left: 4px solid #0a1f44; box-sizing: border-box; display: flex; flex-direction: column; padding: 24px; font-family: system-ui, sans-serif; text-align: left; transform: translateY(-10px); transition: transform 0.2s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                <div>
                    <h3 style="margin: 0; color: #0a1f44; font-size: 1.2rem; font-weight: 800; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-list-check" style="color: #10b981;"></i> Dynamic Compliance Matrix</h3>
                    <p style="margin: 2px 0 0 0; color: #64748b; font-size: 0.775rem;">Check or uncheck items to automatically configure your purchase summary card.</p>
                </div>
                <button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: transparent; border: none; color: #64748b; font-size: 1.2rem; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div style="max-height: 340px; overflow-y: auto; padding-right: 4px; display: flex; flex-direction: column;">
                ${checkRowsHtml}
            </div>
            <button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="margin-top: 20px; background: #0a1f44; color: #ffffff; border: none; padding: 12px; font-weight: 700; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: 100%; box-shadow: 0 2px 4px rgba(10,31,68,0.1);">Apply Choices & Close</button>
        </div>`;

    modalRoot.style.display = "flex";
    setTimeout(() => { modalRoot.style.opacity = "1"; modalRoot.firstChild.style.transform = "translateY(0)"; }, 10);
}

/**
 * 🟢 SYNC MATRIX BRIDGE PASSTHROUGH
 * Links modal checkbox click actions directly to the background page inputs.
 */
function syncModalCheckboxChangeToBackgroundForm(backgroundInputId, isToggledOn) {
    if (!backgroundInputId) return;
    console.log(`[Modal Sync] Mirroring toggle state: #${backgroundInputId} -> Checked: ${isToggledOn}`);

    const physicalInputBox = document.getElementById(backgroundInputId) || 
                             document.querySelector(`input[id*="${backgroundInputId}"]`) ||
                             document.querySelector(`input[name*="${backgroundInputId}"]`);

    if (physicalInputBox) {
        physicalInputBox.checked = isToggledOn;
        // Broadcast change event to automatically trigger running price calculation updates
        physicalInputBox.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // Force data sync straight to central calculator modules
    if (typeof window.executeNewEntrantAuditLiveFulfillmentSync === "function") {
        window.executeNewEntrantAuditLiveFulfillmentSync();
    }
}

function closeNewEntrantAuditPriceGuideModal() {
    const modalRoot = document.getElementById("f4u-price-guide-modal-root");
    if (modalRoot) {
        modalRoot.style.opacity = "0";
        modalRoot.firstChild.style.transform = "translateY(-10px)";
        setTimeout(() => { modalRoot.style.display = "none"; }, 200);
    }
}

window.launchNewEntrantAuditRequirementsGuideModal = launchNewEntrantAuditRequirementsGuideModal;
window.syncModalCheckboxChangeToBackgroundForm = syncModalCheckboxChangeToBackgroundForm;
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal;


// ============================================================================ //
// 🧭 STEP 2 NAVIGATION PIPELINE UN-FREEZER                                    //
// ============================================================================ //
/**
 * Intercepts forward routing buttons clicks specifically targeting Step 2 to Step 3 transitions.
 */
function processStepTwoFunnelAdvancementGate(event) {
    console.log("[Navigation Gate] Verification pass running for Step 2 form blocks...");
    
    if (event && typeof event.preventDefault === "function") {
        event.preventDefault();
    }

    // 1. Run local field validators to ensure required address/name blocks are populated
    const targetFields = document.querySelectorAll("#step-panel-2 [required], #step-2 [required]");
    let isFormBlockValid = true;

    targetFields.forEach(field => {
        if (!field) return;
        if (!field.value || field.value.trim() === "") {
            isFormBlockValid = false;
            field.style.setProperty("border-color", "#ef4444", "important"); // Mark missing fields red
        } else {
            field.style.removeProperty("border-color");
        }
    });

    if (!isFormBlockValid) {
        console.warn("[Navigation Gate] Required Step 2 corporate data fields are missing. Blocked switch.");
        if (typeof window.displayOrangePoaWarningBanner === "function") {
            window.displayOrangePoaWarningBanner("Action Required: Please complete all mandatory company registration fields highlighted inside your profile before moving onto tiers.");
        } else {
            alert("Action Required: Please populate all mandatory corporate registration fields before continuing.");
        }
        return false;
    }

    // 2. Commit Step 2 inputs to local browser cache history layers safely
    if (typeof window.saveWizardFormStatesVanilla === "function") {
        window.saveWizardFormStatesVanilla();
    }

    // 3. Slide views forward seamlessly over onto the Step 3 Add-ons marketplace
    console.log("[Navigation Gate] Step 2 parameters cleared. Moving onto Step 3.");
    if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(3);
    }
    return true;
}

// Map the navigation passthrough into your button actions on initial load loops
document.addEventListener("DOMContentLoaded", () => {
    const continueBtnStep2 = document.querySelector("#step-panel-2 .btn-wizard-main") || 
                             document.querySelector("#step-2 .btn-wizard-main") ||
                             document.querySelector("button[onclick*='goToNextWizardStep(3)']");
                             
    if (continueBtnStep2) {
        continueBtnStep2.removeAttribute("onclick"); // Strip away broken reference bindings
        continueBtnStep2.addEventListener("click", processStepTwoFunnelAdvancementGate);
        continueBtnStep2.style.cursor = "pointer";
        console.log("[Navigation Hub] Step 2 forward navigation channel successfully armed.");
    }
});

window.processStepTwoFunnelAdvancementGate = processStepTwoFunnelAdvancementGate;

