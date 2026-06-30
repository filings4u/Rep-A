// ============================================================================ //
// 🛡️ MOBILE VIRTUAL DOM PROTECTION AND AGNOSTIC HOOK BRIDGE (EXTENDED)
// ============================================================================ //
(function() {
    console.log("[Mobile Guard] Dynamic layout fallbacks initializing...");

    // 1. Mock the missing desktop sidebar elements to protect legacy script iterations
    if (!document.querySelector(".sticky-timeline-sidebar")) {
        const fakeSidebar = document.createElement("div");
        fakeSidebar.className = "sticky-timeline-sidebar";
        fakeSidebar.style.display = "none";
        
        for (let i = 1; i <= 7; i++) {
            const fakeRow = document.createElement("div");
            fakeRow.id = `timeline-row-${i}`;
            fakeRow.innerHTML = '<span class="toc-dot"></span><span class="toc-step-title"></span>';
            fakeSidebar.appendChild(fakeRow);
        }
        document.body.appendChild(fakeSidebar);
    }

    // 2. Prevent desktop timeline updates from triggering runtime null property failures
    if (typeof window.updateApplicationMapTimelineBubbles !== "function") {
        window.updateApplicationMapTimelineBubbles = function(currentStepIndex) {
            console.log(`[Mobile Path Override] Muted timeline bubbles refresh for step ${currentStepIndex}`);
            return true;
        };
    }

    // 3. Fallback tracking indicators to intercept loose desktop styling loops
    if (!document.getElementById("step-1-package-features-list")) {
        const dummyNode = document.createElement("div");
        dummyNode.id = "step-1-package-features-list";
        dummyNode.style.display = "none";
        document.body.appendChild(dummyNode);
    }

    // 4. NEW: Mock common structural required root IDs for your 100+ templates
    const missingTargetIds = [
        "wizard-route-service-id",
        "wizard-dynamic-form-target",
        "dynamic-form-fields",
        "step-2-right-rail-meta",
        "service-sidebar-help-target"
    ];

    missingTargetIds.forEach(id => {
        if (!document.getElementById(id)) {
            const mockContainer = document.createElement("div");
            mockContainer.id = id;
            mockContainer.style.cssText = "display: none !important; width: 0px; height: 0px; visibility: hidden;";
            document.body.appendChild(mockContainer);
            console.log(`[Mobile Guard] Safely polyfilled missing container ID: #${id}`);
        }
    });

    // 5. NEW: Catch-all patch to disable HTML5 validation overlays on hidden elements
    // This stops browser tooltips from firing on 0x0 collapsed desktop legacy elements
    document.addEventListener("DOMContentLoaded", () => {
        const structuralForms = document.querySelectorAll("form");
        structuralForms.forEach(form => {
            form.setAttribute("novalidate", "true");
        });
        console.log("[Mobile Guard] Form validation overrides armed.");
    });
})();



// ============================================================================ //
// 🔗 MOBILE PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE
// ============================================================================ //

// Core structural check to protect checkbox handlers from breaking inside mobile panels
if (typeof window.syncModalCheckboxChangeToBackgroundForm !== "function") { 
    window.syncModalCheckboxChangeToBackgroundForm = function(elementRef, event) { 
        console.warn("[Mobile Fallback] syncModalCheckboxChangeToBackgroundForm missing from view layers."); 
    }; 
}

function initializeUrlParameterParserEngineVanillaMobile() { 
    const searchUrlQueryStrings = new URLSearchParams(window.location.search); 
    const queryPassedService = searchUrlQueryStrings.get('service'); 
    const queryPassedPlan = searchUrlQueryStrings.get('plan'); 
    
    // Explicit target element IDs from your clean mobile code structure
    const inputServiceNode = document.getElementById("wizard-route-service-id"); 
    const inputPlanNode = document.getElementById("wizard-route-tier-id"); 

    // 1. Parse incoming website page targets and translate to full names dynamically 
    if (queryPassedService) { 
        window.routeActiveServiceKey = queryPassedService.toLowerCase().trim(); 
        if (inputServiceNode) { 
            if (window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) { 
                inputServiceNode.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name || ""; 
            } else { 
                let cleanLabel = window.routeActiveServiceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); 
                inputServiceNode.value = cleanLabel; 
            } 
        } 
    } 

    // 2. Parse incoming pricing click tiers and apply descriptive titles dynamically 
    if (queryPassedPlan) { 
        window.routeActivePlanKey = queryPassedPlan.toLowerCase().trim(); 
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

  // 3. 🟢 FIXED MOBILE FIELD GENERATION ON BOOT:
  // Triggers your dynamic form engine safely inside mobile container wrappers
  if (typeof window.executeStepTwoDynamicFormInjection === "function") {
    // FIX: Pass the active service key explicitly as the second argument so the engine doesn't break on local addresses
    const resolvedSlug = window.routeActiveServiceKey || searchUrlQueryStrings.get('service') || "";
    window.executeStepTwoDynamicFormInjection(true, resolvedSlug);
  } else if (typeof window.executeDynamicRegulatoryFieldInjection === "function") {
    window.executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  }
}

// Mount to the global window context for easy access
window.initializeUrlParameterParserEngineVanilla = initializeUrlParameterParserEngineVanillaMobile;

// ============================================================================ //
// 🚀 MANDATORY AUTO-RUN TRIGGER FOR 100+ SERVICES LAYER
// ============================================================================ //
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.initializeUrlParameterParserEngineVanillaMobile);
} else {
    // Run immediately if the DOM layout is already compiled and ready
    window.initializeUrlParameterParserEngineVanillaMobile();
}



// ============================================================================ //
// 💾 MOBILE CACHE AND RESTORE WIZARD FORM STATES LOGIC
// ============================================================================ //
function cacheAndRestoreWizardFormStatesVanillaMobile(isExecutionInitialLoad) { 
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
            console.error("[Mobile Cache Crypto Failure] Unable to compute key mask vector:", err); 
            return ""; 
        } 
    }; 

    // ============================================================================ // 
    // RECOVER PATH: Pulls data out of local storage and repopulates the DOM
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
            console.error("Mobile state data recovery parse error loop encountered: ", jsonErr); 
        } 
    } 

    // ============================================================================ // 
    // SAVE PATH: Collects data out of the DOM and pushes to local storage 
    // ============================================================================ // 
    if (!isExecutionInitialLoad) { 
        if (window.isWizardCurrentlyRestoringStateVanilla) return; 
        try { 
            const currentCacheData = JSON.parse(localStorage.getItem(cacheKeyNamespace) || "{}"); 
            
            // 🟢 TARGETS ACTIVE MASTER MOBILE ONBOARDING FORM CONTAINER
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
            console.error("Mobile state data saving write loop error encountered: ", saveErr); 
        } 
    } 
}

// Bind cleanly back into core execution layers
window.cacheAndRestoreWizardFormStatesVanilla = cacheAndRestoreWizardFormStatesVanillaMobile;

// ============================================================================ //
// 📋 MOBILE POWER OF ATTORNEY VALIDATION ENGINE
// ============================================================================ //
function evaluatePoaInputStateMatrixMobile() { 
    console.log("[Mobile POA Matrix] Evaluating Step 4 digital signature states..."); 
    
    // 1. TARGET ELEMENTS AGNOSTICALLY FROM THE MOBILE DOM TREE
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || document.getElementById("poa-next-btn"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 2. EVALUATE MOBILE ENTRY CONSTRAINTS
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

    // 4. MATRIX ENFORCEMENT: TOGGLE MOBILE FOOTER BUTTON STATE
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
// 🗺️ MOBILE UNIVERSAL DYNAMIC PARAMETER CAPTURE ENGINE
// ============================================================================ // 
function autoInjectMainWebsitePricingPlanMobile() { 
    const urlParams = new URLSearchParams(window.location.search); 
    const urlService = urlParams.get('service'); 
    const urlPlan = urlParams.get('plan'); 
    const urlState = urlParams.get('state') || urlParams.get('stateCode') || ""; 
    
    // 🛑 PATH ISOLATED ROUTING GUARD FOR MOBILE LANDING INTERFACES:
    // If organic mobile traffic lands on this wizard directly without parameters, 
    // bounce them safely out to a clean mobile get-started setup.
    if (!urlService || !urlPlan) { 
        const currentUriPath = window.location.pathname.toLowerCase(); 
        if (!currentUriPath.includes("mobile-wizard.html")) { 
            console.warn("[Mobile Traffic Router] Missing product intent details. Balancing path redirect..."); 
            window.location.href = "mobile-wizard.html"; 
            return; 
        } else { 
            console.log("[Mobile Traffic Router] Restoring clean baseline organic session context inside mobile wizard."); 
            return; 
        } 
    } 

    // Pure data-driven normalization mapping 
    let sanitizedServiceKey = urlService.toLowerCase().trim(); 
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
        console.log(`[Mobile Boot Sync Delay] Central service database unparsed for key "${sanitizedServiceKey}". Re-queueing...`); 
        setTimeout(autoInjectMainWebsitePricingPlanMobile, 100); 
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

    // 5. Force single structured calculations totals pass 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// Export the methods safely to global scopes window records
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrixMobile; 
window.autoInjectMainWebsitePricingPlan = autoInjectMainWebsitePricingPlanMobile;


// ============================================================================ //
// 📊 MOBILE FORM STATE TRACKING MATRIX (PROGRESSIVE MERGE RECOVERY)
// ============================================================================ //
function saveWizardFormStatesVanillaMobile() { 
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
            console.error("[Mobile Cache Crypto Failure] Unable to compute key mask vector:", err); 
            return ""; 
        } 
    }; 

    if (window.isWizardCurrentlyRestoringStateVanilla) return; 

    // 🟢 PROGRESSIVE STATE MERGE RECOVERY FOR MOBILE MULTI-STEP JUMPS
    let activeFormMetricsObject = {}; 
    try { 
        const preExistingCacheString = localStorage.getItem(cacheKeyNamespace); 
        if (preExistingCacheString) { 
            activeFormMetricsObject = JSON.parse(preExistingCacheString) || {}; 
        } 
    } catch (parseCacheErr) { 
        console.warn("[Mobile State Engine] Baseline cache was unreadable, initializing clean payload.", parseCacheErr); 
        activeFormMetricsObject = {}; 
    } 

    // Prioritize your explicit master onboarding form element tree container
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
        console.log("[Mobile State Engine] Active form parameters saved to localStorage successfully."); 
    } catch (writeErr) { 
        console.error("[Mobile State Engine Fatal] LocalStorage write allocation failed:", writeErr); 
    } 
} 

// Expose the tracking manager cleanly back into global window boundaries 
window.saveWizardFormStatesVanilla = saveWizardFormStatesVanillaMobile;


// ============================================================================ //
// 🚀 MOBILE MASTER UNIFIED WIZARD BOOT ENGINE LAYER
// ============================================================================ //
window.wizardBootRetryAttempts = window.wizardBootRetryAttempts || 0; 

