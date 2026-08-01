// ============================================================================ // 
// ðŸ“ GLOBAL SYSTEM STATE REGISTRY MATRIX (INITIALIZE TO PREVENT RACE ERRORS)     // 
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
        
        // Safety lock flag prevents the inline onfocus attribute from infinite re-triggering loops
        if (elementInputRef) {
            elementInputRef.removeAttribute("onfocus");
        }
    };
}

// ============================================================================ // 
// ðŸ”— URL PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE (DYNAMIC)    // 
// ============================================================================ // 
function initializeUrlParameterParserEngineVanilla() { 
    const searchUrlQueryStrings = new URLSearchParams(window.location.search); 
    
    // Read from URL parameters first, fallback to cached LocalStorage memory context strings
    const queryPassedService = searchUrlQueryStrings.get('service') || localStorage.getItem('wizard_service_key'); 
    const queryPassedPlan = searchUrlQueryStrings.get('plan') || localStorage.getItem('wizard_plan_tier_key'); 
    
    const inputServiceNode = document.getElementById("wizard-route-service-id"); 
    const inputPlanNode = document.getElementById("wizard-route-tier-id"); 

    // 1. Parse incoming website page targets and translate to full names dynamically 
    if (queryPassedService) { 
        window.routeActiveServiceKey = queryPassedService.toLowerCase().trim(); 
        localStorage.setItem('wizard_service_key', window.routeActiveServiceKey); // Persist immediately
        
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
        localStorage.setItem('wizard_plan_tier_key', window.routeActivePlanKey); // Persist immediately
        
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

    // 3. ðŸŸ¢ SECURE LIFECYCLE ROUTER ENGAGEMENT:
    // Only compile the dynamic sub-form layout blocks on boot if we have an active page target key
    if (window.routeActiveServiceKey) {
        if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
            window.executeStepTwoDynamicFormInjection(true, window.routeActiveServiceKey); 
        } else if (typeof window.executeDynamicRegulatoryFieldInjection === "function") { 
            window.executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey); 
        } 
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
    // RECOVER PATH: Pulls data out of local storage and repopulates the DOM        // 
    // ============================================================================ // 
    if (isExecutionInitialLoad) { 
        const restoredPayloadString = localStorage.getItem(cacheKeyNamespace); 
        
        // Even if the master JSON object doesn't exist yet, populate any separate isolated field records
        window.isWizardCurrentlyRestoringStateVanilla = true;
        
        try { 
            if (restoredPayloadString) {
                const payloadDataObject = JSON.parse(restoredPayloadString); 
                
                Object.keys(payloadDataObject).forEach(fieldIdKey => { 
                    // Double-lookup selector fallbacks: Match by ID first, then fallback to Name attribute
                    let inputNode = document.getElementById(fieldIdKey); 
                    if (!inputNode) { 
                        inputNode = document.querySelector(`input[name="${fieldIdKey}"], select[name="${fieldIdKey}"], textarea[name="${fieldIdKey}"]`); 
                    } 
                    if (inputNode) { 
                        let finalExtractedValue = payloadDataObject[fieldIdKey]; 
                        
                        const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || inputNode.type === 'password' || inputNode.type === 'tel'; 
                        if (isSecureElement && typeof finalExtractedValue === "string" && finalExtractedValue !== "") { 
                            finalExtractedValue = executeCipherTranslation(finalExtractedValue, true); 
                        } 
                        
                        if (inputNode.type === 'checkbox') { 
                            inputNode.checked = (finalExtractedValue === true || finalExtractedValue === "true"); 
                        } else { 
                            inputNode.value = finalExtractedValue; 
                        } 
                        
                        // Fire native input events so visibility models and summary mirrors capture changes
                        inputNode.dispatchEvent(new Event('change', { bubbles: true })); 
                        inputNode.dispatchEvent(new Event('input', { bubbles: true })); 
                    } 
                }); 
            }
        } catch (jsonErr) { 
            console.error("State data recovery parse error loop encountered: ", jsonErr); 
        } 
        
        // ðŸ”„ Sync single root properties to isolated key sets for strict step 5 data hydrators
        Object.keys(localStorage).forEach(storageKey => {
            if (storageKey.startsWith("wizard_field_")) {
                const standardHtmlId = storageKey.replace("wizard_field_", "");
                let targetNode = document.getElementById(standardHtmlId) || document.querySelector(`[name="${standardHtmlId}"]`);
                if (targetNode && !targetNode.value) {
                    targetNode.value = localStorage.getItem(storageKey);
                    targetNode.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        });

        window.isWizardCurrentlyRestoringStateVanilla = false; 
    } 

    // ============================================================================ // 
    // SAVE PATH: Collects data out of the DOM and pushes to local storage          // 
    // ============================================================================ // 
    if (!isExecutionInitialLoad) { 
        if (window.isWizardCurrentlyRestoringStateVanilla) return; 
        try { 
            const currentCacheData = JSON.parse(localStorage.getItem(cacheKeyNamespace) || "{}"); 
            
            // ðŸŸ¢ FIXED SELECTOR: Targets both classes and panel IDs universally without breaking
            const inputs = document.querySelectorAll(".wizard-panel input, .wizard-panel select, .wizard-panel textarea"); 
            
            inputs.forEach(inputNode => { 
                const key = inputNode.id || inputNode.name; 
                if (!key) return; 
                
                let valToSave = inputNode.type === 'checkbox' ? inputNode.checked : inputNode.value; 
                
                const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || inputNode.type === 'password' || inputNode.type === 'tel'; 
                if (isSecureElement && typeof valToSave === "string" && valToSave !== "") { 
                    valToSave = executeCipherTranslation(valToSave, false); 
                } 
                
                // Save inside the synchronized framework object
                currentCacheData[key] = valToSave; 
                
                // ðŸ§  CRITICAL RESOLUTION: Save directly into isolated namespace strings so Step 5 reads them perfectly!
                localStorage.setItem(`wizard_field_${key}`, String(valToSave));
            }); 
            
            localStorage.setItem(cacheKeyNamespace, JSON.stringify(currentCacheData)); 
        } catch (saveErr) { 
            console.error("State data saving write loop error encountered: ", saveErr); 
        } 
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
    const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 
    
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

    // 3. EVALUATE LEGAL CONSENT CHECKBOX (FIXED TRAP LOOP)
    if (consentCheckbox) { 
        isConsentChecked = consentCheckbox.checked; 
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
// ðŸ—ºï¸ UNIVERSAL DYNAMIC PARAMETER CAPTURE ENGINE (WITH PATH ISOLATED GUARD)     // 
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

    // ðŸ›‘ PATH ISOLATED ROUTING GUARD: 
    // Only bounce the user if they are currently inside the deep step onboarding wizard paths. 
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

    // Pure data-driven normalization mapping 
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

    // Safety Boundary Guard: Wait up to network threads resolution loops if database is pending 
    if (!coreDatabaseRegistry || !coreDatabaseRegistry[sanitizedServiceKey]) { 
        console.log(`[Boot Sync Delay] Central service database unparsed for key "${sanitizedServiceKey}". Re-queueing...`); 
        setTimeout(autoInjectMainWebsitePricingPlan, 100); 
        return; 
    } 

    // 1. Commit incoming parameters safely to active global tracker fields and local storage links
    window.routeActiveServiceKey = sanitizedServiceKey; 
    window.routeActivePlanKey = urlPlan.toLowerCase().trim(); 
    localStorage.setItem('wizard_service_key', window.routeActiveServiceKey);
    localStorage.setItem('wizard_plan_tier_key', window.routeActivePlanKey);

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
        localStorage.setItem('wizard_selected_state', window.selectedFormationStateCode);
    } 

    // 2. Compute state filing variables cleanly via dynamic module provider hooks 
    if (window.selectedFormationStateCode && typeof resolveActiveStateFee === "function") { 
        resolveActiveStateFee(window.selectedFormationStateCode, window.routeActiveServiceKey); 
    } 

    // 3. Mirror the computed data cleanly to input elements text buffers 
    if (textInputService) { 
        textInputService.value = coreDatabaseRegistry[window.routeActiveServiceKey]?.name || urlService; 
        localStorage.setItem('wizard_field_selected_package_offering', textInputService.value);
    } 
    if (textInputPlan && window.routeActivePlanKey) { 
        const rawTier = window.routeActivePlanKey; 
        textInputPlan.value = rawTier.charAt(0).toUpperCase() + rawTier.slice(1); 
        localStorage.setItem('wizard_field_selected_plan_tier', textInputPlan.value);
    } 

    // 4. Execute marketing decoration layouts safely inside localized parameters 
    const currentPlanConfig = coreDatabaseRegistry[window.routeActiveServiceKey]; 
    if (currentPlanConfig && typeof processDynamicMarketingLayoutDecorations === "function") { 
        processDynamicMarketingLayoutDecorations(currentPlanConfig, window.routeActivePlanKey); 
    } 

    // 5. Force single structured calculations totals pass 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

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

    // PROGRESSIVE STATE MERGE RECOVERY: Read existing cache records first so items don't get deleted
    let activeFormMetricsObject = {}; 
    try { 
        const preExistingCacheString = localStorage.getItem(cacheKeyNamespace); 
        if (preExistingCacheString) { 
            activeFormMetricsObject = JSON.parse(preExistingCacheString) || {}; 
        } 
    } catch (parseCacheErr) { 
        console.warn("[State Engine] Baseline cache was unreadable, initializing clean payload.", parseCacheErr); 
    } 

    // ðŸŸ¢ FIXED SELECTOR CONTEXT: Target only fields located within the currently active view container panel
    const currentActiveStepView = document.querySelector(".wizard-panel.active") || 
                                  document.querySelector(".wizard-panel:not([style*='display: none'])") || 
                                  document.body;
                                  
    const allInputElements = currentActiveStepView.querySelectorAll("input, select, textarea"); 

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
            
            // ðŸ§  CRITICAL TRANSFER FIX: Push to single namespace keys so the Step 5 compilation layout captures it live!
            localStorage.setItem(`wizard_field_${uniqueDataKey}`, String(elementValueToCache));
        } 
    }); 

    try { 
        localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject)); 
        console.log("[State Engine] Active form parameters saved to localStorage successfully."); 
    } catch (writeErr) { 
        console.error("[State Engine Fatal] LocalStorage write allocation failed:", writeErr); 
    } 
} 

// Export the tracking methods safely into the global window bounds
window.evaluatePoaInputStateMatrix = typeof evaluatePoaInputStateMatrix !== "undefined" ? evaluatePoaInputStateMatrix : window.evaluatePoaInputStateMatrix; 
window.autoInjectMainWebsitePricingPlan = autoInjectMainWebsitePricingPlan; 
window.saveWizardFormStatesVanilla = saveWizardFormStatesVanilla;



/**
 * filings4u, LLC - Master Unified Wizard Boot Engine Layer (Block 1 of 2)
 * Pure dynamic architecture: Controls entry validations, data hydration, URL parsing,
 * element sync, visibility clipping constraints, and frame-zero pricing calculation sweeps.
 */
window.wizardBootRetryAttempts = window.wizardBootRetryAttempts || 0;

