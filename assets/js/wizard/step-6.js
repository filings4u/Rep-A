// ============================================================================ // 
// UI_CORE_INJECTOR.JS - PART A: CORE ARCHITECTURE & SKELETON RENDERER (RESOLVED) // 
// ============================================================================ // 
(function() { 
"use strict"; 

const STRIPE_KEY = 'pk_test_51TTy4i0dNjSlvyScX676lZwB34Lby8nEuv0sRorwo6kGYKkTJYiTyPQA6PVjzwUSjB9Kz90LdHtCh2E1BTMMEkTX00HCLPKUkf'; 

window.stripeInstance = window.stripeInstance || null; 
window.stripeElementsContainer = window.stripeElementsContainer || null; 
window.stripePaymentElementInstance = window.stripePaymentElementInstance || null; 

let capturedInternalClientSecret = null;

Object.defineProperty(window, 'stripeClientSecret', {
    get() {
        return capturedInternalClientSecret;
    },
    set(newSecretToken) {
        if (!newSecretToken || typeof newSecretToken !== 'string' || !newSecretToken.includes('_secret_')) {
            return;
        }
        capturedInternalClientSecret = newSecretToken;
        console.log("✅ [Stripe Core InterCEPT] Async authorization token arrived. Forcing instant iframe paint...");
        
        if (typeof window.initializeFlatStripeCheckoutElement === "function") {
            window.initializeFlatStripeCheckoutElement();
        }
    },
    configurable: true,
    enumerable: true
});

async function initializeFlatStripeCheckoutElement() { 
    console.log("[Stripe Core] Rendering UI layout skeleton..."); 
    const baseContainer = document.getElementById("step-6-injection-placeholder"); 
    
    if (!baseContainer) { 
        console.error("[Stripe Core] Execution halted. Target placeholder not found."); 
        return; 
    } 
    
    if (typeof Stripe === "undefined") { 
        baseContainer.innerHTML = "<p style='color: red; font-weight: 600;'>Payment system offline. Please refresh.</p>"; 
        return; 
    } 
    
    if (!window.stripeInstance) { 
        window.stripeInstance = Stripe(STRIPE_KEY); 
    } 
    
    const total = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total") || 0); 
    const compName = window.currentOrderCorePayload?.company_name || localStorage.getItem("wizard_field_company_name") || localStorage.getItem("wizard_company_name") || localStorage.getItem("f4u_company_name") || ""; 
    const servKey = window.routeActiveServiceKey || window.currentOrderCorePayload?.service_key || localStorage.getItem("wizard_service_key") || ""; 
    const servTitle = window.currentOrderCorePayload?.service_title || localStorage.getItem("wizard_field_selected_package_offering") || "Operating Agreement Drafting"; 
    const planTier = window.routeActivePlanKey || window.currentOrderCorePayload?.plan_tier || localStorage.getItem("wizard_plan_tier_key") || "starter"; 
    const tracking = localStorage.getItem("f4u_active_tracking_token") || "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase(); 
    localStorage.setItem("f4u_active_tracking_token", tracking); 
    
    let innerFormMounted = document.getElementById("stripe-payment-element-mount-point"); 
    
    if (isNaN(total) || total <= 0) { 
        if (!innerFormMounted) { 
            baseContainer.innerHTML = ` 
                <div id="stripe-calculation-fallback-spinner" style="padding: 30px; text-align: center; color: #475569; font-weight: 500;"> 
                    <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px;"></i> Calculating final statement values... 
                </div> 
            `; 
        } 
        setTimeout(initializeFlatStripeCheckoutElement, 300); 
        return; 
    } 
    
    const dynamicSpinner = document.getElementById("stripe-calculation-fallback-spinner"); 
    if (dynamicSpinner) { 
        dynamicSpinner.remove(); 
    } 

    if (!window.stripeClientSecret) {
        console.warn("⚠️ [Stripe Core Guard] Standby: Awaiting string secret key token from live server gateway...");
        if (!innerFormMounted) {
            if (typeof window.assembleCleanUILayoutTree === "function") {
                window.assembleCleanUILayoutTree(baseContainer, total, compName, servTitle, planTier, tracking); 
            }
            const targetPlaceholderNode = document.getElementById("stripe-payment-element-mount-point");
            if (targetPlaceholderNode) {
                targetPlaceholderNode.innerHTML = `
                    <div style="padding: 24px; text-align: center; color: #64748b; font-weight: 500; font-size: 0.88rem; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 6px;">
                        <i class="fa-solid fa-lock-keyhole fa-spin" style="margin-right: 8px; color: #0a1f44;"></i> Loading secure payment configurations...
                    </div>
                `;
            }
        }
        return; 
    }
    
    if (innerFormMounted && window.stripePaymentElementInstance) { 
        const liveTotalDisplay = document.getElementById("payment-gateway-total-display"); 
        if (liveTotalDisplay) { 
            liveTotalDisplay.textContent = `$${total.toFixed(2)}`; 
        } 
        return; 
    } 
    
    window.currentOrderCorePayload = { 
        company_name: compName, 
        service_key: servKey, 
        service_title: servTitle, 
        plan_tier: planTier, 
        total_fee: total, 
        status: "payment_pending", 
        tax_id_status: "pending", 
        poa_signed_state: false, 
        poa_signature_verification_string: "pending" 
    }; 
    
    if (typeof window.assembleCleanUILayoutTree === "function") {
        window.assembleCleanUILayoutTree(baseContainer, total, compName, servTitle, planTier, tracking); 
    }

    setTimeout(async () => { 
        const mountPoint = document.getElementById("stripe-payment-element-mount-point"); 
        if (!mountPoint) { 
            console.error("[Stripe Core] Mount point missing from DOM after UI assembly."); 
            return; 
        } 
        
        try { 
            if (!window.stripeElementsContainer && window.stripeClientSecret) { 
                window.stripeElementsContainer = window.stripeInstance.elements({
                    clientSecret: window.stripeClientSecret,
                    appearance: {
                        theme: 'flat',
                        variables: {
                            colorPrimary: '#0a1f44',
                            colorBackground: '#ffffff',
                            colorText: '#0a1f44',
                            colorTextPlaceholder: '#94a3b8',
                            borderRadius: '6px',
                            spacingGridRow: '16px'
                        },
                        rules: {
                            '.Input': { padding: '14px 16px', fontSize: '15px', border: '1px solid #e2e8f0', boxShadow: 'none' },
                            '.Input:focus': { borderColor: '#10b981', boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)' },
                            '.Input--invalid': { borderColor: '#ef4444', boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.15)' },
                            '.Label': { fontWeight: '700', fontSize: '13px', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }
                        }
                    }
                }); 
            } 
            
            if (window.stripeElementsContainer && !window.stripePaymentElementInstance) { 
                window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', {
                    layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: true }
                }); 
                
                window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point'); 
                console.log("✅ [Stripe Core] Payment Element successfully mounted to DOM target canvas."); 
                
                // ============================================================================
                // 🚀 THE FINAL HARDENED LISTENER INTERLOCK FIX
                // ============================================================================
                // Delays button handler binding by a brief window pass to guarantee that 
                // the master orchestrator's [Viewport Engine] finishes modifying classes.
                setTimeout(() => {
                    if (typeof window.attachSubmitButtonController === "function") {
                        window.attachSubmitButtonController();
                    } else {
                        console.warn("[Stripe Core Error] attachSubmitButtonController module function missing from memory.");
                    }
                }, 150);
            } 
        } catch (stripeError) { 
            console.error("[Stripe Core] Failed to initialize Stripe elements:", stripeError); 
        } 
    }, 40); 
} 

window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement; 
})();




