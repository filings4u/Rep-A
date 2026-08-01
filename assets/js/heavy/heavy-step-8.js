// ============================================================================
// ðŸš› FILINGS4U HEAVY TAX ENGINE - STEP 8: SUCCESS PORTAL & TRANSMISSION MONITOR
// ============================================================================
;(function() {
  "use strict";

  window.compileSuccessTransmissionPortalStep8 = function() {
    const placeholder = document.getElementById("heavy-panel-8");
    if (!placeholder) return;

    // Wipe old session records straight out of local disk tracking caches to keep client lines clean
    const finishedSessionUuid = window.activeHeavySessionUuid || localStorage.getItem("f4u_heavy_session_id") || "SESSION_TOKEN_ALPHA";
    localStorage.removeItem("f4u_heavy_session_id");
    window.activeHeavySessionUuid = null;

    // Inject flat, premium high-density conversion success portal panel elements
    placeholder.innerHTML = `
      <div style="text-align: center !important; padding: 20px 10px !important; box-sizing: border-box !important; width: 100% !important;">
        
        <!-- EMERALD VECTOR PULSE CHECKMARK CIRCLE DECK -->
        <div style="width: 64px; height: 64px; background: rgba(16,185,129,0.1); color: #10b981; font-size: 2rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin: 0 auto 20px auto; animation: pulse 2s infinite;">âœ“</div>
        
        <h3 style="margin: 0 0 6px 0; color: #0a1f44; font-size: 1.45rem; font-weight: 800; letter-spacing: -0.4px;">Payment Authorized Successfully!</h3>
        <p style="margin: 0 0 28px 0; font-size: 0.875rem; color: #64748b; line-height: 1.5; font-weight: 500; max-width: 480px; margin-left: auto; margin-right: auto;">
          Your merchant transaction reference token has been cleared. Your fleet configurations are now loading inside our live e-file transmission engine.
        </p>

        <!-- LIVE OVER-THE-AIR IRS TRANSMISSION STATUS MONITOR TRACKER -->
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; text-align: left; max-width: 520px; margin: 0 auto 28px auto; box-sizing: border-box; width: 100%;">
          <h5 style="margin: 0 0 14px 0; color: #0a1f44; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">Live Transmission Pipeline Status Tracker</h5>
          
          <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.85rem;">
            <div id="status_row_compile" style="display: flex; align-items: center; gap: 10px; color: #10b981; font-weight: 700;">
              <span id="icon_status_compile"><i class="fa-solid fa-circle-check"></i></span>
              <span>Compiling Encrypted Fleet Vehicle Data Models</span>
            </div>
            <div id="status_row_xml" style="display: flex; align-items: center; gap: 10px; color: #0a1f44; font-weight: 700;">
              <span id="icon_status_xml"><i class="fa-solid fa-circle-notch fa-spin"></i></span>
              <span>Structuring XML Schema Payload Data Arrays</span>
            </div>
            <div id="status_row_irs" style="display: flex; align-items: center; gap: 10px; color: #94a3b8; font-weight: 500;">
              <span id="icon_status_irs"><i class="fa-solid fa-circle-dot"></i></span>
              <span>Transmitting Secure POA Credentials to IRS MeF Server</span>
            </div>
          </div>
        </div>

        <!-- AUTOMATED POST-FILING INFORMATION CONTENT CALLOUT -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; text-align: left; max-width: 520px; margin: 0 auto 32px auto; box-sizing: border-box; width: 100%;">
          <p style="margin: 0 0 6px 0; font-size: 0.8rem; color: #64748b; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">What Happens Next:</p>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.85rem; color: #475569; line-height: 1.5; font-weight: 500; display: flex; flex-direction: column; gap: 6px;">
            <li>An itemized summary purchase order invoice receipt was delivered to your primary email context block.</li>
            <li>The IRS server review engine will settle calculations (typically takes between **5 to 45 minutes**).</li>
            <li>Once approved, a branded confirmation message holding your watermarked, official **Form 2290 Schedule 1 PDF** download link will instantly hit your inbox.</li>
          </ul>
        </div>

        <button type="button" onclick="window.location.reload();" style="padding: 12px 36px; background: #0a1f44; color: #ffffff; border: none; border-radius: 6px; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: background 0.15s ease;">Return to Portal Homepage</button>
      </div>
    `;

    // Fire simulated real-time tracking element animations loops
    window.animateLiveIrsTransmissionPipelineTrackerSteps();
  };

  // --- INTERACTIVE TERMINAL TICKING STREAM ENGINE ---
  window.animateLiveIrsTransmissionPipelineTrackerSteps = function() {
    // Stage 1: Advance XML Structuring Step after 2.2 seconds
    setTimeout(() => {
      const rowXml = document.getElementById("status_row_xml");
      const iconXml = document.getElementById("icon_status_xml");
      const rowIrs = document.getElementById("status_row_irs");
      const iconIrs = document.getElementById("icon_status_irs");

      if (rowXml && iconXml) {
        rowXml.style.setProperty("color", "#10b981", "important");
        iconXml.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
      }
      if (rowIrs && iconIrs) {
        rowIrs.style.setProperty("color", "#0a1f44", "important");
        rowIrs.style.setProperty("font-weight", "700", "important");
        iconIrs.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i>`;
      }
    }, 2200);

    // Stage 2: Finalize Transmitted Secure IRS status indicators after 4.8 seconds
    setTimeout(() => {
      const rowIrs = document.getElementById("status_row_irs");
      const iconIrs = document.getElementById("icon_status_irs");

      if (rowIrs && iconIrs) {
        rowIrs.style.setProperty("color", "#10b981", "important");
        iconIrs.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        
        // Append a clean dynamic tracking label confirmation alert card right beneath the loops
        const parentBox = rowIrs.parentElement;
        if (parentBox) {
          const successTokenLabelHtml = `
            <div style="margin-top: 14px; border-top: 1px dashed #cbd5e1; padding-top: 12px; font-size: 0.775rem; color: #16a34a; font-weight: 700; display: flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-cloud-arrow-up"></i> Transmission Complete. Batch Payload ID Securely Handed Over to IRS.
            </div>
          `;
          parentBox.insertAdjacentHTML("beforeend", successTokenLabelHtml);
        }
      }
    }, 4800);
  };
})();

