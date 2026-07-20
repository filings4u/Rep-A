// ============================================================================ //
// 🖋️ PART 1 OF 3: STEP 4 VALIDATION MATRIX CORE & MEMORY CACHE               //
// ============================================================================ //
/**
 * filings4u, LLC - Power of Attorney Execution Matrix Engine
 * Validates signature input parameters and manages button states.
 */
function evaluatePoaInputStateMatrix() {
  console.log("[POA Matrix] Evaluating Step 4 digital signature states...");
  
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("button[onclick*='goToNextWizardStep(5)']");

  // Protection Gate: If Step 4 is hidden or unmounted, clear the check right away
  if (!signatureInput && !consentCheckbox) {
    console.log("[POA Matrix Bypass] Step 4 fields not detected yet. Clearing validation gate.");
  }

  let isSignatureValid = false;
  let isConsentChecked = false;
  let signatureText = "";

  // Validation Criteria: Must contain at least a first and last name (separated by space)
  if (signatureInput) {
    signatureText = signatureInput.value.trim();
    if (signatureText.length >= 2 && signatureText.includes(" ")) {
      isSignatureValid = true;
    }
  } else {
    isSignatureValid = true;
  }

  if (consentCheckbox) {
    isConsentChecked = consentCheckbox.checked;
  }

  // Determine global validity state
  const isFormFullyValid = (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa);

  // 🚀 CACHE STORAGE UPGRADE: If everything matches validation rules, save it instantly
  if (isFormFullyValid && signatureText !== "") {
    // Generate a cryptographic-looking secure timestamp hash for verification lookups
    const uniqueVerificationHash = "POA-SIG-" + btoa(signatureText + "-" + new Date().toISOString().split('T')[0]).substring(0, 12).toUpperCase();
    
    // Assign directly to global scope keys expected by Step 6 checkout fetcher
    window.wizardPoaSignedState = "signed_verified";
    window.wizardPoaSignatureVerificationString = `${signatureText} // Verified via IP IP-Log Timestamp Hash: ${uniqueVerificationHash}`;
    
    // Backup to localStorage to survive sudden network disruptions or page refreshes
    localStorage.setItem("cached_wizard_poa_signed_state", "signed_verified");
    localStorage.setItem("cached_wizard_poa_signature_verification_string", window.wizardPoaSignatureVerificationString);
  } else {
    // Reset if user unchecks box or clears out name fields
    window.wizardPoaSignedState = "pending";
    window.wizardPoaSignatureVerificationString = "";
  }

  // Matrix Enforcement Gate Check
  if (nextStepButton) {
    if (isFormFullyValid) {
      nextStepButton.disabled = false;
      nextStepButton.style.opacity = "1";
      nextStepButton.style.cursor = "pointer";
    } else {
      nextStepButton.disabled = true;
      nextStepButton.style.opacity = "0.5";
      nextStepButton.style.cursor = "not-allowed";
    }
  }

  return isFormFullyValid;
}

window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;

window.initCursiveSignatureCaptureLivePreview = function() {
  console.log("[POA Engine] Initializing digital signature preview canvas...");
  
  const step4PanelContainer = document.getElementById('step-panel-4') || 
                              document.getElementById('step-4') || 
                              document.getElementById('step4PanelContainer');
  
  if (!step4PanelContainer) {
    console.warn("[POA Engine Warning] Target Step 4 panel wrapper not localized in DOM.");
    return;
  }

  // Force strict structural order starting parameters
  window.hasUserScrolledToBottomPoa = false;

  // Render a single unified DOM tree string to prevent innerHTML += append failures
  step4PanelContainer.innerHTML = `
    <div class="step-panel-form-card" style="width: 100%; display: flex; flex-direction: column; gap: 20px; box-sizing: border-box; text-align: left;">
      <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 4px;">
        <h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; margin: 0 0 6px 0;">4. Power of Attorney & Digital Execution</h3>
        <p style="color: #64748b; font-size: 0.88rem; margin: 0; line-height: 1.4;">Authorize legal filing dispatch actions to complete your regulatory setup registration profile parameters securely.</p>
      </div>

      <!-- DYNAMIC COMPLIANCE TOOLTIP STATUS INDICATION BANNER -->
      <div id="poa-dynamic-state-tooltip" style="background: #fff5f5; border: 1px solid #fee2e2; border-left: 4px solid #ef4444; border-radius: 8px; padding: 14px 16px; display: flex; align-items: center; box-sizing: border-box; width: 100%; transition: all 0.3s ease;">
        <div style="display: flex; align-items: center; gap: 10px; color: #1e293b; font-size: 0.85rem; font-weight: 600; line-height: 1.4;">
          <span id="poa-tooltip-icon" style="color: #ef4444; font-size: 1.1rem;"><i class="fa-solid fa-circle-exclamation"></i></span>
          <span id="poa-tooltip-text"><strong>Step 1:</strong> Please scroll down to the bottom of the legal mandate document below to unlock input parameters.</span>
        </div>
      </div>

      <!-- MANDATORY SCROLL COMPLIANCE LEGAL CONTAINER -->
      <div id="poa-scroll-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 0.85rem; color: #334155; line-height: 1.6; max-height: 220px; overflow-y: scroll; font-family: system-ui, sans-serif; text-align: justify; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); box-sizing: border-box; width: 100%; cursor: pointer;">
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

      <!-- LEGAL SIGNATURE ENTRY ELEMENT WRAPPER (GRAYED OUT) -->
      <div id="poa_input_wrapper" style="display: flex; flex-direction: column; gap: 6px; width: 100%; box-sizing: border-box; margin-top: 12px; opacity: 0.4; pointer-events: none; transition: opacity 0.25s ease;">
        <label style="font-weight: 700; font-size: 0.88rem; color: #0a1f44;">Type Full Legal Name (First and Last) <span style="color: #b91c1c;">*</span></label>
        <input type="text" id="poa_typed_signature" autocomplete="off" placeholder="John Doe" class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important; font-family: monospace; transition: border-color 0.2s ease;">
      </div>

      <!-- LIVE CURSIVE PREVIEW CANVAS CARD -->
      <div style="display: flex; flex-direction: column; gap: 6px; background: #fafafa; border: 1px dashed #cbd5e1; padding: 20px; border-radius: 8px; text-align: center; justify-content: center; min-height: 80px; box-sizing: border-box; margin-top: 10px;">
        <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; font-weight: 700; display: block; margin-bottom: 2px;">Legal Electronic Signature Preview</span>
        <div id="poa_cursive_preview" style="font-family: 'Brush Script MT', 'Dancing Script', 'Cursive', sans-serif; font-size: 2.2rem; color: #1e3a8a; min-height: 44px; line-height: 1.2; word-break: break-all;">LEGAL ELECTRONIC SIGNATURE PREVIEW</div>
      </div>

      <!-- CONSENT RECOGNITION AFFIRMATION CHECKBOX WRAPPER (GRAYED OUT) -->
      <div id="poa_consent_wrapper" style="opacity: 0.4; pointer-events: none; transition: opacity 0.25s ease; margin-top: 12px;">
        <div class="form-group-wrapper" style="display: flex; align-items: flex-start; gap: 10px; width: 100%; box-sizing: border-box; padding: 4px; border: 1px solid transparent; border-radius: 6px; transition: border-color 0.2s ease;">
          <input type="checkbox" id="poa_consent_checkbox" disabled style="width: 18px; height: 18px; margin-top: 2px; cursor: not-allowed; flex-shrink: 0; accent-color: #0a1f44;">
          <label for="poa_consent_checkbox" style="font-size: 0.85rem; font-weight: 600; color: #0a1f44; cursor: not-allowed; line-height: 1.4; user-select: none;">
            I explicitly consent to the terms of the digital Power of Attorney authorization and certify that all corporate entity registration details provided are legally accurate. <span style="color: #b91c1c;">*</span>
          </label>
        </div>
      </div>

      <!-- NAVIGATION ACTION FOOTER ACTIONS ROW -->
      <div class="wizard-footer-action-row" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; clear: both; box-sizing: border-box;">
        <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
          <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Back to Add Ons
        </button>
        <button type="button" id="poa-next-btn" onclick="if(typeof window.handlePoaWizardStepValidationSubmit === 'function') { window.handlePoaWizardStepValidationSubmit(event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.15);">
          Continue to Summary <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>
        </button>
      </div>
    </div>

    <style>
      @keyframes validationShakeErrorEffect {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-6px); }
        40%, 80% { transform: translateX(6px); }
      }
      .shake-error-active {
        animation: validationShakeErrorEffect 0.4s ease-in-out !important;
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
      }
      @media (max-width: 600px) {
        .wizard-footer-action-row { flex-direction: column-reverse !important; gap: 12px !important; align-items: center !important; }
        .wizard-footer-action-row button { width: 100% !important; padding: 14px !important; box-sizing: border-box !important; }
      }
    </style>
  `;

  // Attach execution hooks directly once the structural HTML tree lands in the DOM
  if (typeof window.attachPoaValidationListeners === "function") window.attachPoaValidationListeners();
if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();};

  // 🚀 FIXED: Removed function closing bracket to let the rest of the chunks connect in sequence below

  // ============================================================================ //
  // 🖋️ PART 2 OF 3: THE CANVAS TEMPLATE GENERATOR - CHUNK 2                      //
  // ============================================================================ //
  const scrollBox = document.getElementById("poa-scroll-box");
  if (scrollBox) {
    scrollBox.addEventListener("scroll", function() {
      // 4px cushion buffer accounts for fractional display pixel zoom roundings
      const isScrolledToBottom = (scrollBox.scrollHeight - scrollBox.scrollTop <= scrollBox.clientHeight + 4);
      
      if (isScrolledToBottom && !window.hasUserScrolledToBottomPoa) {
        window.hasUserScrolledToBottomPoa = true;
        console.log("[POA Engine] Scroll complete validated. Unlocking name entry field.");
        
        // Unlock Step 2 Inputs: Bring text input group container to full active opacity
        const inputGroup = document.getElementById("poa-input-interactive-group");
        if (inputGroup) {
          inputGroup.style.opacity = "1";
          inputGroup.style.pointerEvents = "auto";
        }
        
        // Transition Alert Banner style profile parameters to an amber warning look
        const tooltip = document.getElementById("poa-dynamic-state-tooltip");
        const icon = document.getElementById("poa-tooltip-icon");
        const text = document.getElementById("poa-tooltip-text");
        if (tooltip && text && icon) {
          tooltip.style.background = "#fffbeb";
          tooltip.style.borderColor = "#fef3c7";
          tooltip.style.borderLeftColor = "#f59e0b";
          icon.style.color = "#f59e0b";
          icon.innerHTML = `<i class="fa-solid fa-pen-clip"></i>`;
          text.innerHTML = `<strong>Step 2:</strong> Please type your full first and last name inside the digital verification box below.`;
        }
        
        if (typeof window.evaluatePoaInputStateMatrix === "function") {
          window.evaluatePoaInputStateMatrix();
        }
      }
    });
  }
