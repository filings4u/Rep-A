// ============================================================================ //
// 🛠️ FRANCHISE TAX FILING MODULE VALIDATION MATRIX ENGINE (PARTS 1 & 2)          //
// ============================================================================ //
function initFranchiseTaxService() {
  // Global wizard registries allocation
  window.formRegistry = window.formRegistry || {};

  const part1Fields = [
    { id: 'fran_tax_state', msg: 'Filing Jurisdiction State selection is required.' },
    { id: 'fran_tax_charter_num', msg: 'State Entity Filing / Charter Number is required.' },
    { id: 'fran_tax_legal_name', msg: 'Official Business Name is required.' }
  ];

  window.formRegistry['franchise-tax-part1-validation'] = {
    requiredFields: part1Fields,
    validate: function() {
      let isValid = true;
      let errors = [];

      const setError = (el, msg) => {
        if (!el) return;
        isValid = false;
        el.style.setProperty("border-color", "#ef4444", "important");
        if (!errors.includes(msg)) errors.push(msg);
        
        const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
        if (errorMsgNode) {
          errorMsgNode.textContent = msg;
          errorMsgNode.style.setProperty("display", "block", "important");
        }
      };

      const clearError = (el) => {
        if (!el) return;
        el.style.removeProperty("border-color");
        
        const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
        if (errorMsgNode) {
          errorMsgNode.style.setProperty("display", "none", "important");
          errorMsgNode.textContent = "";
        }
      };

      // 1. Process mandatory target fields securely
      part1Fields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
          const val = el.value ? String(el.value).trim() : "";
          if (!val) setError(el, field.msg);
          else clearError(el);
        }
      });

      return { isValid, errors };
    }
  };

  const part2Fields = [
    { id: 'fran_tax_method_type', msg: 'Filing Category Basis selection is required.' }
  ];

  window.formRegistry['franchise-tax-part2-validation'] = {
    requiredFields: part2Fields,
    validate: function() {
      let isValid = true;
      let errors = [];

      const setError = (el, msg) => {
        if (!el) return;
        isValid = false;
        el.style.setProperty("border-color", "#ef4444", "important");
        if (!errors.includes(msg)) errors.push(msg);
        
        const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
        if (errorMsgNode) {
          errorMsgNode.textContent = msg;
          errorMsgNode.style.setProperty("display", "block", "important");
        }
      };

      const clearError = (el) => {
        if (!el) return;
        el.style.removeProperty("border-color");
        
        const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
        if (errorMsgNode) {
          errorMsgNode.style.setProperty("display", "none", "important");
          errorMsgNode.textContent = "";
        }
      };

      // 1. Process standard layout validation fields
      part2Fields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
          const val = el.value ? String(el.value).trim() : "";
          if (!val) setError(el, field.msg);
          else clearError(el);
        }
      });

      // 2. Conditional Check: Validate Capitalization Assets if method matches margin-or-stock
      const methodChoice = document.getElementById("fran_tax_method_type");
      if (methodChoice && methodChoice.value === "margin-or-stock" && (methodChoice.offsetWidth > 0 || methodChoice.offsetHeight > 0)) {
        
        const assetEl = document.getElementById("fran_tax_total_assets");
        if (assetEl) {
          const assetVal = assetEl.value ? String(assetEl.value).trim() : "";
          if (!assetVal) {
            setError(assetEl, "Total Gross Business Assets calculation is required under asset share basis filings.");
          } else {
            const parsedAsset = parseFloat(assetVal);
            if (isNaN(parsedAsset) || parsedAsset < 0) {
              setError(assetEl, "Total Gross Business Assets cannot be a negative value.");
            } else {
              clearError(assetEl);
            }
          }
        }

        const sharesEl = document.getElementById("fran_tax_issued_shares");
        if (sharesEl) {
          const sharesVal = sharesEl.value ? String(sharesEl.value).trim() : "";
          if (sharesVal) {
            const parsedShares = parseInt(sharesVal, 10);
            if (isNaN(parsedShares) || parsedShares < 0) {
              setError(sharesEl, "Total Authorized / Issued Shares cannot be a negative number.");
            } else {
              clearError(sharesEl);
            }
          } else {
            clearError(sharesEl);
          }
        }
      }

      return { isValid, errors };
    }
  };
}


