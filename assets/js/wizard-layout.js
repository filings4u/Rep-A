// ============================================================================
// ⚡ 4.5 UNIFIED ASYNCHRONOUS FORM INJECTION SYSTEM FOR STEP 2 (TIMING SECURED)
// ============================================================================

/**
 * Asynchronous-safe, event-reactive form injection engine.
 * Pure dynamic architecture: Watches memory spaces reactively to eliminate race conditions.
 * @param {boolean} isTransitionOverrideActive - Bypasses boundary index safeguards if forced.
 */
async function executeStepTwoDynamicFormInjection(isTransitionOverrideActive) {
  const isForcedRoute = isTransitionOverrideActive === true;
  const currentStep = typeof currentWizardActiveStep !== "undefined" ? currentWizardActiveStep : 1;
  
  // Enforce rigid tracking step boundaries to isolate workflows
  if (!isForcedRoute && currentStep !== 2) {
    // Safe exit boundary block
    return;
  }
  
  const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root");
  if (!fieldsRoot) return;
  
  // Extract clean service keys programmatically from workspace tracking inputs
  let currentServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value || "";
  let cleanKey = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
  
  // Generate the target functional camelCase identifier name expected in global memory
  const camelCaseFunctionName = "build" + cleanKey.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') + "Form";
  
  /**
   * Promise-driven High-Frequency Namespace Poller.
   * Resolves late-binding network scripts immediately upon global registration.
   */
  const pollForGlobalNetworkAsset = (functionName, maxAttempts = 50, intervalDelayMs = 40) => {
    return new Promise((resolve) => {
      let attempts = 0;
      // Check memory instantly before entering tracking loops
      if (typeof window[functionName] === "function") {
        return resolve(window[functionName]);
      }
      const pollingInterval = setInterval(() => {
        if (typeof window[functionName] === "function") {
          clearInterval(pollingInterval);
          resolve(window[functionName]);
        } else if (attempts >= maxAttempts) {
          clearInterval(pollingInterval);
          resolve(null); // Enforce strict timeout boundary limits
        }
        attempts++;
      }, intervalDelayMs);
    });
  };
  
  // Look up the active module target inside the window context registers
  let dynamicBuilderFunction = typeof window[camelCaseFunctionName] === "function" ? window[camelCaseFunctionName] : null;
  
  if (!dynamicBuilderFunction) {
    console.warn(`[Network Latency Intercept] Asset "${camelCaseFunctionName}" pending. Injecting safety container layout.`);
    // Mount a clean placeholder visual component immediately to maintain layout integrity
    fieldsRoot.innerHTML = `
    <div style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: var(--light-bg, #f8fafc); width: 100%; box-sizing: border-box;">
      <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i> Loading your customized compliance profile forms...
    </div>`;
    // Await late-binding assets over the network line asynchronously
    dynamicBuilderFunction = await pollForGlobalNetworkAsset(camelCaseFunctionName);
  }
  
// ============================================================================ //
// 🛠️ STEP 2 DYNAMIC INJECTION FORMS HOOK AND ALGORITHMIC SCHEMA BUILDER       //
// ============================================================================ //

/**
 * Programmatically injects dynamic layout profiles into step 2 form slots.
 * Automatically switches between dynamic builder functions and algorithmic fallbacks.
 * @param {boolean} isInitialBoot - Dictates if the sweep handles initial recovery loops.
 */
function executeStepTwoDynamicFormInjection(isInitialBoot) {
  console.log("[Dynamic Injection] Initializing form injection wrapper pass...");
  
  const fieldsRoot = document.getElementById("wizard-dynamic-form-target") || 
                     document.getElementById("dynamic-form-fields") || 
                     document.querySelector(".wizard-dynamic-fields-slot");
                     
  if (!fieldsRoot) {
    console.warn("[Form Injection Fail] Target root DOM node element container placeholder missing from context.");
    return;
  }

  // Resolve active keys out of global address tracking context parameters securely
  const cleanKey = String(window.routeActiveServiceKey || "corporate-filing").toLowerCase().trim().replace(/[\s_]+/g, "-");
  
  // Convert hyphens to camelCase function naming metrics cleanly (e.g. series-llc -> buildSeriesLlc)
  const formattedCamelPart = cleanKey.replace(/-([a-z])/g, function(g) { 
    return g[1].toUpperCase(); 
  });
  const camelCaseFunctionName = "build" + formattedCamelPart.charAt(0).toUpperCase() + formattedCamelPart.slice(1);
  
  // Safe dynamic lookups directly out of the window namespace parameters matrix
  const dynamicBuilderFunction = window[camelCaseFunctionName];

  // Clear out temporary loading skeleton block instantly once resource arrives
  fieldsRoot.innerHTML = "";
  const stateOptions = window.globalStateDropdownOptionsHtml || (typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml(window.selectedFormationStateCode || "") : "");

  if (typeof dynamicBuilderFunction === "function") {
    // Execute the draw sequence programmatically from the local resource frame
    fieldsRoot.innerHTML = dynamicBuilderFunction(stateOptions);
    console.log(`[Form Injection Success] Dynamic asset "${camelCaseFunctionName}" successfully drawn to target root.`);
  } else {
    console.warn(`[Form Injection Info] External asset "${camelCaseFunctionName}" not found on disk. Generating automated input layouts library...`);
    
    // Programmatically generates an intuitive compliance form structure based on active dynamic service properties.
    let algorithmicFormFieldsMarkup = "";
    const activeServiceLabel = cleanKey.replace(/-/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
    const sanitizedInputId = cleanKey.replace(/-/g, '_');

    algorithmicFormFieldsMarkup += `
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="${sanitizedInputId}_identifier" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">
          ${activeServiceLabel} Identifier / Reference Number <span style="color: #ef4444;">*</span>
        </label>
        <input type="text" id="${sanitizedInputId}_identifier" name="${sanitizedInputId}_identifier" required placeholder="Provide record data details..." class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        <div class="wizard-error-message" id="err_${sanitizedInputId}_identifier" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px;">
        <label for="${sanitizedInputId}_operational_status" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">
          Target Configuration Parameters Profile <span style="color: #ef4444;">*</span>
        </label>
        <select id="${sanitizedInputId}_operational_status" name="${sanitizedInputId}_operational_status" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight:600;">
          <option value="standard" selected>Standard General System Configuration Protocol</option>
          <option value="priority">Priority Accelerated Operational Tracking Mode</option>
        </select>
        <div class="wizard-error-message" id="err_${sanitizedInputId}_operational_status" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>`;

    if (algorithmicFormFieldsMarkup) {
      fieldsRoot.innerHTML = algorithmicFormFieldsMarkup;
      console.log(`[Form Injection Success] Dynamic asset "${camelCaseFunctionName}" loaded cleanly from algorithmic schema builders.`);
    } else {
      // Fallback to scanning active script properties on the window namespace if an inline block is absent
      let backupFormFunction = null;
      const fallbackSearchKeys = Object.keys(window).filter(function(k) {
        return k.startsWith("build") && k.endsWith("Form") && typeof window[k] === "function";
      });

      if (fallbackSearchKeys.length > 0) {
        backupFormFunction = window[fallbackSearchKeys[0]];
      }

      if (typeof backupFormFunction === "function") {
        console.warn(`[Form Injection Fallback] Defaulting dynamically to alternative available framework asset parameters: ${fallbackSearchKeys[0]}`);
        fieldsRoot.innerHTML = backupFormFunction(stateOptions);
      } else {
        fieldsRoot.innerHTML = `
          <div style="grid-column: span 2; text-align: center; padding: 25px; color: #ef4444; font-weight: 700; border: 1px dashed #ef4444; border-radius: 8px; width: 100%; box-sizing: border-box;">
            ⚠ Dynamic layout module components could not be synchronized over the network. Please refresh the onboarding portal.
          </div>`;
      }
    }
  }

  // Restore saved memory spaces into dynamically drawn layouts safely if assigned
  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function" && isInitialBoot !== true) {
    window.cacheAndRestoreWizardFormStatesVanilla(true);
  }
}

// Attach securely to window register scope context parameters
window.executeStepTwoDynamicFormInjection = executeStepTwoDynamicFormInjection;


/**
 * Dynamic fallback validator tool.
 * Detects algorithmic fields on screen and verifies input status.
 * @returns {boolean} Status specifying form layout validation validity.
 */
function validateAlgorithmicFallbackFields() {
  let isValid = true;
  
  const currentServiceKey = window.routeActiveServiceKey || "";
  const sanitizedInputId = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-").replace(/-/g, '_');
  
  const idInput = document.getElementById(`${sanitizedInputId}_identifier`);
  const idErr = document.getElementById(`err_${sanitizedInputId}_identifier`);
  
  const markInvalid = function(inputEl, errorEl, msg) {
    if (!errorEl || !inputEl) return;
    errorEl.textContent = msg;
    errorEl.style.setProperty("display", "block", "important");
    inputEl.style.setProperty("border", "1px solid #ef4444", "important");
    isValid = false;
  };

  const markValid = function(inputEl, errorEl) {
    if (!errorEl || !inputEl) return;
    errorEl.style.setProperty("display", "none", "important");
    errorEl.style.textContent = "";
    inputEl.style.removeProperty("border");
  };

  // If the automated fallback elements are actively mounted to the DOM and visible, validate them
  if (idInput && idErr) {
    if (idInput.offsetWidth > 0 || idInput.offsetHeight > 0) {
      const currentVal = idInput.value ? String(idInput.value).trim() : "";
      if (!currentVal) {
        markInvalid(idInput, idErr, "Please provide the required identification record data details.");
      } else {
        markValid(idInput, idErr);
      }
    } else {
      // Clear error states cleanly if elements have been hidden programmatically
      markValid(idInput, idErr);
    }
  }

  return isValid;
}

// Bind cleanly back into universal global window scope references safely
window.validateAlgorithmicFallbackFields = validateAlgorithmicFallbackFields;


// ============================================================================ //
// 🏛️ MASTER REGULATORY FORM FIELD INJECTION ENGINE (UNIVERSAL CONFIG ROUTER) //
// ============================================================================ //

/**
 * Asynchronous-safe event-reactive form layout injection core router.
 * Pure dynamic taxonomy architecture: Eliminates hardcoded service string matchers.
 * @param {string|null} serviceKey - Dynamic active funnel pathway classification handle token.
 */
function executeDynamicRegulatoryFieldInjection(serviceKey) {
    const rootFieldContainer = document.getElementById("dynamic-onboarding-fields-root") || 
                               document.getElementById("wizard-dynamic-form-target");
    
    if (!rootFieldContainer) {
        console.error("[Regulatory Injection] Critical Error: Root container element placeholder not found in DOM.");
        return;
    }

    // Standardize key inputs cleanly
    const activeKey = String(serviceKey || window.routeActiveServiceKey || "").toLowerCase().trim();
    if (!activeKey) {
        console.warn("[Regulatory Injection] Postponing injection pass: Active service key is uninitialized.");
        return;
    }

    // 1. DYNAMIC DATA LOOKUP: Query configuration dynamically using your central config engine
    let resolvedConfig = null;
    if (typeof window.getPricingConfiguration === "function") {
        resolvedConfig = window.getPricingConfiguration(activeKey);
    }

    // Fall back to scanning the central data node directly if the utility method is missing
    if (!resolvedConfig) {
        const rawDatabaseSource = window.CENTRAL_SERVICE_PLAN_DB || 
                                  (window.GLOBAL_COMPANY_PRICING ? window.GLOBAL_COMPANY_PRICING.packages : null);
        resolvedConfig = rawDatabaseSource?.[activeKey];
    }

    // Extract runtime variables directly from the dynamic configuration mapping
    const targetLayoutFamily = resolvedConfig?.layoutFamily || "default";
    const customBuilderMethodName = resolvedConfig?.formBuilderMethod || null;
    const dropdownStatesHtml = window.globalStateDropdownOptionsHtml || "";
    
    console.log(`[Regulatory Injection] Dynamic context resolved: "${activeKey}" -> Family: [${targetLayoutFamily}]`);

    // Reset layout target container
    rootFieldContainer.innerHTML = "";
    let compiledLayoutHtml = "";

    // 2. DYNAMIC METHOD INVOCATION: Call the dedicated layout builder string method from global memory
    if (customBuilderMethodName && typeof window[customBuilderMethodName] === "function") {
        console.log(`[Regulatory Injection] Executing custom configuration builder: window.${customBuilderMethodName}()`);
        compiledLayoutHtml = window[customBuilderMethodName](dropdownStatesHtml);
    } 
    // Fallback: If no explicit method name is defined in your config file, use the target family layout method
    else {
        // Generates dynamic method signature conversions automatically (e.g., "llc" -> "buildLlcFieldsLayoutHtml")
        const formattedFamilyName = targetLayoutFamily.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        const structuralMethodSignature = `build${formattedFamilyName}FieldsLayoutHtml`;

        if (typeof window[structuralMethodSignature] === "function") {
            console.log(`[Regulatory Injection] Executing family layout mapping: window.${structuralMethodSignature}()`);
            compiledLayoutHtml = window[structuralMethodSignature](dropdownStatesHtml);
        } 
        // Zero Hardcoding Absolute Safety Fallback: Use the algorithmic layout renderer
        else if (typeof window.executeStepTwoDynamicFormInjection === "function") {
            console.log(`[Regulatory Injection] Routing pass to automated algorithmic backup builder engine.`);
            window.executeStepTwoDynamicFormInjection(false);
            return;
        }
    }

    // 3. RENDER WORKFLOW BINDINGS
    if (compiledLayoutHtml) {
        rootFieldContainer.innerHTML = compiledLayoutHtml;
        console.log(`[Regulatory Injection Success] Dynamic layout drawn cleanly to viewport view anchors.`);
        
        // Re-hydrate state caches instantly
        if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
            window.cacheAndRestoreWizardFormStatesVanilla(true);
        }
    } else {
        console.error(`[Regulatory Injection Failure] Unable to dynamically compile any layout html for context: "${activeKey}"`);
    }
}

