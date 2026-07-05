"use strict";

/**
 * Enterprise Footer Configuration Registry Contract
 * Centralizes environmental markup strings, resource URLs, design constants, and target selectors.
 */
const PORTAL_FOOTER_REGISTRY = Object.freeze({
  selectors: {
    injectionTargetId: "f4u-standalone-footer-placeholder",
    styleTagId: "f4u-standalone-footer-styles",
    wrapperClass: "f4u-standalone-footer-wrapper",
    footerClass: "f4u-portal-legal-footer"
  },
  constants: {
    pollingIntervalMs: 50
  },
  urls: {
    parentCompany: "https://roselandcompanies.com",
    privacyPolicy: "privacy-policy.html",
    termsOfService: "terms-of-service.html",
    refundPolicy: "refund-policy.html"
  },
  strings: {
    copyrightText: "&copy; 2026 filings4u, LLC. All rights reserved.",
    parentText: "A Subsidiary of",
    parentName: "Roseland Companies, LLC",
    linkPrivacy: "Privacy Policy",
    linkTerms: "Terms of Service",
    linkRefund: "Refund Policy",
    badgeLabel: "SECURE",
    badgeDetails: "256-bit SSL Encrypted Connection"
  }
});

// ============================================================================ //
// 📦 SYSTEM IMMUTABLE EXTERNAL FOOTER CONTAINER RENDERING ENGINE               //
// ============================================================================ //
function renderPortalStandaloneFooterHtml() {
  const { selectors, urls, strings, constants } = PORTAL_FOOTER_REGISTRY;
  const injectionTarget = document.getElementById(selectors.injectionTargetId);

  // Defer execution gracefully if placeholder target is still absent from the render thread
  if (!injectionTarget) {
    setTimeout(renderPortalStandaloneFooterHtml, constants.pollingIntervalMs);
    return;
  }

  // 1. INJECT FIXED COMPONENT LAYOUT DESIGN TOKENS
  if (!document.getElementById(selectors.styleTagId)) {
    const styleSheetNode = document.createElement("style");
    styleSheetNode.id = selectors.styleTagId;
    styleSheetNode.textContent = `
      .${selectors.wrapperClass} {
        width: 100%;
        margin-top: 40px;
        clear: both;
        position: relative;
        z-index: 10;
        box-sizing: border-box;
      }
      .${selectors.footerClass} {
        background: #0a1f44;
        padding: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
      }
      .f4u-footer-copyright {
        color: #94a3b8;
        font-size: 0.8rem;
        margin: 0;
        text-align: left;
        line-height: 1.4;
      }
      .f4u-footer-parent-link {
        color: #10b981;
        text-decoration: none;
        font-weight: bold;
        transition: opacity 0.2s ease;
      }
      .f4u-footer-parent-link:hover, .f4u-footer-nav-link:hover {
        opacity: 0.8;
      }
      .f4u-footer-nav-row {
        display: flex;
        gap: 20px;
      }
      .f4u-footer-nav-link {
        color: #ffffff;
        text-decoration: none;
        font-size: 0.85rem;
        transition: opacity 0.2s ease;
      }
      .f4u-footer-trust-badge {
        background: rgba(255, 255, 255, 0.05);
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 0.75rem;
        color: #ffffff;
        display: flex;
        align-items: center;
        white-space: nowrap;
      }
      .f4u-footer-secure-accent {
        color: #10b981;
        font-weight: 800;
        margin-right: 8px;
      }
      @media (max-width: 768px) {
        .${selectors.footerClass} {
          flex-direction: column;
          gap: 20px;
          text-align: center;
        }
        .f4u-footer-copyright {
          text-align: center;
        }
      }
    `;
    document.head.appendChild(styleSheetNode);
  }

  // 2. TARGET INJECTION: Clear semantic tree devoid of style string clutter
  injectionTarget.innerHTML = `
    <div class="${selectors.wrapperClass}">
      <footer class="${selectors.footerClass}">
        <p class="f4u-footer-copyright">
          ${strings.copyrightText}<br>
          ${strings.parentText} <a href="${urls.parentCompany}" target="_blank" rel="noopener noreferrer" class="f4u-footer-parent-link">${strings.parentName}</a>
        </p>
        <div class="f4u-footer-nav-row">
          <a href="${urls.privacyPolicy}" class="f4u-footer-nav-link">${strings.linkPrivacy}</a>
          <a href="${urls.termsOfService}" class="f4u-footer-nav-link">${strings.linkTerms}</a>
          <a href="${urls.refundPolicy}" class="f4u-footer-nav-link">${strings.linkRefund}</a>
        </div>
        <div class="f4u-footer-trust-badge">
          <span class="f4u-footer-secure-accent">${strings.badgeLabel}</span> ${strings.badgeDetails}
        </div>
      </footer>
    </div>
  `;
}

// Global scope export strategy
window.renderPortalStandaloneFooterHtml = renderPortalStandaloneFooterHtml;

// Safe Document Execution Wrapper Hook
if (document.readyState !== "loading") {
  window.renderPortalStandaloneFooterHtml();
} else {
  document.addEventListener("DOMContentLoaded", window.renderPortalStandaloneFooterHtml);
}
