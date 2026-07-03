// ============================================================================ // 
// 🏢 STEP 2 PANEL: LEGAL ENTITY PROFILE & FORM STATE GENERATOR INFRASTRUCTURE // 
// ============================================================================ // 
/** 
 * HTML Layout Injection Module 
 * Programmatically assembles your Step 2 card panels right into your HTML placeholder. 
 */ 
function renderStepTwoLayoutMarkup() { 
  const placeholder = document.getElementById("step-2-injection-placeholder"); 
  if (!placeholder) return; 
  
  // Checks if the template container already exists to block duplicate injection passes 
  if (document.getElementById("step-panel-2")) return; 
  
  // FIX: Swapped .master-onboarding-form for .step-panel-form-card to prevent 
  // runUnifiedPlatformLifecycleBoot from intercepting and breaking display properties.
  placeholder.innerHTML = ` 
    <!-- ============================================================================ --> 
    <!-- 🏢 STEP 2 PANEL: LEGAL ENTITY PROFILE & TAXONOMY MATRICES --> 
    <!-- ============================================================================ --> 
    <div class="wizard-panel step-panel-form-card" id="step-panel-2" data-step="2" style="display: block; width: 100%; box-sizing: border-box;"> 
      <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 15px; text-align: left;"> 
        <h2 style="color: var(--navy, #0a1f44); font-size: 1.6rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px;">Corporate Entity Details</h2> 
        <p style="color: var(--slate, #64748b); font-size: 0.95rem; margin: 0;">Provide company identifier records, operational parameters, and target communications parameters.</p> 
      </div> 
      
      <div class="workspace-split-layout" style="display: grid; grid-template-columns: 1fr; gap: 32px; width: 100%; box-sizing: border-box; align-items: start;"> 
        <!-- Dynamic Field Form Container Target --> 
        <div id="dynamic-onboarding-fields-root" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; min-width: 0; box-sizing: border-box;"> 
          <div style="grid-column: span 2; text-align: center; padding: 40px 0; color: var(--slate, #64748b); font-weight: 600; font-size: 0.95rem;"> 
            <i class="fa-solid fa-spinner fa-spin" style="color: var(--primary, #10b981); margin-right: 8px;"></i> 
            <span>Assembling specialized compliance filing interfaces...</span> 
          </div> 
        </div> 
      </div> 
      
      <div class="wizard-action-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 30px; border-top: 1px solid var(--border, #e2e8f0); padding-top: 20px; box-sizing: border-box;"> 
        <button type="button" class="btn-wizard-alt" onclick="if(typeof window.switchWizardActiveViewLayout==='function') window.switchWizardActiveViewLayout(1);" style="cursor: pointer; background: #cbd5e1; color: #0a1f44; padding: 10px 20px; border: none; border-radius: 6px; font-weight: 600;">Back</button> 
        <button type="button" class="btn-wizard-save-progress" id="sidebarFallbackLogoutBtn" style="cursor: pointer; background: #0a1f44; color: white; padding: 10px 20px; border: none; border-radius: 6px; font-weight: 600; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-floppy-disk"></i> Save Progress</button> 
        <button type="button" class="btn-wizard-main" onclick="window.processStepTwoFunnelAdvancementGate(event)" style="cursor: pointer; background: #10b981; color: white; padding: 10px 24px; border: none; border-radius: 6px; font-weight: 700;">Continue to Tiers</button> 
      </div> 
    </div> 
  `; 

  // FIX: Now that base elements are safely set up in the DOM tree, immediately 
  // trigger your compiler engine to pull registry keys and fill out inputs.
  if (typeof window.executeStepTwoDynamicFormInjection === "function") {
    window.executeStepTwoDynamicFormInjection(null, window.routeActiveServiceKey || "");
  }
}

// Bind method cleanly to global window boundaries
window.renderStepTwoLayoutMarkup = renderStepTwoLayoutMarkup;


/**
 * Form State Capture Mechanics
 * Sweeps your active input modules, performs cipher translation, and caches values.
 */
function saveWizardFormStatesVanilla() { 
    const cacheKeyNamespace = "f4u_wizard_onboarding_state"; 
    
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
    
    try { 
        const preExistingCacheString = localStorage.getItem(cacheKeyNamespace); 
        if (preExistingCacheString) { 
            activeFormMetricsObject = JSON.parse(preExistingCacheString) || {}; 
        } 
    } catch (parseCacheErr) { 
        console.warn("[State Engine] Baseline cache was unreadable, initializing clean payload.", parseCacheErr); 
    } 

    const currentActiveStepView = document.getElementById("dynamic-onboarding-fields-root") || document.body; 
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
            activeFormMetricsObject[uniqueDataKey] = elementValueToCache; 
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

// ============================================================================ //
// 🔌 STEP 2 HOOK GATEWAY INITIALIZATION ROUTERS                                //
// ============================================================================ //
/**
 * LIFE-CYCLE ROUTING BRIDGE:
 * Automatically runs your network downloader function when Step 2 loads to pull your service sub-scripts.
 */
function runStepTwoLayoutInitialization() {
    console.log("[Step 2] Mounting template layouts into screen canvas placeholders...");
    
    // Inject the base form panels layout structure on demand
    renderStepTwoLayoutMarkup();
    
    const fieldsRootTargetBox = document.getElementById("dynamic-onboarding-fields-root");
    
    // Automatically fire your asynchronous script loader engine to fetch annual-reports.js or llc-formation.js
    if (fieldsRootTargetBox && typeof window.saveActiveServiceFormStates === "function") {
        window.saveActiveServiceFormStates(fieldsRootTargetBox);
    } else if (fieldsRootTargetBox && typeof saveActiveServiceFormStates === "function") {
        saveActiveServiceFormStates(fieldsRootTargetBox);
    }
}

/**
 * Form progression routing interlock validation checker block.
 */
window.processStepTwoFunnelAdvancementGate = function(event) {
    if (event && event.preventDefault) event.preventDefault();
    console.log("[Step 2 Validation] Running data integrity compilation checks...");
    
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlugKey = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim();
    const validatorKeyName = `${serviceSlugKey}-part1-validation`;
    
    const activeValidatorObject = window.formRegistry ? window.formRegistry[validatorKeyName] : null;
    
    if (activeValidatorObject && typeof activeValidatorObject.validate === "function") {
        const result = activeValidatorObject.validate();
        if (!result.isValid) {
            alert(`Validation Requirements Blocked:\n\n- ${result.errors.join('\n- ')}`);
            return;
        }
    }
    
    saveWizardFormStatesVanilla();
    if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(3);
    }
};

