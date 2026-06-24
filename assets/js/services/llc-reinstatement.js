// ============================================================================ //
// 🛠️ LLC REINSTATEMENT PART 1 VALIDATION MATRIX ENGINE 
// ============================================================================ //
export const llcReinPart1Validation = {
  requiredFields: [
    { id: 'rein_original_name', msg: 'Original LLC Name is required.' },
    { id: 'rein_state_of_formation', msg: 'State of Formation selection is required.' },
    { id: 'rein_principal_street', msg: 'Principal Office Street Address is required.' },
    { id: 'rein_principal_city', msg: 'Principal Office City is required.' },
    { id: 'rein_principal_state', msg: 'Principal Office State selection is required.' },
    { id: 'rein_principal_zip', msg: 'Principal Office Zip Code is required.' },
    { id: 'rein_contact_name', msg: "Primary Contact Person's Full Name is required." },
    { id: 'rein_contact_street', msg: "Contact Person's Address is required." },
    { id: 'rein_contact_city', msg: "Contact Person's City is required." },
    { id: 'rein_contact_state', msg: "Contact Person's State selection is required." },
    { id: 'rein_contact_zip', msg: "Contact Person's Zip Code is required." },
    { id: 'rein_contact_phone', msg: "Contact Person's Phone Number is required." },
    { id: 'rein_contact_email', msg: "Contact Person's Email Address is required." }
  ],

  validate: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process basic mandatory fields presence checks
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Validate ZIP Code Length Matrix Configurations
    ['rein_principal_zip', 'rein_contact_zip'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value.trim() && !/^\d{5}$/.test(el.value.trim())) {
        setError(el, 'Zip Code must consist of exactly 5 numbers.');
      }
    });

    // 3. Validate Contact Email Layout Formatting
    const emailEl = document.getElementById("rein_contact_email");
    if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
      setError(emailEl, "Please provide a valid structured email address.");
    }

    // 4. Validate Phone baseline length parameter counts
    const phoneEl = document.getElementById("rein_contact_phone");
    if (phoneEl && phoneEl.value.trim()) {
      const cleanDigits = phoneEl.value.replace(/\D/g, "");
      if (cleanDigits.length < 10) setError(phoneEl, "Phone number must be at least 10 digits.");
    }

    return { isValid, errors };
  }
};

// FAMILY 3A: LLC REINSTATEMENT REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildLlcReinstatementPart1(stateDropdownOptionsHtml = "") {
  return `
    <!-- INFORMATION OVERLAY BOX -->
    <div style="grid-column: span 2; background: #f8fafc; border-left: 4px solid var(--primary); padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 16px; box-sizing: border-box;">
      <h4 style="color: var(--navy); margin: 0 0 6px 0; font-size: 0.95rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-building-shield" style="color: var(--primary);"></i> Understanding LLC Reinstatement
      </h4>
      <p style="color: var(--slate); font-size: 0.825rem; margin: 0 0 8px 0; line-height: 1.5;">
        An LLC Reinstatement is the formal legal process required to restore a limited liability company back to active, compliant, and good standing status after it has been administratively suspended, forfeited, or dissolved by the state registry.
      </p>
      <p style="color: #b45309; font-size: 0.825rem; margin: 0; line-height: 1.5; font-weight: 700;">
        ⚠️ CRITICAL MANDATE: All outstanding state fees, franchise taxes, penalties, and unfiled annual report fees must be paid in full before the state or government will reinstate your business entity.
      </p>
    </div>

    <!-- SECTION 1: LLC INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 8px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. LLC Information</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="rein_original_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Original LLC Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="rein_original_name" required placeholder="The name of the LLC as it appears in the state records" class="wizard-input-field">
    </div>

    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="rein_current_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current LLC Name (If Applicable)</label>
      <input type="text" id="rein_current_name" placeholder="Enter name if changed after deactivation" class="wizard-input-field">
    </div>

    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="rein_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
      <select id="rein_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
        <option value="" disabled selected>Select State...</option>
        ${stateDropdownOptionsHtml}
      </select>
    </div>

    <!-- REPAIRED SYSTEM MATRIX: Injected missing input layout tag natively -->
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="rein_llc_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">LLC ID Number (If Known)</label>
      <input type="text" id="rein_llc_id" placeholder="State filing number ID reference" class="wizard-input-field">
    </div>

    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Office Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="rein_principal_street" required placeholder="Street Name and Number, Suite, Unit" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'rein_principal')">
    </div>

    <div class="wizard-input-group" style="grid-column: span 2;">
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
        <div>
          <label for="rein_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
          <input type="text" id="rein_principal_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
        </div>
        <div>
          <label for="rein_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
          <select id="rein_principal_state" required class="wizard-input-field" style="font-weight: 600;">
            ${stateDropdownOptionsHtml}
          </select>
        </div>
        <div>
          <label for="rein_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
          <input type="text" id="rein_principal_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
        </div>
      </div>
    </div>

    <!-- SECTION 2: CONTACT INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contact Information</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Contact Person's Full Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="rein_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
    </div>

    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_contact_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="rein_contact_street" required placeholder="Street Address, Suite, Apt" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'rein_contact')">
    </div>

    <div class="wizard-input-group" style="grid-column: span 2;">
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
        <div>
          <label for="rein_contact_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
          <input type="text" id="rein_contact_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
        </div>
        <div>
          <label for="rein_contact_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
          <select id="rein_contact_state" required class="wizard-input-field" style="font-weight: 600;">
            ${stateDropdownOptionsHtml}
          </select>
        </div>
        <div>
          <label for="rein_contact_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
          <input type="text" id="rein_contact_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
        </div>
      </div>
    </div>

    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="rein_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Phone Number <span style="color: #ef4444;">*</span></label>
      <input type="tel" id="rein_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
    </div>

    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="rein_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Email Address <span style="color: #ef4444;">*</span></label>
      <input type="email" id="rein_contact_email" required placeholder="email@example.com" class="wizard-input-field">
    </div>
  `;
}
window.buildLlcReinstatementPart1 = buildLlcReinstatementPart1;

