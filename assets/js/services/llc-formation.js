(function () { 
    "use strict";

    // Safe global namespace initialization to prevent script-loader crashes 
    window.formRegistry = window.formRegistry || {}; 

    /** 
     * Generates HTML dropdown options for all 50 US States. 
     * @param {string} [selected] - 2-digit uppercase code to pre-select. 
     * @returns {string} HTML option tags. 
     */ 
    window.buildGlobalUsaStateDropdownOptionsHtml = function (selected) { 
        const states = [ 
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA", 
            "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD", 
            "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ", 
            "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC", 
            "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY" 
        ]; 
        const target = String(selected || "").toUpperCase().trim(); 
        const options = states.map(st => `<option value="${st}" ${st === target ? "selected" : ""}>${st}</option>`); 
        return '<option value="">-- Select State --</option>' + options.join(""); 
    }; 
})(); 

window.formRegistry = window.formRegistry || {}; 

/** 
 * Part 1 of Step 2: Context Tooltip, Info Banner, and Headquarters State Dropdown. 
 * Formatted cleanly to preserve your 2-column side-by-side framework spacing.
 */ 
window.formRegistry['llc-formation-part1-layout'] = function(stateDropdownOptionsHtml) { 
    console.log("[LLC Layout] Running initial step configuration pass..."); 

    // Extract values safely from Step 0 context parameters 
    const urlParams = new URLSearchParams(window.location.search); 
    const selectedStateCode = String(window.selectedJurisdiction || localStorage.getItem('wizard_selected_state') || urlParams.get('state') || "TX").toUpperCase().trim(); 
    const serviceSlug = String(window.currentServiceKey || window.routeActiveServiceKey || urlParams.get('service') || "llc-formation").toLowerCase().trim(); 

    // Context mappings for state codes and service types 
    const stateMapping = { "AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming" }; 
    const fullStateName = stateMapping[selectedStateCode] || selectedStateCode; 

    let readableServiceTitle = "Business Filing"; 
    if (serviceSlug.includes("llc")) readableServiceTitle = "LLC Formation"; 
    else if (serviceSlug.includes("corp")) readableServiceTitle = "Corporation Formation"; 
    else if (serviceSlug.includes("annual")) readableServiceTitle = "Annual Filing"; 

    var buildStateHtml = typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml : window.buildGlobalUsaStateDropdownOptionsHtml; 
    var blankStatesHtml = buildStateHtml(""); 

    return ` 
 <!-- Context-Aware Tooltip Container Box (Spans full width) --> 
 <div class="context-jurisdiction-tooltip-banner" style="grid-column: span 2; width: 100%; background: #f0fdf4; border: 1px solid #bbf7d0; border-left: 4px solid #10b981; padding: 16px; border-radius: 6px; box-sizing: border-box; margin-top: -12px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; clear: both;"> 
 <span style="color: #10b981; font-size: 1.15rem; display: flex; align-items: center;"><i class="fa-solid fa-circle-check"></i></span> 
 <p style="margin: 0; color: #14532d; font-size: 0.92rem; font-weight: 700; line-height: 1.4;"> 
 You are completing an <span style="color: #0a1f44; font-weight: 800; border-bottom: 2px solid #10b981; padding-bottom: 1px;">${readableServiceTitle}</span> for the State of <span style="color: #0a1f44; font-weight: 800; border-bottom: 2px solid #10b981; padding-bottom: 1px;">${fullStateName}</span>. 
 </p> 
 </div> 

 <!-- Info Banner (Spans full width) --> 
 <div style="grid-column: span 2; width: 100%; background: rgba(10, 31, 68, 0.03); border-left: 4px solid var(--navy, #0a1f44); padding: 14px; border-radius: 0 8px 8px 0; font-size: 0.8rem; line-height: 1.4; color: var(--slate, #64748b); box-sizing: border-box; margin-bottom: 20px; clear: both;"> 
 <strong style="color: var(--navy, #0a1f44); display: block; margin-bottom: 4px;"><i class="fa-solid fa-circle-info"></i> What is an LLC?</strong> An LLC (Limited Liability Company) is a formal business structure that protects your personal assets by separating them from your business liabilities. 
 </div> 

 <!-- Section 1 Title Row (Spans full width) --> 
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 12px; margin-bottom: 16px; clear: both;"> 
 <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">1. Business Information</h3> </div> 

 <!-- Headquarter Dropdown Field (Left column track - side-by-side with upcoming fields) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; box-sizing: border-box;"> 
 <label style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">What state will your headquarters be in? *</label> 
 <select name="headquarters_state" id="headquarters_state" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
 ${blankStatesHtml} 
 </select> </div> 
`; 
};
window.formRegistry = window.formRegistry || {}; 

