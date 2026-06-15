
/**
 * PART 1: PRICING MATRIX EMERALD ANIMATION CSS INJECTOR
 * Establishes custom hover scaling loops and smooth multi-layer shadow properties
 */
(function injectPricingGlowAnimations() {
  if (document.getElementById("pricing-glow-animation-styles")) return;
  const styleElement = document.createElement("style");
  styleElement.id = "pricing-glow-animation-styles";
  styleElement.innerHTML = `
    .pricing-card-animated {
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                  box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                  border-color 0.4s ease !important;
      transform: translateY(0);
      will-change: transform, box-shadow;
    }
    .pricing-card-animated:hover {
      transform: translateY(-8px) !important;
    }
    .pricing-card-animated.standard-glow:hover {
      border-color: #10b981 !important;
      box-shadow: 0 20px 40px -10px rgba(10, 31, 68, 0.05), 0 0 30px 4px rgba(16, 185, 129, 0.25) !important;
    }
    .pricing-card-animated.popular-glow {
      box-shadow: 0 15px 30px rgba(10, 31, 68, 0.05), 0 0 20px 2px rgba(16, 185, 129, 0.15) !important;
      animation: emeraldPulseBreathing 3s infinite ease-in-out;
    }
    .pricing-card-animated.popular-glow:hover {
      border-color: #0e9f6e !important;
      box-shadow: 0 25px 50px -12px rgba(10, 31, 68, 0.1), 0 0 40px 8px rgba(16, 185, 129, 0.45) !important;
      animation-play-state: paused;
    }
    @keyframes emeraldPulseBreathing {
      0% { box-shadow: 0 15px 30px rgba(10,31,68,0.05), 0 0 20px 2px rgba(16, 185, 129, 0.15); }
      50% { box-shadow: 0 15px 30px rgba(10,31,68,0.05), 0 0 30px 6px rgba(16, 185, 129, 0.32); border-color: #34d399; }
      100% { box-shadow: 0 15px 30px rgba(10,31,68,0.05), 0 0 20px 2px rgba(16, 185, 129, 0.15); }
    }
  `;
  document.head.appendChild(styleElement);
})();

/**
 * ASYNCHRONOUS DATA LOOKUP TUNNELER
 * Connects directly into whatever global variable names are used inside assets/js/state-pricing.js
 */
function resolvePricingObjectWithRetry(slug) {
  // Snaps directly into state-pricing.js objects (window.statePricingData or windows.servicesPricing)
  const source = window.statePricingData || window.servicesPricing || window.pricingData || {};
  const record = source[slug] || source[slug.replace(/-/g, '_')] || source[slug.toUpperCase()];
  
  if (record) {
    return {
      basicPrice: record.starterPrice || record.basicPrice || record.price || "99",
      compliancePrice: record.compliancePrice || record.shieldPrice || "199",
      enterprisePrice: record.enterprisePrice || record.suitePrice || "349",
      basicFeatures: record.starterFeatures || record.basicFeatures || ["Standard registry declaration files processed securely."],
      complianceFeatures: record.complianceFeatures || record.shieldFeatures || ["Includes proactive automated calendar sweeps and compliance alerts."],
      enterpriseFeatures: record.enterpriseFeatures || record.suiteFeatures || ["Custom structural provisions, real-time banking setup, and lifetime storage."]
    };
  }
  
  // Clean fallback parameters so rows don't display empty text areas if lookups have slight delay
  return {
    basicPrice: "99", compliancePrice: "199", enterprisePrice: "349",
    basicFeatures: ["Standard registry declaration files processed securely."],
    complianceFeatures: ["Includes proactive automated calendar sweeps and compliance alerts."],
    enterpriseFeatures: ["Custom structural provisions, real-time banking setup, and lifetime storage."]
  };
}


/**
 * PART 1: COMPLIANCE PRICING DATA COMPILER MAPPER (CORRECTED)
 * Resolves local data payloads inside state-pricing.js straight into layout loops
 */
function resolveLocalServicePricingData(slug) {
  // Safe deep lookup mapping for custom datasets inside state-pricing.js
  const globalPricingSource = window.statePricingData || window.servicesPricing || window.pricingData || {};

  // 🔍 SYSTEM CROSS-REFERENCE LOGIC
  // Attempt to look up by raw hyphenated slug, underscored slug, or a fallback shortcut token extraction
  let localData = globalPricingSource[slug] || globalPricingSource[slug.replace(/-/g, '_')];

  if (!localData) {
    // Shorthand mapper utility if your state-pricing.js uses cleaner, shorter keywords
    if (slug.includes("ein") || slug.includes("employer-id-ein")) {
      localData = globalPricingSource.ein || globalPricingSource.ein_number;
    } else if (slug.includes("llc") || slug.includes("llc-formation")) {
      localData = globalPricingSource.llc || globalPricingSource.llc_formation;
    } else if (slug.includes("dba") || slug.includes("doing-business-as")) {
      localData = globalPricingSource.dba;
    } else if (slug.includes("registered-agent")) {
      localData = globalPricingSource.registered_agent || globalPricingSource.agent;
    } else if (slug.includes("operating-agreement")) {
      localData = globalPricingSource.operating_agreement;
    } else if (slug.includes("annual-reports")) {
      localData = globalPricingSource.annual_reports || globalPricingSource.annual_report;
    }
  }

  return {
    hasCustomData: localData !== null && localData !== undefined,
    
    // Extract price strings safely or drop back to your standard layout default templates
    basicPrice: localData?.starterPrice || localData?.basicPrice || localData?.price || "99",
    compliancePrice: localData?.compliancePrice || localData?.shieldPrice || "199",
    enterprisePrice: localData?.enterprisePrice || localData?.suitePrice || "349",
    
    // Extract array feature list rows cleanly. Handles strings and array variations perfectly
    basicFeatures: localData?.starterFeatures || localData?.basicFeatures || ["Standard registry declaration files processed securely."],
    complianceFeatures: localData?.complianceFeatures || localData?.shieldFeatures || ["Includes proactive automated calendar sweeps, compliance alerts, and guard sheets."],
    enterpriseFeatures: localData?.enterpriseFeatures || localData?.suiteFeatures || ["Custom structural provisions, real-time banking integration, and lifetime archive storage."]
  };
}


/**
 * ==========================================================================
 * 🚀 UNIFIED PRODUCTION CONTENT MATRIX ENGINE & CHESSBOARD CONTROLLER
 * Part 3: Branded Layout Component Modules (Hero & Metrics)
 * ==========================================================================
 */

