/* Fragment 1 of 2: Advanced Pricing Interactive Physics */
(function() {
  const targetId = "filings4u-pricing-board-root";
  const styleId = "f4u-pricing-premium-glow-animations";
  
  if (!document.getElementById(styleId)) {
    const s = document.createElement("style");
    s.id = styleId;
    s.textContent = `
      /* ADVANCED HOVER AND GLOW PHYSICS ENGINE */
      #${targetId} .pricing-premium-card {
        background: #ffffff !important;
        border: 1px solid #e2e8f0 !important;
        border-radius: 14px !important;
        padding: 35px 24px !important;
        box-shadow: 0 10px 25px -5px rgba(10, 31, 68, 0.02) !important;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease !important;
        transform: translateY(0);
        will-change: transform, box-shadow;
      }
      
      #${targetId} .pricing-premium-card:hover {
        transform: translateY(-6px) !important; /* Elegant subtle upward float */
      }
      
      #${targetId} .pricing-premium-card.standard-glow:hover {
        border-color: #10b981 !important;
        box-shadow: 0 20px 40px -12px rgba(10, 31, 68, 0.04), 0 0 25px 2px rgba(16, 185, 129, 0.15) !important;
      }
      
      /* MIDDLE COMPLIANCE CARD BREATHING GLOW SYSTEM */
      #${targetId} .pricing-premium-card.popular-glow {
        border: 2px solid #10b981 !important;
        animation: emeraldBreathingPulse 3.5s infinite ease-in-out !important;
      }
      
      #${targetId} .pricing-premium-card.popular-glow:hover {
        border-color: #0e9f6e !important;
        box-shadow: 0 25px 45px -15px rgba(10, 31, 68, 0.06), 0 0 30px 4px rgba(16, 185, 129, 0.25) !important;
        animation-play-state: paused !important; /* Freezes animation seamlessly on cursor hover */
      }
    `;
    document.head.appendChild(s);
  }
})();


/* Fragment 2 of 2: Breathing Keyframes & Mobile Layout Rules */
(function() {
  const targetId = "filings4u-pricing-board-root";
  const styleSheet = document.getElementById("f4u-pricing-premium-glow-animations");
  
  if (styleSheet) {
    styleSheet.textContent += `
      /* EMERALD PULSING KEYFRAMES MATRIX */
      @keyframes emeraldBreathingPulse {
        0% { box-shadow: 0 10px 25px -5px rgba(10,31,68,0.02), 0 0 15px 1px rgba(16, 185, 129, 0.1); }
        50% { box-shadow: 0 10px 25px -5px rgba(10,31,68,0.02), 0 0 25px 4px rgba(16, 185, 129, 0.18); border-color: #34d399 !important; }
        100% { box-shadow: 0 10px 25px -5px rgba(10,31,68,0.02), 0 0 15px 1px rgba(16, 185, 129, 0.1); }
      }

      /* RESPONSIVE MOBILE OVERRIDES BELOW 991PX WIDTHS */
      @media (max-width: 991px) {
        /* FREEZES INFINITE ANIMATIONS ON CELL PHONES TO RECLAIM RENDERING PERFORMANCE */
        #${targetId} .pricing-premium-card.popular-glow {
          animation: none !important;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.15) !important;
        }

        /* FORCES VERTICAL LAYOUT STRIP STACKING */
        #${targetId} .pricing-responsive-grid {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
        }

        /* REDUCES TEXT TITLES FOR THIN MOBILE PANELS */
        #${targetId} h2 { font-size: 1.6rem !important; }
        #${targetId} .pricing-premium-card h3 { font-size: 1.15rem !important; }

        /* SCALES COURIER PRICE TAG DIGITS ON PHONE SCREENS */
        #${targetId} .pricing-premium-card div[style*="font-size: 2.2rem"] {
          font-size: 1.8rem !important;
          margin: 6px 0 !important;
        }

        /* HARD-LOCKS THE +STATE FEE SIZE REDUCTIONS COMPACTLY */
        #${targetId} .pricing-premium-card span[style*="color: #94a3b8"],
        #${targetId} .pricing-premium-card div span:last-child {
          font-size: 0.98rem !important;
          margin-left: 2px !important;
        }

        /* SCALES DOWN INTERIOR LIST BULLETS AND TOUCH SUBMISSIONS ANCHORS */
        #${targetId} .pricing-premium-card li { font-size: 0.8rem !important; margin-bottom: 8px !important; }
        #${targetId} .f4u-pricing-action-btn { padding: 10px 16px !important; font-size: 0.85rem !important; }
      }

      /* === FORCE CARDS TO STACK ON MOBILE === */
@media (max-width: 991px) {
  #filings4u-pricing-board-root div[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
}

    `;
  }
})();




