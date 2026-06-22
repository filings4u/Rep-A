
/**
 * PART 1: PRICING MATRIX EMERALD ANIMATION
 * Styles moved to master-mobile.css
 */
(function injectPricingGlowAnimations() {
  if (document.getElementById("pricing-glow-animation-styles")) return;
  const styleElement = document.createElement("style");
  styleElement.id = "pricing-glow-animation-styles";
  document.head.appendChild(styleElement);
})();


/**
 * ASYNCHRONOUS DATA LOOKUP TUNNELER
 * Connects directly into whatever global variable names are used inside assets/js/state-pricing.js
 */
function resolvePricingObjectWithRetry(slug) {
    const source = window.statePricingData || window.servicesPricing || window.pricingData || {};
    
    // Normalize slug dynamically to cover hyphenated, underscored, and uppercase configurations without hardcoding
    const record = source[slug] || source[slug.replace(/-/g, '_')] || source[slug.toUpperCase()];

    if (record) {
        return {
            starterPrice: record.starter || record.starterPrice || "0",
            compliancePrice: record.compliance || record.compliancePrice || "0",
            enterprisePrice: record.enterprise || record.enterprisePrice || "0",
            starterFeatures: record.bullets?.starter || record.starterFeatures || [],
            complianceFeatures: record.bullets?.compliance || record.complianceFeatures || [],
            enterpriseFeatures: record.bullets?.enterprise || record.enterpriseFeatures || []
        };
    }

    // Zero-fallback empty object if lookup has slight latency or fails
    return {
        starterPrice: "0",
        compliancePrice: "0",
        enterprisePrice: "0",
        starterFeatures: [],
        complianceFeatures: [],
        enterpriseFeatures: []
    };
}


/**
 * PART 1: COMPLIANCE PRICING DATA COMPILER MAPPER (CORRECTED)
 * Resolves local data payloads inside state-pricing.js straight into layout loops
 */
function resolveLocalServicePricingData(slug) {
    const globalPricingSource = window.statePricingData || window.servicesPricing || window.pricingData || {};
    
    // Completely dynamic resolution strategy: Checks raw string, underscored string, or stripped string variants
    let localData = globalPricingSource[slug] || globalPricingSource[slug.replace(/-/g, '_')];
    
    if (!localData && slug) {
        const cleanedSlug = slug.toLowerCase().trim()
            .replace(/-formation$/, '')
            .replace(/-processing$/, '')
            .replace(/s$/, '')
            .replace(/-organization$/, '');
            
        // Look up using generic token patterns to capture any of the 44+ services dynamically
        localData = globalPricingSource[cleanedSlug] || 
                    globalPricingSource[Object.keys(globalPricingSource).find(key => key.includes(cleanedSlug))];
    }

    return {
        hasCustomData: localData !== null && localData !== undefined,
        
        // Dynamic fee mapping straight from your official database keys
        starterPrice: localData?.starter || localData?.starterPrice || "0",
        compliancePrice: localData?.compliance || localData?.compliancePrice || "0",
        enterprisePrice: localData?.enterprise || localData?.enterprisePrice || "0",
        
        // Dynamic array feature list extraction tracking your nested bullets schema flawlessly
        starterFeatures: localData?.bullets?.starter || localData?.starterFeatures || [],
        complianceFeatures: localData?.bullets?.compliance || localData?.complianceFeatures || [],
        enterpriseFeatures: localData?.bullets?.enterprise || localData?.enterpriseFeatures || []
    };
}



/**
 * ==========================================================================
 * 🚀 UNIFIED PRODUCTION CONTENT MATRIX ENGINE & CHESSBOARD CONTROLLER
 * Part 3: Branded Layout Component Modules (Hero & Metrics)
 * Styles relocated to structural stylesheet files.
 * ==========================================================================
 */

// --- MODULE 1: DYNAMIC BRANDED HERO ENGINE (SECTION 1 - WHITE) ---
function renderMasterHeroEngine(targetId, meta) {
  const zone = document.getElementById(targetId);
  if (!zone) return;
  
  zone.innerHTML = `
    <main class="page-container">
      <div class="site-width-alignment-guard">
        <div class="responsive-hero-grid">
          
          <!-- TEXT COLUMN -->
          <article class="content-area">
            <span class="hero-framework-badge">
              ${meta.title} Framework
            </span>
            <h1 class="hero-headline">
              The Engine for <br><span style="color: #10b981;">Total ${meta.title}.</span>
            </h1>
            <p class="hero-description">
              Launch, scale, and manage your asset protection profiles across all 
              50 State registries overnight. We automate your legal document filings, 
              tax parameters, and organizational agreements securely for your 
              ${meta.title} processing.
            </p>
            <div class="active-sync-badge-wrapper">
              <div class="badge-line"></div>
              <span class="badge-text">
                ${meta.title} Sync: 140,000+ Profiles Active
              </span>
            </div>
            <a href="llc-formation.html" class="btn-main">
              Get Started &rarr;
            </a>
          </article>

          <!-- IMAGE COLUMN -->
          <aside class="hero-image-container">
            <img src="images/${meta.slug}-hero.jpg" 
                 class="hero-display-img" 
                 alt="${meta.title} System Dashboard" 
                 onerror="this.onerror=null; this.src='images/hero-image.jpg';">
          </aside>

        </div>
      </div>
    </main>
  `;
}

// --- MODULE 2: METRICS BOARD ENGINE ---
function renderMasterMetricsEngine(targetId, meta) {
  const zone = document.getElementById(targetId);
  if (!zone) return;
  
  zone.innerHTML = `
    <section class="enterprise-metrics-section">
      <div class="metrics-bg-overlay"></div>
      <div class="site-width-alignment-guard">
        
        <div class="metrics-header-row">
          <div class="metrics-title-block">
            <h2>${meta.title} Filing Infrastructure</h2>
          </div>
          <div class="metrics-status-wrapper">
            <div class="metrics-status-badge">
              <span class="metrics-status-dot"></span>
              ALL CLEAR: SECURE REST GATEWAYS ACTIVE
            </div>
          </div>
        </div>

        <div class="metrics-dashboard-grid">
          
          <div class="metric-card-block">
            <span class="metric-icon-span">🏢</span>
            <div class="metric-value-div">142K+</div>
            <div class="metric-label-div">Corporate Entities Formed</div>
            <p>Authorized Articles of Organization across all 50 State Secretary registries.</p>
          </div>

          <div class="metric-card-block">
            <span class="metric-icon-span">🚛</span>
            <div class="metric-value-div">38,410</div>
            <div class="metric-label-div">Active Transits Monitored</div>
            <p>USDOT & MC operating authorities actively synchronized across databases.</p>
          </div>

          <div class="metric-card-block">
            <span class="metric-icon-span">⚡</span>
            <div class="metric-value-div highlighted">1.8s</div>
            <div class="metric-label-div">Average API Pipeline Turn</div>
            <p>Secure, real-time rest requests to launch bank check intents and pre-saves.</p>
          </div>

          <div class="metric-card-block">
            <span class="metric-icon-span">🔒</span>
            <div class="metric-value-div">99.98%</div>
            <div class="metric-label-div">Filing Accuracy Quotient</div>
            <p>Sophisticated layout routing eliminates syntax rejection errors from state systems.</p>
          </div>

        </div>
      </div>
    </section>
  `;
}


/**
 * PART 1: PRICING LIFECYCLE PRELOAD TUNNELER
 * Snaps directly into data objects using zero-fallback parameters.
 */
