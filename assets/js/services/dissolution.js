// ============================================================================ //
// 🛠️ ENTITY DISSOLUTION APPLICATION VALIDATION MATRIX ENGINE (PART 1 OF 5)
// ============================================================================ //
const entityDissolutionPart1Validation = {
  requiredFields: [
    { id: 'dis_entity_name', msg: 'Name of Entity is required.' },
    { id: 'dis_entity_type', msg: 'Please select an Entity Type.' },
    { id: 'dis_state_of_formation', msg: 'State of Incorporation/Formation selection is required.' },
    { id: 'dis_business_street', msg: 'Business Address Street is required.' },
    { id: 'dis_business_city', msg: 'Business Address City is required.' },
    { id: 'dis_business_state', msg: 'Business Address State selection is required.' },
    { id: 'dis_business_zip', msg: 'Business Address Zip Code is required.' }
  ],

  validateStep: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process standard baseline elements presence checks
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Validate Baseline Location ZIP Formatting
    const zipEl = document.getElementById("dis_business_zip");
    if (zipEl && zipEl.value.trim() && !/^\d{5}$/.test(zipEl.value.trim())) {
      setError(zipEl, 'Business Address Zip Code must consist of exactly 5 numbers.');
    }

    // 3. Conditional Check: Validate Custom Entity text line if selector is set to OTHER
    const typeChoice = document.getElementById("dis_entity_type");
    if (typeChoice && typeChoice.value === "other") {
      const otherTextEl = document.getElementById("dis_structure_other_text");
      if (otherTextEl && !otherTextEl.value.trim()) {
        setError(otherTextEl, "Please specify your unique entity structure formatting.");
      } else if (otherTextEl) {
        clearError(otherTextEl);
      }
    }

    return { isValid, errors };
  }
};

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 1 OF 5)
function buildEntityDissolutionPart1(stateDropdownOptionsHtml = "") {
  return `
    <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS AN ENTITY DISSOLUTION? -->
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Corporate Dissolution &amp; Winding Up Standards</strong> An Entity Dissolution is the formal, statutory process required to legally terminate a business entity's operational existence with the state registry. Filing Articles of Dissolution limits ongoing corporate tax liabilities, cuts off future operational fees, and initiates the formal winding-up period to safely settle creditor claims and distribute residual assets.
    </div>

    <!-- SECTION 1: ENTITY INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Entity Information</h3>
    </div>
    
    <!-- REPAIRED SYSTEM INPUT DATA NODE -->
    <div class="wizard-input-group" style="grid-column: span 1;">
      Name of Entity <span style="color: #ef4444;">*</span></label>
      
    </div>
    
    <!-- REPAIRED SYSTEM SELECT NODE CONTAINER -->
    <div class="wizard-input-group" style="grid-column: span 1;">
      Entity Type <span style="color: #ef4444;">*</span></label>
      
        <option value="" disabled selected>Select Entity Type...</option>
        <option value="corporation">Corporation (Inc. / Corp.)</option>
        <option value="llc">Limited Liability Company (LLC)</option>
        <option value="partnership">Partnership (LP / LLP)</option>
        <option value="sole_proprietorship">Sole Proprietorship</option>
        <option value="other">Other Structure Suffix</option>
      </select>
    </div>
    
    <!-- Hidden Conditional Container: Other Entity Type Specification -->
    <div id="dis_structure_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="dis_structure_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify structure: <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dis_structure_other_text" placeholder="e.g., Professional Association, Benefit Corporation, Non-Profit..." class="wizard-input-field">
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="dis_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Incorporation/Formation <span style="color: #ef4444;">*</span></label>
      <select id="dis_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
        <option value="" disabled selected>Select State...</option>
        ${stateDropdownOptionsHtml}
      </select>
    </div>
    
    <!-- REPAIRED CHARTER FILE REFERENCE LAYOUT TAGS -->
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="dis_charter_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing or Charter ID Number (If Known)</label>
      <input type="text" id="dis_charter_id" placeholder="State SOS Registry Identification Reference Number" class="wizard-input-field">
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dis_business_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dis_business_street" required placeholder="Street Address, Suite, Unit (No P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'dis_business')">
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
        <div>
          <label for="dis_business_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
          <input type="text" id="dis_business_city" required placeholder="City" class="wizard-input-field">
        </div>
        <div>
          <label for="dis_business_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
          <select id="dis_business_state" required class="wizard-input-field" style="font-weight: 600;">
            ${stateDropdownOptionsHtml}
          </select>
        </div>
        <div>
          <label for="dis_business_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
          <input type="text" id="dis_business_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
        </div>
      </div>
    </div>
  `;
}

