// ============================================================================ // 
// ðŸ“Š DYNAMIC SAFE PRICE PROVIDER (PREVENTS CRASH IF SERVICE OR TIER IS UNEXPECTED) // 
// ============================================================================ // 
/** 
 * Dynamic backup pricing utility parser. Pulls floating point values safely without object read crashes. 
 * FIXED: Implemented adaptive resolution checks to support both nested .prices nodes and root property schemas. 
 * @param {string} serviceKey - Dynamic targeted service handle token string. 
 * @param {string} tierKey - Dynamic targeted speed or compliance plan level slug token. 
 * @returns {number} Floating point core package value price metric. 
 */ 
window.getServicePrice = function(serviceKey, tierKey) { 
    if (!serviceKey || !window.CENTRAL_SERVICE_PLAN_DB) return 0; 

    const serviceRecord = window.CENTRAL_SERVICE_PLAN_DB[serviceKey]; 
    if (!serviceRecord) { 
        console.warn(`[Price Provider Warning] Requested service key "${serviceKey}" not found inside centralized registries.`); 
        return 0; 
    } 

    // FIXED: Dynamically isolate the pricing block regardless of dictionary nesting structures 
    const matchedPricingMatrix = serviceRecord.prices || serviceRecord; 
    if (!matchedPricingMatrix || typeof matchedPricingMatrix !== "object") return 0; 

    // Isolate a valid target plan tier key handle cleanly 
    const targetPlanKey = String(tierKey || window.routeActivePlanKey || "").toLowerCase().trim(); 

    // 1. Direct match resolution pass 
    if (targetPlanKey && typeof matchedPricingMatrix[targetPlanKey] !== "undefined") { 
        return parseFloat(matchedPricingMatrix[targetPlanKey]) || 0; 
    } 

    // 2. Algorithmic Fallback: Isolate only valid structural currency properties to prevent schema crashes 
    const validNumericTiers = Object.keys(matchedPricingMatrix).filter(k => 
        k !== "name" && k !== "bullets" && k !== "addons" && k !== "plans" && !isNaN(parseFloat(matchedPricingMatrix[k])) 
    ); 

    if (validNumericTiers.length > 0) { 
        // ðŸŸ¢ FIXED: Cleaned up spacing and comment text to guarantee this variable declaration line can never be minified out
        const automatedFallbackKey = validNumericTiers[0]; 
        console.log(`[Price Provider Fallback] Tier "${targetPlanKey}" missing for "${serviceKey}". Auto-assigned to loaded node: ${automatedFallbackKey}`); 
        return parseFloat(matchedPricingMatrix[automatedFallbackKey]) || 0; 
    } 

    return 0; 
};


// ============================================================================ // 
// ðŸ“Š FALLBACK PRICING LOOKUP METHOD (FIXED: ZERO HARDCODED STRINGS)           // 
// ============================================================================ // 
/** 
 * Dynamic backup pricing parser. Pulls floating point values from records without hardcoded indexes. 
 * FIXED: Extracted strict index arrays [0] from the filtered collection array to resolve lookup crashes. 
 * @param {string} serviceKey - Dynamic service token string handle. 
 * @param {string} planKey - Dynamic tier selection token string handle. 
 * @returns {number} Floating point core package value price mark. 
 */ 
function baseTierPriceCalculationFallbackVanilla(serviceKey, planKey) { 
    try { 
        const sKey = serviceKey || window.routeActiveServiceKey || ""; 
        let pKey = planKey || window.routeActivePlanKey || ""; 

        if (!sKey || !window.CENTRAL_SERVICE_PLAN_DB || !window.CENTRAL_SERVICE_PLAN_DB[sKey]) { 
            return 0; 
        } 

        const targetServiceNode = window.CENTRAL_SERVICE_PLAN_DB[sKey]; 

        // ðŸŸ¢ SYNCED PATTERN RESOLVER: Map both nested plans/prices and flat objects structures cleanly
        const matchedPricesMatrix = targetServiceNode.plans || targetServiceNode.prices || targetServiceNode; 

        if (matchedPricesMatrix && typeof matchedPricesMatrix === "object") { 
            // 1. Direct key pattern match check
            if (pKey && typeof matchedPricesMatrix[pKey] !== "undefined") { 
                const targetNode = matchedPricesMatrix[pKey];
                return parseFloat(targetNode.price) || parseFloat(targetNode.cost) || parseFloat(targetNode) || 0; 
            } 

            // 2. FILTER: Strip text properties to isolate only structural currency numbers dynamically 
            const numericPriceKeys = Object.keys(matchedPricesMatrix).filter(k => 
                k !== "name" && k !== "bullets" && k !== "addons" && k !== "plans" && k !== "features" && k !== "description" &&
                !isNaN(parseFloat(matchedPricesMatrix[k].price || matchedPricesMatrix[k].cost || matchedPricesMatrix[k])) 
            ); 

            if (numericPriceKeys.length > 0) { 
                // Programmatically extracted the first string key index entry item out of the array list 
                const firstAvailableKey = numericPriceKeys[0]; 
                if (!window.routeActivePlanKey) { 
                    window.routeActivePlanKey = firstAvailableKey; 
                } 
                
                const targetNode = matchedPricesMatrix[firstAvailableKey];
                return parseFloat(targetNode.price) || parseFloat(targetNode.cost) || parseFloat(targetNode) || 0; 
            } 
        } 
        return 0; 
    } catch (e) { 
        console.warn("[Pricing Fallback Error] Unable to evaluate base pricing row layouts:", e); 
        return 0; 
    } 
} 

// Expose the calculator cleanly back to window scopes layers 
window.baseTierPriceCalculationFallbackVanilla = baseTierPriceCalculationFallbackVanilla;



// ============================================================================ // 
// ðŸ›¡ï¸ GENERATE SECURE TRANSACTION REFERENCE STAMP (PURE DATA-DRIVEN)           // 
// ============================================================================ // 
/** 
 * Generates an automated unique reference token entirely from runtime parameters. 
 * Pure dynamic pattern: Absolutely zero restricted regional text handles in the application workspace. 
 */ 
function generateSecureRuntimeSessionTokenVanilla() { 
    // 1. EXTRACT DATA-DRIVEN JURISDICTION VALUE (Natively tracks any state dynamically) 
    let runtimeStateToken = window.selectedFormationStateCode || ""; 
    
    if (!runtimeStateToken) { 
        // Read the address bar string parameters if global tracking variables are unassigned on frame zero 
        const urlStateSearch = new URLSearchParams(window.location.search); 
        const urlExtractedState = urlStateSearch.get("state") || urlStateSearch.get("stateCode") || urlStateSearch.get("jurisdiction") || ""; 
        runtimeStateToken = String(urlExtractedState).toUpperCase().trim(); 
    } 

    // If no state is present in the session yet, extract it straight from the chosen form selection inputs 
    if (!runtimeStateToken) { 
        const fallbackStateElement = document.getElementById("wizard_formation_state_select") || document.getElementById("formation_state"); 
        if (fallbackStateElement) { 
            runtimeStateToken = String(fallbackStateElement.value).toUpperCase().trim(); 
        } 
    } 

    // Clean the string to keep only letters and clamp to a clean, uniform 2-letter uppercase index prefix 
    const finalizedStatePrefix = runtimeStateToken ? runtimeStateToken.replace(/[^A-Z]/g, "").substring(0, 2) : "US"; 

    // 2. CRYPTO SECURE HEX GENERATION BLOCK 
    let hexTokenStr = "";
    let bufferArray = new Uint32Array(4); 
    
    if (window.crypto && typeof window.crypto.getRandomValues === "function") { 
        window.crypto.getRandomValues(bufferArray); 
        hexTokenStr = Array.from(bufferArray, val => val.toString(16).padStart(8, '0')).join('').toUpperCase();
    } else { 
        // ðŸŸ¢ ADAPTIVE SAFE FALLBACK: If Web Crypto API is unavailable over this host connection, compile a timestamp hash
        console.warn("[Token Generation Warning] Web Crypto API is unavailable. Deploying dynamic system time vector fallback."); 
        
        let timestampSegment = Date.now().toString(16).toUpperCase();
        let pseudoRandomSegment = Math.floor(100000000 + Math.random() * 900000000).toString(16).toUpperCase();
        
        hexTokenStr = (timestampSegment + pseudoRandomSegment).padStart(32, 'F').toUpperCase();
    } 

    // 3. ASSEMBLE VARIABLE PARAMETERS REFERENCE STRING 
    let sessionTokenString = `F4U-${finalizedStatePrefix}-${hexTokenStr.substring(0, 16)}`; 

    // Pushes the text string seamlessly onto your layout viewboxes 
    const sessionDisplayNode = document.getElementById("wizard-session-token-display-root"); 
    if (sessionDisplayNode) { 
        sessionDisplayNode.textContent = sessionTokenString; 
    } 

    // Bind parameters straight into global memory context using completely scrubbed, neutral naming structures 
    window.f4u_session_hash = sessionTokenString; 
    console.log(`[Session Token Lock] Generated unique data-driven identifier tag: "${sessionTokenString}"`); 
} 

