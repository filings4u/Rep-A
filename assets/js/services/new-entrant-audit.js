function validateNewEntrantAuditFormPart1() {
  let isValid = true;

  const markInvalid = (inputEl, errorEl, msg) => {
    errorEl.textContent = msg;
    errorEl.style.display = "block";
    inputEl.style.border = "1px solid #ef4444";
    isValid = false;
  };

  const markValid = (inputEl, errorEl) => {
    errorEl.style.display = "none";
    inputEl.style.border = "";
  };

  // 1. Validate Owner First Name
  const firstNameField = document.getElementById('nea_owner_first_name');
  const firstNameErr = document.getElementById('err_nea_owner_first_name');
  if (!firstNameField || !firstNameField.value.trim()) {
    markInvalid(firstNameField, firstNameErr, "Owner first name is required.");
  } else {
    markValid(firstNameField, firstNameErr);
  }

  // 2. Validate Owner Last Name
  const lastNameField = document.getElementById('nea_owner_last_name');
  const lastNameErr = document.getElementById('err_nea_owner_last_name');
  if (!lastNameField || !lastNameField.value.trim()) {
    markInvalid(lastNameField, lastNameErr, "Owner last name is required.");
  } else {
    markValid(lastNameField, lastNameErr);
  }

  // 3. Validate Owner Email Address
  const emailField = document.getElementById('nea_owner_email');
  const emailErr = document.getElementById('err_nea_owner_email');
  if (emailField && emailErr) {
    const emailVal = emailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      markInvalid(emailField, emailErr, "Owner profile email address is required.");
    } else if (!emailRegex.test(emailVal)) {
      markInvalid(emailField, emailErr, "Please supply a valid administrative contact email format.");
    } else {
      markValid(emailField, emailErr);
    }
  }

  // 4. Validate Owner Phone Number
  const phoneField = document.getElementById('nea_owner_phone');
  const phoneErr = document.getElementById('err_nea_owner_phone');
  if (!phoneField || !phoneField.value.trim()) {
    markInvalid(phoneField, phoneErr, "Owner phone number is required.");
  } else {
    markValid(phoneField, phoneErr);
  }

  // 5. Validate Official Motor Carrier Name
  const legalNameField = document.getElementById('nea_legal_name');
  const legalNameErr = document.getElementById('err_nea_legal_name');
  if (!legalNameField || !legalNameField.value.trim()) {
    markInvalid(legalNameField, legalNameErr, "Official motor carrier name is required.");
  } else {
    markValid(legalNameField, legalNameErr);
  }

  // 6. Validate USDOT Number (Input layer filters non-numbers; checking non-empty status)
  const usdotField = document.getElementById('nea_usdot_number');
  const usdotErr = document.getElementById('err_nea_usdot_number');
  if (!usdotField || !usdotField.value.trim()) {
    markInvalid(usdotField, usdotErr, "USDOT number is required.");
  } else {
    markValid(usdotField, usdotErr);
  }

  // 7. Validate MC Number (Input layer filters non-numbers; checking non-empty status)
  const mcField = document.getElementById('nea_mc_number');
  const mcErr = document.getElementById('err_nea_mc_number');
  if (!mcField || !mcField.value.trim()) {
    markInvalid(mcField, mcErr, "MC number is required.");
  } else {
    markValid(mcField, mcErr);
  }

  // 8. Validate Safety Audit Notice Status Dropdown
  const triggerField = document.getElementById('nea_audit_trigger_status');
  const triggerErr = document.getElementById('err_nea_audit_trigger_status');
  if (!triggerField || !triggerField.value) {
    markInvalid(triggerField, triggerErr, "Please select your current safety audit notice status.");
  } else {
    markValid(triggerField, triggerErr);
  }

  // 9. Conditional Validation for Submission Deadline Date
  const deadlineWrapper = document.getElementById('nea_letter_deadline_wrapper');
  const deadlineField = document.getElementById('nea_audit_deadline');
  const deadlineErr = document.getElementById('err_nea_audit_deadline');

  if (deadlineWrapper && (deadlineWrapper.style.display === "block" || deadlineWrapper.style.display === "grid" || (triggerField && triggerField.value === "letter-received"))) {
    if (!deadlineField || !deadlineField.value) {
      markInvalid(deadlineField, deadlineErr, "Submission deadline date is required when an official notice letter has been received.");
    } else {
      markValid(deadlineField, deadlineErr);
    }
  } else {
    if (deadlineField && deadlineErr) markValid(deadlineField, deadlineErr);
  }

  return isValid;
}
window.validateNewEntrantAuditFormPart1 = validateNewEntrantAuditFormPart1;


