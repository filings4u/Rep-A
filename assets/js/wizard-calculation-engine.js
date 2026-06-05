// ============================================================================
// 🧠 FILE 1: WIZARD-CALCULATION.JS - SERVICE COMPLIANCE DATABASE & SCHEMAS
// ============================================================================

// 🗂️ CENTRAL COMPLIANCE SERVICE SYSTEM DATABASE INDEX (2026 PRODUCTION SPEC)
const CENTRAL_SERVICE_PLAN_DB = {
    "ucr-registration": {
        "name": "Unified Carrier Registration (UCR)",
        "gov_fee": 76,
        "prices": { "standard": 149, "elite": 249, "enterprise": 449 }
    },
    "clia-certificate": {
        "name": "CLIA Laboratory Certificate",
        "gov_fee": 180,
        "prices": { "standard": 199, "elite": 349, "enterprise": 599 }
    },
    "regulatory-consulting": {
        "name": "Custom Regulatory Legal Consulting",
        "gov_fee": 0,
        "prices": { "standard": 299, "elite": 499, "enterprise": 899 }
    },
    "hazmat-registration": {
        "name": "HAZMAT Registration (PHMSA)",
        "gov_fee": 300,
        "prices": { "standard": 175, "elite": 299, "enterprise": 499 }
    },
    "duns-number": {
        "name": "DUNS Number Procurement",
        "gov_fee": 0,
        "prices": { "standard": 125, "elite": 249, "enterprise": 449 }
    },
    "procurement-registration": {
        "name": "Government Procurement Registration",
        "gov_fee": 0,
        "prices": { "standard": 199, "elite": 349, "enterprise": 699 }
    },
    "llc-reinstatement": {
        "name": "LLC Reinstatement Processing",
        "gov_fee": 150,
        "prices": { "standard": 199, "elite": 349, "enterprise": 549 }
    },
    "apostille-services": {
        "name": "Apostille Authentication Services",
        "gov_fee": 45,
        "prices": { "standard": 149, "elite": 299, "enterprise": 499 }
    },
    "good-standing": {
        "name": "Certificate of Good Standing",
        "gov_fee": 50,
        "prices": { "standard": 49, "elite": 99, "enterprise": 199 }
    },
    "foreign-qualification": {
        "name": "Foreign Qualification Certificate",
        "gov_fee": 200,
        "prices": { "standard": 149, "elite": 299, "enterprise": 499 }
    },
    "scac-code": {
        "name": "SCAC Code Registration (NMFTA)",
        "gov_fee": 95,
        "prices": { "standard": 125, "elite": 249, "enterprise": 449 }
    },
    "trademark-filing": {
        "name": "Trademark Filing Application",
        "gov_fee": 350,
        "prices": { "standard": 199, "elite": 399, "enterprise": 699 }
    },
    "servicemark-filing": {
        "name": "Servicemark Filing Application",
        "gov_fee": 350,
        "prices": { "standard": 199, "elite": 399, "enterprise": 699 }
    }
};

// ⚙️ SYSTEM STATE RUNTIME FLOW GLOBAL CONSTANTS
window.currentWizardActiveStep = typeof window.currentWizardActiveStep !== "undefined" ? window.currentWizardActiveStep : 1;
window.totalWizardExpectedSteps = 5;
window.routeActiveServiceKey = typeof window.routeActiveServiceKey !== "undefined" && window.routeActiveServiceKey ? window.routeActiveServiceKey : "hazmat-registration";
window.routeActivePlanKey = typeof window.routeActivePlanKey !== "undefined" && window.routeActivePlanKey ? window.routeActivePlanKey : "elite";
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

/**
 * Validates step input values comprehensively before permitting step progression.
 * @param {number} stepIndex - The current active step layout position index.
 * @returns {boolean} - Returns true if all active form elements clear parameters.
 */
function validateStepInputParametersVanilla(stepIndex) {
    let isCurrentPanelValid = true;
    const targetPanel = document.getElementById(`step-panel-${stepIndex}`);
    if (!targetPanel) return true;

    targetPanel.querySelectorAll('.input-error-marker').forEach(node => node.remove());
    targetPanel.querySelectorAll('input, select, textarea').forEach(node => {
        node.style.borderColor = 'var(--border, #cbd5e1)';
    });

    if (stepIndex === 1) {
        const targetJurisdiction = document.getElementById('wizard-target-jurisdiction');
        if (targetJurisdiction && !targetJurisdiction.value) {
            safelyMarkInvalid(targetJurisdiction, 'Filing authority target jurisdiction choice required.');
            isCurrentPanelValid = false;
        }
    }

    if (stepIndex === 2) {
        const federalTaxFields = [
            { id: 'fed_tax_legal_name', label: 'Official Business Name is required for federal filing.' },
            { id: 'fed_tax_ein', label: 'Valid IRS Employer Identification Number (EIN) is required.' },
            { id: 'fed_tax_classification', label: 'Please select your target Federal Tax Classification profile.' },
            { id: 'fed_tax_principal_street', label: 'Principal street address routing parameters are required.' },
            { id: 'fed_tax_principal_city', label: 'Principal office location city selection is required.' },
            { id: 'fed_tax_principal_state', label: 'Filing state authority selection is required.' },
            { id: 'fed_tax_principal_zip', label: 'Postal zip code target parameters are required.' }
        ];

        federalTaxFields.forEach(field => {
            const inputNode = document.getElementById(field.id);
            if (inputNode && window.getComputedStyle(inputNode).display !== "none") {
                if (!inputNode.value || inputNode.value.trim() === "") {
                    safelyMarkInvalid(inputNode, field.label);
                    isCurrentPanelValid = false;
                }
            }
        });
    }

    if (stepIndex === 4) {
        const cachedSignatureToken = localStorage.getItem("poa-signature-pad-data") || "";
        const signatureCaptured = window.signaturePadHasBeenDrawnByUser || cachedSignatureToken.length > 500;

        if (!signatureCaptured) {
            alert("Digital Power of Attorney signature verification parameters mapping record empty. Draw signature on screen canvas pad to pass validation check.");
            isCurrentPanelValid = false;
        }

        const poaPrintedName = document.getElementById('poa_signer_printed');
        if (poaPrintedName && (!poaPrintedName.value || poaPrintedName.value.trim() === "")) {
            safelyMarkInvalid(poaPrintedName, 'Signatory electronic acknowledgement identity verification string missing.');
            isCurrentPanelValid = false;
        }

        const poaCheckbox = document.getElementById('poa_agreement_lock');
        if (poaCheckbox && !poaCheckbox.checked) {
            alert("Authorization lock check verification asset validation check failed. Accept Power of Attorney terms layout constraints to continue.");
            isCurrentPanelValid = false;
        }
    }

    return isCurrentPanelValid;
}

function safelyMarkInvalid(node, errorText) {
    if (!node) return;
    node.style.borderColor = '#ef4444';
    const parentNode = node.parentNode;
    if (parentNode && !parentNode.querySelector('.input-error-marker')) {
        const errSpan = document.createElement('span');
        errSpan.className = 'input-error-marker';
        errSpan.style.cssText = "color: #ef4444; font-size: 11px; font-weight: 600; display: block; margin-top: 4px; font-family: inherit;";
        errSpan.innerText = errorText;
        parentNode.appendChild(errSpan);
    }
}


// ============================================================================
// 🧠 MODULE: MASTER REGULATORY FORM FIELD INJECTION ENGINE
// ============================================================================
function executeDynamicRegulatoryFieldInjection(serviceKey) {
    const rootFieldContainer = document.getElementById("dynamic-onboarding-fields-root");
    if (!rootFieldContainer) return;

    // Standardize key inputs to pass strict conditional matches
    const cleanKey = String(serviceKey || window.routeActiveServiceKey || "").toLowerCase().trim();
    let targetLayoutFamily = "llc";

    // Categorization Router: Map strings safely to core layout families
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

    console.log(`[Field Engine] Dynamic field routing resolved to: "${targetLayoutFamily}" for service key: "${cleanKey}"`);

    // Fixed: Swapped out legacy references for cleanKey to ensure external function parameters evaluate correctly
    if (targetLayoutFamily === "series-llc") {
        rootFieldContainer.innerHTML = typeof buildSeriesLlcRegistrationFieldsLayoutHtml === "function" ? buildSeriesLlcRegistrationFieldsLayoutHtml(cleanKey) : "";
    } else if (targetLayoutFamily === "llc") {
        rootFieldContainer.innerHTML = typeof buildLlcFormationFieldsLayoutHtml === "function" ? buildLlcFormationFieldsLayoutHtml(cleanKey) : "";
    } else if (targetLayoutFamily === "nonprofit") {
        rootFieldContainer.innerHTML = typeof buildNonprofitOrganizationFieldsLayoutHtml === "function" ? buildNonprofitOrganizationFieldsLayoutHtml(cleanKey) : "";
    } else if (targetLayoutFamily === "corporate") {
        rootFieldContainer.innerHTML = typeof buildCorporateFormationFieldsLayoutHtml === "function" ? buildCorporateFormationFieldsLayoutHtml(cleanKey) : "";
    } else if (targetLayoutFamily === "dba") {
        rootFieldContainer.innerHTML = typeof buildDbaRegistrationFieldsLayoutHtml === "function" ? buildDbaRegistrationFieldsLayoutHtml(cleanKey) : "";
    } else if (targetLayoutFamily === "sole-prop") {
        rootFieldContainer.innerHTML = typeof buildInformalEntityFieldsLayoutHtml === "function" ? buildInformalEntityFieldsLayoutHtml(cleanKey) : "";
    } else if (targetLayoutFamily === "maintenance") {
        if (cleanKey.includes("qualification")) {
            rootFieldContainer.innerHTML = typeof buildForeignQualificationFieldsLayoutHtml === "function" ? buildForeignQualificationFieldsLayoutHtml(cleanKey) : "";
        } else {
            rootFieldContainer.innerHTML = typeof buildMaintenanceFieldsLayoutHtml === "function" ? buildMaintenanceFieldsLayoutHtml(cleanKey) : "";
        }
    } else if (targetLayoutFamily === "ip") {
        rootFieldContainer.innerHTML = typeof buildIpRegistryFieldsLayoutHtml === "function" ? buildIpRegistryFieldsLayoutHtml(cleanKey) : "";
    } else {
        rootFieldContainer.innerHTML = typeof buildExtendedFamiliesFieldsLayoutHtml === "function" ? buildExtendedFamiliesFieldsLayoutHtml(targetLayoutFamily, cleanKey) : "";
    }
}





// ========================================================
// ⏱️ MODULE 2: LIFECYCLE INITIALIZATION & ENVIRONMENT UTILITIES
// ========================================================

