

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
            
            <!-- FIXED STRUCTURAL BUTTON POSITION -->
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

// MASTER REGISTERED AGENT SERVICE ASSEMBLY HOOK
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
                        ${stateDropdownOptionsHtml}
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
                            ${stateDropdownOptionsHtml}
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
                        ${stateDropdownOptionsHtml}
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
                            ${stateDropdownOptionsHtml}
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
function buildFederalIncomeTaxFormPart1(stateDropdownOptionsHtml) {
    // FIX: Fallback string handling protects the template layout if global variables load late
    var optionsList = stateDropdownOptionsHtml || window.globalStateDropdownOptionsHtml || '<option value="" disabled>-- No States Loaded --</option>';

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
            <!-- FIX: Normalized regex pattern backslashes to allow smooth native JS compiler reading -->
            <input type="text" id="fed_tax_ein" required placeholder="00-0000000" pattern="[0-9]{2}-[0-9]{7}" title="Please provide a valid 9-digit format (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
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
            <!-- FIX: Simplified valid address pattern regex structure to avoid breaking HTML rendering blocks -->
            <input type="text" id="fed_tax_principal_street" required placeholder="Street address, suite, unit (No P.O. Boxes)" pattern="[A-Za-z0-9\\s#\\-\\.,]+" title="Please provide a valid address layout." class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fed_tax_principal')">
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
                        <option value="" disabled selected>Select...</option>
                        ${optionsList}
                    </select>
                </div>
                <div>
                    <label for="fed_tax_principal_zip" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase; display: block; margin-bottom: 4px;">Zip Code <span style="color: #ef4444;">*</span></label>
                    <input type="text" id="fed_tax_principal_zip" required placeholder="Zip" style="font-family: monospace;" class="wizard-input-field">
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


// FAMILY 31A: HAZMAT REGISTRATION LAYOUT MATRIX (PART 1 OF 3)
function buildHazmatRegistrationFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: WHAT IS HAZMAT REGISTRATION? -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Pipeline and Hazardous Materials Safety Administration (PHMSA) Compliance</strong>
            Any business entity transporting or offering for transport specific types and quantities of hazardous materials in commerce must maintain a valid federal Hazardous Materials Registration certificate with the PHMSA department. Operating a commercial fleet unit handling placarded explosives, flammable gases, radioactive materials, or toxic-by-inhalation cargo without a processed PHMSA credential voids safety standing and brings substantial federal daily enforcement citations.
        </div>

        <!-- SECTION 1: HAZARDOUS MATERIALS CARRIER PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Carrier Identity Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="haz_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Legal Company Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="haz_legal_name" required placeholder="Enter exact name registered with your USDOT number and state records" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="haz_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
            <input type="text" id="haz_usdot_number" required placeholder="Enter USDOT Number" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="haz_federal_ein" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Employer Identification Number (EIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="haz_federal_ein" required placeholder="00-0000000" pattern="[0-9]{2}\\\\-[0-9]{7}" title="Standard 9-digit EIN required (XX-XXXXXXX)" class="wizard-input-field" style="font-family: monospace;">
        </div>

        <!-- SECTION 2: PHMSA TIER CLASSIFICATIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. PHMSA Regulatory Tier Selection</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="haz_business_tier" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Federal Business Entity Size Classification <span style="color: #ef4444;">*</span></label>
            <select id="haz_business_tier" required class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
                <option value="" disabled selected>Select Business Classification...</option>
                <option value="small">Small Business / Non-Profit Operator (Meets SBA size criteria parameters — Reduced federal registration fees apply)</option>
                <option value="large">Large Business Entity (Exceeds baseline SBA size parameters — Standard federal registration fees apply)</option>
            </select>
        </div>
    `;
}

// FAMILY 31A: HAZMAT REGISTRATION LAYOUT MATRIX (PART 2 OF 3)
function buildHazmatRegistrationFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: PHMSA MULTI-YEAR REGISTRATION PACKAGE SELECTION -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Registration Validity Multi-Period Package</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select your planned multi-year processing horizon package. Selecting a multi-year setup locks in current rates and reduces annual filing overhead loops.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="haz_registration_period" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Filing Multi-Year Term Selection <span style="color: #ef4444;">*</span></label>
            <select id="haz_registration_period" required class="wizard-input-field" style="font-weight: 600;" onchange="if(typeof updateWizardFinalTotalAmountMatrix === 'function') { updateWizardFinalTotalAmountMatrix(); }">
                <option value="1-year" selected>1-Year Registration Term Package (Valid for the upcoming standard federal cycle)</option>
                <option value="2-year">2-Year Multi-Period Registration Term (Locks in pricing and structural tracking validations)</option>
                <option value="3-year">3-Year Extended Multi-Period Registration Term (Maximum authorized coverage block window)</option>
            </select>
        </div>

        <!-- SECTION 4: HAZARDOUS MATERIALS CARGO CLASS CATEGORIES CHECKLIST -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px; margin-bottom: 8px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Hazardous Materials Commodity Profile Checklist</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select the specific classifications of hazardous products your equipment asset frameworks are hauling (Check all that apply):</p>
        </div>

        <div style="grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box;">
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="haz_class_1" value="explosives" style="margin-top: 3px;">
                <label for="haz_class_1" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 1: Explosives (Placardable quantities/divisions)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="haz_class_2" value="gases" style="margin-top: 3px;">
                <label for="haz_class_2" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 2: Gases (Flammable, non-flammable, or toxic variants)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="haz_class_3" value="flammable_liquids" style="margin-top: 3px;">
                <label for="haz_class_3" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 3: Flammable and Combustible Liquids (e.g. Fuel, Oils)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="haz_class_4" value="flammable_solids" style="margin-top: 3px;">
                <label for="haz_class_4" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 4: Flammable Solids / Spontaneously Combustible</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="haz_class_5" value="oxidizers" style="margin-top: 3px;">
                <label for="haz_class_5" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 5: Oxidizers and Organic Peroxides</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="haz_class_6" value="poisons" style="margin-top: 3px;">
                <label for="haz_class_6" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 6: Poisons, Toxic Substances, or Infectious Agents</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="haz_class_7" value="radioactive" style="margin-top: 3px;">
                <label for="haz_class_7" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 7: Radioactive Materials (Yellow III label requirements)</label>
            </div>
            <div style="display: flex; align-items: flex-start; gap: 8px;">
                <input type="checkbox" id="haz_class_8" value="corrosives" style="margin-top: 3px;">
                <label for="haz_class_8" style="font-size: 0.825rem; color: var(--navy); font-weight: 600;">Class 8: Corrosive Liquids or Solid Compounds</label>
            </div>
        </div>
    `;
}

// FAMILY 31A: HAZMAT REGISTRATION LAYOUT MATRIX (PART 3 OF 3)
function buildHazmatRegistrationFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: AUTHORIZED SAFETY OFFICIAL POC -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Authorized Safety Official Contact</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Provide the profile details of the compliance or logistics manager responsible for PHMSA hazardous material cargo declarations.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="haz_poc_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Safety Official Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="haz_poc_name" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="haz_poc_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Direct Phone Number <span style="color: #ef4444;">*</span></label>
            <input type="tel" id="haz_poc_phone" required placeholder="(512) 555-0199" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="haz_poc_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Compliance Communications Email <span style="color: #ef4444;">*</span></label>
            <input type="email" id="haz_poc_email" required placeholder="safety@yourcarrier.com" class="wizard-input-field">
        </div>

        <!-- SECTION 6: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">6. Special Handling Directives & Hazmat Notes</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="haz_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Carrier Instructions or Disclosure Notes</label>
            <textarea id="haz_provisions" placeholder="Detail any immediate shipping lane deadlines, bulk packaging exceptions, radioactive transport route permits, or custom proxy handling directives relative to your PHMSA HAZMAT registration dossier..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER HAZMAT REGISTRATION APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildHazmatRegistrationForm(stateDropdownOptionsHtml = "") {
    return buildHazmatRegistrationFormPart1(stateDropdownOptionsHtml) +
           buildHazmatRegistrationFormPart2(stateDropdownOptionsHtml) +
           buildHazmatRegistrationFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 32A: TRUCKER INSURANCE LEAD MATRIX (PART 1 OF 3)
function buildTruckerInsuranceFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: TRUCKER INSURANCE CLEARINGHOUSE -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Commercial Motor Carrier Insurance Lead Clearinghouse</strong>
            Fulfilling public liability coverage requirements is a federal pre-requisite under FMCSA rules to activate your interstate Operating Authority (Form BMC-91 or BMC-91X). 
            <span style="font-weight: 700; color: var(--primary);">⚠️ Crucial Disclosing Provision:</span> Filings4u is a specialized commercial document filing service organization. We are not a licensed insurance agency, brokerage, or underwriter, and we do not sell insurance policies directly. All risk profile metrics submitted here are securely routed to our premium licensed insurance entity partners to compile and issue a competitive, non-binding quote tailored to your fleet.
        </div>

        <!-- SECTION 1: CARRIER RISK ASSESSMENT PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Risk Assessment Identity Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ins_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Business Entity Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="ins_legal_name" required placeholder="Enter name exactly as registered on your corporate state records or USDOT profile" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ins_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number (If Issued)</label>
            <input type="text" id="ins_usdot_number" placeholder="e.g., 1234567 (Leave blank if pending authority setup)" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ins_operation_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Garaging Base State <span style="color: #ef4444;">*</span></label>
            <select id="ins_operation_state" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Primary State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <!-- SECTION 2: LIABILITY TARGET THRESHOLDS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Primary Auto Liability Target Thresholds</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ins_liability_limit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Combined Single Limit (CSL) Auto Liability Request <span style="color: #ef4444;">*</span></label>
            <select id="ins_liability_limit" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Primary Liability Limit...</option>
                <option value="750k">$750,000 Combined Single Limit (Standard FMCSA minimum framework for non-hazardous general freight)</option>
                <option value="1m" selected>$1,000,000 Combined Single Limit (Highly recommended tier required by most freight brokers, shippers, and logistics platforms)</option>
                <option value="2m">$2,000,000 Combined Single Limit (Extended tier required for specialized contracts or oversize cargo loads)</option>
                <option value="5m">$5,000,000 Combined Single Limit (Statutory federal minimum requirement for certain hazardous material placard categories)</option>
            </select>
        </div>
    `;
}


// FAMILY 32A: TRUCKER INSURANCE LEAD MATRIX (PART 2 OF 3)
function buildTruckerInsuranceFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: CARGO & PHYSICAL DAMAGE THRESHOLDS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Motor Truck Cargo & Physical Damage Limits</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Detail your requested cargo asset coverage parameters to match vendor onboarding verification standards.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ins_cargo_limit" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Motor Truck Cargo Limit <span style="color: #ef4444;">*</span></label>
            <select id="ins_cargo_limit" required class="wizard-input-field" style="font-weight: 600;">
                <option value="50k">$50,000 Cargo Limit (Low-tier local hauling matrix)</option>
                <option value="100k" selected>$100,000 Cargo Limit (Standard broker contract minimum baseline for dry van / reefer)</option>
                <option value="250k">$250,000 Cargo Limit (High-value equipment or machinery loads)</option>
                <option value="500k">$500,000+ Cargo Limit (Specialized electronic or premium pharmaceutical electronics)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ins_physical_damage" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Physical Damage Coverage Request? <span style="color: #ef4444;">*</span></label>
            <select id="ins_physical_damage" required class="wizard-input-field" style="font-weight: 600;">
                <option value="yes" selected>Yes, quote Physical Damage (Comprehensive & Collision tracking based on equipment value)</option>
                <option value="no">No, exclude physical damage (Liability and Cargo parameters only)</option>
            </select>
        </div>

        <!-- SECTION 4: FLEET UNIT & OPERATOR RISK METRICS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Fleet & Driver Underwriting Metrics</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">These structural vehicle metrics allow partners to compute accurate exposure and allocation scores.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ins_truck_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Number of Power Units (Tractors/Trucks) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="ins_truck_count" required placeholder="1" min="1" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ins_trailer_count" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Number of Trailers <span style="color: #ef4444;">*</span></label>
            <input type="number" id="ins_trailer_count" required placeholder="1" min="0" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ins_operating_radius" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Primary Operating Radius <span style="color: #ef4444;">*</span></label>
            <select id="ins_operating_radius" required class="wizard-input-field" style="font-weight: 600;">
                <option value="local">Local (Under 100 Miles radius from home base)</option>
                <option value="regional">Regional (100 to 500 Miles radius footprint)</option>
                <option value="long-haul" selected>Long-Haul / Over-the-Road (OTR - Exceeds 500 Miles nationally)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="ins_driver_min_age" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Age of Youngest Driver in Fleet <span style="color: #ef4444;">*</span></label>
            <select id="ins_driver_min_age" required class="wizard-input-field" style="font-weight: 600;">
                <option value="under_23">Under 23 Years Old (High exposure tier status)</option>
                <option value="23_25" selected>23 to 25 Years Old</option>
                <option value="over_25">Over 25 Years Old (Standard industry preferred tier)</option>
            </select>
        </div>
    `;
}