async function runUnifiedWizardBootEngine() {
    console.log("[Boot Engine] Initializing sequence-independent parameter scanning...");

    // ============================================================================ //
    // 1. SEQUENCE-AGNOSTIC EXTRACTION (Pure Dynamic Context Mapping)                //
    // ============================================================================ //
    const urlEngineParams = new URLSearchParams(window.location.search);
    
    // Check URL parameters first, fallback to cached storage identifiers to preserve framework routing context
    let resolvedSlug = urlEngineParams.get('service') || urlEngineParams.get('package') || urlEngineParams.get('id') || localStorage.getItem('wizard_service_key') || "";
    let resolvedPlan = urlEngineParams.get('plan') || urlEngineParams.get('tier') || localStorage.getItem('wizard_plan_tier_key') || "";
    const resolvedState = urlEngineParams.get('state') || localStorage.getItem('wizard_selected_state') || "";

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
    // 2. TIMING PROTECTION SAFEGUARD (Network Polling Check)                       //
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
    // 3. SECURE PARAMETER INITIALIZATION                                          //
    // ============================================================================ //
    window.routeActiveServiceKey = sanitizedServiceKey;
    window.routeActivePlanKey = resolvedPlan.toLowerCase().trim();
    
    localStorage.setItem('wizard_service_key', window.routeActiveServiceKey);
    localStorage.setItem('wizard_plan_tier_key', window.routeActivePlanKey);

    if (resolvedState) {
        window.selectedFormationStateCode = resolvedState.toUpperCase().trim();
        localStorage.setItem('wizard_selected_state', window.selectedFormationStateCode);
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
        setTimeout;(function() {
            if (typeof runUnifiedWizardBootEngine === "function") {
                runUnifiedWizardBootEngine();
            }
        }, 50);
        return;
    }

    if (typeof autoInjectMainWebsitePricingPlan === "function") {
        autoInjectMainWebsitePricingPlan();
    }

    // ðŸŸ¢ STRUCTURAL STEP 2 TIMING SEQUENCE OVERRIDE:
    // If we are currently arriving at Step 2, compile and generate the dynamic input templates 
    // FIRST so that they exist in the DOM right before the cache data hydrator scans the screen!
    if (window.currentWizardActiveStep === 2) {
        if (typeof window.executeStepTwoDynamicFormInjection === "function") {
            await window.executeStepTwoDynamicFormInjection(true, window.routeActiveServiceKey);
        } else if (typeof executeDynamicRegulatoryFieldInjection === "function") {
            executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
        }
    }

    // Now that dynamic inputs are securely generated, trigger standard restoration data pass safely
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

    if (window.currentWizardActiveStep === 4) {
        if (typeof initCursiveSignatureCaptureLivePreview === "function") {
            window.initCursiveSignatureCaptureLivePreview();
        }
    }

    // ðŸ§  ðŸŸ¢ DYNAMIC EXPLICIT INTERCEPT: Force Step 5 summary compilation to fire right now!
    if (window.currentWizardActiveStep === 5) {
        if (typeof window.recalculateSummaryItemizedMatrixRows === "function") {
            console.log("[Boot Interlock Engine] Triggering Step 5 summary card calculations live pass...");
            window.recalculateSummaryItemizedMatrixRows();
        } else {
            console.warn("[Boot Engine Warning] recalculateSummaryItemizedMatrixRows method is unattached.");
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

// Bind cleanly back up to the primary document tree window reference context
window.runUnifiedWizardBootEngine = runUnifiedWizardBootEngine;

// ============================================================================ //
// ðŸ“Š PART 1 OF 2: UNIVERSAL STEP VALIDATION MATRIX ENGINE                      //
// ============================================================================ //

/**
 * Universal dynamic validation engine.
 * Validates formatting parameters per step and manages browser native validation messages.
 */
function validateStepInputParametersVanilla(activeStep) {
    console.log(`[Validator Engine] Scanning inputs inside step panel ${activeStep}...`);
    
    // Hard bypass: Let the dedicated POA matrix handle Step 4 evaluation completely
    if (parseInt(activeStep, 10) === 4) {
        if (typeof window.evaluatePoaInputStateMatrix === "function") {
            return window.evaluatePoaInputStateMatrix();
        }
        return true;
    }

    var activePanel = document.getElementById("step-panel-" + activeStep);
    if (!activePanel) return true;

    var inputs = activePanel.querySelectorAll("input, select, textarea");
    var stepIsValid = true;
    var firstInvalidElement = null; // Tracks the first mistake to focus on later

    // Upgraded: Supports global characters, accents, spaces, periods, and hyphens universally
    var regexLetters = /^[\p{L}\s.'\-]+$/u;
    var regexNumbers = /^\d+$/;
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    inputs.forEach(function(el) {
        if (el.type === "hidden" || el.disabled) return;
        var val = el.value.trim();

        // Clear native error flags immediately on each pass to prevent permanent locks
        el.setCustomValidity("");

        // 1. CHECK REQUIRED INPUT STATES
        if (el.hasAttribute("required") && val === "") {
            el.setCustomValidity("This field is required.");
            stepIsValid = false;
            if (!firstInvalidElement) firstInvalidElement = el;
        }
        // 2. CHECK FORMAT STRINGS IF FIELD IS POPULATED
        else if (val !== "") {
            // Email Input Patterns
            if (el.type === "email" || el.classList.contains("validate-email") || (el.name && el.name.toLowerCase().indexOf("email") !== -1)) {
                if (!regexEmail.test(val)) {
                    el.setCustomValidity("Please enter a valid email address.");
                    stepIsValid = false;
                    if (!firstInvalidElement) firstInvalidElement = el;
                }
            } 
            // Person/City Name Patterns (Excludes general entity name attributes to allow digits)
            else if (el.classList.contains("validate-letters") || (el.name && el.name.toLowerCase().indexOf("first_name") !== -1) || (el.name && el.name.toLowerCase().indexOf("last_name") !== -1) || (el.name && el.name.toLowerCase().indexOf("city") !== -1)) {
                if (!regexLetters.test(val)) {
                    el.setCustomValidity("This field can only contain letters, spaces, hyphens, or periods.");
                    stepIsValid = false;
                    if (!firstInvalidElement) firstInvalidElement = el;
                }
            } 
            // Numeric Input Patterns
            else if (el.type === "number" || el.classList.contains("validate-numbers") || (el.name && el.name.toLowerCase().indexOf("zip") !== -1) || (el.name && el.name.toLowerCase().indexOf("ein") !== -1)) {
                if (!regexNumbers.test(val)) {
                    el.setCustomValidity("This field can only contain numbers.");
                    stepIsValid = false;
                    if (!firstInvalidElement) firstInvalidElement = el;
                }
            }
        }
    });

    // SINGLE REPORT PASS: Focus the cursor on the first error found and report it
    if (!stepIsValid && firstInvalidElement) {
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidElement.reportValidity();
    }

    return stepIsValid;
}

// Expose verification layers back to global tracking objects securely
window.validateStepInputParametersVanilla = validateStepInputParametersVanilla;
// ============================================================================ //
// ðŸ“Š PART 2 OF 2: POWER OF ATTORNEY REAL-TIME INTEGRATION ENGINE               //
// ============================================================================ //

/**
 * filings4u, LLC - Power of Attorney Execution Matrix Engine
 * Validates step 4 signature inputs independently and manages interaction permissions.
 */
function evaluatePoaInputStateMatrix() { 
    console.log("[POA Matrix] Checking Step 4 digital signature fields..."); 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 1. Validate full name entry (Checks that user typed at least 2 words separated by a space)
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
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

    // 3. Update Button UI & Interactions Immediately 
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
 * Automates listener bindings to prevent duplicate execution loop stacking. 
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

// ðŸ“¦ GLOBAL EXPOSURE AND BINDING PASSES 
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix; 
window.attachPoaValidationListeners = attachPoaValidationListeners;


// Execute initialization binding when components land on screen 
document.addEventListener("DOMContentLoaded", () => { 
    // 1. Invoke your unified platform boot sequence securely if it is initialized 
    if (typeof window.runUnifiedWizardBootEngine === "function") { 
        window.runUnifiedWizardBootEngine(); 
    } else if (typeof window.runCombinedMasterBootSequence === "function") { 
        window.runCombinedMasterBootSequence(); 
    } 

    // 2. Safe execution of dynamic signature state listeners once elements exist in the DOM
    if (typeof window.attachPoaValidationListeners === "function") {
        window.attachPoaValidationListeners(); 
    }
    if (typeof window.evaluatePoaInputStateMatrix === "function") {
        window.evaluatePoaInputStateMatrix(); 
    }

    // 3. ðŸŸ¢ SECURE MUTATION OBSERVER BINDING LAYER:
    // We bind the observer inside DOMContentLoaded to guarantee the elements exist!
    const poaObserverTarget = document.getElementById("step-panel-4"); 
    if (poaObserverTarget) { 
        const poaVisibilityObserver = new MutationObserver(() => { 
            if (poaObserverTarget.style.display !== "none") { 
                if (typeof window.attachPoaValidationListeners === "function") window.attachPoaValidationListeners(); 
                if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix(); 
            } 
        }); 
        poaVisibilityObserver.observe(poaObserverTarget, { attributes: true, attributeFilter: ["style"] }); 
        console.log("[Dynamic Registry] Power of Attorney MutationObserver bound successfully.");
    } else {
        console.warn("[Dynamic Registry Warning] step-panel-4 container element was missing during observer allocation.");
    }
}); 

console.log("[Dynamic Registry] Power of Attorney input evaluation matrix script file pass initialized.");


// ============================================================================ // 
// ðŸ”Œ CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE (STATE-AWARE BOOTSTRAPPER) // 
// ============================================================================ // 

/** 
 * Master platform lifecycle execution bootstrapper. 
 * Connects parameters parsers and schedules interface injections sequentially. 
 */ 
function runUnifiedPlatformLifecycleBoot() { 
    console.log("[Lifecycle Engine] Triggering application operational boot sequence..."); 
    
    // ðŸ›¡ï¸ RUNTIME PIPELINE GUARD: Verify configuration rules before parsing
    const isCoreDatabaseReady = typeof window.getPricingConfiguration === "function" || window.CENTRAL_SERVICE_PLAN_DB; 
    if (!isCoreDatabaseReady) { 
        console.warn("[Lifecycle Engine Guard] Core data configuration or pricing methods are not yet ready. Retrying boot sequence in 50ms..."); 
        setTimeout;(function() { 
            window.runUnifiedPlatformLifecycleBoot(); 
        }, 50); 
        return; 
    } 

    // Appends outer margins safely without forcing flex definitions that collapse step visibility tracks! 
    const wizardContainerElement = document.querySelector(".wizard-container"); 
    if (wizardContainerElement) { 
        wizardContainerElement.style.setProperty('margin', '50px auto 0 auto', 'important'); 
        wizardContainerElement.style.setProperty('max-width', '1450px', 'important'); 
        wizardContainerElement.style.setProperty('width', '100%', 'important'); 
    } 

    // Clear out any previous inline overrides on form elements to restore original visibility context instantly 
    const masterFormElement = document.getElementById("master-onboarding-form") || document.querySelector(".master-onboarding-form"); 
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

    // Initialize tracking layouts database safely
    if (typeof window.autoInjectMainWebsitePricingPlan === "function") { 
        window.autoInjectMainWebsitePricingPlan(); 
    } else if (typeof window.initializeUrlParameterParserEngineVanilla === "function") { 
        window.initializeUrlParameterParserEngineVanilla(); 
    } 

    if (typeof window.initializeDigitalSignatureMirrorSync === "function") { 
        window.initializeDigitalSignatureMirrorSync(); 
    } 

    // ðŸŸ¢ STRUCTURAL INTEGRATION FIX:
    // Only restore cached form inputs directly here if the current active target view is NOT Step 2.
    // Step 2 elements are loaded asynchronously and are handled inside runUnifiedWizardBootEngine().
    const currentActiveStepIndex = parseInt(window.currentWizardActiveStep, 10) || 1;
    if (currentActiveStepIndex !== 2) {
        if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") { 
            window.cacheAndRestoreWizardFormStatesVanilla(true); 
        } 
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
async function runCombinedMasterBootSequence() { 
    console.log("[Master Orchestrator] Triggering single synchronized boot frame..."); 
    
    // 1. Kick off URL params parsing, view clipping, and step-aware form injections FIRST
    if (typeof window.runUnifiedWizardBootEngine === "function") { 
        await window.runUnifiedWizardBootEngine(); 
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
// ðŸ”˜ DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS (SELF-HOOKING FRAMEWORK)   //
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
    console.log("[DBA Engine] Binding dynamic condition listeners to field components...");
    
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
                    
                    // Force a storage capture on form change so variables stick instantly
                    if (typeof window.saveWizardFormStatesVanilla === "function") {
                        window.saveWizardFormStatesVanilla();
                    }
                });
                targetElement.dataset.routingHooked = "true";
            }
        }
    });
}

// Expose discovery tool globally so your wizard aggregator engine can invoke it post-render pass
window.autoDiscoverAndHookInteractiveDbaFields = autoDiscoverAndHookInteractiveDbaFields;


// ============================================================================ //
// ðŸ“Š PART 4: LLC MEMBERSHIP CONTROLLER                                         //
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
        // ðŸŸ¢ FIXED MARUKUP STRUCTURAL ENHANCEMENT: Re-added opening select tag with name/id properties
        singleMemberBox.innerHTML = 
            '<div class="wizard-input-group" style="margin-top: 14px; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; grid-column: span 2; box-sizing: border-box;">' +
                '<label for="sole_member_choice" style="font-weight: 700; color: var(--navy); display: block; margin-bottom: 8px; font-size:0.85rem;">Are you the 1 Member of this company? *</label>' +
                '' +
                    '<option value="">-- Choose Option --</option>' +
                    '<option value="yes">Yes, I am the sole owner</option>' +
                    '<option value="no">No, someone else is the owner</option>' +
                '</select>' +
            '</div>';
            
        // Trigger a safe storage pass so the master state registry notes we selected 1 member
        if (typeof window.saveWizardFormStatesVanilla === "function") {
            window.saveWizardFormStatesVanilla();
        }
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
    
    // Save selection immediately when the user confirms ownership status
    if (typeof window.saveWizardFormStatesVanilla === "function") {
        window.saveWizardFormStatesVanilla();
    }
}

