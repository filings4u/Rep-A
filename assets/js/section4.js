/** 
 * filings4u Platform Architecture 
 * Module: section4.js (Flawless Dynamic Launchpad Engine) 
 */ 
(function() { 
    const targetConfig = { 
        elementId: "filings4u-launchpad-feature-root", 
        styleId: "filings4u-launchpad-styles" 
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
        /* MOBILE VIEW BREAKPOINT MATCHED TO CORE MASTER ENGINES */ 
        @media (max-width: 991px) { 
            #${targetConfig.elementId} section { padding: 40px 0 !important; } 
            #${targetConfig.elementId} h2 { font-size: 1.8rem !important; } 
            #${targetConfig.elementId} .site-width-alignment-guard { width: 100% !important; max-width: 100% !important; padding: 0 20px !important; } 
            #${targetConfig.elementId} .launchpad-grid-matrix { grid-template-columns: 1fr !important; gap: 40px !important; } 
            /* FORCE STACKED DIRECTION: ROW ORDER FLIP FOR MOBILE VIEWS */ 
            #${targetConfig.elementId} .launchpad-grid-matrix > div:last-child { order: 1 !important; } 
            #${targetConfig.elementId} .launchpad-grid-matrix > div:first-child { order: 2 !important; } 
        } 
        `; 
        document.head.appendChild(styleSheet); 
    } 
    window.FILINGS4U_LAUNCHPAD_TARGET = targetConfig.elementId; 
})(); 

/* Part 2: Safe Routing & Context Layer */ 
function renderMasterLaunchpadEngine(overrideTargetId, metaDataRecord) { 
    try { 
        const targetId = overrideTargetId || window.FILINGS4U_LAUNCHPAD_TARGET || "filings4u-launchpad-feature-root"; 
        const zone = document.getElementById(targetId); 
        if (!zone) return; 

        let slug = "index"; 
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim(); 
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) { 
            slug = rawPathname.replace(".html", ""); 
        } 

        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {}; 
        const displayTitle = contextSource.title || contextSource.hero_title || "Filing"; 
        const displaySlug = contextSource.slug || slug; 

        executeLaunchpadCompiler(zone, displayTitle, displaySlug, contextSource); 
    } catch (err) { 
        console.error("Launchpad feature engine critical routing failure:", err); 
    } 
} 

/* Part 3: Responsive Launchpad Feature HTML Compiler */ 
function executeLaunchpadCompiler(zone, displayTitle, displaySlug, metaDataRecord) { 
    const primaryImageSrc = (metaDataRecord && metaDataRecord.seceImage) ? metaDataRecord.seceImage : "images/" + displaySlug + "-sece.jpg"; 
    
    // Completely uncoupled template code with explicit text upper casing functions applied directly
    const titleUpperCaseFormatted = displayTitle.replace(/-/g, ' ').split(" ").map(function(w) { 
        if(["llc", "ein", "dot", "ucr", "clia", "dba"].includes(w.toLowerCase())) return w.toUpperCase(); 
        return w.charAt(0).toUpperCase() + w.slice(1); 
    }).join(" ");

    zone.innerHTML = ` 
    <section style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; margin: 0 !important;"> 
        <div class="site-width-alignment-guard" style="width: 1450px; max-width: 1450px; margin: 0 auto !important; padding: 0 40px; box-sizing: border-box !important;"> 
            <div class="launchpad-grid-matrix"> 
                <!-- CONTENT ARTIFACT BLOCK LAYER --> 
                <div style="width: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;"> 
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; align-self: flex-start;">Launch Infrastructure</span> 
                    <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;"> Startup Launchpad. <br><span style="color: #10b981;">Built For Scale.</span> </h2> 
                    <p style="color: #0a1f44; font-weight: 700; font-size: 1.0rem; margin: 0 0 12px 0; line-height: 1.4;">Turn your business idea into an officially recognized state legal entity overnight.</p> 
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0 0 28px 0;">Accelerate your early-stage venture with robust entity setup frameworks built for founders. We automate formations, corporate bylaw preparation, tax ID filings (EIN), and state registry submissions for your active ${titleUpperCaseFormatted} pipeline.</p> 
                    <a href="get-started.html" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 1rem; display: inline-block; align-self: flex-start;">Launch Your Startup &rarr;</a> 
                </div> 
                <!-- FLUID VISUAL IMAGE CONTAINER --> 
                <div style="display: flex; justify-content: center; width: 100%;"> 
                    <img src="${primaryImageSrc}" alt="Startup Launch" style="width: 100%; max-width: 620px; height: auto; aspect-ratio: 16 / 10; object-fit: cover; display: block; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15); box-shadow: 0 20px 40px rgba(10, 31, 68, 0.25), 0 4px 12px rgba(10, 31, 68, 0.1);"> 
                </div> 
            </div> 
        </div> 
    </section> `; 
} 

/* Part 4: Global Module Binding */ 
window.renderMasterLaunchpadEngine = renderMasterLaunchpadEngine;