// --- MODULE 1: DYNAMIC BRANDED HERO ENGINE (SECTION 1 - WHITE) ---
function renderMasterHeroEngine(targetId, meta) {
    const zone = document.getElementById(targetId);
    if (!zone) return;
    
    zone.innerHTML = `
    <!-- 🌟 SUCCESSFUL GAP FIX: Rebalanced master padding constraints and forced a 0px canvas layout floor line -->
    <main class="page-container" style="background: #ffffff; padding: 40px 0 0px 0 !important; margin: 0 0 10px 0 !important; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; display: block;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            
            <!-- 🌟 GLOBAL CSS HOOK: Using your precise class name (.responsive-hero-grid) to flip the image to the top on mobile -->
            <div class="responsive-hero-grid" style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 40px; width: 100%; margin: 0; padding: 0;">
                
                <!-- 📝 TEXT COLUMN (Left on Desktop, Drops to order: 2 naturally on mobile) -->
                <article class="content-area" style="flex: 1.2; min-width: 320px; box-sizing: border-box; margin: 0; padding: 0;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content;">${meta.title} Framework</span>
                    
                    <!-- 🌟 GLOBAL CSS HOOK: Using your precise class name (.hero-headline) to adjust mobile text sizing -->
                    <h1 class="hero-headline" style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 14px 0; line-height: 1.1; letter-spacing: -1px;"> 
                        The Engine for <br><span style="color: #10b981;">Total ${meta.title}.</span> 
                    </h1>
                    
                    <p style="color: #475569; font-size: 1.1rem; line-height: 1.5; margin: 0 0 16px 0;">Launch, scale, and manage your asset protection profiles across all 50 State registries overnight. We automate your legal document filings, tax parameters, and organizational agreements securely for your ${meta.title} processing.</p>
                    <div class="active-sync-badge-wrapper" style="display: flex; align-items: center; gap: 10px; margin-bottom: 18px;">
                        <div class="badge-line" style="height: 2px; width: 24px; background: #10b981;"></div>
                        <span class="badge-text" style="color: #0a1f44; font-weight: 700; font-size: 0.9rem;">${meta.title} Sync: 140,000+ Profiles Active</span>
                    </div>
                    <a href="llc-formation.html" class="btn-main" style="background: #10b981; color: #ffffff; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 6px; display: inline-block; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); transition: background 0.2s; width: fit-content; margin: 0;">Get Started &rarr;</a>
                </article>

                <!-- 📸 IMAGE COLUMN (Right on Desktop, Flips to top on mobile via your global .hero-image-container rule) -->
                <aside class="hero-image-container" style="flex: 1; min-width: 320px; max-width: 520px; display: flex; justify-content: center; align-items: flex-start; margin: 0; padding: 0;">
                    
                    <!-- 🌟 GLOBAL CSS HOOK: Using your precise class name (.hero-display-img) for fluid responsive image constraints -->
                    <img src="images/${meta.slug}-hero.jpg" class="hero-display-img" alt="${meta.title} System Dashboard" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);" onerror="this.onerror=null; this.src='images/hero-image.jpg';">
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
    <section class="enterprise-metrics-section" style="padding: 60px 0 !important; background: #0a1f44; color: #f4f7fa; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important; font-family: system-ui, sans-serif;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10;">
        
        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid rgba(244,247,250,0.1); padding-bottom: 24px; margin-bottom: 40px; flex-wrap: wrap; gap: 24px; width: 100%; box-sizing: border-box;">
          <div style="text-align: left; max-width: 600px;">
            <h2 style="margin: 0; font-size: 2.2rem; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">${meta.title} Filing Infrastructure</h2>
          </div>
          <div style="text-align: right;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 700; color: #10b981; font-family: monospace; background: rgba(16,185,129,0.1); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(16,185,129,0.2);">
              <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span> ALL CLEAR: SECURE REST GATEWAYS ACTIVE
            </div>
          </div>
        </div>

        <div class="metrics-dashboard-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; width: 100%; box-sizing: border-box; margin: 0;">
          
          <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🏢</span>
            <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">142K+</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Corporate Entities Formed</div>
            <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Authorized Articles of Organization across all 50 State Secretary registries.</p>
          </div>

          <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🚛</span>
            <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">38,410</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Active Transits Monitored</div>
            <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">USDOT & MC operating authorities actively synchronized across databases.</p>
          </div>

          <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">⚡</span>
            <div style="font-size: 2.4rem; font-weight: 900; color: #10b981; font-family: monospace; line-height: 1;">1.8s</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Average API Pipeline Turn</div>
            <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Secure, real-time rest requests to launch bank check intents and pre-saves.</p>
          </div>

          <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
            <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">🔒</span>
            <div style="font-size: 2.4rem; font-weight: 900; color: #ffffff; font-family: monospace; line-height: 1;">99.98%</div>
            <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">Filing Accuracy Quotient</div>
            <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">Sophisticated layout routing eliminates syntax rejection errors from state systems.</p>
          </div>

        </div>
      </div>
    </section>
  `;
}



/**
 * PART 1: PRICING LIFECYCLE PRELOAD TUNNELER
 * Pauses rendering loops to wait for state-pricing.js arrays to mount into memory
 */
function resolvePricingObjectWithRetry(slug, delay = 50, retries = 50) {
  // 1. Audit window object allocations used inside state-pricing.js
  const source = window.statePricingData || window.servicesPricing || window.pricingData || {};
  
  // 2. Try parsing clean string tokens, underscored tokens, or array properties
  const record = source[slug] || source[slug.replace(/-/g, '_')] || source[slug.toUpperCase()];
  
  if (record) {
    return {
      basicPrice: record.starterPrice || record.basicPrice || record.price || "99",
      compliancePrice: record.compliancePrice || record.shieldPrice || "199",
      enterprisePrice: record.enterprisePrice || record.suitePrice || "349",
      basicFeatures: record.starterFeatures || record.basicFeatures || ["Standard registry declaration files processed securely."],
      complianceFeatures: record.complianceFeatures || record.shieldFeatures || ["Includes proactive automated calendar sweeps and compliance alerts."],
      enterpriseFeatures: record.enterpriseFeatures || record.suiteFeatures || ["Custom structural provisions, real-time banking setup, and lifetime storage."]
    };
  }

  // 3. Loop fallback if scripts load out of sequence
  if (retries > 0) {
    setTimeout(() => resolvePricingObjectWithRetry(slug, delay, retries - 1), delay);
  }

  // 4. Baseline backup to keep layout matching your design rules if file contains syntax gaps
  return {
    basicPrice: "99", compliancePrice: "199", enterprisePrice: "349",
    basicFeatures: ["Standard registry declaration files processed securely."],
    complianceFeatures: ["Includes proactive automated calendar sweeps and compliance alerts."],
    enterpriseFeatures: ["Custom structural provisions, real-time banking setup, and lifetime storage."]
  };
}


/**
 * ==========================================================================
 * 🚀 UNIFIED PRODUCTION CONTENT MATRIX ENGINE & CHESSBOARD CONTROLLER
 * Part 4: High-Utility 3-Card Package Infrastructure Module
 * ==========================================================================
 */
