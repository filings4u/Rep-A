// ============================================================================ //
// 🏛️ CENTRAL GOVERNMENT & REGULATORY AGENCY FILING FEE DATABASE               //
// ============================================================================ //
window.CENTRAL_SERVICE_PLAN_DB = window.CENTRAL_SERVICE_PLAN_DB || {};
window.FILINGS4U_GOVERNMENT_PRICING = window.FILINGS4U_GOVERNMENT_PRICING || {
    "trucker-authority": 300.00,       /* Standard FMCSA regulatory application tariff */
    "broker-authority": 300.00,        /* Standard FMCSA broker processing tariff */
    "heavy-use-tax-2290": 0.00,             /* Form 2290 baseline processing tariff code */
    "hazmat-registration": 0.00,       /* Baseline hazardous materials data allocation */
    "llc-formation": 0.00,             /* Overridden contextually by state-pricing.js matrices */
    "corporations": 0.00
};

// 🟢 FIX: Flattens the payloads cleanly to prevent unexpected token parsing runtime failures
const regulatoryPackagePayload = {
    "federal-tax": { 
        name: "Federal Income Tax", starter: 299.00, compliance: 499.00, enterprise: 799.00, 
        bullets: { 
            starter: ["Basic federal tax preparation", "Form document accuracy audit"], 
            compliance: ["Everything in Starter (Plus)", "Tax planning matrix consultation", "Quarterly payment calculations"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus IRS Audit Defense", "Dedicated certified public accountant support"] 
        } 
    }, 
    "employer-id-ein": { 
        name: "Employer ID (EIN)", starter: 79.00, compliance: 149.00, enterprise: 199.00, 
        bullets: { 
            starter: ["EIN application assistance", "Digital document verification check"], 
            compliance: ["Everything in Starter (Plus)", "Plus IRS form prep", "Official tracking and receipt dispatch"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Resolution Sheet", "Expedited corporate banking activation support"] 
        } 
    }, 
    "heavy-use-tax-2290": { 
        name: "Heavy Use Tax (2290)", starter: 99.00, compliance: 179.00, enterprise: 249.00, 
        bullets: { 
            starter: ["One vehicle preparation", "E-file generation dispatch setup"], 
            compliance: ["Everything in Starter (Plus)", "Plus Instant Schedule 1", "IRS stamp verification management"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Dedicated Specialist", "Full audit trail file archival logs"] 
        } 
    }, 
    "cage-code": { 
        name: "CAGE Code", starter: 249.00, compliance: 349.00, enterprise: 449.00, 
        bullets: { 
            starter: ["Application assistance", "SAM profile initialization setup"], 
            compliance: ["Everything in Starter (Plus)", "Plus Status monitoring", "System configuration anomaly checks"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Verification Support", "Priority federal procurement specialist routing"] 
        } 
    }, 
    "owner-operators": { 
        name: "Owner Operators", starter: 199.00, compliance: 299.00, enterprise: 499.00, 
        bullets: { 
            starter: ["Business structure advice", "Initial setup protocol guidelines"], 
            compliance: ["Everything in Starter (Plus)", "Plus Full compliance pack", "Ongoing permit status monitoring alerts"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Entrant Orientation", "Direct multi-state operational strategic routing"] 
        } 
    }, 
    "trucker-authority": { 
        name: "Trucker Authority", starter: 199.00, compliance: 299.00, enterprise: 499.00, 
        bullets: { 
            starter: ["Authority preparation", "MC and DOT registration setups"], 
            compliance: ["Everything in Starter (Plus)", "Plus Support documentation", "FMCSA portal configuration checks"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Uniform Filing", "Expedited active certificate dispatch processing"] 
        } 
    }, 
    "broker-authority": { 
        name: "Broker Authority", starter: 199.00, compliance: 299.00, enterprise: 499.00, 
        bullets: { 
            starter: ["Basic preparation", "Filing setup documentation processing"], 
            compliance: ["Everything in Starter (Plus)", "Plus Public Protest Monitoring", "BOC-3 assignment check setup"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Certificate Delivery", "Priority surety bond integration assistance"] 
        } 
    }, 
    "ucr-registration": { 
        name: "UCR Registration", starter: 99.00, compliance: 179.00, enterprise: 249.00, 
        bullets: { 
            starter: ["Registration assistance", "Unified Carrier database lookup check"], 
            compliance: ["Everything in Starter (Plus)", "Plus Compliance reminders", "Annual state validation status review"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Multi-State Monitoring", "Automated renewal processing matrix routing"] 
        } 
    }, 
    "scac-code": { 
        name: "SCAC Code Registration", starter: 49.00, compliance: 99.00, enterprise: 149.00, 
        bullets: { 
            starter: ["Application assistance", "NMFTA alignment profile review"], 
            compliance: ["Everything in Starter (Plus)", "Plus Status tracking", "Digital transmission verification support"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Renewal Automation", "Priority system standard code updates"] 
        } 
    }, 
    "dot-consortium": { 
        name: "DOT Consortium", starter: 149.00, compliance: 299.00, enterprise: 499.00, 
        bullets: { 
            starter: ["Program enrollment", "Testing pool configuration assistance"], 
            compliance: ["Everything in Starter (Plus)", "Plus Compliance monitoring", "Random selection management protocols"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Clearinghouse Queries", "Complete audit trail folder assembly"] 
        } 
    }, 
    "driver-file": { 
        name: "Driver Qualification File", starter: 279.00, compliance: 349.00, enterprise: 449.00, 
        bullets: { 
            starter: ["Basic file preparation", "DOT requirement list compliance check"], 
            compliance: ["Everything in Starter (Plus)", "Plus Employment History Form", "Medical certificate tracking alerts"], 
            enterprise: ["Everything in Compliance (Plus)", "Plus Background Integration", "Continuous dynamic driver record updates"] 
        } 
    }, 
    "process-agents-boc-3": { 
        name: "Process Agents (BOC-3)", starter: 49.00, compliance: 99.00, enterprise: 149.00, 
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
};

// Map parameters smoothly into the centralized core database reference context pool
Object.assign(window.CENTRAL_SERVICE_PLAN_DB, regulatoryPackagePayload);
window.GOVERNMENT_PRICING = { packages: window.CENTRAL_SERVICE_PLAN_DB };

// ============================================================================ //
// 🏛️ CENTRAL GOVERNMENT & REGULATORY AGENCY FILING FEE DATABASE               //
// ============================================================================ //
/**
 * Global filing tariff lookup table.
 * Mandated by state tax comptrollers and federal regulators to handle official filing expenses.
 * Zero Hardcoding Method: Managed as a data registry to decouple from functional code.
 */
window.FILINGS4U_GOVERNMENT_PRICING = window.FILINGS4U_GOVERNMENT_PRICING || { 
    "trucker-authority": 300.00, /* Standard FMCSA regulatory application tariff */ 
    "broker-authority": 300.00,  /* Standard FMCSA broker processing tariff */ 
    "heavy-use-tax-2290": 0.00,       /* Form 2290 baseline processing tariff code */ 
    "hazmat-registration": 0.00, /* Baseline hazardous materials data allocation */ 
    "llc-formation": 0.00,       /* Overridden contextually by state-pricing.js matrices */ 
    "corporations": 0.00 
}; 

// Bind to window scope cleanly to guarantee universal availability 
window.FILINGS4U_GOVERNMENT_PRICING = window.FILINGS4U_GOVERNMENT_PRICING; 

// ============================================================================ // 
// 🗃️ HIGHWAY USE TAX (FORM 2290) DYNAMIC PRICING CONFIGURATION LAYER         // 
// ============================================================================ // 
window.CENTRAL_SERVICE_PLAN_DB = window.CENTRAL_SERVICE_PLAN_DB || {}; 

window.CENTRAL_SERVICE_PLAN_DB["heavy-use-tax-2290"] = { 
    name: "Heavy Use Tax 2290", 
    starter: 39.00, 
    compliance: 59.00, 
    enterprise: 99.00, 
    additional_truck_fee: 25.00, // <--- Modify this number anytime, the calculation script updates dynamically. 
    bullets: [ 
        "IRS Watermark Schedule 1 Securement", 
        "24/7 Fleet Audit Compliance Assurances", 
        "Automated IRS Revision Protection" 
    ] 
};


// ============================================================================ //
// 🏛️ CENTRAL STATE & REGULATORY JURISDICTION FILING FEES DATABASE              //
// ============================================================================ //
window.GOVT_REGULATORY_FEES = window.GOVT_REGULATORY_FEES || {};

Object.assign(window.GOVT_REGULATORY_FEES, {
  // Existing requested authorities
  "trucker-authority": { 
    name: "Trucker Authority", 
    time: "25-30 Business Days", 
    "trucker-authority": 300.00
  }, 
  "broker-authority": { 
    name: "Broker Authority", 
    time: "25-30 Business Days", 
    "broker-authority": 300.00
  },

  // Additional FMCSA Core Registrations
  "fmcsa-cargo-tank-facility": {
    name: "Cargo Tank Facility Registration (CT Number)",
    time: "15-20 Business Days",
    "filing-fee": 0.00
  },
  "hazmat-registration": {
    name: "Hazardous Materials Safety Permit (HMSP)",
    time: "20-30 Business Days",
    "filing-fee": 0.00
  },

  // Federal Identity & Operational Codes
  "usdot-number": {
    name: "USDOT Number Registration",
    time: "Instant Processing",
    "filing-fee": 0.00
  },
  "scac-code": {
    name: "Standard Carrier Alpha Code (SCAC)",
    time: "1-2 Business Days",
    "filing-fee": 95.00
  },

  // Legal Filings & Compliance Services
  "process-agents-boc-3": {
    name: "BOC-3 Designate Process Agent Filing",
    time: "1-2 Business Days",
    "filing-fee": 50.00
  },
  "fmcsa-name-change": {
    name: "FMCSA Operating Authority Name Change",
    time: "5-7 Business Days",
    "filing-fee": 14.00
  },
  "fmcsa-reinstatement": {
    name: "Operating Authority Reinstatement Application",
    time: "3-5 Business Days",
    "filing-fee": 80.00
  },

  // Unified Carrier Registration (UCR) 2026 Tier Structure Base Fees
  "ucr-tier-1": {
    name: "UCR Fleet Size 0-2 Vehicles",
    time: "1-2 Business Days",
    "filing-fee": 37.00
  },
  "ucr-tier-2": {
    name: "UCR Fleet Size 3-5 Vehicles",
    time: "1-2 Business Days",
    "filing-fee": 111.00
  },
  "ucr-tier-3": {
    name: "UCR Fleet Size 6-20 Vehicles",
    time: "1-2 Business Days",
    "filing-fee": 221.00
  },
  "ucr-tier-4": {
    name: "UCR Fleet Size 21-100 Vehicles",
    time: "1-2 Business Days",
    "filing-fee": 769.00
  },

  // Additional Trucking Tax & Exemption Permits
  "heavy-use-tax-2290": {
    name: "IRS Form 2290 Heavy Highway Vehicle Use Tax (Base)",
    time: "Instant Processing",
    "filing-fee": 0.00
  },
  "ifta-permit": {
    name: "International Fuel Tax Agreement (IFTA) License",
    time: "7-14 Business Days",
    "filing-fee": 10.00
  },
  "irp-registration": {
    name: "International Registration Plan (IRP) Setup",
    time: "10-15 Business Days",
    "filing-fee": 0.00
  }
});
