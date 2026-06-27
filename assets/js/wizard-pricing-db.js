// ============================================================================ //
// 1. GLOBAL RUNTIME INITIALIZATION MATRIX (STRICT DATA ELEMENTS ONLY) //
// ============================================================================ //
const urlParamsMatrix = new URLSearchParams(window.location.search);

window.currentServiceKey = urlParamsMatrix.get('service') || null;
window.currentServicePathKey = window.currentServiceKey;
window.currentPlanKey = urlParamsMatrix.get('plan') || null;
window.currentServiceTier = window.currentPlanKey;

let stateDropdown = document.getElementById("wizard_state_select") || document.getElementById("state_select");
window.selectedJurisdiction = stateDropdown ? stateDropdown.value : null;
window.dynamicAssetUrlPath = "";
window.collectedFormMetadata = {};

// DEFINE THE DYNAMIC PROPERTY INTERCEPTOR FOR YOUR DATABASE KEYS
let internalCatalogReference = null;
Object.defineProperty(window, 'CENTRAL_ADDON_DB', {
    get() {
        return internalCatalogReference;
    },
    set(newDatabasePayload) {
        internalCatalogReference = newDatabasePayload;
        // The millisecond the database is set, dynamically regenerate your array keys
        if (newDatabasePayload && typeof newDatabasePayload === 'object') {
            window.auxiliaryAddonsArray = Object.keys(newDatabasePayload);
        } else {
            window.auxiliaryAddonsArray = [];
        }
        // Safely trigger your UI redraw if the rendering panel function exists in scope
        if (typeof window.renderTargetUpsellsListPanel === "function") {
            window.renderTargetUpsellsListPanel();
        }
    },
    configurable: true,
    enumerable: true
});

// Fallback initial evaluation check
window.auxiliaryAddonsArray = window.CENTRAL_ADDON_DB && typeof window.CENTRAL_ADDON_DB === 'object' ? Object.keys(window.CENTRAL_ADDON_DB) : [];

// ============================================================================ //
// 2. RUNTIME SESSION ISOLATION ENGINE (ZERO HARDCODING) //
// ============================================================================ //
(function handleStrictSessionLifecycle() {
    const activeSessionToken = sessionStorage.getItem("f4u_active_session_established");
    if (!activeSessionToken) {
        localStorage.clear();
        sessionStorage.clear();
        if (window.collectedFormMetadata) {
            window.collectedFormMetadata = {};
        }
        sessionStorage.setItem("f4u_active_session_established", "true");
        console.log("[Session Engine] New session detected: Form data caches scrubbed completely.");
    } else {
        console.log("[Session Engine] Persistent session active: Stored values retained for save/exit states.");
    }
})();




// ============================================================================ //
// 🏛️ CENTRAL STATE & REGULATORY AGENCY FILING FEE DATABASE
// ============================================================================ //
/**
 * Global filing tariff lookup table.
 * Mandated by state tax comptrollers and federal regulators to handle official filing expenses.
 * Zero Hardcoding Method: Managed as a data registry to decouple from functional code.
 */
window.FILINGS4U_GOVERNMENT_PRICING = window.FILINGS4U_GOVERNMENT_PRICING || {
    "trucker-authority": 300.00,  /* Standard FMCSA regulatory application tariff */
    "broker-authority": 300.00,   /* Standard FMCSA broker processing tariff */
    "heavy-use-tax": 0.00,         /* Form 2290 baseline processing tariff code */
    "hazmat-registration": 0.00,   /* Baseline hazardous materials data allocation */
    "llc-formation": 0.00,         /* Dynamic variable overridden by state pricing matrices */
    "corporations": 0.00
};

// Expose the pricing registry cleanly into global window boundaries
window.FILINGS4U_GOVERNMENT_PRICING = window.FILINGS4U_GOVERNMENT_PRICING;


