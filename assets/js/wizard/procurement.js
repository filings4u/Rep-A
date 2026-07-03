function validateProcurementRegistrationFormPart1() {
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

  // 1. Validate Entity Legal Name
  const nameField = document.getElementById('sam_legal_name');
  const nameErr = document.getElementById('err_sam_legal_name');
  if (!nameField || !nameField.value.trim()) {
    markInvalid(nameField, nameErr, "Official business entity name is required.");
  } else {
    markValid(nameField, nameErr);
  }

  // 2. Validate Federal EIN (Enforce standard 9 digits)
  const einField = document.getElementById('sam_federal_ein');
  const einErr = document.getElementById('err_sam_federal_ein');
  if (einField && einErr) {
    const rawEin = einField.value.replace(/\D/g, "");
    if (rawEin.length !== 9) {
      markInvalid(einField, einErr, "A standard 9-digit EIN is required (e.g., 12-3456789).");
    } else {
      markValid(einField, einErr);
    }
  }

  // 3. Validate SAM UEI Status Dropdown Selection
  const ueiStatusField = document.getElementById('sam_uei_status');
  const ueiStatusErr = document.getElementById('err_sam_uei_status');
  if (!ueiStatusField || !ueiStatusField.value) {
    markInvalid(ueiStatusField, ueiStatusErr, "Please specify your SAM UEI issuance status.");
  } else {
    markValid(ueiStatusField, ueiStatusErr);
  }

  // 4. Conditional SAM UEI Code Validation (12 Character Alphanumeric GSA Ruleset)
  const ueiWrapper = document.getElementById('sam_uei_code_wrapper');
  const ueiField = document.getElementById('sam_existing_uei');
  const ueiErr = document.getElementById('err_sam_existing_uei');
  
  if (ueiWrapper && (ueiWrapper.style.display === "block" || ueiWrapper.style.display === "grid" || (ueiStatusField && ueiStatusField.value === "existing"))) {
    if (ueiField && ueiErr) {
      const ueiVal = ueiField.value.trim().toUpperCase();
      const ueiRegex = /^[A-Z0-9]{12}$/;
      
      if (!ueiVal) {
        markInvalid(ueiField, ueiErr, "Your existing 12-character SAM Unique Entity ID (UEI) is required.");
      } else if (!ueiRegex.test(ueiVal)) {
        markInvalid(ueiField, ueiErr, "SAM UEI parameters must be exactly 12 alphanumeric characters without spaces or symbols.");
      } else {
        markValid(ueiField, ueiErr);
        ueiField.value = ueiVal; // Standardize formatting to uppercase
      }
    }
  } else {
    if (ueiField && ueiErr) markValid(ueiField, ueiErr);
  }

  // 5. Validate Physical Street Address
  const streetField = document.getElementById('sam_physical_street');
  const streetErr = document.getElementById('err_sam_physical_street');
  if (!streetField || !streetField.value.trim()) {
    markInvalid(streetField, streetErr, "Physical facility address is required.");
  } else {
    markValid(streetField, streetErr);
  }

  // 6. Validate City
  const cityField = document.getElementById('sam_physical_city');
  const cityErr = document.getElementById('err_sam_physical_city');
  if (!cityField || !cityField.value.trim()) {
    markInvalid(cityField, cityErr, "City coordinate is required.");
  } else {
    markValid(cityField, cityErr);
  }

  // 7. Validate Physical State Dropdown Selection
  const stateField = document.getElementById('sam_physical_state');
  const stateErr = document.getElementById('err_sam_physical_state');
  if (!stateField || !stateField.value) {
    markInvalid(stateField, stateErr, "Please pick your facility state location.");
  } else {
    markValid(stateField, stateErr);
  }

  // 8. Validate Zip Code
  const zipField = document.getElementById('sam_physical_zip');
  const zipErr = document.getElementById('err_sam_physical_zip');
  if (!zipField || !zipField.value.trim()) {
    markInvalid(zipField, zipErr, "Zip Code is required.");
  } else {
    markValid(zipField, zipErr);
  }

  // 9. Validate Primary NAICS Code (Enforce exactly 6 digits)
  const naicsField = document.getElementById('sam_primary_naics');
  const naicsErr = document.getElementById('err_sam_primary_naics');
  if (naicsField && naicsErr) {
    const rawNaics = naicsField.value.trim();
    if (!rawNaics) {
      markInvalid(naicsField, naicsErr, "Primary 6-digit NAICS code is required.");
    } else if (!/^[0-9]{6}$/.test(rawNaics)) {
      markInvalid(naicsField, naicsErr, "NAICS parameters must consist of exactly 6 numerical numbers.");
    } else {
      markValid(naicsField, naicsErr);
    }
  }

  // 10. Optional Secondary NAICS Format Multi-Verification Scan
  const secondaryField = document.getElementById('sam_secondary_naics');
  const secondaryErr = document.getElementById('err_sam_secondary_naics');
  if (secondaryField && secondaryErr && secondaryField.value.trim()) {
    const individualCodes = secondaryField.value.split(',');
    let cleanListValid = true;
    
    for (let code of individualCodes) {
      if (!/^[0-9]{6}$/.test(code.trim())) {
        cleanListValid = false;
        break;
      }
    }
    if (!cleanListValid) {
      markInvalid(secondaryField, secondaryErr, "Multi-NAICS segments must be a comma-separated list of 6-digit values.");
    } else {
      markValid(secondaryField, secondaryErr);
    }
  }

  return isValid;
}