function renderMasterPricingEngine(targetId, meta) {
  const zone = document.getElementById(targetId);
  if (!zone) return;

  zone.innerHTML = `
    <section style="background: #f1f5f9; padding: 80px 0; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box;">
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
        
        <div style="text-align: center; margin-bottom: 50px;">
          <span style="color: #4f46e5; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(79, 70, 229, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(79, 70, 229, 0.15);">Infrastructure Selection</span>
          <h2 style="color: #0a1f44; font-size: 2.6rem; font-weight: 900; margin: 0; line-height: 1.2;">Standard ${meta.title} Processing Options</h2>
          <p style="color: #475569; font-size: 1.05rem; margin: 10px 0 0 0;">Select the management structure engineered for your profile setup needs.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; width: 100%; align-items: stretch; box-sizing: border-box;">
          
          <!-- PLAN CARD 1: BASIC -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.02); box-sizing: border-box;">
            <div>
              <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;"><img src="images/${meta.slug}-secc.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';"></div>
              <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Basic Setup Plan</h3>
              <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$99 <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Standard registry declaration files processed securely with immediate dispatch validation arrays.</p>
            </div>
            <button onclick="window.location.href='order.html?service=${meta.slug}&plan=basic'" style="width: 100%; background: #10b981; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Basic Setup</button>
          </div>

          <!-- PLAN CARD 2: SHIELD -->
          <div style="background: #ffffff; border: 2px solid #10b981; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); position: relative; box-sizing: border-box;">
            <span style="position: absolute; top: -14px; right: 25px; background: #10b981; color: #ffffff; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.05em; padding: 4px 14px; border-radius: 20px;">POPULAR</span>
            <div>
              <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;"><img src="images/${meta.slug}-secd.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';"></div>
              <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Complete Shield Matrix</h3>
              <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$199 <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Includes proactive automated calendar sweeps, compliance risk metrics alerts, and asset guard protection sheets.</p>
            </div>
            <button onclick="window.location.href='order.html?service=${meta.slug}&plan=complete'" style="width: 100%; background: #0a1f44; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Complete Shield</button>
          </div>

          <!-- PLAN CARD 3: ENTERPRISE -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 35px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px rgba(0,0,0,0.02); box-sizing: border-box;">
            <div>
              <div style="height: 150px; overflow: hidden; border-radius: 8px; margin-bottom: 25px;"><img src="images/${meta.slug}-pricing-premium.jpg" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='images/local-business.jpg';"></div>
              <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0;">Enterprise Growth Suite</h3>
              <div style="color: #0a1f44; font-size: 2.2rem; font-weight: 900; margin-bottom: 15px;">$349 <span style="font-size: 1rem; font-weight: 500; color: #64748b;">+ state fees</span></div>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0 0 30px 0;">Custom structural multi-member provisions, real-time banking gateway data mapping integration, and lifetime revision sheets storage.</p>
            </div>
            <button onclick="window.location.href='order.html?service=${meta.slug}&plan=enterprise'" style="width: 100%; background: #4f46e5; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;">Select Enterprise Suite</button>
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
 * ==========================================================================
 */

// --- MODULE 4: DYNAMIC LAUNCHPAD ENGINE ---
function renderMasterLaunchpadEngine(targetId, meta) {
  const zone = document.getElementById(targetId);
  if (!zone) return;

  zone.innerHTML = `
    <section style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 60px; align-items: center; width: 100%;">
          
          <div style="width: 100%; box-sizing: border-box;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">Launch Infrastructure</span>
            <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">
              ${meta.title} Launchpad. <br><span style="color: #10b981;">Built For Scale.</span>
            </h2>
            <p style="color: #0a1f44; font-weight: 700; font-size: 1.05rem; margin: 0 0 12px 0; line-height: 1.4;">Turn your business goals into an officially recognized legal framework entity overnight.</p>
            <p style="color: #475569; font-size: 1rem; line-height: 1.6; margin: 0 0 28px 0;">Accelerate your development pipeline with robust entity structural setups. We automate regulatory registry connections, compliance tracking alerts, and validation rules engines under an integrated layout architecture so you can open accounts and protect infrastructure assets cleanly.</p>
            <a href="get-started.html" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 1rem; display: inline-block;">Launch Your Ecosystem &rarr;</a>
          </div>

          <div style="display: flex; justify-content: center; width: 100%;">
            <img src="images/${meta.slug}-sece.jpg" alt="${meta.title} Launch Infrastructure" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);" onerror="this.onerror=null; this.src='images/startup-launch.jpg';">
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
        <div class="sec-infrastructure-page-root" style="font-family: system-ui, sans-serif !important; background-color: #f8fafc !important; color: #0a1f44 !important; line-height: 1.5 !important; box-sizing: border-box; margin: 0; padding: 0;">
            
            <main class="sec-hero-main-container" style="box-sizing: border-box;">
                
                <!-- White Vector Dots Background Overlay -->
                <div class="sec-vector-dots-overlay"></div>
                
                <div class="sec-max-width-alignment-guard">
                    <div class="sec-hero-grid">
                        
                        <!-- Left Side: Real-time Infrastructure Telemetry Visual -->
                        <div class="sec-hero-col">
                            <div style="background: rgba(255, 255, 255, 0.03) !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; border-radius: 16px !important; padding: 40px !important; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4) !important; box-sizing: border-box !important;">
                                <div style="border-left: 2px solid #10b981 !important; padding-left: 20px !important; margin-bottom: 24px !important;">
                                    <div style="font-size: 0.75rem !important; color: #64748b !important; text-transform: uppercase !important;">Infrastructure Layer</div>
                                    <div style="font-size: 1.4rem !important; font-weight: bold !important; color: #ffffff !important; margin-top: 4px !important;">Zero-Gap Automation</div>
                                </div>
                                <div style="display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px !important;">
                                    <div style="background: rgba(255,255,255,0.02) !important; padding: 16px !important; border-radius: 8px !important; border: 1px solid rgba(255,255,255,0.05) !important;">
                                        <div style="font-size: 0.7rem !important; color: #64748b !important; font-weight: bold;">SYNC FREQUENCY</div>
                                        <div style="font-size: 1.1rem !important; color: #10b981 !important; font-weight: bold; margin-top: 4px;">Continuous</div>
                                    </div>
                                    <div style="background: rgba(255,255,255,0.02) !important; padding: 16px !important; border-radius: 8px !important; border: 1px solid rgba(255,255,255,0.05) !important;">
                                        <div style="font-size: 0.7rem !important; color: #64748b !important; font-weight: bold;">PENALTY EXPOSURE</div>
                                        <div style="font-size: 1.1rem !important; color: #ef4444 !important; font-weight: bold; margin-top: 4px;">0.00%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Side: Content Base -->
                        <div class="sec-hero-col">
                            <span style="font-size: 0.75rem !important; font-weight: 700 !important; color: #10b981 !important; background: rgba(16, 185, 129, 0.12) !important; padding: 6px 14px !important; border-radius: 20px !important; display: inline-block !important; margin-bottom: 20px !important; border: 1px solid rgba(16, 185, 129, 0.25) !important; text-transform: uppercase !important;">Guaranteed Audit Protection</span>
                            <h1 style="font-size: 3rem !important; font-weight: 900 !important; margin: 0 0 24px 0 !important; line-height: 1.15 !important; color: #ffffff !important;">Institutional Shield.<br><span style="color: #10b981 !important;">Never Miss A Filing.</span></h1>
                            <p style="color: #cbd5e1 !important; font-weight: 700 !important; font-size: 1.2rem !important; margin: 0 0 16px 0 !important;">Active database synchronization safeguards your status across state lines.</p>
                            <p style="color: #94a3b8 !important; font-size: 1.05rem !important; line-height: 1.6 !important; margin: 0 0 32px 0 !important;">Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your operational status is permanently shielded.</p>
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
      <section style="background: #ffffff; padding: 80px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 60px; align-items: center; width: 100%;">
            <div style="width: 100%; box-sizing: border-box;">
              <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; background: rgba(16, 185, 129, 0.08); padding: 4px 12px; border-radius: 6px; margin-bottom: 12px;">Compliance Bulletins</span>
              <h2 style="color: #0a1f44; font-size: 2.6rem; font-weight: 900; margin: 0 0 16px 0; line-height: 1.15; letter-spacing: -0.5px;">Stay Informed. <br><span style="color: #10b981;">Secure Growth.</span></h2>
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin: 0; max-width: 580px;">Get actionable regulatory deadline text flashes, corporate filing advice, and federal state policy change updates sent straight to your box. Zero clutter. Direct compliance updates.</p>
            </div>
            <div style="width: 100%; box-sizing: border-box;">
              <form action="#" method="POST" style="display: flex; gap: 14px; width: 100%; background: #ffffff; border: 1px solid #f1f5f9; padding: 20px; border-radius: 16px; box-shadow: 0 20px 40px rgba(10,31,68,0.06), 0 1px 3px rgba(10,31,68,0.02);">
                <input type="email" placeholder="Enter your business email..." required aria-label="Business Email" style="flex: 1; padding: 16px 22px; font-size: 0.95rem; font-weight: 500; border-radius: 8px; border: none; background: #ffffff; color: #0a1f44; outline: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08); transition: box-shadow 0.25s ease;" onfocus="this.style.boxShadow='inset 0 2px 4px rgba(0,0,0,0.02), 0 0 0 3px rgba(16, 185, 129, 0.15), 0 0 0 1px #10b981'" onblur="this.style.boxShadow='inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08)'">
                <button type="submit" style="background: #10b981; color: #ffffff; border: none; font-weight: 700; font-size: 0.95rem; padding: 0 32px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); transition: all 0.2s;" onmouseover="this.style.backgroundColor='#0e9f6e'; this.style.transform='translateY(-1px)';" onmouseout="this.style.backgroundColor='#10b981'; this.style.transform='translateY(0)';">Subscribe</button>
              </form>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 14px; font-size: 0.75rem; color: #64748b; padding-left: 4px;">
                <span style="color: #10b981; font-weight: 800; letter-spacing: 0.05em;">🔒 ENCRYPTED GATEWAY</span> Your data is fully shielded under 256-bit protocol architectures.
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
 * Maps out your 4-part asset schema using the dynamic page slug text variable.
 */
