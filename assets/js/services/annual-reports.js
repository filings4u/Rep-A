// ============================================================================ //
// 🛠️ ANNUAL REPORTS FILING VALIDATION MATRIX ENGINE (PART 1 OF 3)
// ============================================================================ //
const annualReportsPart1Validation = {
  requiredFields: [
    { id: 'ar_business_name', msg: 'Business Name is required.' },
    { id: 'ar_business_id', msg: 'Business ID Number is required.' },
    { id: 'ar_business_type', msg: 'Please select a Business Type.' },
    { id: 'ar_principal_street', msg: 'Principal Business Address Street is required.' },
    { id: 'ar_principal_city', msg: 'Principal Business Address City is required.' },
    { id: 'ar_principal_state', msg: 'Principal Business Address State selection is required.' },
    { id: 'ar_principal_zip', msg: 'Principal Business Address Zip Code is required.' },
    { id: 'ar_mailing_choice', msg: 'Mailing Address Selection choice option is required.' },
    { id: 'ar_contact_name', msg: "Primary Contact Person's Full Name is required." },
    { id: 'ar_contact_phone', msg: "Contact Person's Phone Number is required." },
    { id: 'ar_contact_email', msg: "Contact Person's Email Address is required." }
  ],

  validate: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process standard layout tracking items
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Validate Baseline Principal ZIP Formatting
    const zipEl = document.getElementById("ar_principal_zip");
    if (zipEl && zipEl.value.trim() && !/^\d{5}$/.test(zipEl.value.trim())) {
      setError(zipEl, 'Principal Business Address Zip Code must consist of exactly 5 numbers.');
    }

    // 3. Conditional Check: Alternate Mailing records validation (Fires if set to "different")
    const mailingChoice = document.getElementById("ar_mailing_choice");
    if (mailingChoice && mailingChoice.value === "different") {
      const mailingFields = [
        { id: 'ar_mailing_street', msg: 'Alternate Mailing Street Address is required.' },
        { id: 'ar_mailing_city', msg: 'Alternate Mailing City is required.' },
        { id: 'ar_mailing_state', msg: 'Alternate Mailing State selection is required.' },
        { id: 'ar_mailing_zip', msg: 'Alternate Mailing Zip Code is required.' }
      ];

      mailingFields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el) {
          const val = el.value.trim();
          let isFieldValid = !!val;

          if (field.id === 'ar_mailing_zip' && val && !/^\d{5}$/.test(val)) {
            isFieldValid = false;
            setError(el, 'Alternate Mailing Zip Code must consist of exactly 5 numbers.');
          }

          if (!isFieldValid) {
            setError(el, field.msg);
          } else if (field.id !== 'ar_mailing_zip' || /^\d{5}$/.test(val)) {
            clearError(el);
          }
        }
      });
    }

    // 4. Validate Contact Email String Layout
    const emailEl = document.getElementById("ar_contact_email");
    if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
      setError(emailEl, "Please enter a valid contact person email address.");
    }

    // 5. Validate Contact Phone Numeric baseline parameters length
    const phoneEl = document.getElementById("ar_contact_phone");
    if (phoneEl && phoneEl.value.trim()) {
      const cleanDigits = phoneEl.value.replace(/\D/g, "");
      if (cleanDigits.length < 10) setError(phoneEl, "Contact Person's Phone Number must contain at least 10 numbers.");
    }

    return { isValid, errors };
  }
};

