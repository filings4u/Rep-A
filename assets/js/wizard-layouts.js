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


// 2. COMPANY Lifespan HORIZON CALENDAR ACTION
function toggleLlcDurationDateVisibility(selectedValue) {
    const calendarWrapper = document.getElementById("llc_duration_date_wrapper");
    if (calendarWrapper) {
        // Correctly opens the date picker input box when "specified" is clicked
        calendarWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
    }
}

// 3. EMPLOYER IDENTIFICATION NUMBER (EIN) CONFIGURATOR ACTION
function toggleEinConditionalWorkflow(selectedValue) {
    const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
    if (manualEinWrapper) {
        // Opens the manual input box if the customer already has an EIN
        manualEinWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
    }
    
    // Links right to your main pricing matrix to instantly add $79 to checkout
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
        updateDynamicPricingMatrixVanilla();
    }
}

// 4. LLC PROPOSED NAME LEGAL SUFFIX VALIDATION RULE
function validateLlcNameSuffix(inputField) {
    const rawVal = inputField.value.trim();
    if (rawVal === "") return;
    const lowerVal = rawVal.toLowerCase();
    
    if (!lowerVal.endsWith("llc") && !lowerVal.endsWith("limited liability company")) {
        alert("LLC Formation Rule Warning: Your chosen name does not contain an approved corporate suffix token. Please append 'LLC' or 'Limited Liability Company' to clear application parameters.");
        inputField.style.borderColor = "#ef4444";
    } else {
        inputField.style.borderColor = "var(--border)";
    }
}

// ======================================================== //
// 🔘 C-CORP & S-CORP INTERACTIVE ROUTING CONTROLLERS
// ======================================================== //
function validateCorpNameSuffix(inputField) {
    const rawVal = inputField.value.trim();
    if (rawVal === "") return;
    const lowerVal = rawVal.toLowerCase();
    
    // Verifies that the name string explicitly finishes with legal corporate indicators
    if (!lowerVal.endsWith("inc.") && !lowerVal.endsWith("inc") && !lowerVal.endsWith("incorporated") && !lowerVal.endsWith("corporation")) {
        alert("Corporate Registration Rule Warning: Your chosen name does not contain an approved corporate suffix token. Please append 'Inc.', 'Incorporated', or 'Corporation' to clear parameter validations.");
        inputField.style.borderColor = "#ef4444";
    } else {
        inputField.style.borderColor = "var(--border)";
    }
}