// ============================================================================ //
// 🛠️ FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 1 OF 3)                //
// ============================================================================ //

function buildFranchiseTaxFilingFormPart1(stateDropdownOptionsHtml = "") {
  return `
    <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: FRANCHISE TAX FILING -->
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Franchise Tax &amp; Information Reporting Compliance</strong>
      Franchise tax is a fee charged by states for the privilege of incorporating or doing business within their borders. Unlike income tax, it is often calculated based on capital stock values, gross margins, or flat baseline minimums, and frequently mandates the simultaneously filed execution of a Public Information Report (PIR) to sustain entity standing.
    </div>
    
    <!-- SECTION 1: FRANCHISE JURISDICTION PROFILE -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Franchise Jurisdiction Profile</h3>
    </div>
    
    <!-- GRID CONTAINER ROW: FORCES FILING JURISDICTION STATE AND CHARTER ID SIDE-BY-SIDE -->
    <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box; margin-top: 12px;">
      
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_tax_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">Filing Jurisdiction State <span style="color: #ef4444;">*</span></label>
        <select id="fran_tax_state" required class="wizard-input-field" style="font-weight: 600; width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;" onchange="executeFranchiseTaxStateParsingWorkflow(this.value)">
          <option value="" disabled selected>Select State...</option>
          ${stateDropdownOptionsHtml}
        </select>
        <div class="wizard-error-message" id="err_fran_tax_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_tax_charter_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">State Entity Filing/Charter Number <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fran_tax_charter_num" required placeholder="Enter State Charter / Filing ID" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
        <div class="wizard-error-message" id="err_fran_tax_charter_num" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
    </div>
    
    <!-- FULL-WIDTH SEC_STATE REGISTRATION COMPANY TITLE INPUT FIELD -->
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 16px;">
      <label for="fran_tax_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">Official Business Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="fran_tax_legal_name" required placeholder="Enter legal company name exactly as registered with the Secretary of State" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
      <div class="wizard-error-message" id="err_fran_tax_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
  `;
}

// Bind full layout securely to global window namespaces
window.buildFranchiseTaxFilingFormPart1 = buildFranchiseTaxFilingFormPart1;


// ============================================================================ //
// 🛠️ FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 2 OF 5)                //
// ============================================================================ //

