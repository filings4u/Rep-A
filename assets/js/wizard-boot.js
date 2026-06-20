// ============================================================================ //
// 🔌 UNIFIED SYSTEM LIFE-CYCLE HOOKS (SECURED DISPATCH WITH ANTI-FLICKER) (A) //
// ============================================================================ //
window.isWizardEngineBootedVanilla = window.isWizardEngineBootedVanilla || false;
window.wizardLifecycleRetryAttempts = window.wizardLifecycleRetryAttempts || 0;

/**
 * Main application boot orchestration layer.
 * Zero Hardcoding Fix: Enforces rigorous ID containment checks to lock Step 3 views away.
 */
function initSevenStepWizardSystem(activeSlug) {
    // 🛡️ ANTI-RECURSION LOCK
    if (window.isWizardEngineBootedVanilla) {
        console.log("[Lifecycle Sync] System already fully active. Blocking duplicate boot initialization loop.");
        return;
    }

    const isPricingDatabaseReady = typeof window.CENTRAL_SERVICE_PLAN_DB !== "undefined" || typeof window.GLOBAL_COMPANY_PRICING !== "undefined";
    const isBootEngineReady = typeof window.runUnifiedWizardBootEngine === "function";

    if (!isPricingDatabaseReady || !isBootEngineReady) {
        if (window.wizardLifecycleRetryAttempts < 50) {
            window.wizardLifecycleRetryAttempts++;
            console.warn(`[Anti-Flicker Guard] Data assets loading over network. Delaying execution (Track: ${window.wizardLifecycleRetryAttempts}/50)...`);
            
            // CRITICAL VISIBILITY CONTAINMENT FIX: Query explicitly using the structural pattern matching your HTML IDs
            const structuralPanelsArray = document.querySelectorAll('[id^="step-panel-"]');
            structuralPanelsArray.forEach(function(panelElement) {
                // Force-hide all future step containers immediately on frame zero to stop Step 3 leaking
                panelElement.style.setProperty("display", "none", "important");
            });

            setTimeout(function() {
                initSevenStepWizardSystem(activeSlug);
            }, 100);
            return;
        }
        console.error("[Anti-Flicker Core Failure] System database connection timed out over network. Boot aborted.");
        return;
    }

    // Assets confirmed ready! Lock the execution thread permanently to eliminate loop leaks
    window.isWizardEngineBootedVanilla = true;
    window.wizardLifecycleRetryAttempts = 0;
    console.log("[Lifecycle Sync] Database assets verified. Activating onboarding wizard pipeline.");

    // Execute parameter parsing engines natively
    if (typeof initializeUrlParameterParserEngineVanilla === "function") {
        initializeUrlParameterParserEngineVanilla();
    }

    // Fire up layout builders and calculation matrices synchronously
    if (typeof window.runUnifiedWizardBootEngine === "function") {
        window.runUnifiedWizardBootEngine();
    }
}

/**
 * Isolated, secure boot wrapper proxy handler.
 */
function triggerLifecycleSecureBoot() {
    if (!window.isWizardEngineBootedVanilla) {
        initSevenStepWizardSystem();
    }
}

// Global Event Routing Hooks: Ensure execution triggers safely on initial page mount
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", triggerLifecycleSecureBoot);
} else {
    triggerLifecycleSecureBoot();
}

// Expose APIs cleanly to global window boundaries to protect elements anchors
window.initSevenStepWizardSystem = initSevenStepWizardSystem;
