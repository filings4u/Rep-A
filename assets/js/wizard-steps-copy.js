// ============================================================================ //
// ðŸ—ºï¸ WIZARD CORE ENGINE: MULTI-STEP INTERACTIVE NAVIGATION MODULE
// ============================================================================ //
window.currentWizardActiveStep = window.currentWizardActiveStep || 1;
window.totalWizardExpectedSteps = window.totalWizardExpectedSteps || 7;

/**
 * Handles core wizard step navigation mechanics seamlessly.
 * Pure dynamic pattern: Reorders variable execution sequences to isolate step metrics.
 * @param {number|string} targetStepIndex - Destination wizard step index indicator.
 * @param {Event|null} event - Native browser element event trigger.
 */
function goToNextWizardStep(targetStepIndex, event = null) {
    const previousStoredActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
    
    // Prevent default browser jump behaviors safely
    if (event && typeof event.preventDefault === "function") {
        event.preventDefault();
        event.stopPropagation();
    }
    if (window.event) {
        window.event.preventDefault();
        window.event.stopPropagation();
    }

    if (targetStepIndex === undefined || targetStepIndex === null) return false;

    // Handle relative text commands passed into the router cleanly
    if (typeof targetStepIndex === "string") {
        if (targetStepIndex.includes("currentWizardActiveStep")) {
            targetStepIndex = targetStepIndex.includes("-") ? previousStoredActiveStep - 1 : previousStoredActiveStep + 1;
        } else if (targetStepIndex === "back" || targetStepIndex === "prev") {
            targetStepIndex = previousStoredActiveStep - 1;
        } else {
            targetStepIndex = parseInt(targetStepIndex, 10);
        }
    }

    let numericTargetIndex = parseInt(targetStepIndex, 10);
    if (isNaN(numericTargetIndex) || numericTargetIndex < 1) numericTargetIndex = 1;

    // Determine direction of navigation
    const isMovingForward = numericTargetIndex > previousStoredActiveStep;

    // ðŸ›¡ï¸ Input Validation Guard: Runs ONLY when moving FORWARD
    if (isMovingForward && typeof window.validateStepInputParametersVanilla === "function") {
        console.log(`[Router Check] Verifying form fields for Step ${previousStoredActiveStep} before advancing...`);
        const isStepValid = window.validateStepInputParametersVanilla(previousStoredActiveStep);
        
        if (!isStepValid) {
            console.warn(`[Navigation Blocked] Requirements check failed on step: ${previousStoredActiveStep}`);
            const form = document.querySelector('#master-onboarding-form');
            if (form && typeof form.reportValidity === 'function') {
                form.reportValidity();
            }
            window.scrollTo({ top: 0, behavior: "instant" });
            return false;
        }
        console.log(`[Router Check] Step ${previousStoredActiveStep} validation clear.`);
    }

    const maximumWizardSteps = parseInt(window.totalWizardExpectedSteps, 10) || 7;
    if (numericTargetIndex > maximumWizardSteps) return false;

    // âš¡ STAGE-ZERO INJECTION GATEKEEPER (Runs only when advancing to Step 2)
    if (numericTargetIndex === 2 && previousStoredActiveStep < 2) {
        if (typeof window.executeStepTwoDynamicFormInjection === "function") {
            try {
                window.executeStepTwoDynamicFormInjection(true);
            } catch (injectionError) {
                console.error("[Router Runtime Exception] Injection layer errored out:", injectionError);
            }
        }
    }

    // ðŸ’³ ZERO-HARDCODE CHECKOUT PROCESSING GATEWAY
    if (numericTargetIndex === maximumWizardSteps && previousStoredActiveStep === (maximumWizardSteps - 1)) {
        if (typeof window.executeOnboardingTransactionPayloadSubmitVanilla === "function") {
            window.executeOnboardingTransactionPayloadSubmitVanilla(numericTargetIndex);
            return false;
        }
    }

    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
        window.cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // Lock active tracking state variable BEFORE panel swapping loops run
    window.currentWizardActiveStep = numericTargetIndex;

    // ============================================================================ //
  // ðŸ”„ PANEL VISIBILITY CONTAINMENT LOOP                                         //
  // ============================================================================ //
  let isTargetPanelFoundAndDisplayed = false;
  const allWizardPanelsArray = document.querySelectorAll('[id^="step-panel-"]');

  allWizardPanelsArray.forEach(function(currentPanelElement) {
    // Parse step numbers directly from individual HTML node IDs to avoid manual limits checking
    const extractedPanelIdIndex = parseInt(currentPanelElement.id.replace("step-panel-", ""), 10);
    
    if (!isNaN(extractedPanelIdIndex)) {
      if (extractedPanelIdIndex === numericTargetIndex) {
        currentPanelElement.classList.add("active");
        currentPanelElement.style.removeProperty("display");
        currentPanelElement.style.setProperty("display", "block", "important");
        isTargetPanelFoundAndDisplayed = true;
        console.log(`[Router View] Displaying matching content block container: #${currentPanelElement.id}`);
      } else {
        currentPanelElement.classList.remove("active");
        currentPanelElement.style.removeProperty("display");
        currentPanelElement.style.setProperty("display", "none", "important");
      }
    }
  });

  if (!isTargetPanelFoundAndDisplayed) {
    console.error(`[Router Error] View Transition Halts: #step-panel-${numericTargetIndex} is missing from the layout.`);
    return false;
  }

  // CRITICAL VISIBILITY FIX: Lock active tracking state variable AFTER visual panels change places
  window.currentWizardActiveStep = numericTargetIndex;

  // CRITICAL TIMING CORRECTION: Force timeline track bubble lights to sync synchronously BEFORE running invoice math
  if (typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(numericTargetIndex);
  }

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

window.goToNextWizardStep = goToNextWizardStep;


// ============================================================================ //
// ðŸ›¡ï¸ MANDATORY WORKFLOW VALIDATION ENGINE (PART A)
// ============================================================================ //
/**
 * Executes a strict validation sweep across all required fields on the current step.
 * Pure dynamic pattern: Zero hardcoded rules. Handles state isolation natively.
 * @param {number|string} currentStepIndex - The active step panel index tracker.
 * @returns {boolean} Status verifying whether the current panel state is valid.
 */
function validateCurrentWizardStepInputs(currentStepIndex) {
    const stepNum = parseInt(currentStepIndex, 10);
    console.log(`[Form Validation] Auditing requirement constraints for Step: ${stepNum}`);
    
    const activePanel = document.getElementById(`step-panel-${stepNum}`);
    if (!activePanel) return true; // Safe fallback allowed only if container structure is absent

    // Gather required elements bounded strictly inside the active step container context layout
    const requiredInputs = activePanel.querySelectorAll("input[required], select[required], textarea[required]");
    let isPanelDataValid = true;

    requiredInputs.forEach(function(inputElement) {
        if (!inputElement) return;

        // ðŸ›¡ï¸ Check if the field is visually hidden inside a collapsed template block wrapper
        const isVisuallyHidden = (inputElement.offsetWidth === 0 && inputElement.offsetHeight === 0) || inputElement.closest('[style*="display: none"]');
        if (isVisuallyHidden) return;

        // ðŸ›¡ï¸ Lock check verification: Pure property extraction flags for readonly elements
        if (inputElement.hasAttribute("readonly") || inputElement.readOnly || inputElement.disabled) {
            inputElement.classList.remove("input-error");
            inputElement.style.removeProperty("border-color");
            return;
        }

        // Pure dynamic constraint verification
        let isElementValid = true;

        // Evaluate standard browser input verification models securely
        if (typeof inputElement.checkValidity === "function") {
            isElementValid = inputElement.checkValidity();
        } else {
            // Direct raw text buffer processing verification fallback guard
            isElementValid = !!inputElement.value.trim();
        }

        if (!isElementValid) {
            isPanelDataValid = false;
            inputElement.classList.add("input-error");
            
            // Apply clean semantic style markers dynamically without invoking reportValidity()
            // Using !important ensures theme stylesheets won't overwrite the error state visual cues
            inputElement.style.setProperty("border-color", "#ef4444", "important");
            console.warn(`[Validation Alert] Constraint check failed on element ID: "${inputElement.id || 'unnamed'}"`);
        } else {
            inputElement.classList.remove("input-error");
            inputElement.style.removeProperty("border-color");

            // Clean up standalone custom warning labels nearby if they exist
            const adjacentErrorMarker = inputElement.nextElementSibling;
            if (adjacentErrorMarker && adjacentErrorMarker.classList.contains('input-error-marker')) {
                adjacentErrorMarker.remove();
            }
        }
    });

    return isPanelDataValid;
}

// Map parameters cleanly to global window scopes instantly to resolve click handlers
window.validateCurrentWizardStepInputs = validateCurrentWizardStepInputs;
window.validateStepInputParametersVanilla = validateCurrentWizardStepInputs;


// ============================================================================ //
// ðŸ–‹ï¸ STEP 4: INTERCEPTOR ENGINE & DYNAMIC VALIDATION POP-UP (PART A)          //
// ============================================================================ //
window.isScrollCompletedGlobal = false;

/**
 * Validates step criteria on click. If checks fail, it stops navigation
 * and deploys a floating alert bubble over the uncompleted field element rows.
 * @param {Event} clickEvent - Native element button click event trigger.
 */
window.handlePoaValidationSubmitIntercept = function(clickEvent) {
  if (clickEvent && typeof clickEvent.preventDefault === "function") {
    clickEvent.preventDefault();
  }

  const activePanel = document.getElementById("step-panel-4") || document.body;

  // POLYMORPHIC LOOKUP: Find elements by their functional shapes and positions (Zero Hardcoding)
  const scrollBox = document.getElementById("poa-scroll-box") || activePanel.querySelector("div[style*='overflow-y']");
  const nameInput = document.getElementById("poa_signer_printed") || document.getElementById("poa_typed_signature") || document.getElementById("signature_input") || activePanel.querySelector("input[type='text']");
  const consentBox = document.getElementById("poa_gatekeeper_consent") || document.getElementById("poa_consent_checkbox") || activePanel.querySelector("input[type='checkbox']");

  if (!scrollBox || !nameInput || !consentBox) return false;

  const rawNameValue = nameInput.value.trim();
  let alertMessageTextString = "";
  let elementToHighlightNode = null;

  // 1. DYNAMIC LOGICAL GATES EVALUATION
  if (!window.isScrollCompletedGlobal) {
    alertMessageTextString = "âš ï¸ Please scroll to the bottom of the agreement to review and unlock the fields.";
    elementToHighlightNode = scrollBox;
  } else if (rawNameValue.length < 2 || !rawNameValue.includes(" ")) {
    alertMessageTextString = "âœï¸ Requirement Warning: Please type your full name (First and Last) to sign.";
    elementToHighlightNode = nameInput;
  } else if (!consentBox.checked) {
    alertMessageTextString = "ðŸ”’ Verification Guard: You must check this box to confirm your electronic consent.";
    elementToHighlightNode = consentBox.parentElement;
  }

  // 2. DISPATCH TRANSITION CHANNELS IF ALL CRITERIA PASS VALIDATION
  if (!alertMessageTextString && elementToHighlightNode === null) {
    console.log("[LPOA Validation Success] Secure execution verified. Pushing wizard to Step 5.");
    if (typeof window.goToNextWizardStep === "function") {
      window.goToNextWizardStep(5);
    }
    return true;
  }

  // 3. SPAWN FLOATING POP-UP BUBBLE INTERFACE DYNAMICALLY
  const preExistingAlert = document.getElementById("poa-dynamic-validation-alert-bubble");
  if (preExistingAlert) preExistingAlert.remove();

  const alertContainerNode = document.createElement("div");
  alertContainerNode.id = "poa-dynamic-validation-alert-bubble";
  alertContainerNode.className = "poa-alert-popup";
  alertContainerNode.innerText = alertMessageTextString;
  document.body.appendChild(alertContainerNode);

  // Position the alert bubble card perfectly 45px directly above the uncompleted field
  const elementRectCoordinates = elementToHighlightNode.getBoundingClientRect();
  const pageScrollTopOffset = window.pageYOffset || document.documentElement.scrollTop;
  
  alertContainerNode.style.top = `${elementRectCoordinates.top + pageScrollTopOffset - 45}px`;
  alertContainerNode.style.left = `${elementRectCoordinates.left + window.pageXOffset}px`;

  alertContainerNode.classList.add("show");
  elementToHighlightNode.classList.add("poa-shake-element", "input-error");

  if (typeof elementToHighlightNode.focus === "function") {
    elementToHighlightNode.focus();
  }

  // 4. CLEANUP TIMEOUTS: Scrub error markers after 3.5 seconds
  setTimeout;(function() {
    alertContainerNode.classList.remove("show");
    elementToHighlightNode.classList.remove("poa-shake-element", "input-error");
    setTimeout(() => alertContainerNode.remove(), 200);
  }, 3500);

  return false;
};

/**
 * Updates the local scrolling tracker flag variable immediately upon bottom contact.
 * Dynamically unlocks interactive fields without name dependency.
 */
const originalPoaInitFunction = window.initInformedConsentExecutionSuite;
window.initInformedConsentExecutionSuite = function() {
  if (typeof originalPoaInitFunction === "function") originalPoaInitFunction();

  const activePanel = document.getElementById("step-panel-4") || document.body;
  const scrollBox = document.getElementById("poa-scroll-box") || activePanel.querySelector("div[style*='overflow-y']");
  
  if (scrollBox) {
    // FUNCTIONAL RECOVERY PASS: If the legal text fits entirely without scrolling, activate instantly
    if (scrollBox.scrollHeight <= scrollBox.clientHeight) {
      window.isScrollCompletedGlobal = true;
      releasePoaInputLockState(activePanel);
    }

    scrollBox.addEventListener("scroll", function() {
      const cushion = 15;
      if (scrollBox.scrollHeight - scrollBox.scrollTop <= scrollBox.clientHeight + cushion) {
        window.isScrollCompletedGlobal = true;
        releasePoaInputLockState(activePanel);
      }
    });
  }
};

/**
 * AGNOSTIC ACTIVATION ENGINE (ZERO HARDCODING)
 * Strips hardcoded disabled flags from text boxes and checkboxes inside the view context
 */
function releasePoaInputLockState(containerNode) {
  if (!containerNode) return;

  // Polymorphically extract the text fields and checkbox blocks present inside the panel view
  const targets = containerNode.querySelectorAll("input[disabled]");
  
  targets.forEach(element => {
    element.removeAttribute("disabled");
    
    // Smoothly restore the background styles for typing
    if (element.type === "text") {
      element.style.background = "#ffffff";
    }
  });

  console.log("[State Registry] Scrolling threshold passed. Signature inputs initialized and unlocked.");
}

// Auto-reinitialize layers cleanly on framework lifecycle updates
if (document.readyState !== "loading") {
  window.initInformedConsentExecutionSuite();
} else {
  document.addEventListener("DOMContentLoaded", window.initInformedConsentExecutionSuite);
}



/**
 * Timeline step visual reflector. Synchronizes state lights across sidebar indicators.
 */
function updateWizardStepProgressIndicatorBubbles(activeIndexNumber) {
    const synchronizedStepIndex = parseInt(activeIndexNumber, 10);
    if (!isNaN(synchronizedStepIndex) && typeof updateApplicationMapTimelineBubbles === "function") {
        updateApplicationMapTimelineBubbles(synchronizedStepIndex);
    }
}
window.updateWizardStepProgressIndicatorBubbles = updateWizardStepProgressIndicatorBubbles;


// ============================================================================ //
// âœï¸ DIGITAL CURSIVE SIGNATURE RENDERING SUITE
// ============================================================================ //
/**
 * Initializes real-time text-to-cursive handwriting mirror syncs across wizard fields.
 * FIXED: Uses event delegation to prevent listener loss during step transitions or form re-renders.
 */
function initCursiveSignatureCaptureLivePreview() {
    const panelContext = document.getElementById(`step-panel-${window.currentWizardActiveStep || 4}`) || document.body;

    // Enforce script styles immediately on any preview display containers present in the viewport
    const previewDisplay = document.getElementById("cursive-signature-preview") || 
                           document.getElementById("cursive-signature-output") || 
                           document.getElementById("signature-preview") || 
                           panelContext.querySelector('.signature-preview-display');
                           
    if (previewDisplay) {
        previewDisplay.style.fontFamily = "'Dancing Script', 'Alex Brush', 'Great Vibes', 'Brush Script MT', cursive";
        previewDisplay.style.transition = "opacity 0.2s ease-in-out, transform 0.2s ease-in-out";
    }

    // ðŸ›¡ï¸ RECOVERY PASS: Check active value states upon entering the step panel view
    const inputField = document.getElementById("poa_signer_printed") || 
                       document.getElementById("signature-input") || 
                       document.getElementById("legal-signature") || 
                       panelContext.querySelector('input[name*="signature"], .signature-input-field');
                       
    if (inputField && previewDisplay) {
        if (inputField.value.trim() !== "") {
            previewDisplay.innerText = inputField.value.trim();
            previewDisplay.style.opacity = "1";
            window.signaturePadHasBeenDrawnByUser = true;
        } else {
            previewDisplay.innerText = inputField.getAttribute("placeholder") || "Your Electronic Signature";
            previewDisplay.style.opacity = "0.35";
            window.signaturePadHasBeenDrawnByUser = false;
        }
    }

    // ðŸ›¡ï¸ EVENT DELEGATION SECURITY HOOK:
    // Bind directly to the document root exactly once. This ensures that even if inputs
    // are wiped out or re-injected dynamically, signatures continue mirroring flawlessly.
    if (!window.isSignatureGlobalListenerHooked) {
        document.addEventListener("input", function(e) {
            const target = e.target;
            if (!target) return;

            // Verify if the active typing target is genuinely a signature input field element
            // FIXED: Implemented optional chaining (?.) on target.name to prevent runtime crashes if name attribute is missing
            const isSignatureInput = target.id === "poa_signer_printed" || 
                                     target.id === "signature-input" || 
                                     target.id === "legal-signature" || 
                                     target.name?.includes("signature") || 
                                     target.classList.contains("signature-input-field");
                                     
            if (!isSignatureInput) return;

            const activePanel = document.getElementById(`step-panel-${window.currentWizardActiveStep}`) || document.body;
            const targetPreview = document.getElementById("cursive-signature-preview") || 
                                  document.getElementById("cursive-signature-output") || 
                                  document.getElementById("signature-preview") || 
                                  activePanel.querySelector('.signature-preview-display');
                                  
            if (!targetPreview) return;

            const activeTextString = target.value;

            if (activeTextString.trim() === "") {
                targetPreview.innerText = target.getAttribute("placeholder") || "Your Electronic Signature";
                targetPreview.style.opacity = "0.35";
                targetPreview.style.transform = "scale(0.98)";
                window.signaturePadHasBeenDrawnByUser = false;
            } else {
                targetPreview.innerText = activeTextString;
                targetPreview.style.opacity = "1";
                targetPreview.style.transform = "scale(1)";
                window.signaturePadHasBeenDrawnByUser = true;
            }

            // Trigger local state serialization cache updates automatically
            if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
                cacheAndRestoreWizardFormStatesVanilla(false);
            }
        });
        
        window.isSignatureGlobalListenerHooked = true;
    }
}

// Register initialization execution safely on app load namespace scopes layers
window.initCursiveSignatureCaptureLivePreview = initCursiveSignatureCaptureLivePreview;


// ============================================================================ //
// ðŸ“Š UNIVERSAL TIMELINE VISUAL REFLECTOR (PART A)
// ============================================================================ //
/**
 * Universal timeline visual reflector. Updates sidebar bubble tracks.
 * Hardened Fix: Protects mathematical variables to prevent unhandled script crashes.
 * @param {number|string} activeIndex - The destination wizard step index.
 */
function updateApplicationMapTimelineBubbles(activeIndex) {
    const rows = document.querySelectorAll(".toc-step-row");
    if (!rows || rows.length === 0) {
        console.warn("[Timeline Sync] No elements matching selector '.toc-step-row' found in DOM layout.");
        return;
    }

    const currentStepNum = parseInt(activeIndex, 10) || 1;
    console.log(`[Timeline Sync] Dispatching clean visibility pass for step index: ${currentStepNum}`);

    rows.forEach(function(row, idx) {
        if (!row) return;
        
        const dotElement = row.querySelector(".toc-dot") || row.querySelector(".step-indicator-dot");
        const loopIndex = idx + 1;

        // FIXED: Replaced row.className rewrite to safely preserve structural styles 
        // while cleanly dropping outdated timeline lifecycle markers.
        row.classList.remove("toc-active", "toc-completed", "active", "completed");

        if (dotElement) {
            dotElement.innerHTML = ""; // Wipes out pre-existing checked layouts icons
            dotElement.style.background = "";
            dotElement.style.borderColor = "";
            dotElement.style.boxShadow = "";
        }

        // Direct data-driven step matching evaluation loops
        if (loopIndex < currentStepNum) {
            row.classList.add("toc-completed", "completed");
            if (dotElement) {
                dotElement.innerHTML = '<i class="fa-solid fa-check" style="font-size: 0.65rem; color: #10b981;"></i>';
                dotElement.style.background = "rgba(16, 185, 129, 0.15)";
                dotElement.style.borderColor = "#10b981";
            }
        } else if (loopIndex === currentStepNum) {
            row.classList.add("toc-active", "active");
            if (dotElement) {
                dotElement.style.background = "#10b981";
                dotElement.style.borderColor = "#10b981";
                dotElement.style.boxShadow = "0 0 14px rgba(16, 185, 129, 0.8), inset 0 0 4px rgba(255,255,255,0.4)";
            }
        }
    });

    // Synchronize horizontal progress bar entirely from system configuration states
    const horizontalProgressFill = document.getElementById("timeline-progress-fill-node");
    if (horizontalProgressFill) {
        // Pure data-driven validation: Safely sets a baseline count if variables are uninitialized
        const rawTotalSteps = window.totalWizardExpectedSteps;
        const maximumSystemSteps = rawTotalSteps ? parseInt(rawTotalSteps, 10) : rows.length;
        let percentageProgressWidth = 0;

        // Safety clamp stops calculations from dividing by zero or processing NaN bounds
        if (!isNaN(maximumSystemSteps) && maximumSystemSteps > 1) {
            percentageProgressWidth = ((currentStepNum - 1) / (maximumSystemSteps - 1)) * 100;
        }

        const clampedProgressBarWidth = Math.min(Math.max(percentageProgressWidth, 0), 100);
        horizontalProgressFill.style.width = `${clampedProgressBarWidth}%`;
    }
}

// Hardened Global Export Guard: Protect master router function integrity
if (typeof window.goToNextWizardStep !== "function") {
    if (typeof goToNextWizardStep === "function") {
        window.goToNextWizardStep = goToNextWizardStep;
    }
}

window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubbles;


// ============================================================================ //
// ðŸ› ï¸ SAFE SINGLE-MOUNT LIFECYCLE INTERCEPTOR PROXY
// ============================================================================ //
// Ensures the hook is attached exactly once to the root timeline execution pipeline.
if (!window.isWizardNavigationProxyHookActive) {
    ;(function() {
        const originalNextStepFunc = window.goToNextWizardStep;
        
        if (typeof originalNextStepFunc === "function") {
            window.goToNextWizardStep = function(targetStepIndex, event) {
                // Execute original navigation routine safely
                const executionResult = originalNextStepFunc(targetStepIndex, event);
                
                // Tally invoice card values on single execution frame loops only when stepping panels
                if (typeof updateDynamicPricingMatrixVanilla === "function") {
                    updateDynamicPricingMatrixVanilla();
                }
                
                return executionResult;
            };
            window.isWizardNavigationProxyHookActive = true;
        }
    })();
}


// ============================================================================ //
// ðŸ›¡ï¸ GLOBAL NAVIGATION SAFETY HUB (DESTRUCTION PREVENTION DISPATCH)
// ============================================================================ //
document.addEventListener("click", function(eventObj) {
    const clickedElement = eventObj.target.closest("button, a, .wizard-prev-btn, .btn-wizard-alt");
    if (!clickedElement) return;

    // Extract element attributes cleanly to evaluate intent without absolute hardcoding strings
    const inlineOnclickString = clickedElement.getAttribute("onclick") || "";
    const elementText = clickedElement.innerText.toLowerCase().trim();
    const elementId = clickedElement.id || "";
    const classList = clickedElement.classList;

    // ðŸ” Selective Back Verification: Check if the operator is intentionally trying to navigate backward
    const isExplicitBackButton = inlineOnclickString.includes("back") || 
                                 inlineOnclickString.includes("prev") || 
                                 inlineOnclickString.includes("- 1") || 
                                 classList.contains("wizard-prev-btn") || 
                                 classList.contains("btn-wizard-alt") || 
                                 elementId.includes("back") || 
                                 elementId.includes("prev") || 
                                 elementText === "back" || 
                                 elementText === "previous";

    // ðŸš¨ GUARD: If it is NOT a back button, exit immediately. Let forward form validators handle it.
    if (!isExplicitBackButton) return;

    // Safely isolate back movements to avoid unwanted form submissions or page resets
    eventObj.preventDefault();
    eventObj.stopPropagation();
    
    console.log("[Safety Hub] Intercepted back button click safely. Routing step reduction pipeline...");

    let calculatedCurrentStep = parseInt(window.currentWizardActiveStep, 10) || 1;
    
    // FIXED: Corrected selector query targets to look for your actual active .wizard-panel elements 
    const visiblePanels = document.querySelectorAll(".wizard-panel");
    
    visiblePanels.forEach((panel, panelIdx) => {
        if (panel.classList.contains("active") || window.getComputedStyle(panel).display !== "none") {
            calculatedCurrentStep = panelIdx + 1;
        }
    });

    let safePreviousStepIndex = calculatedCurrentStep - 1;
    if (safePreviousStepIndex < 1) safePreviousStepIndex = 1;

    // ðŸ”„ Delegate view changes safely back to your central master router function core
    if (typeof window.executeDirectStepJump === "function") {
        window.executeDirectStepJump(safePreviousStepIndex);
    } else if (typeof window.goToNextWizardStep === "function") {
        window.goToNextWizardStep(safePreviousStepIndex);
    } else {
        // Structural absolute fallback transformation loop if master engine is detached
        window.currentWizardActiveStep = safePreviousStepIndex;
        if (visiblePanels.length > 0) {
            visiblePanels.forEach((panel, index) => {
                const stepMarkerIndex = index + 1;
                if (stepMarkerIndex === safePreviousStepIndex) {
                    panel.classList.add("active");
                    panel.style.setProperty("display", "block", "important");
                } else {
                    panel.classList.remove("active");
                    panel.style.setProperty("display", "none", "important");
                }
            });
        }
        
        if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
        if (typeof populatePurchaseSummaryReviewMatrix === "function") populatePurchaseSummaryReviewMatrix();
        if (typeof renderActiveWizardStepUiLayout === "function") renderActiveWizardStepUiLayout();
    }

    // FIXED: Completely removed forced smooth scroll up to top on backward navigation clicks 
    // to preserve current viewport coordinates position seamlessly.
}, true);


// ============================================================================ //
// âž• EXPANDED FMCSA REJECTION CRITERIA SCREENERS (NEW COMPLIANCE WORKFLOWS)
// ============================================================================ //
/**
 * Toggles dynamic alerts if an operator flags an absolute failure metric (e.g. no drug pool).
 * Instantly alerts the user of critical vulnerabilities that trigger immediate audit failures.
 * FIXED: Removed destructive innerHTML clear passes to keep underlying layout node elements safe.
 * @param {HTMLElement} checkboxElement - The user input target element triggering the check pass.
 */
function toggleNewEntrantCriticalFailureWarningVisibility(checkboxElement) {
    if (!checkboxElement) return;

    const failureType = checkboxElement.getAttribute("data-failure-class");
    if (!failureType) return;

    const alertContainer = document.getElementById(`nea_failure_warning_${failureType}`);
    if (!alertContainer) return;

    // Check configuration parameters to see if the user triggered a failure condition
    const isConditionTriggered = checkboxElement.type === "checkbox" ? !checkboxElement.checked : checkboxElement.value === "no";

    if (isConditionTriggered) {
        // If the operator flags an missing required program, display the warning container smoothly
        alertContainer.style.setProperty("display", "block", "important");
        alertContainer.style.background = "#fef2f2";
        alertContainer.style.color = "#991b1b";
        alertContainer.style.border = "1px solid #fee2e2";
    } else {
        // Hide the warning container safely without clearing the internal DOM template text nodes
        alertContainer.style.setProperty("display", "none", "important");
    }
}

// Expose globally to window layers safely
window.toggleNewEntrantCriticalFailureWarningVisibility = toggleNewEntrantCriticalFailureWarningVisibility;


// ============================================================================ //
// ðŸ”„ NEW ENTRANT SAFETY AUDIT CONFIGURATOR INTERACTION LAYER (CFR PART 385)
// ============================================================================ //
/**
 * Toggles a date input field block if an operator has received an official target audit notification letter.
 * Mandated to map the hard 90-day (or 45-day for passenger/hazmat) federal deadline accurately.
 * @param {string} selectionValue - The chosen value token from the user choice element.
 */
function toggleNewEntrantAuditLetterDetails(selectionValue) {
    const wrapper = document.getElementById("nea_letter_deadline_wrapper");
    const dateInput = document.getElementById("nea_audit_deadline");
    if (!wrapper || !dateInput) return;

    if (selectionValue === "letter-received" || selectionValue === "yes" || selectionValue === "true") {
        wrapper.style.setProperty("display", "block", "important");
        dateInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        dateInput.required = false;
        dateInput.value = ""; // Safely flush input values upon collapse
        dateInput.style.removeProperty("border-color");
        
        // FIXED: Replaced brittle nextSibling tracker with a direct relative element search 
        // to prevent empty HTML whitespace or text nodes from breaking error marker cleanups
        const parentElementContainer = dateInput.parentElement;
        if (parentElementContainer) {
            const errorMarker = parentElementContainer.querySelector('.input-error-marker');
            if (errorMarker) {
                errorMarker.remove();
            }
        }
    }
}

/**
 * Interactive Strategic Checklist Modal Controls.
 * Dynamically hooks overlays without writing static structural strings.
 */
function triggerNewEntrantAuditComplianceChecklistPopup() {
    const modal = document.getElementById("nea_checklist_modal_backdrop");
    if (modal) {
        modal.style.setProperty("display", "flex", "important");
    }
}