// ============================================================================ //
// 🛠️ LLC REINSTATEMENT PART 2 VALIDATION MATRIX ENGINE 
// ============================================================================ //
export const llcReinPart2Validation = {
  requiredFields: [
    { id: 'rein_deactivation_reason', msg: 'Please select a reason for deactivation.' },
    { id: 'rein_fees_paid_choice', msg: 'Please select a fees and penalties verification option.' },
    { id: 'rein_rectified_choice', msg: 'Please specify if compliance issues have been rectified.' }
  ],

  validate: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process primary required dropdown targets
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Conditional Check: Validate Compliance Audit field if fees selection matches NO
    const feesPaidChoice = document.getElementById("rein_fees_paid_choice");
    if (feesPaidChoice && feesPaidChoice.value === "no") {
      const auditSelect = document.getElementById("rein_add_compliance_audit");
      if (auditSelect && !auditSelect.value.trim()) {
        setError(auditSelect, "Please choose a compliance audit preference option.");
      } else if (auditSelect) {
        clearError(auditSelect);
      }
    }

    // 3. Conditional Check: Validate Pending Issues textbox if rectified selection matches NO
    const rectifiedChoice = document.getElementById("rein_rectified_choice");
    if (rectifiedChoice && rectifiedChoice.value === "no") {
      const pendingDetails = document.getElementById("rein_pending_details");
      if (pendingDetails && !pendingDetails.value.trim()) {
        setError(pendingDetails, "Please provide structural details on what compliance items remain to be addressed.");
      } else if (pendingDetails) {
        clearError(pendingDetails);
      }
    }

    return { isValid, errors };
  }
};