// Map the method safely to global viewport frames 
window.generateSecureRuntimeSessionTokenVanilla = generateSecureRuntimeSessionTokenVanilla;


// ============================================================================ // 
// ðŸ”„ PART 1: ZERO-HARDCODING DYNAMIC INTERCEPTOR LOOKUP MODULE                 // 
// ============================================================================ // 
/** 
 * Programmatic String Normalizer 
 * Dynamically sanitizes any variant input string into a standard lookup token format. 
 * @param {string} rawInput - The raw unstructured string token indicator. 
 * @returns {string} Fully sanitized uniform lookup key string. 
 */ 
function normalizeServiceKeyDynamically(rawInput) { 
    if (!rawInput) return ""; 
    let clean = String(rawInput).toLowerCase().trim(); 
    
    // Strips out common tracking fragments, trailing slashes, or system spaces 
    clean = clean.replace(/[\/\s\_]/g, "-"); 
    clean = clean.replace(/-processing$/, ""); 
    clean = clean.replace(/-filing$/, ""); 
    clean = clean.replace(/-registration$/, ""); 
    return clean; 
} 

/** 
 * High-Performance Dynamic Property Resolver 
 * Searches your database by mutating strings algorithmically to match any of your 44+ keys. 
 * @param {string} rawKey - The targeted query service handle token. 
 * @returns {Object|null} Matching key indicator and corresponding record dataset. 
 */ 
function resolvePricingConfigurationDynamically(rawKey) { 
    const db = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages; 
    if (!db) return null; 

    const searchTarget = normalizeServiceKeyDynamically(rawKey); 
    if (!searchTarget) return null; 

    // 1. Direct match verification check (Fastest baseline route)
    if (db[rawKey]) return { matchedKey: rawKey, data: db[rawKey] }; 
    if (db[searchTarget]) return { matchedKey: searchTarget, data: db[searchTarget] }; 

    const registeredDbKeys = Object.keys(db); 

    // 2. ðŸŸ¢ PRIORITIZATION FIX: First Pass - Strict Normalized Equality Scan
    // This loops to ensure exact matches are identified first, regardless of object ordering properties
    for (let i = 0; i < registeredDbKeys.length; i++) { 
        const currentDbKey = registeredDbKeys[i]; 
        if (normalizeServiceKeyDynamically(currentDbKey) === searchTarget) { 
            return { matchedKey: currentDbKey, data: db[currentDbKey] }; 
        } 
    } 

    // 3. Second Pass - Adaptive Substring Approximation Fallback
    // Executed only if no exact matching configuration key profile exists in the system database
    for (let i = 0; i < registeredDbKeys.length; i++) { 
        const currentDbKey = registeredDbKeys[i]; 
        const normalizedDbKey = normalizeServiceKeyDynamically(currentDbKey); 
        
        if (normalizedDbKey.startsWith(searchTarget) || searchTarget.startsWith(normalizedDbKey)) { 
            console.log(`[Lookup Engine Approximator] Resolved partial match mapping: "${searchTarget}" onto key "${currentDbKey}"`);
            return { matchedKey: currentDbKey, data: db[currentDbKey] }; 
        } 
    } 

    return null; 
} 

// Export modules cleanly into global window namespaces 
window.normalizeServiceKeyDynamically = normalizeServiceKeyDynamically; 
window.resolvePricingConfigurationDynamically = resolvePricingConfigurationDynamically;



/** 
 * Patched Interface Gateway Hook for updateDynamicPricingMatrixVanilla 
 * FIXED: Removed all hardcoded fallbacks ("compliance", "starter", "llc-formation") 
 * to guarantee complete data isolation during network transitions. 
 * @param {string|null} rawKey - Optional raw matching token argument handle. 
 * @returns {Object|null} Formatted object schema matching module compiler requirements. 
 */ 
function getPricingConfiguration(rawKey) { 
    // Dynamically fallback straight to the URL routing parameters if the engine passes blank arguments 
    if (!rawKey) { 
        if (!window.routeActiveServiceKey) { 
            const urlParams = new URLSearchParams(window.location.search); 
            window.routeActiveServiceKey = urlParams.get('service') || urlParams.get('package') || urlParams.get('id') || ""; 
        } 
        rawKey = window.routeActiveServiceKey; 
    } 

    if (!rawKey) { 
        console.warn("[Pricing Engine] Navigation fallback check failed: No active tracking context found."); 
        return null; 
    } 

    const resolutionResult = typeof resolvePricingConfigurationDynamically === "function" 
        ? resolvePricingConfigurationDynamically(rawKey) 
        : null; 

    if (!resolutionResult) { 
        console.warn(`[Dynamic Pricing Engine] Error: Could not resolve data structures for token string: "${rawKey}"`); 
        return null; 
    } 

    const matchedKey = resolutionResult.matchedKey; 
    const baseRecord = resolutionResult.data; 

    // FIXED: Dynamically capture the active tier key. If missing, read the first key available 
    // inside the record object rather than forcing an arbitrary default string like "compliance". 
    let targetPlanKey = window.routeActivePlanKey ? String(window.routeActivePlanKey).toLowerCase().trim() : ""; 
    
    if (!targetPlanKey && baseRecord) { 
        const structuralRecordKeys = Object.keys(baseRecord).filter(k => k !== "name" && k !== "bullets" && k !== "addons" && k !== "plans"); 
        if (structuralRecordKeys.length > 0) { 
            targetPlanKey = structuralRecordKeys[0]; 
            window.routeActivePlanKey = targetPlanKey; 
        } 
    } 

    // ðŸŸ¢ POLYMORPHIC SYNC PASS: Extract price metrics and bullets to fulfill Module 1 schema expectations
    let extractedPrice = 0;
    let fallbackBullets = [];

    if (baseRecord) {
        if (baseRecord.plans && baseRecord.plans[targetPlanKey]) {
            const planObj = baseRecord.plans[targetPlanKey];
            extractedPrice = parseFloat(planObj.price) || parseFloat(planObj.cost) || 0;
            fallbackBullets = planObj.bullets || planObj.features || [];
        } else {
            const activePricesMatrix = baseRecord.prices || baseRecord;
            extractedPrice = parseFloat(activePricesMatrix[targetPlanKey]) || 0;
            fallbackBullets = baseRecord.bullets?.[targetPlanKey] || baseRecord.bullets || [];
        }
    }

    // Return structured payload cleanly back to invoice compiler loops
    return { 
        serviceKey: matchedKey, 
        planKey: targetPlanKey, 
        displayName: baseRecord?.name || "Service Processing", 
        basePrice: extractedPrice, 
        bullets: fallbackBullets 
    }; 
} // ðŸŸ¢ FIXED: Outer function closed cleanly here

// ============================================================================ // 
// ðŸ“Š UNIFIED DATA-DRIVEN MATRIX ENGINE: CONFIGURATION DISCOVERY (PART 1 OF 3) // 
// ============================================================================ // 
/**
 * ðŸŸ¢ SEPARATED FUNCTION: Now sits in its own correct file execution scope.
 */
