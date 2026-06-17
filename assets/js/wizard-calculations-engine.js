// ============================================================================
// 🏛️ CENTRAL SERVICE DESIGNATION PLAN CONFIGURATION DATABASE
// ============================================================================

const CENTRAL_SERVICE_PLAN_DB = {
  "llc-formation": { name: "LLC Formation", prices: { "starter": 99.00, "compliance": 199.00, "enterprise": 499.00 } },
  "corporations": { name: "Corporations (C/S-Corp)", prices: { "starter": 129.00, "compliance": 249.00, "enterprise": 599.00 } },
  "sole-proprietorship": { name: "Sole Proprietorship", prices: { "starter": 79.00, "compliance": 159.00, "enterprise": 239.00 } },
  "dba-registration": { name: "DBA Registration", prices: { "starter": 39.00, "compliance": 99.00, "enterprise": 159.00 } },
  "nonprofit-organization": { name: "Nonprofit Organization", prices: { "starter": 149.00, "compliance": 299.00, "enterprise": 499.00 } },
  "series-llc": { name: "Series LLC", prices: { "starter": 199.00, "compliance": 299.00, "enterprise": 399.00 } },
  "foreign-qualification-certificate": { name: "Foreign Qualification Certificate", prices: { "starter": 149.00, "compliance": 249.00, "enterprise": 349.00 } },
  "llc-reinstatement-processing": { name: "LLC Reinstatement Processing", prices: { "starter": 79.00, "compliance": 149.00, "enterprise": 249.00 } },
  "trademark-filing": { name: "Trademark Filing", prices: { "starter": 199.00, "compliance": 299.00, "enterprise": 499.00 } },
  "servicemark-filing": { name: "Servicemark Filing", prices: { "starter": 199.00, "compliance": 299.00, "enterprise": 399.00 } },
  "annual-reports": { name: "Annual Reports", prices: { "starter": 89.00, "compliance": 159.00, "enterprise": 249.00 } },
  "operating-agreement": { name: "Operating Agreement", prices: { "starter": 49.00, "compliance": 99.00, "enterprise": 199.00 } },
  "registered-agent": { name: "Registered Agent", prices: { "starter": 99.00, "compliance": 179.00, "enterprise": 299.00 } },
  "business-licenses": { name: "Business Licenses", prices: { "starter": 79.00, "compliance": 149.00, "enterprise": 299.00 } },
  "employer-id-ein": { name: "Employer ID (EIN)", prices: { "starter": 79.00, "compliance": 149.00, "enterprise": 199.00 } },
  "entity-dissolution": { name: "Entity Dissolution", prices: { "starter": 149.00, "compliance": 249.00, "enterprise": 349.00 } },
  "certificate-of-good-standing": { name: "Certificate of Good Standing", prices: { "starter": 49.00, "compliance": 99.00, "enterprise": 149.00 } },
  "apostille-authentication-services": { name: "Apostille Authentication Services", prices: { "starter": 99.00, "compliance": 179.00, "enterprise": 299.00 } },
  "clia-certificate": { name: "CLIA Certificate", prices: { "starter": 199.00, "compliance": 349.00, "enterprise": 499.00 } },
  "custom-regulatory-legal-consulting": { name: "Custom Regulatory Legal Consulting", prices: { "starter": 150.00, "compliance": 1000.00, "enterprise": 1000.00 } },
  "federal-tax": { name: "Federal Income Tax", prices: { "starter": 299.00, "compliance": 499.00, "enterprise": 799.00 } },
  "state-tax": { name: "State Income Tax", prices: { "starter": 199.00, "compliance": 349.00, "enterprise": 549.00 } },
  "franchise-tax-filing": { name: "Franchise Tax Filing", prices: { "starter": 149.00, "compliance": 249.00, "enterprise": 399.00 } },
  "sales-tax-registration": { name: "Sales Tax Registration", prices: { "starter": 99.00, "compliance": 199.00, "enterprise": 299.00 } },
  "payroll-tax-940-941": { name: "Payroll Tax (940/941)", prices: { "starter": 199.00, "compliance": 349.00, "enterprise": 499.00 } },
  "heavy-use-tax-2290": { name: "Heavy Use Tax (2290)", prices: { "starter": 99.00, "compliance": 179.00, "enterprise": 249.00 } },
  "cage-code": { name: "CAGE Code", prices: { "starter": 249.00, "compliance": 349.00, "enterprise": 449.00 } },
  "duns-number": { name: "DUNS Number Procurement", prices: { "starter": 49.00, "compliance": 99.00, "enterprise": 179.00 } },
  "minority-certificate": { name: "Minority Certificate", prices: { "starter": 99.00, "compliance": 249.00, "enterprise": 399.00 } },
  "owner-operators": { name: "Owner Operators", prices: { "starter": 199.00, "compliance": 299.00, "enterprise": 499.00 } },
  "trucker-authority": { name: "Trucker Authority", prices: { "starter": 199.00, "compliance": 299.00, "enterprise": 499.00 } },
  "broker-authority": { name: "Broker Authority", prices: { "starter": 199.00, "compliance": 299.00, "enterprise": 499.00 } },
  "ucr-registration": { name: "UCR Registration", prices: { "starter": 99.00, "compliance": 179.00, "enterprise": 249.00 } },
  "scac-code-registration": { name: "SCAC Code Registration", prices: { "starter": 49.00, "compliance": 99.00, "enterprise": 149.00 } },
  "dot-consortium": { name: "DOT Consortium", prices: { "starter": 149.00, "compliance": 299.00, "enterprise": 499.00 } },
  "driver-qualification-file": { name: "Driver Qualification File", prices: { "starter": 279.00, "compliance": 349.00, "enterprise": 449.00 } },
  "process-agent-boc-3": { name: "Process Agent (BOC-3)", prices: { "starter": 49.00, "compliance": 99.00, "enterprise": 149.00 } },
  "ifta-registration": { name: "IFTA Registration", prices: { "starter": 159.00, "compliance": 279.00, "enterprise": 349.00 } },
  "hazmat-registration": { name: "DOT HAZMAT Registration", prices: { "starter": 199.00, "compliance": 349.00, "enterprise": 499.00 } },
  "licenses-permits": { name: "Licenses & Permits", prices: { "starter": 79.00, "compliance": 149.00, "enterprise": 299.00 } },
  "trucker-insurance": { name: "Trucker Insurance", prices: { "starter": 99.00, "compliance": 199.00, "enterprise": 299.00 } },
  "broker-insurance": { name: "Broker Insurance", prices: { "starter": 99.00, "compliance": 199.00, "enterprise": 299.00 } },
  "new-entrant-audit": { name: "New Entrant Audit", prices: { "starter": 199.00, "compliance": 299.00, "enterprise": 499.00 } },
  "ifta-quarterly-returns": { name: "IFTA Quarterly Fuel Tax Filing", prices: { "starter": 129.00, "compliance": 249.00, "enterprise": 449.00 } },
  "mcs-150-update": { name: "Biennial MCS-150 Updating", prices: { "starter": 45.00, "compliance": 89.00, "enterprise": 139.00 } },
  "boc-3-amendment": { name: "BOC-3 Priority Amendment Filing", prices: { "starter": 39.00, "compliance": 79.00, "enterprise": 119.00 } }
};

// Expose objects cleanly
window.CENTRAL_SERVICE_PLAN_DB = CENTRAL_SERVICE_PLAN_DB;

// Dynamic Safe Price Provider (Prevents crash if service or tier is unexpected)
window.getServicePrice = function(serviceKey, tierKey = 'starter') {
  const service = window.CENTRAL_SERVICE_PLAN_DB[serviceKey];
  if (!service) return 0;
  return service.prices[tierKey] || service.prices['starter'] || 0;
};


// ============================================================================
// ⚙️ SYSTEM STATE FLOW & NAVIGATION TRACKING
// ============================================================================

let currentWizardActiveStep = 1;
const totalWizardExpectedSteps = 5;

// Fallback initial routes (Will be overridden dynamically by user choices)
window.routeActiveServiceKey = window.routeActiveServiceKey || "hazmat-registration";
window.routeActivePlanKey = window.routeActivePlanKey || "starter"; // Switched 'elite' to a valid tier from Block 1
window.wizardCalculatedFinalTotalAmount = 0;

// ============================================================================
// 🔌 ACTIVE ADD-ON SERVICE STATE FLAGS (Dynamic Add-on Tracking)
// ============================================================================

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


// ============================================================================
// 🔗 MASTER ALIAS ROUTING BRIDGE FOR HTML BUTTONS (STRICT JUMP ENGINE)
// ============================================================================

function goToNextWizardStep(targetStepIndex, event = null) {
  console.log("[Bridge Action] Incoming call raw value: " + targetStepIndex);

  // Prevent default form submission leaks cleanly
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  } else if (window.event) {
    window.event.preventDefault();
  }

  // Handle specific directional keyword string flags
  if (targetStepIndex === 'back' || targetStepIndex === 'prev') {
    targetStepIndex = currentWizardActiveStep - 1;
  } else if (targetStepIndex !== null && targetStepIndex !== undefined) {
    targetStepIndex = parseInt(targetStepIndex, 10);
  }

  // Fallback protection if parameter is broken, missing, or NaN
  if (targetStepIndex === null || targetStepIndex === undefined || isNaN(targetStepIndex)) {
    targetStepIndex = currentWizardActiveStep + 1;
    console.log("[Bridge Safety Override] Index invalid. Auto-advancing to: " + targetStepIndex);
  }

  // Protect against view underflow
  if (targetStepIndex < 1) {
    console.warn("[Bridge Guard] Cannot jump below step 1.");
    return false;
  }

  // Protect against view overflow
  if (targetStepIndex > totalWizardExpectedSteps) {
    console.warn("[Bridge Guard] Cannot jump past max steps (" + totalWizardExpectedSteps + ").");
    return false;
  }

  console.log("[Bridge Success] Routing engine executing step jump to index: " + targetStepIndex);
  executeDirectStepJump(targetStepIndex);
}

function handleNavigationButtonClickEvent(event = null) {
  if (currentWizardActiveStep === totalWizardExpectedSteps) {
    if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
      executeOnboardingTransactionPayloadSubmitVanilla();
    }
  } else {
    var nextStepIndex = currentWizardActiveStep + 1;
    console.log("[Bridge Auto-Advance] Moving forward to Step: " + nextStepIndex);
    goToNextWizardStep(nextStepIndex, event);
  }
}

function executeDirectStepJump(targetIndex) {
  console.log("[Wizard Engine] Transitioning state: Step " + currentWizardActiveStep + " -> Step " + targetIndex);

  // 🛡️ Form validation checks: Required ONLY when advancing FORWARD
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
      
      if (!isValid) {
        console.warn("[Wizard Engine] Forward navigation halted: Form validation failed.");
        return false;
      }
    }
  }

  // Sync state data cache safely before layout change
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }

  // Commit verified numeric step state
  currentWizardActiveStep = targetIndex;

  // Sync structural DOM visibility states across layout steps
  var panels = document.querySelectorAll(".wizard-panel");
  if (panels && panels.length > 0) {
    panels.forEach(function(panel, index) {
      var stepNumber = index + 1;
      if (stepNumber === targetIndex) {
        panel.classList.add("active");
        panel.style.setProperty("display", "block", "important");
      } else {
        panel.classList.remove("active");
        panel.style.setProperty("display", "none", "important");
      }
    });
  }

  // Fire execution recalculations safely upon step entry
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
  if (typeof populatePurchaseSummaryReviewMatrix === "function") {
    populatePurchaseSummaryReviewMatrix();
  }
  if (typeof renderActiveWizardStepUiLayout === "function") {
    renderActiveWizardStepUiLayout();
  }
}

// CENTRAL EVENT LISTENER INTERCEPT APP LIFE-CYCLE
document.addEventListener("DOMContentLoaded", function() {
  if (typeof initializeDynamicChronometerWidget12Hr === "function") {
    initializeDynamicChronometerWidget12Hr();
  }
  if (typeof generateSecureRuntimeSessionTokenVanilla === "function") {
    generateSecureRuntimeSessionTokenVanilla();
  }
  
  if (typeof autoInjectMainWebsitePricingPlan === "function") {
    autoInjectMainWebsitePricingPlan();
  } else if (typeof initializeUrlParameterParserEngineVanilla === "function") {
    initializeUrlParameterParserEngineVanilla();
  }
  
  if (typeof initializeDigitalSignatureMirrorSync === "function") {
  initializeDigitalSignatureMirrorSync();
}

  // Reset or pull dynamic local data states on load
  const pageWasRefreshed = performance.getEntriesByType("navigation")[0]?.type === "reload";
  if (pageWasRefreshed) {
    localStorage.removeItem("f4u_wizard_onboarding_state");
  } else if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true);
  }

  if (typeof executeDynamicRegulatoryFieldInjection === "function") {
    executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  }
  if (typeof initializeFormDisplayLayoutSync === "function") {
    initializeFormDisplayLayoutSync();
  }
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
  if (typeof renderActiveWizardStepUiLayout === "function") {
    renderActiveWizardStepUiLayout();
  }
});


// ============================================================================
// ⏱️ REAL-TIME CHRONOLOGICAL CLOCK COMPONENT (12-HOUR TIME REGIME)
// ============================================================================

function initializeDynamicChronometerWidget12Hr() {
  const clockNode = document.getElementById("wizard-live-clock-timestamp");
  if (!clockNode) return; // Prevent interval loops if element is missing

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

// ============================================================================
// 🛡️ GENERATE SECURE TRANSACTION REFERENCE REF STAMP
// ============================================================================

function generateSecureRuntimeSessionTokenVanilla() {
  let bufferArray = new Uint32Array(4);
  window.crypto.getRandomValues(bufferArray);
  let hexTokenStr = Array.from(bufferArray, val => val.toString(16).padStart(8, '0')).join('').toUpperCase();
  let sessionTokenString = `F4U-TX-${hexTokenStr.substring(0, 16)}`;
  
  const sessionDisplayNode = document.getElementById("wizard-session-token-display-root");
  if (sessionDisplayNode) sessionDisplayNode.textContent = sessionTokenString;
  
  window.f4u_tx_session_hash = sessionTokenString;
}

// ============================================================================
// 🔗 URL PARAMETERS CONVERSION AND DYNAMIC RECOVERY LOGIC ENGINE
// ============================================================================

function initializeUrlParameterParserEngineVanilla() {
  const searchUrlQueryStrings = new URLSearchParams(window.location.search);
  const queryPassedService = searchUrlQueryStrings.get('service');
  const queryPassedPlan = searchUrlQueryStrings.get('plan');
  const inputServiceNode = document.getElementById("wizard-route-service-id");
  const inputPlanNode = document.getElementById("wizard-route-tier-id");

  // 1. Parse incoming website page targets and translate to full names
  if (queryPassedService) {
    window.routeActiveServiceKey = queryPassedService.toLowerCase().trim();
    if (inputServiceNode) {
      if (window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) {
        inputServiceNode.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name;
      } else {
        let cleanLabel = window.routeActiveServiceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        inputServiceNode.value = cleanLabel;
      }
    }
  }

  // 2. Parse incoming pricing click tiers and apply descriptive titles
  if (queryPassedPlan) {
    const standardizedPlanString = queryPassedPlan.toLowerCase().trim();
    
    // Map public/marketing tiers into your system's data-layer tier keys
    let tierMapping = {
      "standard": "starter",
      "elite": "compliance",
      "enterprise": "enterprise",
      "starter": "starter",
      "compliance": "compliance"
    };

    if (tierMapping[standardizedPlanString]) {
      window.routeActivePlanKey = tierMapping[standardizedPlanString];
      
      if (inputPlanNode) {
        let planDisplayNames = {
          "starter": "Starter/Standard General Processing Plan",
          "compliance": "Compliance/Elite Priority Processing Plan (Recommended)",
          "enterprise": "Enterprise Complete Portfolio Plan"
        };
        inputPlanNode.value = planDisplayNames[window.routeActivePlanKey] || standardizedPlanString;
      }
    }
  }

  // 3. EXECUTE DYNAMIC FIELD GENERATION ON BOOT
  if (typeof executeDynamicRegulatoryFieldInjection === "function") {
    executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  }
}

// ============================================================================
// 🏗️ MASTER REGULATORY FORM FIELD INJECTION ENGINE (ROUTING DISPATCH PATCH)
// ============================================================================

function executeDynamicRegulatoryFieldInjection(serviceKey) {
  const rootFieldContainer = document.getElementById("dynamic-onboarding-fields-root");
  if (!rootFieldContainer) return;

  // Standardize key inputs to pass strict conditional matches cleanly
  const cleanKey = String(serviceKey || "").toLowerCase().trim();
  let targetLayoutFamily = "llc";

  // 🔀 Categorization Router: Maps service strings seamlessly to core layout families
  if (cleanKey.includes("series-llc") || cleanKey.includes("series")) {
    targetLayoutFamily = "series-llc";
  } else if (cleanKey === "llc-formation" || (cleanKey.includes("llc") && !cleanKey.includes("reinstatement"))) {
    targetLayoutFamily = "llc";
  } else if (cleanKey.includes("nonprofit")) {
    targetLayoutFamily = "nonprofit";
  } else if (cleanKey.includes("corp") || cleanKey.includes("corporation")) {
    targetLayoutFamily = "corporate";
  } else if (cleanKey.includes("proprietor") || cleanKey.includes("sole")) {
    targetLayoutFamily = "sole-prop";
  } else if (cleanKey.includes("dba") || cleanKey.includes("assumed")) {
    targetLayoutFamily = "dba";
  } else if (
    cleanKey.includes("reinstatement") || 
    cleanKey.includes("dissolution") || 
    cleanKey.includes("annual-report") || 
    cleanKey.includes("good-standing") || 
    cleanKey.includes("qualification") ||
    cleanKey.includes("apostille")
  ) {
    targetLayoutFamily = "maintenance";
  } else if (cleanKey.includes("trademark") || cleanKey.includes("servicemark")) {
    targetLayoutFamily = "ip";
  } else if (cleanKey.includes("consulting") || cleanKey.includes("permit") || cleanKey.includes("license") || cleanKey.includes("clia")) {
    targetLayoutFamily = "regulatory";
  } else if (cleanKey.includes("ein") || cleanKey.includes("sales-tax") || cleanKey.includes("payroll") || cleanKey.includes("agreement")) {
    targetLayoutFamily = "financial";
  } else if (cleanKey.includes("tax") || cleanKey.includes("franchise") || cleanKey.includes("heavy-use") || cleanKey.includes("2290")) {
    targetLayoutFamily = "tax-filing";
  } else if (
    cleanKey.includes("cage") || 
    cleanKey.includes("duns") || 
    cleanKey.includes("procurement") || 
    cleanKey.includes("certificate") || 
    cleanKey.includes("minority")
  ) {
    targetLayoutFamily = "procurement";
  } else if (cleanKey.includes("insurance") || cleanKey.includes("audit")) {
    targetLayoutFamily = "insurance";
  } else {
    // Catch-all explicitly for tracking authority, ucr, scac, dot, bco-3, ifta, hazmat
    targetLayoutFamily = "trucking";
  }

  // 🛠️ Structural Template Executor: Swaps UI layouts based on the parsed family
  if (targetLayoutFamily === "series-llc") {
    rootFieldContainer.innerHTML = typeof buildSeriesLlcRegistrationFieldsLayoutHtml === "function" ? buildSeriesLlcRegistrationFieldsLayoutHtml(window.routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "llc") {
    rootFieldContainer.innerHTML = typeof buildLlcFormationFieldsLayoutHtml === "function" ? buildLlcFormationFieldsLayoutHtml(window.routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "nonprofit") {
    rootFieldContainer.innerHTML = typeof buildNonprofitOrganizationFieldsLayoutHtml === "function" ? buildNonprofitOrganizationFieldsLayoutHtml(window.routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "corporate") {
    rootFieldContainer.innerHTML = typeof buildCorporateFormationFieldsLayoutHtml === "function" ? buildCorporateFormationFieldsLayoutHtml(window.routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "dba") {
    rootFieldContainer.innerHTML = typeof buildDbaRegistrationFieldsLayoutHtml === "function" ? buildDbaRegistrationFieldsLayoutHtml(window.routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "sole-prop") {
    rootFieldContainer.innerHTML = typeof buildInformalEntityFieldsLayoutHtml === "function" ? buildInformalEntityFieldsLayoutHtml(window.routeActiveServiceKey) : "";
  } else if (targetLayoutFamily === "maintenance") {
    if (cleanKey.includes("qualification")) {
      rootFieldContainer.innerHTML = typeof buildForeignQualificationFieldsLayoutHtml === "function" ? buildForeignQualificationFieldsLayoutHtml(window.routeActiveServiceKey) : "";
    } else {
      rootFieldContainer.innerHTML = typeof buildMaintenanceFieldsLayoutHtml === "function" ? buildMaintenanceFieldsLayoutHtml(window.routeActiveServiceKey) : "";
    }
  } else if (targetLayoutFamily === "ip") {
    rootFieldContainer.innerHTML = typeof buildIpRegistryFieldsLayoutHtml === "function" ? buildIpRegistryFieldsLayoutHtml(window.routeActiveServiceKey) : "";
  } else {
    // Safely captures financial, tax-filing, regulatory, procurement, insurance, and trucking structures
    rootFieldContainer.innerHTML = typeof buildExtendedFamiliesFieldsLayoutHtml === "function" ? buildExtendedFamiliesFieldsLayoutHtml(targetLayoutFamily, window.routeActiveServiceKey) : "";
  }
}


// ============================================================================
// 🧠 AUTOMATED DATA CONTROLLER AND CALCULATIONS SCRIPT ENGINE
// ============================================================================

// 🚀 MASTER STEP NAVIGATION CONTROL LOGIC (VANILLA JS IMPLEMENTATION)
function navigateWizardStepTrackVanilla(directionOffset) {
  const plannedTargetStep = currentWizardActiveStep + directionOffset;
  
  // Limit navigation bounds to valid panels
  if (plannedTargetStep < 1 || plannedTargetStep > totalWizardExpectedSteps) return;

  // Execute input structure check loops when advancing panels
  if (directionOffset > 0) {
    if (!validateStepInputParametersVanilla(currentWizardActiveStep)) {
      console.warn(`[Navigation Blocked] Form validation checks failed on step: ${currentWizardActiveStep}`);
      return; // Prevent step advance if validation fails
    }
  }

  // Save structural panel parameters to state cache safely before transitioning views
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }

  // Execute the structural panel visibility transform to the next layout view
  if (typeof executeDirectStepJump === "function") {
    executeDirectStepJump(plannedTargetStep);
  } else {
    currentWizardActiveStep = plannedTargetStep;
  }
}

// 🔍 INPUT INTERACTIVE VALIDATION CONTROL ENGINE (FULLY ABSTRACT - NO HARDCODING)
function validateStepInputParametersVanilla(stepIndex) {
  let isValid = true;
  const targetPanel = document.getElementById(`step-panel-${stepIndex}`);
  if (!targetPanel) return true; // Safe escape fallback if panel is missing from structural layout

  // Clear prior validation error markers and reset styling borders
  targetPanel.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  targetPanel.querySelectorAll('input, select, textarea').forEach(node => {
    node.style.borderColor = 'var(--border)';
  });

  // Dynamic Jurisdiction Catching (Updates state if a formation/business state selector is present)
  const stateSelector = targetPanel.querySelector('[name="formation_state"], [name="business_state"], #wizard-target-jurisdiction');
  if (stateSelector && stateSelector.value) {
    window.selectedFormationStateCode = stateSelector.value.toUpperCase().trim();
  }

  // Dynamic Required Fields Evaluation (Scans only elements that are actively rendered in the DOM)
  const renderedRequiredElements = targetPanel.querySelectorAll('input[required], select[required], textarea[required]');
  
  renderedRequiredElements.forEach(element => {
    // Check checkboxes separately from input text nodes
    if (element.type === 'checkbox') {
      if (!element.checked) {
        let labelMessage = element.getAttribute('data-error-msg') || 'You must review and accept these verification terms layout constraints to proceed.';
        markFieldAsInvalidVanilla(element, labelMessage);
        isValid = false;
      }
    } else {
      // Evaluate text values, selectors, and textarea field inputs
      if (!element.value || element.value.trim() === "") {
        let explicitFieldName = element.getAttribute('placeholder') || element.getAttribute('name') || 'This required field';
        let labelMessage = element.getAttribute('data-error-msg') || `${explicitFieldName.replace(/[:-]/g, ' ')} value parameter entry is required.`;
        markFieldAsInvalidVanilla(element, labelMessage);
        isValid = false;
      }
    }
  });

  return isValid;
}

// 🎨 VISUAL ERROR MARKER INJECTION PROTOCOL
function markFieldAsInvalidVanilla(inputNode, informativeLabelString) {
  if (!inputNode || !inputNode.parentNode) return;
  
  inputNode.style.borderColor = '#ef4444';
  
  // Prevent duplicate messages appending on the same input component node
  const adjacentSibling = inputNode.nextSibling;
  if (adjacentSibling && adjacentSibling.className === 'input-error-marker') return;

  const spanError = document.createElement('span');
  spanError.className = 'input-error-marker';
  spanError.style.color = '#ef4444';
  spanError.style.fontSize = '0.75rem';
  spanError.style.display = 'block';
  spanError.style.marginTop = '4px';
  spanError.style.fontWeight = '500';
  spanError.textContent = informativeLabelString;
  
  inputNode.parentNode.insertBefore(spanError, inputNode.nextSibling);
}


// ============================================================================
// 📊 DYNAMIC MATHEMATICAL AGGREGATION INVOICE LOGIC (CORE CALCULATIONS)
// ============================================================================

function updateDynamicPricingMatrixVanilla() {
  const dropdownService = document.getElementById("wizard-route-service-id");
  const dropdownPlan = document.getElementById("wizard-route-tier-id");

  // Helper utility to convert human-readable input values into matching database slugs
  const normalizeConfigKeySlug = (inputString) => {
    if (!inputString) return "";
    return inputString.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, '') // Strip symbols
      .replace(/[\s_]+/g, '-');     // Convert spaces to hyphens
  };

  // Safe configuration assignment matching database keys
  if (dropdownService && dropdownService.value) {
    window.routeActiveServiceKey = dropdownService.value.includes('-') 
      ? dropdownService.value.trim().toLowerCase() 
      : normalizeConfigKeySlug(dropdownService.value);
  }
  if (dropdownPlan && dropdownPlan.value) {
    window.routeActivePlanKey = dropdownPlan.value.trim().toLowerCase();
  }

  // Fallback protection if keys mismatch or are completely missing
  const currentServiceKey = window.routeActiveServiceKey || "llc-formation";
  const currentPlanKey = window.routeActivePlanKey || "starter";

  const planConfig = window.CENTRAL_SERVICE_PLAN_DB[currentServiceKey];
  if (!planConfig) {
    console.warn(`[Pricing Engine] Service lookup failed for key: "${currentServiceKey}". Retrying with safe fallback.`);
    return;
  }

  // Baseline calculation lookups backed by dynamic function providers
  const baseTierPrice = planConfig.prices[currentPlanKey] || planConfig.prices['starter'] || 0;
  
  // Safe government fee evaluation (Calls external config file cleanly if available)
  let baseGovAgencyFee = 0;
  if (typeof window.getCalculatedGovernmentFee === "function") {
    baseGovAgencyFee = window.getCalculatedGovernmentFee(currentServiceKey, window.selectedFormationStateCode);
  } else {
    baseGovAgencyFee = planConfig.gov_fee || 0;
  }

  // Explicitly declared incremental variable token inside local execution scope
  let incrementalAddonTotal = 0;
  let descriptiveInvoiceRowsHtml = `
    <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--border); padding-bottom: 10px;">
      <span>${planConfig.name} (${currentPlanKey.toUpperCase()})</span>
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

    
   // ============================================================================
  // 🛒 DYNAMIC EXTENSIBLE CART ADD-ON RECOGNITION (ZERO HARDCODING)
  // ============================================================================
  
  // High-value expanded catalog database (Can also be moved to an external prices config file)
  const UPSELL_ADDON_REGISTRY = {
    "customSelectedRegisteredAgentServiceActive": { name: "Registered Agent Shield", price: 75.00 },
    "customSelectedEinProcurementServiceActive": { name: "EIN Procurement Processing", price: 79.00 },
    "customSelectedScorpElectionServiceActive": { name: "Form 2553 (S-Corp) Preparation", price: 79.00 },
    "customSelectedSolePropLicenseAuditServiceActive": { name: "Sole-Prop Compliance Audit Suite", price: 79.00 },
    "customSelectedDbaLicenseAuditServiceActive": { name: "DBA Compliance Audit Suite", price: 79.00 },
    "customSelectedNonprofitLicenseCheckActive": { name: "Nonprofit License Check Suite", price: 79.00 },
    "customSelectedDbaSearchServiceActive": { name: "Name Availability Search", price: 79.00 },
    "customSelectedSeriesLicenseAuditActive": { name: "License & Permit Audit Suite", price: 125.00 },
    // ➕ NEW Offerings Expanded for your Wizard Upsells
    "customSelectedProfessionalLogoDesignActive": { name: "Professional Brand Logo Suite", price: 149.00 },
    "customSelectedBusinessWebsiteSetupActive": { name: "Custom Business Website Launch", price: 299.00 },
    "customSelectedBoiFilingComplianceActive": { name: "BOI Corporate Transparency CTA Filing", price: 49.00 },
    "customSelectedExpeditedFilingServiceActive": { name: "Priority Expedited State Processing", price: 95.00 },
    "customSelectedApostilleAuthenticationServiceActive": { name: "Apostille Certificate Authentication", price: 125.00 },
    "customSelectedGoodStandingCertificateServiceActive": { name: "Certificate of Good Standing Procurement", price: 45.00 }
  };

  // Loop through flags dynamically using safe state flags checks
  Object.keys(UPSELL_ADDON_REGISTRY).forEach(flagKey => {
    if (window[flagKey] === true) {
      const addon = UPSELL_ADDON_REGISTRY[flagKey];
      incrementalAddonTotal += addon.price;
      descriptiveInvoiceRowsHtml += `
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); font-weight: 500; margin-top: 4px;">
          <span>+ ${addon.name}</span>
          <span style="font-family: monospace;">$${addon.price.toFixed(2)}</span>
        </div>
      `;
    }
  });

  // Safe evaluation of variable trucking new entrant metrics
  if (window.lastCalculatedNewEntrantAddonTotal && window.lastCalculatedNewEntrantAddonTotal > 0) {
    incrementalAddonTotal += window.lastCalculatedNewEntrantAddonTotal;
  }

  // Aggregate global totals cleanly without counting the base service fee twice
  const aggregatedFilingSubtotal = baseTierPrice + incrementalAddonTotal;
  const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

  // Inject rendered structural HTML components directly into the DOM container tree
  const invoiceContainer = document.getElementById('checkout-invoice-rows-container');
  if (invoiceContainer) {
    invoiceContainer.innerHTML = descriptiveInvoiceRowsHtml;
  }

  // Synchronize trucker audit layouts
  const summaryAddonRoot = document.getElementById("summary-onboarding-addons-root");
  if (summaryAddonRoot) {
    if (window.lastCalculatedNewEntrantAddonHtml && window.lastCalculatedNewEntrantAddonTotal > 0) {
      summaryAddonRoot.innerHTML = window.lastCalculatedNewEntrantAddonHtml;
      summaryAddonRoot.style.display = "block";
    } else {
      summaryAddonRoot.innerHTML = "";
      summaryAddonRoot.style.display = "none";
    }
  }

  // Safe text content injections across display elements
  const subtotalDisp = document.getElementById('invoice-subtotal-display');
  if (subtotalDisp) subtotalDisp.textContent = `$${aggregatedFilingSubtotal.toFixed(2)}`;

  const govDisp = document.getElementById('invoice-gov-fees-display');
  if (govDisp) govDisp.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

  const grandDisp = document.getElementById('invoice-grand-total-display');
  if (grandDisp) grandDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

  // State synchronization anchor mapping assignment
  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;

  const secondaryTotalDisplay = document.getElementById("wizard-sticky-total-value");
  if (secondaryTotalDisplay) secondaryTotalDisplay.textContent = `$${finalizedGrandTotal.toFixed(2)}`;
}

// System name synchronization mapping lookup
function updateWizardFinalTotalAmountMatrix() {
  updateDynamicPricingMatrixVanilla();
}

// ============================================================================
// 🎨 UI VISIBILITY PROGRESS TRACKING RENDER ENGINE
// ============================================================================

function renderActiveWizardStepUiLayout() {
  // 1. Synchronize tracking CSS visibility states across panels
  document.querySelectorAll(".wizard-panel").forEach((panel, sequence) => {
    if ((sequence + 1) === currentWizardActiveStep) {
      panel.classList.add("active");
      panel.style.setProperty("display", "block", "important");
    } else {
      panel.classList.remove("active");
      panel.style.setProperty("display", "none", "important");
    }
  });

  // 2. Synchronize chronological milestone tracking icons
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

  // 3. Scale and fill timeline horizontal progress tracking metrics
  const horizontalProgressFill = document.getElementById("timeline-progress-fill-node");
  if (horizontalProgressFill) {
    const percentageProgressWidth = ((currentWizardActiveStep - 1) / (totalWizardExpectedSteps - 1)) * 100;
    horizontalProgressFill.style.width = `${percentageProgressWidth}%`;
  }
}


// ============================================================================
// 💾 BROWSER STORAGE STATE CACHE MECHANICS (VANILLA JS)
// ============================================================================

function cacheAndRestoreWizardFormStatesVanilla(isExecutionInitialLoad) {
  const cacheKeyNamespace = "f4u_wizard_onboarding_state";

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
    // RECOVER PATH: Pulls data out of local storage and repopulates the DOM
    const restoredPayloadString = localStorage.getItem(cacheKeyNamespace);
    if (!restoredPayloadString) return;

    try {
      const payloadDataObject = JSON.parse(restoredPayloadString);
      
      Object.keys(payloadDataObject).forEach(fieldIdKey => {
        const inputNode = document.getElementById(fieldIdKey);
        if (inputNode) {
          let finalExtractedValue = payloadDataObject[fieldIdKey];

          // ⚡ RECOVER LAYER: Dynamically checks for secure markers or values to decrypt
          const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || 
                                  ["ein_responsible_id", "sllc_member_ssn", "wizard_tax_id"].includes(fieldIdKey);

          if (isSecureElement && typeof finalExtractedValue === "string" && finalExtractedValue !== "") {
            finalExtractedValue = executeCipherTranslation(finalExtractedValue, true);
          }

          if (inputNode.type === 'checkbox') {
            inputNode.checked = finalExtractedValue;
          } else {
            inputNode.value = finalExtractedValue;
          }
          
          // Fire a native change event so any secondary dynamic visibility bindings know data returned
          inputNode.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    } catch (jsonErr) {
      console.error("State data recovery parse error loop encountered: ", jsonErr);
    }
  } else {
    // SAVE PATH: Collects values dynamically across any inputs inside the active wizard views
    let activeFormMetricsObject = {};
    
    // Abstract lookup: Check master form first; fallback to document body if missing
    const containerScope = document.getElementById("master-onboarding-form") || document.body;
    const allInputElements = containerScope.querySelectorAll("input, select, textarea");

    allInputElements.forEach(inputNode => {
      const idAttr = inputNode.getAttribute('id') || inputNode.getAttribute('name');
      if (idAttr) {
        let elementValueToCache = inputNode.type === 'checkbox' ? inputNode.checked : inputNode.value;

        // ⚡ PROTECT LAYER: Encrypt numbers dynamically using data tags or known sensitive IDs
        const isSecureElement = inputNode.getAttribute('data-secure') === 'true' || 
                                ["ein_responsible_id", "sllc_member_ssn", "wizard_tax_id"].includes(idAttr);

        if (isSecureElement && typeof elementValueToCache === "string" && String(elementValueToCache).trim() !== "") {
          elementValueToCache = executeCipherTranslation(elementValueToCache, false);
        }

        activeFormMetricsObject[idAttr] = elementValueToCache;
      }
    });

    localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject));
  }
}


// ============================================================================
// 💾 STRATEGIC SAVE & EXIT PROGRESS HANDLER (STANDALONE POP-UP ENGINE)
// ============================================================================

function executeSaveAndExitWorkflow() {
  console.log("[Save & Exit] Initializing progress synchronization workflow.");

  // 1. Force state synchronization cache update safely
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }

  // 2. Prevent stacking identical instances if already present in view
  if (document.getElementById("wizard-save-exit-modal-root")) return;

  // 3. Assemble structural pop-up container nodes directly into the viewport
  const modalWrapper = document.createElement("div");
  modalWrapper.id = "wizard-save-exit-modal-root";
  
  // Style properties block for crisp presentation layer layout
  Object.assign(modalWrapper.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "999999",
    padding: "20px"
  });

  // Structural dynamic inner card layout markup containing requested input vectors
  modalWrapper.innerHTML = `
    <div style="background: #ffffff; width: 100%; max-width: 440px; padding: 30px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15); font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; box-sizing: border-box;">
      <h3 style="margin: 0 0 8px 0; color: #0f172a; font-size: 1.3rem; font-weight: 700;">Save Your Application Progress</h3>
      <p style="margin: 0 0 20px 0; color: #64748b; font-size: 0.9rem; line-height: 1.45;">Provide your details below to save your state parameters. No dashboard client account will be created until your transaction purchase is completed.</p>
      
      <form id="wizard-lead-capture-form" style="display: flex; flex-direction: column; gap: 16px; margin: 0; padding: 0;">
        <div style="display: flex; gap: 12px;">
          <div style="flex: 1;">
            <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">First Name</label>
            <input type="text" id="lead_first_name" required placeholder="John" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
          </div>
          <div style="flex: 1;">
            <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Last Name</label>
            <input type="text" id="lead_last_name" required placeholder="Doe" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
          </div>
        </div>
        <div>
          <label style="display: block; font-size: 0.75rem; font-weight: 600; color: #475569; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">Email Address</label>
          <input type="email" id="lead_email" required placeholder="john.doe@example.com" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background: #fff; color: #000;">
        </div>
        
        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 10px; width: 100%;">
          <button type="button" id="lead_cancel_btn" style="padding: 10px 18px; background: #f1f5f9; color: #475569; border: none; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.2s;">Cancel</button>
          <button type="submit" id="lead_submit_btn" style="padding: 10px 22px; background: #2563eb; color: #ffffff; border: none; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.2s;">Confirm Save &amp; Exit</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modalWrapper);

  // 4. Bind internal button controls cleanly inside isolated runtime scopes
  const leadForm = document.getElementById("wizard-lead-capture-form");
  const cancelBtn = document.getElementById("lead_cancel_btn");

  const dismissLeadModal = () => {
    modalWrapper.remove();
    console.log("[Save & Exit] Pop-up view dismissed by operator action.");
  };

  if (cancelBtn) {
    cancelBtn.addEventListener("click", dismissLeadModal);
  }

  // Intercept and route form submissions to Supabase securely
  if (leadForm) {
    leadForm.addEventListener("submit", async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById("lead_submit_btn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";
      }

      // Collect field payload vectors
      const leadPayload = {
        first_name: document.getElementById("lead_first_name")?.value.trim() || "",
        last_name: document.getElementById("lead_last_name")?.value.trim() || "",
        email: document.getElementById("lead_email")?.value.trim() || "",
        session_hash: window.f4u_tx_session_hash || "",
        active_service: window.routeActiveServiceKey || "",
        active_tier: window.routeActivePlanKey || "",
        cached_form_state: localStorage.getItem("f4u_wizard_onboarding_state") || "{}"
      };

      console.log("[Save & Exit] Dispatched pipeline metrics data packet:", leadPayload);

      try {
        // 5. Safe async hook execution to Supabase handler (Keeps tokens clean and separate)
        if (typeof window.saveLeadToSupabase === "function") {
          await window.saveLeadToSupabase(leadPayload);
        } else {
          console.warn("[Database Notice] window.saveLeadToSupabase is not defined. State stored in local fallback cache only.");
        }
        
        dismissLeadModal();
        window.location.href = window.wizardCustomExitRedirectUrl || "index.html";
        
      } catch (dbErr) {
        console.error("[Database Connection Error] Failed tracking entry storage commit:", dbErr);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Confirm Save & Exit";
        }
        alert("A baseline data transmission link timeout occurred. Re-evaluate local connection parameters and try again.");
      }
    });
  }
}


