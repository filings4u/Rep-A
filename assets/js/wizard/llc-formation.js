(function () {
  // Safe global namespace initialization to prevent script-loader crashes
  window.formRegistry = window.formRegistry || {};

  /**
   * Generates HTML dropdown options for all 50 US States.
   * @param {string} [selected] - 2-digit uppercase code to pre-select.
   * @returns {string} HTML option tags.
   */
  window.buildGlobalUsaStateDropdownOptionsHtml = function (selected) {
    const states = [
      "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
      "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
      "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
      "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
      "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
    ];
    const target = String(selected || "").toUpperCase().trim();
    const options = states.map(st => 
      `<option value="${st}" ${st === target ? "selected" : ""}>${st}</option>`
    );
    return '<option value="">-- Select State --</option>' + options.join("");
  };
})();

/**
 * Part 24 Refactored: Realignment Master Integrator Configuration Patch.
 * Seals component bounds, clears padding leaks, and enforces clean two-column grid behavior
 * without relying on layout-breaking floats.
 */
window.formRegistry = window.formRegistry || {};
window.formRegistry['llc-formation-form-master'] = function(stateDropdownOptionsHtml) {
  console.log("[LLC Realignment Fix] Patch-assembling fields with strict structural isolation bounds...");
  
  // Compile individual structural layers securely from global and local registries
  var fullSection1Html = (typeof window.formRegistry['llc-formation-part1-layout'] === 'function' ? window.formRegistry['llc-formation-part1-layout'](stateDropdownOptionsHtml || "") : "") + (typeof window.buildBusinessAddressLayoutHtml === "function" ? window.buildBusinessAddressLayoutHtml() : "");
  var fullSection2Html = typeof window.formRegistry['llc-formation-part2-layout'] === 'function' ? window.formRegistry['llc-formation-part2-layout']() : "";
  var fullSection3Html = typeof window.formRegistry['llc-formation-part3-layout'] === 'function' ? window.formRegistry['llc-formation-part3-layout']() : "";
  var fullSection4Html = typeof window.buildManagementAndTaxOptionsLayoutHtml === "function" ? window.buildManagementAndTaxOptionsLayoutHtml() : "";

  // Trigger our safe, loop-free style manager to lock field rows instantly
  if (typeof window.triggerSafeLayoutRealignmentDebounced === "function") {
    window.triggerSafeLayoutRealignmentDebounced();
  }

/* 🛡️ FIXED: Removed restrictive margins and constrained layout to match the main viewport workspace */
return `
<div class="llc-wizard-compiled-pipeline" style="display: flex !important; flex-direction: column !important; align-items: center !important; width: 100% !important; max-width: 780px !important; margin-left: auto !important; margin-right: auto !important; padding: 0 24px !important; box-sizing: border-box !important; clear: both !important;">
    <div id="step-panel-1" style="display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 16px !important; width: 100% !important; margin-bottom: 24px !important;">
        ${fullSection1Html}
    </div>
    <div id="step-panel-2" style="display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 16px !important; width: 100% !important; margin-bottom: 24px !important;">
        ${fullSection2Html}
    </div>
    <div id="step-panel-3" style="display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 16px !important; width: 100% !important; margin-bottom: 24px !important;">
        ${fullSection3Html}
    </div>
    <div id="step-panel-4" style="display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 16px !important; width: 100% !important; margin-bottom: 24px !important;">
        ${fullSection4Html}
    </div>
</div>
`;

};

// Re-map main framework initializers safely to avoid recursive initialization lookups
window.buildLlcFormationFieldsLayoutHtml = function() {
    return window.formRegistry['llc-formation-form-master']();
};

window.formRegistry = window.formRegistry || {};
window.formRegistry['llc-formation-part1-layout'] = function(stateDropdownOptionsHtml) {
    console.log("[LLC Layout] Running initial step configuration pass...");
    var jurisdiction = window.selectedFormationStateCode || "TX";
    var buildStateHtml = typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml : window.buildGlobalUsaStateDropdownOptionsHtml;
    var currentStatesHtml = stateDropdownOptionsHtml || buildStateHtml(jurisdiction);
    var blankStatesHtml = buildStateHtml("");

    return `
        <!-- Info Banner Component -->
        <div style="grid-column: span 2; width: 100%; background: rgba(10, 31, 68, 0.03); border-left: 4px solid #0a1f44; padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: #64748b; box-sizing: border-box; margin-bottom: 12px;">
            <strong style="color: #0a1f44; display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is an LLC?</strong>
            An LLC (Limited Liability Company) is a formal business structure that protects your personal assets by separating them from your business liabilities.
        </div>

        <!-- Section 1 Title Row -->
        <div style="grid-column: span 2; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 12px; margin-bottom: 12px;">
            <h3 style="color: #0a1f44; font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
        </div>

        <!-- Jurisdiction State Selection Row (Side-by-Side Split) -->
        <div class="wizard-input-group" style="grid-column: span 1; box-sizing: border-box; padding-right: 8px;">
            <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 6px;">Formation State *</label>
            <select name="formation_state" id="wizard-target-jurisdiction" required class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1;" onchange="window.selectedFormationStateCode = this.value; if(typeof updateDynamicPricingMatrixVanilla === 'function') updateDynamicPricingMatrixVanilla();">
                ${currentStatesHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1; box-sizing: border-box; padding-left: 8px;">
            <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-block-weight: 6px; display: block; margin-bottom: 6px;">Headquarters State *</label>
            <select name="headquarters_state" id="headquarters_state" required class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1;">
                ${blankStatesHtml}
            </select>
        </div>

        <!-- 🛡️ FIXED: CSS injector to break subsequent pipeline fields out of the single-column left-side trap -->
        <style>
            #step-panel-1 > .wizard-input-group:not([style*="grid-column"]):not([style*="span 1"]),
            #step-panel-1 > div:not([style*="grid-column"]):not([style*="span 1"]) {
                grid-column: span 2 !important;
                width: 100% !important;
            }
        </style>
    `;
};


