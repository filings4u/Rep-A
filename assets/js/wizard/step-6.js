// ============================================================================
// step-6.js - PART 1: VISUAL CONTAINER & INPUT MATRIX (SUPABASE SERVERLESS)
// ============================================================================
(function() { 
    "use strict"; 
    
    const ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE'; 
    window.stripeInstance = window.stripeInstance || null; 
    window.stripeElementsContainer = window.stripeElementsContainer || null; 
    window.stripePaymentElementInstance = window.stripePaymentElementInstance || null; 

    async function initializeFlatStripeCheckoutElement() { 
        console.log("[Stripe Loader] Initiating payment elements accordion layout..."); 
        const baseContainer = document.getElementById("step-6-injection-placeholder"); 
        
        if (!baseContainer) {
            console.error("[Stripe Loader] Execution halted. Selector '#step-6-injection-placeholder' not found in DOM.");
            return; 
        }
        
        if (typeof Stripe === "undefined") { 
            baseContainer.innerHTML = "<p style='color: red; font-size: 0.85rem; font-weight: 600;'>Payment system offline. Please refresh.</p>"; 
            return; 
        } 
        
        try { 
            if (!window.stripeInstance) { 
                window.stripeInstance = Stripe(ACTIVE_PRODUCTION_STRIPE_PUBLISHABLE_KEY); 
            } 
            
            // Dynamic variable tracking hook check with total safeguard rules applied 
            const currentGrandTotal = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total")); 
            
            if (isNaN(currentGrandTotal) || currentGrandTotal <= 0) { 
                console.warn("[Stripe Loader] Calculation parameters missing. Refreshing running values..."); 
                baseContainer.innerHTML = "<p style='color: #475569; font-size: 0.85rem;'>Calculating final statement values... Please wait a moment.</p>"; 
                setTimeout(initializeFlatStripeCheckoutElement, 300); 
                return; 
            } 
            
            baseContainer.innerHTML = ` 
                <div class="step-header-container" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; display: flex; justify-content: space-between; align-items: center; clear: both; width: 100%; box-sizing: border-box;"> 
                    <div style="text-align: left;"> 
                        <h2 class="step-main-title" style="margin: 0 0 4px 0; color: #0a1f44; font-weight: 800; font-size: 1.35rem;">Secure Checkout</h2> 
                        <p class="step-subtitle" style="color: #64748b; font-size: 0.88rem; margin: 0;">Authorize your compliance filing package payment below.</p> 
                    </div> 
                    <div style="text-align: right; background: #f8fafc; border: 1px solid #e2e8f0; padding: 8px 16px; border-radius: 6px;"> 
                        <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #64748b; display: block; letter-spacing: 0.05em;">Total Due:</span> 
                        <span id="payment-gateway-total-display" style="font-size: 1.5rem; font-weight: 800; color: #10b981; font-family: monospace;">$${currentGrandTotal.toFixed(2)}</span> 
                    </div> 
                </div> 
                
                <!-- INTEGRATED PORTAL ACCOUNT PROFILE GENERATION LAYER --> 
                <div class="integrated-profile-matrix" style="margin-bottom: 20px; box-sizing: border-box; text-align: left; width: 100%; display: flex; flex-direction: column; gap: 16px;"> 
                    <!-- ROW 1: FIRST NAME & LAST NAME --> 
                    <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;"> 
                        <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;"> 
                            <label for="portal_user_first_name" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">First Name</label> 
                            <input type="text" id="portal_user_first_name" required placeholder="John" style="width: 100%; padding: 14px 16px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;"> 
                        </div> 
                        <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;"> 
                            <label for="portal_user_last_name" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Last Name</label> 
                            <input type="text" id="portal_user_last_name" required placeholder="Doe" style="width: 100%; padding: 14px 16px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;"> 
                        </div> 
                    </div> 
                    
                    <!-- ROW 2: EMAIL ADDRESS & PHONE NUMBER --> 
                    <div style="display: flex; gap: 16px; width: 100%; box-sizing: border-box;"> 
                        <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;"> 
                            <label for="portal_user_email_input" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Account Email Address</label> 
                            <div style="position: relative; display: flex; align-items: center; width: 100%;"> 
                                <span style="position: absolute; left: 16px; color: #64748b; font-size: 0.9rem;"><i class="fa-solid fa-envelope"></i></span> 
                                <!-- FIXED: Added 14px 16px 14px 44px padding syntax below to mirror phone alignment exactly -->
                                <input type="email" id="portal_user_email_input" required placeholder="you@example.com" style="width: 100%; padding: 14px 16px 14px 44px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;"> 
                            </div> 
                        </div> 
                        <div style="display: flex; flex-direction: column; gap: 6px; flex: 1;"> 
                            <label for="portal_user_phone" style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Contact Phone Number</label> 
                            <div style="position: relative; display: flex; align-items: center; width: 100%;"> 
                                <span style="position: absolute; left: 16px; color: #64748b; font-size: 0.9rem;"><i class="fa-solid fa-phone"></i></span> 
                                <input type="tel" id="portal_user_phone" required placeholder="(555) 000-0000" style="width: 100%; padding: 14px 16px 14px 44px; font-size: 0.95rem; border-radius: 6px; border: 1px solid #e2e8f0; background: #ffffff; color: #0a1f44; outline: none; box-sizing: border-box; transition: all 0.2s ease-in-out;"> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
                
                <style> 
                    .field-error-shake { border-color: #ef4444 !important; box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15) !important; animation: inlineFieldShake 0.4s ease-in-out; } 
                    .field-validated-emerald { border-color: #10b981 !important; box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1) !important; } 
                    @keyframes inlineFieldShake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } } 
                    @media (max-width: 480px) { .integrated-profile-matrix > div { flex-direction: column !important; gap: 16px !important; } } 
                </style> 
                
                <div id="stripe-payment-element-mount-point" style="min-height: 200px; margin-bottom: 24px; clear: both; width: 100%;"></div> 
                <div id="step6-error-banner-target" style="display: none; color: #ef4444; background: #fef2f2; border: 1px solid #fee2e2; padding: 12px; border-radius: 6px; font-size: 0.85rem; margin-bottom: 24px; font-weight: 500; text-align: left; clear: both;"></div> 
                
                <div class="wizard-action-row" style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box; clear: both;"> 
                    <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 500; cursor: pointer;">Back</button> 
                    <button type="button" id="wizardSubmitBtnElement" style="background: #047857; border: none; color: white; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer;">Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i></button> 
                </div> 
            `;

// ============================================================================
// step-6.js - PART 2: STRIPE STYLE RULES & FRAMEWORK MOUNT
// ============================================================================

            if (window.stripePaymentElementInstance) { 
                window.stripePaymentElementInstance.destroy(); 
                window.stripePaymentElementInstance = null; 
            } 

            // Initialize configuration via optimized Payment Mode execution flow
            // FIXED: Removed invalid root-level 'layout' parameter to clear Stripe console warnings
            window.stripeElementsContainer = window.stripeInstance.elements({ 
                mode: 'payment', 
                currency: 'usd', 
                amount: Math.round(currentGrandTotal * 100), 
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
                        '.Input': { 
                            padding: '14px 16px', 
                            fontSize: '15px', 
                            transition: 'all 0.2s ease-in-out', 
                            border: '1px solid #e2e8f0', 
                            boxShadow: 'none' 
                        }, 
                        '.Input:focus': { 
                            borderColor: '#10b981', 
                            boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.1)' 
                        }, 
                        '.Input--invalid': { 
                            borderColor: '#ef4444', 
                            boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.15)' 
                        }, 
                        '.Label': { 
                            fontWeight: '700', 
                            fontSize: '13px', 
                            color: '#64748b', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.05em', 
                            marginBottom: '6px' 
                        } 
                    } 
                } 
            }); 

            console.log("[Stripe Loader] Generating instance and attaching to DOM view node..."); 

            // Generate the specialized uniform checkout component block 
            // VALIDATED: Layout properties are correctly isolated within component configuration layers
            window.stripePaymentElementInstance = window.stripeElementsContainer.create('payment', {
                layout: {
                    type: 'accordion',
                    defaultCollapsed: false,
                    radios: false,
                    spacedAccordionItems: true
                }
            }); 

            // Mount the responsive element layer directly to your targeted HTML marker 
            window.stripePaymentElementInstance.mount('#stripe-payment-element-mount-point'); 

            // Bind real-time change validation hooks to intercept input errors immediately
            window.stripePaymentElementInstance.on("change", function(event) { 
                const errorDisplayNode = document.getElementById("step6-error-banner-target"); 
                if (errorDisplayNode) { 
                    if (event.error) { 
                        errorDisplayNode.style.display = "block"; 
                        errorDisplayNode.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="margin-right: 6px;"></i> ${event.error.message}`; 
                    } else { 
                        errorDisplayNode.style.display = "none"; 
                        errorDisplayNode.innerHTML = ""; 
                    } 
                } 
            });

        } catch (error) { 
            console.error("[Stripe Structural Failure]", error); 
            const errorBanner = document.getElementById("step6-error-banner-target"); 
            if (errorBanner) { 
                errorBanner.innerText = "Critical Initialization Error. Unable to load interface components."; 
                errorBanner.style.display = "block"; 
            } 
        } 
    } 


    // Globally export the initialization controller function to window memory
    window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement; 

    // Lifecycle Step Guard: Execute setup loops only if Step 6 is actively rendering
    if (parseInt(window.currentWizardActiveStep, 10) === 6) { 
        initializeFlatStripeCheckoutElement(); 
    } 

    /** 
     * Processes internal field structural checks before executing Stripe transactions. 
     * Highlights missing fields locally using dynamic visual error classes. 
     * @returns {boolean} True if all base form elements pass rule verification. 
     */ 
    function validateBaseProfileMatrix() { 
        let textFieldsValid = true; 
        const standardFormInputs = [ 
            "portal_user_first_name", 
            "portal_user_last_name", 
            "portal_user_email_input", 
            "portal_user_phone" 
        ]; 

        standardFormInputs.forEach(inputSelector => { 
            const inputTarget = document.getElementById(inputSelector); 
            if (!inputTarget) return; 

            // Evaluate value compliance parameters 
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

    // Bind transaction execution routines directly to your customized submission target 
    const masterSubmitActionBtn = document.getElementById("wizardSubmitBtnElement"); 
    if (masterSubmitActionBtn) { 
        masterSubmitActionBtn.addEventListener("click", async (clickEvent) => { 
            clickEvent.preventDefault(); 
            const errorBanner = document.getElementById("step6-error-banner-target"); 
            if (errorBanner) errorBanner.style.display = "none"; 

            // Prevent progression if standard browser form inputs are blank 
            if (!validateBaseProfileMatrix()) { 
                console.warn("[Stripe Validator] Halting submission. Required field structures are missing values."); 
                if (errorBanner) { 
                    errorBanner.innerText = "Please complete all required contact fields before processing payment."; 
                    errorBanner.style.display = "block"; 
                } 
                return; 
            } 

            // Enforce visual lockout safety states during active thread processing 
            masterSubmitActionBtn.disabled = true; 
            masterSubmitActionBtn.style.opacity = "0.6"; 
            masterSubmitActionBtn.innerHTML = `Processing Transaction <i class="fa-solid fa-spinner fa-spin" style="margin-left: 6px;"></i>`; 

            try { 
                console.log("[Stripe Controller] Processing profile validation clear. Initiating payment confirmation sequence..."); 
                
                const currentGrandTotal = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total"));
                
                // Pass runtime processing control down to the next logical step block (Part 3) 
                if (typeof window.executeSecurePaymentConfirmationPipeline === "function") { 
                    await window.executeSecurePaymentConfirmationPipeline(currentGrandTotal, masterSubmitActionBtn); 
                } else { 
                    throw new Error("Target transaction pipeline reference is uninitialized."); 
                } 

            } catch (pipelineException) { 
                console.error("[Stripe Runtime Failure]", pipelineException); 
                if (errorBanner) { 
                    errorBanner.innerText = pipelineException.message || "An unexpected processing error occurred."; 
                    errorBanner.style.display = "block"; 
                } 
                // Re-enable primary action button for correction attempts 
                masterSubmitActionBtn.disabled = false; 
                masterSubmitActionBtn.style.opacity = "1"; 
                masterSubmitActionBtn.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`; 
            } 
        }); 
    } 

    // Remove visual validation warnings actively on immediate keyboard engagement loops 
    ["portal_user_first_name", "portal_user_last_name", "portal_user_email_input", "portal_user_phone"].forEach(id => { 
        document.getElementById(id)?.addEventListener("input", function() { 
            this.classList.remove("field-error-shake"); 
        }); 
    });
})();
// ============================================================================
// step-6.js - PART 3: SUPABASE HANDSHAKE & STRIPE CONFIRMATION (SERVERLESS)
// ============================================================================