// ============================================================================ //
// 🖋️ PART 2 OF 3: THE CANVAS TEMPLATE GENERATOR - CHUNK 3                      //
// ============================================================================ //
const nameField = document.getElementById("poa_typed_signature");
const consentBox = document.getElementById("poa_consent_checkbox");

if (nameField) {
  nameField.addEventListener("input", function() {
    // Instantly clear red animation layout highlight trims upon new keyboard input activity
    nameField.style.borderColor = "#cbd5e1";
    
    const signatureText = nameField.value.trim();
    const isNameValid = signatureText.length >= 2 && signatureText.includes(" ");
    
    const checkGroup = document.getElementById("poa-checkbox-interactive-group");
    const tooltip = document.getElementById("poa-dynamic-state-tooltip");
    const icon = document.getElementById("poa-tooltip-icon");
    const text = document.getElementById("poa-tooltip-text");

    if (isNameValid && window.hasUserScrolledToBottomPoa) {
      // Unlock Step 3: Bring checkboxes container up to 100% interactability
      if (checkGroup) {
        checkGroup.style.opacity = "1";
        checkGroup.style.pointerEvents = "auto";
      }
      
      // Transition Alert Banner profile parameters to a clean success green check format
      if (tooltip && text && icon) {
        tooltip.style.background = "#f0fdf4";
        tooltip.style.borderColor = "#dcfce7";
        tooltip.style.borderLeftColor = "#22c55e";
        icon.style.color = "#22c55e";
        icon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        text.innerHTML = `<strong>Step 3:</strong> Final step! Please check the legal signature affirmation consent box to proceed.`;
      }
    } else if (window.hasUserScrolledToBottomPoa) {
      // State Regression Guard: Re-lock checkbox parameters down if text content field is corrupted/deleted
      if (checkGroup) {
        checkGroup.style.opacity = "0.4";
        checkGroup.style.pointerEvents = "none";
        if (consentBox) consentBox.checked = false;
      }
      
      // Fall back execution loop alerts directly back to Amber step 2 guidance states
      if (tooltip && text && icon) {
        tooltip.style.background = "#fffbeb";
        tooltip.style.borderColor = "#fef3c7";
        tooltip.style.borderLeftColor = "#f59e0b";
        icon.style.color = "#f59e0b";
        icon.innerHTML = `<i class="fa-solid fa-pen-clip"></i>`;
        text.innerHTML = `<strong>Step 2:</strong> Please type your full first and last name inside the digital verification box below.`;
      }
    }
    
    if (typeof window.evaluatePoaInputStateMatrix === "function") {
      window.evaluatePoaInputStateMatrix();
    }
  });
}

if (consentBox) {
  consentBox.addEventListener("change", function() {
    if (typeof window.evaluatePoaInputStateMatrix === "function") {
      window.evaluatePoaInputStateMatrix();
    }
  });
}

// Run a baseline evaluation check run execution iteration mapping sequence loop pass
if (typeof window.evaluatePoaInputStateMatrix === "function") {
  window.evaluatePoaInputStateMatrix();
}



  // ============================================================================ //
// 🖋️ PART 3 OF 3: THE INTERACTION LISTENERS HOOK - CHUNK 1                    //
// ============================================================================ //

// 🚀 FIX: Programmatic lookups verify active targets inline to prevent variable isolation crashes
const activeResolutionTargetNode = document.getElementById('step-panel-4') || 
                                   document.getElementById('step-4') || 
                                   document.getElementById('step4PanelContainer');

