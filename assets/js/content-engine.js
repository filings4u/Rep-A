

/**
 * ============================================================================
 * 📦 PLATFORM SYSTEM METRICS DYNAMIC CONTENT CATALOG
 * Central data sheet tracking all non-wizard page copy variables programmatically
 * ============================================================================
 */
window.PLATFORM_STATIC_PAGES_DATA = window.PLATFORM_STATIC_PAGES_DATA || {
  // 📝 SECTION 1: HERO COPY REGISTRY
  "index": {
    pill: "Enterprise Ecosystem",
    title: "The Hub for <br><span style='color: #10b981;'>Total Compliance.</span>",
    lead: "Automate your corporate structures and DOT authorities from one single dashboard. We provide the technical handshake between you and state, federal, and local jurisdictions.",
    badge: "Active Entity Sync: 10,000+ Verified",
    btn_text: "Get Started &rarr;",
    btn_url: "get-started.html",
    img_src: "images/hero-image.jpg",
    img_alt: "Compliance Dashboard Preview"
  },

  // 📊 SECTION 2: METRICS CARD REGISTRY
  "index_metrics": {
    section_title: "Corporate Filing Infrastructure",
    status_badge: "ALL CLEAR: SECURE REST GATEWAYS ACTIVE",
    cards: [
      {
        icon: "🏢",
        value: "142K+",
        title: "Corporate Entities Formed",
        desc: "Authorized Articles of Organization across all 50 State Secretary registries."
      },
      {
        icon: "🚛",
        value: "38,410",
        title: "Active Transits Monitored",
        desc: "USDOT & MC operating authorities actively synchronized with FMCSA core data links."
      },
      {
        icon: "⚡",
        value: "1.8s",
        title: "Average API Pipeline Turn",
        desc: "Secure, real-time rest requests to launch bank check intents and background pre-saves.",
        green_text: true
      },
      {
        icon: "🔒",
        value: "99.98%",
        title: "Filing Accuracy Quotient",
        desc: "Sophisticated layout rules eliminate common syntax rejection errors from state systems."
      }
    ]
  },

    // Place this directly inside your window.PLATFORM_STATIC_PAGES_DATA object wrapper:
  "index_alternating": {
    img_src: "images/local-business.jpg",
    img_alt: "Local business owner working on compliance",
    pill: "Main Street Growth",
    title: "Neighborhood Focus. <br><span style='color: #10b981;'>Built For Community.</span>",
    sub_heading: "Streamlined corporate filings designed for local business peace of mind.",
    context_copy: "Protect your independent venture with compliance tools built for neighborhood startups, family shops, and local operators. We handle your annual reports, entity formations, and state requirements under a secure corporate architecture so you can stay focused on serving your immediate neighborhood clients.",
    link_url: "formations.html",
    link_text: "Explore Local Services &rarr;"
  },

    // Place this directly inside your window.PLATFORM_STATIC_PAGES_DATA object wrapper:
  "index_expertise": {
    pill: "Neighborhood Concierge",
    title: "On-Demand Expertise",
    lead: "Skip automated state phone lines and complex government legal forms. Connect instantly with our dedicated corporate filing experts.",
    events: [
      {
        title: "Dedicated Account Liaison",
        desc: "Direct human routing for complex state business applications",
        status: "INCLUDED"
      },
      {
        title: "Pre-Submission Document Audits",
        desc: "Our specialists cross-verify address and entity name spelling rules",
        status: "VERIFIED"
      },
      {
        title: "Automated Franchise Tax Alerts",
        desc: "Proactive neighborhood deadline notifications via phone or email",
        status: "LIVE"
      }
    ]
  },


    // Place this directly inside your window.PLATFORM_STATIC_PAGES_DATA object wrapper:
  "index_startup": {
    pill: "Launch Infrastructure",
    title: "Startup Launchpad. <br><span style='color: #10b981;'>Built For Scale.</span>",
    sub_heading: "Turn your business idea into an officially recognized state legal entity overnight.",
    context_copy: "Accelerate your early-stage venture with robust entity setup frameworks built for founders. We automate LLC formations, corporate bylaw preparation, tax ID filings (EIN), and state registry submissions under an enterprise architecture so you can legally issue shares, open commercial accounts, and protect your capital from day one.",
    link_url: "formations.html",
    link_text: "Launch Your Startup &rarr;",
    img_src: "images/startup-launch.jpg",
    img_alt: "Entrepreneurs launching a new startup business venture"
  },

  // Place this directly inside your window.PLATFORM_STATIC_PAGES_DATA object wrapper:
  "index_trust": {
    pill: "Guaranteed Audit Protection",
    title: "Institutional Shield. <br><span style='color: #10b981;'>Never Miss A Filing.</span>",
    sub_heading: "Active database synchronization safeguards your status across state lines.",
    context_copy: "Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your operational status is permanently shielded.",
    link_url: "compliance.html",
    link_text: "Explore Security Infrastructure &rarr;",
    img_src: "images/regulatory-compliance.jpg",
    img_alt: "Entrepreneurs launching a new startup business venture"
  }

};


/**
 * Injects a 1450px layout grid block populated dynamically based on the active URL path.
 * Reads text from either the Supabase database row or the local page metadata catalog.
 */
function renderDynamicHeroSection(targetElementId, dbRowData = null) {
  const node = document.getElementById(targetElementId);
  if (!node) return;

  // 1. Programmatically extract clean template name token string
  const urlPathname = window.location.pathname;
  let detectedPageKey = urlPathname.split("/").pop().replace(".html", "").trim().toLowerCase();

  // Helper utility to safely sanitize user or database generated strings against XSS attacks
  const sanitize = (str) => {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  };

  if (!detectedPageKey || detectedPageKey === "index copy" || detectedPageKey === "home") {
    detectedPageKey = "index";
  }

  // Determine spacing and layout modifiers based on whether it is the index page
  const isIndexPage = (detectedPageKey === "index");
  const wrapperPaddingTop = isIndexPage ? "40px" : "120px";
  const gridDirectionStyle = isIndexPage ? "direction: rtl;" : "";
  const childrenDirectionStyle = isIndexPage ? "direction: ltr;" : "";

  // 2. Initialize default layout fallback values
  let heroPillText = "Compliance Management";
  let heroHeadlineText = detectedPageKey.replace(/-/g, " ").toUpperCase();
  let heroBodyText = "Providing enterprise-grade compliance infrastructure for the modern logistics and corporate landscape.";
  let heroBadgeText = "Secure Gateway Active";
  let heroButtonUrl = "get-started.html";
  let heroButtonText = "Get Started &rarr;";
  let heroImageSrc = "images/hero-image.jpg";
  let heroImageAlt = "Compliance Dashboard Preview";

  // 3. ✨ THE MATRIX ROUTING PASS: Check conditional states sequentially
  if (dbRowData) {
    heroPillText = sanitize(dbRowData.hero_pill) || "Automated Registry Systems";
    heroHeadlineText = sanitize(dbRowData.hero_headline || dbRowData.service_title) || "Corporate Launchpad";
    heroBodyText = sanitize(dbRowData.hero_body) || "Launch and manage your asset protection profiles safely.";
    heroBadgeText = sanitize(dbRowData.hero_badge) || "System Core Sync: Active";
    heroImageSrc = encodeURI(dbRowData.hero_image || "images/hero-image.jpg");
    heroImageAlt = sanitize(dbRowData.service_title) || "Service Preview";
  } else if (window.PLATFORM_STATIC_PAGES_DATA && window.PLATFORM_STATIC_PAGES_DATA[detectedPageKey]) {
    const staticCopy = window.PLATFORM_STATIC_PAGES_DATA[detectedPageKey];
    heroPillText = sanitize(staticCopy.pill);
    heroHeadlineText = sanitize(staticCopy.title);
    heroBodyText = sanitize(staticCopy.lead);
    heroBadgeText = sanitize(staticCopy.badge);
    heroButtonUrl = encodeURI(staticCopy.btn_url || "get-started.html");
    heroButtonText = sanitize(staticCopy.btn_text || "Get Started &rarr;");
    heroImageSrc = encodeURI(staticCopy.img_src || "images/hero-image.jpg");
    heroImageAlt = sanitize(staticCopy.img_alt || "Page Preview");
  }

  // 4. Render layout using assigned parameters
  node.innerHTML = `
    <main class="hero-section-wrapper" style="background: #ffffff; padding: ${wrapperPaddingTop} 0 60px 0 !important; margin-top: 0 !important; margin-bottom: 120px !important; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
      <style>
        .responsive-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%; ${gridDirectionStyle} }
        .responsive-hero-grid > * { ${childrenDirectionStyle} }
        @media (max-width: 991px) {
          .hero-section-wrapper { padding: 40px 0 40px 0 !important; margin-bottom: 40px !important; }
          .responsive-hero-grid { grid-template-columns: 1fr !important; gap: 30px !important; direction: ltr !important; }
          .responsive-hero-grid .hero-image-container { order: -1 !important; }
          .responsive-hero-grid h1 { font-size: 2.4rem !important; }
          .responsive-hero-grid h1, .responsive-hero-grid p, .responsive-hero-grid span, .responsive-hero-grid a { word-spacing: 0.08rem !important; letter-spacing: 0.01rem !important; white-space: normal !important; }
        }
      </style>
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
        <div class="responsive-hero-grid">
          <article class="content-area" style="width: 100%; box-sizing: border-box;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">${heroPillText}</span>
            <h1 style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.1; letter-spacing: -1px;">${heroHeadlineText}</h1>
            <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 24px 0;">${heroBodyText}</p>
            <div class="active-sync-badge-wrapper" style="display: flex; align-items: center; gap: 10px; margin-bottom: 32px;">
              <div class="badge-line" style="height: 2px; width: 24px; background: #10b981;"></div>
              <span class="badge-text" style="color: #0a1f44; font-weight: 700; font-size: 0.9rem;">${heroBadgeText}</span>
            </div>
            <a href="${heroButtonUrl}" class="btn-main" style="background: #10b981; color: #ffffff; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 6px; display: inline-block; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); transition: background 0.2s;">${heroButtonText}</a>
          </article>
          <aside class="hero-image-container" style="display: flex; justify-content: center; width: 100%;">
            <img src="${heroImageSrc}" alt="${heroImageAlt}" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);">
          </aside>
        </div>
      </div>
    </main>
  `;
}




/**
 * Injects the Section 2 Enterprise Global Compliance Metrics & Pipeline Status block
 * programmatically using clear data parameters.
 */
function renderDynamicMetricsSection(targetElementId) {
  const node = document.getElementById(targetElementId);
  if (!node) return;

  const urlPathname = window.location.pathname;
  let detectedPageKey = urlPathname.split("/").pop().replace(".html", "").trim().toLowerCase();
  
  if (!detectedPageKey || detectedPageKey === "index copy" || detectedPageKey === "home") {
    detectedPageKey = "index";
  }

  // Construct the lookup token key matching your extended data sheet registry
  const metricsDataKey = `${detectedPageKey}_metrics`;
  const metricsCopy = window.PLATFORM_STATIC_PAGES_DATA[metricsDataKey];
  if (!metricsCopy) return;

  // Build out all metric cards programmatically to completely remove hardcoded layout rows
  let cardsHtmlPayload = "";
  metricsCopy.cards.forEach(card => {
    const numericColorValue = card.green_text ? "#10b981" : "#ffffff";
    
    cardsHtmlPayload += `
      <div class="metric-card-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 30px 24px; box-sizing: border-box; display: flex; flex-direction: column; gap: 8px; transition: border-color 0.3s; width: 100%;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
        <span style="font-size: 1.8rem; display: block; margin-bottom: 4px;">${card.icon}</span>
        <div style="font-size: 2.4rem; font-weight: 900; color: ${numericColorValue}; font-family: monospace; line-height: 1;">${card.value}</div>
        <div style="font-size: 0.95rem; font-weight: 800; color: #cbd5e1; margin-top: 4px;">${card.title}</div>
        <p style="margin: 0; font-size: 0.8rem; color: #94a3b8; line-height: 1.5; font-weight: 500;">${card.desc}</p>
      </div>
    `;
  });

  node.innerHTML = `
    <section class="enterprise-metrics-section" style="padding: 60px 0 !important; background: #0a1f44; color: #f4f7fa; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid rgba(244,247,250,0.1); padding-bottom: 24px; margin-bottom: 40px; flex-wrap: wrap; gap: 24px; width: 100%; box-sizing: border-box;">
          <div style="text-align: left; max-width: 600px;">
            <h2 style="margin: 0; font-size: 2.2rem; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">${metricsCopy.section_title}</h2>
          </div>
          <div style="text-align: right;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 700; color: #10b981; font-family: monospace; background: rgba(16,185,129,0.1); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(16,185,129,0.2);">
              <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block;"></span> ${metricsCopy.status_badge}
            </div>
          </div>
        </div>
        
        <div class="metrics-dashboard-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; width: 100%; box-sizing: border-box; margin: 0;">
          ${cardsHtmlPayload}
        </div>
      </div>
    </section>
  `;
}


/**
 * Injects Section 3: The Neighborhood Main Street Alternating Matrix Layout
 * programmatically using clear data parameters.
 */