/** 
 * Part 2 of Step 2: Proposed Name, Address Form Matrix, and Industry Classifications.
 * Configured explicitly under part2-layout to line up perfectly across the grid tracks.
 */ 
window.formRegistry['llc-formation-part2-layout'] = function(stateDropdownOptionsHtml) { 
    console.log("[LLC Layout] Compiling step layout part 2: Address and profiling data layers...");
    
    var buildStateHtml = typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml : window.buildGlobalUsaStateDropdownOptionsHtml; 
    var blankStatesHtml = buildStateHtml(""); 

    return ` 
 <!-- Proposed Entity Naming Row (Full width row) --> 
 <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; box-sizing: border-box; clear: both;"> 
 <label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Proposed LLC Name <span style="color: #ef4444;">*</span></label> 
 <input type="text" id="llc_proposed_name" name="ent_legal_name" required placeholder="Example Logistics LLC" class="wizard-input-field validate-letters" onblur="if(typeof validateLlcNameSuffix==='function') validateLlcNameSuffix(this);" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
 <span style="font-size: 0.7rem; color: var(--slate, #64748b); font-weight: 500; padding-left: 2px; margin-top: -2px;">Must include "LLC" or "Limited Liability Company".</span> </div> 

 <!-- Zip Code Input Group (Right column track - balances the odd Headquarters field from Part 1) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; box-sizing: border-box;"> 
 <label style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Business Zip Code *</label> 
 <input type="text" id="ent_address_zip" name="ent_address_zip" required class="wizard-input-field validate-numbers" maxlength="5" placeholder="5-digit ZIP code" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> </div> 

 <!-- Complete Corporate Address Matrix (Full width rows) --> 
 <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; box-sizing: border-box; clear: both;"> 
 <label style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Business Address *</label> 
 <input type="text" id="ent_address_street" name="ent_address_street" required class="wizard-input-field" placeholder="Street address" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> </div> 

 <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; box-sizing: border-box; clear: both;"> 
 <label style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Suite, building, etc. (Optional)</label> 
 <input type="text" id="ent_address_suite" name="ent_address_suite" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> </div> 

 <!-- Side-by-Side Row: City and State --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; box-sizing: border-box;"> 
 <label style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Business City *</label> 
 <input type="text" id="ent_address_city" name="ent_address_city" required class="wizard-input-field validate-letters" placeholder="City" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> </div> 

 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; box-sizing: border-box;"> 
 <label style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Business State *</label> 
 <select id="business_state" name="business_state" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
 ${blankStatesHtml} 
 </select> </div> 

 <!-- Business Purpose Dropdown (Full width row) --> 
 <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px; margin-top: 12px; margin-bottom: 20px; box-sizing: border-box; clear: both;"> 
 <label style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);">Business Purpose / Activities <span style="color: #ef4444;">*</span></label> 
 <select id="llc_business_purpose" name="business_purpose_naics" required class="wizard-input-field" style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; width: 100%; box-sizing: border-box; background-color: #ffffff;"> 
 <option value="">-- Select Industry Classification --</option> 
 <option value="541110">Offices of Lawyers (NAICS 541110)</option> 
 <option value="541211">Offices of Certified Public Accountants (NAICS 541211)</option> 
 <option value="541330">Engineering Services (NAICS 541330)</option> 
 <option value="541511">Custom Computer Programming Services (NAICS 541511)</option> 
 <option value="541611">Administrative Management Consulting Services (NAICS 541611)</option> 
 <option value="541810">Advertising Agencies (NAICS 541810)</option> 
 <option value="621111">Offices of Physicians (NAICS 621111)</option> 
 <option value="621210">Offices of Dentists (NAICS 621210)</option> 
 <option value="236115">New Single-Family Housing Construction (NAICS 236115)</option> 
 <option value="531210">Offices of Real Estate Agents and Brokers (NAICS 531210)</option> 
 <option value="722511">Full-Service Restaurants (NAICS 722511)</option> 
 <option value="454110">Electronic Shopping (NAICS 454110)</option> 
 <option value="484121">General Freight Trucking (NAICS 484121)</option> 
 <option value="561730">Landscaping Services (NAICS 561730)</option> 
 <option value="812112">Beauty Salons (NAICS 812112)</option> 
 </select> </div> 
`; 
};
window.formRegistry = window.formRegistry || {}; 

/** 
 * Part 3 of Step 2: Registered Agent View Layout Grid. 
 * Re-indexed cleanly to part3-layout to guarantee step ordering without grid track collapse.
 */ 