document.addEventListener("DOMContentLoaded", function() {
    initializeDynamicChronometerWidget12Hr();
    generateSecureRuntimeSessionTokenVanilla();
    initializeUrlParameterParserEngineVanilla();
    
    // Clear dynamic states cleanly if page reload is triggered
    const pageWasRefreshed = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (pageWasRefreshed) {
        localStorage.removeItem("f4u_wizard_onboarding_state");
    } else if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(true);
    }
    
    // Inject custom subform layouts into the Step 2 field container
    if (typeof executeDynamicRegulatoryFieldInjection === "function") {
        executeDynamicRegulatoryFieldInjection(routeActiveServiceKey);
    }
    if (typeof initializeFormDisplayLayoutSync === "function") {
        initializeFormDisplayLayoutSync();
    }
    
    // Boot up the web-scraper engine to fetch live website descriptions and pricing parameters
    if (typeof executeProductionWebsiteScraper === "function") {
        executeProductionWebsiteScraper();
    }
});



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

    if (queryPassedService) {
        // Fixed: Ensure global active service key pointer initialization layer exists safely
        window.routeActiveServiceKey = queryPassedService.toLowerCase().trim();
        
        if (inputServiceNode) {
            // Fixed: Check typeof to completely avoid fatal ReferenceErrors if object hasn't mounted yet
            if (typeof CENTRAL_SERVICE_PLAN_DB !== "undefined" && CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey]) {
                inputServiceNode.value = CENTRAL_SERVICE_PLAN_DB[window.routeActiveServiceKey].name;
            } else {
                let cleanLabel = window.routeActiveServiceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                inputServiceNode.value = cleanLabel;
            }
        }
    }

    if (queryPassedPlan) {
        const standardizedPlanString = queryPassedPlan.toLowerCase().trim();
        if (["standard", "elite", "enterprise"].includes(standardizedPlanString)) {
            window.routeActivePlanKey = standardizedPlanString;
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
}

// 🚀 MASTER SAFE BOOTSTRAP TRIGGER INITIALIZER
// Ensures all dynamic document content is completely painted before scripts evaluate target IDs
document.addEventListener("DOMContentLoaded", function() {
    initializeDynamicChronometerWidget12Hr();
    generateSecureRuntimeSessionTokenVanilla();
    initializeUrlParameterParserEngineVanilla();
});




// ========================================================
// 📋 MODULE 3: DYNAMIC RECEIPTS & STRIPE MOUNT
// ========================================================

function populatePurchaseSummaryReviewMatrix() {
    const planConfig = CENTRAL_SERVICE_PLAN_DB[routeActiveServiceKey];
    if (!planConfig) return;

    const baseTierPrice = planConfig.prices[routeActivePlanKey] || 0;
    const baseGovAgencyFee = planConfig.gov_fee || 0;
    const liveScrapedFilingFee = window.filings4uProductionFilingFee || 199.00;
    let incrementalAddonTotal = 0;

    // 1. Core Service Package Selection Item Header Entry Row Line
    let summaryRowsHtml = `
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--border); font-size: 0.95rem; font-weight: 700;">
            <span style="color: var(--navy);">${planConfig.name} (${routeActivePlanKey.toUpperCase()})</span>
            <span style="font-family: monospace; color: var(--navy);">$${baseTierPrice.toFixed(2)}</span>
        </div>
    `;

    // 2. Core Operational Processing Scraped Filing Fee Row Line
    summaryRowsHtml += `
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--border); font-size: 0.95rem; color: var(--navy); font-weight: 600;">
            <span>filings4u Processing Fee</span>
            <span style="font-family: monospace;">$${liveScrapedFilingFee.toFixed(2)}</span>
        </div>
    `;

    // 3. Evaluate Checked Marketplace Add-On Checkboxes
    document.querySelectorAll('.addon-checkbox:checked').forEach(checkbox => {
        const addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || 0;
        const addonLabelString = checkbox.getAttribute('data-name') || "Add-On Option";
        incrementalAddonTotal += addonPriceValue;

        summaryRowsHtml += `
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);">
                <span>+ ${addonLabelString}</span>
                <span style="font-family: monospace; font-weight: 600; color: var(--navy);">$${addonPriceValue.toFixed(2)}</span>
            </div>
        `;
    });

    // 4. Evaluate Checked Conditional Step 2 Subform Add-On States
    if (window.customSelectedRegisteredAgentServiceActive) {
        incrementalAddonTotal += 75.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ Registered Agent Shield</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$75.00</span></div>`;
    }
    if (window.customSelectedEinProcurementServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ EIN Procurement Processing</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$79.00</span></div>`;
    }
    if (window.customSelectedScorpElectionServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ Form 2553 Preparation</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$79.00</span></div>`;
    }
    if (window.customSelectedSolePropLicenseAuditServiceActive || window.customSelectedDbaLicenseAuditServiceActive || window.customSelectedNonprofitLicenseCheckActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ Compliance License Audit Suite</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$79.00</span></div>`;
    }
    if (window.customSelectedDbaSearchServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ Name Availability Search</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$79.00</span></div>`;
    }
    if (window.customSelectedForeignQualLicenseSuiteActive) {
        incrementalAddonTotal += 125.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ License & Permit Audit Suite</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$125.00</span></div>`;
    }

    // 5. Inject Summary Content HTML & Update Totals
    const summaryRowsContainer = document.getElementById('summary-purchase-rows-container');
    if (summaryRowsContainer) summaryRowsContainer.innerHTML = summaryRowsHtml;

    const totalSubtotal = baseTierPrice + liveScrapedFilingFee + incrementalAddonTotal;
    const totalGrandCharge = totalSubtotal + baseGovAgencyFee;

    const summarySubtotal = document.getElementById('summary-subtotal-display');
    if (summarySubtotal) summarySubtotal.textContent = `$${totalSubtotal.toFixed(2)}`;

    const summaryGov = document.getElementById('summary-gov-fees-display');
    if (summaryGov) summaryGov.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

    const summaryGrand = document.getElementById('summary-grand-total-display');
    if (summaryGrand) summaryGrand.textContent = `$${totalGrandCharge.toFixed(2)}`;

    window.wizardCalculatedFinalTotalAmount = totalGrandCharge;
    const paymentTotalDisp = document.getElementById("payment-gateway-total-display");
    if (paymentTotalDisp) paymentTotalDisp.textContent = `$${totalGrandCharge.toFixed(2)}`;
}

// 💳 INITIALIZE FLAT STRIPE ELEMENTS INSTANTLY UPON ENTERING STEP 6
let stripeInstance = null;
let stripeElementsContainer = null;
let stripePaymentElementInstance = null;

function initializeFlatStripeCheckoutElement() {
    // Prevent duplicate initializations if the container is already drawn on screen
    if (document.getElementById("stripe-payment-element-mount-point")?.hasChildNodes()) return;

    // Use your active production or sandbox publishable key parameter
    stripeInstance = Stripe('pk_live_YOUR_STRIPE_PUBLISHABLE_KEY');

    // Load custom aesthetic variables matching your slate/emerald corporate color tokens
    const appearanceConfig = {
        theme: 'flat',
        variables: {
            colorPrimary: '#10b981',
            colorBackground: '#ffffff',
            colorText: '#0a1f44',
            colorDanger: '#ef4444',
            fontFamily: 'system-ui, sans-serif',
            spacingUnit: '4px',
            borderRadius: '6px'
        }
    };

    // Calculate total amount in cents to pass valid charge criteria parameters to the Stripe intent
    const totalAmountInCents = Math.round(window.wizardCalculatedFinalTotalAmount * 100);

    const clientOptions = {
        mode: 'payment',
        amount: totalAmountInCents,
        currency: 'usd',
        appearance: appearanceConfig
    };

    stripeElementsContainer = stripeInstance.elements(clientOptions);
    stripePaymentElementInstance = stripeElementsContainer.create('payment');
    
    // Mount flat into the pre-configured HTML container block on Step 6
    stripePaymentElementInstance.mount('#stripe-payment-element-mount-point');
}


// ========================================================
// 🌐 MODULE 4: PRODUCTION WEB-SCRAPER & FIELD DISPATCHER
// ========================================================

// 🌐 LIVE AUTOMATED WEB-SCRAPER & PACKAGE DATA EXTRACTION ENGINE
async function executeProductionWebsiteScraper() {
    try {
        const siteResponse = await fetch("index.html");
        if (!siteResponse.ok) throw new Error("Connection block");

        const siteHtmlText = await siteResponse.text();
        const structuralParser = new DOMParser();
        const parsedDocument = structuralParser.parseFromString(siteHtmlText, 'text/html');

        // Target your landing page style nodes to extract prices and text descriptions automatically
        const webFilingFee = parsedDocument.querySelector('.main-filing-fee-value')?.textContent || "$199.00";
        const webEliteDesc = parsedDocument.querySelector('.elite-package-description')?.textContent || "Complete automated file deployment.";

        // Clean numeric float formatting conversion
        window.filings4uProductionFilingFee = parseFloat(webFilingFee.replace(/[^0-9.]/g, '')) || 199.00;

        // Apply descriptions straight onto the Step 1 review field layout
        const targetPackageField = document.getElementById('wizard-route-service-id');
        if (targetPackageField) {
            targetPackageField.value = `Elite Processing Plan - ${webEliteDesc.trim()}`;
        }
        
        updateDynamicPricingMatrixVanilla();
    } catch (networkError) {
        console.warn("[Scraper Error] Falling back to baseline configuration values:", networkError);
        window.filings4uProductionFilingFee = 199.00; // Secure standard processing rate fallback
    }
}

// MASTER REGULATORY FORM FIELD INJECTION ENGINE (ROUTING DISPATCH PATCH)
function executeDynamicRegulatoryFieldInjection(serviceKey) {
    const rootFieldContainer = document.getElementById("dynamic-onboarding-fields-root");
    if (!rootFieldContainer) return;
    const cleanKey = String(serviceKey || "").toLowerCase().trim();
    let targetLayoutFamily = "llc";

    if (cleanKey.includes("series-llc") || cleanKey.includes("series")) { targetLayoutFamily = "series-llc"; }
    else if (cleanKey === "llc-formation" || cleanKey.includes("llc")) { targetLayoutFamily = "llc"; }
    else if (cleanKey.includes("nonprofit")) { targetLayoutFamily = "nonprofit"; }
    else if (cleanKey.includes("corp") || cleanKey.includes("corporation")) { targetLayoutFamily = "corporate"; }
    else if (cleanKey.includes("proprietor") || cleanKey.includes("sole")) { targetLayoutFamily = "sole-prop"; }
    else if (cleanKey.includes("dba") || cleanKey.includes("assumed")) { targetLayoutFamily = "dba"; }
    else if (cleanKey.includes("reinstatement") || cleanKey.includes("dissolution") || cleanKey.includes("annual-report") || cleanKey.includes("good-standing") || cleanKey.includes("qualification")) { targetLayoutFamily = "maintenance"; }
    else if (cleanKey.includes("trademark") || cleanKey.includes("servicemark")) { targetLayoutFamily = "ip"; }
    else if (cleanKey.includes("consulting") || cleanKey.includes("permit") || cleanKey.includes("license")) { targetLayoutFamily = "regulatory"; }
    else if (cleanKey === "ein" || cleanKey.includes("sales-tax") || cleanKey.includes("payroll") || cleanKey.includes("agreement")) { targetLayoutFamily = "financial"; }
    else if (cleanKey.includes("income-tax") || cleanKey.includes("franchise") || cleanKey.includes("heavy-use") || cleanKey.includes("2290")) { targetLayoutFamily = "tax-filing"; }
    else if (cleanKey.includes("cage") || cleanKey.includes("duns") || cleanKey.includes("procurement") || cleanKey.includes("certificate") || cleanKey.includes("minority")) { targetLayoutFamily = "procurement"; }
    else if (cleanKey.includes("insurance") || cleanKey.includes("audit")) { targetLayoutFamily = "insurance"; }
    else { targetLayoutFamily = "trucking"; }

    if (targetLayoutFamily === "series-llc") { rootFieldContainer.innerHTML = typeof buildSeriesLlcRegistrationFieldsLayoutHtml === "function" ? buildSeriesLlcRegistrationFieldsLayoutHtml(routeActiveServiceKey) : ""; }
    else if (targetLayoutFamily === "llc") { rootFieldContainer.innerHTML = typeof buildLlcFormationFieldsLayoutHtml === "function" ? buildLlcFormationFieldsLayoutHtml(routeActiveServiceKey) : ""; }
    else if (targetLayoutFamily === "nonprofit") { rootFieldContainer.innerHTML = typeof buildNonprofitOrganizationFieldsLayoutHtml === "function" ? buildNonprofitOrganizationFieldsLayoutHtml(routeActiveServiceKey) : ""; }
    else if (targetLayoutFamily === "corporate") { rootFieldContainer.innerHTML = typeof buildCorporateFormationFieldsLayoutHtml === "function" ? buildCorporateFormationFieldsLayoutHtml(routeActiveServiceKey) : ""; }
    else if (targetLayoutFamily === "dba") { rootFieldContainer.innerHTML = typeof buildDbaRegistrationFieldsLayoutHtml === "function" ? buildDbaRegistrationFieldsLayoutHtml(routeActiveServiceKey) : ""; }
    else if (targetLayoutFamily === "sole-prop") { rootFieldContainer.innerHTML = typeof buildInformalEntityFieldsLayoutHtml === "function" ? buildInformalEntityFieldsLayoutHtml(routeActiveServiceKey) : ""; }
    else if (targetLayoutFamily === "maintenance") {
        if (cleanKey.includes("qualification")) { rootFieldContainer.innerHTML = typeof buildForeignQualificationFieldsLayoutHtml === "function" ? buildForeignQualificationFieldsLayoutHtml(routeActiveServiceKey) : ""; }
        else { rootFieldContainer.innerHTML = typeof buildMaintenanceFieldsLayoutHtml === "function" ? buildMaintenanceFieldsLayoutHtml(routeActiveServiceKey) : ""; }
    } else if (targetLayoutFamily === "ip") { rootFieldContainer.innerHTML = typeof buildIpRegistryFieldsLayoutHtml === "function" ? buildIpRegistryFieldsLayoutHtml(routeActiveServiceKey) : ""; }
    else { rootFieldContainer.innerHTML = typeof buildExtendedFamiliesFieldsLayoutHtml === "function" ? buildExtendedFamiliesFieldsLayoutHtml(targetLayoutFamily, routeActiveServiceKey) : ""; }
}






// ========================================================
// 🧠 MODULE 6: UI VIEW MATRIX & PRICING ENGINE
// ========================================================

// 🧬 UI VIEW TRANSITION PROTOCOL
function switchWizardActivePanelUi(activeStep) {
    console.log("[Wizard UI] Switching visible panel frame to Index:", activeStep);
    
    // Toggle block vs none states cleanly across steps 1 to 7
    for (let i = 1; i <= totalWizardExpectedSteps; i++) {
        const panel = document.getElementById(`step-panel-${i}`);
        if (panel) {
            panel.style.display = (i === activeStep) ? 'block' : 'none';
        }
    }

    // Synchronize step track row highlights across the side Application Map
    const timelineRows = document.querySelectorAll('nav .toc-step-row');
    if (timelineRows.length > 0) {
        timelineRows.forEach((row, index) => {
            const currentCheckIndex = index + 1;
            row.classList.remove('toc-active', 'toc-completed');
            if (currentCheckIndex === activeStep) {
                row.classList.add('toc-active');
            } else if (currentCheckIndex < activeStep) {
                row.classList.add('toc-completed');
            }
        });
    }
}

// 📊 DYNAMIC MATHEMATICAL BILLING ENGINE
function updateDynamicPricingMatrixVanilla() {
    const dropdownService = document.getElementById("wizard-route-service-id");
    const dropdownPlan = document.getElementById("wizard-route-tier-id");
    
    if (dropdownService && dropdownService.value && CENTRAL_SERVICE_PLAN_DB[dropdownService.value]) {
        routeActiveServiceKey = dropdownService.value;
    }
    if (dropdownPlan && dropdownPlan.value) {
        routeActivePlanKey = dropdownPlan.value;
    }
    
    const planConfig = CENTRAL_SERVICE_PLAN_DB[routeActiveServiceKey];
    if (!planConfig) return;

    // Load active prices from your index registry database parameters
    const baseTierPrice = planConfig.prices[routeActivePlanKey] || 0;
    const baseGovAgencyFee = planConfig.gov_fee || 0;
    
    // Pull the accurate live filing fee scraped off your website (Falls back safely to 199.00 if delayed)
    const liveScrapedFilingFee = window.filings4uProductionFilingFee || 199.00;
    let incrementalAddonTotal = 0;

    let descriptiveInvoiceRowsHtml = `
        <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--border); padding-bottom: 10px;">
            <span>${planConfig.name} (${routeActivePlanKey.toUpperCase()})</span>
            <span style="font-family: monospace;">$${baseTierPrice.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); font-weight: 500; margin-top: 6px;">
            <span>filings4u Processing Fee</span>
            <span style="font-family: monospace;">$${liveScrapedFilingFee.toFixed(2)}</span>
        </div>
    `;

    // Process every single interactive checked Add-On item option checkbox
    document.querySelectorAll('.addon-checkbox:checked').forEach(checkbox => {
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
        descriptiveInvoiceRowsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate);"><span>+ License & Permit Audit Suite</span><span style="font-family: monospace;">$125.00</span></div>`;
    }

    // Compute exact aggregation totals
    const aggregatedFilingSubtotal = baseTierPrice + liveScrapedFilingFee + incrementalAddonTotal;
    const finalizedGrandTotal = aggregatedFilingSubtotal + baseGovAgencyFee;

    // Inject rendered product matrix rows directly into Step 3 checkout display view box
    const invoiceContainer = document.getElementById('checkout-invoice-rows-container');
    if (invoiceContainer) {
        invoiceContainer.innerHTML = descriptiveInvoiceRowsHtml;
    }

    // Populate pricing totals text displays across your live nodes
    const subtotalDisp = document.getElementById('invoice-subtotal-display');
    if (subtotalDisp) subtotalDisp.textContent = `$${aggregatedFilingSubtotal.toFixed(2)}`;
    
    const govDisp = document.getElementById('invoice-gov-fees-display');
    if (govDisp) govDisp.textContent = `$${baseGovAgencyFee.toFixed(2)}`;
    
    const grandDisp = document.getElementById('invoice-grand-total-display');
    if (grandDisp) grandDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

    // Sync variables globally for Stripe gateway deployment read routines
    window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;
    
    const paymentTotalDisp = document.getElementById("payment-gateway-total-display");
    if (paymentTotalDisp) paymentTotalDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;
}

// 💎 SYSTEM NAMING SYNCHRONIZATION ALIAS
function updateWizardFinalTotalAmountMatrix() {
    updateDynamicPricingMatrixVanilla();
}


// ========================================================
// 📋 MODULE 8: RECEIPTS SUMMARY, STORAGE CACHE & STRIPE MOUNT
// ========================================================

function populatePurchaseSummaryReviewMatrix() {
    const planConfig = CENTRAL_SERVICE_PLAN_DB[routeActiveServiceKey];
    if (!planConfig) return;

    const baseTierPrice = planConfig.prices[routeActivePlanKey] || 0;
    const baseGovAgencyFee = planConfig.gov_fee || 0;
    const liveScrapedFilingFee = window.filings4uProductionFilingFee || 199.00;
    let incrementalAddonTotal = 0;

    // 1. Primary Selected Package Heading Entry Row Line
    let summaryRowsHtml = `
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--border); font-size: 0.95rem; font-weight: 700;">
            <span style="color: var(--navy);">${planConfig.name} (${routeActivePlanKey.toUpperCase()})</span>
            <span style="font-family: monospace; color: var(--navy);">$${baseTierPrice.toFixed(2)}</span>
        </div>
    `;

    // 2. Core Operational Processing Scraped Filing Fee Row Line
    summaryRowsHtml += `
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--border); font-size: 0.95rem; color: var(--navy); font-weight: 600;">
            <span>filings4u Processing Fee</span>
            <span style="font-family: monospace;">$${liveScrapedFilingFee.toFixed(2)}</span>
        </div>
    `;

    // 3. Evaluate Checked Marketplace Checkbox Add-On Tiers
    document.querySelectorAll('.addon-checkbox:checked').forEach(checkbox => {
        const addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || 0;
        const addonLabelString = checkbox.getAttribute('data-name') || "Add-On Option";
        incrementalAddonTotal += addonPriceValue;

        summaryRowsHtml += `
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);">
                <span>+ ${addonLabelString}</span>
                <span style="font-family: monospace; font-weight: 600; color: var(--navy);">$${addonPriceValue.toFixed(2)}</span>
            </div>
        `;
    });

    // 4. Evaluate Checked Conditional Step 2 Subform Add-On States
    if (window.customSelectedRegisteredAgentServiceActive) {
        incrementalAddonTotal += 75.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ Registered Agent Shield</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$75.00</span></div>`;
    }
    if (window.customSelectedEinProcurementServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ EIN Procurement Processing</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$79.00</span></div>`;
    }
    if (window.customSelectedScorpElectionServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ Form 2553 Preparation</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$79.00</span></div>`;
    }
    if (window.customSelectedSolePropLicenseAuditServiceActive || window.customSelectedDbaLicenseAuditServiceActive || window.customSelectedNonprofitLicenseCheckActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ Compliance License Audit Suite</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$79.00</span></div>`;
    }
    if (window.customSelectedDbaSearchServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ Name Availability Search</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$79.00</span></div>`;
    }
    if (window.customSelectedForeignQualLicenseSuiteActive) {
        incrementalAddonTotal += 125.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 0.9rem; color: var(--slate);"><span>+ License & Permit Audit Suite</span><span style="font-family: monospace; font-weight: 600; color: var(--navy);">$125.00</span></div>`;
    }

    // 5. Inject Rendered HTML String and Calculate Totals Displays
    const summaryRowsContainer = document.getElementById('summary-purchase-rows-container');
    if (summaryRowsContainer) {
        summaryRowsContainer.innerHTML = summaryRowsHtml;
    }

    const totalSubtotal = baseTierPrice + liveScrapedFilingFee + incrementalAddonTotal;
    const totalGrandCharge = totalSubtotal + baseGovAgencyFee;

    const summarySubtotal = document.getElementById('summary-subtotal-display');
    if (summarySubtotal) summarySubtotal.textContent = `$${totalSubtotal.toFixed(2)}`;

    const summaryGov = document.getElementById('summary-gov-fees-display');
    if (summaryGov) summaryGov.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

    const summaryGrand = document.getElementById('summary-grand-total-display');
    if (summaryGrand) summaryGrand.textContent = `$${totalGrandCharge.toFixed(2)}`;

    window.wizardCalculatedFinalTotalAmount = totalGrandCharge;
    const paymentTotalDisp = document.getElementById("payment-gateway-total-display");
    if (paymentTotalDisp) paymentTotalDisp.textContent = `$${totalGrandCharge.toFixed(2)}`;
}




 // ========================================================
// 🛒 STEP 2 DYNAMIC CONDITIONAL CART ADD-ON ITEMS HOOKS
// ========================================================

// Fixed: Reset tracking metrics at the start of every calculation loop to prevent compounding duplication errors
let incrementalAddonTotal = 0;
let descriptiveInvoiceRowsHtml = '';

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

// 💎 INJECTED NEW ENTRANT LIVE AUDIT CHECKOUT HOOK
if (window.lastCalculatedNewEntrantAddonTotal && window.lastCalculatedNewEntrantAddonTotal > 0) {
    incrementalAddonTotal += window.lastCalculatedNewEntrantAddonTotal;
    
    // Fixed: Also inject the HTML layout into the row tracker so the UI actually shows what the user is paying for
    if (window.lastCalculatedNewEntrantAddonHtml) {
        descriptiveInvoiceRowsHtml += window.lastCalculatedNewEntrantAddonHtml;
    }
}

// Aggregate absolute billing metrics strings parameters (Ensure safety defaults if undefined)
const currentBaseTierPrice = typeof baseTierPrice !== 'undefined' ? baseTierPrice : 0;
const currentBaseGovAgencyFee = typeof baseGovAgencyFee !== 'undefined' ? baseGovAgencyFee : 0;

const aggregatedFilingSubtotal = currentBaseTierPrice + incrementalAddonTotal;
const finalizedGrandTotal = aggregatedFilingSubtotal + currentBaseGovAgencyFee;

// Inject rendered components to the document layout tree root containers
const invoiceContainer = document.getElementById('checkout-invoice-rows-container');
if (invoiceContainer) {
    invoiceContainer.innerHTML = descriptiveInvoiceRowsHtml;
}

// 💎 INJECTED NEW ENTRANT SUMMARY INVOICE PRINT ELEMENT
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

// 🛡️ REPAIRED SYNTAX WRAPPERS Below
const subtotalDisp = document.getElementById('invoice-subtotal-display');
if (subtotalDisp) subtotalDisp.textContent = `$${aggregatedFilingSubtotal.toFixed(2)}`;

const govDisp = document.getElementById('invoice-gov-fees-display');
if (govDisp) govDisp.textContent = `$${currentBaseGovAgencyFee.toFixed(2)}`;

const grandDisp = document.getElementById('invoice-grand-total-display');
if (grandDisp) grandDisp.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

// State synchronization anchor mapping assignment
window.wizardCalculatedFinalTotalAmount = finalizedGrandTotal;

// 🛡️ REPAIRED SYNTAX WRAPPERS
const secondaryTotalDisplay = document.getElementById("wizard-sticky-total-value");
if (secondaryTotalDisplay) secondaryTotalDisplay.textContent = `$${finalizedGrandTotal.toFixed(2)}`;

// 💎 SYSTEM NAMING SYNCHRONIZATION ALIAS
function updateWizardFinalTotalAmountMatrix() {
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

// ============================================================================
// 🚀 MODULE: REPAIRED MASTER ALIAS ROUTING BRIDGE FOR HTML BUTTONS
// ============================================================================

/**
 * Maps standard manual panel clicks (e.g., onclick="goToNextWizardStep(3)")
 * Handles MouseEvent fallbacks cleanly to calculate target indexes.
 * @param {number|Object} targetStepIndex - Desired numerical step or event context.
 * @returns {boolean} - Returns execution status indicator.
 */
function goToNextWizardStep(targetStepIndex) {
    console.log(`[Bridge Action] Incoming call value:`, targetStepIndex);

    // ⚡ SAFE FALLBACK: If targetStepIndex is undefined, an object (MouseEvent), or blank, calculate it automatically
    if (!targetStepIndex || typeof targetStepIndex !== "number") {
        targetStepIndex = (window.currentWizardActiveStep || 1) + 1;
        console.log(`[Bridge Safety Override] Index was invalid. Recalculated target step to: ${targetStepIndex}`);
    }

    // Protect against jumping past total expected steps boundaries
    const maxSteps = window.totalWizardExpectedSteps || 5;
    if (targetStepIndex > maxSteps) {
        console.warn(`[Bridge Guard] Cannot jump to step ${targetStepIndex}. Max steps is ${maxSteps}.`);
        return false;
    }

    console.log(`[Bridge Success] Routing engine executing step jump to index: ${targetStepIndex}`);
    return executeDirectStepJump(targetStepIndex);
}

/**
 * Maps forward continue triggers matching native navigation click wrappers.
 */
function handleNavigationButtonClickEvent() {
    const activeStep = window.currentWizardActiveStep || 1;
    const maxSteps = window.totalWizardExpectedSteps || 5;

    if (activeStep === maxSteps) {
        if (typeof executeOnboardingTransactionPayloadSubmitVanilla === "function") {
            executeOnboardingTransactionPayloadSubmitVanilla();
        }
    } else {
        const nextStepIndex = activeStep + 1;
        console.log(`[Bridge Auto-Advance] Moving to Step: ${nextStepIndex}`);
        goToNextWizardStep(nextStepIndex);
    }
}

/**
 * Internal engine utility that manages step panel visibility states securely.
 * @param {number} targetIndex - Verified target position layout step indicator.
 * @returns {boolean} - True if layout state shift clears parameters successfully.
 */
function executeDirectStepJump(targetIndex) {
    const currentStep = window.currentWizardActiveStep || 1;
    console.log(`[Wizard Engine] Transitioning state: Step ${currentStep} -> Step ${targetIndex}`);

    // 1. Force consolidated production validation checks before advancing forward
    if (targetIndex > currentStep) {
        if (typeof validateStepInputParametersVanilla === "function") {
            if (!validateStepInputParametersVanilla(currentStep)) {
                console.warn(`[Wizard Blocked] Step ${currentStep} verification rejected by centralized schema validators.`);
                return false;
            }
        }
    }

    // 2. Sync values to LocalStorage cache (Saves current step state data cleanly)
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }

    // 3. Apply active state transformation index tracking modifications
    window.currentWizardActiveStep = targetIndex;

    // 4. Force DOM visibility refresh on your wizard layout panels
    const panels = document.querySelectorAll(".wizard-panel");
    if (panels.length > 0) {
        panels.forEach((panel, sequence) => {
            if ((sequence + 1) === targetIndex) {
                panel.classList.add("active");
                panel.style.setProperty("display", "block", "important"); // Turn on target step container
            } else {
                panel.classList.remove("active");
                panel.style.setProperty("display", "none", "important");  // Hide all non-active steps
            }
        });
    }

    // Fixed: Force graphics engine re-paint update loop to keep sidebars synchronized perfectly
    if (typeof renderActiveWizardStepUiLayout === "function") {
        renderActiveWizardStepUiLayout();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return true;
}



// ========================================================
// 🗺️ MASTER SERVICE MAP CONFIGURATION (Optimized Matching)
// ========================================================

// Fixed: Wrap in a dynamic builder function to ensure dependencies are resolved at runtime, not asset load time.
function getFormBuilderInstance(cleanKey) {
    if (!cleanKey || typeof cleanKey !== "string") {
        console.error("[Service Map Failure] Invalid or empty service key provided.");
        return null;
    }

    const formBuilders = {
        "operating-agreement": typeof buildOperatingAgreementForm === "function" ? buildOperatingAgreementForm : null,
        "annual-report": typeof buildAnnualReportsForm === "function" ? buildAnnualReportsForm : null,
        "trademark-filing": typeof buildTrademarkFilingForm === "function" ? buildTrademarkFilingForm : null,
        "servicemark-filing": typeof buildServicemarkFilingForm === "function" ? buildServicemarkFilingForm : null,
        "foreign-qualification": typeof buildForeignQualificationForm === "function" ? buildForeignQualificationForm : null,
        "business-license": typeof buildBusinessLicensesForm === "function" ? buildBusinessLicensesForm : null,
        "ein": typeof buildEinApplicationForm === "function" ? buildEinApplicationForm : null,
        "employer-id": typeof buildEinApplicationForm === "function" ? buildEinApplicationForm : null,
        "dissolution": typeof buildEntityDissolutionForm === "function" ? buildEntityDissolutionForm : null,
        "good-standing": typeof buildGoodStandingForm === "function" ? buildGoodStandingForm : null,
        "existence": typeof buildGoodStandingForm === "function" ? buildGoodStandingForm : null,
        "status": typeof buildGoodStandingForm === "function" ? buildGoodStandingForm : null,
        "apostille": typeof buildApostilleServiceForm === "function" ? buildApostilleServiceForm : null,
        "clia": typeof buildCliaCertificateForm === "function" ? buildCliaCertificateForm : null,
        "custom-regulatory": typeof buildCustomRegulatoryConsultingForm === "function" ? buildCustomRegulatoryConsultingForm : null,
        "federal-income-tax": typeof buildFederalIncomeTaxForm === "function" ? buildFederalIncomeTaxForm : null,
        "state-income-tax": typeof buildStateIncomeTaxForm === "function" ? buildStateIncomeTaxForm : null,
        "franchise-tax": typeof buildFranchiseTaxFilingForm === "function" ? buildFranchiseTaxFilingForm : null,
        "sales-tax": typeof buildSalesTaxRegistrationForm === "function" ? buildSalesTaxRegistrationForm : null,
        "payroll-tax": typeof buildPayrollTaxForm === "function" ? buildPayrollTaxForm : null,
        "heavy-use": typeof buildHeavyUseTaxForm === "function" ? buildHeavyUseTaxForm : null,
        "2290": typeof buildHeavyUseTaxForm === "function" ? buildHeavyUseTaxForm : null,
        "cage-code": typeof buildCageCodeForm === "function" ? buildCageCodeForm : null,
        "duns": typeof buildDunsNumberForm === "function" ? buildDunsNumberForm : null,
        "procurement-registration": typeof buildProcurementRegistrationForm === "function" ? buildProcurementRegistrationForm : null,
        "minority-certificate": typeof buildMinorityCertificateForm === "function" ? buildMinorityCertificateForm : null,
        "trucker-authority": typeof buildTruckerAuthorityForm === "function" ? buildTruckerAuthorityForm : null,
        "broker-authority": typeof buildBrokerAuthorityForm === "function" ? buildBrokerAuthorityForm : null,
        "scac-code": typeof buildScacCodeRegistrationForm === "function" ? buildScacCodeRegistrationForm : null,
        "driver-qualification": typeof buildDriverQualificationFileForm === "function" ? buildDriverQualificationFileForm : null,
        "process-agent": typeof buildProcessAgentBoc3Form === "function" ? buildProcessAgentBoc3Form : null,
        "boc-3": typeof buildProcessAgentBoc3Form === "function" ? buildProcessAgentBoc3Form : null,
        "ifta": typeof buildIftaRegistrationForm === "function" ? buildIftaRegistrationForm : null,
        "hazmat-registration": typeof buildHazmatRegistrationForm === "function" ? buildHazmatRegistrationForm : null,
        "trucker-insurance": typeof buildTruckerInsuranceForm === "function" ? buildTruckerInsuranceForm : null,
        "broker-insurance": typeof buildBrokerInsuranceForm === "function" ? buildBrokerInsuranceForm : null,
        "new-entrant-audit": typeof buildNewEntrantAuditForm === "function" ? buildNewEntrantAuditForm : null,
        "registered-agent": typeof buildRegisteredAgentServiceForm === "function" ? buildRegisteredAgentServiceForm : null,
        "llc-reinstatement": typeof buildLlcReinstatementForm === "function" ? buildLlcReinstatementForm : null,
        "ucr-registration": typeof buildUcrRegistrationForm === "function" ? buildUcrRegistrationForm : null
    };

    // 1. Direct Safe Key Verification
    if (formBuilders[cleanKey]) {
        console.log(`[Service Map] Exact match found for key: ${cleanKey}`);
        return formBuilders[cleanKey];
    }

    // 2. Exact Boundary Word Matching (Replaces toxic indexOf substring lookups)
    const sortedKeys = Object.keys(formBuilders).sort((a, b) => b.length - a.length);
    
    for (let i = 0; i < sortedKeys.length; i++) {
        const keyCandidate = sortedKeys[i];
        
        // Fixed: Use strict Word Boundaries (\b) so "status" doesn't match complete random words
        const boundaryRegex = new RegExp(`\\b${keyCandidate}\\b`, 'i');
        
        if (boundaryRegex.test(cleanKey)) {
            console.log(`[Service Map Fallback] RegEx Boundary match found: "${keyCandidate}" inside "${cleanKey}"`);
            return formBuilders[keyCandidate];
        }
    }

    console.warn(`[Service Map Warning] No compatible form builder could be mapped for string: ${cleanKey}`);
    return null;
}


/**
 * MASTER REGULATORY FORM FIELD INJECTION ENGINE
 * Resolves matched families and securely injects functional form layout templates.
 */
function executeDynamicRegulatoryFieldInjection(serviceKey) {
    const rootFieldContainer = document.getElementById("dynamic-onboarding-fields-root");
    if (!rootFieldContainer) return;

    // Standardize key inputs to pass strict conditional matches
    const cleanKey = String(serviceKey || window.routeActiveServiceKey || "").toLowerCase().trim();
    let targetLayoutFamily = "llc";

    // Categorization Router: Map strings safely to core layout families
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

    // Isolate key mapping vectors using your word boundary regex registry engine
    let matchedKey = null;
    if (typeof getFormBuilderInstance === "function") {
        // Fallback safety checks to prevent runtime context ReferenceErrors
        const safeStateOptions = typeof stateOptions !== "undefined" ? stateOptions : null;
        
        // Use regex boundary checker to extract correct key candidate slug matches
        matchedKey = cleanKey; 
        const activeBuilder = getFormBuilderInstance(matchedKey) ? matchedKey : null;

        if (activeBuilder) {
            const activeDropdownSource = (safeStateOptions && safeStateOptions.trim()) 
                ? safeStateOptions 
                : (window.globalStateDropdownOptionsHtml || "");
                
            // Fixed: Updated target selector from fieldsRoot to rootFieldContainer to prevent fatal script crashes
            rootFieldContainer.innerHTML = getFormBuilderInstance(matchedKey)(activeDropdownSource);

            // 🚨 ENGINE SYNC SECURE RESOLUTION LAYER
            if (matchedKey === "registered-agent") {
                queueMicrotask(() => {
                    const multiSelect = document.getElementById("ra_multiple_entities_choice");
                    const mailSelect = document.getElementById("ra_mail_forwarding_choice");
                    
                    if (multiSelect && typeof toggleRegisteredAgentMultiEntityVisibility === "function") {
                        toggleRegisteredAgentMultiEntityVisibility(multiSelect.value);
                    }
                    if (mailSelect && typeof toggleRegisteredAgentMailForwardingWorkflow === "function") {
                        toggleRegisteredAgentMailForwardingWorkflow(mailSelect.value);
                    }
                });
            }
            return;
        }
    }

    // --------------------------------------------------------
    // FALLBACK STRUCTURAL TEMPLATE ROUTER INTERFACE
    // --------------------------------------------------------
    if (cleanKey.includes("series-llc")) {
        console.warn("[Wizard Engine] Series LLC matched last.");
        rootFieldContainer.innerHTML = '<div style="grid-column: span 2; text-align: center; padding: 20px; color: #ef4444; font-weight: 700;">⚠️ Form configuration layout modules for "Series LLC" are not mounted.</div>';
    } else {
        console.warn("[Wizard Engine Warning] No matching layout string found for: " + cleanKey);
        rootFieldContainer.innerHTML = '<div style="grid-column: span 2; text-align: center; padding: 20px; color: #ef4444; font-weight: 700;">⚠️ Form configuration layout modules for "' + cleanKey + '" are not mounted.</div>';
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
    entityRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr; gap: 16px; margin-top: 8px;";
    
    // Fixed: Standardized HTML syntax, restored missing opening <label>, <input>, and <select> wrappers
    entityRow.innerHTML = `
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 2; display: flex; justify-content: space-between;">
            Secondary Entity Record
            <button type="button" onclick="removeRegisteredAgentEntityRow(this)" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem;">
                <i class="fa-solid fa-trash"></i> Remove
            </button>
        </span>
        <div class="wizard-input-group" style="margin: 0;">
            <label style="display: block; margin-bottom: 4px;">Entity Name <span style="color: #ef4444;">*</span></label>
            
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label style="display: block; margin-bottom: 4px;">Entity Type <span style="color: #ef4444;">*</span></label>
            
                <option value="">-- Select --</option>
                <option value="llc">LLC</option>
                <option value="corporation">Corporation</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
            </select>
        </div>
    `;
    
    container.appendChild(entityRow);
}

// Fixed: Swapped fragile index strings out for dynamic relative node removals
function removeRegisteredAgentEntityRow(buttonElement) {
    if (!buttonElement) return;
    const targetsCard = buttonElement.closest(".member-record-card");
    if (targetsCard) {
        targetsCard.remove();
    }
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
        manualWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            // Fixed: Clear values on hide so hidden stale data won't pass through form submit payloads
            if (field.tagName === "SELECT") field.selectedIndex = 0;
            else field.value = "";
        });
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
        if (assistanceWrapper) {
            assistanceWrapper.style.display = "none";
            // Fixed: Clear required state and reset selection value to completely prevent silent validation locks
            if (assistanceSelect) {
                assistanceSelect.required = false;
                assistanceSelect.selectedIndex = 0; 
            }
        }
    } else if (selectionValue === "no") {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (assistanceWrapper) {
            assistanceWrapper.style.display = "block";
            if (assistanceSelect) assistanceSelect.required = true;
        }
    } else {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (assistanceWrapper) {
            assistanceWrapper.style.display = "none";
            if (assistanceSelect) {
                assistanceSelect.required = false;
                assistanceSelect.selectedIndex = 0;
            }
        }
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
        // Fixed: Ensure the hidden string payload is wiped clean out of state
        reasonInput.value = ""; 
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
        // Fixed: Reset selection to the initial option value rather than a hardcoded string
        auditSelect.selectedIndex = 0; 
    }

    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

function toggleReinstatementIssuesVisibility(selectionValue) {
    const issuesWrapper = document.getElementById("rein_pending_issues_wrapper");
    const detailsInput = document.getElementById("rein_pending_details");
    if (!issuesWrapper || !detailsInput) return;

    // Fixed: Corrected inverse business logic. Show details only when answer is "yes".
    if (selectionValue === "yes") {
        issuesWrapper.style.display = "block";
        detailsInput.required = true;
    } else {
        issuesWrapper.style.display = "none";
        detailsInput.required = false;
        // Fixed: Clear data strings on hide to prevent stale payload tracking
        detailsInput.value = ""; 
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
        // Fixed: Ensure string field data is purged when disabled
        reasonInput.value = ""; 
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
        // Fixed: Clear stale target date strings out of active DOM memory
        dateInput.value = ""; 
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
        if (descInput) {
            descInput.required = false;
            descInput.value = ""; // Fixed: Clear out stale text descriptions
        }
        if (fileInput) {
            fileInput.required = false;
            fileInput.value = ""; // Fixed: Wipes the file string binding safely to prevent accidental security uploads
        }
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
            assistanceSelect.selectedIndex = 0; // Fixed: Standardized safely back to default placeholder index
        }
    } else if (selectionValue === "no") {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (resultsInput) {
            resultsInput.required = false;
            resultsInput.value = ""; // Fixed: Prevent old search details from passing to backend
        }
        if (assistanceWrapper) assistanceWrapper.style.display = "block";
        if (assistanceSelect) assistanceSelect.required = true;
    } else {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (resultsInput) {
            resultsInput.required = false;
            resultsInput.value = ""; // Fixed: Wipes values on absolute resetting paths
        }
        if (assistanceWrapper) assistanceWrapper.style.display = "none";
        if (assistanceSelect) {
            assistanceSelect.required = false;
            assistanceSelect.selectedIndex = 0;
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
            // Fixed: Check and skip optional field markers (like suit/unit IDs) so form loops don't freeze up
            if (field.id !== "tm_attorney_unit" && field.id !== "tm_attorney_extension") {
                field.required = true;
            }
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            // Fixed: Clear all attorney records cleanly on hide to preserve data sanitization
            if (field.tagName === "SELECT") field.selectedIndex = 0;
            else field.value = "";
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
        if (descInput) {
            descInput.required = false;
            descInput.value = ""; // Fixed: Clear old specimen descriptions on hide
        }
        if (fileInput) {
            fileInput.required = false;
            fileInput.value = ""; // Fixed: Wipe out file stream bindings to protect upload integrity
        }
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
            assistanceSelect.selectedIndex = 0; // Fixed: Standardized to index 0 placeholder fallback
        }
    } else if (selectionValue === "no") {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (resultsInput) {
            resultsInput.required = false;
            resultsInput.value = ""; // Fixed: Discard legacy search text details
        }
        if (assistanceWrapper) assistanceWrapper.style.display = "block";
        if (assistanceSelect) assistanceSelect.required = true;
    } else {
        if (detailsWrapper) detailsWrapper.style.display = "none";
        if (resultsInput) {
            resultsInput.required = false;
            resultsInput.value = ""; // Fixed: Clean fallback on absolute reset
        }
        if (assistanceWrapper) assistanceWrapper.style.display = "none";
        if (assistanceSelect) {
            assistanceSelect.required = false;
            assistanceSelect.selectedIndex = 0;
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
            // Fixed: Guard optional layout inputs from breaking field submission logic arrays
            if (field.id !== "sm_attorney_unit" && field.id !== "sm_attorney_extension") {
                field.required = true;
            }
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            // Fixed: Flush form inputs cleanly on hide path routines
            if (field.tagName === "SELECT") field.selectedIndex = 0;
            else field.value = "";
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
        wrapper.querySelectorAll("input, select").forEach(el => {
            // Fixed: Guard optional design elements from being marked required
            if (el.id !== "ar_mailing_unit" && el.id !== "ar_mailing_line2") {
                el.required = true;
            }
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            // Fixed: Flush cached text strings on hide to ensure clean submission states
            if (el.tagName === "SELECT") el.selectedIndex = 0;
            else el.value = "";
        });
    }
}

function toggleAnnualReportStateExplanationVisibility(selectionValue) {
    const wrapper = document.getElementById("ar_state_explanation_wrapper");
    const input = document.getElementById("ar_state_reason");
    if (!wrapper || !input) return;

    // Note: Double check your question phrasing. This triggers if delinquency is "no"
    if (selectionValue === "no") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = ""; // Fixed: Clear out stale text content strings
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
        input.value = ""; // Fixed: Clear text memory leaks on hide
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
        input.value = ""; // Fixed: Wipe inputs safely out of the DOM frame
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
        input.value = ""; // Fixed: Flush text state tracking properties
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
        input.value = ""; // Fixed: Sanitize the output payload
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
        
        // Fixed: Safely strip and flush multi-member data patterns to keep payload clean
        clearMultiMemberValidationRequirements();
    } else if (structureType === "multi-member") {
        singleWrapper.style.display = "none";
        multiWrapper.style.display = "flex";
        
        const soleName = document.getElementById("oa_sole_member_name");
        const soleCont = document.getElementById("oa_sole_member_contribution");
        if (soleName) { soleName.required = false; soleName.value = ""; }
        if (soleCont) { soleCont.required = false; soleCont.value = ""; }
        
        // Fixed: Ensure only appropriate explicit fields receive validation constraints
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
    memberRow.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; margin-top: 8px;";
    
    // Fixed: Converted removal logic to use dynamic contextual node references instead of fragile integer strings
    memberRow.innerHTML = `
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 3; display: flex; justify-content: space-between;">
            Member Equity Node
            <button type="button" onclick="removeOperatingAgreementMemberNode(this)" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem;">
                <i class="fa-solid fa-trash"></i> Remove
            </button>
        </span>
        <div class="wizard-input-group" style="margin: 0;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Full Legal Name <span style="color: #ef4444;">*</span></label>
            <input type="text" name="oa_member_name[]" required placeholder="Full Legal Name" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Capital Contribution ($) <span style="color: #ef4444;">*</span></label>
            <input type="number" name="oa_member_contribution[]" required placeholder="e.g. 500" min="0" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Ownership % <span style="color: #ef4444;">*</span></label>
            <input type="number" name="oa_member_percentage[]" required placeholder="e.g. 25" min="0" max="100" class="wizard-input-field oa-percentage-field" oninput="calculateCumulativeOperatingAgreementEquityTotal()">
        </div>
    `;
    
    container.appendChild(memberRow);
    calculateCumulativeOperatingAgreementEquityTotal();
}

// Fixed: Swapped variable index lookup logic out for relative DOM node traversal tracking
function removeOperatingAgreementMemberNode(buttonElement) {
    if (!buttonElement) return;
    const targetCard = buttonElement.closest(".member-record-card");
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
    
    if (outputSpan) outputSpan.innerText = cumulativeTotal.toFixed(1);
    
    if (balanceAlert) {
        if (Math.abs(cumulativeTotal - 100) < 0.01) { // Safe floating point verification checks
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
        multiWrapper.querySelectorAll("input").forEach(inp => {
            inp.required = false;
            inp.value = ""; // Fixed: Wipe text states clean when hidden to prevent background database corruption
        });
    }
    calculateCumulativeOperatingAgreementEquityTotal();
}

function enforceMultiMemberValidationRequirements() {
    const multiWrapper = document.getElementById("oa_multi_member_wrapper");
    if (multiWrapper) {
        // Fixed: Target explicit operational fields rather than applying blind requirements to every input
        multiWrapper.querySelectorAll(".wizard-input-field").forEach(inp => {
            inp.required = true;
        });
    }
}

// ⚡ INTEGRATION HOOK FOR YOUR SUBMITTER WORKFLOW TO VALIDATE THE LEDGER
function verifyOperatingAgreementLedgerBalanceBeforeSubmit() {
    const structSelect = document.getElementById("oa_membership_structure");
    if (!structSelect) return true;
    
    const structType = structSelect.value;
    if (structType === "multi-member") {
        const finalWeightSum = calculateCumulativeOperatingAgreementEquityTotal();
        if (Math.abs(finalWeightSum - 100) > 0.01) {
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
                field.value = ''; 
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
            // Fixed: Skip optional suite/unit entries to prevent navigation lockouts
            if (el.id !== "bl_mailing_unit" && el.id !== "bl_mailing_line2") el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = ""; // Fixed: Flush values
        });
    }
}

function toggleBusinessLicensesLandlordVisibility(selectionValue) {
    var wrapper = document.getElementById("bl_landlord_wrapper");
    if (!wrapper) return;
    if (selectionValue === "lease") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input").forEach(function(el) {
            if (el.id !== "bl_landlord_phone_ext") el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input").forEach(function(el) {
            el.required = false;
            el.value = ""; // Fixed: Sanitize memory strings
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
        input.value = ""; // Fixed: Flush memory
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
        input.value = ""; // Fixed: Flush memory
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
            if (el.id !== "ein_mailing_unit") el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = ""; // Fixed: Flush values
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
        input.value = ""; // Fixed: Flush memory
    }
}

