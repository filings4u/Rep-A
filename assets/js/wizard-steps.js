if (typeof window.syncModalCheckboxChangeToBackgroundForm !== "function") { 
    window.syncModalCheckboxChangeToBackgroundForm = function(elementRef, event) { 
        console.warn("[Safe Fallback Module] syncModalCheckboxChangeToBackgroundForm missing from execution layers."); 
    }; 
} 

// ============================================================================ // 
// 🔗 URL PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE (DYNAMIC)     // 
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

    // 3. 🟢 FIXED DYNAMIC FIELD GENERATION ON BOOT:
    // Routes directly to your unified multi-step network asset aggregator pass
    if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
        window.executeStepTwoDynamicFormInjection(true); 
    } else if (typeof window.executeDynamicRegulatoryFieldInjection === "function") { 
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
// SAVE PATH: Collects data out of the DOM and pushes to local storage          // 
// ============================================================================ // 
if (!isExecutionInitialLoad) { 
    if (window.isWizardCurrentlyRestoringStateVanilla) return; 
    
    try { 
        const currentCacheData = JSON.parse(localStorage.getItem(cacheKeyNamespace) || "{}"); 
        
        // 🟢 FIX: Target your actual active master onboarding form element tree container
        const inputs = document.querySelectorAll("#master-onboarding-form input, #master-onboarding-form select, #master-onboarding-form textarea"); 
        
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

    // 3. EVALUATE LEGAL CONSENT CHECKBOX if (consentCheckbox) { 
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
} 

// ============================================================================ // 
// 🗺️ UNIVERSAL DYNAMIC PARAMETER CAPTURE ENGINE (WITH PATH ISOLATED GUARD)    // 
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

    // 🛑 PATH ISOLATED ROUTING GUARD: 
    // Only bounce the user if they are currently inside the deep step onboarding wizard paths.
    // If they are already resting on your entry hub page, skip the redirect logic entirely!
    if (!urlService || !urlPlan) { 
        const currentUriPath = window.location.pathname.toLowerCase();
        
        if (!currentUriPath.includes("get-started.html")) {
            console.warn("[Traffic Router] Missing product service/plan intent details. Redirecting to initialization hub..."); 
            window.location.href = "get-started.html"; 
            return; // Halt execution completely 
        } else {
            console.log("[Traffic Router] Restoring clean baseline organic session context on start hub page.");
            return; // Exit safely: User is already home
        }
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
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;
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

    // 🟢 PROGRESSIVE STATE MERGE RECOVERY: 
    // Proactively read existing cache records first so hidden multi-step inputs do not get deleted!
    let activeFormMetricsObject = {}; 
    try {
        const preExistingCacheString = localStorage.getItem(cacheKeyNamespace);
        if (preExistingCacheString) {
            activeFormMetricsObject = JSON.parse(preExistingCacheString) || {};
        }
    } catch (parseCacheErr) {
        console.warn("[State Engine] Baseline cache was unreadable, initializing clean payload.", parseCacheErr);
        activeFormMetricsObject = {};
    }

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
            
            // Updates or appends new values over old keys smoothly without zeroing out missing sibling step data
            activeFormMetricsObject[uniqueDataKey] = elementValueToCache; 
        } 
    }); 

    try {
        localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject)); 
        console.log("[State Engine] Active form parameters saved to localStorage successfully."); 
    } catch (writeErr) {
        console.error("[State Engine Fatal] LocalStorage write allocation failed:", writeErr);
    }
} 

// Expose the tracking manager cleanly back into global window boundaries 
window.saveWizardFormStatesVanilla = saveWizardFormStatesVanilla;




/** * filings4u, LLC - Master Unified Wizard Boot Engine Layer * Pure dynamic architecture: Controls entry validations, data hydration, URL parsing, * element sync, visibility clipping constraints, and frame-zero pricing calculation sweeps. * ABSOLUTELY ZERO HARDCODED SLUGS, PLANS, VALUES, OR ROUTING STRINGS. */ 
window.wizardBootRetryAttempts = window.wizardBootRetryAttempts || 0; 

// 🟢 FIX 1: Made function async to handle dependent step promises smoothly
async function runUnifiedWizardBootEngine() { 
    console.log("[Boot Engine] Initializing sequence-independent parameter scanning..."); 

    // ============================================================================ // 
    // 1. SEQUENCE-AGNOSTIC EXTRACTION (Pure Dynamic Context Mapping)               // 
    // ============================================================================ // 
    const urlEngineParams = new URLSearchParams(window.location.search); 
    let resolvedSlug = urlEngineParams.get('service') || urlEngineParams.get('package') || urlEngineParams.get('id') || ""; 
    let resolvedPlan = urlEngineParams.get('plan') || urlEngineParams.get('tier') || ""; 
    const resolvedState = urlEngineParams.get('state') || ""; 

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
    // 2. TIMING PROTECTION SAFEGUARD (Network Polling Check)                      // 
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

    if (window.GLOBAL_COMPANY_PRICING && !window.GLOBAL_COMPANY_PRICING.packages) { 
        window.GLOBAL_COMPANY_PRICING.packages = window.CENTRAL_SERVICE_PLAN_DB || {}; 
    } 
    let sanitizedServiceKey = resolvedSlug.toLowerCase().trim().replace(/[\s_]+/g, "-"); 
    if (window.GLOBAL_COMPANY_PRICING?.packages && !window.GLOBAL_COMPANY_PRICING.packages[sanitizedServiceKey]) { 
        window.GLOBAL_COMPANY_PRICING.packages[sanitizedServiceKey] = window.CENTRAL_SERVICE_PLAN_DB[sanitizedServiceKey] || { addons: [], plans: {} }; 
    } 

    // ============================================================================ // 
    // 3. SECURE PARAMETER INITIALIZATION                                           // 
    // ============================================================================ // 
    window.routeActiveServiceKey = sanitizedServiceKey; 
    window.routeActivePlanKey = resolvedPlan.toLowerCase().trim(); 
    if (resolvedState) { 
        window.selectedFormationStateCode = resolvedState.toUpperCase().trim(); 
    } 

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
// 4. CRITICAL VISIBILITY CONSTRAINTS: Isolated Multi-Part Panel Activation     // 
// ============================================================================ // 
const visiblePanels = document.querySelectorAll('[id^="step-panel-"]'); 
visiblePanels.forEach(function(panel) { 
    const panelIndex = parseInt(panel.id.replace("step-panel-", ""), 10); 
    if (panelIndex === window.currentWizardActiveStep) { 
        panel.classList.add("active"); 
        
        // 🟢 STRUCTURAL ALIGNMENT FIX: 
        // Replaces narrow inline styling overrides with a flexible layout block.
        // This forces the active panel to take up 100% of its available column space
        // without dropping or breaking the sidebar grid layout underneath it.
        panel.style.setProperty("display", "block", "important"); 
        panel.style.setProperty("width", "100%", "important");
        panel.style.setProperty("box-sizing", "border-box", "important");
    } else { 
        panel.classList.remove("active"); 
        panel.style.setProperty("display", "none", "important"); 
    } 
});


    // ============================================================================ // 
    // 5. DATA INJECTIONS GENERATION PASS (Executes safely behind locked hidden steps) // 
    // ============================================================================ // 
    const isEngineReady = window.routeActiveServiceKey && window.currentWizardActiveStep; 
    if (!isEngineReady) { 
        console.warn("[Boot Engine] Route service key or active step missing. Re-queuing injection setup in 50ms..."); 
        setTimeout(function() { 
            if (typeof runUnifiedWizardBootEngine === "function") { 
                runUnifiedWizardBootEngine(); 
            } 
        }, 50); 
        return; 
    } 

    if (typeof autoInjectMainWebsitePricingPlan === "function") { 
        autoInjectMainWebsitePricingPlan(); 
    } 
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") { 
        cacheAndRestoreWizardFormStatesVanilla(true); 
    } 
    if (typeof autoDiscoverAndHookAddressNodes === "function") { 
        autoDiscoverAndHookAddressNodes(); 
    } 

    if (window.currentWizardActiveStep === 1) { 
        if (typeof renderStep1CustomFeatureBullets === "function") { 
            renderStep1CustomFeatureBullets(window.routeActiveServiceKey); 
        } 
    } 

    if (window.currentWizardActiveStep === 2) { 
        if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
            // 🟢 FIX 2: Awaiting the dynamic injection so fields exist before Section 6 runs
            await window.executeStepTwoDynamicFormInjection(true); 
        } else if (typeof executeDynamicRegulatoryFieldInjection === "function") { 
            executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey); 
        } 
    } 

    if (window.currentWizardActiveStep === 4) { 
        if (typeof initCursiveSignatureCaptureLivePreview === "function") { 
            window.initCursiveSignatureCaptureLivePreview(); 
        } 
    } 

    if (typeof updateApplicationMapTimelineBubbles === "function") { 
        updateApplicationMapTimelineBubbles(window.currentWizardActiveStep); 
    } 

    // ============================================================================ // 
    // 6. CONTAINMENT FIX: Force purely synchronous calculations cycles             // 
    // ============================================================================ // 
    if (typeof updateDynamicPricingMatrixVanilla === "function") { 
        updateDynamicPricingMatrixVanilla(); 
        console.log("[Boot Engine Success] Onboarding pipeline active. Step views isolated safely."); 
    } 
} 

window.runUnifiedWizardBootEngine = runUnifiedWizardBootEngine;


/** * filings4u, LLC - Power of Attorney Execution Matrix Engine * Evaluates the real-time input status of the electronic signature fields * on Step 4 to ensure legal compliance before enabling step advancement. */ 
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
}

