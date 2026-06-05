// ============================================================================ //
// 🛡️ FILE 2: WIZARD-RUNTIME-PATCH.JS - CLOCK, USER GREETINGS & STEP ROUTING
// ============================================================================
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

        // 4. FAIL-SAFE ADVANCE NAVIGATION ROUTING CONTROL
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

        // Only select actual forward buttons, excluding anything meant for back navigation
        const advanceActionButtons = document.querySelectorAll('.wizard-next-btn, button[onclick*="Next"], button[onclick*="Event"]');
        
        advanceActionButtons.forEach(buttonNode => {
            buttonNode.removeAttribute("onclick");
            buttonNode.addEventListener("click", function(eventObj) {
                eventObj.preventDefault();
                const activeStep = window.currentWizardActiveStep || 1;
                const maxSteps = window.totalWizardExpectedSteps || 7;

                if (typeof validateStepInputParametersVanilla === "function") {
                    if (!validateStepInputParametersVanilla(activeStep)) return;
                }

                if (activeStep === 6) {
                    if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
                        executeOnboardingTransactionPayloadSubmitVanilla();
                    }
                    return;
                }

                if (activeStep >= maxSteps) return;

                window.currentWizardActiveStep += 1;
                const nextTargetStep = window.currentWizardActiveStep;

                wizardPanels.forEach((panel, index) => {
                    const currentPanelIndex = index + 1;
                    panel.style.setProperty("display", (currentPanelIndex === nextTargetStep) ? "block" : "none", "important");

                    if (currentPanelIndex === nextTargetStep && nextTargetStep === 5 && typeof populatePurchaseSummaryReviewMatrix === "function") {
                        populatePurchaseSummaryReviewMatrix();
                    }

                    if (currentPanelIndex === nextTargetStep && nextTargetStep === 6 && typeof initializeFlatStripeCheckoutElement === "function") {
                        initializeFlatStripeCheckoutElement();
                    }
                });

                if (typeof renderActiveWizardStepUiLayout === "function") {
                    renderActiveWizardStepUiLayout();
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }
    setTimeout(bootProductionPatchEngine, 40);
})();

// ============================================================================ //
// 🛠️ REPAIRED MANUAL STEP JUMPER (PREVENTS REVERSE JUMPING FAILURE)
// ============================================================================
function goToNextWizardStep(targetIndex) {
    if (window.event) {
        window.event.preventDefault();
        window.event.stopPropagation();
    }

    const panels = document.querySelectorAll(".wizard-panel");
    if (panels.length === 0 || targetIndex === undefined || targetIndex === null) return;

    // Evaluate dynamic equations passed as string arguments securely
    if (typeof targetIndex === "string") {
        if (targetIndex.includes("currentWizardActiveStep")) {
            targetIndex = targetIndex.includes("-") ? window.currentWizardActiveStep - 1 : window.currentWizardActiveStep + 1;
        } else if (targetIndex === "back" || targetIndex === "prev") {
            targetIndex = window.currentWizardActiveStep - 1;
        } else {
            targetIndex = parseInt(targetIndex, 10);
        }
    }

    // Safety checks for boundaries
    if (isNaN(targetIndex) || targetIndex < 1) targetIndex = 1;
    
    window.currentWizardActiveStep = targetIndex;
    const activeStep = window.currentWizardActiveStep;

    panels.forEach((panel, index) => {
        const currentPanelIndex = index + 1;
        panel.style.setProperty("display", (currentPanelIndex === activeStep) ? "block" : "none", "important");

        if (currentPanelIndex === activeStep && activeStep === 5 && typeof populatePurchaseSummaryReviewMatrix === "function") {
            populatePurchaseSummaryReviewMatrix();
        }
        if (currentPanelIndex === activeStep && activeStep === 6 && typeof initializeFlatStripeCheckoutElement === "function") {
            initializeFlatStripeCheckoutElement();
        }
    });

    if (typeof renderActiveWizardStepUiLayout === "function") {
        renderActiveWizardStepUiLayout();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
