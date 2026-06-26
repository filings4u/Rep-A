function initAnnualReportsService() { 
  // Global wizard registries allocation 
  window.formRegistry = window.formRegistry || {}; 

  // ============================================================================ // 
  // 1. COMPREHENSIVE ENGINE VALIDATORS 
  // ============================================================================ // 
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

    validate: function() { 
      let isValid = true; 
      let errors = []; 

      // 1. FIRST PASS: Run through standard non-empty checks
      this.requiredFields.forEach(f => { 
        const el = document.getElementById(f.id); 
        if (el) { 
          if (!el.value.trim()) { 
            el.style.borderColor = "#ef4444"; 
            isValid = false; 
            if (!errors.includes(f.msg)) errors.push(f.msg); 
          } else { 
            el.style.borderColor = "#cbd5e1"; 
          } 
        } 
      });

      // 2. DEEP VALIDATION: Principal Zip Code
      const zipEl = document.getElementById("ar_principal_zip"); 
      if (zipEl && zipEl.value.trim()) {
        if (!/^\d{5}$/.test(zipEl.value.trim())) { 
          zipEl.style.borderColor = "#ef4444"; 
          isValid = false; 
          const zipMsg = 'Principal Business Address Zip Code must be exactly 5 numbers.';
          if (!errors.includes(zipMsg)) errors.push(zipMsg); 
        }
      } 

      // 3. CONDITIONAL VALIDATION: Alternate Mailing Address
      const mailingChoice = document.getElementById("ar_mailing_choice"); 
      if (mailingChoice && mailingChoice.value === "different") { 
        const mailingFields = [ 
          { id: 'ar_mailing_street', msg: 'Alternate Mailing Street Address is required.' }, 
          { id: 'ar_mailing_city', msg: 'Alternate Mailing City is required.' }, 
          { id: 'ar_mailing_state', msg: 'Alternate Mailing State selection is required.' }, 
          { id: 'ar_mailing_zip', msg: 'Alternate Mailing Zip Code is required.' } 
        ]; 

        mailingFields.forEach(f => { 
          const el = document.getElementById(f.id); 
          if (el) { 
            const val = el.value.trim(); 
            let isFieldValid = !!val; 
            let fieldErrorMsg = f.msg;

            // Handle specific sub-validation for mailing zip
            if (f.id === 'ar_mailing_zip' && val && !/^\d{5}$/.test(val)) { 
              isFieldValid = false; 
              fieldErrorMsg = 'Alternate Mailing Zip Code must consist of exactly 5 numbers.'; 
            } 

            if (!isFieldValid) { 
              el.style.borderColor = "#ef4444"; 
              isValid = false; 
              if (!errors.includes(fieldErrorMsg)) errors.push(fieldErrorMsg); 
            } else { 
              el.style.borderColor = "#cbd5e1"; 
            } 
          } 
        }); 
      } 

      // 4. DEEP VALIDATION: Contact Email
      const emailEl = document.getElementById("ar_contact_email"); 
      if (emailEl && emailEl.value.trim()) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) { 
          emailEl.style.borderColor = "#ef4444"; 
          isValid = false; 
          const emailMsg = "Please enter a valid contact person email address.";
          if (!errors.includes(emailMsg)) errors.push(emailMsg); 
        }
      } 

      // 5. DEEP VALIDATION: Contact Phone Number
      const phoneEl = document.getElementById("ar_contact_phone"); 
      if (phoneEl && phoneEl.value.trim()) { 
        if (phoneEl.value.replace(/\D/g, "").length < 10) { 
          phoneEl.style.borderColor = "#ef4444"; 
          isValid = false; 
          const phoneMsg = "Contact Person's Phone Number must contain at least 10 numbers.";
          if (!errors.includes(phoneMsg)) errors.push(phoneMsg); 
        } 
      } 

      return { isValid, errors }; 
    }
  };
}


