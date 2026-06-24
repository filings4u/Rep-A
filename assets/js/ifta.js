function validateIftaRegistrationFormPart1() {
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

  // 1. Validate Business Name
  const nameField = document.getElementById('ifta_legal_name');
  const nameErr = document.getElementById('err_ifta_legal_name');
  if (!nameField || !nameField.value.trim()) {
    markInvalid(nameField, nameErr, "Official business name is required.");
  } else {
    markValid(nameField, nameErr);
  }

  // 2. Validate USDOT Number (Enforce numbers only)
  const dotField = document.getElementById('ifta_usdot_number');
  const dotErr = document.getElementById('err_ifta_usdot_number');
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
  const einField = document.getElementById('ifta_federal_ein');
  const einErr = document.getElementById('err_ifta_federal_ein');
  if (einField && einErr) {
    const rawEin = einField.value.replace(/\D/g, "");
    if (rawEin.length !== 9) {
      markInvalid(einField, einErr, "A standard 9-digit EIN is required (e.g., 12-3456789).");
    } else {
      markValid(einField, einErr);
    }
  }

  // 4. Validate Filing Selection Scope Dropdown Selection
  const intentField = document.getElementById('ifta_order_intent');
  const intentErr = document.getElementById('err_ifta_order_intent');
  if (!intentField || !intentField.value) {
    markInvalid(intentField, intentErr, "Please pick a filing selection scope option.");
  } else {
    markValid(intentField, intentErr);
  }

  return isValid;
}

