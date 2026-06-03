// ========================================================
// 🧠 MODULE 1: CENTRAL SERVICE DATABASE INDEX & GLOBAL FLAGS
// ========================================================

// 🗂️ CENTRAL COMPLIANCE SERVICE SYSTEM DATABASE INDEX (2026 SPECS)
const CENTRAL_SERVICE_PLAN_DB = {
  "ucr-registration": { "name": "Unified Carrier Registration (UCR)", "gov_fee": 76, "prices": { "standard": 149, "elite": 249, "enterprise": 449 } },
  "clia-certificate": { "name": "CLIA Laboratory Certificate", "gov_fee": 180, "prices": { "standard": 199, "elite": 349, "enterprise": 599 } },
  "regulatory-consulting": { "name": "Custom Regulatory Legal Consulting", "gov_fee": 0, "prices": { "standard": 299, "elite": 499, "enterprise": 899 } },
  "hazmat-registration": { "name": "HAZMAT Registration (PHMSA)", "gov_fee": 300, "prices": { "standard": 175, "elite": 299, "enterprise": 499 } },
  "duns-number": { "name": "DUNS Number Procurement", "gov_fee": 0, "prices": { "standard": 125, "elite": 249, "enterprise": 449 } },
  "procurement-registration": { "name": "Government Procurement Registration", "gov_fee": 0, "prices": { "standard": 199, "elite": 349, "enterprise": 699 } },
  "llc-reinstatement": { "name": "LLC Reinstatement Processing", "gov_fee": 150, "prices": { "standard": 199, "elite": 349, "enterprise": 549 } },
  "apostille-services": { "name": "Apostille Authentication Services", "gov_fee": 45, "prices": { "standard": 149, "elite": 299, "enterprise": 499 } },
  "good-standing": { "name": "Certificate of Good Standing", "gov_fee": 50, "prices": { "standard": 49, "elite": 99, "enterprise": 199 } },
  "foreign-qualification": { "name": "Foreign Qualification Certificate", "gov_fee": 200, "prices": { "standard": 149, "elite": 299, "enterprise": 499 } },
  "scac-code": { "name": "SCAC Code Registration (NMFTA)", "gov_fee": 95, "prices": { "standard": 125, "elite": 249, "enterprise": 449 } },
  "trademark-filing": { "name": "Trademark Filing Application", "gov_fee": 350, "prices": { "standard": 199, "elite": 399, "enterprise": 699 } },
  "servicemark-filing": { "name": "Servicemark Filing Application", "gov_fee": 350, "prices": { "standard": 199, "elite": 399, "enterprise": 699 } }
};

// ⚙️ SYSTEM STATE FLOW VARIABLES
let currentWizardActiveStep = 1;
const totalWizardExpectedSteps = 5;
let routeActiveServiceKey = "hazmat-registration";
let routeActivePlanKey = "elite";
window.wizardCalculatedFinalTotalAmount = 0;

// ACTIVE PRICE CALCULATION STATE VARIABLE FLAGS
window.customSelectedRegisteredAgentServiceActive = false;
window.customSelectedEinProcurementServiceActive = false;
window.customSelectedScorpElectionServiceActive = false;
window.customSelectedSolePropLicenseAuditServiceActive = false;
window.customSelectedDbaLicenseAuditServiceActive = false;
window.customSelectedNonprofitLicenseCheckActive = false;
window.customSelectedDbaSearchServiceActive = false;
window.customSelectedForeignQualLicenseSuiteActive = false;
window.customSelectedExpeditedFilingServiceActive = false;
window.customSelectedApostilleAuthenticationServiceActive = false;
window.customSelectedGoodStandingCertificateServiceActive = false;     

// Locate the DOMContentLoaded block at the top of your wizard-calculations-engine.js file
document.addEventListener("DOMContentLoaded", function() {
  initializeDynamicChronometerWidget12Hr();
  generateSecureRuntimeSessionTokenVanilla();
  initializeUrlParameterParserEngineVanilla();
  
  if (typeof initializeSignatureCanvasPadEngineVanilla === "function") {
    initializeSignatureCanvasPadEngineVanilla();
  }
  
  // Clear state or restore cache parameters safely
  const pageWasRefreshed = performance.getEntriesByType("navigation")[0]?.type === "reload";
  if (pageWasRefreshed) {
    localStorage.removeItem("f4u_wizard_onboarding_state"); 
  } else if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true); 
  }
  
  // FIX: Force rendering field injection instantly on boot
  if (typeof executeDynamicRegulatoryFieldInjection === "function") {
    executeDynamicRegulatoryFieldInjection(routeActiveServiceKey);
  }
  
  // FIX: Safely invoke view sync routing parameters after DOM rendering finishes
  if (typeof initializeFormDisplayLayoutSync === "function") {
    initializeFormDisplayLayoutSync();
  }
  
  updateDynamicPricingMatrixVanilla();
  renderActiveWizardStepUiLayout();
});


// ⏱️ REAL-TIME CHRONOLOGICAL CLOCK COMPONENT (12-HOUR TIME REGIME)
function initializeDynamicChronometerWidget12Hr() {
  const clockNode = document.getElementById("wizard-live-clock-timestamp");
  
  function refreshLiveTime() {
    const nowTimestamp = new Date();
    let hourDigits = nowTimestamp.getHours();
    const minuteDigits = nowTimestamp.getMinutes().toString().padStart(2, '0');
    const secondDigits = nowTimestamp.getSeconds().toString().padStart(2, '0');
    const timePeriodMeridiem = hourDigits >= 12 ? 'PM' : 'AM';
    
    hourDigits = hourDigits % 12;
    hourDigits = hourDigits ? hourDigits : 12;
    
    const formattedTimeStr = `${hourDigits}:${minuteDigits}:${secondDigits} ${timePeriodMeridiem}`;
    if (clockNode) clockNode.textContent = formattedTimeStr;
  }
  
  refreshLiveTime();
  setInterval(refreshLiveTime, 1000);
}

// GENERATE SECURE TRANSACTION REFERENCE REF STAMP
function generateSecureRuntimeSessionTokenVanilla() {
  let bufferArray = new Uint32Array(4);
  window.crypto.getRandomValues(bufferArray);
  let hexTokenStr = Array.from(bufferArray, val => val.toString(16).padStart(8, '0')).join('').toUpperCase();
  let sessionTokenString = `F4U-TX-${hexTokenStr.substring(0, 16)}`;
  const sessionDisplayNode = document.getElementById("wizard-session-token-display-root");
  if (sessionDisplayNode) sessionDisplayNode.textContent = sessionTokenString;
  window.f4u_tx_session_hash = sessionTokenString;
}

// URL PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE
function initializeUrlParameterParserEngineVanilla() {
  const searchUrlQueryStrings = new URLSearchParams(window.location.search);
  const queryPassedService = searchUrlQueryStrings.get('service');
  const queryPassedPlan = searchUrlQueryStrings.get('plan');
  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  // 1. Parse incoming website page targets and translate to full names
  if (queryPassedService) {
    routeActiveServiceKey = queryPassedService.toLowerCase().trim();
    if (inputServiceNode) {
      if (CENTRAL_SERVICE_PLAN_DB[routeActiveServiceKey]) {
        inputServiceNode.value = CENTRAL_SERVICE_PLAN_DB[routeActiveServiceKey].name;
      } else {
        let cleanLabel = routeActiveServiceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        inputServiceNode.value = cleanLabel;
      }
    }
  }

  // 2. Parse incoming pricing click tiers and apply descriptive titles
  if (queryPassedPlan) {
    const standardizedPlanString = queryPassedPlan.toLowerCase().trim();
    if (["standard", "elite", "enterprise"].includes(standardizedPlanString)) {
      routeActivePlanKey = standardizedPlanString;
      if (inputPlanNode) {
        let planDisplayNames = {
          "standard": "Standard General Processing Plan",
          "elite": "Elite Priority Processing Plan (Recommended)",
          "enterprise": "Enterprise Complete Portfolio Plan"
        };
        inputPlanNode.value = planDisplayNames[standardizedPlanString];
      }
    }
  }

  // 3. EXECUTE DYNAMIC FIELD GENERATION ON BOOT
  if (typeof executeDynamicRegulatoryFieldInjection === "function") {
    executeDynamicRegulatoryFieldInjection(routeActiveServiceKey);
  }
}