function toggleEinReasonSpecificationVisibility(parameter) {
    var wrapper = document.getElementById("ein_reason_other_wrapper");
    var input = document.getElementById("ein_reason_other_text");
    if (!wrapper || !input) return;
    
    // Fixed: Safe extraction pattern checks if raw boolean or HTML node context passed
    var isChecked = typeof parameter === "boolean" ? parameter : (parameter && parameter.checked);
    
    if (isChecked) {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = ""; // Fixed: Flush memory
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
        input.value = ""; // Fixed: Flush memory
    }
}

function toggleDissolutionReasonSpecificationVisibility(parameter) {
    var wrapper = document.getElementById("dis_reason_other_wrapper");
    var input = document.getElementById("dis_reason_other_text");
    if (!wrapper || !input) return;
    
    var isChecked = typeof parameter === "boolean" ? parameter : (parameter && parameter.checked);
    
    if (isChecked) {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = ""; // Fixed: Flush memory
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
        input.value = ""; // Fixed: Flush memory
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
        input.value = ""; // Fixed: Flush memory
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
        input.value = ""; // Fixed: Flush memory
    }
}

function toggleGoodStandingPhysicalDeliveryVisibility(selectionValue) {
    var wrapper = document.getElementById("cgs_shipping_address_wrapper");
    if (!wrapper) return;
    if (selectionValue === "physical") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            if (el.id !== "cgs_shipping_unit") el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = ""; // Fixed: Flush values
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
        input.value = ""; // Fixed: Flush memory
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
        input.value = ""; // Fixed: Flush memory
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
        input.value = ""; // Fixed: Flush memory
    }
}