// Export methods cleanly back into global window boundaries
window.handleMembershipDropdownChange = handleMembershipDropdownChange;
window.handleSoleMemberIdentityToggle = handleSoleMemberIdentityToggle;


// ============================================================================ // 
// ðŸ“¡ LATE-BINDING MUTATION LISTENER BRIDGE                                     // 
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
    if (typeof autoDiscoverAndHookInteractiveDbaFields === "function") {
        autoDiscoverAndHookInteractiveDbaFields(); 
    }
}); 

// ============================================================================ // 
// ðŸ§  MODULAR ATTACHMENT: VANILLA STATE SCRAPER FOR STEP HYDRATION              // 
// ============================================================================ // 
window.saveWizardFormStatesVanilla = function() { 
    console.log("[State Engine] Triggering global form parameter data collection pass..."); 
    try { 
        // Find whichever panel is currently visible to the user on the screen 
        const currentActivePanel = document.querySelector(".wizard-panel.active") || 
                                   document.querySelector(".wizard-panel:not([style*='display: none'])") || 
                                   document.body; 

        // 1. Collect all standard alphanumeric fields, textareas, hidden items, and selectors 
        const formFields = currentActivePanel.querySelectorAll("input:not([type='checkbox']):not([type='radio']), select, textarea"); 
        formFields.forEach(fieldItem => { 
            const fieldIdentifier = fieldItem.id || fieldItem.name; 
            if (fieldIdentifier) { 
                localStorage.setItem(`wizard_field_${fieldIdentifier}`, fieldItem.value); 
                
                // Explicit backup rules for state definitions 
                if (fieldIdentifier.includes("state") || fieldIdentifier.includes("formation")) { 
                    localStorage.setItem('wizard_selected_state', fieldItem.value); 
                } 
            } 
        }); 

        // 2. Collect all active checkmarks and verification agreement selections 
        const checkboxes = currentActivePanel.querySelectorAll("input[type='checkbox']"); 
        checkboxes.forEach(boxItem => { 
            const boxIdentifier = boxItem.id || boxItem.name; 
            if (boxIdentifier) { 
                // ðŸŸ¢ UNIFIED STORAGE RESOLUTION: 
                // Save exactly as wizard_field_ to stay perfectly aligned with your Step 5 template loop!
                localStorage.setItem(`wizard_field_${boxIdentifier}`, boxItem.checked ? "true" : "false"); 
            } 
        }); 

        console.log("[State Engine Success] Active layout fields successfully serialized."); 
    } catch (scrapingException) { 
        console.warn("[State Engine Error] Failed to safely cache form elements:", scrapingException); 
    } 
}; 

// ============================================================================ // 
// ðŸ§­ WIZARD NAVIGATION & APPLICATION TIMELINE PROGRESS LIGHTS (DYNAMIC)         // 
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

    // CALLS THE ATTACHED DATA SCRAPER BEFORE PANEL ROTATION 
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

    // INTERCEPT NAVIGATION TARGET AND FORCE DYNAMIC RECALCULATION FOR STEP 5 
    if (parseInt(activeStepTarget, 10) === 5 && typeof window.recalculateSummaryItemizedMatrixRows === "function") { 
        console.log("[Navigation Matrix Linker] Routing view directly into Step 5 compilation engine..."); 
        window.recalculateSummaryItemizedMatrixRows(); 
    } 

    // CRITICAL SYSTEM INTERLOCK INTEGRATION: 
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

// Map variables cleanly back into global scope contexts
window.goToNextWizardStep = goToNextWizardStep;
window.goToPreviousWizardStep = goToPreviousWizardStep;
window.switchWizardActiveViewLayout = switchWizardActiveViewLayout;


// ============================================================================ // 
// ðŸ—ºï¸ PART 4: MULTI-SIDEBAR TIMELINE NAV LIGHTS ENGINE (SOLID EMERALD)           // 
// ============================================================================ // 
function updateApplicationMapTimelineBubbles(currentStepIndex) { 
    const activeStep = parseInt(currentStepIndex, 10) || 1; 
    console.log(`[Multi-Sidebar Progress] Illuminating timeline nodes for step: ${activeStep}`); 

    for (let i = 1; i <= 7; i++) { 
        // querySelectorAll captures all matching sidebar elements across desktop & mobile stacks safely
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
                titleNode.style.setProperty("color", "#64748b", "important"); // Muted Slate Grey text 
                titleNode.style.setProperty("font-weight", "500", "important"); 
            } 

            // Apply contextually accurate progress state designs 
            if (i === activeStep) { 
                // Active Step styling: SOLID Emerald Green Dot with glowing boundary ring
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
                    titleNode.style.setProperty("color", "#0a1f44", "important"); // High-contrast navy
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
window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubbles;


// ============================================================================ //
// ðŸŽ¨ PART 1: NEUTRAL SELECTION SKINNING MODULE (STEP 3 VIEW ISOLATION)         //
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
        const parentCard = checkbox.closest('.upsell-market-card') || checkbox.closest('.card') || checkbox.parentElement?.parentElement;
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

// ðŸ“¦ GLOBAL SCOPE REFERENCE EXPOSURE
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
// ðŸ›¡ï¸ PART 2: POWER OF ATTORNEY MATRIX CORE ENGINE (REAL-TIME STATE BACKGROUND)  //
// ============================================================================ //
window.hasUserScrolledToBottomPoa = window.hasUserScrolledToBottomPoa || false;

/**
 * Validates text inputs, checkbox marks, and scroll values silently to toggle button access.
 */
function evaluatePoaInputStateMatrix() {
    console.log("[POA Matrix] Actively evaluating Step 4 digital signature states...");
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
    const consentCheckbox = document.getElementById("poa_consent_checkbox");
    const nextStepButton = document.getElementById("poa-next-btn") || 
                           document.querySelector("#step-panel-4 .btn-wizard-main") || 
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
            nextStepButton.style.pointerEvents = "none";
        }
        return false; // Lock navigation exit until mandate scroll completes
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

/**
 * Attaches real-time scroll handlers to the legal mandate text block
 * to unlock interaction vectors the moment the user reaches the bottom bounds.
 */
function initPoaScrollTrackingEngine() {
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");
    if (!scrollBox) return;

    // Remove any older duplicate listener links before attaching fresh operational hooks
    scrollBox.removeEventListener("scroll", handlePoaScrollEventPass);
    scrollBox.addEventListener("scroll", handlePoaScrollEventPass);
    
    // Fire an immediate pass check in case the block text fits entirely inside the window without scrollbars
    setTimeout(handlePoaScrollEventPass, 300);
}

function handlePoaScrollEventPass() {
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");
    if (!scrollBox) return;

    // Calculate vertical metrics: scrollHeight - scrollTop gives the current vertical browser display location
    const calculatedScrollThreshold = scrollBox.scrollHeight - scrollBox.scrollTop;
    const actualBoxOffsetHeight = scrollBox.clientHeight;
    
    // 20px error tolerance window guarantees small fractions do not break client unlocking mechanics
    if (calculatedScrollThreshold - actualBoxOffsetHeight <= 20) {
        if (!window.hasUserScrolledToBottomPoa) {
            console.log("[POA Matrix Engine] User successfully reached the bottom boundary line of the legal mandate. Unlocking form controls.");
            window.hasUserScrolledToBottomPoa = true;
            
            // Instantly re-run matrix calculations to remove style locks
            evaluatePoaInputStateMatrix();
        }
    }
}

// ðŸ“¦ GLOBAL SCOPE REFERENCE EXPOSURE
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;
window.initPoaScrollTrackingEngine = initPoaScrollTrackingEngine;

// Hook up scroll tracking listeners as soon as elements register on screen layouts
document.addEventListener("DOMContentLoaded", () => {
    window.initPoaScrollTrackingEngine();
});

// ============================================================================ //
// ðŸ›¡ï¸ PART 1 OF 2: COVENANTS WARNING BANNERS & GATES                           //
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

    // ðŸš© Validation Gate 1: Track terms scroll completion block
    if (!window.hasUserScrolledToBottomPoa) {
        displayOrangePoaWarningBanner("Action Required: Please scroll down to the bottom of the disclosure document container to verify and clear the onboarding terms block.");
        return false;
    }

    // ðŸš© Validation Gate 2: Track signature name string text values
    if (!isSignatureValid) {
        displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature field box.");
        if (signatureInput) signatureInput.focus();
        return false;
    }

    // ðŸš© Validation Gate 3: Track checkbox verification confirmation choices
    if (!isConsentChecked) {
        displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols.");
        if (consentCheckbox) consentCheckbox.focus();
        return false;
    }

    const existingWarning = document.getElementById("poa-orange-alert-banner");
    if (existingWarning) existingWarning.remove();
    
    return true;
}

// ðŸ“¦ GLOBAL SCOPE REFERENCE EXPOSURE
window.checkPoaInputStateSilently = checkPoaInputStateSilently;
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate;
window.displayOrangePoaWarningBanner = displayOrangePoaWarningBanner;

// ============================================================================ //
// ðŸ›¡ï¸ PART 2 OF 2: COMPLIANCE LISTENERS & UNFREEZERS                            //
// ============================================================================ //

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
 * Safely binds text events and scrolling thread listeners to page structures.
 * Consolidates dynamic feedback loops to eliminate race issues.
 */
function attachPoaValidationListeners() {
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
    const consentCheckbox = document.getElementById("poa_consent_checkbox");
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");

    if (signatureInput && !signatureInput.dataset.listenerActive) {
        signatureInput.addEventListener("input", () => {
            checkPoaInputStateSilently();
            if (typeof window.evaluatePoaInputStateMatrix === "function") {
                window.evaluatePoaInputStateMatrix();
            }
        });
        signatureInput.dataset.listenerActive = "true";
    }

    if (consentCheckbox && !consentCheckbox.dataset.listenerActive) {
        consentCheckbox.addEventListener("change", () => {
            checkPoaInputStateSilently();
            if (typeof window.evaluatePoaInputStateMatrix === "function") {
                window.evaluatePoaInputStateMatrix();
            }
        });
        consentCheckbox.dataset.listenerActive = "true";
    }

    if (scrollBox && !scrollBox.dataset.scrollHooked) {
        scrollBox.addEventListener("scroll", function(e) {
            const target = e.target;
            // 15px allowance window ensures rounding edge cases don't lock progression handles
            if (target.scrollHeight - target.scrollTop <= target.clientHeight + 15) {
                if (!window.hasUserScrolledToBottomPoa) {
                    window.hasUserScrolledToBottomPoa = true;
                    checkPoaInputStateSilently();
                    if (typeof window.evaluatePoaInputStateMatrix === "function") {
                        window.evaluatePoaInputStateMatrix();
                    }
                }
            }
        });
        scrollBox.dataset.scrollHooked = "true";
    }
}

// ðŸ“¦ GLOBAL SCOPE REFERENCE EXPOSURE
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputs;
window.attachPoaValidationListeners = attachPoaValidationListeners;

// Mutation Observer Initialization: Runs only once layout components have settled on screen
document.addEventListener("DOMContentLoaded", () => {
    const poaActivePanelTarget = document.getElementById("step-panel-4") || document.getElementById("step-4");
    if (poaActivePanelTarget) {
        const poaLifecycleObserver = new MutationObserver(() => {
            if (poaActivePanelTarget.style.display !== "none") {
                forceUnfreezeStep4FormInputs();
                attachPoaValidationListeners();
                if (typeof window.evaluatePoaInputStateMatrix === "function") {
                    window.evaluatePoaInputStateMatrix();
                }
            }
        });
        poaLifecycleObserver.observe(poaActivePanelTarget, { attributes: true, attributeFilter: ["style"] });
    }
});


// ============================================================================ //
// ðŸŽ¨ CORPORATE DESIGN RE-SKIN: UNIFIED APPLICATION COMPLIANCE BANNER          //
// ============================================================================ //

/**
 * Generates an elegantly skinned, context-aware notification banner.
 * Matches your core design palette: Navy Blue (#0a1f44) and Emerald Green (#10b981).
 * @param {string} messageText - The contextual compliance warning string to display.
 */
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
    
    warningBox.innerHTML = ` 
        <i class="fa-solid fa-circle-info" style="color: #10b981; font-size: 1.15rem; flex-shrink: 0;"></i> 
        <span style="line-height: 1.4; color: #0a1f44; font-weight: 600;">${messageText}</span> 
    `; 
    warningBox.scrollIntoView({ behavior: "smooth", block: "center" }); 
} 

