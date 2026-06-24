// ============================================================================ //
// 🛠️ LLC VALIDATION ENGINE (COMPREHENSIVE & CONDITIONAL)
// ============================================================================ //
export const llcFormationValidation = {
  validateStep: function() {
    const container = document.getElementById("step-panel-2") || document.getElementById("step-2") || document.body;
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => { 
      if (el) el.style.borderColor = "#ef4444"; 
      isValid = false; 
      if (!errors.includes(msg)) errors.push(msg); 
    };
    const clearError = (el) => { if (el) el.style.borderColor = "#cbd5e1"; };

    // 1. Core Base Business Info Validation
    const baseFields = [
      { id: 'wizard-target-jurisdiction', msg: 'Please select a formation state.' },
      { name: 'headquarters_state', msg: 'Headquarters state is required.' },
      { id: 'llc_proposed_name', msg: 'Proposed LLC name is required.' },
      { name: 'ent_address_street', msg: 'Business street address is required.' },
      { name: 'ent_address_city', msg: 'Business city is required.' },
      { name: 'business_state', msg: 'Business state selection is required.' },
      { name: 'ent_address_zip', msg: 'Business ZIP code is required.' },
      { id: 'llc_business_purpose', msg: 'Please select an industry classification purpose.' },
      { id: 'llc_ra_choice', msg: 'Please select a registered agent option.' }
    ];

    baseFields.forEach(field => {
      const el = field.id ? document.getElementById(field.id) : container.querySelector(`[name="${field.name}"]`);
      if (el) {
        if (!el.value.trim()) setError(el, field.msg); else clearError(el);
      }
    });

    // 2. Specific Validation: Suffix Check
    const nameInput = document.getElementById("llc_proposed_name");
    if (nameInput && nameInput.value.trim()) {
      const nameVal = nameInput.value.trim().toLowerCase();
      const hasSuffix = nameVal.endsWith("llc") || nameVal.endsWith("l.l.c.") || nameVal.includes("limited liability company");
      if (!hasSuffix) setError(nameInput, 'LLC Name must include "LLC" or "Limited Liability Company".');
    }

    // 3. Specific Validation: Base ZIP Code Check
    const zipInput = container.querySelector('[name="ent_address_zip"]');
    if (zipInput && zipInput.value.trim() && !/^\d{5}$/.test(zipInput.value.trim())) {
      setError(zipInput, 'Business Zip Code must be exactly 5 numbers.');
    }

    // 4. Dynamic Loop Validation: LLC Members Registry
    const memberCards = container.querySelectorAll(".member-record-card");
    memberCards.forEach(card => {
      const idx = card.id.replace("member_card_", "");
      const nameEl = document.getElementById(`member_name_${idx}`);
      const streetEl = document.getElementById(`member_street_${idx}`);
      const cityEl = document.getElementById(`member_city_${idx}`);
      const stateEl = document.getElementById(`member_state_${idx}`);
      const zipEl = document.getElementById(`member_zip_${idx}`);

      if (nameEl && !nameEl.value.trim()) setError(nameEl, `Member #${idx}: Full Legal Name is required.`); else clearError(nameEl);
      if (streetEl && !streetEl.value.trim()) setError(streetEl, `Member #${idx}: Street Address is required.`); else clearError(streetEl);
      if (cityEl && !cityEl.value.trim()) setError(cityEl, `Member #${idx}: City is required.`); else clearError(cityEl);
      if (stateEl && !stateEl.value.trim()) setError(stateEl, `Member #${idx}: State is required.`); else clearError(stateEl);
      if (zipEl) {
        if (!zipEl.value.trim()) setError(zipEl, `Member #${idx}: Zip Code is required.`);
        else if (!/^\d{5}$/.test(zipEl.value.trim())) setError(zipEl, `Member #${idx}: Zip Code must be 5 digits.`);
        else clearError(zipEl);
      }
    });

    // 5. Conditional Validation: Third Party Agent
    const raChoice = document.getElementById("llc_ra_choice");
    if (raChoice && raChoice.value === "custom") {
      ['ra_custom_name', 'ra_custom_street', 'ra_custom_city', 'ra_custom_state', 'ra_custom_zip'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (!el.value.trim()) setError(el, 'All custom registered agent fields are required.');
          else if (id === 'ra_custom_zip' && !/^\d{5}$/.test(el.value.trim())) setError(el, 'Custom agent Zip must be 5 digits.');
          else clearError(el);
        }
      });
    }

    // 6. Conditional Validation: EIN & Expiration
    const managementType = document.getElementById("llc_management_type");
    if (managementType && managementType.value === "manager-managed") {
      const mgrEl = document.getElementById("llc_manager_names");
      if (mgrEl && !mgrEl.value.trim()) setError(mgrEl, "Please provide manager names and addresses."); else clearError(mgrEl);
    }

    const durationChoice = document.getElementById("llc_duration_choice");
    if (durationChoice && durationChoice.value === "specified") {
      const dateEl = document.getElementById("llc_expiration_date");
      if (dateEl && !dateEl.value) setError(dateEl, "Please specify an expiration date."); else clearError(dateEl);
    }

    const einStatus = document.getElementById("llc_ein_status");
    if (einStatus && einStatus.value === "yes") {
      const einField = document.getElementById("llc_existing_ein_field");
      if (einField && einField.value.replace(/\D/g, "").length !== 9) {
        setError(einField, "Existing EIN must be exactly 9 numbers.");
      } else {
        clearError(einField);
      }
    }

    return { isValid, errors };
  }
};