// ============================================================================ // 
// PART 1: FIELD REGEX VALIDATION (MODERN SILENT ENGINE REWRITE)                 // 
// ============================================================================ // 
function validateStepInputParametersVanilla(activeStep) { 
    var activePanel = document.getElementById("step-panel-" + activeStep); 
    if (!activePanel) return true; 

    var inputs = activePanel.querySelectorAll("input, select, textarea"); 
    var stepIsValid = true; 
    var firstInvalidElement = null; // 🟢 Tracks the first mistake to focus on later

    // Upgraded: Supports global names, accents, spaces, periods, and hyphens universally 
    var regexLetters = /^[\p{L}\s.'\-]+$/u; 
    var regexNumbers = /^\d+$/; 
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    inputs.forEach(function(el) { 
        if (el.type === "hidden" || el.disabled) return; 
        var val = el.value.trim(); 

        // Clear native error flags immediately on each pass to prevent permanent locks
        el.setCustomValidity(""); 

        // 1. CHECK REQUIRED STATES 
        if (el.hasAttribute("required") && val === "") { 
            el.setCustomValidity("This field is required."); 
            stepIsValid = false; 
            if (!firstInvalidElement) firstInvalidElement = el; 
        } 
        
        // 2. CHECK FORMAT STRINGS IF FIELD IS POPULATED 
        else if (val !== "") { 
            if (el.type === "email" || el.classList.contains("validate-email") || (el.name && el.name.indexOf("email") !== -1)) { 
                if (!regexEmail.test(val)) { 
                    el.setCustomValidity("Please enter a valid email address."); 
                    stepIsValid = false; 
                    if (!firstInvalidElement) firstInvalidElement = el; 
                } 
            } else if (el.classList.contains("validate-letters") || (el.name && el.name.indexOf("name") !== -1) || (el.name && el.name.indexOf("city") !== -1)) { 
                if (!regexLetters.test(val)) { 
                    el.setCustomValidity("This field can only contain letters, spaces, hyphens, or periods."); 
                    stepIsValid = false; 
                    if (!firstInvalidElement) firstInvalidElement = el; 
                } 
            } else if (el.type === "number" || el.classList.contains("validate-numbers") || (el.name && el.name.indexOf("zip") !== -1) || (el.name && el.name.indexOf("ein") !== -1)) { 
                if (!regexNumbers.test(val)) { 
                    el.setCustomValidity("This field can only contain numbers."); 
                    stepIsValid = false; 
                    if (!firstInvalidElement) firstInvalidElement = el; 
                } 
            } 
        } 
    }); 

    // 🟢 SINGLE REPORT PASS: 
    // If the step is invalid, focus the cursor on the *first* mistake and display only *one* native bubble.
    if (!stepIsValid && firstInvalidElement) {
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidElement.reportValidity();
    }

    return stepIsValid; 
}

// Expose verification layers back to global tracking objects securely
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;
window.validateStepInputParametersVanilla = validateStepInputParametersVanilla;


// ============================================================================ // 
// INTERACTIVE EVENT LISTENERS (ZERO HARDCODING BOUNDING)                       // 
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
    // 🟢 SAFE RUNTIME INTERLOCK:
    // Invoke your unified platform boot sequence securely if it is initialized
    if (typeof window.runUnifiedWizardBootEngine === "function") { 
        window.runUnifiedWizardBootEngine(); 
    } else if (typeof window.runCombinedMasterBootSequence === "function") {
        window.runCombinedMasterBootSequence();
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


// ============================================================================ // 
// 🔌 CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE (STATE-AWARE BOOTSTRAPPER) // 
// ============================================================================ // 

/** 
 * Master platform lifecycle execution bootstrapper. 
 * Connects parameters parsers and schedules interface injections sequentially. 
 */ 
function runUnifiedPlatformLifecycleBoot() { 
    console.log("[Lifecycle Engine] Triggering application operational boot sequence..."); 

    // 🛡️ RUNTIME PIPELINE GUARD: 
    // Verify that crucial configuration scripts or variables are parsed before running. 
    const isCoreDatabaseReady = typeof window.getPricingConfiguration === "function" || window.CENTRAL_SERVICE_PLAN_DB; 
    
    if (!isCoreDatabaseReady) { 
        console.warn("[Lifecycle Engine Guard] Core data configuration or pricing methods are not yet ready. Retrying boot sequence in 50ms..."); 
        setTimeout(function() { 
            window.runUnifiedPlatformLifecycleBoot(); 
        }, 50); 
        return; // Halted safely to prevent premature interface initialization 
    } 

    // 🟢 STRUCTURAL REALIGNMENT REPAIR: 
    // Appends outer margins safely without forcing flex definitions that collapse step visibility tracks!
    const wizardContainerElement = document.querySelector(".wizard-container"); 

    if (wizardContainerElement) { 
        wizardContainerElement.style.setProperty('margin', '50px auto 0 auto', 'important'); // Perfect 50px top gap
        wizardContainerElement.style.setProperty('max-width', '1450px', 'important');       // Caps layout boundaries cleanly
        wizardContainerElement.style.setProperty('width', '100%', 'important');
    }
    
    // Clear out any previous inline overrides on form elements to restore original visibility rendering context instantly
    const masterFormElement = document.getElementById("master-onboarding-form");
    if (masterFormElement) {
        masterFormElement.style.removeAttribute ? masterFormElement.style.removeAttribute('display') : masterFormElement.style.removeProperty('display');
        masterFormElement.style.removeProperty('width');
        masterFormElement.style.removeProperty('max-width');
    }


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

    if (typeof window.initializeFormDisplayLayoutSync === "function") { 
        window.initializeFormDisplayLayoutSync(); 
    } 

    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 

    if (typeof window.renderActiveWizardStepUiLayout === "function") { 
        window.renderActiveWizardStepUiLayout(); 
    } 

    console.log("[Lifecycle Engine Success] All operational layers initialized safely."); 
} 

// Map safely back to global scope records instantly 
window.runUnifiedPlatformLifecycleBoot = runUnifiedPlatformLifecycleBoot; 


// Combined Framework Mount: Keeps boot engines unified on a single path 
function runCombinedMasterBootSequence() { 
    console.log("[Master Orchestrator] Triggering single synchronized boot frame..."); 
    
    // 1. Kick off URL params parsing, view clipping, and step-aware form injections
    if (typeof window.runUnifiedWizardBootEngine === "function") { 
        window.runUnifiedWizardBootEngine(); 
    } 
    
    // 2. Hydrate secondary platform parameters, widgets, layout un-squashers, and state recovery cycles 
    window.runUnifiedPlatformLifecycleBoot(); 
} 

if (document.readyState !== "loading") { 
    runCombinedMasterBootSequence(); 
} else { 
    document.addEventListener("DOMContentLoaded", runCombinedMasterBootSequence); 
}

// ============================================================================ // 
// 🔘 DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS (SELF-HOOKING FRAMEWORK) // 
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
 * This runs reactively and handles cached restorations seamlessly. 
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

// Expose discovery tool globally so your wizard aggregator engine can invoke it post-render pass
window.autoDiscoverAndHookInteractiveDbaFields = autoDiscoverAndHookInteractiveDbaFields;

// ============================================================================ // 
// PART 4: LLC MEMBERSHIP CONTROLLER                                           // 
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
        // 🟢 FIXED MARUKUP STRUCTURAL ENHANCEMENT: 
        // Re-added the complete valid opening select tag with a descriptive programmatic onchange event handler route!
        singleMemberBox.innerHTML = 
            '<div class="wizard-input-group" style="margin-top: 14px; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; grid-column: span 2; box-sizing: border-box;">' + 
                '<label for="sole_member_choice" style="font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px; font-size:0.85rem;">Are you the 1 Member of this company? *</label>' + 
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
        if (typeof generateMultipleMembersInputForms === "function") { 
            generateMultipleMembersInputForms(1, membersBox); 
        } 
    } 
} 

// Export methods cleanly back into global window boundaries 
window.handleMembershipDropdownChange = handleMembershipDropdownChange; 
window.handleSoleMemberIdentityToggle = handleSoleMemberIdentityToggle;

// ============================================================================ //
// 📡 LATE-BINDING MUTATION LISTENER BRIDGE
// ============================================================================ //
// Watches the dynamic onboarding container. Whenever a form file loads over the network,
// it instantly fires the listener discovery matrix to secure execution visibility.
document.addEventListener("DOMContentLoaded", () => {
    const mainFormSlotNode = document.getElementById("dynamic-onboarding-fields-root") || document.body;
    
    if (mainFormSlotNode) {
        const dynamicFormFileObserver = new MutationObserver(() => {
            if (typeof window.autoDiscoverAndHookInteractiveDbaFields === "function") {
                window.autoDiscoverAndHookInteractiveDbaFields();
            }
        });
        dynamicFormFileObserver.observe(mainFormSlotNode, { childList: true, subtree: true });
    }
    
    // Safety check for cached loads
    autoDiscoverAndHookInteractiveDbaFields();
});


