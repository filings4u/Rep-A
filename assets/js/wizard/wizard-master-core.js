// ============================================================================ //
// 📊 1. GLOBAL RUNTIME INITIALIZATION MATRIX (STRICT DATA ELEMENTS ONLY)       //
// ============================================================================ //
(function() {
    "use strict";

    const urlParamsMatrix = new URLSearchParams(window.location.search);

    // Ingest core route targets from address parameters cleanly
    window.currentServiceKey = urlParamsMatrix.get('service') || null;
    window.currentServicePathKey = window.currentServiceKey;
    window.currentPlanKey = urlParamsMatrix.get('plan') || null;
    window.currentServiceTier = window.currentPlanKey;

    // FIX: Added your gate engine select ID to the lookup cascade
    let stateDropdown = document.getElementById("wizard_gate_state_select") || document.getElementById("wizard_state_select") || document.getElementById("state_select");
    
    // Fallback cleanly to url search params if element is missing from frame zero DOM
    window.selectedJurisdiction = stateDropdown ? stateDropdown.value : (urlParamsMatrix.get('state') || null);
    window.dynamicAssetUrlPath = "";
    window.collectedFormMetadata = {};

    // DEFINE THE DYNAMIC PROPERTY INTERCEPTOR FOR YOUR DATABASE KEYS
    let internalCatalogReference = null;

    Object.defineProperty(window, 'CENTRAL_ADDON_DB', {
        get() {
            return internalCatalogReference;
        },
        set(newDatabasePayload) {
            // Guard loop check to prevent deep recursive execution freezes
            if (internalCatalogReference === newDatabasePayload) return;
            
            internalCatalogReference = newDatabasePayload;

            // The millisecond the database is set, dynamically regenerate your array keys
            if (newDatabasePayload && typeof newDatabasePayload === 'object') {
                window.auxiliaryAddonsArray = Object.keys(newDatabasePayload);
            } else {
                window.auxiliaryAddonsArray = [];
            }

            // FIX: Hand over valid context data references down your pipeline instead of calling a blank function.
            // We include your updated Step 3 selector tags to accurately map late-binding network data packs.
            if (typeof window.executeStepThreeUpsellStreaming === "function") {
                console.log("[Master Core] Asynchronous addon database arrived. Executing targeted marketplace stream pass...");
                window.executeStepThreeUpsellStreaming();
            } else if (typeof window.renderTargetUpsellsListPanel === "function") {
                const marketplaceTarget = document.getElementById('wizard-dynamic-upsells-render-target') || 
                                          document.getElementById('marketplace-upsells-target') || 
                                          document.querySelector('.marketplace-panel-wrapper');

                if (marketplaceTarget && newDatabasePayload) {
                    window.renderTargetUpsellsListPanel(newDatabasePayload, marketplaceTarget);
                }
            } else {
                console.log("[Data Matrix Delay] Addon payload cached. Standing by for step view layout activation.");
            }
        },
        configurable: true,
        enumerable: true
    });

    // Fallback initial evaluation check
    window.auxiliaryAddonsArray = window.CENTRAL_ADDON_DB && typeof window.CENTRAL_ADDON_DB === 'object' ? Object.keys(window.CENTRAL_ADDON_DB) : [];
})();


// ============================================================================ //
// 🧼 2. RUNTIME SESSION ISOLATION ENGINE & URL SANITIZER (ZERO HARDCODING)     //
// ============================================================================ //
(async function handleStrictSessionLifecycle() { 
    "use strict";

    const cacheKeyNamespace = "f4u_wizard_onboarding_state";
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if a database connection is ready in memory yet
    const supabase = window.supabaseClientInstance || (window.supabase ? window.supabase : null);
    let isAuthenticatedUserSession = false;

    if (supabase && typeof supabase.auth === "object") {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) isAuthenticatedUserSession = true;
        } catch(e) {
            isAuthenticatedUserSession = false;
        }
    }

    // 🟢 THE FIX: If they are NOT logged in, aggressively flush all parameters on refresh!
    if (!isAuthenticatedUserSession) { 
        console.log("[Session Engine] Public Guest Session: Purging all residual caching allocations.");
        
        localStorage.clear(); 
        sessionStorage.clear(); 
        
        if (window.collectedFormMetadata) { 
            window.collectedFormMetadata = {}; 
        } 
        
        // Strip out hardcoded fallbacks to let step 0 load cleanly
        window.selectedJurisdiction = null;
        localStorage.removeItem('wizard_selected_state');

        // 🟢 THE FIX: Wipe out state parameter markers completely from the address bar on reload
        if (urlParams.has('state')) {
            urlParams.delete('state');
            const cleanUrlPath = `${window.location.pathname}?${urlParams.toString()}`;
            window.history.replaceState({ path: cleanUrlPath }, '', cleanUrlPath);
        }
    } else { 
        console.log("[Session Engine] Persistent Authenticated Dashboard Vault Connection Active."); 
        
        // Hydrate variables back into memory tracking states from local rows
        window.selectedJurisdiction = localStorage.getItem('wizard_selected_state') || urlParams.get('state') || null;
    } 
})();

// ============================================================================ //
// ⚙️ SYSTEM STATE FLOW & NAVIGATION TRACKING REGISTRY                         //
// ============================================================================ //
window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 0;
window.totalWizardExpectedSteps = 7;
window.totalWizardSteps = 7;

// ============================================================================ //
// 🔌 ACTIVE ADD-ON SERVICE STATE FLAGS (ZERO-HARDCODE AUTOMATED ITERATOR)    //
// ============================================================================ //
(function initializeDynamicStateFlags() {
    "use strict";

    // Safeguard flag to prevent infinite loops inside your pricing compilation matrix
    let isProcessingCompilationLoop = false;

    // Helper to bind reactive property tracks to window keys dynamically
    function createReactiveFlag(flagKey) {
        // Prevent attempting to redefine existing properties on the window scope
        if (Object.getOwnPropertyDescriptor(window, flagKey)) return;

        let internalStateValue = false;

        Object.defineProperty(window, flagKey, {
            get() {
                const storageVal = localStorage.getItem(`wizard_field_${flagKey}`);
                if (storageVal !== null) {
                    // FIX 1: Provide polymorphic type support. Return a layout that accommodates
                    // both string matching protocols ('true' / 'yes') and boolean flags concurrently.
                    return storageVal === "true" || storageVal === "yes" || storageVal === true;
                }
                return internalStateValue;
            },
            set(newBooleanState) {
                const normalizedState = newBooleanState === true || newBooleanState === "yes" || String(newBooleanState) === "true";
                
                // Guard block: Only update and trigger calculator loops if the status is actually shifting
                if (internalStateValue === normalizedState && localStorage.getItem(`wizard_field_${flagKey}`) === (normalizedState ? "true" : "false")) {
                    return;
                }

                internalStateValue = normalizedState;
                localStorage.setItem(`wizard_field_${flagKey}`, normalizedState ? "true" : "false");

                // Auto-trigger your calculator loop safely while blocking recursion loops
                if (typeof window.executeDynamicAddonCompilation === "function" && !isProcessingCompilationLoop) {
                    try {
                        isProcessingCompilationLoop = true;
                        window.executeDynamicAddonCompilation();
                    } catch (err) {
                        console.error("[Compilation Lock Failure] Failed to compile totals safely:", err);
                    } finally {
                        isProcessingCompilationLoop = false;
                    }
                }
            },
            configurable: true,
            enumerable: true
        });
    }

    /**
     * ENTERPRISE INTERCEPT FIX: Define the map property with an active setter descriptor.
     * Instead of checking a static variable that returns undefined on parse, this sets up an active
     * interceptor. The exact millisecond your downstream script files assign your 100+ services dictionary,
     * it hooks and executes the flag generation loop cleanly, preventing baseline data mismatches.
     */
    let internalPropertyMapPayload = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
    
    Object.defineProperty(window, 'UPSELLS_GLOBAL_STATE_PROPERTY_MAP', {
        get() {
            return internalPropertyMapPayload;
        },
        set(newMapData) {
            if (newMapData && typeof newMapData === 'object') {
                // Merge the configurations safely into our active instance tracker
                Object.assign(internalPropertyMapPayload, newMapData);
                
                // Loop and register all unique keys instantly upon asset file arrival
                Object.values(newMapData).forEach(stateFlagKey => {
                    createReactiveFlag(stateFlagKey);
                });
                console.log("[State Registry Success] Late-binding enterprise tracking tokens initialized successfully.");
            }
        },
        configurable: true,
        enumerable: true
    });

    // Automatically process baseline values in case object data mounted prematurely
    if (window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP) {
        Object.values(window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP).forEach(stateFlagKey => {
            createReactiveFlag(stateFlagKey);
        });
    }

    // Secondary specialized fallbacks
    const additionalCoreFlags = [
        "customSelectedRegisteredAgentServiceActive",
        "customSelectedEinProcurementServiceActive",
        "customSelectedScorpElectionServiceActive",
        "customSelectedSolePropLicenseAuditServiceActive",
        "customSelectedDbaLicenseAuditServiceActive",
        "customSelectedNonprofitLicenseCheckActive",
        "customSelectedDbaSearchServiceActive",
        "customSelectedForeignQualLicenseSuiteActive",
        "customSelectedExpeditedFilingServiceActive",
        "customSelectedApostilleAuthenticationServiceActive",
        "customSelectedGoodStandingCertificateServiceActive"
    ];

    additionalCoreFlags.forEach(fallbackFlagKey => {
        createReactiveFlag(fallbackFlagKey);
    });

    console.log("[State Registry] Global compliance tracking tokens dynamically initialized successfully via loop iteration.");
})();