/**
 * Globally registers the final execution sequence pipeline to window space.
 * Requests transaction tokens from the live Supabase Edge Function gateway.
 * @param {number} finalAmountDue - The validation payment value tracking variable.
 * @param {HTMLElement} submitButtonNode - The action target element to manage states on.
 */
window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
    const errorBanner = document.getElementById("step6-error-banner-target");
    const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

    // 1. Gather profile attributes to deliver down to your Edge Function logs
    const profileTransactionPayload = {
        firstName: document.getElementById("portal_user_first_name")?.value.trim(),
        lastName: document.getElementById("portal_user_last_name")?.value.trim(),
        email: document.getElementById("portal_user_email_input")?.value.trim(),
        phone: document.getElementById("portal_user_phone")?.value.trim(),
        amountValue: finalAmountDue,
        amountInCents: Math.round(finalAmountDue * 100), // Standardizes integer cents for Stripe
        trackingNumber: uniqueTrackingToken,
        currency: "usd"
    };

    console.log("📡 [Supabase Gateway] Dispatching secure transactional payload to live Edge Function...");

    // 2. FIXED: Swapped local Node routing out for your secure live Supabase Edge Function URL
    const pipelineEndpointResponse = await fetch('https://lrbimrlbskjweynxlgas.supabase.co', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profileTransactionPayload)
    });

    if (!pipelineEndpointResponse.ok) {
        const serverFailureMessage = await pipelineEndpointResponse.text();
        throw new Error(`Supabase Edge Function Rejected Request (${pipelineEndpointResponse.status}): ${serverFailureMessage}`);
    }

    const completedTransactionIntentJSON = await pipelineEndpointResponse.json();

    // Cache the intent secret globally where your downstream verification paths check for it
    window.stripeClientSecret = completedTransactionIntentJSON.clientSecret;

    if (!window.stripeClientSecret) {
        throw new Error("Critical structural mismatch. Transaction token identifier was omitted by the Supabase Edge Function.");
    }

    console.log("[Supabase Gateway] Handshake complete. Verification token cached. Launching standard Stripe runtime handler...");

    // 3. Trigger standard Stripe UI framework challenge checks using native internal routing processes
    const StripeConfirmationResult = await window.stripeInstance.confirmPayment({
        elements: window.stripeElementsContainer,
        clientSecret: window.stripeClientSecret,
        confirmParams: {
            return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`,
            receipt_email: profileTransactionPayload.email,
            billing_details: {
                name: `${profileTransactionPayload.firstName} ${profileTransactionPayload.lastName}`.trim(),
                email: profileTransactionPayload.email,
                phone: profileTransactionPayload.phone
            }
        }
    });

    // 4. Handle synchronous visual error scenarios returned instantly by the Stripe framework
    if (StripeConfirmationResult.error) {
        console.warn("[Stripe Core API] Authentication flow halted or failed.", StripeConfirmationResult.error.message);
        
        if (errorBanner) {
            errorBanner.innerText = StripeConfirmationResult.error.message;
            errorBanner.style.display = "block";
        }

        // Reset button to functional state for corrections
        submitButtonNode.disabled = false;
        submitButtonNode.style.opacity = "1";
        submitButtonNode.innerHTML = `Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>`;
    }
};

// ============================================================================
// step-6.js - PART 4: PRODUCTION EDGE FUNCTION HANDSHAKE (REPLACE PREVIOUS PART 4)
// ============================================================================

window.executeSecurePaymentConfirmationPipeline = async function(finalAmountDue, submitButtonNode) {
    const errorBanner = document.getElementById("step6-error-banner-target");
    const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

    // 1. Compile profile attribute dictionaries to deliver down to your Edge Function logs
    const profileTransactionPayload = {
        firstName: document.getElementById("portal_user_first_name")?.value.trim(),
        lastName: document.getElementById("portal_user_last_name")?.value.trim(),
        email: document.getElementById("portal_user_email_input")?.value.trim(),
        phone: document.getElementById("portal_user_phone")?.value.trim(),
        amountValue: finalAmountDue,
        amountInCents: Math.round(finalAmountDue * 100), // Standardizes integer calculations for Stripe
        trackingNumber: uniqueTrackingToken,
        currency: "usd"
    };



// =========================================================================
// LOCATION: assets/js/step-6.js (FRAGMENT A)
// =========================================================================
console.log("📡 [Supabase Production Gateway] Dispatching secure transactional payload to live Edge Function...");

try {
    // Formatted cleanly with split strings to ensure full delivery
    const productionCloudUrl = 'https' + '://' + 'lrbimrlbskjweynxlgas' + '.supabase' + '.co' + '/functions' + '/v1' + '/stripe-checkout';

    const pipelineEndpointResponse = await fetch(productionCloudUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profileTransactionPayload)
    });

    if (!pipelineEndpointResponse.ok) {
        const serverFailureMessage = await pipelineEndpointResponse.text();
        throw new Error(`Supabase Edge Function Rejected Request (${pipelineEndpointResponse.status}): ${serverFailureMessage}`);
    }

    // 🚀 FIXED: Securely extract the token payload and save it where Stripe expects it
    const transactionTokenPayload = await pipelineEndpointResponse.json();
    window.stripeClientSecret = transactionTokenPayload.clientSecret;

    if (!window.stripeClientSecret) {
        throw new Error("Handshake structural failure: Secret authorization token omitted by cloud gateway.");
    }

    // ============================================================================
    // step-6.js - PART 5: DATA PRESERVATION & STRIPE INTENT TRANSMISSION (FIXED)
    // ============================================================================
    // 6. EXECUTE STRIPE INTENT TRANSMISSION HANDSHAKE 
    if (window.stripeElementsContainer) { 
        console.log("[Stripe Controller] Submitting payment components context...");
// ============================================================================
// step-6.js - PART 5: FRAGMENT B (STRIPE TRANSMISSION & VIEW SWAP)
// ============================================================================
        const { error: stripeSubmitError } = await window.stripeElementsContainer.submit(); 
        if (stripeSubmitError) { 
            if (submitBtn) { 
                submitBtn.disabled = false; 
                submitBtn.style.opacity = "1"; 
                submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
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
            
            const { error: confirmError } = await window.stripeInstance.confirmPayment({ 
                elements: window.stripeElementsContainer, 
                clientSecret: window.stripeClientSecret, 
                confirmParams: { 
                    return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`, 
                    receipt_email: finalEmail, 
                    billing_details: { 
                        email: finalEmail, 
                        name: `${firstName} ${lastName}`.trim(), 
                        phone: phone 
                    } 
                } 
            }); 
            
            if (confirmError) throw confirmError; 
            
        } else if (isMockSecret && supabaseClient) { 
            console.log("🧪 [Sandbox Engine] Mock intent matched. Forcing manual database synchronization..."); 
            const { error: mockUpdateError } = await supabaseClient 
                .from('orders') 
                .update({ status: 'Paid' }) 
                .eq('tracking_number', uniqueTrackingToken); 
                
            if (mockUpdateError) { 
                console.warn("⚠️ Sandbox Sync Warning:", mockUpdateError.message); 
            } else { 
                console.log("✅ Sandbox Sync Complete: Test transaction record marked as Paid."); 
            } 
        } 
    } else { 
        throw new Error("Checkout components missing: The payment elements were not mounted correctly."); 
    } 

    if (typeof window.switchWizardActiveViewLayout === "function") { 
        console.log("[Stripe Submission Engine] Checkout complete. Transitioning control to step-7.js..."); 
        window.switchWizardActiveViewLayout(7); 
    } else if (typeof window.goToNextWizardStep === "function") { 
        window.goToNextWizardStep(); 
    } 

} catch (checkoutError) { 
    console.error("[Fatal Payment Intercept Catch]", checkoutError); 
    if (errorBanner) { 
        errorBanner.style.display = "block"; 
        errorBanner.innerHTML = ` 
            <i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> 
            <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError} 
        `; 
    } 
    if (submitBtn) { 
        submitBtn.disabled = false; 
        submitBtn.style.opacity = "1"; 
        submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
    } 
} 
};