// FAMILY 23A: PROCUREMENT REGISTRATION SAM.GOV LAYOUT MATRIX (PART 1 OF 3)
function buildProcurementRegistrationFormPart1(stateDropdownOptionsHtml = "") {
 return `
 <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: SAM.GOV PROCUREMENT REGISTRATION -->
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> System for Award Management (SAM.gov) Backplane</strong> 
   Registration in the System for Award Management (SAM) is a strict federal requirement to bid on, secure, or receive payouts from federal government contracts, discretionary grants, and funding pools. This layout captures your business identifiers, financial banking nodes for EFT processing, and socioeconomic metrics to prepare an error-free procurement filing.
 </div>

 <!-- SECTION 1: ENTITY FOUNDATION PROFILE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Contractor Identification Details</h3>
 </div>

 <!-- FIELD 1: OFFICIAL BUSINESS ENTITY NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="sam_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Entity Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="sam_legal_name" required placeholder="Enter exact legal name matching state registration and IRS data" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_sam_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: EMPLOYER IDENTIFICATION NUMBER (EIN) -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="sam_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
   <input type="text" id="sam_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_sam_federal_ein" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: SAM UEI STATUS DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="sam_uei_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">SAM Unique Entity ID (UEI) Status <span style="color: #ef4444;">*</span></label>
   <select id="sam_uei_status" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;" onchange="toggleSamUniqueEntityIdVisibility(this.value)">
     <option value="none" selected>No UEI Issued (Filings4u must obtain a brand-new UEI from GSA)</option>
     <option value="existing">Yes, I already hold a 12-character alpha-numeric SAM UEI code</option>
   </select>
   <div class="wizard-error-message" id="err_sam_uei_status" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- Hidden Conditional Container: Existing SAM UEI Identifier -->
 <div id="sam_uei_code_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
   <label for="sam_existing_uei" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Your 12-Character Unique Entity ID (UEI) <span style="color: #ef4444;">*</span></label>
   <input type="text" id="sam_existing_uei" placeholder="e.g., X234Y678Z1A2" maxlength="12" style="font-family: monospace; text-transform: uppercase; width: 100%; box-sizing: border-box;" class="wizard-input-field">
   <div class="wizard-error-message" id="err_sam_existing_uei" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 4: PHYSICAL FACILITY ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="sam_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Physical Facility Address <span style="color: #ef4444;">*</span></label>
   <input type="text" id="sam_physical_street" required placeholder="Street Name and Number, Suite, Unit (Must match your IRS profile precisely)" class="wizard-input-field" style="width: 100%; box-sizing: border-box;" onfocus="attachGooglePlacesAutocompleteToNode(this, 'sam_physical')">
   <div class="wizard-error-message" id="err_sam_physical_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- PHYSICAL LOCATION SUB-METRICS METRICS GRID -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
     <div>
       <label for="sam_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
       <input type="text" id="sam_physical_city" required placeholder="City" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
       <div class="wizard-error-message" id="err_sam_physical_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
     <div>
       <label for="sam_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
       <select id="sam_physical_state" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
         <option value="" disabled selected>Select State...</option>
         ${stateDropdownOptionsHtml}
       </select>
       <div class="wizard-error-message" id="err_sam_physical_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
     <div>
       <label for="sam_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
       <input type="text" id="sam_physical_zip" required placeholder="Zip Code" style="font-family: monospace; width: 100%; box-sizing: border-box;" class="wizard-input-field">
       <div class="wizard-error-message" id="err_sam_physical_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
   </div>
 </div>

 <!-- SECTION 2: CORE BUSINESS CLASSIFICATION -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Core Classification Codes</h3>
 </div>

 <!-- FIELD 5: PRIMARY NAICS CODE -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="sam_primary_naics" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary 6-Digit NAICS Code <span style="color: #ef4444;">*</span></label>
   <input type="text" id="sam_primary_naics" required placeholder="e.g., 484121 (General Freight Trucking)" maxlength="6" style="font-family: monospace; width: 100%; box-sizing: border-box;" class="wizard-input-field">
   <div class="wizard-error-message" id="err_sam_primary_naics" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 6: OPTIONAL SECONDARY NAICS CODES -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="sam_secondary_naics" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Secondary NAICS Codes</label>
   <input type="text" id="sam_secondary_naics" placeholder="e.g., 484122, 488510 (Comma separated)" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_sam_secondary_naics" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function validateProcurementRegistrationFormParts2And3() {
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

  // 1. Validate Bank Routing Number (Must be exactly 9 numeric digits)
  const routingField = document.getElementById('sam_bank_routing');
  const routingErr = document.getElementById('err_sam_bank_routing');
  if (routingField && routingErr) {
    const rawRouting = routingField.value.replace(/\D/g, "");
    if (!rawRouting) {
      markInvalid(routingField, routingErr, "9-Digit Routing Number is required.");
    } else if (rawRouting.length !== 9) {
      markInvalid(routingField, routingErr, "Federal banking protocols mandate a precise 9-digit routing layout.");
    } else {
      markValid(routingField, routingErr);
    }
  }

  // 2. Validate Bank Account Number
  const accountField = document.getElementById('sam_bank_account');
  const accountErr = document.getElementById('err_sam_bank_account');
  if (!accountField || !accountField.value.trim()) {
    markInvalid(accountField, accountErr, "Commercial checking or savings account number is required.");
  } else {
    markValid(accountField, accountErr);
  }

  // 3. Validate Account Type Dropdown
  const accountTypeField = document.getElementById('sam_account_type');
  const accountTypeErr = document.getElementById('err_sam_account_type');
  if (!accountTypeField || !accountTypeField.value) {
    markInvalid(accountTypeField, accountTypeErr, "Please clarify your commercial banking account type selection.");
  } else {
    markValid(accountTypeField, accountTypeErr);
  }

  // 4. Validate POC Full Legal Name
  const pocNameField = document.getElementById('sam_poc_name');
  const pocNameErr = document.getElementById('err_sam_poc_name');
  if (!pocNameField || !pocNameField.value.trim()) {
    markInvalid(pocNameField, pocNameErr, "Authorized Point of Contact (POC) legal name is required.");
  } else {
    markValid(pocNameField, pocNameErr);
  }

  // 5. Validate POC Direct Phone Number
  const pocPhoneField = document.getElementById('sam_poc_phone');
  const pocPhoneErr = document.getElementById('err_sam_poc_phone');
  if (!pocPhoneField || !pocPhoneField.value.trim()) {
    markInvalid(pocPhoneField, pocPhoneErr, "Direct contact phone number is required.");
  } else {
    markValid(pocPhoneField, pocPhoneErr);
  }

  // 6. Validate POC Email Address
  const pocEmailField = document.getElementById('sam_poc_email');
  const pocEmailErr = document.getElementById('err_sam_poc_email');
  if (pocEmailField && pocEmailErr) {
    const emailVal = pocEmailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailVal) {
      markInvalid(pocEmailField, pocEmailErr, "Government communications email is required.");
    } else if (!emailRegex.test(emailVal)) {
      markInvalid(pocEmailField, pocEmailErr, "Please supply a valid communication email format.");
    } else {
      markValid(pocEmailField, pocEmailErr);
    }
  }

  return isValid;
}

// FAMILY 23A: PROCUREMENT REGISTRATION SAM.GOV LAYOUT MATRIX (PART 2 OF 3)
function buildProcurementRegistrationFormPart2(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 3: FINANCIAL ELECTRONIC FUNDS TRANSFER PARAMETERS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Electronic Funds Transfer (EFT) Banking Profile</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The federal government remits all contract payments directly via EFT. Ensure this information matches your bank records exactly.</p>
 </div>

 <!-- FIELD 1: BANK ROUTING NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="sam_bank_routing" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">9-Digit Routing Number <span style="color: #ef4444;">*</span></label>
   <input type="text" id="sam_bank_routing" required placeholder="000000000" pattern="[0-9]{9}" title="Please provide a valid 9-digit routing layout." class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_sam_bank_routing" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: BANK ACCOUNT NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="sam_bank_account" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Account Number <span style="color: #ef4444;">*</span></label>
   <input type="text" id="sam_bank_account" required placeholder="Enter commercial checking account number" class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_sam_bank_account" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: ACCOUNT TYPE SELECTION -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="sam_account_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Account Type <span style="color: #ef4444;">*</span></label>
   <select id="sam_account_type" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="checking" selected>Corporate / Business Checking Account</option>
     <option value="savings">Corporate / Business Savings Account</option>
   </select>
   <div class="wizard-error-message" id="err_sam_account_type" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 4: SOCIOECONOMIC SET-ASIDE OPTIONS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Socioeconomic Classifications & Set-Asides</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Check all distinct socioeconomic categories that apply to maximize your visibility for special federal set-aside contracts.</p>
 </div>

 <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="sam_class_wosb" value="wosb" style="margin-top: 3px;">
     <label for="sam_class_wosb" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Women-Owned Small Business (WOSB)</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="sam_class_sdvosb" value="sdvosb" style="margin-top: 3px;">
     <label for="sam_class_sdvosb" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Service-Disabled Veteran-Owned (SDVOSB)</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="sam_class_hubzone" value="hubzone" style="margin-top: 3px;">
     <label for="sam_class_hubzone" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">HUBZone Certified Small Business</label>
   </div>
   <div style="display: flex; align-items: flex-start; gap: 8px;">
     <input type="checkbox" id="sam_class_sdb" value="sdb" style="margin-top: 3px;">
     <label for="sam_class_sdb" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Small Disadvantaged Business (SDB / 8a)</label>
   </div>
 </div>
 `;
}

