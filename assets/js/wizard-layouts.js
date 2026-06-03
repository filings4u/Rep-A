// Expose state dropdown options globally so wizard-calculations.js can read them
window.globalStateDropdownOptionsHtml = typeof stateDropdownOptionsHtml !== 'undefined' ? stateDropdownOptionsHtml : '';

// FAMILY 1: LLC FORMATION LAYOUT MATRIX (PART 1)
function buildLlcFormationFieldsLayoutHtml() {
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="llc_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed LLC Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="llc_proposed_name" required placeholder="Example Logistics LLC" class="wizard-input-field" onblur="validateLlcNameSuffix(this)">
      <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Must include "LLC" or "Limited Liability Company".</span>
    </div>
    <div class="wizard-input-group">
      <label for="llc_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Purpose / Activities <span style="color: #ef4444;">*</span></label>
      <input type="text" id="llc_business_purpose" required placeholder="Brief description of what the LLC will do..." class="wizard-input-field">
    </div>
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="llc_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Select Registered Agent Provision <span style="color: #ef4444;">*</span></label>
      <select id="llc_ra_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleRegisteredAgentConditionalFields(this.value)">
        <option value="" disabled selected>Choose an option...</option>
        <option value="filings4u">Utilize Filings4u Protected Agent Shield Service — $75.00 / Year</option>
        <option value="custom">Maintain External Independent Third-Party Registered Agent</option>
      </select>
    </div>
    <div id="llc_custom_ra_wrapper" style="grid-column: span 2; display: none; grid-template-columns: 1fr 1fr; gap: 24px; background: var(--light-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--border); box-sizing: border-box; width: 100%;">
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="ra_custom_name" style="font-weight:700; font-size:0.8rem; color:var(--navy);">Agent Name</label>
        <input type="text" id="ra_custom_name" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="ra_custom_street" style="font-weight:700; font-size:0.8rem; color:var(--navy);">Street Address</label>
        <input type="text" id="ra_custom_street" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="ra_custom_city" style="font-weight:700; font-size:0.8rem; color:var(--navy);">City</label>
        <input type="text" id="ra_custom_city" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div>
          <label for="ra_custom_state" style="font-weight:700; font-size:0.8rem; color:var(--navy);">State</label>
          <input type="text" id="ra_custom_state" maxlength="2" class="wizard-input-field">
        </div>
        <div>
          <label for="ra_custom_zip" style="font-weight:700; font-size:0.8rem; color:var(--navy);">Zip</label>
          <input type="text" id="ra_custom_zip" class="wizard-input-field">
        </div>
      </div>
    </div>
  ` + buildLlcFormationFieldsPart2();
}
// FAMILY 1: LLC FORMATION LAYOUT MATRIX (PART 2)
function buildLlcFormationFieldsPart2() {
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. LLC Membership Registry</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <div id="llc_members_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
        <div class="member-record-card" id="member_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box;">
          <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">LLC Member #1 Records</span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
            <div class="wizard-input-group" style="grid-column: span 2;">
              <label for="member_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Full Legal Name</label>
              <input type="text" id="member_name_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="grid-column: span 2;">
              <label for="member_street_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Street Address</label>
              <input type="text" id="member_street_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group">
              <label for="member_city_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">City</label>
              <input type="text" id="member_city_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label for="member_state_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">State</label>
                <input type="text" id="member_state_1" required maxlength="2" class="wizard-input-field">
              </div>
              <div>
                <label for="member_zip_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Zip</label>
                <input type="text" id="member_zip_1" required class="wizard-input-field">
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onclick="appendNewLlcMemberRecordFieldNode()" style="margin-top: 12px; background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;"><i class="fa-solid fa-plus"></i> Add Additional Member</button>
    </div>
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Management & Options</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="llc_management_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Management Type</label>
      <select id="llc_management_type" required class="wizard-input-field" onchange="toggleLlcManagerFieldsMatrix(this.value)">
        <option value="member-managed" selected>Member-Managed</option>
        <option value="manager-managed">Manager-Managed</option>
      </select>
    </div>
    <div id="llc_manager_names_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="llc_manager_names" style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Manager Names & Addresses</label>
      <textarea id="llc_manager_names" rows="2" class="wizard-input-field"></textarea>
    </div>
    <div class="wizard-input-group">
      <label for="llc_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Lifespan Horizon</label>
      <select id="llc_duration_choice" required class="wizard-input-field" onchange="toggleLlcDurationDateVisibility(this.value)">
        <option value="perpetual" selected>Perpetual Duration</option>
        <option value="specified">Specified Term</option>
      </select>
    </div>
    <div id="llc_duration_date_wrapper" style="display: none; flex-direction: column; gap: 8px;">
      <label for="llc_expiration_date" style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Expiration Date</label>
      <input type="date" id="llc_expiration_date" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="llc_ein_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you possess an active EIN?</label>
      <select id="llc_ein_status" required class="wizard-input-field" onchange="toggleEinConditionalWorkflow(this.value)">
        <option value="" disabled selected>Choose...</option>
        <option value="yes">Yes, I possess an active EIN</option>
        <option value="no-buy">No, I need an EIN — Add Procurement ($79.00)</option>
        <option value="no-decline">No, I decline procurement services</option>
      </select>
    </div>
    <div id="llc_manual_ein_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="llc_existing_ein_field" style="font-weight: 700; font-size: 0.85rem; color: var(--navy);">Enter Existing EIN</label>
      <input type="text" id="llc_existing_ein_field" placeholder="00-0000000" class="wizard-input-field">
    </div>
  `;
}



// FAMILY 1B: SERIES LLC REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildSeriesLlcPart1() {
  // Shared reusable state selector array mapping tool
  const stateDropdownOptionsHtml = `
    <option value="" disabled selected>Select State...</option>
    <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option>
    <option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="FL">Florida</option>
    <option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option>
    <option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option>
    <option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option>
    <option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option>
    <option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option>
    <option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option>
    <option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option>
    <option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
  `;

  return `
    <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS A SERIES LLC? -->
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Series LLC?</strong> 
      A Series LLC is a specialized corporate structure allowing a master entity to isolate assets across independent sub-units or cells.
    </div>

    <!-- SECTION 1: ORGANIZATION INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Organization Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="sllc_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Series LLC Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sllc_proposed_name" required placeholder="Example Assets Series LLC" class="wizard-input-field" onblur="validateLlcNameSuffix(this)">
    </div>
    <div class="wizard-input-group">
      <label for="sllc_formation_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation / Filing Jurisdiction <span style="color: #ef4444;">*</span></label>
      <select id="sllc_formation_state" required class="wizard-input-field" style="font-weight: 600;">
        ${stateDropdownOptionsHtml}
      </select>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Purpose of Series LLC <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sllc_business_purpose" required placeholder="Brief description of primary activities..." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Office Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sllc_principal_street" required placeholder="123 Corporate Headquarters Way" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'llc_principal')">
    </div>
    <div class="wizard-input-group">
      <label for="sllc_principal_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sllc_principal_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="sllc_principal_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <select id="sllc_principal_state" required class="wizard-input-field" style="font-weight: 600;">
          ${stateDropdownOptionsHtml}
        </select>
      </div>
      <div>
        <label for="sllc_principal_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="sllc_principal_zip" required placeholder="78701" class="wizard-input-field">
      </div>
    </div>
  `;
}

// FAMILY 1B: SERIES LLC REGISTRATION LAYOUT MATRIX (PART 2 OF 2)
function buildSeriesLlcPart2(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 2: REGISTERED AGENT INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Select Registered Agent Provision <span style="color: #ef4444;">*</span></label>
      <select id="sllc_ra_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleRegisteredAgentConditionalFields(this.value)">
        <option value="" disabled selected>Choose an option...</option>
        <option value="filings4u">Utilize Filings4u Protected Agent Shield Service — $75.00 / Year</option>
        <option value="custom">Maintain External Independent Third-Party Registered Agent</option>
      </select>
    </div>
    
    <div id="llc_custom_ra_wrapper" style="grid-column: span 2; display: none; grid-template-columns: 1fr 1fr; gap: 24px; background: var(--light-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--border); box-sizing: border-box; width: 100%;">
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="sllc_ra_custom_name" style="font-weight:700; font-size:0.8rem; color:var(--navy); text-transform:uppercase;">Registered Agent Full Legal Name</label>
        <input type="text" id="sllc_ra_custom_name" placeholder="John Doe Legal Services Inc." class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="sllc_ra_custom_street" style="font-weight:700; font-size:0.8rem; color:var(--navy); text-transform:uppercase;">Registered Office Physical Street Address (No PO Boxes)</label>
        <input type="text" id="sllc_ra_custom_street" placeholder="456 Statutory Way" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'llc_ra_custom')">
      </div>
      <div class="wizard-input-group">
        <label for="sllc_ra_custom_city" style="font-weight:700; font-size:0.8rem; color:var(--navy); text-transform:uppercase;">City</label>
        <input type="text" id="sllc_ra_custom_city" placeholder="Austin" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div>
          <label for="sllc_ra_custom_state" style="font-weight:700; font-size:0.8rem; color:var(--navy); text-transform:uppercase;">State</label>
          <select id="sllc_ra_custom_state" class="wizard-input-field" style="font-weight: 600;">
            ${stateDropdownOptionsHtml}
          </select>
        </div>
        <div>
          <label for="sllc_ra_custom_zip" style="font-weight:700; font-size:0.8rem; color:var(--navy); text-transform:uppercase;">Zip Code</label>
          <input type="text" id="sllc_ra_custom_zip" placeholder="78701" class="wizard-input-field">
        </div>
      </div>
    </div>

    <!-- SECTION 3: CONTACT INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Contact Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="sllc_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Contact Full Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sllc_contact_name" required placeholder="John Doe" pattern="[A-Za-z\\\\s\\\\.\\\\-\\'\\s]+" title="Please provide a valid legal name character string." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="sllc_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number <span style="color: #ef4444;">*</span></label>
        <input type="tel" id="sllc_contact_phone" required placeholder="(512) 555-0199" pattern="\\\\+?[0-9\\\\s\\\\-\\\\(\\\\)]+" title="Please provide a valid phone layout structure." style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div>
        <label for="sllc_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address <span style="color: #ef4444;">*</span></label>
        <input type="email" id="sllc_contact_email" required placeholder="john.doe@company.com" class="wizard-input-field">
      </div>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_contact_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mailing Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sllc_contact_street" required placeholder="Street name and street number parameters" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,]+" title="Please provide a valid structural address format line." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'sllc_contact')">
    </div>
    <div class="wizard-input-group">
      <label for="sllc_contact_unit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Suite / Apt / Unit</label>
      <input type="text" id="sllc_contact_unit" placeholder="e.g. Suite 200, Apt 4B" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.]+" title="Alpha-numeric tracking symbols allowed." class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="sllc_contact_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sllc_contact_city" required placeholder="Austin" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text city location characters required." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; grid-column: span 2;">
      <div>
        <label for="sllc_contact_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <select id="sllc_contact_state" required class="wizard-input-field" style="font-weight: 600;">
          ${stateDropdownOptionsHtml}
        </select>
      </div>
      <div>
        <label for="sllc_contact_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="sllc_contact_zip" required placeholder="78701" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code metric required." style="font-family: monospace;" class="wizard-input-field">
      </div>
    </div>
  `;
}


// FAMILY 1B: SERIES LLC REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildSeriesLlcPart2(stateDropdownOptionsHtml = "") {
  return `
    <!-- SECTION 4: MANAGEMENT STRUCTURE & MEMBER REGISTRY -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Management Structure</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_management_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Management Designation <span style="color: #ef4444;">*</span></label>
      <select id="sllc_management_type" required class="wizard-input-field" style="font-weight: 600;">
        <option value="member-managed" selected>Member-Managed (Run directly by internal equity owners)</option>
        <option value="manager-managed">Manager-Managed (Run via appointed corporate executives)</option>
      </select>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <div id="sllc_members_container" style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        
        <!-- Initial Member #1 High-Fidelity Card Node Layout -->
        <div class="member-record-card" id="sllc_member_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Initial Member #1 Records</span>
          
          <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
            <label for="sllc_member_name_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sllc_member_name_1" required placeholder="Full Legal Name" pattern="[A-Za-z\\\\s\\\\.\\\\-\\'\\s]+" title="Please provide a valid legal name." class="wizard-input-field">
          </div>
          <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
            <label for="sllc_member_street_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sllc_member_street_1" required placeholder="Street Name and Number" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'llc_member_1')">
          </div>
          <div class="wizard-input-group" style="margin: 0;">
            <label for="sllc_member_unit_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Suite / Building / Apt / Unit</label>
            <input type="text" id="sllc_member_unit_1" placeholder="e.g. Suite 100, Apt 2C, Building B" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.]+" title="Alphanumeric symbols allowed." class="wizard-input-field">
          </div>
          <div class="wizard-input-group" style="margin: 0;">
            <label for="sllc_member_city_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">City <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sllc_member_city_1" required placeholder="Austin" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
          </div>
          <div class="wizard-input-group" style="margin: 0;">
            <label for="sllc_member_state_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">State <span style="color: #ef4444;">*</span></label>
            <select id="sllc_member_state_1" required class="wizard-input-field" style="font-weight: 600;">
              ${stateDropdownOptionsHtml}
            </select>
          </div>
          <div class="wizard-input-group" style="margin: 0;">
            <label for="sllc_member_zip_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Zip Code <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sllc_member_zip_1" required placeholder="78701" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
          </div>
        </div>
      </div>
      <button type="button" onclick="appendNewSeriesLlcMemberNode()" style="margin-top: 12px; background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: fit-content;">
        <i class="fa-solid fa-plus"></i> Add Additional Member
      </button>
    </div>

    <!-- SECTION 5: SERIES INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Initial Sub-Series Cells Registry</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_form_series_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you initially be forming any distinct series cells under this LLC? <span style="color: #ef4444;">*</span></label>
      <select id="sllc_form_series_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSeriesCellsWrapperVisibility(this.value)">
        <option value="no" selected>No, establish master umbrella structure only</option>
        <option value="yes">Yes, establish initial distinct series cells/cells registry</option>
      </select>
    </div>

    <!-- Hidden Conditional Container: Cell Dynamic Nodes -->
    <div id="sllc_cells_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
      <div id="sllc_cells_container" style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        <div class="member-record-card" id="sllc_cell_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box;">
          <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Initial Sub-Series Cell #1</span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px;">
            <div>
              <label for="sllc_cell_name_1" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Cell Legal Name Target</label>
              <input type="text" id="sllc_cell_name_1" placeholder="Series Cell Name (e.g. Series A Real Estate)" class="wizard-input-field">
            </div>
            <div>
              <label for="sllc_cell_desc_1" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--navy); margin-bottom: 4px;">Cell Functional Objective</label>
              <input type="text" id="sllc_cell_desc_1" placeholder="Asset / Operational Purpose Summary" class="wizard-input-field">
            </div>
          </div>
        </div>
      </div>
      <button type="button" onclick="appendNewSubSeriesCellNode()" style="background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: fit-content;">
        <i class="fa-solid fa-plus"></i> Add Additional Series Cell
      </button>
    </div>

    <!-- SECTION 6: TAX INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Tax Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for an Employer Identification Number (EIN)? <span style="color: #ef4444;">*</span></label>
      <select id="sllc_ein_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSeriesEinWorkflow(this.value)">
        <option value="no" selected>No, I already hold or will apply for EIN structures independently</option>
        <option value="yes">Yes, add Filings4u Master EIN Procurement Service — $75.00</option>
      </select>
    </div>
    <div id="sllc_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="sllc_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining an EIN <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sllc_ein_reason" placeholder="e.g. Opening an operational corporate bank account..." class="wizard-input-field">
    </div>
  `;
}




// FAMILY 1B: SERIES LLC REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildSeriesLlcPart3() {
  return `
    <!-- SECTION 6: COMPLIANCE AND LICENSES -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Compliance and Licenses</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_license_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you verified the necessary localized business licenses or permits? <span style="color: #ef4444;">*</span></label>
      <select id="sllc_license_check" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSeriesLicenseWorkflow(this.value)">
        <option value="yes" selected>Yes, I have verified my structural compliance tracks</option>
        <option value="no">No, I need help — Add Filings4u License &amp; Permit Audit Suite — $125.00</option>
      </select>
    </div>
    <div id="sllc_custom_license_wrapper" style="grid-column: span 2; display: flex; flex-direction: column; gap: 8px;">
      <label for="sllc_intended_licenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">List Intended Licenses / Permits to Apply For</label>
      <textarea id="sllc_intended_licenses" placeholder="Provide general targets: e.g. State Sales Tax License, Municipal Operating Permits..." rows="2" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>

    <!-- SECTION 7: DURATION OF OPERATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Duration of Operation</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Operational Lifespan Horizon <span style="color: #ef4444;">*</span></label>
      <select id="sllc_duration_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSeriesLlcDurationField(this.value)">
        <option value="ongoing" selected>Ongoing Operations (Perpetual corporate horizon)</option>
        <option value="project">Project-Based (Defined/temporary operational threshold)</option>
      </select>
    </div>
    <div id="sllc_duration_term_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="sllc_expiration_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Specify Expected Expiration / Dissolution Date <span style="color: #ef4444;">*</span></label>
      <input type="date" id="sllc_expiration_date" class="wizard-input-field" style="font-weight: 600;">
    </div>

    <!-- SECTION 8: ADDITIONAL PROVISIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Additional Provisions (Optional)</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sllc_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Conditions / Operating Clauses</label>
      <textarea id="sllc_provisions" placeholder="Detail any extra organizational parameters, series limitation statements, or specific distribution terms..." rows="3" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>
  `;
}

// 🔀 THE MASTER COMPILER STITCH LAYER
function buildSeriesLlcRegistrationFieldsLayoutHtml() {
  // Shared state dropdown map source string definition parameter
  const stateDropdownOptionsHtml = `
    <option value="" disabled selected>Select State...</option>
    <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option>
    <option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="FL">Florida</option>
    <option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option>
    <option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option>
    <option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option>
    <option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option>
    <option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option>
    <option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option>
    <option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option>
    <option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
  `;

  // Welds the three clean functional layers together perfectly with no syntax exceptions
  return buildSeriesLlcPart1() + 
         buildSeriesLlcPart2(stateDropdownOptionsHtml) + 
         buildSeriesLlcPart3();
}




// FAMILY 2: CORPORATE FORMATION LAYOUT MATRIX (PART 1 OF 2)
function buildCorporateFormationFieldsLayoutHtml() {
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Corporate Business Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="corp_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Corporation Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="corp_proposed_name" required placeholder="Example Enterprises Inc." class="wizard-input-field" onblur="validateCorpNameSuffix(this)">
      <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Must include "Inc.", "Incorporated", or "Corporation".</span>
    </div>
    <div class="wizard-input-group">
      <label for="corp_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Corporate Business Purpose <span style="color: #ef4444;">*</span></label>
      <input type="text" id="corp_business_purpose" required placeholder="Brief description of operations..." class="wizard-input-field">
    </div>
    
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="corp_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Select Registered Agent Provision <span style="color: #ef4444;">*</span></label>
      <select id="corp_ra_choice" required class="wizard-input-field" onchange="toggleRegisteredAgentConditionalFields(this.value)">
        <option value="" disabled selected>Choose...</option>
        <option value="filings4u">Utilize Filings4u Protected Agent Shield Service — $75.00 / Year</option>
        <option value="custom">Maintain External Independent Third-Party Registered Agent</option>
      </select>
    </div>
    
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Shareholder Registry</h3>
    </div>
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Shareholder?</strong> 
      A shareholder is an individual or entity that owns shares of a corporation's stock. They hold structural ownership privileges.
    </div>
    
    <div class="wizard-input-group" style="grid-column: span 2;">
      <div id="corp_shareholders_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
        <div class="member-record-card" id="shareholder_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box;">
          <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Shareholder #1 Records</span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
            <div class="wizard-input-group" style="grid-column: span 2;">
              <label for="shareholder_name_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Full Legal Name</label>
              <input type="text" id="shareholder_name_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="grid-column: span 2;">
              <label for="shareholder_street_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Street Address</label>
              <input type="text" id="shareholder_street_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group">
              <label for="shareholder_city_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">City</label>
              <input type="text" id="shareholder_city_1" required class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div>
                <label for="shareholder_state_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">State</label>
                <input type="text" id="shareholder_state_1" required maxlength="2" class="wizard-input-field">
              </div>
              <div>
                <label for="shareholder_zip_1" style="font-size:0.75rem; font-weight:700; color:var(--slate);">Zip</label>
                <input type="text" id="shareholder_zip_1" required class="wizard-input-field">
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onclick="appendNewCorporateShareholderNode()" style="margin-top: 12px; background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem;"><i class="fa-solid fa-plus"></i> Add Additional Shareholder</button>
    </div>
  ` + buildCorporateFormationFieldsLayoutHtmlPart2();
}


// FAMILY 2: CORPORATE FORMATION LAYOUT MATRIX (PART 2 OF 2)
function buildCorporateFormationFieldsLayoutHtmlPart2() {
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Stock &amp; Tax Status Elections</h3>
    </div>
    <div class="wizard-input-group">
      <label for="corp_shares_authorized" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Shares Authorized</label>
      <input type="number" id="corp_shares_authorized" required placeholder="10000" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="corp_shares_par_value" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Par Value Per Share</label>
      <input type="text" id="corp_shares_par_value" required placeholder="0.0001" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="corp_scorp_elect" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you wish to elect IRS S-Corporation status?</label>
      <select id="corp_scorp_elect" required class="wizard-input-field" onchange="toggleScorpElectionWorkflow(this.value)">
        <option value="no" selected>No, maintain standard C-Corporation structure</option>
        <option value="yes">Yes, elect IRS Subchapter S-Corporation tax status</option>
      </select>
    </div>
    <div id="corp_scorp_service_wrapper" style="grid-column: span 2; display: none; background: var(--light-bg); padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; flex-direction: column; gap: 14px; box-sizing: border-box;">
      <label for="corp_scorp_procure" style="font-weight: 700; font-size: 0.82rem; color: var(--navy);">Add IRS Form 2553 Filing Preparation Service? ($79.00)</label>
      <select id="corp_scorp_procure" class="wizard-input-field" onchange="toggleScorpFilingPricingHook(this.value)">
        <option value="no-decline">No, I will file Form 2553 independently</option>
        <option value="yes-buy">Yes, add Form 2553 Preparation — $79.00</option>
      </select>
    </div>
  `;
}

// FAMILY 2A: FOREIGN QUALIFICATION CERTIFICATE REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildForeignQualificationPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- INFORMATION OVERLAY BOX -->
        <div style="grid-column: span 2; background: #f8fafc; border-left: 4px solid var(--primary); padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 16px; box-sizing: border-box;">
            <h4 style="color: var(--navy); margin: 0 0 6px 0; font-size: 0.95rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-circle-info" style="color: var(--primary);"></i> Understanding Foreign Qualification
            </h4>
            <p style="color: var(--slate); font-size: 0.825rem; margin: 0; line-height: 1.5;">
                A Foreign Qualification grants an existing business entity explicit state authorization to conduct continuous, lawful operations within a new jurisdiction outside its original state of formation. This process maintains your home-state standing while establishing dynamic local registries, legal protections, and statutory compliance channels within the expansion state.
            </p>
        </div>

        <!-- SECTION 1: BUSINESS INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 8px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fq_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Foreign Entity Name <span style="color: #ef4444;">*</span></label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fq_current_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current Legal Entity Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fq_current_name" required placeholder="Exact name in home state" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            Entity Type <span style="color: #ef4444;">*</span></label>
            
                <option value="" disabled selected>Select Entity Type...</option>
                <option value="llc">Limited Liability Company (LLC)</option>
                <option value="corporation">Corporation</option>
                <option value="partnership">Partnership</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fq_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Office Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fq_principal_street" required placeholder="Street Name and Number" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fq_principal')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fq_principal_unit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Suite / Building / Apt / Unit</label>
            <input type="text" id="fq_principal_unit" placeholder="e.g. Suite 100, Apt 2C, Building B" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.]+" title="Alphanumeric symbols allowed." class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="fq_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fq_principal_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
                </div>
                <div>
                    <label for="fq_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="fq_principal_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="fq_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fq_principal_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fq_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
            <select id="fq_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Home State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fq_date_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date of Formation <span style="color: #ef4444;">*</span></label>
            <input type="date" id="fq_date_of_formation" required class="wizard-input-field">
        </div>

        <!-- SECTION 2: CONTACT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contact Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fq_contact_first_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">First Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fq_contact_first_name" required placeholder="First Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fq_contact_last_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Last Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fq_contact_last_name" required placeholder="Last Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fq_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="fq_contact_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fq_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="fq_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>
    `;
}