/* Part 2: Dynamic Data Matrix Router */
function resolveCentralPricingObject(slug) {
  const sourceMatrix = window.GLOBAL_COMPANY_PRICING || window.statePricingData || {};
  const packagesSource = sourceMatrix.packages || sourceMatrix || {};
  const record = packagesSource[slug] || packagesSource[slug.replace(/-/g, '_')];
  
  if (record) {
    return {
      starterPrice: record.starter || record.starterPrice || "199.00",
      compliancePrice: record.compliance || record.compliancePrice || "299.00",
      enterprisePrice: record.enterprise || record.enterprisePrice || "499.00",
      bullets: record.bullets || null
    };
  }
  return { starterPrice: "199.00", compliancePrice: "299.00", enterprisePrice: "499.00", bullets: null };
}

function renderMasterPricingEngine(overrideTargetId, metaDataRecord) {
  try {
    const targetId = overrideTargetId || window.FILINGS4U_PRICING_TARGET || "filings4u-pricing-board-root";
    const zone = document.getElementById(targetId);
    if (!zone) return;

    let slug = "index";
    const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
    if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
      slug = rawPathname.replace(".html", "");
    }
    if (metaDataRecord && metaDataRecord.slug) { slug = metaDataRecord.slug; }
    if (slug === "index") {
      zone.innerHTML = '<!-- Pricing module skipped on index per configuration rule -->';
      return;
    }

    const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
    const meta = { slug: slug, title: contextSource.title || contextSource.hero_title || "Filing" };
    const dynamicPrices = resolveCentralPricingObject(meta.slug);

    executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices);
  } catch (err) {
    console.error("Pricing engine initialization runtime failure:", err);
  }
}
window.renderMasterPricingEngine = renderMasterPricingEngine;