// ============================================================================ // 
// UI_CORE_INJECTOR.JS - PART B: VIEW TREE HTML SKELETON ASSEMBLER // 
// ============================================================================ // 
(function() { 
"use strict"; 

window.assembleCleanUILayoutTree = function(baseContainer, total, compName, servTitle, planTier, tracking) { 
baseContainer.innerHTML = ` 
<div style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box;"> 
    <div> 
        <h2 style="margin: 0 0 4px 0; color: #0a1f44; font-weight: 800; font-size: 1.35rem;">Secure Checkout</h2> 
        <p style="color: #64748b; font-size: 0.88rem; margin: 0;">Authorize your compliance filing package payment below.</p> 
    </div> 
    <div style="text-align: right; background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 6px;"> 
        <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #64748b; display: block;">Total Due:</span> 
        <span id="payment-gateway-total-display" style="font-size: 1.5rem; font-weight: 800; color: #10b981; font-family: monospace;">$${total.toFixed(2)}</span> 
    </div> 
</div> 

<!-- 1. VERIFIED ENTERPRISE METADATA BOX (EXPLICIT TWO ROWS OF TWO COLUMNS) --> 
<div style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; box-sizing: border-box; width: 100%;"> 
    <div style="font-size: 0.725rem; font-weight: 800; color: #475569; letter-spacing: 0.05em; margin-bottom: 4px;">VERIFIED ENTERPRISE FILING METADATA</div> 
    <!-- ROW 1: COMPANY NAME & SERVICE TITLE --> 
    <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;"> 
        <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;"> 
            <label style="font-weight: 700; font-size: 0.725rem; color: #64748b;">COMPANY NAME</label> 
            <input type="text" id="schema_orders_company_name" readonly disabled value="${compName}" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #475569; box-sizing: border-box;"> 
        </div> 
        <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;"> 
            <label style="font-weight: 700; font-size: 0.725rem; color: #64748b;">SERVICE TITLE</label> 
            <input type="text" id="schema_orders_service_title" readonly disabled value="${servTitle}" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #475569; box-sizing: border-box;"> 
        </div> 
    </div> 
    <!-- ROW 2: PLAN TIER & TRACKING NUMBER --> 
    <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;"> 
        <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;"> 
            <label style="font-weight: 700; font-size: 0.725rem; color: #64748b;">PLAN TIER</label> 
            <input type="text" id="schema_orders_plan_tier" readonly disabled value="${planTier.toUpperCase()}" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #475569; box-sizing: border-box;"> 
        </div> 
        <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;"> 
            <label style="font-weight: 700; font-size: 0.725rem; color: #64748b;">TRACKING NUMBER</label> 
            <input type="text" id="schema_orders_tracking_number" readonly disabled value="${tracking}" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #475569; font-family: monospace; box-sizing: border-box;"> 
        </div> 
    </div> 
</div> 

<!-- 2. CONTACT PROFILES FIELD GRID --> 
<div style="margin-bottom: 24px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; width: 100%; box-sizing: border-box;"> 
    <div style="grid-column: span 1; display: flex; flex-direction: column;"> 
        <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">First Name *</label> 
        <input type="text" id="portal_user_first_name" required style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;"> 
    </div> 
    <div style="grid-column: span 1; display: flex; flex-direction: column;"> 
        <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Last Name *</label> 
        <input type="text" id="portal_user_last_name" required style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;"> 
    </div> 
    <div style="grid-column: span 1; display: flex; flex-direction: column;"> 
        <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Email Address *</label> 
        <input type="email" id="portal_user_email_input" required style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;"> 
    </div> 
    <div style="grid-column: span 1; display: flex; flex-direction: column;"> 
        <label style="font-weight:700; font-size:12px; color:#64748b; text-transform:uppercase; margin-bottom:6px;">Phone Number *</label> 
        <input type="text" id="portal_user_phone" required style="padding:12px; border:1px solid #cbd5e1; border-radius:6px; width: 100%; box-sizing: border-box;"> 
    </div> 
</div> 

<div id="step6-error-banner-target" style="display: none; padding: 14px; background: #fef2f2; border: 1px solid #fca5a5; color: #991b1b; border-radius: 6px; margin-bottom: 20px; font-size: 0.9rem;"></div> 

<!-- STRIPE ISOLATION MOUNTING TARGET BOX (Completely pristine) --> 
<div id="stripe-payment-element-mount-point" style="margin-bottom: 24px; min-height: 150px; width: 100%;"></div> 

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box;"> 
    <button type="button" id="wizardBackBtnElement" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Back</button> 
    <button type="button" id="wizardSubmitBtnElement" style="background: #047857; border: none; color: white; padding: 12px 32px; border-radius: 6px; font-weight: 700; cursor: pointer;"> 
        <!-- Structurally Locked Default Context --> 
        <span id="wizardSubmitBtnDefaultState"> Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i> </span> 
        <!-- Isolated Processing Layout Context --> 
        <span id="wizardSubmitBtnLoadingState" style="display: none;"> <i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds... </span> 
    </button> 
</div> 
`; 

// Initialize layout navigation controls 
document.getElementById("wizardBackBtnElement")?.addEventListener("click", () => { 
    if(typeof window.goToPreviousWizardStep === 'function') { 
        window.goToPreviousWizardStep(); 
    } 
}); 

["portal_user_first_name", "portal_user_last_name", "portal_user_email_input", "portal_user_phone"].forEach(id => { 
    document.getElementById(id)?.addEventListener("input", function() { 
        this.classList.remove("field-error-shake"); 
    }); 
}); 

// ==========================================
// THREAD-SAFE EXECUTION CORRECTION
// ==========================================
// Postpone execution to next tick ensuring DOM layout rendering engine is completely done painting
setTimeout(() => {
    if (typeof window.executeStripeMountingPipeline === "function") {
        window.executeStripeMountingPipeline(total);
    } else {
        console.warn("[Stripe UI] Warning: window.executeStripeMountingPipeline is not defined yet.");
    }
}, 0);

}; 
})();


// ========================================== // 
// FILE 2: STRIPE_ELEMENTS_MOUNT.JS (FIXED)   // 
// ========================================== // 
(function() { 
"use strict"; 

function executeStripeMountingPipeline(paymentIntentClientSecret) { 
    // Delay execution slightly so the parent core.js viewport script completes its mobile skinning 
    setTimeout(async function() { 
        const targetNode = document.getElementById('stripe-payment-element-mount-point'); 
        if (!targetNode) { 
            console.warn("⚠️ [Stripe Mount Engine]: Element '#stripe-payment-element-mount-point' absent from DOM layout."); 
            return; 
        } 

        // CRITICAL PROTECTION GATEWAY: If your modern interceptor has already successfully 
        // mounted the interactive elements, abort this legacy timeout pass instantly to prevent overwrites.
        if (window.stripePaymentElementInstance && document.querySelector('.StripeElement')) {
            console.log("[Stripe Mount Engine Guard] Active secure card iframe detected. Terminating redundant mounting pass cleanly.");
            return;
        }

        let finalizedSecret = paymentIntentClientSecret; 
        
        // FIXED fallback mapping checking the exact variable keys where your core saves the live secret token string
        if (typeof finalizedSecret === 'number' || (typeof finalizedSecret === 'string' && !finalizedSecret.includes('_secret_'))) { 
            console.warn("⚠️ [Stripe Mount Engine] Received total amount instead of clientSecret. Attempting local lookup..."); 
            finalizedSecret = window.stripeClientSecret || window.stripeClientSecretPayload || localStorage.getItem("f4u_stripe_client_secret"); 
        } 
        
        // Ensure the secret is present and valid 
        if (!finalizedSecret || typeof finalizedSecret !== 'string' || !finalizedSecret.includes('_secret_')) { 
            console.error("✕ [Stripe Mount Engine] Initialization aborted: Missing or invalid clientSecret from backend. Received:", paymentIntentClientSecret); 
            
            // Safety Check: Only throw red error text if the canvas container is completely empty to protect active checkouts
            if (!document.querySelector('.StripeElement')) {
                targetNode.innerHTML = "<p style='color: #ef4444; font-weight: 500; font-size:14px;'>Session initialization failed. Please try again.</p>"; 
            }
            return; 
        } 
        
        try { 
            if (window.stripePaymentElementInstance) { 
                window.stripePaymentElementInstance.destroy(); 
                window.stripePaymentElementInstance = null; 
            } 
            
            // INITIALIZE CORRECTLY: Pass the verified secret string directly to Stripe Elements 
            window.stripeElementsContainer = window.stripeInstance.elements({ 
                clientSecret: finalizedSecret, 
                appearance: { 
                    theme: 'flat', 
                    variables: { 
                        colorPrimary: '#0a1f44', 
                        colorBackground: '#ffffff', 
                        colorText: '#0a1f44', 
                        colorTextPlaceholder: '#94a3b8', 
                        borderRadius: '6px', 
                        spacingGridRow: '16px' 
                    }, 
                    rules: { 
                        '.Input': { padding: '14px 16px', fontSize: '15px', border: '1px solid #e2e8f0', boxShadow: 'none' }, 
                        '.Input:focus': { borderColor: '#10b981', boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)' }, 
                        '.Input--invalid': { borderColor: '#ef4444', boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.15)' }, 
                        '.Label': { fontWeight: '700', fontSize: '13px', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' } 
                    } 
                } 
            }); 
            
            window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', { 
                layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: true } 
            }); 
            
            window.stripePaymentElementInstance.on("loaderror", function(errEvent) { 
                console.error("✕ [Stripe Framework Load Error Intercepted]:", errEvent.error); 
            }); 
            
            window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point'); 
            console.log("✅ [Stripe Engine] Secured card iframe mounted successfully."); 
        } catch (innerScopeException) { 
            console.error("✕ [Stripe Mounting Fatal Exception Context]", innerScopeException); 
        } 
    }, 200); 
} 

