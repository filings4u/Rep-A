


function renderMasterPricingEngine(targetId, metaDataRecord) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    var slug = targetId.replace("-package-pricing-cards-root", "").toLowerCase().trim();
    if (metaDataRecord && metaDataRecord.slug) {
      slug = metaDataRecord.slug;
    }

    const universalSourceMatrix = window.CENTRAL_SERVICE_PLAN_DB || {};
    
    /* 🌟 HARMONIZATION FIX: Checks both standard array definitions and handles key fallbacks for quote fields */
    var pricingDatasetNode = universalSourceMatrix[slug];
    if (!pricingDatasetNode && slug.endsWith("-quote")) {
      pricingDatasetNode = universalSourceMatrix[slug.replace("-quote", "")];
    }
    if (!pricingDatasetNode && !slug.endsWith("-quote")) {
      pricingDatasetNode = universalSourceMatrix[slug + "-quote"];
    }
    if (!pricingDatasetNode) {
      pricingDatasetNode = (metaDataRecord && metaDataRecord.pricing) ? metaDataRecord.pricing : metaDataRecord;
    }

    if (!pricingDatasetNode || Object.keys(pricingDatasetNode).length === 0 || (!pricingDatasetNode.starter && !pricingDatasetNode.compliance && !pricingDatasetNode.enterprise && !pricingDatasetNode.tiers)) {
      console.warn("[Pricing Error] Missing structured price dataset object configuration nodes for key: " + slug);
      return;
    }

    const compileBulletsSubLoopMarkup = function(bulletArrayData) {
      if (!Array.isArray(bulletArrayData)) return "";
      return bulletArrayData.map(function(singleBulletString) {
        const structuralEscapedString = typeof secureGridStringEscape === "function" ? secureGridStringEscape(singleBulletString) : singleBulletString;
        return '<li class="pricing-card-bullet-item"><span>✓</span>' + structuralEscapedString + '</li>';
      }).join("");
    };

    const coreTiersRegistryList = pricingDatasetNode.tiers || [
      { key: "starter", name: pricingDatasetNode.starter_label || "Starter Package", price: parseFloat(pricingDatasetNode.starter) || 0, highlighted: false },
      { key: "compliance", name: pricingDatasetNode.compliance_label || "Compliance Guard", price: parseFloat(pricingDatasetNode.compliance) || 0, highlighted: true },
      { key: "enterprise", name: pricingDatasetNode.enterprise_label || "Enterprise Asset Suite", price: parseFloat(pricingDatasetNode.enterprise) || 0, highlighted: false }
    ];

    const frameworkSectionTitleText = pricingDatasetNode.section_title || "Flexible Pricing Framework Options";
    const frameworkSectionSubtitleText = pricingDatasetNode.section_subtitle || "Select the optimal processing speed and protection depth your operation requires.";
    const dynamicCadenceDescriptorLabel = pricingDatasetNode.cadence_label || " / registration";
    const dynamicPopularBadgeTextString = pricingDatasetNode.popular_badge_text || "Most Popular Option";
    const dynamicButtonActionVerbText = pricingDatasetNode.button_text || "Select Plan Option";

    var pricingCardsGeneratedHtmlArrayString = "";

    coreTiersRegistryList.forEach(function(tierRecordObj) {
      const tierUniqueKeyId = tierRecordObj.key;
      const tierPresentationName = tierRecordObj.name;
      const numericPriceValueFloat = parseFloat(tierRecordObj.price) || 0;
      const isCardHighlightedActive = tierRecordObj.highlighted || false;
      
      const targetedBulletsSourceArray = pricingDatasetNode.bullets && pricingDatasetNode.bullets[tierUniqueKeyId] ? pricingDatasetNode.bullets[tierUniqueKeyId] : [];
      
      var conditionalBadgeMarkupCell = "";
      var structuralHighlightClassNameSelector = "pricing-card-node text-center-mobile";
      var integerColorHighlightClassNameSelector = "pricing-card-price-integer";

      if (isCardHighlightedActive) {
        conditionalBadgeMarkupCell = '<span class="pricing-card-popular-badge">' + dynamicPopularBadgeTextString + '</span>';
        structuralHighlightClassNameSelector = "pricing-card-node pricing-card-highlighted text-center-mobile";
        integerColorHighlightClassNameSelector = "pricing-card-price-integer color-primary";
      }

      pricingCardsGeneratedHtmlArrayString += '<div class="' + structuralHighlightClassNameSelector + '">' + conditionalBadgeMarkupCell + '<div class="pricing-card-upper-content"><h3 class="pricing-card-tier-title">' + tierPresentationName + '</h3><div class="pricing-card-rate-row"><span class="' + integerColorHighlightClassNameSelector + '">$' + numericPriceValueFloat.toFixed(2) + '</span><span class="pricing-card-cadence-label">' + dynamicCadenceDescriptorLabel + '</span></div><ul class="pricing-card-bullets-list">' + compileBulletsSubLoopMarkup(targetedBulletsSourceArray) + '</ul></div><a href="wizard.html?service=' + slug + '&plan=' + tierUniqueKeyId + '" class="pricing-card-action-btn ' + tierUniqueKeyId + '-btn-theme">' + dynamicButtonActionVerbText + '</a></div>';
    });

    zone.innerHTML = '<section id="pricing-framework-target" class="pricing-grid-master-section"><div class="site-width-alignment-guard prgrid-container"><div class="pricing-grid-header-block"><h2 class="pricing-grid-main-title">' + frameworkSectionTitleText + '</h2><p class="pricing-grid-subtitle">' + frameworkSectionSubtitleText + '</p></div><div class="pricing-cards-responsive-grid">' + pricingCardsGeneratedHtmlArrayString + '</div></div></section>';

    setTimeout(function() {
      const livePageAnchorNodesArray = document.querySelectorAll('a');
      livePageAnchorNodesArray.forEach(function(individualAnchorElement) {
        const internalAnchorTextContent = individualAnchorElement.textContent || "";
        if (internalAnchorTextContent.trim() !== "") {
          individualAnchorElement.addEventListener("click", function(clickInterceptEvent) {
            if (individualAnchorElement.getAttribute("href") === "#pricing-framework-target") {
              const viewScrollTargetElementNode = document.getElementById("pricing-framework-target");
              if (viewScrollTargetElementNode) {
                clickInterceptEvent.preventDefault();
                viewScrollTargetElementNode.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }
          });
        }
      });
    }, 60);

  } catch (runtimeExceptionError) {
    console.error(runtimeExceptionError);
  }
}