async function runUnifiedWizardBootEngineMobile() { 
    console.log("[Mobile Boot Engine] Initializing sequence-independent parameter scanning..."); 

    // ============================================================================ // 
    // 1. MOBILE SEQUENCE-AGNOSTIC EXTRACTION
    // ============================================================================ // 
    const urlEngineParams = new URLSearchParams(window.location.search); 
    let resolvedSlug = urlEngineParams.get('service') || urlEngineParams.get('package') || urlEngineParams.get('id') || ""; 
    let resolvedPlan = urlEngineParams.get('plan') || urlEngineParams.get('tier') || ""; 
    const resolvedState = urlEngineParams.get('state') || ""; 

    if (!resolvedSlug || !resolvedPlan) { 
        window.paramCheckRetryCount = window.paramCheckRetryCount || 0; 
        if (window.paramCheckRetryCount < 5) { 
            window.paramCheckRetryCount++; 
            console.warn(`[Mobile Boot Engine Guard] Parameters missing on frame pass. Retrying lookup (${window.paramCheckRetryCount}/5)...`); 
            setTimeout(runUnifiedWizardBootEngineMobile, 50); 
            return; 
        } 
        console.error("[Mobile Boot Engine Fatal] Missing parameters. Redirecting to default mobile standalone page."); 
        const dynamicSystemDefaultPath = "mobile-wizard.html"; 
        window.location.href = dynamicSystemDefaultPath; 
        return; 
    } 
    window.paramCheckRetryCount = 0; 

    // ============================================================================ // 
    // 2. TIMING PROTECTION SAFEGUARD (Network Polling Check)
    // ============================================================================ // 
    if (typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined") { 
        if (window.wizardBootRetryAttempts < 50) { 
            window.wizardBootRetryAttempts++; 
            console.log(`[Mobile Database Sync] Hydrating schema tables... Retry Track: ${window.wizardBootRetryAttempts}`); 
            setTimeout(runUnifiedWizardBootEngineMobile, 100); 
        } else { 
            window.isWizardEngineBootedVanilla = false; 
            console.error("[Mobile Boot Terminal Failure] Database connection timed out."); 
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
    // 3. SECURE MOBILE PARAMETER INITIALIZATION 
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
    // 4. CRITICAL VISIBILITY CONSTRAINTS: Isolated Single Column Mobile Panel Activation 
    // ============================================================================ // 
    const visiblePanels = document.querySelectorAll('[id^="step-panel-"]'); 
    visiblePanels.forEach(function(panel) { 
        const panelIndex = parseInt(panel.id.replace("step-panel-", ""), 10); 
        if (panelIndex === window.currentWizardActiveStep) { 
            panel.classList.add("active"); 
            
            // ANTI-SMASHING STRUCTURAL OVERRIDES FOR INDEPENDENT PANELS
            panel.style.setProperty("display", "block", "important"); 
            panel.style.setProperty("width", "100%", "important"); 
            panel.style.setProperty("box-sizing", "border-box", "important"); 
            panel.style.setProperty("float", "none", "important"); 
        } else { 
            panel.classList.remove("active"); 
            panel.style.setProperty("display", "none", "important"); 
        } 
    }); 

    // ============================================================================ // 
    // 5. MOBILE DATA INJECTIONS GENERATION PASS 
    // ============================================================================ // 
    const isEngineReady = window.routeActiveServiceKey && window.currentWizardActiveStep; 
    if (!isEngineReady) { 
        console.warn("[Mobile Boot Engine] Route indicators missing. Re-queuing setup loop..."); 
        setTimeout(runUnifiedWizardBootEngineMobile, 50); 
        return; 
    } 

    if (typeof window.autoInjectMainWebsitePricingPlan === "function") { 
        window.autoInjectMainWebsitePricingPlan(); 
    } 
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") { 
        window.cacheAndRestoreWizardFormStatesVanilla(true); 
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

    // Hides timeline sync to protect layout flow boundaries if sidebar element maps are dropped
    if (typeof updateApplicationMapTimelineBubbles === "function" && document.querySelector(".sticky-timeline-sidebar")) { 
        updateApplicationMapTimelineBubbles(window.currentWizardActiveStep); 
    } 

    // ============================================================================ // 
    // 6. FORCE MOBILE TOTALS PRICING RE-CALCULATION CYCLES 
    // ============================================================================ // 
    if (typeof updateDynamicPricingMatrixVanilla === "function") { 
        updateDynamicPricingMatrixVanilla(); 
        console.log("[Mobile Boot Engine Success] App workflow pipeline active."); 
    } 
} 

// Export mobile context layer cleanly to global namespace
window.runUnifiedWizardBootEngine = runUnifiedWizardBootEngineMobile;


// ============================================================================ //
// 📋 MOBILE POWER OF ATTORNEY VALIDATION & PARAMETERS VERIFICATION ENGINE
// ============================================================================ //

function evaluatePoaInputStateMatrixMobile() { 
    console.log("[Mobile POA Matrix] Evaluating Step 4 digital signature states..."); 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || document.getElementById("poa-next-btn"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
        } 
    } else { 
        isSignatureValid = true; 
    } 

    if (consentCheckbox) { 
        isConsentChecked = consentCheckbox.checked; 
    } else { 
        isConsentChecked = true; 
    } 

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
// ⚡ MOBILE FIELD REGEX VALIDATION LOGIC ENGINE
// ============================================================================ //
function validateStepInputParametersVanillaMobile(activeStep) { 
    var activePanel = document.getElementById("step-panel-" + activeStep); 
    if (!activePanel) return true; 
    
    var inputs = activePanel.querySelectorAll("input, select, textarea"); 
    var stepIsValid = true; 
    var firstInvalidElement = null; 
    
    var regexLetters = /^[\p{L}\s.'\-]+$/u; 
    var regexNumbers = /^\d+$/; 
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    inputs.forEach(function(el) { 
        if (el.type === "hidden" || el.disabled) return; 
        var val = el.value.trim(); 
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

    // 🟢 MOBILE FOCUS ASSISTANCE: 
    // Smoothly shifts the scroller view bounds directly over the error element target 
    if (!stepIsValid && firstInvalidElement) { 
        firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
        firstInvalidElement.reportValidity(); 
    } 
    return stepIsValid; 
} 

// Expose verification layers back to global tracking objects securely 
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrixMobile; 
window.validateStepInputParametersVanilla = validateStepInputParametersVanillaMobile;


// ============================================================================ //
// 📱 MOBILE INTERACTIVE EVENT LISTENERS & RUNTIME INTERLOCKS
// ============================================================================ //

function evaluatePoaInputStateMatrixMobile() { 
    console.log("[Mobile POA Matrix] Checking Step 4 digital signature fields..."); 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || document.getElementById("poa-next-btn"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 1. Validate full name entry 
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
            signatureInput.setCustomValidity(""); 
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
            consentCheckbox.setCustomValidity(""); 
        } 
    } else { 
        isConsentChecked = true; 
    } 

    // 3. Update Button State Immediately for Touch Viewports
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
 * Mobile Validation Interceptor Patch 
 * Forces routing matrix evaluation for Step 4 manually to drop runtime loop crashes
 */ 
const originalValidatorMobile = window.validateStepInputParametersVanilla; 
window.validateStepInputParametersVanilla = function(activeStep) { 
    if (parseInt(activeStep, 10) === 4) { 
        return evaluatePoaInputStateMatrixMobile(); 
    } 
    return originalValidatorMobile ? originalValidatorMobile(activeStep) : true; 
}; 

/** 
 * Automates touch-safe listener bindings to prevent keyup multi-stack memory leaks
 */ 
function attachPoaValidationListenersMobile() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 

    if (signatureInput && !signatureInput.dataset.listenerActive) { 
        signatureInput.addEventListener("input", evaluatePoaInputStateMatrixMobile); 
        signatureInput.dataset.listenerActive = "true"; 
    } 

    if (consentCheckbox && !consentCheckbox.dataset.listenerActive) { 
        consentCheckbox.addEventListener("change", evaluatePoaInputStateMatrixMobile); 
        consentCheckbox.dataset.listenerActive = "true"; 
    } 
} 

// 📦 GLOBAL EXPOSURE 
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrixMobile; 
window.attachPoaValidationListeners = attachPoaValidationListenersMobile; 

// Run boot operations on document load
document.addEventListener("DOMContentLoaded", () => { 
    if (typeof window.runUnifiedWizardBootEngine === "function") { 
        window.runUnifiedWizardBootEngine(); 
    } 
    evaluatePoaInputStateMatrixMobile(); 
    attachPoaValidationListenersMobile(); 
}); 

// Re-verify and bind elements when Step 4 panel mounts or switches display conditions
const poaObserverTarget = document.getElementById("step-panel-4"); 
if (poaObserverTarget) { 
    const poaVisibilityObserver = new MutationObserver(() => { 
        if (poaObserverTarget.style.display !== "none") { 
            attachPoaValidationListenersMobile(); 
            evaluatePoaInputStateMatrixMobile(); 
        } 
    }); 
    poaVisibilityObserver.observe(poaObserverTarget, { attributes: true, attributeFilter: ["style"] }); 
} 

console.log("[Mobile Dynamic Registry] Event listener system successfully initialized.");


// ============================================================================ //
// 🔌 CENTRAL MOBILE EVENT LISTENER INTERCEPT APP LIFE-CYCLE
// ============================================================================ //

function runUnifiedPlatformLifecycleBootMobile() { 
    console.log("[Mobile Lifecycle Engine] Triggering application operational boot sequence..."); 

    // 🛡️ RUNTIME PIPELINE GUARD: Verify that crucial configuration scripts or variables are parsed before running.
    const isCoreDatabaseReady = typeof window.getPricingConfiguration === "function" || window.CENTRAL_SERVICE_PLAN_DB; 
    if (!isCoreDatabaseReady) { 
        console.warn("[Mobile Lifecycle Engine Guard] Core data configuration or pricing methods are not yet ready. Retrying loop..."); 
        setTimeout(function() { 
            window.runUnifiedPlatformLifecycleBoot(); 
        }, 50); 
        return; 
    } 

    // 🟢 MOBILE STRUCTURAL REPAIR: Strips desktop 50px gap pushes and maximum width constraints 
    const wizardContainerElement = document.querySelector(".wizard-container"); 
    if (wizardContainerElement) { 
        wizardContainerElement.style.setProperty('margin', '0', 'important'); 
        wizardContainerElement.style.setProperty('max-width', '100%', 'important'); 
        wizardContainerElement.style.setProperty('width', '100%', 'important'); 
    } 

    // Clear out any previous inline overrides on form elements to restore original visibility rendering context instantly 
    const masterFormElement = document.getElementById("master-onboarding-form"); 
    if (masterFormElement) { 
        masterFormElement.style.removeAttribute ? masterFormElement.style.removeAttribute('display') : masterFormElement.style.removeProperty('display'); 
        masterFormElement.style.removeProperty('width'); 
        masterFormElement.style.removeProperty('max-width'); 
    } 

    // Mobile execution matrix layers mapping allocations
    if (typeof window.initializeDynamicChronometerWidget12Hr === "function" && !navigator.userAgent.includes("Mobile")) { 
        window.initializeDynamicChronometerWidget12Hr(); // Skip or run based on widget container existence
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

    console.log("[Mobile Lifecycle Engine Success] All operational layers initialized safely flush against device margins."); 
} 

// Map safely back to global scope records instantly 
window.runUnifiedPlatformLifecycleBoot = runUnifiedPlatformLifecycleBootMobile; 

// Combined Framework Mount: Keeps boot engines unified on a single path 
function runCombinedMasterBootSequenceMobile() { 
    console.log("[Mobile Master Orchestrator] Triggering single synchronized boot frame..."); 
    
    // 1. Kick off URL params parsing, view clipping, and step-aware form injections 
    if (typeof window.runUnifiedWizardBootEngine === "function") { 
        window.runUnifiedWizardBootEngine(); 
    } 
    
    // 2. Hydrate secondary platform parameters, widgets, layout un-squashers, and state recovery cycles 
    window.runUnifiedPlatformLifecycleBoot(); 
} 

if (document.readyState !== "loading") { 
    runCombinedMasterBootSequenceMobile(); 
} else { 
    document.addEventListener("DOMContentLoaded", runCombinedMasterBootSequenceMobile); 
}


// ============================================================================ //
// 🔘 MOBILE DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS
// ============================================================================ //
function toggleDbaPermissionWorkflowMobile(selectedValue) { 
    const wrapper = document.getElementById("dba_permission_matrix_wrapper"); 
    if (!wrapper) return; 
    
    // FORCE VERTICAL STACK instead of horizontal desktop flex configurations
    wrapper.style.display = (selectedValue === "yes") ? "block" : "none"; 
    
    if (selectedValue === "no") { 
        const consentSelect = document.getElementById("dba_has_consent"); 
        if (consentSelect) consentSelect.value = "yes"; 
        window.customSelectedDbaSearchServiceActive = false; 
        if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla(); 
    } 
} 

function toggleDbaSearchProcurementMobile(selectedValue) { 
    if (typeof updateDynamicPricingMatrixVanilla === "function") { 
        window.customSelectedDbaSearchServiceActive = (selectedValue === "no-buy"); 
        updateDynamicPricingMatrixVanilla(); 
    } 
} 

function toggleDbaEinReasonFieldMobile(selectedValue) { 
    const wrapper = document.getElementById("dba_ein_reason_wrapper"); 
    if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "block" : "none"; 
} 

function toggleDbaLicenseWorkflowMobile(selectedValue) { 
    const customInputWrapper = document.getElementById("dba_custom_license_wrapper"); 
    if (customInputWrapper) customInputWrapper.style.display = (selectedValue === "yes") ? "block" : "none"; 
    if (typeof updateDynamicPricingMatrixVanilla === "function") { 
        window.customSelectedDbaLicenseAuditServiceActive = (selectedValue === "no"); 
        updateDynamicPricingMatrixVanilla(); 
    } 
} 

function toggleDbaDurationFieldMobile(selectedValue) { 
    const wrapper = document.getElementById("dba_duration_term_wrapper"); 
    if (wrapper) wrapper.style.display = (selectedValue === "temporary") ? "block" : "none"; 
} 

function autoDiscoverAndHookInteractiveDbaFieldsMobile() { 
    const fieldMappingConfig = [ 
        { id: "dba_permission_toggle", handler: toggleDbaPermissionWorkflowMobile }, 
        { id: "dba_search_toggle", handler: toggleDbaSearchProcurementMobile }, 
        { id: "dba_ein_toggle", handler: toggleDbaEinReasonFieldMobile }, 
        { id: "dba_license_toggle", handler: toggleDbaLicenseWorkflowMobile }, 
        { id: "dba_duration_toggle", handler: toggleDbaDurationFieldMobile } 
    ]; 
    fieldMappingConfig.forEach(config => { 
        const targetElement = document.getElementById(config.id); 
        if (targetElement) { 
            config.handler(targetElement.value); 
            if (!targetElement.dataset.routingHooked) { 
                targetElement.addEventListener("change", (e) => { 
                    config.handler(e.target.value); 
                }); 
                targetElement.dataset.routingHooked = "true"; 
            } 
        } 
    }); 
} 

window.autoDiscoverAndHookInteractiveDbaFields = autoDiscoverAndHookInteractiveDbaFieldsMobile; 

// ============================================================================ // 
// 👥 PART 4: MOBILE LLC MEMBERSHIP CONTROLLER 
// ============================================================================ // 
function handleMembershipDropdownChangeMobile(selectElement) { 
    var chosenValue = selectElement.value; 
    var isSingleMember = (chosenValue === "1"); 
    var singleMemberBox = document.getElementById("single-member-question-wrapper"); 
    var membersBox = document.getElementById("dynamic-members-fields-root"); 
    if (!singleMemberBox || !membersBox) return; 
    
    singleMemberBox.innerHTML = ""; 
    membersBox.innerHTML = ""; 
    
    if (isSingleMember) { 
        // 🟢 FIXED MOBILE MARKUP STRUCTURAL REPAIR: 
        // Re-added the complete, valid missing opening select tag block to stop options collapsing on iOS/Android
        singleMemberBox.innerHTML = '<div class="wizard-input-group" style="margin-top: 14px; background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; width: 100% !important; box-sizing: border-box;">' + 
            '<label for="sole_member_choice" style="font-weight: 700; color: #0a1f44; display: block; margin-bottom: 6px; font-size: 0.85rem;">Are you the 1 Member of this company? *</label>' + 
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

function handleSoleMemberIdentityToggleMobile(answerValue) { 
    var membersBox = document.getElementById("dynamic-members-fields-root"); 
    if (!membersBox) return; 
    membersBox.innerHTML = ""; 
    if (answerValue === "no") { 
        if (typeof generateMultipleMembersInputForms === "function") { 
            generateMultipleMembersInputForms(1, membersBox); 
        } 
    } 
} 

window.handleMembershipDropdownChange = handleMembershipDropdownChangeMobile; 
window.handleSoleMemberIdentityToggle = handleSoleMemberIdentityToggleMobile; 

// ============================================================================ // 
// 📡 MOBILE LATE-BINDING MUTATION LISTENER BRIDGE 
// ============================================================================ // 
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
    autoDiscoverAndHookInteractiveDbaFieldsMobile(); 
}); 

// ============================================================================ //
// 🧭 MOBILE NAVIGATION & APPLICATION SLIDER PANELS (STEP 2 COMPLIANT)          //
// ============================================================================ //
function goToNextWizardStepMobile(targetStep, eventClickRef) { 
    window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1; 
    let normalizedTargetStep = targetStep; 
    if (targetStep && typeof targetStep === 'object') { 
        normalizedTargetStep = undefined; 
    } 
    if (typeof window.validateStepInputParametersVanilla === "function") { 
        const isCurrentViewValid = window.validateStepInputParametersVanilla(window.currentWizardActiveStep); 
        if (!isCurrentViewValid) return false; 
    } 
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 
    let nextStepIndex = window.currentWizardActiveStep + 1; 
    if (normalizedTargetStep && !isNaN(normalizedTargetStep)) { 
        nextStepIndex = parseInt(normalizedTargetStep, 10); 
    } 
    if (nextStepIndex > 7) return true; 
    switchWizardActiveViewLayoutMobile(nextStepIndex); 
} 

function goToPreviousWizardStepMobile() { 
    window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1; 
    let previousStepIndex = window.currentWizardActiveStep - 1; 
    if (previousStepIndex < 1) return false; 
    switchWizardActiveViewLayoutMobile(previousStepIndex); 
} 

function switchWizardActiveViewLayoutMobile(activeStepTarget) { 
    window.currentWizardActiveStep = activeStepTarget; 
    
    // Hide all validation tooltips from previous step to unlock screen height
    const activePanel = document.getElementById("step-panel-" + window.currentWizardActiveStep);
    if (activePanel) {
        activePanel.querySelectorAll("input, select, textarea").forEach(el => el.setCustomValidity(""));
    }

    for (let i = 1; i <= 7; i++) { 
        const panelNode = document.getElementById(`step-panel-${i}`); 
        if (panelNode) { 
            if (i === activeStepTarget) { 
                panelNode.classList.add("active"); 
                panelNode.style.setProperty("display", "block", "important"); 
            } else { 
                panelNode.classList.remove("active"); 
                panelNode.style.setProperty("display", "none", "important"); 
            } 
        } 
    } 

    const indicatorText = document.getElementById("wizardStepText"); 
    const indicatorBar = document.getElementById("wizardProgressBar"); 
    if (indicatorText) indicatorText.innerText = `Step ${activeStepTarget} of 7`; 
    if (indicatorBar) indicatorBar.style.width = `${(activeStepTarget / 7) * 100}%`; 

    if (activeStepTarget === 2) { 
        if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
            window.executeStepTwoDynamicFormInjection(null, window.routeActiveServiceKey); 
        } 
    } 

    if (typeof window.runUnifiedWizardBootEngine === "function") { 
        window.runUnifiedWizardBootEngine(); 
    }

    // 🟢 DEFERRED REPOSITION FIX FOR STEP 2:
    // Pushes the footer row down AFTER dynamic script inputs are mounted into the DOM layout sheets
    if (activeStepTarget === 2) {
        setTimeout(function() {
            const masterForm = document.getElementById("master-onboarding-form"); 
            const actionFooter = document.querySelector(".wizard-action-footer") || document.querySelector(".mobile-sticky-footer"); 
            if (masterForm && actionFooter) { 
                masterForm.appendChild(actionFooter); 
            }
            // Force scroll target calculation reset to zero parameters
            const scroller = document.querySelector(".m-form-scroller");
            if (scroller) scroller.scrollTop = 0;
        }, 50);
    }
} 

window.goToNextWizardStep = goToNextWizardStepMobile; 
window.goToPreviousWizardStep = goToPreviousWizardStepMobile; 
window.switchWizardActiveViewLayout = switchWizardActiveViewLayoutMobile;




// ============================================================================ //
// 🗺️ REPAIRED MOBILE SIDEBAR TIMELINE NAV LIGHTS ENGINE
// ============================================================================ //
function updateApplicationMapTimelineBubblesMobile(currentStepIndex) { 
    const activeStep = parseInt(currentStepIndex, 10) || 1; 
    console.log(`[Mobile Progress] Illuminating mobile navigation tracks for step: ${activeStep}`); 

    // Safety Override: Bypass layout loops if mobile layout strips out the sidebar elements entirely
    if (!document.querySelector(".sticky-timeline-sidebar")) return;

    for (let i = 1; i <= 7; i++) { 
        const rowNodes = document.querySelectorAll(`#timeline-row-${i}`); 
        rowNodes.forEach(rowNode => { 
            if (!rowNode) return; 
            const dotNode = rowNode.querySelector(".toc-dot"); 
            const titleNode = rowNode.querySelector(".toc-step-title"); 
            
            if (dotNode) { 
                dotNode.style.removeProperty("background-color"); 
                dotNode.style.removeProperty("border"); 
                dotNode.style.removeProperty("box-shadow"); 
            } 
            if (titleNode) { 
                titleNode.style.setProperty("color", "#64748b", "important"); 
                titleNode.style.setProperty("font-weight", "500", "important"); 
            } 
            
            if (i === activeStep) { 
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
                if (dotNode) { 
                    dotNode.style.setProperty("background-color", "#10b981", "important"); 
                    dotNode.style.setProperty("border", "3px solid #10b981", "important"); 
                } 
                if (titleNode) { 
                    titleNode.style.setProperty("color", "#0a1f44", "important"); 
                    titleNode.style.setProperty("font-weight", "700", "important"); 
                } 
            } else { 
                if (dotNode) { 
                    dotNode.style.setProperty("background-color", "#e2e8f0", "important"); 
                    dotNode.style.setProperty("border", "3px solid #e2e8f0", "important"); 
                } 
            } 
        }); 
    } 
} 

window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubblesMobile; 

// ============================================================================ // 
// 🎨 MOBILE NEUTRAL SELECTION SKINNING MODULE (STEP 3 VIEW ISOLATION) 
// ============================================================================ // 
function autoSkinSelectedUpsellCardsMobile() { 
    const step3Checkboxes = document.querySelectorAll( 
        '#step-panel-3 input[type="checkbox"], #step-3 input[type="checkbox"], .upsell-checkbox' 
    ); 
    step3Checkboxes.forEach(checkbox => { 
        if (!checkbox) return; 
        const parentCard = checkbox.closest('.upsell-market-card') || checkbox.closest('.card') || checkbox.parentElement?.parentElement; 
        if (parentCard) { 
            if (checkbox.checked) { 
                parentCard.style.setProperty("border", "1px solid #cbd5e1", "important"); 
                parentCard.style.setProperty("background-color", "#f8fafc", "important"); 
            } else { 
                parentCard.style.setProperty("border", "1px solid #e2e8f0", "important"); 
                parentCard.style.setProperty("background-color", "#ffffff", "important"); 
            } 
        } 
    }); 
} 

window.autoSkinSelectedUpsellCards = autoSkinSelectedUpsellCardsMobile; 

// Secure Intercept: Wrap baseline checkbox toggle pass if initialized on the window scope 
const baselineUpsellTogglePassMobile = window.handleBackgroundUpsellTogglePass; 
window.handleBackgroundUpsellTogglePass = function(checkboxElement) { 
    if (typeof baselineUpsellTogglePassMobile === "function") { 
        baselineUpsellTogglePassMobile(checkboxElement); 
    } 
    autoSkinSelectedUpsellCardsMobile(); 
}; 

if (document.readyState !== "loading") { 
    setTimeout(autoSkinSelectedUpsellCardsMobile, 150); 
} else { 
    document.addEventListener("DOMContentLoaded", () => { 
        setTimeout(autoSkinSelectedUpsellCardsMobile, 150); 
    }); 
}


// ============================================================================ //
// 🛡️ MOBILE POWER OF ATTORNEY MATRIX CORE ENGINE & WARNING CLICK GATES
// ============================================================================ //
window.hasUserScrolledToBottomPoa = window.hasUserScrolledToBottomPoa || false; 

function evaluatePoaInputStateMatrixMobile() { 
    console.log("[Mobile POA Matrix] Actively evaluating Step 4 digital signature states..."); 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.querySelector("#step-panel-4 .btn-wizard-main") || document.getElementById("poa-next-btn"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 1. Validate full name format (Must contain first and last name separated by a space) 
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
            signatureInput.setCustomValidity(""); 
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
        return false; 
    } 

    // 4. Matrix Enforcement: Toggle Button Visual State Rules for Mobile Footer Targets
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

window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrixMobile; 

/** 
 * Evaluates inputs silently during field updates to remove active warning banners if resolved. 
 */ 
function checkPoaInputStateSilentlyMobile() { 
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
function displayOrangePoaWarningBannerMobile(alertMessageText) { 
    const existingWarning = document.getElementById("poa-orange-alert-banner"); 
    if (existingWarning) { 
        existingWarning.querySelector('.banner-text-span').innerText = alertMessageText; 
        existingWarning.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
        return; 
    } 

    const alertBannerContainer = document.createElement("div"); 
    alertBannerContainer.id = "poa-orange-alert-banner"; 
    
    // MODIFIED FOR MOBILE: Changed grid-column value to span 1 and added flex-direction: column fallback for thin viewports
    alertBannerContainer.style.cssText = "grid-column: span 1; display: flex; align-items: flex-start; gap: 10px; background: #fff7ed; border: 1px solid #ffedd5; border-left: 5px solid #f97316; padding: 12px; border-radius: 6px; color: #c2410c; font-weight: 600; font-size: 0.825rem; margin-bottom: 16px; width: 100%; box-sizing: border-box; font-family: sans-serif; line-height: 1.4; text-align: left;"; 
    alertBannerContainer.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: #f97316; font-size: 1rem; flex-shrink: 0; margin-top: 2px;"></i> <span class="banner-text-span" style="flex-grow: 1;">${alertMessageText}</span>`; 

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
function runActivePoaClickValidationGateMobile() { 
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
        displayOrangePoaWarningBannerMobile("Action Required: Please scroll down to the bottom of the disclosure document container to verify and clear the onboarding terms block."); 
        return false; 
    } 

    // 🚩 Validation Gate 2: Track signature name string text values 
    if (!isSignatureValid) { 
        displayOrangePoaWarningBannerMobile("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box."); 
        if (signatureInput) signatureInput.focus(); 
        return false; 
    } 

    // 🚩 Validation Gate 3: Track checkbox verification confirmation choices 
    if (!isConsentChecked) { 
        displayOrangePoaWarningBannerMobile("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols."); 
        if (consentCheckbox) consentCheckbox.focus(); 
        return false; 
    } 

    const existingWarning = document.getElementById("poa-orange-alert-banner"); 
    if (existingWarning) existingWarning.remove(); 
    return true; 
} 

window.runActivePoaClickValidationGate = runActivePoaClickValidationGateMobile;

/** 
 * Global Interceptor Hook integration: Handover validation strictly on Step 4 
 */ 
const baselineStepValidatorMobile = window.validateStepInputParametersVanilla; 
window.validateStepInputParametersVanilla = function(activeStep) { 
    if (parseInt(activeStep, 10) === 4) { 
        return runActivePoaClickValidationGateMobile(); 
    } 
    return typeof baselineStepValidatorMobile === "function" ? baselineStepValidatorMobile(activeStep) : true; 
};

// ============================================================================ //
// 📱 MOBILE INPUT SECURITY RE-ENGAGEMENT & EVENT TUNNEL MATRIX
// ============================================================================ //

/** 
 * Ensures inputs are fully operational and un-frozen in all mobile screen dimensions.
 */ 
function forceUnfreezeStep4FormInputsMobile() { 
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
 * Clean Consolidated Mobile Scroll and Field Interaction Listener Hook Bridge
 */ 
function attachPoaValidationListenersMobile() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container"); 

    if (signatureInput && !signatureInput.dataset.listenerActive) { 
        signatureInput.addEventListener("input", () => { 
            if (typeof window.checkPoaInputStateSilently === "function") window.checkPoaInputStateSilently(); 
            if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix(); 
        }); 
        signatureInput.dataset.listenerActive = "true"; 
    } 

    if (consentCheckbox && !consentCheckbox.dataset.listenerActive) { 
        consentCheckbox.addEventListener("change", () => { 
            if (typeof window.checkPoaInputStateSilently === "function") window.checkPoaInputStateSilently(); 
            if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix(); 
        }); 
        consentCheckbox.dataset.listenerActive = "true"; 
    } 

    if (scrollBox && !scrollBox.dataset.scrollHooked) { 
        scrollBox.addEventListener("scroll", function(e) { 
            const target = e.target; 
            // Mobile Optimization: +25 buffer ensures touch scroll triggers reliably on high-DPI screens
            if (target.scrollHeight - target.scrollTop <= target.clientHeight + 25) { 
                window.hasUserScrolledToBottomPoa = true; 
                if (typeof window.checkPoaInputStateSilently === "function") window.checkPoaInputStateSilently(); 
                if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix(); 
            } 
        }); 
        scrollBox.dataset.scrollHooked = "true"; 
    } 
} 

// ============================================================================ // 
// 🎨 CORPORATE DESIGN RE-SKIN: UNIFIED APPLICATION COMPLIANCE BANNER (MOBILE) 
// ============================================================================ // 
function displayOrangePoaWarningBannerMobile(messageText) { 
    const poaPanel = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (!poaPanel) return; 

    let warningBox = document.getElementById("poa-orange-alert-banner"); 
    if (!warningBox) { 
        warningBox = document.createElement("div"); 
        warningBox.id = "poa-orange-alert-banner"; 
        
        // MODIFIED FOR MOBILE: Adjusted padding and shadows to maintain app appearance inside narrow bounds
        warningBox.style.cssText = "background-color: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #0a1f44; color: #0a1f44; padding: 12px 14px; font-weight: 700; font-size: 0.825rem; border-radius: 8px; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; box-shadow: 0 2px 4px rgba(10, 31, 68, 0.03); font-family: system-ui, sans-serif; text-align: left;"; 
        
        const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container"); 
        if (scrollBox) { 
            scrollBox.parentNode.insertBefore(warningBox, scrollBox); 
        } else { 
            poaPanel.insertBefore(warningBox, poaPanel.firstChild); 
        } 
    } 
    warningBox.innerHTML = ` <i class="fa-solid fa-circle-info" style="color: #10b981; font-size: 1.1rem; flex-shrink: 0;"></i> <span style="line-height: 1.4; color: #0a1f44; font-weight: 600;">${messageText}</span> `; 
    warningBox.scrollIntoView({ behavior: "smooth", block: "center" }); 
} 

// 📦 GLOBAL SCOPE EXPOSURE AND OBSERVER OVERRIDES
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputsMobile; 
window.attachPoaValidationListeners = attachPoaValidationListenersMobile; 
window.displayOrangePoaWarningBanner = displayOrangePoaWarningBannerMobile; 

// 🟢 MOBILE WORKSPACE INTERACTION LOCK-RELEASE HOOK: 
function initializeStep4MutationObserverTrackingMobile() { 
    const targetPanelNode = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (!targetPanelNode) return; 

    const poaUnlockObserver = new MutationObserver((mutations) => { 
        if (targetPanelNode.style.display !== "none") { 
            console.log("[Mobile POA Matrix] Step 4 active view mount detected. Processing field checks..."); 
            forceUnfreezeStep4FormInputsMobile(); 
            attachPoaValidationListenersMobile(); 
            if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();
        } 
    }); 
    poaUnlockObserver.observe(targetPanelNode, { attributes: true, attributeFilter: ["style"] }); 
    window.poaUnlockObserverInstance = poaUnlockObserver; 
} 

// Initialize components cleanly on lifecycle entry points
if (document.readyState !== "loading") { 
    initializeStep4MutationObserverTrackingMobile(); 
    forceUnfreezeStep4FormInputsMobile(); 
    attachPoaValidationListenersMobile(); 
} else { 
    document.addEventListener("DOMContentLoaded", () => {
        initializeStep4MutationObserverTrackingMobile(); 
        forceUnfreezeStep4FormInputsMobile(); 
        attachPoaValidationListenersMobile(); 
    }); 
}

// ============================================================================ //
// 🔌 MOBILE STEP 3 RENDER TARGET SYNCHRONIZATION BRIDGE (TIMING RESILIENT)
// ============================================================================ //
function autoInitializeStep3MarketplaceCatalogMobile() { 
    const htmlMarketplaceBox = document.getElementById("wizard-dynamic-upsells-render-target"); 
    const isStateConfigReady = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || window.CENTRAL_ADDON_DB; 
    
    if (htmlMarketplaceBox && typeof window.renderTargetUpsellsListPanel === "function" && isStateConfigReady) { 
        console.log("[Mobile Marketplace Bridge] Injecting catalog items..."); 
        const activeCatalog = window.unifiedCatalogItems || window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {}; 
        window.renderTargetUpsellsListPanel(activeCatalog, htmlMarketplaceBox); 
    } else if (htmlMarketplaceBox) { 
        setTimeout(autoInitializeStep3MarketplaceCatalogMobile, 50); 
    } 
} 

document.addEventListener("DOMContentLoaded", autoInitializeStep3MarketplaceCatalogMobile); 

// ============================================================================ // 
// 🛠️ MOBILE WORKSPACE CARD COMPILER (ANTI-SMASH CARD OVERRIDES)
// ============================================================================ // 
function renderTargetUpsellsListPanelMobile(catalog, renderTarget) { 
    if (!catalog || !renderTarget) return {}; 
    
    if (Object.keys(catalog).length > 0) { 
        let marketplaceCardsHtml = ""; 
        const mappingCoordinates = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
        
        Object.keys(catalog).forEach(catalogSlug => { 
            const item = catalog[catalogSlug]; 
            if (!item) return; 
            
            const itemDesc = item.description || item.desc || ""; 
            if (!itemDesc || itemDesc.trim() === "") { 
                return; // Skip blank records
            } 
            
            const stateTrackingKey = mappingCoordinates[catalogSlug] || catalogSlug; 
            const isFlagTrue = window[stateTrackingKey] === true || window[stateTrackingKey] === "yes" || String(window[stateTrackingKey]) === "true"; 
            const itemName = item.label || item.name; 
            const itemPrice = parseFloat(item.price) || 0; 
            
            // MODIFIED FOR MOBILE: Dropped wide flex-rows, switched components to flex-direction: column stacks
            marketplaceCardsHtml += ` 
                <div class="upsell-market-card" style="background:#ffffff; border:1px solid #e2e8f0; padding:14px; border-radius:8px; display:flex; flex-direction:column; gap:12px; align-items:flex-start; box-sizing:border-box; width:100%; transition:all 0.2s ease; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);"> 
                    <div style="display:flex; flex-direction:column; gap:4px; min-width:0; width:100%;"> 
                        <span style="font-weight:800; font-size:0.95rem; color:#0a1f44; display:block;">${itemName}</span> 
                        <p style="margin:0; font-size:0.8rem; color:#64748b; line-height:1.4; text-align:left;">${itemDesc}</p> 
                    </div> 
                    
                    <!-- Sub-action row alignment sets pricing details underneath text parameters safely -->
                    <div style="display:flex; flex-direction:row; align-items:center; justify-content:space-between; width:100%; border-top:1px solid #f1f5f9; padding-top:10px; margin-top:2px;"> 
                        <span style="font-family:monospace; font-weight:700; color:#10b981; font-size:1.05rem;">$${itemPrice.toFixed(2)}</span> 
                        <label style="display:flex; align-items:center; gap:8px; font-size:0.825rem; font-weight:700; color:#0a1f44; cursor:pointer; margin:0; user-select:none;"> 
                            <input type="checkbox" class="upsell-checkbox" id="${stateTrackingKey}" data-price="${itemPrice}" data-name="${itemName}" style="width:20px; height:20px; cursor:pointer;" ${isFlagTrue ? 'checked' : ''} onchange="handleBackgroundUpsellTogglePass(this)"> Activate 
                        </label> 
                    </div> 
                </div>`; 
        }); 
        renderTarget.innerHTML = marketplaceCardsHtml; 
    } 
    
    window.unifiedCatalogItems = catalog; 
    console.log("[Mobile Marketplace Compiler] Compiled card list blocks isolated safely."); 
    
    if (typeof window.autoSkinSelectedUpsellCards === "function") { 
        window.autoSkinSelectedUpsellCards(); 
    } 
    return catalog; 
} 

if (typeof window.handleBackgroundUpsellTogglePass !== "function") { 
    window.handleBackgroundUpsellTogglePass = function(checkboxElement) { 
        console.log("[Mobile Marketplace Pass] Selection sync triggered."); 
        if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
            window.updateDynamicPricingMatrixVanilla(); 
        } 
    }; 
} 

window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanelMobile; 

// ============================================================================ // 
// 🧼 MOBILE STEP 3 VISUAL OVERLAY CLEANER
// ============================================================================ // 
function eliminateBlankDescriptionUpsellsFromStep3Mobile() { 
    console.log("[Mobile Marketplace Guard] Cleaning Step 3 elements layout fields..."); 
    const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3"); 
    if (!step3Container) return; 
    
    const productCards = step3Container.querySelectorAll('.upsell-market-card'); 
    productCards.forEach(card => { 
        if (!card) return; 
        const paragraphNode = card.querySelector("p"); 
        const cardText = card.innerText || ""; 
        let isDescriptionMissing = false; 
        
        if (paragraphNode) { 
            if (paragraphNode.innerText.trim() === "") { 
                isDescriptionMissing = true; 
            } 
        } else { 
            const textLinesCount = cardText.split('\n').filter(line => line.trim().length > 0).length; 
            if (textLinesCount <= 2 && (cardText.includes("Activate") || cardText.includes("nea_service"))) { 
                isDescriptionMissing = true; 
            } 
        } 
        if (isDescriptionMissing) { 
            card.remove(); 
            console.log("[Mobile Marketplace Guard] Destroyed empty-description mobile element card."); 
        } 
    }); 
} 

var step5ContainerElement = document.getElementById("step-panel-5") || document.querySelector('[data-step="5"]'); 
if (step5ContainerElement) { 
    step5ContainerElement.style.position = "relative"; 
} 

document.addEventListener("DOMContentLoaded", () => { 
    setTimeout(eliminateBlankDescriptionUpsellsFromStep3Mobile, 200); 
}); 

window.eliminateBlankDescriptionUpsellsFromStep3 = eliminateBlankDescriptionUpsellsFromStep3Mobile;


// ============================================================================ //
// 🖋️ MOBILE LIVE CURSIVE SIGNATURE MIRROR PREVIEW MATRIX
// ============================================================================ //
function initCursiveSignatureCaptureLivePreviewMobile() { 
    const textInputField = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const cursivePreviewField = document.getElementById("cursive-signature-preview"); 
    
    if (!textInputField || !cursivePreviewField) { 
        console.log("[Mobile Signature Preview] Active preview elements not loaded. Postponing hook."); 
        return; 
    } 

    // Bind real-time input mirror interceptor pass safely for touch input fields
    if (!textInputField.dataset.previewHooked) { 
        textInputField.addEventListener("input", (e) => { 
            const currentString = e.target.value.trim(); 
            if (currentString.length > 0) { 
                cursivePreviewField.textContent = currentString; 
                cursivePreviewField.style.setProperty("color", "#0066cc", "important"); 
                cursivePreviewField.style.setProperty("font-style", "normal", "important"); 
            } else { 
                cursivePreviewField.textContent = "Your Signature"; 
                cursivePreviewField.style.setProperty("color", "#64748b", "important"); 
            } 
        }); 
        textInputField.dataset.previewHooked = "true"; 
        console.log("[Mobile Signature Preview] Live preview sync successfully armed."); 
    } 
} 

document.addEventListener("DOMContentLoaded", initCursiveSignatureCaptureLivePreviewMobile); 

// Observer helper pass to re-arm listeners if Step 4 panel mounts dynamically later 
const poaPreviewPanel = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
if (poaPreviewPanel) { 
    const previewObserver = new MutationObserver(() => { 
        if (poaPreviewPanel.style.display !== "none") { 
            setTimeout(initCursiveSignatureCaptureLivePreviewMobile, 50); 
        } 
    }); 
    previewObserver.observe(poaPreviewPanel, { attributes: true, attributeFilter: ["style"] }); 
} 

window.initCursiveSignatureCaptureLivePreview = initCursiveSignatureCaptureLivePreviewMobile; 

// ============================================================================ // 
// 🛡️ MOBILE ACTIVE NAVIGATION INTERCEPTOR (PERMANENTLY ACTIVE ON-CLICK BAR) 
// ============================================================================ // 
function runActivePoaClickValidationGateMobile(event) { 
    console.log("[Mobile POA Interceptor] Active click captured. Evaluating criteria fields..."); 
    
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

    // 🚩 MOBILE ON-CLICK GATE 1: Verify document scrolling threshold 
    if (!window.hasUserScrolledToBottomPoa) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Needed: Please scroll to the bottom of the disclosure to confirm you read it and understand it."); 
        } 
        return false; 
    } 

    // 🚩 MOBILE ON-CLICK GATE 2: Verify signature name format structure 
    if (!isSignatureValid) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box."); 
        } 
        if (signatureInput) signatureInput.focus(); 
        return false; 
    } 

    // 🚩 MOBILE ON-CLICK GATE 3: Verify checkbox authorization checkmarks 
    if (!isConsentChecked) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols."); 
        } 
        if (consentCheckbox) consentCheckbox.focus(); 
        return false; 
    } 

    // 🟢 SUCCESS: All criteria met. Remove alerts and slide mobile view to panel 5
    const existingWarning = document.getElementById("poa-orange-alert-banner"); 
    if (existingWarning) existingWarning.remove(); 
    console.log("[Mobile POA Interceptor] Step 4 compliance gates passed. Advancing to Step 5."); 

    // 💾 COMMIT POSITION TRACK TO SYSTEM ENGINE CACHE
    const cacheKey = "f4u_wizard_onboarding_state"; 
    try { 
        const currentCacheData = JSON.parse(localStorage.getItem(cacheKey) || "{}"); 
        currentCacheData.currentWizardActiveStep = 5; 
        localStorage.setItem(cacheKey, JSON.stringify(currentCacheData)); 
    } catch (cacheErr) { 
        console.warn("[Mobile POA Interceptor] Unable to back up position key index:", cacheErr); 
    } 

    if (typeof window.switchWizardActiveViewLayout === "function") { 
        window.switchWizardActiveViewLayout(5); 
    } 
    return true; 
} 