window.executeStripeMountingPipeline = executeStripeMountingPipeline; 
})();




// ========================================== // 
// FILE 3: INTERACTION_CONTROLLER.JS (FIXED)  // 
// ========================================== // 
(function() { 
"use strict"; 

function validateBaseProfileMatrix() { 
    let textFieldsValid = true; 
    const inputs = [ 
        "portal_user_first_name", 
        "portal_user_last_name", 
        "portal_user_email_input", 
        "portal_user_phone" 
    ]; 
    inputs.forEach(id => { 
        const inputTarget = document.getElementById(id); 
        if (!inputTarget) return; 
        if (!inputTarget.value.trim() || (inputTarget.required && !inputTarget.checkValidity())) { 
            inputTarget.classList.remove("field-validated-emerald"); 
            inputTarget.classList.add("field-error-shake"); 
            textFieldsValid = false; 
        } else { 
            inputTarget.classList.remove("field-error-shake"); 
            inputTarget.classList.add("field-validated-emerald"); 
        } 
    }); 
    return textFieldsValid; 
} 

// Expose the helper module securely to the global window scope wrapper
window.validateBaseProfileMatrix = validateBaseProfileMatrix;

// ==========================================
// FIXED: TERMINATING CLOSURES ADDED BELOW
// ==========================================
})();