window.formRegistry['llc-formation-part3-layout'] = function() { 
    console.log("[LLC Layout Enforcer] Compiling Step 2 Registered Agent layer template..."); 
    
    var buildStateHtml = typeof window.getUsaStatesHtml === "function" ? window.getUsaStatesHtml : window.buildGlobalUsaStateDropdownOptionsHtml; 
    var blankStatesOptions = buildStateHtml(""); 

    return ` 
 <!-- SECTION 2: REGISTERED AGENT --> 
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 24px; width: 100%; box-sizing: border-box; clear: both;"> 
 <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">2. Registered Agent</h3> </div> 

 <!-- Core Choice Dropdown Group (Full width row) --> 
 <div class="wizard-input-group" style="grid-column: span 2; margin-top: 12px; margin-bottom: 20px; width: 100%; display: flex; flex-direction: column; gap: 6px; box-sizing: border-box; clear: both;"> 
 <label for="llc_ra_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44);"> Do you have a Registered Agent already? * </label> 
 <select id="llc_ra_choice" name="llc_ra_choice" required class="wizard-input-field" style="width:100%; height:44px; background:#ffffff; border:1px solid #cbd5e1; border-radius: 6px; padding: 10px 12px; font-weight: 600; box-sizing: border-box;" onchange="if(typeof window.toggleRegisteredAgentConditionalFields==='function') window.toggleRegisteredAgentConditionalFields(this.value)"> 
 <option value="" disabled selected>Choose...</option> 
 <option value="custom">Yes, I want to add the information below</option> 
 <option value="filings4u">No, I want to use filings4u - $75/ yr.</option> 
 </select> </div> 

 <!-- CONDITIONAL CUSTOM AGENT WRAPPER --> 
 <!-- FIX: Controlled via an explicit sub-grid track layout so child elements align flawlessly on your side-by-side tracks when unhidden --> 
 <div id="llc_custom_ra_wrapper" style="grid-column: span 2; display: none; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; box-sizing: border-box;"> 
 
 <!-- Agent Name Input Node (Full row width) --> 
 <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px; margin-bottom: 5px; width: 100%;"> 
 <label for="ra_custom_name" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Registered Agent Name *</label> 
 <input type="text" id="ra_custom_name" name="ra_custom_name" class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 

 <!-- Street Address & Suite Matrix (Side-by-side layout track row) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 5px;"> 
 <label for="ra_custom_street" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Physical Street Address (No P.O. Boxes) *</label> 
 <input type="text" id="ra_custom_street" name="ra_custom_street" class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 

 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 5px;"> 
 <label for="ra_custom_suite" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Suite, building, etc. (Optional)</label> 
 <input type="text" id="ra_custom_suite" name="ra_custom_suite" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 

 <!-- Geographic Columns Split (Side-by-side layout track row) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;"> 
 <label for="ra_custom_city" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">City *</label> 
 <input type="text" id="ra_custom_city" name="ra_custom_city" class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 

 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;"> 
 <label for="ra_custom_state" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">State *</label> 
 <select id="ra_custom_state" name="ra_custom_state" class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;"> 
 ${blankStatesOptions} 
 </select> </div> 

 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;"> 
 <label for="ra_custom_zip" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Zip *</label> 
 <input type="text" id="ra_custom_zip" name="ra_custom_zip" maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 
 
 <!-- Empty layout slot to clean up and balance the row -->
 <div class="wizard-input-group" style="grid-column: span 1; margin-bottom: 20px;"></div>
 </div> `; 
};
window.formRegistry = window.formRegistry || {}; 

/** 
 * Part 4 of Step 2: LLC Membership Registry UI Template. 
 * Re-indexed cleanly to part4-layout to guarantee layout sequence stability without overwriting agent details.
 */ 
