/**
 * filings4u Platform Architecture
 * Module: app-orchestrator.js (Flawless Master System Boot & API Controller)
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
        // 1. Resolve path parameter metrics securely on the client viewport
        const activeSlug = window.location.pathname.split("/").pop().replace(".html", "").trim().toLowerCase();
        const cleanPageKey = (!activeSlug || activeSlug === "home" || activeSlug === "index") ? "index" : activeSlug;
        
        let dbRow = null;

        // 2. Query Supabase Rest Endpoints securely
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
                    // SUCCESSFUL DATA FIX: Extracting the row object right out of the array wrapper
                    dbRow = rawJsonPayloadArray[0]; 
                }
            }
        } catch (netErr) {
            console.warn("Live environment metadata query bypassed. Executing client-side mapping.", netErr);
        }

        // 3. Handle page property formatting fallback trees
        let meta = { slug: cleanPageKey, title: "" };
        const heroTarget = document.getElementById("filings4u-global-hero-root") || document.querySelector('[id$="-hero-zone"]');
        
        if (heroTarget) {
            const fallbackMeta = compileDynamicLayoutProperties(heroTarget.id, "-hero-zone");
            meta.title = fallbackMeta.title;
        } else {
            meta.title = cleanPageKey.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        }

        if (dbRow && dbRow.service_title) {
            meta.title = dbRow.service_title;
        } else {
            meta.title = meta.title.replace("-registration", "").replace("registration", "").replace("-quote", "").trim();
        }

        // 4. Synchronize page DOM header records safely
        document.title = meta.title + " Registration & Filing Services | filings4u";

        // 5. Sequential execution engine pipeline boots (New Standardized Unique Targets Only)
        
        // MODULE 1: TOP NAVIGATION MENU
        if (typeof renderDynamicGlobalCorporateNavigation === "function") {
            renderDynamicGlobalCorporateNavigation();
        }

        // MODULE 2: HERO SECTION
        if (typeof renderMasterHeroEngine === "function" && heroTarget) {
            renderMasterHeroEngine(heroTarget.id, dbRow || meta);
        }

        // MODULE 3: METRICS LOG BOARD
        if (typeof renderMasterMetricsEngine === "function") {
            renderMasterMetricsEngine("filings4u-metrics-board-root", dbRow || meta);
        }

        // MODULE 4: DYNAMIC PLAN INTERACTION GRID
        if (typeof renderMasterPricingEngine === "function") {
            renderMasterPricingEngine("filings4u-pricing-board-root", dbRow || meta);
        }

        // MODULE 5: LAUNCHPAD SERVICE ATTRIBUTES
        if (typeof renderMasterLaunchpadEngine === "function") {
            renderMasterLaunchpadEngine("filings4u-launchpad-feature-root", dbRow || meta);
        }

        // MODULE 6: INSTITUTIONAL SECURITY BLUEPRINT SHIELD
        if (typeof renderSecurityInfrastructurePage === "function") {
            renderSecurityInfrastructurePage("filings4u-security-shield-root", dbRow || meta);
        }

        // MODULE 7: NEWSLETTER SUBSCRIPTION PORTAL
        if (typeof renderMasterSubscribeEngine === "function") {
            renderMasterSubscribeEngine("filings4u-subscribe-newsletter-root", dbRow || meta);
        }

        // MODULE 8: SYSTEM FOOTER MATRIX LINK MAPS
        if (typeof renderDynamicGlobalCorporateFooter === "function") {
            renderDynamicGlobalCorporateFooter("filings4u-global-footer-root");
        }

    } catch (err) {
        console.error("Master application orchestrator boot pipeline exception:", err);
    }
}

// 6. Global Platform Assignments
document.addEventListener("DOMContentLoaded", renderMasterSystem);
window.compileDynamicLayoutProperties = compileDynamicLayoutProperties;
window.renderMasterSystem = renderMasterSystem;