window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) { 
    const errorBanner = document.getElementById("step6-error-banner-target"); 
    const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN"; 

    if (!window.stripeElementsContainer) { 
        throw new Error("Stripe iframe layout elements are uninitialized. Check network configuration."); 
    } 

    console.log("[Supabase Gateway] Launching standard Stripe runtime payment processing handler..."); 
    
    try { 
        // FIXED: Added redirect suppression to remain in-line and stripped invalid billing_details keys
        const StripeConfirmationResult = await window.stripeInstance.confirmPayment({ 
            elements: window.stripeElementsContainer, 
            redirect: "if_required",
            confirmParams: { 
                return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`, 
                receipt_email: document.getElementById("portal_user_email_input")?.value.trim() || undefined
            } 
        }); 

        // Check if an immediate synchronous error was returned by Stripe.js
        if (StripeConfirmationResult && StripeConfirmationResult.error) { 
            console.warn("[Stripe Core API] Authentication flow halted or failed.", StripeConfirmationResult.error.message); 
            if (errorBanner) { 
                errorBanner.innerText = StripeConfirmationResult.error.message; 
                errorBanner.style.display = "block"; 
            } 
            submitButtonNode.disabled = false; 
            submitButtonNode.style.opacity = "1"; 
            submitButtonNode.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`; 
        } else {
            // FIXED: Immediate local view transition to Step 7 upon successful validation pass
            console.log("✅ [Transaction Complete] In-line payment authorized. Progressing instantly to Step 7.");
            localStorage.setItem("f4u_payment_status_complete", "true");

            if (typeof window.switchWizardActiveViewLayout === "function") { 
                window.switchWizardActiveViewLayout(7); 
            } else if (typeof window.executeStepLifecyclePipeline === "function") {
                window.executeStepLifecyclePipeline(7);
            }
        } 
    } catch (err) { 
        console.error("[Stripe Execution Error]", err); 
        if (errorBanner) { 
            errorBanner.innerText = err.message; 
            errorBanner.style.display = "block"; 
        } 
        submitButtonNode.disabled = false; 
        submitButtonNode.style.opacity = "1"; 
        submitButtonNode.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`; 
    } 
};


/**
 * NEW GLOBAL HOOK: Fetches the secret from Supabase automatically on load 
 * to unlock and trigger the File 2 Stripe Element mount sequence.
 */
window.fetchClientSecretAndMountStripeElement = async function(finalAmountDue) {
    console.log("📡 [Supabase Pre-Fetch] Lazy loading clientSecret for structural mounting...");
    
    let parsedSupabaseUserId = "00000000-0000-0000-0000-000000000000"; 
    try { 
        const rawAuthToken = localStorage.getItem("supabase.auth.token"); 
        if (rawAuthToken) { 
            const parsedTokenObj = JSON.parse(rawAuthToken); 
            if (parsedTokenObj?.currentSession?.user?.id) { 
                parsedSupabaseUserId = parsedTokenObj.currentSession.user.id; 
            } else if (parsedTokenObj?.user?.id) { 
                parsedSupabaseUserId = parsedTokenObj.user.id; 
            } 
        } 
    } catch (e) { 
        console.warn("[Supabase Token Parser] Failed parsing local auth session."); 
    }

    const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN"; 
    const profileTransactionPayload = { 
        company_name: window.currentOrderCorePayload?.company_name || localStorage.getItem("f4u_company_name") || "Pending Incorporation", 
        service_key: window.currentOrderCorePayload?.service_key || localStorage.getItem("f4u_service_key") || "", 
        service_title: window.currentOrderCorePayload?.service_title || localStorage.getItem("f4u_service_title") || "", 
        plan_tier: window.currentOrderCorePayload?.plan_tier || localStorage.getItem("f4u_plan_tier") || "starter", 
        total_fee: finalAmountDue, 
        email: document.getElementById("portal_user_email_input")?.value.trim() || localStorage.getItem("f4u_user_email") || "guest@checkout.io", 
        tracking_number: uniqueTrackingToken, 
        status: "payment_pending", 
        tax_id_status: "pending", 
        poa_signed_state: false, 
        poa_signature_verification_string: "pending", 
        user_id: parsedSupabaseUserId, 
        collected_payload_metadata: { 
            amount_in_cents: Math.round(finalAmountDue * 100), 
            currency: "usd", 
            wizard_step_checkpoint: 6, 
            timestamp_capture: new Date().toISOString() 
        } 
    };

    try {
        const pipelineEndpointResponse = await fetch('https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-webhook', { 
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(profileTransactionPayload) 
        }); 

        if (!pipelineEndpointResponse.ok) { 
            const serverFailureMessage = await pipelineEndpointResponse.text(); 
            throw new Error(`Supabase Edge Function Rejected Request (${pipelineEndpointResponse.status}): ${serverFailureMessage}`); 
        } 

        const completedTransactionIntentJSON = await pipelineEndpointResponse.json(); 
        const serverSecret = completedTransactionIntentJSON.clientSecret || completedTransactionIntentJSON.client_secret;
        const verifiedPaymentIntentId = completedTransactionIntentJSON.paymentIntentId || completedTransactionIntentJSON.payment_intent_id || completedTransactionIntentJSON.id;

        if (verifiedPaymentIntentId && window.currentOrderCorePayload) {
            window.currentOrderCorePayload.stripe_payment_id = verifiedPaymentIntentId;
        }

        if (!serverSecret) {
            throw new Error("Supabase response was missing valid clientSecret string token.");
        }

        // Save globally so Stripe components can parse it if needed
        window.stripeClientSecret = serverSecret;

        // Force mount pipeline to execute with real valid token parameters immediately
        if (typeof window.executeStripeMountingPipeline === "function") {
            window.executeStripeMountingPipeline(serverSecret);
        }
    } catch (err) {
        console.error("✕ [Supabase Pre-Fetch Failure]", err);
        const mountTarget = document.getElementById('stripe-payment-element-mount-point');
        if (mountTarget) {
            mountTarget.innerHTML = `<p style="color:#ef4444; font-size:13px; font-weight:600;">Secure checkout window timed out. Please try refreshing.</p>`;
        }
    }
};



// ============================================================================ // 
// step-6.js - PART 4: PRODUCTION EDGE FUNCTION HANDSHAKE (REPLACE PREVIOUS PART 4) // 
// ============================================================================ // 
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) { 
const errorBanner = document.getElementById("step6-error-banner-target"); 
const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN"; 

// Parse authentic Supabase Auth UUID from stringified storage token safely
let parsedSupabaseUserId = "00000000-0000-0000-0000-000000000000"; 
try { 
    const rawAuthToken = localStorage.getItem("supabase.auth.token"); 
    if (rawAuthToken) { 
        const parsedTokenObj = JSON.parse(rawAuthToken); 
        if (parsedTokenObj?.currentSession?.user?.id) { 
            parsedSupabaseUserId = parsedTokenObj.currentSession.user.id; 
        } else if (parsedTokenObj?.user?.id) { 
            parsedSupabaseUserId = parsedTokenObj.user.id; 
        } 
    } 
} catch (e) { 
    console.warn("[Supabase Token Parser] Failed to parse local auth session object. Defaulting to system fallback uuid."); 
}

// 1. Compile profile attribute dictionaries matching the explicit public.orders schema definitions 
const profileTransactionPayload = { 
    company_name: window.currentOrderCorePayload?.company_name || localStorage.getItem("f4u_company_name") || "", 
    service_key: window.currentOrderCorePayload?.service_key || localStorage.getItem("f4u_service_key") || "", 
    service_title: window.currentOrderCorePayload?.service_title || localStorage.getItem("f4u_service_title") || "", 
    plan_tier: window.currentOrderCorePayload?.plan_tier || localStorage.getItem("f4u_plan_tier") || "starter", 
    total_fee: finalAmountDue, 
    email: document.getElementById("portal_user_email_input")?.value.trim() || "", 
    tracking_number: uniqueTrackingToken, 
    status: window.currentOrderCorePayload?.status || "payment_pending", 
    tax_id_status: window.currentOrderCorePayload?.tax_id_status || "pending", 
    poa_signed_state: window.currentOrderCorePayload?.poa_signed_state || false, 
    poa_signature_verification_string: window.currentOrderCorePayload?.poa_signature_verification_string || "pending", 
    user_id: window.currentOrderCorePayload?.user_id || parsedSupabaseUserId, 
    collected_payload_metadata: { 
        first_name: document.getElementById("portal_user_first_name")?.value.trim(), 
        last_name: document.getElementById("portal_user_last_name")?.value.trim(), 
        phone: document.getElementById("portal_user_phone")?.value.trim(), 
        amount_in_cents: Math.round(finalAmountDue * 100), 
        currency: "usd", 
        wizard_step_checkpoint: 6, 
        timestamp_capture: new Date().toISOString() 
    } 
};

// ========================================================================= // 
// LOCATION: assets/js/step-6.js (FRAGMENT A) // 
// ========================================================================= // 
console.log("📡 [Supabase Production Gateway] Dispatching secure transactional payload to live Edge Function..."); 
try { 
    // Formatted cleanly with split strings to ensure full delivery 
    const productionCloudUrl = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-webhook'; 
    const pipelineEndpointResponse = await fetch(productionCloudUrl, { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(profileTransactionPayload) 
    }); 
    
    if (!pipelineEndpointResponse.ok) { 
        const serverFailureMessage = await pipelineEndpointResponse.text(); 
        throw new Error(`Supabase Edge Function Rejected Request (${pipelineEndpointResponse.status}): ${serverFailureMessage}`); 
    } 
    
    // 🚀 FIXED: Securely extract the token payload and save it where Stripe expects it 
    const transactionTokenPayload = await pipelineEndpointResponse.json(); 
    window.stripeClientSecret = transactionTokenPayload.clientSecret || transactionTokenPayload.client_secret; 
    
    if (transactionTokenPayload.paymentIntentId || transactionTokenPayload.id) { 
        window.currentOrderCorePayload = window.currentOrderCorePayload || {}; // Ensures the object exists 
        window.currentOrderCorePayload.stripe_payment_id = transactionTokenPayload.paymentIntentId || transactionTokenPayload.id; 
    } 
    
    if (!window.stripeClientSecret) { 
        throw new Error("Handshake structural failure: Secret authorization token omitted by cloud gateway."); 
    } 
    
    // ============================================================================ // 
    // step-6.js - PART 5: DATA PRESERVATION & STRIPE INTENT TRANSMISSION (FIXED) // 
    // ============================================================================ // 
    // 6. EXECUTE STRIPE INTENT TRANSMISSION HANDSHAKE 
    if (window.stripeElementsContainer) { 
        console.log("[Stripe Controller] Submitting payment components context..."); 
        
        // ============================================================================ // 
        // step-6.js - PART 5: FRAGMENT B (STRIPE TRANSMISSION & VIEW SWAP) // 
        // ============================================================================ // 
        const { error: stripeSubmitError } = await window.stripeElementsContainer.submit(); 
        if (stripeSubmitError) { 
            if (submitButtonNode) { 
                submitButtonNode.disabled = false; 
                submitButtonNode.style.opacity = "1"; 
                submitButtonNode.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
            } 
            if (errorBanner) { 
                errorBanner.style.display = "block"; 
                errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> ${stripeSubmitError.message}`; 
            } 
            return false; 
        } 
        
        const isMockSecret = String(window.stripeClientSecret || "").startsWith("pi_mock_intent_"); 
        
        if (window.stripeInstance && !isMockSecret) { 
            console.log("[Stripe Submission Engine] Dispatching secure transactional parameters over network..."); 
            
            // FIXED: Standard correct execution signature for Deferred Intent confirmation elements

// ============================================================================
// 🚀 PRODUCTION-READY STRIPE INTENT CONFIRMATION (PATCH FOR step-6.js)
// ============================================================================
// ============================================================================ //
// 🚀 PRODUCTION-READY STRIPE INTENT CONFIRMATION (PATCH FOR step-6.js)         //
// ============================================================================ //
const { error: confirmError } = await window.stripeInstance.confirmPayment({ 
    elements: window.stripeElementsContainer, 
    // FIXED: Added redirect suppression to remain in-line on the current thread context
    redirect: "if_required",
    confirmParams: { 
        return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`, 
        receipt_email: finalEmail 
    } 
}); 

if (confirmError) throw confirmError; 

} else if (isMockSecret && window.supabaseClient) { 
    console.log("🧪 [Sandbox Engine] Mock intent matched. Forcing manual database synchronization..."); 
    
    // Strict database row compilation mapping directly to public.orders table schema 
    const fullSchemaDatabaseRowUpsertNode = { 
        id: window.currentOrderCorePayload?.id || crypto.randomUUID(), 
        company_name: profileTransactionPayload.company_name, 
        service_key: profileTransactionPayload.service_key, 
        service_title: profileTransactionPayload.service_title, 
        plan_tier: profileTransactionPayload.plan_tier, 
        total_fee: profileTransactionPayload.total_fee, 
        status: "Paid", 
        tax_id_status: profileTransactionPayload.tax_id_status, 
        poa_signed_state: profileTransactionPayload.poa_signed_state, 
        poa_signature_verification_string: profileTransactionPayload.poa_signature_verification_string, 
        collected_payload_metadata: profileTransactionPayload.collected_payload_metadata, 
        tracking_number: profileTransactionPayload.tracking_number, 
        user_id: profileTransactionPayload.user_id, 
        email: profileTransactionPayload.email, 
        stripe_payment_id: window.currentOrderCorePayload?.stripe_payment_id || "mock_payment_id_settled" 
    }; 
    
    const { error: mockUpdateError } = await window.supabaseClient 
        .from('orders') 
        .upsert(fullSchemaDatabaseRowUpsertNode, { onConflict: 'tracking_number' }); 
        
    if (mockUpdateError) { 
        console.warn("⚠️ Sandbox Sync Warning:", mockUpdateError.message); 
        throw new Error(`Sandbox database tracking synchronization rejected: ${mockUpdateError.message}`); 
    } else { 
        console.log("✅ Sandbox Sync Complete: Test transaction record marked as Paid inside public.orders."); 
    } 
} 

} else { 
    throw new Error("Checkout components missing: The payment elements were not mounted correctly."); 
} 

// FIXED: Immediate local panel view transition to Step 7 upon successful validation pass
console.log("✅ [Transaction Complete] Stripe processing approved. Progressing instantly to Step 7 layout canvas...");
localStorage.setItem("f4u_payment_status_complete", "true");

if (typeof window.switchWizardActiveViewLayout === "function") { 
    console.log("[Stripe Submission Engine] Checkout complete. Transitioning control to step-7.js..."); 
    window.switchWizardActiveViewLayout(7); 
} else if (typeof window.goToNextWizardStep === "function") { 
    window.goToNextWizardStep(); 
} else {
    // Basic DOM visibility fallback pass if application state routers are resetting
    const successPanelNode = document.getElementById("step-panel-7");
    if (successPanelNode) {
        document.querySelectorAll(".wizard-panel").forEach(p => p.style.display = "none");
        successPanelNode.style.setProperty("display", "block", "important");
        successPanelNode.classList.add("active");
    }
}

} catch (checkoutError) { 
    console.error("[Fatal Payment Intercept Catch]", checkoutError); 
    if (errorBanner) { 
        errorBanner.style.display = "block"; 
        errorBanner.innerHTML = ` <i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError} `; 
    } 
    if (submitButtonNode) { 
        submitButtonNode.disabled = false; 
        submitButtonNode.style.opacity = "1"; 
        submitButtonNode.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
    } 
} 
};


// ============================================================================ // 
// step-6.js - SECTION 5: DATA PRESERVATION & STRIPE INTENT TRANSMISSION        // 
// ============================================================================ // 
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) { 
"use strict"; 

// 1. Resolve UI elements using production matrix identifiers 
const submitBtn = submitButtonNode || document.getElementById("wizardSubmitBtnElement") || document.getElementById("wizard-next-trigger-btn"); 
const errorBanner = document.getElementById("step6-error-banner-target"); 
const emailInputNode = document.getElementById("portal_user_email_input"); 
const firstNameInputNode = document.getElementById("portal_user_first_name"); 
const lastNameInputNode = document.getElementById("portal_user_last_name"); 
const phoneInputNode = document.getElementById("portal_user_phone"); 

// 2. Extract values cleanly matching your variable mapping dependencies 
const finalEmail = emailInputNode ? emailInputNode.value.trim().toLowerCase() : localStorage.getItem("f4u_checkout_email") || ""; 
const firstName = firstNameInputNode ? firstNameInputNode.value.trim() : ""; 
const lastName = lastNameInputNode ? lastNameInputNode.value.trim() : ""; 
const phone = phoneInputNode ? phoneInputNode.value.trim() : ""; 

// Completely dynamic amount matching. No hardcoded dollar amounts. 
const rawTotalText = document.getElementById("payment-gateway-total-display")?.textContent || ""; 
const parsedDOMCost = parseFloat(rawTotalText.replace(/[^0-9.]/g, "")); 
const activeGrandCost = !isNaN(parsedDOMCost) ? parsedDOMCost : finalAmountDue; 
const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN"; 

// 3. Client mapping layout rules for pure serverless environments 
const supabaseClient = window.supabaseInstance || window.supabaseClient || (typeof window.getSuccessPageSupabaseClient === 'function' ? window.getSuccessPageSupabaseClient() : null); 

try { 
    if (!window.stripeClientSecret) { 
        throw new Error("Missing transaction secure secret token. Please return to the previous review layout step."); 
    } 
    if (!window.stripeElementsContainer) { 
        throw new Error("Checkout components missing: The payment elements container was not initialized correctly."); 
    } 
    
    console.log("💳 [Stripe Runtime] Validating Element layout entries via .submit()..."); 
    // REQUIRED FOR DEFERRED API: Trigger submission sequence to gather card input parameters 
    const { error: submitValidationError } = await window.stripeElementsContainer.submit(); 
    if (submitValidationError) { 
        if (errorBanner) { 
            errorBanner.innerText = submitValidationError.message; 
            errorBanner.style.display = "block"; 
        } 
        if (submitBtn) { 
            submitBtn.disabled = false; 
            submitBtn.style.opacity = "1"; 
            submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
        } 
        return false; 
    } 
    
    console.log("💳 [Stripe Runtime] Dynamic Amount Verified: $" + activeGrandCost + ". Launching checkout window..."); 
    
    // FIXED: Formatted safely with redirect suppression and stripped off direct billing_details to prevent 400 errors
    const StripeConfirmationResult = await window.stripeInstance.confirmPayment({ 
        elements: window.stripeElementsContainer, 
        clientSecret: window.stripeClientSecret, 
        redirect: "if_required",
        confirmParams: { 
            return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`, 
            receipt_email: finalEmail || undefined
        } 
    }); 

    if (StripeConfirmationResult && StripeConfirmationResult.error) { 
        console.warn("[Stripe Core API] Authentication flow halted or failed.", StripeConfirmationResult.error.message); 
        if (errorBanner) { 
            errorBanner.innerText = StripeConfirmationResult.error.message; 
            errorBanner.style.display = "block"; 
        } 
        if (submitBtn) { 
            submitBtn.disabled = false; 
            submitBtn.style.opacity = "1"; 
            submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
        } 
    } else {
        // FIXED: Successful capture advances layout immediately to step 7 panel container
        console.log("✅ [Transaction Complete] Stripe payment verified in-line. Transitioning to step 7 receipt views...");
        localStorage.setItem("f4u_payment_status_complete", "true");

        if (typeof window.switchWizardActiveViewLayout === "function") { 
            window.switchWizardActiveViewLayout(7); 
        } else if (typeof window.executeStepLifecyclePipeline === "function") {
            window.executeStepLifecyclePipeline(7);
        } else {
            // Absolute fallback layout panel toggle block
            document.querySelectorAll(".wizard-panel").forEach(p => p.style.display = "none");
            const step7PanelNode = document.getElementById("step-panel-7") || document.getElementById("step-7");
            if (step7PanelNode) {
                step7PanelNode.style.setProperty("display", "block", "important");
                step7PanelNode.classList.add("active");
            }
        }
    }
} catch (globalPipelineError) { 
    console.error("🚨 [Pipeline Intercept Failure]:", globalPipelineError.message); 
    if (errorBanner) { 
        errorBanner.innerText = globalPipelineError.message; 
        errorBanner.style.display = "block"; 
    } 
    if (submitBtn) { 
        submitBtn.disabled = false; 
        submitBtn.style.opacity = "1"; 
        submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
    } 
} 
};