window.runActivePoaClickValidationGate = runActivePoaClickValidationGateMobile;


// ============================================================================ //
// 📡 MOBILE UN-FREEZER BRIDGE ATTACHMENT FOR INLINE SUBMIT CONTROL FIELDS
// ============================================================================ //

if (typeof window.forceUnfreezeStep4FormInputs !== "function") { 
    window.forceUnfreezeStep4FormInputs = function() { 
        const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 
        if (nextStepButton) { 
            nextStepButton.removeAttribute("disabled"); 
            nextStepButton.style.setProperty("opacity", "1", "important"); 
            nextStepButton.style.setProperty("cursor", "pointer", "important"); 
            nextStepButton.style.setProperty("pointer-events", "auto", "important"); 
            nextStepButton.setAttribute("onclick", "window.runActivePoaClickValidationGate(event)"); 
        } 
    }; 
} 

function forceUnfreezeStep4FormInputsMobile() { 
    console.log("[Mobile POA Security Hub] Forcing all form interaction channels active..."); 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main"); 
    
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
    if (nextStepButton) { 
        nextStepButton.removeAttribute("disabled"); 
        nextStepButton.disabled = false; 
        nextStepButton.style.setProperty("opacity", "1", "important"); 
        nextStepButton.style.setProperty("cursor", "pointer", "important"); 
        nextStepButton.style.setProperty("pointer-events", "auto", "important"); 
    } 
} 

