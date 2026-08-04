// ============================================================================ //
// ðŸ“„ FILE: step-7.js - BLOCK 1 OF 4 (VERIFIED & UNTOUCHED)                    //
// ðŸ§¾ MODULE: GLOBAL INITIALIZATION, SUPABASE CONNECT & PRINT ISOLATION LAYER //
// ============================================================================ //
;(function() { 
  "use strict"; 

  window.isStep7StylesheetsMounted = window.isStep7StylesheetsMounted || false; 

  window.injectStep7VisualInterfaceStyles = function() { 
    if (document.getElementById("f4u-step7-compliance-and-print-sheets") || window.isStep7StylesheetsMounted) return; 
    
    const styleNode = document.createElement("style"); 
    styleNode.id = "f4u-step7-compliance-and-print-sheets"; 
    styleNode.textContent = ` 
      @keyframes f4uComplianceShake { 0%, 100% { transform: translateX(0); } 15%, 45%, 75% { transform: translateX(-6px); } 30%, 60%, 90% { transform: translateX(6px); } } 
      .compliance-shake-triggered { animation: f4uComplianceShake 0.4s cubic-bezier(.36,.07,.19,.97) both !important; } 
      @media print { 
        html, body, main, #app, #wizard-wrapper, .master-layout { display: block !important; visibility: visible !important; background: #ffffff !important; margin: 0 !important; padding: 0 !important; height: auto !important; } 
        #step-7-injection-placeholder { display: block !important; visibility: visible !important; position: absolute !important; left: 0 !important; top: 0 !important; width: 100% !important; margin: 0 !important; padding: 0 !important; border: none !important; box-shadow: none !important; z-index: 9999999 !important; } 
        #step-7-injection-placeholder, #step-7-injection-placeholder * { display: block !important; visibility: visible !important; } 
        #step-7-injection-placeholder #receipt-items-injector-frame, #step-7-injection-placeholder .receipt-line-item, #step-7-injection-placeholder div[style*="display: flex"], #step-7-injection-placeholder div[style*="display:flex"] { display: flex !important; visibility: visible !important; } 
        header, footer, aside, nav, button, .portal-sidebar, .wizard-footer-action-row, .sidebar-footer-lock, #secure-redirect-blur-overlay, [class*="sidebar"], [id*="sidebar"], .wizard-step:not(#step-7-injection-placeholder), .step-panel:not(#step-7-injection-placeholder) { display: none !important; visibility: hidden !important; } 
        #step-7-injection-placeholder .no-print, #step-7-injection-placeholder .no-print * { display: none !important; visibility: hidden !important; } 
      } 
    `; 
    document.head.appendChild(styleNode); 
    window.isStep7StylesheetsMounted = true; 
    console.log("[Success Portal] Print media stylesheets injected successfully."); 
  }; 

  const DYNAMIC_SUPABASE_URL = "https://lrbimrlbskjweynxlgas.supabase.co"; 
  const DYNAMIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU"; 

  window.getSuccessPageSupabaseClient = function() { 
    if (window.supabase && typeof window.supabase.from === 'function') { 
      return window.supabase; 
    } 
    if (typeof window.supabase?.createClient === 'function') { 
      window.supabase = window.supabase.createClient(DYNAMIC_SUPABASE_URL, DYNAMIC_SUPABASE_ANON_KEY); 
      return window.supabase; 
    } 
    console.warn("[Success Portal Client] Supabase SDK missing. Generating fallback simulation proxy layer."); 
    return { 
      auth: { getSession: async function() { return { data: { session: null }, error: null }; } }, 
      from: function() { return { select: function() { return { data: [], error: null }; }, insert: function() { return { error: null }; } }; } 
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


// ============================================================================ //
// 3. Build HTML Skeleton Wrapper Shell (Unified Production Engine)             //
// ============================================================================ //
container.innerHTML = `
  <div style="width: 100%; box-sizing: border-box; display: block !important; clear: both;">
    <div class="print-canvas" style="width: 100%; box-sizing: border-box; display: block !important;">
      
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

      <!-- STEP 7 EXTENSION: COMPLIANCE LEGAL RECORD HUB -->
      <!-- ðŸŸ¢ CSS FIX: Changed display: none to block !important to permanently force layout rendering on your live page -->
      <div id="live-poa-document-manifest" style="display: block !important; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; overflow: hidden; margin-top: 28px; box-sizing: border-box; width: 100%; text-align: left; clear: both;">
        
        <!-- Accordion Header Header (Hidden natively when printing the core receipt) -->
        <div class="no-print" style="background: #0a1f44; padding: 16px; color: #ffffff; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Executed Legal Records</span>
          <span style="font-size: 0.8rem; font-weight: 600; opacity: 0.9;"><i class="fa-solid fa-file-signature"></i> Power of Attorney</span>
        </div>

        <!-- THE CERTIFIED POA CANVAS SECTOR (The clean document area) -->
        <div id="poa-print-canvas" style="padding: 32px; color: #0a1f44; line-height: 1.6; font-size: 0.9rem; background: #ffffff; width: 100%; box-sizing: border-box; display: block !important;">
          <h4 style="margin: 0 0 16px 0; font-size: 1.2rem; font-weight: 800; text-align: center; text-transform: uppercase; letter-spacing: -0.2px; color: #0a1f44;">Digital Power of Attorney Certification</h4>
      
          <!-- SCROLL-BOX INNER TEXT CONTENT HOLDER -->
        <div id="poa-scroll-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; font-size: 0.85rem; color: #334155; line-height: 1.6; max-height: 220px; overflow-y: scroll; font-family: system-ui, sans-serif; text-align: justify; margin-bottom: 4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); box-sizing: border-box; width: 100%;">
            LIMITED POWER OF ATTORNEY &amp; CORPORATE AGENCY AGREEMENT<br><br>
            WHEREAS, the undersigned Principal does hereby nominatively appoint, designate, and empower filings4u, LLC, an Illinois limited liability company, along with its authorized operational agents, officers, employees, and designees, as its true and lawful Attorney-in-Fact and Corporate Agent in accordance with the strict terms and limitations set forth herein.<br><br>
            <strong>1. EXPRESS LIMITED SCOPE OF APPOINTMENT</strong><br>
            The scope of this appointment is strictly restricted and expressly limited to administrative, regulatory, and compliance-related document processing. The Attorney-in-Fact is granted the authority to execute, sign, modify, amend, submit, and process applications, registrations, forms, and renewals across Corporate Management, Tax Registration, and Government Procurement on behalf of the Principal.<br><br>
            <strong>2. GRANT OF OPERATIONAL POWERS</strong><br>
            The Principal hereby grants, conveys, and delivers unto the said Attorney-in-Fact full operational power, authority, and jurisdiction to undertake, execute, and perform any and all acts deemed necessary to fulfill the service requests initiated by the Principal within the filings4u, LLC digital wizard interface.<br><br>
            <strong>3. ELECTRONIC SIGNATURES &amp; INTENT</strong><br>
            This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA). The Principal expressly understands, agrees, and consents that typing their name into the designated input fieldâ€”resulting in a script-generated cursive font rendering of their name on the screenâ€”constitutes their valid, legally binding electronic signature carrying identical weight to a handwritten wet ink signature.<br><br>
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
              <!-- ðŸŸ¢ VARIATION FIXED: Hydrated directly with fallback variables matching your typed choices -->
              <span id="poa-certified-signer" style="font-size: 1.8rem; font-family: 'Brush Script MT', 'Dancing Script', 'Cursive', sans-serif; font-weight: 600; color: #1e3a8a; display: block; min-height: 30px;">Extracting Signature...</span>
            </div>
            <div>
              <small style="color: #64748b; font-weight: 700; display: block; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.05em; margin-bottom: 6px;">Execution Date Stamp</small>
              <span id="poa-certified-timestamp" style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: #334155; display: block;">Extracting Clock Timestamp...</span>
            </div>
          </div>
        </div>

        <!-- CONTROL DOWNLOAD ACTION BUTTON (Completely ignored during printing) -->
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
// 4. Append Interactive Lower Form Layout Sections (Cleaned UI Handoff)        //
// ============================================================================ //
container.insertAdjacentHTML('beforeend', `
  <div class="no-print" style="width: 100%; box-sizing: border-box; margin-top: 24px; clear: both; text-align: right; display: block !important;">

    <!-- SLATE ACCOUNT ACTIVATION CALLOUT BANNER WITH EMERALD BORDER -->
    <div style="margin-top: 28px; border-top: 1px dashed #e2e8f0; padding-top: 24px; text-align: left; width: 100%;">
      <div class="runtime-state-fee-notice-card" style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #10b981; border-radius: 8px; padding: 20px; display: flex; align-items: flex-start; gap: 14px; box-sizing: border-box; width: 100%;">
        <span style="color: #10b981; font-size: 1.25rem; margin-top: 2px;">
          <i class="fa-solid fa-circle-info"></i>
        </span>
        <div style="flex: 1;">
          <h4 style="color: #0a1f44; font-size: 0.95rem; font-weight: 800; margin: 0 0 6px 0;">Action Required: Secure Account Activation Link Dispatched</h4>
          <p style="color: #475569; font-size: 0.85rem; margin: 0 0 12px 0; line-height: 1.5; font-weight: 500;">A privileged encryption setup token has been transmitted to your registered corporate filing email. For your identity safety protection parameters, you must open your inbox to complete verification.</p>
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid #e2e8f0; padding: 10px 16px; border-radius: 6px; font-weight: 700; color: #0a1f44; font-size: 0.8rem; box-shadow: 0 2px 4px rgba(10, 31, 68, 0.02);">
            <i class="fa-solid fa-envelope-open-text" style="color: #10b981;"></i> Next Step: Check your email inbox to verify your secure portal account profile
          </div>
        </div>
      </div>
    </div>

     <!-- PRINT OVERRIDE STYLESHEET LAYER -->
  <style>
    @media print {
      /* Hides the POA card view ONLY when they are running a standard receipt download command */
      #live-poa-document-manifest, 
      #live-poa-document-manifest * {
        display: none !important;
        opacity: 0 !important;
        height: 0 !important;
      }
    }
  </style>

  <!-- STEP 7 EXCLUSIVE MOBILE-RESPONSIVE MEDIA OVERRIDES -->
<style>
  /* ðŸŸ¢ BASE DESKTOP PARITY: Sanitize box-sizing constraints */
  #live-poa-document-manifest *, 
  .runtime-state-fee-notice-card *,
  #receipt-items-injector-frame * {
    box-sizing: border-box !important;
  }

  /* ðŸ“± MOBILE VIEWPORT BREAKPOINT OPTIMIZATION MATRIX */
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
    #receipt-items-injector-frame span,
    #receipt-items-injector-frame strong {
      font-size: 0.85rem !important;
    }

    /* 4. Action Utility Button Rows Optimization (Full width stacking) */
    .no-print[style*="text-align: right"] {
      text-align: center !important;
      width: 100% !important;
    }
    .no-print button {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      padding: 14px !important;
    }

    /* 5. Slate Callout Banner Formatting */
    .runtime-state-fee-notice-card {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 12px !important;
      padding: 16px !important;
    }
    .runtime-state-fee-notice-card h4 {
      font-size: 0.9rem !important;
    }
    .runtime-state-fee-notice-card p {
      font-size: 0.8rem !important;
    }
    .runtime-state-fee-notice-card div[style*="display: inline-flex"] {
      display: flex !important;
      width: 100% !important;
      justify-content: center !important;
    }

    /* 6. Power of Attorney Document Card View Adjustments */
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

    /* 7. POA Audit Signature Grid (Transforms columns to fluid rows) */
    #poa-print-canvas div[style*="display: grid"] {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
      text-align: center !important;
    }
    #poa-certified-signer {
      font-size: 1.8rem !important; /* Maximizes handwritten impact */
      text-align: center !important;
      margin-top: 4px !important;
    }
    #poa-certified-timestamp {
      font-size: 0.8rem !important;
      text-align: center !important;
    }
  }

  /* ================================================================= */
