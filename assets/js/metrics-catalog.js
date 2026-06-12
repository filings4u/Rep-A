window.PLATFORM_STATIC_PAGES_DATA = window.PLATFORM_STATIC_PAGES_DATA || {};

const services = [
  "limited-liability-company", "corporations", "sole-proprietorship", "doing-business-as-dba",
  "nonprofits", "series-llc", "foreign-qualification", "llc-reinstatement", "trademark-filing",
  "servicemark-filing", "annual-reports", "operating-agreement", "registered-agent",
  "business-licenses", "employer-identification-number-ein", "dissolution", "good-standing",
  "apostille-services", "clia-certificate", "regulatory-consulting", "federal-income-tax",
  "state-income-tax", "franchise-tax", "sales-tax-registration", "payroll-tax-940-941",
  "heavy-use-tax-2290", "cage-code", "duns-number", "procurement-registration",
  "minority-certificate", "owner-operators", "trucker-authority", "broker-authority",
  "ucr-registration", "scac-code", "dot-consortium", "driver-qualification-file",
  "process-agents-boc-3", "international-fuel-tax-agreement-ifta", "hazmat-registration",
  "licenses-permits", "trucker-insurance", "broker-insurance", "new-entrant-audit",
  "fmcsa-insurance-filings"
];

services.forEach(s => {
  let name = s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ").replace("Llc","LLC").replace("Dba","DBA").replace("Ein","EIN").replace("Dot","DOT").replace("Ucr","UCR");
  
  window.PLATFORM_STATIC_PAGES_DATA[s] = {
    pill: "Corporate Logistics",
    title: `Streamlined <br><span style="color:#10b981;">${name} Automation</span>`,
    lead: `Execute your ${name} filings, background applications, and administrative tax documentation without manual processing errors.`,
    badge: "Filing Integrity System Active",
    btn_text: "File Application &rarr;",
    btn_url: "get-started.html",
    img_src: "images/hero-image.jpg",
    img_alt: `${name} Service Preview`
  };

  window.PLATFORM_STATIC_PAGES_DATA[s + "_metrics"] = {
    section_title: `${name} System Metrics`,
    status_badge: "MONITOR CORE CHANNELS SECURE",
    cards: [
      { icon: "⚡", value: "24-48 Hrs", title: "Processing Velocity", desc: "Accelerated processing schedules send finalized data back securely." },
      { icon: "🛡️", value: "100%", title: "Structural Integrity", desc: "Formations cross-verified strictly against regulatory standards." },
      { icon: "📄", value: "Instant", title: "Digital Processing", desc: "Secure cloud interfaces submit documentation directly to system branches." },
      { icon: "👥", value: "Active", title: "Account Monitoring", desc: "Ongoing diagnostic scanning loops track deadlines automatically." }
    ]
  };
});