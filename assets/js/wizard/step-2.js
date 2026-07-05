// ============================================================================
// 🏢 STEP 2 PANEL: LEGAL ENTITY PROFILE & FORM STATE GENERATOR INFRASTRUCTURE
// ============================================================================

/**
 * HTML Layout Injection Module
 * Programmatically assembles Step 2 card panels into the placeholder.
 */
function renderStepTwoLayoutMarkup() {
    // 🔍 ADAPTIVE MOUNTING: Find the core wrapper first, fallback to the hardcoded ID
    let placeholder = document.querySelector(".isolated-form-payload-container") || 
                      document.getElementById("step-2-injection-placeholder");
                      
    if (!placeholder) {
        console.warn("[Step 2 Script] Crucial structural target container missing from DOM. Attempting recovery...");
        // Auto-recovery backup: look for any active fields root element
        const fallbackRoot = document.getElementById("dynamic-onboarding-fields-root") || 
                             document.querySelector("[data-step-container]");
        if (fallbackRoot) {
            placeholder = fallbackRoot;
        } else {
            console.error("[Step 2 Script Fatal] No valid mounting engine target found in layout workspace.");
            return;
        }
    }

    // Unhide the primary placeholder canvas row explicitly
    placeholder.style.setProperty("display", "block", "important");
    placeholder.style.setProperty("visibility", "visible", "important");
    placeholder.style.setProperty("opacity", "1", "important");


    // Inject the inner markup content layout (Removed duplicate ID conflict)
    placeholder.innerHTML = `
        <!-- ============================================================================ -->
        <!-- 🏢 STEP 2 CONTAINER CARD FRAMEWORK -->
        <!-- ============================================================================ -->
        <div class="step-panel-form-card" data-step="2" style="width: 100%; box-sizing: border-box; clear: both;">
            
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

            <div class="wizard-action-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 30px; border-top: 1px solid var(--border, #e2e8f0); padding-top: 20px; box-sizing: border-box; clear: both;">
                <button type="button" class="btn-wizard-alt" onclick="if(typeof window.switchWizardActiveViewLayout === 'function') window.switchWizardActiveViewLayout('1');" style="cursor: pointer; background: #cbd5e1; color: #0a1f44; padding: 10px 20px; border: none; border-radius: 6px; font-weight: 600;">Back</button>
                <button type="button" class="btn-wizard-save-progress" id="sidebarFallbackLogoutBtn" style="cursor: pointer; background: #0a1f44; color: white; padding: 10px 20px; border: none; border-radius: 6px; font-weight: 600; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-floppy-disk"></i> Save Progress</button>
                <button type="button" class="btn-wizard-main" onclick="if(typeof window.processStepTwoFunnelAdvancementGate === 'function') { window.processStepTwoFunnelAdvancementGate(event); } else { if(typeof window.switchWizardActiveViewLayout === 'function') window.switchWizardActiveViewLayout('3'); }" style="cursor: pointer; background: #10b981; color: white; padding: 10px 24px; border: none; border-radius: 6px; font-weight: 700;">Continue to Tiers</button>
            </div>

        </div>
    `;

    console.log("[Step 2 Script] Master layout template cleanly compiled without ID duplications.");

    // Hand over control safely to your dynamic field compiler block
    const hydratorFunction = window.executeStep2ComplianceAssetStreaming || window.executeStepTwoDynamicFormInjection;
    if (typeof hydratorFunction === "function") {
        hydratorFunction(null, window.routeActiveServiceKey || "corporations");
    }
}

// Bind method cleanly back to global window boundaries
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

  // ============================================================================
  // 🛡️ ISOLATE TRUE STRUCTURAL STEP CANVAS CONTAINER
  // ============================================================================
  const activeStepNumber = window.currentWizardActiveStep || localStorage.getItem("f4u_wizard_active_step_fallback") || "2";
  
  // FIXED: Do not look at the loading fields root container directly for the spinner check
  const currentActiveStepView = document.getElementById(`step-panel-${activeStepNumber}`) || 
                                document.querySelector(".wizard-panel.active") || 
                                document.getElementById("dynamic-onboarding-fields-root");

  if (!currentActiveStepView) {
    console.log("[State Engine] Save pass skipped: No active step panel context located.");
    return;
  }

  // FIXED: Check if the template contains a spinner inside the nested loading text specifically, not the whole panel
  const loadingIndicator = currentActiveStepView.querySelector(".dynamic-form-loading-placeholder");
  if (loadingIndicator || currentActiveStepView.innerHTML.includes("fa-spinner")) {
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

  const allInputElements = currentActiveStepView.querySelectorAll("input, select, textarea");

  // Protect historical data records if current sub-panel inputs haven't hydrated yet
  if (allInputElements.length === 0) return;

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

// Ensure variable linkage globally
window.saveWizardFormStatesVanilla = saveWizardFormStatesVanilla;


// ============================================================================
// 🔌 STEP 2 HOOK GATEWAY INITIALIZATION ROUTERS
// ============================================================================

/**
 * LIFE-CYCLE ROUTING BRIDGE:
 * Automatically runs the network downloader function when Step 2 loads to pull service sub-scripts.
 */
function runStepTwoLayoutInitialization() {
  console.log("[Step 2] Mounting template layouts into screen canvas placeholders...");
  
  // Force the HTML layout compilation engine to clear and build the container nodes
  if (typeof renderStepTwoLayoutMarkup === "function") {
    renderStepTwoLayoutMarkup();
  } else {
    console.error("[Step 2 Fatal] renderStepTwoLayoutMarkup function is missing.");
  }

  // FIXED: Fallback chain to find the true structural container if the target box wasn't built yet
  let fieldsRootTargetBox = document.getElementById("dynamic-onboarding-fields-root") || 
                            document.querySelector(".isolated-form-payload-container");

  // Robust query param extraction fallback to prevent empty service string bugs
  const urlParams = new URLSearchParams(window.location.search);
  const activeServiceKey = window.routeActiveServiceKey || String(urlParams.get('service') || "").toLowerCase().trim() || "corporations";

  // Safely pass control to the actual form builders instead of broken save references
  const dynamicFormHydrator = window.executeStep2ComplianceAssetStreaming || window.executeStepTwoDynamicFormInjection;

  if (typeof dynamicFormHydrator === "function") {
    console.log(`[Step 2 Lifecycle] Handing container context over to data hydrator for: "${activeServiceKey}"`);
    // Pass the actual found container element directly into the hydrator if it expects a target node reference
    dynamicFormHydrator(fieldsRootTargetBox, activeServiceKey);
  } else {
    console.error("[Step 2 Fatal] Core data stream handler function (executeStep2ComplianceAssetStreaming/executeStepTwoDynamicFormInjection) not found on global window object.");
  }
}

/**
 * Form progression routing interlock validation checker block.
 */
window.processStepTwoFunnelAdvancementGate = function(event) {
  if (event && event.preventDefault) event.preventDefault();
  console.log("[Step 2 Validation] Running data integrity compilation checks...");

  const urlParams = new URLSearchParams(window.location.search);
  const serviceSlugKey = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim() || "corporations";
  const validatorKeyName = `${serviceSlugKey}-part1-validation`;
  
  const activeValidatorObject = window.formRegistry ? window.formRegistry[validatorKeyName] : null;

  if (activeValidatorObject && typeof activeValidatorObject.validate === "function") {
    const result = activeValidatorObject.validate();
    if (!result.isValid) {
      alert(`Validation Requirements Blocked:\n\n- ${result.errors.join('\n- ')}`);
      return;
    }
  } else {
    console.warn(`[Step 2 Validation] Warning: No registered validator object found for key: "${validatorKeyName}"`);
  }

  // Capture valid inputs cleanly
  if (typeof window.saveWizardFormStatesVanilla === "function") {
    window.saveWizardFormStatesVanilla();
  }

  // Securely switch viewport over to Step 3 (Tiers / Pricing Matrix)
  if (typeof window.switchWizardActiveViewLayout === "function") {
    window.switchWizardActiveViewLayout('3');
  }
};

// Global Functional Variable Namespace Exports
window.runStepTwoLayoutInitialization = runStepTwoLayoutInitialization;
window.initializeDynamicServiceFormLayout = runStepTwoLayoutInitialization;


// ============================================================================
// ⚙️ MODULE: CACHE AND STATE RECOVERY SYSTEM ENGINE LOGIC
// ============================================================================
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

  // ============================================================================
  // RECOVER PATH: Pulls data out of local storage and repopulates the DOM
  // ============================================================================
  if (isExecutionInitialLoad) {
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
            
            // FIXED: Added absolute checks for document mounting safety before dispatching events
            if (inputNode.isConnected && (inputNode.offsetWidth > 0 || inputNode.offsetHeight > 0)) {
              try {
                inputNode.dispatchEvent(new Event('change', { bubbles: true }));
                inputNode.dispatchEvent(new Event('input', { bubbles: true }));
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
          targetNode.value = localStorage.getItem(storageKey);
          if (targetNode.isConnected && (targetNode.offsetWidth > 0 || targetNode.offsetHeight > 0)) {
            try {
              targetNode.dispatchEvent(new Event('change', { bubbles: true }));
            } catch (dispatchErr) {
              console.warn(`[State Engine] Suppressed storage sync event crash: ${standardHtmlId}`, dispatchErr);
            }
          }
        }
      }
    });

    window.isWizardCurrentlyRestoringStateVanilla = false;
    console.log("[State Engine] State recovery parameters parsed and synchronized cleanly.");
  }
}