window.displayOrangePoaWarningBanner = displayOrangePoaWarningBanner; 

// ðŸŸ¢ WORKSPACE INTERACTION LOCK-RELEASE HOOK:
function initializeStep4MutationObserverTracking() { 
    const targetPanelNode = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (!targetPanelNode) return; 

    const poaUnlockObserver = new MutationObserver((mutations) => { 
        if (targetPanelNode.style.display !== "none") { 
            console.log("[POA Matrix] Step 4 active view mount detected. Forcing field click authorizations..."); 
            if (typeof forceUnfreezeStep4FormInputs === "function") forceUnfreezeStep4FormInputs(); 
            if (typeof attachPoaValidationListeners === "function") attachPoaValidationListeners(); 
        } 
    }); 
    
    poaUnlockObserver.observe(targetPanelNode, { attributes: true, attributeFilter: ["style"] }); 
    window.poaUnlockObserverInstance = poaUnlockObserver; 
} 

// ============================================================================ //
// ðŸ—ºï¸ STEP 3 RENDER TARGET SYNCHRONIZATION BRIDGE (TIMING RESILIENT)           //
// ============================================================================ //
function autoInitializeStep3MarketplaceCatalog() {
  const htmlMarketplaceBox = document.getElementById("wizard-dynamic-upsells-render-target");
  
  // ðŸ›¡ï¸ TIMING PROTECTION SAFEGUARD: Verify global state config arrays before loading
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

// Unified Startup Execution Registration Pass
if (document.readyState !== "loading") {
  if (typeof initializeStep4MutationObserverTracking === "function") initializeStep4MutationObserverTracking();
  autoInitializeStep3MarketplaceCatalog();
} else {
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof initializeStep4MutationObserverTracking === "function") initializeStep4MutationObserverTracking();
    autoInitializeStep3MarketplaceCatalog();
  });
}