// FAMILY 2A: FOREIGN QUALIFICATION CERTIFICATE REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildForeignQualificationPart2(stateDropdownOptionsHtml = "") {
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
        </div>

        <!-- Hidden Conditional Container: Independent Registered Agent Data -->
        <div id="fq_agent_manual_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Custom Statutory Agent Record Entry</span>
                
                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="fq_agent_name" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Agent Full Name / Corporate Entity <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fq_agent_name" placeholder="Full Registered Agent Name" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="fq_agent_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Registered Street Address (No P.O. Boxes) <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fq_agent_street" placeholder="Street Name and Number" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fq_agent')">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="fq_agent_unit" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Suite / Apt / Unit</label>
                    <input type="text" id="fq_agent_unit" placeholder="e.g. Suite 500" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="fq_agent_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fq_agent_city" placeholder="City Name" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="fq_agent_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">State <span style="color: #ef4444;">*</span></label>
                    <select id="fq_agent_state" class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="fq_agent_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fq_agent_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
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
        </div>
    `;
}


// FAMILY 2A: FOREIGN QUALIFICATION CERTIFICATE REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildForeignQualificationPart3(stateDropdownOptionsHtml = "") {
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
        </div>

        <!-- Dynamic Group A: User selected YES to licensing verification -->
        <div id="fq_license_details_wrapper" style="grid-column: span 2; display: none;">
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="fq_intended_licenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please list any licenses or permits you intend to apply for:</label>
                <input type="text" id="fq_intended_licenses" placeholder="List intended operating permits, municipal tax nodes, or occupational licenses..." class="wizard-input-field">
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
        </div>

        <div id="fq_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
            <label for="fq_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining an EIN <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fq_ein_reason" placeholder="e.g. Opening an operational corporate bank account..." class="wizard-input-field">
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

// ... top of wizard-layout.js contains Part 1 and Part 2 ...

// FAMILY 2A: FOREIGN QUALIFICATION CERTIFICATE REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildForeignQualificationPart3(stateDropdownOptionsHtml = "") {
    return `...`;
}

// 📦 MASTER ASSEMBLY HOOK (Put this right here at the bottom)
function buildForeignQualificationForm(stateDropdownOptionsHtml = "") {
    return buildForeignQualificationPart1(stateDropdownOptionsHtml) + 
           buildForeignQualificationPart2(stateDropdownOptionsHtml) + 
           buildForeignQualificationPart3(stateDropdownOptionsHtml);
}


// FAMILY 2B: NONPROFIT ORGANIZATION REGISTRATION LAYOUT MATRIX (PART 1 OF 2)
function buildNonprofitOrganizationFieldsLayoutHtml() {
  return `
    <!-- SECTION 1: ORGANIZATION INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Organization Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="np_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Nonprofit Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_proposed_name" required placeholder="Example Foundation Inc." class="wizard-input-field">
      <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Ensure chosen name complies with state nonprofit registry standards.</span>
    </div>
    <div class="wizard-input-group">
      <label for="np_mission_statement" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mission Statement <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_mission_statement" required placeholder="Brief description of mission and charitable objectives..." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="np_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Location Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_principal_street" required placeholder="123 Community Way" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="np_principal_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_principal_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="np_principal_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <input type="text" id="np_principal_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
      </div>
      <div>
        <label for="np_principal_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="np_principal_zip" required placeholder="78701" class="wizard-input-field">
      </div>
    </div>

    <!-- SECTION 2: CONTACT INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Primary Contact Liaison</h3>
    </div>
    <div class="wizard-input-group">
      <label for="np_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Liaison Full Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_contact_name" required placeholder="Jane Doe" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="np_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Liaison Phone Number <span style="color: #ef4444;">*</span></label>
      <input type="tel" id="np_contact_phone" required placeholder="(512) 555-0144" style="font-family: monospace;" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="np_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Liaison Email Address <span style="color: #ef4444;">*</span></label>
      <input type="email" id="np_contact_email" required placeholder="liaison@nonprofit.org" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="np_contact_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Liaison Mailing Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_contact_street" required placeholder="456 Officer Ave" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="np_contact_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_contact_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="np_contact_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <input type="text" id="np_contact_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
      </div>
      <div>
        <label for="np_contact_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="np_contact_zip" required placeholder="78701" class="wizard-input-field">
      </div>
    </div>
  ` + buildNonprofitOrganizationFieldsLayoutHtmlPart2();
}

// FAMILY 2B: NONPROFIT ORGANIZATION REGISTRATION LAYOUT MATRIX (PART 2 OF 2)
function buildNonprofitOrganizationFieldsLayoutHtmlPart2() {
  return `
    <!-- SECTION 3: BOARD OF DIRECTORS INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Board of Directors Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <div id="np_board_members_container" style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
        
        <!-- Core Member 1 (Static) -->
        <div class="member-record-card" style="background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box;">
          <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Board Member #1 (Required Primary Officer)</span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px;">
            <div>
              <label for="np_board_name_1" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_name_1" required placeholder="Full Legal Name" class="wizard-input-field">
            </div>
            <div>
              <label for="np_board_role_1" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Position <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_role_1" required placeholder="Position (e.g., President / Chair)" class="wizard-input-field">
            </div>
            <div style="grid-column: span 2;">
              <label for="np_board_contact_1" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Contact Details <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_contact_1" required placeholder="Contact Details (Phone / Email)" class="wizard-input-field">
            </div>
          </div>
        </div>

        <!-- Core Member 2 (Static) -->
        <div class="member-record-card" style="background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box;">
          <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Board Member #2 (Required Secretary)</span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px;">
            <div>
              <label for="np_board_name_2" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_name_2" required placeholder="Full Legal Name" class="wizard-input-field">
            </div>
            <div>
              <label for="np_board_role_2" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Position <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_role_2" required placeholder="Position (e.g., Secretary)" class="wizard-input-field">
            </div>
            <div style="grid-column: span 2;">
              <label for="np_board_contact_2" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Contact Details <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_contact_2" required placeholder="Contact Details (Phone / Email)" class="wizard-input-field">
            </div>
          </div>
        </div>

        <!-- Core Member 3 (Static) -->
        <div class="member-record-card" style="background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box;">
          <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Board Member #3 (Required Treasurer)</span>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 10px;">
            <div>
              <label for="np_board_name_3" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_name_3" required placeholder="Full Legal Name" class="wizard-input-field">
            </div>
            <div>
              <label for="np_board_role_3" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Position <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_role_3" required placeholder="Position (e.g., Treasurer)" class="wizard-input-field">
            </div>
            <div style="grid-column: span 2;">
              <label for="np_board_contact_3" style="display: block; font-weight: 700; font-size: 0.75rem; color: var(--navy); margin-bottom: 4px;">Contact Details <span style="color: #ef4444;">*</span></label>
              <input type="text" id="np_board_contact_3" required placeholder="Contact Details (Phone / Email)" class="wizard-input-field">
            </div>
          </div>
        </div>
        
      </div>
    </div>
  `;
}


 // FAMILY 2B: NONPROFIT ORGANIZATION REGISTRATION LAYOUT MATRIX (PART 2 OF 2)
function buildNonprofitOrganizationFieldsLayoutHtmlPart2() {
  return `
    <!-- SECTION 4: ORGANIZATION STRUCTURE (IRC Section Types Selection) -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Organization Structure</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="np_irc_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">IRC Section Tax-Exempt Status Designation <span style="color: #ef4444;">*</span></label>
      <select id="np_irc_type" required class="wizard-input-field" style="font-weight: 600;">
        <option value="" disabled selected>Select IRC Exemption Classification...</option>
        <option value="501c3">501(c)(3) Charitable, Religious, Educational, Scientific Organizations</option>
        <option value="501c1">501(c)(1) Corporations Organized Under Act of Congress</option>
        <option value="501c2">501(c)(2) Title Holding Corporations for Exempt Organizations</option>
        <option value="501c4">501(c)(4) Civic Leagues and Social Welfare Organizations</option>
        <option value="501c5">501(c)(5) Labor, Agricultural and Horticultural Organizations</option>
        <option value="501c6">501(c)(6) Business Leagues, Chambers of Commerce, etc.</option>
        <option value="501c7">501(c)(7) Social and Recreation Clubs</option>
        <option value="501c8">501(c)(8) Fraternal Beneficiary Societies and Associations</option>
        <option value="501c9">501(c)(9) Voluntary Employees' Beneficiary Associations</option>
        <option value="501c10">501(c)(10) Domestic Fraternal Societies and Associations</option>
        <option value="501c11">501(c)(11) Teachers' Retirement Fund Associations</option>
        <option value="501c12">501(c)(12) Benevolent Life Insurance &amp; Mutual Irrigation Companies</option>
        <option value="501c13">501(c)(13) Cemetery Companies and Burial Corporations</option>
        <option value="501c14">501(c)(14) State Chartered Credit Unions &amp; Mutual Reserve Funds</option>
        <option value="501c15">501(c)(15) Mutual Insurance Companies or Associations</option>
        <option value="501c16">501(c)(16) Cooperative Organizations to Finance Crop Operations</option>
        <option value="501c17">501(c)(17) Supplemental Unemployment Benefit Trusts</option>
        <option value="501c18">501(c)(18) Employee Funded Pension Trusts (Pre-1959)</option>
        <option value="501c19">501(c)(19) Veterans' Organizations and Auxiliaries</option>
        <option value="501c21">501(c)(21) Black Lung Benefit Trusts</option>
        <option value="501c22">501(c)(22) Withdrawal Liability Payment Funds</option>
        <option value="501c25">501(c)(25) Title Holding Corporations/Trusts with Multiple Parents</option>
        <option value="501c26">501(c)(26) State-Sponsored High-Risk Health Coverage Organizations</option>
        <option value="501c27">501(c)(27) State-Sponsored Workers' Comp Reinsurance Units</option>
        <option value="501c28">501(c)(28) National Railroad Retirement Investment Trust</option>
        <option value="501c29">501(c)(29) Qualified Nonprofit Health Insurance Issuers</option>
        <option value="501d">501(d) Religious and Apostolic Associations</option>
        <option value="501e">501(e) Cooperative Hospital Service Organizations</option>
        <option value="501f">501(f) Cooperative Service Organizations of Educational Units</option>
        <option value="501k">501(k) Child Care Organizations</option>
        <option value="521a">521(a) Farmers' Cooperative Associations</option>
      </select>
    </div>

    <!-- SECTION 5: TAX INFORMATION (EIN PROCUREMENT) -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Tax Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="np_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for an Employer Identification Number (EIN)? <span style="color: #ef4444;">*</span></label>
      <select id="np_ein_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleNonprofitEinReasonField(this.value)">
        <option value="no" selected>No, our organization already possesses an active EIN reference</option>
        <option value="yes">Yes, I want to add Filings4u EIN Procurement Service — $79.00</option>
      </select>
    </div>
    <div id="np_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="np_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining an EIN <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_ein_reason" placeholder="e.g., Opening a dedicated nonprofit bank account, hiring operational employees..." class="wizard-input-field">
    </div>

    <!-- SECTION 6: COMPLIANCE AND LICENSES -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Compliance and Licenses</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="np_license_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you checked for necessary business licenses or permits? <span style="color: #ef4444;">*</span></label>
      <select id="np_license_check" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleNonprofitLicenseWorkflow(this.value)">
        <option value="yes" selected>Yes, I have verified my structural requirements</option>
        <option value="no">No, I need assistance checking for required licenses/permits — $79.00</option>
      </select>
    </div>

    <!-- SECTION 7: FUNDING AND BUDGET -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Funding and Budget</h3>
    </div>
    <div class="wizard-input-group">
      <label for="np_funding_sources" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Initial Funding Sources <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_funding_sources" required placeholder="e.g., Public donations, grants, corporate backing" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="np_annual_budget" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Annual Budget Estimate (Year 1) <span style="color: #ef4444;">*</span></label>
      <input type="text" id="np_annual_budget" required placeholder="e.g., $50,000" style="font-family: monospace;" class="wizard-input-field">
    </div>

    <!-- SECTION 8: DURATION OF OPERATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Duration of Operation</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="np_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Operational Lifespan Horizon <span style="color: #ef4444;">*</span></label>
      <select id="np_duration_choice" required class="wizard-input-field" style="font-weight: 600;">
        <option value="ongoing" selected>Ongoing Operations (Perpetual corporate horizon existence status)</option>
        <option value="project">Project-Based (Defined/temporary operational threshold)</option>
      </select>
    </div>

    <!-- SECTION 9: ADDITIONAL PROVISIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">9. Additional Provisions (Optional)</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="np_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Conditions / Clauses</label>
      <textarea id="np_provisions" placeholder="Detail any extra organizational parameters, dissolution clauses, or specific asset distribution terms..." rows="3" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>
  `;
}




// FAMILY 3: INFORMAL ENTITIES (SOLE PROPRIETORSHIPS / DBAS) - PART 1
function buildInformalEntityFieldsLayoutHtml() {
  return `
    <!-- SECTION 1: BUSINESS INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="sp_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Business Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_proposed_name" required placeholder="Your Legal Name or Fictitious Entity Name" class="wizard-input-field">
      <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Be sure to check for name availability in your state.</span>
    </div>
    <div class="wizard-input-group">
      <label for="sp_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Purpose <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_business_purpose" required placeholder="Brief description of what the business will do..." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sp_bus_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Location Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_bus_street" required placeholder="123 Main St" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'sp_bus')">
    </div>
    <div class="wizard-input-group">
      <label for="sp_bus_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_bus_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="sp_bus_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <input type="text" id="sp_bus_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
      </div>
      <div>
        <label for="sp_bus_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="sp_bus_zip" required placeholder="78701" class="wizard-input-field">
      </div>
    </div>

    <!-- SECTION 2: OWNER INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Owner Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="sp_owner_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Full Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_owner_name" required placeholder="Full Legal Name" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="sp_owner_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Contact Number <span style="color: #ef4444;">*</span></label>
      <input type="tel" id="sp_owner_phone" required placeholder="(512) 555-0199" style="font-family: monospace;" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sp_owner_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Email Address <span style="color: #ef4444;">*</span></label>
      <input type="email" id="sp_owner_email" required placeholder="name@domain.com" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sp_owner_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Residential Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_owner_street" required placeholder="456 Residential Ave" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'sp_owner')">
    </div>
    <div class="wizard-input-group">
      <label for="sp_owner_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_owner_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="sp_owner_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <input type="text" id="sp_owner_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
      </div>
      <div>
        <label for="sp_owner_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="sp_owner_zip" required placeholder="78701" class="wizard-input-field">
      </div>
    </div>

    <!-- SECTION 3: BUSINESS STRUCTURE (DBA CONFIGURATOR) -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Business Structure</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sp_dba_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be using a fictitious name (DBA)? <span style="color: #ef4444;">*</span></label>
      <select id="sp_dba_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSolePropDbaField(this.value)">
        <option value="no" selected>No, operating under my own legal name</option>
        <option value="yes">Yes, operating under a Fictitious/DBA trade name</option>
      </select>
    </div>
    <div id="sp_dba_name_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="sp_dba_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Specify Fictitious / DBA Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_dba_name" placeholder="e.g. Apex Contracting Services" class="wizard-input-field">
    </div>
  ` + (typeof buildSolePropPart2FieldsLayoutHtml === "function" ? buildSolePropPart2FieldsLayoutHtml() : "");
}

 // FAMILY 3: INFORMAL ENTITIES (SOLE PROPRIETORSHIPS / DBAS) - PART 2
function buildSolePropPart2FieldsLayoutHtml() {
  return `
    <!-- SECTION 4: TAX INFORMATION (EIN CONFIGURATOR) -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Tax Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sp_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for an Employer Identification Number (EIN)? <span style="color: #ef4444;">*</span></label>
      <select id="sp_ein_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSolePropEinReasonField(this.value)">
        <option value="no" selected>No, I do not require a Federal EIN at this time</option>
        <option value="yes">Yes, I want to procure an EIN record</option>
      </select>
    </div>
    <div id="sp_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="sp_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining an EIN <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_ein_reason" placeholder="e.g. Hiring employees, opening a business bank account..." class="wizard-input-field">
    </div>

    <!-- SECTION 5: ADDITIONAL PROVISIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Additional Provisions (Optional)</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sp_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Sole Proprietorship Special Clauses</label>
      <textarea id="sp_provisions" placeholder="Detail any specific business terms, partnership understandings, or special conditions..." rows="3" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>

    <!-- SECTION 6: DURATION OF BUSINESS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Duration of Business</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sp_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will this be a temporary or ongoing business? <span style="color: #ef4444;">*</span></label>
      <select id="sp_duration_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSolePropDurationField(this.value)">
        <option value="perpetual" selected>Perpetual (Ongoing baseline existence status)</option>
        <option value="temporary">Temporary / Specified Term</option>
      </select>
    </div>
    <div id="sp_duration_term_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="sp_duration_term" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Specify Expected Project/Business Duration <span style="color: #ef4444;">*</span></label>
      <input type="text" id="sp_duration_term" placeholder="e.g. 6 Months, Project Ends Dec 2026..." class="wizard-input-field">
    </div>

    <!-- SECTION 7: COMPLIANCE AND LICENSES -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Compliance and Licenses</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="sp_license_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you verified the necessary localized business licenses or permits? <span style="color: #ef4444;">*</span></label>
      <select id="sp_license_check" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSolePropLicenseWorkflow(this.value)">
        <option value="" disabled selected>Choose an option...</option>
        <option value="yes">Yes, I have verified my structural requirements</option>
        <option value="no">No, I need help — Add Filings4u Compliance Research Suite — $79.00</option>
      </select>
    </div>
    <div id="sp_custom_license_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="sp_intended_licenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">List Intentional Licenses / Permits to Apply For</label>
      <textarea id="sp_intended_licenses" placeholder="Provide general targets: e.g. Municipal Sales Tax Permit, Local Health Department Authorization..." rows="2" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>
  `;
}

// FAMILY 3A: LLC REINSTATEMENT REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildLlcReinstatementPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- INFORMATION OVERLAY BOX -->
        <div style="grid-column: span 2; background: #f8fafc; border-left: 4px solid var(--primary); padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 16px; box-sizing: border-box;">
            <h4 style="color: var(--navy); margin: 0 0 6px 0; font-size: 0.95rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-building-shield" style="color: var(--primary);"></i> Understanding LLC Reinstatement
            </h4>
            <p style="color: var(--slate); font-size: 0.825rem; margin: 0 0 8px 0; line-height: 1.5;">
                An LLC Reinstatement is the formal legal process required to restore a limited liability company back to active, compliant, and good standing status after it has been administratively suspended, forfeited, or dissolved by the state registry. 
            </p>
            <p style="color: #b45309; font-size: 0.825rem; margin: 0; line-height: 1.5; font-weight: 700;">
                ⚠️ CRITICAL MANDATE: All outstanding state fees, franchise taxes, penalties, and unfiled annual report fees must be paid in full before the state or government will reinstate your business entity.
            </p>
        </div>

        <!-- SECTION 1: LLC INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 8px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. LLC Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="rein_original_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Original LLC Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="rein_original_name" required placeholder="The name of the LLC as it appears in the state records" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="rein_current_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Current LLC Name (If Applicable)</label>
            <input type="text" id="rein_current_name" placeholder="Enter name if changed after deactivation" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="rein_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
            <select id="rein_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="rein_llc_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">LLC ID Number (If Known)</label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Office Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="rein_principal_street" required placeholder="Street Name and Number, Suite, Unit" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'rein_principal')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="rein_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="rein_principal_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
                </div>
                <div>
                    <label for="rein_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="rein_principal_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="rein_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="rein_principal_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 2: CONTACT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contact Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Contact Person's Full Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="rein_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_contact_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="rein_contact_street" required placeholder="Street Address, Suite, Apt" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'rein_contact')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="rein_contact_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="rein_contact_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
                </div>
                <div>
                    <label for="rein_contact_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="rein_contact_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="rein_contact_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="rein_contact_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="rein_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="rein_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="rein_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="rein_contact_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>
    `;
}


// FAMILY 3A: LLC REINSTATEMENT REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildLlcReinstatementPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: REASON FOR REINSTATEMENT -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Reason for Reinstatement</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_deactivation_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Why has your entity been deactivated or dissolved? <span style="color: #ef4444;">*</span></label>
            <select id="rein_deactivation_reason" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Reason...</option>
                <option value="annual-reports">Failure to file periodic annual reports / statements</option>
                <option value="unpaid-taxes">Unpaid franchise taxes or delinquency indicators</option>
                <option value="registered-agent">Failure to maintain an active registered agent</option>
                <option value="voluntary">Voluntary dissolution error adjustment</option>
                <option value="other">Other statutory non-compliance issue</option>
            </select>
        </div>

        <!-- SECTION 4: OUTSTANDING FEES AUDIT -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Fees & Penalties Verification</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_fees_paid_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have all outstanding fees and penalties been paid? <span style="color: #ef4444;">*</span></label>
            <select id="rein_fees_paid_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleReinstatementFeesNoticeVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, all standard balances have been completely cleared</option>
                <option value="no">No, there are outstanding balances or state collections pending</option>
            </select>
        </div>

        <!-- Conditional Container: Balance Recovery Notice & Compliance Add-on Selection Linkages -->
        <div id="rein_fees_unpaid_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #fffaf0; border-left: 4px solid #f59e0b; padding: 14px; border-radius: 0 8px 8px 0; box-sizing: border-box;">
                <p style="color: #b45309; font-size: 0.825rem; margin: 0; font-weight: 600; line-height: 1.5;">
                    ⚠️ All outstanding fees must be paid before the state will reinstate your formation. Filings4u will send you a notification inside your dashboard if there is a balance on your account.
                </p>
            </div>
            
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="rein_add_compliance_audit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Would you like to use Filings4u Compliance Service for $99 + State Fees to check if all fees have been paid? <span style="color: #ef4444;">*</span></label>
                <select id="rein_add_compliance_audit" class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
                    <option value="no" selected>No, I will review outstanding agency ledger lines independently</option>
                    <option value="yes">Yes, add Filings4u Compliance Balance Check & State Audit Service — $99.00</option>
                </select>
            </div>
        </div>

        <!-- SECTION 5: COMPLIANCE INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Compliance Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_rectified_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you rectified all compliance issues that led to the suspension/dissolution? <span style="color: #ef4444;">*</span></label>
            <select id="rein_rectified_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleReinstatementIssuesVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, all historical compliance issues have been fully resolved</option>
                <option value="no">No, certain administrative compliance discrepancies remain active</option>
            </select>
        </div>

        <div id="rein_pending_issues_wrapper" style="grid-column: span 2; display: none;">
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="rein_pending_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">If no, please detail what remains to be addressed: <span style="color: #ef4444;">*</span></label>
                <input type="text" id="rein_pending_details" placeholder="Describe unfiled reports, outstanding tax adjustments, or remaining items..." class="wizard-input-field">
            </div>
        </div>
    `;
}

// FAMILY 3A: LLC REINSTATEMENT REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildLlcReinstatementPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: TAX INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Tax Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for a new Employer Identification Number (EIN) after reinstatement? <span style="color: #ef4444;">*</span></label>
            <select id="rein_ein_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleReinstatementEinWorkflow(this.value)">
                <option value="no" selected>No, I already hold or will apply for EIN structures independently</option>
                <option value="yes">Yes, add Filings4u Master EIN Procurement Service — $75.00</option>
            </select>
        </div>

        <div id="rein_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
            <label for="rein_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining a new EIN (if applicable) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="rein_ein_reason" placeholder="e.g. Corporate operational baseline reconstruction request..." class="wizard-input-field">
        </div>

        <!-- SECTION 7: DURATION OF REINSTATEMENT -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Duration of Reinstatement</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_duration_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will this reinstatement be for a specific period or ongoing? <span style="color: #ef4444;">*</span></label>
            <select id="rein_duration_type" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleReinstatementDurationFieldVisibility(this.value)">
                <option value="ongoing" selected>Ongoing (Indefinite corporate lifecycle post-restoration)</option>
                <option value="specific">Specific Period (Defined timeline constraint structures)</option>
            </select>
        </div>

        <div id="rein_duration_date_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
            <label for="rein_duration_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Target Dissolution / Expiration Date <span style="color: #ef4444;">*</span></label>
            <input type="date" id="rein_duration_date" class="wizard-input-field">
        </div>

        <!-- SECTION 8: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Additional Provisions</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="rein_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Provisions</label>
            <textarea id="rein_provisions" placeholder="Detail any additional terms, specific clauses, or agreements relevant to your LLC reinstatement..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER LLC REINSTATEMENT ASSEMBLY HOOK
function buildLlcReinstatementForm(stateDropdownOptionsHtml = "") {
    return buildLlcReinstatementPart1(stateDropdownOptionsHtml) +
           buildLlcReinstatementPart2(stateDropdownOptionsHtml) +
           buildLlcReinstatementPart3(stateDropdownOptionsHtml);
}



// FAMILY 3B: DBA / FICTITIOUS ASSUMED NAME REGISTRATION LAYOUT
function buildDbaRegistrationFieldsLayoutHtml() {
  return `
    <!-- SECTION 1: BUSINESS INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="dba_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed DBA Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_proposed_name" required placeholder="Fictitious trade name under which business will operate" class="wizard-input-field">
      <span style="font-size: 0.7rem; color: var(--slate); font-weight: 500; padding-left: 2px;">Ensure your chosen trade name complies with state regulations.</span>
    </div>
    <div class="wizard-input-group">
      <label for="dba_business_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Purpose <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_business_purpose" required placeholder="Brief description of what the business will do..." class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_bus_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Location Street Address <span style="color: #ef4444;">*</span></label>
      <!-- FIXED: Stripped duplicate text entry field node layout -->
      <input type="text" id="dba_bus_street" placeholder="123 Main St" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'dba_bus')">
    </div>
    <div class="wizard-input-group">
      <label for="dba_bus_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_bus_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="dba_bus_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <input type="text" id="dba_bus_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
      </div>
      <div>
        <label for="dba_bus_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="dba_bus_zip" required placeholder="78701" class="wizard-input-field">
      </div>
    </div>

    <!-- SECTION 2: OWNER INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Owner Information</h3>
    </div>
    <div class="wizard-input-group">
      <label for="dba_owner_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Full Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_owner_name" required placeholder="Full Legal Name" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="dba_owner_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Contact Number <span style="color: #ef4444;">*</span></label>
      <input type="tel" id="dba_owner_phone" required placeholder="(512) 555-0199" style="font-family: monospace;" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_owner_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Email Address <span style="color: #ef4444;">*</span></label>
      <input type="email" id="dba_owner_email" required placeholder="owner@domain.com" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_owner_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's Residential Street Address <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_owner_street" required placeholder="789 Residential Blvd" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="dba_owner_city" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner's City <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_owner_city" required placeholder="Austin" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="dba_owner_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State <span style="color: #ef4444;">*</span></label>
        <input type="text" id="dba_owner_state" required placeholder="TX" maxlength="2" class="wizard-input-field">
      </div>
      <div>
        <label for="dba_owner_zip" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Zip Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="dba_owner_zip" required placeholder="78701" class="wizard-input-field">
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
      <select id="dba_collision_check" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDbaPermissionWorkflow(this.value)">
        <option value="no" selected>No, name is completely available / original</option>
        <option value="yes">Yes, name is registered by another entity</option>
      </select>
    </div>

    <!-- Conditional Wrapper: Written Consent Checker vs. filings4u Name Search -->
    <div id="dba_permission_matrix_wrapper" style="grid-column: span 2; background: var(--light-bg); padding: 20px; border-radius: 8px; border: 1px dashed #cbd5e1; box-sizing: border-box; display: none; flex-direction: column; gap: 14px;">
      <div class="wizard-input-group" style="margin: 0;">
        <label for="dba_has_consent" style="font-weight: 700; font-size: 0.82rem; color: var(--navy);">Have you obtained written permission from the original entity? <span style="color: #ef4444;">*</span></label>
        <select id="dba_has_consent" class="wizard-input-field" style="background: #ffffff; font-weight: 600;" onchange="toggleDbaSearchProcurement(this.value)">
          <option value="yes" selected>Yes, I have executed written permission files ready to upload</option>
          <option value="no-buy">No, add Filings4u Comprehensive Name Availability Search — $79.00</option>
        </select>
      </div>
    </div>
  `;
}

// FAMILY 3B: DBA / FICTITIOUS ASSUMED NAME REGISTRATION LAYOUT - PART 2
function buildDbaRegistrationFieldsLayoutHtmlPart2() {
  return `
    <!-- SECTION 5: TAX INFORMATION -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Tax Information</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_ein_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be applying for an Employer Identification Number (EIN)? <span style="color: #ef4444;">*</span></label>
      <select id="dba_ein_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDbaEinReasonField(this.value)">
        <option value="no" selected>No, I do not require a Federal EIN at this time</option>
        <option value="yes">Yes, I want to procure an EIN record</option>
      </select>
    </div>
    <div id="dba_ein_reason_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="dba_ein_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Reason for obtaining an EIN <span style="color: #ef4444;">*</span></label>
      <input type="text" id="dba_ein_reason" placeholder="e.g., Hiring employees, opening a business banking line..." class="wizard-input-field">
    </div>

    <!-- SECTION 6: COMPLIANCE AND LICENSES -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Compliance and Licenses</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_license_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you verified the necessary localized business licenses or permits? <span style="color: #ef4444;">*</span></label>
      <select id="dba_license_check" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDbaLicenseWorkflow(this.value)">
        <option value="" disabled selected>Choose an option...</option>
        <option value="yes">Yes, I have verified my structural requirements</option>
        <option value="no">No, I need help — Add Filings4u Compliance Research Suite — $79.00</option>
      </select>
    </div>
    <div id="dba_custom_license_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="dba_intended_licenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">List Intentional Licenses / Permits to Apply For</label>
      <textarea id="dba_intended_licenses" placeholder="Provide general targets: e.g. Municipal Sales Tax Permit, Local Health Department Authorization..." rows="2" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>

    <!-- SECTION 7: ADDITIONAL PROVISIONS -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Additional Provisions (Optional)</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">DBA Special Clauses or Understandings</label>
      <textarea id="dba_provisions" placeholder="Detail any extra terms or agreements relevant to your DBA registration..." rows="3" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
    </div>

    <!-- SECTION 8: DURATION OF DBA -->
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Duration of DBA</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="dba_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will this DBA be temporary or ongoing? <span style="color: #ef4444;">*</span></label>
      <select id="dba_duration_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDbaDurationField(this.value)">
        <option value="perpetual" selected>Perpetual (Ongoing baseline trade presence status)</option>
        <option value="temporary">Temporary / Specified Term</option>
      </select>
    </div>
    <div id="dba_duration_term_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 8px;">
      <label for="dba_expiration_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Specify Expiration Date <span style="color: #ef4444;">*</span></label>
      <input type="date" id="dba_expiration_date" class="wizard-input-field" style="font-weight: 600;">
    </div>
  `;
}

// UPDATE ARCHIVE COMPILER BINDING STEP
// Update the trailing area of buildDbaRegistrationFieldsLayoutHtml() in your file to chain like this:
// return buildDbaRegistrationFieldsLayoutHtmlPart1() + buildDbaRegistrationFieldsLayoutHtmlPart2();

// FAMILY 4A: TRADEMARK FILING APPLICATION LAYOUT MATRIX (PART 1 OF 3)
function buildTrademarkFilingPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS A TRADEMARK? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Trademark?</strong>
            A Trademark is a specialized legal protection issued by the USPTO that secures exclusive rights over your company's brand name, logos, slogans, or distinctive identifiers, legally preventing competitors from exploiting similar assets or causing market confusion.
        </div>

        <!-- SECTION 1: APPLICANT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Applicant Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="tm_applicant_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant's Full Name or Company Name <span style="color: #ef4444;">*</span></label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="tm_applicant_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant's Mailing Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="tm_applicant_street" required placeholder="Street Name and Number, Suite, Unit" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'tm_applicant')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="tm_applicant_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="tm_applicant_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
                </div>
                <div>
                    <label for="tm_applicant_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="tm_applicant_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="tm_applicant_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="tm_applicant_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="tm_applicant_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant's Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="tm_applicant_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="tm_applicant_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant's Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="tm_applicant_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>

        <!-- SECTION 2: TRADEMARK INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Trademark Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="tm_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Trademark Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="tm_proposed_name" required placeholder="The brand name or text phrase you wish to register" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="tm_type_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Trademark Type <span style="color: #ef4444;">*</span></label>
            <select id="tm_type_choice" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Type...</option>
                <option value="word-mark">Word mark (Standard text styling and letters only)</option>
                <option value="design-mark">Design mark (Stylized graphic icon illustration or standalone logo)</option>
                <option value="combined-mark">Combined mark (Graphic logo elements coupled with stylized brand text)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="tm_goods_services_desc" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Description of Goods/Services <span style="color: #ef4444;">*</span></label>
            <textarea id="tm_goods_services_desc" required placeholder="Briefly describe the commercial products, retail items, or commercial services associated with this trademark..." class="wizard-input-field" style="width: 100%; min-height: 70px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}


// FAMILY 4A: TRADEMARK FILING APPLICATION LAYOUT MATRIX (PART 2 OF 3)
function buildTrademarkFilingPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: FILING BASIS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Filing Basis</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="tm_filing_basis" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please select the filing basis <span style="color: #ef4444;">*</span></label>
            <select id="tm_filing_basis" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleTrademarkSpecimenWorkflow(this.value)">
                <option value="" disabled selected>Select Filing Basis...</option>
                <option value="use-in-commerce">Use in Commerce (The trademark is already being actively used in public trade/sales)</option>
                <option value="intent-to-use">Intent to Use (The trademark is not currently in use but you plan to use it commercially soon)</option>
            </select>
        </div>

        <!-- SECTION 4: SPECIMEN INFORMATION (CONDITIONAL) -->
        <div id="tm_specimen_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 8px;">
                <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Specimen Information</h3>
            </div>
            
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="tm_specimen_desc" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Description of the Specimen <span style="color: #ef4444;">*</span></label>
                <input type="text" id="tm_specimen_desc" placeholder="e.g. Logo printed on product retail tag, website checkout snapshot, branded packaging..." class="wizard-input-field">
            </div>

            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="tm_specimen_file" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Upload a copy of the specimen showing the trademark as used in commerce <span style="color: #ef4444;">*</span></label>
                <input type="file" id="tm_specimen_file" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
            </div>
        </div>

        <!-- SECTION 5: TRADEMARK SEARCH -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Trademark Search</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="tm_search_conducted" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you conducted a trademark search to check for similar existing trademarks? <span style="color: #ef4444;">*</span></label>
            <select id="tm_search_conducted" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleTrademarkSearchAssistanceVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, we have run comprehensive clearance check reviews</option>
                <option value="no">No, we have not completely cross-referenced conflicting entries</option>
            </select>
        </div>

        <!-- Dynamic Group A: User selected YES to search results -->
        <div id="tm_search_details_wrapper" style="grid-column: span 2; display: none;">
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="tm_search_results_data" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please provide details of the search results: <span style="color: #ef4444;">*</span></label>
                <input type="text" id="tm_search_results_data" placeholder="Detail any findings, matching TESS records, or similar design codes discovered..." class="wizard-input-field">
            </div>
        </div>

        <!-- Dynamic Group B: User selected NO to search results -->
        <div id="tm_search_assistance_wrapper" style="grid-column: span 2; display: none;">
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="tm_add_search_service" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Would you like to use filings4u Search Service for $79? <span style="color: #ef4444;">*</span></label>
                <select id="tm_add_search_service" class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
                    <option value="no" selected>No, I will review existing conflicting filings independently</option>
                    <option value="yes">Yes, add Filings4u Comprehensive Brand Clearance Search — $79.00</option>
                </select>
            </div>
        </div>
    `;
}


