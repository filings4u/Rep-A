// ============================================================================ //
// 🏛️ FILINGS4U, LLC - UNIFIED SYSTEM WIZARD REBOOT ENGINE                      //
// ============================================================================ //

// Wipe out any old registry instances to prevent duplicate fields from rendering
window.formRegistry = {};
window.llcFormationValidation = {};

/**
 * Generates an HTML dropdown option block containing all 50 US States.
 * @param {string} [selectedStateCode] - The 2-digit uppercase code to pre-select.
 * @returns {string} Concatenated option tags markup string.
 */
function buildGlobalUsaStateDropdownOptionsHtml(selectedStateCode) {
  const states = [
    "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
    "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
    "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
    "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
    "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
  ];
  
  const normalizedSelection = String(selectedStateCode || "").toUpperCase().trim();
  let optionsHtml = '<option value="">-- Select State --</option>';
  
  states.forEach(state => {
    const isSelected = (normalizedSelection === state) ? "selected" : "";
    optionsHtml += `<option value="${state}" ${isSelected}>${state}</option>`;
  });
  
  return optionsHtml;
}

window.buildGlobalUsaStateDropdownOptionsHtml = buildGlobalUsaStateDropdownOptionsHtml;

window.formRegistry = window.formRegistry || {};

window.formRegistry = window.formRegistry || {};