// Register layout functions straight onto global scope routing targets
if (!window.formRegistry) window.formRegistry = {};
window.formRegistry['dissolution-part1-layout'] = buildEntityDissolutionPart1;
window.formRegistry['dissolution-part1-validation'] = entityDissolutionPart1Validation;

// ============================================================================ //
// 🛠️ ENTITY DISSOLUTION APPLICATION VALIDATION MATRIX ENGINE (PARTS 2 - 5)
// ============================================================================ //
const entityDissolutionRemainingValidation = {
  requiredFields: [
    { id: 'dis_contact_name', msg: 'Contact Person Name is required.' },
    { id: 'dis_contact_phone', msg: 'Contact Phone Number is required.' },
    { id: 'dis_contact_email', msg: 'Contact Email Address is required.' },
    { id: 'dis_date_of_effective', msg: 'Date of Dissolution is required.' },
    { id: 'dis_final_tax_year', msg: 'Final Tax Year is required.' },
    { id: 'dis_asset_dist_choice', msg: 'Asset Distribution choice option is required.' },
    { id: 'dis_debts_choice', msg: 'Outstanding Debts and Obligations choice option is required.' }
  ],

  validateStep: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process standard mandatory fields presence checks
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Validate Contact Email Layout String Formatting
    const emailEl = document.getElementById("dis_contact_email");
    if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
      setError(emailEl, "Please provide a valid contact email address.");
    }

    // 3. Validate Phone Number Baseline Digits Length
    const phoneEl = document.getElementById("dis_contact_phone");
    if (phoneEl && phoneEl.value.trim()) {
      const pureDigits = phoneEl.value.replace(/\D/g, "");
      if (pureDigits.length < 10) setError(phoneEl, "Contact Phone Number must contain at least 10 numbers.");
    }

    // 4. Validate Tax Year Range
    const taxYearEl = document.getElementById("dis_final_tax_year");
    if (taxYearEl && taxYearEl.value.trim()) {
      const taxYearInt = parseInt(taxYearEl.value, 10);
      if (isNaN(taxYearInt) || taxYearInt < 1900 || taxYearInt > 2100) {
        setError(taxYearEl, "Final Tax Year must be a valid year between 1900 and 2100.");
      }
    }

    // 5. Validate Checkbox Group: Verify at least one dissolution reason is chosen
    let baselineReasonChecked = false;
    for (let i = 1; i <= 3; i++) {
      const reasonBox = document.getElementById(`dis_reason_${i}`);
      if (reasonBox && reasonBox.checked) {
        baselineReasonChecked = true;
        break;
      }
    }
    if (!baselineReasonChecked) {
      isValid = false;
      errors.push("Please select at least one reason for winding up and dissolving this entity.");
    }

    // 6. Conditional Check: Validate custom reason text box if checkbox #3 is active
    const otherReasonBox = document.getElementById("dis_reason_3");
    if (otherReasonBox && otherReasonBox.checked) {
      const customTextEl = document.getElementById("dis_reason_other_text");
      if (customTextEl && !customTextEl.value.trim()) {
        setError(customTextEl, "Please specify your unique reasons for dissolution.");
      } else if (customTextEl) {
        clearError(customTextEl);
      }
    }

    // 7. Conditional Check: Validate Asset Distribution details box if choice is YES
    const assetChoice = document.getElementById("dis_asset_dist_choice");
    if (assetChoice && assetChoice.value === "yes") {
      const assetDetails = document.getElementById("dis_asset_dist_details");
      if (assetDetails && !assetDetails.value.trim()) {
        setError(assetDetails, "Please provide asset distribution profile details.");
      } else if (assetDetails) {
        clearError(assetDetails);
      }
    }

    // 8. Conditional Check: Validate Debt Settlement details box if choice is YES
    const debtChoice = document.getElementById("dis_debts_choice");
    if (debtChoice && debtChoice.value === "yes") {
      const debtDetails = document.getElementById("dis_debts_details");
      if (debtDetails && !debtDetails.value.trim()) {
        setError(debtDetails, "Please provide debt settlement breakdown details.");
      } else if (debtDetails) {
        clearError(debtDetails);
      }
    }

    return { isValid, errors };
  }
};

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 2 OF 5)
function buildEntityDissolutionPart2(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 2: CONTACT INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contact Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dis_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dis_contact_name" required placeholder="Full name of corporate officer or legal contact handling dissolution" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="dis_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number <span style="color: #ef4444;">*</span></label>
      <input type="tel" id="dis_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="dis_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address <span style="color: #ef4444;">*</span></label>
      <input type="email" id="dis_contact_email" required placeholder="email@example.com" class="wizard-input-field">
    </div>

    <!-- SECTION 3: REASON FOR DISSOLUTION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Reason for Dissolution</h3>
      <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select the primary reasons for winding up and dissolving this entity (Check all that apply):</p>
    </div>
    <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <input type="checkbox" id="dis_reason_1" value="voluntary" style="margin-top: 3px;">
        <label for="dis_reason_1" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Voluntary dissolution (Approved by members/shareholders)</label>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <input type="checkbox" id="dis_reason_2" value="involuntary" style="margin-top: 3px;">
        <label for="dis_reason_2" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Involuntary dissolution (Court order or operational cessation)</label>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px; grid-column: span 2;">
        <input type="checkbox" id="dis_reason_3" value="other" style="margin-top: 3px;" onchange="toggleDissolutionReasonSpecificationVisibility(this.checked)">
        <label for="dis_reason_3" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Other corporate parameters (Specify below)</label>
      </div>
    </div>

    <!-- Hidden Conditional Container: Other Reason Specification -->
    <div id="dis_reason_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; margin-top: 8px;">
      <label for="dis_reason_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify reason: <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dis_reason_other_text" placeholder="e.g., Business merger, corporate restructuring, retirement of principals..." class="wizard-input-field">
    </div>
  `;
}
window.buildEntityDissolutionPart2 = buildEntityDissolutionPart2;

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 3 OF 5)
function buildEntityDissolutionPart3(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 4: DISSOLUTION DETAILS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Dissolution Details</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="dis_date_of_effective" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date of Dissolution <span style="color: #ef4444;">*</span></label>
      <input type="date" id="dis_date_of_effective" required class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="dis_final_tax_year" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Final Tax Year (if applicable) <span style="color: #ef4444;">*</span></label>
      <input type="number" id="dis_final_tax_year" required placeholder="2026" min="1900" max="2100" class="wizard-input-field">
    </div>
  `;
}
window.buildEntityDissolutionPart3 = buildEntityDissolutionPart3;

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 4 OF 5)
function buildEntityDissolutionPart4(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 5: ASSET DISTRIBUTION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Asset Distribution Profile</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dis_asset_dist_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be distributing any assets? <span style="color: #ef4444;">*</span></label>
      <select id="dis_asset_dist_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDissolutionAssetDistributionVisibility(this.value)">
        <option value="no" selected>No asset distribution actions are pending or required</option>
        <option value="yes">Yes, assets will be distributed to members / shareholders</option>
      </select>
    </div>

    <!-- Hidden Conditional Container: Asset Distribution Details Entry -->
    <div id="dis_asset_dist_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="dis_asset_dist_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please provide asset distribution details: <span style="color: #ef4444;">*</span></label>
      <textarea id="dis_asset_dist_details" placeholder="Describe how cash balances, real property, equipment, or inventory allocations are being cleared and transferred..." class="wizard-input-field" style="width: 100%; min-height: 70px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
    </div>
  `;
}
window.buildEntityDissolutionPart4 = buildEntityDissolutionPart4;

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 5 OF 5)
function buildEntityDissolutionPart5(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 6: OUTSTANDING DEBTS AND OBLIGATIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Outstanding Debts and Obligations</h3>
      <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State regulatory offices mandate that all corporate creditors must be accounted for or cleared before total closure approval.</p>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dis_debts_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Are there any outstanding debts or obligations? <span style="color: #ef4444;">*</span></label>
      <select id="dis_debts_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDissolutionDebtsVisibility(this.value)">
        <option value="no" selected>No, all liabilities, creditor bills, and operational debts are settled</option>
        <option value="yes">Yes, outstanding debts or structural corporate liabilities remain</option>
      </select>
    </div>

    <!-- Hidden Conditional Container: Outstanding Debts Details Entry -->
    <div id="dis_debts_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="dis_debts_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please provide debt settlement details: <span style="color: #ef4444;">*</span></label>
      <textarea id="dis_debts_details" placeholder="Detail active corporate loans, pending trade credit structures, or winding-up payment reserve allocations..." class="wizard-input-field" style="width: 100%; min-height: 70px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
    </div>
  `;
}
window.buildEntityDissolutionPart5 = buildEntityDissolutionPart5;