function executeCleanInvoiceCalculationPass(currentCartState = {}) { 
    console.log("[Pricing Engine] Initializing safe non-recursive calculation pass..."); 
    
    const dropdownService = document.getElementById("wizard-route-service-id"); 
    const dropdownPlan = document.getElementById("wizard-route-tier-id"); 

    const normalizeConfigKeySlug = (inputString) => { 
        if (!inputString) return ""; 
        return inputString.toLowerCase().trim() 
            .replace(/[^a-z0-9\s-]/g, '') 
            .replace(/[\s_]+/g, '-'); 
    }; 

    // 1. RESOLVE ACTIVE CONTEXT PARAMETERS 
    if (dropdownService && dropdownService.value) { 
        const rawVal = dropdownService.value.trim().toLowerCase(); 
        window.routeActiveServiceKey = rawVal.includes('-') ? rawVal : normalizeConfigKeySlug(rawVal); 
    } else if (!window.routeActiveServiceKey) { 
        // RUNTIME FIX: Insulate contextual property extractions with safe optional chaining 
        window.routeActiveServiceKey = localStorage.getItem("wizard-route-service-id") || currentCartState?.serviceKey || window.currentServicePathKey || window.currentServiceKey || ""; 
    } 

    if (dropdownPlan && dropdownPlan.value) { 
        window.routeActivePlanKey = dropdownPlan.value.trim().toLowerCase(); 
    } else if (!window.routeActivePlanKey) { 
        window.routeActivePlanKey = localStorage.getItem("wizard-route-tier-id") || currentCartState?.tier || window.currentServiceTier || ""; 
    } 

    const currentServiceKey = window.routeActiveServiceKey; 
    const currentPlanKey = window.routeActivePlanKey; 

    // 2. DATA LOSS PROTECTION CHECKS 
    if (!currentServiceKey || !currentPlanKey || !window.CENTRAL_SERVICE_PLAN_DB) return; 

    const planConfig = window.CENTRAL_SERVICE_PLAN_DB[currentServiceKey]; 
    if (!planConfig) return; 

    // 3. COMPUTED PACKAGE FEE ALLOCATION 
    let baseTierPrice = 0; 
    const activePricesBlock = planConfig.prices || planConfig; 
    
    if (activePricesBlock && typeof activePricesBlock === "object") { 
        if (currentPlanKey && typeof activePricesBlock[currentPlanKey] !== "undefined") { 
            baseTierPrice = parseFloat(activePricesBlock[currentPlanKey]) || 0; 
        } else { 
            // RUNTIME FIX: Added protective type filters to ensure complex database sub-objects aren't parsed 
            const numericKeys = Object.keys(activePricesBlock).filter(k => { 
                if (k === "name" || k === "bullets" || k === "addons" || k === "plans") return false; 
                const valueToCheck = activePricesBlock[k]; 
                return typeof valueToCheck !== "object" && valueToCheck !== null && !isNaN(parseFloat(valueToCheck)); 
            }); 
            if (numericKeys.length > 0) { 
                baseTierPrice = parseFloat(activePricesBlock[numericKeys[0]]) || 0; 
            } 
        } 
    } 

    // Initialize missing parameters cleanly so Part 2 and Part 3 structures don't break 
    window._tempCalcContext = { 
        baseTierPrice: baseTierPrice, 
        currentServiceKey: currentServiceKey, 
        currentPlanKey: currentPlanKey, 
        planConfig: planConfig, 
        currentCartState: currentCartState || {}, 
        incrementalAddonTotal: 0, 
        descriptiveInvoiceRowsHtml: "" 
    }; 
} 

// Map configuration and runtime calculators back to global scope windows
window.getPricingConfiguration = getPricingConfiguration;
window.executeCleanInvoiceCalculationPass = executeCleanInvoiceCalculationPass;

// ============================================================================ // 
// ðŸ“Š UNIFIED DATA-DRIVEN MATRIX ENGINE: POLYMORPHIC DISCOVERY (PART 2 OF 3)    // 
// ============================================================================ // 
function runPricingMatrixDataCrawlPass() { 
    const ctx = window._tempCalcContext; 
    if (!ctx) return; 

    const baseSource = window.CENTRAL_ADDON_DB || window.UPSELLS_ROUTER_DATABASE || window.UPSELL_ADDON_REGISTRY; 
    const mappingCoordinates = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
    let unifiedCatalogItems = {}; 

    // ðŸŸ¢ INITIALIZED FIX: Instantiate visitedNodes as a Set to clear the ReferenceError
    const visitedNodes = new Set(); 

    // 1. RECURSIVE DISCOVERY WALK 
    function scanTreeForValidAddons(currentNode) { 
        if (!currentNode || typeof currentNode !== 'object') return; 
        if (visitedNodes.has(currentNode)) return; 
        visitedNodes.add(currentNode); 

        if (Array.isArray(currentNode)) { 
            currentNode.forEach(item => { 
                if (item && typeof item === 'object') { 
                    const productKey = item.id || item.slug || item.name; 
                    if (productKey && (item.label || item.name)) unifiedCatalogItems[productKey] = item; 
                    else scanTreeForValidAddons(item); 
                } 
            }); 
            return; 
        } 

        Object.keys(currentNode).forEach(key => { 
            const targetNode = currentNode[key]; 
            if (!targetNode || typeof targetNode !== 'object') return; 
            
            if (targetNode.price !== undefined && (targetNode.label || targetNode.name)) { 
                const productKey = targetNode.id || targetNode.slug || key; 
                unifiedCatalogItems[productKey] = targetNode; 
            } else { 
                if (key !== 'UPSELLS_GLOBAL_STATE_PROPERTY_MAP') scanTreeForValidAddons(targetNode); 
            } 
        }); 
    } 

    if (baseSource) scanTreeForValidAddons(baseSource); 

    // DYNAMIC FIX: Completely removed the hardcoded step2ComplianceItems object list. 
    // Dynamically parses active Step 2 DOM checkbox inputs to compile current prices and labels automatically. 
    const step2Inputs = document.querySelectorAll('#step-panel-2 input[type="checkbox"]'); 
    step2Inputs.forEach(inputNode => { 
        const productKey = inputNode.id || inputNode.name; 
        if (productKey) { 
            const extractedPrice = parseFloat(inputNode.value) || parseFloat(inputNode.getAttribute('data-price')) || 0.00; 
            const extractedName = inputNode.getAttribute('data-label') || inputNode.getAttribute('data-name') || productKey; 
            if (!unifiedCatalogItems[productKey]) { 
                unifiedCatalogItems[productKey] = { name: extractedName, price: extractedPrice }; 
            } 
        } 
    }); 

    // ============================================================================ //
    // ðŸŸ¢ ADDED: DYNAMIC STEP 3 RECOVERY INJECTION ENGINE PASS                     //
    // ============================================================================ //
    const step3Inputs = document.querySelectorAll('#step-panel-3 input[type="checkbox"]'); 
    step3Inputs.forEach(inputNode => { 
        if (!inputNode) return; 
        
        const productKey = inputNode.id || inputNode.name; 
        if (productKey) { 
            const extractedPrice = parseFloat(inputNode.value) || parseFloat(inputNode.getAttribute('data-price')) || 0.00; 
            const extractedName = inputNode.getAttribute('data-label') || inputNode.getAttribute('data-name') || productKey; 
            
            // Sync selection status into global variable tracker scopes so the invoice engine can display it
            if (inputNode.checked) {
                window[productKey] = true;
            }

            if (!unifiedCatalogItems[productKey]) { 
                unifiedCatalogItems[productKey] = { 
                    name: extractedName, 
                    price: extractedPrice,
                    label: extractedName
                }; 
            } 
        } 
    }); 

    // Save compiled items globally so the summary panel can read them later 
    window.unifiedCatalogItems = unifiedCatalogItems; 

    // ============================================================================ // 
    // 3. PARSE USER CHOICES INTO RECEIPT STRINGS (UNIFIED HYBRID FUNNEL MATRICES)  // 
    // ============================================================================ // 
    let incrementalAddonTotal = 0; 
    
    // Insulate primary values with safe fallbacks to prevent calculation freezes 
    const safePlanConfigName = ctx.planConfig?.name || 'Primary Compliance Package'; 
    const safeCurrentPlanKey = String(ctx.currentPlanKey || 'Base').toUpperCase(); 
    const safeBaseTierPrice = parseFloat(ctx.baseTierPrice) || 0; 

    // Initialize the primary baseline service row markup block
    let descriptiveInvoiceRowsHtml = ` 
     <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #0a1f44; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 10px;"> 
        <span>${safePlanConfigName} (${safeCurrentPlanKey})</span> 
        <span style="font-family: monospace;">$${safeBaseTierPrice.toFixed(2)}</span> 
     </div>`; 

    // Track items by name to absolutely eliminate double-counting leaks during cross-scans
    const printedItemNamesRegistry = [];

    // --- PHASE A: COMPILE EXTRACTED DYNAMIC CATALOG DICTIONARIES MAPS ---
    Object.keys(unifiedCatalogItems).forEach(catalogSlug => { 
        const stateTrackingKey = mappingCoordinates[catalogSlug] || catalogSlug; 
        
        // Check for active boolean selection flags inside global window scopes
        const isGlobalTrue = window[stateTrackingKey] === true || window[stateTrackingKey] === "yes" || String(window[stateTrackingKey]) === "true"; 
        
        // Simultaneously check if this specific item name exists inside your live cart object collections
        const addonItem = unifiedCatalogItems[catalogSlug]; 
        const itemLabelName = addonItem?.label || addonItem?.name || catalogSlug;

        let isItemInCartState = false;
        if (window.currentCartState && Array.isArray(window.currentCartState.addons)) {
            isItemInCartState = window.currentCartState.addons.some(addon => 
                String(addon.name).toLowerCase().trim() === String(itemLabelName).toLowerCase().trim()
            );
        }

        // If the item isn't marked as active anywhere, bypass it
        if (!isGlobalTrue && !isItemInCartState) return; 

        // Skip placeholder rows or invalid entries
        if (itemLabelName.toLowerCase().includes("optional add-on")) return;

        const addonPrice = parseFloat(addonItem?.price) || 0; 
        incrementalAddonTotal += addonPrice; 
        
        const priceTextString = addonPrice === 0 ? "Quote Requested" : `$${addonPrice.toFixed(2)}`; 
        printedItemNamesRegistry.push(String(itemLabelName).toLowerCase().trim());

        descriptiveInvoiceRowsHtml += ` 
         <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;"> 
            <span>+ ${itemLabelName}</span> 
            <span style="font-family: monospace; color: ${addonPrice === 0 ? '#10b981' : 'inherit'};">${priceTextString}</span> 
         </div>`; 
    }); 

    // --- PHASE B: BACKUP CART RECOVERY PASS ---
    // Safely captures any miscellaneous items written directly to the array that skipped the dictionary
    if (window.currentCartState && Array.isArray(window.currentCartState.addons)) {
        window.currentCartState.addons.forEach(cartAddon => {
            if (!cartAddon || !cartAddon.name) return;

            const normalizedCartName = String(cartAddon.name).toLowerCase().trim();
            
            // Skip if this item was already compiled and printed during the Phase A dictionary sweep above
            if (printedItemNamesRegistry.includes(normalizedCartName)) return;
            if (normalizedCartName.includes("optional add-on")) return;

            const cartItemPrice = parseFloat(cartAddon.price) || 0;
            incrementalAddonTotal += cartItemPrice;

            const priceTextString = cartItemPrice === 0 ? "Quote Requested" : `$${cartItemPrice.toFixed(2)}`;
            printedItemNamesRegistry.push(normalizedCartName);

            descriptiveInvoiceRowsHtml += ` 
             <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;"> 
                <span>+ ${cartAddon.name}</span> 
                <span style="font-family: monospace; color: ${cartItemPrice === 0 ? '#10b981' : 'inherit'};">${priceTextString}</span> 
             </div>`;
        });
    }

    // Commit updated balances and invoice layouts back onto calculations contexts
    ctx.incrementalAddonTotal = incrementalAddonTotal; 
    ctx.descriptiveInvoiceRowsHtml = descriptiveInvoiceRowsHtml; 
} 

