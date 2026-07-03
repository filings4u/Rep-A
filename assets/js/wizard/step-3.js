// ============================================================================ //
// 🗃️ MASTER MARKETPLACE DATABASE REFERENCE (ISOLATED RUNTIME CONFIGURATION)    //
// ============================================================================ //
window.MASTER_UPSELLS_CATALOG = {
    // --- SERVICE CATEGORY 1: NEW ENTRANT AUDIT REGISTRATION ---
    "new-entrant-audit": [
        { id: "corporate-veil-lock", name: "Corporate Veil Protection & Minutes", price: 295.00, tier: "Enterprise Security", description: "Bulletproofs your company asset separation boundaries to legally isolate your personal belongings from corporate liabilities." },
        { id: "hazmat-liability-shield", name: "HAZMAT & Safety Management Protocol", price: 450.00, tier: "Specialized Risk", description: "Comprehensive procedural templates and safety training materials to keep hazardous cargo loads compliant with federal standards." },
        { id: "cargo-indemnity-audit", name: "Cargo Indemnity & Freight Liability Audit", price: 185.00, tier: "Asset Security", description: "Reviews your freight contracts and carrier policies to insulate your margins from sudden cargo loss disputes." },
        { id: "regulatory-defense-retainer", name: "DOT Enforcement Regulatory Defense (1 Year)", price: 599.00, tier: "Comprehensive Coverage", description: "Provides 12 months of legal protection and advisory support to defend your operations during federal audits or citations." },
        { id: "unified-carrier-reg-shield", name: "UCR Annual Filing Protection Shield", price: 125.00, tier: "Asset Security", description: "Automates your multi-state carrier registrations to avoid local road stops and state crossing penalty traps." },
        { id: "biennial-update-lock", name: "Automated MCS-150 Biennial Update Lock", price: 95.00, tier: "Compliance Lock", description: "Schedules and processes mandatory updates to your motor carrier records, preventing system deactivation." },
        { id: "driver-monitoring-feed", name: "Continuous Driver MVR Monitoring Feed", price: 160.00, tier: "Specialized Risk", description: "Real-time background alert monitoring to instantly log state motor vehicle record flags across your team of active drivers." }
    ],
    // --- SERVICE CATEGORY 2: GENERAL DOT AUTHORITY FILINGS ---
    "dot-authority": [
        { id: "process-agent-boc3", name: "Blanket Process Agent Filing (BOC-3)", price: 75.00, tier: "Authority Essentials", description: "Fulfills your mandatory federal filing requirement by designating authorized legal agents across all 50 US states." },
        { id: "scac-alpha-code", name: "SCAC Alpha Code Registration Matrix", price: 110.00, tier: "Authority Essentials", description: "Secures your unique standard carrier alpha code to authorize customs clearance and intermodal freight routing protocols." },
        { id: "ifr-tax-account-setup", name: "IFTA Fuel Tax Account Setup Assistance", price: 220.00, tier: "Tax Compliance", description: "Establishes your international fuel tax agreement framework to ensure fuel tax parameters report cleanly." },
        { id: "kyu-weight-distance", name: "Kentucky KYU Weight-Distance Number", price: 90.00, tier: "State Permits", description: "Registers your heavy vehicle parameters to clear weight-distance reporting frameworks inside Kentucky." },
        { id: "ny-hut-permit", name: "New York HUT Highway Use Tax Permit", price: 115.00, tier: "State Permits", description: "Acquires mandatory highway use tax authorization parameters to operate over New York transport networks." },
        { id: "nm-wdt-permit", name: "New Mexico WDT Weight-Distance Permit", price: 95.00, tier: "State Permits", description: "Establishes weight distance distance compliance variables cleanly for operations traversing New Mexico state lines." },
        { id: "or-weight-receipt", name: "Oregon Weight Receipt & Bond Setup", price: 195.00, tier: "State Permits", description: "Secures active highway mileage bond parameters to authorize operational visibility inside Oregon." }
    ],
    // --- SERVICE CATEGORY 3: CORPORATION SETUP & TAX EXEMPTIONS ---
    "corp-formation": [
        { id: "ein-tax-id-expedite", name: "Federal EIN Tax ID Assignment Expedite", price: 65.00, tier: "Corporate Setup", description: "Accelerates your federal employer identification number acquisition to clear business bank account setups instantly." },
        { id: "llc-operating-agreement", name: "Custom LLC Operating Agreement Draft", price: 85.00, tier: "Corporate Setup", description: "Structures clear corporate ownership rules and distribution tracking benchmarks customized to your core team parameters." },
        { id: "s-corp-election-filing", name: "IRS Subchapter S-Corporation Election Filing", price: 145.00, tier: "Tax Strategy", description: "Registers subchapter s classification status to protect earnings streams from dual corporate taxation penalties." },
        { id: "corp-by-laws-package", name: "Corporate By-Laws & Share Certificates Set", price: 95.00, tier: "Corporate Setup", description: "Compiles formal organizational bylaws alongside authenticated certificates to secure investment parameters." },
        { id: "registered-agent-year", name: "Premium Registered Agent Service (1 Full Year)", price: 150.00, tier: "Enterprise Security", description: "Establishes your required local physical legal address compliance bounds to intercept agency documentation safely." },
        { id: "dun-bradstreet-setup", name: "Dun & Bradstreet Business Credit Profile Setup", price: 175.00, tier: "Corporate Setup", description: "Launches your unique DUNS identification lookup profile to jumpstart institutional credit score tracking." },
        { id: "trademark-name-lock", name: "Corporate Trademark Name Search & Lock", price: 325.00, tier: "Enterprise Security", description: "Full multi-jurisdictional availability audits to securely protect your corporate brand logo text parameters." }
    ]
};