window.cacheAndRestoreWizardFormStatesVanilla = cacheAndRestoreWizardFormStatesVanilla;

// ============================================================================
// FIX: DELAY DATA HYDRATION UNTIL DOM PLATFORM ENGINE STABILIZES COMPLETELY
// ============================================================================
if (!window.hasWizardHydrationListenerAttached) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
        window.cacheAndRestoreWizardFormStatesVanilla(true);
      }
    }, 150);
  });
  window.hasWizardHydrationListenerAttached = true;
}


/**
 * Unified Form State Utility Engine
 * Programmatically preserves inputs, applies cryptographic ciphers, and restores DOM data safely.
 */
function cacheAndRestoreWizardFormStatesVanilla(isExecutionInitialLoad = false) {
  const cacheKeyNamespace = "f4u_wizard_onboarding_state";

  // Cryptographic translation utility matrix (Handles Unicode safely)
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

  // ============================================================================
  // 🔄 RECOVERY MODE: Triggered when 'isExecutionInitialLoad' is explicitly true
  // ============================================================================
  if (isExecutionInitialLoad === true) {
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
            // Protect runtime animations from crashing step transitions
            if (inputNode.isConnected && (inputNode.offsetWidth > 0 || inputNode.offsetHeight > 0)) {
              inputNode.dispatchEvent(new Event('change', { bubbles: true }));
              inputNode.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }
        });
      }
    } catch (jsonErr) {
      console.error("State data recovery parse error loop encountered: ", jsonErr);
    }

    // Synchronize legacy step-5 standalone tracking fields
    Object.keys(localStorage).forEach(storageKey => {
      if (storageKey.startsWith("wizard_field_")) {
        const standardHtmlId = storageKey.replace("wizard_field_", "");
        let targetNode = document.getElementById(standardHtmlId) || document.querySelector(`[name="${standardHtmlId}"]`);
        if (targetNode && !targetNode.value) {
          targetNode.value = localStorage.getItem(storageKey);
          if (targetNode.isConnected && (targetNode.offsetWidth > 0 || targetNode.offsetHeight > 0)) {
            targetNode.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }
    });

    window.isWizardCurrentlyRestoringStateVanilla = false;
    return; // Halt recovery execution path smoothly
  }

  // ============================================================================
  // 💾 CAPTURE MODE: Triggered automatically when saved data is pushed mid-funnel
  // ============================================================================
  if (window.isWizardCurrentlyRestoringStateVanilla) return;

  const currentActiveStepView = document.getElementById("dynamic-onboarding-fields-root") || 
                                document.querySelector(".isolated-form-payload-container") ||
                                document.querySelector(".wizard-panel.active");

  // Do not sweep elements if the dynamic framework spinner loader is still active
  if (!currentActiveStepView || currentActiveStepView.innerHTML.includes("fa-spinner")) return;

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
} // <--- FIXED: THIS CLOSING BRACKET WAS MISSING

// Bind method cleanly back to global window boundaries
window.cacheAndRestoreWizardFormStatesVanilla = cacheAndRestoreWizardFormStatesVanilla;


// ============================================================================
// ⚙️ COMBINED DATA PIPELINE: FORM STATE PRESERVATION, CRYPTO, & HYDRATION
// ============================================================================
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

  // ============================================================================
  // 🔄 RECOVER PATH: Runs on true initial boot to populate inputs out of storage
  // ============================================================================
  if (isExecutionInitialLoad === true) {
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
            if (inputNode.isConnected && (inputNode.offsetWidth > 0 || inputNode.offsetHeight > 0)) {
              inputNode.dispatchEvent(new Event('change', { bubbles: true }));
              inputNode.dispatchEvent(new Event('input', { bubbles: true }));
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
          targetNode.value = localStorage.getItem(storageKey);
          if (targetNode.isConnected && (targetNode.offsetWidth > 0 || targetNode.offsetHeight > 0)) {
            targetNode.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }
    });

    window.isWizardCurrentlyRestoringStateVanilla = false;
    return; // Halt recovery runtime execution safely here
  }

  // ============================================================================
  // 💾 CAPTURE MODE: Triggered automatically when saved data is pushed mid-funnel
  // ============================================================================
  if (window.isWizardCurrentlyRestoringStateVanilla) return;

  const currentActiveStepView = document.getElementById("dynamic-onboarding-fields-root") || 
                                document.querySelector(".isolated-form-payload-container") ||
                                document.querySelector(".wizard-panel.active");

  // Do not sweep elements if the dynamic framework spinner loader is still active
  if (!currentActiveStepView || currentActiveStepView.innerHTML.includes("fa-spinner")) return;

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

// Bind method cleanly back to global window boundaries
window.cacheAndRestoreWizardFormStatesVanilla = cacheAndRestoreWizardFormStatesVanilla;

// ============================================================================
// 💾 SAVE PATH: Runs dynamically on user interaction to scrape current inputs
// ============================================================================
function forceWizardInputStateScrapePass() {
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

  if (window.isWizardCurrentlyRestoringStateVanilla) return;

  try {
    const currentCacheData = JSON.parse(localStorage.getItem(cacheKeyNamespace) || "{}");
    
    // TARGET ISOLATION: Scrapes ONLY the active wizard step so hidden fields can't erase data
    const currentActivePanel = document.getElementById("dynamic-onboarding-fields-root") || 
                               document.querySelector(".isolated-form-payload-container") || 
                               document.querySelector(".wizard-panel.active");

    if (!currentActivePanel || currentActivePanel.innerHTML.includes("fa-spinner")) return;

    const inputs = currentActivePanel.querySelectorAll("input, select, textarea");
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
    console.log("[State Engine] Targeted active field inputs securely captured.");
  } catch (saveErr) {
    console.error("State data data saving write loop error encountered: ", saveErr);
  }
} // <--- FIXED: FUNCTION SCOPE TERMINATES SAFELY HERE WITHOUT DROPPING AN ERROR

// Bind cleanly back into universal global window scope references safely
window.forceWizardInputStateScrapePass = forceWizardInputStateScrapePass;



// ============================================================================
// 🔌 REAL-TIME EVENT LISTENERS FOR USER INPUT CAPTURE (DEBOUNCED & IMMUNE TO LOOPS)
// ============================================================================

// Self-contained debouncer to prevent rapid layout paint triggers from freezing the browser window.
window.f4uWizardSaveThrottlerGate = null;

function triggerSafeThrottledStateCapture() {
  clearTimeout(window.f4uWizardSaveThrottlerGate);
  window.f4uWizardSaveThrottlerGate = setTimeout(() => {
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
      window.cacheAndRestoreWizardFormStatesVanilla(false);
    }
  }, 300); // Wait 300ms after the user finishes typing before executing a DOM sweep
}

// FIXED: Broadened targets to capture inputs inside either step-panel-form-card or standard panels
document.addEventListener("input", (e) => {
  if (e.target && (e.target.closest(".wizard-panel") || e.target.closest(".step-panel-form-card") || e.target.closest("#dynamic-onboarding-fields-root"))) {
    triggerSafeThrottledStateCapture();
  }
});