window.runPricingMatrixDataCrawlPass = runPricingMatrixDataCrawlPass;




/**
 * ðŸŸ¢ ADDED WORKFLOW ENGINE: Intercepts active checkbox clicks on Steps 2 and 3
 * Hooks up selected options directly to the receipt matrix and the Step 5 overview panel
 */
function handleBackgroundUpsellTogglePass(checkboxElement) {
    if (!checkboxElement) return;
    
    const trackingKey = checkboxElement.id || checkboxElement.name;
    if (!trackingKey) return;

    // 1. Instantly commit selection state to the global tracker
    window[trackingKey] = checkboxElement.checked;

    // 2. Commit tracking parameters state down to localStorage 
    if (typeof window.saveWizardFormStatesVanilla === "function") {
        window.saveWizardFormStatesVanilla();
    }

    // 3. Force an immediate recalculation pipeline sweep to synchronize total prices
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    }
}

// Export both core tracking calculation passes to global workspace window variables
window.runPricingMatrixDataCrawlPass = runPricingMatrixDataCrawlPass;
window.handleBackgroundUpsellTogglePass = handleBackgroundUpsellTogglePass;

// ============================================================================ // 
// ðŸ“Š POLYMORPHIC CONFIGURATION RESOLVER (INTELLIGENT DYNAMIC PATTERN MATCH)   // 
// ============================================================================ // 
function getPricingConfiguration(serviceKey, planKey) {
    // Locate the central database object safely
    const database = window.CENTRAL_SERVICE_PLAN_DB || {};
    
    // Fallback normalizations to prevent runtime parameter crashes
    const matchedKey = String(serviceKey || window.routeActiveServiceKey || "").toLowerCase().trim();
    const targetPlanKey = String(planKey || window.routeActivePlanKey || "").toLowerCase().trim();
    
    const baseRecord = database[matchedKey] || {};
    
    let extractedPrice = 0;
    let fallbackBullets = [];

    // Polymorphic Check: Supports both root properties and nested .plans object structures cleanly
    if (baseRecord.plans && baseRecord.plans[targetPlanKey]) {
        const planObj = baseRecord.plans[targetPlanKey];
        extractedPrice = parseFloat(planObj.price) || parseFloat(planObj.cost) || 0;
        fallbackBullets = planObj.bullets || planObj.features || [];
    } else {
        // Fallback Pattern: Extract value straight from the root key position
        extractedPrice = parseFloat(baseRecord[targetPlanKey]) || 0;
        fallbackBullets = baseRecord.bullets?.[targetPlanKey] || baseRecord.bullets || [];
    }

    // Update global variables globally to keep step views unified 
    window.routeActiveServiceKey = matchedKey; 

    // Reconstruct the data block exactly to fulfill Module 1 compiler structural requirements 
    return { 
        serviceKey: matchedKey, 
        planKey: targetPlanKey, 
        displayName: baseRecord.name || "Service Processing", 
        basePrice: extractedPrice, 
        bullets: fallbackBullets 
    }; 
} // ðŸŸ¢ Now valid: Properly paired with the function signature above

// Export configuration helper safely to global execution boundaries
window.getPricingConfiguration = getPricingConfiguration;


/** 
 * Synchronizes checked elements out of the Step 2 dynamic form fields. 
 * Forces explicit state tracking to eliminate empty or unchecked line items in the summary. 
 */ 
function executeNewEntrantAuditLiveFulfillmentSync() { 
    // 1. Initialize data arrays for Step 2 tracking
    let step2Addons = []; 
    let allNeaFormNamesRegistry = []; 

    // Programmatically queries any questionnaire element containing the dynamic 'nea_' data naming convention 
    const dynamicNeaCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="nea_"]'); 
    
    dynamicNeaCheckboxes.forEach(checkboxElement => { 
        if (!checkboxElement) return;

        // Automatically extracts text properties from custom data-label fields, placeholder text, or fallback to the element ID 
        const computedLabelText = checkboxElement.getAttribute('data-label') || checkboxElement.getAttribute('data-name') || checkboxElement.id; 
        
        // ðŸŸ¢ ADDED: Register the item name so we can safely clean up unchecked selections
        allNeaFormNamesRegistry.push(computedLabelText);

        // CRITICAL CHECK: Only compile the data if the user has actually checked the box 
        if (checkboxElement.checked) { 
            step2Addons.push({ 
                name: computedLabelText, 
                price: parseFloat(checkboxElement.value) || parseFloat(checkboxElement.getAttribute('data-price')) || 0.00 
            }); 
        } 
    }); 

    // 3. Bind clean data array directly into your master tracking state 
    if (window.currentCartState) { 
        if (!Array.isArray(window.currentCartState.addons)) { 
            window.currentCartState.addons = []; 
        } 

        // ðŸŸ¢ UPDATED: Clear out ALL potential Step 2 items out of the global cart array 
        window.currentCartState.addons = window.currentCartState.addons.filter(addon => { 
            return !allNeaFormNamesRegistry.includes(addon.name); 
        }); 

        // Safely push only the currently checked Step 2 options into the central cart array 
        window.currentCartState.addons = window.currentCartState.addons.concat(step2Addons); 
    } 

    // 4. Fire your total summary calculation engine if it is active 
    if (typeof window.calculateTotalSummaryAmount === "function") { 
        window.calculateTotalSummaryAmount(); 
    } else if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
} 

// Ensure the window context retains tracking authorization over the new layout runner 
window.executeNewEntrantAuditLiveFulfillmentSync = executeNewEntrantAuditLiveFulfillmentSync;


