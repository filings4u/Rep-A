function initAnnualReportsService() {
  window.formRegistry = window.formRegistry || {};

  window.formRegistry['annual-reports-part1-validation'] = {
    requiredFields: [
      { id: 'ar_business_name', msg: 'Business Name is required.' },
      { id: 'ar_business_id', msg: 'Business ID Number is required.' },
      { id: 'ar_business_type', msg: 'Please select a Business Type.' },
      { id: 'ar_principal_street', msg: 'Principal Address Street is required.' },
      { id: 'ar_principal_city', msg: 'Principal Address City is required.' },
      { id: 'ar_principal_state', msg: 'Principal Address State is required.' },
      { id: 'ar_principal_zip', msg: 'Principal Address Zip Code is required.' },
      { id: 'ar_mailing_choice', msg: 'Mailing Address Selection choice is required.' },
      { id: 'ar_contact_name', msg: "Primary Contact Person's Full Name is required." },
      { id: 'ar_contact_phone', msg: "Contact Person's Phone Number is required." },
      { id: 'ar_contact_email', msg: "Contact Person's Email Address is required." }
    ],

    setupLiveInputFilters: function() {
      const numericIds = ['ar_business_id', 'ar_principal_zip', 'ar_mailing_zip'];
      numericIds.forEach(id => {
        const inputNode = document.getElementById(id);
        if (inputNode) {
          inputNode.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '');
          });
        }
      });
    },
    validate: function() {
      let isValid = true;
      let errors = [];

      // 1. FIRST PASS: Standard non-empty checks
      this.requiredFields.forEach(f => {
        const el = document.getElementById(f.id);
        if (!el) return;

        // FIX: Skip validation if it is an alternate mailing field and choice is "same"
        const isMailingField = f.id.startsWith('ar_mailing_');
        const mailingChoice = document.getElementById("ar_mailing_choice")?.value;
        if (isMailingField && mailingChoice !== "different") return;

        if (!el.value.trim()) {
          el.style.setProperty("border-color", "#ef4444", "important");
          isValid = false;
          if (!errors.includes(f.msg)) errors.push(f.msg);
        } else {
          el.style.setProperty("border-color", "#cbd5e1", "important");
        }
      });
      // 2. Business ID Format Check
      const idEl = document.getElementById("ar_business_id");
      if (idEl && idEl.value.trim() && !/^\d+$/.test(idEl.value.trim())) {
        idEl.style.setProperty("border-color", "#ef4444", "important");
        isValid = false;
        errors.push('Business ID Number must consist strictly of digits.');
      }

      // 3. Zip Code Format Checks (Principal & Alternate)
      ['ar_principal_zip', 'ar_mailing_zip'].forEach(id => {
        const zipEl = document.getElementById(id);
        // Only check mailing zip if alternative mailing is active
        if (id === 'ar_mailing_zip' && document.getElementById("ar_mailing_choice")?.value !== "different") return;
        
        if (zipEl && zipEl.value.trim() && !/^\d{5}$/.test(zipEl.value.trim())) {
          zipEl.style.setProperty("border-color", "#ef4444", "important");
          isValid = false;
          const msg = id.includes('principal') ? 'Principal Zip must be exactly 5 digits.' : 'Mailing Zip must be exactly 5 digits.';
          errors.push(msg);
        }
      });

      // 4. Contact Email Format Check
      const emailEl = document.getElementById("ar_contact_email");
      if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        emailEl.style.setProperty("border-color", "#ef4444", "important");
        isValid = false;
        errors.push("Please enter a valid contact person email address.");
      }

      // 5. Contact Phone Format Check
      const phoneEl = document.getElementById("ar_contact_phone");
      if (phoneEl && phoneEl.value.trim()) {
        const strippedPhone = phoneEl.value.replace(/\D/g, "");
        if (strippedPhone.length < 10) {
          phoneEl.style.setProperty("border-color", "#ef4444", "important");
          isValid = false;
          errors.push("Contact Person's Phone Number must contain at least 10 numbers.");
        }
      }

      return { isValid, errors };
    }
  };
}

