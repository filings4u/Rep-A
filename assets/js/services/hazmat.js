function validateHazmatRegistrationFormPart1() {
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

  // 1. Validate Legal Business Name
  const nameField = document.getElementById('haz_legal_name');
  const nameErr = document.getElementById('err_haz_legal_name');
  if (!nameField || !nameField.value.trim()) {
    markInvalid(nameField, nameErr, "Official legal company name is required.");
  } else {
    markValid(nameField, nameErr);
  }

  // 2. Validate USDOT Number (Enforce pure numerical strings)
  const dotField = document.getElementById('haz_usdot_number');
  const dotErr = document.getElementById('err_haz_usdot_number');
  if (dotField && dotErr) {
    const rawDot = dotField.value.trim();
    if (!rawDot) {
      markInvalid(dotField, dotErr, "USDOT number is required.");
    } else if (!/^\d+$/.test(rawDot)) {
      markInvalid(dotField, dotErr, "USDOT parameters must contain numbers only.");
    } else {
      markValid(dotField, dotErr);
    }
  }

  // 3. Validate Federal EIN (Enforce standard 9 numeric digits)
  const einField = document.getElementById('haz_federal_ein');
  const einErr = document.getElementById('err_haz_federal_ein');
  if (einField && einErr) {
    const rawEin = einField.value.replace(/\D/g, "");
    if (rawEin.length !== 9) {
      markInvalid(einField, einErr, "A standard 9-digit EIN is required (e.g., 12-3456789).");
    } else {
      markValid(einField, einErr);
    }
  }

  // 4. Validate Business Tier Dropdown Selection
  const tierField = document.getElementById('haz_business_tier');
  const tierErr = document.getElementById('err_haz_business_tier');
  if (!tierField || !tierField.value) {
    markInvalid(tierField, tierErr, "Please specify your federal business entity size classification.");
  } else {
    markValid(tierField, tierErr);
  }

  return isValid;
}

