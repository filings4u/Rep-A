
// ============================================================================
// ðŸ“ FILINGS4U HEAVY TAX ENGINE - MASTER CENTRALIZED LIFE-CYCLE ORCHESTRATOR
// ============================================================================
;(function() {
  "use strict";

  // Universal state registers shared across all modular step files
  window.currentHeavyTaxActiveStep = 1;
  window.activeHeavySessionUuid = localStorage.getItem("f4u_heavy_session_id") || null;
  window.activeLoadedFleetVehiclesArray = [];
  
  window.computedIrsTaxOwedBaseAmount = 0.00;
  window.platformFilingServiceFeeValue = 44.90;
  window.finalCheckoutCollectibleTotalSumAmount = 0.00;

  // --- UNIVERSAL PANEL VIEW DISPATCHER WITH SPINNER INTERCEPTOR ---
  window.switchHeavyTaxViewPanel = function(targetStepIndex) {
    const cleanIndex = parseInt(targetStepIndex, 10) || 1;
    
    // EMBEDDED ACTION INTERCEPTOR: If your custom spinner function is loaded in global memory, 
    // we wrap the panel updates in the transition loader to create an elegant animated flow!
    if (typeof window.triggerWorkspaceTransitionSpinner === "function") {
      window.triggerWorkspaceTransitionSpinner(() => {
        executeRawPanelVisibilityToggle(cleanIndex);
      });
    } else {
      // Fallback pass if the spinner handler fails to boot up in memory
      executeRawPanelVisibilityToggle(cleanIndex);
    }
  };

// --- EXCLUSIVE VISIBILITY REPAINT LOGIC LOOP (LINKED TO TIMELINE) ---
function executeRawPanelVisibilityToggle(cleanIndex) {
  window.currentHeavyTaxActiveStep = cleanIndex;
  console.log(`[Heavy Tax core] Operational canvas swapped to Step Index: ${cleanIndex}`);

  // 1. Manage layout panel visibilities flat inside the DOM flow
  const allTaxPanels = document.querySelectorAll(".heavy-tax-panel");
  allTaxPanels.forEach(panel => {
    if (panel) {
      panel.style.setProperty("display", "none", "important");
    }
  });

  const activeTargetPanel = document.getElementById(`heavy-panel-${cleanIndex}`);
  if (activeTargetPanel) {
    activeTargetPanel.style.setProperty("display", "block", "important");
  }

  // 2. Synchronize sidebar timeline highlights matching your left layout nodes
  const timelineItemsList = document.querySelectorAll(".wizard-sidebar-timeline-item") || document.querySelectorAll("li");
  timelineItemsList.forEach((listItemNode, nodeIndex) => {
    const naturalStepCounter = nodeIndex + 1;
    if (naturalStepCounter === cleanIndex) {
      listItemNode.style.setProperty("color", "#10b981", "important"); 
      listItemNode.style.setProperty("font-weight", "800", "important");
    } else if (naturalStepCounter < cleanIndex) {
      listItemNode.style.setProperty("color", "#0a1f44", "important"); 
      listItemNode.style.setProperty("font-weight", "600", "important");
    } else {
      listItemNode.style.setProperty("color", "#94a3b8", "important"); 
      listItemNode.style.setProperty("font-weight", "500", "important");
    }
  });

  // ðŸŸ¢ 3. NEW: AUTOMATED SYNCHRONIZATION WITH YOUR HEAVY USE TAX MAP TIMELINE
  if (typeof window.updateApplicationMapTimelineBubbles === "function") {
    window.updateApplicationMapTimelineBubbles(cleanIndex);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}


  // --- AUTOMATED SESSION BACKGROUND PROGRESS RECOVERY HYDRATOR ---
  async function autoDiscoverAndHydrateHeavyTaxSessionProgress() {
    const client = window.supabaseClient || window.supabase || window.f4uWizardSupabaseInstance;
    const sessionUuid = window.activeHeavySessionUuid;

    if (!client || !sessionUuid || typeof client.from !== "function") {
      console.log("[Heavy Tax Engine] Brand new organic session context established. Waiting for step entries.");
      window.switchHeavyTaxViewPanel(1);
      return;
    }

    console.log(`[Heavy Tax Engine] Active tracking ID verified: ${sessionUuid}. Pre-loading corporate indices...`);

    try {
      const { data: session, error: sessionErr } = await client
        .from("heavy_tax_sessions")
        .select("*")
        .eq("id", sessionUuid)
        .single();

      if (sessionErr) throw sessionErr;

      if (session) {
        const nameField = document.getElementById("heavy_business_name");
        const einField = document.getElementById("heavy_ein_number");
        const typeField = document.getElementById("heavy_business_type");
        const streetField = document.getElementById("heavy_address_street");
        const cityField = document.getElementById("heavy_address_city");
        const stateField = document.getElementById("heavy_address_state");
        const zipField = document.getElementById("heavy_address_zip");
        const titleField = document.getElementById("heavy_signing_title");
        const emailField = document.getElementById("heavy_contact_email");

        if (nameField) nameField.value = session.legal_business_name || "";
        if (einField && session.ein_number) {
          einField.value = session.ein_number.substring(0, 2) + "-" + session.ein_number.substring(2, 9);
        }
        if (typeField) typeField.value = session.business_type || "LLC";
        if (streetField) streetField.value = session.street_address || "";
        if (cityField) cityField.value = session.city || "";
        if (stateField) stateField.value = session.state_code || "";
        if (zipField) zipField.value = session.zip_code || "";
        if (titleField) titleField.value = session.signing_title || "";
        if (emailField) emailField.value = session.contact_email || "";
      }

      const { data: vehicles, error: vehicleErr } = await client
        .from("heavy_tax_vehicles")
        .select("*")
        .eq("session_id", sessionUuid);

      if (vehicleErr) throw vehicleErr;

      if (vehicles && vehicles.length > 0) {
        console.log(`[Heavy Tax Engine] Restoring ${vehicles.length} vehicle tracking vectors into active runtime array...`);
        window.activeLoadedFleetVehiclesArray = vehicles.map(truck => ({
          vin: truck.vin_number,
          weight: truck.taxable_gross_weight,
          category: truck.weight_category,
          month: truck.month_first_used,
          isLogging: truck.is_logging_truck,
          isSuspended: truck.is_suspended_exempt,
          tax: parseFloat(truck.calculated_irs_tax) || 0.00
        }));
        
        if (typeof window.refreshSpreadsheetMatrixDomTableElements === "function") {
          window.refreshSpreadsheetMatrixDomTableElements();
        }
      }

      window.switchHeavyTaxViewPanel(1);

    } catch (fault) {
      console.warn("[Heavy Context Recovery Intercept]", fault.message);
      localStorage.removeItem("f4u_heavy_session_id");
      window.activeHeavySessionUuid = null;
      window.switchHeavyTaxViewPanel(1);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoDiscoverAndHydrateHeavyTaxSessionProgress);
  } else {
    autoDiscoverAndHydrateHeavyTaxSessionProgress();
  }

})();



// ============================================================================ // 
// ðŸ”µ CENTRALIZED NAVY BLUE TRANSITION SPINNER INTERCEPTOR                      // 
// ============================================================================ // 
;(function() { 
    "use strict"; 
    
    // Use a secure token reference to track overlapping animation passes 
    let activeTransitionToken = 0; 
    
    function triggerWorkspaceTransitionSpinner(callbackHandoffRoutine) { 
        // Increment token sequence instantly to invalidate older active timers 
        const currentPassToken = ++activeTransitionToken; 
        
        // 1. Build and style the hidden modal block overlay if missing from the viewport 
        let dynamicSpinnerOverlay = document.getElementById("f4u-global-transition-overlay"); 
        if (!dynamicSpinnerOverlay) { 
            dynamicSpinnerOverlay = document.createElement("div"); 
            dynamicSpinnerOverlay.id = "f4u-global-transition-overlay"; 
            dynamicSpinnerOverlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(248, 250, 252, 0.85); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; opacity: 0; transition: opacity 0.2s ease; pointer-events: none; box-sizing: border-box;"; 
            
            if (!document.getElementById("f4u-spinner-global-keyframes")) { 
                const styleSheetNode = document.createElement("style"); 
                styleSheetNode.id = "f4u-spinner-global-keyframes"; 
                styleSheetNode.textContent = "@keyframes f4uPlatformCoreSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }"; 
                document.head.appendChild(styleSheetNode); 
            } 
            
            dynamicSpinnerOverlay.innerHTML = ` 
 <div style="width: 50px; height: 50px; border: 4px solid #cbd5e1; border-top: 4px solid #0a1f44; border-radius: 50%; animation: f4uPlatformCoreSpin 0.8s linear infinite; box-sizing: border-box;"></div> 
 <span style="color: #0a1f44; font-weight: 700; font-size: 0.9rem; font-family: system-ui, sans-serif; letter-spacing: 0.5px; text-transform: uppercase;">Updating Compliance Workspace...</span> `; 
            document.body.appendChild(dynamicSpinnerOverlay); 
        } 
        
        // 2. Fade spinner into active viewport space smoothly 
        dynamicSpinnerOverlay.style.display = "flex"; 
        // Forces browser rendering pass calculation frame layout prior to lifting opacity 
        void dynamicSpinnerOverlay.offsetWidth; 
        dynamicSpinnerOverlay.style.opacity = "1"; 
        dynamicSpinnerOverlay.style.pointerEvents = "auto"; 
        
        // 3. Coordinated structural execution pipeline 
        setTimeout(() => { 
            // Abort fade out cycle routines if an adjacent navigation transition has taken over 
            if (currentPassToken !== activeTransitionToken) return; 
            
            if (typeof callbackHandoffRoutine === "function") { 
                try { 
                    callbackHandoffRoutine(); 
                } catch (err) { 
                    console.error("[Spinner Engine Failure] Error during view handoff execution:", err); 
                } 
            } 
            
            // Allow layout paint adjustments to calculate and settle before dimming the loader wheel overlay 
            requestAnimationFrame(() => { 
                setTimeout(() => { 
                    if (currentPassToken !== activeTransitionToken) return; 
                    dynamicSpinnerOverlay.style.opacity = "0"; 
                    dynamicSpinnerOverlay.style.pointerEvents = "none"; 
                    
                    setTimeout(() => { 
                        // Verify structural ownership states before flipping layouts off-screen 
                        if (currentPassToken === activeTransitionToken && dynamicSpinnerOverlay.style.opacity === "0") { 
                            dynamicSpinnerOverlay.style.display = "none"; 
                        } 
                    }, 200); 
                }, 100); 
            }); 
        }, 180); 
    } 
    
    window.triggerWorkspaceTransitionSpinner = triggerWorkspaceTransitionSpinner; 
})();

// ============================================================================ //
// ðŸ—ºï¸ WIZARD STATE MANAGER & INTERCEPTOR FOR APPLICATION MAP                    //
// ============================================================================ //
;(function() {
  "use strict";

  /**
   * Core function to update the timeline active state.
   * Invoked programmatically by button clicks or state machines.
   */
  window.syncWizardStepWithTimelineMap = function(currentStepIndex) {
    const stepNum = parseInt(currentStepIndex, 10);
    const validatedStep = isNaN(stepNum) ? 0 : stepNum;

    // 1. Maintain global synchronization state for the rendering engine
    window.currentWizardActiveStep = validatedStep;

    // 2. Safely trigger the bubble illumination engine if it has finished loading
    if (typeof window.updateApplicationMapTimelineBubbles === "function") {
      window.updateApplicationMapTimelineBubbles(validatedStep);
      console.log(`[Map Sync] Successfully lit up Step Index: ${validatedStep}`);
    } else {
      console.warn("[Map Sync] Warning: Bubble engine not found in DOM yet. Retrying...");
      setTimeout;(function() {
        if (typeof window.updateApplicationMapTimelineBubbles === "function") {
          window.updateApplicationMapTimelineBubbles(validatedStep);
        }
      }, 100);
    }
  };

  /**
   * AUTOMATED INTERCEPTION UTILITY
   * Hooks into common event emitters or your Next/Back button classes.
   */
  document.addEventListener("DOMContentLoaded", function() {
    // Select your Next, Back, and Edit navigation controllers
    const navButtons = document.querySelectorAll(
      ".wizard-next-btn, .wizard-back-btn, .step-toggle-trigger, [data-wizard-target]"
    );

    navButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Wrap in a tiny timeout to ensure the core engine finishes altering the DOM state first
        setTimeout;(function() {
          // Read from your master global variable or standard UI data-attribute
          let discoveredStep = window.currentWizardActiveStep;

          if (button.hasAttribute("data-step-index")) {
            discoveredStep = button.getAttribute("data-step-index");
          }

          // Force-sync the visual state mapping
          if (discoveredStep !== undefined) {
            window.syncWizardStepWithTimelineMap(discoveredStep);
          }
          
        }, 30);
      });
    });
  });
})();
