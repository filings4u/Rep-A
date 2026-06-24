function validateHeavyUseTaxFormPart1() {
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
  const nameField = document.getElementById('hut_legal_name');
  const nameErr = document.getElementById('err_hut_legal_name');
  if (!nameField || !nameField.value.trim()) {
    markInvalid(nameField, nameErr, "Official business name or owner-operator title is required.");
  } else {
    markValid(nameField, nameErr);
  }

  // 2. Validate Heavy Use Tax EIN (SSNs are strictly banned by IRS Form 2290 rules)
  const einField = document.getElementById('hut_federal_ein');
  const einErr = document.getElementById('err_hut_federal_ein');
  if (einField && einErr) {
    const rawEin = einField.value.replace(/\D/g, "");
    if (rawEin.length !== 9) {
      markInvalid(einField, einErr, "A valid 9-digit EIN is mandatory for Form 2290 processing. SSNs are not accepted.");
    } else {
      markValid(einField, einErr);
    }
  }

  // 3. Validate Base State Selection
  const stateField = document.getElementById('hut_registrant_state');
  const stateErr = document.getElementById('err_hut_registrant_state');
  if (!stateField || !stateField.value) {
    markInvalid(stateField, stateErr, "Please specify your base state of registration.");
  } else {
    markValid(stateField, stateErr);
  }

  // 4. Validate Month of First Use
  const monthField = document.getElementById('hut_first_use_month');
  const monthErr = document.getElementById('err_hut_first_use_month');
  if (!monthField || !monthField.value) {
    markInvalid(monthField, monthErr, "Please select the vehicle's month of first public use.");
  } else {
    markValid(monthField, monthErr);
  }

  // 5. Validate Filing Tax Year Period
  const yearField = document.getElementById('hut_tax_year');
  const yearErr = document.getElementById('err_hut_tax_year');
  if (!yearField || !yearField.value) {
    markInvalid(yearField, yearErr, "Please choose an active filing tax year period.");
  } else {
    markValid(yearField, yearErr);
  }

  return isValid;
}

