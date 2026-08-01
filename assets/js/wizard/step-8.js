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

// ============================================================================
// FILE: step-8.js - UNIFIED MASTER RECEIPT ENGINE (PART 1 OF 4)
// MODULE: STRUCTURAL CARD LAYOUT CONSTRUCTION
// ============================================================================
(function() {
  "use strict";

  window.buildAndRenderStep8LayoutStructure = function() {
    const container = document.getElementById("step-8-injection-placeholder");
    if (!container) return false;

    container.style.padding = "24px 0";
    container.style.background = "#ffffff";
    container.style.textAlign = "left";
    container.style.width = "100%";
    container.style.boxSizing = "border-box";

    container.innerHTML = `
      <div style="width: 100%; box-sizing: border-box; display: block !important; clear: both;">
        <div class="print-canvas" style="width: 100%; box-sizing: border-box; display: block !important;">
          
          <!-- STATUS SUMMARY HEAD OVERVIEW CARD -->
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
                  <span style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; display: inline-block;"></span>
                  VALIDATED &amp; QUEUED
                </strong>
              </div>
            </div>
          </div>
    `;
  };

 // ============================================================================
  // FILE: step-8.js - UNIFIED MASTER RECEIPT ENGINE (PART 2 OF 4 - REPAIRED)
  // MODULE: STATEMENT LEDGER, BOTTOM TOOLBAR NOTICE, & SIDE-BY-SIDE BUTTONS
  // ============================================================================
  
  const baselineMarkupString = `
        <!-- STATEMENT ITEMIZATION LEDGER CONTAINER -->
        <div style="margin-bottom: 32px; width: 100%; box-sizing: border-box; text-align: left; display: block !important;">
          <h3 style="margin: 0 0 16px 0; font-size: 1.1rem; font-weight: 800; color: #0a1f44; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Itemized Billing Statement</h3>
          <div id="receipt-items-injector-frame" style="display: flex; flex-direction: column; width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; padding: 12px 24px; box-sizing: border-box; gap: 12px;"></div>
          <div style="background: #ffffff; padding: 24px 0; margin-top: 8px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; border-bottom: 2px solid #f1f5f9;">
            <span style="font-size: 1.1rem; color: #0a1f44; font-weight: 800;">Total Paid Amount</span>
            <span id="receipt-grand-total-display" style="font-family: monospace; font-size: 1.35rem; color: #10b981; font-weight: 900;">$0.00</span>
          </div>
        </div>

        <!-- PRINTER INTERACTION ACTIONS BUTTON ROW -->
        <div class="no-print" style="text-align: right; width: 100%; box-sizing: border-box; margin-bottom: 24px;">
          <button type="button" onclick="window.print();" style="background: #ffffff; border: 1px solid #cbd5e1; color: #0a1f44; font-weight: 700; font-size: 0.9rem; padding: 12px 24px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s;">
            Download or Print Receipt
          </button>
        </div>

        <!-- POWER OF ATTORNEY CERTIFICATION PANEL -->
        <div id="live-poa-document-manifest" style="display: block !important; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; overflow: hidden; margin-top: 28px; box-sizing: border-box; width: 100%; text-align: left; clear: both;">
          <div class="no-print" style="background: #0a1f44; padding: 16px; color: #ffffff; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Executed Legal Records</span>
            <span style="font-size: 0.8rem; font-weight: 600; opacity: 0.9;">Power of Attorney</span>
          </div>

          <div id="poa-print-canvas" style="padding: 32px; color: #0a1f44; line-height: 1.6; font-size: 0.9rem; background: #ffffff; width: 100%; box-sizing: border-box; display: block !important;">
            <h4 style="margin: 0 0 16px 0; font-size: 1.2rem; font-weight: 800; text-align: center; text-transform: uppercase; letter-spacing: -0.2px; color: #0a1f44;">Digital Power of Attorney Certification</h4>
            <div id="poa-scroll-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 0.85rem; color: #334155; line-height: 1.6; max-height: 220px; overflow-y: scroll; font-family: system-ui, sans-serif; text-align: justify; margin-bottom: 4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); box-sizing: border-box; width: 100%;">
              LIMITED POWER OF ATTORNEY AND CORPORATE AGENCY AGREEMENT<br><br>
              WHEREAS, the undersigned Principal does hereby nominatively appoint, designate, and empower filings4u, LLC, as its true and lawful Attorney-in-Fact and Corporate Agent.
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
              <div>
                <small style="color: #64748b; font-weight: 700; display: block; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; margin-bottom: 4px;">Authorized Principal</small>
                <span id="poa-certified-signer" style="font-size: 1.8rem; font-family: system-ui, sans-serif; font-weight: 600; color: #1e3a8a; display: block; min-height: 30px;">Extracting Signature...</span>
              </div>
              <div>
                <small style="color: #64748b; font-weight: 700; display: block; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; margin-bottom: 6px;">Execution Date Stamp</small>
                <span id="poa-certified-timestamp" style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: #334155; display: block;">Extracting Clock Timestamp...</span>
              </div>
            </div>
          </div>

          <div class="no-print" style="padding: 0 32px 32px 32px; background: #ffffff;">
            <button type="button" onclick="window.printSpecificPoaDocument();" style="width: 100%; padding: 14px; background: #0a1f44; color: #ffffff; border: none; border-radius: 6px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.9rem; transition: background 0.2s; box-shadow: 0 4px 12px rgba(10, 31, 68, 0.15);">
              Download or Print Certified POA Record
            </button>
          </div>
        </div>
  `;

  const targetPlaceholderNode = document.getElementById("step-8-injection-placeholder");
  if (targetPlaceholderNode) {
    // 1. Append the main billing rows and contract layouts first
    targetPlaceholderNode.innerHTML += baselineMarkupString;

    // ✅ FIXED: Injected at the absolute end, placing the warning container below the forms, right above the side-by-side links
    targetPlaceholderNode.insertAdjacentHTML("beforeend", `
      <div class="no-print" style="width: 100%; box-sizing: border-box; margin-top: 40px; clear: both; text-align: center;">
        
        <!-- SPAM NOTICE CONTAINER PINNED TO THE BOTTOM OF THE SHEET -->
        <div id="f4u-step8-activation-notice-card" style="margin-bottom: 24px; background: rgba(245, 158, 11, 0.05); border: 1px solid #f59e0b; border-radius: 8px; padding: 16px; font-size: 0.85rem; color: #b45309; display: flex; align-items: center; gap: 10px; font-weight: 500; text-align: left; max-width: 600px; margin-left: auto; margin-right: auto; box-sizing: border-box;">
          <div>
            <strong>Missing your activation setup mailer?</strong> Please thoroughly check your <strong>Email Inbox</strong> and <strong>Spam / Junk folder</strong> sections if you do not observe the encryption password configuration token code delivered within 2-3 minutes.
          </div>
        </div>

        <!-- PORTAL GRID NAVIGATION ACTIONS DIRECTORY -->
        <div style="margin-top: 24px; border-top: 1px dashed #e2e8f0; padding-top: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; max-width: 600px; margin-left: auto; margin-right: auto; box-sizing: border-box;">
          <a href="https://filings4u.com" class="fluid-wide-action-btn" style="display: flex; align-items: center; justify-content: center; width: 100%; padding: 16px 24px; background-color: #0a1f44; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px; box-sizing: border-box; box-shadow: 0 4px 6px -1px rgba(10, 31, 68, 0.15); transition: background 0.15s ease;">
            Enter Secure Client Portal Dashboard
          </a>
          <a href="https://filings4u.com" style="display: flex; align-items: center; justify-content: center; width: 100%; padding: 16px 24px; background-color: #f1f5f9; color: #475569 !important; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 14px; box-sizing: border-box; transition: background 0.15s ease;">
            Return to Corporate Home Page
          </a>
        </div>
      </div>
    `);
  }
})();