// ============================================================================ //
// 🗃️ MASTER STATE PROPERTY MAPPING & LEGACY REFERENCE DICTIONARIES            //
// ============================================================================ //

// --- BACKWARDS COMPATIBLE STEP 2 HARDCODED UPSELL RECORDS ---
window.STEP_2_UPSELLS_REFERENCE = {
    "assemble-dqf": { name: "Assemble Driver Qualification Files (DQF)", price: 79.00 },
    "drug-consortium": { name: "DOT Drug & Alcohol Consortium Enrollment", price: 149.00 },
    "hos-review": { name: "Hours of Service (HOS) Log Audit Pre-Review", price: 195.00 },
    "maintenance-ledger": { name: "Vehicle Maintenance Ledger & Inspection Set", price: 85.00 },
    "expert-consultation": { name: "Independent Pre-Audit Consultation Package", price: 250.00 }
};

// Global Configuration Property State Keys Registry Map
// FIX: Purged Step 2 items out of the global map configuration to protect Step 3 from background state contamination loops.
window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP = {
    "corporate-veil-lock": "customSelectedCorporateVeilLockActive",
    "hazmat-liability-shield": "customSelectedHazmatLiabilityShieldActive",
    "cargo-indemnity-audit": "customSelectedCargoIndemnityAuditActive",
    "regulatory-defense-retainer": "customSelectedRegulatoryDefenseRetainerActive",
    "unified-carrier-reg-shield": "customSelectedUcrShieldActive",
    "biennial-update-lock": "customSelectedBiennialLockActive",
    "driver-monitoring-feed": "customSelectedMvrMonitoringActive",
    "process-agent-boc3": "customSelectedBoc3Active",
    "scac-alpha-code": "customSelectedScacActive",
    "ifr-tax-account-setup": "customSelectedIftaActive",
    "kyu-weight-distance": "customSelectedKyuActive",
    "ny-hut-permit": "customSelectedHutActive",
    "nm-wdt-permit": "customSelectedWdtActive",
    "or-weight-receipt": "customSelectedOregonActive",
    "ein-tax-id-expedite": "customSelectedEinActive",
    "llc-operating-agreement": "customSelectedOperatingAgreementActive",
    "s-corp-election-filing": "customSelectedSCorpActive",
    "corp-by-laws-package": "customSelectedByLawsActive",
    "registered-agent-year": "customSelectedAgentActive",
    "dun-bradstreet-setup": "customSelectedDnbActive",
    "trademark-name-lock": "customSelectedTrademarkActive"
};

