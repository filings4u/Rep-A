/**
 * filings4u Platform Architecture
 * Module: terms.js (Part 1 - Terms Canvas & Section 1 Setup)
 */

window.FILINGS4U_TERMS_TARGET = "filings4u-terms-of-service-root";

function renderMasterTermsOfServiceEngine(overrideTargetId) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_TERMS_TARGET || "filings4u-terms-of-service-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // Compile layout strings cleanly via split-safe concatenation
        var termsHTML = "";

        // 1. HERO MATRIX CONTAINER
        termsHTML += '<div style="padding-top: 110px; width: 100%; box-sizing: border-box; clear: both; display: block;">';
        termsHTML += '  <div id="terms-of-service-hero-zone" style="background: #0a1f44; color: #ffffff; padding: 50px 20px; position: relative; overflow: hidden; margin-bottom: 40px; border-bottom: 1px solid #e2e8f0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">';
        termsHTML += '    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>';
        termsHTML += '    <div style="max-width: 1450px; margin: 0 auto; padding: 0 24px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%;">';
        termsHTML += '      <h1 style="font-size: 2.0rem; font-weight: 900; margin: 0 0 6px 0; letter-spacing: -0.5px; text-align: center; width: 100%;">Terms of Service</h1>';
        termsHTML += '    </div>';
        termsHTML += '  </div>';

        // 2. INNER SHEET WRAPPER OPENER
        termsHTML += '  <div id="terms-of-service-content-cards-root" style="max-width: 1450px; margin: 0 auto 50px auto; padding: 0 24px; box-sizing: border-box; display: block; clear: both; width: 100%;"> ';
        termsHTML += '    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 40px; box-shadow: 0 4px 20px rgba(10,31,68,0.03); box-sizing: border-box; width: 100%;">';
        termsHTML += '      <div style="font-size: 0.9rem; line-height: 1.6; color: #334155; text-align: left; max-width: 1100px; margin: 0 auto; box-sizing: border-box; width: 100%;">';
        
        termsHTML += '        <p style="font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 24px;">Effective Date: June 21, 2026 | Governing State: Illinois</p>';
        
        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">1.0 Acceptance of Terms</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">By using the services provided by filings4u, LLC A Subsidiary of Roseland Companies, LLC ("we," "us," or "our"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services or this website.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">2.0 Services Offered</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">filings4u, LLC offers various business registration, tax structuring, and compliance tracking services, including but not limited to the execution, preparation, delivery, optimization, and submission of the following multi-jurisdictional pipelines:</p>';

        // Temporarily cache compiled strings inside container attributes
        zone.setAttribute("data-terms-cache", termsHTML);

    } catch (err) {
        console.error("Terms module core canvas crash:", err);
    }
}

