/**
 * filings4u Global Footer
 *
 * Usage on every page:
 *
 *   <div id="filings4u-global-footer-root"></div>
 *   <script defer src="assets/js/footer.js"></script>
 *
 * Remove the old hard-coded <footer>...</footer> from each page.
 */
(function () {
  "use strict";

  const FOOTER_HTML = `
    <footer class="site-footer">
      <div class="container footer-grid">

        <div class="footer-brand">
          <img src="images/logo-white.png" alt="filings4u">
          <p>
            Business formation, tax registration, compliance, and DOT fleet
            support—organized around one clearer experience.
          </p>
        </div>

        <div>
          <h3>Business</h3>
          <a href="llc-formation.html">LLC Formation</a>
          <a href="corporations.html">Corporations</a>
          <a href="sole-proprietorship.html">Sole Proprietorship</a>
          <a href="dba-registration.html">DBA Registration</a>
          <a href="employer-id-ein.html">Employer ID (EIN)</a>
        </div>

        <div>
          <h3>Compliance</h3>
          <a href="annual-reports.html">Annual Reports</a>
          <a href="operating-agreement.html">Operating Agreement</a>
          <a href="business-licenses.html">Business Licenses</a>
          <a href="certificate-of-good-standing.html">Good Standing</a>
          <a href="dissolution.html">Dissolution</a>
        </div>

        <div>
          <h3>DOT &amp; Fleet</h3>
          <a href="owner-operators.html">Owner Operators</a>
          <a href="trucker-authority.html">Trucker Authority</a>
          <a href="ucr-registration.html">UCR Registration</a>
          <a href="dot-consortium.html">DOT Consortium</a>
          <a href="process-agents-boc-3.html">BOC-3 Filing</a>
        </div>

        <div>
          <h3>Company</h3>
          <a href="about.html">About</a>
          <a href="blog.html">Resources</a>
          <a href="contact.html">Contact Experts</a>
          <a href="https://portal.filings4u.com/portal-login.html">Client Portal</a>
        </div>

      </div>

      <div class="container footer-bottom">

        <div class="footer-copyright">
          <span>© 2026 filings4u, LLC. All rights reserved.</span>
          <span>
            A Subsidiary of
            <a
              class="roseland-link"
              href="https://www.roselandcompanies.com"
              target="_blank"
              rel="noopener noreferrer"
            >Roseland Companies, LLC</a>
          </span>
        </div>

        <div class="footer-legal-links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms-of-service.html">Terms of Service</a>
          <a href="refund-policy.html">Refund Policy</a>
        </div>

      </div>
    </footer>
  `;

  function renderFooter() {
    let root = document.getElementById("filings4u-global-footer-root");

    /*
     * Compatibility:
     * If a page has not yet been converted to the footer root,
     * replace its existing .site-footer in place.
     */
    if (!root) {
      const existingFooter = document.querySelector(".site-footer");

      if (existingFooter) {
        root = document.createElement("div");
        root.id = "filings4u-global-footer-root";
        existingFooter.replaceWith(root);
      }
    }

    if (!root) {
      console.warn(
        "[filings4u] Footer root not found. Add " +
        '<div id="filings4u-global-footer-root"></div> before footer.js.'
      );
      return;
    }

    root.innerHTML = FOOTER_HTML;

    document.dispatchEvent(
      new CustomEvent("filings4u:footer-rendered")
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderFooter, { once: true });
  } else {
    renderFooter();
  }
})();