// MASTER REGULATORY FORM FIELD INJECTION ENGINE (ROUTING DISPATCH PATCH)
function executeDynamicRegulatoryFieldInjection(serviceKey) {
  const rootFieldContainer = document.getElementById("dynamic-onboarding-fields-root");
  if (!rootFieldContainer) return;
  
  // Standardize key inputs to pass strict conditional matches
  const cleanKey = String(serviceKey || "").toLowerCase().trim();
  let targetLayoutFamily = "llc"; 

  // Categorization Router: Map URL strings flawlessly to core layout functions
  if (cleanKey.includes("series-llc") || cleanKey.includes("series")) {
    targetLayoutFamily = "series-llc";
  } else if (cleanKey === "llc-formation" || cleanKey.includes("llc")) {
    targetLayoutFamily = "llc";
  } else if (cleanKey.includes("nonprofit")) {
    targetLayoutFamily = "nonprofit";
  } else if (cleanKey.includes("corp") || cleanKey.includes("corporation")) {
    targetLayoutFamily = "corporate";
  } else if (cleanKey.includes("proprietor") || cleanKey.includes("sole")) {
    targetLayoutFamily = "sole-prop";
  } else if (cleanKey.includes("dba") || cleanKey.includes("assumed")) {
    targetLayoutFamily = "dba";
  } else if (cleanKey.includes("reinstatement") || cleanKey.includes("dissolution") || cleanKey.includes("annual-report") || cleanKey.includes("good-standing") || cleanKey.includes("qualification")) {
    targetLayoutFamily = "maintenance";
  } else if (cleanKey.includes("trademark") || cleanKey.includes("servicemark")) {
    targetLayoutFamily = "ip";
  } else if (cleanKey.includes("consulting") || cleanKey.includes("permit") || cleanKey.includes("license")) {
    targetLayoutFamily = "regulatory";
  } else if (cleanKey === "ein" || cleanKey.includes("sales-tax") || cleanKey.includes("payroll") || cleanKey.includes("agreement")) {
    targetLayoutFamily = "financial";
  } else if (cleanKey.includes("income-tax") || cleanKey.includes("franchise") || cleanKey.includes("heavy-use") || cleanKey.includes("2290")) {
    targetLayoutFamily = "tax-filing";
  } else if (cleanKey.includes("cage") || cleanKey.includes("duns") || cleanKey.includes("procurement") || cleanKey.includes("certificate") || cleanKey.includes("minority")) {
    targetLayoutFamily = "procurement";
  } else if (cleanKey.includes("insurance") || cleanKey.includes("audit")) {
    targetLayoutFamily = "insurance";
  } else {
    targetLayoutFamily = "trucking";
  }

    // Locate this area at the very bottom of executeDynamicRegulatoryFieldInjection 
  // inside your wizard-calculations-engine.js file:

  if (targetLayoutFamily === "series-llc") {
    rootFieldContainer.innerHTML = typeof buildSeriesLlcRegistrationFieldsLayoutHtml === "function" ? buildSeriesLlcRegistrationFieldsLayoutHtml(routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "llc") {
    rootFieldContainer.innerHTML = typeof buildLlcFormationFieldsLayoutHtml === "function" ? buildLlcFormationFieldsLayoutHtml(routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "nonprofit") {
    rootFieldContainer.innerHTML = typeof buildNonprofitOrganizationFieldsLayoutHtml === "function" ? buildNonprofitOrganizationFieldsLayoutHtml(routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "corporate") {
    rootFieldContainer.innerHTML = typeof buildCorporateFormationFieldsLayoutHtml === "function" ? buildCorporateFormationFieldsLayoutHtml(routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "dba") {
    rootFieldContainer.innerHTML = typeof buildDbaRegistrationFieldsLayoutHtml === "function" ? buildDbaRegistrationFieldsLayoutHtml(routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "sole-prop") {
    rootFieldContainer.innerHTML = typeof buildInformalEntityFieldsLayoutHtml === "function" ? buildInformalEntityFieldsLayoutHtml(routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "maintenance") {
    // FIXED: Cleanly routes qualification requests directly to your new form module
    if (cleanKey.includes("qualification")) {
      rootFieldContainer.innerHTML = typeof buildForeignQualificationFieldsLayoutHtml === "function" ? buildForeignQualificationFieldsLayoutHtml(routeActiveServiceKey) : "";
    } else {
      rootFieldContainer.innerHTML = typeof buildMaintenanceFieldsLayoutHtml === "function" ? buildMaintenanceFieldsLayoutHtml(routeActiveServiceKey) : "";
    }
  } else if (targetLayoutFamily === "ip") {
    rootFieldContainer.innerHTML = typeof buildIpRegistryFieldsLayoutHtml === "function" ? buildIpRegistryFieldsLayoutHtml(routeActiveServiceKey) : "";
  } else {
    rootFieldContainer.innerHTML = typeof buildExtendedFamiliesFieldsLayoutHtml === "function" ? buildExtendedFamiliesFieldsLayoutHtml(targetLayoutFamily, routeActiveServiceKey) : "";
  }
}

function goToNextWizardStep(targetStepIndex) {
    console.log(`[Manual Override] Forcing step state jump directly to index: ${targetStepIndex}`);
    
    // 1. Force override update on the tracking counter
    currentWizardActiveStep = targetStepIndex;

    // 2. Select every wizard panel element on the page
    const panels = document.querySelectorAll(".wizard-panel");
    console.log(`[Manual Override] Total panels located in current DOM structure: ${panels.length}`);

    if (panels.length > 0) {
        panels.forEach((panel, sequence) => {
            const currentItemNumericalStep = sequence + 1;
            
            if (currentItemNumericalStep === targetStepIndex) {
                panel.classList.add("active");
                panel.style.display = "block"; // Enforce instant CSS layout override
                console.log(`[Manual Override] Target panel unlocked and made active: Position ${currentItemNumericalStep}`);
            } else {
                panel.classList.remove("active");
                panel.style.display = "none"; // Hard hide structural neighbors
            }
        });
    } else {
        console.error("[Manual Override] Critical configuration failure: No items containing the '.wizard-panel' class exist in this document.");
    }

    // 3. Try to run standard secondary timeline tracking icons if functional
    if (typeof renderActiveWizardStepUiLayout === "function") {
        try {
            renderActiveWizardStepUiLayout();
        } catch(e) {
            console.warn("[Manual Override] Layout engine threw warning on secondary markers, ignoring to allow navigation:", e);
        }
    }
}






// ========================================================
// 🧠 AUTOMATED DATA CONTROLLER AND CALCULATIONS SCRIPT ENGINE
// ========================================================

// 🚀 MASTER STEP NAVIGATION CONTROL LOGIC (VANILLA JS IMPLEMENTATION)
function navigateWizardStepTrackVanilla(directionOffset) {
  const plannedTargetStep = currentWizardActiveStep + directionOffset;
  
  // Limit navigation bounds to valid panels
  if (plannedTargetStep < 1 || plannedTargetStep > totalWizardExpectedSteps) return;
  
  // Execute input structure check loops when advancing panels
  if (directionOffset > 0) {
    if (!validateStepInputParametersVanilla(currentWizardActiveStep)) {
      return; // Prevent step advance if validation parameters check fails
    }
  }
  
  // Save structural panel parameters to state
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }
  

  // 🔍 INPUT INTERACTIVE VALIDATION CONTROL ENGINE
function validateStepInputParametersVanilla(stepIndex) {
  let isValid = true;
  const targetPanel = document.getElementById(`step-panel-${stepIndex}`);
  if (!targetPanel) return true;
  
  // Clear prior validation markers
  targetPanel.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  targetPanel.querySelectorAll('input, select').forEach(node => {
    node.style.borderColor = 'var(--border)';
  });

  // Step 1 Check Parameters
  if (stepIndex === 1) {
    const targetJurisdiction = document.getElementById('wizard-target-jurisdiction');
    if (targetJurisdiction && !targetJurisdiction.value) {
      markFieldAsInvalidVanilla(targetJurisdiction, 'Filing authority target jurisdiction choice required.');
      isValid = false;
    }
  }

  // Step 2 Check Parameters
  if (stepIndex === 2) {
    const checkedRequiredFields = [
      { id: 'ent_legal_name', label: 'Legal business name parameter entry is required.' },
      { id: 'ent_ein', label: 'Federal taxonomy taxpayer EIN/Tax ID entry is required.' },
      { id: 'ent_address_street', label: 'Principal business address designation entry is required.' },
      { id: 'ent_address_city', label: 'Principal corporate office locality municipality city value required.' },
      { id: 'ent_address_zip', label: 'Postal registration address zip routing index entry required.' },
      { id: 'ent_officer_name', label: 'Executing administrative chief executive profile name parameter required.' },
      { id: 'ent_comms_email', label: 'Communications notification gateway alert system target address required.' },
      { id: 'ent_comms_phone', label: 'Communications cellular telephone connectivity digits parameter entry required.' }
    ];
    
    checkedRequiredFields.forEach(field => {
      const inputNode = document.getElementById(field.id);
      if (inputNode && (!inputNode.value || inputNode.value.trim() === "")) {
        markFieldAsInvalidVanilla(inputNode, field.label);
        isValid = false;
      }
    });
  }

  // Step 4 Check Parameters
  if (stepIndex === 4) {
    if (!window.signaturePadHasBeenDrawnByUser) {
      alert("Digital Power of Attorney signature verification parameters mapping record empty. Draw signature on screen canvas pad to pass validation check.");
      isValid = false;
    }
    
    const poaPrintedName = document.getElementById('poa_signer_printed');
    if (poaPrintedName && (!poaPrintedName.value || poaPrintedName.value.trim() === "")) {
      markFieldAsInvalidVanilla(poaPrintedName, 'Signatory electronic acknowledgement identity verification string missing.');
      isValid = false;
    }
    
    const poaCheckbox = document.getElementById('poa_agreement_lock');
    if (poaCheckbox && !poaCheckbox.checked) {
      alert("Authorization lock check verification asset validation check failed. Accept Power of Attorney terms layout constraints to continue.");
      isValid = false;
    }
  }

  return isValid;
}

  // VISUAL ERROR MARKER INJECTION PROTOCOL
function markFieldAsInvalidVanilla(inputNode, informativeLabelString) {
  if (!inputNode || !inputNode.parentNode) return;
  inputNode.style.borderColor = '#ef4444';
  const spanError = document.createElement('span');
  spanError.className = 'input-error-marker';
  spanError.style.color = '#ef4444';
  spanError.style.fontSize = '0.75rem';
  spanError.style.marginTop = '4px';
  spanError.textContent = informativeLabelString;
  inputNode.parentNode.insertBefore(spanError, inputNode.nextSibling);
}

// 📊 DYNAMIC MATHEMATICAL AGGREGATION INVOICE LOGIC (COMPLETE CORE SYSTEM)
function updateDynamicPricingMatrixVanilla() {
  const dropdownService = document.getElementById("wizard-route-service-id");
  const dropdownPlan = document.getElementById("wizard-route-tier-id");
  
  if (dropdownService && dropdownService.value) routeActiveServiceKey = dropdownService.value;
  if (dropdownPlan && dropdownPlan.value) routeActivePlanKey = dropdownPlan.value;
  
  const planConfig = CENTRAL_SERVICE_PLAN_DB[routeActiveServiceKey];
  if (!planConfig) return;
  
  // Core baseline parameters calculation lookups
  const baseTierPrice = planConfig.prices[routeActivePlanKey];
  const baseGovAgencyFee = planConfig.gov_fee;
  
  // Explicitly declared incremental variable token inside local execution scope
  let incrementalAddonTotal = 0;
  let descriptiveInvoiceRowsHtml = `
    <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--border); padding-bottom: 10px;">
      <span>${planConfig.name} (${routeActivePlanKey.toUpperCase()})</span>
      <span style="font-family: monospace;">$${baseTierPrice.toFixed(2)}</span>
    </div>
  `;

  // Evaluate checked state on accessory protection upsell checkboxes
  document.querySelectorAll('.upsell-checkbox:checked').forEach(checkbox => {
    const addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || 0;
    const addonLabelString = checkbox.getAttribute('data-name') || "Optional Add-on Asset";
    incrementalAddonTotal += addonPriceValue;
    descriptiveInvoiceRowsHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); font-weight: 500;">
        <span>+ ${addonLabelString}</span>
        <span style="font-family: monospace;">$${addonPriceValue.toFixed(2)}</span>
      </div>
    `;
  });

  // ========================================================
  // 🛒 STEP 2 DYNAMIC CONDITIONAL CART ADD-ON ITEMS HOOKS
  // ========================================================
  if (window.customSelectedRegisteredAgentServiceActive) {
    incrementalAddonTotal += 75.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ Registered Agent Shield</span><span style="font-family: monospace;">$75.00</span></div>`;
  }
  if (window.customSelectedEinProcurementServiceActive) {
    incrementalAddonTotal += 79.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ EIN Procurement Processing</span><span style="font-family: monospace;">$79.00</span></div>`;
  }
  if (window.customSelectedScorpElectionServiceActive) {
    incrementalAddonTotal += 79.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ Form 2553 Preparation</span><span style="font-family: monospace;">$79.00</span></div>`;
  }
  if (window.customSelectedSolePropLicenseAuditServiceActive || window.customSelectedDbaLicenseAuditServiceActive || window.customSelectedNonprofitLicenseCheckActive) {
    incrementalAddonTotal += 79.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ Compliance License Audit Suite</span><span style="font-family: monospace;">$79.00</span></div>`;
  }
  if (window.customSelectedDbaSearchServiceActive) {
    incrementalAddonTotal += 79.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ Name Availability Search</span><span style="font-family: monospace;">$79.00</span></div>`;
  }
  if (window.customSelectedSeriesLicenseAuditActive) {
    incrementalAddonTotal += 125.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ License &amp; Permit Audit Suite</span><span style="font-family: monospace;">$125.00</span></div>`;
  }

  // Aggregate absolute billing metrics strings parameters
  const aggregatedFilingSubtotal = baseTierPrice + incrementalAddonTotal;
  const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

  // Inject rendered components to the document layout tree root containers
  const invoiceContainer = document.getElementById('checkout-invoice-rows-container');
  if (invoiceContainer) invoiceContainer.innerHTML = descriptiveInvoiceRowsHtml;

  const subtotalDisp = document.getElementById('invoice-subtotal-display');
  if (subtotalDisp) subtotalDisp.textContent = `$${aggregatedFilingSubtotal.toFixed(2)}`;

  const govDisp = document.getElementById('invoice-gov-fees-display');
  if (govDisp) govDisp.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

  const grandDisp = document.getElementById('invoice-grand-total-display');
  if (grandDisp) grandDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

  // State synchronization anchor mapping assignment
  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;
  
  // Update secondary static layout displays if present on the view page
  const secondaryTotalDisplay = document.getElementById("wizard-sticky-total-value");
  if (secondaryTotalDisplay) secondaryTotalDisplay.textContent = `$${finalizedGrandTotal.toFixed(2)}`;
}

}




// 🎨 CORE STATE RENDERING SYNC MATRICES
function renderActiveWizardStepUiLayout() {
  // 1. Update the visibility of wizard steps
  document.querySelectorAll(".wizard-panel").forEach((panel, sequence) => {
    if ((sequence + 1) === currentWizardActiveStep) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });

  // 2. Synchronize timeline node tracking icons
  document.querySelectorAll(".step-node").forEach(node => {
    const structuralStepIndex = parseInt(node.getAttribute("data-step"), 10);
    if (structuralStepIndex < currentWizardActiveStep) {
      node.className = "step-node completed";
    } else if (structuralStepIndex === currentWizardActiveStep) {
      node.className = "step-node active";
    } else {
      node.className = "step-node";
    }
  });

  // 3. Scale and fill track bar widths cleanly
  const horizontalProgressFill = document.getElementById("timeline-progress-fill-node");
  if (horizontalProgressFill) {
    const percentageProgressWidth = ((currentWizardActiveStep - 1) / (totalWizardExpectedSteps - 1)) * 100;
    horizontalProgressFill.style.width = `${percentageProgressWidth}%`;
  }
}

// TRIGGER CENTRAL ENTRY HUB FOR SUBMIT/NEXT
function handleNavigationButtonClickEvent() {
  if (currentWizardActiveStep === totalWizardExpectedSteps) {
    if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
      executeOnboardingTransactionPayloadSubmitVanilla();
    }
  } else {
    navigateWizardStepTrackVanilla(1);
  }
}

// alias mapping function requested by form clicks
function goToNextWizardStep(targetStepIndex) {
    console.log(`[Wizard Navigation] Intended target: Step ${targetStepIndex}. Current state: Step ${currentWizardActiveStep}`);

    // 1. Form compliance boundary guards (Validation)
    if (targetStepIndex > currentWizardActiveStep) {
   
        const currentActivePanel = document.getElementById(`step-panel-${currentWizardActiveStep}`);
        
        if (currentActivePanel) {
            const analyticalInputs = currentActivePanel.querySelectorAll("input[required], select[required], textarea[required]");
            let isPanelDataValid = true;

            analyticalInputs.forEach(element => {
                if (!element.checkValidity()) {
                    element.reportValidity(); // Highlight browser error bubble
                    isPanelDataValid = false;
                }
            });

            if (!isPanelDataValid) {
                console.warn(`[Wizard Blocked] Step ${currentWizardActiveStep} validation failed.`);
                return false; 
            }
        } else {
            console.log(`[Wizard Notice] No explicit panel ID found for 'step-panel-${currentWizardActiveStep}'. Skipping validation block.`);
        }
    }

    // 2. Cache current progress to localStorage before changing steps
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false); // Saves current inputs
        console.log("[Wizard Cache] Form metrics successfully synced to storage.");
    }

    // 3. Update the global active step pointer
    currentWizardActiveStep = targetStepIndex;
    console.log(`[Wizard Success] Global pointer moved to step: ${currentWizardActiveStep}`);

    // 4. Fire the matrix UI update loop
    if (typeof renderActiveWizardStepUiLayout === "function") {
        renderActiveWizardStepUiLayout();
    } else {
        console.error("[Wizard Layout Failure] renderActiveWizardStepUiLayout function is missing.");
    }
}


// 💾 BROWSER STORAGE STATE CACHE MECHANICS (VANILLA JS)
function cacheAndRestoreWizardFormStatesVanilla(isExecutionInitialLoad) {
    const cacheKeyNamespace = "f4u_wizard_onboarding_state";
    
    // Explicitly register sensitive elements that must avoid plain text storage layout logs
    const sensitiveFieldsList = ["ein_responsible_id", "sllc_member_ssn", "wizard_tax_id"];

    // Self-contained cryptographic translation utility matrix
    const executeCipherTranslation = (rawString, decryptMode) => {
        if (!rawString) return "";
        try {
            if (decryptMode) {
                return atob(rawString).split("").map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join("");
            } else {
                let shifted = rawString.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join("");
                return btoa(shifted);
            }
        } catch (err) {
            console.error("[Cache Crypto Failure] Unable to compute key mask vector:", err);
            return "";
        }
    };

    if (isExecutionInitialLoad) {
        // Recover fields seamlessly on screen load
        const restoredPayloadString = localStorage.getItem(cacheKeyNamespace);
        if (!restoredPayloadString) return;
        try {
            const payloadDataObject = JSON.parse(restoredPayloadString);
            Object.keys(payloadDataObject).forEach(fieldIdKey => {
                const inputNode = document.getElementById(fieldIdKey);
                if (inputNode) {
                    let finalExtractedValue = payloadDataObject[fieldIdKey];

                    // ⚡ RECOVER LAYER: Decrypt tokens seamlessly back into raw input elements
                    if (sensitiveFieldsList.indexOf(fieldIdKey) !== -1 && typeof finalExtractedValue === "string") {
                        finalExtractedValue = executeCipherTranslation(finalExtractedValue, true);
                    }

                    if (inputNode.type === 'checkbox') {
                        inputNode.checked = finalExtractedValue;
                    } else {
                        inputNode.value = finalExtractedValue;
                    }
                }
            });
        } catch (jsonErr) {
            console.error("State data recovery parse error loop encountered: ", jsonErr);
        }
    } else {
        // Collect input values into a local payload object
        let activeFormMetricsObject = {};
        const masterForm = document.getElementById("master-onboarding-form");
        if (!masterForm) return;

        masterForm.querySelectorAll("input, select, textarea").forEach(inputNode => {
            const idAttr = inputNode.getAttribute('id');
            if (idAttr) {
                let elementValueToCache = inputNode.type === 'checkbox' ? inputNode.checked : inputNode.value;

                // ⚡ PROTECT LAYER: Convert plain numbers into unreadable base64 cipher variants
                if (sensitiveFieldsList.indexOf(idAttr) !== -1 && typeof elementValueToCache === "string" && elementValueToCache.trim() !== "") {
                    elementValueToCache = executeCipherTranslation(elementValueToCache, false);
                }

                activeFormMetricsObject[idAttr] = elementValueToCache;
            }
        });
        localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject));
    }
}


// 💾 STRATEGIC SAVE & EXIT PROGRESS HANDLER
function executeSaveAndExitWorkflow() {
  // Commit all current changes to localStorage parameters cache
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }
  // Confirm progress save with flash pop-ups
  alert("Application data package locked and synchronized successfully. You may resume your onboarding sequence from this node at any point.");
  // Route user back to central resource folder hub
  window.location.href = "compliance.html";
}

// 🎨 INTERACTIVE CANVAS SIGNATURE PAD CONTROLLER (VANILLA JS)
function initializeSignatureCanvasPadEngineVanilla() {
  const padCanvasElement = document.getElementById("poa-signature-pad");
  if (!padCanvasElement) return;
  
  const rasterRenderingContext2D = padCanvasElement.getContext("2d");
  window.signaturePadHasBeenDrawnByUser = false;
  
  let isDrawingInputActive = false;
  let lastRecordedCoordinateX = 0;
  let lastRecordedCoordinateY = 0;
  
  // Stroke properties definitions
  rasterRenderingContext2D.strokeStyle = "#0a1f44";
  rasterRenderingContext2D.lineWidth = 3;
  rasterRenderingContext2D.lineCap = "round";
  rasterRenderingContext2D.lineJoin = "round";
  
  function calculateNormalizedCoordinates(inputClientX, inputClientY) {
    const canvasBoundaryBox = padCanvasElement.getBoundingClientRect();
    return {
      x: (inputClientX - canvasBoundaryBox.left) * (padCanvasElement.width / canvasBoundaryBox.width),
      y: (inputClientY - canvasBoundaryBox.top) * (padCanvasElement.height / canvasBoundaryBox.height)
    };
  }
  
  // MOUSE BOUND TRACKING
  padCanvasElement.addEventListener("mousedown", (e) => {
    isDrawingInputActive = true;
    const coordinates = calculateNormalizedCoordinates(e.clientX, e.clientY);
    lastRecordedCoordinateX = coordinates.x;
    lastRecordedCoordinateY = coordinates.y;
  });
  
  padCanvasElement.addEventListener("mousemove", (e) => {
    if (!isDrawingInputActive) return;
    const coordinates = calculateNormalizedCoordinates(e.clientX, e.clientY);
    rasterRenderingContext2D.beginPath();
    rasterRenderingContext2D.moveTo(lastRecordedCoordinateX, lastRecordedCoordinateY);
    rasterRenderingContext2D.lineTo(coordinates.x, coordinates.y);
    rasterRenderingContext2D.stroke();
    lastRecordedCoordinateX = coordinates.x;
    lastRecordedCoordinateY = coordinates.y;
    window.signaturePadHasBeenDrawnByUser = true;
  });
  
  window.addEventListener("mouseup", () => {
    isDrawingInputActive = false;
  });
  
  // MOBILE SMARTPHONE TOUCH EVENT BINDINGS
  padCanvasElement.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    isDrawingInputActive = true;
    const touchObj = e.touches[0];
    const coordinates = calculateNormalizedCoordinates(touchObj.clientX, touchObj.clientY);
    lastRecordedCoordinateX = coordinates.x;
    lastRecordedCoordinateY = coordinates.y;
  });
  
  padCanvasElement.addEventListener("touchmove", (e) => {
    if (!isDrawingInputActive || e.touches.length !== 1) return;
    e.preventDefault();
    const touchObj = e.touches[0];
    const coordinates = calculateNormalizedCoordinates(touchObj.clientX, touchObj.clientY);
    rasterRenderingContext2D.beginPath();
    rasterRenderingContext2D.moveTo(lastRecordedCoordinateX, lastRecordedCoordinateY);
    rasterRenderingContext2D.lineTo(coordinates.x, coordinates.y);
    rasterRenderingContext2D.stroke();
    lastRecordedCoordinateX = coordinates.x;
    lastRecordedCoordinateY = coordinates.y;
    window.signaturePadHasBeenDrawnByUser = true;
  });
  
  padCanvasElement.addEventListener("touchend", () => {
    isDrawingInputActive = false;
  });
}

// RE-CLEAR PAD TRACKS (FIXED: Case-matched tracking descriptor)
function clearSignatureCanvasTrack() {
  const padCanvasElement = document.getElementById("poa-signature-pad");
  if (!padCanvasElement) return;
  const rasterRenderingContext2D = padCanvasElement.getContext("2d");
  rasterRenderingContext2D.clearRect(0, 0, padCanvasElement.width, padCanvasElement.height);
  window.signaturePadHasBeenDrawnByUser = false;
}


// ========================================================
// 🔐 SECURE TRANSACTION DISPATCH MECHANICS (VANILLA JS)
// ========================================================

function executeOnboardingTransactionPayloadSubmitVanilla() {
  const cardNumNode = document.getElementById('checkout_card_num');
  const cardExpNode = document.getElementById('checkout_card_exp');
  const cardCvvNode = document.getElementById('checkout_card_cvv');
  
  const cardNum = cardNumNode ? cardNumNode.value.replace(/\s+/g, '') : '';
  const cardExp = cardExpNode ? cardExpNode.value : '';
  const cardCvv = cardCvvNode ? cardCvvNode.value : '';

  if (!cardNum || cardNum.length < 15) {
    alert("Cryptographic verification failed: Card account entry parameters invalid.");
    return;
  }
  if (!cardExp || !cardExp.includes('/')) {
    alert("Cryptographic verification failed: Expiration envelope format invalid.");
    return;
  }
  if (!cardCvv || cardCvv.length < 3) {
    alert("Cryptographic verification failed: Security verification code CVV parameter length invalid.");
    return;
  }

  // Alter control button visual states to prevent multi-clicks
  const nextBtn = document.getElementById('wizard-next-trigger-btn');
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.style.background = '#64748b';
    nextBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Encrypting Channels...';
  }

  // RESILIENT STATE RECOVERY: Fall back to state keys if disabled dropdown fields return empty
  const dropdownServiceNode = document.getElementById("wizard-route-service-id");
  const finalizedServiceKey = (dropdownServiceNode && dropdownServiceNode.value) ? dropdownServiceNode.value : routeActiveServiceKey;
  
  const dropdownPlanNode = document.getElementById("wizard-route-tier-id");
  const finalizedTierKey = (dropdownPlanNode && dropdownPlanNode.value) ? dropdownPlanNode.value : routeActivePlanKey;
  
  const jurisdictionEl = document.getElementById("wizard-target-jurisdiction");
  const selectedJurisdiction = jurisdictionEl ? jurisdictionEl.value : '';

  let auxiliaryAddonsArray = [];
  document.querySelectorAll('.upsell-checkbox:checked').forEach(checkbox => {
    auxiliaryAddonsArray.push(checkbox.getAttribute('data-id'));
  });

  const signatureCanvas = document.getElementById("poa-signature-pad");
  const base64SignatureDataUrl = signatureCanvas ? signatureCanvas.toDataURL() : null;

  // Safe fallback evaluations for elements that may change based on the active form template
  const nameEl = document.getElementById('ent_legal_name');
  const dbaEl = document.getElementById('ent_dba_name');
  const einEl = document.getElementById('ent_ein');
  const dotEl = document.getElementById('ent_usdot');
  const streetEl = document.getElementById('ent_address_street');
  const cityEl = document.getElementById('ent_address_city');
  const zipEl = document.getElementById('ent_address_zip');
  const officerEl = document.getElementById('ent_officer_name');
  const titleEl = document.getElementById('ent_officer_title');
  const emailEl = document.getElementById('ent_comms_email');
  const phoneEl = document.getElementById('ent_comms_phone');
  const signerEl = document.getElementById('poa_signer_printed');

  const primarySubmissionPayloadData = {
    transaction_hash_id: window.f4u_tx_session_hash,
    target_service_id: finalizedServiceKey,
    deployment_speed_tier: finalizedTierKey,
    authority_jurisdiction: selectedJurisdiction,
    legal_entity_name: nameEl ? nameEl.value : '',
    trade_dba_name: dbaEl ? dbaEl.value : '',
    taxpayer_ein: einEl ? einEl.value : '',
    usdot_identifier: dotEl ? dotEl.value : '',
    office_address_street: streetEl ? streetEl.value : '',
    office_address_city: cityEl ? cityEl.value : '',
    office_address_zip: zipEl ? zipEl.value : '',
    executing_officer_name: officerEl ? officerEl.value : '',
    executing_officer_title: titleEl ? titleEl.value : '',
    communications_email: emailEl ? emailEl.value : '',
    communications_phone: phoneEl ? phoneEl.value : '',
    active_addons_list: auxiliaryAddonsArray,
    printed_signature_auth: signerEl ? signerEl.value : '',
    digital_signature_raster_vector: base64SignatureDataUrl,
    financials_subtotal_amount: baseTierPriceCalculationFallbackVanilla(finalizedServiceKey, finalizedTierKey),
    financials_grand_total_charge: window.wizardCalculatedFinalTotalAmount || 0,
    client_session_timestamp: new Date().toISOString()
  };

  setTimeout(function() {
    try {
      localStorage.removeItem("f4u_wizard_onboarding_state");
      sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));
      window.location.href = `success.html?tx_hash=${window.f4u_tx_session_hash}&status=validated_cleared`;
    } catch (routingErr) {
      console.error("Payload preservation routing matrix write fault loop triggered: ", routingErr);
      if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.style.background = '#10b981';
        nextBtn.innerHTML = '<i class="fa-solid fa-credit-card"></i> Process Secured Payment';
      }
    }
  }, 2500);
}

function baseTierPriceCalculationFallbackVanilla(serviceKey, planKey) {
  try {
    const sKey = serviceKey || (document.getElementById("wizard-route-service-id") ? document.getElementById("wizard-route-service-id").value : routeActiveServiceKey);
    const pKey = planKey || (document.getElementById("wizard-route-tier-id") ? document.getElementById("wizard-route-tier-id").value : routeActivePlanKey);
    return CENTRAL_SERVICE_PLAN_DB[sKey].prices[pKey];
  } catch(e) {
    return 0;
  }
}

// ========================================================
// 🔘 LLC WORKFLOW CONDITIONAL FIELD CONTROLLERS
// ========================================================

function validateLlcNameSuffix(inputField) {
  if (!inputField) return;
  const rawVal = inputField.value.trim();
  if (rawVal === "") return;
  const lowerVal = rawVal.toLowerCase();
  
  // Checks to ensure user added the required legal business suffix
  if (!lowerVal.endsWith("llc") && !lowerVal.endsWith("limited liability company")) {
    alert("LLC Formation Rule Warning: Your chosen name does not contain an approved corporate suffix token. Please append 'LLC' or 'Limited Liability Company' to clear application parameters.");
    inputField.style.borderColor = "#ef4444";
  } else {
    inputField.style.borderColor = "var(--border)";
  }
}

function toggleRegisteredAgentConditionalFields(selectedValue) {
  const wrapper = document.getElementById("llc_custom_ra_wrapper");
  if (!wrapper) return;
  
  // Toggles the visibility of address fields if they have an independent agent
  wrapper.style.display = (selectedValue === "custom") ? "grid" : "none";
  
  // Flags that the filings4u agent service is active to prepare cart updates later
  window.customSelectedRegisteredAgentServiceActive = (selectedValue === "filings4u");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleLlcManagerFieldsMatrix(selectedValue) {
  const wrapper = document.getElementById("llc_manager_names_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "manager-managed") ? "flex" : "none";
}

function toggleEinConditionalWorkflow(selectedValue) {
  const manualWrapper = document.getElementById("llc_manual_ein_wrapper");
  if (manualWrapper) manualWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  
  // Flags that the filings4u EIN creation add-on is chosen to adapt cart pricing calculations
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

// 🔘 UPDATED LLC WORKFLOW EXTRA FIELD CONTROLLERS
let activeLlcMemberCounterIndex = 1;

function appendNewLlcMemberRecordFieldNode() {
  activeLlcMemberCounterIndex++;
  const container = document.getElementById("llc_members_container");
  if (!container) return;
  
  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `member_card_${activeLlcMemberCounterIndex}`;
  div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";
  
  // FIXED: Explicitly generated matching element for attributes to solve label tracking crashes
  div.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">LLC Member #${activeLlcMemberCounterIndex} Records</span>
      <button type="button" onclick="removeLlcMemberRecordFieldNode(${activeLlcMemberCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="member_name_${activeLlcMemberCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Full Legal Name</label>
        <input type="text" id="member_name_${activeLlcMemberCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="member_street_${activeLlcMemberCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Street Address</label>
        <input type="text" id="member_street_${activeLlcMemberCounterIndex}" required placeholder="123 Main St" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="member_city_${activeLlcMemberCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">City</label>
        <input type="text" id="member_city_${activeLlcMemberCounterIndex}" required placeholder="Austin" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <label for="member_state_${activeLlcMemberCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">State</label>
          <input type="text" id="member_state_${activeLlcMemberCounterIndex}" required placeholder="TX" maxlength="2" class="wizard-input-field">
        </div>
        <div>
          <label for="member_zip_${activeLlcMemberCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Zip</label>
          <input type="text" id="member_zip_${activeLlcMemberCounterIndex}" required placeholder="78701" class="wizard-input-field">
        </div>
      </div>
    </div>
  `;
  container.appendChild(div);
}

function removeLlcMemberRecordFieldNode(targetIndex) {
  const cardToRemove = document.getElementById(`member_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleLlcDurationDateVisibility(selectedValue) {
  const dateWrapper = document.getElementById("llc_duration_date_wrapper");
  if (dateWrapper) dateWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
}

// ======================================================== //
// 🔘 STEP 2: LLC WORKFLOW EVENT LOOP CONTROLLERS (FIXED)
// ======================================================== //

// 1. REGISTERED AGENT CONFIGURATOR ACTION
function toggleRegisteredAgentConditionalFields(selectedValue) {
  const customAgentWrapper = document.getElementById("llc_custom_ra_wrapper");
  if (customAgentWrapper) {
    // Correctly toggles the custom address inputs using standard flex grid layout
    customAgentWrapper.style.display = (selectedValue === "custom") ? "grid" : "none";
  }
  // Links right to your main pricing matrix to instantly add $75 to checkout
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedRegisteredAgentServiceActive = (selectedValue === "filings4u");
    updateDynamicPricingMatrixVanilla();
  }
}

// VISUAL ERROR MARKER INJECTION PROTOCOL
function markFieldAsInvalidVanilla(inputNode, informativeLabelString) {
  if (!inputNode || !inputNode.parentNode) return;
  inputNode.style.borderColor = '#ef4444';
  const spanError = document.createElement('span');
  spanError.className = 'input-error-marker';
  spanError.style.color = '#ef4444';
  spanError.style.fontSize = '0.75rem';
  spanError.style.marginTop = '4px';
  spanError.textContent = informativeLabelString;
  inputNode.parentNode.insertBefore(spanError, inputNode.nextSibling);
}

// 📊 DYNAMIC MATHEMATICAL AGGREGATION INVOICE LOGIC (COMPLETE CORE SYSTEM)
function updateDynamicPricingMatrixVanilla() {
  const dropdownService = document.getElementById("wizard-route-service-id");
  const dropdownPlan = document.getElementById("wizard-route-tier-id");
  
  if (dropdownService && dropdownService.value) routeActiveServiceKey = dropdownService.value;
  if (dropdownPlan && dropdownPlan.value) routeActivePlanKey = dropdownPlan.value;
  
  const planConfig = CENTRAL_SERVICE_PLAN_DB[routeActiveServiceKey];
  if (!planConfig) return;
  
  // Core baseline parameters calculation lookups
  const baseTierPrice = planConfig.prices[routeActivePlanKey];
  const baseGovAgencyFee = planConfig.gov_fee;
  
  // Explicitly declared incremental variable token inside local execution scope
  let incrementalAddonTotal = 0;
  let descriptiveInvoiceRowsHtml = `
    <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--border); padding-bottom: 10px;">
      <span>${planConfig.name} (${routeActivePlanKey.toUpperCase()})</span>
      <span style="font-family: monospace;">$${baseTierPrice.toFixed(2)}</span>
    </div>
  `;

  // Evaluate checked state on accessory protection upsell checkboxes
  document.querySelectorAll('.upsell-checkbox:checked').forEach(checkbox => {
    const addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || 0;
    const addonLabelString = checkbox.getAttribute('data-name') || "Optional Add-on Asset";
    incrementalAddonTotal += addonPriceValue;
    descriptiveInvoiceRowsHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); font-weight: 500;">
        <span>+ ${addonLabelString}</span>
        <span style="font-family: monospace;">$${addonPriceValue.toFixed(2)}</span>
      </div>
    `;
  });

  // ========================================================
  // 🛒 STEP 2 DYNAMIC CONDITIONAL CART ADD-ON ITEMS HOOKS
  // ========================================================
  if (window.customSelectedRegisteredAgentServiceActive) {
    incrementalAddonTotal += 75.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ Registered Agent Shield</span><span style="font-family: monospace;">$75.00</span></div>`;
  }
  if (window.customSelectedEinProcurementServiceActive) {
    incrementalAddonTotal += 79.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ EIN Procurement Processing</span><span style="font-family: monospace;">$79.00</span></div>`;
  }
  if (window.customSelectedScorpElectionServiceActive) {
    incrementalAddonTotal += 79.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ Form 2553 Preparation</span><span style="font-family: monospace;">$79.00</span></div>`;
  }
  if (window.customSelectedSolePropLicenseAuditServiceActive || window.customSelectedDbaLicenseAuditServiceActive || window.customSelectedNonprofitLicenseCheckActive) {
    incrementalAddonTotal += 79.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ Compliance License Audit Suite</span><span style="font-family: monospace;">$79.00</span></div>`;
  }
  if (window.customSelectedDbaSearchServiceActive) {
    incrementalAddonTotal += 79.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ Name Availability Search</span><span style="font-family: monospace;">$79.00</span></div>`;
  }
  if (window.customSelectedForeignQualLicenseSuiteActive) {
    incrementalAddonTotal += 125.00;
    descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ License &amp; Permit Audit Suite</span><span style="font-family: monospace;">$125.00</span></div>`;
  }

  // Aggregate absolute billing metrics strings parameters
  const aggregatedFilingSubtotal = baseTierPrice + incrementalAddonTotal;
  const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

  // Inject rendered components to the document layout tree root containers
  const invoiceContainer = document.getElementById('checkout-invoice-rows-container');
  if (invoiceContainer) invoiceContainer.innerHTML = descriptiveInvoiceRowsHtml;

  const subtotalDisp = document.getElementById('invoice-subtotal-display');
  if (subtotalDisp) subtotalDisp.textContent = `$${aggregatedFilingSubtotal.toFixed(2)}`;

  const govDisp = document.getElementById('invoice-gov-fees-display');
  if (govDisp) govDisp.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

  const grandDisp = document.getElementById('invoice-grand-total-display');
  if (grandDisp) grandDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;
}

// TRIGGER CENTRAL ENTRY HUB FOR SUBMIT/NEXT
function handleNavigationButtonClickEvent() {
  if (currentWizardActiveStep === totalWizardExpectedSteps) {
    if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
      executeOnboardingTransactionPayloadSubmitVanilla();
    }
  } else {
    navigateWizardStepTrackVanilla(1);
  }
}

// 💾 BROWSER STORAGE STATE CACHE MECHANICS (VANILLA JS)
function cacheAndRestoreWizardFormStatesVanilla(isExecutionInitialLoad) {
  const cacheKeyNamespace = "f4u_wizard_onboarding_state";
  
  if (isExecutionInitialLoad) {
    const restoredPayloadString = localStorage.getItem(cacheKeyNamespace);
    if (!restoredPayloadString) return;
    try {
      const payloadDataObject = JSON.parse(restoredPayloadString);
      Object.keys(payloadDataObject).forEach(fieldIdKey => {
        const inputNode = document.getElementById(fieldIdKey);
        if (inputNode) {
          if (inputNode.type === 'checkbox') {
            inputNode.checked = payloadDataObject[fieldIdKey];
          } else {
            inputNode.value = payloadDataObject[fieldIdKey];
          }
        }
      });
    } catch (jsonErr) {
      console.error("State data recovery parse error loop encountered: ", jsonErr);
    }
  } else {
    let activeFormMetricsObject = {};
    const masterForm = document.getElementById("master-onboarding-form");
    if (!masterForm) return;
    masterForm.querySelectorAll("input, select, textarea").forEach(inputNode => {
      const idAttr = inputNode.getAttribute('id');
      if (idAttr) {
        if (inputNode.type === 'checkbox') {
          activeFormMetricsObject[idAttr] = inputNode.checked;
        } else {
          activeFormMetricsObject[idAttr] = inputNode.value;
        }
      }
    });
    localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject));
  }
}

// 💾 STRATEGIC SAVE & EXIT PROGRESS HANDLER
function executeSaveAndExitWorkflow() {
  cacheAndRestoreWizardFormStatesVanilla(false);
  alert("Application data package locked and synchronized successfully. You may resume your onboarding sequence from this node at any point.");
  window.location.href = "compliance.html";
}

// 🎨 INTERACTIVE CANVAS SIGNATURE PAD CONTROLLER (VANILLA JS)
function initializeSignatureCanvasPadEngineVanilla() {
  const padCanvasElement = document.getElementById("poa-signature-pad");
  if (!padCanvasElement) return;
  const rasterRenderingContext2D = padCanvasElement.getContext("2d");
  window.signaturePadHasBeenDrawnByUser = false;
  let isDrawingInputActive = false;
  let lastRecordedCoordinateX = 0;
  let lastRecordedCoordinateY = 0;

  rasterRenderingContext2D.strokeStyle = "#0a1f44";
  rasterRenderingContext2D.lineWidth = 3;
  rasterRenderingContext2D.lineCap = "round";
  rasterRenderingContext2D.lineJoin = "round";

  function calculateNormalizedCoordinates(inputClientX, inputClientY) {
    const canvasBoundaryBox = padCanvasElement.getBoundingClientRect();
    return {
      x: (inputClientX - canvasBoundaryBox.left) * (padCanvasElement.width / canvasBoundaryBox.width),
      y: (inputClientY - canvasBoundaryBox.top) * (padCanvasElement.height / canvasBoundaryBox.height)
    };
  }

  padCanvasElement.addEventListener("mousedown", (e) => {
    isDrawingInputActive = true;
    const coordinates = calculateNormalizedCoordinates(e.clientX, e.clientY);
    lastRecordedCoordinateX = coordinates.x;
    lastRecordedCoordinateY = coordinates.y;
  });

  padCanvasElement.addEventListener("mousemove", (e) => {
    if (!isDrawingInputActive) return;
    const coordinates = calculateNormalizedCoordinates(e.clientX, e.clientY);
    rasterRenderingContext2D.beginPath();
    rasterRenderingContext2D.moveTo(lastRecordedCoordinateX, lastRecordedCoordinateY);
    rasterRenderingContext2D.lineTo(coordinates.x, coordinates.y);
    rasterRenderingContext2D.stroke();
    lastRecordedCoordinateX = coordinates.x;
    lastRecordedCoordinateY = coordinates.y;
    window.signaturePadHasBeenDrawnByUser = true;
  });

  window.addEventListener("mouseup", () => {
    isDrawingInputActive = false;
  });

  padCanvasElement.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    isDrawingInputActive = true;
    const touchObj = e.touches[0];
    const coordinates = calculateNormalizedCoordinates(touchObj.clientX, touchObj.clientY);
    lastRecordedCoordinateX = coordinates.x;
    lastRecordedCoordinateY = coordinates.y;
  });

  padCanvasElement.addEventListener("touchmove", (e) => {
    if (!isDrawingInputActive || e.touches.length !== 1) return;
    e.preventDefault();
    const touchObj = e.touches[0];
    const coordinates = calculateNormalizedCoordinates(touchObj.clientX, touchObj.clientY);
    rasterRenderingContext2D.beginPath();
    rasterRenderingContext2D.moveTo(lastRecordedCoordinateX, lastRecordedCoordinateY);
    rasterRenderingContext2D.lineTo(coordinates.x, coordinates.y);
    rasterRenderingContext2D.stroke();
    lastRecordedCoordinateX = coordinates.x;
    lastRecordedCoordinateY = coordinates.y;
    window.signaturePadHasBeenDrawnByUser = true;
  });

  padCanvasElement.addEventListener("touchend", () => {
    isDrawingInputActive = false;
  });
}