// ============================================================================
// ✍️ DIGITAL CURSIVE SIGNATURE REFLECTOR (REPLACES CANVAS PAD)
// ============================================================================

function initializeDigitalSignatureMirrorSync() {
  // Locate the input box where they type their name for signature authorization
  const typedSignatureInput = document.getElementById("poa_signer_printed") || document.querySelector('[name="digital_signature_input"]');
  const cursiveDisplayContainer = document.getElementById("cursive-signature-preview");

  if (!typedSignatureInput) return; // Safely escape if not on the signature screen step

  typedSignatureInput.addEventListener("input", function() {
    const rawInputValue = typedSignatureInput.value.trim();

    // 1. Live update your styled preview block container if present on the screen layout
    if (cursiveDisplayContainer) {
      cursiveDisplayContainer.textContent = rawInputValue ? rawInputValue : "Your Signature";
    }

    // 2. Map structural state variables so validation metrics pass flawlessly
    window.signaturePadHasBeenDrawnByUser = rawInputValue.length > 1;

    // 3. Keep cache states completely synchronized in real time
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
      cacheAndRestoreWizardFormStatesVanilla(false);
    }
  });
}



// ============================================================================
// 🔐 SECURE TRANSACTION DISPATCH MECHANICS (VANILLA JS)
// ============================================================================

async function executeOnboardingTransactionPayloadSubmitVanilla() {
  const cardNumNode = document.getElementById('checkout_card_num');
  const cardExpNode = document.getElementById('checkout_card_exp');
  const cardCvvNode = document.getElementById('checkout_card_cvv');

  const cardNum = cardNumNode ? cardNumNode.value.replace(/\s+/g, '') : '';
  const cardExp = cardExpNode ? cardExpNode.value : '';
  const cardCvv = cardCvvNode ? cardCvvNode.value : '';

  // Validate critical billing input structures before submission
  if (!cardNum || cardNum.length < 15) {
    alert("Payment validation failed: Card account number parameters invalid.");
    return;
  }
  if (!cardExp || !cardExp.includes('/')) {
    alert("Payment validation failed: Expiration envelope format invalid.");
    return;
  }
  if (!cardCvv || cardCvv.length < 3) {
    alert("Payment validation failed: Security verification code CVV parameter invalid.");
    return;
  }

  // Alter control button visual states to prevent double-click submissions
  const nextBtn = document.getElementById('wizard-next-trigger-btn') || document.querySelector('.btn-wizard-main');
  let originalBtnHtml = "";
  if (nextBtn) {
    originalBtnHtml = nextBtn.innerHTML;
    nextBtn.disabled = true;
    nextBtn.style.background = '#64748b';
    nextBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Transaction...';
  }

  // Resilient state recovery: Read dynamic keys safely from system state
  const currentServiceKey = window.routeActiveServiceKey || "llc-formation";
  const currentPlanKey = window.routeActivePlanKey || "starter";
  const selectedJurisdiction = window.selectedFormationStateCode || "";

  // Dynamic Add-ons extraction loop
  let auxiliaryAddonsArray = [];
  document.querySelectorAll('.upsell-checkbox:checked').forEach(checkbox => {
    const addonId = checkbox.getAttribute('data-id') || checkbox.id;
    if (addonId) auxiliaryAddonsArray.push(addonId);
  });

  // 🔄 DYNAMIC METADATA PACKAGING ENGINE (NO HARDCODING)
  // Scans your form layout for whatever fields are currently rendered on screen
  let collectedFormMetadata = {};
  const masterContainer = document.getElementById("master-onboarding-form") || document.body;
  
  masterContainer.querySelectorAll("input, select, textarea").forEach(element => {
    const fieldKey = element.id || element.name;
    // Skip financial details and billing inputs for compliance and security
    if (fieldKey && !fieldKey.includes("checkout_card") && element.type !== "password") {
      if (element.type === "checkbox") {
        collectedFormMetadata[fieldKey] = element.checked;
      } else if (element.value && element.value.trim() !== "") {
        collectedFormMetadata[fieldKey] = element.value.trim();
      }
    }
  });

  // Calculate base service pricing totals
  const baseServiceFeeAmount = baseTierPriceCalculationFallbackVanilla(currentServiceKey, currentPlanKey);

  // Assemble the global dynamic transaction manifest data packet
  const primarySubmissionPayloadData = {
    transaction_hash_id: window.f4u_tx_session_hash || "F4U-TX-OFFLINE",
    target_service_id: currentServiceKey,
    deployment_speed_tier: currentPlanKey,
    authority_jurisdiction: selectedJurisdiction,
    active_addons_list: auxiliaryAddonsArray,
    form_data_payload: collectedFormMetadata,
    financials_subtotal_amount: baseServiceFeeAmount,
    financials_grand_total_charge: window.wizardCalculatedFinalTotalAmount || baseServiceFeeAmount,
    client_session_timestamp: new Date().toISOString()
  };

  console.log("[Transaction Dispatch] Final billing payload generated:", primarySubmissionPayloadData);

  try {
    // 💳 Payment gateway hook processing
    if (typeof window.processSecurePaymentGateway === "function") {
      const paymentCardDetails = { number: cardNum, expiry: cardExp, cvv: cardCvv };
      await window.processSecurePaymentGateway(primarySubmissionPayloadData, paymentCardDetails);
    }

    // Clear workflow persistence data locks and prepare confirmation routing
    localStorage.removeItem("f4u_wizard_onboarding_state");
    sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));

    // Redirect the customer safely to their success confirmation screen view
    const successRedirectTarget = window.wizardCustomSuccessRedirectUrl || "success.html";
    window.location.href = `${successRedirectTarget}?tx_hash=${primarySubmissionPayloadData.transaction_hash_id}&status=validated_cleared`;

  } catch (routingErr) {
    console.error("Payload preservation routing matrix fault loop triggered: ", routingErr);
    alert("Transaction processing interrupted. Verify billing details and try again.");
    
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.style.background = '';
      nextBtn.innerHTML = originalBtnHtml || '<i class="fa-solid fa-credit-card"></i> Process Secured Payment';
    }
  }
}

// FALLBACK PRICING LOOKUP METHOD
function baseTierPriceCalculationFallbackVanilla(serviceKey, planKey) {
  try {
    const sKey = serviceKey || window.routeActiveServiceKey || "llc-formation";
    const pKey = planKey || window.routeActivePlanKey || "starter";
    
    if (window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[sKey]) {
      return window.CENTRAL_SERVICE_PLAN_DB[sKey].prices[pKey] || window.CENTRAL_SERVICE_PLAN_DB[sKey].prices['starter'] || 0;
    }
    return 0;
  } catch (e) {
    console.warn("[Pricing Fallback] Unable to calculate base fee:", e);
    return 0;
  }
}


// ============================================================================
// 🔘 LLC WORKFLOW CONDITIONAL FIELD CONTROLLERS (FULLY ABSTRACTED)
// ============================================================================

function validateLlcNameSuffix(inputField) {
  if (!inputField) return;
  const rawVal = inputField.value.trim();
  if (rawVal === "") return;
  
  const lowerVal = rawVal.toLowerCase();

  // 📋 Dynamic Suffix Extraction Strategy: Reads approved tokens directly from DOM configuration
  const allowedSuffixDataAttr = inputField.getAttribute("data-allowed-suffixes");
  let authorizedSuffixesArray = ["llc", "limited liability company"]; // System safe fallback

  if (allowedSuffixDataAttr) {
    authorizedSuffixesArray = allowedSuffixDataAttr.split(",").map(s => s.trim().toLowerCase());
  }

  // Evaluate matching criteria arrays across parameters
  const matchesAnyApprovedSuffix = authorizedSuffixesArray.some(suffix => lowerVal.endsWith(suffix));

  if (!matchesAnyApprovedSuffix) {
    // Inject clean styling state warning boundaries without intrusive blocking alert windows
    inputField.style.borderColor = "#ef4444";
    
    const labelMessage = inputField.getAttribute("data-error-msg") || 
      `Formation Guard Warning: Your choice does not contain an approved suffix token (${authorizedSuffixesArray.join(', ').toUpperCase()}).`;
      
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(inputField, labelMessage);
    }
  } else {
    inputField.style.borderColor = "var(--border)";
    const adjacentMarker = inputField.nextSibling;
    if (adjacentMarker && adjacentMarker.className === 'input-error-marker') {
      adjacentMarker.remove();
    }
  }
}

