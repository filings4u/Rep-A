// ============================================================================
// 🎛️ ENTERPRISE ARCHITECTURE: CORE INJECTOR SYSTEM RUNTIME (PART 1 OF 3)
// ============================================================================

// 📦 PRODUCTION DICTIONARY MATRIX USING THE EXACT WIZARD KEY STRINGS FROM STATE-PRICING
var ENTERPRISE_DATA_MAP = {
    "llc-formation": { name: "LLC Formation", starter: 99.00, compliance: 199.00, enterprise: 299.00, bullets: { starter: ["Articles of Organization Filing", "Standard Processing", "Digital Delivery", "Operating Agreement Template"], compliance: ["Everything in Basic (plus)", "Elite Compliance Guard", "Priority Submission", "Registered Agent Service (1 Year)", "Employer Identification Number"], enterprise: ["Everything in Elite (plus)", "Complete Enterprise Asset Suite", "White Glove Execution", "Instant Turnaround", "Corporate Binder & Seal"] } },
    "corporations": { name: "Corporations (C/S-Corp)", starter: 129.00, compliance: 249.00, enterprise: 599.00, bullets: { starter: ["Name availability search", "State filing fees included", "Corporate Bylaws"], compliance: ["Everything in Basic (plus)", "Registered agent service for 1 year", "Employer Identification Number"], enterprise: ["Everything in Elite (plus)", "Corporate Binder", "Corporate Seal", "Compliance Monitoring (1 Year)"] } },
    "sole-proprietorship": { name: "Sole Proprietorship", starter: 79.00, compliance: 159.00, enterprise: 239.00, bullets: { starter: ["Initial business name registration", "Business tips and resources"], compliance: ["Everything in Basic (plus)", "DBA registration", "Employer Identification Number", "Operating Agreement"], enterprise: ["Everything in Elite (plus)", "Customized business license research", "Business Plan Template"] } },
    "dba-registration": { name: "DBA Registration", starter: 39.00, compliance: 99.00, enterprise: 159.00, bullets: { starter: ["Name availability check", "Filing with the county"], compliance: ["Everything in Basic (plus)", "Guidance on renewal process"], enterprise: ["Everything in Elite (plus)", "State-wide DBA registration option"] } },
    "nonprofit-organization": { name: "Nonprofit Organization", starter: 149.00, compliance: 299.00, enterprise: 499.00, bullets: { starter: ["Articles of incorporation preparation", "Name availability search"], compliance: ["Everything in Basic (plus)", "501(c)(3) application assistance"], enterprise: ["Everything in Elite (plus)", "IRS compliance package"] } },
    "series-llc": { name: "Series LLC", starter: 199.00, compliance: 299.00, enterprise: 399.00, bullets: { starter: ["State filing fees included", "Initial series setup guidance"], compliance: ["Everything in Basic (plus)", "Operating agreement for series"], enterprise: ["Everything in Elite (plus)", "Customized tax and legal strategy guidance"] } },
    "foreign-qualification": { name: "Foreign Qualification Certificate", starter: 149.00, compliance: 249.00, enterprise: 349.00, bullets: { starter: ["Eligibility assessment", "Preparation of application"], compliance: ["Everything in Basic (plus)", "Registered agent service in the foreign state"], enterprise: ["Everything in Elite (plus)", "Compliance reminders and support"] } },
    "llc-reinstatement": { name: "LLC Reinstatement Processing", starter: 79.00, compliance: 149.00, enterprise: 249.00, bullets: { starter: ["Review of reinstatement eligibility", "Basic instructions provided"], compliance: ["Everything in Basic (plus)", "Preparation and submission of forms"], enterprise: ["Everything in Elite (plus)", "Follow-up and support through reinstatement"] } },
    "trademark-filing": { name: "Trademark Filing", starter: 199.00, compliance: 299.00, enterprise: 499.00, bullets: { starter: ["Trademark search", "Basic application filing"], compliance: ["Everything in Basic (plus)", "Preparation of a comprehensive application"], enterprise: ["Everything in Elite (plus)", "Monitoring and support for registration process"] } },
    "servicemark-filing": { name: "Servicemark Filing", starter: 199.00, compliance: 299.00, enterprise: 399.00, bullets: { starter: ["Servicemark search", "Application filing"], compliance: ["Everything in Basic (plus)", "Status tracking for 1 year"], enterprise: ["Everything in Elite (plus)", "Legal consultation on infringement issues"] } },
    "annual-reports": { name: "Annual Reports", starter: 89.00, compliance: 159.00, enterprise: 249.00, bullets: { starter: ["Reminder service for due dates", "Filing support for one year"], compliance: ["Everything in Basic (plus)", "Preparation and filing assistance"], enterprise: ["Everything in Elite (plus)", "Ongoing compliance checks"] } },
    "operating-agreement": { name: "Operating Agreement", starter: 49.00, compliance: 99.00, enterprise: 199.00, bullets: { starter: ["Standard template provided"], compliance: ["Customized operating agreement template"], enterprise: ["Full drafting and consultation services"] } },
    "registered-agent": { name: "Registered Agent", starter: 99.00, compliance: 179.00, enterprise: 299.00, bullets: { starter: ["Registered agent services for one year"], compliance: ["Everything in Basic (plus)", "Mail forwarding service"], enterprise: ["Everything in Elite (plus)", "Annual compliance support"] } },
    "business-licenses": { name: "Business Licenses", starter: 79.00, compliance: 149.00, enterprise: 299.00, bullets: { starter: ["Basic license research"], compliance: ["License application assistance"], enterprise: ["Complete compliance package and ongoing support"] } },
    "employer-id-ein": { name: "Employer ID (EIN)", starter: 79.00, compliance: 149.00, enterprise: 199.00, bullets: { starter: ["EIN application assistance"], compliance: ["Everything in Basic (plus)", "IRS form preparation"], enterprise: ["Everything in Elite (plus)", "Tax planning consultation"] } }
};

