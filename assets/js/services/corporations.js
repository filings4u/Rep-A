// ============================================================================ //
// 🛠️ CORPORATE FORM VALIDATION MATRIX ENGINE (WITH CONDITIONAL RA EXTENSION)
// ============================================================================ //
export const corporateFormationValidation = {
  validateStep: function() {
    const container = document.getElementById("step-panel-2") || document.getElementById("step-2") || document.body;
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { if (el) el.style.borderColor = "#ef4444"; isValid = false; if (!errors.includes(msg)) errors.push(msg); };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Validate Base Core Framework Fields
    const baseFields = [
      { id: 'corp_proposed_name', msg: 'Proposed Corporation Name is required.' },
      { id: 'corp_business_purpose', msg: 'Corporate Business Purpose is required.' },
      { id: 'corp_ra_choice', msg: 'Please select a registered agent option.' },
      { id: 'corp_shares_authorized', msg: 'Total Shares Authorized is required.' },
      { id: 'corp_shares_par_value', msg: 'Par Value Per Share is required.' },
      { id: 'corp_scorp_elect', msg: 'Please select an IRS status election answer.' }
    ];

    baseFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Specific Validation: Corporate Suffix Suffix Rules Lookups
    const nameEl = document.getElementById("corp_proposed_name");
    if (nameEl && nameEl.value.trim()) {
      const val = nameEl.value.trim().toLowerCase();
      const hasSuffix = val.endsWith("inc.") || val.endsWith("inc") || val.endsWith("incorporated") || val.endsWith("corporation") || val.endsWith("corp.") || val.endsWith("corp");
      if (!hasSuffix) setError(nameEl, 'Corporation name must include "Inc.", "Incorporated", or "Corporation".');
    }

    // 3. Dynamic Loop Checks: Visible Shareholders Registry
    const shCards = container.querySelectorAll("#corp_shareholders_container .member-record-card");
    shCards.forEach(card => {
      const idx = card.id.replace("shareholder_card_", "");
      const name = document.getElementById(`shareholder_name_${idx}`);
      const street = document.getElementById(`shareholder_street_${idx}`);
      const city = document.getElementById(`shareholder_city_${idx}`);
      const state = document.getElementById(`shareholder_state_${idx}`);
      const zip = document.getElementById(`shareholder_zip_${idx}`);

      if (name && !name.value.trim()) setError(name, `Shareholder #${idx}: Full Legal Name is required.`); else clearError(name);
      if (street && !street.value.trim()) setError(street, `Shareholder #${idx}: Street Address is required.`); else clearError(street);
      if (city && !city.value.trim()) setError(city, `Shareholder #${idx}: City is required.`); else clearError(city);
      if (state && !state.value.trim()) setError(state, `Shareholder #${idx}: State is required.`); else clearError(state);
      if (zip) {
        if (!zip.value.trim()) setError(zip, `Shareholder #${idx}: Zip Code is required.`);
        else if (!/^\d{5}$/.test(zip.value.trim())) setError(zip, `Shareholder #${idx}: Zip Code must be 5 digits.`);
        else clearError(zip);
      }
    });

    // 4. Added Conditional Validation: Third Party Corporate Registered Agent
    const raChoice = document.getElementById("corp_ra_choice");
    if (raChoice && raChoice.value === "custom") {
      ['corp_ra_custom_name', 'corp_ra_custom_street', 'corp_ra_custom_city', 'corp_ra_custom_state', 'corp_ra_custom_zip'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (!el.value.trim()) setError(el, 'All custom registered agent fields are required.');
          else if (id === 'corp_ra_custom_zip' && !/^\d{5}$/.test(el.value.trim())) setError(el, 'Custom Agent Zip must be 5 digits.');
          else clearError(el);
        }
      });
    }

    return { isValid, errors };
  }
};

