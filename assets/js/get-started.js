/**
 * get-started.js
 * Service catalog for the redesigned filings4u shell.
 *
 * Specialty services use wizard routes directly:
 * wizard.html?service=<service-slug>
 */

(function(){
  "use strict";

  const groups=[
    {
      key:"01",
      label:"Formations",
      title:"Start & structure your business",
      desc:"Choose the legal structure or business registration you need.",
      items:[
        ["LLC Formation","Form a limited liability company and create a clear legal foundation.","llc-formation.html","LLC"],
        ["Corporations","Support for C-Corp and S-Corp formation.","corporations.html","C"],
        ["Sole Proprietorship","Get organized around registrations for an independently owned business.","sole-proprietorship.html","1"],
        ["DBA Registration","Register a business name used outside your legal entity name.","dba-registration.html","DBA"],
        ["Nonprofit Organization","Formation support for nonprofit entities.","nonprofits.html","NP"],
        ["Series LLC","Formation support for businesses using a series structure where available.","series-llc.html","S"]
      ]
    },

    {
      key:"02",
      label:"Compliance",
      title:"Keep your entity in good standing",
      desc:"Handle recurring filings, entity records, licenses, and operational registrations.",
      items:[
        ["Annual Reports","Stay current with recurring state reporting requirements.","annual-reports.html","AR"],
        ["Operating Agreement","Document key ownership and operating terms.","operating-agreement.html","OA"],
        ["Registered Agent","Support for registered agent requirements.","registered-agent.html","RA"],
        ["Business Licenses","Identify and address licensing and registration needs.","business-licenses.html","BL"],
        ["Employer ID (EIN)","Get support obtaining a federal Employer Identification Number.","employer-id-ein.html","#"],
        ["Good Standing","Request evidence that your company is active and compliant.","certificate-of-good-standing.html","✓"],
        ["LLC Reinstatement","Restore an eligible entity after administrative dissolution.","llc-reinstatement.html","↺"],
        ["Foreign Qualification","Register an existing company to conduct business in another state.","foreign-qualification.html","FQ"],
        ["Apostille Services","Authentication support for documents used internationally.","apostille-services.html","A"],
        ["Entity Dissolution","Close an entity with the appropriate formal filing process.","dissolution.html","×"]
      ]
    },

    {
      key:"03",
      label:"Tax filings",
      title:"Register and stay current with tax requirements",
      desc:"Federal, state, payroll, sales, franchise, and specialty tax filing support.",
      items:[
        ["Federal Income Tax","Support for federal business tax filing requirements.","federal-tax.html","US"],
        ["State Income Tax","Address state-level income and business tax filing needs.","state-tax.html","ST"],
        ["Franchise Tax","Navigate state franchise or privilege tax requirements.","franchise-tax.html","FT"],
        ["Payroll Tax 940/941","Support for common federal employer payroll tax filings.","payroll-tax-940-941.html","94"],
        ["Sales Tax Registration","Set up sales tax registrations where obligations apply.","sales-tax-registration.html","%"],
        ["Heavy Use Tax 2290","File federal heavy highway vehicle use tax requirements.","heavy-use-tax-2290.html","22"],
        ["CLIA Certificate","Support for CLIA certificate application requirements.","clia-certificate.html","CL"],
        ["Regulatory Consulting","Get support navigating specialized regulatory requirements.","regulatory-consulting.html","RC"]
      ]
    },

    {
      key:"04",
      label:"Registrations",
      title:"Government identifiers & intellectual property",
      desc:"Business identifiers, supplier certifications, trademarks, and servicemarks.",
      items:[
        ["CAGE Code","Government entity identifier registration support.","cage-code.html","CG"],
        ["DUNS Number","Business identifier support for applicable use cases.","duns-number.html","DN"],
        ["Minority Certificate","Support for qualifying minority business certification.","minority-certificate.html","MC"],
        ["Trademark Filing","Protect a brand name, logo, or other trademark.","trademark-filing.html","™"],
        ["Servicemark Filing","Protect branding used to identify services.","servicemark-filing.html","SM"]
      ]
    },

    {
      key:"05",
      label:"DOT & Fleet",
      title:"Keep your authority and fleet moving",
      desc:"Operating authority, registrations, compliance files, audits, permits, and insurance support.",
      items:[
        ["Owner Operators","Compliance support tailored to independent motor carriers.","owner-operators.html","OO"],
        ["Trucker Authority","Guidance and filing support for motor carrier operating authority.","trucker-authority.html","MC"],
        ["Broker Authority","Support for property broker operating authority.","broker-authority.html","BR"],
        ["DOT Consortium","Drug and alcohol testing consortium compliance support.","dot-consortium.html","DOT"],
        ["Driver Qualification File","Organize required driver qualification documentation.","driver-file.html","DQ"],
        ["Process Agent (BOC-3)","File process agent designation for operating authority.","process-agents-boc-3.html","B3"],
        ["BOC-3 Amendment","Update process agent filing information.","boc-3-amendment.html","B3"],
        ["MCS-150 Update","Support for biennial carrier information updates.","mcs-150-update.html","150"],
        ["New Entrant Audit","Prepare for FMCSA new entrant audit requirements.","new-entrant-audit.html","NE"],
        ["UCR Registration","Complete Unified Carrier Registration requirements.","ucr-registration.html","UCR"],
        ["SCAC Code","Support obtaining a Standard Carrier Alpha Code.","scac-code.html","SC"],
        ["IFTA Registration","Register for International Fuel Tax Agreement requirements.","ifta-registration.html","IF"],
        ["IFTA Quarterly Returns","Support for recurring IFTA fuel tax returns.","ifta-quarterly-returns.html","Q"],
        ["HAZMAT Registration","Support for applicable hazardous materials registration.","hazmat-registration.html","HZ"],
        ["Licenses & Permits","Transportation license and permit support.","dot-permits.html","P"],
        ["Trucker Insurance","Request trucking insurance support.","trucker-insurance-quote.html","TI"],
        ["Broker Insurance","Request broker insurance support.","broker-insurance-quote.html","BI"]
      ]
    }
  ];

  const specialtyGroups=[
    {
      key:"06",
      label:"Design Services",
      title:"Build a professional business presence",
      desc:"Choose a specialty website or logo package and continue directly into the filings4u wizard.",
      services:[
        {
          slug:"web-design-packages",
          icon:"WEB",
          title:"Web Design Packages",
          desc:"Custom business websites ranging from a focused launch site to a complete growth-focused web presence."
        },
        {
          slug:"logo-design-packages",
          icon:"LOGO",
          title:"Logo Design Packages",
          desc:"Professional logo development with tiered concepts, revisions, vector assets, and brand support."
        }
      ]
    },

    {
      key:"07",
      label:"Broker & Carrier Operations",
      title:"Operational packages for freight businesses",
      desc:"Ready-to-use onboarding and carrier documentation systems for brokers, trucking companies, and shipper relationships.",
      services:[
        {
          slug:"shipper-packages",
          icon:"SHIP",
          title:"Shipper Setup Packages",
          desc:"Broker-to-shipper onboarding documents, agreements, credit forms, billing setup, and operational templates."
        },
        {
          slug:"carrier-packages-brokers",
          icon:"BRKR",
          title:"Carrier Setup Packages for Brokers",
          desc:"Reusable broker carrier-onboarding packets with agreements, qualification, insurance, payment, and compliance documents."
        },
        {
          slug:"carrier-packages-truckers",
          icon:"TRK",
          title:"Carrier Packages for Trucking Companies",
          desc:"Professional carrier packets for broker setup, payment information, equipment details, compliance, and fleet presentation."
        }
      ]
    }
  ];

  const root=document.getElementById("filings4u-get-started-root");
  if(!root)return;

  function money(value){
    return new Intl.NumberFormat("en-US",{
      style:"currency",
      currency:"USD",
      minimumFractionDigits:0,
      maximumFractionDigits:0
    }).format(Number(value||0));
  }

  function standardCard([name,description,href,icon]){
    return `
      <a class="gs-card" href="${href}">
        <div class="gs-card__top">
          <span class="gs-card__icon">${icon}</span>
        </div>
        <div>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
        <b class="gs-card__cta">View service →</b>
      </a>
    `;
  }

  function specialtyCard(service){
    const db=window.CENTRAL_SERVICE_PLAN_DB||{};
    const plan=db[service.slug]||{};
    const labels=plan.tierLabels||{};
    const tierNames=[
      labels.starter||"Starter",
      labels.compliance||"Compliance",
      labels.enterprise||"Enterprise"
    ];

    const servicePages={
      "web-design-packages":"web-design-packages.html",
      "logo-design-packages":"logo-design-packages.html",
      "shipper-packages":"shipper-packages.html",
      "carrier-packages-brokers":"carrier-packages-brokers.html",
      "carrier-packages-truckers":"carrier-packages-truckers.html"
    };

    return `
      <a class="gs-card gs-card--specialty"
         href="${servicePages[service.slug]||`wizard.html?service=${encodeURIComponent(service.slug)}`}"
         data-service="${service.slug}">
        <div class="gs-card__top">
          <span class="gs-card__icon">${service.icon}</span>
          <span class="gs-card__price">From ${money(plan.starter)}</span>
        </div>

        <div>
          <h3>${service.title}</h3>
          <p>${service.desc}</p>
        </div>

        <div class="gs-card__tiers" aria-label="Available packages">
          ${tierNames.map(name=>`<span>${name}</span>`).join("")}
        </div>

        <b class="gs-card__cta">Choose package in wizard →</b>
      </a>
    `;
  }

  const standardMarkup=groups.map(group=>`
    <section class="gs-group reveal">
      <div class="gs-group__heading">
        <div>
          <span class="section-kicker">${group.key} · ${group.label}</span>
          <h2>${group.title}</h2>
        </div>
        <p>${group.desc}</p>
      </div>

      <div class="gs-grid">
        ${group.items.map(standardCard).join("")}
      </div>
    </section>
  `).join("");

  const specialtyMarkup=specialtyGroups.map(group=>`
    <section class="gs-group reveal">
      <div class="gs-group__heading">
        <div>
          <span class="section-kicker">${group.key} · ${group.label}</span>
          <h2>${group.title}</h2>
        </div>
        <p>${group.desc}</p>
      </div>

      <div class="gs-grid">
        ${group.services.map(specialtyCard).join("")}
      </div>
    </section>
  `).join("");

  root.innerHTML=standardMarkup+specialtyMarkup;
})();