window.renderMasterPricingEngine = renderMasterPricingEngine;







// --- MODULE 1: DYNAMIC BRANDED HERO ENGINE (SECTION 1 - WHITE) ---
function renderMasterHeroEngine(targetId, meta) {
  const zone = document.getElementById(targetId);
  if (!zone) return;

  zone.innerHTML = `
    <main class="page-container" style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 60px; align-items: center; width: 100%;">
          
          <!-- 📝 TEXT COLUMN -->
          <article class="content-area" style="width: 100%; box-sizing: border-box;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">${meta.title} Framework</span>
            <h1 style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.1; letter-spacing: -1px;">
              The Engine for <br><span style="color: #10b981;">Total ${meta.title}.</span>
            </h1>
            <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 24px 0;">Launch, scale, and manage your asset protection profiles across all 50 State registries overnight. We automate your legal document filings, tax parameters, and organizational agreements securely for your ${meta.title} processing.</p>
            <div class="active-sync-badge-wrapper" style="display: flex; align-items: center; gap: 10px; margin-bottom: 32px;">
              <div class="badge-line" style="height: 2px; width: 24px; background: #10b981;"></div>
              <span class="badge-text" style="color: #0a1f44; font-weight: 700; font-size: 0.9rem;">${meta.title} Sync: 140,000+ Profiles Active</span>
            </div>
            <a href="get-started.html" class="btn-main" style="background: #10b981; color: #ffffff; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 6px; display: inline-block; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); transition: background 0.2s;">Get Started &rarr;</a>
          </article>
          
          <!-- 📸 IMAGE COLUMN -->
          <aside class="hero-image-container" style="display: flex; justify-content: center; width: 100%;">
            <img src="images/${meta.slug}-hero.jpg" alt="${meta.title} System Dashboard" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);" onerror="this.onerror=null; this.src='images/hero-image.jpg';">
          </aside>
          
        </div>
      </div>
    </main>
  `;
}

// --- MODULE 2: INDUSTRIAL METRICS SYSTEM (SECTION 2 - NAVY DARK) ---
function renderMasterMetricsEngine(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;

  el.innerHTML = `
    <section class="enterprise-metrics-section" style="padding: 60px 0 !important; background: #0a1f44; color: #f4f7fa; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important; font-family: system-ui, sans-serif;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10;">
        
        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid rgba(244,247,250,0.1); padding-bottom: 24px; margin-bottom: 40px; flex-wrap: wrap; gap: 24px; width: 100%; box-sizing: border-box;">
          <div style="text-align: left; max-width: 600px;">
            <h2 style="margin: 0; font-size: 2.2rem; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">Corporate Filing Infrastructure</h2>
          </div>
          <div style="text-align: right;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 700; color: #10b981; font-family: monospace; background: rgba(16,185,129,0.1); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(16,185,129,0.2);">
              <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span> ALL CLEAR: SECURE REST GATEWAYS ACTIVE 
            </div>
          </div>
        </div>

        <div class="metrics-dashboard-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; width: 100%; box-sizing: border-box; margin: 0;">
          <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🏢</span>
            <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">142K+</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Corporate Entities Formed</div>
            <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Authorized Articles of Organization across all 50 State Secretary registries.</p>
          </div>
          <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🚛</span>
            <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">38,410</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Active Transits Monitored</div>
            <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">USDOT & MC operating authorities actively synchronized with FMCSA core data links.</p>
          </div>
          <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">⚡</span>
            <div style="font-size: 2.4rem; font-weight: 900; color: #10b981; font-family: monospace; line-height: 1;">1.8s</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Average API Pipeline Turn</div>
            <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Secure, real-time rest requests to launch bank check intents and background pre-saves.</p>
          </div>
          <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🔒</span>
            <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">99.98%</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Filing Accuracy Quotient</div>
            <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Sophisticated layout rules eliminate common syntax rejection errors from state systems.</p>
          </div>
        </div>

      </div>
    </section>
  `;
}




function renderMasterMetricsEngine(targetId, dbRow) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    const slug = targetId.replace("-metrics-zone", "").toLowerCase().trim();
    const metricsData = window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug];
    
    if (!metricsData) return;

    const cleanTitle = metricsData.title;
    const statusBadge = metricsData.badge;
    const operationalCards = metricsData.items;

    let cardsHTML = "";
    operationalCards.forEach(card => {
      cardsHTML += `
        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box;">
          <span style="font-size: 1.8rem; display: block; margin-bottom: 12px;">${card.icon}</span>
          <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1.1;">${card.val}</div>
          <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.5px;">${card.lbl}</div>
          <p style="font-size: 0.85rem; color: #94a3b8; margin: 8px 0 0 0; line-height: 1.4; font-weight: 400;">${card.desc}</p>
        </div>
      `;
    });

    zone.innerHTML = `
      <section style="padding: 60px 0 !important; background: #0a1f44; color: #f4f7fa; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important; font-family: system-ui, sans-serif;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10;">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid rgba(244,247,250,0.1); padding-bottom: 24px; margin-bottom: 40px; flex-wrap: wrap; gap: 24px; width: 100%; box-sizing: border-box;">
            <div style="text-align: left; max-width: 600px;">
              <h2 style="margin: 0; font-size: 2.2rem; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">${cleanTitle}</h2>
            </div>
            <div style="text-align: right;">
              <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 700; color: #10b981; font-family: monospace; background: rgba(16,185,129,0.1); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(16,185,129,0.2);">
                <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span> ${statusBadge}
              </div>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; width: 100%; box-sizing: border-box;">
            ${cardsHTML}
          </div>
        </div>
      </section>
    `;
  } catch (err) {
    console.error("Metrics execution critical error:", err);
  }
}