window.formRegistry['llc-formation-part4-layout'] = function() { 
    console.log("[LLC Realignment Fix] Rebuilding Section 3 standalone container blocks..."); 
    
    var stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? 
                       window.buildGlobalUsaStateDropdownOptionsHtml("") : 
                       '<option value="TX">Texas (TX)</option>'; 
                       
    return ` 
 <!-- SECTION 3: MEMBERSHIP REGISTRY (ISOLATED STANDALONE CONTAINER) --> 
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 24px; width: 100%; box-sizing: border-box; clear: both;"> 
 <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">3. LLC Membership Registry</h3> </div> 

 <div class="wizard-input-group" style="grid-column: span 2; width: 100%; margin: 0; margin-top: 16px; box-sizing: border-box; clear: both;"> 
 <div id="llc_members_container" style="display: flex; flex-direction: column; gap: 20px; width: 100%; box-sizing: border-box;"> 
 
 <!-- MEMBERSHIP RECORD CARD PANEL (MEMBER #1 REQUIRED BASE) --> 
 <div class="member-record-card" id="member_card_1" style="background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 20px; border-radius: 8px; width: 100%; box-sizing: border-box; display: block;"> 
 <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary, #10b981); text-transform: uppercase; display: block; margin-bottom: 16px;">LLC Member #1 Records</span> 
 
 <!-- Standardized internal carrier layout track to sub-grid configuration so child inputs render beautifully side-by-side -->
 <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; box-sizing: border-box;"> 
 
 <!-- Full Name Input Group (Spans across full row width) --> 
 <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px; width: 100%;"> 
 <label for="member_name_1" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Full Legal Name *</label> 
 <input type="text" id="member_name_1" name="member_name_1" required class="wizard-input-field validate-letters" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 

 <!-- Physical Street Address & Suite (Side-by-side row layout tracks) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_street_1" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Street Address *</label> 
 <input type="text" id="member_street_1" name="member_street_1" required class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 

 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_suite_1" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Suite, building, etc. (Optional)</label> 
 <input type="text" id="member_suite_1" name="member_suite_1" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 

 <!-- City & State Inputs (Side-by-side row layout tracks) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_city_1" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">City *</label> 
 <input type="text" id="member_city_1" name="member_city_1" required class="wizard-input-field validate-letters" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 

 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_state_1" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">State *</label> 
 <select id="member_state_1" name="member_state_1" required class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;"> 
 ${stateOptions} 
 </select> </div> 

 <!-- Zip Code Input Group (Left Column track) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_zip_1" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Zip *</label> 
 <input type="text" id="member_zip_1" name="member_zip_1" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 
 
 <!-- Empty column track item to balance row grid fields completely -->
 <div class="wizard-input-group" style="grid-column: span 1;"></div>
 </div> </div> </div> 

 <!-- Multi-Member Node Dynamic Replication Trigger Button --> 
 <button type="button" onclick="if(typeof window.appendNewLlcMemberRecordFieldNode === 'function') { window.appendNewLlcMemberRecordFieldNode(); }" style="margin-top: 16px; background: transparent; border: 1px dashed var(--primary, #10b981); color: var(--primary, #10b981); font-weight: 700; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s ease;"> 
 <i class="fa-solid fa-plus"></i> Add Additional Member </button> </div>`; 
};
window.formRegistry = window.formRegistry || {}; 

/** 
 * Part 5 of Step 2: LLC Management, Lifespan, and EIN Tax Options Template. 
 * Re-registered straight to part5-layout to guarantee structural step alignment.
 */ 
