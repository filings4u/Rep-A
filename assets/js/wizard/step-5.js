// ============================================================================ //
// 📊 MODULE 2D: ACCREDITED STEP 5 ITEMIZATION & PRICING ENGINE (WITH STATE FEE) //
// ============================================================================ //
function executeMarketplaceSummaryRenderLoop() { 
    const rowsContainer = document.getElementById("summary-purchase-rows-container"); 
    const subtotalDisplay = document.getElementById("summary-subtotal-display"); 
    const grandTotalDisplay = document.getElementById("summary-grand-total-display"); 
    const govFeesDisplay = document.getElementById("summary-gov-fees-display"); 
    
    if (!rowsContainer) return; 
    
    // 1. Clear out active dynamic lines to prevent duplicating items on step re-entries
    const structuralUpsellRows = rowsContainer.querySelectorAll('.runtime-upsell-summary-row, .runtime-state-fee-row'); 
    structuralUpsellRows.forEach(row => row.remove()); 
    
    let catalog = window.unifiedCatalogItems || {}; 
    const identityStateMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
    let addedUpsellHTML = ""; 
    let aggregateUpsellCost = 0; 

    // 2. Parse selected marketplace addons
    Object.keys(catalog).forEach(itemKey => {
        const item = catalog[itemKey];
        const checkboxId = identityStateMap[itemKey] || itemKey;
        const checkedInputNode = document.getElementById(checkboxId);
        const isCurrentlySelected = checkedInputNode ? checkedInputNode.checked : !!window[checkboxId];
        
        if (isCurrentlySelected) {
            const parsedItemPrice = parseFloat(item.price) || 0;
            aggregateUpsellCost += parsedItemPrice;
            
            addedUpsellHTML += `
                <div class="runtime-upsell-summary-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff; box-sizing: border-box; width: 100%; margin-bottom: 8px;">
                    <div style="display: flex; flex-direction: column; min-width: 0; flex: 1;">
                        <span style="font-weight: 700; font-size: 0.95rem; color: #0a1f44;">${item.name || itemKey}</span>
                    </div>
                    <div style="font-weight: 800; font-size: 1.05rem; color: #10b981; font-family: monospace;">+$${parsedItemPrice.toFixed(2)}</div>
                </div>`;
        }
    });

    // 3. EXTRACT AND RENDER REGIONAL GOVERNMENT FILING FEE ROW DYNAMICALLY
    const urlParams = new URLSearchParams(window.location.search);
    const targetStateCode = String(urlParams.get('state') || window.selectedJurisdiction || "").toUpperCase().trim();
    const targetServiceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim();
    
    let baseGovAgencyFee = 0;
    let stateFriendlyName = targetStateCode;

    if (targetStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[targetStateCode]) {
        const stateRecord = window.STATE_FILING_FEES[targetStateCode];
        stateFriendlyName = stateRecord.name;
        
        let mappingKey = targetServiceSlug.replace("-formation", "");
        if (mappingKey === "corporations") mappingKey = "c_corp";
        if (mappingKey === "series-llc") mappingKey = "series_llc";
        if (mappingKey === "nonprofits") mappingKey = "non_profit";
        
        baseGovAgencyFee = parseFloat(stateRecord[mappingKey] || stateRecord["llc"] || 0);
        
        if (baseGovAgencyFee > 0) {
            addedUpsellHTML += `
                <div class="runtime-state-fee-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border: 1px solid #ffedd5; border-left: 4px solid #f97316; border-radius: 8px; background: #fff7ed; box-sizing: border-box; width: 100%; margin-bottom: 8px;">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-weight: 700; font-size: 0.95rem; color: #c2410c;">Mandatory ${stateFriendlyName} Filing Fee</span>
                        <small style="color: #ea580c; font-weight: 500;"><i class="fa-solid fa-clock"></i> Timeline: ${stateRecord.time}</small>
                    </div>
                    <div style="font-weight: 800; font-size: 1.05rem; color: #c2410c; font-family: monospace;">+$${baseGovAgencyFee.toFixed(2)}</div>
                </div>`;
        }
    }

    if (addedUpsellHTML !== "") { 
        rowsContainer.insertAdjacentHTML('beforeend', addedUpsellHTML); 
    } 

    // 4. COMPUTE INVOICE CALCULATIONS WITH TYPE-CAST SHIELDS
    let foundationFilingCost = 0;
    if (window._tempCalcContext && window._tempCalcContext.baseTierPrice !== undefined) {
        foundationFilingCost = parseFloat(window._tempCalcContext.baseTierPrice) || 0;
    } else if (subtotalDisplay) {
        foundationFilingCost = parseFloat(subtotalDisplay.textContent.replace(/[^0-9.]/g, '')) || 0;
    }

    const comprehensiveSubtotal = foundationFilingCost + aggregateUpsellCost;
    const comprehensiveGrandTotal = comprehensiveSubtotal + baseGovAgencyFee;

    // 5. UPDATE INVOICE LABELS
    if (subtotalDisplay) subtotalDisplay.textContent = `$${comprehensiveSubtotal.toFixed(2)}`;
    if (govFeesDisplay) govFeesDisplay.textContent = `$${baseGovAgencyFee.toFixed(2)}`;
    if (grandTotalDisplay) grandTotalDisplay.textContent = `$${comprehensiveGrandTotal.toFixed(2)}`;
    
    // Globally register final balances for Step 6 Stripe Gateway charge operations
    window.summaryCalculatedGrandTotal = comprehensiveGrandTotal;
    window.computedWizardGrandTotalAmount = comprehensiveGrandTotal;
    window.computedWizardStateGovernmentFee = baseGovAgencyFee;
} 

