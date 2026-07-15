/**
 * filings4u Platform Architecture
 * Module: navigation.js (Part 1 - Dynamic Structural Blueprint)
 * 🟢 REPAIRED: Cleaned out conflicting event listeners to stop menu toggle freezes.
 */

// 1. Setup global target configurations to point cleanly to your root container element
window.FILINGS4U_NAV_TARGET = "filings4u-global-navigation-root";

function renderDynamicGlobalCorporateNavigation() {
  try {
    const targetId = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";
    const zone = document.getElementById(targetId);
    if (!zone) return;

    // Compile structural HTML layouts using your clean class rules natively
    zone.innerHTML = `
      <nav class="site-header">
        <div class="nav-content-wrapper">
          <!-- BRAND LOGO NODE -->
          <a href="index.html" class="logo-link">
            <img src="images/logo.png" alt="filings4u" class="logo">
          </a>
          
          <!-- MOBILE ACCORDION DRAWER CONTROLLER BUTTON -->
          <button class="mobile-toggle-btn" id="mobile-menu-trigger" type="button" aria-label="Toggle Navigation" aria-expanded="false">☰</button>
          
          <!-- NAVIGATION LAYOUT LINKS DROPDOWN CONTAINERS -->
          <div class="nav-links" id="nav-links-container">
            <!-- Dynamic submenu link fragments auto-mount right here -->
          </div>
        </div>
      </nav>
    `;
  } catch (err) {
    console.error("Navigation master canvas runtime structure failure:", err);
  }
}
window.renderDynamicGlobalCorporateNavigation = renderDynamicGlobalCorporateNavigation;

/**
 * filings4u Platform Architecture
 * Module: navigation.js (Part 2 - Clean Blueprint Matrix Injection)
 */
