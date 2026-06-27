/**
 * filings4u Platform Architecture
 * Module: refund.js (Part 1 - Split-Safe Refund Framework Setup)
 */

window.FILINGS4U_REFUND_TARGET = "filings4u-refund-policy-root";

function renderMasterRefundPolicyEngine(overrideTargetId) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_REFUND_TARGET || "filings4u-refund-policy-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // Compile layout strings cleanly using standard concatenations to be split-safe
        var refundHTML = "";

        // 1. HERO MATRIX CONTAINER LAYER
        refundHTML += '<div style="padding-top: 110px; width: 100%; box-sizing: border-box; clear: both; display: block;">';
        refundHTML += '  <div id="refund-policy-hero-zone" style="background: #0a1f44; color: #ffffff; padding: 50px 20px; position: relative; overflow: hidden; margin-bottom: 40px; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">';
        refundHTML += '    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>';
        refundHTML += '    <div style="max-width: 1450px; margin: 0 auto; padding: 0 24px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%;"> ';
        refundHTML += '      <h1 style="font-size: 2.3rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px; text-align: center; width: 100%;">Refund Policy</h1>';
        refundHTML += '    </div>';
        refundHTML += '  </div>';

        // 2. INNER CARD WRAPPER OPENER
        refundHTML += '  <div id="refund-policy-content-cards-root" style="max-width: 1450px; margin: 0 auto 50px auto; padding: 0 24px; box-sizing: border-box; display: block; clear: both; width: 100%;">';
        refundHTML += '    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 40px; box-shadow: 0 4px 20px rgba(10,31,68,0.03); box-sizing: border-box; width: 100%;">';
        refundHTML += '      <div style="font-size: 0.9rem; line-height: 1.6; color: #334155; text-align: left; max-width: 1100px; margin: 0 auto; box-sizing: border-box; width: 100%;">';
        
        refundHTML += '        <p style="font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 24px;">Effective Date: June 21, 2026 | Governing State: Illinois</p>';
        refundHTML += '        <p style="margin: 0 0 24px 0; font-weight: 500;">At filings4u, LLC, A Subsidiary of Roseland Companies, LLC, we value our customers and are committed to providing quality services. However, due to the nature of the documentation, registration, and filing services we offer, we have established the following refund policy stipulations:</p>';

        // 3. INJECT SECTIONS 1.0 AND 2.0
        refundHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">1.0 No Refunds After Filing</h3>';
        refundHTML += '        <p style="margin: 0 0 16px 0;">Once your documents have been filed with the city, state, or federal government, we cannot offer any refunds. These governmental entities do not accept refunds, and as a result, we cannot process refunds for filed documents.</p>';

        refundHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">2.0 Refund Requests Before Filing</h3>';
        refundHTML += '        <p style="margin: 0 0 16px 0;">If you wish to request a refund, you may do so within 24 to 48 hours of your initial payment. In this case, a refund may be issued, subject to a 10% stocking fee to cover administrative processing overhead and platform data allocations.</p>';

        // Save intermediate layout trace inside container properties
        zone.setAttribute("data-refund-cache", refundHTML);

    } catch (err) {
        console.error("Refund canvas core compiler lifecycle exception:", err);
    }
}

/* Part 2 - Fragment 2 of 2: Closing Clauses & Mount System Hooks */
(function() {
    const targetId = window.FILINGS4U_REFUND_TARGET || "filings4u-refund-policy-root";
    
    setTimeout(function() {
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // 1. Retrieve the starting layout text string compiled by Fragment 1
        var refundHTML = zone.getAttribute("data-refund-cache") || "";

        // 2. INJECT SECTIONS 3.0 AND 4.0
        refundHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">3.0 No Exceptions</h3>';
        refundHTML += '        <p style="margin: 0 0 16px 0;">Once documents are filed, no exceptions will be made to our refund policy. We encourage all customers to review their requests thoroughly before finalizing any filings inside our portal environments.</p>';

        refundHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">4.0 Contact Information</h3>';
        refundHTML += '        <p style="margin: 0 0 24px 0; font-weight: 700; color: #0a1f44; line-height: 1.5;">filings4u, LLC<br><span style="font-size: 0.85rem; color: #64748b; font-weight: 500;">A Subsidiary of Roseland Companies, LLC</span><br><span style="font-size: 0.85rem; color: #64748b; font-weight: 500;"><a href="mailto:terms@filings4u.com" style="color: #10b981; text-decoration: none; font-weight: 700;">terms@filings4u.com</a></span></p>';

        // 3. INJECT RED STATUTORY WARNING BANNER CELL OVERLAYS
        refundHTML += '        <p style="margin: 0 0 16px 0; background: rgba(239,68,68,0.03); border-left: 4px solid #ef4444; padding: 14px; border-radius: 0 8px 8px 0; font-weight: 600; color: #1e293b;">';
        refundHTML += '          <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444; margin-right: 4px;"></i> By using our services, you acknowledge and agree to our refund policy outlined above. Thank you for your understanding and for choosing filings4u, LLC for your corporate formation and compliance infrastructure needs.';
        refundHTML += '        </p>';

        // CLOSE MAIN SHEET CONTAINERS
        refundHTML += '      </div>';
        refundHTML += '    </div>';
        refundHTML += '  </div>';
        refundHTML += '</div>';

        // 4. Securely mount the complete structured text tree block to the webpage node point
        zone.innerHTML = refundHTML;
        zone.removeAttribute("data-refund-cache");

    }, 50);
})();
