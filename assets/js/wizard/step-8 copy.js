// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 1 OF 4 (OPTIMIZED FOR DISPLAY ONLY)             //
// 🧲 MODULE: PRINT ISOLATION LAYER                                            //
// ============================================================================ //
;(function() {
  "use strict";

  window.isStep8StylesheetsMounted = window.isStep8StylesheetsMounted || false;

  window.injectStep8VisualInterfaceStyles = function() {
    if (document.getElementById("f4u-step8-compliance-and-print-sheets") || window.isStep8StylesheetsMounted) return;

    const styleNode = document.createElement("style");
    styleNode.id = "f4u-step8-compliance-and-print-sheets";
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
        html, body, main, #app, #wizard-wrapper, .master-layout {
          display: block !important;
          visibility: visible !important;
          background: #ffffff !important;
          margin: 0 !important;
          padding: 0 !important;
          height: auto !important;
        }
        #step-8-injection-placeholder {
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
        #step-8-injection-placeholder, #step-8-injection-placeholder * {
          display: block !important;
          visibility: visible !important;
          }
        #step-8-injection-placeholder #receipt-items-injector-frame, 
        #step-8-injection-placeholder .receipt-line-item, 
        #step-8-injection-placeholder div[style*="display: flex"], 
        #step-8-injection-placeholder div[style*="display:flex"] {
          display: flex !important;
          visibility: visible !important;
        }
        header, footer, aside, nav, button, .portal-sidebar, .wizard-footer-action-row, 
        .sidebar-footer-lock, #secure-redirect-blur-overlay, [class*="sidebar"], [id*="sidebar"], 
        .wizard-step:not(#step-8-injection-placeholder), .step-panel:not(#step-8-injection-placeholder) {
          display: none !important;
          visibility: hidden !important;
        }
        #step-8-injection-placeholder .no-print, #step-8-injection-placeholder .no-print * {
          display: none !important;
          visibility: hidden !important;
        }
      }
    `;
    document.head.appendChild(styleNode);
    window.isStep8StylesheetsMounted = true;
    console.log("[Success Portal] Step 8 print media stylesheets injected successfully.");
  };

  window.injectStep8VisualInterfaceStyles();
})();

// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 2 OF 4                                            //
// 🧲 MODULE: DOM CONSTRUCTOR LAYER                                            //
// ============================================================================ //
window.buildAndRenderStep8LayoutStructure = function() {
  const container = document.getElementById("step-8-injection-placeholder");
  if (!container) return false;

  // 1. Format Outer Container
  container.style.padding = "24px 0";
  container.style.background = "#ffffff";
  container.style.textAlign = "left";
  container.style.width = "100%";
  container.style.boxSizing = "border-box";

// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 3 - PART A                                        //
// 🧲 MODULE: HTML WRAPPER TEMPLATE SHELL (RECEIPT & BILLING ENGINE)            //
// ============================================================================ //

  // 3. Build HTML Skeleton Wrapper Shell (Unified Production Engine)
  container.innerHTML = `
    <div style="width: 100%; box-sizing: border-box; display: block !important; clear: both;">
      <div class="print-canvas" style="width: 100%; box-sizing: border-box; display: block !important;">
        
        <!-- STATUS UPPER PANEL BOX -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; box-sizing: border-box; margin-bottom: 32px; width: 100%;">
          <div style="background: #ecfdf5; color: #10b981; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;">
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
                <span style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; display: inline-block;"></span>
                VALIDATED &amp; QUEUED
              </strong>
            </div>
          </div>
        </div>

        <!-- STATEMENT ITEMIZATION LIST AREA -->
        <div style="margin-bottom: 32px; width: 100%; box-sizing: border-box; text-align: left; display: block !important;">
          <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: #0a1f44; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Itemized Billing Statement</h3>
          <div id="receipt-items-injector-frame" style="display: flex; flex-direction: column; width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; padding: 12px 24px; box-sizing: border-box; gap: 12px;"></div>
          <div style="background: #ffffff; padding: 24px 0; margin-top: 8px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; border-bottom: 2px solid #f1f5f9;">
            <span style="font-size: 1.1rem; color: #0a1f44; font-weight: 800;">Total Paid Amount</span>
            <span id="receipt-grand-total-display" style="font-family: monospace; font-size: 1.35rem; color: #10b981; font-weight: 900;">$0.00</span>
          </div>
        </div>

        <!-- CONTROL UTILITY ACTION ROW -->
        <div class="no-print" style="text-align: right; width: 100%; box-sizing: border-box; margin-bottom: 24px;">
          <button type="button" onclick="window.print();" style="background: #ffffff; border: 1px solid #cbd5e1; color: #0a1f44; font-weight: 700; font-size: 0.9rem; padding: 12px 24px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s;">
            <i class="fa-solid fa-print"></i> Download or Print Receipt
          </button>
        </div>

// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 3 - PART B                                        //
// 🧲 MODULE: HTML WRAPPER TEMPLATE SHELL (LEGAL RECORD & POA SECTOR)            //
// ============================================================================ //

        <!-- STEP 8 EXTENSION: COMPLIANCE LEGAL RECORD HUB -->
        <div id="live-poa-document-manifest" style="display: block !important; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; overflow: hidden; margin-top: 28px; box-sizing: border-box; width: 100%; text-align: left; clear: both;">
          
          <!-- Accordion Header (Hidden natively when printing the core receipt) -->
          <div class="no-print" style="background: #0a1f44; padding: 16px; color: #ffffff; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Executed Legal Records</span>
            <span style="font-size: 0.8rem; font-weight: 600; opacity: 0.9;"><i class="fa-solid fa-file-signature"></i> Power of Attorney</span>
          </div>

          <!-- THE CERTIFIED POA CANVAS SECTOR (The clean document area) -->
          <div id="poa-print-canvas" style="padding: 32px; color: #0a1f44; line-height: 1.6; font-size: 0.9rem; background: #ffffff; width: 100%; box-sizing: border-box; display: block !important;">
            <h4 style="margin: 0 0 16px 0; font-size: 1.2rem; font-weight: 800; text-align: center; text-transform: uppercase; letter-spacing: -0.2px; color: #0a1f44;">Digital Power of Attorney Certification</h4>
            
            <!-- SCROLL-BOX INNER TEXT CONTENT HOLDER -->
            <style>
              @media print {
                #poa-scroll-box { max-height: none !important; overflow-y: visible !important; background: #ffffff !important; border: none !important; padding: 0 !important; }
              }
            </style>
            <div id="poa-scroll-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 0.85rem; color: #334155; line-height: 1.6; max-height: 220px; overflow-y: scroll; font-family: system-ui, sans-serif; text-align: justify; margin-bottom: 4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); box-sizing: border-box; width: 100%;">
              LIMITED POWER OF ATTORNEY &amp; CORPORATE AGENCY AGREEMENT<br><br>
              WHEREAS, the undersigned Principal does hereby nominatively appoint, designate, and empower filings4u, LLC, an Illinois limited liability company, along with its authorized operational agents, officers, employees, and designees, as its true and lawful Attorney-in-Fact and Corporate Agent in accordance with the strict terms and limitations set forth herein.<br><br>
              <strong>1. EXPRESS LIMITED SCOPE OF APPOINTMENT</strong><br>
              The scope of this appointment is strictly restricted and expressly limited to administrative, regulatory, and compliance-related document processing. The Attorney-in-Fact is granted the authority to execute, sign, modify, amend, submit, and process applications, registrations, forms, and renewals across Corporate Management, Tax Registration, and Government Procurement on behalf of the Principal.<br><br>
              <strong>2. GRANT OF OPERATIONAL POWERS</strong><br>
              The Principal hereby grants, conveys, and delivers unto the said Attorney-in-Fact full operational power, authority, and jurisdiction to undertake, execute, and perform any and all acts deemed necessary to fulfill the service requests initiated by the Principal within the filings4u, LLC digital wizard interface.<br><br>
              <strong>3. ELECTRONIC SIGNATURES &amp; INTENT</strong><br>
              This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA). The Principal expressly understands, agrees, and consents that typing their name into the designated input field—resulting in a script-generated cursive font rendering of their name on the screen—constitutes their valid, legally binding electronic signature carrying identical weight to a handwritten wet ink signature.<br><br>
              <strong>4. RATIFICATION, REVOCATION, AND DURATION</strong><br>
              This agreement shall remain in full force and effect from the date of electronic execution until explicitly revoked. Revocation may occur via written physical notification delivered to filings4u, LLC corporate networks or electronic cancellation processed through verified client portal pathways.<br><br>
              Corporate Entity Information:<br>
              filings4u, LLC | A Subsidiary of Roseland Companies, LLC<br>
              Contact Support: support@filings4u.com
            </div>

            <!-- METADATA AUDIT SIGNATURE ROW -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
              <div>
                <small style="color: #64748b; font-weight: 700; display: block; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; margin-bottom: 4px;">Authorized Principal</small>
                <span id="poa-certified-signer" style="font-size: 1.8rem; font-family: 'Brush Script MT', 'Dancing Script', 'Cursive', sans-serif; font-weight: 600; color: #1e3a8a; display: block; min-height: 30px;">Extracting Signature...</span>
              </div>
              <div>
                <small style="color: #64748b; font-weight: 700; display: block; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; margin-bottom: 6px;">Execution Date Stamp</small>
                <span id="poa-certified-timestamp" style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: #334155; display: block;">Extracting Clock Timestamp...</span>
              </div>
            </div>
          </div>

          <!-- CONTROL DOWNLOAD ACTION BUTTON -->
          <div class="no-print" style="padding: 0 32px 32px 32px; background: #ffffff;">
            <button type="button" onclick="window.printSpecificPoaDocument();" style="width: 100%; padding: 14px; background: #0a1f44; color: #ffffff; border: none; border-radius: 6px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.9rem; transition: background 0.2s; box-shadow: 0 4px 12px rgba(10, 31, 68, 0.15);">
              <i class="fa-solid fa-file-pdf"></i> Download or Print Certified POA Record
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