// ============================================================================ //
// 📊 LAYER 1: UPSELLS ENGINE DATABASE SCHEMA GLOBAL DEFINITION
// ============================================================================ //
window.UPSELLS_ROUTER_DATABASE = {

    
    "formations": [
        { id: "ra-shield", name: "Registered Agent Service", price: 75.00, billing: "/ yr", desc: "Secures state compliance mandates, processes official legal notices, and shields your private physical address from public databases." },
        { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." },
        { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
        { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
        { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
        { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
        { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." },
        { id: "good-standing", name: "Certificate of Good Standing", price: 45.00, billing: " flat", desc: "Secures certified regulatory verification from the jurisdiction state registry validating that your active entity is compliant." }
    ],
    "broker": [
        { id: "boc3-filing", name: "BOC-3 Process Agent Filing", price: 75.00, billing: " flat", desc: "Mandatory federal processing requirement for Broker configurations. Designates process service agents across all states to guarantee compliance." },
        { id: "bmc85-quote", name: "BMC-85 Trust Fund ($75K) Request", price: 0.00, billing: " quote", desc: "Automates routing checks into partner underwriting matrices to secure a verified premium quote for your mandatory broker security trust allocation." },
        { id: "eo-liability", name: "Liability Insurance ($1M E&O) Quote", price: 0.00, billing: " quote", desc: "Secures specialized pricing options for Professional Errors and Omissions liability plans to shield your cargo routing platform from structural lawsuits." },
        { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." },
        { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
        { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
        { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
        { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
        { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." }
    ],
    "trucker": [
        { id: "fmcsa-audit", name: "FMCSA Safety Audit Preparation Kit", price: 149.00, billing: " flat", desc: "Compiles driver files, vehicle maintenance frameworks, and fuel logs into an audit-ready format to guarantee passing your new-entrant regulatory evaluation." },
        { id: "boc3-filing", name: "BOC-3 Process Agent Filing", price: 75.00, billing: " flat", desc: "Mandatory federal processing requirement for Trucker configurations. Designates process service agents across all states to guarantee compliance." },
        { id: "bipd-quote", name: "$750,000 BIPD Public Liability Quote", price: 0.00, billing: " quote", desc: "Triggers partner routing pipelines to pull premium options for public liability coverages required for FMCSA operating authority activation." },
        { id: "cargo-quote", name: "$100,000 Motor Cargo Carrier Quote", price: 0.00, billing: " quote", desc: "Pulls tailored carrier pricing matrices to cover high-value customer freight assets against damage, loss, or transit destruction incidents." },
        { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." },
        { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
        { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
        { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
        { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
        { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." }
    ],
    "generic": [
        { id: "ra-shield", name: "Registered Agent Service", price: 75.00, billing: "/ yr", desc: "Secures state compliance mandates, processes official legal notices, and shields your corporate entity's private physical address layout from public record databases." },
        { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." },
        { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
        { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
        { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
        { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
        { id: "good-standing", name: "Certificate of Good Standing", price: 45.00, billing: " flat", desc: "Secures certified regulatory verification from the jurisdiction state registry validating that your active entity is compliant and authorized to contract." },
        { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant payment processing lines." }
    ]
};

// Freeze the object globally to preserve memory blocks securely
Object.freeze(window.UPSELLS_ROUTER_DATABASE);
// ============================================================================ //
// 📊 LAYER 2: PROGRAMMATIC LOOKUP ROUTER UTILITY ENGINE
// ============================================================================ //
/**
 * Pure Dynamic Upsell Selector Utility.
 * Resolves packages programmatically without fallback routing bypass arrays.
 * @param {string} routeKey - Category path key string (e.g. window.routeActiveServiceKey)
 * @returns {Array} List of upsell records matching the active category safely
 */
function getScopedUpsellsDataset(routeKey) {
    const database = window.UPSELLS_ROUTER_DATABASE;
    
    // Safety Guard: If database layer is absent over network, fail gracefully without throwing crashes
    if (!database) {
        console.warn("[Upsell Lookup Guard] window.UPSELLS_ROUTER_DATABASE is not yet initialized.");
        return [];
    }

    const normalizedKey = String(routeKey || "").toLowerCase().trim();

    // Strict property query validation using clear prototype inspection routines
    if (Object.prototype.hasOwnProperty.call(database, normalizedKey)) {
        return database[normalizedKey];
    }

    // Default to generic group purely by object property rules if specific category lacks unique records
    return database.generic || [];
}

// Expose universally to the window object layer safely
window.getScopedUpsellsDataset = getScopedUpsellsDataset;

// Add an explicit per-truck rate to whatever key maps to your 2290 filing flow inside your main pricing database script file:
window.CENTRAL_SERVICE_PLAN_DB["heavy-use-tax"] = {
    name: "IRS Form 2290 Filing",
    starter: 39.00,
    compliance: 59.00,
    enterprise: 99.00,
    additional_truck_fee: 25.00, // <--- THIS SEALS IT. Modify this number anytime, script updates dynamically.
    bullets: ["IRS Watermark Schedule 1 Securement", "24/7 Fleet Audit Compliance Assurances", "Automated IRS Revision Protection"]
};


// ============================================================================ //
// ⚙️ SYSTEM STATE FLOW & NAVIGATION TRACKING REGISTRY
// ============================================================================ //
window.currentWizardActiveStep = parseInt(window.currentWizardActiveStep, 10) || 1;
// FIXED: Increased boundary from 5 to 7 to accurately accommodate your full checkout funnel panels track
window.totalWizardExpectedSteps = 7;
window.totalWizardSteps = 7;


// ============================================================================ //
// 🔌 ACTIVE ADD-ON SERVICE STATE FLAGS (DYNAMIC COMPLIANCE TRACKING)
// ============================================================================ //
// Core Corporate & Structural Add-on Management Mappings
window.customSelectedRegisteredAgentServiceActive = window.customSelectedRegisteredAgentServiceActive || false;
window.customSelectedEinProcurementServiceActive = window.customSelectedEinProcurementServiceActive || false;
window.customSelectedScorpElectionServiceActive = window.customSelectedScorpElectionServiceActive || false;
window.customSelectedSolePropLicenseAuditServiceActive = window.customSelectedSolePropLicenseAuditServiceActive || false;
window.customSelectedDbaLicenseAuditServiceActive = window.customSelectedDbaLicenseAuditServiceActive || false;
window.customSelectedNonprofitLicenseCheckActive = window.customSelectedNonprofitLicenseCheckActive || false;
window.customSelectedDbaSearchServiceActive = window.customSelectedDbaSearchServiceActive || false;
window.customSelectedForeignQualLicenseSuiteActive = window.customSelectedForeignQualLicenseSuiteActive || false;
window.customSelectedExpeditedFilingServiceActive = window.customSelectedExpeditedFilingServiceActive || false;
window.customSelectedApostilleAuthenticationServiceActive = window.customSelectedApostilleAuthenticationServiceActive || false;
window.customSelectedGoodStandingCertificateServiceActive = window.customSelectedGoodStandingCertificateServiceActive || false;

// Specialized Transportation & Regulatory Fleet Compliance Trackers
window.customSelectedAssembleDqfActive = window.customSelectedAssembleDqfActive || false;
window.customSelectedDrugConsortiumActive = window.customSelectedDrugConsortiumActive || false;
window.customSelectedHosReviewActive = window.customSelectedHosReviewActive || false;
window.customSelectedMaintenanceLedgerActive = window.customSelectedMaintenanceLedgerActive || false;
window.customSelectedExpertConsultationActive = window.customSelectedExpertConsultationActive || false;

console.log("[State Registry] Global compliance tracking tokens initialized successfully.");


// ============================================================================ //
// 🏛️ CENTRAL SERVICE DESIGNATION PLAN CONFIGURATION DATABASE
// ============================================================================ //
const CENTRAL_SERVICE_PLAN_DB = {

 "llc-formation": {
  name: "LLC Formation",
  starter: 99.00,
  compliance: 199.00,
  enterprise: 399.00,
  bullets: {
    starter: ["Articles of Organization Filing", "Standard Processing", "Digital Delivery", "Operating Agreement Template"],
    compliance: ["Everything in Starter (Plus)", "Elite Compliance Guard", "Priority Submission", "Registered Agent Service (1 Year)", "Employer Identification Number"],
    enterprise: ["Everything in Compliance (Plus)", "Complete Enterprise Asset Suite", "White Glove Execution", "Instant Turnaround", "Corporate Binder & Seal"]
  }
},
"corporations": {
  name: "Corporations (C/S-Corp)",
  starter: 129.00,
  compliance: 249.00,
  enterprise: 599.00,
  bullets: {
    starter: ["Name availability search", "State filing fees included", "Corporate Bylaws"],
    compliance: ["Everything in Starter (Plus)", "Registered agent service for 1 year", "Employer Identification Number"],
    enterprise: ["Everything in Compliance (Plus)", "Corporate Binder", "Corporate Seal", "Compliance Monitoring (1 Year)", "Priority Board Resolution Drafting"]
  }
},
"series-llc": {
  name: "Series LLC",
  starter: 199.00,
  compliance: 299.00,
  enterprise: 399.00,
  bullets: {
    starter: ["State filing fees included", "Initial series setup guidance", "Framework validation lookups"],
    compliance: ["Everything in Starter (Plus)", "Operating agreement for series", "Cell Structure Optimization Review"],
    enterprise: ["Everything in Compliance (Plus)", "Customized tax and legal strategy guidance", "Individual Series Protected Asset Allocation"]
  }
},

"sole-proprietorship": {
  name: "Sole Proprietorship",
  starter: 79.00,
  compliance: 159.00,
  enterprise: 239.00,
  bullets: {
    starter: ["Initial business name registration", "Business tips and resources"],
    compliance: ["Everything in Starter (Plus)", "DBA registration", "Employer Identification Number", "Operating Agreement"],
    enterprise: ["Everything in Compliance (Plus)", "Customized business license research", "Business Plan Template", "Local Business Permit Verification Audit"]
  }
},
"dba-registration": {
  name: "DBA Registration",
  starter: 39.00,
  compliance: 99.00,
  enterprise: 159.00,
  bullets: {
    starter: ["Name availability check", "Filing with the county"],
    compliance: ["Everything in Starter (Plus)", "Guidance on renewal process", "Certified Document Copy Delivery"],
    enterprise: ["Everything in Compliance (Plus)", "State-wide DBA registration option", "Expedited County Courier Courier Routing"]
  }
},
"nonprofits": {
  name: "Nonprofit Organization",
  starter: 149.00,
  compliance: 299.00,
  enterprise: 499.00,
  bullets: {
    starter: ["Articles of incorporation preparation", "Name availability search"],
    compliance: ["Everything in Starter (Plus)", "501(c)(3) application assistance", "Corporate Bylaws Drafting"],
    enterprise: ["Everything in Compliance (Plus)", "IRS compliance package", "Exemption Verification Status Review"]
  }
},
"foreign-qualification": {
  name: "Foreign Qualification Certificate",
  starter: 149.00,
  compliance: 249.00,
  enterprise: 349.00,
  bullets: {
    starter: ["Eligibility assessment", "Preparation of application"],
    compliance: ["Everything in Starter (Plus)", "Registered agent service in the foreign state", "Certificate of Good Standing Procurement"],
    enterprise: ["Everything in Compliance (Plus)", "Compliance reminders and support", "Multi-State Jurisdictional Strategy Expansion"]
  }
},
"llc-reinstatement": {
  name: "LLC Reinstatement",
  starter: 79.00,
  compliance: 149.00,
  enterprise: 249.00,
  bullets: {
    starter: ["Review of reinstatement eligibility", "Basic instructions provided"],
    compliance: ["Everything in Starter (Plus)", "Preparation and submission of forms", "State Back-Tax Fine Reconciliation Search"],
    enterprise: ["Everything in Compliance (Plus)", "Follow-up and support through reinstatement", "Immediate State Tax Clearance Procurement Line"]
  }
},
"servicemark-filing": {
  name: "Servicemark Filing",
  starter: 199.00,
  compliance: 299.00,
  enterprise: 399.00,
  bullets: {
    starter: ["Servicemark search", "Application filing"],
    compliance: ["Everything in Starter (Plus)", "Status tracking for 1 year", "Common Law Usage Evaluation"],
    enterprise: ["Everything in Compliance (Plus)", "Legal consultation on infringement issues", "Continuous Brand Watch Monitoring"]
  }
},
"annual-reports": {
  name: "Annual Reports",
  starter: 89.00,
  compliance: 159.00,
  enterprise: 249.00,
  bullets: {
    starter: ["Reminder service for due dates", "Filing support for one year"],
    compliance: ["Everything in Starter (Plus)", "Preparation and filing assistance", "State Database Record Update Auditing"],
    enterprise: ["Everything in Compliance (Plus)", "Ongoing compliance checks", "Automated Future Filing Guarantee Auto-Pilot"]
  }
},

"operating-agreement": {
  name: "Operating Agreement",
  starter: 49.00,
  compliance: 99.00,
  enterprise: 199.00,
  bullets: {
    starter: ["Standard template provided", "Basic member equity structural layout"],
    compliance: ["Everything in Starter (Plus)", "Customized operating agreement template", "Multi-Member Allocation Capital Rules"],
    enterprise: ["Everything in Compliance (Plus)", "Full drafting and consultation services", "Asset Protection Vesting Clause Additions"]
  }
},
"registered-agent": {
  name: "Registered Agent",
  starter: 99.00,
  compliance: 179.00,
  enterprise: 299.00,
  bullets: {
    starter: ["Registered agent services for one year", "Statutory baseline address hosting"],
    compliance: ["Everything in Starter (Plus)", "Mail forwarding service", "Real-Time Digital Service of Process Notification"],
    enterprise: ["Everything in Compliance (Plus)", "Annual compliance support", "Direct Corporate Officer Privacy Shield Protection"]
  }
},
"business-licenses": {
  name: "Business Licenses",
  starter: 79.00,
  compliance: 149.00,
  enterprise: 299.00,
  bullets: {
    starter: ["Basic license research", "County permit indexing requirements"],
    compliance: ["Everything in Starter (Plus)", "License application assistance", "City Municipal Zoning Filings Support"],
    enterprise: ["Everything in Compliance (Plus)", "Complete compliance package and ongoing support", "Annual Permit Renewal Tracking Subscription"]
  }
},
"dissolution": {
  name: "Entity Dissolution",
  starter: 149.00,
  compliance: 249.00,
  enterprise: 349.00,
  bullets: {
    starter: ["Preparation of dissolution paperwork", "State corporate registry closure checks"],
    compliance: ["Everything in Starter (Plus)", "Filing with the state", "Corporate Tax Account Closure Notices"],
    enterprise: ["Everything in Compliance (Plus)", "Complete compliance assistance and tax filings", "State Franchise Tax Clearance Procurement"]
  }
},
"certificate-of-good-standing": {
  name: "Certificate of Good Standing",
  starter: 49.00,
  compliance: 99.00,
  enterprise: 149.00,
  bullets: {
    starter: ["Application assistance", "State database corporate standing lookups"],
    compliance: ["Everything in Starter (Plus)", "Mode of delivery options", "State Database Status Scan Verification"],
    enterprise: ["Everything in Compliance (Plus)", "Fast track filing service", "Certified Digital PDF Vault Mirror Copy"]
  }
},
"clia-certificate": {
  name: "CLIA Certificate",
  starter: 199.00,
  compliance: 349.00,
  enterprise: 499.00,
  bullets: {
    starter: ["Basic CLIA consulting", "Form CMS-116 outline assessment"],
    compliance: ["Everything in Starter (Plus)", "Application assistance", "Laboratory Complexity Level Categorization Audit"],
    enterprise: ["Everything in Compliance (Plus)", "Full compliance support", "State Agency Inspection Preparation Guidelines"]
  }
},
"regulatory-consulting": {
  name: "Regulatory Consulting",
  starter: 150.00,
  compliance: 1000.00,
  enterprise: 1850.00,
  bullets: {
    starter: ["Tailored consulting services ($150 / Hour)", "Initial legal framework overview advisory"],
    compliance: ["Everything in Starter (Plus)", "Package Plan: Pre-purchased 10 hours for ongoing support", "Scheduled framework execution assessments"],
    enterprise: ["Everything in Compliance (Plus)", "Package Plan: Pre-purchased 20 hours for comprehensive enterprise support", "Priority emergency review consulting route"]
  }
},
"state-tax": {
  name: "State Income Tax",
  starter: 199.00,
  compliance: 349.00,
  enterprise: 549.00,
  bullets: {
    starter: ["State tax preparation", "Local revenue schedule formatting review"],
    compliance: ["Everything in Starter (Plus)", "State compliance review", "Nexus Jurisdictional Threshold Analysis"],
    enterprise: ["Everything in Compliance (Plus)", "Full service with audit support", "Multi-State Franchise Tax Apportionment Drafting"]
  }
},
"franchise-tax": {
  name: "Franchise Tax Filing",
  starter: 149.00,
  compliance: 249.00,
  enterprise: 399.00,
  bullets: {
    starter: ["Preparation and filing assistance", "State assessment sheet auditing"],
    compliance: ["Everything in Starter (Plus)", "Compliance tracking and reminders", "State Database Standing Audits"],
    enterprise: ["Everything in Compliance (Plus)", "Full service with consultations", "State Revenue Franchise Tax Clearance Procurement"]
  }
},
"sales-tax-registration": {
  name: "Sales Tax Registration",
  starter: 99.00,
  compliance: 199.00,
  enterprise: 299.00,
  bullets: {
    starter: ["Application assistance", "State tax account ID path setups"],
    compliance: ["Everything in Starter (Plus)", "Ongoing compliance support", "SS-4 Telephonic Tracking Queue Access"],
    enterprise: ["Everything in Compliance (Plus)", "Strategic sales tax planning", "Multi-State Nexus Threshold Matrix Monitoring"]
  }
},
"payroll-tax-940-941": {
  name: "Payroll Tax (940/941)",
  starter: 199.00,
  compliance: 349.00,
  enterprise: 499.00,
  bullets: {
    starter: ["Basic payroll tax filing", "Employer documentation format checks"],
    compliance: ["Everything in Starter (Plus)", "Detailed payroll reporting", "IRS Form Quarterly Verification"],
    enterprise: ["Everything in Compliance (Plus)", "Comprehensive payroll solutions", "Full IRS Audit Defense Legal Representation Guarantee"]
  }
},
"duns-number": {
  name: "DUNS Number Procurement",
  starter: 49.00,
  compliance: 99.00,
  enterprise: 179.00,
  bullets: {
    starter: ["Step-by-step guidance", "Dun & Bradstreet registration verification"],
    compliance: ["Everything in Starter (Plus)", "Expedited processing", "D&B Credit Commercial Business Credit File Initial Setup"],
    enterprise: ["Everything in Compliance (Plus)", "Comprehensive support", "Accelerated Next-Day Fast Track DUNS ID Assignment"]
  }
},
"minority-certificate": {
  name: "Minority Certificate",
  starter: 99.00,
  compliance: 249.00,
  enterprise: 399.00,
  bullets: {
    starter: ["Eligibility assessment", "Structural Document Checklist Assessment Review"],
    compliance: ["Everything in Starter (Plus)", "Application assistance", "Complete Application Compilation, Package Preparation, and Submission Support"],
    enterprise: ["Everything in Compliance (Plus)", "Ongoing support and renewal", "Corporate Governance Review, On-Site Interview Mock Prep Session"]
  }
},
"ifta-registration": {
  name: "IFTA Registration",
  starter: 159.00,
  compliance: 279.00,
  enterprise: 349.00,
  bullets: {
    starter: ["IFTA registration assistance", "Base jurisdiction account file setup"],
    compliance: ["Everything in Starter (Plus)", "Compliance checks", "Initial Fleet Fuel Tax Decal Set Procurement"],
    enterprise: ["Everything in Compliance (Plus)", "Full support with filing", "Quarterly Fuel Tax Mileage Record Auditing"]
  }
},
"dot-permits": {
  name: "DOT Permits",
  starter: 79.00,
  compliance: 149.00,
  enterprise: 299.00,
  bullets: {
    starter: ["Basic license research", "Local regulatory directory tracking"],
    compliance: ["Everything in Starter (Plus)", "Complete application assistance", "Municipal Zoning Board Verification Check"],
    enterprise: ["Everything in Compliance (Plus)", "Ongoing compliance support", "Annual Local Permit Renewal Auto-Tracking Subscription"]
  }
},
"ifta-quarterly-returns": {
  name: "IFTA Quarterly Fuel Tax Filing",
  starter: 129.00,
  compliance: 249.00,
  enterprise: 449.00,
  bullets: {
    starter: ["Distance and fuel baseline log sorting", "State trip manifest data uploads"],
    compliance: ["Everything in Starter (Plus)", "State tax generation calculations", "Electronic return submission"],
    enterprise: ["Everything in Compliance (Plus)", "Audit protection shield", "Multi-jurisdictional fleet management", "Fuel Tax Credit Optimization Sweep"]
  }
},

   "federal-tax": {
  name: "Federal Income Tax",
  starter: 299.00,
  compliance: 499.00,
  enterprise: 799.00,
  bullets: {
    starter: ["Basic federal tax preparation", "Form document accuracy audit"],
    compliance: ["Everything in Starter (Plus)", "Tax planning matrix consultation", "Quarterly payment calculations"],
    enterprise: ["Everything in Compliance (Plus)", "Plus IRS Audit Defense", "Dedicated certified public accountant support"]
  }
},
"employer-id-ein": {
  name: "Employer ID (EIN)",
  starter: 79.00,
  compliance: 149.00,
  enterprise: 199.00,
  bullets: {
    starter: ["EIN application assistance", "Digital document verification check"],
    compliance: ["Everything in Starter (Plus)", "Plus IRS form prep", "Official tracking and receipt dispatch"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Resolution Sheet", "Expedited corporate banking activation support"]
  }
},
"heavy-use-tax-2290": {
  name: "Heavy Use Tax (2290)",
  starter: 99.00,
  compliance: 179.00,
  enterprise: 249.00,
  bullets: {
    starter: ["One vehicle preparation", "E-file generation dispatch setup"],
    compliance: ["Everything in Starter (Plus)", "Plus Instant Schedule 1", "IRS stamp verification management"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Dedicated Specialist", "Full audit trail file archival logs"]
  }
},

"cage-code": {
  name: "CAGE Code",
  starter: 249.00,
  compliance: 349.00,
  enterprise: 449.00,
  bullets: {
    starter: ["Application assistance", "SAM profile initialization setup"],
    compliance: ["Everything in Starter (Plus)", "Plus Status monitoring", "System configuration anomaly checks"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Verification Support", "Priority federal procurement specialist routing"]
  }
},
"owner-operators": {
  name: "Owner Operators",
  starter: 199.00,
  compliance: 299.00,
  enterprise: 499.00,
  bullets: {
    starter: ["Business structure advice", "Initial setup protocol guidelines"],
    compliance: ["Everything in Starter (Plus)", "Plus Full compliance pack", "Ongoing permit status monitoring alerts"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Entrant Orientation", "Direct multi-state operational strategic routing"]
  }
},
"trucker-authority": {
  name: "Trucker Authority",
  starter: 199.00,
  compliance: 299.00,
  enterprise: 499.00,
  bullets: {
    starter: ["Authority preparation", "MC and DOT registration setups"],
    compliance: ["Everything in Starter (Plus)", "Plus Support documentation", "FMCSA portal configuration checks"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Uniform Filing", "Expedited active certificate dispatch processing"]
  }
},

"broker-authority": {
  name: "Broker Authority",
  starter: 199.00,
  compliance: 299.00,
  enterprise: 499.00,
  bullets: {
    starter: ["Basic preparation", "Filing setup documentation processing"],
    compliance: ["Everything in Starter (Plus)", "Plus Public Protest Monitoring", "BOC-3 assignment check setup"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Certificate Delivery", "Priority surety bond integration assistance"]
  }
},
"ucr-registration": {
  name: "UCR Registration",
  starter: 99.00,
  compliance: 179.00,
  enterprise: 249.00,
  bullets: {
    starter: ["Registration assistance", "Unified Carrier database lookup check"],
    compliance: ["Everything in Starter (Plus)", "Plus Compliance reminders", "Annual state validation status review"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Multi-State Monitoring", "Automated renewal processing matrix routing"]
  }
},
"scac-code": {
  name: "SCAC Code Registration",
  starter: 49.00,
  compliance: 99.00,
  enterprise: 149.00,
  bullets: {
    starter: ["Application assistance", "NMFTA alignment profile review"],
    compliance: ["Everything in Starter (Plus)", "Plus Status tracking", "Digital transmission verification support"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Renewal Automation", "Priority system standard code updates"]
  }
},

"dot-consortium": {
  name: "DOT Consortium",
  starter: 149.00,
  compliance: 299.00,
  enterprise: 499.00,
  bullets: {
    starter: ["Program enrollment", "Testing pool configuration assistance"],
    compliance: ["Everything in Starter (Plus)", "Plus Compliance monitoring", "Random selection management protocols"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Clearinghouse Queries", "Complete audit trail folder assembly"]
  }
},
"driver-file": {
  name: "Driver Qualification File",
  starter: 279.00,
  compliance: 349.00,
  enterprise: 449.00,
  bullets: {
    starter: ["Basic file preparation", "DOT requirement list compliance check"],
    compliance: ["Everything in Starter (Plus)", "Plus Employment History Form", "Medical certificate tracking alerts"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Background Integration", "Continuous dynamic driver record updates"]
  }
},
"process-agents-boc-3": {
  name: "Process Agents (BOC-3)",
  starter: 49.00,
  compliance: 99.00,
  enterprise: 149.00,
  bullets: {
    starter: ["Filing assistance", "Federal designated network setup allocation"],
    compliance: ["Everything in Starter (Plus)", "Plus Annual renewal support", "Immediate legal update notification system"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Legal Courier Scan", "Same-day digital document upload routing"]
  }
},

"hazmat-registration": {
  name: "DOT HAZMAT Registration",
  starter: 199.00,
  compliance: 349.00,
  enterprise: 449.00,
  bullets: {
    starter: ["Basic registration", "PHMSA documentation format checks"],
    compliance: ["Everything in Starter (Plus)", "Plus PHMSA Validation", "Safety tier calculation adjustments"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Security Framework", "Expedited dangerous goods compliance clearance"]
  }
},
"trucker-insurance-quote": {
  name: "Trucker Insurance",
  starter: 99.00,
  compliance: 199.00,
  enterprise: 299.00,
  bullets: {
    starter: ["Document filing", "Basic coverage parameter alignments"],
    compliance: ["Everything in Starter (Plus)", "Plus Provider negotiations", "Liability data comparison profile mapping"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Premium Restructuring", "Dedicated policy risk mitigation analysis"]
  }
},
"broker-insurance-quote": {
  name: "Broker Insurance",
  starter: 99.00,
  compliance: 199.00,
  enterprise: 299.00,
  bullets: {
    starter: ["Document filing", "Bond limit qualification profile assessment"],
    compliance: ["Everything in Starter (Plus)", "Plus Risk assessment", "BMC-84 versus BMC-85 strategy analyses"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Premium Market Sweeps", "Continuous optimization of policy configurations"]
  }
},

"hazmat-registration": {
  name: "DOT HAZMAT Registration",
  starter: 199.00,
  compliance: 349.00,
  enterprise: 449.00,
  bullets: {
    starter: ["Basic registration", "PHMSA documentation format checks"],
    compliance: ["Everything in Starter (Plus)", "Plus PHMSA Validation", "Safety tier calculation adjustments"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Security Framework", "Expedited dangerous goods compliance clearance"]
  }
},
"trucker-insurance-quote": {
  name: "Trucker Insurance",
  starter: 99.00,
  compliance: 199.00,
  enterprise: 299.00,
  bullets: {
    starter: ["Document filing", "Basic coverage parameter alignments"],
    compliance: ["Everything in Starter (Plus)", "Plus Provider negotiations", "Liability data comparison profile mapping"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Premium Restructuring", "Dedicated policy risk mitigation analysis"]
  }
},
"broker-insurance-quote": {
  name: "Broker Insurance",
  starter: 99.00,
  compliance: 199.00,
  enterprise: 299.00,
  bullets: {
    starter: ["Document filing", "Bond limit qualification profile assessment"],
    compliance: ["Everything in Starter (Plus)", "Plus Risk assessment", "BMC-84 versus BMC-85 strategy analyses"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Premium Market Sweeps", "Continuous optimization of policy configurations"]
  }
},

"new-entrant-audit": {
  name: "New Entrant Audit",
  starter: 199.00,
  compliance: 299.00,
  enterprise: 499.00,
  bullets: {
    starter: ["Basic audit prep", "Required safety documentation verification lists"],
    compliance: ["Everything in Starter (Plus)", "Plus Mock audit review", "Performance error pattern mitigation updates"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Corrective Action Plan", "Direct regulatory liaison representation services"]
  }
},
"mcs-150-update": {
  name: "MCS-150 Biennial Update",
  starter: 59.00,
  compliance: 89.00,
  enterprise: 139.00,
  bullets: {
    starter: ["Registration Prep", "FMCSA census database entry audit"],
    compliance: ["Everything in Starter (Plus)", "Plus Mileage Matrix Balancing", "Safety score metric recalculation reviews"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Enforcement Hold Clearing", "Priority regulatory registry restoration route"]
  }
},
"boc-3-amendment": {
  name: "BOC-3 Process Agent Amendment",
  starter: 39.00,
  compliance: 79.00,
  enterprise: 119.00,
  bullets: {
    starter: ["Amendment Form Prep", "Existing file designation evaluations"],
    compliance: ["Everything in Starter (Plus)", "Plus 48-State Network Setup", "Automated designation synchronization across portals"],
    enterprise: ["Everything in Compliance (Plus)", "Plus Same-Day Federal Push", "Priority queue submission override routing"]
  }
},

"apostille-services": {
  name: "Apostille Services",
  starter: 149.00,
  compliance: 249.00,
  enterprise: 399.00,
  bullets: {
    starter: [
      "Document authenticity review",
      "State-level processing preparation"
    ],
    compliance: [
      "Everything in Starter (Plus)",
      "State Secretary filing coordination",
      "Tracking and status monitoring"
    ],
    enterprise: [
      "Everything in Compliance (Plus)",
      "Federal / Embassy certification route",
      "Expedited overnight courier return delivery"
    ]
  }
},
  }

// Bind the configuration database registry securely to global window spaces
window.CENTRAL_SERVICE_PLAN_DB = CENTRAL_SERVICE_PLAN_DB;


// ============================================================================ //
// 📊 STEP 2 UNIFIED INJECTION MATRIX: DEEP WRITABLE CLONE (PART 1 OF 2)        //
// ============================================================================ //
(function injectStep2ComplianceAssets() {
  const originalDb = window.UPSELLS_ROUTER_DATABASE;
  if (!originalDb) return;

  // 1. EXTRACT AN AGNOSTIC WRITABLE COPY PASTED FROM THE FROZEN REALM
  // This bypasses the Object.freeze lock without editing your core data schemas
  const databaseClone = {};
  
  Object.keys(originalDb).forEach(key => {
    if (Array.isArray(originalDb[key])) {
      databaseClone[key] = [...originalDb[key]]; // Shallow clone arrays to grant write access
    } else if (typeof originalDb[key] === 'object' && originalDb[key] !== null) {
      databaseClone[key] = { ...originalDb[key] };
    } else {
      databaseClone[key] = originalDb[key];
    }
  });

  const activeVerticals = ["formations", "broker", "trucker", "generic"];
  // Proceed directly to Part 2 structural array streaming loops...
  // ============================================================================ //
  // 📊 STEP 2 UNIFIED INJECTION MATRIX: STRUCTURAL STREAMING (PART 2 OF 2)       //
  // ============================================================================ //
  activeVerticals.forEach(verticalKey => {
    if (!databaseClone[verticalKey]) databaseClone[verticalKey] = [];

    if (Array.isArray(databaseClone[verticalKey])) {
      const complianceItems = [
        { id: "assemble-dqf", name: "Assemble Driver Qualification Files (DQF)", price: 79.00 },
        { id: "drug-consortium", name: "DOT Drug & Alcohol Consortium Enrollment", price: 149.00 },
        { id: "hos-review", name: "Hours of Service (HOS) Log Audit Pre-Review", price: 195.00 },
        { id: "maintenance-ledger", name: "Vehicle Maintenance Ledger & Inspection Set", price: 85.00 },
        { id: "expert-consultation", name: "Independent Pre-Audit Consultation Package", price: 250.00 }
      ];

      complianceItems.forEach(item => {
        const isPresent = databaseClone[verticalKey].some(record => record.id === item.id);
        if (!isPresent) {
          databaseClone[verticalKey].push(item);
        }
      });
    }
  });

  // 2. RE-ASSIGN UNLOCKED DATA VALUE ROOT BACK TO GLOBAL CONTEXT CORES
  // This seamlessly bypasses the freeze state loop block by overwriting the variable reference
  window.UPSELLS_ROUTER_DATABASE = databaseClone;
  console.log("[Sync Engine] Step 2 compliance schemas successfully streamed into master pricing paths.");
})();

