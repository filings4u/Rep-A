/**
 * HTML Layout Injection Module
 * Programmatically assembles Step 2 card panels into the placeholder without hardcoded variables.
 */
function renderStepTwoLayoutMarkup() {
    const placeholder = document.getElementById("step-2-injection-placeholder");
    if (!placeholder) {
        console.error("[Step 2 Script Fatal] Core step-2-injection-placeholder target found missing from layout workspace.");
        return;
    }

    const liveUrlParams = new URLSearchParams(window.location.search);
    const rawStateKey = String(liveUrlParams.get('state') || "").toUpperCase().trim();
    const activeDynamicServiceSlug = String(window.currentServiceKey || window.routeActiveServiceKey || liveUrlParams.get('service') || "").toLowerCase().trim();

    // Helper to extract the official clean title from your pricing catalogs dynamically
    const resolveCatalogServiceTitle = (slug) => {
        if (window.currentSelectedServiceTitle) return window.currentSelectedServiceTitle;
        if (window.activeFilingContext && window.activeFilingContext.serviceTitle) return window.activeFilingContext.serviceTitle;

        if (window.STATE_PRICING_CATALOG && window.STATE_PRICING_CATALOG[slug]?.name) {
            return window.STATE_PRICING_CATALOG[slug].name;
        }
        if (window.GOVERNMENT_PRICING_CATALOG && window.GOVERNMENT_PRICING_CATALOG[slug]?.name) {
            return window.GOVERNMENT_PRICING_CATALOG[slug].name;
        }

        return slug.replace(/[-_]/g, ' ').toUpperCase();
    };

    // Helper to translate state codes from the catalogs
    const resolveFullStateNameDynamic = (postalCode) => {
        if (!postalCode || postalCode === "NONE" || postalCode === "SELECTED STATE") return "";
        if (window.currentSelectedStateLongName) return window.currentSelectedStateLongName;
        if (window.activeFilingContext && window.activeFilingContext.stateName) return window.activeFilingContext.stateName;

        if (window.STATE_PRICING_CATALOG && window.STATE_PRICING_CATALOG[postalCode]?.name) {
            return window.STATE_PRICING_CATALOG[postalCode].name;
        }

        const stateRegistry = {
            "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
        };
        return stateRegistry[postalCode] || postalCode;
    };

    const fullStateName = resolveFullStateNameDynamic(rawStateKey);
    const readableServiceTitle = resolveCatalogServiceTitle(activeDynamicServiceSlug);

    // 🧠 GRAMMAR ENGINE: Rule 1 - Dynamic "a" vs "an" check on the first letter of the catalog string
    const firstLetter = readableServiceTitle.trim().charAt(0).toLowerCase();
    const indefiniteArticle = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter) ? 'an' : 'a';

    // 🌟 THE CORRECTION: Force "filing" onto all government catalog services explicitly
    let structuralTitle = readableServiceTitle;
    const isGovService = !!(window.GOVERNMENT_PRICING_CATALOG && window.GOVERNMENT_PRICING_CATALOG[activeDynamicServiceSlug]);
    
    if (isGovService) {
        const lowerTitle = readableServiceTitle.toLowerCase();
        // Append "filing" unless the catalog name already explicitly ends with it
        structuralTitle = lowerTitle.endsWith('filing') ? readableServiceTitle : `${readableServiceTitle} filing`;
    }

    // 🌟 DYNAMIC TEXT LOGIC: Formulate final grammatically perfect sentence structures
    const dynamicBannerText = fullStateName 
        ? `You are completing ${indefiniteArticle} <span style="color: #0a1f44; font-weight: 800; border-bottom: 2px solid #10b981; padding-bottom: 1px;">${structuralTitle}</span> filing for the State of <span style="color: #0a1f44; font-weight: 800; border-bottom: 2px solid #10b981; padding-bottom: 1px;">${fullStateName}</span>.`
        : `You are completing ${indefiniteArticle} <span style="color: #0a1f44; font-weight: 800; border-bottom: 2px solid #10b981; padding-bottom: 1px;">${structuralTitle}</span> filing.`;

    // Unhide primary layout Canvas
    placeholder.style.setProperty("display", "block", "important");
    placeholder.style.setProperty("visibility", "visible", "important");
    placeholder.style.setProperty("opacity", "1", "important");

    // Inject markup layout template
    placeholder.innerHTML = `
    <div class="step-panel-form-card" data-step="2" style="width: 100%; box-sizing: border-box; clear: both;">
        <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 15px; text-align: left;">
            <h2 style="color: var(--navy, #0a1f44); font-size: 1.6rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px;">2. Corporate Profile Intake</h2>
            <p style="color: var(--slate, #64748b); font-size: 0.95rem; margin: 0;">Establish your official corporate identifier variables, declare jurisdictional preferences, and specify target configurations.</p>
        </div>

        <!-- Context-Aware Tooltip Banner (Spans 2 Columns) -->
        <div class="context-jurisdiction-tooltip-banner" style="grid-column: span 2; width: 100%; background: #f0fdf4; border: 1px solid #bbf7d0; border-left: 4px solid #10b981; padding: 16px; border-radius: 6px; box-sizing: border-box; display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
            <span style="color: #10b981; font-size: 1.15rem; display: flex; align-items: center;"><i class="fa-solid fa-circle-check"></i></span>
            <p style="margin: 0; color: #14532d; font-size: 0.92rem; font-weight: 700; line-height: 1.4; text-align: left;">
                ${dynamicBannerText}
            </p>
        </div><br>

        <hr class="wizard-header-divider" style="grid-column: span 2; width: 100%; border: 0; border-top: 1px solid #e2e8f0; margin: 4px 0 12px 0; clear: both;" /><br>

        <div class="workspace-split-layout" style="display: grid; grid-template-columns: 1fr; gap: 32px; width: 100%; box-sizing: border-box; align-items: start;">
            <div id="step-2-onboarding-fields-canvas" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; min-width: 0; box-sizing: border-box;">
                <div class="dynamic-form-loading-placeholder" style="grid-column: span 2; text-align: center; padding: 40px 0; color: var(--slate, #64748b); font-weight: 600; font-size: 0.95rem;">
                    <i class="fa-solid fa-spinner fa-spin" style="color: var(--primary, #10b981); margin-right: 8px;"></i>
                    <span>Loading operational questionnaire forms...</span>
                </div>
            </div>
        </div>

        <div class="wizard-footer-action-row" style="display: flex; justify-content: space-between; align-items: center; width: 100% !important; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border, #e2e8f0); clear: both; box-sizing: border-box;">
            <button type="button" class="btn-wizard-nav-back notranslate" translate="no" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; justify-content: center;">
                <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i>
                <span>Back to Selected</span>
            </button>
            <button type="button" class="btn-wizard-main btn-wizard-nav-next notranslate" translate="no" onclick="if(typeof window.goToNextWizardStep === 'function') { window.goToNextWizardStep(3, event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.15); display: inline-flex; align-items: center; justify-content: center;">
                <span>Continue to Add Ons</span>
                <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>
            </button>
        </div>
    </div>
    `;

    // Process hydration step safely
    const targetCanvas = document.getElementById("step-2-onboarding-fields-canvas");
    const hydratorFunction = window.executeStepTwoFormFieldsHydrationOnly;

    if (typeof hydratorFunction === "function") {
        if (targetCanvas) {
            if (targetCanvas.getAttribute("data-hydration-fired") === "true") return;
            const loadingSpinner = targetCanvas.querySelector(".dynamic-form-loading-placeholder");
            if (loadingSpinner) loadingSpinner.remove();
            targetCanvas.setAttribute("data-hydration-fired", "true");
        }
        try {
            if (activeDynamicServiceSlug) hydratorFunction(targetCanvas, activeDynamicServiceSlug);
        } catch(err) {
            console.error("[Step 2 Stream Error] Failed to populate form fields safely:", err);
        }
    }
}

window.renderStepTwoLayoutMarkup = renderStepTwoLayoutMarkup;


// ============================================================================ //
// 📊 FORM STATE CAPTURE MECHANICS (CLEANED, SYNCHRONIZED & ZERO-HARDCODE)     //
// ============================================================================ //

/**
 * Captures all active inputs on the current wizard page layout view
 * and caches them safely into local browser storage frameworks.
 */
function saveWizardFormStatesVanilla() {
  const cacheKeyNamespace = "f4u_wizard_onboarding_state";

  // Prevent automated saves if a state-restoration engine pass is currently active
  if (window.isWizardCurrentlyRestoringStateVanilla) return;

  const activeStepNumber = window.currentWizardActiveStep;
  // FIX: Protect index-0 architectures from false-negative execution blocks
  if (activeStepNumber === undefined || activeStepNumber === null) {
    console.log("[State Engine] Save pass aborted: No verified step integer registered.");
    return;
  }

  // Isolate step-panel view nodes cleanly using specific wizard element layouts
  const currentActiveStepView = document.getElementById(`step-panel-${activeStepNumber}`) || 
                                document.getElementById(`step-${activeStepNumber}`);
  if (!currentActiveStepView) {
    console.log(`[State Engine] Save pass skipped: Step Container for Step ${activeStepNumber} missing from viewport.`);
    return;
  }

  // Postpone caching sequences if the layout hydrators are processing async responses
  const loadingIndicator = currentActiveStepView.querySelector(".dynamic-form-loading-placeholder") || 
                           currentActiveStepView.querySelector(".fa-spinner");
  if (loadingIndicator && loadingIndicator.offsetParent !== null) {
    console.log("[State Engine] Save pass postponed: Dynamic layout assembly compilation is running.");
    return;
  }

  let activeFormMetricsObject = {};
  try {
    const preExistingCacheString = localStorage.getItem(cacheKeyNamespace);
    if (preExistingCacheString) {
      activeFormMetricsObject = JSON.parse(preExistingCacheString) || {};
    }
  } catch (parseCacheErr) {
    console.warn("[State Engine] Baseline cache was unreadable, initializing clean payload.", parseCacheErr);
  }

  // Query input elements strictly nested inside the boundaries of the current panel step view
  const allInputElements = currentActiveStepView.querySelectorAll("input, select, textarea");
  if (allInputElements.length === 0) return;

  // Track field keys collected on this specific pass to identify stale fields
  const freshlyCapturedFieldKeys = [];

  allInputElements.forEach(inputNode => {
    if (!inputNode) return;
    
    // Explicitly bypass file input paths to prevent security blockades
    if (inputNode.type === 'file') return;

    // ANTI-FLICKER PRO GUARD: Instantly shield marketplace upsells from state capture overwriting loops!
    const isMarketplaceComponent = inputNode.classList.contains("upsell-checkbox") || 
                                   inputNode.closest(".upsell-market-card") || 
                                   inputNode.closest("[data-step='3']") || 
                                   inputNode.id.includes("modal_input_box_");
    if (isMarketplaceComponent) return;

    const uniqueDataKey = inputNode.getAttribute('id') || inputNode.getAttribute('name');
    if (!uniqueDataKey) return;

    // Separate extraction methods by standard field input paradigms
    let elementValueToCache;

    if (inputNode.type === 'checkbox') {
      elementValueToCache = inputNode.checked;
    } else if (inputNode.type === 'radio') {
      // Only capture active radio nodes to avoid programmatic assignment overwriting
      if (!inputNode.checked) return; 
      elementValueToCache = inputNode.value;
    } else {
      elementValueToCache = inputNode.value;
    }

    // Sync to standard localized metrics tracking tree object
    activeFormMetricsObject[uniqueDataKey] = elementValueToCache;
    freshlyCapturedFieldKeys.push(`wizard_field_${uniqueDataKey}`);

    // Synchronize individual standard backup fields for immediate cross-page hydrations
    localStorage.setItem(`wizard_field_${uniqueDataKey}`, String(elementValueToCache));
  });

  // FIX: Pure dynamic context management. Purge old field structures from localStorage
  // when moving between different services, preventing memory leaks.
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const storageKey = localStorage.key(i);
      if (storageKey && storageKey.startsWith("wizard_field_")) {
        // If this field key belongs to an old service, delete it
        if (!freshlyCapturedFieldKeys.includes(storageKey)) {
          localStorage.removeItem(storageKey);
          i--; // Adjust index pointer to handle row reduction cleanly
        }
      }
    }
  } catch (purgeErr) {
    console.warn("[State Engine] Optional memory cleanup pass bypassed:", purgeErr);
  }

  try {
    localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject));
    console.log(`[State Engine] Step ${activeStepNumber} parameters synchronized to localStorage.`);
  } catch (writeErr) {
    console.error("[State Engine Fatal] LocalStorage write allocation failed:", writeErr);
  }
}

// Ensure variable linkage globally back to window boundaries
window.saveWizardFormStatesVanilla = saveWizardFormStatesVanilla;


// ============================================================================ //
// 🔌 STEP 2 HOOK GATEWAY INITIALIZATION ROUTERS (STABILIZED & AGNOSTIC)      //
// ============================================================================ //

/**
 * LIFE-CYCLE ROUTING BRIDGE:
 * Automatically runs the template mounting functions securely when Step 2 loads.
 */
function runStepTwoLayoutInitialization() {
  // Capture active wizard execution progress dynamically
  const activeStep = window.currentWizardActiveStep;

  // FIX: Pure dynamic verification. Do not assume or default to step numbers.
  // Ensure the wizard is explicitly focused on the profile intake step.
  if (activeStep === undefined || activeStep === null) {
    console.warn("[Step 2 Lifecycle] Active wizard step progress context unresolved. Halting init loop.");
    return;
  }

  // Allow lifecycle re-runs if the step matches exactly, even if previously flagged as hydrated.
  // This lets the wizard cleanly update form layouts if a user goes back to Step 1 and changes packages.
  if (activeStep !== 2) {
    console.log(`[Step 2 Lifecycle] Active progress step is ${activeStep}. Skipping Step 2 setup.`);
    // Reset hydration flag so it can cleanly re-fire if the user navigates back to Step 2 later
    window.isStepTwoFormHydrated = false;
    return;
  }

  if (window.isStepTwoFormHydrated === true) {
    console.log("[Step 2 Lifecycle] Step 2 layout forms already active on screen viewport. Bypassing render pass.");
    return;
  }

  console.log("[Step 2] Mounting fresh dynamic form templates into placeholders...");
  window.isStepTwoFormHydrated = true;

  // Execute structural compilation routines directly from verified window architecture
  if (typeof window.renderStepTwoLayoutMarkup === "function") {
    try {
      // Force clean out the canvas single-hydration guard lock to ensure a crisp rendering pass
      const targetCanvas = document.getElementById("step-2-onboarding-fields-canvas");
      if (targetCanvas) {
        targetCanvas.removeAttribute("data-hydration-fired");
      }
      
      window.renderStepTwoLayoutMarkup();
    } catch (renderError) {
      console.error("[Step 2 Lifecycle Error] Failure caught inside template layout compiler:", renderError);
      window.isStepTwoFormHydrated = false;
    }
  } else {
    console.error("[Step 2 Fatal] Core renderStepTwoLayoutMarkup module missing from global execution context.");
    window.isStepTwoFormHydrated = false;
  }
}

