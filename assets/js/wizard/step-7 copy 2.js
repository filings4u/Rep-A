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

 /* ================================================================= */
 /* SCREEN ONLY LAYOUT FLOW CORRECTIONS                              */
 /* ================================================================= */
 @media screen {
     footer {
         display: block !important;
         position: relative !important;
         clear: both !important;
         width: 100% !important;
         margin-top: 50px !important;
         top: auto !important;
         bottom: auto !important;
     }
 }

 /* ================================================================= */
 /* PRINT MEDIA BREAK ISOLATION                                      */
 /* ================================================================= */
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
     #step-7-injection-placeholder, #step-7-injection-placeholder * { 
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
     /* 5. Hide everything else on print ONLY */ 
     header, footer, aside, nav, button, .portal-sidebar, .wizard-footer-action-row, .sidebar-footer-lock, #secure-redirect-blur-overlay, [class*="sidebar"], [id*="sidebar"], .wizard-step:not(#step-7-injection-placeholder), .step-panel:not(#step-7-injection-placeholder) { 
         display: none !important; 
         visibility: hidden !important; 
     } 
     /* 6. Strip interactive dashboard enrollment blocks underneath the isolated frame */ 
     #step-7-injection-placeholder .no-print, #step-7-injection-placeholder .no-print * { 
         display: none !important; 
         visibility: hidden !important; 
     } 
 } 