// Global initialization entry loop tracking target nodes
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[id$="-hero-zone"]').forEach(zone => {
    renderMasterHeroEngine(zone.id);
  });
  document.querySelectorAll('[id$="-metrics-zone"]').forEach(zone => {
    renderMasterMetricsEngine(zone.id, null);
  });
});


function renderMasterHeroEngine(targetId, metaDataRecord) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    let slug = "index";
    if (targetId !== "index-hero-zone" && targetId !== "dynamic-hero-zone") {
      slug = targetId.replace("-hero-zone", "").toLowerCase().trim();
    } else {
      const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
      if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
        slug = rawPathname.replace(".html", "");
      }
    }

    const liveRecordSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
    
    const displayPillText = liveRecordSource.pill || "Statutory Data Security Covenant";
    const displayHeroTitle = liveRecordSource.hero_title || liveRecordSource.service_title || liveRecordSource.title || "Compliance Portal";
    const displayHeroLead = liveRecordSource.hero_lead || liveRecordSource.description || "Automated Inter-Jurisdictional Regulatory Licensing, Onboarding Compliance Systems, and Provisioning Pipelines.";
    const dynamicHeroImgSrc = "images/" + slug + "-hero.jpg";

    var computedActionLinkDestination = "#pricing-framework-target";
    if (slug === "index") {
      computedActionLinkDestination = "get-started.html";
    }

zone.innerHTML = '<style>' +
  '@media (max-width: 768px) {' +
    '#' + targetId + ' section { margin-bottom: 20px !important; }' +
    '#' + targetId + ' .responsive-hero-grid { margin-top: 20px !important; }' +
    '#' + targetId + ' .hero-image-container { padding-bottom: 10px !important; }' +
    '#' + targetId + ' .responsive-hero-grid > div:first-child { padding-bottom: 10px !important; }' +
  '}' +
'</style>' +
'<section style="padding: 0 !important; background: #ffffff; color: #0a1f44; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; overflow: hidden; margin-top: 30px !important; margin-bottom: 50px !important;"><div class="responsive-hero-grid" style="max-width: 1450px; margin: 40px auto 0 auto; padding: 0 40px; display: flex; flex-wrap: wrap; gap: 40px; align-items: stretch; box-sizing: border-box;"><div style="flex: 1; min-width: 320px; box-sizing: border-box; padding: 40px 0; display: flex; flex-direction: column; justify-content: center;"><span style="background: rgba(16,185,129,0.1); color: #10b981; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; display: inline-block; align-self: flex-start;">' + displayPillText + '</span><h1 class="hero-headline" style="font-size: 3rem; font-weight: 800; margin: 16px 0; line-height: 1.15; color: #0a1f44;">' + displayHeroTitle + '</h1><p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">' + displayHeroLead + '</p><a href="' + computedActionLinkDestination + '" style="background: #10b981; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block; align-self: flex-start;">Initialize Application &rarr;</a></div><div class="hero-image-container" style="flex: 1; min-width: 320px; box-sizing: border-box; padding: 40px 0; display: flex; align-items: center; justify-content: center;"><img src="' + dynamicHeroImgSrc + '" class="hero-display-img" alt="Framework Layout Preview" style="width: 100%; height: 100%; max-height: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15); display: block;" onerror="this.onerror=null; this.src=\'images/default-hero.jpg\';"></div></div></section>';

    if (slug !== "index") {
      setTimeout(function() {
        const heroActionAnchor = zone.querySelector('a[href="#pricing-framework-target"]');
        if (heroActionAnchor) {
          heroActionAnchor.addEventListener("click", function(clickEvent) {
            const scrollDestinationNode = document.getElementById("pricing-framework-target");
            if (scrollDestinationNode) {
              clickEvent.preventDefault();
              scrollDestinationNode.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          });
        }
      }, 40);
    }

  } catch (err) {
    console.error("Hero rendering critical engine error:", err);
  }
}

window.renderMasterHeroEngine = renderMasterHeroEngine;





// Global initialization router execution loop
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[id$="-metrics-zone"]').forEach(zone => {
    renderMasterMetricsEngine(zone.id, null);
  });
  document.querySelectorAll('[id$="-hero-zone"]').forEach(zone => {
    renderMasterHeroEngine(zone.id);
  });
});





// ============================================================================
// --- MODULE 4: DYNAMIC PACKAGE PRICING GRID INJECTION LAYER ---
// ============================================================================

/**
 * Universal text escaping utility.
 * Stops script-tag execution loops and layout tampering vulnerabilities.
 */