window.formRegistry['annual-reports-part2-validation'] = { 
  requiredFields: [ 
    { id: 'ar_state_due_date', msg: 'Annual Report Filing Due Date is required.' }, 
    { id: 'ar_state_filed_choice', msg: 'Please specify if your state annual report has been filed.' }, 
    { id: 'ar_city_filed_choice', msg: 'Please specify if your city annual report has been filed.' }, 
    { id: 'ar_federal_ein', msg: 'Federal Employer Identification Number (EIN) is required.' }, 
    { id: 'ar_fed_filed_choice', msg: 'Please specify if your federal taxes have been filed.' } 
  ], 

  validate: function() { 
    let isValid = true; 
    let errors = []; 

    // 1. FIRST PASS: Run through base required structural checks
    this.requiredFields.forEach(f => { 
      const el = document.getElementById(f.id); 
      if (el) { 
        if (!el.value.trim()) { 
          el.style.borderColor = "#ef4444"; 
          isValid = false; 
          if (!errors.includes(f.msg)) errors.push(f.msg); 
        } else { 
          el.style.borderColor = "#cbd5e1"; 
        } 
      } 
    }); 

    // 2. DEEP VALIDATION: Federal EIN Formatting (9 digits)
    const einEl = document.getElementById("ar_federal_ein"); 
    if (einEl && einEl.value.trim()) { 
      if (einEl.value.replace(/\D/g, "").length !== 9) { 
        einEl.style.borderColor = "#ef4444"; 
        isValid = false; 
        const einError = "Federal Employer Identification Number (EIN) must be exactly 9 digits.";
        if (!errors.includes(einError)) errors.push(einError); 
      } 
    } 

    // Helper helper function to cleanly handle conditional logic fields
    const checkConditionalReason = (choiceId, reasonId, baseMsg) => {
      const choiceEl = document.getElementById(choiceId);
      const reasonEl = document.getElementById(reasonId);
      
      if (reasonEl) {
        if (choiceEl && choiceEl.value === "no") {
          if (!reasonEl.value.trim()) {
            reasonEl.style.borderColor = "#ef4444";
            isValid = false;
            if (!errors.includes(baseMsg)) errors.push(baseMsg);
          } else {
            reasonEl.style.borderColor = "#cbd5e1";
          }
        } else {
          // Reset border color if option changed back to "yes" or empty
          reasonEl.style.borderColor = "#cbd5e1";
        }
      }
    };

    // 3. CONDITIONAL VALIDATION: State Outstanding Reason
    checkConditionalReason(
      "ar_state_filed_choice", 
      "ar_state_reason", 
      "Please specify why the state annual filing is outstanding."
    );

    // 4. CONDITIONAL VALIDATION: City Outstanding Reason
    checkConditionalReason(
      "ar_city_filed_choice", 
      "ar_city_reason", 
      "Please specify why the city annual filing is outstanding."
    );

    // 5. CONDITIONAL VALIDATION: Federal Outstanding Reason
    checkConditionalReason(
      "ar_fed_filed_choice", 
      "ar_fed_reason", 
      "Please specify why the federal tax filing is outstanding."
    );

    return { isValid, errors }; 
  } 
};


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
          el.style.borderColor = "#ef4444"; 
          isValid = false; 
          if (!errors.includes(f.msg)) errors.push(f.msg); 
        } else { 
          el.style.borderColor = "#cbd5e1"; 
        } 
      } 
    }); 

    // Helper helper function to cleanly handle conditional logic list inputs
    const checkConditionalList = (choiceId, targetValue, listId, errorMsg) => {
      const choiceEl = document.getElementById(choiceId);
      const listEl = document.getElementById(listId);
      
      if (listEl) {
        if (choiceEl && choiceEl.value === targetValue) {
          // Check if field is empty or contains only non-alphanumeric junk characters
          if (!listEl.value.trim() || !/[a-zA-Z0-9]/.test(listEl.value)) {
            listEl.style.borderColor = "#ef4444"; 
            isValid = false; 
            if (!errors.includes(errorMsg)) errors.push(errorMsg); 
          } else {
            listEl.style.borderColor = "#cbd5e1";
          }
        } else {
          // Reset border color if option changed and the list is no longer required
          listEl.style.borderColor = "#cbd5e1";
        }
      }
    };

    // 2. CONDITIONAL VALIDATION: Other Filings List (Triggers when choice is "yes")
    checkConditionalList(
      "ar_other_filed_choice",
      "yes",
      "ar_other_filings_list",
      "Please list the types of other peripheral filings and their due dates."
    );

    // 3. CONDITIONAL VALIDATION: Pending Renewals List (Triggers when choice is "no")
    checkConditionalList(
      "ar_compliance_verified",
      "no",
      "ar_pending_renewals_list",
      "Please list the operational licenses or permits that need to be renewed or updated."
    );

    return { isValid, errors }; 
  } 
};

 // ============================================================================ // 
