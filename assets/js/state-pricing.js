// ============================================================================ //
// 🏛️ MODULE 1: BASE SYSTEM DATABASE INITIALIZATION (SERVICES 1 - 15)           //
// ============================================================================ //
window.GLOBAL_COMPANY_PRICING = window.GLOBAL_COMPANY_PRICING || { packages: {}, addons: {} };


Object.assign(window.GLOBAL_COMPANY_PRICING.packages, {
  "llc-formation": {
    name: "LLC Formation",
    starter: 99.00,
    compliance: 199.00,
    enterprise: 299.00,
    bullets: {
      starter: ["Articles of Organization Filing", "Standard Processing", "Digital Delivery", "Operating Agreement Template"],
      compliance: ["Everything in Basic (plus)", "Elite Compliance Guard", "Priority Submission", "Registered Agent Service (1 Year)", "Employer Identification Number"],
      enterprise: ["Everything in Elite (plus)", "Complete Enterprise Asset Suite", "White Glove Execution", "Instant Turnaround", "Corporate Binder & Seal"]
    }
  },
  "corporation": {
    name: "Corporations (C/S-Corp)",
    starter: 129.00,
    compliance: 249.00,
    enterprise: 599.00,
    bullets: {
      starter: ["Name availability search", "State filing fees included", "Corporate Bylaws"],
      compliance: ["Everything in Basic (plus)", "Registered agent service for 1 year", "Employer Identification Number"],
      enterprise: ["Everything in Elite (plus)", "Corporate Binder", "Corporate Seal", "Compliance Monitoring (1 Year)"]
    }
  },
  "sole-proprietorship": {
    name: "Sole Proprietorship",
    starter: 79.00,
    compliance: 159.00,
    enterprise: 239.00,
    bullets: {
      starter: ["Initial business name registration", "Business tips and resources"],
      compliance: ["Everything in Basic (plus)", "DBA registration", "Employer Identification Number", "Operating Agreement"],
      enterprise: ["Everything in Elite (plus)", "Customized business license research", "Business Plan Template"]
    }
  },
  "dba-registration": {
    name: "DBA Registration",
    starter: 39.00,
    compliance: 99.00,
    enterprise: 159.00,
    bullets: {
      starter: ["Name availability check", "Filing with the county"],
      compliance: ["Everything in Basic (plus)", "Guidance on renewal process"],
      enterprise: ["Everything in Elite (plus)", "State-wide DBA registration option"]
    }
  },
  "nonprofit-organization": {
    name: "Nonprofit Organization",
    starter: 149.00,
    compliance: 299.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Articles of incorporation preparation", "Name availability search"],
      compliance: ["Everything in Basic (plus)", "501(c)(3) application assistance"],
      enterprise: ["Everything in Elite (plus)", "IRS compliance package"]
    }
  },
  "series-llc": {
    name: "Series LLC",
    starter: 199.00,
    compliance: 299.00,
    enterprise: 399.00,
    bullets: {
      starter: ["State filing fees included", "Initial series setup guidance"],
      compliance: ["Everything in Basic (plus)", "Operating agreement for series"],
      enterprise: ["Everything in Elite (plus)", "Customized tax and legal strategy guidance"]
    }
  },
  "foreign-qualification": {
    name: "Foreign Qualification Certificate",
    starter: 149.00,
    compliance: 249.00,
    enterprise: 349.00,
    bullets: {
      starter: ["Eligibility assessment", "Preparation of application"],
      compliance: ["Everything in Basic (plus)", "Registered agent service in the foreign state"],
      enterprise: ["Everything in Elite (plus)", "Compliance reminders and support"]
    }
  },
  "llc-reinstatement": {
    name: "LLC Reinstatement Processing",
    starter: 79.00,
    compliance: 149.00,
    enterprise: 249.00,
    bullets: {
      starter: ["Review of reinstatement eligibility", "Basic instructions provided"],
      compliance: ["Everything in Basic (plus)", "Preparation and submission of forms"],
      enterprise: ["Everything in Elite (plus)", "Follow-up and support through reinstatement"]
    }
  },
  "trademark-filing": {
    name: "Trademark Filing",
    starter: 199.00,
    compliance: 299.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Trademark search", "Basic application filing"],
      compliance: ["Everything in Basic (plus)", "Preparation of a comprehensive application"],
      enterprise: ["Everything in Elite (plus)", "Monitoring and support for registration process"]
    }
  },
  "servicemark-filing": {
    name: "Servicemark Filing",
    starter: 199.00,
    compliance: 299.00,
    enterprise: 399.00,
    bullets: {
      starter: ["Servicemark search", "Application filing"],
      compliance: ["Everything in Basic (plus)", "Status tracking for 1 year"],
      enterprise: ["Everything in Elite (plus)", "Legal consultation on infringement issues"]
    }
  },
  "annual-reports": {
    name: "Annual Reports",
    starter: 89.00,
    compliance: 159.00,
    enterprise: 249.00,
    bullets: {
      starter: ["Reminder service for due dates", "Filing support for one year"],
      compliance: ["Everything in Basic (plus)", "Preparation and filing assistance"],
      enterprise: ["Everything in Elite (plus)", "Ongoing compliance checks"]
    }
  },
  "operating-agreement": {
    name: "Operating Agreement",
    starter: 49.00,
    compliance: 99.00,
    enterprise: 199.00,
    bullets: {
      starter: ["Standard template provided"],
      compliance: ["Customized operating agreement template"],
      enterprise: ["Full drafting and consultation services"]
    }
  },
  "registered-agent": {
    name: "Registered Agent",
    starter: 99.00,
    compliance: 179.00,
    enterprise: 299.00,
    bullets: {
      starter: ["Registered agent services for one year"],
      compliance: ["Everything in Basic (plus)", "Mail forwarding service"],
      enterprise: ["Everything in Elite (plus)", "Annual compliance support"]
    }
  },
  "business-licenses": {
    name: "Business Licenses",
    starter: 79.00,
    compliance: 149.00,
    enterprise: 299.00,
    bullets: {
      starter: ["Basic license research"],
      compliance: ["License application assistance"],
      enterprise: ["Complete compliance package and ongoing support"]
    }
  },
  "employer-id-ein": {
    name: "Employer ID (EIN)",
    starter: 79.00,
    compliance: 149.00,
    enterprise: 199.00,
    bullets: {
      starter: ["EIN application assistance"],
      compliance: ["Everything in Basic (plus)", "IRS form preparation"],
      enterprise: ["Everything in Elite (plus)", "Tax planning consultation"]
    }
  }
});
// ============================================================================ //
// 🏛️ MODULE 2: DATA INJECTION (SERVICES 16 - 32)                               //
// ============================================================================ //
window.GLOBAL_COMPANY_PRICING = window.GLOBAL_COMPANY_PRICING || { packages: {}, addons: {} };