window.formRegistry['llc-formation-part5-layout'] = function() { 
    console.log("[LLC Realignment Fix] Compiling absolute Section 4 layout panel side-by-side..."); 
    
    // Resolve unified metadata pricing variables from database records safely 
    var centralRegistrySource = window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {}; 
    var einMetaRecord = centralRegistrySource["customSelectedEinProcurementServiceActive"] || {}; 
    var liveEinFee = parseFloat(einMetaRecord.price || 79.00).toFixed(2); 

    return ` 
 <!-- SECTION 4: MANAGEMENT OPTIONS (ISOLATED STANDALONE CONTAINER) --> 
 <div style="grid-column: span 2; border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 8px; margin-top: 24px; width: 100%; box-sizing: border-box; clear: both;"> 
 <h3 style="color: var(--navy, #0a1f44); font-size: 1.1rem; font-weight: 800; margin: 0;">4. Management & Options</h3> </div> 

 <!-- Core Grid Sub-Container --> 
 <div style="grid-column: span 2; display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; margin-top: 16px; box-sizing: border-box; clear: both;"> 
 
 <!-- Management Type Drop-down Group (Left Column Track) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin: 0;"> 
 <label for="llc_management_type" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44); display: block;">Management Type</label> 
 <select id="llc_management_type" name="llc_management_type" required class="wizard-input-field" style="width:100%; height:44px; background:#ffffff; border:1px solid #cbd5e1; border-radius: 6px; padding: 10px 12px; font-weight: 600; box-sizing: border-box;" onchange="if(typeof window.toggleLlcManagerFieldsMatrix==='function') window.toggleLlcManagerFieldsMatrix(this.value)"> 
 <option value="member-managed" selected>Member-Managed</option> 
 <option value="manager-managed">Manager-Managed</option> 
 </select> </div> 

 <!-- Federal EIN Questionnaire Drop-down Group (Right Column Track) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin: 0;"> 
 <label for="llc_ein_status" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44); display: block;">Do you possess an active EIN?</label> 
 <select id="llc_ein_status" name="llc_ein_status" required class="wizard-input-field" style="width:100%; height:44px; background:#ffffff; border:1px solid #cbd5e1; border-radius: 6px; padding: 10px 12px; font-weight: 600; box-sizing: border-box;" onchange="if(typeof window.toggleEinConditionalWorkflow==='function') window.toggleEinConditionalWorkflow(this.value)"> 
 <option value="" disabled selected>Choose...</option> 
 <option value="yes">Yes, I possess an active EIN</option> 
 <option value="no-buy">No, I need an EIN — Add Procurement ($${liveEinFee})</option> 
 <option value="no-decline">No, I decline procurement services</option> 
 </select> </div> 

 <!-- Conditional Manager Listing Form Textarea Wrapper (Spans full width for notes text) --> 
 <div id="llc_manager_names_wrapper" style="grid-column: span 2; display: none; flex-direction: column; gap: 6px; width: 100%;"> 
 <label for="llc_manager_names" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44); text-transform: uppercase;">Manager Names & Addresses</label> 
 <textarea id="llc_manager_names" name="llc_manager_names" rows="2" class="wizard-input-field" placeholder="List Full Names and Addresses of Managers" style="width:100%; border-radius:6px; border:1px solid #cbd5e1; padding:12px; box-sizing:border-box; font-family: inherit; font-weight: 600; resize: vertical; background-color: #ffffff;"></textarea> </div> 

 <!-- Conditional Existing EIN Numeric Input Wrapper (Left Column track) --> 
 <div id="llc_manual_ein_wrapper" style="grid-column: span 1; display: none; flex-direction: column; gap: 6px; width: 100%;"> 
 <label for="llc_existing_ein_field" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44); display: block;">Enter Existing EIN</label> 
 <input type="text" id="llc_existing_ein_field" name="llc_existing_ein_field" placeholder="00-0000000" class="wizard-input-field validate-numbers" style="width:100%; height:44px; padding: 10px 12px; border:1px solid #cbd5e1; border-radius: 6px; font-weight: 600; box-sizing: border-box; background-color: #ffffff;"> </div> 

 <!-- Corporate Lifespan Horizon Drop-down Group (Left Column track) --> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px; margin: 0;"> 
 <label for="llc_duration_choice" style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; color: var(--navy, #0a1f44); display: block;">Lifespan Horizon</label> 
 <select id="llc_duration_choice" name="llc_duration_choice" required class="wizard-input-field" style="width:100%; height:44px; background:#ffffff; border:1px solid #cbd5e1; border-radius: 6px; padding: 10px 12px; font-weight: 600; box-sizing: border-box;" onchange="if(typeof window.toggleLlcDurationDateVisibility==='function') window.toggleLlcDurationDateVisibility(this.value)"> 
 <option value="perpetual" selected>Perpetual Duration</option> 
 <option value="specified">Specified Term</option> 
 </select> </div> 

 <!-- Conditional Expiration Calendar Date Selector Wrapper (Right Column track) --> 
 <div id="llc_duration_date_wrapper" style="grid-column: span 1; display: none; flex-direction: column; gap: 6px; width: 100%;"> 
 <label for="llc_expiration_date" style="font-weight: 700; font-size: 0.85rem; color: var(--navy, #0a1f44);">Expiration Date</label> 
 <input type="date" id="llc_expiration_date" name="llc_expiration_date" class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border:1px solid #cbd5e1; border-radius: 6px; font-weight: 600; box-sizing: border-box; background-color: #ffffff;"> </div> 
 </div> 
`; 
};
window.formRegistry = window.formRegistry || {}; 

/** 
 * Part 6 of Step 2: Master Template Pipeline Assembler. 
 * Sequentially bundles all active markup tracks into your parent grid canvas viewport cleanly.
 */ 
window.formRegistry['llc-formation-form-master'] = function(stateDropdownOptionsHtml) { 
    console.log("[LLC Realignment Fix] Patch-assembling fields with strict structural isolation bounds..."); 

    // Extract individual structural part string layers sequentially out of the global registry
    var part1Html = typeof window.formRegistry['llc-formation-part1-layout'] === 'function' ? window.formRegistry['llc-formation-part1-layout'](stateDropdownOptionsHtml || "") : ""; 
    var part2Html = typeof window.formRegistry['llc-formation-part2-layout'] === 'function' ? window.formRegistry['llc-formation-part2-layout'](stateDropdownOptionsHtml || "") : ""; 
    var part3Html = typeof window.formRegistry['llc-formation-part3-layout'] === 'function' ? window.formRegistry['llc-formation-part3-layout']() : ""; 
    var part4Html = typeof window.formRegistry['llc-formation-part4-layout'] === 'function' ? window.formRegistry['llc-formation-part4-layout']() : ""; 
    var part5Html = typeof window.formRegistry['llc-formation-part5-layout'] === 'function' ? window.formRegistry['llc-formation-part5-layout']() : ""; 

    // Synchronously request frame execution layout adjustments
    if (typeof window.triggerSafeLayoutRealignmentDebounced === "function") { 
        window.triggerSafeLayoutRealignmentDebounced(); 
    } 

    // Encapsulate all elements in a strict, adaptive 2-column CSS Grid wrapper. No escaping backslashes.
    return ` 
 <div class="llc-wizard-compiled-pipeline" style="display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; width: 100% !important; margin: 0 !important; padding: 0 !important; box-sizing: border-box !important; clear: both !important;"> 
 ${part1Html} 
 ${part2Html} 
 ${part3Html} 
 ${part4Html} 
 ${part5Html} 
 </div> `; 
}; 

