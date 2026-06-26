function validateMinorityCertificateFormPart1() {
  let isValid = true;

  const markInvalid = (inputEl, errorEl, msg) => {
    errorEl.textContent = msg;
    errorEl.style.display = "block";
    inputEl.style.border = "1px solid #ef4444";
    isValid = false;
  };

  const markValid = (inputEl, errorEl) => {
    errorEl.style.display = "none";
    inputEl.style.border = "";
  };

  // 1. Validate Legal Name
  const nameField = document.getElementById('mbe_legal_name');
  const nameErr = document.getElementById('err_mbe_legal_name');
  if (!nameField || !nameField.value.trim()) {
    markInvalid(nameField, nameErr, "Official business entity name is required.");
  } else {
    markValid(nameField, nameErr);
  }

  // 2. Validate Federal EIN (Enforce standard 9 numeric digits)
  const einField = document.getElementById('mbe_federal_ein');
  const einErr = document.getElementById('err_mbe_federal_ein');
  if (einField && einErr) {
    const rawEin = einField.value.replace(/\D/g, "");
    if (rawEin.length !== 9) {
      markInvalid(einField, einErr, "A standard 9-digit EIN is required (e.g., 12-3456789).");
    } else {
      markValid(einField, einErr);
    }
  }

  // 3. Validate State of Formation Dropdown
  const stateField = document.getElementById('mbe_state_of_formation');
  const stateErr = document.getElementById('err_mbe_state_of_formation');
  if (!stateField || !stateField.value) {
    markInvalid(stateField, stateErr, "Please pick your entity state of formation.");
  } else {
    markValid(stateField, stateErr);
  }

  // 4. Validate Target Framework Track Dropdown
  const trackField = document.getElementById('mbe_certification_track');
  const trackErr = document.getElementById('err_mbe_certification_track');
  if (!trackField || !trackField.value) {
    markInvalid(trackField, trackErr, "Please choose a targeted certification framework track.");
  } else {
    markValid(trackField, trackErr);
  }

  // 5. Conditional Agency Validation (Mandatory only when 'state-local' track is selected)
  const agencyWrapper = document.getElementById('mbe_state_agency_wrapper');
  const agencyField = document.getElementById('mbe_target_agency_name');
  const agencyErr = document.getElementById('err_mbe_target_agency_name');

  if (agencyWrapper && (agencyWrapper.style.display === "block" || agencyWrapper.style.display === "grid" || (trackField && trackField.value === "state-local"))) {
    if (!agencyField || !agencyField.value.trim()) {
      markInvalid(agencyField, agencyErr, "Target state agency or municipality name is required for localized tracks.");
    } else {
      markValid(agencyField, agencyErr);
    }
  } else {
    if (agencyField && agencyErr) markValid(agencyField, agencyErr);
  }

  return isValid;
}

