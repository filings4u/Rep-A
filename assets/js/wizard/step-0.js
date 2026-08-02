// ============================================================================ //
// ðŸ—ºï¸ STEP 0: CONTEXTUAL JURISDICTION FILING ENTRY GATE LAYOUT ENGINE             //
// ============================================================================ //
;(function renderStep0JurisdictionGateHtml() {
  "use strict";

  const wizardFormWrapper = 
    document.querySelector(".wizard-container-wrapper") || 
    document.getElementById("master-onboarding-form") || 
    document.querySelector(".wizard-container") || 
    document.body;

  if (!wizardFormWrapper) {
    setTimeout(renderStep0JurisdictionGateHtml, 50);
    return;
  }

  if (document.getElementById("step-panel-0")) return;

  if (!document.getElementById("f4u-gate-validation-animations")) {
    const styleSheetNode = document.createElement("style");
    styleSheetNode.id = "f4u-gate-validation-animations";
    styleSheetNode.textContent = `
      @keyframes f4uHorizontalShake {
        0%, 100% { transform: translateX(0); }
        15%, 53%, 80% { transform: translateX(-8px); }
        30%, 68% { transform: translateX(8px); }
      }
      .f4u-shake-alert { 
        animation: f4uHorizontalShake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both !important; 
      }
    `;
    document.head.appendChild(styleSheetNode);
  }
  const gateContainerBlock = document.createElement("div");
  gateContainerBlock.id = "step-panel-0";
  gateContainerBlock.className = "wizard-panel active";
  gateContainerBlock.style.cssText = "display: none; background: #ffffff; border: 1px solid var(--border, #e2e8f0); border-radius: 12px; padding: 35px 40px; width: 100%; max-width: 1200px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); box-sizing: border-box; position: relative; margin-top: 70px !important; margin-bottom: 20px !important; text-align: left; clear: both;";
  
  gateContainerBlock.innerHTML = `
    <div class="step-header-container" style="border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px; text-align: left;">
      <h2 style="margin: 4px 0 0 0; color: #0a1f44; font-size: 1.5rem; font-weight: 800;">Select Your Jurisdiction State</h2>
      <p style="margin: 6px 0 0 0; color: #64748b; font-size: 0.875rem;">Please select the primary state where your business will register to calculate mandatory processing fees.</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 500px; margin: 40px auto; text-align: left;">
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <label for="wizard_gate_state_select" style="font-weight: 700; font-size: 0.9rem; color: #0a1f44;">Target State Jurisdiction</label>
        <select id="wizard_gate_state_select" class="state-dropdown-select" style="width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 1rem; color: #0a1f44; font-weight: 600; cursor: pointer; background: #ffffff; box-sizing: border-box; transition: all 0.2s ease-in-out;">
        </select>
      </div>
      <button type="button" onclick="window.processJurisdictionGateAdvancement()" style="width: 100%; padding: 14px; background: #0a1f44; color: #ffffff; border: none; border-radius: 8px; font-size: 1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 10px; transition: background 0.2s;">
        Initialize Compliance Workspace <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `;

  if (wizardFormWrapper.firstChild) {
    wizardFormWrapper.insertBefore(gateContainerBlock, wizardFormWrapper.firstChild);
  } else {
    wizardFormWrapper.appendChild(gateContainerBlock);
  }

  if (typeof window.autoDiscoverAndHydrateStateDropdowns !== "function") {
    throw new Error("[Enterprise Critical Error] Mandatory state hydration engine is missing.");
  }
  window.autoDiscoverAndHydrateStateDropdowns();
})();


