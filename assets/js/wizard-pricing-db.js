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
        enterprise: 299.00,
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
    "series-llc": {
        name: "Series LLC",
        starter: 199.00,
        compliance: 299.00,
        enterprise: 399.00,
        bullets: {
            starter: ["State filing fees included", "Initial series setup guidance"],
            compliance: ["Everything in Starter (Plus)", "Operating agreement for series", "Cell Structure Optimization Review"],
            enterprise: ["Everything in Compliance (Plus)", "Customized tax and legal strategy guidance", "Individual Series Protected Asset Allocation"]
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
    "trademark-filing": {
        name: "Trademark Filing",
        starter: 199.00,
        compliance: 299.00,
        enterprise: 499.00,
        bullets: {
            starter: ["Trademark search", "Basic application filing"],
            compliance: ["Everything in Starter (Plus)", "Preparation of a comprehensive application", "Federal USPTO Database Screen"],
            enterprise: ["Everything in Compliance (Plus)", "Monitoring and support for registration process", "Office Action Response Framework Protection"]
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
            starter: ["Registered agent services for one year"],
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
    "employer-id-ein": {
        name: "Employer ID (EIN)",
        starter: 79.00,
        compliance: 149.00,
        enterprise: 199.00,
        bullets: {
            starter: ["EIN application assistance"],
            compliance: ["Everything in Starter (Plus)", "IRS form preparation", "SS-4 Telephonic Tracking Queue Access"],
            enterprise: ["Everything in Compliance (Plus)", "Tax planning consultation", "Official Corporate Banking Resolution Sheet"]
        }
    },
    "dissolution": {
        name: "Entity Dissolution",
        starter: 149.00,
        compliance: 249.00,
        enterprise: 349.00,
        bullets: {
            starter: ["Preparation of dissolution paperwork"],
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
            starter: ["Application assistance"],
            compliance: ["Everything in Starter (Plus)", "Mode of delivery options", "State Database Status Scan Verification"],
            enterprise: ["Everything in Compliance (Plus)", "Fast track filing service", "Certified Digital PDF Vault Mirror Copy"]
        }
    },
    "apostille-services": {
        name: "Apostille Authentication Services",
        starter: 99.00,
        compliance: 179.00,
        enterprise: 299.00,
        bullets: {
            starter: ["Preparation and filing for one document"],
            compliance: ["Everything in Starter (Plus)", "Multiple document discounts available", "Hague Convention Verification Audit"],
            enterprise: ["Everything in Compliance (Plus)", "Comprehensive service with expedited processing", "International Courier Delivery Protection Track"]
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
            starter: ["Tailored consulting services ($150 / Hour)"],
            compliance: ["Everything in Starter (Plus)", "Package Plan: Pre-purchased 10 hours for ongoing support"],
            enterprise: ["Everything in Compliance (Plus)", "Package Plan: Pre-purchased 20 hours for comprehensive enterprise support"]
        }
    },
    "federal-tax": {
        name: "Federal Income Tax",
        starter: 299.00,
        compliance: 499.00,
        enterprise: 799.00,
        bullets: {
            starter: ["Basic federal tax preparation"],
            compliance: ["Everything in Starter (Plus)", "Tax planning session included", "Quarterly Estimated Payment Projections"],
            enterprise: ["Everything in Compliance (Plus)", "Comprehensive tax strategy and filing", "Full IRS Audit Defense Representation Safeguard"]
        }
    },

        "state-tax": { 
        name: "State Income Tax", 
        starter: 199.00, 
        compliance: 349.00, 
        enterprise: 549.00, 
        bullets: { 
            starter: ["State tax preparation"], 
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
            starter: ["Preparation and filing assistance"], 
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
            starter: ["Application assistance"], 
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
            starter: ["Basic payroll tax filing"], 
            compliance: ["Everything in Starter (Plus)", "Detailed payroll reporting", "IRS Form Quarterly Verification"], 
            enterprise: ["Everything in Compliance (Plus)", "Comprehensive payroll solutions", "Full IRS Audit Defense Legal Representation Guarantee"] 
        } 
    }, 
    "heavy-use-tax-2290": { 
        name: "Heavy Use Tax (2290)", 
        starter: 99.00, 
        compliance: 179.00, 
        enterprise: 249.00, 
        bullets: { 
            starter: ["Preparation assistance for one vehicle"], 
            compliance: ["Everything in Starter (Plus)", "Multiple vehicle discounts", "Instant Digital Schedule 1 Receipt Delivery"], 
            enterprise: ["Everything in Compliance (Plus)", "Comprehensive compliance and auditing", "Dedicated US-Based Compliance Account Specialist Match"] 
        } 
    }, 
    "cage-code": { 
        name: "CAGE Code", 
        starter: 249.00, 
        compliance: 349.00, 
        enterprise: 449.00, 
        bullets: { 
            starter: ["Application assistance"], 
            compliance: ["Everything in Starter (Plus)", "Status monitoring", "SAM.gov Active Directory Account Profile Linkage Setup"], 
            enterprise: ["Everything in Compliance (Plus)", "Full service with registration support", "Defense Logistics Agency Verification Discrepancy Resolution"] 
        } 
    }, 
    "duns-number": { 
        name: "DUNS Number Procurement", 
        starter: 49.00, 
        compliance: 99.00, 
        enterprise: 179.00, 
        bullets: { 
            starter: ["Step-by-step guidance"], 
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
    "owner-operators": { 
        name: "Owner Operators", 
        starter: 199.00, 
        compliance: 299.00, 
        enterprise: 499.00, 
        bullets: { 
            starter: ["Business structure advice"], 
            compliance: ["Everything in Starter (Plus)", "Full compliance package", "Interstate DOT Authority Status Review Audit"], 
            enterprise: ["Everything in Compliance (Plus)", "Financial planning services", "Complete New Entrant Safety Audit Compliance Orientation"] 
        } 
    }, 
    "trucker-authority": { 
        name: "Trucker Authority", 
        starter: 199.00, 
        compliance: 299.00, 
        enterprise: 499.00, 
        bullets: { 
            starter: ["Authority application preparation"], 
            compliance: ["Everything in Starter (Plus)", "Support for compliance documentation", "FMCSA Interstate Operating Authority MC Number Filing Submission"], 
            enterprise: ["Everything in Compliance (Plus)", "Full service with ongoing support", "BOC-3 Process Agent Uniform Filing Submission Processing"] 
        } 
    }, 
    "broker-authority": { 
        name: "Broker Authority", 
        starter: 199.00, 
        compliance: 299.00, 
        enterprise: 499.00, 
        bullets: { 
            starter: ["Basic application preparation"], 
            compliance: ["Everything in Starter (Plus)", "Compliance support", "Mandatory 21-Day Public Protest Period Status Monitoring Management"], 
            enterprise: ["Everything in Compliance (Plus)", "Full service with network connections", "Expedited Authority Certificate Delivery Dispatch Route"] 
        } 
    }, 
    "ucr-registration": { 
        name: "UCR Registration", 
        starter: 99.00, 
        compliance: 179.00, 
        enterprise: 249.00,
        bullets: { 
            starter: ["Registration assistance"], 
            compliance: ["Everything in Starter (Plus)", "Compliance reminders", "Current Year National UCR Registration Filing Support"], 
            enterprise: ["Everything in Compliance (Plus)", "Ongoing support services", "Multi-State Clearinghouse Compliance Monitoring Safeguard"] 
        } 
    }, 
    "scac-code": { 
        name: "SCAC Code Registration", 
        starter: 49.00, 
        compliance: 99.00, 
        enterprise: 149.00, 
        bullets: { 
            starter: ["Application assistance"], 
            compliance: ["Everything in Starter (Plus)", "Status tracking service", "Standard Carrier Alpha Code Application Processing"], 
            enterprise: ["Everything in Compliance (Plus)", "Complete registration support", "Annual SCAC Code Renewal Automation Protection"] 
        } 
    }, 
    "dot-consortium": { 
        name: "DOT Consortium", 
        starter: 149.00, 
        compliance: 299.00, 
        enterprise: 499.00, 
        bullets: { 
            starter: ["Program enrollment assistance"], 
            compliance: ["Everything in Starter (Plus)", "Compliance monitoring", "Carrier Safety Measurement System Data Scores Pre-Audit Assessment"], 
            enterprise: ["Everything in Compliance (Plus)", "Full service with ongoing audits", "Mandatory Drug and Alcohol Clearinghouse Dynamic Query Verifications"] 
        } 
    }, 
    "driver-file": { 
        name: "Driver Qualification File", 
        starter: 279.00, 
        compliance: 349.00, 
        enterprise: 449.00, 
        bullets: { 
            starter: ["Basic documentation preparation"], 
            compliance: ["Everything in Starter (Plus)", "Compliance packet preparation", "Mandatory Employment History Verification Form Compilations"], 
            enterprise: ["Everything in Compliance (Plus)", "Comprehensive management of files", "Annual Motor Vehicle Record (MVR) Background Integration Setup"] 
        } 
    }, 
    "process-agents-boc-3": { 
        name: "Process Agents (BOC-3)", 
        starter: 49.00, 
        compliance: 99.00, 
        enterprise: 149.00, 
        bullets: { 
            starter: ["Filing assistance"], 
            compliance: ["Everything in Starter (Plus)", "Annual renewal support", "Designation of Process Agents across All 50 States Forms Filing"], 
            enterprise: ["Everything in Compliance (Plus)", "Ongoing compliance service", "Immediate Real-Time Legal Document Courier Scan Mirror Forwarding"] 
        } 
    },


    "ifta-registration": { 
        name: "IFTA Registration", 
        starter: 159.00, 
        compliance: 279.00, 
        enterprise: 349.00, 
        bullets: { 
            starter: ["IFTA registration assistance"], 
            compliance: ["Everything in Starter (Plus)", "Compliance checks", "Initial Fleet Fuel Tax Decal Set Procurement"], 
            enterprise: ["Everything in Compliance (Plus)", "Full support with filing", "Quarterly Fuel Tax Mileage Record Auditing"] 
        } 
    }, 
    "hazmat-registration": { 
        name: "DOT HAZMAT Registration", 
        starter: 199.00, 
        compliance: 349.00, 
        enterprise: 499.00, 
        bullets: { 
            starter: ["Basic registration assistance"], 
            compliance: ["Everything in Starter (Plus)", "Detailed compliance packet", "PHMSA Database Registry Validation Verification"], 
            enterprise: ["Everything in Compliance (Plus)", "Full support and ongoing compliance", "Hazmat Employee Security Plan Documentation Framework"] 
        } 
    }, 
    "licenses-permits": { 
        name: "Licenses & Permits", 
        starter: 79.00, 
        compliance: 149.00, 
        enterprise: 299.00, 
        bullets: { 
            starter: ["Basic license research"], 
            compliance: ["Complete application assistance", "Municipal Zoning Board Verification Check"], 
            enterprise: ["Ongoing compliance support", "Annual Local Permit Renewal Auto-Tracking Subscription"] 
        } 
    }, 
    "trucker-insurance-quote": { 
        name: "Trucker Insurance", 
        starter: 99.00, 
        compliance: 199.00, 
        enterprise: 299.00, 
        bullets: { 
            starter: ["Document preparation and filing"], 
            compliance: ["Everything in Starter (Plus)", "Negotiation with providers", "Commercial Auto Fleet Risk Evaluation Profile"], 
            enterprise: ["Everything in Compliance (Plus)", "Comprehensive package customized", "Direct Underwriter Premium Rate Restructuring"] 
        } 
    }, 
    "broker-insurance-quote": { 
        name: "Broker Insurance", 
        starter: 99.00, 
        compliance: 199.00, 
        enterprise: 299.00, 
        bullets: { 
            starter: ["Document preparation and filing"], 
            compliance: ["Everything in Starter (Plus)", "Risk assessment included", "Contingent Cargo Liability Exposure Analysis"], 
            enterprise: ["Everything in Compliance (Plus)", "Full consultation for coverage needs", "Multi-Provider Market Premium Escrow Sweeps"] 
        } 
    }, 
    "new-entrant-audit": { 
        name: "New Entrant Audit", 
        starter: 199.00, 
        compliance: 299.00, 
        enterprise: 499.00, 
        bullets: { 
            starter: ["Basic audit preparation"], 
            compliance: ["Everything in Starter (Plus)", "Mock audit and consultation", "FMCSA Safety Measurement System Score Scan"], 
            enterprise: ["Everything in Compliance (Plus)", "Comprehensive audit support", "Done-For-You Corrective Action Plan Response Warranty"] 
        } 
    }, 
    "ifta-quarterly-returns": { 
        name: "IFTA Quarterly Fuel Tax Filing", 
        starter: 129.00, 
        compliance: 249.00, 
        enterprise: 449.00, 
        bullets: { 
            starter: ["Distance and fuel baseline log sorting"], 
            compliance: ["Everything in Starter (Plus)", "State tax generation calculations", "Electronic return submission"], 
            enterprise: ["Everything in Compliance (Plus)", "Audit protection shield", "Multi-jurisdictional fleet management", "Fuel Tax Credit Optimization Sweep"] 
        } 
    }, 
    "mcs-150-update": { 
        name: "Biennial MCS-150 Updating", 
        starter: 45.00, 
        compliance: 89.00, 
        enterprise: 139.00, 
        bullets: { 
            starter: ["USDOT registry validation diagnostics"], 
            compliance: ["Everything in Starter (Plus)", "Direct FMCSA portal submission", "Electronic success notifications"], 
            enterprise: ["Everything in Compliance (Plus)", "Accelerated expedited submission track", "System change monitoring", "MCS-150 Calendar Monitor Setup"] 
        } 
    }, 
    "boc-3-amendment": { 
        name: "BOC-3 Priority Amendment Filing", 
        starter: 39.00, 
        compliance: 79.00, 
        enterprise: 119.00,
        bullets: { 
            starter: ["Legal name change analysis parameters"], 
            compliance: ["Everything in Starter (Plus)", "Direct FMCSA register address updating", "Immediate certification outputs"], 
            enterprise: ["Everything in Compliance (Plus)", "Priority premium network tracking loop overrides", "Multi-State Agent Verification Lock"] 
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