window.executeMarketplaceSummaryRenderLoop = executeMarketplaceSummaryRenderLoop;


// ============================================================================ //
// 📊 STEP 5 INTERACTIVE VISIBILITY REAL-TIME INVOICE REFRESHER                 //
// ============================================================================ //
/**
 * Programmatic recalculation gate. Forces your data loops to scan and group
 * checked items without creating duplicate execution loops.
 */
function forceStep5SummaryInvoiceRefresh() { 
    console.log("[Summary Hub] Step 5 panel active. Forcing real-time invoice calculations update..."); 
    
    // 1. Force the dynamic state discovery crawl to scan and merge all selections if available 
    if (typeof window.runPricingMatrixDataCrawlPass === "function") { 
        window.runPricingMatrixDataCrawlPass(); 
    } 
    
    // 2. Force the itemized marketplace rows to reconstruct 
    if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") { 
        window.directInjectCartAddonsToSummaryStep5(); 
    } 
    
    // 🧠 🟢 CRITICAL CORE MATRIX ALIGNMENT RESOLUTION: 
    // Execute your master Step 5 compilation engine from wizard-summary.js. 
    if (typeof window.recalculateSummaryItemizedMatrixRows === "function") { 
        console.log("[Summary Hub] Routing view layout channels directly to your central compilation engine..."); 
        window.recalculateSummaryItemizedMatrixRows(); 
    } else { 
        console.warn("[Summary Hub Warning] recalculateSummaryItemizedMatrixRows is not yet bound to the global scope window context."); 
    } 
    
    // 3. Force the master UI binding manager to redraw elements and display math 
    if (typeof window.finalizePricingMatrixUiRender === "function") { 
        window.finalizePricingMatrixUiRender(); 
    } else if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// 🟢 SAFE INTERCEPT ROUTER: Prevents Call Stack Exceeded recursive locks 