let activeCorpShareholderCounterIndex = 1;
function appendNewCorporateShareholderNode() {
    activeCorpShareholderCounterIndex++;
    const container = document.getElementById("corp_shareholders_container");
    if (!container) return;
    
    const div = document.createElement("div");
    div.className = "member-record-card";
    div.id = `shareholder_card_${activeCorpShareholderCounterIndex}`;
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";
    
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Shareholder #${activeCorpShareholderCounterIndex} Records</span>
            <button type="button" onclick="removeCorporateShareholderNode(${activeCorpShareholderCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Full Legal Name</label>
                <input type="text" id="shareholder_name_${activeCorpShareholderCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Street Address</label>
                <input type="text" id="shareholder_street_${activeCorpShareholderCounterIndex}" required placeholder="123 Corporate Pkwy" class="wizard-input-field">
            </div>
            <div class="wizard-input-group">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">City</label>
                <input type="text" id="shareholder_city_${activeCorpShareholderCounterIndex}" required placeholder="Austin" class="wizard-input-field">
            </div>
            <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">State</label>
                    <input type="text" id="shareholder_state_${activeCorpShareholderCounterIndex}" required placeholder="TX" maxlength="2" class="wizard-input-field">
                </div>
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Zip</label>
                    <input type="text" id="shareholder_zip_${activeCorpShareholderCounterIndex}" required placeholder="78701" class="wizard-input-field">
                </div>
            </div>
        </div>
    `;
    container.appendChild(div);
}

function removeCorporateShareholderNode(targetIndex) {
    const cardToRemove = document.getElementById(`shareholder_card_${targetIndex}`);
    if (cardToRemove) cardToRemove.remove();
}

function toggleCorpDirectorFieldsMatrix(selectedValue) {
    const wrapper = document.getElementById("corp_director_names_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "manager-managed") ? "flex" : "none";
}

function toggleCorpDurationDateVisibility(selectedValue) {
    const dateWrapper = document.getElementById("corp_duration_date_wrapper");
    if (dateWrapper) dateWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
}

function toggleCorpEinConditionalWorkflow(selectedValue) {
    const manualWrapper = document.getElementById("corp_manual_ein_wrapper");
    if (manualWrapper) manualWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleScorpElectionWorkflow(selectedValue) {
    const serviceWrapper = document.getElementById("corp_scorp_service_wrapper");
    const warningNote = document.getElementById("scac-decline-warning-note");
    
    if (serviceWrapper) {
        serviceWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
    }
    
    // Clear choice if user reverts to standard C-Corp choice
    if (selectedValue === "no") {
        const selectProcure = document.getElementById("corp_scorp_procure");
        if (selectProcure) selectProcure.value = "no-decline";
        if (warningNote) warningNote.style.display = "block";
        window.customSelectedScorpElectionServiceActive = false;
        if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
    }
}

function toggleScorpFilingPricingHook(selectedValue) {
    const warningNote = document.getElementById("scac-decline-warning-note");
    if (warningNote) {
        warningNote.style.display = (selectedValue === "yes-buy") ? "none" : "block";
    }
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedScorpElectionServiceActive = (selectedValue === "yes-buy");
        updateDynamicPricingMatrixVanilla();
    }
}

 // 3. Automated Form View Segment Router (FIXED VALUE MATCHES)
    const llcFormWrapper = document.getElementById("form-fields-llc-registration");
    const corpFormWrapper = document.getElementById("form-fields-corporate-formation");

    if (llcFormWrapper && corpFormWrapper) {
        // Explicitly forces the corporate view if the service parameter is empty during local testing,
        // or if it matches traditional corporate filing routes.
        if (routeActiveServiceKey === "hazmat-registration" || 
            routeActiveServiceKey.includes("trademark") || 
            routeActiveServiceKey.includes("servicemark") || 
            routeActiveServiceKey.includes("corporate")) {
            
            llcFormWrapper.style.display = "none";
            corpFormWrapper.style.display = "grid";
        } else {
            llcFormWrapper.style.display = "grid";
            corpFormWrapper.style.display = "none";
        }
    }





// ========================================================
// 🗺️ UNIVERSAL GOOGLE PLACES AUTOMATIC ADDRESS VALIDATION CONTROL HUB
// ========================================================

function attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix) {
    if (!inputNodeElement || inputNodeElement.hasAttribute('data-autocomplete-bound-active')) return;
    if (typeof google === "undefined" || !google.maps || !google.maps.places) {
        console.warn("Google Maps JavaScript API Places library loading framework is not yet active on this system window node context.");
        return;
    }

    // Set configuration variables parameters to filter only structural street address parameters inside the US region
    const autocompleteCoreOptions = {
        componentRestrictions: { country: "us" },
        fields: ["address_components", "geometry"],
        types: ["address"]
    };

    const autocompleteInstance = new google.maps.places.Autocomplete(inputNodeElement, autocompleteCoreOptions);
    inputNodeElement.setAttribute('data-autocomplete-bound-active', 'true');

    autocompleteInstance.addListener("place_changed", function () {
        const selectedPlaceManifest = autocompleteInstance.getPlace();
        if (!selectedPlaceManifest.address_components) {
            console.error("No valid address mapping vectors returned for chosen element selection parameter registry entry logs.");
            return;
        }

        let addressStreetNumber = "";
        let addressRouteStreetName = "";
        let calculatedLocalityCityName = "";
        let extractedStateCode = "";
        let postalRoutingIndexNumber = "";

        // Trace line-by-line the individual data variables inside the structural address component array matrix
        selectedPlaceManifest.address_components.forEach(itemComponent => {
            const typesArray = itemComponent.types;
            if (typesArray.includes("street_number")) {
                addressStreetNumber = itemComponent.long_name;
            } else if (typesArray.includes("route")) {
                addressRouteStreetName = itemComponent.long_name;
            } else if (typesArray.includes("locality")) {
                calculatedLocalityCityName = itemComponent.long_name;
            } else if (typesArray.includes("administrative_area_level_1")) {
                extractedStateCode = itemComponent.short_name; // Returns standard 2-digit ISO postal code identifier string (e.g. TX, CA)
            } else if (typesArray.includes("postal_code")) {
                postalRoutingIndexNumber = itemComponent.long_name;
            }
        });

        // Weld street number string attributes to route string indicators cleanly
        const balancedStreetAddressLine = `${addressStreetNumber} ${addressRouteStreetName}`.trim();

        // Dynamically locate and write values into structural elements, regardless of form families variations
        const streetField = document.getElementById(`${dataElementPrefix}_street`) || inputNodeElement;
        const cityField = document.getElementById(`${dataElementPrefix}_city`);
        const stateField = document.getElementById(`${dataElementPrefix}_state`);
        const zipField = document.getElementById(`${dataElementPrefix}_zip`);

        if (streetField) streetField.value = balancedStreetAddressLine;
        if (cityField) cityField.value = calculatedLocalityCityName;
        if (stateField) stateField.value = extractedStateCode;
        if (zipField) zipField.value = postalRoutingIndexNumber;

        // Force a UI mathematical calculation updates loop update pass inside the invoice tracking cards engine parameters
        if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
    });
}

// 🔘 SOLE PROPRIETORSHIP FORM INTERACTIVE INTERACTION CONTROLLERS
function toggleSolePropDbaField(selectedValue) {
    const wrapper = document.getElementById("sp_dba_name_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
}

function toggleSolePropEinReasonField(selectedValue) {
    const wrapper = document.getElementById("sp_ein_reason_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
}

function toggleSolePropDurationField(selectedValue) {
    const wrapper = document.getElementById("sp_duration_term_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "temporary") ? "flex" : "none";
}

function toggleSolePropLicenseWorkflow(selectedValue) {
    const customInputWrapper = document.getElementById("sp_custom_license_wrapper");
    if (customInputWrapper) {
        customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
    }
    
    // Auto-update price tracking configurations if they select the filings4u audit option
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedSolePropLicenseAuditServiceActive = (selectedValue === "no");
        updateDynamicPricingMatrixVanilla();
    }
}

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

// 🔘 NONPROFIT WORKFLOW INTERACTIVE LAYOUT CONTROLLERS
let activeNonprofitBoardCounterIndex = 3;

function appendNewNonprofitBoardMemberNode() {
    activeNonprofitBoardCounterIndex++;
    const container = document.getElementById("np_board_members_container");
    if (!container) return;
    
    const div = document.createElement("div");
    div.className = "member-record-card";
    div.id = `np_board_card_${activeNonprofitBoardCounterIndex}`;
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Board Member #${activeNonprofitBoardCounterIndex} Records</span>
            <button type="button" onclick="removeNonprofitBoardMemberNode(${activeNonprofitBoardCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <input type="text" id="np_board_name_${activeNonprofitBoardCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
            <input type="text" id="np_board_role_${activeNonprofitBoardCounterIndex}" required placeholder="Position (e.g., Trustee / Director)" class="wizard-input-field">
            <input type="text" id="np_board_contact_${activeNonprofitBoardCounterIndex}" required placeholder="Contact Details (Phone / Email)" style="grid-column: span 2;" class="wizard-input-field">
        </div>
    `;
    container.appendChild(div);
}

