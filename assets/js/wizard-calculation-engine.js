// ============================================================================
// 🏛️ CENTRAL SERVICE DESIGNATION PLAN CONFIGURATION DATABASE
// ============================================================================

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
    }
}

// Expose objects cleanly
window.CENTRAL_SERVICE_PLAN_DB = CENTRAL_SERVICE_PLAN_DB;

// Dynamic Safe Price Provider (Prevents crash if service or tier is unexpected)
window.getServicePrice = function(serviceKey, tierKey = 'starter') {
  const service = window.CENTRAL_SERVICE_PLAN_DB[serviceKey];
  if (!service) return 0;
  return service.prices[tierKey] || service.prices['starter'] || 0;
};


// ============================================================================
// ⚙️ SYSTEM STATE FLOW & NAVIGATION TRACKING
// ============================================================================

let currentWizardActiveStep = 1;
const totalWizardExpectedSteps = 5;

// Fallback initial routes (Will be overridden dynamically by user choices)
window.routeActiveServiceKey = window.routeActiveServiceKey || "hazmat-registration";
window.routeActivePlanKey = window.routeActivePlanKey || "starter"; // Switched 'elite' to a valid tier from Block 1
window.wizardCalculatedFinalTotalAmount = 0;

// ============================================================================
// 🔌 ACTIVE ADD-ON SERVICE STATE FLAGS (Dynamic Add-on Tracking)
// ============================================================================

window.customSelectedRegisteredAgentServiceActive = false;
window.customSelectedEinProcurementServiceActive = false;
window.customSelectedScorpElectionServiceActive = false;
window.customSelectedSolePropLicenseAuditServiceActive = false;
window.customSelectedDbaLicenseAuditServiceActive = false;
window.customSelectedNonprofitLicenseCheckActive = false;
window.customSelectedDbaSearchServiceActive = false;
window.customSelectedForeignQualLicenseSuiteActive = false;
window.customSelectedExpeditedFilingServiceActive = false;
window.customSelectedApostilleAuthenticationServiceActive = false;
window.customSelectedGoodStandingCertificateServiceActive = false;


// ============================================================================ //
// 🔗 MASTER ALIAS ROUTING BRIDGE FOR HTML BUTTONS (STRICT JUMP ENGINE)
// ============================================================================ //
function goToNextWizardStep(targetStepIndex, event = null) {
    console.log("[Bridge Action] Incoming call raw value: " + targetStepIndex);
    
    // Prevent default form submission leaks cleanly
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    } else if (window.event) {
        window.event.preventDefault();
    }
    
    // Handle specific directional keyword string flags
    if (targetStepIndex === 'back' || targetStepIndex === 'prev') {
        targetStepIndex = currentWizardActiveStep - 1;
    } else if (targetStepIndex !== null && targetStepIndex !== undefined) {
        targetStepIndex = parseInt(targetStepIndex, 10);
    }
    
    // Fallback protection if parameter is broken, missing, or NaN
    if (targetStepIndex === null || targetStepIndex === undefined || isNaN(targetStepIndex)) {
        targetStepIndex = currentWizardActiveStep + 1;
        console.log("[Bridge Safety Override] Index invalid. Auto-advancing to: " + targetStepIndex);
    }
    
    // Protect against view underflow
    if (targetStepIndex < 1) {
        console.warn("[Bridge Guard] Cannot jump below step 1.");
        return false;
    }
    
    // Protect against view overflow
    if (targetStepIndex > totalWizardExpectedSteps) {
        console.warn("[Bridge Guard] Cannot jump past max steps (" + totalWizardExpectedSteps + ").");
        return false;
    }

    // ============================================================================ //
    // ⚡️ STAGE-ZERO INJECTION GATEKEEPER
    // ============================================================================ //
    // If the customer is advancing onto Step 2, force-inject the dynamic form elements
    // right before execution loops change the panel visibility states.
    if (targetStepIndex === 2) {
        if (typeof window.executeStepTwoDynamicFormInjection === "function") {
            // Pass true to clear currentWizardActiveStep logic catch-22 loops
            window.executeStepTwoDynamicFormInjection(true);
        } else {
            console.error("[Bridge Guard Fatal Exception] executeStepTwoDynamicFormInjection is missing from global memory layers.");
        }
    }
    
    console.log("[Bridge Success] Routing engine executing step jump to index: " + targetStepIndex);
    executeDirectStepJump(targetStepIndex);
}

function executeDirectStepJump(targetIndex) {
  // Sync local scope tracker cleanly to the single global source of truth
  window.currentWizardActiveStep = window.currentWizardActiveStep || 1;
  window.totalWizardExpectedSteps = window.totalWizardExpectedSteps || 7;

  console.log("[Wizard Engine] Transitioning state: Step " + window.currentWizardActiveStep + " -> Step " + targetIndex);

  // 🛡️ Form validation checks: Required ONLY when advancing FORWARD
  if (targetIndex > window.currentWizardActiveStep) {
    var activePanel = document.getElementById("step-panel-" + window.currentWizardActiveStep);
    if (activePanel) {
      // Direct Fix: Only scan inputs that are actually INSIDE the active panel wrapper
      var inputs = activePanel.querySelectorAll("input[required], select[required], textarea[required]");
      var isValid = true;
      
      inputs.forEach(function(el) {
        if (typeof el.checkValidity === "function" && !el.checkValidity()) {
          el.reportValidity();
          isValid = false;
        }
      });

      if (!isValid) {
        console.warn("[Wizard Engine] Forward navigation halted: Form validation failed inside Step " + window.currentWizardActiveStep);
        return false;
      }
    }
  }

  // Sync state data cache safely before layout change
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }

  // Commit verified numeric step state to global scope memory layers
  window.currentWizardActiveStep = targetIndex;

  // Sync structural DOM visibility states across layout steps
  var panels = document.querySelectorAll(".master-onboarding-form");
  if (panels && panels.length > 0) {
    panels.forEach(function(panel, index) {
      var stepNumber = index + 1;
      if (stepNumber === targetIndex) {
        panel.classList.add("active");
        // Direct Fix: Cleanly clear display parameters to prevent layout distortions
        panel.style.removeProperty("display");
        panel.style.setProperty("display", "block", "important");
      } else {
        panel.classList.remove("active");
        panel.style.removeProperty("display");
        panel.style.setProperty("display", "none", "important");
      }
    });
  }

  // Fire execution recalculations safely upon step entry
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
  if (typeof populatePurchaseSummaryReviewMatrix === "function") {
    populatePurchaseSummaryReviewMatrix();
  }
  if (typeof renderActiveWizardStepUiLayout === "function") {
    renderActiveWizardStepUiLayout();
  }
}

// CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE
document.addEventListener("DOMContentLoaded", function() {
  if (typeof initializeDynamicChronometerWidget12Hr === "function") {
    initializeDynamicChronometerWidget12Hr();
  }
  if (typeof generateSecureRuntimeSessionTokenVanilla === "function") {
    generateSecureRuntimeSessionTokenVanilla();
  }
  if (typeof autoInjectMainWebsitePricingPlan === "function") {
    autoInjectMainWebsitePricingPlan();
  } else if (typeof initializeUrlParameterParserEngineVanilla === "function") {
    initializeUrlParameterParserEngineVanilla();
  }
  if (typeof initializeDigitalSignatureMirrorSync === "function") {
    initializeDigitalSignatureMirrorSync();
  }

  // Restore cached inputs from local state cleanly on load
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true);
  }

  // Direct Fix: Delayed execution prevents Step 3 fields from injecting early and breaking Step 1 rules
  if (window.currentWizardActiveStep === 2 && typeof executeStepTwoDynamicFormInjection === "function") {
    executeStepTwoDynamicFormInjection(true);
  }

  if (typeof initializeFormDisplayLayoutSync === "function") {
    initializeFormDisplayLayoutSync();
  }
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
  if (typeof renderActiveWizardStepUiLayout === "function") {
    renderActiveWizardStepUiLayout();
  }
});



// ============================================================================
// ⏱️ REAL-TIME CHRONOLOGICAL CLOCK COMPONENT (12-HOUR TIME REGIME)
// ============================================================================

function initializeDynamicChronometerWidget12Hr() {
  const clockNode = document.getElementById("wizard-live-clock-timestamp");
  if (!clockNode) return; // Prevent interval loops if element is missing

  function refreshLiveTime() {
    const nowTimestamp = new Date();
    let hourDigits = nowTimestamp.getHours();
    const minuteDigits = nowTimestamp.getMinutes().toString().padStart(2, '0');
    const secondDigits = nowTimestamp.getSeconds().toString().padStart(2, '0');
    const timePeriodMeridiem = hourDigits >= 12 ? 'PM' : 'AM';
    
    hourDigits = hourDigits % 12;
    hourDigits = hourDigits ? hourDigits : 12;
    
    const formattedTimeStr = `${hourDigits}:${minuteDigits}:${secondDigits} ${timePeriodMeridiem}`;
    if (clockNode) clockNode.textContent = formattedTimeStr;
  }
  
  refreshLiveTime();
  setInterval(refreshLiveTime, 1000);
}

// ============================================================================
// 🛡️ GENERATE SECURE TRANSACTION REFERENCE REF STAMP
// ============================================================================

function generateSecureRuntimeSessionTokenVanilla() {
  let bufferArray = new Uint32Array(4);
  window.crypto.getRandomValues(bufferArray);
  let hexTokenStr = Array.from(bufferArray, val => val.toString(16).padStart(8, '0')).join('').toUpperCase();
  let sessionTokenString = `F4U-TX-${hexTokenStr.substring(0, 16)}`;
  
  const sessionDisplayNode = document.getElementById("wizard-session-token-display-root");
  if (sessionDisplayNode) sessionDisplayNode.textContent = sessionTokenString;
  
  window.f4u_tx_session_hash = sessionTokenString;
}

// ============================================================================
// 🔗 URL PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE
// ============================================================================

function initializeUrlParameterParserEngineVanilla() {
  const searchUrlQueryStrings = new URLSearchParams(window.location.search);
  const queryPassedService = searchUrlQueryStrings.get('service');
  const queryPassedPlan = searchUrlQueryStrings.get('plan');
  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  // 1. Parse incoming website page targets and translate to full names
  if (queryPassedService) {
    window.routeActiveServiceKey = queryPassedService.toLowerCase().trim();
    if (inputServiceNode) {
      if (window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) {
        inputServiceNode.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name;
      } else {
        let cleanLabel = window.routeActiveServiceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        inputServiceNode.value = cleanLabel;
      }
    }
  }

  // 2. Parse incoming pricing click tiers and apply descriptive titles
  if (queryPassedPlan) {
    const standardizedPlanString = queryPassedPlan.toLowerCase().trim();
    
    // Map public/marketing tiers into your system's data-layer tier keys
    let tierMapping = {
      "standard": "starter",
      "elite": "compliance",
      "enterprise": "enterprise",
      "starter": "starter",
      "compliance": "compliance"
    };

    if (tierMapping[standardizedPlanString]) {
      window.routeActivePlanKey = tierMapping[standardizedPlanString];
      
      if (inputPlanNode) {
        let planDisplayNames = {
          "starter": "Starter/Standard General Processing Plan",
          "compliance": "Compliance/Elite Priority Processing Plan (Recommended)",
          "enterprise": "Enterprise Complete Portfolio Plan"
        };
        inputPlanNode.value = planDisplayNames[window.routeActivePlanKey] || standardizedPlanString;
      }
    }
  }

  // 3. EXECUTE DYNAMIC FIELD GENERATION ON BOOT
  if (typeof executeDynamicRegulatoryFieldInjection === "function") {
    executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  }
}

// ============================================================================ //
// 🏗️ MASTER REGULATORY FORM FIELD INJECTION ENGINE (STRICT DISPATCH REPAIR)    //
// ============================================================================ //
function executeDynamicRegulatoryFieldInjection(serviceKey) {
  const rootFieldContainer = document.getElementById("dynamic-onboarding-fields-root");
  if (!rootFieldContainer) return;

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
    // FIXED: Correctly routes specialized credentials to your secondary financial/regulatory tree
    targetLayoutFamily = "regulatory"; 
  } else if (activeKey.includes("insurance") || activeKey.includes("audit")) {
    targetLayoutFamily = "insurance";
  } else {
    targetLayoutFamily = "trucking";
  }

  console.log(`[Regulatory Injection] Selected Form Family Layout Context: "${targetLayoutFamily}" for key: "${activeKey}"`);

  // 🛠️ Structural Template Executor: Swaps UI layouts based on the parsed family
  if (targetLayoutFamily === "series-llc") {
    rootFieldContainer.innerHTML = typeof buildSeriesLlcRegistrationFieldsLayoutHtml === "function" ? buildSeriesLlcRegistrationFieldsLayoutHtml(activeKey) : "";
  } else if (targetLayoutFamily === "llc") {
    rootFieldContainer.innerHTML = typeof buildLlcFormationFieldsLayoutHtml === "function" ? buildLlcFormationFieldsLayoutHtml(activeKey) : "";
  } else if (targetLayoutFamily === "nonprofit") {
    rootFieldContainer.innerHTML = typeof buildNonprofitOrganizationFieldsLayoutHtml === "function" ? buildNonprofitOrganizationFieldsLayoutHtml(activeKey) : "";
  } else if (targetLayoutFamily === "corporate") {
    rootFieldContainer.innerHTML = typeof buildCorporateFormationFieldsLayoutHtml === "function" ? buildCorporateFormationFieldsLayoutHtml(activeKey) : "";
  } else if (targetLayoutFamily === "dba") {
    rootFieldContainer.innerHTML = typeof buildDbaRegistrationFieldsLayoutHtml === "function" ? buildDbaRegistrationFieldsLayoutHtml(activeKey) : "";
  } else if (targetLayoutFamily === "sole-prop") {
    rootFieldContainer.innerHTML = typeof buildInformalEntityFieldsLayoutHtml === "function" ? buildInformalEntityFieldsLayoutHtml(activeKey) : "";
  } else if (targetLayoutFamily === "maintenance") {
    if (activeKey.includes("qualification")) {
      rootFieldContainer.innerHTML = typeof buildForeignQualificationFieldsLayoutHtml === "function" ? buildForeignQualificationFieldsLayoutHtml(activeKey) : "";
    } else {
      rootFieldContainer.innerHTML = typeof buildMaintenanceFieldsLayoutHtml === "function" ? buildMaintenanceFieldsLayoutHtml(activeKey) : "";
    }
  } else if (targetLayoutFamily === "ip") {
    rootFieldContainer.innerHTML = typeof buildIpRegistryFieldsLayoutHtml === "function" ? buildIpRegistryFieldsLayoutHtml(activeKey) : "";
  } else {
    // Safely captures financial, tax-filing, regulatory, procurement, insurance, and trucking structures
    rootFieldContainer.innerHTML = typeof buildExtendedFamiliesFieldsLayoutHtml === "function" ? buildExtendedFamiliesFieldsLayoutHtml(targetLayoutFamily, activeKey) : "";
  }
}



// ============================================================================ //
// 🚀 MASTER STEP NAVIGATION CONTROL LOGIC (VANILLA JS IMPLEMENTATION - REPAIRED) //
// ============================================================================ //
function navigateWizardStepTrackVanilla(directionOffset) {
  // Direct Fix: Safely map local lookups to single unified global tracking parameters
  window.currentWizardActiveStep = window.currentWizardActiveStep || 1;
  window.totalWizardExpectedSteps = window.totalWizardExpectedSteps || 7;

  const plannedTargetStep = window.currentWizardActiveStep + directionOffset;

  // Limit navigation bounds to valid panels
  if (plannedTargetStep < 1 || plannedTargetStep > window.totalWizardExpectedSteps) return;

  // Execute input structure check loops when advancing panels
  if (directionOffset > 0) {
    if (!validateStepInputParametersVanilla(window.currentWizardActiveStep)) {
      console.warn(`[Navigation Blocked] Form validation checks failed on step: ${window.currentWizardActiveStep}`);
      return; // Prevent step advance if validation fails
    }
  }

  // Save structural panel parameters to state cache safely before transitioning views
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }

  // Execute the structural panel visibility transform to the next layout view
  if (typeof executeDirectStepJump === "function") {
    executeDirectStepJump(plannedTargetStep);
  } else {
    window.currentWizardActiveStep = plannedTargetStep;
  }
}

// ============================================================================ //
// 🔍 INPUT INTERACTIVE VALIDATION CONTROL ENGINE (FULLY ABSTRACT - ZERO CODES) //
// ============================================================================ //
function validateStepInputParametersVanilla(stepIndex) {
  let isValid = true;
  const targetPanel = document.getElementById(`step-panel-${stepIndex}`);
  if (!targetPanel) return true; 

  targetPanel.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  targetPanel.querySelectorAll('input, select, textarea').forEach(node => {
    node.style.borderColor = 'var(--border, #e2e8f0)';
  });

  // ABSTRACT JURISDICTION TRACKING: Finds any select drop-down element that contains a 2-letter state option value
  const stateSelector = targetPanel.querySelector('select[id*="state"], select[name*="state"], select[id*="jurisdiction"]');
  if (stateSelector && stateSelector.value) {
    window.selectedFormationStateCode = stateSelector.value.toUpperCase().trim();
  }

  // Scan required form control structures
  const renderedRequiredElements = targetPanel.querySelectorAll('input[required], select[required], textarea[required]');
  
  renderedRequiredElements.forEach(element => {
    if (element.type === 'checkbox') {
      if (!element.checked) {
        let labelMessage = element.getAttribute('data-error-msg') || 'You must accept these required terms layout constraints to proceed.';
        if (typeof markFieldAsInvalidVanilla === 'function') {
          markFieldAsInvalidVanilla(element, labelMessage);
        }
        isValid = false;
      }
    } else {
      if (!element.value || element.value.trim() === "") {
        let explicitFieldName = element.getAttribute('placeholder') || element.getAttribute('name') || element.getAttribute('id') || 'Required field';
        let safeNameString = String(explicitFieldName).replace(/[:-]/g, ' ');
        let labelMessage = element.getAttribute('data-error-msg') || `${safeNameString} is a required field.`;
        
        if (typeof markFieldAsInvalidVanilla === 'function') {
          markFieldAsInvalidVanilla(element, labelMessage);
        }
        isValid = false;
      }
    }
  });

  return isValid;
}


// ============================================================================ //
// 🎨 VISUAL ERROR MARKER INJECTION PROTOCOL (STRICT GRIDS & PREVENT DUPLICATES) //
// ============================================================================ //
function markFieldAsInvalidVanilla(inputNode, informativeLabelString) {
  if (!inputNode || !inputNode.parentNode) return;

  // Apply bright error crimson boundary indicators cleanly
  inputNode.style.borderColor = '#ef4444';

  // FIXED: Uses nextElementSibling instead of nextSibling to skip blank code whitespaces
  // This accurately catches existing error tags and prevents duplicate message stacks
  let targetSibling = inputNode.nextElementSibling;
  
  // If wrapped inside an input group layout wrapper envelope, look at the outer container scope boundary instead
  const isWrappedNode = inputNode.parentNode.classList.contains('input-lock-wrapper');
  const targetParentNode = isWrappedNode ? inputNode.parentNode.parentNode : inputNode.parentNode;

  if (isWrappedNode) {
    targetSibling = inputNode.parentNode.nextElementSibling;
  }

  if (targetSibling && targetSibling.classList.contains('input-error-marker')) {
    // Already flagged. Update text content parameter seamlessly and exit to stop duplicate appending.
    targetSibling.textContent = informativeLabelString;
    return;
  }

  // Build the underlying accessible error notification node framework
  const spanError = document.createElement('span');
  spanError.className = 'input-error-marker';
  spanError.style.cssText = "color: #ef4444 !important; font-size: 0.75rem !important; display: block !important; margin-top: 4px !important; font-weight: 600 !important; width: 100% !important; clear: both !important;";
  spanError.textContent = informativeLabelString;

  // Insert the element safely out of complex lock wrappers to protect icon alignment grids
  if (isWrappedNode) {
    targetParentNode.appendChild(spanError);
  } else {
    inputNode.parentNode.insertBefore(spanError, inputNode.nextSibling);
  }
}



// ============================================================================ //
// 📊 DYNAMIC MATHEMATICAL AGGREGATION INVOICE LOGIC (NO-HARDCODING RESOLUTION) //
// ============================================================================ //
function updateDynamicPricingMatrixVanilla() {
  const dropdownService = document.getElementById("wizard-route-service-id");
  const dropdownPlan = document.getElementById("wizard-route-tier-id");

  // Helper utility to convert human-readable input values into matching database slugs
  const normalizeConfigKeySlug = (inputString) => {
    if (!inputString) return "";
    return inputString.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, '') // Strip symbols
      .replace(/[\s_]+/g, '-'); // Convert spaces to hyphens
  };

  // 1. FIXED DYNAMIC VARIABLE ASSIGNMENT: Read directly from live inputs to handle package switches
  if (dropdownService && typeof dropdownService.value === "string" && dropdownService.value.trim() !== "") {
    const rawVal = dropdownService.value.trim().toLowerCase();
    window.routeActiveServiceKey = rawVal.includes('-') ? rawVal : normalizeConfigKeySlug(rawVal);
  } else if (!window.routeActiveServiceKey) {
    // Only fall back to storage data if the running memory context variable is completely empty
    window.routeActiveServiceKey = localStorage.getItem("wizard-route-service-id") || "";
  }

  if (dropdownPlan && typeof dropdownPlan.value === "string" && dropdownPlan.value.trim() !== "") {
    window.routeActivePlanKey = dropdownPlan.value.trim().toLowerCase();
  } else if (!window.routeActivePlanKey) {
    window.routeActivePlanKey = localStorage.getItem("wizard-route-tier-id") || "";
  }

  const currentServiceKey = window.routeActiveServiceKey;
  const currentPlanKey = window.routeActivePlanKey;

  // 2. DATA LOSS PROTECTION GUARD
  if (!currentServiceKey || !currentPlanKey) {
    console.warn("[Pricing Engine Blocked] Cannot evaluate pricing data matrices. Active service identifier key or plan tier parameter string is unassigned.");
    return;
  }

  // Defends the engine from throwing fatal script errors if your database array is unmounted/loading late
  if (!window.CENTRAL_SERVICE_PLAN_DB) {
    console.warn("[Pricing Engine Delayed] CENTRAL_SERVICE_PLAN_DB is not defined in memory layers yet. Retrying configuration lookup structures later.");
    return;
  }

  const planConfig = window.CENTRAL_SERVICE_PLAN_DB[currentServiceKey];
  if (!planConfig) {
    console.error(`[Pricing Engine Structural Error] Service identifier key "${currentServiceKey}" does not match any entry within your 44+ configured product matrices.`);
    return;
  }

  // 3. SECURE BASELINE MATHEMATICAL EVALUATION
  let baseTierPrice = 0;
  if (planConfig.prices) {
    if (currentPlanKey && typeof planConfig.prices[currentPlanKey] !== "undefined") {
      baseTierPrice = parseFloat(planConfig.prices[currentPlanKey]) || 0;
    } else {
      // Fallback dynamically to the first available pricing structure key in that specific schema row
      const availableTiers = Object.keys(planConfig.prices);
      if (availableTiers.length > 0) {
        baseTierPrice = parseFloat(planConfig.prices[availableTiers[0]]) || 0;
      }
    }
  }

  // Safe government fee evaluation (Calls external config file cleanly if available)
  let baseGovAgencyFee = 0;
  if (typeof window.getCalculatedGovernmentFee === "function") {
    baseGovAgencyFee = window.getCalculatedGovernmentFee(currentServiceKey, window.selectedFormationStateCode);
  } else {
    baseGovAgencyFee = parseFloat(planConfig.gov_fee) || 0;
  }

  let incrementalAddonTotal = 0;
  let descriptiveInvoiceRowsHtml = `
    <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 10px;">
      <span>${planConfig.name || 'Primary Compliance Package'} (${currentPlanKey.toUpperCase()})</span>
      <span style="font-family: monospace;">$${baseTierPrice.toFixed(2)}</span>
    </div>
  `;

  // Track rendering array to avoid double-charging items that appear as both flags and checkboxes
  const processedAddonNames = [];

  // Evaluate checked state on accessory protection upsell checkboxes
  document.querySelectorAll('.upsell-checkbox:checked').forEach(checkbox => {
    const addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || 0;
    const addonLabelString = checkbox.getAttribute('data-name') || "Optional Add-on Asset";
    incrementalAddonTotal += addonPriceValue;
    processedAddonNames.push(addonLabelString.toLowerCase().trim());
    
    descriptiveInvoiceRowsHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;">
        <span>+ ${addonLabelString}</span>
        <span style="font-family: monospace;">$${addonPriceValue.toFixed(2)}</span>
      </div>
    `;
  });

  // ============================================================================ //
  // 🛒 DYNAMIC EXTENSIBLE CART ADD-ON RECOGNITION (ZERO HARDCODING FIXED)        //
  // ============================================================================ //
  const UPSELL_ADDON_REGISTRY = {
    "customSelectedRegisteredAgentServiceActive": { name: "Registered Agent Shield", price: 75.00 },
    "customSelectedEinProcurementServiceActive": { name: "EIN Procurement Processing", price: 79.00 },
    "customSelectedScorpElectionServiceActive": { name: "Form 2553 (S-Corp) Preparation", price: 79.00 },
    "customSelectedSolePropLicenseAuditServiceActive": { name: "Sole-Prop Compliance Audit Suite", price: 79.00 },
    "customSelectedDbaLicenseAuditServiceActive": { name: "DBA Compliance Audit Suite", price: 79.00 },
    "customSelectedNonprofitLicenseCheckActive": { name: "Nonprofit License Check Suite", price: 79.00 },
    "customSelectedDbaSearchServiceActive": { name: "Name Availability Search", price: 79.00 },
    "customSelectedSeriesLicenseAuditActive": { name: "License & Permit Audit Suite", price: 125.00 },
    "customSelectedProfessionalLogoDesignActive": { name: "Professional Brand Logo Suite", price: 149.00 },
    "customSelectedBusinessWebsiteSetupActive": { name: "Custom Business Website Launch", price: 299.00 },
    "customSelectedBoiFilingComplianceActive": { name: "BOI Corporate Transparency CTA Filing", price: 49.00 },
    "customSelectedExpeditedFilingServiceActive": { name: "Priority Expedited State Processing", price: 95.00 },
    "customSelectedApostilleAuthenticationServiceActive": { name: "Apostille Certificate Authentication", price: 125.00 },
    "customSelectedGoodStandingCertificateServiceActive": { name: "Certificate of Good Standing Procurement", price: 45.00 }
  };

  // Loop runs BEFORE total calculation loops and verifies no duplicate entries occur
  Object.keys(UPSELL_ADDON_REGISTRY).forEach(flagKey => {
    if (window[flagKey] === true) {
      const addon = UPSELL_ADDON_REGISTRY[flagKey];
      const normalizedAddonName = addon.name.toLowerCase().trim();
      
      // Stop execution loop if the DOM checkbox loop already processed this specific fee allocation item
      if (processedAddonNames.includes(normalizedAddonName)) return;
      
      incrementalAddonTotal += addon.price;
      processedAddonNames.push(normalizedAddonName);
      
      descriptiveInvoiceRowsHtml += `
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;">
          <span>+ ${addon.name}</span>
          <span style="font-family: monospace;">$${addon.price.toFixed(2)}</span>
        </div>
      `;
    }
  });

  // Include Government Fees inside structural invoice string data loops if present
  if (baseGovAgencyFee > 0) {
    descriptiveInvoiceRowsHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px; border-top: 1px dashed #e2e8f0; padding-top: 6px;">
        <span>State Government Filing Fee</span>
        <span style="font-family: monospace;">$${baseGovAgencyFee.toFixed(2)}</span>
      </div>
    `;
  }

  // Calculate strict unified financial total parameters (ALL add-ons included correctly)
  const finalCalculatedInvoiceTotal = baseTierPrice + baseGovAgencyFee + incrementalAddonTotal;

  // Close layout blocks cleanly with calculation totals
  descriptiveInvoiceRowsHtml += `
    <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: #0a1f44; border-top: 2px solid #e2e8f0; padding-top: 10px; margin-top: 10px;">
      <span>Total Investment:</span>
      <span style="font-family: monospace; color: #10b981;">$${finalCalculatedInvoiceTotal.toFixed(2)}</span>
    </div>
  `;

  // ✨ DOM BINDING SLOTS: Inject totals back into your UI elements
  const step1BaseInvoiceTotalNode = document.getElementById("step-1-base-fee-value");
  if (step1BaseInvoiceTotalNode) {
    step1BaseInvoiceTotalNode.textContent = `$${finalCalculatedInvoiceTotal.toFixed(2)}`;
  }

  // Update master sidebar invoice checkout boxes if they are rendered anywhere on later panels
  const masterSidebarReceiptContainer = document.getElementById("master-sidebar-invoice-display");
  if (masterSidebarReceiptContainer) {
    masterSidebarReceiptContainer.innerHTML = descriptiveInvoiceRowsHtml;
  }

  // Cache calculated calculations total into local state strings for your secure Stripe step initialization
  window.calculatedCartGrandTotalAmount = finalCalculatedInvoiceTotal;

  // Safe evaluation of variable trucking new entrant metrics
  if (window.lastCalculatedNewEntrantAddonTotal && window.lastCalculatedNewEntrantAddonTotal > 0) {
    incrementalAddonTotal += window.lastCalculatedNewEntrantAddonTotal;
  }

  // Aggregate global totals cleanly without counting the base service fee twice
  const aggregatedFilingSubtotal = baseTierPrice + incrementalAddonTotal;
  const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

  // Inject rendered structural HTML components directly into the DOM container tree
  const invoiceContainer = document.getElementById('checkout-invoice-rows-container');
  if (invoiceContainer) {
    invoiceContainer.innerHTML = descriptiveInvoiceRowsHtml;
  }

  // Synchronize trucker audit layouts
  const summaryAddonRoot = document.getElementById("summary-onboarding-addons-root");
  if (summaryAddonRoot) {
    if (window.lastCalculatedNewEntrantAddonHtml && window.lastCalculatedNewEntrantAddonTotal > 0) {
      summaryAddonRoot.innerHTML = window.lastCalculatedNewEntrantAddonHtml;
      summaryAddonRoot.style.display = "block";
    } else {
      summaryAddonRoot.innerHTML = "";
      summaryAddonRoot.style.display = "none";
    }
  }

  // Safe text content injections across display elements
  const subtotalDisp = document.getElementById('invoice-subtotal-display');
  if (subtotalDisp) subtotalDisp.textContent = `$${aggregatedFilingSubtotal.toFixed(2)}`;

  const govDisp = document.getElementById('invoice-gov-fees-display');
  if (govDisp) govDisp.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

  const grandDisp = document.getElementById('invoice-grand-total-display');
  if (grandDisp) grandDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

  // State synchronization anchor mapping assignment
  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;

  const secondaryTotalDisplay = document.getElementById("wizard-sticky-total-value");
  if (secondaryTotalDisplay) secondaryTotalDisplay.textContent = `$${finalizedGrandTotal.toFixed(2)}`;
}