// FAMILY 6A: ANNUAL REPORTS FILING APPLICATION LAYOUT MATRIX (PART 1 OF 3)
function buildAnnualReportsPart1(stateDropdownOptionsHtml = "") {
  return `
    <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS AN ANNUAL REPORT? -->
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is an Annual Report Filing?</strong> An Annual Report (or Biennial Statement) is a mandatory periodic filing required by state, municipal, and federal regulatory agencies to maintain your business's active legal standing. Failure to file by your statutory deadlines results in severe late fees, interest penalties, and automatic administrative dissolution or forfeiture of your entity protection shields.
    </div>

    <!-- SECTION 1: BUSINESS INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_business_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_business_name" required placeholder="Official name as registered with the registry" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_business_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business ID Number <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_business_id" required placeholder="State Filing, Charter, or Registration Number" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_business_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Type <span style="color: #ef4444;">*</span></label>
      <select id="ar_business_type" required class="wizard-input-field" style="font-weight: 600;">
        <option value="" disabled selected>Select Business Type...</option>
        <option value="llc">Limited Liability Company (LLC)</option>
        <option value="corporation">Corporation (Inc. / Corp.)</option>
        <option value="partnership">Partnership (LP / LLP / GP)</option>
        <option value="sole_proprietorship">Sole Proprietorship / Individual DBA</option>
      </select>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Business Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_principal_street" required placeholder="Street Name and Number, Suite, Unit" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ar_principal')">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
        <div>
          <label for="ar_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
          <input type="text" id="ar_principal_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
        </div>
        <div>
          <label for="ar_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
          <select id="ar_principal_state" required class="wizard-input-field" style="font-weight: 600;">
            ${stateDropdownOptionsHtml}
          </select>
        </div>
        <div>
          <label for="ar_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
          <input type="text" id="ar_principal_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
        </div>
      </div>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_mailing_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mailing Address Selection <span style="color: #ef4444;">*</span></label>
      <select id="ar_mailing_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportMailingAddressVisibility(this.value)">
        <option value="same" selected>Mailing Address is identical to Principal Address</option>
        <option value="different">Mailing Address is different</option>
      </select>
    </div>

    <!-- Hidden Conditional Container: Alternate Mailing Address Data -->
    <div id="ar_mailing_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
      <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Alternate Mailing Address Records</span>
        <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
          <label for="ar_mailing_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
          <input type="text" id="ar_mailing_street" placeholder="Street Name and Number, Suite, Unit" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ar_mailing')">
        </div>
        <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
          <div>
            <label for="ar_mailing_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_mailing_city" placeholder="City" class="wizard-input-field">
          </div>
          <div>
            <label for="ar_mailing_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
            <select id="ar_mailing_state" class="wizard-input-field" style="font-weight: 600;">
              ${stateDropdownOptionsHtml}
            </select>
          </div>
          <div>
            <label for="ar_mailing_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_mailing_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 2: CONTACT INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contact Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Contact Person's Full Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Phone Number <span style="color: #ef4444;">*</span></label>
      <input type="tel" id="ar_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Email Address <span style="color: #ef4444;">*</span></label>
      <input type="email" id="ar_contact_email" required placeholder="email@example.com" class="wizard-input-field">
    </div>
  `;
}

// Global scope registration mapper definitions
if (!window.formRegistry) window.formRegistry = {};
window.formRegistry['annual-reports-part1-layout'] = buildAnnualReportsPart1;
window.formRegistry['annual-reports-part1-validation'] = annualReportsPart1Validation;

// ============================================================================ //
// 🛠️ ANNUAL REPORTS FILING VALIDATION MATRIX ENGINE (PART 2 OF 3)
// ============================================================================ //
const annualReportsPart2Validation = {
  requiredFields: [
    { id: 'ar_state_due_date', msg: 'Annual Report Filing Due Date is required.' },
    { id: 'ar_state_filed_choice', msg: 'Please specify if your state annual report has been filed.' },
    { id: 'ar_city_filed_choice', msg: 'Please specify if your city annual report has been filed.' },
    { id: 'ar_federal_ein', msg: 'Federal Employer Identification Number (EIN) is required.' },
    { id: 'ar_fed_filed_choice', msg: 'Please specify if your federal taxes have been filed.' }
  ],

  validate: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process base required dropdown selectors and text fields presence
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Specific Validation: Federal EIN Length Constraint Format
    const einEl = document.getElementById("ar_federal_ein");
    if (einEl && einEl.value.trim()) {
      const pureDigits = einEl.value.replace(/\D/g, "");
      if (pureDigits.length !== 9) {
        setError(einEl, "Federal Employer Identification Number (EIN) must be exactly 9 digits.");
      }
    }

    // 3. Conditional Check: Validate State Reason if choice equals NO
    const stateChoice = document.getElementById("ar_state_filed_choice");
    if (stateChoice && stateChoice.value === "no") {
      const stateReason = document.getElementById("ar_state_reason");
      if (stateReason && !stateReason.value.trim()) setError(stateReason, "Please specify why the state annual filing is outstanding."); else clearError(stateReason);
    }

    // 4. Conditional Check: Validate City Reason if choice equals NO
    const cityChoice = document.getElementById("ar_city_filed_choice");
    if (cityChoice && cityChoice.value === "no") {
      const cityReason = document.getElementById("ar_city_reason");
      if (cityReason && !cityReason.value.trim()) setError(cityReason, "Please specify why the city annual filing is outstanding."); else clearError(cityReason);
    }

    // 5. Conditional Check: Validate Federal Reason if choice equals NO
    const fedChoice = document.getElementById("ar_fed_filed_choice");
    if (fedChoice && fedChoice.value === "no") {
      const fedReason = document.getElementById("ar_fed_reason");
      if (fedReason && !fedReason.value.trim()) setError(fedReason, "Please specify why the federal tax filing is outstanding."); else clearError(fedReason);
    }

    return { isValid, errors };
  }
};