// --- STEP 1 LAYOUT: Section 1 Business Info + Address Grid + NAICS Purpose ---
window.formRegistry['llc-formation-part1-layout'] = function(stateDropdownOptionsHtml) {
  console.log("[LLC Layout Enforcer] Restructuring Step 1 components...");
  var jurisdiction = window.selectedFormationStateCode || "TX";
  
  var activeStateOptions = stateDropdownOptionsHtml || 
    (typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml(jurisdiction) : window.buildGlobalUsaStateDropdownOptionsHtml(jurisdiction));
    
  var blankStatesOptions = typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml("") : window.buildGlobalUsaStateDropdownOptionsHtml("");

  var headingHtml = [
    '<div style="width: 100%; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 12px; margin-bottom: 16px;">',
      '<h3 style="color: #0a1f44; font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>',
    '</div>',
    '<div style="display: flex; flex-direction: column; gap: 16px; width: 100%; margin-bottom: 20px;">',
      '<div class="wizard-input-group" style="width: 100%; margin: 0;">',
        '<label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 4px;">Business Headquarters State *</label>',
        '<select name="headquarters_state" id="headquarters_state" required class="wizard-input-field" style="width:100%; height:40px; box-sizing:border-box;">' + blankStatesOptions + '</select>',
      '</div>',
      '<div class="wizard-input-group" style="width: 100%; margin: 0;">',
        '<label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 4px;">Business Operating State *</label>',
        '<select name="formation_state" id="wizard-target-jurisdiction" required class="wizard-input-field" style="width:100%; height:40px; box-sizing:border-box;" onchange="window.selectedFormationStateCode = this.value; if(typeof updateDynamicPricingMatrixVanilla === \'function\') updateDynamicPricingMatrixVanilla();">' + activeStateOptions + '</select>',
      '</div>',
    '</div>'
  ].join('');

  var addressGridHtml = [
    '<div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px; width: 100%; box-sizing: border-box; margin-top: 16px;">',
      '<div class="wizard-input-group" style="grid-column: span 12; width: 100%; margin: 0;">',
        '<label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; display: block; margin-bottom: 4px;">Proposed LLC Name *</label>',
        '<input type="text" id="llc_proposed_name" name="ent_legal_name" required placeholder="Example Logistics LLC" class="wizard-input-field" style="width:100%; height:40px; box-sizing:border-box; padding: 8px;" onblur="if(typeof validateLlcNameSuffix===\'function\')validateLlcNameSuffix(this);">',
        '<span style="font-size: 0.7rem; color: #64748b; font-weight: 500; display: block; margin-top: 4px;">Must include "LLC" or "Limited Liability Company".</span>',
      '</div>',
      '<div class="wizard-input-group" style="grid-column: span 6; width: 100%; margin: 0;">',
        '<label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 4px;">Business Address *</label>',
        '<input type="text" id="ent_address_street" name="ent_address_street" required class="wizard-input-field" placeholder="Street address" style="width:100%; height:40px; box-sizing:border-box; padding: 8px;">',
      '</div>',
      '<div class="wizard-input-group" style="grid-column: span 6; width: 100%; margin: 0;">',
        '<label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 4px;">Suite, building, etc. (Optional)</label>',
        '<input type="text" id="ent_address_suite" name="ent_address_suite" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width:100%; height:40px; box-sizing:border-box; padding: 8px;">',
      '</div>',
      '<div class="wizard-input-group" style="grid-column: span 4; width: 100%; margin: 0;">',
        '<label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 4px;">Business City *</label>',
        '<input type="text" id="ent_address_city" name="ent_address_city" required class="wizard-input-field" placeholder="City" style="width:100%; height:40px; box-sizing:border-box; padding: 8px;">',
      '</div>',
      '<div class="wizard-input-group" style="grid-column: span 4; width: 100%; margin: 0;">',
        '<label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 4px;">Business State *</label>',
        '<select id="business_state" name="business_state" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; box-sizing:border-box; padding: 8px;">' + blankStatesOptions + '</select>',
      '</div>',
      '<div class="wizard-input-group" style="grid-column: span 4; width: 100%; margin: 0;">',
        '<label style="font-weight: 700; font-size: 0.85rem; color: #0a1f44; display: block; margin-bottom: 4px;">Business Zip Code *</label>',
        '<input type="text" id="ent_address_zip" name="ent_address_zip" required class="wizard-input-field validate-numbers" maxlength="5" placeholder="5-digit ZIP" style="width:100%; height:40px; box-sizing:border-box; padding: 8px;">',
      '</div>',
      
      '<!-- MOVED PURPOSE/ACTIVITIES FIELD DIRECTLY INSIDE SECTION 1 GRID -->',
      '<div class="wizard-input-group" style="grid-column: span 12; width: 100%; margin-top: 12px;">',
        '<label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: #0a1f44; display: block; margin-bottom: 4px;">Business Purpose / Activities *</label>',
        '<select id="llc_business_purpose" name="business_purpose_naics" required class="wizard-input-field" style="width:100%; height:40px; box-sizing:border-box;" onchange="if(typeof window.toggleCustomNaicsInputWorkflow===\'function\') window.toggleCustomNaicsInputWorkflow(this.value)">',
          '<option value="">-- Select Industry Classification --</option>',
          '<option value="541110">Offices of Lawyers (NAICS 541110)</option>',
          '<option value="541211">Offices of Certified Public Accountants (NAICS 541211)</option>',
          '<option value="541330">Engineering Services (NAICS 541330)</option>',
          '<option value="541511">Custom Computer Programming Services (NAICS 541511)</option>',
          '<option value="541611">Administrative Management Consulting Services (NAICS 541611)</option>',
          '<option value="541810">Advertising Agencies (NAICS 541810)</option>',
          '<option value="621111">Offices of Physicians (NAICS 621111)</option>',
          '<option value="621210">Offices of Dentists (NAICS 621210)</option>',
          '<option value="236115">New Single-Family Housing Construction (NAICS 236115)</option>',
          '<option value="531210">Offices of Real Estate Agents and Brokers (NAICS 531210)</option>',
          '<option value="722511">Full-Service Restaurants (NAICS 722511)</option>',
          '<option value="454110">Electronic Shopping (NAICS 454110)</option>',
          '<option value="484121">General Freight Trucking (NAICS 484121)</option>',
          '<option value="561730">Landscaping Services (NAICS 561730)</option>',
          '<option value="812112">Beauty Salons (NAICS 812112)</option>',
          '<option value="541430">Graphic Design Services (NAICS 541430)</option>',
          '<option value="561499">All Other Business Support Services (NAICS 561499)</option>',
          '<option value="453998">All Other Miscellaneous Store Retailers (NAICS 453998)</option>',
          '<option value="531311">Residential Property Managers (NAICS 531311)</option>',
          '<option value="484220">Specialized Freight Trucking, Local (NAICS 484220)</option>',
          '<option value="541990">All Other Professional, Scientific, Technical Services (NAICS 541990)</option>',
          '<option value="other">Other / Custom Industry Specification</option>',
        '</select>',
      '</div>',
      
      '<!-- CONDITIONAL EXTENSION DISCOVERY TEXT PANEL -->',
      '<div id="llc_custom_naics_wrapper" style="grid-column: span 12; display: none; flex-direction: column; gap: 8px; margin-top: 4px; width: 100%;">',
        '<label for="llc_custom_naics_description" style="font-weight: 700; font-size: 0.85rem; color: #0a1f44;">Please describe your custom business activities *</label>',
        '<textarea id="llc_custom_naics_description" name="llc_custom_naics_description" rows="2" class="wizard-input-field" placeholder="Example: E-commerce storefront retailing handcrafted bamboo goods..." style="width:100%; border-radius:6px; border:1px solid #cbd5e1; padding:8px; box-sizing:border-box; font-family: inherit; font-weight: 600;"></textarea>',
        '<div class="wizard-error-message" id="err_llc_custom_naics_description" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
    '</div>'
  ].join('');

  return headingHtml + addressGridHtml;
};