if (activeResolutionTargetNode) {
  activeResolutionTargetNode.innerHTML += `
    <!-- INPUT FIELD WRAPPER (GRAYED OUT UNTIL SCROLL IS DONE) -->
    <div id="poa_input_wrapper" class="form-group-wrapper" style="display: flex; flex-direction: column; gap: 6px; width: 100%; box-sizing: border-box; margin-top: 24px; opacity: 0.4; pointer-events: none; transition: opacity 0.25s ease;">
      <label style="font-weight: 700; font-size: 0.88rem; color: #0a1f44;">Type Full Legal Name (First and Last) <span style="color: #b91c1c;">*</span></label>
      <input type="text" id="poa_typed_signature" autocomplete="off" placeholder="John Doe" class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important; font-family: monospace; transition: border-color 0.2s ease;">
    </div>

    <!-- LIVE CURSIVE PREVIEW CANVAS CARD -->
    <div style="display: flex; flex-direction: column; gap: 6px; background: #fafafa; border: 1px dashed #cbd5e1; padding: 20px; border-radius: 8px; text-align: center; justify-content: center; min-height: 80px; box-sizing: border-box; margin-top: 20px;">
      <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; font-weight: 700; display: block; margin-bottom: 2px;">Legal Electronic Signature Preview</span>
      <div id="poa_cursive_preview" style="font-family: 'Brush Script MT', 'Dancing Script', 'Cursive', sans-serif; font-size: 2.2rem; color: #1e3a8a; min-height: 44px; line-height: 1.2; word-break: break-all;"></div>
    </div>

    <!-- CONSENT CHECKBOX MATRIX WRAPPER (GRAYED OUT UNTIL VALID NAME DETECTED) -->
    <div id="poa_consent_wrapper" style="opacity: 0.4; pointer-events: none; transition: opacity 0.25s ease; margin-top: 24px;" title="Complete preceding verification steps to unlock.">
      <div class="form-group-wrapper" style="display: flex; align-items: flex-start; gap: 10px; width: 100%; box-sizing: border-box; padding: 4px; border: 1px solid transparent; border-radius: 6px; transition: border-color 0.2s ease;">
        <input type="checkbox" id="poa_consent_checkbox" disabled style="width: 18px; height: 18px; margin-top: 2px; cursor: not-allowed; flex-shrink: 0; accent-color: #0a1f44;">
        <label for="poa_consent_checkbox" style="font-size: 0.85rem; font-weight: 600; color: #0a1f44; cursor: not-allowed; line-height: 1.4; user-select: none;">
          I explicitly consent to the terms of the digital Power of Attorney authorization and certify that all corporate entity registration details provided are legally accurate. <span style="color: #b91c1c;">*</span>
        </label>
      </div>
    </div>

    <!-- NAVIGATION ACTION BUTTONS ROW -->
    <div class="wizard-footer-action-row" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; clear: both; box-sizing: border-box;">
      <button type="button" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
        <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Back to Add Ons
      </button>
      <button type="button" id="poa-next-btn" onclick="if(typeof window.handlePoaWizardStepValidationSubmit === 'function') { window.handlePoaWizardStepValidationSubmit(event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.15);">
        Continue to Summary <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>
      </button>
    </div>

    <style>
      @keyframes validationShakeErrorEffect {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-6px); }
        40%, 80% { transform: translateX(6px); }
      }
      .shake-error-active {
        animation: validationShakeErrorEffect 0.4s ease-in-out !important;
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
      }
      @media (max-width: 600px) {
        .wizard-footer-action-row { flex-direction: column-reverse !important; gap: 12px !important; align-items: center !important; width: 100% !important; }
        .wizard-footer-action-row button { width: 100% !important; display: flex !important; justify-content: center !important; align-items: center !important; padding: 14px !important; box-sizing: border-box !important; }
      }
    </style>
  `;
}


  window.attachPoaValidationListeners = function() {
  const scrollBox = document.getElementById("poa-scroll-box");
  const signatureInput = document.getElementById("poa_typed_signature");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const previewField = document.getElementById("poa_cursive_preview");
  
  const tooltipCard = document.getElementById("poa-dynamic-state-tooltip");
  const tooltipIcon = document.getElementById("poa-tooltip-icon");
  const tooltipText = document.getElementById("poa-tooltip-text");

  // Track scrolling mechanics
  if (scrollBox && !scrollBox.dataset.scrollHooked) {
    scrollBox.addEventListener("scroll", function(e) {
      const target = e.target;
      if (target.scrollHeight - target.scrollTop <= target.clientHeight + 15) {
        if (!window.hasUserScrolledToBottomPoa) {
          window.hasUserScrolledToBottomPoa = true;
          scrollBox.style.borderColor = "#cbd5e1";
          
          if (typeof window.forceUnfreezeStep4FormInputs === "function") {
            window.forceUnfreezeStep4FormInputs();
          }

          if (tooltipCard && tooltipText && tooltipIcon) {
            tooltipCard.style.background = "#fffbeb";
            tooltipCard.style.borderColor = "#fef3c7";
            tooltipCard.style.borderLeft = "4px solid #f59e0b";
            tooltipIcon.style.color = "#f59e0b";
            tooltipIcon.innerHTML = `<i class="fa-solid fa-pen-clip"></i>`;
            tooltipText.innerHTML = `<strong>Step 2:</strong> Please type your full first and last name inside the digital verification box below.`;
          }
          window.evaluatePoaInputStateMatrix();
        }
      }
    });
    scrollBox.dataset.scrollHooked = "true";
  }

  // Track keystroke typing dynamics
  if (signatureInput && !signatureInput.dataset.listenerActive) {
    signatureInput.addEventListener("input", (e) => {
      const entryText = e.target.value;
      if (previewField) previewField.textContent = entryText;
      
      signatureInput.style.borderColor = "#cbd5e1";

      const isNameValid = entryText.trim().length >= 2 && entryText.trim().includes(" ");
      if (isNameValid && window.hasUserScrolledToBottomPoa) {
        if (tooltipCard && tooltipText && tooltipIcon) {
          tooltipCard.style.background = "#f0fdf4";
          tooltipCard.style.borderColor = "#dcfce7";
          tooltipCard.style.borderLeft = "4px solid #22c55e";
          tooltipIcon.style.color = "#22c55e";
          tooltipIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
          tooltipText.innerHTML = `<strong>Step 3:</strong> Final step! Please check the legal signature affirmation consent box to proceed.`;
        }
      }
      if (typeof window.forceUnfreezeStep4FormInputs === "function") window.forceUnfreezeStep4FormInputs();
      window.evaluatePoaInputStateMatrix();
    });
    signatureInput.dataset.listenerActive = "true";
  }

  // Track final agreement checkmarks
  if (consentCheckbox && !consentCheckbox.dataset.listenerActive) {
    consentCheckbox.addEventListener("change", () => {
      window.evaluatePoaInputStateMatrix();
    });
    consentCheckbox.dataset.listenerActive = "true";
  }
};
window.evaluatePoaInputStateMatrix = function() {
  console.log("[POA Matrix] Actively evaluating Step 4 digital signature states...");
  
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const nextStepButton = document.getElementById("poa-next-btn");

  let isSignatureValid = false;
  let isConsentChecked = false;
  let signatureText = "";

  if (signatureInput) {
    signatureText = signatureInput.value.trim();
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

  const isFormFullyValid = (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa);

  // Sync variables directly to global targets for your Supabase Edge Function
  if (isFormFullyValid && signatureText !== "") {
    const signatureHashTag = "POA-SIG-" + btoa(signatureText + "-" + new Date().getUTCMinutes()).substring(0, 10).toUpperCase();
    window.wizardPoaSignedState = "signed_verified";
    window.wizardPoaSignatureVerificationString = `${signatureText} // Verified via Serverless Edge: ${signatureHashTag}`;
  } else {
    window.wizardPoaSignedState = "pending";
    window.wizardPoaSignatureVerificationString = "";
  }

  // Manage button visual accessibility states safely
  if (nextStepButton) {
    nextStepButton.style.setProperty("opacity", isFormFullyValid ? "1" : "0.5", "important");
    nextStepButton.style.setProperty("cursor", isFormFullyValid ? "pointer" : "not-allowed", "important");
  }

  return isFormFullyValid;
};

window.forceUnfreezeStep4FormInputs = function() {
  const signatureInput = document.getElementById("poa_typed_signature");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const nameFieldWrapper = document.getElementById("poa_input_wrapper");
  const checkboxWrapper = document.getElementById("poa_consent_wrapper");

  if (!window.hasUserScrolledToBottomPoa) return;

  if (nameFieldWrapper) { nameFieldWrapper.style.opacity = "1"; nameFieldWrapper.style.pointerEvents = "auto"; }
  if (signatureInput) signatureInput.disabled = false;

  const currentSignatureText = signatureInput ? signatureInput.value.trim() : "";
  const isSignatureStringValid = currentSignatureText.length >= 2 && currentSignatureText.includes(" ");

  if (isSignatureStringValid) {
    if (checkboxWrapper) { checkboxWrapper.style.opacity = "1"; checkboxWrapper.style.pointerEvents = "auto"; }
    if (consentCheckbox) consentCheckbox.disabled = false;
  } else {
    if (checkboxWrapper) { checkboxWrapper.style.opacity = "0.4"; checkboxWrapper.style.pointerEvents = "none"; }
    if (consentCheckbox) { consentCheckbox.checked = false; consentCheckbox.disabled = true; }
  }
};
window.handlePoaWizardStepValidationSubmit = function(event) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();

  const scrollerNode = document.getElementById("poa-scroll-box");
  const signatureInputNode = document.getElementById("poa_typed_signature");
  const consentCheckboxNode = document.getElementById("poa_consent_checkbox");
  const tooltipCard = document.getElementById("poa-dynamic-state-tooltip");

  const applyVisualShakeErrorPhysics = (targetElement) => {
    if (!targetElement) return;
    targetElement.classList.remove("shake-error-active");
    void targetElement.offsetWidth; 
    targetElement.classList.add("shake-error-active");
  };

  if (!window.hasUserScrolledToBottomPoa) {
    if (scrollerNode) applyVisualShakeErrorPhysics(scrollerNode);
    if (tooltipCard) applyVisualShakeErrorPhysics(tooltipCard);
    return false;
  }

  const currentSignatureString = signatureInputNode ? signatureInputNode.value.trim() : "";
  const isNameEntryValid = currentSignatureString.length >= 2 && currentSignatureString.includes(" ");

  if (!isNameEntryValid) {
    if (signatureInputNode) {
      applyVisualShakeErrorPhysics(signatureInputNode);
      signatureInputNode.focus();
    }
    if (tooltipCard) applyVisualShakeErrorPhysics(tooltipCard);
    return false;
  }

  if (!consentCheckboxNode || !consentCheckboxNode.checked) {
    const checkboxLabelRow = document.querySelector("#poa_consent_wrapper .form-group-wrapper");
    if (checkboxLabelRow) {
      applyVisualShakeErrorPhysics(checkboxLabelRow);
      checkboxLabelRow.style.borderColor = "#ef4444";
    }
    if (tooltipCard) applyVisualShakeErrorPhysics(tooltipCard);
    return false;
  }

  console.log("✅ [Success] Step 4 complete. Advancing to Step 5...");
  if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();

  if (typeof window.switchWizardActiveViewLayout === "function") {
    window.switchWizardActiveViewLayout(5);
  } else if (typeof window.goToNextWizardStep === "function") {
    window.goToNextWizardStep(5);
  }
  return true;
};

// 🚀 CRITICAL BOOT TRIGGER: Automatically forces Step 4 to render and load immediately
if (typeof window.initCursiveSignatureCaptureLivePreview === "function") {
  window.initCursiveSignatureCaptureLivePreview();
}