function toggleFederalTaxForeignShareholdersVisibility(selectionValue) {
    var wrapper = document.getElementById("fed_tax_foreign_details_wrapper");
    var input = document.getElementById("fed_tax_foreign_countries_list");
    if (!wrapper || !input) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = ""; // Fixed: Flush memory
    }
}

// ========================================================
// 🔄 STATE INCOME TAX APPLICATION INTERACTION LAYER
// ========================================================

function toggleStateTaxNexusVisibility(selectionValue) {
    var wrapper = document.getElementById("state_tax_nexus_wrapper");
    if (!wrapper) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            if (el.id !== "state_tax_nexus_unit" && el.id !== "state_tax_nexus_notes") el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = ""; // Fixed: Flush values
        });
    }
}

// ========================================================
// 🔄 FRANCHISE TAX FILING INTERACTION LAYER
// ========================================================

function toggleFranchiseTaxGrossReceiptsVisibility(selectionValue) {
    var wrapper = document.getElementById("franchise_receipts_wrapper");
    var input = document.getElementById("franchise_receipts_amount");
    if (!wrapper || !input) return;

    if (selectionValue === "specific-threshold" || selectionValue === "yes") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = ""; // Fixed: Flush memory
    }
}

// ========================================================
// 🔄 SALES TAX REGISTRATION INTERACTION LAYER
// ========================================================

function toggleSalesTaxPhysicalPresenceVisibility(selectionValue) {
    var wrapper = document.getElementById("sales_tax_location_wrapper");
    if (!wrapper) return;

    if (selectionValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            if (el.id !== "sales_tax_unit") el.required = true;
        });
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(function(el) {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = ""; // Fixed: Flush values
        });
    }
}

function toggleSalesTaxEcomPlatformVisibility(parameter) {
    var wrapper = document.getElementById("sales_tax_ecom_wrapper");
    var input = document.getElementById("sales_tax_platform_name");
    if (!wrapper || !input) return;

    var isChecked = typeof parameter === "boolean" ? parameter : (parameter && parameter.checked);

    if (isChecked) {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = ""; // Fixed: Flush memory
    }
}

// ========================================================
// 🔄 PAYROLL TAX CONFIGURATOR INTERACTION LAYER
// ========================================================

