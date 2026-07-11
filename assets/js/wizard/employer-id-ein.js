if (!window.hasEinServiceEngineInitialized) {
    
    function initEmployerIdEinService() {
  window.formRegistry = window.formRegistry || {};

  // Operational validation element visibility flag
  const isNodeVisible = (el) => el && (el.offsetWidth > 0 || el.offsetHeight > 0);

  // Initialize the engine container on your global stack
  window.formRegistry['employer-id-ein-validation-engine'] = {
    requiredFields: [
      { id: 'ein_applicant_name', errId: 'err_ein_applicant_name', msg: 'Full Name or Business Name is required.' },
      { id: 'ein_business_structure', errId: 'err_ein_business_structure', msg: 'Please select a Business Structure.' },
      { id: 'ein_business_street', errId: 'err_ein_business_street', msg: 'Business Physical Address Street is required.' },
      { id: 'ein_business_city', errId: 'err_ein_business_city', msg: 'Business Physical Address City is required.' },
      { id: 'ein_business_state', errId: 'err_ein_business_state', msg: 'Business Physical Address State selection is required.' },
      { id: 'ein_business_zip', errId: 'err_ein_business_zip', msg: 'Business Physical Address Zip Code is required.' },
      { id: 'ein_mailing_choice', errId: 'err_ein_mailing_choice', msg: 'Mailing Address Selection is required.' }
    ],
    part2Fields: [
      { id: 'ein_applicant_phone', errId: 'err_ein_applicant_phone', msg: 'Applicant Contact Phone Number is required.' },
      { id: 'ein_applicant_email', errId: 'err_ein_applicant_email', msg: 'Applicant Contact Email Address is required.' }
    ],
    part3Fields: [
      { id: 'ein_activities_desc', errId: 'err_ein_activities_desc', msg: 'Description of Business Activities is required.' },
      { id: 'ein_employee_count', errId: 'err_ein_employee_count', msg: 'Expected employee headcount projection metric is required.' }
    ],
    part4Fields: [
      { id: 'ein_responsible_name', errId: 'err_ein_responsible_name', msg: 'Name of the Responsible Party is required.' },
      { id: 'ein_responsible_id', errId: 'err_ein_responsible_id', msg: 'Responsible Party Social Security Number (SSN) or ITIN is required.' }
    ],
    part5Fields: [
      { id: 'ein_start_date', errId: 'err_ein_start_date', msg: 'Date Business Started is required.' }
    ],
    validate: function() {
      let isValid = true;
      let errors = [];
      
      const allActiveFields = [
        ...window.formRegistry['employer-id-ein-validation-engine'].requiredFields,
        ...window.formRegistry['employer-id-ein-validation-engine'].part2Fields,
        ...window.formRegistry['employer-id-ein-validation-engine'].part3Fields,
        ...window.formRegistry['employer-id-ein-validation-engine'].part4Fields,
        ...window.formRegistry['employer-id-ein-validation-engine'].part5Fields
      ];

      // Process universal mandatory presence rules pass
      allActiveFields.forEach(f => {
        const inputEl = document.getElementById(f.id);
        const errorEl = document.getElementById(f.errId);
        if (isNodeVisible(inputEl) && errorEl) {
          if (!inputEl.value.trim()) {
            markInvalidNode(inputEl, errorEl, f.msg, errors);
            isValid = false;
          } else {
            markValidNode(inputEl, errorEl);
          }
        }
      });
      // Validate Baseline Physical Business ZIP Formatting layout bounds
      const zipEl = document.getElementById("ein_business_zip");
      const zipErr = document.getElementById("err_ein_business_zip");
      if (isNodeVisible(zipEl) && zipErr && zipEl.value.trim() && !/^\d{5}$/.test(zipEl.value.trim())) {
        markInvalidNode(zipEl, zipErr, 'Business Physical Address Zip Code must consist of exactly 5 numbers.', errors);
        isValid = false;
      }

      // Validate Custom Structure Input Box if choice equals OTHER
      const choice = document.getElementById("ein_business_structure");
      const otherInput = document.getElementById("ein_structure_other_text");
      const otherErr = document.getElementById("err_ein_structure_other_text");
      if (choice && choice.value === "other" && isNodeVisible(otherInput) && otherErr) {
        if (!otherInput.value.trim()) {
          markInvalidNode(otherInput, otherErr, "Please specify your structural entity classification.", errors);
          isValid = false;
        } else {
          markValidNode(otherInput, otherErr);
        }
      }
      const mailingChoice = document.getElementById("ein_mailing_choice");
      const mailingWrapper = document.getElementById("ein_mailing_wrapper");
      if (mailingChoice && mailingChoice.value === "different" && isNodeVisible(mailingWrapper)) {
        const mFields = [
          { id: 'ein_mailing_street', err: 'err_ein_mailing_street', msg: 'Alternate Mailing Street Address is required.' },
          { id: 'ein_mailing_city', err: 'err_ein_mailing_city', msg: 'Alternate Mailing City is required.' },
          { id: 'ein_mailing_state', err: 'err_ein_mailing_state', msg: 'Alternate Mailing State selection is required.' },
          { id: 'ein_mailing_zip', err: 'err_ein_mailing_zip', msg: 'Alternate Mailing Zip Code is required.' }
        ];
        mFields.forEach(f => {
          const inputEl = document.getElementById(f.id);
          const errorEl = document.getElementById(f.err);
          if (inputEl && errorEl && isNodeVisible(inputEl)) {
            (!inputEl.value.trim()) ? markInvalidNode(inputEl, errorEl, f.msg, errors) : markValidNode(inputEl, errorEl);
          }
        });
        const mZip = document.getElementById('ein_mailing_zip');
        const mZipErr = document.getElementById('err_ein_mailing_zip');
        if (mZip && isNodeVisible(mZip) && mZip.value.trim() && mZipErr && !/^\d{5}$/.test(mZip.value.trim())) {
          markInvalidNode(mZip, mZipErr, 'Alternate Mailing Zip Code must consist of exactly 5 numbers.', errors);
          isValid = false;
        }
      }
      // Validate Contact Email Layout String Formatting
      const emailEl = document.getElementById("ein_applicant_email");
      const emailErr = document.getElementById("err_ein_applicant_email");
      if (isNodeVisible(emailEl) && emailErr && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        markInvalidNode(emailEl, emailErr, "Please provide a valid applicant email address.", errors);
        isValid = false;
      }

      // Validate Phone Number Characters Array Length
      const phoneEl = document.getElementById("ein_applicant_phone");
      const phoneErr = document.getElementById("err_ein_applicant_phone");
      if (isNodeVisible(phoneEl) && phoneErr && phoneEl.value.trim() && phoneEl.value.replace(/\D/g, "").length < 10) {
        markInvalidNode(phoneEl, phoneErr, "Applicant Phone Number must contain at least 10 digits.", errors);
        isValid = false;
      }

      // Validate Checkbox Group: Verify at least one application reason is chosen
      let baselineReasonChecked = false;
      for (let i = 1; i <= 5; i++) {
        const reasonBox = document.getElementById(`ein_reason_${i}`);
        if (reasonBox && reasonBox.checked) {
          baselineReasonChecked = true;
          break;
        }
      }
      const reasonGroupErr = document.getElementById("err_ein_reasons_group_container");
      if (reasonGroupErr) {
        if (!baselineReasonChecked) {
          reasonGroupErr.textContent = "Please select at least one reason for applying to obtain an EIN.";
          reasonGroupErr.style.setProperty("display", "block", "important");
          isValid = false;
          errors.push("Please select at least one reason for applying to obtain an EIN.");
        } else {
          reasonGroupErr.textContent = "";
          reasonGroupErr.style.setProperty("display", "none", "important");
        }
      }
      // Validate custom reason text box if checkbox #5 is active
      const otherReasonBox = document.getElementById("ein_reason_5");
      const customTextEl = document.getElementById("ein_reason_other_text");
      const customTextErr = document.getElementById("err_ein_reason_other_text");
      if (otherReasonBox && reasonOtherBox.checked && isNodeVisible(customTextEl) && customTextErr) {
        if (!customTextEl.value.trim()) {
          markInvalidNode(customTextEl, customTextErr, "Please specify your unique parameter reasons for obtaining an EIN.", errors);
          isValid = false;
        } else {
          markValidNode(customTextEl, customTextErr);
        }
      }

      // Validate Responsible Party Taxpayer Identification Format (9-Digits SSN/ITIN check)
      const ssnInput = document.getElementById("ein_responsible_id");
      const ssnError = document.getElementById("err_ein_responsible_id");
      if (isNodeVisible(ssnInput) && ssnError && ssnInput.value.trim() && ssnInput.value.replace(/\D/g, "").length !== 9) {
        markInvalidNode(ssnInput, ssnError, "Responsible Party Identification must consist of exactly 9 digits (XXX-XX-XXXX).", errors);
        isValid = false;
      }

      // Validate Optional Prior Historical EIN Format if filled
      const pastEinInput = document.getElementById("ein_existing_number");
      const pastEinError = document.getElementById("err_ein_existing_number");
      if (isNodeVisible(pastEinInput) && pastEinError && pastEinInput.value.trim() && pastEinInput.value.replace(/\D/g, "").length !== 9) {
        markInvalidNode(pastEinInput, pastEinError, "Optional existing EIN must consist of exactly 9 digits (XX-XXXXXXX).", errors);
        isValid = false;
      }

      return { isValid, errors };
    }
  };
  window.formRegistry['employer-id-ein-part1-layout'] = function(stateDropdownOptionsHtml = "") {
    const backupStatesHtml = stateDropdownOptionsHtml || '<option value="" disabled selected>-- Select State --</option><option value="WY">Wyoming</option>';
    return `
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy, #0a1f44); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate, #64748b); box-sizing: border-box; margin-bottom: 12px;">
        <strong style="color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Federal Tax Identification Standards</strong>
        An Employer Identification Number (EIN) is a unique nine-digit identifier assigned by the IRS for establishing commercial banking facilities, hiring payroll personnel, and filing tax records.
      </div>
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Applicant Information</h3>
      </div>
      <div class="wizard-input-group" style="grid-column: span 1;">
        <label for="ein_applicant_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Full Name or Business Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ein_applicant_name" required placeholder="Individual registrant or legal corporate title" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_applicant_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 1;">
        <label for="ein_business_structure" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Business Structure <span style="color: #ef4444;">*</span></label>
        <select id="ein_business_structure" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;">
          <option value="" disabled selected>Select Structure...</option>
          <option value="sole_prop">Sole Proprietorship</option>
          <option value="partnership">Partnership</option>
          <option value="corporation">Corporation</option>
          <option value="llc">LLC (Limited Liability Company)</option>
          <option value="other">Other Structural Entity</option>
        </select>
        <div class="wizard-error-message" id="err_ein_business_structure" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div id="ein_structure_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; flex-direction: column; gap: 6px;">
        <label for="ein_structure_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Please specify structure: <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ein_structure_other_text" placeholder="e.g., Non-Profit Corporation, Estate, Personal Trust..." class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_structure_other_text" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="ein_business_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Business Physical Address <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ein_business_street" required placeholder="Physical Location Street Address (No P.O. Boxes)" class="wizard-input-field" onfocus="if(typeof attachGooglePlacesAutocompleteToNode==='function'){attachGooglePlacesAutocompleteToNode(this, 'ein_business')}" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_business_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
          <div>
            <label for="ein_business_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate, #64748b); text-transform: uppercase; display: block; margin-bottom: 4px;">City *</label>
            <input type="text" id="ein_business_city" required placeholder="City" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
            <div class="wizard-error-message" id="err_ein_business_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
          <div>
            <label for="ein_business_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate, #64748b); text-transform: uppercase; display: block; margin-bottom: 4px;">State *</label>
            <select id="ein_business_state" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;">
              ${backupStatesHtml}
            </select>
            <div class="wizard-error-message" id="err_ein_business_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
          <div>
            <label for="ein_business_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate, #64748b); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code *</label>
            <input type="text" id="ein_business_zip" required placeholder="Zip" class="wizard-input-field" style="width: 100%; box-sizing: border-box; font-family: monospace;">
            <div class="wizard-error-message" id="err_ein_business_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
        </div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="ein_mailing_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Mailing Address Selection <span style="color: #ef4444;">*</span></label>
        <select id="ein_mailing_choice" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px; padding: 10px 12px; font-size: 0.95rem; font-weight: 600; background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; line-height: 1.2;">
          <option value="same" selected>Mailing Address is identical to Business Address</option>
          <option value="different">Mailing Address is different</option>
        </select>
        <div class="wizard-error-message" id="err_ein_mailing_choice" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div id="ein_mailing_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px; background: rgba(10, 31, 68, 0.01); padding: 20px; border-radius: 8px; border: 1px solid var(--border, #e2e8f0); box-sizing: border-box; width: 100%;">
        <span style="font-weight: 800; font-size: 0.75rem; color: #10b981; text-transform: uppercase;">Alternate Mailing Address Records</span>
        <div class="wizard-input-group" style="margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <label for="ein_mailing_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate, #64748b); text-transform: uppercase;">Mailing Street Address *</label>
          <input type="text" id="ein_mailing_street" placeholder="Mailing Street Name and Number, P.O. Box, or Suite" class="wizard-input-field" onfocus="if(typeof attachGooglePlacesAutocompleteToNode==='function'){attachGooglePlacesAutocompleteToNode(this, 'ein_mailing')}" style="width: 100%; box-sizing: border-box;">
          <div class="wizard-error-message" id="err_ein_mailing_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box; width: 100%;">
          <div>
            <label for="ein_mailing_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate, #64748b); text-transform: uppercase; display: block; margin-bottom: 4px;">City *</label>
            <input type="text" id="ein_mailing_city" placeholder="City" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
            <div class="wizard-error-message" id="err_ein_mailing_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
                    <div>
            <label for="ein_mailing_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate, #64748b); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code *</label>
            <input type="text" id="ein_mailing_zip" placeholder="Zip" class="wizard-input-field" style="width: 100%; box-sizing: border-box; font-family: monospace;">
            <div class="wizard-error-message" id="err_ein_mailing_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
          </div>
        </div>
      </div>
    `;
  };
}

  window.formRegistry['employer-id-ein-part2-layout'] = function() {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Applicant Contact Information</h3>
      </div>
      <div class="wizard-input-group" style="grid-column: span 1;">
        <label for="ein_applicant_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Phone Number <span style="color: #ef4444;">*</span></label>
        <input type="tel" id="ein_applicant_phone" required placeholder="(512) 555-0199" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_applicant_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 1;">
        <label for="ein_applicant_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Email Address <span style="color: #ef4444;">*</span></label>
        <input type="email" id="ein_applicant_email" required placeholder="email@example.com" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_applicant_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Reason for Applying</h3>
        <p style="color: var(--slate, #64748b); font-size: 0.8rem; margin: 4px 0 0 0;">Select the primary reasons for applying for this Employer Identification Number (Check all that apply):</p>
      </div>
      <div id="ein_reasons_group_container" style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 16px; border-radius: 8px; box-sizing: border-box; width: 100%;">
        <div style="display: flex; align-items: flex-start; gap: 8px;">
          <input type="checkbox" id="ein_reason_1" value="started_new_business" style="margin-top: 3px;">
          <label for="ein_reason_1" style="font-size: 0.825rem; color: var(--navy, #0a1f44); font-weight: 600;">Starting a new business entity</label>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 8px;">
          <input type="checkbox" id="ein_reason_2" value="hiring_employees" style="margin-top: 3px;">
          <label for="ein_reason_2" style="font-size: 0.825rem; color: var(--navy, #0a1f44); font-weight: 600;">Hiring operational employees / payroll setup</label>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 8px;">
          <input type="checkbox" id="ein_reason_3" value="banking_purposes" style="margin-top: 3px;">
          <label for="ein_reason_3" style="font-size: 0.825rem; color: var(--navy, #0a1f44); font-weight: 600;">Banking purposes (Opening a business checking account)</label>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 8px;">
          <input type="checkbox" id="ein_reason_4" value="federal_tax_compliance" style="margin-top: 3px;">
          <label for="ein_reason_4" style="font-size: 0.825rem; color: var(--navy, #0a1f44); font-weight: 600;">Compliance with statutory federal tax laws</label>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 8px; grid-column: span 2;">
          <input type="checkbox" id="ein_reason_5" value="other" style="margin-top: 3px;">
          <label for="ein_reason_5" style="font-size: 0.825rem; color: var(--navy, #0a1f44); font-weight: 600;">Other unique parameter reasons (Specify below)</label>
        </div>
      </div>
      <div style="grid-column: span 2; margin: 0;">
        <div class="wizard-error-message" id="err_ein_reasons_group_container" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div id="ein_reason_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; margin-top: 8px; flex-direction: column; gap: 6px;">
        <label for="ein_reason_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Please specify reason: <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ein_reason_other_text" placeholder="e.g., Changed business structure configuration type..." class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_reason_other_text" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    `;
  };
  window.formRegistry['employer-id-ein-part3-layout'] = function() {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Business Activities</h3>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="ein_activities_desc" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Description of Business Activities <span style="color: #ef4444;">*</span></label>
        <textarea id="ein_activities_desc" required placeholder="Briefly describe what your business will do (e.g. Retail apparel, consulting)..." class="wizard-input-field" style="width: 100%; min-height: 50px; height: 50px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: none; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 600; font-size:0.95rem;"></textarea>
        <div class="wizard-error-message" id="err_ein_activities_desc" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="ein_employee_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Number of Employees Expected Next 12 Months <span style="color: #ef4444;">*</span></label>
        <input type="number" id="ein_employee_count" required placeholder="Enter 0 if none currently expected" min="0" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_employee_count" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    `;
  };

  window.formRegistry['employer-id-ein-part4-layout'] = function() {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Responsible Party</h3>
        <p style="color: var(--slate, #64748b); font-size: 0.8rem; margin: 4px 0 0 0;">The IRS requires the true principal officer, general partner, or owner to be designated as the responsible party.</p>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="ein_responsible_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Name of the Responsible Party <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ein_responsible_name" required placeholder="First and Last Legal Name of Individual" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_responsible_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px;">
        <label for="ein_responsible_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) <span style="color: #ef4444;">*</span></label>
        <input type="text" id="ein_responsible_id" required placeholder="000-00-0000" class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_responsible_id" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    `;
  };
  window.formRegistry['employer-id-ein-part5-layout'] = function() {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 16px;">
        <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Additional Information</h3>
      </div>
      <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
        <label for="ein_start_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Date Business Started <span style="color: #ef4444;">*</span></label>
        <input type="date" id="ein_start_date" required class="wizard-input-field" style="width: 100%; box-sizing: border-box; min-height: 44px;">
        <div class="wizard-error-message" id="err_ein_start_date" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
      <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;">
        <label for="ein_existing_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Existing EIN (If Applicable)</label>
        <input type="text" id="ein_existing_number" placeholder="00-0000000" class="wizard-input-field" style="font-family: monospace; width: 100%; box-sizing: border-box;">
        <div class="wizard-error-message" id="err_ein_existing_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
      </div>
    `;
  };

  // Central visibility toggle pipeline controller matching your template format
  window.toggleEinConditionalFieldWrappers = function() {
    const sSelect = document.getElementById("ein_business_structure");
    const sWrapper = document.getElementById("ein_structure_other_wrapper");
    const sInput = document.getElementById("ein_structure_other_text");
    if (sSelect && sWrapper) {
      const isOther = sSelect.value === "other";
      sWrapper.style.setProperty("display", isOther ? "flex" : "none", "important");
      if (sInput) {
        if (isOther) {
          sInput.setAttribute("required", "required");
        } else {
          sInput.removeAttribute("required");
          sInput.value = "";
          sInput.style.borderColor = "#cbd5e1";
          const err = document.getElementById("err_ein_structure_other_text");
          if (err) err.style.display = "none";
        }
      }
    }

    const mSelect = document.getElementById("ein_mailing_choice");
    const mWrapper = document.getElementById("ein_mailing_wrapper");
    if (mSelect && mWrapper) {
      const isDiff = mSelect.value === "different";
      mWrapper.style.setProperty("display", isDiff ? "grid" : "none", "important");
      mWrapper.querySelectorAll("input, select").forEach(el => {
        if (isDiff) {
          el.setAttribute("required", "required");
        } else {
          el.removeAttribute("required");
          el.value = "";
          el.style.borderColor = "#cbd5e1";
          const err = document.getElementById("err_" + el.id);
          if (err) err.style.display = "none";
        }
      });
    }

    const rCheckbox = document.getElementById("ein_reason_5");
    const rWrapper = document.getElementById("ein_reason_other_wrapper");
    const rInput = document.getElementById("ein_reason_other_text");
    if (rWrapper) {
      const isChecked = rCheckbox && rCheckbox.checked;
      rWrapper.style.setProperty("display", isChecked ? "flex" : "none", "important");
      if (rInput) {
        if (isChecked) {
          rInput.setAttribute("required", "required");
        } else {
          rInput.removeAttribute("required");
          rInput.value = "";
          rInput.style.borderColor = "#cbd5e1";
          const err = document.getElementById("err_ein_reason_other_text");
          if (err) err.style.display = "none";
        }
      }
    }
  };

  // Bind dropdown action change routing cleanly via global document delegation
  document.addEventListener("change", function(e) {
    if (e.target && ["ein_business_structure", "ein_mailing_choice", "ein_reason_5"].includes(e.target.id)) {
      window.toggleEinConditionalFieldWrappers();
    }
  });

  // Real-time automatic mask string builders
  document.addEventListener("input", function(e) {
    if (!e.target) return;

    if (e.target.id === "ein_responsible_id") {
      let val = e.target.value.replace(/\D/g, "").slice(0, 9);
      if (val.length > 5) {
        e.target.value = `${val.slice(0, 3)}-${val.slice(3, 5)}-${val.slice(5)}`;
      } else if (val.length > 3) {
        e.target.value = `${val.slice(0, 3)}-${val.slice(3)}`;
      } else {
        e.target.value = val;
      }
    }

    if (e.target.id === "ein_existing_number") {
      let val = e.target.value.replace(/\D/g, "").slice(0, 9);
      if (val.length > 2) {
        e.target.value = `${val.slice(0, 2)}-${val.slice(2)}`;
      } else {
        e.target.value = val;
      }
    }
  });
  // ------------------------------------------------------------------------ //
  // MODULE 5: MASTER CONSTRUCTOR RENDER ALLOCATION ENGINE
  // ------------------------------------------------------------------------ //
  window.formRegistry['employer-id-ein-form-master'] = function(stateDropdownOptionsHtml = "") {
    const cleanStateOptions = stateDropdownOptionsHtml.replace(/\\/g, '');

    const part1 = window.formRegistry['employer-id-ein-part1-layout'] ? window.formRegistry['employer-id-ein-part1-layout'](cleanStateOptions) : '';
    const part2 = window.formRegistry['employer-id-ein-part2-layout'] ? window.formRegistry['employer-id-ein-part2-layout']() : '';
    const part3 = window.formRegistry['employer-id-ein-part3-layout'] ? window.formRegistry['employer-id-ein-part3-layout']() : '';
    const part4 = window.formRegistry['employer-id-ein-part4-layout'] ? window.formRegistry['employer-id-ein-part4-layout']() : '';
    const part5 = window.formRegistry['employer-id-ein-part5-layout'] ? window.formRegistry['employer-id-ein-part5-layout']() : '';

    // Synchronize visibility displays post-compilation injection loops
    setTimeout(() => {
      if (typeof window.toggleEinConditionalFieldWrappers === "function") {
        window.toggleEinConditionalFieldWrappers();
      }
    }, 10);

    return part1 + part2 + part3 + part4 + part5;
  };

  console.log("[EIN Wizard Engine] All decoupled matrix modules compiled safely.");


// Fire the initialization pass to register the engine on the window object
initEmployerIdEinService();

  window.hasEinServiceEngineInitialized = true;
  console.log("[EIN Wizard Engine] Safety lock armed. Infinite loops blocked.");
}