/**
 * High-Performance Dynamic USA State Options Generator
 * @param {string} selectedStateCode - The 2-digit uppercase code to mark as pre-selected
 */
export function buildGlobalUsaStateDropdownOptionsHtml(selectedStateCode) {
  const states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
  let optionsHtml = '<option value="">-- Select State --</option>';
  
  states.forEach(state => {
    const isSelected = (String(selectedStateCode).toUpperCase().trim() === state) ? "selected" : "";
    optionsHtml += `<option value="${state}" ${isSelected}>${state}</option>`;
  });
  
  return optionsHtml;
}
window.buildGlobalUsaStateDropdownOptionsHtml = buildGlobalUsaStateDropdownOptionsHtml;

// Combined layout compilation pipeline helper
export function buildLlcFormationFieldsLayoutHtml() {
  var jurisdiction = window.selectedFormationStateCode || "TX";
  var stateSelectorHtml = typeof getUsaStatesHtml === "function" ? getUsaStatesHtml(jurisdiction) : buildGlobalUsaStateDropdownOptionsHtml(jurisdiction);
  var blankStatesHtml = typeof getUsaStatesHtml === "function" ? getUsaStatesHtml("") : buildGlobalUsaStateDropdownOptionsHtml("");

  var p1 = '<div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;"><h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3></div>' +
    '<div class="wizard-input-group"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">What state do you want to form your business in? *</label><select name="formation_state" id="wizard-target-jurisdiction" required class="wizard-input-field" onchange="window.selectedFormationStateCode = this.value; if(typeof updateDynamicPricingMatrixVanilla === \'function\') updateDynamicPricingMatrixVanilla();">' + stateSelectorHtml + '</select></div>' +
    '<div class="wizard-input-group"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">What state will your headquarters be in? *</label><select name="headquarters_state" required class="wizard-input-field">' + blankStatesHtml + '</select></div>' +
    '<div class="wizard-input-group" style="grid-column: span 2;><label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed LLC Name <span style="color: #ef4444;">*</span></label><input type="text" id="llc_proposed_name" name="ent_legal_name" required placeholder="Example Logistics LLC" class="wizard-input-field validate-letters" onblur="if(typeof validateLlcNameSuffix===\'function\')validateLlcNameSuffix(this);"><span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Must include "LLC" or "Limited Liability Company".</span></div>' +
    '<div class="wizard-input-group" style="grid-column: span 2;"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Business Address *</label><input type="text" name="ent_address_street" required class="wizard-input-field" placeholder="Street address"></div>' +
    '<div class="wizard-input-group" style="grid-column: span 2;"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Suite, building, etc. (Optional)</label><input type="text" name="ent_address_suite" class="wizard-input-field" placeholder="Suite, Apt, Floor"></div>' +
    '<div class="wizard-input-group"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Business City *</label><input type="text" name="ent_address_city" required class="wizard-input-field validate-letters" placeholder="City"></div>' +
    '<div class="wizard-input-group"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Business State *</label><select name="business_state" required class="wizard-input-field">' + blankStatesHtml + '</select></div>' +
    '<div class="wizard-input-group" style="grid-column: span 2;"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Business Zip Code *</label><input type="text" name="ent_address_zip" required class="wizard-input-field validate-numbers" maxlength="5" placeholder="5-digit ZIP code"></div>';

  var p2 = '<!-- NAICS Industry Purpose Dropdown Matrix --><div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px;"><label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Purpose / Activities <span style="color: #ef4444;">*</span></label><select id="llc_business_purpose" name="business_purpose_naics" required class="wizard-input-field"><option value="">-- Select Industry Classification --</option><option value="541110">Offices of Lawyers (NAICS 541110)</option><option value="541211">Offices of Certified Public Accountants (NAICS 541211)</option><option value="541330">Engineering Services (NAICS 541330)</option><option value="541511">Custom Computer Programming Services (NAICS 541511)</option><option value="541611">Administrative Management Consulting Services (NAICS 541611)</option><option value="541810">Advertising Agencies (NAICS 541810)</option><option value="621111">Offices of Physicians (NAICS 621111)</option><option value="621210">Offices of Dentists (NAICS 621210)</option><option value="236115">New Single-Family Housing Construction (NAICS 236115)</option><option value="531210">Offices of Real Estate Agents and Brokers (NAICS 531210)</option><option value="722511">Full-Service Restaurants (NAICS 722511)</option><option value="454110">Electronic Shopping (NAICS 454110)</option><option value="484121">General Freight Trucking (NAICS 484121)</option><option value="561730">Landscaping Services (NAICS 561730)</option><option value="812112">Beauty Salons (NAICS 812112)</option></select></div>';

  return p1 + p2 + buildLlcFormationFieldsPart2();
}
window.buildLlcFormationFieldsLayoutHtml = buildLlcFormationFieldsLayoutHtml;