function togglePayrollTaxFirstHireDateVisibility(selectionValue) {
    var wrapper = document.getElementById("payroll_date_wrapper");
    var input = document.getElementById("payroll_hire_date");
    if (!wrapper || !input) return;

    if (selectionValue === "yes" || selectionValue === "already-hired") {
        wrapper.style.display = "block";
        input.required = true;
    } else {
        wrapper.style.display = "none";
        input.required = false;
        input.value = ""; // Fixed: Flush memory
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
    vehicleCard.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; box-sizing: border-box; display: grid; grid-template-columns: 2fr 2fr 1fr; gap: 16px; margin-top: 8px;";
    
    // Fixed: Converted removal logic to use dynamic contextual node references instead of fragile integer strings
    // Fixed: Standardized input names as array bindings [] so your backend parses collections smoothly
    vehicleCard.innerHTML = `
        <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; grid-column: span 3; display: flex; justify-content: space-between;">
            Heavy Vehicle Asset Unit
            <button type="button" onclick="removeHeavyUseTaxVehicleRow(this)" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: 700; font-size: 0.75rem;">
                <i class="fa-solid fa-trash"></i> Remove
            </button>
        </span>
        <div class="wizard-input-group" style="margin: 0;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Vehicle Identification Number (VIN) <span style="color: #ef4444;">*</span></label>
            <input type="text" name="hut_vin[]" required placeholder="17-Digit Alpha-Numeric VIN" maxlength="17" pattern="^[A-HJ-NPR-Z0-9]{17}$" style="font-family: monospace; text-transform: uppercase; width: 100%; box-sizing: border-box; padding: 8px;" class="wizard-input-field">
        </div>
        <div class="wizard-input-group" style="margin: 0;">
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Taxable Gross Weight Class <span style="color: #ef4444;">*</span></label>
            <select name="hut_weight_category[]" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box; padding: 8px;">
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
            <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); text-transform: uppercase;">Logging Vehicle? <span style="color: #ef4444;">*</span></label>
            <select name="hut_is_logging[]" required class="wizard-input-field" style="font-weight: 600; width: 100%; box-sizing: border-box; padding: 8px;">
                <option value="no" selected>No</option>
                <option value="yes">Yes</option>
            </select>
        </div>
    `;
    
    container.appendChild(vehicleCard);
}

// Fixed: Swapped variable index lookup logic out for relative DOM node traversal tracking
function removeHeavyUseTaxVehicleRow(buttonElement) {
    if (!buttonElement) return;
    const targetCard = buttonElement.closest(".member-record-card");
    if (targetCard) {
        targetCard.remove();
    }
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
            if (parentCountryInput.tagName === "SELECT") parentCountryInput.selectedIndex = 0; else parentCountryInput.value = "";
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
        if (countInput) {
            countInput.required = true;
            countInput.value = "1"; // Set back to baseline unit value when revealed
        }
    } else {
        wrapper.style.display = "none";
        if (countInput) {
            countInput.required = false;
            countInput.value = "0"; // Fixed: Set clean fallback total back to zero when hidden
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

// ========================================================
// 🔄 FREIGHT BROKER INSURANCE CONFIGURATOR INTERACTION LAYER
// ========================================================
function toggleBrokerInsuranceBankruptcyDetailsVisibility(selectionValue) {
    var wrapper = document.getElementById("bins_bankruptcy_details_wrapper");
    var input = document.getElementById("bins_bankruptcy_details");
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

function toggleBrokerInsuranceFelonyDetailsVisibility(selectionValue) {
    var wrapper = document.getElementById("bins_felony_details_wrapper");
    var input = document.getElementById("bins_felony_details");
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
// 🔄 NEW ENTRANT SAFETY AUDIT CONFIGURATOR INTERACTION LAYER
// ========================================================
function toggleNewEntrantAuditLetterDetails(selectionValue) {
    var wrapper = document.getElementById("nea_letter_deadline_wrapper");
    var dateInput = document.getElementById("nea_audit_deadline");
    if (!wrapper || !dateInput) return;
    
    if (selectionValue === "letter-received") {
        wrapper.style.display = "block";
        dateInput.required = true;
    } else {
        wrapper.style.display = "none";
        dateInput.required = false;
        dateInput.value = "";
    }
}

function triggerNewEntrantAuditComplianceChecklistPopup() {
    var modal = document.getElementById("nea_checklist_modal_backdrop");
    if (modal) modal.style.display = "flex";
}

function closeNewEntrantAuditComplianceChecklistPopup() {
    var modal = document.getElementById("nea_checklist_modal_backdrop");
    if (modal) modal.style.display = "none";
}

function executeNewEntrantAuditLiveFulfillmentSync() {
    const servicesList = [
        { id: "nea_service_dqf", price: 79.00, label: "Audit Prep: DQF Assembly" },
        { id: "nea_service_consortium", price: 149.00, label: "Audit Prep: DOT Consortium" },
        { id: "nea_service_hos", price: 195.00, label: "Audit Prep: HOS Log Audit" },
        { id: "nea_service_maintenance" , price: 85.00, label: "Audit Prep: Maintenance Record" },
        { id: "nea_service_consultation", price: 250.00, label: "Audit Prep: 1-on-1 Strategist Session" }
    ];
    
    let dynamicAddonTotal = 0;
    let selectedAddonItemsHtml = "";
    
    servicesList.forEach(function(service) {
        var checkboxNode = document.getElementById(service.id);
        if (checkboxNode && checkboxNode.checked) {
            dynamicAddonTotal += service.price;
            selectedAddonItemsHtml += `
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; padding: 4px 0; border-bottom: 1px dashed #e2e8f0; color: var(--slate);">
                    <span><i class="fa-solid fa-square-check" style="color: var(--primary);"></i> ${service.label}</span>
                    <span style="font-family: monospace; font-weight: 600;">$${service.price.toFixed(2)}</span>
                </div>
            `;
        }
    });
    
    window.lastCalculatedNewEntrantAddonTotal = dynamicAddonTotal;
    window.lastCalculatedNewEntrantAddonHtml = selectedAddonItemsHtml;
    console.log("[Audit Calculator Sync] Running layout balance adjustments. Addon Delta Total: $" + dynamicAddonTotal);
    
    if (typeof updateWizardFinalTotalAmountMatrix === "function") {
        updateWizardFinalTotalAmountMatrix();
    }
}

// Fixed: Explicit listener binder maps runtime click events to your live calculations loop
document.addEventListener("DOMContentLoaded", function() {
    const serviceIds = ["nea_service_dqf", "nea_service_consortium", "nea_service_hos", "nea_service_maintenance", "nea_service_consultation"];
serviceIds.forEach(function(id) {const checkbox = document.getElementById(id);if (checkbox) {checkbox.addEventListener("change", executeNewEntrantAuditLiveFulfillmentSync);}});});

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
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";

    // Fixed: Converted removal logic to use localized node context references (this)
    // Fixed: Transformed text IDs into array schema indicators name="sllc_member_name[]"
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Initial Member Records</span>
            <button type="button" onclick="removeSeriesLlcMemberNode(this)" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
                <input type="text" name="sllc_member_name[]" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box; padding:8px;">
            </div>
            <div>
                <input type="text" name="sllc_member_address[]" required placeholder="Full Residential/Office Address" class="wizard-input-field" style="width:100%; box-sizing:border-box; padding:8px;">
            </div>
        </div>
    `;
    container.appendChild(div);
}

// Fixed: Swapped fragile integer matchers out for robust contextual element containment removals
function removeSeriesLlcMemberNode(buttonElement) {
    if (!buttonElement) return;
    const cardToRemove = buttonElement.closest(".member-record-card");
    if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesCellsWrapperVisibility(selectedValue) {
    const wrapper = document.getElementById("sllc_cells_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "yes") {
        wrapper.style.display = "flex";
    } else {
        wrapper.style.display = "none";
        // Fixed: Prevent hidden data leaks by sanitizing sub-elements inside on hide path loops
        wrapper.querySelectorAll("input").forEach(el => { el.value = ""; el.required = false; });
        const subContainer = document.getElementById("sllc_cells_container");
        if (subContainer) subContainer.innerHTML = ""; // Wipe appended cell items safely
    }
}

let activeSubSeriesCellCounterIndex = 1;

function appendNewSubSeriesCellNode() {
    activeSubSeriesCellCounterIndex++;
    const container = document.getElementById("sllc_cells_container");
    if (!container) return;

    const div = document.createElement("div");
    div.className = "member-record-card";
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";

    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Initial Sub-Series Cell</span>
            <button type="button" onclick="removeSubSeriesCellNode(this)" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
                <input type="text" name="sllc_cell_name[]" required placeholder="Series Cell Name" class="wizard-input-field" style="width:100%; box-sizing:border-box; padding:8px;">
            </div>
            <div>
                <input type="text" name="sllc_cell_desc[]" required placeholder="Asset / Operational Purpose Summary" class="wizard-input-field" style="width:100%; box-sizing:border-box; padding:8px;">
            </div>
        </div>
    `;
    container.appendChild(div);
}

function removeSubSeriesCellNode(buttonElement) {
    if (!buttonElement) return;
    const cardToRemove = buttonElement.closest(".member-record-card");
    if (cardToRemove) cardToRemove.remove();
}

function toggleSeriesEinWorkflow(selectedValue) {
    const wrapper = document.getElementById("sllc_ein_reason_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        // Fixed: Flush parameters to guarantee clean pipeline routing
        wrapper.querySelectorAll("input, select").forEach(el => { el.required = false; el.value = ""; });
    }
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedEinProcurementServiceActive = (selectedValue === "yes");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleSeriesLicenseWorkflow(selectedValue) {
    const warningNote = document.getElementById("sllc_custom_license_wrapper");
    if (warningNote) warningNote.style.display = (selectedValue === "yes") ? "flex" : "none";
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedSeriesLicenseAuditActive = (selectedValue === "no");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleSeriesLlcDurationField(selectedValue) {
    const wrapper = document.getElementById("sllc_duration_term_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "project") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input").forEach(el => { el.required = false; el.value = ""; }); // Fixed: Flush values
    }
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
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 14px; border-radius: 8px; box-sizing: border-box; margin-top: 10px; position: relative;";

    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-weight: 800; font-size: 0.75rem; color: var(--primary); text-transform: uppercase;">Board Member Records</span>
            <button type="button" onclick="removeNonprofitBoardMemberNode(this)" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
                <input type="text" name="np_board_name[]" required placeholder="Full Legal Name" class="wizard-input-field" style="width:100%; box-sizing:border-box; padding:8px;">
            </div>
            <div>
                <input type="text" name="np_board_role[]" required placeholder="Position (e.g., Trustee / Director)" class="wizard-input-field" style="width:100%; box-sizing:border-box; padding:8px;">
            </div>
            <div style="grid-column: span 2;">
                <input type="text" name="np_board_contact[]" required placeholder="Contact Details (Phone / Email)" class="wizard-input-field" style="width:100%; box-sizing:border-box; padding:8px;">
            </div>
        </div>
    `;
    container.appendChild(div);
}

function removeNonprofitBoardMemberNode(buttonElement) {
    if (!buttonElement) return;
    const cardToRemove = buttonElement.closest(".member-record-card");
    if (cardToRemove) cardToRemove.remove();
}

function toggleNonprofitEinReasonField(selectedValue) {
    const wrapper = document.getElementById("np_ein_reason_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(el => { el.required = false; el.value = ""; }); // Fixed: Flush values
    }
    
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
// 🔘 DBA FORM INTERACTIVE ROUTING EVENT CONTROLLERS
// ========================================================
function toggleDbaPermissionWorkflow(selectedValue) {
    const wrapper = document.getElementById("dba_permission_matrix_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        // Fixed: Safely reset values and disable requirements instead of hardcoding business inverses
        wrapper.querySelectorAll("input, select, textarea").forEach(el => {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
        });
        
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
    if (!wrapper) return;
    
    if (selectedValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        // Fixed: Enforce validation clearance and sanitize hidden variables
        wrapper.querySelectorAll("input, select, textarea").forEach(el => {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
        });
    }
}

function toggleDbaLicenseWorkflow(selectedValue) {
    const customInputWrapper = document.getElementById("dba_custom_license_wrapper");
    if (customInputWrapper) {
        if (selectedValue === "yes") {
            customInputWrapper.style.display = "flex";
            customInputWrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
        } else {
            customInputWrapper.style.display = "none";
            customInputWrapper.querySelectorAll("input, select, textarea").forEach(el => {
                el.required = false;
                if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
            });
        }
    }
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedDbaLicenseAuditServiceActive = (selectedValue === "no");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleDbaDurationField(selectedValue) {
    const wrapper = document.getElementById("dba_duration_term_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "temporary") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        // Fixed: Strip validation bounds and flush parameters
        wrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

// ========================================================
// 🔘 SOLE PROPRIETORSHIP FORM INTERACTIVE INTERACTION CONTROLLERS
// ========================================================
function toggleSolePropDbaField(selectedValue) {
    const wrapper = document.getElementById("sp_dba_name_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        // Fixed: Flush trailing data configurations cleanly on toggle
        wrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

function toggleSolePropEinReasonField(selectedValue) {
    const wrapper = document.getElementById("sp_ein_reason_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "yes") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select, textarea").forEach(el => {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
        });
    }
}

function toggleSolePropDurationField(selectedValue) {
    const wrapper = document.getElementById("sp_duration_term_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "temporary") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

function toggleSolePropLicenseWorkflow(selectedValue) {
    const customInputWrapper = document.getElementById("sp_custom_license_wrapper");
    if (customInputWrapper) {
        if (selectedValue === "yes") {
            customInputWrapper.style.display = "flex";
            customInputWrapper.querySelectorAll("input, select, textarea").forEach(el => el.required = true);
        } else {
            customInputWrapper.style.display = "none";
            customInputWrapper.querySelectorAll("input, select, textarea").forEach(el => {
                el.required = false;
                if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
            });
        }
    }
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedSolePropLicenseAuditServiceActive = (selectedValue === "no");
        updateDynamicPricingMatrixVanilla();
    }
}

// ============================================================================
// 🗺️ MODULE: PRODUCTION GOOGLE PLACES AUTOMATIC ADDRESS VALIDATION CONTROL HUB
// ============================================================================

/**
 * Attaches Google Places Autocomplete to a DOM node and maps parameters accurately.
 * Forcefully dispatches event bubbles to ensure state caches update reliably.
 * @param {HTMLInputElement} inputNodeElement - The target autocomplete entry text field box.
 * @param {string} dataElementPrefix - Structural prefix string or relative array name selector.
 */
function attachGooglePlacesAutocompleteToNode(inputNodeElement, dataElementPrefix) {
    if (!inputNodeElement || inputNodeElement.hasAttribute('data-autocomplete-bound-active')) return;

    if (typeof google === "undefined" || !google.maps || !google.maps.places) {
        console.warn("Google Maps JavaScript API Places library loading framework is not yet active on this system window node context.");
        return;
    }

    // Set configuration parameters to filter only structural street address parameters inside the US region
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
                extractedStateCode = itemComponent.short_name; // Returns standard 2-digit ISO postal code (e.g. TX, CA)
            } else if (typesArray.includes("postal_code")) {
                postalRoutingIndexNumber = itemComponent.long_name;
            }
        });

        // Weld street number string attributes to route string indicators cleanly
        const balancedStreetAddressLine = `${addressStreetNumber} ${addressRouteStreetName}`.trim();

        // Helper tracker closure to locate elements defensively by ID, name, or relative structural dynamic array nodes
        const locateTargetAddressField = (suffixToken) => {
            // 1. Try mapping by exact structural ID string combinations
            let element = document.getElementById(`${dataElementPrefix}_${suffixToken}`);
            if (element) return element;

            // 2. Try mapping by standard production data array name attributes (e.g., name="member_city[]")
            element = document.querySelector(`[name="${dataElementPrefix}_${suffixToken}[]"]`) || 
                      document.querySelector(`[name="${dataElementPrefix}_${suffixToken}"]`);
            if (element) return element;

            // 3. Fallback: If mapping context matches a dynamic card node, look within its immediate card container parent
            const functionalCardWrapper = inputNodeElement.closest(".member-record-card");
            if (functionalCardWrapper) {
                return functionalCardWrapper.querySelector(`[name*="${suffixToken}"]`) || 
                       functionalCardWrapper.querySelector(`input[type="text"]:nth-of-type(${suffixToken === 'city' ? 3 : suffixToken === 'state' ? 4 : 5})`);
            }
            return null;
        };

        const streetField = locateTargetAddressField('street') || inputNodeElement;
        const cityField = locateTargetAddressField('city');
        const stateField = locateTargetAddressField('state');
        const zipField = locateTargetAddressField('zip');

        /**
         * Safely writes text entries into nodes and forcefully dispatches event bubbles.
         * This completely prevents form validation freezes and updates localStorage cache.
         */
        const writeAndSyncStateToken = (fieldNode, stringPayloadValue) => {
            if (!fieldNode) return;
            fieldNode.value = stringPayloadValue;
            
            // Fixed: Force native input and change events to fire for background cache synchronization
            fieldNode.dispatchEvent(new Event('input', { bubbles: true }));
            fieldNode.dispatchEvent(new Event('change', { bubbles: true }));
            
            // Clear out old red border error highlights if present from previous validation cycles
            fieldNode.style.borderColor = "var(--border, #cbd5e1)";
            const trailingErrorMarker = fieldNode.parentNode ? fieldNode.parentNode.querySelector('.input-error-marker') : null;
            if (trailingErrorMarker) trailingErrorMarker.remove();
        };

        writeAndSyncStateToken(streetField, balancedStreetAddressLine);
        writeAndSyncStateToken(cityField, calculatedLocalityCityName);
        writeAndSyncStateToken(stateField, extractedStateCode);
        writeAndSyncStateToken(zipField, postalRoutingIndexNumber);

        console.log(`[Google API] Address autocomplete parsed and synchronized for target parameter scope: "${dataElementPrefix}"`);

        // Force a visual updates pass inside the invoice checkout cards engine
        if (typeof updateDynamicPricingMatrixVanilla === "function") {
            updateDynamicPricingMatrixVanilla();
        }
    });
}


// ========================================================
// 🔘 C-CORP & S-CORP INTERACTIVE ROUTING CONTROLLERS
// ========================================================

// Fixed: Swapped fragile string lookups out for robust case-insensitive RegEx boundary token matchers
// Fixed: Transformed into a gatekeeping validation routine that returns a boolean status flag
function validateCorpNameSuffix(inputField) {
    if (!inputField) return true;
    const rawVal = inputField.value.trim();
    if (rawVal === "") return true;

    // Matches Approved Suffix Patterns with or without periods at the absolute end of the string boundary ($)
    const suffixRegex = /\b(inc|incorporated|corp|corporation|co|company)\.?$/i;

    if (!suffixRegex.test(rawVal)) {
        alert("Corporate Registration Rule Warning: Your chosen name does not contain an approved corporate suffix token. Please append 'Inc.', 'Incorporated', or 'Corporation' to clear parameter validations.");
        inputField.style.borderColor = "#ef4444";
        return false; // Blocks form advance pipelines downstream
    } else {
        inputField.style.borderColor = "var(--border)";
        return true;
    }
}

let activeCorpShareholderCounterIndex = 1;

function appendNewCorporateShareholderNode() {
    activeCorpShareholderCounterIndex++;
    const container = document.getElementById("corp_shareholders_container");
    if (!container) return;

    const div = document.createElement("div");
    div.className = "member-record-card";
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";

    // Fixed: Converted removal logic to use dynamic contextual node references (this) instead of fragile integers
    // Fixed: Standardized input names as array bindings [] so your backend parses collections smoothly
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Shareholder Records</span>
            <button type="button" onclick="removeCorporateShareholderNode(this)" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
                <input type="text" name="shareholder_name[]" required placeholder="Full Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Street Address <span style="color: #ef4444;">*</span></label>
                <input type="text" name="shareholder_street[]" required placeholder="123 Corporate Pkwy" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                <input type="text" name="shareholder_city[]" required placeholder="Austin" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <input type="text" name="shareholder_state[]" required placeholder="TX" maxlength="2" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
                </div>
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Zip <span style="color: #ef4444;">*</span></label>
                    <input type="text" name="shareholder_zip[]" required placeholder="78701" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
                </div>
            </div>
        </div>
    `;
    container.appendChild(div);
}

// Fixed: Swapped variable index lookup logic out for relative DOM node traversal tracking
function removeCorporateShareholderNode(buttonElement) {
    if (!buttonElement) return;
    const cardToRemove = buttonElement.closest(".member-record-card");
    if (cardToRemove) cardToRemove.remove();
}

function toggleCorpDirectorFieldsMatrix(selectedValue) {
    const wrapper = document.getElementById("corp_director_names_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "manager-managed") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        // Fixed: Prevent hidden data leakage into backend submission streams
        wrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
        });
    }
}

function toggleCorpDirectorFieldsMatrix(selectedValue) {
    const wrapper = document.getElementById("corp_director_names_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "manager-managed") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        wrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
        });
    }
}

function toggleCorpDurationDateVisibility(selectedValue) {
    const dateWrapper = document.getElementById("corp_duration_date_wrapper");
    if (!dateWrapper) return;
    
    if (selectedValue === "specified") {
        dateWrapper.style.display = "flex";
        dateWrapper.querySelectorAll("input").forEach(el => el.required = true);
    } else {
        dateWrapper.style.display = "none";
        dateWrapper.querySelectorAll("input").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

function toggleCorpEinConditionalWorkflow(selectedValue) {
    const manualWrapper = document.getElementById("corp_manual_ein_wrapper");
    if (!manualWrapper) return;
    
    if (selectedValue === "yes") {
        manualWrapper.style.display = "flex";
        manualWrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        manualWrapper.style.display = "none";
        manualWrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
        });
    }

    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleScorpElectionWorkflow(selectedValue) {
    const serviceWrapper = document.getElementById("corp_scorp_service_wrapper");
    const warningNote = document.getElementById("scac-decline-warning-note");
    if (!serviceWrapper) return;
    
    if (selectedValue === "yes") {
        serviceWrapper.style.display = "flex";
        serviceWrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        serviceWrapper.style.display = "none";
        serviceWrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
        });
        
        // Clear choice if user reverts to standard C-Corp choice
        const selectProcure = document.getElementById("corp_scorp_procure");
        if (selectProcure) selectProcure.selectedIndex = 0;
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

// Fixed: Isolated exact structural key boundaries to prevent overlap matching collisions
function initializeFormDisplayLayoutSync() {
    const llcFormWrapper = document.getElementById("form-fields-llc-registration");
    const corpFormWrapper = document.getElementById("form-fields-corporate-formation");
    if (!llcFormWrapper || !corpFormWrapper) return;
    
    const safeRouteKey = typeof routeActiveServiceKey !== "undefined" ? routeActiveServiceKey : "";

const exactCorporateKeys = ["c-corporation", "s-corporation", "corporate-formation", "incorporation"];const treatsAsCorporate = exactCorporateKeys.includes(safeRouteKey) || safeRouteKey.startsWith("corp-");if (treatsAsCorporate) {llcFormWrapper.style.display = "none";corpFormWrapper.style.display = "grid";} else {llcFormWrapper.style.display = "grid";corpFormWrapper.style.display = "none";}}

// ========================================================
// 🔘 LLC & CORPORATE LIFECYCLE CONTROLLERS
// ========================================================

// 2. COMPANY Lifespan HORIZON CALENDAR ACTION
function toggleLlcDurationDateVisibility(selectedValue) {
    const calendarWrapper = document.getElementById("llc_duration_date_wrapper");
    if (!calendarWrapper) return;
    
    if (selectedValue === "specified") {
        calendarWrapper.style.display = "flex";
        calendarWrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        calendarWrapper.style.display = "none";
        // Fixed: Strip validation rules and flush hidden memory clean
        calendarWrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

// 3. EMPLOYER IDENTIFICATION NUMBER (EIN) CONFIGURATOR ACTION
function toggleEinConditionalWorkflow(selectedValue) {
    const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
    if (!manualEinWrapper) return;
    
    if (selectedValue === "yes") {
        manualEinWrapper.style.display = "flex";
        manualEinWrapper.querySelectorAll("input").forEach(el => el.required = true);
    } else {
        manualEinWrapper.style.display = "none";
        // Fixed: Ensure hidden inputs do not block step validation layers
        manualEinWrapper.querySelectorAll("input").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }

    // Links right to your main pricing matrix to instantly add $79 to checkout
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
        updateDynamicPricingMatrixVanilla();
    }
}

// 💾 STRATEGIC SAVE & EXIT PROGRESS HANDLER
function executeSaveAndExitWorkflow() {
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }
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

    // Fixed: Calibrate internal canvas scale dimensions to match layout dimensions, eliminating High-DPI drift
    const canvasRect = padCanvasElement.getBoundingClientRect();
    padCanvasElement.width = canvasRect.width;
    padCanvasElement.height = canvasRect.height;

    rasterRenderingContext2D.strokeStyle = "#0a1f44";
    rasterRenderingContext2D.lineWidth = 3;
    rasterRenderingContext2D.lineCap = "round";
    rasterRenderingContext2D.lineJoin = "round";

    function calculateNormalizedCoordinates(inputClientX, inputClientY) {
        const canvasBoundaryBox = padCanvasElement.getBoundingClientRect();
        return {
            x: inputClientX - canvasBoundaryBox.left,
            y: inputClientY - canvasBoundaryBox.top
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
        e.preventDefault(); // Prevents layout bounce scroll on touch devices
        
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

// ============================================================================
// 🧠 MODULE: HARDENED LLC EXTRA MEMBER NODES & LIFESPAN LIFE-CYCLE
// ============================================================================

let activeLlcMemberCounterIndex = 1;

/**
 * Appends a new LLC Member profile card dataset cluster to the layout document tree.
 * Restores proper semantic structure, required attributes, and array bindings.
 */
function appendNewLlcMemberRecordFieldNode() {
    activeLlcMemberCounterIndex++;
    const container = document.getElementById("llc_members_container");
    if (!container) return;

    const div = document.createElement("div");
    div.className = "member-record-card";
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";

    // Fixed: Converted removal logic to use dynamic contextual node tree pointers (this)
    // Fixed: Standardized text inputs into structured array names (member_name[]) to allow iteration
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">LLC Member Records</span>
            <button type="button" onclick="removeLlcMemberRecordFieldNode(this)" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
                <input type="text" name="member_name[]" required placeholder="Full Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Street Address <span style="color: #ef4444;">*</span></label>
                <input type="text" name="member_street[]" required placeholder="123 Main St" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                <input type="text" name="member_city[]" required placeholder="Austin" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <input type="text" name="member_state[]" required placeholder="TX" maxlength="2" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px; text-transform: uppercase;">
                </div>
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Zip <span style="color: #ef4444;">*</span></label>
                    <input type="text" name="member_zip[]" required placeholder="78701" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
                </div>
            </div>
        </div>
    `;
    container.appendChild(div);
}

/**
 * Removes a selected LLC member profile node relative to its button click context.
 * @param {HTMLButtonElement} buttonElement - The target trigger removal button node.
 */
function removeLlcMemberRecordFieldNode(buttonElement) {
    if (!buttonElement) return;
    const cardToRemove = buttonElement.closest(".member-record-card");
    if (cardToRemove) {
        cardToRemove.remove();
        console.log("[f4u Engine] LLC Member profile card removed from active DOM structure layout.");
    }
}

// ============================================================================
// 🧠 MODULE: HARDENED CORPORATE SUFFIX COMPLIANCE PATTERNS
// ============================================================================

/**
 * Verifies that the corporate name string explicitly finishes with legal indicators.
 * Automatically clears error parameters and syncs state upon resolution.
 * @param {HTMLInputElement} inputField - The target entity name input node.
 */
function validateCorpNameSuffix(inputField) {
    if (!inputField) return;
    const rawVal = inputField.value.trim();
    if (rawVal === "") return;
    
    const lowerVal = rawVal.toLowerCase();

    // Verifies that the name string explicitly finishes with legal corporate indicators
    if (!lowerVal.endsWith("inc.") && 
        !lowerVal.endsWith("inc") && 
        !lowerVal.endsWith("incorporated") && 
        !lowerVal.endsWith("corporation")) {
        
        alert("Corporate Registration Rule Warning: Your chosen name does not contain an approved corporate suffix token. Please append 'Inc.', 'Incorporated', or 'Corporation' to clear parameter validations.");
        inputField.style.borderColor = "#ef4444";
        inputField.focus(); // Pull user focus directly back to the correction point
    } else {
        // Fixed: Reset border layout variables dynamically to eliminate visual error locks
        inputField.style.borderColor = "var(--border, #cbd5e1)";
        
        // Fixed: Dispatch input updates so downstream patch engines clear required barriers
        inputField.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

// ============================================================================
// 🧠 MODULE: HARDENED C-CORP & S-CORP INTERACTIVE INTERFACE CONTROLLERS
// ============================================================================

let activeCorpShareholderCounterIndex = 1;

/**
 * Appends a new Corporate Shareholder card dataset cluster to the layout document tree.
 * Correctly assigns standard array name parameters to prevent submission data dropouts.
 */
function appendNewCorporateShareholderNode() {
    activeCorpShareholderCounterIndex++;
    const container = document.getElementById("corp_shareholders_container");
    if (!container) return;

    const div = document.createElement("div");
    div.className = "member-record-card";
    div.style.cssText = "background: #ffffff; border: 1px solid var(--border); padding: 16px; border-radius: 8px; width: 100%; box-sizing: border-box; margin-top: 10px; position: relative;";

    // Fixed: Converted removal links to use contextual node tracking pointers (this)
    // Fixed: Added structured array name properties to ensure payload capture loops find every node entry
    div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase;">Shareholder Records</span>
            <button type="button" onclick="removeCorporateShareholderNode(this)" style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); color: #ef4444; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Full Legal Name <span style="color: #ef4444;">*</span></label>
                <input type="text" name="shareholder_name[]" required placeholder="Full Legal Name" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group" style="grid-column: span 2;">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Street Address <span style="color: #ef4444;">*</span></label>
                <input type="text" name="shareholder_street[]" required placeholder="123 Corporate Pkwy" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group">
                <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">City <span style="color: #ef4444;">*</span></label>
                <input type="text" name="shareholder_city[]" required placeholder="Austin" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
            </div>
            <div class="wizard-input-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">State <span style="color: #ef4444;">*</span></label>
                    <input type="text" name="shareholder_state[]" required placeholder="TX" maxlength="2" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px; text-transform: uppercase;">
                </div>
                <div>
                    <label style="font-size: 0.75rem; font-weight: 700; color: var(--slate); display: block; margin-bottom: 4px;">Zip <span style="color: #ef4444;">*</span></label>
                    <input type="text" name="shareholder_zip[]" required placeholder="78701" class="wizard-input-field" style="width: 100%; box-sizing: border-box; padding: 8px;">
                </div>
            </div>
        </div>
    `;
    container.appendChild(div);
}

/**
 * Removes a selected corporate shareholder profile node relative to its execution context.
 * @param {HTMLButtonElement} buttonElement - Target button node pointer.
 */
function removeCorporateShareholderNode(buttonElement) {
    if (!buttonElement) return;
    const cardToRemove = buttonElement.closest(".member-record-card");
    if (cardToRemove) {
        cardToRemove.remove();
        console.log("[f4u Engine] Shareholder data block removed safely from active DOM trees.");
    }
}

function toggleCorpDirectorFieldsMatrix(selectedValue) {
    const wrapper = document.getElementById("corp_director_names_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "manager-managed") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        // Fixed: Strip required attributes and clear fields on hide to bypass navigation blocks
        wrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

function toggleCorpDurationDateVisibility(selectedValue) {
    const dateWrapper = document.getElementById("corp_duration_date_wrapper");
    if (!dateWrapper) return;
    
    if (selectedValue === "specified") {
        dateWrapper.style.display = "flex";
        dateWrapper.querySelectorAll("input").forEach(el => el.required = true);
    } else {
        dateWrapper.style.display = "none";
        dateWrapper.querySelectorAll("input").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

function toggleCorpEinConditionalWorkflow(selectedValue) {
    const manualWrapper = document.getElementById("corp_manual_ein_wrapper");
    if (!manualWrapper) return;
    
    if (selectedValue === "yes") {
        manualWrapper.style.display = "flex";
        manualWrapper.querySelectorAll("input").forEach(el => el.required = true);
    } else {
        manualWrapper.style.display = "none";
        manualWrapper.querySelectorAll("input").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
        updateDynamicPricingMatrixVanilla();
    }
}

function toggleScorpElectionWorkflow(selectedValue) {
    const serviceWrapper = document.getElementById("corp_scorp_service_wrapper");
    const warningNote = document.getElementById("scac-decline-warning-note");
    if (!serviceWrapper) return;

    if (selectedValue === "yes") {
        serviceWrapper.style.display = "flex";
        serviceWrapper.querySelectorAll("input, select").forEach(el => el.required = true);
        if (warningNote) warningNote.style.display = "none";
    } else {
        serviceWrapper.style.display = "none";
        serviceWrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = "";
        });
        
        if (selectedValue === "no") {
            if (warningNote) warningNote.style.display = "block";
            window.customSelectedScorpElectionServiceActive = false;
            if (typeof updateDynamicPricingMatrixVanilla === "function") updateDynamicPricingMatrixVanilla();
        }
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

// 3. Automated Form View Segment Router (PRODUCTION OPTIMIZATION CHECK)
function initializeFormDisplayLayoutSync() {
    const llcFormWrapper = document.getElementById("form-fields-llc-registration");
    const corpFormWrapper = document.getElementById("form-fields-corporate-formation");
    const currentServiceKey = String(window.routeActiveServiceKey || "").toLowerCase().trim();
    
    if (llcFormWrapper && corpFormWrapper) {
        if (currentServiceKey === "hazmat-registration" || 
            currentServiceKey.includes("trademark") || 
            currentServiceKey.includes("servicemark") || 
            currentServiceKey.includes("corporate") || 
            currentServiceKey.includes("corp")) {
            
            llcFormWrapper.style.display = "none";
            corpFormWrapper.style.display = "grid";
        } else {
            llcFormWrapper.style.display = "grid";
            corpFormWrapper.style.display = "none";
        }
    }
}

// ============================================================================
// 🎨 MODULE: TIMELINE SIDEBAR GRAPHICS & ACTIVE VIEW MATRIX SYNC
// ============================================================================

/**
 * Synchronizes visible wizard panels, active progress bars, and timeline node tracking icons.
 */
function renderActiveWizardStepUiLayout() {
    const activeStep = window.currentWizardActiveStep || 1;
    const maxSteps = window.totalWizardExpectedSteps || 5;

    // 1. Update the visibility states of wizard steps layout components
    document.querySelectorAll(".wizard-panel").forEach((panel, sequence) => {
        if ((sequence + 1) === activeStep) {
            panel.classList.add("active");
            panel.style.setProperty("display", "block", "important");
        } else {
            panel.classList.remove("active");
            panel.style.setProperty("display", "none", "important");
        }
    });

    // 2. Synchronize chronological timeline node milestone tracking icons
    document.querySelectorAll(".step-node").forEach(node => {
        const structuralStepIndex = parseInt(node.getAttribute("data-step"), 10);
        if (isNaN(structuralStepIndex)) return;

        if (structuralStepIndex < activeStep) {
            node.className = "step-node completed";
        } else if (structuralStepIndex === activeStep) {
            node.className = "step-node active";
        } else {
            node.className = "step-node";
        }
    });

    // 3. Scale and fill horizontal tracking progress bar widths cleanly
    const horizontalProgressFill = document.getElementById("timeline-progress-fill-node");
    if (horizontalProgressFill) {
        const structuralDivisor = maxSteps - 1;
        
        // Fixed: Added defensive safety limit check to completely avoid division by zero crashes
        const percentageProgressWidth = structuralDivisor > 0 
            ? ((activeStep - 1) / structuralDivisor) * 100 
            : 100;
            
        horizontalProgressFill.style.width = `${percentageProgressWidth}%`;
    }
    
    console.log(`[UI Sync] Timeline visualization components rendered for Step: ${activeStep}/${maxSteps}`);
}

// ============================================================================
// 💾 MODULE: PRODUCTION INDUSTRIAL STATE STORAGE CACHE WORKFLOW
// ============================================================================

/**
 * Persists or restores multi-step wizard form states cleanly into cache layers.
 * Supports checkbox metrics, radio options tracking, and local data ciphers.
 * @param {boolean} isExecutionInitialLoad - If true, reads from cache; else writes.
 */
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
        // --------------------------------------------------------
        // DATA RECOVERY ROUTINE (ON-LOAD BOOT RECOVERY)
        // --------------------------------------------------------
        try {
            const restoredPayloadString = localStorage.getItem(cacheKeyNamespace);
            if (!restoredPayloadString) return;

            const payloadDataObject = JSON.parse(restoredPayloadString);
            
            Object.keys(payloadDataObject).forEach(fieldIdKey => {
                const inputNode = document.getElementById(fieldIdKey);
                if (!inputNode) return;

                let finalExtractedValue = payloadDataObject[fieldIdKey];

                // RECOVER LAYER: Decrypt sensitive keys cleanly back into active state elements
                if (sensitiveFieldsList.includes(fieldIdKey) && typeof finalExtractedValue === "string" && finalExtractedValue.trim() !== "") {
                    finalExtractedValue = executeCipherTranslation(finalExtractedValue, true);
                }

                if (inputNode.type === 'checkbox') {
                    inputNode.checked = Boolean(finalExtractedValue);
                } else if (inputNode.type === 'radio') {
                    // Fixed: Find the matching element token inside target groups and apply checked attributes
                    const matchingRadio = document.querySelector(`input[name="${inputNode.name}"][value="${finalExtractedValue}"]`);
                    if (matchingRadio) matchingRadio.checked = true;
                } else {
                    inputNode.value = finalExtractedValue;
                    // Trigger native input events to update any active validation bubbles downstream
                    inputNode.dispatchEvent(new Event('input', { bubbles: true }));
                }
            });
            console.log("[f4u Storage] State matrices restored from browser workspace cache entries.");
        } catch (jsonErr) {
            console.error("[f4u Storage] State data recovery parse error loop encountered: ", jsonErr);
        }
    } else {
        // --------------------------------------------------------
        // DATA PERSISTENCE ROUTINE (ON-STEP SAVE CAPTURE)
        // --------------------------------------------------------
        let activeFormMetricsObject = {};
        
        // Fixed: Query input structures safely across the entire container, avoiding parent id lookups
        const allInputElements = document.querySelectorAll("input, select, textarea");
        if (allInputElements.length === 0) return;

        allInputElements.forEach(inputNode => {
            const idAttr = inputNode.getAttribute('id') || inputNode.getAttribute('name');
            if (!idAttr) return;

            let elementValueToCache = "";

            if (inputNode.type === 'checkbox') {
                elementValueToCache = inputNode.checked;
            } else if (inputNode.type === 'radio') {
                if (!inputNode.checked) return; // Skip non-checked radio selectors inside group frames
                elementValueToCache = inputNode.value;
            } else {
                elementValueToCache = inputNode.value;
            }

            // PROTECT LAYER: Convert plain identity numbers into unreadable base64 variants
            if (sensitiveFieldsList.includes(idAttr) && typeof elementValueToCache === "string" && elementValueToCache.trim() !== "") {
                elementValueToCache = executeCipherTranslation(elementValueToCache, false);
            }

            activeFormMetricsObject[idAttr] = elementValueToCache;
        });

        try {
            localStorage.setItem(cacheKeyNamespace, JSON.stringify(activeFormMetricsObject));
        } catch (storageWriteError) {
            console.error("[f4u Storage] Core caching payload write operations failed:", storageWriteError);
        }
    }
}


// ============================================================================
// 🎨 MODULE: PRODUCTION DIGITAL POWER OF ATTORNEY SIGNATURE CANVAS ENGINE
// ============================================================================

/**
 *Strategic Save & Exit Progress Handler
 * Commits current dataset states before redirecting to the compliance dashboard.
 */
function executeSaveAndExitWorkflow() {
    if (typeof cacheAndRestoreWizardFormStatesVanilla === "function") {
        cacheAndRestoreWizardFormStatesVanilla(false);
    }
    alert("Application data package locked and synchronized successfully. You may resume your onboarding sequence from this node at any point.");
    window.location.href = "compliance.html";
}

/**
 * Hardened Canvas Engine Initializer
 * Calibrates drawing frames dynamically and intercepts inputs on high-DPI displays.
 */
function initializeSignatureCanvasPadEngineVanilla() {
    const padCanvasElement = document.getElementById("poa-signature-pad");
    if (!padCanvasElement) return;

    const rasterRenderingContext2D = padCanvasElement.getContext("2d");
    window.signaturePadHasBeenDrawnByUser = false;
    
    let isDrawingInputActive = false;
    let lastRecordedCoordinateX = 0;
    let lastRecordedCoordinateY = 0;

    // Fixed: Calibrate canvas internal buffer size to layout sizes to avoid High-DPI mouse drifts
    const displayRect = padCanvasElement.getBoundingClientRect();
    padCanvasElement.width = displayRect.width;
    padCanvasElement.height = displayRect.height;

    // Re-bind configuration context visual values
    rasterRenderingContext2D.strokeStyle = "#0a1f44";
    rasterRenderingContext2D.lineWidth = 3;
    rasterRenderingContext2D.lineCap = "round";
    rasterRenderingContext2D.lineJoin = "round";

    function calculateNormalizedCoordinates(inputClientX, inputClientY) {
        const canvasBoundaryBox = padCanvasElement.getBoundingClientRect();
        return {
            x: inputClientX - canvasBoundaryBox.left,
            y: inputClientY - canvasBoundaryBox.top
        };
    }

    // --------------------------------------------------------
    // MOUSE INPUT CAPTURE EVENTS
    // --------------------------------------------------------
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
        if (window.signaturePadHasBeenDrawnByUser) {
            // Production Save: Store base64 data to cache instantly so step validation hooks pass securely
            localStorage.setItem("poa-signature-pad-data", padCanvasElement.toDataURL());
        }
    });

    // --------------------------------------------------------
    // SMARTPHONE & TABLET TOUCH EVENTS 
    // --------------------------------------------------------
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
        e.preventDefault(); // Prevents touch scrolling while signing
        
        const touchObj = e.touches[0]; // Fixed: Re-isolated specific mobile array node accurately
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
        if (window.signaturePadHasBeenDrawnByUser) {
            localStorage.setItem("poa-signature-pad-data", padCanvasElement.toDataURL());
        }
    });
}

/**
 * Re-Clears Pad Tracks
 * Synchronizes layout resets and flushes trailing storage data tokens out of cache.
 */
function clearSignatureCanvasTrack() {
    const padCanvasElement = document.getElementById("poa-signature-pad");
    if (!padCanvasElement) return;
    
    const rasterRenderingContext2D = padCanvasElement.getContext("2d");
    rasterRenderingContext2D.clearRect(0, 0, padCanvasElement.width, padCanvasElement.height);
    
    // Fixed: Clean tracking variables and storage parameters completely to block blank signatures
    window.signaturePadHasBeenDrawnByUser = false;
    localStorage.removeItem("poa-signature-pad-data");
    console.log("[f4u Signature] Canvas pad cleared and purged from system workspace cache.");
}

// ============================================================================
// 🔒 MODULE: PRODUCTION SECURE TRANSACTION PAYLOAD DISPATCH ARCHITECTURE
// ============================================================================

/**
 * Executes secure packaging of onboarding fields, captures cached vector tokens,
 * and pushes the finalized checkout data array matrix to sessionStorage hooks.
 */
function executeOnboardingTransactionPayloadSubmitVanilla() {
    console.log("[f4u Dispatch] Compiling transaction manifest payload records...");

    const cardNumNode = document.getElementById('checkout_card_num');
    const cardExpNode = document.getElementById('checkout_card_exp');
    const cardCvvNode = document.getElementById('checkout_card_cvv');

    const cardNum = cardNumNode ? cardNumNode.value.replace(/\s+/g, '') : '';
    const cardExp = cardExpNode ? cardExpNode.value : '';
    const cardCvv = cardCvvNode ? cardCvvNode.value : '';

    // Standard baseline card mask checks
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

    // Freeze action button layout states to prevent hazardous multi-click loop double charging
    const nextBtn = document.getElementById('wizard-next-trigger-btn');
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.style.background = '#64748b';
        nextBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Encrypting Channels...';
    }

    // Persistent State Recovery: Pull from window scope arrays safely if elements are missing
    const dropdownServiceNode = document.getElementById("wizard-route-service-id");
    const finalizedServiceKey = (dropdownServiceNode && dropdownServiceNode.value) ? dropdownServiceNode.value : (window.routeActiveServiceKey || "hazmat-registration");
    
    const dropdownPlanNode = document.getElementById("wizard-route-tier-id");
    const finalizedTierKey = (dropdownPlanNode && dropdownPlanNode.value) ? dropdownPlanNode.value : (window.routeActivePlanKey || "elite");
    
    const jurisdictionEl = document.getElementById("wizard-target-jurisdiction");
    const selectedJurisdiction = jurisdictionEl ? jurisdictionEl.value : '';

    let auxiliaryAddonsArray = [];
    document.querySelectorAll('.upsell-checkbox:checked').forEach(checkbox => {
        auxiliaryAddonsArray.push(checkbox.getAttribute('data-id'));
    });

    // Fixed: Recover the raw signature tracking image from localStorage cache to bypass hidden canvas render blanks
    const base64SignatureDataUrl = localStorage.getItem("poa-signature-pad-data") || null;

    // Helper closure to search elements defensively by either ID or input array name properties
    const extractProductionFieldValue = (elementIdentifier) => {
        const targetNode = document.getElementById(elementIdentifier) || document.querySelector(`[name="${elementIdentifier}"]`) || document.querySelector(`[name="${elementIdentifier}[]"]`);
        return targetNode ? targetNode.value.trim() : '';
    };

    // Construct the production-grade secure transactional payload manifest mapping
    const primarySubmissionPayloadData = {
        transaction_hash_id: window.f4u_tx_session_hash || "F4U-TX-FALLBACK-DEV",
        target_service_id: finalizedServiceKey,
        deployment_speed_tier: finalizedTierKey,
        authority_jurisdiction: selectedJurisdiction,
        
        // Fixed: Swapped fragile direct lookups out for automated dynamic schema extraction checks
        legal_entity_name: extractProductionFieldValue('ent_legal_name') || extractProductionFieldValue('fed_tax_legal_name') || extractProductionFieldValue('ra_secondary_entity_name'),
        trade_dba_name: extractProductionFieldValue('ent_dba_name') || extractProductionFieldValue('sllc_cell_name'),
        taxpayer_ein: extractProductionFieldValue('ent_ein') || extractProductionFieldValue('fed_tax_ein'),
        usdot_identifier: extractProductionFieldValue('ent_usdot') || extractProductionFieldValue('boc_usdot_number'),
        office_address_street: extractProductionFieldValue('ent_address_street') || extractProductionFieldValue('fed_tax_principal_street') || extractProductionFieldValue('member_street'),
        office_address_city: extractProductionFieldValue('ent_address_city') || extractProductionFieldValue('fed_tax_principal_city') || extractProductionFieldValue('member_city'),
        office_address_zip: extractProductionFieldValue('ent_address_zip') || extractProductionFieldValue('fed_tax_principal_zip') || extractProductionFieldValue('member_zip'),
        executing_officer_name: extractProductionFieldValue('ent_officer_name') || extractProductionFieldValue('member_name') || extractProductionFieldValue('np_board_name'),
        executing_officer_title: extractProductionFieldValue('ent_officer_title') || extractProductionFieldValue('np_board_role'),
        communications_email: extractProductionFieldValue('ent_comms_email') || extractProductionFieldValue('np_board_contact'),
        communications_phone: extractProductionFieldValue('ent_comms_phone'),
        
        active_addons_list: auxiliaryAddonsArray,
        printed_signature_auth: extractProductionFieldValue('poa_signer_printed'),
        digital_signature_raster_vector: base64SignatureDataUrl,
        financials_subtotal_amount: baseTierPriceCalculationFallbackVanilla(finalizedServiceKey, finalizedTierKey),
        financials_grand_total_charge: window.wizardCalculatedFinalTotalAmount || 0,
        client_session_timestamp: new Date().toISOString()
    };

    // Drive submission process timers safely
    setTimeout(function() {
        try {
            // Clean browser state space clean upon absolute successful execution tracking parameters pass
            localStorage.removeItem("f4u_wizard_onboarding_state");
            sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));
            
            const secureToken = window.f4u_tx_session_hash || "F4U-TX-FALLBACK";
            window.location.href = `success.html?tx_hash=${secureToken}&status=validated_cleared`;
        } catch (routingErr) {
            console.error("[f4u Processing Error] Payload serialization fault loop triggered: ", routingErr);
            if (nextBtn) {
                nextBtn.disabled = false;
                nextBtn.style.background = '#10b981';
                nextBtn.innerHTML = '<i class="fa-solid fa-credit-card"></i> Process Secured Payment';
            }
        }
    }, 2500);
}