// Global Functional Variable Namespace Exports
window.saveWizardFormStatesVanilla = saveWizardFormStatesVanilla; 
window.runStepTwoLayoutInitialization = runStepTwoLayoutInitialization;
window.initializeDynamicServiceFormLayout = runStepTwoLayoutInitialization;

// Event loop hook to build markup on screen initialization 
document.addEventListener("DOMContentLoaded", () => { 
    renderStepTwoLayoutMarkup(); 
});



// ============================================================================ //
// ⚙️ MODULE: CACHE AND STATE RECOVERY SYSTEM ENGINE LOGIC                     //
// ============================================================================ //
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
        window.isWizardCurrentlyRestoringStateVanilla = true; 
        
        try { 
            if (restoredPayloadString) { 
                const payloadDataObject = JSON.parse(restoredPayloadString); 
                Object.keys(payloadDataObject).forEach(fieldIdKey => { 
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
                        inputNode.dispatchEvent(new Event('change', { bubbles: true })); 
                        inputNode.dispatchEvent(new Event('input', { bubbles: true })); 
                    } 
                }); 
            } 
        } catch (jsonErr) { 
            console.error("State data recovery parse error loop encountered: ", jsonErr); 
        } 
        
        // 🔄 Sync single root properties to isolated key sets for strict step 5 data hydrators 
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
} 

window.cacheAndRestoreWizardFormStatesVanilla = cacheAndRestoreWizardFormStatesVanilla; 

// 🟢 FIXED: Removed the premature 'renderStepTwoLayoutMarkup()' execution from DOMContentLoaded 
// to ensure Step 2 only renders contextually when the user advances the funnel steps!
document.addEventListener("DOMContentLoaded", () => {
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
        window.cacheAndRestoreWizardFormStatesVanilla(true);
    }
});

// ============================================================================ //
// ⚙️ COMBINED DATA PIPELINE: FORM STATE presERVTATION, CRYPTO, & HYDRATION       //
// ============================================================================ //
function cacheAndRestoreWizardFormStatesVanilla(isExecutionInitialLoad = false) {
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
    // 🔄 RECOVER PATH: Runs on true initial boot to populate inputs out of storage  //
    // ============================================================================ //
    if (isExecutionInitialLoad) {
        const restoredPayloadString = localStorage.getItem(cacheKeyNamespace);
        window.isWizardCurrentlyRestoringStateVanilla = true;
        
        try {
            if (restoredPayloadString) {
                const payloadDataObject = JSON.parse(restoredPayloadString);
                Object.keys(payloadDataObject).forEach(fieldIdKey => {
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
                        inputNode.dispatchEvent(new Event('change', { bubbles: true }));
                        inputNode.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                });
            }
        } catch (jsonErr) {
            console.error("State data recovery parse error loop encountered: ", jsonErr);
        }
        
        // Sync single root properties to isolated key sets for strict step 5 data hydrators
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
        return;
    }

    // ============================================================================ //
    // 💾 SAVE PATH: Runs dynamically on user interaction to scrape current inputs  //
    // ============================================================================ //
    if (window.isWizardCurrentlyRestoringStateVanilla) return;
    
    try {
        const currentCacheData = JSON.parse(localStorage.getItem(cacheKeyNamespace) || "{}");
        const inputs = document.querySelectorAll(".wizard-panel input, .wizard-panel select, .wizard-panel textarea");
        
        inputs.forEach(inputNode => {
            const key = inputNode.id || inputNode.name;
            if (!key) return;
            
            let valToSave = inputNode.type === 'checkbox' ? inputNode.checked : inputNode.value;
            const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || inputNode.type === 'password' || inputNode.type === 'tel';
            
            if (isSecureElement && typeof valToSave === "string" && valToSave !== "") {
                valToSave = executeCipherTranslation(valToSave, false);
            }
            
            // Save inside the synchronized framework cache object
            currentCacheData[key] = valToSave;
            
            // Save directly into isolated namespace strings so Step 5 reads them perfectly!
            localStorage.setItem(`wizard_field_${key}`, String(valToSave));
        });
        
        localStorage.setItem(cacheKeyNamespace, JSON.stringify(currentCacheData));
    } catch (saveErr) {
        console.error("State data data saving write loop error encountered: ", saveErr);
    }
}

// Bind cleanly back into universal global window scope references safely
window.cacheAndRestoreWizardFormStatesVanilla = cacheAndRestoreWizardFormStatesVanilla;

// ============================================================================ //
// 🔌 REAL-TIME EVENT LISTENERS FOR USER INPUT CAPTURE                          //
// ============================================================================ //
document.addEventListener("input", (e) => {
    if (e.target.closest(".wizard-panel")) {
        window.cacheAndRestoreWizardFormStatesVanilla(false);
    }
});

document.addEventListener("change", (e) => {
    if (e.target.closest(".wizard-panel")) {
        window.cacheAndRestoreWizardFormStatesVanilla(false);
    }
});

// Boot recovery parameters cleanly once on DOM tree ready
document.addEventListener("DOMContentLoaded", () => {
    window.cacheAndRestoreWizardFormStatesVanilla(true);
});


