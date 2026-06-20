// ============================================================
// 🎨 ENGINE MODULE A: AGNOSTIC STEP 3 DOM INJECTION SYSTEM
// ============================================================
function executeMarketplaceUIRenderLoop() {
  const renderTarget = document.getElementById(
    "wizard-dynamic-upsells-render-target"
  );
  const routeInput = document.getElementById("wizard-route-service-id");
  
  if (!renderTarget) return;
  
  // Agnostic context evaluation: Look up route dynamically from DOM
  const activeRouteKey = routeInput ? routeInput.value.trim().toLowerCase() : "";
  const catalog = window.GLOBAL_MASTER_CATALOG?.step3_marketplace?.[activeRouteKey] || {};
  
  let htmlOutput = "";
  const keys = Object.keys(catalog);
  
  if (keys.length === 0) {
    renderTarget.innerHTML = `<div style="text-align:center; padding:20px; color:#64748b;">No secondary asset tiers required for this package profile.</div>`;
    return;
  }

  keys.forEach(id => {
    const item = catalog[id];
    const itemPrice = parseFloat(item.price) || 0;
    
    // Server/Calculated verification guard fallback: check state flag safely
    const isChecked = !!window[`state_addon_${id}`];

    htmlOutput += `
      <div class="upsell-item-row" style="display:flex; align-items:start; gap:14px; padding:16px; border:1px solid var(--border, #e2e8f0); border-radius:8px; background:#ffffff; box-sizing:border-box; width:100%;">
        <div style="display:flex; height:22px;">
          <input 
            type="checkbox" 
            id="addon_field_${id}" 
            data-addon-id="${id}"
            data-addon-type="step3"
            ${isChecked ? 'checked' : ''}
            style="width:18px; height:18px; cursor:pointer;"
          />
        </div>
        <label for="addon_field_${id}" style="display:flex; justify-content:space-between; align-items:start; width:100%; cursor:pointer; gap:15px; user-select:none;">
          <div>
            <span style="font-weight:700; color:#0a1f44;">${item.name}</span>
            ${item.tier ? `<br><small style="color:#64748b; font-weight:600;">${item.tier}</small>` : ''}
          </div>
          <div style="font-weight:800; color:#10b981;">$${itemPrice.toFixed(2)}</div>
        </label>
      </div>`;
  });

  renderTarget.innerHTML = htmlOutput;
}
window.executeMarketplaceUIRenderLoop = executeMarketplaceUIRenderLoop;