function buildFranchiseTaxFilingFormPart2(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 2: FILING METHOD & THRESHOLD STATE LOGIC -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. State Threshold Selection</h3>
      <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Filing options adapt to your target state. Select your structural allocation threshold framework:</p>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px;">
      <label for="fran_tax_method_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">Filing Category Basis <span style="color: #ef4444;">*</span></label>
      <select id="fran_tax_method_type" required class="wizard-input-field" style="font-weight: 600; width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;" onchange="toggleFranchiseTaxThresholdInputFieldsVisibility(this.value)">
        <option value="flat" selected>Fixed Minimum / Flat Fee Filing Matrix (e.g. Delaware baseline or low-revenue entities)</option>
        <option value="informational">No-Tax Threshold Declaration (e.g. Texas Public Information Report with zero balance liability)</option>
        <option value="margin-or-stock">Calculated Margin / Asset Share Basis (Requires explicit asset capitalization numbers)</option>
      </select>
      <div class="wizard-error-message" id="err_fran_tax_method_type" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <!-- Dynamic Threshold System Notification Banner -->
    <div id="fran_tax_state_notification_banner" style="grid-column: span 2; display: none; background: #fffbeb; border: 1px solid #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 6px; box-sizing: border-box; margin-top: 12px;">
      <p id="fran_tax_state_banner_text" style="color: #b45309; font-size: 0.8rem; margin: 0; font-weight: 600; line-height: 1.4;"></p>
    </div>
    
    <!-- SECTION 3: ASSET & CAPITALIZATION PARAMETERS (CONDITIONAL ROW MATRIX) -->
    <div id="fran_tax_calculation_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px; margin-top: 16px;">
      <div style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Asset Capitalization Profile</h3>
      </div>
      
      <!-- SUB-GRID SYSTEM TO FORCE ASSETS & SHARES SIDE-BY-SIDE -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
        
        <div class="wizard-input-group" style="margin: 0;">
          <label for="fran_tax_total_assets" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Total Gross Business Assets ($) <span style="color: #ef4444;">*</span></label>
          <input type="number" id="fran_tax_total_assets" placeholder="0.00" min="0" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
          <div class="wizard-error-message" id="err_fran_tax_total_assets" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="wizard-input-group" style="margin: 0;">
          <label for="fran_tax_issued_shares" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Total Authorized / Issued Shares (Corporations Only)</label>
          <input type="number" id="fran_tax_issued_shares" placeholder="e.g. 1500" min="0" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
          <div class="wizard-error-message" id="err_fran_tax_issued_shares" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
      </div>
    </div>
  `;
}

// Map parameters out to global registry matrix window object layers
if (!window.formRegistry) {
  window.formRegistry = {};
}

window.formRegistry['franchise-tax-part1-layout'] = window.buildFranchiseTaxFilingFormPart1;
window.formRegistry['franchise-tax-part1-validation'] = window.franchiseTaxPart1Validation;
window.formRegistry['franchise-tax-part2-layout'] = buildFranchiseTaxFilingFormPart2;
window.formRegistry['franchise-tax-part2-validation'] = window.franchiseTaxPart2Validation;


// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS (FRANCHISE TAX FILINGS)               //
// ============================================================================ //

window.toggleFranchiseTaxThresholdInputFieldsVisibility = function(value) {
  const calculationWrapper = document.getElementById("fran_tax_calculation_wrapper");
  const assetInput = document.getElementById("fran_tax_total_assets");
  if (!calculationWrapper) return;
  
  if (value === "margin-or-stock") {
    // FIXED: Uses display: grid to force side-by-side submatrix layouts cleanly
    calculationWrapper.style.setProperty("display", "grid", "important");
    if (assetInput) {
      assetInput.setAttribute("required", "required");
    }
  } else {
    calculationWrapper.style.setProperty("display", "none", "important");
    if (assetInput) {
      assetInput.removeAttribute("required");
      assetInput.value = "";
    }
  }
};

window.executeFranchiseTaxStateParsingWorkflow = function(stateValue) {
  const bannerNode = document.getElementById("fran_tax_state_notification_banner");
  const bannerTextNode = document.getElementById("fran_tax_state_banner_text");
  if (!bannerNode || !bannerTextNode) return;
  
  const upperState = stateValue ? stateValue.toUpperCase() : "";
  
  // Dynamic localization response engine alerts customers on state calculation metrics
  if (upperState === "DE") {
    bannerNode.style.setProperty("display", "block", "important");
    bannerTextNode.innerHTML = "💡 <b>Delaware Notice:</b> Entities using Authorized Shares can alternate between the Minimum Recorded $175.00 Flat Method and the Assumed Par Value Capital Method during formal auditing.";
  } else if (upperState === "TX") {
    bannerNode.style.setProperty("display", "block", "important");
    bannerTextNode.innerHTML = "💡 <b>Texas Notice:</b> No Franchise Tax is due if total annualized revenue drops below the statutory threshold limit, but a Public Information Report (PIR) remains mandatory.";
  } else {
    bannerNode.style.setProperty("display", "none", "important");
    bannerTextNode.innerText = "";
  }
};

/**
 * Validates dynamic recurring officer blocks inside step 3
 */
window.validateFranchiseTaxFormPart3 = function() {
  let isValid = true;
  
  const markInvalid = (inputEl, errorEl, msg) => {
    if (!inputEl || !errorEl) return;
    errorEl.textContent = msg;
    errorEl.style.setProperty("display", "block", "important");
    inputEl.style.setProperty("border", "1px solid #ef4444", "important");
    isValid = false;
  };

  const markValid = (inputEl, errorEl) => {
    if (!inputEl || !errorEl) return;
    errorEl.style.setProperty("display", "none", "important");
    inputEl.style.removeProperty("border");
  };

  // Find all officer cards generated inside the registry container
  const container = document.getElementById('fran_officer_container');
  if (!container) return isValid;
  
  const cards = container.getElementsByClassName('member-record-card');
  
  for (let i = 0; i < cards.length; i++) {
    const cardId = cards[i].id;
    if (!cardId) continue;
    
    // Extract the unique index number from the ID elements safely
    const index = cardId.replace('fran_officer_card_', '');
    
    // 1. Validate Officer Name
    const nameField = document.getElementById(`fran_officer_name_${index}`);
    const nameErr = document.getElementById(`err_fran_officer_name_${index}`);
    if (nameField && nameErr) {
      if (!nameField.value.trim()) {
        markInvalid(nameField, nameErr, "Full legal name is required.");
      } else {
        markValid(nameField, nameErr);
      }
    }
    
    // 2. Validate Officer Title
    const titleField = document.getElementById(`fran_officer_title_${index}`);
    const titleErr = document.getElementById(`err_fran_officer_title_${index}`);
    if (titleField && titleErr) {
      if (!titleField.value) {
        markInvalid(titleField, titleErr, "Please select an official title.");
      } else {
        markValid(titleField, titleErr);
      }
    }
    
    // 3. Validate Officer Street Address
    const streetField = document.getElementById(`fran_officer_street_${index}`);
    const streetErr = document.getElementById(`err_fran_officer_street_${index}`);
    if (streetField && streetErr) {
      if (!streetField.value.trim()) {
        markInvalid(streetField, streetErr, "Mailing address is required.");
      } else {
        markValid(streetField, streetErr);
      }
    }
  }
  
  return isValid;
};


// ============================================================================ //
// 🛠️ FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 3 OF 5)                //
// ============================================================================ //

function buildFranchiseTaxFilingFormPart3(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 4: PUBLIC INFORMATION REPORT OFFICER REGISTRY -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Public Information Report Officer Registry</h3>
      <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State compliance offices require updated records of active officers, directors, managers, or managing members.</p>
    </div>
    
    <div id="fran_officer_container" style="grid-column: span 2; display: flex; flex-direction: column; gap: 16px; width: 100%;">
      <!-- Initial Principal Officer Dynamic Card Block -->
      <div class="member-record-card" id="fran_officer_card_1" data-row-index="1" style="background: #ffffff; border: 1px solid var(--border, #cbd5e1); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Principal Officer / Manager #1</span>
        
        <!-- OFFICER NAME -->
        <div class="wizard-input-group" style="margin: 0;">
          <label for="fran_officer_name_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
          <input type="text" id="fran_officer_name_1" required placeholder="First and Last Legal Name" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
          <div class="wizard-error-message" id="err_fran_officer_name_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
        <!-- OFFICER TITLE -->
        <div class="wizard-input-group" style="margin: 0;">
          <label for="fran_officer_title_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Official Corporate Title <span style="color: #ef4444;">*</span></label>
          <select id="fran_officer_title_1" required class="wizard-input-field" style="font-weight: 600; width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
            <option value="" disabled selected>Select Title...</option>
            <option value="President">President / CEO</option>
            <option value="Secretary">Secretary</option>
            <option value="Treasurer">Treasurer / CFO</option>
            <option value="Manager">Manager / Managing Member</option>
            <option value="Director">Director</option>
          </select>
          <div class="wizard-error-message" id="err_fran_officer_title_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
        <!-- MAILING ADDRESS -->
        <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
          <label for="fran_officer_street_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Mailing Address <span style="color: #ef4444;">*</span></label>
          <input type="text" id="fran_officer_street_1" required placeholder="Street Address, Suite, Apt" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fran_officer_addr_1')">
          <div class="wizard-error-message" id="err_fran_officer_street_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
      </div>
    </div>
    
    <div style="grid-column: span 2; margin-top: 12px;">
      <button type="button" onclick="appendNewFranchiseTaxOfficerRow()" style="background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: fit-content; outline: none; transition: background 0.2s;">
        <i class="fa-solid fa-plus"></i> Add Additional Officer / Member
      </button>
    </div>
  `;
}

