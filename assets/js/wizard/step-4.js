// ============================================================================ //
// 🖋️ PART 1 OF 3: STEP 4 VALIDATION MATRIX CORE                               //
// ============================================================================ //

/**
 * filings4u, LLC - Power of Attorney Execution Matrix Engine
 * Validates signature input parameters and manages button states.
 */
function evaluatePoaInputStateMatrix() {
    console.log("[POA Matrix] Evaluating Step 4 digital signature states...");

    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
    const consentCheckbox = document.getElementById("poa_consent_checkbox");
    const nextStepButton = document.getElementById("poa-next-btn") || 
                           document.querySelector("#step-panel-4 .btn-wizard-main") || 
                           document.querySelector("button[onclick*='goToNextWizardStep(5)']");

    // Protection Gate: If Step 4 is hidden or unmounted, clear the check right away
    if (!signatureInput && !consentCheckbox) {
        console.log("[POA Matrix Bypass] Step 4 fields not detected yet. Clearing validation gate.");
        return true;
    }

    let isSignatureValid = false;
    let isConsentChecked = false;

    // Validation Criteria: Must contain at least a first and last name (separated by space)
    if (signatureInput) {
        const signatureText = signatureInput.value.trim();
        if (signatureText.length >= 2 && signatureText.includes(" ")) {
            isSignatureValid = true;
        }
    } else {
        isSignatureValid = true;
    }

    if (consentCheckbox) {
        isConsentChecked = consentCheckbox.checked;
    }

    // Matrix Enforcement Gate Check
    if (nextStepButton) {
        if (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa) {
            nextStepButton.disabled = false;
            nextStepButton.style.opacity = "1";
            nextStepButton.style.cursor = "pointer";
        } else {
            nextStepButton.disabled = true;
            nextStepButton.style.opacity = "0.5";
            nextStepButton.style.cursor = "not-allowed";
        }
    }

    return (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa);
}

window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;

// ============================================================================ //
// 🖋️ PART 2 OF 3: THE CANVAS TEMPLATE GENERATOR                               //
// ============================================================================ //

/**
 * Programmatically builds the digital signature Power of Attorney layout framework.
 */
