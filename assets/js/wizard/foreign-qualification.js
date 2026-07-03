// ============================================================================ //
// 🛠️ FOREIGN QUALIFICATION VALIDATION MATRIX ENGINE (PART 1 OF 3)              //
// ============================================================================ //
function initForeignQualificationService() { 
  // Global wizard registries allocation 
  window.formRegistry = window.formRegistry || {}; 

  const fieldsToValidate = [
    { id: 'fq_proposed_name', msg: 'Proposed Foreign Entity Name is required.' },
    { id: 'fq_current_name', msg: 'Current Legal Entity Name is required.' },
    { id: 'fq_entity_type', msg: 'Please select an Entity Type.' },
    { id: 'fq_principal_street', msg: 'Principal Office Street Address is required.' },
    { id: 'fq_principal_city', msg: 'Principal Office City is required.' },
    { id: 'fq_principal_state', msg: 'Principal Office State selection is required.' },
    { id: 'fq_principal_zip', msg: 'Principal Office Zip Code is required.' },
    { id: 'fq_state_of_formation', msg: 'State of Formation selection is required.' },
    { id: 'fq_date_of_formation', msg: 'Date of Formation is required.' },
    { id: 'fq_contact_first_name', msg: 'Contact First Name is required.' },
    { id: 'fq_contact_last_name', msg: 'Contact Last Name is required.' },
    { id: 'fq_contact_email', msg: 'Contact Email Address is required.' },
    { id: 'fq_contact_phone', msg: 'Contact Phone Number is required.' }
  ];

  window.formRegistry['foreign-qualification-part1-validation'] = { 
    requiredFields: fieldsToValidate,
    validate: function() {
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

      // 1. Process mandatory target fields
      fieldsToValidate.forEach(field => {
        const el = document.getElementById(field.id);
        if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
          const currentVal = el.value ? String(el.value).trim() : "";
          if (!currentVal) {
            setError(el, field.msg);
          } else {
            clearError(el);
          }
        }
      });

      // 2. Specific Validation: Principal Zip Code Pattern Matcher
      const zipEl = document.getElementById("fq_principal_zip");
      if (zipEl && (zipEl.offsetWidth > 0 || zipEl.offsetHeight > 0)) {
        const zipVal = zipEl.value ? String(zipEl.value).trim() : "";
        if (zipVal && !/^\d{5}$/.test(zipVal)) {
          setError(zipEl, 'Principal Office Zip Code must be exactly 5 numbers.');
        }
      }

      // 3. Specific Validation: Contact Email Format
      const emailEl = document.getElementById("fq_contact_email");
      if (emailEl && (emailEl.offsetWidth > 0 || emailEl.offsetHeight > 0)) {
        const emailVal = emailEl.value ? String(emailEl.value).trim() : "";
        if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
          setError(emailEl, "Please enter a valid email address.");
        }
      }

      // 4. Specific Validation: Contact Phone Length
      const phoneEl = document.getElementById("fq_contact_phone");
      if (phoneEl && (phoneEl.offsetWidth > 0 || phoneEl.offsetHeight > 0)) {
        const phoneVal = phoneEl.value ? String(phoneEl.value).trim() : "";
        if (phoneVal) {
          const pureDigits = phoneVal.replace(/\D/g, "");
          if (pureDigits.length < 10) {
            setError(phoneEl, "Phone number must be at least 10 digits.");
          }
        }
      }

      return { isValid, errors };
    }
  };
}


// ============================================================================ //
// 🛠️ FOREIGN QUALIFICATION VALIDATION MATRIX ENGINE (PART 2 OF 3)              //
// ============================================================================ //

function buildForeignQualificationPart1ContactFields() {
  return `
    <!-- SECTION 2: CONTACT INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contact Information</h3>
    </div>
    
    <!-- FIXED: Wrapped inputs in a local 2-column grid container to force side-by-side placement -->
    <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box; margin-top: 12px;">
      
      <div class="wizard-input-group">
        <label for="fq_contact_first_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">First Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fq_contact_first_name" required placeholder="First Name" class="wizard-input-field">
        <div class="wizard-error-message" id="err_fq_contact_first_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <div class="wizard-input-group">
        <label for="fq_contact_last_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Last Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fq_contact_last_name" required placeholder="Last Name" class="wizard-input-field">
        <div class="wizard-error-message" id="err_fq_contact_last_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <div class="wizard-input-group">
        <label for="fq_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address <span style="color: #ef4444;">*</span></label>
        <input type="email" id="fq_contact_email" required placeholder="Email address" class="wizard-input-field">
        <div class="wizard-error-message" id="err_fq_contact_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      
      <div class="wizard-input-group">
        <label for="fq_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fq_contact_phone" required placeholder="Phone number" class="wizard-input-field">
        <div class="wizard-error-message" id="err_fq_contact_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>

    </div>
  `;
}

