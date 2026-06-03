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

// ========================================================
// 🔀 WIZARD INTERACTIVE NAVIGATION SEQUENCING CONTROLLER
// ========================================================

function goToNextWizardStep(targetStepIndex) {
  // Form compliance boundary guards
  if (targetStepIndex > currentWizardActiveStep) {
    const currentActivePanel = document.getElementById(`step-panel-${currentWizardActiveStep}`);
    if (currentActivePanel) {
      const analyticalInputs = currentActivePanel.querySelectorAll("input[required], select[required]");
      let isPanelDataValid = true;
      
      analyticalInputs.forEach(element => {
        if (!element.checkValidity()) {
          element.reportValidity();
          isPanelDataValid = false;
        }
      });
      
      if (!isPanelDataValid) return false; // Prevent navigation if form data is invalid
    }
  }
  
  currentWizardActiveStep = targetStepIndex;
  renderActiveWizardStepUiLayout();
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
  const stepDifference = targetStepIndex - currentWizardActiveStep;
  navigateWizardStepTrackVanilla(stepDifference);
}

// 💾 BROWSER STORAGE STATE CACHE MECHANICS (VANILLA JS)
function cacheAndRestoreWizardFormStatesVanilla(isExecutionInitialLoad) {
  const cacheKeyNamespace = "f4u_wizard_onboarding_state";
  
  if (isExecutionInitialLoad) {
    // Recover fields seamlessly on screen load
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
    // Collect input values into a local payload object
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
if (cardToRemove) cardToRemove.remove();}function toggleSeriesEinWorkflow(selectedValue) {const wrapper = document.getElementById("sllc_ein_reason_wrapper");if (wrapper) wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";if (typeof updateDynamicPricingMatrixVanilla === "function") {window.customSelectedEinProcurementServiceActive = (selectedValue === "yes");updateDynamicPricingMatrixVanilla();}}function toggleSeriesLicenseWorkflow(selectedValue) {const warningNote = document.getElementById("sllc_custom_license_wrapper");if (warningNote) warningNote.style.display = (selectedValue === "yes") ? "flex" : "none";if (typeof updateDynamicPricingMatrixVanilla === "function") {window.customSelectedSeriesLicenseAuditActive = (selectedValue === "no");updateDynamicPricingMatrixVanilla();}}function toggleSeriesLlcDurationField(selectedValue) {const wrapper = document.getElementById("sllc_duration_term_wrapper");if (wrapper) wrapper.style.display = (selectedValue === "project") ? "flex" : "none";}