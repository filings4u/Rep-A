/**
 * filings4u secure wizard handoff
 * THIS is the only wizard-related JS file that belongs in the marketing repo.
 *
 * Put this script on SERVICE PAGES ONLY.
 *
 * Pricing button example:
 * <a href="#" data-wizard-handoff
 *    data-service="llc-formation"
 *    data-plan="compliance">Choose Compliance</a>
 */
(function () {
  "use strict";

  const CONFIG = Object.freeze({
    wizardOrigin: "https://wizard.filings4u.com",
    wizardPath: "/wizard.html",
    handoffFunction:
      "https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/wizard-handoff",
    transitionMs: 650
  });

  let redirecting = false;

  const clean = v => String(v ?? "").trim();
  const slug = v => clean(v).toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  function servicePageReturnUrl() {
    // Exact service-page URL, including useful query parameters.
    const u = new URL(location.href);
    u.hash = "";
    return u.toString();
  }

  function contextFrom(trigger) {
    const d = trigger.dataset || {};
    return {
      service: slug(d.service || d.wizardService || d.serviceKey),
      plan: slug(d.plan || d.wizardPlan || d.planTier),
      state: clean(d.state || d.stateCode || d.jurisdiction).toUpperCase()
    };
  }

  function overlay() {
    let el = document.getElementById("f4u-secure-handoff");
    if (el) return el;

    const style = document.createElement("style");
    style.textContent = `
      #f4u-secure-handoff{position:fixed;inset:0;z-index:2147483647;
      display:flex;align-items:center;justify-content:center;background:rgba(248,250,252,.985);
      opacity:0;pointer-events:none;transition:opacity .18s ease;font-family:Inter,Manrope,"DM Sans",system-ui,sans-serif}
      #f4u-secure-handoff.on{opacity:1;pointer-events:all}
      #f4u-secure-handoff .card{width:min(92vw,420px);padding:34px 30px 30px;border:1px solid #dbe3ee;
      border-radius:18px;background:#fff;box-shadow:0 24px 70px rgba(10,31,68,.14);text-align:center}
      #f4u-secure-handoff .brand{color:#0a1f44;font-size:27px;font-weight:900;letter-spacing:-1.1px;margin-bottom:22px}
      #f4u-secure-handoff .brand span{color:#10b981}
      #f4u-secure-handoff .spin{width:48px;height:48px;margin:0 auto 20px;border:4px solid #dfe7ef;
      border-top-color:#10b981;border-radius:50%;animation:f4usp .78s linear infinite}
      #f4u-secure-handoff strong{display:block;color:#0a1f44;font-size:18px}
      #f4u-secure-handoff p{margin:7px 0 0;color:#64748b;font-size:14px;line-height:1.55}
      @keyframes f4usp{to{transform:rotate(360deg)}}`;
    document.head.appendChild(style);

    el = document.createElement("div");
    el.id = "f4u-secure-handoff";
    el.setAttribute("role","status");
    el.setAttribute("aria-live","polite");
    el.innerHTML = `<div class="card"><div class="brand">filings4<span>u</span></div>
      <div class="spin" aria-hidden="true"></div>
      <strong>Opening your secure filing workspace</strong>
      <p>Your service and package selection are being transferred securely.</p></div>`;
    document.body.appendChild(el);
    return el;
  }

  async function mint(context) {
    if (!window.f4uSupabase) {
      throw new Error("The marketing Supabase client is not initialized.");
    }

    const { data: { session } } = await window.f4uSupabase.auth.getSession();

    // The anon key is already part of the normal browser Supabase client.
    // Supabase Functions invoke automatically sends the configured client auth.
    const { data, error } = await window.f4uSupabase.functions.invoke("wizard-handoff", {
      body: {
        action: "mint",
        service: context.service,
        plan: context.plan,
        state: context.state || null,
        return_url: servicePageReturnUrl()
      }
    });

    if (error) throw error;
    if (!data?.token) throw new Error("The handoff service did not return a token.");
    return data;
  }

  async function enter(trigger) {
    if (redirecting) return;
    const context = contextFrom(trigger);

    if (!context.service || !context.plan) {
      console.error("[filings4u] Pricing handoff requires service and plan.", trigger);
      return;
    }

    redirecting = true;
    const screen = overlay();
    requestAnimationFrame(() => screen.classList.add("on"));

    try {
      const handoff = await mint(context);
      const destination = new URL(CONFIG.wizardPath, CONFIG.wizardOrigin);

      // The token is opaque. Service, plan and return URL are NOT trusted from
      // browser query parameters; the wizard receives them after token consumption.
      destination.searchParams.set("handoff", handoff.token);

      setTimeout(() => location.assign(destination.toString()), CONFIG.transitionMs);
    } catch (error) {
      redirecting = false;
      screen.classList.remove("on");
      console.error("[filings4u] Secure wizard handoff failed:", error);
      alert("We could not open the secure filing workspace. Please try again.");
    }
  }

  document.addEventListener("click", event => {
    if (event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const trigger = event.target.closest("[data-wizard-handoff]");
    if (!trigger) return;

    event.preventDefault();
    enter(trigger);
  }, true);

  window.F4UWizardHandoff = Object.freeze({ enter });
})();