// FAMILY 20A: HEAVY USE TAX (2290) LAYOUT MATRIX (PART 1 OF 3)
function buildHeavyUseTaxFormPart1(stateDropdownOptionsHtml = "") {
 return `
 <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: HEAVY HIGHWAY VEHICLE USE TAX -->
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> IRS Form 2290 Compliance Mandates</strong> 
   The Federal Heavy Highway Vehicle Use Tax (Form 2290) is an annual statutory tax levied on highway motor vehicles operating at a taxable gross weight of 55,000 pounds or more. <span style="font-weight: 700; color: #ef4444;">⚠ IRS Regulatory Shield:</span> The IRS strictly prohibits the use of Social Security Numbers (SSN) for Form 2290 processing. An official Employer Identification Number (EIN) is mandatory to generate your Schedule 1 stamped receipt.
 </div>

 <!-- SECTION 1: VEHICLE OPERATOR TAX ID PROFILE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Vehicle Operator Tax ID Profile</h3>
 </div>

 <!-- FIELD 1: OFFICIAL BUSINESS NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="hut_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name / Owner-Operator Title <span style="color: #ef4444;">*</span></label>
   <input type="text" id="hut_legal_name" required placeholder="Enter name exactly as registered on your IRS EIN assignment letter" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_hut_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: EMPLOYER IDENTIFICATION NUMBER (EIN) -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="hut_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
   <input type="text" id="hut_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}-[0-9]{7}" title="IRS Regulations strictly require a valid 9-digit EIN (XX-XXXXXXX). SSNs are not accepted." class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_hut_federal_ein" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: BASE STATE OF REGISTRATION -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="hut_registrant_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Base State of Registration <span style="color: #ef4444;">*</span></label>
   <select id="hut_registrant_state" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="" disabled selected>Select Base State...</option>
     ${stateDropdownOptionsHtml}
   </select>
   <div class="wizard-error-message" id="err_hut_registrant_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- SECTION 2: TAXABLE PERIOD PARAMETERS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Taxable Period & First Use</h3>
 </div>

 <!-- FIELD 4: MONTH OF FIRST USE -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="hut_first_use_month" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Month of First Use on Public Highways <span style="color: #ef4444;">*</span></label>
   <select id="hut_first_use_month" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="July" selected>July (Standard Tax Year Beginning Month)</option>
     <option value="August">August</option> <option value="September">September</option>
     <option value="October">October</option> <option value="November">November</option>
     <option value="December">December</option> <option value="January">January</option>
     <option value="February">February</option> <option value="March">March</option>
     <option value="April">April</option> <option value="May">May</option>
     <option value="June">June</option>
   </select>
   <div class="wizard-error-message" id="err_hut_first_use_month" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 5: FILING TAX YEAR PERIOD -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="hut_tax_year" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Tax Year Period <span style="color: #ef4444;">*</span></label>
   <select id="hut_tax_year" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="2026-2027" selected>July 1, 2026 - June 30, 2027 (Current Filing Window)</option>
     <option value="2025-2026">July 1, 2025 - June 30, 2026 (Prior Period Renewal)</option>
   </select>
   <div class="wizard-error-message" id="err_hut_tax_year" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function validateHeavyUseTaxFormParts2And3() {
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

  // Find all active vehicle record blocks generated inside the fleet ledger container
  const container = document.getElementById('hut_fleet_container');
  if (!container) return isValid;

  const cards = container.getElementsByClassName('member-record-card');

  for (let i = 0; i < cards.length; i++) {
    const cardId = cards[i].id;
    const index = cardId.replace('hut_vehicle_card_', '');

    // 1. Validate VIN Format (17 alphanumeric digits; characters I, O, Q are invalid in modern VINs)
    const vinField = document.getElementById(`hut_vin_${index}`);
    const vinErr = document.getElementById(`err_hut_vin_${index}`);
    
    if (vinField && vinErr) {
      const sanitizedVin = vinField.value.trim().toUpperCase();
      const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

      if (!sanitizedVin) {
        markInvalid(vinField, vinErr, "Vehicle Identification Number (VIN) is required.");
      } else if (sanitizedVin.length !== 17) {
        markInvalid(vinField, vinErr, `VIN must be exactly 17 characters (Current length: ${sanitizedVin.length}).`);
      } else if (!vinRegex.test(sanitizedVin)) {
        markInvalid(vinField, vinErr, "Invalid VIN. Form 2290 parameters prohibit characters 'I', 'O', and 'Q'.");
      } else {
        markValid(vinField, vinErr);
        vinField.value = sanitizedVin; // Force uppercase formatting
      }
    }

    // 2. Validate Weight Category Selection
    const weightField = document.getElementById(`hut_weight_category_${index}`);
    const weightErr = document.getElementById(`err_hut_weight_category_${index}`);
    if (weightField && weightErr) {
      if (!weightField.value) {
        markInvalid(weightField, weightErr, "Please select a taxable gross weight class.");
      } else {
        markValid(weightField, weightErr);
      }
    }

    // 3. Validate Logging Flag Choice
    const loggingField = document.getElementById(`hut_is_logging_${index}`);
    const loggingErr = document.getElementById(`err_hut_is_logging_${index}`);
    if (loggingField && loggingErr) {
      if (!loggingField.value) {
        markInvalid(loggingField, loggingErr, "Please specify logging designation status.");
      } else {
        markValid(loggingField, loggingErr);
      }
    }
  }

  // 4. Validate low-mileage tax suspension dropdown selection
  const suspensionField = document.getElementById('hut_suspension_choice');
  const suspensionErr = document.getElementById('err_hut_suspension_choice');
  if (!suspensionField || !suspensionField.value) {
    markInvalid(suspensionField, suspensionErr, "Please specify low-mileage tax suspension status.");
  } else {
    markValid(suspensionField, suspensionErr);
  }

  return isValid;
}

// FAMILY 20A: HEAVY USE TAX (2290) LAYOUT MATRIX (PART 2 OF 3)
function buildHeavyUseTaxFormPart2(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 3: DYNAMIC FLEET ALLOCATION LEDGER -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Fleet Configuration & Vehicle Identification Matrix</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State your primary commercial vehicle fleet parameters below. IRS tax indices apply per class weight brackets.</p>
 </div>

 <div id="hut_fleet_container" style="grid-column: span 2; display: flex; flex-direction: column; gap: 16px; width: 100%;">
   <!-- Initial Fleet Unit Entry Card Structure -->
   <div class="member-record-card" id="hut_vehicle_card_1" data-row-index="1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 2fr 1fr; gap: 16px;">
     <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 3;">Heavy Vehicle Asset Unit #1</span>
     
     <!-- FIELD 1: VIN NUMBER -->
     <div class="wizard-input-group" style="margin: 0;">
       <label for="hut_vin_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Vehicle Identification Number (VIN) <span style="color: #ef4444;">*</span></label>
       <input type="text" id="hut_vin_1" required placeholder="17-Digit Alpha-Numeric VIN" maxlength="17" style="font-family: monospace; text-transform: uppercase; width: 100%; box-sizing: border-box;" class="wizard-input-field">
       <div class="wizard-error-message" id="err_hut_vin_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>

     <!-- FIELD 2: WEIGHT CLASS CATEGORY -->
     <div class="wizard-input-group" style="margin: 0;">
       <label for="hut_weight_category_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Taxable Gross Weight Class <span style="color: #ef4444;">*</span></label>
       <select id="hut_weight_category_1" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
         <option value="A" selected>Category A: 55,000 to 55,999 lbs</option>
         <option value="B">Category B: 56,000 to 56,999 lbs</option> <option value="C">Category C: 57,000 to 57,999 lbs</option>
         <option value="D">Category D: 58,000 to 58,999 lbs</option> <option value="E">Category E: 59,000 to 59,999 lbs</option>
         <option value="F">Category F: 60,000 to 60,999 lbs</option> <option value="G">Category G: 61,000 to 61,999 lbs</option>
         <option value="H">Category H: 62,000 to 62,999 lbs</option> <option value="I">Category I: 63,000 to 63,999 lbs</option>
         <option value="J">Category J: 64,000 to 64,999 lbs</option> <option value="K">Category K: 65,000 to 65,999 lbs</option>
         <option value="L">Category L: 66,000 to 66,999 lbs</option> <option value="M">Category M: 67,000 to 67,999 lbs</option>
         <option value="N">Category N: 68,000 to 68,999 lbs</option> <option value="O">Category O: 69,000 to 69,999 lbs</option>
         <option value="P">Category P: 70,000 to 70,999 lbs</option> <option value="Q">Category Q: 71,000 to 71,999 lbs</option>
         <option value="R">Category R: 72,000 to 72,999 lbs</option> <option value="S">Category S: 73,000 to 73,999 lbs</option>
         <option value="T">Category T: 74,000 to 74,999 lbs</option> <option value="U">Category U: 75,000 lbs up to logging weight</option>
         <option value="V">Category V: Over 75,000 lbs (Max Tax Bracket Rate)</option>
       </select>
       <div class="wizard-error-message" id="err_hut_weight_category_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>

     <!-- FIELD 3: LOGGING ASSIGNMENT FLAG -->
     <div class="wizard-input-group" style="margin: 0;">
       <label for="hut_is_logging_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Logging Vehicle? <span style="color: #ef4444;">*</span></label>
       <select id="hut_is_logging_1" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
         <option value="no" selected>No</option>
         <option value="yes">Yes</option>
       </select>
       <div class="wizard-error-message" id="err_hut_is_logging_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
   </div>
 </div>

 <div style="grid-column: span 2; margin-top: 4px;">
   <button type="button" onclick="appendNewHeavyUseTaxVehicleRow()" style="background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: fit-content;">
     <i class="fa-solid fa-plus"></i> Add Additional Fleet Asset Unit
   </button>
 </div>

 <!-- SECTION 4: MILEAGE TAX SUSPENSION DISCLOSURES -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Statement of Mileage Tax Suspension</h3>
 </div>

 <!-- FIELD 4: SUSPENSION STATUS SELECTION -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="hut_suspension_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Are you claiming a low-mileage tax suspension? <span style="color: #ef4444;">*</span></label>
   <select id="hut_suspension_choice" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="no" selected>No, standard vehicle usage metrics apply (Exceeds 5,000 commercial miles or 7,500 agricultural miles)</option>
     <option value="yes">Yes, I certify this fleet unit will operate under 5,000 miles (7,500 for agricultural use) to request tax exemption suspension status</option>
   </select>
   <div class="wizard-error-message" id="err_hut_suspension_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

// FAMILY 20A: HEAVY USE TAX (2290) LAYOUT MATRIX (PART 3 OF 3)
function buildHeavyUseTaxFormPart3(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Disclosure</h3>
 </div>

 <!-- FIELD 1: OPTIONAL ADDITIONAL TEXTAREA -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="hut_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Fleet Instructions or Exemption Disclosures</label>
   <textarea id="hut_provisions" placeholder="Detail any agricultural classification variables, vehicle exchange credits, prior year statement adjustments, or custom processing notes relevant to your Form 2290 filing profile..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// 📦 MASTER HEAVY USE TAX (2290) APPLICATION ASSEMBLY HOOK
function buildHeavyUseTaxForm(stateDropdownOptionsHtml = "") {
 return buildHeavyUseTaxFormPart1(stateDropdownOptionsHtml) + 
        buildHeavyUseTaxFormPart2(stateDropdownOptionsHtml) + 
        buildHeavyUseTaxFormPart3(stateDropdownOptionsHtml);
}

/**
 * Scans all field parameters inside the Heavy Use Tax (2290) Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireHeavyUseTaxWizard() {
  const isPart1Valid = typeof validateHeavyUseTaxFormPart1 === 'function' ? validateHeavyUseTaxFormPart1() : true;
  const isPart23Valid = validateHeavyUseTaxFormParts2And3();

  return (isPart1Valid && isPart23Valid);
}
