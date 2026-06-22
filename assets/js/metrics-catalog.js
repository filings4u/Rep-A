window.PLATFORM_METRICS_CATALOG = window.PLATFORM_METRICS_CATALOG || {};

const catalogServices = [
  "llc-formation", "corporations", "sole-proprietorship", "dba-registration", 
  "nonprofits", "series-llc", "foreign-qualification", "llc-reinstatement", 
  "trademark-filing", "servicemark-filing", "annual-reports", "operating-agreement", 
  "registered-agent", "business-licenses", "employer-id-ein", "dissolution", 
  "certificate-of-good-standing", "apostille-services", "clia-certificate", 
  "regulatory-consulting", "federal-tax", "state-tax", "franchise-tax", 
  "sales-tax-registration", "payroll-tax-940-941", "heavy-use-tax-2290", 
  "cage-code", "duns-number", "minority-certificate", "trucker-authority", 
  "broker-authority", "ucr-registration", "scac-code", "dot-consortium", 
  "driver-file", "process-agents-boc-3", "ifta-registration", 
  "hazmat-registration", "licenses-permits", "trucker-insurance-quote", 
  "broker-insurance-quote", "new-entrant-audit"
];

function calculateMetricHash(str, modifier) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash + modifier);
}
catalogServices.forEach(s => {
  const dbSource = window.CENTRAL_SERVICE_PLAN_DB || {};
  const serviceDbRecord = dbSource[s] || {};

  let name = serviceDbRecord.name || s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    .replace("Llc", "LLC").replace("Dba", "DBA").replace("Ein", "EIN")
    .replace("Dot", "DOT").replace("Ucr", "UCR").replace("Clia", "CLIA")
    .replace("Fmcsa", "FMCSA").replace("Scac", "SCAC").replace("Poa", "POA")
    .replace("Duns", "DUNS").replace("Id", "ID").replace("Ifta", "IFTA")
    .replace("Hazmat", "HAZMAT").replace("Boc 3", "BOC-3")
    .replace("Corporations", "Corporations (C/S-Corp)");

  if (name === "Dba Registration") name = "DBA Registration";
  if (name === "Employer ID EIN") name = "Employer ID (EIN)";
  if (name === "Driver File") name = "Driver Qualification File (DQF)";

  const starterPrice = serviceDbRecord.starter !== undefined ? "$" + parseFloat(serviceDbRecord.starter).toFixed(2) : "Contact Us";
  let imageFilename = s;
  if (s === "dba-registration") imageFilename = "doing-business-as-dba";

  let vertical = "corporate";
  let pillText = "Corporate Framework";
  let badgeText = "MONITOR CORE CHANNELS SECURE";
  let sectionTitle = name + " System Metrics";

  if (s.includes("tax") || s.includes("payroll") || s.includes("franchise")) {
    vertical = "tax";
    pillText = "Tax & Financial";
    badgeText = "ALL CLEAR: SECURE REST GATEWAYS ACTIVE";
    sectionTitle = "Corporate Fiscal Infrastructure";
  } else if (
    s.includes("authority") || s.includes("trucker") || s.includes("insurance") || 
    s.includes("ucr") || s.includes("scac") || s.includes("ifta") || 
    s.includes("audit") || s.includes("boc") || s.includes("driver") || 
    s.includes("consortium") || s.includes("hazmat") || s.includes("permits")
  ) {
    vertical = "logistics";
    pillText = "Logistics Infrastructure";
    badgeText = "LOGISTICS CHANNELS ACTIVE SECURE";
    sectionTitle = name + " Logistical Parameters";
  }
  let seedA = (calculateMetricHash(s, 10) % 85) + 15;
  let seedB = (calculateMetricHash(s, 20) % 900) + 100;
  let seedC = ((calculateMetricHash(s, 30) % 40) / 10 + 1).toFixed(1);
  let cards = [];

  if (vertical === "tax") {
    cards = [
      { icon: "💵", val: "$" + seedC + "B+", lbl: "Volume Routed", desc: "Processing institutional financial compliance metrics for " + name + "." },
      { icon: "⏱️", val: "0.4s", lbl: "API Speed Engine", desc: "Encrypted REST transmission mapping for regional " + name + " networks." },
      { icon: "📝", val: starterPrice, lbl: "Starter Entry Base", desc: "Base package allocations for specialized " + name + " filings clear from this rate." },
      { icon: "🗓️", val: "24/7", lbl: "SLA Queue Loop", desc: "Continuous diagnostic rules sweep deadlines to bypass system late penalties." }
    ];
  } else if (vertical === "logistics") {
    cards = [
      { icon: "🏢", val: seedA + "K+", lbl: "Active Registrations", desc: "Operating credential profiles approved for immediate deployment pipelines." },
      { icon: "⚡", val: "100%", lbl: "FMCSA Access Rating", desc: "Pre-checked background application files clear enforcement lock parameters." },
      { icon: "🛡️", val: seedC + "M", lbl: "Daily Certified Loads", desc: "Commercial logistics freight moving under unified transportation codes." },
      { icon: "🔒", val: "Real-Time", lbl: "USDOT Central Node", desc: "Synchronized network loops update credential status to federal mainframes." }
    ];
  } else {
    cards = [
      { icon: "🏢", val: seedB + "K+", lbl: "Entities Cleared", desc: "Successfully completed " + name + " legal records with sovereign registries." },
      { icon: "⚡", val: "24-48 Hr", lbl: "Velocity Pipeline", desc: "Direct cloud data connections bypass traditional desk parsing backlogs." },
      { icon: "🛡️", val: "100%", lbl: "Statutory Shield", desc: "Filing configurations rigorously cross-referenced against local laws." },
      { icon: "🔒", val: "99.98%", lbl: "Syntax Integrity", desc: "Sophisticated layout filtering rules eliminate administrative rejection logs." }
    ];
  }

  window.PLATFORM_METRICS_CATALOG[s] = {
    name: name,
    pill: pillText,
    badge: badgeText,
    title: sectionTitle,
    hero_title: 'Streamlined <br><span style="color:#10b981;">' + name + ' Automation</span>',
    hero_lead: 'Execute your ' + name + ' filings, background applications, and administrative documentation without manual processing errors.',
    img_src: 'images/' + imageFilename + '-hero.jpg',
    items: cards
  };
});