function removeNonprofitBoardMemberNode(targetIndex) {
    const cardToRemove = document.getElementById(`np_board_card_${targetIndex}`);
    if (cardToRemove) cardToRemove.remove();
}

function toggleNonprofitEinReasonField(selectedValue) {
    const wrapper = document.getElementById("np_ein_reason_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedEinProcurementServiceActive = (selectedValue === "yes");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleNonprofitLicenseWorkflow(selectedValue) {
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedNonprofitLicenseCheckActive = (selectedValue === "no");
        updateDynamicPricingMatrixVanilla();
    }
}

// ========================================================
// 🔘 SERIES LLC RUNTIME EVENT CONTROLLERS
// ========================================================
let activeSeriesLlcMemberCounterIndex = 1;
function appendNewSeriesLlcMemberNode() {
    activeSeriesLlcMemberCounterIndex++;
    const container = document.getElementById("sllc_members_container");
    if (!container) return;
    
    const div = document.createElement("div");
    div.className = "member-record-card";
    div.id = `sllc_member_card_${activeSeriesLlcMemberCounterIndex}`;
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Initial Member #${activeSeriesLlcMemberCounterIndex} Records</span>
            <button type="button" onclick="removeSeriesLlcMemberNode(${activeSeriesLlcMemberCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <input type="text" id="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
            <input type="text" id="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Residential/Office Address" class="wizard-input-field">
        </div>
    `;
    container.appendChild(div);
}

function removeSeriesLlcMemberNode(targetIndex) {
    const cardToRemove = document.getElementById(`sllc_member_card_${targetIndex}`);
    if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesCellsWrapperVisibility(selectedValue) {
    const wrapper = document.getElementById("sllc_cells_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
}

let activeSubSeriesCellCounterIndex = 1;
function appendNewSubSeriesCellNode() {
    activeSubSeriesCellCounterIndex++;
    const container = document.getElementById("sllc_cells_container");
    if (!container) return;
    
    const div = document.createElement("div");
    div.className = "member-record-card";
    div.id = `sllc_cell_card_${activeSubSeriesCellCounterIndex}`;
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Initial Sub-Series Cell #${activeSubSeriesCellCounterIndex}</span>
            <button type="button" onclick="removeSubSeriesCellNode(${activeSubSeriesCellCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <input type="text" id="sllc_cell_name_${activeSubSeriesCellCounterIndex}" placeholder="Series Cell Name" class="wizard-input-field">
            <input type="text" id="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" placeholder="Asset / Operational Purpose Summary" class="wizard-input-field">
        </div>
    `;
    container.appendChild(div);
}

function removeSubSeriesCellNode(targetIndex) {
    const cardToRemove = document.getElementById(`sllc_cell_card_${targetIndex}`);
    if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesEinWorkflow(selectedValue) {
    const wrapper = document.getElementById("sllc_ein_reason_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedEinProcurementServiceActive = (selectedValue === "yes");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleSeriesLicenseWorkflow(selectedValue) {
    const warningNote = document.getElementById("sllc_custom_license_wrapper");
    if (warningNote) warningNote.style.display = (selectedValue === "yes") ? "flex" : "none";
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedSeriesLicenseAuditActive = (selectedValue === "no");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleSeriesLlcDurationField(selectedValue) {
    const wrapper = document.getElementById("sllc_duration_term_wrapper");
    if (wrapper) wrapper.style.display = (selectedValue === "project") ? "flex" : "none";
}