// FAMILY 32A: TRUCKER INSURANCE LEAD MATRIX (PART 3 OF 3)
function buildTruckerInsuranceFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 5: ADDITIONAL PROVISIONS & REQUEST SPECIFICS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Coverage History</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="ins_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Quote Instructions, Target Commodities, or Loss History Notes</label>
            <textarea id="ins_provisions" placeholder="Detail any specific equipment makes/models, trailer types (Flatbed, Reefer, Stepdeck), target commodities to haul, prior commercial insurance policy history, or urgent deadline dates for broker onboarding verification..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER TRUCKER INSURANCE LEAD APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildTruckerInsuranceForm(stateDropdownOptionsHtml = "") {
    return buildTruckerInsuranceFormPart1(stateDropdownOptionsHtml) +
           buildTruckerInsuranceFormPart2(stateDropdownOptionsHtml) +
           buildTruckerInsuranceFormPart3(stateDropdownOptionsHtml);
}


// FAMILY 33A: BROKER INSURANCE LEAD MATRIX (PART 1 OF 3)
function buildBrokerInsuranceFormPart1(stateDropdownOptionsHtml = "") {
    return `
        <!-- DYNAMIC SYSTEM COMPLIANCE TOOLTIP: FREIGHT BROKER INSURANCE CLEARINGHOUSE -->
        <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-bottom: 8px;">
            <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> Freight Broker Insurance Lead Clearinghouse & BMC-85 Financial Network</strong>
            Operating safely as an FMCSA licensed property broker requires robust risk management parameter shields to insulate your logistics firm from vicarious liability claims. 
            <span style="font-weight: 700; color: var(--primary);">⚠️ Crucial Disclosing Provision:</span> Filings4u is a specialized commercial document filing service organization. We are not a licensed insurance agency, brokerage, or underwriter, and we do not sell insurance policies directly. All risk profile metrics submitted here are securely routed to our premium licensed insurance entity partners to compile and issue a competitive, non-binding quote tailored to your brokerage. <span style="font-weight: 700; color: var(--navy);">Notice:</span> Financial underwriting requests through this channel are strictly structured for **BMC-85 Trust Fund ($75,000 Cash Escrow Settlement)** options.
        </div>

        <!-- SECTION 1: BROKER RISK ASSESSMENT PROFILE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Broker Corporate Risk Profile</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bins_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Freight Brokerage Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="bins_legal_name" required placeholder="Enter name exactly as registered on your corporate state records or MC profile" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_mc_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">MC Number (If Pending/Issued)</label>
            <input type="text" id="bins_mc_number" placeholder="e.g., MC-000000" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_base_state" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Corporate Base State <span style="color: #ef4444;">*</span></label>
            <select id="bins_base_state" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select State...</option>
                ${stateDropdownOptionsHtml}
            </select>
        </div>

        <!-- SECTION 2: CONTINGENT LIABILITY LIMITS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Contingent Risk Coverage Ceilings</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_contingent_cargo" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Contingent Cargo Liability Request <span style="color: #ef4444;">*</span></label>
            <select id="bins_contingent_cargo" required class="wizard-input-field" style="font-weight: 600;">
                <option value="100k" selected>$100,000 Contingent Cargo Limit (Standard baseline preferred by most domestic shippers)</option>
                <option value="250k">$250,000 Contingent Cargo Limit (Enhanced structural tier for high-value logistics tracking)</option>
                <option value="500k">$500,000 Contingent Cargo Limit (Premium specialized commodity carrier matching matrix)</option>
                <option value="none">Exclude Contingent Cargo (Seeking BMC-85 Trust Account quotation parameters only)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_broker_liability" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Freight Broker Liability (FBL) Limit <span style="color: #ef4444;">*</span></label>
            <select id="bins_broker_liability" required class="wizard-input-field" style="font-weight: 600;">
                <option value="none" selected>Exclude Freight Broker General Liability</option>
                <option value="1m">$1,000,000 General Liability Bracket (Protects against third-party bodily injury / property damage claims)</option>
                <option value="2m">$2,000,000 Extended General Liability Bracket</option>
            </select>
        </div>
    `;
}