/* === METRICS CATALOG BLOCK 1: INITIAL SUBPAGES === */

window.PLATFORM_METRICS_CATALOG["llc-formation"] = {
    name: "LLC Formation",
    pill: "Corporate Framework",
    badge: "ALL CLEAR: SECRETARY OF STATE REST NODE SECURED",
    title: "LLC Formation System Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">LLC Formation Automation</span>',
    hero_lead: 'Execute your LLC formations, articles of organization, and administrative state documentation without manual processing errors.',
    img_src: 'images/llc-formation-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["corporations"] = {
    name: "Corporations (C/S-Corp)",
    pill: "Corporate Framework",
    badge: "MONITOR CORE CHANNELS SECURE",
    title: "Corporate Incorporation System Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Corporations Automation</span>',
    hero_lead: 'Execute your corporate charter filings, initial board resolutions, and share allocations seamlessly without manual administrative errors.',
    img_src: 'images/corporations-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["sole-proprietorship"] = {
    name: "Sole Proprietorship",
    pill: "Corporate Framework",
    badge: "LOCAL COUNTY LEDGER CHANNEL ACTIVE",
    title: "Sole Proprietorship Structuring Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Sole Proprietorship Automation</span>',
    hero_lead: 'Execute your sole proprietorship listings, trade certificate declarations, and county level business registration papers securely.',
    img_src: 'images/sole-proprietorship-hero.jpg',
    items: []
};

/* === METRICS CATALOG BLOCK 2: BUSINESS CLASS STRUCTURING === */