// FAMILY 6A: ANNUAL REPORTS FILING APPLICATION LAYOUT MATRIX (PART 2 OF 3)
function buildAnnualReportsPart2(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 3: STATE FILINGS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. State Filings</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_state_due_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Annual Report Filing Due Date <span style="color: #ef4444;">*</span></label>
      <input type="date" id="ar_state_due_date" required class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_state_filed_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you filed your annual report for the current year? <span style="color: #ef4444;">*</span></label>
      <select id="ar_state_filed_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportStateExplanationVisibility(this.value)">
        <option value="" disabled selected>Select Option...</option>
        <option value="yes">Yes, current state annual filing is completed</option>
        <option value="no">No, current state annual filing is outstanding</option>
      </select>
    </div>
    
    <!-- REPAIRED SYSTEM INPUT NODE: Injected missing input tag beneath label path inside wrapper -->
    <div id="ar_state_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="ar_state_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify why: <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_state_reason" placeholder="e.g., Pending calculation adjustments, corporate data synchronization..." class="wizard-input-field">
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_state_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Attach a copy of the most recent annual report filed with the state:</label>
      <input type="file" id="ar_state_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
    </div>

    <!-- SECTION 4: CITY FILINGS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. City Filings</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_city_license_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City Business License Number (If Applicable)</label>
      <input type="text" id="ar_city_license_num" placeholder="Municipal business tax or license descriptor" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_city_due_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City Annual Report Filing Due Date</label>
      <input type="date" id="ar_city_due_date" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_city_filed_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you filed your annual report for the current year with the city? <span style="color: #ef4444;">*</span></label>
      <select id="ar_city_filed_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportCityExplanationVisibility(this.value)">
        <option value="na" selected>Not Applicable (No municipal reporting layer mandated)</option>
        <option value="yes">Yes, local city reporting requirements are completed</option>
        <option value="no">No, local city reporting requirements are outstanding</option>
      </select>
    </div>
    <div id="ar_city_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="ar_city_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify why: <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_city_reason" placeholder="e.g., Pending calculation adjustments, local ordinance exemption..." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_city_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Attach a copy of the most recent annual report filed with the city:</label>
      <input type="file" id="ar_city_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
    </div>

    <!-- SECTION 5: FEDERAL FILINGS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Federal Filings</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Please provide a valid format (XX-XXXXXXX)" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_fed_filed_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you filed your federal taxes (Form 1065, 1120, or 1120S) for the current year? <span style="color: #ef4444;">*</span></label>
      <select id="ar_fed_filed_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportFederalExplanationVisibility(this.value)">
        <option value="" disabled selected>Select Option...</option>
        <option value="yes">Yes, federal informational or tax filing is completed</option>
        <option value="no">No, federal informational or tax filing is outstanding</option>
      </select>
    </div>
    <div id="ar_fed_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="ar_fed_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify why: <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_fed_reason" placeholder="e.g., Active IRS Form 7004 extension filing in effect..." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_fed_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Attach a copy of the most recent federal tax return filed:</label> <input type="file" id="ar_fed_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
    </div>
  `;
}

// Global registry setup matrix tracking allocation routes
if (!window.formRegistry) window.formRegistry = {};
window.formRegistry['annual-reports-part2-layout'] = buildAnnualReportsPart2;
window.formRegistry['annual-reports-part2-validation'] = annualReportsPart2Validation;

// ============================================================================ //
// 🛠️ ANNUAL REPORTS FILING VALIDATION MATRIX ENGINE (PART 3 OF 3)
// ============================================================================ //
const annualReportsPart3Validation = {
  requiredFields: [
    { id: 'ar_other_filed_choice', msg: 'Please answer the peripheral paperwork filing question.' },
    { id: 'ar_compliance_verified', msg: 'Please answer the compliance verification check question.' }
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

    // 2. Conditional Check: Validate peripheral filings list input if choice is YES
    const otherFiledChoice = document.getElementById("ar_other_filed_choice");
    if (otherFiledChoice && otherFiledChoice.value === "yes") {
      const peripheralList = document.getElementById("ar_other_filings_list");
      if (peripheralList && !peripheralList.value.trim()) {
        setError(peripheralList, "Please list the types of other peripheral filings and their due dates.");
      } else if (peripheralList) {
        clearError(peripheralList);
      }
    }

    // 3. Conditional Check: Validate pending renewals list input if choice is NO
    const complianceVerified = document.getElementById("ar_compliance_verified");
    if (complianceVerified && complianceVerified.value === "no") {
      const pendingList = document.getElementById("ar_pending_renewals_list");
      if (pendingList && !pendingList.value.trim()) {
        setError(pendingList, "Please list the operational licenses or permits that need to be renewed or updated.");
      } else if (pendingList) {
        clearError(pendingList);
      }
    }

    return { isValid, errors };
  }
};

// FAMILY 6A: ANNUAL REPORTS FILING APPLICATION LAYOUT MATRIX (PART 3 OF 3)
function buildAnnualReportsPart3(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 6: OTHER FILINGS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Other Filings</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_other_filed_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you filed any other required paperwork (e.g., property tax filings, local business renewals)? <span style="color: #ef4444;">*</span></label>
      <select id="ar_other_filed_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportOtherExplanationVisibility(this.value)">
        <option value="" disabled selected>Select Option...</option>
        <option value="no">No other peripheral structural filings required or pending</option>
        <option value="yes">Yes, other regulatory or local business renewals are handled</option>
      </select>
    </div>

    <!-- Hidden Conditional Container: Other Filings Details Entry Matrix -->
    <div id="ar_other_explanation_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
      <div class="wizard-input-group" style="margin: 0; width: 100%;">
        <label for="ar_other_filings_list" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please list the types of filings and their due dates: <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ar_other_filings_list" placeholder="e.g., Local county property tax asset assessments due October 15..." class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="margin: 0; width: 100%;">
        <label for="ar_other_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Attach any relevant documents pertaining to these filings:</label>
        <input type="file" id="ar_other_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
      </div>
    </div>

    <!-- SECTION 7: COMPLIANCE CHECK -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Compliance Check</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_compliance_verified" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you verified that all necessary licenses and permits are current and up to date? <span style="color: #ef4444;">*</span></label>
      <select id="ar_compliance_verified" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportComplianceCheckVisibility(this.value)">
        <option value="" disabled selected>Select Option...</option>
        <option value="yes">Yes, all tracking operating credentials are verified and current</option>
        <option value="no">No, certain mandatory operating credentials require updates</option>
      </select>
    </div>
    <div id="ar_compliance_pending_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="ar_pending_renewals_list" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please list any licenses or permits that need to be renewed or updated: <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ar_pending_renewals_list" placeholder="e.g., County health permits, regional fire safety clearances, state environmental tracking codes..." class="wizard-input-field">
    </div>

    <!-- SECTION 8: ADDITIONAL PROVISIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Additional Provisions</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Provisions</label>
      <textarea id="ar_provisions" placeholder="Detail any optional fields for specific internal reporting clauses, member agreements, or operational tracking notes relevant to your annual filings..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
    </div>
  `;
}
window.buildAnnualReportsPart3 = buildAnnualReportsPart3;