// FAMILY 3A: LLC REINSTATEMENT REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildLlcReinstatementPart2(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 3: REASON FOR REINSTATEMENT -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Reason for Reinstatement</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_deactivation_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Why has your entity been deactivated or dissolved? <span style="color: #ef4444;">*</span></label>
      <select id="rein_deactivation_reason" required class="wizard-input-field" style="font-weight: 600;">
        <option value="" disabled selected>Select Reason...</option>
        <option value="annual-reports">Failure to file periodic annual reports / statements</option>
        <option value="unpaid-taxes">Unpaid franchise taxes or delinquency indicators</option>
        <option value="registered-agent">Failure to maintain an active registered agent</option>
        <option value="voluntary">Voluntary dissolution error adjustment</option>
        <option value="other">Other statutory non-compliance issue</option>
      </select>
    </div>

    <!-- SECTION 4: OUTSTANDING FEES AUDIT -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Fees & Penalties Verification</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_fees_paid_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have all outstanding fees and penalties been paid? <span style="color: #ef4444;">*</span></label>
      <select id="rein_fees_paid_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleReinstatementFeesNoticeVisibility(this.value)">
        <option value="" disabled selected>Select Option...</option>
        <option value="yes">Yes, all standard balances have been completely cleared</option>
        <option value="no">No, there are outstanding balances or state collections pending</option>
      </select>
    </div>

    <!-- Conditional Container: Balance Recovery Notice & Compliance Add-on Selection Linkages -->
    <div id="rein_fees_unpaid_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
      <div style="background: #fffaf0; border-left: 4px solid #f59e0b; padding: 14px; border-radius: 0 8px 8px 0; box-sizing: border-box;">
        <p style="color: #b45309; font-size: 0.825rem; margin: 0; font-weight: 600; line-height: 1.5;">
          ⚠️ All outstanding fees must be paid before the state will reinstate your formation. Filings4u will send you a notification inside your dashboard if there is a balance on your account.
        </p>
      </div>
      <div class="wizard-input-group" style="margin: 0; width: 100%;">
        <label for="rein_add_compliance_audit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Would you like to use Filings4u Compliance Service for $99 + State Fees to check if all fees have been paid? <span style="color: #ef4444;">*</span></label>
        <select id="rein_add_compliance_audit" class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
          <option value="no" selected>No, I will review outstanding agency ledger lines independently</option>
          <option value="yes">Yes, add Filings4u Compliance Balance Check & State Audit Service — $99.00</option>
        </select>
      </div>
    </div>

    <!-- SECTION 5: COMPLIANCE INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Compliance Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_rectified_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you rectified all compliance issues that led to the suspension/dissolution? <span style="color: #ef4444;">*</span></label>
      <select id="rein_rectified_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleReinstatementIssuesVisibility(this.value)">
        <option value="" disabled selected>Select Option...</option>
        <option value="yes">Yes, all historical compliance issues have been fully resolved</option>
        <option value="no">No, certain administrative compliance discrepancies remain active</option>
      </select>
    </div>
    <div id="rein_pending_issues_wrapper" style="grid-column: span 2; display: none;">
      <div class="wizard-input-group" style="margin: 0; width: 100%;">
        <label for="rein_pending_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">If no, please detail what remains to be addressed: <span style="color: #ef4444;">*</span></label>
        <input type="text" id="rein_pending_details" placeholder="Describe unfiled reports, outstanding tax adjustments, or remaining items..." class="wizard-input-field">
      </div>
    </div>
  `;
}

// ============================================================================ //
// 🛠️ LLC REINSTATEMENT PART 3 VALIDATION MATRIX ENGINE 
// ============================================================================ //
export const llcReinPart3Validation = {
  requiredFields: [
    { id: 'rein_ein_choice', msg: 'Please select an option for your Employer Identification Number (EIN).' },
    { id: 'rein_duration_type', msg: 'Please specify if this restoration is for a specific period or ongoing.' }
  ],

  validate: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Check baseline mandatory selection elements presence
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Conditional Check: Validate new EIN Reason input field if selection matches YES
    const einChoice = document.getElementById("rein_ein_choice");
    if (einChoice && einChoice.value === "yes") {
      const reasonEl = document.getElementById("rein_ein_reason");
      if (reasonEl && !reasonEl.value.trim()) {
        setError(reasonEl, "Reason for obtaining a new EIN is required.");
      } else if (reasonEl) {
        clearError(reasonEl);
      }
    }

    // 3. Conditional Check: Validate Target Dissolution Date if duration matches SPECIFIC
    const durationType = document.getElementById("rein_duration_type");
    if (durationType && durationType.value === "specific") {
      const dateEl = document.getElementById("rein_duration_date");
      if (dateEl && !dateEl.value.trim()) {
        setError(dateEl, "Target Dissolution / Expiration Date is required.");
      } else if (dateEl) {
        clearError(dateEl);
      }
    }

    return { isValid, errors };
  }
};

// FAMILY 3A: LLC REINSTATEMENT REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildLlcReinstatementPart3(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 6: TAX INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Tax Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for a new Employer Identification Number (EIN) after reinstatement? <span style="color: #ef4444;">*</span></label>
      <select id="rein_ein_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleReinstatementEinWorkflow(this.value)">
        <option value="no" selected>No, I already hold or will apply for EIN structures independently</option>
        <option value="yes">Yes, add Filings4u Master EIN Procurement Service — $75.00</option>
      </select>
    </div>
    <div id="rein_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="rein_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining a new EIN (if applicable) <span style="color: #ef4444;">*</span></label>
      <input type="text" id="rein_ein_reason" placeholder="e.g. Corporate operational baseline reconstruction request..." class="wizard-input-field">
    </div>

    <!-- SECTION 7: DURATION OF REINSTATEMENT -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Duration of Reinstatement</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_duration_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will this reinstatement be for a specific period or ongoing? <span style="color: #ef4444;">*</span></label>
      <select id="rein_duration_type" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleReinstatementDurationFieldVisibility(this.value)">
        <option value="ongoing" selected>Ongoing (Indefinite corporate lifecycle post-restoration)</option>
        <option value="specific">Specific Period (Defined timeline constraint structures)</option>
      </select>
    </div>
    <div id="rein_duration_date_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="rein_duration_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Target Dissolution / Expiration Date <span style="color: #ef4444;">*</span></label>
      <input type="date" id="rein_duration_date" class="wizard-input-field">
    </div>

    <!-- SECTION 8: ADDITIONAL PROVISIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Additional Provisions</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="rein_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Provisions</label>
      <textarea id="rein_provisions" placeholder="Detail any additional terms, specific clauses, or agreements relevant to your LLC reinstatement..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
    </div>
  `;
}
window.buildLlcReinstatementPart3 = buildLlcReinstatementPart3;

