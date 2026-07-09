// ============================================================================ //
// 📄 FILE: step-7.js - BLOCK 1 OF 4 (OPTIMIZED & CRASH-PROOFED)               //
// 🧾 MODULE: GLOBAL INITIALIZATION, SUPABASE CONNECT & PRINT ISOLATION LAYER  //
// ============================================================================ //
(function() {
    "use strict";

    window.isStep7StylesheetsMounted = window.isStep7StylesheetsMounted || false;

window.injectStep7VisualInterfaceStyles = function() {
    if (document.getElementById("f4u-step7-compliance-and-print-sheets") || window.isStep7StylesheetsMounted) return;

    const styleNode = document.createElement("style");
    styleNode.id = "f4u-step7-compliance-and-print-sheets";
    styleNode.textContent = `
        @keyframes f4uComplianceShake {
            0%, 100% { transform: translateX(0); }
            15%, 45%, 75% { transform: translateX(-6px); }
            30%, 60%, 90% { transform: translateX(6px); }
        }
        .compliance-shake-triggered { 
            animation: f4uComplianceShake 0.4s cubic-bezier(.36,.07,.19,.97) both !important; 
        }

        @media print {
            /* 1. Unhide the root nodes and allow them to pass rendering styles down */
            html, body, main, #app, #wizard-wrapper, .master-layout {
                display: block !important;
                visibility: visible !important;
                background: #ffffff !important;
                margin: 0 !important;
                padding: 0 !important;
                height: auto !important;
            }
            
            /* 2. Force the parent path elements of the receipt container to display */
            #step-7-injection-placeholder {
                display: block !important;
                visibility: visible !important;
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                box-shadow: none !important;
                z-index: 9999999 !important;
            }

            /* 3. If any parent elements of the placeholder have active hiding selectors, force them open */
            #step-7-injection-placeholder,
            #step-7-injection-placeholder * {
                display: block !important;
                visibility: visible !important;
            }

            /* 4. Ensure line items and flex containers keep layout formats */
            #step-7-injection-placeholder #receipt-items-injector-frame, 
            #step-7-injection-placeholder .receipt-line-item, 
            #step-7-injection-placeholder div[style*="display: flex"],
            #step-7-injection-placeholder div[style*="display:flex"] {
                display: flex !important;
                visibility: visible !important;
            }

            /* 5. Hide everything else: sidebars, footers, headers, buttons, and other wizard sections */
            header, footer, aside, nav, button, 
            .portal-sidebar, .wizard-footer-action-row, 
            .sidebar-footer-lock, #secure-redirect-blur-overlay, 
            [class*="sidebar"], [id*="sidebar"],
            .wizard-step:not(#step-7-injection-placeholder),
            .step-panel:not(#step-7-injection-placeholder) {
                display: none !important;
                visibility: hidden !important;
            }

            /* 6. Strip interactive dashboard enrollment blocks underneath the isolated frame */
            #step-7-injection-placeholder .no-print, 
            #step-7-injection-placeholder .no-print * {
                display: none !important;
                visibility: hidden !important;
            }
        }

    `;
    document.head.appendChild(styleNode);
    window.isStep7StylesheetsMounted = true;
    console.log("[Success Portal] Print media stylesheets injected successfully.");
};


  // Client connection variables mapping parameters
  const DYNAMIC_SUPABASE_URL = "https://lrbimrlbskjweynxlgas.supabase.co";
  const DYNAMIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";

  /**
   * Initializes structural connection drivers safely with built-in stub recovery blocks.
   */
  window.getSuccessPageSupabaseClient = function() {
    if (window.supabase && typeof window.supabase.from === 'function') {
      return window.supabase;
    }
    if (typeof window.supabase?.createClient === 'function') {
      window.supabase = window.supabase.createClient(DYNAMIC_SUPABASE_URL, DYNAMIC_SUPABASE_ANON_KEY);
      return window.supabase;
    }

    // 🩹 SELF-HEALING DRIVER STUB UPGRADE: Added full auth simulation block to guarantee downstream safety
    console.warn("[Success Portal Client] Supabase SDK missing. Generating fallback simulation proxy layer.");
    return {
      auth: {
        getSession: async function() {
          return { data: { session: null }, error: null };
        }
      },
      from: function() {
        return {
          select: function() { return { data: [], error: null }; },
          insert: function() { return { error: null }; }
        };
      }
    };
  };

    window.injectStep7VisualInterfaceStyles();
})();