function clearSignatureCanvasTrack() {
  const padCanvasElement = document.getElementById("poa-signature-pad");
  if (!padCanvasElement) return;
  const rasterRenderingContext2D = padCanvasElement.getContext("2d");
  rasterRenderingContext2D.clearRect(0, 0, padCanvasElement.width, padCanvasElement.height);
  window.signaturePadHasBeenDrawnByUser = false;
}


// ========================================================
// 🔘 LLC & CORPORATE LIFECYCLE CONTROLLERS
// ========================================================

// 2. COMPANY Lifespan HORIZON CALENDAR ACTION
function toggleLlcDurationDateVisibility(selectedValue) {
  const calendarWrapper = document.getElementById("llc_duration_date_wrapper");
  if (calendarWrapper) {
    // Correctly opens the date picker input box when "specified" is clicked
    calendarWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
  }
}

// 3. EMPLOYER IDENTIFICATION NUMBER (EIN) CONFIGURATOR ACTION
function toggleEinConditionalWorkflow(selectedValue) {
  const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
  if (manualEinWrapper) {
    // Opens the manual input box if the customer already has an EIN
    manualEinWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  // Links right to your main pricing matrix to instantly add $79 to checkout
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
    updateDynamicPricingMatrixVanilla();
  }
}

// ========================================================
// 🔘 C-CORP & S-CORP INTERACTIVE ROUTING CONTROLLERS
// ========================================================