window.buildBusinessAddressLayoutHtml = function() {
  var buildStateHtml = typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml : window.buildGlobalUsaStateDropdownOptionsHtml;
  var blankStatesHtml = buildStateHtml("");

  return `
    <!-- Proposed Entity Naming Row -->
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; box-sizing: border-box;">
      <label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; display: block; margin-bottom: 6px;">Proposed LLC Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="llc_proposed_name" name="ent_legal_name" required placeholder="Example Logistics LLC" class="wizard-input-field validate-letters" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 0 8px; box-sizing: border-box;">
      <span style="font-size: 0.7rem; color: #64748b; font-weight: 500; display: block; margin-top: 4px; padding-left: 2px;">Must include "LLC" or "Limited Liability Company".</span>
    </div>

    <!-- Complete Corporate Address Matrix -->
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; box-sizing: border-box;">
      <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 6px;">Business Address *</label>
      <input type="text" id="ent_address_street" name="ent_address_street" required class="wizard-input-field" placeholder="Street address" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 0 8px; box-sizing: border-box;">
    </div>

    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; box-sizing: border-box;">
      <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 6px;">Suite, building, etc. (Optional)</label>
      <input type="text" id="ent_address_suite" name="ent_address_suite" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 0 8px; box-sizing: border-box;">
    </div>

    <!-- Side-by-Side Geo Split -->
    <div class="wizard-input-group" style="grid-column: span 1; margin-top: 12px; box-sizing: border-box; padding-right: 8px;">
      <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 6px;">Business City *</label>
      <input type="text" id="ent_address_city" name="ent_address_city" required class="wizard-input-field validate-letters" placeholder="City" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 0 8px; box-sizing: border-box;">
    </div>

    <div class="wizard-input-group" style="grid-column: span 1; margin-top: 12px; box-sizing: border-box; padding-left: 8px;">
      <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 6px;">Business State *</label>
      <select id="business_state" name="business_state" required class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff;">
        ${blankStatesHtml}
      </select>
    </div>

    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; box-sizing: border-box;">
      <label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 6px;">Business Zip Code *</label>
      <input type="text" id="ent_address_zip" name="ent_address_zip" required class="wizard-input-field validate-numbers" maxlength="5" placeholder="5-digit ZIP code" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 0 8px; box-sizing: border-box;">
    </div>

    <!-- Federal NAICS Industry Selection Panel -->
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 16px; box-sizing: border-box;">
      <label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; display: block; margin-bottom: 6px;">Business Purpose / Activities <span style="color: #ef4444;">*</span></label>
      <select id="llc_business_purpose" name="business_purpose_naics" required class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; font-weight: 600;" onchange="if(typeof window.toggleCustomNaicsInputWorkflow==='function') window.toggleCustomNaicsInputWorkflow(this.value)">
        <option value="">-- Select Industry Classification --</option>
        <option value="541110">Offices of Lawyers (NAICS 541110)</option>
        <option value="541211">Offices of Certified Public Accountants (NAICS 541211)</option>
        <option value="541330">Engineering Services (NAICS 541330)</option>
        <option value="541511">Custom Computer Programming Services (NAICS 541511)</option>
        <option value="541611">Administrative Management Consulting Services (NAICS 541611)</option>
        <option value="541810">Advertising Agencies (NAICS 541810)</option>
        <option value="621111">Offices of Physicians (NAICS 621111)</option>
        <option value="621210">Offices of Dentists (NAICS 621210)</option>
        <option value="236115">New Single-Family Housing Construction (NAICS 236115)</option>
        <option value="531210">Offices of Real Estate Agents and Brokers (NAICS 531210)</option>
        <option value="722511">Full-Service Restaurants (NAICS 722511)</option>
        <option value="454110">Electronic Shopping (NAICS 454110)</option>
        <option value="484121">General Freight Trucking (NAICS 484121)</option>
        <option value="561730">Landscaping Services (NAICS 561730)</option>
        <option value="812112">Beauty Salons (NAICS 812112)</option>
        <option value="other">Other / Custom Industry Description</option>
      </select>
    </div>

    <!-- 🛡️ FIXED: Custom NAICS Description text area component built right into the step layout layout -->
    <div id="llc_custom_naics_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 6px; margin-top: 12px; box-sizing: border-box; width: 100%;">
      <label for="llc_custom_naics_description" style="font-weight: 700; font-size: 0.85rem; color: #0a1f44;">Specify Industry Details *</label>
      <textarea id="llc_custom_naics_description" name="llc_custom_naics_description" rows="2" placeholder="Describe your primary business actions..." class="wizard-input-field" style="width: 100%; border-radius: 6px; border: 1px solid #cbd5e1; padding: 8px; box-sizing: border-box; font-family: inherit; resize: none; font-weight: 600;"></textarea>
      <div class="wizard-error-message" id="err_llc_custom_naics_description" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
  `;
};