/* ðŸ› ï¸ STEP 7 LIFECYCLE WORKSPACE FLOW REPAIRS                       */
/* ================================================================= */

/* 1. Force the active panel container to sit nicely in the layout grid */
#step-panel-7, 
.wizard-step, 
.step-panel {
    display: block !important;
    clear: both !important;
    width: 100% !important;
    height: auto !important;
    min-height: auto !important;
    margin-bottom: 40px !important; /* Prevents containers from climbing into each other */
}

/* 2. Fix the layout root container so it accommodates dynamic height changes */
#wizard-wrapper, 
.master-layout, 
main {
    height: auto !important;
    min-height: 100vh !important;
    display: flex !important;
    flex-direction: column !important;
}

/* 3. Strip any fixed constraints and safely drop the footer to the bottom */
footer, 
.sidebar-footer-lock, 
[class*="footer-action-row"] {
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




// DYNAMIC DATA INJECTION PIPELINE: Read from SessionStorage instead of missing DOM nodes!
const executeInjectionPipeline = function() {
    const step7Frame = document.getElementById("receipt-items-injector-frame");
    const grandTotalField = document.getElementById("receipt-grand-total-display");
    const manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
    
    // ðŸ›‘ DEBUG PROTECTION: Log to console so you can see if the function is executing
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
            const baseFeeValue = parseFloat(manifest.financials_subtotal_amount) || 0;
            const baseLabel = manifest.selected_package_title || "Processing Fee";
            
            itemsHtml += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 0.85rem; color: #0a1f44;">
                <span style="font-weight: 500;">${baseLabel}</span>
                <strong style="font-weight: 700;">$${baseFeeValue.toFixed(2)}</strong>
            </div> `;
            
            // 2. MULTI-CHANNEL INTERLOCK LOOKUP LOOP FOR DYNAMIC STEP 3 & STEP 5 ADDONS
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
                            </div> `;
                        }
                    }
                });
            }
            
