// ============================================================================ //
// 🗺️ MODULE: DYNAMIC APPLICATION MAP TIMELINE TIMING & VIEWPORT HUB          //
// ============================================================================ //
function renderDynamicWizardApplicationMap() {
  "use strict";
  const targetPlaceholder = document.getElementById("wizard-sidebar-application-map-target");
  if (!targetPlaceholder) {
    setTimeout(renderDynamicWizardApplicationMap, 40);
    return;
  }

  // 🟢 DYNAMIC MOBILE-RESPONSIVE COMPLETION ESTIMATOR ENGINE
  let dynamicMinutesText = "5 minutes";
  try {
    const coreFormInputs = document.querySelectorAll(
      "form input:not([type='hidden']), form select, form textarea, #dynamic-onboarding-fields-root input:not([type='hidden']), #dynamic-onboarding-fields-root select"
    );
    
    const distinctFieldsSet = new Set();
    coreFormInputs.forEach(input => {
      if (input.type === "radio" || input.type === "checkbox") {
        distinctFieldsSet.add(input.name || input.id);
      } else {
        distinctFieldsSet.add(input.id || input.className || Math.random().toString());
      }
    });

    const activeFormFieldsCount = distinctFieldsSet.size;
    const isMobileDeviceView = window.matchMedia("(max-width: 768px)").matches;
    let secondsPerField = 15;
    let structuralOverhead = 150;

    if (isMobileDeviceView) {
      secondsPerField = 25;
      structuralOverhead = 270;
    }

    const variableSecondsCalculated = (activeFormFieldsCount * secondsPerField) + structuralOverhead;
    const calculatedMinutesFraction = Math.ceil(variableSecondsCalculated / 60);
    
    if (calculatedMinutesFraction <= 1) {
      dynamicMinutesText = "1 minute";
    } else {
      dynamicMinutesText = `${calculatedMinutesFraction} minutes`;
    }
  } catch (timingCalculationError) {
    console.warn("[Timing Engine Exception] Falling back to default time boundaries:", timingCalculationError);
  }

  // 🟢 FIXED: UNIQUE, DISTINCT DESCRIPTIONS ASSIGNED TO EACH STEP
  const timelineRegistryMatrix = [
    { idx: 0, title: "1. Fleet Intake Info", desc: "State of Formation or Registration" },
    { idx: 1, title: "2. Vehicle Input Matrix", desc: "VIN verification and gross weight" },
    { idx: 2, title: "3. Real-Time Tax Review", desc: "Calculation review and exemptions" },
    { idx: 3, title: "4. Add-Ons", desc: "Audit protection and compliance shields" },
    { idx: 4, title: "5. Power of Attorney", desc: "Digital signature and authorization" },
    { idx: 5, title: "6. Purchase Summary", desc: "Filing fees and item breakdowns" },
    { idx: 6, title: "7. Secure Payment", desc: "Encrypted payment verification" },
    { idx: 7, title: "8. Success Portal", desc: "IRS submission tracking status" }
  ];

  let compiledMapHtml = `
    <div id="f4u-clean-timeline-container" style="box-sizing: border-box; width: 100% !important; padding: 0 24px !important; margin: 0 !important; height: calc(100vh - 180px); display: flex; flex-direction: column;">
      <div class="sidebar-header-box" style="margin-bottom: 12px; text-align: left; padding-left: 2px !important;">
        <h3 class="sidebar-title-label" style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; margin: 0 0 4px 0; letter-spacing: -0.25px;">Heavy Use Tax Map</h3>
        <p class="sidebar-time-tracker" style="color: #64748b; font-size: 0.775rem; font-weight: 600; margin: 0; display: flex; align-items: center; gap: 4px;">
          <i class="fa-solid fa-clock" style="font-size: 0.75rem;"></i> Estimated completion time: <span style="color: #0a1f44; font-weight: 700;">${dynamicMinutesText}</span>
        </p>
      </div>
      <nav aria-label="Wizard Steps Progress Tracker" class="sidebar-nav-timeline" style="display: flex; flex-direction: column; justify-content: space-between; flex: 1; width: 100% !important; margin: 0 !important; padding: 16px 0 16px 0 !important;">
  `;

  timelineRegistryMatrix.forEach(stepItem => {
    compiledMapHtml += `
      <div id="timeline-row-${stepItem.idx}" class="toc-step-row timeline-row-${stepItem.idx}" style="display: flex !important; align-items: flex-start !important; justify-content: flex-start !important; gap: 12px !important; padding: 0 !important; margin: 0 !important; box-sizing: border-box; width: 100% !important;">
        <span class="toc-dot" style="width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-top: 5px; flex-shrink: 0; box-sizing: border-box; transition: background-color 0.2s, box-shadow 0.2s;"></span>
        <div class="toc-text-group" style="display: flex; flex-direction: column; gap: 2px; width: 100% !important; min-width: 0; box-sizing: border-box; margin: 0 !important; padding: 0 !important; flex-grow: 1 !important;">
          <span class="toc-step-title" style="font-size: 0.9rem; color: #64748b; font-weight: 500; transition: color 0.2s; display: block; width: 100% !important; line-height: 1.3; margin: 0 !important; padding: 0 !important;">${stepItem.title}</span>
          <span class="toc-step-desc" style="font-size: 0.80rem; color: #94a3b8; font-weight: 500; display: block; width: 100% !important; line-height: 1.3; margin: 0 !important; padding: 0 !important; word-wrap: break-word; overflow-wrap: break-word; white-space: normal !important;">${stepItem.desc}</span>
        </div>
      </div>
    `;
  });

  compiledMapHtml += `
      </nav>
    </div>
  `;

  targetPlaceholder.innerHTML = compiledMapHtml;

  // Execute immediate highlight update calculation pass
  const rawValueNum = parseInt(window.currentWizardActiveStep, 10);
  const liveStepContext = isNaN(rawValueNum) ? 0 : rawValueNum;
  updateApplicationMapTimelineBubbles(liveStepContext);
}