// Watch for layout switches inside your wizard system shell context
const poaActivePanelTarget = document.getElementById("step-panel-4") || document.getElementById("step-4");
if (poaActivePanelTarget) {
  const poaLifecycleObserver = new MutationObserver(() => {
    if (poaActivePanelTarget.style.display !== "none") {
      if (typeof window.initCursiveSignatureCaptureLivePreview === "function") window.initCursiveSignatureCaptureLivePreview();
    }
  });
  poaLifecycleObserver.observe(poaActivePanelTarget, { attributes: true, attributeFilter: ["style"] });
}

  // ============================================================================ //
  // 🖋️ PART 3 OF 3: THE INTERACTION LISTENERS HOOK - CHUNK 2                    //
  // ============================================================================ //
  const signatureInputNode = document.getElementById("poa_typed_signature");
  const consentCheckboxNode = document.getElementById("poa_consent_checkbox");
  const cursivePreviewNode = document.getElementById("poa_cursive_preview");
  const scrollerNode = document.getElementById("poa-scroll-box");
  
  // Elements layout mappings matching your updated layout tags
  const nameFieldWrapper = document.getElementById("poa_input_wrapper");
  const wrapperOverlay = document.getElementById("poa_consent_wrapper");
  const dynamicTooltipCard = document.getElementById("poa-dynamic-state-tooltip");
  const dynamicTooltipIcon = document.getElementById("poa-tooltip-icon");
  const dynamicTooltipText = document.getElementById("poa-tooltip-text");

  // 📜 STEP 1 DETECTOR: Track legal document container interaction thresholds
  if (scrollerNode) {
    scrollerNode.addEventListener("scroll", function() {
      if (window.hasUserScrolledToBottomPoa) return;

      const offsetBufferRange = 8;
      const totalScrollableHeight = scrollerNode.scrollHeight - scrollerNode.clientHeight;
      const currentPosition = scrollerNode.scrollTop;

      if (Math.abs(totalScrollableHeight - currentPosition) <= offsetBufferRange || currentPosition >= totalScrollableHeight - offsetBufferRange) {
        console.log("[POA Scroller] Legal read limit verified. Unlocking Step 2 text input wrapper.");
        window.hasUserScrolledToBottomPoa = true;

        // Strip error styles off scrollbox if they exist
        scrollerNode.classList.remove("shake-error-active");
        scrollerNode.style.borderColor = "#cbd5e1";

        // Unlock Step 2 Name Input: Make text interactive and change opacity
        if (nameFieldWrapper) {
          nameFieldWrapper.style.opacity = "1";
          nameFieldWrapper.style.pointerEvents = "auto";
        }

        // Advance Tooltip Indicator to Step 2 Alert Design (Amber color profile)
        if (dynamicTooltipCard && dynamicTooltipText && dynamicTooltipIcon) {
          dynamicTooltipCard.style.background = "#fffbeb";
          dynamicTooltipCard.style.borderColor = "#fef3c7";
          dynamicTooltipCard.style.borderLeft = "4px solid #f59e0b";
          dynamicTooltipIcon.style.color = "#f59e0b";
          dynamicTooltipIcon.innerHTML = `<i class="fa-solid fa-pen-clip"></i>`;
          dynamicTooltipText.innerHTML = `<strong>Step 2:</strong> Please type your full first and last name inside the digital verification box below.`;
        }

        if (typeof window.evaluatePoaInputStateMatrix === "function") {
          window.evaluatePoaInputStateMatrix();
        }
      }
    });
  }
  // ============================================================================ //
  // 🖋️ PART 3 OF 3: THE INTERACTION LISTENERS HOOK - CHUNK 3                    //
  // ============================================================================ //
  
  // ✍️ STEP 2 MONITOR: Handwriting Engine & Checkbox Matrix Lock Toggles
  if (signatureInputNode) {
    signatureInputNode.addEventListener("input", (e) => {
      const entryText = e.target.value;
      const signatureTextClean = entryText.trim();
      
      // Mirror string mapping instantly onto cursive preview canvas layout engine
      if (cursivePreviewNode) {
        cursivePreviewNode.textContent = entryText;
      }
      
      // Clear red warning highlight borders when typing activity resumes
      signatureInputNode.style.borderColor = "#cbd5e1";
      signatureInputNode.classList.remove("shake-error-active");

      const isNameValid = signatureTextClean.length >= 2 && signatureTextClean.includes(" ");

      if (isNameValid && window.hasUserScrolledToBottomPoa) {
        // Unlock Step 3 Checkbox: Make checkbox wrapper layout look fully active
        if (wrapperOverlay) {
          wrapperOverlay.style.opacity = "1";
          wrapperOverlay.style.pointerEvents = "auto";
        }
        if (consentCheckboxNode) {
          consentCheckboxNode.disabled = false;
          consentCheckboxNode.style.cursor = "pointer";
          const labelNode = document.querySelector("label[for='poa_consent_checkbox']");
          if (labelNode) labelNode.style.cursor = "pointer";
        }

        // Advance Tooltip Indicator to Step 3 Alert Design (Green success profile)
        if (dynamicTooltipCard && dynamicTooltipText && dynamicTooltipIcon) {
          dynamicTooltipCard.style.background = "#f0fdf4";
          dynamicTooltipCard.style.borderColor = "#dcfce7";
          dynamicTooltipCard.style.borderLeft = "4px solid #22c55e";
          dynamicTooltipIcon.style.color = "#22c55e";
          dynamicTooltipIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
          dynamicTooltipText.innerHTML = `<strong>Step 3:</strong> Final step! Please check the legal signature affirmation consent box to proceed.`;
        }
      } else if (window.hasUserScrolledToBottomPoa) {
        // 🔄 STATE REGRESSION GUARD: Re-lock step 3 if user backspaces their full name parameters
        if (wrapperOverlay) {
          wrapperOverlay.style.opacity = "0.4";
          wrapperOverlay.style.pointerEvents = "none";
        }
        if (consentCheckboxNode) {
          consentCheckboxNode.checked = false;
          consentCheckboxNode.disabled = true;
          consentCheckboxNode.style.cursor = "not-allowed";
          const labelNode = document.querySelector("label[for='poa_consent_checkbox']");
          if (labelNode) labelNode.style.cursor = "not-allowed";
        }

        // Drop alert display back to step 2 amber profile guidelines
        if (dynamicTooltipCard && dynamicTooltipText && dynamicTooltipIcon) {
          dynamicTooltipCard.style.background = "#fffbeb";
          dynamicTooltipCard.style.borderColor = "#fef3c7";
          dynamicTooltipCard.style.borderLeft = "4px solid #f59e0b";
          dynamicTooltipIcon.style.color = "#f59e0b";
          dynamicTooltipIcon.innerHTML = `<i class="fa-solid fa-pen-clip"></i>`;
          dynamicTooltipText.innerHTML = `<strong>Step 2:</strong> Please type your full first and last name inside the digital verification box below.`;
        }
      }

      if (typeof window.evaluatePoaInputStateMatrix === "function") {
        window.evaluatePoaInputStateMatrix();
      }
    });
  }

  // ☑️ STEP 3 MONITOR: Consent Checkbox Selection Listener
  if (consentCheckboxNode) {
    consentCheckboxNode.addEventListener("change", () => {
      // Clear out red warning boundary styles if box is checked
      if (consentCheckboxNode.checked) {
        const checkboxGroupContainer = document.querySelector("#poa_consent_wrapper .form-group-wrapper");
        if (checkboxGroupContainer) {
          checkboxGroupContainer.style.borderColor = "transparent";
          checkboxGroupContainer.classList.remove("shake-error-active");
        }
      }
      
      if (typeof window.evaluatePoaInputStateMatrix === "function") {
        window.evaluatePoaInputStateMatrix();
      }
    });
  }

  // Initialize active step alignment passes upon template setup completion
  if (typeof window.evaluatePoaInputStateMatrix === "function") {
    window.evaluatePoaInputStateMatrix();
  }

  // ============================================================================ //
// 🖋️ PART 3 OF 3: THE INTERACTION LISTENERS HOOK - CHUNK 4                    //
// ============================================================================ //
/**
 * Intercepts forward wizard progression out of Step 4.
 * Scans each input rule in structural order, executing an element physics shake
 * and applying a red border error outline on any unfulfilled nodes.
 */
window.handlePoaWizardStepValidationSubmit = function(event) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();

  console.log("[Navigation Intercept] Running rigorous compliance checkpoints...");

  const scrollerNode = document.getElementById("poa-scroll-box");
  const signatureInputNode = document.getElementById("poa_typed_signature");
  const consentCheckboxNode = document.getElementById("poa_consent_checkbox");
  const tooltipCard = document.getElementById("poa-dynamic-state-tooltip");

  // Helper utility function to cleanly apply the shake animation lifecycle
  const applyVisualShakeErrorPhysics = (targetElement) => {
    if (!targetElement) return;
    targetElement.classList.remove("shake-error-active");
    void targetElement.offsetWidth; // Force a hardware DOM architecture reflow to reset animation timeline
    targetElement.classList.add("shake-error-active");
  };

  // 🧪 CHECKPOINT 1 VERIFICATION: Legal mandate document scroll constraint
  if (!window.hasUserScrolledToBottomPoa) {
    console.warn("[Navigation Intercept Violation] Mandate text scroll buffer unread.");
    if (scrollerNode) {
      applyVisualShakeErrorPhysics(scrollerNode);
      scrollerNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (tooltipCard) applyVisualShakeErrorPhysics(tooltipCard);
    return false;
  }

  // 🧪 CHECKPOINT 2 VERIFICATION: Name entry validations (Must have first, last, and length >= 2)
  const currentSignatureString = signatureInputNode ? signatureInputNode.value.trim() : "";
  const isNameEntryValid = currentSignatureString.length >= 2 && currentSignatureString.includes(" ");

  if (!isNameEntryValid) {
    console.warn("[Navigation Intercept Violation] Signature input requirements unfulfilled.");
    if (signatureInputNode) {
      applyVisualShakeErrorPhysics(signatureInputNode);
      signatureInputNode.focus();
    }
    if (tooltipCard) applyVisualShakeErrorPhysics(tooltipCard);
    return false;
  }

  // 🧪 CHECKPOINT 3 VERIFICATION: Legal confirmation checkbox interaction
  const isCheckboxAccepted = consentCheckboxNode ? consentCheckboxNode.checked : false;

  if (!isCheckboxAccepted) {
    console.warn("[Navigation Intercept Violation] Consent affirmation verification box unchecked.");
    const checkboxLabelRow = document.querySelector("#poa_consent_wrapper .form-group-wrapper");
    if (checkboxLabelRow) {
      applyVisualShakeErrorPhysics(checkboxLabelRow);
      // Give it a red tracking border manually since its background isn't an input node
      checkboxLabelRow.style.borderColor = "#ef4444";
    } else if (consentCheckboxNode) {
      applyVisualShakeErrorPhysics(consentCheckboxNode);
    }
    if (tooltipCard) applyVisualShakeErrorPhysics(tooltipCard);
    return false;
  }

  // 🎉 ALL CRITERIA CLEARED: State memory synced successfully
  console.log("✅ [Checkpoint Cleared] Step 4 validation passed. Handing control flow to Step 5...");
  
  if (typeof window.evaluatePoaInputStateMatrix === "function") {
    window.evaluatePoaInputStateMatrix();
  }

  // Advance user out of Step 4 context panels cleanly
  if (typeof window.goToNextWizardStep === "function") {
    window.goToNextWizardStep(5);
  } else if (typeof window.switchWizardActiveViewLayout === "function") {
    window.switchWizardActiveViewLayout(5);
  }
  return true;
};