/**
 * Calculations baseline fallback pricing matrix utility.
 */
function baseTierPriceCalculationFallbackVanilla(serviceKey, planKey) {
    try {
        // Fixed: Scoped variable properties using local checking maps to prevent fatal runtime ReferenceErrors
        const currentService = serviceKey || (document.getElementById("wizard-route-service-id") ? document.getElementById("wizard-route-service-id").value : (window.routeActiveServiceKey || "hazmat-registration"));
        const currentPlan = planKey || (document.getElementById("wizard-route-tier-id") ? document.getElementById("wizard-route-tier-id").value : (window.routeActivePlanKey || "elite"));
        
        if (typeof CENTRAL_SERVICE_PLAN_DB !== "undefined" && CENTRAL_SERVICE_PLAN_DB[currentService]) {
            return CENTRAL_SERVICE_PLAN_DB[currentService].prices[currentPlan] || 0;
        }
        return 0;
    } catch(e) {
        console.warn("[Pricing Fallback Alert] Price calculation parsing encountered variance parameters:", e);
        return 0;
    }
}

// ============================================================================
// 🔒 MODULE: PRODUCTION SECURE TRANSACTION PAYLOAD DISPATCH ARCHITECTURE
// ============================================================================

/**
 * Executes secure packaging of onboarding fields, captures cached vector tokens,
 * and pushes the finalized checkout data array matrix to sessionStorage hooks.
 */