// ============================================================================ //
// 📊 STEP 2 UNIFIED INJECTION MATRIX: SYSTEM SCHEMAS DEEP STREAMER             //
// ============================================================================ //
function executeStep2ComplianceAssetStreaming() {
    const originalDb = window.UPSELLS_ROUTER_DATABASE; 
    
    // 🟢 FIXED MOUNT DELAY: If the marketplace database isn't compiled yet,
    // exit quietly without crashing the rest of the script from loading!
    if (!originalDb) {
        console.log("[Sync Engine] UPSELLS_ROUTER_DATABASE pending initialization. Deferring streaming pass...");
        return;
    } 
    
    // 1. EXTRACT AN AGNOSTIC WRITABLE COPY PASTED FROM THE FROZEN REALM 
    // This bypasses the Object.freeze lock without editing your core data schemas 
    const databaseClone = {}; 
    Object.keys(originalDb).forEach(key => { 
        if (Array.isArray(originalDb[key])) { 
            databaseClone[key] = [...originalDb[key]]; // Shallow clone arrays to grant write access 
        } else if (typeof originalDb[key] === 'object' && originalDb[key] !== null) { 
            databaseClone[key] = { ...originalDb[key] }; 
        } else { 
            databaseClone[key] = originalDb[key]; 
        } 
    }); 
    
    const activeVerticals = ["formations", "broker", "trucker", "generic"]; 

    // ============================================================================ // 
    // 📊 STEP 2 UNIFIED INJECTION MATRIX: STRUCTURAL STREAMING                     // 
    // ============================================================================ // 
    activeVerticals.forEach(verticalKey => { 
        if (!databaseClone[verticalKey]) databaseClone[verticalKey] = []; 
        
        if (Array.isArray(databaseClone[verticalKey])) { 
            const complianceItems = [ 
                { id: "assemble-dqf", name: "Assemble Driver Qualification Files (DQF)", price: 79.00 }, 
                { id: "drug-consortium", name: "DOT Drug & Alcohol Consortium Enrollment", price: 149.00 }, 
                { id: "hos-review", name: "Hours of Service (HOS) Log Audit Pre-Review", price: 195.00 }, 
                { id: "maintenance-ledger", name: "Vehicle Maintenance Ledger & Inspection Set", price: 85.00 }, 
                { id: "expert-consultation", name: "Independent Pre-Audit Consultation Package", price: 250.00 } 
            ]; 
            
            complianceItems.forEach(item => { 
                const isPresent = databaseClone[verticalKey].some(record => record.id === item.id); 
                if (!isPresent) { 
                    databaseClone[verticalKey].push(item); 
                } 
            }); 
        } 
    }); 

    // 2. RE-ASSIGN UNLOCKED DATA VALUE ROOT BACK TO GLOBAL CONTEXT CORES 
    window.UPSELLS_ROUTER_DATABASE = databaseClone; 
    console.log("[Sync Engine] Step 2 compliance schemas successfully streamed into master pricing paths."); 
}

// Global variable namespace exposure 
window.executeStep2ComplianceAssetStreaming = executeStep2ComplianceAssetStreaming;

// Connect the streaming loop to trigger natively the exact moment step 2 opens
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(window.executeStep2ComplianceAssetStreaming, 100);
});



// ============================================================================ //
// 🔌 CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE (STATE-AWARE BOOTSTRAPPER) //
// ============================================================================ //
/**
 * Master platform lifecycle execution bootstrapper.
 * Connects parameters parsers and schedules interface injections sequentially.
 */