/** 
 * 📁 STRIPE WEBHOOK CONTROLLER CHANNEL (PRODUCTION HARDENED ROUTER) 
 * Responsibility: Listens for successful checkouts, looks up matching database rows 
 * by tracking number, and sets the transaction status to 'Paid'. 
 */ 
async function handleStripeWebhookEvent(stripeEvent, supabaseAdmin) { 
"use strict"; 

const eventType = stripeEvent.type; 

// UNIFIED GATEWAY INTERCEPT: Capture valid transaction updates regardless of trigger race condition 
if (eventType === 'checkout.session.completed' || eventType === 'payment_intent.succeeded') { 
    const sessionObj = stripeEvent.data.object; 
    
    // Direct extraction of custom metadata properties 
    let metadata = sessionObj.metadata || {}; 
    if (!metadata.tracking_number && sessionObj.payment_intent_parsed_object?.metadata) { 
        metadata = sessionObj.payment_intent_parsed_object.metadata; 
    } 
    
    // Safety Guard: Avoid processing transactions from outside your wizard lifecycle boundaries 
    if (!metadata.tracking_number || metadata.tracking_number.trim() === "") { 
        console.log("ℹ️ [Stripe Webhook] Skipping event: Object does not contain a tracking_number token."); 
        return; 
    } 
    
    console.log(`📡 [Stripe Webhook] Processing event [${eventType}] for Tracking Token: ${metadata.tracking_number}`); 
    
    try { 
        // 1. Query the pre-existing row inserted during frontend checkout creation 
        const { data: existingOrder, error: fetchError } = await supabaseAdmin 
            .from('orders') 
            .select('*') 
            .eq('tracking_number', metadata.tracking_number) 
            .maybeSingle(); 
            
        if (fetchError) throw fetchError; 
        if (!existingOrder) { 
            throw new Error(`Order record with tracking number ${metadata.tracking_number} not found inside public.orders.`); 
        } 
        
        // Resolve user's actual communication email dynamically from payload channels safely 
        let customerEmail = metadata.email || sessionObj.receipt_email || existingOrder.email || ""; 
        if (!customerEmail && sessionObj.customer_details?.email) { 
            customerEmail = sessionObj.customer_details.email; 
        } 
        if (!customerEmail && sessionObj.billing_details?.email) { 
            customerEmail = sessionObj.billing_details.email; 
        } 
        
        // Extract unique programmatic hash identifiers to fulfill your schema fields 
        const liveStripePaymentId = sessionObj.payment_intent || sessionObj.id; 
        if (!liveStripePaymentId) throw new Error("Stripe transaction object lacks a valid payment intent identification string."); 

        // FIXED: Generate USA Standard 12-Hour formatted string payload for metadata tracking arrays
        const dateOptionsMatrix = {
            hour12: true,
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        const localUsaStandardTimeString = new Intl.DateTimeFormat('en-US', dateOptionsMatrix).format(new Date());
        
        // 2. Build the optimized update payload matching only your specified database table columns 
        const updatePayload = { 
            status: 'Paid', 
            email: customerEmail ? customerEmail.trim() : existingOrder.email, 
            stripe_payment_id: liveStripePaymentId, 
            collected_payload_metadata: { 
                ...(existingOrder.collected_payload_metadata || {}), 
                stripe_event_id: stripeEvent.id, 
                stripe_object_id: sessionObj.id, 
                stripe_payment_intent: liveStripePaymentId, 
                // FIXED: Replace ISO string values with human-readable 12-Hour timestamp
                processed_at: localUsaStandardTimeString 
            }, 
            updated_at: new Date().toISOString() 
        }; 
        
        // 3. Commit the row updates directly using your unique tracking constraint parameter 
        const { error: orderError } = await supabaseAdmin 
            .from('orders') 
            .update(updatePayload) 
            .eq('tracking_number', metadata.tracking_number); 
            
        if (orderError) throw orderError; 
        console.log(`✅ [Stripe Webhook] Order [${metadata.tracking_number}] successfully updated to Paid.`); 

        // ============================================================================
        // 🚀 AUTOMATED ACCOUNT PROVISIONING & USER RE-LINKING LANE
        // ============================================================================
        let resolvedActiveUserId = existingOrder.user_id;

        // Inspect row data structure to trap unregistered guest checkout transactions cleanly
        if (!resolvedActiveUserId || resolvedActiveUserId === "00000000-0000-0000-0000-000000000000") {
            console.log(`📡 [Auth Automation] Guest transaction detected for: ${customerEmail}. Provisioning account structures...`);
            
            try {
                // Programmatically invite user to generate account record and dispatch setup instructions link
                const { data: authInviteResult, error: inviteAdminError } = await supabaseAdmin.auth.admin.inviteUserByEmail(
                    customerEmail.trim(),
                    {
                        data: {
                            first_name: existingOrder.collected_payload_metadata?.customer_first_name || "",
                            last_name: existingOrder.collected_payload_metadata?.customer_last_name || ""
                        }
                    }
                );

                if (inviteAdminError) throw inviteAdminError;

                if (authInviteResult?.user?.id) {
                    resolvedActiveUserId = authInviteResult.user.id;
                    console.log(`✅ [Auth Automation] Account provisioned with real structural UUID: ${resolvedActiveUserId}`);

                    // Commit the live account UUID back onto the order record column to replace zeros frame
                    const { error: uuidRelinkError } = await supabaseAdmin
                        .from('orders')
                        .update({ 
                            user_id: resolvedActiveUserId,
                            updated_at: new Date().toISOString()
                        })
                        .eq('tracking_number', metadata.tracking_number);

                    if (uuidRelinkError) throw uuidRelinkError;
                    console.log("🔗 [Auth Automation] Order record row linked to real authenticated identity profile successfully.");
                }
            } catch (authException) {
                console.error("✕ [Auth Automation Exception Intercepted]:", authException.message || authException);
            }
        }
        
        // 4. AUTOMATIC NOTIFICATION GENERATOR ALIGNED WITH YOUR PORTAL SCHEMAS 
        if (resolvedActiveUserId && resolvedActiveUserId !== "00000000-0000-0000-0000-000000000000") { 
            const alertPayload = { 
                user_id: resolvedActiveUserId, // Map to live UUID string securely
                title: "New Purchase Authenticated", 
                message: `Your tracking order ${metadata.tracking_number} has been processed into our administrative fulfillment lane. Check your timeline for live trace metrics updates.`, 
                is_read: false, 
                is_archived: false, 
                recipient_email: customerEmail ? customerEmail.trim() : existingOrder.email, 
                created_at: new Date().toISOString() 
            }; 
            
            const { error: notificationError } = await supabaseAdmin 
                .from('portal_notifications') 
                .insert([alertPayload]); 
                
            if (notificationError) { 
                console.warn("⚠️ [Stripe Webhook] Could not push notification log row:", notificationError.message); 
            } else { 
                console.log("🔔 [Stripe Webhook] Automated client dashboard notification logged successfully."); 
            } 
        } 
    } catch (err) { 
        console.error("✕ [Stripe Webhook Execution Exception Caught]:", err.message || err); 
    } 
} 
}



// ============================================================================ // 
// step-6.js - UNIFIED TRANSACTION AUTHORIZATION PIPELINE ENGINE (PART 1) // 
// ============================================================================ // 
(function() { 
"use strict"; 

async function resolveStripeClientAuthorizationSecret(grandTotalAmount, trackingNumberToken) { 
    try { 
        console.log("[Stripe Loader] Requesting secure Payment Intent token from live production Edge Function..."); 
        const productionUrlGateway = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-webhook'; 
        
        const response = await fetch(productionUrlGateway, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ 
                amountValue: grandTotalAmount, 
                trackingNumber: trackingNumberToken 
            }) 
        }); 
        
        if (!response.ok) { 
            const errorPayload = await response.json().catch(() => ({})); 
            throw new Error(errorPayload.error || "Edge Function rejected credentials generation lookups."); 
        } 
        
        const data = await response.json(); 
        window.stripeClientSecret = data.clientSecret; 
        
        if (data.paymentIntentId && window.currentOrderCorePayload) { 
            window.currentOrderCorePayload.stripe_payment_id = data.paymentIntentId; 
        } 
        return window.stripeClientSecret; 
    } catch (err) { 
        console.error("✕ [Stripe Loader Critical Endpoint Failure]:", err.message || err); 
        throw err; 
    } 
} 