// FAMILY 4A: TRADEMARK FILING APPLICATION LAYOUT MATRIX (PART 3 OF 3)
function buildTrademarkFilingPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: ATTORNEY INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Attorney Information (If Applicable)</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="tm_has_attorney" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Is an attorney filing this application on your behalf? <span style="color: #ef4444;">*</span></label>
            <select id="tm_has_attorney" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleTrademarkAttorneyWrapperVisibility(this.value)">
                <option value="no" selected>No, I am filing as an independent individual or corporate officer</option>
                <option value="yes">Yes, legal counsel is representing this trademark execution</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Attorney Records Layout Matrix -->
        <div id="tm_attorney_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Counsel of Record Entry Data</span>
                
                <div class="wizard-input-group" style="margin: 0;">
                    <label for="tm_attorney_name" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Attorney's Full Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="tm_attorney_name" placeholder="Full Legal Name" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="tm_attorney_firm" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Attorney's Firm Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="tm_attorney_firm" placeholder="Legal Practice or Firm Entity" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="tm_attorney_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Firm Street Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="tm_attorney_street" placeholder="Street Address, Suite, Floor" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'tm_attorney')">
                </div>

                <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
                    <div>
                        <label for="tm_attorney_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="tm_attorney_city" placeholder="City" class="wizard-input-field">
                    </div>
                    <div>
                        <label for="tm_attorney_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                        <select id="tm_attorney_state" class="wizard-input-field" style="font-weight: 600;">
                            ${stateDropdownOptionsHtml}
                        </select>
                    </div>
                    <div>
                        <label for="tm_attorney_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="tm_attorney_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                    </div>
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="tm_attorney_phone" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Attorney's Phone Number <span style="color: #ef4444;">*</span></label>
                    <input type="tel" id="tm_attorney_phone" placeholder="(512) 555-0199" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="tm_attorney_email" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Attorney's Email Address <span style="color: #ef4444;">*</span></label>
                    <input type="email" id="tm_attorney_email" placeholder="counsel@firm.com" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 7: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Additional Provisions</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="tm_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Provisions</label>
            <textarea id="tm_provisions" placeholder="Detail any optional fields for specific clauses, disclaimers, color claims, or agreements related to the trademark application..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>

        <!-- SECTION 8: DURATION AND RENEWAL INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Duration and Renewal Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="tm_renewal_awareness" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Are you aware of the trademark renewal requirements? <span style="color: #ef4444;">*</span></label>
            <select id="tm_renewal_awareness" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, I am aware that a Declaration of Use must be filed between years 5 and 6, and renewals occur every 10 years</option>
                <option value="no">No, I would like Filings4u to manage renewal lifecycle tracking indices via dashboard notification logs</option>
            </select>
        </div>
    `;
}

// 📦 MASTER USPTO TRADEMARK FILING APPLICATION ASSEMBLY HOOK
function buildTrademarkFilingForm(stateDropdownOptionsHtml = "") {
    return buildTrademarkFilingPart1(stateDropdownOptionsHtml) +
           buildTrademarkFilingPart2(stateDropdownOptionsHtml) +
           buildTrademarkFilingPart3(stateDropdownOptionsHtml);
}



// FAMILY 4: MAINTENANCE, DISSOLUTION & STATUS METRICS
function buildMaintenanceFieldsLayoutHtml() {
  let contextTitle = "Corporate Status Action";
  let identifierLabel = "State SOS Entity ID Number";
  let hideDate = false;

  if (routeActiveServiceKey.includes("reinstatement")) {
    contextTitle = "LLC Reinstatement Verification";
    identifierLabel = "Filing Number / Charter ID";
  } else if (routeActiveServiceKey.includes("dissolution")) {
    contextTitle = "Entity Dissolution Declaration";
    identifierLabel = "Charter ID / Registration Code";
  } else if (routeActiveServiceKey.includes("annual-report")) {
    contextTitle = "Annual Report Filing Synchronization";
    identifierLabel = "State File Reference Number";
    hideDate = true;
  } else if (routeActiveServiceKey.includes("good-standing")) {
    contextTitle = "Certificate of Good Standing Request";
    hideDate = true;
  } else if (routeActiveServiceKey.includes("qualification")) {
    contextTitle = "Foreign Qualification Request Hub";
    identifierLabel = "Home State Corporate Entity ID";
  }

  // FIXED: Patched broken label formatting slice and missing input field node assembly
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. ${contextTitle}</h3>
    </div>
    <div class="wizard-input-group" style="${hideDate ? 'grid-column: span 2;' : ''}">
      ${identifierLabel} <span style="color: #ef4444;">*</span></label>
      
    </div>
    ${!hideDate ? `
    <div class="wizard-input-group">
      <label for="maint_formation_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Original State Formation Date <span style="color: #ef4444;">*</span></label>
      <input type="date" id="maint_formation_date" required class="wizard-input-field">
    </div>
    ` : ''}
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="maint_officer_sig" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Authorized Managing Officer Full Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="maint_officer_sig" required placeholder="Type your full legal name to verify and sign this submission parameters" class="wizard-input-field">
    </div>
  `;
}

// FAMILY 5: INTELLECTUAL PROPERTY REGISTRIES (TRADEMARK / SERVICEMARK FILINGS)
function buildIpRegistryFieldsLayoutHtml() {
  const isServiceMark = routeActiveServiceKey.includes("servicemark");
  const labelTitle = isServiceMark ? "Servicemark Design Criteria" : "Trademark Design Criteria";
  const helpDescription = isServiceMark ? "A servicemark identifies and distinguishes the source of a service rather than a physical product." : "A trademark identifies and distinguishes the source of a physical product rather than a service.";

  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. ${labelTitle}</h3>
    </div>
    <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Intellectual Property Context</strong>
      ${helpDescription}
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="ip_mark_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Literal Phrasing of Mark / Logo Element Description <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ip_mark_text" required placeholder="e.g., Exact word string, brand name, or slogan details..." class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="ip_class_goods" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">International Classification of Classes <span style="color: #ef4444;">*</span></label>
      <input type="text" id="ip_class_goods" required placeholder="e.g., Class 35 (Advertising), Class 25 (Apparel)" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="ip_first_use_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date of First Commercial Commerce Use <span style="color: #ef4444;">*</span></label>
      <input type="date" id="ip_first_use_date" required class="wizard-input-field">
    </div>
  `;
}

// FAMILY 5A: SERVICEMARK FILING APPLICATION LAYOUT MATRIX (PART 1 OF 3)
function buildServicemarkFilingPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS A SERVICEMARK? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Servicemark?</strong>
            A Servicemark is a specialized legal protection issued at the state level that secures exclusive rights over your company's distinctive brand names, slogans, or logos specifically used to identify and distinguish your commercial *services* rather than physical products from competitors.
        </div>

        <!-- SECTION 1: APPLICANT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Applicant Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sm_applicant_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant's Full Name or Company Name <span style="color: #ef4444;">*</span></label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sm_applicant_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant's Mailing Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sm_applicant_street" required placeholder="Street Name and Number, Suite, Unit" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'sm_applicant')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="sm_applicant_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="sm_applicant_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
                </div>
                <div>
                    <label for="sm_applicant_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="sm_applicant_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="sm_applicant_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="sm_applicant_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sm_applicant_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant's Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="sm_applicant_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sm_applicant_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant's Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="sm_applicant_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>

        <!-- SECTION 2: SERVICEMARK INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Servicemark Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sm_proposed_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Proposed Servicemark Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sm_proposed_name" required placeholder="The name or logo phrase you wish to register as a servicemark" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sm_type_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Servicemark Type <span style="color: #ef4444;">*</span></label>
            <select id="sm_type_choice" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Type...</option>
                <option value="word-mark">Word mark (Standard text styling and letters only)</option>
                <option value="design-mark">Design mark (Stylized graphic icon illustration or standalone logo)</option>
                <option value="combined-mark">Combined mark (Graphic logo elements coupled with stylized service text)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sm_services_desc" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Description of Services <span style="color: #ef4444;">*</span></label>
            <textarea id="sm_services_desc" required placeholder="Briefly describe the commercial services associated with this state-level servicemark filing..." class="wizard-input-field" style="width: 100%; min-height: 70px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}


// FAMILY 5A: SERVICEMARK FILING APPLICATION LAYOUT MATRIX (PART 2 OF 3)
function buildServicemarkFilingPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: FILING BASIS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Filing Basis</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sm_filing_basis" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please select the filing basis <span style="color: #ef4444;">*</span></label>
            <select id="sm_filing_basis" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleServicemarkSpecimenWorkflow(this.value)">
                <option value="" disabled selected>Select Filing Basis...</option>
                <option value="use-in-commerce">Use in Commerce (The servicemark is already being actively used in public trade/sales)</option>
                <option value="intent-to-use">Intent to Use (The servicemark is not currently in use but you intend to use it)</option>
            </select>
        </div>

        <!-- SECTION 4: SPECIMEN INFORMATION (CONDITIONAL) -->
        <div id="sm_specimen_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 8px;">
                <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Specimen Information</h3>
            </div>
            
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="sm_specimen_desc" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Description of the Specimen <span style="color: #ef4444;">*</span></label>
                <input type="text" id="sm_specimen_desc" placeholder="e.g. Branded service vehicle decal, advertisement billboard, business website service page..." class="wizard-input-field">
            </div>

            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="sm_specimen_file" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Upload a copy of the specimen showing the servicemark as used in commerce <span style="color: #ef4444;">*</span></label>
                <input type="file" id="sm_specimen_file" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
            </div>
        </div>

        <!-- SECTION 5: SERVICEMARK SEARCH -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Servicemark Search</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sm_search_conducted" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you conducted a servicemark search to check for similar existing servicemarks? <span style="color: #ef4444;">*</span></label>
            <select id="sm_search_conducted" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleServicemarkSearchAssistanceVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, we have run comprehensive state clearance check reviews</option>
                <option value="no">No, we have not completely cross-referenced conflicting entries</option>
            </select>
        </div>

        <!-- Dynamic Group A: User selected YES to search results -->
        <div id="sm_search_details_wrapper" style="grid-column: span 2; display: none;">
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="sm_search_results_data" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please provide details of the search results: <span style="color: #ef4444;">*</span></label>
                <input type="text" id="sm_search_results_data" placeholder="Detail any findings, matching state registry records, or similar service marks discovered..." class="wizard-input-field">
            </div>
        </div>

        <!-- Dynamic Group B: User selected NO to search results -->
        <div id="sm_search_assistance_wrapper" style="grid-column: span 2; display: none;">
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="sm_add_search_service" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Would you like assistance in conducting a servicemark search for a fee? <span style="color: #ef4444;">*</span></label>
                <select id="sm_add_search_service" class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
                    <option value="no" selected>No, I will review existing conflicting state filings independently</option>
                    <option value="yes">Yes, add Filings4u Comprehensive State Clearance Search — $79.00</option>
                </select>
            </div>
        </div>
    `;
}

// FAMILY 5A: SERVICEMARK FILING APPLICATION LAYOUT MATRIX (PART 3 OF 3)
function buildServicemarkFilingPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: ATTORNEY INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Attorney Information (If Applicable)</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sm_has_attorney" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Is an attorney filing this application on your behalf? <span style="color: #ef4444;">*</span></label>
            <select id="sm_has_attorney" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleServicemarkAttorneyWrapperVisibility(this.value)">
                <option value="no" selected>No, I am filing as an independent individual or corporate officer</option>
                <option value="yes">Yes, legal counsel is representing this servicemark execution</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Attorney Records Layout Matrix -->
        <div id="sm_attorney_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Counsel of Record Entry Data</span>
                
                <div class="wizard-input-group" style="margin: 0;">
                    <label for="sm_attorney_name" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Attorney's Full Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="sm_attorney_name" placeholder="Full Legal Name" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="sm_attorney_firm" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Attorney's Firm Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="sm_attorney_firm" placeholder="Legal Practice or Firm Entity" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="sm_attorney_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Firm Street Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="sm_attorney_street" placeholder="Street Address, Suite, Floor" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'sm_attorney')">
                </div>

                <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
                    <div>
                        <label for="sm_attorney_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="sm_attorney_city" placeholder="City" class="wizard-input-field">
                    </div>
                    <div>
                        <label for="sm_attorney_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                        <select id="sm_attorney_state" class="wizard-input-field" style="font-weight: 600;">
                            ${stateDropdownOptionsHtml}
                        </select>
                    </div>
                    <div>
                        <label for="sm_attorney_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="sm_attorney_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                    </div>
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="sm_attorney_phone" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Attorney's Phone Number <span style="color: #ef4444;">*</span></label>
                    <input type="tel" id="sm_attorney_phone" placeholder="(512) 555-0199" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="sm_attorney_email" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Attorney's Email Address <span style="color: #ef4444;">*</span></label>
                    <input type="email" id="sm_attorney_email" placeholder="counsel@firm.com" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 7: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Additional Provisions</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sm_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Provisions</label>
            <textarea id="sm_provisions" placeholder="Detail any optional fields for specific clauses, disclaimers, or local jurisdiction agreements related to the state servicemark filing..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>

        <!-- SECTION 8: DURATION AND RENEWAL INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Duration and Renewal Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sm_renewal_awareness" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Are you aware of the state renewal requirements? <span style="color: #ef4444;">*</span></label>
            <select id="sm_renewal_awareness" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, I am aware that state registration lifecycles vary and require maintenance filings</option>
                <option value="no">No, I would like Filings4u to manage state-level renewal milestone tracking indices</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sm_calendar_assistance" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Want calendar marking assistance? <span style="color: #ef4444;">*</span></label>
            <select id="sm_calendar_assistance" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, map out my upcoming renewal milestones on my account calendar</option>
                <option value="no">No, I will log my state maintenance deadlines independently</option>
            </select>
        </div>
    `;
}

// 📦 MASTER STATE SERVICEMARK FILING APPLICATION ASSEMBLY HOOK
function buildServicemarkFilingForm(stateDropdownOptionsHtml = "") {
    return buildServicemarkFilingPart1(stateDropdownOptionsHtml) +
           buildServicemarkFilingPart2(stateDropdownOptionsHtml) +
           buildServicemarkFilingPart3(stateDropdownOptionsHtml);
}


// FAMILY 6: REGULATORY LAW, BUSINESS LICENSES & CONSULTING PATHWAYS
function buildExtendedFamiliesFieldsLayoutHtml(familyKey) {
  if (familyKey === "regulatory") {
    let labelName = "Operational License Request";
    let placeholderTxt = "e.g., General Retail, Food Establishment, Brokerage Operation";

    if (routeActiveServiceKey.includes("consulting")) {
      labelName = "Scope of Custom Consulting Parameters";
      placeholderTxt = "e.g., Corporate structural overhaul, federal logistics advisory, safety metrics";
    } else if (routeActiveServiceKey.includes("permit")) {
      labelName = "Target Operational Permit Category";
      placeholderTxt = "e.g., Oversize load transport, hazardous storage, municipal structural variance";
    }

    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Compliance &amp; Licensing Parameters</h3>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="reg_industry_cat" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">${labelName} <span style="color: #ef4444;">*</span></label>
        <input type="text" id="reg_industry_cat" required placeholder="${placeholderTxt}" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="reg_compliance_summary" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Detailed Operational Summary / Specific Agency Targets <span style="color: #ef4444;">*</span></label>
        <textarea id="reg_compliance_summary" required placeholder="Provide a summary layout description of the active business filings, specific agency targets, or municipal permits requested..." rows="3" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
      </div>
    `;
  }

  if (familyKey === "financial") {
    let descriptionBlock = "Provide regulatory tracking parameters for Employer identification indexation, operational operating frameworks, or local tax configurations.";
    if (routeActiveServiceKey.includes("agreement")) {
      descriptionBlock = "Define ownership distributions, company decision frameworks, and localized capital contribution parameters for your Operating Agreement.";
    }

    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Financial Taxonomy &amp; Record Parameters</h3>
      </div>
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box;">
        <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Financial Framework Context</strong> 
        ${descriptionBlock}
      </div>
      <div class="wizard-input-group">
        <label for="fin_responsible_party" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Designated Responsible Party Legal Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fin_responsible_party" required placeholder="Jane Doe" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="fin_tax_closing_month" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Accounting Closing Month <span style="color: #ef4444;">*</span></label>
        <select id="fin_tax_closing_month" required class="wizard-input-field" style="font-weight: 600;">
          <option value="december" selected>December (Standard Calendar Year)</option>
          <option value="january">January</option><option value="february">February</option>
          <option value="march">March</option><option value="april">April</option>
          <option value="may">May</option><option value="june">June</option>
          <option value="july">July</option><option value="august">August</option>
          <option value="september">September</option><option value="october">October</option>
          <option value="november">November</option>
        </select>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
Estimated Count of Active Payroll Employees *`;}return typeof buildSecondaryExtendedFamiliesFieldsLayoutHtml === "function" ? buildSecondaryExtendedFamiliesFieldsLayoutHtml(familyKey) : "";}

// FAMILY 6A: ANNUAL REPORTS FILING APPLICATION LAYOUT MATRIX (PART 1 OF 3)
function buildAnnualReportsPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS AN ANNUAL REPORT? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is an Annual Report Filing?</strong>
            An Annual Report (or Biennial Statement) is a mandatory periodic filing required by state, municipal, and federal regulatory agencies to maintain your business's active legal standing. Failure to file by your statutory deadlines results in severe late fees, interest penalties, and automatic administrative dissolution or forfeiture of your entity protection shields.
        </div>

        <!-- SECTION 1: BUSINESS INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_business_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_business_name" required placeholder="Official name as registered with the registry" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_business_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business ID Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_business_id" required placeholder="State Filing, Charter, or Registration Number" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_business_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Type <span style="color: #ef4444;">*</span></label>
            <select id="ar_business_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Business Type...</option>
                <option value="llc">Limited Liability Company (LLC)</option>
                <option value="corporation">Corporation (Inc. / Corp.)</option>
                <option value="partnership">Partnership (LP / LLP / GP)</option>
                <option value="sole_proprietorship">Sole Proprietorship / Individual DBA</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_principal_street" required placeholder="Street Name and Number, Suite, Unit" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ar_principal')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="ar_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ar_principal_city" required placeholder="City" pattern="[A-Za-z\\\\s\\\\-\\\\.]+" title="Valid text characters required." class="wizard-input-field">
                </div>
                <div>
                    <label for="ar_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="ar_principal_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="ar_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ar_principal_zip" required placeholder="Zip Code" pattern="[0-9]{5}(\\\\-[0-9]{4})?" title="5 digit standard postal code required." style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_mailing_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mailing Address Selection <span style="color: #ef4444;">*</span></label>
            <select id="ar_mailing_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportMailingAddressVisibility(this.value)">
                <option value="same" selected>Mailing Address is identical to Principal Address</option>
                <option value="different">Mailing Address is different</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Alternate Mailing Address Data -->
        <div id="ar_mailing_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Alternate Mailing Address Records</span>
                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="ar_mailing_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ar_mailing_street" placeholder="Street Name and Number, Suite, Unit" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ar_mailing')">
                </div>
                <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
                    <div>
                        <label for="ar_mailing_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="ar_mailing_city" placeholder="City" class="wizard-input-field">
                    </div>
                    <div>
                        <label for="ar_mailing_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                        <select id="ar_mailing_state" class="wizard-input-field" style="font-weight: 600;">
                            ${stateDropdownOptionsHtml}
                        </select>
                    </div>
                    <div>
                        <label for="ar_mailing_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="ar_mailing_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION 2: CONTACT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contact Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Contact Person's Full Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person's Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="ar_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person\'s Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="ar_contact_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>

        `;
}

// FAMILY 6A: ANNUAL REPORTS FILING APPLICATION LAYOUT MATRIX (PART 2 OF 3)
function buildAnnualReportsPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: STATE FILINGS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. State Filings</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_state_due_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Annual Report Filing Due Date <span style="color: #ef4444;">*</span></label>
            <input type="date" id="ar_state_due_date" required class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_state_filed_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you filed your annual report for the current year? <span style="color: #ef4444;">*</span></label>
            <select id="ar_state_filed_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportStateExplanationVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, current state annual filing is completed</option>
                <option value="no">No, current state annual filing is outstanding</option>
            </select>
        </div>

        <div id="ar_state_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="ar_state_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify why: <span style="color: #ef4444;">*</span></label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_state_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Attach a copy of the most recent annual report filed with the state:</label>
            <input type="file" id="ar_state_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>

        <!-- SECTION 4: CITY FILINGS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. City Filings</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_city_license_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City Business License Number (If Applicable)</label>
            <input type="text" id="ar_city_license_num" placeholder="Municipal business tax or license descriptor" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_city_due_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">City Annual Report Filing Due Date</label>
            <input type="date" id="ar_city_due_date" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_city_filed_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you filed your annual report for the current year with the city? <span style="color: #ef4444;">*</span></label>
            <select id="ar_city_filed_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportCityExplanationVisibility(this.value)">
                <option value="na" selected>Not Applicable (No municipal reporting layer mandated)</option>
                <option value="yes">Yes, local city reporting requirements are completed</option>
                <option value="no">No, local city reporting requirements are outstanding</option>
            </select>
        </div>

        <div id="ar_city_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="ar_city_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify why: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_city_reason" placeholder="e.g., Pending calculation adjustments, local ordinance exemption..." class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_city_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Attach a copy of the most recent annual report filed with the city:</label>
            <input type="file" id="ar_city_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>

        <!-- SECTION 5: FEDERAL FILINGS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Federal Filings</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Please provide a valid format (XX-XXXXXXX)" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ar_fed_filed_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you filed your federal taxes (Form 1065, 1120, or 1120S) for the current year? <span style="color: #ef4444;">*</span></label>
            <select id="ar_fed_filed_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportFederalExplanationVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, federal informational or tax filing is completed</option>
                <option value="no">No, federal informational or tax filing is outstanding</option>
            </select>
        </div>

        <div id="ar_fed_explanation_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="ar_fed_reason" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify why: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_fed_reason" placeholder="e.g., Active IRS Form 7004 extension filing in effect..." class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_fed_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Attach a copy of the most recent federal tax return filed:</label>
            <input type="file" id="ar_fed_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>
    `;
}


// FAMILY 6A: ANNUAL REPORTS FILING APPLICATION LAYOUT MATRIX (PART 3 OF 3)
function buildAnnualReportsPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: OTHER FILINGS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Other Filings</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_other_filed_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you filed any other required paperwork (e.g., property tax filings, local business renewals)? <span style="color: #ef4444;">*</span></label>
            <select id="ar_other_filed_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportOtherExplanationVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="no">No other peripheral structural filings required or pending</option>
                <option value="yes">Yes, other regulatory or local business renewals are handled</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Other Filings Details Entry Matrix -->
        <div id="ar_other_explanation_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="ar_other_filings_list" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please list the types of filings and their due dates: <span style="color: #ef4444;">*</span></label>
                <input type="text" id="ar_other_filings_list" placeholder="e.g., Local county property tax asset assessments due October 15..." class="wizard-input-field">
            </div>

            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="ar_other_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Attach any relevant documents pertaining to these filings:</label>
                <input type="file" id="ar_other_file_upload" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
            </div>
        </div>

        <!-- SECTION 7: COMPLIANCE CHECK -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Compliance Check</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_compliance_verified" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you verified that all necessary licenses and permits are current and up to date? <span style="color: #ef4444;">*</span></label>
            <select id="ar_compliance_verified" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleAnnualReportComplianceCheckVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, all tracking operating credentials are verified and current</option>
                <option value="no">No, certain mandatory operating credentials require updates</option>
            </select>
        </div>

        <div id="ar_compliance_pending_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="ar_pending_renewals_list" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please list any licenses or permits that need to be renewed or updated: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ar_pending_renewals_list" placeholder="e.g., County health permits, regional fire safety clearances, state environmental tracking codes..." class="wizard-input-field">
        </div>

        <!-- SECTION 8: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">8. Additional Provisions</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ar_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Provisions</label>
            <textarea id="ar_provisions" placeholder="Detail any optional fields for specific internal reporting clauses, member agreements, or operational tracking notes relevant to your annual filings..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}


// 📦 MASTER ANNUAL REPORTS FILING RECONSTRUCTION ASSEMBLY HOOK
function buildAnnualReportsForm(stateDropdownOptionsHtml = "") {
    return buildAnnualReportsPart1(stateDropdownOptionsHtml) +
           buildAnnualReportsPart2(stateDropdownOptionsHtml) +
           buildAnnualReportsPart3(stateDropdownOptionsHtml);
}



// FAMILY 7: TAX FILING, PROCUREMENT, INSURANCE & LOGISTICS DEFINITIONS
function buildSecondaryExtendedFamiliesFieldsLayoutHtml(familyKey) {
  if (familyKey === "tax-filing") {
    let labelName = "Target Filing Federal Tax ID / EIN";
    if (routeActiveServiceKey.includes("franchise")) {
      labelName = "State Tax Board / Franchise Account Code";
    } else if (routeActiveServiceKey.includes("2290") || routeActiveServiceKey.includes("heavy-use")) {
      labelName = "Filing EIN (Must match vehicle title parameters)";
    }
    
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Fiscal Tax Allocation Details</h3>
      </div>
      <div class="wizard-input-group">
        <label for="tax_fiscal_year" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Tax Year <span style="color: #ef4444;">*</span></label>
        <input type="text" id="tax_fiscal_year" required placeholder="e.g. 2026" maxlength="4" style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="tax_ein_target" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">${labelName} <span style="color: #ef4444;">*</span></label>
        <input type="text" id="tax_ein_target" required placeholder="00-0000000" style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="tax_gross_revenue" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Projected / Actual Gross Annual Business Revenue <span style="color: #ef4444;">*</span></label>
        <input type="text" id="tax_gross_revenue" required placeholder="e.g. $150,000.00" style="font-family: monospace;" class="wizard-input-field">
      </div>
    `;
  }

  if (familyKey === "procurement") {
    let instructionText = "Verify and populate federal asset parameters, unique identifiers, or minority certification codes.";
    if (routeActiveServiceKey.includes("minority")) {
      instructionText = "Identify primary socioeconomic parameters to structure minority-owned or diverse business metrics.";
    }
    
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Procurement &amp; Certification Identifiers</h3>
      </div>
      <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box;">
        <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Operations Registry</strong> ${instructionText}
      </div>
      <div class="wizard-input-group">
        <label for="pro_sam_uei" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">SAM.gov Unique Entity ID (UEI)</label>
        <input type="text" id="pro_sam_uei" placeholder="Enter 12-character UEI if active" maxlength="12" style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="pro_naics_sector" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary NAICS Sector Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="pro_naics_sector" required placeholder="e.g. 484121 (General Freight Trucking)" style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="pro_demographics" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Socioeconomic Classification / Demographics</label>
        <input type="text" id="pro_demographics" placeholder="e.g. Woman-Owned Small Business, Veteran-Owned, Minority-Owned" class="wizard-input-field">
      </div>
    `;
  }

  if (familyKey === "insurance") {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Risk Exposure &amp; Liability Matrix</h3>
      </div>
      <div class="wizard-input-group">
        <label for="ins_coverage_limit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Requested Liability Coverage Limits <span style="color: #ef4444;">*</span></label>
        <select id="ins_coverage_limit" required class="wizard-input-field" style="font-weight: 600;">
          <option value="1m">$1,000,000 Combined Single Limit (Standard)</option>
          <option value="2m">$2,000,000 General Corporate Aggregate Limits</option>
          <option value="750k">$750,000 Freight Minimum Statutory Limits</option>
        </select>
      </div>
      <div class="wizard-input-group">
        <label for="ins_prior_losses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Prior Claims / History of Loss <span style="color: #ef4444;">*</span></label>
        <select id="ins_prior_losses" required class="wizard-input-field" style="font-weight: 600;">
          <option value="none" selected>No insurance claims within the past 36 months</option>
          <option value="has-claims">Active claims exist inside background history logs</option>
        </select>
      </div>
    `;
  }

  // DEFAULT LOGISTICS & FMCSA MASTER MATRIX (Captures All Remaining Trucking Fields)
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Commercial FMCSA &amp; DOT Credentials</h3>
    </div>
    <div class="wizard-input-group">
      <label for="truck_usdot_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Index Number <span style="color: #ef4444;">*</span></label>
      <input type="text" id="truck_usdot_num" required placeholder="Enter active DOT registration number" style="font-family: monospace;" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="truck_mc_mx_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Operating Authority MC / MX Number</label>
      <input type="text" id="truck_mc_mx_num" placeholder="e.g. MC-000000 if operating as an active carrier" style="font-family: monospace;" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="truck_fleet_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Commercial Power Units / Vehicles Operated <span style="color: #ef4444;">*</span></label>
      <input type="number" id="truck_fleet_count" required placeholder="0" min="0" class="wizard-input-field" style="font-family: monospace;">
    </div>
  `;
}


// FAMILY 7A: OPERATING AGREEMENT CONFIGURATOR LAYOUT MATRIX (PART 1 OF 3)
function buildOperatingAgreementPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS AN OPERATING AGREEMENT? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Automated Document Assembly Architecture</strong>
            An Operating Agreement outlines your entity's internal governance rules, financial allocations, and liability constraints. 
            After checkout completion, your information will be compiled into an official corporate PDF and immediately pushed to your account on our secure portal. You will then be able to download it.
        </div>

        <!-- SECTION 1: ENTITY FOUNDATION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Company Baseline Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="oa_company_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Company Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="oa_company_name" required placeholder="Enter LLC name exactly as registered with the state registry" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="oa_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
            <select id="oa_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="oa_formation_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Effective Formation Date <span style="color: #ef4444;">*</span></label>
            <input type="date" id="oa_formation_date" required class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="oa_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Place of Business Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="oa_principal_street" required placeholder="Street address, suite, unit (No P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'oa_principal')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="oa_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="oa_principal_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="oa_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="oa_principal_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="oa_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="oa_principal_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 2: OWNERSHIP ARCHITECTURE SELECTION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Ownership Architecture</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="oa_membership_structure" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Select Membership Structure Type <span style="color: #ef4444;">*</span></label>
            <select id="oa_membership_structure" required class="wizard-input-field" style="font-weight: 700; border: 2px solid var(--navy);" onchange="toggleOperatingAgreementOwnershipSubForm(this.value)">
                <option value="" disabled selected>Choose Structure Type...</option>
                <option value="single-member">Single-Member Framework (100% Solitary Equity Ownership Holding)</option>
                <option value="multi-member">Multi-Member Framework (Distributed Multi-Partner Equity Structures)</option>
            </select>
        </div>
    `;
}