function compileDynamicLayoutProperties(targetId, suffix) {
  // 1. Extract the lowercase page name variable straight from the active HTML tag
  const slug = targetId.replace(suffix, "").toLowerCase().trim();
  
  // 2. Format the slug token string into clean Title Case words for headers
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  // 3. Return the exact paths by combining your directories, page names, and extensions
  return {
    slug: slug,
    title: title,
    heroImage: 'images/' + slug + '-hero.jpg',
    secbImage: 'images/' + slug + '-secb.jpg',
    seccImage: 'images/' + slug + '-secc.jpg',
    secdImage: 'images/' + slug + '-secd.jpg'
  };
}



// --- CENTRAL DATA ORCHESTRATOR ROUTER SYSTEM ---
async function renderMasterSystem() {
  try {
    const activeSlug = window.location.pathname.split("/").pop().replace(".html", "").trim().toLowerCase();
    const cleanPageKey = (!activeSlug || activeSlug === "home" || activeSlug === "index") ? "index" : activeSlug;

    let dbRow = null;
    try {
      const backupUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
      const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
      const endpoint = backupUrl + '/rest/v1/services?select=*&slug=eq.' + cleanPageKey;
      
      const response = await fetch(endpoint, {
        method: "GET",
        headers: { "apikey": backupKey, "Authorization": "Bearer " + backupKey, "Accept": "application/json" }
      });
      if (response.ok) {
        const rawJsonPayloadArray = await response.json();
        if (rawJsonPayloadArray && rawJsonPayloadArray.length > 0) {
          dbRow = rawJsonPayloadArray[0];
        }
      }
    } catch (netErr) {
      console.warn("⚠️ Database query fallback active.", netErr);
    }

    const heroTarget = document.querySelector('[id$="-hero-zone"]');
    if (!heroTarget) return;

    const meta = compileDynamicLayoutProperties(heroTarget.id, "-hero-zone");
    if (dbRow && dbRow.service_title) {
      meta.title = dbRow.service_title;
    }

    document.title = meta.title + " Registration & Filing Services | filings4u";

    // 🎯 SECTION 1: Global Site Navigation (White Background)
    if (typeof renderDynamicGlobalCorporateNavigation === "function") {
      renderDynamicGlobalCorporateNavigation("global-platform-navigation-zone");
    }

    // 🎯 SECTION 2: Dynamic Branded Page Hero (White Background)
    if (typeof renderMasterHeroEngine === "function") {
      renderMasterHeroEngine(heroTarget.id, meta);
    }

    // 🎯 SECTION 3: Enterprise Metrics Dashboard Board (Navy Dark Background)
    if (typeof renderMasterMetricsEngine === "function") {
      renderMasterMetricsEngine(meta.slug + "-metrics-zone", dbRow);
    }

    // 🎯 SECTION 4: Live 3-Card Layout Pricing Matrix (White Background)
    if (typeof renderMasterPricingEngine === "function") {
      renderMasterPricingEngine(meta.slug + "-package-pricing-cards-root", meta);
    }

    // 🎯 SECTION 5: On-Demand Concierge Stream Feed Logs (Navy Dark Background)
    if (typeof renderMasterConciergeFeedEngine === "function") {
      renderMasterConciergeFeedEngine(meta.slug + "-launchpad-zone", meta);
    }

    // 🎯 SECTION 6: Startup Launchpad Exploration Split Block (White Background) -> FIXED TARGET CONTAINER
    if (typeof renderMasterStartupLaunchpadEngine === "function") {
      renderMasterStartupLaunchpadEngine(meta.slug + "-trust-zone", meta);
    }

    // 🎯 SECTION 7: Institutional Audit Trust Shield Matrix (Navy Dark Background) -> FIXED TARGET CONTAINER
    if (typeof renderMasterTrustShieldMatrix === "function") {
      renderMasterTrustShieldMatrix(meta.slug + "-trust-zone", meta);
    }

    // 🎯 SECTION 8: Email Subscription Capture Interface Module (White Background)
    if (typeof renderMasterSubscribeEngine === "function") {
      renderMasterSubscribeEngine("dynamic-subscribe-placement-zone", meta);
    }

    // 🎯 SITE FOOTER: Global Corporate Site Footer Matrix (Navy Dark Background)
    if (typeof renderDynamicGlobalCorporateFooter === "function") {
      renderDynamicGlobalCorporateFooter("global-platform-footer-zone");
    }

    console.log("🏁 Balanced 8-section layout system initialized for: " + meta.slug);
  } catch (err) {
    console.error("❌ Component System Crash Redirected:", err);
  }
}