function runUnifiedPlatformLifecycleBoot() { 
    console.log("[Lifecycle Engine] Triggering application operational boot sequence..."); 

    // 🛡️ RUNTIME PIPELINE GUARD: Verify configuration rules before parsing 
    const isCoreDatabaseReady = typeof window.getPricingConfiguration === "function" || window.CENTRAL_SERVICE_PLAN_DB; 
    if (!isCoreDatabaseReady) { 
        console.warn("[Lifecycle Engine Guard] Core data configuration or pricing methods are not yet ready. Retrying boot sequence in 50ms..."); 
        setTimeout(function() { 
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

    // 🟢 STRUCTURAL INTEGRATION FIX: 
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

// Bind methods cleanly to window context to guarantee inline attributes find them 
window.toggleDbaPermissionWorkflow = toggleDbaPermissionWorkflow; 
window.toggleDbaSearchProcurement = toggleDbaSearchProcurement; 
window.toggleDbaEinReasonField = toggleDbaEinReasonField; 
window.toggleDbaLicenseWorkflow = toggleDbaLicenseWorkflow; 
window.toggleDbaDurationField = toggleDbaDurationField; 

// ============================================================================ //
// 🛠️ STEP 2 COMPONENT: FIXED DERECURSIVE DBA ENGINE LISTENER BINDINGS           //
// ============================================================================ //
window.bindDbaEngineConditionListeners = function() {
  // Find all field components that require condition listening inside Step 2
  const targetComponents = document.querySelectorAll("#step-panel-2 input, #step-panel-2 select, #step-panel-2 textarea");
  
  targetComponents.forEach(component => {
    if (!component) return;

    // FIX: Stop the infinite cascade by exiting early if this element already has listeners bound
    if (component.dataset.dbaListenersAttached === "true") return;

    console.log("[DBA Engine] Binding dynamic condition listeners to field components...");

    component.addEventListener("change", function(e) {
      if (typeof window.toggleFederalTaxInventoryCostVisibility === "function") {
        window.toggleFederalTaxInventoryCostVisibility(e);
      }
    });

    // Mark the element as successfully hooked into the event stack
    component.dataset.dbaListenersAttached = "true";
  });
};

// Update your dynamic observer or injection triggers block inside step-2.js to call this safely:
if (typeof window.bindDbaEngineConditionListeners === "function") {
  // Debounce the call using a macro task frame to let elements hydrate peacefully
  clearTimeout(window.dbaBindingTimeoutGate);
  window.dbaBindingTimeoutGate = setTimeout(window.bindDbaEngineConditionListeners, 30);
}



// ============================================================================ //
// 📊 PART 4: LLC MEMBERSHIP CONTROLLER                                         //
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
        // 🟢 FIXED HTML TEMPLATE TAG NATIVELY: Corrected missing opening select tag strings 
        singleMemberBox.innerHTML = '<div class="wizard-input-group" style="margin-top: 14px; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; grid-column: span 2; box-sizing: border-box;">' + 
            '<label for="sole_member_choice" style="font-weight: 700; color: var(--navy); display: block; margin-bottom: 8px; font-size:0.85rem;">Are you the 1 Member of this company? *</label>' + 
            '' +
            '<option value="">-- Choose Option --</option>' + 
            '<option value="yes">Yes, I am the sole owner</option>' + 
            '<option value="no">No, someone else is the owner</option>' + 
            '</select>' + 
            '</div>'; 
            
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
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 
} 

// Export methods cleanly back into global window boundaries 
window.handleMembershipDropdownChange = handleMembershipDropdownChange; 
window.handleSoleMemberIdentityToggle = handleSoleMemberIdentityToggle; 

// ============================================================================ // 
// 📡 LATE-BINDING MUTATION LISTENER BRIDGE                                     // 
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
    
    // 🟢 FIXED CRASH ANCHOR: Completely removed the premature 'autoDiscoverAndHookInteractiveDbaFields()' execution pass 
    // to prevent frame zero type errors from freezing your step views layout!
});


// ============================================================================ //
// 📊 PART 1 OF 2: COMPLIANCE FORM GATES & MODAL CLOSE ANIMATIONS              //
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
    
    // 1. EXTRACT REGIONAL SERVICE SLUG FROM THE URL CONFIGURATIONS
    const urlParams = new URLSearchParams(window.location.search);
    const activeServiceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim();
    
    // 2. 🟢 FIXED DEEP VALIDATION ROUTING: Replaces the loose standalone method check
    // with a data-driven locator that pulls the current service validation matrices natively from memory!
    if (activeServiceSlug && window.formRegistry) {
        const expectedValidatorKey = `${activeServiceSlug}-part1-validation`;
        const serviceValidator = window.formRegistry[expectedValidatorKey];
        
        if (serviceValidator && typeof serviceValidator.validate === "function") {
            const verificationResult = serviceValidator.validate();
            
            if (!verificationResult.isValid) {
                console.warn("[Step 2 Gate] Form input parsing failed criteria bounds. Halting forward navigation.");
                
                // Construct a premium alert breakdown mapping out the required missing fields
                alert(`Action Required: Please complete the following fields before proceeding:\n\n• ${verificationResult.errors.join('\n• ')}`);
                return false; 
            }
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
window.toggleNewEntrantAuditLetterDetails = toggleNewEntrantAuditLetterDetails;


// ============================================================================ //
// 📦 GLOBAL LAYERS EXPOSURE AND CORE LISTENER REGISTRATIONS                   //
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
  // 🟢 FIXED ROUTING PARSING: Expands the query scanner to locate the button wrapper dynamically inside your injection placeholders! 
  const continueBtnStep2 = document.querySelector("#step-2-injection-placeholder .btn-wizard-main") || 
                           document.querySelector("#step-panel-2 .btn-wizard-main") || 
                           document.querySelector("#step-2 .btn-wizard-main") || 
                           document.querySelector("button[onclick*='goToNextWizardStep(3)']") || 
                           document.querySelector("button[onclick*='switchWizardActiveViewLayout(3)']"); 
                           
  if (continueBtnStep2) { 
    // FIX: Stop the infinite mutation loop by exiting early if this element already has triggers assigned
    if (continueBtnStep2.dataset.triggersAttached === "true") {
      return;
    }

    // FIXED CLICK INTERCEPT OVERRIDE: 
    // Wipes out old onclick loops and hooks the verification logic safely into the active view layout 
    continueBtnStep2.removeAttribute("onclick"); 
    continueBtnStep2.onclick = function(event) { 
      if (typeof window.processStepTwoFunnelAdvancementGate === "function") { 
        return window.processStepTwoFunnelAdvancementGate(event); 
      } 
    }; 
    
    // Mark the element as successfully hooked into the event stack to satisfy the safety guard
    continueBtnStep2.dataset.triggersAttached = "true";

    console.log("[Global Exposure] Step 2 navigation control buttons securely routed to verification gate."); 
  } else { 
    // If the button element is not in the DOM tree yet on boot, delay and re-check after layout paint completes 
    // Use a unique timeout tracker ID to prevent multiple stacking intervals
    clearTimeout(window.step2TriggerTimeoutGate);
    window.step2TriggerTimeoutGate = setTimeout(attachStepTwoNavigationTriggers, 150); 
  } 
} 

// Expose method back cleanly to global window boundaries
window.attachStepTwoNavigationTriggers = attachStepTwoNavigationTriggers;

// Register trigger attachments securely relative to browser rendering state timelines 
if (document.readyState !== "loading") { 
  attachStepTwoNavigationTriggers(); 
} else { 
  document.addEventListener("DOMContentLoaded", attachStepTwoNavigationTriggers); 
}


// ============================================================================ // 
// 🔌 MODULE: STEP 2 VIEW PORT LAYER INITIALIZATION AND SAFETY GATES           // 
// ============================================================================ // 
/** 
 * Safely resolves the active DOM injection placeholder target for form fields. 
 * @returns {HTMLElement|null} The resolved root container or null if unmounted. 
 */ 
function initializeStep2AssetRouter() { 
  // FIX: Look first for the designated field root container inside Step 2's card panel
  // to prevent fields from being wiped out by placeholder.innerHTML overrides later.
  const serviceFormRootContainer = document.getElementById("dynamic-onboarding-fields-root") ||
                                   document.getElementById("step-panel-2") || 
                                   document.getElementById("step-2-injection-placeholder") || 
                                   document.querySelector(".wizard-form-fields-root"); 
                                   
  if (!serviceFormRootContainer) { 
    console.warn("[Asset Router Warning] Step 2 form injection target pending view state change."); 
    return null; 
  } 
  
  return serviceFormRootContainer; 
} 

// Bind cleanly back into universal global window scope references safely 
window.initializeStep2AssetRouter = initializeStep2AssetRouter; 

// Ensure the trigger reference remains securely exposed to the window tracking registers
if (typeof window.attachStepTwoNavigationTriggers !== "function") {
  window.attachStepTwoNavigationTriggers = typeof attachStepTwoNavigationTriggers === "function" ? 
                                           attachStepTwoNavigationTriggers : 
                                           function() {};
}



// ============================================================================ //
// 🔄 MODULE: ASYNCHRONOUS FORM SCRAPER AND SUB-SCRIPT LOADER ENGINE           //
// ============================================================================ //
/**
 * Preserves current field context, injects dynamic network script files,
 * and boots target questionnaire form templates safely.
 * @param {HTMLElement} fieldsRoot - The active placeholder element node container.
 */
// ============================================================================ //
// 🔄 MODULE: ASYNCHRONOUS FORM SCRAPER AND SUB-SCRIPT LOADER ENGINE           //
// ============================================================================ //
async function saveActiveServiceFormStates(fieldsRoot) {
    if (!fieldsRoot) {
        console.warn("[State Engine] Cannot run asset load pipeline. fieldsRoot node is unassigned.");
        return;
    }

    // 🧠 STATE PRESERVATION ENGINE: CAPTURE DATA BEFORE WIPING THE DOM
    try { 
        console.log("[State Engine] Scraping active inputs before clearing step view layout..."); 
        const formFields = fieldsRoot.querySelectorAll("input:not([type='checkbox']):not([type='radio']), select, textarea"); 
        formFields.forEach(field => { 
            const fieldKeyName = field.id || field.name; 
            if (fieldKeyName) { 
                localStorage.setItem(`wizard_field_${fieldKeyName}`, field.value); 
                if (fieldKeyName.includes("state") || fieldKeyName.includes("formation")) { 
                    localStorage.setItem('wizard_selected_state', field.value); 
                } 
            } 
        }); 
        
        const checkBoxes = fieldsRoot.querySelectorAll("input[type='checkbox']"); 
        checkBoxes.forEach(box => { 
            const boxKeyName = box.id || box.name; 
            if (boxKeyName) { 
                localStorage.setItem(`wizard_field_${boxKeyName}`, box.checked ? "true" : "false"); 
            } 
        }); 
    } catch (preservationError) { 
        console.warn("[State Engine Warning] Could not cache form data fields securely:", preservationError); 
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
    
    Array.from(fieldsRoot.childNodes).forEach(node => { 
        if (node !== formInjectionWrapper) fieldsRoot.removeChild(node); 
    }); 
    
    formInjectionWrapper.innerHTML = ` 
        <div class="dynamic-form-loading-placeholder" style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: var(--light-bg, #f8fafc); width: 100%; box-sizing: border-box;"> 
            <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i> Assembling specialized compliance filing interfaces... 
        </div>`; 

    // 🔄 CORE INJECTION PIPELINE WITH FUZZY-MATCH RUNTIME COUPLING
    if (!document.getElementById(expectedScriptId)) { 
        console.log(`[Asset Router] Injecting network script tag for: assets/js/services/${targetScriptFileName}.js`); 
        try { 
            await new Promise((resolve, reject) => { 
                const dynamicScriptElement = document.createElement("script"); 
                dynamicScriptElement.id = expectedScriptId; 
                dynamicScriptElement.type = "text/javascript"; 
                dynamicScriptElement.src = `assets/js/services/${targetScriptFileName}.js`; 
                
                dynamicScriptElement.onload = () => { 
                    let verificationPollAttempts = 0; 
                    const verifyFunctionBindingPool = setInterval(() => { 
                        const targetRegistryMasterKey = `${rawUrlSlug}-form-master`; 
                        
                        // 🟢 1. REFLEXIVE SCOPE MEMORY SCAN: Automatically finds your custom "init" function inside the service file
                        const globalKeys = Object.keys(window);
                        const discoveredInitFunctionName = globalKeys.find(key => {
                            const kLower = key.toLowerCase();
                            const isInitFunc = typeof window[key] === "function" && kLower.startsWith("init");
                            // Fuzzy checks if the function name shares keywords with your service handle (e.g., "apostille", "llc")
                            const sharesServiceKeyword = rawUrlSlug.split("-").some(word => word.length > 3 && kLower.includes(word));
                            return isInitFunc && sharesServiceKeyword;
                        });

                        // 🟢 2. AUTOMATIC INVOCATION ASSIGNMENT: Runs it immediately to compile window registries
                        if (discoveredInitFunctionName && typeof window[discoveredInitFunctionName] === "function") {
                            console.log(`[Asset Router Success] Discovered and executing initialization engine: window.${discoveredInitFunctionName}()`);
                            window[discoveredInitFunctionName]();
                            
                            clearInterval(verifyFunctionBindingPool); 
                            resolve();
                            return;
                        }

                        // Standard registry fallback gate
                        if ((window.formRegistry && window.formRegistry[targetRegistryMasterKey]) || verificationPollAttempts > 40) { 
                            clearInterval(verifyFunctionBindingPool); 
                            resolve(); 
                        } 
                        verificationPollAttempts++; 
                    }, 50); 
                }; 
                
                dynamicScriptElement.onerror = () => { 
                    reject(new Error(`Failed to load script pipeline: ${targetScriptFileName}.js`)); 
                }; 
                document.head.appendChild(dynamicScriptElement); 
            }); 
        } catch (networkScriptError) { 
            console.error("[Asset Router Fatal Load Failure]", networkScriptError); 
            formInjectionWrapper.innerHTML = ` 
                <div style="padding: 20px; color: #b91c1c; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; box-sizing: border-box; width: 100%;"> 
                    <strong>Error Loading System Components:</strong> Could not load file parameters cleanly. 
                </div>`; 
            return; 
        } 
    } else { 
        await new Promise((resolve) => setTimeout(resolve, 80)); 
    } 

    // 🧠 SECURE LIFECYCLE HANDOFF: Execute the step compiler after initialization layers settle completely
    if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
        await window.executeStepTwoDynamicFormInjection(baselineMemoryKeys, rawUrlSlug); 
    } else if (typeof executeStepTwoDynamicFormInjection === "function") { 
        await executeStepTwoDynamicFormInjection(baselineMemoryKeys, rawUrlSlug); 
    } else { 
        console.warn("[Asset Router] executeStepTwoDynamicFormInjection is not yet attached to the global scope window context."); 
    } 
}

window.saveActiveServiceFormStates = saveActiveServiceFormStates;





/* ============================================================================ */ 
/* ⚡ PART 2 OF 2: UNIVERSAL SERVICE-FORM LIFECYCLE COMPILER ENGINE */ 
/* ============================================================================ */ 
async function executeStepTwoDynamicFormInjection(keysBeforeScriptLoads, rawUrlSlug) { 
  console.log("[Lifecycle Engine] Starting universal template injection compilation pass..."); 
  
  // Add this directly into your executeStepTwoDynamicFormInjection function 
// replacing the old field root selection block:
const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root") || 
                   document.getElementById("wizard-dynamic-form-target") || 
                   document.getElementById("dynamic-form-fields") || 
                   document.getElementById("step-panel-2") || // FIX: Added primary panel match
                   document.querySelector(".wizard-dynamic-fields-slot"); 

  
  if (!fieldsRoot) {
    console.warn("[Lifecycle Engine] Aborting: Target fields root element not found.");
    return; 
  }

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

    // 3. RegEx Scanner for Multi-Step Layout Keys 
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
          // Deduplicate steps found via master vs regex pattern scanner
          if (!verifiedTemplates.some(t => t.step === stepNumber)) {
            verifiedTemplates.push({ html: compiledHtmlMarkup.trim(), step: stepNumber }); 
          }
        } 
      } 
    }); 

    // --- DOM RENDERING BLOCK WITH MIXED STEP HANDLING --- 
    if (!formInjectionWrapper) { 
      formInjectionWrapper = document.createElement("div"); 
      formInjectionWrapper.className = "isolated-form-payload-container"; 
      formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;"; 
      fieldsRoot.insertBefore(formInjectionWrapper, fieldsRoot.firstChild); 
    } else { 
      formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;"; 
    } 

    // Inject segments iteratively matching precise step values without clobbering existing structures
    verifiedTemplates.forEach((item) => { 
      // Look for an existing container built for this specific step index
      let existingRow = formInjectionWrapper.querySelector(`[data-part-index="${item.step}"]`);
      
      if (!existingRow) {
        existingRow = document.createElement("div"); 
        existingRow.className = "service-form-part-segment"; 
        existingRow.setAttribute("data-part-index", item.step); 
        existingRow.style.cssText = "grid-column: 1 / -1 !important; display: block !important; width: 100% !important; max-width: 100% !important; clear: both !important; margin-bottom: 24px !important; box-sizing: border-box;"; 
        formInjectionWrapper.appendChild(existingRow);
      }
      
      // Update HTML structure
      existingRow.innerHTML = item.html; 
    }); 

    // Sort children in DOM visually by step number
    const rows = Array.from(formInjectionWrapper.children);
    rows.sort((a, b) => {
      return (parseInt(a.getAttribute("data-part-index"), 10) || 0) - (parseInt(b.getAttribute("data-part-index"), 10) || 0);
    });
    rows.forEach(row => formInjectionWrapper.appendChild(row));

    console.log(`[Lifecycle Engine Success] Form segments successfully updated for: "${rawUrlSlug}".`); 
    
    if (typeof hydrateInjectedFormFields === "function") { 
      hydrateInjectedFormFields(formInjectionWrapper); 
    } 
  } catch (compilationError) { 
    console.error("[Lifecycle Engine] Form compilation error:", compilationError); 
  } 
} 