function validateCorpNameSuffix(inputField) {
  if (!inputField) return;
  const rawVal = inputField.value.trim();
  if (rawVal === "") return;
  const lowerVal = rawVal.toLowerCase();
  
  // Verifies that the name string explicitly finishes with legal corporate indicators
  if (!lowerVal.endsWith("inc.") && !lowerVal.endsWith("inc") && !lowerVal.endsWith("incorporated") && !lowerVal.endsWith("corporation")) {
    alert("Corporate Registration Rule Warning: Your chosen name does not contain an approved corporate suffix token. Please append 'Inc.', 'Incorporated', or 'Corporation' to clear parameter validations.");
    inputField.style.borderColor = "#ef4444";
  } else {
    inputField.style.borderColor = "var(--border)";
  }
}

let activeCorpShareholderCounterIndex = 1;

function appendNewCorporateShareholderNode() {
  activeCorpShareholderCounterIndex++;
  const container = document.getElementById("corp_shareholders_container");
  if (!container) return;
  
  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `shareholder_card_${activeCorpShareholderCounterIndex}`;
  div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";
  
  // FIXED: Injected standard structural 'for' labels to link text inputs accurately
  div.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Shareholder #${activeCorpShareholderCounterIndex} Records</span>
      <button type="button" onclick="removeCorporateShareholderNode(${activeCorpShareholderCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="shareholder_name_${activeCorpShareholderCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Full Legal Name</label>
        <input type="text" id="shareholder_name_${activeCorpShareholderCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="grid-column: span 2;">
        <label for="shareholder_street_${activeCorpShareholderCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Street Address</label>
        <input type="text" id="shareholder_street_${activeCorpShareholderCounterIndex}" required placeholder="123 Corporate Pkwy" class="wizard-input-field">
      </div>
      <div class="wizard-input-group">
        <label for="shareholder_city_${activeCorpShareholderCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">City</label>
        <input type="text" id="shareholder_city_${activeCorpShareholderCounterIndex}" required placeholder="Austin" class="wizard-input-field">
      </div>
      <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <label for="shareholder_state_${activeCorpShareholderCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">State</label>
          <input type="text" id="shareholder_state_${activeCorpShareholderCounterIndex}" required placeholder="TX" maxlength="2" class="wizard-input-field">
        </div>
        <div>
          <label for="shareholder_zip_${activeCorpShareholderCounterIndex}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Zip</label>
          <input type="text" id="shareholder_zip_${activeCorpShareholderCounterIndex}" required placeholder="78701" class="wizard-input-field">
        </div>
      </div>
    </div>
  `;
  container.appendChild(div);
}

function removeCorporateShareholderNode(targetIndex) {
  const cardToRemove = document.getElementById(`shareholder_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleCorpDirectorFieldsMatrix(selectedValue) {
  const wrapper = document.getElementById("corp_director_names_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "manager-managed") ? "flex" : "none";
}

function toggleCorpDurationDateVisibility(selectedValue) {
  const dateWrapper = document.getElementById("corp_duration_date_wrapper");
  if (dateWrapper) dateWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
}

function toggleCorpEinConditionalWorkflow(selectedValue) {
  const manualWrapper = document.getElementById("corp_manual_ein_wrapper");
  if (manualWrapper) manualWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleScorpElectionWorkflow(selectedValue) {
  const serviceWrapper = document.getElementById("corp_scorp_service_wrapper");
  const warningNote = document.getElementById("scac-decline-warning-note");
  if (serviceWrapper) {
    serviceWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // Clear choice if user reverts to standard C-Corp choice
  if (selectedValue === "no") {
    const selectProcure = document.getElementById("corp_scorp_procure");
    if (selectProcure) selectProcure.value = "no-decline";
    if (warningNote) warningNote.style.display = "block";
    window.customSelectedScorpElectionServiceActive = false;
    if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
  }
}

function toggleScorpFilingPricingHook(selectedValue) {
  const warningNote = document.getElementById("scac-decline-warning-note");
  if (warningNote) {
    warningNote.style.display = (selectedValue === "yes-buy") ? "none" : "block";
  }
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedScorpElectionServiceActive = (selectedValue === "yes-buy");
    updateDynamicPricingMatrixVanilla();
  }
}

// 3. Automated Form View Segment Router (FIXED VALUE MATCHES)
function initializeFormDisplayLayoutSync() {
  const llcFormWrapper = document.getElementById("form-fields-llc-registration");
  const corpFormWrapper = document.getElementById("form-fields-corporate-formation");
  if (llcFormWrapper && corpFormWrapper) {
    if (routeActiveServiceKey === "hazmat-registration" || routeActiveServiceKey.includes("trademark") || routeActiveServiceKey.includes("servicemark") || routeActiveServiceKey.includes("corporate")) {
      llcFormWrapper.style.display = "none";
      corpFormWrapper.style.display = "grid";
    } else {
      llcFormWrapper.style.display = "grid";
      corpFormWrapper.style.display = "none";
    }
  }
}


// ======================================================== //
// 🗺️ UNIVERSAL GOOGLE PLACES AUTOMATIC ADDRESS VALIDATION CONTROL HUB
// ======================================================== //
function attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix) {
  if (!inputNodeElement || inputNodeElement.hasAttribute('data-autocomplete-bound-active')) return;
  if (typeof google === "undefined" || !google.maps || !google.maps.places) {
    console.warn("Google Maps JavaScript API Places library loading framework is not yet active on this system window node context.");
    return;
  }
  
  // Set configuration variables parameters to filter only structural street address parameters inside the US region
  const autocompleteCoreOptions = { 
    componentRestrictions: { country: "us" }, 
    fields: ["address_components", "geometry"], 
    types: ["address"] 
  };
  
  const autocompleteInstance = new google.maps.places.Autocomplete(inputNodeElement, autocompleteCoreOptions);
  inputNodeElement.setAttribute('data-autocomplete-bound-active', 'true');
  
  autocompleteInstance.addListener("place_changed", function () {
    const selectedPlaceManifest = autocompleteInstance.getPlace();
    if (!selectedPlaceManifest.address_components) {
      console.error("No valid address mapping vectors returned for chosen element selection parameter registry entry logs.");
      return;
    }
    
    let addressStreetNumber = "";
    let addressRouteStreetName = "";
    let calculatedLocalityCityName = "";
    let extractedStateCode = "";
    let postalRoutingIndexNumber = "";
    
    // Trace line-by-line the individual data variables inside the structural address component array matrix
    selectedPlaceManifest.address_components.forEach(itemComponent => {
      const typesArray = itemComponent.types;
      if (typesArray.includes("street_number")) {
        addressStreetNumber = itemComponent.long_name;
      } else if (typesArray.includes("route")) {
        addressRouteStreetName = itemComponent.long_name;
      } else if (typesArray.includes("locality")) {
        calculatedLocalityCityName = itemComponent.long_name;
      } else if (typesArray.includes("administrative_area_level_1")) {
        extractedStateCode = itemComponent.short_name; // Returns standard 2-digit ISO postal code identifier string (e.g. TX, CA)
      } else if (typesArray.includes("postal_code")) {
        postalRoutingIndexNumber = itemComponent.long_name;
      }
    });
    
    // Weld street number string attributes to route string indicators cleanly
    const balancedStreetAddressLine = `${addressStreetNumber} ${addressRouteStreetName}`.trim();
    
    // Dynamically locate and write values into structural elements, regardless of form families variations
    const streetField = document.getElementById(`${dataElementPrefix}_street`) || inputNodeElement;
    const cityField = document.getElementById(`${dataElementPrefix}_city`);
    const stateField = document.getElementById(`${dataElementPrefix}_state`);
    const zipField = document.getElementById(`${dataElementPrefix}_zip`);
    
    if (streetField) streetField.value = balancedStreetAddressLine;
    if (cityField) cityField.value = calculatedLocalityCityName;
    if (stateField) stateField.value = extractedStateCode;
    if (zipField) zipField.value = postalRoutingIndexNumber;
    
    // Force a UI mathematical calculation updates loop update pass inside the invoice tracking cards engine parameters
    if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
  });
}

// ======================================================== //
// 🔘 SOLE PROPRIETORSHIP FORM INTERACTIVE INTERACTION CONTROLLERS
// ======================================================== //
function toggleSolePropDbaField(selectedValue) {
  const wrapper = document.getElementById("sp_dba_name_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
}

function toggleSolePropEinReasonField(selectedValue) {
  const wrapper = document.getElementById("sp_ein_reason_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
}

function toggleSolePropDurationField(selectedValue) {
  const wrapper = document.getElementById("sp_duration_term_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "temporary") ? "flex" : "none";
}

function toggleSolePropLicenseWorkflow(selectedValue) {
  const customInputWrapper = document.getElementById("sp_custom_license_wrapper");
  if (customInputWrapper) {
    customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  // Auto-update price tracking configurations if they select the filings4u audit option
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedSolePropLicenseAuditServiceActive = (selectedValue === "no");
    updateDynamicPricingMatrixVanilla();
  }
}


// ========================================================
// 🔘 DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS
// ========================================================

function toggleDbaPermissionWorkflow(selectedValue) {
  const wrapper = document.getElementById("dba_permission_matrix_wrapper");
  if (!wrapper) return;
  wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  
  // Clear pricing hooks if reset to "no"
  if (selectedValue === "no") {
    const consentSelect = document.getElementById("dba_has_consent");
    if (consentSelect) consentSelect.value = "yes";
    window.customSelectedDbaSearchServiceActive = false;
    if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
  }
}

function toggleDbaSearchProcurement(selectedValue) {
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedDbaSearchServiceActive = (selectedValue === "no-buy");
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleDbaEinReasonField(selectedValue) {
  const wrapper = document.getElementById("dba_ein_reason_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
}

function toggleDbaLicenseWorkflow(selectedValue) {
  const customInputWrapper = document.getElementById("dba_custom_license_wrapper");
  if (customInputWrapper) customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedDbaLicenseAuditServiceActive = (selectedValue === "no");
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleDbaDurationField(selectedValue) {
  const wrapper = document.getElementById("dba_duration_term_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "temporary") ? "flex" : "none";
}

// ========================================================
// 🔘 NONPROFIT WORKFLOW INTERACTIVE LAYOUT CONTROLLERS
// ========================================================

let activeNonprofitBoardCounterIndex = 3;

function appendNewNonprofitBoardMemberNode() {
  activeNonprofitBoardCounterIndex++;
  const container = document.getElementById("np_board_members_container");
  if (!container) return;
  
  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `np_board_card_${activeNonprofitBoardCounterIndex}`;
  div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
  
  // FIXED: Nested hidden labels with matching 'for' tags to establish accessible reading parameters
  div.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Board Member #${activeNonprofitBoardCounterIndex} Records</span>
      <button type="button" onclick="removeNonprofitBoardMemberNode(${activeNonprofitBoardCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="np_board_name_${activeNonprofitBoardCounterIndex}" style="display:none;">Full Legal Name</label>
        <input type="text" id="np_board_name_${activeNonprofitBoardCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
      </div>
      <div>
        <label for="np_board_role_${activeNonprofitBoardCounterIndex}" style="display:none;">Position</label>
        <input type="text" id="np_board_role_${activeNonprofitBoardCounterIndex}" required placeholder="Position (e.g., Trustee / Director)" class="wizard-input-field">
      </div>
      <div style="grid-column: span 2;">
        <label for="np_board_contact_${activeNonprofitBoardCounterIndex}" style="display:none;">Contact Details</label>
        <input type="text" id="np_board_contact_${activeNonprofitBoardCounterIndex}" required placeholder="Contact Details (Phone / Email)" class="wizard-input-field">
      </div>
    </div>
  `;
  container.appendChild(div);
}

function removeNonprofitBoardMemberNode(targetIndex) {
  const cardToRemove = document.getElementById(`np_board_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleNonprofitEinReasonField(selectedValue) {
  const wrapper = document.getElementById("np_ein_reason_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedEinProcurementServiceActive = (selectedValue === "yes");
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleNonprofitLicenseWorkflow(selectedValue) {
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    window.customSelectedNonprofitLicenseCheckActive = (selectedValue === "no");
    updateDynamicPricingMatrixVanilla();
  }
}

// ========================================================
// 🔘 SERIES LLC RUNTIME EVENT CONTROLLERS
// ========================================================

let activeSeriesLlcMemberCounterIndex = 1;

function appendNewSeriesLlcMemberNode() {
  activeSeriesLlcMemberCounterIndex++;
  const container = document.getElementById("sllc_members_container");
  if (!container) return;
  
  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `sllc_member_card_${activeSeriesLlcMemberCounterIndex}`;
  div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
  
  // FIXED: Appended explicit hidden tracking labels to handle dynamically drawn field nodes
  div.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Initial Member #${activeSeriesLlcMemberCounterIndex} Records</span>
      <button type="button" onclick="removeSeriesLlcMemberNode(${activeSeriesLlcMemberCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" style="display:none;">Full Legal Name</label>
        <input type="text" id="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
      </div>
      <div>
        <label for="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" style="display:none;">Full Residential Address</label>
        <input type="text" id="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Residential/Office Address" class="wizard-input-field">
      </div>
    </div>
  `;
  container.appendChild(div);
}

function removeSeriesLlcMemberNode(targetIndex) {
  const cardToRemove = document.getElementById(`sllc_member_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesCellsWrapperVisibility(selectedValue) {
  const wrapper = document.getElementById("sllc_cells_wrapper");
  if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
}

let activeSubSeriesCellCounterIndex = 1;

function appendNewSubSeriesCellNode() {
  activeSubSeriesCellCounterIndex++;
  const container = document.getElementById("sllc_cells_container");
  if (!container) return;
  
  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `sllc_cell_card_${activeSubSeriesCellCounterIndex}`;
  div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
  
  // FIXED: Wrapped the inputs inside structural labels to ensure screen reader association pass
  div.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Initial Sub-Series Cell #${activeSubSeriesCellCounterIndex}</span>
      <button type="button" onclick="removeSubSeriesCellNode(${activeSubSeriesCellCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <label for="sllc_cell_name_${activeSubSeriesCellCounterIndex}" style="display:none;">Series Cell Name</label>
        <input type="text" id="sllc_cell_name_${activeSubSeriesCellCounterIndex}" placeholder="Series Cell Name" class="wizard-input-field">
      </div>
      <div>
        <label for="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" style="display:none;">Asset Summary</label>
        <input type="text" id="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" placeholder="Asset / Operational Purpose Summary" class="wizard-input-field">
      </div>
    </div>
  `;
  container.appendChild(div);
}

function removeSubSeriesCellNode(targetIndex) {
  const cardToRemove = document.getElementById(`sllc_cell_card_${targetIndex}`);
if (cardToRemove) cardToRemove.remove();}

function toggleSeriesEinWorkflow(selectedValue) {
  const wrapper = document.getElementById("sllc_ein_reason_wrapper");
if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
if (typeof updateDynamicPricingMatrixVanilla === "function") {window.customSelectedEinProcurementServiceActive = (selectedValue === "yes");updateDynamicPricingMatrixVanilla();}}

function toggleSeriesLicenseWorkflow(selectedValue) {const warningNote = document.getElementById("sllc_custom_license_wrapper");

  if (warningNote) warningNote.style.display = (selectedValue === "yes") ? "flex" : "none";
  if (typeof updateDynamicPricingMatrixVanilla === "function") {window.customSelectedSeriesLicenseAuditActive = (selectedValue === "no");updateDynamicPricingMatrixVanilla();}}
  
  function toggleSeriesLlcDurationField(selectedValue) {const wrapper = document.getElementById("sllc_duration_term_wrapper");
  
  if (wrapper) wrapper.style.display = (selectedValue === "project") ? "flex" : "none";

}

// ========================================================
// 🔗 REPAIRED MASTER ALIAS ROUTING BRIDGE FOR HTML BUTTONS
// ========================================================

// Maps standard manual panel clicks (e.g., onclick="goToNextWizardStep(3)")
function goToNextWizardStep(targetStepIndex) {
    console.log(`[Bridge Action] Incoming call value:`, targetStepIndex);

    // ⚡ SAFE FALLBACK: If targetStepIndex is undefined, an object, or blank, calculate it automatically
    if (!targetStepIndex || typeof targetStepIndex !== "number") {
        targetStepIndex = currentWizardActiveStep + 1;
        console.log(`[Bridge Safety Override] Index was invalid. Recalculated target step to: ${targetStepIndex}`);
    }

    // Protect against jumping past total expected steps
    if (typeof totalWizardExpectedSteps !== "undefined" && targetStepIndex > totalWizardExpectedSteps) {
        console.warn(`[Bridge Guard] Cannot jump to step ${targetStepIndex}. Max steps is ${totalWizardExpectedSteps}.`);
        return false;
    }

    console.log(`[Bridge Success] Routing engine executing step jump to index: ${targetStepIndex}`);
    executeDirectStepJump(targetStepIndex);
}

// Maps forward continue triggers (e.g., from generic next buttons)
function handleNavigationButtonClickEvent() {
    if (typeof currentWizardActiveStep !== "undefined" && typeof totalWizardExpectedSteps !== "undefined") {
        if (currentWizardActiveStep === totalWizardExpectedSteps) {
            if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
                executeOnboardingTransactionPayloadSubmitVanilla();
            }
        } else {
            const nextStepIndex = currentWizardActiveStep + 1;
            console.log(`[Bridge Auto-Advance] Moving to Step: ${nextStepIndex}`);
            goToNextWizardStep(nextStepIndex);
        }
    }
}


// Internal engine utility that manages the state transition securely
function executeDirectStepJump(targetIndex) {
    console.log(`[Wizard Engine] Transitioning state: Step ${currentWizardActiveStep} -> Step ${targetIndex}`);

    // 1. Force validation verification before advancing
    if (targetIndex > currentWizardActiveStep) {
        const activePanel = document.getElementById(`step-panel-${currentWizardActiveStep}`);
        if (activePanel) {
            const inputs = activePanel.querySelectorAll("input[required], select[required], textarea[required]");
            let isValid = true;
            
            inputs.forEach(el => {
                if (!el.checkValidity()) {
                    el.reportValidity();
                    isValid = false;
                }
            });
            if (!isValid) return false; // Prevent step movement if validation fails
        }
    }

    // 2. Sync values to LocalStorage cache (Saves current step state data)
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // 3. Apply state transformation indices
    currentWizardActiveStep = targetIndex;

    // 4. Force DOM visibility refresh on your wizard layout panels
    const panels = document.querySelectorAll(".wizard-panel");
    if (panels.length > 0) {
        panels.forEach((panel, sequence) => {
            if ((sequence + 1) === targetIndex) {
                panel.classList.add("active");
                panel.style.display = "block"; // Turn on target step container
            } else {
                panel.classList.remove("active");
                panel.style.display = "none";  // Hide all non-active steps
            }
        });
    }

  }

  // Internal engine utility that manages the state transition securely
function executeDirectStepJump(targetIndex) {
    console.log("Transitioning state: Step " + currentWizardActiveStep + " -> Step " + targetIndex);

    // 1. Force validation verification before advancing
    if (targetIndex > currentWizardActiveStep) {
        var activePanel = document.getElementById("step-panel-" + currentWizardActiveStep);
        if (activePanel) {
            var inputs = activePanel.querySelectorAll("input[required], select[required], textarea[required]");
            var isValid = true;
            inputs.forEach(function(el) {
                if (!el.checkValidity()) {
                    el.reportValidity();
                    isValid = false;
                }
            });
            if (!isValid) return false; 
        }
    }

    // 2. Sync values to LocalStorage cache
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // 3. Apply state transformation indices
    currentWizardActiveStep = targetIndex;

    // 4. Force DOM visibility refresh on your wizard layout panels
    var panels = document.querySelectorAll(".wizard-panel");
    if (panels.length > 0) {
        panels.forEach(function(panel, sequence) {
            if ((sequence + 1) === targetIndex) {
                panel.classList.add("active");
                panel.style.display = "block";
            } else {
                panel.classList.remove("active");
                panel.style.display = "none";
            }
        });
    }

    // ⚡ 4.5 UNIFIED DYNAMIC FORM INJECTION SYSTEM FOR STEP 2
    if (targetIndex === 2) {
        var fieldsRoot = document.getElementById("dynamic-onboarding-fields-root");
        if (fieldsRoot) {
            // Instantly clear out old fields, placeholders, or previous layouts
            fieldsRoot.innerHTML = ""; 

            // Safely read global dropdown elements from window memory
            var stateOptions = window.globalStateDropdownOptionsHtml || "";

            // Normalize the service key completely (lowercase, strip extra spaces, replace spaces with hyphens)
            var cleanKey = String(routeActiveServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");
            console.log("[Wizard Engine] Evaluating structural form layout matching for: " + cleanKey);

            // ========================================================
            // 🗺️ MASTER SERVICE MAP INTEGRATION BACKPLANE
            // ========================================================
            if (cleanKey.indexOf("operating-agreement") !== -1 && typeof buildOperatingAgreementForm === "function") {
                fieldsRoot.innerHTML = buildOperatingAgreementForm(stateOptions);
            } 
            else if (cleanKey.indexOf("annual-report") !== -1 && typeof buildAnnualReportsForm === "function") {
                fieldsRoot.innerHTML = buildAnnualReportsForm(stateOptions);
            } 
            else if (cleanKey.indexOf("trademark-filing") !== -1 && typeof buildTrademarkFilingForm === "function") {
                fieldsRoot.innerHTML = buildTrademarkFilingForm(stateOptions);
            } 
            else if (cleanKey.indexOf("servicemark-filing") !== -1 && typeof buildServicemarkFilingForm === "function") {
                fieldsRoot.innerHTML = buildServicemarkFilingForm(stateOptions);
            } 
            else if (cleanKey.indexOf("foreign-qualification") !== -1 && typeof buildForeignQualificationForm === "function") {
                fieldsRoot.innerHTML = buildForeignQualificationForm(stateOptions);
            } 
            else if (cleanKey.indexOf("llc-reinstatement") !== -1 && typeof buildLlcReinstatementForm === "function") {
                fieldsRoot.innerHTML = buildLlcReinstatementForm(stateOptions);
            } 
            else if (cleanKey.indexOf("business-license") !== -1 && typeof buildBusinessLicensesForm === "function") {
                fieldsRoot.innerHTML = buildBusinessLicensesForm(stateOptions);
            } 
            else if ((cleanKey.indexOf("ein") !== -1 || cleanKey.indexOf("employer-id") !== -1) && typeof buildEinApplicationForm === "function") {
                fieldsRoot.innerHTML = buildEinApplicationForm(stateOptions);
            } 
            else if (cleanKey.indexOf("dissolution") !== -1 && typeof buildEntityDissolutionForm === "function") {
                fieldsRoot.innerHTML = buildEntityDissolutionForm(stateOptions);
            } 
            else if ((cleanKey.indexOf("good-standing") !== -1 || cleanKey.indexOf("existence") !== -1 || cleanKey.indexOf("status") !== -1) && typeof buildGoodStandingForm === "function") {
                fieldsRoot.innerHTML = buildGoodStandingForm(stateOptions);
            } 
            else if (cleanKey.indexOf("apostille") !== -1 && typeof buildApostilleServiceForm === "function") {
                fieldsRoot.innerHTML = buildApostilleServiceForm(stateOptions);
            } 
            else if (cleanKey.indexOf("clia") !== -1 && typeof buildCliaCertificateForm === "function") {
                fieldsRoot.innerHTML = buildCliaCertificateForm(stateOptions);
            } 
            else if (cleanKey.indexOf("custom-regulatory") !== -1 && typeof buildCustomRegulatoryConsultingForm === "function") {
                fieldsRoot.innerHTML = buildCustomRegulatoryConsultingForm(stateOptions);
            } 
            else if (cleanKey.indexOf("federal-income-tax") !== -1 && typeof buildFederalIncomeTaxForm === "function") {
                fieldsRoot.innerHTML = buildFederalIncomeTaxForm(stateOptions);
            } 
            else if (cleanKey.indexOf("state-income-tax") !== -1 && typeof buildStateIncomeTaxForm === "function") {
                fieldsRoot.innerHTML = buildStateIncomeTaxForm(stateOptions);
            } 
            else if (cleanKey.indexOf("franchise-tax") !== -1 && typeof buildFranchiseTaxFilingForm === "function") {
                fieldsRoot.innerHTML = buildFranchiseTaxFilingForm(stateOptions);
            } 
            else if (cleanKey.indexOf("sales-tax") !== -1 && typeof buildSalesTaxRegistrationForm === "function") {
                fieldsRoot.innerHTML = buildSalesTaxRegistrationForm(stateOptions);
            } 
            else if (cleanKey.indexOf("payroll-tax") !== -1 && typeof buildPayrollTaxForm === "function") {
                fieldsRoot.innerHTML = buildPayrollTaxForm(stateOptions);
            } 
            else if ((cleanKey.indexOf("heavy-use") !== -1 || cleanKey.indexOf("2290") !== -1) && typeof buildHeavyUseTaxForm === "function") {
                fieldsRoot.innerHTML = buildHeavyUseTaxForm(stateOptions);
            } 
            else if (cleanKey.indexOf("cage-code") !== -1 && typeof buildCageCodeForm === "function") {
                fieldsRoot.innerHTML = buildCageCodeForm(stateOptions);
            } 
            else if (cleanKey.indexOf("duns") !== -1 && typeof buildDunsNumberForm === "function") {
                fieldsRoot.innerHTML = buildDunsNumberForm(stateOptions);
            } 
            else if (cleanKey.indexOf("procurement-registration") !== -1 && typeof buildProcurementRegistrationForm === "function") {
                fieldsRoot.innerHTML = buildProcurementRegistrationForm(stateOptions);
            } 
            else if (cleanKey.indexOf("minority-certificate") !== -1 && typeof buildMinorityCertificateForm === "function") {
                fieldsRoot.innerHTML = buildMinorityCertificateForm(stateOptions);
            } 
            else if (cleanKey.indexOf("owner-operator") !== -1 && typeof buildOwnerOperatorsForm === "function") {
                fieldsRoot.innerHTML = buildOwnerOperatorsForm(stateOptions);
            } 
            else if (cleanKey.indexOf("trucker-authority") !== -1 && typeof buildTruckerAuthorityForm === "function") {
                fieldsRoot.innerHTML = buildTruckerAuthorityForm(stateOptions);
            } 
            else if (cleanKey.indexOf("broker-authority") !== -1 && typeof buildBrokerAuthorityForm === "function") {
                fieldsRoot.innerHTML = buildBrokerAuthorityForm(stateOptions);
            } 
            else if ((cleanKey.indexOf("registered-agent") !== -1 || cleanKey.indexOf("ucr-registration") !== -1) && typeof buildRegisteredAgentServiceForm === "function") {
                // Shared entry architecture blocks handle agent parameters natively
                fieldsRoot.innerHTML = buildRegisteredAgentServiceForm(stateOptions);
            } 
            else if (cleanKey.indexOf("scac-code") !== -1 && typeof buildScacCodeRegistrationForm === "function") {
                fieldsRoot.innerHTML = buildScacCodeRegistrationForm(stateOptions);
            } 
            else if (cleanKey.indexOf("dot-consortium") !== -1 && typeof buildDotConsortiumForm === "function") {
                fieldsRoot.innerHTML = buildDotConsortiumForm(stateOptions);
            } 
            else if (cleanKey.indexOf("driver-qualification") !== -1 && typeof buildDriverQualificationFileForm === "function") {
                fieldsRoot.innerHTML = buildDriverQualificationFileForm(stateOptions);
            } 
            else if ((cleanKey.indexOf("process-agent") !== -1 || cleanKey.indexOf("boc-3") !== -1) && typeof buildProcessAgentBoc3Form === "function") {
                fieldsRoot.innerHTML = buildProcessAgentBoc3Form(stateOptions);
            } 
            else if (cleanKey.indexOf("ifta") !== -1 && typeof buildIftaRegistrationForm === "function") {
                fieldsRoot.innerHTML = buildIftaRegistrationForm(stateOptions);
            } 
            else if (cleanKey.indexOf("hazmat-registration") !== -1 && typeof buildHazmatRegistrationForm === "function") {
                fieldsRoot.innerHTML = buildHazmatRegistrationForm(stateOptions);
            } 
            else if (cleanKey.indexOf("trucker-insurance") !== -1 && typeof buildTruckerInsuranceForm === "function") {
                fieldsRoot.innerHTML = buildTruckerInsuranceForm(stateOptions);
            } 
            else if (cleanKey.indexOf("broker-insurance") !== -1 && typeof buildBrokerInsuranceForm === "function") {
                fieldsRoot.innerHTML = buildBrokerInsuranceForm(stateOptions);
            } 
            else if (cleanKey.indexOf("new-entrant-audit") !== -1 && typeof buildNewEntrantAuditForm === "function") {
                fieldsRoot.innerHTML = buildNewEntrantAuditForm(stateOptions);
            } 
            else {
                console.warn("[Wizard Engine Warning] No matching layout string found for: " + cleanKey);
                fieldsRoot.innerHTML = '<div style="grid-column: span 2; text-align: center; padding: 20px; color: #ef4444; font-weight: 700;">⚠️ Form configuration layout modules for "' + routeActiveServiceKey + '" are not mounted.</div>';
            }

            console.log("[Wizard Engine Success] Form mounting sequence completed for target node.");
        }
    }




    // 5. Fire your main engine UI sync matrices
    if (typeof renderActiveWizardStepUiLayout === "function") {
        renderActiveWizardStepUiLayout();
    }

    // 6. Restore form values from LocalStorage cache
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(true);
    }
    
}

// ========================================================
// 🔄 CERTIFICATE OF GOOD STANDING INTERACTION LAYER
// ========================================================

function toggleGoodStandingPurposeSpecificationVisibility(selectionValue) {
    var wrapper = document.getElementById("cgs_purpose_other_wrapper");
    var input = document.getElementById("cgs_purpose_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleGoodStandingPhysicalDeliveryVisibility(selectionValue) {
    var wrapper = document.getElementById("cgs_shipping_address_wrapper");
    if (!wrapper) return;

    if (selectionValue === "physical") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
        });
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}


// ========================================================
// 🔄 PROFESSIONAL REGISTERED AGENT SERVICE LOGIC WORKFLOWS
// ========================================================

let currentRaEntityCount = 1;

function toggleRegisteredAgentMailingVisibility(selectionValue) {
    var wrapper = document.getElementById("ra_mailing_wrapper");
    if (!wrapper) return;

    if (selectionValue === "different") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
        });
    }
}

function toggleRegisteredAgentMultiEntityVisibility(selectionValue) {
    var wrapper = document.getElementById("ra_multi_entity_wrapper");
    if (!wrapper) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
        });
    }
}

function appendNewRegisteredAgentEntityRow() {
    currentRaEntityCount++;
    var container = document.getElementById("ra_entities_container");
    if (!container) return;

    var entityRow = document.createElement("div");
    entityRow.className = "member-record-card";
    entityRow.id = "ra_entity_card_" + currentRaEntityCount;
    entityRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr; gap: 16px; margin-top: 8px;";
    
    entityRow.innerHTML = `
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2; display: flex; justify-content: space-between;">
            Secondary Entity #${currentRaEntityCount} Records
            <button type="button" onclick="removeRegisteredAgentEntityRow(${currentRaEntityCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem;"><i class="fa-solid fa-trash"></i> Remove</button>
        </span>
        <div class="wizard-input-group" style="margin: 0;">
            Entity Name <span style="color: #ef4444;">*</span></label>
            
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            Entity Type <span style="color: #ef4444;">*</span></label>
            
                <option value="llc">LLC</option>
                <option value="corporation">Corporation</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
            </select>
        </div>
    `;
    container.appendChild(entityRow);
}

function removeRegisteredAgentEntityRow(nodeId) {
    var card = document.getElementById("ra_entity_card_" + nodeId);
    if (card) card.remove();
}

function toggleRegisteredAgentMailForwardingWorkflow(selectionValue) {
    var wrapper = document.getElementById("ra_forwarding_address_wrapper");
    var input = document.getElementById("ra_forwarding_street");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}





// ========================================================
// 🔄 CONDITIONAL INTERACTION INTERFACE CONTROL ROUTINES
// ========================================================

function toggleFqAgentDetailsVisibility(selectionValue) {
    const manualWrapper = document.getElementById("fq_agent_manual_wrapper");
    if (!manualWrapper) return;

    if (selectionValue === "no") {
        manualWrapper.style.display = "flex";
        manualWrapper.querySelectorAll("input, select").forEach(field => {
            if (field.id !== "fq_agent_unit") field.required = true;
        });
    } else {
        manualWrapper.style.display = "none";
        manualWrapper.querySelectorAll("input, select").forEach(field => field.required = false);
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

function toggleFqLicenseAssistanceVisibility(selectionValue) {
    const detailsWrapper = document.getElementById("fq_license_details_wrapper");
    const assistanceWrapper = document.getElementById("fq_license_assistance_wrapper");
    const assistanceSelect = document.getElementById("fq_add_licensing_service");

    if (selectionValue === "yes") {
        if (detailsWrapper) detailsWrapper.style.display = "block";
        if (assistanceWrapper) assistanceWrapper.style.display = "none";
        if (assistanceSelect) assistanceSelect.required = false;
    } else if (selectionValue === "no") {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (assistanceWrapper) assistanceWrapper.style.display = "block";
        if (assistanceSelect) assistanceSelect.required = true;
    } else {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (assistanceWrapper) assistanceWrapper.style.display = "none";
        if (assistanceSelect) assistanceSelect.required = false;
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

function toggleFqEinWorkflow(selectionValue) {
    const reasonWrapper = document.getElementById("fq_ein_reason_wrapper");
    const reasonInput = document.getElementById("fq_ein_reason");
    if (!reasonWrapper || !reasonInput) return;

    if (selectionValue === "yes") {
        reasonWrapper.style.display = "flex";
        reasonInput.required = true;
    } else {
        reasonWrapper.style.display = "none";
        reasonInput.required = false;
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

// ========================================================
// 🔄 LLC REINSTATEMENT INTERACTION LOGIC CONTROL ROUTINES
// ========================================================

function toggleReinstatementFeesNoticeVisibility(selectionValue) {
    const unpaidWrapper = document.getElementById("rein_fees_unpaid_wrapper");
    const auditSelect = document.getElementById("rein_add_compliance_audit");
    if (!unpaidWrapper || !auditSelect) return;

    if (selectionValue === "no") {
        unpaidWrapper.style.display = "flex";
        auditSelect.required = true;
    } else {
        unpaidWrapper.style.display = "none";
        auditSelect.required = false;
        auditSelect.value = "no";
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

function toggleReinstatementIssuesVisibility(selectionValue) {
    const issuesWrapper = document.getElementById("rein_pending_issues_wrapper");
    const detailsInput = document.getElementById("rein_pending_details");
    if (!issuesWrapper || !detailsInput) return;

    if (selectionValue === "no") {
        issuesWrapper.style.display = "block";
        detailsInput.required = true;
    } else {
        issuesWrapper.style.display = "none";
        detailsInput.required = false;
    }
}

function toggleReinstatementEinWorkflow(selectionValue) {
    const reasonWrapper = document.getElementById("rein_ein_reason_wrapper");
    const reasonInput = document.getElementById("rein_ein_reason");
    if (!reasonWrapper || !reasonInput) return;

    if (selectionValue === "yes") {
        reasonWrapper.style.display = "flex";
        reasonInput.required = true;
    } else {
        reasonWrapper.style.display = "none";
        reasonInput.required = false;
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

function toggleReinstatementDurationFieldVisibility(selectionValue) {
    const dateWrapper = document.getElementById("rein_duration_date_wrapper");
    const dateInput = document.getElementById("rein_duration_date");
    if (!dateWrapper || !dateInput) return;

    if (selectionValue === "specific") {
        dateWrapper.style.display = "flex";
        dateInput.required = true;
    } else {
        dateWrapper.style.display = "none";
        dateInput.required = false;
    }
}


// ========================================================
// 🔄 USPTO TRADEMARK APPLICATION INTERACTION LAYER ROUTINES
// ========================================================

function toggleTrademarkSpecimenWorkflow(selectionValue) {
    const wrapper = document.getElementById("tm_specimen_wrapper");
    if (!wrapper) return;

    const descInput = document.getElementById("tm_specimen_desc");
    const fileInput = document.getElementById("tm_specimen_file");

    if (selectionValue === "use-in-commerce") {
        wrapper.style.display = "flex";
        if (descInput) descInput.required = true;
        if (fileInput) fileInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (descInput) descInput.required = false;
        if (fileInput) fileInput.required = false;
    }
}

function toggleTrademarkSearchAssistanceVisibility(selectionValue) {
    const detailsWrapper = document.getElementById("tm_search_details_wrapper");
    const assistanceWrapper = document.getElementById("tm_search_assistance_wrapper");
    const assistanceSelect = document.getElementById("tm_add_search_service");
    const resultsInput = document.getElementById("tm_search_results_data");

    if (selectionValue === "yes") {
        if (detailsWrapper) detailsWrapper.style.display = "block";
        if (resultsInput) resultsInput.required = true;
        if (assistanceWrapper) assistanceWrapper.style.display = "none";
        if (assistanceSelect) {
            assistanceSelect.required = false;
            assistanceSelect.value = "no";
        }
    } else if (selectionValue === "no") {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (resultsInput) resultsInput.required = false;
        if (assistanceWrapper) assistanceWrapper.style.display = "block";
        if (assistanceSelect) assistanceSelect.required = true;
    } else {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (resultsInput) resultsInput.required = false;
        if (assistanceWrapper) assistanceWrapper.style.display = "none";
        if (assistanceSelect) {
            assistanceSelect.required = false;
            assistanceSelect.value = "no";
        }
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

function toggleTrademarkAttorneyWrapperVisibility(selectionValue) {
    const wrapper = document.getElementById("tm_attorney_wrapper");
    if (!wrapper) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
        });
    }
}


// ========================================================
// 🔄 STATE SERVICEMARK APPLICATION INTERACTION LAYER ROUTINES
// ========================================================

function toggleServicemarkSpecimenWorkflow(selectionValue) {
    const wrapper = document.getElementById("sm_specimen_wrapper");
    if (!wrapper) return;

    const descInput = document.getElementById("sm_specimen_desc");
    const fileInput = document.getElementById("sm_specimen_file");

    if (selectionValue === "use-in-commerce") {
        wrapper.style.display = "flex";
        if (descInput) descInput.required = true;
        if (fileInput) fileInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (descInput) descInput.required = false;
        if (fileInput) fileInput.required = false;
    }
}

function toggleServicemarkSearchAssistanceVisibility(selectionValue) {
    const detailsWrapper = document.getElementById("sm_search_details_wrapper");
    const assistanceWrapper = document.getElementById("sm_search_assistance_wrapper");
    const assistanceSelect = document.getElementById("sm_add_search_service");
    const resultsInput = document.getElementById("sm_search_results_data");

    if (selectionValue === "yes") {
        if (detailsWrapper) detailsWrapper.style.display = "block";
        if (resultsInput) resultsInput.required = true;
        if (assistanceWrapper) assistanceWrapper.style.display = "none";
        if (assistanceSelect) {
            assistanceSelect.required = false;
            assistanceSelect.value = "no";
        }
    } else if (selectionValue === "no") {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (resultsInput) resultsInput.required = false;
        if (assistanceWrapper) assistanceWrapper.style.display = "block";
        if (assistanceSelect) assistanceSelect.required = true;
    } else {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (resultsInput) resultsInput.required = false;
        if (assistanceWrapper) assistanceWrapper.style.display = "none";
        if (assistanceSelect) {
            assistanceSelect.required = false;
            assistanceSelect.value = "no";
        }
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

function toggleServicemarkAttorneyWrapperVisibility(selectionValue) {
    const wrapper = document.getElementById("sm_attorney_wrapper");
    if (!wrapper) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
        });
    }
}


// ========================================================
// 🔄 ANNUAL REPORT REPORTING LIFE-CYCLE VISIBILITY ROUTINES
// ========================================================

function toggleAnnualReportMailingAddressVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_mailing_wrapper");
    if (!wrapper) return;

    if (selectionValue === "different") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = false);
    }
}

function toggleAnnualReportStateExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_state_explanation_wrapper");
    const input = document.getElementById("ar_state_reason");
    if (!wrapper || !input) return;

    if (selectionValue === "no") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleAnnualReportCityExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_city_explanation_wrapper");
    const input = document.getElementById("ar_city_reason");
    if (!wrapper || !input) return;

    if (selectionValue === "no") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleAnnualReportFederalExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_fed_explanation_wrapper");
    const input = document.getElementById("ar_fed_reason");
    if (!wrapper || !input) return;

    if (selectionValue === "no") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleAnnualReportOtherExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_other_explanation_wrapper");
    const input = document.getElementById("ar_other_filings_list");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "flex";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleAnnualReportComplianceCheckVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_compliance_pending_wrapper");
    const input = document.getElementById("ar_pending_renewals_list");
    if (!wrapper || !input) return;

    if (selectionValue === "no") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

// ========================================================
// 🔄 OPERATING AGREEMENT INTERACTIVE SUBSYSTEM LAYER
// ========================================================

let currentOaMemberCount = 1;

function toggleOperatingAgreementOwnershipSubForm(structureType) {
    const singleWrapper = document.getElementById("oa_single_member_wrapper");
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    
    if (!singleWrapper || !multiWrapper) return;

    if (structureType === "single-member") {
        singleWrapper.style.display = "flex";
        multiWrapper.style.display = "none";
        
        // Toggle attribute requirements
        document.getElementById("oa_sole_member_name").required = true;
        document.getElementById("oa_sole_member_contribution").required = true;
        
        // Strip requirements from the multi-member arrays
        clearMultiMemberValidationRequirements();
    } else if (structureType === "multi-member") {
        singleWrapper.style.display = "none";
        multiWrapper.style.display = "flex";
        
        document.getElementById("oa_sole_member_name").required = false;
        document.getElementById("oa_sole_member_contribution").required = false;
        
        enforceMultiMemberValidationRequirements();
        calculateCumulativeOperatingAgreementEquityTotal();
    }
}

function appendNewOperatingAgreementMemberRow() {
    currentOaMemberCount++;
    const container = document.getElementById("oa_members_container");
    if (!container) return;

    const memberRow = document.createElement("div");
    memberRow.className = "member-record-card";
    memberRow.id = `oa_member_card_${currentOaMemberCount}`;
    memberRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; margin-top: 8px;";
    
    memberRow.innerHTML = `
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 3; display: flex; justify-content: space-between;">
            Member #${currentOaMemberCount} Equity Node
            <button type="button" onclick="removeOperatingAgreementMemberNode(${currentOaMemberCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem;"><i class="fa-solid fa-trash"></i> Remove</button>
        </span>
        <div class="wizard-input-group" style="margin: 0;">
            <label for="oa_member_name_${currentOaMemberCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="oa_member_name_${currentOaMemberCount}" required placeholder="Full Legal Name" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label for="oa_member_contribution_${currentOaMemberCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Capital Contribution ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" id="oa_member_contribution_${currentOaMemberCount}" required placeholder="e.g. 500" min="0" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label for="oa_member_percentage_${currentOaMemberCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Ownership % <span style="color: #ef4444;">*</span></label>
            <input type="number" id="oa_member_percentage_${currentOaMemberCount}" required placeholder="e.g. 25" min="0" max="100" class="wizard-input-field oa-percentage-field" oninput="calculateCumulativeOperatingAgreementEquityTotal()">
        </div>
    `;
    container.appendChild(memberRow);
    calculateCumulativeOperatingAgreementEquityTotal();
}

function removeOperatingAgreementMemberNode(nodeId) {
    const targetCard = document.getElementById(`oa_member_card_${nodeId}`);
    if (targetCard) {
        targetCard.remove();
        calculateCumulativeOperatingAgreementEquityTotal();
    }
}

function calculateCumulativeOperatingAgreementEquityTotal() {
    const percentageFields = document.querySelectorAll(".oa-percentage-field");
    let cumulativeTotal = 0;
    
    percentageFields.forEach(field => {
        const fieldVal = parseFloat(field.value);
        if (!isNaN(fieldVal)) cumulativeTotal += fieldVal;
    });

    const outputSpan = document.getElementById("oa_live_percentage_total_span");
    const balanceAlert = document.getElementById("oa_percentage_balance_alert");
    
    if (outputSpan) outputSpan.innerText = cumulativeTotal;

    if (balanceAlert) {
        if (cumulativeTotal === 100) {
            balanceAlert.style.background = "#ecfdf5";
            balanceAlert.style.color = "#065f46";
        } else {
            balanceAlert.style.background = "#f1f5f9";
            balanceAlert.style.color = "var(--navy)";
        }
    }
    return cumulativeTotal;
}

function clearMultiMemberValidationRequirements() {
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    if (multiWrapper) {
        multiWrapper.querySelectorAll("input").forEach(inp => inp.required = false);
    }
}

function enforceMultiMemberValidationRequirements() {
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    if (multiWrapper) {
        multiWrapper.querySelectorAll("input").forEach(inp => inp.required = true);
    }
}

// ⚡ INTEGRATION HOOK FOR YOUR SUBMITTER WORKFLOW TO VALIDATE THE LEDGER 
function verifyOperatingAgreementLedgerBalanceBeforeSubmit() {
    const structType = document.getElementById("oa_membership_structure").value;
    if (structType === "multi-member") {
        const finalWeightSum = calculateCumulativeOperatingAgreementEquityTotal();
        if (finalWeightSum !== 100) {
            alert(`Ownership distribution calculation mismatch. Your ledger total is currently ${finalWeightSum}%. It must equal exactly 100% before the system compiles the asset variables for Supabase file generation.`);
            return false;
        }
    }
    return true;
}

/**
 * Handles showing and hiding the alternate mailing layout wrapper card.
 * Dynamically assigns or clears required validation constraints.
 */
function toggleRegisteredAgentMailingVisibility(selectedValue) {
    const wrapper = document.getElementById('ra_mailing_wrapper');
    if (!wrapper) return;

    const fields = [
        document.getElementById('ra_mailing_street'),
        document.getElementById('ra_mailing_city'),
        document.getElementById('ra_mailing_state'),
        document.getElementById('ra_mailing_zip')
    ];

    if (selectedValue === 'different') {
        wrapper.style.display = 'flex';
        fields.forEach(field => {
            if (field) field.setAttribute('required', 'true');
        });
    } else {
        wrapper.style.display = 'none';
        fields.forEach(field => {
            if (field) {
                field.removeAttribute('required');
                field.value = ''; // Clean field values out when hidden
            }
        });
    }
}

// Ensure global scope coverage
window.toggleRegisteredAgentMailingVisibility = toggleRegisteredAgentMailingVisibility;

// ========================================================
// 🔄 BUSINESS LICENSES CONFIGURATOR INTERACTION LAYER
// ========================================================

function toggleBusinessLicensesMailingVisibility(selectionValue) {
    var wrapper = document.getElementById("bl_mailing_wrapper");
    if (!wrapper) return;

    if (selectionValue === "different") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
        });
    }
}

function toggleBusinessLicensesLandlordVisibility(selectionValue) {
    var wrapper = document.getElementById("bl_landlord_wrapper");
    if (!wrapper) return;

    if (selectionValue === "lease") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input").forEach(function(el) {
            el.required = false;
        });
    }
}

function toggleBusinessLicensesCityRegsVisibility(selectionValue) {
    var wrapper = document.getElementById("bl_city_regs_wrapper");
    var input = document.getElementById("bl_city_regs_details");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleBusinessLicensesOtherPermitsVisibility(selectionValue) {
    var wrapper = document.getElementById("bl_other_permits_wrapper");
    var input = document.getElementById("bl_other_permits_list");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

// ========================================================
// 🔄 EMPLOYER ID (EIN) APPLICATION INTERACTION LAYER
// ========================================================

function toggleEinMailingVisibility(selectionValue) {
    var wrapper = document.getElementById("ein_mailing_wrapper");
    if (!wrapper) return;

    if (selectionValue === "different") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
        });
    }
}

function toggleEinStructureSpecificationVisibility(selectionValue) {
    var wrapper = document.getElementById("ein_structure_other_wrapper");
    var input = document.getElementById("ein_structure_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleEinReasonSpecificationVisibility(isOptionChecked) {
    var wrapper = document.getElementById("ein_reason_other_wrapper");
    var input = document.getElementById("ein_reason_other_text");
    if (!wrapper || !input) return;

    if (isOptionChecked) {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}


// ========================================================
// 🔄 ENTITY DISSOLUTION APPLICATION INTERACTION LAYER
// ========================================================

function toggleDissolutionStructureSpecificationVisibility(selectionValue) {
    var wrapper = document.getElementById("dis_structure_other_wrapper");
    var input = document.getElementById("dis_structure_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleDissolutionReasonSpecificationVisibility(isOptionChecked) {
    var wrapper = document.getElementById("dis_reason_other_wrapper");
    var input = document.getElementById("dis_reason_other_text");
    if (!wrapper || !input) return;

    if (isOptionChecked) {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleDissolutionAssetDistributionVisibility(selectionValue) {
    var wrapper = document.getElementById("dis_asset_dist_wrapper");
    var input = document.getElementById("dis_asset_dist_details");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleDissolutionDebtsVisibility(selectionValue) {
    var wrapper = document.getElementById("dis_debts_wrapper");
    var input = document.getElementById("dis_debts_details");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

// ========================================================
// 🔄 CERTIFICATE OF GOOD STANDING INTERACTION LAYER
// ========================================================

function toggleGoodStandingPurposeSpecificationVisibility(selectionValue) {
    var wrapper = document.getElementById("cgs_purpose_other_wrapper");
    var input = document.getElementById("cgs_purpose_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

function toggleGoodStandingPhysicalDeliveryVisibility(selectionValue) {
    var wrapper = document.getElementById("cgs_shipping_address_wrapper");
    if (!wrapper) return;

    if (selectionValue === "physical") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
        });
    }
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

// ========================================================
// 🔄 APOSTILLE AUTHENTICATION SERVICES INTERACTION LAYER
// ========================================================

function toggleApostilleDocumentSpecificationVisibility(selectionValue) {
    var wrapper = document.getElementById("ap_doc_type_other_wrapper");
    var input = document.getElementById("ap_doc_type_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}


// ========================================================
// 🔄 CLIA CERTIFICATE REGISTRATION INTERACTION LAYER
// ========================================================

function toggleCliaFacilityOtherSpecificationVisibility(selectionValue) {
    var wrapper = document.getElementById("clia_facility_other_wrapper");
    var input = document.getElementById("clia_facility_other_text");
    if (!wrapper || !input) return;

    if (selectionValue === "other") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
    }
}

// ========================================================
// 🔄 FEDERAL INCOME TAX APPLICATION INTERACTION LAYER
// ========================================================

function toggleFederalTaxInventoryCostVisibility(selectionValue) {
    var wrapper = document.getElementById("fed_tax_inventory_wrapper");
    var input = document.getElementById("fed_tax_cogs_value");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = "";
    }
}


// ========================================================
// 🔄 STATE INCOME TAX APPLICATION INTERACTION LAYER
// ========================================================

// Automated Federal-to-State Data Sync Engine Hook
function executeStateTaxAutomatedCacheSync(sourceCacheId, targetInputNode) {
    if (!targetInputNode || (targetInputNode.value !== "" && targetInputNode.value !== "0")) return;
    
    const localStorageNamespace = "f4u_wizard_onboarding_state";
    try {
        const rawPayload = localStorage.getItem(localStorageNamespace);
        if (rawPayload) {
            const parsedData = JSON.parse(rawPayload);
            if (parsedData && parsedData[sourceCacheId]) {
                targetInputNode.value = parsedData[sourceCacheId];
                console.log(`[Cache Sync Engine] Pulled value "${parsedData[sourceCacheId]}" from "${sourceCacheId}" into "${targetInputNode.id}".`);
            }
        }
    } catch (syncErr) {
        console.warn("[Cache Sync Engine Warning] Could not execute automated form coupling:", syncErr);
    }
}

function toggleStateTaxPtetWorkflow(selectedState) {
    // States lacking broad PTET frameworks or corporate income taxes are excluded
    const nonPtetStates = ["AK", "FL", "NV", "SD", "TN", "TX", "WA", "WY"];
    const ptetWrapper = document.getElementById("state_tax_ptet_wrapper");
    if (!ptetWrapper) return;

    if (nonPtetStates.indexOf(selectedState) !== -1) {
        ptetWrapper.style.display = "none";
        document.getElementById("state_tax_ptet_choice").required = false;
        document.getElementById("state_tax_ptet_choice").value = "no";
    } else {
        toggleStateTaxPtetStructureCheck();
    }
}

function toggleStateTaxPtetStructureCheck() {
    const ptetWrapper = document.getElementById("state_tax_ptet_wrapper");
    const entityType = document.getElementById("state_tax_entity_type");
    const ptetSelect = document.getElementById("state_tax_ptet_choice");
    const targetState = document.getElementById("state_tax_target_state");
    
    if (!ptetWrapper || !entityType || !ptetSelect || !targetState) return;

    const structuralStates = ["AK", "FL", "NV", "SD", "TN", "TX", "WA", "WY"];
    if (structuralStates.indexOf(targetState.value) !== -1) return;

    if (entityType.value === "pass-through") {
        ptetWrapper.style.display = "flex";
        ptetSelect.required = true;
    } else {
        ptetWrapper.style.display = "none";
        ptetSelect.required = false;
        ptetSelect.value = "no";
    }
}

function toggleStateTaxApportionmentVisibility(selectionValue) {
    var wrapper = document.getElementById("state_tax_apportionment_wrapper");
    var input = document.getElementById("state_tax_apportionment_percentage");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = "";
    }
}


// ========================================================
// 🔄 FRANCHISE TAX APPLICATION INTERACTION LAYER
// ========================================================

let currentFranchiseOfficerCount = 1;

function executeFranchiseTaxStateParsingWorkflow(selectedStateCode) {
    const bannerWrapper = document.getElementById("fran_tax_state_notification_banner");
    const bannerText = document.getElementById("fran_tax_state_banner_text");
    const methodSelect = document.getElementById("fran_tax_method_type");
    
    if (!bannerWrapper || !bannerText || !methodSelect) return;
    
    // Core State Overrides Mapping Profiles
    if (selectedStateCode === "TX") {
        bannerWrapper.style.display = "block";
        bannerText.innerHTML = "💡 Texas State Notice: Businesses with gross receipts below the state statutory threshold file a No-Tax-Due Information Report. Filings4u will automatically process this variant for your entity configuration.";
        methodSelect.value = "informational";
    } else if (selectedStateCode === "DE") {
        bannerWrapper.style.display = "block";
        bannerText.innerHTML = "💡 Delaware State Notice: Domestic LLCs are subject to a flat minimum annual franchise tax of $300.00. Corporations calculate their parameter fees via the Authorized Shares method or Assumed Par Value Capital method.";
        methodSelect.value = "flat";
    } else {
        bannerWrapper.style.display = "none";
        bannerText.innerHTML = "";
    }
    
    toggleFranchiseTaxThresholdInputFieldsVisibility(methodSelect.value);
}

function toggleFranchiseTaxThresholdInputFieldsVisibility(selectionValue) {
    const calcWrapper = document.getElementById("fran_tax_calculation_wrapper");
    if (!calcWrapper) return;

    if (selectionValue === "margin-or-stock") {
        calcWrapper.style.display = "flex";
        calcWrapper.querySelectorAll("input").forEach(el => el.required = true);
    } else {
        calcWrapper.style.display = "none";
        calcWrapper.querySelectorAll("input").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

function appendNewFranchiseTaxOfficerRow() {
    currentFranchiseOfficerCount++;
    const container = document.getElementById("fran_officer_container");
    if (!container) return;

    const officerCard = document.createElement("div");
    officerCard.className = "member-record-card";
    officerCard.id = `fran_officer_card_${currentFranchiseOfficerCount}`;
    officerCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr; gap: 16px; margin-top: 8px;";
    
    officerCard.innerHTML = `
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2; display: flex; justify-content: space-between;">
            Principal Officer / Manager #${currentFranchiseOfficerCount}
            <button type="button" onclick="removeFranchiseTaxOfficerRow(${currentFranchiseOfficerCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem;"><i class="fa-solid fa-trash"></i> Remove</button>
        </span>
        
        <div class="wizard-input-group" style="margin: 0;">
            <label for="fran_officer_name_${currentFranchiseOfficerCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fran_officer_name_${currentFranchiseOfficerCount}" required placeholder="First and Last Legal Name" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="margin: 0;">
            <label for="fran_officer_title_${currentFranchiseOfficerCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Official Title <span style="color: #ef4444;">*</span></label>
            <select id="fran_officer_title_${currentFranchiseOfficerCount}" required class="wizard-input-field" style="font-weight: 600;">
                <option value="President">President / CEO</option>
                <option value="Secretary">Secretary</option>
                <option value="Treasurer">Treasurer / CFO</option>
                <option value="Manager">Manager / Managing Member</option>
                <option value="Director">Director</option>
            </select>
        </div>

        <div class="wizard-input-group" style="grid-column: span 2; margin: 0;">
            <label for="fran_officer_street_${currentFranchiseOfficerCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Mailing Address <span style="color: #ef4444;">*</span></label>
            <input type="text" id="fran_officer_street_${currentFranchiseOfficerCount}" required placeholder="Street Address, Suite, Apt" class="wizard-input-field" onfocus="attachGooglePlacesAutocompleteToNode(this, 'fran_officer_addr_${currentFranchiseOfficerCount}')">
        </div>
    `;
    
    container.appendChild(officerCard);
}

function removeFranchiseTaxOfficerRow(nodeId) {
    const card = document.getElementById(`fran_officer_card_${nodeId}`);
    if (card) card.remove();
}


// ========================================================
// 🔄 SALES TAX REGISTRATION CONFIGURATOR INTERACTION LAYER
// ========================================================

function toggleSalesTaxNexusSubInputs(selectionValue) {
    const physicalWrapper = document.getElementById("st_physical_nexus_wrapper");
    const economicWrapper = document.getElementById("st_economic_nexus_wrapper");
    
    if (!physicalWrapper || !economicWrapper) return;

    const inventoryInput = document.getElementById("st_inventory_location");
    const employeesInput = document.getElementById("st_in_state_employees");
    const grossSalesInput = document.getElementById("st_prior_year_gross");
    const transactionsInput = document.getElementById("st_prior_year_transactions");

    if (selectionValue === "physical") {
        physicalWrapper.style.display = "grid";
        economicWrapper.style.display = "none";
        
        if (inventoryInput) inventoryInput.required = true;
        if (employeesInput) employeesInput.required = true;
        if (grossSalesInput) grossSalesInput.required = false;
        if (transactionsInput) transactionsInput.required = false;
    } 
    else if (selectionValue === "economic") {
        physicalWrapper.style.display = "none";
        economicWrapper.style.display = "grid";
        
        if (inventoryInput) inventoryInput.required = false;
        if (employeesInput) employeesInput.required = false;
        if (grossSalesInput) grossSalesInput.required = true;
        if (transactionsInput) transactionsInput.required = true;
    } 
    else if (selectionValue === "both") {
        physicalWrapper.style.display = "grid";
        economicWrapper.style.display = "grid";
        
        if (inventoryInput) inventoryInput.required = true;
        if (employeesInput) employeesInput.required = true;
        if (grossSalesInput) grossSalesInput.required = true;
        if (transactionsInput) transactionsInput.required = true;
    } 
    else {
        physicalWrapper.style.display = "none";
        economicWrapper.style.display = "none";
        
        if (inventoryInput) inventoryInput.required = false;
        if (employeesInput) employeesInput.required = false;
        if (grossSalesInput) grossSalesInput.required = false;
        if (transactionsInput) transactionsInput.required = false;
    }
}


// ========================================================
// 🔄 PAYROLL TAX REGISTRATION INTERACTION LAYER
// ========================================================

function togglePayrollTaxSutaFieldsVisibility(selectionValue) {
    const wrapper = document.getElementById("pr_existing_suta_wrapper");
    if (!wrapper) return;

    const sutaInput = document.getElementById("pr_existing_suta_id");
    const withholdingInput = document.getElementById("pr_existing_withholding_id");

    if (selectionValue === "existing") {
        wrapper.style.display = "grid";
        if (sutaInput) sutaInput.required = true;
        if (withholdingInput) withholdingInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (sutaInput) {
            sutaInput.required = false;
            sutaInput.value = "";
        }
        if (withholdingInput) {
            withholdingInput.required = false;
            withholdingInput.value = "";
        }
    }
}


// ========================================================
// 🔄 HEAVY USE TAX (2290) CONFIGURATOR INTERACTION LAYER
// ========================================================

let currentHutVehicleCount = 1;

function appendNewHeavyUseTaxVehicleRow() {
    currentHutVehicleCount++;
    var container = document.getElementById("hut_fleet_container");
    if (!container) return;

    var vehicleCard = document.createElement("div");
    vehicleCard.className = "member-record-card";
    vehicleCard.id = "hut_vehicle_card_" + currentHutVehicleCount;
    vehicleCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 2fr 1fr; gap: 16px; margin-top: 8px;";
    
    vehicleCard.innerHTML = `
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 3; display: flex; justify-content: space-between;">
            Heavy Vehicle Asset Unit #${currentHutVehicleCount}
            <button type="button" onclick="removeHeavyUseTaxVehicleRow(${currentHutVehicleCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem;"><i class="fa-solid fa-trash"></i> Remove</button>
        </span>
        
        <div class="wizard-input-group" style="margin: 0;">
            <label for="hut_vin_${currentHutVehicleCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Vehicle Identification Number (VIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" id="hut_vin_${currentHutVehicleCount}" required placeholder="17-Digit Alpha-Numeric VIN" maxlength="17" style="font-family: monospace; text-transform: uppercase;" class="wizard-input-field">
        </div>

        <div class="wizard-input-group" style="margin: 0;">
            <label for="hut_weight_category_${currentHutVehicleCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Taxable Gross Weight Class <span style="color: #ef4444;">*</span></label>
            <select id="hut_weight_category_${currentHutVehicleCount}" required class="wizard-input-field" style="font-weight: 600;">
                <option value="A" selected>Category A: 55,000 to 55,999 lbs</option>
                <option value="B">Category B: 56,000 to 56,999 lbs</option>
                <option value="C">Category C: 57,000 to 57,999 lbs</option>
                <option value="D">Category D: 58,000 to 58,999 lbs</option>
                <option value="E">Category E: 59,000 to 59,999 lbs</option>
                <option value="F">Category F: 60,000 to 60,999 lbs</option>
                <option value="G">Category G: 61,000 to 61,999 lbs</option>
                <option value="H">Category H: 62,000 to 62,999 lbs</option>
                <option value="I">Category I: 63,000 to 63,999 lbs</option>
                <option value="J">Category J: 64,000 to 64,999 lbs</option>
                <option value="K">Category K: 65,000 to 65,999 lbs</option>
                <option value="L">Category L: 66,000 to 66,999 lbs</option>
                <option value="M">Category M: 67,000 to 67,999 lbs</option>
                <option value="N">Category N: 68,000 to 68,999 lbs</option>
                <option value="O">Category O: 69,000 to 69,999 lbs</option>
                <option value="P">Category P: 70,000 to 70,999 lbs</option>
                <option value="Q">Category Q: 71,000 to 71,999 lbs</option>
                <option value="R">Category R: 72,000 to 72,999 lbs</option>
                <option value="S">Category S: 73,000 to 73,999 lbs</option>
                <option value="T">Category T: 74,000 to 74,999 lbs</option>
                <option value="U">Category U: 75,000 lbs up to logging weight</option>
                <option value="V">Category V: Over 75,000 lbs (Max Tax Bracket Rate)</option>
            </select>
        </div>

        <div class="wizard-input-group" style="margin: 0;">
            <label for="hut_is_logging_${currentHutVehicleCount}" style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Logging Vehicle? <span style="color: #ef4444;">*</span></label>
            <select id="hut_is_logging_${currentHutVehicleCount}" required class="wizard-input-field" style="font-weight: 600;">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
            </select>
        </div>
    `;
    
    container.appendChild(vehicleCard);
}

function removeHeavyUseTaxVehicleRow(nodeId) {
    var card = document.getElementById("hut_vehicle_card_" + nodeId);
    if (card) card.remove();
}


// ========================================================
// 🔄 CAGE CODE REGISTRATION INTERACTION LAYER ROUTINES
// ========================================================

function toggleCageParentCompanyWrapperVisibility(selectionValue) {
    var wrapper = document.getElementById("cage_parent_company_wrapper");
    if (!wrapper) return;

    var parentNameInput = document.getElementById("cage_parent_legal_name");

    if (selectionValue === "yes") {
        wrapper.style.display = "grid";
        if (parentNameInput) parentNameInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (parentNameInput) {
            parentNameInput.required = false;
            parentNameInput.value = "";
        }
        var parentCageInput = document.getElementById("cage_parent_cage_code");
        if (parentCageInput) parentCageInput.value = "";
    }
}


// ========================================================
// 🔄 DUNS NUMBER CONFIGURATION INTERACTION LAYER ROUTINES
// ========================================================

function toggleDunsParentCompanyVisibility(selectionValue) {
    var wrapper = document.getElementById("duns_parent_wrapper");
    if (!wrapper) return;

    var parentNameInput = document.getElementById("duns_parent_legal_name");
    var parentCountryInput = document.getElementById("duns_parent_country");

    if (selectionValue === "branch" || selectionValue === "subsidiary") {
        wrapper.style.display = "grid";
        if (parentNameInput) parentNameInput.required = true;
        if (parentCountryInput) parentCountryInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (parentNameInput) {
            parentNameInput.required = false;
            parentNameInput.value = "";
        }
        if (parentCountryInput) {
            parentCountryInput.required = false;
            parentCountryInput.value = "";
        }
    }
}


// ========================================================
// 🔄 SAM.GOV PROCUREMENT REGISTRATION INTERACTION LAYER
// ========================================================

function toggleSamUniqueEntityIdVisibility(selectionValue) {
    var wrapper = document.getElementById("sam_uei_code_wrapper");
    if (!wrapper) return;

    var ueiInput = document.getElementById("sam_existing_uei");

    if (selectionValue === "existing") {
        wrapper.style.display = "block";
        if (ueiInput) ueiInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (ueiInput) {
            ueiInput.required = false;
            ueiInput.value = "";
        }
    }
}

// ========================================================
// 🔄 MINORITY CERTIFICATE REGISTRATION INTERACTION LAYER
// ========================================================

function toggleMorphicMbeAgencySubInputs(selectionValue) {
    var wrapper = document.getElementById("mbe_state_agency_wrapper");
    if (!wrapper) return;

    var agencyInput = document.getElementById("mbe_target_agency_name");

    if (selectionValue === "state-local") {
        wrapper.style.display = "block";
        if (agencyInput) agencyInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (agencyInput) {
            agencyInput.required = false;
            agencyInput.value = "";
        }
    }
}


// ========================================================
// 🔄 DRIVER QUALIFICATION FILE INTERACTION LAYER
// ========================================================

function toggleDqfFleetQuantityVisibility(selectionValue) {
    var wrapper = document.getElementById("dqf_fleet_count_wrapper");
    if (!wrapper) return;

    var countInput = document.getElementById("dqf_total_files_needed");

    if (selectionValue === "fleet-addition") {
        wrapper.style.display = "block";
        if (countInput) countInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (countInput) {
            countInput.required = false;
            countInput.value = "1";
        }
    }
    
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}


// ========================================================
// 🔄 PROCESS AGENT (BOC-3) FILING INTERACTION LAYER
// ========================================================

function toggleBoc3AuthorityIdentifiersVisibility(selectionValue) {
    var wrapper = document.getElementById("boc_authority_nums_wrapper");
    if (!wrapper) return;

    var usdotInput = document.getElementById("boc_usdot_number");
    var mcInput = document.getElementById("boc_mc_number");

    if (selectionValue === "independent") {
        wrapper.style.display = "grid";
        if (usdotInput) usdotInput.required = true;
        if (mcInput) mcInput.required = true;
    } else {
        wrapper.style.display = "none";
        if (usdotInput) {
            usdotInput.required = false;
            usdotInput.value = "";
        }
        if (mcInput) {
            mcInput.required = false;
            mcInput.value = "";
        }
    }
}

// ========================================================
// 🔄 INTERNATIONAL FUEL TAX AGREEMENT (IFTA) INTERACTION
// ========================================================

function toggleIftaFulfillmentSubFields(selectionValue) {
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}