initAnnualReportsService();



    // ============================================================================ // 
    // 2. COMPREHENSIVE ENGINE VALIDATORS & INPUT LISTENERS (PART 2)                // 
    // ============================================================================ // 
    window.formRegistry = window.formRegistry || {}; 
    
    window.formRegistry['annual-reports-part2-validation'] = { 
        requiredFields: [ 
            { id: 'ar_state_due_date', msg: 'Annual Report Filing Due Date is required.' }, 
            { id: 'ar_state_filed_choice', msg: 'Please specify if your state annual report has been filed.' }, 
            { id: 'ar_city_filed_choice', msg: 'Please specify if your city annual report has been filed.' }, 
            { id: 'ar_federal_ein', msg: 'Federal Employer Identification Number (EIN) is required.' }, 
            { id: 'ar_fed_filed_choice', msg: 'Please specify if your federal taxes have been filed.' } 
        ], 
        
        /** 
         * 🔘 LIVE INPUT RESTRICTION HANDLER (PART 2): 
         * Enforces numeric limits on the Federal EIN field during active keystrokes. 
         */ 
        setupLiveInputFilters: function() { 
            const einNode = document.getElementById('ar_federal_ein'); 
            if (einNode) { 
                einNode.addEventListener('input', function(e) { 
                    // Strip out non-numeric characters and cap input at a standard 9-digit profile layout limit 
                    let numVal = this.value.replace(/\D/g, ''); 
                    if (numVal.length > 9) numVal = numVal.slice(0, 9); 
                    this.value = numVal; 
                }); 
            } 
        }, 
        
        validate: function() { 
            let isValid = true; 
            let errors = []; 
            
            // 1. FIRST PASS: Run through base required structural checks 
            this.requiredFields.forEach(f => { 
                const el = document.getElementById(f.id); 
                if (el) { 
                    if (!el.value.trim()) { 
                        el.style.setProperty("border-color", "#ef4444", "important"); 
                        isValid = false; 
                        if (!errors.includes(f.msg)) errors.push(f.msg); 
                    } else { 
                        el.style.setProperty("border-color", "#cbd5e1", "important"); 
                    } 
                } 
            }); 
            
            // 2. DEEP VALIDATION: Federal EIN Formatting (Strict 9-digit check block) 
            const einEl = document.getElementById("ar_federal_ein"); 
            if (einEl && einEl.value.trim()) { 
                if (einEl.value.replace(/\D/g, "").length !== 9) { 
                    einEl.style.setProperty("border-color", "#ef4444", "important"); 
                    isValid = false; 
                    const einError = "Federal Employer Identification Number (EIN) must be exactly 9 digits."; 
                    if (!errors.includes(einError)) errors.push(einError); 
                } 
            } 
            
            // Helper function to cleanly handle conditional reason textareas 
            const checkConditionalReason = (choiceId, reasonId, baseMsg) => { 
                const choiceEl = document.getElementById(choiceId); 
                const reasonEl = document.getElementById(reasonId); 
                if (reasonEl) { 
                    if (choiceEl && choiceEl.value === "no") { 
                        if (!reasonEl.value.trim()) { 
                            reasonEl.style.setProperty("border-color", "#ef4444", "important"); 
                            isValid = false; 
                            if (!errors.includes(baseMsg)) errors.push(baseMsg); 
                        } else { 
                            reasonEl.style.setProperty("border-color", "#cbd5e1", "important"); 
                        } 
                    } else { 
                        reasonEl.style.setProperty("border-color", "#cbd5e1", "important"); 
                    } 
                } 
            }; 
            
            // 3. CONDITIONAL VALIDATION: State Outstanding Reason 
            checkConditionalReason( 
                "ar_state_filed_choice", "ar_state_reason", "Please specify why the state annual filing is outstanding." 
            ); 
            
            // 4. CONDITIONAL VALIDATION: City Outstanding Reason 
            checkConditionalReason( 
                "ar_city_filed_choice", "ar_city_reason", "Please specify why the city annual filing is outstanding." 
            ); 
            
            // 5. CONDITIONAL VALIDATION: Federal Outstanding Reason 
            checkConditionalReason( 
                "ar_fed_filed_choice", "ar_fed_reason", "Please specify why the federal tax filing is outstanding." 
            ); 
            
            return { isValid, errors }; 
        } 
    };


    // ============================================================================ // 
    // 3. COMPREHENSIVE ENGINE VALIDATORS (PART 3)                                  // 
    // ============================================================================ // 
    window.formRegistry['annual-reports-part3-validation'] = { 
        requiredFields: [ 
            { id: 'ar_other_filed_choice', msg: 'Please answer the peripheral paperwork filing question.' }, 
            { id: 'ar_compliance_verified', msg: 'Please answer the compliance verification check question.' } 
        ], 
        
        validate: function() { 
            let isValid = true; 
            let errors = []; 
            
            // 1. FIRST PASS: Standard non-empty checks for primary fields 
            this.requiredFields.forEach(f => { 
                const el = document.getElementById(f.id); 
                if (el) { 
                    if (!el.value.trim()) { 
                        el.style.setProperty("border-color", "#ef4444", "important"); 
                        isValid = false; 
                        if (!errors.includes(f.msg)) errors.push(f.msg); 
                    } else { 
                        el.style.setProperty("border-color", "#cbd5e1", "important"); 
                    } 
                } 
            }); 
            
            // Helper function to cleanly handle conditional list textareas 
            const checkConditionalList = (choiceId, targetValue, listId, errorMsg) => { 
                const choiceEl = document.getElementById(choiceId); 
                const listEl = document.getElementById(listId); 
                if (listEl) { 
                    if (choiceEl && choiceEl.value === targetValue) { 
                        // Left regular: Accept alphanumeric character sequences 
                        if (!listEl.value.trim() || !/[a-zA-Z0-9]/.test(listEl.value)) { 
                            listEl.style.setProperty("border-color", "#ef4444", "important"); 
                            isValid = false; 
                            if (!errors.includes(errorMsg)) errors.push(errorMsg); 
                        } else { 
                            listEl.style.setProperty("border-color", "#cbd5e1", "important"); 
                        } 
                    } else { 
                        listEl.style.setProperty("border-color", "#cbd5e1", "important"); 
                    } 
                } 
            }; 
            
            // 2. CONDITIONAL VALIDATION: Other Filings List (Triggers when choice is "yes") 
            checkConditionalList( 
                "ar_other_filed_choice", "yes", "ar_other_filings_list", "Please list the types of other peripheral filings and their due dates." 
            ); 
            
            // 3. CONDITIONAL VALIDATION: Pending Renewals List (Triggers when choice is "no") 
            checkConditionalList( 
                "ar_compliance_verified", "no", "ar_pending_renewals_list", "Please list the operational licenses or permits that need to be renewed or updated." 
            ); 
            
            return { isValid, errors }; 
        } 
    };


 // ============================================================================ // 