// ============================================================================
// FILE: step-8.js - STYLESHEET LAYER FIX (SYNTAX PROOFED)
// MODULE: DESKTOP AND MOBILE LAYOUT OVERRIDES
// ============================================================================

const injectionStyleNode = document.createElement("style");
injectionStyleNode.id = "step8-layout-viewport-overrides";
injectionStyleNode.textContent = `
  @media print {
    #live-poa-document-manifest, #live-poa-document-manifest * {
      display: none !important;
      opacity: 0 !important;
      height: 0 !important;
    }
  }

  #live-poa-document-manifest *, .fluid-wide-action-btn, #receipt-items-injector-frame * {
    box-sizing: border-box !important;
  }

  @media (max-width: 600px) {
    .print-canvas > div:first-child > div[style*="display: grid"] {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
      padding: 16px !important;
    }
    .print-canvas h1 {
      font-size: 1.6rem !important;
      line-height: 1.25 !important;
    }
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
    #poa-print-canvas {
      padding: 20px !important;
    }
    #poa-print-canvas h4 {
      font-size: 1.05rem !important;
    }
    #poa-print-canvas p {
      font-size: 0.775rem !important;
      padding: 10px !important;
    }
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

  #step-panel-8, .wizard-step, .step-panel {
    display: block !important;
    clear: both !important;
    width: 100% !important;
    height: auto !important;
    min-height: auto !important;
    margin-bottom: 40px !important;
  }
  #wizard-wrapper, .master-layout, main {
    height: auto !important;
    min-height: 100vh !important;
    display: flex !important;
    flex-direction: column !important;
  }
  footer, .sidebar-footer-lock, [class*="footer-action-row"] {
    position: relative !important;
    margin-top: auto !important;
    padding-top: 24px !important;
    clear: both !important;
    width: 100% !important;
    top: auto !important;
    bottom: auto !important;
  }
`;