// FAMILY 7A: OPERATING AGREEMENT CONFIGURATOR LAYOUT MATRIX (PART 2 OF 3)
function buildOperatingAgreementPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SINGLE-MEMBER FRAMEWORK WRAPPER -->
        <div id="oa_single_member_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 8px;">
                <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Sole Member & Capital Contribution Profile</h3>
            </div>
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="oa_sole_member_name" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Full Legal Name of Sole Member <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="oa_sole_member_name" placeholder="Full Legal Name" class="wizard-input-field">
                </div>
                <div class="wizard-input-group" style="grid-column: span 1; margin: 0;">
                    <label for="oa_sole_member_contribution" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Initial Capital Contribution ($) <span style="color: #ef4444;">*</span></label>
                    <input type="number" id="oa_sole_member_contribution" placeholder="e.g. 100" min="0" class="wizard-input-field">
                </div>
                <div class="wizard-input-group" style="grid-column: span 1; margin: 0;">
                    <label for="oa_sole_member_percentage" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Membership Percentage (%)</label>
                    <input type="text" id="oa_sole_member_percentage" readonly value="100%" class="wizard-input-field" style="background: #f1f5f9; font-weight: 700; color: var(--navy); cursor: not-allowed;">
                </div>
            </div>
        </div>

        <!-- MULTI-MEMBER FRAMEWORK WRAPPER -->
        <div id="oa_multi_member_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 8px;">
                <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Multi-Member & Equity Distribution Ledger</h3>
            </div>
            <p style="color: var(--slate); font-size: 0.825rem; margin: 0; line-height: 1.4;">
                Add all equity owners. The cumulative total percentage metrics of all members listed below must equal exactly **100%** to generate a compliant legal profile inside your dashboard.
            </p>
            
            <div id="oa_members_container" style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                <!-- Initial Member #1 Entry Row Layout -->
                <div class="member-record-card" id="oa_member_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px;">
                    <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 3;">Member #1 Equity Node</span>
                    
                    <div class="wizard-input-group" style="margin: 0;">
                        <label for="oa_member_name_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Full Legal Name <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="oa_member_name_1" placeholder="Full Legal Name" class="wizard-input-field">
                    </div>
                    <div class="wizard-input-group" style="margin: 0;">
                        <label for="oa_member_contribution_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Capital Contribution ($) <span style="color: #ef4444;">*</span></label>
                        <input type="number" id="oa_member_contribution_1" placeholder="e.g. 500" min="0" class="wizard-input-field">
                    </div>
                    <div class="wizard-input-group" style="margin: 0;">
                        <label for="oa_member_percentage_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Ownership % <span style="color: #ef4444;">*</span></label>
                        <input type="number" id="oa_member_percentage_1" placeholder="e.g. 50" min="0" max="100" class="wizard-input-field oa-percentage-field" oninput="calculateCumulativeOperatingAgreementEquityTotal()">
                    </div>
                </div>
            </div>

            <button type="button" onclick="appendNewOperatingAgreementMemberRow()" style="background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: fit-content;">
                <i class="fa-solid fa-plus"></i> Add Additional Member
            </button>

            <!-- Dynamic Live Percentage Balance Banner -->
            <div id="oa_percentage_balance_alert" style="background: #f1f5f9; padding: 12px; border-radius: 6px; font-size: 0.85rem; color: var(--navy); font-weight: 700; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-chart-pie" style="color: var(--primary);"></i> Current Ledger Weight Status: <span id="oa_live_percentage_total_span">0</span>% / 100%
            </div>
        </div>
    `;
}

// FAMILY 7A: OPERATING AGREEMENT CONFIGURATOR LAYOUT MATRIX (PART 3 OF 3)
function buildOperatingAgreementPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: MANAGEMENT STRUCTURE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Management & Governance Structure</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="oa_management_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Management Designation <span style="color: #ef4444;">*</span></label>
            <select id="oa_management_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="member-managed" selected>Member-Managed (Managed directly by internal equity owners)</option>
                <option value="manager-managed">Manager-Managed (Managed via appointed corporate executives/managers)</option>
            </select>
        </div>

        <!-- SECTION 6: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Additional Provisions & Special Clauses</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="oa_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Custom Clauses or Agreements</label>
            <textarea id="oa_provisions" placeholder="Detail any specific voting thresholds, asset distribution rules, buy-out parameters, or specific legal clauses to inject into your generated PDF document..." class="wizard-input-field" style="width: 100%; min-height: 90px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER OPERATING AGREEMENT ASSEMBLY HOOK (Put at bottom of wizard-layout.js)
function buildOperatingAgreementForm(stateDropdownOptionsHtml = "") {
    return buildOperatingAgreementPart1(stateDropdownOptionsHtml) +
           buildOperatingAgreementPart2(stateDropdownOptionsHtml) +
           buildOperatingAgreementPart3(stateDropdownOptionsHtml);
}

// FAMILY 8A: REGISTERED AGENT SERVICE LAYOUT MATRIX (PART 1 OF 3)
function buildRegisteredAgentServicePart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: REGISTERED AGENT SERVICES -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Statutory Registered Agent?</strong> A Registered Agent is a legally mandated entity or professional office physically located within your operating state tasked with maintaining structured, continuous business-hour coverage. This ensures your corporate layout securely intercepts, logs, and processes official government statutes, annual compliance documents, tax franchise notifications, and time-critical service of process (lawsuits) natively.
        </div>

        <!-- SECTION 1: CLIENT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Client Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_client_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Full Name or Company Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ra_client_name" required placeholder="Individual primary registrant full name or legal corporate title" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_business_structure" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Structure <span style="color: #ef4444;">*</span></label>
            <select id="ra_business_structure" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Structure...</option>
                <option value="llc">Limited Liability Company (LLC)</option>
                <option value="corporation">Corporation (Inc. / Corp.)</option>
                <option value="partnership">Partnership (LP / LLP)</option>
                <option value="sole_prop">Sole Proprietorship</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ra_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ra_principal_street" required placeholder="Street address, building, suite (No P.O. Boxes)" pattern="[A-Za-z0-9\\s\\#\\-\\.\\,\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ra_principal')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="ra_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ra_principal_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="ra_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="ra_principal_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="ra_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ra_principal_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ra_mailing_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mailing Address Selection <span style="color: #ef4444;">*</span></label>
            <select id="ra_mailing_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleRegisteredAgentMailingVisibility(this.value)">
                <option value="same" selected>Mailing Address is identical to Principal Address</option>
                <option value="different">Mailing Address is different</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Alternate Mailing Records -->
        <div id="ra_mailing_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Alternate Mailing Address Records</span>
                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="ra_mailing_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ra_mailing_street" placeholder="Street Name and Number, Suite, Unit" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ra_mailing')">
                </div>
                <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
                    <div>
                        <label for="ra_mailing_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="ra_mailing_city" placeholder="City" class="wizard-input-field">
                    </div>
                    <div>
                        <label for="ra_mailing_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                        <select id="ra_mailing_state" class="wizard-input-field" style="font-weight: 600;">
                            ${stateDropdownOptionsHtml}
                        </select>
                    </div>
                    <div>
                        <label for="ra_mailing_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="ra_mailing_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                    </div>
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_client_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="ra_client_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_client_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="ra_client_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>

        <!-- SECTION 2: REGISTERED AGENT SERVICE INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent Jurisdiction Mapping</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ra_target_states" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State(s) for Registered Agent Service <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ra_target_states" required placeholder="List all jurisdictions where you require registered agent services (e.g. TX, DE, NV)" class="wizard-input-field">
        </div>
    `;
}


// FAMILY 8A: REGISTERED AGENT SERVICE LAYOUT MATRIX (PART 2 OF 3)
function buildRegisteredAgentServicePart2(stateDropdownOptionsHtml = "") {
    return `
        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ra_multiple_entities_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you require registered agent services for multiple entities? <span style="color: #ef4444;">*</span></label>
            <select id="ra_multiple_entities_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleRegisteredAgentMultiEntityVisibility(this.value)">
                <option value="no" selected>No, solitary entity registration coverage only</option>
                <option value="yes">Yes, establish shared dynamic registry fields for multiple entities</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Multi-Entity Dynamic Record Registry -->
        <div id="ra_entities_wrapper" style="grid-column: span 2; display: none;">
            <p style="color: var(--slate); font-size: 0.825rem; margin: 0 0 16px 0; line-height: 1.4;">
                Provide the names and legal structuring types for each secondary enterprise requiring professional registered agent coverage down this pathway.
            </p>
            
            <div id="ra_entities_container" style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                <!-- Initial Secondary Entity Entry Node Structure -->
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Secondary Entity #1 Records</span>
                
                <div class="wizard-input-group" style="margin: 0;">
                    <label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Entity Name <span style="color: #ef4444;">*</span></label>
                    
                </div>
                
                <div class="wizard-input-group" style="margin: 0;">
                    <label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Entity Type <span style="color: #ef4444;">*</span></label>
                    
                        <option value="" disabled selected>Select Type...</option>
                        <option value="llc">Limited Liability Company (LLC)</option>
                        <option value="corporation">Corporation</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other Suffix Form</option>
                    </select>
                </div>
            </div>
            
            <button type="button" onclick="appendNewRegisteredAgentEntityRow()" style="background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: fit-content; margin-top: 12px; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-plus"></i> Add Additional Entity
            </button>
        </div>

        <!-- SECTION 3: SERVICE REQUIREMENTS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 24px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Service Requirements</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_start_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Desired Start Date <span style="color: #ef4444;">*</span></label>
            <input type="date" id="ra_start_date" required class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_mail_forwarding_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you need mail forwarding services? <span style="color: #ef4444;">*</span></label>
            <select id="ra_mail_forwarding_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleRegisteredAgentMailForwardingWorkflow(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, I require custom mail processing and physical forwarding profiles</option>
                <option value="no">No, add Filings4u Premium Mail Forwarding Digital Node — $25.00 / Mo</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Mail Forwarding Data Destinations -->
        <div id="ra_forwarding_address_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="ra_forwarding_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mailing Address for Forwarding <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ra_forwarding_street" placeholder="Destination street address, building, unit, or clear mailbox drop layout" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ra_forwarding')">
        </div>
    `;
}


// FAMILY 8A: REGISTERED AGENT SERVICE LAYOUT MATRIX (PART 3 OF 3)
function buildRegisteredAgentServicePart3(stateDropdownOptionsHtml = "") {
    return `
        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_handled_documents" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Documents to Handle <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ra_handled_documents" required placeholder="e.g. Legal documents, service of process, tax notices, all state correspondence" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_notification_preference" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Document Notification Preference <span style="color: #ef4444;">*</span></label>
            <select id="ra_notification_preference" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Preference...</option>
                <option value="email">Immediate Email Scan Transmission (Fastest & Recommended)</option>
                <option value="mail">Physical First-Class Mail Forwarding</option>
                <option value="phone">Direct Phone Call / SMS Notification Alert</option>
            </select>
        </div>

        <!-- SECTION 4: COMPLIANCE AND RESPONSIBILITIES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Compliance and Responsibilities</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_responsibility_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Are you aware of the agent responsibilities? <span style="color: #ef4444;">*</span></label>
            <select id="ra_responsibility_check" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, I acknowledge the roles, presence mandates, and statutory scope of an agent</option>
                <option value="no">No, please send a copy of operational parameters via dashboard portal</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ra_data_update_agreement" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Agree to keep contact info updated? <span style="color: #ef4444;">*</span></label>
            <select id="ra_data_update_agreement" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, I explicitly agree to maintain accurate records for processing alerts</option>
                <option value="no">No, do not register tracking credentials</option>
            </select>
        </div>

        <!-- SECTION 5: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Additional Provisions</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ra_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Provisions</label>
            <textarea id="ra_provisions" placeholder="Detail any optional fields for specific clauses, internal corporate resolutions, or custom legal handling instructions relative to your agent service profile..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER REGISTERED AGENT SERVICE ASSEMBLY HOOK
function buildRegisteredAgentServiceForm(stateDropdownOptionsHtml = "") {
    return buildRegisteredAgentServicePart1(stateDropdownOptionsHtml) + 
           buildRegisteredAgentServicePart2(stateDropdownOptionsHtml) + 
           buildRegisteredAgentServicePart3(stateDropdownOptionsHtml);
}


// FAMILY 9A: BUSINESS LICENSES APPLICATION LAYOUT MATRIX (PART 1 OF 5)
function buildBusinessLicensesPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: BUSINESS LICENSES & PERMITS -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Compliance Standards for Operating Licenses</strong>
            Operating a business in the United States requires strict adherence to multi-jurisdictional compliance criteria. Depending on your industry and precise geographic matrix, you may require a combination of local, municipal, county, state, and federal operational credentials to legally conduct trade and insulate your firm from severe statutory enforcement.
        </div>

        <!-- SECTION 1: APPLICANT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Applicant Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_applicant_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Applicant Name or Company Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="bl_applicant_name" required placeholder="Full individual name or official company name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_business_structure" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Structure <span style="color: #ef4444;">*</span></label>
            <select id="bl_business_structure" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Structure...</option>
                <option value="corporation">Corporation (Inc. / Corp.)</option>
                <option value="llc">Limited Liability Company (LLC)</option>
                <option value="partnership">Partnership</option>
                <option value="sole_proprietorship">Sole Proprietorship</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bl_business_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="bl_business_street" required placeholder="Street Address, Suite, Unit (No P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'bl_business')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="bl_business_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="bl_business_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="bl_business_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="bl_business_state" required class="wizard-input-field" style="font-weight: 600;">
                        \${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="bl_business_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="bl_business_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bl_mailing_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mailing Address Selection <span style="color: #ef4444;">*</span></label>
            <select id="bl_mailing_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleBusinessLicensesMailingVisibility(this.value)">
                <option value="same" selected>Mailing Address is identical to Business Address</option>
                <option value="different">Mailing Address is different</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Alternate Mailing Address Data -->
        <div id="bl_mailing_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Alternate Mailing Address Records</span>
                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="bl_mailing_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="bl_mailing_street" placeholder="Street Name and Number, Suite, Unit" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'bl_mailing')">
                </div>
                <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
                    <div>
                        <label for="bl_mailing_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="bl_mailing_city" placeholder="City" class="wizard-input-field">
                    </div>
                    <div>
                        <label for="bl_mailing_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                        <select id="bl_mailing_state" class="wizard-input-field" style="font-weight: 600;">
                            \${stateDropdownOptionsHtml}
                        </select>
                    </div>
                    <div>
                        <label for="bl_mailing_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="bl_mailing_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                    </div>
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_applicant_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="bl_applicant_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_applicant_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="bl_applicant_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>
    `;
}

// FAMILY 9A: BUSINESS LICENSES APPLICATION LAYOUT MATRIX (PART 2 OF 5)
function buildBusinessLicensesPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: TYPE OF BUSINESS LICENSE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Type of Business License & Permits</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Please select the licenses you are applying for or require verification checking maps (Check all that apply):</p>
        </div>

        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_1" value="general" style="margin-top: 3px;">
                <label for="bl_type_1" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">1. General Business License</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_2" value="sales_tax" style="margin-top: 3px;">
                <label for="bl_type_2" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">2. Sales Tax Permit / Registration</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_3" value="registration" style="margin-top: 3px;">
                <label for="bl_type_3" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">3. Business Entity Registration</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_4" value="ein" style="margin-top: 3px;">
                <label for="bl_type_4" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">4. Employer Identification Number (EIN)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_5" value="professional" style="margin-top: 3px;">
                <label for="bl_type_5" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">5. Professional License (Oversight Guilds)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_6" value="food_service" style="margin-top: 3px;">
                <label for="bl_type_6" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">6. Food Service License</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_7" value="health_dept" style="margin-top: 3px;">
                <label for="bl_type_7" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">7. Health Department Permit</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_8" value="liquor" style="margin-top: 3px;">
                <label for="bl_type_8" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">8. Liquor License / Alcohol Permit</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_9" value="home_occ" style="margin-top: 3px;">
                <label for="bl_type_9" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">9. Home Occupation Permit</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_10" value="zoning" style="margin-top: 3px;">
                <label for="bl_type_10" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">10. Zoning Permit Verification</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_11" value="contractor" style="margin-top: 3px;">
                <label for="bl_type_11" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">11. Contractor & Trade License</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_12" value="child_care" style="margin-top: 3px;">
                <label for="bl_type_12" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">12. Child Care Facility License</label>
            </div>
    `;
}

// FAMILY 9A: BUSINESS LICENSES APPLICATION LAYOUT MATRIX (PART 3 OF 5)
function buildBusinessLicensesPart3(stateDropdownOptionsHtml = "") {
    return `
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_13" value="animal" style="margin-top: 3px;">
                <label for="bl_type_13" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">13. Animal and Veterinary Licenses</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_14" value="beauty" style="margin-top: 3px;">
                <label for="bl_type_14" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">14. Beauty and Cosmetology Licenses</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_15" value="transportation" style="margin-top: 3px;">
                <label for="bl_type_15" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">15. Transportation / Logistics Permits</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_16" value="environmental" style="margin-top: 3px;">
                <label for="bl_type_16" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">16. Environmental Control Permits</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_17" value="special_event" style="margin-top: 3px;">
                <label for="bl_type_17" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">17. Special Events / Assembly Permit</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_18" value="signage" style="margin-top: 3px;">
                <label for="bl_type_18" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">18. Structural Signage Permit</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_19" value="tobacco" style="margin-top: 3px;">
                <label for="bl_type_19" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">19. Tobacco Retailer License</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_20" value="auctioneer" style="margin-top: 3px;">
                <label for="bl_type_20" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">20. Auctioneer Statutory License</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_21" value="pharmacy" style="margin-top: 3px;">
                <label for="bl_type_21" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">21. Pharmacy Facility License</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_22" value="fire" style="margin-top: 3px;">
                <label for="bl_type_22" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">22. Fire Marshal Operating Permit</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_23" value="nursing" style="margin-top: 3px;">
                <label for="bl_type_23" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">23. Nursing Home Care Facility License</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="bl_type_24" value="real_estate" style="margin-top: 3px;">
                <label for="bl_type_24" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">24. Real Estate Brokerage License</label>
            </div>
        </div>
    `;
}

// FAMILY 9A: BUSINESS LICENSES APPLICATION LAYOUT MATRIX (PART 4 OF 5)
function buildBusinessLicensesPart4(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: BUSINESS INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Business Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bl_activities_desc" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Description of Business Activities <span style="color: #ef4444;">*</span></label>
            <textarea id="bl_activities_desc" required placeholder="Briefly describe what your business will do..." class="wizard-input-field" style="width: 100%; min-height: 70px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_employee_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Number of Employees (If Applicable)</label>
            <input type="number" id="bl_employee_count" placeholder="0" min="0" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_business_hours" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Hours <span style="color: #ef4444;">*</span></label>
            <input type="text" id="bl_business_hours" required placeholder="e.g., Mon-Fri 9AM-5PM, Sat 10AM-2PM" class="wizard-input-field">
        </div>

        <!-- SECTION 4: LOCATION INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Location Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bl_tenure_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you own or lease the business location? <span style="color: #ef4444;">*</span></label>
            <select id="bl_tenure_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleBusinessLicensesLandlordVisibility(this.value)">
                <option value="own" selected>Own (Premises are held under direct structural asset equity)</option>
                <option value="lease">Lease (Premises are occupied via third-party tenancy agreement)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Lease Landlord Details -->
        <div id="bl_landlord_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Landlord Contact Record Registry</span>
                <div class="wizard-input-group" style="margin: 0;">
                    <label for="bl_landlord_name" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Landlord's Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="bl_landlord_name" placeholder="Individual Name or Property Management Entity" class="wizard-input-field">
                </div>
                <div class="wizard-input-group" style="margin: 0;">
                    <label for="bl_landlord_phone" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Landlord's Phone Number <span style="color: #ef4444;">*</span></label>
                    <input type="tel" id="bl_landlord_phone" placeholder="(512) 555-0144" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bl_zoning_compliant" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Is your business located in a zoning-compliant area? <span style="color: #ef4444;">*</span></label>
            <select id="bl_zoning_compliant" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, verified against local structural master maps</option>
                <option value="no">No, requires municipal zoning adjustment variance processing</option>
            </select>
        </div>
    `;
}

// FAMILY 9A: BUSINESS LICENSES APPLICATION LAYOUT MATRIX (PART 5 OF 5)
function buildBusinessLicensesPart5(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: COMPLIANCE REQUIREMENTS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Compliance Requirements</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bl_city_regs_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Have you checked for any specific city regulations applicable to your business type? <span style="color: #ef4444;">*</span></label>
            <select id="bl_city_regs_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleBusinessLicensesCityRegsVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="yes">Yes, we have reviewed our localized municipal regulations</option>
                <option value="no">No, we have not completely audited city regulatory overlays</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: City Regulations Details Entry -->
        <div id="bl_city_regs_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="bl_city_regs_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify which regulations you have reviewed: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="bl_city_regs_details" placeholder="List reviewed ordinances, local health guidelines, or safety acts..." class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bl_other_permits_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you have any required permits or licenses from other agencies? <span style="color: #ef4444;">*</span></label>
            <select id="bl_other_permits_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleBusinessLicensesOtherPermitsVisibility(this.value)">
                <option value="" disabled selected>Select Option...</option>
                <option value="no">No secondary external authorizations are mandatory</option>
                <option value="yes">Yes, secondary state or environmental parameters apply</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Other Permits List -->
        <div id="bl_other_permits_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="bl_other_permits_list" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please list: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="bl_other_permits_list" placeholder="List existing state professional licenses, wildlife certifications, or EPA codes..." class="wizard-input-field">
        </div>

        <!-- SECTION 6: ADDITIONAL DOCUMENTATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Additional Documentation</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Please attach the following verifiable file elements to complete your credential review packets:</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_file_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Copy of a valid ID (Driver's License, Passport, etc.) <span style="color: #ef4444;">*</span></label>
            <input type="file" id="bl_file_id" required class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_file_reg" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Proof of Business Registration (If Applicable)</label>
            <input type="file" id="bl_file_reg" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_file_lease" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Lease agreement or proof of ownership for location <span style="color: #ef4444;">*</span></label>
            <input type="file" id="bl_file_lease" required class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bl_file_health" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Health permits (If Applicable)</label>
            <input type="file" id="bl_file_health" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bl_file_extra" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Additional documents (Specify below):</label>
            <input type="text" id="bl_file_extra_note" placeholder="Describe additional documentation items attached..." class="wizard-input-field" style="margin-bottom: 8px;">
            <input type="file" id="bl_file_extra" class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>
    `;
}

// 📦 MASTER BUSINESS LICENSES ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildBusinessLicensesForm(stateDropdownOptionsHtml = "") {
    return buildBusinessLicensesPart1(stateDropdownOptionsHtml) +
           buildBusinessLicensesPart2(stateDropdownOptionsHtml) +
           buildBusinessLicensesPart3(stateDropdownOptionsHtml) +
           buildBusinessLicensesPart4(stateDropdownOptionsHtml) +
           buildBusinessLicensesPart5(stateDropdownOptionsHtml);
}


// FAMILY 10A: EMPLOYER ID (EIN) APPLICATION LAYOUT MATRIX (PART 1 OF 5)
function buildEinApplicationPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS AN EIN? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Federal Tax Identification Standards</strong>
            An Employer Identification Number (EIN), also recognized as a Federal Tax Identification Number, is a unique nine-digit numerical identifier assigned by the Internal Revenue Service (IRS). It is a structural mandate for establishing commercial banking facilities, hiring payroll personnel, maintaining clear corporate transparency shields, and filing corporate tax returns.
        </div>

        <!-- SECTION 1: APPLICANT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Applicant Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ein_applicant_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Full Name or Business Name <span style="color: #ef4444;">*</span></label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ein_business_structure" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Structure <span style="color: #ef4444;">*</span></label>
            <select id="ein_business_structure" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleEinStructureSpecificationVisibility(this.value)">
                <option value="" disabled selected>Select Structure...</option>
                <option value="sole_prop">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="corporation">Corporation</option>
                <option value="llc">LLC (Limited Liability Company)</option>
                <option value="other">Other Structural Entity</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Other Structure Specification -->
        <div id="ein_structure_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="ein_structure_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify structure: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ein_structure_other_text" placeholder="e.g., Non-Profit Corporation, Estate, Personal Trust, S-Corp Choice..." class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ein_business_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Physical Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ein_business_street" required placeholder="Physical Location Street Address (No P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ein_business')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="ein_business_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ein_business_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="ein_business_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="ein_business_state" required class="wizard-input-field" style="font-weight: 600;">
                        \${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="ein_business_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ein_business_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ein_mailing_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mailing Address Selection <span style="color: #ef4444;">*</span></label>
            <select id="ein_mailing_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleEinMailingVisibility(this.value)">
                <option value="same" selected>Mailing Address is identical to Business Address</option>
                <option value="different">Mailing Address is different</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Alternate Mailing Address Records -->
        <div id="ein_mailing_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Alternate Mailing Address Records</span>
                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="ein_mailing_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ein_mailing_street" placeholder="Mailing Street Name and Number, P.O. Box, or Suite" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ein_mailing')">
                </div>
                <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
                    <div>
                        <label for="ein_mailing_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="ein_mailing_city" placeholder="City" class="wizard-input-field">
                    </div>
                    <div>
                        <label for="ein_mailing_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                        <select id="ein_mailing_state" class="wizard-input-field" style="font-weight: 600;">
                            \${stateDropdownOptionsHtml}
                        </select>
                    </div>
                    <div>
                        <label for="ein_mailing_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="ein_mailing_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                    </div>
                </div>
            </div>
        </div>
    `;
}

// FAMILY 10A: EMPLOYER ID (EIN) APPLICATION LAYOUT MATRIX (PART 2 OF 5)
function buildEinApplicationPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: APPLICANT CONTACT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Applicant Contact Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ein_applicant_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="ein_applicant_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ein_applicant_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="ein_applicant_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>

        <!-- SECTION 3: REASON FOR APPLYING -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Reason for Applying</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select the primary reasons for applying for this Employer Identification Number (Check all that apply):</p>
        </div>

        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ein_reason_1" value="started_new_business" style="margin-top: 3px;">
                <label for="ein_reason_1" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Starting a new business entity</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ein_reason_2" value="hiring_employees" style="margin-top: 3px;">
                <label for="ein_reason_2" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Hiring operational employees / payroll setup</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ein_reason_3" value="banking_purposes" style="margin-top: 3px;">
                <label for="ein_reason_3" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Banking purposes (Opening a business checking account)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ein_reason_4" value="federal_tax_compliance" style="margin-top: 3px;">
                <label for="ein_reason_4" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Compliance with statutory federal tax laws</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px; grid-column: span 2;">
                <input type="checkbox" id="ein_reason_5" value="other" style="margin-top: 3px;" onchange="toggleEinReasonSpecificationVisibility(this.checked)">
                <label for="ein_reason_5" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Other unique parameter reasons (Specify below)</label>
            </div>
        </div>

        <!-- Hidden Conditional Container: Other Reason Specification -->
        <div id="ein_reason_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; margin-top: 8px;">
            <label for="ein_reason_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify reason: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ein_reason_other_text" placeholder="e.g., Changed business structure configuration type, purchasing an existing business asset..." class="wizard-input-field">
        </div>
    `;
}

// FAMILY 10A: EMPLOYER ID (EIN) APPLICATION LAYOUT MATRIX (PART 3 OF 5)
function buildEinApplicationPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: BUSINESS ACTIVITIES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Business Activities</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ein_activities_desc" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Description of Business Activities <span style="color: #ef4444;">*</span></label>
            <textarea id="ein_activities_desc" required placeholder="Briefly describe what your business will do (e.g., Retail sales of apparel, logistics and commercial transport, consulting, software engineering)..." class="wizard-input-field" style="width: 100%; min-height: 70px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ein_employee_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Number of Employees Expected Next 12 Months <span style="color: #ef4444;">*</span></label>
            <input type="number" id="ein_employee_count" required placeholder="Enter 0 if none currently expected" min="0" class="wizard-input-field">
        </div>
    `;
}