// ============================================================================ // 
// 🧭 WIZARD NAVIGATION & APPLICATION TIMELINE PROGRESS LIGHTS (DYNAMIC)       // 
// ============================================================================ // 
function goToNextWizardStep(targetStep, eventClickRef) { 
    window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1; 

    // Handle variation where mouse click event payloads are passed as the first parameter
    let normalizedTargetStep = targetStep;
    if (targetStep && typeof targetStep === 'object') {
        normalizedTargetStep = undefined;
    }

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
    if (normalizedTargetStep && !isNaN(normalizedTargetStep)) { 
        nextStepIndex = parseInt(normalizedTargetStep, 10); 
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

    // 🟢 CRITICAL SYSTEM INTERLOCK INTEGRATION:
    // Re-trigger the master wizard boot engine layout. This guarantees that when Step 2 or Step 4 
    // mounts active, their late-binding asynchronous form injector scripts execute on-demand!
    if (typeof window.runUnifiedWizardBootEngine === "function") {
        window.runUnifiedWizardBootEngine();
    } else {
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
} 

// ============================================================================ // 
// REPAIRED PART 4: MULTI-SIDEBAR TIMELINE NAV LIGHTS ENGINE (SOLID EMERALD)   // 
// ============================================================================ // 
function updateApplicationMapTimelineBubbles(currentStepIndex) { 
    const activeStep = parseInt(currentStepIndex, 10) || 1; 
    console.log(`[Multi-Sidebar Progress] Illuminating timeline nodes for step: ${activeStep}`); 

    for (let i = 1; i <= 7; i++) { 
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
                    dotNode.style.setProperty("background-color", "#10b981", "important"); 
                    dotNode.style.setProperty("border", "3px solid #10b981", "important"); 
                    dotNode.style.setProperty("box-shadow", "0 0 0 4px rgba(16, 185, 129, 0.25)", "important"); 
                } 
                if (titleNode) { 
                    titleNode.style.setProperty("color", "#10b981", "important"); 
                    titleNode.style.setProperty("font-weight", "800", "important"); 
                } 
            } else if (i < activeStep) { 
                // Completed Step styling (Solid Emerald Green done fill) 
                if (dotNode) { 
                    dotNode.style.setProperty("background-color", "#10b981", "important"); 
                    dotNode.style.setProperty("border", "3px solid #10b981", "important"); 
                } 
                if (titleNode) { 
                    titleNode.style.setProperty("color", "#0a1f44", "important"); 
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

// Export methods cleanly back into global window scope records instantly
window.goToNextWizardStep = goToNextWizardStep;
window.goToPreviousWizardStep = goToPreviousWizardStep;
window.switchWizardActiveViewLayout = switchWizardActiveViewLayout;
window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubbles;



// ============================================================================ //
// 🎨 PART 1: NEUTRAL SELECTION SKINNING MODULE (STEP 3 VIEW ISOLATION)          //
// ============================================================================ //

/**
 * Sweeps Step 3 cards and applies neutral slate background skin styles dynamically.
 */
function autoSkinSelectedUpsellCards() {
    // Scope Restriction: Limits evaluation to Step 3 panels to leave Step 2 wide layouts untouched
    const step3Checkboxes = document.querySelectorAll(
        '#step-panel-3 input[type="checkbox"], #step-3 input[type="checkbox"], .upsell-checkbox'
    );

    step3Checkboxes.forEach(checkbox => {
        if (!checkbox) return;

        // Trace the closest parent product container card
        const parentCard = checkbox.closest('.upsell-market-card') || 
                           checkbox.closest('.card') || 
                           checkbox.parentElement?.parentElement;

        if (parentCard) {
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

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE
window.autoSkinSelectedUpsellCards = autoSkinSelectedUpsellCards;

// Safe Intercept: Wrap baseline checkbox toggle pass if initialized on the window scope
const baselineUpsellTogglePass = window.handleBackgroundUpsellTogglePass;
window.handleBackgroundUpsellTogglePass = function(checkboxElement) {
    if (typeof baselineUpsellTogglePass === "function") {
        baselineUpsellTogglePass(checkboxElement);
    }
    autoSkinSelectedUpsellCards();
};

// Mount skinning elements safely when document DOM nodes stabilize
if (document.readyState !== "loading") {
    setTimeout(autoSkinSelectedUpsellCards, 150);
} else {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(autoSkinSelectedUpsellCards, 150);
    });
}

// ============================================================================ //
// 🛡️ PART 2: POWER OF ATTORNEY MATRIX CORE ENGINE (REAL-TIME STATE BACKGROUND)  //
// ============================================================================ //

window.hasUserScrolledToBottomPoa = window.hasUserScrolledToBottomPoa || false;

/**
 * Validates text inputs, checkbox marks, and scroll values silently to toggle button access.
 */
function evaluatePoaInputStateMatrix() {
    console.log("[POA Matrix] Actively evaluating Step 4 digital signature states...");

    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
    const consentCheckbox = document.getElementById("poa_consent_checkbox");
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || 
                           document.querySelector("#step-4 .btn-wizard-main") || 
                           document.querySelector("button[onclick*='goToNextWizardStep(5)']");

    let isSignatureValid = false;
    let isConsentChecked = false;

    // 1. Validate full name format (Must contain first and last name separated by a space)
    if (signatureInput) {
        const signatureText = signatureInput.value.trim();
        if (signatureText.length >= 2 && signatureText.includes(" ")) {
            isSignatureValid = true;
            signatureInput.setCustomValidity(""); // Clear standard browser tooltips
        } else {
            isSignatureValid = false;
        }
    } else {
        isSignatureValid = true;
    }

    // 2. Validate checkbox tick element state
    if (consentCheckbox) {
        isConsentChecked = consentCheckbox.checked;
        if (isConsentChecked) {
            consentCheckbox.setCustomValidity("");
        }
    } else {
        isConsentChecked = true;
    }

    // 3. Evaluate scroll completion tracker block
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");
    if (scrollBox && !window.hasUserScrolledToBottomPoa) {
        if (nextStepButton) {
            nextStepButton.disabled = true;
            nextStepButton.style.opacity = "0.5";
            nextStepButton.style.cursor = "not-allowed";
        }
        return false; // Lock navigation exit
    }

    // 4. Matrix Enforcement: Toggle Button Visual State Rules
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

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;

// ============================================================================ //
// 🛡️ PART 3: POA ACTIVE INTERCEPTOR & WARNING VALIDATION MODULES (CLICK GATES) //
// ============================================================================ //

/**
 * Evaluates inputs silently during field updates to remove active warning banners if resolved.
 */
function checkPoaInputStateSilently() {
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

    if (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa) {
        const existingWarning = document.getElementById("poa-orange-alert-banner");
        if (existingWarning) existingWarning.remove();
    }

    return (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa);
}

/**
 * Dynamically builds and injects an isolated full-width alert banner frame contextually.
 */
function displayOrangePoaWarningBanner(alertMessageText) {
    const existingWarning = document.getElementById("poa-orange-alert-banner");
    if (existingWarning) {
        existingWarning.querySelector('.banner-text-span').innerText = alertMessageText;
        existingWarning.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    const alertBannerContainer = document.createElement("div");
    alertBannerContainer.id = "poa-orange-alert-banner";
    alertBannerContainer.style.cssText = "grid-column: span 2; display: flex; align-items: center; gap: 12px; background: #fff7ed; border: 1px solid #ffedd5; border-left: 5px solid #f97316; padding: 14px 16px; border-radius: 6px; color: #c2410c; font-weight: 600; font-size: 0.88rem; margin-bottom: 20px; width: 100%; box-sizing: border-box; font-family: sans-serif; line-height: 1.4; text-align: left;";
    alertBannerContainer.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: #f97316; font-size: 1.1rem; flex-shrink: 0;"></i> <span class="banner-text-span" style="flex-grow: 1;">${alertMessageText}</span>`;

    const targetMountPanel = document.getElementById("step-panel-4") || document.getElementById("step-4");
    if (targetMountPanel) {
        const headerBlock = targetMountPanel.querySelector('.step-header-container') || targetMountPanel.firstChild;
        if (headerBlock && headerBlock.nextSibling) {
            targetMountPanel.insertBefore(alertBannerContainer, headerBlock.nextSibling);
        } else {
            targetMountPanel.prepend(alertBannerContainer);
        }
        alertBannerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/**
 * Main click execution gate: Evaluates Step 4 fields completely and displays specific errors.
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

    // 🚩 Validation Gate 1: Track terms scroll completion block
    if (!window.hasUserScrolledToBottomPoa) {
        displayOrangePoaWarningBanner("Action Required: Please scroll down to the bottom of the disclosure document container to verify and clear the onboarding terms block.");
        return false;
    }

    // 🚩 Validation Gate 2: Track signature name string text values
    if (!isSignatureValid) {
        displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box.");
        if (signatureInput) signatureInput.focus();
        return false;
    }

    // 🚩 Validation Gate 3: Track checkbox verification confirmation choices
    if (!isConsentChecked) {
        displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols.");
        if (consentCheckbox) consentCheckbox.focus();
        return false;
    }

    const existingWarning = document.getElementById("poa-orange-alert-banner");
    if (existingWarning) existingWarning.remove();
    return true;
}

/**
 * Global Interceptor Hook integration: Handover validation strictly on Step 4
 */
const baselineStepValidator = window.validateStepInputParametersVanilla;
window.validateStepInputParametersVanilla = function(activeStep) {
    if (parseInt(activeStep, 10) === 4) {
        return runActivePoaClickValidationGate(); 
    }
    return typeof baselineStepValidator === "function" ? baselineStepValidator(activeStep) : true;
};

/**
 * Ensures inputs are fully operational and un-frozen in all browser viewport frames.
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
 * Safely binds event and scrolling thread listeners to page structures.
 */
function attachPoaValidationListeners() {
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
    const consentCheckbox = document.getElementById("poa_consent_checkbox");
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");

    if (signatureInput && !signatureInput.dataset.listenerActive) {
        signatureInput.addEventListener("input", () => {
            checkPoaInputStateSilently();
            if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();
        });
        signatureInput.dataset.listenerActive = "true";
    }
    if (consentCheckbox && !consentCheckbox.dataset.listenerActive) {
        consentCheckbox.addEventListener("change", () => {
            checkPoaInputStateSilently();
            if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();
        });
        consentCheckbox.dataset.listenerActive = "true";
    }
    if (scrollBox && !scrollBox.dataset.scrollHooked) {
        scrollBox.addEventListener("scroll", function(e) {
            const target = e.target;
            if (target.scrollHeight - target.scrollTop <= target.clientHeight + 15) {
                window.hasUserScrolledToBottomPoa = true;
                checkPoaInputStateSilently();
                if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();
            }
        });
        scrollBox.dataset.scrollHooked = "true";
    }
}

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE
window.checkPoaInputStateSilently = checkPoaInputStateSilently;
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate;
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputs;
window.attachPoaValidationListeners = attachPoaValidationListeners;
window.displayOrangePoaWarningBanner = displayOrangePoaWarningBanner;

// Mutation Observer: Re-arms validation modules the moment Step 4 mounts into view
const poaActivePanelTarget = document.getElementById("step-panel-4") || document.getElementById("step-4");
if (poaActivePanelTarget) {
    const poaLifecycleObserver = new MutationObserver(() => {
        if (poaActivePanelTarget.style.display !== "none") {
            forceUnfreezeStep4FormInputs();
            attachPoaValidationListeners();
            if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();
        }
    });
    poaLifecycleObserver.observe(poaActivePanelTarget, { attributes: true, attributeFilter: ["style"] });
}


/** * Attaches real-time listeners including scroll trackers for terms boxes */ 
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
                if (typeof checkPoaInputStateSilently === "function") checkPoaInputStateSilently(); 
            } 
        }); 
        scrollBox.dataset.scrollHooked = "true"; 
    } 
} 

// ============================================================================ // 
// 🎨 CORPORATE DESIGN RE-SKIN: UNIFIED APPLICATION COMPLIANCE BANNER           // 
// ============================================================================ // 
/** * Generates an elegantly skinned, context-aware notification banner. * Matches your core design palette: Navy Blue (#0a1f44) and Emerald Green (#10b981). * @param {string} messageText - The contextual compliance warning string to display. */ 
function displayOrangePoaWarningBanner(messageText) { 
    const poaPanel = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (!poaPanel) return; 

    let warningBox = document.getElementById("poa-orange-alert-banner"); 
    if (!warningBox) { 
        warningBox = document.createElement("div"); 
        warningBox.id = "poa-orange-alert-banner"; 
        warningBox.style.cssText = "background-color: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #0a1f44; color: #0a1f44; padding: 14px 18px; font-weight: 700; font-size: 0.875rem; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; box-shadow: 0 4px 6px -1px rgba(10, 31, 68, 0.04), 0 2px 4px -1px rgba(10, 31, 68, 0.02); font-family: system-ui, sans-serif; text-align: left;"; 
        
        const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container"); 
        if (scrollBox) { 
            scrollBox.parentNode.insertBefore(warningBox, scrollBox); 
        } else { 
            poaPanel.insertBefore(warningBox, poaPanel.firstChild); 
        } 
    } 

    warningBox.innerHTML = ` <i class="fa-solid fa-circle-info" style="color: #10b981; font-size: 1.15rem; flex-shrink: 0;"></i> <span style="line-height: 1.4; color: #0a1f44; font-weight: 600;">${messageText}</span> `; 
    warningBox.scrollIntoView({ behavior: "smooth", block: "center" }); 
} 

window.displayOrangePoaWarningBanner = displayOrangePoaWarningBanner; 

document.addEventListener("DOMContentLoaded", () => { 
    if (typeof forceUnfreezeStep4FormInputs === "function") forceUnfreezeStep4FormInputs(); 
    attachPoaValidationListeners(); 
}); 

// 🟢 WORKSPACE INTERACTION LOCK-RELEASE HOOK: 
function initializeStep4MutationObserverTracking() { 
    const targetPanelNode = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (!targetPanelNode) return; 
    
    const poaUnlockObserver = new MutationObserver((mutations) => { 
        if (targetPanelNode.style.display !== "none") { 
            console.log("[POA Matrix] Step 4 active view mount detected. Forcing field click authorizations..."); 
            if (typeof forceUnfreezeStep4FormInputs === "function") forceUnfreezeStep4FormInputs(); 
            attachPoaValidationListeners(); 
        } 
    }); 
    
    poaUnlockObserver.observe(targetPanelNode, { attributes: true, attributeFilter: ["style"] }); 
    window.poaUnlockObserverInstance = poaUnlockObserver; 
} 

if (document.readyState !== "loading") { 
    initializeStep4MutationObserverTracking(); 
} else { 
    document.addEventListener("DOMContentLoaded", initializeStep4MutationObserverTracking); 
} 

// ============================================================================ // 
// 🟢 STEP 3 RENDER TARGET SYNCHRONIZATION BRIDGE (TIMING RESILIENT)           // 
// ============================================================================ // 
function autoInitializeStep3MarketplaceCatalog() {
    const htmlMarketplaceBox = document.getElementById("wizard-dynamic-upsells-render-target");
    
    // 🛡️ TIMING PROTECTION SAFEGUARD:
    // If the window elements are present but the core global state configuration maps 
    // are still fetching or processing, re-queue execution loop cleanly to avoid crashes.
    const isStateConfigReady = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || window.CENTRAL_ADDON_DB;
    
    if (htmlMarketplaceBox && typeof window.renderTargetUpsellsListPanel === "function" && isStateConfigReady) { 
        console.log("[Marketplace Bridge] Found Step 3 HTML container. Injecting catalog items..."); 
        const activeCatalog = window.unifiedCatalogItems || window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {}; 
        window.renderTargetUpsellsListPanel(activeCatalog, htmlMarketplaceBox); 
    } else if (htmlMarketplaceBox) {
        // Retry loop to accommodate late asset loading speeds
        setTimeout(autoInitializeStep3MarketplaceCatalog, 50);
    }
}

document.addEventListener("DOMContentLoaded", autoInitializeStep3MarketplaceCatalog); 

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
    
    // Auto-skin newly generated DOM card structures instantly if available
    if (typeof window.autoSkinSelectedUpsellCards === "function") {
        window.autoSkinSelectedUpsellCards();
    }
    
    return catalog; 
} 

// 🟢 ACTION ROUTER FALLBACK BRIDGE:
// Protects click events from crashing if the main selection skinning file hasn't compiled yet
if (typeof window.handleBackgroundUpsellTogglePass !== "function") {
    window.handleBackgroundUpsellTogglePass = function(checkboxElement) {
        console.log("[Marketplace Pass] Upsell selection intercepted. Synchronization triggered.");
        if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
            window.updateDynamicPricingMatrixVanilla();
        }
    };
}

// Export the method safely to global scope window records 
window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanel;


// ============================================================================ // 
// 🧼 UNIVERSAL STEP 3 VISUAL OVERLAY CLEANER (DOM DESTRUCTION METHOD REPAIRED) // 
// ============================================================================ // 
function eliminateBlankDescriptionUpsellsFromStep3() { 
    console.log("[Marketplace Guard] Forcefully cleaning Step 3 layout fields..."); 

    // Isolate the Step 3 marketplace view panel context safely
    const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3"); 
    if (!step3Container) return;

    // 🟢 STRUCTURAL FIX: Limit query scans STRICTLY to individual card elements.
    // Removed generic divs and layout blocks to prevent accidental structural framework deletions.
    const productCards = step3Container.querySelectorAll('.upsell-market-card'); 

    productCards.forEach(card => { 
        if (!card) return; 

        // Trace for description paragraph tags, text spans, or subtext labels inside the card 
        const paragraphNode = card.querySelector("p"); 
        const cardText = card.innerText || ""; 
        
        let isDescriptionMissing = false; 

        if (paragraphNode) { 
            // If a paragraph tag exists but is empty or whitespace-only 
            if (paragraphNode.innerText.trim() === "") { 
                isDescriptionMissing = true; 
            } 
        } else { 
            // Algorithmic Check: Inspect the text density for uncompiled static overrides
            const textLinesCount = cardText.split('\n').filter(line => line.trim().length > 0).length; 
            
            // If the card is just a title line and an Activate button string, mark for deletion
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

// Ensure Step 5 container is assigned its tracking state relative position properties cleanly
var step5ContainerElement = document.getElementById("step-panel-5") || document.querySelector('[data-step="5"]'); 
if (step5ContainerElement) { 
    step5ContainerElement.style.position = "relative"; 
} else { 
    console.warn("[Wizard Warning] Step 5 layout container element could not be found during step scan context."); 
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
    const textInputField = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
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
                // Update live cursive preview box text style
                cursivePreviewField.textContent = currentString; 
                cursivePreviewField.style.setProperty("color", "#0066cc", "important"); // Classic blue signature ink 
                cursivePreviewField.style.setProperty("font-style", "normal", "important"); 
            } else { 
                // Fallback default state text if input is completely cleared 
                cursivePreviewField.textContent = "Your Signature"; 
                cursivePreviewField.style.setProperty("color", "#64748b", "important"); // Muted slate fallback 
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
// 🛡️ PART 5: ACTIVE NAVIGATION INTERCEPTOR (PERMANENTLY ACTIVE ON-CLICK BAR)    // 
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
        if (typeof window.displayOrangePoaWarningBanner === "function") {
            window.displayOrangePoaWarningBanner("Action Needed: Please scroll to the bottom of the disclosure to confirm you read it and understand it."); 
        }
        return false; 
    } 

    // 🚩 ON-CLICK GATE 2: Verify signature name format structure 
    if (!isSignatureValid) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") {
            window.displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box."); 
        }
        if (signatureInput) signatureInput.focus();
        return false; 
    } 

    // 🚩 ON-CLICK GATE 3: Verify checkbox authorization checkmarks 
    if (!isConsentChecked) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") {
            window.displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols."); 
        }
        if (consentCheckbox) consentCheckbox.focus();
        return false; 
    } 

    // 🟢 SUCCESS: All criteria met. Remove any visible alerts and advance layout views 
    const existingWarning = document.getElementById("poa-orange-alert-banner"); 
    if (existingWarning) existingWarning.remove(); 

    console.log("[POA Interceptor] Step 4 compliance gates passed. Moving forward onto Step 5."); 

    // 💾 COMMIT CURRENT POSITION TO LOCAL CACHE PRIOR TO SHIFTING SCENARIOS
    const cacheKey = "f4u_wizard_onboarding_state";
    try {
        const currentCacheData = JSON.parse(localStorage.getItem(cacheKey) || "{}");
        currentCacheData.currentWizardActiveStep = 5;
        localStorage.setItem(cacheKey, JSON.stringify(currentCacheData));
    } catch (cacheErr) {
        console.warn("[POA Interceptor] Unable to back up position key index:", cacheErr);
    }

    if (typeof window.switchWizardActiveViewLayout === "function") { 
        window.switchWizardActiveViewLayout(5); 
    } 
    return true; 
} 

// Export the method safely to global scope window records
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate;

// ============================================================================ //
// 📡 UN-FREEZER BRIDGE ATTACHMENT FOR INLINE SUBMIT CONTROL FIELDS
// ============================================================================ //
// Dynamically intercepts navigation button elements when Step 4 initializes,
// ensuring mouse clicks are always captured regardless of previous input states.
if (typeof window.forceUnfreezeStep4FormInputs !== "function") {
    window.forceUnfreezeStep4FormInputs = function() {
        const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || 
                               document.querySelector("#step-4 .btn-wizard-main") || 
                               document.querySelector("button[onclick*='goToNextWizardStep(5)']");
        
        if (nextStepButton) {
            // 🟢 FORCE UN-LOCK: Strip blocking attributes so the click validation can fire cleanly
            nextStepButton.removeAttribute("disabled");
            nextStepButton.style.setProperty("opacity", "1", "important");
            nextStepButton.style.setProperty("cursor", "pointer", "important");
            nextStepButton.style.setProperty("pointer-events", "auto", "important");
            
            // Re-route the click handler dynamically to this validation interceptor pass
            nextStepButton.setAttribute("onclick", "window.runActivePoaClickValidationGate(event)");
        }
    };
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
window.runActivePoaClickValidationGate = window.runActivePoaClickValidationGate; 
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputs; 
window.checkPoaInputStateSilently = checkPoaInputStateSilently; 

// ============================================================================ // 
// ⓘ CONTEXTUAL TOOLTIP POP-UP ENGINE (MATCHES UNIFIED ALERT DESIGN SPEC)       // 
// ============================================================================ // 
/** 
 * Toggles visibility states for the Step 4 legal explanation tooltip popup box. 
 * 🟢 RE-SKIN DESIGN UPDATE: Styled to perfectly match your clean, unified white/navy alert banner. 
 * @param {Event} event - Native browser element click event parameter context. */ 
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
            </div> `; 
    } 
    
    // 🟢 RE-SKIN THE CONTAINER LAYOUT: Wiped dark background, applied matching white/navy alert palette 
    tooltipCard.style.display = "block"; 
    tooltipCard.style.setProperty("background-color", "#ffffff", "important"); 
    tooltipCard.style.setProperty("border", "1px solid #e2e8f0", "important"); 
    tooltipCard.style.setProperty("border-left", "4px solid #0a1f44", "important"); // Matching Corporate Navy Left border 
    tooltipCard.style.setProperty("box-shadow", "0 10px 25px -5px rgba(10, 31, 68, 0.1), 0 8px 10px -6px rgba(10, 31, 68, 0.05)", "important"); 
} 

// Global window exposure pass mapping 
window.togglePoaDisplay = togglePoaContextualTooltipDisplay; // Maps to old legacy templates names smoothly
window.togglePoaContextualTooltipDisplay = togglePoaContextualTooltipDisplay;

// ============================================================================ //
// 🟢 AUTOMATED GLOBAL DISMISSAL INTERCEPTOR (THE UN-TRAP ENGINE)
// ============================================================================ //
// Listens to the global page runtime. If the tooltip card is open and the customer
// clicks anywhere outside its borders, it closes the overlay elements automatically.
document.addEventListener("click", function(globalClickEvent) {
    const tooltipCardElement = document.getElementById("poa-tooltip-card");
    if (tooltipCardElement && tooltipCardElement.style.display === "block") {
        // Verify that the mouse click location was not inside the tooltip card body box
        const wasClickInsideCard = tooltipCardElement.contains(globalClickEvent.target);
        if (!wasClickInsideCard) {
            console.log("[POA Tooltip] Outside click event intercepted. Dismissing overlay panel card safely.");
            tooltipCardElement.style.display = "none";
        }
    }
});


// ============================================================================ // 
// 📊 STEP 5 INTERACTIVE VISIBILITY REAL-TIME INVOICE REFRESHER                 // 
// ============================================================================ // 

/**
 * Programmatic recalculation gate. Forces your data loops to scan and group
 * checked items without creating duplicate execution loops.
 */
function forceStep5SummaryInvoiceRefresh() { 
    console.log("[Summary Hub] Step 5 panel active. Forcing real-time invoice calculations update..."); 
    
    // 1. Force the dynamic state discovery crawl to scan and merge all selections 
    if (typeof window.runPricingMatrixDataCrawlPass === "function") { 
        window.runPricingMatrixDataCrawlPass(); 
    } 
    
    // 2. Force the itemized marketplace rows to reconstruct
    if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") {
        window.directInjectCartAddonsToSummaryStep5();
    }

    // 3. Force the master UI binding manager to redraw elements and display math 
    if (typeof window.finalizePricingMatrixUiRender === "function") { 
        window.finalizePricingMatrixUiRender(); 
    } else if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// 🟢 SAFE INTERCEPT ROUTER: Prevents Call Stack Exceeded recursive locks
if (typeof window.switchWizardActiveViewLayout === "function" && !window.switchWizardActiveViewLayout.isWrappedBySummaryEngine) {
    const originalActiveLayoutSwapper = window.switchWizardActiveViewLayout; 
    
    window.switchWizardActiveViewLayout = function(activeStepTarget) { 
        originalActiveLayoutSwapper(activeStepTarget); 
        
        // Force evaluation sweeps if target matches summary indices 
        if (parseInt(activeStepTarget, 10) === 5) { 
            forceStep5SummaryInvoiceRefresh(); 
        } 
    };
    window.switchWizardActiveViewLayout.isWrappedBySummaryEngine = true; // Sets identification flag to block re-wrapping bugs
}

/** 
 * 🟢 UNIFIED ISOLATED VIEW OBSERVER ENGINE: 
 * Replaces both duplicate observers with one clean, unified layout tracking pass.
 */ 
function initStep5PurchaseSummaryVisibilityTracker() { 
    const summaryPanelNodeElement = document.getElementById("step-panel-5") || document.getElementById("step-5"); 
    if (!summaryPanelNodeElement) return; 

    // Disconnect any existing observer instance to clear out background memory leaks
    if (window.summaryPanelViewObserverInstance) {
        window.summaryPanelViewObserverInstance.disconnect();
    }

    const summaryPanelViewObserver = new MutationObserver(() => { 
        // Runs immediately when display changes from display: none to block 
        if (summaryPanelNodeElement.style.display !== "none") { 
            forceStep5SummaryInvoiceRefresh(); 
            setTimeout(forceStep5SummaryInvoiceRefresh, 80); // Secondary safety macro pass for slow browser engines
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

// Maintain alias function pointers for backwards compatibility across older step layout files
window.forceStep5PurchaseSummaryRenderCycle = forceStep5SummaryInvoiceRefresh;
window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefresh;
window.initStep5PurchaseSummaryVisibilityTracker = initStep5PurchaseSummaryVisibilityTracker;

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
    const basePackagePriceValue = parseFloat(ctx.baseTierPrice) || 0; 
    const safePlanName = ctx.planConfig?.name || ''; 
    const safePlanTier = ctx.currentPlanKey ? String(ctx.currentPlanKey).toUpperCase() : ''; 
    
    runningSubtotalAmount += basePackagePriceValue; 
    
    const activeCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked'); 
    const processedNamesRegistry = []; 

    activeCheckboxes.forEach(checkbox => { 
        if (!checkbox || !checkbox.id) return; 
        if (checkbox.id.startsWith("modal_input_box_")) return; 
        
        const labelString = checkbox.getAttribute("data-name") || checkbox.getAttribute("data-label") || checkbox.id; 
        if (!labelString || processedNamesRegistry.includes(labelString) || labelString.toLowerCase().includes("optional add-on")) return; 
        
        const priceValue = parseFloat(checkbox.getAttribute("data-price")) || parseFloat(checkbox.value) || 0; 
        if (priceValue <= 0) return; 
        
        runningSubtotalAmount += priceValue; 
        processedNamesRegistry.push(labelString); 
        
        itemsMarkupString += `
            <div class="summary-receipt-row-item" data-source-checkbox-id="${checkbox.id}" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: #475569; padding: 10px 0; border-bottom: 1px dashed #e2e8f0; width: 100%; box-sizing: border-box;">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <span style="font-weight: 600; color: #0a1f44;">+ ${labelString}</span>
                    <button type="button" onclick="window.removeSelectedAddonItemStraightFromSummaryCard('${checkbox.id}')" style="background: transparent; border: none; color: #ef4444; font-size: 0.725rem; font-weight: 700; cursor: pointer; padding: 0; text-align: left; width: fit-content; display: flex; align-items: center; gap: 4px; margin-top: 2px; transition: opacity 0.1s;"><i class="fa-solid fa-trash-can"></i> Remove from Invoice</button>
                </div>
                <span style="font-family: monospace; font-weight: 700; color: #0a1f44; font-size: 0.95rem;">$${priceValue.toFixed(2)}</span>
            </div>`; 
    }); 

    const tierDisplayString = safePlanTier ? ' (' + safePlanTier + ')' : ''; 
    const baselineHeaderRow = '<div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 4px;"><span>' + safePlanName + tierDisplayString + '</span><span style="font-family: monospace;">$' + basePackagePriceValue.toFixed(2) + '</span></div>'; 
    
    rowsTargetNode.innerHTML = baselineHeaderRow + itemsMarkupString; 

    // 🟢 DYNAMIC MARKTUP BINDING BRIDGE:
    // Automatically binds the calculated running total amount back to your visible 
    // step summary elements so checkout totals do not look disconnected.
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
    
    // Globally register active totals value for payment integrations to extract on Step 6
    window.finalComputedOnboardingInvoiceTotalAmount = runningSubtotalAmount;
} 

window.removeSelectedAddonItemStraightFromSummaryCard = function(sourceCheckboxId) { 
    if (!sourceCheckboxId) return; 
    const targetCheckbox = document.getElementById(sourceCheckboxId); 
    if (targetCheckbox) { 
        targetCheckbox.checked = false; 
        targetCheckbox.dispatchEvent(new Event('change', { bubbles: true })); 
    } 
    if (typeof window.forceStep5SummaryInvoiceRefresh === "function") { 
        window.forceStep5SummaryInvoiceRefresh(); 
    } 
}; 

window.directInjectCartAddonsToSummaryStep5 = directInjectCartAddonsToSummaryStep5;


// ============================================================================ //
// 📊 STEP 5 CART REMOVE ACTUATOR ENGINE (STATE SYNCHRONIZED REPAIR)            //
// ============================================================================ //

/** * 🟢 CART REMOVE ACTUATOR ENGINE * Allows users to un-check an option from Step 5 without resetting their workflow. * @param {string} targetCheckboxElementId - The target checkbox ID token to wipe */ 
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

    // 🟢 STRUCTURAL INTEGRATION PASS:
    // Update local storage instantly to ensure that the un-checked addon state 
    // is permanently cleared from your encrypted session cache.
    if (typeof window.saveWizardFormStatesVanilla === "function") {
        window.saveWizardFormStatesVanilla();
    }

    // 4. Force a fresh redrawing sweep of the visible invoice balance layout cards 
    if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") {
        window.directInjectCartAddonsToSummaryStep5(); 
    }
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// Global window parameter exposure mapping definitions 
window.directInjectCartAddonsToSummaryStep5 = typeof window.directInjectCartAddonsToSummaryStep5 !== "undefined" ? window.directInjectCartAddonsToSummaryStep5 : null; 
window.removeSelectedAddonItemStraightFromSummaryCard = removeSelectedAddonItemStraightFromSummaryCard; 

// ============================================================================ // 
// 📋 DYNAMIC INTERACTIVE CHECKLIST ENGINE (ZERO-HARDCODE ARCHITECTURE)        // 
// ============================================================================ // 
window.hasUserScrolledToBottomPoa = window.hasUserScrolledToBottomPoa || false; 

/** * Universally launches a context-aware operational requirement modal framework. * Pure taxonomy structure: Pulls text, listings, and items entirely from config lookups. */ 
function launchNewEntrantAuditRequirementsGuideModal() { 
    let modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (!modalRoot) { 
        modalRoot = document.createElement("div"); 
        modalRoot.id = "f4u-price-guide-modal-root"; 
        modalRoot.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;"; 
        document.body.appendChild(modalRoot); 
    } 

    // 🟢 RESOLVE UNIFIED METRICS: No static text strings allowed inside the runtime loop 
    const activeServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value || ""; 
    let resolvedConfig = null; 
    if (typeof window.getPricingConfiguration === "function" && activeServiceKey) { 
        resolvedConfig = window.getPricingConfiguration(activeServiceKey); 
    } 

    // Extract runtime variables directly from the dynamic configuration mapping 
    const modalTitle = resolvedConfig?.modalTitle || "Compliance Requirements Guide"; 
    const modalIntroduction = resolvedConfig?.modalIntro || "Review the mandatory regulatory parameters required for your filing profile below:"; 
    const checklistItemsSource = resolvedConfig?.checklistItems || []; 
    let contentRowsHtml = ""; 

    if (checklistItemsSource.length > 0) { 
        checklistItemsSource.forEach(item => { 
            const backgroundFormCheckbox = document.getElementById(item.targetId) || document.querySelector("input[id*='" + item.targetId + "']"); 
            const isChecked = backgroundFormCheckbox ? backgroundFormCheckbox.checked : false; 
            // Static hover tooltips are permitted per requirements allocation specifications 
            const staticHelpTooltip = "Click selection to sync checkbox value to master application ledger"; 
            
            contentRowsHtml += ` 
                <div style="display: flex; flex-direction: column; gap: 12px; background: rgba(10, 31, 68, 0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border, #e2e8f0); width: 100%; box-sizing: border-box; text-align: left;" title="${staticHelpTooltip}"> 
                    <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--navy, #0a1f44); align-items: center;"> 
                        <div style="display: flex; align-items: center; gap: 10px;"> 
                            <input type="checkbox" id="modal_input_box_${item.id}" style="width: 16px; height: 16px; cursor: pointer; accent-color: #10b981; margin: 0;" ${isChecked ? 'checked' : ''} onchange="window.syncModalCheckboxActionDirectToForm('${item.targetId}', this.checked)"> 
                            <label for="modal_input_box_${item.id}" style="cursor: pointer; margin: 0;">${item.name}</label> 
                        </div> 
                        <span style="color: var(--primary, #10b981); font-family: monospace;">$${Number(item.price || 0).toFixed(2)}</span> 
                    </div> 
                    <span style="font-size: 0.8rem; color: var(--slate, #64748b); display: block; padding-left: 26px;">${item.desc}</span> 
                </div>`; 
        }); 
    } else { 
        contentRowsHtml = ` 
            <div style="text-align: center; padding: 20px; color: var(--slate, #64748b);"> 
                No auxiliary compliance checklists required for this service pathway. 
            </div>`; 
    } 

    modalRoot.innerHTML = ` 
        <div style="background: #ffffff; border-radius: 12px; width: 100%; max-width: 650px; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.3); overflow: hidden;"> 
            <div style="background: var(--navy, #0a1f44); color: #ffffff; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;"> 
                <h4 style="margin: 0; font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;"><i class="fa-solid fa-shield"></i> ${modalTitle}</h4> 
                <button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: transparent; border: none; color: #ffffff; font-size: 1.25rem; cursor: pointer; font-weight: 700;" title="Dismiss window overlay">&times;</button> 
            </div> 
            <div style="padding: 20px; overflow-y: auto; font-size: 0.85rem; line-height: 1.5; color: #334155; display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;"> 
                <p style="margin: 0; font-weight: 600; color: var(--navy, #0a1f44); text-align: left;">${modalIntroduction}</p> 
                <div id="modal-pristine-rows-wrapper" style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;"> 
                    ${contentRowsHtml} 
                </div> 
            </div> 
            <div style="background: #f8fafc; border-top: 1px solid var(--border, #e2e8f0); padding: 12px 20px; display: flex; justify-content: flex-end;"> 
                <button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: var(--navy, #0a1f44); color: #ffffff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 700; cursor: pointer;" title="Acknowledge rules and exit overlay">Got It, Close Guide</button> 
            </div> 
        </div>`; 

    modalRoot.style.display = "flex"; 
    modalRoot.style.opacity = "1"; 
} 

/** * Event bridge linking internal modal states with background onboarding forms. */ 
function syncModalCheckboxActionDirectToForm(backgroundFormId, isChecked) { 
    if (!backgroundFormId) return; 
    const backgroundCheckboxNode = document.getElementById(backgroundFormId) || document.querySelector("input[id*='" + backgroundFormId + "']") || document.querySelector("input[class*='" + backgroundFormId + "']"); 
    if (backgroundCheckboxNode) { 
        backgroundCheckboxNode.checked = isChecked; 
        backgroundCheckboxNode.dispatchEvent(new Event('change', { bubbles: true })); 
    } 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
    if (typeof window.populatePurchaseSummaryReviewMatrix === "function") { 
        window.populatePurchaseSummaryReviewMatrix(); 
    } 
    if (typeof window.executeNewEntrantAuditLiveFulfillmentSync === "function") { 
        window.executeNewEntrantAuditLiveFulfillmentSync(); 
    } 
} 

/** * Hides operational modal layer. */ 
function closeNewEntrantAuditPriceGuideModal() { 
const modalRoot = document.getElementById("f4u-price-guide-modal-root");
if (modalRoot) {modalRoot.style.display = "none";}}

// Map cleanly back into universal global window scope references safely

window.launchNewEntrantAuditRequirementsGuideModal = launchNewEntrantAuditRequirementsGuideModal;
window.syncModalCheckboxActionDirectToForm = syncModalCheckboxActionDirectToForm;
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal;
window.removeSelectedAddonItemStraightFromSummaryCard = removeSelectedAddonItemStraightFromSummaryCard;


// ============================================================================ // 
// 📋 DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS & CHECKLIST MOUNTS         // 
// ============================================================================ // 

/**
 * Event bridge linking internal modal states with background onboarding forms.
 */
function syncModalCheckboxActionDirectToForm(backgroundFormId, isChecked) { 
    if (!backgroundFormId) return; 
    
    const backgroundCheckboxNode = document.getElementById(backgroundFormId) || 
                                   document.querySelector("input[id*='" + backgroundFormId + "']") || 
                                   document.querySelector("input[class*='" + backgroundFormId + "']"); 
    
    if (backgroundCheckboxNode) { 
        backgroundCheckboxNode.checked = isChecked; 
        backgroundCheckboxNode.dispatchEvent(new Event('change', { bubbles: true })); 
    } 
    
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
    if (typeof window.populatePurchaseSummaryReviewMatrix === "function") { 
        window.populatePurchaseSummaryReviewMatrix(); 
    } 
    if (typeof window.executeNewEntrantAuditLiveFulfillmentSync === "function") { 
        window.executeNewEntrantAuditLiveFulfillmentSync(); 
    } 
} 

/**
 * Hides operational modal layer with smooth transform animations.
 */
function closeNewEntrantAuditPriceGuideModal() { 
    const modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (modalRoot) { 
        modalRoot.style.opacity = "0"; 
        if (modalRoot.firstChild) {
            modalRoot.firstChild.style.transform = "translateY(-10px)"; 
        }
        setTimeout(() => { 
            modalRoot.style.display = "none"; 
        }, 200); 
    } 
} 

function triggerNewEntrantAuditComplianceChecklistPopup() { 
    if (typeof window.launchNewEntrantAuditRequirementsGuideModal === "function") {
        window.launchNewEntrantAuditRequirementsGuideModal(); 
    }
} 

function toggleNewEntrantAuditLetterDetails(selectedValue) { 
    console.log(`[New Entrant Audit Link] Selection: ${selectedValue}`); 
} 

/**
 * High-performance submission validation gate.
 * Triggers strictly when clicking the Step 2 forward navigation panel buttons.
 */
function processStepTwoFunnelAdvancementGate(event) { 
    if (event && typeof event.preventDefault === "function") { 
        event.preventDefault(); 
    } 
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 
    if (typeof window.switchWizardActiveViewLayout === "function") { 
        window.switchWizardActiveViewLayout(3); 
    } 
} 

// ============================================================================ // 
// 📊 STEP 5 INTERACTIVE VISIBILITY REAL-TIME INVOICE REFRESHER                 // 
// ============================================================================ // 
function forceStep5SummaryInvoiceRefresh() { 
    if (typeof window.runPricingMatrixDataCrawlPass === "function") { 
        window.runPricingMatrixDataCrawlPass(); 
    } 
    if (typeof window.finalizePricingMatrixUiRender === "function") { 
        window.finalizePricingMatrixUiRender(); 
    } 
} 

// Reconnected the observer elements with absolute safe null-checks
const step5PanelElementNode = document.getElementById("step-panel-5") || document.getElementById("step-5"); 
if (step5PanelElementNode) { 
    const summaryPanelViewObserver = new MutationObserver(() => { 
        if (step5PanelElementNode.style.display !== "none") { 
            forceStep5SummaryInvoiceRefresh(); 
            setTimeout(forceStep5SummaryInvoiceRefresh, 80); 
        } 
    }); 
    summaryPanelViewObserver.observe(step5PanelElementNode, { attributes: true, attributeFilter: ["style"] }); 
} 

// ============================================================================ // 
// 💳 STEP 6 SECURE GATEWAY REAL-TIME INVOICE REFRESHER & STRIPE BRIDGE         // 
// ============================================================================ // 

/** 
 * Synchronizes the live checkout total straight onto the Step 6 indicator node 
 * and automatically kicks off the Stripe inputs initialization routine. 
 */ 
function forceStep6StripePaymentGatewayRefreshPass() { 
    console.log("[Payment Gate] Step 6 active view detected. Synchronizing invoicing values..."); 
    const paymentTotalTextNode = document.getElementById("payment-gateway-total-display"); 
    
    // Extract the live grand total variable computed by your central calculations engine 
    const activeRunningTotalAmount = window.computedWizardGrandTotalAmount || 
                                     window.wizardCalculatedFinalTotalAmount || 
                                     window.finalComputedOnboardingInvoiceTotalAmount || 0; 
    
    if (paymentTotalTextNode) { 
        paymentTotalTextNode.textContent = `$${parseFloat(activeRunningTotalAmount).toFixed(2)}`; 
        console.log(`[Payment Gate] Step 6 balance display successfully hydrated: $${parseFloat(activeRunningTotalAmount).toFixed(2)}`); 
    } 

    // 💳 🟢 AUTOMATED STRIPE INTERFACE INITIALIZER WITH SINGLE-MOUNT SAFETY GATE:
    // Prevents double initialization loops from spawning duplicate credit card iframe inputs.
    const stripeInputContainer = document.getElementById("stripe-card-element") || document.getElementById("card-element");
    if (stripeInputContainer && stripeInputContainer.children.length > 0) {
        console.log("[Payment Gate] Stripe element context already pre-rendered safely inside container.");
        return; 
    }

    if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
        window.initializeFlatStripeCheckoutElement(); 
    } else { 
        console.warn("[Payment Gate] 'initializeFlatStripeCheckoutElement' engine initialization is missing from global context."); 
    } 
} 

// Attach a responsive layout observer to automatically fire the bridge when Step 6 mounts
const step6PanelContainerNode = document.getElementById("step-panel-6") || document.getElementById("step-6"); 
if (step6PanelContainerNode) { 
    const paymentPanelViewObserver = new MutationObserver(() => { 
        if (step6PanelContainerNode.style.display !== "none") { 
            forceStep6StripePaymentGatewayRefreshPass(); 
            setTimeout(forceStep6StripePaymentGatewayRefreshPass, 60); 
        } 
    }); 
    paymentPanelViewObserver.observe(step6PanelContainerNode, { attributes: true, attributeFilter: ["style"] }); 
    window.paymentPanelViewObserverInstance = paymentPanelViewObserver; 
} 

// ============================================================================ //
// 📦 GLOBAL LAYERS EXPOSURE AND CORE LISTENER REGISTRATIONS
// ============================================================================ //

// Bind methods cleanly back into global workspace window scopes 
window.syncModalCheckboxActionDirectToForm = syncModalCheckboxActionDirectToForm; 
window.syncModalCheckboxChangeToBackgroundForm = syncModalCheckboxActionDirectToForm; // Alias mapping prevents signature breaking bugs
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal; 
window.triggerNewEntrantAuditComplianceChecklistPopup = triggerNewEntrantAuditComplianceChecklistPopup; 
window.toggleNewEntrantAuditLetterDetails = toggleNewEntrantAuditLetterDetails; 
window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefresh; 
window.forceStep6StripePaymentGatewayRefreshPass = forceStep6StripePaymentGatewayRefreshPass;
window.processStepTwoFunnelAdvancementGate = processStepTwoFunnelAdvancementGate; 

// Re-arm navigation buttons on load loops safely 
function attachStepTwoNavigationTriggers() {
    const continueBtnStep2 = document.querySelector("#step-panel-2 .btn-wizard-main") || 
                             document.querySelector("#step-2 .btn-wizard-main") || 
                             document.querySelector("button[onclick*='goToNextWizardStep(3)']"); 
    if (continueBtnStep2) { 
        continueBtnStep2.removeAttribute("onclick"); 
        // Remove duplicate event track bounds before re-binding to remain leak-free
        continueBtnStep2.removeEventListener("click", processStepTwoFunnelAdvancementGate);
        continueBtnStep2.addEventListener("click", processStepTwoFunnelAdvancementGate); 
        continueBtnStep2.style.cursor = "pointer"; 
    } 
}

if (document.readyState !== "loading") {
    attachStepTwoNavigationTriggers();
} else {
    document.addEventListener("DOMContentLoaded", attachStepTwoNavigationTriggers); 
}

(function() {
    // 🟢 STRUCTURAL PERFORMANCE ENHANCEMENT:
    // Stripped out the global document "click" event listener block entirely.
    // Relying strictly on the MutationObserver below guarantees that the window 
    // smooth scrolls exactly ONCE per view transition, completely eliminating visual stutter.

    const masterLayoutPanels = document.querySelectorAll(".wizard-panel");
    
    masterLayoutPanels.forEach(function(panel) {
        const panelObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // Only fire the window repositioning logic if the specific style change 
                // indicates that this panel has transitioned into an active, visible display state.
                if (mutation.attributeName === "style" && panel.style.display !== "none" && panel.classList.contains("active")) {
                    
                    console.log(`[Scroll Manager] Panel #${panel.id || 'wizard-step'} mounted active. Adjusting viewport anchors...`);
                    
                    // Smooth scroll execution pass
                    window.scrollTo({ 
                        top: 0, 
                        behavior: "smooth" 
                    });
                }
            });
        });
        
        // Arm the layout mutation tracker
        panelObserver.observe(panel, { 
            attributes: true,
            attributeFilter: ["style", "class"] // Narrow down tracking filters to maximize browser thread performance
        });
    });
})();



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