(function() {
  const targetId = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";
  
  setTimeout(function() {
    const zone = document.getElementById(targetId);
    const linksContainer = zone ? zone.querySelector("#nav-links-container") : null;
    if (!zone || !linksContainer) return;

    // Output the exact menu layout blueprint matched to your master.css classes
    const fullMenuHTML = `
      <!-- FORMATIONS DROPDOWN -->
      <div class="nav-item-dropdown static-dropdown">
        <a href="#" class="dropdown-toggle">Formations <span class="arrow-indicator">▼</span></a>
        <div class="dropdown-content mega-panel-two-col">
          <div class="mega-column">
            <span class="column-title">Popular Formations</span>
            <a href="llc-formation.html">LLC Formation</a>
            <a href="corporations.html">Corporations (C/S-Corp)</a>
            <a href="sole-proprietorship.html">Sole Proprietorship</a>
          </div>
          <div class="mega-column">
            <span class="column-title">Specialty Structures</span>
            <a href="dba-registration.html">DBA Registration</a>
            <a href="nonprofits.html">Nonprofit Organization</a>
            <a href="series-llc.html">Series LLC</a>
          </div>
        </div>
      </div>

      <!-- COMPLIANCE DROPDOWN -->
      <div class="nav-item-dropdown static-dropdown">
        <a href="#" class="dropdown-toggle">Compliance <span class="arrow-indicator">▼</span></a>
        <div class="dropdown-content mega-panel-two-col">
          <div class="mega-column">
            <span class="column-title">Entity Health</span>
            <a href="annual-reports.html">Annual Reports</a>
            <a href="operating-agreement.html">Operating Agreement</a>
            <a href="registered-agent.html">Registered Agent</a>
            <a href="certificate-of-good-standing.html">Certificate of Good Standing</a>
            <a href="llc-reinstatement.html">LLC Reinstatement</a>
          </div>
          <div class="mega-column">
            <span class="column-title">Licensing & Operations</span>
            <a href="business-licenses.html">Business Licenses</a>
            <a href="employer-id-ein.html">Employer ID (EIN)</a>
            <a href="foreign-qualification.html">Foreign Qualification</a>
            <a href="apostille-services.html">Apostille Services</a>
            <a href="dissolution.html">Entity Dissolution</a>
          </div>
        </div>
      </div>

      <!-- TAX FILINGS DROPDOWN -->
      <div class="nav-item-dropdown static-dropdown">
        <a href="#" class="dropdown-toggle">Tax Filings <span class="arrow-indicator">▼</span></a>
        <div class="dropdown-content mega-panel-two-col">
          <div class="mega-column">
            <span class="column-title">Income & Operations</span>
            <a href="federal-tax.html">Federal Income Tax</a>
            <a href="state-tax.html">State Income Tax</a>
            <a href="franchise-tax.html">Franchise Tax Filing</a>
            <a href="payroll-tax-940-941.html">Payroll Tax (940/941)</a>
          </div>
          <div class="mega-column">
            <span class="column-title">Sales & Specialty</span>
            <a href="sales-tax-registration.html">Sales Tax Registration</a>
            <a href="heavy-use-tax-2290.html">Heavy Use Tax (2290)</a>
            <a href="clia-certificate.html">CLIA Certificate</a>
            <a href="regulatory-consulting.html">Regulatory Consulting</a>
          </div>
        </div>
      </div>

      <!-- CORPORATE REGISTRATIONS DROPDOWN -->
      <div class="nav-item-dropdown static-dropdown">
        <a href="#" class="dropdown-toggle">Registrations <span class="arrow-indicator">▼</span></a>
        <div class="dropdown-content mega-panel-two-col">
          <div class="mega-column">
            <span class="column-title">Government Identifiers</span>
            <a href="cage-code.html">CAGE Code</a>
            <a href="duns-number.html">DUNS Number</a>
            <a href="procurement.html">Grant Procurement</a>
            <a href="minority-certificate.html">Minority Certificate</a>
          </div>
          <div class="mega-column">
            <span class="column-title">Intellectual Property</span>
            <a href="trademark-filing.html">Trademark Filing</a>
            <a href="servicemark-filing.html">Servicemark Filing</a>
          </div>
        </div>
      </div>

      <!-- DOT & FLEET DROPDOWN -->
      <div class="nav-item-dropdown static-dropdown">
        <a href="#" class="dropdown-toggle">DOT & Fleet <span class="arrow-indicator">▼</span></a>
        <div class="dropdown-content mega-panel-four-col">
          <div class="mega-column">
            <span class="column-title">Authority Setup</span>
            <a href="owner-operators.html">Owner Operators</a>
            <a href="trucker-authority.html">Trucker Authority</a>
            <a href="broker-authority.html">Broker Authority</a>
          </div>
          <div class="mega-column">
            <span class="column-title">Authority Compliance</span>
            <a href="dot-consortium.html">DOT Consortium</a>
            <a href="driver-file.html">Driver Qualification File</a>
            <a href="process-agent-boc3.html">Process Agent (BOC-3)</a>
            <a href="boc-3-amendment.html">BOC-3 Amendment</a>
            <a href="mcs-150-update.html">MCS-150 Update</a>
            <a href="new-entrant-audit.html">New Entrant Audit</a>
          </div>
          <div class="mega-column">
            <span class="column-title">Annual Filings</span>
            <a href="ucr-registration.html">UCR Registration</a>
            <a href="scac-code.html">SCAC Code</a>
            <a href="ifta-registration.html">IFTA Registration</a>
            <a href="ifta-quarterly-returns.html">IFTA Quarterly Returns</a>
            <a href="hazmat-registration.html">HAZMAT Registration</a>
          </div>
          <div class="mega-column">
            <span class="column-title">Insurance & Risk</span>
            <a href="dot-permits.html">Licenses & Permits</a>
            <a href="trucker-insurance-quote.html">Trucker Insurance</a>
            <a href="broker-insurance-quote.html">Broker Insurance</a>
          </div>
        </div>
      </div>
      
      <a href="https://portal.filings4u.com/client-dashboard.html" class="btn-client-portal">Client Portal</a>
    `;
    linksContainer.innerHTML = fullMenuHTML;
    console.log("[Navigation Matrix] Blueprint HTML templates mounted successfully. Event delegation deferred to toggle.js.");
  }, 50);
})();
