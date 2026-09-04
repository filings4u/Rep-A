/**
 * filings4u secure wizard handoff
 * MARKETING REPO ONLY — SERVICE PAGES ONLY.
 *
 * No native browser alert(), confirm(), or prompt().
 * All status/error messages use branded filings4u UI.
 *
 * Pricing button example:
 * <a href="#"
 *    data-wizard-handoff
 *    data-service="llc-formation"
 *    data-plan="compliance">
 *   Choose Compliance
 * </a>
 */
(function () {
  "use strict";

  const CONFIG = Object.freeze({
    wizardOrigin: "https://wizard.filings4u.com",
    wizardPath: "/wizard.html",
    transitionMs: 650
  });

  let redirecting = false;
  let lastTrigger = null;

  const clean = (value) => String(value ?? "").trim();

  const slug = (value) =>
    clean(value)
      .toLowerCase()
      .replace(/[_\s]+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  function servicePageReturnUrl() {
    const url = new URL(window.location.href);
    url.hash = "";
    return url.toString();
  }

  function contextFrom(trigger) {
    const data = trigger?.dataset || {};

    return {
      service: slug(
        data.service ||
        data.wizardService ||
        data.serviceKey
      ),
      plan: slug(
        data.plan ||
        data.wizardPlan ||
        data.planTier
      ),
      state: clean(
        data.state ||
        data.stateCode ||
        data.jurisdiction
      ).toUpperCase()
    };
  }

  function installStyles() {
    if (document.getElementById("f4u-wizard-handoff-styles")) return;

    const style = document.createElement("style");
    style.id = "f4u-wizard-handoff-styles";

    style.textContent = `
      #f4u-secure-handoff {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background: rgba(10, 31, 68, 0.56);
        backdrop-filter: blur(7px);
        -webkit-backdrop-filter: blur(7px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity .18s ease, visibility .18s ease;
        font-family: Inter, Manrope, "DM Sans", system-ui, -apple-system,
          BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      #f4u-secure-handoff.is-open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      #f4u-secure-handoff .f4u-handoff-card {
        width: min(92vw, 430px);
        overflow: hidden;
        border: 1px solid #dbe3ee;
        border-radius: 18px;
        background: #ffffff;
        box-shadow: 0 28px 80px rgba(10, 31, 68, .24);
        text-align: center;
        transform: translateY(8px) scale(.985);
        transition: transform .18s ease;
      }

      #f4u-secure-handoff.is-open .f4u-handoff-card {
        transform: translateY(0) scale(1);
      }

      #f4u-secure-handoff .f4u-handoff-accent {
        height: 5px;
        background: #10b981;
      }

      #f4u-secure-handoff .f4u-handoff-body {
        padding: 32px 30px 28px;
      }

      #f4u-secure-handoff .f4u-handoff-brand {
        margin: 0 0 22px;
        color: #0a1f44;
        font-size: 28px;
        line-height: 1;
        font-weight: 900;
        letter-spacing: -1.15px;
      }

      #f4u-secure-handoff .f4u-handoff-brand span {
        color: #10b981;
      }

      #f4u-secure-handoff .f4u-handoff-icon {
        display: grid;
        place-items: center;
        width: 54px;
        height: 54px;
        margin: 0 auto 18px;
        border-radius: 50%;
      }

      #f4u-secure-handoff .f4u-handoff-spinner {
        width: 48px;
        height: 48px;
        border: 4px solid #dfe7ef;
        border-top-color: #10b981;
        border-radius: 50%;
        animation: f4uHandoffSpin .78s linear infinite;
      }

      #f4u-secure-handoff .f4u-handoff-error-icon {
        display: none;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        background: #fff1f2;
        color: #be123c;
        font-size: 25px;
        font-weight: 900;
        line-height: 54px;
      }

      #f4u-secure-handoff[data-state="error"] .f4u-handoff-spinner {
        display: none;
      }

      #f4u-secure-handoff[data-state="error"] .f4u-handoff-error-icon {
        display: block;
      }

      #f4u-secure-handoff .f4u-handoff-title {
        margin: 0;
        color: #0a1f44;
        font-size: 19px;
        line-height: 1.35;
        font-weight: 800;
      }

      #f4u-secure-handoff .f4u-handoff-message {
        margin: 8px auto 0;
        max-width: 330px;
        color: #64748b;
        font-size: 14px;
        line-height: 1.6;
      }

      #f4u-secure-handoff .f4u-handoff-error-detail {
        display: none;
        margin: 16px 0 0;
        padding: 11px 13px;
        border: 1px solid #fecdd3;
        border-radius: 9px;
        background: #fff7f8;
        color: #9f1239;
        font-size: 12px;
        line-height: 1.45;
        text-align: left;
        word-break: break-word;
      }

      #f4u-secure-handoff[data-state="error"] .f4u-handoff-error-detail {
        display: block;
      }

      #f4u-secure-handoff .f4u-handoff-actions {
        display: none;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 20px;
      }

      #f4u-secure-handoff[data-state="error"] .f4u-handoff-actions {
        display: grid;
      }

      #f4u-secure-handoff .f4u-handoff-btn {
        min-height: 44px;
        border-radius: 9px;
        padding: 10px 15px;
        border: 1px solid transparent;
        font: inherit;
        font-size: 14px;
        font-weight: 800;
        cursor: pointer;
      }

      #f4u-secure-handoff .f4u-handoff-btn--secondary {
        border-color: #cbd5e1;
        background: #ffffff;
        color: #0a1f44;
      }

      #f4u-secure-handoff .f4u-handoff-btn--primary {
        background: #10b981;
        color: #052e27;
      }

      #f4u-secure-handoff .f4u-handoff-btn:hover {
        filter: brightness(.98);
      }

      @keyframes f4uHandoffSpin {
        to { transform: rotate(360deg); }
      }

      @media (max-width: 480px) {
        #f4u-secure-handoff .f4u-handoff-body {
          padding: 28px 22px 24px;
        }

        #f4u-secure-handoff .f4u-handoff-actions {
          grid-template-columns: 1fr;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #f4u-secure-handoff,
        #f4u-secure-handoff .f4u-handoff-card {
          transition: none;
        }

        #f4u-secure-handoff .f4u-handoff-spinner {
          animation-duration: 1.5s;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function ensureOverlay() {
    installStyles();

    let overlay = document.getElementById("f4u-secure-handoff");
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = "f4u-secure-handoff";
    overlay.dataset.state = "loading";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "f4u-handoff-title");
    overlay.setAttribute("aria-describedby", "f4u-handoff-message");

    overlay.innerHTML = `
      <div class="f4u-handoff-card">
        <div class="f4u-handoff-accent"></div>

        <div class="f4u-handoff-body">
          <div class="f4u-handoff-brand">filings4<span>u</span></div>

          <div class="f4u-handoff-icon" aria-hidden="true">
            <div class="f4u-handoff-spinner"></div>
            <div class="f4u-handoff-error-icon">!</div>
          </div>

          <h2 class="f4u-handoff-title" id="f4u-handoff-title">
            Opening your secure filing workspace
          </h2>

          <p class="f4u-handoff-message" id="f4u-handoff-message">
            Your service and package selection are being transferred securely.
          </p>

          <div
            class="f4u-handoff-error-detail"
            id="f4u-handoff-error-detail"
            aria-live="polite">
          </div>

          <div class="f4u-handoff-actions">
            <button
              type="button"
              class="f4u-handoff-btn f4u-handoff-btn--secondary"
              id="f4u-handoff-close">
              Stay on this page
            </button>

            <button
              type="button"
              class="f4u-handoff-btn f4u-handoff-btn--primary"
              id="f4u-handoff-retry">
              Try again
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    document
      .getElementById("f4u-handoff-close")
      ?.addEventListener("click", closeOverlay);

    document
      .getElementById("f4u-handoff-retry")
      ?.addEventListener("click", function () {
        if (!lastTrigger) {
          closeOverlay();
          return;
        }
        enter(lastTrigger, true);
      });

    return overlay;
  }

  function showLoading() {
    const overlay = ensureOverlay();

    overlay.dataset.state = "loading";

    const title = document.getElementById("f4u-handoff-title");
    const message = document.getElementById("f4u-handoff-message");
    const detail = document.getElementById("f4u-handoff-error-detail");

    if (title) title.textContent = "Opening your secure filing workspace";
    if (message) {
      message.textContent =
        "Your service and package selection are being transferred securely.";
    }
    if (detail) detail.textContent = "";

    requestAnimationFrame(() => overlay.classList.add("is-open"));
    return overlay;
  }

  function showError(error) {
    const overlay = ensureOverlay();

    overlay.dataset.state = "error";
    overlay.classList.add("is-open");

    const title = document.getElementById("f4u-handoff-title");
    const message = document.getElementById("f4u-handoff-message");
    const detail = document.getElementById("f4u-handoff-error-detail");

    if (title) title.textContent = "We couldn't open the secure workspace";

    if (message) {
      message.textContent =
        "Your filing selection is still safe. Please try the secure transfer again.";
    }

    if (detail) {
      detail.textContent =
        error?.message ||
        "The secure handoff service did not complete the request.";
    }

    document.getElementById("f4u-handoff-retry")?.focus();
  }

  function closeOverlay() {
    const overlay = document.getElementById("f4u-secure-handoff");
    if (!overlay) return;

    overlay.classList.remove("is-open");
    redirecting = false;

    window.setTimeout(() => {
      overlay.dataset.state = "loading";
    }, 200);
  }

  async function mint(context) {
    const client =
      window.f4uSupabase ||
      window.supabaseClientInstance ||
      null;

    if (!client) {
      throw new Error("The website connection is not ready. Please refresh and try again.");
    }

    const { data, error } = await client.functions.invoke("wizard-handoff", {
      body: {
        action: "mint",
        service: context.service,
        plan: context.plan,
        state: context.state || null,
        return_url: servicePageReturnUrl()
      }
    });

    if (error) {
      let message = error.message || "Secure handoff request failed.";

      // Supabase FunctionsHttpError may carry useful response text.
      try {
        if (typeof error.context?.json === "function") {
          const payload = await error.context.json();
          if (payload?.error) message = payload.error;
        }
      } catch (_) {}

      throw new Error(message);
    }

    if (!data?.token) {
      throw new Error("The secure handoff did not return an access token.");
    }

    return data;
  }

  async function enter(trigger, isRetry = false) {
    if (redirecting && !isRetry) return;

    lastTrigger = trigger;

    const context = contextFrom(trigger);

    if (!context.service || !context.plan) {
      console.error(
        "[filings4u] Pricing handoff requires service and plan.",
        trigger
      );

      showError(
        new Error("This pricing option is missing its service or package information.")
      );
      return;
    }

    redirecting = true;
    showLoading();

    try {
      const handoff = await mint(context);

      const destination = new URL(
        CONFIG.wizardPath,
        CONFIG.wizardOrigin
      );

      destination.searchParams.set("handoff", handoff.token);

      window.setTimeout(() => {
        window.location.assign(destination.toString());
      }, CONFIG.transitionMs);

    } catch (error) {
      redirecting = false;

      console.error(
        "[filings4u] Secure wizard handoff failed:",
        error
      );

      showError(error);
    }
  }

  document.addEventListener(
    "click",
    function (event) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const trigger =
        event.target?.closest?.("[data-wizard-handoff]");

      if (!trigger) return;

      event.preventDefault();
      enter(trigger);
    },
    true
  );

  window.F4UWizardHandoff = Object.freeze({
    enter
  });
})();
