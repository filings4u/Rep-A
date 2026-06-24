function validateScacCodeRegistrationFormPart1() {
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

  // 1. Validate Official Business Name
  const nameField = document.getElementById('scac_legal_name');
  const nameErr = document.getElementById('err_scac_legal_name');
  if (!nameField || !nameField.value.trim()) {
    markInvalid(nameField, nameErr, "Official business name is required.");
  } else {
    markValid(nameField, nameErr);
  }

  // 2. Validate USDOT Number (Must be strictly numeric strings)
  const dotField = document.getElementById('scac_usdot_number');
  const dotErr = document.getElementById('err_scac_usdot_number');
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

  // 3. Optional MC Number Format Verification (If filled out, standard checks enforce clean indexing formats)
  const mcField = document.getElementById('scac_mc_number');
  const mcErr = document.getElementById('err_scac_mc_number');
  if (mcField && mcErr && mcField.value.trim()) {
    const rawMc = mcField.value.trim().toUpperCase();
    if (!/^(MC|MX)?-?\d+$/.test(rawMc)) {
      markInvalid(mcField, mcErr, "Please provide a valid MC designation layout (e.g., MC-123456).");
    } else {
      markValid(mcField, mcErr);
    }
  }

  // 4. Validate Corporate Headquarter Address
  const streetField = document.getElementById('scac_physical_street');
  const streetErr = document.getElementById('err_scac_physical_street');
  if (!streetField || !streetField.value.trim()) {
    markInvalid(streetField, streetErr, "Corporate headquarter address is required.");
  } else {
    markValid(streetField, streetErr);
  }

  // 5. Validate City
  const cityField = document.getElementById('scac_physical_city');
  const cityErr = document.getElementById('err_scac_physical_city');
  if (!cityField || !cityField.value.trim()) {
    markInvalid(cityField, cityErr, "City detail is required.");
  } else {
    markValid(cityField, cityErr);
  }

  // 6. Validate State Dropdown Selection
  const stateField = document.getElementById('scac_physical_state');
  const stateErr = document.getElementById('err_scac_physical_state');
  if (!stateField || !stateField.value) {
    markInvalid(stateField, stateErr, "Please pick your corporate headquarters state.");
  } else {
    markValid(stateField, stateErr);
  }

  // 7. Validate Zip Code
  const zipField = document.getElementById('scac_physical_zip');
  const zipErr = document.getElementById('err_scac_physical_zip');
  if (!zipField || !zipField.value.trim()) {
    markInvalid(zipField, zipErr, "Zip Code is required.");
  } else {
    markValid(zipField, zipErr);
  }

  // 8. Validate Fleet Asset Operational Mode Dropdown Selection
  const carrierTypeField = document.getElementById('scac_carrier_type');
  const carrierTypeErr = document.getElementById('err_scac_carrier_type');
  if (!carrierTypeField || !carrierTypeField.value) {
    markInvalid(carrierTypeField, carrierTypeErr, "Please specify an asset operational mode profile.");
  } else {
    markValid(carrierTypeField, carrierTypeErr);
  }

  return isValid;
}