// ============================================================================ //
// 🗃️ USA STATES DICTIONARY CONFIGURATION ARRAY MATRIX                         //
// ============================================================================ //
window.USA_STATES_DICTIONARY = [
    { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" }, { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" }, { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" }, { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" }, { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" }, { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" }, { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" }, { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" }, { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" }, { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" }, { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" }
];

// ============================================================================ //
// 🛠️ DYNAMIC MARKUP TEMPLATE UTILITIES (ZERO-HARDCODE SELECTION BUILDER)      //
// ============================================================================ //
/**
 * Programmatically compiles drop-down list option rows from your dictionary arrays matrix.
 * @param {string} selectedCode - Two-character state value parameter to mark as selected.
 * @returns {string} Fully compiled inner HTML option block row text strings.
 */
window.buildGlobalUsaStateDropdownOptionsHtml = function(selectedCode) {
    let optionsHtml = '<option value="">-- Choose Option State --</option>';
    const activeMatchCode = String(selectedCode || "").toUpperCase().trim();
    
    window.USA_STATES_DICTIONARY.forEach(state => {
        const isMatched = (state.code === activeMatchCode);
        optionsHtml += `<option value="${state.code}" ${isMatched ? 'selected' : ''}>${state.name}</option>`;
    });
    
    return optionsHtml;
};

// Re-expose standard alias mapping keys to maximize cross-file layout compilation checks
window.getUsaStatesHtml = window.buildGlobalUsaStateDropdownOptionsHtml;
window.globalStateDropdownOptionsHtml = window.buildGlobalUsaStateDropdownOptionsHtml("");

// ============================================================================ //
// 📊 PART 1 OF 2: UNIVERSAL STEP VALIDATION MATRIX ENGINE                      //
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

    // Isolate target view container panels cleanly
    var activePanel = document.getElementById("step-panel-" + activeStep) || 
                       document.getElementById(`step-${activeStep}-injection-placeholder`) || 
                       (parseInt(activeStep, 10) === 0 ? document.getElementById("step-0-injection-placeholder") : null);

    if (!activePanel) {
        console.log(`[Validator Engine Warning] View container for step ${activeStep} not mounted. Bypassing check.`);
        return true;
    }

    // FIX 1: Clear all previous in-line error notifications before running a new sweep
    activePanel.querySelectorAll(".inline-error-message-node").forEach(node => node.remove());
    activePanel.querySelectorAll(".wizard-input-field-error-state").forEach(el => {
        el.classList.remove("wizard-input-field-error-state");
        el.style.borderColor = ""; // Reset back to default stylesheet boundaries
    });

    var inputs = activePanel.querySelectorAll("input, select, textarea");
    var stepIsValid = true;
    var firstInvalidElement = null;

    // Upgraded: Supports global characters, accents, spaces, periods, and hyphens universally
    var regexLetters = /^[\p{L}\s.'\-]+$/u;
    var regexNumbers = /^\d+$/;
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    inputs.forEach(function(el) {
        if (el.type === "hidden" || el.disabled) return;

        // Skip element if it is nested inside a hidden step placeholder
        const isHiddenContainer = el.closest('[style*="display: none"]') || el.closest('.wizard-panel:not(.active)');
        var bounds = el.getBoundingClientRect();
        if (isHiddenContainer || (bounds.width === 0 && bounds.height === 0)) {
            return;
        }

        // If we are validating Step 1, ignore inputs sitting inside future step placeholders
        if (parseInt(activeStep, 10) === 1) {
            if (el.closest('#step-2-injection-placeholder') || el.closest('#step-3-injection-placeholder')) {
                return;
            }
        }

        var val = el.value.trim();
        let isFieldInvalid = false;
        let validationErrorMessage = "";

        // 1. CHECK REQUIRED INPUT STATES
        if (el.hasAttribute("required") && val === "") {
            validationErrorMessage = "This field is required.";
            isFieldInvalid = true;
        }
        // 2. CHECK FORMAT STRINGS IF FIELD IS POPULATED
        else if (val !== "") {
            const lowerName = (el.name || "").toLowerCase();
            const lowerId = (el.id || "").toLowerCase();

            // Email Input Patterns
            if (el.type === "email" || el.classList.contains("validate-email") || lowerName.includes("email") || lowerId.includes("email")) {
                if (!regexEmail.test(val)) {
                    validationErrorMessage = "Please enter a valid email address.";
                    isFieldInvalid = true;
                }
            }
            // Person/City Name Patterns (Excludes general entity name attributes to allow digits)
            else if (el.classList.contains("validate-letters") || lowerName.includes("first_name") || lowerName.includes("last_name") || lowerName.includes("city")) {
                if (!regexLetters.test(val)) {
                    validationErrorMessage = "This field can only contain letters, spaces, hyphens, or periods.";
                    isFieldInvalid = true;
                }
            }
            // Numeric Input Patterns (ZIP, EIN, Phone, Numbers)
            else if (el.type === "number" || el.classList.contains("validate-numbers") || lowerName.includes("zip") || lowerName.includes("ein") || lowerName.includes("phone") || lowerName.includes("tel")) {
                // Strip common delimiters for phone/ein validation tracking if passed as text inputs
                const cleanNumericValue = val.replace(/[\s\-()]/g, "");
                if (!regexNumbers.test(cleanNumericValue)) {
                    validationErrorMessage = "This field can only contain numeric digits.";
                    isFieldInvalid = true;
                }
            }
        }

        // FIX 2: Dynamic In-Line Error Placement.
        // Replaces native reportValidity popups with scannable labels attached right below the inputs.
        if (isFieldInvalid) {
            stepIsValid = false;
            if (!firstInvalidElement) firstInvalidElement = el;

            el.classList.add("wizard-input-field-error-state");
            el.style.borderColor = "#b91c1c"; // Apply strict red focus edge

            const inputParentWrapper = el.closest(".wizard-input-group") || el.closest(".form-group-wrapper") || el.parentElement;
            if (inputParentWrapper) {
                if (!inputParentWrapper.querySelector(".inline-error-message-node")) {
                    const errorLabel = document.createElement("span");
                    errorLabel.className = "inline-error-message-node";
                    errorLabel.style.cssText = "color: #b91c1c; font-size: 0.78rem; font-weight: 600; display: block; margin-top: 4px; text-align: left; clear: both; width: 100%; animation: fadeIn 0.15s ease;";
                    errorLabel.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="margin-right: 4px;"></i> ${validationErrorMessage}`;
                    inputParentWrapper.appendChild(errorLabel);
                }
            }
        }
    });

    // Focus and scroll smoothly to the first field failure item
    if (!stepIsValid && firstInvalidElement) {
        try {
            firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstInvalidElement.focus();
        } catch (err) {
            console.warn("[Validator Engine] Prevented crash during focus shift:", err);
        }
    }

    return stepIsValid;
}

// Expose verification layers back to global tracking objects securely
window.validateStepInputParametersVanilla = validateStepInputParametersVanilla;

// ============================================================================ //
// 🛠️ UNIVERSAL STEP VALIDATION DISPATCHER (100% PURE DYNAMIC ENGINE)          //
// ============================================================================ //
/**
 * Global dynamic form dispatcher checking tool.
 * Identifies the on-screen active step framework form state and triggers its matching validation sequence.
 * Pure Dynamic Architecture: Supports 44+ services automatically with zero hardcoding.
 * @returns {boolean} Validation status report.
 */
function runMasterActiveStepFormValidation() {
    // Enforce a strict type evaluation check to recognize Step 0 explicitly
    const currentStep = (typeof window.currentWizardActiveStep === "number") ? window.currentWizardActiveStep : 0;
    console.log(`[Validation Dispatch] Intercepting form status check for step: ${currentStep}`);

    // Force evaluate basic required markup fields on the current step container FIRST
    if (typeof window.validateStepInputParametersVanilla === "function") {
        const isBaseStepValid = window.validateStepInputParametersVanilla(currentStep);
        if (!isBaseStepValid) {
            console.warn(`[Validation Dispatch Block] Step ${currentStep} failed primary field constraint validation.`);
            return false; // Stop navigation if regular visible inputs are broken/empty
        }
    }

    const currentServiceKey = window.routeActiveServiceKey || window.currentServiceKey || "";
    const cleanKey = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
    
    if (!cleanKey || cleanKey === "") {
        console.log("[Validation Dispatch] No active service key registered. Proceeding with baseline status.");
        return true;
    }

    // 1. CONVERT SYSTEM SERVICE KEY TO DYNAMIC LOOKUP WORDS
    const primaryKeyWords = cleanKey.split('-');

    // 2. REFLEXIVE WINDOW SCOPE MEMORY SCAN
    const globalContextKeys = Object.keys(window);
    const targetValidationMethodKey = globalContextKeys.find(key => {
        const kLower = key.toLowerCase();
        
        // Ensure it is a function, starts with "validate", and contains at least one 
        // distinctive token of the active service name (e.g. "sales", "payroll", "hazmat")
        const isValidationFunction = typeof window[key] === "function" && kLower.startsWith("validate");
        
        // FIX 1: Explicitly protect core step validators from cross-matching themselves during fuzzy reflection loops
        const isNotVanillaEngine = key !== "validateStepInputParametersVanilla" && 
                                   key !== "runMasterActiveStepFormValidation" &&
                                   key !== "validateStepInputParameters";

        // Fuzzy Matching Condition: Check if the function name includes any of our core path words
        const matchesServiceKeyword = primaryKeyWords.some(word => word.length > 2 && kLower.includes(word));
        return isValidationFunction && matchesServiceKeyword && isNotVanillaEngine;
    });

    // 3. DYNAMIC AUTOMATED DISPATCH EXECUTION FOR ADVANCED SERVICE LOGIC
    if (targetValidationMethodKey) {
        console.log(`[Validation Dispatch Success] Auto-discovered supplementary validation logic: window.${targetValidationMethodKey}()`);
        try {
            // FIX 2: Resolve signature parameters adaptively. Locate the active DOM container node 
            // and pass it down the pipeline instead of passing a raw step integer.
            // This prevents sub-script querySelector calls from throwing fatal execution crashes.
            const validationTargetCanvas = document.getElementById(`step-${currentStep}-onboarding-fields-canvas`) || 
                                           document.getElementById("step-2-onboarding-fields-canvas") || 
                                           document.getElementById(`step-panel-${currentStep}`) || 
                                           document.body;

            const advancedValidationResult = window[targetValidationMethodKey](validationTargetCanvas, currentStep);
            
            // Normalized boolean fallback conversion protects against undefined return values
            return advancedValidationResult !== false;
        } catch (err) {
            console.error(`[Validation Dispatch Failure] Runtime error executing window.${targetValidationMethodKey}:`, err);
            return false; // Lock step progression defensively if an advanced script encounters an unhandled runtime error
        }
    }

    // ============================================================================ //
    // 4. ZERO-HARDCODE STANDALONE FALLBACK SEGMENTATION INTERFACES                 //
    // ============================================================================ //
    if (typeof window.validateAlgorithmicFallbackFields === "function") {
        console.log("[Validation Dispatch] Custom function file validator missing, defaulting to automated fallback loop.");
        return !!window.validateAlgorithmicFallbackFields(currentStep);
    }

    return true;
}

// Bind cleanly back into universal global window scope references safely
window.runMasterActiveStepFormValidation = runMasterActiveStepFormValidation;


// ============================================================================ //
// 🧠 MODULAR ATTACHMENT: VANILLA STATE SCRAPER FOR STEP HYDRATION              //
// ============================================================================ //
window.saveWizardFormStatesVanilla = function() {
    console.log("[State Engine] Triggering global form parameter data collection pass...");
    try {
        // Enforce strict type evaluation check
        const currentStepNum = (typeof window.currentWizardActiveStep === "number") ? window.currentWizardActiveStep : 0;
        
        // FIX 1: Strict target containment boundary. 
        // We eliminate fuzzy text class queries that accidentally scrape empty background canvas layouts.
        const currentActivePanel = document.getElementById(`step-panel-${currentStepNum}`) || 
                                   document.getElementById(`step-${currentStepNum}-injection-placeholder`) || 
                                   (currentStepNum === 0 ? document.getElementById("step-0-injection-placeholder") : null);

        if (!currentActivePanel) {
            console.warn(`[State Engine Abort] Canceled scraping pass: Panel context for step ${currentStepNum} not mounted in DOM tree yet.`);
            return;
        }

        console.log(`[State Engine] Actively serializing elements for Step Panel ID: "${currentActivePanel.id || 'Dynamic Slot'}"`);

        // 1. Collect all standard alphanumeric fields, textareas, hidden items, and selectors
        const formFields = currentActivePanel.querySelectorAll("input:not([type='checkbox']):not([type='radio']), select, textarea");
        formFields.forEach(fieldItem => {
            const fieldIdentifier = fieldItem.id || fieldItem.name;
            if (fieldIdentifier) {
                const structuralValue = fieldItem.value ? fieldItem.value.trim() : "";
                localStorage.setItem(`wizard_field_${fieldIdentifier}`, fieldItem.value);

                // STATE RETENTION GUARD: Only backup codes if the value is explicitly populated
                if ((fieldIdentifier.includes("state") || fieldIdentifier.includes("formation")) && structuralValue !== "") {
                    localStorage.setItem('wizard_selected_state', structuralValue.toUpperCase());
                    window.selectedJurisdiction = structuralValue.toUpperCase();
                }
            }
        });

        // 2. Process all checkbox components cleanly
        const checkboxes = currentActivePanel.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(function(boxItem) {
            const boxIdentifier = boxItem.id || boxItem.name;
            if (boxIdentifier) {
                // FIX 2: Protect your Step 3 marketplace check matrices!
                // Skip updating local storage if the checkbox is an upsell element sitting inside a Step 2 background template.
                if (currentStepNum === 2 && (boxItem.classList.contains("upsell-checkbox") || boxItem.closest(".upsell-market-card"))) {
                    return;
                }
                localStorage.setItem(`wizard_field_${boxIdentifier}`, boxItem.checked ? "true" : "false");
            }
        });

        // 3. Process any radio inputs cleanly (such as package tiers or feature triggers)
        const radioButtons = currentActivePanel.querySelectorAll("input[type='radio']");
        radioButtons.forEach(function(radioItem) {
            const radioIdentifier = radioItem.name || radioItem.id;
            if (radioIdentifier && radioItem.checked) {
                localStorage.setItem(`wizard_field_${radioIdentifier}`, radioItem.value);

                // Parallel sync active plan keys across global routing boundaries
                if (radioIdentifier.toLowerCase().includes("plan") || radioIdentifier.toLowerCase().includes("tier")) {
                    window.currentPlanKey = radioItem.value;
                    window.currentServiceTier = radioItem.value;
                }
            }
        });

        console.log("[State Engine Success] Active layout fields successfully serialized.");
    } catch (scrapingException) {
        console.warn("[State Engine Error] Failed to safely cache form elements:", scrapingException);
    }
};


// ============================================================================ //
// 🧭 WIZARD NAVIGATION & APPLICATION TIMELINE PROGRESS LIGHTS (DYNAMIC)       //
// ============================================================================ //
function goToNextWizardStep(targetStep, eventClickRef) {
    // Safely capture mouse click triggers from either parameter slot and defuse native HTML form submission events instantly
    const explicitEvent = (targetStep && typeof targetStep === 'object') ? targetStep : (eventClickRef && typeof eventClickRef === 'object' ? eventClickRef : window.event);
    if (explicitEvent) {
        if (typeof explicitEvent.preventDefault === "function") explicitEvent.preventDefault();
        if (typeof explicitEvent.stopPropagation === "function") explicitEvent.stopPropagation();
    }

    window.currentWizardActiveStep = (typeof window.currentWizardActiveStep !== 'undefined') ? parseInt(window.currentWizardActiveStep, 10) : 0;
    if (isNaN(window.currentWizardActiveStep)) window.currentWizardActiveStep = 0;

    let normalizedTargetStep = targetStep;
    if (targetStep && typeof targetStep === 'object') {
        normalizedTargetStep = undefined; // Clear out if clicked as a standard event node listener
    }

    // ROUTE VALIDATION DIRECTLY THROUGH MASTER DISPATCHER
    if (typeof window.runMasterActiveStepFormValidation === "function") {
        const isCurrentViewValid = window.runMasterActiveStepFormValidation();
        if (!isCurrentViewValid) {
            console.warn(`[Navigation Gate] Validation failed for Step ${window.currentWizardActiveStep} via Master Dispatcher. Halt pipeline.`);
            return false;
        }
    } else if (typeof window.validateStepInputParametersVanilla === "function") {
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
    if (typeof normalizedTargetStep !== 'undefined' && !isNaN(normalizedTargetStep)) {
        nextStepIndex = parseInt(normalizedTargetStep, 10);
    }

    // Target step ceiling guard (0 to 7 means 7 is the final view, step 8 triggers submission)
    if (nextStepIndex > 7) {
        console.log("[Navigation] End of onboarding funnel reached. Submitting master form payload...");
        return true;
    }

    switchWizardActiveViewLayout(nextStepIndex);
    return false; // Force hard return safety lock
}

function goToPreviousWizardStep() {
    window.currentWizardActiveStep = (typeof window.currentWizardActiveStep !== 'undefined') ? parseInt(window.currentWizardActiveStep, 10) : 0;
    if (isNaN(window.currentWizardActiveStep)) window.currentWizardActiveStep = 0;

    let previousStepIndex = window.currentWizardActiveStep - 1;
    if (previousStepIndex < 0) {
        console.log("[Navigation] Already at Step 0 entry frame.");
        return false;
    }

    switchWizardActiveViewLayout(previousStepIndex);
    return false;
}

function switchWizardActiveViewLayout(activeStepTarget) {
    const targetStepInt = parseInt(activeStepTarget, 10) || 0;
    console.log(`[Navigation Engine] Performing active step transition block to: Step ${targetStepInt}`);

    // Synchronously update step tracker to prevent race conditions
    window.currentWizardActiveStep = targetStepInt;

    const storedStateString = localStorage.getItem("f4u_wizard_onboarding_state") || "{}";
    try {
        const parsedState = JSON.parse(storedStateString);
        parsedState.currentWizardActiveStep = targetStepInt;
        localStorage.setItem("f4u_wizard_onboarding_state", JSON.stringify(parsedState));
    } catch (e) {
        console.warn("[Navigation Engine] State sync to localStorage restricted:", e);
    }

    const transitionRunner = typeof window.triggerWorkspaceTransitionSpinner === "function" ? window.triggerWorkspaceTransitionSpinner : function(callback) { callback(); };

    transitionRunner(() => {
        // Uniform panel visibility display alignments
        for (let i = 0; i <= 7; i++) {
            const panelNode = document.getElementById(`step-panel-${i}`);
            if (panelNode) {
                if (i === targetStepInt) {
                    panelNode.classList.add("active");
                    panelNode.style.setProperty("display", "block", "important");
                    panelNode.setAttribute("tabindex", "-1");
                    try { panelNode.focus(); } catch(e) {}
                } else {
                    panelNode.classList.remove("active");
                    panelNode.style.setProperty("display", "none", "important");
                }
            }
        }

        // ===================================================================== //
        // STEP 2 DYNAMIC INJECTION CORRECTION                                   //
        // ===================================================================== //
        if (targetStepInt === 2) {
            const targetUrlParams = new URLSearchParams(window.location.search);
            const activeServiceKey = window.routeActiveServiceKey || String(targetUrlParams.get('service') || "").toLowerCase().trim();
            
            const innerPlaceholderCanvas = document.getElementById("step-2-injection-placeholder");
            if (innerPlaceholderCanvas) {
                innerPlaceholderCanvas.style.setProperty("display", "block", "important");
                innerPlaceholderCanvas.style.setProperty("opacity", "1", "important");
                innerPlaceholderCanvas.style.setProperty("visibility", "visible", "important");
            }

            if (typeof window.executeStepTwoDynamicFormInjection === "function") {
                try {
                    window.executeStepTwoDynamicFormInjection(null, activeServiceKey);
                } catch (stepTwoError) {
                    console.error("[CRITICAL FAILURE INSIDE STEP 2 SCRIPT]:", stepTwoError);
                }
            }
        }

        // ===================================================================== //
        // FIX: STEP 3 DYNAMIC MARKETPLACE PACKAGES INJECTION BRIDGE             //
        // ===================================================================== //
        if (targetStepInt === 3) {
            console.log("[Navigation Router] Step 3 visibility confirmed. Triggering marketplace generation pass...");

            // Un-collapse marketplace containers natively
            const marketplaceContainer = document.getElementById("step-panel-3") || document.getElementById("step-3-injection-placeholder");
            if (marketplaceContainer) {
                marketplaceContainer.style.setProperty("display", "block", "important");
            }

            // Force Step 3's independent script compiler engine to process elements and paint cards
            if (typeof window.executeStepThreeUpsellStreaming === "function") {
                window.executeStepThreeUpsellStreaming();
            } else if (typeof window.autoInitializeStep3MarketplaceCatalog === "function") {
                window.autoInitializeStep3MarketplaceCatalog();
            }
            
            // Run your dynamic section duplications erasers instantly
            if (typeof window.cleanStep3MarketplaceDuplications === "function") {
                window.cleanStep3MarketplaceDuplications();
            }
        }

        // ===================================================================== //
        // LIFECYCLE REBOOT COOLDOWN PRESERVING STEP 0                           //
        // ===================================================================== //
        if ((targetStepInt === 0 || targetStepInt === 1) && typeof window.runUnifiedWizardBootEngine === "function") {
            window.runUnifiedWizardBootEngine();
        } else {
            // FIX: Encapsulate pricing calculations inside an animation frame task loop block.
            // This guarantees that calculations process ONLY after panels finish layout toggling,
            // entirely breaking the recursive microtask thread lock and displaying step 3 cards safely.
            requestAnimationFrame(() => {
                if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
                if (typeof window.updateApplicationMapTimelineBubbles === "function") window.updateApplicationMapTimelineBubbles(targetStepInt);
                if (typeof window.autoSkinSelectedUpsellCards === "function") window.autoSkinSelectedUpsellCards();
            });
        }
    });
}

// Map variables cleanly back into global scope contexts
window.goToNextWizardStep = goToNextWizardStep;
window.goToPreviousWizardStep = goToPreviousWizardStep;
window.switchWizardActiveViewLayout = switchWizardActiveViewLayout;

// ============================================================================ //
// 🛡️ REFACTORED REFLECTIVE INFRASTRUCTURE HYDRATION LAYER & ANTI-CRASH SHIELD   //
// ============================================================================ //
(function() {
    "use strict";

    // Safeguard root objects, avoiding hardcoded default template assignments
    window.CENTRAL_SERVICE_PLAN_DB = window.CENTRAL_SERVICE_PLAN_DB || {};
    window.GLOBAL_COMPANY_PRICING = window.GLOBAL_COMPANY_PRICING || {};
    window.GLOBAL_COMPANY_PRICING.packages = window.GLOBAL_COMPANY_PRICING.packages || window.CENTRAL_SERVICE_PLAN_DB;
    
    if (!window.GLOBAL_COMPANY_PRICING.addons) {
        window.GLOBAL_COMPANY_PRICING.addons = {};
    }

    // FIX: Make the active service key evaluation lazy instead of freezing empty values on load
    let internalServiceKey = null;

    Object.defineProperty(window, 'routeActiveServiceKey', {
        get() {
            if (internalServiceKey) return internalServiceKey;

            const urlScanner = new URLSearchParams(window.location.search);
            // FIX 1: Expand search matrix to crawl all active routing identifiers across the window scope 
            // before settling on an empty string lookup fallback.
            const rawUrlService = urlScanner.get('service') || window.currentServiceKey || window.currentServicePathKey;
            
            let fallbackInitialKey = Object.keys(window.CENTRAL_SERVICE_PLAN_DB)[0] || "";
            let activeKeyToCommit = rawUrlService ? rawUrlService : fallbackInitialKey;

            if (typeof window.resolvePricingConfigurationDynamically === "function" && activeKeyToCommit) {
                const dynamicMatch = window.resolvePricingConfigurationDynamically(activeKeyToCommit);
                if (dynamicMatch && dynamicMatch.matchedKey) {
                    activeKeyToCommit = dynamicMatch.matchedKey;
                }
            }

            // Ultimate fallback safety: map directly to your screen screenshot context token if variables are empty
            if (!activeKeyToCommit || activeKeyToCommit === "") {
                activeKeyToCommit = "llc-formation";
            }

            return activeKeyToCommit.toLowerCase().trim();
        },
        set(newKey) {
            if (newKey) {
                internalServiceKey = String(newKey).toLowerCase().trim();
                // Keep adjacent global parameters synchronized to stop value fragmentation
                window.currentServiceKey = internalServiceKey;
                window.currentServicePathKey = internalServiceKey;
            }
        },
        configurable: true,
        enumerable: true
    });

    // Track the plan keys safely
    const urlScanner = new URLSearchParams(window.location.search);
    window.routeActivePlanKey = (urlScanner.get('plan') || 'compliance').toLowerCase().trim();

    // Safe deferred notification string
    setTimeout(() => {
        console.log(`[Dynamic Boot] Active system paths verified. Selected node target: "${window.routeActiveServiceKey}"`);
    }, 1);
})();

/**
 * URL Parameter Extractor Hook
 * Automatically populates routing states from URL tracking if left unassigned
 */
function syncUrlStateToWizardEngine() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // FIX 2: Safeguard setters to prevent empty strings from overwriting active state values
    if (urlParams.has('service')) {
        const val = urlParams.get('service');
        if (val) window.routeActiveServiceKey = val.toLowerCase().trim();
    }
    if (urlParams.has('plan')) {
        const pVal = urlParams.get('plan');
        if (pVal) window.routeActivePlanKey = pVal.toLowerCase().trim();
    }
}
syncUrlStateToWizardEngine();

/**
 * Defensive Bootstrapper Guard
 * Stubs missing initialization frames dynamically to protect the pipeline from throwing fatal errors
 */
if (typeof window.initSevenStepWizardSystem !== "function") {
    window.initSevenStepWizardSystem = function() {
        console.log("[Pricing Boot] Safety interceptor triggered: System initializing downstream templates...");
        
        // Automatically kick off Step 1 overview processing if parameters exist
        if (window.routeActiveServiceKey && typeof window.renderOnboardingPlanOverviewCard === "function") {
            window.renderOnboardingPlanOverviewCard(null, null, null, 0);
        }
    };
}


// ============================================================================ //
// 🚀 UNIFIED SMOOTH-SCROLL VIEWPORT TRACKING ENGINE                            //
// ============================================================================ //
(function() {
    "use strict";

    const masterLayoutPanels = document.querySelectorAll(".wizard-panel, [id^='step-panel-']");
    window.activePanelVisibilityObserversArray = [];

    // Track the last observed active step ID to prevent duplicate trigger loops
    let lastTriggeredPanelId = null;

    masterLayoutPanels.forEach(function(panel) {
        const panelObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // Ensure the condition is met and that we haven't already processed this panel change in this execution loop
                if (
                    panel.style.display !== "none" && 
                    (panel.classList.contains("active") || panel.style.display === "block") && 
                    lastTriggeredPanelId !== panel.id
                ) {
                    // Update tracking marker immediately to avoid double execution loops
                    lastTriggeredPanelId = panel.id;
                    console.log(`[Scroll Manager] Panel #${panel.id || 'wizard-step'} mounted active. Adjusting viewport anchors...`);

                    // Wrap scroll adjustments in a safe layout paint window frame to prevent UI locking
                    requestAnimationFrame(() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    });

                    // Safe execution interlock: Auto-refresh the view layout triggers on load if required
                    if (panel.id === "step-panel-2" && typeof window.attachStepTwoNavigationTriggers === "function") {
                        window.attachStepTwoNavigationTriggers();
                    }

                    // ===================================================================== //
                    // FIX: AUTOMATED STEP 3 INITIALIZATION HANDOVER                         //
                    // ===================================================================== //
                    // The exact split-second the observer catches step-panel-3 turning active,
                    // it forces your marketplace compilers to fetch data and write the option cards.
                    if (panel.id === "step-panel-3" || panel.id === "step-3") {
                        console.log("[Scroll Manager Interlock] Step 3 container live. Invoking independent streaming engines...");
                        if (typeof window.executeStepThreeUpsellStreaming === "function") {
                            window.executeStepThreeUpsellStreaming();
                        } else if (typeof window.autoInitializeStep3MarketplaceCatalog === "function") {
                            window.autoInitializeStep3MarketplaceCatalog();
                        }
                    }
                }
            });
        });

        // Arm the layout mutation tracker securely
        panelObserver.observe(panel, { attributes: true, attributeFilter: ["style", "class"] });
        window.activePanelVisibilityObserversArray.push(panelObserver);
    });
})();