// 📦 MASTER ENTITY DISSOLUTION ASSEMBLY HOOK
function buildEntityDissolutionForm(stateDropdownOptionsHtml = "") {
  return buildEntityDissolutionPart1(stateDropdownOptionsHtml) + 
buildEntityDissolutionPart2(stateDropdownOptionsHtml) +buildEntityDissolutionPart3(stateDropdownOptionsHtml) +
buildEntityDissolutionPart4(stateDropdownOptionsHtml) +buildEntityDissolutionPart5(stateDropdownOptionsHtml);}
// Global registry setup matrix tracking allocation routes

if (!window.formRegistry) window.formRegistry = {};
window.formRegistry['dissolution-part2-layout'] = buildEntityDissolutionPart2;
window.formRegistry['dissolution-part3-layout'] = buildEntityDissolutionPart3;
window.formRegistry['dissolution-part4-layout'] = buildEntityDissolutionPart4;
window.formRegistry['dissolution-part5-layout'] = buildEntityDissolutionPart5;
window.formRegistry['dissolution-remaining-validation'] = entityDissolutionRemainingValidation;
window.formRegistry['dissolution-form-master'] = buildEntityDissolutionForm;

// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS (ENTITY DISSOLUTIONS)
// ============================================================================ //

window.toggleDissolutionStructureSpecificationVisibility = function(value) {
  const otherWrapper = document.getElementById("dis_structure_other_wrapper");
  const otherInput = document.getElementById("dis_structure_other_text");
  if (!otherWrapper) return;

  if (value === "other") {
    otherWrapper.style.setProperty("display", "block", "important");
    if (otherInput) otherInput.setAttribute("required", "required");
  } else {
    otherWrapper.style.setProperty("display", "none", "important");
    if (otherInput) { otherInput.removeAttribute("required"); otherInput.value = ""; }
  }
};