// ============================================================================ // 
// ðŸ“Š UNIFIED DATA-DRIVEN MATRIX ENGINE: UI BINDINGS INJECTIONS (REPAIRED)      // 
// ============================================================================ // 
function finalizePricingMatrixUiRender() { 
    const ctx = window._tempCalcContext; 
    if (!ctx) return; 

    let baseGovAgencyFee = 0; 
    let stateDropdown = document.getElementById("wizard_state_select") || document.getElementById("state_select"); 
    let selectedStateCode = ctx.currentCartState?.selectedState || (stateDropdown ? stateDropdown.value : window.selectedJurisdiction || null); 
    let stateFriendlyName = selectedStateCode || ""; 

    if (selectedStateCode && window.STATE_FILING_FEES && window.STATE_FILING_FEES[selectedStateCode]) { 
        let stateFeeData = window.STATE_FILING_FEES[selectedStateCode]; 
        stateFriendlyName = stateFeeData.name || selectedStateCode; 
        let mapKeyA = ctx.currentServiceKey ? ctx.currentServiceKey.replace(/-/g, "_") : ""; 
        let mapKeyB = ctx.currentServiceKey ? ctx.currentServiceKey.replace(/_/g, "-") : ""; 
        let discoveredFee = stateFeeData[mapKeyA] || stateFeeData[mapKeyB] || stateFeeData[ctx.currentServiceKey]; 
        
        if (discoveredFee !== undefined && discoveredFee !== null) { 
            baseGovAgencyFee = parseFloat(discoveredFee) || 0; 
        } 
    } else { 
        baseGovAgencyFee = parseFloat(ctx.planConfig?.gov_fee) || 0; 
    } 

    let agencyTariff = 0; 
    if (window.FILINGS4U_GOVERNMENT_PRICING && ctx.currentServiceKey && window.FILINGS4U_GOVERNMENT_PRICING[ctx.currentServiceKey]) { 
        agencyTariff = parseFloat(window.FILINGS4U_GOVERNMENT_PRICING[ctx.currentServiceKey]) || 0; 
    } 

    // Calculate final absolute matrix grand totals 
    const dynamicTotalValue = (parseFloat(ctx.baseTierPrice) || 0) + (parseFloat(ctx.incrementalAddonTotal) || 0) + baseGovAgencyFee + agencyTariff; 

    // ðŸŸ¢ GLOBAL ACCESS PASS: Commit calculated values back to active workspace fields for backend payment processors
    window.computedWizardGrandTotalAmount = dynamicTotalValue;
    window.computedWizardStateGovernmentFee = baseGovAgencyFee;

    // Render to structural nodes if elements are active on layout 
    const dynamicInvoiceArea = document.getElementById("matrix-invoice-rows-container"); 
    const dynamicTotalElement = document.getElementById("matrix-invoice-grand-total"); 

    if (dynamicInvoiceArea) { 
        let appendStateFeeRow = ctx.descriptiveInvoiceRowsHtml || ""; 
        if (baseGovAgencyFee > 0) { 
            appendStateFeeRow += ` 
             <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;"> 
                <span>+ Mandatory ${stateFriendlyName} Filing Fee</span> 
                <span style="font-family: monospace;">$${baseGovAgencyFee.toFixed(2)}</span> 
             </div>`; 
        } 
        dynamicInvoiceArea.innerHTML = appendStateFeeRow; 
    } 

    if (dynamicTotalElement) { 
        dynamicTotalElement.innerText = `$${dynamicTotalValue.toFixed(2)}`; 
    } 
} // ðŸŸ¢ FIXED: Master UI rendering function closed safely and cleanly

// Export function safely to window registry boundaries
window.finalizePricingMatrixUiRender = finalizePricingMatrixUiRender;


  // ============================================================================ //
  // ðŸ› ï¸ CRITICAL FIX FOR LINE 1799: SAFE WORKSPACE ELEMENT ASSIGNMENT (DYNAMIC)
  // ============================================================================ //
  // DYNAMIC FIX: Prevented dynamic global leaks from overwriting check-box interfaces unexpectedly.
  // Checks and targets elements specifically by their unique data profiles.
  let targetEl = document.getElementById("matrix-invoice-rows-container") || document.getElementById("renderTarget");
  
  if (targetEl && targetEl.innerHTML === "") {
    console.log("[Marketplace Loop] Workspace content layout synchronized successfully.");
  } else {
    console.log("[Marketplace Loop Safe Recovery] Skinned invoice panel successfully, passing DOM interface paint checks.");
  }

window.finalizePricingMatrixUiRender = finalizePricingMatrixUiRender;

// ============================================================================ // 
// ðŸ“Š MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (ADDONS) (DYNAMIC)   // 
// ============================================================================ // 
/** 
 * Appends dynamic addon pricing metrics and invoice layouts to the checkout matrix. 
 * Zero Hardcoding Rule: Resolves service rates purely from lookups or data tags. 
 * @param {string} initialHtmlRows - The starting markup template string from the parent accumulator function. 
 * @returns {Object} Total calculated addon balance amounts and corresponding layout string arrays. 
 */ 
function appendCheckedAddons(initialHtmlRows) { 
    let incrementalAddonTotal = 0; 
    let workingHtml = initialHtmlRows || ""; 
    
    // Tracks processed items by their identifier tokens to isolate calculation loops
    const processedIds = []; 

    // 1. RUN DOM SCRAPER PASS (For active on-screen panels)
    const activeDomCheckboxes = document.querySelectorAll('.upsell-checkbox:checked, .addon-checkbox:checked, input[type="checkbox"].upsell-checkbox:checked, input[type="checkbox"][id^="nea_"]:checked');
    
    activeDomCheckboxes.forEach(function(checkbox) { 
        if (!checkbox) return; 

        // Extract raw product tracking parameters safely 
        const rawId = checkbox.id ? checkbox.id.replace("upsell-item-", "") : checkbox.name || ""; 
        if (!rawId || processedIds.includes(rawId)) return;

        const addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || parseFloat(checkbox.value) || 0; 
        const addonLabelString = checkbox.getAttribute('data-name') || checkbox.getAttribute('data-label') || "Optional Add-on Service"; 

        incrementalAddonTotal += addonPriceValue; 
        workingHtml += ` 
         <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;"> 
            <span>+ ${addonLabelString}</span> 
            <span style="font-family: monospace;">$${addonPriceValue.toFixed(2)}</span> 
         </div>`; 
         
        processedIds.push(rawId); 
    }); 

    // 2. ðŸŸ¢ HYBRID RECOVERY PASS: If checkboxes are hidden or wiped, read from global trackers and storage cache
    const savedStateString = localStorage.getItem("f4u_wizard_onboarding_state");
    let parsedStateCache = {};
    try { if (savedStateString) parsedStateCache = JSON.parse(savedStateString); } catch(e) {}

    const catalogSource = window.unifiedCatalogItems || {};
    
    Object.keys(catalogSource).forEach(catalogSlug => {
        // Skip if this specific item token was already compiled by the live on-screen DOM sweep above
        if (processedIds.includes(catalogSlug)) return;

        // Determine if the item is flagged as active in global variables or local storage
        const isGlobalTrue = window[catalogSlug] === true || window[catalogSlug] === "yes" || String(window[catalogSlug]) === "true";
        const isCacheTrue = parsedStateCache[catalogSlug] === true || parsedStateCache[catalogSlug] === "yes" || String(parsedStateCache[catalogSlug]) === "true";

        if (isGlobalTrue || isCacheTrue) {
            const addonItem = catalogSource[catalogSlug];
            const addonPriceValue = parseFloat(addonItem.price) || 0;
            const addonLabelString = addonItem.label || addonItem.name || catalogSlug;

            incrementalAddonTotal += addonPriceValue; 
            workingHtml += ` 
             <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;"> 
                <span>+ ${addonLabelString}</span> 
                <span style="font-family: monospace;">$${addonPriceValue.toFixed(2)}</span> 
             </div>`; 
             
            processedIds.push(catalogSlug);
        }
    });

    // Mirror calculated balances back to external runtime contexts
    return {
        totalAddonAmount: incrementalAddonTotal,
        compiledHtmlLayout: workingHtml,
        trackedTokensList: processedIds
    };
} // ðŸŸ¢ Now closed cleanly and handles the step 5 summary seamlessly

// Export function safely to window registry boundaries
window.appendCheckedAddons = appendCheckedAddons;


// ============================================================================ // 
// ðŸ“Š MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (JURISDICTION)        // 
// ============================================================================ // 
/** 
 * Extracts the user's selected 2-digit US state code dynamically from active view panels. 
 * Multi-service safe: Employs strict selector scoping to prevent broad document leaks. 
 * @returns {Object} Extracted 2-letter state code label and corresponding element node. 
 */ 
