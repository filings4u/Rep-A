const services = {
  formations: [
    ["LLC Formation", "Form a limited liability company and create a clear legal foundation for your business.", "llc-formation.html", "LLC"],
    ["Corporations", "Support for C-Corp and S-Corp formation and related corporate setup requirements.", "corporations.html", "C"],
    ["Sole Proprietorship", "Get organized around registrations and filings for an independently owned business.", "sole-proprietorship.html", "1"],
    ["DBA Registration", "Register a business name used outside your company’s legal entity name.", "dba-registration.html", "DBA"],
    ["Series LLC", "Formation support for businesses using a series structure where available.", "series-llc.html", "S"],
    ["Employer ID (EIN)", "Get support obtaining a federal Employer Identification Number for your business.", "employer-id-ein.html", "#"]
  ],
  compliance: [
    ["Annual Reports", "Stay current with recurring state reporting requirements.", "annual-reports.html", "AR"],
    ["Operating Agreement", "Put key ownership and operating terms into a formal business document.", "operating-agreement.html", "OA"],
    ["Business Licenses", "Identify and address business licensing and registration needs.", "business-licenses.html", "BL"],
    ["Good Standing", "Request evidence that your company is active and compliant with the state.", "certificate-of-good-standing.html", "✓"],
    ["Foreign Qualification", "Register an existing company to conduct business in another state.", "foreign-qualification.html", "FQ"],
    ["Dissolution", "Close an entity with the appropriate formal state filing process.", "dissolution.html", "×"]
  ],
  tax: [
    ["Federal Tax", "Support for federal business tax filing requirements.", "federal-tax.html", "US"],
    ["State Tax", "Address state-level income and business tax filing needs.", "state-tax.html", "ST"],
    ["Franchise Tax", "Navigate state franchise or privilege tax filing requirements.", "franchise-tax.html", "FT"],
    ["Payroll Tax 940/941", "Support for common federal employer payroll tax filings.", "payroll-tax-940-941.html", "94"],
    ["Sales Tax Registration", "Set up sales tax registrations where your business has filing obligations.", "sales-tax-registration.html", "%"],
    ["Heavy Use Tax 2290", "File federal heavy highway vehicle use tax requirements for qualifying vehicles.", "heavy-use-tax-2290.html", "22"]
  ],
  fleet: [
    ["Owner Operators", "Compliance support tailored to independent motor carriers and owner-operators.", "owner-operators.html", "OO"],
    ["Trucker Authority", "Guidance and filing support for motor carrier operating authority.", "trucker-authority.html", "MC"],
    ["UCR Registration", "Complete Unified Carrier Registration requirements for interstate operations.", "ucr-registration.html", "UCR"],
    ["DOT Consortium", "Support for drug and alcohol testing consortium compliance.", "dot-consortium.html", "DOT"],
    ["Process Agent (BOC-3)", "File BOC-3 process agent designation for operating authority compliance.", "process-agents-boc-3.html", "B3"],
    ["New Entrant Audit", "Prepare for FMCSA new entrant safety audit requirements.", "new-entrant-audit.html", "NE"]
  ]
};

const serviceGrid = document.getElementById("service-grid");
const tabs = document.querySelectorAll(".service-tab");

function renderServices(key) {
  if (!serviceGrid || !services[key]) return;
  serviceGrid.innerHTML = services[key].map(([title, desc, href, icon]) => `
    <a class="service-card" href="${href}">
      <span class="service-card__icon">${icon}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
      <b>View service →</b>
    </a>`).join("");
}

if (serviceGrid) {
  renderServices("formations");
}

tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(item => item.classList.remove("is-active"));
  tab.classList.add("is-active");
  renderServices(tab.dataset.tab);
}));

// Legacy homepage navigation support.
// The redesigned site now mounts navigation through navigation.js, so these
// elements may not exist. Guard them so the rest of the homepage JS continues.
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add("is-visible"));
}
