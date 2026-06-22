// ============================================================================ //
// 🗄️ CENTRAL PRICING NAMESPACE SYSTEM INITIALIZATION (NO FALLBACKS)
// ============================================================================ //

// Enforce global existence of base objects before data mutations run
window.GLOBAL_COMPANY_PRICING = window.GLOBAL_COMPANY_PRICING || {};

// Explicitly declare the addons bucket so Object.assign never checks undefined
window.GLOBAL_COMPANY_PRICING.addons = window.GLOBAL_COMPANY_PRICING.addons || {};

// Harmonize database pointers so all 44+ services align across both names
window.CENTRAL_SERVICE_PLAN_DB = window.CENTRAL_SERVICE_PLAN_DB || {};
window.GLOBAL_COMPANY_PRICING.packages = window.GLOBAL_COMPANY_PRICING.packages || window.CENTRAL_SERVICE_PLAN_DB;


// ============================================================================ 
// 🗄️ CENTRAL SYSTEM DATABASE INITIALIZATION & REVERSE PROXIES
// ============================================================================ 
window.CENTRAL_SERVICE_PLAN_DB = window.CENTRAL_SERVICE_PLAN_DB || {};

Object.assign(window.CENTRAL_SERVICE_PLAN_DB, {
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
            starter: ["Basic application preparation", "Application Submission"], 
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
    }
});



// ============================================================================ //
// MODULE 5: SYSTEM ADDONS & REVENUE OPTIMIZATION DATABASE (SERVICES 1 - 25)
// ============================================================================ //
Object.assign(window.GLOBAL_COMPANY_PRICING.addons, {
  // Existing baseline infrastructure nodes
  ra_service: 75.00,
  compliance_monitor: 99.00,
  corp_resolutions: 49.00,
  corp_minutes: 39.00,
  operating_agreement: 59.00,
  bylaws_pack: 59.00,
  ein_procure: 75.00,
  good_standing: 65.00,
  boc3_filing: 75.00,
  fmcsa_audit: 149.00,

  // NEW REVENUE VERTICAL: Corporate Branding, Web Frameworks, & Identity
  professional_website: 399.00,
  custom_identity_logo: 149.00,
  enterprise_email_domain: 49.00,
  business_phone_line: 79.00,
  digital_marketing_starter: 199.00,

  // NEW REVENUE VERTICAL: Continuous Commercial Regulatory Compliance Management
  boi_annual_management: 89.00,
  finra_regulatory_review: 249.00,
  sam_registry_maintenance: 189.00,
  trademark_monitoring_quarterly: 129.00,
  corporate_tax_consultation: 150.00,

  // NEW REVENUE VERTICAL: Logistics Telematics, Safety Systems, & Transit Auditing
  eld_hardware_integration: 299.00,
  ifta_logbook_audit_protection: 149.00,
  driver_qualification_monitoring: 99.00,
  hazmat_route_consulting: 349.00,
  customs_bond_procurement: 199.00
});

// LAST ONE


// ============================================================================ //
// 🛠️ MODULE 4: AUTOMATED WEBSITE SALES-CARD RENDER ENGINE (SYNCHRONIZED READY)
// ============================================================================ //

    
    // 1. STRICT TOPIC INTERCEPTOR - REMOVED ALL HARDCODED DEFAULTS
function renderMainWebsitePricingCards(passedServiceKey) {
    var targetContainer = document.getElementById("website-package-pricing-cards-root");
    if (!targetContainer || !window.GLOBAL_COMPANY_PRICING || !window.GLOBAL_COMPANY_PRICING.packages) return;

    // Read the explicit layout token string passed strictly at runtime by your engine
    var targetServiceKey = passedServiceKey || targetContainer.getAttribute("data-service-key");
    
    // 🔒 ABSOLUTE SAFETY GATEKEEPER FIREWALL
    if (!targetServiceKey) {
        console.error("❌ Pricing Engine Failure: No valid service key parameter provided. Halting render operations.");
        return;
    }

    var serviceData = window.GLOBAL_COMPANY_PRICING.packages[targetServiceKey];
    
    // If the database dictionary doesn't hold prices for this exact slug path, stop immediately
    if (!serviceData) {
        console.warn("⚠️ Pricing Engine Note: No pricing configurations registered for key [" + targetServiceKey + "]");
        return;
    }


       var cardsHtml = "";
    var plansConfig = [
        { key: "starter", name: "Basic", class: "price-card", btnStyle: "background: var(--navy);" },
        { key: "compliance", name: "Elite", class: "price-card featured", btnStyle: "" },
        { key: "enterprise", name: "Enterprise", class: "price-card", btnStyle: "background: var(--navy);" }
    ];

    plansConfig.forEach(function(plan) {
        var basePrice = serviceData[plan.key] || 0;
        var bullets = (serviceData.bullets && serviceData.bullets[plan.key]) ? serviceData.bullets[plan.key] : [];
        var bulletListHtml = "";
        bullets.forEach(function(bulletText) {
            bulletListHtml += '<li>' + bulletText + '</li>';
        });

        var badgeHtml = (plan.key === "compliance") ? '<div class="price-badge">Most Popular</div>' : '';
        
        // Dynamically binds your link parameter string strictly to your verified page slug variable
        cardsHtml += '<div class="' + plan.class + '">' + badgeHtml + '<h3>' + plan.name + '</h3>' +
                     '<div class="amount">$' + basePrice.toFixed(2) + ' <span>+ State Fee</span></div>' +
                     '<ul class="price-features">' + bulletListHtml + '</ul>' +
                     '<a href="wizard.html?service=' + targetServiceKey + '&plan=' + plan.key + '" class="btn-main" style="width: 100%; text-align: center; ' + plan.btnStyle + '">Select ' + plan.name + '</a>' +
                     '</div>';
    });
    targetContainer.innerHTML = '<section id="pricing" class="pricing-section">' +
                                '<span class="hero-tag">Deployment Tiers</span>' +
                                '<h2>Transparent formation pricing.</h2>' +
                                '<div class="pricing-grid">' + cardsHtml + '</div>' +
                                '</section>';
}





