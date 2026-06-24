function validateProcessAgentBoc3FormPart1() {
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

  // 1. Validate Legal Company Name
  const nameField = document.getElementById('boc_legal_name');
  const nameErr = document.getElementById('err_boc_legal_name');
  if (!nameField || !nameField.value.trim()) {
    markInvalid(nameField, nameErr, "Official legal company name is required.");
  } else {
    markValid(nameField, nameErr);
  }

  // 2. Validate Filing Bundle Association Dropdown Selection
  const bundleField = document.getElementById('boc_bundle_check');
  const bundleErr = document.getElementById('err_boc_bundle_check');
  if (!bundleField || !bundleField.value) {
    markInvalid(bundleField, bundleErr, "Please select a filing bundle association.");
  } else {
    markValid(bundleField, bundleErr);
  }

  // 3. Conditional Validation for Independent FMCSA Operating Credentials
  const numsWrapper = document.getElementById('boc_authority_nums_wrapper');
  const dotField = document.getElementById('boc_usdot_number');
  const dotErr = document.getElementById('err_boc_usdot_number');
  const mcField = document.getElementById('boc_mc_number');
  const mcErr = document.getElementById('err_boc_mc_number');

  if (numsWrapper && (numsWrapper.style.display === "grid" || numsWrapper.style.display === "block" || (bundleField && bundleField.value === "independent"))) {
    // Validate USDOT Number (Enforce numbers only)
    if (dotField && dotErr) {
      const dotVal = dotField.value.trim();
      if (!dotVal) {
        markInvalid(dotField, dotErr, "USDOT number is required for standalone processing.");
      } else if (!/^\d+$/.test(dotVal)) {
        markInvalid(dotField, dotErr, "USDOT parameters must contain numbers only.");
      } else {
        markValid(dotField, dotErr);
      }
    }

    // Validate MC / FF Number (Enforce numeric strings)
    if (mcField && mcErr) {
      const mcVal = mcField.value.trim();
      if (!mcVal) {
        markInvalid(mcField, mcErr, "MC or FF operating identifier number is required.");
      } else if (!/^\d+$/.test(mcVal)) {
        markInvalid(mcField, mcErr, "Operating numbers must contain numeric digits only.");
      } else {
        markValid(mcField, mcErr);
      }
    }
  } else {
    if (dotField && dotErr) markValid(dotField, dotErr);
    if (mcField && mcErr) markValid(mcField, mcErr);
  }

  // 4. Validate Scope of Process Agent Designation Dropdown Selection
  const intentField = document.getElementById('boc_filing_intent');
  const intentErr = document.getElementById('err_boc_filing_intent');
  if (!intentField || !intentField.value) {
    markInvalid(intentField, intentErr, "Please pick a process agent designation filing intent scope.");
  } else {
    markValid(intentField, intentErr);
  }

  return isValid;
}