// ============================================================================ //
// ðŸ”Œ STEP 0 INTERACTIVE NAVIGATION AND PARAMETER STREAMING ACTIONS              //
// ============================================================================ //
window.processJurisdictionGateAdvancement = function() {
  const stateSelectorNode = document.getElementById("wizard_gate_state_select");
  if (!stateSelectorNode) {
    throw new Error("[Enterprise Critical Error] State selection DOM node missing.");
  }

  if (!stateSelectorNode.value || stateSelectorNode.value.trim() === "") {
    stateSelectorNode.classList.remove("f4u-shake-alert");
    void stateSelectorNode.offsetWidth;
    stateSelectorNode.style.setProperty("border-color", "#ef4444", "important"); // Corrected to Error Red
    stateSelectorNode.style.setProperty("box-shadow", "0 0 0 3px rgba(239, 68, 68, 0.15)", "important");
    stateSelectorNode.classList.add("f4u-shake-alert");
    stateSelectorNode.focus();
    throw new Error("[Enterprise Critical Error] State jurisdiction selection is required. Process terminated.");
  }

  const chosenStateCode = stateSelectorNode.value.toUpperCase();
  console.log(`[Gate Engine] Advancing funnel with target state: ${chosenStateCode}`);

  const urlParams = new URLSearchParams(window.location.search);

  const rawPlanTier = urlParams.get('plan');
  if (!rawPlanTier || rawPlanTier.trim() === "") {
    throw new Error("[Enterprise Critical Error] Mandatory URL query parameter 'plan' for table field 'plan_tier' is missing.");
  }
  const currentPlanTierKey = String(rawPlanTier).toLowerCase().trim();

  const rawService = urlParams.get('service');
  if (!rawService || rawService.trim() === "") {
    throw new Error("[Enterprise Critical Error] Mandatory URL query parameter 'service' for table fields 'service_key'/'service_title' is missing.");
  }
  const currentServiceSlug = String(rawService).toLowerCase().trim();
  urlParams.set('state', chosenStateCode);
  const upgradedAddressPath = `${window.location.pathname}?${urlParams.toString()}`;
  window.history.replaceState({ path: upgradedAddressPath }, '', upgradedAddressPath);

  window.selectedJurisdiction = chosenStateCode;
  localStorage.setItem('wizard_selected_state', chosenStateCode);

  // Direct mapping to state-side schema tracking objects
  window.currentOrderCorePayload = window.currentOrderCorePayload || {};
  
  // Maps to: public.orders.plan_tier
  window.currentOrderCorePayload.plan_tier = currentPlanTierKey;
  
  // Maps to: public.orders.collected_payload_metadata JSONB subfield
  window.currentOrderCorePayload.collected_payload_metadata = window.currentOrderCorePayload.collected_payload_metadata || {};
  window.currentOrderCorePayload.collected_payload_metadata.selected_state_jurisdiction = chosenStateCode;

  if (typeof window.processDynamicMarketingLayoutDecorations === "function") {
    window.processDynamicMarketingLayoutDecorations({}, currentPlanTierKey, 0);
  }

  if (typeof window.renderStep1CustomFeatureBullets === "function" && currentServiceSlug) {
    window.renderStep1CustomFeatureBullets(currentServiceSlug);
  }

  const gatePanel = document.getElementById("step-panel-0");
  if (gatePanel) {
    gatePanel.classList.remove("active");
    gatePanel.style.setProperty("display", "none", "important");
  }

  if (typeof window.switchWizardActiveViewLayout === "function") {
    window.switchWizardActiveViewLayout(1);
  } else {
    const step1Panel = document.getElementById("step-panel-1") || document.getElementById("step-1");
    if (!step1Panel) {
      throw new Error("[Enterprise Critical Error] Layout redirection failed. Step 1 target container does not exist.");
    }
    step1Panel.classList.add("active");
    step1Panel.style.setProperty("display", "block", "important");
  }
};

// Run this block immediately during page initialization to cache parameters securely
const urlParameters = new URLSearchParams(window.location.search);
const urlService = urlParameters.get("service");
const urlPlan = urlParameters.get("plan");

if (urlService && urlService.trim() !== "") {
  sessionStorage.setItem("f4u_wizard_service", urlService.trim());
}
if (urlPlan && urlPlan.trim() !== "") {
  sessionStorage.setItem("f4u_wizard_plan", urlPlan.trim());
}

if (urlService || urlPlan) {
  console.log(`📡 URL Entry Parameters Cached -> Service: [${urlService}], Plan: [${urlPlan}]`);
}
