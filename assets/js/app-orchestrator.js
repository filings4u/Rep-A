/**
 * filings4u Platform Architecture
 * Module: app-orchestrator.js (Performance-Optimized Synchronizer)
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
    // We execute the top navigation menu immediately here before the async network fetch stall happens
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

        // Query database endpoints securely
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

                // MODULE 4-B: PRIVACY COVENANT SHEET RENDERING SYSTEM (Only runs on privacy page)
        try {
            if (typeof renderMasterPrivacyPolicyEngine === "function" && document.getElementById("filings4u-privacy-policy-root")) {
                renderMasterPrivacyPolicyEngine("filings4u-privacy-policy-root");
            }
        } catch(e) { console.error("Privacy text layout block execution crash:", e); }


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