// Bind methods cleanly back to global window boundaries
window.runStepTwoLayoutInitialization = runStepTwoLayoutInitialization;


// ============================================================================ // 
// 🛡 REFIXTURED ADVANCEMENT GATE: IN-LINE CONTEXTUAL FORM VALIDATION           // 
// ============================================================================ // 
window.processStepTwoFunnelAdvancementGate = function(event) { 
    const currentEvent = event || window.event; 
    if (currentEvent && typeof currentEvent.preventDefault === "function") { 
        currentEvent.preventDefault(); 
    } 
    console.log("[Step 2 Validation] Running data integrity compilation checks..."); 

    // 1. CLEAR ALL PREVIOUS IN-LINE ERRORS BEFORE RE-CHECKING 
    document.querySelectorAll(".inline-error-message-node").forEach(node => node.remove()); 
    document.querySelectorAll(".wizard-input-field-error-state").forEach(el => { 
        el.classList.remove("wizard-input-field-error-state"); 
        el.style.borderColor = "#cbd5e1"; 
    }); 

    const urlParams = new URLSearchParams(window.location.search); 
    const serviceSlugKey = String(window.currentServiceKey || window.routeActiveServiceKey || urlParams.get('service') || "").toLowerCase().trim(); 

    // Pure dynamic validation mapping. Avoids hardcoding service-specific keys. 
    let aggregatedValidationResults = { isValid: true, errors: [] }; 

    // Dynamically probe the form registry for any validation scripts matching the current service workflow 
    if (window.formRegistry) { 
        Object.keys(window.formRegistry).forEach(registryKey => { 
            // Safely checks if the registered validation object belongs to the active dynamic service slug 
            if (registryKey.startsWith(serviceSlugKey) && registryKey.includes("validation")) { 
                const activeValidatorObject = window.formRegistry[registryKey]; 
                
                if (activeValidatorObject && typeof activeValidatorObject.validate === "function") { 
                    const currentResult = activeValidatorObject.validate(); 
                    
                    // FIXED: Read the validator results whether they are raw booleans OR custom structured validation object maps!
                    let isThisModuleValid = true;
                    let moduleErrors = [];

                    if (typeof currentResult === "object" && currentResult !== null) {
                        isThisModuleValid = currentResult.isValid !== false; // Fall back gracefully if field missing
                        moduleErrors = Array.isArray(currentResult.errors) ? currentResult.errors : [];
                    } else {
                        // The sub-modules throw a raw boolean. Map it safely here.
                        isThisModuleValid = !!currentResult;
                        
                        // If it failed but provided no text array, pull the module's error rules array for display
                        if (!isThisModuleValid) {
                            moduleErrors = Array.isArray(activeValidatorObject.requiredFields) 
                                ? activeValidatorObject.requiredFields 
                                : ["Please verify your onboarding parameters layout details."];
                        }
                    }

                    if (!isThisModuleValid) { 
                        aggregatedValidationResults.isValid = false; 
                        moduleErrors.forEach(err => { 
                            if (!aggregatedValidationResults.errors.includes(err)) { 
                                aggregatedValidationResults.errors.push(err); 
                            } 
                        }); 
                    } 
                } 
            } 
        }); 
    }

    // 2. ERROR LAYOUT GEN: Draw clean error states on active fields without text-matching dictionaries 
    if (!aggregatedValidationResults.isValid) { 
        console.log("[Step 2 Validation Failure] Requirements blocked. Drawing in-line warnings."); 
        let firstInvalidElement = null; 
        
        aggregatedValidationResults.errors.forEach(errorItem => { 
            // Fall back gracefully whether error payloads pass text strings or structured field metadata objects 
            const errMsg = typeof errorItem === "object" ? (errorItem.message || errorItem.msg) : errorItem; 
            const explicitFieldId = typeof errorItem === "object" ? errorItem.id : null; 
            
            let fieldInput = null; 
            if (explicitFieldId) { 
                fieldInput = document.getElementById(explicitFieldId) || document.querySelector(`[name="${explicitFieldId}"]`); 
            } 
            
            // If no explicit element ID is returned, resolve fields directly by parsing the required form attributes 
            if (!fieldInput) { 
                const visibleRequiredFields = document.querySelectorAll("#step-2-onboarding-fields-canvas input[required], #step-2-onboarding-fields-canvas select[required], #step-2-onboarding-fields-canvas textarea[required]"); 
                for (let i = 0; i < visibleRequiredFields.length; i++) { 
                    const currentField = visibleRequiredFields[i]; 
                    // Match inputs safely if they are empty OR contain failed structural values 
                    if (!currentField.value.trim() || currentField.classList.contains("invalid-value-flag")) { 
                        fieldInput = currentField; 
                        break; 
                    } 
                } 
            } 
            
            // Draw inline validation warning labels cleanly inside layout boundaries 
            if (fieldInput) { 
                if (!firstInvalidElement) firstInvalidElement = fieldInput; 
                fieldInput.classList.add("wizard-input-field-error-state"); 
                fieldInput.style.borderColor = "#b91c1c"; 
                
                const inputParentWrapper = fieldInput.closest(".wizard-input-group") || fieldInput.closest(".form-group-wrapper") || fieldInput.parentElement; 
                if (inputParentWrapper) { 
                    if (!inputParentWrapper.querySelector(".inline-error-message-node")) { 
                        const errorLabel = document.createElement("span"); 
                        errorLabel.className = "inline-error-message-node"; 
                        errorLabel.style.cssText = "color: #b91c1c; font-size: 0.78rem; font-weight: 600; display: block; margin-top: 4px; text-align: left; clear: both; width: 100%; animation: fadeIn 0.15s ease;"; 
                        errorLabel.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="margin-right: 4px;"></i> ${errMsg}`; 
                        inputParentWrapper.appendChild(errorLabel); 
                    } 
                } 
            } 
        }); 
        
        if (firstInvalidElement) { 
            firstInvalidElement.scrollIntoView({ behavior: "smooth", block: "center" }); 
            firstInvalidElement.focus(); 
        } 
        return; // HARD BLOCK forward progression 
    } 

    // 3. STEP TRANSITION ROUTING PASS 
    // Commit valid step 2 input variables to local state cache memory 
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 
    
    // Perform the panel step layout transition assignment safely 
    if (typeof window.switchWizardActiveViewLayout === "function") { 
        window.switchWizardActiveViewLayout(3); 
    } 
    
    // Pass system execution controls cleanly forward to Step 3 lifecycle initializers 
    if (typeof window.runStepThreeLayoutInitialization === "function") { 
        console.log("[Advancement Gate Success] Passing control cleanly to Step 3 Lifecycle initialization..."); 
        window.runStepThreeLayoutInitialization(); 
    } else if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        console.log("[Advancement Gate Warning] Step 3 layout initialization missing. Running total matrix recalculation fallback..."); 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
}; 

// Safety initialization mappings 
if (typeof window.runStepTwoLayoutInitialization === "function") { 
    window.initializeDynamicServiceFormLayout = window.runStepTwoLayoutInitialization; 
} else { 
    console.warn("[Step 2 Bootstrap Warning] 'runStepTwoLayoutInitialization' was not found globally. Mapping skipped."); 
}

// ============================================================================ //
// ⚙ MODULE: CACHE AND STATE RECOVERY SYSTEM ENGINE LOGIC
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
  // RECOVER PATH: Pulls data out of local storage and repopulates the DOM
  // ============================================================================ //
  if (isExecutionInitialLoad) {
    // FIX: Structural safety lock prevents race loops during form state parsing
    if (window.isWizardCurrentlyRestoringStateVanilla) return;
    
    const restoredPayloadString = localStorage.getItem(cacheKeyNamespace);
    
    // Prevent recursive tracking save filters during setup hydration
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
            // FIX: Explicitly bypass file types since the DOM natively blocks script assignments to file fields
            if (inputNode.type === 'file') return;

            // 🟢 BLOCK INTERFERENCE: If element belongs to an inactive step wrapper, skip event mutations
            const enclosingStepCard = inputNode.closest("[data-step]") || inputNode.closest(".wizard-panel");
            if (enclosingStepCard) {
              const stepAttr = enclosingStepCard.getAttribute("data-step");
              const elementStepNum = stepAttr ? parseInt(stepAttr, 10) : parseInt(enclosingStepCard.id.replace(/[^0-9]/g, ""), 10);
              const activeStepNum = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : 0;
              
              if (!isNaN(elementStepNum) && elementStepNum !== activeStepNum) {
                return; // Do not manipulate out-of-bounds nodes to protect current step state
              }
            }

            let finalExtractedValue = payloadDataObject[fieldIdKey];
            const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || inputNode.type === 'password' || inputNode.type === 'tel';
            
            if (isSecureElement && typeof finalExtractedValue === "string" && finalExtractedValue !== "") {
              finalExtractedValue = executeCipherTranslation(finalExtractedValue, true);
            }

            if (inputNode.type === 'checkbox') {
              inputNode.checked = (finalExtractedValue === true || finalExtractedValue === "true");
            } else if (inputNode.type === 'radio') {
              // Direct match handling for radio buttons
              if (inputNode.value === finalExtractedValue) {
                inputNode.checked = true;
              }
            } else {
              inputNode.value = finalExtractedValue;
            }

            // FIX: Suppress event loops on hydration to prevent rendering triggers from duplicating layouts
            if (inputNode.isConnected) {
              try {
                const inputIdLower = (inputNode.id || "").toLowerCase();
                const inputNameLower = (inputNode.name || "").toLowerCase();

                // FIX: Expanded block to explicitly lock conditional selection fields from dispatching events during recovery pass
                const isTriggerField = inputIdLower.includes("state") || 
                                       inputIdLower.includes("service") || 
                                       inputNameLower.includes("service") || 
                                       inputIdLower.includes("choice") || 
                                       inputIdLower.includes("verified") || 
                                       inputNode.closest(".upsell-market-card") || 
                                       inputNode.type === "radio";

                if (!isTriggerField) {
                  inputNode.dispatchEvent(new Event('change', { bubbles: true }));
                  inputNode.dispatchEvent(new Event('input', { bubbles: true }));
                }
              } catch (eventDispatchErr) {
                console.warn(`[State Engine] Suppressed event loop crash on field: ${fieldIdKey}`, eventDispatchErr);
              }
            }
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
          // Verify boundary protection before backfilling
          const enclosingCard = targetNode.closest("[data-step]") || targetNode.closest(".wizard-panel");
          let cardStepNum = null;
          if (enclosingCard) {
            const stepAttr = enclosingCard.getAttribute("data-step");
            cardStepNum = stepAttr ? parseInt(stepAttr, 10) : parseInt(enclosingCard.id.replace(/[^0-9]/g, ""), 10);
          }
          const currentActiveNum = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : 0;

          if (cardStepNum === null || cardStepNum === currentActiveNum) {
            targetNode.value = localStorage.getItem(storageKey);
          }
        }
      }
    });

    window.isWizardCurrentlyRestoringStateVanilla = false;
    console.log("[State Engine] State recovery parameters parsed and synchronized cleanly.");

    // FIX: Only recalculate total bounds if the layout matrix function is explicitly available
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
      window.updateDynamicPricingMatrixVanilla();
    }
  }
}

// Global registration
window.cacheAndRestoreWizardFormStatesVanilla = cacheAndRestoreWizardFormStatesVanilla;


// ============================================================================ //
// ⚙ MODULE: COMBINED DATA PIPELINE: FORM STATE PRESERVATION, CRYPTO, & HYDRATION
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
  // 🔄 RECOVER PATH: Runs on true initial boot to populate inputs out of storage
  // ============================================================================ //
  if (isExecutionInitialLoad === true) {
    if (window.isWizardCurrentlyRestoringStateVanilla) return;
    
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
            // FIX: Explicitly bypass file types since the DOM natively blocks script assignments to file fields
            if (inputNode.type === 'file') return;

            // 🟢 BOUNDARY CHECK: Prevent background step mutations from firing out of order
            const enclosingStepCard = inputNode.closest("[data-step]") || inputNode.closest(".wizard-panel");
            if (enclosingStepCard) {
              const stepAttr = enclosingStepCard.getAttribute("data-step");
              const elementStepNum = stepAttr ? parseInt(stepAttr, 10) : parseInt(enclosingStepCard.id.replace(/[^0-9]/g, ""), 10);
              const activeStepNum = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : 0;
              
              if (!isNaN(elementStepNum) && elementStepNum !== activeStepNum) {
                return; // Ignore inactive background nodes to secure present step parameters
              }
            }

            let finalExtractedValue = payloadDataObject[fieldIdKey];
            const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || inputNode.type === 'password' || inputNode.type === 'tel';
            
            if (isSecureElement && typeof finalExtractedValue === "string" && finalExtractedValue !== "") {
              finalExtractedValue = executeCipherTranslation(finalExtractedValue, true);
            }

            if (inputNode.type === 'checkbox') {
              inputNode.checked = (finalExtractedValue === true || finalExtractedValue === "true");
            } else if (inputNode.type === 'radio') {
              // Direct fixed match validation prevents value overwrite loops
              if (inputNode.value === finalExtractedValue) {
                inputNode.checked = true;
              }
            } else {
              inputNode.value = finalExtractedValue;
            }

            // FIX: Block state selectors and trigger elements from bubbling events during recovery to prevent duplicate section rendering
            if (inputNode.isConnected) {
              try {
                const inputIdLower = (inputNode.id || "").toLowerCase();
                const inputNameLower = (inputNode.name || "").toLowerCase();

                // FIX: Expanded triggers to catch choice and verified conditional dropdown fields from firing rendering passes
                const isTriggerSelector = fieldIdKey.includes("state") || 
                                         fieldIdKey.includes("formation") || 
                                         inputIdLower.includes("service") || 
                                         inputNameLower.includes("service") || 
                                         inputIdLower.includes("choice") || 
                                         inputIdLower.includes("verified") || 
                                         inputNode.classList.contains("upsell-checkbox") || 
                                         inputNode.closest(".upsell-market-card") || 
                                         inputNode.type === "radio";

                if (!isTriggerSelector) {
                  inputNode.dispatchEvent(new Event('change', { bubbles: true }));
                  inputNode.dispatchEvent(new Event('input', { bubbles: true }));
                }
              } catch (e) {
                console.warn(`[State Engine] Suppressed event loop crash on field: ${fieldIdKey}`, e);
              }
            }
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
          const enclosingCard = targetNode.closest("[data-step]") || targetNode.closest(".wizard-panel");
          let cardStepNum = null;
          if (enclosingCard) {
            const stepAttr = enclosingCard.getAttribute("data-step");
            cardStepNum = stepAttr ? parseInt(stepAttr, 10) : parseInt(enclosingCard.id.replace(/[^0-9]/g, ""), 10);
          }
          const currentActiveNum = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : 0;

          if (cardStepNum === null || cardStepNum === currentActiveNum) {
            targetNode.value = localStorage.getItem(storageKey);
          }
        }
      }
    });

    window.isWizardCurrentlyRestoringStateVanilla = false;

    // Single, debounced structural summary matrix recalculation pass
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
      window.updateDynamicPricingMatrixVanilla();
    }
    return; // Halt recovery runtime execution safely here
  }
  // ============================================================================ //
  // 💾 CAPTURE MODE: Triggered automatically when saved data is pushed mid-funnel
  // ============================================================================ //
  if (window.isWizardCurrentlyRestoringStateVanilla) return;

  const activeStepNumber = window.currentWizardActiveStep || localStorage.getItem("f4u_wizard_active_step_fallback");
  if (!activeStepNumber) return;

  const currentActiveStepView = document.getElementById(`step-panel-${activeStepNumber}`) || 
                                document.getElementById(`step-${activeStepNumber}`) || 
                                document.querySelector(".wizard-panel.active");
  if (!currentActiveStepView) return;

  const dynamicSpinner = currentActiveStepView.querySelector(".fa-spinner") || currentActiveStepView.querySelector(".dynamic-form-loading-placeholder");
  if (dynamicSpinner && dynamicSpinner.offsetParent !== null) {
    console.log("[State Engine] Capture postponed: Dynamic loading placeholder wrapper is active.");
    return;
  }

  let activeFormMetricsObject = {};
  try {
    const preExistingCacheString = localStorage.getItem(cacheKeyNamespace);
    if (preExistingCacheString) {
      activeFormMetricsObject = JSON.parse(preExistingCacheString) || {};
    }
  } catch (parseCacheErr) {
    console.warn("[State Engine] Baseline cache was unreadable, initializing clean payload.", parseCacheErr);
  }

  const allInputElements = currentActiveStepView.querySelectorAll("input, select, textarea");
  if (allInputElements.length === 0) return;

  allInputElements.forEach(inputNode => {
    if (!inputNode) return;
    
    // FIX: Explicitly bypass file types since the DOM natively blocks script tracking parameters on file inputs
    if (inputNode.type === 'file') return;

    // ANTI-FLICKER PRO GUARD: Instantly shield marketplace packages from capture overwriting loops!
    const isMarketplaceComponent = inputNode.classList.contains("upsell-checkbox") || 
                                   inputNode.closest(".upsell-market-card") || 
                                   inputNode.closest("[data-step='3']") || 
                                   inputNode.id.includes("modal_input_box_");
    if (isMarketplaceComponent) {
      return; // Bypassing marketplace cards entirely protects their persistent true/false price states
    }

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
    console.log(`[State Engine] Step ${activeStepNumber} parameters saved to localStorage successfully.`);
  } catch (writeErr) {
    console.error("[State Engine Fatal] LocalStorage write allocation failed:", writeErr);
  }
}

// Bind method cleanly back to global window boundaries
window.cacheAndRestoreWizardFormStatesVanilla = cacheAndRestoreWizardFormStatesVanilla;


// ============================================================================ //
// 🔌 REAL-TIME EVENT LISTENERS FOR USER INPUT CAPTURE (DEBOUNCED & IMMUNE TO LOOPS)
// ============================================================================ //

// Self-contained debouncer to prevent rapid layout paint triggers from freezing the browser window.
window.f4uWizardSaveThrottlerGate = null;

function triggerSafeThrottledStateCapture() {
  clearTimeout(window.f4uWizardSaveThrottlerGate);
  window.f4uWizardSaveThrottlerGate = setTimeout(() => {
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
      window.cacheAndRestoreWizardFormStatesVanilla(false);
    }
  }, 300); // Standard debounce interval for input stabilization
}

// FIX: Target panels cleanly using structural layout containers to prevent cross-step leakage
document.addEventListener("input", (e) => {
  // FIX: Completely bypass real-time state scraping if the engine is actively restoring or hydrating fields
  if (window.isWizardCurrentlyRestoringStateVanilla) return;
  
  if (e.target) {
    const activeStepPanel = e.target.closest(".wizard-panel.active") || e.target.closest(".step-panel-form-card");
    if (activeStepPanel) {
      triggerSafeThrottledStateCapture();
    }
  }
});

document.addEventListener("change", (e) => {
  // FIX: Completely bypass real-time state scraping if the engine is actively restoring or hydrating fields
  if (window.isWizardCurrentlyRestoringStateVanilla) return;
  
  // 🟢 FIXED: Accept both trusted human input and managed programmatic modifications to ensure custom items are always processed
  if (e.target) {
    const activeStepPanel = e.target.closest(".wizard-panel.active") || e.target.closest(".step-panel-form-card");
    if (activeStepPanel) {
      triggerSafeThrottledStateCapture();
    }
  }
});

// Global helper mutation channel to force a recovery run programmatically on panel change updates
window.executeDynamicStepStateHydrationFallback = function() {
  console.log("[State Engine] Forcing controlled post-render sub-script field population sync...");
  
  try {
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
      // Run a scoped recovery capture cycle pass cleanly without getting trapped by premature local locking properties
      window.cacheAndRestoreWizardFormStatesVanilla(true);
    }
  } catch (err) {
    console.error("[State Engine Fatal] Fallback engine recovery fail:", err);
  }
};

// Boot recovery parameters cleanly once on DOM tree ready behind a small frame offset delay
if (!window.hasWizardRealTimeStateListenersBound) {
  const handleInitialHydrationOnLoad = () => {
    if (window.isWizardCurrentlyRestoringStateVanilla) return;
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
      window.cacheAndRestoreWizardFormStatesVanilla(true);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      requestAnimationFrame(() => handleInitialHydrationOnLoad());
    });
  } else {
    requestAnimationFrame(() => handleInitialHydrationOnLoad());
  }
  window.hasWizardRealTimeStateListenersBound = true;
}
// ============================================================================ //
// 🔌 CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE (STABILIZED REBOOT)
// ============================================================================ //
function runUnifiedPlatformLifecycleBoot() {
  console.log("[Lifecycle Engine] Triggering application operational boot sequence...");

  const isCoreDatabaseReady = typeof window.getPricingConfiguration === "function" || 
                              window.CENTRAL_SERVICE_PLAN_DB || 
                              window.UPSELLS_ROUTER_DATABASE;

  if (!isCoreDatabaseReady) {
    console.warn("[Lifecycle Engine Guard] Core data configuration or pricing methods are not yet ready. Retrying boot sequence...");
    requestAnimationFrame(() => window.runUnifiedPlatformLifecycleBoot());
    return;
  }

  const wizardContainerElement = document.querySelector(".wizard-container");
  if (wizardContainerElement) {
    wizardContainerElement.style.setProperty('margin', '50px auto 0 auto', 'important');
    wizardContainerElement.style.setProperty('max-width', '1450px', 'important');
    wizardContainerElement.style.setProperty('width', '100%', 'important');
  }

  const masterFormElement = document.getElementById("master-onboarding-form") || document.querySelector(".master-onboarding-form");
  if (masterFormElement && masterFormElement.style) {
    masterFormElement.style.removeProperty('display');
    masterFormElement.style.removeProperty('width');
    masterFormElement.style.removeProperty('max-width');
  }

  if (typeof window.initializeDynamicChronometerWidget12Hr === "function") {
    window.initializeDynamicChronometerWidget12Hr();
  }

  if (typeof window.generateSecureRuntimeSessionTokenVanilla === "function") {
    window.generateSecureRuntimeSessionTokenVanilla();
  }

  if (typeof window.autoInjectMainWebsitePricingPlan === "function") {
    window.autoInjectMainWebsitePricingPlan();
  } else if (typeof window.initializeUrlParameterParserEngineVanilla === "function") {
    window.initializeUrlParameterParserEngineVanilla();
  }

  if (typeof window.initializeDigitalSignatureMirrorSync === "function") {
    window.initializeDigitalSignatureMirrorSync();
  }

  // ============================================================================ //
  // 🛡 ANTI-FLICKER FIX: CONTEXT-AWARE LIFECYCLE TARGETING SECURED
  // ============================================================================ //
  const currentActiveStepIndex = parseInt(window.currentWizardActiveStep, 10) || 0;
  console.log(`[Lifecycle Router] Step ${currentActiveStepIndex} transition detected.`);

  if (window.lastCompiledWizardStepLayout !== currentActiveStepIndex) {
    window.lastCompiledWizardStepLayout = currentActiveStepIndex;

    // Dynamically look up and call layout builders corresponding to the step index (removes hardcodes)
    const renderFunctionName = `renderStep${currentActiveStepIndex}LayoutMarkup`;
    if (typeof window[renderFunctionName] === "function") {
      window[renderFunctionName]();
    }

    // Handle dynamic marketplace variations or streaming architectures natively if present on the step
    const upsellStreamFunctionName = `executeStep${currentActiveStepIndex}UpsellStreaming`;
    const alternativeCatalogName = `autoInitializeStep${currentActiveStepIndex}MarketplaceCatalog`;

    if (typeof window[upsellStreamFunctionName] === "function") {
      window[upsellStreamFunctionName]();
    } else if (typeof window[alternativeCatalogName] === "function") {
      window[alternativeCatalogName]();
    }
  }

  // FIX: Structural safety lock prevents race loops during form state routing transitions
  if (!window.isWizardCurrentlyRestoringStateVanilla && typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(true);
  }

  if (typeof window.initializeFormDisplayLayoutSync === "function") {
    window.initializeFormDisplayLayoutSync();
  }

  // 🟢 BALANCED LAYERING DELAY:
  // Gives layout elements time to register their parameters cleanly before running calculations
  requestAnimationFrame(() => {
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
      window.updateDynamicPricingMatrixVanilla();
    }
  });

  // Suppress recursive loops safely
  if (typeof window.renderActiveWizardStepUiLayout === "function") {
    window.renderActiveWizardStepUiLayout();
  }

  console.log("[Lifecycle Engine Success] All operational layers initialized safely.");
}

window.runUnifiedPlatformLifecycleBoot = runUnifiedPlatformLifecycleBoot;


// ============================================================================ //
// 🔘 CORPORATE FORM INTERACTIVE ROUTING EVENT CONTROLLERS (MATCHING LAYOUT)
// ============================================================================ //

/**
 * Core dynamic visibility engine to toggle workflow elements, fields, and styles.
 * Wipes out duplicate code blocks and removes hardcoded CSS values entirely.
 */
function setElementWorkflowVisibility(wrapperId, shouldBeVisible) {
  const wrapper = document.getElementById(wrapperId);
  if (!wrapper) return;

  if (shouldBeVisible) {
    wrapper.setAttribute("data-visible", "true");
    wrapper.querySelectorAll("input, select, textarea").forEach(el => {
      el.removeAttribute("disabled");
    });
  } else {
    wrapper.setAttribute("data-visible", "false");
    wrapper.querySelectorAll("input, select, textarea").forEach(el => {
      el.setAttribute("disabled", "true");
      el.value = "";
      // Clean invalidation states dynamically via native class token attributes
      el.classList.remove("invalid-field-border", "error");
    });
  }

  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
}

function toggleCorporationSharesWorkflow(selectedValue) {
  setElementWorkflowVisibility("corp_custom_shares_wrapper", selectedValue === "custom");
}
function toggleCorporationBylawsProcurement(selectedValue) {
  // 🟢 BOUNDARY INTERLOCK: Verify user is on the active layout step context before mutating totals
  const currentStep = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : null;
  const targetStepElement = document.querySelector(".wizard-panel.active");
  const activeStepNum = targetStepElement ? parseInt(targetStepElement.getAttribute("data-step"), 10) : null;

  if (currentStep !== null && activeStepNum !== null && currentStep !== activeStepNum) return;

  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    // Toggle specific corporate kit upsell pricing flags dynamically
    window.customSelectedCorpKitServiceActive = (selectedValue === "include");
    window.updateDynamicPricingMatrixVanilla();
  }
}

function toggleCorporationEinReasonField(selectedValue) {
  setElementWorkflowVisibility("corp_ein_reason_wrapper", selectedValue === "yes" || selectedValue === "foreign");
}

function toggleCorporationDirectorWorkflow(selectedValue) {
  setElementWorkflowVisibility("corp_custom_director_wrapper", selectedValue === "multiple");
}

// Bind corporate methods cleanly to window context to guarantee inline attributes find them
window.toggleCorporationSharesWorkflow = toggleCorporationSharesWorkflow;
window.toggleCorporationBylawsProcurement = toggleCorporationBylawsProcurement;
window.toggleCorporationEinReasonField = toggleCorporationEinReasonField;
window.toggleCorporationDirectorWorkflow = toggleCorporationDirectorWorkflow;


// ============================================================================ //
// 🛠 STEP 2 COMPONENT: FIXED DERECURSIVE DBA ENGINE LISTENER BINDINGS
// ============================================================================ //
window.bindDbaEngineConditionListeners = function() {
  // Find fields relative to the active wizard step layout container (Removes hardcoded canvas IDs)
  const activePanel = document.querySelector(".wizard-panel.active") || document.querySelector(".step-panel-form-card");
  if (!activePanel) {
    console.log("[DBA Engine Warning] Postponing attachment: Active field root layout panel is not painted yet.");
    return;
  }

  const targetComponents = activePanel.querySelectorAll("input, select, textarea");
  if (targetComponents.length === 0) return;

  targetComponents.forEach(component => {
    if (!component) return;

    // FIX: Stop the infinite cascade by exiting early if this element already has listeners bound
    if (component.dataset.dbaListenersAttached === "true") return;

    component.addEventListener("change", function(e) {
      if (typeof window.toggleFederalTaxInventoryCostVisibility === "function") {
        window.toggleFederalTaxInventoryCostVisibility(e);
      }
    });

    // Mark the element as successfully hooked into the event stack
    component.dataset.dbaListenersAttached = "true";
  });
};
// ============================================================================ //
// 📊 PART 4: LLC MEMBERSHIP CONTROLLER (FIXED HTML SYNTAX & INTERCEPTORS)
// ============================================================================ //
function handleMembershipDropdownChange(selectElement) {
  const chosenValue = selectElement.value;
  const isSingleMember = (chosenValue === "1");
  const singleMemberBox = document.getElementById("single-member-question-wrapper");
  const membersBox = document.getElementById("dynamic-members-fields-root");

  if (!singleMemberBox || !membersBox) return;

  // Clear previous allocations to prevent stacking double-renders
  singleMemberBox.innerHTML = "";
  membersBox.innerHTML = "";

  if (isSingleMember) {
    // FIX: Corrected broken, invalid HTML architecture by including opening <select> with clean onchange actions
    // Removed inline hardcoded style rules in favor of the structured theme class
    singleMemberBox.innerHTML = `
<div class="wizard-input-group wizard-membership-card">
  <label for="sole_member_choice" class="wizard-field-label">Are you the sole member of this company? *</label>
  <select id="sole_member_choice" name="sole_member_choice" class="wizard-field-select">
    <option value="">-- Choose Option --</option>
    <option value="yes">Yes, I am the sole owner</option>
    <option value="no">No, someone else is the owner</option>
  </select>
</div>

    `;

    // FIX: Replaced broken old hardcoded save function call with the updated vanilla pipeline
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
      window.cacheAndRestoreWizardFormStatesVanilla(false);
    }
  } else if (chosenValue !== "") {
    if (typeof window.generateMultipleMembersInputForms === "function") {
      window.generateMultipleMembersInputForms(parseInt(chosenValue, 10), membersBox);
    }
  }
}

function handleSoleMemberIdentityToggle(answerValue) {
  const membersBox = document.getElementById("dynamic-members-fields-root");
  if (!membersBox) return;

  membersBox.innerHTML = "";

  if (answerValue === "no") {
    if (typeof window.generateMultipleMembersInputForms === "function") {
      window.generateMultipleMembersInputForms(1, membersBox);
    }
  }

  // FIX: Replaced broken old hardcoded save function call with the updated vanilla pipeline
  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(false);
  }
}

// Export methods cleanly back into global window boundaries
window.handleMembershipDropdownChange = handleMembershipDropdownChange;
window.handleSoleMemberIdentityToggle = handleSoleMemberIdentityToggle;


// ============================================================================ //
// 📊 PART 1: COMPLIANCE FORM GATES & MODAL CLOSE ANIMATIONS (CLEANED)          //
// ============================================================================ //

/**
 * Hides operational modal layer with smooth, high-fidelity transform animations.
 */
function closeNewEntrantAuditPriceGuideModal() {
    const modalRoot = document.getElementById("f4u-price-guide-modal-root");
    if (!modalRoot) return;

    modalRoot.style.transition = "opacity 0.2s ease";
    modalRoot.style.opacity = "0";

    const modalChild = modalRoot.firstChild;
    if (modalChild && modalChild.style) {
        modalChild.style.transition = "transform 0.2s ease";
        modalChild.style.transform = "translateY(-10px)";
    }

    setTimeout(() => {
        modalRoot.style.display = "none";
    }, 200);
}

function triggerNewEntrantAuditComplianceChecklistPopup() {
    if (typeof window.launchNewEntrantAuditRequirementsGuideModal === "function") {
        window.launchNewEntrantAuditRequirementsGuideModal();
    }
}

function toggleNewEntrantAuditLetterDetails(selectedValue) {
    console.log(`[New Entrant Audit Link] Selection parameter shifted to: ${selectedValue}`);
}

// Global Exposure Layer
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal;
window.triggerNewEntrantAuditComplianceChecklistPopup = triggerNewEntrantAuditComplianceChecklistPopup;
window.toggleNewEntrantAuditLetterDetails = toggleNewEntrantAuditLetterDetails;


// ============================================================================ //
// 📡 ENCAPSULATION WRAPPER: MUTATION ENGINE & EVENT HANDLERS                   //
// ============================================================================ //
(function() {
    // Private state containment variables to eliminate duplicate loops
    let isMutationProcessingActive = false;
    let step2TriggerTimeoutGate = null;
    let dynamicFormFileObserver = null;
    let currentObservedNode = null;

    window.initializeWizardMutationObserverEngine = function() {
        const mainFormSlotNode = document.getElementById("step-2-onboarding-fields-canvas") 
                              || document.getElementById("step-2-injection-placeholder");
        
        if (!mainFormSlotNode) return;

        // Reset the observer cleanly if the underlying DOM wrapper node changes
        if (currentObservedNode !== mainFormSlotNode && dynamicFormFileObserver) {
            dynamicFormFileObserver.disconnect();
            dynamicFormFileObserver = null;
        }

        if (dynamicFormFileObserver) return;

        currentObservedNode = mainFormSlotNode;
        dynamicFormFileObserver = new MutationObserver(() => {
            if (isMutationProcessingActive) return;
            isMutationProcessingActive = true;

            try {
                if (typeof window.autoDiscoverAndHookInteractiveDbaFields === "function") {
                    window.autoDiscoverAndHookInteractiveDbaFields();
                }
            } catch (err) {
                console.error("[Mutation System] Error running field discovery: ", err);
            } finally {
                setTimeout(() => { isMutationProcessingActive = false; }, 100);
            }
        });

        dynamicFormFileObserver.observe(mainFormSlotNode, { childList: true, subtree: true });
        console.log("[Mutation System] Clean, decoupled state monitoring observer attached.");
    };

    window.attachStepTwoNavigationTriggers = function() {
        if (step2TriggerTimeoutGate) {
            clearTimeout(step2TriggerTimeoutGate);
            step2TriggerTimeoutGate = null;
        }

        const currentActiveStep = parseInt(window.currentWizardActiveStep, 10) || 0;
        if (currentActiveStep > 2) return;

        const continueBtnStep2 = document.getElementById("step2ContinueBtn") 
                              || document.querySelector("#step-panel-2 .btn-wizard-main");

        if (continueBtnStep2) {
            if (continueBtnStep2.dataset.triggersAttached === "true") return;

            // Remove legacy inline HTML elements cleanly
            continueBtnStep2.removeAttribute("onclick");
            
            // Standard non-destructive modern event binding listener
            continueBtnStep2.addEventListener("click", function(event) {
                if (typeof window.processStepTwoFunnelAdvancementGate === "function") {
                    window.processStepTwoFunnelAdvancementGate(event);
                } else if (typeof window.switchWizardActiveViewLayout === "function") {
                    window.switchWizardActiveViewLayout(3);
                }
            });

            continueBtnStep2.dataset.triggersAttached = "true";
            console.log("[Global Exposure] Step 2 navigation controls bound securely.");
        } else {
            if (currentActiveStep === 2) {
                step2TriggerTimeoutGate = setTimeout(window.attachStepTwoNavigationTriggers, 100);
            }
        }
    };
})();

// Safety Fallback Layer Mapping
if (typeof window.syncModalCheckboxChangeToBackgroundForm === "undefined") {
    window.syncModalCheckboxChangeToBackgroundForm = window.syncModalCheckboxActionDirectToForm;
}

// ============================================================================ //
// 🚀 DEFERRED SECURE INITIALIZATION INTERLOCK BINDINGS (REFACTORED)            //
// ============================================================================ //
(function() {
    // Avoid double execution if the script is imported/injected multiple times
    if (window.hasGlobalInitializerInterlockAttached) return;

    const triggerSystemPlatformBoot = () => {
        let isArmedForCurrentCanvas = false;

        const verifyAndArmComponents = () => {
            // 🟢 DETACH ESCAPE INTERLOCK: Do not loop if the user navigated past Step 2
            const activeStepCheck = parseInt(window.currentWizardActiveStep, 10) || 0;
            if (activeStepCheck > 2) {
                console.log("[Lifecycle Engine] Step 2 out of range. Background layout loops disconnected cleanly.");
                return;
            }

            const hasCanvasLoaded = document.getElementById("step-2-onboarding-fields-canvas") 
                                  || document.getElementById("step-2-injection-placeholder");

            if (hasCanvasLoaded) {
                // ⚠️ CRITICAL DE-DUPLICATION GUARD: Stop execution if this canvas instance is already set up
                if (isArmedForCurrentCanvas) return;
                isArmedForCurrentCanvas = true;

                if (typeof window.initializeWizardMutationObserverEngine === "function") {
                    window.initializeWizardMutationObserverEngine();
                }
                if (typeof window.attachStepTwoNavigationTriggers === "function") {
                    window.attachStepTwoNavigationTriggers();
                }
                console.log("[Lifecycle Engine] Step 2 infrastructure successfully armed.");
            } else {
                // If canvas was previously found but now destroyed (view change), reset the arm guard
                isArmedForCurrentCanvas = false;
                setTimeout(verifyAndArmComponents, 100);
            }
        };

        verifyAndArmComponents();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", triggerSystemPlatformBoot);
    } else {
        triggerSystemPlatformBoot();
    }

    window.hasGlobalInitializerInterlockAttached = true;
})();

// ============================================================================ //
// 🔌 MODULE: STEP 2 VIEW PORT LAYER INITIALIZATION AND SAFETY GATES          //
// ============================================================================ //

/**
 * Safely resolves the active DOM injection placeholder target for form fields.
 * @returns {HTMLElement|null} The resolved root container or null if unmounted.
 */
function initializeStep2AssetRouter() {
    const serviceFormRootContainer = document.getElementById("step-2-onboarding-fields-canvas") 
                                  || document.getElementById("step-2-injection-placeholder");
                                  
    if (!serviceFormRootContainer) {
        console.warn("[Asset Router Warning] Step 2 form injection target pending view state change.");
        return null;
    }
    
    console.log(`[Asset Router] Successfully resolved view port target: #${serviceFormRootContainer.id || 'isolated-container'}`);
    return serviceFormRootContainer;
}

window.initializeStep2AssetRouter = initializeStep2AssetRouter;


// ============================================================================ //
// 🔄 MODULE: ASYNCHRONOUS FORM SCRAPER AND SUB-SCRIPT LOADER ENGINE (CLEANED)  //
// ============================================================================ //
async function saveActiveServiceFormStates(fieldsRoot) {
    if (!fieldsRoot) {
        console.warn("[State Engine] Cannot run asset load pipeline. fieldsRoot node is unassigned.");
        return;
    }

    const currentActiveStepNum = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : 2;
    if (currentActiveStepNum === 2) {
        try {
            console.log("[State Engine] Scraping active inputs before clearing step view layout...");
            const formFields = fieldsRoot.querySelectorAll("input:not([type='checkbox']):not([type='radio']), select, textarea");
            formFields.forEach(field => {
                if (field.type === 'file') return;
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
                const isMarketplaceComponent = box.classList.contains("upsell-checkbox") || box.closest(".upsell-market-card");
                if (isMarketplaceComponent) return;
                if (boxKeyName) {
                    localStorage.setItem(`wizard_field_${boxKeyName}`, box.checked ? "true" : "false");
                }
            });
        } catch (preservationError) {
            console.warn("[State Engine Warning] Could not cache form data fields securely:", preservationError);
        }
    }

    // Resolve Service Route Identification Parameters safely
    let currentServiceKey = window.routeActiveServiceKey || window.currentServiceKey || document.getElementById("wizard-route-service-id")?.value;
    if (!currentServiceKey) {
        const urlParams = new URLSearchParams(window.location.search);
        currentServiceKey = urlParams.get("service") || window.location.pathname.split("/").pop() || "";
        if (currentServiceKey.includes(".html")) currentServiceKey = currentServiceKey.replace(".html", "");
    }

    let rawUrlSlug = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
    if (rawUrlSlug === "index" || !rawUrlSlug) rawUrlSlug = "llc-formation";

    const targetScriptFileName = (typeof SERVICE_URL_REGISTRY !== "undefined" && SERVICE_URL_REGISTRY[rawUrlSlug]) || rawUrlSlug;
    const expectedScriptId = `script-dependency-${targetScriptFileName}`;

    let formInjectionWrapper = fieldsRoot.querySelector(".isolated-form-payload-container");
    if (!formInjectionWrapper) {
        formInjectionWrapper = document.createElement("div");
        formInjectionWrapper.className = "isolated-form-payload-container";
        formInjectionWrapper.style.cssText = "width: 100%; display: block; clear: both;";
        fieldsRoot.appendChild(formInjectionWrapper);
    }

    const scriptExists = !!document.getElementById(expectedScriptId);

    if (!scriptExists) {
        if (currentActiveStepNum !== 2) {
            console.log(`[Asset Router Guard] Suppressed asynchronous DOM injection on active Step ${currentActiveStepNum}`);
            return;
        }

        // Apply temporary structure for placeholder states safely
        formInjectionWrapper.innerHTML = `
            <div id="dynamic-onboarding-fields-root" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; box-sizing: border-box;">
                <div class="dynamic-form-loading-placeholder" style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: #f8fafc; width: 100%; box-sizing: border-box;">
                    <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i>
                    <span>Assembling specialized compliance filing interfaces...</span>
                </div>
            </div>`;

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
                        
                        if (window.formRegistry && window.formRegistry[targetRegistryMasterKey]) {
                            clearInterval(verifyFunctionBindingPool);
                            return resolve();
                        }

                        const discoveredKey = Object.keys(window).find(key => {
                            const kLower = key.toLowerCase();
                            return typeof window[key] === "function" && kLower.startsWith("init") && 
                                   rawUrlSlug.split("-").some(word => word.length > 3 && kLower.includes(word));
                        });

                        if (discoveredKey) {
                            window[discoveredKey]();
                            clearInterval(verifyFunctionBindingPool);
                            return resolve();
                        }

                        if (verificationPollAttempts > 30) {
                            console.warn(`[Asset Router Warning] Loader pool timed out for: ${targetScriptFileName}.js`);
                            clearInterval(verifyFunctionBindingPool);
                            return resolve();
                        }
                        verificationPollAttempts++;
                    }, 50);
                };

                dynamicScriptElement.onerror = () => reject(new Error(`Failed to load script: ${targetScriptFileName}.js`));
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
        if (typeof window.executeDynamicStepStateHydrationFallback === "function") {
            window.executeDynamicStepStateHydrationFallback();
        }
    }

    if (currentActiveStepNum !== 2) return;

    const targetRegistryMasterKey = `${rawUrlSlug}-form-master`;
    const registeredFormInit = window.formRegistry && window.formRegistry[targetRegistryMasterKey];
    const finalFormHydratorEngine = registeredFormInit || window.executeStepTwoFormFieldsHydrationOnly || window.initLlcFormationServices || window.initCorporationsServices;

    if (typeof finalFormHydratorEngine === "function") {
        console.log("[Asset Router] Handing off layout render to hydrator engine...");
        
        const canvasTargetNode = document.getElementById("step-2-onboarding-fields-canvas") || formInjectionWrapper;
        
        // ⚠️ CRITICAL DEDUPLICATION FIX: Wipe out the existing content of the canvas 
        // to prevent dynamic forms from printing over and over again on the page!
        canvasTargetNode.innerHTML = "";

        // Safely execute the verified layout build routine
        await finalFormHydratorEngine(canvasTargetNode, rawUrlSlug);

        if (typeof window.attachStepTwoNavigationTriggers === "function") {
            window.attachStepTwoNavigationTriggers();
        }
        if (typeof window.bindDbaEngineConditionListeners === "function") {
            window.bindDbaEngineConditionListeners();
        }
    } else {
        console.warn(`[Asset Router Critical] No valid rendering hydrator engine found for: "${rawUrlSlug}"`);
    }
}


// ============================================================================ // 
// 🎯 RESOLVED THE SIGNATURE MISMATCH TARGET ROUTING LOOP & DUPLICATION BUG     // 
// ============================================================================ // 
async function finalizeServiceFormHydration(formInjectionWrapper, rawUrlSlug) { 
    // 🟢 STEP BOUNDARY LOCK: Terminate execution immediately if the wizard is on Step 3 or later 
    const activeStepNum = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : 2; 
    if (activeStepNum > 2) { 
        console.log("[Asset Router Guard] Workflow progressed past Step 2. Safely skipping background layout handover."); 
        return; 
    } 

    const targetRegistryMasterKey = `${rawUrlSlug}-form-master`; 
    const registeredFormInit = window.formRegistry && window.formRegistry[targetRegistryMasterKey]; 
    
    // Resolve the true specialized field generator function matching this specific step 
    const finalFormHydratorEngine = registeredFormInit || window.executeStepTwoFormFieldsHydrationOnly || window.initLlcFormationServices || window.initCorporationsServices; 
    
    if (typeof finalFormHydratorEngine === "function") { 
        // 🟢 ISOLATED TARGETING: Force the canvas target to look strictly for the Step 2 element 
        const canvasTargetNode = document.getElementById("step-2-onboarding-fields-canvas"); 
        if (!canvasTargetNode) { 
            console.warn("[Asset Router Critical] Target canvas node '#step-2-onboarding-fields-canvas' not found in viewport. Aborting handover pass."); 
            return; 
        } 

        // 🛑 ANTI-DUPLICATION LOCK: Prevent multiple hydration cycles on the same element
        if (canvasTargetNode.getAttribute("data-form-hydrated") === "true") {
            console.log("[Asset Router Guard] Canvas already hydrated. Aborting execution to prevent duplicate forms.");
            return;
        }
        
        console.log("[Asset Router] Step 2 execution handoff successful. Running dynamic step field renderer..."); 
        
        // Safely strip the placeholder out of the DOM before rendering fields
        const placeholderNode = formInjectionWrapper.querySelector(".dynamic-form-loading-placeholder"); 
        if (placeholderNode) { 
            placeholderNode.remove(); 
        } 
        
        try {
            // Set the execution lock immediately before async rendering begins
            canvasTargetNode.setAttribute("data-form-hydrated", "true");
            
            // Render the form fields
            await finalFormHydratorEngine(canvasTargetNode, rawUrlSlug); 
            
            // Trigger late-binding layout listeners now that inputs are safely mounted 
            if (typeof window.attachStepTwoNavigationTriggers === "function") { 
                window.attachStepTwoNavigationTriggers(); 
            } 
            if (typeof window.bindDbaEngineConditionListeners === "function") { 
                window.bindDbaEngineConditionListeners(); 
            } 
        } catch (error) {
            // Release lock and restore UI placeholder if rendering completely fails
            canvasTargetNode.removeAttribute("data-form-hydrated");
            console.error("[Asset Router Critical] Hydration engine crashed during form execution:", error);
        }
    } else { 
        console.warn(`[Asset Router Critical] No valid rendering hydrator engine found for service step: "${rawUrlSlug}"`); 
        const loadingWheel = formInjectionWrapper.querySelector(".dynamic-form-loading-placeholder"); 
        if (loadingWheel) { 
            loadingWheel.innerHTML = ` 
 <div style="color: #64748b; font-weight: 500; font-size: 0.95rem; padding: 10px 0;"> Configuration initialized. Ready for user profile compilation details. </div>`; 
        } 
    } 
} 

// Bind method cleanly back to global window boundaries 
window.finalizeServiceFormHydration = finalizeServiceFormHydration;




/* ============================================================================ */
/* ⚡ PART 2 OF 2: UNIVERSAL SERVICE-FORM LIFECYCLE COMPILER ENGINE (FIXED)      */
/* ============================================================================ */
async function executeStepTwoDynamicFormInjection(keysBeforeScriptLoads, rawUrlSlug) {
    // 🟢 STEP LIMITER INTERLOCK: Instantly kill background compiler threads past Step 2
    const currentWizardActiveStepNum = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : 2;
    if (currentWizardActiveStepNum > 2) {
        console.log(`[Lifecycle Engine Guard] Suppressing Step 2 form injection task while on active Step ${currentWizardActiveStepNum}`);
        return;
    }

    console.log("[Lifecycle Engine] Starting universal template injection compilation pass...");

    // 1. PARAMETER INTERLOCK SAFETY GUARD
    if (!rawUrlSlug && typeof keysBeforeScriptLoads === "string") {
        rawUrlSlug = keysBeforeScriptLoads;
    }
    if (!rawUrlSlug && typeof getActiveServicePathContext === "function") {
        rawUrlSlug = getActiveServicePathContext();
    }

    // FIX: TARGET SELECTION PRUNING - Prioritize step-indexed canvases to stop leaks
    const fieldsRoot = document.getElementById("step-2-onboarding-fields-canvas") || document.getElementById("step-2-injection-placeholder");
    if (!fieldsRoot) {
        console.warn("[Lifecycle Engine] Aborting: Target Step 2 fields root element not found.");
        return;
    }

    // Standardize slug strings cleanly inside local scope boundaries
    if (!rawUrlSlug || typeof rawUrlSlug !== "string") {
        let currentServiceKey = window.routeActiveServiceKey || window.currentServiceKey || document.getElementById("wizard-route-service-id")?.value;
        if (!currentServiceKey) {
            const urlParams = new URLSearchParams(window.location.search);
            currentServiceKey = urlParams.get("service") || window.location.pathname.split("/").pop() || "";
            if (currentServiceKey.includes(".html")) currentServiceKey = currentServiceKey.replace(".html", "");
        }
        rawUrlSlug = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
    }
    if (rawUrlSlug === "index" || !rawUrlSlug) rawUrlSlug = "llc-formation";

    await executeTemplateCompilationPipeline(fieldsRoot, rawUrlSlug);
}
/**
 * Processes safe form construction by evaluating layout template hierarchies cleanly.
 */
async function executeTemplateCompilationPipeline(fieldsRoot, rawUrlSlug) {
    try {
        const stateOptions = window.globalStateDropdownOptionsHtml || (typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml(window.selectedFormationStateCode || "") : "") || (typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? window.buildGlobalUsaStateDropdownOptionsHtml("") : "");
        const verifiedTemplates = [];
        window.formRegistry = window.formRegistry || {};

        // Dynamic Service File Wrapper Initialization
        const camelCaseServiceName = rawUrlSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        let dynamicInitName = `init${camelCaseServiceName}Service`;
        if (rawUrlSlug === "corporations") dynamicInitName = "initCorporationsServices";
        if (rawUrlSlug === "llc-formation") dynamicInitName = "initLlcFormationServices";
        
     // Initialize a global tracking registry for run once operations
window.initializedLifecycleServices = window.initializedLifecycleServices || {};

if (typeof window[dynamicInitName] === "function") {
  // Check if this specific service has already run its initial setup
  if (window.initializedLifecycleServices[dynamicInitName]) {
    console.log(`[Lifecycle Engine Guard] Suppressing recursive execution pass for already initialized initializer: window.${dynamicInitName}()`);
  } else {
    console.log(`[Lifecycle Engine] Executing service sub-script initializer: window.${dynamicInitName}()`);
    
    // Mark as initialized BEFORE calling to absorb rapid async re-entries
    window.initializedLifecycleServices[dynamicInitName] = true;
    
    try {
      window[dynamicInitName]();
    } catch (initError) {
      console.error(`[Lifecycle Engine] Error during window.${dynamicInitName}() execution:`, initError);
      // Optional: uncomment below if you want failed initializations to retry on next cycle
      // window.initializedLifecycleServices[dynamicInitName] = false;
    }
  }
}


        const targetRegistryMasterKey = `${rawUrlSlug}-form-master`;
        const hasMasterFormBuilder = typeof window.formRegistry[targetRegistryMasterKey] === "function";

        // 🌟 STRATEGY HIERARCHY FIX: If the Master compiled layout constructor exists, read it exclusively
        if (hasMasterFormBuilder) {
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
                console.log("[Lifecycle Engine] Master form layout constructor processed successfully. Skipping sub-part scanner passes.");
            } catch (e) {
                console.error("[Lifecycle Engine] Master form renderer execution error:", e);
            }
        } else {
            // 🌟 SUB-PART SEQUENTIAL ROUTER: Only process parts lookup loops if no Master form template is defined
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
                        if (!verifiedTemplates.some(t => t.step === stepNumber)) {
                            verifiedTemplates.push({ html: compiledHtmlMarkup.trim(), step: stepNumber });
                        }
                    }
                }
            });
        }

        if (verifiedTemplates.length === 0) {
            console.warn(`[Lifecycle Engine] No HTML templates found in formRegistry for target: "${rawUrlSlug}"`);
        }

        // 2. DOM RENDERING BLOCK WITH MIXED STEP HANDLING
        let formInjectionWrapper = fieldsRoot.querySelector(".isolated-form-payload-container");
        if (!formInjectionWrapper) {
            formInjectionWrapper = document.createElement("div");
            formInjectionWrapper.className = "isolated-form-payload-container";
            formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: contents !important; clear: both !important;";
            fieldsRoot.insertBefore(formInjectionWrapper, fieldsRoot.firstChild);
        }

        // Flush out stray elements cleanly before injecting form blocks to stop duplication cascades
        formInjectionWrapper.innerHTML = "";

        // Inject segments iteratively matching precise step values
        verifiedTemplates.forEach((item) => {
            let existingRow = document.createElement("div");
            existingRow.className = "service-form-part-segment";
            existingRow.setAttribute("data-part-index", item.step);
            existingRow.style.cssText = "grid-column: 1 / -1 !important; display: contents !important; width: 100% !important; max-width: 100% !important; clear: both !important; box-sizing: border-box;";
            existingRow.innerHTML = item.html;
            formInjectionWrapper.appendChild(existingRow);
        });

        // Sort children in DOM visually by step number
        const rows = Array.from(formInjectionWrapper.children);
        rows.sort((a, b) => (parseInt(a.getAttribute("data-part-index"), 10) || 0) - (parseInt(b.getAttribute("data-part-index"), 10) || 0));
        rows.forEach(row => formInjectionWrapper.appendChild(row));

        console.log(`[Lifecycle Engine Success] Form segments successfully updated for: "${rawUrlSlug}".`);

        if (typeof window.hydrateInjectedFormFields === "function") {
            window.hydrateInjectedFormFields(formInjectionWrapper);
        }
        if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
            window.cacheAndRestoreWizardFormStatesVanilla(true);
        }

    } catch (compilationError) {
        console.error("[Lifecycle Engine Fatal Block Failure]", compilationError);
    }
}

