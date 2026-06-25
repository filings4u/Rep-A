// ============================================================================
// 🏛️ FAMILY 26A: LLC VALIDATION ENGINE (COMPREHENSIVE & CONDITIONAL)
// ============================================================================

/**
 * filings4u, LLC - Unified LLC Form Validator Object
 * Evaluates core identifiers, dynamic member arrays, independent agents,
 * and conditional tax/EIN status selections without modular token crashes.
 */
const llcFormationValidation = {
  validateStep: function() {
    const container = document.getElementById("step-panel-2") || document.getElementById("step-2") || document.body;
    let isValid = true;
    let errors = [];

    const setError = (el, msg) => {
      if (!el) return;
      isValid = false;
      el.style.setProperty("border", "1px solid #ef4444", "important");
      if (!errors.includes(msg)) errors.push(msg);

      // UI Layout Synchronization: Locate custom validation alert nodes dynamically
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

    // 1. Core Base Business Info Validation
    const baseFields = [
      { id: 'wizard-target-jurisdiction', msg: 'Please select a formation state.' },
      { id: 'headquarters_state', msg: 'Headquarters state is required.' },
      { id: 'llc_proposed_name', msg: 'Proposed LLC name is required.' },
      { id: 'ent_address_street', msg: 'Business street address is required.' },
      { id: 'ent_address_city', msg: 'Business city is required.' },
      { id: 'business_state', msg: 'Business state selection is required.' },
      { id: 'ent_address_zip', msg: 'Business ZIP code is required.' },
      { id: 'llc_business_purpose', msg: 'Please select an industry classification purpose.' },
      { id: 'llc_ra_choice', msg: 'Please select a registered agent option.' }
    ];

    baseFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) { // Only validate if element is visible
        if (!el.value.trim()) setError(el, field.msg);
        else clearError(el);
      }
    });

    // 2. Specific Validation: Suffix Check
    const nameInput = document.getElementById("llc_proposed_name");
    if (nameInput && nameInput.value.trim() && (nameInput.offsetWidth > 0 || nameInput.offsetHeight > 0)) {
      const nameVal = nameInput.value.trim().toLowerCase();
      const hasSuffix = nameVal.endsWith("llc") || nameVal.endsWith("l.l.c.") || nameVal.includes("limited liability company");
      if (!hasSuffix) {
        setError(nameInput, 'LLC Name must include a compliant suffix such as "LLC" or "Limited Liability Company".');
      }
    }

    // 3. Specific Validation: Base ZIP Code Check
    const zipInput = document.getElementById('ent_address_zip');
    if (zipInput && zipInput.value.trim() && (zipInput.offsetWidth > 0 || zipInput.offsetHeight > 0)) {
      if (!/^\d{5}$/.test(zipInput.value.trim())) {
        setError(zipInput, 'Business Zip Code must consist of exactly 5 numbers.');
      }
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

      if (nameEl && (nameEl.offsetWidth > 0 || nameEl.offsetHeight > 0)) {
        if (!nameEl.value.trim()) setError(nameEl, `Member #${idx}: Full Legal Name is required.`);
        else clearError(nameEl);
      }
      if (streetEl && (streetEl.offsetWidth > 0 || streetEl.offsetHeight > 0)) {
        if (!streetEl.value.trim()) setError(streetEl, `Member #${idx}: Street Address is required.`);
        else clearError(streetEl);
      }
      if (cityEl && (cityEl.offsetWidth > 0 || cityEl.offsetHeight > 0)) {
        if (!cityEl.value.trim()) setError(cityEl, `Member #${idx}: City is required.`);
        else clearError(cityEl);
      }
      if (stateEl && (stateEl.offsetWidth > 0 || stateEl.offsetHeight > 0)) {
        if (!stateEl.value.trim()) setError(stateEl, `Member #${idx}: State is required.`);
        else clearError(stateEl);
      }
      if (zipEl && (zipEl.offsetWidth > 0 || zipEl.offsetHeight > 0)) {
        if (!zipEl.value.trim()) setError(zipEl, `Member #${idx}: Zip Code is required.`);
        else if (!/^\d{5}$/.test(zipEl.value.trim())) setError(zipEl, `Member #${idx}: Zip Code must be exactly 5 digits.`);
        else clearError(zipEl);
      }
    });

    // 5. Conditional Validation: Third Party Agent
    const raChoice = document.getElementById("llc_ra_choice");
    if (raChoice && raChoice.value === "custom" && (raChoice.offsetWidth > 0 || raChoice.offsetHeight > 0)) {
      ['ra_custom_name', 'ra_custom_street', 'ra_custom_city', 'ra_custom_state', 'ra_custom_zip'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (!el.value.trim()) setError(el, 'All custom registered agent physical address fields are required.');
          else if (id === 'ra_custom_zip' && !/^\d{5}$/.test(el.value.trim())) setError(el, 'Custom agent Zip Code must be exactly 5 digits.');
          else clearError(el);
        }
      });
    }

    // 6. Conditional Validation: Management & Expiration & EIN
    const managementType = document.getElementById("llc_management_type");
    if (managementType && managementType.value === "manager-managed" && (managementType.offsetWidth > 0 || managementType.offsetHeight > 0)) {
      const mgrEl = document.getElementById("llc_manager_names");
      if (mgrEl && !mgrEl.value.trim()) setError(mgrEl, "Please provide manager names.");
      else if (mgrEl) clearError(mgrEl);
    }

    const durationChoice = document.getElementById("llc_duration_choice");
    if (durationChoice && durationChoice.value === "specified" && (durationChoice.offsetWidth > 0 || durationChoice.offsetHeight > 0)) {
      const dateEl = document.getElementById("llc_expiration_date");
      if (dateEl && !dateEl.value) setError(dateEl, "Please specify a valid company operational expiration date.");
      else if (dateEl) clearError(dateEl);
    }

    const einStatus = document.getElementById("llc_ein_status");
    if (einStatus && einStatus.value === "yes" && (einStatus.offsetWidth > 0 || einStatus.offsetHeight > 0)) {
      const einField = document.getElementById("llc_existing_ein_field");
      if (einField && einField.value.replace(/\D/g, "").length !== 9) {
        setError(einField, "Existing operational corporate EIN must consist of exactly 9 numeric digits.");
      } else if (einField) {
        clearError(einField);
      }
    }

    return { isValid, errors };
  }
};