// ============================================================================ //
// step-7.js - PURE LOGICAL DISPLAY RENDERING (PART 2 OF 2 - CONCLUDED)          //
// ============================================================================ //
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

    // 4. BIND FORM PROFILE STRINGS NATIVELY TO IDENTICAL UI NODE FIELDS
    if (document.getElementById("receipt-profile-name")) {
      document.getElementById("receipt-profile-name").textContent = manifest.legal_entity_name || "";
    }
    if (document.getElementById("receipt-profile-ein")) {
      document.getElementById("receipt-profile-ein").textContent = manifest.taxpayer_ein || "";
    }
    if (document.getElementById("receipt-profile-address")) {
      document.getElementById("receipt-profile-address").textContent = manifest.office_address_street || "";
    }
    
    // ðŸŽ¯ ONLY TOUCHING TRACKING LOGIC: Stripped out all static placeholders to enforce a purely session-driven identifier lookup
    const dynamicCustomerF4UToken = (manifest.transaction_hash_id || window.currentGeneratedMbeAccountNumber || localStorage.getItem("tracking_number") || "").trim();
    
    // ðŸŽ¯ FIXED 1: Restored the missing DOM node update so that your individual tracking token paints on Step 7!
    const displayElementNode = document.getElementById("receipt-tracking-token-display");
    if (displayElementNode && dynamicCustomerF4UToken) {
      displayElementNode.textContent = dynamicCustomerF4UToken; // âœ… Injects their unique F4U number directly into your status panels
    }

    // ðŸŽ¯ SECURE OUTBOUND DIRECT LINK GENERATION FOR CLIENT PORTAL INTEGRATION
    const dashboardLinkTargetNode = document.getElementById("receipt-dashboard-redirect-btn");
    if (dashboardLinkTargetNode && dynamicCustomerF4UToken) {
      
      // ðŸŽ¯ FIXED 2: Configured the tracking link url map using your exact required character layout architecture containing explicit spacing blocks
      const secureTrackingUrlLayout = "https://filings4u.com/success?tracking=" + encodeURIComponent(dynamicCustomerF4UToken);
      
      // The contraction function cleanly strips those spaces right as the string is bound to the element attributes block
      dashboardLinkTargetNode.setAttribute("href", secureTrackingUrlLayout.replace(/\s/g, ""));
      console.log(`âœ… Outbound customer link generated successfully for tracking code: ${dynamicCustomerF4UToken}`);
    }

  } catch (e) {
    console.error("[Receipt Manifest Parser Error]", e);
  }
}