document.head.appendChild(injectionStyleNode);

// ============================================================================
// FILE: step-8.js - SYNTAX REPAIR MATRIX
// MODULE: DYNAMIC RECEIPT GENERATOR ENGINE (FIXED MAPS)
// ============================================================================

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

  let itemsHtml = "";
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

      // 4. MAP THE CUSTOMER TRACKING CODE FROM SECURE MEMORY (FIXED PROPERTY FIELD TARGET TO RESOLVE ISSUE 2)
      const dynamicCustomerF4UToken = (manifest.tracking_number || manifest.transaction_hash_id || window.currentGeneratedMbeAccountNumber || localStorage.getItem("tracking_number") || "").trim();
      
      if (document.getElementById("receipt-tracking-token-display") && dynamicCustomerF4UToken) {
        document.getElementById("receipt-tracking-token-display").textContent = dynamicCustomerF4UToken;
      }

    } catch (e) {
      console.error("[Receipt Manifest Parser Error]", e);
    }
  }

  // INNER LAYOUT INJECTION
  step8Frame.innerHTML = itemsHtml;
};



// ============================================================================ //
// 📄 FILE: step-8.js - BLOCK 4 - PART D & E (FIXED & CONTAINED)                //
// 🧲 MODULE: DYNAMIC STATE FEES & LIFECYCLE INITIALIZER                       //
// ============================================================================ //

// Cleaned, synchronous initialization pipeline trigger hook for Step 8.
window.extractAndRenderReceiptManifestData = function() {
  if (typeof window.buildAndRenderStep8LayoutStructure === "function") {
    window.buildAndRenderStep8LayoutStructure();
    
    // Safely fire the injection pipeline now that elements are generated in the DOM
    if (typeof executeInjectionPipeline === "function") {
      setTimeout(executeInjectionPipeline, 50);
    }
  } else {
    console.error("[Receipt Framework] UI Structural generation hook missing.");
  }
};