// FAMILY 10A: EMPLOYER ID (EIN) APPLICATION LAYOUT MATRIX (PART 4 OF 5)
function buildEinApplicationPart4(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: RESPONSIBLE PARTY -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Responsible Party</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The IRS requires the true principal officer, general partner, or owner to be designated as the responsible party.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ein_responsible_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Name of the Responsible Party <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ein_responsible_name" required placeholder="First and Last Legal Name of Individual" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ein_responsible_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ein_responsible_id" required placeholder="000-00-0000" pattern="[0-9]{3}\\\\-[0-9]{2}\\\\-[0-9]{4}" title="Please provide a valid 9-digit layout (XXX-XX-XXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>
    `;
}


// FAMILY 10A: EMPLOYER ID (EIN) APPLICATION LAYOUT MATRIX (PART 5 OF 5)
function buildEinApplicationPart5(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: ADDITIONAL INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Additional Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ein_start_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date Business Started <span style="color: #ef4444;">*</span></label>
            <input type="date" id="ein_start_date" required class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ein_existing_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Existing EIN (If Applicable)</label>
            <input type="text" id="ein_existing_number" placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Please provide a valid 9-digit format (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>
    `;
}

// 📦 MASTER EMPLOYER ID (EIN) APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildEinApplicationForm(stateDropdownOptionsHtml = "") {
    return buildEinApplicationPart1(stateDropdownOptionsHtml) +
           buildEinApplicationPart2(stateDropdownOptionsHtml) +
           buildEinApplicationPart3(stateDropdownOptionsHtml) +
           buildEinApplicationPart4(stateDropdownOptionsHtml) +
           buildEinApplicationPart5(stateDropdownOptionsHtml);
}

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 1 OF 5)
function buildEntityDissolutionPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS AN ENTITY DISSOLUTION? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Corporate Dissolution & Winding Up Standards</strong>
            An Entity Dissolution is the formal, statutory process required to legally terminate a business entity's operational existence with the state registry. Filing Articles of Dissolution limits ongoing corporate tax liabilities, cuts off future operational fees, and initiates the formal winding-up period to safely settle creditor claims and distribute residual assets.
        </div>

        <!-- SECTION 1: ENTITY INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Entity Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            Name of Entity <span style="color: #ef4444;">*</span></label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            Entity Type <span style="color: #ef4444;">*</span></label>
            
                <option value="" disabled selected>Select Entity Type...</option>
                <option value="corporation">Corporation (Inc. / Corp.)</option>
                <option value="llc">Limited Liability Company (LLC)</option>
                <option value="partnership">Partnership (LP / LLP)</option>
                <option value="sole_proprietorship">Sole Proprietorship</option>
                <option value="other">Other Structure Suffix</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Other Entity Type Specification -->
        <div id="dis_structure_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="dis_structure_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify structure: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="dis_structure_other_text" placeholder="e.g., Professional Association, Benefit Corporation, Non-Profit..." class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dis_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Incorporation/Formation <span style="color: #ef4444;">*</span></label>
            <select id="dis_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            Filing or Charter ID Number (If Known)</label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="dis_business_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="dis_business_street" required placeholder="Street Address, Suite, Unit (No P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'dis_business')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="dis_business_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="dis_business_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="dis_business_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="dis_business_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="dis_business_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="dis_business_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>
    `;
}

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 2 OF 5)
function buildEntityDissolutionPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: CONTACT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contact Information</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="dis_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="dis_contact_name" required placeholder="Full name of corporate officer or legal contact handling dissolution" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dis_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="dis_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dis_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="dis_contact_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>

        <!-- SECTION 3: REASON FOR DISSOLUTION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Reason for Dissolution</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select the primary reasons for winding up and dissolving this entity (Check all that apply):</p>
        </div>

        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="dis_reason_1" value="voluntary" style="margin-top: 3px;">
                <label for="dis_reason_1" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Voluntary dissolution (Approved by members/shareholders)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="dis_reason_2" value="involuntary" style="margin-top: 3px;">
                <label for="dis_reason_2" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Involuntary dissolution (Court order or operational cessation)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px; grid-column: span 2;">
                <input type="checkbox" id="dis_reason_3" value="other" style="margin-top: 3px;" onchange="toggleDissolutionReasonSpecificationVisibility(this.checked)">
                <label for="dis_reason_3" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Other corporate parameters (Specify below)</label>
            </div>
        </div>

        <!-- Hidden Conditional Container: Other Reason Specification -->
        <div id="dis_reason_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; margin-top: 8px;">
            <label for="dis_reason_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify reason: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="dis_reason_other_text" placeholder="e.g., Business merger, corporate restructuring, retirement of principals..." class="wizard-input-field">
        </div>
    `;
}

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 3 OF 5)
function buildEntityDissolutionPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: DISSOLUTION DETAILS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Dissolution Details</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dis_date_of_effective" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date of Dissolution <span style="color: #ef4444;">*</span></label>
            <input type="date" id="dis_date_of_effective" required class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dis_final_tax_year" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Final Tax Year (if applicable) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="dis_final_tax_year" required placeholder="2026" min="1900" max="2100" class="wizard-input-field">
        </div>
    `;
}

// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 4 OF 5)
function buildEntityDissolutionPart4(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: ASSET DISTRIBUTION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Asset Distribution Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="dis_asset_dist_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will you be distributing any assets? <span style="color: #ef4444;">*</span></label>
            <select id="dis_asset_dist_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDissolutionAssetDistributionVisibility(this.value)">
                <option value="no" selected>No asset distribution actions are pending or required</option>
                <option value="yes">Yes, assets will be distributed to members / shareholders</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Asset Distribution Details Entry -->
        <div id="dis_asset_dist_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="dis_asset_dist_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please provide asset distribution details: <span style="color: #ef4444;">*</span></label>
            <textarea id="dis_asset_dist_details" placeholder="Describe how cash balances, real property, equipment, or inventory allocations are being cleared and transferred..." class="wizard-input-field" style="width: 100%; min-height: 70px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}


// FAMILY 11A: ENTITY DISSOLUTION CONFIGURATOR LAYOUT MATRIX (PART 5 OF 5)
function buildEntityDissolutionPart5(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: OUTSTANDING DEBTS AND OBLIGATIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Outstanding Debts and Obligations</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State regulatory offices mandate that all corporate creditors must be accounted for or cleared before total closure approval.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="dis_debts_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Are there any outstanding debts or obligations? <span style="color: #ef4444;">*</span></label>
            <select id="dis_debts_choice" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDissolutionDebtsVisibility(this.value)">
                <option value="no" selected>No, all liabilities, creditor bills, and operational debts are settled</option>
                <option value="yes">Yes, outstanding debts or structural corporate liabilities remain</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Outstanding Debts Details Entry -->
        <div id="dis_debts_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="dis_debts_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please provide debt settlement details: <span style="color: #ef4444;">*</span></label>
            <textarea id="dis_debts_details" placeholder="Detail active corporate loans, pending trade credit structures, or winding-up payment reserve allocations..." class="wizard-input-field" style="width: 100%; min-height: 70px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER ENTITY DISSOLUTION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildEntityDissolutionForm(stateDropdownOptionsHtml = "") {
    return buildEntityDissolutionPart1(stateDropdownOptionsHtml) +
           buildEntityDissolutionPart2(stateDropdownOptionsHtml) +
           buildEntityDissolutionPart3(stateDropdownOptionsHtml) +
           buildEntityDissolutionPart4(stateDropdownOptionsHtml) +
           buildEntityDissolutionPart5(stateDropdownOptionsHtml);
}

// FAMILY 12A: CERTIFICATE OF GOOD STANDING LAYOUT MATRIX (PART 1 OF 3)
function buildGoodStandingPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: CERTIFICATE OF GOOD STANDING -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is a Certificate of Good Standing?</strong>
            A Certificate of Good Standing (sometimes called a Certificate of Existence or Status) is an official state document verifying that your entity is legally registered, has filed all required annual reports, and has paid all state franchise taxes. This credential is required for corporate bank accounts, financing, foreign qualifications, and major contracts.
        </div>

        <!-- SECTION 1: ENTITY FOUNDATION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Entity Foundation Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cgs_company_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Entity Name <span style="color: #ef4444;">*</span></label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cgs_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
            <select id="cgs_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            Filing or Charter ID Number (If Known)</label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cgs_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cgs_principal_street" required placeholder="Street Name and Number, Suite, Unit" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'cgs_principal')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="cgs_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="cgs_principal_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="cgs_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="cgs_principal_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="cgs_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="cgs_principal_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>
    `;
}


// FAMILY 12A: CERTIFICATE OF GOOD STANDING LAYOUT MATRIX (PART 2 OF 3)
function buildGoodStandingPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: CONTACT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Primary Contact Details</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cgs_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Contact Person Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cgs_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cgs_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="cgs_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cgs_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="cgs_contact_email" required placeholder="email@example.com" class="wizard-input-field">
        </div>

        <!-- SECTION 3: CERTIFICATION INTENT & CONTEXT -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Intent & Context Parameters</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cgs_issuance_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Reason for Requesting Certificate <span style="color: #ef4444;">*</span></label>
            <select id="cgs_issuance_purpose" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleGoodStandingPurposeSpecificationVisibility(this.value)">
                <option value="" disabled selected>Select Intended Use...</option>
                <option value="banking">Opening Corporate Bank Account / Securing Commercial Lending</option>
                <option value="foreign-qualification">Filing for Foreign Qualification Certificate in another state</option>
                <option value="contractual">Contractual Requirement / Request from Business Partners</option>
                <option value="regulatory">Regulatory Compliance / Capitalization Requirements</option>
                <option value="other">Other Brand / Operational Context (Specify below)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Other Purpose Description -->
        <div id="cgs_purpose_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; margin-top: 8px;">
            <label for="cgs_purpose_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify intended use parameters: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cgs_purpose_other_text" placeholder="Describe the specific verification requirement needing status proof..." class="wizard-input-field">
        </div>
    `;
}

// FAMILY 12A: CERTIFICATE OF GOOD STANDING LAYOUT MATRIX (PART 3 OF 3)
function buildGoodStandingPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: DELIVERY SELECTION & EXTRA COPIES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Fulfillment & Delivery Options</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cgs_delivery_speed" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Fulfillment Processing Speed <span style="color: #ef4444;">*</span></label>
            <select id="cgs_delivery_speed" required class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
                <option value="standard" selected>Standard Processing (Timeline varies based on state speed arrays)</option>
                <option value="expedited">Expedited Courier Service — Add $49.00 (Priority state extraction filing)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cgs_delivery_method" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Document Delivery Format <span style="color: #ef4444;">*</span></label>
            <select id="cgs_delivery_method" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleGoodStandingPhysicalDeliveryVisibility(this.value)">
                <option value="digital" selected>Digital Extraction Only (Secure PDF download link via dashboard portal)</option>
                <option value="physical">Digital PDF + Certified Physical Hardcopy Delivery — Add $35.00</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Physical Shipping Address Records -->
        <div id="cgs_shipping_address_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Physical Certificate Delivery Shipping Address</span>
                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="cgs_shipping_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Shipping Street Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="cgs_shipping_street" placeholder="Street Name and Number, Suite, Apt, Unit" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'cgs_shipping')">
                </div>
                <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
                    <div>
                        <label for="cgs_shipping_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="cgs_shipping_city" placeholder="City" class="wizard-input-field">
                    </div>
                    <div>
                        <label for="cgs_shipping_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                        <select id="cgs_shipping_state" class="wizard-input-field" style="font-weight: 600;">
                            ${stateDropdownOptionsHtml}
                        </select>
                    </div>
                    <div>
                        <label for="cgs_shipping_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="cgs_shipping_zip" placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION 5: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Additional Provisions</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cgs_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Instructions or Requirements</label>
            <textarea id="cgs_provisions" placeholder="Detail any unique criteria, certified status indicators, or explicit provisions required on your Certificate of Good Standing registration..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER CERTIFICATE OF GOOD STANDING ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildGoodStandingForm(stateDropdownOptionsHtml = "") {
    return buildGoodStandingPart1(stateDropdownOptionsHtml) +
           buildGoodStandingPart2(stateDropdownOptionsHtml) +
           buildGoodStandingPart3(stateDropdownOptionsHtml);
}


// FAMILY 13A: APOSTILLE AUTHENTICATION SERVICES LAYOUT MATRIX (PART 1 OF 3)
function buildApostilleServicePart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS AN APOSTILLE? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is an Apostille Authentication?</strong>
            An Apostille is a specialized legal certification issued under the terms of the 1961 Hague Convention. It validates the authenticity of a public official's signature or seal on a document (such as birth certificates, corporate bylaws, or diplomas), ensuring that the document is recognized as legally binding and authentic within foreign jurisdictions.
        </div>

        <!-- SECTION 1: DOCUMENT INFORMATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Document Parameters</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ap_document_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Document Type <span style="color: #ef4444;">*</span></label>
            <select id="ap_document_type" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleApostilleDocumentSpecificationVisibility(this.value)">
                <option value="" disabled selected>Select Document Type...</option>
                <option value="corporate">Corporate (Articles, Bylaws, Certificates of Status, Power of Attorney)</option>
                <option value="vital-record">Vital Records (Birth, Marriage, Death Certificates)</option>
                <option value="academic">Academic Records (Diplomas, Transcripts, Certifications)</option>
                <option value="notarized">Notarized Personal Document (Affidavits, Agreements, Deeds)</option>
                <option value="other">Other Specialized Document (Specify below)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ap_issuing_authority" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Document Origin Jurisdiction (State) <span style="color: #ef4444;">*</span></label>
            <select id="ap_issuing_authority" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State of Document Origin...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <!-- Hidden Conditional Container: Other Document Type Description -->
        <div id="ap_doc_type_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; margin-top: 8px;">
            <label for="ap_doc_type_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify document type details: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ap_doc_type_other_text" placeholder="e.g., Federal background check, trademark registration letter..." class="wizard-input-field">
        </div>

        <!-- SECTION 2: TARGET COUNTRY & JURISDICTION DETAILS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Destination & International Intent</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ap_target_country" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Destination Country <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ap_target_country" required placeholder="Enter the foreign nation where this document will be presented (e.g., Spain, United Kingdom, Mexico)" class="wizard-input-field">
        </div>
    `;
}


// FAMILY 13A: APOSTILLE AUTHENTICATION SERVICES LAYOUT MATRIX (PART 2 OF 3)
function buildApostilleServicePart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: FULFILLMENT VOLUMES & UPLOAD MATRIX -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Document Counts & Digital Pre-Review</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Filings4u performs an advanced structural validation check on your document scan before routing to the Secretary of State.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ap_document_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Number of Documents <span style="color: #ef4444;">*</span></label>
            <input type="number" id="ap_document_count" required value="1" min="1" max="50" class="wizard-input-field" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ap_file_upload" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Upload Scanned Document Copy <span style="color: #ef4444;">*</span></label>
            <input type="file" id="ap_file_upload" required class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>

        <!-- SECTION 4: FULFILLMENT SHIPPING FRAMEWORK -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Shipping & Courier Options</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">An Apostille must be physically bound to your original paperwork. Select your inbound and outbound track paths below:</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ap_inbound_courier" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Inbound Document Delivery Method <span style="color: #ef4444;">*</span></label>
            <select id="ap_inbound_courier" required class="wizard-input-field" style="font-weight: 600;">
                <option value="user-ship" selected>I will ship my original hardcopy paperwork to Filings4u independently</option>
                <option value="filings4u-label">Generate a Filings4u Prepaid FedEx Overnight Shipping Label — Add $35.00</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ap_outbound_courier" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Outbound Safe Delivery Speed <span style="color: #ef4444;">*</span></label>
            <select id="ap_outbound_courier" required class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
                <option value="standard" selected>Standard Secure Return Courier Tracker (Included)</option>
                <option value="intl-express">International Express Courier Outbound Delivery — Add $75.00</option>
            </select>
        </div>
    `;
}

// FAMILY 13A: APOSTILLE AUTHENTICATION SERVICES LAYOUT MATRIX (PART 3 OF 3)
function buildApostilleServicePart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SHIPPING DESTINATION RECORDS -->
        <div style="grid-column: span 2; margin-top: 8px;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Outbound Final Delivery Shipping Address</span>
                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="ap_shipping_street" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Shipping Street Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ap_shipping_street" required placeholder="Street Name and Number, Suite, Apt, Unit" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ap_shipping')">
                </div>
                <div style="grid-column: span 2; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; box-sizing: border-box;">
                    <div>
                        <label for="ap_shipping_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="ap_shipping_city" required placeholder="City" class="wizard-input-field">
                    </div>
                    <div>
                        <label for="ap_shipping_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                        <select id="ap_shipping_state" required class="wizard-input-field" style="font-weight: 600;">
                            ${stateDropdownOptionsHtml}
                        </select>
                    </div>
                    <div>
                        <label for="ap_shipping_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                        <input type="text" id="ap_shipping_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                    </div>
                </div>
            </div>
        </div>

        <!-- SECTION 5: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Additional Provisions & Special Instructions</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ap_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Handling Notes</label>
            <textarea id="ap_provisions" placeholder="Detail any explicit legalization criteria, translator dependencies, or timing constraints needed for your international application..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER APOSTILLE AUTHENTICATION SERVICES ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildApostilleServiceForm(stateDropdownOptionsHtml = "") {
    return buildApostilleServicePart1(stateDropdownOptionsHtml) +
           buildApostilleServicePart2(stateDropdownOptionsHtml) +
           buildApostilleServicePart3(stateDropdownOptionsHtml);
}

// FAMILY 14A: CLIA CERTIFICATE REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildCliaCertificatePart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS A CLIA CERTIFICATE? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Clinical Laboratory Improvement Amendments Compliance</strong>
            A CLIA Certificate is a federal requirement administered by CMS (Centers for Medicare & Medicaid Services) for any facility performing testing on human specimens for health assessment, diagnostic mapping, or treatment protocols. Operating a diagnostic center, workplace toxicity screening line, or clinical lab requires strict credential alignment to avoid immediate federal statutory closure and structural enforcement.
        </div>

        <!-- SECTION 1: LABORATORY IDENTIFICATION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Laboratory Identification Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="clia_lab_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Laboratory Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="clia_lab_name" required placeholder="Legal business or corporate facility name exactly as registered" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="clia_facility_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Physical Facility Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="clia_facility_street" required placeholder="Street Name and Number, Suite, Room, Lab Number" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'clia_facility')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="clia_facility_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="clia_facility_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="clia_facility_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="clia_facility_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="clia_facility_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="clia_facility_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 2: FACILITY CLASSIFICATION PARAMETERS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Facility Classification & Certificate Selection</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="clia_certificate_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Requested Certificate Type <span style="color: #ef4444;">*</span></label>
            <select id="clia_certificate_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Certificate Type...</option>
                <option value="waiver">Certificate of Waiver (Simple, low-risk tests e.g., blood glucose, pregnancy strips)</option>
                <option value="ppm">Certificate for Provider-Performed Microscopy (PPM procedures)</option>
                <option value="compliance">Certificate of Compliance (Moderate to high complexity testing inspections)</option>
                <option value="accreditation">Certificate of Accreditation (Evaluated by private non-profit organizations)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="clia_facility_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Laboratory Facility Classification <span style="color: #ef4444;">*</span></label>
            <select id="clia_facility_type" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleCliaFacilityOtherSpecificationVisibility(this.value)">
                <option value="" disabled selected>Select Facility Category...</option>
                <option value="physician-office">Physician Office Laboratory (POL)</option>
                <option value="clinic">Independent Clinic / Urgent Care Center</option>
                <option value="hospital">Hospital Testing Division</option>
                <option value="pharmacy">Retail Pharmacy Screening Station</option>
                <option value="mobile">Mobile Testing Unit / Temporary Health Site</option>
                <option value="other">Other Laboratory Category (Specify below)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Other Facility Category Description -->
        <div id="clia_facility_other_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none; margin-top: 8px;">
            <label for="clia_facility_other_text" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify facility classification: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="clia_facility_other_text" placeholder="e.g., Corporate workplace wellness screening suite, forensic fluid center..." class="wizard-input-field">
        </div>
    `;
}

// FAMILY 14A: CLIA CERTIFICATE REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildCliaCertificatePart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: ADMINISTRATIVE CONTACT & DIRECTOR REGISTRY -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Laboratory Director & Contact Registry</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Federal law mandates the declaration of an authorized Laboratory Director responsible for analytical quality metrics.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="clia_director_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Full Legal Name of Laboratory Director <span style="color: #ef4444;">*</span></label>
            <input type="text" id="clia_director_name" required placeholder="First and Last Legal Name (MD, DO, PhD, or qualified operator)" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="clia_director_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Director / Admin Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="clia_director_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="clia_director_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Director / Admin Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="clia_director_email" required placeholder="director@labname.com" class="wizard-input-field">
        </div>

        <!-- SECTION 4: TESTING VOLUMES & FISCAL PARAMETERS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Analytical Volume Estimates</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="clia_estimated_annual_tests" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Estimated Total Annual Test Volume <span style="color: #ef4444;">*</span></label>
            <input type="number" id="clia_estimated_annual_tests" required placeholder="e.g. 5000" min="0" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="clia_tax_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Tax Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="clia_tax_id" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Please provide a valid 9-digit format (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>
    `;
}


// FAMILY 14A: CLIA CERTIFICATE REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildCliaCertificatePart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: OPERATIONAL SCHEDULE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Facility Operating Schedule</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="clia_operating_hours" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Laboratory Operating Hours <span style="color: #ef4444;">*</span></label>
            <input type="text" id="clia_operating_hours" required placeholder="e.g., Mon-Fri 8:00 AM - 5:00 PM, Sat Closed" class="wizard-input-field">
        </div>

        <!-- SECTION 6: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Additional Provisions & State Specific Parameters</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="clia_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Directives or Multi-Site Exceptions</label>
            <textarea id="clia_provisions" placeholder="Detail any regional director multi-site exemptions, specialty menu criteria, or explicit processing conditions required on your CMS-116 CLIA application packet..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER CLIA CERTIFICATE APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildCliaCertificateForm(stateDropdownOptionsHtml = "") {
    return buildCliaCertificatePart1(stateDropdownOptionsHtml) +
           buildCliaCertificatePart2(stateDropdownOptionsHtml) +
           buildCliaCertificatePart3(stateDropdownOptionsHtml);
}


// FAMILY 15A: FEDERAL INCOME TAX FILING LAYOUT MATRIX (PART 1 OF 3)
function buildFederalIncomeTaxFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: FEDERAL INCOME TAX FILING -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Federal Corporate Tax Filing Compliance</strong>
            All registered business entities must file an annual federal income tax return with the Internal Revenue Service (IRS), regardless of whether the business generated active revenue. The specific return layout and filing milestones depend directly on your formal IRS tax classification (e.g., Form 1065 for partnerships, Form 1120 for C-corporations, or Form 1120-S for S-corporations).
        </div>

        <!-- SECTION 1: COMPANY TAX ID PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Company Tax ID Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fed_tax_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fed_tax_legal_name" required placeholder="Enter company name exactly as registered with the IRS / State" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fed_tax_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Please provide a valid 9-digit format (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_classification" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Tax Classification <span style="color: #ef4444;">*</span></label>
            <select id="fed_tax_classification" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select IRS Return Profile...</option>
                <option value="sole_prop_1040">Sole Proprietorship / Single-Member LLC (Schedule C / Form 1040)</option>
                <option value="partnership_1065">Partnership / Multi-Member LLC (Form 1065)</option>
                <option value="s_corp_1120s">S-Corporation Election (Form 1120-S)</option>
                <option value="c_corp_1120">C-Corporation (Form 1120)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fed_tax_principal_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fed_tax_principal_street" required placeholder="Street address, suite, unit (No P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fed_tax_principal')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="fed_tax_principal_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fed_tax_principal_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="fed_tax_principal_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="fed_tax_principal_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="fed_tax_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fed_tax_principal_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>
    `;
}

// FAMILY 15A: FEDERAL INCOME TAX FILING LAYOUT MATRIX (PART 2 OF 5)
function buildFederalIncomeTaxFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: FINANCIAL LEDGER DATA -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Gross Financial Ledger Estimates</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide baseline financial estimates for the targeted fiscal tax year to assign your audit scope mapping metrics.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_gross_receipts" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Gross Receipts / Total Sales ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="fed_tax_gross_receipts" required placeholder="0.00" min="0" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_gross_expenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Deductible Expenses ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="fed_tax_gross_expenses" required placeholder="0.00" min="0" class="wizard-input-field">
        </div>

        <!-- SECTION 3: ACCOUNTING METHODOLOGY -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Accounting Methodology & Target Parameters</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_accounting_method" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Accounting Method <span style="color: #ef4444;">*</span></label>
            <select id="fed_tax_accounting_method" required class="wizard-input-field" style="font-weight: 600;">
                <option value="cash" selected>Cash Method (Recognize income when received, expenses when paid)</option>
                <option value="accrual">Accrual Method (Recognize transactions when they occur regardless of payment)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_has_extension" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Is an IRS Extension Form 7004 in Effect? <span style="color: #ef4444;">*</span></label>
            <select id="fed_tax_has_extension" required class="wizard-input-field" style="font-weight: 600;">
                <option value="no" selected>No, standard statutory filing deadline parameters apply</option>
                <option value="yes">Yes, a valid extension has been filed and processed by the IRS</option>
            </select>
        </div>
    `;
}

// FAMILY 15A: FEDERAL INCOME TAX FILING LAYOUT MATRIX (PART 3 OF 5)
function buildFederalIncomeTaxFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: ASSETS & INVENTORY SCHEDULE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Assets & Inventory Schedule</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_has_inventory" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Does Business Maintain Physical Inventory? <span style="color: #ef4444;">*</span></label>
            <select id="fed_tax_has_inventory" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleFederalTaxInventoryCostVisibility(this.value)">
                <option value="no" selected>No physical inventory tracking required (Service oriented business)</option>
                <option value="yes">Yes, inventory values are maintained (Requires Cost of Goods Sold calculations)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Inventory Accounting Details -->
        <div id="fed_tax_inventory_wrapper" class="wizard-input-group" style="grid-column: span 1; display: none;">
            <label for="fed_tax_cogs_value" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Approximate Cost of Goods Sold ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="fed_tax_cogs_value" placeholder="0.00" min="0" class="wizard-input-field">
        </div>

        <!-- SECTION 5: INTERNATIONAL OPERATIONS CHECK -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. International Accounts & Foreign Transactions</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fed_tax_foreign_accounts" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Did this entity hold any interest in foreign financial accounts or assets? <span style="color: #ef4444;">*</span></label>
            <select id="fed_tax_foreign_accounts" required class="wizard-input-field" style="font-weight: 600;">
                <option value="no" selected>No foreign transaction layers, overseas bank accounts, or asset registries</option>
                <option value="yes">Yes, foreign financial assets or accounts exist (Requires FBAR / Form 8938 tracking)</option>
            </select>
        </div>
    `;
}


// FAMILY 15A: FEDERAL INCOME TAX FILING LAYOUT MATRIX (PART 4 OF 5)
function buildFederalIncomeTaxFormPart4(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: MANDATORY FINANCIAL STATEMENT UPLOADS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Financial Documentation & Reconciliation Packets</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Please attach your complete bookkeeping data nodes below to authorize CPA preparation and verification routines:</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_file_pnl" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Profit & Loss Statement (P&L) <span style="color: #ef4444;">*</span></label>
            <input type="file" id="fed_tax_file_pnl" required class="wizard-input-field" accept=".pdf,.xls,.xlsx,.csv,image/*" style="padding: 8px; background: #ffffff;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fed_tax_file_balance_sheet" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Year-End Balance Sheet <span style="color: #ef4444;">*</span></label>
            <input type="file" id="fed_tax_file_balance_sheet" required class="wizard-input-field" accept=".pdf,.xls,.xlsx,.csv,image/*" style="padding: 8px; background: #ffffff;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fed_tax_file_prior_return" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Copy of Prior Year Federal Tax Return (If Applicable)</label>
            <input type="file" id="fed_tax_file_prior_return" class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff;">
        </div>
    `;
}


// FAMILY 15A: FEDERAL INCOME TAX FILING LAYOUT MATRIX (PART 5 OF 5)
function buildFederalIncomeTaxFormPart5(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 7: ADDITIONAL PROVISIONS & DIRECTIVES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">7. Special Directives & Disclosures</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fed_tax_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Tax Instructions or Disclosure Notes</label>
            <textarea id="fed_tax_provisions" placeholder="Detail any unique transaction layers, asset depreciations (Section 179), state tax bridge connections, or specific CPA handling directives..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER FEDERAL INCOME TAX APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildFederalIncomeTaxForm(stateDropdownOptionsHtml = "") {
    return buildFederalIncomeTaxFormPart1(stateDropdownOptionsHtml) +
           buildFederalIncomeTaxFormPart2(stateDropdownOptionsHtml) +
           buildFederalIncomeTaxFormPart3(stateDropdownOptionsHtml) +
           buildFederalIncomeTaxFormPart4(stateDropdownOptionsHtml) +
           buildFederalIncomeTaxFormPart5(stateDropdownOptionsHtml);
}


// FAMILY 16A: STATE INCOME TAX FILING LAYOUT MATRIX (PART 1 OF 3)
function buildStateIncomeTaxFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: STATE INCOME TAX FILING -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> State Corporate Tax Filing Compliance</strong>
            State income tax obligations vary drastically based on your primary jurisdiction and physical footprint nexus. This layout automatically syncs with your federal data inputs to reduce manual entry errors, while offering targeted parameters for decoupled state deductions, municipal state apportionments, and local adjustments.
        </div>

        <!-- SECTION 1: JURISDICTION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. State Tax Jurisdiction Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="state_tax_target_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Jurisdiction State <span style="color: #ef4444;">*</span></label>
            <select id="state_tax_target_state" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleStateTaxPtetWorkflow(this.value)">
                <option value="" disabled selected>Select Taxing State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="state_tax_id_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State Tax ID / Employer ID Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="state_tax_id_number" required placeholder="Enter State Revenue ID" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            Tax Classification Wrapper <span style="color: #ef4444;">*</span></label>
            
                <option value="" disabled selected>Select Structure Style...</option>
                <option value="pass-through">Pass-Through Entity (LLC / Partnership / S-Corp)</option>
                <option value="c-corp">C-Corporation (Form 1120 / State Corporate Return)</option>
                <option value="sole-prop">Sole Proprietorship / Single-Member LLC</option>
            </select>
        </div>
    `;
}


