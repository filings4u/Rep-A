// ============================================================================ //
// 🗺️ MODULE: DYNAMIC APPLICATION MAP TIMELINE TIMING & VIEWPORT HUB          //
// ============================================================================ //
(function renderDynamicWizardApplicationMap() {
  "use strict";

  // Target your dedicated external layout anchor placeholder element
  const targetPlaceholder = document.getElementById("wizard-sidebar-application-map-target");

  if (!targetPlaceholder) {
    // Defer execution safely if the master HTML structural node isn't ready yet
    setTimeout(renderDynamicWizardApplicationMap, 40);
    return;
  }

  // Pure Enterprise Step Tracking Spectrum Mapping (0 through 7)
  const timelineRegistryMatrix = [
    { idx: 0, title: "0. State Selection", desc: "State of Formation or Registration" },
    { idx: 1, title: "1. Selected Package", desc: "Items and inclusions" },
    { idx: 2, title: "2. Service Form", desc: "Purchase configuration profile" },
    { idx: 3, title: "3. Add-Ons", desc: "Compliance assets & shields" },
    { idx: 4, title: "4. Power of Attorney", desc: "Digital signature execution" },
    { idx: 5, title: "5. Purchase Summary", desc: "Order item breakdowns" },
    { idx: 6, title: "6. Secure Payment", desc: "Encrypted checkout gateway" },
    { idx: 7, title: "7. Success Portal", desc: "Account creation systems" }
  ];

  /**
   * REFACTORED CONTAINER INNER BLOCKS: Removed the .sidebar-content-area class token.
   * This completely untangles the script template layers from the double-padding 24px 
   * stylesheet rules, letting text blocks slide effortlessly right next to the dots.
   */
  let compiledMapHtml = `
    <div id="f4u-clean-timeline-container" style="box-sizing: border-box; width: 100% !important; padding: 0 24px !important; margin: 0 !important; overflow: hidden !important;">
      
      <div class="sidebar-header-box" style="margin-bottom: 20px; text-align: left; padding-left: 2px !important;">
        <h3 class="sidebar-title-label" style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; margin: 0 0 4px 0; letter-spacing: -0.25px;">Application Map</h3>
        <p class="sidebar-time-tracker" style="color: #64748b; font-size: 0.775rem; font-weight: 600; margin: 0; display: flex; align-items: center; gap: 4px;">
          <i class="fa-solid fa-clock" style="font-size: 0.75rem;"></i> Estimated completion time: <span style="color: #0a1f44; font-weight: 700;">5 minutes</span>
        </p>
      </div>

      <nav aria-label="Wizard Steps Progress Tracker" class="sidebar-nav-timeline" style="display: flex; flex-direction: column; gap: 14px; width: 100% !important; margin: 0 !important; padding: 0 !important;">
  `;

  // Iteratively assemble the timeline rows using streamlined spacing attributes
  timelineRegistryMatrix.forEach(stepItem => {
    compiledMapHtml += `
      <div id="timeline-row-${stepItem.idx}" class="toc-step-row timeline-row-${stepItem.idx}" style="display: flex !important; align-items: flex-start !important; justify-content: flex-start !important; gap: 12px !important; padding: 0 !important; margin: 0 !important; box-sizing: border-box; width: 100% !important;">
        <span class="toc-dot" style="width: 8px; height: 8px; border-radius: 50%; background-color: #e2e8f0; display: inline-block; margin-top: 5px; flex-shrink: 0; box-sizing: border-box; transition: background-color 0.2s, box-shadow 0.2s;"></span>
        
        <!-- DIRECT EXPANSION WRAPPER: Removed negative margins to rely on clean element block flow parameters -->
        <div class="toc-text-group" style="display: flex; flex-direction: column; gap: 2px; width: 100% !important; min-width: 0; box-sizing: border-box; margin: 0 !important; padding: 0 !important; flex-grow: 1 !important;">
          <span class="toc-step-title" style="font-size: 0.9rem; color: #64748b; font-weight: 700; transition: color 0.2s; display: block; width: 100% !important; line-height: 1.3; margin: 0 !important; padding: 0 !important;">${stepItem.title}</span>
          <span class="toc-step-desc" style="font-size: 0.80rem; color: #94a3b8; font-weight: 500; display: block; width: 100% !important; line-height: 1.3; margin: 0 !important; padding: 0 !important; word-wrap: break-word; overflow-wrap: break-word; white-space: normal !important;">${stepItem.desc}</span>
        </div>
      </div>
    `;
  });

  compiledMapHtml += `
      </nav>
    </div>
  `;

  // Paint the completed template cleanly inside your dynamic placeholder element target
  targetPlaceholder.innerHTML = compiledMapHtml;
  console.log("[Application Map Engine] Isolated container injected. Duplicate class indentation removed.");

  // Force re-sync highlight indicators to map to the single active index view
  if (typeof window.updateApplicationMapTimelineBubbles === "function") {
    const liveStepContext = (typeof window.currentWizardActiveStep === "number") ? window.currentWizardActiveStep : 0;
    window.updateApplicationMapTimelineBubbles(liveStepContext);
  }
})();