// Bind methods cleanly back to global window boundaries
window.executeStepTwoDynamicFormInjection = executeStepTwoDynamicFormInjection;
window.executeStepTwoFormFieldsHydrationOnly = executeStepTwoDynamicFormInjection;



// --- DOM RENDERING BLOCK WITH MIXED STEP HANDLING --- 
function executeStepTwoIsolatedRenderPass() { 
    "use strict"; 
    
    // 🟢 STEP LIMITER GUARD: Instantly kill this loop if the user has navigated past Step 2 
    const activeStepNum = typeof window.currentWizardActiveStep === "number" ? window.currentWizardActiveStep : 2; 
    if (activeStepNum > 2) { 
        console.log(`[Step 2 Engine Guard] Suppressing rendering pass while on active Step ${activeStepNum}`); 
        return; 
    } 

    console.log("[Step 2 Engine] Initiating isolated rendering injection pass..."); 

    // 1. ISOLATE TARGET WORKSPACE CONTAINERS 
    const formInjectionWrapper = document.getElementById("step-2-injection-placeholder"); 
    const fieldsRoot = document.getElementById("step-panel-2"); 
    
    if (!formInjectionWrapper) { 
        console.warn("[Step 2 Engine] Mount anchor element '#step-2-injection-placeholder' missing or hidden."); 
        return; 
    } 

    // 🛑 ANTI-DUPLICATION INTERLOCK: Exit immediately if this wrapper has already been rendered to stop duplicate cascades
    if (formInjectionWrapper.getAttribute("data-step2-rendered") === "true") {
        console.log("[Step 2 Engine Guard] Workspace already contains completed forms. Aborting duplicate render path.");
        return;
    }

    // Apply strict structural alignment rules without polluting the global window object namespace 
    formInjectionWrapper.className = "isolated-form-payload-container"; 
    formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: contents !important; clear: both !important;"; 

    /** 
     * DATA PROTECTION INTERLOCK FIX: Isolated memory snapshots. 
     */ 
    let step2IsolatedTemplates = []; 
    const urlParams = new URLSearchParams(window.location.search); 
    const targetServiceSlug = String(window.currentServiceKey || window.routeActiveServiceKey || urlParams.get('service') || "").toLowerCase().trim(); 

    // Deep cloning helper tool 
    const deepCloneData = (source) => { 
        try { 
            return typeof structuredClone === 'function' ? structuredClone(source) : JSON.parse(JSON.stringify(source)); 
        } catch(e) { 
            return Array.isArray(source) ? [...source] : Object.assign({}, source); 
        } 
    }; 

    if (typeof verifiedTemplates !== 'undefined' && Array.isArray(verifiedTemplates)) { 
        step2IsolatedTemplates = deepCloneData(verifiedTemplates); 
    } else if (typeof formRegistry !== 'undefined') { 
        if (Array.isArray(formRegistry)) { 
            step2IsolatedTemplates = deepCloneData(formRegistry); 
        } else if (typeof formRegistry === 'object' && formRegistry !== null) { 
            if (targetServiceSlug && formRegistry[targetServiceSlug]) { 
                const itemRecord = formRegistry[targetServiceSlug]; 
                step2IsolatedTemplates = Array.isArray(itemRecord) ? deepCloneData(itemRecord) : [deepCloneData(itemRecord)]; 
            } else if (typeof formRegistry[`${targetServiceSlug}-form-master`] === "function") { 
                try { 
                    const stateOptions = window.globalStateDropdownOptionsHtml || ""; 
                    const functionalMarkupResult = formRegistry[`${targetServiceSlug}-form-master`](stateOptions); 
                    step2IsolatedTemplates = Array.isArray(functionalMarkupResult) ? deepCloneData(functionalMarkupResult) : [{ html: functionalMarkupResult, step: 2 }]; 
                } catch (functionalBuildErr) { 
                    console.error("[Step 2 Engine] Functional layout builder failed:", functionalBuildErr); 
                } 
            } else { 
                step2IsolatedTemplates = Object.entries(formRegistry) 
                    .filter(([key]) => !key.includes('step3') && !key.includes('upsell') && !key.includes('marketplace')) 
                    .map(([_, item]) => { 
                        return (typeof item === 'string') ? { html: item, step: 2 } : deepCloneData(item); 
                    }); 
            } 
        } 
    } 

    if (step2IsolatedTemplates.length === 0) { 
        console.warn(`[Step 2 Engine Warning] No structural HTML templates available in active registry arrays.`); 
        return; 
    } 

    // FIXED: Safely flush out the entire container inner markup to wipe any loose unindexed elements completely
    formInjectionWrapper.innerHTML = ""; 
    console.log("[Step 2 Engine Workspace] Target injection cleared cleanly for active render."); 

    // ✅ FIXED RENDERING LOOP: Loop through isolated template values and paint them down to the view layout
    step2IsolatedTemplates.forEach((templateObj) => {
        if (!templateObj) return;
        
        const markupContent = typeof templateObj === 'string' ? templateObj : templateObj.html;
        if (!markupContent) return;

        const layoutSegmentRow = document.createElement("div");
        layoutSegmentRow.className = "service-form-part-segment";
        
        // Enforce the explicit part-index tag so future removal sweeps work seamlessly
        const indexTag = templateObj.step || 2;
        layoutSegmentRow.setAttribute("data-part-index", indexTag);
        layoutSegmentRow.style.cssText = "grid-column: 1 / -1 !important; display: contents !important; width: 100% !important; max-width: 100% !important; clear: both !important;";
        
        layoutSegmentRow.innerHTML = markupContent;
        formInjectionWrapper.appendChild(layoutSegmentRow);
    });

    // Fire late-binding listeners now that items are safely added into DOM tracks
    if (typeof window.hydrateInjectedFormFields === "function") { 
        window.hydrateInjectedFormFields(formInjectionWrapper); 
    }

    // Set the state flag lock permanently so duplicate triggers cannot bypass it
    formInjectionWrapper.setAttribute("data-step2-rendered", "true");
    console.log("[Step 2 Engine] Workspace rendering completed successfully.");
} 