/**
 * filings4u, LLC - Master LLC Validation Interceptor Hook
 * Connects the object validator rules seamlessly into your central navigation suite.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireLlcFormationWizard() {
  console.log("[Validation Suite] Running master validation sweep inside llc-formation.js...");

  if (llcFormationValidation && typeof llcFormationValidation.validateStep === "function") {
    const outcome = llcFormationValidation.validateStep();

    const globalAlertBanner = document.getElementById("wizard-global-validation-alert");
    if (globalAlertBanner) {
      globalAlertBanner.style.display = outcome.isValid ? "none" : "block";
      if (!outcome.isValid) {
        globalAlertBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Action Required: Please resolve the form errors highlighted below to move forward.`;
      }
    }

    return outcome.isValid;
  }
  return true;
}

// Bind cleanly back to global window framework interfaces
window.llcFormationValidation = llcFormationValidation;
window.validateEntireLlcFormationWizard = validateEntireLlcFormationWizard;
window.validateLlcWizard = validateEntireLlcFormationWizard;


// ============================================================================
// 📋 FAMILY 26A: HIGH-PERFORMANCE DYNAMIC USA STATE OPTIONS GENERATOR
// ============================================================================

/**
 * Generates an HTML dropdown option block containing all 50 US States.
 * Automatically marks specified inputs as selected based on state codes.
 * @param {string} selectedStateCode - The 2-digit uppercase code to pre-select.
 * @returns {string} Concatenated option tags markup string.
 */
