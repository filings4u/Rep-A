// ============================================================================ //
// 🛠️ DOT PERMITS REGISTRATION SERVICE: RECONSTRUCTED PART 1 DIRECTORY ENGINE   //
// ============================================================================ //

function initDotPermitsService() {
  window.formRegistry = window.formRegistry || {};

  const permitBaseFields = [
    { id: 'prm_legal_name', msg: 'Official Carrier Legal Name is required.' },
    { id: 'prm_usdot_number', msg: 'A valid USDOT Number is mandatory for state permit cross-referencing.' },
    { id: 'prm_base_state', msg: 'Please specify your corporate home base state.' },
    { id: 'prm_vin_number', msg: '17-Character Transport Asset VIN is required.' }
  ];

  window.formRegistry['dot-permits-validation'] = {
    requiredFields: permitBaseFields,
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

      // 1. Process Profile Fields Verification
      permitBaseFields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
          const val = el.value ? String(el.value).trim() : "";
          if (!val) setError(el, field.msg);
          else clearError(el);
        }
      });

      // 2. Validate Alphanumeric VIN Character Boundaries
      const vinEl = document.getElementById("prm_vin_number");
      if (vinEl && (vinEl.offsetWidth > 0 || vinEl.offsetHeight > 0)) {
        const vinVal = vinEl.value ? String(vinEl.value).trim().toUpperCase() : "";
        if (vinVal && vinVal.length !== 17) {
          setError(vinEl, "VIN parameters must be exactly 17 characters long.");
        }
      }

      // 3. Scan Permit Checklist Matrix Rules
      let checkedPermitCount = 0;
      const checkedInputs = document.querySelectorAll('input[name="prm_type_selection"]:checked');
      checkedPermitCount = checkedInputs.length;

      const matrixErr = document.getElementById('err_prm_type_matrix');
      if (matrixErr && (matrixErr.parentElement?.offsetWidth > 0 || matrixErr.parentElement?.offsetHeight > 0)) {
        if (checkedPermitCount === 0) {
          isValid = false;
          errors.push("You must select at least 1 regulatory permit framework to enroll.");
          matrixErr.textContent = "Please declare at least 1 transit load permit classification.";
          matrixErr.style.setProperty("display", "block", "important");
        } else {
          matrixErr.style.setProperty("display", "none", "important");
        }
      }

      // 4. Conditional Check: Validate Dimensions if Oversize/Overweight is toggled
      const oversizeBox = document.getElementById("prm_check_osow");
      if (oversizeBox && oversizeBox.checked) {
        const weightEl = document.getElementById("prm_gross_weight");
        const widthEl = document.getElementById("prm_total_width");
        
        if (weightEl && (!weightEl.value.trim() || parseFloat(weightEl.value) <= 0)) {
          setError(weightEl, "Taxable Gross Weight calculations are mandatory for dimensional loads.");
        } else if (weightEl) {
          clearError(weightEl);
        }

        if (widthEl && (!widthEl.value.trim() || parseFloat(widthEl.value) <= 0)) {
          setError(widthEl, "Total configuration load width measurements are required.");
        } else if (widthEl) {
          clearError(widthEl);
        }
      }

      return { isValid, errors };
    }
  };

  // Global backward trace pointer assignment bridge
  window.validateDotPermitsFormMaster = function() {
    return window.formRegistry['dot-permits-validation'].validate().isValid;
  };
}

window.initDotPermitsService = initDotPermitsService;

// ============================================================================ //
// 🛠️ DOT PERMITS REGISTRATION SERVICE: LAYOUT ENGINE (PART 2 OF 4)             //
// ============================================================================ //

window.formRegistry = window.formRegistry || {};

/**
 * Section 1: Carrier Permit Profile Layout
 */