// Bind method cleanly to global window boundaries 
window.executeStepTwoDynamicFormInjection = executeStepTwoDynamicFormInjection;



// ============================================================================ // 
// 🛠️ UNIVERSAL DYNAMIC TAX/COMPLIANCE TOGGLE ELEMENT VISIBILITY CONTROLLER     // 
// ============================================================================ // 
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

  // 3. Fallback safely—NEVER default to <body> or <html> during hydration 
  if (!triggeringElement) { 
    const activeNode = (targetSelectorOrEvent && targetSelectorOrEvent.srcElement instanceof HTMLElement) ? targetSelectorOrEvent.srcElement : document.activeElement; 
    if (activeNode && activeNode !== document.body && activeNode !== document.documentElement) { 
      triggeringElement = activeNode; 
    } 
  } 

  // 4. Final attribute extraction attempt if not already captured 
  if (!targetSelector && triggeringElement && typeof triggeringElement.getAttribute === 'function') { 
    targetSelector = triggeringElement.dataset?.controlsTarget || triggeringElement.getAttribute('data-controls-target'); 
  } 

  // 5. Secure Value Extraction Layer 
  let evaluationValue = null; 
  if (triggeringElement) { 
    if (triggeringElement.type === 'checkbox') { 
      evaluationValue = triggeringElement.checked ? "true" : "false"; 
    } else if (triggeringElement.type === 'radio') { 
      // FIX: If it is a radio button, only extract value if it is the currently selected option
      evaluationValue = triggeringElement.checked ? String(triggeringElement.value).toLowerCase().trim() : "false"; 
    } else if (typeof triggeringElement.value !== 'undefined' && triggeringElement.value !== null) { 
      evaluationValue = String(triggeringElement.value).toLowerCase().trim(); 
    } else if (typeof triggeringElement.getAttribute === 'function') { 
      evaluationValue = triggeringElement.dataset?.state || triggeringElement.getAttribute('data-state') || null; 
      if (evaluationValue) evaluationValue = String(evaluationValue).toLowerCase().trim();
    } 
  } 

  // 🚀 ASYNCHRONOUS TIMING COMPLIANCE ENVELOPE 
  setTimeout(() => { 
    // CRITICAL FIX: If we have no target node, try resolving it directly via the selector value text 
    if (!triggeringElement) { 
      if (typeof targetSelectorOrEvent === 'string') { 
        const structuralNormalized = targetSelectorOrEvent.toLowerCase().trim(); 
        if (["yes", "true", "1", "include"].includes(structuralNormalized)) { 
          evaluationValue = structuralNormalized; 
        } 
      } 
    } 

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
      console.debug("[Lifecycle Engine Information] Run optimized without a direct DOM layout target container mutation."); 
    } 
  }, 50); 
};