function checkPoaInputStateSilentlyMobile() { 
    // Left empty intentionally to prevent baseline evaluation scripts from resetting button disabled states
    return true; 
} 

window.runActivePoaClickValidationGate = window.runActivePoaClickValidationGate; 
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputsMobile; 
window.checkPoaInputStateSilently = checkPoaInputStateSilentlyMobile; 

// ============================================================================ // 
// ⓘ MOBILE CONTEXTUAL TOOLTIP POP-UP ENGINE 
// ============================================================================ // 
function togglePoaContextualTooltipDisplayMobile(event) { 
    if (event && typeof event.stopPropagation === "function") { 
        event.stopPropagation(); 
    } 
    const tooltipCard = document.getElementById("poa-tooltip-card"); 
    const contentTarget = document.getElementById("poa-tooltip-content-target"); 
    if (!tooltipCard) return; 

    if (tooltipCard.style.display === "block") { 
        tooltipCard.style.display = "none"; 
        return; 
    } 

    const activeRouteKey = window.routeActiveServiceKey || "new-entrant-audit"; 
    let helpExplanationText = "This standard authorization permits our processing agents to securely submit mandatory regulatory documentation to federal and state registries on your behalf."; 
    
    if (activeRouteKey.includes("audit") || activeRouteKey.includes("nea")) { 
        helpExplanationText = "Mandatory Audit Requirement: This authorization allows filings4u, LLC to compile and submit your Driver Qualification Files (DQF), HOS review ledgers, and Consortium filings directly down to the FMCSA and DOT database registries to securely safeguard your operational motor carrier compliance scores."; 
    } else if (activeRouteKey.includes("corp") || activeRouteKey.includes("llc")) { 
        helpExplanationText = "Corporate Setup Requirement: This corporate agency agreement empowers our organizers to register your custom corporate Articles of Organization and coordinate Registered Agent address protocols safely inside your selected state filing jurisdiction."; 
    } else if (activeRouteKey.includes("dba") || activeRouteKey.includes("assumed")) { 
        helpExplanationText = "Assumed Name Registry: Authorizes our administrative processing specialists to file corporate assumed title certificates and publish structural state classification records."; 
    } 

    if (contentTarget) { 
        contentTarget.innerHTML = ` 
            <div style="display: flex; flex-direction: column; gap: 6px; font-family: system-ui, sans-serif; text-align: left;"> 
                <span style="font-weight: 800; color: #10b981; font-size: 0.75rem; text-transform: uppercase; display: flex; align-items: center; gap: 6px; letter-spacing: 0.3px;"> 
                    <i class="fa-solid fa-shield-halved" style="font-size: 0.85rem;"></i> Secure Authorization Notice 
                </span> 
                <p style="margin: 0; line-height: 1.4; color: #0a1f44; font-weight: 600; font-size: 0.775rem;">${helpExplanationText}</p> 
            </div> 
        `; 
    } 

    // 🟢 MOBILE RE-SKIN OVERRIDES: Forces absolute box layout safety parameters inside thin viewports
    tooltipCard.style.display = "block"; 
    tooltipCard.style.setProperty("background-color", "#ffffff", "important"); 
    tooltipCard.style.setProperty("border", "1px solid #e2e8f0", "important"); 
    tooltipCard.style.setProperty("border-left", "4px solid #0a1f44", "important"); 
    tooltipCard.style.setProperty("box-shadow", "0 4px 15px rgba(10, 31, 68, 0.1)", "important"); 
    
    // Position parameters alignment matrix blocks tooltip right wall breakout layouts
    tooltipCard.style.setProperty("position", "absolute", "important");
    tooltipCard.style.setProperty("right", "0px", "important");
    tooltipCard.style.setProperty("width", "280px", "important");
    tooltipCard.style.setProperty("z-index", "1000", "important");
} 