// ============================================================================ //
// ðŸ“„ FILE: step-8.js - BLOCK 4 - PART A (REFACTORED ROUTING INTEGRATION)       //
// ðŸ§¾ MODULE: INTERACTIVE DASHBOARD ROUTING CHANNELS & MEDIA OVERRIDES         //
// ============================================================================ //

  // 4. Append Interactive Lower Form Layout Sections (Cleaned UI Handoff)
  container.insertAdjacentHTML('beforeend', `
    <div class="no-print" style="width: 100%; box-sizing: border-box; margin-top: 24px; clear: both; text-align: center; display: block !important;">
      
      <!-- FORWARD DASHBOARD ROUTING BUTTON LINKS (PREVENTS BACK-CLICK CONFUSION) -->
      <div style="margin-top: 28px; border-top: 1px dashed #e2e8f0; padding-top: 28px; display: flex; flex-direction: column; gap: 14px; max-width: 480px; margin-left: auto; margin-right: auto;">
        
        <a href="https://portal.filings4u.com/portal-login.html" class="fluid-wide-action-btn" style="display: block; width: 100%; padding: 16px 24px; background-color: #0a1f44; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 15px; box-sizing: border-box; box-shadow: 0 4px 6px -1px rgba(10, 31, 68, 0.15); transition: background 0.15s ease;">
          Enter Secure Client Portal Dashboard âž”
        </a>
        
        <a href="https://filings4u.com" style="display: block; width: 100%; padding: 14px 24px; background-color: #f1f5f9; color: #475569 !important; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px; box-sizing: border-box; transition: background 0.15s ease;">
          Return to Corporate Home Page
        </a>
        
      </div>

    </div>

    <!-- PRINT OVERRIDE STYLESHEET LAYER -->
    <style>
      @media print {
        /* Hides the POA card view ONLY when they are running a standard receipt download command */
        #live-poa-document-manifest, #live-poa-document-manifest * { 
          display: none !important; 
          opacity: 0 !important; 
          height: 0 !important; 
        }
      }
    </style>

    <!-- STEP 8 EXCLUSIVE MOBILE-RESPONSIVE MEDIA OVERRIDES -->
    <style>
      /* base desktop parity: Sanitize box-sizing constraints */
      #live-poa-document-manifest *, .fluid-wide-action-btn, #receipt-items-injector-frame * { 
        box-sizing: border-box !important; 
      }
      
      /* mobile viewport breakpoint optimization matrix */
      @media (max-width: 600px) {
        /* 1. Status Grid Re-alignment (Stacks account stats vertically) */
        .print-canvas > div:first-child > div[style*="display: grid"] { 
          grid-template-columns: 1fr !important; 
          gap: 16px !important; 
          padding: 16px !important; 
        }
        /* 2. Headline Font Scaling (Prevents awkward multi-line breaking) */
        .print-canvas h1 { 
          font-size: 1.6rem !important; 
          line-height: 1.25 !important; 
        }
        /* 3. Itemized Billing Rows Formatting */
        #receipt-items-injector-frame { 
          padding: 12px !important; 
        }
        #receipt-items-injector-frame > div { 
          flex-direction: row !important; 
          justify-content: space-between !important; 
          align-items: flex-start !important; 
          gap: 12px !important; 
        }
        #receipt-items-injector-frame span, #receipt-items-injector-frame strong { 
          font-size: 0.85rem !important; 
        }
        /* 4. Action Utility Button Rows Optimization (Full width stacking) */
        .no-print[style*="text-align: right"], .no-print[style*="text-align: center"] { 
          text-align: center !important; 
          width: 100% !important; 
        }
        .no-print button, .fluid-wide-action-btn { 
          width: 100% !important; 
          display: flex !important; 
          justify-content: center !important; 
          align-items: center !important; 
          padding: 14px !important; 
        }
        /* 5. Power of Attorney Document Card View Adjustments */
        #poa-print-canvas { padding: 20px !important; }
        #poa-print-canvas h4 { font-size: 1.05rem !important; }
        #poa-print-canvas p { font-size: 0.775rem !important; padding: 10px !important; }
        /* 6. POA Audit Signature Grid (Transforms columns to fluid rows) */
        #poa-print-canvas div[style*="display: grid"] { 
          grid-template-columns: 1fr !important; 
          gap: 20px !important; 
          text-align: center !important; 
        }
        #poa-certified-signer { 
          font-size: 1.8rem !important; 
          text-align: center !important; 
          margin-top: 4px !important; 
        }
        #poa-certified-timestamp { 
          font-size: 0.8rem !important; 
          text-align: center !important; 
        }
      }
    </style>
 
// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 4 - PART B & C (CLEANED EXECUTION ENGINE)         //
// 🧲 MODULE: DYNAMIC RECEIPT GENERATOR & LOGISTICS INJECTION ENGINE            //
// ============================================================================ //

/* ================================================================= */
/* 🛠️ STEP 8 LIFECYCLE WORKSPACE FLOW REPAIRS                       */
/* ================================================================= */
/* 1. Force the active panel container to sit nicely in the layout grid */
#step-panel-8, .wizard-step, .step-panel {
  display: block !important;
  clear: both !important;
  width: 100% !important;
  height: auto !important;
  min-height: auto !important;
  margin-bottom: 40px !important; /* Prevents containers from climbing into each other */
}
/* 2. Fix the layout root container so it accommodates dynamic height changes */
#wizard-wrapper, .master-layout, main {
  height: auto !important;
  min-height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
}
/* 3. Strip any fixed constraints and safely drop the footer to the bottom */
footer, .sidebar-footer-lock, [class*="footer-action-row"] {
  position: relative !important;
  margin-top: auto !important; /* Locks footer to the bottom of the column grid */
  padding-top: 24px !important;
  clear: both !important;
  width: 100% !important;
  top: auto !important;
  bottom: auto !important;
}
</style>
</div>
`);

