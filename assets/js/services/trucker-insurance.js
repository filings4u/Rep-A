// ============================================================================ //
// 🛠️ TRUCKER INSURANCE INTAKE PREPARATION VALIDATION MATRIX ENGINE
// ============================================================================ //
const truckerInsuranceValidation = {
  requiredFields: [
    { id: 'ins_coverage_limit', msg: 'Requested Liability Coverage Limits selection is required.' },
    { id: 'ins_prior_losses', msg: 'Prior Claims / History of Loss selection is required.' },
    { id: 'ins_driver_name', msg: "Owner-Operator Full Legal Name is required." },
    { id: 'ins_driver_dob', msg: "Owner-Operator Date of Birth is required." },
    { id: 'ins_driver_cdl', msg: "Commercial Driver's License (CDL) Number is required." },
    { id: 'ins_driver_state', msg: 'CDL Issuing State code is required.' },
    { id: 'ins_driver_phone', msg: 'Contact Phone Number is required.' },
    { id: 'ins_driver_email', msg: 'Contact Email Address is required.' },
    { id: 'ins_cargo_quote_choice', msg: 'Motor Cargo Insurance Quote preference is required.' }
  ],

  validateStep: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process standard mandatory tracking items presence
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Validate State Abbreviations Length
    const stateEl = document.getElementById("ins_driver_state");
    if (stateEl && stateEl.value.trim() && !/^[a-zA-Z]{2}$/.test(stateEl.value.trim())) {
      setError(stateEl, "CDL Issuing State code must consist of exactly 2 alphabet letters.");
    }

    // 3. Validate Contact Phone Numerical Baseline Length
    const phoneEl = document.getElementById("ins_driver_phone");
    if (phoneEl && phoneEl.value.trim()) {
      const digits = phoneEl.value.replace(/\D/g, "");
      if (digits.length < 10) setError(phoneEl, "Contact Phone Number must contain at least 10 numbers.");
    }

    // 4. Validate Email Structural Syntax
    const emailEl = document.getElementById("ins_driver_email");
    if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
      setError(emailEl, "Please supply a valid contact email address format.");
    }

    // 5. Conditional Check: Validate Cargo Limit dropdown if selection matches YES
    const cargoChoice = document.getElementById("ins_cargo_quote_choice");
    if (cargoChoice && cargoChoice.value === "yes") {
      const cargoLimitEl = document.getElementById("ins_cargo_limit");
      if (cargoLimitEl && !cargoLimitEl.value.trim()) {
        setError(cargoLimitEl, "Please specify your requested Motor Cargo insurance protection limit.");
      } else if (cargoLimitEl) {
        clearError(cargoLimitEl);
      }
    }

    return { isValid, errors };
  }
};