window.initCursiveSignatureCaptureLivePreview = function() {
    console.log("[POA Engine] Initializing digital signature preview canvas...");

    const step4PanelContainer = document.getElementById("step-panel-4") || document.getElementById("step-4");
    if (!step4PanelContainer) {
        console.warn("[POA Engine Warning] Step 4 container wrapper missing from DOM.");
        return;
    }

    if (document.getElementById("poa_typed_signature")) {
        evaluatePoaInputStateMatrix();
        return;
    }

    window.hasUserScrolledToBottomPoa = false;

    // Compile layout structures onto screen canvas matrix natively
    step4PanelContainer.innerHTML = `
    <div class="step-panel-form-card" style="width: 100%; display: flex; flex-direction: column; gap: 20px; box-sizing: border-box; text-align: left;">
        
        <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 4px;">
            <h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; margin: 0 0 6px 0;">4. Power of Attorney & Digital Execution</h3>
            <p style="color: #64748b; font-size: 0.88rem; margin: 0; line-height: 1.4;">Authorize legal filing dispatch actions to complete your regulatory setup registration profile parameters securely.</p>
        </div>

        <!-- INFORMATIONAL TOOLTIP GUIDE BANNER -->
     <div class="runtime-state-fee-notice-card" style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #10b981; border-radius: 8px; padding: 14px 16px; margin-top: 16px; display: flex; align-items: center; text-align: left; box-sizing: border-box; width: 100%;">
  <div style="display: flex; align-items: center; gap: 10px; color: #475569; font-size: 0.825rem; font-weight: 600; line-height: 1.4;">
    <span style="color: #10b981; font-size: 1rem;"><i class="fa-solid fa-circle-info"></i></span>
    <span><strong>Action Required:</strong> Please scroll down to the bottom of the legal mandate document below to unlock consent fields.</span>
  </div>
</div>


        <!-- SCROLL-BOX INNER TEXT CONTENT HOLDER -->
        <div id="poa-scroll-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 0.85rem; color: #334155; line-height: 1.6; max-height: 220px; overflow-y: scroll; font-family: system-ui, sans-serif; text-align: justify; margin-bottom: 4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); box-sizing: border-box; width: 100%;">
            LIMITED POWER OF ATTORNEY &amp; CORPORATE AGENCY AGREEMENT<br><br>
            WHEREAS, the undersigned Principal does hereby nominatively appoint, designate, and empower filings4u, LLC, an Illinois limited liability company, along with its authorized operational agents, officers, employees, and designees, as its true and lawful Attorney-in-Fact and Corporate Agent in accordance with the strict terms and limitations set forth herein.<br><br>
            <strong>1. EXPRESS LIMITED SCOPE OF APPOINTMENT</strong><br>
            The scope of this appointment is strictly restricted and expressly limited to administrative, regulatory, and compliance-related document processing. The Attorney-in-Fact is granted the authority to execute, sign, modify, amend, submit, and process applications, registrations, forms, and renewals across Corporate Management, Tax Registration, and Government Procurement on behalf of the Principal.<br><br>
            <strong>2. GRANT OF OPERATIONAL POWERS</strong><br>
            The Principal hereby grants, conveys, and delivers unto the said Attorney-in-Fact full operational power, authority, and jurisdiction to undertake, execute, and perform any and all acts deemed necessary to fulfill the service requests initiated by the Principal within the filings4u, LLC digital wizard interface.<br><br>
            <strong>3. ELECTRONIC SIGNATURES &amp; INTENT</strong><br>
            This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA). The Principal expressly understands, agrees, and consents that typing their name into the designated input field—resulting in a script-generated cursive font rendering of their name on the screen—constitutes their valid, legally binding electronic signature carrying identical weight to a handwritten wet ink signature.<br><br>
            <strong>4. RATIFICATION, REVOCATION, AND DURATION</strong><br>
            This agreement shall remain in full force and effect from the date of electronic execution until explicitly revoked. Revocation may occur via written physical notification delivered to filings4u, LLC corporate networks or electronic cancellation processed through verified client portal pathways.<br><br>
            Corporate Entity Information:<br>
            filings4u, LLC | A Subsidiary of Roseland Companies, LLC<br>
            Contact Support: support@filings4u.com
        </div>
`;

// ============================================================================ //
// 🖋️ PART 3 OF 3: THE INTERACTION LISTENERS HOOK                               //
// ============================================================================ //
// Continued template inner content matrix layout append passes
step4PanelContainer.innerHTML += `
  <!-- INPUT FIELD WRAPPER -->
  <!-- 🟢 ADDED: margin-top: 24px; to drop the input row away from the legal document scroll window -->
  <div class="form-group-wrapper" style="display: flex; flex-direction: column; gap: 6px; width: 100%; box-sizing: border-box; margin-top: 24px;">
    <label style="font-weight: 700; font-size: 0.88rem; color: #0a1f44;">Type Full Legal Name (First and Last) <span style="color: #b91c1c;">*</span></label>
    <input type="text" id="poa_typed_signature" autocomplete="off" placeholder="John Doe" class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important; font-family: monospace;">
  </div>

  <!-- LIVE CURSIVE PREVIEW CANVAS CARD -->
  <div style="display: flex; flex-direction: column; gap: 6px; background: #fafafa; border: 1px dashed #cbd5e1; padding: 20px; border-radius: 8px; text-align: center; justify-content: center; min-height: 80px; box-sizing: border-box; margin-top: 20px;">
    <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; font-weight: 700; display: block; margin-bottom: 2px;">Legal Electronic Signature Preview</span>
    <div id="poa_cursive_preview" style="font-family: 'Brush Script MT', 'Dancing Script', 'Cursive', sans-serif; font-size: 2.2rem; color: #1e3a8a; min-height: 44px; line-height: 1.2; word-break: break-all;"></div>
  </div>

  <!-- CONSENT CHECBOX MATRIX WRAPPER -->
  <!-- 🟢 ADDED: margin-top: 24px; to push the checkbox layout cleanly down from the cursive box -->
  <div id="poa_consent_wrapper" style="opacity: 0.5; pointer-events: none; transition: opacity 0.25s ease; margin-top: 24px;" title="Read agreement text to unlock field channel options.">
    <div class="form-group-wrapper" style="display: flex; align-items: flex-start; gap: 10px; width: 100%; box-sizing: border-box;">
      
      <!-- 🟢 ADDED: accent-color: #0a1f44; to color the box your brand navy color when checked -->
      <input type="checkbox" id="poa_consent_checkbox" disabled style="width: 18px; height: 18px; margin-top: 2px; cursor: not-allowed; flex-shrink: 0; accent-color: #0a1f44;">
      
      <label for="poa_consent_checkbox" style="font-size: 0.85rem; font-weight: 600; color: #0a1f44; cursor: not-allowed; line-height: 1.4; user-select: none;">
        I explicitly consent to the terms of the digital Power of Attorney authorization and certify that all corporate entity registration details provided are legally accurate. <span style="color: #0a1f44;">*</span>
      </label>
    </div>
  </div>

  <!-- NAVIGATION ACTION BUTTONS ROW -->
  <div class="wizard-footer-action-row" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; clear: both; box-sizing: border-box;">
    <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
      <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Back to Add Ons
    </button>
    <button type="button" id="poa-next-btn" disabled onclick="if(typeof window.goToNextWizardStep === 'function') { window.goToNextWizardStep(5, event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; opacity: 0.5; cursor: not-allowed; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.15);">
      Continue to Summary <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>
    </button>
  </div>
</div>`;


    const signatureInputNode = document.getElementById("poa_typed_signature");
    const consentCheckboxNode = document.getElementById("poa_consent_checkbox");
    const cursivePreviewNode = document.getElementById("poa_cursive_preview");
    const scrollerNode = document.getElementById("poa-scroll-box");
    const wrapperOverlay = document.getElementById("poa_consent_wrapper");
    const tooltipBanner = document.getElementById("poa-scroll-tooltip-banner");
    const tooltipText = document.getElementById("poa-tooltip-text-label");

    // SCROLL LISTENER TRACKING GATEWAY
    if (scrollerNode) {
        scrollerNode.addEventListener("scroll", function() {
            if (window.hasUserScrolledToBottomPoa) return;

            const offsetBufferRange = 8; 
            const totalScrollableHeight = scrollerNode.scrollHeight - scrollerNode.clientHeight;
            const currentPosition = scrollerNode.scrollTop;

            if (Math.abs(totalScrollableHeight - currentPosition) <= offsetBufferRange || currentPosition >= totalScrollableHeight - offsetBufferRange) {
                console.log("[POA Scroller] Legal read limit verified. Unlocking checkboxes.");
                window.hasUserScrolledToBottomPoa = true;

                if (wrapperOverlay) {
                    wrapperOverlay.style.opacity = "1";
                    wrapperOverlay.style.pointerEvents = "auto";
                }
                if (consentCheckboxNode) {
                    consentCheckboxNode.disabled = false;
                    consentCheckboxNode.style.cursor = "pointer";
                    document.querySelector("label[for='poa_consent_checkbox']").style.cursor = "pointer";
                }
                if (tooltipBanner) {
                    tooltipBanner.style.background = "#d1fae5"; 
                    tooltipBanner.style.borderColor = "#6ee7b7";
                    tooltipBanner.style.color = "#065f46";
                    if (tooltipText) tooltipText.textContent = "Thank you! Legal text verified. You may now complete your signature confirmation fields.";
                }
                
                evaluatePoaInputStateMatrix();
            }
        });
    }

    if (signatureInputNode) {
        signatureInputNode.addEventListener("input", (e) => {
            if (cursivePreviewNode) cursivePreviewNode.textContent = e.target.value;
            evaluatePoaInputStateMatrix();
        });
    }

    if (consentCheckboxNode) {
        consentCheckboxNode.addEventListener("change", () => {
            evaluatePoaInputStateMatrix();
        });
    }

    evaluatePoaInputStateMatrix();
};