function secureGridStringEscape(primitiveValue) {
    if (primitiveValue === null || primitiveValue === undefined) return "";
    return String(primitiveValue)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderMasterPricingEngine(targetId, metaDataRecord) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    var currentActiveSlug = targetId.replace("-package-pricing-cards-root", "").toLowerCase().trim();
    if (metaDataRecord && metaDataRecord.slug) {
      currentActiveSlug = metaDataRecord.slug;
    }

    const universalSourceMatrix = window.CENTRAL_SERVICE_PLAN_DB || {};
    const pricingDatasetNode = universalSourceMatrix[currentActiveSlug] || (metaDataRecord && metaDataRecord.pricing) || {};

    if (!pricingDatasetNode || Object.keys(pricingDatasetNode).length === 0) {
      console.warn(currentActiveSlug);
      return;
    }

    const compileBulletsSubLoopMarkup = function(bulletArrayData) {
      if (!Array.isArray(bulletArrayData)) return "";
      return bulletArrayData.map(function(singleBulletString) {
        const structuralEscapedString = typeof secureGridStringEscape === "function" ? secureGridStringEscape(singleBulletString) : singleBulletString;
        return '<li class="pricing-card-bullet-item"><span>✓</span>' + structuralEscapedString + '</li>';
      }).join("");
    };

    const coreTiersRegistryList = pricingDatasetNode.tiers || [
      { key: "starter", name: pricingDatasetNode.starter_label || "Starter Package", price: parseFloat(pricingDatasetNode.starter) || 0, highlighted: false },
      { key: "compliance", name: pricingDatasetNode.compliance_label || "Compliance Guard", price: parseFloat(pricingDatasetNode.compliance) || 0, highlighted: true },
      { key: "enterprise", name: pricingDatasetNode.enterprise_label || "Enterprise Asset Suite", price: parseFloat(pricingDatasetNode.enterprise) || 0, highlighted: false }
    ];

    const frameworkSectionTitleText = pricingDatasetNode.section_title || "Flexible Pricing Framework Options";
    const frameworkSectionSubtitleText = pricingDatasetNode.section_subtitle || "Select the optimal processing speed and protection depth your operation requires.";
    const dynamicCadenceDescriptorLabel = pricingDatasetNode.cadence_label || " / registration";
    const dynamicPopularBadgeTextString = pricingDatasetNode.popular_badge_text || "Most Popular Option";
    const dynamicButtonActionVerbText = pricingDatasetNode.button_text || "Select Plan Option";

    var pricingCardsGeneratedHtmlArrayString = "";

    coreTiersRegistryList.forEach(function(tierRecordObj) {
      const tierUniqueKeyId = tierRecordObj.key;
      const tierPresentationName = tierRecordObj.name;
      const numericPriceValueFloat = parseFloat(tierRecordObj.price) || 0;
      const isCardHighlightedActive = tierRecordObj.highlighted || false;
      
      const targetedBulletsSourceArray = pricingDatasetNode.bullets && pricingDatasetNode.bullets[tierUniqueKeyId] ? pricingDatasetNode.bullets[tierUniqueKeyId] : [];
      
      var conditionalBadgeMarkupCell = "";
      var structuralHighlightClassNameSelector = "pricing-card-node text-center-mobile";
      var integerColorHighlightClassNameSelector = "pricing-card-price-integer";

      if (isCardHighlightedActive) {
        conditionalBadgeMarkupCell = '<span class="pricing-card-popular-badge">' + dynamicPopularBadgeTextString + '</span>';
        structuralHighlightClassNameSelector = "pricing-card-node pricing-card-highlighted text-center-mobile";
        integerColorHighlightClassNameSelector = "pricing-card-price-integer color-primary";
      }

      pricingCardsGeneratedHtmlArrayString += '<div class="' + structuralHighlightClassNameSelector + '">' + conditionalBadgeMarkupCell + '<div class="pricing-card-upper-content"><h3 class="pricing-card-tier-title">' + tierPresentationName + '</h3><div class="pricing-card-rate-row"><span class="' + integerColorHighlightClassNameSelector + '">$' + numericPriceValueFloat.toFixed(2) + '</span><span class="pricing-card-cadence-label">' + dynamicCadenceDescriptorLabel + '</span></div><ul class="pricing-card-bullets-list">' + compileBulletsSubLoopMarkup(targetedBulletsSourceArray) + '</ul></div><a href="wizard.html?service=' + currentActiveSlug + '&plan=' + tierUniqueKeyId + '" class="pricing-card-action-btn ' + tierUniqueKeyId + '-btn-theme">' + dynamicButtonActionVerbText + '</a></div>';
    });

    zone.innerHTML = '<section id="pricing-framework-target" class="pricing-grid-master-section"><div class="site-width-alignment-guard prgrid-container"><div class="pricing-grid-header-block"><h2 class="pricing-grid-main-title">' + frameworkSectionTitleText + '</h2><p class="pricing-grid-subtitle">' + frameworkSectionSubtitleText + '</p></div><div class="pricing-cards-responsive-grid">' + pricingCardsGeneratedHtmlArrayString + '</div></div></section>';

    setTimeout(function() {
      const livePageAnchorNodesArray = document.querySelectorAll('a');
      livePageAnchorNodesArray.forEach(function(individualAnchorElement) {
        const internalAnchorTextContent = individualAnchorElement.textContent || "";
        if (internalAnchorTextContent.trim() !== "") {
          individualAnchorElement.addEventListener("click", function(clickInterceptEvent) {
            if (individualAnchorElement.getAttribute("href") === "#pricing-framework-target") {
              const viewScrollTargetElementNode = document.getElementById("pricing-framework-target");
              if (viewScrollTargetElementNode) {
                clickInterceptEvent.preventDefault();
                viewScrollTargetElementNode.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }
          });
        }
      });
    }, 60);

  } catch (runtimeExceptionError) {
    console.error(runtimeExceptionError);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('[id$="-package-pricing-cards-root"]').forEach(function(dynamicTargetZoneCell) {
    if (typeof window.renderMasterSystem !== "function") {
      renderMasterPricingEngine(dynamicTargetZoneCell.id);
    }
  });
});

window.renderMasterPricingEngine = renderMasterPricingEngine;




// ============================================================================
// --- CRITICAL FRAMEWORK PATCH: BYPASS & SUPPRESS CONTENT-ENGINE AUTOMATION ---
// ============================================================================
(function() {
    // 1. Create a safe fallback global object structure
    window.PRICE_OBJECT_CONFIGS = window.PRICE_OBJECT_CONFIGS || {};
    
    // 2. Lock down an empty 'index' layout profile so internal engines don't crash
    if (!window.PRICE_OBJECT_CONFIGS["index"]) {
        window.PRICE_OBJECT_CONFIGS["index"] = {
            name: "Homepage Engine Fallback",
            llc: 0,
            c_corp: 0,
            series_llc: 0,
            packages: {},
            features: [],
            addons: {}
        };
    }

    // 3. Intercept and isolate the automated layout compiler method itself
    const originalPricingEngine = window.renderMasterPricingEngine;
    window.renderMasterPricingEngine = function(id, ...args) {
        // Drop execution silently if the engine targets the 'index' profile string
        if (id === "index" || (typeof id === "string" && id.startsWith("index-"))) {
            return null; 
        }
        if (typeof originalPricingEngine === "function") {
            return originalPricingEngine.apply(this, [id, ...args]);
        }
    };
})();

