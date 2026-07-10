/**
 * LLC FORMATION SERVICE ENGINE
 * Step 1: Initialize Unified Form Registries & Core Input Filtering Rules
 */
function initLlcFormationService() {
  window.formRegistry = window.formRegistry || {};

  // ---------------------------------------------------------------------------- //
  // SECTION A: MASTER ARCHITECTURE COMPLIANCE VALIDATION MATRIX
  // ---------------------------------------------------------------------------- //
  window.formRegistry['llc-formation-validation-engine'] = {
    requiredFields: [
      // Part 1 Core Structural Parameters
      { id: 'llc_desired_name', errId: 'err_llc_desired_name', msg: 'Please provide your primary choice for the LLC name.' },
      { id: 'llc_designator', errId: 'err_llc_designator', msg: 'Please select a legal corporate suffix designator.' },
      { id: 'llc_business_purpose', errId: 'err_llc_business_purpose', msg: 'Please specify the main business operational intent.' },
      { id: 'llc_principal_street', errId: 'err_llc_principal_street', msg: 'Principal street location is required.' },
      { id: 'llc_principal_city', errId: 'err_llc_principal_city', msg: 'Principal location city name is required.' },
      { id: 'llc_principal_state', errId: 'err_llc_principal_state', msg: 'Please select your principal state location.' },
      { id: 'llc_principal_zip', errId: 'err_llc_principal_zip', msg: 'Principal zip routing index is required.' },
      // Part 2 Management & Registered Agent Parameters
      { id: 'llc_mgmt_type', errId: 'err_llc_mgmt_type', msg: 'Please select a corporate management structure parameter.' },
      { id: 'llc_agent_choice', errId: 'err_llc_agent_choice', msg: 'Please select your statutory registered agent structure.' },
      { id: 'llc_contact_name', errId: 'err_llc_contact_name', msg: 'Primary communications contact name is required.' },
      { id: 'llc_contact_phone', errId: 'err_llc_contact_phone', msg: 'Communications contact telephone number is required.' },
      { id: 'llc_contact_email', errId: 'err_llc_contact_email', msg: 'Communications contact electronic mail address is required.' }
    ],

    /**
     * 🔘 LIVE CHARACTER INPUT FILTERS
     * Restricts inputs and formats values dynamically across all sub-fields
     */
    setupLiveInputFilters: function() {
      // Numerical fields input filtering masks
      const numericIds = ['llc_principal_zip', 'llc_agent_zip'];
      numericIds.forEach(id => {
        const inputNode = document.getElementById(id);
        if (inputNode) {
          inputNode.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
          });
        }
      });

      // Name inputs remain fully open to letters, numbers, and symbols
      console.log("[LLC Engine] Input constraint filter tracking active.");
    },

    /**
     * 🔍 GLOBAL VALIDATION ENGINE MATRIX EXECUTION
     */
    validate: function() {
      let isValid = true;
      let errors = [];

      const markInvalid = (inputEl, errorEl, msg) => {
        if (errorEl) {
          errorEl.textContent = msg;
          errorEl.style.setProperty("display", "block", "important");
        }
        if (inputEl) inputEl.style.borderColor = "#ef4444";
        isValid = false;
        if (!errors.includes(msg)) errors.push(msg);
      };

      const markValid = (inputEl, errorEl) => {
        if (errorEl) {
          errorEl.textContent = "";
          errorEl.style.setProperty("display", "none", "important");
        }
        if (inputEl) inputEl.style.borderColor = "#cbd5e1";
      };

      // 1. Core Fields Required Checks Loop
      this.requiredFields.forEach(f => {
        const inputEl = document.getElementById(f.id);
        const errorEl = document.getElementById(f.errId);
        
        // Skip validation check if the element is missing from the layout framework view
        if (!inputEl || inputEl.offsetParent === null) return;

        if (!inputEl.value.trim()) {
          markInvalid(inputEl, errorEl, f.msg);
        } else {
          markValid(inputEl, errorEl);
        }
      });

      // 2. Conditional Custom Registered Agent Validation Passed Fields Check
      const agentChoiceNode = document.getElementById('llc_agent_choice');
      if (agentChoiceNode && agentChoiceNode.value === 'individual') {
        const agentFields = [
          { id: 'llc_agent_name', err: 'err_llc_agent_name', m: 'Registered individual agent name is required.' },
          { id: 'llc_agent_street', err: 'err_llc_agent_street', m: 'Statutory agent street location is required.' },
          { id: 'llc_agent_city', err: 'err_llc_agent_city', m: 'Statutory agent city location is required.' },
          { id: 'llc_agent_state', err: 'err_llc_agent_state', m: 'Please select a statutory agent state designation.' },
          { id: 'llc_agent_zip', err: 'err_llc_agent_zip', m: 'Statutory agent zip tracking reference is required.' }
        ];

        agentFields.forEach(f => {
          const inputEl = document.getElementById(f.id);
          const errorEl = document.getElementById(f.err);
          if (inputEl) {
            if (!inputEl.value.trim()) markInvalid(inputEl, errorEl, f.m);
            else markValid(inputEl, errorEl);
          }
        });

        // Agent zip code format check
        const azipNode = document.getElementById('llc_agent_zip');
        const azipErr = document.getElementById('err_llc_agent_zip');
        if (azipNode && azipNode.value.trim() && !/^\d{5}$/.test(azipNode.value.trim())) {
          markInvalid(azipNode, azipErr, "Registered agent zip code must be exactly 5 digits.");
        }
      }

      // 3. Conditional Custom Professional Description Check Block
      const purposeNode = document.getElementById('llc_business_purpose');
      const specWrapper = document.getElementById('llc_specialized_purpose_wrapper');
      const specField = document.getElementById('llc_professional_desc');
      const specErr = document.getElementById('err_llc_professional_desc');
      
      if (purposeNode && purposeNode.value === 'professional' && specWrapper && specWrapper.style.display !== 'none') {
        if (!specField || !specField.value.trim()) {
          markInvalid(specField, specErr, "Underwriters require professional practice licensing descriptions.");
        } else {
          markValid(specField, specErr);
        }
      }

      // 4. Structural Format Constraints Code Checks
      const zipNode = document.getElementById('llc_principal_zip');
      const zipErr = document.getElementById('err_llc_principal_zip');
      if (zipNode && zipNode.offsetParent !== null && zipNode.value.trim() && !/^\d{5}$/.test(zipNode.value.trim())) {
        markInvalid(zipNode, zipErr, "Principal zip code reference must be exactly 5 digits.");
      }

      const emailNode = document.getElementById('llc_contact_email');
      const emailErr = document.getElementById('err_llc_contact_email');
      if (emailNode && emailNode.offsetParent !== null && emailNode.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNode.value.trim())) {
        markInvalid(emailNode, emailErr, "Please enter a valid primary contact person email address.");
      }

      const phoneNode = document.getElementById('llc_contact_phone');
      const phoneErr = document.getElementById('err_llc_contact_phone');
      if (phoneNode && phoneNode.offsetParent !== null && phoneNode.value.trim()) {
        if (phoneNode.value.replace(/\D/g, "").length < 10) {
          markInvalid(phoneNode, phoneErr, "Primary contact phone number must contain at least 10 numbers.");
        }
      }

      return { isValid, errors };
    }
  };

  // ---------------------------------------------------------------------------- //