// 2. FORM LAYOUT GENERATION MATRICES 
// ============================================================================ // 
window.formRegistry['annual-reports-part1-layout'] = function(stateDropdownOptionsHtml) { 
  return ` 
    <!-- Info Banner -->
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;"> 
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is an Annual Report Filing?</strong> 
      An Annual Report is a mandatory periodic filing required to maintain active legal standing. 
    </div> 

    <!-- Section Title -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;"> 
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3> 
    </div> 

    <!-- Core Fields -->
    <div class="wizard-input-group" style="grid-column: span 1;"><label for="ar_business_name">Business Name *</label><input type="text" id="ar_business_name" required class="wizard-input-field"></div> 
    <div class="wizard-input-group" style="grid-column: span 1;"><label for="ar_business_id">Business ID Number *</label><input type="text" id="ar_business_id" required class="wizard-input-field"></div> 
    
    <div class="wizard-input-group" style="grid-column: span 2;"> 
      <label for="ar_business_type">Business Type *</label> 
      <select id="ar_business_type" required class="wizard-input-field"> 
        <option value="" disabled selected>Select...</option>
        <option value="llc">LLC</option>
        <option value="corporation">Corporation</option>
        <option value="partnership">Partnership</option>
        <option value="sole_proprietorship">Sole Proprietorship</option> 
      </select> 
    </div> 

    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_principal_street">Address *</label>
      <input type="text" id="ar_principal_street" required class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ar_principal')">
    </div> 

    <!-- Principal Address Grid -->
    <div class="wizard-input-group" style="grid-column: span 2;"> 
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;"> 
        <div><label for="ar_principal_city">City *</label><input type="text" id="ar_principal_city" required class="wizard-input-field"></div> 
        <div><label for="ar_principal_state">State *</label><select id="ar_principal_state" required class="wizard-input-field">${stateDropdownOptionsHtml}</select></div> 
        <div><label for="ar_principal_zip">Zip Code *</label><input type="text" id="ar_principal_zip" required class="wizard-input-field"></div> 
      </div> 
    </div> 

    <!-- Conditional Trigger Selection -->
    <div class="wizard-input-group" style="grid-column: span 2;"> 
      <label for="ar_mailing_choice">Mailing Address Selection *</label> 
      <select id="ar_mailing_choice" required class="wizard-input-field">
        <option value="same" selected>Identical</option>
        <option value="different">Different</option>
      </select> 
    </div> 

    <!-- Alternate Mailing Wrapper (Hidden by default, renders inline with parent grid structure) -->
    <div id="ar_mailing_wrapper" style="grid-column: span 2; display: none; grid-template-columns: 1fr; gap: 16px;"> 
      <div style="border-top: 1px dashed var(--border); padding-top: 16px; margin-top: 8px;">
        <h4 style="color: var(--navy); font-size: 0.95rem; margin: 0 0 12px 0;">Alternate Mailing Address</h4>
      </div>
      <div><label for="ar_mailing_street" class="sr-only" style="display:none;">Mailing Street</label><input type="text" id="ar_mailing_street" placeholder="Mailing Street" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ar_mailing')"></div> 
      <div><label for="ar_mailing_city" class="sr-only" style="display:none;">Mailing City</label><input type="text" id="ar_mailing_city" placeholder="Mailing City" class="wizard-input-field"></div> 
      <div><label for="ar_mailing_state" class="sr-only" style="display:none;">Mailing State</label><select id="ar_mailing_state" class="wizard-input-field">${stateDropdownOptionsHtml}</select></div> 
      <div><label for="ar_mailing_zip" class="sr-only" style="display:none;">Mailing Zip</label><input type="text" id="ar_mailing_zip" placeholder="Mailing Zip" class="wizard-input-field"></div> 
    </div> 

    <!-- Contact Metadata Info -->
    <div class="wizard-input-group" style="grid-column: span 2;"><label for="ar_contact_name">Primary Contact Full Name *</label><input type="text" id="ar_contact_name" required class="wizard-input-field"></div> 
    <div class="wizard-input-group" style="grid-column: span 1;"><label for="ar_contact_phone">Phone *</label><input type="tel" id="ar_contact_phone" required class="wizard-input-field"></div> 
    <div class="wizard-input-group" style="grid-column: span 1;"><label for="ar_contact_email">Email *</label><input type="email" id="ar_contact_email" required class="wizard-input-field"></div> 
  `; 
};


 // ============================================================================ // 
// 2. FORM LAYOUT GENERATION MATRICES (PARTS 2 & 3)
// ============================================================================ // 

