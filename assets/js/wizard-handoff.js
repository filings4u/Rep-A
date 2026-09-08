(function(){
  "use strict";

  const CONFIG = Object.freeze({
    endpoint: "https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/wizard-v2-handoff",
    wizardUrl: "https://wizard.filings4u.com/wizard-v2.html",
    publishableKey: "sb_publishable_RlmqwQM8ATOc7-ML9hvwgw_UljUEavh"
  });

  const STATES = [
    ["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],["CA","California"],["CO","Colorado"],
    ["CT","Connecticut"],["DE","Delaware"],["FL","Florida"],["GA","Georgia"],["HI","Hawaii"],["ID","Idaho"],
    ["IL","Illinois"],["IN","Indiana"],["IA","Iowa"],["KS","Kansas"],["KY","Kentucky"],["LA","Louisiana"],
    ["ME","Maine"],["MD","Maryland"],["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],
    ["MS","Mississippi"],["MO","Missouri"],["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],
    ["NH","New Hampshire"],["NJ","New Jersey"],["NM","New Mexico"],["NY","New York"],
    ["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],["OK","Oklahoma"],["OR","Oregon"],
    ["PA","Pennsylvania"],["RI","Rhode Island"],["SC","South Carolina"],["SD","South Dakota"],
    ["TN","Tennessee"],["TX","Texas"],["UT","Utah"],["VT","Vermont"],["VA","Virginia"],
    ["WA","Washington"],["WV","West Virginia"],["WI","Wisconsin"],["WY","Wyoming"],["DC","District of Columbia"]
  ];
  const STATE_CODES = new Set(STATES.map(function(item){ return item[0]; }));
  let busy = false;

  function esc(value){
    return String(value || "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;");
  }

  function installStyles(){
    if (document.getElementById("f4u-main-gate-style")) return;

    const style = document.createElement("style");
    style.id = "f4u-main-gate-style";
    style.textContent = `
      body.f4u-gate-open{overflow:hidden}
      #f4u-main-gate{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;padding:20px;font-family:Manrope,"DM Sans",system-ui,sans-serif}
      #f4u-main-gate .backdrop{position:absolute;inset:0;background:rgba(10,31,68,.64);backdrop-filter:blur(7px)}
      #f4u-main-gate .dialog{position:relative;width:min(520px,94vw);border:1px solid #d9e2ec;border-radius:22px;background:#fff;box-shadow:0 28px 90px rgba(10,31,68,.3);padding:30px}
      #f4u-main-gate .close{position:absolute;right:16px;top:12px;border:0;background:transparent;color:#64748b;font-size:29px;cursor:pointer}
      #f4u-main-gate .kicker{display:block;margin-bottom:8px;color:#059669;font-size:12px;font-weight:900;letter-spacing:.09em;text-transform:uppercase}
      #f4u-main-gate h2{margin:0;color:#0a1f44;font-size:28px;line-height:1.18}
      #f4u-main-gate p{margin:11px 0 20px;color:#64748b;font-size:14px;line-height:1.65}
      #f4u-main-gate label{display:block;margin-bottom:8px;color:#0a1f44;font-size:13px;font-weight:800}
      #f4u-main-gate select{width:100%;height:52px;border:1px solid #cbd5e1;border-radius:11px;background:#fff;padding:0 13px;color:#0a1f44;font:inherit}
      #f4u-main-gate select:focus{outline:none;border-color:#10b981;box-shadow:0 0 0 3px rgba(16,185,129,.13)}
      #f4u-main-gate .help{display:block;margin-top:8px;color:#64748b;font-size:12px;line-height:1.5}
      #f4u-main-gate .actions{display:grid;grid-template-columns:1fr 1.6fr;gap:10px;margin-top:22px}
      #f4u-main-gate button{min-height:48px;border-radius:10px;padding:10px 14px;font:inherit;font-weight:800;cursor:pointer}
      #f4u-main-gate .cancel{border:1px solid #cbd5e1;background:#fff;color:#0a1f44}
      #f4u-main-gate .continue{border:1px solid #10b981;background:#10b981;color:#fff}
      #f4u-main-gate .continue:hover{background:#059669;border-color:#059669}
      #f4u-main-gate .loading{text-align:center}
      #f4u-main-gate .spinner{width:46px;height:46px;margin:0 auto 16px;border:4px solid #e2e8f0;border-top-color:#10b981;border-radius:50%;animation:f4uSpin .75s linear infinite}
      #f4u-main-gate .error{margin-top:14px;color:#b91c1c;font-size:13px;line-height:1.5}
      @keyframes f4uSpin{to{transform:rotate(360deg)}}
      @media(max-width:560px){#f4u-main-gate .dialog{padding:27px 20px 20px}#f4u-main-gate h2{font-size:24px}#f4u-main-gate .actions{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function removeGate(){
    document.body.classList.remove("f4u-gate-open");
    document.getElementById("f4u-main-gate")?.remove();
  }

  function chooseState(context){
    installStyles();

    return new Promise(function(resolve){
      removeGate();

      const el = document.createElement("div");
      el.id = "f4u-main-gate";
      el.innerHTML = `
        <div class="backdrop" data-close></div>
        <section class="dialog" role="dialog" aria-modal="true" aria-labelledby="f4u-state-title">
          <button class="close" type="button" data-close aria-label="Close">×</button>
          <span class="kicker">Filing jurisdiction</span>
          <h2 id="f4u-state-title">Select the filing state.</h2>
          <p>${esc(context.title)} is a state-priced service. Choose the state where the filing will be submitted before entering the secure application.</p>

          <label for="f4u-state-select">Filing state</label>
          <select id="f4u-state-select">
            <option value="">Select a state</option>
            ${STATES.map(function(item){ return `<option value="${item[0]}">${item[1]}</option>`; }).join("")}
          </select>

          <small class="help">The selected state is carried into the wizard and used to determine the applicable government filing fee.</small>

          <div class="actions">
            <button class="cancel" type="button" data-close>Cancel</button>
            <button class="continue" type="button">Continue to secure application</button>
          </div>
        </section>`;

      document.body.appendChild(el);
      document.body.classList.add("f4u-gate-open");

      const select = el.querySelector("#f4u-state-select");
      setTimeout(function(){ select.focus(); }, 0);

      function finish(value){
        removeGate();
        resolve(value);
      }

      el.querySelectorAll("[data-close]").forEach(function(node){
        node.addEventListener("click", function(){ finish(""); });
      });

      el.querySelector(".continue").addEventListener("click", function(){
        const value = String(select.value || "").toUpperCase();
        if (!STATE_CODES.has(value)){
          select.setAttribute("aria-invalid","true");
          select.focus();
          return;
        }
        finish(value);
      });
    });
  }

  function showLoading(context){
    installStyles();
    removeGate();

    const el = document.createElement("div");
    el.id = "f4u-main-gate";
    el.innerHTML = `
      <div class="backdrop"></div>
      <section class="dialog loading" role="status" aria-live="polite">
        <div class="spinner"></div>
        <span class="kicker">Secure application</span>
        <h2>Opening your application</h2>
        <p>Protecting your service, package${context.state ? ", filing state" : ""}, and secure handoff.</p>
        <div class="error" hidden></div>
      </section>`;

    document.body.appendChild(el);
    document.body.classList.add("f4u-gate-open");
    return el;
  }

  async function mint(context){
    const response = await fetch(CONFIG.endpoint, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "apikey": CONFIG.publishableKey
      },
      body: JSON.stringify({
        action: "mint",
        service: context.service,
        plan: context.plan,
        state: context.state || null,
        entry: "public",
        return_url: location.href
      })
    });

    const payload = await response.json().catch(function(){ return {}; });

    if (!response.ok){
      throw new Error(payload.message || payload.error || ("Secure handoff failed (" + response.status + ")."));
    }

    if (!payload.token){
      throw new Error("Wizard v2 handoff token was not returned.");
    }

    return payload;
  }

  async function enter(trigger){
    if (busy) return;

    const context = {
      service: String(trigger.dataset.service || "").trim().toLowerCase(),
      plan: String(trigger.dataset.plan || "").trim().toLowerCase(),
      title: String(trigger.dataset.serviceTitle || "This service"),
      requiresJurisdiction: trigger.dataset.requiresJurisdiction === "true",
      state: null
    };

    if (!context.service || !context.plan) return;

    if (context.requiresJurisdiction){
      context.state = await chooseState(context);
      if (!context.state) return;
    }

    busy = true;
    const loading = showLoading(context);

    try {
      const handoff = await mint(context);
      const destination = new URL(CONFIG.wizardUrl);
      destination.searchParams.set("handoff", handoff.token);
      location.assign(destination.toString());
    } catch (error){
      busy = false;
      const errorBox = loading.querySelector(".error");
      errorBox.hidden = false;
      errorBox.textContent = error instanceof Error ? error.message : "Unable to open the secure application.";

      const close = document.createElement("button");
      close.type = "button";
      close.className = "cancel";
      close.textContent = "Close";
      close.style.marginTop = "16px";
      close.addEventListener("click", removeGate);
      loading.querySelector(".dialog").appendChild(close);
    }
  }

  document.addEventListener("click", function(event){
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    const trigger = event.target.closest && event.target.closest("[data-wizard-handoff]");
    if (!trigger) return;

    event.preventDefault();
    enter(trigger);
  }, true);

  window.F4UWizardHandoff = Object.freeze({ enter: enter });
})();