window.PLATFORM_METRICS_CATALOG["dba-registration"] = {
    name: "DBA Registration",
    pill: "Corporate Framework",
    badge: "MONITOR CORE CHANNELS SECURE",
    title: "DBA Registration System Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">DBA Registration Automation</span>',
    hero_lead: 'Execute your doing-business-as assumed names, county publication schedules, and localized trade registry documents error-free.',
    img_src: 'images/doing-business-as-dba-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["nonprofits"] = {
    name: "Nonprofit Organization",
    pill: "Corporate Framework",
    badge: "MONITOR CORE CHANNELS SECURE",
    title: "Nonprofit Declaration Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Nonprofit Automation</span>',
    hero_lead: 'Execute your nonprofit foundation articles, charitable tax-exempt status frameworks, and asset dedication files securely.',
    img_src: 'images/nonprofits-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["series-llc"] = {
    name: "Series LLC",
    pill: "Corporate Framework",
    badge: "MONITOR CORE CHANNELS SECURE",
    title: "Series LLC Fragmentary Asset Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Series LLC Automation</span>',
    hero_lead: 'Execute your master corporate series frameworks, isolated cell sub-registries, and asset protection files without manual errors.',
    img_src: 'images/series-llc-hero.jpg',
    items: []
};

/* === METRICS CATALOG BLOCK 3: CROSS-BORDER & BRAND RIGHTS === */

window.PLATFORM_METRICS_CATALOG["foreign-qualification"] = {
    name: "Foreign Qualification",
    pill: "Corporate Framework",
    badge: "MONITOR CORE CHANNELS SECURE",
    title: "Foreign Qualification Matrix Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Foreign Qualification Automation</span>',
    hero_lead: 'Execute your cross-border business authority certificates, certificate of good standing links, and multi-state qualifications error-free.',
    img_src: 'images/foreign-qualification-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["llc-reinstatement"] = {
    name: "LLC Reinstatement",
    pill: "Corporate Framework",
    badge: "MONITOR CORE CHANNELS SECURE",
    title: "LLC Reinstatement Recovery Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">LLC Reinstatement Automation</span>',
    hero_lead: 'Execute your administrative dissolution recovery lines, penalty ledger clears, and corporate back-tax filings securely.',
    img_src: 'images/llc-reinstatement-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["trademark-filing"] = {
    name: "Trademark Filing",
    pill: "Corporate Framework",
    badge: "MONITOR CORE CHANNELS SECURE",
    title: "Trademark Filing Registration Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Trademark Filing Automation</span>',
    hero_lead: 'Execute your corporate brand name registrations, trademark application matrices, and USPTO asset filings securely without errors.',
    img_src: 'images/trademark-filing-hero.jpg',
    items: []
};

/* === METRICS CATALOG BLOCK 4: GOVERNANCE & ANNUAL REGS === */

window.PLATFORM_METRICS_CATALOG["servicemark-filing"] = {
    name: "Servicemark Filing",
    pill: "Corporate Framework",
    badge: "MONITOR CORE CHANNELS SECURE",
    title: "Servicemark Filing Protection Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Servicemark Filing Automation</span>',
    hero_lead: 'Execute your proprietary service markings, institutional phrase protections, and utility design filing records error-free.',
    img_src: 'images/servicemark-filing-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["annual-reports"] = {
    name: "Annual Reports",
    pill: "Corporate Framework",
    badge: "ANNUAL FILING DEADLINE CHECKER ACTIVE",
    title: "Annual Reports Statutory Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Annual Reports Automation</span>',
    hero_lead: 'Execute your mandatory annual state listings, corporate information declarations, and franchise data updates to maintain corporate active standing.',
    img_src: 'images/annual-reports-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["operating-agreement"] = {
    name: "Operating Agreement",
    pill: "Corporate Framework",
    badge: "INTERNAL GOVERNANCE CHANNELS ACTIVE",
    title: "Operating Agreement Compilation Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Operating Agreement Automation</span>',
    hero_lead: 'Execute your custom corporate bylaws, multi-member company provisions, asset management splits, and institutional signature blueprints.',
    img_src: 'images/operating-agreement-hero.jpg',
    items: []
};