// ============================================================================ //
// ðŸ› ï¸ REPAIRED WORKSPACE CARD COMPILER (EMPTY DESCRIPTION FILTERING PASS)       //
// ============================================================================ //
function renderTargetUpsellsListPanel(catalog, renderTarget) {
  if (!catalog || !renderTarget) return {};
  
  if (Object.keys(catalog).length > 0) {
    // ðŸŸ¢ DOM OPTIMIZATION: Clear container safely before beginning item loop node constructions
    renderTarget.innerHTML = "";
    
    const mappingCoordinates = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
    
    Object.keys(catalog).forEach(catalogSlug => {
      const item = catalog[catalogSlug];
      if (!item) return;

      // THE CRITICAL VISUAL RESET FIX: Skip and block rendering on Step 3 if description is blank
      const itemDesc = item.description || item.desc || "";
      if (!itemDesc || itemDesc.trim() === "") {
        return; 
      }

      const stateTrackingKey = mappingCoordinates[catalogSlug] || catalogSlug;
      const isFlagTrue = window[stateTrackingKey] === true || window[stateTrackingKey] === "yes" || String(window[stateTrackingKey]) === "true";
      const itemName = item.label || item.name;
      const itemPrice = parseFloat(item.price) || 0;

      // ðŸŸ¢ NODE INJECTION TECHNIQUE: Build elements iteratively to prevent heavy structural resets
      const cardElement = document.createElement("div");
      cardElement.className = "upsell-market-card";
      cardElement.style.cssText = "background:#ffffff; border:1px solid #e2e8f0; padding:16px; border-radius:8px; display:flex; gap:16px; align-items:center; justify-content:space-between; box-sizing:border-box; width:100%; transition:all 0.2s ease; margin-bottom: 12px;";
      
      cardElement.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:4px; min-width:0; flex:1;">
          <span style="font-weight:800; font-size:1rem; color:#0a1f44;">${itemName}</span>
          <p style="margin:0; font-size:0.85rem; color:#64748b; line-height:1.4;">${itemDesc}</p>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px; flex-shrink:0;">
          <span style="font-family:monospace; font-weight:700; color:#10b981; font-size:1.1rem;">$${itemPrice.toFixed(2)}</span>
          <label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; font-weight:700; color:#0a1f44; cursor:pointer; margin:0;">
            <input type="checkbox" class="upsell-checkbox" id="${stateTrackingKey}" data-id="${catalogSlug}" data-price="${itemPrice}" data-name="${itemName}" style="width:18px; height:18px; cursor:pointer;" ${isFlagTrue ? 'checked' : ''} onchange="window.handleBackgroundUpsellTogglePass(this)">
            Activate
          </label>
        </div>
      `;
      
      renderTarget.appendChild(cardElement);
    });
  }

  window.unifiedCatalogItems = catalog;
  console.log("[Marketplace Compiler] Compiled total active items, filtering out blank text records.");

  // Auto-skin newly generated DOM card structures instantly if available
  if (typeof window.autoSkinSelectedUpsellCards === "function") {
    window.autoSkinSelectedUpsellCards();
  }
  return catalog;
}

/**
 * ðŸŸ¢ SYNCHRONIZED INTERACTION GATEKEEPER:
 * Intercepts selection shifts, reconstructs the pricing array, and saves to storage
 */
window.handleBackgroundUpsellTogglePass = function(checkboxElement) {
  console.log("[Marketplace Pass] Upsell selection intercepted. Serializing state tracking array matrix...");
  try {
    const step3ActiveCheckboxes = document.querySelectorAll('.upsell-checkbox:checked');
    const compiledSelectedAddonsList = [];
    
    step3ActiveCheckboxes.forEach(box => {
      const itemPriceAttr = parseFloat(box.getAttribute('data-price')) || 0;
      const itemNameAttr = box.getAttribute('data-name') || "Optional Shield Accessory";
      const itemIdAttr = box.getAttribute('data-id') || box.id;
      
      compiledSelectedAddonsList.push({ id: itemIdAttr, title: itemNameAttr, price: itemPriceAttr });
      localStorage.setItem(`wizard_field_${box.id}`, "true");
    });

    const step3InactiveCheckboxes = document.querySelectorAll('.upsell-checkbox:not(:checked)');
    box => {
      localStorage.setItem(`wizard_field_${box.id}`, "false");
    };

    window.currentSelectedAddonsListArrayMatrix = compiledSelectedAddonsList;
    localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(compiledSelectedAddonsList));

    if (typeof window.autoSkinSelectedUpsellCards === "function") {
      window.autoSkinSelectedUpsellCards();
    }
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
      window.updateDynamicPricingMatrixVanilla();
    }
  } catch (toggleMatrixError) {
    console.error("[Marketplace Array Sync Failure]", toggleMatrixError);
  }
};

window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanel;

// ============================================================================ //
// ðŸ§¼ UNIVERSAL STEP 3 VISUAL OVERLAY CLEANER (DOM DESTRUCTION METHOD REPAIRED) //
// ============================================================================ //
function eliminateBlankDescriptionUpsellsFromStep3() {
  console.log("[Marketplace Guard] Forcefully cleaning Step 3 layout fields...");
  const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3");
  if (!step3Container) return;

  const productCards = step3Container.querySelectorAll('.upsell-market-card');
  productCards.forEach(card => {
    if (!card) return;
    const paragraphNode = card.querySelector("p");
    const cardText = card.innerText || "";
    let isDescriptionMissing = false;

    if (paragraphNode) {
      if (paragraphNode.innerText.trim() === "") isDescriptionMissing = true;
    } else {
      const textLinesCount = cardText.split('\n').filter(line => line.trim().length > 0).length;
      if (textLinesCount <= 2 && (cardText.includes("Activate") || cardText.includes("nea_service"))) {
        isDescriptionMissing = true;
      }
    }

    if (isDescriptionMissing) {
      card.remove();
      console.log("[Marketplace Guard] Successfully destroyed empty-description element frame block.");
    }
  });
}

window.eliminateBlankDescriptionUpsellsFromStep3 = eliminateBlankDescriptionUpsellsFromStep3;

document.addEventListener("DOMContentLoaded", () => {
  const step5ContainerElement = document.getElementById("step-panel-5") || document.querySelector('[data-step="5"]');
  if (step5ContainerElement) {
    step5ContainerElement.style.position = "relative";
  }

  const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3");
  if (step3Container) {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.addedNodes.length > 0) {
          eliminateBlankDescriptionUpsellsFromStep3();
          break;
        }
      }
    });
    observer.observe(step3Container, { childList: true, subtree: true });
    eliminateBlankDescriptionUpsellsFromStep3();
  }
});


// ============================================================================ //
// ðŸ–‹ï¸ LIVE CURSIVE SIGNATURE MIRROR PREVIEW MATRIX                             //
// ============================================================================ //

function initCursiveSignatureCaptureLivePreview() { 
    const textInputField = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const cursivePreviewField = document.getElementById("cursive-signature-preview"); 

    if (!textInputField || !cursivePreviewField) { 
        console.log("[Signature Preview] Active preview elements not loaded on frame zero. Postponing hook."); 
        return; 
    } 

    // Function to handle the actual visual mirror update
    const updateSignatureTextMirror = (currentString) => {
        const cleanString = currentString.trim();
        if (cleanString.length > 0) { 
            // Update live cursive preview box text style 
            cursivePreviewField.textContent = cleanString; 
            cursivePreviewField.style.setProperty("color", "#0066cc", "important"); // Classic blue signature ink 
            cursivePreviewField.style.setProperty("font-style", "normal", "important"); 
        } else { 
            // Fallback default state text if input is completely cleared 
            cursivePreviewField.textContent = "Your Signature"; 
            cursivePreviewField.style.setProperty("color", "#64748b", "important"); // Muted slate fallback 
        }
    };

    // Bind real-time input mirror interceptor pass safely 
    if (!textInputField.dataset.previewHooked) { 
        // 1. Catches raw keystrokes and real-time edits
        textInputField.addEventListener("input", (e) => { 
            updateSignatureTextMirror(e.target.value);
        }); 

        // 2. ðŸŸ¢ FIXED PASSTHROUGH HOOK: Catches browser auto-fills, right-click context menu pastes, or focus blurs
        textInputField.addEventListener("change", (e) => {
            updateSignatureTextMirror(e.target.value);
        });

        textInputField.dataset.previewHooked = "true"; 
        console.log("[Signature Preview] Real-time cursive live preview sync successfully armed."); 
    } 
} 

// Export the preview method safely to global scopes window records
window.initCursiveSignatureCaptureLivePreview = initCursiveSignatureCaptureLivePreview;

// Automatically bind preview hooks upon document paint cycles 
document.addEventListener("DOMContentLoaded", () => {
    initCursiveSignatureCaptureLivePreview();

    // ðŸŸ¢ FIXED MOUNT SELECTION: Setup the Step 4 preview observer inside DOMContentLoaded to ensure elements are active
    const poaPreviewPanel = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (poaPreviewPanel) { 
        const previewObserver = new MutationObserver(() => { 
            if (poaPreviewPanel.style.display !== "none") { 
                setTimeout(initCursiveSignatureCaptureLivePreview, 50); 
            } 
        }); 
        previewObserver.observe(poaPreviewPanel, { attributes: true, attributeFilter: ["style"] }); 
    } 
}); 


// ============================================================================ //
// ðŸ›¡ï¸ PART 5: ACTIVE NAVIGATION INTERCEPTOR (PERMANENTLY ACTIVE ON-CLICK BAR)     //
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

    // ðŸš© ON-CLICK GATE 1: Verify document scrolling threshold 
    if (!window.hasUserScrolledToBottomPoa) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Needed: Please scroll to the bottom of the disclosure to confirm you read it and understand it."); 
        } 
        return false; 
    } 

    // ðŸš© ON-CLICK GATE 2: Verify signature name format structure 
    if (!isSignatureValid) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box."); 
        } 
        if (signatureInput) signatureInput.focus(); 
        return false; 
    } 

    // ðŸš© ON-CLICK GATE 3: Verify checkbox authorization checkmarks 
    if (!isConsentChecked) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols."); 
        } 
        if (consentCheckbox) consentCheckbox.focus(); 
        return false; 
    } 

    // ðŸŸ¢ SUCCESS: All criteria met. Remove any visible alerts and advance layout views 
    const existingWarning = document.getElementById("poa-orange-alert-banner"); 
    if (existingWarning) existingWarning.remove(); 
    console.log("[POA Interceptor] Step 4 compliance gates passed. Moving forward onto Step 5."); 

    // ðŸ§  ðŸŸ¢ CRITICAL DATA MIRROR PASS:
    // Forcefully capture and parse all form states right now before shifting pages.
    // This locks 'poa_typed_signature' and 'poa_consent_checkbox' straight into isolated
    // storage keys so the Step 5 review nodes read them instantly on panel load!
    if (typeof window.saveWizardFormStatesVanilla === "function") {
        window.saveWizardFormStatesVanilla();
    }

    // ðŸ’¾ COMMIT CURRENT POSITION TO LOCAL CACHE PRIOR TO SHIFTING SCENARIOS 
    const cacheKey = "f4u_wizard_onboarding_state"; 
    try { 
        const currentCacheData = JSON.parse(localStorage.getItem(cacheKey) || "{}"); 
        currentCacheData.currentWizardActiveStep = 5; 
        localStorage.setItem(cacheKey, JSON.stringify(currentCacheData)); 
    } catch (cacheErr) { 
        console.warn("[POA Interceptor] Unable to back up position key index:", cacheErr); 
    } 

    // Route view layout panels forward and refresh step progress highlights
    if (typeof window.switchWizardActiveViewLayout === "function") { 
        window.switchWizardActiveViewLayout(5); 
    } 
    
    if (typeof window.updateApplicationMapTimelineBubbles === "function") {
        window.updateApplicationMapTimelineBubbles(5);
    }

    return true; 
} 

// Export the method safely to global scope window records 
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate;


// ============================================================================ //
// ðŸ“¡ UN-FREEZER BRIDGE ATTACHMENT FOR INLINE SUBMIT CONTROL FIELDS (1 OF 2)     //
// ============================================================================ //

/**
 * Automated safety un-freezer utility.
 * Forcefully ensures the navigation button stays active and clickable for the validation gate.
 */
function forceUnfreezeStep4FormInputs() { 
    console.log("[POA Security Hub] Forcing all form interaction channels active..."); 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.getElementById("poa-next-btn") || 
                           document.querySelector("#step-panel-4 .btn-wizard-main") || 
                           document.querySelector("#step-4 .btn-wizard-main") ||
                           document.querySelector("button[onclick*='goToNextWizardStep(5)']");

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

    // CRITICAL RESET: Safely lift hardcoded disabling tags so click triggers capture perfectly
    if (nextStepButton) { 
        nextStepButton.removeAttribute("disabled"); 
        nextStepButton.disabled = false; 
        nextStepButton.style.setProperty("opacity", "1", "important"); 
        nextStepButton.style.setProperty("cursor", "pointer", "important"); 
        nextStepButton.style.setProperty("pointer-events", "auto", "important"); 
        
        // Link the control button back up to our primary on-click gatekeeper module
        if (nextStepButton.getAttribute("onclick") !== "window.runActivePoaClickValidationGate(event)") {
            nextStepButton.setAttribute("onclick", "window.runActivePoaClickValidationGate(event)");
        }
    } 
} 

/**
 * Real-time monitoring loop: Removes the warning panel the millisecond criteria are satisfied.
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

    // ðŸŸ¢ RESOLVED: If conditions are fully cleared, erase the orange alert banner immediately
    if (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa) {
        const existingWarning = document.getElementById("poa-orange-alert-banner");
        if (existingWarning) {
            existingWarning.remove();
            console.log("[POA Matrix Engine] Compliance conditions satisfied. Warning banner dismissed.");
        }
    }
    return true;
}

// Bind updated methods back into global window scope records fields safely 
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputs; 
window.checkPoaInputStateSilently = checkPoaInputStateSilently;


// ============================================================================ //
// â“˜ CONTEXTUAL TOOLTIP POP-UP ENGINE (MATCHES UNIFIED ALERT DESIGN SPEC)       //
// ============================================================================ //

/** 
 * Toggles visibility states for the Step 4 legal explanation tooltip popup box. 
 * Styled to perfectly match your clean, unified white/navy alert banner. 
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

    // RE-SKIN THE CONTAINER LAYOUT: Wiped dark background, applied matching white/navy alert palette 
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
// ðŸŸ¢ AUTOMATED GLOBAL DISMISSAL INTERCEPTOR (THE UN-TRAP ENGINE)                // 
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
// ðŸ“Š STEP 5 INTERACTIVE VISIBILITY REAL-TIME INVOICE REFRESHER                 //
// ============================================================================ //

/**
 * Programmatic recalculation gate. Forces your data loops to scan and group
 * checked items without creating duplicate execution loops.
 */
function forceStep5SummaryInvoiceRefresh() {
    console.log("[Summary Hub] Step 5 panel active. Forcing real-time invoice calculations update...");
    
    // 1. Force the dynamic state discovery crawl to scan and merge all selections if available
    if (typeof window.runPricingMatrixDataCrawlPass === "function") {
        window.runPricingMatrixDataCrawlPass();
    }
    
    // 2. Force the itemized marketplace rows to reconstruct
    if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") {
        window.directInjectCartAddonsToSummaryStep5();
    }

    // ðŸ§  ðŸŸ¢ CRITICAL CORE MATRIX ALIGNMENT RESOLUTION:
    // Execute your master Step 5 compilation engine from wizard-summary.js.
    // This recalculates all baseline packages, looks up dynamic state registry agency fees,
    // builds the add-on line items ledger, and maps your stored text inputs onto data data-summary-fields!
    if (typeof window.recalculateSummaryItemizedMatrixRows === "function") {
        console.log("[Summary Hub] Routing view layout channels directly to your central compilation engine...");
        window.recalculateSummaryItemizedMatrixRows();
    } else {
        console.warn("[Summary Hub Warning] recalculateSummaryItemizedMatrixRows is not yet bound to the global scope window context.");
    }

    // 3. Force the master UI binding manager to redraw elements and display math
    if (typeof window.finalizePricingMatrixUiRender === "function") {
        window.finalizePricingMatrixUiRender();
    } else if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    }
}

// ðŸŸ¢ SAFE INTERCEPT ROUTER: Prevents Call Stack Exceeded recursive locks
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

// Global window exposure pass mapping
window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefresh;


// ============================================================================ //
// ðŸŽ¯ PART 5: UNIFIED ISOLATED VIEW OBSERVER ENGINE                              //
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

    const summaryPanelViewObserver = new MutationObserver(() => { 
        // Runs immediately when display changes from display: none to block 
        if (summaryPanelNodeElement.style.display !== "none") { 
            if (typeof forceStep5SummaryInvoiceRefresh === "function") {
                forceStep5SummaryInvoiceRefresh(); 
            }
            setTimeout(() => {
                if (typeof forceStep5SummaryInvoiceRefresh === "function") forceStep5SummaryInvoiceRefresh();
            }, 80); // Secondary safety macro pass for late-binding rendering layout speeds
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

// ============================================================================ //
// ðŸ›’ STEP 5 INVOICE CALCULATOR & MARKTUP BUILDER ENGINE                        //
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

    // ðŸ§  ðŸŸ¢ PERSISTENT STORAGE ARRAY HOOK:
    // Extract selected add-ons from LocalStorage instead of scanning a destroyed DOM panel!
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
            <div class="summary-receipt-row-item" data-source-checkbox-id="${addonItem.id}" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: #475569; padding: 10px 0; border-bottom: 1px dashed #e2e8f0; width: 100%; box-sizing: border-box;"> 
                <div style="display: flex; flex-direction: column; gap: 2px;"> 
                    <span style="font-weight: 600; color: #0a1f44;">+ ${labelString}</span> 
                    <button type="button" onclick="window.removeSelectedAddonItemStraightFromSummaryCard('${addonItem.id}')" style="background: transparent; border: none; color: #ef4444; font-size: 0.725rem; font-weight: 700; cursor: pointer; padding: 0; text-align: left; width: fit-content; display: flex; align-items: center; gap: 4px; margin-top: 2px; transition: opacity 0.1s;"><i class="fa-solid fa-trash-can"></i> Remove from Invoice</button> 
                </div> 
                <span style="font-family: monospace; font-weight: 700; color: #0a1f44; font-size: 0.95rem;">$${priceValue.toFixed(2)}</span> 
            </div>`; 
    }); 

    const tierDisplayString = safePlanTier ? ' (' + safePlanTier + ')' : ''; 
    const baselineHeaderRow = '<div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 4px;"><span>' + safePlanName + tierDisplayString + '</span><span style="font-family: monospace;">$' + basePackagePriceValue.toFixed(2) + '</span></div>'; 
    
    rowsTargetNode.innerHTML = baselineHeaderRow + itemsMarkupString; 

    // Automatically binds the calculated running total amount back to your visible elements
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
    window.summaryCalculatedGrandTotal = runningSubtotalAmount;
} 

/**
 * Forcefully itemizes and un-checks deleted rows from storage if removed directly from summary invoice.
 */
window.removeSelectedAddonItemStraightFromSummaryCard = function(sourceCheckboxId) { 
    if (!sourceCheckboxId) return; 

    console.log(`[Summary Engine] Force removing item selection key: ${sourceCheckboxId} straight from invoice summary sheet...`);

    // 1. If the checkbox element happens to be currently present on the page, uncheck it natively
    const targetCheckbox = document.getElementById(sourceCheckboxId); 
    if (targetCheckbox) { 
        targetCheckbox.checked = false; 
    } 

    // 2. Erase or rebuild the selection tracking array parameters securely within LocalStorage
    try {
        const savedAddonsMatrixString = localStorage.getItem('wizard_selected_addons_matrix');
        if (savedAddonsMatrixString) {
            let existingAddonsArray = JSON.parse(savedAddonsMatrixString) || [];
            
            // Filter out the matching item record matching our unique deletion identifier ID
            let upgradedAddonsArray = existingAddonsArray.filter(item => item.id !== sourceCheckboxId);
            
            // Sync states back to persistent memory blocks instantly
            window.currentSelectedAddonsListArrayMatrix = upgradedAddonsArray;
            localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(upgradedAddonsArray));
            localStorage.setItem(`wizard_field_${sourceCheckboxId}`, "false");
        }
    } catch (deletionProcessErr) {
        console.error("[Summary Engine Deletion Intercept Error]", deletionProcessErr);
    }

    // 3. Force re-run calculation matrices to update total invoice balances
    if (typeof window.forceStep5SummaryInvoiceRefresh === "function") { 
        window.forceStep5SummaryInvoiceRefresh(); 
    } 
}; 