// --- RENDER SYSTEM STITCH MATRIX CLOSURE ---
window.formRegistry['llc-formation-form-master'] = function(stateDropdownOptionsHtml) {
  console.log("[LLC Clean Engine] Re-assembling all layout blocks into structural rows...");
  
  // 1. Gather Section 1 Base Stack + Forced Grid Address rows
  var step1BaseDropdowns = window.formRegistry['llc-formation-part1-layout'](stateDropdownOptionsHtml || "");
  var step1AddressGridRows = typeof buildBusinessAddressLayoutHtml === "function" ? buildBusinessAddressLayoutHtml() : "";
  var fullSection1Html = step1BaseDropdowns + step1AddressGridRows;
  
  // 2. Gather Section 2 Registered Agent & Business Purpose
  var htmlPart2 = window.formRegistry['llc-formation-part2-layout']();
  
  // 3. Gather Section 3 Membership Registry (Full Width Layout)
  var htmlPart3 = window.formRegistry['llc-formation-part3-layout']();
  
  // 4. Gather Section 4 Management & Tax Horizon Options
  var htmlPart4 = typeof buildManagementAndTaxOptionsLayoutHtml === "function" 
    ? buildManagementAndTaxOptionsLayoutHtml() 
    : "";

  // Concatenate blocks in sequential order to force side-by-side grid alignment
  return fullSection1Html + htmlPart2 + htmlPart3 + htmlPart4;
};

// Re-bind back into the legacy global parent functions cleanly
function buildLlcFormationFieldsLayoutHtml() {
  return window.formRegistry['llc-formation-form-master']();
}

window.buildLlcFormationFieldsLayoutHtml = buildLlcFormationFieldsLayoutHtml;
console.log("[Wizard Grid Matrix] Render pipelines successfully verified and active.");