// Bind method cleanly back to global window boundaries to be invoked by the Step 2 lifecycle explicitly 
window.executeStepTwoIsolatedRenderPass = executeStepTwoIsolatedRenderPass;

(() => {
"use strict";

let isHydrationProcessing = false;
let hydrationTimeoutDebounce = null;

// ============================================================================ // 
// 🔌 DETECT & REGULATE ASYNCHRONOUS ENGINE RENDERING PIPELINES                // 
// ============================================================================ // 
function coordinatedPipelineTrigger() {
    if (typeof window.executeStepTwoFormHydrationPipeline !== "function") {
        console.warn("[Step 2 Interlock Engine] Handler executeStepTwoFormHydrationPipeline not available yet.");
        return;
    }

    // If a render cycle is actively moving data, skip execution to prevent race overlaps
    if (isHydrationProcessing) {
        console.log("[Step 2 Interlock Engine] Hydration engine busy. Postponing rendering task...");
        return;
    }

    // 🛑 ANTI-DUPLICATION DEBOUNCE GATE: Group multiple incoming messages into a single paint pass
    if (hydrationTimeoutDebounce) {
        clearTimeout(hydrationTimeoutDebounce);
    }

    hydrationTimeoutDebounce = setTimeout(() => {
        try {
            isHydrationProcessing = true;
            window.executeStepTwoFormHydrationPipeline();
        } catch (pipelineException) {
            console.error("[Step 2 Interlock Engine Execution Error]", pipelineException);
        } finally {
            // Safely release the rendering lock track
            isHydrationProcessing = false;
        }
    }, 60); // 60ms window catches stacked async network returns perfectly
}

// 🔌 LISTEN FOR NETWORK INTERCEPT COMPLETIONS 
window.addEventListener("message", (event) => { 
    // SECURITY UPGRADE: Confirm structure exists before evaluation
    if (!event || !event.data) return;

    if (event.data.type === "ASYNC_TEMPLATE_SCRIPT_LOADED") { 
        console.log("[Step 2 Interlock Engine] Notified of file download completion. Coordinating builder pipeline..."); 
        coordinatedPipelineTrigger();
    } 
}); 

// Run once safely on initial evaluation pass check loops now that everything is globalized 
if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", () => { 
        coordinatedPipelineTrigger();
    }); 
} else { 
    coordinatedPipelineTrigger();
} 

})(); // Cleanly and securely closes the overarching immediate execution arrow scope shell.