// Maintain alias function pointers for backwards compatibility across older step layout files 
window.forceStep5PurchaseSummaryRenderCycle = forceStep5SummaryInvoiceRefresh; 
window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefresh; 
window.initStep5PurchaseSummaryVisibilityTracker = initStep5PurchaseSummaryVisibilityTracker; 
window.directInjectCartAddonsToSummaryStep5 = directInjectCartAddonsToSummaryStep5;


// ============================================================================ //
// ðŸ“Š PART 1 OF 2: STEP 5 CART REMOVE ACTUATOR ENGINE (STATE SYNCHRONIZED REPAIR) //
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
        physicalCheckbox.dispatchEvent(new Event('change', { bubbles: true })); 
    } 

    // 2. Clear variable memory registers securely
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

    // 4. ðŸŸ¢ FIXED UNIFIED MEMORY SYNCHRONIZATION OVERRIDE:
    // Filter and rebuild the persistent localStorage selected addons array matrix context
    try {
        const savedAddonsMatrixString = localStorage.getItem('wizard_selected_addons_matrix');
        if (savedAddonsMatrixString) {
            let existingAddonsArray = JSON.parse(savedAddonsMatrixString) || [];
            let upgradedAddonsArray = existingAddonsArray.filter(item => item.id !== targetCheckboxElementId);
            
            window.currentSelectedAddonsListArrayMatrix = upgradedAddonsArray;
            localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(upgradedAddonsArray));
        }
        // Force the explicit isolated flag down to false so Step 5 data-summary field loops drop it
        localStorage.setItem(`wizard_field_${targetCheckboxElementId}`, "false");
    } catch (cacheArrayMutationErr) {
        console.error("[Summary Engine Actuator Failure]", cacheArrayMutationErr);
    }

    // 5. Force a progressive real-time serialization pass across all active viewport metrics
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 

    // 6. Force a fresh redrawing sweep of the visible invoice balance layout cards 
    if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") { 
        window.directInjectCartAddonsToSummaryStep5(); 
    } 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// Global window parameter exposure mapping definitions 
window.removeSelectedAddonItemStraightFromSummaryCard = removeSelectedAddonItemStraightFromSummaryCard;

// ============================================================================ //
// ðŸ“‹ PART 2 OF 2: DYNAMIC INTERACTIVE CHECKLIST ENGINE (ZERO-HARDCODE)          //
// ============================================================================ //
window.hasUserScrolledToBottomPoa = window.hasUserScrolledToBottomPoa || false;

/**
 * Universally launches a context-aware operational requirement modal framework.
 */