/* === METRICS CATALOG BLOCK 5: ADMINISTRATIVE INFRASTRUCTURE === */

window.PLATFORM_METRICS_CATALOG["registered-agent"] = {
    name: "Registered Agent",
    pill: "Corporate Framework",
    badge: "STATUTORY AGENT MONITOR ONLINE",
    title: "Registered Agent Representation Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Registered Agent Service Automation</span>',
    hero_lead: 'Execute your state statutory representation protocols, immediate service of process scanning pipelines, and corporate legal address monitoring.',
    img_src: 'images/registered-agent-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["business-licenses"] = {
    name: "Business Licenses",
    pill: "Corporate Framework",
    badge: "MUNICIPAL COMPLIANCE SCANNER ACTIVE",
    title: "Business Licenses Enforcement Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Business Licenses Automation</span>',
    hero_lead: 'Execute your local city permits, county operational authorizations, and specialized industry state business license profiles error-free.',
    img_src: 'images/business-licenses-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["employer-id-ein"] = {
    name: "Employer ID (EIN)",
    pill: "Corporate Framework",
    badge: "IRS DIRECT REST GATEWAY SIGNED",
    title: "Employer ID EIN Procurement Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Employer ID (EIN) Automation</span>',
    hero_lead: 'Execute your federal tax identification parameters, IRS employer registry applications, and banking operational clearances securely.',
    img_src: 'images/employer-id-ein-hero.jpg',
    items: []
};
/* === METRICS CATALOG BLOCK 6: LIFECYCLE & CERTIFICATION === */

window.PLATFORM_METRICS_CATALOG["dissolution"] = {
    name: "Entity Dissolution",
    pill: "Corporate Framework",
    badge: "STATUTORY DE-REGISTRATION PIPELINE SECURED",
    title: "Entity Dissolution De-Registration Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Entity Dissolution Automation</span>',
    hero_lead: 'Execute your articles of dissolution, final tax account closures, and state secretary asset clearances safely to remove future liability burdens.',
    img_src: 'images/dissolution-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["certificate-of-good-standing"] = {
    name: "Certificate of Good Standing",
    pill: "Corporate Framework",
    badge: "REAL-TIME SECRETARY OF STATE VALIDATOR ACTIVE",
    title: "Certificate of Good Standing Query Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Certificate of Good Standing Automation</span>',
    hero_lead: 'Execute your corporate health validations, real-time secretarial status verifications, and certified compliance document orders error-free.',
    img_src: 'images/certificate-of-good-standing-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["apostille-services"] = {
    name: "Apostille Services",
    pill: "Corporate Framework",
    badge: "INTER-GOVERNMENTAL AUTHENTICATION TRACKER ONLINE",
    title: "Apostille Services Inter-Gov Authentication Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Apostille Services Automation</span>',
    hero_lead: 'Execute your international legal documents validation, multi-tier state authentication protocols, and global embassy certification filings smoothly.',
    img_src: 'images/apostille-services-hero.jpg',
    items: []
};


/* === METRICS CATALOG BLOCK 7: LABORATORIES & FISCAL CORE === */

window.PLATFORM_METRICS_CATALOG["clia-certificate"] = {
    name: "CLIA Certificate",
    pill: "Corporate Framework",
    badge: "CMS LABORATORY REGISTRY HUB SYNCED",
    title: "CLIA Certificate Laboratory Registry Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">CLIA Certificate Automation</span>',
    hero_lead: 'Execute your federal clinical laboratory improvement amendments applications, diagnostic testing clearances, and CMS regulatory oversight profiles.',
    img_src: 'images/clia-certificate-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["regulatory-consulting"] = {
    name: "Regulatory Consulting",
    pill: "Corporate Framework",
    badge: "ADMINISTRATIVE STRATEGY INTERFACE ACTIVE",
    title: "Regulatory Consulting Oversight Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Regulatory Consulting Automation</span>',
    hero_lead: 'Execute your structural governance mapping programs, complex multi-state compliance footprints, and ongoing institutional administrative filings risk tracking.',
    img_src: 'images/regulatory-consulting-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["federal-tax"] = {
    name: "Federal Tax",
    pill: "Tax & Financial",
    badge: "ALL CLEAR: SECURE REST IRS GATEWAYS ACTIVE",
    title: "Federal Income Tax Filing Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Federal Income Tax Automation</span>',
    hero_lead: 'Execute your corporate income tax reporting schedules, operational tax calculations, and federal fiscal data submissions securely through encrypted nodes.',
    img_src: 'images/federal-tax-hero.jpg',
    items: []
};