// 📦 MASTER ANNUAL REPORTS FILING RECONSTRUCTION ASSEMBLY HOOK
function buildAnnualReportsForm(stateDropdownOptionsHtml = "") {
  return buildAnnualReportsPart1(stateDropdownOptionsHtml) + buildAnnualReportsPart2(stateDropdownOptionsHtml) + buildAnnualReportsPart3(stateDropdownOptionsHtml);
}

// Global registry setup matrix tracking allocation routes
if (!window.formRegistry) window.formRegistry = {};
window.formRegistry['annual-reports-part3-layout'] = buildAnnualReportsPart3;
window.formRegistry['annual-reports-part3-validation'] = annualReportsPart3Validation;
window.formRegistry['annual-reports-form-master'] = buildAnnualReportsForm;

// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS (ANNUAL REPORTS FILINGS)
// ============================================================================ //

window.toggleAnnualReportMailingAddressVisibility = function(value) {
  const mailingWrapper = document.getElementById("ar_mailing_wrapper");
  if (!mailingWrapper) return;

  const fields = mailingWrapper.querySelectorAll("input, select");

  if (value === "different") {
    mailingWrapper.style.setProperty("display", "flex", "important");
    fields.forEach(el => el.setAttribute("required", "required"));
  } else {
    mailingWrapper.style.setProperty("display", "none", "important");
    fields.forEach(el => { el.removeAttribute("required"); el.value = ""; });
  }
};