// SECTION B: PART 1 LAYOUT ENGINE MATRIX (IDENTITY & PRINCIPAL OFFICE)
// ---------------------------------------------------------------------------- //
window.formRegistry['llc-formation-part1-layout'] = function(stateDropdownOptionsHtml = "") {
  return `
  <!-- COMPLIANCE PROVISION INFORMATION BANNER -->
  <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
    <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> LLC Corporate Formation Structural Intake Blueprint</strong>
    Filing Articles of Organization constructs a permanent statutory asset layer protecting personal holdings from operational risk exposures. Please review all tracking fields to confirm data accuracy matches your targeted registry parameters.
  </div>

  <!-- SECTION 1: LLC IDENTITY IDENTIFIERS -->
  <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
    <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Proposed Limited Liability Company Name</h3>
  </div>

  <!-- FIELD 1: DESIRED COMPANY NAME (OPEN TO ALL CHARS/NUMS NATIVELY) -->
  <div class="wizard-input-group" style="grid-column: span 1;">
    <label for="llc_desired_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Desired LLC Name <span style="color: #ef4444;">*</span></label>
    <input type="text" id="llc_desired_name" required placeholder="Enter your business name selection choice" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
    <div class="wizard-error-message" id="err_llc_desired_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <!-- FIELD 2: CORPORATE SUFFIX DESIGNATOR -->
  <div class="wizard-input-group" style="grid-column: span 1;">
    <label for="llc_designator" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Legal Suffix Suffix Designator <span style="color: #ef4444;">*</span></label>
    <select id="llc_designator" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box; background-color: #ffffff;">
      <option value="" disabled selected>Select...</option>
      <option value="llc" selected>LLC (Limited Liability Company)</option>
      <option value="l_l_c">L.L.C.</option>
      <option value="lc">LC (Limited Company)</option>
      <option value="l_c">L.C.</option>
    </select>
    <div class="wizard-error-message" id="err_llc_designator" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <!-- FIELD 3: BUSINESS OPERATIONAL INTENT DROPDOWN -->
  <div class="wizard-input-group" style="grid-column: span 2;">
    <label for="llc_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Business Purpose & Scope <span style="color: #ef4444;">*</span></label>
    <select id="llc_business_purpose" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box; background-color: #ffffff;" onchange="toggleLlcSpecializedPurposeVisibility(this.value)">
      <option value="general" selected>General Commercial Operations (Retail, Consulting, E-Commerce, etc.)</option>
      <option value="real_estate">Real Estate Holdings (Property Investments, Leasing, Management Asset Vaults)</option>
      <option value="professional">Professional Services (Requires specific state occupational licensing credentials)</option>
      <option value="freight_logistics">Freight Transport, Freight Brokerage, Logistics Management Profiles</option>
    </select>
    <div class="wizard-error-message" id="err_llc_business_purpose" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <!-- HIDDEN EXTRA CONDITIONAL PROVISION PANEL: PROFESSIONAL LICENSING DESCRIPTION -->
  <div id="llc_specialized_purpose_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
    <label for="llc_professional_desc" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify your professional service field / credentials: <span style="color: #ef4444;">*</span></label>
    <input type="text" id="llc_professional_desc" placeholder="e.g., Medical Practice, Legal Firm, Certified Public Accounting..." class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
    <div class="wizard-error-message" id="err_llc_professional_desc" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <!-- SECTION 2: HEADQUARTERS PRINCIPAL OFFICE INFRASTRUCTURE -->
  <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
    <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Corporate Headquarters (Principal Physical Location)</h3>
  </div>

  <!-- FIELD 4: HEADQUARTERS STREET LOCATION -->
  <div class="wizard-input-group" style="grid-column: span 2;">
    <label for="llc_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Street Address (P.O. Boxes Prohibited) <span style="color: #ef4444;">*</span></label>
    <input type="text" id="llc_principal_street" required placeholder="Enter your business headquarters location street" class="wizard-input-field" onfocus="if(typeof attachGooglePlacesAutocompleteToNode==='function'){attachGooglePlacesAutocompleteToNode(this,'llc_principal')}" style="width: 100%; box-sizing: border-box;">
    <div class="wizard-error-message" id="err_llc_principal_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <!-- COMPOSITE PRINCIPAL OFFICE LOCATION FIELD GRID ROW -->
  <div class="wizard-input-group" style="grid-column: span 2;">
    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <label for="llc_principal_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City *</label>
        <input type="text" id="llc_principal_city" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_llc_principal_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <label for="llc_principal_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State *</label>
        <select id="llc_principal_state" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;">${stateDropdownOptionsHtml}</select>
        <div class="wizard-error-message" id="err_llc_principal_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <label for="llc_principal_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code *</label>
        <input type="text" id="llc_principal_zip" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_llc_principal_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    </div>
  </div>
  `;
};