/* === METRICS CATALOG BLOCK 8: STATE TAXES & SALES LEDGERS === */

window.PLATFORM_METRICS_CATALOG["state-tax"] = {
    name: "State Tax",
    pill: "Tax & Financial",
    badge: "ALL CLEAR: SECURE REST GATEWAYS ACTIVE",
    title: "State Income Tax Reporting Networks",
    hero_title: 'Streamlined <br><span style="color:#10b981;">State Income Tax Automation</span>',
    hero_lead: 'Execute your local state corporate income returns, regional jurisdiction bracket mappings, and electronic revenue filings securely.',
    img_src: 'images/state-tax-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["franchise-tax"] = {
    name: "Franchise Tax",
    pill: "Tax & Financial",
    badge: "ALL CLEAR: SECURE REST GATEWAYS ACTIVE",
    title: "Franchise Tax Filing Ledgers",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Franchise Tax Automation</span>',
    hero_lead: 'Execute your state privilege taxes, corporate capitalization reportings, and ongoing annual secretary franchise data filings securely.',
    img_src: 'images/franchise-tax-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["sales-tax-registration"] = {
    name: "Sales Tax Registration",
    pill: "Tax & Financial",
    badge: "ALL CLEAR: SECURE REST GATEWAYS ACTIVE",
    title: "Sales Tax Registration Bindings",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Sales Tax Registration Automation</span>',
    hero_lead: 'Execute your regional nexus certificates, state reseller permits, and transactional tax collection authority accounts error-free.',
    img_src: 'images/sales-tax-registration-hero.jpg',
    items: []
};

/* === METRICS CATALOG BLOCK 10: PROFILES & TRUCKING AUTHS === */

window.PLATFORM_METRICS_CATALOG["duns-number"] = {
    name: "DUNS Number",
    pill: "Corporate Framework",
    badge: "GLOBAL CREDIT DATA REGISTRY LINK ACTIVE",
    title: "DUNS Number Institutional Tracking Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">DUNS Number Allocation Automation</span>',
    hero_lead: 'Execute your global corporate identification metrics, Dun & Bradstreet company index listings, and credit clearance profiles securely.',
    img_src: 'images/duns-number-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["minority-certificate"] = {
    name: "Minority Certificate",
    pill: "Corporate Framework",
    badge: "GOVERNMENT DISADVANTAGED ENTERPRISE PORTAL SYSTEM",
    title: "Minority Certificate Structuring Profiles",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Minority Certificate Automation</span>',
    hero_lead: 'Execute your MBE/WBE validation dossiers, diversity enterprise classifications, and public sector supplier bidding registrations error-free.',
    img_src: 'images/minority-certificate-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["trucker-authority"] = {
    name: "Trucker Authority",
    pill: "Logistics Infrastructure",
    badge: "LOGISTICS CHANNELS ACTIVE SECURE",
    title: "Trucker Authority (MC Number) Networks",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Trucker Authority Automation</span>',
    hero_lead: 'Execute your FMCSA operating credentials, USDOT fleet parameters, and motor carrier authority numbers without manual administrative stalls.',
    img_src: 'images/trucker-authority-hero.jpg',
    items: []
};

/* === METRICS CATALOG BLOCK 11: LOGISTICS INTERMEDIARIES & REGISTRIES === */