if (typeof window.switchWizardActiveViewLayout === "function" && !window.switchWizardActiveViewLayout.isWrappedBySummaryEngine) { 
    const originalActiveLayoutSwapper = window.switchWizardActiveViewLayout; 
    
    window.switchWizardActiveViewLayout = function(activeStepTarget) { 
        // Execute the baseline visibility panel swapping routine first 
        originalActiveLayoutSwapper(activeStepTarget); 
        
        // Force evaluation sweeps if target matches summary indices 
        if (parseInt(activeStepTarget, 10) === 5) { 
            forceStep5SummaryInvoiceRefresh(); 
        } 
    }; 
    window.switchWizardActiveViewLayout.isWrappedBySummaryEngine = true; // Sets identification flag to block re-wrapping bugs 
    console.log("[Summary Hub] Intercept router securely wrapped around active layout swapper engine."); 
} 

// Global window exposure pass mapping 
window.forceStep5SummaryInvoiceRefresh = forceStep5SummaryInvoiceRefresh;


// ============================================================================ //
// 🎯 PART 5: UNIFIED ISOLATED VIEW OBSERVER ENGINE                             //
// ============================================================================ //
/**
 * Replaces both duplicate observers with one clean, unified layout tracking pass.
 */
function initStep5PurchaseSummaryVisibilityTracker() { 
    const summaryPanelNodeElement = document.getElementById("step-panel-5") || document.getElementById("step-5"); 
    if (!summaryPanelNodeElement) return; 
    
    // Disconnect any existing observer instance to clear out background memory leaks 
    if (window.summaryPanelViewObserverInstance) { 
        window.summaryPanelViewObserverInstance.disconnect(); 
    } 
    
    const summaryPanelViewObserver = new MutationObserver(() => { 
        // Runs immediately when display changes from display: none to block 
        if (summaryPanelNodeElement.style.display !== "none") { 
            if (typeof forceStep5SummaryInvoiceRefresh === "function") { 
                forceStep5SummaryInvoiceRefresh(); 
            } 
            setTimeout(() => { 
                if (typeof forceStep5SummaryInvoiceRefresh === "function") forceStep5SummaryInvoiceRefresh(); 
            }, 80); // Secondary safety macro pass for late-binding rendering layout speeds 
        } 
    }); 
    
    summaryPanelViewObserver.observe(summaryPanelNodeElement, { attributes: true, attributeFilter: ["style"] }); 
    window.summaryPanelViewObserverInstance = summaryPanelViewObserver; 
} 

// Register initialization execution safely on app startup paths 
if (document.readyState !== "loading") { 
    initStep5PurchaseSummaryVisibilityTracker(); 
} else { 
    document.addEventListener("DOMContentLoaded", initStep5PurchaseSummaryVisibilityTracker); 
}