/* ============================================================================ */
/* ⚡ PART 1 OF 2: NETWORK ROUTER AND CLEAN SPINNER INJECTION                  */
/* ============================================================================ */
(async () => {
  console.log("[Asset Router] Initiating service tracking route lookup pass...");

  const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root") || 
                     document.getElementById("wizard-dynamic-form-target") || 
                     document.getElementById("dynamic-form-fields") || 
                     document.querySelector(".wizard-dynamic-fields-slot");

  if (!fieldsRoot) {
    console.error("[Asset Router Critical] Could not find any valid form fields root container element in the DOM.");
    return;
  }

  let currentServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value;

  if (!currentServiceKey) {
    const lastSeg = window.location.pathname.split("/").pop() || "";
    currentServiceKey = lastSeg.includes(".html") ? lastSeg.replace(".html", "") : "index";
  }

  let rawUrlSlug = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
  const targetScriptFileName = (typeof SERVICE_URL_REGISTRY !== "undefined" && SERVICE_URL_REGISTRY[rawUrlSlug]) || rawUrlSlug;
  const baselineMemoryKeys = new Set(Object.keys(window).filter(k => typeof window[k] === "function"));
  const expectedScriptId = `script-dependency-${targetScriptFileName}`;

  let formInjectionWrapper = fieldsRoot.querySelector(".isolated-form-payload-container");
  if (!formInjectionWrapper) {
    formInjectionWrapper = document.createElement("div");
    formInjectionWrapper.className = "isolated-form-payload-container";
    formInjectionWrapper.style.cssText = "width: 100%; display: block; clear: both;";
    fieldsRoot.insertBefore(formInjectionWrapper, fieldsRoot.firstChild);
  }

  // Safe Node cleanup: Clear older sibling elements without touching our parent structural elements
  Array.from(fieldsRoot.childNodes).forEach(node => {
    if (node !== formInjectionWrapper) {
      fieldsRoot.removeChild(node);
    }
  });

  formInjectionWrapper.innerHTML = `
    <div class="dynamic-form-loading-placeholder" style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: var(--light-bg, #f8fafc); width: 100%; box-sizing: border-box;">
      <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i> Assembling specialized compliance filing interfaces...
    </div>`;

  // Safely inject and trace the script element without causing script source duplication
  if (!document.getElementById(expectedScriptId)) {
    console.log(`[Asset Router] Injecting network script tag for: assets/js/services/${targetScriptFileName}.js`);
    try {
      await new Promise((resolve, reject) => {
        const dynamicScriptElement = document.createElement("script");
        dynamicScriptElement.id = expectedScriptId;
        dynamicScriptElement.type = "text/javascript";
        dynamicScriptElement.src = `assets/js/services/${targetScriptFileName}.js`;
        
        dynamicScriptElement.onload = () => {
          setTimeout(resolve, 120);
        };
        dynamicScriptElement.onerror = () => {
          reject(new Error(`Failed to load script pipeline: ${targetScriptFileName}.js`));
        };
        
        document.head.appendChild(dynamicScriptElement);
      });
    } catch (networkScriptError) {
      console.error("[Asset Router Fatal Load Failure]", networkScriptError);
      formInjectionWrapper.innerHTML = `
        <div style="padding: 20px; color: #b91c1c; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; font-family: sans-serif; box-sizing: border-box; width: 100%;">
          <strong>Error Loading System Components:</strong> Could not load file: <code>assets/js/services/${targetScriptFileName}.js</code>. Please check your filename.
        </div>`;
      return;
    }
  } else {
    // A brief fallback wait loop if the component node was cached in active memory parameters
    await new Promise((resolve) => setTimeout(resolve, 80));
  }

  // Safely hand over execution to Part 2 to run the dynamic HTML payload injection
  if (typeof window.executeStepTwoDynamicFormInjection === "function") {
    await window.executeStepTwoDynamicFormInjection(baselineMemoryKeys, rawUrlSlug);
  } else if (typeof executeStepTwoDynamicFormInjection === "function") {
    await executeStepTwoDynamicFormInjection(baselineMemoryKeys, rawUrlSlug);
  } else {
    console.warn("[Asset Router] executeStepTwoDynamicFormInjection is not yet attached to the global scope.");
  }
})();