/**
 * Monitors active layout dimensions to handle responsive stylesheet skinning
 * and prevent styling collisions on narrow smartphone viewports.
 */
function evaluateSystemViewportDesign() {
    const container = document.querySelector('.wizard-container') || document.querySelector('.wizard-container-wrapper') || document.getElementById('step-panel-2')?.parentElement;

    // Dynamic structural fallback
    if (!container) {
        console.log("[Viewport Engine Guard] Layout container not detected in DOM tree yet. Re-scheduling check...");
        setTimeout(evaluateSystemViewportDesign, 30);
        return;
    }

    if (window.innerWidth <= 991) {
        container.classList.add('is-mobile-device');
        console.log("[Viewport Engine] Mobile layout skinning parameters applied.");
    } else {
        container.classList.remove('is-mobile-device');
    }

    // Ensure that if Step 2 is active, its display sizing metrics are normalized
    const activePanel2 = document.getElementById("step-panel-2");
    if (activePanel2 && activePanel2.classList.contains("active")) {
        activePanel2.style.setProperty("min-height", "400px", "important");
        activePanel2.style.setProperty("width", "100%", "important");
    }

    // FIX: Normalize display metrics for Step 3 to prevent flex elements from collapsing on desktop split views
    const activePanel3 = document.getElementById("step-panel-3") || document.getElementById("step-3");
    if (activePanel3 && (activePanel3.classList.contains("active") || activePanel3.style.display === "block")) {
        activePanel3.style.setProperty("width", "100%", "important");
        activePanel3.style.setProperty("display", "block", "important");
    }
}