// Export function to global scope securely
window.buildForeignQualificationPart1ContactFields = buildForeignQualificationPart1ContactFields;




// ============================================================================ //
// 🛠️ FOREIGN QUALIFICATION VALIDATION MATRIX ENGINE (PART 3 OF 3)              //
// ============================================================================ //

function buildForeignQualificationPart1BusinessFields() {
  // Graceful resolution of the state options dropdown markup string
  let resolvedStateOptions = '<option value="">Select State...</option>';
  
  try {
    if (typeof stateDropdownOptionsHtml !== 'undefined' && stateDropdownOptionsHtml) {
      resolvedStateOptions = stateDropdownOptionsHtml;
    } else if (typeof getUsaStatesHtml === "function") {
      resolvedStateOptions = getUsaStatesHtml(window.selectedFormationStateCode || "");
    }
  } catch (err) {
    console.warn("State dropdown resolver fell back to default:", err);
  }

  return `
    <!-- INFORMATION OVERLAY BOX -->
    <div style="grid-column: span 2; background: #f8fafc; border-left: 4px solid var(--primary); padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 16px; box-sizing: border-box;">
      <h4 style="color: var(--navy); margin: 0 0 6px 0; font-size: 0.95rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-circle-check" style="color: var(--primary);"></i> Understanding Foreign Qualification
      </h4>
      <p style="color: var(--slate); font-size: 0.825rem; margin: 0; line-height: 1.5;">
        A Foreign Qualification grants an existing business entity explicit state authorization to conduct continuous, lawful operations within a new jurisdiction outside its original state of formation.
      </p>
    </div>
    
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 8px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Foreign Entity Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="fq_proposed_name" required placeholder="Provide corporate legal name title..." class="wizard-input-field">
      <div class="wizard-error-message" id="err_fq_proposed_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="fq_current_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current Legal Entity Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="fq_current_name" required placeholder="Exact name in home state" class="wizard-input-field">
      <div class="wizard-error-message" id="err_fq_current_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
<div class="wizard-input-group" style="grid-column: span 1;"> 
  <label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Entity Type <span style="color: #ef4444;">*</span></label> 
  
  <!-- ADDED ROUNDED BORDER AND PADDING STYLES HERE -->
  <select class="form-select wizard-input-field" required style="font-weight: 600; width: 100%; padding: 10px 12px; border: 1px solid var(--border, #cbd5e1); border-radius: 6px; box-sizing: border-box; outline: none;"> 
    <option value="" disabled selected>Select Entity Type...</option> 
    <option value="llc">Limited Liability Company (LLC)</option> 
    <option value="corporation">Corporation</option> 
    <option value="partnership">Partnership</option> 
  </select> 
</div>

    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Office Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="fq_principal_street" required placeholder="Physical office street address" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fq_principal')">
      <div class="wizard-error-message" id="err_fq_principal_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_principal_unit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Suite / Building / Apt / Unit</label>
      <input type="text" id="fq_principal_unit" placeholder="Suite, Apt, Unit" class="wizard-input-field">
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
        <div>
          <label for="fq_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
          <input type="text" id="fq_principal_city" required placeholder="City" class="wizard-input-field">
          <div class="wizard-error-message" id="err_fq_principal_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div>
          <label for="fq_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
          <select id="fq_principal_state" required class="wizard-input-field" style="font-weight: 600;">
            ${resolvedStateOptions}
          </select>
          <div class="wizard-error-message" id="err_fq_principal_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div>
          <label for="fq_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
          <input type="text" id="fq_principal_zip" required placeholder="ZIP code" style="font-family: monospace;" class="wizard-input-field">
          <div class="wizard-error-message" id="err_fq_principal_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
      </div>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="fq_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
      <select id="fq_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
        <option value="" disabled selected>Select Home State...</option>
        ${resolvedStateOptions}
      </select>
      <div class="wizard-error-message" id="err_fq_state_of_formation" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="fq_date_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date of Formation <span style="color: #ef4444;">*</span></label>
      <input type="date" id="fq_date_of_formation" required class="wizard-input-field">
      <div class="wizard-error-message" id="err_fq_date_of_formation" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
  `;
}

