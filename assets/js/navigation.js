/**
 * filings4u Platform Architecture
 * Module: navigation.js — Global Navigation Source of Truth
 * Update this file once and every page using #filings4u-global-navigation-root updates globally.
 */
window.FILINGS4U_NAV_TARGET = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";

(function () {
  const MENU_HTML = `
    <div class="nav-item-dropdown static-dropdown">
      <a href="#" class="dropdown-toggle">Formations <span class="arrow-indicator">⌄</span></a>
      <div class="dropdown-content mega-panel-two-col">
        <div class="mega-column"><span class="column-title">Popular Formations</span><a href="llc-formation.html">LLC Formation</a><a href="corporations.html">Corporations (C/S-Corp)</a><a href="sole-proprietorship.html">Sole Proprietorship</a></div>
        <div class="mega-column"><span class="column-title">Specialty Structures</span><a href="dba-registration.html">DBA Registration</a><a href="nonprofits.html">Nonprofit Organization</a><a href="series-llc.html">Series LLC</a></div>
      </div>
    </div>
    <div class="nav-item-dropdown static-dropdown">
      <a href="#" class="dropdown-toggle">Compliance <span class="arrow-indicator">⌄</span></a>
      <div class="dropdown-content mega-panel-two-col">
        <div class="mega-column"><span class="column-title">Entity Health</span><a href="annual-reports.html">Annual Reports</a><a href="operating-agreement.html">Operating Agreement</a><a href="registered-agent.html">Registered Agent</a><a href="certificate-of-good-standing.html">Certificate of Good Standing</a><a href="llc-reinstatement.html">LLC Reinstatement</a></div>
        <div class="mega-column"><span class="column-title">Licensing & Operations</span><a href="business-licenses.html">Business Licenses</a><a href="employer-id-ein.html">Employer ID (EIN)</a><a href="foreign-qualification.html">Foreign Qualification</a><a href="apostille-services.html">Apostille Services</a><a href="dissolution.html">Entity Dissolution</a></div>
      </div>
    </div>
    <div class="nav-item-dropdown static-dropdown">
      <a href="#" class="dropdown-toggle">Tax Filings <span class="arrow-indicator">⌄</span></a>
      <div class="dropdown-content mega-panel-two-col">
        <div class="mega-column"><span class="column-title">Income & Operations</span><a href="federal-tax.html">Federal Income Tax</a><a href="state-tax.html">State Income Tax</a><a href="franchise-tax.html">Franchise Tax Filing</a><a href="payroll-tax-940-941.html">Payroll Tax (940/941)</a></div>
        <div class="mega-column"><span class="column-title">Sales & Specialty</span><a href="sales-tax-registration.html">Sales Tax Registration</a><a href="heavy-use-tax-2290.html">Heavy Use Tax (2290)</a><a href="clia-certificate.html">CLIA Certificate</a><a href="regulatory-consulting.html">Regulatory Consulting</a></div>
      </div>
    </div>
    <div class="nav-item-dropdown static-dropdown">
      <a href="#" class="dropdown-toggle">Registrations <span class="arrow-indicator">⌄</span></a>
      <div class="dropdown-content mega-panel-two-col">
        <div class="mega-column"><span class="column-title">Government Identifiers</span><a href="cage-code.html">CAGE Code</a><a href="duns-number.html">DUNS Number</a><a href="minority-certificate.html">Minority Certificate</a></div>
        <div class="mega-column"><span class="column-title">Intellectual Property</span><a href="trademark-filing.html">Trademark Filing</a><a href="servicemark-filing.html">Servicemark Filing</a></div>
      </div>
    </div>
    <div class="nav-item-dropdown static-dropdown nav-item-dropdown--wide">
      <a href="#" class="dropdown-toggle">DOT & Fleet <span class="arrow-indicator">⌄</span></a>
      <div class="dropdown-content mega-panel-four-col">
        <div class="mega-column"><span class="column-title">Authority Setup</span><a href="owner-operators.html">Owner Operators</a><a href="trucker-authority.html">Trucker Authority</a><a href="broker-authority.html">Broker Authority</a></div>
        <div class="mega-column"><span class="column-title">Authority Compliance</span><a href="dot-consortium.html">DOT Consortium</a><a href="driver-file.html">Driver Qualification File</a><a href="process-agents-boc-3.html">Process Agent (BOC-3)</a><a href="boc-3-amendment.html">BOC-3 Amendment</a><a href="mcs-150-update.html">MCS-150 Update</a><a href="new-entrant-audit.html">New Entrant Audit</a></div>
        <div class="mega-column"><span class="column-title">Annual Filings</span><a href="ucr-registration.html">UCR Registration</a><a href="scac-code.html">SCAC Code</a><a href="ifta-registration.html">IFTA Registration</a><a href="ifta-quarterly-returns.html">IFTA Quarterly Returns</a><a href="hazmat-registration.html">HAZMAT Registration</a></div>
        <div class="mega-column"><span class="column-title">Insurance & Risk</span><a href="dot-permits.html">Licenses & Permits</a><a href="trucker-insurance-quote.html">Trucker Insurance</a><a href="broker-insurance-quote.html">Broker Insurance</a></div>
      </div>
    </div>
    <a href="https://portal.filings4u.com/portal-login.html" class="btn-client-portal">Client Portal</a>`;

  function renderDynamicGlobalCorporateNavigation() {
    const zone = document.getElementById(window.FILINGS4U_NAV_TARGET);
    if (!zone) return;
    zone.innerHTML = `
      <header class="site-header global-site-header" id="top">
        <div class="nav-content-wrapper">
          <a href="index.html" class="logo-link" aria-label="filings4u home"><img src="images/logo.png" alt="filings4u" class="logo"></a>
          <button class="mobile-toggle-btn" id="mobile-menu-trigger" type="button" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
          <nav class="nav-links" id="nav-links-container" aria-label="Primary navigation">${MENU_HTML}</nav>
        </div>
      </header>`;
    document.dispatchEvent(new CustomEvent('filings4u:navigation-rendered'));
  }
  window.renderDynamicGlobalCorporateNavigation = renderDynamicGlobalCorporateNavigation;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderDynamicGlobalCorporateNavigation);
  else renderDynamicGlobalCorporateNavigation();
})();