// ============================================================================ //
// 🛒 STEP 5 INVOICE CALCULATOR & MARKTUP BUILDER ENGINE                        //
// ============================================================================ //
function directInjectCartAddonsToSummaryStep5() { 
    console.log("[Summary Engine] Recalculating itemized matrix rows pass..."); 
    const rowsTargetNode = document.getElementById("summary-purchase-rows-container"); 
    if (!rowsTargetNode) return; 
    
    let runningSubtotalAmount = 0; 
    let itemsMarkupString = ""; 
    const ctx = window._tempCalcContext || {}; 
    
    // Fallback context values ensure that baseline pricing doesn't error out if variables are cleared 
    const basePackagePriceValue = parseFloat(ctx.baseTierPrice) || parseFloat(localStorage.getItem('wizard_base_package_cost')) || 0; 
    const safePlanName = ctx.planConfig?.name || localStorage.getItem('wizard_service_key')?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Compliance Package'; 
    const safePlanTier = ctx.currentPlanKey ? String(ctx.currentPlanKey).toUpperCase() : (localStorage.getItem('wizard_plan_tier_key') || '').toUpperCase(); 
    
    runningSubtotalAmount += basePackagePriceValue; 
    
    // 🧠 🟢 PERSISTENT STORAGE ARRAY HOOK: 
    // Extract selected add-ons from LocalStorage instead of scanning a destroyed DOM panel! 
    let persistentAddonsArray = []; 
    try { 
        const savedAddonsMatrixString = localStorage.getItem('wizard_selected_addons_matrix'); 
        if (savedAddonsMatrixString) { 
            persistentAddonsArray = JSON.parse(savedAddonsMatrixString) || []; 
        } 
    } catch (arrayParseErr) { 
        console.warn("[Summary Engine] Unable to parse persistent addon cache payload matrix:", arrayParseErr); 
    } 
    
    // Loop over recovered marketplace add-on selections natively 
    persistentAddonsArray.forEach(addonItem => { 
        if (!addonItem || !addonItem.id) return; 
        const labelString = addonItem.title || addonItem.name || "Compliance Shield Asset"; 
        const priceValue = parseFloat(addonItem.price) || 0; 
        
        runningSubtotalAmount += priceValue; 
        
        itemsMarkupString += ` 
            <div class="summary-receipt-row-item" data-source-checkbox-id="${addonItem.id}" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: #475569; padding: 10px 0; border-bottom: 1px dashed #e2e8f0; width: 100%; box-sizing: border-box;"> 
                <div style="display: flex; flex-direction: column; gap: 2px;"> 
                    <span style="font-weight: 600; color: #0a1f44;">+ ${labelString}</span> 
                    <button type="button" onclick="window.removeSelectedAddonItemStraightFromSummaryCard('${addonItem.id}')" style="background: transparent; border: none; color: #ef4444; font-size: 0.725rem; font-weight: 700; cursor: pointer; padding: 0; text-align: left; width: fit-content; display: flex; align-items: center; gap: 4px; margin-top: 2px; transition: opacity 0.1s;"><i class="fa-solid fa-trash-can"></i> Remove from Invoice</button> 
                </div> 
                <span style="font-family: monospace; font-weight: 700; color: #0a1f44; font-size: 0.95rem;">$${priceValue.toFixed(2)}</span> 
            </div>`; 
    }); 
    
    const tierDisplayString = safePlanTier ? ' (' + safePlanTier + ')' : ''; 
    const baselineHeaderRow = '<div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 4px;"><span>' + safePlanName + tierDisplayString + '</span><span style="font-family: monospace;">$' + basePackagePriceValue.toFixed(2) + '</span></div>'; 
    
    rowsTargetNode.innerHTML = baselineHeaderRow + itemsMarkupString; 
    
    // Automatically binds the calculated running total amount back to your visible elements 
    const grandTotalTargetElements = [ 
        document.getElementById("summary-grand-total-display"), 
        document.getElementById("step-5-total-value"), 
        document.getElementById("invoice-grand-total") 
    ]; 
    
    grandTotalTargetElements.forEach(targetElement => { 
        if (targetElement) { 
            targetElement.innerText = `$${runningSubtotalAmount.toFixed(2)}`; 
        } 
    }); 
    
    // Globally register active totals value for payment integrations to extract on Step 6 
    window.finalComputedOnboardingInvoiceTotalAmount = runningSubtotalAmount; 
    window.summaryCalculatedGrandTotal = runningSubtotalAmount; 
}

// Bind method cleanly to global window boundaries
window.directInjectCartAddonsToSummaryStep5 = directInjectCartAddonsToSummaryStep5;


/**
 * Forcefully itemizes and un-checks deleted rows from storage if removed directly from summary invoice.
 */
window.removeSelectedAddonItemStraightFromSummaryCard = function(sourceCheckboxId) { 
    if (!sourceCheckboxId) return; 
    console.log(`[Summary Engine] Force removing item selection key: ${sourceCheckboxId} straight from invoice summary sheet...`); 
    
    // 1. If the checkbox element happens to be currently present on the page, uncheck it natively 
    const targetCheckbox = document.getElementById(sourceCheckboxId); 
    if (targetCheckbox) { 
        targetCheckbox.checked = false; 
    } 
    
    // 2. Erase or rebuild the selection tracking array parameters securely within LocalStorage 
    try { 
        const savedAddonsMatrixString = localStorage.getItem('wizard_selected_addons_matrix'); 
        if (savedAddonsMatrixString) { 
            let existingAddonsArray = JSON.parse(savedAddonsMatrixString) || []; 
            
            // Filter out the matching item record matching our unique deletion identifier ID 
            let upgradedAddonsArray = existingAddonsArray.filter(item => item.id !== sourceCheckboxId); 
            
            // Sync states back to persistent memory blocks instantly 
            window.currentSelectedAddonsListArrayMatrix = upgradedAddonsArray; 
            localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(upgradedAddonsArray)); 
            localStorage.setItem(`wizard_field_${sourceCheckboxId}`, "false"); 
        } 
    } catch (deletionProcessErr) { 
        console.error("[Summary Engine Deletion Intercept Error]", deletionProcessErr); 
    } 
    
    // 3. Force re-run calculation matrices to update total invoice balances 
    if (typeof window.forceStep5SummaryInvoiceRefresh === "function") { 
        window.forceStep5SummaryInvoiceRefresh(); 
    } 
}; 