// FAMILY 16A: STATE INCOME TAX FILING LAYOUT MATRIX (PART 2 OF 5)
function buildStateIncomeTaxFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: AUTOMATED LEDGER SYNC ARCHITECTURE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Gross Financial Ledger Extraction</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The system automatically pulls your values from local storage cache memory. Use the secondary inputs to state decoupled modifications.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="state_tax_gross_receipts" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Extracted Gross Receipts ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="state_tax_gross_receipts" required placeholder="0.00" min="0" class="wizard-input-field" onfocus="executeStateTaxAutomatedCacheSync('fed_tax_gross_receipts', this)">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="state_tax_gross_expenses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Extracted Gross Expenses ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="state_tax_gross_expenses" required placeholder="0.00" min="0" class="wizard-input-field" onfocus="executeStateTaxAutomatedCacheSync('fed_tax_gross_expenses', this)">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="state_tax_decoupled_modifications" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State-Specific Decoupled Adjustments / Add-Backs ($)</label>
            <input type="number" id="state_tax_decoupled_modifications" value="0" placeholder="e.g., State tax depreciation differences, municipal bond additions" class="wizard-input-field">
        </div>

        <!-- SECTION 3: PASS-THROUGH ENTITY TAX (PTET) SELECTION -->
        <div id="state_tax_ptet_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px; margin-top: 16px;">
            <div style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Pass-Through Entity Tax (PTET) Matrix</h3>
            </div>
            <div class="wizard-input-group" style="margin: 0; width: 100%;">
                <label for="state_tax_ptet_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Would you like to elect into the state-specific Pass-Through Entity Tax (PTET)? <span style="color: #ef4444;">*</span></label>
                <select id="state_tax_ptet_choice" class="wizard-input-field" style="font-weight: 600;">
                    <option value="no" selected>No, do not execute PTET election (Income flows directly to partner personal filings)</option>
                    <option value="yes">Yes, execute state PTET election (Entity pays state tax directly to yield a federal deduction hedge)</option>
                </select>
            </div>
        </div>
    `;
}

// FAMILY 16A: STATE INCOME TAX FILING LAYOUT MATRIX (PART 3 OF 5)
function buildStateIncomeTaxFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: APPORTIONMENT FACTORS & NEXUS ALLOCATIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Apportionment Factors & Nexus Footprint</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="state_tax_is_multistate" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Does the business operate in multiple states? <span style="color: #ef4444;">*</span></label>
            <select id="state_tax_is_multistate" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleStateTaxApportionmentVisibility(this.value)">
                <option value="no" selected>No, 100% of revenue and operations are single-state localized</option>
                <option value="yes">Yes, multi-state presence exists (Requires revenue apportionment splitting)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Multi-State Apportionment Allocation Percentage -->
        <div id="state_tax_apportionment_wrapper" class="wizard-input-group" style="grid-column: span 1; display: none;">
            <label for="state_tax_apportionment_percentage" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Target State Apportionment Percentage (%) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="state_tax_apportionment_percentage" placeholder="e.g., 45.50" min="0" max="100" step="0.01" class="wizard-input-field">
        </div>
    `;
}


// FAMILY 16A: STATE INCOME TAX FILING LAYOUT MATRIX (PART 4 OF 5)
function buildStateIncomeTaxFormPart4(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: REQUIRED STATE-LEVEL DOCUMENTATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. State Tax Verification Documentation</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Please attach your matching state ledger reports or processed federal summaries to synchronize local tax packets:</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="state_tax_file_nexus" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">State Revenue Allocation Report / Apportionment Ledger</label>
            <input type="file" id="state_tax_file_nexus" class="wizard-input-field" accept=".pdf,.xls,.xlsx,.csv,image/*" style="padding: 8px; background: #ffffff;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="state_tax_file_franchise_summary" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Prior State Tax Return copy (If Applicable)</label>
            <input type="file" id="state_tax_file_franchise_summary" class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff;">
        </div>
    `;
}


// FAMILY 16A: STATE INCOME TAX FILING LAYOUT MATRIX (PART 5 OF 5)
function buildStateIncomeTaxFormPart5(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: ADDITIONAL PROVISIONS & DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. State Special Directives & Disclosures</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="state_tax_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special State Instructions or Local Nexus Disclosures</label>
            <textarea id="state_tax_provisions" placeholder="Detail any city/county tax allocations, active local job credits, state-level R&D exemptions, or custom filing notes..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER STATE INCOME TAX APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildStateIncomeTaxForm(stateDropdownOptionsHtml = "") {
    return buildStateIncomeTaxFormPart1(stateDropdownOptionsHtml) +
           buildStateIncomeTaxFormPart2(stateDropdownOptionsHtml) +
           buildStateIncomeTaxFormPart3(stateDropdownOptionsHtml) +
           buildStateIncomeTaxFormPart4(stateDropdownOptionsHtml) +
           buildStateIncomeTaxFormPart5(stateDropdownOptionsHtml);
}


// FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 1 OF 3)
function buildFranchiseTaxFilingFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: FRANCHISE TAX FILING -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Franchise Tax & Information Reporting Compliance</strong>
            Franchise tax is a fee charged by states for the privilege of incorporating or doing business within their borders. Unlike income tax, it is often calculated based on capital stock values, gross margins, or flat baseline minimums, and frequently mandates the simultaneously filed execution of a Public Information Report (PIR) to sustain entity standing.
        </div>

        <!-- SECTION 1: FRANCHISE JURISDICTION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Franchise Jurisdiction Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fran_tax_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Jurisdiction State <span style="color: #ef4444;">*</span></label>
            <select id="fran_tax_state" required class="wizard-input-field" style="font-weight: 600;" onchange="executeFranchiseTaxStateParsingWorkflow(this.value)">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            State Entity Filing/Charter Number <span style="color: #ef4444;">*</span></label>
            
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fran_tax_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name <span style="color: #ef4444;">*</span></label>
            
        </div>
    `;
}

// FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 2 OF 5)
function buildFranchiseTaxFilingFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: FILING METHOD & THRESHOLD STATE LOGIC -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. State Threshold Selection</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Filing options adapt to your target state. Select your structural allocation threshold framework:</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fran_tax_method_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Category Basis <span style="color: #ef4444;">*</span></label>
            <select id="fran_tax_method_type" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleFranchiseTaxThresholdInputFieldsVisibility(this.value)">
                <option value="flat" selected>Fixed Minimum / Flat Fee Filing Matrix (e.g. Delaware baseline or low-revenue entities)</option>
                <option value="informational">No-Tax Threshold Declaration (e.g. Texas Public Information Report with zero balance liability)</option>
                <option value="margin-or-stock">Calculated Margin / Asset Share Basis (Requires explicit asset capitalization numbers)</option>
            </select>
        </div>

        <!-- Dynamic Threshold System Notification Banner -->
        <div id="fran_tax_state_notification_banner" style="grid-column: span 2; display: none; background: #fffbeb; border: 1px solid #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 6px; box-sizing: border-box;">
            <p id="fran_tax_state_banner_text" style="color: #b45309; font-size: 0.8rem; margin: 0; font-weight: 600; line-height: 1.4;"></p>
        </div>

        <!-- SECTION 3: ASSET & CAPITALIZATION PARAMETERS (CONDITIONAL) -->
        <div id="fran_tax_calculation_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 16px; margin-top: 8px;">
            <div style="border-bottom: 1px solid var(--border); padding-bottom: 8px;">
                <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Asset Capitalization Profile</h3>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div class="wizard-input-group" style="margin: 0;">
                    <label for="fran_tax_total_assets" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Total Gross Business Assets ($) <span style="color: #ef4444;">*</span></label>
                    <input type="number" id="fran_tax_total_assets" placeholder="0.00" min="0" class="wizard-input-field">
                </div>
                <div class="wizard-input-group" style="margin: 0;">
                    <label for="fran_tax_issued_shares" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Total Authorized / Issued Shares (Corporations Only)</label>
                    <input type="number" id="fran_tax_issued_shares" placeholder="e.g. 1500" min="0" class="wizard-input-field">
                </div>
            </div>
        </div>
    `;
}

// FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 3 OF 5)
function buildFranchiseTaxFilingFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: PUBLIC INFORMATION REPORT OFFICER REGISTRY -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Public Information Report Officer Registry</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State compliance offices require updated records of active officers, directors, managers, or managing members.</p>
        </div>

        <div id="fran_officer_container" style="grid-column: span 2; display: flex; flex-direction: column; gap: 16px; width: 100%;">
            <!-- Initial Principal Officer Dynamic Card Block -->
            <div class="member-record-card" id="fran_officer_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Principal Officer / Manager #1</span>
                
                <div class="wizard-input-group" style="margin: 0;">
                    <label for="fran_officer_name_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Full Legal Name <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fran_officer_name_1" required placeholder="First and Last Legal Name" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="fran_officer_title_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Official Corporate Title <span style="color: #ef4444;">*</span></label>
                    <select id="fran_officer_title_1" required class="wizard-input-field" style="font-weight: 600;">
                        <option value="President">President / CEO</option>
                        <option value="Secretary">Secretary</option>
                        <option value="Treasurer">Treasurer / CFO</option>
                        <option value="Manager">Manager / Managing Member</option>
                        <option value="Director">Director</option>
                    </select>
                </div>

                <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
                    <label for="fran_officer_street_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Mailing Address <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fran_officer_street_1" required placeholder="Street Address, Suite, Apt" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fran_officer_addr_1')">
                </div>
            </div>
        </div>

        <div style="grid-column: span 2; margin-top: 4px;">
            <button type="button" onclick="appendNewFranchiseTaxOfficerRow()" style="background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: fit-content;">
                <i class="fa-solid fa-plus"></i> Add Additional Officer / Member
            </button>
        </div>
    `;
}

// FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 4 OF 5)
function buildFranchiseTaxFilingFormPart4(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: FRANCHISE DOCUMENTATION MATRIX -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Required Franchise Verification Packets</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Please attach your state margin summaries, asset balancing metrics, or capitalization ledgers below:</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fran_file_ledger_summary" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Capital Stock / Gross Margin Ledger Summary <span style="color: #ef4444;">*</span></label>
            <input type="file" id="fran_file_ledger_summary" required class="wizard-input-field" accept=".pdf,.xls,.xlsx,.csv,image/*" style="padding: 8px; background: #ffffff;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="fran_file_prior_franchise" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Copy of Prior Franchise Tax Filing (If Applicable)</label>
            <input type="file" id="fran_file_prior_franchise" class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff;">
        </div>
    `;
}


// FAMILY 17A: FRANCHISE TAX FILING LAYOUT MATRIX (PART 5 OF 5)
function buildFranchiseTaxFilingFormPart5(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 6: ADDITIONAL PROVISIONS & DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special State Instructions & Disclosures</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="fran_tax_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Franchise Filing Notes or Instructions</label>
            <textarea id="fran_tax_provisions" placeholder="Detail any tier modifications, specialized ownership structures, zero-sole-prop exemptions, or custom processing notes relevant to your state franchise profile..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER FRANCHISE TAX APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildFranchiseTaxFilingForm(stateDropdownOptionsHtml = "") {
    return buildFranchiseTaxFilingFormPart1(stateDropdownOptionsHtml) +
           buildFranchiseTaxFilingFormPart2(stateDropdownOptionsHtml) +
           buildFranchiseTaxFilingFormPart3(stateDropdownOptionsHtml) +
           buildFranchiseTaxFilingFormPart4(stateDropdownOptionsHtml) +
           buildFranchiseTaxFilingFormPart5(stateDropdownOptionsHtml);
}


// FAMILY 18A: SALES TAX REGISTRATION LAYOUT MATRIX (PART 1 OF 5)
function buildSalesTaxRegistrationFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: SALES TAX REGISTRATION -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> State Sales & Use Tax Permit Standards</strong>
            A Sales Tax Permit (or Seller's Permit) is a legal authorization issued by state revenue agencies granting your business the right to collect and remit sales tax on taxable retail products or services. Engaging in commercial distribution paths without establishing an active state permit can invoke retroactive penalties and immediate statutory audit reviews.
        </div>

        <!-- SECTION 1: ESTABLISHMENT JURISDICTION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Nexus State Jurisdiction Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="st_target_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Target Permit State <span style="color: #ef4444;">*</span></label>
            <select id="st_target_state" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="st_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer ID (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="st_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="st_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Entity Name <span style="color: #ef4444;">*</span></label>
            
        </div>
    `;
}


// FAMILY 18A: SALES TAX REGISTRATION LAYOUT MATRIX (PART 2 OF 5)
function buildSalesTaxRegistrationFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: NEXUS FOOTPRINT TRACKER -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Sales Tax Nexus Baseline Mapping</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State tax departments evaluate whether your entity possesses physical or economic nexus triggers under modern commerce rules.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="st_nexus_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Nexus Connection Trigger <span style="color: #ef4444;">*</span></label>
            <select id="st_nexus_type" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSalesTaxNexusSubInputs(this.value)">
                <option value="" disabled selected>Select Trigger Type...</option>
                <option value="physical">Physical Nexus (In-state office, warehouse inventory, remote employee footprint)</option>
                <option value="economic">Economic Nexus (Passed gross revenue or transaction thresholds independently)</option>
                <option value="both">Both Structural Footprints (Physical operations coupled with targeted trade volumes)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="st_estimated_taxable_sales" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Estimated Monthly Taxable Sales ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="st_estimated_taxable_sales" required placeholder="0.00" min="0" class="wizard-input-field">
        </div>

        <!-- Hidden Conditional Container: Physical Nexus Attributes -->
        <div id="st_physical_nexus_wrapper" style="grid-column: span 2; display: none; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; grid-template-columns: 1fr 1fr; gap: 16px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Physical Asset/Footprint Attributes</span>
            
            <div class="wizard-input-group" style="margin: 0; grid-column: span 1;">
                <label for="st_inventory_location" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Inventory/Warehouse Location</label>
                <input type="text" id="st_inventory_location" placeholder="e.g., Fulfillment Center / Storage Depot Address" class="wizard-input-field">
            </div>
            
            <div class="wizard-input-group" style="margin: 0; grid-column: span 1;">
                <label for="st_in_state_employees" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Number of In-State Agents/Staff</label>
                <input type="number" id="st_in_state_employees" placeholder="0" min="0" class="wizard-input-field">
            </div>
        </div>

        <!-- Hidden Conditional Container: Economic Nexus Threshold Metrics -->
        <div id="st_economic_nexus_wrapper" style="grid-column: span 2; display: none; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; grid-template-columns: 1fr 1fr; gap: 16px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Economic Threshold Verification</span>
            
            <div class="wizard-input-group" style="margin: 0; grid-column: span 1;">
                <label for="st_prior_year_gross" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Prior Year Gross Sales in State ($) <span style="color: #ef4444;">*</span></label>
                <input type="number" id="st_prior_year_gross" placeholder="0.00" min="0" class="wizard-input-field">
            </div>
            
            <div class="wizard-input-group" style="margin: 0; grid-column: span 1;">
                <label for="st_prior_year_transactions" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Prior Year Local Transaction Count <span style="color: #ef4444;">*</span></label>
                <input type="number" id="st_prior_year_transactions" placeholder="e.g. 200" min="0" class="wizard-input-field">
            </div>
        </div>
    `;
}


// FAMILY 18A: SALES TAX REGISTRATION LAYOUT MATRIX (PART 3 OF 5)
function buildSalesTaxRegistrationFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: PRODUCT SOURCING & RESALE CERTIFICATES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Business Model Sourcing & Exemption Choices</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="st_product_source" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary E-Commerce Platform Sourcing <span style="color: #ef4444;">*</span></label>
            <select id="st_product_source" required class="wizard-input-field" style="font-weight: 600;">
                <option value="direct" selected>Direct Sales via Custom Website (Shopify, WooCommerce, Custom App)</option>
                <option value="marketplace">Marketplace Only Facilitator (Amazon, eBay, Etsy, Walmart)</option>
                <option value="hybrid">Hybrid Approach (Both direct website checkouts and marketplace lines)</option>
                <option value="wholesale">Wholesale / B2B Commercial Contracts Profile</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="st_request_exemption_cert" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Request Resale Exemption Certificate? <span style="color: #ef4444;">*</span></label>
            <select id="st_request_exemption_cert" required class="wizard-input-field" style="font-weight: 600;">
                <option value="no" selected>No, I am only registering to collect and remit retail consumer taxes</option>
                <option value="yes">Yes, include Filings4u Resale Exemption Certificate Procurement — $45.00</option>
            </select>
        </div>
    `;
}


// FAMILY 18A: SALES TAX REGISTRATION LAYOUT MATRIX (PART 4 OF 5)
function buildSalesTaxRegistrationFormPart4(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: LOCATION DETAILS & DATA PACKETS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Physical Presence Verification</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Please supply your primary matching location street metrics and identification verification elements below:</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="st_location_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary In-State Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="st_location_street" required placeholder="Street address, suite, unit (Can match principal address if in-state)" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'st_location')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="st_location_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="st_location_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="st_location_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="st_location_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="st_location_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="st_location_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="st_file_owner_id" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Copy of Valid Owner / Officer Identification (Driver's License or Passport) <span style="color: #ef4444;">*</span></label>
            <input type="file" id="st_file_owner_id" required class="wizard-input-field" accept="image/*,.pdf" style="padding: 8px; background: #ffffff;">
        </div>
    `;
}

// FAMILY 18A: SALES TAX REGISTRATION LAYOUT MATRIX (PART 5 OF 5)
function buildSalesTaxRegistrationFormPart5(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Instructions & Disclosures</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="st_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Sales Tax Instructions or Local Ordinance Disclosures</label>
            <textarea id="st_provisions" placeholder="Detail any seasonal selling periods, localized marketplace accounts, specific product exemption classifications, or custom setup requests..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER SALES TAX REGISTRATION APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildSalesTaxRegistrationForm(stateDropdownOptionsHtml = "") {
    return buildSalesTaxRegistrationFormPart1(stateDropdownOptionsHtml) +
           buildSalesTaxRegistrationFormPart2(stateDropdownOptionsHtml) +
           buildSalesTaxRegistrationFormPart3(stateDropdownOptionsHtml) +
           buildSalesTaxRegistrationFormPart4(stateDropdownOptionsHtml) +
           buildSalesTaxRegistrationFormPart5(stateDropdownOptionsHtml);
}


// FAMILY 19A: PAYROLL TAX REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildPayrollTaxFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: PAYROLL TAX REGISTRATION -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Employer Payroll Tax Registration Compliance</strong>
            Hiring operational employees mandates immediate tax accounts registration across federal and state levels. Federal responsibilities require filing Form 941 (Quarterly Employer Return for Social Security and Medicare withholdings) or Form 944 (Annual), alongside Form 940 (Annual Federal Unemployment Tax Act - FUTA). State-level compliance requires establishing separate State Unemployment Tax Act (SUTA) and State Income Tax Withholding accounts to ensure operational standing.
        </div>

        <!-- SECTION 1: EMPLOYER BASELINE PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Employer Baseline Identification Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="pr_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Company Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="pr_legal_name" required placeholder="Enter company name exactly as registered with the IRS / State" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="pr_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer ID (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="pr_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="pr_primary_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Employment State <span style="color: #ef4444;">*</span></label>
            <select id="pr_primary_state" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <!-- SECTION 2: FILING FREQUENCY PARAMETERS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Operational Forecast & Filing Frequency</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="pr_first_wage_date" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date First Wages Paid / Expected <span style="color: #ef4444;">*</span></label>
            <input type="date" id="pr_first_wage_date" required class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="pr_filing_cycle" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Reporting Cycle Designation <span style="color: #ef4444;">*</span></label>
            <select id="pr_filing_cycle" required class="wizard-input-field" style="font-weight: 600;">
                <option value="941" selected>Form 941 (Standard Quarterly Return - Threshold passes $1,000 annual liability)</option>
                <option value="944">Form 944 (Annual Return Option - Small employers with under $1,000 expected liability)</option>
            </select>
        </div>
    `;
}


// FAMILY 19A: PAYROLL TAX REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildPayrollTaxFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: STAFFING VOLUME & ESTIMATED PAY-SCALE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Payroll Scaling & Staff Configuration</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide immediate employment metrics to establish your state-level quarterly deposit assignment frequencies.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="pr_employee_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Active W-2 Employees Currently Hired <span style="color: #ef4444;">*</span></label>
            <input type="number" id="pr_employee_count" required placeholder="0" min="1" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="pr_estimated_quarterly_wages" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Estimated Total Quarterly Gross Wages ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="pr_estimated_quarterly_wages" required placeholder="0.00" min="0" class="wizard-input-field">
        </div>

        <!-- SECTION 4: SUTA STATE ACCOUNTABILITY MAPPINGS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. SUTA State Unemployment Account Status</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State compliance requires linking existing reference IDs or directing Filings4u to construct new revenue accounts.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="pr_suta_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you have existing State SUTA / UI accounts? <span style="color: #ef4444;">*</span></label>
            <select id="pr_suta_status" required class="wizard-input-field" style="font-weight: 600;" onchange="togglePayrollTaxSutaFieldsVisibility(this.value)">
                <option value="new" selected>No, I need Filings4u to process and register new SUTA & State Withholding Tax accounts</option>
                <option value="existing">Yes, I already hold active state employer payroll tax account numbers</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Existing SUTA Identifiers -->
        <div id="pr_existing_suta_wrapper" style="grid-column: span 2; display: none; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; grid-template-columns: 1fr 1fr; gap: 16px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">State Employer ID Verification</span>
            
            <div class="wizard-input-group" style="margin: 0; grid-column: span 1;">
                <label for="pr_existing_suta_id" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">State Unemployment Insurance (SUTA) ID <span style="color: #ef4444;">*</span></label>
                <input type="text" id="pr_existing_suta_id" placeholder="Enter State SUTA Account Number" class="wizard-input-field">
            </div>
            
            <div class="wizard-input-group" style="margin: 0; grid-column: span 1;">
                <label for="pr_existing_withholding_id" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">State Income Tax Withholding ID <span style="color: #ef4444;">*</span></label>
                <input type="text" id="pr_existing_withholding_id" placeholder="Enter State Withholding Account Number" class="wizard-input-field">
            </div>
        </div>
    `;
}


// FAMILY 19A: PAYROLL TAX REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildPayrollTaxFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Instructions & Disclosures</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="pr_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Payroll Handling Notes or Multi-State Operations Details</label>
            <textarea id="pr_provisions" placeholder="Detail any specialized officer salary preferences, multi-state payroll distribution splits, non-resident remote employee parameters, or target accounting software sync paths..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER PAYROLL TAX REGISTRATION APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildPayrollTaxForm(stateDropdownOptionsHtml = "") {
    return buildPayrollTaxFormPart1(stateDropdownOptionsHtml) +
           buildPayrollTaxFormPart2(stateDropdownOptionsHtml) +
           buildPayrollTaxFormPart3(stateDropdownOptionsHtml);
}

// FAMILY 20A: HEAVY USE TAX (2290) LAYOUT MATRIX (PART 1 OF 3)
function buildHeavyUseTaxFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: HEAVY HIGHWAY VEHICLE USE TAX -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> IRS Form 2290 Compliance Mandates</strong>
            The Federal Heavy Highway Vehicle Use Tax (Form 2290) is an annual statutory tax levied on highway motor vehicles operating at a taxable gross weight of 55,000 pounds or more. 
            <span style="font-weight: 700; color: #ef4444;">⚠️ IRS Regulatory Shield:</span> The IRS strictly prohibits the use of Social Security Numbers (SSN) for Form 2290 processing. An official Employer Identification Number (EIN) is mandatory to generate your Schedule 1 stamped receipt.
        </div>

        <!-- SECTION 1: VEHICLE OPERATOR TAX ID PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Vehicle Operator Tax ID Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="hut_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name / Owner-Operator Title <span style="color: #ef4444;">*</span></label>
            <input type="text" id="hut_legal_name" required placeholder="Enter name exactly as registered on your IRS EIN assignment letter" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="hut_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="hut_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="IRS Regulations strictly require a valid 9-digit EIN (XX-XXXXXXX). SSNs are not accepted." class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="hut_registrant_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Base State of Registration <span style="color: #ef4444;">*</span></label>
            <select id="hut_registrant_state" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Base State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <!-- SECTION 2: TAXABLE PERIOD PARAMETERS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Taxable Period & First Use</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="hut_first_use_month" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Month of First Use on Public Highways <span style="color: #ef4444;">*</span></label>
            <select id="hut_first_use_month" required class="wizard-input-field" style="font-weight: 600;">
                <option value="July" selected>July (Standard Tax Year Beginning Month)</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="hut_tax_year" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Tax Year Period <span style="color: #ef4444;">*</span></label>
            <select id="hut_tax_year" required class="wizard-input-field" style="font-weight: 600;">
                <option value="2026-2027" selected>July 1, 2026 - June 30, 2027 (Current Filing Window)</option>
                <option value="2025-2026">July 1, 2025 - June 30, 2026 (Prior Period Renewal)</option>
            </select>
        </div>
    `;
}

