// ============================================================================ //
// 🛡️ FILE 2: WIZARD-RUNTIME-PATCH.JS - CLOCK, USER GREETINGS & STEP ROUTING    //
// ============================================================================ //
(function() {
  "use strict";

  function bootProductionPatchEngine() {
    const clockSpan = document.getElementById("wizard-live-clock-timestamp");
    if (!clockSpan) return;

    // 1. CHRONOMETER TICKER TIMING ENGINE
    function renderLiveClockTicker() {
      const timeOutput = document.getElementById("wizard-live-clock-timestamp");
      if (!timeOutput) return;
      const timeNow = new Date();
      let hours = timeNow.getHours();
      const minutes = String(timeNow.getMinutes()).padStart(2, '0');
      const seconds = String(timeNow.getSeconds()).padStart(2, '0');
      const meridiem = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      timeOutput.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
    }
    renderLiveClockTicker();
    setInterval(renderLiveClockTicker, 1000);

    // 2. PRODUCTION SCHEMA GREETING CONFIGURATION
    function refreshWelcomeBadge() {
      let verifiedUserFirstName = "";
      const validatedNameSchemaKeys = ["applicant_first_name", "applicant_name", "contact_person_name", "user_legal_name", "oa_sole_member_name"];
      try {
        for (let i = 0; i < validatedNameSchemaKeys.length; i++) {
          const cachedValue = localStorage.getItem(validatedNameSchemaKeys[i]);
          if (cachedValue && cachedValue.trim().length > 1) {
            verifiedUserFirstName = cachedValue.trim().replace(/[,.]/g, "").split(" ")[0];
            break;
          }
        }
      } catch (e) { return; }

      if (verifiedUserFirstName) {
        let welcomeAlert = document.getElementById("wizard-user-welcome-back");
        if (!welcomeAlert) {
          welcomeAlert = document.createElement("span");
          welcomeAlert.id = "wizard-user-welcome-back";
          welcomeAlert.style.cssText = "color: #0284c7; font-weight: 800; margin-right: 6px;";
          clockSpan.parentNode.insertBefore(welcomeAlert, clockSpan);
        }
        welcomeAlert.textContent = `Welcome Back, ${verifiedUserFirstName}! | `;
      }
    }
    refreshWelcomeBadge();

    // 3. APPLICANT KEYSTROKE LIVE CAPTURE
    document.body.addEventListener("input", function(event) {
      const fieldNode = event.target;
      if (!fieldNode || (!fieldNode.id && !fieldNode.name)) return;
      const id = fieldNode.id || fieldNode.name;
      if (id === "applicant_name" || id === "oa_sole_member_name" || id === "applicant_first_name") {
        localStorage.setItem(id, fieldNode.value);
        refreshWelcomeBadge();
      }
    });

    // 4. INTEGRATED ADVANCE NAVIGATION CONTROL BAR
    const wizardPanels = document.querySelectorAll(".wizard-panel");
    if (wizardPanels.length === 0) return;

    if (typeof window.currentWizardActiveStep === "undefined") {
      window.currentWizardActiveStep = 1;
      wizardPanels.forEach((panel, index) => {
        if (panel.classList.contains("active") || window.getComputedStyle(panel).display !== "none") {
          window.currentWizardActiveStep = index + 1;
        }
      });
    }

    const advanceActionButtons = document.querySelectorAll('.wizard-next-btn, .btn-wizard-main');
    advanceActionButtons.forEach(buttonNode => {
      if (buttonNode.getAttribute("data-nav-bound") === "true") return;
      buttonNode.addEventListener("click", function(eventObj) {
        eventObj.preventDefault();
        eventObj.stopPropagation();
        const activeStep = window.currentWizardActiveStep || 1;
        const maxSteps = window.totalWizardExpectedSteps || 7;
        if (activeStep >= maxSteps) return;
        
        console.log(`[Integrated Control] Advancing step funnel from ${activeStep} to ${activeStep + 1}`);
        if (typeof window.goToNextWizardStep === "function") {
          window.goToNextWizardStep(activeStep + 1, eventObj);
        }
      });
      buttonNode.setAttribute("data-nav-bound", "true");
    });
  }
  setTimeout(bootProductionPatchEngine, 40);
})();

