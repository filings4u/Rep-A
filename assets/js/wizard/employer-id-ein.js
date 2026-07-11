function initEmployerIdEinService() {
  window.formRegistry = window.formRegistry || {};

  // Operational validation element visibility flags
  const isNodeVisible = (el) => el && (el.offsetWidth > 0 || el.offsetHeight > 0);

  const markInvalidNode = (inputEl, errorEl, msg, errorArray) => {
    if (!inputEl || !errorEl) return;
    errorEl.textContent = msg;
    errorEl.style.setProperty("display", "block", "important");
    inputEl.style.setProperty("border-color", "#ef4444", "important");
    if (errorArray && !errorArray.includes(msg)) errorArray.push(msg);
  };

  const markValidNode = (inputEl, errorEl) => {
    if (!inputEl || !errorEl) return;
    errorEl.textContent = "";
    errorEl.style.setProperty("display", "none", "important");
    inputEl.style.setProperty("border-color", "#cbd5e1", "important");
  };

  
  // ------------------------------------------------------------------------ //
  // SECTION A: PART 1 VALIDATION MATRIX ENGINE (FIXED SCOPE)
  // ------------------------------------------------------------------------ //
  window.formRegistry['employer-id-ein-part1-validation'] = {
    requiredFields: [
      { id: 'ein_applicant_name', errId: 'err_ein_applicant_name', msg: 'Full Name or Business Name is required.' },
      { id: 'ein_business_structure', errId: 'err_ein_business_structure', msg: 'Please select a Business Structure.' },
      { id: 'ein_business_street', errId: 'err_ein_business_street', msg: 'Business Physical Address Street is required.' },
      { id: 'ein_business_city', errId: 'err_ein_business_city', msg: 'Business Physical Address City is required.' },
      { id: 'ein_business_state', errId: 'err_ein_business_state', msg: 'Business Physical Address State selection is required.' },
      { id: 'ein_business_zip', errId: 'err_ein_business_zip', msg: 'Business Physical Address Zip Code is required.' },
      { id: 'ein_mailing_choice', errId: 'err_ein_mailing_choice', msg: 'Mailing Address Selection is required.' }
    ],
    validate: function() {
      let isValid = true;
      let errors = [];

      // 1. Process standard required fields presence checks
      this.requiredFields.forEach(f => {
        const fieldEl = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);
        if (isNodeVisible(fieldEl) && errEl) {
          (!fieldEl.value.trim()) ? window.markInvalidNode(fieldEl, errEl, f.msg, errors) : window.markValidNode(fieldEl, errEl);
        }
      });

      // 2. Validate Baseline Physical Business ZIP Formatting
      const zipEl = document.getElementById("ein_business_zip");
      const zipErr = document.getElementById("err_ein_business_zip");
      if (isNodeVisible(zipEl) && zipErr && zipEl.value.trim() && !/^\d{5}$/.test(zipEl.value.trim())) {
        window.markInvalidNode(zipEl, zipErr, 'Business Physical Address Zip Code must consist of exactly 5 numbers.', errors);
      }

      // 3. Conditional Check: Validate Custom Structure Textbox if choice equals OTHER
      const structureChoice = document.getElementById("ein_business_structure");
      const otherTextEl = document.getElementById("ein_structure_other_text");
      const otherTextErr = document.getElementById("err_ein_structure_other_text");
      if (structureChoice && structureChoice.value === "other" && isNodeVisible(otherTextEl) && otherTextErr) {
        if (!otherTextEl.value.trim()) {
          window.markInvalidNode(otherTextEl, otherTextErr, "Please specify your structural entity classification.", errors);
        } else {
          window.markValidNode(otherTextEl, otherTextErr);
        }
      }

      // 4. Conditional Check: Validate Alternate Mailing records if choice equals DIFFERENT
      const mailingChoice = document.getElementById("ein_mailing_choice");
      const mailingWrapper = document.getElementById("ein_mailing_wrapper");
      if (mailingChoice && mailingChoice.value === "different" && isNodeVisible(mailingWrapper)) {
        const alternateMailingFields = [
          { id: 'ein_mailing_street', errId: 'err_ein_mailing_street', msg: 'Alternate Mailing Street Address is required.' },
          { id: 'ein_mailing_city', errId: 'err_ein_mailing_city', msg: 'Alternate Mailing City is required.' },
          { id: 'ein_mailing_state', errId: 'err_ein_mailing_state', msg: 'Alternate Mailing State selection is required.' },
          { id: 'ein_mailing_zip', errId: 'err_ein_mailing_zip', msg: 'Alternate Mailing Zip Code is required.' }
        ];

        alternateMailingFields.forEach(f => {
          const el = document.getElementById(f.id);
          const err = document.getElementById(f.errId);
          if (el && err && isNodeVisible(el)) {
            (!el.value.trim()) ? window.markInvalidNode(el, err, f.msg, errors) : window.markValidNode(el, err);
          }
        });

        const mailingZip = document.getElementById('ein_mailing_zip');
        const mailingZipErr = document.getElementById('err_ein_mailing_zip');
        if (mailingZip && isNodeVisible(mailingZip) && mailingZip.value.trim() && mailingZipErr && !/^\d{5}$/.test(mailingZip.value.trim())) {
          window.markInvalidNode(mailingZip, mailingZipErr, 'Alternate Mailing Zip Code must consist of exactly 5 numbers.', errors);
        }
      }

      // 5. Finalize compliance metrics check return object payload
      if (errors.length > 0) isValid = false;
      return { isValid, errors };
    }
  };


  // Conditional Check: Validate Custom Structure Textbox if choice equals OTHER
      const structureChoice = document.getElementById("ein_business_structure");
      const otherTextEl = document.getElementById("ein_structure_other_text");
      const otherTextErr = document.getElementById("err_ein_structure_other_text");
      const isCustomStructure = structureChoice && structureChoice.value === "other";
      if (isCustomStructure && isNodeVisible(otherTextEl) && otherTextErr) {
        if (!otherTextEl.value.trim()) {
          markInvalidNode(otherTextEl, otherTextErr, "Please specify your structural entity classification.", errors);
        } else {
          markValidNode(otherTextEl, otherTextErr);
        }
      }

      // Conditional Check: Validate Alternate Mailing records if choice equals DIFFERENT
      const mailingChoice = document.getElementById("ein_mailing_choice");
      const mailingWrapper = document.getElementById("ein_mailing_wrapper");
      const isDifferentMailing = mailingChoice && mailingChoice.value === "different";
      if (mailingWrapper && (mailingWrapper.style.display === "grid" || mailingWrapper.style.display === "block" || isDifferentMailing)) {
        const alternateMailingFields = [
          { id: 'ein_mailing_street', errId: 'err_ein_mailing_street', msg: 'Alternate Mailing Street Address is required.' },
          { id: 'ein_mailing_city', errId: 'err_ein_mailing_city', msg: 'Alternate Mailing City is required.' },
          { id: 'ein_mailing_state', errId: 'err_ein_mailing_state', msg: 'Alternate Mailing State selection is required.' },
          { id: 'ein_mailing_zip', errId: 'err_ein_mailing_zip', msg: 'Alternate Mailing Zip Code is required.' }
        ];

        alternateMailingFields.forEach(f => {
          const el = document.getElementById(f.id);
          const err = document.getElementById(f.errId);
          if (el && err && isNodeVisible(el)) {
            (!el.value.trim()) ? markInvalidNode(el, err, f.msg, errors) : markValidNode(el, err);
          }
        });

        const mailingZip = document.getElementById('ein_mailing_zip');
        const mailingZipErr = document.getElementById('err_ein_mailing_zip');
        if (mailingZip && isNodeVisible(mailingZip) && mailingZip.value.trim() && mailingZipErr && !/^\d{5}$/.test(mailingZip.value.trim())) {
          markInvalidNode(mailingZip, mailingZipErr, 'Alternate Mailing Zip Code must consist of exactly 5 numbers.', errors);
        }
      }

      if (errors.length > 0) isValid = false;
      return { isValid, errors };
    }


    // ------------------------------------------------------------------------ //
  // SECTION A: PART 2 VALIDATION MATRIX ENGINE (FIXED SCOPE)
  // ------------------------------------------------------------------------ //
  window.formRegistry['employer-id-ein-part2-validation'] = {
    requiredFields: [
      { id: 'ein_applicant_phone', errId: 'err_ein_applicant_phone', msg: 'Applicant Contact Phone Number is required.' },
      { id: 'ein_applicant_email', errId: 'err_ein_applicant_email', msg: 'Applicant Contact Email Address is required.' }
    ],
    validate: function() {
      let isValid = true;
      let errors = [];

      // 1. Validate core required contact inputs presence check
      this.requiredFields.forEach(f => {
        const fieldEl = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);
        if (isNodeVisible(fieldEl) && errEl) {
          (!fieldEl.value.trim()) ? window.markInvalidNode(fieldEl, errEl, f.msg, errors) : window.markValidNode(fieldEl, errEl);
        }
      });

      // 2. Format check: Contact email regex parsing pattern match
      const emailEl = document.getElementById("ein_applicant_email");
      const emailErr = document.getElementById("err_ein_applicant_email");
      if (isNodeVisible(emailEl) && emailErr && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        window.markInvalidNode(emailEl, emailErr, "Please provide a valid applicant email address.", errors);
      }

      // 3. Format check: Phone number numeric digit count constraints
      const phoneEl = document.getElementById("ein_applicant_phone");
      const phoneErr = document.getElementById("err_ein_applicant_phone");
      if (isNodeVisible(phoneEl) && phoneErr && phoneEl.value.trim() && phoneEl.value.replace(/\D/g, "").length < 10) {
        window.markInvalidNode(phoneEl, phoneErr, "Applicant Phone Number must contain at least 10 digits.", errors);
      }

      // 4. Group check: Verify at least one application reason option checkbox is checked
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
          errors.push("Please select at least one reason for applying to obtain an EIN.");
        } else {
          reasonGroupErr.textContent = "";
          reasonGroupErr.style.setProperty("display", "none", "important");
        }
      }

      // 5. Conditional check: Custom reason text input box verification if box #5 is checked
      const otherReasonBox = document.getElementById("ein_reason_5");
      const customTextEl = document.getElementById("ein_reason_other_text");
      const customTextErr = document.getElementById("err_ein_reason_other_text");
      if (otherReasonBox && otherReasonBox.checked && isNodeVisible(customTextEl) && customTextErr) {
        if (!customTextEl.value.trim()) {
          window.markInvalidNode(customTextEl, customTextErr, "Please specify your unique parameter reasons for obtaining an EIN.", errors);
        } else {
          window.markValidNode(customTextEl, customTextErr);
        }
      }

      // 6. Return object matching framework expectations
      if (errors.length > 0) isValid = false;
      return { isValid, errors };
    }
  };


    // ------------------------------------------------------------------------ //
  // SECTION A: PART 3 VALIDATION MATRIX ENGINE
  // ------------------------------------------------------------------------ //
  window.formRegistry['employer-id-ein-part3-validation'] = {
    requiredFields: [
      { id: 'ein_activities_desc', errId: 'err_ein_activities_desc', msg: 'Description of Business Activities is required.' },
      { id: 'ein_employee_count', errId: 'err_ein_employee_count', msg: 'Expected employee headcount projection metric is required.' }
    ],
    validate: function() {
      let isValid = true;
      let errors = [];

      this.requiredFields.forEach(f => {
        const fieldEl = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);
        if (isNodeVisible(fieldEl) && errEl) {
          (!fieldEl.value.trim()) ? markInvalidNode(fieldEl, errEl, f.msg, errors) : markValidNode(fieldEl, errEl);
        }
      });

      const countEl = document.getElementById("ein_employee_count");
      const countErr = document.getElementById("err_ein_employee_count");
      if (isNodeVisible(countEl) && countErr && countEl.value.trim()) {
        const parsedVal = parseInt(countEl.value, 10);
        if (isNaN(parsedVal) || parsedVal < 0) {
          markInvalidNode(countEl, countErr, "Expected headcount must be a valid positive integer choice.", errors);
        }
      }

      if (errors.length > 0) isValid = false;
      return { isValid, errors };
    }
  };

  // ------------------------------------------------------------------------ //
  // SECTION A: PART 4 VALIDATION MATRIX ENGINE
  // ------------------------------------------------------------------------ //
  window.formRegistry['employer-id-ein-part4-validation'] = {
    requiredFields: [
      { id: 'ein_responsible_name', errId: 'err_ein_responsible_name', msg: 'Name of the Responsible Party is required.' },
      { id: 'ein_responsible_id', errId: 'err_ein_responsible_id', msg: 'Responsible Party Social Security Number (SSN) or ITIN is required.' }
    ],
    validate: function() {
      let isValid = true;
      let errors = [];

      this.requiredFields.forEach(f => {
        const fieldEl = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);
        if (isNodeVisible(fieldEl) && errEl) {
          (!fieldEl.value.trim()) ? markInvalidNode(fieldEl, errEl, f.msg, errors) : markValidNode(fieldEl, errEl);
        }
      });

      const ssnEl = document.getElementById("ein_responsible_id");
      const ssnErr = document.getElementById("err_ein_responsible_id");
      if (isNodeVisible(ssnEl) && ssnErr && ssnEl.value.trim()) {
        const pureSsn = ssnEl.value.replace(/\D/g, "");
        if (pureSsn.length !== 9) {
          markInvalidNode(ssnEl, ssnErr, "Responsible Party Identification must consist of exactly 9 digits (XXX-XX-XXXX).", errors);
        }
      }

      if (errors.length > 0) isValid = false;
      return { isValid, errors };
    }
  };

  // ------------------------------------------------------------------------ //
  // SECTION A: PART 5 VALIDATION MATRIX ENGINE
  // ------------------------------------------------------------------------ //
  window.formRegistry['employer-id-ein-part5-validation'] = {
    requiredFields: [
      { id: 'ein_start_date', errId: 'err_ein_start_date', msg: 'Date Business Started is required.' }
    ],
    validate: function() {
      let isValid = true;
      let errors = [];

      this.requiredFields.forEach(f => {
        const fieldEl = document.getElementById(f.id);
        const errEl = document.getElementById(f.errId);
        if (isNodeVisible(fieldEl) && errEl) {
          (!fieldEl.value.trim()) ? markInvalidNode(fieldEl, errEl, f.msg, errors) : markValidNode(fieldEl, errEl);
        }
      });

      const pastEinEl = document.getElementById("ein_existing_number");
      const pastEinErr = document.getElementById("err_ein_existing_number");
      if (isNodeVisible(pastEinEl) && pastEinErr && pastEinEl.value.trim()) {
        const purePast = pastEinEl.value.replace(/\D/g, "");
        if (purePast.length !== 9) {
          markInvalidNode(pastEinEl, pastEinErr, "Optional existing EIN must consist of exactly 9 digits (XX-XXXXXXX).", errors);
        }
      }

      if (errors.length > 0) isValid = false;
      return { isValid, errors };
    }
  };

    // ------------------------------------------------------------------------ //
  // INTERLOCK HOOK SYSTEM CONTROLLERS
  // ------------------------------------------------------------------------ //
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

  // Bind change event handlers globally to avoid framework race conditions
  document.addEventListener("change", function(e) {
    if (e.target && ["ein_business_structure", "ein_mailing_choice", "ein_reason_5"].includes(e.target.id)) {
      window.toggleEinConditionalFieldWrappers();
    }
  });

  // Dynamic input keyboard mask string builders
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
  // MODULE 5: STEP-AWARE MASTER CONSTRUCTOR RENDER ALLOCATION ENGINE
  // ------------------------------------------------------------------------ //
  window.formRegistry['employer-id-ein-form-master'] = function(stateDropdownOptionsHtml = "") {
    // CRITICAL LIFECYCLE FILTER: Check what step index the framework is currently rendering
    const exactActiveStepIndex = parseInt(window.currentWizardActiveStep || window.activeStepIndex || 0, 10);
    
    // If the customer is still on Step 1 (State Selection) or Step 2 (Package Review), 
    // immediately exit and return an empty string to let the core framework render normally.
    if (exactActiveStepIndex < 2) {
      console.log(`[EIN Lifecycle Engine] Active step index is ${exactActiveStepIndex}. Suppressing intake layout injection to protect early step structures.`);
      return "";
    }

    console.log("[EIN Interlock Bridge] Compiling multi-part form data structures for active workspace...");
    
    // Fallback protection loop: Populate state choices safely if missing
    let targetStateOptions = stateDropdownOptionsHtml;
    if (!targetStateOptions) {
      targetStateOptions = (typeof window.buildGlobalUsaStateDropdownOptionsHtml === 'function') 
        ? window.buildGlobalUsaStateDropdownOptionsHtml("") 
        : '<option value="" disabled selected>-- Select State --</option><option value="WY">Wyoming</option>';
    }
    
    const cleanStateOptions = String(targetStateOptions).replace(/\\/g, '');

    // Compile your 5 sub-sections sequentially inside a single string pass
    const part1 = window.formRegistry['employer-id-ein-part1-layout'] ? window.formRegistry['employer-id-ein-part1-layout'](cleanStateOptions) : '';
    const part2 = window.formRegistry['employer-id-ein-part2-layout'] ? window.formRegistry['employer-id-ein-part2-layout']() : '';
    const part3 = window.formRegistry['employer-id-ein-part3-layout'] ? window.formRegistry['employer-id-ein-part3-layout']() : '';
    const part4 = window.formRegistry['employer-id-ein-part4-layout'] ? window.formRegistry['employer-id-ein-part4-layout']() : '';
    const part5 = window.formRegistry['employer-id-ein-part5-layout'] ? window.formRegistry['employer-id-ein-part5-layout']() : '';
    
    const totalCompiledHtmlMarkup = part1 + part2 + part3 + part4 + part5;

    // TARGET LOCATOR PASS: Find the HTML container on your screen
    const liveTargetPanel = document.getElementById("step-panel-2") || 
                            document.querySelector(".wizard-panel-active") || 
                            document.getElementById("wizard-form-container");

    if (liveTargetPanel) {
      liveTargetPanel.innerHTML = totalCompiledHtmlMarkup;
      console.log("[EIN Interlock Bridge Success] Intake form painted safely onto active view workspace.");
    }

    // Synchronize conditional display layers post-DOM paint
    setTimeout(() => {
      if (typeof window.toggleEinConditionalFieldWrappers === "function") {
        window.toggleEinConditionalFieldWrappers();
      }
    }, 15);

    return totalCompiledHtmlMarkup;
  };

  // Re-map service key anchors cleanly to bypass proxy loops safely
  window.executeStepTwoFormHydrationPipeline = window.formRegistry['employer-id-ein-form-master'];
  window.formRegistry['employer-id-ein'] = window.executeStepTwoFormHydrationPipeline;
  window.formRegistry['employer-id-ein-layout'] = window.executeStepTwoFormHydrationPipeline;

  console.log("[EIN Layout Linker] Step-aware active rendering guard armed successfully.");


// Re-execute master ignition loop to update active framework bindings safely
initEmployerIdEinService();