// --- STEP 2 LAYOUT: Section 2 Registered Agent (Completely Independent) ---
window.formRegistry['llc-formation-part2-layout'] = function() {
  console.log("[LLC Layout Enforcer] Compiling Step 2 Registered Agent layer...");
  
  var blankStatesOptions = typeof window.getUsaStatesHtml === "function" 
    ? window.getUsaStatesHtml("") 
    : window.buildGlobalUsaStateDropdownOptionsHtml("");

  return [
    '<!-- SECTION 2: REGISTERED AGENT -->',
    '<div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 24px; width: 100%;">',
      '<h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent</h3>',
    '</div>',
    '<div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; width: 100%;">',
      '<label for="llc_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Do you have a Registered Agent already? *</label>',
      '<select id="llc_ra_choice" name="llc_ra_choice" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1; font-weight: 600; box-sizing: border-box;" onchange="if(typeof window.toggleRegisteredAgentConditionalFields===\'function\') window.toggleRegisteredAgentConditionalFields(this.value)">',
        '<option value="" disabled selected>Choose...</option>',
        '<option value="custom">Yes, I want to add the information below</option>',
        '<option value="filings4u">No, I want to use filings4u - $75/ yr.</option>',
      '</select>',
    '</div>',
    
    '<!-- CONDITIONAL CUSTOM AGENT WRAPPER (CLEAN SIDE-BY-SIDE DESIGN) -->',
    '<div id="llc_custom_ra_wrapper" style="grid-column: span 2; display: none; flex-wrap: wrap; gap: 16px; margin-top: 16px; width: 100%; box-sizing: border-box;">',
      '<div class="wizard-input-group" style="width: 100%; margin: 0;">',
        '<label for="ra_custom_name" style="font-size:0.75rem; font-weight:700; color:#64748b;">Registered Agent Name *</label>',
        '<input type="text" id="ra_custom_name" name="ra_custom_name" class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
        '<div class="wizard-error-message" id="err_ra_custom_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
      '<div class="wizard-input-group" style="width: 48%; min-width: 240px; flex-grow: 1; margin: 0;">',
        '<label for="ra_custom_street" style="font-size:0.75rem; font-weight:700; color:#64748b;">Physical Street Address (No P.O. Boxes) *</label>',
        '<input type="text" id="ra_custom_street" name="ra_custom_street" class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
        '<div class="wizard-error-message" id="err_ra_custom_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
      '<div class="wizard-input-group" style="width: 48%; min-width: 240px; flex-grow: 1; margin: 0;">',
        '<label for="ra_custom_suite" style="font-size:0.75rem; font-weight:700; color:#64748b;">Suite, building, etc. (Optional)</label>',
        '<input type="text" id="ra_custom_suite" name="ra_custom_suite" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
      '</div>',
      '<div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">',
        '<label for="ra_custom_city" style="font-size:0.75rem; font-weight:700; color:#64748b;">City *</label>',
        '<input type="text" id="ra_custom_city" name="ra_custom_city" class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
        '<div class="wizard-error-message" id="err_ra_custom_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
      '<div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">',
        '<label for="ra_custom_state" style="font-size:0.75rem; font-weight:700; color:#64748b;">State *</label>',
        '<select id="ra_custom_state" name="ra_custom_state" class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;">' + blankStatesOptions + '</select>',
        '<div class="wizard-error-message" id="err_ra_custom_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
      '<div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">',
        '<label for="ra_custom_zip" style="font-size:0.75rem; font-weight:700; color:#64748b;">Zip *</label>',
        '<input type="text" id="ra_custom_zip" name="ra_custom_zip" maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
        '<div class="wizard-error-message" id="err_ra_custom_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
    '</div>'
  ].join('');
};
/**
 * Handles conditional layout toggles for Custom NAICS Description text areas.
 * @param {string} selectedValue - Active industry dropdown choice.
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

console.log("[LLC Layout Enforcer] Layout restructures completely completed and live.");


window.formRegistry = window.formRegistry || {};

window.formRegistry = window.formRegistry || {};

// --- STEP 3 LAYOUT: Realignment of Section 3 Membership Strings ---
window.formRegistry['llc-formation-part3-layout'] = function() {
  console.log("[LLC Realignment Fix] Rebuilding Section 3 standalone container blocks...");
  
  var stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" 
    ? window.buildGlobalUsaStateDropdownOptionsHtml("") 
    : '<option value="TX">Texas (TX)</option>';

  return [
    '<!-- SECTION 3: MEMBERSHIP REGISTRY (ISOLATED STANDALONE CONTAINER) -->',
    '<div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 24px; width: 100%;">',
      '<h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">3. LLC Membership Registry</h3>',
    '</div>',
    
    '<div class="wizard-input-group" style="grid-column: span 2; width: 100%; margin: 0; margin-top: 16px;">',
      '<div id="llc_members_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%; box-sizing: border-box;">',
        
        '<!-- MEMBERSHIP RECORD CARD PANEL -->',
        '<div class="member-record-card" id="member_card_1" style="background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 20px; border-radius: 8px; width: 100%; box-sizing: border-box; display: block;">',
          '<span style="font-weight: 800; font-size: 0.8rem; color: var(--primary, #10b981); text-transform: uppercase;">LLC Member #1 Records</span>',
          '<div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 12px; width: 100%; box-sizing: border-box;">',
            
            '<div class="wizard-input-group" style="width: 100%; margin: 0;">',
              '<label for="member_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Full Legal Name *</label>',
              '<input type="text" id="member_name_1" name="member_name_1" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
              '<div class="wizard-error-message" id="err_member_name_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
            '</div>',
            
            '<div class="wizard-input-group" style="width: 48%; min-width: 240px; flex-grow: 1; margin: 0;">',
              '<label for="member_street_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Street Address *</label>',
              '<input type="text" id="member_street_1" name="member_street_1" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
              '<div class="wizard-error-message" id="err_member_street_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
            '</div>',
            
            '<div class="wizard-input-group" style="width: 48%; min-width: 240px; flex-grow: 1; margin: 0;">',
              '<label for="member_suite_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Suite, building, etc. (Optional)</label>',
              '<input type="text" id="member_suite_1" name="member_suite_1" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
            '</div>',
            
            '<div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">',
              '<label for="member_city_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">City *</label>',
              '<input type="text" id="member_city_1" name="member_city_1" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
              '<div class="wizard-error-message" id="err_member_city_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
            '</div>',
            
            '<div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">',
              '<label for="member_state_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">State *</label>',
              '<select id="member_state_1" name="member_state_1" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;">' + stateOptions + '</select>',
              '<div class="wizard-error-message" id="err_member_state_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
            '</div>',
            
            '<div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">',
              '<label for="member_zip_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Zip *</label>',
              '<input type="text" id="member_zip_1" name="member_zip_1" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">',
              '<div class="wizard-error-message" id="err_member_zip_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
            '</div>',
            
          '</div>',
        '</div>',
      '</div>',
      '<button type="button" onclick="if(typeof window.appendNewLlcMemberRecordFieldNode === \'function\') { window.appendNewLlcMemberRecordFieldNode(); }" style="margin-top: 16px; background: transparent; border: 1px dashed var(--primary, #10b981); color: var(--primary, #10b981); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-plus"></i> Add Additional Member</button>',
    '</div>'
  ].join('');
};


// --- STEP 4 LAYOUT: Standalone Section 4 Management Options ---
function buildManagementAndTaxOptionsLayoutHtml() {
  console.log("[LLC Realignment Fix] Compiling Section 4 standalone panel...");
  
  const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
  const einMetaRecord = centralRegistrySource["customSelectedEinProcurementServiceActive"] || {};
  const liveEinFee = parseFloat(einMetaRecord.price || 79.00).toFixed(2);

  return [
    '<!-- SECTION 4: MANAGEMENT OPTIONS (ISOLATED STANDALONE CONTAINER) -->',
    '<div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 24px; width: 100%;">',
      '<h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Management & Options</h3>',
    '</div>',
    '<div style="display: flex; flex-wrap: wrap; gap: 16px; width: 100%; margin-top: 16px; box-sizing: border-box;">',
      
      '<div class="wizard-input-group" style="width: 100%; margin: 0;">',
        '<label for="llc_management_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;">Management Type</label>',
        '<select id="llc_management_type" name="llc_management_type" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1; font-weight: 600; box-sizing: border-box;" onchange="if(typeof window.toggleLlcManagerFieldsMatrix===\'function\') window.toggleLlcManagerFieldsMatrix(this.value)">',
          '<option value="member-managed" selected>Member-Managed</option>',
          '<option value="manager-managed">Manager-Managed</option>',
        '</select>',
      '</div>',
      
      '<div id="llc_manager_names_wrapper" style="width: 100%; display: none; flex-direction: column; gap: 8px;">',
        '<label for="llc_manager_names" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Manager Names & Addresses</label>',
        '<textarea id="llc_manager_names" name="llc_manager_names" rows="2" class="wizard-input-field" style="width:100%; border-radius:6px; border:1px solid #cbd5e1; padding:8px; box-sizing:border-box; font-family: inherit; font-weight: 600;"></textarea>',
        '<div class="wizard-error-message" id="err_llc_manager_names" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
      
      '<div class="wizard-input-group" style="width: 48%; min-width: 240px; flex-grow: 1; margin: 0;">',
        '<label for="llc_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;">Lifespan Horizon</label>',
        '<select id="llc_duration_choice" name="llc_duration_choice" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1; font-weight: 600; box-sizing: border-box;" onchange="if(typeof window.toggleLlcDurationDateVisibility===\'function\') window.toggleLlcDurationDateVisibility(this.value)">',
          '<option value="perpetual" selected>Perpetual Duration</option>',
          '<option value="specified">Specified Term</option>',
        '</select>',
      '</div>',
      
      '<div id="llc_duration_date_wrapper" style="width: 48%; min-width: 240px; flex-grow: 1; display: none; flex-direction: column; gap: 8px;">',
        '<label for="llc_expiration_date" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Expiration Date</label>',
        '<input type="date" id="llc_expiration_date" name="llc_expiration_date" class="wizard-input-field" style="width:100%; height:40px; border:1px solid #cbd5e1; font-weight: 600; box-sizing: border-box;">',
        '<div class="wizard-error-message" id="err_llc_expiration_date" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
      
      '<div class="wizard-input-group" style="width: 100%; margin: 0;">',
        '<label for="llc_ein_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;">Do you possess an active EIN?</label>',
        '<select id="llc_ein_status" name="llc_ein_status" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1; font-weight: 600; box-sizing: border-box;" onchange="if(typeof window.toggleEinConditionalWorkflow===\'function\') window.toggleEinConditionalWorkflow(this.value)">',
          '<option value="" disabled selected>Choose...</option>',
          '<option value="yes">Yes, I possess an active EIN</option>',
          `<option value="no-buy">No, I need an EIN — Add Procurement ($${liveEinFee})</option>`,
          '<option value="no-decline">No, I decline procurement services</option>',
        '</select>',
      '</div>',
      
      '<div id="llc_manual_ein_wrapper" style="width: 100%; display: none; flex-direction: column; gap: 8px;">',
        '<label for="llc_existing_ein_field" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Enter Existing EIN</label>',
        '<input type="text" id="llc_existing_ein_field" name="llc_existing_ein_field" placeholder="00-0000000" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border:1px solid #cbd5e1; font-weight: 600; box-sizing: border-box;">',
        '<div class="wizard-error-message" id="err_llc_existing_ein_field" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>',
      '</div>',
      
    '</div>'
  ].join('');
}


// --- MASTER COMPILATION ROW PIPELINE INTEGRATOR ---
window.formRegistry['llc-formation-form-master'] = function(stateDropdownOptionsHtml) {
  console.log("[LLC Realignment Fix] Patch-assembling wizard DOM sections side-by-side...");
  
  // 1. Compile Section 1: Business Info Base + Responsive Addresses + NAICS Industry drop-downs
  var step1Base = window.formRegistry['llc-formation-part1-layout'](stateDropdownOptionsHtml || "");
  var step1AddressesAndNAICS = typeof buildBusinessAddressLayoutHtml === "function" ? buildBusinessAddressLayoutHtml() : "";
  var fullSection1Html = step1Base + step1AddressesAndNAICS;
  
  // 2. Compile Section 2: Registered Agent Selection Drop-down & Hidden Custom Inputs Wrapper
  var fullSection2Html = window.formRegistry['llc-formation-part2-layout']();
  
  // 3. Compile Section 3: Fully Isolated Full-Width Membership Cards Registry Row Layout
  var fullSection3Html = window.formRegistry['llc-formation-part3-layout']();
  
  // 4. Compile Section 4: Standalone Management Structure, Term Horizons, and Tax Assets
  var fullSection4Html = typeof buildManagementAndTaxOptionsLayoutHtml === "function" 
    ? buildManagementAndTaxOptionsLayoutHtml() 
    : "";

  // Concatenate blocks sequentially with correct closing boundaries to prevent component bleed
  return fullSection1Html + fullSection2Html + fullSection3Html + fullSection4Html;
};

// Re-bind safely back up into the legacy framework context tree references
function buildLlcFormationFieldsLayoutHtml() {
  return window.formRegistry['llc-formation-form-master']();
}

window.buildLlcFormationFieldsLayoutHtml = buildLlcFormationFieldsLayoutHtml;
console.log("[Wizard Realignment Complete] DOM structural containers successfully isolated and active.");


// --- UNIFIED STEP-AWARE LLC VALIDATION SUITE ---
const llcFormationValidation = {
  validateStep: function(stepNumber) {
    const container = document.getElementById(`step-panel-${stepNumber}`) || 
                      document.getElementById(`step-${stepNumber}`) || 
                      document.body;
    
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => {
      if (!el) return;
      isValid = false;
      el.style.setProperty("border", "1px solid #ef4444", "important");
      if (!errors.includes(msg)) errors.push(msg);
      
      const errorMsgNode = document.getElementById("err_" + el.id) || 
                           el.parentElement?.querySelector(".wizard-error-message");
      if (errorMsgNode) {
        errorMsgNode.textContent = msg;
        errorMsgNode.style.setProperty("display", "block", "important");
      }
    };

    const clearError = (el) => {
      if (!el) return;
      el.style.border = "";
      const errorMsgNode = document.getElementById("err_" + el.id) || 
                           el.parentElement?.querySelector(".wizard-error-message");
      if (errorMsgNode) {
        errorMsgNode.style.setProperty("display", "none", "important");
        errorMsgNode.textContent = "";
      }
    };

    const isFieldActive = (el) => !!(el && (el.offsetWidth > 0 || el.offsetHeight > 0));

    // STEP 1 VALIDATION
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

    // STEP 2 VALIDATION
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
    }

    // STEP 3 VALIDATION
    if (stepNumber === 3) {
      const memberCards = container.querySelectorAll(".member-record-card");
      memberCards.forEach(card => {
        const idx = card.id.replace("member_card_", "");
        ['name', 'street', 'city', 'state', 'zip'].forEach(fieldKey => {
          const el = document.getElementById(`member_${fieldKey}_${idx}`);
          if (isFieldActive(el)) {
            if (!el.value.trim()) setError(el, `Member #${idx}: ${fieldKey.toUpperCase()} is required.`);
            else if (fieldKey === 'zip' && !/^\d{5}$/.test(el.value.trim())) setError(el, `Member #${idx}: Zip Code must be exactly 5 digits.`);
            else clearError(el);
          }
        });
      });
    }

    // STEP 4 VALIDATION
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
  }
};

window.formRegistry['llc-formation-part1-validation'] = function() { return llcFormationValidation.validateStep(1); };
window.formRegistry['llc-formation-part2-validation'] = function() { return llcFormationValidation.validateStep(2); };
window.formRegistry['llc-formation-part3-validation'] = function() { return llcFormationValidation.validateStep(3); };
window.formRegistry['llc-formation-part4-validation'] = function() { return llcFormationValidation.validateStep(4); };

/**
 * Master LLC Validation Interceptor Hook
 * Evaluates active wizard panel structures and handles alert element notifications.
 * @param {number} [currentStep] - The step number being analyzed.
 * @returns {boolean} True if all validation parameters pass cleanly.
 */