// FAMILY 24A: MINORITY BUSINESS ENTERPRISE (MBE) CERTIFICATION LAYOUT MATRIX (PART 1 OF 3)
function buildMinorityCertificateFormPart1(stateDropdownOptionsHtml = "") {
 return `
 <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: MINORITY CERTIFICATE REGISTRATION -->
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Minority Business Enterprise (MBE) Certification Network</strong> 
   Minority Business Enterprise (MBE) status unlocks exclusive corporate supplier diversity programs, targeted municipal set-aside contracts, and specialized institutional capital lanes. To achieve successful placement, the enterprise must prove it is at least 51% owned, managed, and controlled daily by one or more socioeconomically qualifying individuals.
 </div>

 <!-- SECTION 1: ENTERPRISE BASELINE IDENTIFICATION -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Company Profile Parameters</h3>
 </div>

 <!-- FIELD 1: OFFICIAL BUSINESS ENTITY NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="mbe_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Entity Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="mbe_legal_name" required placeholder="Enter exact legal name matching state organization documents" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_mbe_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: EMPLOYER IDENTIFICATION NUMBER (EIN) -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="mbe_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer ID (EIN) <span style="color: #ef4444;">*</span></label>
   <input type="text" id="mbe_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_mbe_federal_ein" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: STATE OF FORMATION -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="mbe_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
   <select id="mbe_state_of_formation" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="" disabled selected>Select State...</option>
     ${stateDropdownOptionsHtml}
   </select>
   <div class="wizard-error-message" id="err_mbe_state_of_formation" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 2: AGENCY CERTIFICATION STREAM SELECTION -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Program Oversight & Agency Track</h3>
 </div>

 <!-- FIELD 4: TRACK TYPE DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="mbe_certification_track" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Target Certification Framework Track <span style="color: #ef4444;">*</span></label>
   <select id="mbe_certification_track" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;" onchange="toggleMorphicMbeAgencySubInputs(this.value)">
     <option value="" disabled selected>Select Certification Oversight Network...</option>
     <option value="state-local">State / Local Government MBE Program (For municipal, county, and state public sector bids)</option>
     <option value="nmsdc">National Minority Supplier Development Council - NMSDC (Private corporate procurement connections)</option>
     <option value="federal-8a">Federal Small Disadvantaged Business Program (SBA 8(a) or matching tracks)</option>
   </select>
   <div class="wizard-error-message" id="err_mbe_certification_track" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- Hidden Conditional Container: Specific Municipality/State Target Identifier -->
 <div id="mbe_state_agency_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
   <label for="mbe_target_agency_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Target State Agency or Municipality Division Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="mbe_target_agency_name" placeholder="e.g., Texas Comptroller HUB Program, NYC Small Business Services MBE Registry..." class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_mbe_target_agency_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function validateMinorityCertificateFormParts2And3() {
  let isValid = true;

  const markInvalid = (inputEl, errorEl, msg) => {
    errorEl.textContent = msg;
    errorEl.style.display = "block";
    inputEl.style.border = "1px solid #ef4444";
    isValid = false;
  };

  const markValid = (inputEl, errorEl) => {
    errorEl.style.display = "none";
    inputEl.style.border = "";
  };

  // 1. Validate Ownership Share Percentage (Enforce minimum 51% per program board statutes)
  const pctField = document.getElementById('mbe_qualifying_percentage');
  const pctErr = document.getElementById('err_mbe_qualifying_percentage');
  if (pctField && pctErr) {
    const val = parseFloat(pctField.value);
    if (isNaN(val) || val < 51 || val > 100) {
      markInvalid(pctField, pctErr, "Regulatory rules mandate a minimum minority equity control allocation of 51% up to 100%.");
    } else {
      markValid(pctField, pctErr);
    }
  }

  // 2. Validate Socioeconomic Dropdown Selection
  const groupField = document.getElementById('mbe_ethnic_group');
  const groupErr = document.getElementById('err_mbe_ethnic_group');
  if (!groupField || !groupField.value) {
    markInvalid(groupField, groupErr, "Please clarify your qualifying socioeconomic classification category.");
  } else {
    markValid(groupField, groupErr);
  }

  // 3. Validate Mandatory File Upload 1: Equity Proof
  const eqFile = document.getElementById('mbe_file_equity');
  const eqErr = document.getElementById('err_mbe_file_equity');
  if (eqFile && eqErr && (!eqFile.files || eqFile.files.length === 0)) {
    markInvalid(eqFile, eqErr, "Please attach proof of equity ownership (e.g., Stock Ledgers / Agreement).");
  } else if (eqFile && eqErr) {
    markValid(eqFile, eqErr);
  }

  // 4. Validate Mandatory File Upload 2: Citizenship / Ethnicity Proof
  const citFile = document.getElementById('mbe_file_citizenship');
  const citErr = document.getElementById('err_mbe_file_citizenship');
  if (citFile && citErr && (!citFile.files || citFile.files.length === 0)) {
    markInvalid(citFile, citErr, "Please attach your ethnicity or citizenship verification document.");
  } else if (citFile && citErr) {
    markValid(citFile, citErr);
  }

  // 5. Validate Mandatory File Upload 3: Tax Returns / Financials
  const finFile = document.getElementById('mbe_file_financials');
  const finErr = document.getElementById('err_mbe_file_financials');
  if (finFile && finErr && (!finFile.files || finFile.files.length === 0)) {
    markInvalid(finFile, finErr, "Recent company tax returns or corporate P&L profiles are required.");
  } else if (finFile && finErr) {
    markValid(finFile, finErr);
  }

  // 6. Validate Mandatory File Upload 4: Articles / Corporate Bylaws
  const lawFile = document.getElementById('mbe_file_bylaws');
  const lawErr = document.getElementById('err_mbe_file_bylaws');
  if (lawFile && lawErr && (!lawFile.files || lawFile.files.length === 0)) {
    markInvalid(lawFile, lawErr, "Articles of Organization or company operating bylaws are required.");
  } else if (lawFile && lawErr) {
    markValid(lawFile, lawErr);
  }

  // 7. Validate Principal Officer Full Name
  const officerNameField = document.getElementById('mbe_officer_name');
  const officerNameErr = document.getElementById('err_mbe_officer_name');
  if (!officerNameField || !officerNameField.value.trim()) {
    markInvalid(officerNameField, officerNameErr, "Principal minority officer full legal name is required.");
  } else {
    markValid(officerNameField, officerNameErr);
  }

  // 8. Validate Officer Direct Phone Number
  const officerPhoneField = document.getElementById('mbe_officer_phone');
  const officerPhoneErr = document.getElementById('err_mbe_officer_phone');
  if (!officerPhoneField || !officerPhoneField.value.trim()) {
    markInvalid(officerPhoneField, officerPhoneErr, "Officer direct contact phone number is required.");
  } else {
    markValid(officerPhoneField, officerPhoneErr);
  }

  // 9. Validate Officer Contact Email Address
  const officerEmailField = document.getElementById('mbe_officer_email');
  const officerEmailErr = document.getElementById('err_mbe_officer_email');
  if (officerEmailField && officerEmailErr) {
    const emailVal = officerEmailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailVal) {
      markInvalid(officerEmailField, officerEmailErr, "Officer contact email address is required.");
    } else if (!emailRegex.test(emailVal)) {
      markInvalid(officerEmailField, officerEmailErr, "Please supply a valid executive officer communication email format.");
    } else {
      markValid(officerEmailField, officerEmailErr);
    }
  }

  return isValid;
}

// FAMILY 24A: MINORITY BUSINESS ENTERPRISE (MBE) CERTIFICATION LAYOUT MATRIX (PART 2 OF 3)
function buildMinorityCertificateFormPart2(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 3: OWNERSHIP EQUITY MATRIX -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Minority Ownership Control Matrix</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Certifying boards audit equity percentages to confirm the business meets the minimum 51% minority-controlled threshold rule.</p>
 </div>

 <!-- FIELD 1: MINORITY OWNERSHIP PERCENTAGE -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="mbe_qualifying_percentage" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Minority Ownership Share Percentage (%) <span style="color: #ef4444;">*</span></label>
   <input type="number" id="mbe_qualifying_percentage" required placeholder="e.g. 51, 75, 100" min="51" max="100" class="wizard-input-field" style="border: 1px solid var(--navy); font-weight: 700; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_mbe_qualifying_percentage" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: SOCIOECONOMIC CLASSIFICATION -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="mbe_ethnic_group" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Socioeconomic Classification Category <span style="color: #ef4444;">*</span></label>
   <select id="mbe_ethnic_group" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="" disabled selected>Select Category...</option>
     <option value="african-american">African American</option>
     <option value="hispanic-american">Hispanic American</option>
     <option value="native-american">Native American / Indigenous Community</option>
     <option value="asian-pacific">Asian Pacific American</option>
     <option value="asian-subcontinent">Asian Subcontinent American</option>
   </select>
   <div class="wizard-error-message" id="err_mbe_ethnic_group" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 4: SECURE DOCUMENT VALIDATION CHECKLIST GRID -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Secure Ownership Validation Checklist Grid</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Upload direct administrative verifications showing exact capitalization balances and layout structural control assignments.</p>
 </div>

 <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; box-sizing: border-box;">
   
   <!-- UPLOAD 1: EQUITY PROOF -->
   <div class="wizard-input-group" style="margin: 0;">
     <label for="mbe_file_equity" style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Equity Ownership Proof (Stock Ledgers or Operating Agreement) <span style="color: #ef4444;">*</span></label>
     <input type="file" id="mbe_file_equity" required class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff; width: 100%; box-sizing: border-box;">
     <div class="wizard-error-message" id="err_mbe_file_equity" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   </div>

   <!-- UPLOAD 2: CITIZENSHIP VERIFICATION -->
   <div class="wizard-input-group" style="margin: 0;">
     <label for="mbe_file_citizenship" style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Ethnicity / Citizenship Verification (Birth Cert or Passport) <span style="color: #ef4444;">*</span></label>
     <input type="file" id="mbe_file_citizenship" required class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff; width: 100%; box-sizing: border-box;">
     <div class="wizard-error-message" id="err_mbe_file_citizenship" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   </div>

   <!-- UPLOAD 3: TAX RETURNS / FINANCIALS -->
   <div class="wizard-input-group" style="margin: 0;">
     <label for="mbe_file_financials" style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Recent Company Tax Returns or P&L Statement <span style="color: #ef4444;">*</span></label>
     <input type="file" id="mbe_file_financials" required class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff; width: 100%; box-sizing: border-box;">
     <div class="wizard-error-message" id="err_mbe_file_financials" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   </div>

   <!-- UPLOAD 4: ARTICLES / BYLAWS -->
   <div class="wizard-input-group" style="margin: 0;">
     <label for="mbe_file_bylaws" style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Articles of Organization / Corporate Bylaws <span style="color: #ef4444;">*</span></label>
     <input type="file" id="mbe_file_bylaws" required class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff; width: 100%; box-sizing: border-box;">
     <div class="wizard-error-message" id="err_mbe_file_bylaws" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   </div>

 </div>
 `;
}