// ============================================================================ // 
// 🛠 UNIVERSAL DYNAMIC TAX/COMPLIANCE TOGGLE ELEMENT VISIBILITY CONTROLLER     // 
// ============================================================================ // 
window.toggleFederalTaxInventoryCostVisibility = function(targetSelectorOrEvent, programmaticFallbackNode, runSynchronously = true) { 
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
        // 🛑 ANTI-BUBBLING LOCK: Instantly halt native event bubbling if an event object was passed
        if (typeof targetSelectorOrEvent.stopPropagation === 'function') {
            targetSelectorOrEvent.stopPropagation();
        }

        const eventNode = targetSelectorOrEvent.target || targetSelectorOrEvent.currentTarget || targetSelectorOrEvent; 
        if (eventNode instanceof HTMLElement) { 
            if (!triggeringElement) triggeringElement = eventNode; 
            targetSelector = eventNode.dataset?.controlsTarget || eventNode.getAttribute('data-controls-target'); 
        } 
    } 

    // 3. Fallback safely—NEVER default to <body> or <html> during hydration 
    if (!triggeringElement && targetSelectorOrEvent && typeof targetSelectorOrEvent === 'object') { 
        const srcNode = targetSelectorOrEvent.srcElement; 
        const activeNode = (srcNode instanceof HTMLElement) ? srcNode : document.activeElement; 
        if (activeNode && activeNode !== document.body && activeNode !== document.documentElement) { 
            triggeringElement = activeNode; 
        } 
    } 

    // 4. FIXED: Cleaned up structural duplication syntax error
    if (!targetSelector && triggeringElement && typeof triggeringElement.getAttribute === 'function') { 
        targetSelector = triggeringElement.dataset?.controlsTarget || triggeringElement.getAttribute('data-controls-target'); 
    } 

    // 5. Secure Value Extraction Layer 
    let evaluationValue = null; 
    if (triggeringElement) { 
        if (triggeringElement.type === 'checkbox') { 
            evaluationValue = triggeringElement.checked ? "true" : "false"; 
        } else if (triggeringElement.type === 'radio') { 
            if (!triggeringElement.checked && triggeringElement.name) { 
                const checkedRadio = document.querySelector(`input[name="${triggeringElement.name}"]:checked`); 
                if (checkedRadio) triggeringElement = checkedRadio; 
            } 
            evaluationValue = triggeringElement.checked ? String(triggeringElement.value).toLowerCase().trim() : "false"; 
        } else if (typeof triggeringElement.value !== 'undefined' && triggeringElement.value !== null) { 
            evaluationValue = String(triggeringElement.value).toLowerCase().trim(); 
        } else if (typeof triggeringElement.getAttribute === 'function') { 
            evaluationValue = triggeringElement.dataset?.state || triggeringElement.getAttribute('data-state') || null; 
            if (evaluationValue) evaluationValue = String(evaluationValue).toLowerCase().trim(); 
        } 
    } 

    // Core Mutator Engine Logic Execution 
    const executeMutationLogicCore = () => { 
        if (!triggeringElement && typeof targetSelectorOrEvent === 'string') { 
            const structuralNormalized = targetSelectorOrEvent.toLowerCase().trim(); 
            if (["yes", "true", "1", "include"].includes(structuralNormalized)) { 
                evaluationValue = structuralNormalized; 
            } 
        } 
        
        const operationalValue = evaluationValue || ""; 
        let targetContainer = null; 

        if (targetSelector) { 
            try { 
                targetContainer = document.querySelector(targetSelector); 
            } catch (selectorError) { 
                console.warn(`[Visibility Engine] Invalid query selector expression: "${targetSelector}"`); 
            } 
        } 

        // FIXED SIBLING FALLBACK: Safer structural ancestor searching
        if (!targetContainer && triggeringElement && typeof triggeringElement.closest === 'function') { 
            const structuralRow = triggeringElement.closest('fieldset') || triggeringElement.closest('.form-group-wrapper') || triggeringElement.closest('.form-row') || triggeringElement.closest('.form-group') || triggeringElement.closest('tr') || triggeringElement.closest('div'); 
            if (structuralRow) { 
                targetContainer = structuralRow.nextElementSibling; 
            } 
        } 

        // 6. Mutate Layout States strictly using pure evaluation logic truths 
        if (targetContainer) { 
            const isConditionMet = ( 
                operationalValue === "yes" || 
                operationalValue === "true" || 
                operationalValue === "1" || 
                operationalValue === "include" 
            ); 

            // FIXED DISPLAY TOGGLE: Use hidden attributes instead of blank strings to respect layout settings
            if (isConditionMet) {
                targetContainer.removeAttribute("hidden");
                if (targetContainer.style.display === "none") {
                    targetContainer.style.display = "";
                }
            } else {
                targetContainer.style.display = "none";
            }

            // Handle disabled flags synchronously so the form scraping matrix never indexes them 
            const childFormControls = targetContainer.querySelectorAll("input, select, textarea, button"); 
            childFormControls.forEach(control => { 
                if (isConditionMet) { 
                    control.removeAttribute("disabled"); 
                } else { 
                    control.setAttribute("disabled", "true"); 
                } 
            }); 

            console.log(`[Lifecycle Engine] Synchronized mutation completed for target. Active state: ${isConditionMet}`); 

            // Re-routed the data save pass call context securely
            if (typeof window.saveWizardFormStatesVanilla === "function") { 
                window.saveWizardFormStatesVanilla(); 
            } 
        } else { 
            console.debug("[Lifecycle Engine Information] Run optimized without a direct DOM layout container target mutation."); 
        } 
    }; 

    // 🟢 FIXED SYNCHRONOUS RUNTIME GATEWAY CONTROLLER
    if (runSynchronously === true) { 
        executeMutationLogicCore(); 
    } else { 
        window.requestAnimationFrame(executeMutationLogicCore); 
    } 
};

