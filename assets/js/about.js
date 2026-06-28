/**
 * filings4u Platform Architecture
 * Module: about.js (Part 1 - Split-Safe About Us Framework Setup)
 */

window.FILINGS4U_ABOUT_TARGET = "filings4u-about-hero-root";

function renderMasterAboutEngine(overrideTargetId) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_ABOUT_TARGET || "filings4u-about-hero-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // Compile layout strings cleanly using standard concatenations to be split-safe
        var aboutHTML = "";

        // 1. HERO MATRIX CONTAINER LAYER
        aboutHTML += '<div style="padding-top: 110px; width: 100%; box-sizing: border-box; clear: both; display: block;">';
        aboutHTML += '  <div id="about-hero-zone" style="background: #0a1f44; color: #ffffff; padding: 60px 20px; position: relative; overflow: hidden; margin-bottom: 40px; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">';
        aboutHTML += '    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>';
        aboutHTML += '    <div style="max-width: 1450px; margin: 0 auto; padding: 0 24px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%;"> ';
        aboutHTML += '      <h1 style="font-size: 2.0rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px; text-align: center; width: 100%;">About filings4u</h1>';
        aboutHTML += '    </div>';
        aboutHTML += '  </div>';

        // 2. INNER CONTENT WRAPPER OPENER (Strictly contained to 1450px max-width alignment)
        aboutHTML += '  <div id="about-content-cards-root" style="max-width: 1450px; margin: 0 auto 50px auto; padding: 0 24px; box-sizing: border-box; display: block; clear: both; width: 100%;">';
        aboutHTML += '    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 40px; box-shadow: 0 4px 20px rgba(10,31,68,0.03); box-sizing: border-box; width: 100%;">';
        aboutHTML += '      <div style="font-size: 0.95rem; line-height: 1.6; color: #334155; text-align: left; max-width: 1100px; margin: 0 auto; box-sizing: border-box; width: 100%;">';
        
        // 3. BRAND NARRATIVE SECTION
        aboutHTML += '        <h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.3px;">Our Core Mission</h3>';
        aboutHTML += '        <p style="margin: 0 0 24px 0; font-size: 1.05rem; font-weight: 500; color: #0a1f44;">filings4u, LLC, a proud subsidiary of Roseland Companies, LLC, is an industry-leading corporate document management and automated compliance deployment platform based out of Illinois.</p>';
        aboutHTML += '        <p style="margin: 0 0 24px 0;">We engineered filings4u to eliminate the bureaucratic friction that slows down early-stage companies and commercial logistics operations. Instead of manually wrestling with complex city, state, or federal government web forms, our proprietary Business Wizard handles document preparation, asset validation, and multi-jurisdictional filings automatically, returning finalized corporate deeds securely back to you.</p>';

        // Save intermediate layout trace inside container properties
        zone.setAttribute("data-about-cache", aboutHTML);

    } catch (err) {
        console.error("About canvas core compiler lifecycle exception:", err);
    }
}
/* Part 2 - Fragment 2 of 2: Infrastructure Pillars & Closing Layouts */
(function() {
    const targetId = window.FILINGS4U_ABOUT_TARGET || "filings4u-about-hero-root";
    
    setTimeout(function() {
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // 1. Retrieve the starting layout text string compiled by Fragment 1
        var aboutHTML = zone.getAttribute("data-about-cache") || "";

        // 2. MULTI-PILLAR VALUE BLOCKS
        aboutHTML += '        <h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 40px 0 20px 0; text-transform: uppercase; letter-spacing: 0.3px;">The Platform Pillars</h3>';
        
        aboutHTML += '        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 35px; width: 100%; box-sizing: border-box;">';
        
        // PILLAR 1
        aboutHTML += '          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; box-sizing: border-box;">';
        aboutHTML += '            <h4 style="color: #0a1f44; font-size: 1.05rem; font-weight: 700; margin: 0 0 10px 0;">44+ Service Pipelines</h4>';
        aboutHTML += '            <p style="color: #475569; font-size: 0.88rem; line-height: 1.5; margin: 0;">From standard LLC formations and state EIN procurement to advanced DOT fleet registrations, safety consortia pools, and corporate tax matrices.</p>';
        aboutHTML += '          </div>';
        
        // PILLAR 2
        aboutHTML += '          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; box-sizing: border-box;">';
        aboutHTML += '            <h4 style="color: #0a1f44; font-size: 1.05rem; font-weight: 700; margin: 0 0 10px 0;">Corporate Class Shielding</h4>';
        aboutHTML += '            <p style="color: #475569; font-size: 0.88rem; line-height: 1.5; margin: 0;">We process data streams through secure, restricted-access environments designed to protect asset privacy and corporate filings information parameters safely.</p>';
        aboutHTML += '          </div>';
        
        // PILLAR 3
        aboutHTML += '          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; box-sizing: border-box;">';
        aboutHTML += '            <h4 style="color: #0a1f44; font-size: 1.05rem; font-weight: 700; margin: 0 0 10px 0;">Illinois Roots, National Scale</h4>';
        aboutHTML += '            <p style="color: #475569; font-size: 0.88rem; line-height: 1.5; margin: 0;">Governed out of the state of Illinois, our dynamic systems deploy documentation pipelines to any city, state, or federal government framework across the country.</p>';
        aboutHTML += '          </div>';
        
        aboutHTML += '        </div>';

        // 3. STATUTORY SUPPORT STATEMENT
        aboutHTML += '        <h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 35px 0 16px 0; text-transform: uppercase; letter-spacing: 0.3px;">Enterprise Delivery Guarantee</h3>';
        aboutHTML += '        <p style="margin: 0 0 24px 0;">We do not offer legal counsel or CPA tax consulting advice. We serve explicitly as a statutory filing agent interface. Your team supplies the foundational business criteria vectors inside our portal wizard, and our network ensures it maps cleanly, files correctly, and finishes securely.</p>';

        // 4. GENERAL DISCLOSURE NOTICE
        aboutHTML += '        <p style="margin: 30px 0 0 0; background: rgba(16,185,129,0.03); border-left: 4px solid #10b981; padding: 14px; border-radius: 0 8px 8px 0; font-weight: 600; color: #1e293b; font-size: 0.9rem;">';
        aboutHTML += '          For platform inquiries, portal assistance, or credential setup support, our administrative operations desk can be reached directly via our global communications channels or by emailing our team.';
        aboutHTML += '        </p>';

        // CLOSE MAIN SHEET CONTAINERS
        aboutHTML += '      </div>';
        aboutHTML += '    </div>';
        aboutHTML += '  </div>';
        aboutHTML += '</div>';

        // 5. Securely mount the complete structured text tree block to the webpage node point
        zone.innerHTML = aboutHTML;
        zone.removeAttribute("data-about-cache");

    }, 50);
})();