// ============================================================================ //
// 📊 PART 2 OF 2: POWER OF ATTORNEY REAL-TIME INTEGRATION ENGINE               //
// ============================================================================ //
/**
 * filings4u, LLC - Power of Attorney Execution Matrix Engine
 * Validates step 4 signature inputs independently and manages interaction permissions.
 */
function evaluatePoaInputStateMatrix() { 
    console.log("[POA Matrix] Checking Step 4 digital signature fields..."); 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 1. Validate full name entry (Checks that user typed at least 2 words separated by a space) 
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
            signatureInput.setCustomValidity(""); // Clear native error boxes instantly 
        } else { 
            isSignatureValid = false; 
        } 
    } else { 
        isSignatureValid = true; 
    } 

    // 2. Validate checkbox consent 
    if (consentCheckbox) { 
        isConsentChecked = consentCheckbox.checked; 
        if (isConsentChecked) { 
            consentCheckbox.setCustomValidity(""); // Clear native error boxes instantly 
        } 
    } else { 
        isConsentChecked = true; 
    } 

    // 3. Update Button UI & Interactions Immediately 
    if (nextStepButton) { 
        if (isSignatureValid && isConsentChecked) { 
            nextStepButton.disabled = false; 
            nextStepButton.style.opacity = "1"; 
            nextStepButton.style.cursor = "pointer"; 
            nextStepButton.style.pointerEvents = "auto"; 
        } else { 
            nextStepButton.disabled = true; 
            nextStepButton.style.opacity = "0.5"; 
            nextStepButton.style.cursor = "not-allowed"; 
            nextStepButton.style.pointerEvents = "none"; // Hard lock interaction 
        } 
    } 
    return (isSignatureValid && isConsentChecked); 
}
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;


/**
 * Automates listener bindings to prevent duplicate execution loop stacking.
 */
function attachPoaValidationListeners() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 

    // Listen for text entry inside the signature box 
    if (signatureInput && !signatureInput.dataset.listenerActive) { 
        signatureInput.addEventListener("input", evaluatePoaInputStateMatrix); 
        signatureInput.dataset.listenerActive = "true"; 
    } 

    // Listen for selection shifts inside the consent checkbox 
    if (consentCheckbox && !consentCheckbox.dataset.listenerActive) { 
        consentCheckbox.addEventListener("change", evaluatePoaInputStateMatrix); 
        consentCheckbox.dataset.listenerActive = "true"; 
    } 
} 

// 📦 GLOBAL EXPOSURE AND BINDING PASSES 
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix; 
window.attachPoaValidationListeners = attachPoaValidationListeners;


// Execute initialization binding when components land on screen 
document.addEventListener("DOMContentLoaded", () => {
    // 1. Invoke your unified platform boot sequence securely if it is initialized 
    if (typeof window.runUnifiedWizardBootEngine === "function") { 
        window.runUnifiedWizardBootEngine(); 
    } else if (typeof window.runCombinedMasterBootSequence === "function") { 
        window.runCombinedMasterBootSequence(); 
    } 

    // 2. Safe execution of dynamic signature state listeners once elements exist in the DOM 
    if (typeof window.attachPoaValidationListeners === "function") { 
        window.attachPoaValidationListeners(); 
    } 
    if (typeof window.evaluatePoaInputStateMatrix === "function") { 
        window.evaluatePoaInputStateMatrix(); 
    } 

    // 3. 🟢 SECURE MUTATION OBSERVER BINDING LAYER: 
    const poaObserverTarget = document.getElementById("step-panel-4"); 
    if (poaObserverTarget) { 
        const poaVisibilityObserver = new MutationObserver(() => { 
            if (poaObserverTarget.style.display !== "none") { 
                if (typeof window.attachPoaValidationListeners === "function") window.attachPoaValidationListeners(); 
                if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix(); 
            } 
        }); 
        poaVisibilityObserver.observe(poaObserverTarget, { attributes: true, attributeFilter: ["style"] }); 
        console.log("[Dynamic Registry] Power of Attorney MutationObserver bound successfully."); 
    } else { 
        console.warn("[Dynamic Registry Warning] step-panel-4 container element was missing during observer allocation."); 
    } 
});

console.log("[Dynamic Registry] Power of Attorney input evaluation matrix script file pass initialized.");


// ============================================================================ //
// 🛡️ PART 2: POWER OF ATTORNEY MATRIX CORE ENGINE (REAL-TIME STATE BACKGROUND) //
// ============================================================================ //
window.hasUserScrolledToBottomPoa = window.hasUserScrolledToBottomPoa || false;

/**
 * Validates text inputs, checkbox marks, and scroll values silently to toggle button access.
 */