function validateEntireLlcFormationWizard(currentStep) {
  console.log("[LLC Clean Engine] Validating active form parameters...");
  
  if (!llcFormationValidation || typeof llcFormationValidation.validateStep !== "function") {
    return true;
  }

  let totalValid = true;
  let accumulatedErrors = [];

  // FIXED: Fallback array is now explicitly filled with steps 1, 2, 3, and 4
  const stepsToValidate = (typeof currentStep === 'number' && currentStep >= 1 && currentStep <= 4)
    ? [currentStep]
    : [1, 2, 3, 4];

  // Execute step validation routines sequentially
  stepsToValidate.forEach(step => {
    const outcome = llcFormationValidation.validateStep(step);
    if (!outcome.isValid) {
      totalValid = false;
      accumulatedErrors = accumulatedErrors.concat(outcome.errors);
    }
  });

  // Manage UI display updates for the global alert banner
  const globalAlertBanner = document.getElementById("wizard-global-validation-alert");
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
    }
  }

  return totalValid;
}

// Cleanly assign variables back onto global trackers with no duplicates
window.llcFormationValidation = llcFormationValidation;
window.validateEntireLlcFormationWizard = validateEntireLlcFormationWizard;
window.validateLlcWizard = validateEntireLlcFormationWizard;

console.log("[Validation Engine] Interceptor hooks fully verified and operational.");


