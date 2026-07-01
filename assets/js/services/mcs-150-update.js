function initMcs150UpdateService() {
  // Secure global namespaces references cleanly
  window.formRegistry = window.formRegistry || {};
  
  // Target anchor injection point on Step 2 layout grid workspace
  const container = document.getElementById('dynamic-onboarding-fields-root');
  if (!container) return;

  // Clear loading indicators or skeleton placeholder lines
  container.innerHTML = '';

  // 1. Build the Informational Blue Accent Box Element Frame
  const contextBox = document.createElement('div');
  contextBox.style.cssText = 'grid-column: span 2; background: #ffffff; border-left: 4px solid var(--navy, #0a1f44); box-shadow: 0 1px 3px rgba(0,0,0,0.05); border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-radius: 0 8px 8px 0; padding: 16px; margin-bottom: 10px; box-sizing: border-box; text-align: left;';
  contextBox.innerHTML = `
    <h4 style="margin: 0 0 4px 0; color: var(--navy, #0a1f44); font-size: 0.95rem; font-weight: 800;">Understanding MCS-150 Biennial Update</h4>
    <p style="margin: 0; color: var(--slate, #64748b); font-size: 0.85rem; line-height: 1.5;">Motor carriers are required to file an updated MCS-150 form every 24 months to maintain active USDOT tracking registration parameters and ensure compliance with FMCSA safety monitoring cycles.</p>
  `;
  container.appendChild(contextBox);

  // Helper macro engine function to render standard input group slots with tooltips
  function createInputField(id, label, placeholder, isRequired = true, spanTwo = false, tooltipText = '') {
    const fieldWrapper = document.createElement('div');
    if (spanTwo) fieldWrapper.style.gridColumn = 'span 2';
    fieldWrapper.className = 'wizard-input-group';
    fieldWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 6px; text-align: left; position: relative;';

    // Tooltip Icon element if documentation copy string is present
    let tooltipMarkup = '';
    if (tooltipText) {
      tooltipMarkup = `
        <div class="mcs-tooltip-wrapper" style="display: inline-block; margin-left: 6px; position: relative;">
          <span style="cursor: pointer; color: #64748b; font-size: 0.8rem; background: #f1f5f9; padding: 1px 6px; border-radius: 50%; border: 1px solid #cbd5e1;" title="${tooltipText}">ⓘ</span>
        </div>
      `;
    }

    fieldWrapper.innerHTML = `
      <label for="${id}" style="font-size: 0.85rem; font-weight: 800; color: var(--navy, #0a1f44); display: flex; align-items: center;">
        ${label} ${isRequired ? '<span style="color: #ef4444; margin-left: 3px;">*</span>' : ''} ${tooltipMarkup}
      </label>
      <input type="text" id="${id}" name="${id}" placeholder="${placeholder}" ${isRequired ? 'required' : ''} 
        style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #e2e8f0); border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; color: var(--navy, #0a1f44); font-weight: 500; background: #ffffff; transition: all 0.2s;">
    `;
    return fieldWrapper;
  }

  // Helper macro engine function to render select drop menus matching standard form UI parameters
  function createSelectField(id, label, options, isRequired = true, spanTwo = false) {
    const fieldWrapper = document.createElement('div');
    if (spanTwo) fieldWrapper.style.gridColumn = 'span 2';
    fieldWrapper.style.cssText = 'display: flex; flex-direction: column; gap: 6px; text-align: left;';

    let optionsHTML = `<option value="" disabled selected>Select Option...</option>`;
    options.forEach(opt => {
      optionsHTML += `<option value="${opt.value}">${opt.text}</option>`;
    });

    fieldWrapper.innerHTML = `
      <label for="${id}" style="font-size: 0.85rem; font-weight: 800; color: var(--navy, #0a1f44);">
        ${label} ${isRequired ? '<span style="color: #ef4444; margin-left: 3px;">*</span>' : ''}
      </label>
      <select id="${id}" name="${id}" ${isRequired ? 'required' : ''} 
        style="width: 100%; padding: 10px 12px; border: 1px solid var(--border, #e2e8f0); border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; color: var(--navy, #0a1f44); font-weight: 500; background: #ffffff; height: 42px; cursor: pointer;">
        ${optionsHTML}
      </select>
    `;
    return fieldWrapper;
  }

  // Helper section divider generator element
  function createSectionHeader(titleNumber, titleText) {
    const headerWrapper = document.createElement('div');
    headerWrapper.style.cssText = 'grid-column: span 2; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-top: 14px; text-align: left;';
    headerWrapper.innerHTML = `
      <h3 style="font-size: 1rem; font-weight: 800; color: var(--navy, #0a1f44); margin: 0;">${titleNumber}. ${titleText}</h3>
    `;
    return headerWrapper;
  }

  // ============================================================================
  // 🏢 CONSTRUCT THE FORM FIELD SCHEMAS
  // ============================================================================

  // Section 1: Carrier Identifiers
  container.appendChild(createSectionHeader('1', 'Carrier Identification Records'));
  container.appendChild(createInputField('mcs_legal_name', 'Legal Business Name', 'Enter exact USDOT registered corporate entity name', true, false, 'The legal name must exactly match your entity registration details on file.'));
  container.appendChild(createInputField('mcs_usdot_number', 'USDOT Identification Number', 'e.g., 1234567', true, false, 'Your unique seven-digit USDOT tracking sequence parameter code.'));
  container.appendChild(createInputField('mcs_ein_number', 'Employer Identification Number (EIN)', 'XX-XXXXXXX', true, false));
  container.appendChild(createInputField('mcs_mc_number', 'MC/MX Number (If Applicable)', 'e.g., MC000000', false, false));

  // Section 2: Contact Information
  container.appendChild(createSectionHeader('2', 'Primary Operations Contact'));
  container.appendChild(createInputField('mcs_contact_name', "Contact Person's Full Name", 'First and Last Legal Name', true, true));
  container.appendChild(createInputField('mcs_phone_number', "Contact Person's Phone Number", '(512) 555-0199', true, false));
  container.appendChild(createInputField('mcs_email_address', "Contact Person's Email Address", 'email@example.com', true, false));

  // Section 3: Reason for Filing Update
  container.appendChild(createSectionHeader('3', 'Reason for Update Submission'));
  container.appendChild(createSelectField('mcs_filing_reason', 'Filing Update Vector Parameter', [
    { value: 'biennial_update', text: 'Biennial Update (Mandatory 24-Month Data Renewal Cycle)' },
    { value: 'out_of_service', text: 'Out of Service Notification Filing Request' },
    { value: 'data_correction', text: 'Voluntary Registered Carrier Profile Core Revision' }
  ], true, true));

  // Section 4: Operational Data Matrices
  container.appendChild(createSectionHeader('4', 'Fleet & Operational Metrics'));
  container.appendChild(createSelectField('mcs_mileage_status', 'Have your total mileage tracking indicators been calculated?', [
    { value: 'yes', text: 'Yes, mileage tracking registers have been fully recorded' },
    { value: 'no', text: 'No, using administrative baseline operation frameworks' }
  ], true, true));

  // Section 5: Compliance Declarations
  container.appendChild(createSectionHeader('5', 'Compliance Verification Affirmation'));
  container.appendChild(createSelectField('mcs_compliance_check', 'Have you verified safety governance regulations?', [
    { value: 'yes', text: 'Yes, all carrier tracking matrices align with FMCSA compliance parameters' },
    { value: 'no', text: 'No, regulatory parameters require validation adjustments' }
  ], true, true));

  // Bind the configuration structure to the formRegistry index interface tracking array
  window.formRegistry['mcs-150-update'] = {
    isValid: function() {
      // Standard input validation loops loop
      const fields = container.querySelectorAll('input[required], select[required]');
      for (let field of fields) {
        if (!field.value.trim()) return false;
      }
      return true;
    },
    serialize: function() {
      const formData = {};
      const fields = container.querySelectorAll('input, select');
      fields.forEach(field => {
        if(field.id) formData[field.id] = field.value;
      });
      return formData;
    }
  };
}