window.formRegistry['dot-permits-part1-layout'] = function(stateDropdownOptionsHtml = "") {
  return `
    <style>
      @media screen and (max-width: 768px) {
        .permits-layout-grid {
          grid-template-columns: 1fr !important;
          gap: 12px !important;
        }
        .permits-layout-grid div[style*="grid-column: span 1"],
        .permits-layout-grid div[style*="grid-column: span 2"] {
          grid-column: span 1 !important;
          width: 100% !important;
        }
      }
    </style>

    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px; width: 100%;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Multi-State DOT Permit Framework &amp; Regulatory Declarations</strong>
      Commercial vehicle operations handling oversize/overweight cargo, alcohol transport, single-trip routing, or specialized out-of-state hauls require cross-border emergency authorization permits. Operating beyond legal vehicle configurations or running multi-jurisdiction freight columns without processed Department of Transportation credentials voids insurance limits and invites immediate heavy roadside safety impoundment.
    </div>

    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; width: 100%;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Carrier Permit Profile</h3>
    </div>

    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; width: 100%;">
      <label for="prm_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">Official Business / Carrier Legal Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="prm_legal_name" required placeholder="Enter exact legal name matching state registration and USDOT profile" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
      <div class="wizard-error-message" id="err_prm_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>

    <div class="permits-layout-grid" style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box; margin-top: 16px;">
      <div class="wizard-input-group" style="margin: 0; width: 100%;">
        <label for="prm_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">USDOT Number <span style="color: #ef4444;">*</span></label>
        <input type="text" id="prm_usdot_number" required placeholder="Enter USDOT Identification ID" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
        <div class="wizard-error-message" id="err_prm_usdot_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <div class="wizard-input-group" style="margin: 0; width: 100%;">
        <label for="prm_base_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">Corporate Base State <span style="color: #ef4444;">*</span></label>
        <select id="prm_base_state" required class="wizard-input-field" style="font-weight: 600; width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
          <option value="" disabled selected>Select Base State...</option>
          ${stateDropdownOptionsHtml}
        </select>
        <div class="wizard-error-message" id="err_prm_base_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    </div>

    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 16px; width: 100%;">
      <label for="prm_vin_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">17-Digit Transport Asset VIN <span style="color: #ef4444;">*</span></label>
      <input type="text" id="prm_vin_number" required placeholder="Enter Vehicle Identification Number" maxlength="17" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none; font-family: monospace; text-transform: uppercase;">
      <div class="wizard-error-message" id="err_prm_vin_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
  `;
};

// ============================================================================ //
// 🛠️ DOT PERMITS REGISTRATION SERVICE: LAYOUT ENGINE (PART 3 OF 4)             //
// ============================================================================ //

window.formRegistry = window.formRegistry || {};

/**
 * Section 2: Regulatory Permit Requirements Checklist Matrix Layout
 * Includes the fixed conditional logic wire-up hook
 */