// ============================================================================ // 
// 🛠 DYNAMIC MARKUP TEMPLATE FIELDS HYDRATION SYSTEM (FIXED & LOOP-PROTECTED)  // 
// ============================================================================ // 
function hydrateInjectedFormFields(formInjectionWrapper) { 
    if (!formInjectionWrapper) return; 

    // Track if this hydration execution contains Step 3 components to prevent pricing wipes 
    let containsStepThreeFields = false; 

    try { 
        // 🛑 ANTI-LOOP INTERLOCK GATE: Exit instantly if a hydration pass is already executing
        if (window.isWizardCurrentlyRestoringStateVanilla === true) {
            console.log("[Hydration Guard] A restoration pass is already running. Aborting duplicate pass.");
            return;
        }

        // Set absolute restoration gate lock to freeze capture loop cascades instantly 
        window.isWizardCurrentlyRestoringStateVanilla = true; 
        console.log("[Lifecycle Engine] Hydrating dynamically injected markup template rows..."); 

        // 1. Gather and populate alphanumeric fields, select dropdown blocks, and descriptions 
        const staticFields = formInjectionWrapper.querySelectorAll( 
            "input:not([type='checkbox']):not([type='radio']):not([type='file']), select, textarea" 
        ); 

        staticFields.forEach(elementItem => { 
            const elementIdentifier = elementItem.id || elementItem.name; 

            // Check if fields belong to Step 3 matrix allocations 
            if (elementItem.closest('[data-part-index="3"]') || elementItem.getAttribute('data-step') === '3') { 
                containsStepThreeFields = true; 
            } 

            if (elementIdentifier) { 
                const savedCacheStringValue = localStorage.getItem(`wizard_field_${elementIdentifier}`); 
                if (savedCacheStringValue !== null) { 
                    
                    // PROTECTED SELECT DROPDOWN HYDRATION REBOOT
                    if (elementItem.tagName === "SELECT") { 
                        const hasMatchingOption = Array.from(elementItem.options).some(opt => opt.value === savedCacheStringValue); 
                        
                        // FIXED: If the real options haven't downloaded yet, store a backup attribute to catch them later
                        if (hasMatchingOption) { 
                            elementItem.value = savedCacheStringValue; 
                        } else { 
                            elementItem.setAttribute("data-deferred-value", savedCacheStringValue);
                        } 
                    } else { 
                        elementItem.value = savedCacheStringValue; 
                    } 

                    // FIX: Safely route to visibility controllers directly instead of firing heavy bubbling event cascades 
                    if (elementItem.isConnected) { 
                        try { 
                            // Pass window.isWizardCurrentlyRestoringStateVanilla context into visibility togglers 
                            if (typeof window.toggleFederalTaxInventoryCostVisibility === "function" && elementItem.tagName === "SELECT") { 
                                // Run synchronously without triggering global mutation change trees 
                                window.toggleFederalTaxInventoryCostVisibility(elementItem, null, true); 
                            } else { 
                                elementItem.dispatchEvent(new Event('input', { bubbles: false })); 
                            } 
                        } catch (e) { 
                            console.warn(`[Hydration Loop] Event processing exception caught on field #${elementIdentifier}:`, e); 
                        } 
                    } 
                } 
            } 
        }); 

        // 2. Gather and switch radio button items 
        const formRadios = formInjectionWrapper.querySelectorAll("input[type='radio']"); 
        formRadios.forEach(radioItem => { 
            const radioIdentifier = radioItem.name; 
            if (radioItem.closest('[data-part-index="3"]') || radioItem.getAttribute('data-step') === '3') { 
                containsStepThreeFields = true; 
            } 

            if (radioIdentifier) { 
                const savedRadioValue = localStorage.getItem(`wizard_field_${radioIdentifier}`); 
                if (savedRadioValue !== null && radioItem.value === savedRadioValue) { 
                    radioItem.checked = true; 
                    if (radioItem.isConnected) { 
                        try { 
                            if (typeof window.toggleFederalTaxInventoryCostVisibility === "function") { 
                                window.toggleFederalTaxInventoryCostVisibility(radioItem, null, true); 
                            } 
                        } catch (e) { 
                            console.warn(`[Hydration Loop] Radio event execution error for group name ${radioIdentifier}:`, e); 
                        } 
                    } 
                } 
            } 
        }); 

        // 3. Gather and switch checkbox structural assets 
        const standaloneCheckboxes = formInjectionWrapper.querySelectorAll("input[type='checkbox']"); 
        standaloneCheckboxes.forEach(checkboxItem => { 
            const checkboxIdentifier = checkboxItem.id || checkboxItem.name; 
            if (checkboxItem.closest('[data-part-index="3"]') || checkboxItem.getAttribute('data-step') === '3') { 
                containsStepThreeFields = true; 
            } 

            if (checkboxIdentifier) { 
                const savedCacheCheckValue = localStorage.getItem(`wizard_field_${checkboxIdentifier}`); 
                if (savedCacheCheckValue !== null) { 
                    checkboxItem.checked = (savedCacheCheckValue === "true" || savedCacheCheckValue === true); 
                    if (checkboxItem.isConnected) { 
                        try { 
                            if (typeof window.toggleFederalTaxInventoryCostVisibility === "function") { 
                                window.toggleFederalTaxInventoryCostVisibility(checkboxItem, null, true); 
                            } 
                        } catch (e) { 
                            console.warn(`[Hydration Loop] Checkbox event execution error for element #${checkboxIdentifier}:`, e); 
                        } 
                    } 
                } 
            } 
        }); 

        console.log("[Lifecycle Engine] Data hydration phase complete."); 
    } catch (hydrationError) { 
        console.warn("[Lifecycle Engine Tracking Node Block] Fallback asset hydration warning:", hydrationError); 
    } finally { 
        // Lift the safety gate after all DOM elements finish rendering cleanly 
        window.isWizardCurrentlyRestoringStateVanilla = false; 

        // ANTI-WIPE CONDITIONAL TRIGGER 
        const activeStepContext = parseInt(window.currentWizardActiveStep, 10) || 2; 
        if (activeStepContext === 3 || containsStepThreeFields) { 
            if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
                console.log("[Lifecycle Engine Pricing Link] Active Step 3 context detected."); 
                
                const isEngineActive = window.isMatrixPipelineCurrentlyExecuting === true; 
                if (!isEngineActive) { 
                    window.updateDynamicPricingMatrixVanilla(); 
                } 
            } 
        } else { 
            console.log(`[Lifecycle Engine Pricing Link] Step 2 execution identified. Suppressed pricing evaluation pass to protect layout views.`); 
        } 
    } 
} 