// FAMILY 7: TAX FILING, PROCUREMENT, INSURANCE & LOGISTICS DEFINITIONS
function buildTruckerInsuranceLayoutHtml(familyKey) {
  if (familyKey === "insurance") {
    
    // Informational context panel tracking partner logistics dispatching
    var infoOverlayHtml = `
      <!-- INFORMATION OVERLAY BOX -->
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 16px; box-sizing: border-box;">
        <h4 style="color: var(--navy); margin: 0 0 6px 0; font-size: 0.95rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-truck-shield" style="color: var(--navy);"></i> Primary BIPD Liability &amp; Cargo Intake Profile
        </h4>
        <p style="color: var(--slate); font-size: 0.825rem; margin: 0; line-height: 1.5;">
          Provide your operational parameters below to prepare your formal single-unit or fleet risk layout profile. Completed entries are securely compiled and dispatched straight to our certified network insurance broker partners to secure direct commercial underwriting quotes.
        </p>
      </div>
    `;

    var mainFormHtml = `
      <!-- SECTION 1: PERSONAL DETAILS MATRIX -->
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 4px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Owner-Operator Personal Profile</h3>
      </div>
      
      <div class="wizard-input-group">
        <label for="ins_driver_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner-Operator Full Legal Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ins_driver_name" required placeholder="Jane Doe" class="wizard-input-field">
      </div>
      
      <div class="wizard-input-group">
        <label for="ins_driver_dob" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date of Birth <span style="color: #ef4444;">*</span></label>
        <input type="date" id="ins_driver_dob" required class="wizard-input-field">
      </div>

      <div class="wizard-input-group">
        <label for="ins_driver_cdl" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Commercial Driver's License (CDL) # <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ins_driver_cdl" required placeholder="Enter CDL alphanumeric string..." class="wizard-input-field">
      </div>

      <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <label for="ins_driver_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">CDL State <span style="color: #ef4444;">*</span></label>
          <input type="text" id="ins_driver_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
        </div>
        <div>
          <label for="ins_driver_experience" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Years CDL Class A</label>
          <input type="number" id="ins_driver_experience" placeholder="0" min="0" class="wizard-input-field">
        </div>
      </div>

      <div class="wizard-input-group">
        <label for="ins_driver_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Phone Number <span style="color: #ef4444;">*</span></label>
        <input type="tel" id="ins_driver_phone" required placeholder="(512) 555-0199" style="font-family: monospace;" class="wizard-input-field">
      </div>

      <div class="wizard-input-group">
        <label for="ins_driver_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Email Address <span style="color: #ef4444;">*</span></label>
        <input type="email" id="ins_driver_email" required placeholder="name@domain.com" class="wizard-input-field">
      </div>

      <!-- SECTION 2: BIPD LIABILITY CONFIGURATION -->
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Risk Exposure &amp; Liability Matrix (BIPD)</h3>
      </div>
      
      <div class="wizard-input-group">
        <label for="ins_coverage_limit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Requested Liability Coverage Limits <span style="color: #ef4444;">*</span></label>
        <select id="ins_coverage_limit" required class="wizard-input-field" style="font-weight: 600;">
          <option value="1m" selected>$1,000,000 Combined Single Limit (Standard)</option>
          <option value="2m">$2,000,000 General Corporate Aggregate Limits</option>
          <option value="750k">$750,000 Freight Minimum Statutory Limits</option>
        </select>
      </div>
      
      <div class="wizard-input-group">
        <label for="ins_prior_losses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Prior Claims / History of Loss <span style="color: #ef4444;">*</span></label>
        <select id="ins_prior_losses" required class="wizard-input-field" style="font-weight: 600;">
          <option value="none" selected>No insurance claims within the past 36 months</option>
          <option value="has-claims">Active claims exist inside background history logs</option>
        </select>
      </div>

      <!-- SECTION 3: CONDITIONAL INLAND MOTOR CARGO OPTIONS -->
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Inland Motor Cargo Addendum</h3>
      </div>

      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="ins_cargo_quote_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Would you like to include an additional quote for Motor Cargo Insurance? <span style="color: #ef4444;">*</span></label>
        <select id="ins_cargo_quote_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleTruckerCargoLimitWrapper(this.value)">
          <option value="no" selected>No, exclude freight cargo layers from this intake document</option>
          <option value="yes">Yes, request matching motor cargo pricing quotes</option>
        </select>
      </div>

      <!-- Hidden Conditional Wrapper: Cargo Premium Limit Options -->
      <div id="ins_cargo_limit_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; flex-direction: column; gap: 6px;">
        <label for="ins_cargo_limit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Select Requested Motor Cargo Limit <span style="color: #ef4444;">*</span></label>
        <select id="ins_cargo_limit" class="wizard-input-field" style="font-weight: 600; background: #ffffff;">
          <option value="" disabled selected>Choose Cargo Limit...</option>
          <option value="100k">$100,000 Freight Protection Limit (Minimum Standard)</option>
          <option value="1m">$1,000,000 Underwritten Liability Shield</option>
          <option value="2m">$2,000,000 Expanded Operations Cargo Limit</option>
          <option value="5m">$5,000,000 High-Value Dedicated Logistics Tier</option>
        </select>
      </div>

  <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
    <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Commercial FMCSA &amp; DOT Credentials</h3>
  </div>
  <div class="wizard-input-group" style="grid-column: span 1;">
    <label for="truck_usdot_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Index Number <span style="color: #ef4444;">*</span></label>
    <input type="text" id="truck_usdot_num" required placeholder="Enter active DOT registration number" style="font-family: monospace;" class="wizard-input-field">
  </div>
  <div class="wizard-input-group" style="grid-column: span 1;">
    <label for="truck_mc_mx_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Operating Authority MC / MX Number</label>
    <input type="text" id="truck_mc_mx_num" placeholder="e.g. MC-000000 if operating as an active carrier" style="font-family: monospace;" class="wizard-input-field">
  </div>
  <div class="wizard-input-group" style="grid-column: span 2;">
    <label for="truck_fleet_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Commercial Power Units / Vehicles Operated <span style="color: #ef4444;">*</span></label>
    <input type="number" id="truck_fleet_count" required placeholder="0" min="0" class="wizard-input-field" style="font-family: monospace;">
  </div>

    `;

    return infoOverlayHtml + mainFormHtml;
  }
  return "";
}

// Global scope initialization router registration pass
if (!window.formRegistry) window.formRegistry = {};
window.formRegistry['trucker-insurance-layout'] = buildTruckerInsuranceLayoutHtml;
window.formRegistry['trucker-insurance-validation'] = truckerInsuranceValidation;


// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS (MOTOR CARGO UNDERWRITING)
// ============================================================================ //

window.toggleTruckerCargoLimitWrapper = function(value) {
  const cargoWrapper = document.getElementById("ins_cargo_limit_wrapper");
  const cargoSelect = document.getElementById("ins_cargo_limit");
  if (!cargoWrapper) return;

  if (value === "yes") {
    cargoWrapper.style.setProperty("display", "flex", "important");
    if (cargoSelect) cargoSelect.setAttribute("required", "required");
  } else {
    cargoWrapper.style.setProperty("display", "none", "important");
    if (cargoSelect) { cargoSelect.removeAttribute("required"); cargoSelect.value = ""; }
  }
};


// ============================================================================ //
// 🛠️ TRUCKER INSURANCE INTAKE VALIDATION MATRIX ENGINE (PART 3)
// ============================================================================ //
const truckerInsurancePart3Validation = {
  requiredFields: [
    { id: 'truck_usdot_num', msg: 'USDOT Index Number is required.' },
    { id: 'truck_fleet_count', msg: 'Total Commercial Power Units / Vehicles Operated calculation is required.' }
  ],

  validateStep: function() {
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Process standard mandatory items presence checks
    this.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Validate Vehicle Power Unit Numeric Values
    const fleetCountEl = document.getElementById("truck_fleet_count");
    if (fleetCountEl && fleetCountEl.value.trim()) {
      const countVal = parseInt(fleetCountEl.value, 10);
      if (isNaN(countVal) || countVal < 0) {
        setError(fleetCountEl, "Total Commercial Power Units must be a valid positive number.");
      }
    }

    return { isValid, errors };
  }
};