window.formRegistry = window.formRegistry || {};
window.formRegistry['llc-formation-part2-layout'] = function() {
  console.log("[LLC Layout Enforcer] Compiling Step 2 Registered Agent layer template...");
  var buildStateHtml = typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml : window.buildGlobalUsaStateDropdownOptionsHtml;
  var blankStatesOptions = buildStateHtml("");

  return `
    <!-- SECTION 2: REGISTERED AGENT -->
    <div style="grid-column: span 2; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px; width: 100%;">
      <h3 style="color: #0a1f44; font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent</h3>
    </div>

    <!-- Choice Selection Dropdown -->
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; width: 100%;">
      <label for="llc_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; display: block; margin-bottom: 6px;">
        Do you have a Registered Agent already? *
      </label>
      <select id="llc_ra_choice" name="llc_ra_choice" required class="wizard-input-field" style="width: 100%; height: 40px; background: #ffffff; border: 1px solid #cbd5e1; font-weight: 600; box-sizing: border-box; border-radius: 6px;" onchange="if(typeof window.toggleRegisteredAgentConditionalFields==='function') window.toggleRegisteredAgentConditionalFields(this.value)">
        <option value="" disabled selected>Choose...</option>
        <option value="custom">Yes, I want to add the information below</option>
        <option value="filings4u">No, I want to use filings4u - $75/ yr.</option>
      </select>
    </div>

    <!-- CONDITIONAL CUSTOM AGENT WRAPPER -->
    <div id="llc_custom_ra_wrapper" style="grid-column: span 2; display: none; flex-wrap: wrap; gap: 16px; margin-top: 16px; width: 100%; box-sizing: border-box;">
      
      <!-- Agent Name Input Node -->
      <div class="wizard-input-group" style="width: 100%; margin: 0;">
        <label for="ra_custom_name" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">Registered Agent Name *</label>
        <input type="text" id="ra_custom_name" name="ra_custom_name" class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
        <div class="wizard-error-message" id="err_ra_custom_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <!-- Street Address Input Node (Balanced Left Column Spacing) -->
      <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="ra_custom_street" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">Physical Street Address (No P.O. Boxes) *</label>
        <input type="text" id="ra_custom_street" name="ra_custom_street" class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
        <div class="wizard-error-message" id="err_ra_custom_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <!-- Suite and Secondary Routing Inputs (Balanced Right Column Spacing) -->
      <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="ra_custom_suite" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">Suite, building, etc. (Optional)</label>
        <input type="text" id="ra_custom_suite" name="ra_custom_suite" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
      </div>

      <!-- Geographic Columns Split (Three Parts) -->
      <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="ra_custom_city" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">City *</label>
        <input type="text" id="ra_custom_city" name="ra_custom_city" class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
        <div class="wizard-error-message" id="err_ra_custom_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="ra_custom_state" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">State *</label>
        <select id="ra_custom_state" name="ra_custom_state" class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; box-sizing: border-box; font-weight: 600;">
          ${blankStatesOptions}
        </select>
        <div class="wizard-error-message" id="err_ra_custom_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="ra_custom_zip" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">Zip *</label>
        <input type="text" id="ra_custom_zip" name="ra_custom_zip" maxlength="5" class="wizard-input-field validate-numbers" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
        <div class="wizard-error-message" id="err_ra_custom_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

    </div>
  `;
};


window.formRegistry = window.formRegistry || {};
window.formRegistry['llc-formation-part3-layout'] = function() {
  console.log("[LLC Realignment Fix] Rebuilding Section 3 standalone container blocks...");
  var stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? 
    window.buildGlobalUsaStateDropdownOptionsHtml("") : '<option value="TX">Texas (TX)</option>';

  return `
    <!-- SECTION 3: MEMBERSHIP REGISTRY -->
    <div style="grid-column: span 2; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px; width: 100%;">
      <h3 style="color: #0a1f44; font-size: 1.1rem; font-weight: 800; margin: 0;">3. LLC Membership Registry</h3>
    </div>

    <div class="wizard-input-group" style="grid-column: span 2; width: 100%; margin: 0; margin-top: 16px;">
      <div id="llc_members_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%; box-sizing: border-box;">
        
        <!-- MEMBERSHIP RECORD CARD PANEL (MEMBER #1 REQUIRED BASE) -->
        <div class="member-record-card" id="member_card_1" style="background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; width: 100%; box-sizing: border-box; display: block;">
          <span style="font-weight: 800; font-size: 0.8rem; color: #10b981; text-transform: uppercase;">LLC Member #1 Records</span>
          
          <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 12px; width: 100%; box-sizing: border-box;">
            
            <!-- Full Name Input Group -->
            <div class="wizard-input-group" style="width: 100%; margin: 0;">
              <label for="member_name_1" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">Full Legal Name *</label>
              <input type="text" id="member_name_1" name="member_name_1" required class="wizard-input-field validate-letters" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
              <div class="wizard-error-message" id="err_member_name_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
            </div>

            <!-- Physical Street Address Input Group -->
            <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
              <label for="member_street_1" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">Street Address *</label>
              <input type="text" id="member_street_1" name="member_street_1" required class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
              <div class="wizard-error-message" id="err_member_street_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
            </div>

            <!-- Unit/Suite Address Input Group -->
            <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
              <label for="member_suite_1" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">Suite, building, etc. (Optional)</label>
              <input type="text" id="member_suite_1" name="member_suite_1" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
            </div>

            <!-- Geographic Splits (Three Parts) -->
            <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
              <label for="member_city_1" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">City *</label>
              <input type="text" id="member_city_1" name="member_city_1" required class="wizard-input-field validate-letters" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
              <div class="wizard-error-message" id="err_member_city_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
            </div>

            <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
              <label for="member_state_1" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">State *</label>
              <select id="member_state_1" name="member_state_1" required class="wizard-input-field" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; box-sizing: border-box; font-weight: 600;">
                ${stateOptions}
              </select>
              <div class="wizard-error-message" id="err_member_state_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
            </div>

            <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
              <label for="member_zip_1" style="font-size: 0.75rem; font-weight: 700; color: #64748b;">Zip *</label>
              <input type="text" id="member_zip_1" name="member_zip_1" required maxlength="5" class="wizard-input-field validate-numbers" style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; box-sizing: border-box; padding: 0 8px;">
              <div class="wizard-error-message" id="err_member_zip_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
            </div>

          </div>
        </div>

      </div>

      <!-- Multi-Member Dynamic Replication Button -->
      <button type="button" onclick="if(typeof window.appendNewLlcMemberRecordFieldNode === 'function') { window.appendNewLlcMemberRecordFieldNode(); }" style="margin-top: 16px; background: transparent; border: 1px dashed #10b981; color: #10b981; font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;">
        <i class="fa-solid fa-plus"></i> Add Additional Member
      </button>
    </div>
  `;
};