// Bind load system to DOM setup lifecycle events safely
document.addEventListener("DOMContentLoaded", renderMasterSystem);





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


// NEW: Automated Hero Rendering Addition Block
function renderMasterHeroEngine(targetId) {
    try {
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // Detect if this is the homepage anchor wrapper or a standalone service profile layout
        let slug = "index";
        if (targetId !== "index-hero-zone" && targetId !== "dynamic-hero-zone") {
            slug = targetId.replace("-hero-zone", "").toLowerCase().trim();
        } else {
            // Direct raw path detection layout selector rules fallback engine
            const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
            if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
                slug = rawPathname.replace(".html", "");
            }
        }

        const profile = window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug];
        if (!profile) {
            console.warn(`Profile configuration missing for initialization key: ${slug}`);
            return;
        }

        // Explicitly forces the dynamic naming model requested string: images/page-name-hero.jpg
        const dynamicHeroImgSrc = `images/${slug}-hero.jpg`;

        // 🌟 SYMMETRICAL COMPACT GAP FIX: Set both top and bottom padding strictly to 80px to make them identical and tight.
        // 🌟 GLOBAL CSS HOOKS: Integrated your custom mobile classes to cleanly stack image at top and text at bottom.
        zone.innerHTML = `
        <section style="padding: 80px 0 80px 0 !important; background: #ffffff; color: #0a1f44; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; overflow: hidden; margin-bottom: 0 !important;">
            
            <!-- .responsive-hero-grid parent hook -->
            <div class="responsive-hero-grid" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; box-sizing: border-box;">
                
                <!-- TEXT COLUMN (Falls to bottom on mobile via your global flex rules) -->
                <div style="flex: 1; min-width: 320px; box-sizing: border-box;">
                    <span style="background: rgba(16,185,129,0.1); color: #10b981; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; display: inline-block;">${profile.pill}</span>
                    
                    <!-- .hero-headline utility hook -->
                    <h1 class="hero-headline" style="font-size: 3rem; font-weight: 800; margin: 16px 0; line-height: 1.15; color: #0a1f44;">${profile.hero_title}</h1>
                    
                    <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">${profile.hero_lead}</p>
                    <a href="llc-formation.html#pricing-framework-target" style="background: #10b981; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block;">Initialize Application &rarr;</a>
                </div>
                
                <!-- IMAGE COLUMN (Flips to top on mobile via your .hero-image-container order: 1 important stylesheet assignment) -->
                <div class="hero-image-container" style="flex: 1; min-width: 320px; text-align: center; box-sizing: border-box;">
                    
                    <!-- .hero-display-img framework selector hook -->
                    <img src="${dynamicHeroImgSrc}" class="hero-display-img" alt="${profile.name} Framework Layout Preview" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15);" onerror="this.onerror=null; this.src='https://unsplash.com';">
                </div>
                
            </div>
        </section>
        `;
    } catch (err) {
        console.error("Hero rendering critical engine error:", err);
    }
}



// Global initialization router execution loop
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[id$="-metrics-zone"]').forEach(zone => {
    renderMasterMetricsEngine(zone.id, null);
  });
  document.querySelectorAll('[id$="-hero-zone"]').forEach(zone => {
    renderMasterHeroEngine(zone.id);
  });
});





