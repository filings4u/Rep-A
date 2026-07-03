// ============================================================================ // 
// 📊 MODULE CARD: 100% PERSISTENT DATA STEP 5 SUMMARY COMPILATION ENGINE // 
// ============================================================================ // 
(function() { 
    "use strict"; 
    window.recalculateSummaryItemizedMatrixRows = function() { 
        console.log("[Summary Engine] Running strict prefix-matched persistent recalculation matrix..."); 
        
        // 1. DISCOVER LOCAL STEP 5 DOM CHANNELS SAFELY 
        const rowsContainer = document.getElementById("summary-purchase-rows-container"); 
        const subtotalNode = document.getElementById("summary-subtotal-display"); 
        const govFeesNode = document.getElementById("summary-gov-fees-display"); 
        const grandTotalNode = document.getElementById("summary-grand-total-display"); 
        
        // Defensive check: Exit if the wizard summary DOM nodes aren't loaded yet 
        if (!rowsContainer || !govFeesNode || !grandTotalNode) { 
            return; 
        } 

        // 2. READ PATH STRINGS PERSISTENTLY FROM STORAGE LABELS FIRST 
        const urlParams = new URLSearchParams(window.location.search); 
        const serviceKey = urlParams.get('service') || localStorage.getItem('wizard_service_key'); 
        const planTierKey = urlParams.get('plan') || localStorage.getItem('wizard_plan_tier_key'); 
        
        // PRIORITIZE LOCALSTORAGE TO PREVENT LATE DOM RE-WRITES OVERWRITING CACHED STATES
        const rawStateValue = localStorage.getItem('wizard_selected_state') || urlParams.get('state') || document.querySelector('select[id*="state"], select[id*="formation"]')?.value || ""; 
        const selectedStateCode = String(rawStateValue).trim().toUpperCase(); 
        if (!serviceKey) { 
            console.warn("[Summary Engine Warning] No active 'service' selection found in URL parameters or LocalStorage pools."); 
            return; 
        } 

        // Backup current valid properties back to LocalStorage to protect data against page reloads 
        localStorage.setItem('wizard_service_key', serviceKey); 
        if (planTierKey) localStorage.setItem('wizard_plan_tier_key', planTierKey); 
        if (selectedStateCode) localStorage.setItem('wizard_selected_state', selectedStateCode); 
        
        // Synchronize current keys back to global memory blocks for Step 6 dependencies 
        window.routeActiveServiceKey = serviceKey; 
        if (planTierKey) { 
            window.routeActivePlanTierName = planTierKey.toUpperCase(); 
        } 

        // 3. LOOK UP BASE PRICING DIRECTLY FROM CONFIGURATION DICTIONARIES 
        let basePackageCostValue = 0; 
        if (window.governmentPricing && window.governmentPricing[serviceKey]) { 
            basePackageCostValue = parseFloat(window.governmentPricing[serviceKey].base_fee) || 0; 
        } 
        
        // Look up state fees dynamically using our recovered state code 
        let dynamicStateRegistryFee = 0; 
        if (selectedStateCode && window.statePricing && window.statePricing[selectedStateCode] && window.statePricing[selectedStateCode][serviceKey]) { 
            dynamicStateRegistryFee = parseFloat(window.statePricing[selectedStateCode][serviceKey]) || 0; 
        }
         // 4. PROCESS SELECTED MARKETPLACE UPSELLS FROM PERSISTENT STORAGE ARRAY 
        let dynamicAddonsList = window.currentSelectedAddonsListArrayMatrix || []; 
        
        // Recover the saved array string from LocalStorage safely if window context drops 
        if (dynamicAddonsList.length === 0) { 
            try { 
                const savedAddons = localStorage.getItem('wizard_selected_addons_matrix'); 
                if (savedAddons) { 
                    dynamicAddonsList = JSON.parse(savedAddons); 
                } 
            } catch (e) { 
                console.error("[Summary Engine] Error parsing selected addons array matrix from LocalStorage:", e); 
            } 
        } 
        
        let cumulativeAddonsPriceTotal = 0; 
        rowsContainer.innerHTML = ""; // Reset layout row inner contents cleanly 
        
        // FIX: Swapped out old dynamic title variable for standard string
        const preparationLabel = "filings4u Preparation Fee"; 
        
        // Generate core base package row item dynamically using URL data maps 
        let itemizedLedgerMarkup = ` 
            <div class="receipt-line-item" style="font-weight: 700; color: var(--navy); display: flex; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px dashed var(--border); font-size: 1rem;"> 
                <span>${preparationLabel}</span> 
                <span style="font-family: monospace;">$${basePackageCostValue.toFixed(2)}</span> 
            </div> 
        `; 

        // Loop over chosen add-on items organically 
        dynamicAddonsList.forEach(addonItem => { 
            let addonPrice = parseFloat(addonItem.price) || 0; 
            if (window.wizardUpsells && window.wizardUpsells[addonItem.id]) { 
                addonPrice = parseFloat(window.wizardUpsells[addonItem.id].price) || addonPrice; 
            } 
            cumulativeAddonsPriceTotal += addonPrice; 
            itemizedLedgerMarkup += ` 
                <div class="receipt-line-item" style="color: var(--slate); display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--border); font-size: 0.95rem;"> 
                    <span>+ ${addonItem.title || addonItem.name}</span> 
                    <span style="font-family: monospace;">$${addonPrice.toFixed(2)}</span> 
                </div> 
            `; 
        }); 

        // Dynamic State/Government Row 
        if (dynamicStateRegistryFee > 0) { 
            const dynamicFeeLabel = (serviceKey.includes("annual") || serviceKey.includes("report")) ? "Government Filing Fee" : "State Filing Fee"; 
            itemizedLedgerMarkup += ` 
                <div class="receipt-line-item" style="font-weight: 500; color: var(--navy); display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--border); font-size: 0.95rem;"> 
                    <span>+ ${dynamicFeeLabel} (${selectedStateCode})</span> 
                    <span style="font-family: monospace;">$${dynamicStateRegistryFee.toFixed(2)}</span> 
                </div> 
            `; 
        } 

        // Mount rows markup directly into your Step 5 template card 
        rowsContainer.innerHTML = itemizedLedgerMarkup; 

        // 5. UNIFIED FINANCIAL CALCULATIONS MATRIX HYDRATION 
        // FIX: Removed intermediate subtotal blocks to solve structural pricing discrepancy.
        const trueCalculatedGrandTotalSummaryCost = basePackageCostValue + dynamicStateRegistryFee + cumulativeAddonsPriceTotal; 

        // FIX: Target and hide the "Filing & Add-on Subtotal" row completely from view
        if (subtotalNode) { 
            const subtotalRowWrapper = subtotalNode.closest('div[style*="justify-content: space-between"]');
            if (subtotalRowWrapper) {
                subtotalRowWrapper.style.setProperty('display', 'none', 'important');
            }
        } 
        
        if (govFeesNode) { 
            govFeesNode.textContent = `$${dynamicStateRegistryFee.toFixed(2)}`; 
        } 
        
        grandTotalNode.textContent = `$${trueCalculatedGrandTotalSummaryCost.toFixed(2)}`; 

        // Update global state tracking context for Step 6 (Stripe payment screen) 
        window.summaryCalculatedGrandTotal = trueCalculatedGrandTotalSummaryCost; 
        
        // Sync price text dynamically with Step 6 gateway total display if rendered on page 
        const step6TotalDisplay = document.getElementById("payment-gateway-total-display"); 
        if (step6TotalDisplay) { 
            step6TotalDisplay.textContent = `$${trueCalculatedGrandTotalSummaryCost.toFixed(2)}`; 
        }
        // 🧠 44+ SERVICES AUTOMATED DATA BRIDGING ENGINE (NO HARDCODED KEYS) 
        try { 
            console.log("[Summary Engine] Running fuzzy keyword-fragment parsing pass across 44+ potential form styles..."); 
            const targetSummaryFields = document.querySelectorAll("[data-summary-field]"); 
            
            // Pull a clean array snapshot of every single key currently living inside the browser's storage pool 
            const currentStorageKeys = Object.keys(localStorage); 
            
            targetSummaryFields.forEach(displayNode => { 
                const structuralTargetId = displayNode.getAttribute("data-summary-field"); 
                if (!structuralTargetId) return; 
                
                let resolvedStoredValue = null; 
                const normalizedSummaryLabel = structuralTargetId.toLowerCase(); 

                // 🟢 TIMING WIRE LOGIC: Deep crawl storage keys to isolate matching text fragments 
                for (let k = 0; k < currentStorageKeys.length; k++) { 
                    const rawCacheKeyName = currentStorageKeys[k]; 
                    const cleanCacheKeyName = rawCacheKeyName.toLowerCase(); 
                    
                    // Get the raw string safely to inspect its contents 
                    const rawStoredTextValue = localStorage.getItem(rawCacheKeyName) || ""; 
                    const cleanValueCheck = rawStoredTextValue.trim(); 

                    // 1. Match Company/Legal Names (Targets data-summary-field="company_name") 
                    if ((normalizedSummaryLabel.includes("name") || normalizedSummaryLabel.includes("company")) && !normalizedSummaryLabel.includes("owner") && !normalizedSummaryLabel.includes("member") && !normalizedSummaryLabel.includes("email")) { 
                        if (/^\d+$/.test(cleanValueCheck) || cleanValueCheck.includes("{") || cleanValueCheck.includes("}")) { 
                            continue; 
                        } 
                        if (cleanCacheKeyName.includes("name") || cleanCacheKeyName.includes("legal") || cleanCacheKeyName.includes("company") || cleanCacheKeyName.includes("corp")) { 
                            if (!cleanCacheKeyName.includes("owner") && !cleanCacheKeyName.includes("member") && !cleanCacheKeyName.includes("email")) { 
                                resolvedStoredValue = localStorage.getItem(rawCacheKeyName); 
                                if (resolvedStoredValue && resolvedStoredValue.trim() !== "") break; 
                            } 
                        } 
                    } 

                    // 2. Match Filing States (Targets data-summary-field="selected_state") 
                    if (normalizedSummaryLabel.includes("state") || normalizedSummaryLabel.includes("territory")) { 
                        if (cleanValueCheck.includes("{") || cleanValueCheck.includes("}")) { 
                            continue; 
                        } 
                        if (cleanCacheKeyName.includes("state") || cleanCacheKeyName.includes("formation") || cleanCacheKeyName.includes("region") || cleanCacheKeyName.includes("code")) { 
                            resolvedStoredValue = localStorage.getItem(rawCacheKeyName); 
                            if (resolvedStoredValue && resolvedStoredValue.trim() !== "") break; 
                        } 
                    } 

                    // 3. Match Contact Emails (Targets data-summary-field="email") 
                    if (normalizedSummaryLabel.includes("email") || normalizedSummaryLabel.includes("address")) { 
                        if (cleanCacheKeyName.includes("email") || cleanCacheKeyName.includes("mail")) { 
                            resolvedStoredValue = localStorage.getItem(rawCacheKeyName); 
                            if (resolvedStoredValue && resolvedStoredValue.trim() !== "") break; 
                        } 
                    } 

                    // 4. Match Contact Phone Lines (Targets data-summary-field="phone") 
                    if (normalizedSummaryLabel.includes("phone") || normalizedSummaryLabel.includes("contact")) { 
                        if (cleanCacheKeyName.includes("phone") || cleanCacheKeyName.includes("tel") || cleanCacheKeyName.includes("mobile") || cleanCacheKeyName.includes("number")) { 
                            if (!cleanCacheKeyName.includes("state")) { 
                                resolvedStoredValue = localStorage.getItem(rawCacheKeyName); 
                                if (resolvedStoredValue && resolvedStoredValue.trim() !== "") break; 
                            } 
                        } 
                    } 

                    // 5. Match Company Owners (Targets data-summary-field="sole_member_choice") 
                    if (normalizedSummaryLabel.includes("owner") || normalizedSummaryLabel.includes("member")) { 
                        if (cleanCacheKeyName.includes("owner") || cleanCacheKeyName.includes("member") || cleanCacheKeyName.includes("proprietor") || cleanCacheKeyName.includes("shareholder")) { 
                            resolvedStoredValue = localStorage.getItem(rawCacheKeyName); 
                            if (resolvedStoredValue && resolvedStoredValue.trim() !== "") break; 
                        } 
                    } 
                } 

                // Exact programmatic fallback if the crawl scanner comes up completely empty 
                if (!resolvedStoredValue) { 
                    const sanitizedKey = structuralTargetId.toLowerCase().replace(/[^a-z0-9]/g, '_'); 
                    resolvedStoredValue = localStorage.getItem(`wizard_field_${structuralTargetId}`) || localStorage.getItem(`wizard_field_${structuralTargetId.toLowerCase()}`) || localStorage.getItem(`wizard_field_${sanitizedKey}`) || localStorage.getItem(structuralTargetId) || localStorage.getItem(sanitizedKey); 
                } 

                // Update the layout display with matching formatting states 
                if (resolvedStoredValue !== null && resolvedStoredValue !== undefined && resolvedStoredValue.trim() !== "") { 
                    if (resolvedStoredValue === "true") { 
                        displayNode.textContent = "Verified / Accepted ✓"; 
                        displayNode.style.color = "#10b981"; 
                    } else if (resolvedStoredValue === "false") { 
                        displayNode.textContent = "Not Agreed / Declined"; 
                        displayNode.style.color = "#b91c1c"; 
                    } else { 
                        displayNode.textContent = resolvedStoredValue.trim(); 
                        displayNode.style.color = ""; 
                    } 
                } else { 
                    displayNode.textContent = "—"; 
                    displayNode.style.color = ""; 
                } 
            }); 
            console.log("[Summary Engine Success] Step 5 review screen layout hydration complete via flexible fragments."); 
        } catch (hydrationError) { 
            console.warn("[Summary Engine Hydration Failure]", hydrationError); 
        } 
    }; 
})();