// Stitching everything seamlessly together into Part 1 validation container architecture
window.buildForeignQualificationFullFormHTML = function() {
  return `
    <div class="foreign-qualification-wizard-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
      ${buildForeignQualificationPart1BusinessFields()}
      ${typeof buildForeignQualificationPart1ContactFields === 'function' ? buildForeignQualificationPart1ContactFields() : ''}
    </div>
  `;
};

  

// ============================================================================ //
// 🛠️ FOREIGN QUALIFICATION VALIDATION MATRIX ENGINE (PART 2 OF 3)              //
// ============================================================================ //

// Decoupled clean configuration object initialization
const fqPart2ValidationConfig = { 
  requiredFields: [
    { id: 'fq_agent_choice', msg: 'Registered Agent Service Selection is required.' },
    { id: 'fq_business_activities', msg: 'Description of Business Activities is required.' }
  ],
  validate: function() {
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

    // 1. Process standard layout fields using the safe configuration array
    fqPart2ValidationConfig.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
        const currentVal = el.value ? String(el.value).trim() : "";
        if (!currentVal) {
          setError(el, field.msg);
        } else {
          clearError(el);
        }
      }
    });

    // 2. Conditional Registry Loop: Independent Custom Agent Fields Matrix
    const agentChoice = document.getElementById("fq_agent_choice");
    if (agentChoice && agentChoice.value === "no" && (agentChoice.offsetWidth > 0 || agentChoice.offsetHeight > 0)) {
      const manualAgentFields = [
        { id: 'fq_agent_name', msg: 'Custom Registered Agent Full Name is required.' },
        { id: 'fq_agent_street', msg: 'Registered Street Address is required.' },
        { id: 'fq_agent_city', msg: 'Registered Agent City is required.' },
        { id: 'fq_agent_state', msg: 'Registered Agent State selection is required.' },
        { id: 'fq_agent_zip', msg: 'Registered Agent Zip Code is required.' }
      ];

      manualAgentFields.forEach(field => {
        const el = document.getElementById(field.id);
        if (el) {
          const val = el.value ? String(el.value).trim() : "";
          
          if (!val) {
            setError(el, field.msg);
          } else {
            // Distinct length parsing rules for standard custom agent zip formatting
            if (field.id === 'fq_agent_zip') {
              if (!/^\d{5}$/.test(val)) {
                setError(el, 'Custom Registered Agent Zip Code must be exactly 5 digits.');
              } else {
                clearError(el);
              }
            } else {
              clearError(el);
            }
          }
        }
      });
    }

    return { isValid, errors };
  }
};

// Safe implementation onto global runtime registers
window.formRegistry = window.formRegistry || {};
window.formRegistry['foreign-qualification-part2-validation'] = fqPart2ValidationConfig;
window.fqPart2Validation = fqPart2ValidationConfig;


// ============================================================================ //
// 🛠️ FOREIGN QUALIFICATION VALIDATION MATRIX ENGINE (PART 2 - UI COMPONENT)   //
// ============================================================================ //