window.formRegistry['dot-permits-part2-layout'] = function() {
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 24px; width: 100%;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Regulatory Permit Requirements</h3>
      <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Check all regulatory transport permit classifications matching your upcoming transit schedule:</p>
    </div>

    <div class="permits-layout-grid" style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; background: #ffffff; border: 1px solid var(--border, #cbd5e1); padding: 16px; border-radius: 8px; box-sizing: border-box; width: 100%; margin-top: 12px;">
      
      <div style="display: flex; align-items: flex-start; gap: 8px; width: 100%;">
        <input type="checkbox" id="prm_check_trip" name="prm_type_selection" value="trip" style="margin-top: 3px; cursor: pointer;">
        <label for="prm_check_trip" style="font-size: 0.825rem; color: var(--navy); font-weight: 600; cursor: pointer;">Single-Trip Transit Permit (Temporary 72/96-Hr cross-border commercial vehicle permit)</label>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 8px; width: 100%;">
        <input type="checkbox" id="prm_check_fuel" name="prm_type_selection" value="fuel" style="margin-top: 3px; cursor: pointer;">
        <label for="prm_check_fuel" style="font-size: 0.825rem; color: var(--navy); font-weight: 600; cursor: pointer;">Temporary Fuel Tax Permit (Enables emergency fuel logging bypass for non-IFTA vehicles)</label>
      </div>

      <!-- FIXED CONDITIONAL WIRE-UP: Invokes unique toggle action for Section 3 -->
      <div style="display: flex; align-items: flex-start; gap: 8px; width: 100%;">
        <input type="checkbox" id="prm_check_osow" name="prm_type_selection" value="osow" style="margin-top: 3px; cursor: pointer;" onchange="window.toggleDotPermitOversizeFields(this.checked)">
        <label for="prm_check_osow" style="font-size: 0.825rem; color: var(--navy); font-weight: 600; cursor: pointer;">Oversize / Overweight Load Permit (Triggers conditional load width and gross weight inputs)</label>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 8px; width: 100%;">
        <input type="checkbox" id="prm_check_liquor" name="prm_type_selection" value="liquor" style="margin-top: 3px; cursor: pointer;">
        <label for="prm_check_liquor" style="font-size: 0.825rem; color: var(--navy); font-weight: 600; cursor: pointer;">Liquor / Alcohol Transport Permit (State specific commercial alcohol carriage credentialing)</label>
      </div>

      <div class="wizard-error-message" id="err_prm_type_matrix" style="color: #ef4444; font-size: 0.75rem; grid-column: span 2; margin-top: 4px; display: none; width: 100%;"></div>
    </div>
  `;
};

// ============================================================================ //
// 🛠️ DOT PERMITS REGISTRATION SERVICE: LAYOUT ENGINE (PART 4 OF 4)             //
// ============================================================================ //

window.formRegistry = window.formRegistry || {};

/**
 * Section 3: Conditional Fields Layout & Section 4: Routing Remarks
 */
window.formRegistry['dot-permits-part3-layout'] = function() {
  return `
    <!-- SECTION 3: CONDITIONAL DIMENSIONAL PROFILE  -->
    <div style="grid-column: span 2; display: none; flex-direction: column; gap: 16px; margin-top: 16px; width: 100%;">
      
      <div style="border-bottom: 1px solid var(--border, #cbd5e1); padding-bottom: 8px; width: 100%;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Oversize / Overweight Dimensional Configuration</h3>
      </div>
      
      <div class="permits-layout-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
        
        <div class="wizard-input-group" style="margin: 0; width: 100%;">
          <label for="prm_gross_weight" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Total Gross Weight (lbs) <span style="color: #ef4444;">*</span></label>
          <input type="number" id="prm_gross_weight" placeholder="e.g. 95000" min="0" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
          <div class="wizard-error-message" id="err_prm_gross_weight" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="wizard-input-group" style="margin: 0; width: 100%;">
          <label for="prm_total_width" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Total Width (Feet / Inches) <span style="color: #ef4444;">*</span></label>
          <input type="text" id="prm_total_width" placeholder="e.g. 12ft 6in" class="wizard-input-field" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;">
          <div class="wizard-error-message" id="err_prm_total_width" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
      </div>
    </div>

    <!-- SECTION 4: EXTRA TEXTAREA REMARKS OVERLAY -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #cbd5e1); padding-bottom: 8px; margin-top: 24px; width: 100%;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Routing Directions &amp; Remarks</h3>
    </div>

    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; width: 100%;">
      <label for="prm_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 4px;">Special Permit Routing Notes or Destination States</label>
      <textarea id="prm_provisions" placeholder="List all states your vehicle column is crossing through, along with immediate freight lane configurations or requested pickup dates..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; font-weight: 600; outline: none;"></textarea>
    </div>
  `;
};

// ============================================================================ //
// ⚙️ RUNTIME LOGIC CONTROLLERS: RE-ENGINEERED CONDITIONAL INTERACTIONS         //
// ============================================================================ //

/**
 * Toggles Section 3 field presence and forces required constraints on checking.
 */
window.toggleDotPermitOversizeFields = function(isChecked) {
  const dimensionalWrapper = document.getElementById("prm_dimensional_load_wrapper");
  const weightInput = document.getElementById("prm_gross_weight");
  const widthInput = document.getElementById("prm_total_width");

  if (!dimensionalWrapper) return;

  if (isChecked) {
    dimensionalWrapper.style.setProperty("display", "flex", "important");
    if (weightInput) weightInput.setAttribute("required", "required");
    if (widthInput) widthInput.setAttribute("required", "required");
  } else {
    dimensionalWrapper.style.setProperty("display", "flex", "important");
    if (weightInput) { weightInput.removeAttribute("required"); weightInput.value = ""; }
    if (widthInput) { widthInput.removeAttribute("required"); widthInput.value = ""; }
  }
};

// ============================================================================ //
// 📦 MASTER SYSTEM REGISTRY ALLOCATION CLOSURE MATRIX                          //
// ============================================================================ //

window.formRegistry['dot-permits-form-master'] = function(stateDropdownOptionsHtml = "") {
  return `<div class="dot-permits-wizard-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; width: 100%; box-sizing: border-box;">
    ${window.formRegistry['dot-permits-part1-layout'](stateDropdownOptionsHtml)}
    ${window.formRegistry['dot-permits-part2-layout']()}
    ${window.formRegistry['dot-permits-part3-layout']()}

  </div>`;
};