function resolvePricingObjectWithRetry(slug, delay = 50, retries = 50) {
  const source = window.statePricingData || 
                 window.servicesPricing || 
                 window.pricingData || {};
  
  const normSlug = slug.replace(/-/g, '_');
  const record = source[slug] || 
                 source[normSlug] || 
                 source[slug.toUpperCase()];

  if (record) {
    return {
      starterPrice: record.starter || 
                    record.starterPrice || "0",
      compliancePrice: record.compliance || 
                       record.compliancePrice || "0",
      enterprisePrice: record.enterprise || 
                       record.enterprisePrice || "0",
      starterFeatures: record.bullets?.starter || 
                       record.starterFeatures || [],
      complianceFeatures: record.bullets?.compliance || 
                          record.complianceFeatures || [],
      enterpriseFeatures: record.bullets?.enterprise || 
                          record.enterpriseFeatures || []
    };
  }

  if (retries > 0) {
    setTimeout(() => {
      const recheck = source[slug] || 
                      source[normSlug] || 
                      source[slug.toUpperCase()];
      if (recheck && typeof recalculateSummaryStepFields === "function") {
        recalculateSummaryStepFields();
      }
    }, delay);
  }

  return {
    starterPrice: "0",
    compliancePrice: "0",
    enterprisePrice: "0",
    starterFeatures: [],
    complianceFeatures: [],
    enterpriseFeatures: []
  };
}

/**
 * ==========================================================================
 * 🚀 UNIFIED PRODUCTION CONTENT MATRIX ENGINE & CHESSBOARD CONTROLLER
 * Part 4: High-Utility 3-Card Package Infrastructure Module
 * Styles relocated to structural stylesheet files.
 * ==========================================================================
 */
function renderMasterPricingEngine(targetId, meta) {
  const zone = document.getElementById(targetId);
  if (!zone) return;
  
  zone.innerHTML = `
    <section class="pricing-section-container">
      <div class="site-width-alignment-guard">
        
        <div class="pricing-header-block">
          <span class="pricing-section-badge">Infrastructure Selection</span>
          <h2 class="pricing-main-title">Standard ${meta.title} Processing Options</h2>
          <p class="pricing-subtitle-desc">Select the management structure engineered for your profile setup needs.</p>
        </div>

        <div class="pricing-cards-board-grid">
          
          <!-- PLAN CARD 1: BASIC -->
          <div class="pricing-matrix-base-card">
            <div>
              <div class="card-image-wrap-frame">
                <img src="images/${meta.slug}-secc.jpg" 
                     onerror="this.onerror=null; this.src='images/local-business.jpg';">
              </div>
              <h3 class="card-plan-header-title">Basic Setup Plan</h3>
              <div class="card-price-display-row">$99 <span>+ state fees</span></div>
              <p class="card-body-text-p">Standard registry declaration files processed securely with immediate dispatch validation arrays.</p>
            </div>
            <button class="btn-plan-selection-action starter-btn" 
                    onclick="sessionStorage.setItem('wiz_cached_desc', 'Standard registry declaration files processed securely with immediate dispatch validation arrays.'); window.location.href='wizard.html?service=${meta.slug}&plan=starter'">
              Select Starter Plan
            </button>
          </div>

          <!-- PLAN CARD 2: SHIELD -->
          <div class="pricing-matrix-base-card popular-shield-card">
            <span class="popular-ribbon-tag">POPULAR</span>
            <div>
              <div class="card-image-wrap-frame">
                <img src="images/${meta.slug}-secd.jpg" 
                     onerror="this.onerror=null; this.src='images/local-business.jpg';">
              </div>
              <h3 class="card-plan-header-title">Complete Shield Matrix</h3>
              <div class="card-price-display-row">$199 <span>+ state fees</span></div>
              <p class="card-body-text-p">Includes proactive automated calendar sweeps, compliance risk metrics alerts, and asset guard protection sheets.</p>
            </div>
            <button class="btn-plan-selection-action compliance-btn" 
                    onclick="sessionStorage.setItem('wiz_cached_desc', 'Includes proactive automated calendar sweeps, compliance risk metrics alerts, and asset guard protection sheets.'); window.location.href='wizard.html?service=${meta.slug}&plan=compliance'">
              Select Compliance Plan
            </button>
          </div>

          <!-- PLAN CARD 3: ENTERPRISE -->
          <div class="pricing-matrix-base-card">
            <div>
              <div class="card-image-wrap-frame">
                <img src="images/${meta.slug}-pricing-premium.jpg" 
                     onerror="this.onerror=null; this.src='images/local-business.jpg';">
              </div>
              <h3 class="card-plan-header-title">Enterprise Growth Suite</h3>
              <div class="card-price-display-row">$349 <span>+ state fees</span></div>
              <p class="card-body-text-p">Custom structural multi-member provisions, real-time banking gateway data mapping integration, and lifetime revision sheets storage.</p>
            </div>
            <button class="btn-plan-selection-action enterprise-btn" 
                    onclick="sessionStorage.setItem('wiz_cached_desc', 'Custom structural multi-member provisions, real-time banking gateway data mapping integration, and lifetime revision sheets storage.'); window.location.href='wizard.html?service=${meta.slug}&plan=enterprise'">
              Select Enterprise Plan
            </button>
          </div>

        </div>
      </div>
    </section>
  `;
}



/**
 * ==========================================================================
 * 🚀 UNIFIED PRODUCTION CONTENT MATRIX ENGINE & CHESSBOARD CONTROLLER
 * Part 5: Alternating Service Features (Launchpad & Trust Matrix)
 * Styles relocated to structural stylesheet files.
 * ==========================================================================
 */

// --- MODULE 4: DYNAMIC LAUNCHPAD ENGINE ---
function renderMasterLaunchpadEngine(targetId, meta) {
  const zone = document.getElementById(targetId);
  if (!zone) return;
  
  zone.innerHTML = `
    <section class="launchpad-section-wrap">
      <div class="site-width-alignment-guard">
        <div class="launchpad-split-grid">
          
          <div class="launchpad-content-col">
            <span class="launchpad-meta-badge">Launch Infrastructure</span>
            <h2 class="launchpad-main-title">
              ${meta.title} Launchpad. <br><span style="color: #10b981;">Built For Scale.</span>
            </h2>
            <p class="launchpad-bold-intro">
              Turn your business goals into an officially recognized legal framework entity overnight.
            </p>
            <p class="launchpad-body-p">
              Accelerate your development pipeline with robust entity structural setups. 
              We automate regulatory registry connections, compliance tracking alerts, and 
              validation rules engines under an integrated layout architecture so you can open 
              accounts and protect infrastructure assets cleanly.
            </p>
            <a href="get-started.html" class="launchpad-action-link">
              Launch Your Ecosystem &rarr;
            </a>
          </div>

          <div class="launchpad-img-col">
            <img src="images/${meta.slug}-sece.jpg" 
                 alt="${meta.title} Launch Infrastructure" 
                 onerror="this.onerror=null; this.src='images/startup-launch.jpg';">
          </div>

        </div>
      </div>
    </section>
  `;
}

// --- MODULE 6: SECURITY INFRASTRUCTURE PAGE ENGINE ---
function renderSecurityInfrastructurePage(targetId) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;
    
    zone.innerHTML = `
      <div class="sec-infrastructure-page-root">
        <main class="sec-hero-main-container">
          <div class="sec-vector-dots-overlay"></div>
          <div class="sec-max-width-alignment-guard">
            <div class="sec-hero-grid">
              
              <!-- Left Side: Real-time Infrastructure Telemetry Visual -->
              <div class="sec-hero-col">
                <div class="sec-telemetry-panel">
                  
                  <div class="sec-telemetry-header">
                    <div class="sec-telemetry-header-tag">Infrastructure Layer</div>
                    <div class="sec-telemetry-header-title">Zero-Gap Automation</div>
                  </div>

                  <div class="sec-telemetry-inner-grid">
                    <div class="sec-telemetry-stat-box">
                      <div class="sec-stat-lbl">SYNC FREQUENCY</div>
                      <div class="sec-stat-val green-glow">Continuous</div>
                    </div>
                    <div class="sec-telemetry-stat-box">
                      <div class="sec-stat-lbl">PENALTY EXPOSURE</div>
                      <div class="sec-stat-val red-alert">0.00%</div>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Right Side: Content Base -->
              <div class="sec-hero-col">
                <span class="sec-badge-shield">Guaranteed Audit Protection</span>
                <h1 class="sec-headline-title">Institutional Shield.<br><span style="color: #10b981 !important;">Never Miss A Filing.</span></h1>
                <p class="sec-subheading-bold">Active database synchronization safeguards your status across state lines.</p>
                <p class="sec-long-desc-p">Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your operational status is permanently shielded.</p>
              </div>

            </div>
          </div>
        </main>
      </div>
    `;
  } catch (err) {
    console.error("Filing engine execution error:", err);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  renderSecurityInfrastructurePage("security-infrastructure-target");
});



