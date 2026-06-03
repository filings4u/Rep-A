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