// FAMILY 20A: HEAVY USE TAX (2290) LAYOUT MATRIX (PART 2 OF 3)
function buildHeavyUseTaxFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: DYNAMIC FLEET ALLOCATION LEDGER -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Fleet Configuration & Vehicle Identification Matrix</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State your primary commercial vehicle fleet parameters below. IRS tax indices apply per class weight brackets.</p>
        </div>

        <div id="hut_fleet_container" style="grid-column: span 2; display: flex; flex-direction: column; gap: 16px; width: 100%;">
            <!-- Initial Fleet Unit Entry Card Structure -->
            <div class="member-record-card" id="hut_vehicle_card_1" style="background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 2fr 1fr; gap: 16px;">
                <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 3;">Heavy Vehicle Asset Unit #1</span>
                
                <div class="wizard-input-group" style="margin: 0;">
                    <label for="hut_vin_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Vehicle Identification Number (VIN) <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="hut_vin_1" required placeholder="17-Digit Alpha-Numeric VIN" maxlength="17" style="font-family: monospace; text-transform: uppercase;" class="wizard-input-field">
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="hut_weight_category_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Taxable Gross Weight Class <span style="color: #ef4444;">*</span></label>
                    <select id="hut_weight_category_1" required class="wizard-input-field" style="font-weight: 600;">
                        <option value="A" selected>Category A: 55,000 to 55,999 lbs</option>
                        <option value="B">Category B: 56,000 to 56,999 lbs</option>
                        <option value="C">Category C: 57,000 to 57,999 lbs</option>
                        <option value="D">Category D: 58,000 to 58,999 lbs</option>
                        <option value="E">Category E: 59,000 to 59,999 lbs</option>
                        <option value="F">Category F: 60,000 to 60,999 lbs</option>
                        <option value="G">Category G: 61,000 to 61,999 lbs</option>
                        <option value="H">Category H: 62,000 to 62,999 lbs</option>
                        <option value="I">Category I: 63,000 to 63,999 lbs</option>
                        <option value="J">Category J: 64,000 to 64,999 lbs</option>
                        <option value="K">Category K: 65,000 to 65,999 lbs</option>
                        <option value="L">Category L: 66,000 to 66,999 lbs</option>
                        <option value="M">Category M: 67,000 to 67,999 lbs</option>
                        <option value="N">Category N: 68,000 to 68,999 lbs</option>
                        <option value="O">Category O: 69,000 to 69,999 lbs</option>
                        <option value="P">Category P: 70,000 to 70,999 lbs</option>
                        <option value="Q">Category Q: 71,000 to 71,999 lbs</option>
                        <option value="R">Category R: 72,000 to 72,999 lbs</option>
                        <option value="S">Category S: 73,000 to 73,999 lbs</option>
                        <option value="T">Category T: 74,000 to 74,999 lbs</option>
                        <option value="U">Category U: 75,000 lbs up to logging weight</option>
                        <option value="V">Category V: Over 75,000 lbs (Max Tax Bracket Rate)</option>
                    </select>
                </div>

                <div class="wizard-input-group" style="margin: 0;">
                    <label for="hut_is_logging_1" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Logging Vehicle? <span style="color: #ef4444;">*</span></label>
                    <select id="hut_is_logging_1" required class="wizard-input-field" style="font-weight: 600;">
                        <option value="no" selected>No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
            </div>
        </div>

        <div style="grid-column: span 2; margin-top: 4px;">
            <button type="button" onclick="appendNewHeavyUseTaxVehicleRow()" style="background: transparent; border: 1px dashed var(--primary); color: var(--primary); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; width: fit-content;">
                <i class="fa-solid fa-plus"></i> Add Additional Fleet Asset Unit
            </button>
        </div>

        <!-- SECTION 4: MILEAGE TAX SUSPENSION DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Statement of Mileage Tax Suspension</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="hut_suspension_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Are you claiming a low-mileage tax suspension? <span style="color: #ef4444;">*</span></label>
            <select id="hut_suspension_choice" required class="wizard-input-field" style="font-weight: 600;">
                <option value="no" selected>No, standard vehicle usage metrics apply (Exceeds 5,000 commercial miles or 7,500 agricultural miles)</option>
                <option value="yes">Yes, I certify this fleet unit will operate under 5,000 miles (7,500 for agricultural use) to request tax exemption suspension status</option>
            </select>
        </div>
    `;
}

// FAMILY 20A: HEAVY USE TAX (2290) LAYOUT MATRIX (PART 3 OF 3)
function buildHeavyUseTaxFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Disclosure</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="hut_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Fleet Instructions or Exemption Disclosures</label>
            <textarea id="hut_provisions" placeholder="Detail any agricultural classification variables, vehicle exchange credits, prior year statement adjustments, or custom processing notes relevant to your Form 2290 filing profile..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER HEAVY USE TAX (2290) APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildHeavyUseTaxForm(stateDropdownOptionsHtml = "") {
    return buildHeavyUseTaxFormPart1(stateDropdownOptionsHtml) +
           buildHeavyUseTaxFormPart2(stateDropdownOptionsHtml) +
           buildHeavyUseTaxFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 21A: CAGE CODE REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildCageCodeFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: CAGE CODE REGISTRATION -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Federal CAGE Code Procurement Backplane</strong>
            A Commercial and Government Entity (CAGE) Code is a specialized five-character identifier assigned by the Defense Logistics Agency (DLA). It is a mandatory structural parameter for corporate entities tracking federal grants, executing Department of Defense (DoD) procurement contracts, and securing facility clearances. 
            <span style="font-weight: 700; color: var(--primary);">⚡ Proxy Fulfillment Mode:</span> Filings4u acts as your official third-party proxy agent to prepare, validate, and execute this configuration sequence through the DLA and federal data backplanes.
        </div>

        <!-- SECTION 1: COMMERCIAL CONTRACTOR BASELINE PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Contractor Identification Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cage_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Entity Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cage_legal_name" required placeholder="Enter exact legal name matching state registration and IRS files" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cage_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cage_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cage_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
            <select id="cage_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cage_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Physical Facility Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cage_physical_street" required placeholder="Street Name and Number, Suite, Unit (No P.O. Boxes allowed by DLA)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\\\s]+" title="Please provide a valid physical address." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'cage_physical')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="cage_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="cage_physical_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="cage_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="cage_physical_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="cage_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="cage_physical_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 2: NAICS CLASSIFICATION LEDGER -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Core NAICS Classification Ledger</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Input your primary 6-digit North American Industry Classification System (NAICS) codes targeted for government procurement matches.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cage_primary_naics" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary 6-Digit NAICS Code <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cage_primary_naics" required placeholder="e.g., 541511 (Custom Computer Programming)" maxlength="6" pattern="[0-9]{6}" title="Please provide a valid 6-digit numerical NAICS code." style="font-family: monospace;" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cage_secondary_naics" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Secondary NAICS Code(s)</label>
            <input type="text" id="cage_secondary_naics" placeholder="e.g., 541512, 541611 (Comma separated if multiple)" class="wizard-input-field">
        </div>
    `;
}


// FAMILY 21A: CAGE CODE REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildCageCodeFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: OWNERSHIP & SECURITY PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Business Ownership & Security Profile</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The Defense Logistics Agency requests baseline data indicators to align federal security and sourcing layers.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cage_ownership_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Business Ownership Classification <span style="color: #ef4444;">*</span></label>
            <select id="cage_ownership_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="us-owned" selected>U.S. Owned and Operated Commercial Entity</option>
                <option value="foreign-owned">Foreign Owned Entity / International Parent Alliance</option>
                <option value="joint-venture">Joint Venture / Corporate Consortium Block</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cage_has_parent" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Does this entity have a legal Parent Company? <span style="color: #ef4444;">*</span></label>
            <select id="cage_has_parent" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleCageParentCompanyWrapperVisibility(this.value)">
                <option value="no" selected>No, this is an independent / standalone corporate structure</option>
                <option value="yes">Yes, this entity is a subsidiary of a parent holding enterprise</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Parent Company Core Identifiers -->
        <div id="cage_parent_company_wrapper" style="grid-column: span 2; display: none; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; grid-template-columns: 2fr 1fr; gap: 16px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Immediate Parent Entity Credentials</span>
            
            <div class="wizard-input-group" style="margin: 0;">
                <label for="cage_parent_legal_name" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Parent Company Legal Name <span style="color: #ef4444;">*</span></label>
                <input type="text" id="cage_parent_legal_name" placeholder="Official Parent Name" class="wizard-input-field">
            </div>
            
            <div class="wizard-input-group" style="margin: 0;">
                <label for="cage_parent_cage_code" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Parent CAGE Code (If Known)</label>
                <input type="text" id="cage_parent_cage_code" placeholder="e.g. 1ABC2" maxlength="5" style="font-family: monospace; text-transform: uppercase;" class="wizard-input-field">
            </div>
        </div>

        <!-- SECTION 4: PRODUCT/SERVICE CLASSIFICATION CODES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Product & Service Codes (PSC) Mapping</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cage_psc_codes" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Product and Service Codes (PSC) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cage_psc_codes" required placeholder="e.g. D302 (IT Systems Development), R408 (Program Management Support), Comma separated if multiple" class="wizard-input-field">
        </div>
    `;
}

// FAMILY 21A: CAGE CODE REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildCageCodeFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: FULFILLMENT POINTS OF CONTACT -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Government Point of Contact (POC)</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the designated administrative contact person for the Defense Logistics Agency (DLA) validation loops.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cage_poc_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="cage_poc_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cage_poc_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="cage_poc_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="cage_poc_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="cage_poc_email" required placeholder="poc@company.com" class="wizard-input-field">
        </div>

        <!-- SECTION 6: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special Clauses & Directives</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="cage_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Directives or Contract Reference Notes</label>
            <textarea id="cage_provisions" placeholder="Detail any immediate bidding deadlines, target defense contracts, pending SAM.gov exceptions, or proxy filing declarations required for your federal registration dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER CAGE CODE APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildCageCodeForm(stateDropdownOptionsHtml = "") {
    return buildCageCodeFormPart1(stateDropdownOptionsHtml) +
           buildCageCodeFormPart2(stateDropdownOptionsHtml) +
           buildCageCodeFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 22A: DUNS NUMBER REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildDunsNumberFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS A DUNS NUMBER? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Global Business Identity Standards</strong>
            The Data Universal Numbering System (DUNS) Number is a unique nine-digit global identifier developed by Dun & Bradstreet (D&B). It establishes your commercial business credit profile and serves as a vital verification link for international vendor onboarding, corporate credit tracking, and global supply chain compliance matching networks.
        </div>

        <!-- SECTION 1: COMPANY IDENTIFICATION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Legal Entity Identification</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="duns_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="duns_legal_name" required placeholder="Enter exact legal name matching state incorporation records" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="duns_trade_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">DBA / Trade Name (If Applicable)</label>
            <input type="text" id="duns_trade_name" placeholder="Assumed name under which you conduct business" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="duns_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer ID (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="duns_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="duns_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Physical Operations Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="duns_physical_street" required placeholder="Physical Location Address, Suite, Unit (No P.O. Boxes allowed by D&B)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\s]+" title="Please provide a valid physical address." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'duns_physical')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="duns_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="duns_physical_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="duns_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="duns_physical_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="duns_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="duns_physical_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 2: CORPORATE STRUCTURE BREAKDOWN -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Entity Classification</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            Legal Structure Classification <span style="color: #ef4444;">*</span></label>
            
                <option value="" disabled selected>Select Legal Structure...</option>
                <option value="llc">Limited Liability Company (LLC)</option>
                <option value="corporation">Corporation (Inc. / Corp.)</option>
                <option value="partnership">General or Limited Partnership</option>
                <option value="sole_prop">Sole Proprietorship / Individual Operator</option>
            </select>
        </div>
    `;
}


// FAMILY 22A: DUNS NUMBER REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildDunsNumberFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: OPERATIONAL SCALE PARAMETERS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Operational Metrics & Scale</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Dun & Bradstreet builds credit metrics using basic employee and location parameters.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="duns_employee_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Employees (Including Owners) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="duns_employee_count" required placeholder="1" min="1" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="duns_annual_revenue_bracket" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Estimated Annual Gross Revenue ($) <span style="color: #ef4444;">*</span></label>
            <select id="duns_annual_revenue_bracket" required class="wizard-input-field" style="font-weight: 600;">
                <option value="under_50k" selected>Under $50,000</option>
                <option value="50k_250k">$50,000 - $250,000</option>
                <option value="250k_1m">$250,000 - $1,000,000</option>
                <option value="over_1m">Over $1,000,000</option>
            </select>
        </div>

        <!-- SECTION 4: CORPORATE HIERARCHY MAPPINGS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Corporate Relationship Hierarchy</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="duns_hierarchy_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Location Operational Relationship <span style="color: #ef4444;">*</span></label>
            <select id="duns_hierarchy_type" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDunsParentCompanyVisibility(this.value)">
                <option value="standalone" selected>Standalone Location (Single entity with no subsidiary links)</option>
                <option value="branch">Branch Office (Parent organization holds alternative primary DUNS identifier)</option>
                <option value="subsidiary">Subsidiary Operation (Separate corporate entity controlled by a parent group)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Parent Corporate Records Registry -->
        <div id="duns_parent_wrapper" style="grid-column: span 2; display: none; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; grid-template-columns: 2fr 1fr; gap: 16px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2;">Ultimate Parent Organization Record Parameters</span>
            
            <div class="wizard-input-group" style="margin: 0;">
                <label for="duns_parent_legal_name" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Parent Company Legal Name <span style="color: #ef4444;">*</span></label>
                <input type="text" id="duns_parent_legal_name" placeholder="Official Corporation or Holding Title" class="wizard-input-field">
            </div>
            
            <div class="wizard-input-group" style="margin: 0;">
                <label for="duns_parent_country" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Parent Headquarter Country <span style="color: #ef4444;">*</span></label>
                <input type="text" id="duns_parent_country" placeholder="e.g. United States" class="wizard-input-field">
            </div>
        </div>
    `;
}


// FAMILY 22A: DUNS NUMBER REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildDunsNumberFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: PRINCIPAL EXECUTIVE CONTACT -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Principal Executive Officer</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Dun & Bradstreet lists a primary executive (Owner, President, or Managing Member) to verify corporate operational accountability.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="duns_executive_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Executive Officer Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="duns_executive_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="duns_executive_title" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Executive Title / Role <span style="color: #ef4444;">*</span></label>
            <input type="text" id="duns_executive_title" required placeholder="e.g., Managing Member, President, CEO, Owner" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="duns_executive_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Contact Phone <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="duns_executive_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <!-- SECTION 6: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special Filing Clauses</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="duns_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Instructions or Credit Match Notes</label>
            <textarea id="duns_provisions" placeholder="Detail any explicit credit tracking priorities, specialized trade vendor onboarding deadlines, or proxy filing parameters required for your Dun & Bradstreet company profile setup..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER DUNS NUMBER CONFIGURATION APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildDunsNumberForm(stateDropdownOptionsHtml = "") {
    return buildDunsNumberFormPart1(stateDropdownOptionsHtml) +
           buildDunsNumberFormPart2(stateDropdownOptionsHtml) +
           buildDunsNumberFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 23A: PROCUREMENT REGISTRATION SAM.GOV LAYOUT MATRIX (PART 1 OF 3)
function buildProcurementRegistrationFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: SAM.GOV PROCUREMENT REGISTRATION -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> System for Award Management (SAM.gov) Backplane</strong>
            Registration in the System for Award Management (SAM) is a strict federal requirement to bid on, secure, or receive payouts from federal government contracts, discretionary grants, and funding pools. This layout captures your business identifiers, financial banking nodes for EFT processing, and socioeconomic metrics to prepare an error-free procurement filing.
        </div>

        <!-- SECTION 1: ENTITY FOUNDATION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Contractor Identification Details</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sam_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Entity Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sam_legal_name" required placeholder="Enter exact legal name matching state registration and IRS data" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sam_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sam_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sam_uei_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">SAM Unique Entity ID (UEI) Status <span style="color: #ef4444;">*</span></label>
            <select id="sam_uei_status" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleSamUniqueEntityIdVisibility(this.value)">
                <option value="none" selected>No UEI Issued (Filings4u must obtain a brand-new UEI from GSA)</option>
                <option value="existing">Yes, I already hold a 12-character alpha-numeric SAM UEI code</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Existing SAM UEI Identifier -->
        <div id="sam_uei_code_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="sam_existing_uei" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Your 12-Character Unique Entity ID (UEI) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sam_existing_uei" placeholder="e.g., X234Y678Z1A2" maxlength="12" style="font-family: monospace; text-transform: uppercase;" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sam_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Physical Facility Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sam_physical_street" required placeholder="Street Name and Number, Suite, Unit (Must match your IRS profile precisely)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\s]+" title="Please provide a valid physical address." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'sam_physical')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="sam_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="sam_physical_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="sam_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="sam_physical_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="sam_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="sam_physical_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 2: CORE BUSINESS CLASSIFICATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Core Classification Codes</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sam_primary_naics" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary 6-Digit NAICS Code <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sam_primary_naics" required placeholder="e.g., 484121 (General Freight Trucking)" maxlength="6" pattern="[0-9]{6}" title="Please provide a valid 6-digit numerical NAICS code." style="font-family: monospace;" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sam_secondary_naics" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Secondary NAICS Codes</label>
            <input type="text" id="sam_secondary_naics" placeholder="e.g., 484122, 488510 (Comma separated)" class="wizard-input-field">
        </div>
    `;
}


// FAMILY 23A: PROCUREMENT REGISTRATION SAM.GOV LAYOUT MATRIX (PART 2 OF 3)
function buildProcurementRegistrationFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: FINANCIAL ELECTRONIC FUNDS TRANSFER PARAMETERS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Electronic Funds Transfer (EFT) Banking Profile</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The federal government remits all contract payments directly via EFT. Ensure this information matches your bank records exactly.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sam_bank_routing" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">9-Digit Routing Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sam_bank_routing" required placeholder="000000000" pattern="[0-9]{9}" title="Please provide a valid 9-digit routing layout." class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sam_bank_account" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Account Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sam_bank_account" required placeholder="Enter commercial checking account number" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sam_account_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Account Type <span style="color: #ef4444;">*</span></label>
            <select id="sam_account_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="checking" selected>Corporate / Business Checking Account</option>
                <option value="savings">Corporate / Business Savings Account</option>
            </select>
        </div>

        <!-- SECTION 4: SOCIOECONOMIC SET-ASIDE OPTIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Socioeconomic Classifications & Set-Asides</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Check all distinct socioeconomic categories that apply to maximize your visibility for special federal set-aside contracts.</p>
        </div>

        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="sam_class_wosb" value="wosb" style="margin-top: 3px;">
                <label for="sam_class_wosb" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Women-Owned Small Business (WOSB)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="sam_class_sdvosb" value="sdvosb" style="margin-top: 3px;">
                <label for="sam_class_sdvosb" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Service-Disabled Veteran-Owned (SDVOSB)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="sam_class_hubzone" value="hubzone" style="margin-top: 3px;">
                <label for="sam_class_hubzone" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">HUBZone Certified Small Business</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="sam_class_sdb" value="sdb" style="margin-top: 3px;">
                <label for="sam_class_sdb" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Small Disadvantaged Business (SDB / 8a)</label>
            </div>
        </div>
    `;
}

// FAMILY 23A: PROCUREMENT REGISTRATION SAM.GOV LAYOUT MATRIX (PART 3 OF 3)
function buildProcurementRegistrationFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: AUTHORIZED EXECUTIVE OFFICER POC -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Authorized Government Point of Contact (POC)</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the details of the company officer authorized to sign off on federal representations and certifications.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sam_poc_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="sam_poc_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sam_poc_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Direct Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="sam_poc_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="sam_poc_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">POC Government Communications Email <span style="color: #ef4444;">*</span></label>
            <input type="email" id="sam_poc_email" required placeholder="contracting@yourcompany.com" class="wizard-input-field">
        </div>

        <!-- SECTION 6: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special Clauses & Procurement Directives</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="sam_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Instructions or Active Solicitations Notes</label>
            </textarea>
        </div>
    `;
}

// 📦 MASTER SAM.GOV PROCUREMENT APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildProcurementRegistrationForm(stateDropdownOptionsHtml = "") {
    return buildProcurementRegistrationFormPart1(stateDropdownOptionsHtml) +
           buildProcurementRegistrationFormPart2(stateDropdownOptionsHtml) +
           buildProcurementRegistrationFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 24A: MINORITY BUSINESS ENTERPRISE (MBE) CERTIFICATION LAYOUT MATRIX (PART 1 OF 3)
function buildMinorityCertificateFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: MINORITY CERTIFICATE REGISTRATION -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Minority Business Enterprise (MBE) Certification Network</strong>
            Minority Business Enterprise (MBE) status unlocks exclusive corporate supplier diversity programs, targeted municipal set-aside contracts, and specialized institutional capital lanes. To achieve successful placement, the enterprise must prove it is at least 51% owned, managed, and controlled daily by one or more socioeconomically qualifying individuals.
        </div>

        <!-- SECTION 1: ENTERPRISE BASELINE IDENTIFICATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Company Profile Parameters</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="mbe_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Entity Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="mbe_legal_name" required placeholder="Enter exact legal name matching state organization documents" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="mbe_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer ID (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="mbe_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="mbe_state_of_formation" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">State of Formation <span style="color: #ef4444;">*</span></label>
            <select id="mbe_state_of_formation" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <!-- SECTION 2: AGENCY CERTIFICATION STREAM SELECTION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Program Oversight & Agency Track</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="mbe_certification_track" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Target Certification Framework Track <span style="color: #ef4444;">*</span></label>
            <select id="mbe_certification_track" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleMorphicMbeAgencySubInputs(this.value)">
                <option value="" disabled selected>Select Certification Oversight Network...</option>
                <option value="state-local">State / Local Government MBE Program (For municipal, county, and state public sector bids)</option>
                <option value="nmsdc">National Minority Supplier Development Council - NMSDC (Private corporate procurement connections)</option>
                <option value="federal-8a">Federal Small Disadvantaged Business Program (SBA 8(a) or matching tracks)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Specific Municipality/State Target Identifier -->
        <div id="mbe_state_agency_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="mbe_target_agency_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Target State Agency or Municipality Division Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="mbe_target_agency_name" placeholder="e.g., Texas Comptroller HUB Program, NYC Small Business Services MBE Registry..." class="wizard-input-field">
        </div>
    `;
}


// FAMILY 24A: MINORITY BUSINESS ENTERPRISE (MBE) CERTIFICATION LAYOUT MATRIX (PART 2 OF 3)
function buildMinorityCertificateFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: OWNERSHIP EQUITY MATRIX -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Minority Ownership Control Matrix</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Certifying boards audit equity percentages to confirm the business meets the minimum 51% minority-controlled threshold rule.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="mbe_qualifying_percentage" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Minority Ownership Share Percentage (%) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="mbe_qualifying_percentage" required placeholder="e.g. 51, 75, 100" min="51" max="100" class="wizard-input-field" style="border: 1px solid var(--navy); font-weight: 700;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="mbe_ethnic_group" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Socioeconomic Classification Category <span style="color: #ef4444;">*</span></label>
            <select id="mbe_ethnic_group" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Category...</option>
                <option value="african-american">African American</option>
                <option value="hispanic-american">Hispanic American</option>
                <option value="native-american">Native American / Indigenous Community</option>
                <option value="asian-pacific">Asian Pacific American</option>
                <option value="asian-subcontinent">Asian Subcontinent American</option>
            </select>
        </div>

        <!-- SECTION 4: SECURE DOCUMENT VALIDATION CHECKLIST GRID -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Secure Ownership Validation Checklist Grid</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Upload direct administrative verifications showing exact capitalization capitalization balances and layout structural control assignments.</p>
        </div>

        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; box-sizing: border-box;">
            <div class="wizard-input-group" style="margin: 0;">
                <label for="mbe_file_equity" style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Equity Ownership Proof (Stock Ledgers or Operating Agreement) <span style="color: #ef4444;">*</span></label>
                <input type="file" id="mbe_file_equity" required class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff;">
            </div>

            <div class="wizard-input-group" style="margin: 0;">
                <label for="mbe_file_citizenship" style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Ethnicity / Citizenship Verification (Birth Cert or Passport) <span style="color: #ef4444;">*</span></label>
                <input type="file" id="mbe_file_citizenship" required class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff;">
            </div>

            <div class="wizard-input-group" style="margin: 0;">
                <label for="mbe_file_financials" style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Recent Company Tax Returns or P&L Statement <span style="color: #ef4444;">*</span></label>
                <input type="file" id="mbe_file_financials" required class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff;">
            </div>

            <div class="wizard-input-group" style="margin: 0;">
                <label for="mbe_file_bylaws" style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: block; margin-bottom: 6px;">Articles of Organization / Corporate Bylaws <span style="color: #ef4444;">*</span></label>
                <input type="file" id="mbe_file_bylaws" required class="wizard-input-field" accept=".pdf,image/*" style="padding: 8px; background: #ffffff;">
            </div>
        </div>
    `;
}

// FAMILY 24A: MINORITY BUSINESS ENTERPRISE (MBE) CERTIFICATION LAYOUT MATRIX (PART 3 OF 3)
function buildMinorityCertificateFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: AUTHORIZED MANAGING EXECUTIVE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Authorized Minority Principal Officer</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the profile metrics for the principal minority shareholder or managing executive with primary daily operational signature control.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="mbe_officer_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Officer Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="mbe_officer_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="mbe_officer_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Officer Direct Phone <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="mbe_officer_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="mbe_officer_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Officer Contact Email <span style="color: #ef4444;">*</span></label>
            <input type="email" id="mbe_officer_email" required placeholder="officer@company.com" class="wizard-input-field">
        </div>

        <!-- SECTION 6: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special Filing Clauses & Structural Disclosures</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="mbe_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Instructions or Procurement Project Notes</label>
            <textarea id="mbe_provisions" placeholder="Detail any immediate corporate supplier diversity deadlines, target municipality bidding codes, or custom setup parameters required for your MBE diversity dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER MBE CERTIFICATION APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildMinorityCertificateForm(stateDropdownOptionsHtml = "") {
    return buildMinorityCertificateFormPart1(stateDropdownOptionsHtml) +
           buildMinorityCertificateFormPart2(stateDropdownOptionsHtml) +
           buildMinorityCertificateFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 25A: TRUCKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildTruckerAuthorityFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: TRUCKER AUTHORITY (MC / USDOT) -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> FMCSA Operating Authority (MC & USDOT Number) Mandates</strong>
            To operate as a for-hire interstate motor carrier transporting regulated commodities or passengers within the United States, you must obtain active Operating Authority from the Federal Motor Carrier Safety Administration (FMCSA). This application initiates the registration for your USDOT number, MC number, and sets up your mandatory 21-day federal protest period tracking.
        </div>

        <!-- SECTION 1: CARRIER BASELINE IDENTIFICATION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Motor Carrier Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ta_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Legal Business Name / Sole Proprietor Full Title <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ta_legal_name" required placeholder="Enter exact name registered with corporate state records or IRS files" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ta_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_base_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Base State of Operations <span style="color: #ef4444;">*</span></label>
            <select id="ta_base_state" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Base State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ta_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Place of Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ta_physical_street" required placeholder="Physical Address (FMCSA regulations strictly prohibit P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\s]+" title="Please provide a valid physical address." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ta_physical')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="ta_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ta_physical_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="ta_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="ta_physical_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="ta_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ta_physical_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>
    `;
}

// FAMILY 25A: TRUCKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildTruckerAuthorityFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: OPERATION CLASSIFICATION & BUSINESS MODEL -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Operation Classification & Power Unit Fleet Scaling</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide precise operational parameters. The FMCSA utilizes these classifications to index your structural safety auditing bracket.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_operation_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Operation Classification <span style="color: #ef4444;">*</span></label>
            <select id="ta_operation_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Operation Type...</option>
                <option value="auth-property">Authorized For-Hire Motor Carrier of Property (Except Household Goods)</option>
                <option value="auth-household">Authorized For-Hire Motor Carrier of Household Goods (Moving Services)</option>
                <option value="private-carrier">Private Motor Carrier (Transporting proprietary commercial asset inventory)</option>
                <option value="exempt-for-hire">Exempt For-Hire Motor Carrier (Transporting specific un-regulated raw commodities)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_operation_scope" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Geographical Scope of Operation <span style="color: #ef4444;">*</span></label>
            <select id="ta_operation_scope" required class="wizard-input-field" style="font-weight: 600;">
                <option value="interstate" selected>Interstate Commerce (Crossing state lines, international borders, or hauling point-to-point transit links)</option>
                <option value="intrastate">Intrastate Commerce Only (Operating strictly within boundaries of base state selection)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_power_units" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Number of Power Units (Trucks) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="ta_power_units" required placeholder="1" min="1" class="wizard-input-field" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_drivers_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Number of Drivers <span style="color: #ef4444;">*</span></label>
            <input type="number" id="ta_drivers_count" required placeholder="1" min="1" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_interstate_wages" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Are drivers CDL holders? <span style="color: #ef4444;">*</span></label>
            <select id="ta_interstate_wages" required class="wizard-input-field" style="font-weight: 600;">
                <option value="yes" selected>Yes, drivers operate commercial vehicles requiring a valid Class A/B CDL</option>
                <option value="no">No, fleet units fall completely under Non-CDL weight metrics (Under 26,001 lbs)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_hazmat_intent" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Will fleet transport Hazardous Materials? <span style="color: #ef4444;">*</span></label>
            <select id="ta_hazmat_intent" required class="wizard-input-field" style="font-weight: 600;">
                <option value="no" selected>No, explicitly zero hazardous cargo placements will be handled</option>
                <option value="yes">Yes, fleet transports placardable quantities of hazardous chemicals/materials</option>
            </select>
        </div>

        <!-- SECTION 3: REGULATED CARGO SPECTRUM MATRIX -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Regulated Cargo Spectrum Matrix</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Check every type of cargo classification your equipment profiles plan to haul or distribute (Check all that apply):</p>
        </div>

        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_1" value="general_freight" style="margin-top: 3px;">
                <label for="ta_cargo_1" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">General Freight / Dry Van Logistics</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_2" value="refrigerated" style="margin-top: 3px;">
                <label for="ta_cargo_2" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Refrigerated Food / Cold Chain Produce (Reefer)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_3" value="intermodal" style="margin-top: 3px;">
                <label_for="ta_cargo_3" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Intermodal Containers / Ocean Port Chassis</label_for=>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_4" value="motor_vehicles" style="margin-top: 3px;">
                <label for="ta_cargo_4" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Motor Vehicles Hauling / Auto Transport Car Carriers</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_5" value="machinery" style="margin-top: 3px;">
                <label for="ta_cargo_5" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Large Machinery / Flatbed Construction Equipment</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_6" value="building_materials" style="margin-top: 3px;">
                <label for="ta_cargo_6" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Building Materials / Lumber / Steel Coils</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_7" value="liquids_gases" style="margin-top: 3px;">
                <label for="ta_cargo_7" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Liquids / Gases (Tanker Truck Operations)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_8" value="livestock" style="margin-top: 3px;">
                <label for="ta_cargo_8" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Livestock / Live Animal Transportation</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_9" value="grain_feed" style="margin-top: 3px;">
                <label for="ta_cargo_9" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Grain, Feed, or Agricultural Bulk Commodities</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_10" value="chemicals" style="margin-top: 3px;">
                <label for="ta_cargo_10" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Non-Hazardous Chemicals or Industrial Compounded Fluids</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_11" value="garbage_refuse" style="margin-top: 3px;">
                <label for="ta_cargo_11" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Garbage, Refuse, or Commercial Waste Scraps</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="ta_cargo_12" value="household_goods" style="margin-top: 3px;">
                <label for="ta_cargo_12" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Household Goods (Moving Services / Brokerage Networks)</label>
            </div>
        </div>
    `;
}