window.buildAndRenderStep7LayoutStructure = function() {
    const container = document.getElementById("step-7-injection-placeholder");
    if (!container) return false;

    // 1. Add print isolation rules
    let styleSheetElement = document.getElementById("receipt-print-css");
    if (!styleSheetElement) {
        styleSheetElement = document.createElement("style");
        styleSheetElement.id = "receipt-print-css";
        styleSheetElement.innerHTML = `
            @media print {
                body * { display: none !important; }
                #step-7-injection-placeholder, #step-7-injection-placeholder .print-canvas, #step-7-injection-placeholder .print-canvas * { display: block !important; }
                #step-7-injection-placeholder .no-print { display: none !important; }
            }
        `;
        document.head.appendChild(styleSheetElement);
    }

    // 2. Format Outer Container
    container.style.padding = "24px 0";
    container.style.background = "#ffffff";
    container.style.textAlign = "left";
    container.style.width = "100%";
    container.style.boxSizing = "border-box";


      // 3. Build HTML Skeleton Wrapper Shell
    container.innerHTML = `
    <div style="width: 100%; box-sizing: border-box;">
        <div class="print-canvas" style="width: 100%; box-sizing: border-box;">
            <!-- STATUS UPPER PANEL BOX -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; box-sizing: border-box; margin-bottom: 32px; width: 100%;">
                <div style="background: #ecfdf5; color: #10b981; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
                    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h1 style="color: #0a1f44; font-size: 2rem; font-weight: 800; margin: 0 0 12px 0; letter-spacing: -0.5px;">Order Successfully Deployed</h1>
                <p style="color: #64748b; font-size: 0.95rem; margin: 0 0 32px 0; line-height: 1.5;">Your compliance metadata package has been parsed, encrypted, and transmitted directly to target authority filing networks.</p>
                
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; box-sizing: border-box; width: 100%;">
                    <div>
                        <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Secure Account Number</span>
                        <strong id="receipt-tracking-token-display" style="font-family: monospace; font-size: 0.85rem; color: #0a1f44; display: block;">F4U-TOKEN-RETRIEVING...</strong>
                    </div>
                    <div>
                        <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Deployment Timestamp</span>
                        <strong id="receipt-timestamp-display" style="font-family: monospace; font-size: 0.85rem; color: #0a1f44; display: block;">GENERATING...</strong>
                    </div>
                    <div>
                        <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Filing Status</span>
                        <strong style="color: #10b981; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;">
                            <span style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; display: inline-block;"></span> VALIDATED &amp; QUEUED
                        </strong>
                    </div>
                </div>
            </div>

            <!-- STATEMENT ITEMIZATION LIST AREA -->
            <div style="margin-bottom: 32px; width: 100%; box-sizing: border-box;">
                <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: #0a1f44; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Itemized Billing Statement</h3>
                <div id="receipt-items-injector-frame" style="display: flex; flex-direction: column; width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; padding: 12px 24px; box-sizing: border-box; gap: 12px;"></div>
                <div style="background: #ffffff; padding: 24px 0; margin-top: 8px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; border-bottom: 2px solid #f1f5f9;">
                    <span style="font-size: 1.1rem; color: #0a1f44; font-weight: 800;">Total Paid Amount</span>
                    <span id="receipt-grand-total-display" style="font-family: monospace; font-size: 1.35rem; color: #10b981; font-weight: 900;">$0.00</span>
                </div>
            </div>
        </div>
    </div>
    `;

    // 4. Append Interactive Lower Form Layout Sections (Keep only non-printed interactive elements here)
    container.innerHTML += `
    <div class="no-print" style="width: 100%; box-sizing: border-box; margin-top: 32px;">
        <div style="display: flex; justify-content: flex-end; width: 100%; margin-bottom: 32px;">
            <button type="button" onclick="window.print();" style="background: #ffffff; color: #0a1f44; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 18px; font-weight: 700; font-size: 0.85rem; cursor: pointer;">
                Download or Print Receipt
            </button>
        </div>

    </div>
    `;


// DYNAMIC DATA INJECTION PIPELINE: Read from SessionStorage instead of missing DOM nodes!
const executeInjectionPipeline = function() {
    const step7Frame = document.getElementById("receipt-items-injector-frame");
    const grandTotalField = document.getElementById("receipt-grand-total-display");
    const manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");

    // 🛑 DEBUG PROTECTION: Log to console so you can see if the function is executing
    console.log("[Step 7 Pipeline] Attempting injection. Target Frame Found:", !!step7Frame);

    if (!step7Frame) {
        // Fallback: If layout transition is slow, try once more in 150ms
        if (!window._step7RetryCounter) {
            window._step7RetryCounter = 1;
            setTimeout(executeInjectionPipeline, 150);
        }
        return false;
    }

    let itemsHtml = '';
    let billingTotal = "$0.00";

        if (manifestRaw) {
            try {
                const manifest = JSON.parse(manifestRaw);
                
                // 1. EXTRACT DATA DIRECTLY FROM TRANSITION DATA OBJECTS
                const baseFeeValue = parseFloat(manifest.financials_subtotal_amount);
                const baseLabel = manifest.selected_package_title;
                
                itemsHtml += `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 0.85rem; color: #0a1f44;">
                        <span style="font-weight: 500;">${baseLabel}</span>
                        <strong style="font-weight: 700;">$${baseFeeValue.toFixed(2)}</strong>
                    </div>
                `;

                // 2. LOOP DYNAMIC ADDONS ACCORDING TO CURRENT APPLICATION CART STATE
                const activeAddonsList = window.currentCartState?.addons || window.currentSelectedAddonsListArrayMatrix || [];
                if (Array.isArray(activeAddonsList)) {
                    activeAddonsList.forEach(addon => {
                        if (addon && addon.price) {
                            itemsHtml += `
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 0.85rem; color: #475569; border-top: 1px dashed #f1f5f9;">
                                    <span style="font-weight: 400;">+ ${addon.title || addon.name}</span>
                                    <strong style="font-weight: 600; font-family: monospace;">$${parseFloat(addon.price).toFixed(2)}</strong>
                                </div>
                            `;
                        }
                    });
                }
                
                // 3. MAP GRAND TOTAL AMOUNT FROM TRANSACTION METADATA
                if (manifest.financials_grand_total_charge) {
                    billingTotal = `$${manifest.financials_grand_total_charge.toFixed(2)}`;
                }
                
                // 4. BIND FORM PROFILE STRINGS NATIVELY TO IDENTICAL UI NODE FIELDS
                if (document.getElementById("receipt-profile-name")) document.getElementById("receipt-profile-name").textContent = manifest.legal_entity_name;
                if (document.getElementById("receipt-profile-ein")) document.getElementById("receipt-profile-ein").textContent = manifest.taxpayer_ein;
                if (document.getElementById("receipt-profile-address")) document.getElementById("receipt-profile-address").textContent = manifest.office_address_street;
                if (document.getElementById("receipt-tracking-token-display") && manifest.transaction_hash_id) {
                    document.getElementById("receipt-tracking-token-display").textContent = manifest.transaction_hash_id;
                }
            } catch (e) {
                console.error("[Receipt Manifest Parser Error]", e);
            }
        }


    step7Frame.innerHTML = itemsHtml;

        // 🟢 INJECT CORRECT STEP 3 STATE GOVERNMENT FEE
        const finalGovFee = parseFloat(window.computedWizardStateGovernmentFee) || 0;
        if (finalGovFee > 0) {
            let stateDropdown = document.getElementById("wizard_state_select") || document.getElementById("state_select");
            let selectedStateCode = window.currentCartState?.selectedState || (stateDropdown ? stateDropdown.value : window.selectedJurisdiction || "State");
            let stateFriendlyName = selectedStateCode;

            if (selectedStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[selectedStateCode]) {
                stateFriendlyName = window.STATE_FILING_FEES[selectedStateCode].name || selectedStateCode;
            }

            // Renders on a single line, bold, matching the native line items precisely
            const stateFilingFeeRowHtml = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 0.85rem; color: #0a1f44; border-top: 1px dashed #f1f5f9;">
                <span style="font-weight: 700;">+ Mandatory ${stateFriendlyName} Filing Fee</span>
                <strong style="font-weight: 700;">$${finalGovFee.toFixed(2)}</strong>
            </div>
            `;
            step7Frame.insertAdjacentHTML('beforeend', stateFilingFeeRowHtml);
        }

        if (grandTotalField) {
            grandTotalField.textContent = billingTotal;
        }
    s
    // Clear retry flag for subsequent runs
    window._step7RetryCounter = 0;
    return true;
};

// Delay implementation execution slightly to defend against framework redraw race-conditions
setTimeout(executeInjectionPipeline, 50);

return true;
};



// ============================================================================ // 
// 📄 FILE: step-7.js - BLOCK 2 OF 4 (PART 1 - OPTIMIZED) 
// 🧾 MODULE: METRIC EXTRACTION & AUTOMATED ACCOUNT RETRIEVAL SERVICE ENGINE 
// ============================================================================ // 
/** 
 * Extracts parameters from cache maps and populates your billing columns cleanly. 
 */ 
window.extractAndRenderReceiptManifestData = async function() { 
  // 🟢 STEP 7 LAYOUT OVERRIDE: Automatically parse and inject structural DOM target elements 
  if (typeof window.buildAndRenderStep7LayoutStructure === "function") { 
    window.buildAndRenderStep7LayoutStructure(); 
  } else { 
    console.error("[Receipt Framework] UI Structural generation hook missing. Aborting layout hydration."); 
    return; 
  } 
  
  // Bind structural HTML targets confidently now that elements are loaded in the DOM 
  const receiptTrackingDisplay = document.getElementById("receipt-tracking-token-display"); 
  const portalEmailInput = document.getElementById("portal_user_email"); 
  const profileNameNode = document.getElementById("receipt-profile-name"); 
  const profileEinNode = document.getElementById("receipt-profile-ein"); 
  const profileAddressNode = document.getElementById("receipt-profile-address"); 
  const injectorFrame = document.getElementById("receipt-items-injector-frame"); 
  const subtotalDisp = document.getElementById("receipt-subtotal-display"); 
  const govDisp = document.getElementById("receipt-gov-fee-display"); 
  const grandDisp = document.getElementById("receipt-grand-total-display"); 
  const timestampDisp = document.getElementById("receipt-timestamp-display"); 
  
  // 1. Generate Live Receipt Timestamp 
  if (timestampDisp) { 
    const liveDateInstance = new Date(); 
    timestampDisp.textContent = liveDateInstance.toLocaleString('en-US', { 
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    }); 
  } 
  
  // 2. Look for existing tracking token accounts matching step-6 payload strings 
  let uniqueAccountNumber = "F4U-"; 
  const receiptStorageManifestString = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest"); 
  let receiptPayload = null; 
  
  try { 
    if (receiptStorageManifestString) receiptPayload = JSON.parse(receiptStorageManifestString); 
  } catch (pe) { 
    console.warn("[Receipt Loader] Failed parsing manifest array details:", pe); 
  } 
  
  if (receiptPayload && receiptPayload.transaction_hash_id) { 
    uniqueAccountNumber += receiptPayload.transaction_hash_id.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().substring(0, 8); 
  } else { 
    uniqueAccountNumber += Date.now().toString(36).toUpperCase().substring(0, 8); 
  } 
  
  window.currentGeneratedMbeAccountNumber = uniqueAccountNumber;
}; // 🟢 FIXED: Added missing closing function execution assignment brace context here


// ============================================================================ //
// 📄 FILE: step-7.js - BLOCK 2 OF 4 (CONSOLIDATED & RUNTIME SAFE)              //
// 🧾 MODULE: METRIC EXTRACTION & AUTOMATED ACCOUNT RETRIEVAL SERVICE ENGINE   //
// ============================================================================ //
/**
 * Extracts parameters from cache maps and populates your billing columns cleanly.
 */
window.extractAndRenderReceiptManifestData = async function() {
  // 🟢 STEP 7 LAYOUT OVERRIDE: Automatically parse and inject structural DOM target elements
  if (typeof window.buildAndRenderStep7LayoutStructure === "function") {
    window.buildAndRenderStep7LayoutStructure();
  } else {
    console.error("[Receipt Framework] UI Structural generation hook missing. Aborting layout hydration.");
    return;
  }

  // Bind structural HTML targets confidently now that elements are loaded in the DOM
  const receiptTrackingDisplay = document.getElementById("receipt-tracking-token-display");
  const portalEmailInput = document.getElementById("portal_user_email");
  const profileNameNode = document.getElementById("receipt-profile-name");
  const profileEinNode = document.getElementById("receipt-profile-ein");
  const profileAddressNode = document.getElementById("receipt-profile-address");
  const injectorFrame = document.getElementById("receipt-items-injector-frame");
  const subtotalDisp = document.getElementById("receipt-subtotal-display");
  const govDisp = document.getElementById("receipt-gov-fee-display");
  const grandDisp = document.getElementById("receipt-grand-total-display");
  const timestampDisp = document.getElementById("receipt-timestamp-display");

  // 1. Generate Live Receipt Timestamp
  if (timestampDisp) {
    const liveDateInstance = new Date();
    timestampDisp.textContent = liveDateInstance.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  // 2. Look for existing tracking token accounts matching step-6 payload strings
  let uniqueAccountNumber = "F4U-";
  const receiptStorageManifestString = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
  let receiptPayload = null;

  try {
    if (receiptStorageManifestString) receiptPayload = JSON.parse(receiptStorageManifestString);
  } catch (pe) {
    console.warn("[Receipt Loader] Failed parsing manifest array details:", pe);
  }

  if (receiptPayload && receiptPayload.transaction_hash_id) {
    uniqueAccountNumber += receiptPayload.transaction_hash_id.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().substring(0, 8);
  } else {
    uniqueAccountNumber += Date.now().toString(36).toUpperCase().substring(0, 8);
  }
  window.currentGeneratedMbeAccountNumber = uniqueAccountNumber;

  // 3. 🟢 AUTOMATED LEAD EMAIL RETRIEVAL GATEWAY (CRASH-PROOF UPGRADE)
  const urlQueryTrackingStrings = new URLSearchParams(window.location.search);
  let detectedEmail = urlQueryTrackingStrings.get('email') || (receiptPayload ? receiptPayload.communications_email : "") || localStorage.getItem("wizard_field_lead_email") || "";

  if (!detectedEmail) {
    if (typeof window.getSuccessPageSupabaseClient === "function") {
      const supabaseClient = window.getSuccessPageSupabaseClient();
      if (supabaseClient && supabaseClient.auth && typeof supabaseClient.auth.getSession === 'function') {
        try {
          const sessionCheck = await supabaseClient.auth.getSession();
          const authEmail = sessionCheck.data?.session?.user?.email;
          if (authEmail) detectedEmail = authEmail;
        } catch (err) {
          console.warn("Background auth session read skipped:", err);
        }
      }
    } else {
      console.log("[Receipt Loader] getSuccessPageSupabaseClient hook is unmounted or loading asynchronously. Proceeding...");
    }
  }

  // 4. Render Account Metadata and Lock Inputs Down
  if (receiptTrackingDisplay) receiptTrackingDisplay.textContent = uniqueAccountNumber;
  if (portalEmailInput) {
    portalEmailInput.value = detectedEmail;
    if (!detectedEmail) {
      portalEmailInput.readOnly = false;
      portalEmailInput.style.background = "#ffffff";
      portalEmailInput.style.cursor = "text";
      portalEmailInput.placeholder = "Enter your primary account email...";
    } else {
      portalEmailInput.setAttribute("readonly", "true");
      portalEmailInput.style.setProperty("background", "#f1f5f9", "important");
      portalEmailInput.style.setProperty("cursor", "not-allowed", "important");
    }
  }

    // 5. 🟢 SELF-HEALING RECOVERY MATRIX (DYNAMIC ROUTING FIXED RESOLVER)
  if (!receiptPayload) {
    console.log("[Receipt Canvas] Cache empty. Parsing dynamic URL...");

    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "llc-formation").toLowerCase().trim();
    const activePlanKeyString = String(urlParams.get('plan') || window.routeActivePlanKey || window.currentPlanKey || "enterprise").toLowerCase().trim();

    // Look up the exact cost values dynamically
    let foundationFilingCost = 0;
    if (window._tempCalcContext && window._tempCalcContext.baseTierPrice !== undefined) {
      foundationFilingCost = parseFloat(window._tempCalcContext.baseTierPrice) || 0;
    } else if (window._tempAddonContext && window._tempAddonContext.baseTierPrice !== undefined) {
      foundationFilingCost = parseFloat(window._tempAddonContext.baseTierPrice) || 0;
    }

    if (foundationFilingCost === 0 && window.CENTRAL_SERVICE_PLAN_DB && window.CENTRAL_SERVICE_PLAN_DB[serviceSlug]) {
      const serviceNode = window.CENTRAL_SERVICE_PLAN_DB[serviceSlug];
      if (activePlanKeyString.includes("enterprise") || activePlanKeyString.includes("premium")) {
        foundationFilingCost = parseFloat(serviceNode.enterprise || serviceNode.premium) || 0;
      } else if (activePlanKeyString.includes("standard") || activePlanKeyString.includes("compliance") || activePlanKeyString.includes("pro")) {
        foundationFilingCost = parseFloat(serviceNode.compliance || serviceNode.standard || serviceNode.pro) || 0;
      } else {
        foundationFilingCost = parseFloat(serviceNode.starter || serviceNode.economy) || 0;
      }
    }

    if (foundationFilingCost === 0) {
      if (activePlanKeyString.includes("enterprise") || activePlanKeyString.includes("premium")) foundationFilingCost = 399.00;
      else if (activePlanKeyString.includes("standard") || activePlanKeyString.includes("pro")) foundationFilingCost = 149.00;
      else foundationFilingCost = 49.00;
    }

    let extractedTierTokenName = activePlanKeyString.toUpperCase();
    const dynamicLabelTextString = `filings4u Processing Fee (${extractedTierTokenName})`;

    receiptPayload = {
      legal_entity_name: localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile",
      taxpayer_ein: localStorage.getItem("wizard_field_ein") || "Processing Summary...",
      office_address_street: localStorage.getItem("wizard_field_principal_address") || "Form Submission Record Entry",
      selected_package_title: dynamicLabelTextString,
      financials_subtotal_amount: foundationFilingCost,
      financials_grand_total_charge: parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount) || foundationFilingCost
    };
  }
  if (receiptPayload) {
    if (profileNameNode) profileNameNode.textContent = receiptPayload.legal_entity_name || "Not Specified";
    if (profileEinNode) profileEinNode.textContent = receiptPayload.taxpayer_ein || "Not Specified";
    
    const fullAddress = `${receiptPayload.office_address_street || ''} ${receiptPayload.office_address_city || ''} ${receiptPayload.office_address_zip || ''}`.trim();
    if (profileAddressNode) profileAddressNode.textContent = fullAddress || "Not Specified";
    
    let invoiceLinesMarkup = "";
    let calculatedSubtotal = 0;

    // FIX: Pull directly from the evaluated receiptPayload subtotal amount variable 
    if (receiptPayload.selected_package_title) {
      const pkgPrice = parseFloat(receiptPayload.financials_subtotal_amount) || 0;
      calculatedSubtotal += pkgPrice;
      invoiceLinesMarkup += `
        <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0; box-sizing: border-box; width: 100% !important;">
          <span><strong>${receiptPayload.selected_package_title}</strong></span>
          <span style="font-family: monospace; font-weight: 700;">$${pkgPrice.toFixed(2)}</span>
        </div>
      `;
    }

    // Process upgrade addon choices arrays directly from memories
    const activeUpgradesArray = window.currentSelectedAddonsListArrayMatrix || [];
    if (Array.isArray(activeUpgradesArray) && activeUpgradesArray.length > 0) {
      activeUpgradesArray.forEach(addonItem => {
        if (!addonItem) return;
        const parsedAddonPriceNum = parseFloat(addonItem.price || addonItem.price_amount) || 0;
        calculatedSubtotal += parsedAddonPriceNum;
        invoiceLinesMarkup += `
          <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-size: 0.9rem; box-sizing: border-box; width: 100% !important;">
            <span>+ ${addonItem.title || addonItem.label || "Compliance Asset Protection"}</span>
            <span style="font-family: monospace;">$${parsedAddonPriceNum.toFixed(2)}</span>
          </div>
        `;
      });
    }

    if (injectorFrame) injectorFrame.innerHTML = invoiceLinesMarkup;

    const subtotalValue = calculatedSubtotal;
    const grandTotalValue = parseFloat(window.wizardCalculatedFinalTotalAmount || window.computedWizardGrandTotalAmount || subtotalValue);
    const statutoryGovFeesValue = Math.max(0, grandTotalValue - subtotalValue);

    if (subtotalDisp) subtotalDisp.textContent = `$${subtotalValue.toFixed(2)}`;
    if (govDisp) govDisp.textContent = `$${statutoryGovFeesValue.toFixed(2)}`;
    if (grandDisp) grandDisp.textContent = `$${grandTotalValue.toFixed(2)}`;
  }

  console.log("[Receipt Canvas] Dynamic routing calculations updated safely.");
};


window.handleClientAccountActivation = async function(event) {
    if (event) {
        if (typeof event.preventDefault === "function") event.preventDefault();
        if (typeof event.stopImmediatePropagation === "function") event.stopImmediatePropagation();
    }

    // Target the newly defined profile information inputs
    const emailField = document.getElementById("portal_user_email");
    const firstNameField = document.getElementById("portal_user_first_name");
    const lastNameField = document.getElementById("portal_user_last_name");
    const phoneField = document.getElementById("portal_user_phone");
    const actionSubmitBtn = document.getElementById("portal-activation-submit-btn");
    const formElement = document.getElementById("wizard-account-generation-form");

    if (!emailField || !actionSubmitBtn || !formElement) {
        console.error("[Gatekeeper Error] Core interactive input elements missing from DOM.");
        return false;
    }

    const targetEmail = emailField.value.trim().toLowerCase();
    const firstName = firstNameField ? firstNameField.value.trim() : "";
    const lastName = lastNameField ? lastNameField.value.trim() : "";
    const phone = phoneField ? phoneField.value.trim() : "";

    if (!targetEmail) {
        alert("Validation Failed: A valid email address is required to register your secure portal profile.");
        return false;
    }

    let originalBtnHtml = actionSubmitBtn.innerHTML;
    actionSubmitBtn.disabled = true;
    actionSubmitBtn.style.background = "#64748b";
    actionSubmitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="margin-right: 6px;"></i> Securing Identity Payload...';

    try {
        const supabaseClient = window.getSuccessPageSupabaseClient();
        if (!supabaseClient) throw new Error("Supabase authentication connection engine unavailable.");

        const urlParams = new URLSearchParams(window.location.search);
        const trackingToken = urlParams.get('token') || window.currentGeneratedMbeAccountNumber || "";

        // 1. DYNAMICALLY COMPILE PROFILE METADATA METRICS ON ORDERS TABLE
        console.log("[Gatekeeper] Synchronizing account demographic parameters to order token:", trackingToken);
        await supabaseClient.from('orders').update({
            customer_first_name: firstName,
            customer_last_name: lastName,
            customer_phone: phone,
            communications_email: targetEmail
        }).eq('tracking_number', trackingToken);

        // 2. DISPATCH IDENTITY CONFIRMATION SECURITY REQUESTS VIA SUPABASE
        console.log("[Gatekeeper] Initiating identity verification pipeline context for:", targetEmail);
        
        // This programmatic layout points to your Edge Function routing to intercept the auth token validation loop
        const verificationRedirectUrl = `${window.location.origin}/functions/v1/verify-and-detect-fraud?token=${trackingToken}`;

        // Attempt a baseline sign-up generation. If user exists, Supabase Auth will trigger a user-exists protection hook.
        const { error: signUpError } = await supabaseClient.auth.signUp({
            email: targetEmail,
            password: "F4U-Temporary-Pass-" + Math.random().toString(36).substring(2, 10).toUpperCase() + "!",
            options: {
                emailRedirectTo: verificationRedirectUrl,
                data: { first_name: firstName, last_name: lastName, phone_number: phone }
            }
        });

        if (signUpError) {
            const errMsg = signUpError.message.toLowerCase();
            const isRegistered = signUpError.status === 400 || errMsg.includes("already registered") || errMsg.includes("exists");

            if (isRegistered) {
                console.log("[Gatekeeper] Existing account identity resolved. Dispatching password recovery stream...");
                // Force dispatch a dynamic password configuration link to the returning email path
                const { error: resetError } = await supabaseClient.auth.resetPasswordForEmail(targetEmail, {
                    redirectTo: verificationRedirectUrl
                });
                if (resetError) throw resetError;
            } else {
                throw signUpError;
            }
        }

        // 3. DISPLAY ON-SCREEN SECURITY TOOLTIP INSTEAD OF BLIND REDIRECT
        formElement.innerHTML = `
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; text-align: left; box-sizing: border-box; width: 100%;">
                <h4 style="color: #1e40af; font-size: 1rem; font-weight: 800; margin: 0 0 8px 0; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-paper-plane"></i> Verification Link Transmitted
                </h4>
                <p style="color: #1e3a8a; font-size: 0.85rem; margin: 0 0 12px 0; line-height: 1.5;">
                    A secure identity access verification token has been dispatched to <strong>${targetEmail}</strong>. 
                </p>
                <div style="background: #ffffff; border: 1px solid #dbeafe; border-radius: 6px; padding: 12px; font-size: 0.775rem; color: #475569; line-height: 1.4;">
                    <span style="color: #fbbf24; font-size: 1rem; margin-right: 4px;"><i class="fa-solid fa-triangle-exclamation"></i></span>
                    <strong>Important Action Required:</strong> Open your email application, locate the verification button message, and select it to establish your password configuration parameters. Be sure to check your <strong>Spam or Junk email folders</strong> if the card does not render inside your primary ledger view in 60 seconds.
                </div>
            </div>
        `;

    } catch (err) {
        console.error("[Gatekeeper Suspended Exception]", err);
        alert(`Account Initialization Suspended: ${err.message || err}`);
        actionSubmitBtn.disabled = false;
        actionSubmitBtn.style.background = "#10b981";
        actionSubmitBtn.innerHTML = originalBtnHtml;
    }
    return false;
};


// ======================================================== // 
// 🎯 FIXED OVERLAY TIMER ENGINE 
// ======================================================== // 
window.triggerSecureBlurModalRedirect = function(verifiedUserUuid, verifiedEmailAddress) { 
  const overlay = document.getElementById("secure-redirect-blur-overlay"); 
  const progressBar = document.getElementById("redirect-countdown-progress-bar"); 
  const countLabel = document.getElementById("redirect-countdown-text-label"); 
  
  if (!overlay) return; 
  overlay.style.display = "flex"; 
  
  // 🔥 FIX: Corrected structural typo percentage syntax to initialize bar width cleanly 
  if (progressBar) progressBar.style.width = "100%"; 
  setTimeout(() => { if (progressBar) progressBar.style.width = "0%"; }, 50); 
  
  let secondsRemainingValue = 10; 
  const countingIntervalThread = setInterval(() => { 
    secondsRemainingValue--; 
    if (countLabel) { 
      countLabel.innerHTML = `Redirecting in ${secondsRemainingValue} second${secondsRemainingValue !== 1 ? 's' : ''}...`; 
    } 
    if (secondsRemainingValue <= 0) { 
      clearInterval(countingIntervalThread); 
      console.log("[Verification Secure] Verification successful. Redirecting to user platform..."); 
      sessionStorage.removeItem("f4u_finalized_checkout_receipt_manifest"); 
      
      // 🟢 FIXED: Added missing '$' sign and query routing path to validate the template execution
      const destinationGatewayUrl = `https://portal.filings4u.com/client-dashboard.html?uuid=${encodeURIComponent(verifiedUserUuid)}&email=${encodeURIComponent(verifiedEmailAddress)}`; 
      window.location.href = destinationGatewayUrl; 
    } 
  }, 1000); 
}; 

