/**
 * filings4u Platform Architecture
 * Module: app-orchestrator.js (Part 1 - Strategic Static Sheet Synchronizer)
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
    // ─── INSTANT REFRESH BOOT SEQUENCE ───
    try {
        if (typeof renderDynamicGlobalCorporateNavigation === "function" && document.getElementById("filings4u-global-navigation-root")) {
            renderDynamicGlobalCorporateNavigation();
        }
    } catch(e) { 
        console.error("Critical Navigation block execution failure:", e); 
    }

    try {
        const activeSlug = window.location.pathname.split("/").pop().replace(".html", "").trim().toLowerCase();
        const cleanPageKey = (!activeSlug || activeSlug === "home" || activeSlug === "index") ? "index" : activeSlug;
        
        let dbRow = null;

        // STATIC SHEET BYPASS FILTER: Skip Supabase if page is a legal or supplemental profile
        const staticLegalPages = ["privacy", "privacy-policy", "terms", "terms-of-service", "refund-policy", "about", "contact", "get-started", "mcs-150-update", "ifta-quarterly-returns", "boc-3-amendment"];
        const isStaticLegalSheet = staticLegalPages.includes(cleanPageKey);





        if (!isStaticLegalSheet) {
            // Only run network queries for service pipeline product rows
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
                console.warn("API Lookup bypassed. Running local compilation mappings.", netErr);
            }
        }

        // Handle text properties fallback loops
        let meta = { slug: cleanPageKey, title: "" };
        const heroTarget = document.getElementById("filings4u-global-hero-root");
        meta.title = cleanPageKey.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

        if (dbRow && dbRow.service_title) {
            meta.title = dbRow.service_title;
        } else {
            meta.title = meta.title.replace("-registration", "").replace("registration", "").replace("-quote", "").trim();
        }

        document.title = meta.title + " Registration & Filing Services | filings4u";
        // ─── SEQUENTIAL LAYOUT FLOW DRAWERS ───

        // MODULE 2: HERO COMPONENT
        try {
            if (typeof renderMasterHeroEngine === "function" && heroTarget) {
                renderMasterHeroEngine("filings4u-global-hero-root", dbRow || meta);
            }
        } catch(e) { console.error("Hero block execution crash:", e); }

        // MODULE 3: METRICS INFRASTRUCTURE MONITOR
        try {
            if (typeof renderMasterMetricsEngine === "function" && document.getElementById("filings4u-metrics-board-root")) {
                renderMasterMetricsEngine("filings4u-metrics-board-root", dbRow || meta);
            }
        } catch(e) { console.error("Metrics block execution crash:", e); }

        // MODULE 4: HOMEPAGE SELECTION ROUTER
        try {
            if (typeof renderHomepageOperationsRouter === "function" && document.getElementById("filings4u-homepage-router-root")) {
                renderHomepageOperationsRouter();
            }
        } catch(e) { console.warn("Homepage layout switcher container element skipped on this active sub-view page profile."); }

        // MODULE 4-B: PRIVACY POLICY ENGINE TRIGGER
        try {
            if (typeof renderMasterPrivacyPolicyEngine === "function" && document.getElementById("filings4u-privacy-policy-root")) {
                renderMasterPrivacyPolicyEngine("filings4u-privacy-policy-root");
            }
        } catch(e) { console.error("Privacy text layout block execution crash:", e); }

                // MODULE 4-C: TERMS OF SERVICE AGREEMENT MATRIX (Only executes on terms page)
        try {
            if (typeof renderMasterTermsOfServiceEngine === "function" && document.getElementById("filings4u-terms-of-service-root")) {
                renderMasterTermsOfServiceEngine("filings4u-terms-of-service-root");
            }
        } catch(e) { console.error("Terms text layout block execution crash:", e); }
                // MODULE 4-D: COVENANT REFUND POLICY ENGINE (Only executes on refund view pages)
        try {
            if (typeof renderMasterRefundPolicyEngine === "function" && document.getElementById("filings4u-refund-policy-root")) {
                renderMasterRefundPolicyEngine("filings4u-refund-policy-root");
            }
        } catch(e) { console.error("Refund text layout block execution crash:", e); }
                // MODULE 4-E: CORPORATE ABOUT INFRASTRUCTURE ENGINE (Only executes on about pages)
        try {
            if (typeof renderMasterAboutEngine === "function" && document.getElementById("filings4u-about-hero-root")) {
                renderMasterAboutEngine("filings4u-about-hero-root");
            }
        } catch(e) { console.error("About text layout block execution crash:", e); }
        // MODULE 4-F: DYNAMIC SPLIT-CONTAINER CONTACT ENGINE (Only executes on contact views)
        try {
            if (typeof renderMasterContactEngine === "function" && document.getElementById("filings4u-contact-root")) {
                renderMasterContactEngine("filings4u-contact-root");
            }
        } catch(e) { console.error("Contact split block execution crash:", e); }
                // MODULE 4-G: MASTER ENTERPRISE GET STARTED PLATFORM PANEL HUB (Only runs on get started page)
        try {
            if (typeof renderMasterGetStartedEngine === "function" && document.getElementById("filings4u-get-started-root")) {
                renderMasterGetStartedEngine("filings4u-get-started-root");
            }
        } catch(e) { console.error("Get Started hub text layout execution crash:", e); }
                // MODULE 4-H: SUPPLEMENTAL FLEET INFRASTRUCTURE DRAWERS (Only runs on your added subpages)
        try {
            if (typeof renderMasterLogisticsAdditionsEngine === "function" && document.getElementById("filings4u-logistics-additions-root")) {
                renderMasterLogisticsAdditionsEngine("filings4u-logistics-additions-root");
            }
        } catch(e) { console.error("Logistics additions panel layout execution crash:", e); }






        // MODULE 5: 3-CARD PRICING LAYOUT GRID
        try {
            if (typeof renderMasterPricingEngine === "function" && document.getElementById("filings4u-pricing-board-root")) {
                renderMasterPricingEngine("filings4u-pricing-board-root", dbRow || meta);
            }
        } catch(e) { console.error("Pricing cards grid block execution crash:", e); }

        // MODULE 6: COMPLIANCE PROCESSING OPTIONS
        try {
            if (typeof renderMasterProcessingPackagesEngine === "function" && document.getElementById("filings4u-processing-packages-root")) {
                renderMasterProcessingPackagesEngine("filings4u-processing-packages-root", dbRow || meta);
            }
        } catch(e) { console.error("Processing card loops block execution crash:", e); }

        // MODULE 7: STARTUP FEATURE LAUNCHPAD
        try {
            if (typeof renderMasterLaunchpadEngine === "function" && document.getElementById("filings4u-launchpad-feature-root")) {
                renderMasterLaunchpadEngine("filings4u-launchpad-feature-root", dbRow || meta);
            }
        } catch(e) { console.error("Launchpad features block execution crash:", e); }

        // MODULE 8: SECURITY AUDIT SHIELD ARCHITECTURE
        try {
            if (typeof renderSecurityInfrastructurePage === "function" && document.getElementById("filings4u-security-shield-root")) {
                renderSecurityInfrastructurePage("filings4u-security-shield-root", dbRow || meta);
            }
        } catch(e) { console.error("Security grid shield execution crash:", e); }

        // MODULE 9: NEWSLETTER SUBSCRIPTION FORM PORTAL
        try {
            if (typeof renderMasterSubscribeEngine === "function" && document.getElementById("filings4u-subscribe-newsletter-root")) {
                renderMasterSubscribeEngine("filings4u-subscribe-newsletter-root", dbRow || meta);
            }
        } catch(e) { console.error("Subscription gateway capture block execution crash:", e); }

        // MODULE 10: DYNAMIC GLOBAL FOOTER LAYER
        try {
            if (typeof renderDynamicGlobalCorporateFooter === "function" && document.getElementById("filings4u-global-footer-root")) {
                renderDynamicGlobalCorporateFooter("filings4u-global-footer-root");
            }
        } catch(e) { console.error("Footer system link layout block execution crash:", e); }

    } catch (err) {
        console.error("Master application orchestrator boot pipeline exception:", err);
    }
}

document.addEventListener("DOMContentLoaded", renderMasterSystem);
window.compileDynamicLayoutProperties = compileDynamicLayoutProperties;
window.renderMasterSystem = renderMasterSystem;
