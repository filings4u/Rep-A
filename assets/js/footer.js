/**
 * filings4u Platform Architecture
 * Module: footer.js (Part 1 - Isolated Stylesheet Engine)
 */
(function() { 
  const targetConfig = { 
    elementId: "filings4u-global-footer-root", 
    styleId: "filings4u-footer-styles" 
  }; 
  
  if (!document.getElementById(targetConfig.styleId)) { 
    const styleSheet = document.createElement("style"); 
    styleSheet.id = targetConfig.styleId; 
    styleSheet.textContent = ` 
      #${targetConfig.elementId} .site-footer { background: #0a1f44; color: #ffffff; font-family: system-ui, sans-serif; width: 100%; box-sizing: border-box; margin: 0 !important; padding: 0 !important; } 
      #${targetConfig.elementId} .footer-container { max-width: 1450px; margin: 0 auto; padding: 80px 40px 50px 40px; display: flex; flex-wrap: wrap; gap: 40px; box-sizing: border-box; } 
      #${targetConfig.elementId} .footer-brand { flex: 2; min-width: 280px; box-sizing: border-box; } 
      #${targetConfig.elementId} .footer-brand p { color: #94a3b8; font-size: 0.95rem; line-height: 1.5; margin: 20px 0 0 0; max-width: 320px; } 
      
      /* NEW ISOLATED DESKTOP MATRIX LINK WRAPPER */
      #${targetConfig.elementId} .footer-links-matrix { flex: 4; display: flex; flex-wrap: wrap; gap: 40px; box-sizing: border-box; }
      #${targetConfig.elementId} .footer-col { flex: 1; min-width: 160px; box-sizing: border-box; } 
      #${targetConfig.elementId} .footer-col h4 { color: #ffffff; font-size: 1rem; font-weight: 700; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.5px; } 
      #${targetConfig.elementId} .footer-col ul { list-style: none; padding: 0; margin: 0; } 
      #${targetConfig.elementId} .footer-col li { margin-bottom: 6px !important; } 
      #${targetConfig.elementId} .footer-col a { color: #94a3b8; text-decoration: none; font-size: 0.9rem; transition: color 0.2s ease; } 
      #${targetConfig.elementId} .footer-col a:hover { color: #10b981; } 

      #${targetConfig.elementId} .footer-bottom { max-width: 1450px !important; width: 100% !important; min-width: 0 !important; margin: 0 auto !important; padding: 30px 40px !important; border-top: 1px solid rgba(255, 255, 255, 0.08) !important; display: flex !important; justify-content: space-between !important; align-items: center !important; flex-wrap: wrap !important; gap: 24px !important; box-sizing: border-box !important; color: #94a3b8 !important; } 
      #${targetConfig.elementId} .footer-bottom-copyright, #${targetConfig.elementId} .footer-bottom span, #${targetConfig.elementId} .footer-bottom div p, #${targetConfig.elementId} .trust-badge, #${targetConfig.elementId} .trust-badge span, #${targetConfig.elementId} .legal-links, #${targetConfig.elementId} .legal-links a { color: #94a3b8 !important; font-size: 0.85rem !important; font-weight: 400 !important; line-height: 1.5 !important; letter-spacing: normal !important; } 
      #${targetConfig.elementId} .legal-links { display: flex !important; gap: 24px !important; flex-wrap: wrap !important; } 
      #${targetConfig.elementId} .legal-links a { text-decoration: none !important; transition: color 0.2s ease !important; } 
      #${targetConfig.elementId} .legal-links a:hover { color: #10b981 !important; } 
      #${targetConfig.elementId} .scroll-to-top-btn { position: fixed !important; bottom: 30px !important; right: -60px !important; width: 44px !important; height: 44px !important; background: #10b981 !important; color: #ffffff !important; border: none !important; border-radius: 50% !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3) !important; transition: all 0.3s ease !important; z-index: 9999 !important; } 
      #${targetConfig.elementId} .scroll-to-top-btn.visible { right: 30px !important; } 
      #${targetConfig.elementId} .scroll-to-top-btn:hover { background: #0e9f6e !important; transform: translateY(-2px) !important; } 

      /* === HIGH-PERFORMANCE MOBILE OPTIMIZATIONS (BELOW 768PX) === */
      @media (max-width: 768px) { 
        #${targetConfig.elementId} .footer-container { display: flex !important; flex-direction: column !important; padding: 50px 24px 30px 24px !important; gap: 35px !important; } 
        #${targetConfig.elementId} .footer-brand { max-width: 100% !important; text-align: left !important; } 
        #${targetConfig.elementId} .footer-brand p { max-width: 100% !important; margin-top: 15px !important; } 
        
        /* FIXED ENGINE RULE: FORCE SUB-WRAPPER INTO A 2X2 GRID MATRIX COLD */
        #${targetConfig.elementId} .footer-links-matrix { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 30px 16px !important; width: 100% !important; }
        #${targetConfig.elementId} .footer-col { width: 100% !important; min-width: 0 !important; }
        
        #${targetConfig.elementId} .footer-bottom { width: 100% !important; max-width: 100% !important; padding: 30px 24px !important; flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 20px !important; } 
        #${targetConfig.elementId} .legal-links { gap: 16px !important; width: 100% !important; justify-content: center !important; } 
        #${targetConfig.elementId} .trust-badge { width: 100% !important; text-align: center !important; box-sizing: border-box !important; } 
      } 
    `; 
    document.head.appendChild(styleSheet); 
  } 
  window.FILINGS4U_FOOTER_TARGET = targetConfig.elementId; 
})();