function launchNewEntrantAuditRequirementsGuideModal() { 
    let modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (!modalRoot) { 
        modalRoot = document.createElement("div"); 
        modalRoot.id = "f4u-price-guide-modal-root"; 
        modalRoot.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;"; 
        document.body.appendChild(modalRoot); 
    } 

    // Resolve unified metrics: extract active route service path types
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
    // Mount the dynamic markup directly inside your fix-mounted overlay element container
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

/** 
 * Event bridge linking internal modal checkbox states back to your background forms. 
 */ 
function syncModalCheckboxActionDirectToForm(backgroundFormId, isChecked) { 
    if (!backgroundFormId) return; 

    const backgroundCheckboxNode = document.getElementById(backgroundFormId) || 
                                   document.querySelector("input[id*='" + backgroundFormId + "']") || 
                                   document.querySelector("input[class*='" + backgroundFormId + "']"); 
    
    if (backgroundCheckboxNode) { 
        backgroundCheckboxNode.checked = isChecked; 
        
        // 1. Dispatch a change event bubble so dynamic layout pricing matrices update total values
        backgroundCheckboxNode.dispatchEvent(new Event('change', { bubbles: true })); 
    } 

    // 2. ðŸ§  ðŸŸ¢ FIXED MEMORY SYNC INTERLOCK:
    // If the checkbox is toggled inside the modal popup window, force the state scraping engine 
    // to capture it instantly and write it directly to 'wizard_field_[id]'. 
    // This locks the value into storage before the user navigates onto the Step 5 review screen!
    if (typeof window.saveWizardFormStatesVanilla === "function") {
        window.saveWizardFormStatesVanilla();
    }

    // 3. Fire auxiliary workflow hooks if initialized on page components
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
 * Hides operational modal layer. 
 */ 
function closeNewEntrantAuditPriceGuideModal() { 
    const modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (modalRoot) {
        modalRoot.style.display = "none";
    }
} 

// Map cleanly back into universal global window scope references safely 
window.launchNewEntrantAuditRequirementsGuideModal = launchNewEntrantAuditRequirementsGuideModal; 
window.syncModalCheckboxActionDirectToForm = syncModalCheckboxActionDirectToForm; 
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal; 


// ============================================================================ //
// ðŸ“Š PART 1 OF 2: COMPLIANCE FORM GATES & MODAL CLOSE ANIMATIONS              //
// ============================================================================ //

/**
 * Hides operational modal layer with smooth, high-fidelity transform animations.
 */
function closeNewEntrantAuditPriceGuideModal() { 
    const modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (modalRoot) { 
        modalRoot.style.transition = "opacity 0.2s ease";
        modalRoot.style.opacity = "0"; 
        
        if (modalRoot.firstChild) { 
            modalRoot.firstChild.style.transition = "transform 0.2s ease";
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
    console.log(`[New Entrant Audit Link] Selection parameter shifted to: ${selectedValue}`); 
} 

/** 
 * High-performance submission validation gate. 
 * Triggers strictly when clicking the Step 2 forward navigation panel buttons. 
 */ 
function processStepTwoFunnelAdvancementGate(event) { 
    if (event && typeof event.preventDefault === "function") { 
        event.preventDefault(); 
    } 

    console.log("[Step 2 Gate] Intercepting click to enforce corporate parameter validation sweeps...");

    // ðŸŸ¢ SECURE STEP 2 VALIDATION FIX:
    // Verify that the user filled out all required inputs on Step 2 before letting them proceed
    if (typeof window.validateStepInputParametersVanilla === "function") {
        const isStep2Valid = window.validateStepInputParametersVanilla(2);
        if (!isStep2Valid) {
            console.warn("[Step 2 Gate] Form input parsing failed criteria bounds. Halting forward navigation.");
            return false; // Blocks navigation from moving to Step 3 if inputs are empty or wrong
        }
    }

    // Capture and save data immediately if criteria parameters pass successfully
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 

    // Route view layout forward safely
    if (typeof window.switchWizardActiveViewLayout === "function") { 
        window.switchWizardActiveViewLayout(3); 
    } 
    
    if (typeof window.updateApplicationMapTimelineBubbles === "function") {
        window.updateApplicationMapTimelineBubbles(3);
    }
} 

// Export the method safely to global scopes window records
window.processStepTwoFunnelAdvancementGate = processStepTwoFunnelAdvancementGate;
window.triggerNewEntrantAuditComplianceChecklistPopup = triggerNewEntrantAuditComplianceChecklistPopup;
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal;


// ============================================================================ //
// ðŸŽ¯ PART 2 OF 2: VISIBILITY INTERLOCK ALIGNMENT                               //
// ============================================================================ //

/**
 * ðŸŸ¢ CRITICAL SYNC NOTE:
 * The duplicate declarations of syncModalCheckboxActionDirectToForm and 
 * forceStep5SummaryInvoiceRefresh have been stripped out from this section. 
 * This ensures they do not overwrite the persistent, storage-aligned 
 * master variations we built in earlier file blocks.
 */

// Ground and wire view observers safely to catch step display toggle milestones
document.addEventListener("DOMContentLoaded", () => {
    const step5PanelElementNode = document.getElementById("step-panel-5") || document.getElementById("step-5");
    
    if (step5PanelElementNode) {
        const summaryPanelViewObserver = new MutationObserver(() => {
            if (step5PanelElementNode.style.display !== "none") {
                // Execute the synchronized real-time invoice calculations update pass
                if (typeof window.forceStep5SummaryInvoiceRefresh === "function") {
                    window.forceStep5SummaryInvoiceRefresh();
                }
                
                setTimeout(() => {
                    if (typeof window.forceStep5SummaryInvoiceRefresh === "function") {
                        window.forceStep5SummaryInvoiceRefresh();
                    }
                }, 80); // Secondary safety macro pass for slow browser layout engine translations
            }
        });
        
        summaryPanelViewObserver.observe(step5PanelElementNode, { attributes: true, attributeFilter: ["style"] });
        console.log("[Lifecycle Engine] Step 5 structural MutationObserver attached cleanly.");
    }
});

// ============================================================================ //
// ðŸ’³ STEP 6 SECURE GATEWAY REAL-TIME INVOICE REFRESHER & STRIPE BRIDGE         //
// ============================================================================ //

/**
 * Synchronizes the live checkout total straight onto the Step 6 indicator node
 * and automatically kicks off the Stripe inputs initialization routine.
 */
function forceStep6StripePaymentGatewayRefreshPass() { 
    console.log("[Payment Gate] Step 6 active view detected. Synchronizing invoicing values..."); 
    const paymentTotalTextNode = document.getElementById("payment-gateway-total-display"); 

    // ðŸ§  ðŸŸ¢ CRITICAL PRICING MATRIX REALIGNMENT:
    // Extract the live grand total variable explicitly computed by your central calculations engine
    // (window.summaryCalculatedGrandTotal from wizard-summary.js) to prevent $0.00 fallback errors.
    const activeRunningTotalAmount = window.summaryCalculatedGrandTotal || 
                                     window.finalComputedOnboardingInvoiceTotalAmount || 
                                     window.computedWizardGrandTotalAmount || 
                                     window.wizardCalculatedFinalTotalAmount || 
                                     parseFloat(localStorage.getItem('wizard_calculated_grand_total')) || 0; 

    if (paymentTotalTextNode) { 
        paymentTotalTextNode.textContent = `$${parseFloat(activeRunningTotalAmount).toFixed(2)}`; 
        console.log(`[Payment Gate] Step 6 balance display successfully hydrated: $${parseFloat(activeRunningTotalAmount).toFixed(2)}`); 
    } 

    // ðŸ’³ AUTOMATED STRIPE INTERFACE INITIALIZER WITH SINGLE-MOUNT SAFETY GATE:
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

// Export the method safely to global scope window records
window.forceStep6StripePaymentGatewayRefreshPass = forceStep6StripePaymentGatewayRefreshPass;

// ðŸŸ¢ MOUNT LAYER PROTECTION: Setup the Step 6 visibility observer inside DOMContentLoaded to ensure elements are active
document.addEventListener("DOMContentLoaded", () => {
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
        console.log("[Payment Gate] Step 6 structural MutationObserver attached cleanly.");
    } else {
        console.warn("[Payment Gate Warning] step-panel-6 container element was missing during observer allocation.");
    }
});


// ============================================================================ //
// ðŸ“¦ GLOBAL LAYERS EXPOSURE AND CORE LISTENER REGISTRATIONS                   //
// ============================================================================ //

// Bind methods cleanly back into global workspace window scopes 
window.syncModalCheckboxActionDirectToForm = typeof syncModalCheckboxActionDirectToForm !== "undefined" ? syncModalCheckboxActionDirectToForm : window.syncModalCheckboxActionDirectToForm; 
window.syncModalCheckboxChangeToBackgroundForm = window.syncModalCheckboxActionDirectToForm; // Alias mapping prevents signature breaking bugs 

window.closeNewEntrantAuditPriceGuideModal = typeof closeNewEntrantAuditPriceGuideModal !== "undefined" ? closeNewEntrantAuditPriceGuideModal : window.closeNewEntrantAuditPriceGuideModal; 
window.triggerNewEntrantAuditComplianceChecklistPopup = typeof triggerNewEntrantAuditComplianceChecklistPopup !== "undefined" ? triggerNewEntrantAuditComplianceChecklistPopup : window.triggerNewEntrantAuditComplianceChecklistPopup; 
window.toggleNewEntrantAuditLetterDetails = typeof toggleNewEntrantAuditLetterDetails !== "undefined" ? toggleNewEntrantAuditLetterDetails : window.toggleNewEntrantAuditLetterDetails; 

window.forceStep5SummaryInvoiceRefresh = typeof forceStep5SummaryInvoiceRefresh !== "undefined" ? forceStep5SummaryInvoiceRefresh : window.forceStep5SummaryInvoiceRefresh; 
window.forceStep6StripePaymentGatewayRefreshPass = typeof forceStep6StripePaymentGatewayRefreshPass !== "undefined" ? forceStep6StripePaymentGatewayRefreshPass : window.forceStep6StripePaymentGatewayRefreshPass; 
window.processStepTwoFunnelAdvancementGate = typeof processStepTwoFunnelAdvancementGate !== "undefined" ? processStepTwoFunnelAdvancementGate : window.processStepTwoFunnelAdvancementGate; 

/**
 * Re-arms navigation buttons on load loops safely.
 * Standardizes button click interception mechanics across all active panels.
 */
function attachStepTwoNavigationTriggers() { 
    const continueBtnStep2 = document.querySelector("#step-panel-2 .btn-wizard-main") || 
                             document.querySelector("#step-2 .btn-wizard-main") || 
                             document.querySelector("button[onclick*='goToNextWizardStep(3)']"); 
                             
    if (continueBtnStep2) { 
        // ðŸŸ¢ FIXED CLICK INTERCEPT OVERRIDE:
        // Instead of stack-appending a second click handler via addEventListener (which conflicts with inline handlers),
        // we override the onclick property directly. This completely wipes out 'goToNextWizardStep(3)' and forces
        // the button to process our strict input validation gate safely!
        continueBtnStep2.removeAttribute("onclick");
        continueBtnStep2.onclick = function(event) {
            if (typeof window.processStepTwoFunnelAdvancementGate === "function") {
                return window.processStepTwoFunnelAdvancementGate(event);
            }
        };
        continueBtnStep2.style.cursor = "pointer"; 
        console.log("[Global Exposure] Step 2 navigation control buttons securely routed to verification gate.");
    } 
} 

// Register trigger attachments securely relative to browser rendering state timelines
if (document.readyState !== "loading") { 
    attachStepTwoNavigationTriggers(); 
} else { 
    document.addEventListener("DOMContentLoaded", attachStepTwoNavigationTriggers); 
} 

// ============================================================================ //
// ðŸš€ UNIFIED SMOOTH-SCROLL VIEWPORT TRACKING ENGINE                            //
// ============================================================================ //
;(function() { 
    // ðŸŸ¢ STRUCTURAL PERFORMANCE ENHANCEMENT: Stripped out global document click stutter bugs
    const masterLayoutPanels = document.querySelectorAll(".wizard-panel"); 
    window.activePanelVisibilityObserversArray = []; // Globally exposed reference collection array

    masterLayoutPanels.forEach(function(panel) { 
        const panelObserver = new MutationObserver(function(mutations) { 
            mutations.forEach(function(mutation) { 
                // Only fire the window repositioning logic if the specific style change 
                // indicates that this panel has transitioned into an active, visible display state. 
                if (mutation.attributeName === "style" && panel.style.display !== "none" && panel.classList.contains("active")) { 
                    console.log(`[Scroll Manager] Panel #${panel.id || 'wizard-step'} mounted active. Adjusting viewport anchors...`); 
                    
                    // Smooth scroll execution pass resets view to the very top edge of the onboarding container
                    window.scrollTo({ top: 0, behavior: "smooth" }); 
                    
                    // Safe execution interlock: Auto-refresh the view layout triggers on load if required
                    if (panel.id === "step-panel-2" && typeof attachStepTwoNavigationTriggers === "function") {
                        attachStepTwoNavigationTriggers();
                    }
                } 
            }); 
        }); 

        // Arm the layout mutation tracker 
        panelObserver.observe(panel, { attributes: true, attributeFilter: ["style", "class"] }); 
        window.activePanelVisibilityObserversArray.push(panelObserver);
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

/* ============================================================================ // 
// âš¡ PART 1 OF 2: NETWORK ROUTER, STATE PRESERVATION, AND CLEAN SPINNER         // 
// ============================================================================ */ 
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

    // ðŸ’¾ ===================================================================== 
    // ðŸ§  NEW STATE PRESERVATION ENGINE: CAPTURE DATA BEFORE WIPING THE DOM 
    // ===================================================================== 
    try { 
        console.log("[State Engine] Scraping active inputs before clearing step view layout..."); 
        
        // 1. Capture text inputs, textareas, and select boxes safely 
        const formFields = fieldsRoot.querySelectorAll("input:not([type='checkbox']):not([type='radio']), select, textarea"); 
        formFields.forEach(field => { 
            const fieldKeyName = field.id || field.name;
            if (fieldKeyName) { 
                const storageKey = `wizard_field_${fieldKeyName}`; 
                localStorage.setItem(storageKey, field.value); 
                
                // Explicitly intercept state selections for the Step 5 pricing matrix engine 
                if (fieldKeyName.includes("state") || fieldKeyName.includes("formation")) { 
                    localStorage.setItem('wizard_selected_state', field.value); 
                } 
            } 
        }); 

        // 2. Capture custom checkboxes (like company structural selections or checkboxes) 
        const checkBoxes = fieldsRoot.querySelectorAll("input[type='checkbox']"); 
        checkBoxes.forEach(box => { 
            const boxKeyName = box.id || box.name;
            if (boxKeyName) { 
                // ðŸŸ¢ UNIFIED STORAGE STORAGE PREFIX FIX:
                // Stores exactly inside 'wizard_field_' to remain locked with your central summary matrix loop!
                localStorage.setItem(`wizard_field_${boxKeyName}`, box.checked ? "true" : "false"); 
            } 
        }); 
    } catch (preservationError) { 
        console.warn("[State Engine Warning] Could not cache form data fields securely:", preservationError); 
    } 
    // ===================================================================== 

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
                dynamicScriptElement.onload = () => { setTimeout(resolve, 120); }; 
                dynamicScriptElement.onerror = () => { reject(new Error(`Failed to load script pipeline: ${targetScriptFileName}.js`)); }; 
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

    // ðŸ§  ðŸŸ¢ SECURE LIFECYCLE HANDOFF:
    // Execute the step compiler after the script loader settles down to prevent timing race conditions.
    if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
        await window.executeStepTwoDynamicFormInjection(baselineMemoryKeys, rawUrlSlug); 
    } else if (typeof executeStepTwoDynamicFormInjection === "function") { 
        await executeStepTwoDynamicFormInjection(baselineMemoryKeys, rawUrlSlug); 
    } else { 
        console.warn("[Asset Router] executeStepTwoDynamicFormInjection is not yet attached to the global scope window context."); 
    } 
})();


/* ============================================================================ */ 
/* âš¡ PART 2 OF 2: UNIVERSAL SERVICE-FORM LIFECYCLE COMPILER ENGINE              */ 
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
            formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;"; 
            fieldsRoot.insertBefore(formInjectionWrapper, fieldsRoot.firstChild); 
        } else { 
            formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;"; 
        } 



        // Order elements sequentially matching exact wizard step index numbers 
        verifiedTemplates.sort((a, b) => a.step - b.step); 
        formInjectionWrapper.innerHTML = ""; 
        verifiedTemplates.forEach((item) => { 
            const rowContainer = document.createElement("div"); 
            rowContainer.className = "service-form-part-segment"; 
            rowContainer.setAttribute("data-part-index", item.step); 
            rowContainer.style.cssText = "grid-column: 1 / -1 !important; display: block !important; width: 100% !important; max-width: 100% !important; clear: both !important; margin-bottom: 24px !important; box-sizing: border-box;"; 
            rowContainer.innerHTML = item.html; 
            formInjectionWrapper.appendChild(rowContainer); 
        }); 

        console.log(`[Lifecycle Engine Success] Form segments successfully injected for tracking channel: "${rawUrlSlug}".`); 

        if (typeof hydrateInjectedFormFields === "function") {
            hydrateInjectedFormFields(formInjectionWrapper);
        }
    } catch (compilationError) {
        console.error("[Lifecycle Engine] Form compilation error:", compilationError);
    }
}

window.toggleFederalTaxInventoryCostVisibility = function(targetSelectorOrEvent, programmaticFallbackNode) {
  if (!targetSelectorOrEvent) return;

  let targetSelector = null;
  let triggeringElement = null;

  // 1. Prioritize Explicit Programmatic Fallback Node Context First
  if (programmaticFallbackNode instanceof HTMLElement) {
    triggeringElement = programmaticFallbackNode;
  }

  // 2. W3C Standard Event / Node Context Parsing
  if (typeof targetSelectorOrEvent === 'string') {
    targetSelector = targetSelectorOrEvent;
  } else if (targetSelectorOrEvent) {
    const eventNode = targetSelectorOrEvent.currentTarget || targetSelectorOrEvent.target || targetSelectorOrEvent;
    if (eventNode instanceof HTMLElement) {
      if (!triggeringElement) triggeringElement = eventNode;
      targetSelector = eventNode.dataset?.controlsTarget || eventNode.getAttribute('data-controls-target');
    }
  }

  // 3. Fallback safelyâ€”NEVER default to <body> or <html> during hydration
  if (!triggeringElement) {
    const activeNode = (targetSelectorOrEvent && targetSelectorOrEvent.srcElement instanceof HTMLElement) 
      ? targetSelectorOrEvent.srcElement 
      : document.activeElement;
    
    if (activeNode && activeNode !== document.body && activeNode !== document.documentElement) {
      triggeringElement = activeNode;
    }
  }

  // 4. Final attribute extraction attempt
  if (!targetSelector && triggeringElement && typeof triggeringElement.getAttribute === 'function') {
    targetSelector = triggeringElement.dataset?.controlsTarget || triggeringElement.getAttribute('data-controls-target');
  }

  // 5. Secure Value Extraction Layer
  let evaluationValue = null;
  if (triggeringElement) {
    if (triggeringElement.type === 'checkbox' || triggeringElement.type === 'radio') {
      evaluationValue = triggeringElement.checked ? "true" : "false";
    } else if (typeof triggeringElement.value !== 'undefined' && triggeringElement.value !== null) {
      evaluationValue = String(triggeringElement.value).toLowerCase().trim();
    } else if (typeof triggeringElement.getAttribute === 'function') {
      evaluationValue = triggeringElement.dataset?.state || triggeringElement.getAttribute('data-state') || null;
    }
  }

  // ðŸš€ ASYNCHRONOUS TIMING COMPLIANCE ENVELOPE
  setTimeout(() => {
    // CRITICAL FIX: If we have no target node, try resolving it directly via the selector value text
    if (!triggeringElement) {
      // If the selector passed was literally a truthy string condition or value rule instead of a CSS target
      if (typeof targetSelectorOrEvent === 'string') {
        const structuralNormalized = targetSelectorOrEvent.toLowerCase().trim();
        if (["yes", "true", "1", "include"].includes(structuralNormalized)) {
          evaluationValue = structuralNormalized;
        }
      }
    }

    // Fall back to an empty string to prevent the strict validation blocker from tripping
    const operationalValue = evaluationValue || "";

    // 6. Resolve the target layout container using standard DOM evaluation
    let targetContainer = null;
    if (targetSelector) {
      try {
        targetContainer = document.querySelector(targetSelector);
      } catch (selectorError) {
        // Suppress warning if targetSelector turned out to be a pure configuration value string
      }
    }

    // Standard Sibling Fallback if layout structure properties lack explicit query strings
    if (!targetContainer && triggeringElement && typeof triggeringElement.closest === 'function') {
      const structuralRow = triggeringElement.closest('fieldset, .form-row, .form-group, tr, div');
      if (structuralRow) {
        targetContainer = structuralRow.nextElementSibling;
      }
    }

    // 7. Mutate Layout States strictly using pure evaluation logic truths
    if (targetContainer) {
      const isConditionMet = (
        operationalValue === "yes" || 
        operationalValue === "true" || 
        operationalValue === "1" || 
        operationalValue === "include"
      );

      // Toggle layout block display natively
      targetContainer.style.display = isConditionMet ? "" : "none";

      // Handle child form elements access dynamically to safeguard server payload validation
      const childFormControls = targetContainer.querySelectorAll("input, select, textarea, button");
      childFormControls.forEach(control => {
        if (isConditionMet) {
          control.removeAttribute("disabled");
        } else {
          control.setAttribute("disabled", "true");
        }
      });
      console.log(`[Lifecycle Engine] Decoupled mutation completed for target: "${targetSelector || 'Relative Sibling'}". State: ${isConditionMet}`);
    } else {
      // Graceful structural fallback logs instead of throwing critical hydration-breaking warnings
      console.debug("[Lifecycle Engine Information] Run optimized without a direct DOM layout target container mutation.");
    }
  }, 50);
};


function hydrateInjectedFormFields(formInjectionWrapper) {
  try {
    console.log("[Lifecycle Engine] Hydrating dynamically injected markup template rows...");
    
    // 1. Gather and populate alphanumeric fields, select dropdown blocks, and descriptions
    const staticFields = formInjectionWrapper.querySelectorAll(
      "input:not([type='checkbox']):not([type='radio']):not([type='file']), select, textarea"
    );
    
    staticFields.forEach(elementItem => {
      const elementIdentifier = elementItem.id || elementItem.name;
      if (elementIdentifier) {
        const savedCacheStringValue = localStorage.getItem(`wizard_field_${elementIdentifier}`);
        if (savedCacheStringValue !== null) {
          elementItem.value = savedCacheStringValue;
          
  const inlineOnChange = elementItem.getAttribute('onchange');
if (inlineOnChange) {
  // 1. Locate the first function signature pattern
  const match = inlineOnChange.match(/([a-zA-Z0-9_]+)\s*\(/);
  if (match && match[1]) {
    const functionName = match[1];
    
    // 2. KEYWORD SHIELD: Immediately ignore native control structures
    const reservedKeywords = ["if", "for", "while", "switch", "catch", "function"];
    
    if (!reservedKeywords.includes(functionName)) {
      
      // Create a safety stub only if it's completely missing from window scope
      if (typeof window[functionName] === 'undefined') {
        console.warn(`[Lifecycle Engine] Created safety stub for missing global function: ${functionName}`);
        window[functionName] = function() {};
      }
      
      // 3. Extract the string argument inside quotes dynamically
      const selectorMatch = inlineOnChange.match(/['"]([^'"]+)['"]/);
      const passedSelector = selectorMatch ? selectorMatch[1] : null;
      
      // Invoke whatever specific visibility controller function is actually declared
      if (typeof window[functionName] === 'function') {
        try {
          window[functionName](passedSelector, elementItem, true); 
        } catch (execError) {
          console.warn(`[Lifecycle Engine] Failed to execute dynamic inline handler "${functionName}":`, execError);
        }
      }
    }
  }
}

          
          // Native browser events cascade to any other framework listeners
          elementItem.dispatchEvent(new Event('change', { bubbles: true }));
          elementItem.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    });

    // 2. Gather and switch checkbox structural assets
    const standaloneCheckboxes = formInjectionWrapper.querySelectorAll("input[type='checkbox']");
    standaloneCheckboxes.forEach(checkboxItem => {
      const checkboxIdentifier = checkboxItem.id || checkboxItem.name;
      if (checkboxIdentifier) {
        const savedCacheCheckValue = localStorage.getItem(`wizard_field_${checkboxIdentifier}`);
        if (savedCacheCheckValue !== null) {
          checkboxItem.checked = (savedCacheCheckValue === "true");
          checkboxItem.dispatchEvent(new Event('change', { bubbles: true }));
          checkboxItem.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    });
    
    console.log("[Lifecycle Engine] Data hydration phase complete.");
  } catch (hydrationError) {
    console.warn("[Lifecycle Engine Tracking Node Block] Fallback asset hydration warning:", hydrationError);
  }
}






/**
 * Monitors active layout dimensions to handle responsive stylesheet skinning
 * and prevent styling collisions on narrow smartphone viewports.
 */
function evaluateSystemViewportDesign() { 
    const container = document.querySelector('.wizard-container'); 
    if (!container) return; 
    
    if (window.innerWidth <= 991) { 
        container.classList.add('is-mobile-device'); 
        console.log("[Viewport Engine] Mobile layout skinning parameters applied.");
    } else { 
        container.classList.remove('is-mobile-device'); 
    } 
} 

// Initial evaluation and resize listener bindings 
document.addEventListener("DOMContentLoaded", evaluateSystemViewportDesign); 
window.addEventListener("resize", evaluateSystemViewportDesign);


// ============================================================================ //
// ðŸ‡ºðŸ‡¸ MODULE: UNIVERSAL SELF-HOOKING USA STATE DROPDOWN ENGINE                 //
// ============================================================================ //
;(function() {
    "use strict";

    // 1. The Single Immutable Source of Truth for USA State Options HTML
    window.globalStateDropdownOptionsHtml = 
        '<option value="">-- Select State --</option>' +
        '<option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option>' +
        '<option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option>' +
        '<option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option>' +
        '<option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option>' +
        '<option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option>' +
        '<option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option>' +
        '<option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option>' +
        '<option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option>' +
        '<option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option>' +
        '<option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option>' +
        '<option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option>' +
        '<option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option>' +
        '<option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option>' +
        '<option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option>' +
        '<option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option>' +
        '<option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option>' +
        '<option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>';

    // Provide legacy backwards-compatibility alias function mapping hooks for older files
    window.getUsaStatesHtml = function() { return window.globalStateDropdownOptionsHtml; };
    window.buildGlobalUsaStateDropdownOptionsHtml = function() { return window.globalStateDropdownOptionsHtml; };

    /**
     * Scans the active DOM playground for state select boxes and instantly attaches data.
     */
    function autoDiscoverAndHydrateStateDropdowns() {
        // Target selectors based on your taxonomy naming patterns
        const stateSelectors = document.querySelectorAll(
            'select[id*="state"], select[name*="state"], select[id*="formation"], select[name*="formation"], .state-dropdown-select'
        );

        stateSelectors.forEach(dropdown => {
            if (!dropdown) return;

            // ðŸŸ¢ STEP 1: If the dropdown is empty or only has 1 template option placeholder, inject options
            if (dropdown.children.length <= 1 && !dropdown.dataset.statesHydrated) {
                console.log(`[State Engine] Automatically injecting options into dropdown element: #${dropdown.id || dropdown.name}`);
                
                const currentSelectedValueBackup = dropdown.value || localStorage.getItem('wizard_selected_state') || "";
                
                dropdown.innerHTML = window.globalStateDropdownOptionsHtml;
                dropdown.dataset.statesHydrated = "true";

                // ðŸŸ¢ STEP 2: Restore previous choices seamlessly if a cache record exists
                if (currentSelectedValueBackup) {
                    dropdown.value = currentSelectedValueBackup.toUpperCase();
                    dropdown.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }

            // ðŸŸ¢ STEP 3: Arm real-time change interceptors to save selections instantly for Step 5 processing
            if (!dropdown.dataset.stateChangeHooked) {
                dropdown.addEventListener("change", (e) => {
                    const chosenState = e.target.value;
                    if (chosenState) {
                        localStorage.setItem('wizard_selected_state', chosenState.toUpperCase());
                        localStorage.setItem(`wizard_field_${e.target.id || e.target.name}`, chosenState.toUpperCase());
                        
                        // Recalculate secondary step prices instantly if methods exist
                        if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
                            window.updateDynamicPricingMatrixVanilla();
                        }
                    }
                });
                dropdown.dataset.stateChangeHooked = "true";
            }
        });
    }

    window.autoDiscoverAndHydrateStateDropdowns = autoDiscoverAndHydrateStateDropdowns;

    // ðŸ”„ AUTOMATED INTERLOCK: Attach to the late-binding mutation observer.
    // The exact millisecond your network router injects a service form file layout into Step 2,
    // this observer catches it, intercepts the select tag, and fills the states list instantly!
    document.addEventListener("DOMContentLoaded", () => {
        autoDiscoverAndHydrateStateDropdowns();

        const formRootNode = document.getElementById("dynamic-onboarding-fields-root") || document.body;
        if (formRootNode) {
            const stateObserverInstance = new MutationObserver(() => {
                autoDiscoverAndHydrateStateDropdowns();
            });
            stateObserverInstance.observe(formRootNode, { childList: true, subtree: true });
        }
    });
})();

// This function should be called inside your step-navigation transitions (e.g., when clicking "Continue" on Step 2)
function saveActiveServiceFormStates() {
  console.log("[Data Matrix] Dynamically serializing current service form fields...");

  // 1. GLOBAL PATCH INTERCEPT: Force create required fields if they are missing from the active form
  const formContainer = document.getElementById("step-panel-2");
  if (formContainer) {
    // Check if standard email field is already defined anywhere in the form
    let emailField = formContainer.querySelector('input[type="email"]') || formContainer.querySelector('[id*="email"], [name*="email"]');
    if (!emailField) {
      const emailWrapper = document.createElement("div");
      emailWrapper.className = "form-group form-row";
      emailWrapper.style.cssText = "margin-bottom: 16px; display: flex; flex-direction: column; width: 100%; box-sizing: border-box;";
      emailWrapper.innerHTML = `
        <label style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44); margin-bottom: 6px;">Contact Email Address <span style="color: #b91c1c;">*</span></label>
        <input type="email" id="global_contact_email" name="global_contact_email" required class="form-control text-field-style" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; width: 100%; box-sizing: border-box;">
      `;
      formContainer.appendChild(emailWrapper);
    }

    // Check if standard phone line exists
    let phoneField = formContainer.querySelector('input[type="tel"]') || formContainer.querySelector('[id*="phone"], [name*="phone"], [id*="tel"]');
    if (!phoneField) {
      const phoneWrapper = document.createElement("div");
      phoneWrapper.className = "form-group form-row";
      phoneWrapper.style.cssText = "margin-bottom: 16px; display: flex; flex-direction: column; width: 100%; box-sizing: border-box;";
      phoneWrapper.innerHTML = `
        <label style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44); margin-bottom: 6px;">Primary Contact Phone <span style="color: #b91c1c;">*</span></label>
        <input type="tel" id="global_contact_phone" name="global_contact_phone" required class="form-control text-field-style" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; width: 100%; box-sizing: border-box;">
      `;
      formContainer.appendChild(phoneWrapper);
    }

    // Check if Owner / Authorized Signatory field exists
    let ownerField = formContainer.querySelector('[id*="owner"], [name*="owner"], [id*="incorporator"], [id*="organizer"]');
    if (!ownerField) {
      const ownerWrapper = document.createElement("div");
      ownerWrapper.className = "form-group form-row";
      ownerWrapper.style.cssText = "margin-bottom: 16px; display: flex; flex-direction: column; width: 100%; box-sizing: border-box;";
      ownerWrapper.innerHTML = `
        <label style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44); margin-bottom: 6px;">Sole Company Owner / Authorized Person <span style="color: #b91c1c;">*</span></label>
        <input type="text" id="global_company_owner" name="global_company_owner" required class="form-control text-field-style" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; width: 100%; box-sizing: border-box;">
      `;
      formContainer.appendChild(ownerWrapper);
    }
  }

  // 2. STANDARD SERIALIZATION LOOP: Find and cache every user input inside Step 2
  const activeFormFields = document.querySelectorAll("#step-panel-2 input, #step-panel-2 select, #step-panel-2 textarea");
  
  activeFormFields.forEach(field => {
    const fieldIdentifier = field.id || field.name;
    if (!fieldIdentifier) return; 

    if (field.type === 'checkbox' || field.type === 'radio') {
      localStorage.setItem(`wizard_field_${fieldIdentifier}`, field.checked ? "true" : "false");
    } else {
      localStorage.setItem(`wizard_field_${fieldIdentifier}`, field.value);
    }
  });

  console.log("[Data Matrix Success] All unique service fields cached persistently.");
}

window.saveActiveServiceFormStates = saveActiveServiceFormStates;