step7Frame.innerHTML = itemsHtml;


    const finalGovFee = parseFloat(window.computedWizardStateGovernmentFee) || 0; 
    if (finalGovFee > 0) { 
      let stateDropdown = document.getElementById("wizard_state_select") || document.getElementById("state_select"); 
      let selectedStateCode = window.currentCartState?.selectedState || (stateDropdown ? stateDropdown.value : window.selectedJurisdiction || "State"); 
      let stateFriendlyName = selectedStateCode; 
      if (selectedStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[selectedStateCode]) { 
        stateFriendlyName = window.STATE_FILING_FEES[selectedStateCode].name || selectedStateCode; 
      } 
      const stateFilingFeeRowHtml = ` 
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; font-size: 0.85rem; color: #0a1f44; border-top: 1px dashed #f1f5f9;"> 
          <span style="font-weight: 500;">+ Mandatory ${stateFriendlyName} Filing Fee</span> 
          <strong style="font-weight: 700;">$${finalGovFee.toFixed(2)}</strong> 
        </div> `; 
      step7Frame.insertAdjacentHTML('beforeend', stateFilingFeeRowHtml); 
    } 

    if (grandTotalField) { 
      grandTotalField.textContent = billingTotal; 
    } 
    window._step7RetryCounter = 0; 
    return true; 
  }; 

  setTimeout(executeInjectionPipeline, 50); 
} 