/* Part 2 - Fragment 1 of 2: Operations Grid, Section 3.0 through 7.0 */
(function() {
    const targetId = window.FILINGS4U_TERMS_TARGET || "filings4u-terms-of-service-root";
    
    setTimeout(function() {
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // Retrieve the starting layout string compiled by Fragment 1
        var termsHTML = zone.getAttribute("data-terms-cache") || "";

        // 3. INJECTING THE 44-SERVICE CHECKLIST MULTI-COLUMN COMPONENT CONTAINER
        termsHTML += '        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px; columns: 2; -webkit-columns: 2; -moz-columns: 2; gap: 30px; width: 100%; box-sizing: border-box;">';
        termsHTML += '          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.8rem; color: #475569; line-height: 1.9; text-align: left;">';
        termsHTML += '            <li>• LLC Formation Architecture</li>';
        termsHTML += '            <li>• Corporations Incorporation Vectors</li>';
        termsHTML += '            <li>• Sole Proprietorship Structuring</li>';
        termsHTML += '            <li>• DBA Registration Filings</li>';
        termsHTML += '            <li>• Nonprofit Organization Declarations</li>';
        termsHTML += '            <li>• Series LLC Fragmentary Asset Setups</li>';
        termsHTML += '            <li>• Foreign Qualification Filings</li>';
        termsHTML += '            <li>• LLC Reinstatement Recovery Lines</li>';
        termsHTML += '            <li>• Trademark Filing Registration</li>';
        termsHTML += '            <li>• Servicemark Filing Protections</li>';
        termsHTML += '            <li>• Annual Reports Statutory Postings</li>';
        termsHTML += '            <li>• Operating Agreement Compilation</li>';
        termsHTML += '            <li>• Registered Agent Representation</li>';
        termsHTML += '            <li>• Business Licenses Enforcement</li>';
        termsHTML += '            <li>• Employer ID (EIN) Procurement</li>';
        termsHTML += '            <li>• Entity Dissolution De-Registrations</li>';
        termsHTML += '            <li>• Certificate of Good Standing Queries</li>';
        termsHTML += '            <li>• Apostille Services Inter-Gov Authentication</li>';
        termsHTML += '            <li>• CLIA Certificate Laboratory Registries</li>';
        termsHTML += '            <li>• Regulatory Consulting Oversight</li>';
        termsHTML += '            <li>• Federal Income Tax Filing Matrices</li>';
        termsHTML += '            <li>• State Income Tax Reporting Networks</li>';
        termsHTML += '            <li>• Franchise Tax Filing Ledgers</li>';
        termsHTML += '            <li>• Sales Tax Registration Bindings</li>';
        termsHTML += '            <li>• Payroll Tax (940/941) Deductions</li>';
        termsHTML += '            <li>• Heavy Use Tax (2290) Trucking Filings</li>';
        termsHTML += '            <li>• CAGE Code Defense Procurement Bindings</li>';
        termsHTML += '            <li>• DUNS Number Institutional Tracking</li>';
        termsHTML += '            <li>• Minority Certificate Structuring Profiles</li>';
        termsHTML += '            <li>• Trucker Authority (MC Number) Networks</li>';
        termsHTML += '            <li>• Broker Authority Intermediary Nodes</li>';
        termsHTML += '            <li>• UCR Registration Unified Carrier Metrics</li>';
        termsHTML += '            <li>• SCAC Code Logistics Identifiers</li>';
        termsHTML += '            <li>• DOT Consortium Testing Random Pools</li>';
        termsHTML += '            <li>• Driver Qualification File (DQF) Ledger</li>';
        termsHTML += '            <li>• Process Agent (BOC-3) Representation</li>';
        termsHTML += '            <li>• IFTA Registration Mileage Systems</li>';
        termsHTML += '            <li>• HAZMAT Registration Safety Matrices</li>';
        termsHTML += '            <li>• Local, State, &amp; Federal Licenses &amp; Permits</li>';
        termsHTML += '            <li>• Trucker Insurance Premium Quotations</li>';
        termsHTML += '            <li>• Broker Insurance Liabilities Quotations</li>';
        termsHTML += '            <li>• New Entrant Audit Pre-Audit Dossier Checks</li>';
        termsHTML += '          </ul>';
        termsHTML += '        </div>';

        termsHTML += '        <p style="margin: 0 0 16px 0;">We reserve the right to add, modify, or discontinue any services at our sole discretion without prior notification barriers.</p>';

        // 4. INJECT SECTIONS 3.0 THROUGH 7.0
        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">3.0 Client Responsibilities</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">As a client, you agree to provide accurate and complete information necessary for us to provide our services. You are responsible for ensuring that your data is up to date and for reviewing all documents associated with our services.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">4.0 Information Collection and Use</h3>';
        termsHTML += '        <p style="margin: 0 0 8px 0;">We collect personal and organization metrics, which may include:</p>';
        termsHTML += '        <ul style="list-style: none; padding: 0 0 0 16px; margin: 0 0 16px 0; color: #475569;">';
        termsHTML += '          <li>• Names, addresses, and contact information</li>';
        termsHTML += '          <li>• Business information (e.g., type of business entity)</li>';
        termsHTML += '          <li>• Financial information necessary for tax purposes</li>';
        termsHTML += '          <li>• Personal information (e.g., social security number)</li>';
        termsHTML += '          <li>• Other data required to comply with state, city or federal regulations</li>';
        termsHTML += '        </ul>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">This information is used to provide our services, communicate with you, and ensure compliance with legal obligations.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">5.0 Payment Terms</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">You agree to pay all fees associated with the services you request. We reserve the right to change our fees and payment terms, with or without advance notice, if we send out updates it will be via email or through our website.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">6.0 Business Wizard Compliance</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">We use a proprietary Business Wizard tool to help clients navigate the complexities of business formation and compliance. By using this tool, you consent to the collection and processing of your data in accordance with applicable laws and regulations.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">7.0 Data Protection</h3>';
        termsHTML += '        <p style="margin: 0 0 8px 0;">We implement various security measures to protect your personal information, including:</p>';
        termsHTML += '        <ul style="list-style: none; padding: 0 0 0 16px; margin: 0 0 16px 0; color: #475569;">';
        termsHTML += '          <li>• Encryption of sensitive data</li>';
        termsHTML += '          <li>• Restricted access to personal information to authorized personnel only</li>';
        termsHTML += '          <li>• Ongoing staff training on data privacy and security best practices</li>';
        termsHTML += '        </ul>';

        // Stash the temporary compilation array layer before running fragment 2
        zone.setAttribute("data-terms-extended-cache", termsHTML);

    }, 50);
})();