window.buildManagementAndTaxOptionsLayoutHtml = function() {
  console.log("[LLC Realignment Fix] Compiling absolute Section 4 layout panel side-by-side...");
  
  // Resolve unified metadata pricing variables from database records safely
  var centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
  var einMetaRecord = centralRegistrySource["customSelectedEinProcurementServiceActive"] || {};
  var liveEinFee = parseFloat(einMetaRecord.price || 79.00).toFixed(2);

  return `
    <!-- SECTION 4: MANAGEMENT OPTIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px; width: 100%;">
      <h3 style="color: #0a1f44; font-size: 1.1rem; font-weight: 800; margin: 0;">4. Management & Options</h3>
    </div>

    <!-- Core Grid Flex Container wrapper layer -->
    <div style="grid-column: span 2; display: flex; flex-wrap: wrap; gap: 16px; width: 100%; margin-top: 16px; box-sizing: border-box;">
      
      <!-- Management Type Drop-down (Left Column - Side-by-Side balanced) -->
      <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="llc_management_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; display: block; margin-bottom: 6px;">Management Type</label>
        <select id="llc_management_type" name="llc_management_type" required class="wizard-input-field" style="width: 100%; height: 40px; background: #ffffff; border: 1px solid #cbd5e1; font-weight: 600; box-sizing: border-box; border-radius: 6px;" onchange="if(typeof window.toggleLlcManagerFieldsMatrix==='function') window.toggleLlcManagerFieldsMatrix(this.value)">
          <option value="member-managed" selected>Member-Managed</option>
          <option value="manager-managed">Manager-Managed</option>
        </select>
      </div>

      <!-- Federal EIN Questionnaire Drop-down (Right Column - Side-by-Side balanced) -->
      <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="llc_ein_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; display: block; margin-bottom: 6px;">Do you possess an active EIN?</label>
        <select id="llc_ein_status" name="llc_ein_status" required class="wizard-input-field" style="width: 100%; height: 40px; background: #ffffff; border: 1px solid #cbd5e1; font-weight: 600; box-sizing: border-box; border-radius: 6px;" onchange="if(typeof window.toggleEinConditionalWorkflow==='function') window.toggleEinConditionalWorkflow(this.value)">
          <option value="" disabled selected>Choose...</option>
          <option value="yes">Yes, I possess an active EIN</option>
          <option value="no-buy">No, I need an EIN — Add Procurement ($${liveEinFee})</option>
          <option value="no-decline">No, I decline procurement services</option>
        </select>
      </div>

      <!-- Conditional Manager Listing Form Textarea Wrapper (Hides until triggered) -->
      <div id="llc_manager_names_wrapper" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; display: none; flex-direction: column; gap: 6px; box-sizing: border-box;">
        <label for="llc_manager_names" style="font-weight: 700; font-size: 0.85rem; color: #0a1f44;">Manager Names & Addresses *</label>
        <textarea id="llc_manager_names" name="llc_manager_names" rows="1" class="wizard-input-field" placeholder="List managers..." style="width: 100%; height: 40px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 8px; box-sizing: border-box; font-family: inherit; font-weight: 600; resize: none;"></textarea>
        <div class="wizard-error-message" id="err_llc_manager_names" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <!-- Conditional Existing EIN Numeric Input Wrapper (Hides until triggered) -->
      <div id="llc_manual_ein_wrapper" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; display: none; flex-direction: column; gap: 6px; box-sizing: border-box;">
        <label for="llc_existing_ein_field" style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block;">Enter Existing EIN *</label>
        <input type="text" id="llc_existing_ein_field" name="llc_existing_ein_field" placeholder="00-0000000" class="wizard-input-field validate-numbers" style="width: 100%; height: 40px; border: 1px solid #cbd5e1; font-weight: 600; box-sizing: border-box; border-radius: 6px; padding: 0 8px;">
        <div class="wizard-error-message" id="err_llc_existing_ein_field" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <!-- Corporate Lifespan Horizon Drop-down (Left Column Spacing) -->
      <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="llc_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; display: block; margin-bottom: 6px;">Lifespan Horizon</label>
        <select id="llc_duration_choice" name="llc_duration_choice" required class="wizard-input-field" style="width: 100%; height: 40px; background: #ffffff; border: 1px solid #cbd5e1; font-weight: 600; box-sizing: border-box; border-radius: 6px;" onchange="if(typeof window.toggleLlcDurationDateVisibility==='function') window.toggleLlcDurationDateVisibility(this.value)">
          <option value="perpetual" selected>Perpetual Duration</option>
          <option value="specified">Specified Term</option>
        </select>
      </div>

      <!-- Conditional Expiration Calendar Date Selector Wrapper (Right Column Spacing) -->
      <div id="llc_duration_date_wrapper" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; display: none; flex-direction: column; gap: 6px; box-sizing: border-box;">
        <label for="llc_expiration_date" style="font-weight: 700; font-size: 0.85rem; color: #0a1f44;">Expiration Date *</label>
        <input type="date" id="llc_expiration_date" name="llc_expiration_date" class="wizard-input-field" style="width: 100%; height: 40px; border: 1px solid #cbd5e1; font-weight: 600; box-sizing: border-box; border-radius: 6px; padding: 0 8px;">
        <div class="wizard-error-message" id="err_llc_expiration_date" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

    </div>
  `;
};

