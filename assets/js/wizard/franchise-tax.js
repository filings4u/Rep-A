/**
 * SYSTEM COMPLIANCE SERVICE: UNIVERSAL FRANCHISE TAX ENGINE
 * Step 1: Initialize Unified Form Registries & Core Input Filtering Rules
 */
function initUniversalFranchiseService() {
  window.formRegistry = window.formRegistry || {};

  // ---------------------------------------------------------------------------- //
  // SECTION A: PART 1 TAX COMPLIANCE VALIDATION MATRIX                           //
  // ---------------------------------------------------------------------------- //
  window.formRegistry['franchise-tax-part1-validation'] = {
    requiredFields: [
      { id: 'fran_tax_proposed_state', errId: 'err_fran_tax_proposed_state', msg: 'Tax filing jurisdiction state selection is required.' },
      { id: 'fran_tax_reporting_purpose', errId: 'err_fran_tax_reporting_purpose', msg: 'Corporate financial operational operational purpose is required.' },
      { id: 'fran_tax_compliance_choice', errId: 'err_fran_tax_compliance_choice', msg: 'Please specify your premium report processing selection.' }
    ],
    validate: function() {
      let isValid = true;
      let errors = [];

      const markInvalid = (iEl, eEl, msg) => {
        if (!iEl || !eEl) return;
        eEl.textContent = msg;
        eEl.style.setProperty("display", "block", "important");
        iEl.style.setProperty("border-color", "#ef4444", "important");
        isValid = false;
        if (!errors.includes(msg)) errors.push(msg);
      };

      const markValid = (iEl, eEl) => {
        if (!iEl || !eEl) return;
        eEl.textContent = "";
        eEl.style.setProperty("display", "none", "important");
        iEl.style.setProperty("border-color", "#cbd5e1", "important");
      };

      const isVis = (el) => el && (el.offsetWidth > 0 || el.offsetHeight > 0);

      // Validate base required compliance fields
      this.requiredFields.forEach(f => {
        const fieldEl = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);
        if (isVis(fieldEl) && errEl) {
          (!fieldEl.value.trim()) ? markInvalid(fieldEl, errEl, f.msg) : markValid(fieldEl, errEl);
        }
      });

      return { isValid, errors };
    }
  };
      // FUSED SUFFIX LOGIC: Enforces Corporate legal suffix termination checks on the Tax Entity field
      const nameField = document.getElementById('fran_tax_proposed_name');
      const nameErr = document.getElementById('err_fran_tax_proposed_name');
      if (isVis(nameField) && nameErr) {
        const nameValue = nameField.value.trim();
        if (!nameValue) {
          markInvalid(nameField, nameErr, "Proposed entity legal name is required for tax evaluation.");
        } else if (!/\b(inc(orporated)?|corp(oration)?|co(mpany)?|ltd|limited)\b\.?$/i.test(nameValue)) {
          markInvalid(nameField, nameErr, "Filing business names must terminate with an official legal suffix designator (e.g., Inc., Corp., Co., Ltd.).");
        }
      }

      // FUSED CONDITIONAL WORKSPACE: Validates External Agent Renewal blocks inside the tax filing runtime
      const raField = document.getElementById('fran_tax_compliance_choice');
      const wrapper = document.getElementById('fran_custom_ra_wrapper');
      const isCustomRASelected = raField && ['custom', 'independent', 'external', 'third_party'].includes(raField.value.toLowerCase());
      
      if (wrapper && (wrapper.style.display === "grid" || wrapper.style.display === "block" || isCustomRASelected)) {
        const fields = [
          { id: 'fran_ra_custom_name', err: 'err_fran_ra_custom_name', msg: "Independent renewal agent name is required." },
          { id: 'fran_ra_custom_street', err: 'err_fran_ra_custom_street', msg: "Agent physical street address parameter is required." },
          { id: 'fran_ra_custom_city', err: 'err_fran_ra_custom_city', msg: "Agent city parameter is required." },
          { id: 'fran_ra_custom_state', err: 'err_fran_ra_custom_state', msg: "Agent state selection parameter is required." },
          { id: 'fran_ra_custom_zip', err: 'err_fran_ra_custom_zip', msg: "Agent Zip Code is required." }
        ];

        fields.forEach(f => {
          const el = document.getElementById(f.id);
          const err = document.getElementById(f.err);
          if (el && err && isVis(el)) {
            (!el.value.trim()) ? markInvalid(el, err, f.msg) : markValid(el, err);
          }
        });

        // Strict Corporate P.O. Box restriction enforced directly on the Franchise Agent module
        const agentStreet = document.getElementById('fran_ra_custom_street');
        const agentStreetErr = document.getElementById('err_fran_ra_custom_street');
        if (agentStreet && isVis(agentStreet) && agentStreet.value.trim() && agentStreetErr) {
          if (/\b(p\.?\s*o\.?\s*box|post\s+office\s+box)\b/i.test(agentStreet.value.trim())) {
            markInvalid(agentStreet, agentStreetErr, "Statutory rules reject P.O. Box listings for registered offices. Provide a physical street address.");
          }
        }

        // Strict 5-digit validation filter enforced on the agent zip code configuration
        const agentZip = document.getElementById('fran_ra_custom_zip');
        const agentZipErr = document.getElementById('err_fran_ra_custom_zip');
        if (agentZip && isVis(agentZip) && agentZip.value.trim() && agentZipErr && !/^\d{5}$/.test(agentZip.value.trim())) {
          markInvalid(agentZip, agentZipErr, "Registered renewal agent zip code must be exactly 5 digits.");
        }
      }

      return { isValid, errors };
    }
  
    // ---------------------------------------------------------------------------- //
  // SECTION B: PART 1 LAYOUT ENGINE MATRIX                                       //
  // ---------------------------------------------------------------------------- //
  window.formRegistry['franchise-tax-part1-layout'] = function(stateDropdownOptionsHtml = "") {
    const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
    const agentMetaRecord = centralRegistrySource["customSelectedRegisteredAgentServiceActive"] || {};
    const liveAgentFee = parseFloat(agentMetaRecord.price || 75.00).toFixed(2);
    const blankStatesHtml = stateDropdownOptionsHtml || '<option value="" disabled selected>-- Select State --</option><option value="WY">Wyoming</option><option value="DE">Delaware</option><option value="NV">Nevada</option>';

    return `
      <!-- CONTEXT-AWARE INTRODUCTORY TOOLTIP BANNER -->
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy, #0a1f44); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate, #64748b); box-sizing: border-box; margin-bottom: 12px;">
        <strong style="color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Franchise Tax Filing?</strong>
        Filing annual franchise reports protects your distinct corporate personhood asset envelope. This compliance matrix satisfies state revenue reporting mandates, separates corporate assets, and locks in active corporate standing metrics cleanly.
      </div>

      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Corporate Tax Information</h3>
      </div>

      <!-- FIELD 1: PROPOSED NAME ENTRY MATRICES -->
      <div class="wizard-input-group" style="grid-column: span 1;">
        <label for="fran_tax_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Proposed Entity Legal Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fran_tax_proposed_name" required placeholder="Example Enterprises Inc." class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_fran_tax_proposed_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        <span style="font-size: 0.7rem; color: var(--slate, #64748b); font-weight: 500; padding-left: 2px;">Must include an official corporate ending designator (e.g. Inc., Corp., Co., Ltd.).</span>
      </div>

      <!-- FIELD 2: CORPORATE BUSINESS PURPOSE -->
      <div class="wizard-input-group" style="grid-column: span 1;">
        <label for="fran_tax_reporting_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Filing Operational Purpose <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fran_tax_reporting_purpose" required placeholder="Brief description of operations..." class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_fran_tax_reporting_purpose" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        <span style="font-size: 0.7rem; color: var(--slate, #64748b); font-weight: 500; padding-left: 2px;">A brief description of your planned industry or trade activities.</span>
      </div>

      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent Renewal</h3>
      </div>

      <!-- CONTEXT-AWARE AGENT TOOLTIP BANNER -->
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy, #0a1f44); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate, #64748b); box-sizing: border-box; margin-bottom: 4px;">
        <strong style="color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Registered Agent Office?</strong>
        States require corporate entities to maintain an active physical location receiver during business hours to accept legal notices, Service of Process (SOP), and state compliance tax notices.
      </div>

      <!-- FIELD 3: REGISTERED AGENT PROVISION DROPDOWN -->
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="fran_tax_compliance_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Select Agent Renewal Provision <span style="color: #ef4444;">*</span></label>
        <select id="fran_tax_compliance_choice" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2; vertical-align: middle;">
          <option value="" disabled>Choose...</option>
          <option value="filings4u" selected>Utilize Filings4u Protected Agent Shield Service — $${liveAgentFee} / Year</option>
          <option value="custom">Maintain External Independent Third-Party Registered Agent</option>
        </select>
        <div class="wizard-error-message" id="err_fran_tax_compliance_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <!-- REFACTORED HIDDEN WORKSPACE: INDEPENDENT THIRD-PARTY AGENT PROFILES -->
      <div id="fran_custom_ra_wrapper" style="grid-column: span 2; display: none; grid-template-columns: repeat(2, 1fr); gap: 20px; background: rgba(10, 31, 68, 0.01); padding: 20px; border-radius: 8px; border: 1px solid var(--border, #e2e8f0); box-sizing: border-box; width: 100%;">
        <div class="wizard-input-group" style="grid-column: span 2; margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_ra_custom_name" style="font-weight:700; font-size:0.8rem; color:var(--navy, #0a1f44);">Registered Agent Name *</label>
          <input type="text" id="fran_ra_custom_name" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <div class="wizard-error-message" id="err_fran_ra_custom_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_ra_custom_street" style="font-weight:700; font-size:0.8rem; color:var(--navy, #0a1f44);">Address (P.O. Boxes Prohibited) *</label>
          <input type="text" id="fran_ra_custom_street" class="wizard-input-field" onfocus="if(typeof attachGooglePlacesAutocompleteToNode==='function'){attachGooglePlacesAutocompleteToNode(this,'fran_custom_ra')}" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <div class="wizard-error-message" id="err_fran_ra_custom_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_ra_custom_unit" style="font-weight:700; font-size:0.8rem; color:var(--navy, #0a1f44);">Suite / Building / Apt</label>
          <input type="text" id="fran_ra_custom_unit" placeholder="e.g., Suite 100" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_ra_custom_city" style="font-weight:700; font-size:0.8rem; color:var(--navy, #0a1f44);">City *</label>
          <input type="text" id="fran_ra_custom_city" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <div class="wizard-error-message" id="err_fran_ra_custom_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0;">
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label for="fran_ra_custom_state" style="font-weight:700; font-size:0.8rem; color:var(--navy, #0a1f44);">State *</label>
            <select id="fran_ra_custom_state" class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;">${blankStatesHtml}</select>
            <div class="wizard-error-message" id="err_fran_ra_custom_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
                <div style="display: flex; flex-direction: column; gap: 6px;">
            <label for="fran_ra_custom_zip" style="font-weight:700; font-size:0.8rem; color:var(--navy, #0a1f44);">Zip Code *</label>
            <input type="text" id="fran_ra_custom_zip" maxlength="5" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
            <div class="wizard-error-message" id="err_fran_ra_custom_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
        </div>
      </div>
    `;
  };

  // ---------------------------------------------------------------------------- //
  // SECTION C: PART 2 LAYOUT ENGINE MATRIX (DYNAMIC OFFICER REGISTRY TRACK)      //
  // ---------------------------------------------------------------------------- //
  window.formRegistry['franchise-tax-officer-layout'] = function() {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Public Information Report Officer Registry</h3>
      </div>

      <!-- CONTEXT-AWARE OFFICER TOOLTIP BANNER -->
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy, #0a1f44); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate, #64748b); box-sizing: border-box; margin-bottom: 12px;">
        <strong style="color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Public Information Report?</strong>
        State statutes mandate cataloging initial owners, active directors, or corporate officers to accurately allocate operational oversight boundaries on public registers to sustain structural asset entity standing.
      </div>

      <!-- DYNAMIC OFFICER DATA COLLECTION TRACK NODE -->
      <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 0;">
        <div id="fran_officers_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
          
          <!-- DEFAULT CARD 1 BASE REFUGE -->
          <div class="member-record-card" id="fran_officer_card_1" style="background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box;">
            <span style="font-weight: 800; font-size: 0.75rem; color: #10b981; text-transform: uppercase;">Officer #1 Records</span>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 12px;">
              
              <!-- SPLIT NAME AND TITLE FIELD MATRICES -->
              <div class="wizard-input-group" style="grid-column: span 1; margin: 0; display: flex; flex-direction: column; gap: 6px;">
                <label for="fran_officer_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Full Legal Name *</label>
                <input type="text" id="fran_officer_name_1" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
                <div class="wizard-error-message" id="err_fran_officer_name_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
              </div>

              <div class="wizard-input-group" style="grid-column: span 1; margin: 0; display: flex; flex-direction: column; gap: 6px;">
                <label for="fran_officer_title_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Official Corporate Title *</label>
                <select id="fran_officer_title_1" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;">
                  <option value="" disabled selected>Select Title...</option>
                  <option value="President">President / CEO</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Treasurer">Treasurer / CFO</option>
                  <option value="Manager">Manager / Managing Member</option>
                  <option value="Director">Director</option>
                </select>
                <div class="wizard-error-message" id="err_fran_officer_title_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
              </div>

              <!-- SPLIT STREET AND UNIT FIELD MATRICES -->
              <div class="wizard-input-group" style="grid-column: span 1; margin: 0; display: flex; flex-direction: column; gap: 6px;">
                <label for="fran_officer_street_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Street Address *</label>
                <input type="text" id="fran_officer_street_1" required placeholder="e.g. 123 Main St" class="wizard-input-field" onfocus="if(typeof attachGooglePlacesAutocompleteToNode==='function'){attachGooglePlacesAutocompleteToNode(this,'fran_officer_1')}" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
                <div class="wizard-error-message" id="err_fran_officer_street_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
              </div>

              <div class="wizard-input-group" style="grid-column: span 1; margin: 0; display: flex; flex-direction: column; gap: 6px;">
                <label for="fran_officer_unit_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Suite / Building / Apt</label>
                <input type="text" id="fran_officer_unit_1" placeholder="e.g. Suite 400" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
              </div>

              <div class="wizard-input-group" style="grid-column: span 1; margin: 0; display: flex; flex-direction: column; gap: 6px;">
                <label for="fran_officer_city_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">City *</label>
                <input type="text" id="fran_officer_city_1" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
                <div class="wizard-error-message" id="err_fran_officer_city_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
              </div>

              <!-- STATE AND ZIP GRID ROW LAYER -->
              <div class="wizard-input-group" style="grid-column: span 1; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0;">
                <div style="display: flex; flex-direction: column; gap: 6px;">
                  <label for="fran_officer_state_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">State *</label>
                  <select id="fran_officer_state_1" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; height: 38px; font-weight: 600; background-color: #ffffff; padding: 0 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
                    ${typeof window.buildGlobalUsaStateDropdownOptionsHtml === 'function' ? window.buildGlobalUsaStateDropdownOptionsHtml("") : '<option value="" disabled selected>-- Select State --</option><option value="WY">Wyoming</option>'}
                  </select>
                  <div class="wizard-error-message" id="err_fran_officer_state_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 6px;">
                  <label for="fran_officer_zip_1" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Zip *</label>
                  <input type="text" id="fran_officer_zip_1" required maxlength="5" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
                  <div class="wizard-error-message" id="err_fran_officer_zip_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div style="grid-column: span 2; margin-top: 12px; margin-bottom: 20px;">
        <button type="button" id="btn_add_fran_officer" class="wizard-button-secondary" style="font-weight:700; cursor: pointer; padding: 10px 20px; border: 1px solid #cbd5e1; background: #ffffff; border-radius: 6px; display: inline-flex; align-items: center; gap: 6px;">
          <i class="fa-solid fa-plus" style="color: var(--primary, #10b981);"></i> + Add Additional Officer / Member
        </button>
      </div>
    `;
  };

    // ---------------------------------------------------------------------------- //
  // SECTION D: PART 2 LAYOUT ENGINE MATRIX (STOCK UNITS & TAX CHOICES)           //
  // ---------------------------------------------------------------------------- //
  window.formRegistry['franchise-tax-part2-layout'] = function(stateDropdownOptionsHtml = "") {
    const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
    const auditMetaRecord = centralRegistrySource["customSelectedFranchiseAuditDefenseActive"] || {};
    const liveAuditFee = parseFloat(auditMetaRecord.price || 39.00).toFixed(2);

    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Stock &amp; State Valuation Framework Basis</h3>
      </div>

      <!-- CONTEXT-AWARE CAPITALIZATION TOOLTIP BANNER -->
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy, #0a1f44); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate, #64748b); box-sizing: border-box; margin-bottom: 12px;">
        <strong style="color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is Total Gross Asset and Apportioned Share Value?</strong>
        State revenue agencies require logging your total annualized balance assets. Authorized share elements signify capital baselines used to determine tax bracket minimum liabilities accurately.
      </div>

      <!-- FIELD 1: TOTAL SHARES COUNTER -->
      <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
        <label for="fran_tax_shares_authorized" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Total Shares Authorized <span style="color: #ef4444;">*</span></label>
        <input type="number" id="fran_tax_shares_authorized" required placeholder="10000" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
        <div class="wizard-error-message" id="err_fran_tax_shares_authorized" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <!-- FIELD 2: PAR VALUE ENTRY RECORD -->
      <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
        <label for="fran_tax_shares_par_value" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Par Value Per Share <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fran_tax_shares_par_value" required placeholder="0.0001" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
        <div class="wizard-error-message" id="err_fran_tax_shares_par_value" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <!-- FIELD 3: FILING FRAMEWORK BASIS DROPDOWN -->
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="fran_tax_method_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Filing Framework Basis Selection <span style="color: #ef4444;">*</span></label>
        <select id="fran_tax_method_type" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;" onchange="if(typeof window.toggleFranchiseTaxMethodWorkflow === 'function') { window.toggleFranchiseTaxMethodWorkflow(this.value); }">
          <option value="no" selected>No, maintain standard statutory flat-fee minimum evaluation method</option>
          <option value="yes">Yes, calculate tax based on full Apportioned Asset Share Capitalization</option>
        </select>
        <div class="wizard-error-message" id="err_fran_tax_method_type" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

      <!-- HIDDEN CONDITIONAL CONTAINER: FRANCHISE TAX AUDIT DEFENSE PREMIUM ADDON HOOK -->
      <div id="fran_tax_audit_service_wrapper" style="grid-column: span 2; display: none; background: rgba(10, 31, 68, 0.01); padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; flex-direction: column; gap: 14px; box-sizing: border-box; width: 100%;">
        <label for="fran_tax_audit_procure" style="font-weight: 700; font-size: 0.82rem; color: var(--navy, #0a1f44);">Add Premium Franchise Tax Audit Defense Guarantee Service? ($${liveAuditFee})</label>
        <select id="fran_tax_audit_procure" class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;" onchange="if(typeof window.toggleFranchiseAuditPricingHook === 'function') { window.toggleFranchiseAuditPricingHook(this.value); }">
          <option value="no-decline">No, I will handle state audit calculation adjustments independently</option>
          <option value="yes-buy">Yes, add Franchise Audit Protection Guarantee — $${liveAuditFee}</option>
        </select>
        <div class="wizard-error-message" id="err_fran_tax_audit_procure" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    `;
  };

    // ---------------------------------------------------------------------------- //
  // SECTION E: INTERACTIVE LAYOUT INTERLOCK CONTROLLERS                          //
  // ---------------------------------------------------------------------------- //
  window.toggleFranchiseRegisteredAgentConditionalFields = function(value) {
    const wrapper = document.getElementById("fran_custom_ra_wrapper");
    if (!wrapper) return;

    // Normalize string value inputs to verify custom registration selections cleanly
    const isCustom = ['custom', 'independent', 'external', 'third_party'].includes(String(value).toLowerCase());
    
    if (isCustom) {
      // Reveal the panel cleanly as a responsive grid canvas workspace
      wrapper.style.setProperty("display", "grid", "important");
      
      // Dynamically mark all nested inputs as strictly mandatory
      wrapper.querySelectorAll("input, select").forEach(el => {
        if (el.id !== "fran_ra_custom_unit") {
          el.setAttribute("required", "required");
        }
      });
      console.log("[Agent Controller] Custom renewal agent layout activated. Mandatory validation rules armed.");
    } else {
      // Hide the panel instantly out of view
      wrapper.style.setProperty("display", "none", "important");
      
      // Wipe entries and remove required rules so the validation engine skips them safely
      wrapper.querySelectorAll("input, select").forEach(el => {
        el.removeAttribute("required");
        el.value = "";
        el.style.borderColor = "#cbd5e1";
        
        // Hide any lingering error alert popups
        const errorMsgNode = document.getElementById("err_" + el.id);
        if (errorMsgNode) errorMsgNode.style.setProperty("display", "none", "important");
      });
    }
  };

  // Active Event Listener Bridge for Registered Agent Dropdown Interaction
  document.addEventListener("change", function(e) {
    if (e.target && e.target.id === "fran_tax_compliance_choice") {
      window.toggleFranchiseRegisteredAgentConditionalFields(e.target.value);
    }
  });

  window.toggleFranchiseTaxMethodWorkflow = function(selectedValue) {
    const serviceWrapper = document.getElementById("fran_tax_audit_service_wrapper");
    if (!serviceWrapper) return;

    const isCalculationElected = selectedValue === "yes";
    serviceWrapper.style.setProperty("display", isCalculationElected ? "grid" : "none", "important");

    if (!isCalculationElected) {
      const procureDropdown = document.getElementById("fran_tax_audit_procure");
      if (procureDropdown) {
        procureDropdown.value = "no-decline";
        procureDropdown.style.borderColor = "#cbd5e1";
      }
      window.customSelectedFranchiseAuditDefenseActive = false;
      if (window.currentCartState) window.currentCartState.customSelectedFranchiseAuditDefenseActive = false;
      if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
      if (typeof window.updateWizardFinalTotalAmountMatrix === "function") window.updateWizardFinalTotalAmountMatrix();
    }
  };

  window.toggleFranchiseAuditPricingHook = function(selectedValue) {
    const isAddonActivated = selectedValue === "yes-buy";
    window.customSelectedFranchiseAuditDefenseActive = isAddonActivated;
    
    if (window.currentCartState) window.currentCartState.customSelectedFranchiseAuditDefenseActive = isAddonActivated;
    console.log(`[Corporate Router] Franchise Tax Audit Defense selection state written: ${isAddonActivated}`);
    
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
      window.updateDynamicPricingMatrixVanilla();
    }
    if (typeof window.updateWizardFinalTotalAmountMatrix === "function") {
      window.updateWizardFinalTotalAmountMatrix();
    }
  };

    // ---------------------------------------------------------------------------- //
  // SECTION E: MASTER FRANCHISE APPLICATION ASSEMBLY ALLOCATION                  //
  // ---------------------------------------------------------------------------- //
  window.formRegistry['franchise-tax-form-master'] = function(stateDropdownOptionsHtml = "") {
    const layer1 = window.formRegistry['franchise-tax-part1-layout'] ? window.formRegistry['franchise-tax-part1-layout'](stateDropdownOptionsHtml) : '';
    const layer2 = window.formRegistry['franchise-tax-officer-layout'] ? window.formRegistry['franchise-tax-officer-layout']() : '';
    const layer3 = window.formRegistry['franchise-tax-part2-layout'] ? window.formRegistry['franchise-tax-part2-layout'](stateDropdownOptionsHtml) : '';
    return layer1 + layer2 + layer3;
  };

  // ---------------------------------------------------------------------------- //
  // SECTION F: 📦 DYNAMIC OFFICER REGISTRY MANAGER                               //
  // ---------------------------------------------------------------------------- //
  window.removeFranchiseOfficerCardNode = function(cardIndex) {
    const targetCard = document.getElementById(`fran_officer_card_${cardIndex}`);
    if (targetCard) {
      targetCard.remove();
      console.log(`[Officer Tracker] Card index handle #${cardIndex} cleanly purged from DOM memory.`);
    }
  };

  // Refactored Global Document Event Delegation Engine - Stops timeout race conditions
  document.addEventListener("click", function(e) {
    const appendBtn = e.target.closest("#btn_add_fran_officer");
    if (!appendBtn) return;

    const parentContainer = document.getElementById("fran_officers_container");
    if (!parentContainer) return;

    // Generate unique index tracking counters based on live child nodes count
    const cardIndex = parentContainer.querySelectorAll(".member-record-card").length + 1;
    const stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === 'function' ? window.buildGlobalUsaStateDropdownOptionsHtml("") : '<option value="" disabled selected>-- Select State --</option><option value="WY">Wyoming</option>';

    const cardNode = document.createElement("div");
    cardNode.className = "member-record-card";
    cardNode.id = `fran_officer_card_${cardIndex}`;
    cardNode.style.cssText = "background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 20px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 12px; clear: both;";
    // Inject dynamic data tracking templates matching Corporate parameter specifications
    cardNode.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.75rem; color: #10b981; text-transform: uppercase;">Officer #${cardIndex} Records</span>
        <button type="button" class="btn-remove-officer" onclick="window.removeFranchiseOfficerCardNode(${cardIndex})" style="background: transparent; border: none; color: #ef4444; font-size: 0.8rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash-can"></i> Remove Officer</button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_officer_name_${cardIndex}" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Full Legal Name *</label>
          <input type="text" id="fran_officer_name_${cardIndex}" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <div class="wizard-error-message" id="err_fran_officer_name_${cardIndex}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_officer_title_${cardIndex}" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Official Corporate Title *</label>
          <select id="fran_officer_title_${cardIndex}" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;">
            <option value="" disabled selected>Select Title...</option>
            <option value="President">President / CEO</option>
            <option value="Secretary">Secretary</option>
            <option value="Treasurer">Treasurer / CFO</option>
            <option value="Manager">Manager / Managing Member</option>
            <option value="Director">Director</option>
          </select>
          <div class="wizard-error-message" id="err_fran_officer_title_${cardIndex}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_officer_street_${cardIndex}" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Street Address *</label>
          <input type="text" id="fran_officer_street_${cardIndex}" required placeholder="e.g. 123 Main St" class="wizard-input-field" onfocus="if(typeof attachGooglePlacesAutocompleteToNode==='function'){attachGooglePlacesAutocompleteToNode(this,'fran_officer_${cardIndex}')}" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <div class="wizard-error-message" id="err_fran_officer_street_${cardIndex}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_officer_unit_${cardIndex}" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Suite / Building / Apt</label>
          <input type="text" id="fran_officer_unit_${cardIndex}" placeholder="e.g. Suite 400" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
          <label for="fran_officer_city_${cardIndex}" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">City *</label>
          <input type="text" id="fran_officer_city_${cardIndex}" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <div class="wizard-error-message" id="err_fran_officer_city_${cardIndex}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div class="wizard-input-group" style="grid-column: span 1; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0;">
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label for="fran_officer_state_${cardIndex}" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">State *</label>
            <select id="fran_officer_state_${cardIndex}" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;">${stateOptions}</select>
            <div class="wizard-error-message" id="err_fran_officer_state_${cardIndex}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label for="fran_officer_zip_${cardIndex}" style="font-size:0.75rem; font-weight:700; color:var(--slate, #64748b);">Zip *</label>
            <input type="text" id="fran_officer_zip_${cardIndex}" required maxlength="5" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
            <div class="wizard-error-message" id="err_fran_officer_zip_${cardIndex}" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
        </div>
      </div>
    `;

        parentContainer.appendChild(cardNode);

    // Bind numerical input restriction layer to the newly injected dynamically built zip input node
    const newZipInput = document.getElementById(`fran_officer_zip_${cardIndex}`);
    if (newZipInput) {
      newZipInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
      });
    }
  });

  // End structural closure block matching initUniversalFranchiseService container safely

// Master Ignition Run Trigger Execution Pass
initUniversalFranchiseService();

/**
 * 🗑️ DYNAMIC NODE REMOVAL ENGINE
 * Safely removes an officer card container and re-indexes the layout stack.
 * @param {number} cardIdIndex The numeric identifier suffix of the target element.
 */
window.removeFranchiseOfficerCardNode = function(cardIdIndex) {
  const targetCard = document.getElementById(`fran_officer_card_${cardIdIndex}`);
  const parentContainer = document.getElementById("fran_officers_container");
  if (!targetCard || !parentContainer) {
    console.warn(`[Officer Registry] Target card element sequence #${cardIdIndex} missing.`);
    return;
  }

  // 1. Instantly delete the target entry node out of the DOM view
  targetCard.remove();
  console.log(`[Officer Registry] Removed Officer card node #${cardIdIndex}.`);

  // 2. STABILITY PASS: Dynamically re-index remaining custom cards to keep arrays aligned
  const remainingCards = parentContainer.querySelectorAll(".member-record-card");
  remainingCards.forEach((card, loopIndex) => {
    const operationalNewIndex = loopIndex + 1;
    
    // Retain Card #1's hardcoded default state layout intact but ensure it matches index 1
    if (card.id === "fran_officer_card_1" && operationalNewIndex === 1) return;
    card.id = `fran_officer_card_${operationalNewIndex}`;

    // Update the visual numbering subtitle string
    const subtitleHeader = card.querySelector("span");
    if (subtitleHeader) {
      subtitleHeader.textContent = `Officer #${operationalNewIndex} Records`;
    }

    // Update deep nested input attributes so your form submission parameters stay accurate
    const trackingFields = ['name', 'title', 'street', 'unit', 'city', 'state', 'zip'];
    trackingFields.forEach(field => {
      const inputEl = card.querySelector(`[id^="fran_officer_${field}_"]`);
      const labelEl = card.querySelector(`[for^="fran_officer_${field}_"]`);
      const errorEl = card.querySelector(`[id^="err_fran_officer_${field}_"]`);
      
      if (inputEl) inputEl.id = `fran_officer_${field}_${operationalNewIndex}`;
      if (labelEl) labelEl.setAttribute("for", `fran_officer_${field}_${operationalNewIndex}`);
      if (errorEl) errorEl.id = `err_fran_officer_${field}_${operationalNewIndex}`;
    });

    // Update the functional remove button tracking argument parameters
    const trashButton = card.querySelector(".btn-remove-officer");
    if (trashButton) {
      trashButton.setAttribute("onclick", `window.removeFranchiseOfficerCardNode(${operationalNewIndex})`);
    }
  });
};

/**
 * 🌟 DYNAMIC DUAL PASS NODE SCANNER
 * Reusable compilation module to check dynamic fields inside the form engine runtime.
 */
window.validateDynamicFranchiseOfficers = function(markInvalid, markValid, isVis) {
  let internalStatus = true;

  // 1. Dynamic Officer Full Name Scan Validation Loop
  document.querySelectorAll("input[id^='fran_officer_name_']").forEach(inputEl => {
    if (isVis(inputEl)) {
      const idx = inputEl.id.replace("fran_officer_name_", "");
      const errNode = document.getElementById("err_fran_officer_name_" + idx) || inputEl.parentElement?.querySelector(".wizard-error-message");
      if (!inputEl.value.trim()) {
        markInvalid(inputEl, errNode, `Officer full legal name is required.`);
        internalStatus = false;
      } else {
        markValid(inputEl, errNode);
      }
    }
  });

  // 2. Dynamic Officer Title Selector Scan Validation Loop
  document.querySelectorAll("select[id^='fran_officer_title_']").forEach(selectEl => {
    if (isVis(selectEl)) {
      const idx = selectEl.id.replace("fran_officer_title_", "");
      const errNode = document.getElementById("err_fran_officer_title_" + idx) || selectEl.parentElement?.querySelector(".wizard-error-message");
      if (!selectEl.value) {
        markInvalid(selectEl, errNode, `Please select an official corporate title.`);
        internalStatus = false;
      } else {
        markValid(selectEl, errNode);
      }
    }
  });

  // 3. Dynamic Officer Street Address Scan Validation Loop (Prohibits P.O. Boxes)
  document.querySelectorAll("input[id^='fran_officer_street_']").forEach(inputEl => {
    if (isVis(inputEl)) {
      const idx = inputEl.id.replace("fran_officer_street_", "");
      const errNode = document.getElementById("err_fran_officer_street_" + idx) || inputEl.parentElement?.querySelector(".wizard-error-message");
      const val = inputEl.value.trim();
      if (!val) {
        markInvalid(inputEl, errNode, `Officer street physical address is required.`);
        internalStatus = false;
      } else if (/\b(p\.?\s*o\.?\s*box|post\s+office\s+box)\b/i.test(val)) {
        markInvalid(inputEl, errNode, `Statutory rules reject P.O. Box listings for registered report profiles. Provide a physical street address.`);
        internalStatus = false;
      } else {
        markValid(inputEl, errNode);
      }
    }
  });

  // 4. Dynamic Officer City Parameter Scan Validation Loop
  document.querySelectorAll("input[id^='fran_officer_city_']").forEach(inputEl => {
    if (isVis(inputEl)) {
      const idx = inputEl.id.replace("fran_officer_city_", "");
      const errNode = document.getElementById("err_fran_officer_city_" + idx) || inputEl.parentElement?.querySelector(".wizard-error-message");
      if (!inputEl.value.trim()) {
        markInvalid(inputEl, errNode, `Officer city coordinate parameter is required.`);
        internalStatus = false;
      } else {
        markValid(inputEl, errNode);
      }
    }
  });

  // 5. Dynamic Officer State Selection Scan Validation Loop
  document.querySelectorAll("select[id^='fran_officer_state_']").forEach(selectEl => {
    if (isVis(selectEl)) {
      const idx = selectEl.id.replace("fran_officer_state_", "");
      const errNode = document.getElementById("err_fran_officer_state_" + idx) || selectEl.parentElement?.querySelector(".wizard-error-message");
      if (!selectEl.value) {
        markInvalid(selectEl, errNode, `Please select an officer state choice.`);
        internalStatus = false;
      } else {
        markValid(selectEl, errNode);
      }
    }
  });

  // 6. Dynamic Officer ZIP Code Filter Scan Validation Loop (Strict 5-Digit Rule)
  document.querySelectorAll("input[id^='fran_officer_zip_']").forEach(inputEl => {
    if (isVis(inputEl)) {
      const idx = inputEl.id.replace("fran_officer_zip_", "");
      const errNode = document.getElementById("err_fran_officer_zip_" + idx) || inputEl.parentElement?.querySelector(".wizard-error-message");
      const val = inputEl.value.trim();
      if (!val) {
        markInvalid(inputEl, errNode, `Officer zip code parameter is required.`);
        internalStatus = false;
      } else if (!/^\d{5}$/.test(val)) {
        markInvalid(inputEl, errNode, `Officer zip code parameter format must be exactly 5 digits.`);
        internalStatus = false;
      } else {
        markValid(inputEl, errNode);
      }
    }
  });

  return internalStatus;
};