function renderDynamicAlternatingFlowSection(targetElementId) {
  const node = document.getElementById(targetElementId);
  if (!node) return;

  const urlPathname = window.location.pathname;
  let detectedPageKey = urlPathname.split("/").pop().replace(".html", "").trim().toLowerCase();
  
  if (!detectedPageKey || detectedPageKey === "index copy" || detectedPageKey === "home") {
    detectedPageKey = "index";
  }

  // Construct the lookup token key matching your dynamic data registry profile
  const alternatingDataKey = `${detectedPageKey}_alternating`;
  const altCopy = window.PLATFORM_STATIC_PAGES_DATA[alternatingDataKey];
  if (!altCopy) return;

  node.innerHTML = `
    <section style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
      <style>
        .responsive-alternating-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%; }
        @media (max-width: 991px) {
          .responsive-alternating-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .responsive-alternating-grid .alternating-image-container { order: -1 !important; }
        }
      </style>
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
        <div class="responsive-alternating-grid">
          <div class="alternating-image-container" style="display: flex; justify-content: center; width: 100%;">
            <img src="${altCopy.img_src}" alt="${altCopy.img_alt}" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);">
          </div>
          <div style="width: 100%; box-sizing: border-box;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">${altCopy.pill}</span>
            <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">${altCopy.title}</h2>
            <p style="color: #0a1f44; font-weight: 700; font-size: 1.05rem; margin: 0 0 12px 0; line-height: 1.4;">${altCopy.sub_heading}</p>
            <p style="color: #475569; font-size: 1rem; line-height: 1.6; margin: 0 0 28px 0;">${altCopy.context_copy}</p>
            <a href="${altCopy.link_url}" class="agency-link">${altCopy.link_text}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}


/**
 * Injects Section 4: The Enterprise Global Compliance Metrics & Pipeline Status log stream
 * programmatically using clear data parameters.
 */
function renderDynamicExpertiseSection(targetElementId) {
  const node = document.getElementById(targetElementId);
  if (!node) return;

  const urlPathname = window.location.pathname;
  let detectedPageKey = urlPathname.split("/").pop().replace(".html", "").trim().toLowerCase();
  
  if (!detectedPageKey || detectedPageKey === "index copy" || detectedPageKey === "home") {
    detectedPageKey = "index";
  }

  // Construct the lookup token key matching your dynamic data registry profile
  const expertiseDataKey = `${detectedPageKey}_expertise`;
  const expCopy = window.PLATFORM_STATIC_PAGES_DATA[expertiseDataKey];
  if (!expCopy) return;

  // Build out all row log cards programmatically to completely remove hardcoded template content strings
  let logsHtmlPayload = "";
  expCopy.events.forEach(ev => {
    logsHtmlPayload += `
      <div class="border-glowing-card" style="display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: rgba(16, 185, 129, 0.02); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; box-shadow: 0 0 15px rgba(16, 185, 129, 0.05); gap: 16px; flex-wrap: wrap;">
        <div>
          <span style="font-weight: 700; font-size: 0.95rem; color: #ffffff; display: block;">${ev.title}</span>
          <span style="font-size: 0.8rem; color: #94a3b8; margin-top: 4px; display: block;">${ev.desc}</span>
        </div>
        <span style="font-family: monospace; font-size: 0.8rem; color: #10b981; font-weight: 700; background: rgba(16, 185, 129, 0.1); padding: 4px 10px; border-radius: 4px; border: 1px solid rgba(16, 185, 129, 0.2); height: fit-content; white-space: nowrap;">${ev.status}</span>
      </div>
    `;
  });

  node.innerHTML = `
    <section class="enterprise-metrics-section" style="padding: 60px 0 !important; background: #0a1f44; color: #f4f4f4; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10;">
        <div style="margin-bottom: 32px;">
          <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 6px;">${expCopy.pill}</span>
          <h2 style="color: #ffffff; font-size: 2.2rem; font-weight: 800; margin: 0 0 10px 0; line-height: 1.2;">${expCopy.title}</h2>
          <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.5; margin: 0;">${expCopy.lead}</p>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 24px;">
          ${logsHtmlPayload}
        </div>
      </div>
    </section>
  `;
}


/**
 * Injects Section 5: The Startup Exploration Layout Panel (Text Left, Image Right)
 * programmatically using clear data parameters.
 */
function renderDynamicStartupLaunchpadSection(targetElementId) {
  const node = document.getElementById(targetElementId);
  if (!node) return;

  const urlPathname = window.location.pathname;
  let detectedPageKey = urlPathname.split("/").pop().replace(".html", "").trim().toLowerCase();
  
  if (!detectedPageKey || detectedPageKey === "index copy" || detectedPageKey === "home") {
    detectedPageKey = "index";
  }

  // Construct the lookup token key matching your dynamic data registry profile
  const startupDataKey = `${detectedPageKey}_startup`;
  const startupCopy = window.PLATFORM_STATIC_PAGES_DATA[startupDataKey];
  if (!startupCopy) return;

  node.innerHTML = `
    <section style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
      <style>
        .responsive-startup-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%; }
        @media (max-width: 991px) {
          .responsive-startup-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .responsive-startup-grid .startup-image-container { order: -1 !important; }
        }
      </style>
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
        <div class="responsive-startup-grid">
          
          <div style="width: 100%; box-sizing: border-box;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">${startupCopy.pill}</span>
            <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">${startupCopy.title}</h2>
            <p style="color: #0a1f44; font-weight: 700; font-size: 1.05rem; margin: 0 0 12px 0; line-height: 1.4;">${startupCopy.sub_heading}</p>
            <p style="color: #475569; font-size: 1rem; line-height: 1.6; margin: 0 0 28px 0;">${startupCopy.context_copy}</p>
            <a href="${startupCopy.link_url}" class="agency-link">${startupCopy.link_text}</a>
          </div>
          
          <div class="startup-image-container" style="display: flex; justify-content: center; width: 100%;">
            <img src="${startupCopy.img_src}" alt="${startupCopy.img_alt}" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);">
          </div>

        </div>
      </div>
    </section>
  `;
}


/**
 * Injects Section 6: Institutional Trust & Expert Panel (Navy Accent Override)
 * programmatically using clear data parameters.
 */
function renderDynamicTrustSection(targetElementId) {
  const node = document.getElementById(targetElementId);
  if (!node) return;

  const urlPathname = window.location.pathname;
  let detectedPageKey = urlPathname.split("/").pop().replace(".html", "").trim().toLowerCase();
  
  if (!detectedPageKey || detectedPageKey === "index copy" || detectedPageKey === "home") {
    detectedPageKey = "index";
  }

  // Construct the lookup token key matching your dynamic data registry profile
  const trustDataKey = `${detectedPageKey}_trust`;
  const trustCopy = window.PLATFORM_STATIC_PAGES_DATA[trustDataKey];
  if (!trustCopy) return;

  node.innerHTML = `
    <section class="enterprise-metrics-section" style="padding: 80px 0 !important; background: #0a1f44; color: #f4f7fa; width: 100% !important; max-width: 100% !important; box-sizing: border-box; overflow: hidden; position: relative; margin: 0 !important;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10; display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 60px;">
        
        <!-- Image Column -->
        <div style="flex: 1; min-width: 320px; max-width: 550px; display: flex; justify-content: center; box-sizing: border-box;">
          <img src="${trustCopy.img_src}" alt="${trustCopy.img_alt}" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 25px 50px rgba(0, 0, 0, 0.65), 0 10px 20px rgba(0, 0, 0, 0.3);">
        </div>
        
        <!-- Text Column -->
        <div style="flex: 1; min-width: 320px; box-sizing: border-box;">
          <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.12); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.25);">${trustCopy.pill}</span>
          <h2 style="color: #ffffff; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">${trustCopy.title}</h2>
          <p style="color: #cbd5e1; font-weight: 700; font-size: 1.05rem; margin: 0 0 12px 0; line-height: 1.4;">${trustCopy.sub_heading}</p>
          <p style="color: #94a3b8; font-size: 1rem; line-height: 1.6; margin: 0 0 28px 0;">${trustCopy.context_copy}</p>
          <a href="${trustCopy.link_url}" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 0.95rem;">${trustCopy.link_text}</a>
        </div>

      </div>
    </section>
  `;
}


/**
 * Injects a highly responsive 1450px layout grid block populated with 
 * page-specific data metrics completely programmatically based on the active URL path.
 * Enforces uniform, flush horizontal snapping below the navigation bar for all pages.
 */
function renderDynamicHeroSection(targetElementId) {
  const node = document.getElementById(targetElementId);
  if (!node) return;

  const urlPathname = window.location.pathname;
  let detectedPageKey = urlPathname.split("/").pop().replace(".html", "").trim().toLowerCase();
  
  if (!detectedPageKey || detectedPageKey === "index copy" || detectedPageKey === "home") {
    detectedPageKey = "index";
  }

  const pageCopy = window.PLATFORM_STATIC_PAGES_DATA[detectedPageKey];
  if (!pageCopy) return;

  node.innerHTML = `
    <!-- 🎯 INLINE CORE DESIGN MATRIX STYLE OVERRIDES -->
    <style>
      .hero-section-wrapper {
        background: #ffffff; 
        padding: 0 0 60px 0 !important; 
        margin-top: 0 !important; 
        margin-bottom: 120px !important; 
        font-family: system-ui, sans-serif; 
        width: 100% !important; 
        max-width: 100% !important; 
        box-sizing: border-box;
      }
      .responsive-hero-grid { 
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        gap: 60px; 
        align-items: center; 
        width: 100%; 
      }
      /* 🎯 DESKTOP ALIGNMENT SYNCHRONIZATION: Snaps outer edges exactly to 1450px */
      .site-width-alignment-guard {
        width: 100% !important; 
        max-width: 1450px !important; 
        margin: 0 auto !important; 
        padding: 0 40px !important; 
        box-sizing: border-box !important;
      }
      
      /* 📱 MOBILE RESPONSIVE ADAPTATIONS */
      @media (max-width: 991px) {
        .hero-section-wrapper {
          padding: 0 0 40px 0 !important;
          margin-bottom: 60px !important;
        }
        .responsive-hero-grid { 
          grid-template-columns: 1fr !important; 
          gap: 30px !important; 
        }
        /* Forces the image column natively to the absolute top of the viewport stack */
        .responsive-hero-grid .hero-image-container { 
          order: -1 !important; 
        }
        /* Mobile responsive header text size limits */
        .responsive-hero-grid h1 {
          font-size: 2.4rem !important;
        }
        /* 🎯 THE MOBILE WORD-WRAPPING FIX: Injects horizontal breathing space between words
           and letters across mobile viewports to completely eliminate abrupt word-breaking */
        .responsive-hero-grid h1,
        .responsive-hero-grid p,
        .responsive-hero-grid span,
        .responsive-hero-grid a {
          word-spacing: 0.08rem !important;
          letter-spacing: 0.01rem !important;
          white-space: normal !important;
        }
      }
    </style>

    <main class="hero-section-wrapper">
      <div class="site-width-alignment-guard">
        <div class="responsive-hero-grid">
          
          <!-- Left Text Area Content Stack -->
          <article class="content-area" style="width: 100%; box-sizing: border-box;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">${pageCopy.pill}</span>
            <h1 style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.1; letter-spacing: -1px;">${pageCopy.title}</h1>
            <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 24px 0;">${pageCopy.lead}</p>
            
            <div class="active-sync-badge-wrapper" style="display: flex; align-items: center; gap: 10px; margin-bottom: 32px;">
              <div class="badge-line" style="height: 2px; width: 24px; background: #10b981;"></div>
              <span class="badge-text" style="color: #0a1f44; font-weight: 700; font-size: 0.9rem;">${pageCopy.badge}</span>
            </div>
            
            <a href="${pageCopy.btn_url}" class="btn-main" style="background: #10b981; color: #ffffff; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 6px; display: inline-block; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); transition: background 0.2s;">${pageCopy.btn_text}</a>
          </article>
          
          <!-- Right Adaptive Preview Image Block Container -->
          <aside class="hero-image-container" style="display: flex; justify-content: center; width: 100%;">
            <img src="${pageCopy.img_src}" alt="${pageCopy.img_alt}" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);">
          </aside>

        </div>
      </div>
    </main>
  `;
}






/**
 * ==========================================================================
 * 🏛️ CENTRAL 44-SERVICE SEO & DESIGN MATRICES (PRODUCTION READY)
 * Generated Automatically via build.js
 * ==========================================================================
 */

const GLOBAL_SEO_CONTENT_MAP = {
    
    // 🏠 HOMEPAGE MATRIX ENTRY SEPARATES HOMEPAGE COPY FROM THE SERVICES
    "homepage-main-landing": {
        pricingKey: "llc-formation",
        title: "Corporate Launchpad",
        seoTitle: "Filings4U | Enterprise Entity Setup & Business Compliance Platforms",
        metaDesc: "Automate your company setups, asset registries, and federal operating authorizations flawlessly out of a single secure infrastructure dashboard layer.",
        heroPill: "Automated Registry Systems",
        heroHeadline: "The Engine for <br><span style='color:#10b981;'>Corporate Launching.</span>",
        heroBody: "Launch, scale, and manage your asset protection profiles across all 50 State registries overnight. We automate your legal document filings, tax parameters, and organizational agreements securely.",
        heroBadge: "System Core Sync: 140,000+ Profiles Active",
        heroImage: "images/hero-image.jpg",
        secBPill: "Independent Ventures",
        secBHeadline: "Main Street Growth. <br><span style='color:#10b981;'>Built For Communities.</span>",
        secBSub: "High-accuracy structural filings optimized for local business frameworks.",
        secBBody: "Protect your commercial operations with processing tracking loops built directly for startup builders and family shops. We manage state schedules securely so you can focus on community engagement.",
        secBImage: "images/local-business.jpg",
        secCPill: "Global Distribution Networks",
        secCHeadline: "Transit Infrastructure. <br><span style='color:#10b981;'>Built For Operations.</span>",
        secCSub: "Full-spectrum fleet setup logs mapped flawlessly across state borders.",
        secCBody: "Accelerate your logistical authorities under a robust unified dashboard tracking framework. We coordinate trucker registrations, broker permissions, state operating permits, and background drug screening accounts seamlessly.",
        secCImage: "images/startup-launch.jpg",
        secDPill: "Continuous Asset Shield",
        secDHeadline: "Guaranteed Compliance. <br><span style='color:#10b981;'>Permanent Good Standing.</span>",
        secDSub: "Proactive automated calendar sweeps eliminate corporate data gaps.",
        secDBody: "Never face administrative state penalties, account freezing, or accidental entity exposure. Our cloud tracking matrix scans regulatory alterations daily, records state department transitions, and completes filing paperwork error-free.",
        secDImage: "images/regulatory-compliance.jpg"
    },

    "apostille-services": {
        "title": "Apostille Services",
        "heroPill": "International Verification",
        "heroHeadline": "Apostille Processing <br><span style=\"color: #10b981;\">& Global Legalization.</span>",
        "heroBody": "Authenticate corporate structures, bylaws, and transport manifests for absolute cross-border validation under the strict rules of the Hague Convention protocol.",
        "heroBadge": "State Department Sync: Live Multi-State Notary Alignment",
        "heroImage": "images/apostille-services-hero.jpg",
        "secBPill": "Cross-Border Scaling",
        "secBHeadline": "Global Verification. <br><span style=\"color: #10b981;\">Total Legal Shield.</span>",
        "secBSub": "Simplify complicated out-of-country authentication and embassy legalization pathways.",
        "secBBody": "Protect your foreign venture from multi-week delays or sudden document rejections due to strict formatting variances. We review state notary commissions, check structural layout requirements for target nations, and route verified submissions safely through the Secretary of State pipeline.",
        "secBImage": "images/apostille-services-alternating.jpg",
        "secCPill": "Global Launch Infrastructure",
        "secCHeadline": "Global Launchpad. <br><span style=\"color: #10b981;\">Built For Speed.</span>",
        "secCSub": "Turn your local business entity files into officially authenticated international instruments overnight.",
        "secCBody": "Accelerate your international business expansion using advanced formatting systems designed to clear foreign embassy checks. We automate document preparation, notary validation checks, secretary of state courier routing, and federal authentication protocols so you can enter markets smoothly.",
        "secCImage": "images/apostille-services-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Permanent Verification Security.</span>",
        "secDSub": "Active database synchronization safeguards your document status across state and federal channels.",
        "secDBody": "Avoid complex international delays, rejected foreign bidding packets, or sudden validation stops due to state-level notary commission variances. Our backend platform checks Hague parameter adjustments, updates spelling structures cross-system, and protects your overseas business visibility.",
        "secDImage": "images/apostille-services-shield.jpg"
    },
    "article": {
        "title": "Article",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "blog": {
        "title": "Blog",
        "heroPill": "Resource Center",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "broker-authority": {
        "title": "Broker Authority",
        "heroPill": "Logistics Intermediary Infrastructure",
        "heroHeadline": "Establish Professional <br><span style=\"color: #10b981;\">Freight Broker Authority.</span>",
        "heroBody": "Secure your official broker MC operating authority, configure mandatory USDOT identifiers, and organize required institutional frameworks. We manage your FMCSA registration loops, match bond criteria, and clear processing hurdles safely.",
        "heroBadge": "FMCSA Ingestion Linkages: Active & Live",
        "heroImage": "images/broker-authority-hero.jpg",
        "secBPill": "Brokerage Network Scaling",
        "secBHeadline": "Activate Intermediary Permits. <br><span style=\"color: #10b981;\">Contract Asset-Light Freight Safe.</span>",
        "secBSub": "Deploy compliant third-party logistics parameters and verified federal intermediary accounts safely.",
        "secBBody": "Launching a scalable freight brokerage firm requires absolute alignment with FMCSA property broker rules. Booking shipments without an approved OP-1 registry status, a verified $75,000 BMC-84 bond integration, or localized process agents risks immediate federal freeze parameters or critical structural compliance rejections. We check your capitalization documentation, file your core registry paths, and unlock active licensing status indicators securely.",
        "secBImage": "images/broker-authority-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Brokerage Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your logistics journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure multi-unit intermediary credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/broker-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "broker-insurance": {
        "title": "Broker Insurance",
        "heroPill": "Bond & Liability Architecture",
        "heroHeadline": "Coordinate Freight Broker <br><span style=\"color: #10b981;\">BMC-84 & BMC-85 Filings.</span>",
        "heroBody": "Fulfill the mandatory $75,000 financial security thresholds enforced by the FMCSA. We automate your surety network routing, track real-time BMC-84 bond endorsements, configure alternate BMC-85 trust structures, and secure your active intermediary clearances smoothly.",
        "heroBadge": "Surety Ledger Sync: Active & Live",
        "heroImage": "images/broker-insurance-hero.jpg",
        "secBPill": "Financial Protection",
        "secBHeadline": "Anchor Intermediary Bonds. <br><span style=\"color: #10b981;\">Clear Multi-Jurisdiction Holds safely.</span>",
        "secBSub": "Deploy compliant underwriting bonds and structured property broker security credentials securely.",
        "secBBody": "Maintaining active surety parameters functions as the primary legal gateway for logistics intermediaries. Processing carrier freight loads without an active BMC-84 bond or an approved BMC-85 trust mechanism on the federal registry triggers instant MC status cancellations, severe department fines, or structural operating rejections. We parse your corporate background records, establish matching tax fields, and clear validation layers cleanly.",
        "secBImage": "images/broker-insurance-compliance.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "business-licenses": {
        "title": "Business Licenses",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "cage-code": {
        "title": "Cage Code",
        "heroPill": "Federal Procurement",
        "heroHeadline": "CAGE Code <br><span style=\"color: #10b981;\">Procurement System.</span>",
        "heroBody": "Secure your Commercial and Government Entity identifier required for federal contract awards, grants, and SAM compliance tracking from a centralized wizard portal.",
        "heroBadge": "DLA System Sync: Active Verification Link",
        "heroImage": "images/cage-code-hero.jpg",
        "secBPill": "Contractor Access",
        "secBHeadline": "Strategic Bidding. <br><span style=\"color: #10b981;\">Built For Government.</span>",
        "secBSub": "Streamlined CAGE applications engineered for contractor security.",
        "secBBody": "Protect your federal contracting status with verification infrastructure built for modern enterprises. We handle your SAM alignments, structural data formatting, and mandatory defense logistics linkages under a secure web layer so you can focus completely on winning lucrative federal requests for proposals.",
        "secBImage": "images/cage-code-alternating.jpg",
        "secCPill": "B2G Onboarding Pipeline",
        "secCHeadline": "Enterprise Registration. <br><span style=\"color: #10b981;\">Built For Speed.</span>",
        "secCSub": "Turn complex federal agency requirements into a single streamlined application.",
        "secCBody": "Accelerate your defense infrastructure integration with automated preparation tools designed to match SAM rules. We clear up registration blockages, correct physical mapping addresses, format legal data matrix profiles, and handle federal registry submissions so you can issue contract invoices from day one.",
        "secCImage": "images/cage-code-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Never Fail Verification.</span>",
        "secDSub": "Active database synchronization safeguards your status across defense networks.",
        "secDBody": "Avoid costly application delays, rejected bidding packets, or sudden registration deletions due to name syntax formatting rules. Our tracking layout checks agency updates, updates matching address formats across the system, and protects your federal procurement visibility.",
        "secDImage": "images/cage-code-shield.jpg"
    },
    "clia-certificate": {
        "title": "Clia Certificate",
        "heroPill": "Medical & Lab Compliance",
        "heroHeadline": "CLIA Certificate <br><span style=\"color: #10b981;\">Filing Portal.</span>",
        "heroBody": "Streamline your Clinical Laboratory Improvement Amendments certification. We prepare, audit, and route your federal laboratory applications directly to state survey agencies.",
        "heroBadge": "CMS Links Active: State Survey Alignment Verified",
        "heroImage": "images/clia-certificate-hero.jpg",
        "secBPill": "Laboratory Standards",
        "secBHeadline": "Clinical Accuracy. <br><span style=\"color: #10b981;\">Total Legal Shield.</span>",
        "secBSub": "Simplify complex diagnostic credentials and state compliance pathways.",
        "secBBody": "Protect your testing facility from multi-thousand dollar non-compliance fines or administrative operational stops. We organize testing volumes, format analytical credentials to match federal mandates, and route verified submissions straight to state evaluation officers.",
        "secBImage": "images/clia-certificate-alternating.jpg",
        "secCPill": "Clinical Launchpad",
        "secCHeadline": "Rapid Certification. <br><span style=\"color: #10b981;\">Built For Healthcare.</span>",
        "secCSub": "Turn complex clinical regulations into an actionable dashboard pipeline.",
        "secCBody": "Accelerate your laboratory testing setup using advanced formatting protocols built to match federal requirements. We verify medical director credentials, structure device testing profiles, align facility codes, and manage multi-state agency delivery networks so you can process diagnostic sets safely.",
        "secCImage": "images/clia-certificate-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Never Flunk Standards.</span>",
        "secDSub": "Active database synchronization safeguards your status across state and federal health agencies.",
        "secDBody": "Avoid costly validation freezes, rejected CMS testing applications, or sudden state operational stops due to layout form field issues. Our tracking dashboard monitors agency parameter transformations, updates address alignments across systems, and protects your diagnostic facility's medical standing.",
        "secDImage": "images/clia-certificate-shield.jpg"
    },
    "compliance": {
        "title": "Compliance",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "contact": {
        "title": "Contact",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "corporations": {
        "title": "Corporations",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "dissolution": {
        "title": "Dissolution",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "doing-business-as-dba": {
        "title": "Doing Business As Dba",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "dot-consortium": {
        "title": "Dot Consortium",
        "heroPill": "Mandatory Safety Protocols",
        "heroHeadline": "Enroll In The DOT <br><span style=\"color: #10b981;\">Drug & Alcohol Consortium.</span>",
        "heroBody": "Fulfill 49 CFR Part 40 compliance rules seamlessly. We automate your random test pool generation sequences, configure laboratory collection logistics network connections, and link tracking parameters onto your FMCSA Clearinghouse profile safely.",
        "heroBadge": "Clearinghouse Gateway: Connected & Active",
        "heroImage": "images/dot-consortium-hero.jpg",
        "secBPill": "Pool Maintenance",
        "secBHeadline": "Maintain Random Test Pools. <br><span style=\"color: #10b981;\">Block Federal Safety Shutdowns.</span>",
        "secBSub": "Deploy compliant logistical testing matrices and verified clearinghouse records safely.",
        "secBBody": "Maintaining active enrollment within a verified DOT drug and alcohol consortium is a strict operational mandate for commercial drivers. Operating interstate transport configurations without a registered random selection track triggers immediate out-of-service orders, severe company penalties, or lost carrier authorities. We structure your testing profiles, coordinate clinical networks, and secure active tokens cleanly.",
        "secBImage": "images/dot-consortium-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/dot-consortium-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "driver-qualification-file": {
        "title": "Driver Qualification File",
        "heroPill": "Audit-Ready Fleet Records",
        "heroHeadline": "Automate Your DOT <br><span style=\"color: #10b981;\">Driver Qualification Files.</span>",
        "heroBody": "Fulfill strict 49 CFR Part 391 safety parameters completely. We compile required commercial motor vehicle driver background paths, index motor vehicle reports (MVR), and anchor verified medical examiner certificate renewals inside your user panel automatically.",
        "heroBadge": "Safety Ingestion Registry: Active & Real-Time",
        "heroImage": "images/dqf-hero.jpg",
        "secBPill": "Safety Audit Defense",
        "secBHeadline": "Secure Core Safety Files. <br><span style=\"color: #10b981;\">Protect Active Carrier Authority.</span>",
        "secBSub": "Deploy compliant qualification records and structured background checking files securely.",
        "secBBody": "Operating commercial fleets over state lines mandates rigorous, updated driver dossier storage patterns. Dispatching units with missing medical certificates, unchecked motor vehicle records, or incomplete job parameters risks severe safety downgrades, acute litigation exposures, or complete regulatory shutdowns during state audits. We gather employee strings, structure individual safety books, and pass inspection benchmarks securely.",
        "secBImage": "images/dqf-compliance-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/dqf-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "duns-number": {
        "title": "Duns Number",
        "heroPill": "Commercial Credit Node",
        "heroHeadline": "DUNS Number <br><span style=\"color: #10b981;\">Procurement System.</span>",
        "heroBody": "Establish your business identity within global commercial tracking registers. Secure the unique 9-digit data structural identifier required for corporate funding, vendor contracts, and government bidding.",
        "heroBadge": "Verification Gateway: Active Profile Matching Sync",
        "heroImage": "images/duns-number-hero.jpg",
        "secBPill": "Corporate Valuation",
        "secBHeadline": "Global Identity. <br><span style=\"color: #10b981;\">Total Funding Access.</span>",
        "secBSub": "Establish verified corporate visibility across tier-1 supplier systems.",
        "secBBody": "Protect your expanding commercial profile from unverified records or syntax alignment problems. We structure entity profiles, clear up spelling differences across agency networks, and route clean filing files directly to global business databases so your enterprise stays credit-ready.",
        "secBImage": "images/duns-number-alternating.jpg",
        "secCPill": "Credit Pipeline Setup",
        "secCHeadline": "Rapid Profile Setup. <br><span style=\"color: #10b981;\">Built For Scale.</span>",
        "secCSub": "Turn confusing underwriting systems into a single straightforward submission entry.",
        "secCBody": "Accelerate your business's active corporate identifier records through precise pre-submission validation systems. We correct layout formatting flaws, crosscheck secretary of state registry filings, line up proper corporate identifiers, and process registrations fast so you can build commercial power from day one.",
        "secCImage": "images/duns-number-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Permanent Profile Security.</span>",
        "secDSub": "Active database synchronization safeguards your profile credentials across credit bureaus.",
        "secDBody": "Avoid complex contract rejections, funding pipeline freezes, or sudden business profile matching drops caused by typos or mismatched state parameters. Our tracking platform monitors data variations, maps addresses flawlessly system-wide, and ensures your entity visibility stays permanent.",
        "secDImage": "images/duns-number-shield.jpg"
    },
    "email template": {
        "title": "Email Template",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "employer-identification-number-ein": {
        "title": "Employer Identification Number Ein",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "federal-income-tax": {
        "title": "Federal Income Tax",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "fmcsa-insurance-filings": {
        "title": "Fmcsa Insurance Filings",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "foreign-qualification": {
        "title": "Foreign Qualification",
        "heroPill": "Multi-State Expansion",
        "heroHeadline": "Foreign Qualification <br><span style=\"color: #10b981;\">Certificate Matrix.</span>",
        "heroBody": "Authorize your existing corporate or LLC structure to legally conduct business across state lines. We fully automate out-of-state registrations with absolute statutory accuracy.",
        "heroBadge": "Cross-Border Sync: Live Multi-State Notary Alignment",
        "heroImage": "images/foreign-qualification-hero.jpg",
        "secBPill": "Regional Footprint",
        "secBHeadline": "Cross-Border Growth. <br><span style=\"color: #10b981;\">Total Asset Shield.</span>",
        "secBSub": "Scale operations beyond your home state boundaries with complete statutory safety.",
        "secBBody": "Protect your growing business from multi-state compliance stops, severe transacting penalties, or unexpected structural franchise tax blockages. Our secure system pulls original home state records, matches structural layout entries perfectly, and deploys clean corporate expansion filings to target state systems.",
        "secBImage": "images/foreign-qualification-alternating.jpg",
        "secCPill": "Expansion Setup",
        "secCHeadline": "Rapid Multi-State Setup. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Convert tedious cross-border setup structures into a clean single-form workflow.",
        "secCBody": "Accelerate your company's active regional database integration through precise verification protocols. We resolve out-of-state parameters, correct alignment screening flaws, verify home state status credentials, and process registrations fast so you can build commercial presence safely.",
        "secCImage": "images/foreign-qualification-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Permanent Cross-State Defense.</span>",
        "secDSub": "Active database synchronization safeguards your out-of-state authority across regional secretary registries.",
        "secDBody": "Avoid complex filing blocks, out-of-state transactional freezes, or sudden statutory fines caused by mismatched corporate records. Our backend system tracks regulatory shifts, updates parameter configurations cross-system, and ensures your multi-jurisdictional active standing stays permanent.",
        "secDImage": "images/foreign-qualification-shield.jpg"
    },
    "franchise-tax": {
        "title": "Franchise Tax",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "get-started": {
        "title": "Get Started",
        "heroPill": "Onboarding Gateway",
        "heroHeadline": "Initialize Your Corporate <br><span style=\"color: #10b981;\">& Fleet Filing Tracks.</span>",
        "heroBody": "Deploy compliant corporate architectures or structural fleet authority channels. Select your optimization lane below to transmit business parameters directly onto active state and federal agency desks safely.",
        "heroBadge": "Automated Ingestion Links: Connected & Active",
        "heroImage": "images/get-started-hero.jpg",
        "secBPill": "Structural Velocity",
        "secBHeadline": "Engineered For Compliance. <br><span style=\"color: #10b981;\">Optimized For Scale.</span>",
        "secBSub": "Transition your legal blueprint into an audit-proof corporate framework.",
        "secBBody": "Launching your business shouldn't involve fighting confusing government data portals or legacy tax processing errors. We combine real-time jurisdiction mapping with automated employer ID calculations (EIN) and state intake formatting so you can authorize corporate bank balances, clear safety audits, and execute legal contracts securely.",
        "secBImage": "images/get-started-growth.jpg",
        "secCPill": "Infrastructure Development",
        "secCHeadline": "Corporate Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport or startup vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial equipment leases safely.",
        "secCImage": "images/get-started-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "good-standing": {
        "title": "Good Standing",
        "heroPill": "Corporate Health Status",
        "heroHeadline": "Certificate of <br><span style=\"color: #10b981;\">Good Standing Status.</span>",
        "heroBody": "Procure your official status verification document instantly from state registries to secure corporate bank lending, activate multi-state expansion certificates, or complete transactional audits.",
        "heroBadge": "State Node Interconnect: Real-Time Secretary of State Link",
        "heroImage": "images/good-standing-hero.jpg",
        "secBPill": "Entity Credentialing",
        "secBHeadline": "Corporate Validation. <br><span style=\"color: #10b981;\">Total Registry Shield.</span>",
        "secBSub": "Verify your active structural status instantly across multiple state lines.",
        "secBBody": "Protect your operational venture from surprise banking stops, delayed contract reviews, or rejected corporate filings. Our platform audits missing state returns, reviews outstanding franchise tax metrics, and delivers certified state credentials directly to your centralized security folder.",
        "secBImage": "images/good-standing-alternating.jpg",
        "secCPill": "Status Infrastructure",
        "secCHeadline": "Rapid Status Extract. <br><span style=\"color: #10b981;\">Built For Speed.</span>",
        "secCSub": "Convert tedious government lookup systems into a clean single-form pipeline link.",
        "secCBody": "Accelerate your business's active verification credentials using advanced state data connectors designed to pull clean registry logs instantly. We verify corporate filings, check system spacing variances, format matching address strings, and handle state submissions so you can open commercial bank links securely.",
        "secCImage": "images/good-standing-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Permanent Profile Security.</span>",
        "secDSub": "Active database synchronization safeguards your status across state registry directories.",
        "secDBody": "Avoid complex document delays, frozen underwriting folders, or sudden operational stops due to unexpected state-level filing discrepancies. Our background system cross-checks regulatory shifts, tracks Secretary of State updates, and ensures your corporate active standing remains flawless.",
        "secDImage": "images/good-standing-shield.jpg"
    },
    "hazmat-registration": {
        "title": "Hazmat Registration",
        "heroPill": "Hazardous Materials Authorization",
        "heroHeadline": "Secure Your Federal <br><span style=\"color: #10b981;\">PHMSA HAZMAT Certificate.</span>",
        "heroBody": "Fulfill your mandatory hazardous material transportation registration obligations. We automate classification tier mapping, route details directly to the federal processing repository, and issue official current-year compliance permits safely.",
        "heroBadge": "PHMSA Electronic Portal: Connected & Active",
        "heroImage": "images/hazmat-hero.jpg",
        "secBPill": "Critical Risk Compliance",
        "secBHeadline": "Map Hazard Profiles. <br><span style=\"color: #10b981;\">Maintain Unbroken Road Clearances safely.</span>",
        "secBSub": "Deploy compliant hazardous cargo registrations and structured PHMSA parameters securely.",
        "secBBody": "Transporting regulated chemicals, fuel lines, or compressed material configurations requires precise federal clearance profiles. Entering public freight paths with unmatched corporate data strings or legacy category layouts triggers sudden safety detentions, federal audit traps, or expensive statutory citation matrices. We verify your active carrier numbers, group your bulk weights, and execute registrations flawlessly.",
        "secBImage": "images/hazmat-compliance.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Transport Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your logistics company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom hazardous transport profiles, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/hazmat-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "heavy-use-tax-2290": {
        "title": "Heavy Use Tax 2290",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "index copy 2": {
        "title": "Index copy 2",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for <br><span style=\"color: #10b981;\">Total Compliance.</span>",
        "heroBody": "Automate your corporate structures and DOT authorities from one single dashboard. We provide the technical handshake between you and state, federal, and local jurisdictions.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus. <br><span style=\"color: #10b981;\">Built For Community.</span>",
        "secBSub": "Streamlined corporate filings designed for local business peace of mind.",
        "secBBody": "Protect your independent venture with compliance tools built for neighborhood startups, family shops, and local operators. We handle your annual reports, entity formations, and state requirements under a secure corporate architecture so you can stay focused on serving your immediate neighborhood clients.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad. <br><span style=\"color: #10b981;\">Built For Scale.</span>",
        "secCSub": "Turn your business idea into an officially recognized state legal entity overnight.",
        "secCBody": "Accelerate your early-stage venture with robust entity setup frameworks built for founders. We automate LLC formations, corporate bylaw preparation, tax ID filings (EIN), and state registry submissions under an enterprise architecture so you can legally issue shares, open commercial accounts, and protect your capital from day one.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Never Miss A Filing.</span>",
        "secDSub": "Active database synchronization safeguards your status across state lines.",
        "secDBody": "Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your operational status is permanently shielded.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "index copy": {
        "title": "Index copy",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for <br><span style=\"color: #10b981;\">Total Compliance.</span>",
        "heroBody": "Automate your corporate structures and DOT authorities from one single dashboard. We provide the technical handshake between you and state, federal, and local jurisdictions.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus. <br><span style=\"color: #10b981;\">Built For Community.</span>",
        "secBSub": "Streamlined corporate filings designed for local business peace of mind.",
        "secBBody": "Protect your independent venture with compliance tools built for neighborhood startups, family shops, and local operators. We handle your annual reports, entity formations, and state requirements under a secure corporate architecture so you can stay focused on serving your immediate neighborhood clients.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad. <br><span style=\"color: #10b981;\">Built For Scale.</span>",
        "secCSub": "Turn your business idea into an officially recognized state legal entity overnight.",
        "secCBody": "Accelerate your early-stage venture with robust entity setup frameworks built for founders. We automate LLC formations, corporate bylaw preparation, tax ID filings (EIN), and state registry submissions under an enterprise architecture so you can legally issue shares, open commercial accounts, and protect your capital from day one.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Never Miss A Filing.</span>",
        "secDSub": "Active database synchronization safeguards your status across state lines.",
        "secDBody": "Avoid costly penalties, business asset exposure, or accidental corporate dissolution. Our background system cross-checks regulatory shifts, records state department alterations, and confirms structural tax obligations automatically, ensuring your operational status is permanently shielded.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "international-fuel-tax-agreement-ifta": {
        "title": "International Fuel Tax Agreement Ifta",
        "heroPill": "Interstate Fuel Infrastructure",
        "heroHeadline": "Establish Your Multi-State <br><span style=\"color: #10b981;\">IFTA Fuel License.</span>",
        "heroBody": "Simplify multi-jurisdictional fuel consumption reporting layers. We automate base-jurisdiction registration loops, structure your parameter profiles, configure initial vehicle allocation strings, and deliver official IFTA credentials safely.",
        "heroBadge": "State Fuel Tax Network Sync: Active & Live",
        "heroImage": "images/ifta-hero.jpg",
        "secBPill": "Fleet Tax Core",
        "secBHeadline": "Reconcile Cross-Border Mileage. <br><span style=\"color: #10b981;\">Acquire Active Fuel Decals safely.</span>",
        "secBSub": "Deploy compliant multi-state fuel tax profiles and structured distance calculations securely.",
        "secBBody": "Operating commercial transport units over state lines triggers precise fuel-use tax parameters. Moving freight configurations without an authorized base-jurisdiction IFTA account, verified trip log strings, or active current-year decals invites immediate roadside detentions, state tax audits, or lost carrier authorities. We organize your distance profiles, evaluate gas entries, and clear registry tracks securely.",
        "secBImage": "images/ifta-compliance-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial equipment leases safely.",
        "secCImage": "images/ifta-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "licenses-permits": {
        "title": "Licenses Permits",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "limited-liability-company": {
        "title": "Limited Liability Company",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "llc-reinstatement": {
        "title": "Llc Reinstatement",
        "heroPill": "Entity Recovery Pipeline",
        "heroHeadline": "LLC Reinstatement <br><span style=\"color: #10b981;\">& Status Recovery.</span>",
        "heroBody": "Revive your dissolved or suspended legal entity. We clean up overdue state annual reports, settle structural tax adjustments, and file official articles of reinstatement safely.",
        "heroBadge": "Registry Sync: Active Secretary of State Rest Gateways",
        "heroImage": "images/llc-reinstatement-scale.jpg",
        "secBPill": "Corporate Restoration",
        "secBHeadline": "Status Recovery. <br><span style=\"color: #10b981;\">Total Asset Defense.</span>",
        "secBSub": "Restore operational peace of mind and protect your corporate liability shield.",
        "secBBody": "Protect your independent venture from structural exposure or permanent tax dissolution. We handle outstanding state tax balances, calculate delinquent state penalties, draft official reinstatement articles, and establish secure tracking parameters across state systems so your entity returns to active standing fast.",
        "secBImage": "images/llc-reinstatement-scale.jpg",
        "secCPill": "Status Infrastructure",
        "secCHeadline": "Rapid Recovery Pipeline. <br><span style=\"color: #10b981;\">Built For Speed.</span>",
        "secCSub": "Convert confusing state state suspension documents into a single dashboard link.",
        "secCBody": "Accelerate your business's return to active operational status using advanced formatting protocols built to match current state requirements. We resolve back-tax issues, verify administrative credentials, clean up layout structure errors, and manage state delivery networks so you can execute corporate invoices safely.",
        "secCImage": "images/llc-reinstatement-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Permanent Stand Protection.</span>",
        "secDSub": "Active database synchronization safeguards your status across state registry directories.",
        "secDBody": "Avoid complex filing blocks, extended name loss vulnerability, or sudden asset protection drops caused by outstanding reports. Our background system cross-checks regulatory statutory movements, records state department alterations, and ensures your entity returns cleanly to active status.",
        "secDImage": "images/llc-reinstatement-shield.jpg"
    },
    "mainwizard": {
        "title": "Mainwizard",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "minority-certificate": {
        "title": "Minority Certificate",
        "heroPill": "Socioeconomic Diversity Growth",
        "heroHeadline": "Secure Your Official <br><span style=\"color: #10b981;\">MBE Business Certification.</span>",
        "heroBody": "Authorize your minority-owned firm to leverage exclusive corporate set-asides, fulfill public tier equity criteria, and access specialized supplier networks. We manage your asset vetting metrics and structure verification loops securely.",
        "heroBadge": "Supplier Diversity Matrix: Active & Live",
        "heroImage": "images/mbe-hero.jpg",
        "secBPill": "Supplier Diversity Leverage",
        "secBHeadline": "Qualify For Tier 1 Mandates. <br><span style=\"color: #10b981;\">Capture Enterprise Set-Asides safely.</span>",
        "secBSub": "Deploy compliant corporate capitalization data and verified structural equity profiles securely.",
        "secBBody": "Securing corporate B2G or institutional vendor pathways requires rigorous ownership verification. Entering supplier diversity portals with mismatched capital share documentation or legacy structural profiles risks immediate application rejections or lengthy validation delays. We clean your background documents, organize your equity parameters, and wrap records to pass audit screening benchmarks seamlessly.",
        "secBImage": "images/mbe-compliance.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Diversity Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure diversity certifications, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/mbe-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "new-entrant-audit": {
        "title": "New Entrant Audit",
        "heroPill": "Federal Safety Validation",
        "heroHeadline": "Pass Your FMCSA <br><span style=\"color: #10b981;\">New Entrant Safety Audit.</span>",
        "heroBody": "Protect your permanent motor carrier registration. We build your compliance folders, pre-screen asset maintenance logs, coordinate drug testing data matrices, and secure your structural fleet status before federal investigators file their reviews.",
        "heroBadge": "DOT Audit Pipeline: Active & Real-Time",
        "heroImage": "images/audit-hero.jpg",
        "secBPill": "Audit Defense Strategy",
        "secBHeadline": "De-Risk Federal Audits. <br><span style=\"color: #10b981;\">Solidify Permanent Authority Status.</span>",
        "secBSub": "Deploy compliant record-keeping templates and structured safety management matrices safely.",
        "secBBody": "Sustaining active motor carrier operations requires successfully passing an initial federal safety review within the first 12 months of setup. Navigating these investigator pipelines with unvetted vehicle files, missing drug registry verifications, or unchecked driver qualifications triggers immediate out-of-service mandates, fine structures, or lost carrier authority tokens. We sort your active logs, verify system indicators, and clear processing gaps cleanly.",
        "secBImage": "images/audit-compliance.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Compliance Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial equipment leases safely.",
        "secCImage": "images/audit-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "nonprofits": {
        "title": "Nonprofits",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "operating-agreement": {
        "title": "Operating Agreement",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "order-confirmation": {
        "title": "Order Confirmation",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "order": {
        "title": "Order",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "owner-operators": {
        "title": "Owner Operators",
        "heroPill": "Independent Fleet Infrastructure",
        "heroHeadline": "Launch Independent <br><span style=\"color: #10b981;\">Owner-Operator Authority.</span>",
        "heroBody": "Acquire your own active DOT number, complete your MC authority parameters, and set up mandatory fleet compliance frameworks. We automate initial federal registration loops, map truck classification strings, and clear FMCSA hurdles safely.",
        "heroBadge": "FMCSA Ingestion Portal: Active & Real-Time",
        "heroImage": "images/owner-operators-hero.jpg",
        "secBPill": "Independent Fleet Operations",
        "secBHeadline": "Own Your Operating Authority. <br><span style=\"color: #10b981;\">Maximize Per-Mile Load Revenue.</span>",
        "secBSub": "Deploy compliant interstate motor carrier tokens and verified transport asset frameworks safely.",
        "secBBody": "Transitioning from a leased driver to an independent owner-operator requires clear regulatory planning. Dispatching freight lines without an active MC authority, a valid USDOT index, or compliant insurance structures invites immediate federal safety shutdowns or multi-state law enforcement fine patterns. We synchronize your carrier profiles, verify asset tiers, and fulfill licensing parameters cleanly.",
        "secBImage": "images/owner-operators-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your trucking company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial equipment leases safely.",
        "secCImage": "images/owner-operators-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "payroll-tax-940-941": {
        "title": "Payroll Tax 940 941",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "privacy-policy": {
        "title": "Privacy Policy",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "process-agents-boc-3": {
        "title": "Process Agents Boc 3",
        "heroPill": "National Legal Representation",
        "heroHeadline": "File Your Blankets <br><span style=\"color: #10b981;\">BOC-3 Process Agents.</span>",
        "heroBody": "Satisfy mandatory federal motor carrier conditions instantly. We deploy a certified legal process network across all fifty states, fulfill statutory service coverage parameters, and submit your official blanket files onto active FMCSA registration desks safely.",
        "heroBadge": "FMCSA Agency Core Handshake: Active & Live",
        "heroImage": "images/boc3-hero.jpg",
        "secBPill": "Jurisdictional Protection",
        "secBHeadline": "Secure Blanket Coverage. <br><span style=\"color: #10b981;\">Lift Administrative Operating Deadlocks.</span>",
        "secBSub": "Deploy compliant multi-state resident agent matrices and submit valid BOC-3 forms securely.",
        "secBBody": "Activating an independent logistics or truck authority requires a formal process agent network link across all transit regions. Moving commercial vehicles or dispatching freight lines without an active, verified blanket file on record triggers instant federal application rejections, permanent registration freezes, or immediate roadside authority holdbacks. We handle your legal strings, anchor verified resident footprints, and clear agency parameters securely.",
        "secBImage": "images/boc3-compliance-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/boc3-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "procurement-registration": {
        "title": "Procurement Registration",
        "heroPill": "Institutional Allocation Framework",
        "heroHeadline": "Secure Government <br><span style=\"color: #10b981;\">Procurement Clearance.</span>",
        "heroBody": "Authorize your enterprise for municipal, state, and federal supply tracks, clear System for Award Management (SAM) validation matrices, and open contract bidding pathways. We automate complex regulatory research to launch your operations legally.",
        "heroBadge": "Federal Registry Sync: Active & Live",
        "heroImage": "images/procurement-hero.jpg",
        "secBPill": "Institutional Alignment",
        "secBHeadline": "Secure B2G Pipelines. <br><span style=\"color: #10b981;\">Stabilize Public Sector Traction.</span>",
        "secBSub": "Deploy compliant public procurement registrations and structured SAM core matrices safely.",
        "secBBody": "Sustaining commerce across public agency networks requires complete structural compliance. Entering municipal, state, or federal supply chains with mismatched identity data or legacy parameters triggers instant system suspensions, review holdbacks, or lost bidding windows. We cross-verify your active corporate strings, construct matching tax layouts, and clear validation layers securely.",
        "secBImage": "images/procurement-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "B2G Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom procurement profiles, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/procurement-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "refund-policy": {
        "title": "Refund Policy",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "registered-agent": {
        "title": "Registered Agent",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "regulatory-consulting": {
        "title": "Regulatory Consulting",
        "heroPill": "Corporate Risk Management",
        "heroHeadline": "Regulatory Consulting <br><span style=\"color: #10b981;\">& Legal Architecture.</span>",
        "heroBody": "Deploy custom regulatory monitoring systems tailored for complex multi-state corporate entities, logistics operations, and scaling enterprise networks.",
        "heroBadge": "Expert Desk Active: Live Technical Mapping Framework",
        "heroImage": "images/regulatory-consulting-hero.jpg",
        "secBPill": "Risk Advisory",
        "secBHeadline": "Enterprise Guardrails. <br><span style=\"color: #10b981;\">Designed For Stability.</span>",
        "secBSub": "Navigate multi-jurisdictional rules with specialized compliance systems.",
        "secBBody": "Protect your complex holdings from sudden enforcement changes or costly administrative penalties. We audit your corporate operational flows, align internal structural bylaws with contemporary agency rules, and deploy a secure legal architecture across your active business units.",
        "secBImage": "images/regulatory-consulting-alternating.jpg",
        "secCPill": "Corporate Scaling",
        "secCHeadline": "Enterprise Shield. <br><span style=\"color: #10b981;\">Custom Mapped Logistics.</span>",
        "secCSub": "Turn complicated administrative blockages into automated pipeline updates.",
        "secCBody": "Accelerate your complex cross-border entity operations through professional risk planning built to protect company equity. We organize internal structures, check system spacing discrepancies, evaluate out-of-state parameters, and deploy secure governance roadmaps so you can launch new markets safely.",
        "secCImage": "images/regulatory-consulting-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Permanent Status Defense.</span>",
        "secDSub": "Proactive administrative mapping shields company assets across all state and federal layers.",
        "secDBody": "Avoid complex administrative blockages, accidental state status drops, or non-compliance corporate fines caused by changing local rules. Our background analytical matrix tracks statutory movements, verifies data alignments system-wide, and ensures your entity visibility remains clean.",
        "secDImage": "images/regulatory-consulting-shield.jpg"
    },
    "render-poa": {
        "title": "Render Poa",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "sales-tax-registration": {
        "title": "Sales Tax Registration",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "scac-code": {
        "title": "Scac Code",
        "heroPill": "Logistics Code Infrastructure",
        "heroHeadline": "Secure Your Standard <br><span style=\"color: #10b981;\">Carrier Alpha Code (SCAC).</span>",
        "heroBody": "Authorize your commercial carrier profile to execute military freight lanes, cross international customs borders, and automate automated data interchanges (EDI). We route your operational parameters straight to NMFTA registries seamlessly.",
        "heroBadge": "National NMFTA Database Sync: Active & Live",
        "heroImage": "images/scac-hero.jpg",
        "secBPill": "Commercial Integration",
        "secBHeadline": "Link Shipping Pipelines. <br><span style=\"color: #10b981;\">Unlock High-Tier Broker Tenders.</span>",
        "secBSub": "Deploy compliant logistical identifiers and structured alpha-numeric code strings safely.",
        "secBBody": "Securing a valid Standard Carrier Alpha Code (SCAC) serves as the primary requirement for processing intermodal freight contracts. Leading commercial enterprises, retail fulfillment networks, and government transit portals reject standard transport manifests without approved NMFTA tokens. We collect your active carrier parameters, verify string values, and clear processing loops securely.",
        "secBImage": "images/scac-compliance.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your logistics company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your fleet journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/scac-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "series-llc": {
        "title": "Series Llc",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "servicemark-filing": {
        "title": "Servicemark Filing",
        "heroPill": "Service Brand Protection",
        "heroHeadline": "Servicemark Filing <br><span style=\"color: #10b981;\">& Intellectual Assets.</span>",
        "heroBody": "Protect your professional service brand names, trade phrases, and operational slogans. We run advanced database lookups and manage your federal filings smoothly.",
        "heroBadge": "Filing Gateway: Active Servicemark Matching Registry",
        "heroImage": "images/servicemark-filing-hero.jpg",
        "secBPill": "Intangible Assets",
        "secBHeadline": "Service Protection. <br><span style=\"color: #10b981;\">Defend Your Delivery.</span>",
        "secBSub": "Establish bulletproof ownership over your operational brand marks and delivery models.",
        "secBBody": "Shield your consulting model, platform identity, or shipping service footprint from direct sector copycats. We review overlapping service classifications, format clean spec details, and submit flawless structural layout entries directly to national registry clerks.",
        "secBImage": "images/servicemark-filing-alternating.jpg",
        "secCPill": "Service Brand Scale",
        "secCHeadline": "Enterprise Asset Shield. <br><span style=\"color: #10b981;\">Engineered For Delivery.</span>",
        "secCSub": "Turn confusing commercial class systems into an automated pipeline asset container layout.",
        "secCBody": "Accelerate your service footprint defense using technical screening frameworks configured to clear registrar checks. We clean up layout structure variations, isolate data mismatches across databases, format precise class descriptions, and deliver clean registries fast.",
        "secCImage": "images/servicemark-filing-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Permanent Service Protection.</span>",
        "secDSub": "Active database synchronization safeguards your profile credentials across intellectual property bureaus.",
        "secDBody": "Avoid complex contract rejections, funding pipeline freezes, or sudden business profile matching drops caused by typos or mismatched state parameters. Our tracking platform monitors data variations, maps layout architectures flawlessly system-wide, and ensures your entity visibility stays permanent.",
        "secDImage": "images/servicemark-filing-shield.jpg"
    },
    "sole-proprietorship": {
        "title": "Sole Proprietorship",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "state-income-tax": {
        "title": "State Income Tax",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "subscribe-email": {
        "title": "Subscribe Email",
        "heroPill": "Compliance Bulletins",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "success": {
        "title": "Success",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "template copy": {
        "title": "Template copy",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "terms-of-service": {
        "title": "Terms Of Service",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "trademark-filing": {
        "title": "Trademark Filing",
        "heroPill": "Intellectual Property",
        "heroHeadline": "Trademark Filing <br><span style=\"color: #10b981;\">& Asset Protection.</span>",
        "heroBody": "Protect your brand name, logos, and corporate slogans from copycats. We run deep structural clearance lookups and file directly to official registry systems safely.",
        "heroBadge": "Registry Channel Sync: Active Intellectual Search Interface",
        "heroImage": "images/trademark-filing-hero.jpg",
        "secBPill": "Brand Integrity",
        "secBHeadline": "Exclusive Ownership. <br><span style=\"color: #10b981;\">Total Market Defense.</span>",
        "secBSub": "Lock in your name and design mark properties securely across active trade vectors.",
        "secBBody": "Protect your unique enterprise asset footprints from competitor theft, confusion, or sudden layout rejection blockages. Our secure pipeline structure handles full class selection audits, structures design description files, and transmits clean formatting records right to official registry agencies.",
        "secBImage": "images/trademark-filing-scale.jpg",
        "secCPill": "IP Pipeline Asset Protection",
        "secCHeadline": "Enterprise IP Protection. <br><span style=\"color: #10b981;\">Engineered For Speed.</span>",
        "secCSub": "Turn complicated trademark classifications into a single streamlined application framework.",
        "secCBody": "Accelerate your brand asset secure containment with automated preparation tools designed to match trademark parameters. We resolve registry conflicts, format specific description matrix layouts, and manage structural filings fast so you can deploy brand campaigns securely.",
        "secCImage": "images/trademark-filing-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield. <br><span style=\"color: #10b981;\">Permanent Identity Safety.</span>",
        "secDSub": "Active database synchronization safeguards your brand assets across commercial registries.",
        "secDBody": "Avoid complex contract rejections, corporate valuation drops, or sudden asset matching blockages caused by name spelling formatting variants. Our background analytical system checks trademark modifications, tracks parameter shifts, and ensures your corporate visibility remains clean.",
        "secDImage": "images/trademark-filing-shield.jpg"
    },
    "trucker-authority": {
        "title": "Trucker Authority",
        "heroPill": "Commercial Fleet Authority Setup",
        "heroHeadline": "Secure Your Commercial <br><span style=\"color: #10b981;\">Trucker Authority Core.</span>",
        "heroBody": "Establish your multi-unit interstate logistics tracks, clear FMCSA motor carrier requirements, and obtain clean active USDOT configurations. We automate form generation layers and coordinate registration pipelines to bypass technical bottlenecks securely.",
        "heroBadge": "Federal Registry Sync: Active & Live",
        "heroImage": "images/trucker-authority-hero.jpg",
        "secBPill": "Logistics Expansion",
        "secBHeadline": "Activate Motor Carrier Status. <br><span style=\"color: #10b981;\">Acquire High-Yield Freight Contracts.</span>",
        "secBSub": "Deploy compliant interstate transport frameworks and clean fleet parameters safely.",
        "secBBody": "Acquiring an active Motor Carrier (MC) number and USDOT index serves as the operational prerequisite for freight movement. Top tier brokers, commercial insurance pools, and digital loadboards reject basic carriage assignments without clean federal registrations. We structure your carrier records, verify asset configurations, and resolve processing loops securely.",
        "secBImage": "images/trucker-authority-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure multi-unit carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/trucker-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "trucker-insurance": {
        "title": "Trucker Insurance",
        "heroPill": "Liability Validation Core",
        "heroHeadline": "Coordinate Trucking Insurance <br><span style=\"color: #10b981;\">BMC-91 & Form H Filings.</span>",
        "heroBody": "Satisfy statutory financial responsibility thresholds required by the FMCSA. We automate your insurance coverage mapping, expedite your BMC-91 data transmission loops, and securely align your dynamic cargo liability proof files.",
        "heroBadge": "Underwriting Portal Exchange: Live & Operational",
        "heroImage": "images/trucker-insurance-hero.jpg",
        "secBPill": "Risk Integration",
        "secBHeadline": "Satisfy Financial Responsibility. <br><span style=\"color: #10b981;\">Unlock Multi-State Operating Tokens.</span>",
        "secBSub": "Deploy compliant underwriting validation frameworks and active liability certifications safely.",
        "secBBody": "Maintaining the mandatory federal cargo and public liability insurance limits is critical to activating any commercial trucking authority. Dispatching units into interstate loops without an official BMC-91 or Form H filing on the FMCSA registry invites immediate motor carrier context suspensions, road citations, or permanent administrative freezes. We gather your underwriting strings, format tax layouts, and process your compliance tokens securely.",
        "secBImage": "images/trucker-insurance-compliance.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial equipment leases safely.",
        "secCImage": "images/insurance-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "ucr-registration": {
        "title": "Ucr Registration",
        "heroPill": "Interstate Transport Mandates",
        "heroHeadline": "File Your Unified <br><span style=\"color: #10b981;\">Carrier Registration (UCR).</span>",
        "heroBody": "Authorize your interstate transport fleet operations under federal safety guidelines. We ingest active USDOT parameters, calculate your precise vehicle bracket indices, and secure your current-year compliance clearances seamlessly.",
        "heroBadge": "National UCR Registry Channel: Active & Live",
        "heroImage": "images/ucr-hero.jpg",
        "secBPill": "Road Enforcement Compliance",
        "secBHeadline": "Clear Scale Houses. <br><span style=\"color: #10b981;\">Bypass Intercept Citations safely.</span>",
        "secBSub": "Deploy compliant multi-state fleet calculations and verified road clearance indicators securely.",
        "secBBody": "Maintaining active Unified Carrier Registration status is mandatory for any operator crossing state boundary lines. Moving commercial motor vehicles across jurisdictions with omitted UCR filings or incorrect bracket assessments triggers immediate roadside detentions, impound flags, and severe department penalties. We audit your live fleet tallies, structure accurate registry inputs, and transmit files securely.",
        "secBImage": "images/ucr-growth.jpg",
        "secCPill": "Growth Infrastructure",
        "secCHeadline": "Logistics Launchpad. <br><span style=\"color: #10b981;\">Engineered For Scale.</span>",
        "secCSub": "Transition your transport company vision into an officially filed legal structure.",
        "secCBody": "Accelerate your business journey with standardized incorporation frameworks. We automate initial tax registration allocations, structure custom carrier credentials, process federal employer identification inputs (EIN), and queue data vectors for instant state record ingestion so you can authorize corporate bank accounts and sign commercial leases safely.",
        "secCImage": "images/ucr-scale.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "wizard copy": {
        "title": "Wizard copy",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "wizard-2": {
        "title": "Wizard 2",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    },
    "wizard3": {
        "title": "Wizard3",
        "heroPill": "Enterprise Ecosystem",
        "heroHeadline": "The Hub for Total Compliance.",
        "heroBody": "Automate your corporate structures securely.",
        "heroBadge": "Active Entity Sync: 10,000+ Verified",
        "heroImage": "images/hero-image.jpg",
        "secBPill": "Main Street Growth",
        "secBHeadline": "Neighborhood Focus.",
        "secBSub": "Streamlined corporate filings.",
        "secBBody": "Protect your independent venture seamlessly.",
        "secBImage": "images/local-business.jpg",
        "secCPill": "Launch Infrastructure",
        "secCHeadline": "Startup Launchpad.",
        "secCSub": "Turn your idea into reality overnight.",
        "secCBody": "Accelerate your early-stage venture seamlessly.",
        "secCImage": "images/startup-launch.jpg",
        "secDPill": "Guaranteed Audit Protection",
        "secDHeadline": "Institutional Shield.",
        "secDSub": "Safeguard your multi-state status.",
        "secDBody": "Avoid costly state penalties automatically.",
        "secDImage": "images/regulatory-compliance.jpg"
    }
};

const EXPLICIT_CONTENT_URL = 'https://lrbimrlbskjweynxlgas.supabase.co'; 
const EXPLICIT_CONTENT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU'; 
const CONTENT_ENGINE_ONLY_SUPABASE = window.supabase.createClient(EXPLICIT_CONTENT_URL, EXPLICIT_CONTENT_KEY); 

/**
 * ==========================================================================
 * 🏛️ FILINGS4U CENTRAL UNIFIED ROUTER MATRIX
 * Strips incoming URL parameters to extract the unique database service key.
 * ==========================================================================
 */
function getUnifiedServiceKey() {
  const path = window.location.pathname;
  let fileName = path.split("/").pop().replace(".html", "").trim().toLowerCase();
  
  // 🎯 STEP 1: Keep the internal database mapping string identical so your lookups don't break
  if (!fileName || fileName === "index" || fileName === "index copy" || fileName === "home") {
    
    // 🎯 STEP 2: Explicitly force the URL history manager to display the clean domain filings4u.com
    // This stops "homepage-main-landing" from being pushed to the address bar
    if (typeof history !== 'undefined' && history.replaceState) {
      history.replaceState(null, '', window.location.origin + window.location.search);
    }
    
    return "homepage-main-landing";
  }
    const urlMap = { 
        "limited-liability-company": "llc-formation", 
        "corporations": "corporation", 
        "nonprofits": "nonprofit-organization", 
        "doing-business-as-dba": "dba-registration", 
        "annual-reports": "annual-reports", 
        "employer-identification-number-ein": "employer-id-ein", 
        "employer-id-ein": "employer-id-ein",
        "dissolution": "entity-dissolution", 
        "good-standing": "good-standing", 
        "certificate-of-good-standing": "good-standing",
        "apostille-services": "apostille-services", 
        "apostille-authentication": "apostille-services",
        "clia-certificate": "clia-certificate", 
        "regulatory-consulting": "legal-consulting", 
        "sole-proprietorship": "sole-proprietorship",
        "series-llc": "series-llc",
        "foreign-entity-certificate": "foreign-qualification",
        "llc-reinstatement": "llc-reinstatement",
        "trademark-filing": "trademark-filing",
        "servicemark-filing": "servicemark-filing",
        "operating-agreement": "operating-agreement",
        "registered-agent": "registered-agent",
        "business-licenses": "business-licenses",
        "cage-code": "cage-code",
        "duns-number": "duns-number",
        "procurement": "procurement-consulting",
        "procurement-registration": "procurement-registration",
        "minority-certificate": "minority-certificate",
        "licenses-permits": "licenses-permits",
        "federal-income-tax": "federal-tax", 
        "state-income-tax": "state-tax", 
        "franchise-tax": "franchise-tax", 
        "franchise-tax-filing": "franchise-tax",
        "sales-tax-registration": "sales-tax", 
        "payroll-tax-940-941": "payroll-tax", 
        "heavy-use-tax-2290": "heavy-use-tax", 
        "owner-operators": "owner-operators", 
        "trucker-authority": "trucker-authority", 
        "broker-authority": "broker-authority", 
        "ucr-registration": "ucr-registration", 
        "scac-code": "scac-code", 
        "scac-code-registration": "scac-code",
        "dot-consortium": "dot-consortium", 
        "driver-qualification-file": "driver-file", 
        "process-agents-boc-3": "process-agent-boc3", 
        "international-fuel-tax-agreement-ifta": "ifta-registration", 
        "hazmat-registration": "dot-hazmat", 
        "new-entrant-audit": "new-entrant-audit",
        "trucker-insurance": "trucker-insurance",
        "broker-insurance": "broker-insurance"
    }; 
    return urlMap[fileName] || fileName; 
}






/**
 * ==========================================================================
 * 📝 AUTOMATED COMPLIANCE DATA TEXT COMPILER (SEO DYNAMIC MATRIX)
 * Separates homepage and auto-generates unique service copywriting lines.
 * ==========================================================================
 */
function resolveDynamicPageTextContent(slugKey) { 
    if (typeof GLOBAL_SEO_CONTENT_MAP !== "undefined" && GLOBAL_SEO_CONTENT_MAP[slugKey]) {
        return GLOBAL_SEO_CONTENT_MAP[slugKey];
    }

    if (slugKey === "homepage-main-landing") { 
        return { 
            title: "Corporate Launchpad", 
            pricingKey: "llc-formation", 
            seoTitle: "Filings4U | Enterprise Entity Setup & Business Compliance Platforms", 
            metaDesc: "Automate your company setups, asset registries, and federal operating authorizations flawlessly out of a single secure infrastructure dashboard layer.", 
            heroPill: "Automated Registry Systems", 
            heroHeadline: "The Engine for <br><span style='color:#10b981;'>Corporate Launching.</span>", 
            heroBody: "Launch, scale, and manage your asset protection profiles across all 50 State registries overnight. We automate your legal document filings, tax parameters, and organizational agreements securely.", 
            heroBadge: "System Core Sync: 140,000+ Profiles Active", 
            heroImage: "images/hero-image.jpg",
            secBPill: "Independent Ventures", 
            secBHeadline: "Main Street Growth. <br><span style='color:#10b981;'>Built For Communities.</span>", 
            secBSub: "High-accuracy structural filings optimized for local business frameworks.", 
            secBBody: "Protect your commercial operations with processing tracking loops built directly for startup builders and family shops. We manage state schedules securely so you can focus on community engagement.", 
            secBImage: "images/local-business.jpg",
            secCPill: "Global Distribution Networks", 
            secCHeadline: "Transit Infrastructure. <br><span style='color:#10b981;'>Built For Operations.</span>", 
            secCSub: "Full-spectrum fleet setup logs mapped flawlessly across state borders.", 
            secCBody: "Accelerate your logistical authorities under a robust unified dashboard tracking framework. We coordinate trucker registrations, broker permissions, state operating permits, and background drug screening accounts seamlessly.", 
            secCImage: "images/startup-launch.jpg",
            secDPill: "Continuous Asset Shield", 
            secDHeadline: "Guaranteed Compliance. <br><span style='color:#10b981;'>Permanent Good Standing.</span>", 
            secDSub: "Proactive automated calendar sweeps eliminate corporate data gaps.", 
            secDBody: "Never face administrative state penalties, account freezing, or accidental entity exposure. Our cloud tracking matrix scans regulatory alterations daily, records state department transitions, and completes filing paperwork error-free.",
            secDImage: "images/regulatory-compliance.jpg"
        }; 
    } 

    const titleText = slugKey.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '); 
    return { 
        title: titleText, 
        pricingKey: slugKey, 
        seoTitle: titleText + " Registration & Filing Services | filings4u", 
        metaDesc: "Automate your corporate " + titleText + " tracking. Complete state processing schedules, document validation, and structural registrations managed error-free.", 
        heroPill: "Compliance Ecosystem", 
        heroHeadline: "The Platform for <br><span style='color:#10b981;'>Total " + titleText + ".</span>", 
        heroBody: "Automate your institutional profiles, dynamic state processing deadlines, and required legal updates from a single secure system deck. We establish the high-performance pipeline handshake between you and public registries for your secure " + titleText + " processing.", 
        heroBadge: "Operational Network Sync: Active & Monitored", 
        heroImage: "images/hero-image.jpg", 
        secBPill: "Operational Compliance", 
        secBHeadline: "Strategic Focus. <br><span style='color:#10b981;'>Built For Continuity.</span>", 
        secBSub: "High-fidelity filing architecture designed for corporate peace of mind.", 
        secBBody: "Shield your ongoing corporate infrastructure utilizing secure monitoring systems designed for agile founders, fleet directors, and main-street operators. We process your unique " + titleText + " entries smoothly to stay completely clear of state processing errors.", 
        secBImage: "images/local-business.jpg", 
        secCPill: "Infrastructure Expansion", 
        secCHeadline: "Scalable Systems. <br><span style='color:#10b981;'>Built For Development.</span>", 
        secCSub: "Accelerate your operational velocity without data verification gaps.", 
        secCBody: "Turn your company metrics into fully approved registry tracks. Our centralized dashboard tracking matrix handles calendar guidelines, manages documentation forms, and submits your required " + titleText + " parameters securely so your enterprise stays approved.", 
        secCImage: "images/startup-launch.jpg", 
        secDPill: "Guaranteed Audit Protection", 
        secDHeadline: "Institutional Shield. <br><span style='color:#10b981;'>Permanent Accuracy.</span>", 
        secDSub: "Active database synchronization safeguards your status across state lines.", 
        secDBody: "Avoid costly state penalties, business asset exposure, or accidental corporate dissolution. Our backdrop system actively checks state department registries daily to verify that your active filing profiles remain locked down, approved, and shielded.", 
        secDImage: "images/regulatory-compliance.jpg" 
    }; 
}


/**
 * ==========================================================================
 * 🎨 MASTER INTERFACE LAYOUT ASSEMBLER (MOBILE RESPONSIVE PLATFORM)
 * Unifies backgrounds to #0a1f44 and isolates card element styles.
 * ==========================================================================
 */
function compileUpperLayoutBlueprintHtml(data) { 
    var out = ''; 
    
    out += '<style>' +
        '  .f4u-layout-section { padding: 80px 0; width: 100% !important; max-width: 100% !important; box-sizing: border-box; margin: 0 !important; overflow: hidden; position: relative; display: block; }' +
        '  .f4u-layout-container { width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10; }' +
        '  .f4u-flex-grid { display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 60px; width: 100%; box-sizing: border-box; }' +
        '  .f4u-flex-column { flex: 1; width: 100%; box-sizing: border-box; }' +
        '  .f4u-hero-under-nav { margin-top: 100px !important; padding-top: 40px !important; padding-bottom: 80px !important; }' + 
        '  .f4u-unified-navy { background-color: #0a1f44 !important; background-image: radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px) !important; background-size: 20px 20px !important; color: #f4f7fa !important; }' +
        '  .f4u-clean-white { background: #ffffff !important; color: #0a1f44 !important; }' +
        '  .f4u-responsive-graphic { width: 100%; height: auto; display: block; border-radius: 12px; box-sizing: border-box; }' +
        '  .f4u-unified-navy .f4u-responsive-graphic { border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 20px 40px rgba(0,0,0,0.45); }' +
        '  .f4u-clean-white .f4u-responsive-graphic { border: 1px solid rgba(10,31,68,0.15); box-shadow: 0 20px 40px rgba(10,31,68,0.15); }' +
        '  @media (max-width: 960px) {' +
        '    .f4u-flex-grid { flex-direction: column !important; gap: 40px !important; align-items: flex-start !important; }' +
        '    .f4u-flex-column { width: 100% !important; flex: none !important; }' +
        '    .f4u-hero-stack { flex-direction: column-reverse !important; }' + 
        '    .f4u-layout-section { padding: 50px 0 !important; }' +
        '    .f4u-layout-container { padding: 0 20px !important; }' +
        '    h1 { font-size: 2.4rem !important; line-height: 1.15 !important; }' +
        '    h2 { font-size: 1.9rem !important; }' +
        '    .f4u-metrics-strip-wrapper { flex-direction: column !important; gap: 20px !important; }' +
        '    .f4u-image-wrapper { order: -1 !important; width: 100% !important; display: block !important; }' + 
        '  }' +
        '</style>';

    // LAYER 1: HERO UNIT
    out += '<section class="f4u-layout-section f4u-clean-white f4u-hero-under-nav"><div class="f4u-layout-container"><div class="f4u-flex-grid f4u-hero-stack"><article class="f4u-flex-column"><span style="color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.15);">' + data.heroPill + '</span><h1 style="color:#0a1f44; font-size:3.2rem; font-weight:900; margin:0 0 18px 0; line-height:1.1; letter-spacing:-1px;">' + data.heroHeadline + '</h1><p style="color:#475569; font-size:1.1rem; line-height:1.6; margin:0 0 24px 0;">' + data.heroBody + '</p><div style="display:flex; align-items:center; gap:10px; margin-bottom:32px;"><div style="height:2px; width:24px; background:#10b981;"></div><span style="color:#0a1f44; font-weight:700; font-size:0.9rem;">' + data.heroBadge + '</span></div><a href="#pricing" class="btn-main" style="background:#10b981; color:#ffffff; font-weight:700; text-decoration:none; padding:14px 32px; border-radius:6px; display:inline-block; box-shadow:0 10px 20px rgba(16,185,129,0.2);">Get Started &rarr;</a></article><aside class="f4u-flex-column f4u-image-wrapper"><img src="' + data.heroImage + '" class="f4u-responsive-graphic"></aside></div></div></section>'; 

    // LAYER 2: SYSTEM METRICS DASHBOARD STRIP
    out += '<section class="f4u-layout-section f4u-unified-navy"><div class="f4u-layout-container"><div style="display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid rgba(244,247,250,0.1); padding-bottom:24px; margin-bottom:40px; flex-wrap:wrap; gap:24px; width:100%; box-sizing:border-box;"><h2 style="margin:0; font-size:2.2rem; font-weight:800; color:#ffffff; letter-spacing:-0.5px; line-height:1.2;">Corporate Filing Infrastructure</h2><div style="display:flex; align-items:center; gap:8px; font-size:0.8rem; font-weight:700; color:#10b981; font-family:monospace; background:rgba(16,185,129,0.1); padding:8px 16px; border-radius:30px; border:1px solid rgba(16,185,129,0.2);"><span style="width:8px; height:8px; background:#10b981; border-radius:50%; display:inline-block;"></span> ALL CLEAR: SECURE REST GATEWAYS ACTIVE</div></div>' +
           '<div class="f4u-metrics-strip-wrapper" style="display:flex; gap:30px; width:100%; box-sizing:border-box; margin:0;">' +
           '<div style="background-color:#0a1f44 !important; background-image:none !important; border:1px solid rgba(255,255,255,0.15); border-radius:12px; padding:30px 24px; flex:1;">🏢<div style="font-size:2.4rem; font-weight:900; color:#ffffff; font-family:monospace;">142K+</div><div style="font-size:0.95rem; font-weight:800; color:#cbd5e1; margin-top:4px;">Corporate Entities Formed</div></div>' +
           '<div style="background-color:#0a1f44 !important; background-image:none !important; border:1px solid rgba(255,255,255,0.15); border-radius:12px; padding:30px 24px; flex:1;">🚛<div style="font-size:2.4rem; font-weight:900; color:#ffffff; font-family:monospace;">38,410</div><div style="font-size:0.95rem; font-weight:800; color:#cbd5e1; margin-top:4px;">Active Transits Monitored</div></div>' +
           '<div style="background-color:#0a1f44 !important; background-image:none !important; border:1px solid rgba(255,255,255,0.15); border-radius:12px; padding:30px 24px; flex:1;">⚡<div style="font-size:2.4rem; font-weight:900; color:#10b981; font-family:monospace;">1.8s</div><div style="font-size:0.95rem; font-weight:800; color:#cbd5e1; margin-top:4px;">Average API Pipeline Turn</div></div>' +
           '<div style="background-color:#0a1f44 !important; background-image:none !important; border:1px solid rgba(255,255,255,0.15); border-radius:12px; padding:30px 24px; flex:1;">🔒<div style="font-size:2.4rem; font-weight:900; color:#ffffff; font-family:monospace;">99.98%</div><div style="font-size:0.95rem; font-weight:800; color:#cbd5e1; margin-top:4px;">Filing Accuracy Quotient</div></div>' +
           '</div></div></section>';

    // LAYER 3: OPERATIONAL FOCUS SECTION B
    out += '<section class="f4u-layout-section f4u-clean-white"><div class="f4u-layout-container"><div class="f4u-flex-grid"><div class="f4u-flex-column f4u-image-wrapper"><img src="' + data.secBImage + '" class="f4u-responsive-graphic"></div><div class="f4u-flex-column"><span style="color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.15);">' + data.secBPill + '</span><h2 style="color:#0a1f44; font-size:2.5rem; font-weight:900; margin:0 0 18px 0; line-height:1.15; letter-spacing:-0.5px;">' + data.secBHeadline + '</h2><p style="color:#0a1f44; font-weight:700; font-size:1.05rem; margin:0 0 12px 0; line-height:1.4;">' + data.secBSub + '</p><p style="color:#475569; font-size:1rem; line-height:1.6; margin:0 0 28px 0;">' + data.secBBody + '</p></div></div></div></section>'; 

    // LAYER 4: INFRASTRUCTURE EXPANSION SECTION C
    out += '<section class="f4u-layout-section f4u-unified-navy"><div class="f4u-layout-container"><div class="f4u-flex-grid"><div class="f4u-flex-column"><span style="color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.12); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.25);">' + data.secCPill + '</span><h2 style="color:#ffffff; font-size:2.5rem; font-weight:900; margin:0 0 18px 0; line-height:1.15; letter-spacing:-0.5px;">' + data.secCHeadline + '</h2><p style="color:#cbd5e1; font-weight:700; font-size:1.05rem; margin:0 0 12px 0; line-height:1.4;">' + data.secCSub + '</p><p style="color:#94a3b8; font-size:1rem; line-height:1.6; margin:0 0 28px 0;">' + data.secCBody + '</p></div><div class="f4u-flex-column f4u-image-wrapper"><img src="' + data.secCImage + '" class="f4u-responsive-graphic"></div></div></div></section>'; 

    return out; 
}

/* Update ONLY this function inside your content-engine.js file */
function compileSectionDLayoutHtml(data) {
    return '<div class="f4u-layout-container">' +
           // 1. Injects f4u-grid to lock text columns to a max balanced width
           '<div class="f4u-grid f4u-reverse-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%; box-sizing:border-box;">' +
           
           // Left Side Image Container
           '<div style="display:flex; justify-content:center; box-sizing:border-box; width:100%;">' +
           '<img src="' + data.secDImage + '" class="f4u-img" style="width:100%; height:auto; display:block; border-radius:12px;">' +
           '</div>' +
           
           // Right Side Aligned Text Container
           '<div style="width:100%; max-width:550px; box-sizing:border-box; text-align:left;">' +
           '<span style="color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.15); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.25);">' + data.secDPill + '</span>' +
           '<h2 style="color:#ffffff; font-size:2.5rem; font-weight:900; margin:0 0 18px 0; line-height:1.15; letter-spacing:-0.5px;">' + data.secDHeadline + '</h2>' + 
           '<p style="color:#cbd5e1; font-weight:700; font-size:1.05rem; margin:0 0 12px 0; line-height:1.4;">' + data.secDSub + '</p>' + 
           '<p style="color:#94a3b8; font-size:1rem; line-height:1.6; margin:0; word-break:break-word;">' + data.secDBody + '</p>' + 
           '</div>' +
           
           '</div>' +
           '</div>';
}


/**
 * ==========================================================================
 * 🚀 HYBRID DATA ACQUISITION & CHESSBOARD ARRANGEMENT SEQUENCER
 * Self-contained engine that handles 406 network errors and auto-generates layout lines.
 * ==========================================================================
 */
async function renderMasterSystem() {
  try {
    const activeSlug = getUnifiedServiceKey();
    console.log("🎯 Content Engine Launching Query Sequence For: " + activeSlug);

    let dbRow = null;

    // 1. Fetch from database with direct, clean web-native REST lookups to bypass 406 script crashes
    try {
      const backupUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
      const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
      
      // Target the direct endpoint URL explicitly passing your filtering parameters
      const endpointUrl = `${backupUrl}/rest/v1/services?select=*&slug=eq.${activeSlug}`;

      const response = await fetch(endpointUrl, {
        method: "GET",
        headers: {
          "apikey": backupKey,
          "Authorization": `Bearer ${backupKey}`,
          // 🎯 THE 406 ERROR RESOLUTION FIX: Forces the server to accept and transmit clean JSON
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        const rawJsonPayloadArray = await response.json();
        // Since lookups return an array layout, extract the first index record row cleanly
        if (rawJsonPayloadArray && rawJsonPayloadArray.length > 0) {
          dbRow = rawJsonPayloadArray[0];
        }
      } else {
        console.warn(`[Supabase 406 Handshake Refused] Server returned status: ${response.status}`);
      }

    } catch (netErr) {
      console.warn("⚠️ Network Layer blocked Supabase REST call. Dropping into local automation matrix.", netErr);
    }

    // 2. Generate clean semantic page name variants automatically
    let serviceTitleString = activeSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    if (dbRow && dbRow.service_title) {
      serviceTitleString = dbRow.service_title;
    }
    
    // Remainder of your layout generation code block continues below cleanly...


        // 3. Build fully declared content lines to prevent blank or broken properties
        const dynamicContent = {
            pricingKey: activeSlug, 
            seoTitle: serviceTitleString + " Registration & Filing Services | filings4u",
            metaDesc: "Automate your corporate " + serviceTitleString + " tracking. Complete state processing schedules error-free.",
            
            heroPill: serviceTitleString + " Framework",
            heroHeadline: "The Engine for <br><span style='color:#10b981;'>Total " + serviceTitleString + ".</span>",
            heroBody: "Launch, scale, and manage your asset protection profiles across all 50 State registries overnight. We automate your legal document filings, tax parameters, and organizational agreements securely for your " + serviceTitleString + " processing.",
            heroBadge: serviceTitleString + " Sync: 140,000+ Profiles Active",
            
            secBPill: "Operational Compliance",
            secBHeadline: serviceTitleString + " Focus. <br><span style='color:#10b981;'>Built For Continuity.</span>",
            secBSub: "High-fidelity filing architecture designed for corporate peace of mind.",
            secBBody: "Protect your commercial operations with processing tracking loops built directly for startup builders and family shops. We manage state schedules securely so you can focus on community engagement and flawless " + serviceTitleString + " execution.",
            
            secCPill: "Infrastructure Expansion",
            secCHeadline: "Scalable Systems. <br><span style='color:#10b981;'>Built For " + serviceTitleString + ".</span>",
            secCSub: "Full-spectrum fleet setup logs mapped flawlessly across state borders.",
            secCBody: "Accelerate your logistical authorities under a robust unified dashboard tracking framework. We coordinate your structural transformations, state operating permits, and background screening accounts seamlessly.",
            
            secDPill: "Continuous Asset Shield",
            secDHeadline: "Guaranteed Compliance. <br><span style='color:#10b981;'>Permanent Good Standing.</span>",
            secDSub: "Proactive automated calendar sweeps eliminate corporate data gaps.",
            secDBody: "Never face administrative state penalties, account freezing, or accidental entity exposure. Our cloud tracking matrix scans regulatory alterations daily, records state department transitions, and completes filing paperwork error-free.",
            
            // 🤖 AUTOMATED CANVA MEDIA PIPELINE: Maps your local folder image layouts using the file slug
            heroImage: "images/" + activeSlug + "-hero.jpg", 
            secBImage: "images/" + activeSlug + "-secb.jpg", 
            secCImage: "images/" + activeSlug + "-secc.jpg", 
            secDImage: "images/" + activeSlug + "-secd.jpg"
        };

        // Explicit override to retain original home content only on the main landing index page
        if (activeSlug === "homepage-main-landing") {
            dynamicContent.heroImage = "images/hero-image.jpg";
            dynamicContent.secBImage = "images/local-business.jpg";
            dynamicContent.secCImage = "images/startup-launch.jpg";
            dynamicContent.secDImage = "images/regulatory-compliance.jpg";
            dynamicContent.heroPill = "Automated Registry Systems";
            dynamicContent.heroHeadline = "The Engine for <br><span style='color:#10b981;'>Corporate Launching.</span>";
            dynamicContent.heroBody = "Launch, scale, and manage your asset protection profiles across all 50 State registries overnight. We automate your legal document filings, tax parameters, and organizational agreements securely.";
            dynamicContent.heroBadge = "System Core Sync: 140,000+ Profiles Active";
            dynamicContent.secBPill = "Independent Ventures";
            dynamicContent.secBHeadline = "Main Street Growth. <br><span style='color:#10b981;'>Built For Communities.</span>";
            dynamicContent.secBSub = "High-accuracy structural filings optimized for local business frameworks.";
            dynamicContent.secBBody = "Protect your commercial operations with processing tracking loops built directly for startup builders and family shops. We manage state schedules securely so you can focus on community engagement.";
            dynamicContent.secCPill = "Global Distribution Networks";
            dynamicContent.secCHeadline = "Transit Infrastructure. <br><span style='color:#10b981;'>Built For Operations.</span>";
            dynamicContent.secCSub = "Full-spectrum fleet setup logs mapped flawlessly across state borders.";
            dynamicContent.secCBody = "Accelerate your logistical authorities under a robust unified dashboard tracking framework. We coordinate trucker registrations, broker permissions, state operating permits, and background drug screening accounts seamlessly.";
            dynamicContent.secDPill = "Continuous Asset Shield";
            dynamicContent.secDHeadline = "Guaranteed Compliance. <br><span style='color:#10b981;'>Permanent Good Standing.</span>";
            dynamicContent.secDSub = "Proactive automated calendar sweeps eliminate corporate data gaps.";
            dynamicContent.secDBody = "Never face administrative state penalties, account freezing, or accidental entity exposure. Our cloud tracking matrix scans regulatory alterations daily, records state department transitions, and completes filing paperwork error-free.";
        }

        // Synchronize browser head title and metadata description
        document.title = dynamicContent.seoTitle; 
        let metaDescTag = document.querySelector('meta[name="description"]'); 
        if (!metaDescTag) { 
            metaDescTag = document.createElement('meta'); 
            metaDescTag.setAttribute('name', 'description'); 
            document.head.appendChild(metaDescTag); 
        } 
        metaDescTag.setAttribute('content', dynamicContent.metaDesc); 

        // 🏛️ LAYOUT STEP 1: Paint upper text blocks above pricing grid elements
        const dynamicSectionsRoot = document.getElementById("dynamic-sections-root"); 
        if (dynamicSectionsRoot && typeof compileUpperLayoutBlueprintHtml === "function") { 
            dynamicSectionsRoot.innerHTML = compileUpperLayoutBlueprintHtml(dynamicContent); 
        } 

        // 🏛️ LAYOUT STEP 2: Position Pricing modules and trigger state-pricing integration
        const pricingRoot = document.getElementById("website-package-pricing-cards-root"); 
        if (pricingRoot) { 
            pricingRoot.setAttribute("data-service-key", dynamicContent.pricingKey); 
            pricingRoot.style.cssText = "width:100% !important; max-width:1450px !important; margin:0 auto !important; padding:60px 40px !important; box-sizing:border-box !important; display:block !important; background:#ffffff !important; position:relative !important; z-index:20 !important; background-image:none !important;"; 
            
            let priceTitle = pricingRoot.querySelector("h2"); 
            if (priceTitle) priceTitle.style.setProperty("color", "#0a1f44", "important"); 
            
            if (typeof renderMainWebsitePricingCards === "function") { 
                renderMainWebsitePricingCards(dynamicContent.pricingKey); 
            } 
        } 

        // 🏛️ LAYOUT STEP 3: Position section D directly below white pricing cards
        let sectionDElement = document.getElementById("dynamic-section-d-container"); 
        if (!sectionDElement) { 
            sectionDElement = document.createElement("div"); 
            sectionDElement.id = "dynamic-section-d-container"; 
            if (pricingRoot) pricingRoot.parentNode.insertBefore(sectionDElement, pricingRoot.nextSibling); 
        } 
        sectionDElement.className = "f4u-layout-section f4u-unified-navy";
        if (typeof compileSectionDLayoutHtml === "function") {
            sectionDElement.innerHTML = compileSectionDLayoutHtml(dynamicContent); 
        }

        // 🏛️ LAYOUT STEP 4: Enforce contrast margins across subscribe blocks
        const subscribeContainer = document.getElementById("compliance-subscribe-form-container") || document.querySelector(".subscribe-section-wrapper"); 
        if (subscribeContainer && sectionDElement) { 
subscribeContainer.style.cssText = "background:#ffffff !important; color:#0a1f44 !important; padding:80px 0 !important; margin:0 !important; width:100% !important; max-width:100% !important; position:relative !important; z-index:10 !important; background-image:none !important;";let subTitle = subscribeContainer.querySelector("h3, h2");if (subTitle) subTitle.style.setProperty("color", "#0a1f44", "important");let subText = subscribeContainer.querySelector("p");if (subText) subText.style.setProperty("color", "#475569", "important");sectionDElement.parentNode.insertBefore(subscribeContainer, sectionDElement.nextSibling);console.log("🏁 Content engine compiled completely without anomalies!");}} catch (globalCatchError) {console.error("❌ Content Engine Pipeline Exception Caught:", globalCatchError);}}document.addEventListener("DOMContentLoaded", renderMasterSystem);


/**
 * ============================================================================
 * 🌐 DYNAMIC CONTENT ENGINE MODULE: COMPLIANCE SUBSCRIBE COMPONENT
 * Injects the clean subscription markup frame directly into the page DOM
 * ============================================================================
 */
function renderDynamicComplianceSubscribeSection(targetElementId) {
  const mountAnchorNode = document.getElementById(targetElementId);
  if (!mountAnchorNode) {
    console.warn(`[Content Engine] Injection target element ID "#${targetElementId}" was not found in the DOM.`);
    return;
  }

  // Inject the raw HTML structure directly into your placement zone
  mountAnchorNode.innerHTML = `
    <section class="compliance-subscribe-wrapper" style="background: #ffffff; padding: 80px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; position: relative; overflow: hidden; margin-bottom: 0 !important; border-bottom: none !important;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#0a1f44 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; position: relative; z-index: 10;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 60px; align-items: center; width: 100%;">
          
          <!-- Left Text Info Area -->
          <div style="width: 100%; box-sizing: border-box;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; background: rgba(16, 185, 129, 0.12); padding: 4px 12px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.2);">Compliance Bulletins</span>
            <h2 style="color: #0a1f44; font-size: 2.6rem; font-weight: 900; margin: 0 0 16px 0; line-height: 1.15; letter-spacing: -0.5px;">Stay Informed. <br><span style="color: #10b981;">Secure Growth.</span></h2>
            <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin: 0; max-width: 580px;">Get actionable regulatory deadline text flashes, corporate filing advice, and federal state policy change updates sent straight to your box.</p>
          </div>
          
          <!-- Right Submission Capture Form Layout -->
          <div style="width: 100%; box-sizing: border-box;">
            <form id="compliance-subscribe-form" style="display: flex; gap: 14px; width: 100%; background: rgba(10, 31, 68, 0.02); border: 1px solid rgba(10, 31, 68, 0.08); padding: 20px; border-radius: 16px; box-shadow: 0 10px 30px rgba(10, 31, 68, 0.05); box-sizing: border-box;">
              <input type="email" id="subscriber-email" placeholder="Enter your business email..." required aria-label="Business Email" style="flex: 1; padding: 16px 22px; font-size: 0.95rem; font-weight: 500; border-radius: 8px; border: 1px solid rgba(10, 31, 68, 0.15); background: #ffffff; color: #0a1f44; outline: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); transition: all 0.25s ease;">
              <button type="submit" id="subscribe-button" style="background: #10b981; color: #ffffff; border: none; font-weight: 700; font-size: 0.95rem; padding: 0 32px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); transition: all 0.2s;">Subscribe</button>
            </form>
            
            <div id="form-status-message" role="status" aria-live="polite" style="margin-top: 14px; font-size: 0.9rem; display: none; padding: 12px 16px; border-radius: 8px; font-weight: 600; line-height: 1.4;"></div>
            
            <div style="display: flex; align-items: center; gap: 6px; margin-top: 14px; font-size: 0.75rem; color: #64748b; padding-left: 4px;">
              <span style="color: #10b981; font-weight: 800; letter-spacing: 0.05em;">🛡️ ENCRYPTED GATEWAY</span> Your data is fully shielded under 256-bit protocol architectures.
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}


