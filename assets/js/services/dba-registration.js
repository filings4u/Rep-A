// ============================================================================ //
// 🏛️ FAMILY 33A: DBA REGISTRATION UNIFIED WIZARD ENGINE
// ============================================================================ //

function initDbaRegistrationService() { 
  // Global wizard registries allocation 
  window.formRegistry = window.formRegistry || {}; 

  // ============================================================================ //
  // 📋 PART 1: DBA REGISTRATION VALIDATION MATRIX ENGINE
  // ============================================================================ //
  
  // Part 1 Validation Allocation
  window.formRegistry['dba-registration-part1-validation'] = {
    requiredFields: [
      { id: 'dba_proposed_name', msg: 'Proposed DBA Name is required.' },
      { id: 'dba_business_purpose', msg: 'Business Purpose description is required.' },
      { id: 'dba_bus_street', msg: 'Business Location Street Address is required (P.O. Boxes prohibited).' },
      { id: 'dba_bus_city', msg: 'Business City parameter is required.' },
      { id: 'dba_bus_state', msg: 'Business State code selection is required.' },
      { id: 'dba_bus_zip', msg: 'Business Zip Code is required.' }
    ],
    validateStep: function() {
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
        el.style.removeProperty("border");
        const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
        if (errorMsgNode) {
          errorMsgNode.style.setProperty("display", "none", "important");
          errorMsgNode.textContent = "";
        }
      };

      this.requiredFields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
          const currentVal = el.value ? String(el.value).trim() : "";
          if (!currentVal) setError(el, field.msg);
          else clearError(el);
        }
      });

      const stateEl = document.getElementById('dba_bus_state');
      if (stateEl && (stateEl.offsetWidth > 0 || stateEl.offsetHeight > 0)) {
        const val = stateEl.value ? String(stateEl.value).trim() : "";
        if (val && !/^[a-zA-Z]{2}$/.test(val)) {
          setError(stateEl, 'State code must consist of exactly 2 alphabetical letters (e.g. TX).');
        }
      }

      const zipEl = document.getElementById('dba_bus_zip');
      if (zipEl && (zipEl.offsetWidth > 0 || zipEl.offsetHeight > 0)) {
        const val = zipEl.value ? String(zipEl.value).trim() : "";
        if (val && !/^\d{5}$/.test(val)) {
          setError(zipEl, 'Zip Code must consist of exactly 5 numeric digits.');
        }
      }

      return { isValid, errors };
    }
  };

  // Part 2 Validation Allocation
  window.formRegistry['dba-registration-part2-validation'] = {
    requiredFields: [
      { id: 'dba_owner_name', msg: "Owner's Full Legal Name is required." },
      { id: 'dba_owner_phone', msg: "Owner's Contact Phone Number is required." },
      { id: 'dba_owner_email', msg: "Owner's Administrative Email Address is required." },
      { id: 'dba_owner_street', msg: "Owner's Residential Street Address is required." },
      { id: 'dba_owner_city', msg: "Owner's Residential City is required." },
      { id: 'dba_owner_state', msg: "Owner's Residential State code is required." },
      { id: 'dba_owner_zip', msg: "Owner's Residential Zip Code is required." }
    ],
    validateStep: function() {
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
        el.style.removeProperty("border");
        const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
        if (errorMsgNode) {
          errorMsgNode.style.setProperty("display", "none", "important");
          errorMsgNode.textContent = "";
        }
      };

      this.requiredFields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
          const currentVal = el.value ? String(el.value).trim() : "";
          if (!currentVal) setError(el, field.msg);
          else clearError(el);
        }
      });

      const stateEl = document.getElementById('dba_owner_state');
      if (stateEl && (stateEl.offsetWidth > 0 || stateEl.offsetHeight > 0)) {
        const val = stateEl.value ? String(stateEl.value).trim() : "";
        if (val && !/^[a-zA-Z]{2}$/.test(val)) {
          setError(stateEl, 'State code must consist of exactly 2 alphabetical letters (e.g. TX).');
        }
      }

      const zipEl = document.getElementById('dba_owner_zip');
      if (zipEl && (zipEl.offsetWidth > 0 || zipEl.offsetHeight > 0)) {
        const val = zipEl.value ? String(zipEl.value).trim() : "";
        if (val && !/^\d{5}$/.test(val)) {
          setError(zipEl, 'Zip Code must consist of exactly 5 numeric digits.');
        }
      }

      const emailEl = document.getElementById("dba_owner_email");
      if (emailEl && (emailEl.offsetWidth > 0 || emailEl.offsetHeight > 0)) {
        const emailVal = emailEl.value ? String(emailEl.value).trim() : "";
        if (emailVal && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailVal)) {
          setError(emailEl, "Please provide a valid administrative owner email pattern (e.g. name@domain.com).");
        }
      }

      const phoneEl = document.getElementById("dba_owner_phone");
      if (phoneEl && (phoneEl.offsetWidth > 0 || phoneEl.offsetHeight > 0)) {
        const phoneVal = phoneEl.value ? String(phoneEl.value).trim() : "";
        if (phoneVal) {
          const digits = phoneVal.replace(/\D/g, "");
          if (digits.length < 10) {
            setError(phoneEl, "Owner's Contact Number must contain at least 10 active numerical digits.");
          }
        }
      }

      return { isValid, errors };
    }
  };

  // Part 3 Validation Allocation
  window.formRegistry['dba-registration-part3-validation'] = {
    validateStep: function() {
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
        el.style.removeProperty("border");
        const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
        if (errorMsgNode) {
          errorMsgNode.style.setProperty("display", "none", "important");
          errorMsgNode.textContent = "";
        }
      };

      const collisionCheck = document.getElementById("dba_collision_check") || document.getElementById("dba_permission_toggle");
      if (collisionCheck && collisionCheck.value === "yes" && (collisionCheck.offsetWidth > 0 || collisionCheck.offsetHeight > 0)) {
        const consentSelect = document.getElementById("dba_has_consent");
        if (consentSelect) {
          const consentVal = consentSelect.value ? String(consentSelect.value).trim() : "";
          if (!consentVal) {
            setError(consentSelect, "Please specify if you hold executed written permission credentials to register this name variant.");
          } else {
            clearError(consentSelect);
          }
        }
      }

      return { isValid, errors };
    }
  };

  // ============================================================================ //
  // 📐 PART 2: DBA REGISTRATION UI LAYOUT ARCHITECTURE
  // ============================================================================ //

  // Part 1 Layout Allocation: Business Information Template
  window.formRegistry['dba-registration-part1-layout'] = function(stateDropdownOptionsHtml = "") { 
    return `
      <!-- SECTION 1: BUSINESS INFORMATION --> 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3> 
      </div> 
      <div class="wizard-input-group"> 
        <label for="dba_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed DBA Name <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="dba_proposed_name" required placeholder="Fictitious trade name under which business will operate" class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_proposed_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Ensure your chosen trade name complies with state regulations.</span> 
      </div> 
      <div class="wizard-input-group"> 
        <label for="dba_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Purpose <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="dba_business_purpose" required placeholder="Brief description of what the business will do..." class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_business_purpose" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_bus_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Location Street Address <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="dba_bus_street" placeholder="123 Main St" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'dba_bus')"> 
        <div class="wizard-error-message" id="err_dba_bus_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div class="wizard-input-group"> 
        <label for="dba_bus_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business City <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="dba_bus_city" required placeholder="Austin" class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_bus_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;"> 
        <div> 
          <label for="dba_bus_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label> 
          <input type="text" id="dba_bus_state" required placeholder="TX" maxlength="2" class="wizard-input-field"> 
          <div class="wizard-error-message" id="err_dba_bus_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        </div> 
        <div> 
          <label for="dba_bus_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label> 
          <input type="text" id="dba_bus_zip" required placeholder="78701" class="wizard-input-field"> 
          <div class="wizard-error-message" id="err_dba_bus_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        </div> 
      </div>

      <!-- SECTION 2: OWNER INFORMATION --> 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Owner Information</h3> 
      </div> 
      <div class="wizard-input-group"> 
        <label for="dba_owner_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Full Name <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="dba_owner_name" required placeholder="Full Legal Name" class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_owner_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div class="wizard-input-group"> 
        <label for="dba_owner_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Contact Number <span style="color: #ef4444;">*</span></label> 
        <input type="tel" id="dba_owner_phone" required placeholder="(512) 555-0199" style="font-family: monospace;" class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_owner_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_owner_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Email Address <span style="color: #ef4444;">*</span></label> 
        <input type="email" id="dba_owner_email" required placeholder="owner@domain.com" class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_owner_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_owner_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Residential Street Address <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="dba_owner_street" required placeholder="789 Residential Blvd" class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_owner_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div class="wizard-input-group"> 
        <label for="dba_owner_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's City <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="dba_owner_city" required placeholder="Austin" class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_owner_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;"> 
        <div> 
          <label for="dba_owner_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label> 
          <input type="text" id="dba_owner_state" required placeholder="TX" maxlength="2" class="wizard-input-field"> 
          <div class="wizard-error-message" id="err_dba_owner_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        </div> 
        <div> 
          <label for="dba_owner_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label> 
          <input type="text" id="dba_owner_zip" required placeholder="78701" class="wizard-input-field"> 
          <div class="wizard-error-message" id="err_dba_owner_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        </div> 
      </div>
 
      <!-- SECTION 3: EXISTING BUSINESS INFORMATION (IF APPLICABLE) --> 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Existing Business Information (If Applicable)</h3> 
      </div> 
      <div class="wizard-input-group"> 
        <label for="dba_exist_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current Legal Business Name</label> 
        <input type="text" id="dba_exist_legal_name" placeholder="Leave blank if registering as an individual" class="wizard-input-field"> 
      </div> 
      <div class="wizard-input-group"> 
        <label for="dba_exist_structure" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current Legal Business Structure</label> 
        <select id="dba_exist_structure" class="wizard-input-field" style="font-weight: 600;"> 
          <option value="none" selected>No parent structure (Individual / Sole Proprietorship)</option> 
          <option value="llc">Limited Liability Company (LLC)</option> 
          <option value="corporation">Corporation (C-Corp / S-Corp)</option> 
          <option value="partnership">Partnership</option> 
        </select> 
      </div> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_exist_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current Business Street Address</label> 
        <input type="text" id="dba_exist_street" placeholder="123 Corporate Pkwy, Suite 100" class="wizard-input-field"> 
      </div> 
      
      <!-- SECTION 4: DBA DETAILS & CONFIRMATION --> 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. DBA Details &amp; Name Search</h3> 
      </div> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_collision_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Is this DBA name already registered by another entity? <span style="color: #ef4444;">*</span></label> 
        <select id="dba_collision_check" required class="wizard-input-field" style="font-weight: 600;"> 
          <option value="no" selected>No, name is completely available / original</option> 
          <option value="yes">Yes, name is registered by another entity</option> 
        </select> 
        <div class="wizard-error-message" id="err_dba_collision_check" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      
      <!-- Conditional Wrapper: Written Consent Checker vs. filings4u Name Search --> 
      <div id="dba_permission_matrix_wrapper" style="grid-column: span 2; background: var(--light-bg); padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; box-sizing: border-box; display: none; flex-direction: column; gap: 14px;"> 
        <div class="wizard-input-group" style="margin: 0;"> 
          <label for="dba_has_consent" style="font-weight: 700; font-size: 0.82rem; color: var(--navy);">Have you obtained written permission from the original entity? <span style="color: #ef4444;">*</span></label> 
          <select id="dba_has_consent" class="wizard-input-field" style="background: #ffffff; font-weight: 600;"> 
            <option value="yes" selected>Yes, I have executed written permission files ready to upload</option> 
            <option value="no-buy">No, add Filings4u Comprehensive Name Availability Search — $79.00</option> 
          </select> 
          <div class="wizard-error-message" id="err_dba_has_consent" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
        </div> 
      </div> 
    ` + (typeof window.formRegistry['sole-prop-part2-layout'] === "function" ? window.formRegistry['sole-prop-part2-layout']() : "");
  };


  // ============================================================================ //
  // 📋 PART 1: UPDATE - DBA REGISTRATION PART 2 VALIDATION ENGINE
  // ============================================================================ //

  // Updated Part 2 Validation Allocation
  window.formRegistry['dba-registration-part2-validation'] = {
    requiredFields: [
      { id: 'dba_ein_choice', msg: 'Please select an option for your Employer Identification Number (EIN).' },
      { id: 'dba_license_check', msg: 'Please verify if you have checked localized business licenses.' },
      { id: 'dba_duration_choice', msg: 'Please specify if this trade name operational model is temporary or ongoing.' }
    ],
    validateStep: function() {
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
        el.style.removeProperty("border");
        const errorMsgNode = document.getElementById("err_" + el.id) || el.parentElement?.querySelector(".wizard-error-message");
        if (errorMsgNode) {
          errorMsgNode.style.setProperty("display", "none", "important");
          errorMsgNode.textContent = "";
        }
      };

      // 1. Process standard layout select elements presence
      this.requiredFields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
          const currentVal = el.value ? String(el.value).trim() : "";
          if (!currentVal) setError(el, field.msg);
          else clearError(el);
        }
      });

      // 2. Conditional Check: Validate EIN Reason input box if selection matches YES
      const einChoice = document.getElementById("dba_ein_choice");
      if (einChoice && einChoice.value === "yes" && (einChoice.offsetWidth > 0 || einChoice.offsetHeight > 0)) {
        const reasonEl = document.getElementById("dba_ein_reason");
        if (reasonEl) {
          const reasonVal = reasonEl.value ? String(reasonEl.value).trim() : "";
          if (!reasonVal) {
            setError(reasonEl, "Reason for obtaining an EIN is required.");
          } else {
            clearError(reasonEl);
          }
        }
      }

      // 3. Conditional Check: Validate Expiration Date field if duration matches TEMPORARY
      const durationChoice = document.getElementById("dba_duration_choice");
      if (durationChoice && durationChoice.value === "temporary" && (durationChoice.offsetWidth > 0 || durationChoice.offsetHeight > 0)) {
        const dateEl = document.getElementById("dba_expiration_date");
        if (dateEl) {
          const dateVal = dateEl.value ? String(dateEl.value).trim() : "";
          if (!dateVal) {
            setError(dateEl, "Specify Expiration Date is required.");
          } else {
            clearError(dateEl);
          }
        }
      }

      return { isValid, errors };
    }
  };


  // ============================================================================ //
  // 📐 PART 2: UPDATE - DBA REGISTRATION PART 2 UI LAYOUT ENGINE
  // ============================================================================ //

  // Part 4 Layout Allocation: Tax, Compliance, Provisions, and Duration Templates
  window.formRegistry['dba-registration-part4-layout'] = function() { 
    return `
      <!-- SECTION 5: TAX INFORMATION --> 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Tax Information</h3> 
      </div> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for an Employer Identification Number (EIN)? <span style="color: #ef4444;">*</span></label> 
        <select id="dba_ein_choice" required class="wizard-input-field" style="font-weight: 600;"> 
          <option value="no" selected>No, I do not require a Federal EIN at this time</option> 
          <option value="yes">Yes, I want to procure an EIN record</option> 
        </select> 
        <div class="wizard-error-message" id="err_dba_ein_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div id="dba_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;"> 
        <label for="dba_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining an EIN <span style="color: #ef4444;">*</span></label> 
        <input type="text" id="dba_ein_reason" placeholder="e.g., Hiring employees, opening a business banking line..." class="wizard-input-field"> 
        <div class="wizard-error-message" id="err_dba_ein_reason" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      
      <!-- SECTION 6: COMPLIANCE AND LICENSES --> 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Compliance and Licenses</h3> 
      </div> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_license_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you verified the necessary localized business licenses or permits? <span style="color: #ef4444;">*</span></label> 
        <select id="dba_license_check" required class="wizard-input-field" style="font-weight: 600;"> 
          <option value="" disabled selected>Choose an option...</option> 
          <option value="yes">Yes, I have verified my structural requirements</option> 
          <option value="no">No, I need help — Add Filings4u Compliance Research Suite — $79.00</option> 
        </select> 
        <div class="wizard-error-message" id="err_dba_license_check" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div id="dba_custom_license_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;"> 
        <label for="dba_intended_licenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">List Intentional Licenses / Permits to Apply For</label> 
        <textarea id="dba_intended_licenses" placeholder="Provide general targets: e.g. Municipal Sales Tax Permit, Local Health Department Authorization..." rows="2" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea> 
        <div class="wizard-error-message" id="err_dba_intended_licenses" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      
      <!-- SECTION 7: ADDITIONAL PROVISIONS --> 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Additional Provisions (Optional)</h3> </div> <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">DBA Special Clauses or Understandings</label> 
        <textarea id="dba_provisions" placeholder="Detail any extra terms or agreements relevant to your DBA registration..." rows="3" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea> 
      </div> 
      
      <!-- SECTION 8: DURATION OF DBA --> 
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Duration of DBA</h3> 
      </div> 
      <div class="wizard-input-group" style="grid-column: span 2;"> 
        <label for="dba_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will this DBA be temporary or ongoing? <span style="color: #ef4444;">*</span></label> 
        <select id="dba_duration_choice" required class="wizard-input-field" style="font-weight: 600;"> 
          <option value="perpetual" selected>Perpetual (Ongoing baseline trade presence status)</option> 
          <option value="temporary">Temporary / Specified Term</option> 
        </select> 
        <div class="wizard-error-message" id="err_dba_duration_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
      <div id="dba_duration_term_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;"> 
        <label for="dba_expiration_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Specify Expiration Date <span style="color: #ef4444;">*</span></label> 
        <input type="date" id="dba_expiration_date" class="wizard-input-field" style="font-weight: 600;"> 
        <div class="wizard-error-message" id="err_dba_expiration_date" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div> 
      </div> 
    `;
  };


  // ============================================================================ //
  // 🎮 PART 3: DBA INTERACTIVE INTERFACE CONTROLLER EXTENSIONS
  // ============================================================================ //

  // Handle name conflict permission visibility rules
  function toggleDbaPermissionWorkflow(value) {
    const permWrapper = document.getElementById("dba_permission_matrix_wrapper");
    const consentSelect = document.getElementById("dba_has_consent");
    if (!permWrapper) return;
    if (value === "yes") {
      permWrapper.style.setProperty("display", "flex", "important");
      if (consentSelect) consentSelect.setAttribute("required", "required");
    } else {
      permWrapper.style.setProperty("display", "none", "important");
      if (consentSelect) {
        consentSelect.removeAttribute("required");
        consentSelect.value = "yes";
      }
      window.customSelectedDbaSearchProcurementActive = false;
    }
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
  }

  // Handle availability search selection rules
  function toggleDbaSearchProcurement(value) {
    window.customSelectedDbaSearchProcurementActive = (value === "no-buy");
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
  }

  // Handle federal tax ID input box rules
  function toggleDbaEinReasonField(value) {
    const einWrapper = document.getElementById("dba_ein_reason_wrapper");
    const einInput = document.getElementById("dba_ein_reason");
    if (!einWrapper) return;
    if (value === "yes") {
      einWrapper.style.setProperty("display", "flex", "important");
      if (einInput) einInput.setAttribute("required", "required");
      window.customSelectedEinProcurementServiceActive = true;
    } else {
      einWrapper.style.setProperty("display", "none", "important");
      if (einInput) {
        einInput.removeAttribute("required");
        einInput.value = "";
      }
      window.customSelectedEinProcurementServiceActive = false;
    }
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
  }

  // Handle compliance permit options visibility rules
  function toggleDbaLicenseWorkflow(value) {
    const licWrapper = document.getElementById("dba_custom_license_wrapper");
    if (!licWrapper) return;
    if (value === "yes") {
      licWrapper.style.setProperty("display", "flex", "important");
      window.customSelectedLicenseAuditSuiteActive = false;
    } else {
      licWrapper.style.setProperty("display", "none", "important");
      licWrapper.querySelectorAll("textarea").forEach(el => el.value = "");
      window.customSelectedLicenseAuditSuiteActive = (value === "no");
    }
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla();
  }

  // Handle temporal duration date pickers visibility rules
  function toggleDbaDurationField(value) {
    const dateWrapper = document.getElementById("dba_duration_term_wrapper");
    const dateInput = document.getElementById("dba_expiration_date");
    if (!dateWrapper) return;
    if (value === "temporary") {
      dateWrapper.style.setProperty("display", "flex", "important");
      if (dateInput) dateInput.setAttribute("required", "required");
    } else {
      dateWrapper.style.setProperty("display", "none", "important");
      if (dateInput) {
        dateInput.removeAttribute("required");
        dateInput.value = "";
      }
    }
  }

  // Map local control variables explicitly to the global window runtime structure
  window.toggleDbaPermissionWorkflow = toggleDbaPermissionWorkflow;
  window.toggleDbaSearchProcurement = toggleDbaSearchProcurement;
  window.toggleDbaEinReasonField = toggleDbaEinReasonField;
  window.toggleDbaLicenseWorkflow = toggleDbaLicenseWorkflow;
  window.toggleDbaDurationField = toggleDbaDurationField;

  // ============================================================================ //
  // 🏁 PART 4: MASTER VALIDATION INTERCEPTOR HOOK
  // ============================================================================ //

  /**
   * filings4u, LLC - Master DBA Validation Interceptor Hook
   * Chains internal checker methods directly into the master page navigation suite.
   * @returns {boolean} Status report signaling clean parameter validation.
   */
  function validateEntireDbaRegistrationWizard() {
    console.log("[Validation Suite] Running master validation sweep inside dba-registration.js...");
    let finalOutcome = true;

    // Validate Part 1
    if (window.formRegistry['dba-registration-part1-validation'] && typeof window.formRegistry['dba-registration-part1-validation'].validateStep === "function") {
      const part1Outcome = window.formRegistry['dba-registration-part1-validation'].validateStep();
      if (!part1Outcome.isValid) finalOutcome = false;
    }

    // Validate Part 2
    if (window.formRegistry['dba-registration-part2-validation'] && typeof window.formRegistry['dba-registration-part2-validation'].validateStep === "function") {
      const part2Outcome = window.formRegistry['dba-registration-part2-validation'].validateStep();
      if (!part2Outcome.isValid) finalOutcome = false;
    }

    // Validate Part 3
    if (window.formRegistry['dba-registration-part3-validation'] && typeof window.formRegistry['dba-registration-part3-validation'].validateStep === "function") {
      const part3Outcome = window.formRegistry['dba-registration-part3-validation'].validateStep();
      if (!part3Outcome.isValid) finalOutcome = false;
    }

    const globalAlertBanner = document.getElementById("wizard-global-validation-alert");
    if (globalAlertBanner) {
      globalAlertBanner.style.display = finalOutcome ? "none" : "block";
      if (!finalOutcome) {
        globalAlertBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Action Required: Please correct fields highlighted in red to advance.`;
      }
    }
    return finalOutcome;
  }

  window.validateEntireDbaRegistrationWizard = validateEntireDbaRegistrationWizard;
  window.validateDbaWizard = validateEntireDbaRegistrationWizard;

  // Master Render System Allocation
  window.formRegistry['dba-registration-form-master'] = function(stateDropdownOptionsHtml = "") { 
    // FIXED: Functions are now properly executed using () brackets and receive arguments cleanly
    return window.formRegistry['dba-registration-part1-layout'](stateDropdownOptionsHtml) + 
           window.formRegistry['dba-registration-part2-layout']() + 
           window.formRegistry['dba-registration-part3-layout'](); 
  };

} // End of initDbaRegistrationService() closure wrapper