window.toggleAnnualReportStateExplanationVisibility = function(value) {
  const stateWrapper = document.getElementById("ar_state_explanation_wrapper");
  const stateInput = document.getElementById("ar_state_reason");
  if (!stateWrapper) return;

  if (value === "no") {
    stateWrapper.style.setProperty("display", "block", "important");
    if (stateInput) stateInput.setAttribute("required", "required");
  } else {
    stateWrapper.style.setProperty("display", "none", "important");
    if (stateInput) { stateInput.removeAttribute("required"); stateInput.value = ""; }
  }
};

window.toggleAnnualReportCityExplanationVisibility = function(value) {
  const cityWrapper = document.getElementById("ar_city_explanation_wrapper");
  const cityInput = document.getElementById("ar_city_reason");
  if (!cityWrapper) return;

  if (value === "no") {
    cityWrapper.style.setProperty("display", "block", "important");
    if (cityInput) cityInput.setAttribute("required", "required");
  } else {
    cityWrapper.style.setProperty("display", "none", "important");
    if (cityInput) { cityInput.removeAttribute("required"); cityInput.value = ""; }
  }
};

window.toggleAnnualReportFederalExplanationVisibility = function(value) {
  const fedWrapper = document.getElementById("ar_fed_explanation_wrapper");
  const fedInput = document.getElementById("ar_fed_reason");
  if (!fedWrapper) return;

  if (value === "no") {
    fedWrapper.style.setProperty("display", "block", "important");
    if (fedInput) fedInput.setAttribute("required", "required");
  } else {
    fedWrapper.style.setProperty("display", "none", "important");
    if (fedInput) { fedInput.removeAttribute("required"); fedInput.value = ""; }
  }
};

window.toggleAnnualReportOtherExplanationVisibility = function(value) {
  const otherWrapper = document.getElementById("ar_other_explanation_wrapper");
  const otherInput = document.getElementById("ar_other_filings_list");
  if (!otherWrapper) return;

  if (value === "yes") {
    otherWrapper.style.setProperty("display", "flex", "important");
    if (otherInput) otherInput.setAttribute("required", "required");
  } else {
    otherWrapper.style.setProperty("display", "none", "important");
    if (otherInput) { otherInput.removeAttribute("required"); otherInput.value = ""; }
  }
};

window.toggleAnnualReportComplianceCheckVisibility = function(value) {
  const complianceWrapper = document.getElementById("ar_compliance_pending_wrapper");
  const complianceInput = document.getElementById("ar_pending_renewals_list");
  if (!complianceWrapper) return;

  if (value === "no") {
    complianceWrapper.style.setProperty("display", "block", "important");
    if (complianceInput) complianceInput.setAttribute("required", "required");
  } else {
    complianceWrapper.style.setProperty("display", "none", "important");
    if (complianceInput) { complianceInput.removeAttribute("required"); complianceInput.value = ""; }
  }
};