// ---------------------------------------------------------------------------- //
// SECTION C: PART 2 LAYOUT ENGINE MATRIX (MANAGEMENT & STATUTORY AGENT)
// ---------------------------------------------------------------------------- //
window.formRegistry['llc-formation-part2-layout'] = function(stateDropdownOptionsHtml = "") {
  return `
  <!-- SECTION 3: MANAGEMENT STRUCTURE DECLARATION -->
  <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
    <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Management Governance Matrix</h3>
  </div>

  <!-- FIELD 1: MANAGEMENT STRUCTURE TYPE -->
  <div class="wizard-input-group" style="grid-column: span 1;">
    <label for="llc_mgmt_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Management Structure <span style="color: #ef4444;">*</span></label>
    <select id="llc_mgmt_type" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box; background-color: #ffffff;">
      <option value="member" selected>Member-Managed (Managed directly by the company owners/members)</option>
      <option value="manager">Manager-Managed (Managed by designated officers or hired directors)</option>
    </select>
    <div class="wizard-error-message" id="err_llc_mgmt_type" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <!-- FIELD 2: STATUTORY REGISTERED AGENT CHOICE -->
  <div class="wizard-input-group" style="grid-column: span 1;">
    <label for="llc_agent_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Registered Agent Option <span style="color: #ef4444;">*</span></label>
    <select id="llc_agent_choice" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box; background-color: #ffffff;" onchange="toggleLlcRegisteredAgentDetailsVisibility(this.value)">
      <option value="standard" selected>Utilize Premium Corporate Statutory Agent Service (Optimized Privacy Shield)</option>
      <option value="individual">Assign Custom Individual Statutory Agent (Self-Designated Option)</option>
    </select>
    <div class="wizard-error-message" id="err_llc_agent_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <!-- HIDDEN EXTRA CONDITIONAL PROVISION PANEL: CUSTOM REGISTERED AGENT PROFILE DETAILS -->
  <div id="llc_agent_details_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px; margin-bottom: 20px; width: 100%; box-sizing: border-box;">
    <div style="border-top: 1px dashed var(--border); padding-top: 16px; margin-top: 8px;">
      <h4 style="color: var(--navy); font-size: 0.95rem; font-weight: 700; margin: 0;">Custom Registered Agent Profile Specifications</h4>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; box-sizing: border-box;">
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="llc_agent_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Agent Full Name / Entity Designation *</label>
        <input type="text" id="llc_agent_name" placeholder="Enter custom registered agent name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_llc_agent_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="llc_agent_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Agent Physical Statutory Address (P.O. Boxes Prohibited) *</label>
        <input type="text" id="llc_agent_street" placeholder="Enter physical street address" class="wizard-input-field" onfocus="if(typeof attachGooglePlacesAutocompleteToNode==='function'){attachGooglePlacesAutocompleteToNode(this,'llc_agent')}" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_llc_agent_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <div class="wizard-input-group" style="grid-column: span 2;">
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label for="llc_agent_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City *</label>
            <input type="text" id="llc_agent_city" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
            <div class="wizard-error-message" id="err_llc_agent_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label for="llc_agent_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State *</label>
            <select id="llc_agent_state" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;">${stateDropdownOptionsHtml}</select>
            <div class="wizard-error-message" id="err_llc_agent_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label for="llc_agent_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip *</label>
            <input type="text" id="llc_agent_zip" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
            <div class="wizard-error-message" id="err_llc_agent_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 4: PRIMARY COMMUNICATIONS CONTACT PROFILE -->
  <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
    <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Primary Communications Contact Person</h3>
  </div>

  <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
    <label for="llc_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Full Name *</label>
    <input type="text" id="llc_contact_name" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
    <div class="wizard-error-message" id="err_llc_contact_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
    <label for="llc_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number *</label>
    <input type="tel" id="llc_contact_phone" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
    <div class="wizard-error-message" id="err_llc_contact_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>

  <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
    <label for="llc_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address *</label>
    <input type="email" id="llc_contact_email" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
    <div class="wizard-error-message" id="err_llc_contact_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
  </div>
  `;
};
// ---------------------------------------------------------------------------- //
// SECTION D: PART 3 LAYOUT ENGINE MATRIX (SUPPLEMENTAL PROVISIONS)
// ---------------------------------------------------------------------------- //
window.formRegistry['llc-formation-part3-layout'] = function(stateDropdownOptionsHtml = "") {
  return `
  <!-- SECTION 5: SUPPLEMENTAL SPECIAL PROVISIONS -->
  <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
    <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Custom Special Provisions & Supplemental Details</h3>
  </div>

  <!-- FIELD 1: OPTIONAL COMPLIANCE TEXTAREA (SPANS 2 COLUMNS) -->
  <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
    <label for="llc_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Supplemental Operating Guidelines or Background Provisions</label>
    <textarea id="llc_provisions" placeholder="Enter any specific corporate distribution rules, class-voting parameters, or customized member-vesting provisions required for your state filing profile..." class="wizard-input-field" style="width: 100%; min-height: 90px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
  </div>
  `;
};