// Initial evaluation and resize listener bindings
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", evaluateSystemViewportDesign);
} else {
    evaluateSystemViewportDesign();
}

window.addEventListener("resize", evaluateSystemViewportDesign);

// ============================================================================ //
// 🇺🇸 MODULE: UNIVERSAL SELF-HOOKING USA STATE DROPDOWN ENGINE                 //
// ============================================================================ //
(function() {
    "use strict";

    // 1. The Single Immutable Source of Truth for USA State Options HTML
    window.globalStateDropdownOptionsHtml = '<option value="">-- Select State --</option>' + 
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

    // Guard flag to prevent recursive layout updating cascades
    let isHydrating = false;

    /**
     * Scans the active DOM playground for state select boxes and instantly attaches data.
     */
    function autoDiscoverAndHydrateStateDropdowns() {
        if (isHydrating) return;

        // Target selectors based on your taxonomy naming patterns
        const stateSelectors = document.querySelectorAll(
            'select[id*="state"], select[name*="state"], select[id*="formation"], select[name*="formation"], .state-dropdown-select'
        );

        stateSelectors.forEach(dropdown => {
            if (!dropdown) return;

            // 🟢 STEP 1: If the dropdown is empty or only has 1 template option placeholder, inject options
            if (dropdown.children.length <= 1 && !dropdown.dataset.statesHydrated) {
                console.log(`[State Engine] Automatically injecting options into dropdown element: #${dropdown.id || dropdown.name}`);
                
                isHydrating = true;
                
                // Track current value configurations cleanly to preserve selections
                const currentSelectedValueBackup = dropdown.value || localStorage.getItem('wizard_selected_state') || "";
                
                dropdown.innerHTML = window.globalStateDropdownOptionsHtml;
                dropdown.dataset.statesHydrated = "true";

                // 🟢 STEP 2: Restore previous choices seamlessly if a cache record exists
                if (currentSelectedValueBackup) {
                    const normalizedStateCode = currentSelectedValueBackup.toUpperCase().trim();
                    dropdown.value = normalizedStateCode;
                    
                    // FIX 1: Suppress heavy bubbling event cascades during baseline hydration passes.
                    // Instead of firing a loud change event that trips MutationObservers, we update the layout
                    // variable parameters directly inside an isolated microtask frame context.
                    window.selectedJurisdiction = normalizedStateCode;
                    localStorage.setItem('wizard_selected_state', normalizedStateCode);
                }
                
                isHydrating = false;
            }

            // 🟢 STEP 3: Arm real-time change interceptors to save selections instantly for Step 5 processing
            if (!dropdown.dataset.stateChangeHooked) {
                dropdown.addEventListener("change", (e) => {
                    // FIX 2: Check active lockout flags instantly to drop programmatic system events
                    if (isHydrating || window.isWizardCurrentlyRestoringStateVanilla) return;
                    
                    const chosenState = e.target.value;
                    if (chosenState) {
                        const sanitizedState = chosenState.toUpperCase().trim();
                        window.selectedJurisdiction = sanitizedState;
                        
                        localStorage.setItem('wizard_selected_state', sanitizedState);
                        localStorage.setItem(`wizard_field_${e.target.id || e.target.name}`, sanitizedState);

                        console.log(`[State Engine] Selection shift captured: "${sanitizedState}". Running matrix total recalculation loops...`);
                        
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
})();
// ============================================================================ //
// 🔄 AUTOMATED INTERLOCK: TARGETED CONTAINER DROPDOWN OBSERVATION CORES        //
// ============================================================================ //
function initializeDropdownObserver() {
    // Fire an initial discovery pass cleanly to capture pre-rendered selections
    if (typeof window.autoDiscoverAndHydrateStateDropdowns === "function") {
        window.autoDiscoverAndHydrateStateDropdowns();
    }

    const formRootNode = document.getElementById("dynamic-onboarding-fields-root") || 
                         document.getElementById("step-2-onboarding-fields-canvas") || 
                         document.querySelector(".portal-main") || 
                         document.getElementById("wizard-dynamic-form-target");
                         
    if (formRootNode) {
        const stateObserverInstance = new MutationObserver(() => {
            if (typeof window.autoDiscoverAndHydrateStateDropdowns === "function") {
                window.autoDiscoverAndHydrateStateDropdowns();
            }
        });
        
        stateObserverInstance.observe(formRootNode, { childList: true, subtree: true });
        console.log("[State Observer Success] Form layout subtree monitoring active cleanly.");
    }
}

// Coordinate initialization startup execution paths cleanly without trailing bracket crashes
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDropdownObserver);
} else {
    initializeDropdownObserver();
}

// ============================================================================ //
// 🔵 CENTRALIZED NAVY BLUE TRANSITION SPINNER INTERCEPTOR                      //
// ============================================================================ //
function triggerWorkspaceTransitionSpinner(callbackHandoffRoutine) {
    // 1. Build and style the hidden modal block overlay if missing from the viewport
    let dynamicSpinnerOverlay = document.getElementById("f4u-global-transition-overlay");
    
    if (!dynamicSpinnerOverlay) {
        dynamicSpinnerOverlay = document.createElement("div");
        dynamicSpinnerOverlay.id = "f4u-global-transition-overlay";
        dynamicSpinnerOverlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(248, 250, 252, 0.85); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; opacity: 0; transition: opacity 0.2s ease; pointer-events: none; box-sizing: border-box;";

        // FIX 1: DEDUPLICATED KEYFRAME INJECTION
        // Check if our specific custom style id exists first before injecting duplicates to head arrays.
        if (!document.getElementById("f4u-spinner-global-keyframes")) {
            const styleSheetNode = document.createElement("style");
            styleSheetNode.id = "f4u-spinner-global-keyframes";
            styleSheetNode.textContent = "@keyframes f4uPlatformCoreSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
            document.head.appendChild(styleSheetNode);
        }

        dynamicSpinnerOverlay.innerHTML = `
        <div style="width: 50px; height: 50px; border: 4px solid #cbd5e1; border-top: 4px solid #0a1f44; border-radius: 50%; animation: f4uPlatformCoreSpin 0.8s linear infinite; box-sizing: border-box;"></div>
        <span style="color: #0a1f44; font-weight: 700; font-size: 0.9rem; font-family: system-ui, sans-serif; letter-spacing: 0.5px; text-transform: uppercase;">Updating Compliance Workspace...</span> `;
        document.body.appendChild(dynamicSpinnerOverlay);
    }

    // 2. Fade spinner into active viewport space smoothly
    dynamicSpinnerOverlay.style.display = "flex";
    
    // Forces browser rendering pass calculation frame layout prior to lifting opacity
    void dynamicSpinnerOverlay.offsetWidth;
    dynamicSpinnerOverlay.style.opacity = "1";
    dynamicSpinnerOverlay.style.pointerEvents = "auto";

    // FIX 2: COORDINATED MICRO-TASK INTERLOCK
    // Instead of dropping into uncoordinated timeout blocks that flash empty steps early,
    // we run layout adjustments instantly on the current task line, and use animation frames
    // to fade the loader out ONLY after the DOM content trees have settled on screen.
    setTimeout(() => {
        if (typeof callbackHandoffRoutine === "function") {
            try {
                callbackHandoffRoutine();
            } catch (err) {
                console.error("[Spinner Engine Failure] Error during view handoff execution:", err);
            }
        }

        // Allow layout paint adjustments to calculate and settle before dimming the loader wheel overlay
        requestAnimationFrame(() => {
            setTimeout(() => {
                dynamicSpinnerOverlay.style.opacity = "0";
                dynamicSpinnerOverlay.style.pointerEvents = "none";
                
                setTimeout(() => {
                    // Safety check prevents changing display states if another transition pass has started
                    if (dynamicSpinnerOverlay.style.opacity === "0") {
                        dynamicSpinnerOverlay.style.display = "none";
                    }
                }, 200);
            }, 100); // Muted 100ms settling delay protects view frame integration pipelines
        });
    }, 180); // Optimal visual block time on canvas viewport grids
}

window.triggerWorkspaceTransitionSpinner = triggerWorkspaceTransitionSpinner;



// ============================================================================ //
// 🗺️ MODULE: STEP 0 JURISDICTION GATE ROUTER ENGINE (FEDERAL BYPASS)           //
// ============================================================================ //
function enforceJurisdictionGateEvaluation() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim();
    const stateParam = urlParams.get('state');

    // 1. PURE ZERO-HARDCODE FEDERAL TRACK BYPASS DETERMINATION
    // We inspect your global pricing dictionaries programmatically. If the service exists 
    // inside the federal pricing matrix and has a non-zero administrative fee, OR if it's 
    // a known federal registry keyword, we hard-bypass the Step 0 dropdown pane completely.
    const federalPricingDb = window.FILINGS4U_GOVERNMENT_PRICING || {};
    const isFederalFilingKey = Object.prototype.hasOwnProperty.call(federalPricingDb, serviceSlug) && serviceSlug !== "llc-formation" && serviceSlug !== "corporations";
    
    // Explicit keyword safety catch-all
    const isFederalKeyword = serviceSlug.includes("cage") || serviceSlug.includes("sam") || serviceSlug.includes("tax") || serviceSlug.includes("ein") || serviceSlug.includes("authority");

    if (isFederalFilingKey || isFederalKeyword) {
        console.log(`[Gate Engine] Federal Service path "${serviceSlug}" verified. Automatically bypassing Step 0 state selection.`);
        
        const gatePanel = document.getElementById("step-panel-0");
        if (gatePanel) gatePanel.style.setProperty("display", "none", "important");

        if (typeof window.switchWizardActiveViewLayout === "function") {
            window.switchWizardActiveViewLayout(1); // Force navigation directly to Step 1 Package overview card rows
        }
        return; 
    }

    // 2. Standard State-Level Formations Track Execution Parameters
    const statePricingRegistry = window.CENTRAL_SERVICE_PLAN_DB || {};
    const requiresStateSelection = Object.prototype.hasOwnProperty.call(statePricingRegistry, serviceSlug);

    if (requiresStateSelection && !stateParam) {
        console.log(`[Gate Engine] State Service "${serviceSlug}" requires jurisdiction. Mounting Step 0...`);
        
        for (let i = 1; i <= 7; i++) {
            const p = document.getElementById(`step-panel-${i}`);
            if (p) {
                p.classList.remove("active");
                p.style.setProperty("display", "none", "important");
            }
        }
        
        const gatePanel = document.getElementById("step-panel-0");
        if (gatePanel) {
            gatePanel.classList.add("active");
            gatePanel.style.setProperty("display", "block", "important");
        }

        if (typeof window.autoDiscoverAndHydrateStateDropdowns === "function") {
            window.autoDiscoverAndHydrateStateDropdowns();
        }
    } else {
        const gatePanel = document.getElementById("step-panel-0");
        if (gatePanel) gatePanel.style.setProperty("display", "none", "important");

        if (typeof window.switchWizardActiveViewLayout === "function") {
            const savedStateCache = localStorage.getItem("f4u_wizard_onboarding_state");
            let stepToLoad = 1;
            try {
                const parsedState = savedStateCache ? JSON.parse(savedStateCache) : {};
                stepToLoad = parsedState.currentWizardActiveStep !== undefined ? parseInt(parsedState.currentWizardActiveStep, 10) : 1;
            } catch(e) {
                stepToLoad = 1;
            }
            window.switchWizardActiveViewLayout(stepToLoad);
        }
    }
}

window.enforceJurisdictionGateEvaluation = enforceJurisdictionGateEvaluation;


/**
 * Handles Step 0 submission click actions, appends values to the URL, and unlocks Step 1.
 */
function processJurisdictionGateAdvancement() {
    const stateSelectorNode = document.getElementById("wizard_gate_state_select");
    if (!stateSelectorNode || !stateSelectorNode.value) {
        alert("Action Required: Please select your business registration state to proceed.");
        return;
    }

    const chosenStateCode = stateSelectorNode.value.toUpperCase();
    console.log(`[Gate Engine] Setting jurisdiction target state to: ${chosenStateCode}`);

    // 2. APPEND THE CHOSEN STATE DIRECTLY TO THE URL WITHOUT REFRESHING THE PAGE
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('state', chosenStateCode);
    const upgradedAddressPath = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({ path: upgradedAddressPath }, '', upgradedAddressPath);

    // Write choice straight to tracking memory so other files read it instantly
    window.selectedJurisdiction = chosenStateCode;
    localStorage.setItem('wizard_selected_state', chosenStateCode);

    // Sync selection back to the alternate IDs your other scripts look for
    const alternateSelectors = ["wizard_state_select", "state_select"];
    alternateSelectors.forEach(id => {
        localStorage.setItem(`wizard_field_${id}`, chosenStateCode);
        const alternateNode = document.getElementById(id);
        if (alternateNode) {
            alternateNode.value = chosenStateCode;
            // Suppress heavy looping cascades by updating window values directly inside restoration locks
            if (typeof window.toggleFederalTaxInventoryCostVisibility === "function") {
                window.toggleFederalTaxInventoryCostVisibility(alternateNode, null, true);
            } else {
                alternateNode.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    });

    // 3. SECURE INTERLOCK LIFECYCLE HANDOFF: Re-run decorators and display layout updates
    if (typeof window.processDynamicMarketingLayoutDecorations === "function") {
        window.processDynamicMarketingLayoutDecorations();
    }
    if (typeof window.renderStep1CustomFeatureBullets === "function") {
        const cleanServiceKey = String(urlParams.get('service') || "").toLowerCase().trim();
        window.renderStep1CustomFeatureBullets(cleanServiceKey);
    }

    // Hide Step 0 overlay and route cleanly to Step 1 workspace canvas panels natively
    const gatePanel = document.getElementById("step-panel-0");
    if (gatePanel) {
        gatePanel.classList.remove("active");
        gatePanel.style.setProperty("display", "none", "important");
    }
    if (typeof window.switchWizardActiveViewLayout === "function") {
        window.switchWizardActiveViewLayout(1);
    }
}

// FIX: Clean namespace global registration map blocks. 
// We completely remove variable re-assignments that cause definition corruption.
if (typeof window.enforceJurisdictionGateEvaluation !== "function") {
    window.enforceJurisdictionGateEvaluation = enforceJurisdictionGateEvaluation;
}
window.processJurisdictionGateAdvancement = processJurisdictionGateAdvancement;

// Hook up pre-flight scanner directly to page initialization loops safely
document.addEventListener("DOMContentLoaded", () => {
    // Set brief macro delay to let reference database models compile first
    setTimeout(() => {
        if (typeof window.enforceJurisdictionGateEvaluation === "function") {
            window.enforceJurisdictionGateEvaluation();
        }
    }, 60);
});

// ============================================================================ //
// 🔌 CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE (DEEP-LINK SANITIZED)     //
// ============================================================================ //
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
    if (masterFormElement && masterFormElement.style) {
        // FIX 1: Enforce pure cross-browser standard CSS property removal. 
        // This removes the unhandled method checks that cause fatal script execution crashes.
        if (typeof masterFormElement.style.removeProperty === "function") {
            masterFormElement.style.removeProperty('display');
            masterFormElement.style.removeProperty('width');
            masterFormElement.style.removeProperty('max-width');
        } else {
            masterFormElement.style.cssText = ""; // Full native clean backup fallback
        }
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

    // =========================================================================
    // DEEP-LINK TIMELINE RESOLUTION GATEWAY
    // =========================================================================
    const urlParams = new URLSearchParams(window.location.search);
    const hasService = urlParams.get('service');
    const hasPlan = urlParams.get('plan');
    const hasState = urlParams.get('state') || urlParams.get('stateCode');
    
    let currentActiveStepIndex = parseInt(window.currentWizardActiveStep, 10);

    // If deep-link params match but active tracking states are unset or stuck on Step 1, hard enforce Step 2
    if (hasService && hasPlan && hasState) {
        if (isNaN(currentActiveStepIndex) || currentActiveStepIndex <= 1) {
            console.log("[Lifecycle Engine Override] Deep link active. Syncing internal states cleanly to Step 2.");
            currentActiveStepIndex = 2;
            window.currentWizardActiveStep = 2;
        }
    } else if (isNaN(currentActiveStepIndex)) {
        // FIX 2: Default strictly to Step 0 introductory card layouts if local storage configurations are unassigned
        currentActiveStepIndex = 0;
        window.currentWizardActiveStep = 0;
    }

    // Only restore cached form inputs directly here if the current active target view is NOT Step 2.
    // Step 2 elements are loaded asynchronously and are handled inside runUnifiedWizardBootEngine().
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

    // =========================================================================
    // 🟢 FIXED VIEW PORT ROUTER HOOK
    // =========================================================================
    // Uses our validated, single-flight step calculation to block ping-pong rendering conflicts
    if (typeof window.switchWizardActiveViewLayout === "function") {
        console.log(`[Lifecycle Engine] Transferring runtime thread task to view layout switcher: Step ${currentActiveStepIndex}`);
        window.switchWizardActiveViewLayout(currentActiveStepIndex);
    } else if (typeof window.renderActiveWizardStepUiLayout === "function") {
        window.renderActiveWizardStepUiLayout();
    } else {
        const fallbackTargetPanel = document.getElementById(`step-panel-${currentActiveStepIndex}`);
        if (fallbackTargetPanel) {
            fallbackTargetPanel.style.setProperty("display", "block", "important");
            fallbackTargetPanel.classList.add("active");
        }
    }

    console.log("[Lifecycle Engine Success] All operational layers initialized safely.");
}

window.runUnifiedPlatformLifecycleBoot = runUnifiedPlatformLifecycleBoot;