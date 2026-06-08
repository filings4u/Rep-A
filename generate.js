// ============================================================================
// 🛠️ COMPILER ENGINE: SINGLE FILE MULTI-SECTION AUTOMATION (PART 1 OF 3)
// ============================================================================
const fs = require('fs');
const path = require('path');

// 📦 MASTER SYSTEM PACKAGES DICTIONARY MAPPED TO YOUR WIZARD URL STRINGS
const GLOBAL_COMPANY_PRICING = {
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

// 📦 INTEGRATED DEEP MARKETING COPY DICTIONARY FOR FULL LANDING EXPERIENCE STACKS
const INTEGRATED_COPY = {
    "llc-formation": {
        headline: "Secure Your Assets. Launch Your Enterprise.",
        subheadline: "Form a Compliant, Bulletproof Limited Liability Company Natively.",
        summary: "Protect your personal wealth, savings, and property from business liabilities while securing flexible corporate tax advantages. We handle your Articles of Organization, state department registries, and initial compliance setups overnight.",
        badge: "142,000+ Entities Authorized Across All 50 States",
        features: [
            { icon: "🛡️", title: "Complete Personal Shielding", text: "Isolate your business risk and ensure personal holdings are permanently insulated from external operational actions." },
            { icon: "⚡", title: "Expedited State Registry Execution", text: "Our automation rules eliminate formatting rejections, pushing your corporate filings through state channels in record time." },
            { icon: "📊", title: "Turnkey Operational Governance", text: "Receive compliant structural templates, operating provisions, and clear capitalization outlines to start transacting immediately." }
        ]
    },
    "corporations": {
        headline: "Institutional Shields. Scalable Corporate Systems.",
        subheadline: "Incorporate with High-Tier Structures Built for Capital Growth.",
        summary: "Launch a structured C-Corporation or S-Corporation engineered to issue stocks, attract investment capital, and shield equity layers. Includes comprehensive corporate bylaw generation, state name searches, and structural filing coordination.",
        badge: "Filing Accuracy Quotient Locked Natively at 99.98%",
        features: [
            { icon: "📈", title: "Investor-Ready Frameworks", text: "Establish formal board profiles, authorized stock parameters, and transparent bylaws required by institutional capital groups." },
            { icon: "🔒", title: "Multi-Tier Equity Protection", text: "Secure comprehensive corporate governance shields to isolate executive liabilities from operational footprints safely." },
            { icon: "🏛️", title: "Secretary of State Alignment", text: "Pristine alignment mapping across municipal systems to guarantee corporate validity across your market." }
        ]
    }
};

// ============================================================================
// 📦 MODULE 1: COMPREHENSIVE SERVICE DATA EXTENSION (PART 2 OF 3)
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

Object.assign(GLOBAL_COMPANY_PRICING, SERVICES_BATCH_2);

// ============================================================================
// ⚙️ MODULE 2: DESIGN STRUT ENGINE & BILLING MATRICES (PART 3 OF 3)
// ============================================================================

function buildMarketingFeaturesGrid(slug, data) {
    var isTax = slug.includes('tax') || slug.includes('report') || slug.includes('consulting');
    var isDot = slug.includes('dot') || slug.includes('authority') || slug.includes('insurance') || slug.includes('file') || slug.includes('registration') || slug.includes('code') || slug.includes('scac') || slug.includes('ucr') || slug.includes('boc3') || slug.includes('ifta') || slug.includes('hazmat') || slug.includes('audit');
    
    var f1_title = "Complete Shielding Protocols";
    var f1_text = "Isolate operational risk vectors completely. Ensure your personal assets are permanently insulated from regulatory penalties.";
    var f2_title = "Expedited Gateway Execution";
    var f2_text = "Our structural routing rules eliminate formatting errors, pushing your paperwork through agency networks in record time.";
    var f3_title = "Continuous Standing Support";
    var f3_text = "Maintain dynamic validity status parameters effortlessly across municipal boundaries with automated timeline tracking updates.";

    if (isTax) {
        f1_title = "Deduction Optimization"; f1_text = "Leverage legal frameworks to capture essential write-offs while keeping your processing records pristine.";
        f2_title = "Audit Risk Eradication"; f2_text = "Intelligent pre-screening processes align your reporting data layers with IRS and state regulations automatically.";
        f3_title = "Charter Continuity"; f3_text = "Guard your company from sudden privilege tax suspensions, asset freezing, or unexpected franchise dissolution fines.";
    } else if (isDot) {
        f1_title = "Federal FMCSA Alignment"; f1_text = "Keep your operating credentials fully clear of safety flags, roadside hold orders, or unexpected out-of-service mandates.";
        f2_title = "Electronic Database Sync"; f2_text = "Automate immediate verification loops across federal drug testing pools, carrier records, and border compact clearances.";
        f3_title = "Audit Shield Safeguards"; f3_text = "Proactively format your driver records, vehicle tax logs, and route details to pass highway enforcement audits.";
    }

    return `
    <section style="background: #f8fafc; padding: 80px 0; font-family: system-ui, sans-serif; width: 100%; border-top:1px solid rgba(10,31,68,0.05);">
        <div style="max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box;">
            <div style="text-align: center; margin-bottom: 50px;">
                <span style="color: #10b981; font-weight: 800; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em;">Core Capabilities</span>
                <h2 style="color: #0a1f44; font-size: 2.4rem; font-weight: 900; margin: 4px 0 0 0; letter-spacing: -0.5px;">Engineered for Precision and Scale</h2>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; width: 100%;">
                <div style="background: #ffffff; border: 1px solid rgba(10,31,68,0.06); padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(10,31,68,0.01);">
                    <div style="font-size: 2.2rem; margin-bottom: 15px;">🛡️</div>
                    <h3 style="color: #0a1f44; font-size: 1.3rem; font-weight: 800; margin: 0 0 10px 0;">${f1_title}</h3>
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0;">${f1_text}</p>
                </div>
                <div style="background: #ffffff; border: 1px solid rgba(10,31,68,0.06); padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(10,31,68,0.01);">
                    <div style="font-size: 2.2rem; margin-bottom: 15px;">⚡</div>
                    <h3 style="color: #0a1f44; font-size: 1.3rem; font-weight: 800; margin: 0 0 10px 0;">${f2_title}</h3>
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0;">${f2_text}</p>
                </div>
                <div style="background: #ffffff; border: 1px solid rgba(10,31,68,0.06); padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(10,31,68,0.01);">
                    <div style="font-size: 2.2rem; margin-bottom: 15px;">📊</div>
                    <h3 style="color: #0a1f44; font-size: 1.3rem; font-weight: 800; margin: 0 0 10px 0;">${f3_title}</h3>
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0;">${f3_text}</p>
                </div>
            </div>
        </div>
    </section>`;
}

function buildLayoutA(slug, data, pricingCardsHtml, featuresGridHtml) {
    return `
    <main class="page-container" style="background: #ffffff !important; padding: 80px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 1450px; box-sizing: border-box; margin: 0 auto;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%;">
                <article class="content-area" style="width: 100%; box-sizing: border-box;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">Filing Program</span>
                    <h1 style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 12px 0; line-height: 1.1; letter-spacing: -1px;">Secure Your Standalone <br><span style="color:#10b981;">${data.name} Tracks</span></h1>
                    <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; margin: 0 0 32px 0;">Bypass complex processing red tape and manual forms. We structure complete documentation sets, handle verification logs, and maintain active tracking parameters overnight so you can focus entirely on business scalability models from day one.</p>
                </article>
                <aside class="hero-image-container" style="display: flex; justify-content: center; width: 100%;">
                    <img src="images/startup-launch.jpg" alt="${data.name}" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25);">
                </aside>
            </div>
        </div>
    </main>
    ${featuresGridHtml}
    ${pricingCardsHtml}`;
}

function buildLayoutB(slug, data, pricingCardsHtml, featuresGridHtml) {
    return `
    <section style="background: #ffffff !important; padding: 80px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%;">
                <div style="display: flex; justify-content: center; width: 100%;">
                    <img src="images/regulatory-compliance.jpg" alt="${data.name}" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25);">
                </div>
                <div style="width: 100%; box-sizing: border-box;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">System Track</span>
                    <h2 style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 12px 0; line-height: 1.1; letter-spacing: -1px;">Hardened Compliance. <br><span style="color:#10b981;">Built for ${data.name}.</span></h2>
                    <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; margin: 0 0 32px 0;">Protect business assets, optimize operating logs, and handle multi-state administrative filing obligations flawlessly under an advanced encryption verification framework designed for total operational safety.</p>
                </div>
            </div>
        </div>
    </section>
    ${featuresGridHtml}
    ${pricingCardsHtml}`;
}

function buildPricingCards(slug, data) {
    var starterBullets = (data.bullets && data.bullets.starter) ? data.bullets.starter : [];
    var complianceBullets = (data.bullets && data.bullets.compliance) ? data.bullets.compliance : [];
    var enterpriseBullets = (data.bullets && data.bullets.enterprise) ? data.bullets.enterprise : [];

    var b1 = ""; starterBullets.forEach(function(b) { b1 += '<li style="margin-bottom:8px; color:#475569; font-size:0.95rem; font-weight:500;">✓ ' + b + '</li>'; });
    var b2 = ""; complianceBullets.forEach(function(b) { b2 += '<li style="margin-bottom:8px; color:#475569; font-size:0.95rem; font-weight:500;">✓ ' + b + '</li>'; });
    var b3 = ""; enterpriseBullets.forEach(function(b) { b3 += '<li style="margin-bottom:8px; color:#475569; font-size:0.95rem; font-weight:500;">✓ ' + b + '</li>'; });

    return `
Deployment TiersTransparent Pricing PlansBasic$${data.starter.toFixed(2)} + State Fee${b1}Select BasicMost PopularElite$${data.compliance.toFixed(2)} + State Fee${b2}Select EliteEnterprise$${data.enterprise.toFixed(2)} + State Fee${b3}Select Enterprise`;}function compileAllPages() {const headerHtml = `{{TITLE}} | filings4uHomeAll Services`;const footerHtml = `© 2026 filings4u, LLC. All rights reserved.`;let fileCounter = 0;Object.keys(GLOBAL_COMPANY_PRICING).forEach((slug, index) => {const item = GLOBAL_COMPANY_PRICING[slug];const pricingCards = buildPricingCards(slug, item);const featuresGrid = buildMarketingFeaturesGrid(slug, item);const layoutContent = (index % 2 === 0)? buildLayoutA(slug, item, pricingCards, featuresGrid): buildLayoutB(slug, item, pricingCards, featuresGrid);const absolutePageHtml = headerHtml.replace('{{TITLE}}', item.name) + layoutContent + footerHtml;fs.writeFileSync(path.join(process.cwd(), `${slug}.html`), absolutePageHtml, 'utf8');fileCounter++;});console.log(`\n====================================================`);console.log(`✅ SUCCESS: Generated ${fileCounter} Fully Developed Standalone Files inside Root Path!`);console.log(`====================================================\n`);}compileAllPages();