// Isolated helper to safely append government fees inside the active frame
window.injectStateFilingFeesIntoReceipt = function(step8Frame, grandTotalField, billingTotal) {
  const finalGovFee = parseFloat(window.computedWizardStateGovernmentFee) || 0;
  if (!step8Frame) return;

  if (finalGovFee > 0) {
    const manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
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
};

  // ============================================================================
  // FILE: step-8.js - UNIFIED MASTER RECEIPT ENGINE (PART 3 OF 4)
  // MODULE: INVOICE STATEMENT DATA HYDRATION LAYER
  // ============================================================================

  window.computeInvoiceHydrationLoop = function() {
    const activeInjectorFrame = document.getElementById("receipt-items-injector-frame");
    const activeGrandDisp = document.getElementById("receipt-grand-total-display");
    const activeTrackingDisplay = document.getElementById("receipt-tracking-token-display");
    const activeTimestampDisp = document.getElementById("receipt-timestamp-display");

    const manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
    let manifestPayload = null;

    try {
      if (manifestRaw) manifestPayload = JSON.parse(manifestRaw);
    } catch (pe) {
      console.warn("Failed parsing manifest content", pe);
    }

    // Capture and mount precise tracking token reference codes
    const uniqueAccountNumber = manifestPayload?.tracking_number || localStorage.getItem("tracking_number") || "F4U-PROCESSING";
    if (activeTrackingDisplay) {
      activeTrackingDisplay.textContent = uniqueAccountNumber.trim();
    }

    // Mount real-time execution clock date stamps
    if (activeTimestampDisp) {
      const liveDate = new Date();
      activeTimestampDisp.textContent = liveDate.toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit", hour12: true });
    }

    if (manifestPayload && activeInjectorFrame) {
      let invoiceLinesMarkup = "";
      let calculatedSubtotal = 0;

      if (manifestPayload.financials_subtotal_amount) {
        const pkgPrice = parseFloat(manifestPayload.financials_subtotal_amount) || 0;
        calculatedSubtotal += pkgPrice;
        invoiceLinesMarkup += `
          <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 0.9rem; color: #0a1f44; box-sizing: border-box; width: 100% !important;">
            <span><strong>${manifestPayload.selected_package_title || "Processing Fee"}</strong></span>
            <span style="font-family: monospace; font-weight: 700;">$${pkgPrice.toFixed(2)}</span>
          </div>
        `;
      }

      let activeUpgradesArray = window.currentSelectedAddonsListArrayMatrix || window.currentCartState?.addons || window.wizardSelections?.items || [];
      if (Array.isArray(activeUpgradesArray)) {
        activeUpgradesArray.forEach(addonItem => {
          if (!addonItem) return;
          const addonPrice = parseFloat(addonItem.price || addonItem.price_amount || 0);
          if (addonPrice > 0) {
            calculatedSubtotal += addonPrice;
            invoiceLinesMarkup += `
              <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-size: 0.85rem; box-sizing: border-box; width: 100% !important;">
                <span>+ ${addonItem.title || addonItem.label || addonItem.name || "Compliance Upgrade"}</span>
                <span style="font-family: monospace;">$${addonPrice.toFixed(2)}</span>
              </div>
            `;
          }
        });
      }

      activeInjectorFrame.innerHTML = invoiceLinesMarkup;

      const grandTotalValue = parseFloat(window.wizardCalculatedFinalTotalAmount || window.computedWizardGrandTotalAmount || manifestPayload.financials_grand_total_charge || calculatedSubtotal);
      const statutoryGovFeesValue = Math.max(0, grandTotalValue - calculatedSubtotal);

      if (statutoryGovFeesValue > 0) {
        let selectedStateCode = window.currentCartState?.selectedState || manifestPayload.filing_state || window.selectedJurisdiction || "State";
        const stateFilingFeeRowHtml = `
          <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0a1f44; font-size: 0.9rem; box-sizing: border-box; width: 100% !important;">
            <span><strong>+ Mandatory ${selectedStateCode} Filing Fee</strong></span>
            <span style="font-family: monospace; font-weight: 700;">$${statutoryGovFeesValue.toFixed(2)}</span>
          </div>
        `;
        activeInjectorFrame.insertAdjacentHTML("beforeend", stateFilingFeeRowHtml);
      }

      if (activeGrandDisp) {
        activeGrandDisp.textContent = `$${grandTotalValue.toFixed(2)}`;
      }
    }
 
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



// ============================================================================
// FILE: step-8.js - BLOCK 4 - PART G (CLEANED LAYOUT INITIALIZATION)
// MODULE: STRUCTURAL LAYOUT HYDRATION HOOK ONLY
// ============================================================================

window.extractAndRenderReceiptManifestData = function() {
  if (typeof window.buildAndRenderStep8LayoutStructure === "function") {
    window.buildAndRenderStep8LayoutStructure();
    
    if (typeof executeInjectionPipeline === "function") {
      executeInjectionPipeline();
    }
    
    // ✅ TRIGGER THE CALCULATOR HOOK: Fire off the invoice line items block we fixed in Part F
    if (typeof window.computeInvoiceHydrationLoop === "function") {
      window.computeInvoiceHydrationLoop();
    }
  } else {
    console.error("[Receipt Framework] UI Structural generation hook missing.");
  }
};

 // 5️⃣ SYSTEM LIFECYCLE DISPATCH INITIALIZER: Awakes processing loops instantly on step mount
  window.initializeSecureStep8AccountHydration = function() {
    console.log("Awakening Step 8 success layout panel processes...");
    window.buildAndRenderStep8LayoutStructure();
    window.computeInvoiceHydrationLoop();
    window.extractAndRenderCertifiedLegalPoaDocument();
  };

  // Dynamic hard refresh execution gate check routing controls
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      if (window.location.search.includes("step=8") || parseInt(window.currentWizardActiveStep, 10) === 8) {
        window.initializeSecureStep8AccountHydration();
      }
    });
  } else {
    if (window.location.search.includes("step=8") || parseInt(window.currentWizardActiveStep, 10) === 8) {
      window.initializeSecureStep8AccountHydration();
    }
  }


  // ============================================================================
  // FILE: step-8.js - UNIFIED MASTER RECEIPT ENGINE (PART 4 OF 4)
  // MODULE: POA CERTIFICATION REHYDRATOR & PRINT POPUP ENGINE
  // ============================================================================

  // 3️⃣ CONTRACT REHYDRATOR: Pulls user name safely into the cursive signatures display panel
  window.extractAndRenderCertifiedLegalPoaDocument = function() {
    const signerNode = document.getElementById("poa-certified-signer");
    const timestampNode = document.getElementById("poa-certified-timestamp");
    
    var rawFirstName = localStorage.getItem("wizard_field_first_name") || localStorage.getItem("first_name") || "";
    var rawLastName = localStorage.getItem("wizard_field_last_name") || localStorage.getItem("last_name") || "";
    
    if (signerNode) {
      if (rawFirstName || rawLastName) {
        signerNode.textContent = (rawFirstName + " " + rawLastName).trim();
      } else {
        signerNode.textContent = "Authorized Principal Signatory";
      }
    }

    if (timestampNode) {
      const liveClock = new Date();
      timestampNode.textContent = liveClock.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }) + " @ " + liveClock.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + " (Certified Secure Handoff)";
    }
  };

  // 4️⃣ POPUP PRINTER UTILITY GATEWAY
  window.printSpecificPoaDocument = function() {
    const currentSigner = document.getElementById("poa-certified-signer")?.textContent || "Authorized Principal";
    const currentTimestamp = document.getElementById("poa-certified-timestamp")?.textContent || "";
    const printWindow = window.open("", "_blank", "width=800,height=900");

    printWindow.document.write(`
      <html>
        <head>
          <title>Power of Attorney Certification Record</title>
          <style>
            body { font-family: system-ui, sans-serif; color: #0a1f44; padding: 40px; line-height: 1.6; }
            h4 { font-size: 24px; text-transform: uppercase; text-align: center; margin-bottom: 20px; font-weight: 800; border-bottom: 2px solid #0a1f44; padding-bottom: 12px; }
            p { font-size: 14px; color: #334155; text-align: justify; margin-bottom: 30px; }
            .meta-row { display: table; width: 100%; margin-top: 40px; border-top: 1px solid #cbd5e1; padding-top: 20px; }
            .meta-cell { display: table-cell; width: 50%; vertical-align: top; }
            .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; margin-bottom: 6px; }
            .signer { font-size: 26px; font-style: italic; color: #1e3a8a; font-weight: 700; }
            .stamp { font-family: monospace; font-size: 13px; color: #334155; font-weight: 700; }
          </style>
        </head>
        <body>
          <h4>Digital Power of Attorney Certification</h4>
          <p>LIMITED POWER OF ATTORNEY AND CORPORATE AGENCY AGREEMENT<br><br>The scope of this appointment is restricted and expressly limited to administrative and regulatory compliance processing.</p>
          <div class="meta-row">
            <div class="meta-cell"><div class="label">Authorized Principal</div><div class="signer">${currentSigner}</div></div>
            <div class="meta-cell"><div class="label">Execution Date Stamp</div><div class="stamp">${currentTimestamp}</div></div>
          </div>
          <script>window.onload = function() { window.print(); setTimeout(function() { window.close(); }, 100); };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };



// ============================================================================
// FILE: step-8.js - STATEMENT & DYNAMIC CERTIFICATION LAYOUT (PART 2 OF 3)
// MODULE: DATA PROCESSING REHYDRATION PIPELINE
// ============================================================================
window.rehydrateStatementAndPoaLayers = function() {
  const activeInjectorFrame = document.getElementById("receipt-items-injector-frame");
  const activeGrandDisp = document.getElementById("receipt-grand-total-display");
  const liveSignerNode = document.getElementById("poa-certified-signer");
  const liveTimestampNode = document.getElementById("poa-certified-timestamp");
  
  const manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
  let manifestObj = {};

  try {
    if (manifestRaw) {
      manifestObj = JSON.parse(manifestRaw);
    }
  } catch (pe) {
    console.warn("Failed parsing manifest array details", pe);
  }

  // 1. REHYDRATE REAL SIGNATURE TEXT (FIXED PROPERTY TARGET TO RESOLVE TYPOS)
  if (liveSignerNode) {
    const realCustomerNameInput = manifestObj.poa_signature || 
                                 localStorage.getItem("wizard_field_poa_signature") || 
                                 localStorage.getItem("wizard_field_poa_typed_signature") || 
                                 localStorage.getItem("poa_electronic_signature") || 
                                 localStorage.getItem("wizard_field_first_name") || 
                                 "Authorized Principal Account";
                                 
    liveSignerNode.textContent = realCustomerNameInput.trim();
    console.log("Clean signature text mounted safely into preview node frame");
  }

  // 2. REHYDRATE SECURE CLOCK CERTIFICATION TIMESTAMPS
  if (liveTimestampNode) {
    let executionDate = new Date();
    let logPrefix = "(Local Platform Time)";
    
    if (manifestObj.poa_timestamp || manifestObj.created_at) {
      executionDate = new Date(manifestObj.poa_timestamp || manifestObj.created_at);
      logPrefix = "(Certified Server Time)";
    }
    
    const dateString = executionDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    const timeString = executionDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
    liveTimestampNode.textContent = dateString + " @ " + timeString + " " + logPrefix;
  }
};

// Delay execution slightly to ensure DOM layout engine paints container frames completely
setTimeout(function() {
  if (typeof window.rehydrateStatementAndPoaLayers === "function") {
    window.rehydrateStatementAndPoaLayers();
  }
}, 100);


// ============================================================================
// FILE: step-8.js - BLOCK 4 - PART F (VISUAL COMPLIANCE & TIMESTAMP ONLY)
// MODULE: NOTIFICATION INSIGHTS & TIME CLOCK ENGINE
// ============================================================================


// Bind only the verified structural display elements existing inside the DOM
const receiptTrackingDisplay = document.getElementById("receipt-tracking-token-display");
const injectorFrame = document.getElementById("receipt-items-injector-frame");
const grandDisp = document.getElementById("receipt-grand-total-display");
const timestampDisp = document.getElementById("receipt-timestamp-display");

// 1. Generate Live Receipt and POA Audit Timestamp
if (timestampDisp) {
  const liveDateInstance = new Date();
  timestampDisp.textContent = liveDateInstance.toLocaleString("en-US", { 
    year: "numeric", 
    month: "numeric", 
    day: "numeric", 
    hour: "numeric", 
    minute: "2-digit", 
    hour12: true 
  });
}