/**
 * Injects the global corporate footer HTML directly into the page DOM
 */
function renderDynamicGlobalCorporateFooter(targetElementId) {
  const footerNode = document.getElementById(targetElementId);
  if (!footerNode) return;

  footerNode.innerHTML = `
    <footer class="site-footer" style="position: relative; overflow: hidden; background: #0a1f44; color: #ffffff; padding: 60px 0 30px 0; font-family: system-ui, sans-serif;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <style>
        .footer-container { display: grid; grid-template-columns: 2fr repeat(4, 1fr); gap: 40px; width: 100%; max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box; }
        .footer-brand p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin: 15px 0 0 0; max-width: 320px; }
        .footer-col h4 { color: #ffffff; font-size: 1.05rem; font-weight: 700; margin: 0 0 20px 0; }
        .footer-col ul { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 12px; }
        .footer-col ul li a { color: #94a3b8; text-decoration: none; font-size: 0.9rem; transition: color 0.2s ease; }
        .footer-col ul li a:hover { color: #10b981; }
        .footer-bottom { max-width: 1450px; margin: 40px auto 0 auto; padding: 30px 40px 0 40px; border-top: 1px solid rgba(255, 255, 255, 0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; box-sizing: border-box; }
        .footer-bottom .legal-links { display: flex; gap: 20px; }
        .footer-bottom .legal-links a { color: #94a3b8; text-decoration: none; font-size: 0.85rem; transition: color 0.2s ease; }
        .footer-bottom .legal-links a:hover { color: #10b981; }
        .scroll-to-top-btn { position: fixed; bottom: 30px; right: 30px; width: 45px; height: 45px; background: #10b981; color: #ffffff; border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 99; }
        .scroll-to-top-btn.visible { opacity: 1; visibility: visible; }
        @media (max-width: 991px) {
          .footer-container { grid-template-columns: 1fr 1fr !important; gap: 35px !important; }
          .footer-brand { grid-column: span 2 !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; align-items: center !important; }
          .footer-bottom .legal-links { justify-content: center !important; flex-wrap: wrap !important; }
        }
        @media (max-width: 480px) { .footer-container { grid-template-columns: 1fr !important; } .footer-brand { grid-column: span 1 !important; } }
      </style>

      <div class="footer-container">
        <div class="footer-brand">
          <a href="index.html" style="display: inline-block; text-decoration: none; transition: opacity 0.2s ease;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
            <img src="images/logo-white.png" alt="filings4u" style="height: 48px !important; width: auto !important; object-fit: contain;">
          </a>
          <p>Providing enterprise-grade compliance infrastructure for the modern logistics and corporate landscape.</p>
          <div style="margin-top: 25px; display: flex; gap: 15px;">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;">
              <svg width="14" height="14" fill="white" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;">
              <svg width="16" height="16" fill="white" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.301 1.103.33 3.483.33 4.246 0 .763-.029 3.143-.33 4.246a2.01 2.01 0 0 1-1.415 1.419c-1.123.302-5.288.332-6.11.335h-.09c-.822-.003-4.987-.033-6.11-.335a2.01 2.01 0 0 1-1.415-1.419C.03 11.143 0 8.763 0 8c0-.763.029-3.143.33-4.246a2.01 2.01 0 0 1 1.415-1.42c1.123-.302 5.288-.332 6.11-.335h.089zM6.374 11.155l4.356-2.651a.26.26 0 0 0 0-.442L6.374 5.412a.26.26 0 0 0-.398.221v5.301a.26.26 0 0 0 .398.22z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;">
              <svg width="12" height="12" fill="white" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>
            </a>
          </div>
        </div>
        
        <div class="footer-col">
          <h4>Formations</h4>
          <ul>
            <li><a href="limited-liability-company.html">LLC Formation</a></li>
            <li><a href="corporations.html">Corporations</a></li>
            <li><a href="nonprofits.html">Non-Profits</a></li>
            <li><a href="registered-agent.html">Registered Agent</a></li>
            <li><a href="employer-identification-number-ein.html">Tax ID (EIN)</a></li>
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
        
        <div class="footer-col">
          <h4>Tax & Filings</h4>
          <ul>
            <li><a href="federal-income-tax.html">Federal Income Tax</a></li>
            <li><a href="state-income-tax.html">State Income Tax</a></li>
            <li><a href="sales-tax-registration.html">Sales Tax Registration</a></li>
            <li><a href="payroll-tax-940-941.html">Payroll Tax (940/941)</a></li>
            <li><a href="franchise-tax.html">Franchise Tax Filing</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="https://filings4u.com">Client Portal</a></li>
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
            &copy; 2026 filings4u, LLC. All rights reserved. A Subsidiary of <a href="https://roselandcompanies.com" target="_blank" rel="noopener noreferrer" style="color: #ef4444; text-decoration: none; font-weight: bold;">Roseland Companies, LLC</a>
          </p>
        </div>
        
        <div class="trust-badge" style="display: block !important; visibility: visible !important; opacity: 1 !important; pointer-events: auto !important; position: relative !important; background: rgba(255, 255, 255, 0.05) !important; padding: 10px 20px !important; border-radius: 8px !important; font-size: 0.75rem !important; color: #ffffff !important;">
          <span style="color: #10b981 !important; font-weight: 800 !important; margin-right: 8px !important; display: inline !important;">SECURE</span> 256-bit SSL Encrypted Connection
        </div>
        
        <div class="legal-links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms-of-service.html">Terms of Service</a>
          <a href="refund-policy.html">Refund Policy</a>
        </div>
      </div>
    </footer>

    <button id="scrollToTopBtn" aria-label="Scroll to top" class="scroll-to-top-btn">
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg>
    </button>
  `;

  // Attach functionality to the injected button node immediately
  const topBtn = document.getElementById("scrollToTopBtn");
  if (topBtn) {
    window.addEventListener("scroll", () => topBtn.classList.toggle("visible", window.scrollY > 400));
    topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

 document.addEventListener("DOMContentLoaded", function() {
    if (typeof renderDynamicGlobalCorporateFooter === "function") {
      renderDynamicGlobalCorporateFooter("global-platform-footer-zone");
    }
  });