// ============================================================================ // 
// 🛠️ DYNAMIC MARKUP TEMPLATE FIELDS HYDRATION SYSTEM                           // 
// ============================================================================ // 
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
          
          // Native browser events cascade to any other framework listeners first
          elementItem.dispatchEvent(new Event('change', { bubbles: true })); 
          elementItem.dispatchEvent(new Event('input', { bubbles: true })); 
          
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
                
                // Invoke specific visibility controller exactly how it expects arguments to be delivered
                if (typeof window[functionName] === 'function') { 
                  try { 
                    // FIX: Pass the element as the first parameter so it calculates state or data values correctly
                    window[functionName](elementItem); 
                  } catch (execError) { 
                    console.warn(`[Lifecycle Engine] Failed to execute dynamic inline handler "${functionName}":`, execError); 
                  } 
                } 
              } 
            } 
          } 
        } 
      } 
    }); 

    // 2. FIX: Gather and switch radio button items (Previously missing completely from hydration)
    const formRadios = formInjectionWrapper.querySelectorAll("input[type='radio']");
    formRadios.forEach(radioItem => {
      const radioIdentifier = radioItem.name;
      if (radioIdentifier) {
        const savedRadioValue = localStorage.getItem(`wizard_field_${radioIdentifier}`);
        if (savedRadioValue !== null && radioItem.value === savedRadioValue) {
          radioItem.checked = true;
          radioItem.dispatchEvent(new Event('change', { bubbles: true }));
          
          // Trigger any associated inline handlers for checked radios
          const inlineOnChange = radioItem.getAttribute('onchange');
          if (inlineOnChange) {
            const match = inlineOnChange.match(/([a-zA-Z0-9_]+)\s*\(/);
            if (match && match[1] && typeof window[match[1]] === 'function') {
              try { window[match[1]](radioItem); } catch (e) { }
            }
          }
        }
      }
    });

    // 3. Gather and switch checkbox structural assets 
    const standaloneCheckboxes = formInjectionWrapper.querySelectorAll("input[type='checkbox']"); 
    standaloneCheckboxes.forEach(checkboxItem => { 
      const checkboxIdentifier = checkboxItem.id || checkboxItem.name; 
      if (checkboxIdentifier) { 
        const savedCacheCheckValue = localStorage.getItem(`wizard_field_${checkboxIdentifier}`); 
        if (savedCacheCheckValue !== null) { 
          checkboxItem.checked = (savedCacheCheckValue === "true"); 
          checkboxItem.dispatchEvent(new Event('change', { bubbles: true })); 
          checkboxItem.dispatchEvent(new Event('input', { bubbles: true })); 
          
          // Trigger inline handler for checkboxes
          const inlineOnChange = checkboxItem.getAttribute('onchange');
          if (inlineOnChange) {
            const match = inlineOnChange.match(/([a-zA-Z0-9_]+)\s*\(/);
            if (match && match[1] && typeof window[match[1]] === 'function') {
              try { window[match[1]](checkboxItem); } catch (e) { }
            }
          }
        } 
      } 
    }); 

    console.log("[Lifecycle Engine] Data hydration phase complete."); 
  } catch (hydrationError) { 
    console.warn("[Lifecycle Engine Tracking Node Block] Fallback asset hydration warning:", hydrationError); 
  } 
} 