// --- MODULE 4: DYNAMIC PACKAGE PRICING GRID INJECTION LAYER ---
function renderMasterPricingEngine(targetId) {
  try {
    const zone = document.getElementById(targetId);
    if (!zone) return;

    // Extract database slug properties cleanly
    const slug = targetId.replace("-package-pricing-cards-root", "").toLowerCase().trim();
    const pricingData = window.GLOBAL_COMPANY_PRICING && window.GLOBAL_COMPANY_PRICING.packages[slug];
    if (!pricingData) {
      console.warn(`No price object config structured for selector profile: ${slug}`);
      return;
    }

    // Helper functions to construct bullet strings securely without markup re-rendering bugs
    const makeBulletsHTML = (array) => {
      return array.map(b => `<li style="margin-bottom: 12px; color: #475569; font-size: 0.95rem; line-height: 1.4; list-style-type: none; padding-left: 20px; position: relative;"><span style="position: absolute; left: 0; color: #10b981; font-weight: bold;">✓</span>${b}</li>`).join("");
    };

    // 🌟 ENHANCEMENT: Added id="pricing-framework-target" to the master container section
    zone.innerHTML = `
      <section id="pricing-framework-target" style="padding: 80px 0; background: #f8fafc; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box;">
        <div class="site-width-alignment-guard" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box;">
          <div style="text-align: center; margin-bottom: 60px;">
            <h2 style="font-size: 2.5rem; font-weight: 800; color: #0a1f44; margin: 0 0 12px 0;">Flexible Pricing Framework Options</h2>
            <p style="color: #64748b; font-size: 1.1rem; margin: 0;">Select the optimal processing speed and protection depth your operation requires.</p>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; width: 100%; box-sizing: border-box; align-items: stretch;">
            <!-- Tier 1: Starter -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px 30px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
              <div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #0a1f44; margin: 0 0 8px 0;">Starter Package</h3>
                <div style="margin-bottom: 24px;"><span style="font-size: 2.5rem; font-weight: 800; color: #0a1f44;">$${pricingData.starter.toFixed(2)}</span><span style="color: #64748b; font-size: 0.95rem;"> / registration</span></div>
                <ul style="padding: 0; margin: 0 0 30px 0;">${makeBulletsHTML(pricingData.bullets.starter)}</ul>
              </div>
              <a href="wizard.html?plan=starter&service=${slug}" style="background: #0a1f44; color: #ffffff; text-align: center; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; display: block; font-size: 1rem;">Select Starter Plan</a>
            </div>
            <!-- Tier 2: Compliance (Most Popular Highlighted) -->
            <div style="background: #ffffff; border: 2px solid #10b981; border-radius: 16px; padding: 40px 30px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; position: relative; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);">
              <span style="position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #10b981; color: #ffffff; padding: 4px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Most Popular Option</span>
              <div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #0a1f44; margin: 0 0 8px 0;">Compliance Guard</h3>
                <div style="margin-bottom: 24px;"><span style="font-size: 2.5rem; font-weight: 800; color: #10b981;">$${pricingData.compliance.toFixed(2)}</span><span style="color: #64748b; font-size: 0.95rem;"> / registration</span></div>
                <ul style="padding: 0; margin: 0 0 30px 0;">${makeBulletsHTML(pricingData.bullets.compliance)}</ul>
              </div>
              <a href="wizard.html?plan=compliance&service=${slug}" style="background: #10b981; color: #ffffff; text-align: center; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; display: block; font-size: 1rem;">Select Compliance Plan</a>
            </div>
            <!-- Tier 3: Enterprise -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px 30px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
              <div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: #0a1f44; margin: 0 0 8px 0;">Enterprise Asset Suite</h3>
                <div style="margin-bottom: 24px;"><span style="font-size: 2.5rem; font-weight: 800; color: #0a1f44;">$${pricingData.enterprise.toFixed(2)}</span><span style="color: #64748b; font-size: 0.95rem;"> / registration</span></div>
                <ul style="padding: 0; margin: 0 0 30px 0;">${makeBulletsHTML(pricingData.bullets.enterprise)}</ul>
              </div>
              <a href="wizard.html?plan=enterprise&service=${slug}" style="background: #0a1f44; color: #ffffff; text-align: center; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; display: block; font-size: 1rem;">Select Enterprise Plan</a>
            </div>
          </div>
        </div>
      </section>
    `;

    // 🌟 SELF-CONTAINED ROUTING ENGINE: Listens for application button clicks automatically on render
    setTimeout(() => {
      const pageAnchorButtons = document.querySelectorAll('a');
      pageAnchorButtons.forEach(btn => {
        const text = btn.textContent || "";
        if (text.includes("Initialize Application") || text.includes("Initialize Local Application")) {
          
          btn.addEventListener("click", function(e) {
            const pricingTarget = document.getElementById("pricing-framework-target");
            if (pricingTarget) {
              // Smoothly scroll down if the grid exists on the page
              e.preventDefault();
              pricingTarget.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              // Fall back to landing page URL routing with target hash fragment if clicked from elsewhere
              btn.setAttribute("href", "llc-formation.html#pricing-framework-target");
            }
          });

        }
      });
    }, 50);

  } catch (err) {
    console.error("Pricing cards runtime injection error:", err);
  }
}