// Maintain alias function pointers for backwards compatibility across older step layout files 
window.forceStep5PurchaseSummaryRenderCycle = typeof forceStep5SummaryInvoiceRefresh !== "undefined" ? forceStep5SummaryInvoiceRefresh : window.forceStep5SummaryInvoiceRefresh; 
window.forceStep5SummaryInvoiceRefresh = typeof forceStep5SummaryInvoiceRefresh !== "undefined" ? forceStep5SummaryInvoiceRefresh : window.forceStep5SummaryInvoiceRefresh; 
window.initStep5PurchaseSummaryVisibilityTracker = typeof initStep5PurchaseSummaryVisibilityTracker !== "undefined" ? initStep5PurchaseSummaryVisibilityTracker : window.initStep5PurchaseSummaryVisibilityTracker; 
window.directInjectCartAddonsToSummaryStep5 = typeof directInjectCartAddonsToSummaryStep5 !== "undefined" ? directInjectCartAddonsToSummaryStep5 : window.directInjectCartAddonsToSummaryStep5;


// ============================================================================ //
// 📊 PART 1 OF 2: STEP 5 CART REMOVE ACTUATOR ENGINE (STATE SYNCHRONIZED REPAIR) //
// ============================================================================ //
/**
 * Allows users to un-check an option directly from Step 5 without resetting their workflow.
 * @param {string} targetCheckboxElementId - The target checkbox ID token to wipe
 */
function removeSelectedAddonItemStraightFromSummaryCard(targetCheckboxElementId) { 
    if (!targetCheckboxElementId) return; 
    console.log(`[Summary Engine] Action Click: Wiping item card #${targetCheckboxElementId} straight from memory pools...`); 
    
    // 1. If the physical checkbox element happens to be currently present on the page layout, uncheck it natively 
    const physicalCheckbox = document.getElementById(targetCheckboxElementId); 
    if (physicalCheckbox) { 
        physicalCheckbox.checked = false; 
        physicalCheckbox.dispatchEvent(new Event('change', { bubbles: true })); 
    } 
    
    // 2. Clear variable memory registers securely 
    window[targetCheckboxElementId] = false; 
    const trackingStateKey = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP ? window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP[targetCheckboxElementId] : null; 
    if (trackingStateKey) { 
        window[trackingStateKey] = false; 
    } 
    
    // 3. Clear from legacy cart state array contexts if active on window 
    if (window.currentCartState && Array.isArray(window.currentCartState.addons)) { 
        window.currentCartState.addons = window.currentCartState.addons.filter(addon => 
            addon.id !== targetCheckboxElementId && addon.name !== targetCheckboxElementId 
        ); 
    } 
    
    // 4. 🟢 FIXED UNIFIED MEMORY SYNCHRONIZATION OVERRIDE: 
    // Filter and rebuild the persistent localStorage selected addons array matrix context 
    try { 
        const savedAddonsMatrixString = localStorage.getItem('wizard_selected_addons_matrix'); 
        if (savedAddonsMatrixString) { 
            let existingAddonsArray = JSON.parse(savedAddonsMatrixString) || []; 
            let upgradedAddonsArray = existingAddonsArray.filter(item => item.id !== targetCheckboxElementId); 
            window.currentSelectedAddonsListArrayMatrix = upgradedAddonsArray; 
            localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(upgradedAddonsArray)); 
        } 
        // Force the explicit isolated flag down to false so Step 5 data-summary field loops drop it 
        localStorage.setItem(`wizard_field_${targetCheckboxElementId}`, "false"); 
    } catch (cacheArrayMutationErr) { 
        console.error("[Summary Engine Actuator Failure]", cacheArrayMutationErr); 
    } 
    
    // 5. Force a progressive real-time serialization pass across all active viewport metrics 
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 
    
    // 6. Force a fresh redrawing sweep of the visible invoice balance layout cards 
    if (typeof window.directInjectCartAddonsToSummaryStep5 === "function") { 
        window.directInjectCartAddonsToSummaryStep5(); 
    } 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// Global window parameter exposure mapping definitions 