// Re-map central initializers safely back to global hooks 
window.buildLlcFormationFieldsLayoutHtml = function() { 
    return window.formRegistry['llc-formation-form-master'](); 
};

/** 
 * Part 7-A of Step 2: Validation Engine Matrices & Conditional Workflow Toggles.
 * Direct functional pipelines map parameters without cross-file leaks or browser delays.
 */ 
window.llcFormationValidation = window.llcFormationValidation || { 
    validateStep: function(partNumber) { 
        const canvasContainer = document.getElementById("step-2-onboarding-fields-canvas") || document.getElementById("step-2-injection-placeholder") || document.body; 
        let isValid = true; 
        let errors = []; 

        const setError = (el, msg) => { 
            if (!el) return; 
            isValid = false; 
            el.style.setProperty("border-color", "#b91c1c", "important"); 
            if (!errors.includes(msg)) errors.push(msg); 
        }; 

        const clearError = (el) => { 
            if (!el) return; 
            el.style.setProperty("border-color", "#cbd5e1", "important"); 
        }; 

        const isFieldActive = (el) => !!(el && !el.disabled && (el.offsetWidth > 0 || el.offsetHeight > 0)); 

        if (partNumber === 1 || partNumber === 2) { 
            const baseProfileFields = [ 
                { id: 'headquarters_state', msg: 'Headquarters state selection is required.' }, 
                { id: 'llc_proposed_name', msg: 'Proposed LLC name is required.' }, 
                { id: 'ent_address_street', msg: 'Business street address is required.' }, 
                { id: 'ent_address_city', msg: 'Business city is required.' }, 
                { id: 'business_state', msg: 'Business state selection is required.' }, 
                { id: 'ent_address_zip', msg: 'Business ZIP code is required.' },
                { id: 'llc_business_purpose', msg: 'Please select an industry classification purpose.' }
            ]; 

            baseProfileFields.forEach(field => { 
                const el = document.getElementById(field.id); 
                if (isFieldActive(el)) { 
                    if (!el.value || !el.value.trim()) setError(el, field.msg); 
                    else clearError(el); 
                } 
            }); 

            const nameInput = document.getElementById("llc_proposed_name"); 
            if (isFieldActive(nameInput) && nameInput.value.trim()) { 
                const nameVal = nameInput.value.trim().toLowerCase(); 
                const hasSuffix = nameVal.endsWith("llc") || nameVal.endsWith("l.l.c.") || nameVal.includes("limited liability company"); 
                if (!hasSuffix) { 
                    setError(nameInput, 'LLC Name must include a compliant suffix such as "LLC" or "Limited Liability Company".'); 
                } 
            } 

            const zipInput = document.getElementById('ent_address_zip'); 
            if (isFieldActive(zipInput) && zipInput.value.trim() && !/^\d{5}$/.test(zipInput.value.trim())) { 
                setError(zipInput, 'Business Zip Code must consist of exactly 5 numbers.'); 
            } 
        } 

        if (partNumber === 3) { 
            const raChoice = document.getElementById("llc_ra_choice"); 
            if (isFieldActive(raChoice)) { 
                if (!raChoice.value) setError(raChoice, 'Please select a registered agent option.'); 
                else clearError(raChoice); 
            } 

            if (raChoice && raChoice.value === "custom" && isFieldActive(raChoice)) { 
                ['ra_custom_name', 'ra_custom_street', 'ra_custom_city', 'ra_custom_state', 'ra_custom_zip'].forEach(id => { 
                    const el = document.getElementById(id); 
                    if (el) { 
                        if (!el.value || !el.value.trim()) setError(el, 'All custom registered agent physical address fields are required.'); 
                        else if (id === 'ra_custom_zip' && !/^\d{5}$/.test(el.value.trim())) setError(el, 'Custom agent Zip Code must be exactly 5 digits.'); 
                        else clearError(el); 
                    } 
                }); 
            } 
        } 

        if (partNumber === 4) { 
            const memberCards = canvasContainer.querySelectorAll(".member-record-card"); 
            memberCards.forEach(card => { 
                const idx = card.id.replace("member_card_", ""); 
                ['name', 'street', 'city', 'state', 'zip'].forEach(fieldKey => { 
                    const el = document.getElementById(`member_${fieldKey}_${idx}`); 
                    if (isFieldActive(el)) { 
                        if (!el.value || !el.value.trim()) setError(el, `Member #${idx}: ${fieldKey.toUpperCase()} is required.`); 
                        else if (fieldKey === 'zip' && !/^\d{5}$/.test(el.value.trim())) setError(el, `Member #${idx}: Zip Code must be exactly 5 digits.`); 
                        else clearError(el); 
                    } 
                }); 
            }); 
        } 

        if (partNumber === 5) { 
            const mgmt = document.getElementById("llc_management_type"); 
            if (mgmt && mgmt.value === "manager-managed" && isFieldActive(mgmt)) { 
                const mgrEl = document.getElementById("llc_manager_names"); 
                if (mgrEl && !mgrEl.value.trim()) setError(mgrEl, "Please provide manager names."); 
                else if (mgrEl) clearError(mgrEl); 
            } 

            const duration = document.getElementById("llc_duration_choice"); 
            if (duration && duration.value === "specified" && isFieldActive(duration)) { 
                const dateEl = document.getElementById("llc_expiration_date"); 
                if (dateEl && !dateEl.value) setError(dateEl, "Please specify a valid company expiration date."); 
                else if (dateEl) clearError(dateEl); 
            } 

            const einStatus = document.getElementById("llc_ein_status"); 
            if (einStatus && einStatus.value === "yes" && isFieldActive(einStatus)) { 
                const einField = document.getElementById("llc_existing_ein_field"); 
                if (einField && einField.value.replace(/\D/g, "").length !== 9) { 
                    setError(einField, "Existing corporate EIN must consist of exactly 9 numeric digits."); 
                } else if (einField) { 
                    clearError(einField); 
                } 
            } 
        } 

        return { isValid, errors }; 
    } 
}; 

