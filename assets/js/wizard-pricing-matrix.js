// ============================================================
// 📊 ENGINE MODULE B: DATA-DRIVEN MATHEMATICAL MATRIX CALCULATOR
// ============================================================
window.updateDynamicPricingMatrixVanilla = function() {
  const sDropdown = document.getElementById("wizard-route-service-id");
  const tDropdown = document.getElementById("wizard-route-tier-id");
  
  const sKey = sDropdown ? sDropdown.value.trim().toLowerCase() : "";
  const tKey = tDropdown ? tDropdown.value.trim().toLowerCase() : "";
  
  if (!sKey || !tKey || !window.CENTRAL_SERVICE_PLAN_DB?.[sKey]) return;
  
  const basePackagePrice = parseFloat(window.CENTRAL_SERVICE_PLAN_DB[sKey][tKey]) || 0;
  let incrementalAddonTotal = 0;
  
  // 1. Build Agnostic Invoice Tree Matrix from Checked Memory states
  let rowsHtml = `
    <div style="display:flex; justify-content:space-between; font-size:0.95rem; font-weight:700; color:#0a1f44; border-bottom:1px solid #e2e8f0; padding-bottom:10px; margin-bottom:10px;">
      <span>Package Base (${tKey.toUpperCase()})</span>
      <span style="font-family:monospace;">$${basePackagePrice.toFixed(2)}</span>
    </div>`;

  // Process Step 2 Items from active global database
  const s2Catalog = window.GLOBAL_MASTER_CATALOG?.step2_embedded || {};
  Object.keys(s2Catalog).forEach(id => {
    if (window[`state_addon_${id}`] === true) {
      const item = s2Catalog[id];
      incrementalAddonTotal += item.price;
      rowsHtml += `<div style="display:flex; justify-content:space-between; font-size:0.9rem; color:#64748b; margin-bottom:6px;"><span>+ ${item.name}</span><span style="font-family:monospace;">$${item.price.toFixed(2)}</span></div>`;
    }
  });

  // Process Step 3 Items dynamically based on currently loaded catalog path
  const s3Catalog = window.GLOBAL_MASTER_CATALOG?.step3_marketplace?.[sKey] || {};
  Object.keys(s3Catalog).forEach(id => {
    if (window[`state_addon_${id}`] === true) {
      const item = s3Catalog[id];
      incrementalAddonTotal += item.price;
      rowsHtml += `<div style="display:flex; justify-content:space-between; font-size:0.9rem; color:#64748b; margin-bottom:6px;"><span>+ ${item.name}</span><span style="font-family:monospace;">$${item.price.toFixed(2)}</span></div>`;
    }
  });

  // Flat rate government agency fee additions logic
  let stateGovFee = parseFloat(window.CENTRAL_SERVICE_PLAN_DB[sKey]?.gov_fee) || 0;
  if (window.FILINGS4U_GOVERNMENT_PRICING?.[sKey]) {
    stateGovFee += parseFloat(window.FILINGS4U_GOVERNMENT_PRICING[sKey]) || 0;
  }

  if (stateGovFee > 0) {
    rowsHtml += `<div style="display:flex; justify-content:space-between; font-size:0.9rem; color:#64748b; border-top:1px dashed #e2e8f0; padding-top:6px;"><span>Government Agency Fees</span><span style="font-family:monospace;">$${stateGovFee.toFixed(2)}</span></div>`;
  }

  // Final Balance updates execution pass
  const subtotal = basePackagePrice + incrementalAddonTotal;
  const grandTotal = subtotal + stateGovFee;
  
  window.calculatedCartGrandTotalAmount = grandTotal;
  window.wizardCalculatedFinalTotalAmount = grandTotal;

  // Render output matrices directly down to registered ID hooks array
  ['summary-purchase-rows-container', 'master-sidebar-invoice-display'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = rowsHtml;
  });

  const textNodes = [
    { targets: ["summary-subtotal-display", "subtotal-display"], value: subtotal },
    { targets: ["summary-gov-fees-display", "gov-fees-display"], value: stateGovFee },
    { targets: ["summary-grand-total-display", "grand-total-display"], value: grandTotal }
  ];
  
  textNodes.forEach(node => node.targets.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '$' + node.value.toFixed(2);
  }));
};