function buildGlobalUsaStateDropdownOptionsHtml(selectedStateCode) {
  const states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
  let optionsHtml = '<option value="">-- Select State --</option>';
  
  states.forEach(state => {
    const isSelected = (String(selectedStateCode || "").toUpperCase().trim() === state) ? "selected" : "";
    optionsHtml += `<option value="${state}" ${isSelected}>${state}</option>`;
  });
  
  return optionsHtml;
}

// Bind directly to global window parameter configurations
window.buildGlobalUsaStateDropdownOptionsHtml = buildGlobalUsaStateDropdownOptionsHtml;

// ============================================================================
// 📦 MASTER LLC FIELDS LAYOUT BUILDER
// ============================================================================

/**
 * Dynamically constructs the primary business parameters collection markup for LLCs.
 * Securely hooks into global states to determine pre-selected state fee levels.
 * @returns {string} Fully generated HTML markup segment strings.
 */
function buildLlcFormationFieldsLayoutHtml() {
  console.log("[LLC Layout] Running initial pipeline layout compilation pass...");

  var jurisdiction = window.selectedFormationStateCode || "TX";
  
  // Cross-reference existing state hydrator tools inside global trackers safely
  var stateSelectorHtml = typeof window.getUsaStatesHtml === "function" 
    ? window.getUsaStatesHtml(jurisdiction) 
    : window.buildGlobalUsaStateDropdownOptionsHtml(jurisdiction);
    
  var blankStatesHtml = typeof window.getUsaStatesHtml === "function" 
    ? window.getUsaStatesHtml("") 
    : window.buildGlobalUsaStateDropdownOptionsHtml("");

  // SECTION 1: BUSINESS BASELINE PARAMETERS
  var p1 = '<div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;"><h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3></div>' + 
  '<div class="wizard-input-group"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">What state do you want to form your business in? *</label><select name="formation_state" id="wizard-target-jurisdiction" required class="wizard-input-field" onchange="window.selectedFormationStateCode = this.value; if(typeof updateDynamicPricingMatrixVanilla === \'function\') updateDynamicPricingMatrixVanilla();">' + stateSelectorHtml + '</select></div>' + 
  '<div class="wizard-input-group"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">What state will your headquarters be in? *</label><select name="headquarters_state" id="headquarters_state" required class="wizard-input-field">' + blankStatesHtml + '</select></div>' + 
  '<div class="wizard-input-group" style="grid-column: span 2;"><label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed LLC Name <span style="color: #ef4444;">*</span></label><input type="text" id="llc_proposed_name" name="ent_legal_name" required placeholder="Example Logistics LLC" class="wizard-input-field validate-letters" onblur="if(typeof validateLlcNameSuffix===\'function\')validateLlcNameSuffix(this);"><span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Must include "LLC" or "Limited Liability Company".</span></div>' + 
  '<div class="wizard-input-group" style="grid-column: span 2;"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Business Address *</label><input type="text" id="ent_address_street" name="ent_address_street" required class="wizard-input-field" placeholder="Street address"></div>' + 
  '<div class="wizard-input-group" style="grid-column: span 2;"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Suite, building, etc. (Optional)</label><input type="text" id="ent_address_suite" name="ent_address_suite" class="wizard-input-field" placeholder="Suite, Apt, Floor"></div>' + 
  '<div class="wizard-input-group"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Business City *</label><input type="text" id="ent_address_city" name="ent_address_city" required class="wizard-input-field validate-letters" placeholder="City"></div>' + 
  '<div class="wizard-input-group"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Business State *</label><select id="business_state" name="business_state" required class="wizard-input-field">' + blankStatesHtml + '</select></div>' + 
  '<div class="wizard-input-group" style="grid-column: span 2;"><label style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Business Zip Code *</label><input type="text" id="ent_address_zip" name="ent_address_zip" required class="wizard-input-field validate-numbers" maxlength="5" placeholder="5-digit ZIP code"></div>';

  // SECTION 2: INDUSTRY ACTIVITIES PURPOSE
  var p2 = '<div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px;"><label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Purpose / Activities <span style="color: #ef4444;">*</span></label><select id="llc_business_purpose" name="business_purpose_naics" required class="wizard-input-field"><option value="">-- Select Industry Classification --</option><option value="541110">Offices of Lawyers (NAICS 541110)</option><option value="541211">Offices of Certified Public Accountants (NAICS 541211)</option><option value="541330">Engineering Services (NAICS 541330)</option><option value="541511">Custom Computer Programming Services (NAICS 541511)</option><option value="541611">Administrative Management Consulting Services (NAICS 541611)</option><option value="541810">Advertising Agencies (NAICS 541810)</option><option value="621111">Offices of Physicians (NAICS 621111)</option><option value="621210">Offices of Dentists (NAICS 621210)</option><option value="236115">New Single-Family Housing Construction (NAICS 236115)</option><option value="531210">Offices of Real Estate Agents and Brokers (NAICS 531210)</option><option value="722511">Full-Service Restaurants (NAICS 722511)</option><option value="454110">Electronic Shopping (NAICS 454110)</option><option value="484121">General Freight Trucking (NAICS 484121)</option><option value="561730">Landscaping Services (NAICS 561730)</option><option value="812112">Beauty Salons (NAICS 812112)</option></select></div>';

  // Secure alignment hook checks if sub-parts are available in global context
  var partialSection2Block = typeof window.buildLlcFormationFieldsPart2 === "function" ? window.buildLlcFormationFieldsPart2() : "";
  
  return p1 + p2 + partialSection2Block;
}