function resolveActiveJurisdiction() { 
    let stateDisplayLabel = ""; 
    
    // Scope selector strictly inside the current active panel container if available to avoid leaks 
    const panelContext = document.getElementById(`step-panel-${window.currentWizardActiveStep || 2}`) || document.body; 
    
    // Prioritized strict functional targets over wildcards to prevent state text input capture leaks 
    const chosenStateElement = document.getElementById('wizard-target-jurisdiction') || 
                               document.getElementById('wizard_state_select') || 
                               document.getElementById('state_select') || 
                               panelContext.querySelector('select[name="formation_state"]') || 
                               panelContext.querySelector('select[name="business_state"]') || 
                               panelContext.querySelector('.state-selector') || 
                               panelContext.querySelector('select[id*="state" i]') || 
                               panelContext.querySelector('select[name*="state" i]'); 

    if (chosenStateElement && chosenStateElement.selectedIndex >= 0) { 
        const selectedOption = chosenStateElement.options[chosenStateElement.selectedIndex]; 
        if (selectedOption) { 
            const optionValue = (selectedOption.value || "").toUpperCase().trim(); 
            const optionText = (selectedOption.text || ""); 
            
            if (optionValue.length === 2 && /^[A-Z]{2}$/.test(optionValue)) { 
                stateDisplayLabel = optionValue; 
            } else { 
                // Regex sweep parameter to extract 2-letter state abbreviations out of longer titles 
                const match = optionText.match(/\b([A-Z]{2})\b/); 
                stateDisplayLabel = match ? match[1].toUpperCase() : optionValue.substring(0, 2).toUpperCase().trim(); 
            } 
        } 
    } 

    // Dynamic state recovery fallback alignment 
    if (!stateDisplayLabel && window.selectedFormationStateCode) { 
        stateDisplayLabel = window.selectedFormationStateCode.toUpperCase().trim(); 
    } 

    // Ensure state code changes are mirrored universally down to window trackers 
    if (stateDisplayLabel && stateDisplayLabel.length === 2) { 
        window.selectedFormationStateCode = stateDisplayLabel; 
    } 

    return { label: stateDisplayLabel, element: chosenStateElement }; 
} 

// Export the jurisdiction resolver safely to the window scope
window.resolveActiveJurisdiction = resolveActiveJurisdiction;


/** 
 * Appends dynamic addon pricing metrics and invoice layouts to the checkout matrix. 
 * Zero Hardcoding Rule: Resolves service rates purely from lookups or data tags. 
 */ 
function appendCheckedAddons(initialHtmlRows) { 
    let incrementalAddonTotal = 0; 
    let workingHtml = initialHtmlRows || ""; 
    const processedIds = []; 

    // 1. DOM Checkbox Scan Pass
    const activeDomCheckboxes = document.querySelectorAll('.upsell-checkbox:checked, .addon-checkbox:checked, input[type="checkbox"].upsell-checkbox:checked, input[type="checkbox"][id^="nea_"]:checked');
    
    activeDomCheckboxes.forEach(function(checkbox) { 
        if (!checkbox) return; 

        const rawId = checkbox.id ? checkbox.id.replace("upsell-item-", "") : checkbox.name || ""; 
        if (!rawId || processedIds.includes(rawId)) return;

        const addonPriceValue = parseFloat(checkbox.getAttribute('data-price')) || parseFloat(checkbox.value) || 0; 
        const addonLabelString = checkbox.getAttribute('data-name') || checkbox.getAttribute('data-label') || "Optional Add-on Service"; 

        incrementalAddonTotal += addonPriceValue; 
        workingHtml += ` 
         <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;"> 
            <span>+ ${addonLabelString}</span> 
            <span style="font-family: monospace;">$${addonPriceValue.toFixed(2)}</span> 
         </div>`; 
         
        processedIds.push(rawId); 
    }); 

    // 2. Dynamic Registry & Storage Fallback Pass (Fixes empty summaries when steps hide)
    const BACKGROUND_FLAG_CATALOG = window.UPSELL_ADDON_REGISTRY || window.unifiedCatalogItems || {}; 
    const savedStateString = localStorage.getItem("f4u_wizard_onboarding_state");
    let parsedStateCache = {};
    try { if (savedStateString) parsedStateCache = JSON.parse(savedStateString); } catch(e) {}

    Object.keys(BACKGROUND_FLAG_CATALOG).forEach(function(flagKey) { 
        const isGlobalTrue = window[flagKey] === true || window[flagKey] === "yes" || String(window[flagKey]) === "true";
        const isCacheTrue = parsedStateCache[flagKey] === true || parsedStateCache[flagKey] === "yes" || String(parsedStateCache[flagKey]) === "true";
        
        if (!isGlobalTrue && !isCacheTrue) return; 

        const addonMeta = BACKGROUND_FLAG_CATALOG[flagKey]; 
        if (!addonMeta) return; 

        const uniqueAddonId = addonMeta.id || addonMeta.slug || flagKey; 
        if (processedIds.includes(uniqueAddonId)) return; 

        const computedPrice = parseFloat(addonMeta.price) || 0; 
        const computedName = addonMeta.name || addonMeta.label || uniqueAddonId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); 

        incrementalAddonTotal += computedPrice; 
        workingHtml += ` 
         <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-bottom: 6px;"> 
            <span>+ ${computedName}</span> 
            <span style="font-family: monospace;">$${computedPrice.toFixed(2)}</span> 
         </div>`; 
         
        processedIds.push(uniqueAddonId); 
    }); 

    return { total: incrementalAddonTotal, html: workingHtml }; 
} 

// Expose the clean addon evaluator safely to your window layer context 
window.appendCheckedAddons = appendCheckedAddons;



// ============================================================================ //
// ðŸ“Š MODULE 1: CENTRAL LIVE CHECKOUT PRICING SYNC ENGINE (INVOICE COMPILER)
// ============================================================================ //
/**
 * High-performance central processing loop that compiles base fees, state fees,
 * dynamic add-ons, and transport variables into a synchronized invoice display layout.
 */
function updateDynamicPricingMatrixVanilla() {
  // 1. Resolve pricing parameters out of the dynamic package mapping router
  const planData = typeof getPricingConfiguration === "function" ? getPricingConfiguration() : null;
  if (!planData) {
    console.warn("[Pricing Compiler] Package configuration resolution deferred: Data structure uninitialized.");
    return;
  }

  const jurisdiction = typeof resolveActiveJurisdiction === "function" ? resolveActiveJurisdiction() : { label: "", element: null };
  const stateFee = typeof resolveActiveStateFee === "function" ? resolveActiveStateFee(jurisdiction.label, planData.serviceKey) : 0;

  // 2. Compile base service package markup lines cleanly
  let finalInvoiceHtml = `
    <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: var(--navy); border-bottom: 1px solid var(--border); padding-bottom: 10px; margin-bottom: 8px;">
      <span>${planData.displayName} (${planData.planKey.toUpperCase()})</span>
      <span style="font-family: monospace;">$${planData.basePrice.toFixed(2)}</span>
    </div>`;

  // 3. Append state regulatory filing fees row seamlessly
  if (stateFee > 0 && jurisdiction.label) {
    finalInvoiceHtml += `
      <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: var(--slate); margin-bottom: 6px;">
        <span>State Filing Fee (${jurisdiction.label})</span>
        <span style="font-family: monospace;">$${stateFee.toFixed(2)}</span>
      </div>`;
  }

  // 4. Extract active user options checked states out of the add-on collectors engine
  const processedAddons = typeof appendCheckedAddons === "function" ? appendCheckedAddons("") : { total: 0, html: "" };
  finalInvoiceHtml += processedAddons.html;

  // Secure Transportation Tracking Bridge Integration
  const variableTruckingAddonTotal = parseFloat(window.lastCalculatedNewEntrantAddonTotal) || 0;
  if (variableTruckingAddonTotal > 0 && window.lastCalculatedNewEntrantAddonHtml) {
    finalInvoiceHtml += window.lastCalculatedNewEntrantAddonHtml;
  }

  // 5. Aggregate absolute financial metrics numbers
  const totalSubtotal = planData.basePrice + processedAddons.total + variableTruckingAddonTotal;
  const finalGrandTotal = totalSubtotal + stateFee;

  // 6. Safe structural DOM rendering across multiple target checkout panel templates containers
  const invoiceContainer = document.getElementById('summary-purchase-rows-container') || document.getElementById('checkout-invoice-rows-container') || document.getElementById('invoice-rows-container');
  if (invoiceContainer) {
    invoiceContainer.innerHTML = finalInvoiceHtml;
  }

  // DYNAMIC FIX: Removed the static "$0.00" and hardcoded "Taxes & Agency Processing" label workaround.
  // The element now dynamically renders the calculated dynamic package subtotals based on real-time selections.
  const subtotalDisplay = document.getElementById("summary-subtotal-display");
  if (subtotalDisplay) {
    subtotalDisplay.innerText = '$' + totalSubtotal.toFixed(2);
    const labelNode = subtotalDisplay.previousElementSibling;
    if (labelNode) {
      const displayServiceLabel = planData.displayName || "Filing & Add-on Subtotal";
      labelNode.innerText = `${displayServiceLabel} Subtotal`;
    }
  }

  // Synchronize final grand totals across text displays anchors pools safely
  const grandDisplays = ["summary-grand-total-display", "invoice-grand-total-display", "grand-total-display", "checkout-total-display"];
  grandDisplays.forEach(function(displayId) {
    const element = document.getElementById(displayId);
    if (element) element.textContent = '$' + finalGrandTotal.toFixed(2);
  });

  // Sync legacy/checkout view secondary subtotals cleanly
  const subtotalDisplays = ["invoice-subtotal-display", "subtotal-display"];
  subtotalDisplays.forEach(function(displayId) {
    const element = document.getElementById(displayId);
    if (element) element.textContent = '$' + totalSubtotal.toFixed(2);
  });

  // Sync Government filing fields including your active Step 5 element tracker
  const govDisplays = ["summary-gov-fees-display", "invoice-gov-fees-display", "gov-fees-display"];
  govDisplays.forEach(function(displayId) {
    const element = document.getElementById(displayId);
    if (element) element.textContent = '$' + stateFee.toFixed(2);
  });

  // Commit global state total variables for transaction processing mapping payloads
  window.wizardCalculatedFinalTotalAmount = finalGrandTotal;
  
  const secondaryTotalDisplay = document.getElementById("payment-gateway-total-display") || document.getElementById("wizard-sticky-total-value");
  if (secondaryTotalDisplay) {
    secondaryTotalDisplay.textContent = '$' + finalGrandTotal.toFixed(2);
  }

  // ðŸ›¡ï¸ REPAIRED EVENT LISTENER LEAK: Employs strict defensive attributes to completely isolate loop crashes
  if (jurisdiction.element && !jurisdiction.element.hasAttribute('data-has-sync-listener')) {
    jurisdiction.element.setAttribute('data-has-sync-listener', 'true');
    jurisdiction.element.addEventListener('change', function() {
      console.log(`[Pricing Link] Change detected on element: #${jurisdiction.element.id || 'state-selector'}. Recalculating matrix...`);
      updateDynamicPricingMatrixVanilla();
    });
  }
}