// ============================================================================ //
// 🗃️ UPSELLS ENGINE ROUTER DATABASE CATEGORY SCHEMA CONFIGURATION            //
// ============================================================================ //
window.UPSELLS_ROUTER_DATABASE = { 
    "formations": [ 
        { id: "ra-shield", name: "Registered Agent Service", price: 75.00, billing: "/ yr", desc: "Secures state compliance mandates, processes official legal notices, and shields your private physical address from public databases." }, 
        { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." }, 
        { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." }, 
        { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." }, 
        { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." }, 
        { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." }, 
        { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." }, 
        { id: "good-standing", name: "Certificate of Good Standing", price: 45.00, billing: " flat", desc: "Secures certified regulatory verification from the jurisdiction state registry validating that your active entity is compliant." } 
    ], 
    "broker": [ 
        { id: "boc3-filing", name: "BOC-3 Process Agent Filing", price: 75.00, billing: " flat", desc: "Mandatory federal processing requirement for Broker configurations. Designates process service agents across all states to guarantee compliance." }, 
        { id: "bmc85-quote", name: "BMC-85 Trust Fund ($75K) Request", price: 0.00, billing: " quote", desc: "Automates routing checks into partner underwriting matrices to secure a verified premium quote for your mandatory broker security trust allocation." }, 
        { id: "eo-liability", name: "Liability Insurance ($1M E&O) Quote", price: 0.00, billing: " quote", desc: "Secures specialized pricing options for Professional Errors and Omissions liability plans to shield your cargo routing platform from structural lawsuits." }, 
        { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." }, 
        { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." }, 
        { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." }, 
        { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." }, 
        { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." }, 
        { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." } 
    ], 
    "trucker": [ 
        { id: "fmcsa-audit", name: "FMCSA Safety Audit Preparation Kit", price: 149.00, billing: " flat", desc: "Compiles driver files, vehicle maintenance frameworks, and fuel logs into an audit-ready format to guarantee passing your new-entrant regulatory evaluation." }, 
        { id: "boc3-filing", name: "BOC-3 Process Agent Filing", price: 75.00, billing: " flat", desc: "Mandatory federal processing requirement for Trucker configurations. Designates process service agents across all states to guarantee compliance." }, 
        { id: "bipd-quote", name: "$750,000 BIPD Public Liability Quote", price: 0.00, billing: " quote", desc: "Triggers partner routing pipelines to pull premium options for public liability coverages required for FMCSA operating authority activation." }, 
        { id: "cargo-quote", name: "$100,000 Motor Cargo Carrier Quote", price: 0.00, billing: " quote", desc: "Pulls tailored carrier pricing matrices to cover high-value customer freight assets against damage, loss, or transit destruction incidents." }, 
        { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." }, 
        { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." }, 
        { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." }, 
        { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." }, 
        { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." }, 
        { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." } 
    ], 
    "generic": [ 
        { id: "ra-shield", name: "Registered Agent Service", price: 75.00, billing: "/ yr", desc: "Secures state compliance mandates, processes official legal notices, and shields your corporate entity's private physical address layout from public record databases." }, 
        { id: "comp-monitor", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." }, 
        { id: "corp-resolutions", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." }, 
        { id: "corp-minutes", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." }, 
        { id: "op-agreement", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." }, 
        { id: "corp-bylaws", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." }, 
        { id: "good-standing", name: "Certificate of Good Standing", price: 45.00, billing: " flat", desc: "Secures certified regulatory verification from the jurisdiction state registry validating that your active entity is compliant and authorized to contract." }, 
        { id: "ein-procure", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant payment processing lines." } 
    ] 
};

// Freeze the object globally to preserve memory blocks securely 
if (window.UPSELLS_ROUTER_DATABASE) {
    Object.freeze(window.UPSELLS_ROUTER_DATABASE); 
}

// ============================================================================ // 
// 📊 LAYER 2: PROGRAMMATIC LOOKUP ROUTER UTILITY ENGINE                        // 
// ============================================================================ // 
/** 
 * Pure Dynamic Upsell Selector Utility. 
 * Resolves packages programmatically without fallback routing bypass arrays. 
 * @param {string} routeKey - Category path key string (e.g. window.routeActiveServiceKey) 
 * @returns {Array} List of upsell records matching the active category safely 
 */ 
function getScopedUpsellsDataset(routeKey) { 
    const database = window.UPSELLS_ROUTER_DATABASE; 
    
    // Safety Guard: If database layer is absent over network, fail gracefully without throwing crashes 
    if (!database) { 
        console.warn("[Upsell Lookup Guard] window.UPSELLS_ROUTER_DATABASE is not yet initialized."); 
        return []; 
    } 
    
    const normalizedKey = String(routeKey || "").toLowerCase().trim(); 
    
    // Strict property query validation using clear prototype inspection routines 
    if (Object.prototype.hasOwnProperty.call(database, normalizedKey)) { 
        return database[normalizedKey]; 
    } 
    
    // Default to generic group purely by object property rules if specific category lacks unique records 
    return database.generic || []; 
} 

// Expose universally to the window object layer safely 
window.getScopedUpsellsDataset = getScopedUpsellsDataset;


// ============================================================================ //
// 🟢 CENTRAL ROUTER ACCESS POINT (CATALOG DATA SEPARATION FILTER)              //
// ============================================================================ //
/**
 * Resolves exact items strictly by the customer's chosen tracking route.
 */
function getCategoryAddonsByServiceKey(serviceKey) { 
    const fallbackKey = "new-entrant-audit"; 
    const lookupKey = String(serviceKey || window.routeActiveServiceKey || fallbackKey).toLowerCase().trim(); 
    
    // Explicitly pull only the list array linked directly to that category keyword slot 
    const targetAddonsList = window.MASTER_UPSELLS_CATALOG[lookupKey] || window.MASTER_UPSELLS_CATALOG[fallbackKey] || []; 
    const dictionaryPayload = {}; 
    
    targetAddonsList.forEach(item => { 
        if (item && item.id) { 
            dictionaryPayload[item.id] = item; 
        } 
    }); 
    return dictionaryPayload; 
} 

// Instantiate all variable parameters down into standard tracking scopes safely
if (window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP) {
    Object.values(window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP).forEach(k => { 
        if (window[k] === undefined) window[k] = false; 
    }); 
}

window.getCategoryAddonsByServiceKey = getCategoryAddonsByServiceKey;


// ============================================================================ //
// 🎨 PART 1: NEUTRAL SELECTION SKINNING MODULE (STEP 3 VIEW ISOLATION)        //
// ============================================================================ //
/**
 * Sweeps Step 3 cards and applies neutral slate background skin styles dynamically.
 */
function autoSkinSelectedUpsellCards() { 
    // Scope Restriction: Limits evaluation to Step 3 panels to leave Step 2 wide layouts untouched 
    const step3Checkboxes = document.querySelectorAll( 
        '#step-panel-3 input[type="checkbox"], #step-3 input[type="checkbox"], .upsell-checkbox' 
    ); 
    
    step3Checkboxes.forEach(checkbox => { 
        if (!checkbox) return; 
        
        // Trace the closest parent product container card 
        const parentCard = checkbox.closest('.upsell-market-card') || checkbox.closest('.card') || checkbox.parentElement?.parentElement; 
        if (parentCard) { 
            if (checkbox.checked) { 
                checkbox.style.setProperty("border-color", "#64748b", "important");
                parentCard.style.setProperty("border", "1px solid #cbd5e1", "important"); // Standard slate grey focus edge 
                parentCard.style.setProperty("background-color", "#f8fafc", "important"); // Muted neutral background tint 
            } else { 
                parentCard.style.setProperty("border", "1px solid #e2e8f0", "important"); 
                parentCard.style.setProperty("background-color", "#ffffff", "important"); 
            } 
        } 
    }); 
} 

// 📦 GLOBAL SCOPE REFERENCE EXPOSURE 
window.autoSkinSelectedUpsellCards = autoSkinSelectedUpsellCards;

// Safe Intercept: Wrap baseline checkbox toggle pass if initialized on the window scope 
const baselineUpsellTogglePass = window.handleBackgroundUpsellTogglePass; 

window.handleBackgroundUpsellTogglePass = function(checkboxElement) { 
    if (typeof baselineUpsellTogglePass === "function") { 
        baselineUpsellTogglePass(checkboxElement); 
    } 
    autoSkinSelectedUpsellCards(); 
}; 

// Mount skinning elements safely when document DOM nodes stabilize 
if (document.readyState !== "loading") { 
    setTimeout(autoSkinSelectedUpsellCards, 150); 
} else { 
    document.addEventListener("DOMContentLoaded", () => { 
        setTimeout(autoSkinSelectedUpsellCards, 150); 
    }); 
}


// ============================================================================ //
// 🗺️ STEP 3 RENDER TARGET SYNCHRONIZATION BRIDGE (TIMING RESILIENT)            //
// ============================================================================ //
function autoInitializeStep3MarketplaceCatalog() { 
    const htmlMarketplaceBox = document.getElementById("wizard-dynamic-upsells-render-target"); 
    
    // 🛡️ TIMING PROTECTION SAFEGUARD: Verify global state config arrays before loading 
    const isStateConfigReady = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || window.CENTRAL_ADDON_DB; 
    
    if (htmlMarketplaceBox && typeof window.renderTargetUpsellsListPanel === "function" && isStateConfigReady) { 
        console.log("[Marketplace Bridge] Found Step 3 HTML container. Injecting catalog items..."); 
        const activeCatalog = window.unifiedCatalogItems || window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {}; 
        
        window.renderTargetUpsellsListPanel(activeCatalog, htmlMarketplaceBox); 
    } else if (htmlMarketplaceBox) { 
        // Retry loop to accommodate late asset loading speeds 
        setTimeout(autoInitializeStep3MarketplaceCatalog, 50); 
    } 
} 

// Unified Startup Execution Registration Pass 
if (document.readyState !== "loading") { 
    if (typeof initializeStep4MutationObserverTracking === "function") initializeStep4MutationObserverTracking(); 
    autoInitializeStep3MarketplaceCatalog(); 
} else { 
    document.addEventListener("DOMContentLoaded", () => { 
        if (typeof initializeStep4MutationObserverTracking === "function") initializeStep4MutationObserverTracking(); 
        autoInitializeStep3MarketplaceCatalog(); 
    }); 
}


// ============================================================================ //
// 📊 PART 1 OF 3: DYNAMIC SCHEMA ADD-ON INGESTION ENGINE                      //
// ============================================================================ //
function extractCatalogAddonsDynamically(databaseSource) {
  const unifiedCatalogItems = {};
  const visitedNodes = new Set();

  function scanTreeRecursively(currentNode) {
    if (!currentNode || typeof currentNode !== 'object') return;
    if (visitedNodes.has(currentNode)) return;
    visitedNodes.add(currentNode);

    // Arrays Traversal Loop Layer
    if (Array.isArray(currentNode)) {
      currentNode.forEach(item => {
        if (item && typeof item === 'object') {
          const productKey = item.id || item.slug || item.name;
          // Zero Hardcoding: Accept all valid items with prices and labels natively
          if (productKey && (item.label || item.name) && item.price !== undefined) {
            unifiedCatalogItems[productKey] = item;
          }
          scanTreeRecursively(item);
        }
      });
      return;
    }

    // Key/Value Dictionary Object Traversal Layer
    Object.keys(currentNode).forEach(key => {
      const targetNode = currentNode[key];
      if (!targetNode || typeof targetNode !== 'object') return;

      if (targetNode.price !== undefined && (targetNode.label || targetNode.name)) {
        const productKey = targetNode.id || targetNode.slug || key;
        unifiedCatalogItems[productKey] = targetNode;
        scanTreeRecursively(targetNode);
      } else {
        scanTreeRecursively(targetNode);
      }
    });
  }

  scanTreeRecursively(databaseSource);
  visitedNodes.clear();
  return unifiedCatalogItems;
}
// ============================================================================ //
// 📊 PART 2 OF 3: WORKSPACE COMPONENT STRING BUILDER                           //
// ============================================================================ //
function buildMarketplaceCardsHtml(catalogItems) {
  let accumulatorHtml = "";
  const coordinateMaps = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};

  Object.keys(catalogItems).forEach(catalogSlug => {
    const item = catalogItems[catalogSlug];
    if (!item) return;

    const itemDesc = item.description || item.desc || "";
    if (!itemDesc || itemDesc.trim() === "") return; // Skip empty descriptors

    const trackingKey = coordinateMaps[catalogSlug] || catalogSlug;
    const isChecked = window[trackingKey] === true || window[trackingKey] === "yes" || String(window[trackingKey]) === "true";
    
    const itemName = item.label || item.name;
    const itemPrice = parseFloat(item.price) || 0;

    accumulatorHtml += `
      <div class="upsell-market-card" style="background:#ffffff; border:1px solid var(--border, #e2e8f0); padding:16px; border-radius:8px; display:flex; gap:16px; align-items:center; justify-content:space-between; box-sizing:border-box; width:100%; transition:all 0.2s ease; margin-bottom: 12px;">
        <div style="display:flex; flex-direction:column; gap:4px; min-width:0; flex:1;">
          <span style="font-weight:800; font-size:1rem; color:var(--navy, #0a1f44);">${itemName}</span>
          <p style="margin:0; font-size:0.85rem; color:var(--slate, #64748b); line-height:1.4;">${itemDesc}</p>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px; flex-shrink:0;">
          <span style="font-family:monospace; font-weight:700; color:var(--primary, #10b981); font-size:1.1rem;">$${itemPrice.toFixed(2)}</span>
          <label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; font-weight:700; color:var(--navy, #0a1f44); cursor:pointer; margin:0;">
            <input type="checkbox" class="upsell-checkbox" id="${trackingKey}" data-price="${itemPrice}" data-name="${itemName}" style="width:18px; height:18px; cursor:pointer;" ${isChecked ? 'checked' : ''} onchange="handleBackgroundUpsellTogglePass(this)"> Activate
          </label>
        </div>
      </div>`;
  });

  return accumulatorHtml;
}


// ============================================================================ //
// 📡 4. REACTIVE STATE INTERCEPTOR ENGINE (NETWORKING DATA HOOKS)               //
// ============================================================================ //
(function attachAgnosticStateInterceptors() { 
    const targetedMemoryHooks = ['CENTRAL_ADDON_DB', 'UPSELLS_ROUTER_DATABASE', 'UPSELL_ADDON_REGISTRY']; 
    
    targetedMemoryHooks.forEach(hookKey => { 
        let internalValue = window[hookKey]; 
        
        Object.defineProperty(window, hookKey, { 
            get() { 
                return internalValue; 
            }, 
            set(newValue) { 
                internalValue = newValue; 
                // Trigger a clean paint the exact millisecond the async tier script finishes loading data 
                if (newValue && typeof newValue === 'object') { 
                    if (typeof window.renderTargetUpsellsListPanel === "function") { 
                        window.renderTargetUpsellsListPanel(); 
                    } 
                } 
            }, 
            configurable: true, 
            enumerable: true 
        }); 
    }); 
})(); 

// Re-evaluate if the DOM finishes updates 
document.addEventListener("DOMContentLoaded", () => { 
    if (typeof window.renderTargetUpsellsListPanel === "function") { 
        window.renderTargetUpsellsListPanel(); 
    } 
});


// ============================================================================ //
// ⚡ CLICK INTERCEPT ROUTERS & BINDING HANDLERS (REPAIRED FUNNEL CORES)        //
// ============================================================================ //
/**
 * Syncs marketplace checklist boxes immediately down to global state tokens memory registers
 * and dynamically injects values into both backend and wizard-native invoice arrays.
 * @param {HTMLInputElement} checkboxNode - Active selected marketplace checkbox element.
 */
function handleBackgroundUpsellTogglePass(checkboxNode) { 
    if (!checkboxNode || typeof checkboxNode !== 'object') return; 
    
    const targetFlagKey = checkboxNode.id; 
    if (!targetFlagKey) { 
        console.warn("[Sync Engine] Toggle failed: Checkbox is missing a valid 'id' attribute."); 
        return; 
    } 
    
    const isChecked = Boolean(checkboxNode.checked); 
    const protectedKeys = ["location", "document", "window", "history", "navigator", "init", "atob", "btoa", "open", "close", "name"]; 

    // 1. Immediately sync the visual state variable to the global window scope tracker safely 
    if (!protectedKeys.includes(targetFlagKey) && typeof window[targetFlagKey] !== "function") { 
        window[targetFlagKey] = isChecked; 
    } 

    const windowKeys = Object.keys(window); 
    const activeBillingNodes = []; 

    // Locate standard billing payloads across global thread scopes
    for (let i = 0; i < windowKeys.length; i++) { 
        const key = windowKeys[i]; 
        try { 
            if (window[key] && typeof window[key] === 'object' && window[key].active_addons_list !== undefined) { 
                activeBillingNodes.push(key); 
            } 
        } catch (e) { 
            // Cross-origin container safety block filter pass 
        } 
    } 

    // Resolve structural naming coordinates mapping parameters 
    const inverseCoordinatesMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
    const catalogSlug = Object.keys(inverseCoordinatesMap).find(function(key) { 
        return inverseCoordinatesMap[key] === targetFlagKey; 
    }) || targetFlagKey; 
    
    const addonNameAttr = checkboxNode.getAttribute("data-name") || checkboxNode.getAttribute("data-label") || catalogSlug; 
    const addonPriceAttr = parseFloat(checkboxNode.getAttribute("data-price")) || parseFloat(checkboxNode.value) || 0.00; 
    const compiledAddonRecord = { id: catalogSlug, name: addonNameAttr, price: addonPriceAttr, label: addonNameAttr }; 

    // 2. Pass Phase 1: Update explicit backend tracking payload tables safely 
    activeBillingNodes.forEach(function(nodeKey) { 
        const targetPayload = window[nodeKey]; 
        if (!targetPayload || !Array.isArray(targetPayload.active_addons_list)) return; 
        
        // Determine target payload schema format by looking at existing entries 
        const sampleEntry = targetPayload.active_addons_list[0]; 
        const expectsObjectSchema = (sampleEntry && typeof sampleEntry === 'object'); 
        
        if (isChecked) { 
            const isAlreadyListed = targetPayload.active_addons_list.some(function(addon) { 
                return ((addon && typeof addon === 'object') ? addon.id : addon) === catalogSlug; 
            }); 
            if (!isAlreadyListed) { 
                // POLYMORPHIC INJECTION FIXED: Match the exact expected target data format type 
                if (expectsObjectSchema) { 
                    targetPayload.active_addons_list.push(compiledAddonRecord); 
                } else { 
                    targetPayload.active_addons_list.push(catalogSlug); // Push raw string slug token 
                } 
            } 
        } else { 
            targetPayload.active_addons_list = targetPayload.active_addons_list.filter(function(addon) { 
                return ((addon && typeof addon === 'object') ? addon.id : addon) !== catalogSlug; 
            }); 
        } 
    }); 

    // 3. PASS PHASE 2: CRITICAL WIZARD SUMMARY INTEGRATION 
    if (!window.currentCartState) { 
        window.currentCartState = {}; 
    } 
    if (!Array.isArray(window.currentCartState.addons)) { 
        window.currentCartState.addons = []; 
    } 
    
    if (isChecked) { 
        const isCartDuplicate = window.currentCartState.addons.some(function(addon) { 
            return addon && addon.name === addonNameAttr; 
        }); 
        if (!isCartDuplicate) { 
            window.currentCartState.addons.push({ id: catalogSlug, title: addonNameAttr, price: addonPriceAttr }); 
            console.log(`[Funnel Sync] Synced "${addonNameAttr}" into Step 5 cart state review array.`); 
        } 
    } else { 
        window.currentCartState.addons = window.currentCartState.addons.filter(function(addon) { 
            return addon && addon.name !== addonNameAttr; 
        }); 
        console.log(`[Funnel Sync] Scrubbed "${addonNameAttr}" out of Step 5 cart state review array.`); 
    } 

    // Reconstruct the array format expected by your summary card engine loop
    const activeCheckboxes = document.querySelectorAll('.upsell-checkbox:checked');
    const compiledSelectedAddonsList = [];
    activeCheckboxes.forEach(box => {
        const itemPrice = parseFloat(box.getAttribute('data-price')) || 0;
        const itemName = box.getAttribute('data-name') || "Optional Asset Shield";
        const inverseCoordinatesMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
        const itemId = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === box.id) || box.id;
        compiledSelectedAddonsList.push({ id: itemId, title: itemName, price: itemPrice });
        localStorage.setItem(`wizard_field_${box.id}`, "true");
    });
    
    const inactiveCheckboxes = document.querySelectorAll('.upsell-checkbox:not(:checked)');
    inactiveCheckboxes.forEach(box => {
        localStorage.setItem(`wizard_field_${box.id}`, "false");
    });
    
    window.currentSelectedAddonsListArrayMatrix = compiledSelectedAddonsList;
    localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(compiledSelectedAddonsList));

    // 4. Force skin color highlight adjustments over your card wrappers 
    if (typeof window.autoSkinSelectedUpsellCards === "function") { 
        window.autoSkinSelectedUpsellCards(); 
    } 

    // 5. Fire running invoice total recalculation loops live 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } else if (typeof window.runPricingMatrixDataCrawlPass === "function") { 
        window.runPricingMatrixDataCrawlPass(); 
    } 

    // 6. Write current state selections cleanly to localStorage caches 
    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") { 
        window.cacheAndRestoreWizardFormStatesVanilla(false); 
    } 
} 

// Bind cleanly back into universal global window scope references safely 
window.handleBackgroundUpsellTogglePass = handleBackgroundUpsellTogglePass;


// ============================================================================ //
// 🧼 UNIVERSAL STEP 3 VISUAL OVERLAY CLEANER (DOM DESTRUCTION METHOD REPAIRED) //
// ============================================================================ //
function eliminateBlankDescriptionUpsellsFromStep3() { 
    console.log("[Marketplace Guard] Forcefully cleaning Step 3 layout fields..."); 
    
    const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3"); 
    if (!step3Container) return; 
    
    const productCards = step3Container.querySelectorAll('.upsell-market-card'); 
    productCards.forEach(card => { 
        if (!card) return; 
        
        const paragraphNode = card.querySelector("p"); 
        const cardText = card.innerText || ""; 
        let isDescriptionMissing = false; 
        
        if (paragraphNode) { 
            if (paragraphNode.innerText.trim() === "") isDescriptionMissing = true; 
        } else { 
            const textLinesCount = cardText.split('\n').filter(line => line.trim().length > 0).length; 
            if (textLinesCount <= 2 && (cardText.includes("Activate") || cardText.includes("nea_service"))) { 
                isDescriptionMissing = true; 
            } 
        } 
        
        if (isDescriptionMissing) { 
            card.remove(); 
            console.log("[Marketplace Guard] Successfully destroyed empty-description element frame block."); 
        } 
    }); 
} 

window.eliminateBlankDescriptionUpsellsFromStep3 = eliminateBlankDescriptionUpsellsFromStep3; 

document.addEventListener("DOMContentLoaded", () => { 
    const step5ContainerElement = document.getElementById("step-panel-5") || document.querySelector('[data-step="5"]'); 
    if (step5ContainerElement) { 
        step5ContainerElement.style.position = "relative"; 
    } 
    
    const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3"); 
    if (step3Container) { 
        const observer = new MutationObserver((mutationsList) => { 
            for (const mutation of mutationsList) { 
                if (mutation.addedNodes.length > 0) { 
                    eliminateBlankDescriptionUpsellsFromStep3(); 
                    break; 
                } 
            } 
        }); 
        observer.observe(step3Container, { childList: true, subtree: true }); 
        eliminateBlankDescriptionUpsellsFromStep3(); 
    } 
});


// ============================================================================ //
// 📋 PART 2 OF 2: DYNAMIC INTERACTIVE CHECKLIST ENGINE (ZERO-HARDCODE)        //
// ============================================================================ //
window.hasUserScrolledToBottomPoa = window.hasUserScrolledToBottomPoa || false;

/**
 * Universally launches a context-aware operational requirement modal framework.
 */
function launchNewEntrantAuditRequirementsGuideModal() { 
    let modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (!modalRoot) { 
        modalRoot = document.createElement("div"); 
        modalRoot.id = "f4u-price-guide-modal-root"; 
        modalRoot.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;"; 
        document.body.appendChild(modalRoot); 
    } 
    
    // Resolve unified metrics: extract active route service path types 
    const activeServiceKey = window.routeActiveServiceKey || document.getElementById("wizard-route-service-id")?.value || ""; 
    let resolvedConfig = null; 
    
    if (typeof window.getPricingConfiguration === "function" && activeServiceKey) { 
        resolvedConfig = window.getPricingConfiguration(activeServiceKey); 
    } 
    
    // Extract runtime variables directly from the dynamic configuration mapping 
    const modalTitle = resolvedConfig?.modalTitle || "Compliance Requirements Guide"; 
    const modalIntroduction = resolvedConfig?.modalIntro || "Review the mandatory regulatory parameters required for your filing profile below:"; 
    const checklistItemsSource = resolvedConfig?.checklistItems || []; 
    
    let contentRowsHtml = ""; 
    if (checklistItemsSource.length > 0) { 
        checklistItemsSource.forEach(item => { 
            const backgroundFormCheckbox = document.getElementById(item.targetId) || document.querySelector("input[id*='" + item.targetId + "']"); 
            const isChecked = backgroundFormCheckbox ? backgroundFormCheckbox.checked : false; 
            const staticHelpTooltip = "Click selection to sync checkbox value to master application ledger"; 
            
            contentRowsHtml += ` 
                <div style="display: flex; flex-direction: column; gap: 12px; background: rgba(10, 31, 68, 0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border, #e2e8f0); width: 100%; box-sizing: border-box; text-align: left;" title="${staticHelpTooltip}"> 
                    <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--navy, #0a1f44); align-items: center;"> 
                        <div style="display: flex; align-items: center; gap: 10px;"> 
                            <input type="checkbox" id="modal_input_box_${item.id}" style="width: 16px; height: 16px; cursor: pointer; accent-color: #10b981; margin: 0;" ${isChecked ? 'checked' : ''} onchange="window.syncModalCheckboxActionDirectToForm('${item.targetId}', this.checked)"> 
                            <label for="modal_input_box_${item.id}" style="cursor: pointer; margin: 0;">${item.name}</label> 
                        </div> 
                        <span style="color: var(--primary, #10b981); font-family: monospace;">$${Number(item.price || 0).toFixed(2)}</span> 
                    </div> 
                    <span style="font-size: 0.8rem; color: var(--slate, #64748b); display: block; padding-left: 26px;">${item.desc}</span> 
                </div>`; 
        }); 
    } else { 
        contentRowsHtml = ` 
            <div style="text-align: center; padding: 20px; color: var(--slate, #64748b);"> 
                No auxiliary compliance checklists required for this service pathway. 
            </div>`; 
    } 
    
    // Mount the dynamic markup directly inside your fix-mounted overlay element container 
    modalRoot.innerHTML = ` 
        <div style="background: #ffffff; border-radius: 12px; width: 100%; max-width: 650px; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.3); overflow: hidden;"> 
            <div style="background: var(--navy, #0a1f44); color: #ffffff; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;"> 
                <h4 style="margin: 0; font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;"><i class="fa-solid fa-shield"></i> ${modalTitle}</h4> 
                <button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: transparent; border: none; color: #ffffff; font-size: 1.25rem; cursor: pointer; font-weight: 700;" title="Dismiss window overlay">&times;</button> 
            </div> 
            <div style="padding: 20px; overflow-y: auto; font-size: 0.85rem; line-height: 1.5; color: #334155; display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;"> 
                <p style="margin: 0; font-weight: 600; color: var(--navy, #0a1f44); text-align: left;">${modalIntroduction}</p> 
                <div id="modal-pristine-rows-wrapper" style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box;"> 
                    ${contentRowsHtml} 
                </div> 
            </div> 
            <div style="background: #f8fafc; border-top: 1px solid var(--border, #e2e8f0); padding: 12px 20px; display: flex; justify-content: flex-end;"> 
                <button type="button" onclick="window.closeNewEntrantAuditPriceGuideModal()" style="background: var(--navy, #0a1f44); color: #ffffff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 700; cursor: pointer;" title="Acknowledge rules and exit overlay">Got It, Close Guide</button> 
            </div> 
        </div>`; 
        
    modalRoot.style.display = "flex"; 
    modalRoot.style.opacity = "1"; 
}

// Bind cleanly back up to the primary document tree window reference context
window.launchNewEntrantAuditRequirementsGuideModal = launchNewEntrantAuditRequirementsGuideModal;


/**
 * Event bridge linking internal modal checkbox states back to your background forms.
 */
function syncModalCheckboxActionDirectToForm(backgroundFormId, isChecked) { 
    if (!backgroundFormId) return; 
    
    const backgroundCheckboxNode = document.getElementById(backgroundFormId) || document.querySelector("input[id*='" + backgroundFormId + "']") || document.querySelector("input[class*='" + backgroundFormId + "']"); 
    if (backgroundCheckboxNode) { 
        backgroundCheckboxNode.checked = isChecked; 
        // 1. Dispatch a change event bubble so dynamic layout pricing matrices update total values 
        backgroundCheckboxNode.dispatchEvent(new Event('change', { bubbles: true })); 
    } 
    
    // 2. 🧠 🟢 FIXED MEMORY SYNC INTERLOCK: 
    // If the checkbox is toggled inside the modal popup window, force the state scraping engine 
    // to capture it instantly and write it directly to 'wizard_field_[id]'. 
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 
    
    // 3. Fire auxiliary workflow hooks if initialized on page components 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
    if (typeof window.populatePurchaseSummaryReviewMatrix === "function") { 
        window.populatePurchaseSummaryReviewMatrix(); 
    } 
    if (typeof window.executeNewEntrantAuditLiveFulfillmentSync === "function") { 
        window.executeNewEntrantAuditLiveFulfillmentSync(); 
    } 
} 

/**
 * Hides operational modal layer.
 */
function closeNewEntrantAuditPriceGuideModal() { 
    const modalRoot = document.getElementById("f4u-price-guide-modal-root"); 
    if (modalRoot) { 
        modalRoot.style.display = "none"; 
    } 
} 

// Map cleanly back into universal global window scope references safely 
window.launchNewEntrantAuditRequirementsGuideModal = typeof launchNewEntrantAuditRequirementsGuideModal !== "undefined" ? launchNewEntrantAuditRequirementsGuideModal : window.launchNewEntrantAuditRequirementsGuideModal; 
window.syncModalCheckboxActionDirectToForm = syncModalCheckboxActionDirectToForm; 
window.closeNewEntrantAuditPriceGuideModal = closeNewEntrantAuditPriceGuideModal;


// ============================================================================ //
// 📊 MEMORY ENGINE STABILIZER & SELECTION INTERCEPTOR                          //
// ============================================================================ //
(function stabilizeRuntimeSync() { 
    // Execute right away if data is already loaded in memory 
    if (window.CENTRAL_ADDON_DB && Object.keys(window.CENTRAL_ADDON_DB).length > 0) { 
        if (typeof window.renderTargetUpsellsListPanel === "function") { 
            window.renderTargetUpsellsListPanel(); 
        } 
        return; 
    } 

    /** 
     * Syncs marketplace checklist boxes immediately down to global state tokens memory registers 
     * and dynamically injects values into the active transaction summary payloads. 
     * @param {HTMLInputElement} checkboxNode - Active selected marketplace checkbox element. 
     */ 
    function handleBackgroundUpsellTogglePass(checkboxNode) { 
        if (!checkboxNode || typeof checkboxNode !== 'object') return; 
        
        const targetFlagKey = checkboxNode.id; 
        if (!targetFlagKey) { 
            console.warn("[Sync Engine] Toggle failed: Checkbox is missing a valid 'id' attribute."); 
            return; 
        } 
        
        const isChecked = Boolean(checkboxNode.checked); 
        
        // 1. UPDATE THE LIVE GLOBAL MEMORY STATE VARIABLE 
        window[targetFlagKey] = isChecked; 

        // 2. AGNOSTIC PAYLOAD INJECTION ENGINE (ZERO HARDCODING) 
        const windowKeys = Object.keys(window); 
        const activeBillingNodes = []; 
        
        for (let i = 0; i < windowKeys.length; i++) { 
            const key = windowKeys[i]; 
            try { 
                // Guard against cross-origin iframe security errors or null references 
                if (window[key] && typeof window[key] === 'object' && window[key].active_addons_list !== undefined) { 
                    activeBillingNodes.push(key); 
                } 
            } catch (e) { 
                // Silent catch for locked security descriptors on window properties 
            } 
        } 

        activeBillingNodes.forEach(nodeKey => { 
            const targetPayload = window[nodeKey]; 
            if (!targetPayload || !Array.isArray(targetPayload.active_addons_list)) return; 
            
            // Cross-reference global tracking coordinates map backwards to discover the short database slug name 
            const inverseCoordinatesMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {}; 
            const catalogSlug = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === targetFlagKey) || targetFlagKey; 
            
            if (isChecked) { 
                // Avoid creating double entries in the data schema 
                const isAlreadyListed = targetPayload.active_addons_list.some(addon => { 
                    const currentId = (addon && typeof addon === 'object') ? addon.id : addon; 
                    return currentId === catalogSlug; 
                }); 
                if (!isAlreadyListed) { 
                    // Build a dynamic data snapshot of the item properties from our functional attributes 
                    const compiledAddonRecord = { 
                        id: catalogSlug, 
                        name: checkboxNode.getAttribute("data-name") || checkboxNode.getAttribute("data-label") || catalogSlug, 
                        price: parseFloat(checkboxNode.getAttribute("data-price")) || parseFloat(checkboxNode.value) || 0.00 
                    }; 
                    // Inject the complete item configuration into the active transaction matrix list array 
                    targetPayload.active_addons_list.push(compiledAddonRecord); 
                    console.log(`[Sync Engine] Successfully injected active asset payload tracking data: "${catalogSlug}"`); 
                } 
            } else { 
                // Filter out and scrub item options immediately if the user deselects them 
                targetPayload.active_addons_list = targetPayload.active_addons_list.filter(addon => { 
                    const currentId = (addon && typeof addon === 'object') ? addon.id : addon; 
                    return currentId !== catalogSlug; 
                }); 
                console.log(`[Sync Engine] Successfully scrubbed disabled item payload tracking data: "${catalogSlug}"`); 
            } 
        }); 

        // 3. AUTOMATED PRICING MATRIX UPDATES 
        if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
            window.updateDynamicPricingMatrixVanilla(); 
        } 
        if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") { 
            window.cacheAndRestoreWizardFormStatesVanilla(false); 
        } 
    } 

    // Ensure the window scope retains ownership over the operational handler channel 
    window.handleBackgroundUpsellTogglePass = handleBackgroundUpsellTogglePass; 
})();

// ============================================================================ //
// ⚡ MASTER UNIFIED INTERCEPTOR: Global execution interceptor for upsell clicks//
// ============================================================================ //
/**
 * Intercepts selection shifts and synchronizes variables directly down to global trackers.
 * FIXED: Fallback resolution hooks map targets securely using both class properties and element IDs.
 * @param {HTMLInputElement} checkboxElement - Active clicked selection checkbox node.
 */
window.executeUpsellStateToggleIntercept = function(checkboxElement) { 
    if (!checkboxElement) return; 
    
    // 🟢 ATTRIBUTE FALLBACK FIX: Prioritizes target property attributes, fallback straight to element ID metrics 
    const linkedStateProperty = checkboxElement.getAttribute("data-state-property") || checkboxElement.getAttribute("data-state") || checkboxElement.id || checkboxElement.name; 
    if (!linkedStateProperty) { 
        console.warn("[Sync Interceptor] Aborted: Selection element is missing a valid tracking property key."); 
        return; 
    } 
    
    const isChecked = Boolean(checkboxElement.checked); 
    const rawPropertyKey = String(linkedStateProperty).trim(); 

    // 1. Immediately sync the interaction status down to global tracking window variables 
    window[rawPropertyKey] = isChecked; 
    
    // Auto-synchronize flat snake case variations to guarantee cross-file compatibility 
    const flatSnakeKey = rawPropertyKey.toLowerCase().replace(/[-]/g, '_'); 
    window[flatSnakeKey] = isChecked; 
    console.log(`[Upsell State Sync] Variable window.${rawPropertyKey} updated live to: ${isChecked}`); 

    // 2. 🟢 SUMMARY CORES BRIDGING: Simultaneously sync options to the Step 5 review card state arrays 
    if (!window.currentCartState) { 
        window.currentCartState = { addons: [] }; 
    } 
    if (!Array.isArray(window.currentCartState.addons)) { 
        window.currentCartState.addons = []; 
    } 
    
    const addonLabelName = checkboxElement.getAttribute("data-name") || checkboxElement.getAttribute("data-label") || rawPropertyKey; 
    const addonPriceAmount = parseFloat(checkboxElement.getAttribute("data-price")) || parseFloat(checkboxElement.value) || 0.00; 
    
    if (isChecked) { 
        const isCartDuplicate = window.currentCartState.addons.some(addon => addon.name === addonLabelName); 
        if (!isCartDuplicate) { 
            window.currentCartState.addons.push({ name: addonLabelName, price: addonPriceAmount }); 
            console.log(`[Funnel Hook] Synced "${addonLabelName}" into Step 5 cart state list.`); 
        } 
    } else { 
        window.currentCartState.addons = window.currentCartState.addons.filter(addon => addon.name !== addonLabelName); 
        console.log(`[Funnel Hook] Scrubbed "${addonLabelName}" from Step 5 cart state list.`); 
    } 

    // 3. Force visual element card highlight updates 
    if (typeof window.autoSkinSelectedUpsellCards === "function") { 
        window.autoSkinSelectedUpsellCards(); 
    } 

    // 4. Force running invoice total recalculation loops live 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 

    // 5. Populate and refresh your Step 5 purchase summary panels if active on screen 
    if (typeof window.populatePurchaseSummaryReviewMatrix === "function") { 
        window.populatePurchaseSummaryReviewMatrix(); 
    } 

    // 6. Push current session selections down to localStorage cache files 
    if (typeof window.saveWizardFormStatesVanilla === "function") { 
        window.saveWizardFormStatesVanilla(); 
    } 
};


// ============================================================================ //
// 📊 MEMORY ENGINE STABILIZER (ASYNCHRONOUS SYSTEM PROPERTY PROTECTOR)        //
// ============================================================================ //
let currentDbVal = window.CENTRAL_ADDON_DB; 

Object.defineProperty(window, 'CENTRAL_ADDON_DB', { 
    get() { 
        return currentDbVal; 
    }, 
    set(newVal) { 
        currentDbVal = newVal; 
        
        // Recalculate dynamic array tracking tags if data returns 
        if (newVal && typeof newVal === 'object') { 
            window.auxiliaryAddonsArray = Object.keys(newVal); 
        } 
        
        // Re-fire panel layout build engine 
        if (typeof window.renderTargetUpsellsListPanel === "function") { 
            window.renderTargetUpsellsListPanel(); 
        } 
    }, 
    configurable: true, 
    enumerable: true 
}); 

// Re-render when DOM loading lifecycle updates 
document.addEventListener("DOMContentLoaded", () => { 
    if (typeof window.renderTargetUpsellsListPanel === "function") { 
        window.renderTargetUpsellsListPanel(); 
    } 
}); 

// Map your click handler cleanly back to window records fields 
window.handleBackgroundUpsellTogglePass = window.executeUpsellStateToggleIntercept;


// ============================================================================ //
// 📊 UNIFIED DATA-DRIVEN MATRIX ENGINE: UI BINDINGS INJECTIONS (PART 3 OF 3)   //
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
    
    // Synchronize final calculated numbers out to global variables for gateway processors 
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
} 

// 🟢 GLOBAL MEMORY CORES HOOK: Expose the method safely back to global scopes window records 
window.finalizePricingMatrixUiRender = finalizePricingMatrixUiRender; 

// ============================================================================ //
// 📊 UNIFIED DATA-DRIVEN MATRIX ENGINE: CORES PIPELINE RUNNER                 //
// ============================================================================ //
window.updateDynamicPricingMatrixVanilla = function(state) { 
    // 🟢 DATA SYNCHRONIZATION RUNTIME FIX: 
    const activeStatePayload = state || window.currentCartState || {}; 
    
    // 🛡️ RUNTIME PIPELINE GUARD: 
    const isCoreEngineReady = typeof window.executeCleanInvoiceCalculationPass === "function" && typeof window.runPricingMatrixDataCrawlPass === "function"; 
    if (!isCoreEngineReady) { 
        setTimeout(function() { 
            window.updateDynamicPricingMatrixVanilla(state); 
        }, 50); 
        return; 
    } 
    
    // Directly fires straight-line procedures sequentially to completely bypass self-referencing loop locks
    window.executeCleanInvoiceCalculationPass(activeStatePayload); 
    window.runPricingMatrixDataCrawlPass(); 
    
    // Fire the final user interface display bindings pass cleanly 
    if (typeof window.finalizePricingMatrixUiRender === "function") { 
        window.finalizePricingMatrixUiRender(); 
    } else { 
        console.error("[Matrix Engine Pipeline] Critical failure: 'finalizePricingMatrixUiRender' is uninitialized."); 
    } 
}; 

/** 
 * Legacy Alias Support Bridge Matrix 
 */ 
window.updateWizardFinalTotalAmountMatrix = function() { 
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") { 
        window.updateDynamicPricingMatrixVanilla(); 
    } 
};


// ============================================================================ //
// 🧼 STEP 3 MARKETPLACE DUPLICATIONS SHIELD CLEANER                            //
// ============================================================================ //
/**
 * filings4u, LLC - Step 3 Marketplace Eraser Core
 * Automatically runs a clean background loop whenever a user switches onto Step 3,
 * erasing any duplicate Step 2 fields from displaying inside your marketplace.
 */
function cleanStep3MarketplaceDuplications() { 
    const targetContainer = document.getElementById("step-panel-3") || document.getElementById("step-3"); 
    if (!targetContainer) return; 
    
    // Scan all checkboxes inside Step 3 
    const productCheckboxes = targetContainer.querySelectorAll('input[type="checkbox"]'); 
    productCheckboxes.forEach(box => { 
        if (!box) return; 
        
        const boxId = String(box.id).toLowerCase(); 
        const boxName = String(box.name).toLowerCase(); 
        const boxClass = String(box.className).toLowerCase(); 
        
        // 🟢 THE FIX: Check for underscores, hyphens, AND compliance utility classes 
        const isStep2Element = boxId.startsWith("nea_") || boxId.startsWith("nea-") || boxName.startsWith("nea_") || boxName.startsWith("nea-") || boxClass.includes("nea-service") || boxClass.includes("nea_service"); 
        
        if (isStep2Element) { 
            // Trace all the way up to find the outer marketplace box panel container element 
            const marketCardWrap = box.closest(".upsell-market-card") || box.closest(".card") || box.closest(".wizard-input-group") || box.parentElement?.parentElement; 
            if (marketCardWrap) { 
                marketCardWrap.remove(); 
                console.log(`[Marketplace Shield] Safely removed Step 2 item card element: ${box.id}`); 
            } 
        } 
    }); 
}

window.cleanStep3MarketplaceDuplications = cleanStep3MarketplaceDuplications;


// ============================================================================ //
// 📡 STEP 3 PANEL TRANSITION CLEANER OBSERVER MOUNT MATRIX                      //
// ============================================================================ //

// Attach a smooth layout observer to clean Step 3 the exact split-second it displays 
const step3TargetPanel = document.getElementById("step-panel-3") || document.getElementById("step-3"); 

if (step3TargetPanel) { 
    const layoutObserver = new MutationObserver(() => { 
        if (step3TargetPanel.style.display !== "none") { 
            // 🟢 FIXED MARGIN LAYER: Disconnect the observer instance background hooks instantly 
            // before deleting elements to block recursive style change callback cascades. 
            if (window.step3LayoutObserverInstance) { 
                window.step3LayoutObserverInstance.disconnect(); 
            } 
            console.log("[Marketplace Shield] Panel transition captured active. Initiating structural cleanup pass..."); 
            
            // Fire multiple millisecond micro-burst sweeps to catch delayed asynchronous form compiles safely 
            setTimeout(cleanStep3MarketplaceDuplications, 10); 
            setTimeout(cleanStep3MarketplaceDuplications, 50); 
            setTimeout(cleanStep3MarketplaceDuplications, 150); 
        } 
    }); 
    
    layoutObserver.observe(step3TargetPanel, { attributes: true, attributeFilter: ["style"] }); 
    window.step3LayoutObserverInstance = layoutObserver; 
} 

// Export methods cleanly back into global window records namespaces 
window.renderOnboardingPlanOverviewCard = typeof window.renderOnboardingPlanOverviewCard !== "undefined" ? window.renderOnboardingPlanOverviewCard : null; 
window.cleanStep3MarketplaceDuplications = cleanStep3MarketplaceDuplications;