window.PLATFORM_METRICS_CATALOG["broker-authority"] = {
    name: "Broker Authority",
    pill: "Logistics Infrastructure",
    badge: "LOGISTICS CHANNELS ACTIVE SECURE",
    title: "Broker Authority Intermediary Nodes",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Broker Authority Automation</span>',
    hero_lead: 'Execute your freight brokerage licenses, BMC-84 financial surety bindings, and FMCSA property broker authority channels error-free.',
    img_src: 'images/broker-authority-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["ucr-registration"] = {
    name: "UCR Registration",
    pill: "Logistics Infrastructure",
    badge: "LOGISTICS CHANNELS ACTIVE SECURE",
    title: "UCR Registration Unified Carrier Metrics",
    hero_title: 'Streamlined <br><span style="color:#10b981;">UCR Registration Automation</span>',
    hero_lead: 'Execute your unified carrier registration compliance protocols, multi-state commercial operations brackets, and annual fleet safety fees safely.',
    img_src: 'images/ucr-registration-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["scac-code"] = {
    name: "SCAC Code",
    pill: "Logistics Infrastructure",
    badge: "LOGISTICS CHANNELS ACTIVE SECURE",
    title: "SCAC Code Logistics Identifiers",
    hero_title: 'Streamlined <br><span style="color:#10b981;">SCAC Code Allocation Automation</span>',
    hero_lead: 'Execute your NMFTA standard carrier alpha code configurations, electronic data interchange intermodal mappings, and freight clearance tags.',
    img_src: 'images/scac-code-hero.jpg',
    items: []
};

/* === METRICS CATALOG BLOCK 12: LOGISTICS CLOSING COVENANTS === */

window.PLATFORM_METRICS_CATALOG["dot-consortium"] = {
    name: "DOT Drug Consortium",
    pill: "Logistics Infrastructure",
    badge: "FMCSA CLEARINGHOUSE MONITOR SECURED",
    title: "DOT Consortium Testing Random Pools",
    hero_title: 'Streamlined <br><span style="color:#10b981;">DOT Drug Consortium Automation</span>',
    hero_lead: 'Execute your mandatory random drug and alcohol compliance testing pools, commercial driver registration verifications, and safety matrix allocations.',
    img_src: 'images/dot-consortium-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["driver-file"] = {
    name: "Driver Qualification File (DQF)",
    pill: "Logistics Infrastructure",
    badge: "SAFETY COMPLIANCE SCANNER MASTER ACTIVE",
    title: "Driver Qualification File Ledger",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Driver Qualification File (DQF) Automation</span>',
    hero_lead: 'Execute your statutory driver qualification files tracking, commercial background check verifications, and medical examiner monitoring error-free.',
    img_src: 'images/driver-file-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["process-agents-boc-3"] = {
    name: "Process Agent (BOC-3)",
    pill: "Logistics Infrastructure",
    badge: "STATUTORY FMCSA LEGAL NETWORK ONLINE",
    title: "Process Agent (BOC-3) Representation",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Process Agent (BOC-3) Automation</span>',
    hero_lead: 'Execute your mandatory federal BOC-3 legal representation profiles, immediate jurisdictional service tracking, and motor carrier authority activation.',
    img_src: 'images/process-agents-boc-3-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["ifta-registration"] = {
    name: "IFTA Registration",
    pill: "Logistics Infrastructure",
    badge: "MULTI-JURISDICTIONAL MILEAGE VERIFIER RUNNING",
    title: "IFTA Registration Mileage Systems",
    hero_title: 'Streamlined <br><span style="color:#10b981;">IFTA Registration Automation</span>',
    hero_lead: 'Execute your international fuel tax agreement credentials, quarterly carrier mileage reporting ledgers, and multi-state decal orders securely.',
    img_src: 'images/ifta-registration-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["hazmat-registration"] = {
    name: "HAZMAT Registration",
    pill: "Logistics Infrastructure",
    badge: "PHMSA HAZARDOUS MATERIALS SAFETY GATEWAY SECURED",
    title: "HAZMAT Registration Safety Matrices",
    hero_title: 'Streamlined <br><span style="color:#10b981;">HAZMAT Registration Automation</span>',
    hero_lead: 'Execute your federal hazardous materials operational permits, PHMSA transport certifications, and specialized fleet routing safety declarations.',
    img_src: 'images/hazmat-registration-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["licenses-permits"] = {
    name: "Licenses & Permits",
    pill: "Logistics Infrastructure",
    badge: "INTERSTATE REGULATORY CHECKER PIPELINE ONLINE",
    title: "Local, State, & Federal Licenses & Permits",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Logistics Licenses & Permits Automation</span>',
    hero_lead: 'Execute your specialized intra-state authority permits, overweight highway transits, and commercial carrier city-level operating credentials safely.',
    img_src: 'images/licenses-permits-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["trucker-insurance-quote"] = {
    name: "Trucker Insurance Quote",
    pill: "Logistics Infrastructure",
    badge: "LIABILITY RISK MATRICES CONNECTED SECURE",
    title: "Trucker Insurance Premium Quotations",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Trucker Insurance Quote Automation</span>',
    hero_lead: 'Execute your primary commercial auto liabilities routing, cargo loss indemnity parameters, and multi-fleet risk coverage allocations.',
    img_src: 'images/trucker-insurance-quote-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["broker-insurance-quote"] = {
    name: "Broker Insurance Quote",
    pill: "Logistics Infrastructure",
    badge: "CONTINGENT RISK INFRASTRUCTURE SYSTEMS TERMINATED CLEAR",
    title: "Broker Insurance Liabilities Quotations",
    hero_title: 'Streamlined <br><span style="color:#10b981;">Broker Insurance Quote Automation</span>',
    hero_lead: 'Execute your contingent cargo liabilities configurations, error & omissions protection tracking, and strategic brokerage bond clearance.',
    img_src: 'images/broker-insurance-quote-hero.jpg',
    items: []
};