window.formRegistry['annual-reports-part2-layout'] = function() { 
  return ` 
    <!-- Section 3: State Filings -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. State Filings</h3>
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_state_due_date">Due Date *</label>
      <input type="date" id="ar_state_due_date" required class="wizard-input-field">
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 1;"> 
      <label for="ar_state_filed_choice">Filed for current year? *</label> 
      <select id="ar_state_filed_choice" required class="wizard-input-field">
        <option value="" disabled selected>Select...</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select> 
    </div> 
    
    <div id="ar_state_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="ar_state_reason">Specify why: *</label>
      <input type="text" id="ar_state_reason" class="wizard-input-field">
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_state_file_upload">Upload State Filing Receipt (Optional)</label>
      <input type="file" id="ar_state_file_upload" class="wizard-input-field" accept="image/*,.pdf">
    </div> 

    <!-- Section 4: City Filings -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. City Filings</h3>
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_city_license_num">City License Number</label>
      <input type="text" id="ar_city_license_num" placeholder="City License" class="wizard-input-field">
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_city_due_date">City Filing Due Date</label>
      <input type="date" id="ar_city_due_date" class="wizard-input-field">
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_city_filed_choice">Filed for current year? *</label>
      <select id="ar_city_filed_choice" required class="wizard-input-field">
        <option value="" disabled selected>Select...</option> <!-- Fixed loophole: forced choice instead of N/A fallback -->
        <option value="na">N/A (Not Applicable)</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div> 
    
    <div id="ar_city_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="ar_city_reason">Specify why city filing is outstanding: *</label>
      <input type="text" id="ar_city_reason" class="wizard-input-field">
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_city_file_upload">Upload City Filing Receipt (Optional)</label>
      <input type="file" id="ar_city_file_upload" class="wizard-input-field" accept="image/*,.pdf">
    </div> 

    <!-- Section 5: Federal Filings -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Federal Filings</h3>
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_federal_ein">Federal EIN *</label>
      <input type="text" id="ar_federal_ein" required placeholder="00-0000000" class="wizard-input-field">
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="ar_fed_filed_choice">Federal Taxes Filed? *</label>
      <select id="ar_fed_filed_choice" required class="wizard-input-field">
        <option value="" disabled selected>Select...</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div> 
    
    <div id="ar_fed_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="ar_fed_reason">Specify why federal filing is outstanding: *</label>
      <input type="text" id="ar_fed_reason" class="wizard-input-field">
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_fed_file_upload">Upload Federal Filing Receipt (Optional)</label>
      <input type="file" id="ar_fed_file_upload" class="wizard-input-field" accept="image/*,.pdf">
    </div> 
  `; 
}; 

window.formRegistry['annual-reports-part3-layout'] = function() { 
  return ` 
    <!-- Section 6: Other Filings -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Other Filings</h3>
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_other_filed_choice">Any other peripheral paperwork filings? *</label>
      <select id="ar_other_filed_choice" required class="wizard-input-field">
        <option value="" disabled selected>Select...</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div> 
    
    <div id="ar_other_explanation_wrapper" style="grid-column: span 2; display: none; grid-template-columns: 1fr; gap: 16px;">
      <div>
        <label for="ar_other_filings_list">List other peripheral filings and due dates: *</label>
        <input type="text" id="ar_other_filings_list" class="wizard-input-field">
      </div>
      <div>
        <label for="ar_other_file_upload">Upload Documents (Optional)</label>
        <input type="file" id="ar_other_file_upload" class="wizard-input-field" accept="image/*,.pdf">
      </div>
    </div> 

    <!-- Section 7: Compliance Check -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Compliance Check</h3>
    </div> 
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ar_compliance_verified">Are all operational licenses and permits verified and active? *</label>
      <select id="ar_compliance_verified" required class="wizard-input-field">
        <option value="" disabled selected>Select...</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div> 
    
    <div id="ar_compliance_pending_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
      <label for="ar_pending_renewals_list">List licenses or permits requiring outstanding renewal: *</label>
      <input type="text" id="ar_pending_renewals_list" class="wizard-input-field">
    </div> 

    <!-- Section 8: Additional Provisions -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Additional Provisions</h3>
    </div> 
  `; 
}; 

// Master Render System Allocation
window.formRegistry['annual-reports-form-master'] = function(stateDropdownOptionsHtml = "") { 
  // FIXED: Functions are now properly executed using () brackets and receive arguments cleanly
  return window.formRegistry['annual-reports-part1-layout'](stateDropdownOptionsHtml) + 
         window.formRegistry['annual-reports-part2-layout']() + 
         window.formRegistry['annual-reports-part3-layout'](); 
}; 