// FAMILY 24A: MINORITY BUSINESS ENTERPRISE (MBE) CERTIFICATION LAYOUT MATRIX (PART 3 OF 3)
function buildMinorityCertificateFormPart3(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 5: AUTHORIZED MANAGING EXECUTIVE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Authorized Minority Principal Officer</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the profile metrics for the principal minority shareholder or managing executive with primary daily operational signature control.</p>
 </div>

 <!-- FIELD 3: OFFICER FULL NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="mbe_officer_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Officer Full Legal Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="mbe_officer_name" required placeholder="First and Last Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_mbe_officer_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 4: OFFICER PHONE -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="mbe_officer_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Officer Direct Phone <span style="color: #ef4444;">*</span></label>
   <input type="tel" id="mbe_officer_phone" required placeholder="(512) 555-0199" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_mbe_officer_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 5: OFFICER EMAIL -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="mbe_officer_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Officer Contact Email <span style="color: #ef4444;">*</span></label>
   <input type="email" id="mbe_officer_email" required placeholder="officer@company.com" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_mbe_officer_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 6: ADDITIONAL PROVISIONS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special Filing Clauses & Structural Disclosures</h3>
 </div>

 <!-- FIELD 6: OPTIONAL MEMO TEXTAREA -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="mbe_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Instructions or Procurement Project Notes</label>
   <textarea id="mbe_provisions" placeholder="Detail any immediate corporate supplier diversity deadlines, target municipality bidding codes, or custom setup parameters required for your MBE diversity dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// 📦 MASTER MBE CERTIFICATION APPLICATION ASSEMBLY HOOK
function buildMinorityCertificateForm(stateDropdownOptionsHtml = "") {
 return buildMinorityCertificateFormPart1(stateDropdownOptionsHtml) + 
        buildMinorityCertificateFormPart2(stateDropdownOptionsHtml) + 
        buildMinorityCertificateFormPart3(stateDropdownOptionsHtml);
}

/**
 * Scans all field parameters inside the Minority Certification Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireMinorityCertificationWizard() {
  const isPart1Valid = typeof validateMinorityCertificateFormPart1 === 'function' ? validateMinorityCertificateFormPart1() : true;
  const isPart23Valid = validateMinorityCertificateFormParts2And3();

  return (isPart1Valid && isPart23Valid);
}