window.llcFormationValidation = window.llcFormationValidation || {};
window.llcFormationValidation.validateStep = function(stepNumber) {
  const container = document.getElementById(`step-panel-${stepNumber}`) || document.getElementById(`step-${stepNumber}`) || document.body;
  let isValid = true;
  let errors = [];

  const setError = (el, msg) => {
    if (!el) return;
    isValid = false;
    el.style.setProperty("border", "1px solid #ef4444", "important");
    if (!errors.includes(msg)) errors.push(msg);
    const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
    if (errorMsgNode) {
      errorMsgNode.textContent = msg;
      errorMsgNode.style.setProperty("display", "block", "important");
    }
  };

  const clearError = (el) => {
    if (!el) return;
    el.style.border = "";
    const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
    if (errorMsgNode) {
      errorMsgNode.style.setProperty("display", "none", "important");
      errorMsgNode.textContent = "";
    }
  };

  const isFieldActive = (el) => !!(el && (el.offsetWidth > 0 || el.offsetHeight > 0));

  // STEP 1 FIELDS EVALUATION
  if (stepNumber === 1) {
    const step1Fields = [
      { id: 'headquarters_state', msg: 'Headquarters state selection is required.' },
      { id: 'wizard-target-jurisdiction', msg: 'Business operating state choice is required.' },
      { id: 'llc_proposed_name', msg: 'Proposed LLC name is required.' },
      { id: 'ent_address_street', msg: 'Business street address is required.' },
      { id: 'ent_address_city', msg: 'Business city is required.' },
      { id: 'business_state', msg: 'Business state selection is required.' },
      { id: 'ent_address_zip', msg: 'Business ZIP code is required.' }
    ];
    step1Fields.forEach(field => {
      const el = document.getElementById(field.id);
      if (isFieldActive(el)) {
        if (!el.value.trim()) setError(el, field.msg);
        else clearError(el);
      }
    });

    const nameInput = document.getElementById("llc_proposed_name");
    if (isFieldActive(nameInput) && nameInput.value.trim()) {
      const nameVal = nameInput.value.trim().toLowerCase();
      const hasSuffix = nameVal.endsWith("llc") || nameVal.endsWith("l.l.c.") || nameVal.includes("limited liability company");
      if (!hasSuffix) {
        setError(nameInput, 'LLC Name must include a compliant suffix such as "LLC" or "Limited Liability Company".');
      }
    }

    const zipInput = document.getElementById('ent_address_zip');
    if (isFieldActive(zipInput) && zipInput.value.trim() && !/^\d{5}$/.test(zipInput.value.trim())) {
      setError(zipInput, 'Business Zip Code must consist of exactly 5 numbers.');
    }
  }

  // STEP 2 FIELDS EVALUATION
  if (stepNumber === 2) {
    const raChoice = document.getElementById("llc_ra_choice");
    if (isFieldActive(raChoice)) {
      if (!raChoice.value) setError(raChoice, 'Please select a registered agent option.');
      else clearError(raChoice);
    }

    if (raChoice && raChoice.value === "custom" && isFieldActive(raChoice)) {
      ['ra_custom_name', 'ra_custom_street', 'ra_custom_city', 'ra_custom_state', 'ra_custom_zip'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (!el.value.trim()) setError(el, 'All custom registered agent physical address fields are required.');
          else if (id === 'ra_custom_zip' && !/^\d{5}$/.test(el.value.trim())) setError(el, 'Custom agent Zip Code must be exactly 5 digits.');
          else clearError(el);
        }
      });
    }

    const purposeInput = document.getElementById("llc_business_purpose");
    if (isFieldActive(purposeInput)) {
      if (!purposeInput.value) setError(purposeInput, 'Please select an industry classification purpose.');
      else clearError(purposeInput);
    }

    if (purposeInput && purposeInput.value === "other") {
      const customDesc = document.getElementById("llc_custom_naics_description");
      if (isFieldActive(customDesc) && !customDesc.value.trim()) {
        setError(customDesc, 'Please detail your industry purpose text logs.');
      } else if (customDesc) {
        clearError(customDesc);
      }
    }
  }

  // STEP 3 FIELDS EVALUATION (Dynamic Member Loop)
  if (stepNumber === 3) {
    const memberCards = container.querySelectorAll(".member-record-card");
    memberCards.forEach(card => {
      const idx = card.id.replace("member_card_", "");
      ['name', 'street', 'city', 'state', 'zip'].forEach(fieldKey => {
        const el = document.getElementById(`member_${fieldKey}_${idx}`);
        if (isFieldActive(el)) {
          if (!el.value.trim()) {
            setError(el, `Member #${idx}: ${fieldKey.toUpperCase()} is required.`);
          } else if (fieldKey === 'zip' && !/^\d{5}$/.test(el.value.trim())) {
            setError(el, `Member #${idx}: Zip Code must be exactly 5 digits.`);
          } else {
            clearError(el);
          }
        }
      });
    });
  }

  // STEP 4 FIELDS EVALUATION (Management & Tax Validation)
  if (stepNumber === 4) {
    const mgmt = document.getElementById("llc_management_type");
    if (mgmt && mgmt.value === "manager-managed" && isFieldActive(mgmt)) {
      const mgrEl = document.getElementById("llc_manager_names");
      if (mgrEl && !mgrEl.value.trim()) setError(mgrEl, "Please provide manager names.");
      else if (mgrEl) clearError(mgrEl);
    }

    const duration = document.getElementById("llc_duration_choice");
    if (duration && duration.value === "specified" && isFieldActive(duration)) {
      const dateEl = document.getElementById("llc_expiration_date");
      if (dateEl && !dateEl.value) setError(dateEl, "Please specify a valid company expiration date.");
      else if (dateEl) clearError(dateEl);
    }

    const einStatus = document.getElementById("llc_ein_status");
    if (einStatus && einStatus.value === "yes" && isFieldActive(einStatus)) {
      const einField = document.getElementById("llc_existing_ein_field");
      if (einField && einField.value.replace(/\D/g, "").length !== 9) {
        setError(einField, "Existing corporate EIN must consist of exactly 9 numeric digits.");
      } else if (einField) {
        clearError(einField);
      }
    }
  }

  return { isValid, errors };
};