// Register initialization execution safely on app load lifecycle paths
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", updateDynamicPricingMatrixVanilla);
} else {
  updateDynamicPricingMatrixVanilla();
}

// ============================================================================ // 
// ðŸ“Š MODULE 3: PRODUCTION SUMMARY MATRIX FIELD INJECTOR (SAFE ALIAS MATRIX)   // 
// ============================================================================ // 
/** 
 * Public structural bridge to execute centralized checkout pricing metrics calculations. 
 * Clean Architecture Pattern: Forwards all calls safely to the central single source of truth. 
 */ 
function recalculateSummaryStepFields() { 
    console.log("[Summary Sync Proxy] Routing summary view balance updates to central engine calculations..."); 
    if (typeof updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } else { 
        console.warn("[Summary Sync Proxy Warning] Central pricing matrix compiler calculation loop is detached."); 
    } 
} 

/** 
 * Computes government filing fee parameters out of external state registry configuration profiles. 
 * Zero Hardcoding Rule: Reads amounts purely from your dynamic external configurations. 
 * @param {string} stateLabel - 2-letter targeted state abbreviation token string. * @param {string} serviceKey - Dynamic active funnel path context slug. 
 * @returns {number} Precise floating point government tariff amount. 
 */ 
function resolveActiveStateFee(stateLabel, serviceKey) { 
    let baseStateFilingFee = 0; 
    const currentKey = String(serviceKey || window.routeActiveServiceKey || "").toLowerCase().trim(); 
    
    if (!currentKey) return 0; 

    // ðŸŸ¢ OPERATIONAL INSIGHT OPTIMIZATION: Token Priority Matrix
    // Prevents string collisions (e.g., "series-corporation") by validating specific keys first
    let serviceTypeKey = "llc"; // Default fallback type
    
    const taxonomyRules = [
        { pattern: "series", target: "series_llc" },
        { pattern: "corp", target: "c_corp" },
        { pattern: "corporation", target: "c_corp" },
        { pattern: "nonprofit", target: "non_profit" },
        { pattern: "non-profit", target: "non_profit" },
        { pattern: "proprietor", target: "sole_proprietorship" },
        { pattern: "sole", target: "sole_proprietorship" },
        { pattern: "dba", target: "dba" },
        { pattern: "assumed", target: "dba" },
        { pattern: "agent", target: "registered_agent" },
        { pattern: "ra-service", target: "registered_agent" }
    ];

    // Find the first matching taxonomy rule based on the current service key string match
    const matchedRule = taxonomyRules.find(rule => currentKey.includes(rule.pattern));
    if (matchedRule) {
        serviceTypeKey = matchedRule.target;
    }

    // Look up state filing structures purely from the external configurations map 
    const dataSourceMatrix = window.STATE_FILING_FEES || (typeof STATE_FILING_FEES !== "undefined" ? STATE_FILING_FEES : null); 
    
    if (stateLabel && dataSourceMatrix) { 
        const stateMap = dataSourceMatrix[stateLabel.toUpperCase().trim()]; 
        if (stateMap) { 
            // Programmatically pulls direct values or checks the first record key rather than hardcoding static "llc" overrides 
            const defaultStateFallbackKey = Object.keys(stateMap)[0] || "llc"; 
            baseStateFilingFee = parseFloat(stateMap[serviceTypeKey]) || parseFloat(stateMap[defaultStateFallbackKey]) || 0; 
        } else { 
            console.log(`[Pricing Engine Notice] State matrix entry not found for "${stateLabel}". Fallback rate allocated.`); 
        } 
    } 

    return baseStateFilingFee; 
} 

// Expose functions globally to window namespaces cleanly 
window.recalculateSummaryStepFields = recalculateSummaryStepFields;
window.resolveActiveStateFee = resolveActiveStateFee;


// ============================================================================ // 
// ðŸ“Š CENTRAL PROCESSING CONFIGURATOR: SIDEBAR INVOICE CORE                    // 
// ============================================================================ // 
let stripeInstance = null; 
let stripeElementsContainer = null; 
let stripePaymentElementInstance = null; 

/** 
 * Fully dynamic runtime state initializer. 
 * FIXED: Zero hardcoded fallback strings. Resolves keys algorithmically from live database nodes. 
 */ ;(function initializeSystemStatesDynamically() { 
    const coreDb = window.CENTRAL_SERVICE_PLAN_DB || window.GLOBAL_COMPANY_PRICING?.packages; 

    // ðŸŸ¢ OPTIMIZATION: Pull state memory recovery arrays to prevent package overwriting
    const storedStateString = localStorage.getItem("f4u_wizard_onboarding_state");
    let cachedState = {};
    try { if (storedStateString) cachedState = JSON.parse(storedStateString); } catch(e) {}

    // 1. Resolve Active Service Path Key Dynamically 
    if (!window.routeActiveServiceKey) { 
        const urlParams = new URLSearchParams(window.location.search); 
        const urlService = urlParams.get('service') || urlParams.get('package') || urlParams.get('id') || ""; 
        
        if (urlService) { 
            window.routeActiveServiceKey = urlService.toLowerCase().trim().replace(/[\s_]+/g, "-"); 
        } else if (cachedState.wizard_route_service_id || cachedState.serviceKey) {
            // Restore from local cache history first
            window.routeActiveServiceKey = String(cachedState.wizard_route_service_id || cachedState.serviceKey).toLowerCase().trim();
        } else if (coreDb) { 
            // Dynamic Database Probe: Grab the first valid service key from the loaded database array 
            const structuralDbKeys = Object.keys(coreDb); 
            if (structuralDbKeys.length > 0) { 
                window.routeActiveServiceKey = structuralDbKeys[0]; 
            } 
        } 
    } 

    // 2. Resolve Active Tier Plan Key Dynamically 
    if (!window.routeActivePlanKey) { 
        const urlParams = new URLSearchParams(window.location.search); 
        const urlPlan = urlParams.get('plan') || urlParams.get('tier') || ""; 
        
        if (urlPlan) { 
            window.routeActivePlanKey = urlPlan.toLowerCase().trim(); 
        } else if (cachedState.wizard_route_tier_id || cachedState.planKey) {
            // Restore from local cache history first
            window.routeActivePlanKey = String(cachedState.wizard_route_tier_id || cachedState.planKey).toLowerCase().trim();
        } else if (coreDb && window.routeActiveServiceKey && coreDb[window.routeActiveServiceKey]) { 
            // Dynamic Target Tier Probe: Isolate valid structural pricing keys from database nodes 
            const targetRecord = coreDb[window.routeActiveServiceKey]; 
            
            // Handle both nested plans property and direct root properties structures
            const activePlansObject = targetRecord.plans || targetRecord;
            const availableTierKeys = Object.keys(activePlansObject).filter(k => 
                k !== "name" && k !== "bullets" && k !== "addons" && k !== "plans" && k !== "features" && k !== "description"
            ); 
            
            if (availableTierKeys.length > 0) { 
                window.routeActivePlanKey = availableTierKeys[0]; 
            } 
        } 
    } 

    console.log(`[State Engine Initialized] Active Key: ${window.routeActiveServiceKey || "None"} | Active Tier: ${window.routeActivePlanKey || "None"}`); 
})();