// Part 2: HTML Component Structural Output Definition (Designs Untouched)
export function buildCorporateFormationFieldsLayoutHtml() {
  const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
  const agentMetaRecord = centralRegistrySource["customSelectedRegisteredAgentServiceActive"] || {};
  const liveAgentFee = parseFloat(agentMetaRecord.price || 75.00).toFixed(2);
  
  var blankStatesHtml = typeof buildGlobalUsaStateDropdownOptionsHtml === "function" ? buildGlobalUsaStateDropdownOptionsHtml("") : '<option value="">Select State</option>';

  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Corporate Business Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="corp_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Corporation Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="corp_proposed_name" required placeholder="Example Enterprises Inc." class="wizard-input-field" onblur="validateCorpNameSuffix(this)">
      <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Must include "Inc.", "Incorporated", or "Corporation".</span>
    </div>
    <div class="wizard-input-group">
      <label for="corp_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Corporate Business Purpose <span style="color: #ef4444;">*</span></label>
      <input type="text" id="corp_business_purpose" required placeholder="Brief description of operations..." class="wizard-input-field">
    </div>
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="corp_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Select Registered Agent Provision <span style="color: #ef4444;">*</span></label>
      <select id="corp_ra_choice" required class="wizard-input-field" onchange="toggleCorporateRegisteredAgentConditionalFields(this.value)">
        <option value="" disabled selected>Choose...</option>
        <option value="filings4u">Utilize Filings4u Protected Agent Shield Service — $${liveAgentFee} / Year</option>
        <option value="custom">Maintain External Independent Third-Party Registered Agent</option>
      </select>
    </div>
    
    <!-- INJECTED EXTERNAL AGENT WRAPPER PANELS MATRIX (MATCHES LLC BLUEPRINTS) -->
    <div id="corp_custom_ra_wrapper" style="grid-column: span 2; display: none; grid-template-columns: 1fr 1fr; gap: 24px; background: var(--light-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--border); box-sizing: border-box; width: 100%;">
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label style="font-weight:700; font-size:0.8rem; color:var(--navy);">Agent Name *</label>
        <input type="text" id="corp_ra_custom_name" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label style="font-weight:700; font-size:0.8rem; color:var(--navy);">Street Address *</label>
        <input type="text" id="corp_ra_custom_street" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label style="font-weight:700; font-size:0.8rem; color:var(--navy);">City *</label>
        <input type="text" id="corp_ra_custom_city" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div>
          <label style="font-weight:700; font-size:0.8rem; color:var(--navy);">State *</label>
          <select id="corp_ra_custom_state" class="wizard-input-field">${blankStatesHtml}</select>
        </div>
        <div>
          <label style="font-weight:700; font-size:0.8rem; color:var(--navy);">Zip *</label>
          <input type="text" id="corp_ra_custom_zip" maxlength="5" class="wizard-input-field">
        </div>
      </div>
    </div>

    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Shareholder Registry</h3>
    </div>
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Shareholder?</strong> A shareholder is an individual or entity that owns shares of a corporation's stock. They hold structural ownership privileges.
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <div id="corp_shareholders_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
        <div class="member-record-card" id="shareholder_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box;">
          <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Shareholder #1 Records</span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
            <div class="wizard-input-group" style="grid-column: span 2;">
              <label for="shareholder_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Full Legal Name</label>
              <input type="text" id="shareholder_name_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="grid-column: span 2;">
              <label for="shareholder_street_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Street Address</label>
              <input type="text" id="shareholder_street_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group">
              <label for="shareholder_city_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">City</label>
              <input type="text" id="shareholder_city_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label for="shareholder_state_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">State</label>
                <input type="text" id="shareholder_state_1" required maxlength="2" class="wizard-input-field">
              </div>
              <div>
                <label for="shareholder_zip_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Zip</label>
                <input type="text" id="shareholder_zip_1" required class="wizard-input-field">
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onclick="appendNewCorporateShareholderNode()" style="margin-top: 12px; background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;"><i class="fa-solid fa-plus"></i> Add Additional Shareholder</button>
    </div>
  ` + buildCorporateFormationFieldsLayoutHtmlPart2();
}
window.buildCorporateFormationFieldsLayoutHtml = buildCorporateFormationFieldsLayoutHtml;

export function buildCorporateFormationFieldsLayoutHtmlPart2() {
  const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
  const scorpMetaRecord = centralRegistrySource["customSelectedScorpElectionActive"] || {};
  const liveScorpFee = parseFloat(scorpMetaRecord.price || 79.00).toFixed(2);

  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Stock &amp; Tax Status Elections</h3>
    </div>
    <div class="wizard-input-group">
      <label for="corp_shares_authorized" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Shares Authorized</label>
      <input type="number" id="corp_shares_authorized" required placeholder="10000" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="corp_shares_par_value" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Par Value Per Share</label>
      <input type="text" id="corp_shares_par_value" required placeholder="0.0001" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="corp_scorp_elect" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you wish to elect IRS S-Corporation status?</label>
      <select id="corp_scorp_elect" required class="wizard-input-field" onchange="toggleScorpElectionWorkflow(this.value)">
        <option value="no" selected>No, maintain standard C-Corporation structure</option>
        <option value="yes">Yes, elect IRS Subchapter S-Corporation tax status</option>
      </select>
    </div>
    <div id="corp_scorp_service_wrapper" style="grid-column: span 2; display: none; background: var(--light-bg); padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; flex-direction: column; gap: 14px; box-sizing: border-box;">
      <label for="corp_scorp_procure" style="font-weight: 700; font-size: 0.82rem; color: var(--navy);">Add IRS Form 2553 Filing Preparation Service? ($${liveScorpFee})</label>
      <select id="corp_scorp_procure" class="wizard-input-field" onchange="toggleScorpFilingPricingHook(this.value)">
        <option value="no-decline">No, I will file Form 2553 independently</option>
        <option value="yes-buy">Yes, add Form 2553 Preparation — $${liveScorpFee}</option>
      </select>
    </div>
  `;
}
window.buildCorporateFormationFieldsLayoutHtmlPart2 = buildCorporateFormationFieldsLayoutHtmlPart2;

// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS (CORPORATE EXTENSIONS)
// ============================================================================ //
export function toggleCorporateRegisteredAgentConditionalFields(selectedValue) {
  var wrapper = document.getElementById("corp_custom_ra_wrapper");
  if (!wrapper) return;
  var inputs = wrapper.querySelectorAll("input, select");

  if (selectedValue === "custom") {
    wrapper.style.display = "grid";
    window.customSelectedRegisteredAgentServiceActive = false;
    inputs.forEach(el => el.setAttribute("required", "required"));
  } else {
    wrapper.style.display = "none";
    const coreRegistry = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages || {};
    const chosenService = coreRegistry[window.routeActiveServiceKey] || {};
    const activePlanKey = window.routeActivePlanKey || "";
    const activePlanDetails = chosenService.plans?.[activePlanKey] || chosenService[activePlanKey] || {};
    const inclusionsListText = JSON.stringify(activePlanDetails.bullets || chosenService.bullets || "").toLowerCase();
    const isAgentAlreadyIncludedInBasePrice = inclusionsListText.includes("agent") && (inclusionsListText.includes("free") || inclusionsListText.includes("included"));

    window.customSelectedRegisteredAgentServiceActive = !isAgentAlreadyIncludedInBasePrice;
    inputs.forEach(el => { el.removeAttribute("required"); el.value = ""; });
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
}
window.toggleCorporateRegisteredAgentConditionalFields = toggleCorporateRegisteredAgentConditionalFields;