// FAMILY 31A: HAZMAT REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildHazmatRegistrationFormPart1(stateDropdownOptionsHtml = "") {
 return `
 <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS HAZMAT REGISTRATION? -->
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Pipeline and Hazardous Materials Safety Administration (PHMSA) Compliance</strong> 
   Any business entity transporting or offering for transport specific types and quantities of hazardous materials in commerce must maintain a valid federal Hazardous Materials Registration certificate with the PHMSA department. Operating a commercial fleet unit handling placarded explosives, flammable gases, radioactive materials, or toxic-by-inhalation cargo without a processed PHMSA credential voids safety standing and brings substantial federal daily enforcement citations.
 </div>

 <!-- SECTION 1: HAZARDOUS MATERIALS CARRIER PROFILE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Carrier Identity Profile</h3>
 </div>

 <!-- FIELD 1: OFFICIAL LEGAL COMPANY NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="haz_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Legal Company Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="haz_legal_name" required placeholder="Enter exact name registered with your USDOT number and state records" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_haz_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: USDOT NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="haz_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
   <input type="text" id="haz_usdot_number" required placeholder="Enter USDOT Number" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_haz_usdot_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: EMPLOYER IDENTIFICATION NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="haz_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
   <input type="text" id="haz_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_haz_federal_ein" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 2: PHMSA TIER CLASSIFICATIONS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. PHMSA Regulatory Tier Selection</h3>
 </div>

 <!-- FIELD 4: BUSINESS SIZE CLASSIFICATION DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="haz_business_tier" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Business Entity Size Classification <span style="color: #ef4444;">*</span></label>
   <select id="haz_business_tier" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
     <option value="" disabled selected>Select Business Classification...</option>
     <option value="small">Small Business / Non-Profit Operator (Meets SBA size criteria parameters — Reduced federal registration fees apply)</option>
     <option value="large">Large Business Entity (Exceeds baseline SBA size parameters — Standard federal registration fees apply)</option>
   </select>
   <div class="wizard-error-message" id="err_haz_business_tier" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function validateHazmatRegistrationFormParts2And3() {
  let isValid = true;

  const markInvalid = (inputEl, errorEl, msg) => {
    errorEl.textContent = msg;
    errorEl.style.display = "block";
    if (inputEl) inputEl.style.border = "1px solid #ef4444";
    isValid = false;
  };

  const markValid = (inputEl, errorEl) => {
    errorEl.style.display = "none";
    if (inputEl) inputEl.style.border = "";
  };

  // 1. Validate Filing Multi-Year Term Dropdown Selection
  const periodField = document.getElementById('haz_registration_period');
  const periodErr = document.getElementById('err_haz_registration_period');
  if (!periodField || !periodField.value) {
    markInvalid(periodField, periodErr, "Please select an active filing multi-year term package.");
  } else {
    markValid(periodField, periodErr);
  }

  // 2. Loop-check Commodity Classification Checklist Matrix (Ensure at least 1 box is checked)
  let checkedClassesCount = 0;
  for (let idx = 1; idx <= 8; idx++) {
    const box = document.getElementById(`haz_class_${idx}`);
    if (box && box.checked) {
      checkedClassesCount++;
    }
  }

  const matrixErrContainer = document.getElementById('err_haz_commodity_matrix');
  if (matrixErrContainer) {
    if (checkedClassesCount === 0) {
      matrixErrContainer.textContent = "PHMSA security protocols require declaring at least 1 hazardous material cargo commodity classification.";
      matrixErrContainer.style.display = "block";
      isValid = false;
    } else {
      matrixErrContainer.style.display = "none";
    }
  }

  // 3. Validate Safety Official POC Name
  const pocNameField = document.getElementById('haz_poc_name');
  const pocNameErr = document.getElementById('err_haz_poc_name');
  if (!pocNameField || !pocNameField.value.trim()) {
    markInvalid(pocNameField, pocNameErr, "Safety Official full legal name is required.");
  } else {
    markValid(pocNameField, pocNameErr);
  }

  // 4. Validate Direct Phone Number
  const pocPhoneField = document.getElementById('haz_poc_phone');
  const pocPhoneErr = document.getElementById('err_haz_poc_phone');
  if (!pocPhoneField || !pocPhoneField.value.trim()) {
    markInvalid(pocPhoneField, pocPhoneErr, "Direct contact phone number is required.");
  } else {
    markValid(pocPhoneField, pocPhoneErr);
  }

  // 5. Validate Compliance Communications Email Address
  const pocEmailField = document.getElementById('haz_poc_email');
  const pocEmailErr = document.getElementById('err_haz_poc_email');
  if (pocEmailField && pocEmailErr) {
    const emailVal = pocEmailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailVal) {
      markInvalid(pocEmailField, pocEmailErr, "Compliance communications email is required.");
    } else if (!emailRegex.test(emailVal)) {
      markInvalid(pocEmailField, pocEmailErr, "Please supply a valid administrative email format.");
    } else {
      markValid(pocEmailField, pocEmailErr);
    }
  }

  return isValid;
}

// FAMILY 31A: HAZMAT REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildHazmatRegistrationFormPart2(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 3: PHMSA MULTI-YEAR REGISTRATION PACKAGE SELECTION -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Registration Validity Multi-Period Package</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select your planned multi-year processing horizon package. Selecting a multi-year setup locks in current rates and reduces annual filing overhead loops.</p>
 </div>

 <!-- FIELD 1: REGISTRATION PERIOD DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="haz_registration_period" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Multi-Year Term Selection <span style="color: #ef4444;">*</span></label>
   <select id="haz_registration_period" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
     <option value="1-year" selected>1-Year Registration Term Package (Valid for the upcoming standard federal cycle)</option>
     <option value="2-year">2-Year Multi-Period Registration Term (Locks in pricing and structural tracking validations)</option>
     <option value="3-year">3-Year Extended Multi-Period Registration Term (Maximum authorized coverage block window)</option>
   </select>
   <div class="wizard-error-message" id="err_haz_registration_period" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 4: HAZARDOUS MATERIALS CARGO CLASS CATEGORIES CHECKLIST -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Hazardous Materials Commodity Profile Checklist</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select the specific classifications of hazardous products your equipment asset frameworks are hauling (Check all that apply):</p>
 </div>

 <!-- HAZMAT COMMODITY GRID CONTAINER -->
 <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="haz_class_1" value="explosives" style="margin-top: 3px;">
     <label for="haz_class_1" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 1: Explosives (Placardable quantities/divisions)</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="haz_class_2" value="gases" style="margin-top: 3px;">
     <label for="haz_class_2" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 2: Gases (Flammable, non-flammable, or toxic variants)</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="haz_class_3" value="flammable_liquids" style="margin-top: 3px;">
     <label for="haz_class_3" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 3: Flammable and Combustible Liquids (e.g. Fuel, Oils)</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="haz_class_4" value="flammable_solids" style="margin-top: 3px;">
     <label for="haz_class_4" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 4: Flammable Solids / Spontaneously Combustible</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="haz_class_5" value="oxidizers" style="margin-top: 3px;">
     <label for="haz_class_5" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 5: Oxidizers and Organic Peroxides</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="haz_class_6" value="poisons" style="margin-top: 3px;">
     <label for="haz_class_6" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 6: Poisons, Toxic Substances, or Infectious Agents</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="haz_class_7" value="radioactive" style="margin-top: 3px;">
     <label for="haz_class_7" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 7: Radioactive Materials (Yellow III label requirements)</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="haz_class_8" value="corrosives" style="margin-top: 3px;">
     <label for="haz_class_8" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 8: Corrosive Liquids or Solid Compounds</label>
   </div>
   
   <!-- GLOBAL MATRIX ERROR TEXT ROW -->
   <div class="wizard-error-message" id="err_haz_commodity_matrix" style="color: #ef4444; font-size: 0.75rem; margin-top: 8px; grid-column: span 2; display: none;"></div>
 </div>
 `;
}