// UNIFIED PIPELINE HOOK: Connects your template generator and async mounting sequence 
window.initializeStep6LifecycleAndMount = async function(baseContainer, total, compName, servTitle, planTier, tracking) { 
    // 1. Render layout components instantly 
    if (typeof window.assembleCleanUILayoutTree === "function") { 
        window.assembleCleanUILayoutTree(baseContainer, total, compName, servTitle, planTier, tracking); 
    } 
    
    // 2. Fetch server-side Payment Intent key in the background 
    try { 
        const secretToken = await resolveStripeClientAuthorizationSecret(total, tracking); 
        
        // ============================================================================
        // 🚀 CRITICAL FIX: FORCED DOM RE-PAINT DELAY MACRO
        // ============================================================================
        // Delays initialization by a fraction of a second to ensure the browser has fully 
        // drawn '#stripe-payment-element-mount-point' into the DOM layout engine before execution.
        setTimeout(() => {
            const structuralMountPointNode = document.getElementById("stripe-payment-element-mount-point");
            
            if (!structuralMountPointNode) {
                console.error("✕ [Stripe Pipeline Engine Fatal Error]: Mount point container node is missing after UI skeleton render phase.");
                return;
            }
            
            if (typeof window.executeStripeMountingPipeline === "function") { 
                window.executeStripeMountingPipeline(secretToken); 
            } else {
                console.error("✕ [Stripe Pipeline Engine Fatal Error]: window.executeStripeMountingPipeline is not defined in memory context.");
            }
        }, 50);

    } catch (error) { 
        const errorBanner = document.getElementById("step6-error-banner-target"); 
        if (errorBanner) { 
            errorBanner.style.display = "block"; 
            errorBanner.innerHTML = `⚠️ <strong>Initialization Failure:</strong> Unable to process financial connection tokens.`; 
        } 
    } 
}; 


 // ============================================================================ // 