`;

    document.head.appendChild(styleNode);
    window.isStep7StylesheetsMounted = true;
    console.log("[Success Portal] Print media stylesheets injected successfully.");
};




    // ============================================================================ //
    // 📄 FILE: step-7.js - BLOCK 2 OF 6 (DATABASE CONNECTOR MODULE)               //
    // 🧾 MODULE: GLOBAL DATA ACCESS, CREDENTIALS MAPPING & NETWORK LAYER TRACES    //
    // ============================================================================ //
    
    // Core database communication configuration properties
    const DYNAMIC_SUPABASE_URL = "https://lrbimrlbskjweynxlgas.supabase.co";
    const DYNAMIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";

    /**
     * Initializes structural data connection drivers safely across execution pipelines.
     */
    window.getSuccessPageSupabaseClient = function() {
        // Prioritize existing global instances initialized by master layout templates
        const masterClient = window.supabaseInstance || window.supabaseClient;
        if (masterClient && typeof masterClient.from === 'function') {
            return masterClient;
        }
        if (window.supabase && typeof window.supabase.from === 'function') {
            return window.supabase;
        }
        if (typeof window.supabase?.createClient === 'function') {
            window.supabase = window.supabase.createClient(DYNAMIC_SUPABASE_URL, DYNAMIC_SUPABASE_ANON_KEY);
            return window.supabase;
        }

        console.warn("[Database Layer] Supabase SDK missing or unmounted from window tree scope.");
        return null;
    };

    
    // ============================================================================ //
    // 📄 FILE: step-7.js - BLOCK 3 OF 6 (REALIGNED PANEL WIREFRAMES - PART A)      //
    // 🧾 MODULE: CONTAINER DEPTH CALIBRATION & INLINE CONTENT CARDS                //
    // ============================================================================ //
    
    /**
     * Appends clean structural HTML layout canvases into the step 7 workspace.
     */
    window.buildAndRenderStep7LayoutStructure = function() {
        const container = document.getElementById("step-7-injection-placeholder");
        if (!container) return false;

        // Verify and load custom print stylesheets if not already present
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

        // Wipe old children safely to shield view grids against template duplication errors
        container.innerHTML = "";
        
        // 🟢 ISSUE 3 REPAIRED: Reset container styling parameters to grow vertically and prevent cropping cutoff masks
        container.style.padding = "10px 20px 40px 20px";
        container.style.background = "transparent"; 
        container.style.textAlign = "left";
        container.style.width = "100%";
        container.style.height = "auto";
        container.style.minHeight = "100%";
        container.style.display = "block";
        container.style.clear = "both";
        container.style.boxSizing = "border-box";

        // Append Upper Layout Status Blocks with strict structural width constraints
        container.innerHTML = `
        <div style="width: 100%; box-sizing: border-box; display: block !important; clear: both; float: none; margin: 0 auto; max-width: 820px; height: auto;">
            <div class="print-canvas" style="width: 100%; box-sizing: border-box; display: block !important; height: auto;">
                
                <!-- STATUS UPPER PANEL BOX -->
                <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-sizing: border-box; margin-bottom: 24px; width: 100%; display: block; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
                    <div style="background: #ecfdf5; color: #10b981; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                        <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h1 style="color: #0a1f44; font-size: 1.75rem; font-weight: 800; margin: 0 0 8px 0; letter-spacing: -0.5px;">Order Successfully Deployed</h1>
                    <p style="color: #64748b; font-size: 0.9rem; margin: 0 0 24px 0; line-height: 1.4;">Your compliance metadata package has been parsed, encrypted, and transmitted directly to target authority filing networks.</p>
                    
                    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; box-sizing: border-box; width: 100%;">
                        <div>
                            <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 2px;">Secure Account Number</span>
                            <strong id="receipt-tracking-token-display" style="font-family: monospace; font-size: 0.8rem; color: #0a1f44; display: block;">F4U-TOKEN-RETRIEVING...</strong>
                        </div>
                        <div>
                            <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 2px;">Deployment Timestamp</span>
                            <strong id="receipt-timestamp-display" style="font-family: monospace; font-size: 0.8rem; color: #0a1f44; display: block;">GENERATING...</strong>
                        </div>
                        <div>
                            <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 2px;">Filing Status</span>
                            <strong style="color: #10b981; font-size: 0.8rem; display: flex; align-items: center; gap: 4px;">
                                <span style="width: 5px; height: 5px; background: #10b981; border-radius: 50%; display: inline-block;"></span> VALIDATED &amp; QUEUED
                            </strong>
                        </div>
                    </div>
                </div>
        `;


// ============================================================================ //
// 📄 FILE: step-7.js - BLOCK 4 OF 6 (REALIGNED PANEL WIREFRAMES - PART B)     //
// 🧾 MODULE: ISOLATED RECEIPT CARDS, STACKED FLOWS & CLEARING OVERLAY BLOCKS  //
// ============================================================================ //

  // Append itemized billing grids and Power of Attorney signature audit frames
  container.innerHTML += `
    <!-- STATEMENT ITEMIZATION LIST AREA -->
    <div style="margin-bottom: 24px; width: 100%; box-sizing: border-box; text-align: left; display: block !important; clear: both !important; float: none !important; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <h3 style="margin: 0 0 16px 0; font-size: 1.05rem; font-weight: 800; color: #0a1f44; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Itemized Billing Statement</h3>
      
      <div id="receipt-items-injector-frame" style="display: flex; flex-direction: column; width: 100%; background: #ffffff; box-sizing: border-box; gap: 4px;"></div>
      
      <div style="background: #ffffff; padding: 16px 0 0 0; margin-top: 12px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; border-top: 2px solid #f1f5f9;">
        <span style="font-size: 1rem; color: #0a1f44; font-weight: 800;">Total Paid Amount</span>
        <span id="receipt-grand-total-display" style="font-family: monospace; font-size: 1.3rem; color: #10b981; font-weight: 900;">$0.00</span>
      </div>
    </div>

    <!-- CONTROL UTILITY ACTION ROW -->
    <div class="no-print" style="text-align: right; width: 100%; box-sizing: border-box; margin-bottom: 24px; display: block !important; clear: both !important; float: none !important;">
      <button type="button" onclick="window.print();" style="background: #ffffff; border: 1px solid #cbd5e1; color: #0a1f44; font-weight: 700; font-size: 0.85rem; padding: 10px 20px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
        Download or Print Receipt
      </button>
    </div>

    <!-- STEP 7 EXTENSION: COMPLIANCE LEGAL RECORD HUB -->
    <div id="live-poa-document-manifest" style="display: block !important; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff; overflow: hidden; margin-top: 24px; box-sizing: border-box; width: 100%; text-align: left; clear: both !important; float: none !important; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <div class="no-print" style="background: #0a1f44; padding: 14px 20px; color: #ffffff; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em;">Executed Legal Records</span>
        <span style="font-size: 0.75rem; font-weight: 600; opacity: 0.9;">Power of Attorney</span>
      </div>
      
      <div id="poa-print-canvas" style="padding: 24px; color: #0a1f44; line-height: 1.5; font-size: 0.85rem; background: #ffffff; width: 100%; box-sizing: border-box; display: block !important;">
        <h4 style="margin: 0 0 12px 0; font-size: 1.1rem; font-weight: 800; text-align: center; text-transform: uppercase; letter-spacing: -0.2px; color: #0a1f44;">Digital Power of Attorney Certification</h4>
        
        <div id="poa-scroll-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 0.8rem; color: #334155; line-height: 1.5; max-height: 160px; overflow-y: scroll; font-family: system-ui, sans-serif; text-align: justify; margin-bottom: 4px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.02); box-sizing: border-box; width: 100%;">
          LIMITED POWER OF ATTORNEY &amp; CORPORATE AGENCY AGREEMENT<br><br>
          WHEREAS, the undersigned Principal does hereby nominatively appoint, designate, and empower filings4u, LLC, an Illinois limited liability company, along with its authorized operational agents, officers, employees, and designees, as its true and lawful Attorney-in-Fact and Corporate Agent in accordance with the strict terms and limitations set forth herein.<br><br>
          <strong>1. EXPRESS LIMITED SCOPE OF APPOINTMENT</strong><br>
          The scope of this appointment is strictly restricted and expressly limited to administrative, regulatory, and compliance-related document processing. The Attorney-in-Fact is granted the authority to execute, sign, modify, amend, submit, and process applications, registrations, forms, and renewals across Corporate Management, Tax Registration, and Government Procurement on behalf of the Principal.<br><br>
          <strong>2. GRANT OF OPERATIONAL POWERS</strong><br>
          The Principal hereby grants, conveys, and delivers unto the said Attorney-in-Fact full operational power, authority, and jurisdiction to undertake, execute, and perform any and all acts deemed necessary to fulfill the service requests initiated by the Principal within the filings4u, LLC digital wizard interface.<br><br>
          <strong>3. ELECTRONIC SIGNATURES &amp; INTENT</strong><br>
          This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA). The Principal expressly understands, agrees, and consents that typing their name into the designated input field constitutes their valid, legally binding electronic signature carrying identical weight to a handwritten wet ink signature.<br><br>
          <strong>4. RATIFICATION, REVOCATION, AND DURATION</strong><br>
          This agreement shall remain in full force and effect from the date of electronic execution until explicitly revoked. Revocation may occur via written physical notification delivered to filings4u, LLC corporate networks.<br><br>
          Corporate Entity Information:<br>
          filings4u, LLC | A Subsidiary of Roseland Companies, LLC<br>
          Contact Support: support@filings4u.com
        </div>

        <!-- METADATA AUDIT SIGNATURE ROW -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; border-top: 1px solid #e2e8f0; padding-top: 16px; box-sizing: border-box; width: 100%;">
          <div>
            <small style="color: #64748b; font-weight: 700; display: block; text-transform: uppercase; font-size: 0.65rem; letter-spacing: 0.05em; margin-bottom: 2px;">Authorized Principal</small>
            <span id="poa-certified-signer" style="font-size: 1.6rem; font-family: 'Brush Script MT', 'Dancing Script', 'Cursive', sans-serif; font-weight: 600; color: #1e3a8a; display: block; min-height: 24px;">Extracting Signature...</span>
          </div>
          <div>
            <small style="color: #64748b; font-weight: 700; display: block; text-transform: uppercase; font-size: 0.65rem; letter-spacing: 0.05em; margin-bottom: 4px;">Execution Date Stamp</small>
            <span id="poa-certified-timestamp" style="font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #334155; display: block;">Extracting Clock Timestamp...</span>
          </div>
        </div>
      </div>

      <!-- CONTROL DOWNLOAD ACTION BUTTON -->
      <div class="no-print" style="padding: 0 24px 24px 24px; background: #ffffff; box-sizing: border-box; width: 100%; display: block;">
        <button type="button" onclick="window.printSpecificPoaDocument();" style="width: 100%; padding: 12px; background: #0a1f44; color: #ffffff; border: none; border-radius: 6px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.85rem; transition: background 0.2s; box-shadow: 0 4px 12px rgba(10, 31, 68, 0.15);">
          Download or Print Certified POA Record
        </button>
      </div>
    </div>
  </div>
