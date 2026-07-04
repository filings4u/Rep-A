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
  let stateDropdown = document.getElementById("wizard_gate_state_select") || 
                      document.getElementById("wizard_state_select") || 
                      document.getElementById("state_select"); 
                      
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
      internalCatalogReference = newDatabasePayload; 
      
      // The millisecond the database is set, dynamically regenerate your array keys 
      if (newDatabasePayload && typeof newDatabasePayload === 'object') { 
        window.auxiliaryAddonsArray = Object.keys(newDatabasePayload); 
      } else { 
        window.auxiliaryAddonsArray = []; 
      } 
      
      // FIX: Verify the DOM target wrapper element actually exists before firing render to prevent crashing step-3.js
      if (typeof window.renderTargetUpsellsListPanel === "function") {
        const marketplaceTarget = document.getElementById('marketplace-upsells-target') || 
                                  document.querySelector('.marketplace-panel-wrapper');
                                  
        if (marketplaceTarget) {
          window.renderTargetUpsellsListPanel(); 
        } else {
          console.log("[Data Matrix Delay] Postponing marketplace redraw: step target placeholder not mounted yet.");
        }
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
window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1; 
window.totalWizardExpectedSteps = 7; 
window.totalWizardSteps = 7; 

// ============================================================================ // 
// 🔌 ACTIVE ADD-ON SERVICE STATE FLAGS (ZERO-HARDCODE AUTOMATED ITERATOR)    // 
// ============================================================================ // 
(function initializeDynamicStateFlags() { 
  "use strict"; 

  // Helper to bind reactive property tracks to window keys dynamically
  function createReactiveFlag(flagKey) {
    let internalStateValue = false;
    
    Object.defineProperty(window, flagKey, {
      get() {
        // Read directly from cached field inputs or localized storage matrices
        const storageVal = localStorage.getItem(`wizard_field_${flagKey}`);
        if (storageVal !== null) {
          return storageVal === "true" || storageVal === "yes";
        }
        return internalStateValue;
      },
      set(newBooleanState) {
        const normalizedState = newBooleanState === true || newBooleanState === "yes" || String(newBooleanState) === "true";
        internalStateValue = normalizedState;
        localStorage.setItem(`wizard_field_${flagKey}`, normalizedState ? "true" : "false");
        
        // Auto-trigger your calculator loop safely if it's currently loaded in the execution scope
        if (typeof window.executeDynamicAddonCompilation === "function") {
          window.executeDynamicAddonCompilation();
        }
      },
      configurable: true,
      enumerable: true
    });
  }

  // Automatically loop over your global tracking property map keys securely
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
// 🗃️ MASTER STATE PROPERTY MAPPING & LEGACY REFERENCE DICTIONARIES             //
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
window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP = { 
    "assemble-dqf": "customSelectedAssembleDqfActive", 
    "drug-consortium": "customSelectedDrugConsortiumActive", 
    "hos-review": "customSelectedHosReviewActive", 
    "maintenance-ledger": "customSelectedMaintenanceLedgerActive", 
    "expert-consultation": "customSelectedExpertConsultationActive", 
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
// 🗃️ USA STATES DICTIONARY CONFIGURATION ARRAY MATRIX                          //
// ============================================================================ //
window.USA_STATES_DICTIONARY = [
    { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, 
    { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" }, 
    { code: "CA", name: "California" }, { code: "CO", name: "Colorado" }, 
    { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, 
    { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" }, 
    { code: "HI", name: "Hawaii" }, { code: "ID", name: "Idaho" }, 
    { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" }, 
    { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" }, 
    { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" }, 
    { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" }, 
    { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" }, 
    { code: "MN", name: "Minnesota" }, { code: "MS", name: "Mississippi" }, 
    { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" }, 
    { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" }, 
    { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" }, 
    { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" }, 
    { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" }, 
    { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" }, 
    { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" }, 
    { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" }, 
    { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" }, 
    { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" }, 
    { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" }, 
    { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" }, 
    { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" }
];

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

  var activePanel = document.getElementById("step-panel-" + activeStep); 
  if (!activePanel) return true; 

  var inputs = activePanel.querySelectorAll("input, select, textarea"); 
  var stepIsValid = true; 
  var firstInvalidElement = null; 

  // Upgraded: Supports global characters, accents, spaces, periods, and hyphens universally 
  var regexLetters = /^[\p{L}\s.'\-]+$/u; 
  var regexNumbers = /^\d+$/; 
  var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

  inputs.forEach(function(el) { 
    if (el.type === "hidden" || el.disabled) return; 

    // FIX: Skip element if it is nested inside a hidden step placeholder 
    // or if its display properties/dimensions are currently collapsed/invisible.
    const isHiddenContainer = el.closest('[style*="display: none"]') || el.closest('.wizard-panel:not(.active)');
    const bounds = el.getBoundingClientRect();
    if (isHiddenContainer || (bounds.width === 0 && bounds.height === 0)) {
      return;
    }

    // FIX: If we are validating Step 1, ignore inputs sitting inside future step placeholders
    if (parseInt(activeStep, 10) === 1) {
      if (el.closest('#step-2-injection-placeholder') || el.closest('#step-3-injection-placeholder')) {
        return;
      }
    }

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
    try {
      firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
      firstInvalidElement.reportValidity(); 
    } catch (err) {
      console.warn("[Validator Engine] Prevented crash during validation feedback tracking:", err);
    }
  } 

  return stepIsValid; 
} 

// Expose verification layers back to global tracking objects securely 
window.validateStepInputParametersVanilla = validateStepInputParametersVanilla;


// ============================================================================ // 
// 🛠️ UNIVERSAL STEP VALIDATION DISPATCHER (100% PURE DYNAMIC ENGINE)         // 
// ============================================================================ // 
/** 
 * Global dynamic form dispatcher checking tool. 
 * Identifies the on-screen active step framework form state and triggers its matching validation sequence. 
 * Pure Dynamic Architecture: Supports 44+ services automatically with zero hardcoding. 
 * @returns {boolean} Validation status report. 
 */ 
function runMasterActiveStepFormValidation() { 
  // FIX: Identify what step the wizard is currently evaluating
  const currentStep = window.currentWizardActiveStep || 1;
  console.log(`[Validation Dispatch] Intercepting form status check for step: ${currentStep}`);

  // FIX: Force evaluate basic required markup fields on the current step container FIRST
  if (typeof window.validateStepInputParametersVanilla === "function") {
    const isBaseStepValid = window.validateStepInputParametersVanilla(currentStep);
    if (!isBaseStepValid) {
      console.warn(`[Validation Dispatch Block] Step ${currentStep} failed primary field constraint validation.`);
      return false; // Stop navigation if regular visible inputs are broken/empty
    }
  }

  const currentServiceKey = window.routeActiveServiceKey || ""; 
  const cleanKey = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-"); 
  
  if (!cleanKey) return true; 

  // 1. CONVERT SYSTEM SERVICE KEY TO DYNAMIC LOOKUP WORDS 
  const primaryKeyWords = cleanKey.split('-'); 

  // 2. REFLEXIVE WINDOW SCOPE MEMORY SCAN 
  const globalContextKeys = Object.keys(window); 
  const targetValidationMethodKey = globalContextKeys.find(key => { 
    const kLower = key.toLowerCase(); 
    // Ensure it is a function, starts with "validate", and contains at least one 
    // distinctive token of the active service name (e.g. "sales", "payroll", "hazmat") 
    const isValidationFunction = typeof window[key] === "function" && kLower.startsWith("validate"); 
    
    // Fuzzy Matching Condition: Check if the function name includes any of our core path words
    // Exclude the vanilla step validator from matching itself here
    const isNotVanillaEngine = key !== "validateStepInputParametersVanilla";
    const matchesServiceKeyword = primaryKeyWords.some(word => word.length > 2 && kLower.includes(word)); 
    
    return isValidationFunction && matchesServiceKeyword && isNotVanillaEngine; 
  }); 

  // 3. DYNAMIC AUTOMATED DISPATCH EXECUTION FOR ADVANCED SERVICE LOGIC
  if (targetValidationMethodKey) { 
    console.log(`[Validation Dispatch Success] Auto-discovered supplementary validation logic: window.${targetValidationMethodKey}()`); 
    return window[targetValidationMethodKey](currentStep); 
  } 

  // ============================================================================ // 
  // 4. ZERO-HARDCODE STANDALONE FALLBACK SEGMENTATION INTERFACES 
  // ============================================================================ // 
  if (typeof window.validateAlgorithmicFallbackFields === "function") { 
    console.log("[Validation Dispatch] Custom function file validator missing, defaulting to automated fallback loop."); 
    return window.validateAlgorithmicFallbackFields(currentStep); 
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
    // FIX: Look up the panel matching the exact numerical step before relying on class strings
    const currentStepNum = window.currentWizardActiveStep || 1;
    
    const currentActivePanel = document.getElementById(`step-panel-${currentStepNum}`) || 
                               document.querySelector(".wizard-panel.active") || 
                               document.querySelector(".wizard-panel:not([style*='display: none'])"); 
                               
    // CRITICAL FIX: If no valid view card is active, abort immediately instead of scanning document.body 
    if (!currentActivePanel) {
      console.warn("[State Engine Abort] Canceled scraping pass: Active step panel context could not be determined safely.");
      return;
    }

    console.log(`[State Engine] Actively serializing elements for Step Panel ID: "${currentActivePanel.id || 'Dynamic Slot'}"`);

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
    checkboxItem => { 
      const boxIdentifier = boxItem.id || boxItem.name; 
      if (boxIdentifier) { 
        // 🟢 UNIFIED STORAGE RESOLUTION: 
        // Save exactly as wizard_field_ to stay perfectly aligned with your Step 5 template loop! 
        localStorage.setItem(`wizard_field_${boxIdentifier}`, boxItem.checked ? "true" : "false"); 
      } 
    }; 

    console.log("[State Engine Success] Active layout fields successfully serialized."); 
  } catch (scrapingException) { 
    console.warn("[State Engine Error] Failed to safely cache form elements:", scrapingException); 
  } 
};


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

  // FIX: Route validation directly through your master dispatcher instead of splitting the validation layers
  if (typeof window.runMasterActiveStepFormValidation === "function") { 
    const isCurrentViewValid = window.runMasterActiveStepFormValidation(); 
    if (!isCurrentViewValid) { 
      console.warn(`[Navigation Gate] Validation failed for Step ${window.currentWizardActiveStep} via Master Dispatcher. Halt pipeline.`); 
      return false; 
    } 
  } else if (typeof window.validateStepInputParametersVanilla === "function") { 
    // Secure basic input fallback verification if master routing framework script is uninstantiated
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
    // Synchronously update step tracker to prevent race conditions
    window.currentWizardActiveStep = activeStepTarget;
    const storedStateString = localStorage.getItem("f4u_wizard_onboarding_state") || "{}";
    try {
        const parsedState = JSON.parse(storedStateString);
        parsedState.currentWizardActiveStep = activeStepTarget;
        localStorage.setItem("f4u_wizard_onboarding_state", JSON.stringify(parsedState));
    } catch (e) {}

    // Fallback if transition spinner doesn't exist
    const transitionRunner = typeof window.triggerWorkspaceTransitionSpinner === "function" 
        ? window.triggerWorkspaceTransitionSpinner 
        : function(callback) { callback(); };

    transitionRunner(() => {
        // Toggle Step Panel Displays
        for (let i = 1; i <= 7; i++) {
            const panelNode = document.getElementById(`step-panel-${i}`);
            if (panelNode) {
                if (i === activeStepTarget) {
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

// =====================================================================
// STEP 2 DYNAMIC INJECTION CORRECTION (CRASH-PROOF WRAPPER)
// =====================================================================
if (parseInt(activeStepTarget, 10) === 2) {
    const targetUrlParams = new URLSearchParams(window.location.search);
    const activeServiceKey = window.routeActiveServiceKey || String(targetUrlParams.get('service') || "").toLowerCase().trim();
    
    console.log(`[View Switcher Engine] Locating structural target canvas: "#step-2-injection-placeholder"`);
    
    // 1. Force the placeholder container to be visible immediately
    const innerPlaceholderCanvas = document.getElementById("step-2-injection-placeholder");
    if (innerPlaceholderCanvas) {
        innerPlaceholderCanvas.style.removeProperty("display");
        innerPlaceholderCanvas.style.setProperty("display", "block", "important");
        innerPlaceholderCanvas.style.setProperty("opacity", "1", "important");
        innerPlaceholderCanvas.style.setProperty("visibility", "visible", "important");
        console.log("[View Switcher Engine] Target placeholder un-collapsed successfully.");
    } else {
        console.warn("[View Switcher Engine] Warning: #step-2-injection-placeholder was not found in the DOM.");
    }

    // 2. Safely execute Step 2 without letting its bugs crash the entire screen transition
    if (typeof window.executeStepTwoDynamicFormInjection === "function") {
        // Create a fake event object to prevent 'Cannot read properties of null' errors
        const safeMockEvent = {
            preventDefault: function() { return true; },
            stopPropagation: function() { return true; },
            target: innerPlaceholderCanvas || document.body
        };

        try {
            window.executeStepTwoDynamicFormInjection(safeMockEvent, activeServiceKey);
            console.log("[View Switcher Engine] Step 2 injection executed.");
        } catch (stepTwoError) {
            console.error("[CRITICAL FAILURE INSIDE STEP 2 SCRIPT]:", stepTwoError);
            
            // Fallback UI so the user doesn't see a completely blank screen if it crashes hard
            if (innerPlaceholderCanvas && innerPlaceholderCanvas.innerHTML === "") {
                innerPlaceholderCanvas.innerHTML = `
                    <div style="padding: 20px; border: 2px dashed #ef4444; background: #fef2f2; color: #b91c1c; border-radius: 8px;">
                        <strong>Step 2 Failed to Load fully.</strong><br>
                        <small>${stepTwoError.message}</small>
                    </div>`;
            }
        }
    } else {
        console.error("[View Switcher Engine] Fatal: window.executeStepTwoDynamicFormInjection is not a function.");
    }
}


        // =====================================================================
        // FIX: PREVENT BOOT ENGINE RESET COOLDOWN
        // =====================================================================
        // Only run the master boot engine if we are entering or resetting back to Step 1.
        // Running it on Step 2+ causes state loss and visual layout reversion loops.
        if (parseInt(activeStepTarget, 10) === 1 && typeof window.runUnifiedWizardBootEngine === "function") {
            window.runUnifiedWizardBootEngine();
        } else {
            // Safe, non-destructive UI updates for mid-wizard steps
            if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
            if (typeof window.updateApplicationMapTimelineBubbles === "function") window.updateApplicationMapTimelineBubbles(activeStepTarget);
            if (typeof window.autoSkinSelectedUpsellCards === "function") window.autoSkinSelectedUpsellCards();
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
      const rawUrlService = urlScanner.get('service'); 
      
      let fallbackInitialKey = Object.keys(window.CENTRAL_SERVICE_PLAN_DB)[0] || ""; 
      let activeKeyToCommit = rawUrlService ? rawUrlService : fallbackInitialKey; 

      if (typeof window.resolvePricingConfigurationDynamically === "function" && activeKeyToCommit) { 
        const dynamicMatch = window.resolvePricingConfigurationDynamically(activeKeyToCommit); 
        if (dynamicMatch && dynamicMatch.matchedKey) { 
          activeKeyToCommit = dynamicMatch.matchedKey; 
        } 
      } 
      
      return activeKeyToCommit ? activeKeyToCommit.toLowerCase().trim() : "";
    },
    set(newKey) {
      if (newKey) {
        internalServiceKey = String(newKey).toLowerCase().trim();
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
  if (!window.routeActiveServiceKey && urlParams.has('service')) { 
    window.routeActiveServiceKey = urlParams.get('service').toLowerCase().trim(); 
  } 
  if (!window.routeActivePlanKey && urlParams.has('plan')) { 
    window.routeActivePlanKey = urlParams.get('plan').toLowerCase().trim(); 
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
// 🗺️ PART 4: MULTI-SIDEBAR TIMELINE NAV LIGHTS ENGINE (SOLID EMERALD)           //
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
// 🚀 UNIFIED SMOOTH-SCROLL VIEWPORT TRACKING ENGINE                            // 
// ============================================================================ // 
(function() { 
  "use strict";

  const masterLayoutPanels = document.querySelectorAll(".wizard-panel"); 
  window.activePanelVisibilityObserversArray = []; 
  
  // Track the last observed active step ID to prevent duplicate trigger loops
  let lastTriggeredPanelId = null;

  masterLayoutPanels.forEach(function(panel) { 
    const panelObserver = new MutationObserver(function(mutations) { 
      mutations.forEach(function(mutation) { 
        // FIX: Ensure the condition is met and that we haven't already processed this panel change in this execution loop
        if (
          panel.style.display !== "none" && 
          panel.classList.contains("active") && 
          lastTriggeredPanelId !== panel.id
        ) { 
          // Update tracking marker immediately to avoid double execution loops
          lastTriggeredPanelId = panel.id;

          console.log(`[Scroll Manager] Panel #${panel.id || 'wizard-step'} mounted active. Adjusting viewport anchors...`); 
          
          // FIX: Wrap scroll adjustments in a safe layout paint window frame to prevent UI locking
          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); 
          });

          // Safe execution interlock: Auto-refresh the view layout triggers on load if required 
          if (panel.id === "step-panel-2" && typeof window.attachStepTwoNavigationTriggers === "function") { 
            window.attachStepTwoNavigationTriggers(); 
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
    const container = document.querySelector('.wizard-container') || 
                      document.querySelector('.wizard-container-wrapper') ||
                      document.getElementById('step-panel-2')?.parentElement; // Dynamic structural fallback

    // FIX: If the main wizard wrapper container hasn't been appended by your async script layers yet, 
    // do not terminate execution. Instead, wait for the next frame render pass.
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

    // FIX: Ensure that if Step 2 is active, its display sizing metrics are normalized 
    // to prevent flex-box containers from collapsing down to 0px height.
    const activePanel2 = document.getElementById("step-panel-2");
    if (activePanel2 && activePanel2.classList.contains("active")) {
        activePanel2.style.setProperty("min-height", "400px", "important");
        activePanel2.style.setProperty("width", "100%", "important");
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
        const currentSelectedValueBackup = dropdown.value || localStorage.getItem('wizard_selected_state') || ""; 
        
        dropdown.innerHTML = window.globalStateDropdownOptionsHtml; 
        dropdown.dataset.statesHydrated = "true"; 

        // 🟢 STEP 2: Restore previous choices seamlessly if a cache record exists 
        if (currentSelectedValueBackup) { 
          dropdown.value = currentSelectedValueBackup.toUpperCase(); 
          dropdown.dispatchEvent(new Event('change', { bubbles: true })); 
        }
        isHydrating = false;
      } 

      // 🟢 STEP 3: Arm real-time change interceptors to save selections instantly for Step 5 processing 
      if (!dropdown.dataset.stateChangeHooked) { 
        dropdown.addEventListener("change", (e) => { 
          if (isHydrating) return;
          
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

  // 🔄 AUTOMATED INTERLOCK: Attach to specific container elements to prevent global layout lag
  function initializeDropdownObserver() {
    autoDiscoverAndHydrateStateDropdowns(); 
    
    const formRootNode = document.getElementById("dynamic-onboarding-fields-root") || 
                         document.querySelector(".portal-main") || 
                         document.getElementById("wizard-dynamic-form-target"); 
                         
    if (formRootNode) { 
      const stateObserverInstance = new MutationObserver(() => { 
        autoDiscoverAndHydrateStateDropdowns(); 
      }); 
      stateObserverInstance.observe(formRootNode, { childList: true, subtree: true }); 
    } 
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDropdownObserver);
  } else {
    initializeDropdownObserver();
  }
})();



// ============================================================================ //
// 🔵 CENTRALIZED NAVY BLUE TRANSITION SPINNER INTERCEPTOR                       //
// ============================================================================ //
function triggerWorkspaceTransitionSpinner(callbackHandoffRoutine) {
    // 1. Build and style the hidden modal block overlay if missing from the viewport
    let dynamicSpinnerOverlay = document.getElementById("f4u-global-transition-overlay");
    if (!dynamicSpinnerOverlay) {
        dynamicSpinnerOverlay = document.createElement("div");
        dynamicSpinnerOverlay.id = "f4u-global-transition-overlay";
        dynamicSpinnerOverlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(248, 250, 252, 0.85); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; opacity: 0; transition: opacity 0.2s ease; pointer-events: none; box-sizing: border-box;";
        
        // Custom keyframe spin animation injection pass strings
        const styleSheetNode = document.createElement("style");
        styleSheetNode.textContent = "@keyframes f4uPlatformCoreSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
        document.head.appendChild(styleSheetNode);
        
        dynamicSpinnerOverlay.innerHTML = `
            <div style="width: 50px; height: 50px; border: 4px solid #cbd5e1; border-top: 4px solid #0a1f44; border-radius: 50%; animation: f4uPlatformCoreSpin 0.8s linear infinite; box-sizing: border-box;"></div>
            <span style="color: #0a1f44; font-weight: 700; font-size: 0.9rem; font-family: system-ui, sans-serif; letter-spacing: 0.5px; text-transform: uppercase;">Updating Compliance Workspace...</span>
        `;
        document.body.appendChild(dynamicSpinnerOverlay);
    }

    // 2. Fade spinner into active viewport space smoothly
    dynamicSpinnerOverlay.style.display = "flex";
    // Forces browser rendering pass calculation frame layout prior to lifting opacity
    void dynamicSpinnerOverlay.offsetWidth; 
    dynamicSpinnerOverlay.style.opacity = "1";
    dynamicSpinnerOverlay.style.pointerEvents = "auto";

    // 3. Process execution callbacks and mask timing layers cleanly
    setTimeout(() => {
        if (typeof callbackHandoffRoutine === "function") {
            callbackHandoffRoutine();
        }
        
        // Fade loader back out of view bounds cleanly after content maps settle
        setTimeout(() => {
            dynamicSpinnerOverlay.style.opacity = "0";
            dynamicSpinnerOverlay.style.pointerEvents = "none";
            setTimeout(() => {
                dynamicSpinnerOverlay.style.display = "none";
            }, 200);
        }, 150);
    }, 250); // Exact duration the navy loader remains locked on screen layout
}
window.triggerWorkspaceTransitionSpinner = triggerWorkspaceTransitionSpinner;



// ============================================================================ //
// 🕒 MODULE: SECURE REAL-TIME 12-HOUR CHRONOMETER & CALENDAR ENGINE           //
// ============================================================================ //
(function() {
    function updateCoreTickDisplayPass() {
        // Query targets matching your structural header text layout
        const timeDisplayNode = document.getElementById("wizard-clock-display") || 
                                document.querySelector(".chronometer-slot") || 
                                document.querySelector("span[style*='monospace']") ||
                                document.body.querySelector("div[style*='display: flex'] span:last-child");
        
        if (!timeDisplayNode) return;

        const currentSystemTimeInstance = new Date();

        // 1. EXTRACT AND FORMAT CALENDAR DATE METRICS (MM/DD/YYYY)
        const numericalMonth = String(currentSystemTimeInstance.getMonth() + 1).padStart(2, '0');
        const numericalDay = String(currentSystemTimeInstance.getDate()).padStart(2, '0');
        const numericalYear = currentSystemTimeInstance.getFullYear();
        const formattedCalendarDateString = `${numericalMonth}/${numericalDay}/${numericalYear}`;

        // 2. EXTRACT AND FORMAT 12-HOUR TIME METRICS (HH:MM:SS AM/PM)
        let rawHours = currentSystemTimeInstance.getHours();
        const minutesValue = String(currentSystemTimeInstance.getMinutes()).padStart(2, '0');
        const secondsValue = String(currentSystemTimeInstance.getSeconds()).padStart(2, '0');
        const designatorAmPmToken = (rawHours >= 12) ? "PM" : "AM";
        
        rawHours = rawHours % 12;
        rawHours = rawHours ? rawHours : 12; // Formats hour '0' to '12'
        const paddedHoursValue = String(rawHours).padStart(2, '0');

        const formattedTime12HrString = `${paddedHoursValue}:${minutesValue}:${secondsValue} ${designatorAmPmToken}`;

        // 3. SECURE DOM INJECTION PASS
        timeDisplayNode.innerHTML = `<i class="fa-regular fa-calendar-days" style="margin-right: 4px; color: var(--slate, #64748b);"></i> ${formattedCalendarDateString} &nbsp;|&nbsp; <i class="fa-regular fa-clock" style="margin-right: 4px; color: var(--slate, #64748b);"></i> ${formattedTime12HrString}`;
    }

    // Run instantly on layout paint
    if (document.readyState !== "loading") {
        updateCoreTickDisplayPass();
        setInterval(updateCoreTickDisplayPass, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            updateCoreTickDisplayPass();
            setInterval(updateCoreTickDisplayPass, 1000);
        });
    }
})();


// ============================================================================ //
// 🗺️ MODULE: STEP 0 JURISDICTION GATE ROUTER ENGINE                           //
// ============================================================================ //
function enforceJurisdictionGateEvaluation() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = String(urlParams.get('service') || "").toLowerCase().trim();
    const stateParam = urlParams.get('state');

    // 1. Check if the active service requires a regional state selection
    const statePricingRegistry = window.CENTRAL_SERVICE_PLAN_DB || {};
    const requiresStateSelection = Object.prototype.hasOwnProperty.call(statePricingRegistry, serviceSlug);

    // If it's a structural state service and the state isn't in the URL yet, mount Step 0
    if (requiresStateSelection && !stateParam) {
        console.log(`[Gate Engine] Service "${serviceSlug}" requires state context. Interrupting funnel for Step 0...`);
        
        // Hide all active panels, mount Step 0 active
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
        
        // Populate dropdown options instantly using your core dropdown engine
        if (typeof window.autoDiscoverAndHydrateStateDropdowns === "function") {
            window.autoDiscoverAndHydrateStateDropdowns();
        }
    } else {
        // If state is already present or service is a general DOT filing, bypass Step 0 entirely
        const gatePanel = document.getElementById("step-panel-0");
        if (gatePanel) gatePanel.style.setProperty("display", "none", "important");
        
        // Fall back onto standard bootstrap sequence
        if (typeof window.switchWizardActiveViewLayout === "function" && !stateParam) {
            const savedState = JSON.parse(localStorage.getItem("f4u_wizard_onboarding_state") || "{}");
            const stepToLoad = savedState.currentWizardActiveStep || 1;
            window.switchWizardActiveViewLayout(stepToLoad);
        }
    }
}
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

  // FIX: Sync selection back to the alternate IDs your other scripts look for
  const alternateSelectors = ["wizard_state_select", "state_select"];
  alternateSelectors.forEach(id => {
    localStorage.setItem(`wizard_field_${id}`, chosenStateCode);
    const alternateNode = document.getElementById(id);
    if (alternateNode) {
      alternateNode.value = chosenStateCode;
      alternateNode.dispatchEvent(new Event('change', { bubbles: true }));
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

// Verify methods exist before assigning them globally to prevent runtime collision errors
if (typeof window.enforceJurisdictionGateEvaluation === "undefined") {
  window.enforceJurisdictionGateEvaluation = function() {
    console.log("[Gate Engine] Pre-flight evaluation run completed successfully.");
  };
}

window.enforceJurisdictionGateEvaluation = window.enforceJurisdictionGateEvaluation; 
window.processJurisdictionGateAdvancement = processJurisdictionGateAdvancement; 

// Hook up pre-flight scanner directly to page initialization loops 
document.addEventListener("DOMContentLoaded", () => { 
  // Set brief macro delay to let reference database models compile first 
  setTimeout(() => {
    if (typeof window.enforceJurisdictionGateEvaluation === "function") {
      window.enforceJurisdictionGateEvaluation();
    }
  }, 60); 
});


// ============================================================================ // 
// 🔌 CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE (DEEP-LINK SANITIZED) 
// ============================================================================ // 
function runUnifiedPlatformLifecycleBoot() { 
    console.log("[Lifecycle Engine] Triggering application operational boot sequence..."); 

    // 🛡️ RUNTIME PIPELINE GUARD: Verify configuration rules before parsing 
    const isCoreDatabaseReady = typeof window.getPricingConfiguration === "function" || window.CENTRAL_SERVICE_PLAN_DB; 
    if (!isCoreDatabaseReady) { 
        console.warn("[Lifecycle Engine Guard] Core data configuration or pricing methods are not yet ready. Retrying boot sequence in 50ms..."); 
        setTimeout(function() { window.runUnifiedPlatformLifecycleBoot(); }, 50); 
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

    // =========================================================================
    // FIX: DEEP-LINK TIMELINE RESOLUTION GATEWAY
    // =========================================================================
    const urlParams = new URLSearchParams(window.location.search);
    const hasService = urlParams.get('service');
    const hasPlan = urlParams.get('plan');
    const hasState = urlParams.get('state') || urlParams.get('stateCode');

    let currentActiveStepIndex = parseInt(window.currentWizardActiveStep, 10);

    // If deep-link params match but active tracking states are unset or stuck on Step 1, hard enforce Step 2
    if (hasService && hasPlan && hasState) {
        if (!currentActiveStepIndex || currentActiveStepIndex === 1) {
            console.log("[Lifecycle Engine Override] Deep link active. Syncing internal states cleanly to Step 2.");
            currentActiveStepIndex = 2;
            window.currentWizardActiveStep = 2;
        }
    } else if (!currentActiveStepIndex) {
        currentActiveStepIndex = 1;
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

    // 🟢 FIXED VIEW PORT ROUTER HOOK: 
    // Uses our validated, single-flight step calculation to block ping-pong rendering conflicts
    if (typeof window.switchWizardActiveViewLayout === "function") { 
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