// LOCATION: assets/js/step-6.js (MODULAR SUBMISSION PIPELINE CORES)            // 
// ============================================================================ // 
window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event) { 
    if (event && typeof event.preventDefault === "function") event.preventDefault(); 
    
    const submitBtn = document.getElementById("wizardSubmitBtnElement"); 
    const errorBanner = document.getElementById("step6-error-banner-target"); 
    const emailInput = document.getElementById("portal_user_email_input"); 
    const firstNameInput = document.getElementById("portal_user_first_name"); 
    const lastNameInput = document.getElementById("portal_user_last_name"); 
    const phoneInput = document.getElementById("portal_user_phone"); 
    const btnDefaultState = document.getElementById("wizardSubmitBtnDefaultState"); 
    const btnLoadingState = document.getElementById("wizardSubmitBtnLoadingState"); 
    
    const fieldsArray = [emailInput, firstNameInput, lastNameInput, phoneInput]; 
    let validationHasFailed = false; 
    
    fieldsArray.forEach(input => { 
        if (input) input.classList.remove("field-error-shake", "wizard-input-field-error-state"); 
    }); 
    
    fieldsArray.forEach(input => { 
        if (input && input.value.trim() === "") { 
            validationHasFailed = true; 
            input.classList.add("field-error-shake"); 
        } 
    }); 
    
    if (validationHasFailed) { 
        const firstEmpty = fieldsArray.find(i => i && i.value.trim() === ""); 
        if (firstEmpty) firstEmpty.focus(); 
        return false; 
    } 
    
    try { 
        const finalEmail = emailInput.value.trim().toLowerCase(); 
        const firstName = firstNameInput.value.trim(); 
        const lastName = lastNameInput.value.trim(); 
        const phone = phoneInput.value.trim(); 
        const rawTextTotal = document.getElementById("payment-gateway-total-display")?.textContent || ""; 
        const activeGrandCost = parseFloat(rawTextTotal.replace(/[^0-9.]/g, "")); 
        
        if (isNaN(activeGrandCost) || activeGrandCost <= 0) { 
            throw new Error("Unable to authorize ledger funds: Payment calculation total is uninitialized."); 
        } 
        
        if (submitBtn) submitBtn.disabled = true; 
        if (btnDefaultState) btnDefaultState.style.display = "none"; 
        if (btnLoadingState) btnLoadingState.style.display = "inline-block"; 
        
        const urlScanner = new URLSearchParams(window.location.search);

 // ============================================================================ // 
// 🚀 CASCADING PARAMETERS LOGIC EXTRACTION PASS                                // 
// ============================================================================ // 
// Fallback sequence extracts the service tracking string from parameters or memory blocks 
const companyNameParameter = document.getElementById("schema_orders_company_name")?.value || window.currentOrderCorePayload?.company_name || localStorage.getItem("f4u_company_name") || ""; 
const serviceSlug = document.getElementById("schema_orders_service_key")?.value || urlScanner.get('service') || window.currentServiceKey || window.routeActiveServiceKey || window.currentOrderCorePayload?.service_key || ""; 
const dynamicLabelTextString = document.getElementById("schema_orders_service_title")?.value || window.currentOrderCorePayload?.service_title || localStorage.getItem("f4u_service_title") || "llc-formation"; 
const activePlanKeyString = document.getElementById("schema_orders_plan_tier")?.value || urlScanner.get('plan') || window.currentPlanKey || window.routeActivePlanKey || window.currentOrderCorePayload?.plan_tier || "starter"; 
const uniqueTrackingToken = document.getElementById("schema_orders_tracking_number")?.value || localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN"; 
const poaSignatureParameter = localStorage.getItem("wizard_field_poa_signature_string") || window.currentOrderCorePayload?.poa_signature_verification_string || "signed"; 

// Validation parameter checks 
if (!companyNameParameter || companyNameParameter.trim() === "") throw new Error("Validation aborted: Company Name mapping parameters are completely blank."); 
if (!serviceSlug || serviceSlug.trim() === "") throw new Error("Validation aborted: Service alignment parameter tokens are missing."); 
if (!dynamicLabelTextString || dynamicLabelTextString.trim() === "") throw new Error("Validation aborted: Service title parameter tokens are missing."); 
if (!activePlanKeyString || activePlanKeyString.trim() === "") throw new Error("Validation aborted: Selected plan tier identifier variables are unassigned."); 
if (!uniqueTrackingToken || uniqueTrackingToken.trim() === "" || uniqueTrackingToken === "F4U-PENDING") throw new Error("Validation aborted: Active tracking session token identifier is unassigned."); 

const supabaseClient = window.supabaseInstance || window.supabaseClient; 
let dynamicUserId = "00000000-0000-0000-0000-000000000000"; 
if (supabaseClient && supabaseClient.auth) { 
    const activeUser = (await supabaseClient.auth.getUser())?.data?.user; 
    if (activeUser) dynamicUserId = activeUser.id; 
} 

// A. DATA PRESERVATION STEP 
if (supabaseClient) { 
    const validatedDatabaseUpsertPayload = { 
        tracking_number: uniqueTrackingToken.trim(), 
        company_name: companyNameParameter.trim(), 
        service_title: dynamicLabelTextString.trim(), 
        plan_tier: activePlanKeyString.trim().toLowerCase(), 
        total_fee: parseFloat(activeGrandCost.toFixed(2)), 
        status: 'pending', 
        tax_id_status: 'Fulfillment Lane', 
        poa_signed_state: true, 
        user_id: dynamicUserId, 
        email: finalEmail, 
        poa_signature_verification_string: poaSignatureParameter.trim(), 
        stripe_payment_id: window.currentOrderCorePayload?.stripe_payment_id || window.stripePaymentIntentId || "intent_token_pending", 
        collected_payload_metadata: { 
            customer_email: finalEmail, 
            customer_first_name: firstName, 
            customer_last_name: lastName, 
            customer_phone: phone 
        } 
    }; 
    const { error: dbUpsertError } = await supabaseClient.from('orders').upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' }); 
    if (dbUpsertError) throw new Error(`Pre-Sync Failed: ${dbUpsertError.message}`); 
} 

// ============================================================================ // 
// 🚀 PRODUCTION-READY SECURE DATA PRESERVATION & TRANSITION PIPELINE           // 
// ============================================================================ // 
try {
    const resolvedAmountTotal = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 0); 
    const basePackageCostOnly = parseFloat(window.wizardCentralState?.getStepData(3, "package_price") || localStorage.getItem("wizard_field_base_package_price") || 99.00); 

    const successReceiptManifestPayload = { 
        financials_subtotal_amount: basePackageCostOnly, 
        financials_grand_total_charge: resolvedAmountTotal, 
        selected_package_title: `filings4u Processing Fee (${(localStorage.getItem("wizard_plan_tier_key") || "STARTER").toUpperCase()})`, 
        legal_entity_name: document.getElementById("schema_orders_company_name")?.value || localStorage.getItem("f4u_company_name") || "Your Enterprise Inc.", 
        taxpayer_ein: localStorage.getItem("wizard_field_ein_number") || "Processing Terminal Lane", 
        office_address_street: localStorage.getItem("wizard_field_business_address") || "Fulfillment Lane Registry", 
        transaction_hash_id: uniqueTrackingToken 
    }; 

    // Resolve true signature string from all potential multi-step wizard keys safely 
    const finalizedPoaSignatureHash = localStorage.getItem("wizard_field_poa_signature_string") || 
                                       localStorage.getItem("wizard_field_poa_verification_hash") || 
                                       localStorage.getItem("f4u_poa_signature") || 
                                       "Signed Natively"; 

    // Compute true USA Standard 12-Hour formatted timestamp using local system parameters 
    const systemDateOptions = { 
        hour12: true, 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric' 
    }; 
    const localUsaStandardTimestamp = new Intl.DateTimeFormat('en-US', systemDateOptions).format(new Date()); 

    // Build the finalized, hardened payload context dictionary object
    const validatedDatabaseUpsertPayload = { 
        tracking_number: uniqueTrackingToken.trim(), 
        company_name: companyNameParameter.trim(), 
        service_title: dynamicLabelTextString.trim(), 
        plan_tier: activePlanKeyString.trim().toLowerCase(), 
        total_fee: parseFloat(activeGrandCost.toFixed(2)), 
        status: 'pending', 
        tax_id_status: 'Fulfillment Lane', 
        poa_signed_state: true, 
        user_id: dynamicUserId, 
        email: finalEmail, 
        poa_signature_verification_string: finalizedPoaSignatureHash.trim(), 
        stripe_payment_id: window.currentOrderCorePayload?.stripe_payment_id || window.stripePaymentIntentId || "intent_token_pending", 
        collected_payload_metadata: { 
            customer_email: finalEmail, 
            customer_first_name: firstName, 
            customer_last_name: lastName, 
            customer_phone: phone, 
            timestamp_capture: localUsaStandardTimestamp 
        } 
    }; 

    // ============================================================================
    // 🗄️ CRITICAL DATABASE EXECUTION PASS: FORCES THE DATA UPDATES TO HIT SUPABASE
    // ============================================================================
    if (supabaseClient) {
        console.log("📡 [Supabase Gateway] Dispatching secure transactional payload to live table context...");
        const { error: dbUpsertError } = await supabaseClient
            .from('orders')
            .upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' });

        if (dbUpsertError) {
            throw new Error(`Pre-Sync Transaction Failed: ${dbUpsertError.message}`);
        }
        console.log("✅ [Supabase Gateway] Records successfully written to server database.");
    }

    // Cache the session layout manifest securely for Step 7 receipt loops
    sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(successReceiptManifestPayload));

    // B. SECURE STRIPE PROCESSING 
    if (window.stripeElementsContainer && window.stripeInstance && window.stripeClientSecret) { 
        console.log("[Stripe Controller] Submitting payment components schema context..."); 
        const { error: stripeSubmitError } = await window.stripeElementsContainer.submit(); 
        if (stripeSubmitError) throw stripeSubmitError; 
        
        console.log("[Stripe Controller] Launching native billing confirmation challenge over network..."); 
        const { error: confirmError } = await window.stripeInstance.confirmPayment({ 
            elements: window.stripeElementsContainer, 
            redirect: "if_required",
            confirmParams: { 
                return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`, 
                receipt_email: finalEmail
            } 
        }); 
        if (confirmError) throw confirmError; 
        
        // Immediate local panel view transition to Step 7 upon successful confirmation
        console.log("✅ [Transaction Complete] Stripe processing approved. Progressing instantly to Step 7 layout canvas...");
        localStorage.setItem("f4u_payment_status_complete", "true");

        if (typeof window.switchWizardActiveViewLayout === "function") { 
            window.switchWizardActiveViewLayout(7); 
        } else if (typeof window.executeStepLifecyclePipeline === "function") {
            window.executeStepLifecyclePipeline(7);
        }
    } else { 
        throw new Error("Stripe components uninitialized: Gateway configuration tokens missing from memory context."); 
    } 

} catch (checkoutError) { 
    console.error("[Fatal Payment Intercept Catch]", checkoutError); 
    if (errorBanner) { 
        errorBanner.style.display = "block"; 
        errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError}`; 
    } 
    if (submitBtn) submitBtn.disabled = false; 
    if (btnDefaultState) btnDefaultState.style.display = "inline-block"; 
    if (btnLoadingState) btnLoadingState.style.display = "none"; 
}



// B. SECURE STRIPE PROCESSING 
if (window.stripeElementsContainer && window.stripeInstance && window.stripeClientSecret) { 
    console.log("[Stripe Controller] Submitting payment components schema context..."); 
    const { error: stripeSubmitError } = await window.stripeElementsContainer.submit(); 
    if (stripeSubmitError) throw stripeSubmitError; 
    
    console.log("[Stripe Controller] Launching native billing confirmation challenge over network..."); 
    
    // FIXED: Suppressed hard redirects and removed broken nested billing_details configuration object to prevent 400 crashes
    const { error: confirmError } = await window.stripeInstance.confirmPayment({ 
        elements: window.stripeElementsContainer, 
        redirect: "if_required",
        confirmParams: { 
            return_url: `${window.location.origin}${window.location.pathname}?step=7&status=success&token=${uniqueTrackingToken}`, 
            receipt_email: finalEmail
        } 
    }); 
    if (confirmError) throw confirmError; 
    
    // FIXED: Successful capture immediately routes view layouts forward to the Step 7 account window
    console.log("✅ [Transaction Complete] Stripe payment verified in-line. Transitioning to step 7 receipt views...");
    localStorage.setItem("f4u_payment_status_complete", "true");

    if (typeof window.switchWizardActiveViewLayout === "function") { 
        window.switchWizardActiveViewLayout(7); 
    } else if (typeof window.executeStepLifecyclePipeline === "function") {
        window.executeStepLifecyclePipeline(7);
    } else {
        document.querySelectorAll(".wizard-panel").forEach(p => p.style.display = "none");
        const step7PanelNode = document.getElementById("step-panel-7") || document.getElementById("step-7");
        if (step7PanelNode) {
            step7PanelNode.style.setProperty("display", "block", "important");
            step7PanelNode.classList.add("active");
        }
    }

} else { 
    throw new Error("Stripe components uninitialized: Gateway configuration tokens missing from memory context."); 
} 
} catch (checkoutError) { 
    console.error("[Fatal Payment Intercept Catch]", checkoutError); 
    if (errorBanner) { 
        errorBanner.style.display = "block"; 
        errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError}`; 
    } 
    if (submitBtn) submitBtn.disabled = false; 
    if (btnDefaultState) btnDefaultState.style.display = "inline-block"; 
    if (btnLoadingState) btnLoadingState.style.display = "none"; 
} 
}; 
})();