// FAMILY 31A: HAZMAT REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildHazmatRegistrationFormPart3(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 5: AUTHORIZED SAFETY OFFICIAL POC -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Authorized Safety Official Contact</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the profile details of the compliance or logistics manager responsible for PHMSA hazardous material cargo declarations.</p>
 </div>

 <!-- FIELD 2: POC FULL LEGAL NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="haz_poc_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Safety Official Full Legal Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="haz_poc_name" required placeholder="First and Last Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_haz_poc_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: POC PHONE NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="haz_poc_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Direct Phone Number <span style="color: #ef4444;">*</span></label>
   <input type="tel" id="haz_poc_phone" required placeholder="(512) 555-0199" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_haz_poc_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 4: POC EMAIL ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="haz_poc_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Compliance Communications Email <span style="color: #ef4444;">*</span></label>
   <input type="email" id="haz_poc_email" required placeholder="safety@yourcarrier.com" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_haz_poc_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 6: ADDITIONAL PROVISIONS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special Handling Directives & Hazmat Notes</h3>
 </div>

 <!-- FIELD 5: OPTIONAL TEXTAREA -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="haz_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Carrier Instructions or Disclosure Notes</label>
   <textarea id="haz_provisions" placeholder="Detail any immediate shipping lane deadlines, bulk packaging exceptions, radioactive transport route permits, or custom proxy handling directives relative to your PHMSA HAZMAT registration dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// 📦 MASTER HAZMAT REGISTRATION APPLICATION ASSEMBLY HOOK
function buildHazmatRegistrationForm(stateDropdownOptionsHtml = "") {
 return buildHazmatRegistrationFormPart1(stateDropdownOptionsHtml) + 
        buildHazmatRegistrationFormPart2(stateDropdownOptionsHtml) + 
        buildHazmatRegistrationFormPart3(stateDropdownOptionsHtml);
}

/**
 * Scans all field parameters inside the Hazmat Registration Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireHazmatWizard() {
  const isPart1Valid = typeof validateHazmatRegistrationFormPart1 === 'function' ? validateHazmatRegistrationFormPart1() : true;
  const isPart2Valid = validateHazmatRegistrationFormParts2And3();

  return (isPart1Valid && isPart2Valid);
}
