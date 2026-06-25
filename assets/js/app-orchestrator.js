/** * filings4u Platform Architecture * Module: app-orchestrator.js (High-Speed Asynchronous Sheet Synchronizer) */ 
function compileDynamicLayoutProperties(targetElementId, suffixPatternString) { 
    var calculatedSlugValue = targetElementId.replace(suffixPatternString, "").trim().toLowerCase(); 
    return { 
        slug: calculatedSlugValue, 
        title: calculatedSlugValue.split("-").map(function(wordItem) { return wordItem.charAt(0).toUpperCase() + wordItem.slice(1); }).join(" ") 
    }; 
} 

async function renderMasterSystem() { 
    // ─── INSTANT NAVIGATION BOOT SEQUENCE ─── 
    try { 
        if (typeof renderDynamicGlobalCorporateNavigation === "function" && document.getElementById("filings4u-global-navigation-root")) { 
            renderDynamicGlobalCorporateNavigation(); 
        } 
    } catch(e) { 
        console.error("Critical Navigation failure:", e); 
    } 

    try { 
        const activeSlug = window.location.pathname.split("/").pop().replace(".html", "").trim().toLowerCase(); 
        const cleanPageKey = (!activeSlug || activeSlug === "home" || activeSlug === "index") ? "index" : activeSlug; 

        let meta = { slug: cleanPageKey, title: "" }; 
        const heroTarget = document.getElementById("filings4u-global-hero-root"); 
        
        meta.title = cleanPageKey.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "); 
        meta.title = meta.title.replace("-registration", "").replace("registration", "").replace("-quote", "").trim(); 
        document.title = meta.title + " Registration & Filing Services | filings4u"; 

        const renderContext = meta; 

        // ─── PARALLEL PIPELINE: THREAD OUT ENGINE CALLS TO ELIMINATE SEQUENTIAL FILE LAG ───
        
        // MODULE 2: HERO COMPONENT (Fires inside an isolated asynchronous callback block)
        if (typeof renderMasterHeroEngine === "function" && heroTarget) { 
            setTimeout(function() {
                try { renderMasterHeroEngine("filings4u-global-hero-root", renderContext); } catch(e) { console.error("Hero crash:", e); }
            }, 0);
        } 

        // MODULE 3: METRICS INFRASTRUCTURE MONITOR 
        if (typeof renderMasterMetricsEngine === "function" && document.getElementById("filings4u-metrics-board-root")) { 
            setTimeout(function() {
                try { renderMasterMetricsEngine("filings4u-metrics-board-root", renderContext); } catch(e) { console.error("Metrics crash:", e); }
            }, 0);
        } 

        // ─── INSTANT SWITCH ROUTER FOR INTERIOR COMPONENT PACKAGES ─── 
        switch (cleanPageKey) {
            case "index":
                if (typeof renderHomepageOperationsRouter === "function" && document.getElementById("filings4u-homepage-router-root")) { 
                    setTimeout(function() { try { renderHomepageOperationsRouter(); } catch(e) { console.error("Router crash:", e); } }, 0);
                } 
                break;
                
            case "privacy":
            case "privacy-policy":
                if (document.getElementById("filings4u-privacy-policy-root") && typeof renderMasterPrivacyPolicyEngine === "function") { 
                    setTimeout(function() { try { renderMasterPrivacyPolicyEngine("filings4u-privacy-policy-root"); } catch(e) { console.error("Privacy crash:", e); } }, 0);
                } 
                break;
                
            case "terms":
            case "terms-of-service":
                if (document.getElementById("filings4u-terms-of-service-root") && typeof renderMasterTermsOfServiceEngine === "function") { 
                    setTimeout(function() { try { renderMasterTermsOfServiceEngine("filings4u-terms-of-service-root"); } catch(e) { console.error("Terms crash:", e); } }, 0);
                } 
                break;
                
            case "refund-policy":
                if (document.getElementById("filings4u-refund-policy-root") && typeof renderMasterRefundPolicyEngine === "function") { 
                    setTimeout(function() { try { renderMasterRefundPolicyEngine("filings4u-refund-policy-root"); } catch(e) { console.error("Refund crash:", e); } }, 0);
                } 
                break;
                
            case "about":
                if (document.getElementById("filings4u-about-hero-root") && typeof renderMasterAboutEngine === "function") { 
                    setTimeout(function() { try { renderMasterAboutEngine("filings4u-about-hero-root"); } catch(e) { console.error("About crash:", e); } }, 0);
                } 
                break;
                
            case "contact":
                if (document.getElementById("filings4u-contact-root") && typeof renderMasterContactEngine === "function") { 
                    setTimeout(function() { try { renderMasterContactEngine("filings4u-contact-root"); } catch(e) { console.error("Contact crash:", e); } }, 0);
                } 
                break;
                
            case "get-started":
                if (document.getElementById("filings4u-get-started-root") && typeof renderMasterGetStartedEngine === "function") { 
                    setTimeout(function() { try { renderMasterGetStartedEngine("filings4u-get-started-root"); } catch(e) { console.error("Get Started crash:", e); } }, 0);
                } 
                break;

            case "mcs-150-update":
            case "ifta-quarterly-returns":
            case "boc-3-amendment":
                if (document.getElementById("filings4u-logistics-additions-root") && typeof renderMasterLogisticsAdditionsEngine === "function") { 
                    setTimeout(function() { try { renderMasterLogisticsAdditionsEngine("filings4u-logistics-additions-root"); } catch(e) { console.error("Logistics crash:", e); } }, 0);
                } 
                break;
        }

        // ─── BOTTOM RENDER TRACK FOOT DRIVERS ─── 
        // MODULE 5: 3-CARD PRICING LAYOUT GRID 
        if (document.getElementById("filings4u-pricing-board-root") && typeof renderMasterPricingEngine === "function") { 
            setTimeout(function() { try { renderMasterPricingEngine("filings4u-pricing-board-root", renderContext); } catch(e) { console.error("Pricing crash:", e); } }, 0);
        } 

        // MODULE 6: COMPLIANCE PROCESSING OPTIONS 
        if (document.getElementById("filings4u-processing-packages-root") && typeof renderMasterProcessingPackagesEngine === "function") { 
            setTimeout(function() { try { renderMasterProcessingPackagesEngine("filings4u-processing-packages-root", renderContext); } catch(e) { console.error("Processing packages crash:", e); } }, 0);
        } 

        // MODULE 7: STARTUP FEATURE LAUNCHPAD 
        if (document.getElementById("filings4u-launchpad-feature-root") && typeof renderMasterLaunchpadEngine === "function") { 
            setTimeout(function() { try { renderMasterLaunchpadEngine("filings4u-launchpad-feature-root", renderContext); } catch(e) { console.error("Launchpad crash:", e); } }, 0);
        } 

        // MODULE 8: SECURITY AUDIT SHIELD ARCHITECTURE 
        if (document.getElementById("filings4u-security-shield-root") && typeof renderSecurityInfrastructurePage === "function") { 
            setTimeout(function() { try { renderSecurityInfrastructurePage("filings4u-security-shield-root", renderContext); } catch(e) { console.error("Security shield crash:", e); } }, 0);
        } 

        // MODULE 9: NEWSLETTER SUBSCRIPTION FORM PORTAL 
        if (document.getElementById("filings4u-subscribe-newsletter-root") && typeof renderMasterSubscribeEngine === "function") { 
            setTimeout(function() { try { renderMasterSubscribeEngine("filings4u-subscribe-newsletter-root", renderContext); } catch(e) { console.error("Subscribe crash:", e); } }, 0);
        } 

        // MODULE 10: DYNAMIC GLOBAL FOOTER LAYER 
        if (document.getElementById("filings4u-global-footer-root") && typeof renderDynamicGlobalCorporateFooter === "function") { 
            setTimeout(function() { try { renderDynamicGlobalCorporateFooter("filings4u-global-footer-root"); } catch(e) { console.error("Footer crash:", e); } }, 0);
        } 
    } catch (err) { 
        console.error("Master application orchestrator boot pipeline exception:", err); 
    } 
} 

document.addEventListener("DOMContentLoaded", renderMasterSystem); 
window.compileDynamicLayoutProperties = compileDynamicLayoutProperties; 
window.renderMasterSystem = renderMasterSystem;
