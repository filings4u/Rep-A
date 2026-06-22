/**
 * filings4u Platform Architecture
 * Module: hero.js (Part 1 - Strict Context Ingestion Setup)
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
            #${targetConfig.elementId} .responsive-hero-grid { display: flex !important; flex-direction: row !important; flex-wrap: wrap !important; align-items: stretch !important; justify-content: space-between !important; gap: 40px !important; width: 100% !important; box-sizing: border-box !important; }
            #${targetConfig.elementId} .hero-image-container { display: flex !important; align-items: center !important; justify-content: center !important; flex: 1 !important; min-width: 320px !important; max-width: 520px !important; box-sizing: border-box !important; }
            #${targetConfig.elementId} .content-area { flex: 1.2 !important; min-width: 320px !important; box-sizing: border-box !important; display: flex !important; flex-direction: column !important; justify-content: center !important; }
            @media (max-width: 991px) {
                #${targetConfig.elementId} main { padding: 20px 0 10px 0 !important; }
                #${targetConfig.elementId} .responsive-hero-grid { flex-direction: column !important; gap: 24px !important; margin-top: 10px !important; }
                #${targetConfig.elementId} .hero-image-container { order: 1 !important; max-width: 100% !important; width: 100% !important; padding: 10px 0 !important; }
                #${targetConfig.elementId} .content-area { order: 2 !important; width: 100% !important; padding: 10px 0 !important; }
                #${targetConfig.elementId} .hero-headline { font-size: 2.2rem !important; line-height: 1.2 !important; }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    window.FILINGS4U_HERO_TARGET = targetConfig.elementId;
})();

function renderMasterHeroEngine(overrideTargetId, metaDataRecord) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_HERO_TARGET || "filings4u-global-hero-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // Extract raw slug from URL file name paths cleanly
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

            // Poll every 15ms until database arrays finish calculating inside memory
            if (!activeCatalogNode && executionAttemptsCounter < 50 && slug !== "index") {
                executionAttemptsCounter++;
                setTimeout(coordinateHeroLifecycleTrace, 15);
                return;
            }

            // Fallback securely onto incoming meta data objects to compile page context dynamically
            const liveRecordSource = activeCatalogNode || metaDataRecord || catalogMatrix["index"] || {};
            
            // Generate clean un-hardcoded title fallbacks from path keys if catalog parsing latency spikes
            var fallbackTitleName = slug.split("-").map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(" ").replace("Llc", "LLC").replace("Dba", "DBA").replace("Ein", "EIN").replace("Dot", "DOT").replace("Ucr", "UCR").replace("Clia", "CLIA");

            const displayPillText = liveRecordSource.pill || "Compliance Operations Framework";
            const displayHeroTitle = liveRecordSource.hero_title || ('Streamlined <br><span style="color:#10b981;">' + (liveRecordSource.title || fallbackTitleName) + ' Automation</span>');
            const displayHeroLead = liveRecordSource.hero_lead || ('Execute your ' + (liveRecordSource.title || fallbackTitleName) + ' filings, background applications, and administrative documentation parameters securely without manual processing errors.');
            const dynamicHeroImgSrc = liveRecordSource.img_src || ("images/" + slug + "-hero.jpg");

            var computedActionLinkDestination = "#pricing-framework-target";
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

/* Part 2 - Fragment 2 of 2: Preserved Layout DOM innerHTML Compiler */
function executePreservedHeroCompiler(zone, slug, displayPillText, displayHeroTitle, displayHeroLead, dynamicHeroImgSrc, computedActionLinkDestination) {
    
    // 1. Output the static structured layout skeleton containers cleanly
    zone.innerHTML = `
    <main class="page-container" style="background: #ffffff; padding: 15px 0 10px 0 !important; margin: 0 !important; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; display: block;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 80px 50px 40px !important; box-sizing: border-box !important;">
            <div class="responsive-hero-grid">
                
                <!-- TEXT COLUMN LAYER CONTAINER CELL -->
                <article class="content-area">
                    <span class="f4u-hero-pill-node" style="background: rgba(16,185,129,0.1); color: #10b981; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; display: inline-block; align-self: flex-start;"></span>
                    <h1 class="hero-headline f4u-hero-title-node" style="font-size: 3rem; font-weight: 800; margin: 16px 0; line-height: 1.15; color: #0a1f44;"></h1>
                    <p class="f4u-hero-lead-node" style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;"></p>
                    <a href="${computedActionLinkDestination}" class="f4u-hero-action-anchor" style="background: #10b981; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block; align-self: flex-start;">Initialize Application &rarr;</a>
                </article>
                
                <!-- FLUID VISUAL IMAGE CONTAINER CELL -->
                <aside class="hero-image-container">
                    <img src="" class="hero-display-img" alt="Framework Layout Preview" style="width: 100%; height: 100%; max-height: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15); display: block;" onerror="this.onerror=null; this.src='images/default-hero.jpg';">
                </aside>
                
            </div>
        </div>
    </main>
    `;

    // 2. SAFE innerHTML ASSIGNMENTS: Forces the browser to parse custom catalog tags natively
    const pillElement = zone.querySelector(".f4u-hero-pill-node");
    const titleElement = zone.querySelector(".f4u-hero-title-node");
    const leadElement = zone.querySelector(".f4u-hero-lead-node");
    const imgElement = zone.querySelector(".hero-display-img");

    if (pillElement && displayPillText) {
        pillElement.textContent = displayPillText;
    }
    if (titleElement && displayHeroTitle) {
        titleElement.innerHTML = displayHeroTitle; // Renders custom emerald spans perfectly
    }
    if (leadElement && displayHeroLead) {
        leadElement.innerHTML = displayHeroLead; // Processes unique text descriptions cleanly
    }
    if (imgElement && dynamicHeroImgSrc) {
        imgElement.src = dynamicHeroImgSrc;
    }

    // 3. Hook smooth vertical page jumps if landing point exists
    if (slug !== "index") {
        setTimeout(function() {
            const heroActionAnchor = zone.querySelector('.f4u-hero-action-anchor');
            if (heroActionAnchor) {
                heroActionAnchor.addEventListener("click", function(clickEvent) {
                    const scrollDestinationNode = document.getElementById("pricing-framework-target") || document.getElementById("filings4u-pricing-board-root");
                    if (scrollDestinationNode) {
                        clickEvent.preventDefault();
                        scrollDestinationNode.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                });
            }
        }, 40);
    }
}