window.STATE_FILING_FEES = window.STATE_FILING_FEES || {};

Object.assign(window.STATE_FILING_FEES, {
  "AL": { name: "Alabama", time: "3-5 Business Days", llc: 200.00, series_llc: 200.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 25.00 },
  "AK": { name: "Alaska", time: "10-15 Business Days", llc: 250.00, series_llc: 250.00, partnership: 250.00, s_corp: 250.00, c_corp: 250.00, non_profit: 50.00 },
  "AZ": { name: "Arizona", time: "7-10 Business Days", llc: 50.00, series_llc: 50.00, partnership: 10.00, s_corp: 60.00, c_corp: 60.00, non_profit: 40.00 },
  "AR": { name: "Arkansas", time: "2-3 Business Days", llc: 45.00, series_llc: 45.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 50.00 },
  "CA": { name: "California", time: "5-7 Business Days", llc: 70.00, series_llc: 70.00, partnership: 70.00, s_corp: 100.00, c_corp: 100.00, non_profit: 30.00 },
  "CO": { name: "Colorado", time: "Instant Processing", llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 50.00 },
  "CT": { name: "Connecticut", time: "3-5 Business Days", llc: 120.00, series_llc: 120.00, partnership: 120.00, s_corp: 250.00, c_corp: 250.00, non_profit: 50.00 },
  "DE": { name: "Delaware", time: "24-Hour Express", llc: 90.00, series_llc: 90.00, partnership: 200.00, s_corp: 89.00, c_corp: 89.00, non_profit: 89.00 },
  "DC": { name: "District of Columbia", time: "5-7 Business Days", llc: 99.00, series_llc: 99.00, partnership: 220.00, s_corp: 220.00, c_corp: 220.00, non_profit: 80.00 },
  "FL": { name: "Florida", time: "2-3 Business Days", llc: 125.00, series_llc: 125.00, partnership: 1000.00, s_corp: 70.00, c_corp: 70.00, non_profit: 70.00 },
  "GA": { name: "Georgia", time: "5-7 Business Days", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 100.00 },
  "HI": { name: "Hawaii", time: "3-5 Business Days", llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 25.00 },
  "ID": { name: "Idaho", time: "7-10 Business Days", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 30.00 },
  "IL": { name: "Illinois", time: "10-12 Business Days", llc: 150.00, series_llc: 400.00, partnership: 150.00, s_corp: 150.00, c_corp: 150.00, non_profit: 50.00 },
  "IN": { name: "Indiana", time: "Instant Processing", llc: 95.00, series_llc: 95.00, partnership: 95.00, s_corp: 95.00, c_corp: 95.00, non_profit: 30.00 },
  "IA": { name: "Iowa", time: "3-5 Business Days", llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 20.00 },
  "KS": { name: "Kansas", time: "2-3 Business Days", llc: 160.00, series_llc: 160.00, partnership: 160.00, s_corp: 90.00, c_corp: 90.00, non_profit: 20.00 },
  "KY": { name: "Kentucky", time: "Instant Processing", llc: 40.00, series_llc: 40.00, partnership: 40.00, s_corp: 40.00, c_corp: 40.00, non_profit: 8.00 },
  "LA": { name: "Louisiana", time: "2-3 Business Days", llc: 100.00, series_llc: 100.00, partnership: 150.00, s_corp: 100.00, c_corp: 100.00, non_profit: 75.00 },
  "ME": { name: "Maine", time: "5-7 Business Days", llc: 175.00, series_llc: 175.00, partnership: 175.00, s_corp: 145.00, c_corp: 145.00, non_profit: 40.00 },
  "MD": { name: "Maryland", time: "5-7 Business Days", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 120.00, c_corp: 120.00, non_profit: 120.00 },
  "MA": { name: "Massachusetts", time: "3-5 Business Days", llc: 500.00, series_llc: 500.00, partnership: 500.00, s_corp: 275.00, c_corp: 275.00, non_profit: 30.00 },
  "MI": { name: "Michigan", time: "3-5 Business Days", llc: 50.00, series_llc: 50.00, partnership: 100.00, s_corp: 60.00, c_corp: 60.00, non_profit: 20.00 },
  "MN": { name: "Minnesota", time: "3-5 Business Days", llc: 135.00, series_llc: 135.00, partnership: 135.00, s_corp: 135.00, c_corp: 135.00, non_profit: 70.00 },
  "MS": { name: "Mississippi", time: "2-3 Business Days", llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 50.00 },
  "MO": { name: "Missouri", time: "Instant Processing", llc: 50.00, series_llc: 50.00, partnership: 105.00, s_corp: 58.00, c_corp: 58.00, non_profit: 25.00 },
  "MT": { name: "Montana", time: "Instant Processing", llc: 35.00, series_llc: 35.00, partnership: 20.00, s_corp: 20.00, c_corp: 20.00, non_profit: 20.00 },
  "NE": { name: "Nebraska", time: "3-5 Business Days", llc: 105.00, series_llc: 105.00, partnership: 200.00, s_corp: 60.00, c_corp: 60.00, non_profit: 25.00 },
  "NV": { name: "Nevada", time: "1-2 Business Days", llc: 425.00, series_llc: 425.00, partnership: 75.00, s_corp: 350.00, c_corp: 350.00, non_profit: 50.00 },
  "NH": { name: "New Hampshire", time: "5-7 Business Days", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 25.00 },
  "NJ": { name: "New Jersey", time: "3-5 Business Days", llc: 125.00, series_llc: 125.00, partnership: 125.00, s_corp: 125.00, c_corp: 125.00, non_profit: 75.00 },
  "NM": { name: "New Mexico", time: "3-5 Business Days", llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 100.00, c_corp: 100.00, non_profit: 25.00 },
  "NY": { name: "New York", time: "7-10 Business Days", llc: 200.00, series_llc: 200.00, partnership: 200.00, s_corp: 125.00, c_corp: 125.00, non_profit: 75.00 },
  "NC": { name: "North Carolina", time: "3-5 Business Days", llc: 125.00, series_llc: 125.00, partnership: 50.00, s_corp: 125.00, c_corp: 125.00, non_profit: 60.00 },
  "ND": { name: "North Dakota", time: "3-5 Business Days", llc: 135.00, series_llc: 135.00, partnership: 135.00, s_corp: 100.00, c_corp: 100.00, non_profit: 40.00 },
  "OH": { name: "Ohio", time: "2-3 Business Days", llc: 99.00, series_llc: 99.00, partnership: 99.00, s_corp: 99.00, c_corp: 99.00, non_profit: 99.00 },
  "OK": { name: "Oklahoma", time: "2-3 Business Days", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 50.00, c_corp: 50.00, non_profit: 25.00 },
  "OR": { name: "Oregon", time: "Instant Processing", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 50.00 },
  "PA": { name: "Pennsylvania", time: "7-10 Business Days", llc: 125.00, series_llc: 125.00, partnership: 125.00, s_corp: 125.00, c_corp: 125.00, non_profit: 125.00 },
  "RI": { name: "Rhode Island", time: "3-5 Business Days", llc: 150.00, series_llc: 150.00, partnership: 100.00, s_corp: 230.00, c_corp: 230.00, non_profit: 35.00 },
  "SC": { name: "South Carolina", time: "2-3 Business Days", llc: 110.00, series_llc: 110.00, partnership: 10.00, s_corp: 135.00, c_corp: 135.00, non_profit: 25.00 },
  "SD": { name: "South Dakota", time: "Instant Processing", llc: 150.00, series_llc: 150.00, partnership: 125.00, s_corp: 150.00, c_corp: 150.00, non_profit: 30.00 },
  "TN": { name: "Tennessee", time: "Instant Processing", llc: 300.00, series_llc: 300.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 100.00 },
  "TX": { name: "Texas", time: "3-5 Business Days", llc: 300.00, series_llc: 300.00, partnership: 750.00, s_corp: 300.00, c_corp: 300.00, non_profit: 25.00 },
  "UT": { name: "Utah", time: "2-3 Business Days", llc: 54.00, series_llc: 54.00, partnership: 54.00, s_corp: 54.00, c_corp: 54.00, non_profit: 30.00 },
  "VT": { name: "Vermont", time: "3-5 Business Days", llc: 125.00, series_llc: 125.00, partnership: 125.00, s_corp: 125.00, c_corp: 125.00, non_profit: 125.00 },
  "VA": { name: "Virginia", time: "Instant Processing", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 75.00, c_corp: 75.00, non_profit: 75.00 },
  "WA": { name: "Washington", time: "2-3 Business Days", llc: 200.00, series_llc: 200.00, partnership: 180.00, s_corp: 180.00, c_corp: 180.00, non_profit: 30.00 },
  "WV": { name: "West Virginia", time: "5-7 Business Days", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 25.00 },
  "WI": { name: "Wisconsin", time: "5-7 Business Days", llc: 130.00, series_llc: 130.00, partnership: 70.00, s_corp: 100.00, c_corp: 100.00, non_profit: 35.00 },
  "WY": { name: "Wyoming", time: "1-2 Business Days", llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 50.00 }
});