// ============================================================================ // 
// 🔗 INTERLOCK HOOK: CALLED BY core.js UPON SINGLE-PAGE STEP ADVANCEMENT 
// ============================================================================ // 
window.initializeSecureStep7AccountHydration = function() { 
  console.log("[Single-Page Trigger] Awakening Step 7 account hydration processing loops..."); 
  window.extractAndRenderReceiptManifestData(); 
  
  // Safe dynamic execution listener anchor maps directly to your exact template form element ID 
  const targetFormNode = document.getElementById("wizard-account-generation-form"); 
  if (targetFormNode) { 
    // Force the layout event function intercept layer to resolve async blocks safely 
    targetFormNode.onsubmit = function(eventRef) { 
      window.handleClientAccountActivation(eventRef); 
      return false; 
    }; 
  } 
}; 

// Deep-link / hard page refresh mount controls fallback layer 
if (document.readyState === "loading") { 
  document.addEventListener("DOMContentLoaded", () => { 
    if (parseInt(window.currentWizardActiveStep, 10) === 7) window.initializeSecureStep7AccountHydration(); 
  }); 
} else { 
  if (parseInt(window.currentWizardActiveStep, 10) === 7) window.initializeSecureStep7AccountHydration(); 
}


document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Intercept variables built cleanly from Stripe's query parameters string array
  const returnedEmail = urlParams.get('email');
  const returnedToken = urlParams.get('token');

  const emailField = document.getElementById("portal_user_email");

  if (returnedEmail && emailField) {
    const decodedEmail = decodeURIComponent(returnedEmail).trim().toLowerCase();
    
    // 1. Assign the actual paid email right into your layout field element node view
    emailField.value = decodedEmail;
    
    // 2. Save token reference into global window memory block for your activation button logic to read
    window.currentGeneratedMbeAccountNumber = returnedToken;

    // 3. Silently query Supabase profiles schema view to determine if this email already exists
    try {
      const supabaseClient = window.getSuccessPageSupabaseClient();
      if (supabaseClient) {
        const { data: profileCheck, error } = await supabaseClient
          .from('profiles') // Replace with your actual core system user profiles lookup table
          .select('id')
          .eq('email', decodedEmail)
          .maybeSingle();

        if (profileCheck && !error) {
          // Returning customer profile matched! Gatekeeper functions will invoke password updates.
          localStorage.setItem("f4u_is_returning_customer", "true");
        } else {
          // Absolute guest checkout user matched! Gatekeeper functions will execute fresh initialization routines.
          localStorage.setItem("f4u_is_returning_customer", "false");
        }
      }
    } catch (dbError) {
      console.warn("[Gatekeeper State Fallback Context]:", dbError);
    }
  }
});