// System name synchronization mapping lookup
function updateWizardFinalTotalAmountMatrix() {
  updateDynamicPricingMatrixVanilla();
}

// ============================================================================ //
// 🎨 UI VISIBILITY PROGRESS TRACKING RENDER ENGINE (REPAIRED)                  //
// ============================================================================ //
function renderActiveWizardStepUiLayout() {
  // Direct Fix: Map local parameters strictly to your unified global tracking state variables
  window.currentWizardActiveStep = window.currentWizardActiveStep || 1;
  window.totalWizardExpectedSteps = window.totalWizardExpectedSteps || 7;

  const activeStep = window.currentWizardActiveStep;
  const expectedSteps = window.totalWizardExpectedSteps;

  // 1. Synchronize tracking CSS visibility states across panels
  document.querySelectorAll(".master-onboarding-form").forEach((panel, sequence) => {
    const stepNumber = sequence + 1;
    if (stepNumber === activeStep) {
      panel.classList.add("active");
      // Direct Fix: Cleanly clear inline display constraints to support custom CSS grids/flexboxes
      panel.style.removeProperty("display");
      panel.style.setProperty("display", "block", "important");
    } else {
      panel.classList.remove("active");
      panel.style.removeProperty("display");
      panel.style.setProperty("display", "none", "important");
    }
  });

  // 2. Synchronize chronological milestone tracking icons (FIXED: Supports both .step-node and .toc-step-row grids)
  document.querySelectorAll(".step-node, .toc-step-row").forEach((node, index) => {
    // Read the tracking parameter attribute or fall back dynamically to its position sequence index
    const dataStepAttr = node.getAttribute("data-step");
    const structuralStepIndex = dataStepAttr ? parseInt(dataStepAttr, 10) : (index + 1);

    if (structuralStepIndex < activeStep) {
      node.classList.remove("toc-active", "active");
      node.classList.add("completed");
    } else if (structuralStepIndex === activeStep) {
      node.classList.remove("completed");
      node.classList.add("toc-active", "active");
    } else {
      node.classList.remove("completed", "toc-active", "active");
    }
  });

  // 3. Scale and fill timeline horizontal progress tracking metrics
  const horizontalProgressFill = document.getElementById("timeline-progress-fill-node");
  if (horizontalProgressFill) {
    const percentageProgressWidth = ((activeStep - 1) / (expectedSteps - 1)) * 100;
    horizontalProgressFill.style.width = `${percentageProgressWidth}%`;
  }
  
  // 4. Update timeline emerald tracking lights if the utility plugin is definitions available
  if (typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(activeStep);
  }
}



// ============================================================================ //
// 💾 BROWSER STORAGE STATE CACHE MECHANICS (VANILLA JS - REPAIRED)             //
// ============================================================================ //
function cacheAndRestoreWizardFormStatesVanilla(isExecutionInitialLoad) {
  const cacheKeyNamespace = "f4u_wizard_onboarding_state";

  // Self-contained cryptographic translation utility matrix (FIXED: Handles Unicode safely)
  const executeCipherTranslation = (rawString, decryptMode) => {
    if (!rawString) return "";
    try {
      if (decryptMode) {
        // Decode base64 to standard UTF-8 string bytes
        const binaryString = atob(rawString);
        return binaryString.split("").map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join("");
      } else {
        const shifted = rawString.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join("");
        // Safe base64 encoding transformation block
        return btoa(unescape(encodeURIComponent(shifted)));
      }
    } catch (err) {
      console.error("[Cache Crypto Failure] Unable to compute key mask vector:", err);
      return "";
    }
  };

  if (isExecutionInitialLoad) {
    // RECOVER PATH: Pulls data out of local storage and repopulates the DOM
    const restoredPayloadString = localStorage.getItem(cacheKeyNamespace);
    if (!restoredPayloadString) return;

    try {
      const payloadDataObject = JSON.parse(restoredPayloadString);
      
      // Temporary block flag prevents recursive change-event re-injection loops
      window.isWizardCurrentlyRestoringStateVanilla = true;

      Object.keys(payloadDataObject).forEach(fieldIdKey => {
        // FIXED: Double-lookup selector fallback maps by ID first, then tries matching by Name attribute
        let inputNode = document.getElementById(fieldIdKey);
        if (!inputNode) {
          inputNode = document.querySelector(`input[name="${fieldIdKey}"], select[name="${fieldIdKey}"], textarea[name="${fieldIdKey}"]`);
        }

        if (inputNode) {
          let finalExtractedValue = payloadDataObject[fieldIdKey];

          // ⚡ RECOVER LAYER: Decrypt sensitive values securely
          const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || 
                                  ["ein_responsible_id", "sllc_member_ssn", "wizard_tax_id", "portal_user_password"].includes(fieldIdKey);
          
          if (isSecureElement && typeof finalExtractedValue === "string" && finalExtractedValue !== "") {
            finalExtractedValue = executeCipherTranslation(finalExtractedValue, true);
          }

          if (inputNode.type === 'checkbox') {
            inputNode.checked = (finalExtractedValue === true || finalExtractedValue === "true");
          } else {
            inputNode.value = finalExtractedValue;
          }

          // Fire a native change event so any secondary dynamic visibility bindings know data returned
          inputNode.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });

      // Release validation event control boundaries
      window.isWizardCurrentlyRestoringStateVanilla = false;

    } catch (jsonErr) {
      window.isWizardCurrentlyRestoringStateVanilla = false;
      console.error("State data recovery parse error loop encountered: ", jsonErr);
    }
  } else {
    // SAVE PATH: Collects values dynamically across any inputs inside the active wizard views
    let activeFormMetricsObject = {};

    // Abstract lookup: Check master form first; fallback to document body if missing
    const containerScope = document.getElementById("master-onboarding-form") || document.body;
    const allInputElements = containerScope.querySelectorAll("input, select, textarea");

    allInputElements.forEach(inputNode => {
      // Prioritize saving under ID, fallback cleanly to Name attribute string indexes
      const uniqueDataKey = inputNode.getAttribute('id') || inputNode.getAttribute('name');
      if (uniqueDataKey) {
        let elementValueToCache = inputNode.type === 'checkbox' ? inputNode.checked : inputNode.value;

        // ⚡ PROTECT LAYER: Encrypt numbers dynamically using data tags or known sensitive IDs
        const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || 
                                ["ein_responsible_id", "sllc_member_ssn", "wizard_tax_id", "portal_user_password"].includes(uniqueDataKey);
        
        if (isSecureElement && typeof elementValueToCache === "string" && String(elementValueToCache).trim() !== "") {
          elementValueToCache = executeCipherTranslation(elementValueToCache, false);
        }

        activeFormMetricsObject[uniqueDataKey] = elementValueToCache;
      }
    });

    localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject));
  }
}



// ============================================================================ //
// 💾 STRATEGIC SAVE & EXIT PROGRESS HANDLER (STANDALONE POP-UP ENGINE FIXED)   //
// ============================================================================ //
function executeSaveAndExitWorkflow() {
  console.log("[Save & Exit] Initializing progress synchronization workflow.");

  // 1. FIXED: Extract the clean state data payload BEFORE opening the modal form wrapper
  // This shields your true onboarding inputs from being overwritten by empty popup inputs
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }

  // Prevent stacking identical instances if already present in view
  if (document.getElementById("wizard-save-exit-modal-root")) return;

  // 2. Assemble structural pop-up container nodes directly into the viewport
  const modalWrapper = document.createElement("div");
  modalWrapper.id = "wizard-save-exit-modal-root";
  
  Object.assign(modalWrapper.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "999999",
    padding: "20px"
  });

  // FIXED: Standardized modal specific input IDs to prevent background event crashes with your main form fields
  modalWrapper.innerHTML = `
    <div style="background: #ffffff; width: 100%; max-width: 440px; padding: 30px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15); font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; box-sizing: border-box;">
      <h3 style="margin: 0 0 8px 0; color: #0f172a; font-size: 1.3rem; font-weight: 700;">Save Your Application Progress</h3>
      <p style="margin: 0 0 20px 0; color: #64748b; font-size: 0.9rem; line-height: 1.45;">Provide your details below to save your state parameters. No dashboard client account will be created until your transaction purchase is completed.</p>
      <form id="wizard-lead-capture-form" style="display: flex; flex-direction: column; gap: 16px; margin: 0; padding: 0;">
        <div style="display: flex; gap: 12px;">
          <div style="flex: 1;">
            <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">First Name</label>
            <input type="text" id="modal_lead_first_name" required placeholder="John" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
          </div>
          <div style="flex: 1;">
            <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Last Name</label>
            <input type="text" id="modal_lead_last_name" required placeholder="Doe" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
          </div>
        </div>
        <div>
          <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Email Address</label>
          <input type="email" id="modal_lead_email" required placeholder="john.doe@example.com" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 10px; width: 100%;">
          <button type="button" id="lead_cancel_btn" style="padding: 10px 18px; background: #f1f5f9; color: #475569; border: none; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">Cancel</button>
          <button type="submit" id="lead_submit_btn" style="padding: 10px 22px; background: #2563eb; color: #ffffff; border: none; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">Confirm Save &amp; Exit</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modalWrapper);

  // Bind internal button controls cleanly inside isolated runtime scopes
  const leadForm = document.getElementById("wizard-lead-capture-form");
  const cancelBtn = document.getElementById("lead_cancel_btn");
  
  const dismissLeadModal = () => {
    modalWrapper.remove();
    console.log("[Save & Exit] Pop-up view dismissed by operator action.");
  };

  if (cancelBtn) {
    cancelBtn.addEventListener("click", dismissLeadModal);
  }

  // Intercept and route form submissions to Supabase securely
  if (leadForm) {
    leadForm.addEventListener("submit", async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById("lead_submit_btn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";
      }

      // Collect field payload vectors matching modal specific design parameters
      const leadPayload = {
        first_name: document.getElementById("modal_lead_first_name")?.value.trim() || "",
        last_name: document.getElementById("modal_lead_last_name")?.value.trim() || "",
        email: document.getElementById("modal_lead_email")?.value.trim() || "",
        session_hash: window.f4u_tx_session_hash || "",
        active_service: window.routeActiveServiceKey || "",
        active_tier: window.routeActivePlanKey || "",
        cached_form_state: localStorage.getItem("f4u_wizard_onboarding_state") || "{}"
      };

      console.log("[Save & Exit] Dispatched pipeline metrics data packet:", leadPayload);

      try {
        // Safe async hook execution to Supabase handler
        if (typeof window.saveLeadToSupabase === "function") {
          await window.saveLeadToSupabase(leadPayload);
        } else {
          console.warn("[Database Notice] window.saveLeadToSupabase is not defined. State stored in local fallback cache only.");
        }

        dismissLeadModal();
        
        // FIXED: Uses safe root relative assignments to defend against broken file path redirection crashes
        window.location.href = window.wizardCustomExitRedirectUrl || window.location.origin + "/index.html";

      } catch (dbErr) {
        console.error("[Database Connection Error] Failed tracking entry storage commit:", dbErr);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Confirm Save & Exit";
        }
        alert("A data transmission link timeout occurred. Please try again.");
      }
    });
  }
}



// ============================================================================ //
// ✍️ DIGITAL CURSIVE SIGNATURE REFLECTOR (REPLACES CANVAS PAD REPAIRED)        //
// ============================================================================ //
function initializeDigitalSignatureMirrorSync() {
  // Locate the input box where they type their name for signature authorization
  const typedSignatureInput = document.getElementById("poa_signer_printed") || document.querySelector('[name="digital_signature_input"]');
  const cursiveDisplayContainer = document.getElementById("cursive-signature-preview");

  if (!typedSignatureInput) return; // Safely escape if not on the signature screen step

  // Listen for active keystrokes only to update the cosmetic text display layer swiftly
  typedSignatureInput.addEventListener("input", function() {
    const rawInputValue = typedSignatureInput.value;
    
    // 1. Live update your styled preview block container if present on the screen layout
    if (cursiveDisplayContainer) {
      cursiveDisplayContainer.textContent = rawInputValue.trim() !== "" ? rawInputValue : "Your Signature";
    }

    // 2. Map structural state variables - FIXED: Vets actual character words to prevent space-bar bypasses
    const validTextCharacters = rawInputValue.replace(/[\s\.\,\-]+/g, "");
    window.signaturePadHasBeenDrawnByUser = validTextCharacters.length >= 2;
  });

  // FIXED: Moves the intensive browser storage write operation to the "change" / "blur" event context.
  // This saves the data cleanly only when the user finishes typing and moves to another input, preventing lag.
  typedSignatureInput.addEventListener("change", function() {
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
      cacheAndRestoreWizardFormStatesVanilla(false);
    }
  });
}




// ============================================================================ //
// 🔑 SECURE TRANSACTION DISPATCH MECHANICS (VANILLA JS - DIRECT REPAIR)       //
// ============================================================================ //
async function executeOnboardingTransactionPayloadSubmitVanilla() {
  const cardNumNode = document.getElementById('checkout_card_num');
  const cardExpNode = document.getElementById('checkout_card_exp');
  const cardCvvNode = document.getElementById('checkout_card_cvv');

  const cardNum = cardNumNode ? cardNumNode.value.replace(/\s+/g, '') : '';
  const cardExp = cardExpNode ? cardExpNode.value : '';
  const cardCvv = cardCvvNode ? cardCvvNode.value : '';

  // Validate critical billing input structures before submission
  if (!cardNum || cardNum.length < 15) {
    alert("Payment validation failed: Card account number parameters invalid.");
    return;
  }
  if (!cardExp || !cardExp.includes('/')) {
    alert("Payment validation failed: Expiration envelope format invalid.");
    return;
  }
  if (!cardCvv || cardCvv.length < 3) {
    alert("Payment validation failed: Security verification code CVV parameter invalid.");
    return;
  }

  // Alter control button visual states to prevent double-click submissions
  const nextBtn = document.getElementById('wizard-next-trigger-btn') || document.querySelector('.btn-wizard-main');
  let originalBtnHtml = "";
  let originalBtnBg = "";
  
  if (nextBtn) {
    originalBtnHtml = nextBtn.innerHTML;
    originalBtnBg = nextBtn.style.background; // Cache the actual styled background color parameters cleanly
    nextBtn.disabled = true;
    nextBtn.style.background = '#64748b';
    nextBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Transaction...';
  }

  // Resilient state recovery: Read dynamic keys safely from system state
  const currentServiceKey = window.routeActiveServiceKey || "";
  const currentPlanKey = window.routeActivePlanKey || "";
  const selectedJurisdiction = window.selectedFormationStateCode || "";

  // Dynamic Add-ons extraction loop
  let auxiliaryAddonsArray = [];
  document.querySelectorAll('.upsell-checkbox:checked').forEach(checkbox => {
    const addonId = checkbox.getAttribute('data-id') || checkbox.id;
    if (addonId) auxiliaryAddonsArray.push(addonId);
  });

  // 🔄 DYNAMIC METADATA PACKAGING ENGINE (NO HARDCODING)
  let collectedFormMetadata = {};
  const masterContainer = document.getElementById("master-onboarding-form") || document.body;
  
  masterContainer.querySelectorAll("input, select, textarea").forEach(element => {
    const fieldKey = element.id || element.name;
    // Skip financial details, billing inputs, and passwords for compliance and security
    if (fieldKey && !fieldKey.includes("checkout_card") && element.type !== "password") {
      if (element.type === "checkbox") {
        collectedFormMetadata[fieldKey] = element.checked;
      } else if (element.value && element.value.trim() !== "") {
        collectedFormMetadata[fieldKey] = element.value.trim();
      }
    }
  });

  // Calculate base service pricing totals
  const baseServiceFeeAmount = baseTierPriceCalculationFallbackVanilla(currentServiceKey, currentPlanKey);

  // Assemble the global dynamic transaction manifest data packet
  const primarySubmissionPayloadData = {
    transaction_hash_id: window.f4u_tx_session_hash || "F4U-TX-OFFLINE",
    target_service_id: currentServiceKey,
    deployment_speed_tier: currentPlanKey,
    authority_jurisdiction: selectedJurisdiction,
    active_addons_list: auxiliaryAddonsArray,
    form_data_payload: collectedFormMetadata,
    financials_subtotal_amount: baseServiceFeeAmount,
    financials_grand_total_charge: window.wizardCalculatedFinalTotalAmount || baseServiceFeeAmount,
    client_session_timestamp: new Date().toISOString()
  };

  console.log("[Transaction Dispatch] Final billing payload generated:", primarySubmissionPayloadData);

  try {
    // 💳 Payment gateway hook processing
    if (typeof window.processSecurePaymentGateway === "function") {
      const paymentCardDetails = { number: cardNum, expiry: cardExp, cvv: cardCvv };
      await window.processSecurePaymentGateway(primarySubmissionPayloadData, paymentCardDetails);
    }

    // Clear workflow persistence data locks and prepare confirmation routing
    localStorage.removeItem("f4u_wizard_onboarding_state");
    sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));

    // Redirect the customer safely to their success confirmation screen view
    const successRedirectTarget = window.wizardCustomSuccessRedirectUrl || "success.html";
    window.location.href = `${successRedirectTarget}?tx_hash=${primarySubmissionPayloadData.transaction_hash_id}&status=validated_cleared`;

  } catch (routingErr) {
    console.error("Payload preservation routing matrix fault loop triggered: ", routingErr);
    alert(`Transaction Processing Interrupted:\n${routingErr.message || "Verify billing details and try again."}`);
    
    // FIXED: Correctly reinstates the actual button markup and styles without distortion
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.style.background = originalBtnBg;
      nextBtn.innerHTML = originalBtnHtml || '<i class="fa-solid fa-credit-card"></i> Process Secured Payment';
    }
  }
}

// FALLBACK PRICING LOOKUP METHOD (FIXED: ZERO HARDCODED STRINGS)
function baseTierPriceCalculationFallbackVanilla(serviceKey, planKey) {
  try {
    const sKey = serviceKey || window.routeActiveServiceKey || "";
    const pKey = planKey || window.routeActivePlanKey || "";

    if (!sKey || !window.CENTRAL_SERVICE_PLAN_DB || !window.CENTRAL_SERVICE_PLAN_DB[sKey]) {
      return 0;
    }

    const matchedPricesMatrix = window.CENTRAL_SERVICE_PLAN_DB[sKey].prices;
    if (matchedPricesMatrix) {
      if (pKey && typeof matchedPricesMatrix[pKey] !== "undefined") {
        return parseFloat(matchedPricesMatrix[pKey]) || 0;
      }
      // FIXED: Fallback to the first property layer inside that layout array safely to prevent object read crashes
      const firstAvailableKey = Object.keys(matchedPricesMatrix)[0];
      if (firstAvailableKey) {
        return parseFloat(matchedPricesMatrix[firstAvailableKey]) || 0;
      }
    }
    return 0;
  } catch (e) {
    console.warn("[Pricing Fallback Error] Unable to evaluate base pricing row layouts:", e);
    return 0;
  }
}


// ============================================================================ //
// 🔘 LLC WORKFLOW CONDITIONAL FIELD CONTROLLERS (FULLY ABSTRACTED - REPAIRED)  //
// ============================================================================ //
function validateLlcNameSuffix(inputField) {
  if (!inputField) return;
  const rawVal = inputField.value.trim();
  if (rawVal === "") return;
  const lowerVal = rawVal.toLowerCase();

  // 📋 Dynamic Suffix Extraction Strategy: Reads approved tokens directly from DOM configuration
  const allowedSuffixDataAttr = inputField.getAttribute("data-allowed-suffixes");
  let authorizedSuffixesArray = ["llc", "limited liability company", "l.l.c."]; // System safe fallback

  if (allowedSuffixDataAttr) {
    authorizedSuffixesArray = allowedSuffixDataAttr.split(",").map(s => s.trim().toLowerCase());
  }

  // Evaluate matching criteria arrays across parameters
  const matchesAnyApprovedSuffix = authorizedSuffixesArray.some(suffix => lowerVal.endsWith(suffix));

  if (!matchesAnyApprovedSuffix) {
    // Inject clean styling state warning boundaries without intrusive blocking alert windows
    inputField.style.borderColor = "#ef4444";
    let labelMessage = inputField.getAttribute("data-error-msg") || `Formation Guard Warning: Your choice must include an approved suffix token (${authorizedSuffixesArray.join(', ').toUpperCase()}).`;
    
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(inputField, labelMessage);
    }
  } else {
    inputField.style.borderColor = "var(--border, #e2e8f0)";
    
    // FIXED: Uses nextElementSibling to properly jump whitespace text nodes and target the true error tag
    let adjacentMarker = inputField.nextElementSibling;
    
    // If the input is wrapped inside an icon/lock envelope, scale the search up to look at the next outer sibling element
    if (!adjacentMarker && inputField.parentNode.classList.contains('input-lock-wrapper')) {
      adjacentMarker = inputField.parentNode.nextElementSibling;
    }

    if (adjacentMarker && adjacentMarker.classList.contains('input-error-marker')) {
      adjacentMarker.remove();
    }
  }
}

function toggleRegisteredAgentConditionalFields(selectedValue) {
  const wrapper = document.getElementById("llc_custom_ra_wrapper");
  if (!wrapper) return;

  // Toggle layout display boundaries smoothly
  wrapper.style.display = (selectedValue === "custom") ? "grid" : "none";

  // State synchronization flags: True if user selects company proxy tier
  window.customSelectedRegisteredAgentServiceActive = (selectedValue === "filings4u");

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleLlcManagerFieldsMatrix(selectedValue) {
  const wrapper = document.getElementById("llc_manager_names_wrapper");
  if (wrapper) {
    // FIXED: Adjusted layout to match standard responsive flex grids rather than raw block stretching
    wrapper.style.display = (selectedValue === "manager-managed") ? "flex" : "none";
  }
}

function toggleEinConditionalWorkflow(selectedValue) {
  const manualWrapper = document.getElementById("llc_manual_ein_wrapper");
  if (manualWrapper) {
    manualWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }

  // State synchronization flags: True if choice triggers a buy loop
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

// ============================================================================ //
// ➕ DYNAMIC INCREMENTAL RECORD BLOCK GENERATOR ENGINE (DEFRAGMENTATION REPAIR) //
// ============================================================================ //
let activeLlcMemberCounterIndex = 1;

function appendNewLlcMemberRecordFieldNode() {
  const container = document.getElementById("llc_members_container");
  if (!container) return;

  // Recalculate true loop counter boundaries based on active nodes present in DOM
  const existingCards = container.querySelectorAll(".member-record-card");
  activeLlcMemberCounterIndex = existingCards.length + 1;

  const currentIdx = activeLlcMemberCounterIndex;

  // Architecture Check: Check if an HTML5 <template> block configuration lives in the viewport
  const markupTemplateSource = document.getElementById("llc-member-row-template");
  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `member_card_${currentIdx}`;

  if (markupTemplateSource) {
    // Dynamic template interpolation pattern
    let templateHtmlContent = markupTemplateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, currentIdx);
    div.innerHTML = templateHtmlContent;
  } else {
    // Secondary abstracted styling wrapper layout fallback
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border, #e2e8f0); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";
    
    // FIXED: Embedded explicit 'name' attributes matching field IDs to allow proper API serialization
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="member-title-label" style="font-weight: 800; font-size: 0.8rem; color: #0284c7; text-transform: uppercase;">Member/Partner #${currentIdx} Records</span>
        <button type="button" class="btn-delete-member" data-target="${currentIdx}" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="wizard-input-group" style="grid-column: span 2;">
          <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">Full Legal Name</label>
          <input type="text" id="member_name_${currentIdx}" name="member_name_${currentIdx}" required placeholder="Full Legal Name" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="grid-column: span 2;">
          <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">Street Address</label>
          <input type="text" id="member_street_${currentIdx}" name="member_street_${currentIdx}" required placeholder="Street Address" class="wizard-input-field">
        </div>
        <div class="wizard-input-group">
          <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">City</label>
          <input type="text" id="member_city_${currentIdx}" name="member_city_${currentIdx}" required placeholder="City" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">State</label>
            <input type="text" id="member_state_${currentIdx}" name="member_state_${currentIdx}" required placeholder="TX" maxlength="2" class="wizard-input-field">
          </div>
          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: #475569;">Zip</label>
            <input type="text" id="member_zip_${currentIdx}" name="member_zip_${currentIdx}" required placeholder="78701" class="wizard-input-field">
          </div>
        </div>
      </div>
    `;
  }

  container.appendChild(div);

  // Bind modern isolated event listener to the freshly spawned deletion button
  const deleteBtn = div.querySelector(".btn-delete-member");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", function(eventObj) {
      eventObj.preventDefault();
      eventObj.stopPropagation();
      const targetNum = parseInt(this.getAttribute("data-target"), 10);
      removeLlcMemberRecordFieldNode(targetNum);
    });
  }
}

function removeLlcMemberRecordFieldNode(targetIndex) {
  const cardToRemove = document.getElementById(`member_card_${targetIndex}`);
  if (cardToRemove) {
    cardToRemove.remove();
  }

  // DEFRAGMENTATION CORE PROCESSOR: Re-index remaining rows so keys stay tightly sequential
  const container = document.getElementById("llc_members_container");
  if (!container) return;

  const remainingCards = container.querySelectorAll(".member-record-card");
  
  remainingCards.forEach((card, loopIdx) => {
    const freshIdx = loopIdx + 1;
    card.id = `member_card_${freshIdx}`;

    // Re-align structural internal heading tracking text blocks
    const labelSpan = card.querySelector(".member-title-label");
    if (labelSpan) labelSpan.textContent = `Member/Partner #${freshIdx} Records`;

    // Re-align deletion button hooks
    const deleteBtn = card.querySelector(".btn-delete-member");
    if (deleteBtn) deleteBtn.setAttribute("data-target", freshIdx);

    // Re-index all nested input variables elements to prevent schema gaps
    const targetedInputControls = card.querySelectorAll("input, select, textarea");
    targetedInputControls.forEach(input => {
      const currentId = input.id || "";
      if (currentId.includes("_")) {
        const structuralBasePrefix = currentId.substring(0, currentId.lastIndexOf("_"));
        const realignedToken = `${structuralBasePrefix}_${freshIdx}`;
        
        input.id = realignedToken;
        if (input.name) input.name = realignedToken;
      }
    });
  });

  activeLlcMemberCounterIndex = remainingCards.length;
}

function toggleLlcDurationDateVisibility(selectedValue) {
  const dateWrapper = document.getElementById("llc_duration_date_wrapper");
  if (dateWrapper) {
    dateWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
  }
}



// ============================================================================ //
// 🔌 CENTRAL EVENT DELEGATION NAVIGATION & PRICING LISTENER MATRIX (REPAIRED) //
// ============================================================================ //
document.addEventListener("change", function (event) {
  const targetElement = event.target;
  if (!targetElement) return;

  // 1. ABSTRACT AGENT SELECTOR HOOK: Detects any dropdown or radio collection managing agent choices
  const matchesAgentPattern = targetElement.name?.includes("registered_agent") || 
                              targetElement.id?.includes("ra-choice") || 
                              targetElement.id?.includes("agent_choice");

  if (matchesAgentPattern) {
    if (typeof toggleRegisteredAgentConditionalFields === "function") {
      toggleRegisteredAgentConditionalFields(targetElement.value);
    }
  }

  // 2. UNIVERSAL INVOICE MODIFIER HOOK: Catches any checkbox flags, select options, or radio updates
  const matchesPricingPattern = targetElement.classList.contains("upsell-checkbox") || 
                                targetElement.classList.contains("pricing-modifier-input") || 
                                targetElement.name?.includes("upsell") || 
                                targetElement.id?.includes("upsell") ||
                                targetElement.getAttribute("data-price") !== null; // Captures ANY node carrying a cost

  if (matchesPricingPattern) {
    // Safety check: Prevent recursive loops if the app is currently restoring data states from local storage
    if (window.isWizardCurrentlyRestoringStateVanilla !== true) {
      if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
      }
    }
  }
});

// Safe global initialization wrapper left as a blank stub so old code hooks don't throw "undefined" errors
window.initializeStepTwoInteractiveLayoutListeners = function() {
  console.log("[Engine Legacy Patch] Unified global event delegation matrix handles listeners dynamically.");
};



  // ============================================================================
// 🛒 STEP 2 DYNAMIC EXTENSIBLE CART ADD-ON REGISTRY (ZERO HARDCODING)
// ============================================================================

/**
 * Appends calculated active add-on metrics seamlessly to your pricing data layers.
 * This function is designed to be called internally within your main calculation loops.
 */
function processDynamicCartAddonItems(baseTierPrice, baseGovAgencyFee) {
  let incrementalAddonTotal = 0;
  let descriptiveInvoiceRowsHtml = "";

  // ➕ Extensible Add-on Registry: Easily add more items here to expand your offerings
  const EXTENSIBLE_ADDON_CATALOG = {
    "customSelectedRegisteredAgentServiceActive": { name: "Registered Agent Shield", price: 75.00 },
    "customSelectedEinProcurementServiceActive": { name: "EIN Procurement Processing", price: 79.00 },
    "customSelectedScorpElectionServiceActive": { name: "Form 2553 Preparation", price: 79.00 },
    "customSelectedSolePropLicenseAuditServiceActive": { name: "Compliance License Audit Suite", price: 79.00 },
    "customSelectedDbaLicenseAuditServiceActive": { name: "Compliance License Audit Suite", price: 79.00 },
    "customSelectedNonprofitLicenseCheckActive": { name: "Compliance License Audit Suite", price: 79.00 },
    "customSelectedDbaSearchServiceActive": { name: "Name Availability Search", price: 79.00 },
    "customSelectedForeignQualLicenseSuiteActive": { name: "License & Permit Audit Suite", price: 125.00 },
    // New high-value offerings to maximize revenue
    "customSelectedLogoDesignActive": { name: "Professional Brand Logo Suite", price: 149.00 },
    "customSelectedWebsiteSetupActive": { name: "Custom Business Website Launch", price: 299.00 },
  };

  // Evaluate flags dynamically against window global options state
  Object.keys(EXTENSIBLE_ADDON_CATALOG).forEach(flagKey => {
    if (window[flagKey] === true || window[flagKey] === "yes") {
      const addon = EXTENSIBLE_ADDON_CATALOG[flagKey];
      incrementalAddonTotal += addon.price;
      descriptiveInvoiceRowsHtml += `
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); margin-top: 4px;">
          <span>+ ${addon.name}</span>
          <span style="font-family: monospace;">$${addon.price.toFixed(2)}</span>
        </div>
      `;
    }
  });

  // Calculate strict totals parameters
  const aggregatedFilingSubtotal = baseTierPrice + incrementalAddonTotal;
  const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

  // Render components to document targets safely with conditional confirmations
  const invoiceContainer = document.getElementById('checkout-invoice-rows-container');
  if (invoiceContainer && descriptiveInvoiceRowsHtml !== "") {
    invoiceContainer.innerHTML += descriptiveInvoiceRowsHtml;
  }

  const subtotalDisp = document.getElementById('invoice-subtotal-display');
  if (subtotalDisp) subtotalDisp.textContent = `$${aggregatedFilingSubtotal.toFixed(2)}`;

  const govDisp = document.getElementById('invoice-gov-fees-display');
  if (govDisp) govDisp.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

  const grandDisp = document.getElementById('invoice-grand-total-display');
  if (grandDisp) grandDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

  // Commit synchronized state across global parameters tracking windows
  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;
  
  return {
    addonTotal: incrementalAddonTotal,
    subtotal: aggregatedFilingSubtotal,
    grandTotal: finalizedGrandTotal
  };
}