document.addEventListener("change", (e) => {
  // Only capture true user interaction updates, bypass programmatic system events
  if (e.target && (e.target.closest(".wizard-panel") || e.target.closest(".step-panel-form-card") || e.target.closest("#dynamic-onboarding-fields-root")) && e.isTrusted) {
    triggerSafeThrottledStateCapture();
  }
});

// FIXED: Setup a global helper mutation channel so the Core script can trigger recovery manually when transitions occur
window.executeDynamicStepStateHydrationFallback = function() {
  console.log("[State Engine] Forcing post-render synchronization sweep...");
  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(true);
  }
};

// Boot recovery parameters cleanly once on DOM tree ready behind a small frame offset delay
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
      window.cacheAndRestoreWizardFormStatesVanilla(true);
    }
  }, 100);
});


// ============================================================================
// 📊 STEP 2 UNIFIED INJECTION MATRIX: SYSTEM SCHEMAS DEEP STREAMER (REPAIRED)
// ============================================================================
function executeStep2ComplianceAssetStreaming() {
  const originalDb = window.UPSELLS_ROUTER_DATABASE;

  // 🟢 FIXED MOUNT DELAY: If database isn't compiled yet, exit quietly without crashing!
  if (!originalDb) {
    console.log("[Sync Engine] UPSELLS_ROUTER_DATABASE pending initialization. Deferring streaming pass...");
    return;
  }

  // Deep structural extraction block to break Object.freeze locks reliably
  const databaseClone = {};
  Object.keys(originalDb).forEach(key => {
    if (Array.isArray(originalDb[key])) {
      databaseClone[key] = originalDb[key].map(item => (typeof item === 'object' && item !== null) ? { ...item } : item);
    } else if (typeof originalDb[key] === 'object' && originalDb[key] !== null) {
      databaseClone[key] = JSON.parse(JSON.stringify(originalDb[key]));
    } else {
      databaseClone[key] = originalDb[key];
    }
  });

  console.log("[Sync Engine] Immutable database configurations un-frozen and cloned successfully.");

  // Define tracking verticals context arrays
  const activeVerticals = ["formations", "broker", "trucker", "generic"];

  // STRUCTURAL STREAMING PASS
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

  // RE-ASSIGN UNLOCKED DATA VALUE ROOT BACK TO GLOBAL CONTEXT CORES
  window.UPSELLS_ROUTER_DATABASE = databaseClone;
  console.log("[Sync Engine] Step 2 compliance schemas successfully streamed into master pricing paths.");

  // ============================================================================
  // 🎨 AUTOMATIC VISUAL INPUT FIELD GENERATOR (THE VISUAL PAINTING ENGINE)
  // ============================================================================
  const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root") || 
                     document.querySelector(".isolated-form-payload-container");
                     
  if (!fieldsRoot) {
    console.warn("[Sync Engine] Target canvas container not found. Aborting visual paint pass.");
    return;
  }

  // Isolate active items based on query strings or fall back to standard core options
  const urlParams = new URLSearchParams(window.location.search);
  const serviceType = urlParams.get("service") || window.routeActiveServiceKey || "formations";
  const targetItemsList = databaseClone[serviceType] || databaseClone["formations"] || [];

  if (targetItemsList.length === 0) {
    fieldsRoot.innerHTML = `<div style="grid-column: span 2; text-align: center; color: var(--slate, #64748b); font-weight: 500; padding: 20px 0;">No specialized compliance configurations required for this tracking profile.</div>`;
    return;
  }

  // Generate physical checkbox elements for every single item inside the array matrix
  let inputFieldsMarkup = "";
  targetItemsList.forEach(item => {
    // Read historical localStorage cache to check if the user previously checked this box
    const previousState = localStorage.getItem(`wizard_field_${item.id}`);
    const isChecked = (previousState === "true" || previousState === true) ? "checked" : "";
    
    inputFieldsMarkup += `
      <div class="form-group-wrapper" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; display: flex; align-items: flex-start; gap: 12px; width: 100%; box-sizing: border-box; text-align: left;">
        <div style="display: flex; align-items: center; height: 24px;">
          <input type="checkbox" id="${item.id}" name="${item.id}" ${isChecked} class="wizard-checkbox-input" style="width: 18px !important; height: 18px !important; margin: 0 !important; cursor: pointer; accent-color: #10b981;" onchange="if(typeof window.saveWizardFormStatesVanilla === 'function') { window.saveWizardFormStatesVanilla(); }">
        </div>
        <div style="display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 0;">
          <label for="${item.id}" style="font-weight: 700; color: #0a1f44; font-size: 0.925rem; cursor: pointer; margin: 0;">${item.name}</label>
          <span style="font-family: monospace; color: #10b981; font-weight: 700; font-size: 0.9rem;">+$${parseFloat(item.price).toFixed(2)}</span>
        </div>
      </div>
    `;
  });

  fieldsRoot.innerHTML = inputFieldsMarkup;
  console.log("[Sync Engine] UI input generation complete. Form fields drawn onto viewport successfully.");
}

// Global variable namespace exposure 
window.executeStep2ComplianceAssetStreaming = executeStep2ComplianceAssetStreaming;

// ============================================================================
// FIX: COUPLING INITIALIZATION INTERLOCK
// ============================================================================
if (!window.hasWizardInterlockListenerAttached) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const structuralPricingStreamer = window.executeStep2ComplianceAssetStreaming || window.executeStepTwoDynamicFormInjection;
      if (typeof structuralPricingStreamer === "function") {
        console.log("[Interlock] Document loaded safely. Pre-streaming active compliance asset fields...");
        structuralPricingStreamer();
      } else {
        console.log("[Interlock Warning] Deferred pre-stream pass: Handed execution control to active view switcher.");
      }
    }, 200);
  });
  window.hasWizardInterlockListenerAttached = true;
}

// ============================================================================
// 🔌 CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE (STABILIZED REBOOT)
// ============================================================================
/**
 * Master platform lifecycle execution bootstrapper.
 * Connects parameter parsers and schedules interface injections sequentially.
 */
function runUnifiedPlatformLifecycleBoot() {
  console.log("[Lifecycle Engine] Triggering application operational boot sequence...");

  // 🛡️ RUNTIME PIPELINE GUARD: Verify configuration rules before parsing
  const isCoreDatabaseReady = typeof window.getPricingConfiguration === "function" || window.CENTRAL_SERVICE_PLAN_DB || window.UPSELLS_ROUTER_DATABASE;
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

  // ============================================================================
  // FIX: REPAIRED SYNTAX TYPE CRASH TO PREVENT RUNTIME LIFECYCLE HALTING
  // ============================================================================
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

  // Initialize tracking layouts database safely
  if (typeof window.autoInjectMainWebsitePricingPlan === "function") {
    window.autoInjectMainWebsitePricingPlan();
  } else if (typeof window.initializeUrlParameterParserEngineVanilla === "function") {
    window.initializeUrlParameterParserEngineVanilla();
  }

  if (typeof window.initializeDigitalSignatureMirrorSync === "function") {
    window.initializeDigitalSignatureMirrorSync();
  }

  // 🟢 FIXED STEP NAVIGATION ROUTER CHECK:
  // Identify the target view step during structural transition passes
  const currentActiveStepIndex = parseInt(window.currentWizardActiveStep, 10) || 1;

  if (currentActiveStepIndex === 2) {
    console.log("[Lifecycle Router] Step 2 transition detected. Forcing dynamic script execution pipeline...");
    
    // 1. Compile the master Step 2 card layouts onto the screen
    if (typeof window.renderStepTwoLayoutMarkup === "function") {
      window.renderStepTwoLayoutMarkup();
    }
    
    // 2. Stream asset checkboxes into the fields container wrapper
    const structuralPricingStreamer = window.executeStep2ComplianceAssetStreaming || window.executeStepTwoDynamicFormInjection;
    if (typeof structuralPricingStreamer === "function") {
      structuralPricingStreamer();
    }
    
    // 3. Hydrate state elements securely after checkboxes mount to DOM
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
      window.cacheAndRestoreWizardFormStatesVanilla(true);
    }
  } else {
    // Standard execution track for all other step modules (Steps 1, 3 to 7)
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

  // This code line can now execute safely without being choked by a syntax crash!
  if (typeof window.renderActiveWizardStepUiLayout === "function") {
    window.renderActiveWizardStepUiLayout();
  }

  console.log("[Lifecycle Engine Success] All operational layers initialized safely.");
}