window.removeSelectedAddonItemStraightFromSummaryCard = removeSelectedAddonItemStraightFromSummaryCard;


// ============================================================================ //
// 🎯 PART 2 OF 2: VISIBILITY INTERLOCK ALIGNMENT                               //
// ============================================================================ //
/**
 * 🟢 CRITICAL SYNC NOTE:
 * The duplicate declarations of syncModalCheckboxActionDirectToForm and
 * forceStep5SummaryInvoiceRefresh have been stripped out from this section.
 * This ensures they do not overwrite the persistent, storage-aligned
 * master variations we built in earlier file blocks.
 */
// 💡 WIRE INCLUSION: Links the summary calculations engine right into your display observes
const step5PanelElementNode = document.getElementById("step-panel-5") || document.getElementById("step-5");
if (step5PanelElementNode) {
    const summaryPanelViewObserver = new MutationObserver(() => {
        if (step5PanelElementNode.style.display !== "none") {
            if (typeof window.executeMarketplaceSummaryRenderLoop === "function") {
                window.executeMarketplaceSummaryRenderLoop();
            }
            setTimeout(() => {
                if (typeof window.executeMarketplaceSummaryRenderLoop === "function") {
                    window.executeMarketplaceSummaryRenderLoop();
                }
            }, 80);
        }
    });
    summaryPanelViewObserver.observe(step5PanelElementNode, { attributes: true, attributeFilter: ["style"] });
}


// ============================================================================ //
// 🎨 STEP 5 UI SUMMARY PANEL OVERRIDE & DISPLAY LAYOUT FORMATTER (DYNAMIC)     //
// ============================================================================ //
/**
 * filings4u, LLC - Fail-Safe Step 5 UI Formatter
 * Directly targets live screen text nodes to fix layout display rows.
 * Unified calculations version.
 * @param {Object} currentCartState - Optional context object parameters.
 */