window.togglePoaDisplay = togglePoaContextualTooltipDisplayMobile; 
window.togglePoaContextualTooltipDisplay = togglePoaContextualTooltipDisplayMobile;

// Global safe runtime window handler exit pass
document.addEventListener("click", () => {
    const tooltipCard = document.getElementById("poa-tooltip-card");
    if (tooltipCard && tooltipCard.style.display === "block") {
        tooltipCard.style.display = "none";
    }
});


// ============================================================================ //
// 🟢 AUTOMATED GLOBAL DISMISSAL INTERCEPTOR (THE UN-TRAP ENGINE)
// ============================================================================ //
document.addEventListener("click", function(globalClickEvent) { 
    const tooltipCardElement = document.getElementById("poa-tooltip-card"); 
    if (tooltipCardElement && tooltipCardElement.style.display === "block") { 
        const wasClickInsideCard = tooltipCardElement.contains(globalClickEvent.target); 
        if (!wasClickInsideCard) { 
            console.log("[Mobile POA Tooltip] Outside click event intercepted. Dismissing overlay safely."); 
            tooltipCardElement.style.display = "none"; 
        } 
    } 
}); 

// ============================================================================ //
// 📊 STEP 5 INTERACTIVE VISIBILITY REAL-TIME INVOICE REFRESHER
// ============================================================================ //
function forceStep5SummaryInvoiceRefreshMobile() { 
    console.log("[Mobile Summary Hub] Step 5 panel active. Forcing calculations update..."); 
    
    if (typeof window.runPricingMatrixDataCrawlPass === "function") { 
        window.runPricingMatrixDataCrawlPass(); 
    } 
    if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") { 
        window.directInjectCartAddonsToSummaryStep5(); 
    } 
    if (typeof window.finalizePricingMatrixUiRender === "function") { 
        window.finalizePricingMatrixUiRender(); 
    } else if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// 🟢 SAFE MOBILE INTERCEPT ROUTER