// Bind method cleanly to global window boundaries 
window.hydrateInjectedFormFields = hydrateInjectedFormFields;


// ============================================================================ // 
// 🛠️ SERVICE FORM DYNAMIC FIELD PATCHER & DATA INTERCEPTOR                     // 
// ============================================================================ // 
function saveActiveServiceFormStates() { 
  console.log("[Data Matrix] Dynamically serializing current service form fields..."); 
  
  // 1. GLOBAL PATCH INTERCEPT: Force create required fields if they are missing from the active form 
  const formContainer = document.getElementById("step-panel-2"); 
  if (formContainer) { 
    // FIX: Check explicitly for the injected ID first to prevent infinite multi-append duplication
    let emailField = document.getElementById("global_contact_email") || formContainer.querySelector('input[type="email"]') || formContainer.querySelector('[id*="email"], [name*="email"]'); 
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

    // FIX: Check explicitly for the unique telephone ID before creating a fallback wrapper
    let phoneField = document.getElementById("global_contact_phone") || formContainer.querySelector('input[type="tel"]') || formContainer.querySelector('[id*="phone"], [name*="phone"], [id*="tel"]'); 
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

    // FIX: Check explicitly for the custom owner/incorporator block to safeguard layout stack loops
    let ownerField = document.getElementById("global_company_owner") || formContainer.querySelector('[id*="owner"], [name*="owner"], [id*="incorporator"], [id*="organizer"]'); 
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
    if (field.type === 'radio') {
      // FIX: For radios, store selected group values cleanly under the element name key
      if (field.name && field.checked) {
        localStorage.setItem(`wizard_field_${field.name}`, field.value);
      }
      return; 
    }

    const fieldIdentifier = field.id || field.name; 
    if (!fieldIdentifier) return; 

    if (field.type === 'checkbox') { 
      localStorage.setItem(`wizard_field_${fieldIdentifier}`, field.checked ? "true" : "false"); 
    } else { 
      localStorage.setItem(`wizard_field_${fieldIdentifier}`, field.value); 
    } 
  }); 

  console.log("[Data Matrix Success] All unique service fields cached persistently."); 
} 

window.saveActiveServiceFormStates = saveActiveServiceFormStates;