// ============================================================================ //
// 🛠️ REPAIRED MANUAL STEP JUMPER (STRICT EVENT SUBMIT ISOLATION FIX)          //
// ============================================================================ //
function goToNextWizardStep(targetIndex, event = null) {
  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
    event.stopPropagation();
  }
  if (window.event) {
    window.event.preventDefault();
    window.event.stopPropagation();
  }

  const panels = document.querySelectorAll(".wizard-panel");
  if (panels.length === 0 || targetIndex === undefined || targetIndex === null) return false;

  if (typeof targetIndex === "string") {
    if (targetIndex.includes("currentWizardActiveStep")) {
      targetIndex = targetIndex.includes("-") ? window.currentWizardActiveStep - 1 : window.currentWizardActiveStep + 1;
    } else if (targetIndex === "back" || targetIndex === "prev") {
      targetIndex = window.currentWizardActiveStep - 1;
    } else {
      targetIndex = parseInt(targetIndex, 10);
    }
  }

  let numericTargetIndex = parseInt(targetIndex, 10);
  if (isNaN(numericTargetIndex) || numericTargetIndex < 1) numericTargetIndex = 1;

  // 🛡️ Safe Input Validation Guard: Check validation only if moving FORWARD
  if (numericTargetIndex > window.currentWizardActiveStep) {
    if (typeof window.validateStepInputParametersVanilla === "function") {
      const isValid = window.validateStepInputParametersVanilla(window.currentWizardActiveStep);
      if (!isValid) {
        console.warn(`[Navigation Blocked] Requirements check failed on step: ${window.currentWizardActiveStep}`);
        const form = document.querySelector('#master-onboarding-form'); // FIXED: Matches your form ID exactly
        if (form && typeof form.reportValidity === 'function') {
          form.reportValidity();
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        return false;
      }
    }
  }

  // ⚡ STAGE-ZERO INJECTION INTERCEPTOR (FIXED: Runs only when moving forward to Step 2)
  if (numericTargetIndex === 2 && window.currentWizardActiveStep < 2) {
    if (typeof window.executeStepTwoDynamicFormInjection === "function") {
      try {
        window.executeStepTwoDynamicFormInjection(true);
      } catch (injectionError) {
        console.error("[Router Runtime Exception] Injection layer errored out:", injectionError);
      }
    }
  }

  const maximumWizardSteps = parseInt(window.totalWizardExpectedSteps, 10) || 7;
  if (numericTargetIndex > maximumWizardSteps) return false;

  if (numericTargetIndex === maximumWizardSteps && window.currentWizardActiveStep === (maximumWizardSteps - 1)) {
    if (typeof window.executeOnboardingTransactionPayloadSubmitVanilla === "function") {
      window.executeOnboardingTransactionPayloadSubmitVanilla(numericTargetIndex);
      return false;
    }
  }

  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(false);
  }

  window.currentWizardActiveStep = numericTargetIndex;

  // 🔄 Structural Panel Visibility Override Engine
  let isTargetPanelDisplayed = false;
  for (let i = 1; i <= maximumWizardSteps; i++) {
    const currentPanelElement = document.getElementById(`step-panel-${i}`);
    if (currentPanelElement) {
      if (i === numericTargetIndex) {
        currentPanelElement.classList.add("active");
        currentPanelElement.style.removeProperty("display");
        currentPanelElement.style.setProperty("display", "block", "important");
        isTargetPanelDisplayed = true;

        if (numericTargetIndex === 5 && typeof populatePurchaseSummaryReviewMatrix === "function") {
          populatePurchaseSummaryReviewMatrix();
        }
        if (numericTargetIndex === 6 && typeof initializeFlatStripeCheckoutElement === "function") {
          initializeFlatStripeCheckoutElement();
        }
      } else {
        currentPanelElement.classList.remove("active");
        currentPanelElement.style.removeProperty("display");
        currentPanelElement.style.setProperty("display", "none", "important");
      }
    }
  }

  if (!isTargetPanelDisplayed) {
    console.error(`[Navigation Error] Could not find layout panel container: #step-panel-${numericTargetIndex}`);
    return false;
  }

  if (typeof window.updateApplicationMapTimelineBubbles === "function") {
    window.updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
  if (typeof renderActiveWizardStepUiLayout === "function") {
    renderActiveWizardStepUiLayout();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

window.goToNextWizardStep = goToNextWizardStep;