if (typeof window.switchWizardActiveViewLayout === "function" && !window.switchWizardActiveViewLayout.isWrappedBySummaryEngine) { 
    const originalActiveLayoutSwapperMobile = window.switchWizardActiveViewLayout; 
    window.switchWizardActiveViewLayout = function(activeStepTarget) { 
        originalActiveLayoutSwapperMobile(activeStepTarget); 
        if (parseInt(activeStepTarget, 10) === 5) { 
            forceStep5SummaryInvoiceRefreshMobile(); 
        } 
    }; 
    window.switchWizardActiveViewLayout.isWrappedBySummaryEngine = true; 
} 

/** 
 * 🟢 UNIFIED ISOLATED VIEW OBSERVER ENGINE (MOBILE CONFIG)
 */ 
function initStep5PurchaseSummaryVisibilityTrackerMobile() { 
    const summaryPanelNodeElement = document.getElementById("step-panel-5") || document.getElementById("step-5"); 
    if (!summaryPanelNodeElement) return; 

    if (window.summaryPanelViewObserverInstance) { 
        window.summaryPanelViewObserverInstance.disconnect(); 
    } 

    const summaryPanelViewObserverMobile = new MutationObserver(() => { 
        if (summaryPanelNodeElement.style.display !== "none") { 
            forceStep5SummaryInvoiceRefreshMobile(); 
            // Mobile Optimization: +120ms buffer provides breathing room for rendering data vectors safely
            setTimeout(forceStep5SummaryInvoiceRefreshMobile, 120); 
        } 
    }); 
    summaryPanelViewObserverMobile.observe(summaryPanelNodeElement, { attributes: true, attributeFilter: ["style"] }); 
    window.summaryPanelViewObserverInstance = summaryPanelViewObserverMobile; 
} 

// Register initialization execution safely on app startup paths 
if (document.readyState !== "loading") { 
    initStep5PurchaseSummaryVisibilityTrackerMobile(); 
} else { 
    document.addEventListener("DOMContentLoaded", initStep5PurchaseSummaryVisibilityTrackerMobile); 
} 

// Maintain alias function pointers for backwards compatibility across older step layout files 
window.forceStep5PurchaseSummaryRenderCycle = forceStep5SummaryInvoiceRefreshMobile; 
window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefreshMobile; 
window.initStep5PurchaseSummaryVisibilityTracker = initStep5PurchaseSummaryVisibilityTrackerMobile;


// ============================================================================ //
// 🛒 MOBILE STEP 5 INVOICE CALCULATOR & MARKUP BUILDER ENGINE
// ============================================================================ //
function directInjectCartAddonsToSummaryStep5Mobile() { 
    console.log("[Mobile Summary Engine] Recalculating itemized matrix rows pass..."); 
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

        // MODIFIED FOR MOBILE: Extends the padding targets and spaces elements cleanly for smaller screens
        itemsMarkupString += ` 
            <div class="summary-receipt-row-item" data-source-checkbox-id="${checkbox.id}" style="display: flex; justify-content: space-between; align-items: flex-start; font-size: 0.875rem; color: #475569; padding: 12px 0; border-bottom: 1px dashed #e2e8f0; width: 100%; box-sizing: border-box; gap: 10px;"> 
                <div style="display: flex; flex-direction: column; gap: 6px; min-width: 0; flex: 1;"> 
                    <span style="font-weight: 600; color: #0a1f44; line-height: 1.3; text-align: left;">+ ${labelString}</span> 
                    <button type="button" onclick="window.removeSelectedAddonItemStraightFromSummaryCard('${checkbox.id}')" style="background: transparent; border: none; color: #ef4444; font-size: 0.8rem; font-weight: 700; cursor: pointer; padding: 6px 0; text-align: left; width: fit-content; display: flex; align-items: center; gap: 4px; transition: opacity 0.1s; min-height: 32px;"><i class="fa-solid fa-trash-can"></i> Remove from Invoice</button> 
                </div> 
                <span style="font-family: monospace; font-weight: 700; color: #0a1f44; font-size: 0.95rem; white-space: nowrap; padding-top: 2px;">$${priceValue.toFixed(2)}</span> 
            </div>`; 
    }); 

    const tierDisplayString = safePlanTier ? ' (' + safePlanTier + ')' : ''; 
    
    // Mobile Adjusted Baseline Header Row Element Layout Block
    const baselineHeaderRow = '<div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 4px; gap: 10px;"><span>' + safePlanName + tierDisplayString + '</span><span style="font-family: monospace; white-space: nowrap;">$' + basePackagePriceValue.toFixed(2) + '</span></div>'; 
    
    rowsTargetNode.innerHTML = baselineHeaderRow + itemsMarkupString; 

    // 🟢 DYNAMIC MOBILE MARKUP BINDING BRIDGE
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

window.directInjectCartAddonsToSummaryStep5 = directInjectCartAddonsToSummaryStep5Mobile;


