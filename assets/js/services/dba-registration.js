// ============================================================================ //
// 🛠️ DBA REGISTRATION VALIDATION MATRIX ENGINE 
// ============================================================================ //
export const dbaRegistrationValidation = {
  requiredFields: [
    { id: 'dba_proposed_name', msg: 'Proposed DBA Name is required.' },
    { id: 'dba_business_purpose', msg: 'Business Purpose is required.' },
    { id: 'dba_bus_street', msg: 'Business Location Street Address is required.' },
    { id: 'dba_bus_city', msg: 'Business City is required.' },
    { id: 'dba_bus_state', msg: 'Business State code is required.' },
    { id: 'dba_bus_zip', msg: 'Business Zip Code is required.' },
    { id: 'dba_owner_name', msg: "Owner's Full Name is required." },
    { id: 'dba_owner_phone', msg: "Owner's Contact Number is required." },
    { id: 'dba_owner_email', msg: "Owner's Email Address is required." },
    { id: 'dba_owner_street', msg: "Owner's Residential Street Address is required." },
    { id: 'dba_owner_city', msg: "Owner's City is required." },
    { id: 'dba_owner_state', msg: "Owner's State code is required." },
    { id: 'dba_owner_zip', msg: "Owner's Zip Code is required." },
    { id: 'dba_collision_check', msg: 'DBA Name Registration status answer is required.' }
  ],

  validateStep: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process mandatory target inputs presence
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Validate Two-Letter Alphabet State Formats
    ['dba_bus_state', 'dba_owner_state'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value.trim() && !/^[a-zA-Z]{2}$/.test(el.value.trim())) {
        setError(el, 'State code must consist of exactly 2 letters.');
      }
    });

    // 3. Validate 5-Digit Standard Zip Codes
    ['dba_bus_zip', 'dba_owner_zip'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value.trim() && !/^\d{5}$/.test(el.value.trim())) {
        setError(el, 'Zip Code must consist of exactly 5 numbers.');
      }
    });

    // 4. Validate Owner Email Layout Format Rules
    const emailEl = document.getElementById("dba_owner_email");
    if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
      setError(emailEl, "Please provide a valid owner email address.");
    }

    // 5. Validate Contact Phone Numerical Baseline Length
    const phoneEl = document.getElementById("dba_owner_phone");
    if (phoneEl && phoneEl.value.trim()) {
      const digits = phoneEl.value.replace(/\D/g, "");
      if (digits.length < 10) setError(phoneEl, "Owner's Contact Number must contain at least 10 digits.");
    }

    // 6. Conditional Check: Validate Written Consent questions if name conflict choice is YES
    const collisionCheck = document.getElementById("dba_collision_check");
    if (collisionCheck && collisionCheck.value === "yes") {
      const consentSelect = document.getElementById("dba_has_consent");
      if (consentSelect && !consentSelect.value.trim()) {
        setError(consentSelect, "Please specify if you hold executed written permission credentials.");
      } else if (consentSelect) {
        clearError(consentSelect);
      }
    }

    return { isValid, errors };
  }
};

