(function() {
  window.STEP_2_UPSELLS_REFERENCE = {
    "assemble-dqf": { 
      name: "Assemble Driver Qualification Files (DQF)", 
      price: 79.00,
      desc: "Compiles mandatory 3-year historical driving data, employment history verifications, and medical certificate records required for safety audit clearance."
    },
    "drug-consortium": { 
      name: "DOT Drug & Alcohol Consortium Enrollment", 
      price: 149.00,
      desc: "Integrates active driver names into the mandatory random testing pool registry and issues immediate enrollment verification certificates."
    },
    "hos-review": { 
      name: "Hours of Service (HOS) Log Audit Pre-Review", 
      price: 195.00,
      desc: "Deep telemetry audit scanning across ELD tracking hardware files to detect graph exceptions and implement correction compliance patterns."
    },
    "maintenance-ledger": { 
      name: "Vehicle Maintenance Ledger & Inspection Set", 
      price: 85.00,
      desc: "Acquires systematic Part 396 annual tracking sheets, vehicle condition folders, and preventive maintenance inspection log sets."
    },
    "expert-consultation": { 
      name: "Independent Pre-Audit Consultation Package", 
      price: 250.00,
      desc: "Private 1-on-1 dossier mock review session with a senior compliance safety strategist before your official federal state upload deadline."
    }
  };

  function launchNewEntrantAuditRequirementsGuideModal() {
    let modalRoot = document.getElementById("f4u-price-guide-modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "f4u-price-guide-modal-root";
      modalRoot.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;";
      document.body.appendChild(modalRoot);
    }

    let contentRowsHtml = "";
    let itemsCounter = 1;

    for (const key in window.STEP_2_UPSELLS_REFERENCE) {
      if (!window.STEP_2_UPSELLS_REFERENCE.hasOwnProperty(key)) continue;
      
      const item = window.STEP_2_UPSELLS_REFERENCE[key];
      const targetId = "nea_service_" + key.replace("assemble-", "").replace("-consortium", "").replace("-review", "").replace("-ledger", "").replace("expert-", "");
      
      const backgroundFormCheckbox = document.getElementById(targetId) || document.getElementById(key) || document.querySelector("input[id*='" + targetId + "']");
      const isChecked = backgroundFormCheckbox ? backgroundFormCheckbox.checked : false;
      
      contentRowsHtml += '<div style="display: flex; flex-direction: column; gap: 12px; background: rgba(10, 31, 68, 0.02); padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; width: 100%; box-sizing: border-box; text-align: left;"><div style="display: flex; justify-content: space-between; color: #0a1f44; align-items: center; font-weight: 700;"><div style="display: flex; align-items: center; gap: 10px;"><input type="checkbox" id="modal_input_box_' + key + '" style="width: 16px; height: 16px; cursor: pointer; accent-color: #10b981; margin: 0;" ' + (isChecked ? 'checked' : '') + ' onchange="window.syncModalCheckboxActionDirectToForm(\'' + targetId + '\', this.checked)"><label for="modal_input_box_' + key + '" style="cursor: pointer; margin: 0;">' + itemsCounter + '. ' + item.name + '</label></div><span style="color: #10b981; font-family: monospace;">$' + item.price.toFixed(2) + '</span></div><span style="font-size: 0.8rem; color: #64748b; display: block; padding-left: 26px;">' + item.desc + '</span></div>';
      
      itemsCounter++;
    }

    modalRoot.innerHTML = '<div style="background: #ffffff; border-radius: 12px; width: 100%; max-width: 650px; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.3); overflow: hidden;"><div style="background: #0a1f44; color: #ffffff; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;"><h4 style="margin: 0; font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;"><i class="fa-solid fa-shield"></i> FMCSA Audit Requirements Guide</h4><button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: transparent; border: none; color: #ffffff; font-size: 1.25rem; cursor: pointer; font-weight: 700;">&times;</button></div><div style="padding: 20px; overflow-y: auto; font-size: 0.85rem; line-height: 1.5; color: #334155; display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;"><p style="margin: 0; font-weight: 600; color: #0a1f44; text-align: left;">To pass the New Entrant Safety Audit, you must present up-to-date, compliant records for the following parameters. Review what you need vs. Filings4u\'s flat-rate assembly options:</p><div id="modal-pristine-rows-wrapper" style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;">' + contentRowsHtml + '</div></div><div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 12px 20px; display: flex; justify-content: flex-end;"><button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: #0a1f44; color: #ffffff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 700; cursor: pointer;">Got It, Close Guide</button></div></div>';
    modalRoot.style.display = "flex";
  }

  function syncModalCheckboxActionDirectToForm(backgroundFormId, isChecked) {
    if (!backgroundFormId) return;
    const backgroundCheckboxNode = document.getElementById(backgroundFormId) || document.querySelector("input[id*='" + backgroundFormId + "']");
    if (backgroundCheckboxNode) {
      backgroundCheckboxNode.checked = isChecked;
      backgroundCheckboxNode.dispatchEvent(new Event('change', { bubbles: true }));
    }
    if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") {
      window.directInjectCartAddonsToSummaryStep5();
    }
  }

  function closeNewEntrantAuditPriceGuideModal() {
    const modalRoot = document.getElementById("f4u-price-guide-modal-root");
    if (modalRoot) {
      modalRoot.style.display = "none";
    }
  }

  window.launchNewEntrantAuditRequirementsGuideModal = launchNewEntrantAuditRequirementsGuideModal;
  window.syncModalCheckboxActionDirectToForm = syncModalCheckboxActionDirectToForm;
  window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal;
  window.triggerNewEntrantAuditComplianceChecklistPopup = launchNewEntrantAuditRequirementsGuideModal;
})();