function evaluatePoaInputStateMatrix() { 
    console.log("[POA Matrix] Actively evaluating Step 4 digital signature states..."); 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("#step-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 1. Validate full name format (Must contain first and last name separated by a space) 
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
            signatureInput.setCustomValidity(""); // Clear standard browser tooltips 
        } else { 
            isSignatureValid = false; 
        } 
    } else { 
        isSignatureValid = true; 
    } 

    // 2. Validate checkbox tick element state 
    if (consentCheckbox) { 
        isConsentChecked = consentCheckbox.checked; 
        if (isConsentChecked) { 
            consentCheckbox.setCustomValidity(""); 
        } 
    } else { 
        isConsentChecked = true; 
    } 

    // 3. Evaluate scroll completion tracker block 
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container"); 
    if (scrollBox && !window.hasUserScrolledToBottomPoa) { 
        if (nextStepButton) { 
            nextStepButton.disabled = true; 
            nextStepButton.style.opacity = "0.5"; 
            nextStepButton.style.cursor = "not-allowed"; 
            nextStepButton.style.pointerEvents = "none"; 
        } 
        return false; // Lock navigation exit until mandate scroll completes 
    } 

    // 4. Matrix Enforcement: Toggle Button Visual State Rules 
    if (nextStepButton) { 
        if (isSignatureValid && isConsentChecked) { 
            nextStepButton.disabled = false; 
            nextStepButton.style.opacity = "1"; 
            nextStepButton.style.cursor = "pointer"; 
            nextStepButton.style.pointerEvents = "auto"; 
        } else { 
            nextStepButton.disabled = true; 
            nextStepButton.style.opacity = "0.5"; 
            nextStepButton.style.cursor = "not-allowed"; 
            nextStepButton.style.pointerEvents = "none"; 
        } 
    } 
    return (isSignatureValid && isConsentChecked); 
}

// Global scope export mapping matrix update
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;


/**
 * Attaches real-time scroll handlers to the legal mandate text block
 * to unlock interaction vectors the moment the user reaches the bottom bounds.
 */
function initPoaScrollTrackingEngine() { 
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container"); 
    if (!scrollBox) return; 
    
    // Remove any older duplicate listener links before attaching fresh operational hooks 
    scrollBox.removeEventListener("scroll", handlePoaScrollEventPass); 
    scrollBox.addEventListener("scroll", handlePoaScrollEventPass); 
    
    // Fire an immediate pass check in case the block text fits entirely inside the window without scrollbars 
    setTimeout(handlePoaScrollEventPass, 300); 
} 

function handlePoaScrollEventPass() { 
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container"); 
    if (!scrollBox) return; 
    
    // Calculate vertical metrics: scrollHeight - scrollTop gives the current vertical browser display location 
    const calculatedScrollThreshold = scrollBox.scrollHeight - scrollBox.scrollTop; 
    const actualBoxOffsetHeight = scrollBox.clientHeight; 
    
    // 20px error tolerance window guarantees small fractions do not break client unlocking mechanics 
    if (calculatedScrollThreshold - actualBoxOffsetHeight <= 20) { 
        if (!window.hasUserScrolledToBottomPoa) { 
            console.log("[POA Matrix Engine] User successfully reached the bottom boundary line of the legal mandate. Unlocking form controls."); 
            window.hasUserScrolledToBottomPoa = true; 
            
            // Instantly re-run matrix calculations to remove style locks 
            if (typeof evaluatePoaInputStateMatrix === "function") {
                evaluatePoaInputStateMatrix(); 
            }
        } 
    } 
} 

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE 
window.evaluatePoaInputStateMatrix = typeof evaluatePoaInputStateMatrix !== "undefined" ? evaluatePoaInputStateMatrix : window.evaluatePoaInputStateMatrix; 
window.initPoaScrollTrackingEngine = initPoaScrollTrackingEngine; 

// Hook up scroll tracking listeners as soon as elements register on screen layouts 
document.addEventListener("DOMContentLoaded", () => { 
    window.initPoaScrollTrackingEngine(); 
});


// ============================================================================ //
// 🛡️ PART 1 OF 2: COVENANTS WARNING BANNERS & GATES                           //
// ============================================================================ //
/**
 * Evaluates inputs silently during field updates to remove active warning banners if resolved.
 */
function checkPoaInputStateSilently() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) {
            isSignatureValid = true; 
        }
    } else { 
        isSignatureValid = true; 
    } 

    if (consentCheckbox) {
        isConsentChecked = consentCheckbox.checked; 
    } else {
        isConsentChecked = true; 
    }

    if (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa) { 
        const existingWarning = document.getElementById("poa-orange-alert-banner"); 
        if (existingWarning) {
            existingWarning.remove(); 
        }
    } 
    return (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa); 
}

// Bind method cleanly to global window boundaries
window.checkPoaInputStateSilently = checkPoaInputStateSilently;

/**
 * Dynamically builds and injects an isolated full-width alert banner frame contextually.
 */
function displayOrangePoaWarningBanner(alertMessageText) { 
    const existingWarning = document.getElementById("poa-orange-alert-banner"); 
    
    if (existingWarning) { 
        existingWarning.querySelector('.banner-text-span').innerText = alertMessageText; 
        existingWarning.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
        return; 
    } 
    
    const alertBannerContainer = document.createElement("div"); 
    alertBannerContainer.id = "poa-orange-alert-banner"; 
    alertBannerContainer.style.cssText = "grid-column: span 2; display: flex; align-items: center; gap: 12px; background: #fff7ed; border: 1px solid #ffedd5; border-left: 5px solid #f97316; padding: 14px 16px; border-radius: 6px; color: #c2410c; font-weight: 600; font-size: 0.88rem; margin-bottom: 20px; width: 100%; box-sizing: border-box; font-family: sans-serif; line-height: 1.4; text-align: left;"; 
    alertBannerContainer.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: #f97316; font-size: 1.1rem; flex-shrink: 0;"></i> <span class="banner-text-span" style="flex-grow: 1;">${alertMessageText}</span>`; 
    
    const targetMountPanel = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (targetMountPanel) { 
        const headerBlock = targetMountPanel.querySelector('.step-header-container') || targetMountPanel.firstChild; 
        if (headerBlock && headerBlock.nextSibling) { 
            targetMountPanel.insertBefore(alertBannerContainer, headerBlock.nextSibling); 
        } else { 
            targetMountPanel.prepend(alertBannerContainer); 
        } 
        alertBannerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
    } 
}

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE
window.displayOrangePoaWarningBanner = displayOrangePoaWarningBanner;