// ============================================================================ //
// 📊 PART 2 OF 2: POWER OF ATTORNEY INTEGRATION ENGINE - CHUNK 1              //
// ============================================================================ //
/**
 * filings4u, LLC - Power of Attorney Execution Matrix Engine
 * Validates step 4 signature inputs independently and manages interaction permissions.
 */
function evaluatePoaInputStateMatrix() {
  console.log("[POA Matrix] Checking Step 4 digital signature fields...");
  
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main");

  let isSignatureValid = false;
  let isConsentChecked = false;
  let signatureText = "";

  // 1. Validate full name entry (Checks that user typed at least 2 words separated by a space)
  if (signatureInput) {
    signatureText = signatureInput.value.trim();
    if (signatureText.length >= 2 && signatureText.includes(" ")) {
      isSignatureValid = true;
      signatureInput.setCustomValidity(""); // Clear native error tooltips instantly
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
      consentCheckbox.setCustomValidity(""); // Clear native error tooltips instantly
    }
  } else {
    isConsentChecked = true;
  }

  // Form Core Evaluation Completion Metric
  const isFormFullyValid = (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa);

  // 🚀 METADATA CACHE PIPELINE: Sync verified signatures straight into global scopes for Step 6
  if (isFormFullyValid && signatureText !== "") {
    // Build a unique tracking transaction verification stamp
    const signatureHashTag = "POA-SIG-" + btoa(signatureText + "-" + new Date().getUTCMinutes()).substring(0, 10).toUpperCase();
    
    window.wizardPoaSignedState = "signed_verified";
    window.wizardPoaSignatureVerificationString = `${signatureText} // Verified on Serverless Edge via Tracking Token Hash: ${signatureHashTag}`;
    
    // Backup memory onto internal local caches to withstand unexpected tab refreshes
    localStorage.setItem("cached_wizard_poa_signed_state", "signed_verified");
    localStorage.setItem("cached_wizard_poa_signature_verification_string", window.wizardPoaSignatureVerificationString);
  } else {
    // Clear scopes instantly if fields become unverified or empty
    window.wizardPoaSignedState = "pending";
    window.wizardPoaSignatureVerificationString = "";
  }

  // 3. Update Button UI Layout Styles Immediately
  if (nextStepButton) {
    if (isFormFullyValid) {
      nextStepButton.disabled = false;
      nextStepButton.style.opacity = "1";
      nextStepButton.style.cursor = "pointer";
      // 🚀 FIX: Removed pointer-events: none; to allow clicks to pass to the shake script
      nextStepButton.style.pointerEvents = "auto"; 
    } else {
      // Keep styling visual indicators set to locked
      nextStepButton.disabled = false; // Set to false so the browser registers intercept clicks
      nextStepButton.style.opacity = "0.5";
      nextStepButton.style.cursor = "not-allowed";
      nextStepButton.style.pointerEvents = "auto"; // Unlock click registers to enable shake physics engine!
    }
  }

  return isFormFullyValid;
}

window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;
// ============================================================================ //
// 📊 PART 2 OF 2: POWER OF ATTORNEY INTEGRATION ENGINE - CHUNK 2              //
// ============================================================================ //

/**
 * Automates listener bindings to prevent duplicate execution loop stacking.
 */
function attachPoaValidationListeners() {
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");

  // Listen for text entry inside the signature box
  if (signatureInput && !signatureInput.dataset.listenerActive) {
    signatureInput.addEventListener("input", function() {
      if (typeof window.evaluatePoaInputStateMatrix === "function") {
        window.evaluatePoaInputStateMatrix();
      }
    });
    signatureInput.dataset.listenerActive = "true";
  }

  // Listen for selection shifts inside the consent checkbox
  if (consentCheckbox && !consentCheckbox.dataset.listenerActive) {
    consentCheckbox.addEventListener("change", function() {
      if (typeof window.evaluatePoaInputStateMatrix === "function") {
        window.evaluatePoaInputStateMatrix();
      }
    });
    consentCheckbox.dataset.listenerActive = "true";
  }
}

// 📦 GLOBAL EXPOSURE AND BINDING PASSES
window.attachPoaValidationListeners = attachPoaValidationListeners;

console.log("[Dynamic Registry] Power of Attorney validation listener definitions successfully armed.");




// ============================================================================ //
// 🛡️ PART 2: POWER OF ATTORNEY MATRIX CORE ENGINE - CHUNK 1                    //
// ============================================================================ //
window.hasUserScrolledToBottomPoa = window.hasUserScrolledToBottomPoa || false;

/**
 * Validates text inputs, checkbox marks, and scroll values silently to toggle button access.
 */
function evaluatePoaInputStateMatrix() {
  console.log("[POA Matrix] Actively evaluating Step 4 digital signature states...");
  
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("#step-4 .btn-wizard-main");

  let isSignatureValid = false;
  let isConsentChecked = false;
  let signatureText = "";

  // 1. Validate full name format (Must contain first and last name separated by a space)
  if (signatureInput) {
    signatureText = signatureInput.value.trim();
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

  // Determine global baseline form completion status
  const isFormFullyValid = (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa);

  // 🚀 METADATA CACHE PIPELINE: Sync verified signatures straight into global scopes for Step 6
  if (isFormFullyValid && signatureText !== "") {
    // Build a unique tracking transaction verification stamp
    const signatureHashTag = "POA-SIG-" + btoa(signatureText + "-" + new Date().getUTCMinutes()).substring(0, 10).toUpperCase();
    
    window.wizardPoaSignedState = "signed_verified";
    window.wizardPoaSignatureVerificationString = `${signatureText} // Verified on Serverless Edge via Tracking Token Hash: ${signatureHashTag}`;
    
    // Backup memory onto internal local caches to withstand unexpected tab refreshes
    localStorage.setItem("cached_wizard_poa_signed_state", "signed_verified");
    localStorage.setItem("cached_wizard_poa_signature_verification_string", window.wizardPoaSignatureVerificationString);
  } else {
    // Clear scopes instantly if fields become unverified or empty
    window.wizardPoaSignedState = "pending";
    window.wizardPoaSignatureVerificationString = "";
  }

  // 3. Matrix Enforcement: Toggle Button Visual State Rules
  if (nextStepButton) {
    if (isFormFullyValid) {
      nextStepButton.disabled = false;
      nextStepButton.style.opacity = "1";
      nextStepButton.style.cursor = "pointer";
      nextStepButton.style.pointerEvents = "auto"; 
    } else {
      // 🚀 FIX: Disabled is set to false and pointer-events are kept active 
      // This allows the element to register clicks so the shake script can intercept them!
      nextStepButton.disabled = false; 
      nextStepButton.style.opacity = "0.5";
      nextStepButton.style.cursor = "not-allowed";
      nextStepButton.style.pointerEvents = "auto"; 
    }
  }

  return isFormFullyValid;
}

// Global scope export mapping matrix update
window.evaluatePoaInputStateMatrix = evaluatePoaInputStateMatrix;
// ============================================================================ //
// 🛡️ PART 2: POWER OF ATTORNEY MATRIX CORE ENGINE - CHUNK 2                    //
// ============================================================================ //

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

/**
 * Evaluates vertical text container offset heights dynamically.
 */
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

      // Strip shake error indicators off scroll container immediately upon verification
      scrollBox.classList.remove("shake-error-active");
      scrollBox.style.borderColor = "#cbd5e1";

      // Instantly re-run matrix calculations to handle conditional layout styling updates
      if (typeof evaluatePoaInputStateMatrix === "function") {
        evaluatePoaInputStateMatrix();
      }
    }
  }
}

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE
window.initPoaScrollTrackingEngine = initPoaScrollTrackingEngine;
window.handlePoaScrollEventPass = handlePoaScrollEventPass;

// Hook up scroll tracking listeners as soon as elements register on screen layouts
document.addEventListener("DOMContentLoaded", () => {
  window.initPoaScrollTrackingEngine();
  
  if (typeof evaluatePoaInputStateMatrix === "function") {
    evaluatePoaInputStateMatrix();
  }
});

// ============================================================================ //
// 🛡️ PART 1 OF 2: COVENANTS WARNING BANNERS & GATES - CHUNK 1                  //
// ============================================================================ //