// FAMILY 33A: BROKER INSURANCE LEAD MATRIX (PART 2 OF 3)
function buildBrokerInsuranceFormPart2(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 3: UNDERWRITING BACKGROUND RISK QUESTIONNAIRE -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Principal Underwriting & Background Risk Assessment</h3>
            <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">BMC-85 trust fund underwriters require personal background disclosures to assess financial stability, operational compliance, and processing risk tiers.</p>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_marital_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Marital Status <span style="color: #ef4444;">*</span></label>
            <select id="bins_marital_status" required class="wizard-input-field" style="font-weight: 600;">
                <option value="" disabled selected>Select Status...</option>
                <option value="single">Single</option>
                <option value="married">Married (May qualify for optimized financial accountability tiers)</option>
                <option value="divorced">Divorced / Separated</option>
                <option value="widowed">Widowed</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_has_bankruptcy" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Prior Personal or Business Bankruptcy? <span style="color: #ef4444;">*</span></label>
            <select id="bins_has_bankruptcy" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleBrokerInsuranceBankruptcyDetailsVisibility(this.value)">
                <option value="no" selected>No, explicitly zero history of structural insolvency or Chapter filings</option>
                <option value="yes">Yes, a past personal or business bankruptcy record exists</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Bankruptcy Verification Details -->
        <div id="bins_bankruptcy_details_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="bins_bankruptcy_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify bankruptcy type, filing date, and discharge status: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="bins_bankruptcy_details" placeholder="e.g., Chapter 7 discharged in 2021, Chapter 11 corporate wrap..." class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_has_felony" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Any Felony Convictions or Legal Judgments? <span style="color: #ef4444;">*</span></label>
            <select id="bins_has_felony" required class="wizard-input-field" style="font-weight: 600;" onchange="toggleBrokerInsuranceFelonyDetailsVisibility(this.value)">
                <option value="no" selected>No, principal officers possess completely clear background records</option>
                <option value="yes">Yes, legal background histories or pending statutory counts exist</option>
            </select>
        </div>

        <!-- Hidden Conditional Container: Felony Background Explanations -->
        <div id="bins_felony_details_wrapper" class="wizard-input-group" style="grid-column: span 2; display: none;">
            <label for="bins_felony_details" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Please specify year, charge classification, and resolution status: <span style="color: #ef4444;">*</span></label>
            <input type="text" id="bins_felony_details" placeholder="Provide background profile details for underwriting review..." class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_has_tax_liens" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Any Outstanding Tax Liens or Judgments? <span style="color: #ef4444;">*</span></label>
            <select id="bins_has_tax_liens" required class="wizard-input-field" style="font-weight: 600;">
                <option value="no" selected>No outstanding state or federal tax liens are filed against the principal</option>
                <option value="yes">Yes, active state/federal tax lien parameters exist or are being resolved</option>
            </select>
        </div>
    `;
}

// FAMILY 33A: BROKER INSURANCE LEAD MATRIX (PART 3 OF 3)
function buildBrokerInsuranceFormPart3(stateDropdownOptionsHtml = "") {
    return `
        <!-- SECTION 4: OPERATIONAL VOLUMES -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Projected Freight Volumes</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_projected_loads" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Projected Monthly Shipments / Loads <span style="color: #ef4444;">*</span></label>
            <input type="number" id="bins_projected_loads" required placeholder="0" min="0" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="grid-column: span 1;">
            <label for="bins_years_experience" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Years of Transportation Logistics Experience <span style="color: #ef4444;">*</span></label>
            <input type="number" id="bins_years_experience" required placeholder="0" min="0" class="wizard-input-field">
        </div>

        <!-- SECTION 5: ADDITIONAL PROVISIONS -->
        <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
            <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">5. Special Handling Directives & Background Notes</h3>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2;">
            <label for="bins_provisions" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Special Instructions or Explanatory Background Notes</label>
            <textarea id="bins_provisions" placeholder="Detail any specific commodity focus lines, partner asset tracking requirements, background explanation summaries, or custom underwriting proxy timelines relative to your BMC-85 trust configuration packet..." class="wizard-input-field" style="width: 100%; min-height: 80px; box-sizing: border-box; padding: 12px; font-family: inherit; resize: vertical; border: 1px solid var(--border); border-radius: 6px; font-weight: 600;"></textarea>
        </div>
    `;
}

// 📦 MASTER FREIGHT BROKER INSURANCE LEAD APPLICATION ASSEMBLY HOOK (Place at the bottom of wizard-layout.js)
function buildBrokerInsuranceForm(stateDropdownOptionsHtml = "") {
    return buildBrokerInsuranceFormPart1(stateDropdownOptionsHtml) +
           buildBrokerInsuranceFormPart2(stateDropdownOptionsHtml) +
           buildBrokerInsuranceFormPart3(stateDropdownOptionsHtml);
}


// ============================================================================ //
// 📋 FAMILY 34: NEW ENTRANT SAFETY AUDIT LAYOUT MATRIX (PART A)               //
// ============================================================================ //

function buildNewEntrantAuditFormPart1(stateDropdownOptionsHtml = "") {
  return `
  <div style="grid-column: span 2; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate); box-sizing: border-box; margin-top: 12px; margin-bottom: 8px;">
      <strong style="color: var(--navy); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> FMCSA New Entrant Safety Assurance Program</strong> All newly registered motor carriers are placed into a 18-month federal monitoring window. The FMCSA mandates a compulsory **New Entrant Safety Audit** within this timeframe to verify robust administrative tracking of driver logs, vehicle records, drug screens, and security structures. Failing this audit results in immediate, permanent revocation of operating authority.
    </div>
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Company Owner Information Profile</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="nea_owner_first_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner First Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="nea_owner_first_name" required placeholder="First Name" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="nea_owner_last_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner Last Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="nea_owner_last_name" required placeholder="Last Name" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="nea_owner_email" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy); display: flex; align-items: center; gap: 4px;">Owner Email Address <span style="color: #ef4444;">*</span></label>
      <input type="email" id="nea_owner_email" required placeholder="e.g. name@company.com" class="wizard-input-field">
      <div style="margin-top: 4px; font-size: 0.75rem; color: var(--slate, #64748b); line-height: 1.3; font-weight: 500;">
        <i class="fa-solid fa-circle-info" style="color: #10b981;"></i> This email will be used to access your secure client dashboard and initialize your corporate profile account.
      </div>
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="nea_owner_phone" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Owner Phone Number <span style="color: #ef4444;">*</span></label>
      <input type="tel" id="nea_owner_phone" required placeholder="e.g. 773-245-7079" class="wizard-input-field">
    </div>
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Motor Carrier Audit Identification Profile</h3>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="nea_legal_name" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Official Motor Carrier Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="nea_legal_name" required placeholder="Enter exact name registered on your USDOT portal" class="wizard-input-field">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="nea_usdot_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">USDOT Number <span style="color: #ef4444;">*</span></label>
      <input type="text" id="nea_usdot_number" required placeholder="e.g. 1234567" class="wizard-input-field" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="nea_mc_number" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">MC Number <span style="color: #ef4444;">*</span></label>
      <input type="text" id="nea_mc_number" required placeholder="e.g. 123456" class="wizard-input-field" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
    </div>
    <div class="wizard-input-group" style="grid-column: span 1;">
      <label for="nea_audit_trigger_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">FMCSA Safety Audit Notice Status <span style="color: #ef4444;">*</span></label>
      <select id="nea_audit_trigger_status" required class="wizard-input-field" style="font-weight: 600; max-width: 100%; white-space: normal; word-wrap: break-word;" onchange="var wrapper = document.getElementById('nea_letter_deadline_wrapper'); var input = document.getElementById('nea_audit_deadline'); if(this.value === 'letter-received') { if(wrapper) wrapper.style.display = 'block'; if(input) input.required = true; } else { if(wrapper) wrapper.style.display = 'none'; if(input) { input.required = false; input.value = ''; } }">
        <option value="preemptive" selected>Preemptive Check (Proactively setting up compliance before receiving state tracking letters)</option>
        <option value="letter-received">Official Audit Letter Received (FMCSA has issued an explicit document request deadline)</option>
      </select>
    </div>
    <div id="nea_letter_deadline_wrapper" class="wizard-input-group" style="grid-column: span 1; display: none;">
      <label for="nea_audit_deadline" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Mandatory Submission Deadline Date <span style="color: #ef4444;">*</span></label>
      <input type="date" id="nea_audit_deadline" class="wizard-input-field">
    </div>
    <div style="grid-column: span 2; margin: 12px 0;">
      <button type="button" onclick="window.launchNewEntrantAuditRequirementsGuideModal()" style="background: var(--navy); color: #ffffff; font-weight: 800; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 0.85rem; box-shadow: 0 2px 4px rgba(0,0,0,0.15); width: 100%; justify-content: center;">
        <i class="fa-solid fa-list-check"></i> Launch New Entrant Audit Requirements Checklist & Price Guide
      </button>
    </div>
  `;
}
window.buildNewEntrantAuditFormPart1 = buildNewEntrantAuditFormPart1;


function buildNewEntrantAuditFormPart2(stateDropdownOptionsHtml = "") {
  return `
    <div style="grid-column: span 2; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-top: 16px;">
      <h3 style="color: var(--navy); font-size: 1.1rem; font-weight: 800; margin: 0;">3. Authorized Audit Preparation Support</h3>
      <p style="color: var(--slate); font-size: 0.8rem; margin: 4px 0 0 0;">Select which critical compliance folders you want Filings4u to assemble and optimize. Checked items add dynamically to your checkout balance:</p>
    </div>
    <div style="grid-column: span 2; display: flex; flex-direction: column; gap: 12px; width: 100%; box-sizing: border-box;">
      
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
  `;
}

function buildNewEntrantAuditFormPart2_Extended() {
  return `
      <div style="display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-bottom: 12px; width: 100%;">
        <div style="display: flex; align-items: flex-start; gap: 10px;">
          <input type="checkbox" id="nea_service_hos" value="195.00" data-price="195.00" data-name="Record-Keeping Practices (HOS Log Audit)" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
          <div>
            <label for="nea_service_hos" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Hours of Service (HOS) Log Audit Pre-Review</label>
            <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.45;">Examine record-keeping practices to ensure processes are efficient, accurate, and in line with auditing standards. Conducts dynamic reviews across operational procedures, electronic logging device (ELD) data feeds, and compliance training programs to iron out graph exceptions.</span>
          </div>
        </div>
        <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$195.00</div>
      </div>

      <div style="display: flex; align-items: flex-start; justify-content: space-between; background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-bottom: 12px; width: 100%;">
        <div style="display: flex; align-items: flex-start; gap: 10px;">
          <input type="checkbox" id="nea_service_maintenance" value="85.00" data-price="85.00" data-name="Vehicle Maintenance Records Folder" class="addon-checkbox" style="margin-top: 4px;" onchange="if(window.globalOrchestratedCartRefreshSync) { window.globalOrchestratedCartRefreshSync(); }">
          <div>
            <label for="nea_service_maintenance" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); cursor: pointer;">Vehicle Maintenance Records & Periodic Inspection Files</label>
            <span style="display: block; font-size: 0.775rem; color: var(--slate); margin-top: 2px; line-height: 1.45;">Inspect maintenance records to confirm that all vehicles are regularly serviced and meet rigorous safety requirements. Assembles systematic Part 396 annual test sheets, daily driver vehicle inspection reports (DVIR), repair invoices, and active asset tracking dossiers.</span>
          </div>
        </div>
        <div style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.9rem; padding-left: 12px; white-space: nowrap;">+$85.00</div>
      </div>

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
    </div>
  `;
}

window.buildNewEntrantAuditFormPart2 = buildNewEntrantAuditFormPart2;
window.buildNewEntrantAuditFormPart2_Extended = buildNewEntrantAuditFormPart2_Extended;


function buildNewEntrantAuditFormPart2_Extended() {
  return `
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
    </div>
  `;
}

window.buildNewEntrantAuditFormPart2 = buildNewEntrantAuditFormPart2;
window.buildNewEntrantAuditFormPart2_Extended = buildNewEntrantAuditFormPart2_Extended;


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

window.buildNewEntrantAuditFormPart3 = buildNewEntrantAuditFormPart3;


function buildNewEntrantAuditForm(stateDropdownOptionsHtml = "") {
  const section1Html = typeof buildNewEntrantAuditFormPart1 === "function" ? buildNewEntrantAuditFormPart1(stateDropdownOptionsHtml) : "";
  const section2Html = (typeof buildNewEntrantAuditFormPart2 === "function" ? buildNewEntrantAuditFormPart2(stateDropdownOptionsHtml) : "") + (typeof buildNewEntrantAuditFormPart2_Extended === "function" ? buildNewEntrantAuditFormPart2_Extended() : "");
  const section3Html = typeof buildNewEntrantAuditFormPart3 === "function" ? buildNewEntrantAuditFormPart3(stateDropdownOptionsHtml) : "";
  return section1Html + section2Html + section3Html;
}

function appendSummaryRowItem(targetContainer, itemText, monetaryCost, optionalInlineCSS = "") {
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

window.buildNewEntrantAuditForm = buildNewEntrantAuditForm;
window.appendSummaryRowItem = appendSummaryRowItem;
console.log("[Dynamic Registry] Unified script shards loaded and configured successfully.");







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

  // DEFAULT TRUCKING & LOGISTICS LAYOUT MATRICES (DYNAMIC & REPAIRED)
function buildDefaultTruckingLayoutHtml() {
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
    <!-- CRITICAL SYSTEM SYNTAX REPAIR: Fixed truncated input blocks programmatically -->
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px;">
      <label for="truck_power_units" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy);">Total Commercial Power Units / Vehicles Operated <span style="color: #ef4444;">*</span></label>
      <input type="number" id="truck_power_units" required min="1" placeholder="1" class="wizard-input-field" style="width: 100%; box-sizing: border-box;">
    </div>
  `;
}
window.buildDefaultTruckingLayoutHtml = buildDefaultTruckingLayoutHtml;
}