// FAMILY 30A: IFTA REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildIftaRegistrationFormPart1(stateDropdownOptionsHtml = "") {
 return `
 <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS IFTA REGISTRATION? -->
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> International Fuel Tax Agreement (IFTA) Mandates</strong> 
   IFTA is a cooperative agreement among US states and Canadian provinces to simplify the reporting of fuel use taxes by commercial motor carriers operating across multiple jurisdictions. An IFTA license and decals are required for any qualified motor vehicle that has two axles and a gross vehicle weight rating exceeding 26,000 lbs, has three or more axles regardless of weight, or is used in combination exceeding 26,000 lbs.
 </div>

 <!-- SECTION 1: CARRIER BASELINE PROFILE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Carrier Identity Profile</h3>
 </div>

 <!-- FIELD 1: OFFICIAL BUSINESS NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ifta_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="ifta_legal_name" required placeholder="Enter exact legal name matching state registration and USDOT profile" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_ifta_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: USDOT NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="ifta_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
   <input type="text" id="ifta_usdot_number" required placeholder="Enter USDOT Number" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_ifta_usdot_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: EMPLOYER IDENTIFICATION NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="ifta_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer ID (EIN) <span style="color: #ef4444;">*</span></label>
   <input type="text" id="ifta_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_ifta_federal_ein" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 2: FILING INTENT CLASSIFICATION -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Application Type & Order Intent</h3>
 </div>

 <!-- FIELD 4: FILING SELECTION SCOPE DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ifta_order_intent" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Selection Scope <span style="color: #ef4444;">*</span></label>
   <select id="ifta_order_intent" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;" onchange="toggleIftaFulfillmentSubFields(this.value)">
     <option value="initial" selected>Initial Account Registration (Establish brand new state IFTA account and receive first decal set)</option>
     <option value="additional">Ordering Additional Decal Sets (Add extra fuel decal sets for newly acquired fleet units)</option>
   </select>
   <div class="wizard-error-message" id="err_ifta_order_intent" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function validateIftaRegistrationFormParts2And3() {
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

  // 1. Validate Apportioned IRP Account Number
  const irpAccountField = document.getElementById('ifta_irp_account_num');
  const irpAccountErr = document.getElementById('err_ifta_irp_account_num');
  if (!irpAccountField || !irpAccountField.value.trim()) {
    markInvalid(irpAccountField, irpAccountErr, "Apportioned IRP account reference ID number is required.");
  } else {
    markValid(irpAccountField, irpAccountErr);
  }

  // 2. Validate IRP Base State Dropdown Selection
  const baseJurisdictionField = document.getElementById('ifta_base_jurisdiction');
  const baseJurisdictionErr = document.getElementById('err_ifta_base_jurisdiction');
  if (!baseJurisdictionField || !baseJurisdictionField.value) {
    markInvalid(baseJurisdictionField, baseJurisdictionErr, "Please specify your IRP apportioned base state.");
  } else {
    markValid(baseJurisdictionField, baseJurisdictionErr);
  }

  // 3. Validate Number of Decal Sets Requested (Min 1, Max 250)
  const decalSetsField = document.getElementById('ifta_decal_sets_count');
  const decalSetsErr = document.getElementById('err_ifta_decal_sets_count');
  if (decalSetsField && decalSetsErr) {
    const value = parseInt(decalSetsField.value, 10);
    if (isNaN(value) || value < 1) {
      markInvalid(decalSetsField, decalSetsErr, "IFTA compliance requires requesting at least 1 decal fleet set.");
    } else if (value > 250) {
      markInvalid(decalSetsField, decalSetsErr, "Single transaction batch orders cannot exceed 250 total decal sets.");
    } else {
      markValid(decalSetsField, decalSetsErr);
    }
  }

  return isValid;
}

// FAMILY 30A: IFTA REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildIftaRegistrationFormPart2(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 3: INTERNATIONAL REGISTRATION PLAN LINK INTERFACE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. International Registration Plan (IRP) Account Mapping</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State tax jurisdictions mandate cross-referencing your base state apportioned commercial vehicle license plates (IRP credentials) before issuing fuel license permits.</p>
 </div>

 <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
   
   <!-- FIELD 1: IRP ACCOUNT ID -->
   <div class="wizard-input-group" style="margin: 0;">
     <label for="ifta_irp_account_num" style="font-size: 0.75rem; font-weight: 700; color: var(--navy); text-transform: uppercase; display: block; margin-bottom: 4px;">Apportioned IRP Account Number <span style="color: #ef4444;">*</span></label>
     <input type="text" id="ifta_irp_account_num" required placeholder="Enter Apportioned IRP Plate Account ID" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
     <div class="wizard-error-message" id="err_ifta_irp_account_num" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   </div>

   <!-- FIELD 2: IRP BASE STATE -->
   <div class="wizard-input-group" style="margin: 0;">
     <label for="ifta_base_jurisdiction" style="font-size: 0.75rem; font-weight: 700; color: var(--navy); text-transform: uppercase; display: block; margin-bottom: 4px;">IRP Base State <span style="color: #ef4444;">*</span></label>
     <select id="ifta_base_jurisdiction" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
       <option value="" disabled selected>Select Base State...</option>
       ${stateDropdownOptionsHtml}
     </select>
     <div class="wizard-error-message" id="err_ifta_base_jurisdiction" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   </div>

 </div>

 <!-- SECTION 4: FULFILLMENT DECAL COUNT VOLUME -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Decal Fleet Volumes</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">One set consists of two matching decals (one for each side of the vehicle cab).</p>
 </div>

 <!-- FIELD 3: DECAL SETS COUNT -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ifta_decal_sets_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Number of Decal Sets Requested <span style="color: #ef4444;">*</span></label>
   <input type="number" id="ifta_decal_sets_count" required value="1" min="1" max="250" class="wizard-input-field" style="width: 100%; box-sizing: border-box;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
   <div class="wizard-error-message" id="err_ifta_decal_sets_count" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

// FAMILY 30A: IFTA REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildIftaRegistrationFormPart3(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Attestation</h3>
 </div>

 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="ifta_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special IFTA Instructions or Fleet Notes</label>
   <textarea id="ifta_provisions" placeholder="Detail any immediate temporary trip permit deadlines, newly added tractor VIN profiles, out-of-state leasing arrangements, or custom proxy handling directives relative to your state IFTA registration dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// 📦 MASTER IFTA REGISTRATION APPLICATION ASSEMBLY HOOK
function buildIftaRegistrationForm(stateDropdownOptionsHtml = "") {
 return buildIftaRegistrationFormPart1(stateDropdownOptionsHtml) + 
        buildIftaRegistrationFormPart2(stateDropdownOptionsHtml) + 
        buildIftaRegistrationFormPart3(stateDropdownOptionsHtml);
}

/**
 * Scans all field parameters inside the IFTA Registration Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireIftaWizard() {
  const isPart1Valid = typeof validateIftaRegistrationFormPart1 === 'function' ? validateIftaRegistrationFormPart1() : true;
  const isPart2Valid = validateIftaRegistrationFormParts2And3();

  return (isPart1Valid && isPart2Valid);
}