function buildForeignQualificationPart2HTMLComponent() {
  // Safe extraction of the dropdown options string parameter
  let optionsHtml = '';
  try {
    if (typeof stateDropdownOptionsHtml !== 'undefined' && stateDropdownOptionsHtml) {
      optionsHtml = stateDropdownOptionsHtml;
    } else if (typeof getUsaStatesHtml === "function") {
      optionsHtml = getUsaStatesHtml(window.selectedFormationStateCode || "");
    }
  } catch (err) {
    console.warn("Dropdown selection parsing yielded fallback string:", err);
  }

  return `
    <!-- SECTION 3: REGISTERED AGENT INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Registered Agent Information</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_agent_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Registered Agent Service Selection <span style="color: #ef4444;">*</span></label>
      <select id="fq_agent_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleFqAgentDetailsVisibility(this.value)">
        <option value="yes" selected>Use Filings4u Professional Registered Agent Service — $125.00 / Year (Recommended)</option>
        <option value="no">Assign an independent Registered Agent manually</option>
      </select>
      <div class="wizard-error-message" id="err_fq_agent_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <!-- Hidden Conditional Container: Independent Registered Agent Data -->
    <div id="fq_agent_manual_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
      <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Custom Statutory Agent Record Entry</span>
        
        <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
          <label for="fq_agent_name" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Agent Full Name / Corporate Entity <span style="color: #ef4444;">*</span></label>
          <input type="text" id="fq_agent_name" placeholder="Full Registered Agent Name" class="wizard-input-field">
          <div class="wizard-error-message" id="err_fq_agent_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
          <label for="fq_agent_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Registered Street Address (No P.O. Boxes) <span style="color: #ef4444;">*</span></label>
          <input type="text" id="fq_agent_street" placeholder="Street Name and Number" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fq_agent')">
          <div class="wizard-error-message" id="err_fq_agent_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="wizard-input-group" style="margin: 0;">
          <label for="fq_agent_unit" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Suite / Apt / Unit</label>
          <input type="text" id="fq_agent_unit" placeholder="e.g. Suite 500" class="wizard-input-field">
        </div>
        
        <div class="wizard-input-group" style="margin: 0;">
          <label for="fq_agent_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">City <span style="color: #ef4444;">*</span></label>
          <input type="text" id="fq_agent_city" placeholder="City Name" class="wizard-input-field">
          <div class="wizard-error-message" id="err_fq_agent_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="wizard-input-group" style="margin: 0;">
          <label for="fq_agent_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">State <span style="color: #ef4444;">*</span></label>
          <select id="fq_agent_state" class="wizard-input-field" style="font-weight: 600;">
            ${optionsHtml}
          </select>
          <div class="wizard-error-message" id="err_fq_agent_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="wizard-input-group" style="margin: 0;">
          <label for="fq_agent_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Zip Code <span style="color: #ef4444;">*</span></label>
          <input type="text" id="fq_agent_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
          <div class="wizard-error-message" id="err_fq_agent_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
      </div>
    </div>
    
    <!-- SECTION 4: BUSINESS PURPOSE -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Business Purpose</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_business_activities" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Description of Business Activities in the New State <span style="color: #ef4444;">*</span></label>
      <textarea id="fq_business_activities" required placeholder="Brief description of what your business will do in the new state..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
      <div class="wizard-error-message" id="err_fq_business_activities" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
  `;
}

// Global orchestration trigger handling layout toggles on dropdown update
window.toggleFqAgentDetailsVisibility = function(selectedOptionValue) {
  const wrapperNode = document.getElementById("fq_agent_manual_wrapper");
  if (!wrapperNode) return;
  
  if (selectedOptionValue === "no") {
    wrapperNode.style.setProperty("display", "grid", "important");
  } else {
    wrapperNode.style.setProperty("display", "none", "important");
  }
};

// Bind UI Component builder to window namespace securely
window.buildForeignQualificationPart2HTMLComponent = buildForeignQualificationPart2HTMLComponent;



// ============================================================================ //
// 🛠️ FOREIGN QUALIFICATION VALIDATION MATRIX ENGINE (PART 3 OF 3)              //
// ============================================================================ //