// Map safely back to global scope records instantly
window.runUnifiedPlatformLifecycleBoot = runUnifiedPlatformLifecycleBoot;

// ============================================================================
// 🔘 CORPORATE FORM INTERACTIVE ROUTING EVENT CONTROLLERS (MATCHING LAYOUT)
// ============================================================================

function toggleCorporationSharesWorkflow(selectedValue) {
  const wrapper = document.getElementById("corp_custom_shares_wrapper");
  if (!wrapper) return;
  
  // Toggle field visibility based on whether they select custom stock structures
  wrapper.style.display = (selectedValue === "custom") ? "flex" : "none";
  
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
}

function toggleCorporationBylawsProcurement(selectedValue) {
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    // Toggle specific corporate kit upsell pricing flags
    window.customSelectedCorpKitServiceActive = (selectedValue === "include");
    window.updateDynamicPricingMatrixVanilla();
  }
}

function toggleCorporationEinReasonField(selectedValue) {
  const wrapper = document.getElementById("corp_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "foreign") ? "flex" : "none";
  }
}

function toggleCorporationDirectorWorkflow(selectedValue) {
  const wrapper = document.getElementById("corp_custom_director_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "multiple") ? "flex" : "none";
  }
}

// Bind corporate methods cleanly to window context to guarantee inline attributes find them
window.toggleCorporationSharesWorkflow = toggleCorporationSharesWorkflow;
window.toggleCorporationBylawsProcurement = toggleCorporationBylawsProcurement;
window.toggleCorporationEinReasonField = toggleCorporationEinReasonField;
window.toggleCorporationDirectorWorkflow = toggleCorporationDirectorWorkflow;

// ============================================================================
// 🛠️ STEP 2 COMPONENT: FIXED DERECURSIVE DBA ENGINE LISTENER BINDINGS
// ============================================================================
window.bindDbaEngineConditionListeners = function() {
  // FIXED: Expanded selector array context to locate any dynamic step elements safely
  const targetComponents = document.querySelectorAll(
    "#step-2-injection-placeholder input, #step-2-injection-placeholder select, #step-2-injection-placeholder textarea, " +
    "#dynamic-onboarding-fields-root input, #dynamic-onboarding-fields-root select, #dynamic-onboarding-fields-root textarea, " +
    ".isolated-form-payload-container input, .isolated-form-payload-container select, .isolated-form-payload-container textarea"
  );

  if (targetComponents.length === 0) {
    console.log("[DBA Engine Warning] Postponing attachment: Active field root inputs are not painted yet.");
    return;
  }

  targetComponents.forEach(component => {
    if (!component) return;
    
    // FIX: Stop the infinite cascade by exiting early if this element already has listeners bound
    if (component.dataset.dbaListenersAttached === "true") return;

    console.log(`[DBA Engine] Binding dynamic condition listeners to field element: #${component.id || 'input-field'}`);
    
    component.addEventListener("change", function(e) {
      if (typeof window.toggleFederalTaxInventoryCostVisibility === "function") {
        window.toggleFederalTaxInventoryCostVisibility(e);
      }
    });

    // Mark the element as successfully hooked into the event stack
    component.dataset.dbaListenersAttached = "true";
  });
};

// FIXED: Removed the direct script load window.setTimeout trigger that was firing prematurely before DOM hydration.
// Access this method by adding a clean hook invoke inside your main text component builder loop instead!


// ============================================================================
// 📊 PART 4: LLC MEMBERSHIP CONTROLLER (REPAIRED SYNTAX MATRICES)
// ============================================================================

function handleMembershipDropdownChange(selectElement) {
  var chosenValue = selectElement.value;
  var isSingleMember = (chosenValue === "1");
  var singleMemberBox = document.getElementById("single-member-question-wrapper");
  var membersBox = document.getElementById("dynamic-members-fields-root");

  if (!singleMemberBox || !membersBox) return;

  singleMemberBox.innerHTML = "";
  membersBox.innerHTML = "";

  if (isSingleMember) {
    // FIXED: Restored the complete structural opening select element tag with dynamic routing methods
    singleMemberBox.innerHTML = `
      <div class="wizard-input-group" style="margin-top: 14px; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; grid-column: span 2; box-sizing: border-box; width: 100%; display: flex; flex-direction: column; gap: 6px;">
        <label for="sole_member_choice" style="font-weight: 700; color: #0a1f44; display: block; margin-bottom: 2px; font-size: 0.85rem;">Are you the 1 Member of this company? *</label>
        
          <option value="">-- Choose Option --</option>
          <option value="yes">Yes, I am the sole owner</option>
          <option value="no">No, someone else is the owner</option>
        </select>
      </div>
    `;

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

// ============================================================================
// 📊 PART 1 OF 2: COMPLIANCE FORM GATES & MODAL CLOSE ANIMATIONS (UNIFIED)
// ============================================================================

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

// Export the methods safely to global scopes window records
window.triggerNewEntrantAuditComplianceChecklistPopup = triggerNewEntrantAuditComplianceChecklistPopup;
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal;
window.toggleNewEntrantAuditLetterDetails = toggleNewEntrantAuditLetterDetails;


// ============================================================================
// 📡 LATE-BINDING MUTATION LISTENER BRIDGE
// ============================================================================
if (!window.hasWizardMutationObserverBound) {
  document.addEventListener("DOMContentLoaded", () => {
    const mainFormSlotNode = document.getElementById("dynamic-onboarding-fields-root") || 
                             document.querySelector(".isolated-form-payload-container") || 
                             document.body;

    if (mainFormSlotNode) {
      window.dynamicFormFileObserver = new MutationObserver(() => {
        if (typeof window.autoDiscoverAndHookInteractiveDbaFields === "function") {
          // FIXED: Pause the observer before mutating elements to prevent an infinite loop crash
          window.dynamicFormFileObserver.disconnect();
          
          window.autoDiscoverAndHookInteractiveDbaFields();
          
          // Resume observing safely once mutations finish executing
          window.dynamicFormFileObserver.observe(mainFormSlotNode, { childList: true, subtree: true });
        }
      });
      window.dynamicFormFileObserver.observe(mainFormSlotNode, { childList: true, subtree: true });
    }
  });
  window.hasWizardMutationObserverBound = true;
}

// ============================================================================
// 📦 GLOBAL LAYERS EXPOSURE AND CORE LISTENER REGISTRATIONS
// ============================================================================

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
  // FIXED: Expanded tracking scopes to pick up buttons built inside core injection panels (.isolated-form-payload-container)
  const continueBtnStep2 = document.querySelector("#step-2-injection-placeholder .btn-wizard-main") || 
                           document.querySelector(".isolated-form-payload-container .btn-wizard-main") ||
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
    continueBtnStep2.removeAttribute("onclick");
    continueBtnStep2.onclick = function(event) {
      if (typeof window.processStepTwoFunnelAdvancementGate === "function") {
        return window.processStepTwoFunnelAdvancementGate(event);
      }
    };

    // Mark the element as successfully hooked into the event stack to satisfy the safety guard
    continueBtnStep2.dataset.triggersAttached = "true";
    console.log("[Global Exposure] Step 2 navigation control buttons securely routed to verification gate.");
    
    // Clear any lingering background timeouts safely
    clearTimeout(window.step2TriggerTimeoutGate);
  } else {
    // FIX: ONLY allow the background retry loop to fire if Step 2 is the active layout view panel context!
    const currentActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
    if (currentActiveStep === 2) {
      clearTimeout(window.step2TriggerTimeoutGate);
      window.step2TriggerTimeoutGate = setTimeout(attachStepTwoNavigationTriggers, 100);
    } else {
      console.log("[Global Exposure] Postponing button listener attachment: Wizard is not currently displaying Step 2.");
    }
  }
}

// Expose method back cleanly to global window boundaries
window.attachStepTwoNavigationTriggers = attachStepTwoNavigationTriggers;

// ============================================================================
// 🔌 MODULE: STEP 2 VIEW PORT LAYER INITIALIZATION AND SAFETY GATES
// ============================================================================

/**
 * Safely resolves the active DOM injection placeholder target for form fields.
 * @returns {HTMLElement|null} The resolved root container or null if unmounted.
 */