// --- MODULE 6: DYNAMIC SUBSCRIPTION ENGINE ---
function renderMasterSubscribeEngine(targetId) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;
    
    zone.innerHTML = `
      <section class="sub-section-wrap">
        <div class="site-width-alignment-guard">
          <div class="sub-split-grid">
            
            <div class="sub-text-col">
              <span class="sub-badge-tag">Compliance Bulletins</span>
              <h2 class="sub-main-headline">Stay Informed. <br><span style="color: #10b981;">Secure Growth.</span></h2>
              <p class="sub-body-desc">Get actionable regulatory deadline text flashes, corporate filing advice, and federal state policy change updates sent straight to your box. Zero clutter. Direct compliance updates.</p>
            </div>

            <div class="sub-form-col">
              <form action="#" method="POST" class="sub-inline-form">
                <input type="email" placeholder="Enter your business email..." required aria-label="Business Email" class="sub-input-field">
                <button type="submit" class="sub-submit-btn">Subscribe</button>
              </form>
              <div class="sub-encryption-tag">
                <span>🔒 ENCRYPTED GATEWAY</span> Your data is fully shielded under 256-bit protocol architectures.
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  } catch (err) {
    console.error("Subscription engine render error:", err);
  }
}

/**
 * PART 1: PAGE ENVIRONMENT INTERFACE PROPERTY COMPILER
 * Maps out asset schemas using dynamic slug tracking values.
 */
function compileDynamicLayoutProperties(targetElementId, suffixPatternString) {
  var calculatedSlugValue = targetElementId.replace(suffixPatternString, "").trim().toLowerCase();
  return {
    slug: calculatedSlugValue,
    title: calculatedSlugValue.split("-").map(function(wordItem) {
      return wordItem.charAt(0).toUpperCase() + wordItem.slice(1);
    }).join(" ")
  };
}

async function renderMasterSystem() {
  try {
    const pName = window.location.pathname.split("/").pop();
    const activeSlug = pName.replace(".html", "").trim().toLowerCase();
    const isHome = (!activeSlug || activeSlug === "home" || activeSlug === "index");
    const cleanPageKey = isHome ? "index" : activeSlug;
    let dbRow = null;

    try {
      const backupUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
      const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
      const endpoint = backupUrl + '/rest/v1/services?select=*&slug=eq.' + cleanPageKey;
      
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "apikey": backupKey,
          "Authorization": "Bearer " + backupKey,
          "Accept": "application/json"
        }
      });
      if (response.ok) {
        const rawJsonPayloadArray = await response.json();
        if (rawJsonPayloadArray && rawJsonPayloadArray.length > 0) {
          dbRow = rawJsonPayloadArray;
        }
      }
    } catch (netErr) {
      console.warn(netErr);
    }

    const heroTarget = document.querySelector('[id$="-hero-zone"]');
    if (!heroTarget) return;

    const meta = compileDynamicLayoutProperties(heroTarget.id, "-hero-zone");
    meta.slug = cleanPageKey;

    if (dbRow && dbRow.service_title) {
      meta.title = dbRow.service_title;
    } else {
      meta.title = meta.title.replace("-registration", "")
                             .replace("registration", "")
                             .replace("-quote", "").trim();
    }

    document.title = meta.title + " Registration & Filing Services | filings4u";

    if (typeof renderDynamicGlobalCorporateNavigation === "function") {
      renderDynamicGlobalCorporateNavigation("global-platform-navigation-zone");
    }
    if (typeof renderMasterHeroEngine === "function") {
      renderMasterHeroEngine(heroTarget.id, dbRow || meta);
    }
    if (typeof renderMasterMetricsEngine === "function") {
      renderMasterMetricsEngine(cleanPageKey + "-metrics-zone", dbRow);
    }
    if (typeof renderMasterPricingEngine === "function") {
      const pricingId = heroTarget.id.replace("-hero-zone", "-package-pricing-cards-root");
      renderMasterPricingEngine(pricingId, dbRow || meta);
    }
    if (typeof renderMasterConciergeFeedEngine === "function") {
      renderMasterConciergeFeedEngine(cleanPageKey + "-launchpad-zone", dbRow || meta);
    }
    if (typeof renderMasterTrustShieldMatrix === "function") {
      renderMasterTrustShieldMatrix(cleanPageKey + "-trust-zone", dbRow || meta);
    }
    if (typeof renderMasterSubscribeEngine === "function") {
      renderMasterSubscribeEngine("dynamic-subscribe-placement-zone", dbRow || meta);
    }
    if (typeof renderDynamicGlobalCorporateFooter === "function") {
      renderDynamicGlobalCorporateFooter("global-platform-footer-zone");
    }
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", renderMasterSystem);
window.compileDynamicLayoutProperties = compileDynamicLayoutProperties;
window.renderMasterSystem = renderMasterSystem;



function renderMasterPricingEngine(targetId, metaDataRecord) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    var slug = targetId.replace("-package-pricing-cards-root", "")
                       .toLowerCase().trim();
    if (metaDataRecord && metaDataRecord.slug) {
      slug = metaDataRecord.slug;
    }

    const universalSourceMatrix = window.CENTRAL_SERVICE_PLAN_DB || {};
    var pricingDatasetNode = universalSourceMatrix[slug];

    if (!pricingDatasetNode && slug.endsWith("-quote")) {
      pricingDatasetNode = universalSourceMatrix[slug.replace("-quote", "")];
    }
    if (!pricingDatasetNode && !slug.endsWith("-quote")) {
      pricingDatasetNode = universalSourceMatrix[slug + "-quote"];
    }
    if (!pricingDatasetNode) {
      pricingDatasetNode = (metaDataRecord && metaDataRecord.pricing) ? 
                           metaDataRecord.pricing : metaDataRecord;
    }

    if (!pricingDatasetNode || Object.keys(pricingDatasetNode).length === 0 || 
        (!pricingDatasetNode.starter && !pricingDatasetNode.compliance && 
         !pricingDatasetNode.enterprise && !pricingDatasetNode.tiers)) {
      console.warn(slug);
      return;
    }

    const compileBulletsSubLoopMarkup = function(bulletArrayData) {
      if (!Array.isArray(bulletArrayData)) return "";
      return bulletArrayData.map(function(singleBulletString) {
        const structuralEscapedString = typeof secureGridStringEscape === "function" ? 
                                        secureGridStringEscape(singleBulletString) : 
                                        singleBulletString;
        return '<li class="pricing-card-bullet-item"><span>✓</span>' + 
               structuralEscapedString + '</li>';
      }).join("");
    };

    const coreTiersRegistryList = pricingDatasetNode.tiers || [
      { 
        key: "starter", 
        name: pricingDatasetNode.starter_label || "Starter Package", 
        price: parseFloat(pricingDatasetNode.starter) || 0, 
        highlighted: false 
      },
      { 
        key: "compliance", 
        name: pricingDatasetNode.compliance_label || "Compliance Guard", 
        price: parseFloat(pricingDatasetNode.compliance) || 0, 
        highlighted: true 
      },
      { 
        key: "enterprise", 
        name: pricingDatasetNode.enterprise_label || "Enterprise Asset Suite", 
        price: parseFloat(pricingDatasetNode.enterprise) || 0, 
        highlighted: false 
      }
    ];

    const frameworkSectionTitleText = pricingDatasetNode.section_title || 
                                     "Flexible Pricing Framework Options";
    const frameworkSectionSubtitleText = pricingDatasetNode.section_subtitle || 
                                        "Select the optimal processing speed and protection depth your operation requires.";
    const dynamicCadenceDescriptorLabel = pricingDatasetNode.cadence_label || " / registration";
    const dynamicPopularBadgeTextString = pricingDatasetNode.popular_badge_text || "Most Popular Option";
    const dynamicButtonActionVerbText = pricingDatasetNode.button_text || "Select Plan Option";

    var pricingCardsGeneratedHtmlArrayString = "";

    coreTiersRegistryList.forEach(function(tierRecordObj) {
      const tierUniqueKeyId = tierRecordObj.key;
      const tierPresentationName = tierRecordObj.name;
      const numericPriceValueFloat = parseFloat(tierRecordObj.price) || 0;
      const isCardHighlightedActive = tierRecordObj.highlighted || false;
      const targetedBulletsSourceArray = pricingDatasetNode.bullets && 
                                         pricingDatasetNode.bullets[tierUniqueKeyId] ? 
                                         pricingDatasetNode.bullets[tierUniqueKeyId] : [];
      
      var conditionalBadgeMarkupCell = "";
      var structuralHighlightClassNameSelector = "pricing-card-node text-center-mobile";
      var integerColorHighlightClassNameSelector = "pricing-card-price-integer";

      if (isCardHighlightedActive) {
        conditionalBadgeMarkupCell = '<span class="pricing-card-popular-badge">' + 
                                     dynamicPopularBadgeTextString + '</span>';
        structuralHighlightClassNameSelector = "pricing-card-node pricing-card-highlighted text-center-mobile";
        integerColorHighlightClassNameSelector = "pricing-card-price-integer color-primary";
      }

      pricingCardsGeneratedHtmlArrayString += '<div class="' + structuralHighlightClassNameSelector + '">' + 
        conditionalBadgeMarkupCell + 
        '<div class="pricing-card-upper-content">' +
          '<h3 class="pricing-card-tier-title">' + tierPresentationName + '</h3>' +
          '<div class="pricing-card-rate-row">' +
            '<span class="' + integerColorHighlightClassNameSelector + '">$' + numericPriceValueFloat.toFixed(2) + '</span>' +
            '<span class="pricing-card-cadence-label">' + dynamicCadenceDescriptorLabel + '</span>' +
          '</div>' +
          '<ul class="pricing-card-bullets-list">' + compileBulletsSubLoopMarkup(targetedBulletsSourceArray) + '</ul>' +
        '</div>' +
        '<a href="wizard.html?service=' + slug + '&plan=' + tierUniqueKeyId + '" class="pricing-card-action-btn ' + tierUniqueKeyId + '-btn-theme">' + 
          dynamicButtonActionVerbText + 
        '</a>' +
      '</div>';
    });

    zone.innerHTML = '<section id="pricing-framework-target" class="pricing-grid-master-section">' +
      '<div class="site-width-alignment-guard prgrid-container">' +
        '<div class="pricing-grid-header-block">' +
          '<h2 class="pricing-grid-main-title">' + frameworkSectionTitleText + '</h2>' +
          '<p class="pricing-grid-subtitle">' + frameworkSectionSubtitleText + '</p>' +
        '</div>' +
        '<div class="pricing-cards-responsive-grid">' + pricingCardsGeneratedHtmlArrayString + '</div>' +
      '</div>' +
    '</section>';

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
    <main class="hero-page-container">
      <div class="site-width-alignment-guard">
        <div class="hero-display-grid">
          
          <!-- TEXT COLUMN -->
          <article class="hero-text-area">
            <span class="hero-framework-tag">${meta.title} Framework</span>
            <h1 class="hero-main-title">
              The Engine for <br><span style="color: #10b981;">Total ${meta.title}.</span>
            </h1>
            <p class="hero-desc-p">
              Launch, scale, and manage your asset protection profiles across all 50 State registries overnight. 
              We automate your legal document filings, tax parameters, and organizational agreements securely for your 
              ${meta.title} processing.
            </p>
            <div class="active-sync-badge-wrapper">
              <div class="badge-line"></div>
              <span class="badge-text">${meta.title} Sync: 140,000+ Profiles Active</span>
            </div>
            <a href="get-started.html" class="btn-main">Get Started &rarr;</a>
          </article>

          <!-- IMAGE COLUMN -->
          <aside class="hero-image-container">
            <img src="images/${meta.slug}-hero.jpg" 
                 alt="${meta.title} System Dashboard" 
                 onerror="this.onerror=null; this.src='images/hero-image.jpg';">
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
    <section class="enterprise-metrics-section">
      <div class="metrics-bg-overlay"></div>
      <div class="site-width-alignment-guard">
        
        <div class="metrics-header-row">
          <div class="metrics-title-block">
            <h2>Corporate Filing Infrastructure</h2>
          </div>
          <div class="metrics-status-wrapper">
            <div class="metrics-status-badge">
              <span class="metrics-status-dot"></span>
              ALL CLEAR: SECURE REST GATEWAYS ACTIVE
            </div>
          </div>
        </div>

        <div class="metrics-dashboard-grid">
          
          <div class="metric-card-block">
            <span class="metric-icon-span">🏢</span>
            <div class="metric-value-div">142K+</div>
            <div class="metric-label-div">Corporate Entities Formed</div>
            <p>Authorized Articles of Organization across all 50 State Secretary registries.</p>
          </div>

          <div class="metric-card-block">
            <span class="metric-icon-span">🚛</span>
            <div class="metric-value-div">38,410</div>
            <div class="metric-label-div">Active Transits Monitored</div>
            <p>USDOT & MC operating authorities actively synchronized with FMCSA core data links.</p>
          </div>

          <div class="metric-card-block">
            <span class="metric-icon-span">⚡</span>
            <div class="metric-value-div highlighted">1.8s</div>
            <div class="metric-label-div">Average API Pipeline Turn</div>
            <p>Secure, real-time rest requests to launch bank check intents and background pre-saves.</p>
          </div>

          <div class="metric-card-block">
            <span class="metric-icon-span">🔒</span>
            <div class="metric-value-div">99.98%</div>
            <div class="metric-label-div">Filing Accuracy Quotient</div>
            <p>Sophisticated layout rules eliminate common syntax rejection errors from state systems.</p>
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
    const metricsData = window.PLATFORM_METRICS_CATALOG && 
                        window.PLATFORM_METRICS_CATALOG[slug];
    if (!metricsData) return;

    const cleanTitle = metricsData.title;
    const statusBadge = metricsData.badge;
    const operationalCards = metricsData.items;
    let cardsHTML = "";

    operationalCards.forEach(card => {
      cardsHTML += '<div class="metrics-panel-loop-card">' +
        '<span>' + card.icon + '</span>' +
        '<div class="card-value-display">' + card.val + '</div>' +
        '<div class="card-label-display">' + card.lbl + '</div>' +
        '<p>' + card.desc + '</p>' +
      '</div>';
    });

    zone.innerHTML = '<section class="metrics-panel-wrap-section">' +
      '<div class="metrics-panel-dot-bg"></div>' +
      '<div class="site-width-alignment-guard prgrid-container">' +
        '<div class="metrics-panel-header-row">' +
          '<div class="metrics-panel-left-block"><h2>' + cleanTitle + '</h2></div>' +
          '<div class="metrics-panel-right-block">' +
            '<div class="metrics-panel-status-pill">' +
              '<span class="metrics-panel-status-dot"></span>' + statusBadge +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="metrics-panel-loop-grid">' + cardsHTML + '</div>' +
      '</div>' +
    '</section>';

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

    const liveRecordSource = metaDataRecord || 
                             (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
    
    const displayPillText = liveRecordSource.pill || "Statutory Data Security Covenant";
    const displayHeroTitle = liveRecordSource.hero_title || liveRecordSource.service_title || liveRecordSource.title || "Compliance Portal";
    const displayHeroLead = liveRecordSource.hero_lead || liveRecordSource.description || "Automated Inter-Jurisdictional Regulatory Licensing, Onboarding Compliance Systems, and Provisioning Pipelines.";
    const dynamicHeroImgSrc = "images/" + slug + "-hero.jpg";
    
    var computedActionLinkDestination = "#pricing-framework-target";
    if (slug === "index") {
      computedActionLinkDestination = "get-started.html";
    }

    zone.innerHTML = '<section class="hero-wrapper-section">' +
      '<div class="responsive-hero-grid hero-wrapper-grid">' +
        '<div class="hero-left-content-col">' +
          '<span class="hero-meta-badge-pill">' + displayPillText + '</span>' +
          '<h1 class="hero-headline hero-main-header-title">' + displayHeroTitle + '</h1>' +
          '<p class="hero-lead-description-p">' + displayHeroLead + '</p>' +
          '<a href="' + computedActionLinkDestination + '" class="hero-action-anchor-btn">Initialize Application &rarr;</a>' +
        '</div>' +
        '<div class="hero-image-container hero-right-image-col">' +
          '<img src="' + dynamicHeroImgSrc + '" class="hero-display-img hero-fluid-img-node" alt="Framework Layout Preview" onerror="this.onerror=null; this.src=\'images/default-hero.jpg\';">' +
        '</div>' +
      '</div>' +
    '</section>';

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
    .replace(/'/g, "'");
}

function renderMasterPricingEngine(targetId, metaDataRecord) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    var currentActiveSlug = targetId.replace("-package-pricing-cards-root", "")
                                    .toLowerCase().trim();
    if (metaDataRecord && metaDataRecord.slug) {
      currentActiveSlug = metaDataRecord.slug;
    }

    const universalSourceMatrix = window.CENTRAL_SERVICE_PLAN_DB || {};
    const pricingDatasetNode = universalSourceMatrix[currentActiveSlug] || 
                               (metaDataRecord && metaDataRecord.pricing) || {};

    if (!pricingDatasetNode || Object.keys(pricingDatasetNode).length === 0) {
      console.warn(currentActiveSlug);
      return;
    }

    const compileBulletsSubLoopMarkup = function(bulletArrayData) {
      if (!Array.isArray(bulletArrayData)) return "";
      return bulletArrayData.map(function(singleBulletString) {
        const structuralEscapedString = typeof secureGridStringEscape === "function" ? 
                                        secureGridStringEscape(singleBulletString) : 
                                        singleBulletString;
        return '<li class="pricing-card-bullet-item"><span>✓</span>' + 
               structuralEscapedString + '</li>';
      }).join("");
    };

    const coreTiersRegistryList = pricingDatasetNode.tiers || [
      { 
        key: "starter", 
        name: pricingDatasetNode.starter_label || "Starter Package", 
        price: parseFloat(pricingDatasetNode.starter) || 0, 
        highlighted: false 
      },
      { 
        key: "compliance", 
        name: pricingDatasetNode.compliance_label || "Compliance Guard", 
        price: parseFloat(pricingDatasetNode.compliance) || 0, 
        highlighted: true 
      },
      { 
        key: "enterprise", 
        name: pricingDatasetNode.enterprise_label || "Enterprise Asset Suite", 
        price: parseFloat(pricingDatasetNode.enterprise) || 0, 
        highlighted: false 
      }
    ];

    const frameworkSectionTitleText = pricingDatasetNode.section_title || 
                                     "Flexible Pricing Framework Options";
    const frameworkSectionSubtitleText = pricingDatasetNode.section_subtitle || 
                                        "Select the optimal processing speed and protection depth your operation requires.";
    const dynamicCadenceDescriptorLabel = pricingDatasetNode.cadence_label || " / registration";
    const dynamicPopularBadgeTextString = pricingDatasetNode.popular_badge_text || "Most Popular Option";
    const dynamicButtonActionVerbText = pricingDatasetNode.button_text || "Select Plan Option";

    var pricingCardsGeneratedHtmlArrayString = "";

    coreTiersRegistryList.forEach(function(tierRecordObj) {
      const tierUniqueKeyId = tierRecordObj.key;
      const tierPresentationName = tierRecordObj.name;
      const numericPriceValueFloat = parseFloat(tierRecordObj.price) || 0;
      const isCardHighlightedActive = tierRecordObj.highlighted || false;
      const targetedBulletsSourceArray = pricingDatasetNode.bullets && 
                                         pricingDatasetNode.bullets[tierUniqueKeyId] ? 
                                         pricingDatasetNode.bullets[tierUniqueKeyId] : [];
      
      var conditionalBadgeMarkupCell = "";
      var structuralHighlightClassNameSelector = "pricing-card-node text-center-mobile";
      var integerColorHighlightClassNameSelector = "pricing-card-price-integer";

      if (isCardHighlightedActive) {
        conditionalBadgeMarkupCell = '<span class="pricing-card-popular-badge">' + 
                                     dynamicPopularBadgeTextString + '</span>';
        structuralHighlightClassNameSelector = "pricing-card-node pricing-card-highlighted text-center-mobile";
        integerColorHighlightClassNameSelector = "pricing-card-price-integer color-primary";
      }

      pricingCardsGeneratedHtmlArrayString += '<div class="' + structuralHighlightClassNameSelector + '">' + 
        conditionalBadgeMarkupCell + 
        '<div class="pricing-card-upper-content">' +
          '<h3 class="pricing-card-tier-title">' + tierPresentationName + '</h3>' +
          '<div class="pricing-card-rate-row">' +
            '<span class="' + integerColorHighlightClassNameSelector + '">$' + numericPriceValueFloat.toFixed(2) + '</span>' +
            '<span class="pricing-card-cadence-label">' + dynamicCadenceDescriptorLabel + '</span>' +
          '</div>' +
          '<ul class="pricing-card-bullets-list">' + compileBulletsSubLoopMarkup(targetedBulletsSourceArray) + '</ul>' +
        '</div>' +
        '<a href="wizard.html?service=' + currentActiveSlug + '&plan=' + tierUniqueKeyId + '" class="pricing-card-action-btn ' + tierUniqueKeyId + '-btn-theme">' + 
          dynamicButtonActionVerbText + 
        '</a>' +
      '</div>';
    });

    zone.innerHTML = '<section id="pricing-framework-target" class="pricing-grid-master-section">' +
      '<div class="site-width-alignment-guard prgrid-container">' +
        '<div class="pricing-grid-header-block">' +
          '<h2 class="pricing-grid-main-title">' + frameworkSectionTitleText + '</h2>' +
          '<p class="pricing-grid-subtitle">' + frameworkSectionSubtitleText + '</p>' +
        '</div>' +
        '<div class="pricing-cards-responsive-grid">' + pricingCardsGeneratedHtmlArrayString + '</div>' +
      '</div>' +
    '</section>';

    setTimeout(function() {
      const livePageAnchorNodesArray = document.querySelectorAll('a');
      livePageAnchorNodesArray.forEach(function(individualAnchorElement) {
        const internalAnchorTextContent = individualAnchorElement.textContent || "";
        if (internalAnchorTextContent.trim() !== "") {
          individualAnchorElement.addEventListener("click", function(clickInterceptEvent) {
            if (individualAnchorElement.getAttribute("href") === "#pricing-framework-target") {
              const viewScrollTargetElementNode = document.getElementById("pricing-framework-target");
              if (viewScrollTargetElementNode) {
                clickEvent.preventDefault();
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
  window.PRICE_OBJECT_CONFIGS = window.PRICE_OBJECT_CONFIGS || {};
  
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
      <section class="startup-launchpad-section">
        <div class="startup-launchpad-container">
          <div class="startup-launchpad-grid">
            
            <div class="startup-launchpad-text-col">
              <span class="startup-launchpad-badge">Launch Infrastructure</span>
              <h2 class="startup-launchpad-headline">
                Startup Launchpad. <br><span style="color: #10b981;">Built For Scale.</span>
              </h2>
              <p class="startup-launchpad-subheading">
                Turn your business idea into an officially recognized state legal entity overnight.
              </p>
              <p class="startup-launchpad-description">
                Accelerate your early-stage venture with robust entity setup frameworks built for founders. 
                We automate formations, corporate bylaw preparation, tax ID filings (EIN), and state registry 
                submissions for your active ${meta.title} pipeline.
              </p>
              <a href="formations.html" class="startup-launchpad-link">
                Launch Your Startup &rarr;
              </a>
            </div>

            <div class="startup-launchpad-image-col">
              <img src="${meta.seceImage}" 
                   alt="Startup Launch" 
                   onerror="this.onerror=null; this.src='images/startup-launch.jpg';">
            </div>

          </div>
        </div>
      </section>
    `;
  } catch (err) {
    console.error("Launchpad hub error:", err);
  }
}


