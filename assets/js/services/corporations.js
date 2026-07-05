// ============================================================================ //
// 🏢 SYSTEM COMPLIANCE SERVICE: CORPORATE FORMATION ENGINE (SNIPPET 1 OF 5)
// ============================================================================ //
function initCorporationsServices() {
    window.formRegistry = window.formRegistry || {};

    // ============================================================================
    // FIX: ADDED THE MISSING CORE HTML LAYOUT TEMPLATE MATRIX THE ROUTER IS SCANNING FOR
    // ============================================================================
    window.formRegistry['corporations-form-master'] = function(stateOptions) {
        return `
            <!-- Corporate Onboarding Form Fields Canvas Rows -->
            <div class="form-group-wrapper" style="margin-bottom: 20px; width: 100%; display: flex; flex-direction: column; gap: 6px; box-sizing: border-box;">
                <label for="corp_proposed_name" style="font-weight: 700; color: #0a1f44; font-size: 0.85rem;">Proposed Corporation Legal Name *</label>
                <input type="text" id="corp_proposed_name" name="corp_proposed_name" required class="wizard-input-field" placeholder="e.g. Acme Corporation, Inc." style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important;">
                <span id="err_corp_proposed_name" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem; margin-top: 4px; font-weight: 500;"></span>
            </div>

            <div class="form-group-wrapper" style="margin-bottom: 20px; width: 100%; display: flex; flex-direction: column; gap: 6px; box-sizing: border-box;">
                <label for="corp_business_purpose" style="font-weight: 700; color: #0a1f44; font-size: 0.85rem;">Corporate Operational Intent / Business Purpose *</label>
                <textarea id="corp_business_purpose" name="corp_business_purpose" required class="wizard-input-field" style="font-size: 0.95rem !important; height: 100px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important; resize: vertical;" placeholder="Describe the operational nature of your corporation..."></textarea>
                <span id="err_corp_business_purpose" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem; margin-top: 4px; font-weight: 500;"></span>
            </div>

            <div class="form-group-wrapper" style="margin-bottom: 20px; width: 100%; display: flex; flex-direction: column; gap: 6px; box-sizing: border-box;">
                <label for="corp_ra_choice" style="font-weight: 700; color: #0a1f44; font-size: 0.85rem;">Registered Agent Allocation Choice *</label>
                <select id="corp_ra_choice" name="corp_ra_choice" required class="wizard-input-field" onchange="if(typeof window.toggleCorporationRegisteredAgentWorkflow === 'function') { window.toggleCorporationRegisteredAgentWorkflow(this.value); }" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important; background: #ffffff;">
                    <option value="">-- Select Agent Profile Options --</option>
                    <option value="include">Use premium corporate registered agent service (Recommended)</option>
                    <option value="custom">Formally appoint an independent/private agent registration</option>
                </select>
                <span id="err_corp_ra_choice" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem; margin-top: 4px; font-weight: 500;"></span>
            </div>
        `;
    };

    // --- PART 1 VALIDATION MATRIX ENGINE ---
    window.formRegistry['corporations-part1-validation'] = {
        requiredFields: [
            { id: 'corp_proposed_name', errId: 'err_corp_proposed_name', msg: 'Proposed corporation legal name is required.' },
            { id: 'corp_business_purpose', errId: 'err_corp_business_purpose', msg: 'Corporate operational intent description is required.' },
            { id: 'corp_ra_choice', errId: 'err_corp_ra_choice', msg: 'Please specify your registered agent choice selection.' }
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
                eEl.style.setProperty("display", "none", "important");
                iEl.style.setProperty("border-color", "#cbd5e1", "important");
            };

            const isVis = (el) => {
                if (!el) return false;
                if (window.getComputedStyle(el).display === "none") return false;
                const invisibleParent = el.closest('[style*="display: none"], .wizard-panel:not(.active), div[style*="display:none"]');
                if (invisibleParent) return false;
                return true;
            };

            this.requiredFields.forEach(f => {
                const nameField = document.getElementById(f.id);
                const nameErr = document.getElementById(f.errId);
                if (isVis(nameField) && nameErr) {
                    (!nameField.value.trim()) ? markInvalid(nameField, nameErr, f.msg) : markValid(nameField, nameErr);
                }
            });

            const nameField = document.getElementById('corp_proposed_name');
            const nameErr = document.getElementById('err_corp_proposed_name');
            if (isVis(nameField) && nameField.value.trim() && nameErr) {
                if (!/\b(inc(orporated)?|corp(oration)?|co(mpany)?|ltd|limited)\b\.?$/i.test(nameField.value.trim())) {
                    markInvalid(nameField, nameErr, "Corporate names must terminate with a legal suffix designator (e.g., Inc., Corp., Co., Ltd.).");
                }
            }

            return { isValid, errors };
        }
    };
    
    console.log("[Corporations Service] Master layout template and validation engine successfully mounted to global scopes.");
}