// FAMILY 27A: SCAC CODE REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildScacCodeRegistrationFormPart1(stateDropdownOptionsHtml = "") {
 return `
 <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS A SCAC CODE? -->
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> National Motor Freight Traffic Association SCAC Backplane</strong> 
   A Standard Carrier Alpha Code (SCAC) is a unique, mandatory two-to-four-letter code used to identify transportation companies across computerized tracking networks. It is a strict operational parameter required for border crossing systems (ACE/ACI), processing ocean container interchanges, billing federal military logistics, and integrating electronic data interchanges (EDI) with national freight accounts.
 </div>

 <!-- SECTION 1: CARRIER BASELINE PROFILE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Carrier Identity Profile</h3>
 </div>

 <!-- FIELD 1: OFFICIAL BUSINESS NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="scac_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="scac_legal_name" required placeholder="Enter exact legal name matching your USDOT profile and state files" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_scac_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: USDOT NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="scac_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
   <input type="text" id="scac_usdot_number" required placeholder="Enter USDOT Number" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_scac_usdot_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: MC / MX NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="scac_mc_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">MC / MX Number (If Applicable)</label>
   <input type="text" id="scac_mc_number" placeholder="e.g., MC-000000" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_scac_mc_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 4: CORPORATE HEADQUARTER ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="scac_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Corporate Headquarter Address <span style="color: #ef4444;">*</span></label>
   <input type="text" id="scac_physical_street" required placeholder="Street Name and Number, Suite, Unit (Must match your primary FMCSA files)" class="wizard-input-field" style="width: 100%; box-sizing: border-box;" onfocus="attachGooglePlacesAutocompleteToNode(this, 'scac_physical')">
   <div class="wizard-error-message" id="err_scac_physical_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- GEOGRAPHIC DATA METRICS COMPONENT GRID -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
     <div>
       <label for="scac_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
       <input type="text" id="scac_physical_city" required placeholder="City" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
       <div class="wizard-error-message" id="err_scac_physical_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
     <div>
       <label for="scac_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
       <select id="scac_physical_state" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
         <option value="" disabled selected>Select State...</option>
         ${stateDropdownOptionsHtml}
       </select>
       <div class="wizard-error-message" id="err_scac_physical_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
     <div>
       <label for="scac_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
       <input type="text" id="scac_physical_zip" required placeholder="Zip Code" style="font-family: monospace; width: 100%; box-sizing: border-box;" class="wizard-input-field">
       <div class="wizard-error-message" id="err_scac_physical_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
   </div>
 </div>

 <!-- SECTION 2: LINEAR CODE ASSIGNMENTS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Logistics Classification</h3>
 </div>

 <!-- FIELD 5: FLEET ASSET OPERATIONAL MODE DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="scac_carrier_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Fleet Asset Operational Mode <span style="color: #ef4444;">*</span></label>
   <select id="scac_carrier_type" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="" disabled selected>Select Operational Mode...</option>
     <option value="motor-freight">Motor Common/Contract Carrier (Standard General Freight / Truckload)</option>
     <option value="intermodal">Intermodal Equipment Provider (Chassis / Container interchanges at rail/ocean hubs)</option>
     <option value="broker">Freight Forwarder / Property Brokerage Network</option>
     <option value="broker-carrier">Dual Mode (Operating equipment coupled with separate asset brokerage lines)</option>
   </select>
   <div class="wizard-error-message" id="err_scac_carrier_type" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function validateScacCodeRegistrationFormParts2And3() {
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

  // 1. Validate Optional Preferred Alpha Prefix (If filled out, must be 2 to 4 pure alphabetic characters)
  const lettersField = document.getElementById('scac_preferred_letters');
  const lettersErr = document.getElementById('err_scac_preferred_letters');
  if (lettersField && lettersErr && lettersField.value.trim()) {
    const rawLetters = lettersField.value.trim().toUpperCase();
    const alphaRegex = /^[A-Z]{2,4}$/;
    
    if (!alphaRegex.test(rawLetters)) {
      markInvalid(lettersField, lettersErr, "Preferred prefixes must consist of exactly 2 to 4 alphabetic characters only.");
    } else {
      markValid(lettersField, lettersErr);
      lettersField.value = rawLetters; // Standardize casing layout format
    }
  } else if (lettersField && lettersErr) {
    markValid(lettersField, lettersErr);
  }

  // 2. Validate System Integration Choice Dropdown Selection
  const integrationField = document.getElementById('scac_integration_need');
  const integrationErr = document.getElementById('err_scac_integration_need');
  if (!integrationField || !integrationField.value) {
    markInvalid(integrationField, integrationErr, "Please choose a primary system integration channel.");
  } else {
    markValid(integrationField, integrationErr);
  }

  // 3. Validate Contact Person Full Name
  const contactNameField = document.getElementById('scac_contact_name');
  const contactNameErr = document.getElementById('err_scac_contact_name');
  if (!contactNameField || !contactNameField.value.trim()) {
    markInvalid(contactNameField, contactNameErr, "Contact person full legal name is required.");
  } else {
    markValid(contactNameField, contactNameErr);
  }

  // 4. Validate Contact Phone Number
  const contactPhoneField = document.getElementById('scac_contact_phone');
  const contactPhoneErr = document.getElementById('err_scac_contact_phone');
  if (!contactPhoneField || !contactPhoneField.value.trim()) {
    markInvalid(contactPhoneField, contactPhoneErr, "Contact phone number is required.");
  } else {
    markValid(contactPhoneField, contactPhoneErr);
  }

  // 5. Validate Contact Email Address
  const contactEmailField = document.getElementById('scac_contact_email');
  const contactEmailErr = document.getElementById('err_scac_contact_email');
  if (contactEmailField && contactEmailErr) {
    const emailVal = contactEmailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailVal) {
      markInvalid(contactEmailField, contactEmailErr, "Contact email address is required.");
    } else if (!emailRegex.test(emailVal)) {
      markInvalid(contactEmailField, contactEmailErr, "Please supply a valid communication contact email pattern.");
    } else {
      markValid(contactEmailField, contactEmailErr);
    }
  }

  return isValid;
}

// FAMILY 27A: SCAC CODE REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildScacCodeRegistrationFormPart2(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 3: ALPHA CODE CONFIGURATION OPTIONS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Code Prefixes & Integration Channels</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The NMFTA regulates code assignments. Input your primary software integration goals or preferred alpha character paths below.</p>
 </div>

 <!-- FIELD 1: OPTIONAL PREFERRED PREFIX LETTERS -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="scac_preferred_letters" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Preferred 2-4 Letter Alpha Code Prefix</label>
   <input type="text" id="scac_preferred_letters" placeholder="e.g., ABCD (Subject to NMFTA availability maps)" minlength="2" maxlength="4" style="font-family: monospace; text-transform: uppercase; width: 100%; box-sizing: border-box;" class="wizard-input-field">
   <div class="wizard-error-message" id="err_scac_preferred_letters" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: SYSTEM INTEGRATION CHANNEL DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="scac_integration_need" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary System Integration Channel <span style="color: #ef4444;">*</span></label>
   <select id="scac_integration_need" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="customs" selected>U.S. Customs Border Protection / ACE Portal Manifests</option>
     <option value="rail-ocean">Railroad / Ocean Port Intermodal Container Interchanges (UIIA)</option>
     <option value="government">Military Freight / Defense Logistics Agency (DLA) Billing Mappings</option>
     <option value="edi-commercial">Commercial EDI / Automated Shipper TMS Integration Layouts</option>
   </select>
   <div class="wizard-error-message" id="err_scac_integration_need" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 4: AUTHORIZED ADMINISTRATIVE PROFILE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Authorized Communications Contact</h3>
 </div>

 <!-- FIELD 3: CONTACT FULL LEGAL NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="scac_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person Full Legal Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="scac_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_scac_contact_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 4: CONTACT PHONE NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="scac_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Phone Number <span style="color: #ef4444;">*</span></label>
   <input type="tel" id="scac_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_scac_contact_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 5: CONTACT EMAIL ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="scac_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Email Address <span style="color: #ef4444;">*</span></label>
   <input type="email" id="scac_contact_email" required placeholder="safety@carriername.com" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_scac_contact_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

// FAMILY 27A: SCAC CODE REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildScacCodeRegistrationFormPart3(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Registration Directives</h3>
 </div>

 <!-- FIELD 6: OPTIONAL TEXTAREA FOR SYSTEM CODES -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="scac_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Handling Notes or Integration Instructions</label>
   <textarea id="scac_provisions" placeholder="Detail any specific UIIA requirements, expedited customs deadlines, immediate carrier onboarding codes, or custom proxy handling directives relative to your NMFTA SCAC registration dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// 📦 MASTER SCAC CODE REGISTRATION ASSEMBLY HOOK
function buildScacCodeRegistrationForm(stateDropdownOptionsHtml = "") {
 return buildScacCodeRegistrationFormPart1(stateDropdownOptionsHtml) + 
        buildScacCodeRegistrationFormPart2(stateDropdownOptionsHtml) + 
        buildScacCodeRegistrationFormPart3(stateDropdownOptionsHtml);
}

/**
 * Scans all field parameters inside the SCAC Code Registration Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireScacCodeWizard() {
  const isPart1Valid = typeof validateScacCodeRegistrationFormPart1 === 'function' ? validateScacCodeRegistrationFormPart1() : true;
  const isPart2Valid = validateScacCodeRegistrationFormParts2And3();

  return (isPart1Valid && isPart2Valid);
}