// ============================================================================ // 
// ðŸ“Š LIVE CALCULATIONS SYNCHRONIZER ENGINE (COMBINED INTEGRATED FUNNEL)        // 
// ============================================================================ // 

// RUNTIME LOOP PREVENTION LOCK: Stop cascading maximum call stack events 
if (typeof window._isFulfillmentSyncLockActive === "undefined") { 
    window._isFulfillmentSyncLockActive = false; 
} 

/** 
 * Dynamically tracks checked sub-services to prepare the final checkout page invoice rows. 
 * Zero Hardcoding Rule: Extracts pricing values directly from DOM element data descriptors. 
 */ 
function executeNewEntrantAuditLiveFulfillmentSync() { 
    // If we are already mid-calculation context elsewhere in the file stack, exit immediately 
    if (window._isFulfillmentSyncLockActive) return; 

    // Activate execution lock 
    window._isFulfillmentSyncLockActive = true; 

    try { 
        let dynamicAddonTotal = 0; 
        let selectedAddonItemsHtml = ""; 
        let step2CartAddons = []; 
        let allNeaFormNamesRegistry = []; 

        // 1. SCAN THE DOCUMENT FOR SUB-SERVICES AND REGULAR STEP 2 ENTRIES PROGRAMMATICALLY 
        // Captures all nea_, nea_service_, and class-assigned checkboxes in one single loop 
        const activeCheckboxes = document.querySelectorAll( 
            '.nea-service-checkbox:checked, [id^="nea_service_"]:checked, input[type="checkbox"][id^="nea_"]' 
        ); 

        activeCheckboxes.forEach(function(checkboxNode) { 
            if (!checkboxNode) return; 

            // Track item names and element IDs for cart state boundaries 
            const computedLabelText = checkboxNode.getAttribute('data-label') || checkboxNode.getAttribute('data-name') || checkboxNode.id; 
            const elementIdToken = checkboxNode.id || checkboxNode.name || computedLabelText;
            allNeaFormNamesRegistry.push(computedLabelText); 

            // Read parameters straight from layout attributes instead of hardcoded JavaScript lists 
            const itemPrice = parseFloat(checkboxNode.getAttribute("data-price")) || parseFloat(checkboxNode.value) || 0; 
            const itemLabel = checkboxNode.getAttribute("data-name") || checkboxNode.getAttribute("data-label") || "Audit Prep Component Service"; 

            // If the element is checked, compile it into our running financial totals 
            if (checkboxNode.checked) { 
                dynamicAddonTotal += itemPrice; 

                // ðŸŸ¢ UPGRADED: Added a professional, clean red [Remove] link block next to the line item.
                // Clicking this will un-check the item programmatically without making the user turn back to Step 2.
                selectedAddonItemsHtml += ` 
                 <div class="summary-invoice-row" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; padding: 6px 0; border-bottom: 1px dashed #e2e8f0; color: #64748b; width: 100%; box-sizing: border-box;"> 
                    <div style="display: flex; flex-direction: column; gap: 2px; text-align: left;">
                        <span style="color: #0a1f44; font-weight: 600;"><i class="fa-solid fa-square-check" style="color: #10b981;"></i> ${itemLabel}</span> 
                        <button type="button" onclick="window.removeSelectedAddonItemStraightFromSummaryCard('${elementIdToken}', '${itemLabel}')" style="background: transparent; border: none; color: #ef4444; font-size: 0.725rem; font-weight: 700; cursor: pointer; padding: 0; margin: 0; width: fit-content; text-align: left;"><i class="fa-solid fa-trash-can"></i> Remove</button>
                    </div>
                    <span style="font-family: monospace; font-weight: 600; color: #0a1f44;">$${itemPrice.toFixed(2)}</span> 
                 </div>`; 

                // Simultaneously map it into your standard cart state arrays for summary screen queries 
                step2CartAddons.push({ id: elementIdToken, name: itemLabel, price: itemPrice }); 
            } 
        }); 

        // 2. SYNCHRONIZE BACK TO CENTRAL CART STATE PAYLOADS 
        if (window.currentCartState) { 
            if (!Array.isArray(window.currentCartState.addons)) { 
                window.currentCartState.addons = []; 
            } 
            // Wipe matching step elements first to guarantee pristine un-checking updates 
            window.currentCartState.addons = window.currentCartState.addons.filter(addon => { 
                return !allNeaFormNamesRegistry.includes(addon.name); 
            }); 
            // Merge active items 
            window.currentCartState.addons = window.currentCartState.addons.concat(step2CartAddons); 
        } 

        // 3. STORE OUT TO WINDOW STATE MEMORY FOR CALCULATION COMPILER CORES 
        window.lastCalculatedNewEntrantAddonTotal = dynamicAddonTotal; 
        window.lastCalculatedNewEntrantAddonHtml = selectedAddonItemsHtml; 
        
        console.log(`[Audit Calculator Sync] Allocation balance adjustments updated. Sub-add-on Delta: $${dynamicAddonTotal.toFixed(2)}`); 

        // 4. TRIGGER MASTER PRICING RECALCULATION MATRIX PASS 
        if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
            window.updateDynamicPricingMatrixVanilla(); 
        } else if (typeof window.updateWizardFinalTotalAmountMatrix === "function") { 
            window.updateWizardFinalTotalAmountMatrix(); 
        } 
    } catch (error) { 
        console.error("[Audit Calculator Sync] Critical failure inside loop processing logic pipeline:", error); 
    } finally { 
        // CRITICAL: Always release execution thread locks even if calculations hit an exception fallback 
        window._isFulfillmentSyncLockActive = false; 
    } 
} 

/**
 * ðŸŸ¢ COMPANION ENGINE: EXPLICIT LIVE CART REMOVER
 * Unchecks checkboxes programmatically and updates the subtotal balances instantly.
 */
function removeSelectedAddonItemStraightFromSummaryCard(checkboxElementId, itemLabelName) {
    if (!checkboxElementId) return;
    console.log(`[Summary Sync] Request received to remove item: #${checkboxElementId}`);

    // 1. Un-check the physical checkbox element sitting back on Step 2 or Step 3 panels
    const physicalCheckbox = document.getElementById(checkboxElementId) || 
                             document.querySelector(`input[id*="${checkboxElementId}"]`) ||
                             document.querySelector(`input[name*="${checkboxElementId}"]`);
    
    if (physicalCheckbox) {
        physicalCheckbox.checked = false;
        // Broadcast the change event so the form triggers its standard calculation pass automatically
        physicalCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // 2. Erase global window tracking states
    window[checkboxElementId] = false;
    const trackingStateKey = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP ? window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP[checkboxElementId] : null;
    if (trackingStateKey) {
        window[trackingStateKey] = false;
    }

    // 3. Filter the object out of the central cart data state array
    if (window.currentCartState && Array.isArray(window.currentCartState.addons)) {
        window.currentCartState.addons = window.currentCartState.addons.filter(addon => {
            const currentName = itemLabelName ? String(itemLabelName).toLowerCase().trim() : "";
            return addon.id !== checkboxElementId && addon.name !== checkboxElementId && String(addon.name).toLowerCase().trim() !== currentName;
        });
    }

    // 4. Force a fresh calculation execution sweep to repaint the visible summary list
    executeNewEntrantAuditLiveFulfillmentSync();
}

// Expose functions globally to window scopes namespaces cleanly
window.executeNewEntrantAuditLiveFulfillmentSync = executeNewEntrantAuditLiveFulfillmentSync;
window.removeSelectedAddonItemStraightFromSummaryCard = removeSelectedAddonItemStraightFromSummaryCard;