// ============================================================================
// 📦 MODULE 1: LANDING WORKSPACE DICTIONARY EXTENSION (PART 2 OF 3)
// ============================================================================

const SERVICES_BATCH_2 = {
    "entity-dissolution": { name: "Entity Dissolution", starter: 149.00, compliance: 249.00, enterprise: 349.00, bullets: { starter: ["Preparation of dissolution paperwork"], compliance: ["Everything in Basic (plus)", "Filing with the state"], enterprise: ["Complete compliance assistance and tax filings"] } },
    "good-standing": { name: "Certificate of Good Standing", starter: 49.00, compliance: 99.00, enterprise: 149.00, bullets: { starter: ["Application assistance"], compliance: ["Everything in Basic (plus)", "Mode of delivery options"], enterprise: ["Fast track filing service"] } },
    "apostille-services": { name: "Apostille Authentication Services", starter: 99.00, compliance: 179.00, enterprise: 299.00, bullets: { starter: ["Preparation and filing for one document"], compliance: ["Everything in Basic (plus)", "Multiple document discounts available"], enterprise: ["Comprehensive service with expedited processing"] } },
    "clia-certificate": { name: "CLIA Certificate", starter: 199.00, compliance: 349.00, enterprise: 499.00, bullets: { starter: ["Basic consultation"], compliance: ["Application assistance"], enterprise: ["Full compliance support"] } },
    "legal-consulting": { name: "Custom Regulatory Legal Consulting", starter: 150.00, compliance: 1000.00, enterprise: 1000.00, bullets: { starter: ["Tailored consulting services ($150 / Hour)"], compliance: ["Package Plan: Pre-purchased 10 hours for ongoing support"], enterprise: ["Package Plan: Pre-purchased 10 hours for ongoing support"] } },
    "federal-tax": { name: "Federal Income Tax", starter: 299.00, compliance: 499.00, enterprise: 799.00, bullets: { starter: ["Basic federal tax preparation"], compliance: ["Everything in Basic (plus)", "Tax planning session included"], enterprise: ["Comprehensive tax strategy and filing"] } },
    "state-tax": { name: "State Income Tax", starter: 199.00, compliance: 349.00, enterprise: 549.00, bullets: { starter: ["State tax preparation"], compliance: ["Everything in Basic (plus)", "State compliance review"], enterprise: ["Full service with audit support"] } },
    "franchise-tax": { name: "Franchise Tax Filing", starter: 149.00, compliance: 249.00, enterprise: 399.00, bullets: { starter: ["Preparation and filing assistance"], compliance: ["Everything in Basic (plus)", "Compliance tracking and reminders"], enterprise: ["Full service with consultations"] } },
    "sales-tax": { name: "Sales Tax Registration", starter: 99.00, compliance: 199.00, enterprise: 299.00, bullets: { starter: ["Application assistance"], compliance: ["Everything in Basic (plus)", "Ongoing compliance support"], enterprise: ["Strategic sales tax planning"] } },
    "payroll-tax": { name: "Payroll Tax (940/941)", starter: 199.00, compliance: 349.00, enterprise: 499.00, bullets: { starter: ["Basic payroll tax filing"], compliance: ["Everything in Basic (plus)", "Detailed payroll reporting"], enterprise: ["Comprehensive payroll solutions"] } },
    "heavy-use-tax": { name: "Heavy Use Tax (2290)", starter: 99.00, compliance: 179.00, enterprise: 249.00, bullets: { starter: ["Preparation assistance for one vehicle"], compliance: ["Everything in Basic (plus)", "Multiple vehicle discounts"], enterprise: ["Comprehensive compliance and auditing"] } },
    "cage-code": { name: "CAGE Code", starter: 249.00, compliance: 349.00, enterprise: 449.00, bullets: { starter: ["Application assistance"], compliance: ["Everything in Basic (plus)", "Status monitoring"], enterprise: ["Full service with registration support"] } },
    "duns-number": { name: "DUNS Number Procurement", starter: 49.00, compliance: 99.00, enterprise: 179.00, bullets: { starter: ["Step-by-step guidance"], compliance: ["Everything in Basic (plus)", "Expedited processing"], enterprise: ["Comprehensive support"] } },
    "minority-certificate": { name: "Minority Certificate", starter: 99.00, compliance: 249.00, enterprise: 399.00, bullets: { starter: ["Eligibility assessment"], compliance: ["Application assistance"], enterprise: ["Ongoing support and renewal"] } },
    "owner-operators": { name: "Owner Operators", starter: 199.00, compliance: 299.00, enterprise: 499.00, bullets: { starter: ["Business structure advice"], compliance: ["Full compliance package"], enterprise: ["Financial planning services"] } },
    "trucker-authority": { name: "Trucker Authority", starter: 199.00, compliance: 299.00, enterprise: 499.00, bullets: { starter: ["Authority application preparation"], compliance: ["Everything in Basic (plus)", "Support for compliance documentation"], enterprise: ["Full service with ongoing support"] } },
    "broker-authority": { name: "Broker Authority", starter: 199.00, compliance: 299.00, enterprise: 499.00, bullets: { starter: ["Basic application preparation"], compliance: ["Everything in Basic (plus)", "Compliance support"], enterprise: ["Full service with network connections"] } },
    "ucr-registration": { name: "UCR Registration", starter: 99.00, compliance: 179.00, enterprise: 249.00, bullets: { starter: ["Registration assistance"], compliance: ["Everything in Basic (plus)", "Compliance reminders"], enterprise: ["Ongoing support services"] } },
    "scac-code": { name: "SCAC Code Registration", starter: 49.00, compliance: 99.00, enterprise: 149.00, bullets: { starter: ["Application assistance"], compliance: ["Everything in Basic (plus)", "Status tracking service"], enterprise: ["Complete registration support"] } },
    "dot-consortium": { name: "DOT Consortium", starter: 149.00, compliance: 299.00, enterprise: 499.00, bullets: { starter: ["Program enrollment assistance"], compliance: ["Everything in Basic (plus)", "Compliance monitoring"], enterprise: ["Full service with ongoing audits"] } },
    "driver-file": { name: "Driver Qualification File", starter: 279.00, compliance: 349.00, enterprise: 449.00, bullets: { starter: ["Basic documentation preparation"], compliance: ["Everything in Basic (plus)", "Compliance packet preparation"], enterprise: ["Comprehensive management of files"] } },
    "process-agent-boc3": { name: "Process Agent (BOC-3)", starter: 49.00, compliance: 99.00, enterprise: 149.00, bullets: { starter: ["Filing assistance"], compliance: ["Everything in Basic (plus)", "Annual renewal support"], enterprise: ["Ongoing compliance service"] } },
    "ifta-registration": { name: "IFTA Registration", starter: 159.00, compliance: 279.00, enterprise: 349.00, bullets: { starter: ["IFTA registration assistance"], compliance: ["Everything in Basic (plus)", "Compliance checks"], enterprise: ["Full support with filing"] } },
    "dot-hazmat": { name: "DOT HAZMAT Registration", starter: 199.00, compliance: 349.00, enterprise: 499.00, bullets: { starter: ["Basic registration assistance"], compliance: ["Everything in Basic (plus)", "Detailed compliance packet"], enterprise: ["Full support and ongoing compliance"] } },
    "licenses-permits": { name: "Licenses & Permits", starter: 79.00, compliance: 149.00, enterprise: 299.00, bullets: { starter: ["Basic license research"], compliance: ["Complete application assistance"], enterprise: ["Ongoing compliance support"] } },
    "trucker-insurance": { name: "Trucker Insurance", starter: 99.00, compliance: 199.00, enterprise: 299.00, bullets: { starter: ["Document preparation and filing"], compliance: ["Everything in Basic (plus)", "Negotiation with providers"], enterprise: ["Comprehensive package customized"] } },
    "broker-insurance": { name: "Broker Insurance", starter: 99.00, compliance: 199.00, enterprise: 299.00, bullets: { starter: ["Document preparation and filing"], compliance: ["Everything in Basic (plus)", "Risk assessment included"], enterprise: ["Full consultation for coverage needs"] } },
    "new-entrant-audit": { name: "New Entrant Audit", starter: 199.00, compliance: 299.00, enterprise: 499.00, bullets: { starter: ["Basic audit preparation"], compliance: ["Everything in Basic (plus)", "Mock audit and consultation"], enterprise: ["Comprehensive audit support"] } }
};