// ============================================================================ //
// 🗺️ PART 4: MULTI-SIDEBAR TIMELINE NAV LIGHTS ENGINE (SOLID EMERALD 1-INDEX)  //
// ============================================================================ //
function updateApplicationMapTimelineBubbles(currentStepIndex) {
  "use strict";
  
  // 🟢 OFFSET CONVERSION: Transform master orchestrator 1-index (1-8) into timeline 0-index (0-7)
  const rawStepValue = parseInt(currentStepIndex, 10);
  const activeStep = (isNaN(rawStepValue) ? 1 : rawStepValue) - 1; 
  
  // Keep the reference persistent globally in browser storage parameters
  window.currentWizardActiveStep = activeStep;

  // Enforce loop explicitly within your 8 steps (0 through 7)
  for (let i = 0; i <= 7; i++) { 
    const rowNodes = document.querySelectorAll(`#timeline-row-${i}`);
    rowNodes.forEach(rowNode => {
      if (!rowNode) return;
      const dotNode = rowNode.querySelector(".toc-dot");
      const titleNode = rowNode.querySelector(".toc-step-title");

      // 🟢 CONDITION 1: CURRENT ACTIVE PANEL VIEW (Emerald Green + Focus Ring)
      if (i === activeStep) {
        if (dotNode) {
          dotNode.style.setProperty("background-color", "#10b981", "important");
          dotNode.style.setProperty("border", "3px solid #10b981", "important");
          dotNode.style.setProperty("box-shadow", "0 0 0 4px rgba(16, 185, 129, 0.25)", "important");
        }
        if (titleNode) {
          titleNode.style.setProperty("color", "#10b981", "important");
          titleNode.style.setProperty("font-weight", "800", "important");
        }
      } 
      // 🟢 CONDITION 2: VERIFIED COMPLETED PAST STEPS (Solid Emerald Green, No Shadow)
      else if (i < activeStep) {
        if (dotNode) {
          dotNode.style.setProperty("background-color", "#10b981", "important");
          dotNode.style.setProperty("border", "3px solid #10b981", "important");
          dotNode.style.removeProperty("box-shadow");
        }
        if (titleNode) {
          titleNode.style.setProperty("color", "#0a1f44", "important");
          titleNode.style.setProperty("font-weight", "700", "important");
        }
      } 
      // ⚪ CONDITION 3: UNVISITED FUTURE OR BACKTRACKED REGRESSED STEPS (Slate Grey Override)
      else {
        if (dotNode) {
          // Explicitly forcing slate-grey overwrites with !important to clear lingering green
          dotNode.style.setProperty("background-color", "#e2e8f0", "important");
          dotNode.style.setProperty("border", "3px solid #e2e8f0", "important");
          dotNode.style.removeProperty("box-shadow");
        }
        if (titleNode) {
          titleNode.style.setProperty("color", "#64748b", "important");
          titleNode.style.setProperty("font-weight", "500", "important");
        }
      }
    });
  }
}

window.renderDynamicWizardApplicationMap = renderDynamicWizardApplicationMap;
window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubbles;

if (document.readyState !== "loading") {
  window.renderDynamicWizardApplicationMap();
} else {
  document.addEventListener("DOMContentLoaded", window.renderDynamicWizardApplicationMap);
}
