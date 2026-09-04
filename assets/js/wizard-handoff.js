/**
 * filings4u secure wizard handoff
 * MARKETING REPO ONLY — SERVICE PAGES ONLY.
 *
 * Self-contained transport:
 * - does NOT create a Supabase client
 * - does NOT require window.f4uSupabase
 * - uses the browser-safe anon key only to call the verified Edge Function
 * - no alert(), confirm(), or prompt()
 */
(function () {
  "use strict";

  const CONFIG = Object.freeze({
    wizardOrigin: "https://wizard.filings4u.com",
    wizardPath: "/wizard.html",
    handoffEndpoint: "https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/wizard-handoff",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU",
    transitionMs: 75
  });

  let redirecting = false;
  let lastTrigger = null;

  const clean = value => String(value ?? "").trim();
  const slug = value => clean(value)
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  function contextFrom(trigger) {
    const data = trigger?.dataset || {};
    return {
      service: slug(data.service || data.wizardService || data.serviceKey),
      plan: slug(data.plan || data.wizardPlan || data.planTier),
      state: clean(data.state || data.stateCode || data.jurisdiction).toUpperCase()
    };
  }

  function returnUrl() {
    const url = new URL(location.href);
    url.hash = "";
    return url.toString();
  }

  function installStyles() {
    if (document.getElementById("f4u-handoff-styles")) return;

    const style = document.createElement("style");
    style.id = "f4u-handoff-styles";
    style.textContent = `
      #f4u-secure-handoff {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background: rgba(10,31,68,.58);
        backdrop-filter: blur(7px);
        -webkit-backdrop-filter: blur(7px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity .18s ease, visibility .18s ease;
        font-family: Inter, Manrope, "DM Sans", system-ui, sans-serif;
      }

      #f4u-secure-handoff.is-open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }

      #f4u-secure-handoff .card {
        width: min(92vw, 430px);
        overflow: hidden;
        border: 1px solid #dbe3ee;
        border-radius: 18px;
        background: #fff;
        box-shadow: 0 28px 80px rgba(10,31,68,.24);
        text-align: center;
      }

      #f4u-secure-handoff .accent {
        height: 5px;
        background: #10b981;
      }

      #f4u-secure-handoff .body {
        padding: 32px 30px 28px;
      }

      #f4u-secure-handoff .brand {
        margin-bottom: 22px;
        color: #0a1f44;
        font-size: 28px;
        font-weight: 900;
        letter-spacing: -1.15px;
      }

      #f4u-secure-handoff .brand span {
        color: #10b981;
      }

      #f4u-secure-handoff .spinner {
        width: 48px;
        height: 48px;
        margin: 0 auto 20px;
        border: 4px solid #dfe7ef;
        border-top-color: #10b981;
        border-radius: 50%;
        animation: f4uSpin .78s linear infinite;
      }

      #f4u-secure-handoff .error-icon {
        display: none;
        width: 54px;
        height: 54px;
        margin: 0 auto 18px;
        border-radius: 50%;
        background: #fff1f2;
        color: #be123c;
        font-size: 25px;
        font-weight: 900;
        line-height: 54px;
      }

      #f4u-secure-handoff[data-state="error"] .spinner {
        display: none;
      }

      #f4u-secure-handoff[data-state="error"] .error-icon {
        display: block;
      }

      #f4u-secure-handoff h2 {
        margin: 0;
        color: #0a1f44;
        font-size: 19px;
        line-height: 1.35;
      }

      #f4u-secure-handoff p {
        margin: 8px auto 0;
        max-width: 330px;
        color: #64748b;
        font-size: 14px;
        line-height: 1.6;
      }

      #f4u-secure-handoff .detail {
        display: none;
        margin-top: 16px;
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

      #f4u-secure-handoff[data-state="error"] .detail {
        display: block;
      }

      #f4u-secure-handoff .actions {
        display: none;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 20px;
      }

      #f4u-secure-handoff[data-state="error"] .actions {
        display: grid;
      }

      #f4u-secure-handoff button {
        min-height: 44px;
        border-radius: 9px;
        padding: 10px 15px;
        font: inherit;
        font-size: 14px;
        font-weight: 800;
        cursor: pointer;
      }

      #f4u-handoff-close {
        border: 1px solid #cbd5e1;
        background: #fff;
        color: #0a1f44;
      }

      #f4u-handoff-retry {
        border: 1px solid #10b981;
        background: #10b981;
        color: #052e27;
      }

      @keyframes f4uSpin {
        to { transform: rotate(360deg); }
      }

      @media (max-width: 480px) {
        #f4u-secure-handoff .actions {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function overlay() {
    installStyles();

    let el = document.getElementById("f4u-secure-handoff");
    if (el) return el;

    el = document.createElement("div");
    el.id = "f4u-secure-handoff";
    el.dataset.state = "loading";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");

    el.innerHTML = `
      <div class="card">
        <div class="accent"></div>
        <div class="body">
          <img class="brand-logo" src="images/logo.png" alt="filings4u">
          <div class="spinner" aria-hidden="true"></div>
          <div class="error-icon" aria-hidden="true">!</div>
          <h2 id="f4u-handoff-title">Opening your secure filing workspace</h2>
          <p id="f4u-handoff-message">
            Your service and package selection are being transferred securely.
          </p>
          <div class="detail" id="f4u-handoff-detail"></div>
          <div class="actions">
            <button type="button" id="f4u-handoff-close">Stay on this page</button>
            <button type="button" id="f4u-handoff-retry">Try again</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(el);

    document.getElementById("f4u-handoff-close")
      ?.addEventListener("click", closeOverlay);

    document.getElementById("f4u-handoff-retry")
      ?.addEventListener("click", () => {
        if (lastTrigger) enter(lastTrigger, true);
      });

    return el;
  }

  function showLoading() {
    const el = overlay();
    el.dataset.state = "loading";

    document.getElementById("f4u-handoff-title").textContent =
      "Opening your secure filing workspace";

    document.getElementById("f4u-handoff-message").textContent =
      "Your service and package selection are being transferred securely.";

    document.getElementById("f4u-handoff-detail").textContent = "";

    requestAnimationFrame(() => el.classList.add("is-open"));
  }

  function showError(message) {
    const el = overlay();
    el.dataset.state = "error";
    el.classList.add("is-open");

    document.getElementById("f4u-handoff-title").textContent =
      "We couldn't open the secure workspace";

    document.getElementById("f4u-handoff-message").textContent =
      "Your filing selection is still safe. Please try the secure transfer again.";

    document.getElementById("f4u-handoff-detail").textContent =
      message || "The secure handoff service did not complete the request.";

    document.getElementById("f4u-handoff-retry")?.focus();
  }

  function closeOverlay() {
    const el = document.getElementById("f4u-secure-handoff");
    if (el) el.classList.remove("is-open");
    redirecting = false;
  }

  async function mint(context) {
    const response = await fetch(CONFIG.handoffEndpoint, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "apikey": CONFIG.anonKey,
        "Authorization": "Bearer " + CONFIG.anonKey
      },
      body: JSON.stringify({
        action: "mint",
        service: context.service,
        plan: context.plan,
        state: context.state || null,
        return_url: returnUrl()
      })
    });

    let payload = null;
    try {
      payload = await response.json();
    } catch (_) {}

    if (!response.ok) {
      throw new Error(
        payload?.error ||
        "The secure handoff service returned HTTP " + response.status + "."
      );
    }

    if (!payload?.token) {
      throw new Error("The secure handoff did not return an access token.");
    }

    return payload;
  }

  async function enter(trigger, retry = false) {
    if (redirecting && !retry) return;

    lastTrigger = trigger;
    const context = contextFrom(trigger);

    if (!context.service || !context.plan) {
      showError("This pricing option is missing its service or package information.");
      return;
    }

    redirecting = true;
    showLoading();

    try {
      const handoff = await mint(context);
      const destination = new URL(CONFIG.wizardPath, CONFIG.wizardOrigin);
      destination.searchParams.set("handoff", handoff.token);

      setTimeout(() => {
        location.assign(destination.toString());
      }, CONFIG.transitionMs);

    } catch (error) {
      redirecting = false;
      console.error("[filings4u] Secure wizard handoff failed:", error);
      showError(error?.message);
    }
  }

  document.addEventListener("click", event => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    const trigger = event.target?.closest?.("[data-wizard-handoff]");
    if (!trigger) return;

    event.preventDefault();
    enter(trigger);
  }, true);

  window.F4UWizardHandoff = Object.freeze({ enter });
})();
