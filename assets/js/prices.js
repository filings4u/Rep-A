// ============================================================================ //
// 🏛️ MASTER PLATFORM PRICING ENGINE DATABASE (PART 1: SERVICES 1 - 10)
// ============================================================================ //
window.GLOBAL_COMPANY_PRICING = {
    packages: {
        "llc-formation": {
            name: "LLC Formation",
            starter: 99.00, compliance: 199.00, enterprise: 499.00,
            bullets: {
                starter: ["Name Availability Validation Check", "Articles of Organization Document", "Secure 24/7 Digital Dashboard", "Operating Agreement"],
                compliance: ["Everything in Basic (plus)", "Registered agent service for 1 year", "Employer Identification Number"],
                enterprise: ["Everything in Standard (plus)", "Corporate Binder", "Corporate Seal", "Compliance Monitoring (1 Year)"]
            }
        },
        "corporation": {
            name: "Corporations (C/S-Corp)",
            starter: 129.00, compliance: 249.00, enterprise: 599.00,
            bullets: {
                starter: ["Name availability search", "State filing fees included", "Corporate Bylaws"],
                compliance: ["Everything in Basic (plus)", "Registered agent service for 1 year", "Employer Identification Number"],
                enterprise: ["Everything in Standard (plus)", "Corporate Binder", "Corporate Seal", "Compliance Monitoring (1 Year)"]
            }
        },
        "sole-proprietorship": {
            name: "Sole Proprietorship",
            starter: 79.00, compliance: 159.00, enterprise: 239.00,
            bullets: {
                starter: ["Initial business name registration", "Business tips and resources"],
                compliance: ["Everything in Basic (plus)", "DBA registration", "Employer Identification Number", "Operating Agreement"],
                enterprise: ["Everything in Standard (plus)", "Customized business license research", "Business Plan Template"]
            }
        },
        "dba-registration": {
            name: "DBA Registration",
            starter: 39.00, compliance: 99.00, enterprise: 159.00,
            bullets: {
                starter: ["Name availability check", "Filing with the county"],
                compliance: ["Everything in Basic", "Guidance on renewal process"],
                enterprise: ["Everything in Standard", "State-wide DBA registration option"]
            }
        },
        "nonprofit-organization": {
            name: "Nonprofit Organization",
            starter: 149.00, compliance: 299.00, enterprise: 499.00,
            bullets: {
                starter: ["Articles of incorporation preparation", "Name availability search"],
                compliance: ["Everything in Basic", "501(c)(3) application assistance"],
                enterprise: ["Everything in Standard", "IRS compliance package"]
            }
        },
        "series-llc": {
            name: "Series LLC",
            starter: 199.00, compliance: 299.00, enterprise: 399.00,
            bullets: {
                starter: ["State filing fees included", "Initial series setup guidance"],
                compliance: ["Everything in Basic", "Operating agreement for series"],
                enterprise: ["Customized tax and legal strategy guidance"]
            }
        },
        "foreign-qualification": {
            name: "Foreign Qualification Certificate",
            starter: 149.00, compliance: 249.00, enterprise: 349.00,
            bullets: {
                starter: ["Eligibility assessment", "Preparation of application"],
                compliance: ["Everything in Basic", "Registered agent service in the foreign state"],
                enterprise: ["Everything in Standard", "Compliance reminders and support"]
            }
        },
        "llc-reinstatement": {
            name: "LLC Reinstatement Processing",
            starter: 79.00, compliance: 149.00, enterprise: 249.00,
            bullets: {
                starter: ["Review of reinstatement eligibility", "Basic instructions provided"],
                compliance: ["Everything in Basic", "Preparation and submission of forms"],
                enterprise: ["Everything in Standard", "Follow-up and support through reinstatement"]
            }
        },
        "trademark-filing": {
            name: "Trademark Filing",
            starter: 199.00, compliance: 299.00, enterprise: 499.00,
            bullets: {
                starter: ["Trademark search", "Basic application filing"],
                compliance: ["Everything in Basic", "Preparation of a comprehensive application"],
                enterprise: ["Everything in Standard", "Monitoring and support for registration process"]
            }
        },
        "servicemark-filing": {
            name: "Servicemark Filing",
            starter: 199.00, compliance: 299.00, enterprise: 399.00,
            bullets: {
                starter: ["Servicemark search", "Application filing"],
                compliance: ["Everything in Basic", "Status tracking for 1 year"],
                enterprise: ["Everything in Standard", "Legal consultation on infringement issues"]
            }
        },
            "annual-reports": {
            name: "Annual Reports",
            starter: 89.00, compliance: 159.00, enterprise: 249.00,
            bullets: {
                starter: ["Reminder service for due dates", "Filing support for one year"],
                compliance: ["Everything in Basic", "Preparation and filing assistance"],
                enterprise: ["Everything in Standard", "Ongoing compliance checks"]
            }
        },
        "operating-agreement": {
            name: "Operating Agreement",
            starter: 49.00, compliance: 99.00, enterprise: 199.00,
            bullets: {
                starter: ["Standard template provided"],
                compliance: ["Customized operating agreement template"],
                enterprise: ["Full drafting and consultation services"]
            }
        },
        "registered-agent": {
            name: "Registered Agent",
            starter: 99.00, compliance: 179.00, enterprise: 299.00,
            bullets: {
                starter: ["Registered agent services for one year"],
                compliance: ["Everything in Basic", "Mail forwarding service"],
                enterprise: ["Everything in Standard", "Annual compliance support"]
            }
        },
        "business-licenses": {
            name: "Business Licenses",
            starter: 79.00, compliance: 149.00, enterprise: 299.00,
            bullets: {
                starter: ["Basic license research"],
                compliance: ["License application assistance"],
                enterprise: ["Complete compliance package and ongoing support"]
            }
        },
        "employer-id-ein": {
            name: "Employer ID (EIN)",
            starter: 79.00, compliance: 149.00, enterprise: 199.00,
            bullets: {
                starter: ["EIN application assistance"],
                compliance: ["Everything in Basic", "IRS form preparation"],
                enterprise: ["Everything in Standard", "Tax planning consultation"]
            }
        },
        "entity-dissolution": {
            name: "Entity Dissolution",
            starter: 149.00, compliance: 249.00, enterprise: 349.00,
            bullets: {
                starter: ["Preparation of dissolution paperwork"],
                compliance: ["Everything in Basic", "Filing with the state"],
                enterprise: ["Complete compliance assistance and tax filings"]
            }
        },
        "good-standing": {
            name: "Certificate of Good Standing",
            starter: 49.00, compliance: 99.00, enterprise: 149.00,
            bullets: {
                starter: ["Application assistance"],
                compliance: ["Everything in Basic", "Mode of delivery options"],
                enterprise: ["Fast track filing service"]
            }
        },
        "apostille-services": {
            name: "Apostille Authentication Services",
            starter: 99.00, compliance: 179.00, enterprise: 299.00,
            bullets: {
                starter: ["Preparation and filing for one document"],
                compliance: ["Everything in Basic", "Multiple document discounts available"],
                enterprise: ["Comprehensive service with expedited processing"]
            }
        },
        "clia-certificate": {
            name: "CLIA Certificate",
            starter: 199.00, compliance: 349.00, enterprise: 499.00,
            bullets: {
                starter: ["Basic consultation"],
                compliance: ["Application assistance"],
                enterprise: ["Full compliance support"]
            }
        },
        "legal-consulting": {
            name: "Custom Regulatory Legal Consulting",
            starter: 150.00, compliance: 1000.00, enterprise: 1000.00,
            bullets: {
                starter: ["Tailored consulting services ($150 / Hour)"],
                compliance: ["Package Plan: Pre-purchased 10 hours for ongoing support"],
                enterprise: ["Package Plan: Pre-purchased 10 hours for ongoing support"]
            }
        },
        "federal-tax": {
            name: "Federal Income Tax",
            starter: 299.00, compliance: 499.00, enterprise: 799.00,
            bullets: {
                starter: ["Basic federal tax preparation"],
                compliance: ["Everything in Basic", "Tax planning session included"],
                enterprise: ["Comprehensive tax strategy and filing"]
            }
        },
            "state-tax": {
            name: "State Income Tax",
            starter: 199.00, compliance: 349.00, enterprise: 549.00,
            bullets: {
                starter: ["State tax preparation"],
                compliance: ["Everything in Basic", "State compliance review"],
                enterprise: ["Full service with audit support"]
            }
        },
        "franchise-tax": {
            name: "Franchise Tax Filing",
            starter: 149.00, compliance: 249.00, enterprise: 399.00,
            bullets: {
                starter: ["Preparation and filing assistance"],
                compliance: ["Everything in Basic", "Compliance tracking and reminders"],
                enterprise: ["Full service with consultations"]
            }
        },
        "sales-tax": {
            name: "Sales Tax Registration",
            starter: 99.00, compliance: 199.00, enterprise: 299.00,
            bullets: {
                starter: ["Application assistance"],
                compliance: ["Everything in Basic", "Ongoing compliance support"],
                enterprise: ["Strategic sales tax planning"]
            }
        },
        "payroll-tax": {
            name: "Payroll Tax (940/941)",
            starter: 199.00, compliance: 349.00, enterprise: 499.00,
            bullets: {
                starter: ["Basic payroll tax filing"],
                compliance: ["Everything in Basic", "Detailed payroll reporting"],
                enterprise: ["Comprehensive payroll solutions"]
            }
        },
        "heavy-use-tax": {
            name: "Heavy Use Tax (2290)",
            starter: 99.00, compliance: 179.00, enterprise: 249.00,
            bullets: {
                starter: ["Preparation assistance for one vehicle"],
                compliance: ["Everything in Basic", "Multiple vehicle discounts"],
                enterprise: ["Comprehensive compliance and auditing"]
            }
        },
        "cage-code": {
            name: "CAGE Code",
            starter: 249.00, compliance: 349.00, enterprise: 449.00,
            bullets: {
                starter: ["Application assistance"],
                compliance: ["Everything in Basic", "Status monitoring"],
                enterprise: ["Full service with registration support"]
            }
        },
        "duns-number": {
            name: "DUNS Number Procurement",
            starter: 49.00, compliance: 99.00, enterprise: 179.00,
            bullets: {
                starter: ["Step-by-step guidance"],
                compliance: ["Everything in Basic", "Expedited processing"],
                enterprise: ["Comprehensive support"]
            }
        },
        "minority-certificate": {
            name: "Minority Certificate",
            starter: 99.00, compliance: 249.00, enterprise: 399.00,
            bullets: {
                starter: ["Eligibility assessment"],
                compliance: ["Application assistance"],
                enterprise: ["Ongoing support and renewal"]
            }
        },
        "owner-operators": {
            name: "Owner Operators",
            starter: 199.00, compliance: 299.00, enterprise: 499.00,
            bullets: {
                starter: ["Business structure advice"],
                compliance: ["Full compliance package"],
                enterprise: ["Financial planning services"]
            }
        },
        "trucker-authority": {
            name: "Trucker Authority",
            starter: 199.00, compliance: 299.00, enterprise: 499.00,
            bullets: {
                starter: ["Authority application preparation"],
                compliance: ["Everything in Basic", "Support for compliance documentation"],
                enterprise: ["Full service with ongoing support"]
            }
        },
        "broker-authority": {
            name: "Broker Authority",
            starter: 199.00, compliance: 299.00, enterprise: 499.00,
            bullets: {
                starter: ["Basic application preparation"],
                compliance: ["Everything in Basic", "Compliance support"],
                enterprise: ["Full service with network connections"]
            }
        },
            "ucr-registration": {
            name: "UCR Registration",
            starter: 99.00, compliance: 179.00, enterprise: 249.00,
            bullets: {
                starter: ["Registration assistance"],
                compliance: ["Everything in Basic", "Compliance reminders"],
                enterprise: ["Ongoing support services"]
            }
        },
        "scac-code": {
            name: "SCAC Code Registration",
            starter: 49.00, compliance: 99.00, enterprise: 149.00,
            bullets: {
                starter: ["Application assistance"],
                compliance: ["Everything in Basic", "Status tracking service"],
                enterprise: ["Complete registration support"]
            }
        },
        "dot-consortium": {
            name: "DOT Consortium",
            starter: 149.00, compliance: 299.00, enterprise: 499.00,
            bullets: {
                starter: ["Program enrollment assistance"],
                compliance: ["Everything in Basic", "Compliance monitoring"],
                enterprise: ["Full service with ongoing audits"]
            }
        },
        "driver-file": {
            name: "Driver Qualification File",
            starter: 279.00, compliance: 349.00, enterprise: 449.00,
            bullets: {
                starter: ["Basic documentation preparation"],
                compliance: ["Everything in Basic", "Compliance packet preparation"],
                enterprise: ["Comprehensive management of files"]
            }
        },
        "process-agent-boc3": {
            name: "Process Agent (BOC-3)",
            starter: 49.00, compliance: 99.00, enterprise: 149.00,
            bullets: {
                starter: ["Filing assistance"],
                compliance: ["Everything in Basic", "Annual renewal support"],
                enterprise: ["Ongoing compliance service"]
            }
        },
        "ifta-registration": {
            name: "IFTA Registration",
            starter: 159.00, compliance: 279.00, enterprise: 349.00,
            bullets: {
                starter: ["IFTA registration assistance"],
                compliance: ["Everything in Basic", "Compliance checks"],
                enterprise: ["Full support with filing"]
            }
        },
        "dot-hazmat": {
            name: "DOT HAZMAT Registration",
            starter: 199.00, compliance: 349.00, enterprise: 499.00,
            bullets: {
                starter: ["Basic registration assistance"],
                compliance: ["Everything in Basic", "Detailed compliance packet"],
                enterprise: ["Full support and ongoing compliance"]
            }
        },
        "licenses-permits": {
            name: "Licenses & Permits",
            starter: 79.00, compliance: 149.00, enterprise: 299.00,
            bullets: {
                starter: ["Basic license research"],
                compliance: ["Complete application assistance"],
                enterprise: ["Ongoing compliance support"]
            }
        },
        "trucker-insurance": {
            name: "Trucker Insurance",
            starter: 99.00, compliance: 199.00, enterprise: 299.00,
            bullets: {
                starter: ["Document preparation and filing"],
                compliance: ["Everything in Basic", "Negotiation with providers"],
                enterprise: ["Comprehensive package customized"]
            }
        },
        "broker-insurance": {
            name: "Broker Insurance",
            starter: 99.00, compliance: 199.00, enterprise: 299.00,
            bullets: {
                starter: ["Document preparation and filing"],
                compliance: ["Everything in Basic", "Risk assessment included"],
                enterprise: ["Full consultation for coverage needs"]
            }
        },
        "new-entrant-audit": {
            name: "New Entrant Audit",
            starter: 199.00, compliance: 299.00, enterprise: 499.00,
            bullets: {
                starter: ["Basic audit preparation"],
                compliance: ["Everything in Basic", "Mock audit and consultation"],
                enterprise: ["Comprehensive audit support"]
            }
        }
    },

    // 2. CENTRALIZED GOVERNMENT AGENCIES / JURISDICTION FEES HOOK MATRIX
    stateFees: {
        "AL": { corporation: 100, llc: 200, cityFee: 25, govBondRate: 0 },
        "AK": { corporation: 250, llc: 250, cityFee: 0,  govBondRate: 0 },
        "AZ": { corporation: 60,  llc: 50,  cityFee: 15, govBondRate: 0 },
        "AR": { corporation: 50,  llc: 45,  cityFee: 0,  govBondRate: 0 },
        "CA": { corporation: 100, llc: 70,  cityFee: 50, govBondRate: 15 },
        "CO": { corporation: 50,  llc: 50,  cityFee: 0,  govBondRate: 0 },
        "DE": { corporation: 89,  llc: 90,  cityFee: 0,  govBondRate: 90 },
        "FL": { corporation: 70,  llc: 125, cityFee: 30, govBondRate: 0 },
        "GA": { corporation: 100, llc: 100, cityFee: 20, govBondRate: 0 },
        "IL": { corporation: 150, llc: 150, cityFee: 45, govBondRate: 0 },
        "NV": { corporation: 350, llc: 425, cityFee: 100,govBondRate: 200 },
        "NY": { corporation: 125, llc: 200, cityFee: 50, govBondRate: 0 },
        "TX": { corporation: 300, llc: 300, cityFee: 0,  govBondRate: 0 },
        "WY": { corporation: 100, llc: 100, cityFee: 10, govBondRate: 0 }
    },

    // 3. HARDCODED SYSTEM UPSELL OPTIONS VALUES (USED ACROSS STEPS 3 & 5 AND CHECKOUT)
    addons: {
        ra_service: 75.00,
        compliance_monitor: 99.00,
        corp_resolutions: 49.00,
        corp_minutes: 39.00,
        operating_agreement: 59.00,
        bylaws_pack: 59.00,
        ein_procure: 75.00,
        good_standing: 65.00,
        boc3_filing: 75.00,
        fmcsa_audit: 149.00}},