function initializeStep2AssetRouter() {
  // FIXED: Expanded targets to capture core isolated payload wrappers safely
  const serviceFormRootContainer = document.getElementById("dynamic-onboarding-fields-root") || 
                                   document.querySelector(".isolated-form-payload-container") ||
                                   document.getElementById("step-2-injection-placeholder") || 
                                   document.getElementById("step-panel-2") || 
                                   document.querySelector(".wizard-form-fields-root");
                                   
  if (!serviceFormRootContainer) {
    console.warn("[Asset Router Warning] Step 2 form injection target pending view state change.");
    return null;
  }
  console.log(`[Asset Router] Successfully resolved view port target: #${serviceFormRootContainer.id || 'isolated-container'}`);
  return serviceFormRootContainer;
}

// Bind cleanly back into universal global window scope references safely
window.initializeStep2AssetRouter = initializeStep2AssetRouter;

if (typeof window.attachStepTwoNavigationTriggers !== "function") {
  window.attachStepTwoNavigationTriggers = typeof attachStepTwoNavigationTriggers === "function" ? attachStepTwoNavigationTriggers : function() {};
}

// ============================================================================
// 🔄 MODULE: ASYNCHRONOUS FORM SCRAPER AND SUB-SCRIPT LOADER ENGINE (REPAIRED)
// ============================================================================
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
    checkBoxBoxes.forEach(box => {
      const boxKeyName = box.id || box.name;
      if (boxKeyName) {
        localStorage.setItem(`wizard_field_${boxKeyName}`, box.checked ? "true" : "false");
      }
    });
  } catch (preservationError) {
    console.warn("[State Engine Warning] Could not cache form data fields securely:", preservationError);
  }

  // Isolate routing slugs safely
  let currentServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value;
  if (!currentServiceKey) {
    const lastSeg = window.location.pathname.split("/").pop() || "";
    currentServiceKey = lastSeg.includes(".html") ? lastSeg.replace(".html", "") : "corporations";
  }

  let rawUrlSlug = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
  if (rawUrlSlug === "index" || !rawUrlSlug) rawUrlSlug = "corporations";

  const targetScriptFileName = (typeof SERVICE_URL_REGISTRY !== "undefined" && SERVICE_URL_REGISTRY[rawUrlSlug]) || rawUrlSlug;
  const baselineMemoryKeys = new Set(Object.keys(window).filter(k => typeof window[k] === "function"));
  const expectedScriptId = `script-dependency-${targetScriptFileName}`;

  // Target a nested block inside the fields root so we don't shred structural UI panels
  let formInjectionWrapper = fieldsRoot.querySelector(".isolated-form-payload-container");
  if (!formInjectionWrapper) {
    formInjectionWrapper = document.createElement("div");
    formInjectionWrapper.className = "isolated-form-payload-container";
    formInjectionWrapper.style.cssText = "width: 100%; display: block; clear: both;";
    fieldsRoot.appendChild(formInjectionWrapper);
  }

  // FIXED: Explicitly embed an internal dynamic root ID inside the wrapper so downstream sub-scripts can hook into it safely
  formInjectionWrapper.innerHTML = `
    <div id="dynamic-onboarding-fields-root" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; box-sizing: border-box;">
      <div class="dynamic-form-loading-placeholder" style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: #f8fafc; width: 100%; box-sizing: border-box;">
        <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i> Assembling specialized compliance filing interfaces...
      </div>
    </div>
  `;

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
            const globalKeys = Object.keys(window);
            const discoveredInitFunctionName = globalKeys.find(key => {
              const kLower = key.toLowerCase();
              const isInitFunc = typeof window[key] === "function" && kLower.startsWith("init");
              const sharesServiceKeyword = rawUrlSlug.split("-").some(word => word.length > 3 && kLower.includes(word));
              return isInitFunc && sharesServiceKeyword;
            });

            if (discoveredInitFunctionName && typeof window[discoveredInitFunctionName] === "function") {
              console.log(`[Asset Router Success] Discovered and executing initialization engine: window.${discoveredInitFunctionName}()`);
              window[discoveredInitFunctionName]();
              clearInterval(verifyFunctionBindingPool);
              resolve();
              return;
            }

            if ((window.formRegistry && window.formRegistry[targetRegistryMasterKey]) || verificationPollAttempts > 30) {
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

  // ============================================================================
  // FIX: RESOLVED THE SIGNATURE MISMATCH TARGET ROUTING LOOP
  // ============================================================================
  const finalFormHydratorEngine = window.executeStep2ComplianceAssetStreaming || window.executeStepTwoDynamicFormInjection || window.initCorporationsServices;

  if (typeof finalFormHydratorEngine === "function") {
    console.log("[Asset Router] Handoff successful. Running dynamic step field renderer...");
    
    // FIXED: Instead of wiping the layout block structure, remove ONLY the loader inner text div, leaving the root layout canvas open
    const placeholderNode = formInjectionWrapper.querySelector(".dynamic-form-loading-placeholder");
    if (placeholderNode) placeholderNode.remove();

    // Execute the visual painter function to render checkboxes safely!
    await finalFormHydratorEngine(baselineMemoryKeys, rawUrlSlug);
    
    // Trigger late-binding layout listeners now that inputs are on screen
    if (typeof window.attachStepTwoNavigationTriggers === "function") {
      window.attachStepTwoNavigationTriggers();
    }
  } else {
    console.warn("[Asset Router Critical] No valid rendering hydrator engine found for Step 2 fields.");
  }
}

window.saveActiveServiceFormStates = saveActiveServiceFormStates;


/* ============================================================================ */
/* ⚡ PART 2 OF 2: UNIVERSAL SERVICE-FORM LIFECYCLE COMPILER ENGINE (FIXED)      */
/* ============================================================================ */
async function executeStepTwoDynamicFormInjection(keysBeforeScriptLoads, rawUrlSlug) {
  console.log("[Lifecycle Engine] Starting universal template injection compilation pass...");

  // 1. PARAMETER INTERLOCK SAFETY GUARD
  if (!rawUrlSlug && typeof keysBeforeScriptLoads === "string") {
    rawUrlSlug = keysBeforeScriptLoads;
  }

  // Secondary fallback: global route state check if both are empty/invalid
  if (!rawUrlSlug && typeof getActiveServicePathContext === "function") {
    rawUrlSlug = getActiveServicePathContext();
  }

  // TARGET SELECTION FIXED: Prioritize clean placeholder anchors
  const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root") || 
                     document.getElementById("step-2-injection-placeholder") || 
                     document.getElementById("wizard-dynamic-form-target") || 
                     document.getElementById("dynamic-form-fields") || 
                     document.getElementById("step-panel-2") || 
                     document.querySelector(".wizard-dynamic-fields-slot");

  if (!fieldsRoot) {
    console.warn("[Lifecycle Engine] Aborting: Target fields root element not found.");
    return;
  }

  try {
    // Standardize slug parsing safely inside local scope boundaries
    if (!rawUrlSlug || typeof rawUrlSlug !== "string") {
      let currentServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value;
      if (!currentServiceKey) {
        const lastSeg = window.location.pathname.split("/").pop() || "";
        currentServiceKey = lastSeg.includes(".html") ? lastSeg.replace(".html", "") : "corporations";
      }
      rawUrlSlug = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
    }
    if (rawUrlSlug === "index" || !rawUrlSlug) rawUrlSlug = "corporations";

    // Standardize global state template lookup indicators safely
    const stateOptions = window.globalStateDropdownOptionsHtml || 
                         (typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml(window.selectedFormationStateCode || "") : "") || 
                         (typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? window.buildGlobalUsaStateDropdownOptionsHtml("") : "");

    const verifiedTemplates = [];
    window.formRegistry = window.formRegistry || {};

    // Dynamic Service File Wrapper Initialization (e.g., corporations -> initCorporationsServices)
    const camelCaseServiceName = rawUrlSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    let dynamicInitName = `init${camelCaseServiceName}Service`;
    if (rawUrlSlug === "corporations") dynamicInitName = "initCorporationsServices";

    if (typeof window[dynamicInitName] === "function") {
      console.log(`[Lifecycle Engine] Executing service sub-script initializer: window.${dynamicInitName}()`);
      window[dynamicInitName]();
    }

    // Master Template Rule Processing
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

    // RegEx Scanner for Multi-Step Layout Keys
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

    // 2. DOM RENDERING BLOCK WITH MIXED STEP HANDLING
    let formInjectionWrapper = fieldsRoot.querySelector(".isolated-form-payload-container");
    if (!formInjectionWrapper) {
      formInjectionWrapper = document.createElement("div");
      formInjectionWrapper.className = "isolated-form-payload-container";
      formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;";
      fieldsRoot.insertBefore(formInjectionWrapper, fieldsRoot.firstChild);
    } else {
      formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;";
    }

    if (verifiedTemplates.length === 0) {
      console.warn(`[Lifecycle Engine] No HTML templates found in formRegistry for target: "${rawUrlSlug}"`);
    }

    // Inject segments iteratively matching precise step values
    verifiedTemplates.forEach((item) => {
      let existingRow = formInjectionWrapper.querySelector(`[data-part-index="${item.step}"]`);
      if (!existingRow) {
        existingRow = document.createElement("div");
        existingRow.className = "service-form-part-segment";
        existingRow.setAttribute("data-part-index", item.step);
        existingRow.style.cssText = "grid-column: 1 / -1 !important; display: block !important; width: 100% !important; max-width: 100% !important; clear: both !important; margin-bottom: 24px !important; box-sizing: border-box;";
        formInjectionWrapper.appendChild(existingRow);
      }
      existingRow.innerHTML = item.html;
    });

    // Sort children in DOM visually by step number
    const rows = Array.from(formInjectionWrapper.children);
    rows.sort((a, b) => {
      return (parseInt(a.getAttribute("data-part-index"), 10) || 0) - (parseInt(b.getAttribute("data-part-index"), 10) || 0);
    });
    rows.forEach(row => formInjectionWrapper.appendChild(row));

    console.log(`[Lifecycle Engine Success] Form segments successfully updated for: "${rawUrlSlug}".`);
    
    if (typeof window.hydrateInjectedFormFields === "function") {
      window.hydrateInjectedFormFields(formInjectionWrapper);
    }

  } catch (compilationError) {
    console.error("[Lifecycle Engine Fatal Block Failure]", compilationError);
  }
}