export function buildLlcFormationFieldsPart2() {
  const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
  const einMetaRecord = centralRegistrySource["customSelectedEinProcurementServiceActive"] || {};
  const liveEinFee = parseFloat(einMetaRecord.price || 79.00).toFixed(2);
  var stateOptions = typeof buildGlobalUsaStateDropdownOptionsHtml === "function" ? buildGlobalUsaStateDropdownOptionsHtml("") : '<option value="TX">Texas (TX)</option>';

  return `<div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;"><h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">3. LLC Membership Registry</h3></div>
    <div class="wizard-input-group" style="grid-column: span 2;"><div id="llc_members_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;"><div class="member-record-card" id="member_card_1" style="background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box;"><span style="font-weight: 800; font-size: 0.8rem; color: var(--primary, #10b981); text-transform: uppercase;">LLC Member #1 Records</span><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;"><div class="wizard-input-group" style="grid-column: span 2;"><label for="member_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Full Legal Name *</label><input type="text" id="member_name_1" name="member_name_1" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;"></div>
    <div class="wizard-input-group" style="grid-column: span 2;"><label for="member_street_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Street Address *</label><input type="text" id="member_street_1" name="member_street_1" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;"></div>
    <div class="wizard-input-group"><label for="member_city_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">City *</label><input type="text" id="member_city_1" name="member_city_1" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;"></div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;"><div><label for="member_state_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">State *</label><select id="member_state_1" name="member_state_1" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box;">${stateOptions}</select></div>
    <div><label for="member_zip_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Zip *</label><input type="text" id="member_zip_1" name="member_zip_1" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;"></div></div></div></div></div>
    <button type="button" onclick="appendNewLlcMemberRecordFieldNode()" style="margin-top: 12px; background: transparent; border: 1px dashed var(--primary, #10b981); color: var(--primary, #10b981); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;"><i class="fa-solid fa-plus"></i> Add Additional Member</button></div>
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;"><h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Management & Options</h3></div>
    <div class="wizard-input-group" style="grid-column: span 2;"><label for="llc_management_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Management Type</label><select id="llc_management_type" name="llc_management_type" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1;" onchange="if(typeof toggleLlcManagerFieldsMatrix===\'function\')toggleLlcManagerFieldsMatrix(this.value)"><option value="member-managed" selected>Member-Managed</option><option value="manager-managed">Manager-Managed</option></select></div>
    <div id="llc_manager_names_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;"><label for="llc_manager_names" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Manager Names & Addresses</label><textarea id="llc_manager_names" name="llc_manager_names" rows="2" class="wizard-input-field" style="width:100%; border-radius:6px; border:1px solid #cbd5e1; padding:8px; box-sizing:border-box;"></textarea></div>
    <div class="wizard-input-group"><label for="llc_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Lifespan Horizon</label><select id="llc_duration_choice" name="llc_duration_choice" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1;" onchange="if(typeof toggleLlcDurationDateVisibility===\'function\')toggleLlcDurationDateVisibility(this.value)"><option value="perpetual" selected>Perpetual Duration</option><option value="specified">Specified Term</option></select></div>
    <div id="llc_duration_date_wrapper" style="display: none; flex-direction: column; gap: 8px;"><label for="llc_expiration_date" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Expiration Date</label><input type="date" id="llc_expiration_date" name="llc_expiration_date" class="wizard-input-field" style="width:100%; height:40px; border:1px solid #cbd5e1;"></div>
    <div class="wizard-input-group" style="grid-column: span 2;"><label for="llc_ein_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Do you possess an active EIN?</label><select id="llc_ein_status" name="llc_ein_status" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1;" onchange="if(typeof toggleEinConditionalWorkflow===\'function\')toggleEinConditionalWorkflow(this.value)"><option value="" disabled selected>Choose...</option><option value="yes">Yes, I possess an active EIN</option><option value="no-buy">No, I need an EIN — Add Procurement ($${liveEinFee})</option><option value="no-decline">No, I decline procurement services</option></select></div>
    <div id="llc_manual_ein_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;"><label for="llc_existing_ein_field" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Enter Existing EIN</label><input type="text" id="llc_existing_ein_field" name="llc_existing_ein_field" placeholder="00-0000000" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border:1px solid #cbd5e1;"></div>`;
}
window.buildLlcFormationFieldsPart2 = buildLlcFormationFieldsPart2;

// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS & DYNAMIC FIELD INJECTORS
// ============================================================================ //
export function toggleRegisteredAgentConditionalFields(selectedValue) {
  var wrapper = document.getElementById("llc_custom_ra_wrapper");
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
window.toggleRegisteredAgentConditionalFields = toggleRegisteredAgentConditionalFields;

export function appendNewLlcMemberRecordFieldNode() {
  const membersRootContainer = document.getElementById("llc_members_container");
  if (!membersRootContainer) return;

  const currentMemberCount = membersRootContainer.querySelectorAll(".member-record-card").length + 1;
  const stateOptions = typeof buildGlobalUsaStateDropdownOptionsHtml === "function" ? buildGlobalUsaStateDropdownOptionsHtml("") : "";
  const cardNode = document.createElement("div");
  cardNode.className = "member-record-card";
  cardNode.id = `member_card_${currentMemberCount}`;
  cardNode.style.cssText = "background: #ffffff; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 16px; position: relative;";
  
  cardNode.innerHTML = `<span style="font-weight: 800; font-size: 0.8rem; color: #10b981; text-transform: uppercase;">LLC Member #${currentMemberCount} Records</span>
    <button type="button" onclick="this.parentElement.remove()" style="position: absolute; top: 12px; right: 12px; background: transparent; border: none; color: #ef4444; font-weight: 700; cursor: pointer; font-size: 0.8rem;"><i class="fa-solid fa-trash-can"></i> Remove</button>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;"><div class="wizard-input-group" style="grid-column: span 2;><label for="member_name_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Full Legal Name *</label><input type="text" id="member_name_${currentMemberCount}" name="member_name_${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;"></div>
    <div class="wizard-input-group" style="grid-column: span 2;"><label for="member_street_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Street Address *</label><input type="text" id="member_street_${currentMemberCount}" name="member_street_${currentMemberCount}" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;"></div>
    <div class="wizard-input-group"><label for="member_city_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">City *</label><input type="text" id="member_city_${currentMemberCount}" name="member_city_${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;"></div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;"><div><label for="member_state_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">State *</label><select id="member_state_${currentMemberCount}" name="member_state_${currentMemberCount}" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box;">${stateOptions}</select></div>
    <div><label for="member_zip_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Zip *</label><input type="text" id="member_zip_${currentMemberCount}" name="member_zip_${currentMemberCount}" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;"></div></div></div>`;

  membersRootContainer.appendChild(cardNode);
}
window.appendNewLlcMemberRecordFieldNode = appendNewLlcMemberRecordFieldNode;