// Bind function builder block safely to global scope layers
window.buildFranchiseTaxFilingFormPart3 = buildFranchiseTaxFilingFormPart3;

// ============================================================================ //
// 🛠️ FRANCHISE TAX FILING MODULE VALIDATION MATRIX ENGINE (PARTS 4 & 5)          //
// ============================================================================ //

/**
 * Validates file upload assets and documentation payloads for Parts 4 and 5
 */
window.validateFranchiseTaxFormParts4And5 = function() {
  let isValid = true;
  
  const markInvalid = (inputEl, errorEl, msg) => {
    if (!inputEl || !errorEl) return;
    errorEl.textContent = msg;
    errorEl.style.setProperty("display", "block", "important");
    inputEl.style.setProperty("border", "1px solid #ef4444", "important");
    isValid = false;
  };

  const markValid = (inputEl, errorEl) => {
    if (!inputEl || !errorEl) return;
    errorEl.style.setProperty("display", "none", "important");
    inputEl.style.removeProperty("border");
  };

  // 1. Process Required File Input Validation Matrix Check
  const fileField = document.getElementById('fran_file_ledger_summary');
  const fileErr = document.getElementById('err_fran_file_ledger_summary');
  
  if (fileField && fileErr && (fileField.offsetWidth > 0 || fileField.offsetHeight > 0)) {
    if (!fileField.files || fileField.files.length === 0) {
      markInvalid(fileField, fileErr, "Please upload your capital stock or gross margin ledger summary.");
    } else {
      markValid(fileField, fileErr);
    }
  }

  // Note: Parts 4 and 5 optional field configurations do not require strict validation rules.
  return isValid;
};