// Bind method cleanly to global window boundaries
window.executeStepTwoDynamicFormInjection = executeStepTwoDynamicFormInjection;

// FIXED: Access via absolute window context map eliminates the TDZ temporal scope crash completely
window.formInjectionWrapper = document.getElementById("step-2-injection-placeholder");
window.fieldsRoot = document.getElementById("step-panel-2") || document.body;

if (window.formInjectionWrapper) {
  window.formInjectionWrapper.className = "isolated-form-payload-container";
  window.formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;";
} else {
  window.formInjectionWrapper = document.createElement("div");
  window.formInjectionWrapper.id = "step-2-injection-placeholder";
  window.formInjectionWrapper.className = "isolated-form-payload-container";
  window.formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;";
  window.fieldsRoot.insertBefore(window.formInjectionWrapper, window.fieldsRoot.firstChild);
}

// FIXED: Update remaining references inside this specific block to use the window assignment safely
const activeTemplatesArray = (typeof verifiedTemplates !== 'undefined') ? verifiedTemplates : 
                             (typeof formRegistry !== 'undefined' ? formRegistry : []);

if (activeTemplatesArray.length === 0) {
  console.warn(`[Lifecycle Engine] No HTML templates found in formRegistry`);
}

activeTemplatesArray.forEach((item) => {
  if (!item || !item.html) return;
  let runtimeTargetStepIndex = parseInt(item.step || item.stepIndex, 10) || 2;
  if (runtimeTargetStepIndex === 1) {
    runtimeTargetStepIndex = 2;
  }
  let existingRow = window.formInjectionWrapper.querySelector(`[data-part-index="${runtimeTargetStepIndex}"]`);
  if (!existingRow) {
    existingRow = document.createElement("div");
    existingRow.className = "service-form-part-segment";
    existingRow.setAttribute("data-part-index", runtimeTargetStepIndex);
    existingRow.style.cssText = "grid-column: 1 / -1 !important; display: block !important; width: 100% !important; max-width: 100% !important; clear: both !important; margin-bottom: 24px !important; box-sizing: border-box;";
    window.formInjectionWrapper.appendChild(existingRow);
  }
  existingRow.innerHTML = item.html;
});

// FIXED: Explicit window variable tracking removes local duplicate reference errors
window.rows = Array.from(window.formInjectionWrapper.children);
window.rows.sort((a, b) => {
  return (parseInt(a.getAttribute("data-part-index"), 10) || 0) - (parseInt(b.getAttribute("data-part-index"), 10) || 0);
});
window.rows.forEach(row => window.formInjectionWrapper.appendChild(row));
console.log("[Lifecycle Engine Success] Form segments successfully updated.");

if (typeof window.hydrateInjectedFormFields === "function") {
  window.hydrateInjectedFormFields(window.formInjectionWrapper);
}
if (typeof window.bindDbaEngineConditionListeners === "function") {
  window.bindDbaEngineConditionListeners();
}
if (typeof window.attachStepTwoNavigationTriggers === "function") {
  window.attachStepTwoNavigationTriggers();
}


// --- DOM RENDERING BLOCK WITH MIXED STEP HANDLING ---
let formInjectionWrapper = document.getElementById("step-2-injection-placeholder");
const fieldsRoot = document.getElementById("step-panel-2") || document.body;

if (formInjectionWrapper) {
  formInjectionWrapper.className = "isolated-form-payload-container";
  formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;";
} else {
  formInjectionWrapper = document.createElement("div");
  formInjectionWrapper.id = "step-2-injection-placeholder";
  formInjectionWrapper.className = "isolated-form-payload-container";
  formInjectionWrapper.style.cssText = "grid-column: 1 / -1 !important; width: 100% !important; max-width: 100% !important; display: block !important; clear: both !important;";
  fieldsRoot.insertBefore(formInjectionWrapper, fieldsRoot.firstChild);
}

// FIXED: Stripped duplicate variable declaration type keyword to resolve the fatal syntax block crash
activeTemplatesArray = (typeof verifiedTemplates !== 'undefined') ? verifiedTemplates : 
                       (typeof formRegistry !== 'undefined' ? formRegistry : []);

if (activeTemplatesArray.length === 0) {
  console.warn(`[Lifecycle Engine] No HTML templates found in formRegistry`);
}


// Inject segments iteratively matching precise step values
activeTemplatesArray.forEach((item) => {
  if (!item || !item.html) return;
  let runtimeTargetStepIndex = parseInt(item.step || item.stepIndex, 10) || 2;
  if (runtimeTargetStepIndex === 1) {
    runtimeTargetStepIndex = 2;
  }
  let existingRow = formInjectionWrapper.querySelector(`[data-part-index="${runtimeTargetStepIndex}"]`);
  if (!existingRow) {
    existingRow = document.createElement("div");
    existingRow.className = "service-form-part-segment";
    existingRow.setAttribute("data-part-index", runtimeTargetStepIndex);
    existingRow.style.cssText = "grid-column: 1 / -1 !important; display: block !important; width: 100% !important; max-width: 100% !important; clear: both !important; margin-bottom: 24px !important; box-sizing: border-box;";
    formInjectionWrapper.appendChild(existingRow);
  }
  existingRow.innerHTML = item.html;
});

const rows = Array.from(formInjectionWrapper.children);
rows.sort((a, b) => {
  return (parseInt(a.getAttribute("data-part-index"), 10) || 0) - (parseInt(b.getAttribute("data-part-index"), 10) || 0);
});
rows.forEach(row => formInjectionWrapper.appendChild(row));
console.log("[Lifecycle Engine Success] Form segments successfully updated.");

if (typeof window.hydrateInjectedFormFields === "function") {
  window.hydrateInjectedFormFields(formInjectionWrapper);
}
if (typeof window.bindDbaEngineConditionListeners === "function") {
  window.bindDbaEngineConditionListeners();
}
if (typeof window.attachStepTwoNavigationTriggers === "function") {
  window.attachStepTwoNavigationTriggers();
}



