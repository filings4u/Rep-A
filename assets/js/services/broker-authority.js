function validateBrokerAuthorityFormPart1() {
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
  const nameField = document.getElementById('ba_legal_name');
  const nameErr = document.getElementById('err_ba_legal_name');
  if (!nameField || !nameField.value.trim()) {
    markInvalid(nameField, nameErr, "Legal business name or entity title is required.");
  } else {
    markValid(nameField, nameErr);
  }

  // 2. Validate Federal EIN (Enforce standard 9 digits)
  const einField = document.getElementById('ba_federal_ein');
  const einErr = document.getElementById('err_ba_federal_ein');
  if (einField && einErr) {
    const rawEin = einField.value.replace(/\D/g, "");
    if (rawEin.length !== 9) {
      markInvalid(einField, einErr, "A standard 9-digit EIN is required (e.g., 12-3456789).");
    } else {
      markValid(einField, einErr);
    }
  }

  // 3. Validate Operations Base State Dropdown Selection
  const baseStateField = document.getElementById('ba_base_state');
  const baseStateErr = document.getElementById('err_ba_base_state');
  if (!baseStateField || !baseStateField.value) {
    markInvalid(baseStateField, baseStateErr, "Please select your logistics base state of operations.");
  } else {
    markValid(baseStateField, baseStateErr);
  }

  // 4. Validate Address & Enforce FMCSA "No P.O. Box" Rule
  const streetField = document.getElementById('ba_physical_street');
  const streetErr = document.getElementById('err_ba_physical_street');
  if (streetField && streetErr) {
    const val = streetField.value.trim();
    const poBoxRegex = /\b(p\.?\s*o\.?\s*box|post\s+office\s+box)\b/i;

    if (!val) {
      markInvalid(streetField, streetErr, "Principal place of business address is required.");
    } else if (poBoxRegex.test(val)) {
      markInvalid(streetField, streetErr, "FMCSA regulatory standards strictly prohibit P.O. Box locations for licensed property brokers.");
    } else {
      markValid(streetField, streetErr);
    }
  }

  // 5. Validate City
  const cityField = document.getElementById('ba_physical_city');
  const cityErr = document.getElementById('err_ba_physical_city');
  if (!cityField || !cityField.value.trim()) {
    markInvalid(cityField, cityErr, "City coordinate is required.");
  } else {
    markValid(cityField, cityErr);
  }

  // 6. Validate Address State Selection Dropdown
  const stateField = document.getElementById('ba_physical_state');
  const stateErr = document.getElementById('err_ba_physical_state');
  if (!stateField || !stateField.value) {
    markInvalid(stateField, stateErr, "Please pick your business state coordinate.");
  } else {
    markValid(stateField, stateErr);
  }

  // 7. Validate Zip Code
  const zipField = document.getElementById('ba_physical_zip');
  const zipErr = document.getElementById('err_ba_physical_zip');
  if (!zipField || !zipField.value.trim()) {
    markInvalid(zipField, zipErr, "Zip Code is required.");
  } else {
    markValid(zipField, zipErr);
  }

  // 8. Validate Broker Classification Sub-Type Dropdown Selection
  const classField = document.getElementById('ba_classification_type');
  const classErr = document.getElementById('err_ba_classification_type');
  if (!classField || !classField.value) {
    markInvalid(classField, classErr, "Please choose a logistics broker configuration profile.");
  } else {
    markValid(classField, classErr);
  }

  return isValid;
}