/**
 * Main click execution gate: Evaluates Step 4 fields completely and displays specific errors.
 */
function runActivePoaClickValidationGate(event) {
    if (event) event.preventDefault();

    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) {
            isSignatureValid = true; 
        }
    } else { 
        isSignatureValid = true; 
    } 

    if (consentCheckbox) {
        isConsentChecked = consentCheckbox.checked; 
    } else {
        isConsentChecked = true; 
    }

    // 🚩 Validation Gate 1: Track terms scroll completion block 
    if (!window.hasUserScrolledToBottomPoa) { 
        if (typeof displayOrangePoaWarningBanner === "function") {
            displayOrangePoaWarningBanner("Action Required: Please scroll down to the bottom of the disclosure document container to verify and clear the onboarding terms block."); 
        }
        return false; 
    } 

    // 🚩 Validation Gate 2: Track signature name string text values 
    if (!isSignatureValid) { 
        if (typeof displayOrangePoaWarningBanner === "function") {
            displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature field box."); 
        }
        if (signatureInput) signatureInput.focus(); 
        return false; 
    } 

    // 🚩 Validation Gate 3: Track checkbox verification confirmation choices 
    if (!isConsentChecked) { 
        if (typeof displayOrangePoaWarningBanner === "function") {
            displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols."); 
        }
        if (consentCheckbox) consentCheckbox.focus(); 
        return false; 
    } 

    const existingWarning = document.getElementById("poa-orange-alert-banner"); 
    if (existingWarning) existingWarning.remove(); 

    // Validation passes cleanly; advance to Step 5 (Summary)
    if (typeof goToNextWizardStep === "function") {
        goToNextWizardStep(5);
    }
    return true; 
} 

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE 
window.checkPoaInputStateSilently = typeof checkPoaInputStateSilently !== "undefined" ? checkPoaInputStateSilently : window.checkPoaInputStateSilently; 
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate; 
window.displayOrangePoaWarningBanner = typeof displayOrangePoaWarningBanner !== "undefined" ? displayOrangePoaWarningBanner : window.displayOrangePoaWarningBanner;


// ============================================================================ //
// 🛡️ PART 2 OF 2: COMPLIANCE LISTENERS & UNFREEZERS                          //
// ============================================================================ //
/**
 * Ensures inputs are fully operational and un-frozen in all browser viewport frames.
 */
function forceUnfreezeStep4FormInputs() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    
    if (signatureInput) { 
        signatureInput.disabled = false; 
        signatureInput.readOnly = false; 
        signatureInput.style.setProperty("pointer-events", "auto", "important"); 
        signatureInput.style.setProperty("background-color", "#ffffff", "important"); 
    } 
    
    if (consentCheckbox) { 
        consentCheckbox.disabled = false; 
        consentCheckbox.style.setProperty("pointer-events", "auto", "important"); 
    } 
}

// Bind method cleanly to global window boundaries
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputs;


/**
 * Safely binds text events and scrolling thread listeners to page structures.
 * Consolidates dynamic feedback loops to eliminate race issues.
 */
function attachPoaValidationListeners() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container"); 

    if (signatureInput && !signatureInput.dataset.listenerActive) { 
        signatureInput.addEventListener("input", () => { 
            if (typeof checkPoaInputStateSilently === "function") checkPoaInputStateSilently(); 
            if (typeof window.evaluatePoaInputStateMatrix === "function") { 
                window.evaluatePoaInputStateMatrix(); 
            } 
        }); 
        signatureInput.dataset.listenerActive = "true"; 
    } 

    if (consentCheckbox && !consentCheckbox.dataset.listenerActive) { 
        consentCheckbox.addEventListener("change", () => { 
            if (typeof checkPoaInputStateSilently === "function") checkPoaInputStateSilently(); 
            if (typeof window.evaluatePoaInputStateMatrix === "function") { 
                window.evaluatePoaInputStateMatrix(); 
            } 
        }); 
        consentCheckbox.dataset.listenerActive = "true"; 
    } 

    if (scrollBox && !scrollBox.dataset.scrollHooked) { 
        scrollBox.addEventListener("scroll", function(e) { 
            const target = e.target; 
            // 15px allowance window ensures rounding edge cases don't lock progression handles 
            if (target.scrollHeight - target.scrollTop <= target.clientHeight + 15) { 
                if (!window.hasUserScrolledToBottomPoa) { 
                    window.hasUserScrolledToBottomPoa = true; 
                    if (typeof checkPoaInputStateSilently === "function") checkPoaInputStateSilently(); 
                    if (typeof window.evaluatePoaInputStateMatrix === "function") { 
                        window.evaluatePoaInputStateMatrix(); 
                    } 
                } 
            } 
        }); 
        scrollBox.dataset.scrollHooked = "true"; 
    } 
} 

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE 
window.forceUnfreezeStep4FormInputs = typeof forceUnfreezeStep4FormInputs !== "undefined" ? forceUnfreezeStep4FormInputs : window.forceUnfreezeStep4FormInputs; 
window.attachPoaValidationListeners = attachPoaValidationListeners;

// Mutation Observer Initialization: Runs only once layout components have settled on screen 
document.addEventListener("DOMContentLoaded", () => { 
    const poaActivePanelTarget = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    
    if (poaActivePanelTarget) { 
        const poaLifecycleObserver = new MutationObserver(() => { 
            if (poaActivePanelTarget.style.display !== "none") { 
                if (typeof forceUnfreezeStep4FormInputs === "function") forceUnfreezeStep4FormInputs(); 
                if (typeof attachPoaValidationListeners === "function") attachPoaValidationListeners(); 
                
                if (typeof window.evaluatePoaInputStateMatrix === "function") { 
                    window.evaluatePoaInputStateMatrix(); 
                } 
            } 
        }); 
        poaLifecycleObserver.observe(poaActivePanelTarget, { attributes: true, attributeFilter: ["style"] }); 
    } 
});