/* Part 2: Responsive Footer Structure & Social SVG Integration */
function renderDynamicGlobalCorporateFooter(overrideTargetId) {
  try {
    const targetId = overrideTargetId || window.FILINGS4U_FOOTER_TARGET || "filings4u-global-footer-root";
    const zone = document.getElementById(targetId);
    if (!zone) return;

    zone.innerHTML = `
      <footer class="site-footer" style="position: relative; overflow: hidden;">
        <!-- Tech Vector Network Grid Background Layer -->
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.04; pointer-events: none; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        
        <div class="footer-container">
          <!-- BRAND IDENTIFICATION CELL PANEL -->
          <div class="footer-brand">
            <a href="index.html" style="display: inline-block; text-decoration: none; transition: opacity 0.2s ease;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
              <img src="images/logo-white.png" alt="filings4u" style="height: 48px !important; width: auto !important; object-fit: contain;">
            </a>
            <p>Providing enterprise-grade filing and compliance solutions for local and corporate entities.</p>
            <div style="margin-top: 25px; display: flex; gap: 15px;">
              <!-- LinkedIn -->
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;">
                <svg width="14" height="14" fill="white" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
              </a>
              <!-- YouTube -->
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;">
                <svg width="16" height="16" fill="white" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.301 1.103.33 3.483.33 4.246 0 .763-.029 3.143-.33 4.246a2.01 2.01 0 0 1-1.415 1.419c-1.123.302-5.288.332-6.11.335h-.09c-.822-.003-4.987-.033-6.11-.335a2.01 2.01 0 0 1-1.415-1.419C.03 11.143 0 8.763 0 8c0-.763.029-3.143.33-4.246a2.01 2.01 0 0 1 1.415-1.42c1.123-.302 5.288-.332 6.11-.335h.089zM6.374 11.155l4.356-2.651a.26.26 0 0 0 0-.442L6.374 5.412a.26.26 0 0 0-.398.221v5.301a.26.26 0 0 0 .398.22z"/></svg>
              </a>
              <!-- X -->
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" style="width: 28px; height: 28px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none;">
                <svg width="12" height="12" fill="white" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>
              </a>
            </div>
          </div>
          
          <!-- FIXED COMPILER LOOP: Dynamic sub-grid matrix isolates links and unlocks 2x2 stacking on mobile -->
          <div class="footer-links-matrix">
            <div class="footer-col">
              <h4>Formations</h4>
              <ul>
                <li><a href="llc-formation.html">LLC Formation</a></li>
                <li><a href="corporations.html">Corporations</a></li>
                <li><a href="nonprofits.html">Non-Profits</a></li>
                <li><a href="registered-agent.html">Registered Agent</a></li>
                <li><a href="employer-id-ein.html">Tax ID (EIN)</a></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>Fleet & DOT</h4>
              <ul>
                <li><a href="ucr-registration.html">UCR Registration</a></li>
                <li><a href="ifta-registration.html">IFTA Filings</a></li>
                <li><a href="trucker-authority.html">DOT Authority</a></li>
                <li><a href="process-agents-boc-3.html">BOC-3 Filing</a></li>
                <li><a href="heavy-use-tax-2290.html">Form 2290</a></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>Tax & Filings</h4>
              <ul>
                <li><a href="federal-tax.html">Federal Income Tax</a></li>
                <li><a href="state-tax.html">State Income Tax</a></li>
                <li><a href="sales-tax-registration.html">Sales Tax Registration</a></li>
                <li><a href="payroll-tax-940-941.html">Payroll Tax (940/941)</a></li>
                <li><a href="franchise-tax.html">Franchise Tax Filing</a></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="https://filings4u.com">Client Portal</a></li>
                <li><a href="compliance.html">Compliance Hub</a></li>
                <li><a href="contact.html">Contact Experts</a></li>
                <li><a href="annual-reports.html">Annual Reports</a></li>
                <li><a href="blog.html">Resource Library</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-copyright">
            <p>&copy; 2026 filings4u, LLC. All rights reserved. <br> A Subsidiary of <a href="https://roselandcompanies.com" target="_blank" rel="noopener noreferrer" style="color: #c15254; text-decoration: none; font-weight: bold;">Roseland Companies, LLC</a></p>
          </div>
          
          <div class="trust-badge" style="background: rgba(255, 255, 255, 0.05) !important; border-radius: 8px !important; padding: 10px 20px !important;">
            <span style="color: #10b981 !important; font-weight: 800 !important; margin-right: 8px !important; display: inline !important;">SECURE</span> 256-bit SSL Encrypted Connection
          </div>
          
          <div class="legal-links">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-of-service.html">Terms of Service</a>
            <a href="refund-policy.html">Refund Policy</a>
          </div>
        </div>
      </footer>

      <!-- SCROLL TO TOP FLOATING INTERFACE -->
      <button id="scrollToTopBtn" aria-label="Scroll to top" class="scroll-to-top-btn">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg>
      </button>
    `;
    setupFooterScrollLogic(zone);
  } catch (err) {
    console.error("Footer template compilation failure:", err);
  }
}

function setupFooterScrollLogic(zone) {
  const scrollBtn = zone.querySelector("#scrollToTopBtn");
  if (!scrollBtn) return;

  window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  }, { passive: true });

  scrollBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.renderDynamicGlobalCorporateFooter = renderDynamicGlobalCorporateFooter;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() { renderDynamicGlobalCorporateFooter(); });
} else {
  renderDynamicGlobalCorporateFooter();
}