// FAMILY 26A: BROKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildBrokerAuthorityFormPart1(stateDropdownOptionsHtml = "") {
 return `
 <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: PROPERTY BROKER AUTHORITY -->
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> FMCSA Property Broker Authority (MC Number) Mandates</strong> 
   To arrange the transportation of property or household goods for compensation by an authorized motor carrier, you must obtain a Property Broker License (Operating Authority) from the Federal Motor Carrier Safety Administration (FMCSA). Brokers are strictly logistics coordinators who do not own the transport vehicles or take physical custody of the cargo.
 </div>

 <!-- SECTION 1: BROKER BASELINE IDENTIFICATION PROFILE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Corporate Broker Profile</h3>
 </div>

 <!-- FIELD 1: LEGAL BUSINESS NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ba_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Legal Business Name / Entity Title <span style="color: #ef4444;">*</span></label>
   <input type="text" id="ba_legal_name" required placeholder="Enter exact name registered with corporate state records or IRS files" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_ba_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: EMPLOYER IDENTIFICATION NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="ba_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
   <input type="text" id="ba_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_ba_federal_ein" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: BASE STATE -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="ba_base_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Base State of Operations <span style="color: #ef4444;">*</span></label>
   <select id="ba_base_state" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="" disabled selected>Select Base State...</option>
     ${stateDropdownOptionsHtml}
   </select>
   <div class="wizard-error-message" id="err_ba_base_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 4: PRINCIPAL STREET ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ba_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Place of Business Address <span style="color: #ef4444;">*</span></label>
   <input type="text" id="ba_physical_street" required placeholder="Physical Address (FMCSA regulations strictly prohibit P.O. Boxes)" class="wizard-input-field" style="width: 100%; box-sizing: border-box;" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ba_physical')">
   <div class="wizard-error-message" id="err_ba_physical_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- GEOGRAPHIC METRICS SUB-PANEL COMPONENT -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
     <div>
       <label for="ba_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
       <input type="text" id="ba_physical_city" required placeholder="City" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
       <div class="wizard-error-message" id="err_ba_physical_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
     <div>
       <label for="ba_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
       <select id="ba_physical_state" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
         <option value="" disabled selected>Select State...</option>
         ${stateDropdownOptionsHtml}
       </select>
       <div class="wizard-error-message" id="err_ba_physical_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
     <div>
       <label for="ba_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
       <input type="text" id="ba_physical_zip" required placeholder="Zip Code" style="font-family: monospace; width: 100%; box-sizing: border-box;" class="wizard-input-field">
       <div class="wizard-error-message" id="err_ba_physical_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
   </div>
 </div>

 <!-- SECTION 2: AUTHORITY SUB-TYPE CLASSIFICATIONS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Broker Classification Sub-Type</h3>
 </div>

 <!-- FIELD 5: CONFIGURATION CLASSIFICATION DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ba_classification_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Logistics Broker Configuration Profile <span style="color: #ef4444;">*</span></label>
   <select id="ba_classification_type" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="" disabled selected>Select Broker Sub-Type...</option>
     <option value="property">Broker of Property (Except Household Goods - Standard commercial freight arrangements)</option>
     <option value="household-goods">Broker of Household Goods (Arranging consumer domestic moving and relocations)</option>
     <option value="both">Dual Classification (Configures logistics pathways for both general freight and household goods)</option>
   </select>
   <div class="wizard-error-message" id="err_ba_classification_type" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function validateBrokerAuthorityFormParts2And3() {
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

  // 1. Validate Planned Security Choice Dropdown
  const bondField = document.getElementById('ba_bond_type');
  const bondErr = document.getElementById('err_ba_bond_type');
  if (!bondField || !bondField.value) {
    markInvalid(bondField, bondErr, "Please select your planned federal financial responsibility instrument.");
  } else {
    markValid(bondField, bondErr);
  }

  // 2. Validate Partner Quote Option Dropdown
  const quoteField = document.getElementById('ba_partner_quote_choice');
  const quoteErr = document.getElementById('err_ba_partner_quote_choice');
  if (!quoteField || !quoteField.value) {
    markInvalid(quoteField, quoteErr, "Please clarify your partner bond procurement preference.");
  } else {
    markValid(quoteField, quoteErr);
  }

  // 3. Validate Representative Full Legal Name
  const officerNameField = document.getElementById('ba_officer_name');
  const officerNameErr = document.getElementById('err_ba_officer_name');
  if (!officerNameField || !officerNameField.value.trim()) {
    markInvalid(officerNameField, officerNameErr, "Authorized representative full legal name is required.");
  } else {
    markValid(officerNameField, officerNameErr);
  }

  // 4. Validate Direct Phone Number
  const officerPhoneField = document.getElementById('ba_officer_phone');
  const officerPhoneErr = document.getElementById('err_ba_officer_phone');
  if (!officerPhoneField || !officerPhoneField.value.trim()) {
    markInvalid(officerPhoneField, officerPhoneErr, "Direct contact phone number is required.");
  } else {
    markValid(officerPhoneField, officerPhoneErr);
  }

  // 5. Validate Corporate Communications Email Address
  const officerEmailField = document.getElementById('ba_officer_email');
  const officerEmailErr = document.getElementById('err_ba_officer_email');
  if (officerEmailField && officerEmailErr) {
    const emailVal = officerEmailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailVal) {
      markInvalid(officerEmailField, officerEmailErr, "Corporate communications email is required.");
    } else if (!emailRegex.test(emailVal)) {
      markInvalid(officerEmailField, officerEmailErr, "Please supply a valid representative email format.");
    } else {
      markValid(officerEmailField, officerEmailErr);
    }
  }

  return isValid;
}

// FAMILY 26A: BROKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildBrokerAuthorityFormPart2(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 3: MANDATORY FEDERAL FINANCIAL GUARANTEE MATRIX -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Federal Financial Responsibility Mandate ($75,000 Guarantee)</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The FMCSA strictly mandates that all licensed property brokers maintain a continuous financial instrument of $75,000 to safely settle freight payment disputes.</p>
 </div>

 <!-- STRUCTURAL INSURANCE EXPLANATION TILES -->
 <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; background: rgba(10, 31, 68, 0.01); box-sizing: border-box;">
   <div style="background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; font-size: 0.8rem; line-height: 1.45;">
     <strong style="color: var(--navy); display: block; margin-bottom: 6px;"><i class="fa-solid fa-shield-halved"></i> BMC-84 Broker Surety Bond</strong> 
     An annual premium payment model requiring zero collateral locking. Issued through an authorized treasury-listed surety corporation, underwriting rates are assigned based on personal credit tier maps. This is the standard operational pathway preferred by modern corporate brokerages.
   </div>
   <div style="background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; font-size: 0.8rem; line-height: 1.45;">
     <strong style="color: var(--navy); display: block; margin-bottom: 6px;"><i class="fa-solid fa-building-columns"></i> BMC-85 Broker Trust Fund</strong> 
     Requires an upfront cash deposition of the full $75,000 principal balance. This asset matrix is held securely inside a designated trust bank entity or escrow institution throughout the operational lifespan of your MC number, fully locking your liquidity.
   </div>
 </div>

 <!-- FIELD 1: BOND TYPE DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 1; margin-top: 8px;">
   <label for="ba_bond_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Planned Security Choice <span style="color: #ef4444;">*</span></label>
   <select id="ba_bond_type" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="bmc-84" selected>BMC-84 Surety Bond (Annual Premium Risk Allocation)</option>
     <option value="bmc-85">BMC-85 Trust Fund ($75,000 Cash Escrow Settlement)</option>
     <option value="not-sure">Undecided / Reviewing Operational Capital</option>
   </select>
   <div class="wizard-error-message" id="err_ba_bond_type" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: QUOTE CHOICE DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 1; margin-top: 8px;">
   <label for="ba_partner_quote_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Procure Partner Bond Quote? <span style="color: #ef4444;">*</span></label>
   <select id="ba_partner_quote_choice" required class="wizard-input-field" style="font-weight: 600; border: 1px solid var(--primary); width: 100%; box-sizing: border-box;">
     <option value="yes" selected>Yes, route my application data to Filings4u partners for a free, fast BMC-84 premium quote</option>
     <option value="no">No, I am utilizing an independent private bonding agent / market path</option>
   </select>
   <div class="wizard-error-message" id="err_ba_partner_quote_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

// FAMILY 26A: BROKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildBrokerAuthorityFormPart3(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 4: AUTHORIZED PROCESS OFFICIAL -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Authorized Broker Representative</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the contact details for the primary legal representative authorized to sign off on federal logistics filings.</p>
 </div>

 <!-- FIELD 3: REPRESENTATIVE NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ba_officer_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Representative Full Legal Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="ba_officer_name" required placeholder="First and Last Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_ba_officer_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 4: PHONE NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="ba_officer_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Direct Phone Number <span style="color: #ef4444;">*</span></label>
   <input type="tel" id="ba_officer_phone" required placeholder="(512) 555-0199" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_ba_officer_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 5: EMAIL ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="ba_officer_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Corporate Communications Email <span style="color: #ef4444;">*</span></label>
   <input type="email" id="ba_officer_email" required placeholder="logistics@yourcompany.com" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_ba_officer_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 5: ADDITIONAL PROVISIONS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Logistics Notes</h3>
 </div>

 <!-- FIELD 6: OPTIONAL TEXTAREA -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ba_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Brokerage Instructions or Setup Notes</label>
   <textarea id="ba_provisions" placeholder="Detail any immediate freight launching timelines, specialized cargo categories, pending corporate relationships, or custom proxy handling directives relative to your FMCSA broker authority registration..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// 📦 MASTER BROKER AUTHORITY APPLICATION ASSEMBLY HOOK
function buildBrokerAuthorityForm(stateDropdownOptionsHtml = "") {
 return buildBrokerAuthorityFormPart1(stateDropdownOptionsHtml) + 
        buildBrokerAuthorityFormPart2(stateDropdownOptionsHtml) + 
        buildBrokerAuthorityFormPart3(stateDropdownOptionsHtml);
}

/**
 * Scans all field parameters inside the Broker Authority Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireBrokerAuthorityWizard() {
  const isPart1Valid = typeof validateBrokerAuthorityFormPart1 === 'function' ? validateBrokerAuthorityFormPart1() : true;
  const isPart23Valid = validateBrokerAuthorityFormParts2And3();

  return (isPart1Valid && isPart23Valid);
}