// ============================================================================ //
// 🛠️ FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 4 OF 5)                //
// ============================================================================ //

function buildFranchiseTaxFilingFormPart4(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 5: FRANCHISE DOCUMENTATION MATRIX -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Required Franchise Verification Packets</h3>
      <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Please attach your state margin summaries, asset balancing metrics, or capitalization ledgers below:</p>
    </div>
    
    <!-- FIXED: Wrapped upload elements in a local 2-column grid container to force side-by-side alignment -->
    <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box; margin-top: 12px;">
      
      <!-- FIELD 1: REQUIRED FILE UPLOAD -->
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_file_ledger_summary" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Capital Stock / Gross Margin Ledger Summary <span style="color: #ef4444;">*</span></label>
        <input type="file" id="fran_file_ledger_summary" required class="wizard-input-field" accept=".pdf,.xls,.xlsx,.csv,image/*" style="padding: 10px 12px; background: #ffffff; width: 100%; box-sizing: border-box; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; outline: none; font-weight: 600;">
        <div class="wizard-error-message" id="err_fran_file_ledger_summary" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <!-- FIELD 2: OPTIONAL FILE UPLOAD -->
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_file_prior_franchise" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Copy of Prior Franchise Tax Filing (If Applicable)</label>
        <input type="file" id="fran_file_prior_franchise" class="wizard-input-field" accept=".pdf,image/*" style="padding: 10px 12px; background: #ffffff; width: 100%; box-sizing: border-box; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; outline: none; font-weight: 600;">
      </div>
      
    </div>
  `;
}

// ============================================================================ //
// 🛠️ FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 5 OF 5)                //
// ============================================================================ //

function buildFranchiseTaxFilingFormPart5(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 6: ADDITIONAL PROVISIONS & DISCLOSURES -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special State Instructions & Disclosures</h3>
    </div>
    
    <!-- FIELD 1: OPTIONAL TEXTAREA -->
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px;">
      <label for="fran_tax_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">Special Franchise Filing Notes or Instructions</label>
      <textarea id="fran_tax_provisions" placeholder="Detail any tier modifications, specialized ownership structures, zero-sole-prop exemptions, or custom processing notes relevant to your state franchise profile..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; font-weight: 600; outline: none;"></textarea>
    </div>
  `;
}