// ============================================================================ // 
// 🛒 STEP 2 DYNAMIC CART ADD-ON REGISTRY: INJECTION RUNTIME (PART 2 OF 2)     // 
// ============================================================================ // 
window.executeDynamicAddonCompilation = function() { 
  const c = window._tempAddonContext; 
  if (!c) return; 

  // FIX: Reset calculation accumulators locally every pass to prevent runaway compound totals
  let passIncrementalTotal = 0;
  let passInvoiceRowsHtml = "";
  
  // Clean dynamic IDs out of the tracking array so disabled options can be subtracted
  const catalogIds = Object.values(c.EXTENSIBLE_ADDON_CATALOG).map(a => a.id);
  c.localizedProcessedIds = c.localizedProcessedIds.filter(id => !catalogIds.includes(id));

  // Evaluate flags dynamically against your window options memory registers 
  Object.keys(c.EXTENSIBLE_ADDON_CATALOG).forEach(flagKey => { 
    const isFlagTrue = window[flagKey] === true || window[flagKey] === "yes" || String(window[flagKey]) === "true"; 
    if (!isFlagTrue) return; 
    
    const addon = c.EXTENSIBLE_ADDON_CATALOG[flagKey]; 
    if (!addon || !addon.id) return; 
    
    // Prevent hard absolute duplicates in a single compilation pass
    if (c.localizedProcessedIds.includes(addon.id)) return; 
    
    passIncrementalTotal += addon.price; 
    passInvoiceRowsHtml += ` 
      <div class="summary-item-row" data-id="${addon.id}" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; margin-top: 4px;"> 
        <span>+ ${addon.name}</span> 
        <span style="font-family: monospace;">$${addon.price.toFixed(2)}</span> 
      </div>`; 
      
    c.localizedProcessedIds.push(addon.id); 
  }); 

  // Sync back local step calculations securely to the engine context state
  c.incrementalAddonTotal = passIncrementalTotal;
  c.descriptiveInvoiceRowsHtml = passInvoiceRowsHtml;

  const aggregatedFilingSubtotal = c.baseTierPrice + c.incrementalAddonTotal; 
  const finalizedGrandTotal = aggregatedFilingSubtotal + c.baseGovAgencyFee; 

  // SAFE DOM RENDERING HOOK 
  const invoiceContainer = document.getElementById('summary-purchase-rows-container') || document.getElementById('checkout-invoice-rows-container'); 
  if (invoiceContainer) { 
    // Clean out old add-on elements from DOM regardless of whether passInvoiceRowsHtml is empty
    catalogIds.forEach(id => { 
      const existingRow = invoiceContainer.querySelector(`[data-id="${id}"]`); 
      if (existingRow) existingRow.remove(); 
    }); 
    
    if (c.descriptiveInvoiceRowsHtml !== "") {
      // Safely append rows without clobbering existing container bindings or native child structures
      const templateNode = document.createElement('div');
      templateNode.innerHTML = c.descriptiveInvoiceRowsHtml;
      while (templateNode.firstChild) {
        invoiceContainer.appendChild(templateNode.firstChild);
      }
    }
  } 

  // Sync legacys and sidebar displays elements anchors pools safely 
  const subtotalDisplays = ["invoice-subtotal-display", "subtotal-display"]; 
  subtotalDisplays.forEach(id => { 
    const el = document.getElementById(id); 
    if (el) el.textContent = '$' + aggregatedFilingSubtotal.toFixed(2); 
  }); 

  const govDisplays = ["summary-gov-fees-display", "invoice-gov-fees-display", "gov-fees-display"]; 
  govDisplays.forEach(id => { 
    const el = document.getElementById(id); 
    if (el) el.textContent = '$' + c.baseGovAgencyFee.toFixed(2); 
  }); 

  const grandDisplays = ["summary-grand-total-display", "invoice-grand-total-display", "grand-total-display", "checkout-total-display", "payment-gateway-total-display", "wizard-sticky-total-value"]; 
  grandDisplays.forEach(id => { 
    const el = document.getElementById(id); 
    if (el) el.textContent = '$' + finalizedGrandTotal.toFixed(2); 
  }); 

  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal; 
  
  return { 
    addonTotal: c.incrementalAddonTotal, 
    subtotal: aggregatedFilingSubtotal, 
    grandTotal: finalizedGrandTotal 
  }; 
};


// ============================================================================ //
// 🏁 PART 1 OF 2: DYNAMIC LIFECYCLE PARAMETER DISCOVERY ENGINE               //
// ============================================================================ //
function getActiveServicePathContext() {
  // 1. Scan memory registers for active route hooks
  if (window.routeActiveServiceKey && String(window.routeActiveServiceKey).trim() !== "") {
    return String(window.routeActiveServiceKey).toLowerCase().trim();
  }

  // 2. Reflect directly against real-time browser address parameters
  const activeParams = new URLSearchParams(window.location.search);
  const parameterExtractedKey = activeParams.get('service');
  if (parameterExtractedKey) {
    return String(parameterExtractedKey).toLowerCase().trim();
  }

  // 3. Zero Hardcoding Rule: Abort context compilation if no route match exists
  return null;
}
// ============================================================================ //
// 🏁 PART 2 OF 2: UNIVERSAL LAYOUT ATTACHMENT CONTROLLER                      //
// ============================================================================ //
async function runStepTwoLayoutInitialization() { 
  console.log("[Step 2] funnel entrance captured. Initiating questionnaire mount pass..."); 
  
  // Resolve your explicit HTML target placeholder node using our view router 
  const placeholderContainer = typeof window.initializeStep2AssetRouter === "function" ? 
    window.initializeStep2AssetRouter() : 
    document.getElementById("step-2-injection-placeholder") || document.getElementById("step-panel-2"); 
    
  if (!placeholderContainer) { 
    console.warn("[Step 2 Lifecycle Retry] Base layout container missing. Postponing handler...");
    setTimeout(runStepTwoLayoutInitialization, 100);
    return; 
  } 

  // Safely extract the current runtime context slug from Part 1
  const targetServiceSlug = getActiveServicePathContext();
  
  if (!targetServiceSlug) {
    console.error("[Step 2 Lifecycle Failure] Absolute abort: Active route context registry token cannot be resolved.");
    return;
  }

  console.log(`[Step 2 Lifecycle] Dispatched compiler pass for context token: "${targetServiceSlug}"`);

  // Clear any lingering static classes or unassigned visibility attributes from step 1
  const parentPanelBlock = document.getElementById("step-panel-1") || document.getElementById("step-1"); 
  if (parentPanelBlock) { 
    parentPanelBlock.classList.remove("active"); 
    parentPanelBlock.style.setProperty("display", "none", "important"); 
  } 

  const stepTwoPanel = document.getElementById("step-panel-2") || document.getElementById("step-2"); 
  if (stepTwoPanel) { 
    stepTwoPanel.classList.add("active"); 
    stepTwoPanel.style.removeProperty("display"); 
  } 

  // Compile and render your dynamic form structures safely into the verified template path
  if (typeof window.executeStepTwoDynamicFormInjection === "function") { 
    await window.executeStepTwoDynamicFormInjection(null, targetServiceSlug); 
    
    if (typeof window.executeDynamicAddonCompilation === "function") { 
      window.executeDynamicAddonCompilation(); 
    } 
  } else { 
    console.error("[Step 2 Lifecycle Failure] Compiler engine 'executeStepTwoDynamicFormInjection' is uninitialized."); 
  } 
} 

window.runStepTwoLayoutInitialization = runStepTwoLayoutInitialization; 
window.initializeDynamicServiceFormLayout = runStepTwoLayoutInitialization;