function executeOnboardingTransactionPayloadSubmitVanilla() {
    console.log("[f4u Dispatch] Compiling transaction manifest payload records...");

    const cardNumNode = document.getElementById('checkout_card_num');
    const cardExpNode = document.getElementById('checkout_card_exp');
    const cardCvvNode = document.getElementById('checkout_card_cvv');

    const cardNum = cardNumNode ? cardNumNode.value.replace(/\s+/g, '') : '';
    const cardExp = cardExpNode ? cardExpNode.value : '';
    const cardCvv = cardCvvNode ? cardCvvNode.value : '';

    // Standard baseline card mask checks
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

    // Freeze action button layout states to prevent hazardous multi-click loop double charging
    const nextBtn = document.getElementById('wizard-next-trigger-btn');
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.style.background = '#64748b';
        nextBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Encrypting Channels...';
    }

    // Persistent State Recovery: Pull from window scope arrays safely if elements are missing
    const dropdownServiceNode = document.getElementById("wizard-route-service-id");
    const finalizedServiceKey = (dropdownServiceNode && dropdownServiceNode.value) ? dropdownServiceNode.value : (window.routeActiveServiceKey || "hazmat-registration");
    
    const dropdownPlanNode = document.getElementById("wizard-route-tier-id");
    const finalizedTierKey = (dropdownPlanNode && dropdownPlanNode.value) ? dropdownPlanNode.value : (window.routeActivePlanKey || "elite");
    
    const jurisdictionEl = document.getElementById("wizard-target-jurisdiction");
    const selectedJurisdiction = jurisdictionEl ? jurisdictionEl.value : '';

    let auxiliaryAddonsArray = [];
    document.querySelectorAll('.upsell-checkbox:checked').forEach(checkbox => {
        auxiliaryAddonsArray.push(checkbox.getAttribute('data-id'));
    });

    // Fixed: Recover the raw signature tracking image from localStorage cache to bypass hidden canvas render blanks
    const base64SignatureDataUrl = localStorage.getItem("poa-signature-pad-data") || null;

    // Helper closure to search elements defensively by either ID or input array name properties
    const extractProductionFieldValue = (elementIdentifier) => {
        const targetNode = document.getElementById(elementIdentifier) || document.querySelector(`[name="${elementIdentifier}"]`) || document.querySelector(`[name="${elementIdentifier}[]"]`);
        return targetNode ? targetNode.value.trim() : '';
    };

    // Construct the production-grade secure transactional payload manifest mapping
    const primarySubmissionPayloadData = {
        transaction_hash_id: window.f4u_tx_session_hash || "F4U-TX-FALLBACK-DEV",
        target_service_id: finalizedServiceKey,
        deployment_speed_tier: finalizedTierKey,
        authority_jurisdiction: selectedJurisdiction,
        
        // Fixed: Swapped fragile direct lookups out for automated dynamic schema extraction checks
        legal_entity_name: extractProductionFieldValue('ent_legal_name') || extractProductionFieldValue('fed_tax_legal_name') || extractProductionFieldValue('ra_secondary_entity_name'),
        trade_dba_name: extractProductionFieldValue('ent_dba_name') || extractProductionFieldValue('sllc_cell_name'),
        taxpayer_ein: extractProductionFieldValue('ent_ein') || extractProductionFieldValue('fed_tax_ein'),
        usdot_identifier: extractProductionFieldValue('ent_usdot') || extractProductionFieldValue('boc_usdot_number'),
        office_address_street: extractProductionFieldValue('ent_address_street') || extractProductionFieldValue('fed_tax_principal_street') || extractProductionFieldValue('member_street'),
        office_address_city: extractProductionFieldValue('ent_address_city') || extractProductionFieldValue('fed_tax_principal_city') || extractProductionFieldValue('member_city'),
        office_address_zip: extractProductionFieldValue('ent_address_zip') || extractProductionFieldValue('fed_tax_principal_zip') || extractProductionFieldValue('member_zip'),
        executing_officer_name: extractProductionFieldValue('ent_officer_name') || extractProductionFieldValue('member_name') || extractProductionFieldValue('np_board_name'),
        executing_officer_title: extractProductionFieldValue('ent_officer_title') || extractProductionFieldValue('np_board_role'),
        communications_email: extractProductionFieldValue('ent_comms_email') || extractProductionFieldValue('np_board_contact'),
        communications_phone: extractProductionFieldValue('ent_comms_phone'),
        
        active_addons_list: auxiliaryAddonsArray,
        printed_signature_auth: extractProductionFieldValue('poa_signer_printed'),
        digital_signature_raster_vector: base64SignatureDataUrl,
        financials_subtotal_amount: baseTierPriceCalculationFallbackVanilla(finalizedServiceKey, finalizedTierKey),
        financials_grand_total_charge: window.wizardCalculatedFinalTotalAmount || 0,
        client_session_timestamp: new Date().toISOString()
    };

    // Drive submission process timers safely
    setTimeout(function() {
        try {
            // Clean browser state space clean upon absolute successful execution tracking parameters pass
            localStorage.removeItem("f4u_wizard_onboarding_state");
            sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));
            
            const secureToken = window.f4u_tx_session_hash || "F4U-TX-FALLBACK";
            window.location.href = `success.html?tx_hash=${secureToken}&status=validated_cleared`;
        } catch (routingErr) {
            console.error("[f4u Processing Error] Payload serialization fault loop triggered: ", routingErr);
            if (nextBtn) {
                nextBtn.disabled = false;
                nextBtn.style.background = '#10b981';
                nextBtn.innerHTML = '<i class="fa-solid fa-credit-card"></i> Process Secured Payment';
            }
        }
    }, 2500);
}

/**
 * Calculations baseline fallback pricing matrix utility.
 */
function baseTierPriceCalculationFallbackVanilla(serviceKey, planKey) {
    try {
        // Fixed: Scoped variable properties using local checking maps to prevent fatal runtime ReferenceErrors
        const currentService = serviceKey || (document.getElementById("wizard-route-service-id") ? document.getElementById("wizard-route-service-id").value : (window.routeActiveServiceKey || "hazmat-registration"));
        const currentPlan = planKey || (document.getElementById("wizard-route-tier-id") ? document.getElementById("wizard-route-tier-id").value : (window.routeActivePlanKey || "elite"));
        
        if (typeof CENTRAL_SERVICE_PLAN_DB !== "undefined" && CENTRAL_SERVICE_PLAN_DB[currentService]) {
            return CENTRAL_SERVICE_PLAN_DB[currentService].prices[currentPlan] || 0;
        }
        return 0;
    } catch(e) {
        console.warn("[Pricing Fallback Alert] Price calculation parsing encountered variance parameters:", e);
        return 0;
    }
}


// ============================================================================
// 🧠 MODULE: HARDENED LLC WORKFLOW CONDITIONAL FIELD CONTROLLERS
// ============================================================================

