// ============================================================================ //
// 📁 ASSETS/JS/INTERACTION-CONTROLLER.JS                                       //
// ============================================================================ //
(function() { 
"use strict";

// Inject the validation animation rules instantly into the head to ensure inputs shake on error states
// ============================================================================
// 🎨 HARDWARE-ACCELERATED SHAKE STYLE INJECTOR (PATCH FOR interaction-controller.js)
// ============================================================================
(function injectValidationShakeStyles() {
    if (document.getElementById("f4u-validation-shake-keyframes")) return;
    const styleSheetNode = document.createElement("style");
    styleSheetNode.id = "f4u-validation-shake-keyframes";
    styleSheetNode.textContent = `
        @keyframes f4uFieldValidationErrorShakePass {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-6px); }
            40%, 80% { transform: translateX(6px); }
        }
        .field-error-shake {
            animation: f4uFieldValidationErrorShakePass 0.35s ease-in-out !important;
            border: 1px solid #ef4444 !important;
            background-color: #fef2f2 !important;
        }
    `;
    document.head.appendChild(styleSheetNode);
})();


// ============================================================================
// 🛡️ UNIFIED SHAKE DISPATCHER ENGINE (PATCH FOR interaction-controller.js)
// ============================================================================
function validateBaseProfileMatrix() { 
    let textFieldsValid = true; 
    const inputs = ["portal_user_first_name", "portal_user_last_name", "portal_user_email_input", "portal_user_phone"]; 
    const stripeBox = document.getElementById("stripe-payment-element-mount-point");

    // Reset layout animation classes across all input channels cleanly
    if (stripeBox) stripeBox.classList.remove("field-error-shake");
    inputs.forEach(id => document.getElementById(id)?.classList.remove("field-error-shake"));
    void document.body.offsetWidth; // Clear browser engine layout queue to reset animation states

    inputs.forEach(id => {
        const field = document.getElementById(id); 
        if (field && (!field.value.trim() || (field.required && !field.checkValidity()))) { 
            field.classList.add("field-error-shake"); 
            textFieldsValid = false; 
        } 
    }); 

    // FORCE STRIPE CONTAINER TO SHAKE IF ANY CONTACT FIELDS ARE INCOMPLETE
    if (!textFieldsValid && stripeBox) {
        stripeBox.classList.add("field-error-shake");
    }
    return textFieldsValid; 
} 

function attachSubmitButtonController() { 
    const cleanBtn = document.getElementById("wizardSubmitBtnElement"); 
    if (!cleanBtn) { 
        console.warn("[Stripe Controller] '#wizardSubmitBtnElement' not found in DOM yet."); 
        return; 
    } 
    
    if (window.f4u_active_submit_handler) { 
        cleanBtn.removeEventListener("click", window.f4u_active_submit_handler); 
    } 
    
    window.f4u_active_submit_handler = async (clickEvent) => { 
        clickEvent.preventDefault(); 
        const errorBanner = document.getElementById("step6-error-banner-target"); 
        if (errorBanner) errorBanner.style.display = "none"; 
        
// ============================================================================
// 🛡️ FRONTEND SHAKE & RETRY VALVE (PATCH FOR interaction-controller.js)
// ============================================================================
if (!validateBaseProfileMatrix()) { 
    console.warn("[Submit Validation] Aborting pipeline submission. Fields missing."); 
    if (errorBanner) { 
        errorBanner.innerText = "Please complete all required fields before processing."; 
        errorBanner.style.display = "block"; 
    } 
    // INSTANT UNFREEZE: Restores button state if validation catches empty inputs
    cleanBtn.disabled = false;
    cleanBtn.style.opacity = "1";
    cleanBtn.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`;
    return; 
}

        
        cleanBtn.disabled = true; 
        cleanBtn.style.opacity = "0.6"; 
        cleanBtn.innerHTML = `Processing Transaction <i class="fa-solid fa-spinner fa-spin" style="margin-left: 6px;"></i>`; 
        
        try { 
            const currentGrandTotal = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total") || 0); 
            
            if (typeof window.executeOnboardingTransactionPayloadSubmitVanilla === 'function') { 
                console.log("[Stripe Pipeline] Running vanilla payload submit..."); 
                await window.executeOnboardingTransactionPayloadSubmitVanilla(clickEvent); 
            } else if (typeof window.executeSecurePaymentConfirmationPipeline === "function") { 
                console.log("[Stripe Pipeline] Running secure confirmation pipeline..."); 
                await window.executeSecurePaymentConfirmationPipeline(currentGrandTotal, cleanBtn); 
            } else { 
                throw new Error("Stripe transaction pipelines are uninitialized. Check if your main Stripe JS file loaded correctly."); 
            } 
        } catch (pipelineException) { 
            console.error("[Stripe Runtime Pipeline Error]", pipelineException); 
            if (errorBanner) { 
                errorBanner.innerText = pipelineException.message || "An unexpected processing error occurred."; 
                errorBanner.style.display = "block"; 
            } 
            cleanBtn.disabled = false; 
            cleanBtn.style.opacity = "1"; 
            cleanBtn.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`; 
        } 
    }; 
    
    cleanBtn.addEventListener("click", window.f4u_active_submit_handler); 
    console.log("✅ [Stripe Controller] Secure Payment button event listener successfully attached."); 
} 

function bootloaderRuntimeGate() { 
    const currentStep = (typeof window.currentWizardActiveStep === "number") ? window.currentWizardActiveStep : 0; 
    if (currentStep !== 6) return;

    setTimeout(() => { 
        if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
            window.initializeFlatStripeCheckoutElement(); 
            setTimeout(attachSubmitButtonController, 60); 
        } 
    }, 100); 
} 

window.validateBaseProfileMatrix = validateBaseProfileMatrix;
window.attachSubmitButtonController = attachSubmitButtonController; 
window.triggerStep6StripeBootloader = bootloaderRuntimeGate; 

if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", bootloaderRuntimeGate); 
} else { 
    bootloaderRuntimeGate(); 
} 
})();
