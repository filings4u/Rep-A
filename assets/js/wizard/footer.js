// ============================================================================ //
// 📦 ISOLATED AUTOMATED SYSTEM FOOTER INJECTION ENGINE                         //
// ============================================================================ //
(function renderGlobalApplicationFooterHtml() {
  "use strict";

  // Target your dedicated external layout anchor placeholder right below Step 7
  const targetNode = document.getElementById("wizard-footer-injection-target");

  if (!targetNode) {
    // If the master HTML structural node isn't ready yet, defer execution safely
    setTimeout(renderGlobalApplicationFooterHtml, 40);
    return;
  }

  /**
   * FULL-WIDTH ALIGNMENT FIX: Applied negative margin breakout tracks.
   * This forces the dark navy bar to expand past the compressed padding bounds 
   * of the wizard card container, stretching its background seamlessly across the page layout.
   */
  targetNode.innerHTML = `
    <div id="f4u-standalone-footer-wrapper" style="width: calc(100% + 64px); margin-left: -32px; margin-right: -32px; margin-top: 40px; clear: both; position: relative; z-index: 10; box-sizing: border-box;">
      <footer class="portal-legal-footer" style="box-sizing: border-box; display: flex; justify-content: space-between; align-items: center; width: 100%; background: #0a1f44; padding: 24px 32px; color: #ffffff; border-radius: 0 0 12px 12px; margin: 0; clear: both;">
        
        <!-- LEFT COMPONENT: COPYRIGHT TEXT BLOCK -->
        <p class="copyright-text-block" style="margin: 0; font-size: 0.8rem; line-height: 1.5; text-align: left; color: #94a3b8;">
          &copy; 2026 filings4u, LLC. All rights reserved.<br>
          A Subsidiary of <a href="https://roselandcompanies.com" target="_blank" rel="noopener noreferrer" style="color: #10b981; text-decoration: none; font-weight: bold; transition: color 0.2s;">Roseland Companies, LLC</a>
        </p>

        <!-- CENTER COMPONENT: MIDDLE LEGAL LINKS -->
        <div class="footer-links-centered-row" style="display: flex; gap: 24px; align-items: center;">
          <a href="privacy-policy.html" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: color 0.2s;">Privacy Policy</a>
          <a href="terms-of-service.html" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: color 0.2s;">Terms of Service</a>
          <a href="refund-policy.html" style="color: #94a3b8; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: color 0.2s;">Refund Policy</a>
        </div>

        <!-- RIGHT COMPONENT: SECURE TRUST BADGE KEY -->
        <div class="trust-badge" style="background: rgba(255, 255, 255, 0.05); padding: 10px 20px; border-radius: 8px; font-size: 0.75rem; color: #ffffff; display: flex; align-items: center; white-space: nowrap; font-family: system-ui, sans-serif;">
          <span style="color: #10b981; font-weight: 800; margin-right: 8px; letter-spacing: 0.5px;">SECURE</span> 256-bit SSL Encrypted Connection
        </div>

      </footer>
    </div>
  `;

  console.log("[Footer Engine Success] Full-width breakout parameters applied cleanly inside container target.");
})();