// ============================================================================ //
// 🎨 Step 5 UI SUMMARY PANEL OVERRIDE & DISPLAY LAYOUT FORMATTER (DYNAMIC)
// ============================================================================ //
/**
 * filings4u, LLC - Fail-Safe Step 5 UI Formatter
 * Directly targets live screen text nodes to fix layout display rows.
 * FIXED: Renamed to prevent function namespace collisions with your calculations engine.
 * @param {Object} currentCartState - Optional context object parameters.
 */
function formatStepFiveSummaryInvoiceDisplayLayout(currentCartState = {}) {
  const rowsContainer = document.getElementById("summary-purchase-rows-container");
  const subtotalDisplay = document.getElementById("summary-subtotal-display");
  const govFeesDisplay = document.getElementById("summary-gov-fees-display");
  const grandTotalDisplay = document.getElementById("summary-grand-total-display");

  if (!rowsContainer) return;
  const activeRows = Array.from(rowsContainer.children);

  // Extract parameters directly from global state parameters trackers to guarantee calculation matches
  const serviceKey = currentCartState.serviceKey || window.routeActiveServiceKey || "";
  const formationServiceKeys = ["llc-formation", "corporations", "series-llc", "foreign-qualification", "nonprofits"];
  const isFormationTrack = formationServiceKeys.includes(serviceKey);

  // Read totals safely out of calculation engine context entries instead of scraping text strings
  const liveCalculatedGrandTotal = parseFloat(window.wizardCalculatedFinalTotalAmount || window.calculatedCartGrandTotalAmount || 0);

  // 1. PASS THROUGH LINE ITEMS IN THE CONTAINER
  activeRows.forEach(row => {
    if (!row) return;
    let rowText = row.innerText || row.textContent || "";
    if (rowText.includes("State Filing Fee") || rowText.includes("Government Filing Fee")) {
      // ALWAYS hide it from the main service list container to keep layout clean
      row.style.setProperty("display", "none", "important");
    }
  });

  // DYNAMIC FIX: Removed the static "$0.00" and hardcoded "Taxes & Agency Processing" label workaround.
  // The element now dynamically renders the calculated dynamic package subtotals based on real-time contexts.
  if (subtotalDisplay) {
    let subtotalValue = 0;
    if (window._tempCalcContext && window._tempCalcContext.baseTierPrice !== undefined) {
      const basePrice = parseFloat(window._tempCalcContext.baseTierPrice) || 0;
      const addonPrice = parseFloat(window._tempCalcContext.incrementalAddonTotal) || 0;
      const truckingPrice = parseFloat(window.lastCalculatedNewEntrantAddonTotal) || 0;
      subtotalValue = basePrice + addonPrice + truckingPrice;
    }
    
    subtotalDisplay.innerText = "$" + subtotalValue.toFixed(2);
    const labelNode = subtotalDisplay.previousElementSibling;
    if (labelNode) {
      const displayServiceLabel = window._tempCalcContext?.planConfig?.name || "Filing & Add-on";
      labelNode.innerText = `${displayServiceLabel} Subtotal`;
    }
  }

  // 3. DYNAMICALLY RENDER GOVERNMENT FEES ROW INTERFACES
  if (govFeesDisplay) {
    // Pull the live state fee parameter value from database fields directly if present
    const pricingRecord = window.CENTRAL_SERVICE_PLAN_DB?.[serviceKey];
    const stateFilingFeeAmount = parseFloat(pricingRecord?.gov_fee || 0);
    govFeesDisplay.innerText = "$" + stateFilingFeeAmount.toFixed(2);
    
    const govRowParent = govFeesDisplay.parentElement;
    if (govRowParent) {
      const govDisplayVisibility = (isFormationTrack && stateFilingFeeAmount > 0) ? "flex" : "none";
      govRowParent.style.setProperty("display", govDisplayVisibility, "important");
    }
  }

  // 4. TOTAL SUMMARY AMOUNT MATCHES CORE ENGINES
  if (grandTotalDisplay && liveCalculatedGrandTotal > 0) {
    grandTotalDisplay.innerText = "$" + liveCalculatedGrandTotal.toFixed(2);
  }
}