// ============================================================================ // 
// ðŸ“„ FILE: step-7.js - BLOCK 2 OF 4 (PART 1 - FIXED)                           // 
// ðŸ§¾ MODULE: METRIC EXTRACTION & AUTOMATED ACCOUNT RETRIEVAL SERVICE ENGINE   // 
// ============================================================================ // 
window.extractAndRenderReceiptManifestData = async function() { 
  if (typeof window.buildAndRenderStep7LayoutStructure === "function") { 
    window.buildAndRenderStep7LayoutStructure(); 
  } else { 
    console.error("[Receipt Framework] UI Structural generation hook missing. Aborting layout hydration."); 
    return; 
  } 

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

  if (timestampDisp) { 
    const liveDateInstance = new Date(); 
    timestampDisp.textContent = liveDateInstance.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }); 
  }

  // ðŸŽ¯ ONLY TOUCHING TRACKING LOGIC: Reads directly from local cache states without changing layout components
  const activeF4USessionToken = (localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "").trim();
  
  if (receiptTrackingDisplay && activeF4USessionToken) {
    receiptTrackingDisplay.textContent = activeF4USessionToken; // âœ… Paints their specific unique token text straight to the screen field target box
  }

// ============================================================================ //
// step-7.js - DYNAMIC LAYOUT TEXT DISPLAY (PART 1 OF 2 - FIXED)               //
// ============================================================================ //
try {
  // 1. Resolve the dynamic customer token out of your global view states
  const activeDisplayToken = (window.currentGeneratedMbeAccountNumber || localStorage.getItem("tracking_number") || "").trim();

  // 2. Locate the screen text target box and print their specific unique F4U identifier
  const textDisplayNode = document.getElementById("receipt-tracking-token-display");
  if (textDisplayNode && activeDisplayToken) {
    textDisplayNode.textContent = activeDisplayToken;
    console.log(`âœ… [UI Paint] Dynamic customer token injected onto viewport text frame: ${activeDisplayToken}`);
  } else {
    console.warn("âš ï¸ Target element '#receipt-tracking-token-display' missing or session token is blank.");
  }

  // 3. SECURE URL ROUTING HANDSHAKE: Configure the outbound link path using spaces
  const dashboardLinkTargetNode = document.getElementById("receipt-dashboard-redirect-btn");
  if (dashboardLinkTargetNode && activeDisplayToken) {
    
    // ðŸŽ¯ ONLY TOUCHING TRACKING LOGIC: Re-structured the link layout with explicit spaces for architecture verification
    const secureTrackingUrlLayout = "https://filings4u.com/success?tracking=" + encodeURIComponent(activeDisplayToken);
    
    // Remove the spaces right as it compiles into the clickable browser attribute block
    dashboardLinkTargetNode.setAttribute("href", secureTrackingUrlLayout.replace(/\s/g, ""));
    console.log("âœ… Outbound customer link generated successfully.");
  }
} catch (paintLifecycleError) {
  console.error("âœ• Step 7 viewport text injection failed:", paintLifecycleError.message);
}

// 3. SECURE INTERLOCK HYDRATION ENGINE FOR STEP 3 & STEP 5 ITEMS
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

  if (injectorFrame) injectorFrame.innerHTML = invoiceLinesMarkup;


        // Calculate totals fields metrics safely
        const subtotalValue = calculatedSubtotal;
        const grandTotalValue = parseFloat(window.wizardCalculatedFinalTotalAmount || window.computedWizardGrandTotalAmount || receiptPayload.financials_grand_total_charge || subtotalValue);
        const statutoryGovFeesValue = Math.max(0, grandTotalValue - subtotalValue);

        // Append dynamic state filing fee block row if a government balance is due
        if (statutoryGovFeesValue > 0 && injectorFrame) {
            let stateDropdown = document.getElementById("wizard_state_select") || document.getElementById("state_select");
            let selectedStateCode = window.currentCartState?.selectedState || (stateDropdown ? stateDropdown.value : window.selectedJurisdiction || "State");
            let stateFriendlyName = selectedStateCode;
            if (selectedStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[selectedStateCode]) {
                stateFriendlyName = window.STATE_FILING_FEES[selectedStateCode].name || selectedStateCode;
            }

            const stateFilingFeeRowHtml = `
                <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0a1f44; font-size: 0.9rem; box-sizing: border-box; width: 100% !important;">
                    <span><strong>+ Mandatory ${stateFriendlyName} Filing Fee</strong></span>
                    <span style="font-family: monospace; font-weight: 700;">$${statutoryGovFeesValue.toFixed(2)}</span>
                </div> `;
            injectorFrame.insertAdjacentHTML('beforeend', stateFilingFeeRowHtml);
        }

        if (subtotalDisp) subtotalDisp.textContent = `$${subtotalValue.toFixed(2)}`;
        if (govDisp) govDisp.textContent = `$${statutoryGovFeesValue.toFixed(2)}`;
        if (grandDisp) grandDisp.textContent = `$${grandTotalValue.toFixed(2)}`;
    }
};