/**
 * Enforces dynamic legal compliance checks on entity name inputs.
 * @param {HTMLInputElement} inputField - The target business name input node.
 */
function validateLlcNameSuffix(inputField) {
    if (!inputField) return;
    const rawVal = inputField.value.trim();
    if (rawVal === "") return;
    
    const lowerVal = rawVal.toLowerCase();
    
    // Checks to ensure user added the required legal business suffix
    if (!lowerVal.endsWith("llc") && !lowerVal.endsWith("limited liability company") && !lowerVal.endsWith("l.l.c.")) {
        alert("LLC Formation Rule Warning: Your chosen name does not contain an approved corporate suffix token. Please append 'LLC' or 'Limited Liability Company' to clear application parameters.");
        inputField.style.borderColor = "#ef4444";
        inputField.focus();
    } else {
        inputField.style.borderColor = "var(--border, #cbd5e1)";
        // Fixed: Dispatch event loop update passes to clear downstream warning metrics instantly
        inputField.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

/**
 * Toggles structural layout rendering for custom agent selections.
 * @param {string} selectedValue - Active option select payload value string.
 */
function toggleRegisteredAgentConditionalFields(selectedValue) {
    const customAgentWrapper = document.getElementById("llc_custom_ra_wrapper");
    if (!customAgentWrapper) return;

    if (selectedValue === "custom") {
        // Correctly toggles the custom address inputs using standard flex grid layout
        customAgentWrapper.style.display = "grid";
        
        // Enforce input requirements when fields are active and visible
        customAgentWrapper.querySelectorAll("input, select").forEach(field => {
            if (field.id !== "llc_custom_ra_unit" && field.id !== "llc_custom_ra_line2") {
                field.required = true;
            }
        });
    } else {
        customAgentWrapper.style.display = "none";
        
        // Fixed: Remove required rules and wipe text states clean when hidden to prevent navigation lockouts
        customAgentWrapper.querySelectorAll("input, select").forEach(field => {
            field.required = false;
            if (field.tagName === "SELECT") {
                field.selectedIndex = 0;
            } else {
                field.value = "";
            }
        });
    }

    // Flags that the filings4u agent service is active to prepare cart updates later
    window.customSelectedRegisteredAgentServiceActive = (selectedValue === "filings4u");
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

/**
 * Manages view display matrix grids for structural management parameters.
 * @param {string} selectedValue - Manager or member choice identifier.
 */
function toggleLlcManagerFieldsMatrix(selectedValue) {
    const wrapper = document.getElementById("llc_manager_names_wrapper");
    if (!wrapper) return;
    
    if (selectedValue === "manager-managed") {
        wrapper.style.display = "flex";
        wrapper.querySelectorAll("input, select").forEach(el => el.required = true);
    } else {
        wrapper.style.display = "none";
        // Fixed: Flush cached hidden values to prevent data contamination on submit
        wrapper.querySelectorAll("input, select").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }
}

/**
 * Drives manual EIN tax form visibility tracks and updates shopping cart math.
 * @param {string} selectedValue - Choice selection token.
 */
function toggleEinConditionalWorkflow(selectedValue) {
    const manualEinWrapper = document.getElementById("llc_manual_ein_wrapper");
    if (!manualEinWrapper) return;
    
    if (selectedValue === "yes") {
        manualEinWrapper.style.display = "flex";
        manualEinWrapper.querySelectorAll("input").forEach(el => el.required = true);
    } else {
        manualEinWrapper.style.display = "none";
        // Fixed: Prevent hidden required fields from locking step-navigation actions down
        manualEinWrapper.querySelectorAll("input").forEach(el => {
            el.required = false;
            el.value = "";
        });
    }

    // Flags that the filings4u EIN creation add-on is chosen to adapt cart pricing calculations
    window.customSelectedEinProcurementServiceActive = (selectedValue === "no-buy");
    
    if (typeof updateDynamicPricingMatrixVanilla === "function") {
        updateDynamicPricingMatrixVanilla();
    }
}

// ============================================================================
// 💳 MODULE: PRODUCTION STRIPE CONFIGURATOR & PURCHASE SUMMARY MATRIX RECONCILIATOR
// ============================================================================

let stripeInstance = null;
let stripeElementsContainer = null;
let stripePaymentElementInstance = null;

/**
 * Initializes and securely mounts tokenized flat Stripe card input boxes.
 * Safely updates active payment intents when client-side pricing updates.
 */
function initializeFlatStripeCheckoutElement() {
    const mountTarget = document.getElementById("stripe-payment-element-mount-point");
    if (!mountTarget) return;

    // Fixed: If price shifts, safely clear old element children nodes to update the fresh amount intent
    if (mountTarget.hasChildNodes()) {
        mountTarget.innerHTML = "";
    }

    try {
        // Initialize Stripe using your active dashboard production key token parameters
        stripeInstance = Stripe('pk_live_51YOUR_STRIPE_PRODUCTION_PUBLISHABLE_KEY');

        // Apply clean aesthetic visual overrides matching your corporate emerald & navy theme design variables
        const professionalAesthetics = {
            theme: 'flat',
            variables: {
                colorPrimary: '#10b981',
                colorBackground: '#ffffff',
                colorText: '#0a1f44',
                colorDanger: '#ef4444',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                spacingUnit: '5px',
                borderRadius: '8px'
            }
        };

        // Convert total calculated floating amount parameter to clean integer cents for Stripe processing rules
        const targetChargeAmountInCents = Math.round((window.wizardCalculatedFinalTotalAmount || 199.00) * 100);
        
        const gatewayClientOptions = {
            mode: 'payment',
            amount: targetChargeAmountInCents,
            currency: 'usd',
            appearance: professionalAesthetics
        };

        // Instantiate and mount the tokenized flat card fields elements securely
        stripeElementsContainer = stripeInstance.elements(gatewayClientOptions);
        stripePaymentElementInstance = stripeElementsContainer.create('payment');
        stripePaymentElementInstance.mount('#stripe-payment-element-mount-point');
        
        console.log(`[Stripe API] Secure payment interface mounted successfully for active intent charge: $${window.wizardCalculatedFinalTotalAmount.toFixed(2)}`);
    } catch (stripeInitError) {
        console.error("[Stripe API Failure] Secure payment layout mounting loop encountered an exception:", stripeInitError);
    }
}

/**
 * Production Reconciliation Summary Generator
 * Scrapes selection matrices and prints an itemized invoice onto the Step 5 review screen.
 */
function populatePurchaseSummaryReviewMatrix() {
    const safeServiceKey = window.routeActiveServiceKey || "hazmat-registration";
    const safePlanKey = window.routeActivePlanKey || "elite";
    
    const planConfig = CENTRAL_SERVICE_PLAN_DB[safeServiceKey];
    if (!planConfig) return;

    const baseTierPrice = planConfig.prices[safePlanKey] || 0;
    const baseGovAgencyFee = planConfig.gov_fee || 0;
    
    let incrementalAddonTotal = 0;

    // 1. Insert Base Service Package Suffix Row
    let summaryRowsHtml = `
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border, #e2e8f0); font-size: 0.95rem; font-weight: 700;">
            <span style="color: var(--navy, #0a1f44);">${planConfig.name} (${safePlanKey.toUpperCase()})</span>
            <span style="font-family: monospace; color: var(--navy, #0a1f44);">$${baseTierPrice.toFixed(2)}</span>
        </div>
    `;

    // 2. Scan Marketplace Checkboxes accurately
    document.querySelectorAll('.addon-checkbox:checked, .upsell-checkbox:checked').forEach(checkbox => {
        const addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || 0;
        const addonLabelString = checkbox.getAttribute('data-name') || "Add-On Asset Protection Shield";
        
        incrementalAddonTotal += addonPriceValue;
        summaryRowsHtml += `
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate, #64748b);">
                <span>+ ${addonLabelString}</span>
                <span style="font-family: monospace; font-weight: 600; color: var(--navy, #0a1f44);">$${addonPriceValue.toFixed(2)}</span>
            </div>
        `;
    });

    // 3. Scan Conditional Step 2 Subform Add-On States
    if (window.customSelectedRegisteredAgentServiceActive) {
        incrementalAddonTotal += 75.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate, #64748b);"><span>+ Registered Agent Shield</span><span style="font-family: monospace; font-weight: 600; color: var(--navy, #0a1f44);">$75.00</span></div>`;
    }
    if (window.customSelectedEinProcurementServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate, #64748b);"><span>+ EIN Procurement Processing</span><span style="font-family: monospace; font-weight: 600; color: var(--navy, #0a1f44);">$79.00</span></div>`;
    }
    if (window.customSelectedScorpElectionServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate, #64748b); padding: 4px 0;"><span>+ Form 2553 Preparation</span><span style="font-family: monospace; font-weight: 600; color: var(--navy, #0a1f44);">$79.00</span></div>`;
    }
    if (window.customSelectedSolePropLicenseAuditServiceActive || window.customSelectedDbaLicenseAuditServiceActive || window.customSelectedNonprofitLicenseCheckActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate, #64748b); padding: 4px 0;"><span>+ Compliance License Audit Suite</span><span style="font-family: monospace; font-weight: 600; color: var(--navy, #0a1f44);">$79.00</span></div>`;
    }
    if (window.customSelectedDbaSearchServiceActive) {
        incrementalAddonTotal += 79.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate, #64748b); padding: 4px 0;"><span>+ Name Availability Search</span><span style="font-family: monospace; font-weight: 600; color: var(--navy, #0a1f44);">$79.00</span></div>`;
    }
    if (window.customSelectedForeignQualLicenseSuiteActive) {
        incrementalAddonTotal += 125.00;
        summaryRowsHtml += `<div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed var(--border, #e2e8f0); font-size: 0.9rem; color: var(--slate, #64748b); padding: 4px 0;"><span>+ License & Permit Audit Suite</span><span style="font-family: monospace; font-weight: 600; color: var(--navy, #0a1f44);">$125.00</span></div>`;
    }

    // 4. Fixed: Re-integrated dynamic transportation safety calculation hook alignment
    if (window.lastCalculatedNewEntrantAddonTotal && window.lastCalculatedNewEntrantAddonTotal > 0) {
        incrementalAddonTotal += window.lastCalculatedNewEntrantAddonTotal;
        if (window.lastCalculatedNewEntrantAddonHtml) {
            summaryRowsHtml += window.lastCalculatedNewEntrantAddonHtml;
        }
    }

    // Fixed: Removed the extraneous filing fee addition to solve the double-billing calculation bug
    const totalSubtotal = baseTierPrice + incrementalAddonTotal;
    const totalGrandCharge = totalSubtotal + baseGovAgencyFee;

    // 5. Inject generated markup into the Step 5 review box container node
    const summaryRowsContainer = document.getElementById('summary-purchase-rows-container');
    if (summaryRowsContainer) {
        summaryRowsContainer.innerHTML = summaryRowsHtml;
    }

    // 6. Recalculate Final Math Metric Displays
    const summarySubtotal = document.getElementById('summary-subtotal-display');
    if (summarySubtotal) summarySubtotal.textContent = `$${totalSubtotal.toFixed(2)}`;

    const summaryGov = document.getElementById('summary-gov-fees-display');
    if (summaryGov) summaryGov.textContent = `$${baseGovAgencyFee.toFixed(2)}`;

    const summaryGrand = document.getElementById('summary-grand-total-display');
    if (summaryGrand) summaryGrand.textContent = `$${totalGrandCharge.toFixed(2)}`;

    // Sync metrics down to Step 6 gateway checkout instances
    window.wizardCalculatedFinalTotalAmount = totalGrandCharge;
    
    const paymentTotalDisp = document.getElementById("payment-gateway-total-display");
    if (paymentTotalDisp) paymentTotalDisp.textContent = `$${totalGrandCharge.toFixed(2)}`;
    
    console.log(`[Summary Engine] Statement reconciled for production. Final grand total value: $${totalGrandCharge.toFixed(2)}`);
}

// ============================================================================
// 🔒 MODULE: PRODUCTION LIVE STRIPE TRANSACTION PAYLOAD SUBMITTER (FAIL-SAFE)
// ============================================================================

/**
 * Executes dynamic field extraction, serializes local onboarding form data arrays,
 * and passes active elements to Stripe's live payment server for transaction processing.
 */
async function executeOnboardingTransactionPayloadSubmitVanilla() {
    console.log("[Stripe Dispatch] Packing customer inputs and preparing secure gateway channels...");

    if (!stripeInstance || !stripePaymentElementInstance || !stripeElementsContainer) {
        alert("Stripe Integration Failure: The secure gateway component has not finished mounting inside Step 6.");
        return;
    }

    const nextBtn = document.getElementById('wizard-next-trigger-btn');
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.style.background = '#64748b';
        nextBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...';
    }

    // Gather all active checked protection upsells
    let auxiliaryAddonsArray = [];
    document.querySelectorAll('.addon-checkbox:checked, .upsell-checkbox:checked').forEach(checkbox => {
        auxiliaryAddonsArray.push(checkbox.getAttribute('data-id'));
    });

    // Helper closure to dynamically extract field values by checking multiple explicit schema variants
    const extractProductionFieldValue = (elementIdentifier) => {
        const targetNode = document.getElementById(elementIdentifier) || 
                           document.querySelector(`[name="${elementIdentifier}"]`) || 
                           document.querySelector(`[name="${elementIdentifier}[]"]`);
        return targetNode ? targetNode.value.trim() : '';
    };

    const safeServiceKey = window.routeActiveServiceKey || "hazmat-registration";
    const safePlanKey = window.routeActivePlanKey || "elite";

    // Build the production-hardened receipt dataset mapping manifest
    const primarySubmissionPayloadData = {
        transaction_hash_id: window.f4u_tx_session_hash || "F4U-TX-LIVE-FALLBACK",
        target_service_id: safeServiceKey,
        deployment_speed_tier: safePlanKey,
        authority_jurisdiction: extractProductionFieldValue('wizard-target-jurisdiction'),
        
        // Fixed: Swapped fragile direct IDs out for defensive multi-schema value extractions
        legal_entity_name: extractProductionFieldValue('ent_legal_name') || extractProductionFieldValue('fed_tax_legal_name') || extractProductionFieldValue('legal-name') || extractProductionFieldValue('ra_secondary_entity_name'),
        taxpayer_ein: extractProductionFieldValue('ent_ein') || extractProductionFieldValue('fed_tax_ein') || extractProductionFieldValue('ein'),
        office_address_street: extractProductionFieldValue('ent_address_street') || extractProductionFieldValue('fed_tax_principal_street') || extractProductionFieldValue('business-address') || extractProductionFieldValue('member_street'),
        office_address_city: extractProductionFieldValue('ent_address_city') || extractProductionFieldValue('fed_tax_principal_city') || extractProductionFieldValue('member_city'),
        office_address_zip: extractProductionFieldValue('ent_address_zip') || extractProductionFieldValue('fed_tax_principal_zip') || extractProductionFieldValue('member_zip'),
        
        communications_email: extractProductionFieldValue('portal_user_email') || extractProductionFieldValue('ent_comms_email') || extractProductionFieldValue('np_board_contact'),
        active_addons_list: auxiliaryAddonsArray,
        printed_signature_auth: extractProductionFieldValue('poa_signer_printed'),
        digital_signature_raster_vector: localStorage.getItem("poa-signature-pad-data") || null,
        
        financials_subtotal_amount: (window.wizardCalculatedFinalTotalAmount || 0) - (CENTRAL_SERVICE_PLAN_DB[safeServiceKey]?.gov_fee || 0),
        financials_grand_total_charge: window.wizardCalculatedFinalTotalAmount || 0,
        client_session_timestamp: new Date().toISOString()
    };

    // Cache the invoice metadata parameters prior to launching Stripe's window router redirection
    try {
        sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData));
    } catch (sessionCacheError) {
        console.error("[Storage Error] Receipt serialization failed:", sessionCacheError);
    }

    // 2. Fire Stripe's official payment execution wrapper loop
    // Fixed: Updated target pathname redirection from wizard.html to your dedicated success.html layout screen
    const baseOriginPath = window.location.origin + window.location.pathname.replace('wizard.html', '');
    const successRedirectionUrl = `${baseOriginPath}success.html?tx_hash=${window.f4u_tx_session_hash || 'TX-PENDING'}&status=validated_cleared`;
    
    const communicationEmailValue = extractProductionFieldValue('portal_user_email') || 'compliance@yourcompany.com';

    console.log(`[Stripe API] Redirect target configured: ${successRedirectionUrl}`);

    try {
        const { error } = await stripeInstance.confirmPayment({
            elements: stripeElementsContainer,
            confirmParams: {
                return_url: successRedirectionUrl,
                receipt_email: communicationEmailValue
            }
        });

        // 3. Fallback handler if Stripe registers immediate rejection errors
        if (error) {
            alert(`Payment Transaction Rejected: ${error.message}`);
            if (nextBtn) {
                nextBtn.disabled = false;
                nextBtn.style.background = '#10b981';
                nextBtn.innerHTML = '<i class="fa-solid fa-credit-card"></i> Complete Order & Submit';
            }
        }
    } catch (stripeGatewayException) {
        console.error("[Stripe Connection Error] Critical network checkout exception caught:", stripeGatewayException);
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.style.background = '#10b981';
            nextBtn.innerHTML = '<i class="fa-solid fa-credit-card"></i> Complete Order & Submit';
        }
    }
}