// Bind cleanly back into the global window tree context references
window.buildLlcFormationFieldsLayoutHtml = buildLlcFormationFieldsLayoutHtml;


// ============================================================================
// 📋 FAMILY 26A: LLC MEMBERSHIP REGISTRY & STRUCTURAL OPTIONS (PART 2 OF 3)
// ============================================================================

/**
 * Dynamically constructs the second layout section for LLC formation tracks.
 * Resolves EIN procurement pricing variables out of global database lookup arrays.
 * @returns {string} HTML string content block.
 */
function buildLlcFormationFieldsPart2() {
  const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
  const einMetaRecord = centralRegistrySource["customSelectedEinProcurementServiceActive"] || {};
  const liveEinFee = parseFloat(einMetaRecord.price || 79.00).toFixed(2);

  var stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" 
    ? window.buildGlobalUsaStateDropdownOptionsHtml("") 
    : '<option value="TX">Texas (TX)</option>';

  return `
  <!-- SECTION 3: MEMBERSHIP REGISTRY -->
  <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
    <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">3. LLC Membership Registry</h3>
  </div>
  
  <div class="wizard-input-group" style="grid-column: span 2;">
    <div id="llc_members_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
      
      <!-- DEFAULT CARD 1 BASE REFUGE -->
      <div class="member-record-card" id="member_card_1" style="background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary, #10b981); text-transform: uppercase;">LLC Member #1 Records</span>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
          <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
            <label for="member_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Full Legal Name *</label>
            <input type="text" id="member_name_1" name="member_name_1" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
            <div class="wizard-error-message" id="err_member_name_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
          <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
            <label for="member_street_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Street Address *</label>
            <input type="text" id="member_street_1" name="member_street_1" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
            <div class="wizard-error-message" id="err_member_street_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
          <div class="wizard-input-group" style="margin: 0;">
            <label for="member_city_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">City *</label>
            <input type="text" id="member_city_1" name="member_city_1" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
            <div class="wizard-error-message" id="err_member_city_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
          <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0;">
            <div>
              <label for="member_state_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">State *</label>
              <select id="member_state_1" name="member_state_1" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;">${stateOptions}</select>
              <div class="wizard-error-message" id="err_member_state_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
            </div>
            <div>
              <label for="member_zip_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Zip *</label>
              <input type="text" id="member_zip_1" name="member_zip_1" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
              <div class="wizard-error-message" id="err_member_zip_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <button type="button" onclick="if(typeof window.appendNewLlcMemberRecordFieldNode === 'function') { window.appendNewLlcMemberRecordFieldNode(); }" style="margin-top: 12px; background: transparent; border: 1px dashed var(--primary, #10b981); color: var(--primary, #10b981); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-plus"></i> Add Additional Member</button>
  </div>

  <!-- SECTION 4: MANAGEMENT OPTIONS -->
  <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
    <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Management & Options</h3>
  </div>

  <div class="wizard-input-group" style="grid-column: span 2;">
    <label for="llc_management_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Management Type</label>
    <select id="llc_management_type" name="llc_management_type" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1; font-weight: 600;" onchange="if(typeof window.toggleLlcManagerFieldsMatrix==='function') window.toggleLlcManagerFieldsMatrix(this.value)">
      <option value="member-managed" selected>Member-Managed</option>
      <option value="manager-managed">Manager-Managed</option>
    </select>
  </div>

  <div id="llc_manager_names_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
    <label for="llc_manager_names" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Manager Names & Addresses</label>
    <textarea id="llc_manager_names" name="llc_manager_names" rows="2" class="wizard-input-field" style="width:100%; border-radius:6px; border:1px solid #cbd5e1; padding:8px; box-sizing:border-box; font-family: inherit; font-weight: 600;"></textarea>
    <div class="wizard-error-message" id="err_llc_manager_names" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <div class="wizard-input-group">
    <label for="llc_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Lifespan Horizon</label>
    <select id="llc_duration_choice" name="llc_duration_choice" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1; font-weight: 600;" onchange="if(typeof window.toggleLlcDurationDateVisibility==='function') window.toggleLlcDurationDateVisibility(this.value)">
      <option value="perpetual" selected>Perpetual Duration</option>
      <option value="specified">Specified Term</option>
    </select>
  </div>

  <div id="llc_duration_date_wrapper" style="display: none; flex-direction: column; gap: 8px;">
    <label for="llc_expiration_date" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Expiration Date</label>
    <input type="date" id="llc_expiration_date" name="llc_expiration_date" class="wizard-input-field" style="width:100%; height:40px; border:1px solid #cbd5e1; font-weight: 600;">
    <div class="wizard-error-message" id="err_llc_expiration_date" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <div class="wizard-input-group" style="grid-column: span 2;">
    <label for="llc_ein_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Do you possess an active EIN?</label>
    <select id="llc_ein_status" name="llc_ein_status" required class="wizard-input-field" style="width:100%; height:40px; background:#ffffff; border:1px solid #cbd5e1; font-weight: 600;" onchange="if(typeof window.toggleEinConditionalWorkflow==='function') window.toggleEinConditionalWorkflow(this.value)">
      <option value="" disabled selected>Choose...</option>
      <option value="yes">Yes, I possess an active EIN</option>
      <option value="no-buy">No, I need an EIN — Add Procurement ($${liveEinFee})</option>
      <option value="no-decline">No, I decline procurement services</option>
    </select>
  </div>

  <div id="llc_manual_ein_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
    <label for="llc_existing_ein_field" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Enter Existing EIN</label>
    <input type="text" id="llc_existing_ein_field" name="llc_existing_ein_field" placeholder="00-0000000" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border:1px solid #cbd5e1; font-weight: 600;">
    <div class="wizard-error-message" id="err_llc_existing_ein_field" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>
`;}window.buildLlcFormationFieldsPart2 = buildLlcFormationFieldsPart2;