// ============================================================================
// --- CRITICAL FRAMEWORK PATCH: BYPASS & SUPPRESS CONTENT-ENGINE AUTOMATION ---
// ============================================================================
(function() {
    window.PRICE_OBJECT_CONFIGS = window.PRICE_OBJECT_CONFIGS || {};
    if (!window.PRICE_OBJECT_CONFIGS["index"]) {
        window.PRICE_OBJECT_CONFIGS["index"] = {
            name: "Homepage Engine Fallback",
            llc: 0, c_corp: 0, series_llc: 0,
            packages: {}, features: [], addons: {}
        };
    }
    const originalPricingEngine = window.renderMasterPricingEngine;
    window.renderMasterPricingEngine = function(id, ...args) {
        if (id === "index" || (typeof id === "string" && id.startsWith("index-"))) {
            return null; 
        }
        if (typeof originalPricingEngine === "function") {
            return originalPricingEngine.apply(this, [id, ...args]);
        }
    };
})();

// ============================================================================
// --- CRITICAL FRAMEWORK PATCH: BYPASS & SUPPRESS CONTENT-ENGINE AUTOMATION ---
// ============================================================================
(function() {
    window.PRICE_OBJECT_CONFIGS = window.PRICE_OBJECT_CONFIGS || {};
    if (!window.PRICE_OBJECT_CONFIGS["index"]) {
        window.PRICE_OBJECT_CONFIGS["index"] = {
            name: "Homepage Engine Fallback",
            llc: 0, c_corp: 0, series_llc: 0,
            packages: {}, features: [], addons: {}
        };
    }
    const originalPricingEngine = window.renderMasterPricingEngine;
    window.renderMasterPricingEngine = function(id, ...args) {
        if (id === "index" || (typeof id === "string" && id.startsWith("index-"))) {
            return null; 
        }
        if (typeof originalPricingEngine === "function") {
            return originalPricingEngine.apply(this, [id, ...args]);
        }
    };
})();


// --- MODULE 6: STARTUP EXPLORATION DEPLOYMENT HUB (SECTION 6) ---
function renderMasterStartupLaunchpadEngine(targetId, meta) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    zone.innerHTML = `
      <section style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%;">
            <div style="width: 100%; box-sizing: border-box;">
              <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">Launch Infrastructure</span>
              <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">Startup Launchpad. <br><span style="color: #10b981;">Built For Scale.</span></h2>
              <p style="color: #0a1f44; font-weight: 700; font-size: 1.05rem; margin: 0 0 12px 0;">Turn your business idea into an officially recognized state legal entity overnight.</p>
              <p style="color: #475569; font-size: 1rem; line-height: 1.6; margin: 0 0 28px 0;">Accelerate your early-stage venture with robust entity setup frameworks built for founders. We automate formations, corporate bylaw preparation, tax ID filings (EIN), and state registry submissions for your active ${meta.title} pipeline.</p>
              <a href="formations.html" style="color:#10b981; font-weight:700; text-decoration:none;">Launch Your Startup &rarr;</a>
            </div>
            <div style="display: flex; justify-content: center; width: 100%;">
              <img src="${meta.seceImage}" alt="Startup Launch" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25);" onerror="this.onerror=null; this.src='images/startup-launch.jpg';">
            </div>
          </div>
        </div>
      </section>
    `;
  } catch (err) { console.error("Launchpad hub error:", err); }
}


// --- MODULE 7: AUDIT TRUST PROTECT MATRIX ENGINE (SECTION 7) ---
function renderMasterTrustShieldMatrix(targetId, meta) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    zone.innerHTML = `
      <section class="enterprise-metrics-section" style="padding: 80px 0 !important; background: #0a1f44; color: #f4f7fa; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important; font-family: system-ui, sans-serif;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10; display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 60px;">
          
          <!-- 📸 IMAGE COLUMN -->
          <div style="flex: 1; min-width: 320px; max-width: 550px; display: flex; justify-content: center; box-sizing: border-box;">
            <img src="` + meta.secfImage + `" alt="` + meta.title + ` Protection Asset" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px rgba(0, 0, 0, 0.65), 0 10px 20px rgba(0, 0, 0, 0.3);" onerror="this.onerror=null; this.src='images/regulatory-compliance.jpg';">
          </div>
          
          <!-- 📝 TEXT COLUMN -->
          <div style="flex: 1; min-width: 320px; box-sizing: border-box;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.12); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.25);">Guaranteed Audit Protection</span>
            <h2 style="color: #ffffff; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">Institutional Shield. <br><span style="color: #10b981;">Never Miss A Filing.</span></h2>
            <p style="color: #cbd5e1; font-weight: 700; font-size: 1.05rem; margin: 0 0 12px 0; line-height: 1.4;">Active database synchronization safeguards your status across state lines.</p>
            <p style="color: #94a3b8; font-size: 1rem; line-height: 1.6; margin: 0 0 28px 0;">Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your ` + meta.title + ` operational status is permanently shielded.</p>
            <a href="compliance.html" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 0.95rem;">Explore Security Infrastructure &rarr;</a>
          </div>
          
        </div>
      </section>
    `;
  } catch (err) {
    console.error("Trust matrix engine error:", err);
  }
}