Object.assign(window.GLOBAL_COMPANY_PRICING.packages, {
  "entity-dissolution": {
    name: "Entity Dissolution",
    starter: 149.00,
    compliance: 249.00,
    enterprise: 349.00,
    bullets: {
      starter: ["Preparation of dissolution paperwork"],
      compliance: ["Everything in Basic (plus)", "Filing with the state"],
      enterprise: ["Complete compliance assistance and tax filings"]
    }
  },
  "good-standing": {
    name: "Certificate of Good Standing",
    starter: 49.00,
    compliance: 99.00,
    enterprise: 149.00,
    bullets: {
      starter: ["Application assistance"],
      compliance: ["Everything in Basic (plus)", "Mode of delivery options"],
      enterprise: ["Fast track filing service"]
    }
  },
  "apostille-services": {
    name: "Apostille Authentication Services",
    starter: 99.00,
    compliance: 179.00,
    enterprise: 299.00,
    bullets: {
      starter: ["Preparation and filing for one document"],
      compliance: ["Everything in Basic (plus)", "Multiple document discounts available"],
      enterprise: ["Comprehensive service with expedited processing"]
    }
  },
  "clia-certificate": {
    name: "CLIA Certificate",
    starter: 199.00,
    compliance: 349.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Basic consultation"],
      compliance: ["Application assistance"],
      enterprise: ["Full compliance support"]
    }
  },
  "legal-consulting": {
    name: "Custom Regulatory Legal Consulting",
    starter: 150.00,
    compliance: 1000.00,
    enterprise: 1000.00,
    bullets: {
      starter: ["Tailored consulting services ($150 / Hour)"],
      compliance: ["Package Plan: Pre-purchased 10 hours for ongoing support"],
      enterprise: ["Package Plan: Pre-purchased 10 hours for ongoing support"]
    }
  },
  "federal-tax": {
    name: "Federal Income Tax",
    starter: 299.00,
    compliance: 499.00,
    enterprise: 799.00,
    bullets: {
      starter: ["Basic federal tax preparation"],
      compliance: ["Everything in Basic (plus)", "Tax planning session included"],
      enterprise: ["Comprehensive tax strategy and filing"]
    }
  },
  "state-tax": {
    name: "State Income Tax",
    starter: 199.00,
    compliance: 349.00,
    enterprise: 549.00,
    bullets: {
      starter: ["State tax preparation"],
      compliance: ["Everything in Basic (plus)", "State compliance review"],
      enterprise: ["Full service with audit support"]
    }
  },
  "franchise-tax": {
    name: "Franchise Tax Filing",
    starter: 149.00,
    compliance: 249.00,
    enterprise: 399.00,
    bullets: {
      starter: ["Preparation and filing assistance"],
      compliance: ["Everything in Basic (plus)", "Compliance tracking and reminders"],
      enterprise: ["Full service with consultations"]
    }
  },
  "sales-tax": {
    name: "Sales Tax Registration",
    starter: 99.00,
    compliance: 199.00,
    enterprise: 299.00,
    bullets: {
      starter: ["Application assistance"],
      compliance: ["Everything in Basic (plus)", "Ongoing compliance support"],
      enterprise: ["Strategic sales tax planning"]
    }
  },
  "payroll-tax": {
    name: "Payroll Tax (940/941)",
    starter: 199.00,
    compliance: 349.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Basic payroll tax filing"],
      compliance: ["Everything in Basic (plus)", "Detailed payroll reporting"],
      enterprise: ["Comprehensive payroll solutions"]
    }
  },
  "heavy-use-tax": {
    name: "Heavy Use Tax (2290)",
    starter: 99.00,
    compliance: 179.00,
    enterprise: 249.00,
    bullets: {
      starter: ["Preparation assistance for one vehicle"],
      compliance: ["Everything in Basic (plus)", "Multiple vehicle discounts"],
      enterprise: ["Comprehensive compliance and auditing"]
    }
  },
  "cage-code": {
    name: "CAGE Code",
    starter: 249.00,
    compliance: 349.00,
    enterprise: 449.00,
    bullets: {
      starter: ["Application assistance"],
      compliance: ["Everything in Basic (plus)", "Status monitoring"],
      enterprise: ["Full service with registration support"]
    }
  },
  "duns-number": {
    name: "DUNS Number Procurement",
    starter: 49.00,
    compliance: 99.00,
    enterprise: 179.00,
    bullets: {
      starter: ["Step-by-step guidance"],
      compliance: ["Everything in Basic (plus)", "Expedited processing"],
      enterprise: ["Comprehensive support"]
    }
  },
  "minority-certificate": {
    name: "Minority Certificate",
    starter: 99.00,
    compliance: 249.00,
    enterprise: 399.00,
    bullets: {
      starter: ["Eligibility assessment"],
      compliance: ["Application assistance"],
      enterprise: ["Ongoing support and renewal"]
    }
  },
  "owner-operators": {
    name: "Owner Operators",
    starter: 199.00,
    compliance: 299.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Business structure advice"],
      compliance: ["Full compliance package"],
      enterprise: ["Financial planning services"]
    }
  },
  "trucker-authority": {
    name: "Trucker Authority",
    starter: 199.00,
    compliance: 299.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Authority application preparation"],
      compliance: ["Everything in Basic (plus)", "Support for compliance documentation"],
      enterprise: ["Full service with ongoing support"]
    }
  },
  "broker-authority": {
    name: "Broker Authority",
    starter: 199.00,
    compliance: 299.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Basic application preparation"],
      compliance: ["Everything in Basic (plus)", "Compliance support"],
      enterprise: ["Full service with network connections"]
    }
  }
});
// ============================================================================ //
// 🏛️ MODULE 3: DATA INJECTION (SERVICES 33 - 43 & SYSTEM ADDONS)              //
// ============================================================================ //
window.GLOBAL_COMPANY_PRICING = window.GLOBAL_COMPANY_PRICING || { packages: {}, addons: {} };

