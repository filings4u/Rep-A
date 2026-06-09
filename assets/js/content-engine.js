/**
 * ==========================================================================
 * 🗺️ CENTRAL 44-SERVICE SEO & CONTENT ARCHITECTURE MATRIX
 * Changing any entry here updates text, titles, and tags across pages instantly.
 * ==========================================================================
 */
const GLOBAL_SEO_CONTENT_MAP = {
    "limited-liability-company": {
        pricingKey: "llc-formation",
        title: "LLC Formation",
        seoTitle: "Fast LLC Formation Services | Protect Your Assets | filings4u",
        metaDesc: "Form your Limited Liability Company online instantly. We manage state filing fees, articles of organization, and corporate structures securely.",
        heroHeadline: "The Launchpad for <br><span style='color: #10b981;'>Your New LLC.</span>",
        heroBody: "Turn your business idea into an officially recognized legal structure overnight. We automate your Articles of Organization filings across all 50 State Secretary registries with total asset protection built-in.",
        sectionTitle: "Main Street Growth",
        sectionHeadline: "Neighborhood Focus. <br><span style='color: #10b981;'>Built For Community.</span>",
        sectionBody: "Protect your independent venture with specialized entity setup frameworks built for independent startups, family shops, and local operators. We handle state filing requirements so you can focus on scale."
    },
    "annual-reports": {
        pricingKey: "annual-reports",
        title: "Annual Reports",
        seoTitle: "Annual Report Filing Services | Stay Compliant | filings4u",
        metaDesc: "Automate your corporate annual report filing. Avoid penalties, late fees, and administrative dissolution with proactive compliance tracking.",
        heroHeadline: "The Shield for <br><span style='color: #10b981;'>Entity Good Standing.</span>",
        heroBody: "Never miss a state compliance milestone or risk your corporate architecture. Our background system tracks shifts in regulatory schedules, processes state fee variables, and ensures your operational status is shielded.",
        sectionTitle: "Guaranteed Shield",
        sectionHeadline: "Institutional Protection. <br><span style='color: #10b981;'>Never Miss A Filing.</span>",
        sectionBody: "Avoid costly state penalties, business asset exposure, or accidental corporate dissolution. We handle your annual reporting loops under a protected network infrastructure layer so you stay 100% compliant."
    },
    "corporations": {
        pricingKey: "corporation",
        title: "Corporations (C/S-Corp)",
        seoTitle: "Incorporate Online | C-Corp & S-Corp Setup | filings4u",
        metaDesc: "Launch your corporate registry framework securely. Complete automated state filing, bylaws drafting, and customized stock issuance frameworks.",
        heroHeadline: "The Engine for <br><span style='color: #10b981;'>Corporate Scaling.</span>",
        heroBody: "Issue shares, structure governance, and protect institutional capital from day one. We automate complex corporate articles of incorporation and bylaws preparation under a high-performance compliance grid.",
        sectionTitle: "Launch Framework",
        sectionHeadline: "Startup Architecture. <br><span style='color: #10b981;'>Built For Scale.</span>",
        sectionBody: "Accelerate your early-stage enterprise venture with robust entity setup blueprints. We provide the automated technical handshake between your executive team and state registries seamlessly."
    }
    // 💡 PRO-TIP: You will paste additional service rows right in here following this exact layout block pattern!
};


function resolveCurrentPageData() {
    const path = window.location.pathname;
    const fileName = path.split("/").pop().replace(".html", "").trim().toLowerCase() || "limited-liability-company";
    
    // Fallback dictionary generation logic if an unmapped URL path is requested
    const defaultData = {
        pricingKey: fileName,
        title: fileName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        seoTitle: `${fileName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | filings4u`,
        metaDesc: "Professional business compliance, tax entity setups, and federal transit filing infrastructure solutions.",
        heroHeadline: `Secure Platform <br><span style='color: #10b981;'>Filing Infrastructure.</span>`,
        heroBody: `Automate your commercial profiles and operational state records from a single managed dashboard layer.`,
        sectionTitle: "Active Compliance",
        sectionHeadline: "Total System Control. <br><span style='color: #10b981;'>Built For Growth.</span>",
        sectionBody: "We provide the automated technical handshake between you and state, federal, and local jurisdictions seamlessly."
    };

    return GLOBAL_SEO_CONTENT_MAP[fileName] || defaultData;
}


function compileTemplateHtml(data) {
    return `
    <!-- MAIN HERO CONTAINER MODULE -->
    <main class="page-container" style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%;">
                <article class="content-area" style="width: 100%; box-sizing: border-box;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">Enterprise Ecosystem</span>
                    <h1 style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.1; letter-spacing: -1px;">${data.heroHeadline}</h1>
                    <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 24px 0;">${data.heroBody}</p>
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 32px;">
                        <div style="height: 2px; width: 24px; background: #10b981;"></div>
                        <span style="color: #0a1f44; font-weight: 700; font-size: 0.9rem;">Active Entity Sync: 10,000+ Verified</span>
                    </div>
                    <a href="#pricing" class="btn-main" style="background: #10b981; color: #ffffff; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 6px; display: inline-block; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); transition: background 0.2s;">Get Started &rarr;</a>
                </article>
                <aside class="hero-image-container" style="display: flex; justify-content: center; width: 100%;">
                    <img src="images/hero-image.jpg" alt="${data.title}" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25);">
                </aside>
            </div>
        </div>
    </main>

    <!-- ALTERNATING CONTENT BLOCK MODULE -->
    <section style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%;">
                <div style="display: flex; justify-content: center; width: 100%;">
                    <img src="images/local-business.jpg" style="width: 100%; height: auto; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25);">
                </div>
                <div style="width: 100%; box-sizing: border-box;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">${data.sectionTitle}</span>
                    <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">${data.sectionHeadline}</h2>
                    <p style="color: #475569; font-size: 1rem; line-height: 1.6; margin: 0 0 28px 0;">${data.sectionBody}</p>
                </div>
            </div>
        </div>
    </section>`;
}

// 4. CENTRAL SEO INDEXER & PAGE INITIALIZATION HANDLER
function renderMasterSystem() {
    const pageData = resolveCurrentPageData();

    // 🌐 ENGINE META TARGETING: Forces Google and Bing search crawlers to read unique title and description tags
    document.title = pageData.seoTitle;

    // Safely look up or generate the meta description tag required for SEO rankings
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
        metaDescriptionTag = document.createElement('meta');
        metaDescriptionTag.setAttribute('name', 'description');
        document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', pageData.metaDesc);

    // 📊 CARD ENGINE ATTACHMENT: Automatically tells your prices.js script which row pricing packages to paint
    const pricingRoot = document.getElementById("website-package-pricing-cards-root");
    if (pricingRoot) {
        pricingRoot.setAttribute("data-service-key", pageData.pricingKey);
        pricingRoot.style.cssText = "width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; display: block !important;";
    }

    // Paint marketing content text blocks instantly
    const dynamicSectionsRoot = document.getElementById("dynamic-sections-root");
    if (dynamicSectionsRoot) {
        dynamicSectionsRoot.innerHTML = compileTemplateHtml(pageData);
    }
}
document.addEventListener("DOMContentLoaded", renderMasterSystem);