// ============================================================================ //
// 📄 FILE: step-8.js - SYNTAX REPAIR MATRIX                                   //
// 🧲 MODULE: DYNAMIC RECEIPT GENERATOR ENGINE (FIXED)                          //
// ============================================================================ //

// DYNAMIC DATA INJECTION PIPELINE: Read from SessionStorage securely!
const executeInjectionPipeline = function() {
  const step8Frame = document.getElementById("receipt-items-injector-frame");
  const grandTotalField = document.getElementById("receipt-grand-total-display");
  const manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");

  console.log("[Step 8 Pipeline] Attempting injection. Target Frame Found:", !!step8Frame);

  if (!step8Frame) {
    if (!window._step8RetryCounter) {
      window._step8RetryCounter = 1;
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
      const baseFeeValue = parseFloat(manifest.financials_subtotal_amount) || 0;
      const baseLabel = manifest.selected_package_title || "Processing Fee";
      itemsHtml += `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 0.85rem; color: #0a1f44;">
          <span style="font-weight: 500;">${baseLabel}</span>
          <strong style="font-weight: 700;">$${baseFeeValue.toFixed(2)}</strong>
        </div>
      `;

      // 2. MULTI-CHANNEL INTERLOCK LOOKUP LOOP FOR DYNAMIC ADDONS
      let activeAddonsList = [];
      if (window.currentSelectedAddonsListArrayMatrix && window.currentSelectedAddonsListArrayMatrix.length > 0) {
        activeAddonsList = window.currentSelectedAddonsListArrayMatrix;
      } else if (window.currentCartState && Array.isArray(window.currentCartState.addons)) {
        activeAddonsList = window.currentCartState.addons;
      } else if (window.wizardSelections && Array.isArray(window.wizardSelections.items)) {
        activeAddonsList = window.wizardSelections.items;
      }

      if (Array.isArray(activeAddonsList)) {
        activeAddonsList.forEach(addon => {
          if (addon) {
            const parsedPrice = parseFloat(addon.price || addon.price_amount || 0);
            if (parsedPrice > 0) {
              itemsHtml += `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 0.85rem; color: #475569; border-top: 1px dashed #f1f5f9;">
                  <span style="font-weight: 400;">+ ${addon.title || addon.name || addon.label || "Compliance Upgrade Item"}</span>
                  <strong style="font-weight: 600; font-family: monospace;">$${parsedPrice.toFixed(2)}</strong>
                </div>
              `;
            }
          }
        });
      }

      // 3. MAP GRAND TOTAL AMOUNT FROM TRANSACTION METADATA
      if (manifest.financials_grand_total_charge) {
        billingTotal = `$${parseFloat(manifest.financials_grand_total_charge).toFixed(2)}`;
      } else if (window.wizardCalculatedFinalTotalAmount || window.computedWizardGrandTotalAmount) {
        const globalTotal = parseFloat(window.wizardCalculatedFinalTotalAmount || window.computedWizardGrandTotalAmount || 0);
        billingTotal = `$${globalTotal.toFixed(2)}`;
      }

      if (grandTotalField) {
        grandTotalField.textContent = billingTotal;
      }

      // 4. MAP THE CUSTOMER TRACKING CODE FROM SECURE MEMORY
      const dynamicCustomerF4UToken = (manifest.transaction_hash_id || window.currentGeneratedMbeAccountNumber || localStorage.getItem("tracking_number") || "").trim();
      if (document.getElementById("receipt-tracking-token-display") && dynamicCustomerF4UToken) {
        document.getElementById("receipt-tracking-token-display").textContent = dynamicCustomerF4UToken;
      }

    } catch (e) {
      console.error("[Receipt Manifest Parser Error]", e);
    }
  }

  // ✅ INNER LAYOUT INJECTION
  step8Frame.innerHTML = itemsHtml;
}; // ⚡ FIXED: Added the missing function execution close brace here!



// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 4 - PART D & E (CLEANED RENDERING ENGINE)        //
// 🧲 MODULE: DYNAMIC STATE FEES, GRAND TOTAL BINDING, AND LIFECYCLE WRAPUP    //
// ============================================================================ //

  // Calculate and append State Government Fees cleanly from memory
  const finalGovFee = parseFloat(window.computedWizardStateGovernmentFee) || 0;
  if (finalGovFee > 0) {
    // Read directly from manifest data objects instead of dead DOM elements
    let manifestObj = manifestRaw ? JSON.parse(manifestRaw) : {};
    let selectedStateCode = window.currentCartState?.selectedState || manifestObj.filing_state || window.selectedJurisdiction || "State";
    let stateFriendlyName = selectedStateCode;

    if (selectedStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[selectedStateCode]) {
      stateFriendlyName = window.STATE_FILING_FEES[selectedStateCode].name || selectedStateCode;
    }

    const stateFilingFeeRowHtml = `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 0.85rem; color: #0a1f44; border-top: 1px dashed #f1f5f9;">
        <span style="font-weight: 500;">+ Mandatory ${stateFriendlyName} Filing Fee</span>
        <strong style="font-weight: 700;">$${finalGovFee.toFixed(2)}</strong>
      </div>
    `;
    step8Frame.insertAdjacentHTML('beforeend', stateFilingFeeRowHtml);
  }

  if (grandTotalField) {
    grandTotalField.textContent = billingTotal;
  }

  window._step8RetryCounter = 0;
  return true;
};

// Delays template execution slightly to let the innerHTML wrapper parse fully
setTimeout(executeInjectionPipeline, 50);

/**
 * Cleaned, synchronous initialization pipeline trigger hook for Step 8.
 */
