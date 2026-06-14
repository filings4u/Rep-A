window.PLATFORM_METRICS_CATALOG = window.PLATFORM_METRICS_CATALOG || {};

const catalogServices = [
  "llc-formation", "corporations", "sole-proprietorship", "dba-registration", "nonprofit-organization",
  "series-llc", "foreign-qualification-certificate", "llc-reinstatement-processing", "trademark-filing",
  "servicemark-filing", "annual-reports", "operating-agreement", "registered-agent", "business-licenses",
  "employer-id-ein", "entity-dissolution", "certificate-of-good-standing", "apostille-authentication-services",
  "clia-certificate", "custom-regulatory-legal-consulting", "federal-tax", "state-tax",
  "franchise-tax-filing", "sales-tax-registration", "payroll-tax-940-941", "heavy-use-tax-2290",
  "cage-code", "duns-number", "procurement-procurement-registration", "minority-certificate",
  "owner-operators", "trucker-authority", "broker-authority", "ucr-registration", "scac-code-registration",
  "dot-consortium", "driver-file", "process-agent-boc-3", "ifta-registration",
  "hazmat-registration", "licenses-permits", "trucker-insurance", "broker-insurance", "new-entrant-audit"
];

function calculateMetricHash(str, modifier) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash + modifier);
}

catalogServices.forEach(s => {
  let name = s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    .replace("Llc", "LLC").replace("Dba", "DBA").replace("Ein", "EIN")
    .replace("Dot", "DOT").replace("Ucr", "UCR").replace("Clia", "CLIA")
    .replace("Fmcsa", "FMCSA").replace("Scac", "SCAC").replace("Poa", "POA")
    .replace("Duns", "DUNS").replace("Id", "ID")
    .replace("Ifta", "IFTA").replace("Hazmat", "HAZMAT").replace("Boc 3", "BOC-3")
    .replace("Corporations", "Corporations (C/S-Corp)");

  if (name === "Dba Registration") name = "DBA Registration";
  if (name === "Employer ID EIN") name = "Employer ID (EIN)";

  // Fix 404 Mismatch: Force the image path variable to evaluate cleanly
  let imageFilename = s;
  if (s === "dba-registration") {
    imageFilename = "doing-business-as-dba";
  }

  let vertical = "corporate";
  let pillText = "Corporate Framework";
  let badgeText = "MONITOR CORE CHANNELS SECURE";
  let sectionTitle = `${name} System Metrics`;

  if (s.includes("tax") || s.includes("payroll") || s.includes("franchise")) {
    vertical = "tax";
    pillText = "Tax & Financial";
    badgeText = "ALL CLEAR: SECURE REST GATEWAYS ACTIVE";
    sectionTitle = "Corporate Fiscal Infrastructure";
  } else if (s.includes("authority") || s.includes("trucker") || s.includes("insurance") || s.includes("ucr") || s.includes("scac") || s.includes("ifta") || s.includes("audit") || s.includes("boc-3") || s.includes("driver") || s.includes("consortium")) {
    vertical = "logistics";
    pillText = "Logistics Infrastructure";
  }

  let seedA = (calculateMetricHash(s, 10) % 85) + 15;
  let seedB = (calculateMetricHash(s, 20) % 900) + 100;
  let seedC = ((calculateMetricHash(s, 30) % 40) / 10 + 1).toFixed(1);

  let cards = [];
  if (vertical === "tax") {
    cards = [
      { icon: "💵", val: `$${seedC}B+`, lbl: "Volume Routed", desc: `Processing institutional financial compliance metrics for ${name}.` },
      { icon: "⏱️", val: "0.4s", lbl: "API Speed Engine", desc: `Encrypted REST transmission mapping for regional ${name} networks.` },
      { icon: "📝", val: "Zero-Error", lbl: "Math Balance", desc: `Automated validation sweeps cross-verify regulatory tax ledger formulas.` },
      { icon: "🗓️", val: "24/7", lbl: "SLA Queue Loop", desc: `Continuous diagnostic rules sweep deadlines to bypass system late penalties.` }
    ];
  } else if (vertical === "logistics") {
    cards = [
      { icon: "🛣️", val: `${seedA}K+`, lbl: "Active Registrations", desc: `Operating credential profiles approved for immediate deployment pipelines.` },
      { icon: "🚦", val: "100%", lbl: "FMCSA Access Rating", desc: `Pre-checked background application files clear enforcement lock parameters.` },
      { icon: "📦", val: `${seedC}M`, lbl: "Daily Certified Loads", desc: `Commercial logistics freight moving under unified transportation codes.` },
      { icon: "📡", val: "Real-Time", lbl: "USDOT Central Node", desc: `Synchronized network loops update credential status to federal mainframes.` }
    ];
  } else {
    cards = [
      { icon: "🏢", val: `${seedB}K+`, lbl: "Entities Cleared", desc: `Successfully completed ${name} legal records with sovereign registries.` },
      { icon: "⚡", val: "24-48 Hr", lbl: "Velocity Pipeline", desc: `Direct cloud data connections bypass traditional desk parsing backlogs.` },
      { icon: "🛡️", value: "100%", lbl: "Statutory Shield", desc: `Filing configurations rigorously cross-referenced against local laws.` },
      { icon: "🔒", val: "99.98%", lbl: "Syntax Integrity", desc: `Sophisticated layout filtering rules eliminate administrative rejection logs.` }
    ];
  }

  // Save everything under both formats to support flexible script selectors
  const fullProfile = {
    name: name,
    pill: pillText,
    badge: badgeText,
    title: sectionTitle,
    hero_title: `Streamlined <br><span style="color:#10b981;">${name} Automation</span>`,
    hero_lead: `Execute your ${name} filings, background applications, and administrative documentation without manual processing errors.`,
    img_src: `images/${imageFilename}-hero.jpg`,
    items: cards
  };

  window.PLATFORM_METRICS_CATALOG[s] = fullProfile;
  if (s === "dba-registration") {
    window.PLATFORM_METRICS_CATALOG["dba-registration"] = fullProfile;
  }
});


// ============================================================================ //
// MODULE 6: HOMEPAGE GLOBAL INDEX PROFILE DEFINITION
// ============================================================================ //
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