// --- MODULE 8: DYNAMIC SUBSCRIPTION CAPTURE MATRIX ENGINE (SECTION 8) ---
function renderMasterSubscribeEngine(targetId, meta) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;
    zone.innerHTML = `
      <section style="background: #ffffff; padding: 80px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 60px; align-items: center; width: 100%;">
            <!-- LEFT TEXT BOX MODULE -->
            <div style="width: 100%; box-sizing: border-box;">
              <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; background: rgba(16, 185, 129, 0.08); padding: 4px 12px; border-radius: 6px; margin-bottom: 12px;">Compliance Bulletins</span>
              <h2 style="color: #0a1f44; font-size: 2.6rem; font-weight: 900; margin: 0 0 16px 0; line-height: 1.15; letter-spacing: -0.5px;">Stay Informed. <br><span style="color: #10b981;">Secure Growth.</span></h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin: 0; max-width: 580px;">Get actionable regulatory deadline text flashes, corporate filing advice, and federal state policy change updates sent straight to your box. Zero clutter. Direct compliance updates for your ${meta.title} files.</p>
            </div>
            <!-- RIGHT INPUT FORM BOX INTERFACE -->
            <div style="width: 100%; box-sizing: border-box;" id="f4u-subscribe-interface-wrapper">
              <!-- 🎯 ADDED ID: Hooks cleanly into your existing global CSS rules -->
              <form id="compliance-subscribe-form" style="display: flex; gap: 14px; width: 100%; background: #ffffff; border: 1px solid #f1f5f9; padding: 20px; border-radius: 16px; box-shadow: 0 20px 40px rgba(10,31,68,0.06), 0 1px 3px rgba(10,31,68,0.02); box-sizing: border-box; margin: 0;">
                <input type="email" id="subscribe-email-field" placeholder="Enter your business email..." required aria-label="Business Email" style="flex: 1; padding: 16px 22px; font-size: 0.95rem; font-weight: 500; border-radius: 8px; border: none; background: #ffffff; color: #0a1f44; outline: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08); transition: box-shadow 0.25s ease;" onfocus="this.style.boxShadow='inset 0 2px 4px rgba(0,0,0,0.02), 0 0 0 3px rgba(16, 185, 129, 0.15), 0 0 0 1px #10b981'" onblur="this.style.boxShadow='inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08)'">
                <!-- 🎯 ADDED ID: Hooks cleanly into your global CSS button padding/width definitions -->
                <button type="submit" id="subscribe-button" style="background: #10b981; color: #ffffff; border: none; font-weight: 700; font-size: 0.95rem; padding: 0 32px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); transition: all 0.2s;" onmouseover="this.style.backgroundColor='#0e9f6e'; this.style.transform='translateY(-1px)';" onmouseout="this.style.backgroundColor='#10b981'; this.style.transform='translateY(0)';">Subscribe</button>
              </form>
              <!-- Inline Status Response Output Message Container Tag -->
              <div id="form-status-message" style="display: none; transition: opacity 0.2s ease;"></div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 14px; font-size: 0.75rem; color: #64748b; padding-left: 4px;">
                <span style="color: #10b981; font-weight: 800; letter-spacing: 0.05em;">🔐 ENCRYPTED GATEWAY</span> Your data is fully shielded under 256-bit protocol architectures.
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    // TIMING RESYNC FIX: Introduce a small 50ms buffer to ensure elements are parsed before querying
    setTimeout(() => {
      const subscribeForm = document.getElementById("compliance-subscribe-form");
      const statusMessage = document.getElementById("form-status-message");
      const submitButton = document.getElementById("subscribe-button");
      const emailInput = document.getElementById("subscribe-email-field");

      if (!subscribeForm || !statusMessage || !submitButton || !emailInput) return;

      subscribeForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Stop webpage reload
        const targetCleanEmail = emailInput.value.trim().toLowerCase();
        if (!targetCleanEmail) return;

        // Enter loading processing states
        submitButton.disabled = true;
        submitButton.innerText = "Processing...";
        statusMessage.style.display = "none";

        try {
          const backupUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
          const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';

          // Direct network payload dispatch to the Supabase endpoint
          const response = await fetch(`${backupUrl}/rest/v1/subscribers`, {
            method: "POST",
            headers: {
              "apikey": backupKey,
              "Authorization": `Bearer ${backupKey}`,
              "Content-Type": "application/json",
              "Prefer": "return=minimal"
            },
            body: JSON.stringify({
              email: targetCleanEmail,
              created_at: new Date().toISOString()
            })
          });

          // Evaluate response and catch row uniqueness constraint conflicts
          if (response.status === 409 || !response.ok) {
            if (response.status === 409) {
              statusMessage.innerText = "ℹ️ This business email is already signed up for real-time compliance updates!";
              statusMessage.style.cssText = "display: block; background: rgba(59,130,246,0.1); color: #3b82f6; border: 1px solid rgba(59,130,246,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; text-align: left; font-size: 0.9rem;";
              emailInput.value = "";
              return;
            }
            throw new Error(`Server returned error code profile: ${response.status}`);
          }

          // Output Subscription Success Message
          statusMessage.innerText = "🎉 Subscription successful! Welcome to your real-time compliance feed.";
          statusMessage.style.cssText = "display: block; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; text-align: left; font-size: 0.9rem;";
          emailInput.value = ""; // Reset field input
        } catch (err) {
          console.error("[Supabase Pipeline Error]:", err);
          statusMessage.innerText = "⚠️ Connection timeout. Unable to dispatch registration data. Please try again.";
          statusMessage.style.cssText = "display: block; background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; text-align: left; font-size: 0.9rem;";
        } finally {
          submitButton.disabled = false;
          submitButton.innerText = "Subscribe";
        }
      });
    }, 50);
  } catch (err) {
    console.error("Subscribe engine error:", err);
  }
}








// --- MODULE 8: GLOBAL SITE-WIDE RE-ALIGNED CORPORATE FOOTER SYSTEM ---
function renderDynamicGlobalCorporateFooter(targetId) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    zone.innerHTML = `
    <!-- 🧱 GLOBAL CORPORATE SITE FOOTER MATRIX --> 