/**
 * Toggles visibility layout configurations for custom third-party agent wrapper panels.
 */
function toggleRegisteredAgentConditionalFields(selectedValue) {
  var wrapper = document.getElementById("llc_custom_ra_wrapper");
  if (!wrapper) return;
  var inputs = wrapper.querySelectorAll("input, select");

  if (selectedValue === "custom") {
    wrapper.style.setProperty("display", "flex", "important");
    window.customSelectedRegisteredAgentServiceActive = false;
    if (window.currentCartState) window.currentCartState.registeredAgentAddon = false;
    inputs.forEach(el => el.setAttribute("required", "required"));
  } else {
    wrapper.style.setProperty("display", "none", "important");
    const coreRegistry = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages || {};
    const chosenService = coreRegistry[window.routeActiveServiceKey] || {};
    const activePlanKey = window.routeActivePlanKey || "";
    const activePlanDetails = chosenService.plans?.[activePlanKey] || chosenService[activePlanKey] || {};
    const inclusionsListText = JSON.stringify(activePlanDetails.bullets || chosenService.bullets || "").toLowerCase();
    const isAgentAlreadyIncludedInBasePrice = inclusionsListText.includes("agent") && (inclusionsListText.includes("free") || inclusionsListText.includes("included"));

    const isAgentAddonClickRequired = !isAgentAlreadyIncludedInBasePrice;
    window.customSelectedRegisteredAgentServiceActive = isAgentAddonClickRequired;
    if (window.currentCartState) window.currentCartState.registeredAgentAddon = isAgentAddonClickRequired;

    inputs.forEach(el => {
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
}

/**
 * Toggles visibility layout configurations for the LLC Manager Names input fields.
 */
function toggleLlcManagerFieldsMatrix(selectedValue) {
  const wrapper = document.getElementById("llc_manager_names_wrapper");
  if (!wrapper) return;
  const isManagerManaged = selectedValue === "manager-managed";
  wrapper.style.setProperty("display", isManagerManaged ? "flex" : "none", "important");
  if (!isManagerManaged) {
    const textareaField = document.getElementById("llc_manager_names");
    if (textareaField) { textareaField.value = ""; textareaField.style.border = ""; }
  }
}

/**
 * Toggles visibility layout configurations for specified corporate lifespan expiration dates.
 */
function toggleLlcDurationDateVisibility(selectedValue) {
  const wrapper = document.getElementById("llc_duration_date_wrapper");
  if (!wrapper) return;
  const isTermSpecified = selectedValue === "specified";
  wrapper.style.setProperty("display", isTermSpecified ? "flex" : "none", "important");
  if (!isTermSpecified) {
    const dateInput = document.getElementById("llc_expiration_date");
    if (dateInput) { dateInput.value = ""; dateInput.style.border = ""; }
  }
}

/**
 * Handles conditional layout toggles for EIN procurement options.
 */
function toggleEinConditionalWorkflow(selectedValue) {
  const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
  const isExistingEinActive = selectedValue === "yes";
  if (manualEinWrapper) {
    manualEinWrapper.style.setProperty("display", isExistingEinActive ? "flex" : "none", "important");
    if (!isExistingEinActive) {
      const einInput = document.getElementById("llc_existing_ein_field");
      if (einInput) { einInput.value = ""; einInput.style.border = ""; }
    }
  }

  const isEinAddonPurchased = selectedValue === "no-buy";
  window.customSelectedEinProcurementServiceActive = isEinAddonPurchased;
  if (window.currentCartState) window.currentCartState.einProcurementAddon = isEinAddonPurchased;

  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  } else if (typeof window.updateWizardFinalTotalAmountMatrix === "function") {
    window.updateWizardFinalTotalAmountMatrix();
  }
}

/**
 * Dynamically appends a fresh, un-squished, isolated LLC Member information card.
 */
function appendNewLlcMemberRecordFieldNode() {
  const membersRootContainer = document.getElementById("llc_members_container");
  if (!membersRootContainer) return;
  const currentMemberCount = membersRootContainer.querySelectorAll(".member-record-card").length + 1;
  const stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? window.buildGlobalUsaStateDropdownOptionsHtml("") : "";

  const cardNode = document.createElement("div");
  cardNode.className = "member-record-card";
  cardNode.id = `member_card_${currentMemberCount}`;
  cardNode.style.cssText = "background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 16px; position: relative; display: block;";

  cardNode.innerHTML = `
    <span style="font-weight: 800; font-size: 0.8rem; color: #10b981; text-transform: uppercase;">LLC Member #${currentMemberCount} Records</span>
    <button type="button" onclick="this.parentElement.remove(); if(typeof window.cacheAndRestoreWizardFormStatesVanilla === 'function') { window.cacheAndRestoreWizardFormStatesVanilla(false); }" style="position: absolute; top: 12px; right: 12px; background: transparent; border: none; color: #ef4444; font-weight: 700; cursor: pointer; font-size: 0.8rem;"><i class="fa-solid fa-trash-can"></i> Remove</button>
    <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 12px; width: 100%; box-sizing: border-box;">
      <div class="wizard-input-group" style="width: 100; margin: 0;">
        <label for="member_name_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Full Legal Name *</label>
        <input type="text" id="member_name_${currentMemberCount}" name="member_name_${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
      </div>
      <div class="wizard-input-group" style="width: 48%; min-width: 240px; flex-grow: 1; margin: 0;">
        <label for="member_street_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Street Address *</label>
        <input type="text" id="member_street_${currentMemberCount}" name="member_street_${currentMemberCount}" required class="wizard-input-field" style="width:100; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
      </div>
      <div class="wizard-input-group" style="width: 48%; min-width: 240px; flex-grow: 1; margin: 0;">
        <label for="member_suite_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Suite, building, etc. (Optional)</label>
        <input type="text" id="member_suite_${currentMemberCount}" name="member_suite_${currentMemberCount}" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width:100; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
      </div>
      <div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">
        <label for="member_city_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">City *</label>
        <input type="text" id="member_city_${currentMemberCount}" name="member_city_${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
      </div>
      <div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">
        <label for="member_state_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">State *</label>
        <select id="member_state_${currentMemberCount}" name="member_state_${currentMemberCount}" required class="wizard-input-field" style="width:100; height:40px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;">${stateOptions}</select>
      </div>
      <div class="wizard-input-group" style="width: 31%; min-width: 160px; flex-grow: 1; margin: 0;">
        <label for="member_zip_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Zip *</label>
        <input type="text" id="member_zip_${currentMemberCount}" name="member_zip_${currentMemberCount}" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
      </div>
    </div>`;

  membersRootContainer.appendChild(cardNode);
  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") { window.cacheAndRestoreWizardFormStatesVanilla(false); }
}

// Bind updated methods cleanly to window
window.toggleRegisteredAgentConditionalFields = toggleRegisteredAgentConditionalFields;
window.toggleLlcManagerFieldsMatrix = toggleLlcManagerFieldsMatrix;
window.toggleLlcDurationDateVisibility = toggleLlcDurationDateVisibility;
window.toggleEinConditionalWorkflow = toggleEinConditionalWorkflow;
window.appendNewLlcMemberRecordFieldNode = appendNewLlcMemberRecordFieldNode;

console.log("[LLC Clean Engine] Complete file initialized successfully.");