</div>
`;

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

  return true;
};

     // ============================================================================ //
    // 📄 FILE: step-7.js - BLOCK 5 OF 6 (REPAIRED CALCULATION MATRIX LOOPS)        //
    // 🧾 MODULE: LOCAL MEMORY CAPTURE, LINE-ITEM MATRICES & BALANCE INJECTORS      //
    // ============================================================================ //

    /**
     * Extracts parameters from cache maps and populates your billing columns cleanly.
     */
    window.extractAndRenderReceiptManifestData = async function() {
        if (typeof window.buildAndRenderStep7LayoutStructure === "function") {
            window.buildAndRenderStep7LayoutStructure();
        } else {
            return;
        }

        const receiptTrackingDisplay = document.getElementById("receipt-tracking-token-display");
        const timestampDisp = document.getElementById("receipt-timestamp-display");
        const injectorFrame = document.getElementById("receipt-items-injector-frame");
        const grandDisp = document.getElementById("receipt-grand-total-display");

        if (timestampDisp) {
            timestampDisp.textContent = new Date().toLocaleString('en-US', { 
                year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true 
            });
        }

        let uniqueAccountNumber = "F4U-";
        const receiptStorageManifestString = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
        let receiptPayload = null;

        try {
            if (receiptStorageManifestString) receiptPayload = JSON.parse(receiptStorageManifestString);
        } catch (pe) {
            console.warn("[Receipt Loader] Failed parsing manifest details:", pe);
        }

        if (receiptPayload && receiptPayload.transaction_hash_id) {
            uniqueAccountNumber += receiptPayload.transaction_hash_id.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().substring(0, 8);
        } else {
            uniqueAccountNumber += Date.now().toString(36).toUpperCase().substring(0, 8);
        }
        window.currentGeneratedMbeAccountNumber = uniqueAccountNumber;

        if (!receiptPayload) {
            const urlParams = new URLSearchParams(window.location.search);
            const activePlanKeyString = String(urlParams.get('plan') || "enterprise").toLowerCase().trim();

            let foundationFilingCost = 49.00;
            if (activePlanKeyString.includes("enterprise") || activePlanKeyString.includes("premium")) foundationFilingCost = 399.00;
            else if (activePlanKeyString.includes("standard") || activePlanKeyString.includes("pro")) foundationFilingCost = 149.00;

            receiptPayload = {
                selected_package_title: `filings4u Processing Fee (${activePlanKeyString.toUpperCase()})`,
                financials_subtotal_amount: foundationFilingCost,
                financials_grand_total_charge: parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount) || foundationFilingCost
            };
        }

        if (receiptTrackingDisplay) receiptTrackingDisplay.textContent = uniqueAccountNumber;

        let invoiceLinesMarkup = "";
        let calculatedSubtotal = 0;

        if (receiptPayload.selected_package_title) {
            const pkgPrice = parseFloat(receiptPayload.financials_subtotal_amount) || 0;
            calculatedSubtotal += pkgPrice;
            invoiceLinesMarkup += `
            <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 100% !important; box-sizing: border-box; font-size: 0.9rem; color: #0a1f44;">
                <span><strong>${receiptPayload.selected_package_title}</strong></span>
                <span style="font-family: monospace; font-weight: 700;">$${pkgPrice.toFixed(2)}</span>
            </div>`;
        }

        const activeUpgradesArray = window.currentSelectedAddonsListArrayMatrix || [];
        if (Array.isArray(activeUpgradesArray)) {
            activeUpgradesArray.forEach(addonItem => {
                if (!addonItem) return;
                const parsedPrice = parseFloat(addonItem.price || addonItem.price_amount) || 0;
                calculatedSubtotal += parsedPrice;
                invoiceLinesMarkup += `
                <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569; font-size: 0.9rem; width: 100% !important; box-sizing: border-box;">
                    <span>+ ${addonItem.title || "Compliance Asset Protection"}</span>
                    <span style="font-family: monospace;">$${parsedPrice.toFixed(2)}</span>
                </div>`;
            });
        }

        if (injectorFrame) injectorFrame.innerHTML = invoiceLinesMarkup;
        if (grandDisp) grandDisp.textContent = `$${(receiptPayload.financials_grand_total_charge || calculatedSubtotal).toFixed(2)}`;
    };

      // ============================================================================ //
    // 📄 FILE: step-7.js - BLOCK 6 OF 6 (REPAIRED LIFECYCLE CONTROLS & SEALS)      //
    // 🧾 MODULE: RECORD ATTESTATIONS, ACTIVE STATE INJECTORS & ENVIRONMENT CLOSURES //
    // ============================================================================ //

    /** 
     * Renders the recorded Power of Attorney text signature tracking variables.
     */
    window.extractAndRenderCertifiedLegalPoaDocument = async function() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const returnedToken = urlParams.get('token') || localStorage.getItem("f4u_active_tracking_token");
            const signerNode = document.getElementById("poa-certified-signer");
            const timestampNode = document.getElementById("poa-certified-timestamp");

            if (timestampNode) {
                const currentClock = new Date();
                timestampNode.textContent = `${currentClock.toLocaleDateString()} @ ${currentClock.toLocaleTimeString()} (Local Platform Time)`;
            }

            const supabaseClient = window.getSuccessPageSupabaseClient();
            if (supabaseClient && returnedToken) {
                const { data: orderRow, error } = await supabaseClient
                    .from('orders')
                    .select('poa_signature, created_at')
                    .eq('tracking_number', returnedToken)
                    .maybeSingle();

                if (!error && orderRow && orderRow.poa_signature) {
                    if (signerNode) signerNode.textContent = orderRow.poa_signature;
                    if (orderRow.created_at && timestampNode) {
                        const dbDate = new Date(orderRow.created_at);
                        timestampNode.textContent = `${dbDate.toLocaleDateString()} @ ${dbDate.toLocaleTimeString()} (Database Log)`;
                    }
                    return;
                }
            }

            const localCachedSignature = localStorage.getItem("wizard_field_poa_signature") || localStorage.getItem("wizard_field_poa_signature_string") || localStorage.getItem("wizard_field_poa_typed_signature");
            if (signerNode && localCachedSignature) {
                signerNode.textContent = localCachedSignature.trim();
            } else if (signerNode) {
                signerNode.textContent = localStorage.getItem("wizard_field_company_name") || "Authorized Principal Account";
            }
        } catch (err) {
            console.error("[POA Hydration Fault]:", err);
        }
    };

    /**
     * Spawns an isolated sandbox browser context frame to print the attestation record cleanly.
     */
    window.printSpecificPoaDocument = function() {
        const currentSigner = document.getElementById("poa-certified-signer")?.textContent || "Authorized Principal";
        const currentTimestamp = document.getElementById("poa-certified-timestamp")?.textContent || "";
        const printWindow = window.open('', '_blank', 'width=800,height=900');
        if (!printWindow) return;

        printWindow.document.write(`
        <html>
        <head><title>Power of Attorney Record</title></head>
        <body style="font-family:sans-serif; padding:40px; color:#0a1f44; line-height:1.6;">
            <h4 style="text-align:center; text-transform:uppercase; border-bottom: 2px solid #0a1f44; padding-bottom: 12px; margin-bottom: 24px;">Power of Attorney Certification</h4>
            <p style="text-align:justify;">LIMITED POWER OF ATTORNEY AGENCY AGREEMENT... filings4u, LLC. Administrative, regulatory, and compliance document processing authorization context complete.</p>
            <hr style="border:1px dashed #cbd5e1; margin:24px 0;">
            <div><strong>Authorized Principal Signer:</strong> \${currentSigner}</div>
            <div style="margin-top:6px;"><strong>Execution Date Stamp:</strong> \${currentTimestamp}</div>
            <script>window.onload = function() { window.print(); window.close(); };</script>
        </body>
        </html>`);
        printWindow.document.close();
    };

    // ------------------------------------------------------------------------
    // 🔗 CORE INTERLOCK ENGINE: CALLED BY wizard-master-core.js
    // ------------------------------------------------------------------------
    window.initializeSecureStep7AccountHydration = function() {
        console.log("🚀 [Layout Purge] Evicting previous step panels to clear scroll height...");
        
        window.injectStep7VisualInterfaceStyles();

        // 🟢 FIXED: Apply the .step-7-active wrapper indicator flag to isolate hidden layout elements safely
        const masterAppWrapper = document.getElementById("wizard-wrapper") || document.getElementById("app") || document.body;
        if (masterAppWrapper) {
            masterAppWrapper.classList.add("step-7-active");
        }

        // Target exclusively step panels 1 through 6 to prevent layout bleeding
        const layoutTargetPanels = document.querySelectorAll("#step-panel-1, #step-panel-2, #step-panel-3, #step-panel-4, #step-panel-5, #step-panel-6");
        layoutTargetPanels.forEach(panel => {
            panel.style.setProperty("display", "none", "important");
            panel.style.setProperty("visibility", "hidden", "important");
            panel.style.setProperty("height", "0px", "important");
            panel.style.setProperty("overflow", "hidden", "important");
            panel.classList.remove("active");
        });

        const step7Placeholder = document.getElementById("step-panel-7") || document.getElementById("step-7-injection-placeholder");
        if (step7Placeholder) {
            step7Placeholder.style.setProperty("display", "block", "important");
            step7Placeholder.style.setProperty("visibility", "visible", "important");
            step7Placeholder.style.setProperty("height", "auto", "important");
            step7Placeholder.style.setProperty("overflow", "visible", "important");
            step7Placeholder.classList.add("active");
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        window.extractAndRenderReceiptManifestData();
        window.extractAndRenderLegalPoaDocument = window.extractAndRenderCertifiedLegalPoaDocument;
        window.extractAndRenderCertifiedLegalPoaDocument();
    };

    // ------------------------------------------------------------------------
    // 🏁 ENTRY VERIFICATION REFRESH TIMERS
    // ------------------------------------------------------------------------
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            if (window.location.search.includes("step=7") || window.currentWizardActiveStep === 7) {
                window.initializeSecureStep7AccountHydration();
            }
        });
    } else {
        if (window.location.search.includes("step=7") || window.currentWizardActiveStep === 7) {
            window.initializeSecureStep7AccountHydration();
        }
    }

})(); // ⚡ EXPOSURE SEAL SECURED: Closes out your master strict scope file environment perfectly