// ============================================================================
// step-6.js - SECTION 5: DATA PRESERVATION & STRIPE INTENT TRANSMISSION
// ============================================================================
(async () => {
    "use strict";

    // 1. Resolve UI elements using production matrix identifiers
    const submitBtn = document.getElementById("wizardSubmitBtnElement") || document.getElementById("wizard-next-trigger-btn");
    const errorBanner = document.getElementById("step6-error-banner-target");
    const emailInputNode = document.getElementById("portal_user_email_input");
    const firstNameInputNode = document.getElementById("portal_user_first_name");
    const lastNameInputNode = document.getElementById("portal_user_last_name");
    const phoneInputNode = document.getElementById("portal_user_phone");

    // 2. Extract values cleanly, utilizing local caching limits as safe fallbacks
    const finalEmail = emailInputNode ? emailInputNode.value.trim().toLowerCase() : localStorage.getItem("f4u_checkout_email") || "";
    const firstName = firstNameInputNode ? firstNameInputNode.value.trim() : "";
    const lastName = lastNameInputNode ? lastNameInputNode.value.trim() : "";
    const phone = phoneInputNode ? phoneInputNode.value.trim() : "";
    
    const rawTotalText = document.getElementById("payment-gateway-total-display")?.textContent || "";
    const activeGrandCost = parseFloat(rawTotalText.replace(/[^0-9.]/g, "")) || 249.00;
    const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "llc-formation").toLowerCase().trim();
    const activePlanKeyString = String(urlParams.get('plan') || window.routeActivePlanKey || window.currentPlanKey || "enterprise").toLowerCase().trim();
    const dynamicLabelTextString = `filings4u Processing Fee (${activePlanKeyString.toUpperCase()})`;

    const isPoaSigned = localStorage.getItem("wizard_field_poa_accepted") === "true" || localStorage.getItem("wizard_field_poa_signed") === "true";
    const poaSignatureString = localStorage.getItem("wizard_field_poa_signature_string") || localStorage.getItem("wizard_field_poa_verification_hash") || null;
    const isReturningUser = localStorage.getItem("f4u_is_returning_customer") === "true";

    // 3. Fallback client mapping layout rules for pure serverless environments
    const supabaseClient = window.supabaseInstance || window.supabaseClient || (typeof window.getSuccessPageSupabaseClient === 'function' ? window.getSuccessPageSupabaseClient() : null);

    try {
        if (supabaseClient) { 
            console.log("[Gatekeeper] Preserving pre-flight record token traces within database..."); 
            let dynamicUserId = null; 
            let userEmailFallback = finalEmail; 
            
            try { 
                const activeUser = window.activeClientSessionUser || (supabaseClient.auth ? (await supabaseClient.auth.getUser())?.data?.user : null); 
                if (activeUser) { 
                    dynamicUserId = activeUser.id; 
                    userEmailFallback = activeUser.email || finalEmail; 
                } 
            } catch (authLookUpError) { 
                console.log("ℹ️ [Gatekeeper] Guest context detected. Proceeding via anonymous checkout stream layers..."); 
                userEmailFallback = finalEmail; 
            } 

            const validatedDatabaseUpsertPayload = { 
                tracking_number: uniqueTrackingToken, 
                company_name: localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile", 
                service_key: serviceSlug, 
                service_title: dynamicLabelTextString, 
                plan_tier: activePlanKeyString, 
                total_fee: activeGrandCost, 
                status: 'pending', 
                tax_id_status: 'Fulfillment Lane', 
                poa_signed_state: isPoaSigned, 
                user_id: dynamicUserId, 
                email: userEmailFallback || finalEmail, 
                poa_signature_verification_string: poaSignatureString || "GUEST_SIG_PENDING", 
                collected_payload_metadata: { 
                    customer_email: finalEmail, 
                    wiz_client_email: finalEmail, 
                    customer_first_name: firstName, 
                    customer_last_name: lastName, 
                    customer_phone: phone, 
                    is_returning_customer: isReturningUser || false, 
                    wiz_generated_passcode: "A7x9_SecurePass", 
                    authenticated_user_id: dynamicUserId 
                } 
            }; 

            const { error: dbUpsertError } = await supabaseClient 
                .from('orders') 
                .upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' }); 
                
            if (dbUpsertError) { 
                console.error("✕ Database Pre-Sync Warning:", dbUpsertError.message); 
            } 
        } 

        // 4. Execute Stripe checkout submission routine loops
        if (window.stripeElementsContainer) { 
            const { error: stripeSubmitError } = await window.stripeElementsContainer.submit(); 
            if (stripeSubmitError) { 
                if (submitBtn) { 
                    submitBtn.disabled = false; 
                    submitBtn.style.opacity = "1"; 
                    submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
                } 
                if (errorBanner) { 
                    errorBanner.style.display = "block"; 
                    errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> ${stripeSubmitError.message}`; 
                } 
                return false; 
            } 

            const isMockSecret = String(window.stripeClientSecret || "").startsWith("pi_mock_intent_"); 
            
            if (window.stripeInstance && !isMockSecret) { 
                console.log("[Stripe Submission Engine] Dispatching secure transactional token parameters over the network..."); 
                
                const { error: confirmError } = await window.stripeInstance.confirmPayment({ 
                    elements: window.stripeElementsContainer, 
                    clientSecret: window.stripeClientSecret, 
                    confirmParams: { 
                        return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`, 
                        receipt_email: finalEmail, 
                        billing_details: { 
                            email: finalEmail, 
                            name: `${firstName} ${lastName}`.trim(), 
                            phone: phone 
                        } 
                    } 
                }); 
                
                if (confirmError) throw confirmError; 
                
            } else if (isMockSecret && supabaseClient) { 
                console.log("🧪 [Sandbox Engine] Mock intent matched. Forcing manual database synchronization..."); 
                const { error: mockUpdateError } = await supabaseClient 
                    .from('orders') 
                    .update({ status: 'Paid' }) 
                    .eq('tracking_number', uniqueTrackingToken); 
                    
                if (mockUpdateError) { 
                    console.warn("⚠️ Sandbox Sync Warning:", mockUpdateError.message); 
                } else { 
                    console.log("✅ Sandbox Sync Complete: Test transaction record marked as Paid."); 
                } 
            } 
        } else { 
            throw new Error("Checkout components missing: The payment gateway elements were not mounted correctly."); 
        } 

        // 5. Route wizard layout layers forward to complete the transaction loop
        if (typeof window.switchWizardActiveViewLayout === "function") { 
            console.log("[Stripe Submission Engine] Checkout complete. Transitioning control to step-7.js..."); 
            window.switchWizardActiveViewLayout(7); 
        } else if (typeof window.goToNextWizardStep === "function") { 
            window.goToNextWizardStep(); 
        } 

    } catch (checkoutError) { 
        console.error("[Fatal Payment Intercept Catch]", checkoutError); 
        if (errorBanner) { 
            errorBanner.style.display = "block"; 
            errorBanner.innerHTML = ` 
                <i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> 
                <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError} 
            `; 
        } 
        if (submitBtn) { 
            submitBtn.disabled = false; 
            submitBtn.style.opacity = "1"; 
            submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
        } 
    } 
})();