// Bind cleanly back into universal global window scope references safely
window.executeDynamicRegulatoryFieldInjection = executeDynamicRegulatoryFieldInjection;


  console.log(`[Regulatory Injection] Selected Form Family Layout Context: "${targetLayoutFamily}" for key: "${activeKey}"`);

  // Helper utility pass to verify script function health before drawing layouts
  const renderFormLayoutTemplateContent = (layoutBuilderFunction, fallbackArgument, optionalSecondArg) => {
    if (typeof window[layoutBuilderFunction] === "function") {
      return typeof optionalSecondArg !== "undefined" ? window[layoutBuilderFunction](fallbackArgument, optionalSecondArg) : window[layoutBuilderFunction](fallbackArgument);
    }
    
    console.warn(`[Injection Latency Alert] Structural layout routine "${layoutBuilderFunction}" is temporarily unavailable inside active memory scopes.`);
    
    // Safety check fallback: attempt to re-run the specific form injector to resolve race conditions
    setTimeout(() => {
      if (typeof window.executeStepTwoDynamicFormInjection === "function") {
        window.executeStepTwoDynamicFormInjection(true);
      }
    }, 150);

    return `
    <div style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: var(--light-bg, #f8fafc); width: 100%; box-sizing: border-box;">
      <i class="fa-solid fa-circle-notch fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i> Assembling and initializing your customized ${targetLayoutFamily.toUpperCase()} compliance profile...
    </div>`;
  };

  let dynamicBuilderName = "";
  if (targetLayoutFamily === "sole-prop") {
    dynamicBuilderName = "buildInformalEntityFieldsLayoutHtml";
  } else if (targetLayoutFamily === "maintenance" && activeKey.includes("qualification")) {
    dynamicBuilderName = "buildForeignQualificationFieldsLayoutHtml";
  } else {
    const sanitizedFamilyToken = targetLayoutFamily.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    dynamicBuilderName = "build" + sanitizedFamilyToken + (targetLayoutFamily === "maintenance" ? "FieldsLayoutHtml" : "FormationFieldsLayoutHtml");
    
    if (typeof window[dynamicBuilderName] !== "function") {
      dynamicBuilderName = "build" + sanitizedFamilyToken + "RegistrationFieldsLayoutHtml";
    }
  }

  // Final rendering execution dispatch
  if (targetLayoutFamily === "financial" || targetLayoutFamily === "tax-filing" || targetLayoutFamily === "regulatory" || targetLayoutFamily === "insurance" || targetLayoutFamily === "trucking") {
    rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildExtendedFamiliesFieldsLayoutHtml", targetLayoutFamily, activeKey);
  } else {
    rootFieldContainer.innerHTML = renderFormLayoutTemplateContent(dynamicBuilderName, activeKey);
  }

  if (typeof window.autoDiscoverAndHookAddressNodes === "function") {
    window.autoDiscoverAndHookAddressNodes();
  }
}

// Bind cleanly back to global workspace scopes
window.executeDynamicRegulatoryFieldInjection = executeDynamicRegulatoryFieldInjection;