// 2. FORM LAYOUT GENERATION MATRICES (PART 1)                                  // 
// ============================================================================ // 
window.formRegistry['annual-reports-part1-layout'] = function(stateDropdownOptionsHtml) { 
  return ` 
    <!-- Info Banner --> 
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy, #0a1f44); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate, #64748b); box-sizing: border-box; margin-bottom: 20px;"> 
      <strong style="color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is an Annual Report Filing?</strong> 
      An Annual Report is a mandatory periodic filing required to maintain active legal standing. 
    </div> 

    <!-- Section Title --> 
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 10px; margin-bottom: 16px;"> 
      <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3> </div> 

    <!-- Core Fields Grid System --> 
    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
      <label for="ar_business_name" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Business Name *</label>
      <input type="text" id="ar_business_name" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
      <label for="ar_business_id" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Business ID Number *</label>
      <input type="text" id="ar_business_id" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_business_type" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Business Type *</label> 
      <select id="ar_business_type" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
        <option value="" disabled selected>Select...</option> 
        <option value="llc">LLC</option> 
        <option value="corporation">Corporation</option> 
        <option value="partnership">Partnership</option> 
        <option value="sole_proprietorship">Sole Proprietorship</option> 
      </select> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_principal_street" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Address *</label> 
      <input type="text" id="ar_principal_street" required class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ar_principal')" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;"> 
    </div> 

    <!-- Principal Address Composite Grid --> 
    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px;"> 
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;"> 
        <div style="display: flex; flex-direction: column; gap: 6px;"><label for="ar_principal_city" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">City *</label><input type="text" id="ar_principal_city" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;"></div> 
        <div style="display: flex; flex-direction: column; gap: 6px;"><label for="ar_principal_state" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">State *</label><select id="ar_principal_state" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;">${stateDropdownOptionsHtml}</select></div> 
        <div style="display: flex; flex-direction: column; gap: 6px;"><label for="ar_principal_zip" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Zip Code *</label><input type="text" id="ar_principal_zip" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;"></div> 
      </div> 
    </div> 

    <!-- Conditional Trigger Selection Dropdown --> 
    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_mailing_choice" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Mailing Address Selection *</label> 
      <select id="ar_mailing_choice" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
        <option value="same" selected>Identical</option> 
        <option value="different">Different</option> 
      </select> 
    </div> 

    <!-- Alternate Mailing Wrapper Group (Controlled dynamically via change tracking script) --> 
    <div id="ar_mailing_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px; margin-bottom: 20px; width: 100%; box-sizing: border-box;"> 
      <div style="border-top: 1px dashed var(--border, #e2e8f0); padding-top: 16px; margin-top: 8px;"> 
        <h4 style="color: var(--navy, #0a1f44); font-size: 0.95rem; font-weight: 700; margin: 0;">Alternate Mailing Address</h4> 
      </div> 
      <div style="display: flex; flex-direction: column; gap: 6px;"><label for="ar_mailing_street" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Mailing Street *</label><input type="text" id="ar_mailing_street" placeholder="Mailing Street" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ar_mailing')" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;"></div> 
      
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
        <div style="display: flex; flex-direction: column; gap: 6px;"><label for="ar_mailing_city" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Mailing City *</label><input type="text" id="ar_mailing_city" placeholder="Mailing City" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;"></div> 
        <div style="display: flex; flex-direction: column; gap: 6px;"><label for="ar_mailing_state" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Mailing State *</label><select id="ar_mailing_state" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;">${stateDropdownOptionsHtml}</select></div> 
        <div style="display: flex; flex-direction: column; gap: 6px;"><label for="ar_mailing_zip" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Mailing Zip *</label><input type="text" id="ar_mailing_zip" placeholder="Mailing Zip" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;"></div> 
      </div>
    </div> 

    <!-- Contact Metadata Input Section --> 
    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
      <label for="ar_contact_name" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Primary Contact Full Name *</label>
      <input type="text" id="ar_contact_name" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
      <label for="ar_contact_phone" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Phone *</label>
      <input type="tel" id="ar_contact_phone" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
      <label for="ar_contact_email" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Email *</label>
      <input type="email" id="ar_contact_email" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;">
    </div> 
  `; 
};