// Automatically invoke constructor execution mappings instantly
initCorporationsServices();

window.formRegistry['corporations-form-master'] = function(stateOptions) {
    return `
        <!-- Corporate Onboarding Form Fields Canvas Rows -->
        <div class="form-group-wrapper" style="margin-bottom: 20px; width: 100%; display: flex; flex-direction: column; gap: 6px; box-sizing: border-box; grid-column: span 2;">
            <label for="corp_proposed_name" style="font-weight: 700; color: #0a1f44; font-size: 0.85rem;">Proposed Corporation Legal Name *</label>
            <input type="text" id="corp_proposed_name" name="corp_proposed_name" required class="wizard-input-field" placeholder="e.g. Acme Corporation, Inc." style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important;">
            <span id="err_corp_proposed_name" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem; margin-top: 4px; font-weight: 500;"></span>
        </div>

        <div class="form-group-wrapper" style="margin-bottom: 20px; width: 100%; display: flex; flex-direction: column; gap: 6px; box-sizing: border-box; grid-column: span 2;">
            <label for="corp_business_purpose" style="font-weight: 700; color: #0a1f44; font-size: 0.85rem;">Corporate Operational Intent / Business Purpose *</label>
            <textarea id="corp_business_purpose" name="corp_business_purpose" required class="wizard-input-field" style="font-size: 0.95rem !important; height: 100px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important; resize: vertical;" placeholder="Describe the operational nature of your corporation..."></textarea>
            <span id="err_corp_business_purpose" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem; margin-top: 4px; font-weight: 500;"></span>
        </div>

        <div class="form-group-wrapper" style="margin-bottom: 20px; width: 100%; display: flex; flex-direction: column; gap: 6px; box-sizing: border-box; grid-column: span 2;">
            <label for="corp_ra_choice" style="font-weight: 700; color: #0a1f44; font-size: 0.85rem;">Registered Agent Allocation Choice *</label>
            <select id="corp_ra_choice" name="corp_ra_choice" data-controls-target="#corp_custom_ra_wrapper" required class="wizard-input-field" onchange="if(typeof window.toggleFederalTaxInventoryCostVisibility === 'function') { window.toggleFederalTaxInventoryCostVisibility(this); }" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box !important; background: #ffffff;">
                <option value="">-- Select Agent Profile Options --</option>
                <option value="include">Use premium corporate registered agent service (Recommended)</option>
                <option value="custom">Formally appoint an independent/private agent registration</option>
            </select>
            <span id="err_corp_ra_choice" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem; margin-top: 4px; font-weight: 500;"></span>
        </div>

        <!-- ============================================================================ -->
        <!-- 🏢 FIX: APPENDED INDEPENDENT REGISTERED AGENT LAYOUT INPUT GROUPS            -->
        <!-- ============================================================================ -->
        <div id="corp_custom_ra_wrapper" style="display: none; grid-column: span 2; width: 100%; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; box-sizing: border-box; background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
            
            <div style="grid-column: span 2; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 4px;">Independent Agent Registry Information</div>

            <div class="form-group-wrapper" style="grid-column: span 2; display: flex; flex-direction: column; gap: 4px;">
                <label for="corp_ra_custom_name">Independent Agent / Office Name *</label>
                <input type="text" id="corp_ra_custom_name" name="corp_ra_custom_name" class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px;">
                <span id="err_corp_ra_custom_name" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem;"></span>
            </div>

            <div class="form-group-wrapper" style="grid-column: span 2; display: flex; flex-direction: column; gap: 4px;">
                <label for="corp_ra_custom_street">Physical Office Street Address (No P.O. Boxes) *</label>
                <input type="text" id="corp_ra_custom_street" name="corp_ra_custom_street" class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px;">
                <span id="err_corp_ra_custom_street" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem;"></span>
            </div>

            <div class="form-group-wrapper" style="display: flex; flex-direction: column; gap: 4px;">
                <label for="corp_ra_custom_city">Office City *</label>
                <input type="text" id="corp_ra_custom_city" name="corp_ra_custom_city" class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px;">
                <span id="err_corp_ra_custom_city" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem;"></span>
            </div>

            <div class="form-group-wrapper" style="display: flex; flex-direction: column; gap: 4px;">
                <label for="corp_ra_custom_zip">Office Zip Code *</label>
                <input type="text" id="corp_ra_custom_zip" name="corp_ra_custom_zip" maxlength="5" class="wizard-input-field" style="font-size: 0.95rem !important; height: 44px !important; padding: 10px 14px !important; width: 100% !important; border: 1px solid #cbd5e1; border-radius: 6px;">
                <span id="err_corp_ra_custom_zip" class="wizard-error-message" style="display: none; color: #ef4444; font-size: 0.75rem;"></span>
            </div>
        </div>
    `;
};


 // ============================================================================ //