// ============================================================================ //
// 📦 MASTER FRANCHISE TAX APPLICATION ASSEMBLY HOOK                            //
// ============================================================================ //

window.buildFranchiseTaxFilingForm = function(stateDropdownOptionsHtml = "") {
  const p1 = typeof window.buildFranchiseTaxFilingFormPart1 === "function" ? window.buildFranchiseTaxFilingFormPart1(stateDropdownOptionsHtml) : "";
  const p2 = typeof window.buildFranchiseTaxFilingFormPart2 === "function" ? window.buildFranchiseTaxFilingFormPart2(stateDropdownOptionsHtml) : "";
  const p3 = typeof window.buildFranchiseTaxFilingFormPart3 === "function" ? window.buildFranchiseTaxFilingFormPart3(stateDropdownOptionsHtml) : "";
  const p4 = buildFranchiseTaxFilingFormPart4(stateDropdownOptionsHtml);
  const p5 = buildFranchiseTaxFilingFormPart5(stateDropdownOptionsHtml);

  return `<div class="franchise-tax-wizard-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
    ${p1}
    ${p2}
    ${p3}
    ${p4}
    ${p5}
  </div>`;
};

/**
 * Executes a full sequence scan across all Franchise Tax Wizard field sets.
 * Adds red error formatting on invalid blocks and returns programmatic status.
 * @returns {boolean} Status signifying structural form validity.
 */
window.validateEntireFranchiseTaxWizard = function() {
  // Execute individual step calculations from registry mappings safely
  const isPart1Valid = typeof window.formRegistry?.['franchise-tax-part1-validation']?.validate === 'function' 
    ? window.formRegistry['franchise-tax-part1-validation'].validate().isValid 
    : true;
    
  const isPart2Valid = typeof window.formRegistry?.['franchise-tax-part2-validation']?.validate === 'function' 
    ? window.formRegistry['franchise-tax-part2-validation'].validate().isValid 
    : true;
    
  const isPart3Valid = typeof window.validateFranchiseTaxFormPart3 === 'function' 
    ? window.validateFranchiseTaxFormPart3() 
    : true;
    
  const isPart45Valid = typeof window.validateFranchiseTaxFormParts4And5 === 'function'
    ? window.validateFranchiseTaxFormParts4And5()
    : true;

  // Return absolute validity outcome
  return (isPart1Valid && isPart2Valid && isPart3Valid && isPart45Valid);
};

// Bind function segments securely to global window namespaces
window.buildFranchiseTaxFilingFormPart4 = buildFranchiseTaxFilingFormPart4;
window.buildFranchiseTaxFilingFormPart5 = buildFranchiseTaxFilingFormPart5;

// Secure master framework registry mappings configuration
window.formRegistry = window.formRegistry || {};
window.formRegistry['franchise-tax-form-master'] = function(stateDropdownOptionsHtml = "") {
  return window.buildFranchiseTaxFilingForm(stateDropdownOptionsHtml);
};