// ============================================================================ //
// 📊 MOBILE STEP 5 CART REMOVE ACTUATOR ENGINE
// ============================================================================ //
function removeSelectedAddonItemStraightFromSummaryCardMobile(targetCheckboxElementId) { 
    if (!targetCheckboxElementId) return; 
    console.log(`[Mobile Summary Engine] Action Click: Wiping item card #${targetCheckboxElementId}`); 

    // 1. Locate the physical checkbox element container sitting inside Step 2 or 3 panel layers 
    const physicalCheckbox = document.getElementById(targetCheckboxElementId); 
    if (physicalCheckbox) { 
        physicalCheckbox.checked = false; 
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

    // Update local storage instantly to ensure cache parity on mobile state alterations
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

window.removeSelectedAddonItemStraightFromSummaryCard = removeSelectedAddonItemStraightFromSummaryCardMobile;

// ============================================================================ // 
// 📋 MOBILE DYNAMIC INTERACTIVE CHECKLIST ENGINE (POPUP MODAL CONTROL)
// ============================================================================ // 
function launchNewEntrantAuditRequirementsGuideModalMobile() { 
    let modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (!modalRoot) { 
        modalRoot = document.createElement("div"); 
        modalRoot.id = "f4u-price-guide-modal-root"; 
        
        // MODIFIED FOR MOBILE: Extends modal root outer paddings down to zero boundaries to utilize screen space
        modalRoot.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100dvh; background: rgba(0,0,0,0.6); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 12px; box-sizing: border-box;"; 
        document.body.appendChild(modalRoot); 
    } 

    const activeServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value || ""; 
    let resolvedConfig = null; 
    if (typeof window.getPricingConfiguration === "function" && activeServiceKey) { 
        resolvedConfig = window.getPricingConfiguration(activeServiceKey); 
    } 

    const modalTitle = resolvedConfig?.modalTitle || "Compliance Requirements Guide"; 
    const modalIntroduction = resolvedConfig?.modalIntro || "Review the mandatory regulatory parameters required for your filing profile below:"; 
    const checklistItemsSource = resolvedConfig?.checklistItems || []; 
    let contentRowsHtml = ""; 

    if (checklistItemsSource.length > 0) { 
        checklistItemsSource.forEach(item => { 
            const backgroundFormCheckbox = document.getElementById(item.targetId) || document.querySelector("input[id*='" + item.targetId + "']"); 
            const isChecked = backgroundFormCheckbox ? backgroundFormCheckbox.checked : false; 
            
            // MODIFIED FOR MOBILE: Adjusted row blocks to stack input text vertically if strings get too long for narrow frames
            contentRowsHtml += ` 
                <div style="display: flex; flex-direction: column; gap: 10px; background: rgba(10, 31, 68, 0.02); padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; width: 100%; box-sizing: border-box; text-align: left;"> 
                    <div style="display: flex; justify-content: space-between; font-weight: 700; color: #0a1f44; align-items: center; width: 100%; gap: 10px;"> 
                        <div style="display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1;"> 
                            <input type="checkbox" id="modal_input_box_${item.id}" style="width: 22px; height: 22px; cursor: pointer; accent-color: #10b981; margin: 0; flex-shrink: 0;" ${isChecked ? 'checked' : ''} onchange="window.syncModalCheckboxActionDirectToForm('${item.targetId}', this.checked)"> 
                            <label for="modal_input_box_${item.id}" style="cursor: pointer; margin: 0; font-size: 0.85rem; line-height: 1.3; overflow: hidden; text-overflow: ellipsis;">${item.name}</label> 
                        </div> 
                        <span style="color: #10b981; font-family: monospace; font-size: 0.9rem; flex-shrink: 0;">$${Number(item.price || 0).toFixed(2)}</span> 
                    </div> 
                    <span style="font-size: 0.775rem; color: #64748b; display: block; padding-left: 30px; line-height: 1.4;">${item.desc}</span> 
                </div>`; 
        }); 
    } else { 
        contentRowsHtml = ` <div style="text-align: center; padding: 20px; color: #64748b; font-size: 0.85rem;"> No auxiliary compliance checklists required for this service pathway. </div>`; 
    } 

    // MODIFIED FOR MOBILE: Set layout cards dimensions up to fluid max values to lock view constraints completely
    modalRoot.innerHTML = ` 
        <div style="background: #ffffff; border-radius: 12px; width: 100%; max-width: 100%; max-height: 90dvh; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.25); overflow: hidden;"> 
            <div style="background: #0a1f44; color: #ffffff; padding: 14px 16px; display: flex; justify-content: space-between; align-items: center; flex-shrink: 0;"> 
                <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-shield"></i> ${modalTitle}</h4> 
                <button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: transparent; border: none; color: #ffffff; font-size: 1.5rem; cursor: pointer; font-weight: 700; padding: 4px 8px; line-height: 1;">&times;</button> 
            </div> 
            <div style="padding: 16px; overflow-y: auto; -webkit-overflow-scrolling: touch; font-size: 0.825rem; line-height: 1.4; color: #334155; display: flex; flex-direction: column; gap: 14px; width: 100%; box-sizing: border-box; flex: 1;"> 
                <p style="margin: 0; font-weight: 600; color: #0a1f44; text-align: left;">${modalIntroduction}</p> 
                <div id="modal-pristine-rows-wrapper" style="display: flex; flex-direction: column; gap: 12px; width: 100%; box-sizing: border-box;"> 
                    ${contentRowsHtml} 
                </div> 
            </div> 
            <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 12px 16px; display: flex; justify-content: flex-end; flex-shrink: 0; width: 100%; box-sizing: border-box;"> 
                <button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: #0a1f44; color: #ffffff; border: none; padding: 12px 20px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 0.85rem; width: 100%; text-align: center; height: 44px;">Got It, Close Guide</button> 
            </div> 
        </div>`; 
        
    modalRoot.style.display = "flex"; 
    modalRoot.style.opacity = "1"; 
} 

function syncModalCheckboxActionDirectToFormMobile(backgroundFormId, isChecked) { 
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

function closeNewEntrantAuditPriceGuideModalMobile() { 
    const modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (modalRoot) { modalRoot.style.display = "none"; } 
} 

window.launchNewEntrantAuditRequirementsGuideModal = launchNewEntrantAuditRequirementsGuideModalMobile; 
window.syncModalCheckboxActionDirectToForm = syncModalCheckboxActionDirectToFormMobile; 
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModalMobile;


// ============================================================================ //
// 📋 MOBILE DBA INTERACTIVE CHECKLIST MOUNTS & FUNNEL CONTROLLERS
// ============================================================================ //

function syncModalCheckboxActionDirectToFormMobile(backgroundFormId, isChecked) { 
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

/** 
 * Hides mobile modal layout using accelerated touch animations.
 */ 
function closeNewEntrantAuditPriceGuideModalMobile() { 
    const modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (modalRoot) { 
        modalRoot.style.opacity = "0"; 
        if (modalRoot.firstChild) { 
            // MOBILE REPAIR: Clean translation matrix value optimization stops glass clipping lag
            modalRoot.firstChild.style.transform = "translateY(-20px)"; 
        } 
        setTimeout(() => { 
            modalRoot.style.display = "none"; 
        }, 200); 
    } 
} 

function triggerNewEntrantAuditComplianceChecklistPopupMobile() { 
    if (typeof window.launchNewEntrantAuditRequirementsGuideModal === "function") { 
        window.launchNewEntrantAuditRequirementsGuideModal(); 
    } 
} 

function toggleNewEntrantAuditLetterDetailsMobile(selectedValue) { 
    console.log(`[Mobile New Entrant Audit Link] Selection: ${selectedValue}`); 
} 

/** 
 * High-performance mobile form step advancement gate. 
 */ 
function processStepTwoFunnelAdvancementGateMobile(event) { 
    if (event && typeof event.preventDefault === "function") { 
        event.preventDefault(); 
    } 
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 
    if (typeof window.switchWizardActiveViewLayout === "function") { 
        // Slides mobile layout pane context onto target 3 container track safely
        window.switchWizardActiveViewLayout(3); 
    } 
} 

window.syncModalCheckboxActionDirectToForm = syncModalCheckboxActionDirectToFormMobile;
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModalMobile;
window.triggerNewEntrantAuditComplianceChecklistPopup = triggerNewEntrantAuditComplianceChecklistPopupMobile;
window.toggleNewEntrantAuditLetterDetails = toggleNewEntrantAuditLetterDetailsMobile;
window.processStepTwoFunnelAdvancementGate = processStepTwoFunnelAdvancementGateMobile;

// ============================================================================ // 
// 📊 STEP 5 INTERACTIVE VISIBILITY REAL-TIME INVOICE REFRESHER 
// ============================================================================ // 
function forceStep5SummaryInvoiceRefreshMobile() { 
    if (typeof window.runPricingMatrixDataCrawlPass === "function") { 
        window.runPricingMatrixDataCrawlPass(); 
    } 
    if (typeof window.finalizePricingMatrixUiRender === "function") { 
        window.finalizePricingMatrixUiRender(); 
    } 
} 

const step5PanelElementNode = document.getElementById("step-panel-5") || document.getElementById("step-5"); 
if (step5PanelElementNode) { 
    const summaryPanelViewObserverMobile = new MutationObserver(() => { 
        if (step5PanelElementNode.style.display !== "none") { 
            forceStep5SummaryInvoiceRefreshMobile(); 
            // Mobile Optimization: +100ms calculation debounce helps phone layouts populate smoothly
            setTimeout(forceStep5SummaryInvoiceRefreshMobile, 100); 
        } 
    }); 
    summaryPanelViewObserverMobile.observe(step5PanelElementNode, { attributes: true, attributeFilter: ["style"] }); 
}

// ============================================================================ //
// 💳 MOBILE STEP 6 SECURE GATEWAY REAL-TIME INVOICE REFRESHER & STRIPE BRIDGE
// ============================================================================ //

function forceStep6StripePaymentGatewayRefreshPassMobile() { 
    console.log("[Mobile Payment Gate] Step 6 active view detected. Synchronizing values..."); 
    const paymentTotalTextNode = document.getElementById("payment-gateway-total-display"); 
    
    // Extract the live grand total variable computed by your central calculations engine 
    const activeRunningTotalAmount = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || window.finalComputedOnboardingInvoiceTotalAmount || 0; 
    
    if (paymentTotalTextNode) { 
        paymentTotalTextNode.textContent = `$${parseFloat(activeRunningTotalAmount).toFixed(2)}`; 
        console.log(`[Mobile Payment Gate] Balance display hydrated: $${parseFloat(activeRunningTotalAmount).toFixed(2)}`); 
    } 

    // 💳 🟢 AUTOMATED STRIPE INTERFACE INITIALIZER WITH SINGLE-MOUNT SAFETY GATE
    const stripeInputContainer = document.getElementById("stripe-card-element") || document.getElementById("card-element"); 
    if (stripeInputContainer && stripeInputContainer.children.length > 0) { 
        console.log("[Mobile Payment Gate] Stripe element pre-rendered inside container."); 
        return; 
    } 
    
    if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
        window.initializeFlatStripeCheckoutElement(); 
    } else { 
        console.warn("[Mobile Payment Gate] initializeFlatStripeCheckoutElement hook is missing globally."); 
    } 
} 

// Attach a responsive layout observer to automatically fire the bridge when Step 6 mounts 
const step6PanelContainerNode = document.getElementById("step-panel-6") || document.getElementById("step-6"); 
if (step6PanelContainerNode) { 
    const paymentPanelViewObserverMobile = new MutationObserver(() => { 
        if (step6PanelContainerNode.style.display !== "none") { 
            forceStep6StripePaymentGatewayRefreshPassMobile(); 
            setTimeout(forceStep6StripePaymentGatewayRefreshPassMobile, 60); 
        } 
    }); 
    paymentPanelViewObserverMobile.observe(step6PanelContainerNode, { attributes: true, attributeFilter: ["style"] }); 
    window.paymentPanelViewObserverInstance = paymentPanelViewObserverMobile; 
} 

// ============================================================================ // 
// 📦 GLOBAL LAYERS EXPOSURE AND CORE LISTENER REGISTRATIONS 
// ============================================================================ // 
window.syncModalCheckboxActionDirectToForm = window.syncModalCheckboxActionDirectToForm || syncModalCheckboxActionDirectToFormMobile; 
window.syncModalCheckboxChangeToBackgroundForm = window.syncModalCheckboxActionDirectToForm; 
window.forceStep6StripePaymentGatewayRefreshPass = forceStep6StripePaymentGatewayRefreshPassMobile; 

function attachStepTwoNavigationTriggersMobile() { 
    const continueBtnStep2 = document.querySelector("#step-panel-2 .btn-wizard-main") || document.querySelector("#step-2 .btn-wizard-main"); 
    if (continueBtnStep2) { 
        continueBtnStep2.removeAttribute("onclick"); 
        continueBtnStep2.removeEventListener("click", window.processStepTwoFunnelAdvancementGate); 
        continueBtnStep2.addEventListener("click", window.processStepTwoFunnelAdvancementGate); 
        continueBtnStep2.style.cursor = "pointer"; 
    } 
} 

if (document.readyState !== "loading") { 
    attachStepTwoNavigationTriggersMobile(); 
} else { 
    document.addEventListener("DOMContentLoaded", attachStepTwoNavigationTriggersMobile); 
} 

(function() { 
    // 🟢 MOBILE PERFORMANCE ENHANCEMENT: Restores internal container scrollers instead of the whole page 
    const masterLayoutPanels = document.querySelectorAll(".wizard-panel"); 
    masterLayoutPanels.forEach(function(panel) { 
        const panelObserverMobile = new MutationObserver(function(mutations) { 
            mutations.forEach(function(mutation) { 
                if (mutation.attributeName === "style" && panel.style.display !== "none" && panel.classList.contains("active")) { 
                    console.log(`[Mobile Scroll Manager] Panel #${panel.id || 'wizard-step'} active. Anchoring scroller context...`); 
                    
                    // Trace mobile scroll container parent nodes natively to prevent keyboard popup bounce bugs
                    const mobileScrollerNode = panel.closest(".m-form-scroller") || panel.closest(".mobile-panel-scroll") || panel.parentElement;
                    if (mobileScrollerNode) {
                        mobileScrollerNode.scrollTop = 0;
                    } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                } 
            }); 
        }); 
        panelObserverMobile.observe(panel, { attributes: true, attributeFilter: ["style", "class"] }); 
    }); 
})();


// ============================================================================ //
// 📡 MOBILE NETWORK ASSET ROUTER & DYNAMIC FILE LOADER SYSTEM
// ============================================================================ //

const SERVICE_URL_REGISTRY_MOBILE = { 
    "llc-formation": "llc-formation", "corporations": "corporations", "sole-proprietorship": "sole-proprietorship", 
    "dba-registration": "dba-registration", "nonprofits": "nonprofits", "series-llc": "series-llc", 
    "foreign-qualification": "foreign-qualification", "llc-reinstatement": "llc-reinstatement", 
    "servicemark-filing": "servicemark-filing", "annual-reports": "annual-reports", 
    "operating-agreement": "operating-agreement", "registered-agent": "registered-agent", 
    "business-licenses": "business-licenses", "dissolution": "dissolution", 
    "certificate-of-good-standing": "certificate-of-good-standing", "clia-certificate": "clia-certificate", 
    "regulatory-consulting": "regulatory-consulting", "state-tax": "state-tax", 
    "franchise-tax": "franchise-tax", "sales-tax-registration": "sales-tax-registration", 
    "payroll-tax-940-941": "payroll-tax-940-941", "duns-number": "duns-number", 
    "minority-certificate": "minority-certificate", "ifta-registration": "ifta-registration", 
    "licenses-permits": "licenses-permits", "ifta-quarterly-returns": "ifta-quarterly-returns", 
    "federal-tax": "federal-tax", "employer-id-ein": "employer-id-ein", 
    "heavy-use-tax-2290": "heavy-use-tax-2290", "cage-code": "cage-code", 
    "owner-operators": "owner-operators", "trucker-authority": "trucker-authority", 
    "broker-authority": "broker-authority", "ucr-registration": "ucr-registration", 
    "scac-code": "scac-code", "dot-consortium": "dot-consortium", "driver-file": "driver-file", 
    "process-agents-boc-3": "process-agents-boc-3", "hazmat-registration": "hazmat-registration", 
    "trucker-insurance-quote": "trucker-insurance-quote", "broker-insurance-quote": "broker-insurance-quote", 
    "new-entrant-audit": "new-entrant-audit", "mcs-150-update": "mcs-150-update", 
    "boc-3-amendment": "boc-3-amendment", "apostille-services": "apostille-services" 
}; 

(async () => { 
    console.log("[Mobile Asset Router] Initiating service tracking route lookup pass..."); 
    
    const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root") || document.getElementById("wizard-dynamic-form-target") || document.getElementById("dynamic-form-fields") || document.querySelector(".wizard-dynamic-fields-slot"); 
    
    if (!fieldsRoot) { 
        console.error("[Mobile Asset Router Critical] Could not find any valid form fields root container element in the DOM."); 
        return; 
    } 

    let currentServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value; 
    if (!currentServiceKey) { 
        const lastSeg = window.location.pathname.split("/").pop() || ""; 
        currentServiceKey = lastSeg.includes(".html") ? lastSeg.replace(".html", "") : "index"; 
    } 

    let rawUrlSlug = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-"); 
    const targetScriptFileName = (typeof SERVICE_URL_REGISTRY_MOBILE !== "undefined" && SERVICE_URL_REGISTRY_MOBILE[rawUrlSlug]) || rawUrlSlug; 
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

    // MODIFIED FOR MOBILE: Changed grid-column rules to full fallback blocks to optimize scroller footprints
    formInjectionWrapper.innerHTML = ` 
        <div class="dynamic-form-loading-placeholder" style="display: block; text-align: center; padding: 20px; color: #64748b; font-weight: 600; border: 1px dashed #e2e8f0; border-radius: 8px; background: #f8fafc; width: 100%; box-sizing: border-box;"> 
            <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px; color: #10b981;"></i> Assembling specialized compliance filing interfaces... 
        </div>`; 

    // Safely inject and trace the script element without causing script source duplication 
    if (!document.getElementById(expectedScriptId)) { 
        console.log(`[Mobile Asset Router] Injecting network script tag for: assets/js/services/${targetScriptFileName}.js`); 
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
            console.error("[Mobile Asset Router Fatal Load Failure]", networkScriptError); 
            formInjectionWrapper.innerHTML = ` 
                <div style="padding: 16px; color: #b91c1c; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; font-family: sans-serif; box-sizing: border-box; width: 100%; font-size: 0.85rem; line-height: 1.4; text-align: left;"> 
                    <strong>Error Loading System Components:</strong> Could not load file: <code>assets/js/services/${targetScriptFileName}.js</code>. Please check your network connection. 
                </div>`; 
            return; 
        } 
    } else { 
        await new Promise((resolve) => setTimeout(resolve, 80)); 
    } 

    // Safely hand over execution to Part 2 to run the dynamic HTML payload injection 
    if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
        await window.executeStepTwoDynamicFormInjection(baselineMemoryKeys, rawUrlSlug); 
    } else if (typeof executeStepTwoDynamicFormInjection === "function") { 
        await executeStepTwoDynamicFormInjection(baselineMemoryKeys, rawUrlSlug); 
    } else { 
        console.warn("[Mobile Asset Router] executeStepTwoDynamicFormInjection is not yet attached to the global scope."); 
    } 
})();


// ============================================================================ //
// ⚡ MOBILE UNIVERSAL SERVICE-FORM LIFECYCLE COMPILER ENGINE
// ============================================================================ //
async function executeStepTwoDynamicFormInjectionMobile(keysBeforeScriptLoads, rawUrlSlug) { 
    console.log("[Mobile Lifecycle Engine] Starting universal template injection compilation pass..."); 
    
    const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root") || document.getElementById("wizard-dynamic-form-target") || document.getElementById("dynamic-form-fields") || document.querySelector(".wizard-dynamic-fields-slot"); 
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

        const stateOptions = window.globalStateDropdownOptionsHtml || (typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml(window.selectedFormationStateCode || "") : "") || (typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? window.buildGlobalUsaStateDropdownOptionsHtml("") : ""); 
        const verifiedTemplates = []; 
        window.formRegistry = window.formRegistry || {}; 

        // 1. Dynamic Service File Wrapper Initialization 
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
                console.error("[Mobile Lifecycle Engine] Master form renderer error:", e); 
            } 
        } 

        // 3. RegEx Scanner for Multi-Step Layout Keys 
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
        // MODIFIED FOR MOBILE: Stripped out desktop grid-columns properties, swapped to fluid width blocks
        const mobileContainerCss = "width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important; box-sizing: border-box !important;";
        
        if (!formInjectionWrapper) { 
            formInjectionWrapper = document.createElement("div"); 
            formInjectionWrapper.className = "isolated-form-payload-container"; 
            formInjectionWrapper.style.cssText = mobileContainerCss; 
            fieldsRoot.insertBefore(formInjectionWrapper, fieldsRoot.firstChild); 
        } else { 
            formInjectionWrapper.style.cssText = mobileContainerCss; 
        } 

        if (verifiedTemplates.length === 0) { 
            console.warn(`[Mobile Lifecycle Engine] Compiled 0 segments for key: "${rawUrlSlug}".`); 
            return; 
        } 

        // Order elements sequentially matching exact wizard step index numbers 
        verifiedTemplates.sort((a, b) => a.step - b.step); 
        formInjectionWrapper.innerHTML = ""; 

        verifiedTemplates.forEach((item) => { 
            const rowContainer = document.createElement("div"); 
            rowContainer.className = "service-form-part-segment"; 
            rowContainer.setAttribute("data-part-index", item.step); 
            
            // MODIFIED FOR MOBILE: Drops layout float bugs and tight margins across injected templates
            rowContainer.style.cssText = "display: block !important; width: 100% !important; max-width: 100% !important; clear: both !important; margin-bottom: 16px !important; box-sizing: border-box !important;"; 
            rowContainer.innerHTML = item.html; 
            formInjectionWrapper.appendChild(rowContainer); 
        }); 

        console.log(`[Mobile Lifecycle Engine Success] Form segments successfully injected: "${rawUrlSlug}".`); 
    } catch (globalEngineError) { 
        console.error("[Fatal Mobile Form Injection Pipeline Exception]", globalEngineError); 
    } 
} 