function formatStepFiveSummaryInvoiceDisplayLayout(currentCartState = {}) { 
    const rowsContainer = document.getElementById("summary-purchase-rows-container"); 
    const subtotalDisplay = document.getElementById("summary-subtotal-display"); 
    const govFeesDisplay = document.getElementById("summary-gov-fees-display"); 
    const grandTotalDisplay = document.getElementById("summary-grand-total-display"); 
    
    if (!rowsContainer) return; 
    const activeRows = Array.from(rowsContainer.children); 
    
    // Extract parameters directly from global trackers to guarantee calculation matches 
    const serviceKey = currentCartState.serviceKey || window.routeActiveServiceKey || ""; 
    const formationServiceKeys = ["llc-formation", "corporations", "series-llc", "foreign-qualification", "nonprofits"]; 
    const isFormationTrack = formationServiceKeys.includes(serviceKey); 
    
    // Read totals safely out of calculation engine context entries 
    const liveCalculatedGrandTotal = parseFloat(window.wizardCalculatedFinalTotalAmount || window.calculatedCartGrandTotalAmount || 0); 

    // 1. PASS THROUGH LINE ITEMS IN THE CONTAINER AND SANITIZE DUPLICATES 
    activeRows.forEach(row => { 
        if (!row) return; 
        let rowText = row.innerText || row.textContent || ""; 
        if (rowText.includes("State Filing Fee") || rowText.includes("Government Filing Fee")) { 
            row.style.setProperty("display", "none", "important"); 
        } 
    }); 

    // 2. DYNAMIC PACKAGE SUB-TOTAL COMPILATION PASS 
    if (subtotalDisplay) { 
        let subtotalValue = 0; 
        if (window._tempCalcContext && window._tempCalcContext.baseTierPrice !== undefined) { 
            const basePrice = parseFloat(window._tempCalcContext.baseTierPrice) || 0; 
            const addonPrice = parseFloat(window._tempCalcContext.incrementalAddonTotal) || 0; 
            
            // 🟢 DYNAMIC ARITHMETIC ENFORCEMENT TYPE-CAST: 
            const truckingPrice = parseFloat(window.lastCalculatedNewEntrantAddonTotal) || 0; 
            subtotalValue = basePrice + addonPrice + truckingPrice; 
        } 
        subtotalDisplay.innerText = "$" + subtotalValue.toFixed(2); 
        
        const labelNode = subtotalDisplay.previousElementSibling; 
        if (labelNode) { 
            const displayServiceLabel = window._tempCalcContext?.planConfig?.name || "Filing & Add-on"; 
            labelNode.innerText = `${displayServiceLabel} Subtotal`; 
        } 
    } 

    // 3. DYNAMICALLY RENDER GOVERNMENT FEES ROW INTERFACES 
    if (govFeesDisplay) { 
        const pricingRecord = window.CENTRAL_SERVICE_PLAN_DB?.[serviceKey]; 
        const stateFilingFeeAmount = parseFloat(pricingRecord?.gov_fee || 0); 
        govFeesDisplay.innerText = "$" + stateFilingFeeAmount.toFixed(2); 
        
        const govRowParent = govFeesDisplay.parentElement; 
        if (govRowParent) { 
            const govDisplayVisibility = (isFormationTrack && stateFilingFeeAmount > 0) ? "flex" : "none"; 
            govRowParent.style.setProperty("display", govDisplayVisibility, "important"); 
        } 
    } 

    // 4. TOTAL SUMMARY AMOUNT MATCHES CORE ENGINES 
    if (grandTotalDisplay && liveCalculatedGrandTotal > 0) { 
        grandTotalDisplay.innerText = "$" + liveCalculatedGrandTotal.toFixed(2); 
    } 
} 

// Map parameters cleanly back to global workspace scopes window trackers 
window.formatStepFiveSummaryInvoiceDisplayLayout = formatStepFiveSummaryInvoiceDisplayLayout;


// ============================================================================ //
// 🔍 AUTOMATED OBSERVATION TRIGGER: INITIALIZE LIVE SHEET LISTENER INTERFACES  //
// ============================================================================ //
/**
 * UI Mutation Guard Hook
 * Automatically runs the formatter whenever your wizard updates the summary panel.
 * Connected layout trigger directly to the newly isolated formatter module handler.
 */
(function activateSummaryObserver() { 
    const summaryTarget = document.getElementById("summary-purchase-rows-container"); 
    
    if (!summaryTarget) { 
        // Non-blocking timeout pool checks for element injection 
        setTimeout(activateSummaryObserver, 250); 
        return; 
    } 
    
    const summaryObserver = new MutationObserver(() => { 
        summaryObserver.disconnect(); // Prevent infinite layout loop traps 
        
        if (typeof window.formatStepFiveSummaryInvoiceDisplayLayout === "function") { 
            window.formatStepFiveSummaryInvoiceDisplayLayout(window.currentCartState || {}); 
        } 
        
        summaryObserver.observe(summaryTarget, { childList: true, subtree: true }); 
    }); 
    
    summaryObserver.observe(summaryTarget, { childList: true, subtree: true }); 
    console.log("[Observer Engine] Step 5 layout monitor active and stabilized."); 
})();
