// ============================================================================
// 🚛 FILINGS4U HEAVY TAX ENGINE - STEP 5: DIGITAL SIGNATURE (PART 1 OF 3)
// ============================================================================
(function() {
  "use strict";

  window.capturedSignatureBase64String = null;

  window.initializeHeavySignaturePanelStep5 = function() {
    const targetDiv = document.getElementById("heavy-panel-5");
    if (!targetDiv) {
      console.error("[Heavy Step 5 Error] Target container #heavy-panel-5 missing from DOM.");
      return;
    }

    // Force step panel visibility parameters flat on screen instantly
    targetDiv.style.setProperty("display", "block", "important");

    targetDiv.innerHTML = `
      <!-- FLAT TIMELINE HEADER -->
      <div style="border-bottom: 2px solid #0a1f44 !important; padding-bottom: 12px !important; margin-bottom: 24px !important; box-sizing: border-box !important; width: 100% !important;">
        <h3 style="margin: 0 !important; color: #0a1f44 !important; font-size: 1.35rem !important; font-weight: 800 !important; letter-spacing: -0.4px !important;">✍️ Authorization & Digital Signature</h3>
        <p style="margin: 6px 0 0 0 !important; color: #64748b !important; font-size: 0.85rem !important; font-weight: 500 !important;">Authorize Filings4u to transmit your Form 2290 parameters to the IRS.</p>
      </div>

      <!-- COMBINED POWER OF ATTORNEY & IRS DECLARATION SCROLL BOX -->
      <div id="poa-scroll-box" style="background: #f8fafc !important; border: 1px solid #cbd5e1 !important; border-radius: 8px !important; padding: 20px !important; font-size: 0.825rem !important; color: #475569 !important; line-height: 1.6 !important; max-height: 240px !important; overflow-y: scroll !important; font-family: system-ui, sans-serif !important; text-align: justify !important; margin-bottom: 24px !important; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02) !important; box-sizing: border-box !important; width: 100% !important;">
        <div style="text-align: center !important; font-weight: 800 !important; color: #0a1f44 !important; font-size: 0.9rem !important; margin-bottom: 14px !important; text-transform: uppercase !important; letter-spacing: 0.5px !important;">
          LIMITED POWER OF ATTORNEY &amp; CORPORATE AGENCY AGREEMENT
        </div>
        
        WHEREAS, the undersigned Principal does hereby nominatively appoint, designate, and empower filings4u, LLC, an Illinois limited liability company, along with its authorized operational agents, officers, employees, and designees, as its true and lawful Attorney-in-Fact and Corporate Agent in accordance with the strict terms and limitations set forth herein.<br><br>
        
        <strong>1. EXPRESS LIMITED SCOPE OF APPOINTMENT</strong><br>
        The scope of this appointment is strictly restricted and expressly limited to administrative, regulatory, and compliance-related document processing. The Attorney-in-Fact is granted the authority to execute, sign, modify, amend, submit, and process applications, registrations, forms, and renewals across Corporate Management, Tax Registration, and Government Procurement on behalf of the Principal.<br><br>
        
        <strong>2. GRANT OF OPERATIONAL POWERS</strong><br>
        The Principal hereby grants, conveys, and delivers unto the said Attorney-in-Fact full operational power, authority, and jurisdiction to undertake, execute, and perform any and all acts deemed necessary to fulfill the service requests initiated by the Principal within the filings4u, LLC digital wizard interface.<br><br>
        
        <strong>3. ELECTRONIC SIGNATURES &amp; INTENT</strong><br>
        This Agreement is executed electronically in strict conformity with the federal Electronic Signatures in Global and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA). The Principal expressly understands, agrees, and consents that typing their name into the designated input field—resulting in a script-generated cursive font rendering of their name on the screen—constitutes their valid, legally binding electronic signature carrying identical weight to a handwritten wet ink signature.<br><br>
        
        <strong>4. RATIFICATION, REVOCATION, AND DURATION</strong><br>
        This agreement shall remain in full force and effect from the date of electronic execution until explicitly revoked. Revocation may occur via written physical notification delivered to filings4u, LLC corporate networks or electronic cancellation processed through verified client portal pathways.<br><br>
        
        <div style="border-top: 1px dashed #cbd5e1 !important; margin-top: 14px !important; padding-top: 14px !important; background: rgba(10,31,68,0.02) !important; border-radius: 6px !important; padding: 12px !important;">
          <strong>IRS DECLARATION UNDER PENALTIES OF PERJURY:</strong> By signing below, I declare that I have examined this return, including accompanying schedules and statements, and to the best of my knowledge and belief, it is true, correct, and complete. I further grant Filings4u explicit Power of Attorney (POA) authority as an authorized transmitter to securely sign, bundle, and electronically dispatch these transaction payloads to the IRS e-file gateway networks.
        </div><br>
        
        Corporate Entity Information:<br>
        filings4u, LLC | A Subsidiary of Roseland Companies, LLC<br>
        Contact Support: support@filings4u.com
      </div>

            <!-- TYPE-ONLY SIGNATURE ENTRY WORKSPACE -->
      <div style="display: flex !important; flex-direction: column !important; gap: 14px !important; width: 100% !important; box-sizing: border-box !important; margin-bottom: 28px !important;">
        <div style="display: flex !important; flex-direction: column !important; gap: 6px !important; width: 100% !important;">
          <label style="font-weight: 800 !important; font-size: 0.75rem !important; text-transform: uppercase !important; color: #0a1f44 !important; letter-spacing: 0.5px !important;">Type Full Legal Name (Acts as Signature)</label>
          <input type="text" id="sig_typed_input" oninput="window.updateCursiveFontSignatureLivePreview()" placeholder="Type your first and last name precisely..." style="width: 100% !important; padding: 14px !important; border: 1px solid #cbd5e1 !important; border-radius: 6px !important; font-size: 0.95rem !important; box-sizing: border-box !important; background: #ffffff !important;">
        </div>
        
        <!-- LIVE CURSIVE FONT GENERATOR PREVIEW SCREEN PANEL -->
        <div style="display: flex !important; flex-direction: column !important; gap: 6px !important; width: 100% !important;">
          <small style="font-weight: 700 !important; font-size: 0.7rem !important; text-transform: uppercase !important; color: #64748b !important; letter-spacing: 0.5px !important;">Generated E-Signature Preview:</small>
          <!-- RECONSTRUCTED OVERVIEW BOX CONTAINER WITH COMPONENT CLASS INJECTED -->
          <div id="sig_cursive_preview" class="f4u-cursive-preview-node" style="width: 100% !important; height: 90px !important; background: #f8fafc !important; border: 1px solid #cbd5e1 !important; border-radius: 6px !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 2.15rem !important; font-family: 'Brush Script MT', cursive, 'Gabriola', 'Edwardian Script ITC', sans-serif !important; font-style: italic !important; color: #0a1f44 !important; padding: 14px !important; box-sizing: border-box !important; overflow: hidden !important; user-select: none !important; border-left: 4px solid #10b981 !important; box-shadow: inset 0 2px 4px rgba(0,0,0,0.01) !important;">
          Pending Signature Entry
          </div>

        </div>
      </div>

      <!-- FIXED EMBEDDED NAVIGATION ACTIONS BUTTON ROWS -->
      <div style="display: flex !important; justify-content: space-between !important; align-items: center !important; border-top: 1px solid #e2e8f0 !important; padding-top: 20px !important; width: 100% !important; box-sizing: border-box !important; clear: both !important; margin-top: 10px !important;">
        <button type="button" onclick="window.switchHeavyTaxViewPanel(4)" style="padding: 12px 20px !important; background: #f1f5f9 !important; border: 1px solid #cbd5e1 !important; border-radius: 6px !important; font-size: 0.875rem !important; font-weight: 700 !important; color: #475569 !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 6px !important; transition: background 0.15s ease !important;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          <i class="fa-solid fa-arrow-left"></i> Back
        </button>
        <button type="button" onclick="window.commitSignatureStep5()" style="padding: 14px 40px !important; background: #0a1f44 !important; color: #ffffff !important; border: none !important; border-radius: 6px !important; font-weight: 700 !important; font-size: 0.95rem !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; gap: 8px !important; transition: background 0.15s ease !important;" onmouseover="this.style.background='#1e293b'" onmouseout="this.style.background='#0a1f44'">
          Accept &amp; Continue <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
    
    window.updateCursiveFontSignatureLivePreview();
  };



  
  // --- REAL-TIME LIVE CURSIVE FONT GENERATOR REPAINTER ---
  window.updateCursiveFontSignatureLivePreview = function() {
    const rawInputText = document.getElementById("sig_typed_input")?.value.trim() || "";
    const previewContainerNode = document.getElementById("sig_cursive_preview");
    
    if (previewContainerNode) {
      if (rawInputText.length > 0) {
        previewContainerNode.innerText = rawInputText;
        previewContainerNode.style.setProperty("color", "#0a1f44", "important");
        previewContainerNode.style.setProperty("opacity", "1", "important");
      } else {
        previewContainerNode.innerText = "Pending Signature Entry";
        previewContainerNode.style.setProperty("color", "#94a3b8", "important");
      }
    }
  };

  // --- SUBMIT AUTHORIZATION METRICS & INLINE FIELD SHAKER GATE ---
  window.commitSignatureStep5 = function() {
    const signatureInputFieldNode = document.getElementById("sig_typed_input");
    const cleanSignatureText = signatureInputFieldNode?.value.trim() || "";

    // ALERT-FREE FIELD SHAKER VALIDATION
    if (cleanSignatureText.length < 2) {
      if (signatureInputFieldNode) {
        signatureInputFieldNode.classList.remove("f4u-shake-alert");
        void signatureInputFieldNode.offsetWidth; // Force screen repaint to restart animation
        
        signatureInputFieldNode.style.setProperty("border-color", "#ef4444", "important");
        signatureInputFieldNode.style.setProperty("box-shadow", "0 0 0 3px rgba(239, 68, 68, 0.15)", "important");
        signatureInputFieldNode.classList.add("f4u-shake-alert");
        signatureInputFieldNode.focus();
        
        setTimeout(function() {
          signatureInputFieldNode.classList.remove("f4u-shake-alert");
          signatureInputFieldNode.style.setProperty("border-color", "#cbd5e1", "important");
          signatureInputFieldNode.style.setProperty("box-shadow", "none", "important");
        }, 1500);
      }
      return; 
    }

    // Lock valid string signature parameter data cleanly back across universal state registers
    window.capturedSignatureBase64String = "TYPED:" + cleanSignatureText;
    console.log(`[Heavy Step 5 Success] Signed dynamically by: "${cleanSignatureText}"`);

    // Advance smoothly forward to Step 6 Order Invoices Ledger Reviews
    if (typeof window.compileFilingFeePurchaseSummaryStep6 === "function") {
      window.compileFilingFeePurchaseSummaryStep6();
    }
    if (typeof window.switchHeavyTaxViewPanel === "function") {
      window.switchHeavyTaxViewPanel(6);
    }
  };

  // --- AUTOMATED INITIALIZATION DISPATCH GATE ---
  window.initializeHeavySignaturePanelStep5Suite = function() {
    window.initializeHeavySignaturePanelStep5();
  };

})();