// ============================================================================
// 📋 FAMILY 34: NEW ENTRANT SAFETY AUDIT LAYOUT MATRIX (PART A)
// ============================================================================
function buildNewEntrantAuditFormPart1(stateDropdownOptionsHtml = "") {
 return `
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-top: 12px; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> FMCSA New Entrant Safety Assurance Program</strong> 
   All newly registered motor carriers are placed into a 18-month federal monitoring window. The FMCSA mandates a compulsory **New Entrant Safety Audit** within this timeframe to verify robust administrative tracking of driver logs, vehicle records, drug screens, and security structures. Failing this audit results in immediate, permanent revocation of operating authority.
 </div>

 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Company Owner Information Profile</h3>
 </div>

 <!-- FIELD 1: OWNER FIRST NAME -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="nea_owner_first_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner First Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="nea_owner_first_name" required placeholder="First Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_nea_owner_first_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: OWNER LAST NAME -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="nea_owner_last_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner Last Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="nea_owner_last_name" required placeholder="Last Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_nea_owner_last_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: OWNER EMAIL -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="nea_owner_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: flex; align-items: center; gap: 4px;">Owner Email Address <span style="color: #ef4444;">*</span></label>
   <input type="email" id="nea_owner_email" required placeholder="e.g. name@company.com" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_nea_owner_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   <div style="margin-top: 4px; font-size: 0.75rem; color: var(--slate, #64748b); line-height: 1.3; font-weight: 500;">
     <i class="fa-solid fa-circle-info" style="color: #10b981;"></i> This email will be used to access your secure client dashboard and initialize your corporate profile account.
   </div>
 </div>

 <!-- FIELD 4: OWNER PHONE -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="nea_owner_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner Phone Number <span style="color: #ef4444;">*</span></label>
   <input type="tel" id="nea_owner_phone" required placeholder="e.g. 773-245-7079" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_nea_owner_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Motor Carrier Audit Identification Profile</h3>
 </div>

 <!-- FIELD 5: OFFICIAL MOTOR CARRIER NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="nea_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Motor Carrier Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="nea_legal_name" required placeholder="Enter exact name registered on your USDOT portal" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_nea_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 6: USDOT NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="nea_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
   <input type="text" id="nea_usdot_number" required placeholder="e.g. 1234567" class="wizard-input-field" style="width: 100%; box-sizing: border-box;" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
   <div class="wizard-error-message" id="err_nea_usdot_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 7: MC NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="nea_mc_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">MC Number <span style="color: #ef4444;">*</span></label>
   <input type="text" id="nea_mc_number" required placeholder="e.g. 123456" class="wizard-input-field" style="width: 100%; box-sizing: border-box;" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
   <div class="wizard-error-message" id="err_nea_mc_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 8: SAFETY AUDIT NOTICE STATUS DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="nea_audit_trigger_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">FMCSA Safety Audit Notice Status <span style="color: #ef4444;">*</span></label>
   <select id="nea_audit_trigger_status" required class="wizard-input-field" style="font-weight: 600; max-width: 100%; width: 100%; box-sizing: border-box; white-space: normal; word-wrap: break-word;" onchange="var wrapper = document.getElementById('nea_letter_deadline_wrapper'); var input = document.getElementById('nea_audit_deadline'); if(this.value === 'letter-received') { if(wrapper) wrapper.style.display = 'block'; if(input) input.required = true; } else { if(wrapper) wrapper.style.display = 'none'; if(input) { input.required = false; input.value = ''; } }">
     <option value="preemptive" selected>Preemptive Check (Proactively setting up compliance before receiving state tracking letters)</option>
     <option value="letter-received">Official Audit Letter Received (FMCSA has issued an explicit document request deadline)</option>
   </select>
   <div class="wizard-error-message" id="err_nea_audit_trigger_status" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- CONDITIONAL FIELD 9: MANDATORY SUBMISSION DEADLINE DATE -->
 <div id="nea_letter_deadline_wrapper" class="wizard-input-group" style="grid-column: span 1; display: none;">
   <label for="nea_audit_deadline" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mandatory Submission Deadline Date <span style="color: #ef4444;">*</span></label>
   <input type="date" id="nea_audit_deadline" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_nea_audit_deadline" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <div style="grid-column: span 2; margin: 12px 0;">
   <button type="button" onclick="window.launchNewEntrantAuditRequirementsGuideModal()" style="background: var(--navy); color: #ffffff; font-weight: 800; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 0.85rem; box-shadow: 0 2px 4px rgba(0,0,0,0.15); width: 100%; justify-content: center;">
     <i class="fa-solid fa-list-check"></i> Launch New Entrant Audit Requirements Checklist & Price Guide
   </button>
 </div>
 `;
}
window.buildNewEntrantAuditFormPart1 = buildNewEntrantAuditFormPart1;

