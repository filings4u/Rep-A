(function() {
  function directInjectCartAddonsToSummaryStep5() {
    console.log("[Summary Engine] Recalculating itemized matrix rows pass...");
    const rowsTargetNode = document.getElementById("summary-purchase-rows-container");
    if (!rowsTargetNode) return;

    let calculatedAddonsTotal = 0;
    let itemsMarkupString = "";
    
    const ctx = window._tempCalcContext || {};
    const basePackagePriceValue = parseFloat(ctx.baseTierPrice) || window.computedWizardBasePackageFee || 299.00;
    const safePlanName = ctx.planConfig?.name || 'New Entrant Audit';
    const safePlanTier = ctx.currentPlanKey ? String(ctx.currentPlanKey).toUpperCase() : 'COMPLIANCE';
    
    const activeCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const processedNamesRegistry = [];

    activeCheckboxes.forEach(checkbox => {
      if (!checkbox || !checkbox.id) return;
      if (checkbox.id.startsWith("modal_input_box_")) return;

      let labelString = checkbox.getAttribute("data-name") || checkbox.getAttribute("data-label");
      
      if (!labelString) {
        const labelElement = document.querySelector('label[for="' + checkbox.id + '"]');
        if (labelElement) {
          labelString = labelElement.innerText.replace(/[\*\+\-]/g, '').trim();
        }
      }
      
      if (!labelString) {
        if (checkbox.id === "nea_service_dqf") labelString = "Assemble Driver Qualification Files (DQF)";
        else if (checkbox.id === "nea_service_consortium") labelString = "DOT Drug & Alcohol Consortium Enrollment";
        else if (checkbox.id === "nea_service_hos") labelString = "Extended Hours of Service (HOS) Log Audit";
        else if (checkbox.id === "nea_service_maintenance") labelString = "Vehicle Maintenance & Periodic Inspection Files";
        else if (checkbox.id === "nea_service_consultation") labelString = "Independent Pre-Audit Consultation Package";
        else labelString = checkbox.id;
      }
      
      if (!labelString || processedNamesRegistry.includes(labelString)) return;

      const priceValue = parseFloat(checkbox.getAttribute("data-price")) || parseFloat(checkbox.value) || 0;
      if (priceValue <= 0) return;

      calculatedAddonsTotal += priceValue;
      processedNamesRegistry.push(labelString);

      itemsMarkupString += '<div class="summary-receipt-row-item" data-source-checkbox-id="' + checkbox.id + '" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: #475569; padding: 10px 0; border-bottom: 1px dashed #e2e8f0; width: 100%; box-sizing: border-box;"><div style="display: flex; flex-direction: column; gap: 2px;"><span style="font-weight: 600; color: #0a1f44;">+ ' + labelString + '</span><button type="button" onclick="window.removeSelectedAddonItemStraightFromSummaryCard(\'' + checkbox.id + '\')" style="background: transparent; border: none; color: #ef4444; font-size: 0.725rem; font-weight: 700; cursor: pointer; padding: 0; text-align: left; width: fit-content; display: flex; align-items: center; gap: 4px; margin-top: 2px; transition: opacity 0.1s;"><i class="fa-solid fa-trash-can"></i> Remove from Invoice</button></div><span style="font-family: monospace; font-weight: 700; color: #0a1f44; font-size: 0.95rem;">$' + priceValue.toFixed(2) + '</span></div>';
    });

    const tierDisplayString = safePlanTier ? ' (' + safePlanTier + ')' : '';
    const baselineHeaderRow = '<div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 4px;"><span>' + safePlanName + tierDisplayString + '</span><span style="font-family: monospace;">$' + basePackagePriceValue.toFixed(2) + '</span></div>';
    
    rowsTargetNode.innerHTML = baselineHeaderRow + itemsMarkupString;

    const finalSubtotalValue = basePackagePriceValue + calculatedAddonsTotal;
    const finalGovernmentFeeValue = parseFloat(window.computedWizardStateGovernmentFee) || 0;
    const finalGrandTotalValue = finalSubtotalValue + finalGovernmentFeeValue;

    window.computedWizardGrandTotalAmount = finalGrandTotalValue;
    window.wizardCalculatedFinalTotalAmount = finalGrandTotalValue;

    const subtotalTextNode = document.getElementById("summary-subtotal-display");
    if (subtotalTextNode) {
      const parentRow = subtotalTextNode.parentElement;
      if (parentRow) parentRow.style.display = "none";
    }

    const govFeeTextNode = document.getElementById("summary-gov-fees-display");
    if (govFeeTextNode) govFeeTextNode.innerText = "$" + finalGovernmentFeeValue.toFixed(2);

    const grandTotalTextNode = document.getElementById("summary-grand-total-display") || document.getElementById("payment-gateway-total-display");
    if (grandTotalTextNode) grandTotalTextNode.innerText = "$" + finalGrandTotalValue.toFixed(2);
  }

  window.removeSelectedAddonItemStraightFromSummaryCard = function(sourceCheckboxId) {
    if (!sourceCheckboxId) return;
    const targetCheckbox = document.getElementById(sourceCheckboxId);
    if (targetCheckbox) {
      targetCheckbox.checked = false;
      targetCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
    }
    directInjectCartAddonsToSummaryStep5();
  };

  window.globalOrchestratedCartRefreshSync = function() {
    directInjectCartAddonsToSummaryStep5();
  };

  window.directInjectCartAddonsToSummaryStep5 = directInjectCartAddonsToSummaryStep5;

  document.addEventListener("DOMContentLoaded", function() {
    directInjectCartAddonsToSummaryStep5();
    
    document.body.addEventListener("change", function(event) {
      if (event.target && event.target.matches('input[type="checkbox"]')) {
        directInjectCartAddonsToSummaryStep5();
      }
    });
    
    const panelFiveElement = document.getElementById("step-panel-5");
    if (panelFiveElement) {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === "style" && panelFiveElement.style.display !== "none") {
            directInjectCartAddonsToSummaryStep5();
          }
        });
      });
      observer.observe(panelFiveElement, { attributes: true });
    }
  });
})();