// Make it available globally across the window layer for all scripts
window.GLOBAL_COMPANY_PRICING = GLOBAL_COMPANY_PRICING; 


/**
 * AUTO-EXECUTION MARKETING PAGE CARD GENERATOR
 * Re-paints your exact HTML section design dynamically on all 44 pages.
 */
document.addEventListener("DOMContentLoaded", function() {
    var targetContainer = document.getElementById("website-package-pricing-cards-root");
    if (!targetContainer || !window.GLOBAL_COMPANY_PRICING) return;

    var targetServiceKey = targetContainer.getAttribute("data-service-key");
    if (!targetServiceKey) return;

    var serviceData = window.GLOBAL_COMPANY_PRICING.packages[targetServiceKey];
    if (!serviceData) return;

    var cardsHtml = "";
    
    // 1. Map your plans to your exact CSS classes and custom button text structures
    var plansConfig = [
        { key: "starter", name: "Basic", class: "price-card", btnStyle: "background: var(--navy);" },
        { key: "compliance", name: "Elite", class: "price-card featured", btnStyle: "" },
        { key: "enterprise", name: "Enterprise", class: "price-card", btnStyle: "background: var(--navy);" }
    ];

    plansConfig.forEach(function(plan) {
        var basePrice = serviceData[plan.key] || 0;
        var bullets = (serviceData.bullets && serviceData.bullets[plan.key]) ? serviceData.bullets[plan.key] : [];
        
        // Build your exact pricing bullet items
        var bulletListHtml = "";
        bullets.forEach(function(bulletText) {
            bulletListHtml += '<li>' + bulletText + '</li>';
        });

        // Generate your exact badge layout if it's the featured Elite plan
        var badgeHtml = (plan.key === "compliance") ? '<div class="price-badge">Most Popular</div>' : '';

        cardsHtml += '<div class="' + plan.class + '">' +
            badgeHtml +
            '<h3>' + plan.name + '</h3>' +
            '<div class="amount">$' + basePrice + ' <span>+ State Fee</span></div>' +
            '<ul class="price-features">' + bulletListHtml + '</ul>' +
            '<a href="wizard.html?service=' + targetServiceKey + '&plan=' + plan.key + '" class="btn-main" style="width: 100%; text-align: center; ' + plan.btnStyle + '">Select ' + plan.name + '</a>' +
        '</div>';
    });

    // 2. Wrap the generated cards inside your native section layout containers
    targetContainer.innerHTML = '<section id="pricing" class="pricing-section">' +
        '<span class="hero-tag">Deployment Tiers</span>' +
        '<h2>Transparent formation pricing.</h2>' +
        '<div class="pricing-grid">' + cardsHtml + '</div>' +
    '</section>';
});
