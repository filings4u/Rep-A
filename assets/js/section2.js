(function injectPricingStyles() {
  const targetId = "filings4u-pricing-board-root";
  const styleId = "f4u-pricing-premium-glow-animations";
  if (document.getElementById(styleId)) return;

  const s = document.createElement("style");
  s.id = styleId;
  s.textContent = `
    #${targetId} .pricing-premium-card { 
      background: #ffffff !important; 
      border: 1px solid #e2e8f0 !important; 
      border-radius: 14px !important; 
      padding: 35px 24px !important; 
      box-shadow: 0 10px 25px -5px rgba(10, 31, 68, 0.02) !important; 
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    #${targetId} .pricing-premium-card:hover { transform: translateY(-6px) !important; }
    #${targetId} .pricing-premium-card.standard-glow:hover { border-color: #10b981 !important; }
    #${targetId} .pricing-premium-card.popular-glow { border: 2px solid #10b981 !important; }
    @media (max-width: 991px) {
      #filings4u-pricing-board-root div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 24px !important; }
    }
  `;
  document.head.appendChild(s);
})();

function resolveCentralPricingObject(slug) {
  // Target the exact STATE_PRICING and GOVERNMENT_PRICING window objects
  const stateMatrix = window.STATE_PRICING || {};
  const govMatrix = window.GOVERNMENT_PRICING || {};
  
  // Combine all packages cleanly into a single reference pool
  const sourceMatrix = Object.assign(
    {}, 
    stateMatrix.packages || stateMatrix, 
    govMatrix.packages || govMatrix
  );
  
  const safeSlug = slug ? slug.toLowerCase().trim() : "";
  const record = sourceMatrix[safeSlug] || sourceMatrix[safeSlug.replace(/-/g, '_')];

  // Instantly halt execution if the slug is completely missing
  if (!record) {
    throw new Error(`Data record missing for slug: "${safeSlug}"`);
  }

  // Bind values dynamically directly from your data properties
  return {
    starterPrice: record.starter !== undefined ? record.starter : record.starterPrice,
    compliancePrice: record.compliance !== undefined ? record.compliance : record.compliancePrice,
    enterprisePrice: record.enterprise !== undefined ? record.enterprise : record.enterprisePrice,
    bullets: record.bullets
  };
}



function renderMasterPricingEngine(overrideTargetId, metaDataRecord) {
  try {
    const targetId = overrideTargetId || "filings4u-pricing-board-root";
    const zone = document.getElementById(targetId);
    if (!zone) return;

    let slug = "index";
    const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
    if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
      slug = rawPathname.replace(".html", "");
    }
    if (metaDataRecord && metaDataRecord.slug) {
      slug = metaDataRecord.slug;
    }

    if (slug === "index") {
      zone.innerHTML = '<!-- Pricing module skipped on index per configuration rule -->';
      return;
    }

    const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
    const meta = {
      slug: slug,
      title: contextSource.title || contextSource.hero_title || slug.replace(/-/g, ' ')
    };

    const dynamicPrices = resolveCentralPricingObject(meta.slug);
    executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices);
  } catch (err) {
    console.error("Pricing runtime failure:", err);
    const zone = document.getElementById(overrideTargetId || "filings4u-pricing-board-root");
    if (zone) {
      zone.innerHTML = `
        <div style="color:#ef4444;background:#fef2f2;border:1px solid #fee2e2;padding:24px;border-radius:8px;font-family:sans-serif;max-width:600px;margin:20px auto;">
          <h4 style="margin:0 0 8px 0;font-weight:700;">Pricing Integration Error</h4>
          <p style="margin:0;font-size:0.9rem;">${err.message}</p>
        </div>`;
    }
  }
}
window.renderMasterPricingEngine = renderMasterPricingEngine;

function executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices) {
  var cardsHtml = "";
  var plansConfig = [
    { key: "starter", name: "Starter", class: "pricing-premium-card standard-glow" },
    { key: "compliance", name: "Compliance", class: "pricing-premium-card popular-glow" },
    { key: "enterprise", name: "Enterprise", class: "pricing-premium-card standard-glow" }
  ];

  plansConfig.forEach(function(plan) {
    var basePrice = dynamicPrices[plan.key + "Price"];
    var isComp = plan.key === "compliance";
    var badgeHtml = isComp ? '<span style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#10b981;color:#fff;font-weight:800;font-size:0.72rem;padding:4px 12px;border-radius:20px;z-index:10;">MOST POPULAR</span>' : '';
    var btnBg = isComp ? '#10b981' : '#0a1f44';

    var activeBulletsList = dynamicPrices.bullets[plan.key];
    if (!activeBulletsList || activeBulletsList.length === 0) {
      throw new Error("The bullets array for " + plan.key + " is completely missing in data files.");
    }

    var bulletListHtml = "";
    activeBulletsList.forEach(function(bulletText) {
      bulletListHtml += '<li style="margin-bottom:12px;font-size:0.85rem;color:#0a1f44;display:flex;gap:8px;line-height:1.4;font-weight:500;"><span style="color:#10b981!important;font-weight:900;">✓</span><div>' + bulletText + '</div></li>';
    });

    cardsHtml += '<div class="' + plan.class + '" style="display:flex;flex-direction:column;justify-content:space-between;height:100%;position:relative;text-align:left;">' + badgeHtml + '<div style="display:flex;flex-direction:column;margin-bottom:25px;"><h3 style="color:#0a1f44;font-size:1.25rem;font-weight:800;margin:0 0 10px 0;text-align:center;">' + plan.name + '</h3><div style="color:#0a1f44;font-size:2.2rem;font-weight:900;margin:10px 0;display:flex;align-items:baseline;justify-content:center;gap:1px;line-height:1;"><span>$' + Math.floor(Number(basePrice)) + '</span><span style="font-size:0.9rem;font-weight:700;align-self:flex-start;margin-top:2px;">.00</span><span style="font-size:0.8rem;color:#94a3b8;margin-left:4px;">+ State Fee</span></div><ul style="list-style:none;padding:15px 0 0 0;margin:15px 0 0 0;border-top:1px solid #f1f5f9;">' + bulletListHtml + '</ul></div><a href="wizard.html?service=' + meta.slug + '&plan=' + plan.key + '" class="f4u-pricing-action-btn" style="width:100%;background:' + btnBg + ';color:#fff;border:none;padding:12px 20px;font-weight:700;font-size:0.9rem;border-radius:8px;cursor:pointer;text-decoration:none;text-align:center;display:block;box-sizing:border-box;margin-top:auto;">Select ' + plan.name + '</a></div>';
  });

  zone.innerHTML = '<section style="background:#f8fafc;padding:60px 0;font-family:sans-serif;width:100%;box-sizing:border-box;"><div style="width:100%;max-width:1450px;margin:0 auto;padding:0 40px;box-sizing:border-box;"><div style="text-align:center;margin-bottom:45px;"><h2 style="color:#0a1f44;font-size:2.1rem;font-weight:900;margin:0;text-transform:capitalize;">' + meta.title.replace(/-/g, ' ') + ' Options</h2></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:30px;align-items:stretch;box-sizing:border-box;">' + cardsHtml + '</div></div></section>';
}