Object.assign(window.GLOBAL_COMPANY_PRICING.packages, {
  "ucr-registration": {
    name: "UCR Registration",
    starter: 99.00,
    compliance: 179.00,
    enterprise: 249.00,
    bullets: {
      starter: ["Registration assistance"],
      compliance: ["Everything in Basic (plus)", "Compliance reminders"],
      enterprise: ["Ongoing support services"]
    }
  },
  "scac-code": {
    name: "SCAC Code Registration",
    starter: 49.00,
    compliance: 99.00,
    enterprise: 149.00,
    bullets: {
      starter: ["Application assistance"],
      compliance: ["Everything in Basic (plus)", "Status tracking service"],
      enterprise: ["Complete registration support"]
    }
  },
  "dot-consortium": {
    name: "DOT Consortium",
    starter: 149.00,
    compliance: 299.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Program enrollment assistance"],
      compliance: ["Everything in Basic (plus)", "Compliance monitoring"],
      enterprise: ["Full service with ongoing audits"]
    }
  },
  "driver-file": {
    name: "Driver Qualification File",
    starter: 279.00,
    compliance: 349.00,
    enterprise: 449.00,
    bullets: {
      starter: ["Basic documentation preparation"],
      compliance: ["Everything in Basic (plus)", "Compliance packet preparation"],
      enterprise: ["Comprehensive management of files"]
    }
  },
  "process-agent-boc3": {
    name: "Process Agent (BOC-3)",
    starter: 49.00,
    compliance: 99.00,
    enterprise: 149.00,
    bullets: {
      starter: ["Filing assistance"],
      compliance: ["Everything in Basic (plus)", "Annual renewal support"],
      enterprise: ["Ongoing compliance service"]
    }
  },
  "ifta-registration": {
    name: "IFTA Registration",
    starter: 159.00,
    compliance: 279.00,
    enterprise: 349.00,
    bullets: {
      starter: ["IFTA registration assistance"],
      compliance: ["Everything in Basic (plus)", "Compliance checks"],
      enterprise: ["Full support with filing"]
    }
  },
  "dot-hazmat": {
    name: "DOT HAZMAT Registration",
    starter: 199.00,
    compliance: 349.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Basic registration assistance"],
      compliance: ["Everything in Basic (plus)", "Detailed compliance packet"],
      enterprise: ["Full support and ongoing compliance"]
    }
  },
  "licenses-permits": {
    name: "Licenses & Permits",
    starter: 79.00,
    compliance: 149.00,
    enterprise: 299.00,
    bullets: {
      starter: ["Basic license research"],
      compliance: ["Complete application assistance"],
      enterprise: ["Ongoing compliance support"]
    }
  },
  "trucker-insurance": {
    name: "Trucker Insurance",
    starter: 99.00,
    compliance: 199.00,
    enterprise: 299.00,
    bullets: {
      starter: ["Document preparation and filing"],
      compliance: ["Everything in Basic (plus)", "Negotiation with providers"],
      enterprise: ["Comprehensive package customized"]
    }
  },
  "broker-insurance": {
    name: "Broker Insurance",
    starter: 99.00,
    compliance: 199.00,
    enterprise: 299.00,
    bullets: {
      starter: ["Document preparation and filing"],
      compliance: ["Everything in Basic (plus)", "Risk assessment included"],
      enterprise: ["Full consultation for coverage needs"]
    }
  },
  "new-entrant-audit": {
    name: "New Entrant Audit",
    starter: 199.00,
    compliance: 299.00,
    enterprise: 499.00,
    bullets: {
      starter: ["Basic audit preparation"],
      compliance: ["Everything in Basic (plus)", "Mock audit and consultation"],
      enterprise: ["Comprehensive audit support"]
    }
  }
});