// ============================================================================ // 
// 2. FORM LAYOUT GENERATION MATRICES (PARTS 2 & 3)                             // 
// ============================================================================ // 
window.formRegistry['annual-reports-part2-layout'] = function() { 
  return ` 
    <!-- Section 3: State Filings --> 
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 10px; margin-bottom: 16px;"> 
      <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">3. State Filings</h3> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_state_due_date" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Due Date *</label> 
      <input type="date" id="ar_state_due_date" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff; font-family: inherit;"> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_state_filed_choice" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Filed for current year? *</label> 
      <select id="ar_state_filed_choice" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
        <option value="" disabled selected>Select...</option> 
        <option value="yes">Yes</option> 
        <option value="no">No</option> 
      </select> 
    </div> 

    <div id="ar_state_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; flex-direction: column; gap: 6px; margin-bottom: 20px;"> 
      <label for="ar_state_reason" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Specify why: *</label> 
      <textarea id="ar_state_reason" class="wizard-input-field" rows="2" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; font-family: inherit; resize: vertical;"></textarea> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_state_file_upload" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Upload State Filing Receipt (Optional)</label> 
      <input type="file" id="ar_state_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
    </div> 

    <!-- Section 4: City Filings --> 
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 10px; margin-bottom: 16px;"> 
      <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">4. City Filings</h3> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_city_license_num" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">City License Number</label> 
      <input type="text" id="ar_city_license_num" placeholder="City License" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;"> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_city_due_date" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">City Filing Due Date</label> 
      <input type="date" id="ar_city_due_date" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff; font-family: inherit;"> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_city_filed_choice" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Filed for current year? *</label> 
      <select id="ar_city_filed_choice" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
        <option value="" disabled selected>Select...</option> 
        <option value="na">N/A (Not Applicable)</option> 
        <option value="yes">Yes</option> 
        <option value="no">No</option> 
      </select> 
    </div> 

    <div id="ar_city_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; flex-direction: column; gap: 6px; margin-bottom: 20px;"> 
      <label for="ar_city_reason" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Specify why city filing is outstanding: *</label> 
      <textarea id="ar_city_reason" class="wizard-input-field" rows="2" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; font-family: inherit; resize: vertical;"></textarea> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_city_file_upload" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Upload City Filing Receipt (Optional)</label> 
      <input type="file" id="ar_city_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
    </div> 

    <!-- Section 5: Federal Filings --> 
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 10px; margin-bottom: 16px;"> 
      <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Federal Filings</h3> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_federal_ein" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Federal EIN *</label> 
      <input type="text" id="ar_federal_ein" required placeholder="00-0000000" class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box;"> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_fed_filed_choice" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Federal Taxes Filed? *</label> 
      <select id="ar_fed_filed_choice" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
        <option value="" disabled selected>Select...</option> 
        <option value="yes">Yes</option> 
        <option value="no">No</option> 
      </select> 
    </div> 

    <div id="ar_fed_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; flex-direction: column; gap: 6px; margin-bottom: 20px;"> 
      <label for="ar_fed_reason" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Specify why federal filing is outstanding: *</label> 
      <textarea id="ar_fed_reason" class="wizard-input-field" rows="2" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; font-family: inherit; resize: vertical;"></textarea> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_fed_file_upload" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Upload Federal Filing Receipt (Optional)</label> 
      <input type="file" id="ar_fed_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
    </div> 
  `; 
};