// Bind method cleanly to global window boundaries 
window.hydrateInjectedFormFields = hydrateInjectedFormFields;


// ============================================================================ // 
// 🛠 SERVICE FORM DYNAMIC FIELD PATCHER & DATA INTERCEPTOR (FIXED & IMMUTABLE) // 
// ============================================================================ // 
function serializeAndPatchActiveServiceFields() { 
    console.log("[Data Matrix] Dynamically serializing current service form fields..."); 
    
    const formContainer = document.getElementById("step-2-onboarding-fields-canvas"); 
    if (!formContainer) return; 

    // FIX 1: Temporarily pause the global mutation tracking engine cleanly 
    let isObserverActive = false; 
    if (window.dynamicFormFileObserver && typeof window.dynamicFormFileObserver.disconnect === "function") { 
        window.dynamicFormFileObserver.disconnect(); 
        isObserverActive = true; 
    } 

    try { 
        // Locate or target the active patch wrapper container row 
        let patchSectionWrapper = formContainer.querySelector(".wizard-grid-patch-container-row"); 

        // FIX 2: Restructure selectors to use explicit, strict element lookups to avoid accidental fuzzy layout matches
        let emailField = document.getElementById("global_contact_email") || 
                         formContainer.querySelector('input[type="email"]') || 
                         formContainer.querySelector('input[name="global_contact_email"]'); 
                         
        let phoneField = document.getElementById("global_contact_phone") || 
                         formContainer.querySelector('input[type="tel"]') || 
                         formContainer.querySelector('input[name="global_contact_phone"]'); 
                         
        let ownerField = document.getElementById("global_company_owner") || 
                         formContainer.querySelector('input[name="global_company_owner"]'); 

        // FIX 3: Isolated Granular Checks — Create the wrapper ONLY if we actually need to inject missing items
        if (!emailField || !phoneField || !ownerField) {
            
            if (!patchSectionWrapper) { 
                patchSectionWrapper = document.createElement("div"); 
                patchSectionWrapper.className = "wizard-grid-patch-container-row"; 
                patchSectionWrapper.style.cssText = "grid-column: span 2 !important; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; width: 100%; box-sizing: border-box; clear: both; margin-bottom: 16px;"; 
                formContainer.insertBefore(patchSectionWrapper, formContainer.firstChild); 
            } 

            // Granular Insertion Gate 1: Email Row
            if (!emailField && !patchSectionWrapper.querySelector('#global_contact_email')) { 
                const emailWrapper = document.createElement("div"); 
                emailWrapper.className = "form-group-wrapper manual-interceptor-patch"; 
                emailWrapper.style.cssText = "display: flex; flex-direction: column; width: 100%; box-sizing: border-box;"; 
                emailWrapper.innerHTML = ` 
                    <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; margin-bottom: 4px; text-align: left;">Contact Email Address <span style="color: #b91c1c;">*</span></label> 
                    <input type="email" id="global_contact_email" name="global_contact_email" required class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important;"> 
                `; 
                patchSectionWrapper.appendChild(emailWrapper); 
            } 

            // Granular Insertion Gate 2: Phone Row
            if (!phoneField && !patchSectionWrapper.querySelector('#global_contact_phone')) { 
                const phoneWrapper = document.createElement("div"); 
                phoneWrapper.className = "form-group-wrapper manual-interceptor-patch"; 
                phoneWrapper.style.cssText = "display: flex; flex-direction: column; width: 100%; box-sizing: border-box;"; 
                phoneWrapper.innerHTML = ` 
                    <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; margin-bottom: 4px; text-align: left;">Primary Contact Phone <span style="color: #b91c1c;">*</span></label> 
                    <input type="tel" id="global_contact_phone" name="global_contact_phone" required class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important;"> 
                `; 
                patchSectionWrapper.appendChild(phoneWrapper); 
            } 

            // Granular Insertion Gate 3: Owner Row
            if (!ownerField && !patchSectionWrapper.querySelector('#global_company_owner')) { 
                const ownerWrapper = document.createElement("div"); 
                ownerWrapper.className = "form-group-wrapper manual-interceptor-patch"; 
                ownerWrapper.style.cssText = "display: flex; flex-direction: column; width: 100%; box-sizing: border-box;"; 
                ownerWrapper.innerHTML = ` 
                    <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; margin-bottom: 4px; text-align: left;">Sole Company Owner / Authorized Person <span style="color: #b91c1c;">*</span></label> 
                    <input type="text" id="global_company_owner" name="global_company_owner" required class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important;"> 
                `; 
                patchSectionWrapper.appendChild(ownerWrapper); 
            } 
        } else {
            console.log("[Data Matrix] All core target components are securely present. Skipping dynamic modifications.");
        }

    } catch (err) { 
        console.error("[Data Matrix] Interceptor insertion error caught:", err); 
    } finally { 
        // FIX 4: Re-engage MutationObserver safely 
        if (isObserverActive && window.dynamicFormFileObserver) { 
            window.dynamicFormFileObserver.observe(formContainer, { childList: true, subtree: true }); 
        } 
    } 

    // 2. STANDARD SERIALIZATION LOOP: Capture active fields safely 
    const activeFormFields = formContainer.querySelectorAll("input, select, textarea"); 
    activeFormFields.forEach(field => { 
        if (!field || field.type === 'file') return; 
        
        if (field.type === 'radio') { 
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

    console.log("[Data Matrix] All unique service fields cached persistently."); 
} 

window.serializeAndPatchActiveServiceFields = serializeAndPatchActiveServiceFields;

// ============================================================================ // 
// 🛒 STEP 2 DYNAMIC CART ADD-ON REGISTRY: INJECTION RUNTIME (REFACTORED)       // 
// ============================================================================ // 
window.executeDynamicAddonCompilation = function(targetFieldRef, explicitContextOverride) { 
    // 🛡 LIFECYCLE RECOVERY ANCHOR 
    if (!window._tempAddonContext) { 
        console.warn("[Addon Engine] _tempAddonContext metadata registry unassigned. Constructing operational recovery frame..."); 
        const liveParams = new URLSearchParams(window.location.search); 
        const resolvedServiceKey = window.currentServiceKey || window.routeActiveServiceKey || String(liveParams.get('service') || "llc-formation").toLowerCase().trim(); 
        
        // Deep clone helper to protect original catalog registry arrays from mutator leaks 
        const fetchProtectedCatalog = () => { 
            const sourceCatalog = window.FILINGS4U_ADDON_CATALOG || (window.formRegistry ? window.formRegistry[`${resolvedServiceKey}-addons`] : null) || {}; 
            try { 
                return typeof structuredClone === 'function' ? structuredClone(sourceCatalog) : JSON.parse(JSON.stringify(sourceCatalog)); 
            } catch (e) { 
                // FIXED: Robust deep cloning map fallback logic for inner properties
                const fallbackClone = {};
                Object.keys(sourceCatalog).forEach(k => {
                    if (sourceCatalog[k] && typeof sourceCatalog[k] === 'object') {
                        fallbackClone[k] = Object.assign({}, sourceCatalog[k]);
                    } else {
                        fallbackClone[k] = sourceCatalog[k];
                    }
                });
                return fallbackClone;
            } 
        }; 

        window._tempAddonContext = { 
            baseTierPrice: parseFloat(localStorage.getItem('f4u_base_tier_price')) || 0, 
            baseGovAgencyFee: parseFloat(localStorage.getItem('f4u_gov_agency_fee')) || 0, 
            incrementalAddonTotal: 0, 
            descriptiveInvoiceRowsHtml: "", 
            localizedProcessedIds: [], 
            EXTENSIBLE_ADDON_CATALOG: fetchProtectedCatalog() 
        }; 
    } 

    // Apply explicit context parameter overrides if supplied from event thread handlers 
    if (explicitContextOverride && typeof explicitContextOverride === "object") { 
        window._tempAddonContext = Object.assign(window._tempAddonContext, explicitContextOverride); 
    } 

    const c = window._tempAddonContext; 
    if (!c) { 
        console.error("[Addon Engine Fatal] Critical Error: Metadata workspace could not be recovered. Aborting."); 
        return { addonTotal: 0, subtotal: 0, grandTotal: 0 }; 
    } 

    // Reset calculation accumulators locally every pass to prevent runaway compound totals 
    let passIncrementalTotal = 0; 
    let passInvoiceRowsHtml = ""; 

    // Safely verify baseline figures to avoid NaN math breakdown loops 
    c.baseTierPrice = parseFloat(c.baseTierPrice) || 0; 
    c.baseGovAgencyFee = parseFloat(c.baseGovAgencyFee) || 0; 

    // Isolate execution tracking scopes so array objects cannot run away on re-calculation cascades 
    c.localizedProcessedIds = []; 

    // Evaluate flags dynamically against your window options AND local storage memory registers 
    Object.keys(c.EXTENSIBLE_ADDON_CATALOG || {}).forEach(flagKey => { 
        const addon = c.EXTENSIBLE_ADDON_CATALOG[flagKey]; 
        if (!addon || !addon.id) return; 

        // FIXED: Replaced unsafe direct window pollution lookups with explicit variable verification types
        const storedFieldState = localStorage.getItem(`wizard_field_${addon.id}`); 
        let rawMemoryValue = undefined;
        if (typeof window[flagKey] === "boolean" || typeof window[flagKey] === "string") {
            rawMemoryValue = window[flagKey];
        }

        const isFlagTrue = rawMemoryValue === true || 
                          rawMemoryValue === "yes" || 
                          String(rawMemoryValue) === "true" || 
                          storedFieldState === "true" || 
                          storedFieldState === true; 

        if (!isFlagTrue) return; 
        if (c.localizedProcessedIds.includes(addon.id)) return; 

        const fixedItemPrice = parseFloat(addon.price) || 0; 
        passIncrementalTotal += fixedItemPrice; 

        // Added distinct data attribute namespace ('data-addon-row') to prevent clearing core invoice fields
        passInvoiceRowsHtml += ` 
            <div class="summary-item-row dynamic-addon-invoice-row" data-addon-row="true" data-id="${addon.id}" style="display: flex !important; justify-content: space-between !important; font-size: 0.9rem; color: #64748b; margin-top: 4px; width: 100% !important; box-sizing: border-box; clear: both; float: none;"> 
                <span style="text-align: left;">+ ${addon.name}</span> 
                <span style="font-family: monospace; font-weight: 700; color: #10b981; margin-left: auto;">$${fixedItemPrice.toFixed(2)}</span> 
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
        // FIXED SELECTOR: Clears elements ONLY if they match our specific dynamic add-on namespace tag, protecting base fields
        const existingAddonRows = invoiceContainer.querySelectorAll('.dynamic-addon-invoice-row[data-addon-row="true"]'); 
        existingAddonRows.forEach(row => row.remove()); 

        if (c.descriptiveInvoiceRowsHtml.trim() !== "") { 
            const templateNode = document.createElement('div'); 
            templateNode.innerHTML = c.descriptiveInvoiceRowsHtml.trim(); 
            
            const elementsToAppend = Array.from(templateNode.children); 
            elementsToAppend.forEach(element => { 
                invoiceContainer.appendChild(element); 
            }); 
        } 
    } 

    // Sync legacy elements and sidebar item values cleanly 
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

    const grandDisplays = [ 
        "summary-grand-total-display", 
        "invoice-grand-total-display", 
        "grand-total-display", 
        "checkout-total-display", 
        "payment-gateway-total-display", 
        "wizard-sticky-total-value" 
    ]; 
    grandDisplays.forEach(id => { 
        const el = document.getElementById(id); 
        if (el) el.textContent = '$' + finalizedGrandTotal.toFixed(2); 
    }); 

    window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal; 
    console.log(`[Addon Engine Success] Pricing matrices updated. Grand total: $${finalizedGrandTotal.toFixed(2)}`); 
    
    return { addonTotal: c.incrementalAddonTotal, subtotal: aggregatedFilingSubtotal, grandTotal: finalizedGrandTotal }; 
};


// ============================================================================ // 
// 🏁 PART 1 OF 2: DYNAMIC LIFECYCLE PARAMETER DISCOVERY ENGINE                 // 
// ============================================================================ // 
function getActiveServicePathContext() { 
    // 1. Scan memory registers for active route hooks 
    if (window.routeActiveServiceKey && String(window.routeActiveServiceKey).trim() !== "") { 
        return String(window.routeActiveServiceKey).toLowerCase().trim(); 
    } 
    if (window.currentServiceKey && String(window.currentServiceKey).trim() !== "") { 
        return String(window.currentServiceKey).toLowerCase().trim(); 
    } 
    // 2. Reflect directly against real-time browser address parameters 
    const activeParams = new URLSearchParams(window.location.search); 
    const parameterExtractedKey = activeParams.get('service'); 
    if (parameterExtractedKey) { 
        return String(parameterExtractedKey).toLowerCase().trim(); 
    } 
    // FIXED: Safely returns empty string context instead of violating the zero-hardcode comment rule
    return ""; 
} 

// Global execution lock tracker variables 
window.isStepTwoRenderPassCurrentlyActive = false; 
window.stepTwoMountFrameId = null; 

// ============================================================================ // 
// 🏁 PART 2 OF 2: UNIVERSAL LAYOUT ATTACHMENT CONTROLLER (CONCURRENCY-LOCKED) // 
// ============================================================================ // 
async function runStepTwoLayoutInitialization() { 
    // Early exit safety guard prevents recursive template wiping cascades 
    if (window.isStepTwoRenderPassCurrentlyActive === true) { 
        console.log("[Step 2 Lifecycle] Canceled duplicate render pass: Compilation engine is already running."); 
        return; 
    } 

    // Resolve your explicit HTML target placeholder node using our view router 
    const placeholderContainer = typeof window.initializeStep2AssetRouter === "function" ? 
        window.initializeStep2AssetRouter() : 
        (document.getElementById("step-2-onboarding-fields-canvas") || document.getElementById("step-2-injection-placeholder")); 

    if (window.stepTwoMountFrameId) { 
        cancelAnimationFrame(window.stepTwoMountFrameId); 
        window.stepTwoMountFrameId = null; 
    } 

    if (!placeholderContainer) { 
        console.warn("[Step 2 Lifecycle Abort] Base layout placeholder container missing from DOM. Deferring to central master timeline loop."); 
        return; 
    } 

    // 🛑 ANTI-DUPLICATION IMMUTABLE GATE: Terminate instantly if the placeholder container is already initialized
    if (placeholderContainer.getAttribute("data-step2-initialized") === "true") {
        console.log("[Step 2 Lifecycle Guard] Base container already contains a fully built form. Aborting duplicate render pass.");
        return;
    }

    console.log("[Step 2] funnel entrance captured. Initiating questionnaire mount pass..."); 

    // Resolve target context
    let targetServiceSlug = getActiveServicePathContext(); 
    if (!targetServiceSlug) { 
        // Fallback gracefully to corporate baseline if path contexts evaluate empty
        targetServiceSlug = "llc-formation";
    } 

    try { 
        // Arm the concurrency lock block 
        window.isStepTwoRenderPassCurrentlyActive = true; 
        console.log(`[Step 2 Lifecycle] Dispatched compiler pass for context token: "${targetServiceSlug}"`); 

        // Hide Step 1 UI frames cleanly 
        const parentPanelBlock = document.getElementById("step-panel-1") || document.getElementById("step-1"); 
        if (parentPanelBlock) { 
            parentPanelBlock.classList.remove("active"); 
            parentPanelBlock.style.setProperty("display", "none", "important"); 
        } 

        // Expose Step 2 UI canvas layout frames natively 
        const stepTwoPanel = document.getElementById("step-panel-2") || document.getElementById("step-2"); 
        if (stepTwoPanel) { 
            stepTwoPanel.classList.add("active"); 
            stepTwoPanel.style.setProperty("display", "block", "important"); 
            stepTwoPanel.style.setProperty("visibility", "visible", "important"); 
            stepTwoPanel.style.setProperty("opacity", "1", "important"); 
        } 

        // Execute form structures rendering injection tracking 
        const finalFormHydratorEngine = window.executeStepTwoFormFieldsHydrationOnly || window.executeStepTwoDynamicFormInjection; 
        if (typeof finalFormHydratorEngine === "function") { 
            console.log("[Step 2 Lifecycle] Compiling active corporate form elements into layout views..."); 

            // 1. Physically compile corporate questionnaire fields onto screen canvas 
            await finalFormHydratorEngine(placeholderContainer, targetServiceSlug); 

            // Set persistent structural lock attribute to protect DOM hierarchy permanently
            placeholderContainer.setAttribute("data-step2-initialized", "true");

            // 2. FIXED DEBOUNCED CALCULATION COUPLING
            setTimeout(() => { 
                if (typeof window.executeDynamicAddonCompilation === "function") { 
                    console.log("[Step 2 Lifecycle Sync] Context established. Executing baseline pricing calculations pass..."); 
                    window.executeDynamicAddonCompilation(); 
                } 
            }, 80); 
        } else { 
            console.error("[Step 2 Lifecycle Failure] Compiler engine 'executeStepTwoFormFieldsHydrationOnly' is uninitialized."); 
        } 
    } catch (lifecycleError) { 
        console.error("[Step 2 Lifecycle Crash Exception]:", lifecycleError); 
    } finally { 
        // Release the concurrency execution lock safely under all outcome states 
        window.isStepTwoRenderPassCurrentlyActive = false; 
        console.log("[Step 2 Lifecycle] Initialization loop sequence successfully wrapped and idle."); 
    } 
} 

// Expose methods to global scope mapping registries 
window.getActiveServicePathContext = getActiveServicePathContext; 
window.runStepTwoLayoutInitialization = runStepTwoLayoutInitialization; 
window.initializeDynamicServiceFormLayout = runStepTwoLayoutInitialization;


// ===================================================================== // 
// 📁 FIX inside step-2.js: Scoped Canvas Deduplication Engine          // 
// ===================================================================== // 
function enforceStrictDomDeduplication(wrapperElement) { 
    if (!wrapperElement) return; 
    
    console.log("[Canvas Engine] Scanning viewport for rogue section duplication blocks..."); 

    // FIXED: Query based on structural components and dataset attributes rather than language strings
    const activeSegments = wrapperElement.querySelectorAll(".service-form-part-segment");
    const uniquePartIndices = new Set();
    const segmentsToWipeOut = [];

    activeSegments.forEach(segment => {
        const stepIndexAttr = segment.getAttribute('data-part-index');
        if (!stepIndexAttr) return;

        // If we have already parsed this part index once on the page, flag subsequent matches for removal
        if (uniquePartIndices.has(stepIndexAttr)) {
            segmentsToWipeOut.push(segment);
        } else {
            // Keep the very first unique instance safe in the DOM tracking register
            uniquePartIndices.add(stepIndexAttr);
        }
    });

    // ✅ FIXED SEPARATION SELECTION: Safely delete trailing copies *after* traversal completes to avoid memory corruption
    if (segmentsToWipeOut.length > 0) {
        console.log(`[Canvas Engine] Identified ${segmentsToWipeOut.length} duplicate structural segments. Clearing trailing rows...`);
        segmentsToWipeOut.forEach(duplicateSegment => {
            try {
                duplicateSegment.remove();
            } catch (domErr) {
                console.warn("[Canvas Engine] Failed to remove individual trailing node segment:", domErr);
            }
        });
    }

    // Secondary deep verification sweep for legacy nested carriers
    const looseCarriers = wrapperElement.querySelectorAll(".sub-form-markup-carrier");
    const trackingCarrierKeys = new Set();

    looseCarriers.forEach(carrier => {
        // Generate a strict structural fingerprint map key based on class layout or child inputs
        const targetInputNode = carrier.querySelector("input, select, textarea");
        const structuralFingerprintKey = targetInputNode ? (targetInputNode.id || targetInputNode.name) : null;

        if (!structuralFingerprintKey) return;

        if (trackingCarrierKeys.has(structuralFingerprintKey)) {
            console.log(`[Canvas Engine] Removing redundant duplicate sub-carrier node: "${structuralFingerprintKey}"`);
            carrier.remove();
        } else {
            trackingCarrierKeys.add(structuralFingerprintKey);
        }
    });

    console.log("[Canvas Engine Deduplication Check Complete] Viewport stabilized.");
} 

// Bind method cleanly back to global window boundaries 
window.enforceStrictDomDeduplication = enforceStrictDomDeduplication;

















































(() => {
"use strict";

// Keep runtime execution flags isolated securely within local lexical scope
let isCompilerCurrentlyExecuting = false;

// ============================================================================ // 
// 🔌 ENTERPRISE LIFECYCLE INITIALIZATION INTERLOCK TRACER                     // 
// ============================================================================ // 
function bootstrapStepTwoLifecycleEngine() { 
    const urlParams = new URLSearchParams(window.location.search); 
    const activeServiceSlug = window.currentServiceKey || window.routeActiveServiceKey || String(urlParams.get('service') || "").toLowerCase().trim(); 

    let isPluginDataReady = false; 
    if (typeof formRegistry !== 'undefined') { 
        if (Array.isArray(formRegistry) && formRegistry.length > 0) { 
            isPluginDataReady = true; 
        } else if (typeof formRegistry === 'object' && formRegistry !== null && activeServiceSlug && formRegistry[activeServiceSlug]) { 
            isPluginDataReady = true; 
        } 
    } 

    if (typeof verifiedTemplates !== 'undefined' && Array.isArray(verifiedTemplates) && verifiedTemplates.length > 0) { 
        isPluginDataReady = true; 
    } 

    const accurateActiveStep = parseInt(window.currentWizardActiveStep, 10); 

    // Helper wrapper to enforce strict execution boundaries across proxy and observer hooks
    const safelyTriggerLayoutCompilation = () => {
        if (isCompilerCurrentlyExecuting) {
            console.log("[Step 2 Interlock Guard] Render process already active. Aborting compilation stack.");
            return;
        }
        if (typeof window.renderStepTwoLayoutMarkup === "function") {
            try {
                isCompilerCurrentlyExecuting = true;
                window.renderStepTwoLayoutMarkup();
            } catch (renderErr) {
                console.error("[Step 2 Interlock Fatal] Crash during layout rendering pass:", renderErr);
            } finally {
                isCompilerCurrentlyExecuting = false;
            }
        }
    };

    if (isPluginDataReady) { 
        if (accurateActiveStep === 2) { 
            console.log(`[Step 2 Lifecycle] Service data ready for "${activeServiceSlug}". Executing template layout compile...`); 
            safelyTriggerLayoutCompilation();
        } else { 
            console.log(`[Step 2 Lifecycle Guard] Data ready early for "${activeServiceSlug}". Postponing render until Step 2 is active.`); 
        } 
    } else { 
        console.log(`[Step 2 Lifecycle Waiting] Lazy-loaded file for "${activeServiceSlug}" is still in transit. Initializing proxy intercept trap...`); 

        // FIXED: Added safe global verification check before accessing property
        const existingRegistry = window.formRegistry;
        const isAlreadyTrapped = existingRegistry && (existingRegistry.isProxyTrapped || (typeof existingRegistry === 'object' && existingRegistry.__isProxyTrapped));

        if (!isAlreadyTrapped) {
            const baseTargetRegistry = existingRegistry || {}; 
            window.proxyRenderDebounceTimeout = null; 

            window.formRegistry = new Proxy(baseTargetRegistry, { 
                get(target, propertyKey, receiver) { 
                    if (propertyKey === 'isProxyTrapped' || propertyKey === '__isProxyTrapped') return true;
                    if (propertyKey === 'constructor') return Object; 
                    const value = Reflect.get(target, propertyKey, receiver); 
                    return typeof value === 'function' ? value.bind(target) : value; 
                }, 
       set(target, propertyKey, incomingValue) { 
    const result = Reflect.set(target, propertyKey, incomingValue); 

    clearTimeout(window.proxyRenderDebounceTimeout); 
    window.proxyRenderDebounceTimeout = setTimeout(() => { 
        requestAnimationFrame(() => { 
            // 1. Dynamic Check: Fallback safely if wizard target strings or steps are not resolved
            const activeStepRaw = window.currentWizardActiveStep;
            if (activeStepRaw === undefined || activeStepRaw === null) {
                // If the tracking state isn't ready yet, compile layout dependencies safely
                safelyTriggerLayoutCompilation();
                return;
            }

            const currentStepCheck = parseInt(activeStepRaw, 10); 
            
            // 2. FIXED STEP RANGE ALLOWANCE: Ensure Step 1 (Applicant Info) and Step 2 (Contact/Addons) 
            // can cleanly execute layout compilations when the next button is clicked!
            if (isNaN(currentStepCheck) || currentStepCheck < 0 || currentStepCheck > 3) { 
                console.warn(`[Step 2 Proxy Guard] Navigation out of bounds. Layout suppressed for Step: ${currentStepCheck}`);
                return; 
            } 
            
            // 3. Trigger compilation silently to pass control to the navigation wizard handler
            safelyTriggerLayoutCompilation();
        }); 
    }, 40); 
    return result; 
}

            }); 
        }

        // Separate container observer instantiation tracks to stop layout feedback cascades
        const masterPanelTwoNode = document.getElementById("step-2-onboarding-fields-canvas") || document.getElementById("step-2-injection-placeholder"); 
        if (masterPanelTwoNode) { 
            const backupDataObserver = new MutationObserver((mutations) => { 
                const currentStepCheck = parseInt(window.currentWizardActiveStep, 10); 
                if (currentStepCheck !== 2) { 
                    console.warn(`[Step 2 Observer Guard] Suppressed DOM layout mutation pass. User is currently on Step ${currentStepCheck}.`); 
                    return; 
                } 

                // FIXED: Ignore automatic dropdown option injections to stop feedback cascades
                const isDropdownMutation = mutations.some(m => { 
                    const node = m.target; 
                    return node.tagName === 'SELECT' || node.id === 'ein_business_state' || node.id === 'ein_mailing_state'; 
                }); 
                if (isDropdownMutation) return; 

                // FIXED INTERLOCK ENTRY: Only compile if the script itself isn't actively compiling layout modules
                if (!isCompilerCurrentlyExecuting) {
                    console.log("[Step 2 Lifecycle Observer] Structural DOM mutation captured. Syncing markup assembly..."); 
                    safelyTriggerLayoutCompilation();
                }
            }); 
            backupDataObserver.observe(masterPanelTwoNode, { childList: true, subtree: true }); 
        } 
    } 
} // <--- FIXED: Safely closed the bootstrapStepTwoLifecycleEngine function block

// ============================================================================ // 
// 📦 STEP 2: ADDON DATA ENGINE (ENCAPSULATED)                                  // 
// ============================================================================ // 
function executeDynamicAddonCompilation() { 
    if (window.currentWizardActiveStep > 2) { 
        console.log("[Step 2 Engine] Step locked. Blocking external state clearing pipelines."); 
        return; 
    } 
    console.log("[Step 2 Engine] Compiling active metadata registry allocations safely..."); 
    const step2Canvas = document.getElementById("step-2-onboarding-fields-canvas") || document.getElementById("step-2-injection-placeholder"); 
    if (!step2Canvas) return; 

    const collectedAddons = []; 
    step2Canvas.querySelectorAll("input[type='checkbox']:checked").forEach(checkbox => { 
        collectedAddons.push({ 
            id: checkbox.id, 
            price: parseFloat(checkbox.dataset.price) || 0, 
            label: checkbox.dataset.label || "Optional Service Addon" 
        }); 
    }); 

    // FIXED: Strong safety check around centralized step-state serialization lookups
    if (window.wizardCentralState && typeof window.wizardCentralState.updateStepData === "function") { 
        window.wizardCentralState.updateStepData(2, "addons", collectedAddons); 
    } else { 
        console.warn("[Step 2 Engine Tracker] Warning: window.wizardCentralState mapping layer not initialized yet."); 
    } 
} 
window.executeDynamicAddonCompilation = executeDynamicAddonCompilation;

// Coordinate framework startup execution paths cleanly 
if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", bootstrapStepTwoLifecycleEngine); 
} else { 
    bootstrapStepTwoLifecycleEngine(); 
}

})();