/* ============================================================================ */
/* ⚡ PART 2 OF 2: UNIVERSAL SERVICE-FORM LIFECYCLE COMPILER ENGINE             */
/* ============================================================================ */
async function executeStepTwoDynamicFormInjection(keysBeforeScriptLoads, rawUrlSlug) {
  console.log("[Lifecycle Engine] Starting universal template injection compilation pass...");
  
  const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root") || 
                     document.getElementById("wizard-dynamic-form-target") || 
                     document.getElementById("dynamic-form-fields") || 
                     document.querySelector(".wizard-dynamic-fields-slot");
                     
  if (!fieldsRoot) return;
  let formInjectionWrapper = fieldsRoot.querySelector(".isolated-form-payload-container");

  try {
    if (!rawUrlSlug || typeof rawUrlSlug !== "string") {
      let currentServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value;
      if (!currentServiceKey) {
        const lastSeg = window.location.pathname.split("/").pop() || "";
        currentServiceKey = lastSeg.includes(".html") ? lastSeg.replace(".html", "") : "index";
      }
      rawUrlSlug = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
    }

    // Standardize global state template lookup indicators safely
    const stateOptions = window.globalStateDropdownOptionsHtml || 
      (typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml(window.selectedFormationStateCode || "") : "") || 
      (typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? window.buildGlobalUsaStateDropdownOptionsHtml("") : "");
      
    const verifiedTemplates = [];
    window.formRegistry = window.formRegistry || {};

    // 1. Dynamic Service File Wrapper Initialization (e.g. llc-formation -> initLlcFormationService)
    const camelCaseServiceName = rawUrlSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    const dynamicInitName = `init${camelCaseServiceName}Service`;
    if (typeof window[dynamicInitName] === "function") {
      window[dynamicInitName]();
    }

    // 2. Master Template Rule Processing
    const targetRegistryMasterKey = `${rawUrlSlug}-form-master`;
    if (typeof window.formRegistry[targetRegistryMasterKey] === "function") {
      try {
        const outputPayload = window.formRegistry[targetRegistryMasterKey](stateOptions);
        if (typeof outputPayload === "string" && outputPayload.includes("<")) {
          verifiedTemplates.push({ html: outputPayload.trim(), step: 1 });
        } else if (Array.isArray(outputPayload)) {
          outputPayload.forEach(item => {
            if (item && item.html) {
              verifiedTemplates.push({ html: item.html.trim(), step: parseInt(item.step || item.stepIndex, 10) || 1 });
            }
          });
        }
      } catch (e) {
        console.error("[Lifecycle Engine] Master form renderer execution error:", e);
      }
    }

    // 3. RegEx Scanner for Multi-Step Layout Keys (with String-Function parsing fallback templates)
    if (verifiedTemplates.length === 0) {
      const allRegistryKeys = Object.keys(window.formRegistry);
      const layoutRegexPattern = new RegExp(`^${rawUrlSlug}-part(\\d+)-layout$`, 'i');
      
      allRegistryKeys.forEach(registryKey => {
        const matchResult = registryKey.match(layoutRegexPattern);
        if (matchResult) {
          // FIXED: Changed matchResult reference to target index string group [1] instead of index array [0]
          const stepNumber = parseInt(matchResult[1], 10) || 1;
          let layoutSource = window.formRegistry[registryKey];
          let compiledHtmlMarkup = "";

          if (typeof layoutSource === "string" && layoutSource.trim().startsWith("function")) {
            try {
              const executableParsedFunction = new Function(`return (${layoutSource.trim()})`)();
              compiledHtmlMarkup = executableParsedFunction(stateOptions);
            } catch (evalError) {
              compiledHtmlMarkup = layoutSource;
            }
          } else if (typeof layoutSource === "function") {
            compiledHtmlMarkup = layoutSource(stateOptions);
          } else {
            compiledHtmlMarkup = String(layoutSource);
          }

          if (compiledHtmlMarkup && compiledHtmlMarkup.includes("<")) {
            verifiedTemplates.push({ html: compiledHtmlMarkup.trim(), step: stepNumber });
          }
        }
      });
    }

    // --- DOM RENDERING BLOCK WITH FULL EXPANSION RULES ---
    if (!formInjectionWrapper) {
      formInjectionWrapper = document.createElement("div");
      formInjectionWrapper.className = "isolated-form-payload-container";
      // ⚡ FORCE MASTER CONTAINER BREAKOUT
      formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;";
      fieldsRoot.insertBefore(formInjectionWrapper, fieldsRoot.firstChild);
    } else {
      // ⚡ FORCE OVERRIDE IF CONTAINER ALREADY EXISTS
      formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;";
    }

    if (verifiedTemplates.length === 0) {
      console.warn(`[Lifecycle Engine] Compiled 0 rendering segments. Missing registry definitions for key: "${rawUrlSlug}".`);
      return;
    }

    // Order elements sequentially matching exact wizard step index numbers
    verifiedTemplates.sort((a, b) => a.step - b.step);
    formInjectionWrapper.innerHTML = "";

    verifiedTemplates.forEach((item) => {
      const rowContainer = document.createElement("div");
      rowContainer.className = "service-form-part-segment";
      rowContainer.setAttribute("data-part-index", item.step);
      // ⚡ FORCE INDIVIDUAL SEGMENTS TO TAKE UP THE WHOLE BLOCK STAGE TOO
      rowContainer.style.cssText = "grid-column: 1 / -1 !important; display: block !important; width: 100% !important; max-width: 100% !important; clear: both !important; margin-bottom: 24px !important; box-sizing: border-box;";
      rowContainer.innerHTML = item.html;
      formInjectionWrapper.appendChild(rowContainer);
    });

    console.log(`[Lifecycle Engine Success] Form segments successfully injected for tracking channel: "${rawUrlSlug}".`);
  } catch (globalEngineError) {
    console.error("[Fatal Form Injection Pipeline Exception]", globalEngineError);
  }
}

// Bind cleanly back up to the primary document tree window reference context
window.executeStepTwoDynamicFormInjection = executeStepTwoDynamicFormInjection;