// FAMILY 29A: PROCESS AGENT (BOC-3) FILING LAYOUT MATRIX (PART 1 OF 3)
function buildProcessAgentBoc3FormPart1(stateDropdownOptionsHtml = "") {
 return `
 <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS A BOC-3 FILING? -->
 <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
   <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Statutory Process Agent (BOC-3) Mandates</strong> 
   The FMCSA strictly mandates that all interstate motor carriers, freight forwarders, and property brokers maintain a valid Form BOC-3 (Designation of Process Agents) on file. This establishes a legal blanket agent network across all 50 states who are authorized to receive legal service of process documents on behalf of your entity. Operating authority remains suspended or inactive until this filing is transmitted electronically.
 </div>

 <!-- SECTION 1: DESIGNATING AUTHORITY PROFILE -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Designating Authority Profile</h3>
 </div>

 <!-- FIELD 1: OFFICIAL LEGAL COMPANY NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="boc_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Legal Company Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="boc_legal_name" required placeholder="Enter exact name registered with the FMCSA or corporate state records" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_boc_legal_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 2: FILING BUNDLE ASSOCIATION DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="boc_bundle_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Bundle Association <span style="color: #ef4444;">*</span></label>
   <select id="boc_bundle_check" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;" onchange="toggleBoc3AuthorityIdentifiersVisibility(this.value)">
     <option value="bundled" selected>Bundled Request (Processing simultaneously with my Trucker/Broker Authority application)</option>
     <option value="independent">Independent Order (I already have an active/pending USDOT or MC number)</option>
   </select>
   <div class="wizard-error-message" id="err_boc_bundle_check" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- Hidden Conditional Container: Independent Authority Operating Numbers -->
 <div id="boc_authority_nums_wrapper" style="grid-column: span 1; display: none; grid-template-columns: 1fr 1fr; gap: 16px; box-sizing: border-box;">
   
   <!-- CONDITIONAL FIELD: USDOT NUMBER -->
   <div class="wizard-input-group" style="margin: 0;">
     <label for="boc_usdot_number" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">USDOT Number <span style="color: #ef4444;">*</span></label>
     <input type="text" id="boc_usdot_number" placeholder="Enter USDOT #" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
     <div class="wizard-error-message" id="err_boc_usdot_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   </div>
   
   <!-- CONDITIONAL FIELD: MC / FF NUMBER -->
   <div class="wizard-input-group" style="margin: 0;">
     <label for="boc_mc_number" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">MC / FF Number <span style="color: #ef4444;">*</span></label>
     <input type="text" id="boc_mc_number" placeholder="e.g. 000000" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
     <div class="wizard-error-message" id="err_boc_mc_number" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
   </div>
 </div>

 <!-- SECTION 2: FILING INTENT CLASSIFICATION -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Filing Intent Classification</h3>
 </div>

 <!-- FIELD 3: SCOPE OF PROCESS AGENT DESIGNATION DROPDOWN -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="boc_filing_intent" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Scope of Process Agent Designation <span style="color: #ef4444;">*</span></label>
   <select id="boc_filing_intent" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
     <option value="new-blanket" selected>New Blanket Agent Designation (Establish comprehensive 50-state blanket process agent coverage)</option>
     <option value="amendment">Amending an Existing Profile (Update officer addresses or modify previous state-specific agents)</option>
   </select>
   <div class="wizard-error-message" id="err_boc_filing_intent" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

function validateProcessAgentBoc3FormParts2And3() {
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

  // 1. Validate Headquarters Physical Street Address (Strict No P.O. Box rule)
  const streetField = document.getElementById('boc_physical_street');
  const streetErr = document.getElementById('err_boc_physical_street');
  if (streetField && streetErr) {
    const val = streetField.value.trim();
    const poBoxRegex = /\b(p\.?\s*o\.?\s*box|post\s+office\s+box)\b/i;

    if (!val) {
      markInvalid(streetField, streetErr, "Headquarters physical street address is required.");
    } else if (poBoxRegex.test(val)) {
      markInvalid(streetField, streetErr, "FMCSA commercial network guidelines prohibit P.O. Boxes for process agent assignments.");
    } else {
      markValid(streetField, streetErr);
    }
  }

  // 2. Validate City
  const cityField = document.getElementById('boc_physical_city');
  const cityErr = document.getElementById('err_boc_physical_city');
  if (!cityField || !cityField.value.trim()) {
    markInvalid(cityField, cityErr, "City coordinate parameter is required.");
  } else {
    markValid(cityField, cityErr);
  }

  // 3. Validate State Dropdown Selection
  const stateField = document.getElementById('boc_physical_state');
  const stateErr = document.getElementById('err_boc_physical_state');
  if (!stateField || !stateField.value) {
    markInvalid(stateField, stateErr, "Please pick your business headquarters state location.");
  } else {
    markValid(stateField, stateErr);
  }

  // 4. Validate Zip Code
  const zipField = document.getElementById('boc_physical_zip');
  const zipErr = document.getElementById('err_boc_physical_zip');
  if (!zipField || !zipField.value.trim()) {
    markInvalid(zipField, zipErr, "Zip Code is required.");
  } else {
    markValid(zipField, zipErr);
  }

  // 5. Validate Contact Full Legal Name
  const contactNameField = document.getElementById('boc_contact_name');
  const contactNameErr = document.getElementById('err_boc_contact_name');
  if (!contactNameField || !contactNameField.value.trim()) {
    markInvalid(contactNameField, contactNameErr, "Contact person full legal name is required.");
  } else {
    markValid(contactNameField, contactNameErr);
  }

  // 6. Validate Contact Phone Number
  const contactPhoneField = document.getElementById('boc_contact_phone');
  const contactPhoneErr = document.getElementById('err_boc_contact_phone');
  if (!contactPhoneField || !contactPhoneField.value.trim()) {
    markInvalid(contactPhoneField, contactPhoneErr, "Contact phone number is required.");
  } else {
    markValid(contactPhoneField, contactPhoneErr);
  }

  // 7. Validate Contact Email Address
  const contactEmailField = document.getElementById('boc_contact_email');
  const contactEmailErr = document.getElementById('err_boc_contact_email');
  if (contactEmailField && contactEmailErr) {
    const emailVal = contactEmailField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailVal) {
      markInvalid(contactEmailField, contactEmailErr, "Contact email address is required.");
    } else if (!emailRegex.test(emailVal)) {
      markInvalid(contactEmailField, contactEmailErr, "Please supply a valid administrative contact email pattern.");
    } else {
      markValid(contactEmailField, contactEmailErr);
    }
  }

  return isValid;
}

// FAMILY 29A: PROCESS AGENT (BOC-3) FILING LAYOUT MATRIX (PART 2 OF 3)
function buildProcessAgentBoc3FormPart2(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 3: PRINCIPAL PLACE OF BUSINESS -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Principal Place of Business Address</h3>
   <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The FMCSA requires the physical headquarters address where legal notices can be routed.</p>
 </div>

 <!-- FIELD 1: HEADQUARTERS STREET ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="boc_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Headquarters Street Address <span style="color: #ef4444;">*</span></label>
   <input type="text" id="boc_physical_street" required placeholder="Street address, suite, unit (FMCSA rules strictly prohibit P.O. Boxes)" class="wizard-input-field" style="width: 100%; box-sizing: border-box;" onfocus="attachGooglePlacesAutocompleteToNode(this, 'boc_physical')">
   <div class="wizard-error-message" id="err_boc_physical_street" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- GEOGRAPHIC COORD METRICS COMPONENT GRID -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
     <div>
       <label for="boc_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
       <input type="text" id="boc_physical_city" required placeholder="City" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
       <div class="wizard-error-message" id="err_boc_physical_city" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
     <div>
       <label for="boc_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
       <select id="boc_physical_state" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box;">
         <option value="" disabled selected>Select State...</option>
         ${stateDropdownOptionsHtml}
       </select>
       <div class="wizard-error-message" id="err_boc_physical_state" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
     <div>
       <label for="boc_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
       <input type="text" id="boc_physical_zip" required placeholder="Zip Code" style="font-family: monospace; width: 100%; box-sizing: border-box;" class="wizard-input-field">
       <div class="wizard-error-message" id="err_boc_physical_zip" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
     </div>
   </div>
 </div>

 <!-- SECTION 4: AUTHORIZED COMMUNICATIONS CONTACT -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Authorized Communications Contact</h3>
 </div>

 <!-- FIELD 2: CONTACT FULL LEGAL NAME -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="boc_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person Full Legal Name <span style="color: #ef4444;">*</span></label>
   <input type="text" id="boc_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_boc_contact_name" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 3: CONTACT PHONE NUMBER -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="boc_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Phone Number <span style="color: #ef4444;">*</span></label>
   <input type="tel" id="boc_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_boc_contact_phone" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>

 <!-- FIELD 4: CONTACT EMAIL ADDRESS -->
 <div class="wizard-input-group" style="grid-column: span 1;">
   <label for="boc_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Email Address <span style="color: #ef4444;">*</span></label>
   <input type="email" id="boc_contact_email" required placeholder="compliance@carrier.com" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
   <div class="wizard-error-message" id="err_boc_contact_email" style="color: #ef4444; font-size: 0.75rem; margin-top: 4px; display: none;"></div>
 </div>
 `;
}