// ============================================================================
// 🛠️ UNIVERSAL DYNAMIC TAX/COMPLIANCE TOGGLE ELEMENT VISIBILITY CONTROLLER
// ============================================================================
window.toggleFederalTaxInventoryCostVisibility = function(targetSelectorOrEvent, programmaticFallbackNode, runSynchronously = false) {
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
      evaluationValue = triggeringElement.checked ? String(triggeringElement.value).toLowerCase().trim() : "false";
    } else if (typeof triggeringElement.value !== 'undefined' && triggeringElement.value !== null) {
      evaluationValue = String(triggeringElement.value).toLowerCase().trim();
    } else if (typeof triggeringElement.getAttribute === 'function') {
      evaluationValue = triggeringElement.dataset?.state || triggeringElement.getAttribute('data-state') || null;
      if (evaluationValue) evaluationValue = String(evaluationValue).toLowerCase().trim();
    }
  }

  // Core Mutator Engine Core Logic Execution
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
      } catch (selectorError) {}
    }

    // FIXED SIBLING FALLBACK: Prioritize structural row blocks over nested micro divs
    if (!targetContainer && triggeringElement && typeof triggeringElement.closest === 'function') {
      const structuralRow = triggeringElement.closest('fieldset') || 
                             triggeringElement.closest('.form-group-wrapper') || 
                             triggeringElement.closest('.form-row') || 
                             triggeringElement.closest('.form-group') || 
                             triggeringElement.closest('tr') || 
                             triggeringElement.closest('div');
                             
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

      // Toggle layout display natively
      targetContainer.style.display = isConditionMet ? "" : "none";

      // Handle disabled flags synchronously so the form scraping matrix never indexes them
      const childFormControls = targetContainer.querySelectorAll("input, select, textarea, button");
      childFormControls.forEach(control => {
        if (isConditionMet) {
          control.removeAttribute("disabled");
        } else {
          control.setAttribute("disabled", "true");
        }
      });
      
      console.log(`[Lifecycle Engine] Synchronized mutation completed for target: "${targetSelector || 'Relative Sibling'}". Active state: ${isConditionMet}`);
    } else {
      console.debug("[Lifecycle Engine Information] Run optimized without a direct DOM layout container target mutation.");
    }
  };

  // ============================================================================
  // SATELLITE TRANSITION SAFETY GATEWAY CONTROLLER
  // ============================================================================
  if (runSynchronously === true) {
    executeMutationLogicCore(); // Run immediately for data hydrators or save passes
  } else {
    setTimeout(executeMutationLogicCore, 25); // Safe macro-task bounce frame for live user interaction clicks
  }
};

// ============================================================================
// 🛠️ DYNAMIC MARKUP TEMPLATE FIELDS HYDRATION SYSTEM (ANTI-LOOP ENGINE)
// ============================================================================
function hydrateInjectedFormFields(formInjectionWrapper) {
  try {
    // FIX 1: Armed safety gate marker to freeze global capture loop cascades
    window.isWizardCurrentlyRestoringStateVanilla = true;
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

          // FIX 2: Only dispatch system layout events if the field is active to protect thread frames
          if (elementItem.isConnected && (elementItem.offsetWidth > 0 || elementItem.offsetHeight > 0)) {
            elementItem.dispatchEvent(new Event('change', { bubbles: true }));
            elementItem.dispatchEvent(new Event('input', { bubbles: true }));
          }

          // FIXED: Use a clean, safe evaluation execution engine instead of a broken RegEx parser string hook
          const inlineOnChange = elementItem.getAttribute('onchange');
          if (inlineOnChange && inlineOnChange.trim() !== "") {
            try {
              // Build an anonymous scope function binding 'this' explicitly to the elementItem
              const executeInlineScript = new Function('event', inlineOnChange);
              executeInlineScript.call(elementItem, new Event('change'));
            } catch (evalErr) {
              console.warn(`[Lifecycle Engine] Suppressed inline handler evaluation error for field #${elementIdentifier}:`, evalErr);
            }
          }
        }
      }
    });

    // 2. Gather and switch radio button items
    const formRadios = formInjectionWrapper.querySelectorAll("input[type='radio']");
    formRadios.forEach(radioItem => {
      const radioIdentifier = radioItem.name;
      if (radioIdentifier) {
        const savedRadioValue = localStorage.getItem(`wizard_field_${radioIdentifier}`);
        if (savedRadioValue !== null && radioItem.value === savedRadioValue) {
          radioItem.checked = true;
          
          if (radioItem.isConnected && (radioItem.offsetWidth > 0 || radioItem.offsetHeight > 0)) {
            radioItem.dispatchEvent(new Event('change', { bubbles: true }));
          }

          const inlineOnChange = radioItem.getAttribute('onchange');
          if (inlineOnChange && inlineOnChange.trim() !== "") {
            try {
              const executeInlineScript = new Function('event', inlineOnChange);
              executeInlineScript.call(radioItem, new Event('change'));
            } catch (evalErr) {
              console.warn(`[Lifecycle Engine] Suppressed inline handler evaluation error for radio ${radioIdentifier}:`, evalErr);
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
          
          if (checkboxItem.isConnected && (checkboxItem.offsetWidth > 0 || checkboxItem.offsetHeight > 0)) {
            checkboxItem.dispatchEvent(new Event('change', { bubbles: true }));
            checkboxItem.dispatchEvent(new Event('input', { bubbles: true }));
          }

          const inlineOnChange = checkboxItem.getAttribute('onchange');
          if (inlineOnChange && inlineOnChange.trim() !== "") {
            try {
              const executeInlineScript = new Function('event', inlineOnChange);
              executeInlineScript.call(checkboxItem, new Event('change'));
            } catch (evalErr) {
              console.warn(`[Lifecycle Engine] Suppressed inline handler evaluation error for checkbox #${checkboxIdentifier}:`, evalErr);
            }
          }
        }
      }
    });

    console.log("[Lifecycle Engine] Data hydration phase complete.");
  } catch (hydrationError) {
    console.warn("[Lifecycle Engine Tracking Node Block] Fallback asset hydration warning:", hydrationError);
  } finally {
    // FIX 4: Securely lift the safety gate after all DOM elements finish rendering cleanly
    window.isWizardCurrentlyRestoringStateVanilla = false;
  }
}

// Bind method cleanly to global window boundaries
window.hydrateInjectedFormFields = hydrateInjectedFormFields;