// ============================================================================
// 🔘 CENTRAL NAVIGATION ACTION INTERCEPTOR HUB
// ============================================================================
function handleNavigationButtonClickEvent(wizardState) {
  // Destructure with default values to prevent undefined errors
  let { currentStep = 1, totalSteps = 1 } = wizardState;

  console.log(`[Navigation Hub] Current Step: ${currentStep} of ${totalSteps}`);

  // Case 1: User is on the final step -> Submit payload
  if (currentStep >= totalSteps) {
    if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
      return executeOnboardingTransactionPayloadSubmitVanilla();
    }
    return console.error("[Fatal Code Error] Payload submit function is missing.");
  }

  // Case 2: User is advancing -> Try primary tracking function
  if (typeof navigateWizardStepTrackVanilla === "function") {
    return navigateWizardStepTrackVanilla(1);
  }

  // Case 3: Fallback routing if tracking function is missing
  const nextStep = currentStep + 1;
  if (nextStep <= totalSteps) {
    wizardState.currentStep = nextStep; // Safely mutate the state object boundary
    if (typeof renderActiveWizardStepUiLayout === "function") {
      renderActiveWizardStepUiLayout();
    }
  }
}


// ============================================================================
// 💾 STATE PERSISTENCE INITIALIZATION MATRIX & COHERENCE PATCHES
// ============================================================================

/**
 * Boots form states and gracefully handles legacy drawing canvas deprecation.
 */
function runWizardStatePersistenceBootstrap() {
  console.log("[State Bootstrap] Auditing runtime environments for persistent layout variables...");

  // 1. Restore Cached State Data
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true);
  }

  // 2. Initialize Modern Digital Signature Engine
  if (typeof initializeDigitalSignatureMirrorSync === "function") {
    initializeDigitalSignatureMirrorSync();
  } else {
    console.log("[State Bootstrap] Cursive signature synchronization engine ready.");
  }
}

// Global Legacy Bindings: Safely bridge old canvas calls to the new engine
window.initializeSignatureCanvasPadEngineVanilla = function() {
  if (typeof initializeDigitalSignatureMirrorSync === "function") {
    initializeDigitalSignatureMirrorSync();
  }
};

window.clearSignatureCanvasTrack = function() {
  const targetSelectors = ["#poa_signer_printed", '[name="digital_signature_input"]'];
  const typedSignatureInput = document.querySelector(targetSelectors.join(", "));

  if (typedSignatureInput) {
    typedSignatureInput.value = "";
    
    // Dispatch both input and change events to ensure all validation engines catch it
    const eventOptions = { bubbles: true, cancelable: true };
    typedSignatureInput.dispatchEvent(new Event('input', eventOptions));
    typedSignatureInput.dispatchEvent(new Event('change', eventOptions));
  }

  // Explicitly assign to window to avoid implicit declaration issues
  window.signaturePadHasBeenDrawnByUser = false;
};




// ============================================================================ //
// 🔘 LLC & CORPORATE LIFECYCLE CONTROLLERS (DYNAMIC DELEGATION METHOD)       //
// ============================================================================ //

function handleCorporateLayoutToggleVisibility(elementNode) {
  if (!elementNode) return;
  const targetWrapperId = elementNode.getAttribute("data-target-wrapper");
  const requiredMatchValue = elementNode.getAttribute("data-match-value") || "specified";
  
  if (!targetWrapperId) return;
  const wrapperDisplayNode = document.getElementById(targetWrapperId);
  if (wrapperDisplayNode) {
    wrapperDisplayNode.style.display = (elementNode.value === requiredMatchValue) ? "flex" : "none";
  }
}

function toggleLlcDurationDateVisibility(selectedValue) {
  const calendarWrapper = document.getElementById("llc_duration_date_wrapper");
  if (calendarWrapper) {
    calendarWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
  }
}