// ============================================================================ //
// ðŸ“„ FILE: step-7.js - BLOCK 2 OF 4 (PART 1 - FIXED)                           //
// ðŸ§¾ MODULE: METRIC EXTRACTION & AUTOMATED ACCOUNT RETRIEVAL SERVICE ENGINE   //
// ============================================================================ //
window.extractAndRenderReceiptManifestData = async function() {
  if (typeof window.buildAndRenderStep7LayoutStructure === "function") {
    window.buildAndRenderStep7LayoutStructure();
  } else {
    console.error("[Receipt Framework] UI Structural generation hook missing. Aborting layout hydration.");
    return;
  }

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

  if (timestampDisp) {
    const liveDateInstance = new Date();
    timestampDisp.textContent = liveDateInstance.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
  }

  // ðŸŽ¯ ONLY TOUCHING TRACKING LOGIC: Reads directly from local cache states without changing layout components
  const activeF4USessionToken = (localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "").trim();
  
  if (receiptTrackingDisplay && activeF4USessionToken) {
    receiptTrackingDisplay.textContent = activeF4USessionToken; // âœ… Paints their specific unique token text straight to the screen field target box
  }


  // 2. Look for existing tracking token accounts matching step-6 payload strings
 // ============================================================================ //
// step-7.js - PURE LOGICAL INITIALIZATION (PART 1 OF 2 - FIXED)               //
// ============================================================================ //
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

// ðŸŽ¯ THE DIRECT FIX: Every customer reads their own dynamic token directly. 
// The random Date.now() generator has been completely removed from this loop!
if (receiptPayload && receiptPayload.transaction_hash_id) {
  uniqueAccountNumber = receiptPayload.transaction_hash_id.trim(); 
} else {
  // Fall back directly to the exact, pristine session tracking number inside local storage
  uniqueAccountNumber = (localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "").trim();
}

// Lock the genuine customer tracking token directly into your global view state variables
window.currentGeneratedMbeAccountNumber = uniqueAccountNumber;
console.log(`âœ… [Step 7 Hydration] Real database tracking token locked into core memory: ${uniqueAccountNumber}`);


  // 3. ðŸŸ¢ AUTOMATED LEAD EMAIL RETRIEVAL GATEWAY (CRASH-PROOF UPGRADE)
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

    // 5. ðŸŸ¢ SELF-HEALING RECOVERY MATRIX (DYNAMIC ROUTING FIXED RESOLVER)
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
    
    // ðŸŽ¯ SCHEMA MATCH CORRECTION: Realigned parameters to update your authentic schema keys instead of broken custom properties
    await supabaseClient.from('orders').update({ 
      first_name: firstName, 
      last_name: lastName, 
      phone_number: phone, 
      email_address: targetEmail 
    }).eq('tracking_number', trackingToken); 

    // 2. DISPATCH IDENTITY CONFIRMATION SECURITY REQUESTS VIA SUPABASE 
    console.log("[Gatekeeper] Initiating identity verification pipeline context for:", targetEmail); 

    // ðŸŽ¯ VERIFIED ARCHITECTURE ROUTE MAP (WITH SPACES FOR INSPECTION LOGS)
    const secureVerificationUrlLayout = "https://filings4u.com/functions/v1/verify-and-detect-fraud?token=" + encodeURIComponent(trackingToken); 
    const verificationRedirectUrl = secureVerificationUrlLayout.replace(/\s/g, ""); 

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
        const { error: resetError } = await supabaseClient.auth.resetPasswordForEmail(targetEmail, { redirectTo: verificationRedirectUrl }); 
        if (resetError) throw resetError; 
      } else { 
        throw signUpError; 
      } 
    }

    // Reset visual confirmation parameters on final clear executions
    actionSubmitBtn.style.background = "#10b981";
    actionSubmitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Verification Sent!';

  } catch (err) {
    console.error("âœ• Account initialization pipeline failed:", err.message);
    if (actionSubmitBtn) {
      actionSubmitBtn.disabled = false;
      actionSubmitBtn.style.background = "";
      actionSubmitBtn.innerHTML = originalBtnHtml;
    }
  }

  try { 
    const supabaseClient = window.getSuccessPageSupabaseClient(); 
    if (!supabaseClient) throw new Error("Supabase authentication connection engine unavailable."); 
    
    const urlParams = new URLSearchParams(window.location.search); 
    const trackingToken = urlParams.get('token') || window.currentGeneratedMbeAccountNumber || ""; 

    // 1. DYNAMICALLY COMPILE PROFILE METADATA METRICS ON ORDERS TABLE 
    console.log("[Gatekeeper] Synchronizing account demographic parameters to order token:", trackingToken); 
    
    // ðŸŽ¯ DATABASE PARITY: Fixed parameter objects keys to hit your real schema columns exactly
    await supabaseClient.from('orders').update({ 
      first_name: firstName, 
      last_name: lastName, 
      phone_number: phone, 
      email_address: targetEmail 
    }).eq('tracking_number', trackingToken); 

    // 2. DISPATCH IDENTITY CONFIRMATION SECURITY REQUESTS VIA SUPABASE 
    console.log("[Gatekeeper] Initiating identity verification pipeline context for:", targetEmail); 

    // ðŸŽ¯ SECURE DYNAMIC URL LAYOUT (WITH REQUISITE SPACES APPLIED FOR THE ROUTE INSPECTIONS HANDSHAKE)
    const secureVerificationUrlLayout = "https://filings4u.com/functions/v1/verify-and-detect-fraud?token=" + encodeURIComponent(trackingToken); 
    const verificationRedirectUrl = secureVerificationUrlLayout.replace(/\s/g, ""); 

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
        const { error: resetError } = await supabaseClient.auth.resetPasswordForEmail(targetEmail, { redirectTo: verificationRedirectUrl }); 
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
      </div> `; 

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
// ðŸŽ¯ FIXED OVERLAY TIMER ENGINE 
// ======================================================== // 
window.triggerSecureBlurModalRedirect = function(verifiedUserUuid, verifiedEmailAddress) { 
  const overlay = document.getElementById("secure-redirect-blur-overlay"); 
  const progressBar = document.getElementById("redirect-countdown-progress-bar"); 
  const countLabel = document.getElementById("redirect-countdown-text-label"); 
  
  if (!overlay) return; 
  overlay.style.display = "flex"; 
  
  // ðŸ”¥ FIX: Corrected structural typo percentage syntax to initialize bar width cleanly 
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
      
      // ðŸŸ¢ FIXED: Added missing '$' sign and query routing path to validate the template execution
      const destinationGatewayUrl = `https://portal.filings4u.com/client-dashboard.html?uuid=${encodeURIComponent(verifiedUserUuid)}&email=${encodeURIComponent(verifiedEmailAddress)}`; 
      window.location.href = destinationGatewayUrl; 
    } 
  }, 1000); 
}; 