// ============================================================================ //
// 4. INTERACTIVE INTERFACE CONTROLLERS (CONDITIONAL DISPLAY VISIBILITY)        //
// ============================================================================ //
window.toggleLlcSpecializedPurposeVisibility = function(value) {
  const wrapper = document.getElementById("llc_specialized_purpose_wrapper");
  const input = document.getElementById("llc_professional_desc");
  if (!wrapper) return;
  
  if (value === "professional") {
    wrapper.style.setProperty("display", "block", "important");
    if (input) input.setAttribute("required", "required");
  } else {
    wrapper.style.setProperty("display", "none", "important");
    if (input) {
      input.removeAttribute("required");
      input.value = "";
      input.style.borderColor = "#cbd5e1";
    }
  }
};

window.toggleLlcRegisteredAgentDetailsVisibility = function(value) {
  const wrapper = document.getElementById("llc_agent_details_wrapper");
  const subInputs = wrapper ? wrapper.querySelectorAll('input, select') : [];
  if (!wrapper) return;
  
  if (value === "individual") {
    wrapper.style.setProperty("display", "flex", "important");
    subInputs.forEach(input => {
      input.setAttribute("required", "required");
    });
  } else {
    wrapper.style.setProperty("display", "none", "important");
    subInputs.forEach(input => {
      input.removeAttribute("required");
      input.value = "";
      input.style.borderColor = "#cbd5e1";
    });
  }
};

// ============================================================================ //
// 5. MASTER RENDER SYSTEM ALLOCATION (CONSOLIDATED FORM MATCHING MATRIX)       //
// ============================================================================ //
window.formRegistry['llc-formation-form-master'] = function(stateDropdownOptionsHtml = "") {
  // Gracefully construct all three isolated layers together into a clean, un-duplicated single output payload
  const part1 = window.formRegistry['llc-formation-part1-layout'] ? window.formRegistry['llc-formation-part1-layout'](stateDropdownOptionsHtml) : '';
  const part2 = window.formRegistry['llc-formation-part2-layout'] ? window.formRegistry['llc-formation-part2-layout'](stateDropdownOptionsHtml) : '';
  const part3 = window.formRegistry['llc-formation-part3-layout'] ? window.formRegistry['llc-formation-part3-layout'](stateDropdownOptionsHtml) : '';

  return part1 + part2 + part3;
};

} // End structural closure block matching initLlcFormationService container safely

// Master Ignition Run Trigger Execution Pass
initLlcFormationService();