window.extractAndRenderReceiptManifestData = function() {
  if (typeof window.buildAndRenderStep8LayoutStructure === "function") {
    window.buildAndRenderStep8LayoutStructure();
  } else {
    console.error("[Receipt Framework] UI Structural generation hook missing.");
  }


  // ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 4 - PART F (VISUAL COMPLIANCE & TIMESTAMP ONLY)  //
// 🧲 MODULE: NOTIFICATION INSIGHTS & TIME CLOCK ENGINE                         //
// ============================================================================ //

// Safely prepends an explicit email verification notice box with spam filters warning callouts
const targetPlaceholder = document.getElementById("step-8-injection-placeholder");
if (targetPlaceholder) {
  const backupSpamWarningHtml = `
    <div class="no-print" style="margin-bottom: 24px; background: rgba(245, 158, 11, 0.05); border: 1px solid #f59e0b; border-radius: 8px; padding: 16px; font-size: 0.85rem; color: #b45309; display: flex; align-items: center; gap: 10px; font-weight: 500;">
      <i class="fa-solid fa-triangle-exclamation" style="font-size: 1.1rem; color: #d97706;"></i>
      <div>
        <strong>Missing your activation setup mailer?</strong> Please thoroughly check your <strong>Email Inbox</strong> and <strong>Spam / Junk folder</strong> sections if you do not observe the encryption password configuration token code delivered within 2-3 minutes.
      </div>
    </div>
  `;
  targetPlaceholder.insertAdjacentHTML('afterbegin', backupSpamWarningHtml);
}

// Bind only the verified structural display elements existing inside the DOM
const receiptTrackingDisplay = document.getElementById("receipt-tracking-token-display");
const injectorFrame = document.getElementById("receipt-items-injector-frame");
const grandDisp = document.getElementById("receipt-grand-total-display");
const timestampDisp = document.getElementById("receipt-timestamp-display");

// 1. Generate Live Receipt and POA Audit Timestamp
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

// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 4 - PART F (CLEANED RENDERING PIPELINE)           //
// 🧲 MODULE: INVOICE HYDRATION COMPUTATION LOOP                                 //
// ============================================================================ //

// 2. Extract the pristine database tracking token from the checkout manifest string
let uniqueAccountNumber = "";
const receiptStorageManifestString = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
let receiptPayload = null;

try {
  if (receiptStorageManifestString) {
    receiptPayload = JSON.parse(receiptStorageManifestString);
  }
} catch (pe) {
  console.warn("[Receipt Loader] Failed parsing manifest array details:", pe);
}

// Use the complete dynamic tracking token directly. No chopping or re-prefixing.
if (receiptPayload && receiptPayload.transaction_hash_id) {
  uniqueAccountNumber = receiptPayload.transaction_hash_id.trim();
} else {
  // Fallback to local storage parameters if session storage is temporarily unavailable
  uniqueAccountNumber = localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN-RECONCILE";
}

// Lock the pristine tracking string directly into your global view state variables
window.currentGeneratedMbeAccountNumber = uniqueAccountNumber;
console.log(`✅ [Step 8 Hydration] Successfully mapped real database tracking reference code: ${uniqueAccountNumber}`);

// 3. SECURE INTERLOCK HYDRATION ENGINE FOR ADDONS AND RECEIPT DISPLAY
if (receiptPayload) {
  let invoiceLinesMarkup = "";
  let calculatedSubtotal = 0;

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

  // Cross-checks all wizard runtime layers for missing addons arrays
  let activeUpgradesArray = [];
  if (window.currentSelectedAddonsListArrayMatrix && window.currentSelectedAddonsListArrayMatrix.length > 0) {
    activeUpgradesArray = window.currentSelectedAddonsListArrayMatrix;
  } else if (window.currentCartState && Array.isArray(window.currentCartState.addons)) {
    activeUpgradesArray = window.currentCartState.addons;
  } else if (window.wizardSelections && Array.isArray(window.wizardSelections.items)) {
    activeUpgradesArray = window.wizardSelections.items;
  }

  if (Array.isArray(activeUpgradesArray) && activeUpgradesArray.length > 0) {
    activeUpgradesArray.forEach(addonItem => {
      if (!addonItem) return;
      const parsedAddonPriceNum = parseFloat(addonItem.price || addonItem.price_amount || 0);
      if (parsedAddonPriceNum > 0) {
        calculatedSubtotal += parsedAddonPriceNum;
        invoiceLinesMarkup += `
          <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-size: 0.9rem; box-sizing: border-box; width: 100% !important;">
            <span>+ ${addonItem.title || addonItem.label || addonItem.name || "Compliance Asset Protection"}</span>
            <span style="font-family: monospace;">$${parsedAddonPriceNum.toFixed(2)}</span>
          </div>
        `;
      }
    });
  }

  if (injectorFrame) {
    injectorFrame.innerHTML = invoiceLinesMarkup;
  }

  // Calculate totals fields metrics safely
  const subtotalValue = calculatedSubtotal;
  const grandTotalValue = parseFloat(window.wizardCalculatedFinalTotalAmount || window.computedWizardGrandTotalAmount || receiptPayload.financials_grand_total_charge || subtotalValue);
  const statutoryGovFeesValue = Math.max(0, grandTotalValue - subtotalValue);

  // Append dynamic state filing fee block row if a government balance is due
  if (statutoryGovFeesValue > 0 && injectorFrame) {
    let selectedStateCode = window.currentCartState?.selectedState || receiptPayload.filing_state || window.selectedJurisdiction || "State";
    let stateFriendlyName = selectedStateCode;

    if (selectedStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[selectedStateCode]) {
      stateFriendlyName = window.STATE_FILING_FEES[selectedStateCode].name || selectedStateCode;
    }

    const stateFilingFeeRowHtml = `
      <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0a1f44; font-size: 0.9rem; box-sizing: border-box; width: 100% !important;">
        <span><strong>+ Mandatory ${stateFriendlyName} Filing Fee</strong></span>
        <span style="font-family: monospace; font-weight: 700;">$${statutoryGovFeesValue.toFixed(2)}</span>
      </div>
    `;
    injectorFrame.insertAdjacentHTML('beforeend', stateFilingFeeRowHtml);
  }

  // Safely bind grand total paid directly to screen layout
  if (grandDisp) {
    grandDisp.textContent = `$${grandTotalValue.toFixed(2)}`;
  }

  // Caches the structural compiled rows globally into memory for quick dashboard synchronizations
  window.cacheCompiledInvoiceLayoutForDashboardExport = {
    trackingNumber: uniqueAccountNumber,
    itemsLayoutMarkup: invoiceLinesMarkup,
    subtotalAmount: subtotalValue,
    governmentFees: statutoryGovFeesValue,
    grandTotalPaid: grandTotalValue,
    generatedTimestamp: new Date().toISOString()
  };
  console.log("[Portal Link Interlock] Invoice statement state cached cleanly.");
}
};

// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 4 - PART G (CLEANED LAYOUT INITIALIZATION)      //
// 🧲 MODULE: STRUCTURAL LAYOUT HYDRATION HOOK ONLY                             //
// ============================================================================ //

/**
 * Cleaned, synchronous initialization pipeline trigger hook for Step 8.
 * This runs purely to build the visual container and update text fields from memory.
 */
window.extractAndRenderReceiptManifestData = function() {
  // Automatically parse and inject structural DOM target elements safely
  if (typeof window.buildAndRenderStep8LayoutStructure === "function") {
    window.buildAndRenderStep8LayoutStructure();
    
    // Fire off the secure memory injection pipeline parsed in Block 4 - Part B/C
    if (typeof executeInjectionPipeline === "function") {
      executeInjectionPipeline();
    }
  } else {
    console.error("[Receipt Framework] UI Structural generation hook missing.");
  }
};



// ============================================================================ //
// ðŸ“„ FILE: step-8.js - BLOCK 4 - PART J                                        //
// ðŸ§¾ MODULE: TIMEOUT MODALS, STEP STEP-8 LIFE-CYCLE HOOKS, & POA REHYDRATION   //
// ============================================================================ //


// ============================================================================ //
// 📄 FILE: step-8.js - LIFE-CYCLE INTELLIGENCE & SIGNATURE BINDING HUB        //
// 🧲 MODULE: DYNAMIC DIGITAL POA CERTIFICATION DISPLAY ENGINE                   //
// ============================================================================ //

// INTERLOCK HOOK: CALLED BY wizard-master-core.js UPON VIEW CHANGE LAYOUTS
window.initializeSecureStep8AccountHydration = function() {
  console.log("[Single-Page Trigger] Awakening Step 8 success layout panel processing loops...");
  
  // 1. Run dynamic invoice builders and digital contract matchers immediately
  if (typeof window.extractAndRenderReceiptManifestData === "function") {
    window.extractAndRenderReceiptManifestData();
  }
  if (typeof window.extractAndRenderCertifiedLegalPoaDocument === "function") {
    window.extractAndRenderCertifiedLegalPoaDocument();
  }
};

// Deep-link / hard page refresh mount controls fallback layer targeting Step 8 indices
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (parseInt(window.currentWizardActiveStep, 10) === 8 || window.location.search.includes("step=8")) {
      window.initializeSecureStep8AccountHydration();
    }
  });
} else {
  if (parseInt(window.currentWizardActiveStep, 10) === 8 || window.location.search.includes("step=8")) {
    window.initializeSecureStep8AccountHydration();
  }
}

/**
 * ⚡ DYNAMIC LAYOUT ENGINE: RENDERS THE RECORDED POWER OF ATTORNEY WITH LOCAL CACHE FALLBACKS
 */
window.extractAndRenderCertifiedLegalPoaDocument = function() {
  try {
    const signerNode = document.getElementById("poa-certified-signer");
    const timestampNode = document.getElementById("poa-certified-timestamp");

    let manifestObj = {};
    try {
      const manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
      if (manifestRaw) manifestObj = JSON.parse(manifestRaw);
    } catch (e) {
      console.warn("[POA Hydrator] Manifest recovery unreadable:", e);
    }

    // 1. Establish core timestamp parameters using database logs or fallback live browser clicks
    if (timestampNode) {
      let executionDate = new Date();
      let logPrefix = "(Local Platform Time)";
      
      if (manifestObj.poa_timestamp || manifestObj.created_at) {
        executionDate = new Date(manifestObj.poa_timestamp || manifestObj.created_at);
        logPrefix = "(Certified Server Time)";
      }

      const dateString = executionDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
      const timeString = executionDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
      timestampNode.textContent = `${dateString} @ ${timeString} ${logPrefix}`;
    }

    // 2. Map signature text directly from secure wizard state memory definitions
    if (signerNode) {
      const compiledSignatureText = manifestObj.poa_signature || 
                                    window.wizardSelections?.signature || 
                                    localStorage.getItem("poa_electronic_signature") || 
                                    "Authorized Signatory Signed";
                                    
      signerNode.textContent = compiledSignatureText; // Fixed property chain runtime typo safely
      console.log("✅ [POA Isolation] Clean signature text mounted safely into preview node frame.");
    }
  } catch (err) {
    console.error("[POA Certified Layout Exception]", err);
  }
};



// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 4 - PART K (FINALIZED PRINT ENGINE)               //
// 🧲 MODULE: POA PRINT POPUP SANDBOX                                           //
// ============================================================================ //

/**
 * 🖨️ PRINT ENGINE: Isolates only the signature canvas area so sidebars/receipt elements are ignored
 */
window.printSpecificPoaDocument = function() {
  const poaCanvas = document.getElementById("poa-print-canvas");
  if (!poaCanvas) return;

  // 1. Capture the exact values currently filled inside your live preview inputs
  const currentSigner = document.getElementById("poa-certified-signer").textContent;
  const currentTimestamp = document.getElementById("poa-certified-timestamp").textContent;

  // 2. Open an isolated sandbox context browser popup frame
  const printWindow = window.open('', '_blank', 'width=800,height=900');

  // 3. Write a clean, 100% full-width document sheet layout
  printWindow.document.write(`
    <html>
      <head>
        <title>Power of Attorney Certification Record</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0a1f44; padding: 40px; line-height: 1.6; }
          h4 { font-size: 24px; text-transform: uppercase; text-align: center; margin-bottom: 20px; font-weight: 800; border-bottom: 2px solid #0a1f44; padding-bottom: 12px; }
          p { font-size: 14px; color: #334155; text-align: justify; margin-bottom: 30px; line-height: 1.6; }
          .meta-row { display: table; width: 100%; margin-top: 40px; border-top: 1px solid #cbd5e1; padding-top: 20px; }
          .meta-cell { display: table-cell; width: 50%; vertical-align: top; }
          .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; margin-bottom: 6px; letter-spacing: 0.5px; }
          .signer { font-size: 28px; font-family: "Brush Script MT", "Dancing Script", cursive, sans-serif; color: #1e3a8a; }
          .stamp { font-family: monospace; font-size: 13px; color: #334155; font-weight: 700; }
        </style>
      </head>
      <body>
        <h4>Digital Power of Attorney Certification</h4>
        <p>
          LIMITED POWER OF ATTORNEY &amp; CORPORATE AGENCY AGREEMENT<br><br>
          WHEREAS, the undersigned Principal does hereby nominatively appoint, designate, and empower filings4u, LLC, an Illinois limited liability company, along with its authorized operational agents, officers, employees, and designees, as its true and lawful Attorney-in-Fact and Corporate Agent in accordance with the strict terms and limitations set forth herein.<br><br>
          <strong>1. EXPRESS LIMITED SCOPE OF APPOINTMENT</strong><br>
          The scope of this appointment is strictly restricted and expressly limited to administrative, regulatory, and compliance-related document processing. The Attorney-in-Fact is granted the authority to execute, sign, modify, amend, submit, and process applications, registrations, forms, and renewals across Corporate Management, Tax Registration, and Government Procurement on behalf of the Principal.<br><br>
          <strong>2. GRANT OF OPERATIONAL POWERS</strong><br>
          The Principal hereby grants, conveys, and delivers unto the said Attorney-in-Fact full operational power, authority, and jurisdiction to undertake, execute, and perform any and all acts deemed necessary to fulfill the service requests initiated by the Principal within the filings4u, LLC digital wizard interface.<br><br>
          <strong>3. ELECTRONIC SIGNATURES &amp; INTENT</strong><br>
          This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA). The Principal expressly understands, agrees, and consents that typing their name into the designated input field—resulting in a script-generated cursive font rendering of their name on the screen—constitutes their valid, legally binding electronic signature carrying identical weight to a handwritten wet ink signature.<br><br>
          <strong>4. RATIFICATION, REVOCATION, AND DURATION</strong><br>
          This agreement shall remain in full force and effect from the date of electronic execution until explicitly revoked. Revocation may occur via written physical notification delivered to filings4u, LLC corporate networks or electronic cancellation processed through verified client portal pathways.<br><br>
          Corporate Entity Information:<br>
          filings4u, LLC | A Subsidiary of Roseland Companies, LLC<br>
          Contact Support: support@filings4u.com
        </p>
        <div class="meta-row">
          <div class="meta-cell">
            <div class="label">Authorized Principal</div>
            <div class="signer">${currentSigner}</div>
          </div>
          <div class="meta-cell">
            <div class="label">Execution Date Stamp</div>
            <div class="stamp">${currentTimestamp}</div>
          </div>
        </div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 100); // ✅ FIXED: Removed broken text character semicolon split here
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
};