window.executeStepTwoDynamicFormInjection = executeStepTwoDynamicFormInjectionMobile; 

// ============================================================================ //
// 📱 MOBILE DEVICE CLASS HANDLERS
// ============================================================================ //
function evaluateSystemViewportDesignMobile() { 
    const container = document.querySelector('.wizard-container'); 
    if (!container) return; 
    
    // Always force mobile decoration identifiers on standalone template bootups
    container.classList.add('is-mobile-device'); 
} 

document.addEventListener("DOMContentLoaded", evaluateSystemViewportDesignMobile); 
window.addEventListener("resize", evaluateSystemViewportDesignMobile);


// ============================================================================ //
// 🚀 STANDALONE MOBILE INITIALIZATION ORCHESTRATOR
// ============================================================================ //
(function() {
    function bootStandaloneMobileWizard() {
        console.log("[Mobile Standalone Boot] Synchronizing framework lifecycles...");
        
        // 1. Force the mobile layout device parameters state
        if (typeof evaluateSystemViewportDesignMobile === "function") {
            evaluateSystemViewportDesignMobile();
        }
        
        // 2. Fire your master platform orchestration sequence 
        if (typeof window.runUnifiedPlatformLifecycleBoot === "function") {
            window.runUnifiedPlatformLifecycleBoot();
        } else if (typeof runCombinedMasterBootSequenceMobile === "function") {
            runCombinedMasterBootSequenceMobile();
        }
    }

    // Safely execute immediately or wait for the mobile DOM window to be interactive
    if (document.readyState !== "loading") {
        bootStandaloneMobileWizard();
    } else {
        document.addEventListener("DOMContentLoaded", bootStandaloneMobileWizard);
    }
})();