// --- MODULE 7: AUDIT TRUST PROTECT MATRIX ENGINE (SECTION 7) ---
function renderMasterTrustShieldMatrix(targetId, meta) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    zone.innerHTML = `
      <section class="trust-shield-section">
        <div class="trust-shield-overlay"></div>
        <div class="site-width-alignment-guard trust-shield-guard">
          
          <div class="trust-shield-img-col">
            <img src="${meta.secfImage}" 
                 alt="${meta.title} Protection Asset" 
                 onerror="this.onerror=null; this.src='images/regulatory-compliance.jpg';">
          </div>

          <div class="trust-shield-text-col">
            <span class="trust-shield-badge">Guaranteed Audit Protection</span>
            <h2 class="trust-shield-headline">Institutional Shield. <br><span style="color: #10b981;">Never Miss A Filing.</span></h2>
            <p class="trust-shield-subheading">Active database synchronization safeguards your status across state lines.</p>
            <p class="trust-shield-desc">Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your ${meta.title} operational status is permanently shielded.</p>
            <a href="compliance.html" class="trust-shield-link">Explore Security Infrastructure &rarr;</a>
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
      <section class="capture-section-wrap">
        <div class="site-width-alignment-guard">
          <div class="capture-split-grid">
            
            <!-- LEFT TEXT BOX MODULE -->
            <div class="capture-text-col">
              <span class="capture-badge-tag">Compliance Bulletins</span>
              <h2 class="capture-main-headline">Stay Informed. <br><span style="color: #10b981;">Secure Growth.</span></h2>
              <p class="capture-body-desc">Get actionable regulatory deadline text flashes, corporate filing advice, and federal state policy change updates sent straight to your box. Zero clutter. Direct compliance updates for your your ${meta.title} files.</p>
            </div>

            <!-- RIGHT INPUT FORM BOX INTERFACE -->
            <div class="capture-interface-col" id="f4u-subscribe-interface-wrapper">
              <form id="compliance-subscribe-form" class="capture-inline-form">
                <input type="email" id="subscribe-email-field" placeholder="Enter your business email..." required aria-label="Business Email" class="capture-input-field">
                <button type="submit" id="subscribe-button" class="capture-submit-btn">Subscribe</button>
              </form>
              
              <div id="form-status-message" style="display: none; transition: opacity 0.2s ease;"></div>
              
              <div class="capture-encryption-tag">
                <span>🔒 ENCRYPTED GATEWAY</span> Your data is fully shielded under 256-bit protocol architectures.
              </div>
            </div>

          </div>
        </div>
      </section>
    `;

    setTimeout(() => {
      const subscribeForm = document.getElementById("compliance-subscribe-form");
      const statusMessage = document.getElementById("form-status-message");
      const submitButton = document.getElementById("subscribe-button");
      const emailInput = document.getElementById("subscribe-email-field");

      if (!subscribeForm || !statusMessage || !submitButton || !emailInput) return;

      subscribeForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const targetCleanEmail = emailInput.value.trim().toLowerCase();
        if (!targetCleanEmail) return;

        submitButton.disabled = true;
        submitButton.innerText = "Processing...";
        statusMessage.style.display = "none";

        try {
          const backupUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
          const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
          
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

          if (response.status === 409 || !response.ok) {
            if (response.status === 409) {
              statusMessage.innerText = "ℹ️ This business email is already signed up for update feeds!";
              statusMessage.style.cssText = "display: block; background: rgba(59,130,246,0.1); color: #3b82f6; border: 1px solid rgba(59,130,246,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; text-align: left; font-size: 0.9rem;";
              emailInput.value = "";
              return;
            }
            throw new Error(`Server returned error code profile: ${response.status}`);
          }

          statusMessage.innerText = "🎉 Subscription successful! Welcome to your real-time compliance feed.";
          statusMessage.style.cssText = "display: block; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; text-align: left; font-size: 0.9rem;";
          emailInput.value = "";
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



// --- MODULE 1: GLOBAL CORPORATE SITE-WIDE NAVIGATION HEADER ---
function renderDynamicGlobalCorporateNavigation(targetId) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    zone.innerHTML = `
      <nav class="global-nav-bar">
        <div class="nav-content-wrapper">
          
          <!-- BRAND LOGO -->
          <a href="index.html" class="logo-link">
            <img src="images/logo.png" alt="filings4u" class="logo">
          </a>

          <button class="mobile-toggle-btn" id="mobile-menu-trigger" type="button" aria-label="Toggle Navigation" aria-expanded="false">☰</button>

          <!-- DESKTOP DROPDOWN ARCHITECTURE LINK SYSTEM -->
          <div class="nav-links">
            
            <!-- FORMATIONS DROPDOWN -->
            <div class="nav-item-dropdown static-dropdown">
              <a href="#">Formations <span>▼</span></a>
              <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                  <span class="column-title">Popular Formations</span>
                  <a href="llc-formation.html">LLC Formation</a>
                  <a href="corporations.html">Corporations (C/S-Corp)</a>
                  <a href="sole-proprietorship.html">Sole Proprietorship</a>
                </div>
                <div class="mega-column">
                  <span class="column-title">Specialty Structures</span>
                  <a href="dba-registration.html">DBA Registration</a>
                  <a href="nonprofits.html">Nonprofit Organization</a>
                  <a href="series-llc.html">Series LLC</a>
                </div>
              </div>
            </div>

            <!-- COMPLIANCE DROPDOWN -->
            <div class="nav-item-dropdown static-dropdown">
              <a href="#">Compliance <span>▼</span></a>
              <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                  <span class="column-title">Entity Health</span>
                  <a href="annual-reports.html">Annual Reports</a>
                  <a href="operating-agreement.html">Operating Agreement</a>
                  <a href="registered-agent.html">Registered Agent</a>
                </div>
                <div class="mega-column">
                  <span class="column-title">Licensing & Exit</span>
                  <a href="business-licenses.html">Business Licenses</a>
                  <a href="employer-id-ein.html">Employer ID (EIN)</a>
                  <a href="dissolution.html">Entity Dissolution</a>
                </div>
              </div>
            </div>

            <!-- TAX FILINGS DROPDOWN -->
            <div class="nav-item-dropdown static-dropdown">
              <a href="#">Tax Filings <span>▼</span></a>
              <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                  <span class="column-title">Income & Operations</span>
                  <a href="federal-tax.html">Federal Income Tax</a>
                  <a href="state-tax.html">State Income Tax</a>
                  <a href="franchise-tax.html">Franchise Tax Filing</a>
                </div>
                <div class="mega-column">
                  <span class="column-title">Sales & Payroll</span>
                  <a href="sales-tax-registration.html">Sales Tax Registration</a>
                  <a href="payroll-tax-940-941.html">Payroll Tax (940/941)</a>
                  <a href="heavy-use-tax-2290.html">Heavy Use Tax (2290)</a>
                </div>
              </div>
            </div>

            <!-- DOT & FLEET DROPDOWN -->
            <div class="nav-item-dropdown static-dropdown">
              <a href="#">DOT & Fleet <span>▼</span></a>
              <div class="dropdown-content mega-panel-three-col">
                <div class="mega-column">
                  <span class="column-title">Authority Setup</span>
                  <a href="owner-operators.html">Owner Operators</a>
                  <a href="trucker-authority.html">Trucker Authority</a>
                  <a href="broker-authority.html">Broker Authority</a>
                  <a href="ucr-registration.html">UCR Registration</a>
                </div>
                <div class="mega-column">
                  <span class="column-title">Compliance & Regs</span>
                  <a href="dot-consortium.html">DOT Consortium</a>
                  <a href="driver-file.html">Driver Qualification File</a>
                  <a href="process-agents-boc-3.html">Process Agent (BOC-3)</a>
                  <a href="ifta-registration.html">IFTA Registration</a>
                </div>
                <div class="mega-column">
                  <span class="column-title">Insurance & Risk</span>
                  <a href="licenses-permits.html">Licenses & Permits</a>
                  <a href="trucker-insurance-quote.html">Trucker Insurance</a>
                  <a href="broker-insurance-quote.html">Broker Insurance</a>
                  <a href="new-entrant-audit.html">New Entrant Audit</a>
                </div>
              </div>
            </div>

            <a href="https://portal.filings4u.com/client-dashboard.html" class="btn-client-portal">Client Portal</a>
          </div>

        </div>
      </nav>
    `;
  } catch (err) {
    console.error("Navigation matrix rendering error:", err);
  }
}



// --- MODULE 8: GLOBAL SITE-WIDE RE-ALIGNED CORPORATE FOOTER SYSTEM ---
function renderDynamicGlobalCorporateFooter(targetId) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    zone.innerHTML = `
      <footer class="site-footer">
        
        <!-- Tech Vector Network Grid Background Layer -->
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        
        <div class="footer-container">
          <div class="footer-brand">
            <a href="index.html" style="display: inline-block; text-decoration: none; transition: opacity 0.2s ease;">
              <img src="images/logo-white.png" alt="filings4u" style="height: 48px !important; width: auto !important; object-fit: contain;">
            </a>
            <p>Providing enterprise-grade filing and compliance solutions for local and corporate entities.</p>
            
            <div class="footer-social-wrapper">
              <!-- LinkedIn -->
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon">
                <svg width="14" height="14" fill="white" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
              </a>
              <!-- YouTube -->
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon">
                <svg width="16" height="16" fill="white" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.301 1.103.33 3.483.33 4.246 0 .763-.029 3.143-.33 4.246a2.01 2.01 0 0 1-1.415 1.419c-1.123.302-5.288.332-6.11.335h-.09c-.822-.003-4.987-.033-6.11-.335a2.01 2.01 0 0 1-1.415-1.419C.03 11.143 0 8.763 0 8c0-.763.029-3.143.33-4.246a2.01 2.01 0 0 1 1.415-1.42c1.123-.302 5.288-.332 6.11-.335h.089zM6.374 11.155l4.356-2.651a.26.26 0 0 0 0-.442L6.374 5.412a.26.26 0 0 0-.398.221v5.301a.26.26 0 0 0 .398.22z"/></svg>
              </a>
              <!-- X -->
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon">
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
            <p style="margin: 0; font-size: 0.85rem; max-width: 300px; line-height: 1.4; overflow-wrap: break-word;">
              &copy; 2026 filings4u, LLC. All rights reserved. A Subsidiary of 
              <a href="https://roselandcompanies.com" target="_blank" rel="noopener noreferrer" class="footer-bottom-brand-link">Roseland Companies, LLC</a>
            </p>
          </div>

          <div class="trust-badge footer-secure-badge-box">
            <span>SECURE</span> 256-bit SSL Encrypted Connection
          </div>

          <div class="legal-links">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-of-service.html">Terms of Service</a>
            <a href="refund-policy.html">Refund Policy</a>
          </div>
        </div>

      </footer

      <!-- SCROLL TO TOP FLOATING INTERFACE -->
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
    const heroTarget = document.querySelector('[id$="-hero-zone"]');
    const metricsTarget = document.querySelector('[id$="-metrics-zone"]');
    const pricingTarget = document.querySelector('[id$="-package-pricing-cards-root"]');
    const launchpadTarget = document.querySelector('[id$="-launchpad-zone"]');
    const trustTarget = document.querySelector('[id$="-trust-zone"]');

    if (heroTarget) renderMasterHeroEngine(heroTarget.id, meta);
    if (metricsTarget) renderMasterMetricsEngine(metricsTarget.id, dbRow);
    if (pricingTarget) renderMasterPricingEngine(pricingTarget.id, dbRow);
    if (launchpadTarget) renderMasterLaunchpadEngine(launchpadTarget.id, meta);
    if (trustTarget) renderMasterEngine(trustTarget.id, meta);
    if (subscribeTarget) renderMasterSubscribeEngine(subscribeTarget.id);

    console.log(`🏁 Complete 8-section layout system initialized for: ${cleanPageKey}`);
  } catch (err) {
    console.error("❌ Critical Controller System Failure:", err);
  }
}

document.addEventListener("DOMContentLoaded", renderMasterSystem);

// --- DATABASE: DASHBOARD STATES REGISTRY CONFIGURATION ---
const STATES_DASHBOARD_REGISTRY = {
  delaware: {
    name: "State of Delaware",
    portal: "OFFICIAL CORPORATE FILINGS PORTAL",
    title: "State Filing Checklist",
    steps: [
      {
        title: "Official Business Registration",
        desc: "We check name availability with local registries and file your official Articles of Organization immediately to create your protective asset boundary.",
        color: "#10b981"
      },
      {
        title: "Local DBA and Trade Name Handling",
        desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.",
        color: "#10b981"
      },
      {
        title: "Tax ID & Sales Ledger Setup",
        desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.",
        color: "#38bdf8"
      }
    ]
  },
  nevada: {
    name: "State of Nevada",
    portal: "NV SILVER FLUME SYSTEM",
    title: "Nevada Filing Checklist",
    steps: [
      {
        title: "Official Business Registration",
        desc: "Direct filing with the Nevada Secretary of State. We verify name availability and lodge your organizational paperwork instantly.",
        color: "#10b981"
      },
      {
        title: "Local DBA and Trade Name Handling",
        desc: "File your trade names locally and establish your asset protection protocols under Nevada's favorable privacy laws.",
        color: "#10b981"
      },
      {
        title: "Tax ID & Sales Ledger Setup",
        desc: "Obtain your IRS Federal EIN and instantly map your business structure to Nevada's zero-corporate-tax infrastructure.",
        color: "#38bdf8"
      }
    ]
  },
  wyoming: {
    name: "State of Wyoming",
    portal: "COMMERCIAL REGISTRY CONNECTION",
    title: "Wyoming Filing Checklist",
    steps: [
      {
        title: "Official Business Registration",
        desc: "Direct filing with the Wyoming Secretary of State. We verify name availability and lodge your organizational paperwork instantly.",
        color: "#10b981"
      },
      {
        title: "Local DBA and Trade Name Handling",
        desc: "File your trade names locally and establish your asset protection protocols under Wyoming's favorable privacy laws.",
        color: "#10b981"
      },
      {
        title: "Tax ID & Sales Ledger Setup",
        desc: "Obtain your IRS Federal EIN and instantly map your business structure to Wyoming's zero-corporate-tax infrastructure.",
        color: "#38bdf8"
      }
    ]
  },
  california: {
    name: "State of California",
    portal: "CA BIZFILE ONLINE NODE",
    title: "California Filing Checklist",
    steps: [
      {
        title: "Official Business Registration",
        desc: "Essential framework for businesses operating locally within the California market. Streamlines regional sales permits, local compliance, and franchise taxes.",
        color: "#10b981"
      },
      {
        title: "Local DBA and Trade Name Handling",
        desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.",
        color: "#10b981"
      },
      {
        title: "Tax ID & Sales Ledger Setup",
        desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.",
        color: "#38bdf8"
      }
    ]
  },
  texas: {
    name: "State of Texas",
    portal: "TX SOSDIRECT SYSTEM",
    title: "Texas Filing Checklist",
    steps: [
      {
        title: "Official Business Registration",
        desc: "Top choice for establishing physical local operations. Synchronizes direct tax filings seamlessly with the Texas Comptroller of Public Accounts.",
        color: "#10b981"
      },
      {
        title: "Local DBA and Trade Name Handling",
        desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.",
        color: "#10b981"
      },
      {
        title: "Tax ID & Sales Ledger Setup",
        desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.",
        color: "#38bdf8"
      }
    ]
  },
  florida: {
    name: "State of Florida",
    portal: "SUNBIZ AUTOMATED FILING NODE",
    title: "State Filing Checklist",
    steps: [
      {
        title: "Official Business Registration",
        desc: "We check name availability with local registries and file your official Articles of Organization immediately to create your protective asset boundary.",
        color: "#10b981"
      },
      {
        title: "Local DBA and Trade Name Handling",
        desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.",
        color: "#10b981"
      },
      {
        title: "Tax ID & Sales Ledger Setup",
        desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.",
        color: "#38bdf8"
      }
    ]
  }
};



// --- MODULE 5: MAIN HOMEPAGE RENDER INTERACTION ENGINE ---
function renderHomepageOperationsRouter(targetId) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    const sd = STATES_DASHBOARD_REGISTRY;

    zone.innerHTML = `
      <section class="router-master-section">
        <div class="site-width-alignment-guard">
          
          <div class="router-header-block">
            <span class="router-badge-tag">Choose Your Location</span>
            <h2 class="router-main-headline">Launch Your Business. <span style="color: #10b981;">Locally.</span></h2>
          </div>

          <div class="router-columns-wrapper">
            
            <!-- Left Side Column Panel -->
            <div class="router-left-panel-card">
              <h3>Select Your State</h3>
              <p>Pick where your business operates to review processing timelines and state rules.</p>
              
              <div class="router-scrollbar-scroller">
                
                <h4>Top for Corporations</h4>
                <div class="router-options-list-stack">
                  ${["delaware", "nevada", "wyoming"].map(k => `
                    <div class="state-opt" data-key="${k}">
                      <div>
                        <div class="opt-title-primary" style="font-weight: 600;">${sd[k] ? sd[k].name : k}</div>
                        <span class="opt-subtitle-mono">Commercial Registry Connection</span>
                      </div>
                      <span class="opt-status-badge">ONLINE</span>
                    </div>
                  `).join('')}
                </div>

                <h4>Top for Local Businesses</h4>
                <div class="router-options-list-stack no-bottom-margin">
                  ${["california", "texas", "florida"].map(k => `
                    <div class="state-opt" data-key="${k}">
                      <div>
                        <div class="opt-title-primary" style="font-weight: 600;">${sd[k] ? sd[k].name : k}</div>
                        <span class="opt-subtitle-mono">Local Revenue Node</span>
                      </div>
                      <span class="opt-status-badge">ONLINE</span>
                    </div>
                  `).join('')}
                </div>

              </div>
            </div>

            <!-- Right Side Column Panel -->
            <div class="router-right-panel-card">
              <div class="router-right-radial-overlay"></div>
              
              <div class="router-right-inner-z-bound">
                <div class="router-right-panel-header">
                  <div class="router-right-panel-header-title-block">
                    <span id="p-sub">REGISTRATION PROFILE OVERVIEW</span>
                    <h4 id="c-title">State Filing Checklist</h4>
                  </div>
                  <div class="router-network-ready-tag">NETWORK READY</div>
                </div>
                <div id="dynamic-steps-container" class="router-dynamic-steps-container"></div>
              </div>

              <div class="router-bottom-action-row">
                <div class="router-bottom-action-row-label-block">
                  <div class="label-title">Average Gateway Turnaround</div>
                  <div id="c-time" class="value-display">Instant Submission</div>
                </div>
                <a id="c-btn" href="llc-formation.html#pricing-framework-target" class="router-initiate-action-btn">
                  Initialize Local Application &rarr;
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    `;

    function updateUI(key) {
      const d = sd[key];
      if (!d) return;

      const pSubElement = document.getElementById("p-sub");
      if (pSubElement && d.portal) {
        pSubElement.innerText = d.portal;
      }

      const cTitleElement = document.getElementById("c-title");
      if (cTitleElement && d.title) {
        cTitleElement.innerText = d.title;
      }

      const cTimeElement = document.getElementById("c-time");
      if (cTimeElement && d.time) {
        cTimeElement.innerText = d.time;
      }

      if (d.steps) {
        document.getElementById("dynamic-steps-container").innerHTML = d.steps.map(s => `
          <div class="router-step-loop-item">
            <div class="router-step-loop-dot" style="background: ${s.color};"></div>
            <div class="router-step-loop-content-box">
              <span>${s.title}</span>
              <p>${s.desc}</p>
            </div>
          </div>
        `).join('');
      }

      const cBtnElement = document.getElementById("c-btn");
      if (cBtnElement) {
        cBtnElement.href = "llc-formation.html#pricing-framework-target";
      }

      zone.querySelectorAll(".state-opt").forEach(el => {
        const rowKey = el.getAttribute("data-key");
        const titleDiv = el.querySelector(".opt-title-primary");
        const label = el.querySelector(".opt-status-badge");

        if (rowKey === key) {
          el.style.border = "2px solid #10b981";
          if (titleDiv) titleDiv.style.fontWeight = "700";
          if (label && rowKey === "delaware") {
            label.innerText = "24HR PROCESSING AVAILABLE";
            label.style.color = "#10b981";
          }
        } else {
          el.style.border = "1px solid #e2e8f0";
          if (titleDiv) titleDiv.style.fontWeight = "600";
          if (label && rowKey === "delaware") {
            label.innerText = "ONLINE";
            label.style.color = "#475569";
          }
        }
      });
    }

    zone.querySelectorAll(".state-opt").forEach(el => {
      el.addEventListener("click", () => updateUI(el.getAttribute("data-key")));
    });

    updateUI("delaware");

  } catch (err) {
    console.error("Dashboard error:", err);
  }
}



// --- APPLICATION INITIALIZATION AND DOM ENGINE ROUTER ---
document.addEventListener("DOMContentLoaded", () => {
  const isHomepage = document.getElementById("index-package-pricing-cards-root");
  if (isHomepage) {
    renderHomepageOperationsRouter("index-package-pricing-cards-root");
  } else {
    document.querySelectorAll('[id$="-package-pricing-cards-root"]').forEach(zone => {
      if (typeof renderMasterPricingEngine === "function") {
        renderMasterPricingEngine(zone.id);
      }
    });
  }
  document.querySelectorAll('[id$="-hero-zone"]').forEach(zone => {
    if (typeof renderMasterHeroEngine === "function") {
      renderMasterHeroEngine(zone.id);
    }
  });
  document.querySelectorAll('[id$="-metrics-zone"]').forEach(zone => {
    if (typeof renderMasterMetricsEngine === "function") {
      renderMasterMetricsEngine(zone.id, null);
    }
  });
});

// --- DYNAMIC SOCIAL PROOF CAROUSEL ROTATION CONTROLLER ---
document.addEventListener("DOMContentLoaded", function() {
  const proofWidget = document.getElementById("f4u-dynamic-proof-widget");
  const textTarget = document.getElementById("f4u-proof-text-node");
  const closeBtn = document.getElementById("f4u-close-proof-node");

  if (!proofWidget || !textTarget || !closeBtn) return;

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
    const timeString = liveMinutes === 1 ? "1 min ago" : liveMinutes + " mins ago";
    return item.text.replace("{MINUTES}", timeString);
  }

  function rotateProofMessage() {
    proofWidget.style.opacity = "0";
    proofWidget.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      const activeItem = proofTemplates[currentIndex];
      textTarget.innerHTML = getFormattedMessage(activeItem);
      proofWidget.setAttribute("data-url", activeItem.url);
      
      proofWidget.style.opacity = "1";
      proofWidget.style.transform = "translateY(0)";
      
      currentIndex = (currentIndex + 1) % proofTemplates.length;
      rotationTimeout = setTimeout(rotateProofMessage, 5000);
    }, 400);
  }

  proofWidget.addEventListener("click", function(e) {
    if (e.target === closeBtn) return;
    const targetUrl = proofWidget.getAttribute("data-url");
    if (targetUrl) {
      window.location.href = targetUrl;
    }
  });

  closeBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    clearTimeout(rotationTimeout);
    proofWidget.style.opacity = "0";
    proofWidget.style.transform = "translateY(20px)";
    setTimeout(() => {
      proofWidget.style.display = "none";
    }, 400);
  });

  rotateProofMessage();
});