// Decoupled clean configuration object initialization
const fqPart3ValidationConfig = {
  requiredFields: [
    { id: 'fq_license_check_choice', msg: 'Please select a localized licensing review status option.' },
    { id: 'fq_ein_choice', msg: 'Please select an option for your Employer Identification Number (EIN).' },
    { id: 'fq_duration_type', msg: 'Please specify if this qualification is temporary or ongoing.' }
  ],
  validate: function() {
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

    // 1. Process base mandatory selectors
    fqPart3ValidationConfig.requiredFields.forEach(field => {
      const el = document.getElementById(field.id);
      if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) {
        const currentVal = el.value ? String(el.value).trim() : "";
        if (!currentVal) {
          setError(el, field.msg);
        } else {
          clearError(el);
        }
      }
    });

    // 2. Conditional Check: If user selected NO to licensing verification choice
    const licenseCheckChoice = document.getElementById("fq_license_check_choice");
    const serviceChoiceEl = document.getElementById("fq_add_licensing_service");
    
    if (licenseCheckChoice && (licenseCheckChoice.offsetWidth > 0 || licenseCheckChoice.offsetHeight > 0)) {
      if (licenseCheckChoice.value === "no" && serviceChoiceEl) {
        const serviceVal = serviceChoiceEl.value ? String(serviceChoiceEl.value).trim() : "";
        if (!serviceVal) {
          setError(serviceChoiceEl, "Please confirm if you want assistance checking for required business licenses.");
        } else {
          clearError(serviceChoiceEl);
        }
      } else if (serviceChoiceEl) {
        clearError(serviceChoiceEl);
      }
    }

    // 3. Conditional Check: If user selected YES to EIN procurement
    const einChoice = document.getElementById("fq_ein_choice");
    const einReasonEl = document.getElementById("fq_ein_reason");
    
    if (einChoice && (einChoice.offsetWidth > 0 || einChoice.offsetHeight > 0)) {
      if (einChoice.value === "yes" && einReasonEl) {
        const einReasonVal = einReasonEl.value ? String(einReasonEl.value).trim() : "";
        if (!einReasonVal) {
          setError(einReasonEl, "Reason for obtaining an Employer Identification Number (EIN) is required.");
        } else {
          clearError(einReasonEl);
        }
      } else if (einReasonEl) {
        clearError(einReasonEl);
      }
    }

    return { isValid, errors };
  }
};

// Safe implementation onto localized global architecture components
window.formRegistry = window.formRegistry || {};
window.formRegistry['foreign-qualification-part3-validation'] = fqPart3ValidationConfig;
window.fqPart3Validation = fqPart3ValidationConfig;




// ============================================================================ //
// 🛠️ FOREIGN QUALIFICATION VALIDATION MATRIX ENGINE (PART 3 - UI COMPONENT)   //
// ============================================================================ //

function buildForeignQualificationPart3HTMLComponent() {
  return `
    <!-- SECTION 5: COMPLIANCE INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Compliance Information</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_license_check_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you checked for any necessary licenses or permits required for foreign operations in the new state? <span style="color: #ef4444;">*</span></label>
      <select id="fq_license_check_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleFqLicenseAssistanceVisibility(this.value)">
        <option value="" disabled selected>Select Option...</option>
        <option value="yes">Yes, we have completed the baseline licensing review checks</option>
        <option value="no">No, we have not completely audited licensing dependencies</option>
      </select>
      <div class="wizard-error-message" id="err_fq_license_check_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <!-- Dynamic Group A: User selected YES to licensing verification -->
    <div id="fq_license_details_wrapper" style="grid-column: span 2; display: none;">
      <div class="wizard-input-group" style="margin: 0; width: 100%;">
        <label for="fq_intended_licenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please list any licenses or permits you intend to apply for:</label>
        <input type="text" id="fq_intended_licenses" placeholder="List intended operating permits, municipal tax nodes, or occupational licenses..." class="wizard-input-field">
        <div class="wizard-error-message" id="err_fq_intended_licenses" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    </div>
    
    <!-- Dynamic Group B: User selected NO to licensing verification -->
    <div id="fq_license_assistance_wrapper" style="grid-column: span 2; display: none;">
      <div class="wizard-input-group" style="margin: 0; width: 100%;">
        <label for="fq_add_licensing_service" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Would you like assistance in checking for required licenses and/or permits for $125? <span style="color: #ef4444;">*</span></label>
        <select id="fq_add_licensing_service" class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
          <option value="no" selected>No, I will run state licensing research independently</option>
          <option value="yes">Yes, add Filings4u Corporate Licensing Procurement Audit — $125.00</option>
        </select>
        <div class="wizard-error-message" id="err_fq_add_licensing_service" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    </div>
    
    <!-- SECTION 6: TAX INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Tax Information</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for a new Employer Identification Number (EIN) for foreign operations? <span style="color: #ef4444;">*</span></label>
      <select id="fq_ein_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleFqEinWorkflow(this.value)">
        <option value="no" selected>No, I already hold or will apply for EIN structures independently</option>
        <option value="yes">Yes, add Filings4u Master EIN Procurement Service — $75.00</option>
      </select>
      <div class="wizard-error-message" id="err_fq_ein_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <div id="fq_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="fq_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining an EIN <span style="color: #ef4444;">*</span></label>
      <input type="text" id="fq_ein_reason" placeholder="e.g. Opening an operational corporate bank account..." class="wizard-input-field">
      <div class="wizard-error-message" id="err_fq_ein_reason" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <!-- SECTION 7: DURATION OF QUALIFICATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Duration of Qualification</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_duration_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will this foreign qualification be temporary or ongoing? <span style="color: #ef4444;">*</span></label>
      <select id="fq_duration_type" required class="wizard-input-field" style="font-weight: 600;">
        <option value="ongoing" selected>Ongoing (Indefinite statutory operational baseline registry)</option>
        <option value="temporary">Temporary (Defined localized corporate operational timeline constraints)</option>
      </select>
      <div class="wizard-error-message" id="err_fq_duration_type" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
    </div>
    
    <!-- SECTION 8: ADDITIONAL PROVISIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Additional Provisions</h3>
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="fq_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Provisions</label>
      <textarea id="fq_provisions" placeholder="Detail any additional terms, specific clauses, or corporate structural agreements relevant to your foreign qualification registration..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
    </div>
  `;
}