// Direct functional layout routing attachments
window.formRegistry = window.formRegistry || {};
window.formRegistry['llc-formation-part1-validation'] = function() { return window.llcFormationValidation.validateStep(1); };
window.formRegistry['llc-formation-part2-validation'] = function() { return window.llcFormationValidation.validateStep(2); };
window.formRegistry['llc-formation-part3-validation'] = function() { return window.llcFormationValidation.validateStep(3); };
window.formRegistry['llc-formation-part4-validation'] = function() { return window.llcFormationValidation.validateStep(4); };


/**
 * Master Interceptor Navigation Controller.
 * Mounts directly into window context to handle step routing cleanly.
 */
window.validateEntireLlcFormationWizard = function(currentStep) {
  console.log("[LLC Clean Engine] Validating active form parameters...");
  
  if (!window.llcFormationValidation || typeof window.llcFormationValidation.validateStep !== "function") {
    return true;
  }

  var totalValid = true;
  var accumulatedErrors = [];
  var stepsToValidate = (typeof currentStep === 'number' && currentStep >= 1 && currentStep <= 4) ? [currentStep] : [1,2,3,4];

  stepsToValidate.forEach(function(step) {
    var outcome = window.llcFormationValidation.validateStep(step);
    if (!outcome.isValid) {
      totalValid = false;
      accumulatedErrors = accumulatedErrors.concat(outcome.errors);
    }
  });

  var globalAlertBanner = document.getElementById("wizard-global-validation-alert");
  if (globalAlertBanner) {
    if (totalValid) {
      globalAlertBanner.style.setProperty("display", "none", "important");
      globalAlertBanner.innerHTML = "";
    } else {
      globalAlertBanner.style.setProperty("display", "block", "important");
      globalAlertBanner.innerHTML = `
        <div class="wizard-alert-content" style="display: flex; align-items: center; gap: 8px; padding: 12px; border: 1px solid #ef4444; background-color: #fef2f2; border-radius: 6px;">
          <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i>
          <span style="color: #991b1b; font-size: 0.85rem; font-weight: 600;">
            <strong>Action Required:</strong> Please resolve the form errors (${accumulatedErrors.length}) highlighted below to move forward.
          </span>
        </div>
      `;
      
      setTimeout(function() {
        if (typeof window.scrollToFirstActiveValidationErrorNode === "function") {
          window.scrollToFirstActiveValidationErrorNode();
        }
      }, 50);
    }
  }
  return totalValid;
};

window.validateLlcWizard = window.validateEntireLlcFormationWizard;

/**
 * Conditional View Workflow Toggles for Custom NAICS Injections.
 */
window.toggleCustomNaicsInputWorkflow = function(selectedValue) {
  const wrapper = document.getElementById("llc_custom_naics_wrapper");
  const field = document.getElementById("llc_custom_naics_description");
  if (!wrapper) return;

  if (selectedValue === "other") {
    wrapper.style.setProperty("display", "flex", "important");
    if (field) field.setAttribute("required", "required");
  } else {
    wrapper.style.setProperty("display", "none", "important");
    if (field) {
      field.removeAttribute("required");
      field.value = "";
      field.style.border = "";
    }
  }
};

/**
 * Conditional Parameter State Layout Toggles for Registered Agent.
 */