// Direct linkage back into central core engine hooks
window.formRegistry['llc-formation-part1-validation'] = { validate: function() { return window.llcFormationValidation.validateStep(1); } }; 
window.formRegistry['llc-formation-part2-validation'] = { validate: function() { return window.llcFormationValidation.validateStep(2); } }; 
window.formRegistry['llc-formation-part3-validation'] = { validate: function() { return window.llcFormationValidation.validateStep(3); } }; 
window.formRegistry['llc-formation-part4-validation'] = { validate: function() { return window.llcFormationValidation.validateStep(4); } }; 
window.formRegistry['llc-formation-part5-validation'] = { validate: function() { return window.llcFormationValidation.validateStep(5); } }; 

window.toggleRegisteredAgentConditionalFields = function(selectedValue) { 
    var wrapper = document.getElementById("llc_custom_ra_wrapper"); 
    if (!wrapper) return; 
    var inputs = wrapper.querySelectorAll("input, select"); 
    
    if (selectedValue === "custom") { 
        wrapper.style.setProperty("display", "grid", "important"); 
        window.customSelectedRegisteredAgentServiceActive = false; 
        if (window.currentCartState) window.currentCartState.registeredAgentAddon = false; 
        inputs.forEach(function(el) { el.setAttribute("required", "required"); }); 
    } else { 
        wrapper.style.setProperty("display", "none", "important"); 
        var coreRegistry = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages || {}; 
        var chosenService = coreRegistry[window.routeActiveServiceKey] || {}; 
        var activePlanKey = window.routeActivePlanKey || ""; 
        var activePlanDetails = chosenService.plans?.[activePlanKey] || chosenService[activePlanKey] || {}; 
        var inclusionsListText = JSON.stringify(activePlanDetails.bullets || chosenService.bullets || "").toLowerCase(); 
        var isAgentIncluded = inclusionsListText.includes("agent") && (inclusionsListText.includes("free") || inclusionsListText.includes("included")); 
        
        window.customSelectedRegisteredAgentServiceActive = !isAgentIncluded; 
        if (window.currentCartState) window.currentCartState.registeredAgentAddon = !isAgentIncluded; 
        inputs.forEach(function(el) { 
            el.removeAttribute("required"); 
            el.value = ""; 
            el.style.setProperty("border-color", "#cbd5e1", "important"); 
        }); 
    } 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla(); 
}; 

window.toggleLlcManagerFieldsMatrix = function(selectedValue) { 
    var wrapper = document.getElementById("llc_manager_names_wrapper"); 
    if (!wrapper) return; 
    var isManagerManaged = selectedValue === "manager-managed"; 
    wrapper.style.setProperty("display", isManagerManaged ? "flex" : "none", "important"); 
    if (!isManagerManaged) { 
        var textareaField = document.getElementById("llc_manager_names"); 
        if (textareaField) { 
            textareaField.value = ""; 
            textareaField.style.setProperty("border-color", "#cbd5e1", "important"); 
        } 
    } 
}; 

window.toggleLlcDurationDateVisibility = function(selectedValue) { 
    var wrapper = document.getElementById("llc_duration_date_wrapper"); 
    if (!wrapper) return; 
    var isTermSpecified = selectedValue === "specified"; 
    wrapper.style.setProperty("display", isTermSpecified ? "flex" : "none", "important"); 
    if (!isTermSpecified) { 
        var dateInput = document.getElementById("llc_expiration_date"); 
        if (dateInput) { 
            dateInput.value = ""; 
            dateInput.style.setProperty("border-color", "#cbd5e1", "important"); 
        } 
    } 
};