// FAMILY 25A: TRUCKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildTruckerAuthorityFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: SAFETY ATTESTATION DETAILS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Safety Certification & Compliance Attestation</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The FMCSA mandates that carriers certify their explicit knowledge of Federal Motor Carrier Safety Regulations (FMCSRs).</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ta_safety_knowledge" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Do you certify that you have access to and system knowledge of the FMCSRs? <span style="color: #ef4444;">*</span></label>
            <select id="ta_safety_knowledge" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Attestation Option...</option>
                <option value="yes">Yes, I certify that I am familiar with the federal safety regulations and will maintain mandatory safety protocols</option>
                <option value="no">No, I require Filings4u to provide an orientation packet and compliance workbook package</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_safety_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Authorized Safety Official Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ta_safety_contact_name" required placeholder="First and Last Name of Authorized Officer" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ta_safety_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Contact Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="ta_safety_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <!-- SECTION 5: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Operational Notes</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ta_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Carrier Instructions or Fleet Notes</label>
            <textarea id="ta_provisions" placeholder="Detail any specific filing timelines, vehicle leasing arrangements, multi-state base plates, or custom proxy handling directives relative to your FMCSA operating authority dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER TRUCKER AUTHORITY APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildTruckerAuthorityForm(stateDropdownOptionsHtml = "") {
    return buildTruckerAuthorityFormPart1(stateDropdownOptionsHtml) +
           buildTruckerAuthorityFormPart2(stateDropdownOptionsHtml) +
           buildTruckerAuthorityFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 26A: BROKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildBrokerAuthorityFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: PROPERTY BROKER AUTHORITY -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> FMCSA Property Broker Authority (MC Number) Mandates</strong>
            To arrange the transportation of property or household goods for compensation by an authorized motor carrier, you must obtain a Property Broker License (Operating Authority) from the Federal Motor Carrier Safety Administration (FMCSA). Brokers are strictly logistics coordinators who do not own the transport vehicles or take physical custody of the cargo.
        </div>

        <!-- SECTION 1: BROKER BASELINE IDENTIFICATION PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Corporate Broker Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ba_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Legal Business Name / Entity Title <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ba_legal_name" required placeholder="Enter exact name registered with corporate state records or IRS files" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ba_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ba_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ba_base_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Base State of Operations <span style="color: #ef4444;">*</span></label>
            <select id="ba_base_state" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Base State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ba_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Principal Place of Business Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ba_physical_street" required placeholder="Physical Address (FMCSA regulations strictly prohibit P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\s]+" title="Please provide a valid physical address." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'ba_physical')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="ba_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="ba_physical_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="ba_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="ba_physical_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label_for="ba_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label_for=>
                    <input type="text" id="ba_physical_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 2: AUTHORITY SUB-TYPE CLASSIFICATIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Broker Classification Sub-Type</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ba_classification_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Logistics Broker Configuration Profile <span style="color: #ef4444;">*</span></label>
            <select id="ba_classification_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Broker Sub-Type...</option>
                <option value="property">Broker of Property (Except Household Goods - Standard commercial freight arrangements)</option>
                <option value="household-goods">Broker of Household Goods (Arranging consumer domestic moving and relocations)</option>
                <option value="both">Dual Classification (Configures logistics pathways for both general freight and household goods)</option>
            </select>
        </div>
    `;
}

// FAMILY 26A: BROKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildBrokerAuthorityFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: MANDATORY FEDERAL FINANCIAL GUARANTEE MATRIX -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Federal Financial Responsibility Mandate ($75,000 Guarantee)</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The FMCSA strictly mandates that all licensed property brokers maintain a continuous financial instrument of $75,000 to safely settle freight payment disputes.</p>
        </div>

        <!-- STRUCTURAL INSURANCE EXPLANATION TILES -->
        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; background: rgba(10, 31, 68, 0.01); box-sizing: border-box;">
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; font-size: 0.8rem; line-height: 1.45;">
                <strong style="color: var(--navy); display: block; margin-bottom: 6px;"><i class="fa-solid fa-shield-halved"></i> BMC-84 Broker Surety Bond</strong>
                An annual premium payment model requiring zero collateral locking. Issued through an authorized treasury-listed surety corporation, underwriting rates are assigned based on personal credit tier maps. This is the standard operational pathway preferred by modern corporate brokerages.
            </div>
            <div style="background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; font-size: 0.8rem; line-height: 1.45;">
                <strong style="color: var(--navy); display: block; margin-bottom: 6px;"><i class="fa-solid fa-building-columns"></i> BMC-85 Broker Trust Fund</strong>
                Requires an upfront cash deposition of the full $75,000 principal balance. This asset matrix is held securely inside a designated trust bank entity or escrow institution throughout the operational lifespan of your MC number, fully locking your liquidity.
            </div>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1; margin-top: 8px;">
            <label for="ba_bond_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Planned Security Choice <span style="color: #ef4444;">*</span></label>
            <select id="ba_bond_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="bmc-84" selected>BMC-84 Surety Bond (Annual Premium Risk Allocation)</option>
                <option value="bmc-85">BMC-85 Trust Fund ($75,000 Cash Escrow Settlement)</option>
                <option value="not-sure">Undecided / Reviewing Operational Capital</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1; margin-top: 8px;">
            <label for="ba_partner_quote_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Procure Partner Bond Quote? <span style="color: #ef4444;">*</span></label>
            <select id="ba_partner_quote_choice" required class="wizard-input-field" style="font-weight: 600; border: 1px solid var(--primary);">
                <option value="yes" selected>Yes, route my application data to Filings4u partners for a free, fast BMC-84 premium quote</option>
                <option value="no">No, I am utilizing an independent private bonding agent / market path</option>
            </select>
        </div>
    `;
}


// FAMILY 26A: BROKER AUTHORITY REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildBrokerAuthorityFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: AUTHORIZED PROCESS OFFICIAL -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Authorized Broker Representative</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the contact details for the primary legal representative authorized to sign off on federal logistics filings.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ba_officer_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Representative Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ba_officer_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ba_officer_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Direct Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="ba_officer_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ba_officer_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Corporate Communications Email <span style="color: #ef4444;">*</span></label>
            <input type="email" id="ba_officer_email" required placeholder="logistics@yourcompany.com" class="wizard-input-field">
        </div>

        <!-- SECTION 5: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Logistics Notes</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ba_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Brokerage Instructions or Setup Notes</label>
            <textarea id="ba_provisions" placeholder="Detail any immediate freight launching timelines, specialized cargo categories, pending corporate relationships, or custom proxy handling directives relative to your FMCSA broker authority registration..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER BROKER AUTHORITY APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildBrokerAuthorityForm(stateDropdownOptionsHtml = "") {
    return buildBrokerAuthorityFormPart1(stateDropdownOptionsHtml) +
           buildBrokerAuthorityFormPart2(stateDropdownOptionsHtml) +
           buildBrokerAuthorityFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 27A: SCAC CODE REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildScacCodeRegistrationFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS A SCAC CODE? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> National Motor Freight Traffic Association SCAC Backplane</strong>
            A Standard Carrier Alpha Code (SCAC) is a unique, mandatory two-to-four-letter code used to identify transportation companies across computerized tracking networks. It is a strict operational parameter required for border crossing systems (ACE/ACI), processing ocean container interchanges, billing federal military logistics, and integrating electronic data interchanges (EDI) with national freight accounts.
        </div>

        <!-- SECTION 1: CARRIER BASELINE PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Carrier Identity Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="scac_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="scac_legal_name" required placeholder="Enter exact legal name matching your USDOT profile and state files" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="scac_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="scac_usdot_number" required placeholder="Enter USDOT Number" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="scac_mc_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">MC / MX Number (If Applicable)</label>
            <input type="text" id="scac_mc_number" placeholder="e.g., MC-000000" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="scac_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Corporate Headquarter Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="scac_physical_street" required placeholder="Street Name and Number, Suite, Unit (Must match your primary FMCSA files)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\s]+" title="Please provide a valid physical address." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'scac_physical')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="scac_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="scac_physical_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="scac_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="scac_physical_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="scac_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="scac_physical_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 2: LINEAR CODE ASSIGNMENTS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Logistics Classification</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="scac_carrier_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Fleet Asset Operational Mode <span style="color: #ef4444;">*</span></label>
            <select id="scac_carrier_type" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Operational Mode...</option>
                <option value="motor-freight">Motor Common/Contract Carrier (Standard General Freight / Truckload)</option>
                <option value="intermodal">Intermodal Equipment Provider (Chassis / Container interchanges at rail/ocean hubs)</option>
                <option value="broker">Freight Forwarder / Property Brokerage Network</option>
                <option value="broker-carrier">Dual Mode (Operating equipment coupled with separate asset brokerage lines)</option>
            </select>
        </div>
    `;
}

// FAMILY 27A: SCAC CODE REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildScacCodeRegistrationFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: ALPHA CODE CONFIGURATION OPTIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Code Prefixes & Integration Channels</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The NMFTA regulates code assignments. Input your primary software integration goals or preferred alpha character paths below.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="scac_preferred_letters" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Preferred 2-4 Letter Alpha Code Prefix</label>
            <input type="text" id="scac_preferred_letters" placeholder="e.g., ABCD (Subject to NMFTA availability maps)" minlength="2" maxlength="4" style="font-family: monospace; text-transform: uppercase;" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="scac_integration_need" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary System Integration Channel <span style="color: #ef4444;">*</span></label>
            <select id="scac_integration_need" required class="wizard-input-field" style="font-weight: 600;">
                <option value="customs" selected>U.S. Customs Border Protection / ACE Portal Manifests</option>
                <option value="rail-ocean">Railroad / Ocean Port Intermodal Container Interchanges (UIIA)</option>
                <option value="government">Military Freight / Defense Logistics Agency (DLA) Billing Mappings</option>
                <option value="edi-commercial">Commercial EDI / Automated Shipper TMS Integration Layouts</option>
            </select>
        </div>

        <!-- SECTION 4: AUTHORIZED ADMINISTRATIVE PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Authorized Communications Contact</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="scac_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="scac_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="scac_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="scac_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="scac_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="scac_contact_email" required placeholder="safety@carriername.com" class="wizard-input-field">
        </div>
    `;
}

// FAMILY 27A: SCAC CODE REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildScacCodeRegistrationFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Registration Directives</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="scac_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Handling Notes or Integration Instructions</label>
            <textarea id="scac_provisions" placeholder="Detail any specific UIIA requirements, expedited customs deadlines, immediate carrier onboarding codes, or custom proxy handling directives relative to your NMFTA SCAC registration dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER SCAC CODE REGISTRATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildScacCodeRegistrationForm(stateDropdownOptionsHtml = "") {
    return buildScacCodeRegistrationFormPart1(stateDropdownOptionsHtml) +
           buildScacCodeRegistrationFormPart2(stateDropdownOptionsHtml) +
           buildScacCodeRegistrationFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 28A: DRIVER QUALIFICATION FILE LAYOUT MATRIX (PART 1 OF 3)
function buildDriverQualificationFileFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: DRIVER QUALIFICATION FILE -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> FMCSR Part 391 Driver Qualification (DQ) Mandates</strong>
            Under Federal Motor Carrier Safety Administration (FMCSA) regulations Part 391, every motor carrier must maintain a comprehensive Driver Qualification File (DQF) for each commercial motor vehicle driver they employ. This mandate applies to all operators of vehicles over 10,001 lbs, vehicles designed to carry 8+ passengers, or placardable hazmat shipments. Failing to maintain current DQ records results in immediate safety audit failures and severe regulatory fines.
        </div>

        <!-- SECTION 1: CARRIER COMPLIANCE PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Motor Carrier Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="dqf_carrier_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Motor Carrier Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="dqf_carrier_name" required placeholder="Enter company name exactly as registered on your USDOT portal" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dqf_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="dqf_usdot_number" required placeholder="e.g. 1234567" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dqf_file_purpose" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">File Procurement Scope <span style="color: #ef4444;">*</span></label>
            <select id="dqf_file_purpose" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleDqfFleetQuantityVisibility(this.value)">
                <option value="owner-operator" selected>Owner-Operator Setup (Single file tracking for company principal)</option>
                <option value="fleet-addition">Fleet Operator (Procuring new hire files for multiple drivers)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Fleet File Count Track -->
        <div id="dqf_fleet_count_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="dqf_total_files_needed" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Number of Driver Files Needed <span style="color: #ef4444;">*</span></label>
            <input type="number" id="dqf_total_files_needed" value="1" min="1" max="100" class="wizard-input-field" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
        </div>
    `;
}

// FAMILY 28A: DRIVER QUALIFICATION FILE LAYOUT MATRIX (PART 2 OF 3)
function buildDriverQualificationFileFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 2: PRIMARY DRIVER REGISTRY MATRIX -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Primary Driver Registry & Licensure Records</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide detailed identification history. FMCSR Part 391 requires verifiable multi-year history tracking for auditing validation.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="dqf_driver_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Driver Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="dqf_driver_name" required placeholder="First, Middle, and Last Name exactly as shown on license" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dqf_driver_dob" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Date of Birth <span style="color: #ef4444;">*</span></label>
            <input type="date" id="dqf_driver_dob" required class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dqf_license_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Commercial Driver's License (CDL) Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="dqf_license_number" required placeholder="Enter License Number" style="font-family: monospace;" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dqf_license_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Issuing State / Jurisdiction <span style="color: #ef4444;">*</span></label>
            <select id="dqf_license_state" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="dqf_med_card_expiry" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">DOT Medical Card Expiration Date <span style="color: #ef4444;">*</span></label>
            <input type="date" id="dqf_med_card_expiry" required class="wizard-input-field">
        </div>

        <!-- HIDDEN CONDITIONAL CONTAINER: EMPLOYMENT SEPARATIONS DETAILED ENTRY -->
        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 8px;">
            <div class="wizard-input-group" style="margin: 0;">
                <label for="dqf_mvr_required" style="font-size: 0.825rem; font-weight: 700; color: var(--navy);">Request 3-Year Motor Vehicle Record (MVR)? <span style="color: #ef4444;">*</span></label>
                <select id="dqf_mvr_required" required class="wizard-input-field" style="font-weight: 600;">
                    <option value="yes" selected>Yes, include certified state MVR procurement and annual review data logs — $25.00</option>
                    <option value="no">No, we maintain independent state MVR registry pulls internally</option>
                </select>
            </div>
            <div class="wizard-input-group" style="margin: 0;">
                <label for="dqf_hire_date" style="font-size: 0.825rem; font-weight: 700; color: var(--navy);">Driver Hire Date <span style="color: #ef4444;">*</span></label>
                <input type="date" id="dqf_hire_date" required class="wizard-input-field">
            </div>
        </div>
    `;
}

// FAMILY 28A: DRIVER QUALIFICATION FILE LAYOUT MATRIX (PART 3 OF 3)
function buildDriverQualificationFileFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: ADDITIONAL PROVISIONS & DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Special Compliance Notes & Directives</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="dqf_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special File Setup Instructions or Prior Employment Variances</label>
            <textarea id="dqf_provisions" placeholder="Detail any past safety violations disclosures, multi-state commercial license history, exemptions for seasonal agricultural operations, or specific fleet audit urgency tracking constraints..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER DRIVER QUALIFICATION FILE ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildDriverQualificationFileForm(stateDropdownOptionsHtml = "") {
    return buildDriverQualificationFileFormPart1(stateDropdownOptionsHtml) +
           buildDriverQualificationFileFormPart2(stateDropdownOptionsHtml) +
           buildDriverQualificationFileFormPart3(stateDropdownOptionsHtml);
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

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="boc_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Legal Company Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="boc_legal_name" required placeholder="Enter exact name registered with the FMCSA or corporate state records" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="boc_bundle_check" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Bundle Association <span style="color: #ef4444;">*</span></label>
            <select id="boc_bundle_check" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleBoc3AuthorityIdentifiersVisibility(this.value)">
                <option value="bundled" selected>Bundled Request (Processing simultaneously with my Trucker/Broker Authority application)</option>
                <option value="independent">Independent Order (I already have an active/pending USDOT or MC number)</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Independent Authority Operating Numbers -->
        <div id="boc_authority_nums_wrapper" style="grid-column: span 1; display: none; grid-template-columns: 1fr 1fr; gap: 16px; box-sizing: border-box;">
            <div class="wizard-input-group" style="margin: 0;">
                <label for="boc_usdot_number" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">USDOT Number <span style="color: #ef4444;">*</span></label>
                <input type="text" id="boc_usdot_number" placeholder="Enter USDOT #" class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="margin: 0;">
                <label for="boc_mc_number" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">MC / FF Number <span style="color: #ef4444;">*</span></label>
                <input type="text" id="boc_mc_number" placeholder="e.g. 000000" class="wizard-input-field">
            </div>
        </div>

        <!-- SECTION 2: FILING INTENT CLASSIFICATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Filing Intent Classification</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="boc_filing_intent" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Scope of Process Agent Designation <span style="color: #ef4444;">*</span></label>
            <select id="boc_filing_intent" required class="wizard-input-field" style="font-weight: 600;">
                <option value="new-blanket" selected>New Blanket Agent Designation (Establish comprehensive 50-state blanket process agent coverage)</option>
                <option value="amendment">Amending an Existing Profile (Update officer addresses or modify previous state-specific agents)</option>
            </select>
        </div>
    `;
}

// FAMILY 29A: PROCESS AGENT (BOC-3) FILING LAYOUT MATRIX (PART 2 OF 3)
function buildProcessAgentBoc3FormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: PRINCIPAL PLACE OF BUSINESS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Principal Place of Business Address</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">The FMCSA requires the physical headquarters address where legal notices can be routed.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="boc_physical_street" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Headquarters Street Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="boc_physical_street" required placeholder="Street address, suite, unit (FMCSA rules strictly prohibit P.O. Boxes)" pattern="[A-Za-z0-9\\\\s\\\\#\\\\-\\\\.\\\\,\\s]+" title="Please provide a valid physical address." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'boc_physical')">
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; width: 100%; box-sizing: border-box;">
                <div>
                    <label for="boc_physical_city" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="boc_physical_city" required placeholder="City" class="wizard-input-field">
                </div>
                <div>
                    <label for="boc_physical_state" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <select id="boc_physical_state" required class="wizard-input-field" style="font-weight: 600;">
                        ${stateDropdownOptionsHtml}
                    </select>
                </div>
                <div>
                    <label for="boc_physical_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="boc_physical_zip" required placeholder="Zip Code" style="font-family: monospace;" class="wizard-input-field">
                </div>
            </div>
        </div>

        <!-- SECTION 4: AUTHORIZED COMMUNICATIONS CONTACT -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Authorized Communications Contact</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="boc_contact_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Person Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="boc_contact_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="boc_contact_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="boc_contact_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="boc_contact_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contact Email Address <span style="color: #ef4444;">*</span></label>
            <input type="email" id="boc_contact_email" required placeholder="compliance@carrier.com" class="wizard-input-field">
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

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="boc_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Filing Instructions or Notes</label>
            <textarea id="boc_provisions" placeholder="Detail any immediate operating deadlines, expedited certificate processing needs, cross-border trucking nuances, or custom proxy handling directives relative to your FMCSA BOC-3 process agent dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER PROCESS AGENT (BOC-3) APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildProcessAgentBoc3Form(stateDropdownOptionsHtml = "") {
    return buildProcessAgentBoc3FormPart1(stateDropdownOptionsHtml) +
           buildProcessAgentBoc3FormPart2(stateDropdownOptionsHtml) +
           buildProcessAgentBoc3FormPart3(stateDropdownOptionsHtml);
}


// FAMILY 30A: IFTA REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildIftaRegistrationFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS IFTA REGISTRATION? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> International Fuel Tax Agreement (IFTA) Mandates</strong>
            IFTA is a cooperative agreement among US states and Canadian provinces to simplify the reporting of fuel use taxes by commercial motor carriers operating across multiple jurisdictions. An IFTA license and decals are required for any qualified motor vehicle that has two axles and a gross vehicle weight rating exceeding 26,000 lbs, has three or more axles regardless of weight, or is used in combination exceeding 26,000 lbs.
        </div>

        <!-- SECTION 1: CARRIER BASELINE PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Carrier Identity Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ifta_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ifta_legal_name" required placeholder="Enter exact legal name matching state registration and USDOT profile" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ifta_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ifta_usdot_number" required placeholder="Enter USDOT Number" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ifta_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Employer ID (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ifta_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <!-- SECTION 2: FILING INTENT CLASSIFICATION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Application Type & Order Intent</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ifta_order_intent" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Selection Scope <span style="color: #ef4444;">*</span></label>
            <select id="ifta_order_intent" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleIftaFulfillmentSubFields(this.value)">
                <option value="initial" selected>Initial Account Registration (Establish brand new state IFTA account and receive first decal set)</option>
                <option value="additional">Ordering Additional Decal Sets (Add extra fuel decal sets for newly acquired fleet units)</option>
            </select>
        </div>
    `;
}


// FAMILY 30A: IFTA REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildIftaRegistrationFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: INTERNATIONAL REGISTRATION PLAN (IRP) LINK INTERFACE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. International Registration Plan (IRP) Account Mapping</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">State tax jurisdictions mandate cross-referencing your base state apportioned commercial vehicle license plates (IRP credentials) before issuing fuel license permits.</p>
        </div>

        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
            <div class="wizard-input-group" style="margin: 0;">
                <label for="ifta_irp_account_num" style="font-size: 0.75rem; font-weight: 700; color: var(--navy); text-transform: uppercase; display: block; margin-bottom: 4px;">Apportioned IRP Account Number <span style="color: #ef4444;">*</span></label>
                <input type="text" id="ifta_irp_account_num" required placeholder="Enter Apportioned IRP Plate Account ID" class="wizard-input-field">
            </div>

            <div class="wizard-input-group" style="margin: 0;">
                <label for="ifta_base_jurisdiction" style="font-size: 0.75rem; font-weight: 700; color: var(--navy); text-transform: uppercase; display: block; margin-bottom: 4px;">IRP Base State <span style="color: #ef4444;">*</span></label>
                <select id="ifta_base_jurisdiction" required class="wizard-input-field" style="font-weight: 600;">
                    <option value="" disabled selected>Select Base State...</option>
                    ${stateDropdownOptionsHtml}
                </select>
            </div>
        </div>

        <!-- SECTION 4: FULFILLMENT DECAL COUNT VOLUME -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Decal Fleet Volumes</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">One set consists of two matching decals (one for each side of the vehicle cab).</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ifta_decal_sets_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Number of Decal Sets Requested <span style="color: #ef4444;">*</span></label>
            <input type="number" id="ifta_decal_sets_count" required value="1" min="1" max="250" class="wizard-input-field" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
        </div>
    `;
}

// FAMILY 30A: IFTA REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildIftaRegistrationFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: ADDITIONAL PROVISIONS & DISCLOSURES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Attestation</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ifta_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special IFTA Instructions or Fleet Notes</label>
            <textarea id="ifta_provisions" placeholder="Detail any immediate temporary trip permit deadlines, newly added tractor VIN profiles, out-of-state leasing arrangements, or custom proxy handling directives relative to your state IFTA registration dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER IFTA REGISTRATION APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildIftaRegistrationForm(stateDropdownOptionsHtml = "") {
    return buildIftaRegistrationFormPart1(stateDropdownOptionsHtml) +
           buildIftaRegistrationFormPart2(stateDropdownOptionsHtml) +
           buildIftaRegistrationFormPart3(stateDropdownOptionsHtml);
}



// EXTENDED GENERATOR LINKER FOR REMAINING FAMILIES (6 to 11)
function buildExtendedFamiliesFieldsLayoutHtml(familyKey) {
  if (familyKey === "regulatory") {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Regulatory &amp; Licensing Parameters</h3>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="reg_industry_cat" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Core Industry / Operational Classification <span style="color: #ef4444;">*</span></label>
        <input type="text" id="reg_industry_cat" required placeholder="e.g. Commercial Trucking, Medical Lab, Alcohol Retail" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="reg_compliance_summary" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Summary of Licensing / Compliance Issues <span style="color: #ef4444;">*</span></label>
        <textarea id="reg_compliance_summary" required placeholder="Provide a summary layout description of the active business filings, specific agency targets, or municipal permits requested..." rows="3" class="wizard-input-field" style="font-family: inherit; resize: vertical; padding: 14px;"></textarea>
      </div>
    `;
  }

  if (familyKey === "financial") {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Financial Taxonomy &amp; Registration Parameters</h3>
      </div>
      <div class="wizard-input-group">
        <label for="fin_responsible_party" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Responsible Party Legal Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fin_responsible_party" required placeholder="Jane Doe" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="fin_tax_closing_month" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Accounting Closing Month <span style="color: #ef4444;">*</span></label>
        <select id="fin_tax_closing_month" required class="wizard-input-field" style="font-weight: 600;">
          <option value="december" selected>December (Standard Calendar Year)</option>
          <option value="january">January</option><option value="february">February</option>
          <option value="march">March</option><option value="april">April</option>
          <option value="may">May</option><option value="june">June</option>
          <option value="july">July</option><option value="august">August</option>
          <option value="september">September</option><option value="october">October</option>
          <option value="november">November</option>
        </select>
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="fin_employee_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Estimated Count of Active Payroll Employees <span style="color: #ef4444;">*</span></label>
        <input type="number" id="fin_employee_count" required placeholder="0" min="0" class="wizard-input-field" style="font-family: monospace;">
      </div>
    `;
  }

  // Redirect remaining profiles to next pipeline segment block wrapper
  return typeof buildSecondaryExtendedFamiliesFieldsLayoutHtml === "function" ? buildSecondaryExtendedFamiliesFieldsLayoutHtml(familyKey) : "";
}

// SECONDARY EXTENDED GENERATOR LINKER FOR TAX, PROCUREMENT, INSURANCE & LOGISTICS
function buildSecondaryExtendedFamiliesFieldsLayoutHtml(familyKey) {
  if (familyKey === "tax-filing") {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Fiscal Tax Allocation Details</h3>
      </div>
      <div class="wizard-input-group">
        <label for="tax_fiscal_year" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Tax Year <span style="color: #ef4444;">*</span></label>
        <!-- FIXED: Standardized text input markup definition type constraint -->
        <input type="text" id="tax_fiscal_year" required placeholder="e.g. 2026" maxlength="4" style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="tax_ein_target" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Federal Tax ID / EIN <span style="color: #ef4444;">*</span></label>
        <input type="text" id="tax_ein_target" required placeholder="00-0000000" style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="tax_gross_revenue" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Projected/Actual Gross Annual Business Revenue <span style="color: #ef4444;">*</span></label>
        <input type="text" id="tax_gross_revenue" required placeholder="e.g. $150,000.00" style="font-family: monospace;" class="wizard-input-field">
      </div>
    `;
  }

  if (familyKey === "procurement") {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Federal Procurement Identifiers</h3>
      </div>
      <div class="wizard-input-group">
        <label for="pro_sam_uei" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">SAM.gov Unique Entity ID (UEI)</label>
        <input type="text" id="pro_sam_uei" placeholder="Enter 12-character UEI if active" maxlength="12" style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="pro_naics_sector" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary NAICS Sector Code <span style="color: #ef4444;">*</span></label>
        <input type="text" id="pro_naics_sector" required placeholder="e.g. 484121 (General Freight Trucking)" style="font-family: monospace;" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="pro_demographics" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Ownership Demographics (For Certification Slating)</label>
        <input type="text" id="pro_demographics" placeholder="e.g. Minority-Owned, Woman-Owned Small Business, Veteran-Owned" class="wizard-input-field">
      </div>
    `;
  }

  if (familyKey === "insurance") {
    return `
      <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
        <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Risk Exposure &amp; Liability Matrix</h3>
      </div>
      <div class="wizard-input-group">
        <label for="ins_coverage_limit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Requested Commercial Liability Limits <span style="color: #ef4444;">*</span></label>
        <select id="ins_coverage_limit" required class="wizard-input-field" style="font-weight: 600;">
          <option value="1m">$1,000,000 Combined Single Limit (Standard)</option>
          <option value="2m">$2,000,000 Aggregate Limits</option>
          <option value="750k">$750,000 Statutory Minimum Limits (Freight)</option>
        </select>
      </div>
      <div class="wizard-input-group">
        <label for="ins_prior_losses" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Prior Claims / History of Loss <span style="color: #ef4444;">*</span></label>
        <select id="ins_prior_losses" required class="wizard-input-field" style="font-weight: 600;">
          <option value="none" selected>No insurance claims within the past 36 months</option>
          <option value="has-claims">Active claims exist inside history window logs</option>
        </select>
      </div>
    `;
  }

  // DEFAULT TRUCKING & LOGISTICS LAYOUT MATRICES (Captures Remaining 10+ Logistics Services)
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 12px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Commercial FMCSA &amp; DOT Credentials</h3>
    </div>
    <div class="wizard-input-group">
      <label for="truck_usdot_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Index Number <span style="color: #ef4444;">*</span></label>
      <input type="text" id="truck_usdot_num" required placeholder="Enter active DOT number parameters" style="font-family: monospace;" class="wizard-input-field">
    </div>
    <div class="wizard-input-group">
      <label for="truck_mc_mx_num" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Operating Authority MC/MX Number</label>
      <input type="text" id="truck_mc_mx_num" placeholder="e.g. MC-000000" style="font-family: monospace;" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
Total Commercial Power Units/Vehicles Operated *`;}



// 🔘 DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS
function toggleDbaPermissionWorkflow(selectedValue) {
    const wrapper = document.getElementById("dba_permission_matrix_wrapper");
    if (!wrapper) return;
    wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
    
    // Clear pricing hooks if reset to "no"
    if (selectedValue === "no") {
        const consentSelect = document.getElementById("dba_has_consent");
        if (consentSelect) consentSelect.value = "yes";
        window.customSelectedDbaSearchServiceActive = false;
        if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
    }
}

function toggleDbaSearchProcurement(selectedValue) {
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedDbaSearchServiceActive = (selectedValue === "no-buy");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleDbaEinReasonField(selectedValue) {
    const wrapper = document.getElementById("dba_ein_reason_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
}

function toggleDbaLicenseWorkflow(selectedValue) {
    const customInputWrapper = document.getElementById("dba_custom_license_wrapper");
    if (customInputWrapper) customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedDbaLicenseAuditServiceActive = (selectedValue === "no");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleDbaDurationField(selectedValue) {
    const wrapper = document.getElementById("dba_duration_term_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "temporary") ? "flex" : "none";
}