window.toggleRegisteredAgentConditionalFields = function(selectedValue) {
  var wrapper = document.getElementById("llc_custom_ra_wrapper");
  if (!wrapper) return;
  var inputs = wrapper.querySelectorAll("input, select");

  if (selectedValue === "custom") {
    wrapper.style.setProperty("display", "flex", "important");
    window.customSelectedRegisteredAgentServiceActive = false;
    if (window.currentCartState) window.currentCartState.registeredAgentAddon = false;
    inputs.forEach(function(el) { el.setAttribute("required", "required"); });
  } else {
    wrapper.style.setProperty("display", "none", "important");
    
    var coreRegistry = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages || {};
    var chosenService = coreRegistry[window.routeActiveServiceKey] || {};
    var activePlanKey = window.routeActivePlanKey || "";
    var activePlanDetails = chosenService.plans?.[activePlanKey] || chosenService[activePlanKey] || {};
    var inclusionsListText = JSON.stringify(activePlanDetails.bullets || chosenService.bullets || "").toLowerCase();
    
    var isAgentAlreadyIncludedInBasePrice = inclusionsListText.includes("agent") && (inclusionsListText.includes("free") || inclusionsListText.includes("included"));
    var isAgentAddonClickRequired = !isAgentAlreadyIncludedInBasePrice;
    
    window.customSelectedRegisteredAgentServiceActive = isAgentAddonClickRequired;
    if (window.currentCartState) window.currentCartState.registeredAgentAddon = isAgentAddonClickRequired;
    
    inputs.forEach(function(el) {
      el.removeAttribute("required");
      el.value = "";
      el.style.border = "";
    });
  }

  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  } else if (typeof window.updateWizardFinalTotalAmountMatrix === "function") {
    window.updateWizardFinalTotalAmountMatrix();
  }
};


/**
 * Toggles visibility for manager names text input block.
 */
window.toggleLlcManagerFieldsMatrix = function(selectedValue) {
  var wrapper = document.getElementById("llc_manager_names_wrapper");
  if (!wrapper) return;
  var isManagerManaged = selectedValue === "manager-managed";
  wrapper.style.setProperty("display", isManagerManaged ? "flex" : "none", "important");
  if (!isManagerManaged) {
    var textareaField = document.getElementById("llc_manager_names");
    if (textareaField) {
      textareaField.value = "";
      textareaField.style.border = "";
    }
  }
};

/**
 * Toggles visibility for the corporate expiration calendar picker.
 */
window.toggleLlcDurationDateVisibility = function(selectedValue) {
  var wrapper = document.getElementById("llc_duration_date_wrapper");
  if (!wrapper) return;
  var isTermSpecified = selectedValue === "specified";
  wrapper.style.setProperty("display", isTermSpecified ? "flex" : "none", "important");
  if (!isTermSpecified) {
    var dateInput = document.getElementById("llc_expiration_date");
    if (dateInput) {
      dateInput.value = "";
      dateInput.style.border = "";
    }
  }
};

/**
 * Toggles the conditional manual EIN input and cart upsell states.
 */
window.toggleEinConditionalWorkflow = function(selectedValue) {
  var manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
  var isExistingEinActive = selectedValue === "yes";
  if (manualEinWrapper) {
    manualEinWrapper.style.setProperty("display", isExistingEinActive ? "flex" : "none", "important");
    if (!isExistingEinActive) {
      var einInput = document.getElementById("llc_existing_ein_field");
      if (einInput) {
        einInput.value = "";
        einInput.style.border = "";
      }
    }
  }
  var isEinAddonPurchased = selectedValue === "no-buy";
  window.customSelectedEinProcurementServiceActive = isEinAddonPurchased;
  if (window.currentCartState) {
    window.currentCartState.einProcurementAddon = isEinAddonPurchased;
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  } else if (typeof window.updateWizardFinalTotalAmountMatrix === "function") {
    window.updateWizardFinalTotalAmountMatrix();
  }
};

/**
 * Appends a new, structurally decoupled member card into the DOM matrix.
 * 🛡️ FIXED: Automatically triggers input validation listeners on dynamically injected child elements.
 */