// ============================================================================ // 
// 2. FORM LAYOUT GENERATION MATRICES (PART 3 & MASTER AGGREGATION)            // 
// ============================================================================ // 
window.formRegistry['annual-reports-part3-layout'] = function() { 
  return ` 
    <!-- Section 6: Other Filings --> 
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 10px; margin-bottom: 16px;"> 
      <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Other Filings</h3> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_other_filed_choice" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Any other peripheral paperwork filings? *</label> 
      <select id="ar_other_filed_choice" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
        <option value="" disabled selected>Select...</option> 
        <option value="no">No</option> 
        <option value="yes">Yes</option> 
      </select> 
    </div> 

    <!-- Dynamic Overlay: Toggled seamlessly via conditional visibility event loops -->
    <div id="ar_other_explanation_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px; margin-bottom: 20px; width: 100%; box-sizing: border-box;"> 
      <div style="display: flex; flex-direction: column; gap: 6px;"> 
        <label for="ar_other_filings_list" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">List other peripheral filings and due dates: *</label> 
        <textarea id="ar_other_filings_list" class="wizard-input-field" rows="3" placeholder="Identify specific corporate filings, compliance schedules, or structural reporting benchmarks..." style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; font-family: inherit; resize: vertical;"></textarea>
      </div> 
      <div style="display: flex; flex-direction: column; gap: 6px;"> 
        <label for="ar_other_file_upload" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Upload Documents (Optional)</label> 
        <input type="file" id="ar_other_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
      </div> 
    </div> 

    <!-- Section 7: Compliance Check --> 
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 10px; margin-bottom: 16px;"> 
      <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Compliance Check</h3> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;"> 
      <label for="ar_compliance_verified" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">Are all operational licenses and permits verified and active? *</label> 
      <select id="ar_compliance_verified" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
        <option value="" disabled selected>Select...</option> 
        <option value="yes">Yes</option> 
        <option value="no">No</option> 
      </select> 
    </div> 

    <!-- Dynamic Overlay: Revealed when permit compliance metrics match outstanding states -->
    <div id="ar_compliance_pending_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; flex-direction: column; gap: 6px; margin-bottom: 20px; width: 100%; box-sizing: border-box;"> 
      <label for="ar_pending_renewals_list" style="font-weight: 700; font-size: 0.9rem; color: var(--navy, #0a1f44);">List licenses or permits requiring outstanding renewal: *</label> 
      <textarea id="ar_pending_renewals_list" class="wizard-input-field" rows="3" placeholder="Specify municipal occupational metrics, trade certifications, environmental clearances..." style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; font-family: inherit; resize: vertical;"></textarea> 
    </div> 

    <!-- Section 8: Additional Provisions --> 
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 10px; margin-bottom: 16px;"> 
      <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Additional Provisions</h3> 
    </div> 
  `; 
}; 