// Global orchestration trigger handling compliance interface toggles
window.toggleFqLicenseAssistanceVisibility = function(value) {
  const detailsWrapper = document.getElementById("fq_license_details_wrapper");
  const assistanceWrapper = document.getElementById("fq_license_assistance_wrapper");
  
  if (detailsWrapper && assistanceWrapper) {
    if (value === "yes") {
      detailsWrapper.style.setProperty("display", "block", "important");
      assistanceWrapper.style.setProperty("display", "none", "important");
    } else if (value === "no") {
      detailsWrapper.style.setProperty("display", "none", "important");
      assistanceWrapper.style.setProperty("display", "block", "important");
    } else {
      detailsWrapper.style.setProperty("display", "none", "important");
      assistanceWrapper.style.setProperty("display", "none", "important");
    }
  }
};

// Global orchestration trigger handling EIN workflow interface toggles
window.toggleFqEinWorkflow = function(value) {
  const einWrapper = document.getElementById("fq_ein_reason_wrapper");
  if (einWrapper) {
    if (value === "yes") {
      einWrapper.style.setProperty("display", "flex", "important");
    } else {
      einWrapper.style.setProperty("display", "none", "important");
    }
  }
};

// Bind clean modular UI component builder to the global namespace securely
window.buildForeignQualificationPart3HTMLComponent = buildForeignQualificationPart3HTMLComponent;
window.buildForeignQualificationPart3 = buildForeignQualificationPart3HTMLComponent;

// ============================================================================ //
// 🛠️ REPAIRED MASTER COMPILATION ENGINE (FIXES MISSING CONTACT FIELDS)         //
// ============================================================================ //

function buildForeignQualificationForm(stateDropdownOptionsHtml = "") {
  // 1. Fetch Part 1: Business Info
  const p1 = typeof window.buildForeignQualificationPart1BusinessFields === "function" 
    ? window.buildForeignQualificationPart1BusinessFields() 
    : "";
    
  // 2. FIXED: Fetch Part 1 Contact Details (The missing step)
  const contactInfo = typeof window.buildForeignQualificationPart1ContactFields === "function"
    ? window.buildForeignQualificationPart1ContactFields()
    : "";
    
  // 3. Fetch Part 2: Registered Agent & Purpose
  const p2 = typeof window.buildForeignQualificationPart2HTMLComponent === "function" 
    ? window.buildForeignQualificationPart2HTMLComponent() 
    : "";
    
  // 4. Fetch Part 3: Compliance & Tax Info
  const p3 = typeof window.buildForeignQualificationPart3HTMLComponent === "function"
    ? window.buildForeignQualificationPart3HTMLComponent()
    : "";
    
  // Stitch all elements sequentially into a clean dual-column CSS grid matrix
  return `<div class="foreign-qualification-wizard-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
    ${p1}
    ${contactInfo}
    ${p2}
    ${p3}
  </div>`;
}

// Securely assign form construction payload generator to global window namespaces
window.buildForeignQualificationForm = buildForeignQualificationForm;

// Sync up master frame registry anchor
window.formRegistry = window.formRegistry || {};
window.formRegistry['foreign-qualification-form-master'] = function(stateDropdownOptionsHtml = "") {
  return window.buildForeignQualificationForm(stateDropdownOptionsHtml);
};


