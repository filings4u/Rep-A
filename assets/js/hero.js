/** * filings4u Platform Architecture * Module: hero.js (Part 1 - Split Responsive Layout Engine) */ 
(function() { 
    const targetConfig = { elementId: "filings4u-global-hero-root", styleId: "filings4u-hero-styles" }; 
    if (!document.getElementById(targetConfig.styleId)) { 
        const styleSheet = document.createElement("style"); 
        styleSheet.id = targetConfig.styleId; 
        styleSheet.textContent = ` 
            /* MASTER GRID SYNCHRONIZED TO LAUNCHPAD CANVAS LAYOUTS */ 
            #${targetConfig.elementId} .launchpad-grid-matrix { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 60px !important; align-items: center !important; width: 100% !important; box-sizing: border-box !important; } 
            /* MOBILE SCREEN RESPONSIVE RE-ARRANGEMENTS (max-width: 991px) */ 
            @media (max-width: 991px) { 
                #${targetConfig.elementId} main { padding: 40px 0 !important; margin-top: 50px !important; } 
                /* FLUIDS OUT THE 1450PX CONSTRAINT ON DEVICE VIEWPORTS */ 
                #${targetConfig.elementId} .site-width-alignment-guard { width: 100% !important; max-width: 100% !important; padding: 0 20px !important; } 
                #${targetConfig.elementId} h1.hero-headline { font-size: 2rem !important; } 
                #${targetConfig.elementId} .launchpad-grid-matrix { grid-template-columns: 1fr !important; gap: 30px !important; } 
                /* FIXED IMAGE-ON-TOP ORDER FLIPS */ 
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
    
    let slug = "index"; 
    const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim(); 
    if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) { 
      slug = rawPathname.replace(".html", "").split("?")[0].split("#")[0]; 
    } 
    if (metaDataRecord && metaDataRecord.slug) { 
      slug = metaDataRecord.slug.toLowerCase().trim(); 
    } 
    
    let executionAttemptsCounter = 0; 
    
    function coordinateHeroLifecycleTrace() { 
      const catalogMatrix = window.PLATFORM_METRICS_CATALOG || {}; 
      const activeCatalogNode = catalogMatrix[slug]; 
      
      // FIXED TIMEOUT LAG LOOP: If valid metaData exists locally, skip the 750ms wait time entirely! 
      const hasLocalFallbackData = metaDataRecord && (metaDataRecord.title || metaDataRecord.service_title); 
      if (!activeCatalogNode && !hasLocalFallbackData && executionAttemptsCounter < 50 && slug !== "index") { 
        executionAttemptsCounter++; 
        setTimeout(coordinateHeroLifecycleTrace, 15); 
        return; 
      } 
      
      const liveRecordSource = activeCatalogNode || metaDataRecord || catalogMatrix["index"] || {}; 
      var fallbackTitleName = slug.split("-").map(function(w) { 
        return w.charAt(0).toUpperCase() + w.slice(1); 
      }).join(" ").replace("Llc", "LLC").replace("Dba", "DBA").replace("Ein", "EIN").replace("Dot", "DOT").replace("Ucr", "UCR").replace("Clia", "CLIA"); 
      
      const displayPillText = liveRecordSource.pill || "Compliance Operations Framework"; 
      
      // FIXED OVERRIDE: Evaluates the inner page title text to "Compliance" if it's the homepage ("index")
      const displayHeroTitle = liveRecordSource.hero_title || ('Streamlined <br><span style="color:#10b981;">' + (slug === "index" ? "Compliance" : (liveRecordSource.title || fallbackTitleName)) + ' Automation</span>'); 
      
      const displayHeroLead = liveRecordSource.hero_lead || 'Execute business formations, state tax registrations, and federal logistics applications seamlessly without manual structural processing errors.'; 
      const dynamicHeroImgSrc = liveRecordSource.img_src || ("images/" + slug + "-hero.jpg"); 
      
      var computedActionLinkDestination = "get-started.html"; 
      if (slug === "index") { 
        computedActionLinkDestination = "get-started.html"; 
      } 
      
      executePreservedHeroCompiler(zone, slug, displayPillText, displayHeroTitle, displayHeroLead, dynamicHeroImgSrc, computedActionLinkDestination); 
    } 
    
    coordinateHeroLifecycleTrace(); 
  } catch (err) { 
    console.error("Hero context lifecycle attachment failure:", err); 
  } 
} 

window.renderMasterHeroEngine = renderMasterHeroEngine;


/* Part 3: Layout DOM innerHTML Template Compiler */ 
function executePreservedHeroCompiler(zone, slug, displayPillText, displayHeroTitle, displayHeroLead, dynamicHeroImgSrc, computedActionLinkDestination) { 
    zone.innerHTML = ` 
        <main style="background: #ffffff; padding: 60px 0; margin-top: 50px !important; margin-bottom: 0!important; margin-left: 0!important; margin-right: 0!important; font-family: system-ui, sans-serif; width: 100%!important; max-width: 100%!important; box-sizing: border-box; display: block;"> 
            <div class="site-width-alignment-guard" style="width: 1450px; max-width: 1450px; margin: 0 auto!important; padding: 0 40px; box-sizing: border-box!important;"> 
                <div class="launchpad-grid-matrix" style="display: flex; flex-direction: column;"> 
                    <!-- CONTENT ARTIFACT BLOCK LAYER --> 
                    <div style="width: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;"> 
                        <span class="f4u-hero-pill-node" style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; align-self: flex-start;"></span> 
                        <h1 class="hero-headline f4u-hero-title-node" style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;"></h1> 
                        <p class="f4u-hero-lead-node" style="color: #475569; font-size: 1.25rem; line-height: 1.6; margin: 0 0 28px 0;"></p> 
                        <a href="${computedActionLinkDestination}" class="f4u-hero-action-anchor" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 1rem; display: inline-block; align-self: flex-start;">Initialize Application &rarr;</a> 
                    </div> 
                    <!-- FLUID VISUAL IMAGE CONTAINER CELL --> 
                    <div style="display: flex; justify-content: center; width: 100%;"> 
                        <img src="" class="hero-display-img" alt="Framework Layout Preview" style="width: 100%; height: 100%; max-height: 100%; object-fit: cover; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);" onerror="this.onerror=null; this.removeAttribute('onerror'); this.src='images/annual-reports-hero.jpg';"> 
                    </div> 
                </div> 
            </div> 
        </main> 
    `; 
    const pill = zone.querySelector(".f4u-hero-pill-node"); 
    const title = zone.querySelector(".f4u-hero-title-node"); 
    const lead = zone.querySelector(".f4u-hero-lead-node"); 
    const img = zone.querySelector(".hero-display-img"); 
    
    if (pill && displayPillText) pill.textContent = displayPillText; 
    if (title && displayHeroTitle) title.innerHTML = displayHeroTitle; 
    if (lead && displayHeroLead) lead.innerHTML = displayHeroLead; 
    if (img && dynamicHeroImgSrc) img.src = dynamicHeroImgSrc; 
    
    if (slug !== "index") { 
        setTimeout(function() { 
            const anchor = zone.querySelector('.f4u-hero-action-anchor'); 
            if (anchor) { 
                anchor.addEventListener("click", function(e) { 
                    const dest = document.getElementById("pricing-framework-target") || document.getElementById("filings4u-pricing-board-root"); 
                    if (dest) { 
                        e.preventDefault(); 
                        dest.scrollIntoView({ behavior: "smooth", block: "start" }); 
                    } 
                }); 
            } 
        }, 40); 
    } 
}