window.appendNewLlcMemberRecordFieldNode = function() {
  var membersRootContainer = document.getElementById("llc_members_container");
  if (!membersRootContainer) return;

  var currentMemberCount = membersRootContainer.querySelectorAll(".member-record-card").length + 1;
  var stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? 
    window.buildGlobalUsaStateDropdownOptionsHtml("") : "";

  var cardNode = document.createElement("div");
  cardNode.className = "member-record-card";
  cardNode.id = "member_card_" + currentMemberCount;
  cardNode.style.cssText = "background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 16px; position: relative; display: block;";
  cardNode.innerHTML = `
    <span style="font-weight: 800; font-size: 0.8rem; color: #10b981; text-transform: uppercase;">LLC Member # ${currentMemberCount} Records</span>
    <button type="button" onclick="this.parentElement.remove(); if(typeof window.cacheAndRestoreWizardFormStatesVanilla === 'function') { window.cacheAndRestoreWizardFormStatesVanilla(false); }" style="position: absolute; top: 12px; right: 12px; background: transparent; border: none; color: #ef4444; font-weight: 700; cursor: pointer; font-size: 0.8rem;">
      <i class="fa-solid fa-trash-can"></i> Remove
    </button>
    <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 12px; width: 100%; box-sizing: border-box;">
      <div class="wizard-input-group" style="width: 100%; margin: 0;">
        <label for="member_name_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Full Legal Name *</label>
        <input type="text" id="member_name_${currentMemberCount}" name="member_name_${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; padding: 0 8px;">
        <div class="wizard-error-message" id="err_member_name_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="member_street_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Street Address *</label>
        <input type="text" id="member_street_${currentMemberCount}" name="member_street_${currentMemberCount}" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; padding: 0 8px;">
        <div class="wizard-error-message" id="err_member_street_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="width: calc(50% - 8px); min-width: 240px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="member_suite_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Suite, building, etc. (Optional)</label>
        <input type="text" id="member_suite_${currentMemberCount}" name="member_suite_${currentMemberCount}" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; padding: 0 8px;">
      </div>
      <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="member_city_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">City *</label>
        <input type="text" id="member_city_${currentMemberCount}" name="member_city_${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; padding: 0 8px;">
        <div class="wizard-error-message" id="err_member_city_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="member_state_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">State *</label>
        <select id="member_state_${currentMemberCount}" name="member_state_${currentMemberCount}" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;">${stateOptions}</select>
        <div class="wizard-error-message" id="err_member_state_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="width: calc(33.33% - 11px); min-width: 150px; flex-grow: 1; margin: 0; box-sizing: border-box;">
        <label for="member_zip_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Zip *</label>
        <input type="text" id="member_zip_${currentMemberCount}" name="member_zip_${currentMemberCount}" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; padding: 0 8px;">
        <div class="wizard-error-message" id="err_member_zip_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    </div>`;

  membersRootContainer.appendChild(cardNode);

  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(false);
  }
};

/**
 * Part 17: Unified Text Masking Framework & Scroll Alignment Suite.
 * Scoped safely under the window context to survive dynamic script refreshes.
 */
(function() {
  /**
   * Automatically formats and limits numeric user text configurations while typing.
   * @param {Event} event - Native input event stream object pointer.
   */
  window.handleGlobalInputMaskingWorkflow = function(event) {
    var target = event.target;
    if (!target) return;

    // 1. Force strict numeric limits on fields requiring positive integer inputs
    if (target.classList.contains('validate-numbers')) {
      var rawDigits = target.value.replace(/\D/g, '');

      // Handle Federal Employer Identification Number (EIN) hyphen placements (00-0000000)
      if (target.id === 'llc_existing_ein_field') {
        var clippedEin = rawDigits.substring(0, 9);
        if (clippedEin.length > 2) {
          target.value = clippedEin.substring(0, 2) + '-' + clippedEin.substring(2);
        } else {
          target.value = clippedEin;
        }
      }
      // Handle standard 5-digit United States ZIP constraints
      else if (target.id.includes('zip') || target.id.includes('postal')) {
        target.value = rawDigits.substring(0, 5);
      }
      // General numerical constraints fallback
      else {
        target.value = rawDigits;
      }
    }

    // 2. Clear out numbers from inputs restricted to alphabet letters only
    if (target.classList.contains('validate-letters')) {
      target.value = target.value.replace(/[0-9]/g, '');
    }
  };

  /** 
 * Adjusts viewport scroll offsets when error alerts push the wizard layout down. 
 * Ensures form validation blocks align cleanly without hiding underneath header nodes. 
 */ 
window.scrollToFirstActiveValidationErrorNode = function() { 
  // Find the first visible element marked with an explicit red invalid border state 
  var activeErrorElements = Array.from(document.querySelectorAll('.wizard-input-field, input, select, textarea')) 
    .filter(function(node) { 
      return node.style.borderColor === 'rgb(239, 68, 68)' || node.style.border.includes('#ef4444') || node.style.border.includes('239, 68, 68'); 
    }); 

  var alertBanner = document.getElementById('wizard-global-validation-alert'); 
  var targetNodeForScroll = alertBanner && alertBanner.style.display !== 'none' ? alertBanner : activeErrorElements[0]; 

  if (targetNodeForScroll) { 
    console.log("[Scroll Suite] Validation error found. Adjusting viewport tracking coordinates..."); 
    
    // Calculate top spacing parameters to prevent elements from getting pinned beneath sticky navigation headers 
    var headerOffsetSpacing = 120; 
    var targetElementPosition = targetNodeForScroll.getBoundingClientRect().top + window.pageYOffset; 
    var optimizedScrollPosition = targetElementPosition - headerOffsetSpacing; 

    // FIX: Extract current horizontal scroll position to prevent the columns from snapping to the left
    var currentLeftPosition = window.pageXOffset || document.documentElement.scrollLeft;

    window.scrollTo({ 
      top: optimizedScrollPosition, 
      left: currentLeftPosition, // Forces the browser to maintain the column's horizontal alignment
      behavior: 'smooth' 
    }); 
  } 
};


  /**
   * Automatically initializes monitoring listeners across global window interactions.
   */
  window.initializeInputSuiteListeners = function() {
    var formBody = document.body;
    if (!formBody) return;

    // Detach legacy listeners first to guarantee clean re-loads on dynamic scripts injections
    formBody.removeEventListener('input', window.handleGlobalInputMaskingWorkflow);
    formBody.addEventListener('input', window.handleGlobalInputMaskingWorkflow);
    console.log("[Masking Suite] Dynamic listeners successfully bound to document nodes.");
  };

  // Run initialization routines instantly upon script compilation evaluation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initializeInputSuiteListeners);
  } else {
    window.initializeInputSuiteListeners();
  }
})();

console.log("[LLC Clean Engine] Complete infrastructure rewrite finalized, active, and loop-safe.");