// ============================================================================ //
// ⚙️ INTERACTIVE INTERFACE CONTROLLERS (FOREIGN QUALIFICATION)                //
// ============================================================================ //

/**
 * Handles custom registered agent grid exposure.
 * Triggers subtotal balance re-calculations instantly.
 */
window.toggleFqAgentDetailsVisibility = function(selectedValue) {
  const manualWrapper = document.getElementById("fq_agent_manual_wrapper");
  if (!manualWrapper) return;
  
  const inputs = manualWrapper.querySelectorAll("input, select");
  
  if (selectedValue === "no") {
    // Customer selected: Assign an independent agent manually
    manualWrapper.style.setProperty("display", "grid", "important");
    window.customSelectedRegisteredAgentServiceActive = false; // Turn off Filings4u agent fee
    
    inputs.forEach(el => {
      if (el.id !== "fq_agent_unit") {
        el.setAttribute("required", "required");
      }
    });
    console.log("[FQ Engine] Custom agent panel exposed. Suppressing shield subscription fee.");
  } else {
    // Customer selected: Use Filings4u Agent Service
    manualWrapper.style.setProperty("display", "none", "important");
    window.customSelectedRegisteredAgentServiceActive = true; // Turn on Filings4u agent fee
    
    inputs.forEach(el => {
      el.removeAttribute("required");
      el.value = ""; // Clear buffer data
    });
    console.log("[FQ Engine] Professional agent service activated. $125/yr added.");
  }

  // Force system calculation card redraw pass
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
};

/**
 * Handles licensing verification choice block updates.
 */
window.toggleFqLicenseAssistanceVisibility = function(selectedValue) {
  const detailsWrapper = document.getElementById("fq_license_details_wrapper");
  const assistanceWrapper = document.getElementById("fq_license_assistance_wrapper");
  const auditSelect = document.getElementById("fq_add_licensing_service");
  
  if (!detailsWrapper || !assistanceWrapper) return;

  if (selectedValue === "yes") {
    detailsWrapper.style.setProperty("display", "block", "important");
    assistanceWrapper.style.setProperty("display", "none", "important");
    
    if (auditSelect) {
      auditSelect.value = "no"; // Reset the premium service option to decline
      auditSelect.removeAttribute("required");
      // Fire generic change notification event triggers to force recalculations
      auditSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
    window.customSelectedLicenseAuditSuiteActive = false; // Turn off audit fee
  } else if (selectedValue === "no") {
    detailsWrapper.style.setProperty("display", "none", "important");
    assistanceWrapper.style.setProperty("display", "block", "important");
    
    if (auditSelect) {
      auditSelect.setAttribute("required", "required");
    }
  }

  // Force balance recalculation pass
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
};

/**
 * Intercepts the inner corporate audit suite choice change values to toggle invoice subtotals.
 */
window.toggleFqLicenseServicePricingHook = function(value) {
  window.customSelectedLicenseAuditSuiteActive = (value === "yes");
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
};

/**
 * Handles EIN reason field exposure and tracks procurement add-on billing parameters.
 */
window.toggleFqEinWorkflow = function(selectedValue) {
  const reasonWrapper = document.getElementById("fq_ein_reason_wrapper");
  const reasonInput = document.getElementById("fq_ein_reason");
  if (!reasonWrapper) return;

  if (selectedValue === "yes") {
    reasonWrapper.style.setProperty("display", "flex", "important");
    window.customSelectedEinProcurementServiceActive = true; // Turn on EIN fee
    
    if (reasonInput) {
      reasonInput.setAttribute("required", "required");
    }
    console.log("[FQ Engine] Procurement fee activated ($75.00). Reason entry required.");
  } else {
    reasonWrapper.style.setProperty("display", "none", "important");
    window.customSelectedEinProcurementServiceActive = false; // Turn off EIN fee
    
    if (reasonInput) {
      reasonInput.removeAttribute("required");
      reasonInput.value = ""; // Reset entry fields
    }
    console.log("[FQ Engine] Procurement declined.");
  }

  // Force subtotal matrix lookups pass
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
};

// Master Wizard Framework Registry Integration Anchor
window.formRegistry = window.formRegistry || {};
window.formRegistry['foreign-qualification-form-master'] = function(stateDropdownOptionsHtml = "") {
  return window.buildForeignQualificationForm(stateDropdownOptionsHtml);
};
