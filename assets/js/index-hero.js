/** 
 * filings4u Platform Architecture 
 * Module: hero.js (Part 1 - Split Responsive Layout Engine) 
 */ 
(function() { 
    const targetConfig = { 
        elementId: "filings4u-global-hero-root", 
        styleId: "filings4u-hero-styles" 
    }; 
    
    if (!document.getElementById(targetConfig.styleId)) { 
        const styleSheet = document.createElement("style"); 
        styleSheet.id = targetConfig.styleId; 
        styleSheet.textContent = ` 
        #${targetConfig.elementId} .launchpad-grid-matrix { 
            display: grid !important; 
            grid-template-columns: 1.1fr 0.9fr !important; 
            gap: 60px !important; 
            align-items: center !important; 
            width: 100% !important; 
            box-sizing: border-box !important; 
        } 
        @media (max-width: 991px) { 
            #${targetConfig.elementId} main { padding: 40px 0 !important; margin-top: 50px !important; } 
            #${targetConfig.elementId} .site-width-alignment-guard { width: 100% !important; max-width: 100% !important; padding: 0 20px !important; } 
            #${targetConfig.elementId} h1.hero-headline { font-size: 2.2rem !important; } 
            #${targetConfig.elementId} .launchpad-grid-matrix { grid-template-columns: 1fr !important; gap: 40px !important; } 
            #${targetConfig.elementId} .launchpad-grid-matrix > div:last-child { order: 1 !important; } 
            #${targetConfig.elementId} .launchpad-grid-matrix > div:first-child { order: 2 !important; } 
        } 
        `; 
        document.head.appendChild(styleSheet); 
    } 
    window.FILINGS4U_HERO_TARGET = targetConfig.elementId; 
})(); 

/* Part 2: Core Data Routing and Context Processing Pipeline */ 
function renderMasterHeroEngine(overrideTargetId, metaDataRecord) { 
    try { 
        const targetId = overrideTargetId || window.FILINGS4U_HERO_TARGET || "filings4u-global-hero-root"; 
        const zone = document.getElementById(targetId); 
        if (!zone) return; 

        const pathSegments = window.location.pathname.split("/").filter(Boolean);
        let slug = pathSegments.pop() || "index";
        slug = slug.replace(".html", "").split("?")[0].split("#")[0].toLowerCase().trim();

        if (metaDataRecord && metaDataRecord.slug) { 
            slug = metaDataRecord.slug.toLowerCase().trim(); 
        } 

        const statePricingSource = window.STATE_PRICING || {};
        const govtPricingSource = window.GOVT_PRICING || {};
        const pricingDataNode = statePricingSource[slug] || govtPricingSource[slug] || {};

        const serviceRawName = pricingDataNode.service_name || pricingDataNode.title || slug;
        const serviceFormattedName = serviceRawName.split("-").map(function(w) { 
            if(["llc", "ein", "dot", "ucr", "clia", "dba"].includes(w.toLowerCase())) return w.toUpperCase();
            return w.charAt(0).toUpperCase() + w.slice(1); 
        }).join(" "); 

        const displayPillText = pricingDataNode.category || pricingDataNode.pill || "Compliance Operations Framework"; 
        const displayHeroTitle = `Streamlined <br><span style="color:#10b981;">Compliance Automation</span>`; 
        const displayHeroLead = pricingDataNode.description || pricingDataNode.hero_lead || ""; 
        const dynamicHeroImgSrc = pricingDataNode.image || pricingDataNode.img_src || ("images/" + slug + "-hero.jpg"); 
        
        const computedActionLinkDestination = "#pricing-framework-target"; 

        executePreservedHeroCompiler(zone, displayPillText, displayHeroTitle, displayHeroLead, dynamicHeroImgSrc, computedActionLinkDestination); 
    } catch (err) { 
        console.error("Hero context lifecycle attachment failure:", err); 
    } 
} 
window.renderMasterHeroEngine = renderMasterHeroEngine; 

/* Part 3: Layout DOM innerHTML Template Compiler */ 
function executePreservedHeroCompiler(zone, displayPillText, displayHeroTitle, displayHeroLead, dynamicHeroImgSrc, computedActionLinkDestination) { 
    zone.innerHTML = ` 
    <main style="background: #ffffff; padding: 100px 0 50px; font-family: system-ui, sans-serif; width: 100%!important; max-width: 100%!important; box-sizing: border-box; display: block;"> 
        <div class="site-width-alignment-guard" style="width: 1450px; max-width: 1450px; margin: 0 auto!important; padding: 0 40px; box-sizing: border-box!important;"> 
            <div class="launchpad-grid-matrix"> 
                <div style="width: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;"> 
                    <span class="f4u-hero-pill-node" style="color: #10b981; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 16px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; align-self: flex-start;"></span> 
                    <h1 class="hero-headline f4u-hero-title-node" style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 20px 0; line-height: 1.15; letter-spacing: -0.5px;"></h1> 
                    <p class="f4u-hero-lead-node" style="color: #475569; font-size: 1.15rem; line-height: 1.6; margin: 0 0 32px 0; max-width: 580px;"></p> 
                    <a href="${computedActionLinkDestination}" class="f4u-hero-action-anchor" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 1rem; display: inline-block; align-self: flex-start;">Initialize Application &rarr;</a> 
                </div> 
                <div style="display: flex; justify-content: center; width: 100%; height: 100%;"> 
                    <img src=" " class="hero-display-img" alt="Service Preview" style="width: 100%; max-width: 620px; height: auto; aspect-ratio: 16 / 10; object-fit: cover; display: block; border-radius: 16px; border: 1px solid rgba(10, 31, 68, 0.12); box-shadow: 0 24px 48px rgba(10, 31, 68, 0.16), 0 6px 16px rgba(10, 31, 68, 0.06);"> 
                </div> 
            </div> 
        </div> 
    </main> `; 

    const pill = zone.querySelector(".f4u-hero-pill-node"); 
    const title = zone.querySelector(".f4u-hero-title-node"); 
    const lead = zone.querySelector(".f4u-hero-lead-node"); 
    const img = zone.querySelector(".hero-display-img"); 

    if (pill) pill.textContent = displayPillText; 
    if (title) title.innerHTML = displayHeroTitle; 
    if (lead) lead.innerHTML = displayHeroLead; 
    if (img) img.src = dynamicHeroImgSrc; 

    // Dynamic Element ID Interceptor Engine
    setTimeout(function() { 
        const anchor = zone.querySelector('.f4u-hero-action-anchor'); 
        if (anchor) { 
            anchor.addEventListener("click", function(e) { 
                // Intercept anchor action mapping directly to section2 layout hooks
                const dest = document.getElementById("pricing-framework-target") || 
                             document.getElementById("filings4u-pricing-board-root") || 
                             document.querySelector(".filings4u-pricing-section"); 
                if (dest) { 
                    e.preventDefault(); 
                    dest.scrollIntoView({ behavior: "smooth", block: "start" }); 
                } 
            }); 
        } 
    }, 40); 
}
