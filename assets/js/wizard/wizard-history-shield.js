// ============================================================================
// FILE: wizard-history-shield.js - FULL MASTER CORE (FIXED)
// MODULE: BANK-GRADE POPSTATE NAVIGATION INTERCEPT SHIELD
// ============================================================================
;(function() {
  "use strict";

  // Prevent multiple redundant installations of the shield module
  if (window.isGlobalWizardHistoryShieldActive) {
    console.log("[History Shield] Core module already active in global scope.");
    return;
  }
  window.isGlobalWizardHistoryShieldActive = true;

  function setupSecureHistoryAnchors() {
    console.log("[History Core] Hardening application timeline navigation paths against browser hardware buttons.");

    // Push state anchors with explicit control definitions to prevent gate engine recursion conflicts
    if (!window.location.hash.includes("panel-lock")) {
      window.history.pushState({ f4uShieldLock: true }, "", window.location.href);
    }

    // Direct popstate event block capture
    window.addEventListener("popstate", function(event) {
      // Re-apply the anchor token instantly to lock the browser historical stack
      window.history.pushState({ f4uShieldLock: true }, "", window.location.href);

      const activeStepIndex = typeof window.currentWizardActiveStep !== "undefined" ? parseInt(window.currentWizardActiveStep, 10) : 0;
      console.warn("[History Shield Intercept] Hardware back or forward navigation suppressed on Step " + activeStepIndex);

      // 🚫 STEP 6 PAYMENTS PROTECTION: Disable back operations to isolate Stripe elements
      if (activeStepIndex === 6) {
        const step6Panel = document.getElementById("step-panel-6");
        if (step6Panel) {
          step6Panel.classList.add("active");
          step6Panel.style.setProperty("display", "block", "important");
        }
        return false;
      }

      // 🚫 STEP 8 SUCCESS PANEL LOCK: Lock the workspace view permanently once checkout completes
      if (activeStepIndex === 8) {
        const step8Panel = document.getElementById("step-panel-8") || document.getElementById("step-8-injection-placeholder");
        if (step8Panel) {
          step8Panel.classList.add("active");
          step8Panel.style.setProperty("display", "block", "important");
        }
        if (typeof window.computeInvoiceHydrationLoop === "function") {
          window.computeInvoiceHydrationLoop();
        }
        return false;
      }

      // 🔄 STANDARD VIEWPORT RE-ALIGNMENT: Holds the layout steady for all other screens
      if (activeStepIndex >= 0 && activeStepIndex <= 7) {
        for (let i = 0; i <= 8; i++) {
          const panelNode = document.getElementById("step-panel-" + i) || document.getElementById("step-" + i + "-injection-placeholder");
          if (panelNode) {
            if (i === activeStepIndex) {
              panelNode.classList.add("active");
              panelNode.style.setProperty("display", "block", "important");
              panelNode.style.setProperty("opacity", "1", "important");
              panelNode.style.setProperty("visibility", "visible", "important");
            } else {
              panelNode.classList.remove("active");
              panelNode.style.setProperty("display", "none", "important");
            }
          }
        }
        if (typeof window.updateApplicationMapTimelineBubbles === "function") {
          window.updateApplicationMapTimelineBubbles(activeStepIndex);
        }
      }
    });
  }

  // Defer initialization to run immediately after the core DOM compilation passes settle to clear long scrolls
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupSecureHistoryAnchors);
  } else {
    // Brief macro delay ensures gate evaluators process Step 0 first without history collision gaps
    setTimeout(setupSecureHistoryAnchors, 100);
  }
})();