Object.assign(window.GLOBAL_COMPANY_PRICING.addons, {
  ra_service: 75.00,
  compliance_monitor: 99.00,
  corp_resolutions: 49.00,
  corp_minutes: 39.00,
  operating_agreement: 59.00,
  bylaws_pack: 59.00,
  ein_procure: 75.00,
  good_standing: 65.00,
  boc3_filing: 75.00,
  fmcsa_audit: 149.00
});


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





// ============================================================================ //
// 🏛️ MODULE 5: STATE FILING FEES DATA LAYER (PART 1: AL - MO)                  //
// ============================================================================ //
window.STATE_FILING_FEES = window.STATE_FILING_FEES || {};

Object.assign(window.STATE_FILING_FEES, {
  "AL": { llc: 200.00, series_llc: 200.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 25.00 },
  "AK": { llc: 250.00, series_llc: 250.00, partnership: 250.00, s_corp: 250.00, c_corp: 250.00, non_profit: 50.00 },
  "AZ": { llc: 50.00, series_llc: 50.00, partnership: 10.00, s_corp: 60.00, c_corp: 60.00, non_profit: 40.00 },
  "AR": { llc: 45.00, series_llc: 45.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 50.00 },
  "CA": { llc: 70.00, series_llc: 70.00, partnership: 70.00, s_corp: 100.00, c_corp: 100.00, non_profit: 30.00 },
  "CO": { llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 50.00 },
  "CT": { llc: 120.00, series_llc: 120.00, partnership: 120.00, s_corp: 250.00, c_corp: 250.00, non_profit: 50.00 },
  "DE": { llc: 90.00, series_llc: 90.00, partnership: 200.00, s_corp: 89.00, c_corp: 89.00, non_profit: 89.00 },
  "DC": { llc: 99.00, series_llc: 99.00, partnership: 220.00, s_corp: 220.00, c_corp: 220.00, non_profit: 80.00 },
  "FL": { llc: 125.00, series_llc: 125.00, partnership: 1000.00, s_corp: 70.00, c_corp: 70.00, non_profit: 70.00 },
  "GA": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 100.00 },
  "HI": { llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 25.00 },
  "ID": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 30.00 },
  "IL": { llc: 150.00, series_llc: 400.00, partnership: 150.00, s_corp: 150.00, c_corp: 150.00, non_profit: 50.00 },
  "IN": { llc: 95.00, series_llc: 95.00, partnership: 95.00, s_corp: 95.00, c_corp: 95.00, non_profit: 30.00 },
  "IA": { llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 20.00 },
  "KS": { llc: 160.00, series_llc: 160.00, partnership: 160.00, s_corp: 90.00, c_corp: 90.00, non_profit: 20.00 },
  "KY": { llc: 40.00, series_llc: 40.00, partnership: 40.00, s_corp: 40.00, c_corp: 40.00, non_profit: 8.00 },
  "LA": { llc: 100.00, series_llc: 100.00, partnership: 150.00, s_corp: 100.00, c_corp: 100.00, non_profit: 75.00 },
  "ME": { llc: 175.00, series_llc: 175.00, partnership: 175.00, s_corp: 145.00, c_corp: 145.00, non_profit: 40.00 },
  "MD": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 120.00, c_corp: 120.00, non_profit: 120.00 },
  "MA": { llc: 500.00, series_llc: 500.00, partnership: 500.00, s_corp: 275.00, c_corp: 275.00, non_profit: 30.00 },
  "MI": { llc: 50.00, series_llc: 50.00, partnership: 100.00, s_corp: 60.00, c_corp: 60.00, non_profit: 20.00 },
  "MN": { llc: 135.00, series_llc: 135.00, partnership: 135.00, s_corp: 135.00, c_corp: 135.00, non_profit: 70.00 },
  "MS": { llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 50.00, c_corp: 50.00, non_profit: 50.00 },
  "MO": { llc: 50.00, series_llc: 50.00, partnership: 105.00, s_corp: 58.00, c_corp: 58.00, non_profit: 25.00 }
});
// ============================================================================ //
// 🏛️ MODULE 6: STATE FILING FEES DATA LAYER (PART 2: MT - WY)                  //
// ============================================================================ //
window.STATE_FILING_FEES = window.STATE_FILING_FEES || {};