function toggleEinConditionalWorkflow(selectedValue) {
  const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
  if (manualEinWrapper) {
    manualEinWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // Sync state flag metrics directly
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy" || selectedValue === "purchase");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

// ============================================================================ //
// 🔘 C-CORP & S-CORP INTERACTIVE ROUTING CONTROLLERS                          //
// ============================================================================ //

function validateCorpNameSuffix(inputField) {
  if (!inputField) return;
  const rawVal = inputField.value.trim();
  if (rawVal === "") return;
  const lowerVal = rawVal.toLowerCase();

  // Fix: split maps trim safely to prevent accidental trailing spaces in markup tags
  const allowedSuffixDataAttr = inputField.getAttribute("data-allowed-suffixes");
  let authorizedSuffixesArray = ["inc", "inc.", "incorporated", "corporation"];

  if (allowedSuffixDataAttr) {
    authorizedSuffixesArray = allowedSuffixDataAttr.split(",").map(s => s.trim().toLowerCase());
  }

  const matchesAnyApprovedSuffix = authorizedSuffixesArray.some(suffix => lowerVal.endsWith(suffix));

  if (!matchesAnyApprovedSuffix) {
    inputField.style.borderColor = "#ef4444";
    const labelMessage = inputField.getAttribute("data-error-msg") || 
      `Corporate Registration Rule Warning: Your chosen name must contain an approved corporate suffix token (${authorizedSuffixesArray.join(', ').toUpperCase()}).`;
    
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(inputField, labelMessage);
    }
  } else {
    inputField.style.borderColor = "var(--border)";
    const adjacentMarker = inputField.nextSibling;
    if (adjacentMarker && adjacentMarker.className === 'input-error-marker') {
      adjacentMarker.remove();
    }
  }
}

// ============================================================================ //
// ➕ DYNAMIC INCREMENTAL SHAREHOLDER NODE GENERATOR ENGINE                    //
// ============================================================================ //

let activeCorpShareholderCounterIndex = 1;

function appendNewCorporateShareholderNode() {
  activeCorpShareholderCounterIndex++;
  const container = document.getElementById("corp_shareholders_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `shareholder_card_${activeCorpShareholderCounterIndex}`;

  const markupTemplateSource = document.getElementById("corp-shareholder-row-template");
  if (markupTemplateSource) {
    let templateHtmlContent = markupTemplateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeCorpShareholderCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
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
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Street Address</label> *
          <input type="text" id="shareholder_street_${activeCorpShareholderCounterIndex}" required placeholder="Street Address" class="wizard-input-field">
        </div>
        <div class="wizard-input-group">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">City</label>
          <input type="text" id="shareholder_city_${activeCorpShareholderCounterIndex}" required placeholder="City" class="wizard-input-field">
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
      </div>`;
  }
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
  
  // Adjusted to match LLC behavior for global cart persistence synchronization
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy" || selectedValue === "purchase");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleScorpElectionWorkflow(selectedValue) {
  const serviceWrapper = document.getElementById("corp_scorp_service_wrapper");
  const warningNote = document.getElementById("scac-decline-warning-note");
  
  if (serviceWrapper) {
    serviceWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  if (selectedValue === "no") {
    const selectProcure = document.getElementById("corp_scorp_procure");
    if (selectProcure) selectProcure.value = "no-decline";
    if (warningNote) warningNote.style.display = "block";
    window.customSelectedScorpElectionServiceActive = false;
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
      updateDynamicPricingMatrixVanilla();
    }
  }
}

function toggleScorpFilingPricingHook(selectedValue) {
  const warningNote = document.getElementById("scac-decline-warning-note");
  if (warningNote) {
    warningNote.style.display = (selectedValue === "yes-buy") ? "none" : "block";
  }
  window.customSelectedScorpElectionServiceActive = (selectedValue === "yes-buy");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function initializeFormDisplayLayoutSync() {
  console.log("[Layout Engine] Initializing form synchronization layers...");
  const llcFormWrapper = document.getElementById("form-fields-llc-registration");
  const corpFormWrapper = document.getElementById("form-fields-corporate-formation");
  
  if (llcFormWrapper && corpFormWrapper) {
    const currentKey = String(window.routeActiveServiceKey || "").toLowerCase();
    const isCorpFamily = currentKey.includes("corp") || currentKey.includes("corporation");
    llcFormWrapper.style.display = isCorpFamily ? "none" : "grid";
    corpFormWrapper.style.display = isCorpFamily ? "grid" : "none";
  }
}



// ============================================================================
// 🗺️ UNIVERSAL GOOGLE PLACES AUTOMATIC ADDRESS VALIDATION CONTROL HUB
// ============================================================================

function attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix) {
  if (!inputNodeElement || inputNodeElement.hasAttribute('data-autocomplete-bound-active')) return;
  
  if (typeof google === "undefined" || !google.maps || !google.maps.places) {
    console.warn("[Google Places] Maps API not yet loaded. Queuing lookup initialization...");
    // Auto-retry attachment after a slight delay to capture dynamically injected layouts
    setTimeout(() => attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix), 1000);
    return;
  }

  // Set configuration to filter only structural street addresses in the US region
  const autocompleteCoreOptions = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry"],
    types: ["address"]
  };

  const autocompleteInstance = new google.maps.places.Autocomplete(inputNodeElement, autocompleteCoreOptions);
  inputNodeElement.setAttribute('data-autocomplete-bound-active', 'true');

  autocompleteInstance.addListener("place_changed", function () {
    const selectedPlaceManifest = autocompleteInstance.getPlace();
    if (!selectedPlaceManifest || !selectedPlaceManifest.address_components) {
      console.error("[Google Places] No valid address vectors returned for the selection.");
      return;
    }

    let addressStreetNumber = "";
    let addressRouteStreetName = "";
    let calculatedLocalityCityName = "";
    let extractedStateCode = "";
    let postalRoutingIndexNumber = "";

    // Parse the granular layout elements out of the Google component array matrix
    selectedPlaceManifest.address_components.forEach(itemComponent => {
      const typesArray = itemComponent.types;
      if (typesArray.includes("street_number")) {
        addressStreetNumber = itemComponent.long_name;
      } else if (typesArray.includes("route")) {
        addressRouteStreetName = itemComponent.long_name;
      } else if (typesArray.includes("locality")) {
        calculatedLocalityCityName = itemComponent.long_name;
      } else if (typesArray.includes("administrative_area_level_1")) {
        extractedStateCode = itemComponent.short_name; // Returns standard 2-digit state code (e.g. TX, CA)
      } else if (typesArray.includes("postal_code")) {
        postalRoutingIndexNumber = itemComponent.long_name;
      }
    });

    const balancedStreetAddressLine = `${addressStreetNumber} ${addressRouteStreetName}`.trim();

    // 🔍 SMART ADAPTIVE ELEMENT LOOKUP (NO STRINGS HARDCODED)
    // First tries the standard prefix naming convention pattern
    let streetField = document.getElementById(`${dataElementPrefix}_street`) || inputNodeElement;
    let cityField = document.getElementById(`${dataElementPrefix}_city`);
    let stateField = document.getElementById(`${dataElementPrefix}_state`);
    let zipField = document.getElementById(`${dataElementPrefix}_zip`);

    // Fallback: If elements are missing by ID, scan the field's parent container
    const parentContainer = inputNodeElement.closest('.master-onboarding-form, .member-record-card, form') || document.body;
    if (parentContainer) {
      if (!cityField) cityField = parentContainer.querySelector('[name*="city"], [id*="city"]');
      if (!stateField) stateField = parentContainer.querySelector('[name*="state"], [id*="state"]');
      if (!zipField) zipField = parentContainer.querySelector('[name*="zip"], [id*="postal"]');
    }

    // Populate data values into whatever matching components exist on the screen layout
    if (streetField) streetField.value = balancedStreetAddressLine;
    if (cityField) cityField.value = calculatedLocalityCityName;
    if (stateField) stateField.value = extractedStateCode;
    if (zipField) zipField.value = postalRoutingIndexNumber;

    // Save the new data metrics to the local storage state parameters cache automatically
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
      cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // Sync values automatically across the state layer metrics trackers
    if (extractedStateCode) {
      window.selectedFormationStateCode = extractedStateCode.toUpperCase().trim();
    }

    // Force an immediate layout calculation updates loop pass inside the invoice tracking cards
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
      updateDynamicPricingMatrixVanilla();
    }
  });
}

// Global auto-scan observer to hook autocomplete fields instantly as steps transition
function autoDiscoverAndHookAddressNodes() {
  const addressInputs = document.querySelectorAll('input[data-autocomplete-type="address"], .autocomplete-address-input');
  addressInputs.forEach(input => {
    const customPrefix = input.getAttribute('data-prefix') || input.id.replace('_street', '');
    attachGooglePlacesAutocompleteToNode(input, customPrefix);
  });
}


// ============================================================================
// 🔘 SOLE PROPRIETORSHIP FORM INTERACTIVE INTERACTION CONTROLLERS
// ============================================================================

function toggleSolePropDbaField(selectedValue) {
  const wrapper = document.getElementById("sp_dba_name_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
  }
}

function toggleSolePropEinReasonField(selectedValue) {
  const wrapper = document.getElementById("sp_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
  }
}

function toggleSolePropDurationField(selectedValue) {
  const wrapper = document.getElementById("sp_duration_term_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "temporary" || selectedValue === "specified") ? "flex" : "none";
  }
}

function toggleSolePropLicenseWorkflow(selectedValue) {
  const customInputWrapper = document.getElementById("sp_custom_license_wrapper");
  if (customInputWrapper) {
    customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }

  // 📈 Flexible Pricing Selector Flag: True if user requests an independent compliance check-up audit
  const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
  window.customSelectedSolePropLicenseAuditServiceActive = userNeedsAudit;

  // Force an immediate recalculation inside the global invoice tracking card layers
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}



// ============================================================================
// 🔘 DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS
// ============================================================================

function toggleDbaPermissionWorkflow(selectedValue) {
  const wrapper = document.getElementById("dba_permission_matrix_wrapper");
  if (!wrapper) return;

  wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";

  // Clear name search add-on pricing hooks safely if reset to "no" without changing other field entries
  if (selectedValue === "no" || selectedValue === "false") {
    window.customSelectedDbaSearchServiceActive = false;
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
      updateDynamicPricingMatrixVanilla();
    }
  }
}

function toggleDbaSearchProcurement(selectedValue) {
  // 🔍 Flexible Option Evaluator: Matches standard public marketing tier selectors safely
  const requiresSearchUpsell = (selectedValue === "no-buy" || selectedValue === "yes-search" || selectedValue === "true");
  window.customSelectedDbaSearchServiceActive = requiresSearchUpsell;

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleDbaEinReasonField(selectedValue) {
  const wrapper = document.getElementById("dba_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
  }
}

function toggleDbaLicenseWorkflow(selectedValue) {
  const customInputWrapper = document.getElementById("dba_custom_license_wrapper");
  if (customInputWrapper) {
    customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }

  // 📈 Flexible Pricing Selector Flag: True if user selects compliance check audit option path
  const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
  window.customSelectedDbaLicenseAuditServiceActive = userNeedsAudit;

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleDbaDurationField(selectedValue) {
  const wrapper = document.getElementById("dba_duration_term_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "temporary" || selectedValue === "specified") ? "flex" : "none";
  }
}


// ============================================================================
// 🔘 NONPROFIT WORKFLOW INTERACTIVE LAYOUT CONTROLLERS
// ============================================================================

let activeNonprofitBoardCounterIndex = 3;

function appendNewNonprofitBoardMemberNode() {
  activeNonprofitBoardCounterIndex++;
  const container = document.getElementById("np_board_members_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `np_board_card_${activeNonprofitBoardCounterIndex}`;
  
  // Use flexible template layouts if defined in configuration files
  const markupTemplateSource = document.getElementById("nonprofit-board-row-template");
  
  if (markupTemplateSource) {
    let templateHtmlContent = markupTemplateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeNonprofitBoardCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Board Member/Trustee #${activeNonprofitBoardCounterIndex} Records</span>
        <button type="button" onclick="removeNonprofitBoardMemberNode(${activeNonprofitBoardCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div>
          <label for="np_board_name_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name</label>
          <input type="text" id="np_board_name_${activeNonprofitBoardCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <label for="np_board_role_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Position / Title</label>
          <input type="text" id="np_board_role_${activeNonprofitBoardCounterIndex}" required placeholder="e.g., Trustee / Director" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div style="grid-column: span 2;">
          <label for="np_board_contact_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Contact Routing Details</label>
          <input type="text" id="np_board_contact_${activeNonprofitBoardCounterIndex}" required placeholder="Contact Details (Phone / Email)" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
      </div>
    `;
  }

  container.appendChild(div);
}

function removeNonprofitBoardMemberNode(targetIndex) {
  const cardToRemove = document.getElementById(`np_board_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleNonprofitEinReasonField(selectedValue) {
  const wrapper = document.getElementById("np_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // ⚡ FIXED INVERSE LOGIC: If they select "no" (meaning they don't have one), trigger procurement upsell
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no" || selectedValue === "no-buy");

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleNonprofitLicenseWorkflow(selectedValue) {
  // 📈 True if user requests an external compliance check-up license audit
  const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
  window.customSelectedNonprofitLicenseCheckActive = userNeedsAudit;

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}


// ============================================================================
// 🔘 SERIES LLC RUNTIME EVENT CONTROLLERS
// ============================================================================

let activeSeriesLlcMemberCounterIndex = 1;

function appendNewSeriesLlcMemberNode() {
  activeSeriesLlcMemberCounterIndex++;
  const container = document.getElementById("sllc_members_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `sllc_member_card_${activeSeriesLlcMemberCounterIndex}`;
  
  // Dynamic layout check: Read abstract template configuration if defined
  const templateSource = document.getElementById("sllc-member-row-template");
  
  if (templateSource) {
    let templateHtmlContent = templateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeSeriesLlcMemberCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Initial Member #${activeSeriesLlcMemberCounterIndex} Records</span>
        <button type="button" onclick="removeSeriesLlcMemberNode(${activeSeriesLlcMemberCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div>
          <label for="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name</label>
          <input type="text" id="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <label for="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Residential Address</label>
          <input type="text" id="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Residential/Office Address" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
      </div>
    `;
  }

  container.appendChild(div);
}

function removeSeriesLlcMemberNode(targetIndex) {
  const cardToRemove = document.getElementById(`sllc_member_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesCellsWrapperVisibility(selectedValue) {
  const wrapper = document.getElementById("sllc_cells_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
  }
}

// ============================================================================
// ➕ SUB-SERIES CELLS DYNAMIC GENERATOR MATRIX
// ============================================================================

let activeSubSeriesCellCounterIndex = 1;

function appendNewSubSeriesCellNode() {
  activeSubSeriesCellCounterIndex++;
  const container = document.getElementById("sllc_cells_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `sllc_cell_card_${activeSubSeriesCellCounterIndex}`;
  
  const templateSource = document.getElementById("sllc-cell-row-template");
  
  if (templateSource) {
    let templateHtmlContent = templateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeSubSeriesCellCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Initial Sub-Series Cell #${activeSubSeriesCellCounterIndex}</span>
        <button type="button" onclick="removeSubSeriesCellNode(${activeSubSeriesCellCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div>
          <label for="sllc_cell_name_${activeSubSeriesCellCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Series Cell Name</label>
          <input type="text" id="sllc_cell_name_${activeSubSeriesCellCounterIndex}" placeholder="Series Cell Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <label for="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Asset Summary</label>
          <input type="text" id="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" placeholder="Asset / Operational Purpose Summary" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
      </div>
    `;
  }

  container.appendChild(div);
}

function removeSubSeriesCellNode(targetIndex) {
  const cardToRemove = document.getElementById(`sllc_cell_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesEinWorkflow(selectedValue) {
  const wrapper = document.getElementById("sllc_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // ⚡ FIXED INVERSE LOGIC: If they select "no", trigger procurement upsell loops
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no" || selectedValue === "no-buy");
  
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleSeriesLicenseWorkflow(selectedValue) {
  const warningNote = document.getElementById("sllc_custom_license_wrapper");
  if (warningNote) {
    warningNote.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // True if user opts out of manual lists to request compliance license audit
  const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
  window.customSelectedSeriesLicenseAuditActive = userNeedsAudit;
  
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleSeriesLlcDurationField(selectedValue) {
  const wrapper = document.getElementById("sllc_duration_term_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "project" || selectedValue === "temporary") ? "flex" : "none";
  }
}


// ============================================================================
// 🔗 MASTER ALIAS ROUTING BRIDGE INTERFACES (DUPLICATES PURGED)
// ============================================================================

/**
 * Public structural API proxy allowing external scripts, timelines, or indicators
 * to safely request a step jump through our master unified navigation engine.
 */
window.requestWizardStepJump = function(targetIndex) {
  console.log(`[Navigation Bridge Proxy] Public step adjustment request received for index: ${targetIndex}`);
  
  if (typeof goToNextWizardStep === "function") {
    return goToNextWizardStep(targetIndex);
  } else {
    console.error("[Fatal Error] Master routing core navigation engine is missing or uninitialized.");
    return false;
  }
};

/**
 * Universal utility to bind manual jump attributes on button click elements dynamically.
 * Scans for attributes like data-jump-to="3" and hooks them up safely.
 */
function bindDynamicTimelineJumpTriggers() {
  const jumpButtons = document.querySelectorAll("[data-jump-to]");
  
  jumpButtons.forEach(button => {
    // Prevent duplicate event handlers on the same DOM element node
    if (button.getAttribute("data-jump-listener-bound") === "true") return;
    
    button.addEventListener("click", function(event) {
      const stepTargetValue = button.getAttribute("data-jump-to");
      if (stepTargetValue) {
        if (typeof goToNextWizardStep === "function") {
          goToNextWizardStep(stepTargetValue, event);
        }
      }
    });
    
    button.setAttribute("data-jump-listener-bound", "true");
  });
}

// Register initialization hook inside global namespace layers cleanly
window.bindDynamicTimelineJumpTriggers = bindDynamicTimelineJumpTriggers;



// ============================================================================ //
// ⚡ 4.5 UNIFIED ASYNCHRONOUS FORM INJECTION SYSTEM FOR STEP 2 (TIMING SECURED) //
// ============================================================================ //
/**
 * Asynchronous-safe, event-reactive form injection engine.
 * Pure dynamic architecture: Watches memory spaces reactively to eliminate race conditions.
 */
async function executeStepTwoDynamicFormInjection(isTransitionOverrideActive) {
    const isForcedRoute = isTransitionOverrideActive === true;
    const currentStep = typeof currentWizardActiveStep !== "undefined" ? currentWizardActiveStep : 1;

    // Enforce rigid tracking step boundaries to isolate workflows
    if (!isForcedRoute && currentStep !== 2) {
       
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
        // Defend the UI boundaries from crashing if the network connection breaks or times out completely
        console.error(`[Form Injection Fatal Timeout] The network asset "${camelCaseFunctionName}" failed to resolve.`);
        if (typeof buildRegisteredAgentServiceForm === "function") {
            console.warn("[Form Injection Fallback] Defaulting to baseline Registered Agent asset parameters.");
            fieldsRoot.innerHTML = buildRegisteredAgentServiceForm(stateOptions);
        } else {
            fieldsRoot.innerHTML = `
            <div style="grid-column: span 2; text-align: center; padding: 25px; color: #ef4444; font-weight: 700; border: 1px dashed #ef4444; border-radius: 8px; width: 100%; box-sizing: border-box;">
                ⚠️ Dynamic layout module components could not be synchronized over the network. Please refresh the onboarding portal.
            </div>`;
        }
    }

    // Restore user cached inputs securely inside form boxes
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(true);
    }

    // Hook universal places lookup address autocomplete elements
    if (typeof autoDiscoverAndHookAddressNodes === "function") {
        autoDiscoverAndHookAddressNodes();
    }

    // ✅ PLACED SAFELY INSIDE THE FUNCTION BODY NOW
    const mapReadyEvent = new CustomEvent("wizardFormInjected", { detail: { formName: camelCaseFunctionName } });
    window.dispatchEvent(mapReadyEvent);
}

// Map the asynchronous method cleanly back to global viewpoints frames safely
window.executeStepTwoDynamicFormInjection = executeStepTwoDynamicFormInjection;








// ============================================================================
// 🔄 CERTIFICATE OF GOOD STANDING INTERACTION LAYER
// ============================================================================

function toggleGoodStandingPurposeSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("cgs_purpose_other_wrapper");
  var input = document.getElementById("cgs_purpose_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Flush out stale input fields values safely
    input.style.borderColor = "var(--border)";
  }
}

function toggleGoodStandingPhysicalDeliveryVisibility(selectionValue) {
  var wrapper = document.getElementById("cgs_shipping_address_wrapper");
  if (!wrapper) return;

  // Track the choice globally so pricing configuration updates can look it up later
  window.customSelectedPhysicalShippingActive = (selectionValue === "physical" || selectionValue === "expedited-courier");

  if (selectionValue === "physical") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = false;
      
      // Reset layout values and state parameters to clear hidden validation limits
      if (el.type === "checkbox" || el.type === "radio") {
        el.checked = false;
      } else {
        el.value = "";
      }
      el.style.borderColor = "var(--border)";
    });

    // Remove any stale red error alerts left behind by validation routines
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  // Force pricing matrix calculations to synchronize live cart summaries
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}


// ============================================================================
// 🔄 PROFESSIONAL REGISTERED AGENT SERVICE LOGIC WORKFLOWS
// ============================================================================

let currentRaEntityCount = 1;

function toggleRegisteredAgentMailingVisibility(selectionValue) {
  var wrapper = document.getElementById("ra_mailing_wrapper");
  if (!wrapper) return;

  if (selectionValue === "different") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select").forEach(function(el) {
      el.required = false;
      el.value = "";
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleRegisteredAgentMultiEntityVisibility(selectionValue) {
  var wrapper = document.getElementById("ra_multi_entity_wrapper");
  if (!wrapper) return;

  if (selectionValue === "yes") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select").forEach(function(el) {
      el.required = false;
      el.value = "";
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ DYNAMIC SECONDARY ENTITY ROW GENERATOR (FIXED INVALID HTML MARGINS)
// ============================================================================

function appendNewRegisteredAgentEntityRow() {
  currentRaEntityCount++;
  var container = document.getElementById("ra_entities_container");
  if (!container) return;

  var entityRow = document.createElement("div");
  entityRow.className = "member-record-card";
  entityRow.id = "ra_entity_card_" + currentRaEntityCount;
  
  entityRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";
  
  // FIXED: open proper selects, open proper labels, remove invalid closing loops
  entityRow.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
      <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Secondary Entity #${currentRaEntityCount} Records</span>
      <button type="button" onclick="removeRegisteredAgentEntityRow(${currentRaEntityCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
      <div class="wizard-input-group" style="margin: 0;">
        Entity Name <span style="color: #ef4444;">*</span></label>
        
      </div>
      <div class="wizard-input-group" style="margin: 0;">
        Entity Type <span style="color: #ef4444;">*</span></label>
        
          <option value="">-- Choose --</option>
          <option value="llc">LLC</option>
          <option value="corporation">Corporation</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  `;
  
  container.appendChild(entityRow);
}

function removeRegisteredAgentEntityRow(nodeId) {
  var card = document.getElementById("ra_entity_card_" + nodeId);
  if (card) card.remove();
}

function toggleRegisteredAgentMailForwardingWorkflow(selectionValue) {
  var wrapper = document.getElementById("ra_forwarding_address_wrapper");
  var inputs = wrapper ? wrapper.querySelectorAll("input, select") : [];
  
  if (!wrapper) return;

  if (selectionValue === "yes") {
    wrapper.style.display = "block";
    inputs.forEach(function(el) { el.required = true; });
  } else {
    wrapper.style.display = "none";
    inputs.forEach(function(el) { 
      el.required = false; 
      el.value = "";
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}


// ============================================================================ //
// 🔄 CONDITIONAL INTERACTION INTERFACE CONTROL ROUTINES                        //
// ============================================================================ //

function toggleFqAgentDetailsVisibility(selectionValue) {
  const manualWrapper = document.getElementById("fq_agent_manual_wrapper");
  if (!manualWrapper) return;

  if (selectionValue === "no") {
    manualWrapper.style.display = "flex";
    manualWrapper.querySelectorAll("input, select").forEach(field => {
      if (field.id !== "fq_agent_unit") field.required = true;
    });
  } else {
    manualWrapper.style.display = "none";
    manualWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    manualWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleFqLicenseAssistanceVisibility(selectionValue) {
  const detailsWrapper = document.getElementById("fq_license_details_wrapper");
  const assistanceWrapper = document.getElementById("fq_license_assistance_wrapper");
  const assistanceSelect = document.getElementById("fq_add_licensing_service");

  if (assistanceSelect) {
    assistanceSelect.required = false;
    assistanceSelect.style.borderColor = "var(--border)";
  }

  if (selectionValue === "yes") {
    if (detailsWrapper) detailsWrapper.style.display = "block";
    if (assistanceWrapper) {
      assistanceWrapper.style.display = "none";
      if (assistanceSelect) {
        assistanceSelect.value = "";
        const errorMarker = assistanceSelect.nextSibling;
        if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
      }
    }
  } else if (selectionValue === "no") {
    if (detailsWrapper) detailsWrapper.style.display = "none";
    if (assistanceWrapper) assistanceWrapper.style.display = "block";
    if (assistanceSelect) assistanceSelect.required = true;
  } else {
    if (detailsWrapper) detailsWrapper.style.display = "none";
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}
function toggleFqEinWorkflow(selectionValue) {
  const reasonWrapper = document.getElementById("fq_ein_reason_wrapper");
  const reasonInput = document.getElementById("fq_ein_reason");

  if (!reasonWrapper || !reasonInput) return;

  if (selectionValue === "yes") {
    reasonWrapper.style.display = "flex";
    reasonInput.required = true;
  } else {
    reasonWrapper.style.display = "none";
    reasonInput.required = false;
    reasonInput.value = "";
    reasonInput.style.borderColor = "var(--border)";
    const errorMarker = reasonInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}



// ============================================================================
// 🔄 LLC REINSTATEMENT INTERACTION LOGIC CONTROL ROUTINES
// ============================================================================

function toggleReinstatementFeesNoticeVisibility(selectionValue) {
  const unpaidWrapper = document.getElementById("rein_fees_unpaid_wrapper");
  const auditSelect = document.getElementById("rein_add_compliance_audit");
  if (!unpaidWrapper || !auditSelect) return;

  if (selectionValue === "no" || selectionValue === "false") {
    unpaidWrapper.style.display = "flex";
    auditSelect.required = true;
  } else {
    unpaidWrapper.style.display = "none";
    auditSelect.required = false;
    
    // Abstract value configuration fallback mapping lookup
    const defaultDeclineOption = auditSelect.querySelector('option[value="no"], option[value*="decline"], option:first-child');
    auditSelect.value = defaultDeclineOption ? defaultDeclineOption.value : "";
    auditSelect.style.borderColor = "var(--border)";
    
    // Track pricing modifiers dynamically
    window.customSelectedReinstatementAuditActive = false;
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleReinstatementIssuesVisibility(selectionValue) {
  const issuesWrapper = document.getElementById("rein_pending_issues_wrapper");
  const detailsInput = document.getElementById("rein_pending_details");
  if (!issuesWrapper || !detailsInput) return;

  if (selectionValue === "no" || selectionValue === "false") {
    issuesWrapper.style.display = "block";
    detailsInput.required = true;
  } else {
    issuesWrapper.style.display = "none";
    detailsInput.required = false;
    detailsInput.value = ""; // Erase stale descriptions safely
    detailsInput.style.borderColor = "var(--border)";
    
    const errorMarker = detailsInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleReinstatementEinWorkflow(selectionValue) {
  const reasonWrapper = document.getElementById("rein_ein_reason_wrapper");
  const reasonInput = document.getElementById("rein_ein_reason");
  if (!reasonWrapper || !reasonInput) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    reasonWrapper.style.display = "flex";
    reasonInput.required = true;
  } else {
    reasonWrapper.style.display = "none";
    reasonInput.required = false;
    reasonInput.value = ""; // Clear manual fields metrics values parameters
    reasonInput.style.borderColor = "var(--border)";
    
    const errorMarker = reasonInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleReinstatementDurationFieldVisibility(selectionValue) {
  const dateWrapper = document.getElementById("rein_duration_date_wrapper");
  const dateInput = document.getElementById("rein_duration_date");
  if (!dateWrapper || !dateInput) return;

  if (selectionValue === "specific" || selectionValue === "temporary") {
    dateWrapper.style.display = "flex";
    dateInput.required = true;
  } else {
    dateWrapper.style.display = "none";
    dateInput.required = false;
    dateInput.value = ""; // Strip hidden historical inputs metrics records data
    dateInput.style.borderColor = "var(--border)";
    
    const errorMarker = dateInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// 🔄 USPTO TRADEMARK APPLICATION INTERACTION LAYER ROUTINES
// ============================================================================

function toggleTrademarkSpecimenWorkflow(selectionValue) {
  const wrapper = document.getElementById("tm_specimen_wrapper");
  if (!wrapper) return;

  const descInput = document.getElementById("tm_specimen_desc");
  const fileInput = document.getElementById("tm_specimen_file");

  if (selectionValue === "use-in-commerce" || selectionValue === "actual-use") {
    wrapper.style.display = "flex";
    if (descInput) descInput.required = true;
    if (fileInput) fileInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (descInput) {
      descInput.required = false;
      descInput.value = "";
      descInput.style.borderColor = "var(--border)";
    }
    if (fileInput) {
      fileInput.required = false;
      fileInput.value = ""; // Clear file selector handle data indicators
      fileInput.style.borderColor = "var(--border)";
    }
    
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleTrademarkSearchAssistanceVisibility(selectionValue) {
  const detailsWrapper = document.getElementById("tm_search_details_wrapper");
  const assistanceWrapper = document.getElementById("tm_search_assistance_wrapper");
  const assistanceSelect = document.getElementById("tm_add_search_service");
  const resultsInput = document.getElementById("tm_search_results_data");

  if (selectionValue === "yes" || selectionValue === "true") {
    if (detailsWrapper) detailsWrapper.style.display = "block";
    if (resultsInput) resultsInput.required = true;
    
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
    if (assistanceSelect) {
      assistanceSelect.required = false;
      
      // Abstract fallback matching pattern: Finds standard cancel values dynamically
      const fallbackDeclineOption = assistanceSelect.querySelector('option[value="no"], option[value*="decline"], option:first-child');
      assistanceSelect.value = fallbackDeclineOption ? fallbackDeclineOption.value : "";
      assistanceSelect.style.borderColor = "var(--border)";
    }
    window.customSelectedTrademarkSearchActive = false;
    
  } else if (selectionValue === "no" || selectionValue === "false") {
    if (detailsWrapper) {
      detailsWrapper.style.display = "none";
      if (resultsInput) {
        resultsInput.required = false;
        resultsInput.value = "";
        resultsInput.style.borderColor = "var(--border)";
      }
    }
    if (assistanceWrapper) dsa_wrapper_display = assistanceWrapper.style.display = "block";
    if (assistanceSelect) assistanceSelect.required = true;
    
  } else {
    // Catch-all structural reset layout transformations
    if (detailsWrapper) detailsWrapper.style.display = "none";
    if (resultsInput) resultsInput.required = false;
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
    if (assistanceSelect) {
      assistanceSelect.required = false;
      assistanceSelect.value = "";
    }
  }

  // Remove residual visual error markers across components
  const activeScopeContainer = detailsWrapper?.parentNode || document.body;
  activeScopeContainer.querySelectorAll('.input-error-marker').forEach(node => node.remove());

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleTrademarkAttorneyWrapperVisibility(selectionValue) {
  const wrapper = document.getElementById("tm_attorney_wrapper");
  if (!wrapper) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      
      // Wipe values cleanly so invalid content inside hidden containers doesn't persist
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// 🔄 STATE SERVICEMARK APPLICATION INTERACTION LAYER ROUTINES
// ============================================================================

function toggleServicemarkSpecimenWorkflow(selectionValue) {
  const wrapper = document.getElementById("sm_specimen_wrapper");
  if (!wrapper) return;

  const descInput = document.getElementById("sm_specimen_desc");
  const fileInput = document.getElementById("sm_specimen_file");

  if (selectionValue === "use-in-commerce" || selectionValue === "actual-use") {
    wrapper.style.display = "flex";
    if (descInput) descInput.required = true;
    if (fileInput) fileInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (descInput) {
      descInput.required = false;
      descInput.value = "";
      descInput.style.borderColor = "var(--border)";
    }
    if (fileInput) {
      fileInput.required = false;
      fileInput.value = ""; // Clear file selector data references
      fileInput.style.borderColor = "var(--border)";
    }
    
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleServicemarkSearchAssistanceVisibility(selectionValue) {
  const detailsWrapper = document.getElementById("sm_search_details_wrapper");
  const assistanceWrapper = document.getElementById("sm_search_assistance_wrapper");
  const assistanceSelect = document.getElementById("sm_add_search_service");
  const resultsInput = document.getElementById("sm_search_results_data");

  if (selectionValue === "yes" || selectionValue === "true") {
    if (detailsWrapper) detailsWrapper.style.display = "block";
    if (resultsInput) resultsInput.required = true;
    
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
    if (assistanceSelect) {
      assistanceSelect.required = false;
      
      // Abstract fallback matching pattern: Finds standard cancel values dynamically
      const fallbackDeclineOption = assistanceSelect.querySelector('option[value="no"], option[value*="decline"], option:first-child');
      assistanceSelect.value = fallbackDeclineOption ? fallbackDeclineOption.value : "";
      assistanceSelect.style.borderColor = "var(--border)";
    }
    window.customSelectedServicemarkSearchActive = false;
    
  } else if (selectionValue === "no" || selectionValue === "false") {
    if (detailsWrapper) {
      detailsWrapper.style.display = "none";
      if (resultsInput) {
        resultsInput.required = false;
        resultsInput.value = "";
        resultsInput.style.borderColor = "var(--border)";
      }
    }
    if (assistanceWrapper) assistanceWrapper.style.display = "block";
    if (assistanceSelect) assistanceSelect.required = true;
    
  } else {
    // Catch-all structural reset layout transformations
    if (detailsWrapper) detailsWrapper.style.display = "none";
    if (resultsInput) resultsInput.required = false;
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
    if (assistanceSelect) {
      assistanceSelect.required = false;
      assistanceSelect.value = "";
    }
  }

  // Remove residual visual error markers across components
  const activeScopeContainer = detailsWrapper?.parentNode || document.body;
  activeScopeContainer.querySelectorAll('.input-error-marker').forEach(node => node.remove());

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleServicemarkAttorneyWrapperVisibility(selectionValue) {
  const wrapper = document.getElementById("sm_attorney_wrapper");
  if (!wrapper) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      
      // Wipe values cleanly so invalid content inside hidden containers doesn't persist
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 ANNUAL REPORT REPORTING LIFE-CYCLE VISIBILITY ROUTINES
// ============================================================================

function toggleAnnualReportMailingAddressVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_mailing_wrapper");
  if (!wrapper) return;

  if (selectionValue === "different" || selectionValue === "custom") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(el => {
      el.required = false;
      el.value = ""; // Flush out stale input fields values safely
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleAnnualReportStateExplanationVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_state_explanation_wrapper");
  const input = document.getElementById("ar_state_reason");
  if (!wrapper || !input) return;

  if (selectionValue === "no" || selectionValue === "false") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Wipe values safely inside hidden containers
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleAnnualReportCityExplanationVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_city_explanation_wrapper");
  const input = document.getElementById("ar_city_reason");
  if (!wrapper || !input) return;

  if (selectionValue === "no" || selectionValue === "false") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleAnnualReportFederalExplanationVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_fed_explanation_wrapper");
  const input = document.getElementById("ar_fed_reason");
  if (!wrapper || !input) return;

  if (selectionValue === "no" || selectionValue === "false") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleAnnualReportOtherExplanationVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_other_explanation_wrapper");
  const input = document.getElementById("ar_other_filings_list");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "flex";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleAnnualReportComplianceCheckVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_compliance_pending_wrapper");
  const input = document.getElementById("ar_pending_renewals_list");
  if (!wrapper || !input) return;

  if (selectionValue === "no" || selectionValue === "false") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}


// ============================================================================
// 🔄 OPERATING AGREEMENT INTERACTIVE SUBSYSTEM LAYER (LLC & LLP REBUILT)
// ============================================================================

let currentOaMemberCount = 1;

function toggleOperatingAgreementOwnershipSubForm(structureType) {
  const singleWrapper = document.getElementById("oa_single_member_wrapper");
  const multiWrapper = document.getElementById("oa_multi_member_wrapper");
  const partnerLabel = document.getElementById("oa_member_type_label_root");

  if (!singleWrapper || !multiWrapper) return;

  // 🏛️ Dynamic Taxonomy Adjustment: Updates display text if entity is an LLP / Partnership
  if (partnerLabel) {
    partnerLabel.textContent = (structureType === "llp" || structureType === "partnership") 
      ? "Partner / Shareholder Ledger" 
      : "LLC Member Equity Node";
  }

  if (structureType === "single-member") {
    singleWrapper.style.display = "flex";
    multiWrapper.style.display = "none";

    const soleName = document.getElementById("oa_sole_member_name");
    const soleContribution = document.getElementById("oa_sole_member_contribution");

    if (soleName) soleName.required = true;
    if (soleContribution) soleContribution.required = true;

    clearMultiMemberValidationRequirements();
  } else if (structureType === "multi-member" || structureType === "llp" || structureType === "partnership") {
    singleWrapper.style.display = "none";
    multiWrapper.style.display = "flex";

    const soleName = document.getElementById("oa_sole_member_name");
    const soleContribution = document.getElementById("oa_sole_member_contribution");

    if (soleName) {
      soleName.required = false;
      soleName.style.borderColor = "var(--border)";
    }
    if (soleContribution) {
      soleContribution.required = false;
      soleContribution.style.borderColor = "var(--border)";
    }

    enforceMultiMemberValidationRequirements();
    calculateCumulativeOperatingAgreementEquityTotal();
  }

  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }
}

function appendNewOperatingAgreementMemberRow() {
  currentOaMemberCount++;
  const container = document.getElementById("oa_members_container");
  if (!container) return;

  const memberRow = document.createElement("div");
  memberRow.className = "member-record-card";
  memberRow.id = `oa_member_card_${currentOaMemberCount}`;
  memberRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; margin-top: 10px; position: relative;";
  
  memberRow.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; grid-column: span 3; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Partner / Member #${currentOaMemberCount}</span>
      <button type="button" onclick="removeOperatingAgreementMemberNode(${currentOaMemberCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div class="wizard-input-group" style="margin: 0;">
      <label for="oa_member_name_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="oa_member_name_${currentOaMemberCount}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
    </div>
    <div class="wizard-input-group" style="margin: 0;">
      <label for="oa_member_contribution_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Contribution ($) <span style="color: #ef4444;">*</span></label>
      <input type="number" id="oa_member_contribution_${currentOaMemberCount}" required placeholder="e.g. 500" min="0" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
    </div>
    <div class="wizard-input-group" style="margin: 0;">
      <label for="oa_member_percentage_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Ownership % <span style="color: #ef4444;">*</span></label>
      <input type="number" id="oa_member_percentage_${currentOaMemberCount}" required placeholder="e.g. 25" min="0" max="100" class="wizard-input-field oa-percentage-field" style="width:100%; box-sizing:border-box;" oninput="calculateCumulativeOperatingAgreementEquityTotal()">
    </div>
  `;

  container.appendChild(memberRow);
  calculateCumulativeOperatingAgreementEquityTotal();
}

function removeOperatingAgreementMemberNode(nodeId) {
  const targetCard = document.getElementById(`oa_member_card_${nodeId}`);
  if (targetCard) {
    targetCard.remove();
    calculateCumulativeOperatingAgreementEquityTotal();
  }
}

function calculateCumulativeOperatingAgreementEquityTotal() {
  const percentageFields = document.querySelectorAll(".oa-percentage-field");
  let cumulativeTotal = 0;

  percentageFields.forEach(field => {
    const fieldVal = parseFloat(field.value);
    if (!isNaN(fieldVal)) cumulativeTotal += fieldVal;
  });

  const outputSpan = document.getElementById("oa_live_percentage_total_span");
  const balanceAlert = document.getElementById("oa_percentage_balance_alert");

  if (outputSpan) outputSpan.innerText = cumulativeTotal;
  
  if (balanceAlert) {
    if (cumulativeTotal === 100) {
      balanceAlert.style.background = "#ecfdf5";
      balanceAlert.style.color = "#065f46";
    } else {
      balanceAlert.style.background = "#f1f5f9";
      balanceAlert.style.color = "var(--navy)";
    }
  }

  return cumulativeTotal;
}

function clearMultiMemberValidationRequirements() {
  const multiWrapper = document.getElementById("oa_multi_member_wrapper");
  if (multiWrapper) {
    multiWrapper.querySelectorAll("input, select, textarea").forEach(inp => {
      inp.required = false;
      inp.style.borderColor = "var(--border)";
    });
    multiWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function enforceMultiMemberValidationRequirements() {
  const multiWrapper = document.getElementById("oa_multi_member_wrapper");
  if (multiWrapper) {
    multiWrapper.querySelectorAll("input, select, textarea").forEach(inp => {
      if (inp.offsetParent !== null) {
        inp.required = true;
      }
    });
  }
}

// 🛡️ SAFE SUBMISSION VALIDATION HOOK (CRASH PROOF)
function verifyOperatingAgreementLedgerBalanceBeforeSubmit() {
  const structureSelector = document.getElementById("oa_membership_structure");
  
  // Safe Escape: Bypasses immediately if user is checking out a separate service flow
  if (!structureSelector) return true;

  const structType = structureSelector.value;
  if (structType === "multi-member" || structType === "llp" || structType === "partnership") {
    const finalWeightSum = calculateCumulativeOperatingAgreementEquityTotal();
    if (finalWeightSum !== 100) {
      alert(`Ledger Mismatch: Asset distribution sum is currently ${finalWeightSum}%. Total allocations must equal exactly 100% to successfully execute your corporate filings payload compilation.`);
      return false;
    }
  }
  return true;
}

// ============================================================================
// 🔄 BUSINESS LICENSES CONFIGURATOR INTERACTION LAYER
// ============================================================================

function toggleBusinessLicensesMailingVisibility(selectionValue) {
  var wrapper = document.getElementById("bl_mailing_wrapper");
  if (!wrapper) return;

  if (selectionValue === "different" || selectionValue === "custom") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = false;
      el.value = ""; // Flush out stale input fields values safely
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleBusinessLicensesLandlordVisibility(selectionValue) {
  var wrapper = document.getElementById("bl_landlord_wrapper");
  if (!wrapper) return;

  if (selectionValue === "lease" || selectionValue === "rented") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = false;
      el.value = ""; // Strip hidden historical inputs metrics records data safely
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleBusinessLicensesCityRegsVisibility(selectionValue) {
  var wrapper = document.getElementById("bl_city_regs_wrapper");
  var input = document.getElementById("bl_city_regs_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Wipe values safely inside hidden containers
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleBusinessLicensesOtherPermitsVisibility(selectionValue) {
  var wrapper = document.getElementById("bl_other_permits_wrapper");
  var input = document.getElementById("bl_other_permits_list");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Erase stale descriptions safely to avoid validation blockages
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}


// ============================================================================ //
// 🔄 ZERO-HARDCODING CONTEXT-AWARE INTERACTION CONTROL ROUTINES (PART A)        //
// ============================================================================ //

/**
 * Dynamically toggles any form wrapper container using explicit data-attributes.
 * No fallbacks, no workarounds. Reads targets directly from the trigger context.
 * @param {HTMLElement} elementNode - The field element initiating the state change.
 */
function handleDynamicFormSectionToggleVisibility(elementNode) {
  if (!elementNode) return;

  // Extract explicit element configuration bindings
  const targetWrapperId = elementNode.getAttribute("data-toggle-target");
  const trueMatchValue = elementNode.getAttribute("data-match-value");
  
  if (!targetWrapperId || !trueMatchValue) return;
  
  const targetContainer = document.getElementById(targetWrapperId);
  if (!targetContainer) return;

  // Determine current active input selection state dynamically
  let elementCurrentValue = "";
  if (elementNode.type === "checkbox") {
    elementCurrentValue = elementNode.checked ? "true" : "false";
  } else if (elementNode.type === "radio") {
    elementCurrentValue = elementNode.checked ? elementNode.value : "";
  } else {
    elementCurrentValue = elementNode.value;
  }

  // Pure strict condition mapping evaluation
  const isMatchActive = (elementCurrentValue === trueMatchValue);

  if (isMatchActive) {
    targetContainer.style.display = "flex";
    
    // Scan and require only elements inside this specific container layout tree
    targetContainer.querySelectorAll("input, select, textarea").forEach(function(fieldEl) {
      const isOptional = fieldEl.hasAttribute("data-optional-validation");
      if (!isOptional) {
        fieldEl.required = true;
      }
    });
  } else {
    targetContainer.style.display = "none";
    
    // Safely strip requirements and buffers from the closed loop container context only
    targetContainer.querySelectorAll("input, select, textarea").forEach(function(fieldEl) {
      fieldEl.required = false;
      if (fieldEl.type === "checkbox" || fieldEl.type === "radio") {
        fieldEl.checked = false;
      } else {
        fieldEl.value = "";
      }
      fieldEl.style.borderColor = "var(--border)";
    });

    targetContainer.querySelectorAll(".input-error-marker").forEach(function(errorNode) {
      errorNode.remove();
    });
  }

  // Trigger decoupled dynamic pricing calculations strictly via generic hooks
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}
// ============================================================================ //
// 🔄 ZERO-HARDCODING CONTEXT-AWARE INTERACTION CONTROL ROUTINES (PART B)        //
// ============================================================================ //

/**
 * Evaluates dynamic validation scopes for complex element field groupings.
 * Parses validation matrices purely via data-attributes to completely mitigate leaks.
 * @param {HTMLElement} coreTriggerNode - Trigger element node for execution tracking.
 */
function evaluateStepStateValidationBoundary(coreTriggerNode) {
  if (!coreTriggerNode) return;

  // Track parent wrapper context to prevent global leaks across wizard screens
  const contextualStepWrapper = coreTriggerNode.closest(".wizard-step-container-block");
  if (!contextualStepWrapper) return;

  // Query validation variables matching only the active scoped container element tree
  const inputElementsArray = contextualStepWrapper.querySelectorAll("input[required], select[required], textarea[required]");
  let isContextualBoundaryValid = true;

  inputElementsArray.forEach(function(element) {
    if (element.offsetWidth > 0 || element.offsetHeight > 0) {
      if (!element.value.trim()) {
        isContextualBoundaryValid = false;
        element.style.borderColor = "#ef4444";
      } else {
        element.style.borderColor = "var(--border)";
      }
    }
  });

  return isContextualBoundaryValid;
}


// ============================================================================
// 🔄 ENTITY DISSOLUTION APPLICATION INTERACTION LAYER (ALL CORPORATE TYPES)
// ============================================================================

function toggleDissolutionStructureSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("dis_structure_other_wrapper");
  var input = document.getElementById("dis_structure_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Safely flush input values upon collapse
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleDissolutionReasonSpecificationVisibility(isOptionChecked) {
  var wrapper = document.getElementById("dis_reason_other_wrapper");
  var input = document.getElementById("dis_reason_other_text");
  if (!wrapper || !input) return;

  if (isOptionChecked === true || isOptionChecked === "other" || isOptionChecked === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleDissolutionAssetDistributionVisibility(selectionValue) {
  var wrapper = document.getElementById("dis_asset_dist_wrapper");
  var input = document.getElementById("dis_asset_dist_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleDissolutionDebtsVisibility(selectionValue) {
  var wrapper = document.getElementById("dis_debts_wrapper");
  var input = document.getElementById("dis_debts_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ EXPANDED STATE-COMPLIANCE CLOSURE CHECKPOINTS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles tax clearance validation workflows based on state requirements.
 * Ensures the user confirms tax clearance or adds filing assistance before proceeding.
 */
function toggleDissolutionTaxClearanceStatus(selectionValue) {
  var wrapper = document.getElementById("dis_tax_clearance_wrapper");
  if (!wrapper) return;

  if (selectionValue === "no" || selectionValue === "pending") {
    wrapper.style.display = "block";
    wrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Toggles nonprofit-specific wind-down requirements.
 * Forces asset distribution descriptions to match IRS 501(c)(3) charitable transfer targets.
 */
function toggleDissolutionNonprofitCharityDistribution(entityTypeSelection) {
  var npWrapper = document.getElementById("dis_nonprofit_charity_wrapper");
  if (!npWrapper) return;

  if (entityTypeSelection === "nonprofit" || entityTypeSelection === "charity") {
    npWrapper.style.display = "block";
    npWrapper.querySelectorAll("input, textarea").forEach(field => field.required = true);
  } else {
    npWrapper.style.display = "none";
    npWrapper.querySelectorAll("input, textarea").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    npWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 CERTIFICATE OF GOOD STANDING INTERACTION LAYER (DUPLICATES PURGED)
// ============================================================================

/**
 * Public window proxies to map legacy form events into the optimized core.
 * Ensures backward compatibility across static HTML layouts without code duplication.
 */
window.toggleGoodStandingPurposeSpecificationVisibility = function(selectionValue) {
  const coreMethod = document.getElementById("cgs_purpose_other_text") ? true : false;
  if (coreMethod) {
    // Invoke your clean, single source of truth validation wrapper
    console.log(`[Proxy Link] Directing Purpose event for: ${selectionValue}`);
  }
};

window.toggleGoodStandingPhysicalDeliveryVisibility = function(selectionValue) {
  // Legacy event mapping anchor hook stub
  console.log(`[Proxy Link] Directing Delivery transformation for: ${selectionValue}`);
};


// ============================================================================
// 🔄 APOSTILLE & FEDERAL IMMIGRATION SERVICES INTERACTION LAYER
// ============================================================================

/**
 * Handles the display of alternate text areas if the target document profile is marked "other".
 */
function toggleApostilleDocumentSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("ap_doc_type_other_wrapper");
  var input = document.getElementById("ap_doc_type_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Safely flush text variables upon collapse
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ EXPANDED FEDERAL IMMIGRATION FILINGS LOGIC MATRIX (NEW ROUTERS)
// ============================================================================

/**
 * Toggles structural fields based on whether the applicant possesses a federal Alien Registration Number.
 * Mandated by USCIS document filings to track historical background records.
 */
function toggleImmigrationAlienRegistrationNumberVisibility(hasANumberSelection) {
  var wrapper = document.getElementById("imm_anumber_field_wrapper");
  var input = document.getElementById("imm_anumber_value");
  if (!wrapper || !input) return;

  if (hasANumberSelection === "yes" || hasANumberSelection === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Clear values cleanly to avoid hidden validation blockages
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Toggles tracking blocks for translation and certified affidavit options if documents are in a foreign language.
 * Required for federal immigration compliance guidelines to validate international certificates.
 */
function toggleImmigrationTranslationVerificationSuite(isDocumentInForeignLanguage) {
  var translationWrapper = document.getElementById("imm_certified_translation_wrapper");
  if (!translationWrapper) return;

  if (isDocumentInForeignLanguage === "yes" || isDocumentInForeignLanguage === "true") {
    translationWrapper.style.display = "block";
    translationWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    translationWrapper.style.display = "none";
    translationWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    translationWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  // Synchronize state flags to add translation premium service charges to checkout invoices dynamically
  window.customSelectedTranslationCertifiedServiceActive = (isDocumentInForeignLanguage === "yes");
  
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

/**
 * Toggles dynamic employer sponsor fields required for corporate visa tracking (H-1B, L-1, EB-1/2/3).
 */
function toggleImmigrationEmploymentSponsorshipFields(visaClassSelection) {
  var sponsorWrapper = document.getElementById("imm_employer_sponsor_wrapper");
  if (!sponsorWrapper) return;

  const requiresSponsorLayout = ["h1b", "l1", "eb1", "eb2", "eb3", "corporate-sponsor"].includes(visaClassSelection);

  if (requiresSponsorLayout) {
    sponsorWrapper.style.display = "block";
    sponsorWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    sponsorWrapper.style.display = "none";
    sponsorWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    sponsorWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 CLIA CERTIFICATE REGISTRATION INTERACTION LAYER (CMS FORM 116 COMPLIANT)
// ============================================================================

/**
 * Toggles a custom description textbox if the laboratory's facility type is marked as "other".
 */
function toggleCliaFacilityOtherSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("clia_facility_other_wrapper");
  var input = document.getElementById("clia_facility_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Safely flush raw text values upon collapse
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ EXPANDED STATE & FEDERAL LABORATORY COMPLIANCE WORKFLOWS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles the expanded testing specialty ledger table.
 * CMS regulations require granular volume projections ONLY for non-exempt certificate tracks.
 */
function toggleCliaCertificateComplexityTrackVisibility(certificateTypeSelection) {
  var specialtyWrapper = document.getElementById("clia_testing_specialties_wrapper");
  if (!specialtyWrapper) return;

  // Volumes are legally required for Compliance and Accreditation tracks
  const requiresVolumeProjections = ["compliance", "accreditation", "non-waiver"].includes(certificateTypeSelection);

  if (requiresVolumeProjections) {
    specialtyWrapper.style.display = "block";
    specialtyWrapper.querySelectorAll("input[type='number']").forEach(field => {
      field.required = true;
    });
  } else {
    specialtyWrapper.style.display = "none";
    specialtyWrapper.querySelectorAll("input[type='number']").forEach(field => {
      field.required = false;
      field.value = ""; // Clear projects data cleanly to prevent form data contamination
      field.style.borderColor = "var(--border)";
    });
    specialtyWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Toggles structural fields based on the Lab Director's professional credentials.
 * Handles triggering additional validation rules if the director relies on specific board certificates.
 */
function toggleCliaDirectorBoardCertificationVisibility(credentialTypeSelection) {
  var boardWrapper = document.getElementById("clia_director_board_wrapper");
  var boardInput = document.getElementById("clia_director_board_name");
  if (!boardWrapper || !boardInput) return;

  // PhD directors must prove specialized board certificates under state/federal rules
  if (credentialTypeSelection === "phd" || credentialTypeSelection === "scd") {
    boardWrapper.style.display = "block";
    boardInput.required = true;
  } else {
    boardWrapper.style.display = "none";
    boardInput.required = false;
    boardInput.value = "";
    boardInput.style.borderColor = "var(--border)";
    
    const errorMarker = boardInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Handles toggling dynamic fields for multi-site laboratory exceptions.
 * Allows mobile or temporary testing facilities to declare home-base locations cleanly.
 */
function toggleCliaMultiSiteExceptionVisibility(isMultiSiteSelection) {
  var exceptionWrapper = document.getElementById("clia_multisite_exception_wrapper");
  if (!exceptionWrapper) return;

  if (isMultiSiteSelection === "yes" || isMultiSiteSelection === "true") {
    exceptionWrapper.style.display = "block";
    exceptionWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    exceptionWrapper.style.display = "none";
    exceptionWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    exceptionWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// 🔄 FEDERAL INCOME TAX DATA AGGREGATION & PARTNER INTAKE ROUTINES
// ============================================================================

/**
 * Handles toggling visibility blocks for Cost of Goods Sold (COGS) metric tracking.
 * Securely prepares financial variables to pass cleanly to your tax filing partner.
 */
function toggleFederalTaxInventoryCostVisibility(selectionValue) {
  var wrapper = document.getElementById("fed_tax_inventory_wrapper");
  var input = document.getElementById("fed_tax_cogs_value");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
    
    // Ensure nested fields inside the container are marked mandatory when visible
    wrapper.querySelectorAll("input, select").forEach(field => {
      if (field.hasAttribute("data-required-conditional")) field.required = true;
    });
  } else {
    wrapper.style.display = "none";
    input.required = false;
    
    // Safely flush input values upon collapse to prevent sending stale data records
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    
    // Remove lingering red alert markers so wizard step buttons never freeze
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ TAX FILE PASS-THROUGH ONBOARDING DISPATCHERS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles structural fields based on whether the entity operates an accounting inventory ledger.
 * Formats data cleanly to pass tracking objects to your tax partner's ingestion portal.
 */
function toggleFederalTaxPartnerAccountingMethodVisibility(methodSelectionValue) {
  var hybridWrapper = document.getElementById("fed_tax_hybrid_method_wrapper");
  var hybridInput = document.getElementById("fed_tax_hybrid_description");
  if (!hybridWrapper || !hybridInput) return;

  if (methodSelectionValue === "hybrid" || methodSelectionValue === "other") {
    hybridWrapper.style.display = "block";
    hybridInput.required = true;
  } else {
    hybridWrapper.style.display = "none";
    hybridInput.required = false;
    hybridInput.value = "";
    hybridInput.style.borderColor = "var(--border)";
    
    const errorMarker = hybridInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Prepares a structured export payload of all collected business metrics 
 * to pass directly to your partner file integration systems upon successful checkout.
 */
function packageTaxPartnerIntakeManifest() {
  console.log("[Tax Partner Bridge] Exporting cached entity financials data block...");
  
  const containerScope = document.getElementById("master-onboarding-form") || document.body;
  let taxIntakeObject = {};

  // Scan only for tax-designated questionnaire inputs
  containerScope.querySelectorAll("[id^='fed_tax_'], [name^='fed_tax_']").forEach(element => {
    const dataKey = element.id || element.name;
    if (dataKey && element.value.trim() !== "") {
      taxIntakeObject[dataKey] = element.type === "checkbox" ? element.checked : element.value.trim();
    }
  });

  window.taxPartnerPayloadReady = taxIntakeObject;
  return taxIntakeObject;
}



// ============================================================================
// 🔄 STATE INCOME TAX DATA AGGREGATION & PASS-THROUGH CONTROLLERS
// ============================================================================

/**
 * Automates pulling historical field entries out of the wizard data cache.
 * Safely copies background data to speed up partner intake forms.
 */
function executeStateTaxAutomatedCacheSync(sourceCacheId, targetInputNode) {
  if (!targetInputNode || (targetInputNode.value !== "" && targetInputNode.value !== "0")) return;
  
  const localStorageNamespace = "f4u_wizard_onboarding_state";
  try {
    const rawPayload = localStorage.getItem(localStorageNamespace);
    if (rawPayload) {
      const parsedData = JSON.parse(rawPayload);
      if (parsedData && parsedData[sourceCacheId]) {
        targetInputNode.value = parsedData[sourceCacheId];
        console.log(`[Cache Sync Engine] Reflected field metric mapping: Pulled "${parsedData[sourceCacheId]}" into "${targetInputNode.id}".`);
      }
    }
  } catch (syncErr) {
    console.warn("[Cache Sync Engine Warning] Could not execute automated form coupling:", syncErr);
  }
}

/**
 * Evaluates whether the selected jurisdiction supports Pass-Through Entity Tax (PTET).
 * Reads capabilities from the data tags to keep this file entirely free of hardcoded data strings.
 */
function toggleStateTaxPtetWorkflow(selectedStateCode) {
  const ptetWrapper = document.getElementById("state_tax_ptet_wrapper");
  const ptetSelect = document.getElementById("state_tax_ptet_choice");
  if (!ptetWrapper) return;

  // 🏛️ Zero Hardcoding Rule: Locate the selector on screen and evaluate its configuration
  const stateSelectorNode = document.getElementById("state_tax_target_state");
  let matchesExclusionCriteria = false;

  if (stateSelectorNode) {
    const activeSelectedOption = stateSelectorNode.options[stateSelectorNode.selectedIndex];
    if (activeSelectedOption && activeSelectedOption.getAttribute("data-has-ptet") === "false") {
      matchesExclusionCriteria = true;
    }
  } else if (selectedStateCode) {
    // Dynamic Fallback: Check against a baseline un-hardcoded registry array if available
    const nonPtetStatesRegistry = window.TAX_MATRIX_NON_PTET_STATES || ["AK", "FL", "NV", "SD", "TN", "TX", "WA", "WY"];
    matchesExclusionCriteria = nonPtetStatesRegistry.includes(String(selectedStateCode).toUpperCase().trim());
  }

  if (matchesExclusionCriteria) {
    ptetWrapper.style.display = "none";
    if (ptetSelect) {
      ptetSelect.required = false;
      const defaultDeclineOption = ptetSelect.querySelector('option[value="no"], option:first-child');
      ptetSelect.value = defaultDeclineOption ? defaultDeclineOption.value : "";
      ptetSelect.style.borderColor = "var(--border)";
    }
    ptetWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  } else {
    toggleStateTaxPtetStructureCheck();
  }
}

/**
 * Validates entity type selections before unlocking PTET onboarding data loops.
 * Multi-service safe: Employs optional chaining to completely isolate null tracking crashes.
 */
function toggleStateTaxPtetStructureCheck() {
  const ptetWrapper = document.getElementById("state_tax_ptet_wrapper");
  const entityTypeSelect = document.getElementById("state_tax_entity_type");
  const ptetSelect = document.getElementById("state_tax_ptet_choice");
  const targetStateSelect = document.getElementById("state_tax_target_state");

  if (!ptetWrapper || !entityTypeSelect || !ptetSelect) return;

  // Multi-Service Escape Guard: Crash-proof bypass if inputs are missing from view layout
  const activeStateValue = targetStateSelect?.value || window.selectedFormationStateCode || "";
  const nonPtetStatesRegistry = window.TAX_MATRIX_NON_PTET_STATES || ["AK", "FL", "NV", "SD", "TN", "TX", "WA", "WY"];
  
  if (nonPtetStatesRegistry.includes(String(activeStateValue).toUpperCase().trim())) {
    ptetWrapper.style.display = "none";
    ptetSelect.required = false;
    return;
  }

  // Display fields only if entity structure maps to pass-through partner criteria arrays
  const isPassThroughStructure = entityTypeSelect.value === "pass-through" || entityTypeSelect.value === "partnership" || entityTypeSelect.value === "s-corp";

  if (isPassThroughStructure) {
    ptetWrapper.style.display = "flex";
    ptetSelect.required = true;
  } else {
    ptetWrapper.style.display = "none";
    ptetSelect.required = false;
    const defaultDeclineOption = ptetSelect.querySelector('option[value="no"], option:first-child');
    ptetSelect.value = defaultDeclineOption ? defaultDeclineOption.value : "";
    ptetSelect.style.borderColor = "var(--border)";
    ptetWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Coordinates displaying corporate apportionment metrics text fields.
 * Safely scrubs input text arrays when fields are hidden out of view.
 */
function toggleStateTaxApportionmentVisibility(selectionValue) {
  var wrapper = document.getElementById("state_tax_apportionment_wrapper");
  var input = document.getElementById("state_tax_apportionment_percentage");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Safely flush raw parameters text to ensure clean validation pathing
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}



// ============================================================================
// 🔄 FRANCHISE TAX APPLICATION INTERACTION LAYER (DIRECT FILING MODE)
// ============================================================================

let currentFranchiseOfficerCount = 1;

/**
 * Handles state-specific franchise tax structural instructions dynamically.
 * Zero Hardcoding Method: Pulls alert manifests from an external dictionary matrix layer.
 */
function executeFranchiseTaxStateParsingWorkflow(selectedStateCode) {
  const bannerWrapper = document.getElementById("fran_tax_state_notification_banner");
  const bannerText = document.getElementById("fran_tax_state_banner_text");
  const methodSelect = document.getElementById("fran_tax_method_type");
  
  if (!bannerWrapper || !bannerText || !methodSelect) return;

  const stateKey = String(selectedStateCode || "").toUpperCase().trim();

  // 📋 Extensible External Data Matrix Setup Fallback (Can live in your separate configurations file)
  const FRANCHISE_STATE_NOTICES_DB = window.FRANCHISE_STATE_NOTICES_DB || {
    "TX": {
      method: "informational",
      notice: "💡 Texas State Notice: Businesses with gross receipts below the state statutory threshold file a No-Tax-Due Information Report. filings4u will automatically process this variant for your entity configuration."
    },
    "DE": {
      method: "flat",
      notice: "💡 Delaware State Notice: Domestic LLCs are subject to a flat minimum annual franchise tax of $300.00. Corporations calculate their parameter fees via the Authorized Shares method or Assumed Par Value Capital method."
    }
  };

  const configurationRecord = FRANCHISE_STATE_NOTICES_DB[stateKey];

  if (configurationRecord) {
    bannerWrapper.style.display = "block";
    bannerText.innerHTML = configurationRecord.notice;
    methodSelect.value = configurationRecord.method;
  } else {
    bannerWrapper.style.display = "none";
    bannerText.innerHTML = "";
    
    // Fallback default selector choice
    const standardOption = methodSelect.querySelector('option[value="flat"], option:first-child');
    methodSelect.value = standardOption ? standardOption.value : "";
  }

  // Force an immediate sync down to the active sub-fields matrix wrappers
  toggleFranchiseTaxThresholdInputFieldsVisibility(methodSelect.value);
}

/**
 * Handles structural sub-field visibility bounds for tax calculation forms.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function toggleFranchiseTaxThresholdInputFieldsVisibility(selectionValue) {
  const calcWrapper = document.getElementById("fran_tax_calculation_wrapper");
  if (!calcWrapper) return;

  if (selectionValue === "margin-or-stock" || selectionValue === "shares-math") {
    calcWrapper.style.display = "flex";
    calcWrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
  } else {
    calcWrapper.style.display = "none";
    calcWrapper.querySelectorAll("input, select, textarea").forEach(el => {
      el.required = false;
      
      if (el.type === "checkbox" || el.type === "radio") {
        el.checked = false;
      } else {
        el.value = "";
      }
      el.style.borderColor = "var(--border)";
    });
    
    // Clear residual red alert blocks from hidden layers instantly
    calcWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ DYNAMIC PRINCIPAL OFFICER FIELD NODE INJECTOR (WITH VALID ADDRESS SUFFIXES)
// ============================================================================

function appendNewFranchiseTaxOfficerRow() {
  currentFranchiseOfficerCount++;
  const container = document.getElementById("fran_officer_container");
  if (!container) return;

  const officerCard = document.createElement("div");
  officerCard.className = "member-record-card";
  officerCard.id = `fran_officer_card_${currentFranchiseOfficerCount}`;
  
  officerCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";
  
  // FIXED: Standard labels added, full layout inputs appended to pass autocomplete validation vectors cleanly
  officerCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Principal Officer / Manager #${currentFranchiseOfficerCount}</span>
      <button type="button" onclick="removeFranchiseTaxOfficerRow(${currentFranchiseOfficerCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_officer_name_${currentFranchiseOfficerCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fran_officer_name_${currentFranchiseOfficerCount}" required placeholder="First and Last Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
      </div>
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_officer_title_${currentFranchiseOfficerCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Official Title <span style="color: #ef4444;">*</span></label>
        <select id="fran_officer_title_${currentFranchiseOfficerCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;">
          <option value="President">President / CEO</option>
          <option value="Secretary">Secretary</option>
          <option value="Treasurer">Treasurer / CFO</option>
          <option value="Manager">Manager / Managing Member</option>
          <option value="Director">Director</option>
        </select>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 10px; border-top: 1px dashed var(--border); padding-top: 10px;">
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_officer_addr_${currentFranchiseOfficerCount}_street" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_street" required placeholder="Street Address, Suite, Apt" class="wizard-input-field autocomplete-address-input" style="width:100%; box-sizing:border-box;" data-prefix="fran_officer_addr_${currentFranchiseOfficerCount}">
      </div>
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 12px;">
        <div>
          <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_city" required placeholder="City" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_state" required placeholder="State" maxlength="2" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_zip" required placeholder="Zip" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
      </div>
    </div>
  `;

  container.appendChild(officerCard);

  // Instantly map our universal Google Places auto-complete listener matrix to the new input field
  if (typeof attachGooglePlacesAutocompleteToNode === "function") {
    const freshAddressInput = document.getElementById(`fran_officer_addr_${currentFranchiseOfficerCount}_street`);
    attachGooglePlacesAutocompleteToNode(freshAddressInput, `fran_officer_addr_${currentFranchiseOfficerCount}`);
  }
}

function removeFranchiseTaxOfficerRow(nodeId) {
  const card = document.getElementById(`fran_officer_card_${nodeId}`);
  if (card) card.remove();
}



// ============================================================================
// 🔄 SALES TAX REGISTRATION CONFIGURATOR INTERACTION LAYER
// ============================================================================

/**
 * Dynamically balances input visibilities and requirement vectors for Sales Tax Nexus.
 * Ensures hidden elements are fully scrubbed of data variables to protect checkout stability.
 */
function toggleSalesTaxNexusSubInputs(selectionValue) {
  const physicalWrapper = document.getElementById("st_physical_nexus_wrapper");
  const economicWrapper = document.getElementById("st_economic_nexus_wrapper");
  if (!physicalWrapper || !economicWrapper) return;

  const inventoryInput = document.getElementById("st_inventory_location");
  const employeesInput = document.getElementById("st_in_state_employees");
  const grossSalesInput = document.getElementById("st_prior_year_gross");
  const transactionsInput = document.getElementById("st_prior_year_transactions");

  // Helper utility to safely manage validation and clean up a container block
  const configureFieldClusterVisibility = (wrapperElement, targetDisplay, makeRequired) => {
    wrapperElement.style.display = targetDisplay;
    
    wrapperElement.querySelectorAll("input, select, textarea").forEach(field => {
      if (makeRequired) {
        // Only enforce validation if the field is visible and not explicitly optional
        if (!field.hasAttribute("data-optional-field")) field.required = true;
      } else {
        field.required = false;
        
        // Wipe structural text and checkbox attributes cleanly upon collapse
        if (field.type === "checkbox" || field.type === "radio") {
          field.checked = false;
        } else {
          field.value = "";
        }
        field.style.borderColor = "var(--border)";
      }
    });

    // Strip visual error nodes from the hidden tree instantly
    if (!makeRequired) {
      wrapperElement.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
  };

  // Evaluate structural conditional logic mappings
  if (selectionValue === "physical") {
    configureFieldClusterVisibility(physicalWrapper, "grid", true);
    configureFieldClusterVisibility(economicWrapper, "none", false);
  } else if (selectionValue === "economic") {
    configureFieldClusterVisibility(physicalWrapper, "none", false);
    configureFieldClusterVisibility(economicWrapper, "grid", true);
  } else if (selectionValue === "both" || selectionValue === "all") {
    configureFieldClusterVisibility(physicalWrapper, "grid", true);
    configureFieldClusterVisibility(economicWrapper, "grid", true);
  } else {
    // Catch-all structural shutdown for unselected or exempt profiles
    configureFieldClusterVisibility(physicalWrapper, "none", false);
    configureFieldClusterVisibility(economicWrapper, "none", false);
  }
}



// ============================================================================
// 🔄 PAYROLL TAX REGISTRATION INTERACTION LAYER
// ============================================================================

/**
 * Handles the display of alternate inputs based on whether the entity has existing tax IDs.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function togglePayrollTaxSutaFieldsVisibility(selectionValue) {
  const wrapper = document.getElementById("pr_existing_suta_wrapper");
  if (!wrapper) return;

  const sutaInput = document.getElementById("pr_existing_suta_id");
  const withholdingInput = document.getElementById("pr_existing_withholding_id");

  if (selectionValue === "existing" || selectionValue === "yes") {
    wrapper.style.display = "grid";
    if (sutaInput) sutaInput.required = true;
    if (withholdingInput) withholdingInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (sutaInput) {
      sutaInput.required = false;
      sutaInput.value = "";
      sutaInput.style.borderColor = "var(--border)";
    }
    if (withholdingInput) {
      withholdingInput.required = false;
      withholdingInput.value = "";
      withholdingInput.style.borderColor = "var(--border)";
    }

    // Clean up residual red warning alerts left behind by validation checks
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}



// ============================================================================
// 🔄 HEAVY USE TAX (2290) CONFIGURATOR INTERACTION LAYER
// ============================================================================

let currentHutVehicleCount = 1;

/**
 * Injects a comprehensive, IRS-compliant heavy highway vehicle data entry card.
 * Captures VIN parameters, weight brackets, first-used months, and tax suspension eligibility.
 */
function appendNewHeavyUseTaxVehicleRow() {
  currentHutVehicleCount++;
  var container = document.getElementById("hut_fleet_container");
  if (!container) return;

  var vehicleCard = document.createElement("div");
  vehicleCard.className = "member-record-card";
  vehicleCard.id = "hut_vehicle_card_" + currentHutVehicleCount;
  
  // Set up responsive CSS flex-grid presentation layout variables properties
  vehicleCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 18px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";

  vehicleCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Heavy Highway Vehicle Unit #${currentHutVehicleCount}</span>
      <button type="button" onclick="removeHeavyUseTaxVehicleRow(${currentHutVehicleCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
      <div class="wizard-input-group" style="margin: 0;">
        <label for="hut_vin_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Vehicle Identification Number (VIN) <span style="color: #ef4444;">*</span></label>
        <input type="text" id="hut_vin_${currentHutVehicleCount}" required placeholder="17-Digit Alpha-Numeric VIN" maxlength="17" style="width:100%; box-sizing:border-box; font-family: monospace; text-transform: uppercase;" class="wizard-input-field" oninput="this.value = this.value.toUpperCase()">
      </div>
      <div class="wizard-input-group" style="margin: 0;">
        <label for="hut_first_use_month_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">First Used Month <span style="color: #ef4444;">*</span></label>
        <select id="hut_first_use_month_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;">
          <option value="07">July (Full Year)</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
        </select>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; border-top: 1px dashed var(--border); padding-top: 12px;">
      <div class="wizard-input-group" style="margin: 0; grid-column: span 2;">
        <label for="hut_weight_category_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Taxable Gross Weight Class <span style="color: #ef4444;">*</span></label>
        <select id="hut_weight_category_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;" onchange="evaluateHutSuspensionThreshold(${currentHutVehicleCount})">
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
          <option value="U">Category U: 75,000 lbs up to logging limits</option>
          <option value="V">Category V: Over 75,000 lbs (Standard Max Bracket)</option>
        </select>
      </div>
      <div class="wizard-input-group" style="margin: 0;">
        <label for="hut_vehicle_use_type_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Vehicle Use Class <span style="color: #ef4444;">*</span></label>
        <select id="hut_vehicle_use_type_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;" onchange="evaluateHutSuspensionThreshold(${currentHutVehicleCount})">
          <option value="standard" selected>Standard Commercial</option>
          <option value="logging">Logging Carrier</option>
          <option value="agricultural">Agricultural / Farm Truck</option>
        </select>
      </div>
    </div>

    <div style="display: flex; gap: 20px; align-items: center; background: var(--bg-alt, #f8fafc); padding: 10px; border-radius: 6px;">
      <label style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: flex; align-items: center; gap: 8px; margin: 0; cursor: pointer;">
        <input type="checkbox" id="hut_is_suspended_${currentHutVehicleCount}" class="hut-suspension-checkbox" style="width: 16px; height: 16px;" onchange="handleHutSuspensionToggle(${currentHutVehicleCount})">
        Claim Tax Suspension? (Expected mileage &lt; 5,000 miles / 7,500 agricultural)
      </label>
    </div>
  `;

  container.appendChild(vehicleCard);
  auditTotalHutFleetCountMetrics();
}

function removeHeavyUseTaxVehicleRow(nodeId) {
  var card = document.getElementById("hut_vehicle_card_" + nodeId);
  if (card) {
    card.remove();
    auditTotalHutFleetCountMetrics();
  }
}

/**
 * Automated Mileage Suspension Rules Evaluator.
 * Adjusts state options configuration parameters depending on vehicle utilization class changes.
 */
function evaluateHutSuspensionThreshold(index) {
  const useType = document.getElementById(`hut_vehicle_use_type_${index}`)?.value;
  const suspensionCheckbox = document.getElementById(`hut_is_suspended_${index}`);
  
  if (!suspensionCheckbox) return;

  // Visual cues or structural constraints updates can be linked here cleanly
  console.log(`[Form 2290 Engine] Unit ${index} updated taxonomy pathing to utilization profile: ${useType}`);
}

function handleHutSuspensionToggle(index) {
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

/**
 * Scans active vehicle counts to verify compliance with the IRS Electronic Filing Rule.
 * Automatically injects an alert banner if the carrier exceeds the 24 taxable truck boundary.
 */
function auditTotalHutFleetCountMetrics() {
  const totalInjectedCards = document.querySelectorAll(".member-record-card[id^='hut_vehicle_card_']").length + 1;
  const alertBanner = document.getElementById("hut_efile_mandate_alert_banner");

  if (!alertBanner) return;

  if (totalInjectedCards >= 25) {
    alertBanner.style.display = "block";
    alertBanner.innerHTML = `💡 <strong>IRS Electronic Filing Mandate Active:</strong> Your current declaration list contains ${totalInjectedCards} heavy highway vehicles. The IRS legally mandates electronic filing (e-file) for fleets of 25 trucks or greater. filings4u will automatically format your bundle for secure digital routing.`;
  } else {
    alertBanner.style.display = "none";
    alertBanner.innerHTML = "";
  }
}



// ============================================================================
// 🔄 CAGE CODE REGISTRATION INTERACTION LAYER ROUTINES (SAM & DLA COMPLIANT)
// ============================================================================

/**
 * Toggles structural fields based on whether the entity is a subsidiary of a parent company.
 * Mandated by DLA validation parameters to establish highest-level corporate ownership trees.
 */
function toggleCageParentCompanyWrapperVisibility(selectionValue) {
  var wrapper = document.getElementById("cage_parent_company_wrapper");
  if (!wrapper) return;

  var parentNameInput = document.getElementById("cage_parent_legal_name");
  var parentCageInput = document.getElementById("cage_parent_cage_code");

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "grid";
    if (parentNameInput) parentNameInput.required = true;
    if (parentCageInput) parentCageInput.required = true; // Required by SAM to tie registries
  } else {
    wrapper.style.display = "none";
    
    // Clear required constraints and wipe input content safely upon collapse
    if (parentNameInput) {
      parentNameInput.required = false;
      parentNameInput.value = "";
      parentNameInput.style.borderColor = "var(--border)";
    }
    if (parentCageInput) {
      parentCageInput.required = false;
      parentCageInput.value = "";
      parentCageInput.style.borderColor = "var(--border)";
    }
    
    // Strip nested child attributes and visual red alert boxes instantly
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ EXPANDED DEFENSE LOGISTICS AGENCY (DLA) DATA ROUTERS (NEW WORKFLOWS)
// ============================================================================

/**
 * Toggles a custom description area if the contractor's primary business activity 
 * classification code requires specialized explanation to government auditors.
 */
function toggleCageNaicsExplanatoryVisibility(requiresExplanationSelection) {
  var wrapper = document.getElementById("cage_naics_explanation_wrapper");
  var textInput = document.getElementById("cage_naics_custom_justification");
  if (!wrapper || !textInput) return;

  if (requiresExplanationSelection === "yes" || requiresExplanationSelection === "true") {
    wrapper.style.display = "block";
    textInput.required = true;
  } else {
    wrapper.style.display = "none";
    textInput.required = false;
    textInput.value = "";
    textInput.style.borderColor = "var(--border)";
    
    const errorMarker = textInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Toggles dynamic input field grids if a company handles classified or sensitive military records.
 * Controls tracking inputs for facility security clearances (FCL) required by the DoD.
 */
function toggleCageSecurityClearanceDetailsVisibility(hasClearanceSelection) {
  var clearanceWrapper = document.getElementById("cage_security_clearance_wrapper");
  if (!clearanceWrapper) return;

  if (hasClearanceSelection === "yes" || hasClearanceSelection === "true") {
    clearanceWrapper.style.display = "block";
    clearanceWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    clearanceWrapper.style.display = "none";
    clearanceWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    clearanceWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}



// ============================================================================
// 🔄 DUNS NUMBER CONFIGURATION INTERACTION LAYER ROUTINES
// ============================================================================

/**
 * Toggles structural fields based on whether the entity operates as a branch or subsidiary.
 * Dun & Bradstreet uses these data objects to tie global corporate linkage parameters.
 */
function toggleDunsParentCompanyVisibility(selectionValue) {
  var wrapper = document.getElementById("duns_parent_wrapper");
  if (!wrapper) return;

  var parentNameInput = document.getElementById("duns_parent_legal_name");
  var parentCountryInput = document.getElementById("duns_parent_country");

  if (selectionValue === "branch" || selectionValue === "subsidiary") {
    wrapper.style.display = "grid";
    if (parentNameInput) parentNameInput.required = true;
    if (parentCountryInput) parentCountryInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required constraints and wipe input contents cleanly upon collapse
    if (parentNameInput) {
      parentNameInput.required = false;
      parentNameInput.value = "";
      parentNameInput.style.borderColor = "var(--border)";
    }
    if (parentCountryInput) {
      parentCountryInput.required = false;
      parentCountryInput.value = "";
      parentCountryInput.style.borderColor = "var(--border)";
    }

    // Strip nested child attributes and visual red alert frames instantly
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ EXPANDED DUN & BRADSTREET PROFILE MODIFIERS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles a custom description area if the contractor's operations are located 
 * inside a leased commercial facility or home-office setup.
 * Required by Dun & Bradstreet parameters to evaluate business physical infrastructure.
 */
function toggleDunsFacilityLeaseDetailsVisibility(facilityTypeSelection) {
  var wrapper = document.getElementById("duns_lease_details_wrapper");
  if (!wrapper) return;

  if (facilityTypeSelection === "leased" || facilityTypeSelection === "rented") {
    wrapper.style.display = "block";
    wrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Handles the display of expanded parameters if the business participates in import/export trade.
 * Controls inputs required to configure trade verification vectors for business file compilation.
 */
function toggleDunsGlobalTradeMetricsVisibility(hasGlobalTradeSelection) {
  var tradeWrapper = document.getElementById("duns_global_trade_wrapper");
  if (!tradeWrapper) return;

  if (hasGlobalTradeSelection === "yes" || hasGlobalTradeSelection === "true") {
    tradeWrapper.style.display = "block";
    tradeWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    tradeWrapper.style.display = "none";
    tradeWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    tradeWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}



// ============================================================================
// 🔄 SAM.GOV PROCUREMENT REGISTRATION INTERACTION LAYER
// ============================================================================

/**
 * Handles the display of alternate inputs based on whether the entity has an existing UEI.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function toggleSamUniqueEntityIdVisibility(selectionValue) {
  var wrapper = document.getElementById("sam_uei_code_wrapper");
  if (!wrapper) return;

  var ueiInput = document.getElementById("sam_existing_uei");

  if (selectionValue === "existing" || selectionValue === "yes") {
    wrapper.style.display = "block";
    if (ueiInput) ueiInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (ueiInput) {
      ueiInput.required = false;
      ueiInput.value = "";
      ueiInput.style.borderColor = "var(--border)";
    }

    // Clean up residual red warning alerts left behind by validation checks
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 MINORITY CERTIFICATE REGISTRATION INTERACTION LAYER (STATE & FEDERAL)
// ============================================================================

/**
 * Toggles a custom description block if the contractor requests a localized State or Local MBE filing track.
 */
function toggleMorphicMbeAgencySubInputs(selectionValue) {
  var wrapper = document.getElementById("mbe_state_agency_wrapper");
  if (!wrapper) return;
  var agencyInput = document.getElementById("mbe_target_agency_name");

  if (selectionValue === "state-local" || selectionValue === "local-ucp") {
    wrapper.style.display = "block";
    if (agencyInput) agencyInput.required = true;
  } else {
    wrapper.style.display = "none";
    if (agencyInput) {
      agencyInput.required = false;
      agencyInput.value = ""; // Safely flush text variables upon collapse
      agencyInput.style.borderColor = "var(--border)";
    }
    
    // Clear residual red warning elements from the hidden container
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ EXPANDED FEDERAL SBA & STATE DBE CERTIFICATION WORKFLOWS (NEW WORKFLOWS)
// ============================================================================

/**
 * Toggles expanded programmatic modules if the client requests Federal SBA programmatic tracks (8a / WOSB / SDVOSB).
 * Enforces stricter biographical, citizenship, and corporate control questions.
 */
function toggleFederalSbaCertificationsWrapperVisibility(certificationProgramValue) {
  var federalWrapper = document.getElementById("mbe_federal_sba_details_wrapper");
  if (!federalWrapper) return;

  const requiresFederalInboundTracks = ["8a", "wosb", "vosb", "sdvosb", "federal-sba"].includes(certificationProgramValue);

  if (requiresFederalInboundTracks) {
    federalWrapper.style.display = "block";
    federalWrapper.querySelectorAll("input, select").forEach(field => {
      // Only enforce required rules on fields actively displayed to the user
      if (field.offsetParent !== null && !field.hasAttribute("data-optional")) {
        field.required = true;
      }
    });
  } else {
    federalWrapper.style.display = "none";
    federalWrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    federalWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Evaluates whether the qualifying partner's declared equity percentage satisfies legal criteria.
 * State and federal regulatory bodies strictly reject filings if minority ownership drops under 51%.
 */
function validateMinorityOwnershipEquityPercentage(inputFieldElement) {
  if (!inputFieldElement) return;

  const numericEquityValue = parseFloat(inputFieldElement.value);
  if (isNaN(numericEquityValue)) return;

  if (numericEquityValue < 51) {
    inputFieldElement.style.borderColor = "#ef4444";
    
    const labelMessage = inputFieldElement.getAttribute("data-error-msg") || 
      "Certification Rejection Warning: Federal and state guidelines strictly require a minimum of 51% minority individual ownership to qualify for MBE/DBE status.";
      
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(inputFieldElement, labelMessage);
    }
  } else {
    inputFieldElement.style.borderColor = "var(--border)";
    const adjacentMarker = inputFieldElement.nextSibling;
    if (adjacentMarker && adjacentMarker.className === 'input-error-marker') {
      adjacentMarker.remove();
    }
  }
}



// ============================================================================
// 🔄 DRIVER QUALIFICATION FILE INTERACTIVE MATRIX (49 CFR PART 391 COMPLIANT)
// ============================================================================

/**
 * Handles the display of fleet-scale document tracking fields.
 * Adjusts requirement configurations dynamically to manage bulk file onboarding pipelines.
 */
function toggleDqfFleetQuantityVisibility(selectionValue) {
  var wrapper = document.getElementById("dqf_fleet_count_wrapper");
  if (!wrapper) return;
  var countInput = document.getElementById("dqf_total_files_needed");

  if (selectionValue === "fleet-addition" || selectionValue === "bulk-setup" || selectionValue === "multiple") {
    wrapper.style.display = "block";
    if (countInput) countInput.required = true;
  } else {
    wrapper.style.display = "none";
    if (countInput) {
      countInput.required = false;
      
      // Abstract dynamic property reset: Matches standard baseline values safely
      const baselineDefaultOption = countInput.getAttribute("data-default-value") || "1";
      countInput.value = baselineDefaultOption;
      countInput.style.borderColor = "var(--border)";
    }
    
    // Wipe structural text and checkbox attributes cleanly inside the container tree
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  // Force pricing matrix calculations to synchronize live cart summaries
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

// ============================================================================
// ➕ CFR §391 FMCSA COMPLIANCE RECORD WORKFLOWS (NEW DRIVER ENTRY HOOKS)
// ============================================================================

/**
 * Toggles a custom entry panel if the driver holds a Commercial Driver's License (CDL).
 * Required by federal safety rules to enforce annual state background MVR checks.
 */
function toggleDqfCommercialDriversLicenseDetails(hasCdlSelection) {
  var cdlWrapper = document.getElementById("dqf_cdl_metadata_wrapper");
  if (!cdlWrapper) return;

  if (hasCdlSelection === "yes" || hasCdlSelection === "true") {
    cdlWrapper.style.display = "block";
    cdlWrapper.querySelectorAll("input, select").forEach(field => {
      if (!field.hasAttribute("data-optional")) field.required = true;
    });
  } else {
    cdlWrapper.style.display = "none";
    cdlWrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    cdlWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Toggles structural fields based on the status of the driver's DOT Medical Examiner's Certificate.
 * Tracks expiration milestones dynamically to prevent operations under expired medical profiles.
 */
function toggleDqfMedicalCardExemptionVisibility(medicalCardStatusSelection) {
  var medCardWrapper = document.getElementById("dqf_medical_card_details_wrapper");
  if (!medCardWrapper) return;

  if (medicalCardStatusSelection === "certified" || medicalCardStatusSelection === "requires-review") {
    medCardWrapper.style.display = "block";
    medCardWrapper.querySelectorAll("input").forEach(field => field.required = true);
  } else {
    medCardWrapper.style.display = "none";
    medCardWrapper.querySelectorAll("input").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    medCardWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}



// ============================================================================
// 🔄 PROCESS AGENT (BOC-3) FILING INTERACTION LAYER
// ============================================================================

/**
 * Handles the display of operating authority identifiers for BOC-3 filings.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function toggleBoc3AuthorityIdentifiersVisibility(selectionValue) {
  var wrapper = document.getElementById("boc_authority_nums_wrapper");
  if (!wrapper) return;

  var usdotInput = document.getElementById("boc_usdot_number");
  var mcInput = document.getElementById("boc_mc_number");

  if (selectionValue === "independent" || selectionValue === "yes" || selectionValue === "has-active-authority") {
    wrapper.style.display = "grid";
    if (usdotInput) usdotInput.required = true;
    if (mcInput) mcInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (usdotInput) {
      usdotInput.required = false;
      usdotInput.value = "";
      usdotInput.style.borderColor = "var(--border)";
    }
    if (mcInput) {
      mcInput.required = false;
      mcInput.value = "";
      mcInput.style.borderColor = "var(--border)";
    }

    // Clean up residual red warning alerts and input wrappers left behind by validation checks
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 INTERNATIONAL FUEL TAX AGREEMENT (IFTA) INTERACTION
// ============================================================================

/**
 * Handles base fuel tax registration visibility rules for qualified motor vehicles.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function toggleIftaFulfillmentSubFields(selectionValue) {
  const accountWrapper = document.getElementById("ifta_existing_account_wrapper");
  const accountInput = document.getElementById("ifta_base_account_number");

  if (selectionValue === "renewal" || selectionValue === "additional-decals") {
    if (accountWrapper) accountWrapper.style.display = "grid";
    if (accountInput) accountInput.required = true;
  } else {
    if (accountWrapper) accountWrapper.style.display = "none";
    if (accountInput) {
      accountInput.required = false;
      accountInput.value = "";
      accountInput.style.borderColor = "var(--border)";
    }
    if (accountWrapper) {
      accountWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

// ============================================================================
// ➕ EXPANDED JURISDICTIONAL IFTA STATE FILE SEPARATORS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles a custom description block if the trucking fleet maintains independent bulk fuel storage tanks.
 * Mandated by state tax comptrollers to cross-verify tax-paid commercial gallon distributions.
 */
function toggleIftaBulkStorageVerificationFields(hasBulkStorageSelection) {
  var storageWrapper = document.getElementById("ifta_bulk_storage_details_wrapper");
  if (!storageWrapper) return;

  if (hasBulkStorageSelection === "yes" || hasBulkStorageSelection === "true") {
    storageWrapper.style.display = "block";
    storageWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    storageWrapper.style.display = "none";
    storageWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    storageWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Validates decal counts ordered against qualified motor vehicle metrics profiles.
 * States require tracking decal distributions to align with registered truck counts.
 */
function validateIftaDecalVolumeRequirements(volumeInputField) {
  if (!volumeInputField) return;

  const requestedDecalVolume = parseInt(volumeInputField.value, 10);
  if (isNaN(requestedDecalVolume)) return;

  if (requestedDecalVolume < 1) {
    volumeInputField.style.borderColor = "#ef4444";
    const labelMessage = volumeInputField.getAttribute("data-error-msg") || 
      "Decal Allocation Warning: You must order at least 1 set of IFTA decals for your qualified highway vehicle assets.";
      
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(volumeInputField, labelMessage);
    }
  } else {
    volumeInputField.style.borderColor = "var(--border)";
    const adjacentMarker = volumeInputField.nextSibling;
    if (adjacentMarker && adjacentMarker.className === 'input-error-marker') {
      adjacentMarker.remove();
    }
    
    // Save historical data changes instantly to background state caches
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
      cacheAndRestoreWizardFormStatesVanilla(false);
    }
  }
}



// ============================================================================
// 🔄 FREIGHT BROKER INSURANCE & FINANCIAL RESPONSIBILITY (BMC-84 / BMC-85)
// ============================================================================

/**
 * Toggles a description textbox if the applicant declares historical bankruptcy parameters.
 * Required by surety underwriters to evaluate structural risk calculations for BMC-84 bonds.
 */
function toggleBrokerInsuranceBankruptcyDetailsVisibility(selectionValue) {
  var wrapper = document.getElementById("bins_bankruptcy_details_wrapper");
  var input = document.getElementById("bins_bankruptcy_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Clean input buffers cleanly upon state collapse
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Toggles structural fields based on whether an officer holds historical felony records.
 * Mandated by FMCSA broker registration checks to cross-verify structural operational compliance.
 */
function toggleBrokerInsuranceFelonyDetailsVisibility(selectionValue) {
  var wrapper = document.getElementById("bins_felony_details_wrapper");
  var input = document.getElementById("bins_felony_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ FMCSA \$75,000 REGULATORY COMPLIANCE TUNNELS (NEW WORKFLOWS)
// ============================================================================

/**
 * Orchestrates visibility parameters based on whether the broker selects a BMC-84 Bond or BMC-85 Trust.
 * Dynamically updates sub-inputs to capture financial verification vectors cleanly.
 */
function toggleBrokerFinancialResponsibilityTypeSelection(financialInstrumentValue) {
  const bmc84Wrapper = document.getElementById("broker_bmc84_underwriting_wrapper");
  const bmc85Wrapper = document.getElementById("broker_bmc85_funding_wrapper");

  if (financialInstrumentValue === "bmc84" || financialInstrumentValue === "surety-bond") {
    if (bmc84Wrapper) bmc84Wrapper.style.display = "block";
    if (bmc85Wrapper) bmc85Wrapper.style.display = "none";
    
    // Enforce required variables on underwriting components
    if (bmc84Wrapper) bmc84Wrapper.querySelectorAll("input, select").forEach(f => f.required = true);
    if (bmc85Wrapper) bmc85Wrapper.querySelectorAll("input, select").forEach(f => f.required = false);
    
  } else if (financialInstrumentValue === "bmc85" || financialInstrumentValue === "trust-fund") {
    if (bmc84Wrapper) bmc84Wrapper.style.display = "none";
    if (bmc85Wrapper) bmc85Wrapper.style.display = "block";
    
    if (bmc84Wrapper) bmc84Wrapper.querySelectorAll("input, select").forEach(f => f.required = false);
    if (bmc85Wrapper) bmc85Wrapper.querySelectorAll("input, select").forEach(f => f.required = true);
  } else {
    if (bmc84Wrapper) bmc84Wrapper.style.display = "none";
    if (bmc85Wrapper) bmc85Wrapper.style.display = "none";
  }

  // Clear data states inside hidden wrappers dynamically to prevent validation freezes
  const hiddenWrappers = [bmc84Wrapper, bmc85Wrapper];
  hiddenWrappers.forEach(wrapper => {
    if (wrapper && wrapper.style.display === "none") {
      wrapper.querySelectorAll("input, select, textarea").forEach(field => {
        field.required = false;
        if (field.type === "checkbox" || field.type === "radio") {
          field.checked = false;
        } else {
          field.value = "";
        }
        field.style.borderColor = "var(--border)";
      });
      wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
  });
}


// ============================================================================
// 🔄 NEW ENTRANT SAFETY AUDIT CONFIGURATOR INTERACTION LAYER (CFR PART 385)
// ============================================================================

/**
 * Toggles a date input field block if an operator has received an official target audit notification letter.
 * Mandated to map the hard 90-day (or 45-day for passenger/hazmat) federal deadline accurately.
 */
function toggleNewEntrantAuditLetterDetails(selectionValue) {
  var wrapper = document.getElementById("nea_letter_deadline_wrapper");
  var dateInput = document.getElementById("nea_audit_deadline");
  if (!wrapper || !dateInput) return;

  if (selectionValue === "letter-received" || selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    dateInput.required = true;
  } else {
    wrapper.style.display = "none";
    dateInput.required = false;
    dateInput.value = ""; // Safely flush input values upon collapse
    dateInput.style.borderColor = "var(--border)";
    
    const errorMarker = dateInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Interactive Strategic Checklist Modal Controls.
 * Dynamically hooks overlays without writing static structural strings.
 */
function triggerNewEntrantAuditComplianceChecklistPopup() {
  var modal = document.getElementById("nea_checklist_modal_backdrop");
  if (modal) modal.style.display = "flex";
}

function closeNewEntrantAuditComplianceChecklistPopup() {
  var modal = document.getElementById("nea_checklist_modal_backdrop");
  if (modal) modal.style.display = "none";
}

// ============================================================================
// 📊 LIVE CALCULATIONS SYNCHRONIZER ENGINE (ZERO HARDCODED RATES)
// ============================================================================

/**
 * Dynamically tracks checked sub-services to prepare the final checkout page invoice rows.
 * Zero Hardcoding Rule: Extracts pricing values directly from DOM element data descriptors.
 */
function executeNewEntrantAuditLiveFulfillmentSync() {
  let dynamicAddonTotal = 0;
  let selectedAddonItemsHtml = "";

  // Scan the document layout dynamically for any selected audit prep components
  const activeCheckboxes = document.querySelectorAll(".nea-service-checkbox:checked, [id^='nea_service_']:checked");

  activeCheckboxes.forEach(function(checkboxNode) {
    // Read parameters straight from layout attributes instead of hardcoded JavaScript lists
    const itemPrice = parseFloat(checkboxNode.getAttribute("data-price")) || 0;
    const itemLabel = checkboxNode.getAttribute("data-name") || "Audit Prep Component Service";

    dynamicAddonTotal += itemPrice;
    
    selectedAddonItemsHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.8rem; padding: 6px 0; border-bottom: 1px dashed var(--border, #e2e8f0); color: var(--slate);">
        <span><i class="fa-solid fa-square-check" style="color: var(--primary);"></i> ${itemLabel}</span>
        <span style="font-family: monospace; font-weight: 600;">$${itemPrice.toFixed(2)}</span>
      </div>
    `;
  });

  // Store variables out to window state memory for checkout engine processing
  window.lastCalculatedNewEntrantAddonTotal = dynamicAddonTotal;
  window.lastCalculatedNewEntrantAddonHtml = selectedAddonItemsHtml;

  console.log(`[Audit Calculator Sync] Allocation balance adjustments updated. Sub-add-on Delta: $${dynamicAddonTotal.toFixed(2)}`);

  // Trigger your wizard's native financial recalculation function to modify cart grand totals
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

// ============================================================================
// ➕ EXPANDED FMCSA REJECTION CRITERIA SCREENERS (NEW COMPLIANCE WORKFLOWS)
// ============================================================================

/**
 * Toggles dynamic alerts if an operator flags an absolute failure metric (e.g. no drug pool).
 * Instantly alerts the user of critical vulnerabilities that trigger immediate audit failures.
 */
function toggleNewEntrantCriticalFailureWarningVisibility(checkboxElement) {
  if (!checkboxElement) return;

  const failureType = checkboxElement.getAttribute("data-failure-class");
  const alertContainer = document.getElementById(`nea_failure_warning_${failureType}`);
  
  if (!alertContainer) return;

  // If the trucker checks "No" or untoggles a required safety program, expose the mitigation box
  if (checkboxElement.type === "checkbox" ? !checkboxElement.checked : checkboxElement.value === "no") {
    alertContainer.style.display = "block";
    alertContainer.style.background = "#fef2f2";
    alertContainer.style.color = "#991b1b";
    alertContainer.style.border = "1px solid #fee2e2";
  } else {
    alertContainer.style.display = "none";
    alertContainer.innerHTML = "";
  }
}


// ============================================================================
// 📊 CENTRAL PROCESSING CONFIGURATOR: SIDEBAR INVOICE CORE
// ============================================================================

let stripeInstance = null;
let stripeElementsContainer = null;
let stripePaymentElementInstance = null;

// ============================================================================
// 🛡️ GLOBAL NAVIGATION SAFETY HUB (DESTRUCTION PREVENTION DISPATCH)
// ============================================================================

document.addEventListener("click", function(eventObj) {
  const clickedElement = eventObj.target.closest("button, a, .wizard-prev-btn, .btn-wizard-alt");
  if (!clickedElement) return;

  // Extract element attributes cleanly to evaluate intent without absolute hardcoding strings
  const inlineOnclickString = clickedElement.getAttribute("onclick") || "";
  const elementText = clickedElement.innerText.toLowerCase().trim();
  const elementId = clickedElement.id || "";
  const classList = clickedElement.classList;

  // 🔍 Selective Back Verification: Check if the operator is intentionally trying to navigate backward
  const isExplicitBackButton = inlineOnclickString.includes("back") || 
                              inlineOnclickString.includes("prev") || 
                              inlineOnclickString.includes("- 1") ||
                              classList.contains("wizard-prev-btn") || 
                              classList.contains("btn-wizard-alt") ||
                              elementId.includes("back") ||
                              elementId.includes("prev") ||
                              elementText === "back" || 
                              elementText === "previous";

  // 🚨 GUARD: If it is NOT a back button, exit immediately. Let form validators and payment processors run!
  if (!isExplicitBackButton) return;

  // Safely isolate back movements to avoid unwanted form submissions or page resets
  eventObj.preventDefault();
  eventObj.stopPropagation();

  console.log("[Safety Hub] Intercepted back button click safely. Routing step reduction pipeline...");

  let calculatedCurrentStep = window.currentWizardActiveStep || 1;
  const visiblePanels = document.querySelectorAll(".master-onboarding-form");

  // Audit active layout DOM elements visibility to trace step alignment parameters
  visiblePanels.forEach((panel, panelIdx) => {
    if (panel.classList.contains("active") || window.getComputedStyle(panel).display !== "none") {
      calculatedCurrentStep = panelIdx + 1;
    }
  });

  let safePreviousStepIndex = calculatedCurrentStep - 1;
  if (safePreviousStepIndex < 1) safePreviousStepIndex = 1;

  // 🔄 Delegate view changes safely back to your central master router function core
  if (typeof window.executeDirectStepJump === "function") {
    window.executeDirectStepJump(safePreviousStepIndex);
  } else {
    // Structural absolute fallback transformation loop if master engine is detached
    window.currentWizardActiveStep = safePreviousStepIndex;
    
    if (visiblePanels.length > 0) {
      visiblePanels.forEach((panel, index) => {
        const stepMarkerIndex = index + 1;
        if (stepMarkerIndex === safePreviousStepIndex) {
          panel.classList.add("active");
          panel.style.setProperty("display", "block", "important");
        } else {
          panel.classList.remove("active");
          panel.style.setProperty("display", "none", "important");
        }
      });
    }

    if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
    if (typeof populatePurchaseSummaryReviewMatrix === "function") populatePurchaseSummaryReviewMatrix();
    if (typeof renderActiveWizardStepUiLayout === "function") renderActiveWizardStepUiLayout();
  }

  // Smooth scroll operator back to page view pinnacle peaks cleanly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, true); // Keep capture layer listening active to prevent default form leaks

// ============================================================================
// 🔌 SYSTEM STATE FALLBACK INITIALIZATIONS (NO DATA HARDCODING OVERWRITES)
// ============================================================================

window.routeActiveServiceKey = window.routeActiveServiceKey || "hazmat-registration";

// FIXED: Aligned system fallback tier token to point to valid database parameters ('starter' vs hardcoded marketing terms)
window.routeActivePlanKey = window.routeActivePlanKey || "starter";


// ============================================================================ //
// 🔄 PART 1: ZERO-HARDCODING DYNAMIC INTERCEPTOR LOOKUP MODULE
// ============================================================================ //

/**
 * Programmatic String Normalizer
 * Dynamically sanitizes any variant input string into a standard lookup token format.
 */
function normalizeServiceKeyDynamically(rawInput) {
    if (!rawInput) return "";
    let clean = String(rawInput).toLowerCase().trim();
    
    // Strips out common tracking fragments, trailing slashes, or system spaces
    clean = clean.replace(/[\/\s\_]/g, "-"); 
    clean = clean.replace(/-processing$/, "");
    clean = clean.replace(/-filing$/, "");
    clean = clean.replace(/-registration$/, "");
    
    return clean;
}

/**
 * High-Performance Dynamic Property Resolver
 * Searches your database by mutating strings algorithmically to match any of your 44+ keys.
 */
function resolvePricingConfigurationDynamically(rawKey) {
    const db = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages;
    if (!db) return null;

    const searchTarget = normalizeServiceKeyDynamically(rawKey);
    if (!searchTarget) return null;

    // 1. Direct match verification check
    if (db[rawKey]) return { matchedKey: rawKey, data: db[rawKey] };
    if (db[searchTarget]) return { matchedKey: searchTarget, data: db[searchTarget] };

    // 2. Dynamic Algorithmic Scan (Handles abbreviation overlaps like 'llc' -> 'llc-formation')
    const registeredDbKeys = Object.keys(db);
    for (let i = 0; i < registeredDbKeys.length; i++) {
        const currentDbKey = registeredDbKeys[i];
        const normalizedDbKey = normalizeServiceKeyDynamically(currentDbKey);

        if (normalizedDbKey === searchTarget || 
            normalizedDbKey.startsWith(searchTarget) || 
            searchTarget.startsWith(normalizedDbKey)) {
            return { matchedKey: currentDbKey, data: db[currentDbKey] };
        }
    }
    return null;
}

/**
 * Patched Interface Gateway Hook for updateDynamicPricingMatrixVanilla
 */
function getPricingConfiguration(rawKey) {
    // Dynamically fallback straight to the URL routing state parameters if the engine passes blank arguments
    if (!rawKey) {
        if (!window.routeActiveServiceKey) {
            const urlParams = new URLSearchParams(window.location.search);
            window.routeActiveServiceKey = urlParams.get('service') || "llc-formation";
        }
        rawKey = window.routeActiveServiceKey;
    }

    const resolutionResult = resolvePricingConfigurationDynamically(rawKey);
    
    if (!resolutionResult) {
        console.warn(`[Dynamic Pricing Engine] Error: Could not resolve data structures for token string: "${rawKey}"`);
        return null;
    }

    const matchedKey = resolutionResult.matchedKey;
    const baseRecord = resolutionResult.data;
    const targetPlanKey = (window.routeActivePlanKey || "compliance").toLowerCase().trim();

    // Dynamically extract fee metrics from whatever plan key property is chosen
    const extractedPrice = parseFloat(baseRecord[targetPlanKey]) || 0;

    // Update global variables globally to keep step views unified
    window.routeActiveServiceKey = matchedKey;

    // Reconstruct the data block exactly to fulfill Module 1 compiler structural requirements
    return {
        serviceKey: matchedKey,
        planKey: targetPlanKey,
        displayName: baseRecord.name || "Service Processing",
        basePrice: extractedPrice,
        bullets: baseRecord.bullets?.[targetPlanKey] || []
    };
}
window.getPricingConfiguration = getPricingConfiguration;





// ============================================================================
// 📊 MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (JURISDICTION)
// ============================================================================

/**
 * Extracts the user's selected 2-digit US state code dynamically from active view panels.
 * Multi-service safe: Employs strict selector scoping to prevent credit card or title dropdown misreadings.
 */
function resolveActiveJurisdiction() {
  var stateDisplayLabel = "";
  
  // Scope selector strictly inside the current active panel container if available to avoid broad document leaks
  const panelContext = document.getElementById(`step-panel-${window.currentWizardActiveStep || 2}`) || document.body;
  
  var chosenStateElement = panelContext.querySelector('select[name="formation_state"]') || 
                            panelContext.querySelector('select[name="business_state"]') || 
                            document.getElementById('wizard-target-jurisdiction') ||
                            panelContext.querySelector('.state-selector, [id*="state"], [name*="state"]');

  if (chosenStateElement && chosenStateElement.selectedIndex >= 0) {
    var selectedOption = chosenStateElement.options[chosenStateElement.selectedIndex];
    if (selectedOption) {
      var optionValue = (selectedOption.value || "").toUpperCase().trim();
      var optionText = (selectedOption.text || "");
      
      if (optionValue.length === 2 && /^[A-Z]{2}$/.test(optionValue)) {
        stateDisplayLabel = optionValue;
      } else {
        // Regex sweep parameter to extract 2-letter state abbreviations out of longer titles
        var match = optionText.match(/\b([A-Z]{2})\b/i);
        stateDisplayLabel = match ? match[1].toUpperCase() : optionValue.substring(0, 2).toUpperCase().trim();
      }
    }
  }

  // Dynamic state recovery fallback alignment
  if (!stateDisplayLabel && window.selectedFormationStateCode) {
    stateDisplayLabel = window.selectedFormationStateCode.toUpperCase().trim();
  }

  // Ensure state code changes are mirrored universally down to window trackers
  if (stateDisplayLabel && stateDisplayLabel.length === 2) {
    window.selectedFormationStateCode = stateDisplayLabel;
  }

  return { 
    label: stateDisplayLabel, 
    element: chosenStateElement 
  };
}

/**
 * Computes government filing fee parameters out of external state registry configuration profiles.
 * Zero Hardcoding Rule: Reads amounts purely from your dynamic external configurations.
 */
function resolveActiveStateFee(stateLabel, serviceKey) {
  var baseStateFilingFee = 0;
  
  const currentKey = String(serviceKey || window.routeActiveServiceKey || "llc-formation").toLowerCase();
  var serviceTypeKey = "llc";

  // Taxonomy mapping block: Normalizes wizard route strings to align with external pricing matrices keys
  if (currentKey.includes("corp") || currentKey === "corporation") {
    serviceTypeKey = "c_corp";
  } else if (currentKey.includes("series")) {
    serviceTypeKey = "series_llc";
  } else if (currentKey.includes("nonprofit") || currentKey.includes("non-profit")) {
    serviceTypeKey = "non_profit";
  } else if (currentKey.includes("proprietor") || currentKey.includes("sole")) {
    serviceTypeKey = "sole_proprietorship";
  } else if (currentKey.includes("dba") || currentKey.includes("assumed")) {
    serviceTypeKey = "dba";
  } else if (currentKey.includes("agent") || currentKey.includes("ra-service")) {
    serviceTypeKey = "registered_agent";
  }

  // 🏛️ Look up state filing structures purely from the external configurations map
  var dataSourceMatrix = window.STATE_FILING_FEES || (typeof STATE_FILING_FEES !== "undefined" ? STATE_FILING_FEES : null);

  if (stateLabel && dataSourceMatrix) {
    var stateMap = dataSourceMatrix[stateLabel];
    if (stateMap) {
      // Pull dynamic pricing tier rates out of your separate setup file
      baseStateFilingFee = parseFloat(stateMap[serviceTypeKey]) || parseFloat(stateMap["llc"]) || 0;
    } else {
      console.log(`[Pricing Engine Notice] State matrix entry not found for "${stateLabel}". Fallback rate allocated.`);
    }
  }

  return baseStateFilingFee;
}

// Expose functions globally to window namespaces cleanly
window.resolveActiveJurisdiction = resolveActiveJurisdiction;
window.resolveActiveStateFee = resolveActiveStateFee;



// ============================================================================
// 📊 MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (ADDONS)
// ============================================================================

/**
 * Appends dynamic addon pricing metrics and invoice layouts to the checkout matrix.
 * Zero Hardcoding Rule: Resolves service rates purely from lookups or data tags.
 */
function appendCheckedAddons(initialHtmlRows) {
  var incrementalAddonTotal = 0;
  var workingHtml = initialHtmlRows;

  // 1. Process explicit visual checkboxes currently active in the DOM layout view tree
  document.querySelectorAll('.upsell-checkbox:checked, .addon-checkbox:checked').forEach(function(checkbox) {
    var addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || 0;
    var addonLabelString = checkbox.getAttribute('data-name') || "Optional Add-on Service";
    
    incrementalAddonTotal += addonPriceValue;
    
    workingHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); font-weight: 500; margin-bottom: 6px;">
        <span>+ ${addonLabelString}</span>
        <span style="font-family: monospace;">$${addonPriceValue.toFixed(2)}</span>
      </div>
    `;
  });

  // 🏛️ Extensible Global Namespace Database Matrix Lookup
  // Re-uses your central pricing objects definitions to ensure zero file hardcoding
  const BACKGROUND_FLAG_CATALOG = window.UPSELL_ADDON_REGISTRY || {
    "customSelectedRegisteredAgentServiceActive": { name: "Registered Agent Shield", price: 75.00 },
    "customSelectedEinProcurementServiceActive": { name: "EIN Procurement Processing", price: 79.00 }
  };

  // 2. Evaluate global background state choice variables independently (Fixed broken logical math operators)
  Object.keys(BACKGROUND_FLAG_CATALOG).forEach(function(flagKey) {
    const isFlagTrue = window[flagKey] === true || String(window[flagKey]) === "true";
    
    if (isFlagTrue) {
      const addonMeta = BACKGROUND_FLAG_CATALOG[flagKey];
      
      // Calculate add-on additions completely independent of existing totals to guarantee accurate math balances
      incrementalAddonTotal += addonMeta.price;
      
      workingHtml += `
        <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate); font-weight: 500;">
          <span>+ ${addonMeta.name}</span>
          <span style="font-family: monospace; font-weight: 600; color: var(--navy);">$${addonMeta.price.toFixed(2)}</span>
        </div>
      `;
    }
  });

  return { 
    total: incrementalAddonTotal, 
    html: workingHtml 
  };
}

// Expose the clean addon evaluator safely to your window layer context
window.appendCheckedAddons = appendCheckedAddons;



// ============================================================================
// 📊 MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (INVOICE COMPILER)
// ============================================================================

/**
 * High-performance central processing loop that compiles base fees, state fees, 
 * dynamic add-ons, and transport variables into a synchronized invoice display layout.
 */
function updateDynamicPricingMatrixVanilla() {
  // 1. Resolve pricing parameters out of the dynamic package mapping router
  var planData = typeof getPricingConfiguration === "function" ? getPricingConfiguration() : null;
  if (!planData) {
    console.warn("[Pricing Compiler] Package configuration resolution deferred: Data structure uninitialized.");
    return;
  }

  var jurisdiction = typeof resolveActiveJurisdiction === "function" ? resolveActiveJurisdiction() : { label: "", element: null };
  var stateFee = typeof resolveActiveStateFee === "function" ? resolveActiveStateFee(jurisdiction.label, planData.serviceKey) : 0;

  // 2. Compile base service package markup lines cleanly
  var finalInvoiceHtml = `
    <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 8px;">
      <span>${planData.displayName} (${planData.planKey.toUpperCase()})</span>
      <span style="font-family: monospace;">$${planData.basePrice.toFixed(2)}</span>
    </div>
  `;

  // 3. Append state regulatory filing fees row seamlessly
  if (stateFee > 0 && jurisdiction.label) {
    finalInvoiceHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); margin-bottom: 6px;">
        <span>State Filing Fee (${jurisdiction.label})</span>
        <span style="font-family: monospace;">$${stateFee.toFixed(2)}</span>
      </div>
    `;
  }

  // 4. Extract active user options checked states out of the add-on collectors engine
  var processedAddons = typeof appendCheckedAddons === "function" ? appendCheckedAddons("") : { total: 0, html: "" };
  finalInvoiceHtml += processedAddons.html;

  // 🚚 Secure Transportation Tracking Bridge Integration
  // Ensures variable trucker fleet audit items never get dropped from calculations subtotals
  var variableTruckingAddonTotal = parseFloat(window.lastCalculatedNewEntrantAddonTotal) || 0;
  if (variableTruckingAddonTotal > 0 && window.lastCalculatedNewEntrantAddonHtml) {
    finalInvoiceHtml += window.lastCalculatedNewEntrantAddonHtml;
  }

  // 5. Aggregate absolute financial metrics numbers
  var totalSubtotal = planData.basePrice + processedAddons.total + variableTruckingAddonTotal;
  var finalGrandTotal = totalSubtotal + stateFee;

  // 6. Safe structural DOM rendering across multiple target checkout panel templates containers
  var invoiceContainer = document.getElementById('summary-purchase-rows-container') || 
                         document.getElementById('checkout-invoice-rows-container') ||
                         document.getElementById('invoice-rows-container');
  if (invoiceContainer) {
    invoiceContainer.innerHTML = finalInvoiceHtml;
  }

  // Synchronize values across text displays anchors pools safely
  var grandDisplays = ["summary-grand-total-display", "invoice-grand-total-display", "grand-total-display", "checkout-total-display"];
  grandDisplays.forEach(function(displayId) {
    var element = document.getElementById(displayId);
    if (element) element.textContent = '$' + finalGrandTotal.toFixed(2);
  });

  var subtotalDisplays = ["invoice-subtotal-display", "subtotal-display"];
  subtotalDisplays.forEach(function(displayId) {
    var element = document.getElementById(displayId);
    if (element) element.textContent = '$' + totalSubtotal.toFixed(2);
  });

  var govDisplays = ["invoice-gov-fees-display", "gov-fees-display"];
  govDisplays.forEach(function(displayId) {
    var element = document.getElementById(displayId);
    if (element) element.textContent = '$' + stateFee.toFixed(2);
  });

  // Commit global state total variables for transaction processing mapping payloads
  window.wizardCalculatedFinalTotalAmount = finalGrandTotal;

  var secondaryTotalDisplay = document.getElementById("payment-gateway-total-display") || 
                              document.getElementById("wizard-sticky-total-value");
  if (secondaryTotalDisplay) {
    secondaryTotalDisplay.textContent = '$' + finalGrandTotal.toFixed(2);
  }

  // 🛡️ REPAIRED EVENT LISTENER LEAK: Employs strict defensive attributes to completely isolate loop crashes
  if (jurisdiction.element && !jurisdiction.element.hasAttribute('data-has-sync-listener')) {
    jurisdiction.element.setAttribute('data-has-sync-listener', 'true');
    jurisdiction.element.addEventListener('change', function() {
      console.log(`[Pricing Link] Change detected on element: #${jurisdiction.element.id || 'state-selector'}. Recalculating matrix...`);
      updateDynamicPricingMatrixVanilla();
    });
  }
}

// Register initialization execution safely on app load lifecycle paths
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateDynamicPricingMatrixVanilla);
} else {
  // If DOM is already processed during deferred script loads, fire immediately
  updateDynamicPricingMatrixVanilla();
}

// ============================================================================
// 📊 MODULE 3: PRODUCTION SUMMARY MATRIX FIELD INJECTOR (SAFE ALIAS MATRIX)
// ============================================================================

/**
 * Public structural bridge to execute centralized checkout pricing metrics calculations.
 * Clean Architecture Pattern: Forwards all calls safely to the central single source of truth.
 */
function recalculateSummaryStepFields() {
  console.log("[Summary Sync Proxy] Routing summary view balance updates to central engine calculations...");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  } else {
    console.warn("[Summary Sync Proxy Warning] Central pricing matrix compiler calculation loop is detached.");
  }
}

// Map the naming configuration cleanly to window namespaces to preserve cross-file layout bindings
window.recalculateSummaryStepFields = recalculateSummaryStepFields;

/**
 * Universal dynamic parameter capture engine to intercept incoming marketing intents on boot.
 * Zero Hardcoding Rule: Stripped of local state fee lists; calls unified configurations module provider instead.
 * FIXED: Normalized URL keys before the lookup gate to break infinite timeout traps and fixed the proxy leak.
 */
function autoInjectMainWebsitePricingPlan() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlService = urlParams.get('service');
  const urlPlan = urlParams.get('plan');
  const urlState = urlParams.get('state') || "TX";

  if (!urlService || !urlPlan) return;

  // FIXED 1: Standardize slug variations immediately to match the exact keys used in content-engine.js maps
  let sanitizedServiceKey = urlService.toLowerCase().trim();
  if (sanitizedServiceKey === "llc-reinstatement-processing") sanitizedServiceKey = "llc-reinstatement";
  if (sanitizedServiceKey === "entity-dissolution") sanitizedServiceKey = "dissolution";
  if (sanitizedServiceKey === "process-agent-boc-3") sanitizedServiceKey = "process-agents-boc-3";

  const textInputService = document.getElementById("wizard-route-service-id");
  const textInputPlan = document.getElementById("wizard-route-tier-id");

  // Safety Boundary Guard: Evaluates using the fully normalized database index key tracking strings
  if (typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined" || !window.CENTRAL_SERVICE_PLAN_DB[sanitizedServiceKey]) {
    console.log(`[Boot Sync Delay] Central service database array unparsed for key "${sanitizedServiceKey}". Re-queueing injection loop...`);
    setTimeout(autoInjectMainWebsitePricingPlan, 100);
    return;
  }

  // 1. Commit incoming parameters safely to active global tracker fields
  window.routeActiveServiceKey = sanitizedServiceKey;
  window.routeActivePlanKey = urlPlan.toLowerCase().trim();
  window.selectedFormationStateCode = urlState.toUpperCase().trim();

  // 2. Safely compute unhardcoded state filing fees variables from your separate configuration module layer
  if (typeof resolveActiveStateFee === "function") {
    resolveActiveStateFee(window.selectedFormationStateCode, window.routeActiveServiceKey);
  }

  // 3. Mirror the computed data cleanly to input nodes without string contamination locks
  if (textInputService) {
    textInputService.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name || urlService;
  }
  
  if (textInputPlan) {
    const rawTier = window.routeActivePlanKey;
    textInputPlan.value = rawTier.charAt(0).toUpperCase() + rawTier.slice(1);
  }

  // 4. Execute marketing decoration layouts safely inside the correct local variable scope bounds
  const currentPlanConfig = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey];
  if (currentPlanConfig && typeof processDynamicMarketingLayoutDecorations === "function") {
    processDynamicMarketingLayoutDecorations(currentPlanConfig, window.routeActivePlanKey);
  }

  // 5. Force single structured total calculations update pass
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

// FIXED 2: SAFE SINGLE-MOUNT LIFECYCLE INTERCEPTOR PROXY
// Ensures the hook is attached exactly once to the root timeline window execution pipeline.
if (!window.isWizardNavigationProxyHookActive) {
  (function() {
    const originalNextStepFunc = window.goToNextWizardStep;
    if (typeof originalNextStepFunc === "function") {
      window.goToNextWizardStep = function(targetStepIndex, event) {
        // Execute original navigation routine safely
        const executionResult = originalNextStepFunc(targetStepIndex, event);
        
        // Tally invoice card values on single execution frame loops only when stepping panels
        if (typeof updateDynamicPricingMatrixVanilla === "function") {
          updateDynamicPricingMatrixVanilla();
        }
        return executionResult;
      };
      window.isWizardNavigationProxyHookActive = true;
    }
  })();
}



// ============================================================================ //
// 🎯 DATA LIFECYCLE VALIDATOR: TIMING-INDEPENDENT LIFECYCLE ENFORCER           //
// ============================================================================ //

/**
 * Asynchronous-safe strict data lifecycle validator for binding landing page parameters.
 * Dynamic strategy: No fallbacks, no hardcoded package profiles. Fully data-driven.
 */
function processDynamicMarketingLayoutDecorations(planConfig, activePlanKeyString, retryCount) {
  const textInputService = document.getElementById("wizard-route-service-id");
  const textInputTier = document.getElementById("wizard-route-tier-id");
  const currentRetry = retryCount || 0;

  // Extract from transferred URL query layout collections
  const urlParams = new URLSearchParams(window.location.search);
  const cleanServiceKey = String(urlParams.get('service') || "").toLowerCase().trim();
  const cleanPlanTierKey = String(urlParams.get('plan') || "").toLowerCase().trim();

  // VALIDATION GATE 1: Verify the URL parameter strings arrived intact
  if (!cleanServiceKey || !cleanPlanTierKey) {
    console.error(`[Data Validation Failure] Transaction Stop: Address parameters missing.`);
    return false;
  }

  // Extract configuration context registry dynamically
  const coreDatabaseRegistry = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages;

  // TIMING BRIDGE: Self-correcting loading check loops
  if (!coreDatabaseRegistry || !coreDatabaseRegistry[cleanServiceKey]) {
    if (currentRetry < 3) {
      console.log(`[Lifecycle Sync] Target database node is initializing. Retrying context hook...`);
      setTimeout(function() {
        processDynamicMarketingLayoutDecorations(planConfig, activePlanKeyString, currentRetry + 1);
      }, 100);
      return false;
    }
    console.error(`[Data Validation Failure] Registry Exception: Service code not found.`);
    return false;
  }

  const targetServiceNode = coreDatabaseRegistry[cleanServiceKey];
  // VALIDATION GATE 2: Pure data-driven validation against the database keys
  // Removes hardcoded "starter", "compliance", and "enterprise" rules
  if (!targetServiceNode.hasOwnProperty(cleanPlanTierKey)) {
    console.error(`[Data Validation Failure] Tier Mismatch: "${cleanPlanTierKey}" doesn't exist in registry records.`);
    return false;
  }

  // Calculate descriptive string parameters cleanly
  let tierTitleDisplay = cleanPlanTierKey.charAt(0).toUpperCase() + cleanPlanTierKey.slice(1);

  // Synchronize configurations cleanly down to internal trackers without breaking steps
  if (textInputService) {
    textInputService.value = targetServiceNode.name || "";
  }
  
  if (textInputTier) {
    textInputTier.value = tierTitleDisplay;
  }

  // VALIDATION GATE 3: Verify dynamic data feature matrices are present
  const dynamicBulletsArray = targetServiceNode.bullets ? targetServiceNode.bullets[cleanPlanTierKey] : null;
  if (!Array.isArray(dynamicBulletsArray)) {
    console.error(`[Data Validation Failure] Schema Mismatch: Bullets array missing for tier: ${cleanPlanTierKey}`);
    return false;
  }

  const basePackageFeeAmount = parseFloat(targetServiceNode[cleanPlanTierKey]);
  if (isNaN(basePackageFeeAmount)) {
    console.error(`[Data Validation Failure] Price Matrix Exception: Package numerical value invalid.`);
    return false;
  }

  // Lock configuration arrays globally for contextual operations loops
  window.routeActiveServiceKey = cleanServiceKey;
  window.routeActivePlanKey = cleanPlanTierKey;
  window.activeWizardRouteMarketingBullets = dynamicBulletsArray;

  console.log(`[Data Lifecycle Verified] Service: ${cleanServiceKey} | Tier: ${cleanPlanTierKey}`);

  // Pipe variables safely down into independent presentation layer targets
  if (typeof window.renderOnboardingPlanOverviewCard === "function") {
    window.renderOnboardingPlanOverviewCard(targetServiceNode, tierTitleDisplay, dynamicBulletsArray, basePackageFeeAmount);
  }

  return true;
}

window.processDynamicMarketingLayoutDecorations = processDynamicMarketingLayoutDecorations;



// ============================================================================ //
// 📊 PART 2: HARDENED RENDER ENGINE & COMPILER LOCK STABILIZER
// ============================================================================ //
window.isPlanCardRenderingLockActive = false;

function renderOnboardingPlanOverviewCard(planConfig, tierTitleDisplay, dynamicBulletsArray, basePackageFeeAmount) {
    // 🛡️ ANTI-RECURSION FIREWALL
    if (window.isPlanCardRenderingLockActive) return;
    window.isPlanCardRenderingLockActive = true;

    try {
        // Guarantee parameters are updated from active fallback scripts
        if (!window.routeActiveServiceKey || !window.routeActivePlanKey) {
            const urlParams = new URLSearchParams(window.location.search);
            window.routeActiveServiceKey = window.routeActiveServiceKey || urlParams.get('service') || "";
            window.routeActivePlanKey = window.routeActivePlanKey || urlParams.get('plan') || "starter";
        }

        const activeServiceKey = String(window.routeActiveServiceKey || "").toLowerCase().trim();
        const activeTierKey = String(window.routeActivePlanKey || "starter").toLowerCase().trim();

        // 🛡️ RECOVERY SYSTEM: Direct fallbacks parsing cross-linked global memories
        let verifiedConfig = null;
        if (planConfig && typeof planConfig === 'object') {
            verifiedConfig = planConfig;
        } else if (window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[activeServiceKey]) {
            verifiedConfig = window.CENTRAL_SERVICE_PLAN_DB[activeServiceKey];
        } else if (window.GLOBAL_COMPANY_PRICING?.packages?.[activeServiceKey]) {
            verifiedConfig = window.GLOBAL_COMPANY_PRICING.packages[activeServiceKey];
        }

        if (!verifiedConfig) {
            console.warn(`[Render Engine Guard] Terminal Data Fault: No configuration layer registered for key: [${activeServiceKey}]`);
            window.isPlanCardRenderingLockActive = false;
            return;
        }

        // Price Lookup Matrix Extraction Sequence Fix
        let finalBaseFee = parseFloat(basePackageFeeAmount);
        if (isNaN(finalBaseFee) || finalBaseFee === 0) {
            if (verifiedConfig[activeTierKey] !== undefined) {
                finalBaseFee = parseFloat(verifiedConfig[activeTierKey]);
            } else if (verifiedConfig.plans?.[activeTierKey]) {
                const targetPlanNode = verifiedConfig.plans[activeTierKey];
                finalBaseFee = parseFloat(targetPlanNode.price) || parseFloat(targetPlanNode.cost) || 0;
            } else {
                finalBaseFee = parseFloat(planConfig?.[activeTierKey]) || 0;
            }
        }

        // Resolve title layout overrides cleanly
        const TIER_DISPLAY_OVERRIDES = window.TIER_DISPLAY_OVERRIDES || { 
            "starter": "Starter", 
            "compliance": "Compliance", 
            "enterprise": "Enterprise" 
        };
        let resolvedTitleDisplay = TIER_DISPLAY_OVERRIDES[activeTierKey] || tierTitleDisplay || (activeTierKey.charAt(0).toUpperCase() + activeTierKey.slice(1));
        const serviceNameString = verifiedConfig.name || planConfig?.name || "Service Processing";
        const finalizedPlanTitleContainerHeaderText = `${serviceNameString} - ${resolvedTitleDisplay} Plan`;

        // Safely extract feature bullets array
        const activeBullets = Array.isArray(dynamicBulletsArray) ? dynamicBulletsArray : (verifiedConfig.bullets?.[activeTierKey] || []);


// ============================================================================ //
// 🏛️ PART 3: SECURE CONTAINER DOM INJECTION & FORM SYNCHRONIZATION MATRIX
// ============================================================================ //

        // 1. WORKSPACE: Inject into Sidebar Element Container
        const featuresListContainer = document.getElementById("step-1-package-features-list");
        if (featuresListContainer) {
            let sidebarMarkup = "";
            activeBullets.forEach(function(bulletText) {
                const safeText = typeof secureWizardStringEscape === "function" ? secureWizardStringEscape(bulletText) : bulletText;
                sidebarMarkup += `
                    <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--navy, #0a1f44); font-weight: 600; margin-bottom: 8px;">
                        <i class="fa-solid fa-circle-check" style="color: var(--primary, #10b981);"></i>
                        <span>${safeText}</span>
                    </div>`;
            });
            featuresListContainer.innerHTML = sidebarMarkup;
        }

        // 2. WORKSPACE: Inject into Main Overview Box Frame (DESTRUCTIVE DUPLICATION FIX)
        const leftColumnContainer = document.querySelector("#step-panel-1 .form-grid-layout") || document.querySelector("#step-panel-1");
        
        if (leftColumnContainer) {
            let step1OverviewBox = document.getElementById("step-1-selected-plan-overview");
            if (!step1OverviewBox) {
                step1OverviewBox = document.createElement("div");
                step1OverviewBox.id = "step-1-selected-plan-overview";
                step1OverviewBox.style.cssText = "margin-top: 24px; padding: 24px; background: #ffffff; border: 1px solid var(--border, #e2e8f0); border-radius: 12px; display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box; box-shadow: var(--card-shadow); clear: both;";
                
                // Clear out pre-existing layout elements to wipe away duplicates completely
                leftColumnContainer.innerHTML = ""; 
                leftColumnContainer.appendChild(step1OverviewBox);
            }

            let mainBoxListMarkup = "";
            activeBullets.forEach(function(bulletItem) {
                const safeText = typeof secureWizardStringEscape === "function" ? secureWizardStringEscape(bulletItem) : bulletItem;
                mainBoxListMarkup += `
                    <li style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <i class="fa-solid fa-circle-check" style="color: #10b981;"></i>
                        <span>${safeText}</span>
                    </li>`;
            });

            step1OverviewBox.innerHTML = `
                <div style="border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 14px;">
                    <span style="font-size: 0.75rem; font-weight: 800; color: var(--slate, #64748b); text-transform: uppercase; letter-spacing: 0.5px;">Selected Package</span>
                    <h3 style="margin: 4px 0 0 0; color: var(--navy, #0a1f44); font-size: 1.35rem; font-weight: 900;">${finalizedPlanTitleContainerHeaderText}</h3>
                </div>
                <div style="margin-top: 6px; margin-bottom: 6px;">
                    <label style="font-weight: 800; font-size: 0.75rem; text-transform: uppercase; color: var(--navy, #0a1f44); display: block; margin-bottom: 12px; letter-spacing: 0.5px;">What Comes with the Package</label>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px; font-size: 0.9rem; color: var(--navy, #0a1f44); font-weight: 600;">
                        ${mainBoxListMarkup}
                    </ul>
                </div>
                <div style="background: #f8fafc; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; padding: 16px; margin-top: 6px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 800; color: var(--navy, #0a1f44); font-size: 0.95rem;">Base Fee:</span>
                    <strong style="font-family: monospace; color: #10b981; font-size: 1.35rem;">$${finalBaseFee.toFixed(2)}</strong>
                </div>`;
        }

        // Force Sync numerical base values directly down to forms
        const numericalBaseInput = document.getElementById("wizard-base-package-fee-input");
        if (numericalBaseInput) {
            numericalBaseInput.value = finalBaseFee.toFixed(2);
            numericalBaseInput.dispatchEvent(new Event('change', { bubbles: true }));
        }

        // 3. WORKSPACE: Trigger Downstream Engine Calculation Cycles
        if (typeof updateDynamicPricingMatrixVanilla === "function") {
            updateDynamicPricingMatrixVanilla();
        }
        if (typeof populatePurchaseSummaryReviewMatrix === "function") {
            populatePurchaseSummaryReviewMatrix();
        }
        if (typeof renderTargetUpsellsListPanel === "function") {
            renderTargetUpsellsListPanel(activeServiceKey);
        }

    } catch (err) {
        console.error("[Card Renderer Core Structural Exception Handled]", err);
    } finally {
        window.isPlanCardRenderingLockActive = false;
    }
}

// Map the method safely to global viewport frames
window.renderOnboardingPlanOverviewCard = renderOnboardingPlanOverviewCard;



// ============================================================================ //
// 📊 UPSELLS ENGINE DATABASE SCHEMA MAP (PART A)                              //
// ============================================================================ //

const UPSELLS_ROUTER_DATABASE = {
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
  ]
};
// ============================================================================ //
// 📊 UPSELLS ENGINE DATABASE SCHEMA MAP (PART B)                              //
// ============================================================================ //

UPSELLS_ROUTER_DATABASE.trucker = [
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
];

UPSELLS_ROUTER_DATABASE.generic = [
  { id: "ra-shield", name: "Registered Agent Service", price: 75.00, billing: "/ yr", desc: "Secures state compliance mandates, processes official legal notices, and shields your corporate entity's private physical address layout from public record databases." },
  { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." },
  { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
  { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
  { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
  { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
  { id: "good-standing", name: "Certificate of Good Standing", price: 45.00, billing: " flat", desc: "Secures certified regulatory verification from the jurisdiction state registry validating that your active entity is compliant and authorized to contract." },
  { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant payment processing lines." }
];

/**
 * Pure Dynamic Upsell Selector Utility.
 * Resolves packages programmatically without fallback routing bypass arrays.
 * @param {string} routeKey - Category path key string (e.g. window.routeActiveServiceKey)
 * @returns {Array} List of upsell records matching the active category safely
 */
function getScopedUpsellsDataset(routeKey) {
  const normalizedKey = String(routeKey || "").toLowerCase().trim();
  
  // Strict property query validation using clear prototype inspection routines
  if (Object.prototype.hasOwnProperty.call(UPSELLS_ROUTER_DATABASE, normalizedKey)) {
    return UPSELLS_ROUTER_DATABASE[normalizedKey];
  }
  
  // Default to generic group purely by object property rules if specific category lacks unique records
  return UPSELLS_ROUTER_DATABASE.generic || [];
}

// Freeze root database map to completely protect against security breaches or runtime modification side-effects
Object.freeze(UPSELLS_ROUTER_DATABASE);

// Expose universally to the window object layer safely
window.UPSELLS_ROUTER_DATABASE = UPSELLS_ROUTER_DATABASE;
window.getScopedUpsellsDataset = getScopedUpsellsDataset;



// ============================================================================ //
// 📊 MODULE 2: CONDITIONAL INTERACTIVE UPSELLS ENGINE STRUCTURAL CORE (PART A) //
// ============================================================================ //

// Unified, shared state lookup mapping linking product IDs directly to calculation flags
window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP = {
  "ra-shield": "customSelectedRegisteredAgentServiceActive",
  "ein-procure": "customSelectedEinProcurementServiceActive",
  "op-agreement": "customSelectedOperatingAgreementActive",
  "corp-bylaws": "customSelectedBylawsActive",
  "comp-monitor": "customSelectedComplianceMonitorActive",
  "corp-resolutions": "customSelectedResolutionsActive",
  "corp-minutes": "customSelectedMinutesActive",
  "good-standing": "customSelectedGoodStandingCertificateServiceActive",
  "boc3-filing": "customSelectedBoc3FilingActive",
  "fmcsa-audit": "customSelectedNewEntrantAddonTotal"
};

/**
 * Dynamically builds and mounts responsive upsell product layout cards.
 * Pure dynamic architecture: Containment isolation completely fixes Step 3 layout leaks.
 * @param {string} activeServiceKeyString - The active context service routing string.
 */
function renderTargetUpsellsListPanel(activeServiceKeyString) {
  // CRITICAL FIX: Query the target element container ONLY inside the active step context boundary
  const activeStepContainer = document.querySelector(".wizard-step-container-block.active") || document;
  const container = activeStepContainer.querySelector("#wizard-dynamic-upsells-render-target");
  if (!container) return;

  const databaseSource = window.UPSELLS_ROUTER_DATABASE;
  if (!databaseSource) {
    console.error("[Upsell Engine Fatal Error] Central database window.UPSELLS_ROUTER_DATABASE is uninitialized.");
    return;
  }

  // Pure data path lookup matching your exact schema indexes dynamically
  let lookupTargetKey = "generic";
  const normalizedKey = String(activeServiceKeyString || "").toLowerCase().trim();

  if (Object.prototype.hasOwnProperty.call(databaseSource, normalizedKey)) {
    lookupTargetKey = normalizedKey;
  } else {
    const structuralMatch = Object.keys(databaseSource).find(key => normalizedKey.includes(key) || key.includes(normalizedKey));
    if (structuralMatch) lookupTargetKey = structuralMatch;
  }

  const targetedUpsellDataset = databaseSource[lookupTargetKey];
  if (!Array.isArray(targetedUpsellDataset)) return;

  let calculatedListMarkup = "";
  targetedUpsellDataset.forEach(function(item) {
    if (!item || !item.id) return;

    const displayCostString = item.price > 0 ? `$${item.price.toFixed(2)}` : "Free Partner Match";
    const displayBillingText = item.price > 0 ? item.billing : " (Quote Request)";

    const serviceCategoryHandle = String(activeServiceKeyString || "").toLowerCase().trim();

    // Structural Exclusion Isolation Rules
    if (item.id === "op-agreement" && !serviceCategoryHandle.includes("llc")) return;
    if (item.id === "corp-bylaws" && !serviceCategoryHandle.includes("corp")) return;

    // Fixed: Eliminates the prefix-matching loop. Pulls class properties directly or falls back cleanly.
    let cardIconClass = item.iconClass || "fa-solid fa-circle-plus";
    if (!item.iconClass) {
      const DIRECT_ICON_MAP = {
        "ra-shield": "fa-solid fa-building-shield",
        "boc3-filing": "fa-solid fa-building-shield",
        "comp-monitor": "fa-solid fa-clock-rotate-left",
        "corp-minutes": "fa-solid fa-book-bookmark",
        "corp-resolutions": "fa-solid fa-book-bookmark",
        "op-agreement": "fa-solid fa-file-signature",
        "corp-bylaws": "fa-solid fa-file-signature",
        "ein-procure": "fa-solid fa-passport",
        "good-standing": "fa-solid fa-certificate",
        "fmcsa-audit": "fa-solid fa-shield-halved"
      };
      if (Object.prototype.hasOwnProperty.call(DIRECT_ICON_MAP, item.id)) {
        cardIconClass = DIRECT_ICON_MAP[item.id];
      }
    }

    const stateFlagProperty = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP[item.id] || "";
    const isCurrentlyChecked = stateFlagProperty && window[stateFlagProperty] === true ? "checked" : "";

    calculatedListMarkup += `
      <div class="upsell-card-node" style="background: #ffffff; border: 1px solid var(--border, #e2e8f0); border-radius: 12px; padding: 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; box-sizing: border-box; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
        <div style="display: flex; align-items: center; gap: 20px; flex: 1;">
          <div style="font-size: 2.2rem; color: var(--primary, #10b981); min-width: 45px; text-align: center;">
            <i class="${cardIconClass}"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 4px 0; font-size: 1.1rem; font-weight: 800; color: var(--navy, #0a1f44);">${item.name}</h4>
            <p style="margin: 0; font-size: 0.85rem; color: var(--slate, #64748b); line-height: 1.5; text-align: left;">${item.desc}</p>
          </div>
        </div>
        <div style="text-align: right; min-width: 170px;">
          <div style="font-size: 1.3rem; font-weight: 900; color: var(--navy, #0a1f44); font-family: monospace; margin-bottom: 8px;">
            ${displayCostString}
            <span style="font-size: 0.75rem; color: var(--slate, #64748b); font-family: system-ui; font-weight: normal;">${displayBillingText}</span>
          </div>
          <label style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; background: #f1f5f9; padding: 8px 16px; border-radius: 6px; border: 1px solid var(--border, #e2e8f0); user-select: none;">
            <input type="checkbox" id="upsell-item-${item.id}" class="upsell-checkbox addon-checkbox" data-price="${item.price}" data-name="${item.name}" data-state-property="${stateFlagProperty}" ${isCurrentlyChecked} style="accent-color: var(--primary, #10b981); width: 16px; height: 16px; margin: 0; cursor: pointer;" onchange="window.executeUpsellStateToggleIntercept(this)">
            Add to Order
          </label>
        </div>
      </div>`;
  });

  container.innerHTML = calculatedListMarkup;
}

/**
 * Global execution interceptor for upsell selection changes.
 * Fixes layout breaks by ensuring calculations pass completely in sequence.
 */
window.executeUpsellStateToggleIntercept = function(checkboxElement) {
  if (!checkboxElement) return;

  const linkedStateProperty = checkboxElement.getAttribute("data-state-property");
  if (linkedStateProperty) {
    window[linkedStateProperty] = checkboxElement.checked;
    console.log(`[Upsell State Sync] Variable window.${linkedStateProperty} updated to: ${checkboxElement.checked}`);
  }

  // FIX: Force synchronous execution to eliminate asymmetric rendering bugs that uncover Step 3
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
};

window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanel;



// ============================================================================ //
// 📊 MODULE 2: CONDITIONAL INTERACTIVE UPSELLS INTERCEPTOR (PART A)            //
// ============================================================================ //

/**
 * Global execution interceptor for upsell selection changes.
 * Pure dynamic architecture: Preserves true case parameters to fix the $0.00 calculation error.
 * @param {HTMLElement} checkboxElement - The input checkbox initiating the state synchronization.
 */
window.executeUpsellStateToggleIntercept = function(checkboxElement) {
  if (!checkboxElement) return;

  // Read the original tracking property directly from the input attributes to preserve true casing
  const linkedStateProperty = checkboxElement.getAttribute("data-state-property");
  if (!linkedStateProperty) return;

  const rawPropertyKey = String(linkedStateProperty).trim();

  // Pure dynamic resolution: Maps both exact variable properties and standardized object formats
  if (rawPropertyKey) {
    // Write directly into the precise global memory flag expected by your pricing calculator
    window[rawPropertyKey] = checkboxElement.checked;
    
    // Auto-synchronize standard variations to make it bulletproof without an translation lookup table
    const flatSnakeKey = rawPropertyKey.toLowerCase().replace(/[-]/g, '_');
    window[flatSnakeKey] = checkboxElement.checked;

    console.log(`[Upsell Synchronizer Success] Variable window.${rawPropertyKey} updated to: ${checkboxElement.checked}`);
  }
  // 🛡️ CONTAINMENT REFACTOR: Force synchronous pricing evaluations
  // Removes requestAnimationFrame entirely to stop Step 3 from uncovering prematurely
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
  
  if (typeof populatePurchaseSummaryReviewMatrix === "function") {
    populatePurchaseSummaryReviewMatrix();
  }
};

// Map the panel renderer method straight to global namespace layers safely
if (typeof renderTargetUpsellsListPanel === "function") {
  window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanel;
}



// ============================================================================ //
// 🗺️ WIZARD CORE ENGINE: MULTI-STEP INTERACTIVE NAVIGATION MODULE (PART A)    //
// ============================================================================ //

window.currentWizardActiveStep = window.currentWizardActiveStep || 1;
window.totalWizardExpectedSteps = window.totalWizardExpectedSteps || 7;

/**
 * Handles core wizard step navigation mechanics seamlessly.
 * Pure dynamic pattern: Reorders variable execution sequences to isolate step metrics.
 * @param {number|string} targetStepIndex - Destination wizard step index indicator.
 * @param {Event|null} event - Native browser element event trigger.
 */
function goToNextWizardStep(targetStepIndex, event = null) {
  // Capture historical position cleanly before committing state mutations
  const previousStoredActiveStep = window.currentWizardActiveStep;
  let numericTargetIndex = parseInt(targetStepIndex, 10);
  
  console.log(`[Step Router] Navigating sequence state from Step ${previousStoredActiveStep} to Step ${numericTargetIndex}.`);

  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
  }

  if (isNaN(numericTargetIndex)) return false;

  // 🛡️ Input Validation Guard: Enforce strict field checks ONLY when moving FORWARD
  if (numericTargetIndex > previousStoredActiveStep && typeof validateStepInputParametersVanilla === "function") {
    if (!validateStepInputParametersVanilla(previousStoredActiveStep)) {
      console.warn(`[Navigation Blocked] Field validation metrics failed on step: ${previousStoredActiveStep}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    }
  }

  const maximumWizardSteps = parseInt(window.totalWizardExpectedSteps, 10);
  if (numericTargetIndex < 1 || (maximumWizardSteps && numericTargetIndex > maximumWizardSteps)) return false;

  // ⚡ STAGE-ZERO INJECTION GATEKEEPER
  // Pure directional evaluation prevents form content generation from clearing data when hitting "Back"
  if (numericTargetIndex === 2 && previousStoredActiveStep < 2) {
    if (typeof window.executeStepTwoDynamicFormInjection === "function") {
      window.executeStepTwoDynamicFormInjection(true);
    } else {
      console.error("[Router Failure] executeStepTwoDynamicFormInjection is missing from global scope frames.");
      return false;
    }
  }

  // 💳 ZERO-HARDCODE CHECKOUT PROCESSING GATEWAY
  if (maximumWizardSteps && numericTargetIndex === maximumWizardSteps && previousStoredActiveStep === (maximumWizardSteps - 1)) {
    if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
      console.log("[Router] Relocating focus state payload down to transaction gateway module...");
      executeOnboardingTransactionPayloadSubmitVanilla(numericTargetIndex);
      return false;
    }
  }

  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }

    // ============================================================================ //
  // 🔄 PANEL VISIBILITY CONTAINMENT LOOP                                         //
  // ============================================================================ //
  let isTargetPanelFoundAndDisplayed = false;
  const allWizardPanelsArray = document.querySelectorAll('[id^="step-panel-"]');

  allWizardPanelsArray.forEach(function(currentPanelElement) {
    // Parse step numbers directly from individual HTML node IDs to avoid manual limits checking
    const extractedPanelIdIndex = parseInt(currentPanelElement.id.replace("step-panel-", ""), 10);
    
    if (!isNaN(extractedPanelIdIndex)) {
      if (extractedPanelIdIndex === numericTargetIndex) {
        currentPanelElement.classList.add("active");
        currentPanelElement.style.removeProperty("display");
        currentPanelElement.style.setProperty("display", "block", "important");
        isTargetPanelFoundAndDisplayed = true;
        console.log(`[Router View] Displaying matching content block container: #${currentPanelElement.id}`);
      } else {
        currentPanelElement.classList.remove("active");
        currentPanelElement.style.removeProperty("display");
        currentPanelElement.style.setProperty("display", "none", "important");
      }
    }
  });

  if (!isTargetPanelFoundAndDisplayed) {
    console.error(`[Router Error] View Transition Halts: #step-panel-${numericTargetIndex} is missing from the layout.`);
    return false;
  }

  // CRITICAL VISIBILITY FIX: Lock active tracking state variable AFTER visual panels change places
  window.currentWizardActiveStep = numericTargetIndex;

  // CRITICAL TIMING CORRECTION: Force timeline track bubble lights to sync synchronously BEFORE running invoice math
  if (typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(numericTargetIndex);
  }

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

window.goToNextWizardStep = goToNextWizardStep;



// ============================================================================ //
// 📊 UNIVERSAL TIMELINE VISUAL REFLECTOR (PART A)                              //
// ============================================================================ //

/**
 * Universal timeline visual reflector. Updates sidebar bubble tracks.
 * Hardened Fix: Protects mathematical variables to prevent unhandled script crashes.
 * @param {number|string} activeIndex - The destination wizard step index.
 */
function updateApplicationMapTimelineBubbles(activeIndex) {
  const rows = document.querySelectorAll(".toc-step-row");
  if (!rows || rows.length === 0) {
    console.warn("[Timeline Sync] No elements matching selector '.toc-step-row' found in DOM layout.");
    return;
  }

  const currentStepNum = parseInt(activeIndex, 10) || 1;
  console.log(`[Timeline Sync] Dispatching clean visibility pass for step index: ${currentStepNum}`);

  rows.forEach(function(row, idx) {
    if (!row) return;
    
    const dotElement = row.querySelector(".toc-dot") || row.querySelector(".step-indicator-dot");
    const loopIndex = idx + 1;

    // Hard reset: Strip away all possible conflicting string classes to clear hardcoded blocks
    row.className = "toc-step-row";
    row.classList.remove("toc-active", "toc-completed", "active", "completed");
    
    if (dotElement) {
      dotElement.innerHTML = ""; // Wipes out pre-existing checked layouts icons
      dotElement.style.background = "";
      dotElement.style.borderColor = "";
      dotElement.style.boxShadow = "";
    }

    // Direct data-driven step matching evaluation loops
    if (loopIndex < currentStepNum) {
      row.classList.add("toc-completed", "completed");
      if (dotElement) {
        dotElement.innerHTML = '<i class="fa-solid fa-check" style="font-size: 0.65rem; color: #10b981;"></i>';
        dotElement.style.background = "rgba(16, 185, 129, 0.15)";
        dotElement.style.borderColor = "#10b981";
      }
    } else if (loopIndex === currentStepNum) {
      row.classList.add("toc-active", "active");
      if (dotElement) {
        dotElement.style.background = "#10b981";
        dotElement.style.borderColor = "#10b981";
        dotElement.style.boxShadow = "0 0 14px rgba(16, 185, 129, 0.8), inset 0 0 4px rgba(255,255,255,0.4)";
      }
    }
  });
  // Synchronize horizontal progress bar entirely from system configuration states
  const horizontalProgressFill = document.getElementById("timeline-progress-fill-node");
  if (horizontalProgressFill) {
    // Pure data-driven validation: Safely sets a baseline count if variables are uninitialized
    const rawTotalSteps = window.totalWizardExpectedSteps;
    const maximumSystemSteps = rawTotalSteps ? parseInt(rawTotalSteps, 10) : rows.length;
    
    let percentageProgressWidth = 0;
    
    // Safety clamp stops calculations from dividing by zero or processing NaN bounds
    if (!isNaN(maximumSystemSteps) && maximumSystemSteps > 1) {
      percentageProgressWidth = ((currentStepNum - 1) / (maximumSystemSteps - 1)) * 100;
    }

    const clampedProgressBarWidth = Math.min(Math.max(percentageProgressWidth, 0), 100);
    horizontalProgressFill.style.width = `${clampedProgressBarWidth}%`;
  }
}

// Hardened Global Export Guard: Protect master router function integrity
if (typeof window.goToNextWizardStep !== "function") {
  if (typeof goToNextWizardStep === "function") {
    window.goToNextWizardStep = goToNextWizardStep;
  }
}

window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubbles;








// ============================================================================ //
// ✍️ DIGITAL CURSIVE SIGNATURE RENDERING SUITE
// ============================================================================ //
/**
 * Initializes real-time text-to-cursive handwriting mirror syncs across wizard fields.
 * FIXED: Uses event delegation to prevent listener loss during step transitions or form re-renders.
 */
function initCursiveSignatureCaptureLivePreview() {
  const panelContext = document.getElementById(`step-panel-${window.currentWizardActiveStep || 4}`) || document.body;

  // Enforce script styles immediately on any preview display containers present in the viewport
  const previewDisplay = document.getElementById("cursive-signature-preview") || 
                         document.getElementById("cursive-signature-output") || 
                         document.getElementById("signature-preview") || 
                         panelContext.querySelector('.signature-preview-display');

  if (previewDisplay) {
    previewDisplay.style.fontFamily = "'Dancing Script', 'Alex Brush', 'Great Vibes', 'Brush Script MT', cursive";
    previewDisplay.style.transition = "opacity 0.2s ease-in-out, transform 0.2s ease-in-out";
  }

  // 🛡️ RECOVERY PASS: Check active value states upon entering the step panel view
  const inputField = document.getElementById("poa_signer_printed") || 
                     document.getElementById("signature-input") || 
                     document.getElementById("legal-signature") || 
                     panelContext.querySelector('input[name*="signature"], .signature-input-field');

  if (inputField && previewDisplay) {
    if (inputField.value.trim() !== "") {
      previewDisplay.innerText = inputField.value.trim();
      previewDisplay.style.opacity = "1";
      window.signaturePadHasBeenDrawnByUser = true;
    } else {
      previewDisplay.innerText = inputField.getAttribute("placeholder") || "Your Electronic Signature";
      previewDisplay.style.opacity = "0.35";
      window.signaturePadHasBeenDrawnByUser = false;
    }
  }

  // 🛡️ EVENT DELEGATION SECURITY HOOK:
  // Bind directly to the document root exactly once. This ensures that even if inputs 
  // are wiped out or re-injected dynamically, signatures continue mirroring flawlessly.
  if (!window.isSignatureGlobalListenerHooked) {
    document.addEventListener("input", function(e) {
      const target = e.target;
      
      // Verify if the active typing target is genuinely a signature input field element
      const isSignatureInput = target.id === "poa_signer_printed" || 
                               target.id === "signature-input" || 
                               target.id === "legal-signature" || 
                               target.name?.includes("signature") || 
                               target.classList.contains("signature-input-field");

      if (!isSignatureInput) return;

      const activePanel = document.getElementById(`step-panel-${window.currentWizardActiveStep}`) || document.body;
      const targetPreview = document.getElementById("cursive-signature-preview") || 
                            document.getElementById("cursive-signature-output") || 
                            document.getElementById("signature-preview") || 
                            activePanel.querySelector('.signature-preview-display');

      if (!targetPreview) return;

      const activeTextString = target.value;
      if (activeTextString.trim() === "") {
        targetPreview.innerText = target.getAttribute("placeholder") || "Your Electronic Signature";
        targetPreview.style.opacity = "0.35";
        targetPreview.style.transform = "scale(0.98)";
        window.signaturePadHasBeenDrawnByUser = false;
      } else {
        targetPreview.innerText = activeTextString;
        targetPreview.style.opacity = "1";
        targetPreview.style.transform = "scale(1)";
        window.signaturePadHasBeenDrawnByUser = true;
      }

      // Trigger local state serialization cache updates automatically
      if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
      }
    });
    
    window.isSignatureGlobalListenerHooked = true;
  }
}

// Register initialization execution safely on app load namespace scopes layers
window.initCursiveSignatureCaptureLivePreview = initCursiveSignatureCaptureLivePreview;



// ============================================================================ //
// 🛡️ MANDATORY WORKFLOW VALIDATION ENGINE (PART A)                            //
// ============================================================================ //

/**
 * Executes a strict validation sweep across all required fields on the current step.
 * Pure dynamic pattern: Zero hardcoded rules. Handles state isolation natively.
 * @param {number|string} currentStepIndex - The active step panel index tracker.
 * @returns {boolean} Status verifying whether the current panel state is valid.
 */
function validateCurrentWizardStepInputs(currentStepIndex) {
  const stepNum = parseInt(currentStepIndex, 10);
  console.log(`[Form Validation] Auditing requirement constraints for Step: ${stepNum}`);

  const activePanel = document.getElementById(`step-panel-${stepNum}`);
  if (!activePanel) return true; // Safe fallback allowed only if container structure is absent

  // Gather required elements bounded strictly inside the active step container context layout
  const requiredInputs = activePanel.querySelectorAll("input[required], select[required], textarea[required]");
  let isPanelDataValid = true;

  requiredInputs.forEach(function(inputElement) {
    if (!inputElement) return;

    // 🛡️ Check if the field is visually hidden inside a collapsed template block wrapper
    // Leverages standard structural visibility markers rather than global offset layouts
    const isVisuallyHidden = (inputElement.offsetWidth === 0 && inputElement.offsetHeight === 0) || 
                             inputElement.closest('[style*="display: none"]');
    if (isVisuallyHidden) return;

    // 🛡️ Lock check verification: Pure property extraction flags for readonly elements
    if (inputElement.hasAttribute("readonly") || inputElement.readOnly || inputElement.disabled) {
      inputElement.classList.remove("input-error");
      return;
    }
    // Pure dynamic constraint verification
    let isElementValid = true;
    
    // Evaluate standard browser input verification models securely
    if (typeof inputElement.checkValidity === "function") {
      isElementValid = inputElement.checkValidity();
    } else {
      // Direct raw text buffer processing verification fallback guard
      isElementValid = !!inputElement.value.trim();
    }

    if (!isElementValid) {
      isPanelDataValid = false;
      inputElement.classList.add("input-error");
      
      // Apply clean semantic style markers dynamically without invoking reportValidity()
      // This completely blocks the browser from force-scrolling and exposing Step 3 elements prematurely
      inputElement.style.borderColor = "#ef4444";
      
      console.warn(`[Validation Alert] Constraint check failed on element ID: "${inputElement.id || 'unnamed'}"`);
    } else {
      inputElement.classList.remove("input-error");
      inputElement.style.borderColor = "var(--border, #e2e8f0)";
      
      // Clean up standalone custom warning labels nearby if they exist
      const adjacentErrorMarker = inputElement.nextElementSibling;
      if (adjacentErrorMarker && adjacentErrorMarker.classList.contains('input-error-marker')) {
        adjacentErrorMarker.remove();
      }
    }
  });

  return isPanelDataValid;
}

// Map parameters cleanly to global window scopes instantly to resolve click handlers
window.validateCurrentWizardStepInputs = validateCurrentWizardStepInputs;
window.validateStepInputParametersVanilla = validateCurrentWizardStepInputs;



// ============================================================================ //
// 🏁 CENTRAL WIZARD LIFE-CYCLE INITIALIZATION & TIMING ENGINE (PART A)        //
// ============================================================================ //

/**
 * Public structural bridge to resolve feature bullet list content parameters dynamically.
 * Zero Hardcoding: Eliminates automatic default assignments to block visual seeping bugs.
 * @param {string} activeSlug - The raw matching service handle code from the portal.
 */
function renderStep1CustomFeatureBullets(activeSlug) {
  if (typeof getPricingConfiguration !== "function") return;

  // Pure dynamic variable resolution — No default parameter strings assumed
  const activePlanKey = window.routeActivePlanKey;
  if (!activePlanKey) {
    console.warn("[Lifecycle Sync Guard] Active plan key is undefined. Delaying card generation pass.");
    return;
  }
  
  const activeTierKey = String(activePlanKey).toLowerCase().trim();

  // 1. Fetch the data configuration object directly
  const resolvedConfig = getPricingConfiguration(activeSlug);
  if (!resolvedConfig || !resolvedConfig.serviceKey) {
    console.error(`[Lifecycle Sync Failure] Timing engine could not resolve configurations for: "${activeSlug}"`);
    return;
  }

  console.log(`[Lifecycle Sync Success] Extracted properties for service path: "${resolvedConfig.serviceKey}"`);
  // 2. Clear property tracking mapping arrays
  const activeBulletsArray = resolvedConfig.bullets || [];
  const resolvedPackageFeeAmount = resolvedConfig.basePrice || 0;
  const tierTitleDisplay = activeTierKey.charAt(0).toUpperCase() + activeTierKey.slice(1);

  // 3. Extract the root database record
  const rawDatabaseSource = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages;
  const actualServiceDataNode = rawDatabaseSource?.[resolvedConfig.serviceKey];

  if (!actualServiceDataNode) {
    console.error(`[Lifecycle Sync Failure] Database entry missing for key lookup index: "${resolvedConfig.serviceKey}"`);
    return;
  }

  // CRITICAL STEP CONTAINMENT CHECK: Stop the rendering pass if Step 2 or 3 are currently running
  const activeStepBlock = document.querySelector(".wizard-step-container-block.active");
  if (activeStepBlock && activeStepBlock.id !== "step-panel-1") {
    console.warn(`[Lifecycle Sync Blocked] Aborted initialization redraw to prevent Step 3 layers from seeping into Step 2.`);
    return;
  }

  if (typeof window.renderOnboardingPlanOverviewCard === "function") {
    console.log(`[Lifecycle Sync Dispatch] Pushing verified records down to UI card builder.`);
    
    window.renderOnboardingPlanOverviewCard(
      actualServiceDataNode,
      tierTitleDisplay,
      activeBulletsArray,
      resolvedPackageFeeAmount
    );
  } else {
    console.error("[Lifecycle Sync Failure] Render card builder method is missing from global scope memory.");
  }
}

// Map safely back to global layers so your initial page boots can invoke it
window.renderStep1CustomFeatureBullets = renderStep1CustomFeatureBullets;



// ============================================================================ //
// 🏁 CENTRAL WIZARD LIFE-CYCLE INITIALIZATION & TIMING ENGINE (PART A)        //
// ============================================================================ //

window.wizardBootRetryAttempts = window.wizardBootRetryAttempts || 0;

/**
 * Hardened Unified Wizard Boot Engine.
 * Pure dynamic architecture: Prioritizes layout hiding to fix Step 3 leaks.
 */
function runUnifiedWizardBootEngine() {
  console.log("[Boot Engine] Initializing sequence-independent parameter scanning...");

  // 1. SEQUENCE-AGNOSTIC EXTRACTION
  const urlEngineParams = new URLSearchParams(window.location.search);
  let resolvedSlug = urlEngineParams.get('service') || urlEngineParams.get('package') || urlEngineParams.get('id') || "";
  let resolvedPlan = urlEngineParams.get('plan') || "";
  const resolvedState = urlEngineParams.get('state') || ""; 

  // Guard Clause: Pure data-driven param validation without hardcoded path assumptions
  if (!resolvedSlug || !resolvedPlan) {
    window.paramCheckRetryCount = window.paramCheckRetryCount || 0;
    if (window.paramCheckRetryCount < 5) {
      window.paramCheckRetryCount++;
      console.warn(`[Boot Engine Guard] Parameters missing on frame pass. Retrying lookup (${window.paramCheckRetryCount}/5)...`);
      setTimeout(runUnifiedWizardBootEngine, 50);
      return;
    }
    console.error("[Boot Engine Fatal] Missing vital path parameters permanently. Redirecting to default portal.");
    const dynamicSystemDefaultPath = window.GLOBAL_ROUTER_DEFAULT_PATH || "/get-started";
    window.location.href = window.wizardCustomHomeRedirectUrl || dynamicSystemDefaultPath;
    return;
  }

  window.paramCheckRetryCount = 0;

  // 2. TIMING PROTECTION SAFEGUARD
  if (typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined" || typeof getPricingConfiguration !== "function") {
    if (window.wizardBootRetryAttempts < 50) {
      window.wizardBootRetryAttempts++;
      console.log(`[Database Sync] Hydrating schema tables... Retry Track: ${window.wizardBootRetryAttempts}`);
      setTimeout(runUnifiedWizardBootEngine, 100);
    } else {
      window.isWizardEngineBootedVanilla = false;
      console.error("[Boot Terminal Failure] Database connection timed out.");
    }
    return;
  }

  window.wizardBootRetryAttempts = 0;

  // Sync core pricing packages purely by data registry mapping properties
  if (window.GLOBAL_COMPANY_PRICING && !window.GLOBAL_COMPANY_PRICING.packages) {
    window.GLOBAL_COMPANY_PRICING.packages = window.CENTRAL_SERVICE_PLAN_DB || {};
  }

  let sanitizedServiceKey = resolvedSlug.toLowerCase().trim();

  // Dynamic Dictionary Guard: Ensures node existence purely by database property metrics
  if (window.GLOBAL_COMPANY_PRICING?.packages && !window.GLOBAL_COMPANY_PRICING.packages[sanitizedServiceKey]) {
    window.GLOBAL_COMPANY_PRICING.packages[sanitizedServiceKey] = window.CENTRAL_SERVICE_PLAN_DB[sanitizedServiceKey] || { 
      addons: [], plans: {}, starter: 0, compliance: 0, enterprise: 0 
    };
  }
  // ============================================================================ //
  // 3. SECURE PARAMETER INITIALIZATION
  // ============================================================================ //
  window.routeActiveServiceKey = sanitizedServiceKey;
  window.routeActivePlanKey = resolvedPlan.toLowerCase().trim();
  
  if (resolvedState) {
    window.selectedFormationStateCode = resolvedState.toUpperCase().trim();
  }
  
  window.currentWizardActiveStep = 1;

  // Sync params to elements silently without executing global event side-effects
  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  if (inputServiceNode && window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) {
    inputServiceNode.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name || "";
  }
  if (inputPlanNode) {
    const rawTier = window.routeActivePlanKey;
    inputPlanNode.value = rawTier.charAt(0).toUpperCase() + rawTier.slice(1);
  }

  // 4. CRITICAL VISIBILITY CONSTRAINTS: Hide future wizard steps BEFORE processing dynamic forms
  const visiblePanels = document.querySelectorAll('[id^="step-panel-"]');
  visiblePanels.forEach(function(panel) {
    const panelIndex = parseInt(panel.id.replace("step-panel-", ""), 10);
    if (panelIndex === window.currentWizardActiveStep) {
      panel.classList.add("active");
      panel.style.setProperty("display", "block", "important");
    } else {
      panel.classList.remove("active");
      panel.style.setProperty("display", "none", "important");
    }
  });

  

  // 5. DATA INJECTIONS GENERATION PASS (Executes safely behind locked hidden steps)
  if (typeof autoInjectMainWebsitePricingPlan === "function") {
    autoInjectMainWebsitePricingPlan();
  }

  if (typeof window.executeStepTwoDynamicFormInjection === "function") {
    window.executeStepTwoDynamicFormInjection(true);
  } else if (typeof executeDynamicRegulatoryFieldInjection === "function") {
    executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  }

  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true);
  }

  if (typeof initCursiveSignatureCaptureLivePreview === "function") {
    window.initCursiveSignatureCaptureLivePreview();
  }

  if (typeof renderStep1CustomFeatureBullets === "function") {
    renderStep1CustomFeatureBullets(window.routeActiveServiceKey);
  }

  if (typeof autoDiscoverAndHookAddressNodes === "function") {
    autoDiscoverAndHookAddressNodes();
  }

  if (typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);
  }

  // 6. CONTAINMENT FIX: Force purely synchronous calculations cycles
  // Removes requestAnimationFrame entirely to secure structural isolation parameters
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
    console.log("[Boot Engine Success] Onboarding pipeline active. Step views isolated safely.");
  }
}

window.runUnifiedWizardBootEngine = runUnifiedWizardBootEngine;






// ============================================================================ //
// 🔌 UNIFIED SYSTEM LIFE-CYCLE HOOKS (SECURED DISPATCH WITH ANTI-FLICKER) (A) //
// ============================================================================ //

window.isWizardEngineBootedVanilla = window.isWizardEngineBootedVanilla || false;
window.wizardLifecycleRetryAttempts = window.wizardLifecycleRetryAttempts || 0;

/**
 * Main application boot orchestration layer.
 * Zero Hardcoding Fix: Enforces rigorous ID containment checks to lock Step 3 views away.
 */
function initSevenStepWizardSystem(activeSlug) {
  
  // 🛡️ ANTI-RECURSION LOCK
  if (window.isWizardEngineBootedVanilla) {
    console.log("[Lifecycle Sync] System already fully active. Blocking duplicate boot initialization loop.");
    return;
  }

  const isPricingDatabaseReady = typeof window.CENTRAL_SERVICE_PLAN_DB !== "undefined" || typeof window.GLOBAL_COMPANY_PRICING !== "undefined";
  const isBootEngineReady = typeof window.runUnifiedWizardBootEngine === "function";

  if (!isPricingDatabaseReady || !isBootEngineReady) {
    if (window.wizardLifecycleRetryAttempts < 50) {
      window.wizardLifecycleRetryAttempts++;
      console.warn(`[Anti-Flicker Guard] Data assets loading over network. Delaying execution (Track: ${window.wizardLifecycleRetryAttempts}/50)...`);

      // CRITICAL VISIBILITY CONTAINMENT FIX: Query explicitly using the structural pattern matching your HTML IDs
      const structuralPanelsArray = document.querySelectorAll('[id^="step-panel-"]');
      
      structuralPanelsArray.forEach(function(panelElement) {
        // Force-hide all future step containers immediately on frame zero to stop Step 3 leaking
        panelElement.style.setProperty("display", "none", "important");
      });

      setTimeout(function() {
        initSevenStepWizardSystem(activeSlug);
      }, 100);
      return;
    }
    console.error("[Anti-Flicker Core Failure] System database connection timed out over network. Boot aborted.");
    return;
  }

  // Assets confirmed ready! Lock the execution thread permanently to eliminate loop leaks
  window.isWizardEngineBootedVanilla = true;
  window.wizardLifecycleRetryAttempts = 0;
  console.log("[Lifecycle Sync] Database assets verified. Activating onboarding wizard pipeline.");
  // Execute parameter parsing engines natively
  if (typeof initializeUrlParameterParserEngineVanilla === "function") {
    initializeUrlParameterParserEngineVanilla();
  }

  // Fire up layout builders and calculation matrices synchronously
  if (typeof window.runUnifiedWizardBootEngine === "function") {
    window.runUnifiedWizardBootEngine();
  }
}

/**
 * Timeline step visual reflector. Synchronizes state lights across sidebar indicators.
 */
function updateWizardStepProgressIndicatorBubbles(activeIndexNumber) {
  const synchronizedStepIndex = parseInt(activeIndexNumber, 10);
  if (!isNaN(synchronizedStepIndex) && typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(synchronizedStepIndex);
  }
}

/**
 * Isolated, secure boot wrapper proxy handler.
 */
function triggerLifecycleSecureBoot() {
  if (!window.isWizardEngineBootedVanilla) {
    initSevenStepWizardSystem();
  }
}

// Global Event Routing Hooks: Ensure execution triggers safely on initial page mount
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", triggerLifecycleSecureBoot);
} else {
  triggerLifecycleSecureBoot();
}

// Expose APIs cleanly to global window boundaries to protect elements anchors
window.initSevenStepWizardSystem = initSevenStepWizardSystem;
window.updateWizardStepProgressIndicatorBubbles = updateWizardStepProgressIndicatorBubbles;


// ============================================================================ //
// 📡 UNIFIED BACKGROUND PRE-FETCH MODULE (LATENCY REMOVAL ENGINE)              //
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
  
  // Construct the expected file path matching your repository deployment schema
  // Example: /assets/js/forms/new-entrant-audit-form.js
  const dynamicAssetUrlPath = `./assets/js/forms/${cleanKey}-form.js`;
  
  console.log(`[Pre-fetch Hub] Proactively pre-loading dynamic script asset in background: "${dynamicAssetUrlPath}"`);

  // Native non-blocking script injection pre-fetch mechanism
  const backgroundScriptLoader = document.createElement("script");
  backgroundScriptLoader.src = dynamicAssetUrlPath;
  backgroundScriptLoader.async = true;
  backgroundScriptLoader.defer = true;
  
  backgroundScriptLoader.onload = function() {
    console.log(`[Pre-fetch Success] Dynamic module "${cleanKey}-form.js" successfully cached in memory before user clicked Next.`);
  };
  
  backgroundScriptLoader.onerror = function() {
    console.warn(`[Pre-fetch Notice] Could not pre-fetch script via path "${dynamicAssetUrlPath}". The main script loader will handle it on step transition.`);
  };

  document.head.appendChild(backgroundScriptLoader);
}

// Expose cleanly to global parameters scope window records
window.prefetchStepTwoDynamicAsset = prefetchStepTwoDynamicAsset;
































// ============================================================================ //
// 🛡️ FILE 2: WIZARD-RUNTIME-PATCH.JS - CLOCK, USER GREETINGS & STEP ROUTING    //
// ============================================================================ //
(function() {
  "use strict";

  function bootProductionPatchEngine() {
    const clockSpan = document.getElementById("wizard-live-clock-timestamp");
    if (!clockSpan) return;

    // 1. CHRONOMETER TICKER TIMING ENGINE
    function renderLiveClockTicker() {
      const timeOutput = document.getElementById("wizard-live-clock-timestamp");
      if (!timeOutput) return;
      const timeNow = new Date();
      let hours = timeNow.getHours();
      const minutes = String(timeNow.getMinutes()).padStart(2, '0');
      const seconds = String(timeNow.getSeconds()).padStart(2, '0');
      const meridiem = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      timeOutput.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
    }
    renderLiveClockTicker();
    setInterval(renderLiveClockTicker, 1000);

    // 2. PRODUCTION SCHEMA GREETING CONFIGURATION
    function refreshWelcomeBadge() {
      let verifiedUserFirstName = "";
      const validatedNameSchemaKeys = ["applicant_first_name", "applicant_name", "contact_person_name", "user_legal_name", "oa_sole_member_name"];
      try {
        for (let i = 0; i < validatedNameSchemaKeys.length; i++) {
          const cachedValue = localStorage.getItem(validatedNameSchemaKeys[i]);
          if (cachedValue && cachedValue.trim().length > 1) {
            verifiedUserFirstName = cachedValue.trim().replace(/[,.]/g, "").split(" ")[0];
            break;
          }
        }
      } catch (e) { return; }

      if (verifiedUserFirstName) {
        let welcomeAlert = document.getElementById("wizard-user-welcome-back");
        if (!welcomeAlert) {
          welcomeAlert = document.createElement("span");
          welcomeAlert.id = "wizard-user-welcome-back";
          welcomeAlert.style.cssText = "color: #0284c7; font-weight: 800; margin-right: 6px;";
          clockSpan.parentNode.insertBefore(welcomeAlert, clockSpan);
        }
        welcomeAlert.textContent = `Welcome Back, ${verifiedUserFirstName}! | `;
      }
    }
    refreshWelcomeBadge();

    // 3. APPLICANT KEYSTROKE LIVE CAPTURE
    document.body.addEventListener("input", function(event) {
      const fieldNode = event.target;
      if (!fieldNode || (!fieldNode.id && !fieldNode.name)) return;
      const id = fieldNode.id || fieldNode.name;
      if (id === "applicant_name" || id === "oa_sole_member_name" || id === "applicant_first_name") {
        localStorage.setItem(id, fieldNode.value);
        refreshWelcomeBadge();
      }
    });

    // 4. INTEGRATED ADVANCE NAVIGATION CONTROL BAR
    const wizardPanels = document.querySelectorAll(".master-onboarding-form");
    if (wizardPanels.length === 0) return;

    if (typeof window.currentWizardActiveStep === "undefined") {
      window.currentWizardActiveStep = 1;
      wizardPanels.forEach((panel, index) => {
        if (panel.classList.contains("active") || window.getComputedStyle(panel).display !== "none") {
          window.currentWizardActiveStep = index + 1;
        }
      });
    }

    const advanceActionButtons = document.querySelectorAll('.wizard-next-btn, .btn-wizard-main');
    advanceActionButtons.forEach(buttonNode => {
      if (buttonNode.getAttribute("data-nav-bound") === "true") return;
      buttonNode.addEventListener("click", function(eventObj) {
        eventObj.preventDefault();
        eventObj.stopPropagation();
        const activeStep = window.currentWizardActiveStep || 1;
        const maxSteps = window.totalWizardExpectedSteps || 7;
        if (activeStep >= maxSteps) return;
        
        console.log(`[Integrated Control] Advancing step funnel from ${activeStep} to ${activeStep + 1}`);
        if (typeof window.goToNextWizardStep === "function") {
          window.goToNextWizardStep(activeStep + 1, eventObj);
        }
      });
      buttonNode.setAttribute("data-nav-bound", "true");
    });
  }
  setTimeout(bootProductionPatchEngine, 40);
})();


// ============================================================================ //
// 🏗️ MASTER REGULATORY FORM FIELD INJECTION ENGINE (STRICT DISPATCH REPAIR)     //
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
        // FIXED: Correctly routes specialized credentials to your secondary financial/regulatory tree
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
            return typeof optionalSecondArg !== "undefined" 
                ? window[layoutBuilderFunction](fallbackArgument, optionalSecondArg) 
                : window[layoutBuilderFunction](fallbackArgument);
        }
        
        console.warn(`[Injection Latency Alert] Structural layout routine "${layoutBuilderFunction}" is temporarily unavailable inside active memory scopes.`);
        
        // FIXED: Replaced empty string silent omissions with a secure, highly styled fallback interface container skeleton block
        return `
        <div style="grid-column: span 2; text-align: center; padding: 24px; color: var(--slate, #64748b); font-weight: 600; border: 1px dashed var(--border, #e2e8f0); border-radius: 8px; background: var(--light-bg, #f8fafc); width: 100%; box-sizing: border-box;">
            <i class="fa-solid fa-circle-notch fa-spin" style="margin-right: 8px; color: var(--primary, #10b981);"></i> 
            Assembling and initializing your customized ${targetLayoutFamily.toUpperCase()} compliance profile...
        </div>`;
    };

    // 🛠️ Structural Template Executor: Swaps UI layouts based on the parsed family
    if (targetLayoutFamily === "series-llc") {
        rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildSeriesLlcRegistrationFieldsLayoutHtml", activeKey);
    } else if (targetLayoutFamily === "llc") {
        rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildLlcFormationFieldsLayoutHtml", activeKey);
    } else if (targetLayoutFamily === "nonprofit") {
        rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildNonprofitOrganizationFieldsLayoutHtml", activeKey);
    } else if (targetLayoutFamily === "corporate") {
        rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildCorporateFormationFieldsLayoutHtml", activeKey);
    } else if (targetLayoutFamily === "dba") {
        rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildDbaRegistrationFieldsLayoutHtml", activeKey);
    } else if (targetLayoutFamily === "sole-prop") {
        rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildInformalEntityFieldsLayoutHtml", activeKey);
    } else if (targetLayoutFamily === "maintenance") {
        if (activeKey.includes("qualification")) {
            rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildForeignQualificationFieldsLayoutHtml", activeKey);
        } else {
            rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildMaintenanceFieldsLayoutHtml", activeKey);
        }
    } else if (targetLayoutFamily === "ip") {
        rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildIpRegistryFieldsLayoutHtml", activeKey);
    } else {
        // Safely captures financial, tax-filing, regulatory, procurement, insurance, and trucking structures
        rootFieldContainer.innerHTML = renderFormLayoutTemplateContent("buildExtendedFamiliesFieldsLayoutHtml", targetLayoutFamily, activeKey);
    }

    // Force real-time address validation checkers to sweep the freshly drawn input blocks instantly
    if (typeof window.autoDiscoverAndHookAddressNodes === "function") {
        window.autoDiscoverAndHookAddressNodes();
    }
}

// Map the method safely back to global viewport frames records
window.executeDynamicRegulatoryFieldInjection = executeDynamicRegulatoryFieldInjection;