/**
 * Toggles visibility layout configurations for custom third-party agent wrapper panels.
 * Safely auto-configures addon requirements based on baseline package inclusion strings.
 * @param {string} selectedValue - Selection token ('filings4u' / 'custom').
 */
function toggleRegisteredAgentConditionalFields(selectedValue) {
  var wrapper = document.getElementById("llc_custom_ra_wrapper");
  if (!wrapper) return;

  var inputs = wrapper.querySelectorAll("input, select");

  if (selectedValue === "custom") {
    wrapper.style.setProperty("display", "grid", "important");
    window.customSelectedRegisteredAgentServiceActive = false;
    if (window.currentCartState) window.currentCartState.registeredAgentAddon = false;
    
    inputs.forEach(el => el.setAttribute("required", "required"));
  } else {
    wrapper.style.setProperty("display", "none", "important");
    
    // Scan company plan config boundaries to verify if agent shielding is packed into their tier
    const coreRegistry = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages || {};
    const chosenService = coreRegistry[window.routeActiveServiceKey] || {};
    const activePlanKey = window.routeActivePlanKey || "";
    const activePlanDetails = chosenService.plans?.[activePlanKey] || chosenService[activePlanKey] || {};
    
    const inclusionsListText = JSON.stringify(activePlanDetails.bullets || chosenService.bullets || "").toLowerCase();
    const isAgentAlreadyIncludedInBasePrice = inclusionsListText.includes("agent") && (inclusionsListText.includes("free") || inclusionsListText.includes("included"));
    
    // Toggle active procurement addon flags inside shopping total matrix registers
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

window.toggleRegisteredAgentConditionalFields = toggleRegisteredAgentConditionalFields;


// ============================================================================
// 👥 FAMILY 26A: DYNAMIC MEMBER CARD NODE APPENDER MATRIX
// ============================================================================

/**
 * Dynamically appends a fresh, isolated LLC Member information card onto Step 2.
 * Allocates precise index numbers and incorporates embedded inline error fields.
 */
function appendNewLlcMemberRecordFieldNode() {
  const membersRootContainer = document.getElementById("llc_members_container");
  if (!membersRootContainer) return;

  const currentMemberCount = membersRootContainer.querySelectorAll(".member-record-card").length + 1;
  
  // Pull state options cleanly out of your global dropdown generator utility
  const stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" 
    ? window.buildGlobalUsaStateDropdownOptionsHtml("") 
    : "";

  const cardNode = document.createElement("div");
  cardNode.className = "member-record-card";
  cardNode.id = `member_card_${currentMemberCount}`;
  cardNode.style.cssText = "background: #ffffff; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 16px; position: relative;";

  // 🟢 FIXED: Closed the broken style string quote trap after "span 2;" and embedded proper hidden error container blocks
  cardNode.innerHTML = `
    <span style="font-weight: 800; font-size: 0.8rem; color: #10b981; text-transform: uppercase;">LLC Member #${currentMemberCount} Records</span>
    <button type="button" onclick="this.parentElement.remove(); if(typeof window.cacheAndRestoreWizardFormStatesVanilla === 'function') { window.cacheAndRestoreWizardFormStatesVanilla(false); }" style="position: absolute; top: 12px; right: 12px; background: transparent; border: none; color: #ef4444; font-weight: 700; cursor: pointer; font-size: 0.8rem;"><i class="fa-solid fa-trash-can"></i> Remove</button>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
      
      <!-- MEMBER LEGAL NAME FIELD -->
      <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
        <label for="member_name_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Full Legal Name *</label>
        <input type="text" id="member_name_${currentMemberCount}" name="member_name_${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
        <div class="wizard-error-message" id="err_member_name_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <!-- MEMBER STREET ADDRESS FIELD -->
      <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
        <label for="member_street_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Street Address *</label>
        <input type="text" id="member_street_${currentMemberCount}" name="member_street_${currentMemberCount}" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
        <div class="wizard-error-message" id="err_member_street_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <!-- MEMBER CITY FIELD -->
      <div class="wizard-input-group" style="margin: 0;">
        <label for="member_city_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">City *</label>
        <input type="text" id="member_city_${currentMemberCount}" name="member_city_${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
        <div class="wizard-error-message" id="err_member_city_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <!-- MEMBER STATE & ZIP MULTI-INPUT FIELD -->
      <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0;">
        <div>
          <label for="member_state_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">State *</label>
          <select id="member_state_${currentMemberCount}" name="member_state_${currentMemberCount}" required class="wizard-input-field" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;">${stateOptions}</select>
          <div class="wizard-error-message" id="err_member_state_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div>
          <label for="member_zip_${currentMemberCount}" style="font-size:0.75rem; font-weight:700; color:#64748b;">Zip *</label>
          <input type="text" id="member_zip_${currentMemberCount}" name="member_zip_${currentMemberCount}" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:40px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box;">
          <div class="wizard-error-message" id="err_member_zip_${currentMemberCount}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
      </div>
      
    </div>`;

  membersRootContainer.appendChild(cardNode);

  // Trigger auto-save to instantly capture and update storage for newly injected nodes
  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(false);
  }
}

window.appendNewLlcMemberRecordFieldNode = appendNewLlcMemberRecordFieldNode;

// ============================================================================
// ⚙️ CONDITIONAL LIFESPAN, MANAGEMENT, & TAX INTERACTION CONTROLLERS
// ============================================================================

/**
 * Toggles visibility layout configurations for the LLC Manager Names input fields.
 * @param {string} selectedValue - Active dropdown selection choice ('member-managed' / 'manager-managed').
 */
function toggleLlcManagerFieldsMatrix(selectedValue) {
  const wrapper = document.getElementById("llc_manager_names_wrapper");
  if (!wrapper) return;

  const isManagerManaged = selectedValue === "manager-managed";
  wrapper.style.setProperty("display", isManagerManaged ? "flex" : "none", "important");

  if (!isManagerManaged) {
    const textareaField = document.getElementById("llc_manager_names");
    if (textareaField) {
      textareaField.value = "";
      textareaField.style.border = "";
    }
  }
}

/**
 * Toggles visibility layout configurations for specified corporate lifespan expiration dates.
 * @param {string} selectedValue - Selection setting ('perpetual' / 'specified').
 */
function toggleLlcDurationDateVisibility(selectedValue) {
  const wrapper = document.getElementById("llc_duration_date_wrapper");
  if (!wrapper) return;

  const isTermSpecified = selectedValue === "specified";
  wrapper.style.setProperty("display", isTermSpecified ? "flex" : "none", "important");

  if (!isTermSpecified) {
    const dateInput = document.getElementById("llc_expiration_date");
    if (dateInput) {
      dateInput.value = "";
      dateInput.style.border = "";
    }
  }
}

/**
 * Handles conditional layout toggles for EIN procurement options.
 * Synchronizes choices with global data layers to maintain accurate pricing calculations.
 * @param {string} selectedValue - Option token selector index string ('yes', 'no-buy', 'no-decline').
 */
function toggleEinConditionalWorkflow(selectedValue) {
  const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
  const isExistingEinActive = selectedValue === "yes";

  if (manualEinWrapper) {
    manualEinWrapper.style.setProperty("display", isExistingEinActive ? "flex" : "none", "important");
    if (!isExistingEinActive) {
      const einInput = document.getElementById("llc_existing_ein_field");
      if (einInput) {
        einInput.value = "";
        einInput.style.border = "";
      }
    }
  }

  // Synchronize dynamic cart pricing variables based on customer selection properties
  const isEinAddonPurchased = selectedValue === "no-buy";
  window.customSelectedEinProcurementServiceActive = isEinAddonPurchased;
  if (window.currentCartState) window.currentCartState.einProcurementAddon = isEinAddonPurchased;

  console.log(`[LLC Router] EIN selection synchronized across active states: ${isEinAddonPurchased}`);

  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  } else if (typeof window.updateWizardFinalTotalAmountMatrix === "function") {
    window.updateWizardFinalTotalAmountMatrix();
  }
}

// Bind updated methods cleanly back into global window namespace records fields safely
window.toggleLlcManagerFieldsMatrix = toggleLlcManagerFieldsMatrix;
window.toggleLlcDurationDateVisibility = toggleLlcDurationDateVisibility;
window.toggleEinConditionalWorkflow = toggleEinConditionalWorkflow;

console.log("[Dynamic Registry] LLC formation conditional layout components fully stabilized.");
