
(function(){
  "use strict";

  const root = document.getElementById("filings4u-service-pricing-root");
  if (!root) return;

  const serviceKey = document.body.getAttribute("data-wizard-service");
  if (!serviceKey) return;

  const registry = window.CENTRAL_SERVICE_PLAN_DB || {};
  const plan = registry[serviceKey];

  if (!plan) {
    root.innerHTML = '<div class="service-pricing-head"><span class="section-kicker">Pricing</span><h2>Pricing is being updated.</h2><p>Please contact our team for the current service options.</p></div>';
    return;
  }

  const tierConfig = [
    { key:"starter", name:"Starter", featured:false, description:"Essential filing support" },
    { key:"compliance", name:"Compliance", featured:true, description:"More guidance and ongoing support" },
    { key:"enterprise", name:"Enterprise", featured:false, description:"Our most complete service level" }
  ];

  const bulletsFor = (tier) => {
    if (plan.bullets && !Array.isArray(plan.bullets) && Array.isArray(plan.bullets[tier])) {
      return plan.bullets[tier];
    }
    if (Array.isArray(plan.bullets)) return plan.bullets;
    return [];
  };

  const cards = tierConfig.map(tier => {
    const price = Number(plan[tier.key] || 0);
    const bullets = bulletsFor(tier.key);
    const fallbackUrl = `get-started.html`;

    return `
      <article class="service-price-card${tier.featured ? " service-price-card--featured" : ""}">
        ${tier.featured ? '<span class="service-price-card__badge">Most Popular</span>' : ''}
        <span class="service-price-card__tier">${tier.name}</span>
        <h3>${tier.description}</h3>
        <div class="service-price-card__price">
          <sup>$</sup><strong>${price.toFixed(0)}</strong><span>service fee</span>
        </div>
        <ul>
          ${bullets.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <a
          class="button ${tier.featured ? "button--primary" : "button--secondary"}"
          href="${fallbackUrl}"
          data-wizard-handoff
          data-service="${serviceKey}"
          data-plan="${tier.key}">
          Choose ${tier.name} <span aria-hidden="true">→</span>
        </a>
      </article>
    `;
  }).join("");

  const jurisdictionNote = plan.requiresJurisdiction === false
    ? `<strong>Government service:</strong> No state jurisdiction selection is required. Your selected package will carry directly into the wizard.`
    : `<strong>State/jurisdiction service:</strong> Government filing fees vary by state and will be calculated after you select the filing jurisdiction in the wizard.`;

  root.innerHTML = `
    <div class="service-pricing-head">
      <span class="section-kicker">Choose your service level</span>
      <h2>Pick the package that fits your needs.</h2>
      <p>Every package uses the same secure filings4u workflow. Your selected service and tier carry directly into the wizard.</p>
    </div>
    <div class="service-pricing-grid">${cards}</div>
    <div class="service-pricing-note"><span>ⓘ</span><div>${jurisdictionNote}</div></div>
  `;
})();