// Update the current global execution block to auto-run the pricing card loops too
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[id$="-package-pricing-cards-root"]').forEach(zone => {
    renderMasterPricingEngine(zone.id);
  });
});


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
              <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin: 0; max-width: 580px;">Get actionable regulatory deadline text flashes, corporate filing advice, and federal state policy change updates sent straight to your box. Zero clutter. Direct compliance updates for your ` + meta.title + ` files.</p>
            </div>
            
            <!-- RIGHT INPUT FORM BOX INTERFACE -->
            <div style="width: 100%; box-sizing: border-box;">
              <form action="#" method="POST" style="display: flex; gap: 14px; width: 100%; background: #ffffff; border: 1px solid #f1f5f9; padding: 20px; border-radius: 16px; box-shadow: 0 20px 40px rgba(10,31,68,0.06), 0 1px 3px rgba(10,31,68,0.02);">
                <input type="email" placeholder="Enter your business email..." required aria-label="Business Email" style="flex: 1; padding: 16px 22px; font-size: 0.95rem; font-weight: 500; border-radius: 8px; border: none; background: #ffffff; color: #0a1f44; outline: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08); transition: box-shadow 0.25s ease;" onfocus="this.style.boxShadow='inset 0 2px 4px rgba(0,0,0,0.02), 0 0 0 3px rgba(16, 185, 129, 0.15), 0 0 0 1px #10b981'" onblur="this.style.boxShadow='inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08)'">
                <button type="submit" style="background: #10b981; color: #ffffff; border: none; font-weight: 700; font-size: 0.95rem; padding: 0 32px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); transition: all 0.2s;" onmouseover="this.style.backgroundColor='#0e9f6e'; this.style.transform='translateY(-1px)';" onmouseout="this.style.backgroundColor='#10b981'; this.style.transform='translateY(0)';">Subscribe</button>
              </form>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 14px; font-size: 0.75rem; color: #64748b; padding-left: 4px;">
                <span style="color: #10b981; font-weight: 800; letter-spacing: 0.05em;">🔒 ENCRYPTED GATEWAY</span> Your data is fully shielded under 256-bit protocol architectures.
              </div>
            </div>
            
          </div>
        </div>
      </section>
    `;
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
      <nav style="font-family: system-ui, sans-serif; background: #ffffff; border-bottom: 1px solid #e2e8f0; width: 100%;">
        <div class="nav-content-wrapper" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; display: flex; justify-content: space-between; align-items: center; height: 80px; box-sizing: border-box;">
          
          <!-- BRAND LOGO -->
          <a href="index.html" class="logo-link" style="display: flex; align-items: center;">
            <img src="images/logo.png" alt="filings4u" class="logo" style="height: 40px; width: auto; object-fit: contain;">
          </a>
          
         <!-- FIXED: Added onclick="toggleMobileMenu()" to trigger the script -->
<button class="mobile-toggle-btn" id="mobile-menu-trigger" type="button" aria-label="Toggle Navigation" aria-expanded="false" style="position: relative; z-index: 99999; pointer-events: auto;">☰</button>
          
          <!-- DESKTOP DROPDOWN ARCHITECTURE LINK SYSTEM -->
          <div class="nav-links" style="display: flex; align-items: center; gap: 32px;">
            
            <!-- FORMATIONS DROPDOWN -->
            <div class="nav-item-dropdown static-dropdown" style="position: relative;">
              <a href="#" style="color: #0a1f44; text-decoration: none; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center;">Formations <span style="font-size:0.7rem; margin-left:4px;">▼</span></a>
              <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Popular Formations</span>
                  <a href="llc-formation.html">LLC Formation</a>
                  <a href="corporations.html">Corporations (C/S-Corp)</a>
                  <a href="sole-proprietorship.html">Sole Proprietorship</a>
                </div>
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Specialty Structures</span>
                  <a href="dba-registration.html">DBA Registration</a>
                  <a href="nonprofits.html">Nonprofit Organization</a>
                  <a href="series-llc.html">Series LLC</a>
                </div>
              </div>
            </div>

            <!-- COMPLIANCE DROPDOWN -->
            <div class="nav-item-dropdown static-dropdown" style="position: relative;">
              <a href="#" style="color: #0a1f44; text-decoration: none; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center;">Compliance <span style="font-size:0.7rem; margin-left:4px;">▼</span></a>
              <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Entity Health</span>
                  <a href="annual-reports.html">Annual Reports</a>
                  <a href="operating-agreement.html">Operating Agreement</a>
                  <a href="registered-agent.html">Registered Agent</a>
                </div>
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Licensing & Exit</span>
                  <a href="business-licenses.html">Business Licenses</a>
                  <a href="employer-id-ein.html">Employer ID (EIN)</a>
                  <a href="dissolution.html">Entity Dissolution</a>
                </div>
              </div>
            </div>

            <!-- TAX FILINGS DROPDOWN -->
            <div class="nav-item-dropdown static-dropdown" style="position: relative;">
              <a href="#" style="color: #0a1f44; text-decoration: none; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center;">Tax Filings <span style="font-size:0.7rem; margin-left:4px;">▼</span></a>
              <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Income & Operations</span>
                  <a href="federal-tax.html">Federal Income Tax</a>
                  <a href="state-tax.html">State Income Tax</a>
                  <a href="franchise-tax.html">Franchise Tax Filing</a>
                </div>
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Sales & Payroll</span>
                  <a href="sales-tax-registration.html">Sales Tax Registration</a>
                  <a href="payroll-tax-940-941.html">Payroll Tax (940/941)</a>
                  <a href="heavy-use-tax-2290.html">Heavy Use Tax (2290)</a>
                </div>
              </div>
            </div>

            <!-- DOT & FLEET DROPDOWN -->
            <div class="nav-item-dropdown static-dropdown" style="position: relative;">
              <a href="#" style="color: #0a1f44; text-decoration: none; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center;">DOT & Fleet <span style="font-size:0.7rem; margin-left:4px;">▼</span></a>
              <div class="dropdown-content mega-panel-three-col">
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Authority Setup</span>
                  <a href="owner-operators.html">Owner Operators</a>
                  <a href="trucker-authority.html">Trucker Authority</a>
                  <a href="broker-authority.html">Broker Authority</a>
                  <a href="ucr-registration.html">UCR Registration</a>
                </div>
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Compliance & Regs</span>
                  <a href="dot-consortium.html">DOT Consortium</a>
                  <a href="driver-file.html">Driver Qualification File</a>
                  <a href="process-agents-boc-3.html">Process Agent (BOC-3)</a>
                  <a href="international-fuel-tax-agreement-ifta.html">IFTA Registration</a>
                </div>
                <div class="mega-column">
                  <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Insurance & Risk</span>
                  <a href="licenses-permits.html">Licenses & Permits</a>
                  <a href="trucker-insurance.html">Trucker Insurance</a>
                  <a href="broker-insurance.html">Broker Insurance</a>
                  <a href="new-entrant-audit.html">New Entrant Audit</a>
                </div>
              </div>
            </div>

            <a href="https://portal.filings4u.com/client-dashboard.html" class="btn-client-portal" style="background: #10b981; color: #ffffff; text-decoration: none; font-weight: 700; padding: 10px 20px; border-radius: 6px; font-size: 0.9rem; transition: background 0.2s;">Client Portal</a>
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
      <p>Providing enterprise-grade compliance infrastructure for the modern logistics and corporate landscape.</p> 
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
        <li><a href="international-fuel-tax-agreement-ifta.html">IFTA Filings</a></li> 
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
        <li><a href="https://portal.filings4u.com/portal-login.html">Client Portal</a></li> 
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

// --- DATABASE: DASHBOARD STATES REGISTRY CONFIGURATION ---
const STATES_DASHBOARD_REGISTRY = {
  delaware: {
    name: "State of Delaware",
    portal: "OFFICIAL CORPORATE FILINGS PORTAL",
    title: "State Filing Checklist",
    steps: [
      { title: "Official Business Registration", desc: "We check name availability with local registries and file your official Articles of Organization immediately to create your protective asset boundary.", color: "#10b981" },
      { title: "Local DBA and Trade Name Handling", desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.", color: "#10b981" },
      { title: "Tax ID & Sales Ledger Setup", desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.", color: "#38bdf8" }
    ]
  },
  nevada: {
    name: "State of Nevada",
    portal: "NV SILVER FLUME SYSTEM",
    title: "Nevada Filing Checklist",
    steps: [
      { title: "Official Business Registration", desc: "Direct filing with the Nevada Secretary of State. We verify name availability and lodge your organizational paperwork instantly.", color: "#10b981" },
      { title: "Local DBA and Trade Name Handling", desc: "File your trade names locally and establish your asset protection protocols under Nevada's favorable privacy laws.", color: "#10b981" },
      { title: "Tax ID & Sales Ledger Setup", desc: "Obtain your IRS Federal EIN and instantly map your business structure to Nevada's zero-corporate-tax infrastructure.", color: "#38bdf8" }
    ]
  },
  wyoming: {
    name: "State of Wyoming",
    portal: "COMMERCIAL REGISTRY CONNECTION",
    title: "Wyoming Filing Checklist",
    steps: [
      { title: "Official Business Registration", desc: "Direct filing with the Wyoming Secretary of State. We verify name availability and lodge your organizational paperwork instantly.", color: "#10b981" },
      { title: "Local DBA and Trade Name Handling", desc: "File your trade names locally and establish your asset protection protocols under Wyoming's favorable privacy laws.", color: "#10b981" },
      { title: "Tax ID & Sales Ledger Setup", desc: "Obtain your IRS Federal EIN and instantly map your business structure to Wyoming's zero-corporate-tax infrastructure.", color: "#38bdf8" }
    ]
  },
  california: {
    name: "State of California",
    portal: "CA BIZFILE ONLINE NODE",
    title: "California Filing Checklist",
    steps: [
      { title: "Official Business Registration", desc: "Essential framework for businesses operating locally within the California market. Streamlines regional sales permits, local compliance, and franchise taxes.", color: "#10b981" },
      { title: "Local DBA and Trade Name Handling", desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.", color: "#10b981" },
      { title: "Tax ID & Sales Ledger Setup", desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.", color: "#38bdf8" }
    ]
  },
  texas: {
    name: "State of Texas",
    portal: "TX SOSDIRECT SYSTEM",
    title: "Texas Filing Checklist",
    steps: [
      { title: "Official Business Registration", desc: "Top choice for establishing physical local operations. Synchronizes direct tax filings seamlessly with the Texas Comptroller of Public Accounts.", color: "#10b981" },
      { title: "Local DBA and Trade Name Handling", desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.", color: "#10b981" },
      { title: "Tax ID & Sales Ledger Setup", desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.", color: "#38bdf8" }
    ]
  },
  florida: {
    name: "State of Florida",
    portal: "SUNBIZ AUTOMATED FILING NODE",
    title: "State Filing Checklist",
    steps: [
      { title: "Official Business Registration", desc: "We check name availability with local registries and file your official Articles of Organization immediately to create your protective asset boundary.", color: "#10b981" },
      { title: "Local DBA and Trade Name Handling", desc: "Register matching commercial trade names with your local county or municipality so you can legally brand your business services.", color: "#10b981" },
      { title: "Tax ID & Sales Ledger Setup", desc: "Secure your official Federal EIN from the IRS and coordinate sales tax settings with your state's Department of Revenue seamlessly.", color: "#38bdf8" }
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
      <section style="padding: 90px 0; background: #ffffff; color: #0a1f44; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
        <div class="site-width-alignment-guard" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box;">
          
          <div style="text-align: center; margin-bottom: 50px;">
            <!-- 📸 MATCHED BADGE: Green capsule with thin border -->
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.12); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.25);">Choose Your Location</span>
            <!-- 📸 MATCHED H2: Ultra-bold font weight, line height, and two-line split accent -->
            <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">Launch Your Business. <span style="color: #10b981;">Locally.</span></h2>
          </div>

          <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: stretch; gap: 40px; width: 100%; box-sizing: border-box;">
            
            <!-- Left Side Column Panel (Balanced 1:1 Equal Width) -->
            <div style="flex: 1; min-width: 320px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-start;">
              <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0 0 8px 0; color: #0a1f44;">Select Your State</h3>
              <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin: 0 0 24px 0;">Pick where your business operates to review processing timelines and state rules.</p>
              
              <!-- 🌟 SCROLLBAR WRAPPER CONTAINER: Implements vertical scroll mechanics for the options below -->
              <div style="max-height: 460px; overflow-y: auto; padding-right: 8px; box-sizing: border-box; width: 100%;">
                
                <h4 style="margin: 0 0 12px 0; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Top for Corporations</h4>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
                  ${["delaware", "nevada", "wyoming"].map(k => `
                    <div class="state-opt" data-key="${k}" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease;">
                      <div>
                        <div style="font-weight: 600; font-size: 1rem; color: #0a1f44;">${sd[k] ? sd[k].name : k}</div>
                        <span style="font-size: 0.75rem; color: #64748b; font-family: monospace;">Commercial Registry Connection</span>
                      </div>
                      <span style="font-size: 0.8rem; font-weight: 600; color: #475569; font-family: monospace;">ONLINE</span>
                    </div>
                  `).join('')}
                </div>

                <h4 style="margin: 0 0 12px 0; color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Top for Local Businesses</h4>
                <div style="display: flex; flex-direction: column; gap: 10px; padding-bottom: 4px;">
                  ${["california", "texas", "florida"].map(k => `
                    <div class="state-opt" data-key="${k}" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease;">
                      <div>
                        <div style="font-weight: 600; font-size: 1rem; color: #0a1f44;">${sd[k] ? sd[k].name : k}</div>
                        <span style="font-size: 0.75rem; color: #64748b; font-family: monospace;">Local Revenue Node</span>
                      </div>
                      <span style="font-size: 0.8rem; font-weight: 600; color: #475569; font-family: monospace;">ONLINE</span>
                    </div>
                  `).join('')}
                </div>

              </div>
            </div>

            <!-- Right Side Column Panel (Matched #0a1f44 Navy & Balanced 1:1 Width) -->
            <div style="flex: 1; min-width: 320px; background: #0a1f44; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 36px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden;">
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
              
              <div style="position: relative; z-index: 10;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(244,247,250,0.08); padding-bottom: 16px; margin-bottom: 24px;">
                  <div style="text-align: left;">
                    <span id="p-sub" style="font-size: 0.75rem; font-weight: 700; color: #10b981; font-family: monospace; letter-spacing: 0.5px;">REGISTRATION PROFILE OVERVIEW</span>
                    <h4 id="c-title" style="margin: 2px 0 0 0; font-size: 1.2rem; font-weight: 800; color: #ffffff;">State Filing Checklist</h4>
                  </div>
                  <div style="background: rgba(16,185,129,0.1); color: #10b981; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; font-family: monospace; font-weight: bold; border: 1px solid rgba(16,185,129,0.2); align-self: flex-start;">
                    NETWORK READY
                  </div>
                </div>

                <div id="dynamic-steps-container" style="display: flex; flex-direction: column; gap: 18px; margin-bottom: 30px;"></div>
              </div>

              <div style="position: relative; z-index: 10; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
                <div>
                  <div style="font-size: 0.75rem; color: #64748b; text-transform: uppercase;">Average Gateway Turnaround</div>
                  <div id="c-time" style="font-size: 1.5rem; font-weight: bold; color: #ffffff; font-family: monospace; margin-top: 2px;">Instant Submission</div>
                </div>
                <!-- 🌟 FIXED ROUTING ANCHOR PATH -->
                <a id="c-btn" href="llc-formation.html#pricing-framework-target" style="background: #10b981; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 700; font-size: 0.9rem;">Initialize Local Application &rarr;</a>
              </div>

            </div>

          </div>
        </div>
      </section>
    `;

    // Dynamic UI Update handler method definition
    function updateUI(key) {
      const d = sd[key];
      if (!d) return;

      // Fix applied here: Targeting correct ID element from DOM layout hierarchy
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
          <div style="display: flex; gap: 14px; align-items: start;">
            <div style="width: 8px; height: 8px; background: ${s.color}; border-radius: 50%; margin-top: 6px; flex-shrink: 0;"></div>
            <div>
              <span style="display: block; font-weight: 700; font-size: 0.95rem; color: #ffffff;">${s.title}</span>
              <p style="margin: 2px 0 0 0; font-size: 0.85rem; color: #94a3b8; line-height: 1.4;">${s.desc}</p>
            </div>
          </div>
        `).join('');
      }

      // 🌟 FIXED EVENT DESTRUCTURING BLINK OVERRIDE
      const cBtnElement = document.getElementById("c-btn");
      if (cBtnElement) {
        cBtnElement.href = "llc-formation.html#pricing-framework-target";
      }

      zone.querySelectorAll(".state-opt").forEach(el => {
        const rowKey = el.getAttribute("data-key");
        const titleDiv = el.querySelector("div > div");
        const label = el.querySelector("span:last-child");

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
});updateUI("delaware");} catch (err) {console.error("Dashboard error:", err);}}





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