// 📦 MASTER LLC REINSTATEMENT ASSEMBLY HOOK
function buildLlcReinstatementForm(stateDropdownOptionsHtml = "") {
  return buildLlcReinstatementPart1(stateDropdownOptionsHtml) + buildLlcReinstatementPart2(stateDropdownOptionsHtml) + buildLlcReinstatementPart3(stateDropdownOptionsHtml);
}
window.buildLlcReinstatementForm = buildLlcReinstatementForm;

// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS (LLC REINSTATEMENT)
// ============================================================================ //

window.toggleReinstatementFeesNoticeVisibility = function(value) {
  const unpaidWrapper = document.getElementById("rein_fees_unpaid_wrapper");
  const auditSelect = document.getElementById("rein_add_compliance_audit");
  if (!unpaidWrapper) return;

  if (value === "no") {
    unpaidWrapper.style.setProperty("display", "flex", "important");
    if (auditSelect) auditSelect.setAttribute("required", "required");
  } else {
    unpaidWrapper.style.setProperty("display", "none", "important");
    if (auditSelect) { auditSelect.removeAttribute("required"); auditSelect.value = "no"; }
    window.customSelectedComplianceAuditServiceActive = false; // Turn off balance check fee
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
};

window.toggleReinstatementIssuesVisibility = function(value) {
  const issuesWrapper = document.getElementById("rein_pending_issues_wrapper");
  const issuesInput = document.getElementById("rein_pending_details");
  if (!issuesWrapper) return;

  if (value === "no") {
    issuesWrapper.style.setProperty("display", "block", "important");
    if (issuesInput) issuesInput.setAttribute("required", "required");
  } else {
    issuesWrapper.style.setProperty("display", "none", "important");
    if (issuesInput) { issuesInput.removeAttribute("required"); issuesInput.value = ""; }
  }
};

window.toggleReinstatementEinWorkflow = function(value) {
  const einWrapper = document.getElementById("rein_ein_reason_wrapper");
  const einInput = document.getElementById("rein_ein_reason");
  if (!einWrapper) return;

  if (value === "yes") {
    einWrapper.style.setProperty("display", "flex", "important");
    if (einInput) einInput.setAttribute("required", "required");
    window.customSelectedEinProcurementServiceActive = true; // Appends procurement add-on to checkout
  } else {
    einWrapper.style.setProperty("display", "none", "important");
    if (einInput) { einInput.removeAttribute("required"); einInput.value = ""; }
    window.customSelectedEinProcurementServiceActive = false;
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
};

window.toggleReinstatementDurationFieldVisibility = function(value) {
  const dateWrapper = document.getElementById("rein_duration_date_wrapper");
  const dateInput = document.getElementById("rein_duration_date");
  if (!dateWrapper) return;

  if (value === "specific") {
    dateWrapper.style.setProperty("display", "flex", "important");
    if (dateInput) dateInput.setAttribute("required", "required");
  } else {
    dateWrapper.style.setProperty("none", "important");
    if (dateInput) { dateInput.removeAttribute("required"); dateInput.value = ""; }
  }
};

// Internal checking pipeline tracker for premium compliance state audit selections
window.toggleReinstatementAuditServicePricingHook = function(value) {
  window.customSelectedComplianceAuditServiceActive = (value === "yes");
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
};