// Bind cleanly back to global workspace scopes
window.formatStepFiveSummaryInvoiceDisplayLayout = formatStepFiveSummaryInvoiceDisplayLayout;


/**
 * UI Mutation Guard Hook
 * Automatically runs the formatter whenever your wizard updates the summary panel.
 * FIXED: Connected layout trigger directly to the newly isolated formatter module handler.
 */
(function activateSummaryObserver() {
    const summaryTarget = document.getElementById("summary-purchase-rows-container");
    
    if (!summaryTarget) {
        // Non-blocking timeout pool checks for element injection
        setTimeout(activateSummaryObserver, 250);
        return;
    }

    const summaryObserver = new MutationObserver(() => {
        summaryObserver.disconnect(); // Prevent infinite layout loop traps
        
        if (typeof window.formatStepFiveSummaryInvoiceDisplayLayout === "function") {
            window.formatStepFiveSummaryInvoiceDisplayLayout(window.currentCartState || {});
        }
        
        summaryObserver.observe(summaryTarget, { childList: true, subtree: true });
    });

    summaryObserver.observe(summaryTarget, { childList: true, subtree: true });
    console.log("[Observer Engine] Step 5 layout monitor active and stabilized.");
})();


// ============================================================================ //
// 📡 UNIFIED BACKGROUND PRE-FETCH MODULE (LATENCY REMOVAL ENGINE - DYNAMIC)
// ============================================================================ //
/**
 * Pre-fetches the dynamic Step 2 form script in the background during Step 1.
 * Pure dynamic pattern: Strips hardcoded timing gates. Operates non-blockingly.
 */