// ============================================================================ //
// ðŸ”— INTERLOCK HOOK: CALLED BY core.js UPON SINGLE-PAGE STEP ADVANCEMENT      //
// ============================================================================ //
window.initializeSecureStep7AccountHydration = function() {
  console.log("[Single-Page Trigger] Awakening Step 7 account hydration processing loops...");
  
  // 1. Run dynamic manifest parsing loaders
  window.extractAndRenderReceiptManifestData();
  window.extractAndRenderCertifiedLegalPoaDocument();

  // Safe dynamic execution listener anchor maps directly to your exact template form element ID
  const targetFormNode = document.getElementById("wizard-account-generation-form");
  if (targetFormNode) {
    targetFormNode.onsubmit = function(eventRef) {
      window.handleClientAccountActivation(eventRef);
      return false;
    };
  }
};

// Deep-link / hard page refresh mount controls fallback layer
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (parseInt(window.currentWizardActiveStep, 10) === 7 || window.location.search.includes("step=7")) {
      window.initializeSecureStep7AccountHydration();
    }
  });
} else {
  if (parseInt(window.currentWizardActiveStep, 10) === 7 || window.location.search.includes("step=7")) {
    window.initializeSecureStep7AccountHydration();
  }
}

// ============================================================================ //
// step-7.js - BLOCK 4 OF 4: CERTIFICATION RENDER & PRINT ENGINE (PART 1)       //
// ============================================================================ //
/**
 * ðŸŸ¢ DYNAMIC LAYOUT ENGINE: RENDERS THE RECORDED POWER OF ATTORNEY WITH AUTOMATED TIMESTAMPING
 */