Object.assign(window.STATE_FILING_FEES, {
  "MT": { llc: 35.00, series_llc: 35.00, partnership: 20.00, s_corp: 20.00, c_corp: 20.00, non_profit: 20.00 },
  "NE": { llc: 105.00, series_llc: 105.00, partnership: 200.00, s_corp: 60.00, c_corp: 60.00, non_profit: 25.00 },
  "NV": { llc: 425.00, series_llc: 425.00, partnership: 75.00, s_corp: 350.00, c_corp: 350.00, non_profit: 50.00 },
  "NH": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 25.00 },
  "NJ": { llc: 125.00, series_llc: 125.00, partnership: 125.00, s_corp: 125.00, c_corp: 125.00, non_profit: 75.00 },
  "NM": { llc: 50.00, series_llc: 50.00, partnership: 50.00, s_corp: 100.00, c_corp: 100.00, non_profit: 25.00 },
  "NY": { llc: 200.00, series_llc: 200.00, partnership: 200.00, s_corp: 125.00, c_corp: 125.00, non_profit: 75.00 },
  "NC": { llc: 125.00, series_llc: 125.00, partnership: 50.00, s_corp: 125.00, c_corp: 125.00, non_profit: 60.00 },
  "ND": { llc: 135.00, series_llc: 135.00, partnership: 135.00, s_corp: 100.00, c_corp: 100.00, non_profit: 40.00 },
  "OH": { llc: 99.00, series_llc: 99.00, partnership: 99.00, s_corp: 99.00, c_corp: 99.00, non_profit: 99.00 },
  "OK": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 50.00, c_corp: 50.00, non_profit: 25.00 },
  "OR": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 50.00 },
  "PA": { llc: 125.00, series_llc: 125.00, partnership: 125.00, s_corp: 125.00, c_corp: 125.00, non_profit: 125.00 },
  "RI": { llc: 150.00, series_llc: 150.00, partnership: 100.00, s_corp: 230.00, c_corp: 230.00, non_profit: 35.00 },
  "SC": { llc: 110.00, series_llc: 110.00, partnership: 10.00, s_corp: 135.00, c_corp: 135.00, non_profit: 25.00 },
  "SD": { llc: 150.00, series_llc: 150.00, partnership: 125.00, s_corp: 150.00, c_corp: 150.00, non_profit: 30.00 },
  "TN": { llc: 300.00, series_llc: 300.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 100.00 },
  "TX": { llc: 300.00, series_llc: 300.00, partnership: 750.00, s_corp: 300.00, c_corp: 300.00, non_profit: 25.00 },
  "UT": { llc: 54.00, series_llc: 54.00, partnership: 54.00, s_corp: 54.00, c_corp: 54.00, non_profit: 30.00 },
  "VT": { llc: 125.00, series_llc: 125.00, partnership: 125.00, s_corp: 125.00, c_corp: 125.00, non_profit: 125.00 },
  "VA": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 75.00, c_corp: 75.00, non_profit: 75.00 },
  "WA": { llc: 200.00, series_llc: 200.00, partnership: 180.00, s_corp: 180.00, c_corp: 180.00, non_profit: 30.00 },
  "WV": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 25.00 },
  "WI": { llc: 130.00, series_llc: 130.00, partnership: 70.00, s_corp: 100.00, c_corp: 100.00, non_profit: 35.00 },
  "WY": { llc: 100.00, series_llc: 100.00, partnership: 100.00, s_corp: 100.00, c_corp: 100.00, non_profit: 50.00 }
});