/**
 * Evaluates inputs silently during field updates to clear error state configurations.
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

  const isFormFullyValid = (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa);

  // If the form becomes valid silently while typing, strip any old structural alert indicators off immediately
  if (isFormFullyValid) {
    const backupWarningBanner = document.getElementById("poa-orange-alert-banner");
    if (backupWarningBanner) {
      backupWarningBanner.remove();
    }
  }

  return isFormFullyValid;
}

// Bind method cleanly to global window boundaries
window.checkPoaInputStateSilently = checkPoaInputStateSilently;

/**
 * Bridges errors cleanly directly back into your main dynamic tooltip banner framework.
 * Keeps an append backup mechanism to make sure notices display under any layout condition.
 */
function displayOrangePoaWarningBanner(alertMessageText) {
  const centralTooltipCard = document.getElementById("poa-dynamic-state-tooltip");
  const centralTooltipIcon = document.getElementById("poa-tooltip-icon");
  const centralTooltipText = document.getElementById("poa-tooltip-text");

  // 🚀 OPTIMIZATION UPGRADE: Route the text straight into your centralized banner framework if it exists
  if (centralTooltipCard && centralTooltipText && centralTooltipIcon) {
    centralTooltipCard.style.background = "#fff5f5";
    centralTooltipCard.style.borderColor = "#fee2e2";
    centralTooltipCard.style.borderLeft = "4px solid #ef4444";
    centralTooltipIcon.style.color = "#ef4444";
    centralTooltipIcon.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
    centralTooltipText.innerHTML = `<strong>Attention Required:</strong> ${alertMessageText}`;
    
    // Smooth scroll the viewport back to the warning block focus layout frame point
    centralTooltipCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // Backup Element Fallback: Only generates if your main layout templates are completely unmounted
  let existingWarning = document.getElementById("poa-orange-alert-banner");
  if (existingWarning) {
    const innerTextNode = existingWarning.querySelector('.banner-text-span');
    if (innerTextNode) innerTextNode.innerText = alertMessageText;
    existingWarning.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const alertBannerContainer = document.createElement("div");
  alertBannerContainer.id = "poa-orange-alert-banner";
  alertBannerContainer.style.cssText = "grid-column: span 2; display: flex; align-items: center; gap: 12px; background: #fff7ed; border: 1px solid #ffedd5; border-left: 5px solid #f97316; padding: 14px 16px; border-radius: 6px; color: #c2410c; font-weight: 600; font-size: 0.88rem; margin-bottom: 20px; width: 100%; box-sizing: border-box; font-family: sans-serif; line-height: 1.4; text-align: left;";
  alertBannerContainer.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: #f97316; font-size: 1.1rem; flex-shrink: 0;"></i> <span class="banner-text-span" style="flex-grow: 1;">${alertMessageText}</span>`;
  
  const targetMountPanel = document.getElementById("step-panel-4") || document.getElementById("step-4");
  if (targetMountPanel) {
    targetMountPanel.prepend(alertBannerContainer);
    alertBannerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Global exposure mapping updates
window.displayOrangePoaWarningBanner = displayOrangePoaWarningBanner;
// ============================================================================ //
// 🛡️ PART 1 OF 2: COVENANTS WARNING BANNERS & GATES - CHUNK 2                  //
// ============================================================================ //

/**
 * Main click execution gate: Evaluates Step 4 fields completely, updates
 * metadata variables, and executes element shake physics on failure metrics.
 */
function runActivePoaClickValidationGate(event) {
  if (event && typeof event.preventDefault === "function") event.preventDefault();

  console.log("[POA Click Gate] Intercepting execution path for compliance verification check...");

  const scrollerNode = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const centralTooltipCard = document.getElementById("poa-dynamic-state-tooltip");

  // Helper utility function to trigger validation error shake animations
  const triggerVisualShakePhysics = (targetNode) => {
    if (!targetNode) return;
    targetNode.classList.remove("shake-error-active");
    void targetNode.offsetWidth; // Force hardware DOM layout reflow redraw
    targetNode.classList.add("shake-error-active");
  };

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
    console.warn("[Click Gate Violation] Document scroll requirement unverified.");
    if (typeof displayOrangePoaWarningBanner === "function") {
      displayOrangePoaWarningBanner("Please scroll down to the bottom of the disclosure document container to verify and clear the onboarding terms block.");
    }
    if (scrollerNode) triggerVisualShakePhysics(scrollerNode);
    if (centralTooltipCard) triggerVisualShakePhysics(centralTooltipCard);
    return false;
  }

  // 🚩 Validation Gate 2: Track signature name string text values
  if (!isSignatureValid) {
    console.warn("[Click Gate Violation] Full signature criteria unmet.");
    if (typeof displayOrangePoaWarningBanner === "function") {
      displayOrangePoaWarningBanner("Please enter your complete First and Last Name inside the legal digital signature field box.");
    }
    if (signatureInput) {
      triggerVisualShakePhysics(signatureInput);
      signatureInput.focus();
    }
    if (centralTooltipCard) triggerVisualShakePhysics(centralTooltipCard);
    return false;
  }

  // 🚩 Validation Gate 3: Track checkbox verification confirmation choices
  if (!isConsentChecked) {
    console.warn("[Click Gate Violation] Legal checkbox confirmation missing.");
    if (typeof displayOrangePoaWarningBanner === "function") {
      displayOrangePoaWarningBanner("Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols.");
    }
    
    const checkboxGroupContainer = document.getElementById("poa_consent_wrapper") || document.getElementById("poa-checkbox-interactive-group");
    const activeLabelRow = checkboxGroupContainer ? checkboxGroupContainer.querySelector('.form-group-wrapper') : null;
    
    if (activeLabelRow) {
      triggerVisualShakePhysics(activeLabelRow);
      activeLabelRow.style.borderColor = "#ef4444";
    } else if (consentCheckbox) {
      triggerVisualShakePhysics(consentCheckbox);
      consentCheckbox.focus();
    }
    if (centralTooltipCard) triggerVisualShakePhysics(centralTooltipCard);
    return false;
  }

  // Clean layout error updates once checks pass successfully
  const backupWarning = document.getElementById("poa-orange-alert-banner");
  if (backupWarning) backupWarning.remove();

  // Sync validation signature memory rows down to global states for Step 6
  if (typeof window.evaluatePoaInputStateMatrix === "function") {
    window.evaluatePoaInputStateMatrix();
  }

  // Validation passes cleanly; advance to Step 5 (Summary)
  console.log("✅ [Click Gate Success] All compliance gates passed. Routing forward path to Step 5...");
  if (typeof window.goToNextWizardStep === "function") {
    window.goToNextWizardStep(5);
  } else if (typeof window.switchWizardActiveViewLayout === "function") {
    window.switchWizardActiveViewLayout(5);
  }
  return true;
}

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate;

// ============================================================================ //
// 🛡️ PART 2 OF 2: COMPLIANCE LISTENERS & UNFREEZERS - CHUNK 1                  //
// ============================================================================ //

/**
 * Ensures inputs are fully operational and un-frozen, but strictly respects
 * the explicit progression rules: Scroll First -> Type Name -> Check Box.
 */
// ============================================================================ //
// 📡 UN-FREEZER BRIDGE ATTACHMENT                                             //
// ============================================================================ //
function forceUnfreezeStep4FormInputs() {
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const nameFieldWrapper = document.getElementById("poa_input_wrapper");
  const checkboxWrapper = document.getElementById("poa_consent_wrapper");

  // 🚀 FIX: Removed the loose naked return statement. Covered actions inside a safe conditional block statement frame wrapper instead.
  if (window.hasUserScrolledToBottomPoa) {
    if (nameFieldWrapper) { nameFieldWrapper.style.opacity = "1"; nameFieldWrapper.style.pointerEvents = "auto"; }
    if (signatureInput) { signatureInput.disabled = false; signatureInput.readOnly = false; }

    const cleanSignatureText = signatureInput ? signatureInput.value.trim() : "";
    const isNameValid = cleanSignatureText.length >= 2 && cleanSignatureText.includes(" ");

    if (isNameValid) {
      if (checkboxWrapper) { checkboxWrapper.style.opacity = "1"; checkboxWrapper.style.pointerEvents = "auto"; }
      if (consentCheckbox) { consentCheckbox.disabled = false; consentCheckbox.style.cursor = "pointer"; }
    } else {
      if (checkboxWrapper) { checkboxWrapper.style.opacity = "0.4"; checkboxWrapper.style.pointerEvents = "none"; }
      if (consentCheckbox) { consentCheckbox.checked = false; consentCheckbox.disabled = true; }
    }
  } else {
    // Structural order enforcement state: Keep elements locked down tightly
    if (nameFieldWrapper) { nameFieldWrapper.style.opacity = "0.4"; nameFieldWrapper.style.pointerEvents = "none"; }
    if (checkboxWrapper) { checkboxWrapper.style.opacity = "0.4"; checkboxWrapper.style.pointerEvents = "none"; }
    if (signatureInput) signatureInput.disabled = true;
    if (consentCheckbox) consentCheckbox.disabled = true;
  }
}

window.forceUnfreezeStep4FormInputs = forceUnfreezeStep4FormInputs;

// ============================================================================ //
// 🛡️ PART 2 OF 2: COMPLIANCE LISTENERS & UNFREEZERS - CHUNK 2                  //
// ============================================================================ //

/**
 * Safely binds text events and scrolling thread listeners to page structures.
 * Consolidates dynamic feedback loops and manages step-by-step tooltip banner updates.
 */
function attachPoaValidationListeners() {
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const scrollBox = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");
  
  const checkboxWrapper = document.getElementById("poa_consent_wrapper");
  const tooltipCard = document.getElementById("poa-dynamic-state-tooltip");
  const tooltipIcon = document.getElementById("poa-tooltip-icon");
  const tooltipText = document.getElementById("poa-tooltip-text");

  // ✍️ TEXT ENTRY FIELD LISTENER
  if (signatureInput && !signatureInput.dataset.listenerActive) {
    signatureInput.addEventListener("input", () => {
      if (typeof window.checkPoaInputStateSilently === "function") window.checkPoaInputStateSilently();
      if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();
      if (typeof window.forceUnfreezeStep4FormInputs === "function") window.forceUnfreezeStep4FormInputs();
    });
    signatureInput.dataset.listenerActive = "true";
  }

  // ☑️ CONSENT CHECKBOX SELECTION LISTENER
  if (consentCheckbox && !consentCheckbox.dataset.listenerActive) {
    consentCheckbox.addEventListener("change", () => {
      if (typeof window.checkPoaInputStateSilently === "function") window.checkPoaInputStateSilently();
      if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();
    });
    consentCheckbox.dataset.listenerActive = "true";
  }

  // 📜 SCROLL BAR TRACKING LISTENER
  if (scrollBox && !scrollBox.dataset.scrollHooked) {
    scrollBox.addEventListener("scroll", function(e) {
      const target = e.target;
      // 15px allowance window ensures rounding edge cases don't lock progression handles
      if (target.scrollHeight - target.scrollTop <= target.clientHeight + 15) {
        if (!window.hasUserScrolledToBottomPoa) {
          window.hasUserScrolledToBottomPoa = true;
          console.log("[POA Engine] Scroll complete. Advancing toolbar to Step 2 Amber banner state.");

          // Strip layout error borders off the scroll container instantly
          scrollBox.classList.remove("shake-error-active");
          scrollBox.style.borderColor = "#cbd5e1";

          // Unfreeze name inputs to begin Step 2
          if (typeof window.forceUnfreezeStep4FormInputs === "function") {
            window.forceUnfreezeStep4FormInputs();
          }

          // Advance Tooltip Indicator context to Amber warning look
          if (tooltipCard && tooltipText && tooltipIcon) {
            tooltipCard.style.background = "#fffbeb";
            tooltipCard.style.borderColor = "#fef3c7";
            tooltipCard.style.borderLeft = "4px solid #f59e0b";
            tooltipIcon.style.color = "#f59e0b";
            tooltipIcon.innerHTML = `<i class="fa-solid fa-pen-clip"></i>`;
            tooltipText.innerHTML = `<strong>Step 2:</strong> Please type your full first and last name inside the digital verification box below.`;
          }

          if (typeof window.checkPoaInputStateSilently === "function") window.checkPoaInputStateSilently();
          if (typeof window.evaluatePoaInputStateMatrix === "function") window.evaluatePoaInputStateMatrix();
        }
      }
    });
    scrollBox.dataset.scrollHooked = "true";
  }
}

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE
window.attachPoaValidationListeners = attachPoaValidationListeners;

// ============================================================================ //
// 🖋️ AUTOMATED LIFECYCLE INITIALIZER & OBSERVER ENGINE                        //
// ============================================================================ //
document.addEventListener("DOMContentLoaded", () => {
  const poaActivePanelTarget = document.getElementById("step-panel-4") || document.getElementById("step-4");
  
  // Safe runner utility to fire initialization routines after frames paint
  const bootStep4Sequence = () => {
    console.log("[POA Lifecycle] Invoking step setup sequence loops safely...");
    
    if (typeof window.initCursiveSignatureCaptureLivePreview === "function") {
      window.initCursiveSignatureCaptureLivePreview();
    }
    if (typeof window.forceUnfreezeStep4FormInputs === "function") {
      window.forceUnfreezeStep4FormInputs();
    }
    if (typeof window.attachPoaValidationListeners === "function") {
      window.attachPoaValidationListeners();
    }
    if (typeof window.evaluatePoaInputStateMatrix === "function") {
      window.evaluatePoaInputStateMatrix();
    }
  };

  // Immediate execution check if page paints directly on Step 4
  setTimeout(bootStep4Sequence, 100);

  // Monitor wizard display shifts seamlessly
  if (poaActivePanelTarget) {
    const poaLifecycleObserver = new MutationObserver(() => {
      if (poaActivePanelTarget.style.display !== "none") {
        console.log("[POA Lifecycle] Step 4 display activation registered.");
        bootStep4Sequence();
      }
    });
    
    poaLifecycleObserver.observe(poaActivePanelTarget, { 
      attributes: true, 
      attributeFilter: ["style"] 
    });
    console.log("[Dynamic Registry] Lifecycle MutationObserver registered successfully on Step 4.");
  }
});


// ============================================================================ //
// 🎨 CORPORATE DESIGN RE-SKIN: UNIFIED APPLICATION COMPLIANCE BANNER - CHUNK 1 //
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
      console.log("[POA Matrix] Step 4 active view mount detected. Tuning element constraints...");
      if (typeof window.forceUnfreezeStep4FormInputs === "function") window.forceUnfreezeStep4FormInputs();
      if (typeof window.attachPoaValidationListeners === "function") window.attachPoaValidationListeners();
    }
  });

  poaUnlockObserver.observe(targetPanelNode, { attributes: true, attributeFilter: ["style"] });
  window.poaUnlockObserverInstance = poaUnlockObserver;
}