// Master Render System Allocation 
window.formRegistry['annual-reports-form-master'] = function(stateDropdownOptionsHtml = "") { 
  // Unified matrix consolidation pass executing components cleanly
  return window.formRegistry['annual-reports-part1-layout'](stateDropdownOptionsHtml) + 
         window.formRegistry['annual-reports-part2-layout']() + 
         window.formRegistry['annual-reports-part3-layout'](); 
};

/**
 * 🔗 UNIFIED ANNUAL REPORT CONDITIONAL LOGIC CONTROLLER
 * Explicitly binds selection rules to display or remove structural rows.
 */
window.bindAnnualReportConditionalDisplayTriggers = function() {
  console.log("[Interactions Engine] Binding live form trigger observers...");

  // 1. Mailing Address Switch
  const mailingTrigger = document.getElementById("ar_mailing_choice");
  const mailingPanel = document.getElementById("ar_mailing_wrapper");
  if (mailingTrigger && mailingPanel) {
    mailingTrigger.addEventListener("change", function() {
      mailingPanel.style.display = (this.value === "different") ? "flex" : "none";
    });
  }

  // Helper template method for binary choice lists
  const bindBinaryTogglePanel = (dropdownId, targetWrapperId) => {
    const selectorNode = document.getElementById(dropdownId);
    const wrapperNode = document.getElementById(targetWrapperId);
    if (selectorNode && wrapperNode) {
      selectorNode.addEventListener("change", function() {
        wrapperNode.style.display = (this.value === "no") ? "flex" : "none";
      });
    }
  };

  // Helper template method for affirmative choice lists
  const bindAffirmativeTogglePanel = (dropdownId, targetWrapperId) => {
    const selectorNode = document.getElementById(dropdownId);
    const wrapperNode = document.getElementById(targetWrapperId);
    if (selectorNode && wrapperNode) {
      selectorNode.addEventListener("change", function() {
        wrapperNode.style.display = (this.value === "yes") ? "flex" : "none";
      });
    }
  };

  // 2. State Filing outstanding row
  bindBinaryTogglePanel("ar_state_filed_choice", "ar_state_explanation_wrapper");

  // 3. City Filing outstanding row
  bindBinaryTogglePanel("ar_city_filed_choice", "ar_city_explanation_wrapper");

  // 4. Federal Filing outstanding row
  bindBinaryTogglePanel("ar_fed_filed_choice", "ar_fed_explanation_wrapper");

  // 5. Other Paperwork peripheral filings row
  bindAffirmativeTogglePanel("ar_other_filed_choice", "ar_other_explanation_wrapper");

  // 6. License Compliance renewals row
  bindBinaryTogglePanel("ar_compliance_verified", "ar_compliance_pending_wrapper");
};