// FAMILY 3B: DBA / FICTITIOUS ASSUMED NAME REGISTRATION LAYOUT
function buildDbaRegistrationFieldsLayoutHtml() {
  return `
    <!-- SECTION 1: BUSINESS INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="dba_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed DBA Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_proposed_name" required placeholder="Fictitious trade name under which business will operate" class="wizard-input-field">
      <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Ensure your chosen trade name complies with state regulations.</span>
    </div>
    <div class="wizard-input-group">
      <label for="dba_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Purpose <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_business_purpose" required placeholder="Brief description of what the business will do..." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_bus_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Location Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_bus_street" placeholder="123 Main St" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'dba_bus')">
    </div>
    <div class="wizard-input-group">
      <label for="dba_bus_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_bus_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="dba_bus_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <input type="text" id="dba_bus_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
      </div>
      <div>
        <label for="dba_bus_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="dba_bus_zip" required placeholder="78701" class="wizard-input-field">
      </div>
    </div>

    <!-- SECTION 2: OWNER INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Owner Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="dba_owner_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Full Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_owner_name" required placeholder="Full Legal Name" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="dba_owner_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Contact Number <span style="color: #ef4444;">*</span></label>
      <input type="tel" id="dba_owner_phone" required placeholder="(512) 555-0199" style="font-family: monospace;" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_owner_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Email Address <span style="color: #ef4444;">*</span></label>
      <input type="email" id="dba_owner_email" required placeholder="owner@domain.com" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_owner_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Residential Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_owner_street" required placeholder="789 Residential Blvd" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="dba_owner_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_owner_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="dba_owner_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <input type="text" id="dba_owner_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
      </div>
      <div>
        <label for="dba_owner_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="dba_owner_zip" required placeholder="78701" class="wizard-input-field">
      </div>
    </div>

    <!-- SECTION 3: EXISTING BUSINESS INFORMATION (IF APPLICABLE) -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Existing Business Information (If Applicable)</h3>
    </div>
    <div class="wizard-input-group">
      <label for="dba_exist_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current Legal Business Name</label>
      <input type="text" id="dba_exist_legal_name" placeholder="Leave blank if registering as an individual" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="dba_exist_structure" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current Legal Business Structure</label>
      <select id="dba_exist_structure" class="wizard-input-field" style="font-weight: 600;">
        <option value="none" selected>No parent structure (Individual / Sole Proprietorship)</option>
        <option value="llc">Limited Liability Company (LLC)</option>
        <option value="corporation">Corporation (C-Corp / S-Corp)</option>
        <option value="partnership">Partnership</option>
      </select>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_exist_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current Business Street Address</label>
      <input type="text" id="dba_exist_street" placeholder="123 Corporate Pkwy, Suite 100" class="wizard-input-field">
    </div>

    <!-- SECTION 4: DBA DETAILS & CONFIRMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. DBA Details &amp; Name Search</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_collision_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Is this DBA name already registered by another entity? <span style="color: #ef4444;">*</span></label>
      <select id="dba_collision_check" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDbaPermissionWorkflow(this.value)">
        <option value="no" selected>No, name is completely available / original</option>
        <option value="yes">Yes, name is registered by another entity</option>
      </select>
    </div>

    <!-- Conditional Wrapper: Written Consent Checker vs. filings4u Name Search -->
    <div id="dba_permission_matrix_wrapper" style="grid-column: span 2; background: var(--light-bg); padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; box-sizing: border-box; display: none; flex-direction: column; gap: 14px;">
      <div class="wizard-input-group" style="margin: 0;">
        <label for="dba_has_consent" style="font-weight: 700; font-size: 0.82rem; color: var(--navy);">Have you obtained written permission from the original entity? <span style="color: #ef4444;">*</span></label>
        <select id="dba_has_consent" class="wizard-input-field" style="background: #ffffff; font-weight: 600;" onchange="toggleDbaSearchProcurement(this.value)">
          <option value="yes" selected>Yes, I have executed written permission files ready to upload</option>
          <option value="no-buy">No, add Filings4u Comprehensive Name Availability Search — $79.00</option>
        </select>
      </div>
    </div>
  ` + (typeof buildSolePropPart2FieldsLayoutHtml === "function" ? buildSolePropPart2FieldsLayoutHtml() : "");
}
window.buildDbaRegistrationFieldsLayoutHtml = buildDbaRegistrationFieldsLayoutHtml;

// ============================================================================ //
// 🛠️ DBA REGISTRATION PART 2 VALIDATION MATRIX ENGINE 
// ============================================================================ //
export const dbaRegistrationPart2Validation = {
  requiredFields: [
    { id: 'dba_ein_choice', msg: 'Please select an option for your Employer Identification Number (EIN).' },
    { id: 'dba_license_check', msg: 'Please verify if you have checked localized business licenses.' },
    { id: 'dba_duration_choice', msg: 'Please specify if this trade name operational model is temporary or ongoing.' }
  ],

  validateStep: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process standard layout select elements presence
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Conditional Check: Validate EIN Reason input box if selection matches YES
    const einChoice = document.getElementById("dba_ein_choice");
    if (einChoice && einChoice.value === "yes") {
      const reasonEl = document.getElementById("dba_ein_reason");
      if (reasonEl && !reasonEl.value.trim()) {
        setError(reasonEl, "Reason for obtaining an EIN is required.");
      } else if (reasonEl) {
        clearError(reasonEl);
      }
    }

    // 3. Conditional Check: Validate Expiration Date field if duration matches TEMPORARY
    const durationChoice = document.getElementById("dba_duration_choice");
    if (durationChoice && durationChoice.value === "temporary") {
      const dateEl = document.getElementById("dba_expiration_date");
      if (dateEl && !dateEl.value.trim()) {
        setError(dateEl, "Specify Expiration Date is required.");
      } else if (dateEl) {
        clearError(dateEl);
      }
    }

    return { isValid, errors };
  }
};