// ============================================================================ //
// 🎨 CORPORATE DESIGN RE-SKIN: UNIFIED APPLICATION COMPLIANCE BANNER          //
// ============================================================================ //
/**
 * Generates an elegantly skinned, context-aware notification banner.
 * Matches your core design palette: Navy Blue (#0a1f44) and Emerald Green (#10b981).
 * @param {string} messageText - The contextual compliance warning string to display.
 */
function displayOrangePoaWarningBanner(messageText) { 
    const poaPanel = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (!poaPanel) return; 
    
    let warningBox = document.getElementById("poa-orange-alert-banner"); 
    if (!warningBox) { 
        warningBox = document.createElement("div"); 
        warningBox.id = "poa-orange-alert-banner"; 
        warningBox.style.cssText = "background-color: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #0a1f44; color: #0a1f44; padding: 14px 18px; font-weight: 700; font-size: 0.875rem; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; width: 100%; box-sizing: border-box; box-shadow: 0 4px 6px -1px rgba(10, 31, 68, 0.04), 0 2px 4px -1px rgba(10, 31, 68, 0.02); font-family: system-ui, sans-serif; text-align: left;"; 
        
        const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container"); 
        if (scrollBox) { 
            scrollBox.parentNode.insertBefore(warningBox, scrollBox); 
        } else { 
            poaPanel.insertBefore(warningBox, poaPanel.firstChild); 
        } 
    } 
    
    warningBox.innerHTML = ` 
        <i class="fa-solid fa-circle-info" style="color: #10b981; font-size: 1.15rem; flex-shrink: 0;"></i> 
        <span style="line-height: 1.4; color: #0a1f44; font-weight: 600;">${messageText}</span> 
    `; 
    
    warningBox.scrollIntoView({ behavior: "smooth", block: "center" }); 
} 

window.displayOrangePoaWarningBanner = displayOrangePoaWarningBanner;


// ============================================================================ //
// 🟢 WORKSPACE INTERACTION LOCK-RELEASE HOOK                                   //
// ============================================================================ //
function initializeStep4MutationObserverTracking() { 
    const targetPanelNode = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (!targetPanelNode) return; 
    
    const poaUnlockObserver = new MutationObserver((mutations) => { 
        if (targetPanelNode.style.display !== "none") { 
            console.log("[POA Matrix] Step 4 active view mount detected. Forcing field click authorizations..."); 
            if (typeof forceUnfreezeStep4FormInputs === "function") forceUnfreezeStep4FormInputs(); 
            if (typeof attachPoaValidationListeners === "function") attachPoaValidationListeners(); 
        } 
    }); 
    
    poaUnlockObserver.observe(targetPanelNode, { attributes: true, attributeFilter: ["style"] }); 
    window.poaUnlockObserverInstance = poaUnlockObserver; 
}

// Bind method cleanly to global window boundaries
window.initializeStep4MutationObserverTracking = initializeStep4MutationObserverTracking;

// Automatically execute tracing attachment on boot
document.addEventListener("DOMContentLoaded", () => {
    initializeStep4MutationObserverTracking();
});


// ============================================================================ //
// 🖋️ LIVE CURSIVE SIGNATURE MIRROR PREVIEW MATRIX                             //
// ============================================================================ //
function initCursiveSignatureCaptureLivePreview() { 
    const textInputField = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const cursivePreviewField = document.getElementById("cursive-signature-preview"); 
    
    if (!textInputField || !cursivePreviewField) { 
        console.log("[Signature Preview] Active preview elements not loaded on frame zero. Postponing hook."); 
        return; 
    } 
    
    // Function to handle the actual visual mirror update 
    const updateSignatureTextMirror = (currentString) => { 
        const cleanString = currentString.trim(); 
        if (cleanString.length > 0) { 
            // Update live cursive preview box text style 
            cursivePreviewField.textContent = cleanString; 
            cursivePreviewField.style.setProperty("color", "#0066cc", "important"); // Classic blue signature ink 
            cursivePreviewField.style.setProperty("font-style", "normal", "important"); 
        } else { 
            // Fallback default state text if input is completely cleared 
            cursivePreviewField.textContent = "Your Signature"; 
            cursivePreviewField.style.setProperty("color", "#64748b", "important"); // Muted slate fallback 
        } 
    }; 
    
    // Bind real-time input mirror interceptor pass safely 
    if (!textInputField.dataset.previewHooked) { 
        // 1. Catches raw keystrokes and real-time edits 
        textInputField.addEventListener("input", (e) => { 
            updateSignatureTextMirror(e.target.value); 
        }); 
        // 2. 🟢 FIXED PASSTHROUGH HOOK: Catches browser auto-fills, right-click context menu pastes, or focus blurs 
        textInputField.addEventListener("change", (e) => { 
            updateSignatureTextMirror(e.target.value); 
        }); 
        textInputField.dataset.previewHooked = "true"; 
        console.log("[Signature Preview] Real-time cursive live preview sync successfully armed."); 
    } 
} 

// Export the preview method safely to global scopes window records 
window.initCursiveSignatureCaptureLivePreview = initCursiveSignatureCaptureLivePreview; 

// Automatically bind preview hooks upon document paint cycles 
document.addEventListener("DOMContentLoaded", () => { 
    initCursiveSignatureCaptureLivePreview(); 
    
    // 🟢 FIXED MOUNT SELECTION: Setup the Step 4 preview observer inside DOMContentLoaded to ensure elements are active 
    const poaPreviewPanel = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
    if (poaPreviewPanel) { 
        const previewObserver = new MutationObserver(() => { 
            if (poaPreviewPanel.style.display !== "none") { 
                setTimeout(initCursiveSignatureCaptureLivePreview, 50); 
            } 
        }); 
        previewObserver.observe(poaPreviewPanel, { attributes: true, attributeFilter: ["style"] }); 
    } 
});