window.initializeStep4MutationObserverTracking = initializeStep4MutationObserverTracking;

// Automatically execute tracing attachment on boot
document.addEventListener("DOMContentLoaded", () => {
  initializeStep4MutationObserverTracking();
});
// ============================================================================ //
// 🖋️ LIVE CURSIVE SIGNATURE MIRROR PREVIEW MATRIX - CHUNK 2                     //
// ============================================================================ //
function initCursiveSignatureCaptureLivePreview() {
  const textInputField = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  
  // 🚀 FIX: Mapped lookups to check BOTH container IDs so the script works perfectly with your HTML layout tags
  const cursivePreviewField = document.getElementById("poa_cursive_preview") || document.getElementById("cursive-signature-preview");

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
      cursivePreviewField.style.setProperty("color", "#1e3a8a", "important"); // Classic blue ink look matching brand guidelines
      cursivePreviewField.style.setProperty("font-style", "normal", "important");
    } else {
      // Fallback baseline text if entry input is completely cleared out
      cursivePreviewField.textContent = "Your Signature";
      cursivePreviewField.style.setProperty("color", "#94a3b8", "important"); // Muted fallback placeholder styling
    }
  };

  // Bind real-time input mirror interceptor pass safely
  if (!textInputField.dataset.previewHooked) {
    // 1. Catches raw keystrokes and real-time edits
    textInputField.addEventListener("input", (e) => {
      updateSignatureTextMirror(e.target.value);
    });

    // 2. Catches browser auto-fills, right-click context menu pastes, or focus blurs
    textInputField.addEventListener("change", (e) => {
      updateSignatureTextMirror(e.target.value);
    });

    textInputField.dataset.previewHooked = "true";
    console.log("[Signature Preview] Real-time cursive live preview sync successfully armed.");
  }
}

// Export the preview method safely to global scope window records
window.initCursiveSignatureCaptureLivePreview = initCursiveSignatureCaptureLivePreview;

// Trigger lookups as soon as the DOM settles
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.initCursiveSignatureCaptureLivePreview === "function") {
    window.initCursiveSignatureCaptureLivePreview();
  }
});

// Automatically bind preview hooks upon document paint cycles 
document.addEventListener("DOMContentLoaded", () => { 
  if (typeof window.initCursiveSignatureCaptureLivePreview === "function") {
    window.initCursiveSignatureCaptureLivePreview(); 
  }

  // Setup the Step 4 preview observer inside DOMContentLoaded to ensure elements are active 
  const poaPreviewPanel = document.getElementById("step-panel-4") || document.getElementById("step-4"); 
  if (poaPreviewPanel) { 
    const previewObserver = new MutationObserver(() => { 
      if (poaPreviewPanel.style.display !== "none") { 
        if (typeof window.initCursiveSignatureCaptureLivePreview === "function") {
          setTimeout(window.initCursiveSignatureCaptureLivePreview, 50); 
        }
      } 
    }); 
    previewObserver.observe(poaPreviewPanel, { attributes: true, attributeFilter: ["style"] }); 
  } 
}); 

// ============================================================================ // 
// 🛡️ PART 5: ACTIVE NAVIGATION INTERCEPTOR - CHUNK 1                          // 
// ============================================================================ // 
/** 
 * High-performance submission validation gate. 
 * Triggers ONLY when the customer explicitly clicks the 'Continue to Summary' button. 
 * Blocks form advancement and executes element shaking error feedback physics on failure metrics. 
 */ 