// FAMILY 3B: DBA / FICTITIOUS ASSUMED NAME REGISTRATION LAYOUT - PART 2
function buildDbaRegistrationFieldsLayoutHtmlPart2() {
  return `
    <!-- SECTION 5: TAX INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Tax Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for an Employer Identification Number (EIN)? <span style="color: #ef4444;">*</span></label>
      <select id="dba_ein_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDbaEinReasonField(this.value)">
        <option value="no" selected>No, I do not require a Federal EIN at this time</option>
        <option value="yes">Yes, I want to procure an EIN record</option>
      </select>
    </div>
    <div id="dba_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="dba_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining an EIN <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_ein_reason" placeholder="e.g., Hiring employees, opening a business banking line..." class="wizard-input-field">
    </div>

    <!-- SECTION 6: COMPLIANCE AND LICENSES -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Compliance and Licenses</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_license_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you verified the necessary localized business licenses or permits? <span style="color: #ef4444;">*</span></label>
      <select id="dba_license_check" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDbaLicenseWorkflow(this.value)">
        <option value="" disabled selected>Choose an option...</option>
        <option value="yes">Yes, I have verified my structural requirements</option>
        <option value="no">No, I need help — Add Filings4u Compliance Research Suite — $79.00</option>
      </select>
    </div>
    <div id="dba_custom_license_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="dba_intended_licenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">List Intentional Licenses / Permits to Apply For</label>
      <textarea id="dba_intended_licenses" placeholder="Provide general targets: e.g. Municipal Sales Tax Permit, Local Health Department Authorization..." rows="2" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>

    <!-- SECTION 7: ADDITIONAL PROVISIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Additional Provisions (Optional)</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">DBA Special Clauses or Understandings</label>
      <textarea id="dba_provisions" placeholder="Detail any extra terms or agreements relevant to your DBA registration..." rows="3" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>

    <!-- SECTION 8: DURATION OF DBA -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Duration of DBA</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will this DBA be temporary or ongoing? <span style="color: #ef4444;">*</span></label>
      <select id="dba_duration_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDbaDurationField(this.value)">
        <option value="perpetual" selected>Perpetual (Ongoing baseline trade presence status)</option>
        <option value="temporary">Temporary / Specified Term</option>
      </select>
    </div>
    <div id="dba_duration_term_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="dba_expiration_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Specify Expiration Date <span style="color: #ef4444;">*</span></label>
      <input type="date" id="dba_expiration_date" class="wizard-input-field" style="font-weight: 600;">
    </div>
  `;
}
window.buildDbaRegistrationFieldsLayoutHtmlPart2 = buildDbaRegistrationFieldsLayoutHtmlPart2;

// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS (DBA EXTENSIONS)
// ============================================================================ //

window.toggleDbaEinReasonField = function(value) {
  const einWrapper = document.getElementById("dba_ein_reason_wrapper");
  const einInput = document.getElementById("dba_ein_reason");
  if (!einWrapper) return;

  if (value === "yes") {
    einWrapper.style.setProperty("display", "flex", "important");
    if (einInput) einInput.setAttribute("required", "required");
    window.customSelectedEinProcurementServiceActive = true; // Appends EIN fee to subtotals
  } else {
    einWrapper.style.setProperty("display", "none", "important");
    if (einInput) { einInput.removeAttribute("required"); einInput.value = ""; }
    window.customSelectedEinProcurementServiceActive = false;
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
};

window.toggleDbaLicenseWorkflow = function(value) {
  const licWrapper = document.getElementById("dba_custom_license_wrapper");
  if (!licWrapper) return;

  if (value === "yes") {
    licWrapper.style.setProperty("display", "flex", "important");
    window.customSelectedLicenseAuditSuiteActive = false; // Turn off research suite fee
  } else {
    licWrapper.style.setProperty("display", "none", "important");
    licWrapper.querySelectorAll("textarea").forEach(el => el.value = "");
    window.customSelectedLicenseAuditSuiteActive = (value === "no"); // Appends research suite fee if NO
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
};

window.toggleDbaDurationField = function(value) {
  const dateWrapper = document.getElementById("dba_duration_term_wrapper");
  const dateInput = document.getElementById("dba_expiration_date");
  if (!dateWrapper) return;

  if (value === "temporary") {
    dateWrapper.style.setProperty("display", "flex", "important");
    if (dateInput) dateInput.setAttribute("required", "required");
  } else {
    dateWrapper.style.setProperty("display", "none", "important");
    if (dateInput) { dateInput.removeAttribute("required"); dateInput.value = ""; }
  }
};