// ============================================================================
// 🛠️ SERVICE FORM DYNAMIC FIELD PATCHER & DATA INTERCEPTOR (STABILIZED)
// ============================================================================
function serializeAndPatchActiveServiceFields() {
  console.log("[Data Matrix] Dynamically serializing current service form fields...");

  // FIX 1: Look inside your true active fields rendering grid workspace container
  const formContainer = document.getElementById("dynamic-onboarding-fields-root") || 
                        document.getElementById("step-2-injection-placeholder") || 
                        document.getElementById("step-panel-2");
                        
  if (formContainer) {
    // 1. GLOBAL PATCH INTERCEPT: Force create required fields if missing
    let emailField = document.getElementById("global_contact_email") || formContainer.querySelector('input[type="email"]') || formContainer.querySelector('[id*="email"], [name*="email"]');
    if (!emailField) {
      const emailWrapper = document.createElement("div");
      emailWrapper.className = "form-group-wrapper manual-interceptor-patch";
      emailWrapper.style.cssText = "margin-bottom: 16px; display: flex; flex-direction: column; width: 100%; box-sizing: border-box;";
      emailWrapper.innerHTML = `
        <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; margin-bottom: 2px;">Contact Email Address <span style="color: #b91c1c;">*</span></label>
        <input type="email" id="global_contact_email" name="global_contact_email" required class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important;">
      `;
      // FIXED: Insert safely at the top using prepend instead of append to prevent Mutation loops
      formContainer.prepend(emailWrapper);
    }

    let phoneField = document.getElementById("global_contact_phone") || formContainer.querySelector('input[type="tel"]') || formContainer.querySelector('[id*="phone"], [name*="phone"], [id*="tel"]');
    if (!phoneField) {
      const phoneWrapper = document.createElement("div");
      phoneWrapper.className = "form-group-wrapper manual-interceptor-patch";
      phoneWrapper.style.cssText = "margin-bottom: 16px; display: flex; flex-direction: column; width: 100%; box-sizing: border-box;";
      phoneWrapper.innerHTML = `
        <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; margin-bottom: 2px;">Primary Contact Phone <span style="color: #b91c1c;">*</span></label>
        <input type="tel" id="global_contact_phone" name="global_contact_phone" required class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important;">
      `;
      formContainer.prepend(phoneWrapper);
    }

    let ownerField = document.getElementById("global_company_owner") || formContainer.querySelector('[id*="owner"], [name*="owner"], [id*="incorporator"], [id*="organizer"]');
    if (!ownerField) {
      const ownerWrapper = document.createElement("div");
      ownerWrapper.className = "form-group-wrapper manual-interceptor-patch";
      ownerWrapper.style.cssText = "margin-bottom: 16px; display: flex; flex-direction: column; width: 100%; box-sizing: border-box;";
      ownerWrapper.innerHTML = `
        <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; margin-bottom: 2px;">Sole Company Owner / Authorized Person <span style="color: #b91c1c;">*</span></label>
        <input type="text" id="global_company_owner" name="global_company_owner" required class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important;">
      `;
      formContainer.prepend(ownerWrapper);
    }
  }

  // 2. STANDARD SERIALIZATION LOOP: Capture active fields safely
  const activeFormFields = formContainer ? formContainer.querySelectorAll("input, select, textarea") : [];
  activeFormFields.forEach(field => {
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

// ============================================================================
// 🛒 STEP 2 DYNAMIC CART ADD-ON REGISTRY: INJECTION RUNTIME (PART 2 OF 2)
// ============================================================================
window.executeDynamicAddonCompilation = function() {
  const c = window._tempAddonContext;
  if (!c) {
    console.warn("[Addon Engine] Aborting compilation: _tempAddonContext metadata registry unassigned.");
    return { addonTotal: 0, subtotal: 0, grandTotal: 0 };
  }

  // FIX 1: Reset calculation accumulators locally every pass to prevent runaway compound totals
  let passIncrementalTotal = 0;
  let passInvoiceRowsHtml = "";

  // Safely verify baseline figures to avoid NaN math breakdown loops
  c.baseTierPrice = parseFloat(c.baseTierPrice) || 0;
  c.baseGovAgencyFee = parseFloat(c.baseGovAgencyFee) || 0;

  // FIXED: Isolate execution tracking scopes so array objects cannot run away on re-calculation cascades
  const catalogIds = Object.values(c.EXTENSIBLE_ADDON_CATALOG).map(a => a.id);
  c.localizedProcessedIds = []; // Clear array storage securely on entry loop passes

  // Evaluate flags dynamically against your window options AND local storage memory registers
  Object.keys(c.EXTENSIBLE_ADDON_CATALOG).forEach(flagKey => {
    const addon = c.EXTENSIBLE_ADDON_CATALOG[flagKey];
    if (!addon || !addon.id) return;

    // FIX 2: Check window context first, fallback safely to synchronized local storage input parameters
    const storedFieldState = localStorage.getItem(`wizard_field_${addon.id}`);
    const rawMemoryValue = window[flagKey];
    const isFlagTrue = rawMemoryValue === true || rawMemoryValue === "yes" || String(rawMemoryValue) === "true" || storedFieldState === "true" || storedFieldState === true;

    if (!isFlagTrue) return;
    if (c.localizedProcessedIds.includes(addon.id)) return;

    const fixedItemPrice = parseFloat(addon.price) || 0;
    passIncrementalTotal += fixedItemPrice;
    
    passInvoiceRowsHtml += `
      <div class="summary-item-row" data-id="${addon.id}" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; margin-top: 4px; width: 100%; box-sizing: border-box; clear: both;">
        <span>+ ${addon.name}</span>
        <span style="font-family: monospace; font-weight: 700; color: #10b981;">$${fixedItemPrice.toFixed(2)}</span>
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
      const templateNode = document.createElement('div');
      templateNode.innerHTML = c.descriptiveInvoiceRowsHtml.trim();
      while (templateNode.firstChild) {
        invoiceContainer.appendChild(templateNode.firstChild);
      }
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

  const grandDisplays = ["summary-grand-total-display", "invoice-grand-total-display", "grand-total-display", "checkout-total-display", "payment-gateway-total-display", "wizard-sticky-total-value"];
  grandDisplays.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '$' + finalizedGrandTotal.toFixed(2);
  });

  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;
  console.log(`[Addon Engine Success] Pricing matrices updated. Grand total: $${finalizedGrandTotal.toFixed(2)}`);
  
  return { addonTotal: c.incrementalAddonTotal, subtotal: aggregatedFilingSubtotal, grandTotal: finalizedGrandTotal };
};


// ============================================================================
// 🏁 PART 1 OF 2: DYNAMIC LIFECYCLE PARAMETER DISCOVERY ENGINE
// ============================================================================
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
  return "corporations"; // Safe universal default fallback keyword designator
}

// Global execution lock tracker variable
window.isStepTwoRenderPassCurrentlyActive = false;

// ============================================================================
// 🏁 PART 2 OF 2: UNIVERSAL LAYOUT ATTACHMENT CONTROLLER (CONCURRENCY-LOCKED)
// ============================================================================
async function runStepTwoLayoutInitialization() {
  // Early exit safety guard prevents recursive template wiping cascades
  if (window.isStepTwoRenderPassCurrentlyActive === true) {
    console.log("[Step 2 Lifecycle] Canceled duplicate render pass: Compilation engine is already running.");
    return;
  }
  
  console.log("[Step 2] funnel entrance captured. Initiating questionnaire mount pass...");

  // Resolve your explicit HTML target placeholder node using our view router
  const placeholderContainer = typeof window.initializeStep2AssetRouter === "function" ? 
                               window.initializeStep2AssetRouter() : 
                               document.getElementById("step-2-injection-placeholder") || document.getElementById("step-panel-2");

  if (!placeholderContainer) {
    console.warn("[Step 2 Lifecycle Retry] Base layout container missing. Postponing handler...");
    clearTimeout(window.stepTwoMountRetryTimeout);
    window.stepTwoMountRetryTimeout = setTimeout(runStepTwoLayoutInitialization, 100);
    return;
  }

  // Safely extract the current runtime context slug from Part 1
  const targetServiceSlug = getActiveServicePathContext();
  if (!targetServiceSlug) {
    console.error("[Step 2 Lifecycle Failure] Absolute abort: Active route context registry token cannot be resolved.");
    return;
  }

  try {
    // Arm the concurrency lock block
    window.isStepTwoRenderPassCurrentlyActive = true;
    console.log(`[Step 2 Lifecycle] Dispatched compiler pass for context token: "${targetServiceSlug}"`);

    // Clear out old layouts safely using explicit block configurations
    const parentPanelBlock = document.getElementById("step-panel-1") || document.getElementById("step-1");
    if (parentPanelBlock) {
      parentPanelBlock.classList.remove("active");
      parentPanelBlock.style.setProperty("display", "none", "important");
    }

    const stepTwoPanel = document.getElementById("step-panel-2") || document.getElementById("step-2");
    if (stepTwoPanel) {
      stepTwoPanel.classList.add("active");
      stepTwoPanel.style.setProperty("display", "block", "important");
      stepTwoPanel.style.setProperty("visibility", "visible", "important");
      stepTwoPanel.style.setProperty("opacity", "1", "important");
    }

    // FIXED: Form execution track now directly invokes the template dynamic script generator
    if (typeof window.executeStepTwoDynamicFormInjection === "function") {
      console.log("[Step 2 Lifecycle] Compiling active form elements into view framework...");
      
      // 1. Physically compile form structures onto screen canvas
      await window.executeStepTwoDynamicFormInjection(null, targetServiceSlug);

      // 2. Trigger compliance checkbox asset streaming layers once parent node mounts
      if (typeof window.executeStep2ComplianceAssetStreaming === "function") {
        console.log("[Step 2 Lifecycle] Triggering deferred compliance asset streams...");
        window.executeStep2ComplianceAssetStreaming();
      }

      // 3. Execute downstream add-on pricing totals calculations pass cleanly
      if (typeof window.executeDynamicAddonCompilation === "function") {
        window.executeDynamicAddonCompilation();
      }
    } else {
      console.error("[Step 2 Lifecycle Failure] Compiler engine 'executeStepTwoDynamicFormInjection' is uninitialized.");
    }
  } catch (lifecycleError) {
    console.error("[Step 2 Lifecycle Crash Exception]:", lifecycleError);
  } finally {
    // Release the concurrency execution lock safely under all outcome states
    window.isStepTwoRenderPassCurrentlyActive = false;
    console.log("[Step 2 Lifecycle] Initialization loop sequence successfully wrapped and idle.");
  }
}

window.runStepTwoLayoutInitialization = runStepTwoLayoutInitialization;
window.initializeDynamicServiceFormLayout = runStepTwoLayoutInitialization;