/* --- FINAL CLOSING SECTIONS INFRASTRUCTURE MATRIX --- */
(function() {
    const targetId = window.FILINGS4U_TERMS_TARGET || "filings4u-terms-of-service-root";
    
    setTimeout(function() {
        const zone = document.getElementById(targetId);
        if (!zone) return;

        // Retrieve the temporary compilation cache string built by your previous block
        var termsHTML = zone.getAttribute("data-terms-extended-cache") || "";

        // 1. INJECT SECTIONS 8.0 THROUGH 10.0
        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">8.0 Information Sharing</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">We do not sell, trade, or transfer your personal information to outside parties without your consent, except as required to provide our services or comply with legal obligations. We may share information with trusted third parties who assist us in operating our business or servicing you, provided those parties agree to keep this information confidential.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">9.0 Your Rights</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">You have the right to request access to the personal information we hold about you, request corrections to that information, and request the deletion of your personal data where applicable. To exercise these rights, please contact us at <a href="mailto:privacy@filings4u.com" style="color: #10b981; text-decoration: none; font-weight: 700;">privacy@filings4u.com</a>.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">10.0 Changes to Terms</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">We reserve the right to update these Terms of Service from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our services after such changes constitutes your acceptance of the new Terms.</p>';

        // 2. INJECT SECTIONS 11.0 THROUGH 13.0
        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">11.0 Limitation of Liability</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">To the fullest extent permitted by law, filings4u, LLC shall not be liable for any indirect, incidental, or consequential damages arising from or related to your use of our services.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">12.0 Governing Law</h3>';
        termsHTML += '        <p style="margin: 0 0 16px 0;">These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law principles.</p>';

        termsHTML += '        <h3 style="color: #0a1f44; font-size: 1.15rem; font-weight: 800; border-left: 3px solid #10b981; padding-left: 10px; margin: 24px 0 12px 0; text-transform: uppercase; letter-spacing: 0.3px;">13.0 Contact Us</h3>';
        termsHTML += '        <p style="margin: 0 0 24px 0;">If you have any questions or concerns about these Terms of Service or our practices, please contact us at:</p>';

        // 3. CORPORATE IDENTITY & LINKS FOOTPRINTS
        termsHTML += '        <p style="margin: 0 0 24px 0; font-weight: 700; color: #0a1f44; line-height: 1.5;">filings4u, LLC<br><span style="font-size: 0.85rem; color: #64748b; font-weight: 500;">A Subsidiary of Roseland Companies, LLC</span><br><span style="font-size: 0.85rem; color: #64748b; font-weight: 500;"><a href="mailto:terms@filings4u.com" style="color: #10b981; text-decoration: none; font-weight: 700;">terms@filings4u.com</a></span></p>';

        // 4. RED STATUTORY LIABILITY WARNING DISCLAIMER BLOCK
        termsHTML += '        <p style="margin: 0 0 16px 0; background: rgba(239,68,68,0.03); border-left: 4px solid #ef4444; padding: 14px; border-radius: 0 8px 8px 0; font-weight: 600; color: #1e293b;">';
        termsHTML += '          <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444; margin-right: 4px;"></i> We do not sell insurance, offer legal counsel or advice, or act as financial advisors, consultants, or CPAs. We are a city, state, and government filings entity. We manage the preparation and submission of documents on your behalf. However, please be aware that we cannot be held liable for any errors you make while completing forms through our Business Wizard. You supply the information, and we ensure it is filed correctly with the city, state, or government, and provide you with the finalized documents.';
        termsHTML += '        </p>';

        // 5. SIGN-OFF ACCEPTANCE STATEMENT CLOSURE
        termsHTML += '        <p style="margin: 0; font-size: 0.85rem; color: #64748b; font-weight: 600; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">By utilizing our services, you confirm that you have read, understood, and agreed to these Terms of Service.</p>';

        // CLOSE MAIN SHEET CONTAINERS
        termsHTML += '      </div>';
        termsHTML += '    </div>';
        termsHTML += '  </div>';
        termsHTML += '</div>';

        // Render completed HTML code strings onto page root node target point
        zone.innerHTML = termsHTML;
        
        // Purge memory cache layers completely to maintain standard performance limits
        zone.removeAttribute("data-terms-cache");
        zone.removeAttribute("data-terms-extended-cache");

    }, 60);
})();