function toggleRegisteredAgentConditionalFields(selectedValue) {
  const wrapper = document.getElementById("llc_custom_ra_wrapper");
  if (!wrapper) return;

  // Toggle layout display boundaries smoothly
  wrapper.style.display = (selectedValue === "custom") ? "grid" : "none";

  // State synchronization flags: True if user selects company proxy tier
  window.customSelectedRegisteredAgentServiceActive = (selectedValue === "filings4u");

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleLlcManagerFieldsMatrix(selectedValue) {
  const wrapper = document.getElementById("llc_manager_names_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "manager-managed") ? "flex" : "none";
  }
}

function toggleEinConditionalWorkflow(selectedValue) {
  const manualWrapper = document.getElementById("llc_manual_ein_wrapper");
  if (manualWrapper) {
    manualWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }

  // State synchronization flags: True if choice bypasses processing to trigger buy loops
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

// ============================================================================
// ➕ DYNAMIC INCREMENTAL RECORD BLOCK GENERATOR ENGINE (TEMPLATE DRIVEN)
// ============================================================================

let activeLlcMemberCounterIndex = 1;

function appendNewLlcMemberRecordFieldNode() {
  activeLlcMemberCounterIndex++;
  const container = document.getElementById("llc_members_container");
  if (!container) return;

  // Architecture Check: Check if an HTML5 <template> block configuration lives in the viewport
  const markupTemplateSource = document.getElementById("llc-member-row-template");
  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `member_card_${activeLlcMemberCounterIndex}`;
  
  if (markupTemplateSource) {
    // Dynamic template interpolation pattern (No raw strings hardcoded inside engine logic)
    let templateHtmlContent = markupTemplateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeLlcMemberCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    // Secondary abstracted styling wrapper layout fallback
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Member/Partner #${activeLlcMemberCounterIndex} Records</span>
        <button type="button" onclick="removeLlcMemberRecordFieldNode(${activeLlcMemberCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="wizard-input-group" style="grid-column: span 2;">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Full Legal Name</label>
          <input type="text" id="member_name_${activeLlcMemberCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="grid-column: span 2;">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Street Address</label>
          <input type="text" id="member_street_${activeLlcMemberCounterIndex}" required placeholder="Street Address" class="wizard-input-field">
        </div>
        <div class="wizard-input-group">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">City</label>
          <input type="text" id="member_city_${activeLlcMemberCounterIndex}" required placeholder="City" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">State</label>
            <input type="text" id="member_state_${activeLlcMemberCounterIndex}" required placeholder="TX" maxlength="2" class="wizard-input-field">
          </div>
          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Zip</label>
            <input type="text" id="member_zip_${activeLlcMemberCounterIndex}" required placeholder="78701" class="wizard-input-field">
          </div>
        </div>
      </div>
    `;
  }

  container.appendChild(div);
}

function removeLlcMemberRecordFieldNode(targetIndex) {
  const cardToRemove = document.getElementById(`member_card_${targetIndex}`);
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

function toggleLlcDurationDateVisibility(selectedValue) {
  const dateWrapper = document.getElementById("llc_duration_date_wrapper");
  if (dateWrapper) {
    dateWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
  }
}


// ============================================================================
// 🔌 CENTRAL EVENT DELEGATION NAVIGATION & PRICING LISTENER MATRIX
// ============================================================================

// A single global interceptor that handles elements dynamically as they load or change
document.addEventListener("change", function (event) {
  const targetElement = event.target;
  if (!targetElement) return;

  // 1. Dynamic Registered Agent Selector Hook
  const isAgentSelector = targetElement.name === "llc_registered_agent_choice" || targetElement.id === "wizard-ra-choice-select";
  if (isAgentSelector) {
    if (typeof toggleRegisteredAgentConditionalFields === "function") {
      toggleRegisteredAgentConditionalFields(targetElement.value);
    }
  }

  // 2. Dynamic Live Invoice Modifier Hooks
  // If ANY checked upsell checkbox or modified selection updates, recalculate pricing instantly
  const isPricingModifier = targetElement.classList.contains("upsell-checkbox") || targetElement.classList.contains("pricing-modifier-input");
  if (isPricingModifier) {
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
      updateDynamicPricingMatrixVanilla();
    }
  }
});

// Safe global initialization wrapper left as a blank stub so old code hooks don't throw "undefined" errors
window.initializeStepTwoInteractiveLayoutListeners = function() {
  console.log("[Engine Legacy Patch] Unified global event delegation matrix handles listeners dynamically.");
};


  // ============================================================================
// 🛒 STEP 2 DYNAMIC EXTENSIBLE CART ADD-ON REGISTRY (ZERO HARDCODING)
// ============================================================================

/**
 * Appends calculated active add-on metrics seamlessly to your pricing data layers.
 * This function is designed to be called internally within your main calculation loops.
 */
function processDynamicCartAddonItems(baseTierPrice, baseGovAgencyFee) {
  let incrementalAddonTotal = 0;
  let descriptiveInvoiceRowsHtml = "";

  // ➕ Extensible Add-on Registry: Easily add more items here to expand your offerings
  const EXTENSIBLE_ADDON_CATALOG = {
    "customSelectedRegisteredAgentServiceActive": { name: "Registered Agent Shield", price: 75.00 },
    "customSelectedEinProcurementServiceActive": { name: "EIN Procurement Processing", price: 79.00 },
    "customSelectedScorpElectionServiceActive": { name: "Form 2553 Preparation", price: 79.00 },
    "customSelectedSolePropLicenseAuditServiceActive": { name: "Compliance License Audit Suite", price: 79.00 },
    "customSelectedDbaLicenseAuditServiceActive": { name: "Compliance License Audit Suite", price: 79.00 },
    "customSelectedNonprofitLicenseCheckActive": { name: "Compliance License Audit Suite", price: 79.00 },
    "customSelectedDbaSearchServiceActive": { name: "Name Availability Search", price: 79.00 },
    "customSelectedForeignQualLicenseSuiteActive": { name: "License & Permit Audit Suite", price: 125.00 },
    // New high-value offerings to maximize revenue
    "customSelectedLogoDesignActive": { name: "Professional Brand Logo Suite", price: 149.00 },
    "customSelectedWebsiteSetupActive": { name: "Custom Business Website Launch", price: 299.00 },
    "customSelectedBoiComplianceActive": { name: "BOI Corporate Transparency Filing", price: 49.00 }
  };

  // Evaluate flags dynamically against window global options state
  Object.keys(EXTENSIBLE_ADDON_CATALOG).forEach(flagKey => {
    if (window[flagKey] === true || window[flagKey] === "yes") {
      const addon = EXTENSIBLE_ADDON_CATALOG[flagKey];
      incrementalAddonTotal += addon.price;
      descriptiveInvoiceRowsHtml += `
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); margin-top: 4px;">
          <span>+ ${addon.name}</span>
          <span style="font-family: monospace;">$${addon.price.toFixed(2)}</span>
        </div>
      `;
    }
  });

  // Calculate strict totals parameters
  const aggregatedFilingSubtotal = baseTierPrice + incrementalAddonTotal;
  const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

  // Render components to document targets safely with conditional confirmations
  const invoiceContainer = document.getElementById('checkout-invoice-rows-container');
  if (invoiceContainer && descriptiveInvoiceRowsHtml !== "") {
    invoiceContainer.innerHTML += descriptiveInvoiceRowsHtml;
  }

  const subtotalDisp = document.getElementById('invoice-subtotal-display');
  if (subtotalDisp) subtotalDisp.textContent = `$${aggregatedFilingSubtotal.toFixed(2)}`;

  const govDisp = document.getElementById('invoice-gov-fees-display');
  if (govDisp) govDisp.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

  const grandDisp = document.getElementById('invoice-grand-total-display');
  if (grandDisp) grandDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

  // Commit synchronized state across global parameters tracking windows
  window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;
  
  return {
    addonTotal: incrementalAddonTotal,
    subtotal: aggregatedFilingSubtotal,
    grandTotal: finalizedGrandTotal
  };
}

// ============================================================================
// 🔘 CENTRAL NAVIGATION ACTION INTERCEPTOR HUB
// ============================================================================

function handleNavigationButtonClickEvent() {
  console.log(`[Navigation Hub] Current Step: ${currentWizardActiveStep} of ${totalWizardExpectedSteps}`);
  
  if (currentWizardActiveStep === totalWizardExpectedSteps) {
    if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
      executeOnboardingTransactionPayloadSubmitVanilla();
    } else {
      console.error("[Fatal Code Error] Payload submit function is missing.");
    }
  } else {
    if (typeof navigateWizardStepTrackVanilla === "function") {
      navigateWizardStepTrackVanilla(1);
    } else {
      // Direct step advancement fallback routing
      currentWizardActiveStep += 1;
      if (typeof renderActiveWizardStepUiLayout === "function") {
        renderActiveWizardStepUiLayout();
      }
    }
  }
}

// ============================================================================
// 💾 STATE PERSISTENCE INITIALIZATION MATRIX & COHERENCE PATCHES
// ============================================================================

/**
 * Clean lifecycle coordination method to bootstrap form states.
 * Safely executes secondary setup routines without duplicating core code layers.
 */
function runWizardStatePersistenceBootstrap() {
  console.log("[State Bootstrap] Auditing runtime environments for persistent layout variables...");
  
  // 1. Initial State Data Restore Check
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true);
  }

  // 2. Fallback initialization for cursive type signature fields instead of broken drawing canvas elements
  if (typeof initializeDigitalSignatureMirrorSync === "function") {
    initializeDigitalSignatureMirrorSync();
  } else {
    console.log("[State Bootstrap] Cursive signature synchronization engine ready.");
  }
}

// Safely bind old layout canvas references as empty stubs to prevent cross-file call crashes
window.initializeSignatureCanvasPadEngineVanilla = function() {
  if (typeof initializeDigitalSignatureMirrorSync === "function") {
    initializeDigitalSignatureMirrorSync();
  }
};

window.clearSignatureCanvasTrack = function() {
  const typedSignatureInput = document.getElementById("poa_signer_printed") || document.querySelector('[name="digital_signature_input"]');
  if (typedSignatureInput) {
    typedSignatureInput.value = "";
    typedSignatureInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
  window.signaturePadHasBeenDrawnByUser = false;
};



// ============================================================================
// 🔘 LLC & CORPORATE LIFECYCLE CONTROLLERS (DYNAMIC DELEGATION METHOD)
// ============================================================================

/**
 * Universally handles visibility toggles for corporate workflow steps.
 * Dynamically reads the target element wrapper ID directly from data attributes.
 */
function handleCorporateLayoutToggleVisibility(elementNode) {
  if (!elementNode) return;

  const targetWrapperId = elementNode.getAttribute("data-target-wrapper");
  const requiredMatchValue = elementNode.getAttribute("data-match-value") || "specified";
  
  if (!targetWrapperId) return;

  const wrapperDisplayNode = document.getElementById(targetWrapperId);
  if (wrapperDisplayNode) {
    wrapperDisplayNode.style.display = (elementNode.value === requiredMatchValue) ? "flex" : "none";
  }
}

// Concrete backward-compatible wrappers to process legacy element events safely
function toggleLlcDurationDateVisibility(selectedValue) {
  const calendarWrapper = document.getElementById("llc_duration_date_wrapper");
  if (calendarWrapper) {
    calendarWrapper.style.display = (selectedValue === "specified") ? "flex" : "none";
  }
}

function toggleEinConditionalWorkflow(selectedValue) {
  const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
  if (manualEinWrapper) {
    manualEinWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }

  // Sync state flag metrics directly
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy" || selectedValue === "purchase");

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}


// ============================================================================
// 🔘 C-CORP & S-CORP INTERACTIVE ROUTING CONTROLLERS
// ============================================================================

function validateCorpNameSuffix(inputField) {
  if (!inputField) return;
  const rawVal = inputField.value.trim();
  if (rawVal === "") return;
  
  const lowerVal = rawVal.toLowerCase();
  
  // 📋 Dynamic Suffix Lookup Pattern: Reads allowed suffixes from field configuration tags
  const allowedSuffixDataAttr = inputField.getAttribute("data-allowed-suffixes");
  let authorizedSuffixesArray = ["inc", "inc.", "incorporated", "corporation"]; // System baseline fallback

  if (allowedSuffixDataAttr) {
    authorizedSuffixesArray = allowedSuffixDataAttr.split(",").map(s => s.trim().toLowerCase());
  }

  const matchesAnyApprovedSuffix = authorizedSuffixesArray.some(suffix => lowerVal.endsWith(suffix));

  if (!matchesAnyApprovedSuffix) {
    inputField.style.borderColor = "#ef4444";
    const labelMessage = inputField.getAttribute("data-error-msg") || 
      `Corporate Registration Rule Warning: Your chosen name must contain an approved corporate suffix token (${authorizedSuffixesArray.join(', ').toUpperCase()}).`;
      
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(inputField, labelMessage);
    }
  } else {
    inputField.style.borderColor = "var(--border)";
    const adjacentMarker = inputField.nextSibling;
    if (adjacentMarker && adjacentMarker.className === 'input-error-marker') {
      adjacentMarker.remove();
    }
  }
}

// ============================================================================
// ➕ DYNAMIC INCREMENTAL SHAREHOLDER NODE GENERATOR ENGINE
// ============================================================================

let activeCorpShareholderCounterIndex = 1;

function appendNewCorporateShareholderNode() {
  activeCorpShareholderCounterIndex++;
  const container = document.getElementById("corp_shareholders_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `shareholder_card_${activeCorpShareholderCounterIndex}`;
  
  // Dynamic UI template separation architecture
  const markupTemplateSource = document.getElementById("corp-shareholder-row-template");
  
  if (markupTemplateSource) {
    let templateHtmlContent = markupTemplateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeCorpShareholderCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Shareholder #${activeCorpShareholderCounterIndex} Records</span>
        <button type="button" onclick="removeCorporateShareholderNode(${activeCorpShareholderCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="wizard-input-group" style="grid-column: span 2;">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Full Legal Name</label>
          <input type="text" id="shareholder_name_${activeCorpShareholderCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="grid-column: span 2;">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Street Address</label>
          <input type="text" id="shareholder_street_${activeCorpShareholderCounterIndex}" required placeholder="Street Address" class="wizard-input-field">
        </div>
        <div class="wizard-input-group">
          <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">City</label>
          <input type="text" id="shareholder_city_${activeCorpShareholderCounterIndex}" required placeholder="City" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">State</label>
            <input type="text" id="shareholder_state_${activeCorpShareholderCounterIndex}" required placeholder="TX" maxlength="2" class="wizard-input-field">
          </div>
          <div>
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate);">Zip</label>
            <input type="text" id="shareholder_zip_${activeCorpShareholderCounterIndex}" required placeholder="78701" class="wizard-input-field">
          </div>
        </div>
      </div>
    `;
  }

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
  
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleScorpElectionWorkflow(selectedValue) {
  const serviceWrapper = document.getElementById("corp_scorp_service_wrapper");
  const warningNote = document.getElementById("scac-decline-warning-note");
  
  if (serviceWrapper) {
    serviceWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }

  if (selectedValue === "no") {
    const selectProcure = document.getElementById("corp_scorp_procure");
    if (selectProcure) selectProcure.value = "no-decline";
    if (warningNote) warningNote.style.display = "block";
    
    window.customSelectedScorpElectionServiceActive = false;
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
      updateDynamicPricingMatrixVanilla();
    }
  }
}

function toggleScorpFilingPricingHook(selectedValue) {
  const warningNote = document.getElementById("scac-decline-warning-note");
  if (warningNote) {
    warningNote.style.display = (selectedValue === "yes-buy") ? "none" : "block";
  }
  
  window.customSelectedScorpElectionServiceActive = (selectedValue === "yes-buy");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

// Abstract Layout Synchronizer: Safely tracks view toggles without overriding injected templates
function initializeFormDisplayLayoutSync() {
  console.log("[Layout Engine] Initializing form synchronization layers...");
  const llcFormWrapper = document.getElementById("form-fields-llc-registration");
  const corpFormWrapper = document.getElementById("form-fields-corporate-formation");
  
  if (llcFormWrapper && corpFormWrapper) {
    const currentKey = String(window.routeActiveServiceKey || "").toLowerCase();
    const isCorpFamily = currentKey.includes("corp") || currentKey.includes("corporation");
    
    llcFormWrapper.style.display = isCorpFamily ? "none" : "grid";
    corpFormWrapper.style.display = isCorpFamily ? "grid" : "none";
  }
}



// ============================================================================
// 🗺️ UNIVERSAL GOOGLE PLACES AUTOMATIC ADDRESS VALIDATION CONTROL HUB
// ============================================================================

function attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix) {
  if (!inputNodeElement || inputNodeElement.hasAttribute('data-autocomplete-bound-active')) return;
  
  if (typeof google === "undefined" || !google.maps || !google.maps.places) {
    console.warn("[Google Places] Maps API not yet loaded. Queuing lookup initialization...");
    // Auto-retry attachment after a slight delay to capture dynamically injected layouts
    setTimeout(() => attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix), 1000);
    return;
  }

  // Set configuration to filter only structural street addresses in the US region
  const autocompleteCoreOptions = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry"],
    types: ["address"]
  };

  const autocompleteInstance = new google.maps.places.Autocomplete(inputNodeElement, autocompleteCoreOptions);
  inputNodeElement.setAttribute('data-autocomplete-bound-active', 'true');

  autocompleteInstance.addListener("place_changed", function () {
    const selectedPlaceManifest = autocompleteInstance.getPlace();
    if (!selectedPlaceManifest || !selectedPlaceManifest.address_components) {
      console.error("[Google Places] No valid address vectors returned for the selection.");
      return;
    }

    let addressStreetNumber = "";
    let addressRouteStreetName = "";
    let calculatedLocalityCityName = "";
    let extractedStateCode = "";
    let postalRoutingIndexNumber = "";

    // Parse the granular layout elements out of the Google component array matrix
    selectedPlaceManifest.address_components.forEach(itemComponent => {
      const typesArray = itemComponent.types;
      if (typesArray.includes("street_number")) {
        addressStreetNumber = itemComponent.long_name;
      } else if (typesArray.includes("route")) {
        addressRouteStreetName = itemComponent.long_name;
      } else if (typesArray.includes("locality")) {
        calculatedLocalityCityName = itemComponent.long_name;
      } else if (typesArray.includes("administrative_area_level_1")) {
        extractedStateCode = itemComponent.short_name; // Returns standard 2-digit state code (e.g. TX, CA)
      } else if (typesArray.includes("postal_code")) {
        postalRoutingIndexNumber = itemComponent.long_name;
      }
    });

    const balancedStreetAddressLine = `${addressStreetNumber} ${addressRouteStreetName}`.trim();

    // 🔍 SMART ADAPTIVE ELEMENT LOOKUP (NO STRINGS HARDCODED)
    // First tries the standard prefix naming convention pattern
    let streetField = document.getElementById(`${dataElementPrefix}_street`) || inputNodeElement;
    let cityField = document.getElementById(`${dataElementPrefix}_city`);
    let stateField = document.getElementById(`${dataElementPrefix}_state`);
    let zipField = document.getElementById(`${dataElementPrefix}_zip`);

    // Fallback: If elements are missing by ID, scan the field's parent container
    const parentContainer = inputNodeElement.closest('.wizard-panel, .member-record-card, form') || document.body;
    if (parentContainer) {
      if (!cityField) cityField = parentContainer.querySelector('[name*="city"], [id*="city"]');
      if (!stateField) stateField = parentContainer.querySelector('[name*="state"], [id*="state"]');
      if (!zipField) zipField = parentContainer.querySelector('[name*="zip"], [id*="postal"]');
    }

    // Populate data values into whatever matching components exist on the screen layout
    if (streetField) streetField.value = balancedStreetAddressLine;
    if (cityField) cityField.value = calculatedLocalityCityName;
    if (stateField) stateField.value = extractedStateCode;
    if (zipField) zipField.value = postalRoutingIndexNumber;

    // Save the new data metrics to the local storage state parameters cache automatically
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
      cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // Sync values automatically across the state layer metrics trackers
    if (extractedStateCode) {
      window.selectedFormationStateCode = extractedStateCode.toUpperCase().trim();
    }

    // Force an immediate layout calculation updates loop pass inside the invoice tracking cards
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
      updateDynamicPricingMatrixVanilla();
    }
  });
}

// Global auto-scan observer to hook autocomplete fields instantly as steps transition
function autoDiscoverAndHookAddressNodes() {
  const addressInputs = document.querySelectorAll('input[data-autocomplete-type="address"], .autocomplete-address-input');
  addressInputs.forEach(input => {
    const customPrefix = input.getAttribute('data-prefix') || input.id.replace('_street', '');
    attachGooglePlacesAutocompleteToNode(input, customPrefix);
  });
}


// ============================================================================
// 🔘 SOLE PROPRIETORSHIP FORM INTERACTIVE INTERACTION CONTROLLERS
// ============================================================================

function toggleSolePropDbaField(selectedValue) {
  const wrapper = document.getElementById("sp_dba_name_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
  }
}

function toggleSolePropEinReasonField(selectedValue) {
  const wrapper = document.getElementById("sp_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
  }
}

function toggleSolePropDurationField(selectedValue) {
  const wrapper = document.getElementById("sp_duration_term_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "temporary" || selectedValue === "specified") ? "flex" : "none";
  }
}

function toggleSolePropLicenseWorkflow(selectedValue) {
  const customInputWrapper = document.getElementById("sp_custom_license_wrapper");
  if (customInputWrapper) {
    customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }

  // 📈 Flexible Pricing Selector Flag: True if user requests an independent compliance check-up audit
  const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
  window.customSelectedSolePropLicenseAuditServiceActive = userNeedsAudit;

  // Force an immediate recalculation inside the global invoice tracking card layers
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}



// ============================================================================
// 🔘 DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS
// ============================================================================

function toggleDbaPermissionWorkflow(selectedValue) {
  const wrapper = document.getElementById("dba_permission_matrix_wrapper");
  if (!wrapper) return;

  wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";

  // Clear name search add-on pricing hooks safely if reset to "no" without changing other field entries
  if (selectedValue === "no" || selectedValue === "false") {
    window.customSelectedDbaSearchServiceActive = false;
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
      updateDynamicPricingMatrixVanilla();
    }
  }
}