function validateNewEntrantAuditFormPart2() {
  let isValid = true;

  const servicesList = [
    'nea_service_dqf',
    'nea_service_consortium',
    'nea_service_hos',
    'nea_service_maintenance',
    'nea_service_consultation'
  ];

  let selectedCount = 0;
  servicesList.forEach(function(id) {
    const box = document.getElementById(id);
    if (box && box.checked) {
      selectedCount++;
    }
  });

  const matrixErr = document.getElementById('err_nea_services_matrix');
  if (matrixErr) {
    // Modify selection requirement conditions here if choosing an option is completely optional
    const requiresAtLeastOneAddon = false; 

    if (requiresAtLeastOneAddon && selectedCount === 0) {
      matrixErr.textContent = "Please opt into at least one compliance preparation folder package.";
      matrixErr.style.display = "block";
      isValid = false;
    } else {
      matrixErr.style.display = "none";
    }
  }

  return isValid;
}
window.validateNewEntrantAuditFormPart2 = validateNewEntrantAuditFormPart2;

function buildNewEntrantAuditFormPart2(stateDropdownOptionsHtml = "") {
 return `
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Authorized Audit Preparation Support</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select which critical compliance folders you want Filings4u to assemble and optimize. Checked items add dynamically to your checkout balance:</p>
 </div>
 <div style="grid-column: span 2; display: flex; flex-direction: column; gap: 12px; width: 100%; box-sizing: border-box;">
   
   <!-- SERVICE BOX 1: DQF -->
   <div style="display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; width: 100%;">
     <div style="display: flex; align-items: flex-start; gap: 10px;">
       <input type="checkbox" id="nea_service_dqf" value="79.00" data-price="79.00" data-name="Driver Qualifications Folder (DQF Assembly)" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
       <div>
         <label for="nea_service_dqf" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Driver Qualifications Folder Assembly</label>
         <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.45;">Verify that all drivers meet the necessary qualifications and training standards required for their roles within the organization. Compiles mandatory medical examiner certificates, training certifications, 3-year historical background safety investigations, and annual motor vehicle driving records.</span>
       </div>
     </div>
     <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$79.00</div>
   </div>

   <!-- SERVICE BOX 2: DRUG & ALCOHOL CONSORTIUM -->
   <div style="display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; width: 100%;">
     <div style="display: flex; align-items: flex-start; gap: 10px;">
       <input type="checkbox" id="nea_service_consortium" value="149.00" data-price="149.00" data-name="Compliance with Regulations (DOT Consortium Enrollment)" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
       <div>
         <label for="nea_service_consortium" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">DOT Drug & Alcohol Consortium Enrollment</label>
         <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.45;">Check adherence to applicable local, state, and federal regulations governing the industry. Secures verification of authority, up-to-date active registrations, licenses, appropriate insurance policies to protect against liabilities, and complete Part 382 random drug pool screening registries.</span>
       </div>
     </div>
     <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$149.00</div>
   </div>

 </div>
 `;
}