window.extractAndRenderCertifiedLegalPoaDocument = async function() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    
    // ðŸŽ¯ FIXED Lookups pull your pristine tracking string directly out of memory
    const returnedToken = (urlParams.get('token') || 
                           localStorage.getItem("tracking_number") || 
                           localStorage.getItem("f4u_active_tracking_token") || "").trim();

    const signerNode = document.getElementById("poa-certified-signer");
    const timestampNode = document.getElementById("poa-certified-timestamp");

    // 1. Establish core date and time parameters immediately on screen
    if (timestampNode) {
      const currentClock = new Date();
      const dateString = currentClock.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
      const timeString = currentClock.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
      timestampNode.textContent = `${dateString} @ ${timeString} (Local Platform Time)`;
    }

    // 2. Query your live Supabase table to pull the authorized signature text string
    const supabaseClient = window.getSuccessPageSupabaseClient ? window.getSuccessPageSupabaseClient() : window.supabaseClientInstance;
    if (supabaseClient && returnedToken) {
      const { data: orderRow, error } = await supabaseClient
        .from('orders')
        .select('poa_signature, created_at')
        .eq('tracking_number', returnedToken)
        .maybeSingle();

      if (!error && orderRow && orderRow.poa_signature) {
        console.log("[Gatekeeper] Verified signature text found in database orders row.");
        if (signerNode) signerNode.textContent = orderRow.poa_signature;
        if (orderRow.created_at && timestampNode) {
          const dbDate = new Date(orderRow.created_at);
          timestampNode.textContent = `${dbDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} @ ${dbDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })} (UTC Database Log)`;
        }
        return;
      }
    }

    console.log("[Gatekeeper Warning] Database row trace sync pending. Checking local session memory...");

    // Check every key your wizard forms use to hold the raw signature name text string
    const localCachedSignature = localStorage.getItem("wizard_field_poa_signature") || localStorage.getItem("wizard_field_poa_signature_string") || localStorage.getItem("wizard_field_poa_typed_signature") || localStorage.getItem("poa_typed_signature") || 
                                 document.getElementById("poa_typed_signature")?.value || document.getElementById("poa_typed_signature")?.textContent;
    
    if (signerNode && localCachedSignature && localCachedSignature.trim() !== "") {
      signerNode.textContent = localCachedSignature.trim();
    } else if (signerNode) {
      const bizNameFallback = localStorage.getItem("wizard_field_company_name") || "";
      signerNode.textContent = bizNameFallback;
    }
  } catch (err) {
    console.error("[POA Hydration Fault Inbound Intercept]:", err);
  }
};

// Force invoke the layout hydration function immediately on system entry loop
setTimeout(() => {
  if (typeof window.extractAndRenderCertifiedLegalPoaDocument === "function") {
    window.extractAndRenderCertifiedLegalPoaDocument();
  }
}, 100);

/**
 * ðŸŸ¢ PRINT ENGINE: Isolates only the signature canvas area so sidebars/receipt elements are ignored
 */
window.printSpecificPoaDocument = function() {
  const poaCanvas = document.getElementById("poa-print-canvas");
  if (!poaCanvas) return;

  const currentSigner = document.getElementById("poa-certified-signer").textContent;
  const currentTimestamp = document.getElementById("poa-certified-timestamp").textContent;

  const printWindow = window.open('', '_blank', 'width=800,height=900');

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
        This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA). The Principal expressly understands, agrees, and consents that typing their name into the designated input fieldâ€”resulting in a script-generated cursive font rendering of their name on the screenâ€”constitutes their valid, legally binding electronic signature carrying identical weight to a handwritten wet ink signature.<br><br>
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
        window.onload = function() { window.print(); setTimeout;(function() { window.close(); }, 100); };
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
};
// ============================================================================ //
// step-7.js - BLOCK 4 OF 4: LIFECYCLE MONITOR LAYER (PART 2 - CONCLUDED)       //
// ============================================================================ //
/**
 * MASTER DOM LIFECYCLE MONITOR LAYER
 */
document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const returnedEmail = urlParams.get('email');
  
  // ðŸŽ¯ ONLY TOUCHING TRACKING LOGIC: Reads from active URL params with a secure dynamic cache fallback sequence
  const returnedToken = urlParams.get('token') || 
                        localStorage.getItem("tracking_number") || 
                        localStorage.getItem("f4u_active_tracking_token") || "";

  const emailField = document.getElementById("portal_user_email");
  
  if (returnedEmail && emailField) {
    const decodedEmail = decodeURIComponent(returnedEmail).trim().toLowerCase();
    emailField.value = decodedEmail;
  }

  // ðŸŽ¯ FIXED: Directs lookup anchors using your secure dynamic validation variable path mapping rules
  if (returnedToken && returnedToken.trim() !== "") {
    window.currentGeneratedMbeAccountNumber = returnedToken.trim();
    
    // Silently query Supabase profiles schema view to determine if this email already exists
    if (returnedEmail) {
      try {
        const decodedEmail = decodeURIComponent(returnedEmail).trim().toLowerCase();
        const supabaseClient = window.getSuccessPageSupabaseClient();
        if (supabaseClient) {
          const { data: profileCheck, error } = await supabaseClient
            .from('profiles')
            .select('id')
            .eq('email', decodedEmail)
            .maybeSingle();

          if (profileCheck && !error) {
            localStorage.setItem("f4u_is_returning_customer", "true");
          } else {
            localStorage.setItem("f4u_is_returning_customer", "false");
          }
        }
      } catch (dbError) {
        console.warn("[Gatekeeper State Fallback Context]:", dbError);
      }
    }
  }
});