// FAMILY 29A: PROCESS AGENT (BOC-3) FILING LAYOUT MATRIX (PART 3 OF 3)
function buildProcessAgentBoc3FormPart3(stateDropdownOptionsHtml = "") {
 return `
 <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
   <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Filing Clauses & Attestation</h3>
 </div>

 <!-- FIELD 5: OPTIONAL TEXTAREA -->
 <div class="wizard-input-group" style="grid-column: span 2;">
   <label for="boc_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Filing Instructions or Notes</label>
   <textarea id="boc_provisions" placeholder="Detail any immediate operating deadlines, expedited certificate processing needs, cross-border trucking nuances, or custom proxy handling directives relative to your FMCSA BOC-3 process agent dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
 </div>
 `;
}

// 📦 MASTER PROCESS AGENT (BOC-3) APPLICATION ASSEMBLY HOOK
function buildProcessAgentBoc3Form(stateDropdownOptionsHtml = "") {
 return buildProcessAgentBoc3FormPart1(stateDropdownOptionsHtml) + 
        buildProcessAgentBoc3FormPart2(stateDropdownOptionsHtml) + 
        buildProcessAgentBoc3FormPart3(stateDropdownOptionsHtml);
}

/**
 * Scans all field parameters inside the Process Agent (BOC-3) Wizard.
 * Updates UI layout parameters with error cues and reports structural status.
 * @returns {boolean} Outcome indicating global form validation success.
 */
function validateEntireProcessAgentWizard() {
  const isPart1Valid = typeof validateProcessAgentBoc3FormPart1 === 'function' ? validateProcessAgentBoc3FormPart1() : true;
  const isPart2Valid = validateProcessAgentBoc3FormParts2And3();

  return (isPart1Valid && isPart2Valid);
}