// 📊 PART 1 LAYOUT ENGINE (REPAIRED REGEX SCANNER TARGET)
// ============================================================================ //
window.formRegistry['corporations-part1-layout'] = function(stateDropdownOptionsHtml = "") {
    const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
    const agentMetaRecord = centralRegistrySource["customSelectedRegisteredAgentServiceActive"] || {};
    const liveAgentFee = parseFloat(agentMetaRecord.price || 75.00).toFixed(2);
    const blankStatesHtml = stateDropdownOptionsHtml || '<option value="WY">Wyoming</option><option value="DE">Delaware</option><option value="NV">Nevada</option>';

    return `
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px; width: 100%; box-sizing: border-box; clear: both;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Corporate Business Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1; width: 100%; box-sizing: border-box;">
            <label for="corp_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Proposed Corporation Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="corp_proposed_name" required placeholder="Example Enterprises Inc." class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
            <div class="wizard-error-message" id="err_corp_proposed_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
            <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; display: block; margin-top: 2px; padding-left: 2px;">Must include "Inc.", "Incorporated", or "Corporation".</span>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1; width: 100%; box-sizing: border-box;">
            <label for="corp_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Corporate Business Purpose <span style="color: #ef4444;">*</span></label>
            <input type="text" id="corp_business_purpose" required placeholder="Brief description of operations..." class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
            <div class="wizard-error-message" id="err_corp_business_purpose" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
        </div>

        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; width: 100%; box-sizing: border-box; clear: both;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2; width: 100%; box-sizing: border-box;">
            <label for="corp_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Select Registered Agent Provision <span style="color: #ef4444;">*</span></label>
            
            <!-- FIX: Pointed onchange logic directly to your robust visibility handler and assigned data-controls-target -->
            <select id="corp_ra_choice" name="corp_ra_choice" data-controls-target="#corp_custom_ra_wrapper" required class="wizard-input-field" onchange="if(typeof window.toggleFederalTaxInventoryCostVisibility === 'function') { window.toggleFederalTaxInventoryCostVisibility(this); }" style="width: 100%; box-sizing: border-box; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 600; background: #ffffff;">
                <option value="" disabled selected>Choose...</option>
                <option value="filings4u">Utilize Filings4u Protected Agent Shield Service — $${liveAgentFee} / Year</option>
                <option value="custom">Maintain External Independent Third-Party Registered Agent</option>
            </select>
            <div class="wizard-error-message" id="err_corp_ra_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
        </div>

        <div id="corp_custom_ra_wrapper" style="grid-column: span 2; display: none; grid-template-columns: 1fr 1fr; gap: 24px; background: rgba(10, 31, 68, 0.01); padding: 20px; border-radius: 8px; border: 1px solid var(--border); box-sizing: border-box; width: 100%; clear: both;">
            
            <div class="wizard-input-group" style="grid-column: span 2; margin: 0; width: 100%;">
                <label for="corp_ra_custom_name" style="font-weight: 700; font-size: 0.8rem; color: var(--navy); display: block; margin-bottom: 4px;">Agent Name *</label>
                <input type="text" id="corp_ra_custom_name" class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
                <div class="wizard-error-message" id="err_corp_ra_custom_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
            </div>

            <div class="wizard-input-group" style="grid-column: span 2; margin: 0; width: 100%;">
                <label for="corp_ra_custom_street" style="font-weight: 700; font-size: 0.8rem; color: var(--navy); display: block; margin-bottom: 4px;">Street Address *</label>
                <input type="text" id="corp_ra_custom_street" class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
                <div class="wizard-error-message" id="err_corp_ra_custom_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
            </div>

            <div class="wizard-input-group" style="grid-column: span 1; margin: 0; width: 100%;">
                <label for="corp_ra_custom_city" style="font-weight: 700; font-size: 0.8rem; color: var(--navy); display: block; margin-bottom: 4px;">City *</label>
                <input type="text" id="corp_ra_custom_city" class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
                <div class="wizard-error-message" id="err_corp_ra_custom_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
            </div>

            <div class="wizard-input-group" style="grid-column: span 1; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0; width: 100%;">
                <div>
                    <label for="corp_ra_custom_state" style="font-weight: 700; font-size: 0.8rem; color: var(--navy); display: block; margin-bottom: 4px;">State *</label>
                    <select id="corp_ra_custom_state" class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-weight: 600; background: #ffffff;">${blankStatesHtml}</select>
                    <div class="wizard-error-message" id="err_corp_ra_custom_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
                </div>
                <div>
                    <label for="corp_ra_custom_zip" style="font-weight: 700; font-size: 0.8rem; color: var(--navy); display: block; margin-bottom: 4px;">Zip *</label>
                    <input type="text" id="corp_ra_custom_zip" maxlength="5" class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
                    <div class="wizard-error-message" id="err_corp_ra_custom_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
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


 // ============================================================================ //
// 📊 PART 2 LAYOUT: STOCK & TAX STATUS ELECTIONS (REPAIRED REGEX SCANNER TARGET)
// ============================================================================ //
window.formRegistry['corporations-part2-layout'] = function(stateDropdownOptionsHtml = "") {
    const centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
    const scorpMetaRecord = centralRegistrySource["customSelectedScorpElectionActive"] || {};
    const liveScorpFee = parseFloat(scorpMetaRecord.price || 79.00).toFixed(2);

    return `
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; width: 100%; box-sizing: border-box; clear: both;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Stock &amp; Tax Status Elections</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1; width: 100%; box-sizing: border-box;">
            <label for="corp_shares_authorized" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Total Shares Authorized <span style="color: #ef4444;">*</span></label>
            <input type="number" id="corp_shares_authorized" required placeholder="10000" class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
            <div class="wizard-error-message" id="err_corp_shares_authorized" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1; width: 100%; box-sizing: border-box;">
            <label for="corp_shares_par_value" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Par Value Per Share <span style="color: #ef4444;">*</span></label>
            <input type="text" id="corp_shares_par_value" required placeholder="0.0001" class="wizard-input-field" style="width: 100%; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">
            <div class="wizard-error-message" id="err_corp_shares_par_value" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2; width: 100%; box-sizing: border-box; clear: both;">
            <label for="corp_scorp_elect" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Do you wish to elect IRS S-Corporation status? <span style="color: #ef4444;">*</span></label>
            
            <!-- FIX: Integrated with unified visibility engine using explicit layout configuration selectors -->
            <select id="corp_scorp_elect" name="corp_scorp_elect" data-controls-target="#corp_scorp_service_wrapper" required class="wizard-input-field" onchange="if(typeof window.toggleFederalTaxInventoryCostVisibility === 'function') { window.toggleFederalTaxInventoryCostVisibility(this); }" style="width: 100%; box-sizing: border-box; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 600; background: #ffffff;">
                <option value="no" selected>No, maintain standard C-Corporation structure</option>
                <option value="yes">Yes, elect IRS Subchapter S-Corporation tax status</option>
            </select>
            <div class="wizard-error-message" id="err_corp_scorp_elect" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
        </div>

        <div id="corp_scorp_service_wrapper" style="grid-column: span 2; display: none; background: rgba(10, 31, 68, 0.01); padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; flex-direction: column; gap: 6px; box-sizing: border-box; width: 100%; clear: both; text-align: left;">
            <label for="corp_scorp_procure" style="font-weight: 700; font-size: 0.82rem; color: var(--navy); display: block; margin-bottom: 4px;">Add IRS Form 2553 Filing Preparation Service? ($${liveScorpFee})</label>
            <select id="corp_scorp_procure" name="corp_scorp_procure" class="wizard-input-field" style="width: 100%; box-sizing: border-box; height: 44px !important; padding: 10px 14px !important; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 600; background: #ffffff;" onchange="if(typeof window.executeDynamicAddonCompilation === 'function') { window.executeDynamicAddonCompilation(); }">
                <option value="no-decline">No, I will file Form 2553 independently</option>
                <option value="yes-buy">Yes, add Form 2553 Preparation — $${liveScorpFee}</option>
            </select>
            <div class="wizard-error-message" id="err_corp_scorp_procure" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none; font-weight: 500;"></div>
        </div>
    `;
};

// ============================================================================ //
// 🏢 SYSTEM COMPLIANCE SERVICE: CORPORATE FORMATION ENGINE (UNIFIED VALIDATIONS)
// ============================================================================ //
function initCorporationsServices() {
    window.formRegistry = window.formRegistry || {};

    // 1. Core HTML Template Matrix Registration
    // (Ensure your 'corporations-form-master' and layouts are added above here)

    // ============================================================================
    // 🛡️ UNIFIED COMPLIANCE FIELD VALIDATOR GATEWAY MATRIX
    // ============================================================================
    window.formRegistry['corporations-part1-validation'] = {
        requiredFields: [
            { id: 'corp_proposed_name', errId: 'err_corp_proposed_name', msg: 'Proposed corporation legal name is required.' },
            { id: 'corp_business_purpose', errId: 'err_corp_business_purpose', msg: 'Corporate operational intent description is required.' },
            { id: 'corp_ra_choice', errId: 'err_corp_ra_choice', msg: 'Please specify your registered agent choice selection.' }
        ],
        
        validate: function() {
            let isValid = true;
            let errors = [];
            
            const markInvalid = (inputEl, errorEl, msg) => {
                if (!inputEl || !errorEl) return;
                errorEl.textContent = msg;
                errorEl.style.setProperty("display", "block", "important");
                inputEl.style.setProperty("border-color", "#ef4444", "important");
                isValid = false;
                if (!errors.includes(msg)) errors.push(msg);
            };
            
            const markValid = (inputEl, errorEl) => {
                if (!inputEl || !errorEl) return;
                errorEl.style.setProperty("display", "none", "important");
                inputEl.style.setProperty("border-color", "#cbd5e1", "important");
            };

            const isVis = (el) => {
                if (!el) return false;
                if (window.getComputedStyle(el).display === "none") return false;
                const invisibleParent = el.closest('[style*="display: none"], .wizard-panel:not(.active), div[style*="display:none"]');
                if (invisibleParent) return false;
                return true;
            };

            // --- CRITERIA A: PART 1 FIELDS SWEEP ---
            this.requiredFields.forEach(f => {
                const fieldNode = document.getElementById(f.id);
                const errorNode = document.getElementById(f.errId);
                if (isVis(fieldNode) && errorNode) {
                    (!fieldNode.value.trim()) ? markInvalid(fieldNode, errorNode, f.msg) : markValid(fieldNode, errorNode);
                }
            });

            // Suffix designator evaluation pass
            const nameField = document.getElementById('corp_proposed_name');
            const nameErr = document.getElementById('err_corp_proposed_name');
            if (isVis(nameField) && nameField.value.trim() && nameErr) {
                if (!/\b(inc(orporated)?|corp(oration)?|co(mpany)?|ltd|limited)\b\.?$/i.test(nameField.value.trim())) {
                    markInvalid(nameField, nameErr, "Corporate names must terminate with a legal suffix designator (e.g., Inc., Corp., Co., Ltd.).");
                }
            }

            // Custom registered agent check sub-loop
            const raField = document.getElementById('corp_ra_choice');
            const raWrapper = document.getElementById('corp_custom_ra_wrapper');
            if (raWrapper && isVis(raWrapper) && raField && raField.value === "custom") {
                const subFields = [
                    { id: 'corp_ra_custom_name', err: 'err_corp_ra_custom_name', msg: "Independent agent name is required." },
                    { id: 'corp_ra_custom_street', err: 'err_corp_ra_custom_street', msg: "Agent street physical address is required." },
                    { id: 'corp_ra_custom_city', err: 'err_corp_ra_custom_city', msg: "Agent city coordinate parameter is required." },
                    { id: 'corp_ra_custom_zip', err: 'err_corp_ra_custom_zip', msg: "Agent Zip Code is required." }
                ];
                
                subFields.forEach(f => {
                    const el = document.getElementById(f.id);
                    const err = document.getElementById(f.err);
                    if (el && err) {
                        (!el.value.trim()) ? markInvalid(el, err, f.msg) : markValid(el, err);
                    }
                });

                const agentStreet = document.getElementById('corp_ra_custom_street');
                const agentStreetErr = document.getElementById('err_corp_ra_custom_street');
                if (agentStreet && isVis(agentStreet) && agentStreet.value.trim() && agentStreetErr) {
                    if (/\b(p\.?\s*o\.?\s*box|post\s+office\s+box)\b/i.test(agentStreet.value.trim())) {
                        markInvalid(agentStreet, agentStreetErr, "Statutory rules reject P.O. Box listings for registered offices. Provide a physical street address.");
                    }
                }
            }

            // --- CRITERIA B: UNIFIED PART 2 SHARES & TAX SWEEP ---
            const sharesField = document.getElementById('corp_shares_authorized');
            const sharesErr = document.getElementById('err_corp_shares_authorized');
            if (isVis(sharesField) && sharesErr) {
                const val = parseInt(sharesField.value, 10);
                if (isNaN(val) || val < 1) {
                    markInvalid(sharesField, sharesErr, "A corporation must authorize a minimum of 1 stock share unit.");
                } else {
                    markValid(sharesField, sharesErr);
                }
            }

            const parField = document.getElementById('corp_shares_par_value');
            const parErr = document.getElementById('err_corp_shares_par_value');
            if (isVis(parField) && parErr) {
                const rawVal = parField.value.trim();
                if (!rawVal || isNaN(parseFloat(rawVal))) {
                    markInvalid(parField, parErr, "Please specify a valid numeric par value amount per share (e.g. 0.0001 or 0).");
                } else {
                    markValid(parField, parErr);
                }
            }

            const electField = document.getElementById('corp_scorp_elect');
            const electErr = document.getElementById('err_corp_scorp_elect');
            if (isVis(electField) && electErr) {
                if (!electField.value) {
                    markInvalid(electField, electErr, "Please clarify your S-Corporation tax status preference.");
                } else {
                    markValid(electField, electErr);
                }
            }

            const scorpWrapper = document.getElementById('corp_scorp_service_wrapper');
            if (scorpWrapper && isVis(scorpWrapper) && electField && electField.value === "yes") {
                const procureField = document.getElementById('corp_scorp_procure');
                const procureErr = document.getElementById('err_corp_scorp_procure');
                if (procureField && procureErr && !procureField.value) {
                    markInvalid(procureField, procureErr, "Please select an option for your Form 2553 preparation service preference.");
                } else if (procureField && procureErr) {
                    markValid(procureField, procureErr);
                }
            }

            return { isValid, errors };
        }
    };
    
    console.log("[Corporations Service] Validation registries unified and locked.");
}

// Automatically invoke engine mappings
initCorporationsServices();

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
            el.removeAttribute("required");
            el.value = "";
            el.style.borderColor = "#cbd5e1";
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
        if (procureDropdown) {
            procureDropdown.value = "no-decline";
            procureDropdown.style.borderColor = "#cbd5e1";
        }
        
        window.customSelectedScorpElectionActive = false;
        if (window.currentCartState) window.currentCartState.customSelectedScorpElectionActive = false;
        
        if (typeof window.executeDynamicAddonCompilation === "function") {
            window.executeDynamicAddonCompilation();
        }
        if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
            window.updateDynamicPricingMatrixVanilla();
        }
    }
};

// Controller 3: Handle Checkbox Variable Selections for Form 2553 Premium Pricing Hook
window.toggleScorpFilingPricingHook = function(selectedValue) {
    const isAddonActivated = selectedValue === "yes-buy";
    window.customSelectedScorpElectionActive = isAddonActivated;
    
    if (window.currentCartState) window.currentCartState.customSelectedScorpElectionActive = isAddonActivated;
    console.log(`[Corporate Router] S-Corp Form 2553 purchase selection variable synchronized: ${isAddonActivated}`);
    
    if (typeof window.executeDynamicAddonCompilation === "function") {
        window.executeDynamicAddonCompilation();
    }
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    }
};

// ============================================================================ //
// 📦 MASTER CORPORATIONS RENDER SYSTEM ALLOCATION
// ============================================================================ //
window.formRegistry['corporations-form-master'] = function(stateDropdownOptionsHtml = "") {
    // FIXED: Assigned to correct corporations registry index key and removed ghost layout references
    const part1 = typeof window.formRegistry['corporations-part1-layout'] === "function" ? window.formRegistry['corporations-part1-layout'](stateDropdownOptionsHtml) : "";
    const part2 = typeof window.formRegistry['corporations-part2-layout'] === "function" ? window.formRegistry['corporations-part2-layout'](stateDropdownOptionsHtml) : "";
    return part1 + part2;
};



// ============================================================================ //
// FIX: REPAIRED INITIALIZER NAME MISMATCH TO AVOID RUNTIME CRASHES
// ============================================================================ //
if (typeof initCorporationsServices === "function") {
    initCorporationsServices();
} else {
    console.warn("[Init Warning] initCorporationsServices context builder root is not directly available inside this file thread.");
}