Object.assign(ENTERPRISE_DATA_MAP, SERVICES_BATCH_2);


// ============================================================================ 
// ⚙️ ENGINE CONTROLLER: DIRECT QUERY PARAMETER ROUTE DISPATCH MATRIX 
// ============================================================================ 
function runSinglePageDynamicRouter() { 
    // FIXED: Standardized target variable name across the entire loop canvas block
    var layoutSlot = document.getElementById("dynamic-layout-root"); 
    if (!layoutSlot) return; 

    try { 
        var urlAddressParams = new URLSearchParams(window.location.search); 
        var urlSlugKey = urlAddressParams.get('id'); 

        // Fallback safety checkpoint: Default to index if param is missing 
        if (!urlSlugKey) { 
            urlSlugKey = "index.html"; 
        } 

        // FIXED: Defined the activeKey string so the console logger can read it
        var activeKey = String(urlSlugKey).toLowerCase().trim();

        // 🔄 ALIGNMENT GUARD: Syncs dynamic URL variations to pull the correct form profiles
        if (activeKey === 'limited-liability-company' || activeKey === 'llc-formation') {
            activeKey = 'llc';
        } else if (activeKey === 'corporations' || activeKey === 'corporation') {
            activeKey = 'corporation';
        } else if (activeKey === 'annual-reports') {
            activeKey = 'annual-report';
        }

        var serviceProfile = ENTERPRISE_DATA_MAP[activeKey] || ENTERPRISE_DATA_MAP[urlSlugKey]; 
        if (!serviceProfile) { 
            layoutSlot.innerHTML = '<div style="text-align:center; padding:100px 40px; font-family:sans-serif; background:#fff;"><h2>Profile Unknown</h2><p>The code identifier "' + urlSlugKey + '" is unmapped.</p></div>'; 
            return; 
        } 

        // Apply browser tab title dynamically 
        document.title = serviceProfile.name + " | filings4u Platforms"; 

        // Alternate split layouts dynamically based on object key string ordering position metrics 
        var keysArray = Object.keys(ENTERPRISE_DATA_MAP); 
        var numericIndex = keysArray.indexOf(urlSlugKey); 
        var isEven = (numericIndex % 2 === 0); 

        // ============================================================================ 
        // ⚙️ FIXED INJECTION HOOKS - REPLACES LINES 120-130 
        // ============================================================================ 
        // Splice all constructed layout strings smoothly into one single block 
        layoutSlot.innerHTML = heroHtml + capabilityHtml + billingHtml; 
        console.log("Enterprise framework loaded dynamic loops for: " + activeKey); 

    } catch (crashIntercept) { 
        console.error("Pipeline crash caught inside loop logic:", crashIntercept); 
        layoutSlot.innerHTML = `<div style="text-align:center; padding:80px; color:red; font-family:sans-serif; background:#ffffff;"><h2>System Fault</h2><p>${crashIntercept.message}</p></div>`; 
    } 
} 

// Fire runtime tracking paths when DOM tree finishes compiling safely 
window.onload = function() { 
    runSinglePageDynamicRouter(); 
};