// ============================================================================ //
// 🛡️ PART 5: ACTIVE NAVIGATION INTERCEPTOR (PERMANENTLY ACTIVE ON-CLICK BAR)    //
// ============================================================================ //
/**
 * High-performance submission validation gate.
 * Triggers ONLY when the customer explicitly clicks the 'Continue to Summary' button.
 * Blocks form advancement and displays contextual orange alerting panels if inputs are incomplete.
 */
function runActivePoaClickValidationGate(event) { 
    console.log("[POA Interceptor] Active click captured. Evaluating criteria fields..."); 
    
    // Prevent standard native form actions from forcing premature page shifts 
    if (event && typeof event.preventDefault === "function") { 
        event.preventDefault(); 
    } 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    // 1. Evaluate full name input length parameters 
    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) { 
            isSignatureValid = true; 
        } 
    } else { 
        isSignatureValid = true; 
    } 

    // 2. Evaluate consent checkmark box status 
    if (consentCheckbox) { 
        isConsentChecked = consentCheckbox.checked; 
    } else { 
        isConsentChecked = true; 
    } 

    // 🚩 ON-CLICK GATE 1: Verify document scrolling threshold 
    if (!window.hasUserScrolledToBottomPoa) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Needed: Please scroll to the bottom of the disclosure to confirm you read it and understand it."); 
        } 
        return false; 
    } 

    // 🚩 ON-CLICK GATE 2: Verify signature name format structure 
    if (!isSignatureValid) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box."); 
        } 
        if (signatureInput) signatureInput.focus(); 
        return false; 
    } 

    // 🚩 ON-CLICK GATE 3: Verify checkbox authorization checkmarks 
    if (!isConsentChecked) { 
        if (typeof window.displayOrangePoaWarningBanner === "function") { 
            window.displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols."); 
        } 
        if (consentCheckbox) consentCheckbox.focus(); 
        return false; 
    } 

    // 🟢 SUCCESS: All criteria met. Remove any visible alerts and advance layout views 
    const existingWarning = document.getElementById("poa-orange-alert-banner"); 
    if (existingWarning) existingWarning.remove(); 
    console.log("[POA Interceptor] Step 4 compliance gates passed. Moving forward onto Step 5."); 

    // 🧠 🟢 CRITICAL DATA MIRROR PASS:
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 

    // 💾 COMMIT CURRENT POSITION TO LOCAL CACHE PRIOR TO SHIFTING SCENARIOS 
    const cacheKey = "f4u_wizard_onboarding_state"; 
    try { 
        const currentCacheData = JSON.parse(localStorage.getItem(cacheKey) || "{}"); 
        currentCacheData.currentWizardActiveStep = 5; 
        localStorage.setItem(cacheKey, JSON.stringify(currentCacheData)); 
    } catch (cacheErr) { 
        console.warn("[POA Interceptor] Unable to back up position key index:", cacheErr); 
    } 

    // Route view layout panels forward and refresh step progress highlights 
    if (typeof window.switchWizardActiveViewLayout === "function") { 
        window.switchWizardActiveViewLayout(5); 
    } 
    if (typeof window.updateApplicationMapTimelineBubbles === "function") { 
        window.updateApplicationMapTimelineBubbles(5); 
    } 
    return true; 
} 

// Export the method safely to global scope window records 
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate;


// ============================================================================ //
// 📡 UN-FREEZER BRIDGE ATTACHMENT FOR INLINE SUBMIT CONTROL FIELDS (1 OF 2)    //
// ============================================================================ //
/**
 * Automated safety un-freezer utility.
 * Forcefully ensures the navigation button stays active and clickable for the validation gate.
 */
function forceUnfreezeStep4FormInputs() { 
    console.log("[POA Security Hub] Forcing all form interaction channels active..."); 
    
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("#step-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']"); 
    
    if (signatureInput) { 
        signatureInput.disabled = false; 
        signatureInput.readOnly = false; 
        signatureInput.style.setProperty("pointer-events", "auto", "important"); 
        signatureInput.style.setProperty("background-color", "#ffffff", "important"); 
    } 
    
    if (consentCheckbox) { 
        consentCheckbox.disabled = false; 
        consentCheckbox.style.setProperty("pointer-events", "auto", "important"); 
    } 
    
    // CRITICAL RESET: Safely lift hardcoded disabling tags so click triggers capture perfectly 
    if (nextStepButton) { 
        nextStepButton.removeAttribute("disabled"); 
        nextStepButton.disabled = false; 
        nextStepButton.style.setProperty("opacity", "1", "important"); 
        nextStepButton.style.setProperty("cursor", "pointer", "important"); 
        nextStepButton.style.setProperty("pointer-events", "auto", "important"); 
        
        // Link the control button back up to our primary on-click gatekeeper module 
        if (nextStepButton.getAttribute("onclick") !== "window.runActivePoaClickValidationGate(event)") { 
            nextStepButton.setAttribute("onclick", "window.runActivePoaClickValidationGate(event)"); 
        } 
    } 
}

// Bind method cleanly to global window boundaries
window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputs;


/**
 * Real-time monitoring loop: Removes the warning panel the millisecond criteria are satisfied.
 */