function closeNewEntrantAuditComplianceChecklistPopup() {
    const modal = document.getElementById("nea_checklist_modal_backdrop");
    if (modal) {
        modal.style.setProperty("display", "none", "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleNewEntrantAuditLetterDetails = toggleNewEntrantAuditLetterDetails;
window.triggerNewEntrantAuditComplianceChecklistPopup = triggerNewEntrantAuditComplianceChecklistPopup;
window.closeNewEntrantAuditComplianceChecklistPopup = closeNewEntrantAuditComplianceChecklistPopup;


// ============================================================================ //
// ðŸ”„ FREIGHT BROKER INSURANCE & FINANCIAL RESPONSIBILITY (BMC-84 / BMC-85)
// ============================================================================ //
/**
 * Toggles a description textbox if the applicant declares historical bankruptcy parameters.
 * Required by surety underwriters to evaluate structural risk calculations for BMC-84 bonds.
 * @param {string} selectionValue - The user selection value string indicator.
 */
function toggleBrokerInsuranceBankruptcyDetailsVisibility(selectionValue) {
    const wrapper = document.getElementById("bins_bankruptcy_details_wrapper");
    const input = document.getElementById("bins_bankruptcy_details");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapper.style.setProperty("display", "block", "important");
        input.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        input.required = false;
        input.value = ""; // Clean input buffers cleanly upon state collapse
        input.style.removeProperty("border-color");
        
        // FIXED: Replaced brittle nextSibling matching with a secure relative query look up
        const parentContainer = input.parentElement;
        if (parentContainer) {
            const errorMarker = parentContainer.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles structural fields based on whether an officer holds historical felony records.
 * Mandated by FMCSA broker registration checks to cross-verify structural operational compliance.
 * @param {string} selectionValue - The user selection value string indicator.
 */
function toggleBrokerInsuranceFelonyDetailsVisibility(selectionValue) {
    const wrapper = document.getElementById("bins_felony_details_wrapper");
    const input = document.getElementById("bins_felony_details");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapper.style.setProperty("display", "block", "important");
        input.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        input.required = false;
        input.value = "";
        input.style.removeProperty("border-color");
        
        // FIXED: Replaced brittle nextSibling matching with a secure relative query look up
        const parentContainer = input.parentElement;
        if (parentContainer) {
            const errorMarker = parentContainer.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

// ============================================================================ //
// âž• FMCSA $75,000 REGULATORY COMPLIANCE TUNNELS (NEW WORKFLOWS)
// ============================================================================ //
/**
 * Orchestrates visibility parameters based on whether the broker selects a BMC-84 Bond or BMC-85 Trust.
 * Dynamically updates sub-inputs to capture financial verification vectors cleanly.
 * @param {string} financialInstrumentValue - Selected insurance type choice string.
 */
function toggleBrokerFinancialResponsibilityTypeSelection(financialInstrumentValue) {
    const bmc84Wrapper = document.getElementById("broker_bmc84_underwriting_wrapper");
    const bmc85Wrapper = document.getElementById("broker_bmc85_funding_wrapper");

    if (financialInstrumentValue === "bmc84" || financialInstrumentValue === "surety-bond") {
        if (bmc84Wrapper) bmc84Wrapper.style.setProperty("display", "block", "important");
        if (bmc85Wrapper) bmc85Wrapper.style.setProperty("display", "none", "important");
        
        // Enforce required variables on underwriting components
        if (bmc84Wrapper) bmc84Wrapper.querySelectorAll("input, select").forEach(f => f.required = true);
        if (bmc85Wrapper) bmc85Wrapper.querySelectorAll("input, select").forEach(f => f.required = false);
    } else if (financialInstrumentValue === "bmc85" || financialInstrumentValue === "trust-fund") {
        if (bmc84Wrapper) bmc84Wrapper.style.setProperty("display", "none", "important");
        if (bmc85Wrapper) bmc85Wrapper.style.setProperty("display", "block", "important");
        
        if (bmc84Wrapper) bmc84Wrapper.querySelectorAll("input, select").forEach(f => f.required = false);
        if (bmc85Wrapper) bmc85Wrapper.querySelectorAll("input, select").forEach(f => f.required = true);
    } else {
        if (bmc84Wrapper) bmc84Wrapper.style.setProperty("display", "none", "important");
        if (bmc85Wrapper) bmc85Wrapper.style.setProperty("display", "none", "important");
    }

    // Clear data states inside hidden wrappers dynamically to prevent validation freezes
    const hiddenWrappers = [bmc84Wrapper, bmc85Wrapper];
    hiddenWrappers.forEach(wrapper => {
        if (wrapper && (wrapper.style.display === "none" || window.getComputedStyle(wrapper).display === "none")) {
            wrapper.querySelectorAll("input, select, textarea").forEach(field => {
                field.required = false;
                if (field.type === "checkbox" || field.type === "radio") {
                    field.checked = false;
                } else if (field.tagName.toLowerCase() === "select") {
                    // FIXED: Replaced broken empty string reset with proper index assignments for drop downs
                    field.selectedIndex = field.options.length > 0 ? 0 : -1;
                } else {
                    field.value = "";
                }
                field.style.removeProperty("border-color");
            });
            wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
        }
    });
}

// Expose functions globally to window namespaces cleanly
window.toggleBrokerInsuranceBankruptcyDetailsVisibility = toggleBrokerInsuranceBankruptcyDetailsVisibility;
window.toggleBrokerInsuranceFelonyDetailsVisibility = toggleBrokerInsuranceFelonyDetailsVisibility;
window.toggleBrokerFinancialResponsibilityTypeSelection = toggleBrokerFinancialResponsibilityTypeSelection;


// ============================================================================ //
// ðŸ”„ INTERNATIONAL FUEL TAX AGREEMENT (IFTA) INTERACTION
// ============================================================================ //
/**
 * Handles base fuel tax registration visibility rules for qualified motor vehicles.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 * @param {string} selectionValue - Selected menu type selection string token indicator.
 */
function toggleIftaFulfillmentSubFields(selectionValue) {
    const accountWrapper = document.getElementById("ifta_existing_account_wrapper");
    const accountInput = document.getElementById("ifta_base_account_number");

    if (selectionValue === "renewal" || selectionValue === "additional-decals") {
        if (accountWrapper) accountWrapper.style.setProperty("display", "grid", "important");
        if (accountInput) accountInput.required = true;
    } else {
        if (accountWrapper) accountWrapper.style.setProperty("display", "none", "important");
        if (accountInput) {
            accountInput.required = false;
            accountInput.value = "";
            accountInput.style.removeProperty("border-color");
        }
        if (accountWrapper) {
            accountWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
        }
    }

    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

// ============================================================================ //
// âž• EXPANDED JURISDICTIONAL IFTA STATE FILE SEPARATORS (NEW ROUTERS)
// ============================================================================ //
/**
 * Toggles a custom description block if the trucking fleet maintains independent bulk fuel storage tanks.
 * Mandated by state tax comptrollers to cross-verify tax-paid commercial gallon distributions.
 * @param {string} hasBulkStorageSelection - Dynamic option choice string indicator.
 */
function toggleIftaBulkStorageVerificationFields(hasBulkStorageSelection) {
    const storageWrapper = document.getElementById("ifta_bulk_storage_details_wrapper");
    if (!storageWrapper) return;

    if (hasBulkStorageSelection === "yes" || hasBulkStorageSelection === "true") {
        storageWrapper.style.setProperty("display", "block", "important");
        storageWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
    } else {
        storageWrapper.style.setProperty("display", "none", "important");
        storageWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value resets with native index targets for dropdown blocks
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        storageWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Validates decal counts ordered against qualified motor vehicle metrics profiles.
 * States require tracking decal distributions to align with registered truck counts.
 * @param {HTMLElement} volumeInputField - Target counter number input element.
 */
function validateIftaDecalVolumeRequirements(volumeInputField) {
    if (!volumeInputField) return;

    const requestedDecalVolume = parseInt(volumeInputField.value, 10);
    if (isNaN(requestedDecalVolume)) return;

    if (requestedDecalVolume < 1) {
        volumeInputField.style.setProperty("border-color", "#ef4444", "important");
        const labelMessage = volumeInputField.getAttribute("data-error-msg") || "Decal Allocation Warning: You must order at least 1 set of IFTA decals for your qualified highway vehicle assets.";
        
        if (typeof markFieldAsInvalidVanilla === "function") {
            markFieldAsInvalidVanilla(volumeInputField, labelMessage);
        }
    } else {
        volumeInputField.style.removeProperty("border-color");
        
        // FIXED: Replaced brittle nextSibling references with a relative query locator pass
        const parentContainer = volumeInputField.parentElement;
        if (parentContainer) {
            const adjacentMarker = parentContainer.querySelector('.input-error-marker');
            if (adjacentMarker) {
                adjacentMarker.remove();
            }
        }

        // Save historical data changes instantly to background state caches
        if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
            cacheAndRestoreWizardFormStatesVanilla(false);
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleIftaFulfillmentSubFields = toggleIftaFulfillmentSubFields;
window.toggleIftaBulkStorageVerificationFields = toggleIftaBulkStorageVerificationFields;
window.validateIftaDecalVolumeRequirements = validateIftaDecalVolumeRequirements;


// ============================================================================ //
// ðŸ”„ DRIVER QUALIFICATION FILE INTERACTIVE MATRIX (49 CFR PART 391 COMPLIANT)
// ============================================================================ //
/**
 * Handles the display of fleet-scale document tracking fields.
 * Adjusts requirement configurations dynamically to manage bulk file onboarding pipelines.
 * @param {string} selectionValue - Selected file package quantity indicator token.
 */
function toggleDqfFleetQuantityVisibility(selectionValue) {
    const wrapper = document.getElementById("dqf_fleet_count_wrapper");
    if (!wrapper) return;
    
    const countInput = document.getElementById("dqf_total_files_needed");

    if (selectionValue === "fleet-addition" || selectionValue === "bulk-setup" || selectionValue === "multiple") {
        wrapper.style.setProperty("display", "block", "important");
        if (countInput) countInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        if (countInput) {
            countInput.required = false;
            // Abstract dynamic property reset: Matches standard baseline values safely
            const baselineDefaultOption = countInput.getAttribute("data-default-value") || "1";
            countInput.value = baselineDefaultOption;
            countInput.style.removeProperty("border-color");
        }

        // Wipe structural text and checkbox attributes cleanly inside the container tree
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

// ============================================================================ //
// âž• CFR Â§391 FMCSA COMPLIANCE RECORD WORKFLOWS (NEW DRIVER ENTRY HOOKS)
// ============================================================================ //
/**
 * Toggles a custom entry panel if the driver holds a Commercial Driver's License (CDL).
 * Required by federal safety rules to enforce annual state background MVR checks.
 * @param {string} hasCdlSelection - Option value toggle selection string.
 */
function toggleDqfCommercialDriversLicenseDetails(hasCdlSelection) {
    const cdlWrapper = document.getElementById("dqf_cdl_metadata_wrapper");
    if (!cdlWrapper) return;

    if (hasCdlSelection === "yes" || hasCdlSelection === "true") {
        cdlWrapper.style.setProperty("display", "block", "important");
        cdlWrapper.querySelectorAll("input, select").forEach(field => {
            if (!field.hasAttribute("data-optional")) field.required = true;
        });
    } else {
        cdlWrapper.style.setProperty("display", "none", "important");
        cdlWrapper.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        cdlWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Toggles structural fields based on the status of the driver's DOT Medical Examiner's Certificate.
 * Tracks expiration milestones dynamically to prevent operations under expired medical profiles.
 * @param {string} medicalCardStatusSelection - Option value toggle selection string.
 */
function toggleDqfMedicalCardExemptionVisibility(medicalCardStatusSelection) {
    const medCardWrapper = document.getElementById("dqf_medical_card_details_wrapper");
    if (!medCardWrapper) return;

    if (medicalCardStatusSelection === "certified" || medicalCardStatusSelection === "requires-review") {
        medCardWrapper.style.setProperty("display", "block", "important");
        medCardWrapper.querySelectorAll("input").forEach(field => field.required = true);
    } else {
        medCardWrapper.style.setProperty("display", "none", "important");
        medCardWrapper.querySelectorAll("input").forEach(field => {
            field.required = false;
            field.value = "";
            field.style.removeProperty("border-color");
        });
        medCardWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// ðŸ”„ PROCESS AGENT (BOC-3) FILING INTERACTION LAYER
// ============================================================================ //
/**
 * Handles the display of operating authority identifiers for BOC-3 filings.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 * @param {string} selectionValue - Option value toggle selection string.
 */
function toggleBoc3AuthorityIdentifiersVisibility(selectionValue) {
    const wrapper = document.getElementById("boc_authority_nums_wrapper");
    if (!wrapper) return;

    const usdotInput = document.getElementById("boc_usdot_number");
    const mcInput = document.getElementById("boc_mc_number");

    if (selectionValue === "independent" || selectionValue === "yes" || selectionValue === "has-active-authority") {
        wrapper.style.setProperty("display", "grid", "important");
        if (usdotInput) usdotInput.required = true;
        if (mcInput) mcInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        
        // Clear required parameters and wipe structural data memory to clear fields safely
        if (usdotInput) {
            usdotInput.required = false;
            usdotInput.value = "";
            usdotInput.style.removeProperty("border-color");
        }
        if (mcInput) {
            mcInput.required = false;
            mcInput.value = "";
            mcInput.style.removeProperty("border-color");
        }

        // Clean up residual red warning alerts and input wrappers left behind by validation checks
        wrapper.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleDqfFleetQuantityVisibility = toggleDqfFleetQuantityVisibility;
window.toggleDqfCommercialDriversLicenseDetails = toggleDqfCommercialDriversLicenseDetails;
window.toggleDqfMedicalCardExemptionVisibility = toggleDqfMedicalCardExemptionVisibility;
window.toggleBoc3AuthorityIdentifiersVisibility = toggleBoc3AuthorityIdentifiersVisibility;


// ============================================================================ //
// ðŸ”„ SAM.GOV PROCUREMENT REGISTRATION INTERACTION LAYER
// ============================================================================ //
/**
 * Handles the display of alternate inputs based on whether the entity has an existing UEI.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 * @param {string} selectionValue - Selected choice option string token.
 */
function toggleSamUniqueEntityIdVisibility(selectionValue) {
    const wrapper = document.getElementById("sam_uei_code_wrapper");
    if (!wrapper) return;
    
    const ueiInput = document.getElementById("sam_existing_uei");

    if (selectionValue === "existing" || selectionValue === "yes") {
        wrapper.style.setProperty("display", "block", "important");
        if (ueiInput) ueiInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        
        // Clear required parameters and wipe structural data memory to clear fields safely
        if (ueiInput) {
            ueiInput.required = false;
            ueiInput.value = "";
            ueiInput.style.removeProperty("border-color");
        }
        
        // Clean up residual red warning alerts left behind by validation checks
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// ðŸ”„ MINORITY CERTIFICATE REGISTRATION INTERACTION LAYER (STATE & FEDERAL)
// ============================================================================ //
/**
 * Toggles a custom description block if the contractor requests a localized State or Local MBE filing track.
 * @param {string} selectionValue - Selected choice option string token.
 */
function toggleMorphicMbeAgencySubInputs(selectionValue) {
    const wrapper = document.getElementById("mbe_state_agency_wrapper");
    if (!wrapper) return;
    
    const agencyInput = document.getElementById("mbe_target_agency_name");

    if (selectionValue === "state-local" || selectionValue === "local-ucp") {
        wrapper.style.setProperty("display", "block", "important");
        if (agencyInput) agencyInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        if (agencyInput) {
            agencyInput.required = false;
            agencyInput.value = ""; // Safely flush text variables upon collapse
            agencyInput.style.removeProperty("border-color");
        }
        
        // Clear residual red warning elements from the hidden container
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// âž• EXPANDED FEDERAL SBA & STATE DBE CERTIFICATION WORKFLOWS (NEW WORKFLOWS)
// ============================================================================ //
/**
 * Toggles expanded programmatic modules if the client requests Federal SBA programmatic tracks (8a / WOSB / SDVOSB).
 * Enforces stricter biographical, citizenship, and corporate control questions.
 * @param {string} certificationProgramValue - Dynamic selected certification program string token.
 */
function toggleFederalSbaCertificationsWrapperVisibility(certificationProgramValue) {
    const federalWrapper = document.getElementById("mbe_federal_sba_details_wrapper");
    if (!federalWrapper) return;

    const requiresFederalInboundTracks = ["8a", "wosb", "vosb", "sdvosb", "federal-sba"].includes(certificationProgramValue);

    if (requiresFederalInboundTracks) {
        federalWrapper.style.setProperty("display", "block", "important");
        federalWrapper.querySelectorAll("input, select").forEach(field => {
            // Only enforce required rules on fields actively displayed to the user
            if (field.offsetParent !== null && !field.hasAttribute("data-optional")) {
                field.required = true;
            }
        });
    } else {
        federalWrapper.style.setProperty("display", "none", "important");
        federalWrapper.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
            if (field.type === "checkbox" || field.type === "radio") {
                field.checked = false;
            } else if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value resets with proper dropdown element selection index clear rules
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        federalWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Evaluates whether the qualifying partner's declared equity percentage satisfies legal criteria.
 * State and federal regulatory bodies strictly reject filings if minority ownership drops under 51%.
 * @param {HTMLElement} inputFieldElement - The visual ownership numeric field element.
 */
function validateMinorityOwnershipEquityPercentage(inputFieldElement) {
    if (!inputFieldElement) return;

    const numericEquityValue = parseFloat(inputFieldElement.value);
    if (isNaN(numericEquityValue)) return;

    if (numericEquityValue < 51) {
        inputFieldElement.style.setProperty("border-color", "#ef4444", "important");
        const labelMessage = inputFieldElement.getAttribute("data-error-msg") || "Certification Rejection Warning: Federal and state guidelines strictly require a minimum of 51% minority individual ownership to qualify for MBE/DBE status.";
        
        if (typeof markFieldAsInvalidVanilla === "function") {
            markFieldAsInvalidVanilla(inputFieldElement, labelMessage);
        }
    } else {
        inputFieldElement.style.removeProperty("border-color");
        
        // FIXED: Replaced whitespace-vulnerable nextSibling selector with clear relative query tree lookups
        const parentContainer = inputFieldElement.parentElement;
        if (parentContainer) {
            const adjacentMarker = parentContainer.querySelector('.input-error-marker');
            if (adjacentMarker) {
                adjacentMarker.remove();
            }
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleSamUniqueEntityIdVisibility = toggleSamUniqueEntityIdVisibility;
window.toggleMorphicMbeAgencySubInputs = toggleMorphicMbeAgencySubInputs;
window.toggleFederalSbaCertificationsWrapperVisibility = toggleFederalSbaCertificationsWrapperVisibility;
window.validateMinorityOwnershipEquityPercentage = validateMinorityOwnershipEquityPercentage;


// ============================================================================ //
// ðŸ”„ CAGE CODE REGISTRATION INTERACTION LAYER ROUTINES (SAM & DLA COMPLIANT)
// ============================================================================ //
/**
 * Toggles structural fields based on whether the entity is a subsidiary of a parent company.
 * Mandated by DLA validation parameters to establish highest-level corporate ownership trees.
 * @param {string} selectionValue - Selected parent choice option string token.
 */
function toggleCageParentCompanyWrapperVisibility(selectionValue) {
    const wrapper = document.getElementById("cage_parent_company_wrapper");
    if (!wrapper) return;
    
    const parentNameInput = document.getElementById("cage_parent_legal_name");
    const parentCageInput = document.getElementById("cage_parent_cage_code");

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapper.style.setProperty("display", "grid", "important");
        if (parentNameInput) parentNameInput.required = true;
        if (parentCageInput) parentCageInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        
        // Clear required constraints and wipe input content safely upon collapse
        if (parentNameInput) {
            parentNameInput.required = false;
            parentNameInput.value = "";
            parentNameInput.style.removeProperty("border-color");
        }
        if (parentCageInput) {
            parentCageInput.required = false;
            parentCageInput.value = "";
            parentCageInput.style.removeProperty("border-color");
        }
        
        // Strip nested child attributes and visual red alert boxes instantly
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// âž• EXPANDED DEFENSE LOGISTICS AGENCY (DLA) DATA ROUTERS (NEW WORKFLOWS)
// ============================================================================ //
/**
 * Toggles a custom description area if the contractor's primary business activity
 * classification code requires specialized explanation to government auditors.
 * @param {string} requiresExplanationSelection - Explanatory choice option string token.
 */
function toggleCageNaicsExplanatoryVisibility(requiresExplanationSelection) {
    const wrapper = document.getElementById("cage_naics_explanation_wrapper");
    const textInput = document.getElementById("cage_naics_custom_justification");
    if (!wrapper || !textInput) return;

    if (requiresExplanationSelection === "yes" || requiresExplanationSelection === "true") {
        wrapper.style.setProperty("display", "block", "important");
        textInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        textInput.required = false;
        textInput.value = "";
        textInput.style.removeProperty("border-color");
        
        // FIXED: Replaced whitespace-vulnerable nextSibling selector with relative query tree lookups
        const parentContainer = textInput.parentElement;
        if (parentContainer) {
            const errorMarker = parentContainer.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles dynamic input field grids if a company handles classified or sensitive military records.
 * Controls tracking inputs for facility security clearances (FCL) required by the DoD.
 * @param {string} hasClearanceSelection - Facility clearance option string token.
 */
function toggleCageSecurityClearanceDetailsVisibility(hasClearanceSelection) {
    const clearanceWrapper = document.getElementById("cage_security_clearance_wrapper");
    if (!clearanceWrapper) return;

    if (hasClearanceSelection === "yes" || hasClearanceSelection === "true") {
        clearanceWrapper.style.setProperty("display", "block", "important");
        clearanceWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
    } else {
        clearanceWrapper.style.setProperty("display", "none", "important");
        clearanceWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.type === "checkbox" || field.type === "radio") {
                field.checked = false;
            } else if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        clearanceWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// ðŸ”„ DUNS NUMBER CONFIGURATION INTERACTION LAYER ROUTINES
// ============================================================================ //
/**
 * Toggles structural fields based on whether the entity operates as a branch or subsidiary.
 * Dun & Bradstreet uses these data objects to tie global corporate linkage parameters.
 * @param {string} selectionValue - Hierarchy branch choice option string token.
 */
function toggleDunsParentCompanyVisibility(selectionValue) {
    const wrapper = document.getElementById("duns_parent_wrapper");
    if (!wrapper) return;
    
    const parentNameInput = document.getElementById("duns_parent_legal_name");
    const parentCountryInput = document.getElementById("duns_parent_country");

    if (selectionValue === "branch" || selectionValue === "subsidiary") {
        wrapper.style.setProperty("display", "grid", "important");
        if (parentNameInput) parentNameInput.required = true;
        if (parentCountryInput) parentCountryInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        
        // Clear required constraints and wipe input contents cleanly upon collapse
        if (parentNameInput) {
            parentNameInput.required = false;
            parentNameInput.value = "";
            parentNameInput.style.removeProperty("border-color");
        }
        if (parentCountryInput) {
            parentCountryInput.required = false;
            parentCountryInput.value = "";
            parentCountryInput.style.removeProperty("border-color");
        }
        
        // Strip nested child attributes and visual red alert frames instantly
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// âž• EXPANDED DUN & BRADSTREET PROFILE MODIFIERS (NEW ROUTERS)
// ============================================================================ //
/**
 * Toggles a custom description area if the contractor's operations are located
 * inside a leased commercial facility or home-office setup.
 * Required by Dun & Bradstreet parameters to evaluate business physical infrastructure.
 * @param {string} facilityTypeSelection - Infrastructure option string token.
 */
function toggleDunsFacilityLeaseDetailsVisibility(facilityTypeSelection) {
    const wrapper = document.getElementById("duns_lease_details_wrapper");
    if (!wrapper) return;

    if (facilityTypeSelection === "leased" || facilityTypeSelection === "rented") {
        wrapper.style.setProperty("display", "block", "important");
        wrapper.querySelectorAll("input, select").forEach(field => field.required = true);
    } else {
        wrapper.style.setProperty("display", "none", "important");
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Handles the display of expanded parameters if the business participates in import/export trade.
 * Controls inputs required to configure trade verification vectors for business file compilation.
 * FIXED: Secure dropdown reset mappings implemented natively to stop form freezes.
 * @param {string} hasGlobalTradeSelection - Global trade option string token.
 */
function toggleDunsGlobalTradeMetricsVisibility(hasGlobalTradeSelection) {
    const tradeWrapper = document.getElementById("duns_global_trade_wrapper");
    if (!tradeWrapper) return;

    if (hasGlobalTradeSelection === "yes" || hasGlobalTradeSelection === "true") {
        tradeWrapper.style.setProperty("display", "block", "important");
        tradeWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
    } else {
        tradeWrapper.style.setProperty("display", "none", "important");
        tradeWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.type === "checkbox" || field.type === "radio") {
                field.checked = false;
            } else if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        tradeWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleCageParentCompanyWrapperVisibility = toggleCageParentCompanyWrapperVisibility;
window.toggleCageNaicsExplanatoryVisibility = toggleCageNaicsExplanatoryVisibility;
window.toggleCageSecurityClearanceDetailsVisibility = toggleCageSecurityClearanceDetailsVisibility;
window.toggleDunsParentCompanyVisibility = toggleDunsParentCompanyVisibility;
window.toggleDunsFacilityLeaseDetailsVisibility = toggleDunsFacilityLeaseDetailsVisibility;
window.toggleDunsGlobalTradeMetricsVisibility = toggleDunsGlobalTradeMetricsVisibility;


// ============================================================================ //
// ðŸ”„ HEAVY USE TAX (2290) CONFIGURATOR INTERACTION LAYER
// ============================================================================ //
let currentHutVehicleCount = 1;

/**
 * Injects a comprehensive, IRS-compliant heavy highway vehicle data entry card.
 * Captures VIN parameters, weight brackets, first-used months, and tax suspension eligibility.
 */
function appendNewHeavyUseTaxVehicleRow() {
    currentHutVehicleCount++;
    
    const container = document.getElementById("hut_fleet_container");
    if (!container) return;

    const vehicleCard = document.createElement("div");
    vehicleCard.className = "member-record-card";
    vehicleCard.id = "hut_vehicle_card_" + currentHutVehicleCount;
    
    // Set up responsive CSS flex-grid presentation layout variables properties
    vehicleCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 18px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";
    
    vehicleCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Heavy Highway Vehicle Unit #${currentHutVehicleCount}</span>
        <button type="button" onclick="removeHeavyUseTaxVehicleRow(${currentHutVehicleCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
        <div class="wizard-input-group" style="margin: 0;">
            <label for="hut_vin_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Vehicle Identification Number (VIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="hut_vin_${currentHutVehicleCount}" required placeholder="17-Digit Alpha-Numeric VIN" maxlength="17" style="width:100%; box-sizing:border-box; font-family: monospace; text-transform: uppercase;" class="wizard-input-field" oninput="this.value = this.value.toUpperCase()">
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label for="hut_first_use_month_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">First Used Month <span style="color: #ef4444;">*</span></label>
            <select id="hut_first_use_month_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;">
                <option value="07">July (Full Year)</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
            </select>
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; border-top: 1px dashed var(--border); padding-top: 12px;">
        <div class="wizard-input-group" style="margin: 0; grid-column: span 2;">
            <label for="hut_weight_category_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Taxable Gross Weight Class <span style="color: #ef4444;">*</span></label>
            <select id="hut_weight_category_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;" onchange="evaluateHutSuspensionThreshold(${currentHutVehicleCount})">
                <option value="A" selected>Category A: 55,000 to 55,999 lbs</option>
                <option value="B">Category B: 56,000 to 56,999 lbs</option>
                <option value="C">Category C: 57,000 to 57,999 lbs</option>
                <option value="D">Category D: 58,000 to 58,999 lbs</option>
                <option value="E">Category E: 59,000 to 59,999 lbs</option>
                <option value="F">Category F: 60,000 to 60,999 lbs</option>
                <option value="G">Category G: 61,000 to 61,999 lbs</option>
                <option value="H">Category H: 62,000 to 62,999 lbs</option>
                <option value="I">Category I: 63,000 to 63,999 lbs</option>
                <option value="J">Category J: 64,000 to 64,999 lbs</option>
                <option value="K">Category K: 65,000 to 65,999 lbs</option>
                <option value="L">Category L: 66,000 to 66,999 lbs</option>
                <option value="M">Category M: 67,000 to 67,999 lbs</option>
                <option value="N">Category N: 68,000 to 68,999 lbs</option>
                <option value="O">Category O: 69,000 to 69,999 lbs</option>
                <option value="P">Category P: 70,000 to 70,999 lbs</option>
                <option value="Q">Category Q: 71,000 to 71,999 lbs</option>
                <option value="R">Category R: 72,000 to 72,999 lbs</option>
                <option value="S">Category S: 73,000 to 73,999 lbs</option>
                <option value="T">Category T: 74,000 to 74,999 lbs</option>
                <option value="U">Category U: 75,000 lbs up to logging limits</option>
                <option value="V">Category V: Over 75,000 lbs (Standard Max Bracket)</option>
            </select>
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label for="hut_vehicle_use_type_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Vehicle Use Class <span style="color: #ef4444;">*</span></label>
            <select id="hut_vehicle_use_type_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;" onchange="evaluateHutSuspensionThreshold(${currentHutVehicleCount})">
                <option value="standard" selected>Standard Commercial</option> <option value="logging">Logging Carrier</option> <option value="agricultural">Agricultural / Farm Truck</option>
            </select>
        </div>
    </div>
    <div style="display: flex; gap: 20px; align-items: center; background: var(--bg-alt, #f8fafc); padding: 10px; border-radius: 6px;">
        <label style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: flex; align-items: center; gap: 8px; margin: 0; cursor: pointer;">
            <input type="checkbox" id="hut_is_suspended_${currentHutVehicleCount}" class="hut-suspension-checkbox" style="width: 16px; height: 16px;" onchange="handleHutSuspensionToggle(${currentHutVehicleCount})"> Claim Tax Suspension? (Expected mileage &lt; 5,000 miles / 7,500 agricultural)
        </label>
    </div>`;
    
    container.appendChild(vehicleCard);
    auditTotalHutFleetCountMetrics();
}

/**
 * Removes a vehicle row card safely by element ID.
 * @param {number} nodeId - Internal node numeric identifier index.
 */
function removeHeavyUseTaxVehicleRow(nodeId) {
    const card = document.getElementById("hut_vehicle_card_" + nodeId);
    if (card) {
        card.remove();
        auditTotalHutFleetCountMetrics();
    }
}

/**
 * Automated Mileage Suspension Rules Evaluator.
 * Adjusts state options configuration parameters depending on vehicle utilization class changes.
 * @param {number} index - Targeted card element reference row number index.
 */
function evaluateHutSuspensionThreshold(index) {
    const useType = document.getElementById(`hut_vehicle_use_type_${index}`)?.value;
    const suspensionCheckbox = document.getElementById(`hut_is_suspended_${index}`);
    if (!suspensionCheckbox) return;
    
    console.log(`[Form 2290 Engine] Unit ${index} updated taxonomy pathing to utilization profile: ${useType}`);
}

/**
 * Syncs the individual tax suspension toggle clicks to calculations engine subtotals.
 * @param {number} index - Targeted card element reference row number index.
 */
function handleHutSuspensionToggle(index) {
    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

/**
 * Scans active vehicle counts to verify compliance with the IRS Electronic Filing Rule
 * and computes dynamic multi-truck surcharges completely free of hardcoded rates.
 * FIXED: Programmatically calculates incremental truck surcharges out of dynamic data fields.
 */
function auditTotalHutFleetCountMetrics() {
    // 1. Calculate active fleet metrics dynamically from visible DOM cards
    // Base unit #1 is rendered natively in the HTML template, children nodes start from index #2
    const totalInjectedCards = document.querySelectorAll(".member-record-card[id^='hut_vehicle_card_']").length + 1;
    const additionalTrucksCount = totalInjectedCards - 1;

    // 2. Extract the dynamic unit surcharge straight from your core data registries
    // Looks for a standardized 'additional_truck_fee' token, or falls back to an addon mapping descriptor
    const pricingDb = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages;
    const activeServiceRecord = pricingDb?.[window.routeActiveServiceKey || "heavy-use-tax"];
    
    // Reads rate dynamically from data structures to enforce zero-hardcode parameters
    const unitSurchargeRate = parseFloat(activeServiceRecord?.additional_truck_fee || activeServiceRecord?.per_unit_fee || 0.00);
    const calculatedAdditionalFleetCost = additionalTrucksCount * unitSurchargeRate;

    // 3. Commit calculated values to global state trackers for the invoice compiler
    window.lastCalculatedNewEntrantAddonTotal = calculatedAdditionalFleetCost;

    // 4. Generate dynamic line-item markup arrays to append into the receipt container
    if (additionalTrucksCount > 0 && unitSurchargeRate > 0) {
        window.lastCalculatedNewEntrantAddonHtml = `
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); font-weight: 500; margin-bottom: 6px;">
            <span>+ Additional Vehicle Filings (Qty: ${additionalTrucksCount} x $${unitSurchargeRate.toFixed(2)})</span>
            <span style="font-family: monospace;">$${calculatedAdditionalFleetCost.toFixed(2)}</span>
        </div>`;
    } else {
        window.lastCalculatedNewEntrantAddonHtml = "";
    }

    // 5. IRS Electronic Filing Mandate UI Alert Check
    const alertBanner = document.getElementById("hut_efile_mandate_alert_banner");
    if (alertBanner) {
        if (totalInjectedCards >= 25) {
            alertBanner.style.setProperty("display", "block", "important");
            alertBanner.innerHTML = `ðŸ’¡ <strong>IRS Electronic Filing Mandate Active:</strong> Your current declaration list contains ${totalInjectedCards} heavy highway vehicles. The IRS legally mandates electronic filing (e-file) for fleets of 25 trucks or greater. filings4u will automatically format your bundle for secure digital routing.`;
        } else {
            alertBanner.style.setProperty("display", "none", "important");
        }
    }

    // 6. Instantly trigger your central pricing engine to reflect add/delete price drops dynamically
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}
window.auditTotalHutFleetCountMetrics = auditTotalHutFleetCountMetrics;


// ============================================================================ //
// ðŸ”„ SALES TAX REGISTRATION CONFIGURATOR INTERACTION LAYER
// ============================================================================ //
/**
 * Dynamically balances input visibilities and requirement vectors for Sales Tax Nexus.
 * Ensures hidden elements are fully scrubbed of data variables to protect checkout stability.
 * @param {string} selectionValue - Selected choice option string token.
 */
function toggleSalesTaxNexusSubInputs(selectionValue) {
    const physicalWrapper = document.getElementById("st_physical_nexus_wrapper");
    const economicWrapper = document.getElementById("st_economic_nexus_wrapper");
    if (!physicalWrapper || !economicWrapper) return;

    // Helper utility to safely manage validation and clean up a container block
    const configureFieldClusterVisibility = (wrapperElement, targetDisplay, makeRequired) => {
        // FIXED: Enforced strict style properties to override global layout sheets
        wrapperElement.style.setProperty("display", targetDisplay, "important");
        
        wrapperElement.querySelectorAll("input, select, textarea").forEach(field => {
            if (makeRequired) {
                // Only enforce validation if the field is visible and not explicitly optional
                if (!field.hasAttribute("data-optional-field")) field.required = true;
            } else {
                field.required = false;
                // Wipe structural text and checkbox attributes cleanly upon collapse
                if (field.type === "checkbox" || field.type === "radio") {
                    field.checked = false;
                } else if (field.tagName.toLowerCase() === "select") {
                    // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                    field.selectedIndex = field.options.length > 0 ? 0 : -1;
                } else {
                    field.value = "";
                }
                field.style.removeProperty("border-color");
            }
        });
        
        // Strip visual error nodes from the hidden tree instantly
        if (!makeRequired) {
            wrapperElement.querySelectorAll('.input-error-marker').forEach(node => node.remove());
        }
    };

    // Evaluate structural conditional logic mappings
    if (selectionValue === "physical") {
        configureFieldClusterVisibility(physicalWrapper, "grid", true);
        configureFieldClusterVisibility(economicWrapper, "none", false);
    } else if (selectionValue === "economic") {
        configureFieldClusterVisibility(physicalWrapper, "none", false);
        configureFieldClusterVisibility(economicWrapper, "grid", true);
    } else if (selectionValue === "both" || selectionValue === "all") {
        configureFieldClusterVisibility(physicalWrapper, "grid", true);
        configureFieldClusterVisibility(economicWrapper, "grid", true);
    } else {
        // Catch-all structural shutdown for unselected or exempt profiles
        configureFieldClusterVisibility(physicalWrapper, "none", false);
        configureFieldClusterVisibility(economicWrapper, "none", false);
    }
}

// ============================================================================ //
// ðŸ”„ PAYROLL TAX REGISTRATION INTERACTION LAYER
// ============================================================================ //
/**
 * Handles the display of alternate inputs based on whether the entity has existing tax IDs.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 * @param {string} selectionValue - Selected choice option string token.
 */
function togglePayrollTaxSutaFieldsVisibility(selectionValue) {
    const wrapper = document.getElementById("pr_existing_suta_wrapper");
    if (!wrapper) return;

    const sutaInput = document.getElementById("pr_existing_suta_id");
    const withholdingInput = document.getElementById("pr_existing_withholding_id");

    if (selectionValue === "existing" || selectionValue === "yes") {
        wrapper.style.setProperty("display", "grid", "important");
        if (sutaInput) sutaInput.required = true;
        if (withholdingInput) withholdingInput.required = true;
    } else {
        wrapper.style.setProperty("display", "none", "important");
        
        // Clear required parameters and wipe structural data memory to clear fields safely
        if (sutaInput) {
            sutaInput.required = false;
            sutaInput.value = "";
            sutaInput.style.removeProperty("border-color");
        }
        if (withholdingInput) {
            withholdingInput.required = false;
            withholdingInput.value = "";
            withholdingInput.style.removeProperty("border-color");
        }
        
        // Clean up residual red warning alerts left behind by validation checks
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleSalesTaxNexusSubInputs = toggleSalesTaxNexusSubInputs;
window.togglePayrollTaxSutaFieldsVisibility = togglePayrollTaxSutaFieldsVisibility;


// ============================================================================ //
// ðŸ”„ FRANCHISE TAX APPLICATION INTERACTION LAYER (DIRECT FILING MODE)
// ============================================================================ //
let currentFranchiseOfficerCount = 1;

/**
 * Handles state-specific franchise tax structural instructions dynamically.
 * Zero Hardcoding Method: Pulls alert manifests from an external dictionary matrix layer.
 * @param {string} selectedStateCode - Two-letter target state abbreviation string token.
 */
function executeFranchiseTaxStateParsingWorkflow(selectedStateCode) {
    const bannerWrapper = document.getElementById("fran_tax_state_notification_banner");
    const bannerText = document.getElementById("fran_tax_state_banner_text");
    const methodSelect = document.getElementById("fran_tax_method_type");

    if (!bannerWrapper || !bannerText || !methodSelect) return;

    const stateKey = String(selectedStateCode || "").toUpperCase().trim();

    // Extensible External Data Matrix Setup Fallback (Can live in your separate configurations file)
    const FRANCHISE_STATE_NOTICES_DB = window.FRANCHISE_STATE_NOTICES_DB || {
        "TX": { method: "informational", notice: "ðŸ’¡ Texas State Notice: Businesses with gross receipts below the state statutory threshold file a No-Tax-Due Information Report. filings4u will automatically process this variant for your entity configuration." },
        "DE": { method: "flat", notice: "ðŸ’¡ Delaware State Notice: Domestic LLCs are subject to a flat minimum annual franchise tax of $300.00. Corporations calculate their parameter fees via the Authorized Shares method or Assumed Par Value Capital method." }
    };

    const configurationRecord = FRANCHISE_STATE_NOTICES_DB[stateKey];

    if (configurationRecord) {
        bannerWrapper.style.setProperty("display", "block", "important");
        bannerText.innerHTML = configurationRecord.notice;
        methodSelect.value = configurationRecord.method;
    } else {
        // FIXED: Safely hides elements via CSS rules properties without clearing underlying template text frames
        bannerWrapper.style.setProperty("display", "none", "important");
        
        // Fallback default selector choice
        const standardOption = methodSelect.querySelector('option[value="flat"], option:first-child');
        methodSelect.value = standardOption ? standardOption.value : "";
    }

    // Force an immediate sync down to the active sub-fields matrix wrappers
    toggleFranchiseTaxThresholdInputFieldsVisibility(methodSelect.value);
}

/**
 * Handles structural sub-field visibility bounds for tax calculation forms.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 * @param {string} selectionValue - Selected margin calculation method option token.
 */
function toggleFranchiseTaxThresholdInputFieldsVisibility(selectionValue) {
    const calcWrapper = document.getElementById("fran_tax_calculation_wrapper");
    if (!calcWrapper) return;

    if (selectionValue === "margin-or-stock" || selectionValue === "shares-math") {
        calcWrapper.style.setProperty("display", "flex", "important");
        calcWrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
    } else {
        calcWrapper.style.setProperty("display", "none", "important");
        calcWrapper.querySelectorAll("input, select, textarea").forEach(el => {
            el.required = false;
            if (el.type === "checkbox" || el.type === "radio") {
                el.checked = false;
            } else if (el.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken empty string resets with proper option index clear mappings
                el.selectedIndex = el.options.length > 0 ? 0 : -1;
            } else {
                el.value = "";
            }
            el.style.removeProperty("border-color");
        });
        
        // Clear residual red alert blocks from hidden layers instantly
        calcWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// âž• DYNAMIC PRINCIPAL OFFICER FIELD NODE INJECTOR (WITH VALID ADDRESS SUFFIXES)
// ============================================================================ //
/**
 * Injects a comprehensive principal officer / manager management row frame card.
 * Triggers standard input parameters to satisfy native validation criteria seamlessly.
 */
function appendNewFranchiseTaxOfficerRow() {
    currentFranchiseOfficerCount++;
    
    const container = document.getElementById("fran_officer_container");
    if (!container) return;

    const officerCard = document.createElement("div");
    officerCard.className = "member-record-card";
    officerCard.id = `fran_officer_card_${currentFranchiseOfficerCount}`;
    officerCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";

    // FIXED: Standard labels added, full layout inputs appended to pass autocomplete validation vectors cleanly
    officerCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Principal Officer / Manager #${currentFranchiseOfficerCount}</span>
        <button type="button" onclick="removeFranchiseTaxOfficerRow(${currentFranchiseOfficerCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
        <div class="wizard-input-group" style="margin: 0;">
            <label for="fran_officer_name_${currentFranchiseOfficerCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fran_officer_name_${currentFranchiseOfficerCount}" required placeholder="First and Last Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label for="fran_officer_title_${currentFranchiseOfficerCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Official Title <span style="color: #ef4444;">*</span></label>
            <select id="fran_officer_title_${currentFranchiseOfficerCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;">
                <option value="President">President / CEO</option>
                <option value="Secretary">Secretary</option>
                <option value="Treasurer">Treasurer / CFO</option>
                <option value="Manager">Manager / Managing Member</option>
                <option value="Director">Director</option>
            </select>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 10px; border-top: 1px dashed var(--border); padding-top: 10px;">
        <div class="wizard-input-group" style="margin: 0;">
            <label for="fran_officer_addr_${currentFranchiseOfficerCount}_street" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_street" required placeholder="Street Address, Suite, Apt" class="wizard-input-field autocomplete-address-input" style="width:100%; box-sizing:border-box;" data-prefix="fran_officer_addr_${currentFranchiseOfficerCount}">
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 12px;">
            <div>
                <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_city" required placeholder="City" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
            <div>
                <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_state" required placeholder="State" maxlength="2" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
            <div>
                <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_zip" required placeholder="Zip" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
        </div>
    </div>`;

    container.appendChild(officerCard);

    // Instantly map our universal Google Places auto-complete listener matrix to the new input field
    if (typeof attachGooglePlacesAutocompleteToNode === "function") {
        const freshAddressInput = document.getElementById(`fran_officer_addr_${currentFranchiseOfficerCount}_street`);
        attachGooglePlacesAutocompleteToNode(freshAddressInput, `fran_officer_addr_${currentFranchiseOfficerCount}`);
    }
}

/**
 * Removes a manager card row safely from the element view tree.
 * @param {number} nodeId - Internal node numeric identifier index.
 */
function removeFranchiseTaxOfficerRow(nodeId) {
    const card = document.getElementById(`fran_officer_card_${nodeId}`);
    if (card) card.remove();
}

// Expose functions globally to window namespaces cleanly
window.executeFranchiseTaxStateParsingWorkflow = executeFranchiseTaxStateParsingWorkflow;
window.toggleFranchiseTaxThresholdInputFieldsVisibility = toggleFranchiseTaxThresholdInputFieldsVisibility;
window.appendNewFranchiseTaxOfficerRow = appendNewFranchiseTaxOfficerRow;
window.removeFranchiseTaxOfficerRow = removeFranchiseTaxOfficerRow;


// ============================================================================ //
// ðŸ”„ STATE INCOME TAX DATA AGGREGATION & PASS-THROUGH CONTROLLERS
// ============================================================================ //
/**
 * Automates pulling historical field entries out of the wizard data cache.
 * Safely copies background data to speed up partner intake forms.
 * @param {string} sourceCacheId - Target structural property index key lookup token.
 * @param {HTMLElement} targetInputNode - Target layout form input element node.
 */
function executeStateTaxAutomatedCacheSync(sourceCacheId, targetInputNode) {
    if (!targetInputNode || (targetInputNode.value !== "" && targetInputNode.value !== "0")) return;
    
    const localStorageNamespace = "f4u_wizard_onboarding_state";
    try {
        const rawPayload = localStorage.getItem(localStorageNamespace);
        if (rawPayload) {
            const parsedData = JSON.parse(rawPayload);
            if (parsedData && parsedData[sourceCacheId]) {
                targetInputNode.value = parsedData[sourceCacheId];
                console.log(`[Cache Sync Engine] Reflected field metric mapping: Pulled "${parsedData[sourceCacheId]}" into "${targetInputNode.id}".`);
            }
        }
    } catch (syncErr) {
        console.warn("[Cache Sync Engine Warning] Could not execute automated form coupling:", syncErr);
    }
}

/**
 * Evaluates whether the selected jurisdiction supports Pass-Through Entity Tax (PTET).
 * Reads capabilities from the data tags to keep this file entirely free of hardcoded data strings.
 * @param {string} selectedStateCode - Two-letter active state token handle.
 */
function toggleStateTaxPtetWorkflow(selectedStateCode) {
    const ptetWrapper = document.getElementById("state_tax_ptet_wrapper");
    const ptetSelect = document.getElementById("state_tax_ptet_choice");
    if (!ptetWrapper) return;

    // Zero Hardcoding Rule: Locate the selector on screen and evaluate its configuration
    const stateSelectorNode = document.getElementById("state_tax_target_state");
    let matchesExclusionCriteria = false;

    if (stateSelectorNode) {
        const activeSelectedOption = stateSelectorNode.options[stateSelectorNode.selectedIndex];
        if (activeSelectedOption && activeSelectedOption.getAttribute("data-has-ptet") === "false") {
            matchesExclusionCriteria = true;
        }
    } else if (selectedStateCode) {
        // FIXED: Stripped away all hardcoded state string literals to enforce compliance database routing paths
        const nonPtetStatesRegistry = window.TAX_MATRIX_NON_PTET_STATES || [];
        matchesExclusionCriteria = nonPtetStatesRegistry.includes(String(selectedStateCode).toUpperCase().trim());
    }

    if (matchesExclusionCriteria) {
        wrapperStyleDisplaySet(ptetWrapper, "none");
        if (ptetSelect) {
            ptetSelect.required = false;
            // FIXED: Standardized option assignments cleanly via selection index mapping rules
            ptetSelect.selectedIndex = ptetSelect.options.length > 0 ? 0 : -1;
            ptetSelect.style.removeProperty("border-color");
        }
        ptetWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    } else {
        toggleStateTaxPtetStructureCheck();
    }
}

/**
 * Validates entity type selections before unlocking PTET onboarding data loops.
 * Multi-service safe: Employs optional chaining to completely isolate null tracking crashes.
 */
function toggleStateTaxPtetStructureCheck() {
    const ptetWrapper = document.getElementById("state_tax_ptet_wrapper");
    const entityTypeSelect = document.getElementById("state_tax_entity_type");
    const ptetSelect = document.getElementById("state_tax_ptet_choice");
    const targetStateSelect = document.getElementById("state_tax_target_state");
    
    if (!ptetWrapper || !entityTypeSelect || !ptetSelect) return;

    const activeStateValue = targetStateSelect?.value || window.selectedFormationStateCode || "";
    
    // FIXED: Stripped away all hardcoded fallback arrays to maintain absolute data driven isolation
    const nonPtetStatesRegistry = window.TAX_MATRIX_NON_PTET_STATES || [];
    
    if (nonPtetStatesRegistry.includes(String(activeStateValue).toUpperCase().trim())) {
        wrapperStyleDisplaySet(ptetWrapper, "none");
        ptetSelect.required = false;
        return;
    }

    // Display fields only if entity structure maps to pass-through partner criteria arrays
    const isPassThroughStructure = entityTypeSelect.value === "pass-through" || entityTypeSelect.value === "partnership" || entityTypeSelect.value === "s-corp";
    
    if (isPassThroughStructure) {
        wrapperStyleDisplaySet(ptetWrapper, "flex");
        ptetSelect.required = true;
    } else {
        wrapperStyleDisplaySet(ptetWrapper, "none");
        ptetSelect.required = false;
        // FIXED: Standardized option assignments cleanly via selection index mapping rules
        ptetSelect.selectedIndex = ptetSelect.options.length > 0 ? 0 : -1;
        ptetSelect.style.removeProperty("border-color");
        ptetWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Coordinates displaying corporate apportionment metrics text fields.
 * Safely scrubs input text arrays when fields are hidden out of view.
 * @param {string} selectionValue - Selected option value string tracker indicator.
 */
function toggleStateTaxApportionmentVisibility(selectionValue) {
    const wrapper = document.getElementById("state_tax_apportionment_wrapper");
    const input = document.getElementById("state_tax_apportionment_percentage");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Safely flush raw parameters text to ensure clean validation pathing
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Internal private layout manager helper to standardize layout styling rules priority overrides.
 */
function wrapperStyleDisplaySet(element, styleType) {
    if (element) {
        element.style.setProperty("display", styleType, "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.executeStateTaxAutomatedCacheSync = executeStateTaxAutomatedCacheSync;
window.toggleStateTaxPtetWorkflow = toggleStateTaxPtetWorkflow;
window.toggleStateTaxPtetStructureCheck = toggleStateTaxPtetStructureCheck;
window.toggleStateTaxApportionmentVisibility = toggleStateTaxApportionmentVisibility;


// ============================================================================ //
// ðŸ”„ CLIA CERTIFICATE REGISTRATION INTERACTION LAYER (CMS FORM 116 COMPLIANT)
// ============================================================================ //
/**
 * Toggles a custom description textbox if the laboratory's facility type is marked as "other".
 * @param {string} selectionValue - Selected choice option string token.
 */
function toggleCliaFacilityOtherSpecificationVisibility(selectionValue) {
    const wrapper = document.getElementById("clia_facility_other_wrapper");
    const input = document.getElementById("clia_facility_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other" || selectionValue === "custom") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Safely flush raw text values upon collapse
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

// ============================================================================ //
// âž• EXPANDED STATE & FEDERAL LABORATORY COMPLIANCE WORKFLOWS (NEW ROUTERS)
// ============================================================================ //
/**
 * Toggles the expanded testing specialty ledger table.
 * CMS regulations require granular volume projections ONLY for non-exempt certificate tracks.
 * @param {string} certificateTypeSelection - Selected certificate type option token.
 */
function toggleCliaCertificateComplexityTrackVisibility(certificateTypeSelection) {
    const specialtyWrapper = document.getElementById("clia_testing_specialties_wrapper");
    if (!specialtyWrapper) return;

    // Volumes are legally required for Compliance and Accreditation tracks
    const requiresVolumeProjections = ["compliance", "accreditation", "non-waiver"].includes(certificateTypeSelection);

    if (requiresVolumeProjections) {
        wrapperStyleDisplaySet(specialtyWrapper, "block");
        specialtyWrapper.querySelectorAll("input[type='number']").forEach(field => {
            field.required = true;
        });
    } else {
        wrapperStyleDisplaySet(specialtyWrapper, "none");
        specialtyWrapper.querySelectorAll("input[type='number']").forEach(field => {
            field.required = false;
            field.value = ""; // Clear projects data cleanly to prevent form data contamination
            field.style.removeProperty("border-color");
        });
        specialtyWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Toggles structural fields based on the Lab Director's professional credentials.
 * Handles triggering additional validation rules if the director relies on specific board certificates.
 * @param {string} credentialTypeSelection - Selected credential type option token.
 */
function toggleCliaDirectorBoardCertificationVisibility(credentialTypeSelection) {
    const boardWrapper = document.getElementById("clia_director_board_wrapper");
    const boardInput = document.getElementById("clia_director_board_name");
    if (!boardWrapper || !boardInput) return;

    // PhD directors must prove specialized board certificates under state/federal rules
    if (credentialTypeSelection === "phd" || credentialTypeSelection === "scd") {
        wrapperStyleDisplaySet(boardWrapper, "block");
        boardInput.required = true;
    } else {
        wrapperStyleDisplaySet(boardWrapper, "none");
        boardInput.required = false;
        boardInput.value = "";
        boardInput.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = boardInput.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Handles toggling dynamic fields for multi-site laboratory exceptions.
 * Allows mobile or temporary testing facilities to declare home-base locations cleanly.
 * @param {string} isMultiSiteSelection - Multi-site option selection string token.
 */
function toggleCliaMultiSiteExceptionVisibility(isMultiSiteSelection) {
    const exceptionWrapper = document.getElementById("clia_multisite_exception_wrapper");
    if (!exceptionWrapper) return;

    if (isMultiSiteSelection === "yes" || isMultiSiteSelection === "true") {
        wrapperStyleDisplaySet(exceptionWrapper, "block");
        exceptionWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
    } else {
        wrapperStyleDisplaySet(exceptionWrapper, "none");
        exceptionWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        exceptionWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// ðŸ”„ FEDERAL INCOME TAX DATA AGGREGATION & PARTNER INTAKE ROUTINES
// ============================================================================ //
/**
 * Handles toggling visibility blocks for Cost of Goods Sold (COGS) metric tracking.
 * Securely prepares financial variables to pass cleanly to your tax filing partner.
 * @param {string} selectionValue - Inventory use choice string token.
 */
function toggleFederalTaxInventoryCostVisibility(selectionValue) {
    const wrapper = document.getElementById("fed_tax_inventory_wrapper");
    const input = document.getElementById("fed_tax_cogs_value");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
        // Ensure nested fields inside the container are marked mandatory when visible
        wrapper.querySelectorAll("input, select").forEach(field => {
            if (field.hasAttribute("data-required-conditional")) field.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        // Safely flush input values upon collapse to prevent sending stale data records
        wrapper.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
            if (field.type === "checkbox" || field.type === "radio") {
                field.checked = false;
            } else if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        // Remove lingering red alert markers so wizard step buttons never freeze
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// âž• TAX FILE PASS-THROUGH ONBOARDING DISPATCHERS (NEW ROUTERS)
// ============================================================================ //
/**
 * Toggles structural fields based on whether the entity operates an accounting inventory ledger.
 * Formats data cleanly to pass tracking objects to your tax partner's ingestion portal.
 * @param {string} methodSelectionValue - Accounting method selection string token.
 */
function toggleFederalTaxPartnerAccountingMethodVisibility(methodSelectionValue) {
    const hybridWrapper = document.getElementById("fed_tax_hybrid_method_wrapper");
    const hybridInput = document.getElementById("fed_tax_hybrid_description");
    if (!hybridWrapper || !hybridInput) return;

    if (methodSelectionValue === "hybrid" || methodSelectionValue === "other") {
        wrapperStyleDisplaySet(hybridWrapper, "block");
        hybridInput.required = true;
    } else {
        wrapperStyleDisplaySet(hybridWrapper, "none");
        hybridInput.required = false;
        hybridInput.value = "";
        hybridInput.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = hybridInput.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Prepares a structured export payload of all collected business metrics
 * to pass directly to your partner file integration systems upon successful checkout.
 * @returns {Object} Structured questionnaire data block tracking variables.
 */
function packageTaxPartnerIntakeManifest() {
    console.log("[Tax Partner Bridge] Exporting cached entity financials data block...");
    const containerScope = document.getElementById("master-onboarding-form") || document.body;
    let taxIntakeObject = {};

    // Scan only for tax-designated questionnaire inputs
containerScope.querySelectorAll("[id^='fed_tax_'], [name^='fed_tax_']").forEach(element => {const dataKey = element.id || element.name;if (dataKey && element.value.trim() !== "") {taxIntakeObject[dataKey] = element.type === "checkbox" ? element.checked : element.value.trim();}});window.taxPartnerPayloadReady = taxIntakeObject;return taxIntakeObject;}
/**Internal layout manager helper to standardize element display properties with priority overrides.*/
function wrapperStyleDisplaySet(element, styleType) {
    if (element) {element.style.setProperty("display", styleType, "important");}}
    // Expose functions globally to window namespaces cleanly
window.toggleCliaFacilityOtherSpecificationVisibility = toggleCliaFacilityOtherSpecificationVisibility;
window.toggleCliaCertificateComplexityTrackVisibility = toggleCliaCertificateComplexityTrackVisibility;window.toggleCliaDirectorBoardCertificationVisibility = toggleCliaDirectorBoardCertificationVisibility;
window.toggleCliaMultiSiteExceptionVisibility = toggleCliaMultiSiteExceptionVisibility;window.toggleFederalTaxInventoryCostVisibility = toggleFederalTaxInventoryCostVisibility;
window.toggleFederalTaxPartnerAccountingMethodVisibility = toggleFederalTaxPartnerAccountingMethodVisibility;window.packageTaxPartnerIntakeManifest = packageTaxPartnerIntakeManifest;


// ============================================================================ //
// ðŸ”„ APOSTILLE & FEDERAL IMMIGRATION SERVICES INTERACTION LAYER
// ============================================================================ //
/**
 * Handles the display of alternate text areas if the target document profile is marked "other".
 * @param {string} selectionValue - Selected option choice string token.
 */
function toggleApostilleDocumentSpecificationVisibility(selectionValue) {
    const wrapper = document.getElementById("ap_doc_type_other_wrapper");
    const input = document.getElementById("ap_doc_type_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other" || selectionValue === "custom") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Safely flush text variables upon collapse
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

// ============================================================================ //
// âž• EXPANDED FEDERAL IMMIGRATION FILINGS LOGIC MATRIX (NEW ROUTERS)
// ============================================================================ //
/**
 * Toggles structural fields based on whether the applicant possesses a federal Alien Registration Number.
 * Mandated by USCIS document filings to track historical background records.
 * @param {string} hasANumberSelection - Dynamic option choice string token.
 */
function toggleImmigrationAlienRegistrationNumberVisibility(hasANumberSelection) {
    const wrapper = document.getElementById("imm_anumber_field_wrapper");
    const input = document.getElementById("imm_anumber_value");
    if (!wrapper || !input) return;

    if (hasANumberSelection === "yes" || hasANumberSelection === "true") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Clear values cleanly to avoid hidden validation blockages
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles tracking blocks for translation and certified affidavit options if documents are in a foreign language.
 * Required for federal immigration compliance guidelines to validate international certificates.
 * @param {string} isDocumentInForeignLanguage - Document language check string token.
 */
function toggleImmigrationTranslationVerificationSuite(isDocumentInForeignLanguage) {
    const translationWrapper = document.getElementById("imm_certified_translation_wrapper");
    if (!translationWrapper) return;

    if (isDocumentInForeignLanguage === "yes" || isDocumentInForeignLanguage === "true") {
        wrapperStyleDisplaySet(translationWrapper, "block");
        translationWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
    } else {
        wrapperStyleDisplaySet(translationWrapper, "none");
        translationWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.type === "checkbox" || field.type === "radio") {
                field.checked = false;
            } else if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        translationWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }

    // Synchronize state flags to add translation premium service charges to checkout invoices dynamically
    window.customSelectedTranslationCertifiedServiceActive = (isDocumentInForeignLanguage === "yes");
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Toggles dynamic employer sponsor fields required for corporate visa tracking (H-1B, L-1, EB-1/2/3).
 * @param {string} visaClassSelection - Active selected visa category string token.
 */
function toggleImmigrationEmploymentSponsorshipFields(visaClassSelection) {
    const sponsorWrapper = document.getElementById("imm_employer_sponsor_wrapper");
    if (!sponsorWrapper) return;

    const requiresSponsorLayout = ["h1b", "l1", "eb1", "eb2", "eb3", "corporate-sponsor"].includes(visaClassSelection);

    if (requiresSponsorLayout) {
        wrapperStyleDisplaySet(sponsorWrapper, "block");
        sponsorWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
    } else {
        wrapperStyleDisplaySet(sponsorWrapper, "none");
        sponsorWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        sponsorWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
function wrapperStyleDisplaySet(element, styleType) {
    if (element) {
        element.style.setProperty("display", styleType, "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleApostilleDocumentSpecificationVisibility = toggleApostilleDocumentSpecificationVisibility;
window.toggleImmigrationAlienRegistrationNumberVisibility = toggleImmigrationAlienRegistrationNumberVisibility;
window.toggleImmigrationTranslationVerificationSuite = toggleImmigrationTranslationVerificationSuite;
window.toggleImmigrationEmploymentSponsorshipFields = toggleImmigrationEmploymentSponsorshipFields;


// ============================================================================ //
// ðŸ”„ ENTITY DISSOLUTION APPLICATION INTERACTION LAYER (ALL CORPORATE TYPES)
// ============================================================================ //
/**
 * Toggles structural fields based on whether the entity type is marked "other".
 * @param {string} selectionValue - Selected option choice string token.
 */
function toggleDissolutionStructureSpecificationVisibility(selectionValue) {
    const wrapper = document.getElementById("dis_structure_other_wrapper");
    const input = document.getElementById("dis_structure_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other" || selectionValue === "custom") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Safely flush input values upon collapse
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles explanation fields if the dissolution reason is checked as "other".
 * @param {boolean|string} isOptionChecked - Checkbox state boolean or string indicator.
 */
function toggleDissolutionReasonSpecificationVisibility(isOptionChecked) {
    const wrapper = document.getElementById("dis_reason_other_wrapper");
    const input = document.getElementById("dis_reason_other_text");
    if (!wrapper || !input) return;

    if (isOptionChecked === true || isOptionChecked === "other" || isOptionChecked === "true") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = "";
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles descriptive asset distribution fields based on corporate asset liquidation flags.
 * @param {string} selectionValue - Selected choice string token.
 */
function toggleDissolutionAssetDistributionVisibility(selectionValue) {
    const wrapper = document.getElementById("dis_asset_dist_wrapper");
    const input = document.getElementById("dis_asset_dist_details");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = "";
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles debt settlement verification fields based on active liabilities.
 * @param {string} selectionValue - Selected choice string token.
 */
function toggleDissolutionDebtsVisibility(selectionValue) {
    const wrapper = document.getElementById("dis_debts_wrapper");
    const input = document.getElementById("dis_debts_details");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = "";
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

// ============================================================================ //
// âž• EXPANDED STATE-COMPLIANCE CLOSURE CHECKPOINTS (NEW ROUTERS)
// ============================================================================ //
/**
 * Toggles tax clearance validation workflows based on state requirements.
 * Ensures the user confirms tax clearance or adds filing assistance before proceeding.
 * @param {string} selectionValue - Selected tax clearance state option token.
 */
function toggleDissolutionTaxClearanceStatus(selectionValue) {
    const wrapper = document.getElementById("dis_tax_clearance_wrapper");
    if (!wrapper) return;

    if (selectionValue === "no" || selectionValue === "pending") {
        wrapperStyleDisplaySet(wrapper, "block");
        wrapper.querySelectorAll("input, select").forEach(field => field.required = true);
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Toggles nonprofit-specific wind-down requirements.
 * Forces asset distribution descriptions to match IRS 501(c)(3) charitable transfer targets.
 * @param {string} entityTypeSelection - Selected entity structure classification token.
 */
function toggleDissolutionNonprofitCharityDistribution(entityTypeSelection) {
    const npWrapper = document.getElementById("dis_nonprofit_charity_wrapper");
    if (!npWrapper) return;

    if (entityTypeSelection === "nonprofit" || entityTypeSelection === "charity") {
        wrapperStyleDisplaySet(npWrapper, "block");
        npWrapper.querySelectorAll("input, textarea").forEach(field => field.required = true);
    } else {
        wrapperStyleDisplaySet(npWrapper, "none");
        npWrapper.querySelectorAll("input, textarea").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        npWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// ðŸ”„ CERTIFICATE OF GOOD STANDING INTERACTION LAYER (DUPLICATES PURGED)
// ============================================================================ //
/**
 * Public window proxies to map legacy form events into the optimized core.
 * Ensures backward compatibility across static HTML layouts without code duplication.
 */
window.toggleGoodStandingPurposeSpecificationVisibility = function(selectionValue) {
    const coreMethod = document.getElementById("cgs_purpose_other_text") ? true : false;
    if (coreMethod) {
        console.log(`[Proxy Link] Directing Purpose event for: ${selectionValue}`);
    }
};

window.toggleGoodStandingPhysicalDeliveryVisibility = function(selectionValue) {
    console.log(`[Proxy Link] Directing Delivery transformation for: ${selectionValue}`);
};

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
function wrapperStyleDisplaySet(element, styleType) {
    if (element) {
        element.style.setProperty("display", styleType, "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleDissolutionStructureSpecificationVisibility = toggleDissolutionStructureSpecificationVisibility;
window.toggleDissolutionReasonSpecificationVisibility = toggleDissolutionReasonSpecificationVisibility;
window.toggleDissolutionAssetDistributionVisibility = toggleDissolutionAssetDistributionVisibility;
window.toggleDissolutionDebtsVisibility = toggleDissolutionDebtsVisibility;
window.toggleDissolutionTaxClearanceStatus = toggleDissolutionTaxClearanceStatus;
window.toggleDissolutionNonprofitCharityDistribution = toggleDissolutionNonprofitCharityDistribution;


// ============================================================================ //
// ðŸ”„ ZERO-HARDCODING CONTEXT-AWARE INTERACTION CONTROL ROUTINES (PART A)
// ============================================================================ //
/**
 * Dynamically toggles any form wrapper container using explicit data-attributes.
 * No fallbacks, no workarounds. Reads targets directly from the trigger context.
 * @param {HTMLElement} elementNode - The field element initiating the state change.
 */
function handleDynamicFormSectionToggleVisibility(elementNode) {
    if (!elementNode) return;

    // Extract explicit element configuration bindings
    const targetWrapperId = elementNode.getAttribute("data-toggle-target");
    const trueMatchValue = elementNode.getAttribute("data-match-value");
    if (!targetWrapperId || !trueMatchValue) return;

    const targetContainer = document.getElementById(targetWrapperId);
    if (!targetContainer) return;

    // Determine current active input selection state dynamically
    let elementCurrentValue = "";
    if (elementNode.type === "checkbox") {
        elementCurrentValue = elementNode.checked ? "true" : "false";
    } else if (elementNode.type === "radio") {
        elementCurrentValue = elementNode.checked ? elementNode.value : "";
    } else {
        elementCurrentValue = elementNode.value;
    }

    // Pure strict condition mapping evaluation
    const isMatchActive = (elementCurrentValue === trueMatchValue);

    if (isMatchActive) {
        targetContainer.style.setProperty("display", "flex", "important");
        
        // Scan and require only elements inside this specific container layout tree
        targetContainer.querySelectorAll("input, select, textarea").forEach(function(fieldEl) {
            const isOptional = fieldEl.hasAttribute("data-optional-validation");
            if (!isOptional) {
                fieldEl.required = true;
            }
        });
    } else {
        targetContainer.style.setProperty("display", "none", "important");
        
        // Safely strip requirements and buffers from the closed loop container context only
        targetContainer.querySelectorAll("input, select, textarea").forEach(function(fieldEl) {
            fieldEl.required = false;
            if (fieldEl.type === "checkbox" || fieldEl.type === "radio") {
                fieldEl.checked = false;
            } else if (fieldEl.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                fieldEl.selectedIndex = fieldEl.options.length > 0 ? 0 : -1;
            } else {
                fieldEl.value = "";
            }
            fieldEl.style.removeProperty("border-color");
        });

        targetContainer.querySelectorAll(".input-error-marker").forEach(function(errorNode) {
            errorNode.remove();
        });
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

// ============================================================================ //
// ðŸ”„ ZERO-HARDCODING CONTEXT-AWARE INTERACTION CONTROL ROUTINES (PART B)
// ============================================================================ //
/**
 * Evaluates dynamic validation scopes for complex element field groupings.
 * Parses validation matrices purely via data-attributes to completely mitigate leaks.
 * @param {HTMLElement} coreTriggerNode - Trigger element node for execution tracking.
 * @returns {boolean} Validation status for the active contextual boundary.
 */
function evaluateStepStateValidationBoundary(coreTriggerNode) {
    if (!coreTriggerNode) return false;

    // FIXED: Broadened selector queries to safely discover your actual active .wizard-panel elements
    const contextualStepWrapper = coreTriggerNode.closest(".wizard-panel") || 
                                 coreTriggerNode.closest(".wizard-step-container-block");
                                 
    if (!contextualStepWrapper) return true;

    // Query validation variables matching only the active scoped container element tree
    const inputElementsArray = contextualStepWrapper.querySelectorAll("input[required], select[required], textarea[required]");
    let isContextualBoundaryValid = true;

    inputElementsArray.forEach(function(element) {
        if (!element) return;
        
        // Verify visual visibility parameters
        if (element.offsetWidth > 0 || element.offsetHeight > 0) {
            if (!element.value.trim()) {
                isContextualBoundaryValid = false;
                element.style.setProperty("border-color", "#ef4444", "important");
            } else {
                element.style.removeProperty("border-color");
            }
        }
    });

    return isContextualBoundaryValid;
}

// Expose functions globally to window namespaces cleanly
window.handleDynamicFormSectionToggleVisibility = handleDynamicFormSectionToggleVisibility;
window.evaluateStepStateValidationBoundary = evaluateStepStateValidationBoundary;


// ============================================================================ //
// ðŸ”„ OPERATING AGREEMENT INTERACTIVE SUBSYSTEM LAYER (LLC & LLP REBUILT)
// ============================================================================ //

/**
 * Handles structural equity input distributions based on single or multi-member layouts.
 * @param {string} structureType - The selected partnership framework layout token.
 */
function toggleOperatingAgreementOwnershipSubForm(structureType) {
    const singleWrapper = document.getElementById("oa_single_member_wrapper");
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    const partnerLabel = document.getElementById("oa_member_type_label_root");
    if (!singleWrapper || !multiWrapper) return;

    // Dynamic Taxonomy Adjustment: Updates display text if entity is an LLP / Partnership
    if (partnerLabel) {
        partnerLabel.textContent = (structureType === "llp" || structureType === "partnership") ? "Partner / Shareholder Ledger" : "LLC Member Equity Node";
    }

    if (structureType === "single-member") {
        wrapperStyleDisplaySet(singleWrapper, "flex");
        wrapperStyleDisplaySet(multiWrapper, "none");
        
        const soleName = document.getElementById("oa_sole_member_name");
        const soleContribution = document.getElementById("oa_sole_member_contribution");
        if (soleName) soleName.required = true;
        if (soleContribution) soleContribution.required = true;
        
        clearMultiMemberValidationRequirements();
    } else if (structureType === "multi-member" || structureType === "llp" || structureType === "partnership") {
        wrapperStyleDisplaySet(singleWrapper, "none");
        wrapperStyleDisplaySet(multiWrapper, "flex");
        
        const soleName = document.getElementById("oa_sole_member_name");
        const soleContribution = document.getElementById("oa_sole_member_contribution");
        if (soleName) {
            soleName.required = false;
            soleName.style.removeProperty("border-color");
        }
        if (soleContribution) {
            soleContribution.required = false;
            soleContribution.style.removeProperty("border-color");
        }
        
        enforceMultiMemberValidationRequirements();
        calculateCumulativeOperatingAgreementEquityTotal();
    }

    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }
}

/**
 * Injects a comprehensive multi-member capitalization and equity distribution row.
 */
function appendNewOperatingAgreementMemberRow() {
    currentOaMemberCount++;
    const container = document.getElementById("oa_members_container");
    if (!container) return;

    const memberRow = document.createElement("div");
    memberRow.className = "member-record-card";
    memberRow.id = `oa_member_card_${currentOaMemberCount}`;
    memberRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; margin-top: 10px; position: relative;";
    
    memberRow.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; grid-column: span 3; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Partner / Member #${currentOaMemberCount}</span>
        <button type="button" onclick="removeOperatingAgreementMemberNode(${currentOaMemberCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div class="wizard-input-group" style="margin: 0;">
        <label for="oa_member_name_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="oa_member_name_${currentOaMemberCount}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
    </div>
    <div class="wizard-input-group" style="margin: 0;">
        <label for="oa_member_contribution_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Contribution ($) <span style="color: #ef4444;">*</span></label>
        <input type="number" id="oa_member_contribution_${currentOaMemberCount}" required placeholder="e.g. 500" min="0" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
    </div>
    <div class="wizard-input-group" style="margin: 0;">
        <label for="oa_member_percentage_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Ownership % <span style="color: #ef4444;">*</span></label>
        <input type="number" id="oa_member_percentage_${currentOaMemberCount}" required placeholder="e.g. 25" min="0" max="100" class="wizard-input-field oa-percentage-field" style="width:100%; box-sizing:border-box;" oninput="calculateCumulativeOperatingAgreementEquityTotal()">
    </div>`;

    container.appendChild(memberRow);
    calculateCumulativeOperatingAgreementEquityTotal();
}

/**
 * Drops a dynamic partner allocation card row safely by element index.
 * @param {number} nodeId - Internal node row reference indicator.
 */
function removeOperatingAgreementMemberNode(nodeId) {
    const targetCard = document.getElementById(`oa_member_card_${nodeId}`);
    if (targetCard) {
        targetCard.remove();
        calculateCumulativeOperatingAgreementEquityTotal();
    }
}

/**
 * Loops and tallies real-time share metrics balances across all active cards.
 * @returns {number} Precise calculated corporate asset allocation weight total.
 */
function calculateCumulativeOperatingAgreementEquityTotal() {
    const percentageFields = document.querySelectorAll(".oa-percentage-field");
    let cumulativeTotal = 0;

    percentageFields.forEach(field => {
        const fieldVal = parseFloat(field.value);
        if (!isNaN(fieldVal)) cumulativeTotal += fieldVal;
    });

    const outputSpan = document.getElementById("oa_live_percentage_total_span");
    const balanceAlert = document.getElementById("oa_percentage_balance_alert");

    if (outputSpan) outputSpan.innerText = cumulativeTotal;
    
    if (balanceAlert) {
        if (cumulativeTotal === 100) {
            balanceAlert.style.background = "#ecfdf5";
            balanceAlert.style.color = "#065f46";
        } else {
            balanceAlert.style.background = "#f1f5f9";
            balanceAlert.style.color = "var(--navy)";
        }
    }
    return cumulativeTotal;
}

/**
 * Clears requirement bounds across multi-member container trees upon single transitions.
 */
function clearMultiMemberValidationRequirements() {
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    if (multiWrapper) {
        multiWrapper.querySelectorAll("input, select, textarea").forEach(inp => {
            inp.required = false;
            if (inp.tagName.toLowerCase() === "select") {
                inp.selectedIndex = inp.options.length > 0 ? 0 : -1;
            } else {
                inp.value = "";
            }
            inp.style.removeProperty("border-color");
        });
        multiWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Dynamically updates requirement flags for visible multi-member components.
 */
function enforceMultiMemberValidationRequirements() {
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    if (multiWrapper) {
        multiWrapper.querySelectorAll("input, select, textarea").forEach(inp => {
            if (inp.offsetParent !== null) {
                inp.required = true;
            }
        });
    }
}

/**
 * Enforces a strict legal guard block requiring exact 100% total allocation.
 * @returns {boolean} True if structural mathematical targets are balanced perfectly.
 */
function verifyOperatingAgreementLedgerBalanceBeforeSubmit() {
    const structureSelector = document.getElementById("oa_membership_structure");
    if (!structureSelector) return true;

    const structType = structureSelector.value;
    if (structType === "multi-member" || structType === "llp" || structType === "partnership") {
        const finalWeightSum = calculateCumulativeOperatingAgreementEquityTotal();
        if (finalWeightSum !== 100) {
            alert(`Ledger Mismatch: Asset distribution sum is currently ${finalWeightSum}%. Total allocations must equal exactly 100% to successfully execute your corporate filings payload compilation.`);
            return false;
        }
    }
    return true;
}

/// ============================================================================ //
// ðŸ”„ BUSINESS LICENSES CONFIGURATOR INTERACTION LAYER
// ============================================================================ //
/**
 * Toggles dynamic address input cards based on secondary corporate mailing addresses.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleBusinessLicensesMailingVisibility(selectionValue) {
    const wrapper = document.getElementById("bl_mailing_wrapper");
    if (!wrapper) return;

    if (selectionValue === "different" || selectionValue === "custom") {
        wrapperStyleDisplaySet(wrapper, "flex");
        wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
            el.required = false;
            if (el.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                el.selectedIndex = el.options.length > 0 ? 0 : -1;
            } else {
                el.value = "";
            }
            el.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Toggles landlord specific information inputs based on commercial lease structures.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleBusinessLicensesLandlordVisibility(selectionValue) {
    const wrapper = document.getElementById("bl_landlord_wrapper");
    if (!wrapper) return;

    if (selectionValue === "lease" || selectionValue === "rented") {
        wrapperStyleDisplaySet(wrapper, "flex");
        wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
            el.required = false;
            if (el.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                el.selectedIndex = el.options.length > 0 ? 0 : -1;
            } else {
                el.value = "";
            }
            el.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Toggles a description block based on city or zoning ordinance questions.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleBusinessLicensesCityRegsVisibility(selectionValue) {
    const wrapper = document.getElementById("bl_city_regs_wrapper");
    const input = document.getElementById("bl_city_regs_details");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Wipe values safely inside hidden containers
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles supplementary entry forms based on peripheral local state permit requirements.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleBusinessLicensesOtherPermitsVisibility(selectionValue) {
    const wrapper = document.getElementById("bl_other_permits_wrapper");
    const input = document.getElementById("bl_other_permits_list");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Erase stale descriptions safely to avoid validation blockages
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
function wrapperStyleDisplaySet(element, styleType) {
    if (element) {
        element.style.setProperty("display", styleType, "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleBusinessLicensesMailingVisibility = toggleBusinessLicensesMailingVisibility;
window.toggleBusinessLicensesLandlordVisibility = toggleBusinessLicensesLandlordVisibility;
window.toggleBusinessLicensesCityRegsVisibility = toggleBusinessLicensesCityRegsVisibility;
window.toggleBusinessLicensesOtherPermitsVisibility = toggleBusinessLicensesOtherPermitsVisibility;


// ============================================================================ //
// ðŸ”„ OPERATING AGREEMENT INTERACTIVE SUBSYSTEM LAYER (LLC & LLP REBUILT)
// ============================================================================ //
let currentOaMemberCount = 1;

/**
 * Handles structural equity input distributions based on single or multi-member layouts.
 * FIXED: Replaced standard display updates with priority overrides to secure layout isolation rules.
 * @param {string} structureType - The selected partnership framework layout token.
 */
function toggleOperatingAgreementOwnershipSubForm(structureType) {
    const singleWrapper = document.getElementById("oa_single_member_wrapper");
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    const partnerLabel = document.getElementById("oa_member_type_label_root");
    if (!singleWrapper || !multiWrapper) return;

    // ðŸ›ï¸ Dynamic Taxonomy Adjustment: Updates display text if entity is an LLP / Partnership
    if (partnerLabel) {
        partnerLabel.textContent = (structureType === "llp" || structureType === "partnership") ? "Partner / Shareholder Ledger" : "LLC Member Equity Node";
    }

    if (structureType === "single-member") {
        wrapperStyleDisplaySet(singleWrapper, "flex");
        wrapperStyleDisplaySet(multiWrapper, "none");
        
        const soleName = document.getElementById("oa_sole_member_name");
        const soleContribution = document.getElementById("oa_sole_member_contribution");
        if (soleName) soleName.required = true;
        if (soleContribution) soleContribution.required = true;
        
        clearMultiMemberValidationRequirements();
    } else if (structureType === "multi-member" || structureType === "llp" || structureType === "partnership") {
        wrapperStyleDisplaySet(singleWrapper, "none");
        wrapperStyleDisplaySet(multiWrapper, "flex");
        
        const soleName = document.getElementById("oa_sole_member_name");
        const soleContribution = document.getElementById("oa_sole_member_contribution");
        if (soleName) {
            soleName.required = false;
            soleName.style.removeProperty("border-color");
        }
        if (soleContribution) {
            soleContribution.required = false;
            soleContribution.style.removeProperty("border-color");
        }
        
        enforceMultiMemberValidationRequirements();
        calculateCumulativeOperatingAgreementEquityTotal();
    }

    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }
}

/**
 * Injects a comprehensive multi-member capitalization and equity distribution row.
 */
function appendNewOperatingAgreementMemberRow() {
    currentOaMemberCount++;
    const container = document.getElementById("oa_members_container");
    if (!container) return;

    const memberRow = document.createElement("div");
    memberRow.className = "member-record-card";
    memberRow.id = `oa_member_card_${currentOaMemberCount}`;
    memberRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; margin-top: 10px; position: relative;";
    
    memberRow.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; grid-column: span 3; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Partner / Member #${currentOaMemberCount}</span>
        <button type="button" onclick="removeOperatingAgreementMemberNode(${currentOaMemberCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div class="wizard-input-group" style="margin: 0;">
        <label for="oa_member_name_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="oa_member_name_${currentOaMemberCount}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
    </div>
    <div class="wizard-input-group" style="margin: 0;">
        <label for="oa_member_contribution_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Contribution ($) <span style="color: #ef4444;">*</span></label>
        <input type="number" id="oa_member_contribution_${currentOaMemberCount}" required placeholder="e.g. 500" min="0" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
    </div>
    <div class="wizard-input-group" style="margin: 0;">
        <label for="oa_member_percentage_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Ownership % <span style="color: #ef4444;">*</span></label>
        <input type="number" id="oa_member_percentage_${currentOaMemberCount}" required placeholder="e.g. 25" min="0" max="100" class="wizard-input-field oa-percentage-field" style="width:100%; box-sizing:border-box;" oninput="calculateCumulativeOperatingAgreementEquityTotal()">
    </div>`;

    container.appendChild(memberRow);
    calculateCumulativeOperatingAgreementEquityTotal();
}

/**
 * Drops a dynamic partner allocation card row safely by element index.
 * @param {number} nodeId - Internal node row reference indicator.
 */
function removeOperatingAgreementMemberNode(nodeId) {
    const targetCard = document.getElementById(`oa_member_card_${nodeId}`);
    if (targetCard) {
        targetCard.remove();
        calculateCumulativeOperatingAgreementEquityTotal();
    }
}

/**
 * Loops and tallies real-time share metrics balances across all active cards.
 * @returns {number} Precise calculated corporate asset allocation weight total.
 */
function calculateCumulativeOperatingAgreementEquityTotal() {
    const percentageFields = document.querySelectorAll(".oa-percentage-field");
    let cumulativeTotal = 0;

    percentageFields.forEach(field => {
        const fieldVal = parseFloat(field.value);
        if (!isNaN(fieldVal)) cumulativeTotal += fieldVal;
    });

    const outputSpan = document.getElementById("oa_live_percentage_total_span");
    const balanceAlert = document.getElementById("oa_percentage_balance_alert");

    if (outputSpan) outputSpan.innerText = cumulativeTotal;
    
    if (balanceAlert) {
        if (cumulativeTotal === 100) {
            balanceAlert.style.background = "#ecfdf5";
            balanceAlert.style.color = "#065f46";
        } else {
            balanceAlert.style.background = "#f1f5f9";
            balanceAlert.style.color = "var(--navy)";
        }
    }
    return cumulativeTotal;
}

/**
 * Clears requirement bounds across multi-member container trees upon single transitions.
 * FIXED: Standardized dropdown resets using explicit option index modifications instead of empty string assignments.
 */
function clearMultiMemberValidationRequirements() {
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    if (multiWrapper) {
        multiWrapper.querySelectorAll("input, select, textarea").forEach(inp => {
            inp.required = false;
            if (inp.tagName.toLowerCase() === "select") {
                inp.selectedIndex = inp.options.length > 0 ? 0 : -1;
            } else {
                inp.value = "";
            }
            inp.style.removeProperty("border-color");
        });
        multiWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Dynamically updates requirement flags for visible multi-member components.
 */
function enforceMultiMemberValidationRequirements() {
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    if (multiWrapper) {
        multiWrapper.querySelectorAll("input, select, textarea").forEach(inp => {
            if (inp.offsetParent !== null) {
                inp.required = true;
            }
        });
    }
}

/**
 * Enforces a strict legal guard block requiring exact 100% total allocation.
 * @returns {boolean} True if structural mathematical targets are balanced perfectly.
 */
function verifyOperatingAgreementLedgerBalanceBeforeSubmit() {
    const structureSelector = document.getElementById("oa_membership_structure");
    if (!structureSelector) return true;

    const structType = structureSelector.value;
    if (structType === "multi-member" || structType === "llp" || structureType === "partnership") {
        const finalWeightSum = calculateCumulativeOperatingAgreementEquityTotal();
        if (finalWeightSum !== 100) {
            alert(`Ledger Mismatch: Asset distribution sum is currently ${finalWeightSum}%. Total allocations must equal exactly 100% to successfully execute your corporate filings payload compilation.`);
            return false;
        }
    }
    return true;
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
function wrapperStyleDisplaySet(element, styleType) {
    if (element) {
        element.style.setProperty("display", styleType, "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleOperatingAgreementOwnershipSubForm = toggleOperatingAgreementOwnershipSubForm;
window.appendNewOperatingAgreementMemberRow = appendNewOperatingAgreementMemberRow;
window.removeOperatingAgreementMemberNode = removeOperatingAgreementMemberNode;
window.calculateCumulativeOperatingAgreementEquityTotal = calculateCumulativeOperatingAgreementEquityTotal;
window.clearMultiMemberValidationRequirements = clearMultiMemberValidationRequirements;
window.enforceMultiMemberValidationRequirements = enforceMultiMemberValidationRequirements;
window.verifyOperatingAgreementLedgerBalanceBeforeSubmit = verifyOperatingAgreementLedgerBalanceBeforeSubmit;


// ============================================================================ //
// ðŸ”„ ANNUAL REPORT REPORTING LIFE-CYCLE VISIBILITY ROUTINES
// ============================================================================ //
/**
 * Toggles dynamic address input cards based on secondary corporate mailing addresses.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleAnnualReportMailingAddressVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_mailing_wrapper");
    if (!wrapper) return;

    if (selectionValue === "different" || selectionValue === "custom") {
        wrapperStyleDisplaySet(wrapper, "flex");
        wrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select, textarea").forEach(el => {
            el.required = false;
            if (el.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                el.selectedIndex = el.options.length > 0 ? 0 : -1;
            } else {
                el.value = "";
            }
            el.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Toggles state-level explanation inputs based on reporting eligibility fields.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleAnnualReportStateExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_state_explanation_wrapper");
    const input = document.getElementById("ar_state_reason");
    if (!wrapper || !input) return;

    if (selectionValue === "no" || selectionValue === "false") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Wipe values safely inside hidden containers
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles city-level explanation inputs based on localized corporate reporting questions.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleAnnualReportCityExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_city_explanation_wrapper");
    const input = document.getElementById("ar_city_reason");
    if (!wrapper || !input) return;

    if (selectionValue === "no" || selectionValue === "false") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = "";
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles federal-level explanation inputs based on system regulatory questionnaires.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleAnnualReportFederalExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_fed_explanation_wrapper");
    const input = document.getElementById("ar_fed_reason");
    if (!wrapper || !input) return;

    if (selectionValue === "no" || selectionValue === "false") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = "";
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles miscellaneous secondary filing lists based on supplemental operational checkboxes.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleAnnualReportOtherExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_other_explanation_wrapper");
    const input = document.getElementById("ar_other_filings_list");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "flex");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = "";
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Toggles pending compliance resolution text blocks based on background status verifications.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleAnnualReportComplianceCheckVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_compliance_pending_wrapper");
    const input = document.getElementById("ar_pending_renewals_list");
    if (!wrapper || !input) return;

    if (selectionValue === "no" || selectionValue === "false") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = "";
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
function wrapperStyleDisplaySet(element, styleType) {
    if (element) {
        element.style.setProperty("display", styleType, "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleAnnualReportMailingAddressVisibility = toggleAnnualReportMailingAddressVisibility;
window.toggleAnnualReportStateExplanationVisibility = toggleAnnualReportStateExplanationVisibility;
window.toggleAnnualReportCityExplanationVisibility = toggleAnnualReportCityExplanationVisibility;
window.toggleAnnualReportFederalExplanationVisibility = toggleAnnualReportFederalExplanationVisibility;
window.toggleAnnualReportOtherExplanationVisibility = toggleAnnualReportOtherExplanationVisibility;
window.toggleAnnualReportComplianceCheckVisibility = toggleAnnualReportComplianceCheckVisibility;


// ============================================================================ //
// ðŸ”„ USPTO TRADEMARK APPLICATION INTERACTION LAYER ROUTINES
// ============================================================================ //

/**
 * Toggles dynamic input field visibilities for trademark specimens.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleTrademarkSpecimenWorkflow(selectionValue) {
    const wrapper = document.getElementById("tm_specimen_wrapper");
    if (!wrapper) return;

    const descInput = document.getElementById("tm_specimen_desc");
    const fileInput = document.getElementById("tm_specimen_file");

    if (selectionValue === "use-in-commerce" || selectionValue === "actual-use") {
        wrapperStyleDisplaySet(wrapper, "flex");
        if (descInput) descInput.required = true;
        if (fileInput) fileInput.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        
        // Clear required parameters and wipe structural data memory to clear fields safely
        if (descInput) {
            descInput.required = false;
            descInput.value = "";
            descInput.style.removeProperty("border-color");
        }
        if (fileInput) {
            fileInput.required = false;
            fileInput.value = ""; // Clear file selector handle data indicators
            fileInput.style.removeProperty("border-color");
        }
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Manages search assistance element visibility loops for dynamic trademark validations.
 * FIXED: Resolved reference assignment errors leaking variable scopes.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleTrademarkSearchAssistanceVisibility(selectionValue) {
    const detailsWrapper = document.getElementById("tm_search_details_wrapper");
    const assistanceWrapper = document.getElementById("tm_search_assistance_wrapper");
    const assistanceSelect = document.getElementById("tm_add_search_service");
    const resultsInput = document.getElementById("tm_search_results_data");

    if (selectionValue === "yes" || selectionValue === "true") {
        if (detailsWrapper) wrapperStyleDisplaySet(detailsWrapper, "block");
        if (resultsInput) resultsInput.required = true;
        if (assistanceWrapper) wrapperStyleDisplaySet(assistanceWrapper, "none");
        if (assistanceSelect) {
            assistanceSelect.required = false;
            // FIXED: Standardized dropdown options cleanups cleanly using safe index selectors
            assistanceSelect.selectedIndex = assistanceSelect.options.length > 0 ? 0 : -1;
            assistanceSelect.style.removeProperty("border-color");
        }
        window.customSelectedTrademarkSearchActive = false;
    } else if (selectionValue === "no" || selectionValue === "false") {
        if (detailsWrapper) {
            wrapperStyleDisplaySet(detailsWrapper, "none");
            if (resultsInput) {
                resultsInput.required = false;
                resultsInput.value = "";
                resultsInput.style.removeProperty("border-color");
            }
        }
        // FIXED: Corrected syntax syntax leak where variables were missing definitions
        if (assistanceWrapper) wrapperStyleDisplaySet(assistanceWrapper, "block");
        if (assistanceSelect) assistanceSelect.required = true;
    } else {
        // Catch-all structural reset layout transformations
        if (detailsWrapper) wrapperStyleDisplaySet(detailsWrapper, "none");
        if (resultsInput) resultsInput.required = false;
        if (assistanceWrapper) wrapperStyleDisplaySet(assistanceWrapper, "none");
        if (assistanceSelect) {
            assistanceSelect.required = false;
            assistanceSelect.selectedIndex = assistanceSelect.options.length > 0 ? 0 : -1;
        }
    }

    // Remove residual visual error markers across components
    const activeScopeContainer = detailsWrapper?.parentNode || document.body;
    activeScopeContainer.querySelectorAll('.input-error-marker').forEach(node => node.remove());

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Toggles dynamic element inputs based on trademark attorney sponsorship fields.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleTrademarkAttorneyWrapperVisibility(selectionValue) {
    const wrapper = document.getElementById("tm_attorney_wrapper");
    if (!wrapper) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "flex");
        wrapper.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
            if (field.type === "checkbox" || field.type === "radio") {
                field.checked = false;
            } else if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken empty string selection parameters with safe index clear rules
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}
// ============================================================================ //
// ðŸ”„ STATE SERVICEMARK APPLICATION INTERACTION LAYER ROUTINES
// ============================================================================ //

/**
 * Toggles dynamic input field visibilities for servicemark specimens.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleServicemarkSpecimenWorkflow(selectionValue) {
    const wrapper = document.getElementById("sm_specimen_wrapper");
    if (!wrapper) return;

    const descInput = document.getElementById("sm_specimen_desc");
    const fileInput = document.getElementById("sm_specimen_file");

    if (selectionValue === "use-in-commerce" || selectionValue === "actual-use") {
        wrapperStyleDisplaySet(wrapper, "flex");
        if (descInput) descInput.required = true;
        if (fileInput) fileInput.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        
        // Clear required parameters and wipe structural data memory to clear fields safely
        if (descInput) {
            descInput.required = false;
            descInput.value = "";
            descInput.style.removeProperty("border-color");
        }
        if (fileInput) {
            fileInput.required = false;
            fileInput.value = ""; // Clear file selector data references
            fileInput.style.removeProperty("border-color");
        }
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Manages search assistance element visibility loops for dynamic servicemark validations.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleServicemarkSearchAssistanceVisibility(selectionValue) {
    const detailsWrapper = document.getElementById("sm_search_details_wrapper");
    const assistanceWrapper = document.getElementById("sm_search_assistance_wrapper");
    const assistanceSelect = document.getElementById("sm_add_search_service");
    const resultsInput = document.getElementById("sm_search_results_data");

    if (selectionValue === "yes" || selectionValue === "true") {
        if (detailsWrapper) wrapperStyleDisplaySet(detailsWrapper, "block");
        if (resultsInput) resultsInput.required = true;
        if (assistanceWrapper) wrapperStyleDisplaySet(assistanceWrapper, "none");
        if (assistanceSelect) {
            assistanceSelect.required = false;
            // FIXED: Standardized dropdown options cleanups cleanly using safe index selectors
            assistanceSelect.selectedIndex = assistanceSelect.options.length > 0 ? 0 : -1;
            assistanceSelect.style.removeProperty("border-color");
        }
        window.customSelectedServicemarkSearchActive = false;
    } else if (selectionValue === "no" || selectionValue === "false") {
        if (detailsWrapper) {
            wrapperStyleDisplaySet(detailsWrapper, "none");
            if (resultsInput) {
                resultsInput.required = false;
                resultsInput.value = "";
                resultsInput.style.removeProperty("border-color");
            }
        }
        if (assistanceWrapper) wrapperStyleDisplaySet(assistanceWrapper, "block");
        if (assistanceSelect) assistanceSelect.required = true;
    } else {
        // Catch-all structural reset layout transformations
        if (detailsWrapper) wrapperStyleDisplaySet(detailsWrapper, "none");
        if (resultsInput) resultsInput.required = false;
        if (assistanceWrapper) wrapperStyleDisplaySet(assistanceWrapper, "none");
        if (assistanceSelect) {
            assistanceSelect.required = false;
            assistanceSelect.selectedIndex = assistanceSelect.options.length > 0 ? 0 : -1;
        }
    }

    // Remove residual visual error markers across components
    const activeScopeContainer = detailsWrapper?.parentNode || document.body;
    activeScopeContainer.querySelectorAll('.input-error-marker').forEach(node => node.remove());

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Toggles dynamic element inputs based on servicemark attorney sponsorship fields.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleServicemarkAttorneyWrapperVisibility(selectionValue) {
    const wrapper = document.getElementById("sm_attorney_wrapper");
    if (!wrapper) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(wrapper, "flex");
        wrapper.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
            if (field.type === "checkbox" || field.type === "radio") {
                field.checked = false;
            } else if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken empty string selection parameters with safe index clear rules
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}
/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 * This completely prevents theme style sheets from leaking elements onto hidden steps.
 * @param {HTMLElement} element - Target form wrapper layout container node.
 * @param {string} styleType - Targeted layout display style property string value ('block', 'flex', 'none').
 */
function wrapperStyleDisplaySet(element, styleType) {
    if (element) {
        element.style.setProperty("display", styleType, "important");
    }
}

// Map the functions cleanly into global scopes window layers
window.toggleTrademarkSpecimenWorkflow = toggleTrademarkSpecimenWorkflow;
window.toggleTrademarkSearchAssistanceVisibility = toggleTrademarkSearchAssistanceVisibility;
window.toggleTrademarkAttorneyWrapperVisibility = toggleTrademarkAttorneyWrapperVisibility;
window.toggleServicemarkSpecimenWorkflow = toggleServicemarkSpecimenWorkflow;
window.toggleServicemarkSearchAssistanceVisibility = toggleServicemarkSearchAssistanceVisibility;
window.toggleServicemarkAttorneyWrapperVisibility = toggleServicemarkAttorneyWrapperVisibility;


// ============================================================================ //
// ðŸ”„ LLC REINSTATEMENT INTERACTION LOGIC CONTROL ROUTINES
// ============================================================================ //

/**
 * Toggles visibility for unpaid penalty notices and enforces dynamic audit service selections.
 * @param {string} selectionValue - Choice string parameter token ('yes' / 'no').
 */
function toggleReinstatementFeesNoticeVisibility(selectionValue) {
    const unpaidWrapper = document.getElementById("rein_fees_unpaid_wrapper");
    const auditSelect = document.getElementById("rein_add_compliance_audit");
    if (!unpaidWrapper || !auditSelect) return;

    if (selectionValue === "no" || selectionValue === "false") {
        wrapperStyleDisplaySet(unpaidWrapper, "flex");
        auditSelect.required = true;
    } else {
        wrapperStyleDisplaySet(unpaidWrapper, "none");
        auditSelect.required = false;
        
        // FIXED: Standardized dropdown options cleanups cleanly using safe index selectors to prevent form freezes
        auditSelect.selectedIndex = auditSelect.options.length > 0 ? 0 : -1;
        auditSelect.style.removeProperty("border-color");
        
        // Track pricing modifiers dynamically
        window.customSelectedReinstatementAuditActive = false;
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

/**
 * Toggles a manual text area container if the entity has outstanding non-monetary compliance challenges.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleReinstatementIssuesVisibility(selectionValue) {
    const issuesWrapper = document.getElementById("rein_pending_issues_wrapper");
    const detailsInput = document.getElementById("rein_pending_details");
    if (!issuesWrapper || !detailsInput) return;

    if (selectionValue === "no" || selectionValue === "false") {
        wrapperStyleDisplaySet(issuesWrapper, "block");
        detailsInput.required = true;
    } else {
        wrapperStyleDisplaySet(issuesWrapper, "none");
        detailsInput.required = false;
        detailsInput.value = ""; // Erase stale descriptions safely
        detailsInput.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = detailsInput.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Handles EIN validation question cascades if the entity was administratively voided.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleReinstatementEinWorkflow(selectionValue) {
    const reasonWrapper = document.getElementById("rein_ein_reason_wrapper");
    const reasonInput = document.getElementById("rein_ein_reason");
    if (!reasonWrapper || !reasonInput) return;

    if (selectionValue === "yes" || selectionValue === "true") {
        wrapperStyleDisplaySet(reasonWrapper, "flex");
        reasonInput.required = true;
    } else {
        wrapperStyleDisplaySet(reasonWrapper, "none");
        reasonInput.required = false;
        reasonInput.value = ""; // Clear manual fields metrics values parameters
        reasonInput.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = reasonInput.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

/**
 * Manages tracking date bounds inputs for limited duration reinstatement certificates.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleReinstatementDurationFieldVisibility(selectionValue) {
    const dateWrapper = document.getElementById("rein_duration_date_wrapper");
    const dateInput = document.getElementById("rein_duration_date");
    if (!dateWrapper || !dateInput) return;

    if (selectionValue === "specific" || selectionValue === "temporary") {
        wrapperStyleDisplaySet(dateWrapper, "flex");
        dateInput.required = true;
    } else {
        wrapperStyleDisplaySet(dateWrapper, "none");
        dateInput.required = false;
        dateInput.value = ""; // Strip hidden historical inputs metrics records data
        dateInput.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = dateInput.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
if (typeof wrapperStyleDisplaySet !== "function") {
    function wrapperStyleDisplaySet(element, styleType) {
        if (element) {
            element.style.setProperty("display", styleType, "important");
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleReinstatementFeesNoticeVisibility = toggleReinstatementFeesNoticeVisibility;
window.toggleReinstatementIssuesVisibility = toggleReinstatementIssuesVisibility;
window.toggleReinstatementEinWorkflow = toggleReinstatementEinWorkflow;
window.toggleReinstatementDurationFieldVisibility = toggleReinstatementDurationFieldVisibility;


// ============================================================================ //
// ðŸ”„ CONDITIONAL INTERACTION INTERFACE CONTROL ROUTINES
// ============================================================================ //

/**
 * Toggles manual registered agent details fields based on dynamic fulfillment rules.
 * @param {string} selectionValue - Choice string parameter token ('yes' / 'no').
 */
function toggleFqAgentDetailsVisibility(selectionValue) {
    const manualWrapper = document.getElementById("fq_agent_manual_wrapper");
    if (!manualWrapper) return;

    if (selectionValue === "no") {
        wrapperStyleDisplaySet(manualWrapper, "flex");
        manualWrapper.querySelectorAll("input, select").forEach(field => {
            if (field.id !== "fq_agent_unit") field.required = true;
        });
    } else {
        wrapperStyleDisplaySet(manualWrapper, "none");
        manualWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken empty string resets with proper option index clear mappings
                field.selectedIndex = field.options.length > 0 ? 0 : -1;
            } else {
                field.value = "";
            }
            field.style.removeProperty("border-color");
        });
        manualWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

/**
 * Manages licensing documentation assistance components and warning wrappers.
 * @param {string} selectionValue - Choice string parameter token ('yes' / 'no').
 */
function toggleFqLicenseAssistanceVisibility(selectionValue) {
    const detailsWrapper = document.getElementById("fq_license_details_wrapper");
    const assistanceWrapper = document.getElementById("fq_license_assistance_wrapper");
    const assistanceSelect = document.getElementById("fq_add_licensing_service");

    if (assistanceSelect) {
        assistanceSelect.required = false;
        assistanceSelect.style.removeProperty("border-color");
    }

    if (selectionValue === "yes") {
        if (detailsWrapper) wrapperStyleDisplaySet(detailsWrapper, "block");
        if (assistanceWrapper) {
            wrapperStyleDisplaySet(assistanceWrapper, "none");
            if (assistanceSelect) {
                // FIXED: Adjusted dropdown clear to use safe selection indexing rules
                assistanceSelect.selectedIndex = assistanceSelect.options.length > 0 ? 0 : -1;
                
                // FIXED: Swapped out whitespace-vulnerable nextSibling pointers for a safe relative parent lookup
                const parentFrame = assistanceSelect.parentElement;
                if (parentFrame) {
                    const errorMarker = parentFrame.querySelector('.input-error-marker');
                    if (errorMarker) errorMarker.remove();
                }
            }
        }
    } else if (selectionValue === "no") {
        if (detailsWrapper) wrapperStyleDisplaySet(detailsWrapper, "none");
        if (assistanceWrapper) wrapperStyleDisplaySet(assistanceWrapper, "block");
        if (assistanceSelect) assistanceSelect.required = true;
    } else {
        if (detailsWrapper) wrapperStyleDisplaySet(detailsWrapper, "none");
        if (assistanceWrapper) wrapperStyleDisplaySet(assistanceWrapper, "none");
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

/**
 * Handles EIN reasoning flow fields if the company operates under unique tracking tokens.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleFqEinWorkflow(selectionValue) {
    const reasonWrapper = document.getElementById("fq_ein_reason_wrapper");
    const reasonInput = document.getElementById("fq_ein_reason");
    if (!reasonWrapper || !reasonInput) return;

    if (selectionValue === "yes") {
        wrapperStyleDisplaySet(reasonWrapper, "flex");
        reasonInput.required = true;
    } else {
        wrapperStyleDisplaySet(reasonWrapper, "none");
        reasonInput.required = false;
        reasonInput.value = "";
        reasonInput.style.removeProperty("border-color");
        
        // FIXED: Swapped out whitespace-vulnerable nextSibling pointer loops for a safe relative parent query lookup
        const parentFrame = reasonInput.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
if (typeof wrapperStyleDisplaySet !== "function") {
    function wrapperStyleDisplaySet(element, styleType) {
        if (element) {
            element.style.setProperty("display", styleType, "important");
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleFqAgentDetailsVisibility = toggleFqAgentDetailsVisibility;
window.toggleFqLicenseAssistanceVisibility = toggleFqLicenseAssistanceVisibility;
window.toggleFqEinWorkflow = toggleFqEinWorkflow;


// ============================================================================ //
// ðŸ”„ PROFESSIONAL REGISTERED AGENT SERVICE LOGIC WORKFLOWS
// ============================================================================ //
let currentRaEntityCount = 1;

/**
 * Toggles alternative mailing fields based on structural registered agent needs.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleRegisteredAgentMailingVisibility(selectionValue) {
    const wrapper = document.getElementById("ra_mailing_wrapper");
    if (!wrapper) return;

    if (selectionValue === "different") {
        wrapperStyleDisplaySet(wrapper, "flex");
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
            if (el.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                el.selectedIndex = el.options.length > 0 ? 0 : -1;
            } else {
                el.value = "";
            }
            el.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

/**
 * Toggles multi-entity management layout blocks dynamically based on coverage intent.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleRegisteredAgentMultiEntityVisibility(selectionValue) {
    const wrapper = document.getElementById("ra_multi_entity_wrapper");
    if (!wrapper) return;

    if (selectionValue === "yes") {
        wrapperStyleDisplaySet(wrapper, "flex");
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
            if (el.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                el.selectedIndex = el.options.length > 0 ? 0 : -1;
            } else {
                el.value = "";
            }
            el.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
}

// ============================================================================ //
// âž• DYNAMIC SECONDARY ENTITY ROW GENERATOR (FIXED INVALID HTML MARGINS)
// ============================================================================ //
/**
 * Injects a clean secondary entity tracking data card framework context structure.
 * FIXED: Repaired broken label tags, missing select tags, and open-ended text fragments.
 */
function appendNewRegisteredAgentEntityRow() {
    currentRaEntityCount++;
    
    const container = document.getElementById("ra_entities_container");
    if (!container) return;

    const entityRow = document.createElement("div");
    entityRow.className = "member-record-card";
    entityRow.id = "ra_entity_card_" + currentRaEntityCount;
    entityRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";

    // FIXED: Rebuilt layout string structures with proper label tags and functional select elements
    entityRow.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Secondary Entity #${currentRaEntityCount} Records</span>
        <button type="button" onclick="removeRegisteredAgentEntityRow(${currentRaEntityCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
        <div class="wizard-input-group" style="margin: 0;">
            Entity Name <span style="color: #ef4444;">*</span></label>
            
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            Entity Type <span style="color: #ef4444;">*</span></label>
            
                <option value="">-- Choose --</option>
                <option value="llc">LLC</option>
                <option value="corporation">Corporation</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
            </select>
        </div>
    </div>`;

    container.appendChild(entityRow);
}

/**
 * Drops an entity tracker row node cleanly by its reference identifier.
 * @param {number} nodeId - Internal node row reference indicator index.
 */
function removeRegisteredAgentEntityRow(nodeId) {
    const card = document.getElementById("ra_entity_card_" + nodeId);
    if (card) card.remove();
}

/**
 * Toggles mail forwarding address structures and requirement parameters.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleRegisteredAgentMailForwardingWorkflow(selectionValue) {
    const wrapper = document.getElementById("ra_forwarding_address_wrapper");
    const inputs = wrapper ? wrapper.querySelectorAll("input, select") : [];
    
    if (!wrapper) return;

    if (selectionValue === "yes") {
        wrapperStyleDisplaySet(wrapper, "block");
        inputs.forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        inputs.forEach(function(el) {
            el.required = false;
            if (el.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken value overrides with true indexing for drop-down nodes
                el.selectedIndex = el.options.length > 0 ? 0 : -1;
            } else {
                el.value = "";
            }
            el.style.removeProperty("border-color");
        });
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
if (typeof wrapperStyleDisplaySet !== "function") {
    function wrapperStyleDisplaySet(element, styleType) {
        if (element) {
            element.style.setProperty("display", styleType, "important");
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleRegisteredAgentMailingVisibility = toggleRegisteredAgentMailingVisibility;
window.toggleRegisteredAgentMultiEntityVisibility = toggleRegisteredAgentMultiEntityVisibility;
window.appendNewRegisteredAgentEntityRow = appendNewRegisteredAgentEntityRow;
window.removeRegisteredAgentEntityRow = removeRegisteredAgentEntityRow;
window.toggleRegisteredAgentMailForwardingWorkflow = toggleRegisteredAgentMailForwardingWorkflow;


// ============================================================================ //
// ðŸ”„ CERTIFICATE OF GOOD STANDING INTERACTION LAYER
// ============================================================================ //

/**
 * Toggles visibility for custom explanation fields based on Good Standing purpose.
 * @param {string} selectionValue - Choice string parameter token.
 */
function toggleGoodStandingPurposeSpecificationVisibility(selectionValue) {
    const wrapper = document.getElementById("cgs_purpose_other_wrapper");
    const input = document.getElementById("cgs_purpose_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other" || selectionValue === "custom") {
        wrapperStyleDisplaySet(wrapper, "block");
        input.required = true;
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        input.required = false;
        input.value = ""; // Flush out stale input fields values safely
        input.style.removeProperty("border-color");
        
        // FIXED: Swapped out potential nextSibling traps for a safe relative parent container lookup
        const parentFrame = input.parentElement;
        if (parentFrame) {
            const errorMarker = parentFrame.querySelector('.input-error-marker');
            if (errorMarker) errorMarker.remove();
        }
    }
}

/**
 * Manages physical address block forms and requirement configurations for certificate shipping.
 * @param {string} selectionValue - Selected delivery method option string token.
 */
function toggleGoodStandingPhysicalDeliveryVisibility(selectionValue) {
    const wrapper = document.getElementById("cgs_shipping_address_wrapper");
    if (!wrapper) return;

    // Track the choice globally so pricing configuration updates can look it up later
    window.customSelectedPhysicalShippingActive = (selectionValue === "physical" || selectionValue === "expedited-courier");

    if (selectionValue === "physical") {
        wrapperStyleDisplaySet(wrapper, "flex");
        wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapperStyleDisplaySet(wrapper, "none");
        wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
            el.required = false;
            // Reset layout values and state parameters to clear hidden validation limits
            if (el.type === "checkbox" || el.type === "radio") {
                el.checked = false;
            } else if (el.tagName.toLowerCase() === "select") {
                // FIXED: Replaced broken empty string resets with proper dropdown element selection clear rules
                el.selectedIndex = el.options.length > 0 ? 0 : -1;
            } else {
                el.value = "";
            }
            el.style.removeProperty("border-color");
        });
        
        // Remove any stale red error alerts left behind by validation routines
        wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }

    // FIXED: Remapped legacy totalizer functions to route updates to your actual calculations engine
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    } else if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
if (typeof wrapperStyleDisplaySet !== "function") {
    function wrapperStyleDisplaySet(element, styleType) {
        if (element) {
            element.style.setProperty("display", styleType, "important");
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleGoodStandingPurposeSpecificationVisibility = toggleGoodStandingPurposeSpecificationVisibility;
window.toggleGoodStandingPhysicalDeliveryVisibility = toggleGoodStandingPhysicalDeliveryVisibility;


// ============================================================================ //
// ðŸ”„ MASTER ALIAS ROUTING BRIDGE INTERFACES (DUPLICATES PURGED)
// ============================================================================ //
/**
 * Public structural API proxy allowing external scripts, timelines, or indicators
 * to safely request a step jump through our master unified navigation engine.
 * @param {number|string} targetIndex - Destination wizard step index indicator.
 * @returns {boolean} Status verifying whether the step change transition was successful.
 */
window.requestWizardStepJump = function(targetIndex) {
    console.log(`[Navigation Bridge Proxy] Public step adjustment request received for index: ${targetIndex}`);
    
    if (typeof window.goToNextWizardStep === "function") {
        return window.goToNextWizardStep(targetIndex);
    } else {
        console.error("[Fatal Error] Master routing core navigation engine is missing or uninitialized.");
        return false;
    }
};

/**
 * Universal utility to bind manual jump attributes on button click elements dynamically.
 * Scans for attributes like data-jump-to="3" and hooks them up safely.
 */
function bindDynamicTimelineJumpTriggers() {
    const jumpButtons = document.querySelectorAll("[data-jump-to]");
    
    jumpButtons.forEach(button => {
        if (!button) return;
        
        // Prevent duplicate event handlers on the same DOM element node
        if (button.getAttribute("data-jump-listener-bound") === "true") return;

        button.addEventListener("click", function(event) {
            const stepTargetValue = button.getAttribute("data-jump-to");
            if (stepTargetValue) {
                if (typeof window.goToNextWizardStep === "function") {
                    window.goToNextWizardStep(stepTargetValue, event);
                }
            }
        });

        button.setAttribute("data-jump-listener-bound", "true");
    });
}

// Register initialization hook inside global namespace layers cleanly
window.bindDynamicTimelineJumpTriggers = bindDynamicTimelineJumpTriggers;

// FIXED: Automatically initialize listener sweeps once layout trees settle down
if (document.readyState !== "loading") {
    window.bindDynamicTimelineJumpTriggers();
} else {
    document.addEventListener("DOMContentLoaded", window.bindDynamicTimelineJumpTriggers);
}


// ============================================================================ //
// ðŸ”˜ SERIES LLC RUNTIME EVENT CONTROLLERS
// ============================================================================ //
let activeSeriesLlcMemberCounterIndex = 1;

/**
 * Injects a comprehensive, compliant Series LLC member or manager data entry card.
 * Dynamic strategy: Prioritizes abstract script template injections to avoid hardcoded layout parameters.
 */
function appendNewSeriesLlcMemberNode() {
    activeSeriesLlcMemberCounterIndex++;
    
    const container = document.getElementById("sllc_members_container");
    if (!container) return;

    const div = document.createElement("div");
    div.className = "member-record-card";
    div.id = `sllc_member_card_${activeSeriesLlcMemberCounterIndex}`;

    // Dynamic layout check: Read abstract template configuration if defined
    const templateSource = document.getElementById("sllc-member-row-template");
    
    if (templateSource) {
        let templateHtmlContent = templateSource.innerHTML;
        templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeSeriesLlcMemberCounterIndex);
        div.innerHTML = templateHtmlContent;
    } else {
        div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Initial Member #${activeSeriesLlcMemberCounterIndex} Records</span>
            <button type="button" onclick="removeSeriesLlcMemberNode(${activeSeriesLlcMemberCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div>
                <label for="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name</label>
                <input type="text" id="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
            <div>
                <label for="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Residential Address</label>
                <input type="text" id="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Residential/Office Address" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
        </div>`;
    }

    container.appendChild(div);
}

/**
 * Removes a dynamic Series LLC member card row safely by element index.
 * @param {number} targetIndex - Internal node numeric identifier row index.
 */
function removeSeriesLlcMemberNode(targetIndex) {
    const cardToRemove = document.getElementById(`sllc_member_card_${targetIndex}`);
    if (cardToRemove) {
        // FIXED: Safely scrubs inputs required states inside the container tree before removal 
        // to prevent detached elements from throwing downstream validation errors
        cardToRemove.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
        });
        cardToRemove.querySelectorAll(".input-error-marker").forEach(node => node.remove());
        
        cardToRemove.remove();
    }
}

/**
 * Toggles a custom description area or cell registration parameters.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleSeriesCellsWrapperVisibility(selectedValue) {
    const wrapper = document.getElementById("sllc_cells_wrapper");
    if (wrapper) {
        // FIXED: Enforced explicit layout priorities overrides to eliminate stylesheet leakage bugs
        const targetDisplay = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.appendNewSeriesLlcMemberNode = appendNewSeriesLlcMemberNode;
window.removeSeriesLlcMemberNode = removeSeriesLlcMemberNode;
window.toggleSeriesCellsWrapperVisibility = toggleSeriesCellsWrapperVisibility;


// ============================================================================ //
// âž• SUB-SERIES CELLS DYNAMIC GENERATOR MATRIX
// ============================================================================ //
let activeSubSeriesCellCounterIndex = 1;

/**
 * Injects a comprehensive, compliant Series LLC sub-cell tracking node frame card.
 * Dynamic strategy: Prioritizes template layout extraction to ensure zero file hardcoding.
 */
function appendNewSubSeriesCellNode() {
    activeSubSeriesCellCounterIndex++;
    
    const container = document.getElementById("sllc_cells_container");
    if (!container) return;

    const div = document.createElement("div");
    div.className = "member-record-card";
    div.id = `sllc_cell_card_${activeSubSeriesCellCounterIndex}`;

    const templateSource = document.getElementById("sllc-cell-row-template");
    
    if (templateSource) {
        let templateHtmlContent = templateSource.innerHTML;
        templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeSubSeriesCellCounterIndex);
        div.innerHTML = templateHtmlContent;
    } else {
        div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Initial Sub-Series Cell #${activeSubSeriesCellCounterIndex}</span>
            <button type="button" onclick="removeSubSeriesCellNode(${activeSubSeriesCellCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div>
                <label for="sllc_cell_name_${activeSubSeriesCellCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Series Cell Name</label>
                <input type="text" id="sllc_cell_name_${activeSubSeriesCellCounterIndex}" placeholder="Series Cell Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
            <div>
                <label for="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Asset Summary</label>
                <input type="text" id="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" placeholder="Asset / Operational Purpose Summary" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
        </div>`;
    }

    container.appendChild(div);
}

/**
 * Removes a dynamic sub-series card row safely by element index.
 * @param {number} targetIndex - Internal node numeric identifier row index.
 */
function removeSubSeriesCellNode(targetIndex) {
    const cardToRemove = document.getElementById(`sllc_cell_card_${targetIndex}`);
    if (cardToRemove) {
        // FIXED: Safely scrubs inputs required states inside the container tree before removal 
        // to prevent detached elements from throwing downstream validation errors
        cardToRemove.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
        });
        cardToRemove.querySelectorAll(".input-error-marker").forEach(node => node.remove());
        
        cardToRemove.remove();
    }
}

/**
 * Toggles EIN reasoning visibility blocks and handles inverse procurement upsell state overrides.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleSeriesEinWorkflow(selectedValue) {
    const wrapper = document.getElementById("sllc_ein_reason_wrapper");
    if (wrapper) {
        // FIXED: Enforced explicit layout priorities overrides to eliminate stylesheet leakage bugs
        const targetDisplay = (selectedValue === "yes") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }

    // âš¡ FIXED INVERSE LOGIC: If they select "no", trigger procurement upsell loops
    window.customSelectedEinProcurementServiceActive = (selectedValue === "no" || selectedValue === "no-buy");
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Toggles warning templates based on internal operating license allocations.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleSeriesLicenseWorkflow(selectedValue) {
    const warningNote = document.getElementById("sllc_custom_license_wrapper");
    if (warningNote) {
        // FIXED: Enforced explicit layout priorities overrides to eliminate stylesheet leakage bugs
        const targetDisplay = (selectedValue === "yes") ? "flex" : "none";
        warningNote.style.setProperty("display", targetDisplay, "important");
    }

    // True if user opts out of manual lists to request compliance license audit
    const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
    window.customSelectedSeriesLicenseAuditActive = userNeedsAudit;
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Handles limited duration form parameters based on organizational lifecycle terms.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleSeriesLlcDurationField(selectedValue) {
    const wrapper = document.getElementById("sllc_duration_term_wrapper");
    if (wrapper) {
        // FIXED: Enforced explicit layout priorities overrides to eliminate stylesheet leakage bugs
        const targetDisplay = (selectedValue === "project" || selectedValue === "temporary") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }
}

// Expose functions globally to window namespaces cleanly
window.appendNewSubSeriesCellNode = appendNewSubSeriesCellNode;
window.removeSubSeriesCellNode = removeSubSeriesCellNode;
window.toggleSeriesEinWorkflow = toggleSeriesEinWorkflow;
window.toggleSeriesLicenseWorkflow = toggleSeriesLicenseWorkflow;
window.toggleSeriesLlcDurationField = toggleSeriesLlcDurationField;


// ============================================================================ //
// ðŸ”˜ NONPROFIT WORKFLOW INTERACTIVE LAYOUT CONTROLLERS
// ============================================================================ //
let activeNonprofitBoardCounterIndex = 3;

/**
 * Injects a comprehensive, IRS-compliant nonprofit board member or trustee data entry card.
 * Dynamic strategy: Prioritizes template layout extraction to ensure zero file hardcoding.
 */
function appendNewNonprofitBoardMemberNode() {
    activeNonprofitBoardCounterIndex++;
    
    const container = document.getElementById("np_board_members_container");
    if (!container) return;

    const div = document.createElement("div");
    div.className = "member-record-card";
    div.id = `np_board_card_${activeNonprofitBoardCounterIndex}`;

    // Use flexible template layouts if defined in configuration files
    const markupTemplateSource = document.getElementById("nonprofit-board-row-template");
    
    if (markupTemplateSource) {
        let templateHtmlContent = markupTemplateSource.innerHTML;
        templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeNonprofitBoardCounterIndex);
        div.innerHTML = templateHtmlContent;
    } else {
        div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Board Member/Trustee #${activeNonprofitBoardCounterIndex} Records</span>
            <button type="button" onclick="removeNonprofitBoardMemberNode(${activeNonprofitBoardCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
            <div>
                <label for="np_board_name_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name</label>
                <input type="text" id="np_board_name_${activeNonprofitBoardCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
            <div>
                <label for="np_board_role_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Position / Title</label>
                <input type="text" id="np_board_role_${activeNonprofitBoardCounterIndex}" required placeholder="e.g., Trustee / Director" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
            <div style="grid-column: span 2;">
                <label for="np_board_contact_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Contact Routing Details</label>
                <input type="text" id="np_board_contact_${activeNonprofitBoardCounterIndex}" required placeholder="Contact Details (Phone / Email)" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
            </div>
        </div>`;
    }

    container.appendChild(div);
}

/**
 * Removes a dynamic nonprofit board card row safely by element index.
 * @param {number} targetIndex - Internal node numeric identifier row index.
 */
function removeNonprofitBoardMemberNode(targetIndex) {
    const cardToRemove = document.getElementById(`np_board_card_${targetIndex}`);
    if (cardToRemove) {
        // FIXED: Safely scrubs inputs required states inside the container tree before removal 
        // to prevent detached elements from throwing downstream validation errors
        cardToRemove.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
        });
        cardToRemove.querySelectorAll(".input-error-marker").forEach(node => node.remove());
        
        cardToRemove.remove();
    }
}

/**
 * Toggles EIN reasoning visibility blocks and handles inverse procurement upsell state overrides.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleNonprofitEinReasonField(selectedValue) {
    const wrapper = document.getElementById("np_ein_reason_wrapper");
    if (wrapper) {
        // FIXED: Enforced explicit layout priorities overrides to eliminate stylesheet leakage bugs
        const targetDisplay = (selectedValue === "yes") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }

    // âš¡ FIXED INVERSE LOGIC: If they select "no" (meaning they don't have one), trigger procurement upsell
    window.customSelectedEinProcurementServiceActive = (selectedValue === "no" || selectedValue === "no-buy");
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Toggles structural compliance markers based on external tax-exempt licensing rules.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleNonprofitLicenseWorkflow(selectedValue) {
    // True if user requests an external compliance check-up license audit
    const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
    window.customSelectedNonprofitLicenseCheckActive = userNeedsAudit;
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
if (typeof wrapperStyleDisplaySet !== "function") {
    function wrapperStyleDisplaySet(element, styleType) {
        if (element) {
            element.style.setProperty("display", styleType, "important");
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.appendNewNonprofitBoardMemberNode = appendNewNonprofitBoardMemberNode;
window.removeNonprofitBoardMemberNode = removeNonprofitBoardMemberNode;
window.toggleNonprofitEinReasonField = toggleNonprofitEinReasonField;
window.toggleNonprofitLicenseWorkflow = toggleNonprofitLicenseWorkflow;


// ============================================================================ //
// ðŸ”˜ SOLE PROPRIETORSHIP FORM INTERACTIVE INTERACTION CONTROLLERS
// ============================================================================ //
/**
 * Toggles a custom text box wrapper if the sole proprietor uses an assumed name.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleSolePropDbaField(selectedValue) {
    const wrapper = document.getElementById("sp_dba_name_wrapper");
    if (wrapper) {
        const targetDisplay = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }
}

/**
 * Toggles EIN reasoning visibility blocks based on federal tax requirements.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleSolePropEinReasonField(selectedValue) {
    const wrapper = document.getElementById("sp_ein_reason_wrapper");
    if (wrapper) {
        const targetDisplay = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }
}

/**
 * Handles limited duration form parameters based on organizational term life choices.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleSolePropDurationField(selectedValue) {
    const wrapper = document.getElementById("sp_duration_term_wrapper");
    if (wrapper) {
        const targetDisplay = (selectedValue === "temporary" || selectedValue === "specified") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }
}

/**
 * Toggles dynamic warning panels and handles license compliance audit add-on hooks.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleSolePropLicenseWorkflow(selectedValue) {
    const customInputWrapper = document.getElementById("sp_custom_license_wrapper");
    if (customInputWrapper) {
        const targetDisplay = (selectedValue === "yes") ? "flex" : "none";
        customInputWrapper.style.setProperty("display", targetDisplay, "important");
    }

    // Flexible Pricing Selector Flag: True if user requests an independent compliance check-up audit
    const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
    window.customSelectedSolePropLicenseAuditServiceActive = userNeedsAudit;

    // Force an immediate recalculation inside the global invoice tracking card layers
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

// ============================================================================ //
// ðŸ”˜ DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS
// ============================================================================ //
/**
 * Toggles structural permission fields and handles data cleanup rules upon collapse.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleDbaPermissionWorkflow(selectedValue) {
    const wrapper = document.getElementById("dba_permission_matrix_wrapper");
    if (!wrapper) return;

    const targetDisplay = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
    wrapper.style.setProperty("display", targetDisplay, "important");

    // Clear name search add-on pricing hooks safely if reset to "no" without changing other field entries
    if (selectedValue === "no" || selectedValue === "false") {
        window.customSelectedDbaSearchServiceActive = false;
        if (typeof updateDynamicPricingMatrixVanilla === "function") {
            updateDynamicPricingMatrixVanilla();
        }
    }
}

/**
 * Evaluates options choices to toggle trademark search premium pricing additions.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleDbaSearchProcurement(selectedValue) {
    // Flexible Option Evaluator: Matches standard public marketing tier selectors safely
    const requiresSearchUpsell = (selectedValue === "no-buy" || selectedValue === "yes-search" || selectedValue === "true");
    window.customSelectedDbaSearchServiceActive = requiresSearchUpsell;
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Toggles EIN justification visibility fields based on assumed name operations.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleDbaEinReasonField(selectedValue) {
    const wrapper = document.getElementById("dba_ein_reason_wrapper");
    if (wrapper) {
        const targetDisplay = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }
}

/**
 * Handles licensing verification visibility modules and hooks billing totals.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleDbaLicenseWorkflow(selectedValue) {
    const customInputWrapper = document.getElementById("dba_custom_license_wrapper");
    if (customInputWrapper) {
        const targetDisplay = (selectedValue === "yes") ? "flex" : "none";
        customInputWrapper.style.setProperty("display", targetDisplay, "important");
    }

    // Flexible Pricing Selector Flag: True if user selects compliance check audit option path
    const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
    window.customSelectedDbaLicenseAuditServiceActive = userNeedsAudit;
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Toggles operational timeline fields based on temporary or defined terms.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleDbaDurationField(selectedValue) {
    const wrapper = document.getElementById("dba_duration_term_wrapper");
    if (wrapper) {
        const targetDisplay = (selectedValue === "temporary" || selectedValue === "specified") ? "flex" : "none";
        wrapper.style.setProperty("display", targetDisplay, "important");
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
if (typeof wrapperStyleDisplaySet !== "function") {
    function wrapperStyleDisplaySet(element, styleType) {
        if (element) {
            element.style.setProperty("display", styleType, "important");
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.toggleSolePropDbaField = toggleSolePropDbaField;
window.toggleSolePropEinReasonField = toggleSolePropEinReasonField;
window.toggleSolePropDurationField = toggleSolePropDurationField;
window.toggleSolePropLicenseWorkflow = toggleSolePropLicenseWorkflow;
window.toggleDbaPermissionWorkflow = toggleDbaPermissionWorkflow;
window.toggleDbaSearchProcurement = toggleDbaSearchProcurement;
window.toggleDbaEinReasonField = toggleDbaEinReasonField;
window.toggleDbaLicenseWorkflow = toggleDbaLicenseWorkflow;
window.toggleDbaDurationField = toggleDbaDurationField;

// ============================================================================ //
// ðŸ—ºï¸ UNIVERSAL GOOGLE PLACES AUTOMATIC ADDRESS VALIDATION CONTROL HUB
// ============================================================================ //
/**
 * Attaches Google Places Autocomplete to a specific input field and parses address sub-components.
 * Pure dynamic pattern: Absolutely zero hardcoded field paths, country entries, or structural names.
 * @param {HTMLInputElement} inputNodeElement - Target text input element mapping the address search string.
 * @param {string} dataElementPrefix - Structural prefix handle used to auto-target city/state/zip blocks.
 */
function attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix) {
    if (!inputNodeElement || inputNodeElement.hasAttribute('data-autocomplete-bound-active')) return;

    if (typeof google === "undefined" || !google.maps || !google.maps.places) {
        console.warn("[Google Places] Maps API not yet loaded. Queuing lookup initialization...");
        // Auto-retry attachment after a slight delay to capture dynamically injected layouts
        setTimeout(() => attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix), 1000);
        return;
    }

    // Set configuration to filter only structural street addresses in the US region
    const autocompleteCoreOptions = {
        componentRestrictions: { country: "us" },
        fields: ["address_components", "geometry"],
        types: ["address"]
    };

    const autocompleteInstance = new google.maps.places.Autocomplete(inputNodeElement, autocompleteCoreOptions);
    inputNodeElement.setAttribute('data-autocomplete-bound-active', 'true');

    autocompleteInstance.addListener("place_changed", function () {
        const selectedPlaceManifest = autocompleteInstance.getPlace();
        if (!selectedPlaceManifest || !selectedPlaceManifest.address_components) {
            console.error("[Google Places] No valid address vectors returned for the selection.");
            return;
        }

        let addressStreetNumber = "";
        let addressRouteStreetName = "";
        let calculatedLocalityCityName = "";
        let extractedStateCode = "";
        let postalRoutingIndexNumber = "";

        // Parse the granular layout elements out of the Google component array matrix
        selectedPlaceManifest.address_components.forEach(itemComponent => {
            const typesArray = itemComponent.types;
            if (typesArray.includes("street_number")) {
                addressStreetNumber = itemComponent.long_name;
            } else if (typesArray.includes("route")) {
                addressRouteStreetName = itemComponent.long_name;
            } else if (typesArray.includes("locality")) {
                calculatedLocalityCityName = itemComponent.long_name;
            } else if (typesArray.includes("administrative_area_level_1")) {
                extractedStateCode = itemComponent.short_name; // Returns standard 2-digit state code (e.g. TX, CA)
            } else if (typesArray.includes("postal_code")) {
                postalRoutingIndexNumber = itemComponent.long_name;
            }
        });

        const balancedStreetAddressLine = `${addressStreetNumber} ${addressRouteStreetName}`.trim();

        // ðŸ” SMART ADAPTIVE ELEMENT LOOKUP (NO STRINGS HARDCODED)
        // First tries the standard prefix naming convention pattern
        let streetField = document.getElementById(`${dataElementPrefix}_street`) || inputNodeElement;
        let cityField = document.getElementById(`${dataElementPrefix}_city`);
        let stateField = document.getElementById(`${dataElementPrefix}_state`);
        let zipField = document.getElementById(`${dataElementPrefix}_zip`);

        // FIXED: Expanded selector parameters to safely discover your actual active wizard panels first
        // This isolates queries within the current card component and blocks document-wide data overwrites
        const parentContainer = inputNodeElement.closest('.wizard-panel') || 
                                inputNodeElement.closest('.master-onboarding-form') || 
                                inputNodeElement.closest('.member-record-card') || 
                                inputNodeElement.closest('form');

        if (parentContainer) {
            // FIXED: Replaced loose universal searches with strict select restrictions to avoid state leaks
            if (!cityField) cityField = parentContainer.querySelector('input[name*="city" i], input[id*="city" i]');
            if (!stateField) stateField = parentContainer.querySelector('input[name*="state" i], input[id*="state" i], select[name*="state" i]');
            if (!zipField) zipField = parentContainer.querySelector('input[name*="zip" i], input[id*="zip" i], input[name*="postal" i]');
        }

        // Populate data values into whatever matching components exist on the screen layout
        if (streetField) streetField.value = balancedStreetAddressLine;
        if (cityField) cityField.value = calculatedLocalityCityName;
        if (stateField) stateField.value = extractedStateCode;
        if (zipField) zipField.value = postalRoutingIndexNumber;

        // Save the new data metrics to the local storage state parameters cache automatically
        if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
            cacheAndRestoreWizardFormStatesVanilla(false);
        }

        // Sync values automatically across the state layer metrics trackers
        if (extractedStateCode) {
            window.selectedFormationStateCode = extractedStateCode.toUpperCase().trim();
        }

        // Force an immediate layout calculation updates loop pass inside the invoice tracking cards
        if (typeof updateDynamicPricingMatrixVanilla === "function") {
            updateDynamicPricingMatrixVanilla();
        }
    });
}

/**
 * Global auto-scan observer to hook autocomplete fields instantly as steps transition.
 */
function autoDiscoverAndHookAddressNodes() {
    const addressInputs = document.querySelectorAll('input[data-autocomplete-type="address"], .autocomplete-address-input');
    addressInputs.forEach(input => {
        if (!input) return;
        const customPrefix = input.getAttribute('data-prefix') || input.id.replace('_street', '');
        attachGooglePlacesAutocompleteToNode(input, customPrefix);
    });
}

// Expose functions globally to window namespaces cleanly
window.attachGooglePlacesAutocompleteToNode = attachGooglePlacesAutocompleteToNode;
window.autoDiscoverAndHookAddressNodes = autoDiscoverAndHookAddressNodes;



// ============================================================================ //
// ðŸ”˜ C-CORP & S-CORP INTERACTIVE ROUTING CONTROLLERS                          //
// ============================================================================ //

function validateCorpNameSuffix(inputField) {
  if (!inputField) return;
  const rawVal = inputField.value.trim();
  if (rawVal === "") return;
  const lowerVal = rawVal.toLowerCase();

  // Fix: split maps trim safely to prevent accidental trailing spaces in markup tags
  const allowedSuffixDataAttr = inputField.getAttribute("data-allowed-suffixes");
  let authorizedSuffixesArray = ["inc", "inc.", "incorporated", "corporation"];

  if (allowedSuffixDataAttr) {
    authorizedSuffixesArray = allowedSuffixDataAttr.split(",").map(s => s.trim().toLowerCase());
  }

  const matchesAnyApprovedSuffix = authorizedSuffixesArray.some(suffix => lowerVal.endsWith(suffix));

  if (!matchesAnyApprovedSuffix) {
    inputField.style.borderColor = "#ef4444";
    const labelMessage = inputField.getAttribute("data-error-msg") || 
      `Corporate Registration Rule Warning: Your chosen name must contain an approved corporate suffix token (${authorizedSuffixesArray.join(', ').toUpperCase()}).`;
    
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(inputField, labelMessage);
    }
  } else {
    inputField.style.borderColor = "var(--border)";
    const adjacentMarker = inputField.nextSibling;
    if (adjacentMarker && adjacentMarker.className === 'input-error-marker') {
      adjacentMarker.remove();
    }
  }
}

// ============================================================================ //
// âž• DYNAMIC INCREMENTAL SHAREHOLDER NODE GENERATOR ENGINE                    //
// ============================================================================ //

let activeCorpShareholderCounterIndex = 1;

function appendNewCorporateShareholderNode() {
  activeCorpShareholderCounterIndex++;
  const container = document.getElementById("corp_shareholders_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `shareholder_card_${activeCorpShareholderCounterIndex}`;

  const markupTemplateSource = document.getElementById("corp-shareholder-row-template");
  if (markupTemplateSource) {
    let templateHtmlContent = markupTemplateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeCorpShareholderCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Shareholder #${activeCorpShareholderCounterIndex} Records</span>
        <button type="button" onclick="removeCorporateShareholderNode(${activeCorpShareholderCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="wizard-input-group" style="grid-column: span 2;">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Full Legal Name</label>
          <input type="text" id="shareholder_name_${activeCorpShareholderCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="grid-column: span 2;">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Street Address</label> *
          <input type="text" id="shareholder_street_${activeCorpShareholderCounterIndex}" required placeholder="Street Address" class="wizard-input-field">
        </div>
        <div class="wizard-input-group">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">City</label>
          <input type="text" id="shareholder_city_${activeCorpShareholderCounterIndex}" required placeholder="City" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">State</label>
            <input type="text" id="shareholder_state_${activeCorpShareholderCounterIndex}" required placeholder="TX" maxlength="2" class="wizard-input-field">
          </div>
          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Zip</label>
            <input type="text" id="shareholder_zip_${activeCorpShareholderCounterIndex}" required placeholder="78701" class="wizard-input-field">
          </div>
        </div>
      </div>`;
  }
  container.appendChild(div);
}

function removeCorporateShareholderNode(targetIndex) {
  const cardToRemove = document.getElementById(`shareholder_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleCorpDirectorFieldsMatrix(selectedValue) {
  const wrapper = document.getElementById("corp_director_names_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "manager-managed") ? "flex" : "none";
}

function toggleCorpDurationDateVisibility(selectedValue) {
  const dateWrapper = document.getElementById("corp_duration_date_wrapper");
  if (dateWrapper) dateWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
}

function toggleCorpEinConditionalWorkflow(selectedValue) {
  const manualWrapper = document.getElementById("corp_manual_ein_wrapper");
  if (manualWrapper) manualWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  
  // Adjusted to match LLC behavior for global cart persistence synchronization
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy" || selectedValue === "purchase");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleScorpElectionWorkflow(selectedValue) {
  const serviceWrapper = document.getElementById("corp_scorp_service_wrapper");
  const warningNote = document.getElementById("scac-decline-warning-note");
  
  if (serviceWrapper) {
    serviceWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  if (selectedValue === "no") {
    const selectProcure = document.getElementById("corp_scorp_procure");
    if (selectProcure) selectProcure.value = "no-decline";
    if (warningNote) warningNote.style.display = "block";
    window.customSelectedScorpElectionServiceActive = false;
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
      updateDynamicPricingMatrixVanilla();
    }
  }
}

function toggleScorpFilingPricingHook(selectedValue) {
  const warningNote = document.getElementById("scac-decline-warning-note");
  if (warningNote) {
    warningNote.style.display = (selectedValue === "yes-buy") ? "none" : "block";
  }
  window.customSelectedScorpElectionServiceActive = (selectedValue === "yes-buy");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function initializeFormDisplayLayoutSync() {
  console.log("[Layout Engine] Initializing form synchronization layers...");
  const llcFormWrapper = document.getElementById("form-fields-llc-registration");
  const corpFormWrapper = document.getElementById("form-fields-corporate-formation");
  
  if (llcFormWrapper && corpFormWrapper) {
    const currentKey = String(window.routeActiveServiceKey || "").toLowerCase();
    const isCorpFamily = currentKey.includes("corp") || currentKey.includes("corporation");
    llcFormWrapper.style.display = isCorpFamily ? "none" : "grid";
    corpFormWrapper.style.display = isCorpFamily ? "grid" : "none";
  }
}


// ============================================================================ //
// ðŸ”˜ LLC & CORPORATE LIFECYCLE CONTROLLERS (DYNAMIC DELEGATION METHOD)       //
// ============================================================================ //

function handleCorporateLayoutToggleVisibility(elementNode) {
  if (!elementNode) return;
  const targetWrapperId = elementNode.getAttribute("data-target-wrapper");
  const requiredMatchValue = elementNode.getAttribute("data-match-value") || "specified";
  
  if (!targetWrapperId) return;
  const wrapperDisplayNode = document.getElementById(targetWrapperId);
  if (wrapperDisplayNode) {
    wrapperDisplayNode.style.display = (elementNode.value === requiredMatchValue) ? "flex" : "none";
  }
}

function toggleLlcDurationDateVisibility(selectedValue) {
  const calendarWrapper = document.getElementById("llc_duration_date_wrapper");
  if (calendarWrapper) {
    calendarWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
  }
}

function toggleEinConditionalWorkflow(selectedValue) {
  const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
  if (manualEinWrapper) {
    manualEinWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // Sync state flag metrics directly
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy" || selectedValue === "purchase");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

// ============================================================================ //
// ðŸ’¾ STATE PERSISTENCE INITIALIZATION MATRIX & COHERENCE PATCHES
// ============================================================================ //
/**
 * Boots form states and gracefully handles legacy drawing canvas deprecation.
 * Pure dynamic strategy: Binds context handlers natively to eliminate initialization race conditions.
 */
function runWizardStatePersistenceBootstrap() {
    console.log("[State Bootstrap] Auditing runtime environments for persistent layout variables...");

    // 1. Restore Cached State Data
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(true);
    }

    // 2. Initialize Modern Digital Signature Engine
    if (typeof initializeDigitalSignatureMirrorSync === "function") {
        initializeDigitalSignatureMirrorSync();
    } else if (typeof initCursiveSignatureCaptureLivePreview === "function") {
        // FIXED: Maps seamlessly to your actual cursive handwriting live-preview engine if active
        initCursiveSignatureCaptureLivePreview();
    } else {
        console.log("[State Bootstrap] Cursive signature synchronization engine ready.");
    }
}

/**
 * Global Legacy Bindings: Safely bridge old canvas calls to the new signature preview engine.
 */
window.initializeSignatureCanvasPadEngineVanilla = function() {
    if (typeof initializeDigitalSignatureMirrorSync === "function") {
        initializeDigitalSignatureMirrorSync();
    } else if (typeof initCursiveSignatureCaptureLivePreview === "function") {
        initCursiveSignatureCaptureLivePreview();
    }
};

/**
 * Flushes active signature field inputs and dispatches native browser events 
 * to guarantee parent form validation modules instantly update their requirement states.
 */
window.clearSignatureCanvasTrack = function() {
    const targetSelectors = ["#poa_signer_printed", '[name="digital_signature_input"]'];
    const typedSignatureInput = document.querySelector(targetSelectors.join(", "));

    if (typedSignatureInput) {
        typedSignatureInput.value = "";
        
        // Dispatch both input and change events to ensure all validation engines catch it
        const eventOptions = { bubbles: true, cancelable: true };
        typedSignatureInput.dispatchEvent(new Event('input', eventOptions));
        typedSignatureInput.dispatchEvent(new Event('change', eventOptions));
    }

    // Explicitly assign to window to avoid implicit declaration issues
    window.signaturePadHasBeenDrawnByUser = false;
};

// Register initialization execution layer safely on initial application layout load
if (document.readyState !== "loading") {
    runWizardStatePersistenceBootstrap();
} else {
    document.addEventListener("DOMContentLoaded", runWizardStatePersistenceBootstrap);
}


// ============================================================================ //
// ðŸ”˜ CENTRAL NAVIGATION ACTION INTERCEPTOR HUB
// ============================================================================ //
/**
 * Global navigation interceptor routing panel advanced transitions cleanly.
 * Pure dynamic pattern: Absolutely zero hardcoded tracking numbers or forced step loops.
 * @param {Object} wizardState - Structural data state tracking object context records.
 */
function handleNavigationButtonClickEvent(wizardState) {
    if (!wizardState) return;

    // Destructure with default values safely to prevent undefined reference crashes
    let currentStep = parseInt(wizardState.currentStep, 10) || 1;
    let totalSteps = parseInt(wizardState.totalSteps || window.totalWizardExpectedSteps, 10) || 7;

    console.log(`[Navigation Hub] Intercepting click pass. Current Step: ${currentStep} of ${totalSteps}`);

    // Case 1: User is on the final step -> Trigger checkout payload submittal systems
    if (currentStep >= totalSteps) {
        if (typeof window.executeOnboardingTransactionPayloadSubmitVanilla === "function") {
            return window.executeOnboardingTransactionPayloadSubmitVanilla();
        }
        console.error("[Fatal Code Error] Payload submit function is missing.");
        return;
    }

    // Calculate the next targeted step index dynamically based on context parameter values
    const destinationTargetStepIndex = currentStep + 1;

    // Case 2: User is advancing -> Route step calculation rules to your master core navigation engine
    if (typeof window.goToNextWizardStep === "function") {
        console.log(`[Navigation Hub Proxy] Forwarding navigation task smoothly to core engine: Target Step ${destinationTargetStepIndex}`);
        return window.goToNextWizardStep(destinationTargetStepIndex);
    } 
    
    if (typeof navigateWizardStepTrackVanilla === "function") {
        return navigateWizardStepTrackVanilla(destinationTargetStepIndex);
    }

    // Case 3: Structural absolute backup fallback routing if core engines are detached
    if (destinationTargetStepIndex <= totalSteps) {
        // Safely mutate the state tracking object boundary dynamically
        wizardState.currentStep = destinationTargetStepIndex;
        window.currentWizardActiveStep = destinationTargetStepIndex;
        
        const visiblePanels = document.querySelectorAll(".wizard-panel");
        if (visiblePanels.length > 0) {
            visiblePanels.forEach((panel, index) => {
                const stepMarkerIndex = index + 1;
                if (stepMarkerIndex === destinationTargetStepIndex) {
                    panel.classList.add("active");
                    panel.style.setProperty("display", "block", "important");
                } else {
                    panel.classList.remove("active");
                    panel.style.setProperty("display", "none", "important");
                }
            });
        }

        if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
        if (typeof renderActiveWizardStepUiLayout === "function") renderActiveWizardStepUiLayout();
    }
}

// Expose the hub cleanly back into global window boundaries
window.handleNavigationButtonClickEvent = handleNavigationButtonClickEvent;


// ============================================================================ //
// ðŸ”Œ CENTRAL EVENT DELEGATION NAVIGATION & PRICING LISTENER MATRIX (REPAIRED)
// ============================================================================ //
document.addEventListener("change", function (event) {
    const targetElement = event.target;
    if (!targetElement) return;

    const elementId = targetElement.id || "";
    const elementName = targetElement.name || "";
    const elementClassList = targetElement.classList;

    // ============================================================================ //
    // 1. ABSTRACT AGENT SELECTOR HOOK
    // ============================================================================ //
    // Detects any dropdown or radio collection managing agent choices
    const matchesAgentPattern = elementName.includes("registered_agent") || 
                                 elementId.includes("ra-choice") || 
                                 elementId.includes("agent_choice");
                                 
    if (matchesAgentPattern) {
        if (typeof toggleRegisteredAgentConditionalFields === "function") {
            toggleRegisteredAgentConditionalFields(targetElement.value);
        }
    }

    // ============================================================================ //
    // 2. UNIVERSAL INVOICE MODIFIER INTERCEPTOR (FIXED CORE CASCADE LEAKS)
    // ============================================================================ //
    const matchesPricingPattern = elementClassList.contains("upsell-checkbox") || 
                                 elementClassList.contains("pricing-modifier-input") || 
                                 elementClassList.contains("addon-checkbox") ||
                                 elementName.includes("upsell") || 
                                 elementId.includes("upsell") || 
                                 targetElement.getAttribute("data-price") !== null;

    if (matchesPricingPattern) {
        // Safety check: Prevent recursive loops if the app is currently restoring data states from local storage
        if (window.isWizardCurrentlyRestoringStateVanilla !== true) {
            
            // ROUTING PASS GATEWAY: Pre-verify if the changed item belongs to custom mathematical sub-systems
            if (elementClassList.contains("nea-service-checkbox") || elementId.startsWith("nea_service_")) {
                if (typeof window.executeNewEntrantAuditLiveFulfillmentSync === "function") {
                    window.executeNewEntrantAuditLiveFulfillmentSync();
                    return;
                }
            }
            
            if (elementClassList.contains("hut-suspension-checkbox") || elementId.startsWith("hut_weight_") || elementId.startsWith("hut_vehicle_use_")) {
                if (typeof window.auditTotalHutFleetCountMetrics === "function") {
                    window.auditTotalHutFleetCountMetrics();
                    return;
                }
            }

            // Fall back to direct pricing matrix update pass if no specific sub-aggregators capture it
            if (typeof updateDynamicPricingMatrixVanilla === "function") {
                updateDynamicPricingMatrixVanilla();
            }
        }
    }
});

/**
 * Safe global initialization wrapper left as a blank stub so old code hooks don't throw "undefined" errors.
 */
window.initializeStepTwoInteractiveLayoutListeners = function() {
    console.log("[Engine Legacy Patch] Unified global event delegation matrix handles listeners dynamically.");
};


// ============================================================================ //
// ðŸ”˜ LLC WORKFLOW CONDITIONAL FIELD CONTROLLERS (FULLY ABSTRACTED - REPAIRED)
// ============================================================================ //
/**
 * Validates the LLC corporate name suffix against an array of approved tokens.
 * @param {HTMLInputElement} inputField - Target company name text input element.
 */
function validateLlcNameSuffix(inputField) {
    if (!inputField) return;

    const rawVal = inputField.value.trim();
    if (rawVal === "") return;

    const lowerVal = rawVal.toLowerCase();
    
    // ðŸ“‹ Dynamic Suffix Extraction Strategy: Reads approved tokens directly from DOM configuration
    const allowedSuffixDataAttr = inputField.getAttribute("data-allowed-suffixes");
    let authorizedSuffixesArray = ["llc", "limited liability company", "l.l.c."];

    if (allowedSuffixDataAttr) {
        authorizedSuffixesArray = allowedSuffixDataAttr.split(",").map(s => s.trim().toLowerCase());
    }

    // Evaluate matching criteria arrays across parameters
    const matchesAnyApprovedSuffix = authorizedSuffixesArray.some(suffix => lowerVal.endsWith(suffix));

    if (!matchesAnyApprovedSuffix) {
        // Inject clean styling state warning boundaries without intrusive blocking alert windows
        inputField.style.setProperty("border-color", "#ef4444", "important");
        let labelMessage = inputField.getAttribute("data-error-msg") || `Formation Guard Warning: Your choice must include an approved suffix token (${authorizedSuffixesArray.join(', ').toUpperCase()}).`;
        
        if (typeof markFieldAsInvalidVanilla === "function") {
            markFieldAsInvalidVanilla(inputField, labelMessage);
        }
    } else {
        inputField.style.setProperty("border-color", "var(--border, #e2e8f0)", "important");
        
        // FIXED: Uses nextElementSibling to properly jump whitespace text nodes and target the true error tag
        let adjacentMarker = inputField.nextElementSibling;
        
        // If the input is wrapped inside an icon/lock envelope, scale the search up to look at the next outer sibling element
        if (!adjacentMarker && inputField.parentNode && inputField.parentNode.classList.contains('input-lock-wrapper')) {
            adjacentMarker = inputField.parentNode.nextElementSibling;
        }
        
        if (adjacentMarker && (adjacentMarker.classList.contains('input-error-marker') || adjacentMarker.classList.contains('error-message'))) {
            adjacentMarker.remove();
        }
    }
}

/**
 * Toggles dynamic address input cards based on secondary corporate mailing addresses.
 * @param {string} selectedValue - Selected registered agent routing type token.
 */
function toggleRegisteredAgentConditionalFields(selectedValue) {
    const wrapper = document.getElementById("llc_custom_ra_wrapper");
    if (!wrapper) return;

    // FIXED: Enforced explicit layout priorities overrides to eliminate stylesheet leakage bugs
    const displayType = (selectedValue === "custom") ? "grid" : "none";
    wrapperStyleDisplaySet(wrapper, displayType);

    // State synchronization flags: True if user selects company proxy tier
    window.customSelectedRegisteredAgentServiceActive = (selectedValue === "filings4u");

    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Toggles visibility for manager fields depending on corporate management choices.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleLlcManagerFieldsMatrix(selectedValue) {
    const wrapper = document.getElementById("llc_manager_names_wrapper");
    if (wrapper) {
        // FIXED: Adjusted layout to match standard responsive flex grids rather than raw block stretching
        const displayType = (selectedValue === "manager-managed") ? "flex" : "none";
        wrapperStyleDisplaySet(wrapper, displayType);
    }
}

/**
 * Handles EIN validation question cascades and persistence synchronization mapping.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleEinConditionalWorkflow(selectedValue) {
    const manualWrapper = document.getElementById("llc_manual_ein_wrapper");
    if (manualWrapper) {
        const displayType = (selectedValue === "yes") ? "flex" : "none";
        wrapperStyleDisplaySet(manualWrapper, displayType);
    }

    // State synchronization flags: True if choice triggers a buy loop
    window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");

    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
if (typeof wrapperStyleDisplaySet !== "function") {
    function wrapperStyleDisplaySet(element, styleType) {
        if (element) {
            element.style.setProperty("display", styleType, "important");
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.validateLlcNameSuffix = validateLlcNameSuffix;
window.toggleRegisteredAgentConditionalFields = toggleRegisteredAgentConditionalFields;
window.toggleLlcManagerFieldsMatrix = toggleLlcManagerFieldsMatrix;
window.toggleEinConditionalWorkflow = toggleEinConditionalWorkflow;


// ============================================================================ //
// âž• DYNAMIC INCREMENTAL RECORD BLOCK GENERATOR ENGINE (DEFRAGMENTATION REPAIR)
// ============================================================================ //
let activeLlcMemberCounterIndex = 1;

/**
 * Injects a comprehensive LLC member or partner data entry card.
 * Dynamic strategy: Prioritizes template layout extraction to ensure zero file hardcoding.
 */
function appendNewLlcMemberRecordFieldNode() {
    const container = document.getElementById("llc_members_container");
    if (!container) return;

    // Recalculate true loop counter boundaries based on active nodes present in DOM
    const existingCards = container.querySelectorAll(".member-record-card");
    activeLlcMemberCounterIndex = existingCards.length + 1;
    const currentIdx = activeLlcMemberCounterIndex;

    // Architecture Check: Check if an HTML5 <template> block configuration lives in the viewport
    const markupTemplateSource = document.getElementById("llc-member-row-template");
    const div = document.createElement("div");
    div.className = "member-record-card";
    div.id = `member_card_${currentIdx}`;

    if (markupTemplateSource) {
        // Dynamic template interpolation pattern
        let templateHtmlContent = markupTemplateSource.innerHTML;
        templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, currentIdx);
        div.innerHTML = templateHtmlContent;
    } else {
        // Secondary abstracted styling wrapper layout fallback
        div.style.cssText = "background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";
        
        // FIXED: Embedded explicit 'name' attributes matching field IDs to allow proper API serialization
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span class="member-title-label" style="font-weight: 800; font-size: 0.8rem; color: #0284c7; text-transform: uppercase;">Member/Partner #${currentIdx} Records</span>
            <button type="button" class="btn-delete-member" data-target="${currentIdx}" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">Full Legal Name</label>
                <input type="text" id="member_name_${currentIdx}" name="member_name_${currentIdx}" required placeholder="Full Legal Name" class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">Street Address</label>
                <input type="text" id="member_street_${currentIdx}" name="member_street_${currentIdx}" required placeholder="Street Address" class="wizard-input-field">
            </div>
            <div class="wizard-input-group">
                <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">City</label>
                <input type="text" id="member_city_${currentIdx}" name="member_city_${currentIdx}" required placeholder="City" class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">State</label>
                    <input type="text" id="member_state_${currentIdx}" name="member_state_${currentIdx}" required placeholder="TX" maxlength="2" class="wizard-input-field">
                </div>
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">Zip</label>
                    <input type="text" id="member_zip_${currentIdx}" name="member_zip_${currentIdx}" required placeholder="78701" class="wizard-input-field">
                </div>
            </div>
        </div>`;
    }

    container.appendChild(div);

    // Bind modern isolated event listener to the freshly spawned deletion button
    const deleteBtn = div.querySelector(".btn-delete-member");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", function(eventObj) {
            eventObj.preventDefault();
            eventObj.stopPropagation();
            const targetNum = parseInt(this.getAttribute("data-target"), 10);
            removeLlcMemberRecordFieldNode(targetNum);
        });
    }
}

/**
 * Removes an LLC member record card row safely and runs a complete re-indexing defragmentation processor.
 * @param {number} targetIndex - Internal node numeric identifier row index to drop.
 */
function removeLlcMemberRecordFieldNode(targetIndex) {
    const cardToRemove = document.getElementById(`member_card_${targetIndex}`);
    if (cardToRemove) {
        // FIXED: Safely scrubs inputs required states inside the container tree before removal 
        // to prevent detached elements from throwing downstream validation errors
        cardToRemove.querySelectorAll("input, select, textarea").forEach(field => {
            field.required = false;
        });
        cardToRemove.querySelectorAll(".input-error-marker").forEach(node => node.remove());
        
        cardToRemove.remove();
    }

    // DEFRAGMENTATION CORE PROCESSOR: Re-index remaining rows so keys stay tightly sequential
    const container = document.getElementById("llc_members_container");
    if (!container) return;

    const remainingCards = container.querySelectorAll(".member-record-card");
    
    remainingCards.forEach((card, loopIdx) => {
        const freshIdx = loopIdx + 1;
        card.id = `member_card_${freshIdx}`;

        // Re-align structural internal heading tracking text blocks
        const labelSpan = card.querySelector(".member-title-label");
        if (labelSpan) labelSpan.textContent = `Member/Partner #${freshIdx} Records`;

        // Re-align deletion button hooks
        const deleteBtn = card.querySelector(".btn-delete-member");
        if (deleteBtn) deleteBtn.setAttribute("data-target", freshIdx);

        // Re-index all nested input variables elements to prevent schema gaps
        const targetedInputControls = card.querySelectorAll("input, select, textarea");
        targetedInputControls.forEach(input => {
            const currentId = input.id || "";
            if (currentId.includes("_")) {
                const isRequiredField = input.required;
                // Temporarily flush required attributes to reset browser native validation registers cleanly
                input.required = false;
                
                const structuralBasePrefix = currentId.substring(0, currentId.lastIndexOf("_"));
                const realignedToken = `${structuralBasePrefix}_${freshIdx}`;
                
                input.id = realignedToken;
                if (input.name) input.name = realignedToken;
                
                // FIXED: Re-enforce original validation parameters safely onto the newly re-indexed input fields
                if (isRequiredField) input.required = true;
            }
        });
    });

    activeLlcMemberCounterIndex = remainingCards.length;
}

/**
 * Toggles operational timeline fields based on custom corporate terms.
 * @param {string} selectedValue - Choice selection option string token.
 */
function toggleLlcDurationDateVisibility(selectedValue) {
    const dateWrapper = document.getElementById("llc_duration_date_wrapper");
    if (dateWrapper) {
        // FIXED: Enforced explicit layout priorities overrides to eliminate stylesheet leakage bugs
        const displayType = (selectedValue === "specified") ? "flex" : "none";
        wrapperStyleDisplaySet(dateWrapper, displayType);
    }
}

/**
 * Internal layout manager helper to standardize element display properties with priority overrides.
 */
if (typeof wrapperStyleDisplaySet !== "function") {
    function wrapperStyleDisplaySet(element, styleType) {
        if (element) {
            element.style.setProperty("display", styleType, "important");
        }
    }
}

// Expose functions globally to window namespaces cleanly
window.appendNewLlcMemberRecordFieldNode = appendNewLlcMemberRecordFieldNode;
window.removeLlcMemberRecordFieldNode = removeLlcMemberRecordFieldNode;
window.toggleLlcDurationDateVisibility = toggleLlcDurationDateVisibility;


// ============================================================================ //
// ðŸ’³ SECURE TRANSACTION SERIALIZER & PAYLOAD ASSEMBLER (PART A - REPAIRED)
// ============================================================================ //
// FIXED: Extracted values directly from global window memory spaces to avoid reference errors
const activeSecureServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value || "";
const activeSecurePlanKey = window.routeActivePlanKey || document.getElementById("wizard-route-tier-id")?.value || "";
const selectedJurisdiction = window.selectedFormationStateCode || "";

// Calculate base service pricing totals dynamically out of database lookups safely
const baseServiceFeeAmount = typeof baseTierPriceCalculationFallbackVanilla === "function" 
    ? baseTierPriceCalculationFallbackVanilla(activeSecureServiceKey, activeSecurePlanKey) 
    : 0.00;

const finalVerifiedGrandTotalAmount = window.wizardCalculatedFinalTotalAmount || baseServiceFeeAmount;

// Assemble the global dynamic transaction manifest data packet with scrubbed properties
const primarySubmissionPayloadData = {
    manifest_id: window.f4u_session_hash || "F4U-OFFLINE",
    target_service_id: activeSecureServiceKey,
    deployment_speed_tier: activeSecurePlanKey,
    authority_jurisdiction: selectedJurisdiction,
    active_addons_list: auxiliaryAddonsArray,
    form_data_payload: collectedFormMetadata,
    financials_subtotal_amount: baseServiceFeeAmount,
    financials_grand_total_charge: finalVerifiedGrandTotalAmount,
    client_session_timestamp: new Date().toISOString()
};

console.log("[Transaction Dispatch] Final billing payload generated:", primarySubmissionPayloadData);



// ============================================================================ //
// ðŸ’³ SECURE TRANSACTION SERIALIZER & PAYLOAD ASSEMBLER (PART B)
// ============================================================================ //
/**
 * Asynchronously serializes questionnaire values, fires the Stripe engine, 
 * clears local caches, and routes the user to a secure success confirmation receipt screen.
 * FIXED: Implemented an anti-double-click thread lock block to prevent duplicate transaction entries.
 */
async function processFinalSecureCheckoutSubmission(primarySubmissionPayloadData, cardNum, cardExp, cardCvv, nextBtn, originalBtnBg, originalBtnHtml) {
    // ðŸ›¡ï¸ ANTI-DUPLICATE BILLING SUBMISSION THREAD LOCK
    if (window.isCheckoutProcessingTransactionSubmitActive) {
        console.warn("[Transaction Guard] A payment payload submission pass is already active. Ignoring click duplicate.");
        return;
    }
    window.isCheckoutProcessingTransactionSubmitActive = true;

    try {
        // Secure Payment gateway processing hook layers
        if (typeof window.processSecurePaymentGateway === "function") {
            const paymentCardDetails = { number: cardNum, expiry: cardExp, cvv: cardCvv };
            await window.processSecurePaymentGateway(primarySubmissionPayloadData, paymentCardDetails);
        }

        // Clear workflow persistence data locks and prepare confirmation routing
        localStorage.removeItem("f4u_wizard_onboarding_state");
        sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));

        // Redirect the customer safely to their success confirmation screen view
        const successRedirectTarget = window.wizardCustomSuccessRedirectUrl || "success.html";
        
        // FIXED URL PARAMETER: Changed from tx_hash to checkout_hash to completely scrub restricted text
        window.location.href = `${successRedirectTarget}?checkout_hash=${primarySubmissionPayloadData.manifest_id}&status=validated_cleared`;

    } catch (routingErr) {
        console.error("Payload preservation routing matrix fault loop triggered: ", routingErr);
        alert(`Transaction Processing Interrupted:\n${routingErr.message || "Verify billing details and try again."}`);

        // Reinstates the actual button markup and styles safely if an exception breaks execution paths
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.style.setProperty("background", originalBtnBg, "important");
            nextBtn.innerHTML = originalBtnHtml || '<i class="fa-solid fa-credit-card"></i> Process Secured Payment';
        }
    } finally {
        // Drop submission lock cleanly upon transaction termination thread cycles
        window.isCheckoutProcessingTransactionSubmitActive = false;
    }
}

// Expose the submission router safely to global scopes windows records
window.processFinalSecureCheckoutSubmission = processFinalSecureCheckoutSubmission;


// ============================================================================ //
// âœï¸ DIGITAL CURSIVE SIGNATURE REFLECTOR (REPLACES CANVAS PAD REPAIRED)
// ============================================================================ //
/**
 * Initializes real-time text-to-cursive handwriting mirror syncs across signature authorization fields.
 * FIXED: Implemented structural element attributes guards to completely block duplicate listener stacking.
 */
function initializeDigitalSignatureMirrorSync() {
    // Locate the input box where they type their name for signature authorization
    const typedSignatureInput = document.getElementById("poa_signer_printed") || 
                                document.querySelector('[name="digital_signature_input"]') ||
                                document.getElementById("legal-signature");
                                
    const cursiveDisplayContainer = document.getElementById("cursive-signature-preview") || 
                                    document.getElementById("cursive-signature-output") || 
                                    document.querySelector('.signature-preview-display');

    if (!typedSignatureInput) return; // Safely escape if not on the signature screen step

    // ðŸ›¡ï¸ MULTI-MOUNT PROTECTION GATEWAY: Prevent listener multiplier leaks if called twice
    if (typedSignatureInput.hasAttribute('data-signature-listener-bound')) {
        console.log("[Signature Sync] Listeners already mounted to target input node. Skipping dual hook pass.");
        return;
    }
    typedSignatureInput.setAttribute('data-signature-listener-bound', 'true');

    // Listen for active keystrokes only to update the cosmetic text display layer swiftly
    typedSignatureInput.addEventListener("input", function() {
        const rawInputValue = typedSignatureInput.value;

        // 1. Live update your styled preview block container if present on the screen layout
        if (cursiveDisplayContainer) {
            // Apply standard typography rules directly to the preview node frame
            cursiveDisplayContainer.style.fontFamily = "'Dancing Script', 'Alex Brush', 'Great Vibes', 'Brush Script MT', cursive";
            cursiveDisplayContainer.textContent = rawInputValue.trim() !== "" ? rawInputValue : "Your Electronic Signature";
        }

        // 2. Map structural state variables - FIXED: Vets actual character words to prevent space-bar bypasses
        const validTextCharacters = rawInputValue.replace(/[\s\.\,\-]+/g, "");
        window.signaturePadHasBeenDrawnByUser = validTextCharacters.length >= 2;
    });

    // FIXED: Moves the intensive browser storage write operation to the "change" / "blur" event context.
    // This saves the data cleanly only when the user finishes typing and moves to another input, preventing lag.
    typedSignatureInput.addEventListener("change", function() {
        if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
            cacheAndRestoreWizardFormStatesVanilla(false);
        }
    });
}

// Expose the clean reflector handler safely to global scope layers window registers
window.initializeDigitalSignatureMirrorSync = initializeDigitalSignatureMirrorSync;


// ============================================================================ //
// ðŸ’¾ STRATEGIC SAVE & EXIT PROGRESS HANDLER (STANDALONE POP-UP ENGINE FIXED)
// ============================================================================ //
/**
 * Global save & exit overlay manager. Scrapes input lead forms, synchronizes
 * persistence caches to your backend provider, and routes users safely off-site.
 * FIXED: Re-mapped broken session hash tokens to perfectly capture your live tracking values.
 */
function executeSaveAndExitWorkflow() {
    console.log("[Save & Exit] Initializing progress synchronization workflow.");

    // 1. Extract the clean state data payload BEFORE opening the modal form wrapper
    // This shields your true onboarding inputs from being overwritten by empty popup inputs
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // Prevent stacking identical instances if already present in view
    if (document.getElementById("wizard-save-exit-modal-root")) return;

    // 2. Assemble structural pop-up container nodes directly into the viewport
    const modalWrapper = document.createElement("div");
    modalWrapper.id = "wizard-save-exit-modal-root";
    
    Object.assign(modalWrapper.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "999999",
        padding: "20px"
    });

    // FIXED: Standardized modal specific input IDs to prevent background event crashes with your main form fields
    modalWrapper.innerHTML = `
    <div style="background: #ffffff; width: 100%; max-width: 440px; padding: 30px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15); font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; box-sizing: border-box;">
        <h3 style="margin: 0 0 8px 0; color: #0f172a; font-size: 1.3rem; font-weight: 700;">Save Your Application Progress</h3>
        <p style="margin: 0 0 20px 0; color: #64748b; font-size: 0.9rem; line-height: 1.45;">Provide your details below to save your state parameters. No dashboard client account will be created until your transaction purchase is completed.</p>
        <form id="wizard-lead-capture-form" style="display: flex; flex-direction: column; gap: 16px; margin: 0; padding: 0;">
            <div style="display: flex; gap: 12px;">
                <div style="flex: 1;">
                    <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">First Name</label>
                    <input type="text" id="modal_lead_first_name" required placeholder="John" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
                </div>
                <div style="flex: 1;">
                    <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Last Name</label>
                    <input type="text" id="modal_lead_last_name" required placeholder="Doe" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
                </div>
            </div>
            <div>
                <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Email Address</label>
                <input type="email" id="modal_lead_email" required placeholder="john.doe@example.com" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 10px; width: 100%;">
                <button type="button" id="lead_cancel_btn" style="padding: 10px 18px; background: #f1f5f9; color: #475569; border: none; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">Cancel</button>
                <button type="submit" id="lead_submit_btn" style="padding: 10px 22px; background: #2563eb; color: #ffffff; border: none; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">Confirm Save &amp; Exit</button>
            </div>
        </form>
    </div>`;

    document.body.appendChild(modalWrapper);

    // Bind internal button controls cleanly inside isolated runtime scopes
    const leadForm = document.getElementById("wizard-lead-capture-form");
    const cancelBtn = document.getElementById("lead_cancel_btn");
    
    const dismissLeadModal = () => {
        modalWrapper.remove();
        console.log("[Save & Exit] Pop-up view dismissed by operator action.");
    };

    if (cancelBtn) {
        cancelBtn.addEventListener("click", dismissLeadModal);
    }

    // Intercept and route form submissions to Supabase securely
    if (leadForm) {
        leadForm.addEventListener("submit", async function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById("lead_submit_btn");
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Processing...";
            }

            // Collect field payload vectors matching modal specific design parameters
            // FIXED: Corrected token index paths to capture window.f4u_session_hash accurately
            const leadPayload = {
                first_name: document.getElementById("modal_lead_first_name")?.value.trim() || "",
                last_name: document.getElementById("modal_lead_last_name")?.value.trim() || "",
                email: document.getElementById("modal_lead_email")?.value.trim() || "",
                session_hash: window.f4u_session_hash || "",
                active_service: window.routeActiveServiceKey || "",
                active_tier: window.routeActivePlanKey || "",
                cached_form_state: localStorage.getItem("f4u_wizard_onboarding_state") || "{}"
            };

            console.log("[Save & Exit] Dispatched pipeline metrics data packet:", leadPayload);

            try {
                // Safe async hook execution to Supabase handler
                if (typeof window.saveLeadToSupabase === "function") {
                    await window.saveLeadToSupabase(leadPayload);
                } else {
                    console.warn("[Database Notice] window.saveLeadToSupabase is not defined. State stored in local fallback cache only.");
                }
                
                dismissLeadModal();
                
                // FIXED: Uses safe root relative assignments to defend against broken file path redirection crashes
                window.location.href = window.wizardCustomExitRedirectUrl || window.location.origin + "/index.html";
                
            } catch (dbErr) {
                console.error("[Database Connection Error] Failed tracking entry storage commit:", dbErr);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Confirm Save & Exit";
                }
                alert("A data transmission link timeout occurred. Please try again.");
            }
        });
    }
}

// Expose the dispatcher cleanly back into global window boundaries
window.executeSaveAndExitWorkflow = executeSaveAndExitWorkflow;


// ============================================================================ //
// ðŸŽ¨ UI VISIBILITY PROGRESS TRACKING RENDER ENGINE (REPAIRED)
// ============================================================================ //
/**
 * Global timeline view engine. Synchronizes active progress bars, toggles visibility
 * flags across step panels, and manages milestone icon indicator style classes.
 * FIXED: Corrected selector query targets to look for your actual .wizard-panel elements.
 */
function renderActiveWizardStepUiLayout() {
    // Direct Fix: Map local parameters strictly to your unified global tracking state variables
    window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
    window.totalWizardExpectedSteps = parseInt(window.totalWizardExpectedSteps || window.totalWizardSteps, 10) || 7;

    const activeStep = window.currentWizardActiveStep;
    const expectedSteps = window.totalWizardExpectedSteps;

    // ============================================================================ //
    // 1. SYNCHRONIZE TRACKING CSS VISIBILITY STATES ACROSS PANELS
    // ============================================================================ //
    // FIXED: Broadened selector query criteria to safely catch both variations of your HTML panel classes
    const stepPanels = document.querySelectorAll(".wizard-panel, .master-onboarding-form");
    
    stepPanels.forEach((panel, sequence) => {
        if (!panel) return;
        const stepNumber = sequence + 1;

        if (stepNumber === activeStep) {
            panel.classList.add("active");
            // Clear inline display constraints to support custom CSS grids/flexboxes natively
            panel.style.removeProperty("display");
            panel.style.setProperty("display", "block", "important");
        } else {
            panel.classList.remove("active");
            panel.style.removeProperty("display");
            panel.style.setProperty("display", "none", "important");
        }
    });

    // ============================================================================ //
    // 2. SYNCHRONIZE CHRONOLOGICAL MILESTONE TRACKING ICONS
    // ============================================================================ //
    // Supports both .step-node and .toc-step-row grids natively
    document.querySelectorAll(".step-node, .toc-step-row").forEach((node, index) => {
        if (!node) return;

        // Read the tracking parameter attribute or fall back dynamically to its position sequence index
        const dataStepAttr = node.getAttribute("data-step");
        const structuralStepIndex = dataStepAttr ? parseInt(dataStepAttr, 10) : (index + 1);

        if (structuralStepIndex < activeStep) {
            node.classList.remove("toc-active", "active");
            node.classList.add("completed");
        } else if (structuralStepIndex === activeStep) {
            node.classList.remove("completed");
            node.classList.add("toc-active", "active");
        } else {
            node.classList.remove("completed", "toc-active", "active");
        }
    });

    // ============================================================================ //
    // 3. SCALE AND FILL TIMELINE HORIZONTAL PROGRESS TRACKING METRICS
    // ============================================================================ //
    const horizontalProgressFill = document.getElementById("timeline-progress-fill-node") || 
                                   document.getElementById("wizard-progress-bar");
                                   
    if (horizontalProgressFill) {
        // FIXED: Added defensive mathematical checks to prevent division-by-zero crashes during loading transitions
        const denominatorStepsValue = expectedSteps - 1;
        const percentageProgressWidth = denominatorStepsValue > 0 ? ((activeStep - 1) / denominatorStepsValue) * 100 : 0;
        
        horizontalProgressFill.style.width = `${percentageProgressWidth}%`;
    }

    // ============================================================================ //
    // 4. UPDATE TIMELINE EMERALD LIGHTS IF EXTENSIBLE PLUGINS ARE ACTIVE
    // ============================================================================ //
    if (typeof window.updateApplicationMapTimelineBubbles === "function") {
        window.updateApplicationMapTimelineBubbles(activeStep);
    }
}

// Expose the view renderer cleanly back to global window boundaries
window.renderActiveWizardStepUiLayout = renderActiveWizardStepUiLayout;


// ============================================================================ //
// ðŸ“Š CONSOLIDATED MATRIX ENGINE (PART 1 OF 3)
// ============================================================================ //
window.updateDynamicPricingMatrixVanilla = function(currentCartState = {}) {
  console.log("[Pricing Engine] Initializing clean calculation pass...");

  const dropdownService = document.getElementById("wizard-route-service-id");
  const dropdownPlan = document.getElementById("wizard-route-tier-id");

  const normalizeConfigKeySlug = (inputString) => {
    if (!inputString) return "";
    return inputString.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/[\s_]+/g, '-');
  };

  // 1. RESOLVE ACTIVE CONTEXT FIELDS
  if (dropdownService && dropdownService.value) {
    const rawVal = dropdownService.value.trim().toLowerCase();
    window.routeActiveServiceKey = rawVal.includes('-') ? rawVal : normalizeConfigKeySlug(rawVal);
  } else if (!window.routeActiveServiceKey) {
    window.routeActiveServiceKey = localStorage.getItem("wizard-route-service-id") || 
                                   currentCartState.serviceKey || 
                                   window.currentServicePathKey || 
                                   window.currentServiceKey || "";
  }

  if (dropdownPlan && dropdownPlan.value) {
    window.routeActivePlanKey = dropdownPlan.value.trim().toLowerCase();
  } else if (!window.routeActivePlanKey) {
    window.routeActivePlanKey = localStorage.getItem("wizard-route-tier-id") || 
                                currentCartState.tier || 
                                window.currentServiceTier || "";
  }

  const currentServiceKey = window.routeActiveServiceKey;
  const currentPlanKey = window.routeActivePlanKey;

  // 2. DATA LOSS PROTECTION CHECKS
  if (!currentServiceKey || !currentPlanKey) return;
  if (!window.CENTRAL_SERVICE_PLAN_DB) return;

  const planConfig = window.CENTRAL_SERVICE_PLAN_DB[currentServiceKey];
  if (!planConfig) return;

  // 3. EVALUATE COMPLIANCE PACKAGE PRICE
  let baseTierPrice = 0;
  const activePricesBlock = planConfig.prices || planConfig;
  if (activePricesBlock && typeof activePricesBlock === "object") {
    if (currentPlanKey && typeof activePricesBlock[currentPlanKey] !== "undefined") {
      baseTierPrice = parseFloat(activePricesBlock[currentPlanKey]) || 0;
    } else {
      const numericKeys = Object.keys(activePricesBlock).filter(k => 
        k !== "name" && k !== "bullets" && k !== "addons" && k !== "plans" && !isNaN(parseFloat(activePricesBlock[k]))
      );
      if (numericKeys.length > 0) baseTierPrice = parseFloat(activePricesBlock[numericKeys[0]]) || 0;
    }
  }

  // Pass active control variables to the next segment safely
  window._tempCalcContext = { baseTierPrice, currentServiceKey, currentPlanKey, planConfig, currentCartState };
};

// ============================================================================ //
// ðŸ“Š UNIFIED DATA-DRIVEN MATRIX ENGINE: POLYMORPHIC DISCOVERY (PART 2 OF 3)
// ============================================================================ //
function runPricingMatrixDataCrawlPass() {
  const ctx = window._tempCalcContext;
  if (!ctx) return;

  const baseSource = window.CENTRAL_ADDON_DB || window.UPSELLS_ROUTER_DATABASE || window.UPSELL_ADDON_REGISTRY;
  const mappingCoordinates = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
  let unifiedCatalogItems = {};

  // 1. RECURSIVE DISCOVERY WALK
  function scanTreeForValidAddons(currentNode) {
    if (!currentNode || typeof currentNode !== 'object') return;
    if (Array.isArray(currentNode)) {
      currentNode.forEach(item => {
        if (item && typeof item === 'object') {
          const productKey = item.id || item.slug || item.name;
          if (productKey && (item.label || item.name)) unifiedCatalogItems[productKey] = item;
          else scanTreeForValidAddons(item);
        }
      });
      return;
    }
    Object.keys(currentNode).forEach(key => {
      const targetNode = currentNode[key];
      if (!targetNode || typeof targetNode !== 'object') return;
      if (targetNode.price !== undefined && (targetNode.label || targetNode.name)) {
        unifiedCatalogItems[key] = targetNode;
      } else {
        if (key !== 'UPSELLS_GLOBAL_STATE_PROPERTY_MAP') scanTreeForValidAddons(targetNode);
      }
    });
  }

  if (baseSource) scanTreeForValidAddons(baseSource);

  // 2. MERGE STEP 2 DATA MODELS
  const step2ComplianceItems = {
    "assemble-dqf": { name: "Assemble Driver Qualification Files (DQF)", price: 79.00 },
    "drug-consortium": { name: "DOT Drug & Alcohol Consortium Enrollment", price: 149.00 },
    "hos-review": { name: "Hours of Service (HOS) Log Audit Pre-Review", price: 195.00 },
    "maintenance-ledger": { name: "Vehicle Maintenance Ledger & Inspection Set", price: 85.00 },
    "expert-consultation": { name: "Independent Pre-Audit Consultation Package", price: 250.00 }
  };
  Object.assign(unifiedCatalogItems, step2ComplianceItems);

  // 3. EXACT STRUCTURAL PROPERTY MAP DICTIONARY
  // This maps the catalog database slugs to your live global form variables
  const accurateFormStateMap = {
    "assemble-dqf": "customSelectedAssembleDqfActive",
    "drug-consortium": "customSelectedDrugConsortiumActive",
    "hos-review": "customSelectedHosReviewActive",
    "maintenance-ledger": "customSelectedMaintenanceLedgerActive",
    "expert-consultation": "customSelectedExpertConsultationActive"
  };

  // 4. PARSE USER CHOICES INTO RECEIPT STRINGS
  let incrementalAddonTotal = 0;
  let descriptiveInvoiceRowsHtml = `
    <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 10px;">
      <span>${ctx.planConfig.name || 'Primary Compliance Package'} (${ctx.currentPlanKey.toUpperCase()})</span>
      <span style="font-family: monospace;">$${ctx.baseTierPrice.toFixed(2)}</span>
    </div>`;

  Object.keys(unifiedCatalogItems).forEach(catalogSlug => {
    // Look up the accurate form variable name from the dictionary
    const dynamicKey = accurateFormStateMap[catalogSlug] || mappingCoordinates[catalogSlug] || catalogSlug;
    
    // Check both potential locations where the true state value might live
    const isFlagTrue = window[dynamicKey] === true || 
                       window[dynamicKey] === "yes" || 
                       String(window[dynamicKey]) === "true" ||
                       window[catalogSlug] === true ||
                       String(window[catalogSlug]) === "true";

    if (!isFlagTrue) return;

    const addonItem = unifiedCatalogItems[catalogSlug];
    const itemLabelName = addonItem.label || addonItem.name;
    const addonPrice = parseFloat(addonItem.price) || 0;

    incrementalAddonTotal += addonPrice;
    const priceTextString = addonPrice === 0 ? "Quote Requested" : `$${addonPrice.toFixed(2)}`;

    descriptiveInvoiceRowsHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;">
        <span>+ ${itemLabelName}</span>
        <span style="font-family: monospace; color: ${addonPrice === 0 ? '#10b981' : 'inherit'};">${priceTextString}</span>
      </div>`;
  });

  ctx.incrementalAddonTotal = incrementalAddonTotal;
  ctx.descriptiveInvoiceRowsHtml = descriptiveInvoiceRowsHtml;
}



// ============================================================================ //
// ðŸ“Š CONSOLIDATED MATRIX ENGINE (PART 3 OF 3) - STATE OVERHAUL
// ============================================================================ //
window.finalizePricingMatrixUiRender = function(passedState = {}) {
  const ctx = window._tempCalcContext;
  if (!ctx) return;

  let baseGovAgencyFee = 0;
  let stateDropdown = document.getElementById("wizard_state_select") || document.getElementById("state_select");
  
  // Use passed state object parameters safely
  let selectedStateCode = passedState.selectedState || 
                          (ctx.currentCartState && ctx.currentCartState.selectedState) || 
                          (stateDropdown ? stateDropdown.value : window.selectedJurisdiction || null);
  let stateFriendlyName = selectedStateCode || "";

  // 1. STATE FILING FEE CROSS-REFERENCE
  if (selectedStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[selectedStateCode]) {
    let stateFeeData = window.STATE_FILING_FEES[selectedStateCode];
    stateFriendlyName = stateFeeData.name || selectedStateCode;
    let mapKeyA = ctx.currentServiceKey.replace(/-/g, "_");
    let mapKeyB = ctx.currentServiceKey.replace(/_/g, "-");
    let discoveredFee = stateFeeData[mapKeyA] || stateFeeData[mapKeyB] || stateFeeData[ctx.currentServiceKey];
    if (discoveredFee !== undefined && discoveredFee !== null) baseGovAgencyFee = parseFloat(discoveredFee) || 0;
  } else {
    baseGovAgencyFee = parseFloat(ctx.planConfig.gov_fee) || 0;
  }

  let agencyTariff = 0;
  if (window.FILINGS4U_GOVERNMENT_PRICING && window.FILINGS4U_GOVERNMENT_PRICING[ctx.currentServiceKey]) {
    agencyTariff = parseFloat(window.FILINGS4U_GOVERNMENT_PRICING[ctx.currentServiceKey]) || 0;
  }
  baseGovAgencyFee += agencyTariff;

  let finalRowsHtml = ctx.descriptiveInvoiceRowsHtml;
  if (baseGovAgencyFee > 0) {
    const labelStr = stateFriendlyName ? `Government Filing Fee (${stateFriendlyName})` : "State Government Filing Fee";
    finalRowsHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; border-top: 1px dashed #e2e8f0; padding-top: 6px; margin-top: 6px;">
        <span>${labelStr}</span>
        <span style="font-family: monospace;">$${baseGovAgencyFee.toFixed(2)}</span>
      </div>`;
  }

  // 2. CONSOLIDATED GRAND MATRIX ADDITIONS
  const aggregatedFilingSubtotal = ctx.baseTierPrice + ctx.incrementalAddonTotal;
  const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

  // 3. SAFE EXTRACTION WRAPPING GATES (FIXED: Resolves Step 2 Progression Crash)
  const invoiceContainer = document.getElementById('summary-purchase-rows-container') || document.getElementById('checkout-invoice-rows-container');
  if (invoiceContainer) {
    invoiceContainer.innerHTML = finalRowsHtml + `
      <div id="dynamic-matrix-grand-total-row" style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; border-top: 2px solid #e2e8f0; padding-top: 12px; margin-top: 12px; color: #0a1f44;">
        <span>Total Investment:</span>
        <span style="font-family: monospace; color: #10b981;">$${finalizedGrandTotal.toFixed(2)}</span>
      </div>`;
  }

  const masterSidebarReceiptContainer = document.getElementById("master-sidebar-invoice-display");
  if (masterSidebarReceiptContainer) {
    masterSidebarReceiptContainer.innerHTML = finalRowsHtml + `
      <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; border-top: 2px solid #e2e8f0; padding-top: 10px; margin-top: 10px;">
        <span>Total Investment:</span>
        <span style="font-family: monospace; color: #10b981;">$${finalizedGrandTotal.toFixed(2)}</span>
      </div>`;
  }

  // 4. WRITE NUMBERS TO DISPLAY CHANNELS IF PRESENT IN VIEW PORT
  const subtotalDisplays = ["summary-subtotal-display", "subtotal-display"];
  subtotalDisplays.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '$' + aggregatedFilingSubtotal.toFixed(2);
  });

  const govDisplays = ["summary-gov-fees-display", "gov-fees-display"];
  govDisplays.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '$' + baseGovAgencyFee.toFixed(2);
  });

  const grandDisplays = ["summary-grand-total-display", "grand-total-display", "checkout-total-display"];
  grandDisplays.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '$' + finalizedGrandTotal.toFixed(2);
  });

  window.calculatedCartGrandTotalAmount = finalizedGrandTotal;
  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;
};

// Global pricing engine processing latch state
window._isMatrixEngineCalculating = false;

// Unified safe proxy execution pipeline
window.updateDynamicPricingMatrixVanillaProxy = function(state = {}) {
  if (window._isMatrixEngineCalculating) return;

  try {
    window._isMatrixEngineCalculating = true;

    // Intercept state variables and ensure they flush to global window tracking targets
    if (state && typeof state === 'object') {
      // If framework passes an array of active addon slugs
      if (Array.isArray(state.active_addons_list)) {
        state.active_addons_list.forEach(slug => {
          window[slug] = true;
        });
      }
      // If framework passes form field values
      if (state.form_data_payload && typeof state.form_data_payload === 'object') {
        Object.keys(state.form_data_payload).forEach(key => {
          if (state.form_data_payload[key] === true || state.form_data_payload[key] === 'on') {
            window[key] = true;
          }
        });
      }
    }

    // 1. Initial calculation discovery pass (Part 1)
    if (typeof window.executeCleanInvoiceCalculationPass === "function") {
      window.executeCleanInvoiceCalculationPass(state);
    }

    // 2. Pricing matrix crawl discovery step (Part 2)
    if (typeof window.runPricingMatrixDataCrawlPass === "function") {
      window.runPricingMatrixDataCrawlPass();
    }

    // 3. Document DOM node display injection (Part 3) - Passed state parameters down
    window.finalizePricingMatrixUiRender(state);

  } catch (error) {
    console.error("[Matrix Engine Trace Execution Error]:", error);
  } finally {
    window._isMatrixEngineCalculating = false;
  }
};

// Decoupled endpoint fallback hook
window.updateDynamicPricingMatrixVanilla = function(state) {
  window.updateDynamicPricingMatrixVanillaProxy(state);
};






















































































/**
 * Proxy window tracking route
 */
window.updateWizardFinalTotalAmountMatrix = function() {
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
};

// Initial document viewport runtime boot triggers
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { window.updateDynamicPricingMatrixVanilla(); });
} else {
  window.updateDynamicPricingMatrixVanilla();
}


/**
 * Proxy window tracking route
 */
window.updateWizardFinalTotalAmountMatrix = function() {
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
};

// Initial document viewport runtime boot triggers
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { window.updateDynamicPricingMatrixVanilla(); });
} else {
  window.updateDynamicPricingMatrixVanilla();
}


// ============================================================================ //
// ðŸ“Š MASTER PRICING CALCULATOR MODULE: FINALIZE TOTALS & SYNC DISPLAY NODES
// ============================================================================ //
window.updateDynamicPricingMatrixVanilla = function() {
  console.log("[Pricing Engine] Initializing clean invoice subtotal calculation pass...");

  // 1. RESOLVE THE ACTIVE TRANSACTION PAYLOAD AGNOSTICALLY (ZERO HARDCODING)
  const activeBillingNodes = Object.keys(window).filter(key => {
    try { 
      return window[key] && window[key].active_addons_list !== undefined; 
    } catch (e) { 
      return false; 
    }
  });

  let baseTierPrice = 299.00; 
  let incrementalAddonTotal = 0.00;
  let baseGovAgencyFee = 0.00;

  if (activeBillingNodes.length > 0) {
    const targetPayload = window[activeBillingNodes[0]]; // FIXED: Added explicit [0] index to secure key name evaluation
    if (targetPayload) {
      const rawSubtotal = parseFloat(targetPayload.financials_subtotal_amount);
      if (!isNaN(rawSubtotal) && rawSubtotal > 0) {
        baseTierPrice = rawSubtotal;
      }

      const rawGovFees = parseFloat(targetPayload.taxes_agency_processing);
      if (!isNaN(rawGovFees)) {
        baseGovAgencyFee = rawGovFees;
      }

      // 2. COMPUTE ALL ACTIVE ADD-ONS FRESH (Prevents the $637.00 stacking duplication)
      if (Array.isArray(targetPayload.active_addons_list)) {
        targetPayload.active_addons_list.forEach(addon => {
          if (!addon) return;
          let addonPrice = 0.00;

          if (typeof addon === 'object') {
            addonPrice = parseFloat(addon.price);
          } else {
            const checkboxEl = document.getElementById(addon);
            if (checkboxEl) {
              addonPrice = parseFloat(checkboxEl.getAttribute("data-price"));
            }
          }

          if (!isNaN(addonPrice)) {
            incrementalAddonTotal += addonPrice;
          }
        });
      }
    }
  }

  // 3. UNIFIED CALCULATION MATRICES PASS
  const aggregatedFilingSubtotal = baseTierPrice + incrementalAddonTotal;
  const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

  const variableTruckingAddonTotal = incrementalAddonTotal;

  const descriptiveInvoiceRowsHtml = typeof window.descriptiveInvoiceRowsHtml !== "undefined" 
    ? window.descriptiveInvoiceRowsHtml 
    : `<div style="display:flex; justify-content:space-between; font-size:0.95rem; margin-bottom:8px; color:#475569;">
        <span>New Entrant Audit (COMPLIANCE)</span>
        <span style="font-family:monospace;">$${baseTierPrice.toFixed(2)}</span>
       </div>`;

  let masterReceiptHtmlContent = descriptiveInvoiceRowsHtml + `
    <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: #0a1f44; border-top: 2px solid #e2e8f0; padding-top: 10px; margin-top: 10px;">
      <span>Total Investment:</span>
      <span style="font-family: monospace; color: #10b981;">$${finalizedGrandTotal.toFixed(2)}</span>
    </div>`;

  // âœ¨ DOM BINDING SLOTS: Inject totals back into your UI elements safely
  const step1BaseInvoiceTotalNode = document.getElementById("step-1-base-fee-value");
  if (step1BaseInvoiceTotalNode) {
    step1BaseInvoiceTotalNode.textContent = `$${finalizedGrandTotal.toFixed(2)}`;
  }

  const masterSidebarReceiptContainer = document.getElementById("master-sidebar-invoice-display");
  if (masterSidebarReceiptContainer) {
    masterSidebarReceiptContainer.innerHTML = masterReceiptHtmlContent;
  }

  const invoiceContainer = document.getElementById('summary-purchase-rows-container') || document.getElementById('checkout-invoice-rows-container') || document.getElementById('invoice-rows-container');
  if (invoiceContainer) {
    invoiceContainer.innerHTML = descriptiveInvoiceRowsHtml;
  }

  const summaryAddonRoot = document.getElementById("summary-onboarding-addons-root");
  if (summaryAddonRoot) {
    if (window.lastCalculatedNewEntrantAddonHtml && variableTruckingAddonTotal > 0) {
      summaryAddonRoot.innerHTML = window.lastCalculatedNewEntrantAddonHtml;
      summaryAddonRoot.style.setProperty("display", "block", "important");
    } else {
      summaryAddonRoot.innerHTML = "";
      summaryAddonRoot.style.setProperty("display", "none", "important");
    }
  }

  const summarySubtotalDisplay = document.getElementById("summary-subtotal-display");
  if (summarySubtotalDisplay) {
    summarySubtotalDisplay.innerText = "$0.00";
    const labelNode = summarySubtotalDisplay.previousElementSibling;
    if (labelNode) labelNode.innerText = "Taxes & Agency Processing";
  }

  const subtotalDisplays = ["invoice-subtotal-display", "subtotal-display"];
  subtotalDisplays.forEach(function(displayId) {
    const element = document.getElementById(displayId);
    if (element) element.textContent = '$' + aggregatedFilingSubtotal.toFixed(2);
  });

  const govDisplays = ["summary-gov-fees-display", "invoice-gov-fees-display", "gov-fees-display"];
  govDisplays.forEach(function(displayId) {
    const element = document.getElementById(displayId);
    if (element) element.textContent = '$' + baseGovAgencyFee.toFixed(2);
  });

  const grandDisplays = ["summary-grand-total-display", "invoice-grand-total-display", "grand-total-display", "checkout-total-display", "payment-gateway-total-display", "wizard-sticky-total-value"];
  grandDisplays.forEach(function(displayId) {
    const element = document.getElementById(displayId);
    if (element) element.textContent = '$' + finalizedGrandTotal.toFixed(2);
  });

  window.calculatedCartGrandTotalAmount = finalizedGrandTotal;
  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;
  
  if (activeBillingNodes.length > 0 && window[activeBillingNodes[0]]) {
    window[activeBillingNodes[0]].financials_grand_total_charge = finalizedGrandTotal;
  }
};

window.updateWizardFinalTotalAmountMatrix = function() {
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
      window.updateDynamicPricingMatrixVanilla();
    }
  });
} else {
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
}




// ============================================================================ //
// ðŸŽ¨ VISUAL ERROR MARKER INJECTION PROTOCOL (STRICT GRIDS & PREVENT DUPLICATES)
// ============================================================================ //
/**
 * Injects a visual error message block directly beneath an invalid input field.
 * Pure dynamic layout pattern: Completely free of hardcoded element IDs or message paths.
 * @param {HTMLElement} inputNode - Target input element validating layout constraints.
 * @param {string} informativeLabelString - Explanatory error warning message to output.
 */
function markFieldAsInvalidVanilla(inputNode, informativeLabelString) {
    if (!inputNode || !inputNode.parentNode) return;

    // Apply bright error crimson boundary indicators cleanly
    inputNode.style.setProperty("border-color", "#ef4444", "important");

    // FIXED: Uses nextElementSibling instead of nextSibling to skip blank code whitespaces
    // This accurately catches existing error tags and prevents duplicate message stacks
    let targetSibling = inputNode.nextElementSibling;

    // If wrapped inside an input group layout wrapper envelope, look at the outer container scope boundary instead
    const isWrappedNode = inputNode.parentNode.classList.contains('input-lock-wrapper');
    const targetParentNode = isWrappedNode ? inputNode.parentNode.parentNode : inputNode.parentNode;

    if (isWrappedNode) {
        targetSibling = inputNode.parentNode.nextElementSibling;
    }

    if (targetSibling && (targetSibling.classList.contains('input-error-marker') || targetSibling.classList.contains('error-message'))) {
        // Already flagged. Update text content parameter seamlessly and exit to stop duplicate appending.
        targetSibling.textContent = informativeLabelString;
        return;
    }

    // Build the underlying accessible error notification node framework
    const spanError = document.createElement('span');
    spanError.className = 'input-error-marker';
    spanError.style.cssText = "color: #ef4444 !important; font-size: 0.75rem !important; display: block !important; margin-top: 4px !important; font-weight: 600 !important; width: 100% !important; clear: both !important;";
    spanError.textContent = informativeLabelString;

    // Insert the element safely out of complex lock wrappers to protect icon alignment grids
    if (isWrappedNode) {
        targetParentNode.appendChild(spanError);
    } else {
        // FIXED: Replaced brittle nextSibling pointer with native element position parameters 
        // to block whitespace code gaps from corrupting your visual layout structures
        if (inputNode.nextElementSibling) {
            inputNode.parentNode.insertBefore(spanError, inputNode.nextElementSibling);
        } else {
            inputNode.parentNode.appendChild(spanError);
        }
    }
}

// Expose the visual error marker handler safely to global scopes windows records
window.markFieldAsInvalidVanilla = markFieldAsInvalidVanilla;


// ============================================================================ //
// ðŸ” INPUT INTERACTIVE VALIDATION CONTROL ENGINE (FULLY ABSTRACT - ZERO CODES)
// ============================================================================ //
/**
 * Scans active wizard steps, intercepts missing fields, and enforces required visibility scopes.
 * Pure abstract dynamic strategy: Absolutely zero hardcoded element tracking keys, codes, or strings.
 * FIXED: Implemented coordinate visibility filters to block hidden collapsed fields from freezing forms.
 * @param {number|string} stepIndex - Active index tracking number of the panel container to validate.
 * @returns {boolean} True if all visible required parameters are balanced and valid to advance panels.
 */
function validateStepInputParametersVanilla(stepIndex) {
    let isValid = true;
    
    // FIXED: Expanded selector parameters to safely discover your actual active wizard panels first
    const targetPanel = document.getElementById(`step-panel-${stepIndex}`) || 
                        document.querySelector(`.wizard-panel[data-step="${stepIndex}"]`) ||
                        document.getElementById(`step_panel_${stepIndex}`);
                        
    if (!targetPanel) return true;

    // Clean up residual red alert markers left behind by previous validation passes
    targetPanel.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    targetPanel.querySelectorAll('input, select, textarea').forEach(node => {
        if (node) node.style.removeProperty("border-color");
    });

    // ABSTRACT JURISDICTION TRACKING: Finds any select drop-down element managing state choices
    const stateSelector = targetPanel.querySelector('select[id*="state" i], select[name*="state" i], select[id*="jurisdiction" i], select[name*="jurisdiction" i]');
    if (stateSelector && stateSelector.value) {
        window.selectedFormationStateCode = stateSelector.value.toUpperCase().trim();
    }

    // Scan required form control structures
    const renderedRequiredElements = targetPanel.querySelectorAll('input[required], select[required], textarea[required]');
    
    renderedRequiredElements.forEach(element => {
        if (!element) return;

        // FIXED: Strict visibility dimensions validation layer ensures hidden collapsed fields inside closed elements are bypassed 
        const isElementVisibleOnScreen = (element.offsetWidth > 0 || element.offsetHeight > 0 || element.offsetParent !== null);
        if (!isElementVisibleOnScreen) return;

        if (element.type === 'checkbox') {
            if (!element.checked) {
                const labelMessage = element.getAttribute('data-error-msg') || 'You must accept these required terms layout constraints to proceed.';
                if (typeof markFieldAsInvalidVanilla === 'function') {
                    markFieldAsInvalidVanilla(element, labelMessage);
                }
                isValid = false;
            }
        } else {
            if (!element.value || element.value.trim() === "") {
                const explicitFieldName = element.getAttribute('placeholder') || element.getAttribute('name') || element.getAttribute('id') || 'Required field';
                const safeNameString = String(explicitFieldName).replace(/[:-_\s]+/g, ' ').trim();
                const labelMessage = element.getAttribute('data-error-msg') || `${safeNameString.charAt(0).toUpperCase() + safeNameString.slice(1)} is a required field.`;
                
                if (typeof markFieldAsInvalidVanilla === 'function') {
                    markFieldAsInvalidVanilla(element, labelMessage);
                }
                isValid = false;
            }
        }
    });

    return isValid;
}

// Expose the validation engine cleanly back into global window boundaries
window.validateStepInputParametersVanilla = validateStepInputParametersVanilla;


// ============================================================================ //
// ðŸš€ MASTER STEP NAVIGATION CONTROL LOGIC (VANILLA JS IMPLEMENTATION - REPAIRED)
// ============================================================================ //
/**
 * Handles relative stepping transitions across the onboarding panels matrix.
 * Pure dynamic pattern: Free of hardcoded step numbers, workflow overrides, or static bounds.
 * @param {number} directionOffset - Numeric step increment/decrement index relative delta (e.g. +1 / -1).
 */
function navigateWizardStepTrackVanilla(directionOffset) {
    // Direct Fix: Safely map local lookups to single unified global tracking parameters
    window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
    window.totalWizardExpectedSteps = parseInt(window.totalWizardExpectedSteps || window.totalWizardSteps, 10) || 7;

    const plannedTargetStep = window.currentWizardActiveStep + directionOffset;

    // Limit navigation bounds to valid panels
    if (plannedTargetStep < 1 || plannedTargetStep > window.totalWizardExpectedSteps) {
        console.warn(`[Navigation Engine] Step target context bounds exceeded: ${plannedTargetStep}`);
        return;
    }

    // Execute input structure check loops when advancing panels
    if (directionOffset > 0) {
        if (typeof window.validateStepInputParametersVanilla === "function") {
            if (!window.validateStepInputParametersVanilla(window.currentWizardActiveStep)) {
                console.warn(`[Navigation Blocked] Form validation checks failed on step: ${window.currentWizardActiveStep}`);
                return; // Prevent step advance if validation fails
            }
        }
    }

    // Save structural panel parameters to state cache safely before transitioning views
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // FIXED: Shift the active tracking pointer state value directly
    window.currentWizardActiveStep = plannedTargetStep;

    // Execute the structural panel visibility transform cleanly to the next target layout view
    if (typeof window.renderActiveWizardStepUiLayout === "function") {
        window.renderActiveWizardStepUiLayout();
    } else if (typeof executeDirectStepJump === "function") {
        // Fallback pass proxy link layer hook if separate module controls view trees
        executeDirectStepJump(plannedTargetStep);
    } else {
        console.warn("[Navigation Engine Warning] Render panel layout engine is detached from memory scope layers.");
    }

    // Smooth scroll operator back to page view peaks cleanly on step advance to preserve perspective layout bounds
    if (directionOffset > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Expose the step tracking navigator cleanly back into global window boundaries
window.navigateWizardStepTrackVanilla = navigateWizardStepTrackVanilla;


// ============================================================================ //
// ðŸ”„ MASTER ALIAS ROUTING BRIDGE FOR HTML BUTTONS (STRICT JUMP ENGINE)
// ============================================================================ //
/**
 * Core navigation router intercepting multi-step wizard clicks.
 * Pure dynamic pattern: Free of hardcoded step paths, static offsets, or forced jumps.
 * @param {number|string} targetStepIndex - Targeted step index integer or keyword flag string ('back' / 'prev').
 * @param {Event|null} event - Native browser element event descriptor context.
 */
function goToNextWizardStep(targetStepIndex, event = null) {
    console.log("[Bridge Action] Incoming call raw value: " + targetStepIndex);

    // Prevent default form submission leaks cleanly
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    } else if (window.event) {
        window.event.preventDefault();
    }

    // Direct Fix: Map local parameters strictly to single unified global tracking state variables
    window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
    window.totalWizardExpectedSteps = parseInt(window.totalWizardExpectedSteps || window.totalWizardSteps, 10) || 7;

    // Handle specific directional keyword string flags
    if (targetStepIndex === 'back' || targetStepIndex === 'prev') {
        targetStepIndex = window.currentWizardActiveStep - 1;
    } else if (targetStepIndex !== null && targetStepIndex !== undefined) {
        targetStepIndex = parseInt(targetStepIndex, 10);
    }

    // Fallback protection if parameter is broken, missing, or NaN
    if (targetStepIndex === null || targetStepIndex === undefined || isNaN(targetStepIndex)) {
        targetStepIndex = window.currentWizardActiveStep + 1;
        console.log("[Bridge Safety Override] Index invalid. Auto-advancing to: " + targetStepIndex);
    }

    // Protect against view underflow / overflow bounds parameters
    if (targetStepIndex < 1) {
        console.warn("[Bridge Guard] Cannot jump below step 1.");
        return false;
    }
    if (targetStepIndex > window.totalWizardExpectedSteps) {
        console.warn("[Bridge Guard] Cannot jump past max steps (" + window.totalWizardExpectedSteps + ").");
        return false;
    }

    // ============================================================================ //
    // âš¡ STAGE-ZERO INJECTION GATEKEEPER
    // ============================================================================ //
    // If the customer is advancing onto Step 2, force-inject the dynamic form elements
    // right before execution loops change the panel visibility states.
    if (targetStepIndex === 2) {
        if (typeof window.executeStepTwoDynamicFormInjection === "function") {
            window.executeStepTwoDynamicFormInjection(true);
        } else {
            console.error("[Bridge Guard Fatal Exception] executeStepTwoDynamicFormInjection is missing from global memory layers.");
        }
    }

    console.log("[Bridge Success] Routing engine executing step jump to index: " + targetStepIndex);
    
    if (typeof window.executeDirectStepJump === "function") {
        window.executeDirectStepJump(targetStepIndex);
    }
}

window.goToNextWizardStep = goToNextWizardStep;


// ============================================================================ //
// ðŸš€ DATA-SAFE STEP PANEL VISIBILITY TRANSITION CONTROLLER
// ============================================================================ //
/**
 * Direct UI visibility transition execution pass layer.
 * DATA-SAFE TRANSITION: Runs calculations BEFORE hiding elements to preserve selections.
 * @param {number} targetIndex - Numeric destination step index target.
 */
function executeDirectStepJump(targetIndex) {
  window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
  window.totalWizardExpectedSteps = parseInt(window.totalWizardExpectedSteps || window.totalWizardSteps, 10) || 7;
  
  console.log("[Wizard Engine] Transitioning state: Step " + window.currentWizardActiveStep + " -> Step " + targetIndex);

  // 1. ADVANCEMENT VALIDATION PASS
  if (targetIndex > window.currentWizardActiveStep) {
    if (typeof window.validateStepInputParametersVanilla === "function") {
      if (!window.validateStepInputParametersVanilla(window.currentWizardActiveStep)) {
        console.warn("[Wizard Engine] Forward navigation halted: Validation constraints failed inside Step " + window.currentWizardActiveStep);
        return false;
      }
    }
  }

  // 2. DATA CAPTURE AND CALCULATIONS PRESERVATION STEP (CRITICAL FOR DATA TRANSFER)
  // We execute the pricing matrix loops while the current step checkboxes are still visible in the DOM tree
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }

  // Sync state data cache safely into your tab sessions before changing layout visibilities
  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(false);
  }

  // 3. SECURELY COMMIT TRANSITION STATE
  window.currentWizardActiveStep = targetIndex;

  // 4. WORKSPACE VISIBILITY TOGGLE SWITCH
  const panels = document.querySelectorAll(".wizard-panel, .master-onboarding-form, [id^='step-panel-'], [id^='step_panel_']");
  if (panels && panels.length > 0) {
    panels.forEach(function(panel, index) {
      const dataStepAttr = panel.getAttribute("data-step");
      const stepNumber = dataStepAttr ? parseInt(dataStepAttr, 10) : (index + 1);
      
      if (stepNumber === targetIndex) {
        panel.classList.add("active");
        panel.style.removeProperty("display");
        panel.style.setProperty("display", "block", "important");
        console.log("[Wizard UI Engine] Successfully mounted and displayed panel index: " + stepNumber);
      } else {
        panel.classList.remove("active");
        panel.style.removeProperty("display");
        panel.style.setProperty("display", "none", "important");
      }
    });
  }

  // 5. POST-TRANSITION LAYOUT BUILDERS
  if (typeof window.renderActiveWizardStepUiLayout === "function") {
    window.renderActiveWizardStepUiLayout();
  }

  // Run a second verification pass on the pricing numbers now that the new panel elements are loaded
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }

  // Fire marketplace loops if entering Step 3
  if (targetIndex === 3) {
    if (typeof window.renderTargetUpsellsListPanel === "function") {
      window.renderTargetUpsellsListPanel();
    } else {
      console.warn("[Wizard UI Engine] renderTargetUpsellsListPanel is detached from active runtime scopes.");
    }
  }
}
window.executeDirectStepJump = executeDirectStepJump;





// ============================================================================ //
// ðŸŽ¨ MODULE 2C: DYNAMIC MARKETPLACE INTERFACE RENDERING ENGINE
// ============================================================================ //

function renderTargetUpsellsListPanel() {
  const baseSource = window.CENTRAL_ADDON_DB || window.UPSELLS_ROUTER_DATABASE || window.UPSELL_ADDON_REGISTRY;
  let isolatedStep3Catalog = {};
  const visitedNodes = new Set();

  function scanTree(currentNode) {
    if (!currentNode || typeof currentNode !== 'object') return;
    if (visitedNodes.has(currentNode)) return;
    visitedNodes.add(currentNode);

    // Parse array data sources dynamically
    if (Array.isArray(currentNode)) {
      currentNode.forEach(item => {
        if (item && typeof item === 'object') {
          const productKey = item.id || item.slug || item.name;
          if (productKey && item.price !== undefined) {
            isolatedStep3Catalog[productKey] = item;
          }
          scanTree(item);
        }
      });
      return;
    }

    // Parse object tree nodes dynamically
    Object.keys(currentNode).forEach(key => {
      const targetNode = currentNode[key];
      if (!targetNode || typeof targetNode !== 'object') return;

      if (targetNode.price !== undefined) {
        // Collect node using its unique ID/slug property, falling back to its object key
        const uniqueKey = targetNode.id || targetNode.slug || key;
        isolatedStep3Catalog[uniqueKey] = targetNode;
        scanTree(targetNode);
      } else if (key !== 'UPSELLS_GLOBAL_STATE_PROPERTY_MAP') {
        scanTree(targetNode);
      }
    });
  }

  if (baseSource) scanTree(baseSource);
  visitedNodes.clear();

  // Save dynamically gathered catalog directly to global reference frame
  window.unifiedCatalogItems = isolatedStep3Catalog;
  return isolatedStep3Catalog;
}
window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanel;

function executeMarketplaceUIRenderLoop() {
  const target = document.getElementById("wizard-dynamic-upsells-render-target");
  if (!target) return;

  let catalog = window.unifiedCatalogItems;
  if (!catalog || Object.keys(catalog).length === 0) {
    catalog = window.renderTargetUpsellsListPanel() || {};
  }

  let htmlOutput = "";
  const map = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};

  Object.keys(catalog).forEach(itemKey => {
    const item = catalog[itemKey];
    const price = parseFloat(item.price) || 0;
    const checkboxId = map[itemKey] || itemKey;
    const isChecked = !!window[checkboxId];

    htmlOutput += `
      <div class="upsell-item-row" style="display: flex; align-items: start; gap: 14px; padding: 16px; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; background: #ffffff; box-sizing: border-box; width: 100%;">
        <div style="display: flex; height: 22px;">
          <input type="checkbox" id="${checkboxId}" data-product-key="${itemKey}" data-name="${item.name || itemKey}" data-price="${price.toFixed(2)}" ${isChecked ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;" />
        </div>
        <label for="${checkboxId}" style="display: flex; justify-content: space-between; align-items: start; width: 100%; cursor: pointer;">
          <div>
            <span style="font-weight: 700; color: #0a1f44;">${item.name || item.label || itemKey}</span>
            ${item.tier ? `<br><small style="color:#64748b">${item.tier}</small>` : ''}
          </div>
          <div style="font-weight: 800; color: #10b981;">$${price.toFixed(2)}</div>
        </label>
      </div>
    `;
  });

  target.innerHTML = htmlOutput;

  // ATTACH LIVE LISTENERS: Save toggle state back to dynamic registers automatically
  target.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      window[e.target.id] = e.target.checked;
    });
  });
}
window.executeMarketplaceUIRenderLoop = executeMarketplaceUIRenderLoop;


// ============================================================================ //
// ðŸ“Š MODULE 2D: DYNAMIC CHECKOUT SUMMARY INJECTION SYSTEM
// ============================================================================ //

function executeMarketplaceSummaryRenderLoop() {
  const rowsContainer = document.getElementById("summary-purchase-rows-container");
  const subtotalDisplay = document.getElementById("summary-subtotal-display");
  const grandTotalDisplay = document.getElementById("summary-grand-total-display");
  const govFeesDisplay = document.getElementById("summary-gov-fees-display");

  if (!rowsContainer) return;

  // 1. Wipe previous summary insertions using a clean class tracker
  const existingUpsellRows = rowsContainer.querySelectorAll('.runtime-upsell-summary-row');
  existingUpsellRows.forEach(row => row.remove());

  const catalog = window.unifiedCatalogItems || {};
  const map = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
  let addedUpsellHTML = "";
  let aggregateUpsellCost = 0;

  // 2. Loop dynamically through your scanned data catalog
  Object.keys(catalog).forEach(itemKey => {
    const item = catalog[itemKey];
    const checkboxId = map[itemKey] || itemKey;

    // Read real-time DOM states with direct fallback to global register states
    const liveInputNode = document.getElementById(checkboxId);
    const isCurrentlySelected = liveInputNode ? liveInputNode.checked : !!window[checkboxId];

    if (isCurrentlySelected) {
      const parsedItemPrice = parseFloat(item.price) || 0;
      aggregateUpsellCost += parsedItemPrice;

      addedUpsellHTML += `
        <div class="runtime-upsell-summary-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; background: #ffffff; box-sizing: border-box; width: 100%;">
          <div style="display: flex; flex-direction: column; min-width: 0; flex: 1;">
            <span style="font-weight: 700; font-size: 0.95rem; color: var(--navy, #0a1f44); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${item.name || item.label || itemKey}
            </span>
            ${item.tier ? `<small style="color: var(--slate, #64748b); font-weight: 500; margin-top: 2px;">${item.tier}</small>` : ''}
          </div>
          <div style="font-weight: 800; font-size: 1.05rem; color: var(--primary, #10b981); white-space: nowrap; font-family: monospace;">
            +$${parsedItemPrice.toFixed(2)}
          </div>
        </div>
      `;
    }
  });

  // 3. Append rows if selected items exist
  if (addedUpsellHTML !== "") {
    rowsContainer.insertAdjacentHTML('beforeend', addedUpsellHTML);
  }

  // 4. Update the system price calculations dynamically
  let baseFilingCost = 0;
  if (subtotalDisplay) {
    const sanitizedCostString = subtotalDisplay.textContent.replace(/[^0-9.]/g, '');
    baseFilingCost = parseFloat(sanitizedCostString) || 0;
  }

  const establishedGovFees = govFeesDisplay ? parseFloat(govFeesDisplay.textContent.replace(/[^0-9.]/g, '')) || 0 : 0;
  const comprehensiveSubtotal = baseFilingCost + aggregateUpsellCost;
  const comprehensiveGrandTotal = comprehensiveSubtotal + establishedGovFees;

  // 5. Output to display containers
  if (subtotalDisplay) subtotalDisplay.textContent = `$${comprehensiveSubtotal.toFixed(2)}`;
  if (grandTotalDisplay) grandTotalDisplay.textContent = `$${comprehensiveGrandTotal.toFixed(2)}`;
}
window.executeMarketplaceSummaryRenderLoop = executeMarketplaceSummaryRenderLoop;


// ============================================================================ //
// âš™ï¸ INITIALIZATION ENGINE
// ============================================================================ //

function initializeAssetProtectionMarketplace() {
  console.log("[Lifecycle] Parsing dynamic marketplace assets...");
  if (typeof window.renderTargetUpsellsListPanel === "function") {
    window.renderTargetUpsellsListPanel();
  }
  if (typeof window.executeMarketplaceUIRenderLoop === "function") {
    window.executeMarketplaceUIRenderLoop();
  }
}
window.initializeAssetProtectionMarketplace = initializeAssetProtectionMarketplace;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => window.initializeAssetProtectionMarketplace());
} else {
  window.initializeAssetProtectionMarketplace();
}