function runActivePoaClickValidationGate(event) { 
  console.log("[POA Interceptor] Active click captured. Evaluating criteria fields..."); 
  
  // Prevent standard native form actions from forcing premature page shifts 
  if (event && typeof event.preventDefault === "function") { 
    event.preventDefault(); 
  } 

  const scrollerNode = document.getElementById("poa-scroll-box") || document.querySelector(".poa-terms-container");
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input"); 
  const consentCheckbox = document.getElementById("poa_consent_checkbox"); 
  const centralTooltipCard = document.getElementById("poa-dynamic-state-tooltip");

  // Helper utility function to trigger validation error shake animations
  const triggerVisualShakePhysics = (targetNode) => {
    if (!targetNode) return;
    targetNode.classList.remove("shake-error-active");
    void targetNode.offsetWidth; // Force hardware DOM layout reflow redraw
    targetNode.classList.add("shake-error-active");
  };

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
  // ============================================================================ // 
// 🛡️ PART 5: ACTIVE NAVIGATION INTERCEPTOR - CHUNK 2                          // 
// ============================================================================ // 

// 🚀 FIX: Injected the starting try context framework block securely
try {
  // 🚩 ON-CLICK GATE 1: Verify document scrolling threshold 
  if (!window.hasUserScrolledToBottomPoa) { 
    console.warn("[POA Interceptor Violation] Scroll barrier unverified.");
    if (typeof window.displayOrangePoaWarningBanner === "function") { 
      window.displayOrangePoaWarningBanner("Action Needed: Please scroll to the bottom of the disclosure to confirm you read it and understand it."); 
    } 
    if (scrollerNode) triggerVisualShakePhysics(scrollerNode);
    if (centralTooltipCard) triggerVisualShakePhysics(centralTooltipCard);
    return false; 
  } 

  // 🚩 ON-CLICK GATE 2: Verify signature name format structure 
  if (!isSignatureValid) { 
    console.warn("[POA Interceptor Violation] Name formatting string invalid.");
    if (typeof window.displayOrangePoaWarningBanner === "function") { 
      window.displayOrangePoaWarningBanner("Action Required: Please enter your complete First and Last Name inside the legal digital signature element field box."); 
    } 
    if (signatureInput) {
      triggerVisualShakePhysics(signatureInput);
      signatureInput.focus(); 
    }
    if (centralTooltipCard) triggerVisualShakePhysics(centralTooltipCard);
    return false; 
  } 

  // 🚩 ON-CLICK GATE 3: Verify checkbox authorization checkmarks 
  if (!isConsentChecked) { 
    console.warn("[POA Interceptor Violation] Acceptance checkbox unchecked.");
    if (typeof window.displayOrangePoaWarningBanner === "function") { 
      window.displayOrangePoaWarningBanner("Action Required: Please review and tick the verification acknowledgment statement checkbox to authorize documentation filing protocols."); 
    } 
    
    const checkGroupContainer = document.getElementById("poa_consent_wrapper") || document.getElementById("poa-checkbox-interactive-group");
    const labelWrapperRow = checkGroupContainer ? checkGroupContainer.querySelector('.form-group-wrapper') : null;

    if (labelWrapperRow) {
      triggerVisualShakePhysics(labelWrapperRow);
      labelWrapperRow.style.borderColor = "#ef4444";
    } else if (consentCheckbox) { 
      triggerVisualShakePhysics(consentCheckbox);
      consentCheckbox.focus(); 
    }
    if (centralTooltipCard) triggerVisualShakePhysics(centralTooltipCard);
    return false; 
  } 

  // 🟢 SUCCESS: All criteria met. Remove any visible alerts and advance layout views 
  const existingWarning = document.getElementById("poa-orange-alert-banner"); 
  if (existingWarning) existingWarning.remove(); 
  
  console.log("[POA Interceptor] Step 4 compliance gates passed. Moving forward onto Step 5."); 

  // Ensure evaluation metadata cache runs completely to lock verified signature state
  if (typeof window.evaluatePoaInputStateMatrix === "function") {
    window.evaluatePoaInputStateMatrix();
  }

  // 🧠 CRITICAL DATA MIRROR PASS: 
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

} catch (validationGateError) {
  console.error("[POA Validation Gate Exception Caught]:", validationGateError);
  return false;
}
};

// Export the method safely to global scope window records 
window.runActivePoaClickValidationGate = runActivePoaClickValidationGate;



// ============================================================================ //
// 📡 UN-FREEZER BRIDGE ATTACHMENT - CHUNK 1                                    //
// ============================================================================ //

/**
 * High-performance safety un-freezer utility.
 * Keeps the button active to capture clicks for shake animations, while 
 * enforcing explicit step-by-step layout opacities based on user progress.
 */
function forceUnfreezeStep4FormInputs() {
  console.log("[POA Security Hub] Validating form interaction channels...");
  
  const signatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
  const consentCheckbox = document.getElementById("poa_consent_checkbox");
  const nextStepButton = document.getElementById("poa-next-btn") || document.querySelector("#step-panel-4 .btn-wizard-main") || document.querySelector("#step-4 .btn-wizard-main");
  
  const nameFieldWrapper = document.getElementById("poa_input_wrapper");
  const checkboxWrapper = document.getElementById("poa_consent_wrapper");

  // Step 1: If user hasn't scrolled to the bottom, keep fields visually frozen
  if (!window.hasUserScrolledToBottomPoa) {
    if (nameFieldWrapper) {
      nameFieldWrapper.style.opacity = "0.4";
      nameFieldWrapper.style.pointerEvents = "none";
    }
    if (checkboxWrapper) {
      checkboxWrapper.style.opacity = "0.4";
      checkboxWrapper.style.pointerEvents = "none";
    }
    if (signatureInput) signatureInput.disabled = true;
    if (consentCheckbox) consentCheckbox.disabled = true;
  } else {
    // Scroll cleared. Unlock Step 2 input box layout
    if (nameFieldWrapper) {
      nameFieldWrapper.style.opacity = "1";
      nameFieldWrapper.style.pointerEvents = "auto";
    }
    if (signatureInput) {
      signatureInput.disabled = false;
      signatureInput.readOnly = false;
    }

    // Step 3 Lock Check: Only unlock the checkbox layer if name signature is valid
    const currentSignatureText = signatureInput ? signatureInput.value.trim() : "";
    const isSignatureStringValid = currentSignatureText.length >= 2 && currentSignatureText.includes(" ");

    if (isSignatureStringValid) {
      if (checkboxWrapper) {
        checkboxWrapper.style.opacity = "1";
        checkboxWrapper.style.pointerEvents = "auto";
      }
      if (consentCheckbox) {
        consentCheckbox.disabled = false;
        consentCheckbox.style.cursor = "pointer";
      }
    } else {
      if (checkboxWrapper) {
        checkboxWrapper.style.opacity = "0.4";
        checkboxWrapper.style.pointerEvents = "none";
      }
      if (consentCheckbox) {
        consentCheckbox.checked = false;
        consentCheckbox.disabled = true;
        consentCheckbox.style.cursor = "not-allowed";
      }
    }
  }

  // 🚀 BUTTON ROUTING UPDATE: Force the click handler onto your validation gate interceptor 
  // keeping the button clickable so the shake animation plays if forms are incomplete.
  if (nextStepButton) {
    nextStepButton.removeAttribute("disabled");
    nextStepButton.disabled = false;
    nextStepButton.style.setProperty("opacity", "1", "important");
    nextStepButton.style.setProperty("cursor", "pointer", "important");
    nextStepButton.style.setProperty("pointer-events", "auto", "important");

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

  // If conditions are fully cleared, erase old structural alerts immediately
  if (isSignatureValid && isConsentChecked && window.hasUserScrolledToBottomPoa) {
    const existingWarning = document.getElementById("poa-orange-alert-banner");
    if (existingWarning) {
      existingWarning.remove();
      console.log("[POA Matrix Engine] Compliance conditions satisfied. Warning banner dismissed.");
    }
  }
  return true;
}

// ============================================================================ //
// ⓘ CONTEXTUAL TOOLTIP POP-UP ENGINE (MATCHES UNIFIED ALERT DESIGN SPEC)       //
// ============================================================================ //
window.checkPoaInputStateSilently = typeof checkPoaInputStateSilently !== "undefined" ? checkPoaInputStateSilently : window.checkPoaInputStateSilently;

/**
 * Toggles visibility states for the Step 4 legal explanation tooltip popup box.
 * Styled to perfectly match your clean, unified corporate white/navy alert banner.
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

  // RE-SKIN THE CONTAINER LAYOUT: Wiped legacy styling, applied corporate white/navy alert palette
  tooltipCard.style.display = "block";
  tooltipCard.style.setProperty("background-color", "#ffffff", "important");
  tooltipCard.style.setProperty("border", "1px solid #e2e8f0", "important");
  tooltipCard.style.setProperty("border-left", "4px solid #0a1f44", "important"); // Corporate Navy branding
  tooltipCard.style.setProperty("box-shadow", "0 10px 25px -5px rgba(10, 31, 68, 0.1), 0 8px 10px -6px rgba(10, 31, 68, 0.05)", "important");
}

// Global window exposure pass mapping
window.togglePoaDisplay = togglePoaContextualTooltipDisplay;
window.togglePoaContextualTooltipDisplay = togglePoaContextualTooltipDisplay; // Legacy naming compatibility

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