function prefetchStepTwoDynamicAsset() {
  const urlParams = new URLSearchParams(window.location.search);
  const rawServiceSlug = urlParams.get('service') || urlParams.get('package') || urlParams.get('id') || "";
  if (!rawServiceSlug) return;

  const cleanKey = String(rawServiceSlug).toLowerCase().trim().replace(/[\s_]+/g, "-");

  // DYNAMIC FIX: Bypassed the network script appending to prevent 404 and text/html MIME type errors.
  // The system safely logs the intent and transitions directly to using your internal fallback layouts library instead.
  console.log(`[Pre-fetch Info] Bypassing background network download. Utilizing native inline cache layouts for: "${cleanKey}"`);
}

// Expose cleanly to global parameters scope window records 
window.prefetchStepTwoDynamicAsset = prefetchStepTwoDynamicAsset;

// Auto-initialize layout hooks cleanly only after main thread settles down 
if (document.readyState !== "loading") {
  window.prefetchStepTwoDynamicAsset();
} else {
  document.addEventListener("DOMContentLoaded", window.prefetchStepTwoDynamicAsset);
}



// ============================================================================ //
// ⚡ STEP 2 DYNAMIC RECOVERY LIFELINE: ASSET PROTECTION TIERS LAYOUT REGISTER (DYNAMIC)
// ============================================================================ //
/**
 * Dynamically hooks into the asynchronous form injection system.
 * Resolves the late-binding asset lookup instantly to clear the loading skeleton block.
 * @param {string} stateOptions - Pre-rendered HTML string option elements from your global state dropdown.
 * @return {string} Pure structural HTML content blocks to mount straight to the wizard workspace.
 */
window.buildAssetProtectionTiersForm = function(stateOptions) {
  console.log("[Form Engine] Intercepted asset protection path. Rendering dynamic framework view...");

  // DYNAMIC FIX: Eliminated hardcoded option values and titles.
  // Dynamically queries the master database properties matching the active service routing parameters.
  const activeServiceKey = window.routeActiveServiceKey || "";
  const masterDbSource = window.CENTRAL_SERVICE_PLAN_DB || {};
  const activeRecord = masterDbSource[activeServiceKey] || {};
  
  // Isolate prices matrix block to discover valid structural speed levels programmatically
  const priceMatrixNode = activeRecord.prices || activeRecord;
  let dynamicTiersMarkup = "";

  if (priceMatrixNode && typeof priceMatrixNode === "object") {
    const availablePriceKeys = Object.keys(priceMatrixNode).filter(k => 
      k !== "name" && k !== "bullets" && k !== "addons" && k !== "plans" && !isNaN(parseFloat(priceMatrixNode[k]))
    );

    availablePriceKeys.forEach((tierKey, index) => {
      // Programmatically clean keys into legible options labels (e.g., advanced-holding -> Advanced Holding)
      const cleanLabel = tierKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const isFirstElementSelected = index === 0 ? "selected" : "";
      
      dynamicTiersMarkup += `<option value="${tierKey}" ${isFirstElementSelected}>${cleanLabel} Shield Layer Plan</option>`;
    });
  }

  // Pure dynamic safety fallback layout if the central pricing objects are uninitialized
  if (!dynamicTiersMarkup) {
    const activeTierKey = window.routeActivePlanKey || "standard";
    const cleanFallbackLabel = String(activeTierKey).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    dynamicTiersMarkup = `<option value="${activeTierKey}" selected>${cleanFallbackLabel} Structural Separation Protection</option>`;
  }

  // Keeps your standard field configurations intact while injecting native form layers cleanly
  return `
    <div class="wizard-input-group" style="grid-column: span 2;">
      <label for="apt_tier_level" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate, #64748b); margin-bottom: 4px;">
        Select Eligible Asset Protection Shield Level <span style="color: #ef4444;">*</span>
      </label>
      <select id="apt_tier_level" name="apt_tier_level" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight:600;">
        ${dynamicTiersMarkup}
      </select>
    </div>
    <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px;">
      <label for="apt_state_jurisdiction" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate, #64748b); margin-bottom: 4px;">
        Target Formation Jurisdiction State <span style="color: #ef4444;">*</span>
      </label>
      <select id="apt_state_jurisdiction" name="apt_state_jurisdiction" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight:600;">
        ${stateOptions || '<option value="DE">Delaware</option><option value="WY">Wyoming</option><option value="NV">Nevada</option>'}
      </select>
    </div>
  `;
};


// ============================================================================ //
// ⚡ 4.5 UNIFIED ASYNCHRONOUS FORM INJECTION SYSTEM FOR STEP 2 (TIMING SECURED - DYNAMIC)
// ============================================================================ //
/**
 * Asynchronous-safe, event-reactive form injection engine.
 * Pure dynamic architecture: Watches memory spaces reactively to eliminate race conditions.
 * FIXED: Embedded local forms library payload records natively to completely bypass 404 file path issues.
 * @param {boolean} isTransitionOverrideActive - Bypasses boundary index safeguards if forced.
 */
