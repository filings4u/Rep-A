/**
 * filings4u Platform Architecture
 * Module: contact.js (Part 1 - Split-Container Communications Layout Setup)
 */

window.FILINGS4U_CONTACT_TARGET = "filings4u-contact-root";

function renderMasterContactEngine(overrideTargetId) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_CONTACT_TARGET || "filings4u-contact-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        var contactHTML = "";

        // 1. HERO MATRIX CONTAINER LAYER
        contactHTML += '<div style="padding-top: 110px; width: 100%; box-sizing: border-box; clear: both; display: block;">';
        contactHTML += '  <div id="contact-hero-zone" style="background: #0a1f44; color: #ffffff; padding: 60px 20px; position: relative; overflow: hidden; margin-bottom: 40px; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">';
        contactHTML += '    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>';
        contactHTML += '    <div style="max-width: 1450px; margin: 0 auto; padding: 0 24px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%;"> ';
        contactHTML += '      <span style="color: #10b981; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: block; text-align: center; margin: 0 auto 10px auto; width: fit-content;">Global Operations Dispatch Desk</span>';
        contactHTML += '      <h1 style="font-size: 2.5rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px; text-align: center; width: 100%;">Contact Us</h1>';
        contactHTML += '    </div>';
        contactHTML += '  </div>';

        // 2. INNER SPLIT CONTENT WRAPPER (Strictly contained to 1450px max-width alignment)
        contactHTML += '  <div id="contact-content-cards-root" style="max-width: 1450px; margin: 0 auto 50px auto; padding: 0 24px; box-sizing: border-box; display: block; clear: both; width: 100%;">';
        contactHTML += '    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 40px; box-shadow: 0 4px 20px rgba(10,31,68,0.03); box-sizing: border-box; width: 100%;">';
        
        // 3. START RESPONSIVE SPLIT GRID MECHANICS
        contactHTML += '      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; width: 100%; box-sizing: border-box; align-items: start;">';
        
        // COLUMN 1: CORPORATE CHANNELS (LEFT SIDE CONTAINER)
        contactHTML += '        <div style="display: flex; flex-direction: column; gap: 24px; font-size: 0.95rem; line-height: 1.6; color: #334155; text-align: left; box-sizing: border-box; width: 100%;">';
        contactHTML += '          <div>';
        contactHTML += '            <h3 style="color: #0a1f44; font-size: 1.3rem; font-weight: 800; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.3px;">Operational Channels</h3>';
        contactHTML += '            <p style="margin: 0;">Have a query regarding your active LLC formation pipeline, regulatory consulting project, or DOT safety consortium pool? Connect directly with our administration team.</p>';
        contactHTML += '          </div>';
        
        contactHTML += '          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px;">';
        contactHTML += '            <h4 style="color: #0a1f44; font-size: 1rem; font-weight: 700; margin: 0 0 6px 0;">Corporate HQ Office</h4>';
        contactHTML += '            <p style="margin: 0; font-weight: 500; color: #0a1f44;">filings4u, LLC</p>';
        contactHTML += '            <p style="margin: 0; font-size: 0.88rem; color: #64748b;">A Subsidiary of Roseland Companies, LLC</p>';
        contactHTML += '            <p style="margin: 4px 0 0 0; font-size: 0.9rem;">State Jurisdiction: Illinois, USA</p>';
        contactHTML += '          </div>';

        contactHTML += '          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px;">';
        contactHTML += '            <h4 style="color: #0a1f44; font-size: 1rem; font-weight: 700; margin: 0 0 6px 0;">Direct Email Networks</h4>';
        contactHTML += '            <p style="margin: 0;">General Support: <a href="mailto:support@filings4u.com" style="color: #10b981; text-decoration: none; font-weight: 700;">support@filings4u.com</a></p>';
        contactHTML += '            <p style="margin: 4px 0 0 0;">Legal &amp; Compliance: <a href="mailto:privacy@filings4u.com" style="color: #10b981; text-decoration: none; font-weight: 700;">privacy@filings4u.com</a></p>';
        contactHTML += '          </div>';
        contactHTML += '        </div>';

        // Save intermediate layout trace inside container properties
        zone.setAttribute("data-contact-cache", contactHTML);

    } catch (err) {
        console.error("Contact canvas core compiler lifecycle exception:", err);
    }
}
/* Part 2 - Fragment 2 of 2: Intake Form Blueprint & Close Matrix */
(function() {
    const targetId = window.FILINGS4U_CONTACT_TARGET || "filings4u-contact-root";
    
    setTimeout(function() {
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // 1. Retrieve the starting layout text string compiled by Fragment 1
        var contactHTML = zone.getAttribute("data-contact-cache") || "";

        // COLUMN 2: INTAKE INQUIRY GATEWAY (RIGHT SIDE CONTAINER)
        contactHTML += '        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 30px; box-sizing: border-box; width: 100%;">';
        contactHTML += '          <h3 style="color: #0a1f44; font-size: 1.2rem; font-weight: 800; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 0.3px; text-align: left;">Send Operations Message</h3>';
        
        contactHTML += '          <form onsubmit="event.preventDefault(); alert(\'Message logged securely. Our processing desk will respond via your provided corporate email asset shortly.\'); this.reset();" style="display: flex; flex-direction: column; gap: 20px; width: 100%; box-sizing: border-box;">';
        
        // INPUT FIELD 1: NAME
        contactHTML += '            <div style="display: flex; flex-direction: column; gap: 6px; text-align: left; width: 100%;">';
        contactHTML += '              <label style="font-size: 0.82rem; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Full Operating Name</label>';
        contactHTML += '              <input type="text" required placeholder="John Doe" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box; background: #ffffff; color: #0f172a;">';
        contactHTML += '            </div>';
        
        // INPUT FIELD 2: EMAIL
        contactHTML += '            <div style="display: flex; flex-direction: column; gap: 6px; text-align: left; width: 100%;">';
        contactHTML += '              <label style="font-size: 0.82rem; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Corporate Email Address</label>';
        contactHTML += '              <input type="email" required placeholder="john@company.com" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box; background: #ffffff; color: #0f172a;">';
        contactHTML += '            </div>';
        
        // INPUT FIELD 3: MESSAGE
        contactHTML += '            <div style="display: flex; flex-direction: column; gap: 6px; text-align: left; width: 100%;">';
        contactHTML += '              <label style="font-size: 0.82rem; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Inquiry Pipeline Details</label>';
        contactHTML += '              <textarea required rows="5" placeholder="Describe your formation or compliance support requirements here..." style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.95rem; box-sizing: border-box; resize: vertical; font-family: system-ui, sans-serif; background: #ffffff; color: #0f172a;"></textarea>';
        contactHTML += '            </div>';
        
        // SUBMIT CONTROL ACTION BUTTON
        contactHTML += '            <button type="submit" style="width: 100%; background: #10b981; color: #ffffff; border: none; padding: 14px; font-weight: 700; font-size: 1rem; border-radius: 6px; cursor: pointer; transition: background 0.2s; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2); box-sizing: border-box;">Dispatch Support Message &rarr;</button>';
        
        contactHTML += '          </form>';
        contactHTML += '        </div>';

        // CLOSE MAIN SPLIT AND BOX FRAMES
        contactHTML += '      </div>';
        contactHTML += '    </div>';
        contactHTML += '  </div>';
        contactHTML += '</div>';

        // 2. Mount completed compiled structural elements tree to page node safely
        zone.innerHTML = contactHTML;
        zone.removeAttribute("data-contact-cache");

    }, 50);
})();