window.toggleDissolutionReasonSpecificationVisibility = function(isChecked) {
  const otherReasonWrapper = document.getElementById("dis_reason_other_wrapper");
  const otherReasonInput = document.getElementById("dis_reason_other_text");
  if (!otherReasonWrapper) return;

  if (isChecked) {
    otherReasonWrapper.style.setProperty("display", "block", "important");
    if (otherReasonInput) otherReasonInput.setAttribute("required", "required");
  } else {
    otherReasonWrapper.style.setProperty("display", "none", "important");
    if (otherReasonInput) { otherReasonInput.removeAttribute("required"); otherReasonInput.value = ""; }
  }
};

window.toggleDissolutionAssetDistributionVisibility = function(value) {
  const assetWrapper = document.getElementById("dis_asset_dist_wrapper");
  const assetInput = document.getElementById("dis_asset_dist_details");
  if (!assetWrapper) return;

  if (value === "yes") {
    assetWrapper.style.setProperty("display", "block", "important");
    if (assetInput) assetInput.setAttribute("required", "required");
  } else {
    assetWrapper.style.setProperty("display", "none", "important");
    if (assetInput) { assetInput.removeAttribute("required"); assetInput.value = ""; }
  }
};

window.toggleDissolutionDebtsVisibility = function(value) {
  const debtsWrapper = document.getElementById("dis_debts_wrapper");
  const debtsInput = document.getElementById("dis_debts_details");
  if (!debtsWrapper) return;

  if (value === "yes") {
    debtsWrapper.style.setProperty("display", "block", "important");
    if (debtsInput) debtsInput.setAttribute("required", "required");
  } else {
    debtsWrapper.style.setProperty("display", "none", "important");
    if (debtsInput) { debtsInput.removeAttribute("required"); debtsInput.value = ""; }
  }
};