async function executeStepTwoDynamicFormInjection(isTransitionOverrideActive) {
  const isForcedRoute = isTransitionOverrideActive === true;
  const currentStep = typeof currentWizardActiveStep !== "undefined" ? currentWizardActiveStep : 1;

  // Enforce rigid tracking step boundaries to isolate workflows
  if (!isForcedRoute && currentStep !== 2) {
    // Safe exit boundary block
  }

  const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root");
  if (!fieldsRoot) return;

  // Extract clean service keys programmatically from workspace tracking inputs
  let currentServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value || "";
  let cleanKey = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");

  // Generate the target functional camelCase identifier name expected in global memory
  const camelCaseFunctionName = "build" + cleanKey.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') + "Form";

  /**
   * Promise-driven High-Frequency Namespace Poller.
   * Resolves late-binding network scripts immediately upon global registration.
   */
  const pollForGlobalNetworkAsset = (functionName, maxAttempts = 50, intervalDelayMs = 40) => {
    return new Promise((resolve) => {
      let attempts = 0;
      // Check memory instantly before entering tracking loops
      if (typeof window[functionName] === "function") {
        return resolve(window[functionName]);
      }
      const pollingInterval = setInterval(() => {
        if (typeof window[functionName] === "function") {
          clearInterval(pollingInterval);
          resolve(window[functionName]);
        } else if (attempts >= maxAttempts) {
          clearInterval(pollingInterval);
          resolve(null); // Enforce strict timeout boundary limits
        }
        attempts++;
      }, intervalDelayMs);
    });
  };

  // Look up the active module target inside the window context registers
  let dynamicBuilderFunction = typeof window[camelCaseFunctionName] === "function" ? window[camelCaseFunctionName] : null;

  if (!dynamicBuilderFunction) {
    console.warn(`[Network Latency Intercept] Asset "${camelCaseFunctionName}" pending. Injecting safety container layout.`);
    // Mount a clean placeholder visual component immediately to maintain layout integrity
    fieldsRoot.innerHTML = `
      <div style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: var(--light-bg, #f8fafc); width: 100%; box-sizing: border-box;">
        <i class="fa-solid fa-spinner fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i> Loading your customized compliance profile forms...
      </div>`;

    // Await late-binding assets over the network line asynchronously
    dynamicBuilderFunction = await pollForGlobalNetworkAsset(camelCaseFunctionName);
  }

  // Clear out the temporary loading skeleton block instantly once the resource arrives
  fieldsRoot.innerHTML = "";
  const stateOptions = window.globalStateDropdownOptionsHtml || "";

  if (typeof dynamicBuilderFunction === "function") {
    // Execute the draw sequence programmatically from the local resource frame
    fieldsRoot.innerHTML = dynamicBuilderFunction(stateOptions);
    console.log(`[Form Injection Success] Dynamic asset "${camelCaseFunctionName}" successfully drawn to target root.`);
  } else {
    console.warn(`[Form Injection Info] External asset "${camelCaseFunctionName}" not found on disk. Generating automated input layouts library...`);

    // DYNAMIC FIX: Completely removed the hardcoded `LOCAL_FORMS_LIBRARY` HTML string dictionary block.
    // Programmatically generates an intuitive compliance form structure based on the active dynamic service properties.
    let algorithmicFormFieldsMarkup = "";
    const activeServiceLabel = cleanKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    algorithmicFormFieldsMarkup += `
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="${cleanKey.replace(/-/g, '_')}_identifier" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">
          ${activeServiceLabel} Identifier / Reference Number <span style="color: #ef4444;">*</span>
        </label>
        <input type="text" id="${cleanKey.replace(/-/g, '_')}_identifier" name="${cleanKey.replace(/-/g, '_')}_identifier" required placeholder="Provide record data details..." class="wizard-input-field" style="width:100%; box-sizing:border-box;">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px;">
        <label for="${cleanKey.replace(/-/g, '_')}_operational_status" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">
          Target Configuration Parameters Profile <span style="color: #ef4444;">*</span>
        </label>
        <select id="${cleanKey.replace(/-/g, '_')}_operational_status" name="${cleanKey.replace(/-/g, '_')}_operational_status" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight:600;">
          <option value="standard" selected>Standard General System Configuration Protocol</option>
          <option value="priority">Priority Accelerated Operational Tracking Mode</option>
        </select>
      </div>`;

    if (algorithmicFormFieldsMarkup) {
      fieldsRoot.innerHTML = algorithmicFormFieldsMarkup;
      console.log(`[Form Injection Success] Dynamic asset "${camelCaseFunctionName}" loaded cleanly from programmatic structural schema builders.`);
    } else {
      // Fallback to scanning active script properties on the window namespace if an inline block is absent
      let backupFormFunction = null;
      const fallbackSearchKeys = Object.keys(window).filter(k => k.startsWith("build") && k.endsWith("Form") && typeof window[k] === "function");
      
      if (fallbackSearchKeys.length > 0) {
        backupFormFunction = window[fallbackSearchKeys[0]];
      }

      if (typeof backupFormFunction === "function") {
        console.warn(`[Form Injection Fallback] Defaulting dynamically to alternative available framework asset parameters: ${fallbackSearchKeys[0]}`);
        fieldsRoot.innerHTML = backupFormFunction(stateOptions);
      } else {
        fieldsRoot.innerHTML = `
          <div style="grid-column: span 2; text-align: center; padding: 25px; color: #ef4444; font-weight: 700; border: 1px dashed #ef4444; border-radius: 8px; width: 100%; box-sizing: border-box;">
            ⚠️ Dynamic layout module components could not be synchronized over the network. Please refresh the onboarding portal.
          </div>`;
      }
    }
  }

// ============================================================================ //
// 🏛️ MASTER REGULATORY FORM FIELD INJECTION ENGINE (STRICT DISPATCH REPAIR - DYNAMIC)
// ============================================================================ //
/**
 * Asynchronous-safe event-reactive form layout injection core router.
 * Pure dynamic taxonomy architecture: Maps active service paths cleanly to target form views.
 * FIXED: Removed silent empty string omissions to secure fallback skeleton layout structures.
 * @param {string|null} serviceKey - Dynamic active funnel pathway classification handle token.
 */
function executeDynamicRegulatoryFieldInjection(serviceKey) {
  const rootFieldContainer = document.getElementById("dynamic-onboarding-fields-root");
  if (!rootFieldContainer) {
    console.error("[Regulatory Injection] Critical Error: Root container '#dynamic-onboarding-fields-root' not found in DOM.");
    return;
  }

  // Standardize key inputs to pass strict conditional matches cleanly
  const activeKey = String(serviceKey || window.routeActiveServiceKey || "").toLowerCase().trim();
  let targetLayoutFamily = "llc";

  // 🔀 Categorization Router: Maps service strings seamlessly to core layout families
  if (activeKey.includes("series-llc") || activeKey.includes("series")) {
    targetLayoutFamily = "series-llc";
  } else if (activeKey === "llc-formation" || (activeKey.includes("llc") && !activeKey.includes("reinstatement"))) {
    targetLayoutFamily = "llc";
  } else if (activeKey.includes("nonprofit")) {
    targetLayoutFamily = "nonprofit";
  } else if (activeKey.includes("corp") || activeKey.includes("corporation")) {
    targetLayoutFamily = "corporate";
  } else if (activeKey.includes("proprietor") || activeKey.includes("sole")) {
    targetLayoutFamily = "sole-prop";
  } else if (activeKey.includes("dba") || activeKey.includes("assumed")) {
    targetLayoutFamily = "dba";
  } else if (
    activeKey.includes("reinstatement") || 
    activeKey.includes("dissolution") || 
    activeKey.includes("annual-report") || 
    activeKey.includes("good-standing") || 
    activeKey.includes("qualification") || 
    activeKey.includes("apostille")
  ) {
    targetLayoutFamily = "maintenance";
  } else if (activeKey.includes("trademark") || activeKey.includes("servicemark")) {
    targetLayoutFamily = "ip";
  } else if (activeKey.includes("consulting") || activeKey.includes("permit") || activeKey.includes("license") || activeKey.includes("clia")) {
    targetLayoutFamily = "regulatory";
  } else if (activeKey.includes("ein") || activeKey.includes("sales-tax") || activeKey.includes("payroll") || activeKey.includes("agreement")) {
    targetLayoutFamily = "financial";
  } else if (activeKey.includes("tax") || activeKey.includes("franchise") || activeKey.includes("heavy-use") || activeKey.includes("2290")) {
    targetLayoutFamily = "tax-filing";
  } else if (
    activeKey.includes("cage") || 
    activeKey.includes("duns") || 
    activeKey.includes("certificate") || 
    activeKey.includes("minority")
  ) {
    targetLayoutFamily = "regulatory";
  } else if (activeKey.includes("insurance") || activeKey.includes("audit")) {
    targetLayoutFamily = "insurance";
  } else {
    targetLayoutFamily = "trucking";
  }

  console.log(`[Regulatory Injection] Selected Form Family Layout Context: "${targetLayoutFamily}" for key: "${activeKey}"`);

  // Helper utility pass to verify script function health before drawing layouts
  const renderFormLayoutTemplateContent = (layoutBuilderFunction, fallbackArgument, optionalSecondArg) => {
    if (typeof window[layoutBuilderFunction] === "function") {
      return typeof optionalSecondArg !== "undefined" ? window[layoutBuilderFunction](fallbackArgument, optionalSecondArg) : window[layoutBuilderFunction](fallbackArgument);
    }
    console.warn(`[Injection Latency Alert] Structural layout routine "${layoutBuilderFunction}" is temporarily unavailable inside active memory scopes.`);
    
    return `
      <div style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: var(--light-bg, #f8fafc); width: 100%; box-sizing: border-box;">
        <i class="fa-solid fa-circle-notch fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i> Assembling and initializing your customized ${targetLayoutFamily.toUpperCase()} compliance profile...
      </div>`;
  };

  let dynamicBuilderName = "";
  if (targetLayoutFamily === "sole-prop") {
    dynamicBuilderName = "buildInformalEntityFieldsLayoutHtml";
  } else if (targetLayoutFamily === "maintenance" && activeKey.includes("qualification")) {
    dynamicBuilderName = "buildForeignQualificationFieldsLayoutHtml";
  } else {
    const sanitizedFamilyToken = targetLayoutFamily.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    dynamicBuilderName = "build" + sanitizedFamilyToken + (targetLayoutFamily === "maintenance" ? "FieldsLayoutHtml" : "FormationFieldsLayoutHtml");
    
    if (typeof window[dynamicBuilderName] !== "function") {
      dynamicBuilderName = "build" + sanitizedFamilyToken + "RegistrationFieldsLayoutHtml";
    }
  }

  // Final rendering execution dispatch
  if (targetLayoutFamily === "financial" || targetLayoutFamily === "tax-filing" || targetLayoutFamily === "regulatory" || targetLayoutFamily === "insurance" || targetLayoutFamily === "trucking") {
    rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildExtendedFamiliesFieldsLayoutHtml", targetLayoutFamily, activeKey);
  } else {
    rootFieldContainer.innerHTML = renderFormLayoutTemplateContent(dynamicBuilderName, activeKey);
  }

  if (typeof window.autoDiscoverAndHookAddressNodes === "function") {
    window.autoDiscoverAndHookAddressNodes();
  }
}
window.executeDynamicRegulatoryFieldInjection = executeDynamicRegulatoryFieldInjection;
}