<footer class="site-footer" style="position: relative; overflow: hidden;"> 
  <!-- Tech Vector Network Grid Background Layer --> 
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>

  <div class="footer-container"> 
    <div class="footer-brand"> 
      <!-- 🔄 FIXED: Wrapped the brand logo in a link pointing to the homepage and increased height to 48px --> 
      <a href="index.html" style="display: inline-block; text-decoration: none; transition: opacity 0.2s ease;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'"> 
        <img src="images/logo-white.png" alt="filings4u" style="height: 48px !important; width: auto !important; object-fit: contain;"> 
      </a> 
      <p>Providing enterprise-grade filing and compliance solutions for local and corporate entities.</p> 
      <div style="margin-top: 25px; display: flex; gap: 15px;"> 
        <!-- LinkedIn --> 
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;"> 
          <svg width="14" height="14" fill="white" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg> 
        </a> 
        <!-- YouTube --> 
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;"> 
          <svg width="16" height="16" fill="white" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.301 1.103.33 3.483.33 4.246 0 .763-.029 3.143-.33 4.246a2.01 2.01 0 0 1-1.415 1.419c-1.123.302-5.288.332-6.11.335h-.09c-.822-.003-4.987-.033-6.11-.335a2.01 2.01 0 0 1-1.415-1.419C.03 11.143 0 8.763 0 8c0-.763.029-3.143.33-4.246a2.01 2.01 0 0 1 1.415-1.42c1.123-.302 5.288-.332 6.11-.335h.089zM6.374 11.155l4.356-2.651a.26.26 0 0 0 0-.442L6.374 5.412a.26.26 0 0 0-.398.221v5.301a.26.26 0 0 0 .398.22z"/></svg> 
        </a> 
        <!-- X --> 
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;"> 
          <svg width="12" height="12" fill="white" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg> 
        </a> 
      </div> 
    </div> 
    <div class="footer-col"> 
      <h4>Formations</h4> 
      <ul> 
        <li><a href="llc-formation.html">LLC Formation</a></li> 
        <li><a href="corporations.html">Corporations</a></li> 
        <li><a href="nonprofits.html">Non-Profits</a></li> 
        <li><a href="registered-agent.html">Registered Agent</a></li> 
        <li><a href="employer-id-ein.html">Tax ID (EIN)</a></li> 
      </ul> 
    </div> 
    <div class="footer-col"> 
      <h4>Fleet & DOT</h4> 
      <ul> 
        <li><a href="ucr-registration.html">UCR Registration</a></li> 
        <li><a href="ifta-registration.html">IFTA Filings</a></li> 
        <li><a href="trucker-authority.html">DOT Authority</a></li> 
        <li><a href="process-agents-boc-3.html">BOC-3 Filing</a></li> 
        <li><a href="heavy-use-tax-2290.html">Form 2290</a></li> 
      </ul> 
    </div> 
    <!-- 🔄 NEW SECTION: Tax & Filings --> 
    <div class="footer-col"> 
      <h4>Tax & Filings</h4> 
      <ul> 
        <li><a href="federal-tax.html">Federal Income Tax</a></li> 
        <li><a href="state-tax.html">State Income Tax</a></li> 
        <li><a href="sales-tax-registration.html">Sales Tax Registration</a></li> 
        <li><a href="payroll-tax-940-941.html">Payroll Tax (940/941)</a></li> 
        <li><a href="franchise-tax.html">Franchise Tax Filing</a></li> 
      </ul> 
    </div> 
    <div class="footer-col"> 
      <h4>Support</h4> 
      <ul> 
        <li><a href="https://portal.filings4u.com/client-dashboard.html">Client Portal</a></li> 
        <li><a href="compliance.html">Compliance Hub</a></li> 
        <li><a href="contact.html">Contact Experts</a></li> 
        <li><a href="annual-reports.html">Annual Reports</a></li> 
        <li><a href="blog.html">Resource Library</a></li> 
      </ul> 
    </div> 
  </div> 
  <div class="footer-bottom"> 
    <div> 
      <p style="margin: 0; font-size: 0.85rem; max-width: 300px; line-height: 1.4; overflow-wrap: break-word;"> &copy; 2026 filings4u, LLC. All rights reserved. A Subsidiary of <a href="https://roselandcompanies.com" target="_blank" rel="noopener noreferrer" style="color: #c15254; text-decoration: none; font-weight: bold;">Roseland Companies, LLC</a> </p> 
    </div> 
    <!-- 🔄 FIXED SECURE BADGE CONTAINER: Injected absolute block inline resets to override conflict issues --> 
    <div class="trust-badge" style="display: block !important; visibility: visible !important; opacity: 1 !important; pointer-events: auto !important; position: relative !important; background: rgba(255, 255, 255, 0.05) !important; padding: 10px 20px !important; border-radius: 8px !important; font-size: 0.75rem !important; color: #ffffff !important;"> 
      <span style="color: #10b981 !important; font-weight: 800 !important; margin-right: 8px !important; display: inline !important;">SECURE</span> 256-bit SSL Encrypted Connection </div> 
    <div class="legal-links"> 
      <a href="privacy-policy.html">Privacy Policy</a> 
      <a href="terms-of-service.html">Terms of Service</a> 
      <a href="refund-policy.html">Refund Policy</a> 
    </div> 
  </div> 
</footer>