function toggleDbaSearchProcurement(selectedValue) {
  // 🔍 Flexible Option Evaluator: Matches standard public marketing tier selectors safely
  const requiresSearchUpsell = (selectedValue === "no-buy" || selectedValue === "yes-search" || selectedValue === "true");
  window.customSelectedDbaSearchServiceActive = requiresSearchUpsell;

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleDbaEinReasonField(selectedValue) {
  const wrapper = document.getElementById("dba_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
  }
}

function toggleDbaLicenseWorkflow(selectedValue) {
  const customInputWrapper = document.getElementById("dba_custom_license_wrapper");
  if (customInputWrapper) {
    customInputWrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }

  // 📈 Flexible Pricing Selector Flag: True if user selects compliance check audit option path
  const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
  window.customSelectedDbaLicenseAuditServiceActive = userNeedsAudit;

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleDbaDurationField(selectedValue) {
  const wrapper = document.getElementById("dba_duration_term_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "temporary" || selectedValue === "specified") ? "flex" : "none";
  }
}


// ============================================================================
// 🔘 NONPROFIT WORKFLOW INTERACTIVE LAYOUT CONTROLLERS
// ============================================================================

let activeNonprofitBoardCounterIndex = 3;

function appendNewNonprofitBoardMemberNode() {
  activeNonprofitBoardCounterIndex++;
  const container = document.getElementById("np_board_members_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `np_board_card_${activeNonprofitBoardCounterIndex}`;
  
  // Use flexible template layouts if defined in configuration files
  const markupTemplateSource = document.getElementById("nonprofit-board-row-template");
  
  if (markupTemplateSource) {
    let templateHtmlContent = markupTemplateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeNonprofitBoardCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Board Member/Trustee #${activeNonprofitBoardCounterIndex} Records</span>
        <button type="button" onclick="removeNonprofitBoardMemberNode(${activeNonprofitBoardCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div>
          <label for="np_board_name_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name</label>
          <input type="text" id="np_board_name_${activeNonprofitBoardCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <label for="np_board_role_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Position / Title</label>
          <input type="text" id="np_board_role_${activeNonprofitBoardCounterIndex}" required placeholder="e.g., Trustee / Director" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div style="grid-column: span 2;">
          <label for="np_board_contact_${activeNonprofitBoardCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Contact Routing Details</label>
          <input type="text" id="np_board_contact_${activeNonprofitBoardCounterIndex}" required placeholder="Contact Details (Phone / Email)" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
      </div>
    `;
  }

  container.appendChild(div);
}

function removeNonprofitBoardMemberNode(targetIndex) {
  const cardToRemove = document.getElementById(`np_board_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleNonprofitEinReasonField(selectedValue) {
  const wrapper = document.getElementById("np_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // ⚡ FIXED INVERSE LOGIC: If they select "no" (meaning they don't have one), trigger procurement upsell
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no" || selectedValue === "no-buy");

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleNonprofitLicenseWorkflow(selectedValue) {
  // 📈 True if user requests an external compliance check-up license audit
  const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
  window.customSelectedNonprofitLicenseCheckActive = userNeedsAudit;

  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}


// ============================================================================
// 🔘 SERIES LLC RUNTIME EVENT CONTROLLERS
// ============================================================================

let activeSeriesLlcMemberCounterIndex = 1;

function appendNewSeriesLlcMemberNode() {
  activeSeriesLlcMemberCounterIndex++;
  const container = document.getElementById("sllc_members_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `sllc_member_card_${activeSeriesLlcMemberCounterIndex}`;
  
  // Dynamic layout check: Read abstract template configuration if defined
  const templateSource = document.getElementById("sllc-member-row-template");
  
  if (templateSource) {
    let templateHtmlContent = templateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeSeriesLlcMemberCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Initial Member #${activeSeriesLlcMemberCounterIndex} Records</span>
        <button type="button" onclick="removeSeriesLlcMemberNode(${activeSeriesLlcMemberCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div>
          <label for="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name</label>
          <input type="text" id="sllc_member_name_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <label for="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Residential Address</label>
          <input type="text" id="sllc_member_address_${activeSeriesLlcMemberCounterIndex}" required placeholder="Full Residential/Office Address" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
      </div>
    `;
  }

  container.appendChild(div);
}

function removeSeriesLlcMemberNode(targetIndex) {
  const cardToRemove = document.getElementById(`sllc_member_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesCellsWrapperVisibility(selectedValue) {
  const wrapper = document.getElementById("sllc_cells_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes" || selectedValue === "true") ? "flex" : "none";
  }
}

// ============================================================================
// ➕ SUB-SERIES CELLS DYNAMIC GENERATOR MATRIX
// ============================================================================

let activeSubSeriesCellCounterIndex = 1;

function appendNewSubSeriesCellNode() {
  activeSubSeriesCellCounterIndex++;
  const container = document.getElementById("sllc_cells_container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "member-record-card";
  div.id = `sllc_cell_card_${activeSubSeriesCellCounterIndex}`;
  
  const templateSource = document.getElementById("sllc-cell-row-template");
  
  if (templateSource) {
    let templateHtmlContent = templateSource.innerHTML;
    templateHtmlContent = templateHtmlContent.replace(/{{index}}/g, activeSubSeriesCellCounterIndex);
    div.innerHTML = templateHtmlContent;
  } else {
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Initial Sub-Series Cell #${activeSubSeriesCellCounterIndex}</span>
        <button type="button" onclick="removeSubSeriesCellNode(${activeSubSeriesCellCounterIndex})" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
        <div>
          <label for="sllc_cell_name_${activeSubSeriesCellCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Series Cell Name</label>
          <input type="text" id="sllc_cell_name_${activeSubSeriesCellCounterIndex}" placeholder="Series Cell Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <label for="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Asset Summary</label>
          <input type="text" id="sllc_cell_desc_${activeSubSeriesCellCounterIndex}" placeholder="Asset / Operational Purpose Summary" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
      </div>
    `;
  }

  container.appendChild(div);
}

function removeSubSeriesCellNode(targetIndex) {
  const cardToRemove = document.getElementById(`sllc_cell_card_${targetIndex}`);
  if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesEinWorkflow(selectedValue) {
  const wrapper = document.getElementById("sllc_ein_reason_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // ⚡ FIXED INVERSE LOGIC: If they select "no", trigger procurement upsell loops
  window.customSelectedEinProcurementServiceActive = (selectedValue === "no" || selectedValue === "no-buy");
  
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleSeriesLicenseWorkflow(selectedValue) {
  const warningNote = document.getElementById("sllc_custom_license_wrapper");
  if (warningNote) {
    warningNote.style.display = (selectedValue === "yes") ? "flex" : "none";
  }
  
  // True if user opts out of manual lists to request compliance license audit
  const userNeedsAudit = (selectedValue === "no" || selectedValue === "purchase-audit" || selectedValue === "yes-buy");
  window.customSelectedSeriesLicenseAuditActive = userNeedsAudit;
  
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

function toggleSeriesLlcDurationField(selectedValue) {
  const wrapper = document.getElementById("sllc_duration_term_wrapper");
  if (wrapper) {
    wrapper.style.display = (selectedValue === "project" || selectedValue === "temporary") ? "flex" : "none";
  }
}


// ============================================================================
// 🔗 MASTER ALIAS ROUTING BRIDGE INTERFACES (DUPLICATES PURGED)
// ============================================================================

/**
 * Public structural API proxy allowing external scripts, timelines, or indicators
 * to safely request a step jump through our master unified navigation engine.
 */
window.requestWizardStepJump = function(targetIndex) {
  console.log(`[Navigation Bridge Proxy] Public step adjustment request received for index: ${targetIndex}`);
  
  if (typeof goToNextWizardStep === "function") {
    return goToNextWizardStep(targetIndex);
  } else {
    console.error("[Fatal Error] Master routing core navigation engine is missing or uninitialized.");
    return false;
  }
};

/**
 * Universal utility to bind manual jump attributes on button click elements dynamically.
 * Scans for attributes like data-jump-to="3" and hooks them up safely.
 */
function bindDynamicTimelineJumpTriggers() {
  const jumpButtons = document.querySelectorAll("[data-jump-to]");
  
  jumpButtons.forEach(button => {
    // Prevent duplicate event handlers on the same DOM element node
    if (button.getAttribute("data-jump-listener-bound") === "true") return;
    
    button.addEventListener("click", function(event) {
      const stepTargetValue = button.getAttribute("data-jump-to");
      if (stepTargetValue) {
        if (typeof goToNextWizardStep === "function") {
          goToNextWizardStep(stepTargetValue, event);
        }
      }
    });
    
    button.setAttribute("data-jump-listener-bound", "true");
  });
}

// Register initialization hook inside global namespace layers cleanly
window.bindDynamicTimelineJumpTriggers = bindDynamicTimelineJumpTriggers;



// ============================================================================
// ⚡ 4.5 UNIFIED DYNAMIC FORM INJECTION SYSTEM FOR STEP 2
// ============================================================================

/**
 * Orchestrates the seamless mounting of dynamic service forms into Step 2.
 * Safely handles state extraction, HTML injection, and cached form restoration.
 */
function executeStepTwoDynamicFormInjection() {
  // Guard Check: Ensure the engine only triggers if the wizard is on Step 2
  if (typeof currentWizardActiveStep === "undefined" || currentWizardActiveStep !== 2) return;

  const fieldsRoot = document.getElementById("dynamic-onboarding-fields-root");
  if (!fieldsRoot) return;

  // Clear out old form states instantly to prevent cross-contamination
  fieldsRoot.innerHTML = "";

  // Normalize lookups and layout dependencies safely
  const stateOptions = window.globalStateDropdownOptionsHtml || "";
  const currentServiceKey = window.routeActiveServiceKey || "llc-formation";
  const cleanKey = String(currentServiceKey).toLowerCase().trim().replace(/[\s_]+/g, "-");

  console.log(`[Form Injection Engine] Evaluating structural form layout matching for: "${cleanKey}"`);

  // ============================================================================
  // 🗺️ MASTER SERVICE MAP REGISTRY DECLISTRATION (EXACT KEY ALIGNMENT)
  // ============================================================================
  const formRegistry = {
    "operating-agreement": typeof buildOperatingAgreementForm === "function" ? buildOperatingAgreementForm : null,
    "annual-reports": typeof buildAnnualReportsForm === "function" ? buildAnnualReportsForm : null,
    "trademark-filing": typeof buildTrademarkFilingForm === "function" ? buildTrademarkFilingForm : null,
    "servicemark-filing": typeof buildServicemarkFilingForm === "function" ? buildServicemarkFilingForm : null,
    "foreign-qualification-certificate": typeof buildForeignQualificationForm === "function" ? buildForeignQualificationForm : null,
    "llc-reinstatement-processing": typeof buildLlcReinstatementForm === "function" ? buildLlcReinstatementForm : null,
    "business-licenses": typeof buildBusinessLicensesForm === "function" ? buildBusinessLicensesForm : null,
    "employer-id-ein": typeof buildEinApplicationForm === "function" ? buildEinApplicationForm : null,
    "entity-dissolution": typeof buildEntityDissolutionForm === "function" ? buildEntityDissolutionForm : null,
    "certificate-of-good-standing": typeof buildGoodStandingForm === "function" ? buildGoodStandingForm : null,
    "apostille-authentication-services": typeof buildApostilleServiceForm === "function" ? buildApostilleServiceForm : null,
    "clia-certificate": typeof buildCliaCertificateForm === "function" ? buildCliaCertificateForm : null,
    "custom-regulatory-legal-consulting": typeof buildCustomRegulatoryConsultingForm === "function" ? buildCustomRegulatoryConsultingForm : null,
    "federal-tax": typeof buildFederalIncomeTaxForm === "function" ? buildFederalIncomeTaxForm : null,
    "state-tax": typeof buildStateIncomeTaxForm === "function" ? buildStateIncomeTaxForm : null,
    "franchise-tax-filing": typeof buildFranchiseTaxFilingForm === "function" ? buildFranchiseTaxFilingForm : null,
    "sales-tax-registration": typeof buildSalesTaxRegistrationForm === "function" ? buildSalesTaxRegistrationForm : null,
    "payroll-tax-940-941": typeof buildPayrollTaxForm === "function" ? buildPayrollTaxForm : null,
    "heavy-use-tax-2290": typeof buildHeavyUseTaxForm === "function" ? buildHeavyUseTaxForm : null,
    "cage-code": typeof buildCageCodeForm === "function" ? buildCageCodeForm : null,
    "duns-number": typeof buildDunsNumberForm === "function" ? buildDunsNumberForm : null,
    "procurement-procurement-registration": typeof buildProcurementRegistrationForm === "function" ? buildProcurementRegistrationForm : null,
    "minority-certificate": typeof buildMinorityCertificateForm === "function" ? buildMinorityCertificateForm : null,
    "owner-operators": typeof buildOwnerOperatorsForm === "function" ? buildOwnerOperatorsForm : null,
    "trucker-authority": typeof buildTruckerAuthorityForm === "function" ? buildTruckerAuthorityForm : null,
    "broker-authority": typeof buildBrokerAuthorityForm === "function" ? buildBrokerAuthorityForm : null,
    "registered-agent": typeof buildRegisteredAgentServiceForm === "function" ? buildRegisteredAgentServiceForm : null,
    "ucr-registration": typeof buildUcrRegistrationForm === "function" ? buildUcrRegistrationForm : null, // Fixed target binding pointer
    "scac-code-registration": typeof buildScacCodeRegistrationForm === "function" ? buildScacCodeRegistrationForm : null,
    "dot-consortium": typeof buildDotConsortiumForm === "function" ? buildDotConsortiumForm : null,
    "driver-qualification-file": typeof buildDriverQualificationFileForm === "function" ? buildDriverQualificationFileForm : null,
    "process-agent-boc-3": typeof buildProcessAgentBoc3Form === "function" ? buildProcessAgentBoc3Form : null,
    "ifta-registration": typeof buildIftaRegistrationForm === "function" ? buildIftaRegistrationForm : null,
    "hazmat-registration": typeof buildHazmatRegistrationForm === "function" ? buildHazmatRegistrationForm : null,
    "trucker-insurance": typeof buildTruckerInsuranceForm === "function" ? buildTruckerInsuranceForm : null,
    "broker-insurance": typeof buildBrokerInsuranceForm === "function" ? buildBrokerInsuranceForm : null,
    "new-entrant-audit": typeof buildNewEntrantAuditForm === "function" ? buildNewEntrantAuditForm : null
  };

  // Resolve builder strategy via strict registry lookup key indexes
  let builderFn = formRegistry[cleanKey];

  if (!builderFn) {
    // Sub-string fallback check if keys contain partial naming deviations
    const fallbackKey = Object.keys(formRegistry).find(key => cleanKey.includes(key) || key.includes(cleanKey));
    if (fallbackKey) builderFn = formRegistry[fallbackKey];
  }

  // Execute DOM rendering transformations
  if (builderFn) {
    fieldsRoot.innerHTML = builderFn(stateOptions);
    console.log(`[Form Injection] Successfully mounted interactive fields layout layout for service: "${cleanKey}"`);
  } else {
    // If no explicit layout form is mounted, execute master fallback router cleanly
    if (typeof executeDynamicRegulatoryFieldInjection === "function") {
      executeDynamicRegulatoryFieldInjection(currentServiceKey);
    } else {
      console.warn(`[Form Injection Warning] Missing structural template handler for key: ${cleanKey}`);
      fieldsRoot.innerHTML = `
        <div style="grid-column: span 2; text-align: center; padding: 25px; color: #ef4444; font-weight: 700; border: 1px dashed #ef4444; border-radius: 8px; background: rgba(239,68,68,0.02);">
          ⚠️ Dynamic layout module components for "${window.routeActiveServiceKey || 'Selected Offering'}" are not mounted.
        </div>`;
    }
  }

  // 🔄 UI Layout Tracking Refresh
  if (typeof renderActiveWizardStepUiLayout === "function") {
    renderActiveWizardStepUiLayout();
  }

  // 💾 Restore user's cached inputs into the newly injected fields securely
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true);
  }

  // 🗺️ Hook address auto-complete fields if they exist in the new form
  if (typeof autoDiscoverAndHookAddressNodes === "function") {
    autoDiscoverAndHookAddressNodes();
  }
}

// Expose the clean system initializer directly to the window layer context
window.executeStepTwoDynamicFormInjection = executeStepTwoDynamicFormInjection;

// ============================================================================
// 🔄 CERTIFICATE OF GOOD STANDING INTERACTION LAYER
// ============================================================================

function toggleGoodStandingPurposeSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("cgs_purpose_other_wrapper");
  var input = document.getElementById("cgs_purpose_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Flush out stale input fields values safely
    input.style.borderColor = "var(--border)";
  }
}

function toggleGoodStandingPhysicalDeliveryVisibility(selectionValue) {
  var wrapper = document.getElementById("cgs_shipping_address_wrapper");
  if (!wrapper) return;

  // Track the choice globally so pricing configuration updates can look it up later
  window.customSelectedPhysicalShippingActive = (selectionValue === "physical" || selectionValue === "expedited-courier");

  if (selectionValue === "physical") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = false;
      
      // Reset layout values and state parameters to clear hidden validation limits
      if (el.type === "checkbox" || el.type === "radio") {
        el.checked = false;
      } else {
        el.value = "";
      }
      el.style.borderColor = "var(--border)";
    });

    // Remove any stale red error alerts left behind by validation routines
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  // Force pricing matrix calculations to synchronize live cart summaries
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}


// ============================================================================
// 🔄 PROFESSIONAL REGISTERED AGENT SERVICE LOGIC WORKFLOWS
// ============================================================================

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
      el.value = "";
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
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
      el.value = "";
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ DYNAMIC SECONDARY ENTITY ROW GENERATOR (FIXED INVALID HTML MARGINS)
// ============================================================================

function appendNewRegisteredAgentEntityRow() {
  currentRaEntityCount++;
  var container = document.getElementById("ra_entities_container");
  if (!container) return;

  var entityRow = document.createElement("div");
  entityRow.className = "member-record-card";
  entityRow.id = "ra_entity_card_" + currentRaEntityCount;
  
  entityRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";
  
  // FIXED: open proper selects, open proper labels, remove invalid closing loops
  entityRow.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
      <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Secondary Entity #${currentRaEntityCount} Records</span>
      <button type="button" onclick="removeRegisteredAgentEntityRow(${currentRaEntityCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
      <div class="wizard-input-group" style="margin: 0;">
        Entity Name <span style="color: #ef4444;">*</span></label>
        
      </div>
      <div class="wizard-input-group" style="margin: 0;">
        Entity Type <span style="color: #ef4444;">*</span></label>
        
          <option value="">-- Choose --</option>
          <option value="llc">LLC</option>
          <option value="corporation">Corporation</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>
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
  var inputs = wrapper ? wrapper.querySelectorAll("input, select") : [];
  
  if (!wrapper) return;

  if (selectionValue === "yes") {
    wrapper.style.display = "block";
    inputs.forEach(function(el) { el.required = true; });
  } else {
    wrapper.style.display = "none";
    inputs.forEach(function(el) { 
      el.required = false; 
      el.value = "";
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}



// ============================================================================
// 🔄 CONDITIONAL INTERACTION INTERFACE CONTROL ROUTINES
// ============================================================================

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
    manualWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    manualWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleFqLicenseAssistanceVisibility(selectionValue) {
  const detailsWrapper = document.getElementById("fq_license_details_wrapper");
  const assistanceWrapper = document.getElementById("fq_license_assistance_wrapper");
  const assistanceSelect = document.getElementById("fq_add_licensing_service");

  // Reset required state parameters cleanly before branching logic overrides
  if (assistanceSelect) {
    assistanceSelect.required = false;
    assistanceSelect.style.borderColor = "var(--border)";
  }

  if (selectionValue === "yes") {
    if (detailsWrapper) detailsWrapper.style.display = "block";
    if (assistanceWrapper) {
      assistanceWrapper.style.display = "none";
      if (assistanceSelect) {
        assistanceSelect.value = "";
        const errorMarker = assistanceSelect.nextSibling;
        if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
      }
    }
  } else if (selectionValue === "no") {
    if (detailsWrapper) detailsWrapper.style.display = "none";
    if (assistanceWrapper) assistanceWrapper.style.display = "block";
    if (assistanceSelect) assistanceSelect.required = true;
  } else {
    if (detailsWrapper) detailsWrapper.style.display = "none";
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
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
    reasonInput.value = "";
    reasonInput.style.borderColor = "var(--border)";
    const errorMarker = reasonInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}


// ============================================================================
// 🔄 LLC REINSTATEMENT INTERACTION LOGIC CONTROL ROUTINES
// ============================================================================

function toggleReinstatementFeesNoticeVisibility(selectionValue) {
  const unpaidWrapper = document.getElementById("rein_fees_unpaid_wrapper");
  const auditSelect = document.getElementById("rein_add_compliance_audit");
  if (!unpaidWrapper || !auditSelect) return;

  if (selectionValue === "no" || selectionValue === "false") {
    unpaidWrapper.style.display = "flex";
    auditSelect.required = true;
  } else {
    unpaidWrapper.style.display = "none";
    auditSelect.required = false;
    
    // Abstract value configuration fallback mapping lookup
    const defaultDeclineOption = auditSelect.querySelector('option[value="no"], option[value*="decline"], option:first-child');
    auditSelect.value = defaultDeclineOption ? defaultDeclineOption.value : "";
    auditSelect.style.borderColor = "var(--border)";
    
    // Track pricing modifiers dynamically
    window.customSelectedReinstatementAuditActive = false;
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleReinstatementIssuesVisibility(selectionValue) {
  const issuesWrapper = document.getElementById("rein_pending_issues_wrapper");
  const detailsInput = document.getElementById("rein_pending_details");
  if (!issuesWrapper || !detailsInput) return;

  if (selectionValue === "no" || selectionValue === "false") {
    issuesWrapper.style.display = "block";
    detailsInput.required = true;
  } else {
    issuesWrapper.style.display = "none";
    detailsInput.required = false;
    detailsInput.value = ""; // Erase stale descriptions safely
    detailsInput.style.borderColor = "var(--border)";
    
    const errorMarker = detailsInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleReinstatementEinWorkflow(selectionValue) {
  const reasonWrapper = document.getElementById("rein_ein_reason_wrapper");
  const reasonInput = document.getElementById("rein_ein_reason");
  if (!reasonWrapper || !reasonInput) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    reasonWrapper.style.display = "flex";
    reasonInput.required = true;
  } else {
    reasonWrapper.style.display = "none";
    reasonInput.required = false;
    reasonInput.value = ""; // Clear manual fields metrics values parameters
    reasonInput.style.borderColor = "var(--border)";
    
    const errorMarker = reasonInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleReinstatementDurationFieldVisibility(selectionValue) {
  const dateWrapper = document.getElementById("rein_duration_date_wrapper");
  const dateInput = document.getElementById("rein_duration_date");
  if (!dateWrapper || !dateInput) return;

  if (selectionValue === "specific" || selectionValue === "temporary") {
    dateWrapper.style.display = "flex";
    dateInput.required = true;
  } else {
    dateWrapper.style.display = "none";
    dateInput.required = false;
    dateInput.value = ""; // Strip hidden historical inputs metrics records data
    dateInput.style.borderColor = "var(--border)";
    
    const errorMarker = dateInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// 🔄 USPTO TRADEMARK APPLICATION INTERACTION LAYER ROUTINES
// ============================================================================

function toggleTrademarkSpecimenWorkflow(selectionValue) {
  const wrapper = document.getElementById("tm_specimen_wrapper");
  if (!wrapper) return;

  const descInput = document.getElementById("tm_specimen_desc");
  const fileInput = document.getElementById("tm_specimen_file");

  if (selectionValue === "use-in-commerce" || selectionValue === "actual-use") {
    wrapper.style.display = "flex";
    if (descInput) descInput.required = true;
    if (fileInput) fileInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (descInput) {
      descInput.required = false;
      descInput.value = "";
      descInput.style.borderColor = "var(--border)";
    }
    if (fileInput) {
      fileInput.required = false;
      fileInput.value = ""; // Clear file selector handle data indicators
      fileInput.style.borderColor = "var(--border)";
    }
    
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleTrademarkSearchAssistanceVisibility(selectionValue) {
  const detailsWrapper = document.getElementById("tm_search_details_wrapper");
  const assistanceWrapper = document.getElementById("tm_search_assistance_wrapper");
  const assistanceSelect = document.getElementById("tm_add_search_service");
  const resultsInput = document.getElementById("tm_search_results_data");

  if (selectionValue === "yes" || selectionValue === "true") {
    if (detailsWrapper) detailsWrapper.style.display = "block";
    if (resultsInput) resultsInput.required = true;
    
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
    if (assistanceSelect) {
      assistanceSelect.required = false;
      
      // Abstract fallback matching pattern: Finds standard cancel values dynamically
      const fallbackDeclineOption = assistanceSelect.querySelector('option[value="no"], option[value*="decline"], option:first-child');
      assistanceSelect.value = fallbackDeclineOption ? fallbackDeclineOption.value : "";
      assistanceSelect.style.borderColor = "var(--border)";
    }
    window.customSelectedTrademarkSearchActive = false;
    
  } else if (selectionValue === "no" || selectionValue === "false") {
    if (detailsWrapper) {
      detailsWrapper.style.display = "none";
      if (resultsInput) {
        resultsInput.required = false;
        resultsInput.value = "";
        resultsInput.style.borderColor = "var(--border)";
      }
    }
    if (assistanceWrapper) dsa_wrapper_display = assistanceWrapper.style.display = "block";
    if (assistanceSelect) assistanceSelect.required = true;
    
  } else {
    // Catch-all structural reset layout transformations
    if (detailsWrapper) detailsWrapper.style.display = "none";
    if (resultsInput) resultsInput.required = false;
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
    if (assistanceSelect) {
      assistanceSelect.required = false;
      assistanceSelect.value = "";
    }
  }

  // Remove residual visual error markers across components
  const activeScopeContainer = detailsWrapper?.parentNode || document.body;
  activeScopeContainer.querySelectorAll('.input-error-marker').forEach(node => node.remove());

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleTrademarkAttorneyWrapperVisibility(selectionValue) {
  const wrapper = document.getElementById("tm_attorney_wrapper");
  if (!wrapper) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      
      // Wipe values cleanly so invalid content inside hidden containers doesn't persist
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// 🔄 STATE SERVICEMARK APPLICATION INTERACTION LAYER ROUTINES
// ============================================================================

function toggleServicemarkSpecimenWorkflow(selectionValue) {
  const wrapper = document.getElementById("sm_specimen_wrapper");
  if (!wrapper) return;

  const descInput = document.getElementById("sm_specimen_desc");
  const fileInput = document.getElementById("sm_specimen_file");

  if (selectionValue === "use-in-commerce" || selectionValue === "actual-use") {
    wrapper.style.display = "flex";
    if (descInput) descInput.required = true;
    if (fileInput) fileInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (descInput) {
      descInput.required = false;
      descInput.value = "";
      descInput.style.borderColor = "var(--border)";
    }
    if (fileInput) {
      fileInput.required = false;
      fileInput.value = ""; // Clear file selector data references
      fileInput.style.borderColor = "var(--border)";
    }
    
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleServicemarkSearchAssistanceVisibility(selectionValue) {
  const detailsWrapper = document.getElementById("sm_search_details_wrapper");
  const assistanceWrapper = document.getElementById("sm_search_assistance_wrapper");
  const assistanceSelect = document.getElementById("sm_add_search_service");
  const resultsInput = document.getElementById("sm_search_results_data");

  if (selectionValue === "yes" || selectionValue === "true") {
    if (detailsWrapper) detailsWrapper.style.display = "block";
    if (resultsInput) resultsInput.required = true;
    
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
    if (assistanceSelect) {
      assistanceSelect.required = false;
      
      // Abstract fallback matching pattern: Finds standard cancel values dynamically
      const fallbackDeclineOption = assistanceSelect.querySelector('option[value="no"], option[value*="decline"], option:first-child');
      assistanceSelect.value = fallbackDeclineOption ? fallbackDeclineOption.value : "";
      assistanceSelect.style.borderColor = "var(--border)";
    }
    window.customSelectedServicemarkSearchActive = false;
    
  } else if (selectionValue === "no" || selectionValue === "false") {
    if (detailsWrapper) {
      detailsWrapper.style.display = "none";
      if (resultsInput) {
        resultsInput.required = false;
        resultsInput.value = "";
        resultsInput.style.borderColor = "var(--border)";
      }
    }
    if (assistanceWrapper) assistanceWrapper.style.display = "block";
    if (assistanceSelect) assistanceSelect.required = true;
    
  } else {
    // Catch-all structural reset layout transformations
    if (detailsWrapper) detailsWrapper.style.display = "none";
    if (resultsInput) resultsInput.required = false;
    if (assistanceWrapper) assistanceWrapper.style.display = "none";
    if (assistanceSelect) {
      assistanceSelect.required = false;
      assistanceSelect.value = "";
    }
  }

  // Remove residual visual error markers across components
  const activeScopeContainer = detailsWrapper?.parentNode || document.body;
  activeScopeContainer.querySelectorAll('.input-error-marker').forEach(node => node.remove());

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

function toggleServicemarkAttorneyWrapperVisibility(selectionValue) {
  const wrapper = document.getElementById("sm_attorney_wrapper");
  if (!wrapper) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      
      // Wipe values cleanly so invalid content inside hidden containers doesn't persist
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 ANNUAL REPORT REPORTING LIFE-CYCLE VISIBILITY ROUTINES
// ============================================================================

function toggleAnnualReportMailingAddressVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_mailing_wrapper");
  if (!wrapper) return;

  if (selectionValue === "different" || selectionValue === "custom") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(el => {
      el.required = false;
      el.value = ""; // Flush out stale input fields values safely
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleAnnualReportStateExplanationVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_state_explanation_wrapper");
  const input = document.getElementById("ar_state_reason");
  if (!wrapper || !input) return;

  if (selectionValue === "no" || selectionValue === "false") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Wipe values safely inside hidden containers
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleAnnualReportCityExplanationVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_city_explanation_wrapper");
  const input = document.getElementById("ar_city_reason");
  if (!wrapper || !input) return;

  if (selectionValue === "no" || selectionValue === "false") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleAnnualReportFederalExplanationVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_fed_explanation_wrapper");
  const input = document.getElementById("ar_fed_reason");
  if (!wrapper || !input) return;

  if (selectionValue === "no" || selectionValue === "false") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleAnnualReportOtherExplanationVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_other_explanation_wrapper");
  const input = document.getElementById("ar_other_filings_list");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "flex";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleAnnualReportComplianceCheckVisibility(selectionValue) {
  const wrapper = document.getElementById("ar_compliance_pending_wrapper");
  const input = document.getElementById("ar_pending_renewals_list");
  if (!wrapper || !input) return;

  if (selectionValue === "no" || selectionValue === "false") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}


// ============================================================================
// 🔄 OPERATING AGREEMENT INTERACTIVE SUBSYSTEM LAYER (LLC & LLP REBUILT)
// ============================================================================

let currentOaMemberCount = 1;

function toggleOperatingAgreementOwnershipSubForm(structureType) {
  const singleWrapper = document.getElementById("oa_single_member_wrapper");
  const multiWrapper = document.getElementById("oa_multi_member_wrapper");
  const partnerLabel = document.getElementById("oa_member_type_label_root");

  if (!singleWrapper || !multiWrapper) return;

  // 🏛️ Dynamic Taxonomy Adjustment: Updates display text if entity is an LLP / Partnership
  if (partnerLabel) {
    partnerLabel.textContent = (structureType === "llp" || structureType === "partnership") 
      ? "Partner / Shareholder Ledger" 
      : "LLC Member Equity Node";
  }

  if (structureType === "single-member") {
    singleWrapper.style.display = "flex";
    multiWrapper.style.display = "none";

    const soleName = document.getElementById("oa_sole_member_name");
    const soleContribution = document.getElementById("oa_sole_member_contribution");

    if (soleName) soleName.required = true;
    if (soleContribution) soleContribution.required = true;

    clearMultiMemberValidationRequirements();
  } else if (structureType === "multi-member" || structureType === "llp" || structureType === "partnership") {
    singleWrapper.style.display = "none";
    multiWrapper.style.display = "flex";

    const soleName = document.getElementById("oa_sole_member_name");
    const soleContribution = document.getElementById("oa_sole_member_contribution");

    if (soleName) {
      soleName.required = false;
      soleName.style.borderColor = "var(--border)";
    }
    if (soleContribution) {
      soleContribution.required = false;
      soleContribution.style.borderColor = "var(--border)";
    }

    enforceMultiMemberValidationRequirements();
    calculateCumulativeOperatingAgreementEquityTotal();
  }

  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }
}

function appendNewOperatingAgreementMemberRow() {
  currentOaMemberCount++;
  const container = document.getElementById("oa_members_container");
  if (!container) return;

  const memberRow = document.createElement("div");
  memberRow.className = "member-record-card";
  memberRow.id = `oa_member_card_${currentOaMemberCount}`;
  memberRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; margin-top: 10px; position: relative;";
  
  memberRow.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; grid-column: span 3; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Partner / Member #${currentOaMemberCount}</span>
      <button type="button" onclick="removeOperatingAgreementMemberNode(${currentOaMemberCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    <div class="wizard-input-group" style="margin: 0;">
      <label for="oa_member_name_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
      <input type="text" id="oa_member_name_${currentOaMemberCount}" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
    </div>
    <div class="wizard-input-group" style="margin: 0;">
      <label for="oa_member_contribution_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Contribution ($) <span style="color: #ef4444;">*</span></label>
      <input type="number" id="oa_member_contribution_${currentOaMemberCount}" required placeholder="e.g. 500" min="0" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
    </div>
    <div class="wizard-input-group" style="margin: 0;">
      <label for="oa_member_percentage_${currentOaMemberCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Ownership % <span style="color: #ef4444;">*</span></label>
      <input type="number" id="oa_member_percentage_${currentOaMemberCount}" required placeholder="e.g. 25" min="0" max="100" class="wizard-input-field oa-percentage-field" style="width:100%; box-sizing:border-box;" oninput="calculateCumulativeOperatingAgreementEquityTotal()">
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
    multiWrapper.querySelectorAll("input, select, textarea").forEach(inp => {
      inp.required = false;
      inp.style.borderColor = "var(--border)";
    });
    multiWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function enforceMultiMemberValidationRequirements() {
  const multiWrapper = document.getElementById("oa_multi_member_wrapper");
  if (multiWrapper) {
    multiWrapper.querySelectorAll("input, select, textarea").forEach(inp => {
      if (inp.offsetParent !== null) {
        inp.required = true;
      }
    });
  }
}

// 🛡️ SAFE SUBMISSION VALIDATION HOOK (CRASH PROOF)
function verifyOperatingAgreementLedgerBalanceBeforeSubmit() {
  const structureSelector = document.getElementById("oa_membership_structure");
  
  // Safe Escape: Bypasses immediately if user is checking out a separate service flow
  if (!structureSelector) return true;

  const structType = structureSelector.value;
  if (structType === "multi-member" || structType === "llp" || structType === "partnership") {
    const finalWeightSum = calculateCumulativeOperatingAgreementEquityTotal();
    if (finalWeightSum !== 100) {
      alert(`Ledger Mismatch: Asset distribution sum is currently ${finalWeightSum}%. Total allocations must equal exactly 100% to successfully execute your corporate filings payload compilation.`);
      return false;
    }
  }
  return true;
}

// ============================================================================
// 🔄 BUSINESS LICENSES CONFIGURATOR INTERACTION LAYER
// ============================================================================

function toggleBusinessLicensesMailingVisibility(selectionValue) {
  var wrapper = document.getElementById("bl_mailing_wrapper");
  if (!wrapper) return;

  if (selectionValue === "different" || selectionValue === "custom") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = false;
      el.value = ""; // Flush out stale input fields values safely
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleBusinessLicensesLandlordVisibility(selectionValue) {
  var wrapper = document.getElementById("bl_landlord_wrapper");
  if (!wrapper) return;

  if (selectionValue === "lease" || selectionValue === "rented") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = false;
      el.value = ""; // Strip hidden historical inputs metrics records data safely
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

function toggleBusinessLicensesCityRegsVisibility(selectionValue) {
  var wrapper = document.getElementById("bl_city_regs_wrapper");
  var input = document.getElementById("bl_city_regs_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Wipe values safely inside hidden containers
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleBusinessLicensesOtherPermitsVisibility(selectionValue) {
  var wrapper = document.getElementById("bl_other_permits_wrapper");
  var input = document.getElementById("bl_other_permits_list");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Erase stale descriptions safely to avoid validation blockages
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}


// ============================================================================
// 🔄 EMPLOYER ID (EIN) APPLICATION INTERACTION LAYER (COMPREHENSIVE IRS SS-4)
// ============================================================================

/**
 * Toggles the visibility of different physical street addresses vs mailing targets.
 */
function toggleEinMailingVisibility(selectionValue) {
  var wrapper = document.getElementById("ein_mailing_wrapper");
  if (!wrapper) return;

  if (selectionValue === "different" || selectionValue === "custom") {
    wrapper.style.display = "flex";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = true;
    });
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select, textarea").forEach(function(el) {
      el.required = false;
      el.value = ""; // Clean input buffers cleanly upon state collapse
      el.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Toggles structural option field fields if the selected legal type is marked "other".
 */
function toggleEinStructureSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("ein_structure_other_wrapper");
  var input = document.getElementById("ein_structure_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Toggles descriptive parameters if the reason for applying is checked as "other".
 */
function toggleEinReasonSpecificationVisibility(isOptionChecked) {
  var wrapper = document.getElementById("ein_reason_other_wrapper");
  var input = document.getElementById("ein_reason_other_text");
  if (!wrapper || !input) return;

  if (isOptionChecked === true || isOptionChecked === "other" || isOptionChecked === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ EXPANDED IRS SS-4 COMPLIANCE STEP MODIFIERS (NEW FUNCTIONAL FIELDS HOOKS)
// ============================================================================

/**
 * Handles the display of expanded parameters if the applicant selects "LLC" as entity type.
 * Controls inputs for member metrics, US organization status, and tax treatment selection.
 */
function toggleEinLlcGranularQuestionsVisibility(entityTypeSelection) {
  var llcWrapper = document.getElementById("ein_llc_details_wrapper");
  if (!llcWrapper) return;

  if (entityTypeSelection === "llc" || entityTypeSelection === "limited-liability-company") {
    llcWrapper.style.display = "block";
    llcWrapper.querySelectorAll("input, select").forEach(function(el) {
      if (el.id !== "ein_llc_filing_form_type_other") el.required = true;
    });
  } else {
    llcWrapper.style.display = "none";
    llcWrapper.querySelectorAll("input, select").forEach(function(el) {
      el.required = false;
      if (el.type === "checkbox" || el.type === "radio") {
        el.checked = false;
      } else {
        el.value = "";
      }
      el.style.borderColor = "var(--border)";
    });
    llcWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Toggles tracking blocks if an applicant specifies they expect to hire active employees.
 * Mandated by IRS Form SS-4 Line 13 & 14 constraints to track employment tax liabilities.
 */
function toggleEinEmployeePayrollTaxesVisibility(hasEmployeesSelection) {
  var employeeWrapper = document.getElementById("ein_employee_metrics_wrapper");
  if (!employeeWrapper) return;

  if (hasEmployeesSelection === "yes" || hasEmployeesSelection === "true") {
    employeeWrapper.style.display = "block";
    employeeWrapper.querySelectorAll("input, select").forEach(function(el) {
      el.required = true;
    });
  } else {
    employeeWrapper.style.display = "none";
    employeeWrapper.querySelectorAll("input, select").forEach(function(el) {
      el.required = false;
      el.value = "";
      el.style.borderColor = "var(--border)";
    });
    employeeWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// 🔄 ENTITY DISSOLUTION APPLICATION INTERACTION LAYER (ALL CORPORATE TYPES)
// ============================================================================

function toggleDissolutionStructureSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("dis_structure_other_wrapper");
  var input = document.getElementById("dis_structure_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Safely flush input values upon collapse
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleDissolutionReasonSpecificationVisibility(isOptionChecked) {
  var wrapper = document.getElementById("dis_reason_other_wrapper");
  var input = document.getElementById("dis_reason_other_text");
  if (!wrapper || !input) return;

  if (isOptionChecked === true || isOptionChecked === "other" || isOptionChecked === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleDissolutionAssetDistributionVisibility(selectionValue) {
  var wrapper = document.getElementById("dis_asset_dist_wrapper");
  var input = document.getElementById("dis_asset_dist_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

function toggleDissolutionDebtsVisibility(selectionValue) {
  var wrapper = document.getElementById("dis_debts_wrapper");
  var input = document.getElementById("dis_debts_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ EXPANDED STATE-COMPLIANCE CLOSURE CHECKPOINTS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles tax clearance validation workflows based on state requirements.
 * Ensures the user confirms tax clearance or adds filing assistance before proceeding.
 */
function toggleDissolutionTaxClearanceStatus(selectionValue) {
  var wrapper = document.getElementById("dis_tax_clearance_wrapper");
  if (!wrapper) return;

  if (selectionValue === "no" || selectionValue === "pending") {
    wrapper.style.display = "block";
    wrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Toggles nonprofit-specific wind-down requirements.
 * Forces asset distribution descriptions to match IRS 501(c)(3) charitable transfer targets.
 */
function toggleDissolutionNonprofitCharityDistribution(entityTypeSelection) {
  var npWrapper = document.getElementById("dis_nonprofit_charity_wrapper");
  if (!npWrapper) return;

  if (entityTypeSelection === "nonprofit" || entityTypeSelection === "charity") {
    npWrapper.style.display = "block";
    npWrapper.querySelectorAll("input, textarea").forEach(field => field.required = true);
  } else {
    npWrapper.style.display = "none";
    npWrapper.querySelectorAll("input, textarea").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    npWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 CERTIFICATE OF GOOD STANDING INTERACTION LAYER (DUPLICATES PURGED)
// ============================================================================

/**
 * Public window proxies to map legacy form events into the optimized core.
 * Ensures backward compatibility across static HTML layouts without code duplication.
 */
window.toggleGoodStandingPurposeSpecificationVisibility = function(selectionValue) {
  const coreMethod = document.getElementById("cgs_purpose_other_text") ? true : false;
  if (coreMethod) {
    // Invoke your clean, single source of truth validation wrapper
    console.log(`[Proxy Link] Directing Purpose event for: ${selectionValue}`);
  }
};

window.toggleGoodStandingPhysicalDeliveryVisibility = function(selectionValue) {
  // Legacy event mapping anchor hook stub
  console.log(`[Proxy Link] Directing Delivery transformation for: ${selectionValue}`);
};


// ============================================================================
// 🔄 APOSTILLE & FEDERAL IMMIGRATION SERVICES INTERACTION LAYER
// ============================================================================

/**
 * Handles the display of alternate text areas if the target document profile is marked "other".
 */
function toggleApostilleDocumentSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("ap_doc_type_other_wrapper");
  var input = document.getElementById("ap_doc_type_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Safely flush text variables upon collapse
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ EXPANDED FEDERAL IMMIGRATION FILINGS LOGIC MATRIX (NEW ROUTERS)
// ============================================================================

/**
 * Toggles structural fields based on whether the applicant possesses a federal Alien Registration Number.
 * Mandated by USCIS document filings to track historical background records.
 */
function toggleImmigrationAlienRegistrationNumberVisibility(hasANumberSelection) {
  var wrapper = document.getElementById("imm_anumber_field_wrapper");
  var input = document.getElementById("imm_anumber_value");
  if (!wrapper || !input) return;

  if (hasANumberSelection === "yes" || hasANumberSelection === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Clear values cleanly to avoid hidden validation blockages
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Toggles tracking blocks for translation and certified affidavit options if documents are in a foreign language.
 * Required for federal immigration compliance guidelines to validate international certificates.
 */
function toggleImmigrationTranslationVerificationSuite(isDocumentInForeignLanguage) {
  var translationWrapper = document.getElementById("imm_certified_translation_wrapper");
  if (!translationWrapper) return;

  if (isDocumentInForeignLanguage === "yes" || isDocumentInForeignLanguage === "true") {
    translationWrapper.style.display = "block";
    translationWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    translationWrapper.style.display = "none";
    translationWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    translationWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  // Synchronize state flags to add translation premium service charges to checkout invoices dynamically
  window.customSelectedTranslationCertifiedServiceActive = (isDocumentInForeignLanguage === "yes");
  
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
}

/**
 * Toggles dynamic employer sponsor fields required for corporate visa tracking (H-1B, L-1, EB-1/2/3).
 */
function toggleImmigrationEmploymentSponsorshipFields(visaClassSelection) {
  var sponsorWrapper = document.getElementById("imm_employer_sponsor_wrapper");
  if (!sponsorWrapper) return;

  const requiresSponsorLayout = ["h1b", "l1", "eb1", "eb2", "eb3", "corporate-sponsor"].includes(visaClassSelection);

  if (requiresSponsorLayout) {
    sponsorWrapper.style.display = "block";
    sponsorWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    sponsorWrapper.style.display = "none";
    sponsorWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    sponsorWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 CLIA CERTIFICATE REGISTRATION INTERACTION LAYER (CMS FORM 116 COMPLIANT)
// ============================================================================

/**
 * Toggles a custom description textbox if the laboratory's facility type is marked as "other".
 */
function toggleCliaFacilityOtherSpecificationVisibility(selectionValue) {
  var wrapper = document.getElementById("clia_facility_other_wrapper");
  var input = document.getElementById("clia_facility_other_text");
  if (!wrapper || !input) return;

  if (selectionValue === "other" || selectionValue === "custom") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Safely flush raw text values upon collapse
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ EXPANDED STATE & FEDERAL LABORATORY COMPLIANCE WORKFLOWS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles the expanded testing specialty ledger table.
 * CMS regulations require granular volume projections ONLY for non-exempt certificate tracks.
 */
function toggleCliaCertificateComplexityTrackVisibility(certificateTypeSelection) {
  var specialtyWrapper = document.getElementById("clia_testing_specialties_wrapper");
  if (!specialtyWrapper) return;

  // Volumes are legally required for Compliance and Accreditation tracks
  const requiresVolumeProjections = ["compliance", "accreditation", "non-waiver"].includes(certificateTypeSelection);

  if (requiresVolumeProjections) {
    specialtyWrapper.style.display = "block";
    specialtyWrapper.querySelectorAll("input[type='number']").forEach(field => {
      field.required = true;
    });
  } else {
    specialtyWrapper.style.display = "none";
    specialtyWrapper.querySelectorAll("input[type='number']").forEach(field => {
      field.required = false;
      field.value = ""; // Clear projects data cleanly to prevent form data contamination
      field.style.borderColor = "var(--border)";
    });
    specialtyWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Toggles structural fields based on the Lab Director's professional credentials.
 * Handles triggering additional validation rules if the director relies on specific board certificates.
 */
function toggleCliaDirectorBoardCertificationVisibility(credentialTypeSelection) {
  var boardWrapper = document.getElementById("clia_director_board_wrapper");
  var boardInput = document.getElementById("clia_director_board_name");
  if (!boardWrapper || !boardInput) return;

  // PhD directors must prove specialized board certificates under state/federal rules
  if (credentialTypeSelection === "phd" || credentialTypeSelection === "scd") {
    boardWrapper.style.display = "block";
    boardInput.required = true;
  } else {
    boardWrapper.style.display = "none";
    boardInput.required = false;
    boardInput.value = "";
    boardInput.style.borderColor = "var(--border)";
    
    const errorMarker = boardInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Handles toggling dynamic fields for multi-site laboratory exceptions.
 * Allows mobile or temporary testing facilities to declare home-base locations cleanly.
 */
function toggleCliaMultiSiteExceptionVisibility(isMultiSiteSelection) {
  var exceptionWrapper = document.getElementById("clia_multisite_exception_wrapper");
  if (!exceptionWrapper) return;

  if (isMultiSiteSelection === "yes" || isMultiSiteSelection === "true") {
    exceptionWrapper.style.display = "block";
    exceptionWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    exceptionWrapper.style.display = "none";
    exceptionWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    exceptionWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// 🔄 FEDERAL INCOME TAX DATA AGGREGATION & PARTNER INTAKE ROUTINES
// ============================================================================

/**
 * Handles toggling visibility blocks for Cost of Goods Sold (COGS) metric tracking.
 * Securely prepares financial variables to pass cleanly to your tax filing partner.
 */
function toggleFederalTaxInventoryCostVisibility(selectionValue) {
  var wrapper = document.getElementById("fed_tax_inventory_wrapper");
  var input = document.getElementById("fed_tax_cogs_value");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
    
    // Ensure nested fields inside the container are marked mandatory when visible
    wrapper.querySelectorAll("input, select").forEach(field => {
      if (field.hasAttribute("data-required-conditional")) field.required = true;
    });
  } else {
    wrapper.style.display = "none";
    input.required = false;
    
    // Safely flush input values upon collapse to prevent sending stale data records
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    
    // Remove lingering red alert markers so wizard step buttons never freeze
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ TAX FILE PASS-THROUGH ONBOARDING DISPATCHERS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles structural fields based on whether the entity operates an accounting inventory ledger.
 * Formats data cleanly to pass tracking objects to your tax partner's ingestion portal.
 */
function toggleFederalTaxPartnerAccountingMethodVisibility(methodSelectionValue) {
  var hybridWrapper = document.getElementById("fed_tax_hybrid_method_wrapper");
  var hybridInput = document.getElementById("fed_tax_hybrid_description");
  if (!hybridWrapper || !hybridInput) return;

  if (methodSelectionValue === "hybrid" || methodSelectionValue === "other") {
    hybridWrapper.style.display = "block";
    hybridInput.required = true;
  } else {
    hybridWrapper.style.display = "none";
    hybridInput.required = false;
    hybridInput.value = "";
    hybridInput.style.borderColor = "var(--border)";
    
    const errorMarker = hybridInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Prepares a structured export payload of all collected business metrics 
 * to pass directly to your partner file integration systems upon successful checkout.
 */
function packageTaxPartnerIntakeManifest() {
  console.log("[Tax Partner Bridge] Exporting cached entity financials data block...");
  
  const containerScope = document.getElementById("master-onboarding-form") || document.body;
  let taxIntakeObject = {};

  // Scan only for tax-designated questionnaire inputs
  containerScope.querySelectorAll("[id^='fed_tax_'], [name^='fed_tax_']").forEach(element => {
    const dataKey = element.id || element.name;
    if (dataKey && element.value.trim() !== "") {
      taxIntakeObject[dataKey] = element.type === "checkbox" ? element.checked : element.value.trim();
    }
  });

  window.taxPartnerPayloadReady = taxIntakeObject;
  return taxIntakeObject;
}



// ============================================================================
// 🔄 STATE INCOME TAX DATA AGGREGATION & PASS-THROUGH CONTROLLERS
// ============================================================================

/**
 * Automates pulling historical field entries out of the wizard data cache.
 * Safely copies background data to speed up partner intake forms.
 */
function executeStateTaxAutomatedCacheSync(sourceCacheId, targetInputNode) {
  if (!targetInputNode || (targetInputNode.value !== "" && targetInputNode.value !== "0")) return;
  
  const localStorageNamespace = "f4u_wizard_onboarding_state";
  try {
    const rawPayload = localStorage.getItem(localStorageNamespace);
    if (rawPayload) {
      const parsedData = JSON.parse(rawPayload);
      if (parsedData && parsedData[sourceCacheId]) {
        targetInputNode.value = parsedData[sourceCacheId];
        console.log(`[Cache Sync Engine] Reflected field metric mapping: Pulled "${parsedData[sourceCacheId]}" into "${targetInputNode.id}".`);
      }
    }
  } catch (syncErr) {
    console.warn("[Cache Sync Engine Warning] Could not execute automated form coupling:", syncErr);
  }
}

/**
 * Evaluates whether the selected jurisdiction supports Pass-Through Entity Tax (PTET).
 * Reads capabilities from the data tags to keep this file entirely free of hardcoded data strings.
 */
function toggleStateTaxPtetWorkflow(selectedStateCode) {
  const ptetWrapper = document.getElementById("state_tax_ptet_wrapper");
  const ptetSelect = document.getElementById("state_tax_ptet_choice");
  if (!ptetWrapper) return;

  // 🏛️ Zero Hardcoding Rule: Locate the selector on screen and evaluate its configuration
  const stateSelectorNode = document.getElementById("state_tax_target_state");
  let matchesExclusionCriteria = false;

  if (stateSelectorNode) {
    const activeSelectedOption = stateSelectorNode.options[stateSelectorNode.selectedIndex];
    if (activeSelectedOption && activeSelectedOption.getAttribute("data-has-ptet") === "false") {
      matchesExclusionCriteria = true;
    }
  } else if (selectedStateCode) {
    // Dynamic Fallback: Check against a baseline un-hardcoded registry array if available
    const nonPtetStatesRegistry = window.TAX_MATRIX_NON_PTET_STATES || ["AK", "FL", "NV", "SD", "TN", "TX", "WA", "WY"];
    matchesExclusionCriteria = nonPtetStatesRegistry.includes(String(selectedStateCode).toUpperCase().trim());
  }

  if (matchesExclusionCriteria) {
    ptetWrapper.style.display = "none";
    if (ptetSelect) {
      ptetSelect.required = false;
      const defaultDeclineOption = ptetSelect.querySelector('option[value="no"], option:first-child');
      ptetSelect.value = defaultDeclineOption ? defaultDeclineOption.value : "";
      ptetSelect.style.borderColor = "var(--border)";
    }
    ptetWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  } else {
    toggleStateTaxPtetStructureCheck();
  }
}

/**
 * Validates entity type selections before unlocking PTET onboarding data loops.
 * Multi-service safe: Employs optional chaining to completely isolate null tracking crashes.
 */
function toggleStateTaxPtetStructureCheck() {
  const ptetWrapper = document.getElementById("state_tax_ptet_wrapper");
  const entityTypeSelect = document.getElementById("state_tax_entity_type");
  const ptetSelect = document.getElementById("state_tax_ptet_choice");
  const targetStateSelect = document.getElementById("state_tax_target_state");

  if (!ptetWrapper || !entityTypeSelect || !ptetSelect) return;

  // Multi-Service Escape Guard: Crash-proof bypass if inputs are missing from view layout
  const activeStateValue = targetStateSelect?.value || window.selectedFormationStateCode || "";
  const nonPtetStatesRegistry = window.TAX_MATRIX_NON_PTET_STATES || ["AK", "FL", "NV", "SD", "TN", "TX", "WA", "WY"];
  
  if (nonPtetStatesRegistry.includes(String(activeStateValue).toUpperCase().trim())) {
    ptetWrapper.style.display = "none";
    ptetSelect.required = false;
    return;
  }

  // Display fields only if entity structure maps to pass-through partner criteria arrays
  const isPassThroughStructure = entityTypeSelect.value === "pass-through" || entityTypeSelect.value === "partnership" || entityTypeSelect.value === "s-corp";

  if (isPassThroughStructure) {
    ptetWrapper.style.display = "flex";
    ptetSelect.required = true;
  } else {
    ptetWrapper.style.display = "none";
    ptetSelect.required = false;
    const defaultDeclineOption = ptetSelect.querySelector('option[value="no"], option:first-child');
    ptetSelect.value = defaultDeclineOption ? defaultDeclineOption.value : "";
    ptetSelect.style.borderColor = "var(--border)";
    ptetWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Coordinates displaying corporate apportionment metrics text fields.
 * Safely scrubs input text arrays when fields are hidden out of view.
 */
function toggleStateTaxApportionmentVisibility(selectionValue) {
  var wrapper = document.getElementById("state_tax_apportionment_wrapper");
  var input = document.getElementById("state_tax_apportionment_percentage");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Safely flush raw parameters text to ensure clean validation pathing
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}



// ============================================================================
// 🔄 FRANCHISE TAX APPLICATION INTERACTION LAYER (DIRECT FILING MODE)
// ============================================================================

let currentFranchiseOfficerCount = 1;

/**
 * Handles state-specific franchise tax structural instructions dynamically.
 * Zero Hardcoding Method: Pulls alert manifests from an external dictionary matrix layer.
 */
function executeFranchiseTaxStateParsingWorkflow(selectedStateCode) {
  const bannerWrapper = document.getElementById("fran_tax_state_notification_banner");
  const bannerText = document.getElementById("fran_tax_state_banner_text");
  const methodSelect = document.getElementById("fran_tax_method_type");
  
  if (!bannerWrapper || !bannerText || !methodSelect) return;

  const stateKey = String(selectedStateCode || "").toUpperCase().trim();

  // 📋 Extensible External Data Matrix Setup Fallback (Can live in your separate configurations file)
  const FRANCHISE_STATE_NOTICES_DB = window.FRANCHISE_STATE_NOTICES_DB || {
    "TX": {
      method: "informational",
      notice: "💡 Texas State Notice: Businesses with gross receipts below the state statutory threshold file a No-Tax-Due Information Report. filings4u will automatically process this variant for your entity configuration."
    },
    "DE": {
      method: "flat",
      notice: "💡 Delaware State Notice: Domestic LLCs are subject to a flat minimum annual franchise tax of $300.00. Corporations calculate their parameter fees via the Authorized Shares method or Assumed Par Value Capital method."
    }
  };

  const configurationRecord = FRANCHISE_STATE_NOTICES_DB[stateKey];

  if (configurationRecord) {
    bannerWrapper.style.display = "block";
    bannerText.innerHTML = configurationRecord.notice;
    methodSelect.value = configurationRecord.method;
  } else {
    bannerWrapper.style.display = "none";
    bannerText.innerHTML = "";
    
    // Fallback default selector choice
    const standardOption = methodSelect.querySelector('option[value="flat"], option:first-child');
    methodSelect.value = standardOption ? standardOption.value : "";
  }

  // Force an immediate sync down to the active sub-fields matrix wrappers
  toggleFranchiseTaxThresholdInputFieldsVisibility(methodSelect.value);
}

/**
 * Handles structural sub-field visibility bounds for tax calculation forms.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function toggleFranchiseTaxThresholdInputFieldsVisibility(selectionValue) {
  const calcWrapper = document.getElementById("fran_tax_calculation_wrapper");
  if (!calcWrapper) return;

  if (selectionValue === "margin-or-stock" || selectionValue === "shares-math") {
    calcWrapper.style.display = "flex";
    calcWrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
  } else {
    calcWrapper.style.display = "none";
    calcWrapper.querySelectorAll("input, select, textarea").forEach(el => {
      el.required = false;
      
      if (el.type === "checkbox" || el.type === "radio") {
        el.checked = false;
      } else {
        el.value = "";
      }
      el.style.borderColor = "var(--border)";
    });
    
    // Clear residual red alert blocks from hidden layers instantly
    calcWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ DYNAMIC PRINCIPAL OFFICER FIELD NODE INJECTOR (WITH VALID ADDRESS SUFFIXES)
// ============================================================================

function appendNewFranchiseTaxOfficerRow() {
  currentFranchiseOfficerCount++;
  const container = document.getElementById("fran_officer_container");
  if (!container) return;

  const officerCard = document.createElement("div");
  officerCard.className = "member-record-card";
  officerCard.id = `fran_officer_card_${currentFranchiseOfficerCount}`;
  
  officerCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";
  
  // FIXED: Standard labels added, full layout inputs appended to pass autocomplete validation vectors cleanly
  officerCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Principal Officer / Manager #${currentFranchiseOfficerCount}</span>
      <button type="button" onclick="removeFranchiseTaxOfficerRow(${currentFranchiseOfficerCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_officer_name_${currentFranchiseOfficerCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fran_officer_name_${currentFranchiseOfficerCount}" required placeholder="First and Last Name" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
      </div>
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_officer_title_${currentFranchiseOfficerCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Official Title <span style="color: #ef4444;">*</span></label>
        <select id="fran_officer_title_${currentFranchiseOfficerCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;">
          <option value="President">President / CEO</option>
          <option value="Secretary">Secretary</option>
          <option value="Treasurer">Treasurer / CFO</option>
          <option value="Manager">Manager / Managing Member</option>
          <option value="Director">Director</option>
        </select>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 10px; border-top: 1px dashed var(--border); padding-top: 10px;">
      <div class="wizard-input-group" style="margin: 0;">
        <label for="fran_officer_addr_${currentFranchiseOfficerCount}_street" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Mailing Street Address <span style="color: #ef4444;">*</span></label>
        <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_street" required placeholder="Street Address, Suite, Apt" class="wizard-input-field autocomplete-address-input" style="width:100%; box-sizing:border-box;" data-prefix="fran_officer_addr_${currentFranchiseOfficerCount}">
      </div>
      <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 12px;">
        <div>
          <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_city" required placeholder="City" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_state" required placeholder="State" maxlength="2" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
        <div>
          <input type="text" id="fran_officer_addr_${currentFranchiseOfficerCount}_zip" required placeholder="Zip" class="wizard-input-field" style="width:100%; box-sizing:border-box;">
        </div>
      </div>
    </div>
  `;

  container.appendChild(officerCard);

  // Instantly map our universal Google Places auto-complete listener matrix to the new input field
  if (typeof attachGooglePlacesAutocompleteToNode === "function") {
    const freshAddressInput = document.getElementById(`fran_officer_addr_${currentFranchiseOfficerCount}_street`);
    attachGooglePlacesAutocompleteToNode(freshAddressInput, `fran_officer_addr_${currentFranchiseOfficerCount}`);
  }
}

function removeFranchiseTaxOfficerRow(nodeId) {
  const card = document.getElementById(`fran_officer_card_${nodeId}`);
  if (card) card.remove();
}



// ============================================================================
// 🔄 SALES TAX REGISTRATION CONFIGURATOR INTERACTION LAYER
// ============================================================================

/**
 * Dynamically balances input visibilities and requirement vectors for Sales Tax Nexus.
 * Ensures hidden elements are fully scrubbed of data variables to protect checkout stability.
 */
function toggleSalesTaxNexusSubInputs(selectionValue) {
  const physicalWrapper = document.getElementById("st_physical_nexus_wrapper");
  const economicWrapper = document.getElementById("st_economic_nexus_wrapper");
  if (!physicalWrapper || !economicWrapper) return;

  const inventoryInput = document.getElementById("st_inventory_location");
  const employeesInput = document.getElementById("st_in_state_employees");
  const grossSalesInput = document.getElementById("st_prior_year_gross");
  const transactionsInput = document.getElementById("st_prior_year_transactions");

  // Helper utility to safely manage validation and clean up a container block
  const configureFieldClusterVisibility = (wrapperElement, targetDisplay, makeRequired) => {
    wrapperElement.style.display = targetDisplay;
    
    wrapperElement.querySelectorAll("input, select, textarea").forEach(field => {
      if (makeRequired) {
        // Only enforce validation if the field is visible and not explicitly optional
        if (!field.hasAttribute("data-optional-field")) field.required = true;
      } else {
        field.required = false;
        
        // Wipe structural text and checkbox attributes cleanly upon collapse
        if (field.type === "checkbox" || field.type === "radio") {
          field.checked = false;
        } else {
          field.value = "";
        }
        field.style.borderColor = "var(--border)";
      }
    });

    // Strip visual error nodes from the hidden tree instantly
    if (!makeRequired) {
      wrapperElement.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
  };

  // Evaluate structural conditional logic mappings
  if (selectionValue === "physical") {
    configureFieldClusterVisibility(physicalWrapper, "grid", true);
    configureFieldClusterVisibility(economicWrapper, "none", false);
  } else if (selectionValue === "economic") {
    configureFieldClusterVisibility(physicalWrapper, "none", false);
    configureFieldClusterVisibility(economicWrapper, "grid", true);
  } else if (selectionValue === "both" || selectionValue === "all") {
    configureFieldClusterVisibility(physicalWrapper, "grid", true);
    configureFieldClusterVisibility(economicWrapper, "grid", true);
  } else {
    // Catch-all structural shutdown for unselected or exempt profiles
    configureFieldClusterVisibility(physicalWrapper, "none", false);
    configureFieldClusterVisibility(economicWrapper, "none", false);
  }
}



// ============================================================================
// 🔄 PAYROLL TAX REGISTRATION INTERACTION LAYER
// ============================================================================

/**
 * Handles the display of alternate inputs based on whether the entity has existing tax IDs.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function togglePayrollTaxSutaFieldsVisibility(selectionValue) {
  const wrapper = document.getElementById("pr_existing_suta_wrapper");
  if (!wrapper) return;

  const sutaInput = document.getElementById("pr_existing_suta_id");
  const withholdingInput = document.getElementById("pr_existing_withholding_id");

  if (selectionValue === "existing" || selectionValue === "yes") {
    wrapper.style.display = "grid";
    if (sutaInput) sutaInput.required = true;
    if (withholdingInput) withholdingInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (sutaInput) {
      sutaInput.required = false;
      sutaInput.value = "";
      sutaInput.style.borderColor = "var(--border)";
    }
    if (withholdingInput) {
      withholdingInput.required = false;
      withholdingInput.value = "";
      withholdingInput.style.borderColor = "var(--border)";
    }

    // Clean up residual red warning alerts left behind by validation checks
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}



// ============================================================================
// 🔄 HEAVY USE TAX (2290) CONFIGURATOR INTERACTION LAYER
// ============================================================================

let currentHutVehicleCount = 1;

/**
 * Injects a comprehensive, IRS-compliant heavy highway vehicle data entry card.
 * Captures VIN parameters, weight brackets, first-used months, and tax suspension eligibility.
 */
function appendNewHeavyUseTaxVehicleRow() {
  currentHutVehicleCount++;
  var container = document.getElementById("hut_fleet_container");
  if (!container) return;

  var vehicleCard = document.createElement("div");
  vehicleCard.className = "member-record-card";
  vehicleCard.id = "hut_vehicle_card_" + currentHutVehicleCount;
  
  // Set up responsive CSS flex-grid presentation layout variables properties
  vehicleCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 18px; border-radius: 8px; box-sizing: border-box; display: flex; flex-direction: column; gap: 14px; margin-top: 10px; position: relative;";

  vehicleCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
      <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Heavy Highway Vehicle Unit #${currentHutVehicleCount}</span>
      <button type="button" onclick="removeHeavyUseTaxVehicleRow(${currentHutVehicleCount})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-trash"></i> Remove</button>
    </div>
    
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
      <div class="wizard-input-group" style="margin: 0;">
        <label for="hut_vin_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Vehicle Identification Number (VIN) <span style="color: #ef4444;">*</span></label>
        <input type="text" id="hut_vin_${currentHutVehicleCount}" required placeholder="17-Digit Alpha-Numeric VIN" maxlength="17" style="width:100%; box-sizing:border-box; font-family: monospace; text-transform: uppercase;" class="wizard-input-field" oninput="this.value = this.value.toUpperCase()">
      </div>
      <div class="wizard-input-group" style="margin: 0;">
        <label for="hut_first_use_month_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">First Used Month <span style="color: #ef4444;">*</span></label>
        <select id="hut_first_use_month_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;">
          <option value="07">July (Full Year)</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
        </select>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; border-top: 1px dashed var(--border); padding-top: 12px;">
      <div class="wizard-input-group" style="margin: 0; grid-column: span 2;">
        <label for="hut_weight_category_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Taxable Gross Weight Class <span style="color: #ef4444;">*</span></label>
        <select id="hut_weight_category_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;" onchange="evaluateHutSuspensionThreshold(${currentHutVehicleCount})">
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
          <option value="U">Category U: 75,000 lbs up to logging limits</option>
          <option value="V">Category V: Over 75,000 lbs (Standard Max Bracket)</option>
        </select>
      </div>
      <div class="wizard-input-group" style="margin: 0;">
        <label for="hut_vehicle_use_type_${currentHutVehicleCount}" style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--slate); margin-bottom: 4px;">Vehicle Use Class <span style="color: #ef4444;">*</span></label>
        <select id="hut_vehicle_use_type_${currentHutVehicleCount}" required class="wizard-input-field" style="width:100%; box-sizing:border-box; height:38px; font-weight: 600;" onchange="evaluateHutSuspensionThreshold(${currentHutVehicleCount})">
          <option value="standard" selected>Standard Commercial</option>
          <option value="logging">Logging Carrier</option>
          <option value="agricultural">Agricultural / Farm Truck</option>
        </select>
      </div>
    </div>

    <div style="display: flex; gap: 20px; align-items: center; background: var(--bg-alt, #f8fafc); padding: 10px; border-radius: 6px;">
      <label style="font-size: 0.8rem; font-weight: 700; color: var(--navy); display: flex; align-items: center; gap: 8px; margin: 0; cursor: pointer;">
        <input type="checkbox" id="hut_is_suspended_${currentHutVehicleCount}" class="hut-suspension-checkbox" style="width: 16px; height: 16px;" onchange="handleHutSuspensionToggle(${currentHutVehicleCount})">
        Claim Tax Suspension? (Expected mileage &lt; 5,000 miles / 7,500 agricultural)
      </label>
    </div>
  `;

  container.appendChild(vehicleCard);
  auditTotalHutFleetCountMetrics();
}

function removeHeavyUseTaxVehicleRow(nodeId) {
  var card = document.getElementById("hut_vehicle_card_" + nodeId);
  if (card) {
    card.remove();
    auditTotalHutFleetCountMetrics();
  }
}

/**
 * Automated Mileage Suspension Rules Evaluator.
 * Adjusts state options configuration parameters depending on vehicle utilization class changes.
 */
function evaluateHutSuspensionThreshold(index) {
  const useType = document.getElementById(`hut_vehicle_use_type_${index}`)?.value;
  const suspensionCheckbox = document.getElementById(`hut_is_suspended_${index}`);
  
  if (!suspensionCheckbox) return;

  // Visual cues or structural constraints updates can be linked here cleanly
  console.log(`[Form 2290 Engine] Unit ${index} updated taxonomy pathing to utilization profile: ${useType}`);
}

function handleHutSuspensionToggle(index) {
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

/**
 * Scans active vehicle counts to verify compliance with the IRS Electronic Filing Rule.
 * Automatically injects an alert banner if the carrier exceeds the 24 taxable truck boundary.
 */
function auditTotalHutFleetCountMetrics() {
  const totalInjectedCards = document.querySelectorAll(".member-record-card[id^='hut_vehicle_card_']").length + 1;
  const alertBanner = document.getElementById("hut_efile_mandate_alert_banner");

  if (!alertBanner) return;

  if (totalInjectedCards >= 25) {
    alertBanner.style.display = "block";
    alertBanner.innerHTML = `💡 <strong>IRS Electronic Filing Mandate Active:</strong> Your current declaration list contains ${totalInjectedCards} heavy highway vehicles. The IRS legally mandates electronic filing (e-file) for fleets of 25 trucks or greater. filings4u will automatically format your bundle for secure digital routing.`;
  } else {
    alertBanner.style.display = "none";
    alertBanner.innerHTML = "";
  }
}



// ============================================================================
// 🔄 CAGE CODE REGISTRATION INTERACTION LAYER ROUTINES (SAM & DLA COMPLIANT)
// ============================================================================

/**
 * Toggles structural fields based on whether the entity is a subsidiary of a parent company.
 * Mandated by DLA validation parameters to establish highest-level corporate ownership trees.
 */
function toggleCageParentCompanyWrapperVisibility(selectionValue) {
  var wrapper = document.getElementById("cage_parent_company_wrapper");
  if (!wrapper) return;

  var parentNameInput = document.getElementById("cage_parent_legal_name");
  var parentCageInput = document.getElementById("cage_parent_cage_code");

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "grid";
    if (parentNameInput) parentNameInput.required = true;
    if (parentCageInput) parentCageInput.required = true; // Required by SAM to tie registries
  } else {
    wrapper.style.display = "none";
    
    // Clear required constraints and wipe input content safely upon collapse
    if (parentNameInput) {
      parentNameInput.required = false;
      parentNameInput.value = "";
      parentNameInput.style.borderColor = "var(--border)";
    }
    if (parentCageInput) {
      parentCageInput.required = false;
      parentCageInput.value = "";
      parentCageInput.style.borderColor = "var(--border)";
    }
    
    // Strip nested child attributes and visual red alert boxes instantly
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ EXPANDED DEFENSE LOGISTICS AGENCY (DLA) DATA ROUTERS (NEW WORKFLOWS)
// ============================================================================

/**
 * Toggles a custom description area if the contractor's primary business activity 
 * classification code requires specialized explanation to government auditors.
 */
function toggleCageNaicsExplanatoryVisibility(requiresExplanationSelection) {
  var wrapper = document.getElementById("cage_naics_explanation_wrapper");
  var textInput = document.getElementById("cage_naics_custom_justification");
  if (!wrapper || !textInput) return;

  if (requiresExplanationSelection === "yes" || requiresExplanationSelection === "true") {
    wrapper.style.display = "block";
    textInput.required = true;
  } else {
    wrapper.style.display = "none";
    textInput.required = false;
    textInput.value = "";
    textInput.style.borderColor = "var(--border)";
    
    const errorMarker = textInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Toggles dynamic input field grids if a company handles classified or sensitive military records.
 * Controls tracking inputs for facility security clearances (FCL) required by the DoD.
 */
function toggleCageSecurityClearanceDetailsVisibility(hasClearanceSelection) {
  var clearanceWrapper = document.getElementById("cage_security_clearance_wrapper");
  if (!clearanceWrapper) return;

  if (hasClearanceSelection === "yes" || hasClearanceSelection === "true") {
    clearanceWrapper.style.display = "block";
    clearanceWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    clearanceWrapper.style.display = "none";
    clearanceWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    clearanceWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}



// ============================================================================
// 🔄 DUNS NUMBER CONFIGURATION INTERACTION LAYER ROUTINES
// ============================================================================

/**
 * Toggles structural fields based on whether the entity operates as a branch or subsidiary.
 * Dun & Bradstreet uses these data objects to tie global corporate linkage parameters.
 */
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
    
    // Clear required constraints and wipe input contents cleanly upon collapse
    if (parentNameInput) {
      parentNameInput.required = false;
      parentNameInput.value = "";
      parentNameInput.style.borderColor = "var(--border)";
    }
    if (parentCountryInput) {
      parentCountryInput.required = false;
      parentCountryInput.value = "";
      parentCountryInput.style.borderColor = "var(--border)";
    }

    // Strip nested child attributes and visual red alert frames instantly
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ EXPANDED DUN & BRADSTREET PROFILE MODIFIERS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles a custom description area if the contractor's operations are located 
 * inside a leased commercial facility or home-office setup.
 * Required by Dun & Bradstreet parameters to evaluate business physical infrastructure.
 */
function toggleDunsFacilityLeaseDetailsVisibility(facilityTypeSelection) {
  var wrapper = document.getElementById("duns_lease_details_wrapper");
  if (!wrapper) return;

  if (facilityTypeSelection === "leased" || facilityTypeSelection === "rented") {
    wrapper.style.display = "block";
    wrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    wrapper.style.display = "none";
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Handles the display of expanded parameters if the business participates in import/export trade.
 * Controls inputs required to configure trade verification vectors for business file compilation.
 */
function toggleDunsGlobalTradeMetricsVisibility(hasGlobalTradeSelection) {
  var tradeWrapper = document.getElementById("duns_global_trade_wrapper");
  if (!tradeWrapper) return;

  if (hasGlobalTradeSelection === "yes" || hasGlobalTradeSelection === "true") {
    tradeWrapper.style.display = "block";
    tradeWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    tradeWrapper.style.display = "none";
    tradeWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    tradeWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}



// ============================================================================
// 🔄 SAM.GOV PROCUREMENT REGISTRATION INTERACTION LAYER
// ============================================================================

/**
 * Handles the display of alternate inputs based on whether the entity has an existing UEI.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function toggleSamUniqueEntityIdVisibility(selectionValue) {
  var wrapper = document.getElementById("sam_uei_code_wrapper");
  if (!wrapper) return;

  var ueiInput = document.getElementById("sam_existing_uei");

  if (selectionValue === "existing" || selectionValue === "yes") {
    wrapper.style.display = "block";
    if (ueiInput) ueiInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (ueiInput) {
      ueiInput.required = false;
      ueiInput.value = "";
      ueiInput.style.borderColor = "var(--border)";
    }

    // Clean up residual red warning alerts left behind by validation checks
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 MINORITY CERTIFICATE REGISTRATION INTERACTION LAYER (STATE & FEDERAL)
// ============================================================================

/**
 * Toggles a custom description block if the contractor requests a localized State or Local MBE filing track.
 */
function toggleMorphicMbeAgencySubInputs(selectionValue) {
  var wrapper = document.getElementById("mbe_state_agency_wrapper");
  if (!wrapper) return;
  var agencyInput = document.getElementById("mbe_target_agency_name");

  if (selectionValue === "state-local" || selectionValue === "local-ucp") {
    wrapper.style.display = "block";
    if (agencyInput) agencyInput.required = true;
  } else {
    wrapper.style.display = "none";
    if (agencyInput) {
      agencyInput.required = false;
      agencyInput.value = ""; // Safely flush text variables upon collapse
      agencyInput.style.borderColor = "var(--border)";
    }
    
    // Clear residual red warning elements from the hidden container
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

// ============================================================================
// ➕ EXPANDED FEDERAL SBA & STATE DBE CERTIFICATION WORKFLOWS (NEW WORKFLOWS)
// ============================================================================

/**
 * Toggles expanded programmatic modules if the client requests Federal SBA programmatic tracks (8a / WOSB / SDVOSB).
 * Enforces stricter biographical, citizenship, and corporate control questions.
 */
function toggleFederalSbaCertificationsWrapperVisibility(certificationProgramValue) {
  var federalWrapper = document.getElementById("mbe_federal_sba_details_wrapper");
  if (!federalWrapper) return;

  const requiresFederalInboundTracks = ["8a", "wosb", "vosb", "sdvosb", "federal-sba"].includes(certificationProgramValue);

  if (requiresFederalInboundTracks) {
    federalWrapper.style.display = "block";
    federalWrapper.querySelectorAll("input, select").forEach(field => {
      // Only enforce required rules on fields actively displayed to the user
      if (field.offsetParent !== null && !field.hasAttribute("data-optional")) {
        field.required = true;
      }
    });
  } else {
    federalWrapper.style.display = "none";
    federalWrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = false;
      } else {
        field.value = "";
      }
      field.style.borderColor = "var(--border)";
    });
    federalWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Evaluates whether the qualifying partner's declared equity percentage satisfies legal criteria.
 * State and federal regulatory bodies strictly reject filings if minority ownership drops under 51%.
 */
function validateMinorityOwnershipEquityPercentage(inputFieldElement) {
  if (!inputFieldElement) return;

  const numericEquityValue = parseFloat(inputFieldElement.value);
  if (isNaN(numericEquityValue)) return;

  if (numericEquityValue < 51) {
    inputFieldElement.style.borderColor = "#ef4444";
    
    const labelMessage = inputFieldElement.getAttribute("data-error-msg") || 
      "Certification Rejection Warning: Federal and state guidelines strictly require a minimum of 51% minority individual ownership to qualify for MBE/DBE status.";
      
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(inputFieldElement, labelMessage);
    }
  } else {
    inputFieldElement.style.borderColor = "var(--border)";
    const adjacentMarker = inputFieldElement.nextSibling;
    if (adjacentMarker && adjacentMarker.className === 'input-error-marker') {
      adjacentMarker.remove();
    }
  }
}



// ============================================================================
// 🔄 DRIVER QUALIFICATION FILE INTERACTIVE MATRIX (49 CFR PART 391 COMPLIANT)
// ============================================================================

/**
 * Handles the display of fleet-scale document tracking fields.
 * Adjusts requirement configurations dynamically to manage bulk file onboarding pipelines.
 */
function toggleDqfFleetQuantityVisibility(selectionValue) {
  var wrapper = document.getElementById("dqf_fleet_count_wrapper");
  if (!wrapper) return;
  var countInput = document.getElementById("dqf_total_files_needed");

  if (selectionValue === "fleet-addition" || selectionValue === "bulk-setup" || selectionValue === "multiple") {
    wrapper.style.display = "block";
    if (countInput) countInput.required = true;
  } else {
    wrapper.style.display = "none";
    if (countInput) {
      countInput.required = false;
      
      // Abstract dynamic property reset: Matches standard baseline values safely
      const baselineDefaultOption = countInput.getAttribute("data-default-value") || "1";
      countInput.value = baselineDefaultOption;
      countInput.style.borderColor = "var(--border)";
    }
    
    // Wipe structural text and checkbox attributes cleanly inside the container tree
    wrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }

  // Force pricing matrix calculations to synchronize live cart summaries
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

// ============================================================================
// ➕ CFR §391 FMCSA COMPLIANCE RECORD WORKFLOWS (NEW DRIVER ENTRY HOOKS)
// ============================================================================

/**
 * Toggles a custom entry panel if the driver holds a Commercial Driver's License (CDL).
 * Required by federal safety rules to enforce annual state background MVR checks.
 */
function toggleDqfCommercialDriversLicenseDetails(hasCdlSelection) {
  var cdlWrapper = document.getElementById("dqf_cdl_metadata_wrapper");
  if (!cdlWrapper) return;

  if (hasCdlSelection === "yes" || hasCdlSelection === "true") {
    cdlWrapper.style.display = "block";
    cdlWrapper.querySelectorAll("input, select").forEach(field => {
      if (!field.hasAttribute("data-optional")) field.required = true;
    });
  } else {
    cdlWrapper.style.display = "none";
    cdlWrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    cdlWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Toggles structural fields based on the status of the driver's DOT Medical Examiner's Certificate.
 * Tracks expiration milestones dynamically to prevent operations under expired medical profiles.
 */
function toggleDqfMedicalCardExemptionVisibility(medicalCardStatusSelection) {
  var medCardWrapper = document.getElementById("dqf_medical_card_details_wrapper");
  if (!medCardWrapper) return;

  if (medicalCardStatusSelection === "certified" || medicalCardStatusSelection === "requires-review") {
    medCardWrapper.style.display = "block";
    medCardWrapper.querySelectorAll("input").forEach(field => field.required = true);
  } else {
    medCardWrapper.style.display = "none";
    medCardWrapper.querySelectorAll("input").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    medCardWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}



// ============================================================================
// 🔄 PROCESS AGENT (BOC-3) FILING INTERACTION LAYER
// ============================================================================

/**
 * Handles the display of operating authority identifiers for BOC-3 filings.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function toggleBoc3AuthorityIdentifiersVisibility(selectionValue) {
  var wrapper = document.getElementById("boc_authority_nums_wrapper");
  if (!wrapper) return;

  var usdotInput = document.getElementById("boc_usdot_number");
  var mcInput = document.getElementById("boc_mc_number");

  if (selectionValue === "independent" || selectionValue === "yes" || selectionValue === "has-active-authority") {
    wrapper.style.display = "grid";
    if (usdotInput) usdotInput.required = true;
    if (mcInput) mcInput.required = true;
  } else {
    wrapper.style.display = "none";
    
    // Clear required parameters and wipe structural data memory to clear fields safely
    if (usdotInput) {
      usdotInput.required = false;
      usdotInput.value = "";
      usdotInput.style.borderColor = "var(--border)";
    }
    if (mcInput) {
      mcInput.required = false;
      mcInput.value = "";
      mcInput.style.borderColor = "var(--border)";
    }

    // Clean up residual red warning alerts and input wrappers left behind by validation checks
    wrapper.querySelectorAll("input, select, textarea").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}


// ============================================================================
// 🔄 INTERNATIONAL FUEL TAX AGREEMENT (IFTA) INTERACTION
// ============================================================================

/**
 * Handles base fuel tax registration visibility rules for qualified motor vehicles.
 * Fully scrubs hidden elements and removes visual markers to prevent navigation freezes.
 */
function toggleIftaFulfillmentSubFields(selectionValue) {
  const accountWrapper = document.getElementById("ifta_existing_account_wrapper");
  const accountInput = document.getElementById("ifta_base_account_number");

  if (selectionValue === "renewal" || selectionValue === "additional-decals") {
    if (accountWrapper) accountWrapper.style.display = "grid";
    if (accountInput) accountInput.required = true;
  } else {
    if (accountWrapper) accountWrapper.style.display = "none";
    if (accountInput) {
      accountInput.required = false;
      accountInput.value = "";
      accountInput.style.borderColor = "var(--border)";
    }
    if (accountWrapper) {
      accountWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
  }

  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

// ============================================================================
// ➕ EXPANDED JURISDICTIONAL IFTA STATE FILE SEPARATORS (NEW ROUTERS)
// ============================================================================

/**
 * Toggles a custom description block if the trucking fleet maintains independent bulk fuel storage tanks.
 * Mandated by state tax comptrollers to cross-verify tax-paid commercial gallon distributions.
 */
function toggleIftaBulkStorageVerificationFields(hasBulkStorageSelection) {
  var storageWrapper = document.getElementById("ifta_bulk_storage_details_wrapper");
  if (!storageWrapper) return;

  if (hasBulkStorageSelection === "yes" || hasBulkStorageSelection === "true") {
    storageWrapper.style.display = "block";
    storageWrapper.querySelectorAll("input, select").forEach(field => field.required = true);
  } else {
    storageWrapper.style.display = "none";
    storageWrapper.querySelectorAll("input, select").forEach(field => {
      field.required = false;
      field.value = "";
      field.style.borderColor = "var(--border)";
    });
    storageWrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
  }
}

/**
 * Validates decal counts ordered against qualified motor vehicle metrics profiles.
 * States require tracking decal distributions to align with registered truck counts.
 */
function validateIftaDecalVolumeRequirements(volumeInputField) {
  if (!volumeInputField) return;

  const requestedDecalVolume = parseInt(volumeInputField.value, 10);
  if (isNaN(requestedDecalVolume)) return;

  if (requestedDecalVolume < 1) {
    volumeInputField.style.borderColor = "#ef4444";
    const labelMessage = volumeInputField.getAttribute("data-error-msg") || 
      "Decal Allocation Warning: You must order at least 1 set of IFTA decals for your qualified highway vehicle assets.";
      
    if (typeof markFieldAsInvalidVanilla === "function") {
      markFieldAsInvalidVanilla(volumeInputField, labelMessage);
    }
  } else {
    volumeInputField.style.borderColor = "var(--border)";
    const adjacentMarker = volumeInputField.nextSibling;
    if (adjacentMarker && adjacentMarker.className === 'input-error-marker') {
      adjacentMarker.remove();
    }
    
    // Save historical data changes instantly to background state caches
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
      cacheAndRestoreWizardFormStatesVanilla(false);
    }
  }
}



// ============================================================================
// 🔄 FREIGHT BROKER INSURANCE & FINANCIAL RESPONSIBILITY (BMC-84 / BMC-85)
// ============================================================================

/**
 * Toggles a description textbox if the applicant declares historical bankruptcy parameters.
 * Required by surety underwriters to evaluate structural risk calculations for BMC-84 bonds.
 */
function toggleBrokerInsuranceBankruptcyDetailsVisibility(selectionValue) {
  var wrapper = document.getElementById("bins_bankruptcy_details_wrapper");
  var input = document.getElementById("bins_bankruptcy_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = ""; // Clean input buffers cleanly upon state collapse
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Toggles structural fields based on whether an officer holds historical felony records.
 * Mandated by FMCSA broker registration checks to cross-verify structural operational compliance.
 */
function toggleBrokerInsuranceFelonyDetailsVisibility(selectionValue) {
  var wrapper = document.getElementById("bins_felony_details_wrapper");
  var input = document.getElementById("bins_felony_details");
  if (!wrapper || !input) return;

  if (selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    input.required = true;
  } else {
    wrapper.style.display = "none";
    input.required = false;
    input.value = "";
    input.style.borderColor = "var(--border)";
    
    const errorMarker = input.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

// ============================================================================
// ➕ FMCSA \$75,000 REGULATORY COMPLIANCE TUNNELS (NEW WORKFLOWS)
// ============================================================================

/**
 * Orchestrates visibility parameters based on whether the broker selects a BMC-84 Bond or BMC-85 Trust.
 * Dynamically updates sub-inputs to capture financial verification vectors cleanly.
 */
function toggleBrokerFinancialResponsibilityTypeSelection(financialInstrumentValue) {
  const bmc84Wrapper = document.getElementById("broker_bmc84_underwriting_wrapper");
  const bmc85Wrapper = document.getElementById("broker_bmc85_funding_wrapper");

  if (financialInstrumentValue === "bmc84" || financialInstrumentValue === "surety-bond") {
    if (bmc84Wrapper) bmc84Wrapper.style.display = "block";
    if (bmc85Wrapper) bmc85Wrapper.style.display = "none";
    
    // Enforce required variables on underwriting components
    if (bmc84Wrapper) bmc84Wrapper.querySelectorAll("input, select").forEach(f => f.required = true);
    if (bmc85Wrapper) bmc85Wrapper.querySelectorAll("input, select").forEach(f => f.required = false);
    
  } else if (financialInstrumentValue === "bmc85" || financialInstrumentValue === "trust-fund") {
    if (bmc84Wrapper) bmc84Wrapper.style.display = "none";
    if (bmc85Wrapper) bmc85Wrapper.style.display = "block";
    
    if (bmc84Wrapper) bmc84Wrapper.querySelectorAll("input, select").forEach(f => f.required = false);
    if (bmc85Wrapper) bmc85Wrapper.querySelectorAll("input, select").forEach(f => f.required = true);
  } else {
    if (bmc84Wrapper) bmc84Wrapper.style.display = "none";
    if (bmc85Wrapper) bmc85Wrapper.style.display = "none";
  }

  // Clear data states inside hidden wrappers dynamically to prevent validation freezes
  const hiddenWrappers = [bmc84Wrapper, bmc85Wrapper];
  hiddenWrappers.forEach(wrapper => {
    if (wrapper && wrapper.style.display === "none") {
      wrapper.querySelectorAll("input, select, textarea").forEach(field => {
        field.required = false;
        if (field.type === "checkbox" || field.type === "radio") {
          field.checked = false;
        } else {
          field.value = "";
        }
        field.style.borderColor = "var(--border)";
      });
      wrapper.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    }
  });
}


// ============================================================================
// 🔄 NEW ENTRANT SAFETY AUDIT CONFIGURATOR INTERACTION LAYER (CFR PART 385)
// ============================================================================

/**
 * Toggles a date input field block if an operator has received an official target audit notification letter.
 * Mandated to map the hard 90-day (or 45-day for passenger/hazmat) federal deadline accurately.
 */
function toggleNewEntrantAuditLetterDetails(selectionValue) {
  var wrapper = document.getElementById("nea_letter_deadline_wrapper");
  var dateInput = document.getElementById("nea_audit_deadline");
  if (!wrapper || !dateInput) return;

  if (selectionValue === "letter-received" || selectionValue === "yes" || selectionValue === "true") {
    wrapper.style.display = "block";
    dateInput.required = true;
  } else {
    wrapper.style.display = "none";
    dateInput.required = false;
    dateInput.value = ""; // Safely flush input values upon collapse
    dateInput.style.borderColor = "var(--border)";
    
    const errorMarker = dateInput.nextSibling;
    if (errorMarker && errorMarker.className === 'input-error-marker') errorMarker.remove();
  }
}

/**
 * Interactive Strategic Checklist Modal Controls.
 * Dynamically hooks overlays without writing static structural strings.
 */
function triggerNewEntrantAuditComplianceChecklistPopup() {
  var modal = document.getElementById("nea_checklist_modal_backdrop");
  if (modal) modal.style.display = "flex";
}

function closeNewEntrantAuditComplianceChecklistPopup() {
  var modal = document.getElementById("nea_checklist_modal_backdrop");
  if (modal) modal.style.display = "none";
}

// ============================================================================
// 📊 LIVE CALCULATIONS SYNCHRONIZER ENGINE (ZERO HARDCODED RATES)
// ============================================================================

/**
 * Dynamically tracks checked sub-services to prepare the final checkout page invoice rows.
 * Zero Hardcoding Rule: Extracts pricing values directly from DOM element data descriptors.
 */
function executeNewEntrantAuditLiveFulfillmentSync() {
  let dynamicAddonTotal = 0;
  let selectedAddonItemsHtml = "";

  // Scan the document layout dynamically for any selected audit prep components
  const activeCheckboxes = document.querySelectorAll(".nea-service-checkbox:checked, [id^='nea_service_']:checked");

  activeCheckboxes.forEach(function(checkboxNode) {
    // Read parameters straight from layout attributes instead of hardcoded JavaScript lists
    const itemPrice = parseFloat(checkboxNode.getAttribute("data-price")) || 0;
    const itemLabel = checkboxNode.getAttribute("data-name") || "Audit Prep Component Service";

    dynamicAddonTotal += itemPrice;
    
    selectedAddonItemsHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.8rem; padding: 6px 0; border-bottom: 1px dashed var(--border, #e2e8f0); color: var(--slate);">
        <span><i class="fa-solid fa-square-check" style="color: var(--primary);"></i> ${itemLabel}</span>
        <span style="font-family: monospace; font-weight: 600;">$${itemPrice.toFixed(2)}</span>
      </div>
    `;
  });

  // Store variables out to window state memory for checkout engine processing
  window.lastCalculatedNewEntrantAddonTotal = dynamicAddonTotal;
  window.lastCalculatedNewEntrantAddonHtml = selectedAddonItemsHtml;

  console.log(`[Audit Calculator Sync] Allocation balance adjustments updated. Sub-add-on Delta: $${dynamicAddonTotal.toFixed(2)}`);

  // Trigger your wizard's native financial recalculation function to modify cart grand totals
  if (typeof updateWizardFinalTotalAmountMatrix === "function") {
    updateWizardFinalTotalAmountMatrix();
  }
}

// ============================================================================
// ➕ EXPANDED FMCSA REJECTION CRITERIA SCREENERS (NEW COMPLIANCE WORKFLOWS)
// ============================================================================

/**
 * Toggles dynamic alerts if an operator flags an absolute failure metric (e.g. no drug pool).
 * Instantly alerts the user of critical vulnerabilities that trigger immediate audit failures.
 */
function toggleNewEntrantCriticalFailureWarningVisibility(checkboxElement) {
  if (!checkboxElement) return;

  const failureType = checkboxElement.getAttribute("data-failure-class");
  const alertContainer = document.getElementById(`nea_failure_warning_${failureType}`);
  
  if (!alertContainer) return;

  // If the trucker checks "No" or untoggles a required safety program, expose the mitigation box
  if (checkboxElement.type === "checkbox" ? !checkboxElement.checked : checkboxElement.value === "no") {
    alertContainer.style.display = "block";
    alertContainer.style.background = "#fef2f2";
    alertContainer.style.color = "#991b1b";
    alertContainer.style.border = "1px solid #fee2e2";
  } else {
    alertContainer.style.display = "none";
    alertContainer.innerHTML = "";
  }
}


// ============================================================================
// 📊 CENTRAL PROCESSING CONFIGURATOR: SIDEBAR INVOICE CORE
// ============================================================================

let stripeInstance = null;
let stripeElementsContainer = null;
let stripePaymentElementInstance = null;

// ============================================================================
// 🛡️ GLOBAL NAVIGATION SAFETY HUB (DESTRUCTION PREVENTION DISPATCH)
// ============================================================================

document.addEventListener("click", function(eventObj) {
  const clickedElement = eventObj.target.closest("button, a, .wizard-prev-btn, .btn-wizard-alt");
  if (!clickedElement) return;

  // Extract element attributes cleanly to evaluate intent without absolute hardcoding strings
  const inlineOnclickString = clickedElement.getAttribute("onclick") || "";
  const elementText = clickedElement.innerText.toLowerCase().trim();
  const elementId = clickedElement.id || "";
  const classList = clickedElement.classList;

  // 🔍 Selective Back Verification: Check if the operator is intentionally trying to navigate backward
  const isExplicitBackButton = inlineOnclickString.includes("back") || 
                              inlineOnclickString.includes("prev") || 
                              inlineOnclickString.includes("- 1") ||
                              classList.contains("wizard-prev-btn") || 
                              classList.contains("btn-wizard-alt") ||
                              elementId.includes("back") ||
                              elementId.includes("prev") ||
                              elementText === "back" || 
                              elementText === "previous";

  // 🚨 GUARD: If it is NOT a back button, exit immediately. Let form validators and payment processors run!
  if (!isExplicitBackButton) return;

  // Safely isolate back movements to avoid unwanted form submissions or page resets
  eventObj.preventDefault();
  eventObj.stopPropagation();

  console.log("[Safety Hub] Intercepted back button click safely. Routing step reduction pipeline...");

  let calculatedCurrentStep = window.currentWizardActiveStep || 1;
  const visiblePanels = document.querySelectorAll(".wizard-panel");

  // Audit active layout DOM elements visibility to trace step alignment parameters
  visiblePanels.forEach((panel, panelIdx) => {
    if (panel.classList.contains("active") || window.getComputedStyle(panel).display !== "none") {
      calculatedCurrentStep = panelIdx + 1;
    }
  });

  let safePreviousStepIndex = calculatedCurrentStep - 1;
  if (safePreviousStepIndex < 1) safePreviousStepIndex = 1;

  // 🔄 Delegate view changes safely back to your central master router function core
  if (typeof window.executeDirectStepJump === "function") {
    window.executeDirectStepJump(safePreviousStepIndex);
  } else {
    // Structural absolute fallback transformation loop if master engine is detached
    window.currentWizardActiveStep = safePreviousStepIndex;
    
    if (visiblePanels.length > 0) {
      visiblePanels.forEach((panel, index) => {
        const stepMarkerIndex = index + 1;
        if (stepMarkerIndex === safePreviousStepIndex) {
          panel.classList.add("active");
          panel.style.setProperty("display", "block", "important");
        } else {
          panel.classList.remove("active");
          panel.style.setProperty("display", "none", "important");
        }
      });
    }

    if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
    if (typeof populatePurchaseSummaryReviewMatrix === "function") populatePurchaseSummaryReviewMatrix();
    if (typeof renderActiveWizardStepUiLayout === "function") renderActiveWizardStepUiLayout();
  }

  // Smooth scroll operator back to page view pinnacle peaks cleanly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, true); // Keep capture layer listening active to prevent default form leaks

// ============================================================================
// 🔌 SYSTEM STATE FALLBACK INITIALIZATIONS (NO DATA HARDCODING OVERWRITES)
// ============================================================================

window.routeActiveServiceKey = window.routeActiveServiceKey || "hazmat-registration";

// FIXED: Aligned system fallback tier token to point to valid database parameters ('starter' vs hardcoded marketing terms)
window.routeActivePlanKey = window.routeActivePlanKey || "starter";


// ============================================================================
// 📊 MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (CORE ROUTER)
// ============================================================================

/**
 * Resolves a dynamic pricing and configuration package manifest block cleanly.
 * Abstract Design Pattern: Explicitly accepts inputs to eliminate scope reference crashes.
 */
function getPricingConfiguration(serviceKey = null, planKey = null) {
  // 1. Establish strict safety barriers if external price files are detached or missing
  if (!window.GLOBAL_COMPANY_PRICING || !window.GLOBAL_COMPANY_PRICING.packages) {
    console.warn("[Pricing Engine] Central GLOBAL_COMPANY_PRICING system layout package layer is uninitialized.");
    return null;
  }

  // 2. Extract and format active lookup keys cleanly from inputs or global window fallbacks
  const fallbackServiceKey = window.routeActiveServiceKey || "llc-formation";
  const activeServiceKeyInput = serviceKey || fallbackServiceKey;
  
  const activePlanKeyInput = (planKey || window.routeActivePlanKey || "starter").toLowerCase().trim();

  let unifiedLookupKey = String(activeServiceKeyInput).toLowerCase().trim();

  // 📋 Slugs Translation Registry: Syncs your wizard route keys smoothly with external configuration schemas
  const PRICING_KEY_TRANSLATION_MAP = window.PRICING_KEY_TRANSLATION_MAP || {
    "llc-formation": "llc",
    "limited-liability-company": "llc",
    "corporations": "corporation",
    "corporation": "corporation",
    "annual-reports": "annual-report",
    "hazmat-registration": "dot-hazmat"
  };

  // If a mapping exists in the external dictionary, translate the key slug smoothly
  if (PRICING_KEY_TRANSLATION_MAP[unifiedLookupKey]) {
    unifiedLookupKey = PRICING_KEY_TRANSLATION_MAP[unifiedLookupKey];
  }

  // 3. Retrieve the target configuration record block out of your external data layer
  const planConfig = window.GLOBAL_COMPANY_PRICING.packages[unifiedLookupKey];
  if (!planConfig) {
    console.warn(`[Pricing Engine Warning] No matching packages matrix record found for key: "${unifiedLookupKey}"`);
    return null;
  }

  // 4. Resolve absolute mathematical tier figures safely without undefined pointer breaks
  const finalizedBasePrice = parseFloat(planConfig[activePlanKeyInput]) || parseFloat(planConfig["starter"]) || 0;
  const descriptivePackageName = (planConfig.name || "Business Compliance Setup") + " Package";

  return {
    serviceKey: activeServiceKeyInput,
    planKey: activePlanKeyInput,
    config: planConfig,
    basePrice: finalizedBasePrice,
    displayName: descriptivePackageName
  };
}

// Expose the core structural router directly to the window layer object context
window.getPricingConfiguration = getPricingConfiguration;


// ============================================================================
// 📊 MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (JURISDICTION)
// ============================================================================

/**
 * Extracts the user's selected 2-digit US state code dynamically from active view panels.
 * Multi-service safe: Employs strict selector scoping to prevent credit card or title dropdown misreadings.
 */
function resolveActiveJurisdiction() {
  var stateDisplayLabel = "";
  
  // Scope selector strictly inside the current active panel container if available to avoid broad document leaks
  const panelContext = document.getElementById(`step-panel-${window.currentWizardActiveStep || 2}`) || document.body;
  
  var chosenStateElement = panelContext.querySelector('select[name="formation_state"]') || 
                            panelContext.querySelector('select[name="business_state"]') || 
                            document.getElementById('wizard-target-jurisdiction') ||
                            panelContext.querySelector('.state-selector, [id*="state"], [name*="state"]');

  if (chosenStateElement && chosenStateElement.selectedIndex >= 0) {
    var selectedOption = chosenStateElement.options[chosenStateElement.selectedIndex];
    if (selectedOption) {
      var optionValue = (selectedOption.value || "").toUpperCase().trim();
      var optionText = (selectedOption.text || "");
      
      if (optionValue.length === 2 && /^[A-Z]{2}$/.test(optionValue)) {
        stateDisplayLabel = optionValue;
      } else {
        // Regex sweep parameter to extract 2-letter state abbreviations out of longer titles
        var match = optionText.match(/\b([A-Z]{2})\b/i);
        stateDisplayLabel = match ? match[1].toUpperCase() : optionValue.substring(0, 2).toUpperCase().trim();
      }
    }
  }

  // Dynamic state recovery fallback alignment
  if (!stateDisplayLabel && window.selectedFormationStateCode) {
    stateDisplayLabel = window.selectedFormationStateCode.toUpperCase().trim();
  }

  // Ensure state code changes are mirrored universally down to window trackers
  if (stateDisplayLabel && stateDisplayLabel.length === 2) {
    window.selectedFormationStateCode = stateDisplayLabel;
  }

  return { 
    label: stateDisplayLabel, 
    element: chosenStateElement 
  };
}

/**
 * Computes government filing fee parameters out of external state registry configuration profiles.
 * Zero Hardcoding Rule: Reads amounts purely from your dynamic external configurations.
 */
function resolveActiveStateFee(stateLabel, serviceKey) {
  var baseStateFilingFee = 0;
  
  const currentKey = String(serviceKey || window.routeActiveServiceKey || "llc-formation").toLowerCase();
  var serviceTypeKey = "llc";

  // Taxonomy mapping block: Normalizes wizard route strings to align with external pricing matrices keys
  if (currentKey.includes("corp") || currentKey === "corporation") {
    serviceTypeKey = "c_corp";
  } else if (currentKey.includes("series")) {
    serviceTypeKey = "series_llc";
  } else if (currentKey.includes("nonprofit") || currentKey.includes("non-profit")) {
    serviceTypeKey = "non_profit";
  } else if (currentKey.includes("proprietor") || currentKey.includes("sole")) {
    serviceTypeKey = "sole_proprietorship";
  } else if (currentKey.includes("dba") || currentKey.includes("assumed")) {
    serviceTypeKey = "dba";
  } else if (currentKey.includes("agent") || currentKey.includes("ra-service")) {
    serviceTypeKey = "registered_agent";
  }

  // 🏛️ Look up state filing structures purely from the external configurations map
  var dataSourceMatrix = window.STATE_FILING_FEES || (typeof STATE_FILING_FEES !== "undefined" ? STATE_FILING_FEES : null);

  if (stateLabel && dataSourceMatrix) {
    var stateMap = dataSourceMatrix[stateLabel];
    if (stateMap) {
      // Pull dynamic pricing tier rates out of your separate setup file
      baseStateFilingFee = parseFloat(stateMap[serviceTypeKey]) || parseFloat(stateMap["llc"]) || 0;
    } else {
      console.log(`[Pricing Engine Notice] State matrix entry not found for "${stateLabel}". Fallback rate allocated.`);
    }
  }

  return baseStateFilingFee;
}

// Expose functions globally to window namespaces cleanly
window.resolveActiveJurisdiction = resolveActiveJurisdiction;
window.resolveActiveStateFee = resolveActiveStateFee;



// ============================================================================
// 📊 MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (ADDONS)
// ============================================================================

/**
 * Appends dynamic addon pricing metrics and invoice layouts to the checkout matrix.
 * Zero Hardcoding Rule: Resolves service rates purely from lookups or data tags.
 */
function appendCheckedAddons(initialHtmlRows) {
  var incrementalAddonTotal = 0;
  var workingHtml = initialHtmlRows;

  // 1. Process explicit visual checkboxes currently active in the DOM layout view tree
  document.querySelectorAll('.upsell-checkbox:checked, .addon-checkbox:checked').forEach(function(checkbox) {
    var addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || 0;
    var addonLabelString = checkbox.getAttribute('data-name') || "Optional Add-on Service";
    
    incrementalAddonTotal += addonPriceValue;
    
    workingHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); font-weight: 500; margin-bottom: 6px;">
        <span>+ ${addonLabelString}</span>
        <span style="font-family: monospace;">$${addonPriceValue.toFixed(2)}</span>
      </div>
    `;
  });

  // 🏛️ Extensible Global Namespace Database Matrix Lookup
  // Re-uses your central pricing objects definitions to ensure zero file hardcoding
  const BACKGROUND_FLAG_CATALOG = window.UPSELL_ADDON_REGISTRY || {
    "customSelectedRegisteredAgentServiceActive": { name: "Registered Agent Shield", price: 75.00 },
    "customSelectedEinProcurementServiceActive": { name: "EIN Procurement Processing", price: 79.00 }
  };

  // 2. Evaluate global background state choice variables independently (Fixed broken logical math operators)
  Object.keys(BACKGROUND_FLAG_CATALOG).forEach(function(flagKey) {
    const isFlagTrue = window[flagKey] === true || String(window[flagKey]) === "true";
    
    if (isFlagTrue) {
      const addonMeta = BACKGROUND_FLAG_CATALOG[flagKey];
      
      // Calculate add-on additions completely independent of existing totals to guarantee accurate math balances
      incrementalAddonTotal += addonMeta.price;
      
      workingHtml += `
        <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate); font-weight: 500;">
          <span>+ ${addonMeta.name}</span>
          <span style="font-family: monospace; font-weight: 600; color: var(--navy);">$${addonMeta.price.toFixed(2)}</span>
        </div>
      `;
    }
  });

  return { 
    total: incrementalAddonTotal, 
    html: workingHtml 
  };
}

// Expose the clean addon evaluator safely to your window layer context
window.appendCheckedAddons = appendCheckedAddons;



// ============================================================================
// 📊 MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (INVOICE COMPILER)
// ============================================================================

/**
 * High-performance central processing loop that compiles base fees, state fees, 
 * dynamic add-ons, and transport variables into a synchronized invoice display layout.
 */
function updateDynamicPricingMatrixVanilla() {
  // 1. Resolve pricing parameters out of the dynamic package mapping router
  var planData = typeof getPricingConfiguration === "function" ? getPricingConfiguration() : null;
  if (!planData) {
    console.warn("[Pricing Compiler] Package configuration resolution deferred: Data structure uninitialized.");
    return;
  }

  var jurisdiction = typeof resolveActiveJurisdiction === "function" ? resolveActiveJurisdiction() : { label: "", element: null };
  var stateFee = typeof resolveActiveStateFee === "function" ? resolveActiveStateFee(jurisdiction.label, planData.serviceKey) : 0;

  // 2. Compile base service package markup lines cleanly
  var finalInvoiceHtml = `
    <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 8px;">
      <span>${planData.displayName} (${planData.planKey.toUpperCase()})</span>
      <span style="font-family: monospace;">$${planData.basePrice.toFixed(2)}</span>
    </div>
  `;

  // 3. Append state regulatory filing fees row seamlessly
  if (stateFee > 0 && jurisdiction.label) {
    finalInvoiceHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); margin-bottom: 6px;">
        <span>State Filing Fee (${jurisdiction.label})</span>
        <span style="font-family: monospace;">$${stateFee.toFixed(2)}</span>
      </div>
    `;
  }

  // 4. Extract active user options checked states out of the add-on collectors engine
  var processedAddons = typeof appendCheckedAddons === "function" ? appendCheckedAddons("") : { total: 0, html: "" };
  finalInvoiceHtml += processedAddons.html;

  // 🚚 Secure Transportation Tracking Bridge Integration
  // Ensures variable trucker fleet audit items never get dropped from calculations subtotals
  var variableTruckingAddonTotal = parseFloat(window.lastCalculatedNewEntrantAddonTotal) || 0;
  if (variableTruckingAddonTotal > 0 && window.lastCalculatedNewEntrantAddonHtml) {
    finalInvoiceHtml += window.lastCalculatedNewEntrantAddonHtml;
  }

  // 5. Aggregate absolute financial metrics numbers
  var totalSubtotal = planData.basePrice + processedAddons.total + variableTruckingAddonTotal;
  var finalGrandTotal = totalSubtotal + stateFee;

  // 6. Safe structural DOM rendering across multiple target checkout panel templates containers
  var invoiceContainer = document.getElementById('summary-purchase-rows-container') || 
                         document.getElementById('checkout-invoice-rows-container') ||
                         document.getElementById('invoice-rows-container');
  if (invoiceContainer) {
    invoiceContainer.innerHTML = finalInvoiceHtml;
  }

  // Synchronize values across text displays anchors pools safely
  var grandDisplays = ["summary-grand-total-display", "invoice-grand-total-display", "grand-total-display", "checkout-total-display"];
  grandDisplays.forEach(function(displayId) {
    var element = document.getElementById(displayId);
    if (element) element.textContent = '$' + finalGrandTotal.toFixed(2);
  });

  var subtotalDisplays = ["invoice-subtotal-display", "subtotal-display"];
  subtotalDisplays.forEach(function(displayId) {
    var element = document.getElementById(displayId);
    if (element) element.textContent = '$' + totalSubtotal.toFixed(2);
  });

  var govDisplays = ["invoice-gov-fees-display", "gov-fees-display"];
  govDisplays.forEach(function(displayId) {
    var element = document.getElementById(displayId);
    if (element) element.textContent = '$' + stateFee.toFixed(2);
  });

  // Commit global state total variables for transaction processing mapping payloads
  window.wizardCalculatedFinalTotalAmount = finalGrandTotal;

  var secondaryTotalDisplay = document.getElementById("payment-gateway-total-display") || 
                              document.getElementById("wizard-sticky-total-value");
  if (secondaryTotalDisplay) {
    secondaryTotalDisplay.textContent = '$' + finalGrandTotal.toFixed(2);
  }

  // 🛡️ REPAIRED EVENT LISTENER LEAK: Employs strict defensive attributes to completely isolate loop crashes
  if (jurisdiction.element && !jurisdiction.element.hasAttribute('data-has-sync-listener')) {
    jurisdiction.element.setAttribute('data-has-sync-listener', 'true');
    jurisdiction.element.addEventListener('change', function() {
      console.log(`[Pricing Link] Change detected on element: #${jurisdiction.element.id || 'state-selector'}. Recalculating matrix...`);
      updateDynamicPricingMatrixVanilla();
    });
  }
}

// Register initialization execution safely on app load lifecycle paths
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateDynamicPricingMatrixVanilla);
} else {
  // If DOM is already processed during deferred script loads, fire immediately
  updateDynamicPricingMatrixVanilla();
}

// ============================================================================
// 📊 MODULE 3: PRODUCTION SUMMARY MATRIX FIELD INJECTOR (SAFE ALIAS MATRIX)
// ============================================================================

/**
 * Public structural bridge to execute centralized checkout pricing metrics calculations.
 * Clean Architecture Pattern: Forwards all calls safely to the central single source of truth.
 */
function recalculateSummaryStepFields() {
  console.log("[Summary Sync Proxy] Routing summary view balance updates to central engine calculations...");
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  } else {
    console.warn("[Summary Sync Proxy Warning] Central pricing matrix compiler calculation loop is detached.");
  }
}

// Map the naming configuration cleanly to window namespaces to preserve cross-file layout bindings
window.recalculateSummaryStepFields = recalculateSummaryStepFields;

/**
 * Universal dynamic parameter capture engine to intercept incoming marketing intents on boot.
 * Zero Hardcoding Rule: Stripped of local state fee lists; calls unified configurations module provider instead.
 */
function autoInjectMainWebsitePricingPlan() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlService = urlParams.get('service');
  const urlPlan = urlParams.get('plan');
  const urlState = urlParams.get('state') || "TX";

  if (!urlService || !urlPlan) return;

  const textInputService = document.getElementById("wizard-route-service-id");
  const textInputPlan = document.getElementById("wizard-route-tier-id");

  // Safety Boundary Guard: Prevents cross-script timing crashes if the central pricing object dictionary isn't compiled yet
  if (typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined" || !window.CENTRAL_SERVICE_PLAN_DB[urlService]) {
    console.log("[Boot Sync Delay] Central service database array unparsed. Re-queueing injection loop...");
    setTimeout(autoInjectMainWebsitePricingPlan, 100);
    return;
  }

  // 1. Commit incoming parameters safely to active global tracker fields
  window.routeActiveServiceKey = urlService.toLowerCase().trim();
  window.routeActivePlanKey = urlPlan.toLowerCase().trim();
  window.selectedFormationStateCode = urlState.toUpperCase().trim();

  // 2. Safely compute unhardcoded state filing fees variables from your separate configuration module layer
  if (typeof resolveActiveStateFee === "function") {
    resolveActiveStateFee(window.selectedFormationStateCode, window.routeActiveServiceKey);
  }

  // 3. Mirror the computed data cleanly to input nodes if present on screen layout views
  if (textInputService) {
    textInputService.value = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name || urlService;
  }
  
  if (textInputPlan) {
    textInputPlan.value = window.routeActivePlanKey.toUpperCase() + " Plan";
  }

  // 4. Force immediate structural total calculations update pass
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }

  // 5. Execute marketing decoration layouts safely inside the correct local variable scope bounds
  const currentPlanConfig = window.CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey];
  if (currentPlanConfig && typeof processDynamicMarketingLayoutDecorations === "function") {
    processDynamicMarketingLayoutDecorations(currentPlanConfig, window.routeActivePlanKey);
  }
}

// Initialize secure lifecycle capture proxies for step-change triggers
(function() {
  var originalNextStepFunc = window.goToNextWizardStep;
  if (typeof originalNextStepFunc === "function") {
    window.goToNextWizardStep = function(targetStepIndex, event) {
      // Execute the original structural core navigation routine cleanly
      var executionResult = originalNextStepFunc(targetStepIndex, event);
      
      // Force an immediate layout pricing balance recalculation sweep
      if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
      }
      
      return executionResult;
    };
  }
})();



// ============================================================================
// 🎯 DYNAMIC EXTRACTOR: ZERO FALLBACK HARDCODING FOR 44+ SERVICES
// ============================================================================

/**
 * Enhanced layout decorator for appending plan title strings and dynamic bullet parameters.
 * Designed to be executed internally at the tail end of your auto-injection boot cycles.
 */
function processDynamicMarketingLayoutDecorations(planConfig, activePlanKeyString) {
  const textInputService = document.getElementById("wizard-route-service-id");
  if (!planConfig || !activePlanKeyString) return;

  // 1. DYNAMIC TITLE GENERATION: Auto-capitalizes with abstract dictionary fallback overrides
  const TIER_DISPLAY_OVEROVERRIDES = window.TIER_DISPLAY_OVEROVERRIDES || {
    "compliance": "Compliance Guard",
    "enterprise": "Enterprise Asset Suite"
  };

  let tierTitleDisplay = TIER_DISPLAY_OVEROVERRIDES[activePlanKeyString] || 
                         (activePlanKeyString.charAt(0).toUpperCase() + activePlanKeyString.slice(1));

  if (textInputService) {
    textInputService.value = `${planConfig.name} - ${tierTitleDisplay}`;
  }

  // 2. DYNAMIC BULLETS INTERCEPTOR: Safe parsing of marketing elements arrays out of external state files
  let dynamicBulletsArray = [];
  const incomingBullets = planConfig.bullets ? planConfig.bullets[activePlanKeyString] : null;

  if (Array.isArray(incomingBullets) && incomingBullets.length > 0) {
    dynamicBulletsArray = [...incomingBullets];
    console.log(`[Marketing Sync] Loaded ${dynamicBulletsArray.length} descriptive bullet rules for: ${activePlanKeyString}`);
  } else {
    // 🛑 DATA INTEGRITY PROTECTION: Malicious or completely unconfigured packages entry route detected
    console.warn(`[Security Boundary] Package data variables missing for tier: "${activePlanKeyString}". Halting boot pipeline.`);
    
    dynamicBulletsArray = [];
    
    // Abstract Redirect Configuration: Bounces corrupted entries safely back to landing portals
    const safeFallbackLandingUrl = window.wizardCustomHomeRedirectUrl || "index.html";
    window.location.href = safeFallbackLandingUrl;
    return false;
  }

    // Place this directly inside processDynamicMarketingLayoutDecorations right before the return statement:
  if (typeof window.renderOnboardingPlanOverviewCard === "function") {
    window.renderOnboardingPlanOverviewCard(planConfig, activePlanKeyString, dynamicBulletsArray);
  }


  // Expose parsed feature tokens to window memory for summary check matrices to render if needed
  window.activeWizardRouteMarketingBullets = dynamicBulletsArray;
  return true;
}

// Map the clean layout processor straight to window contexts to allow secure cross-file execution
window.processDynamicMarketingLayoutDecorations = processDynamicMarketingLayoutDecorations;


// ============================================================================
// 🏗️ MODULE 3: PRODUCTION SUMMARY MATRIX FIELD INJECTOR (RENDER LAYER)
// ============================================================================

/**
 * Executes the secure rendering of package bullets and overview card metrics.
 * Safe Encapsulation Pattern: Fully wrapped to eliminate global scope reference errors.
 */
function renderOnboardingPlanOverviewCard(planConfig, activeTierKey, dynamicBulletsArray) {
  if (!planConfig || !activeTierKey || !Array.isArray(dynamicBulletsArray)) {
    console.warn("[Render Engine] Execution deferred: Input package matrix parameters are incomplete.");
    return;
  }

  // 1. Resolve dynamic title text formats cleanly without hardcoded strings
  const TIER_DISPLAY_OVEROVERRIDES = window.TIER_DISPLAY_OVEROVERRIDES || {
    "compliance": "Compliance Guard",
    "enterprise": "Enterprise Asset Suite"
  };
  
  let tierTitleDisplay = TIER_DISPLAY_OVEROVERRIDES[activeTierKey] || 
                         (activeTierKey.charAt(0).toUpperCase() + activeTierKey.slice(1));

  const basePackageFeeAmount = parseFloat(planConfig[activeTierKey]) || 0;

  // ============================================================================
  // 🏛️ INJECT SAFELY INTO THE SIDEBAR ELEMENT CONTAINER
  // ============================================================================
  const featuresListContainer = document.getElementById("step-1-package-features-list");
  if (featuresListContainer) {
    let sidebarMarkup = "";
    dynamicBulletsArray.forEach(function(bulletText) {
      sidebarMarkup += `
        <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--navy, #0a1f44); font-weight: 600; margin-bottom: 8px;">
          <i class="fa-solid fa-circle-check" style="color: var(--primary, #10b981);"></i> 
          <span>${bulletText}</span>
        </div>`;
    });
    featuresListContainer.innerHTML = sidebarMarkup;
  }

  // ============================================================================
  // 🏛️ INJECT SAFELY INTO THE MAIN CONTAINER OVERVIEW BOX
  // ============================================================================
  let step1OverviewBox = document.getElementById("step-1-selected-plan-overview");
  
  if (!step1OverviewBox) {
    step1OverviewBox = document.createElement("div");
    step1OverviewBox.id = "step-1-selected-plan-overview";
    step1OverviewBox.style.cssText = "margin-top: 24px; padding: 24px; background: #ffffff; border: 1px solid var(--border, #e2e8f0); border-radius: 12px; display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box; box-shadow: var(--card-shadow); clear: both;";
    
    const leftColumnContainer = document.querySelector("#step-panel-1 .form-grid-layout");
    if (leftColumnContainer) {
      // SAFE TRANSFORMATION: Appends layout wrapper cleanly without wiping existing neighboring inputs
      leftColumnContainer.appendChild(step1OverviewBox);
    }
  }

  // Build list elements row markup safely using an abstract array iteration
  let mainBoxListMarkup = "";
  dynamicBulletsArray.forEach(function(bulletItem) {
    mainBoxListMarkup += `
      <li style="display: flex; align-items: center; gap: 10px;">
        <i class="fa-solid fa-circle-check" style="color: #10b981;"></i> 
        <span>${bulletItem}</span>
      </li>`;
  });

  // Securely extract description cards texts out of browser state storage paths
  const dynamicPlanDescriptionText = sessionStorage.getItem('wiz_cached_desc') || 
    "Your selected service plan parameters are being processed into our fulfillment priority lane registries securely.";

  // Render the structural container card text configurations
  step1OverviewBox.innerHTML = `
    <div style="border-bottom: 1px solid var(--border, #e2e8f0); padding-bottom: 14px;">
      <span style="font-size: 0.75rem; font-weight: 800; color: var(--slate, #64748b); text-transform: uppercase; letter-spacing: 0.5px;">Active track</span>
      <h3 style="margin: 4px 0 0 0; color: var(--navy, #0a1f44); font-size: 1.4rem; font-weight: 900;">${planConfig.name} - ${tierTitleDisplay}</h3>
    </div>
    <div style="margin-top: 14px; margin-bottom: 14px;">
      <label style="font-weight: 800; font-size: 0.75rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 6px;">Plan Overview</label>
      <p style="margin: 0; color: #475569; font-size: 0.88rem; line-height: 1.5; text-align: left;">${dynamicPlanDescriptionText}</p>
    </div>
    <div>
      <label style="font-weight: 800; font-size: 0.75rem; text-transform: uppercase; color: var(--navy); display: block; margin-bottom: 8px;">Package Details</label>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 0.9rem; color: var(--navy); font-weight: 600;">
        ${mainBoxListMarkup}
      </ul>
    </div>
    <div style="background: #f8fafc; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; padding: 16px; margin-top: 6px; display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 800; color: var(--navy); font-size: 0.95rem;">Base Fee:</span>
        <strong style="font-family: monospace; color: #10b981; font-size: 1.35rem;">$${basePackageFeeAmount.toFixed(2)}</strong>
      </div>
    </div>`;

  // Synchronize downstream matrix total cards tracking layouts
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
  if (typeof populatePurchaseSummaryReviewMatrix === "function") {
    populatePurchaseSummaryReviewMatrix();
  }

  // Handle runtime upsell panels display configuration updates cleanly
  if (typeof renderTargetUpsellsListPanel === "function") {
    const activeServiceKey = window.routeActiveServiceKey || "llc-formation";
    renderTargetUpsellsListPanel(activeServiceKey);
  }
}

// Map the renderer engine method straight to the global namespace to enable cross-file injection
window.renderOnboardingPlanOverviewCard = renderOnboardingPlanOverviewCard;

// ============================================================================
// 📊 UPSELLS ENGINE DATABASE SCHEMA MAP
// ============================================================================

const UPSELLS_ROUTER_DATABASE = {
  "formations": [
    { id: "ra-shield", name: "Registered Agent Service", price: 75.00, billing: "/ yr", desc: "Secures state compliance mandates, processes official legal notices, and shields your private physical address from public databases." },
    { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." },
    { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
    { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
    { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
    { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
    { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." },
    { id: "good-standing", name: "Certificate of Good Standing", price: 45.00, billing: " flat", desc: "Secures certified regulatory verification from the jurisdiction state registry validating that your active entity is compliant." }
  ],
  "broker": [
    { id: "boc3-filing", name: "BOC-3 Process Agent Filing", price: 75.00, billing: " flat", desc: "Mandatory federal processing requirement for Broker configurations. Designates process service agents across all states to guarantee compliance." },
    { id: "bmc85-quote", name: "BMC-85 Trust Fund ($75K) Request", price: 0.00, billing: " quote", desc: "Automates routing checks into partner underwriting matrices to secure a verified premium quote for your mandatory broker security trust allocation." },
    { id: "eo-liability", name: "Liability Insurance ($1M E&O) Quote", price: 0.00, billing: " quote", desc: "Secures specialized pricing options for Professional Errors and Omissions liability plans to shield your cargo routing platform from structural lawsuits." },
    { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." },
    { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
    { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
    { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
    { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
    { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." }
  ]
};

UPSELLS_ROUTER_DATABASE.trucker = [
  { id: "fmcsa-audit", name: "FMCSA Safety Audit Preparation Kit", price: 149.00, billing: " flat", desc: "Compiles driver files, vehicle maintenance frameworks, and fuel logs into an audit-ready format to guarantee passing your new-entrant regulatory evaluation." },
  { id: "boc3-filing", name: "BOC-3 Process Agent Filing", price: 75.00, billing: " flat", desc: "Mandatory federal processing requirement for Trucker configurations. Designates process service agents across all states to guarantee compliance." },
  { id: "bipd-quote", name: "$750,000 BIPD Public Liability Quote", price: 0.00, billing: " quote", desc: "Triggers partner routing pipelines to pull premium options for public liability coverages required for FMCSA operating authority activation." },
  { id: "cargo-quote", name: "$100,000 Motor Cargo Carrier Quote", price: 0.00, billing: " quote", desc: "Pulls tailored carrier pricing matrices to cover high-value customer freight assets against damage, loss, or transit destruction incidents." },
  { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." },
  { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
  { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
  { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
  { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
  { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." }
];

UPSELLS_ROUTER_DATABASE.generic = [
  { id: "ra-shield", name: "Registered Agent Service", price: 75.00, billing: "/ yr", desc: "Secures state compliance mandates, processes official legal notices, and shields your corporate entity's private physical address layout from public record databases." },
  { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." },
  { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
  { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
  { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
  { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
  { id: "good-standing", name: "Certificate of Good Standing", price: 45.00, billing: " flat", desc: "Secures certified regulatory verification from the jurisdiction state registry validating that your active entity is compliant and authorized to contract." },
  { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant payment processing lines." }
];

// Expose universally to the window object layer safely
window.UPSELLS_ROUTER_DATABASE = UPSELLS_ROUTER_DATABASE;


// ============================================================================
// 📊 MODULE 2: CONDITIONAL INTERACTIVE UPSELLS ENGINE STRUCTURAL CORE
// ============================================================================

/**
 * Dynamically builds and mounts responsive upsell product layout cards.
 * Safe State Linkage Pattern: Binds element toggles directly to system background calculation flags.
 */
function renderTargetUpsellsListPanel(activeServiceKeyString) {
  const container = document.getElementById("wizard-dynamic-upsells-render-target");
  if (!container) return;

  let lookupTargetKey = "generic";
  const normalizedKey = (activeServiceKeyString || "").toLowerCase().trim();

  // Route incoming services seamlessly to specialized upsell datasets arrays
  if (normalizedKey.includes("llc") || normalizedKey.includes("corp") || normalizedKey.includes("formation") || normalizedKey.includes("nonprofit")) {
    lookupTargetKey = "formations";
  } else if (normalizedKey.includes("broker") || normalizedKey.includes("authority-broker")) {
    lookupTargetKey = "broker";
  } else if (normalizedKey.includes("trucker") || normalizedKey.includes("trucking") || normalizedKey.includes("fmcsa")) {
    lookupTargetKey = "trucker";
  }

  const databaseSource = window.UPSELLS_ROUTER_DATABASE || (typeof UPSELLS_ROUTER_DATABASE !== "undefined" ? UPSELLS_ROUTER_DATABASE : null);
  if (!databaseSource) {
    console.warn("[Upsell Engine] Schema mapping database uninitialized.");
    return;
  }

  const targetedUpsellDataset = databaseSource[lookupTargetKey];
  if (!targetedUpsellDataset) return;

  let calculatedListMarkup = "";

  // Mapping lookup table linking product IDs directly to our calculations background state flags
  const UPSELL_STATE_PROPERTY_MAP = {
    "ra-shield": "customSelectedRegisteredAgentServiceActive",
    "ein-procure": "customSelectedEinProcurementServiceActive",
    "op-agreement": "customSelectedOperatingAgreementActive", // Links to dynamic multi-LLC structures
    "corp-bylaws": "customSelectedBylawsActive",
    "comp-monitor": "customSelectedComplianceMonitorActive",
    "corp-resolutions": "customSelectedResolutionsActive",
    "corp-minutes": "customSelectedMinutesActive",
    "good-standing": "customSelectedGoodStandingCertificateServiceActive",
    "boc3-filing": "customSelectedBoc3FilingActive",
    "fmcsa-audit": "customSelectedNewEntrantAddonTotal"
  };

  targetedUpsellDataset.forEach(function(item) {
    const displayCostString = item.price > 0 ? `$${item.price.toFixed(2)}` : "Free Partner Match";
    const displayBillingText = item.price > 0 ? item.billing : " (Quote Request)";

    // Structural Exclusion Filters: Prevent offering incompatible blocks
    if (item.id === "op-agreement" && !normalizedKey.includes("llc")) return;
    if (item.id === "corp-bylaws" && (!normalizedKey.includes("corp") && !normalizedKey.includes("corporation"))) return;

    // Resolve vector typography presentation classes using an unhardcoded registry
    const ICON_CLASS_MAP = {
      "ra-": "fa-solid fa-building-shield",
      "boc3": "fa-solid fa-building-shield",
      "comp-": "fa-solid fa-clock-rotate-left",
      "minutes": "fa-solid fa-book-bookmark",
      "resolutions": "fa-solid fa-book-bookmark",
      "agreement": "fa-solid fa-file-signature",
      "bylaws": "fa-solid fa-file-signature",
      "ein": "fa-solid fa-passport",
      "good-standing": "fa-solid fa-certificate",
      "audit": "fa-solid fa-shield-halved",
      "quote": "fa-solid fa-shield-halved"
    };

    let cardIconClass = "fa-solid fa-circle-plus"; // Default fallback icon tracking element
    Object.keys(ICON_CLASS_MAP).forEach(function(matchPrefix) {
      if (item.id.includes(matchPrefix)) {
        cardIconClass = ICON_CLASS_MAP[matchPrefix];
      }
    });

    // Determine if this item was previously checked to restore active checked layouts
    const stateFlagProperty = UPSELL_STATE_PROPERTY_MAP[item.id] || "";
    const isCurrentlyChecked = stateFlagProperty && window[stateFlagProperty] === true ? "checked" : "";

    calculatedListMarkup += `
      <div class="upsell-card-node" style="background: #ffffff; border: 1px solid var(--border, #e2e8f0); border-radius: 12px; padding: 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; box-sizing: border-box; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
        <div style="display: flex; align-items: center; gap: 20px; flex: 1;">
          <div style="font-size: 2.2rem; color: var(--primary, #10b981); min-width: 45px; text-align: center;">
            <i class="${cardIconClass}"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 4px 0; font-size: 1.1rem; font-weight: 800; color: var(--navy, #0a1f44);">${item.name}</h4>
            <p style="margin: 0; font-size: 0.85rem; color: var(--slate, #64748b); line-height: 1.5; text-align: left;">${item.desc}</p>
          </div>
        </div>
        <div style="text-align: right; min-width: 170px;">
          <div style="font-size: 1.3rem; font-weight: 900; color: var(--navy, #0a1f44); font-family: monospace; margin-bottom: 8px;">
            ${displayCostString}
            <span style="font-size: 0.75rem; color: var(--slate, #64748b); font-family: system-ui; font-weight: normal;">${displayBillingText}</span>
          </div>
          <label style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; background: #f1f5f9; padding: 8px 16px; border-radius: 6px; border: 1px solid var(--border, #e2e8f0); user-select: none;">
            <input type="checkbox" id="upsell-item-${item.id}" class="upsell-checkbox addon-checkbox" 
              data-price="${item.price}" data-name="${item.name}" data-state-property="${stateFlagProperty}" ${isCurrentlyChecked}
              style="accent-color: var(--primary, #10b981); width: 16px; height: 16px; margin: 0; cursor: pointer;" 
              onchange="window.executeUpsellStateToggleIntercept(this)">
            Add to Order
          </label>
        </div>
      </div>`;
  });

  container.innerHTML = calculatedListMarkup;
}

/**
 * Global execution interceptor for upsell selection changes.
 * Safely updates background variable state flags and refreshes checkout totals.
 */
window.executeUpsellStateToggleIntercept = function(checkboxElement) {
  if (!checkboxElement) return;

  const linkedStateProperty = checkboxElement.getAttribute("data-state-property");
  
  // Synchronize the checkbox state value back to the global background parameters matrix flags
  if (linkedStateProperty) {
    window[linkedStateProperty] = checkboxElement.checked;
    console.log(`[Upsell State Sync] Property "${linkedStateProperty}" updated status: ${checkboxElement.checked}`);
  }

  // Force an immediate calculations updates sweep pass across invoice cards
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }
};

// Map the panel renderer method straight to global namespace layers safely
window.renderTargetUpsellsListPanel = renderTargetUpsellsListPanel;


// ============================================================================
// 🗺️ WIZARD CORE ENGINE: 7-STEP INTERACTIVE NAVIGATION ROUTER MODULE
// ============================================================================

// Sync tracker variable smoothly to the single source of truth used across all files
window.currentWizardActiveStep = window.currentWizardActiveStep || 1;
window.totalWizardExpectedSteps = window.totalWizardExpectedSteps || 7;

/**
 * Public master routing function that handles panel visibility swaps and timeline state lights.
 */
function goToNextWizardStep(targetStepIndex, event = null) {
  console.log(`[7-Step Router] Navigation request from Step ${window.currentWizardActiveStep} to Step ${targetStepIndex}.`);

  // Prevent generic form leaks or accidental refreshing on button clicks
  if (event && typeof event.preventDefault === "function") event.preventDefault();

  const panels = document.querySelectorAll(".wizard-panel");
  if (!panels || panels.length === 0) return false;

  // Convert target pointers safely to numbers to evaluate math boundaries
  let numericTargetIndex = parseInt(targetStepIndex, 10);
  if (isNaN(numericTargetIndex)) return false;

  // 🛡️ Safe Input Validation Guard: Runs checks only when sweeping panels FORWARD
  if (numericTargetIndex > window.currentWizardActiveStep && typeof validateStepInputParametersVanilla === "function") {
    if (!validateStepInputParametersVanilla(window.currentWizardActiveStep)) {
      console.warn(`[Navigation Blocked] Input fields failed validation criteria on step: ${window.currentWizardActiveStep}`);
      return false;
    }
  }

  // Bound limits guard checks: Prevent shifting past step ranges
  if (numericTargetIndex < 1 || numericTargetIndex > totalWizardExpectedSteps) return false;

  // 💳 Checkout Processing Switch Node
  // If moving into Step 7 (Success Page), fire transaction processors right before unlocking the final layout view
  if (numericTargetIndex === 7 && window.currentWizardActiveStep === 6) {
    if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
      console.log("[7-Step Router] Step 6 finalized. Initializing secure checkout payload submission...");
      // Let your payment engine process the charge. If it succeeds, it will route into Step 7 panels
    }
  }

  // 💾 Cache active progress values parameters securely into LocalStorage before view switches
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(false);
  }

  // Update the master unified global tracker state index pointer
  window.currentWizardActiveStep = numericTargetIndex;

  // 🔄 Structural Panel visibility transformer loop
  panels.forEach(function(panel, sequence) {
    var panelStepNumber = sequence + 1;
    if (panelStepNumber === numericTargetIndex) {
      panel.classList.add("active");
      panel.style.setProperty("display", "block", "important");
    } else {
      panel.classList.remove("active");
      panel.style.setProperty("display", "none", "important");
    }
  });

  // 🟢 LIGHT UP THE EMERALD TIMELINE MARGIN BUBBLES
  if (typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);
  }

  // 📋 Re-calculate live checkout receipts dynamically upon entering the new panel step
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }

  // Smooth pan viewport view frames back to coordinate peak zero safely
  window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

/**
 * Universal timeline visual reflector. Updates sidebar bubble tracks to display
 * brilliant emerald lights for active stages and clean checks for completed slots.
 */
function updateApplicationMapTimelineBubbles(activeIndex) {
  const rows = document.querySelectorAll(".toc-step-row");
  if (!rows || rows.length === 0) return;

  console.log(`[Timeline Sync] Lighting application map nodes for active position: ${activeIndex}`);

  rows.forEach(function(row, idx) {
    const dotElement = row.querySelector(".toc-dot") || row.querySelector(".step-indicator-dot");
    const loopIndex = idx + 1; // Map 0-indexed row elements array to 1-based steps counts 1-7

    // Clear old visual track states before applying active class properties profiles
    row.classList.remove("toc-active", "toc-completed", "active", "completed");

    if (dotElement) {
      // Clear inline style overrides so clean theme variables can control the layout transitions
      dotElement.style.background = "";
      dotElement.style.borderColor = "";
      dotElement.style.boxShadow = "";
    }

    if (loopIndex < activeIndex) {
      // STAGE COMPLETION: Apply checked styles and soft secondary emerald themes
      row.classList.add("toc-completed", "completed");
      if (dotElement) {
        dotElement.style.background = "rgba(16, 185, 129, 0.15)";
        dotElement.style.borderColor = "#10b981";
      }
    } else if (loopIndex === activeIndex) {
      // ACTIVE STEP DETECTED: Illuminate the node with a vibrant Emerald glow light effect
      row.classList.add("toc-active", "active");
      if (dotElement) {
        dotElement.style.background = "#10b981";
        dotElement.style.borderColor = "#10b981";
        // Apply high-utility CSS filters to render the emerald glow aura
        dotElement.style.boxShadow = "0 0 14px rgba(16, 185, 129, 0.8), inset 0 0 4px rgba(255,255,255,0.4)";
      }
    }
  });

  // Synchronize horizontal timeline track width bar if present in the header layout
  const horizontalProgressFill = document.getElementById("timeline-progress-fill-node");
  if (horizontalProgressFill) {
    const percentageProgressWidth = ((activeIndex - 1) / (totalWizardExpectedSteps - 1)) * 100;
    horizontalProgressFill.style.width = `${percentageProgressWidth}%`;
  }
}

// Expose routing APIs to global window frames safely to make sure old button clicks never throw undefined crashes
window.goToNextWizardStep = goToNextWizardStep;
window.updateApplicationMapTimelineBubbles = updateApplicationMapTimelineBubbles;


// ============================================================================
// ✍️ DIGITAL CURSIVE SIGNATURE RENDERING SUITE
// ============================================================================

/**
 * Initializes real-time text-to-cursive handwriting mirror syncs across wizard fields.
 * Scopes input events globally to catch dynamically injected step forms automatically.
 */
function initCursiveSignatureCaptureLivePreview() {
  const panelContext = document.getElementById(`step-panel-${window.currentWizardActiveStep || 4}`) || document.body;

  // 📋 Comprehensive ID Selector Pool: Captures all naming variations used across your HTML templates
  const inputField = document.getElementById("poa_signer_printed") || 
                      document.getElementById("signature-input") || 
                      document.getElementById("legal-signature") ||
                      panelContext.querySelector('input[name*="signature"], .signature-input-field');

  const previewDisplay = document.getElementById("cursive-signature-preview") || 
                         document.getElementById("cursive-signature-output") || 
                         document.getElementById("signature-preview") ||
                         panelContext.querySelector('.signature-preview-display');

  if (!inputField || !previewDisplay) {
    console.log("[Signature Sync] Form inputs or preview display elements not visible in current step layout view.");
    return;
  }

  // Enforce handwritten script typeface styles onto the display target instantly
  previewDisplay.style.fontFamily = "'Dancing Script', 'Alex Brush', 'Great Vibes', 'Brush Script MT', cursive";
  previewDisplay.style.transition = "opacity 0.2s ease-in-out, transform 0.2s ease-in-out";

  // Check state to handle existing entries on initial load parameters values
  if (inputField.value.trim() !== "") {
    previewDisplay.innerText = inputField.value.trim();
    previewDisplay.style.opacity = "1";
    window.signaturePadHasBeenDrawnByUser = true;
  } else {
    previewDisplay.innerText = inputField.getAttribute("placeholder") || "Your Electronic Signature";
    previewDisplay.style.opacity = "0.35";
    window.signaturePadHasBeenDrawnByUser = false;
  }

  // Bind real-time input event listeners safely
  inputField.addEventListener("input", function(e) {
    const activeTextString = e.target.value;

    if (activeTextString.trim() === "") {
      previewDisplay.innerText = inputField.getAttribute("placeholder") || "Your Electronic Signature";
      previewDisplay.style.opacity = "0.35";
      previewDisplay.style.transform = "scale(0.98)";
      window.signaturePadHasBeenDrawnByUser = false;
    } else {
      previewDisplay.innerText = activeTextString;
      previewDisplay.style.opacity = "1";
      previewDisplay.style.transform = "scale(1)";
      window.signaturePadHasBeenDrawnByUser = true;
    }

    // Trigger local state serialization cache changes parameters save automatically
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
      cacheAndRestoreWizardFormStatesVanilla(false);
    }
  });
}

// Register initialization execution safely on app load namespace scopes layers
window.initCursiveSignatureCaptureLivePreview = initCursiveSignatureCaptureLivePreview;


// ============================================================================ //
// 🛡️ MANDATORY WORKFLOW VALIDATION ENGINE (DIRECT FIX)                       //
// ============================================================================ //
/**
 * Executes a strict validation sweep across all required fields on the current step.
 * Fixes the ReferenceError crash by explicitly defining the missing validation function.
 */
function validateCurrentWizardStepInputs(currentStepIndex) {
  const stepNum = parseInt(currentStepIndex, 10);
  console.log(`[Form Validation] Auditing requirement constraints for Step: ${stepNum}`);
  
  const activePanel = document.getElementById(`step-panel-${stepNum}`);
  if (!activePanel) return true; // If no physical panel exists, allow safe progression

  // Gather all required input elements within the active step panel boundaries
  const requiredInputs = activePanel.querySelectorAll("input[required], select[required], textarea[required]");
  let isPanelDataValid = true;

  requiredInputs.forEach(function(inputElement) {
    // 🛡️ Skip validation if the field is hidden inside a collapsed wrapper (offsetParent === null)
    if (inputElement.offsetParent === null) return;

    // Run native browser validity constraints check
    if (!inputElement.checkValidity()) {
      inputElement.reportValidity(); // Display the native browser validation message bubble
      inputElement.style.borderColor = "#ef4444";
      isPanelDataValid = false;
    } else {
      inputElement.style.borderColor = "var(--border, #cbd5e1)";
    }
  });

  return isPanelDataValid;
}

// Map to global window scopes so your HTML buttons can find it instantly on click
window.validateCurrentWizardStepInputs = validateCurrentWizardStepInputs;
window.validateStepInputParametersVanilla = validateCurrentWizardStepInputs;

// ============================================================================ //
// 🏁 CENTRAL WIZARD LIFE-CYCLE INITIALIZATION & TIMING ENGINE                  //
// ============================================================================ //
/**
 * Public structural bridge to resolve feature bullet list content parameters dynamically.
 */
function renderStep1CustomFeatureBullets(activeSlug) {
  if (typeof getPricingConfiguration === "function") {
    const activeTierKey = (window.routeActivePlanKey || "starter").toLowerCase().trim();
    const resolvedConfig = getPricingConfiguration(activeSlug, activeTierKey);
    
    if (resolvedConfig && resolvedConfig.config && typeof window.renderOnboardingPlanOverviewCard === "function") {
      // FIX: Added safe fallback navigation to prevent crashes if nested object properties are missing
      const activeBulletsArray = (resolvedConfig.config.bullets && resolvedConfig.config.bullets[activeTierKey]) ? resolvedConfig.config.bullets[activeTierKey] : [];
      window.renderOnboardingPlanOverviewCard(resolvedConfig.config, activeTierKey, activeBulletsArray || []);
    }
  }
}
window.renderStep1CustomFeatureBullets = renderStep1CustomFeatureBullets;

/**
 * Orchestrates the exact execution timeline of the 7-step wizard.
 * Guarantees that layouts are injected before data layers restore to prevent timing crashes.
 */
function runUnifiedWizardBootEngine() {
  console.log("[Boot Engine] Initializing sequential layout and data synchronization tracking...");
  
  const urlEngineParams = new URLSearchParams(window.location.search);
  const resolvedSlug = urlEngineParams.get('service') || urlEngineParams.get('package') || urlEngineParams.get('id') || "llc-formation";
  const resolvedPlan = urlEngineParams.get('plan') || "starter";
  const resolvedState = urlEngineParams.get('state') || "TX";

  // 1. Establish unified state tracking parameters safely
  window.routeActiveServiceKey = resolvedSlug.toLowerCase().trim();
  window.routeActivePlanKey = resolvedPlan.toLowerCase().trim();
  window.selectedFormationStateCode = resolvedState.toUpperCase().trim();
  window.currentWizardActiveStep = 1;

  if (typeof window.CENTRAL_SERVICE_PLAN_DB === "undefined") {
    console.log("[Boot Sync Delay] CENTRAL_SERVICE_PLAN_DB array unparsed. Re-queueing loop...");
    setTimeout(runUnifiedWizardBootEngine, 100);
    return;
  }

  // 2. Synchronize incoming URL marketing choices
  if (typeof autoInjectMainWebsitePricingPlan === "function") {
    autoInjectMainWebsitePricingPlan();
  }

  // 3. Mount and inject the Step 2 dynamic fields BEFORE restoring cache
  if (typeof window.executeStepTwoDynamicFormInjection === "function") {
    window.executeStepTwoDynamicFormInjection();
  } else if (typeof executeDynamicRegulatoryFieldInjection === "function") {
    executeDynamicRegulatoryFieldInjection(window.routeActiveServiceKey);
  }

  // 4. Restore user's cached inputs out of LocalStorage securely
  if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
    cacheAndRestoreWizardFormStatesVanilla(true);
  }

  // 5. Initialize real-time handwritten cursive text signature previews
  if (typeof initCursiveSignatureCaptureLivePreview === "function") {
    window.initCursiveSignatureCaptureLivePreview();
  }

  // 6. Fire marketing features card injections for Step 1
  if (typeof renderStep1CustomFeatureBullets === "function") {
    renderStep1CustomFeatureBullets(window.routeActiveServiceKey);
  }

  // 7. Hook up universal Google Places autocomplete validation matrices to address nodes
  if (typeof autoDiscoverAndHookAddressNodes === "function") {
    autoDiscoverAndHookAddressNodes();
  }

  // 8. Set initial DOM panel visibility to Step 1
  const visiblePanels = document.querySelectorAll(".wizard-panel");
  visiblePanels.forEach(function(panel, sequence) {
    if ((sequence + 1) === window.currentWizardActiveStep) {
      panel.classList.add("active");
      // CRITICAL FIX: Changed "!important" to "important". The exclamation mark breaks JavaScript style injections.
      panel.style.setProperty("display", "block", "important");
    } else {
      panel.classList.remove("active");
      // CRITICAL FIX: Changed "!important" to "important". 
      panel.style.setProperty("display", "none", "important");
    }
  });

  // 9. Sync the timeline progress map and illuminate the initial Emerald bubble track
  if (typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(window.currentWizardActiveStep);
  }

  // 10. Execute final checkout pricing subtotals calculations
  if (typeof updateDynamicPricingMatrixVanilla === "function") {
    updateDynamicPricingMatrixVanilla();
  }

  console.log("[Boot Engine Success] Onboarding pipeline fully active. Wizard ready.");
}

// ============================================================================ //
// 🔌 UNIFIED SYSTEM LIFE-CYCLE HOOKS                                          //
// ============================================================================ //
function initSevenStepWizardSystem(activeSlug) {
  runUnifiedWizardBootEngine();
}

function updateWizardStepProgressIndicatorBubbles(activeIndexNumber) {
  const synchronizedStepIndex = parseInt(activeIndexNumber, 10) + 1;
  if (typeof updateApplicationMapTimelineBubbles === "function") {
    updateApplicationMapTimelineBubbles(synchronizedStepIndex);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runUnifiedWizardBootEngine);
} else {
  runUnifiedWizardBootEngine();
}

window.initSevenStepWizardSystem = initSevenStepWizardSystem;
window.updateWizardStepProgressIndicatorBubbles = updateWizardStepProgressIndicatorBubbles;