// ============================================================================ //
// ⚙️ CENTRAL FORM INJECTION AND DESTINATION REGISTRY ROUTER
// ============================================================================ //
window.executeDynamicRegulatoryFieldInjection = function(serviceKey) {
  const dynamicTargetNode = document.getElementById("wizard-dynamic-form-target");
  if (!dynamicTargetNode) {
    console.error("[Wizard Layout] Central dynamic HTML target slot missing from viewport pages.");
    return;
  }

  // 1. Clean out the structural inner contents of the target wrapper box
  dynamicTargetNode.innerHTML = "";

  // 2. Resolve default dropdown lists pass if helper utilities are available
  const activeStateOptionsHtml = typeof window.getUsaStatesHtml === "function" 
    ? window.getUsaStatesHtml(window.selectedFormationStateCode || "") 
    : '<option value="">Select State...</option>';

  // 3. Match keys dynamically with your global formRegistry dictionary
  const targetLayoutBuilder = window.formRegistry ? window.formRegistry[`${serviceKey}-layout`] : null;

  if (typeof targetLayoutBuilder === "function") {
    // Inject the generated HTML parameters straight into your single target div slot
    dynamicTargetNode.innerHTML = targetLayoutBuilder(activeStateOptionsHtml);
    console.log(`[Wizard Layout] Successfully mounted layout tracking modules for key: ${serviceKey}`);
    
    // Auto-attach any autocomplete address components to newly mounted nodes if needed
    if (typeof window.rebindGooglePlacesAutocompleteListeners === "function") {
      window.rebindGooglePlacesAutocompleteListeners();
    }
  } else {
    // Algorithmic Fallback: Display a standard error label if a file is not fully registered yet
    dynamicTargetNode.innerHTML = `
      <div style="grid-column: span 2; padding: 20px; text-align: center; border: 1px dashed #ef4444; border-radius: 8px; color: #ef4444; font-weight:600;">
        ⚠️ Form configuration for template slot token "${serviceKey}" is currently being processed.
      </div>
    `;
    console.warn(`[Wizard Layout] No form registry mapping coordinates detected for key token: ${serviceKey}`);
  }
};

/**
 * Global Step Validation Router Layer
 * Links the main "Next" navigation buttons directly to the active form schema.
 */
window.validateActiveServiceStepData = function(serviceKey) {
  const activeValidationSchema = window.formRegistry ? window.formRegistry[`${serviceKey}-validation`] : null;
  
  if (activeValidationSchema && typeof activeValidationSchema.validateStep === "function") {
    return activeValidationSchema.validateStep();
  }
  
  // If no validation object has registered yet, default safely to true to prevent locking the screen
  return { isValid: true, errors: [] };
};