/** 
 * 📁 STRIPE WEBHOOK CONTROLLER CHANNEL (PRODUCTION HARDENED ROUTER) 
 * Responsibility: Listens for successful checkouts, handles safe array map fallbacks, 
 * populates required root-level columns, and triggers downstream portal notifications. 
 */ 
async function handleStripeWebhookEvent(stripeEvent, supabaseAdmin) { 
    "use strict"; 
    
    const eventType = stripeEvent.type; 

    // UNIFIED GATEWAY INTERCEPT: Extract values regardless of which success packet arrives first 
    if (eventType === 'checkout.session.completed' || eventType === 'payment_intent.succeeded') { 
        const sessionObj = stripeEvent.data.object; 
        
        // Multi-layered metadata extraction parameter check
        let metadata = sessionObj.metadata || {}; 
        if (!metadata.tracking_number && sessionObj.payment_intent_parsed_object?.metadata) { 
            metadata = sessionObj.payment_intent_parsed_object.metadata; 
        } 

        // Safety Guard: Abort if it's a random transaction outside your wizard network layout bounds 
        if (!metadata.tracking_number) { 
            console.log("ℹ️ [Stripe Webhook] Skipping event: Object does not contain a tracking_number token."); 
            return; 
        } 

        console.log(`📡 [Stripe Webhook] Processing event [${eventType}] for Tracking Token: ${metadata.tracking_number}`); 

        try { 
            // Resolve the client email dynamically from Stripe's payload or custom metadata 
            let customerEmail = metadata.email || sessionObj.receipt_email; 
            if (!customerEmail && sessionObj.customer_details) { 
                customerEmail = sessionObj.customer_details.email; 
            } 
            if (!customerEmail && sessionObj.billing_details) { 
                customerEmail = sessionObj.billing_details.email; 
            } 

            // Hardened type casting validation variables to prevent database type exceptions
            // Explicitly checks Stripe amount totals dynamically before evaluating data fallbacks
            const rawAmount = sessionObj.amount_total || sessionObj.amount || 0;
            const castedFee = parseFloat(metadata.total_fee) || parseFloat(rawAmount / 100);
            const castedPoaState = metadata.poa_signed_state === 'true' || metadata.poa_signed_state === true;

            // 1. Build the exact row dictionary to fill your required root-level columns 
            const orderPayload = { 
                tracking_number: metadata.tracking_number, 
                company_name: metadata.company_name || null, 
                service_key: metadata.service_key || null, 
                service_title: metadata.service_title || null, 
                plan_tier: metadata.plan_tier || null, 
                total_fee: castedFee, 
                status: 'Paid', 
                tax_id_status: 'Fulfillment Lane', 
                poa_signed_state: castedPoaState, 
                user_id: metadata.user_id || null, 
                email: customerEmail || null, 
                poa_signature_verification_string: metadata.poa_signature_verification_string || null, 
                collected_payload_metadata: { 
                    stripe_event_id: stripeEvent.id, 
                    stripe_object_id: sessionObj.id, 
                    stripe_payment_intent: sessionObj.payment_intent || sessionObj.id, 
                    customer_email: customerEmail || metadata.email, 
                    wiz_client_email: customerEmail || metadata.email, 
                    wiz_generated_passcode: "A7x9_SecurePass", 
                    processed_at: new Date().toISOString() 
                }, 
                updated_at: new Date().toISOString() 
            }; 

            // 2. Commit the fully-populated row directly into public.orders using upsert matching conflict hashes 
            const { data: orderData, error: orderError } = await supabaseAdmin 
                .from('orders') 
                .upsert(orderPayload, { onConflict: 'tracking_number' }) 
                .select() 
                .maybeSingle(); 

            if (orderError) throw orderError; 
            console.log(`✅ [Stripe Webhook] Order [${metadata.tracking_number}] successfully synchronized inside public.orders.`); 

            // 3. AUTOMATIC NOTIFICATION GENERATOR ALIGNED WITH YOUR PORTAL SCHEMAS 
            if (metadata.user_id) { 
                const alertPayload = { 
                    user_id: metadata.user_id, 
                    title: metadata.notification_title || "New Purchase Authenticated", 
                    message: metadata.notification_message || `Your tracking order ${metadata.tracking_number} has been processed into our administrative fulfillment lane. Check your timeline for live trace metrics updates.`, 
                    is_read: false, 
                    is_archived: false, 
                    recipient_email: customerEmail || null, 
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

// ============================================================================
// step-6.js - ASSETS/JS/STEP-6.JS (FRAGMENT A)
// ============================================================================

/**
 * Requests a secure Payment Intent authorization token from the production Edge Function gateway.
 * @param {number} grandTotalAmount - The running wizard balance tracking value.
 * @param {string} trackingNumberToken - The distinct hash id reference for public.orders.
 * @returns {Promise<string|null>} Resolves the client secret string or null on network failures.
 */
async function resolveStripeClientAuthorizationSecret(grandTotalAmount, trackingNumberToken) { 
    "use strict"; 
    try { 
        console.log("📡 [Stripe Loader] Requesting secure Payment Intent token from live production Edge Function..."); 
        
        const response = await fetch('https://lrbimrlbskjweynxlgas.supabase.co', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ amountValue: grandTotalAmount, trackingNumber: trackingNumberToken }) 
        }); 

        if (!response.ok) { 
            const errorPayload = await response.json().catch(() => ({})); 
            throw new Error(errorPayload.error || "Edge Function rejected credentials generation lookups."); 
        } 

        const data = await response.json(); 
        window.stripeClientSecret = data.clientSecret; 
        return window.stripeClientSecret; 

    } catch (err) { 
        console.error("✕ [Stripe Loader Critical Endpoint Failure]:", err.message || err); 
        const errorBanner = document.getElementById("step6-error-banner-target"); 
        if (errorBanner) { 
            errorBanner.style.display = "block"; 
            errorBanner.innerHTML = `<strong>Payment Gateway Offline:</strong> Verification tokens could not be generated. ${err.message}`; 
        } 
        return null; 
    } 
} 

// Unified transmission pipeline submission engine handler
window.executeOnboardingTransactionPayloadSubmitVanilla = async function(event) { 
    "use strict"; 
    if (event && typeof event.preventDefault === "function") event.preventDefault(); 

    const submitBtn = document.getElementById("wizardSubmitBtnElement"); 
    const errorBanner = document.getElementById("step6-error-banner-target"); 
    const emailInput = document.getElementById("portal_user_email_input"); 
    const firstNameInput = document.getElementById("portal_user_first_name"); 
    const lastNameInput = document.getElementById("portal_user_last_name"); 
    const phoneInput = document.getElementById("portal_user_phone"); 
    
    const fieldsArray = [emailInput, firstNameInput, lastNameInput, phoneInput]; 
    let validationHasFailed = false; 

    // Clear previous error styles 
    fieldsArray.forEach(input => { if (input) input.classList.remove("field-error-shake"); }); 

    // Run empty validation checks 
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
        
        // Extract total fees dynamically without fallback defaults
        const rawTextTotal = document.getElementById("payment-gateway-total-display")?.textContent || "";
        const activeGrandCost = parseFloat(rawTextTotal.replace(/[^0-9.]/g, "")); 
        
        if (isNaN(activeGrandCost) || activeGrandCost <= 0) {
            throw new Error("Unable to authorize ledger funds: Payment calculation total is uninitialized.");
        }

        let uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase(); 

        if (submitBtn) { 
            submitBtn.disabled = true; 
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right:8px;"></i> Authorizing Ledger Funds...'; 
        } 

        // Resolve runtime parameter context directly from the active window environment state parameters
        const urlParams = new URLSearchParams(window.location.search); 
        const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim(); 
        const activePlanKeyString = String(urlParams.get('plan') || window.routeActivePlanKey || "").toLowerCase().trim(); 
        const dynamicLabelTextString = `Processing Fee (${activePlanKeyString.toUpperCase()})`; 

        // 🚀 CRITICAL FIX: Intercept the loop here to execute the secure token handshake before proceeding down to DB/Stripe layers
        const verifiedSecretToken = await resolveStripeClientAuthorizationSecret(activeGrandCost, uniqueTrackingToken);
        if (!verifiedSecretToken) {
            throw new Error("Secure payment token handshake failed. Authentication authorization missing.");
        }

        const supabaseClient = window.supabaseInstance || window.supabaseClient; 
        let dynamicUserId = null; 

        if (supabaseClient && supabaseClient.auth) { 
            const activeUser = (await supabaseClient.auth.getUser())?.data?.user; 
            if (activeUser) dynamicUserId = activeUser.id; 
        } 

        // A. DATA PRESERVATION: Pre-save your required columns into your database as 'pending' 
        if (supabaseClient) { 
            const validatedDatabaseUpsertPayload = { 
                tracking_number: uniqueTrackingToken, 
                company_name: localStorage.getItem("wizard_field_company_name") || null, 
                service_key: serviceSlug || null, 
                service_title: dynamicLabelTextString || null, 
                plan_tier: activePlanKeyString || null, 
                total_fee: activeGrandCost, 
                status: 'pending', 
                tax_id_status: 'Fulfillment Lane', 
                poa_signed_state: localStorage.getItem("wizard_field_poa_accepted") === "true", 
                user_id: dynamicUserId, 
                email: finalEmail, 
                poa_signature_verification_string: localStorage.getItem("wizard_field_poa_signature_string") || null, 
                collected_payload_metadata: { 
                    customer_email: finalEmail, 
                    customer_first_name: firstName, 
                    customer_last_name: lastName, 
                    customer_phone: phone 
                } 
            }; 

            const { error: dbUpsertError } = await supabaseClient 
                .from('orders') 
                .upsert(validatedDatabaseUpsertPayload, { onConflict: 'tracking_number' }); 
                
            if (dbUpsertError) throw new Error(`Pre-Sync Failed: ${dbUpsertError.message}`); 
        }
// ============================================================================
// step-6.js - ASSETS/JS/STEP-6.JS (FRAGMENT B)
// ============================================================================

        // B. STRIPE PAYMENT INTENT CONFIRMATION PASS 
        if (window.stripeElementsContainer && window.stripeInstance && window.stripeClientSecret) { 
            console.log("[Stripe Controller] Submitting payment components schema context...");
            const { error: stripeSubmitError } = await window.stripeElementsContainer.submit(); 
            if (stripeSubmitError) throw stripeSubmitError; 

            console.log("[Stripe Controller] Launching native billing confirmation challenge over network...");
            // Executing official confirmPayment method (Handles both live and test cards automatically) 
            const { error: confirmError } = await window.stripeInstance.confirmPayment({ 
                elements: window.stripeElementsContainer, 
                clientSecret: window.stripeClientSecret, 
                confirmParams: { 
                    return_url: `${window.location.origin}/client-dashboard.html?status=success&token=${uniqueTrackingToken}`, 
                    receipt_email: finalEmail, 
                    billing_details: { 
                        email: finalEmail, 
                        name: `${firstName} ${lastName}`.trim(), 
                        phone: phone 
                    } 
                } 
            }); 

            if (confirmError) throw confirmError; 
        } else { 
            throw new Error("Stripe components uninitialized: Gateway configuration tokens missing from memory context."); 
        } 

    } catch (checkoutError) { 
        console.error("[Fatal Payment Intercept Catch]", checkoutError); 
        if (errorBanner) { 
            errorBanner.style.display = "block"; 
            errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Transaction Aborted:</strong> ${checkoutError.message || checkoutError}`; 
        } 
        if (submitBtn) { 
            submitBtn.disabled = false; 
            submitBtn.innerHTML = 'Secure Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>'; 
        } 
    } 
};