window.PLATFORM_METRICS_CATALOG["new-entrant-audit"] = {
    name: "New Entrant Audit",
    pill: "Logistics Infrastructure",
    badge: "PRE-AUDIT SAFETY ENVIRONMENT INGESTED SECURE",
    title: "New Entrant Audit Pre-Audit Dossier Checks",
    hero_title: 'Streamlined <br><span style="color:#10b981;">New Entrant Audit Automation</span>',
    hero_lead: 'Execute your FMCSA safety management verifications, driver ledger checks, and commercial vehicle maintenance pre-audit compliance checklists safely.',
    img_src: 'images/new-entrant-audit-hero.jpg',
    items: []
};






window.PLATFORM_METRICS_CATALOG["index"] = {
  name: "Corporate & Logistics Compliance Platform",
  pill: "Unified Infrastructure Platform",
  badge: "Global Enterprise Filing Network Active",
  title: "Corporate Filing Infrastructure",
  hero_title: "Streamlined Corporate & <br><span style='color:#10b981;'>Logistics Automation</span>",
  hero_lead: "Execute business formations, state tax registrations, and federal logistics applications seamlessly without manual structural processing errors.",
  img_src: "images/index-hero.jpg",
  items: [
    { icon: "🏢", val: "142K+", lbl: "Entities Formed", desc: "Authorized business structural records processed across state secretarial systems." },
    { icon: "🚛", val: "38,410", lbl: "Active Transits", desc: "Interstate operating profiles fully synchronized with federal database mainframes." },
    { icon: "⚡", val: "1.8s", lbl: "Pipeline Speed", desc: "Encrypted REST application nodes deliver immediate transitional routing." },
    { icon: "🔒", val: "99.98%", lbl: "Accuracy Quotient", desc: "Sophisticated automated filter protocols eliminate syntax and formatting rejection errors." }
  ]
};


document.addEventListener("error", function (event) {
  if (event.target && event.target.tagName === "IMG") {
    const currentSrc = event.target.src || "";
    if (currentSrc.includes("hero.jpg") && !currentSrc.includes("index-hero.jpg")) {
      console.warn("[Resource Recovery] Mapping missing image to global standard backup card asset.");
      event.target.src = "images/index-hero.jpg";
    }
  }
}, true);