// FAMILY 23A: PROCUREMENT REGISTRATION SAM.GOV LAYOUT MATRIX (PART 3 OF 3)
function buildProcurementRegistrationFormPart3(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 5: AUTHORIZED EXECUTIVE OFFICER POC -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Authorized Government Point of Contact (POC)</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the details of the company officer authorized to sign off on federal representations and certifications.</p>
 </div>

 <!-- FIELD 4: POC NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="sam_poc_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Full Legal Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="sam_poc_name" required placeholder="First and Last Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_sam_poc_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 5: POC PHONE NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="sam_poc_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Direct Phone Number <span style="color: #ef4444;">*</span></label>
   <input type="tel" id="sam_poc_phone" required placeholder="(512) 555-0199" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_sam_poc_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 6: POC EMAIL ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="sam_poc_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Government Communications Email <span style="color: #ef4444;">*</span></label>
   <input type="email" id="sam_poc_email" required placeholder="contracting@yourcompany.com" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_sam_poc_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 6: ADDITIONAL PROVISIONS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special Clauses & Procurement Directives</h3>
 </div>

 <!-- FIELD 7: OPTIONAL MEMO TEXTAREA (CORRECTED TAGS) -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="sam_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Instructions or Active Solicitations Notes</label>
   <textarea id="sam_provisions" placeholder="Detail any active RFP bidding codes, immediate agency deadlines, specialized tracking flags, or custom notes..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// 📦 MASTER SAM.GOV PROCUREMENT APPLICATION ASSEMBLY HOOK
function buildProcurementRegistrationForm(stateDropdownOptionsHtml = "") {
 return buildProcurementRegistrationFormPart1(stateDropdownOptionsHtml) + 
        buildProcurementRegistrationFormPart2(stateDropdownOptionsHtml) + 
        buildProcurementRegistrationFormPart3(stateDropdownOptionsHtml);
}

/**
 * Scans all field parameters inside the SAM.gov Procurement Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireProcurementWizard() {
  const isPart1Valid = typeof validateProcurementRegistrationFormPart1 === 'function' ? validateProcurementRegistrationFormPart1() : true;
  const isPart23Valid = validateProcurementRegistrationFormParts2And3();

  return (isPart1Valid && isPart23Valid);
}
