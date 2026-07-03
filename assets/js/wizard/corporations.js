// ============================================================================ // 
// 🏢 SYSTEM COMPLIANCE SERVICE: CORPORATE FORMATION ENGINE (SNIPPET 1 OF 5)
// ============================================================================ // 

function initCorporateFormationServices() {
  window.formRegistry = window.formRegistry || {};

  // --- PART 1 VALIDATION MATRIX ENGINE ---
  window.formRegistry['corporations-part1-validation'] = { 
    requiredFields: [ 
      { id: 'corp_proposed_name', errId: 'err_corp_proposed_name', msg: 'Proposed corporation legal name is required.' }, 
      { id: 'corp_business_purpose', errId: 'err_corp_business_purpose', msg: 'Corporate operational intent description is required.' }, 
      { id: 'corp_ra_choice', errId: 'err_corp_ra_choice', msg: 'Please specify your registered agent choice selection.' }
    ], 
    validate: function() { 
      let isValid = true; let errors = []; 
      const markInvalid = (iEl, eEl, msg) => { 
        if (!iEl || !eEl) return; eEl.textContent = msg; 
        eEl.style.setProperty("display", "block", "important"); 
        iEl.style.setProperty("border-color", "#ef4444", "important"); 
        isValid = false; if (!errors.includes(msg)) errors.push(msg);
      }; 
      const markValid = (iEl, eEl) => { 
        if (!iEl || !eEl) return; eEl.style.setProperty("display", "none", "important"); 
        iEl.style.setProperty("border-color", "#cbd5e1", "important"); 
      }; 
      const isVis = (el) => el && (el.offsetWidth > 0 || el.offsetHeight > 0);

      this.requiredFields.forEach(f => { 
        const nameField = document.getElementById(f.id); const nameErr = document.getElementById(f.errId);
        if (isVis(nameField) && nameErr) { (!nameField.value.trim()) ? markInvalid(nameField, nameErr, f.msg) : markValid(nameField, nameErr); } 
      }); 

      const nameField = document.getElementById('corp_proposed_name'); const nameErr = document.getElementById('err_corp_proposed_name');
      if (isVis(nameField) && nameField.value.trim() && nameErr) {
        if (!/\b(inc(orporated)?|corp(oration)?|co(mpany)?|ltd|limited)\b\.?$/i.test(nameField.value.trim())) {
          markInvalid(nameField, nameErr, "Corporate names must terminate with a legal suffix designator (e.g., Inc., Corp., Co., Ltd.).");
        }
      }

      const raField = document.getElementById('corp_ra_choice'); const wrapper = document.getElementById('corp_custom_ra_wrapper'); 
      if (wrapper && (wrapper.style.display === "grid" || wrapper.style.display === "block" || (raField && raField.value === "custom"))) { 
        const fields = [ 
          { id: 'corp_ra_custom_name', err: 'err_corp_ra_custom_name', msg: "Independent agent name is required." }, 
          { id: 'corp_ra_custom_street', err: 'err_corp_ra_custom_street', msg: "Agent street physical address is required." }, 
          { id: 'corp_ra_custom_city', err: 'err_corp_ra_custom_city', msg: "Agent city coordinate parameter is required." }, 
          { id: 'corp_ra_custom_zip', err: 'err_corp_ra_custom_zip', msg: "Agent Zip Code is required." } 
        ]; 
        fields.forEach(f => { 
          const el = document.getElementById(f.id), err = document.getElementById(f.err); 
          if (el && err) { (!el.value.trim()) ? markInvalid(el, err, f.msg) : markValid(el, err); }
        }); 
        const agentStreet = document.getElementById('corp_ra_custom_street'); const agentStreetErr = document.getElementById('err_corp_ra_custom_street');
        if (agentStreet && isVis(agentStreet) && agentStreet.value.trim() && agentStreetErr) {
          if (/\b(p\.?\s*o\.?\s*box|post\s+office\s+box)\b/i.test(agentStreet.value.trim())) {
            markInvalid(agentStreet, agentStreetErr, "Statutory rules reject P.O. Box listings for registered offices. Provide a physical street address.");
          }
        }
      } 

      document.querySelectorAll("input[id^='shareholder_name_']").forEach(inputEl => { 
        if (isVis(inputEl)) { 
          const suffix = inputEl.id.replace("shareholder_name_", ""); 
          const errNode = document.getElementById("err_shareholder_name_" + suffix) || inputEl.parentElement?.querySelector(".wizard-error-message"); 
          (!inputEl.value.trim()) ? markInvalid(inputEl, errNode, `Shareholder #${suffix} legal name is required.`) : markValid(inputEl, errNode); 
        } 
      }); 
      return { isValid, errors }; 
    } 
  };

  // --- PART 1 LAYOUT ENGINE ---
  window.formRegistry['corporations-part1-layout'] = function(stateDropdownOptionsHtml = "") { 
    const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {}; 
    const agentMetaRecord = centralRegistrySource["customSelectedRegisteredAgentServiceActive"] || {}; 
    const liveAgentFee = parseFloat(agentMetaRecord.price || 75.00).toFixed(2); 
    const blankStatesHtml = stateDropdownOptionsHtml || '<option value="WY">Wyoming</option><option value="DE">Delaware</option><option value="NV">Nevada</option>'; 

    return ` 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Corporate Business Information</h3> 
      </div> 

      <div class="wizard-input-group" style="grid-column: span 1;"> 
        <label for="corp_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Corporation Name <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="corp_proposed_name" required placeholder="Example Enterprises Inc." class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
        <div class="wizard-error-message" id="err_corp_proposed_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Must include "Inc.", "Incorporated", or "Corporation".</span> 
      </div> 

      <div class="wizard-input-group" style="grid-column: span 1;"> 
        <label for="corp_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Corporate Business Purpose <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="corp_business_purpose" required placeholder="Brief description of operations..." class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
        <div class="wizard-error-message" id="err_corp_business_purpose" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 

      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent Information</h3> 
      </div> 

      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="corp_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Select Registered Agent Provision <span style="color: #ef4444;">*</span></label> 
        <select id="corp_ra_choice" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; height: 38px; font-weight: 600;" onchange="if(typeof window.toggleCorporateRegisteredAgentConditionalFields === 'function') { window.toggleCorporateRegisteredAgentConditionalFields(this.value); }"> 
          <option value="" disabled selected>Choose...</option> 
          <option value="filings4u">Utilize Filings4u Protected Agent Shield Service — $${liveAgentFee} / Year</option> 
          <option value="custom">Maintain External Independent Third-Party Registered Agent</option> 
        </select> 
        <div class="wizard-error-message" id="err_corp_ra_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 

      <div id="corp_custom_ra_wrapper" style="grid-column: span 2; display: none; grid-template-columns: 1fr 1fr; gap: 24px; background: rgba(10, 31, 68, 0.01); padding: 20px; border-radius: 8px; border: 1px solid var(--border); box-sizing: border-box; width: 100%;"> 
        <div class="wizard-input-group" style="grid-column: span 2; margin: 0;"> 
          <label for="corp_ra_custom_name" style="font-weight:700; font-size:0.8rem; color:var(--navy);">Agent Name *</label> 
          <input type="text" id="corp_ra_custom_name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
          <div class="wizard-error-message" id="err_corp_ra_custom_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        </div> 
        <div class="wizard-input-group" style="grid-column: span 2; margin: 0;"> 
          <label for="corp_ra_custom_street" style="font-weight:700; font-size:0.8rem; color:var(--navy);">Street Address *</label> 
          <input type="text" id="corp_ra_custom_street" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
          <div class="wizard-error-message" id="err_corp_ra_custom_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        </div> 
        <div class="wizard-input-group" style="grid-column: span 1; margin: 0;"> 
          <label for="corp_ra_custom_city" style="font-weight:700; font-size:0.8rem; color:var(--navy);">City *</label> 
          <input type="text" id="corp_ra_custom_city" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
          <div class="wizard-error-message" id="err_corp_ra_custom_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        </div> 
        <div class="wizard-input-group" style="grid-column: span 1; display:grid; grid-template-columns:1fr 1fr; gap:12px; margin: 0;"> 
          <div> 
            <label for="corp_ra_custom_state" style="font-weight:700; font-size:0.8rem; color:var(--navy);">State *</label> 
            <select id="corp_ra_custom_state" class="wizard-input-field" style="width: 100%; box-sizing: border-box; height: 38px; font-weight: 600;">${blankStatesHtml}</select> 
            <div class="wizard-error-message" id="err_corp_ra_custom_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
          </div> 
          <div> 
            <label for="corp_ra_custom_zip" style="font-weight:700; font-size:0.8rem; color:var(--navy);">Zip *</label> 
            <input type="text" id="corp_ra_custom_zip" maxlength="5" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
            <div class="wizard-error-message" id="err_corp_ra_custom_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
          </div> 
        </div> 
      </div>
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Shareholder Registry</h3> 
      </div> 
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 12px;"> 
        <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Shareholder?</strong> A shareholder is an individual or entity that owns shares of a corporation's stock. 
      </div> 

      <!-- DYNAMIC SHAREHOLDER DATA COLLECTION TRACK NODE --> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <div id="corp_shareholders_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;"> 
          
          <!-- DEFAULT CARD 1 BASE REFUGE --> 
          <div class="member-record-card" id="shareholder_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box;"> 
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Shareholder #1 Records</span> 
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;"> 
              
              <!-- SPLIT NAME FIELD MATRICES -->
              <div class="wizard-input-group" style="grid-column: span 1; margin: 0;"> 
                <label for="shareholder_first_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">First Name *</label> 
                <input type="text" id="shareholder_first_name_1" required class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
                <div class="wizard-error-message" id="err_shareholder_first_name_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
              </div> 

              <div class="wizard-input-group" style="grid-column: span 1; margin: 0;"> 
                <label for="shareholder_last_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Last Name *</label> 
                <input type="text" id="shareholder_last_name_1" required class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
                <div class="wizard-error-message" id="err_shareholder_last_name_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
              </div> 
              
              <!-- SPLIT STREET AND UNIT MATRICES -->
              <div class="wizard-input-group" style="grid-column: span 1; margin: 0;"> 
                <label for="shareholder_street_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Street Address *</label> 
                <input type="text" id="shareholder_street_1" required placeholder="e.g. 123 Main St" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
                <div class="wizard-error-message" id="err_shareholder_street_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
              </div> 

              <div class="wizard-input-group" style="grid-column: span 1; margin: 0;"> 
                <label for="shareholder_unit_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Suite / Building / Apt</label> 
                <input type="text" id="shareholder_unit_1" placeholder="e.g. Suite 400, Building B" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
              </div> 

              <div class="wizard-input-group" style="grid-column: span 1; margin: 0;"> 
                <label for="shareholder_city_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">City *</label> 
                <input type="text" id="shareholder_city_1" required class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
                <div class="wizard-error-message" id="err_shareholder_city_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
              </div> 
              
              <!-- STATE AND ZIP GRID ROW LAYER -->
              <div class="wizard-input-group" style="grid-column: span 1; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0;"> 
                <div> 
                  <label for="shareholder_state_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">State *</label> 
                  <select id="shareholder_state_1" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; height: 38px; font-weight: 600;">
                    ${window.buildGlobalUsaStateDropdownOptionsHtml("")}
                  </select> 
                  <div class="wizard-error-message" id="err_shareholder_state_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
                </div> 
                <div> 
                  <label for="shareholder_zip_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Zip *</label> 
                  <input type="text" id="shareholder_zip_1" required maxlength="5" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
                  <div class="wizard-error-message" id="err_shareholder_zip_1" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
                </div> 
              </div> 

            </div> 
          </div> 
        </div> 
      </div> 
      
      <div style="grid-column: span 2; margin-top: 12px;"> 
        <button type="button" id="btn_add_shareholder" class="wizard-button-secondary" style="font-weight:700;">+ Add Additional Shareholder</button> </div> 
    `; 
  };


  
  // --- PART 2 LAYOUT: STOCK & TAX STATUS ELECTIONS ---
  window.formRegistry['corporations-part2-layout'] = function(stateDropdownOptionsHtml = "") { 
    const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {}; 
    const scorpMetaRecord = centralRegistrySource["customSelectedScorpElectionActive"] || {}; 
    const liveScorpFee = parseFloat(scorpMetaRecord.price || 79.00).toFixed(2); 

    return ` 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Stock &amp; Tax Status Elections</h3> 
      </div> 

      <div class="wizard-input-group" style="grid-column: span 1;"> 
        <label for="corp_shares_authorized" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Shares Authorized <span style="color: #ef4444;">*</span></label> 
        <input type="number" id="corp_shares_authorized" required placeholder="10000" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
        <div class="wizard-error-message" id="err_corp_shares_authorized" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 

      <div class="wizard-input-group" style="grid-column: span 1;"> 
        <label for="corp_shares_par_value" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Par Value Per Share <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="corp_shares_par_value" required placeholder="0.0001" class="wizard-input-field" style="width: 100%; box-sizing: border-box;"> 
        <div class="wizard-error-message" id="err_corp_shares_par_value" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 

      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="corp_scorp_elect" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you wish to elect IRS S-Corporation status? <span style="color: #ef4444;">*</span></label> 
        <select id="corp_scorp_elect" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; height: 38px; font-weight: 600;" onchange="if(typeof window.toggleScorpElectionWorkflow === 'function') { window.toggleScorpElectionWorkflow(this.value); }"> 
          <option value="no" selected>No, maintain standard C-Corporation structure</option> 
          <option value="yes">Yes, elect IRS Subchapter S-Corporation tax status</option> 
        </select> 
        <div class="wizard-error-message" id="err_corp_scorp_elect" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 

      <div id="corp_scorp_service_wrapper" style="grid-column: span 2; display: none; background: rgba(10, 31, 68, 0.01); padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; flex-direction: column; gap: 14px; box-sizing: border-box; width: 100%;"> 
        <label for="corp_scorp_procure" style="font-weight: 700; font-size: 0.82rem; color: var(--navy);">Add IRS Form 2553 Filing Preparation Service? ($${liveScorpFee})</label> 
        <select id="corp_scorp_procure" class="wizard-input-field" style="width: 100%; box-sizing: border-box; height: 38px; font-weight: 600;" onchange="if(typeof window.toggleScorpFilingPricingHook === 'function') { window.toggleScorpFilingPricingHook(this.value); }"> 
          <option value="no-decline">No, I will file Form 2553 independently</option> 
          <option value="yes-buy">Yes, add Form 2553 Preparation — $${liveScorpFee}</option> 
        </select> 
        <div class="wizard-error-message" id="err_corp_scorp_procure" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
    `; 
  };

  // --- PART 2 VALIDATION MATRIX ENGINE ---
  window.formRegistry['corporations-part2-validation'] = {
    validate: function() {
      let isValid = true; let errors = [];
      const markInvalid = (inputEl, errorEl, msg) => {
        if (!inputEl || !errorEl) return; errorEl.textContent = msg;
        errorEl.style.setProperty("display", "block", "important");
        inputEl.style.setProperty("border-color", "#ef4444", "important");
        isValid = false; if (!errors.includes(msg)) errors.push(msg);
      };
      const markValid = (inputEl, errorEl) => {
        if (!inputEl || !errorEl) return; errorEl.style.setProperty("display", "none", "important");
        inputEl.style.setProperty("border-color", "#cbd5e1", "important");
      };

      const sharesField = document.getElementById('corp_shares_authorized'); const sharesErr = document.getElementById('err_corp_shares_authorized');
      if (sharesField && sharesErr) {
        const val = parseInt(sharesField.value, 10);
        if (isNaN(val) || val < 1) markInvalid(sharesField, sharesErr, "A corporation must authorize a minimum of 1 stock share unit.");
        else markValid(sharesField, sharesErr);
      }

      const parField = document.getElementById('corp_shares_par_value'); const parErr = document.getElementById('err_corp_shares_par_value');
      if (parField && parErr) {
        const rawVal = parField.value.trim();
        if (!rawVal || isNaN(parseFloat(rawVal))) markInvalid(parField, parErr, "Please specify a valid numeric par value amount per share (e.g. 0.0001 or 0).");
        else markValid(parField, parErr);
      }

      const electField = document.getElementById('corp_scorp_elect'); const electErr = document.getElementById('err_corp_scorp_elect');
      if (electField && electErr) { if (!electField.value) markInvalid(electField, electErr, "Please clarify your S-Corporation tax status preference."); else markValid(electField, electErr); }

      const scorpWrapper = document.getElementById('corp_scorp_service_wrapper');
      if (scorpWrapper && (scorpWrapper.style.display === "flex" || scorpWrapper.style.display === "block" || (electField && electField.value === "yes"))) {
        const procureField = document.getElementById('corp_scorp_procure'); const procureErr = document.getElementById('err_corp_scorp_procure');
        if (procureField && procureErr && !procureField.value) markInvalid(procureField, procureErr, "Please select an option for your Form 2553 preparation service preference.");
        else if (procureField && procureErr) markValid(procureField, procureErr);
      }
      return { isValid, errors };
    }
  };
  // ============================================================================ // 
  // ⚙️ INTERACTIVE INTERFACE CONTROLLERS (BUSINESS CONFIGURATIONS)
  // ============================================================================ // 

  // Controller 1: Toggle Custom Registered Agent Fields Visibility
  window.toggleCorporateRegisteredAgentConditionalFields = function(value) {
    const wrapper = document.getElementById("corp_custom_ra_wrapper");
    if (!wrapper) return;
    
    if (value === "custom") {
      wrapper.style.setProperty("display", "grid", "important");
      wrapper.querySelectorAll("input, select").forEach(el => el.setAttribute("required", "required"));
    } else {
      wrapper.style.setProperty("display", "none", "important");
      wrapper.querySelectorAll("input, select").forEach(el => {
        el.removeAttribute("required"); el.value = ""; el.style.borderColor = "#cbd5e1";
      });
    }
  };

  // Controller 2: Toggle S-Corp Election Workflow Visibility
  window.toggleScorpElectionWorkflow = function(selectedValue) { 
    const serviceWrapper = document.getElementById("corp_scorp_service_wrapper"); 
    if (!serviceWrapper) return; 
    
    const isScorpElected = selectedValue === "yes"; 
    serviceWrapper.style.setProperty("display", isScorpElected ? "grid" : "none", "important"); 
    
    if (!isScorpElected) { 
      const procureDropdown = document.getElementById("corp_scorp_procure"); 
      if (procureDropdown) { procureDropdown.value = "no-decline"; procureDropdown.style.borderColor = "#cbd5e1"; } 
      window.customSelectedScorpElectionActive = false; 
      if (window.currentCartState) window.currentCartState.customSelectedScorpElectionActive = false; 
      
      if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla(); 
      if (typeof window.updateWizardFinalTotalAmountMatrix === "function") window.updateWizardFinalTotalAmountMatrix(); 
    } 
  }; 

  // Controller 3: Handle Checkbox Variable Selections for Form 2553 Premium Pricing Hook
  window.toggleScorpFilingPricingHook = function(selectedValue) { 
    const isAddonActivated = selectedValue === "yes-buy"; 
    window.customSelectedScorpElectionActive = isAddonActivated; 
    
    if (window.currentCartState) window.currentCartState.customSelectedScorpElectionActive = isAddonActivated; 
    console.log(`[Corporate Router] S-Corp Form 2553 purchase selection variable synchronized: ${isAddonActivated}`); 
    
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { window.updateDynamicPricingMatrixVanilla(); } 
    if (typeof window.updateWizardFinalTotalAmountMatrix === "function") { window.updateWizardFinalTotalAmountMatrix(); } 
  }; 

// ============================================================================ // 
// 📦 MASTER CORPORATIONS RENDER SYSTEM ALLOCATION
// ============================================================================ // 
window.formRegistry['corporations-form-master'] = function(stateDropdownOptionsHtml = "") { 
  // FIXED: Assigned to correct corporations registry index key and removed ghost layout references
  return window.formRegistry['corporations-part1-layout'](stateDropdownOptionsHtml) + 
         window.formRegistry['corporations-part2-layout'](stateDropdownOptionsHtml); 
}; 

// Close initialization function wrapper block
}

// Ignition
initCorporateFormationServices();