/* Part 3: Dynamic Data-Bound Cards Grid Builder (Compact Design Module) */
function executePremiumAnimatedPackagesGrid(zone, meta, dynamicPrices) {
  var cardsHtml = "";
  var plansConfig = [
    { key: "starter", name: "Starter", class: "pricing-premium-card standard-glow" },
    { key: "compliance", name: "Compliance", class: "pricing-premium-card popular-glow" },
    { key: "enterprise", name: "Enterprise", class: "pricing-premium-card standard-glow" }
  ];

  plansConfig.forEach(function(plan) {
    var basePrice = dynamicPrices[plan.key + "Price"] || "0.00";
    var badgeHtml = "";
    var containerStyles = "display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box; height: 100%; position: relative; text-align: left;";
    var actionBtnStyles = "width: 100%; background: #0a1f44; color: #ffffff; border: none; padding: 12px 20px; font-weight: 700; font-size: 0.9rem; border-radius: 8px; cursor: pointer; text-decoration: none; text-align: center; display: block; box-sizing: border-box; margin-top: auto; transition: background 0.2s ease, transform 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.12);";

    if (plan.key === "compliance") {
      badgeHtml = '<span style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #10b981; color: #ffffff; font-weight: 800; font-size: 0.72rem; letter-spacing: 0.06em; padding: 4px 12px; border-radius: 20px; display: block; line-height: 1.2; text-transform: uppercase; box-shadow: 0 4px 8px rgba(16, 185, 129, 0.25); z-index: 10;">MOST POPULAR</span>';
      actionBtnStyles = "width: 100%; background: #10b981; color: #ffffff; border: none; padding: 12px 20px; font-weight: 700; font-size: 0.9rem; border-radius: 8px; cursor: pointer; text-decoration: none; text-align: center; display: block; box-sizing: border-box; margin-top: auto; transition: background 0.2s ease, transform 0.2s ease; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);";
    }

    var defaultBullets = {
      starter: ["Basic application preparation"],
      compliance: ["Everything in Starter (Plus)", "Compliance support", "Mandatory 21-Day Public Protest Period Status Monitoring Management"],
      enterprise: ["Everything in Compliance (Plus)", "Full service with network connections", "Expedited Authority Certificate Delivery Dispatch Route"]
    };

    var activeBulletsList = (dynamicPrices.bullets && dynamicPrices.bullets[plan.key]) || defaultBullets[plan.key] || [];
    var bulletListHtml = "";

    activeBulletsList.forEach(function(bulletText) {
      bulletListHtml += '<li style="margin-bottom: 12px; font-size: 0.85rem; color: #0a1f44; display: flex; align-items: flex-start; gap: 8px; line-height: 1.4; font-weight: 500;">';
      bulletListHtml += ' <span style="color: #10b981 !important; font-weight: 900; display: inline-block; font-size: 0.95rem; line-height: 1; user-select: none;">✓</span>';
      bulletListHtml += ' <div>' + bulletText + '</div>';
      bulletListHtml += '</li>';
    });

    cardsHtml += '<div class="' + plan.class + '" style="' + containerStyles + '">' + badgeHtml + ' <div style="display: flex; flex-direction: column; width: 100%; box-sizing: border-box; margin-bottom: 25px;">' + ' <h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; margin: 0 0 10px 0; text-align: center; width: 100%; letter-spacing: -0.3px;">' + plan.name + '</h3>' + ' <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin: 10px 0; display: flex; align-items: baseline; justify-content: center; width: 100%; gap: 1px; line-height: 1; letter-spacing: -0.5px;">' + ' <span>$' + Math.floor(Number(basePrice)) + '</span>' + ' <span style="font-size: 0.9rem; font-weight: 700; color: #0a1f44; align-self: flex-start; margin-top: 2px;">.00</span>' + ' <span style="font-size: 0.8rem; font-weight: 600; color: #94a3b8; margin-left: 4px;">+ State Fee</span>' + ' </div>' + ' <ul style="list-style: none; padding: 0; margin: 15px 0 0 0; display: block; width: 100%; border-top: 1px solid #f1f5f9; padding-top: 15px;">' + bulletListHtml + '</ul>' + ' </div>' + ' <a href="wizard.html?service=' + meta.slug + '&plan=' + plan.key + '" class="f4u-pricing-action-btn" style="' + actionBtnStyles + '" onmouseover="this.style.opacity=\'0.9\'; this.style.transform=\'translateY(-1px)\';" onmouseout="this.style.opacity=\'1\'; this.style.transform=\'translateY(0)\';">Select ' + plan.name + '</a>' + '</div>';
  });

  var finalLayoutHtml = '';
  finalLayoutHtml += '<section style="background: #f8fafc; padding: 60px 0; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; display: block; margin: 0 !important;">';
  finalLayoutHtml += ' <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">';
  finalLayoutHtml += ' <div style="text-align: center; margin-bottom: 45px; width: 100%; display: block;">';
  finalLayoutHtml += ' <h2 style="color: #0a1f44; font-size: 2.1rem; font-weight: 900; margin: 0; line-height: 1.2; letter-spacing: -0.5px; text-transform: capitalize;">' + meta.title.replace(/-/g, ' ') + ' Options</h2>';
  finalLayoutHtml += ' </div>';
  finalLayoutHtml += ' <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; width: 100%; align-items: stretch; box-sizing: border-box; margin: 0; padding: 0;">' + cardsHtml + '</div>';
  finalLayoutHtml += ' </div>';
  finalLayoutHtml += '</section>';
  zone.innerHTML = finalLayoutHtml;
}

