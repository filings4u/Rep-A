(function(){
  "use strict";

  const root = document.getElementById("filings4u-service-pricing-root");
  if (!root) return;

  const serviceKey = String(document.body.getAttribute("data-wizard-service") || "").trim().toLowerCase();
  if (!serviceKey) return;

  const STATE_SERVICES = new Set(["corporations", "dba-registration", "llc-formation", "nonprofits", "series-llc", "sole-proprietorship", "annual-reports", "business-licenses", "certificate-of-good-standing", "dissolution", "foreign-qualification", "llc-reinstatement", "operating-agreement", "registered-agent", "ifta-quarterly-returns", "ifta-registration", "ifta-replacement", "dbe-certification", "minority-certificate", "servicemark-filing", "wbe-certification", "franchise-tax", "regulatory-consulting", "sales-tax-registration", "state-tax"]);
  const registry = window.CENTRAL_SERVICE_PLAN_DB || {};
  const plan = registry[serviceKey];

  if (!plan) {
    root.innerHTML =
      '<div class="service-pricing-head"><span class="section-kicker">Pricing</span>' +
      '<h2>Pricing is being updated.</h2>' +
      '<p>Please contact our team for the current service options.</p></div>';
    return;
  }

  const requiresJurisdiction =
    typeof plan.requiresJurisdiction === "boolean"
      ? plan.requiresJurisdiction
      : STATE_SERVICES.has(serviceKey);

  const tierConfig = [
    { key:"starter", name:"Starter", featured:false, description:"Essential filing support" },
    { key:"compliance", name:"Compliance", featured:true, description:"More guidance and ongoing support" },
    { key:"enterprise", name:"Enterprise", featured:false, description:"Our most complete service level" }
  ];

  function bulletsFor(tier){
    if (plan.bullets && !Array.isArray(plan.bullets) && Array.isArray(plan.bullets[tier])) {
      return plan.bullets[tier];
    }
    if (Array.isArray(plan.bullets)) return plan.bullets;
    return [];
  }

  const serviceTitle = String(plan.title || plan.serviceTitle || plan.name || "Service");

  const cards = tierConfig.map(function(tier){
    const price = Number(plan[tier.key] || 0);
    const bullets = bulletsFor(tier.key);

    return `
      <article class="service-price-card${tier.featured ? " service-price-card--featured" : ""}">
        ${tier.featured ? '<span class="service-price-card__badge">Most Popular</span>' : ''}
        <span class="service-price-card__tier">${tier.name}</span>
        <h3>${tier.description}</h3>

        <div class="service-price-card__price">
          <sup>$</sup><strong>${price.toFixed(0)}</strong><span>service fee</span>
        </div>

        <ul>${bullets.map(function(item){ return `<li>${item}</li>`; }).join("")}</ul>

        <a class="button ${tier.featured ? "button--primary" : "button--secondary"}"
           href="#pricing"
           data-wizard-handoff
           data-service="${serviceKey}"
           data-plan="${tier.key}"
           data-service-title="${serviceTitle.replace(/"/g, "&quot;")}"
           data-requires-jurisdiction="${requiresJurisdiction ? "true" : "false"}">
          Choose ${tier.name} <span aria-hidden="true">→</span>
        </a>
      </article>`;
  }).join("");

  const note = requiresJurisdiction
    ? "<strong>State-priced service:</strong> After you choose a package, select the filing state before entering the secure application."
    : "<strong>Government/specialty service:</strong> No filing-state selection is required.";

  root.innerHTML = `
    <div class="service-pricing-head">
      <span class="section-kicker">Choose your service level</span>
      <h2>Pick the package that fits your needs.</h2>
      <p>${requiresJurisdiction
        ? "Your package and filing state will carry directly into the secure application."
        : "Your selected package will carry directly into the secure application."}</p>
    </div>

    <div class="service-pricing-grid">${cards}</div>

    <div class="service-pricing-note">
      <span>ⓘ</span>
      <div>${note}</div>
    </div>`;
})();