function buildNewEntrantAuditFormPart2_Extended() {
 return `
 <div style="grid-column: span 2; display: flex; flex-direction: column; gap: 12px; width: 100%; box-sizing: border-box;">
   
   <!-- SERVICE BOX 3: HOS -->
   <div style="display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; width: 100%;">
     <div style="display: flex; align-items: flex-start; gap: 10px;">
       <input type="checkbox" id="nea_service_hos" value="195.00" data-price="195.00" data-name="Record-Keeping Practices (HOS Log Audit)" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
       <div>
         <label for="nea_service_hos" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Hours of Service (HOS) Log Audit Pre-Review</label>
         <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.45;">Examine record-keeping practices to ensure processes are efficient, accurate, and in line with auditing standards. Conducts dynamic reviews across operational procedures, electronic logging device (ELD) data feeds, and compliance training programs to iron out graph exceptions.</span>
       </div>
     </div>
     <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$195.00</div>
   </div>

   <!-- SERVICE BOX 4: MAINTENANCE -->
   <div style="display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; width: 100%;">
     <div style="display: flex; align-items: flex-start; gap: 10px;">
       <input type="checkbox" id="nea_service_maintenance" value="85.00" data-price="85.00" data-name="Vehicle Maintenance Records Folder" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
       <div>
         <label for="nea_service_maintenance" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Vehicle Maintenance Records & Periodic Inspection Files</label>
         <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.45;">Inspect maintenance records to confirm that all vehicles are regularly serviced and meet rigorous safety requirements. Assembles systematic Part 396 annual test sheets, daily driver vehicle inspection reports (DVIR), repair invoices, and active asset tracking dossiers.</span>
       </div>
     </div>
     <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$85.00</div>
   </div>

   <!-- SERVICE BOX 5: MOCK AUDIT MP CONSULTATION -->
   <div style="display: flex; align-items: flex-start; justify-content: space-between; background: rgba(10, 31, 68, 0.02); border: 1px dashed var(--primary, #10b981); padding: 14px; border-radius: 8px; box-sizing: border-box; width: 100%;">
     <div style="display: flex; align-items: flex-start; gap: 10px;">
       <input type="checkbox" id="nea_service_consultation" value="250.00" data-price="250.00" data-name="Independent Mock Pre-Audit Package" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
       <div>
         <label for="nea_service_consultation" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Operational Systems & Safety Management Plan Consultation</label>
         <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.45;">Evaluate your entire safety management plan to ensure it adequately addresses potential operational risks and sustains business viability. Delivers a private 1-on-1 mock review session with a senior safety strategist to pass strict compliance criteria before your official upload deadline.</span>
       </div>
     </div>
     <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$250.00</div>
   </div>

   <!-- REGULATORY OPTION MATRIX ERROR LAYOUT PLACEHOLDER -->
   <div class="wizard-error-message" id="err_nea_services_matrix" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

window.buildNewEntrantAuditFormPart2 = buildNewEntrantAuditFormPart2;
window.buildNewEntrantAuditFormPart2_Extended = buildNewEntrantAuditFormPart2_Extended;


function validateNewEntrantAuditFormParts2And3() {
  let isValid = true;

  const servicesList = [
    'nea_service_dqf',
    'nea_service_consortium',
    'nea_service_hos',
    'nea_service_maintenance',
    'nea_service_consultation'
  ];

  let selectedCount = 0;
  servicesList.forEach(function(id) {
    const box = document.getElementById(id);
    if (box && box.checked) {
      selectedCount++;
    }
  });

  const matrixErr = document.getElementById('err_nea_services_matrix');
  if (matrixErr) {
    // If selecting folders is strictly mandatory, modify flag to true
    const requiresAtLeastOneAddon = false; 

    if (requiresAtLeastOneAddon && selectedCount === 0) {
      matrixErr.textContent = "Please select at least 1 compliance preparation option to continue.";
      matrixErr.style.display = "block";
      isValid = false;
    } else {
      matrixErr.style.display = "none";
    }
  }

  // Note: Part 3 provisions textarea is optional and does not block submission
  return isValid;
}
window.validateNewEntrantAuditFormPart2 = validateNewEntrantAuditFormParts2And3;

function buildNewEntrantAuditFormPart2_Extended() {
 return `
 <div style="grid-column: span 2; display: flex; flex-direction: column; gap: 12px; width: 100%; box-sizing: border-box;">
   
   <!-- FIELD 3: HOS CHECKBOX -->
   <div style="display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-bottom: 12px; width: 100%;">
     <div style="display: flex; align-items: flex-start; gap: 10px;">
       <input type="checkbox" id="nea_service_hos" value="195.00" data-price="195.00" data-name="Record-Keeping Practices (HOS Log Audit)" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
       <div>
         <label for="nea_service_hos" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Record-Keeping Practices (Hours of Service Log Audit Pre-Review)</label>
         <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.4;">Examine the record-keeping processes to ensure they are efficient, accurate, and in compliance with auditing standards, utilizing ELD graph telemetry assessments and structural exception auditing.</span>
       </div>
     </div>
     <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$195.00</div>
   </div>

   <!-- FIELD 4: MAINTENANCE CHECKBOX -->
   <div style="display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-bottom: 12px; width: 100%;">
     <div style="display: flex; align-items: flex-start; gap: 10px;">
       <input type="checkbox" id="nea_service_maintenance" value="85.00" data-price="85.00" data-name="Vehicle Maintenance Records (Ledger Setup)" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
       <div>
         <label for="nea_service_maintenance" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Vehicle Maintenance Records (Ledger & Inspection Folder Set)</label>
         <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.4;">Inspect maintenance records to confirm that all vehicles are regularly serviced and meet safety and operational standards, integrating Part 396 systemic annual visual documentation sheets and DVIR trackers.</span>
       </div>
     </div>
     <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$85.00</div>
   </div>

   <!-- FIELD 5: CONSULTATION CHECKBOX -->
   <div style="display: flex; align-items: flex-start; justify-content: space-between; background: rgba(10, 31, 68, 0.02); border: 1px dashed var(--primary, #10b981); padding: 14px; border-radius: 8px; box-sizing: border-box; width: 100%;">
     <div style="display: flex; align-items: flex-start; gap: 10px;">
       <input type="checkbox" id="nea_service_consultation" value="250.00" data-price="250.00" data-name="Operational & Safety Management (Mock Audit Package)" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
       <div>
         <label for="nea_service_consultation" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Operational Procedures & Safety Management Plan (Pre-Audit Consultation Package)</label>
         <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.4;">Review operational systems, establish compliance, evaluate safety management setups to protect against insurance liabilities, check verification of authority, and assess financial viability via a 1-on-1 dossier mock review session.</span>
       </div>
     </div>
     <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$250.00</div>
   </div>
   
   <!-- GLOBAL MATRIX ERROR TEXT ROW -->
   <div class="wizard-error-message" id="err_nea_services_matrix" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function buildNewEntrantAuditFormPart3(stateDropdownOptionsHtml = "") {
 return `
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Special Handling Instructions & Carrier Authorization</h3>
 </div>
 <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; width: 100%; box-sizing: border-box;">
   <label for="nea_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Audit Instructions</label>
   <textarea id="nea_provisions" placeholder="Detail any safety write-ups, custom ELD platforms..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// Global script tracking windows mapping assignments
window.buildNewEntrantAuditFormPart2 = buildNewEntrantAuditFormPart2;
window.buildNewEntrantAuditFormPart2_Extended = buildNewEntrantAuditFormPart2_Extended;
window.buildNewEntrantAuditFormPart3 = buildNewEntrantAuditFormPart3;
// ============================================================================
// 📦 MASTER NEW ENTRANT SAFETY AUDIT APPLICATION ASSEMBLY HOOK (REPAIRED)
// ============================================================================
function buildNewEntrantAuditForm(stateDropdownOptionsHtml = "") {
  const section1Html = typeof window.buildNewEntrantAuditFormPart1 === "function" ? window.buildNewEntrantAuditFormPart1(stateDropdownOptionsHtml) : "";
  const section2Html = (typeof window.buildNewEntrantAuditFormPart2 === "function" ? window.buildNewEntrantAuditFormPart2(stateDropdownOptionsHtml) : "") + 
                       (typeof window.buildNewEntrantAuditFormPart2_Extended === "function" ? window.buildNewEntrantAuditFormPart2_Extended() : "");
  const section3Html = typeof window.buildNewEntrantAuditFormPart3 === "function" ? window.buildNewEntrantAuditFormPart3(stateDropdownOptionsHtml) : "";
  
  return section1Html + section2Html + section3Html;
}

/**
 * Dynamic summary item card ledger generator helper.
 */
function appendSummaryRowItem(targetContainer, itemText, monetaryCost, optionalInlineCSS = "") {
  if (!targetContainer) return;
  const itemRow = document.createElement("div");
  itemRow.style.cssText = "display: flex; justify-content: space-between; font-size: 1rem; color: var(--navy, #0a1f44); border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;" + optionalInlineCSS;
  
  const labelSpan = document.createElement("span");
  labelSpan.innerText = itemText;
  
  const priceStrong = document.createElement("strong");
  priceStrong.style.fontFamily = "monospace";
  priceStrong.innerText = "$" + Number(monetaryCost).toFixed(2);
  
  itemRow.appendChild(labelSpan);
  itemRow.appendChild(priceStrong);
  targetContainer.appendChild(itemRow);
}

// 📦 SECURE EXPOSURE TO GLOBAL PARAMETERS CONTEXT MATRIX
window.buildNewEntrantAuditForm = buildNewEntrantAuditForm;
window.appendSummaryRowItem = appendSummaryRowItem;

console.log("[Dynamic Registry] Unified new-entrant script shards loaded and configured successfully.");


/**
 * Scans all field parameters inside the New Entrant Safety Audit Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireNewEntrantWizard() {
  const isPart1Valid = typeof window.validateNewEntrantAuditFormPart1 === 'function' ? window.validateNewEntrantAuditFormPart1() : true;
  const isPart23Valid = typeof window.validateNewEntrantAuditFormPart2 === 'function' ? window.validateNewEntrantAuditFormPart2() : true;

  return (isPart1Valid && isPart23Valid);
}
window.validateEntireNewEntrantWizard = validateEntireNewEntrantWizard;