window.toggleEinConditionalWorkflow = function(selectedValue) { 
    var manualEinWrapper = document.getElementById("llc_manual_ein_wrapper"); 
    var isExistingEinActive = selectedValue === "yes"; 
    if (manualEinWrapper) { 
        manualEinWrapper.style.setProperty("display", isExistingEinActive ? "flex" : "none", "important"); 
        if (!isExistingEinActive) { 
            var einInput = document.getElementById("llc_existing_ein_field"); 
            if (einInput) { 
                einInput.value = ""; 
                einInput.style.setProperty("border-color", "#cbd5e1", "important"); 
            } 
        } 
    } 
    var isEinAddonPurchased = selectedValue === "no-buy"; 
    window.customSelectedEinProcurementServiceActive = isEinAddonPurchased; 
    if (window.currentCartState) window.currentCartState.einProcurementAddon = isEinAddonPurchased; 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") window.updateDynamicPricingMatrixVanilla(); 
}; 
window.appendNewLlcMemberRecordFieldNode = function() { 
    var membersRootContainer = document.getElementById("llc_members_container"); 
    if (!membersRootContainer) return; 
    
    var currentMemberCount = membersRootContainer.querySelectorAll(".member-record-card").length + 1; 
    var stateOptions = typeof window.buildGlobalUsaStateDropdownOptionsHtml === "function" ? window.buildGlobalUsaStateDropdownOptionsHtml("") : ""; 
    var cardNode = document.createElement("div"); 
    cardNode.className = "member-record-card"; 
    cardNode.id = "member_card_" + currentMemberCount; 
    cardNode.style.cssText = "background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 16px; position: relative; display: block;"; 
    
    cardNode.innerHTML = ` 
 <span style="font-weight: 800; font-size: 0.8rem; color: #10b981; text-transform: uppercase; display: block; margin-bottom: 16px;">LLC Member # \${currentMemberCount} Records</span> 
 <button type="button" onclick="this.parentElement.remove(); if(typeof window.cacheAndRestoreWizardFormStatesVanilla === 'function') { window.cacheAndRestoreWizardFormStatesVanilla(false); }" style="position: absolute; top: 16px; right: 20px; background: transparent; border: none; color: #ef4444; font-weight: 700; cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; gap: 4px;"> <i class="fa-solid fa-trash-can"></i> Remove </button> 
 <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; box-sizing: border-box;"> 
 <div class="wizard-input-group" style="grid-column: span 2; display: flex; flex-direction: column; gap: 6px; width: 100%;"> 
 <label for="member_name_\${currentMemberCount}" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Full Legal Name *</label> 
 <input type="text" id="member_name_\${currentMemberCount}" name="member_name_\${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_street_\${currentMemberCount}" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Street Address *</label> 
 <input type="text" id="member_street_\text{\${currentMemberCount}}" name="member_street_\${currentMemberCount}" required class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_suite_\${currentMemberCount}" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Suite, building, etc. (Optional)</label> 
 <input type="text" id="member_suite_\${currentMemberCount}" name="member_suite_\${currentMemberCount}" class="wizard-input-field" placeholder="Suite, Apt, Floor" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_city_\${currentMemberCount}" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">City *</label> 
 <input type="text" id="member_city_\${currentMemberCount}" name="member_city_\${currentMemberCount}" required class="wizard-input-field validate-letters" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_state_\${currentMemberCount}" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">State *</label> 
 <select id="member_state_\text{\${currentMemberCount}}" name="member_state_\${currentMemberCount}" required class="wizard-input-field" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; background:#ffffff; box-sizing:border-box; font-weight: 600;">\${stateOptions}</select> </div> 
 <div class="wizard-input-group" style="grid-column: span 1; display: flex; flex-direction: column; gap: 6px;"> 
 <label for="member_zip_\${currentMemberCount}" style="font-size:0.85rem; font-weight:700; color: var(--navy, #0a1f44);">Zip *</label> 
 <input type="text" id="member_zip_\${currentMemberCount}" name="member_zip_\${currentMemberCount}" required maxlength="5" class="wizard-input-field validate-numbers" style="width:100%; height:44px; padding: 10px 12px; border-radius:6px; border:1px solid #cbd5e1; box-sizing:border-box; background-color: #ffffff;"> </div> 
 <div style="grid-column: span 1;"></div> 
 </div>`; 
    membersRootContainer.appendChild(cardNode); 
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") window.cacheAndRestoreWizardFormStatesVanilla(false); 
}; 
console.log("[LLC Clean Engine] Layout mutator suite compilation completed successfully.");