function checkPoaInputStateSilently() { 
    const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
    const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
    
    let isSignatureValid = false; 
    let isConsentChecked = false; 

    if (signatureInput) { 
        const signatureText = signatureInput.value.trim(); 
        if (signatureText.length >= 2 && signatureText.includes(" ")) isSignatureValid = true; 
    } else { 
        isSignatureValid = true; 
    } 

    if (consentCheckbox) isConsentChecked = consentCheckbox.checked; 
    else isConsentChecked = true; 

    // 🟢 RESOLVED: If conditions are fully cleared, erase the orange alert banner immediately 
    if (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa) { 
        const existingWarning = document.getElementById("poa-orange-alert-banner"); 
        if (existingWarning) { 
            existingWarning.remove(); 
            console.log("[POA Matrix Engine] Compliance conditions satisfied. Warning banner dismissed."); 
        } 
    } 
    return true; 
} 

// Bind updated methods back into global window scope records fields safely 
window.forceUnfreezeStep4FormInputs = typeof forceUnfreezeStep4FormInputs !== "undefined" ? forceUnfreezeStep4FormInputs : window.forceUnfreezeStep4FormInputs; 
window.checkPoaInputStateSilently = checkPoaInputStateSilently;


// ============================================================================ //
// ⓘ CONTEXTUAL TOOLTIP POP-UP ENGINE (MATCHES UNIFIED ALERT DESIGN SPEC)       //
// ============================================================================ //
/**
 * Toggles visibility states for the Step 4 legal explanation tooltip popup box.
 * Styled to perfectly match your clean, unified white/navy alert banner.
 * @param {Event} event - Native browser element click event parameter context.
 */
function togglePoaContextualTooltipDisplay(event) { 
    if (event && typeof event.stopPropagation === "function") { 
        event.stopPropagation(); // Stops the window click handler from instantly shutting the card down 
    } 
    
    const tooltipCard = document.getElementById("poa-tooltip-card"); 
    const contentTarget = document.getElementById("poa-tooltip-content-target"); 
    if (!tooltipCard) return; 
    
    // Toggle logic: If the bubble is already active, hide it and exit 
    if (tooltipCard.style.display === "block") { 
        tooltipCard.style.display = "none"; 
        return; 
    } 
    
    // DYNAMIC MICROCOPY ROUTER RESOLUTION 
    const activeRouteKey = window.routeActiveServiceKey || "new-entrant-audit"; 
    let helpExplanationText = "This standard authorization permits our processing agents to securely submit mandatory regulatory documentation to federal and state registries on your behalf."; 
    
    if (activeRouteKey.includes("audit") || activeRouteKey.includes("nea")) { 
        helpExplanationText = "Mandatory Audit Requirement: This authorization allows filings4u, LLC to compile and submit your Driver Qualification Files (DQF), HOS review ledgers, and Consortium filings directly down to the FMCSA and DOT database registries to securely safeguard your operational motor carrier compliance scores."; 
    } else if (activeRouteKey.includes("corp") || activeRouteKey.includes("llc")) { 
        helpExplanationText = "Corporate Setup Requirement: This corporate agency agreement empowers our organizers to register your custom corporate Articles of Organization and coordinate Registered Agent address protocols safely inside your selected state filing jurisdiction."; 
    } else if (activeRouteKey.includes("dba") || activeRouteKey.includes("assumed")) { 
        helpExplanationText = "Assumed Name Registry: Authorizes our administrative processing specialists to file corporate assumed title certificates and publish structural state classification records."; 
    } 
    
    // Inject the text layout paired with a vibrant emerald info shield icon 
    if (contentTarget) { 
        contentTarget.innerHTML = ` 
            <div style="display: flex; flex-direction: column; gap: 6px; font-family: system-ui, sans-serif; text-align: left;"> 
                <span style="font-weight: 800; color: #10b981; font-size: 0.8rem; text-transform: uppercase; display: flex; align-items: center; gap: 6px; letter-spacing: 0.3px;"> 
                    <i class="fa-solid fa-shield-halved" style="font-size: 0.9rem;"></i> Secure Authorization Notice 
                </span> 
                <p style="margin: 0; line-height: 1.4; color: #0a1f44; font-weight: 600; font-size: 0.8rem;">${helpExplanationText}</p> 
            </div> 
        `; 
    } 
    
    // RE-SKIN THE CONTAINER LAYOUT: Wiped dark background, applied matching white/navy alert palette 
    tooltipCard.style.display = "block"; 
    tooltipCard.style.setProperty("background-color", "#ffffff", "important"); 
    tooltipCard.style.setProperty("border", "1px solid #e2e8f0", "important"); 
    tooltipCard.style.setProperty("border-left", "4px solid #0a1f44", "important"); // Matching Corporate Navy Left border 
    tooltipCard.style.setProperty("box-shadow", "0 10px 25px -5px rgba(10, 31, 68, 0.1), 0 8px 10px -6px rgba(10, 31, 68, 0.05)", "important"); 
} 

// Global window exposure pass mapping 
window.togglePoaDisplay = togglePoaContextualTooltipDisplay; // Maps to old legacy templates names smoothly 
window.togglePoaContextualTooltipDisplay = togglePoaContextualTooltipDisplay;

// ============================================================================ //
// 🟢 AUTOMATED GLOBAL DISMISSAL INTERCEPTOR (THE UN-TRAP ENGINE)               //
// ============================================================================ //
// Listens to the global page runtime. If the tooltip card is open and the customer
// clicks anywhere outside its borders, it closes the overlay elements automatically.
document.addEventListener("click", function(globalClickEvent) { 
    const tooltipCardElement = document.getElementById("poa-tooltip-card"); 
    
    if (tooltipCardElement && tooltipCardElement.style.display === "block") { 
        // Verify that the mouse click location was not inside the tooltip card body box 
        const wasClickInsideCard = tooltipCardElement.contains(globalClickEvent.target); 
        
        if (!wasClickInsideCard) { 
            console.log("[POA Tooltip] Outside click event intercepted. Dismissing overlay panel card safely."); 
            tooltipCardElement.style.display = "none"; 
        } 
    } 
});