<!-- 🔼 SCROLL TO TOP FLOATING INTERFACE -->
<button id="scrollToTopBtn" aria-label="Scroll to top" class="scroll-to-top-btn">
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>
</button>
    `;
  } catch (err) {
    console.error("Footer matrix rendering error:", err);
  }
}


// --- MASTER LAYOUT MATRIX RUNNER ENGINE ---
function executeGlobalLayoutSequencer() {
  try {
    // Read specific elements directly out of the active file DOM layout tree
    const heroTarget = document.querySelector('[id$="-hero-zone"]');
    const metricsTarget = document.querySelector('[id$="-metrics-zone"]');
    const pricingTarget = document.querySelector('[id$="-package-pricing-cards-root"]');
    const launchpadTarget = document.querySelector('[id$="-launchpad-zone"]');
    const trustTarget = document.querySelector('[id$="-trust-zone"]');

    // Safe individual conditional route triggers
    if (heroTarget) renderMasterHeroEngine(heroTarget.id, meta);
    if (metricsTarget) renderMasterMetricsEngine(metricsTarget.id, dbRow);
    if (pricingTarget) renderMasterPricingEngine(pricingTarget.id, dbRow);
    if (launchpadTarget) renderMasterLaunchpadEngine(launchpadTarget.id, meta);
    if (trustTarget) renderMasterTrustEngine(trustTarget.id, meta);
    if (subscribeTarget) renderMasterSubscribeEngine(subscribeTarget.id);

    console.log(`🏁 Complete 8-section layout system initialized for: ${cleanPageKey}`);
  } catch (err) {
    console.error("❌ Critical Controller System Failure:", err);
  }
}

// Global Document Hook to execute script safely on page bootstrap
document.addEventListener("DOMContentLoaded", renderMasterSystem);




// --- DYNAMIC SOCIAL PROOF CAROUSEL ROTATION CONTROLLER ---
document.addEventListener("DOMContentLoaded", function() {
    const proofWidget = document.getElementById("f4u-dynamic-proof-widget");
    const textTarget = document.getElementById("f4u-proof-text-node");
    const closeBtn = document.getElementById("f4u-close-proof-node");
    
    if (!proofWidget || !textTarget || !closeBtn) return;

    // 20-Row Data Matrix with Timestamps and Dynamic Product Targets
    const proofTemplates = [
        { text: "<strong>140,000+ Active Profiles</strong> currently protected across our automated state filing grid.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Filing Confirmed:</strong> New LLC profile registered and locked inside Delaware registry {MINUTES}.", dynamicTime: true, baseMinutes: 4, url: "llc-formation.html" },
        { text: "<strong>Audit Protection Matrix Active:</strong> 0.00% entity penalty exposure rate maintained this month.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Filing Confirmed:</strong> Corporate compliance synchronization completed in California {MINUTES}.", dynamicTime: true, baseMinutes: 12, url: "compliance.html" },
        { text: "<strong>Asset Shield Multilocked:</strong> Anonymity proxy layers fully deployed on 4 new Nevada corporations.", dynamicTime: false, url: "llc-formation.html" },
        { text: "<strong>State Dept Update:</strong> Automated background check matched against latest Q2 entity law changes.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Filing Confirmed:</strong> Bi-annual reporting compliance documents validated and filed in Texas {MINUTES}.", dynamicTime: true, baseMinutes: 8, url: "compliance.html" },
        { text: "<strong>Instant Gateway Sync:</strong> Structural franchise tax check cleared across 12 tracking accounts.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Dissolution Shield Active:</strong> Accidental corporate forfeiture blocked for Wyoming entity layout.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Filing Confirmed:</strong> Registered Agent appointment update completely processed in Florida {MINUTES}.", dynamicTime: true, baseMinutes: 18, url: "llc-formation.html" },
        { text: "<strong>Network Integration Secure:</strong> Real-time zero-gap database lock established for 14 enterprise records.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Filing Confirmed:</strong> New operating agreement parameter profile successfully compiled in New York.", dynamicTime: false, url: "llc-formation.html" },
        { text: "<strong>State Registry Update:</strong> Automated verification scanned 50 state department portals in 0.4 seconds.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Penalty Exposure Defeated:</strong> Automatic deadline checker saved $1,250 in late processing fees.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Filing Confirmed:</strong> Foreign qualification cross-state certificate locked inside Illinois {MINUTES}.", dynamicTime: true, baseMinutes: 15, url: "llc-formation.html" },
        { text: "<strong>Corporate Shield Sealed:</strong> Asset protection protocols confirmed for 8 newly formed entity layers.", dynamicTime: false, url: "llc-formation.html" },
        { text: "<strong>Filing Confirmed:</strong> Annual list of managers successfully structured and submitted in Utah {MINUTES}.", dynamicTime: true, baseMinutes: 6, url: "compliance.html" },
        { text: "<strong>Active Tracking Online:</strong> Continuous background checker monitoring shifts across all active profiles.", dynamicTime: false, url: "compliance.html" },
        { text: "<strong>Filing Confirmed:</strong> Articles of organization verified and approved in Georgia {MINUTES}.", dynamicTime: true, baseMinutes: 22, url: "llc-formation.html" },
        { text: "<strong>Guaranteed Status Verified:</strong> Good Standing certificates auto-renewed for 19 corporate entities.", dynamicTime: false, url: "compliance.html" }
    ];

    const pageLoadTime = Date.now();
    let currentIndex = 0;
    let rotationTimeout;

    function getFormattedMessage(item) {
        if (!item.dynamicTime) return item.text;
        const currentMsElapsed = Date.now() - pageLoadTime;
        const extraMinutes = Math.floor(currentMsElapsed / 60000);
        const liveMinutes = item.baseMinutes + extraMinutes;
        const timeString = liveMinutes === 1 ? "1 min ago" : `${liveMinutes} mins ago`;
        return item.text.replace("{MINUTES}", timeString);
    }

    function rotateProofMessage() {
        // Step 1: Smooth exit slide
        proofWidget.style.opacity = "0";
        proofWidget.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            const activeItem = proofTemplates[currentIndex];
            
            // Step 2: Inject values and route configuration attributes
            textTarget.innerHTML = getFormattedMessage(activeItem);
            proofWidget.setAttribute("data-url", activeItem.url);
            
            // Step 3: Smooth entry slide
            proofWidget.style.opacity = "1";
            proofWidget.style.transform = "translateY(0)";
            
            currentIndex = (currentIndex + 1) % proofTemplates.length;
            
            // 🌟 FIXED 5-SECOND TIMER
            rotationTimeout = setTimeout(rotateProofMessage, 5000);
        }, 400);
    }

    // Handle full-box link routing click safely
    proofWidget.addEventListener("click", function(e) {
        if (e.target === closeBtn) return;
        const targetUrl = proofWidget.getAttribute("data-url");
        if (targetUrl) { window.location.href = targetUrl; }
    });

    // Close button dismiss behavior
    closeBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        clearTimeout(rotationTimeout);
        proofWidget.style.opacity = "0";
        proofWidget.style.transform = "translateY(20px)";
        setTimeout(() => { proofWidget.style.display = "none"; }, 400);
    });

    // Initialize the starting rotation sequence
    rotateProofMessage();
});