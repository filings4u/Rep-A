// ============================================================================ //
// ðŸ—ƒï¸ MASTER MARKETPLACE DATABASE REFERENCE (ISOLATED RUNTIME CONFIGURATION)   //
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
    { id: "ny-hut-permit", name: "New York HUT Highway Use Tax Permit", price: 115.00, border: "State Permits", description: "Acquires mandatory highway use tax authorization parameters to operate over New York transport networks." },
    { id: "nm-wdt-permit", name: "New Mexico WDT Weight-Distance Permit", price: 95.00, tier: "State Permits", description: "Establishes weight distance distance compliance variables cleanly for operations traversing New Mexico state lines." },
    { id: "or-weight-receipt", name: "Oregon Weight Receipt & Bond Setup", price: 195.00, tier: "State Permits", description: "Secures active highway mileage bond parameters to authorize operational visibility inside Oregon." }
  ],
  // --- SERVICE CATEGORY 3: CORPORATION SETUP & TAX EXEMPTIONS ---
  "corp-formation": [
    { id: "ein-tax-id-expedite", name: "Federal EIN Tax ID Assignment Expedite", price: 65.00, tier: "Corporate Setup", description: "Accelerates your federal employer identification number acquisition to clear business bank account setups instantly." },
    { id: "llc-operating-agreement", name: "Custom LLC Operating Agreement Draft", price: 85.00, tier: "Corporate Setup", description: "Structures clear corporate ownership rules and distribution tracking benchmarks customized to your core team parameters." },
    { id: "s-corp-election-filing", name: "IRS Subchapter S-Corporation Election Filing", price: 145.00, tier: "Tax Strategy", description: "Registers subchapter s classification status to protect earnings streams from dual corporate taxation penalties." },
    { id: "corp-by-laws-package", name: "Corporate By-Laws & Share Certificates Set", price: 95.00, tier: "Corporate Setup", description: "Compiles formal organizational bylaws alongside authenticated certificates to secure investment parameters." },
    { id: "dun-bradstreet-setup", name: "Dun & Bradstreet Business Credit Profile Setup", price: 175.00, tier: "Corporate Setup", description: "Launches your unique DUNS identification lookup profile to jumpstart institutional credit score tracking." },
    { id: "trademark-name-lock", name: "Corporate Trademark Name Search & Lock", price: 325.00, tier: "Enterprise Security", description: "Full multi-jurisdictional availability audits to securely protect your corporate brand logo text parameters." }
  ]
};

// ============================================================================ //
// ðŸŽ¯ ROUTE ALIAS ALIGNMENT MATRIX EXTRACTION LAYER                            //
// ============================================================================ //
// Helper to perform safe deep isolation copies of database configuration frames
const deepCloneCatalogBranch = (sourceBranch) => {
  if (!sourceBranch) return [];
  try {
    return typeof structuredClone === 'function' ? structuredClone(sourceBranch) : JSON.parse(JSON.stringify(sourceBranch));
  } catch (e) {
    return sourceBranch.map(item => Object.assign({}, item));
  }
};

// ðŸŸ¢ FIXED ROUTE EXTRACTION SEPARATION: 
// Assign independent deep clones to completely sandbox active memory arrays
window.MASTER_UPSELLS_CATALOG["llc-formation"] = deepCloneCatalogBranch(window.MASTER_UPSELLS_CATALOG["corp-formation"]);
window.MASTER_UPSELLS_CATALOG["corporations"] = deepCloneCatalogBranch(window.MASTER_UPSELLS_CATALOG["corp-formation"]);

console.log("[Master Catalog Database] Route aliases successfully initialized via decoupled isolation deep clones.");

// ============================================================================ //
// ðŸ—ƒï¸ UPSELLS ENGINE ROUTER DATABASE CATEGORY SCHEMA CONFIGURATION             //
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
    { id: "boc3-filing-broker", name: "BOC-3 Process Agent Filing", price: 75.00, billing: " flat", desc: "Mandatory federal processing requirement for Broker configurations. Designates process service agents across all states to guarantee compliance." },
    { id: "bmc85-quote", name: "BMC-85 Trust Fund ($75K) Request", price: 0.00, billing: " quote", desc: "Automates routing checks into partner underwriting matrices to secure a verified premium quote for your mandatory broker security trust allocation." },
    { id: "eo-liability", name: "Liability Insurance ($1M E&O) Quote", price: 0.00, billing: " quote", desc: "Secures specialized pricing options for Professional Errors and Emissions liability plans to shield your cargo routing platform from structural lawsuits." },
    { id: "ein-procure-broker", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." },
    { id: "corp-minutes-broker", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
    { id: "op-agreement-broker", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
    { id: "corp-bylaws-broker", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
    { id: "corp-resolutions-broker", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
    { id: "comp-monitor-broker", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." }
  ],
  "trucker": [
    { id: "fmcsa-audit", name: "FMCSA Safety Audit Preparation Kit", price: 149.00, billing: " flat", desc: "Compiles driver files, vehicle maintenance frameworks, and fuel logs into an audit-ready format to guarantee passing your new-entrant regulatory evaluation." },
    { id: "boc3-filing-trucker", name: "BOC-3 Process Agent Filing", price: 75.00, billing: " flat", desc: "Mandatory federal processing requirement for Trucker configurations. Designates process service agents across all states to guarantee compliance." },
    { id: "bipd-quote", name: "$750,000 BIPD Public Liability Quote", price: 0.00, billing: " quote", desc: "Triggers partner routing pipelines to pull premium options for public liability coverages required for FMCSA operating authority activation." },
    { id: "cargo-quote", name: "$100,000 Motor Cargo Carrier Quote", price: 0.00, billing: " quote", desc: "Pulls tailored carrier pricing matrices to cover high-value customer freight assets against damage, loss, or transit destruction incidents." },
    { id: "ein-procure-trucker", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant lines." },
    { id: "corp-minutes-trucker", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
    { id: "op-agreement-trucker", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
    { id: "corp-bylaws-trucker", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
    { id: "corp-resolutions-trucker", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
    { id: "comp-monitor-trucker", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." }
  ],
  "generic": [
    { id: "ra-shield-gen", name: "Registered Agent Service", price: 75.00, billing: "/ yr", desc: "Secures state compliance mandates, processes official legal notices, and shields your corporate entity's private physical address layout from public record databases." },
    { id: "comp-monitor-gen", name: "Annual Compliance Monitoring", price: 99.00, billing: "/ yr", desc: "Tracks state filing thresholds, automates franchise tax warning notices, and schedules mandatory annual declaration sheets ahead of system deadlines." },
    { id: "corp-resolutions-gen", name: "Corporate Resolutions Framework", price: 49.00, billing: " flat", desc: "Generates standardized tracking sheets certifying corporate execution steps, internal allocation choices, and executive spending sign-offs." },
    { id: "corp-minutes-gen", name: "Corporate Minutes Book Ledger", price: 59.00, billing: " flat", desc: "Provides verified internal minutes frameworks to log dynamic board discussions, ownership updates, and regulatory audit defenses." },
    { id: "op-agreement-gen", name: "Custom Operating Agreement", price: 89.00, billing: " flat", desc: "Crucial for LLC formations. Encrypts membership hierarchies, dictates capital funding terms, and specifies internal asset distributions." },
    { id: "corp-bylaws-gen", name: "Corporate Bylaws Agreement", price: 89.00, billing: " flat", desc: "Mandatory structural framework for Corporation types. Explicitly governs voting distributions, officer roles, and equity issuance rules." },
    { id: "good-standing-gen", name: "Certificate of Good Standing", price: 45.00, billing: " flat", desc: "Secures certified regulatory verification from the jurisdiction state registry validating that your active entity is compliant and authorized to contract." },
    { id: "ein-procure-gen", name: "Employer Identification Number (EIN)", price: 75.00, billing: " flat", desc: "Secures your federal tax identifier token from the IRS to authorize business bank setups, employee onboarding loops, and merchant payment processing lines." }
  ]
};

// ðŸŸ¢ FIXED IMMUTABLE METADATA LAYER:
// Deeply freeze parent category keys to give calculation engines exact semantic classifications
Object.keys(window.UPSELLS_ROUTER_DATABASE).forEach(categoryKey => {
  window.UPSELLS_ROUTER_DATABASE[categoryKey].forEach(item => {
    Object.defineProperty(item, 'assignedCategoryGroup', {
      value: String(categoryKey),
      writable: false,
      enumerable: true,
      configurable: false
    });
  });
});

console.log("[Master Catalog Schema] Category boundaries frozen and secured perfectly.");

// ============================================================================ //
// ðŸŽ¯ DYNAMIC LIFECYCLE EXTENSION ROUTING INTERLOCKS                            //
// ============================================================================ //

// Ensure the global database context exists securely before updating keys
window.UPSELLS_ROUTER_DATABASE = window.UPSELLS_ROUTER_DATABASE || window.MASTER_UPSELLS_CATALOG || {};

// Helper to isolate array mutations safely using a deep cloning layer
const duplicateDatabaseCatalogBranch = (sourceArray) => {
  if (!sourceArray) return [];
  try {
    return typeof structuredClone === 'function' ? structuredClone(sourceArray) : JSON.parse(JSON.stringify(sourceArray));
  } catch (e) {
    return sourceArray.map(item => Object.assign({}, item));
  }
};

// ðŸŸ¢ FIXED ALIAS DECOUPLING:
// Map explicit service slugs to isolated deep clones to prevent cross-step mutation leaks
const targetedFormationsSource = window.UPSELLS_ROUTER_DATABASE["formations"] || window.UPSELLS_ROUTER_DATABASE["corp-formation"];

window.UPSELLS_ROUTER_DATABASE["llc-formation"] = duplicateDatabaseCatalogBranch(targetedFormationsSource);
window.UPSELLS_ROUTER_DATABASE["corporations"] = duplicateDatabaseCatalogBranch(targetedFormationsSource);

console.log("[Router Database Schema] Successfully initialized runtime data elements configuration keys via decoupled clones.");

// ============================================================================ //
// ðŸ“Š LAYER 2: PROGRAMMATIC LOOKUP ROUTER UTILITY ENGINE                         //
// ============================================================================ //

/**
 * Pure Dynamic Upsell Selector Utility.
 * Resolves packages programmatically without hardcoded fallback routing bypass arrays.
 * @param {string} routeKey - Category path key string (e.g. window.routeActiveServiceKey)
 * @returns {Array} List of upsell records matching the active category safely
 */
function getScopedUpsellsDataset(routeKey) {
  const database = window.UPSELLS_ROUTER_DATABASE || window.MASTER_UPSELLS_CATALOG;
  if (!database) {
    console.warn("[Upsell Lookup Guard] window.UPSELLS_ROUTER_DATABASE is not yet initialized.");
    return [];
  }

  const normalizedKey = String(routeKey || "").toLowerCase().trim();

  // 1. Strict property query validation using clear prototype inspection routines
  if (Object.prototype.hasOwnProperty.call(database, normalizedKey)) {
    return database[normalizedKey];
  }

  // 2. ZERO-HARDCODE FALLBACK RECOVERY ALGORITHM:
  // Look for cross-file keyword associations instead of grabbing the first key
  const discoverableKeys = Object.keys(database);
  const routeWords = normalizedKey.split('-');

  // Pass 1: Try dynamic keyword matching based on shared root words (e.g., "authority", "formation")
  for (let i = 0; i < discoverableKeys.length; i++) {
    const potentialKey = discoverableKeys[i].toLowerCase();
    const isCoreUtilityKey = ["llc-formation", "corporations", "formations", "broker", "trucker", "generic", "dot-authority", "new-entrant-audit", "corp-formation"].includes(potentialKey);
    
    if (isCoreUtilityKey) {
      const matchesKeyword = routeWords.some(word => word.length > 3 && potentialKey.includes(word));
      if (matchesKeyword && Array.isArray(database[discoverableKeys[i]]) && database[discoverableKeys[i]].length > 0) {
        console.log(`[Upsell Lookup Route] Dynamic keyword match found. Mapping "${normalizedKey}" cleanly to schema: "${discoverableKeys[i]}"`);
        return database[discoverableKeys[i]];
      }
    }
  }

  // Pass 2: Strict fallback catch-all if no keywords match. Returns the first valid non-empty array record.
  for (let i = 0; i < discoverableKeys.length; i++) {
    const potentialKey = discoverableKeys[i];
    const isSystemKey = !potentialKey.startsWith("__") && typeof database[potentialKey] !== "function";
    if (isSystemKey && Array.isArray(database[potentialKey]) && database[potentialKey].length > 0) {
      console.log(`[Upsell Lookup Route] Fallback match applied. Mapping "${normalizedKey}" to schema: "${potentialKey}"`);
      return database[potentialKey];
    }
  }

  return [];
}

// Expose universally to the window object layer safely
window.getScopedUpsellsDataset = getScopedUpsellsDataset;

// ============================================================================ //
// ðŸŸ¢ CENTRAL ROUTER ACCESS POINT (CATALOG DATA SEPARATION FILTER)              //
// ============================================================================ //

/**
 * Resolves exact items strictly by the customer's chosen tracking route.
 */
function getCategoryAddonsByServiceKey(serviceKey) {
  // Safety check: Explicitly handle cases where the global catalog isn't loaded yet
  if (typeof window.MASTER_UPSELLS_CATALOG === "undefined" || window.MASTER_UPSELLS_CATALOG === null) {
    console.warn("[Step 3 Catalog] Master catalog database is currently uninstantiated. Initializing safe allocation matrix.");
    window.MASTER_UPSELLS_CATALOG = {};
  }

  // Resolve parameter slugs programmatically without forcing a hardcoded index layout string
  const lookupKey = String(serviceKey || window.routeActiveServiceKey || window.currentServiceKey || "").toLowerCase().trim();
  let targetAddonsList = [];

  // 1. Prioritize precise matching schema collections first
  if (lookupKey && window.MASTER_UPSELLS_CATALOG[lookupKey]) {
    targetAddonsList = window.MASTER_UPSELLS_CATALOG[lookupKey];
  } 
  else {
    // ðŸŸ¢ FIXED ADAPTIVE CONTEXT EXTRACTION:
    // Fall back to clean semantic categories instead of a blind, random array-grab loop.
    // This stops Corporate, Trucker, and Broker item datasets from ever conflicting or crossing!
    if (lookupKey.includes("corp") || lookupKey.includes("llc") || lookupKey.includes("formation")) {
      targetAddonsList = window.MASTER_UPSELLS_CATALOG["corp-formation"] || [];
    } else if (lookupKey.includes("audit") || lookupKey.includes("entrant")) {
      targetAddonsList = window.MASTER_UPSELLS_CATALOG["new-entrant-audit"] || [];
    } else if (lookupKey.includes("dot") || lookupKey.includes("authority") || lookupKey.includes("truck")) {
      targetAddonsList = window.MASTER_UPSELLS_CATALOG["dot-authority"] || [];
    } else {
      // absolute structural safe boundary fallback
      const activeDatabaseKeys = Object.keys(window.MASTER_UPSELLS_CATALOG);
      if (activeDatabaseKeys.length > 0) {
        targetAddonsList = window.MASTER_UPSELLS_CATALOG[activeDatabaseKeys[0]] || [];
      }
    }
  }

  // Deep clone elements inside local dictionary construction to guarantee zero state leakage
  const dictionaryPayload = {};
  targetAddonsList.forEach(item => {
    if (item && item.id) {
      dictionaryPayload[item.id] = typeof structuredClone === 'function' ? 
        structuredClone(item) : JSON.parse(JSON.stringify(item));
    }
  });

  return dictionaryPayload;
}

// Instantiate all variable parameters down into standard tracking scopes safely
if (typeof window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP !== "undefined" && window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP !== null) {
  Object.values(window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP).forEach(k => {
    if (window[k] === undefined) {
      window[k] = false;
    }
  });
} else {
  console.log("[Step 3 Context] Initializing baseline global tracking states...");
  window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
}

// Bind cleanly back into universal global window scope references safely
window.getCategoryAddonsByServiceKey = getCategoryAddonsByServiceKey;

// ============================================================================ //
// ðŸŽ¨ PART 1: NEUTRAL SELECTION SKINNING MODULE (STEP 3 VIEW ISOLATION)        //
// ============================================================================ //

/**
 * Sweeps Step 3 cards and applies neutral slate background skin styles dynamically.
 */
function autoSkinSelectedUpsellCards() {
  // Scope Restriction: Limits evaluation strictly to Step 3 panels to leave Step 2 layouts untouched
  const step3Checkboxes = document.querySelectorAll(
    '#step-panel-3 input[type="checkbox"], #step-3 input[type="checkbox"], .upsell-checkbox'
  );

  step3Checkboxes.forEach(checkbox => {
    if (!checkbox) return;

    // Trace the closest parent product container card strictly within Step 3 paths
    const parentCard = checkbox.closest('.upsell-market-card') || checkbox.closest('.card') || checkbox.parentElement?.parentElement;
    
    if (parentCard) {
      if (checkbox.checked) {
        checkbox.style.setProperty("border-color", "#64748b", "important");
        parentCard.style.setProperty("border", "1px solid #cbd5e1", "important"); // Standard slate grey focus edge
        parentCard.style.setProperty("background-color", "#f8fafc", "important"); // Muted neutral background tint
      } else {
        checkbox.style.removeProperty("border-color");
        parentCard.style.setProperty("border", "1px solid #e2e8f0", "important");
        parentCard.style.setProperty("background-color", "#ffffff", "important");
      }
    }
  });
}

// ðŸ“¦ GLOBAL SCOPE REFERENCE EXPOSURE
window.autoSkinSelectedUpsellCards = autoSkinSelectedUpsellCards;

// Safe Intercept: Wrap baseline checkbox toggle pass if initialized on the window scope
const baselineUpsellTogglePass = window.handleBackgroundUpsellTogglePass;
window.handleBackgroundUpsellTogglePass = function(checkboxElement) {
  if (typeof baselineUpsellTogglePass === "function") {
    baselineUpsellTogglePass(checkboxElement);
  }
  // Instantly refresh layout skin states when a user clicks an option card
  autoSkinSelectedUpsellCards();
};

window.triggerStepThreeUiSkinPass = function() {
  console.log("[Step 3 Skinner] Form canvas mounted. Executing neutral card skin alignment pass...");
  autoSkinSelectedUpsellCards();
};

// ============================================================================ //
// ðŸ—ºï¸ STEP 3 RENDER TARGET SYNCHRONIZATION BRIDGE (ANTI-FLICKER REBOOT)        //
// ============================================================================ //
function autoInitializeStep3MarketplaceCatalog() {
  const step3PanelContainer = document.getElementById("step-panel-3") || document.getElementById("step-3");
  if (!step3PanelContainer) {
    console.warn("[Marketplace Bridge Abort] Target step 3 master visibility panel not found in DOM tree.");
    return;
  }

  let htmlMarketplaceBox = document.getElementById("wizard-dynamic-upsells-render-target");
  if (!htmlMarketplaceBox) {
    console.log("[Marketplace Bridge] Target sub-grid container missing. Mounting isolated canvas...");
    htmlMarketplaceBox = document.createElement("div");
    htmlMarketplaceBox.id = "wizard-dynamic-upsells-render-target";
    htmlMarketplaceBox.className = "isolated-marketplace-grid-canvas";
    htmlMarketplaceBox.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; box-sizing: border-box; clear: both; margin-bottom: 30px;";
    
    if (step3PanelContainer.firstChild) {
      step3PanelContainer.insertBefore(htmlMarketplaceBox, step3PanelContainer.firstChild);
    } else {
      step3PanelContainer.appendChild(htmlMarketplaceBox);
    }
  }

  // ðŸ›¡ï¸ BULLETPROOF ANTI-WIPE GUARD: Prevent destroying server-rendered prices
  const hasExistingPrices = step3PanelContainer.querySelector('.price, [class*="price"], .product-price, .upsell-price');
  if (hasExistingPrices && !window.FORCE_REFRESH_MARKETPLACE) {
    console.log("[Marketplace Bridge] Server-rendered prices detected. Aborting wipe sequence to preserve prices.");
    // Run skin/styling updates instantly without async frame breaks
    autoSkinSelectedUpsellCards();
    return;
  }

  const activeCatalog = window.MASTER_UPSELLS_CATALOG || window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
  const urlParams = new URLSearchParams(window.location.search);
  const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim();

  if (htmlMarketplaceBox) {
    // Only clear if we actually intend to redraw the entire DOM tree
    htmlMarketplaceBox.innerHTML = "";
    
    if (typeof window.renderTargetUpsellsListPanel === "function") {
      window.renderTargetUpsellsListPanel(activeCatalog, htmlMarketplaceBox);
    } else {
      // ðŸŸ¢ FIXED STRUCTURAL CONTRACT PROTECTION:
      // Default to a verified empty list array instead of passing the raw master parent catalog object.
      // This enforces separation and clears target rendering runtime errors!
      let structuredItemsList = [];
      
      if (activeCatalog[serviceSlug]) {
        structuredItemsList = activeCatalog[serviceSlug];
      } else {
        const matchingKey = Object.keys(activeCatalog).find(k => k.toLowerCase() === serviceSlug);
        if (matchingKey) {
          structuredItemsList = activeCatalog[matchingKey];
        } else if (typeof window.getCategoryAddonsByServiceKey === "function") {
          structuredItemsList = window.getCategoryAddonsByServiceKey(serviceSlug);
        }
      }

      if (typeof window.extractCatalogAddonsDynamically === "function" && !Array.isArray(structuredItemsList)) {
        structuredItemsList = window.extractCatalogAddonsDynamically(structuredItemsList);
      }

      // Convert item mapping object configurations safely into standard arrays if necessary
      if (structuredItemsList && !Array.isArray(structuredItemsList) && typeof structuredItemsList === 'object') {
        structuredItemsList = Object.values(structuredItemsList);
      }

      if (typeof window.buildMarketplaceCardsHtml === "function") {
        const compiledHtmlContent = window.buildMarketplaceCardsHtml(structuredItemsList);
        if (compiledHtmlContent && compiledHtmlContent.trim() !== "") {
          htmlMarketplaceBox.innerHTML = compiledHtmlContent;
        } else {
          htmlMarketplaceBox.innerHTML = `
            <div style="grid-column: span 2; text-align: center; padding: 24px; color: #64748b; font-weight: 500;">
              No additional operational up-sells are required for your selected service profile parameters.
            </div>`;
        }
      } else {
        console.error("[Marketplace Bridge Fatal] Critical failure: No valid component layout builder found.");
      }
    }

    if (typeof window.cleanStep3MarketplaceDuplications === "function") {
      window.cleanStep3MarketplaceDuplications();
    }

    // ðŸŸ¢ SYNCHRONOUS INITIALIZATION INITIALIZER:
    // Execute styling updates synchronously here to lock values in place before the calculations layer triggers.
    autoSkinSelectedUpsellCards();
  }
}

window.isStep3PanelRenderPassCurrentlyActive = false;

window.executeStepThreeUpsellStreaming = function() {
  if (window.isStep3PanelRenderPassCurrentlyActive) return;
  window.isStep3PanelRenderPassCurrentlyActive = true;
  
  try {
    if (typeof initializeStep4MutationObserverTracking === "function") {
      initializeStep4MutationObserverTracking();
    }
    autoInitializeStep3MarketplaceCatalog();
  } catch (err) {
    console.error("[Step 3 Critical Crash Exception]:", err);
  } finally {
    setTimeout(() => {
      window.isStep3PanelRenderPassCurrentlyActive = false;
    }, 150); // Slightly prolonged lock to prevent rapid consecutive re-renders
  }
};

window.autoInitializeStep3MarketplaceCatalog = autoInitializeStep3MarketplaceCatalog;
window.executeStepThreeUpsellStreaming = window.executeStepThreeUpsellStreaming;

// ============================================================================ //
// ðŸ“Š PART 1 OF 3: DYNAMIC SCHEMA ADD-ON INGESTION ENGINE                      //
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
            unifiedCatalogItems[productKey] = typeof structuredClone === 'function' ? 
              structuredClone(item) : JSON.parse(JSON.stringify(item));
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
        unifiedCatalogItems[productKey] = typeof structuredClone === 'function' ? 
          structuredClone(targetNode) : JSON.parse(JSON.stringify(targetNode));
        scanTreeRecursively(targetNode);
      } else {
        scanTreeRecursively(targetNode);
      }
    });
  }

  scanTreeRecursively(databaseSource);
  visitedNodes.clear();

  // ðŸŸ¢ FIXED SYSTEM SPECIFICATION: Always return a flat array to prevent structural data-shape mismatches!
  return Object.values(unifiedCatalogItems);
}

// ============================================================================ //
// ðŸ“Š PART 2 OF 3: WORKSPACE COMPONENT STRING BUILDER (ANTI-FLICKER PRO)       //
// ============================================================================ //
function buildMarketplaceCardsHtml(catalogItems) {
  // ðŸŸ¢ FIXED: Forced grid-column span 2 for absolute 100% full-width expansion & updated description text
  const stepHeaderHtml = `
    <div style="grid-column: span 2; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px; width: 100%; box-sizing: border-box; clear: both;"> 
      <h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; margin: 0 0 6px 0;">3. Add-Ons</h3> 
      <p style="color: #64748b; font-size: 0.88rem; margin: 0; line-height: 1.5;">Maximize your protection, streamline banking requirements, and ensure corporate liability shields remain secure.</p> 
    </div>

  `;

  let accumulatorHtml = "";

  // Normalize inputs safely into a pure array dataset structure
  let processedItemsList = [];
  if (catalogItems && typeof catalogItems === 'object') {
    processedItemsList = Array.isArray(catalogItems) ? catalogItems : Object.values(catalogItems);
  }

  // SCENARIO 1: Handle layout state frames if the marketplace catalog is empty
  if (processedItemsList.length === 0) {
    console.warn("[Marketplace Skinner] Provided catalog items parameters are un-iterable or empty.");
    return `
      ${stepHeaderHtml}
      <div style="grid-column: span 2; text-align: center; padding: 24px; color: #64748b; font-weight: 500;"> 
        No additional operational up-sells are required for your selected service profile parameters. 
      </div> 
      <div class="wizard-footer-action-row" style="grid-column: span 2; display: flex; justify-content: space-between; align-items: center; width: 100% !important; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border, #e2e8f0); clear: both; box-sizing: border-box;"> 
        <button type="button" class="btn-wizard-nav-back" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;"> 
          <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Previous Step 
        </button> 
        <button type="button" class="btn-wizard-main btn-wizard-nav-next" onclick="if(typeof window.goToNextWizardStep === 'function') { window.goToNextWizardStep(4, event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.15);"> 
          Continue to PoA <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i> 
        </button> 
      </div>
    `;
  }

  // SCENARIO 2: Catalog has active data items. Inject the full-width header block first.
  accumulatorHtml += stepHeaderHtml;

  const coordinateMaps = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};

  processedItemsList.forEach(item => {
    if (!item || !item.id) return;
    const catalogSlug = item.id;
    const itemDesc = item.description || item.desc || "";
    const trackingKey = coordinateMaps[catalogSlug] || catalogSlug;
    
    const storedFieldState = localStorage.getItem(`wizard_field_${trackingKey}`) || localStorage.getItem(`wizard_field_${catalogSlug}`);
    let isChecked = false;
    
    if (storedFieldState !== null) {
      isChecked = (storedFieldState === "true" || storedFieldState === "yes" || storedFieldState === true);
    } else {
      const flatSnakeKey = String(trackingKey).toLowerCase().replace(/[-]/g, '_');
      if (Object.prototype.hasOwnProperty.call(window, trackingKey)) {
        isChecked = (window[trackingKey] === true || window[trackingKey] === "yes" || String(window[trackingKey]) === "true");
      } else if (Object.prototype.hasOwnProperty.call(window, flatSnakeKey)) {
        isChecked = (window[flatSnakeKey] === true || window[flatSnakeKey] === "yes" || String(window[flatSnakeKey]) === "true");
      }
    }

    const itemName = item.label || item.name || "Optional Add-on";

    // Clean price extraction strings prior to parsing
    let cleanPrice = item.price;
    if (typeof cleanPrice === 'string') {
      cleanPrice = cleanPrice.replace(/[^0-9.]/g, '');
    }
    const itemPrice = parseFloat(cleanPrice) || 0;
    const displayPrice = itemPrice > 0 ? `$${itemPrice.toFixed(2)}` : 'Included';

    accumulatorHtml += `
      <div class="upsell-market-card" data-id="${catalogSlug}" style="background:#ffffff; border:1px solid var(--border, #e2e8f0); padding:16px; border-radius:8px; display:flex; gap:16px; align-items:center; justify-content:space-between; box-sizing:border-box; width:100%; transition:all 0.2s ease; margin-bottom: 12px;"> 
        <div style="display:flex; flex-direction:column; gap:4px; min-width:0; flex:1;"> 
          <span style="font-weight:800; font-size:1rem; color:var(--navy, #0a1f44);">${itemName}</span> 
          <p style="margin:0; font-size:0.85rem; color:var(--slate, #64748b); line-height:1.4;">${itemDesc}</p> 
        </div> 
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px; flex-shrink:0;"> 
          <!-- ANTI-TIMING FLASH ENCLOSURE BLOCK --> 
          <span class="upsell-price-container" style="font-family:monospace; font-weight:700; color:var(--primary, #10b981); font-size:1.1rem;"> 
            <span class="upsell-price-display upsell-card-price-render" data-base-price="${itemPrice}" style="display:none !important;"></span> 
            <span class="static-persistent-price-label">${displayPrice}</span> 
          </span> 
          <label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; font-weight:700; color:var(--navy, #0a1f44); cursor:pointer; margin:0;"> 
            <input type="checkbox" class="upsell-checkbox" id="${trackingKey}" data-id="${trackingKey}" data-price="${itemPrice}" data-name="${itemName}" style="width:18px; height:18px; cursor:pointer;" ${isChecked ? 'checked' : ''} onchange="if(typeof window.executeUpsellStateToggleIntercept === 'function') { window.executeUpsellStateToggleIntercept(this); } else if(typeof window.handleBackgroundUpsellTogglePass === 'function') { window.handleBackgroundUpsellTogglePass(this); }"> Activate 
          </label> 
        </div> 
      </div>
      
 <style>
  /* ðŸ“± MOBILE VIEWPORT BREAKPOINT: PREMIUM STEP 3 CARD OPTIMIZATION */
  @media (max-width: 600px) {
    
    /* 1ï¸âƒ£ OVERRIDE PARENT GRID RULES COHESIVELY */
    div[style*="display: grid;"],
    div[id*="marketplace"],
    #wizard-account-generation-form {
      grid-template-columns: 1fr !important;
      display: block !important;
      width: 100% !important;
    }

    /* 2ï¸âƒ£ THE COMPLIANCE CARD MATRIX HUB */
    /* Remodels each up-sell envelope block into a premium mobile card layout */
    .upsell-market-card,
    div[class*="upsell-market-card"],
    div[style*="background:#ffffff; border:1px solid"] {
      display: flex !important;
      flex-direction: column !important; /* Stack copy text on top of functional inputs row */
      align-items: flex-start !important; /* Forces copy alignments to match the left margin */
      text-align: left !important; /* Left-align the text layout for a highly professional look */
      padding: 20px !important;
      background: #ffffff !important;
      border: 1px solid #e2e8f0 !important;
      border-radius: 12px !important; /* Slightly more rounded corners to look elegant on phone screens */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03) !important; /* Elegant modern fluid shadows drop */
      width: 100% !important;
      box-sizing: border-box !important;
      margin-bottom: 16px !important;
    }

    /* 3ï¸âƒ£ TEXT DESCRIPTION WRAPPING COMPONENT */
    /* Removes empty space fields to lock title text and descriptions closer together */
    .upsell-market-card div[style*="display:flex; flex-direction:column; gap:4px;"] {
      display: flex !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      text-align: left !important;
      width: 100% !important;
      gap: 6px !important;
    }

    /* Title size and weight emphasis controls */
    .upsell-market-card span[style*="font-weight:800"] {
      font-size: 1.05rem !important;
      color: #0a1f44 !important;
      letter-spacing: -0.2px !important;
    }

    /* Paragraph font optimization tracking rules */
    .upsell-market-card p {
      font-size: 0.825rem !important;
      line-height: 1.45 !important;
      color: #64748b !important;
      margin: 0 !important;
    }

    /* 4ï¸âƒ£ THE LOWER INPUTS TIERS: SIDE-BY-SIDE FIXED HORIZONTAL VIEWPORT TRACKING */
    /* Transforms the lower price text element and active checkbox button back onto a clean side-by-side row */
    .upsell-market-card div[style*="display:flex; flex-direction:column; align-items:flex-end;"] {
      display: flex !important;
      flex-direction: row !important; /* ðŸ”¥ MANDATORY: Moves the Price and the Activate checkbox side-by-side */
      justify-content: space-between !important; /* Pushes price to the far left, and checkbox to the far right */
      align-items: center !important;
      width: 100% !important;
      border-top: 1px solid #f1f5f9 !important; /* Clean, subtle horizontal divider line separating copy text row from options tier */
      margin-top: 14px !important;
      padding-top: 14px !important;
    }

    /* Price Label Typography Alignment */
    .upsell-market-card .upsell-price-container,
    .upsell-market-card span[style*="font-family:monospace"] {
      font-size: 1.15rem !important;
      font-weight: 800 !important;
      color: #10b981 !important; /* Brand emerald text highlights */
      display: inline-block !important;
      margin: 0 !important;
    }

    /* The Interactive Checkbox Input Controls Container */
    .upsell-market-card label {
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      font-size: 0.825rem !important;
      font-weight: 700 !important;
      color: #0a1f44 !important;
      cursor: pointer !important;
      margin: 0 !important;
      background: #f8fafc; /* Places the tiny checkbox text inside a clean button capsule frame */
      padding: 6px 14px;
      border: 1px solid #e2e8f0;
      border-radius: 20px; /* Fully rounded capsule pill shape */
      transition: all 0.2s ease-in-out;
    }

    /* Force checkbox shape size configurations */
    .upsell-market-card input[type="checkbox"] {
      width: 16px !important;
      height: 16px !important;
      margin: 0 !important;
      cursor: pointer !important;
      accent-color: #0a1f44 !important; /* Checked boxes fill natively with your brand navy theme color */
    }
  }
</style>

<style>
  /* ðŸŸ¢ DESKTOP & MOBILE ACTIVE SELECTED CARD GLOW TRANSITIONS */
  .upsell-market-card {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  
  /* Adds a smooth hover lift animation when mouse pointers hover over them on desktop */
  @media (min-width: 601px) {
    .upsell-market-card:hover {
      transform: translateY(-2px);
      border-color: #cbd5e1 !important;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05) !important;
    }
  }

  /* Real-time selector helper hook: if your underlying checkbox code flips active,
     this immediately applies your brand emerald highlight ring to the card border! */
  .upsell-market-card:has(input:checked) {
    border-color: #10b981 !important; /* Brand emerald green border color */
    background: #fbfdfb !important;   /* Subtle clean green hue wash canvas tint */
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.06) !important;
  }
  
  /* Turns your pill capsule button solid brand dark navy text fill when checked active */
  .upsell-market-card:has(input:checked) label {
    background: #0a1f44 !important;
    color: #ffffff !important;
    border-color: #0a1f44 !important;
  }
</style>
      
      `;
      
  });

  // ============================================================================ //
  // ðŸš€ AUTOMATED NAVIGATION ACTION FOOTER INJECTION PASS                        //
  // ============================================================================ //
  accumulatorHtml += `
    <div class="wizard-footer-action-row" style="grid-column: span 2; display: flex; justify-content: space-between; align-items: center; width: 100% !important; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border, #e2e8f0); clear: both; box-sizing: border-box;"> 
      <button type="button" class="btn-wizard-nav-back" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;"> 
        <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Back to Service Form 
      </button> 
      <button type="button" class="btn-wizard-main btn-wizard-nav-next" onclick="if(typeof window.goToNextWizardStep === 'function') { window.goToNextWizardStep(4, event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.15);"> 
        Continue to PoA <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i> 
      </button> 
    </div>`;

  return accumulatorHtml;
}

window.buildMarketplaceCardsHtml = buildMarketplaceCardsHtml;


// ============================================================================ //
// ðŸ“¡ 4. REACTIVE STATE INTERCEPTOR ENGINE (DEBOUNCED ANTI-FLICKER PROXY)       //
// ============================================================================ //
(function attachAgnosticStateInterceptors() {
  const targetedMemoryHooks = ['CENTRAL_ADDON_DB', 'UPSELLS_ROUTER_DATABASE', 'UPSELL_ADDON_REGISTRY'];
  
  // ðŸ›¡ï¸ ANTI-FLICKER DEBOUNCE TIMER
  let renderDebounceTimeout = null;

  targetedMemoryHooks.forEach(hookKey => {
    let internalValue = window[hookKey];
    
    Object.defineProperty(window, hookKey, {
      get() { return internalValue; },
      set(newValue) {
        // Block redundant rewrites
        if (internalValue === newValue) return;
        internalValue = newValue;
        
        if (newValue && typeof newValue === 'object') {
          // Clear any pending render calls stacked from rapid sequential network payloads
          if (renderDebounceTimeout) {
            clearTimeout(renderDebounceTimeout);
          }
          
          // ðŸ›¡ï¸ Delay execution to allow pricing engines to finish mutating data properties safely
          renderDebounceTimeout = setTimeout(() => {
            // ðŸŸ¢ BOUNDARY CHECK: Only trigger streaming if the client is actively on Step 3 view layers
            const activeStepNum = parseInt(window.currentWizardActiveStep, 10) || 0;
            if (activeStepNum === 3 && typeof window.executeStepThreeUpsellStreaming === "function") {
              console.log(`[Step 3 Proxy] Addon data stabilized via "${hookKey}". Streaming fields...`);
              window.executeStepThreeUpsellStreaming();
            }
          }, 16);
        }
      },
      configurable: true,
      enumerable: true
    });
  });
})();

// Re-evaluate if the DOM finishes updates
document.addEventListener("DOMContentLoaded", () => {
  const currentStep = parseInt(window.currentWizardActiveStep, 10) || 0;
  if (currentStep === 3 && typeof window.executeStepThreeUpsellStreaming === "function") {
    // Execute styling updates instantly to settle layout coordinates
    window.executeStepThreeUpsellStreaming();
  }
});

// ============================================================================ //
// âš¡ CLICK INTERCEPT ROUTERS & BINDING HANDLERS (ANTI-FLICKER PRO FUNNEL)      //
// ============================================================================ //
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

  // Locate standard billing payloads across global thread scopes for
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

    const sampleEntry = targetPayload.active_addons_list[0];
    const expectsObjectSchema = (sampleEntry && typeof sampleEntry === 'object');

    if (isChecked) {
      const isAlreadyListed = targetPayload.active_addons_list.some(function(addon) {
        return ((addon && typeof addon === 'object') ? addon.id : addon) === catalogSlug;
      });
      if (!isAlreadyListed) {
        if (expectsObjectSchema) {
          targetPayload.active_addons_list.push(compiledAddonRecord);
        } else {
          targetPayload.active_addons_list.push(catalogSlug);
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
      return addon && (addon.id === catalogSlug || addon.title === addonNameAttr);
    });
    if (!isCartDuplicate) {
      window.currentCartState.addons.push({ id: catalogSlug, title: addonNameAttr, name: addonNameAttr, price: addonPriceAttr });
      console.log(`[Funnel Sync] Synced "${addonNameAttr}" into Step 5 cart state review array.`);
    }
  } else {
    window.currentCartState.addons = window.currentCartState.addons.filter(function(addon) {
      return addon && addon.id !== catalogSlug && addon.title !== addonNameAttr;
    });
    console.log(`[Funnel Sync] Scrubbed "${addonNameAttr}" out of Step 5 cart state review array.`);
  }

  // ðŸŸ¢ FIXED SCOPED SEPARATION:
  // Isolate checkbox scraping strictly inside Step 3's DOM target container. 
  // This prevents it from scraping and corrupting Step 2 or Step 4 variables!
  const marketplaceWrapper = document.getElementById("wizard-dynamic-upsells-render-target") || document.getElementById("step-panel-3") || document;
  const activeCheckboxes = marketplaceWrapper.querySelectorAll('.upsell-checkbox:checked');
  const compiledSelectedAddonsList = [];

  activeCheckboxes.forEach(box => {
    const itemPrice = parseFloat(box.getAttribute('data-price')) || 0;
    const itemName = box.getAttribute('data-name') || "Optional Asset Shield";
    const innerId = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === box.id) || box.id;
    
    compiledSelectedAddonsList.push({ id: innerId, title: itemName, name: itemName, price: itemPrice });
    localStorage.setItem(`wizard_field_${box.id}`, "true");
  });

  const localSlugKey = targetFlagKey;
  if (isChecked) {
    localStorage.setItem(`wizard_field_${localSlugKey}`, "true");
    const existsInList = compiledSelectedAddonsList.some(item => item.id === catalogSlug);
    if (!existsInList) {
      compiledSelectedAddonsList.push({ id: catalogSlug, title: addonNameAttr, name: addonNameAttr, price: addonPriceAttr });
    }
  } else {
    localStorage.setItem(`wizard_field_${localSlugKey}`, "false");
  }

  const inactiveCheckboxes = marketplaceWrapper.querySelectorAll('.upsell-checkbox:not(:checked)');
  inactiveCheckboxes.forEach(box => {
    localStorage.setItem(`wizard_field_${box.id}`, "false");
  });

  window.currentSelectedAddonsListArrayMatrix = compiledSelectedAddonsList;
  localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(compiledSelectedAddonsList));

  // 4. Force skin color highlight adjustments over your card wrappers
  if (typeof window.autoSkinSelectedUpsellCards === "function") {
    window.autoSkinSelectedUpsellCards();
  }

  // ðŸŸ¢ FIXED SYNCHRONOUS FLOW SEQUENCE:
  // We execute pricing evaluations instantly and follow up with the storage capture 
  // inside the same task. This ensures values write to cache *after* math updates complete!
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  } else if (typeof window.runPricingMatrixDataCrawlPass === "function") {
    window.runPricingMatrixDataCrawlPass();
  }

  if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
    window.cacheAndRestoreWizardFormStatesVanilla(false);
  }
}

window.handleBackgroundUpsellTogglePass = handleBackgroundUpsellTogglePass;


// ============================================================================ //
// ðŸ§¼ UNIVERSAL STEP 3 VISUAL OVERLAY CLEANER (PASSIVE LAYOUT ALIGNMENT CORE)   //
// ============================================================================ //
function eliminateBlankDescriptionUpsellsFromStep3() {
  const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3");
  if (!step3Container) return;

  const productCards = step3Container.querySelectorAll('.upsell-market-card');
  console.log(`[Marketplace Guard] Standardizing data parameters for ${productCards.length} element cards...`);

  productCards.forEach(card => {
    if (!card) return;
    const paragraphNode = card.querySelector("p");
    if (paragraphNode) {
      const trimmedText = paragraphNode.textContent.trim();
      // Flag empty nodes using data attributes instead of forcing structural .style rewrites.
      // This completely blocks recursive MutationObserver cycles from starting.
      if (trimmedText === "" || trimmedText === "undefined" || trimmedText === "null") {
        paragraphNode.setAttribute("data-blank", "true");
        paragraphNode.innerText = ""; // Allows the :empty CSS pseudo-class to match cleanly
      } else {
        paragraphNode.removeAttribute("data-blank");
      }
    }
  });
}

window.eliminateBlankDescriptionUpsellsFromStep3 = eliminateBlankDescriptionUpsellsFromStep3;

// Global tracking variables to preserve system thread space
window.isStep3CleanupCurrentlyProcessing = false;

document.addEventListener("DOMContentLoaded", () => {
  const step5ContainerElement = document.getElementById("step-panel-5") || document.querySelector('[data-step="5"]');
  if (step5ContainerElement) {
    step5ContainerElement.style.position = "relative";
  }

  const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3");
  if (step3Container) {
    // ðŸ›¡ï¸ ANTI-FLICKER FIX: Narrow the scope of the observer to childList ONLY.
    const observer = new MutationObserver((mutationsList) => {
      if (window.isStep3CleanupCurrentlyProcessing) return;
      window.isStep3CleanupCurrentlyProcessing = true;

      // ðŸŸ¢ FIXED ASYNC PROCESSING ORDER:
      // Separate visual description formatting safely away from calculation threads.
      // This protects your active pricing nodes from zeroing out during paint re-draw cycles!
      try {
        eliminateBlankDescriptionUpsellsFromStep3();
      } catch (err) {
        console.error("[Marketplace Guard Fatal] Processing error caught:", err);
      }

      // Schedule pricing evaluations inside a distinct macro delay frame to ensure layout finishes settling
      setTimeout(() => {
        if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
          window.updateDynamicPricingMatrixVanilla();
        }
        window.isStep3CleanupCurrentlyProcessing = false;
      }, 40);
    });

    // ðŸ›¡ï¸ CRITICAL PERFORMANCE TUNING: Removed subtree tracking completely
    observer.observe(step3Container, { childList: true, subtree: false });

    // Initial startup execution loop pass
    eliminateBlankDescriptionUpsellsFromStep3();
  }
});

// ============================================================================ //
// âš¡ STEP 3 BI-DIRECTIONAL MODAL RE-SYNC BRIDGE (FUNNEL REBOOT)                //
// ============================================================================ //

/**
 * Central state coordinator linking modal checkbox actions back to background structures.
 * @param {string} targetFieldId - The exact ID parameter of the underlying form input.
 * @param {boolean} isCheckedState - Active toggled value state boolean parameter.
 */
window.executeModalCheckboxDataSyncPass = function(targetFieldId, isCheckedState) {
  if (!targetFieldId) return;
  console.log(`[Modal Sync Engine] Aligning field matrix vector: #${targetFieldId} -> ${isCheckedState}`);

  // ðŸŸ¢ FIXED SCOPED TARGETING: Avoid loose substring queries like id*='...' that bleed backwards into Step 2!
  // We query elements exclusively by strict ID or exact name tokens inside the Step 3 panel layout bounds.
  const step3Container = document.getElementById("step-panel-3") || document.getElementById("step-3") || document;
  
  let underlyingInput = step3Container.querySelector(`#${targetFieldId}`) || 
                        step3Container.querySelector(`input[name="${targetFieldId}"]`) || 
                        step3Container.querySelector(`.upsell-checkbox[data-id="${targetFieldId}"]`) ||
                        document.getElementById(targetFieldId); // Ultimate absolute fallback

  if (underlyingInput) {
    underlyingInput.checked = isCheckedState;
    
    // Route directly through the smart click wrapper so cards skin and arrays populate
    if (typeof window.handleBackgroundUpsellTogglePass === "function") {
      window.handleBackgroundUpsellTogglePass(underlyingInput);
    } else {
      underlyingInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  } else {
    // Fallback cache pass: preserve selection metrics if structural nodes are unmounted
    console.log(`[Modal Interlock Fallback] Syncing unmounted field cache: ${targetFieldId}`);
    window[targetFieldId] = isCheckedState;
    localStorage.setItem(`wizard_field_${targetFieldId}`, isCheckedState ? "true" : "false");
  }

  // 2. Commit transactional states cleanly to system cache memories
  if (typeof window.saveWizardFormStatesVanilla === "function") {
    window.saveWizardFormStatesVanilla();
  }

  // 3. Synchronous Pricing Matrix Recalculation Phase coupling:
  // Execute calculations cleanly inside a safe task frame block to avoid display blinks
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  } else if (typeof window.runPricingMatrixDataCrawlPass === "function") {
    window.runPricingMatrixDataCrawlPass();
  }

  if (typeof window.populatePurchaseSummaryReviewMatrix === "function") {
    window.populatePurchaseSummaryReviewMatrix();
  }
  if (typeof window.executeNewEntrantAuditLiveFulfillmentSync === "function") {
    window.executeNewEntrantAuditLiveFulfillmentSync();
  }
};

/**
 * Legacy bridge aliased straight to the primary controller to prevent multi-path calculations.
 */
window.syncModalCheckboxActionDirectToForm = function(backgroundFormId, isChecked) {
  window.executeModalCheckboxDataSyncPass(backgroundFormId, isChecked);
};

/**
 * Cleanly hides and unmounts the operational requirements guide overlay.
 */
window.closeNewEntrantAuditPriceGuideModal = function() {
  const modalRoot = document.getElementById("f4u-price-guide-modal-root");
  if (modalRoot) {
    // Fade out smoothly instead of hard snapping to prevent visual frame popping
    modalRoot.style.transition = "opacity 0.15s ease";
    modalRoot.style.opacity = "0";
    setTimeout(() => {
      modalRoot.style.display = "none";
    }, 150);
  }
};

// Bind cleanly back up to the primary document tree window reference context
window.launchNewEntrantAuditRequirementsGuideModal = typeof launchNewEntrantAuditRequirementsGuideModal !== "undefined" ? launchNewEntrantAuditRequirementsGuideModal : window.launchNewEntrantAuditRequirementsGuideModal;
window.syncModalCheckboxActionDirectToForm = window.syncModalCheckboxActionDirectToForm;
window.closeNewEntrantAuditPriceGuideModal = window.closeNewEntrantAuditPriceGuideModal;

// ============================================================================ //
// ðŸ“Š MEMORY ENGINE STABILIZER & SELECTION INTERCEPTOR (ANTI-FLICKER CORE)      //
// ============================================================================ //
(function stabilizeRuntimeSync() {
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

    // 1. UPDATE THE LIVE GLOBAL MEMORY STATE VARIABLE CLEANLY
    window[targetFlagKey] = isChecked;

    // 2. AGNOSTIC PAYLOAD INJECTION ENGINE (ZERO HARDCODING)
    const windowKeys = Object.keys(window);
    const activeBillingNodes = [];

    for (let i = 0; i < windowKeys.length; i++) {
      const key = windowKeys[i];
      try {
        if (window[key] && typeof window[key] === 'object' && window[key].active_addons_list !== undefined) {
          activeBillingNodes.push(key);
        }
      } catch (e) {
        // Silent catch for locked security descriptors on window properties
      }
    }

    // Resolve structural naming coordinates mapping parameters
    const inverseCoordinatesMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
    const catalogSlug = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === targetFlagKey) || targetFlagKey;
    const addonNameAttr = checkboxNode.getAttribute("data-name") || checkboxNode.getAttribute("data-label") || catalogSlug;
    const addonPriceAttr = parseFloat(checkboxNode.getAttribute("data-price")) || parseFloat(checkboxNode.value) || 0.00;
    const compiledAddonRecord = { id: catalogSlug, name: addonNameAttr, price: addonPriceAttr, label: addonNameAttr };

    activeBillingNodes.forEach(nodeKey => {
      const targetPayload = window[nodeKey];
      if (!targetPayload || !Array.isArray(targetPayload.active_addons_list)) return;

      if (isChecked) {
        const isAlreadyListed = targetPayload.active_addons_list.some(addon => {
          const currentId = (addon && typeof addon === 'object') ? addon.id : addon;
          return currentId === catalogSlug;
        });
        if (!isAlreadyListed) {
          targetPayload.active_addons_list.push(compiledAddonRecord);
          console.log(`[Sync Engine] Successfully injected active asset payload tracking data: "${catalogSlug}"`);
        }
      } else {
        targetPayload.active_addons_list = targetPayload.active_addons_list.filter(addon => {
          const currentId = (addon && typeof addon === 'object') ? addon.id : addon;
          return currentId !== catalogSlug;
        });
        console.log(`[Sync Engine] Successfully scrubbed disabled item payload tracking data: "${catalogSlug}"`);
      }
    });

    // ============================================================================ //
    // ðŸ MASTER STEP 5 WIZARD SUMMARY CART SYNCHRONIZATION DATA                  //
    // ============================================================================ //
    if (!window.currentCartState) {
      window.currentCartState = {};
    }
    if (!Array.isArray(window.currentCartState.addons)) {
      window.currentCartState.addons = [];
    }

    if (isChecked) {
      const isCartDuplicate = window.currentCartState.addons.some(addon => {
        return addon && (addon.id === catalogSlug || addon.title === addonNameAttr);
      });
      if (!isCartDuplicate) {
        window.currentCartState.addons.push({ id: catalogSlug, title: addonNameAttr, name: addonNameAttr, price: addonPriceAttr });
        console.log(`[Funnel Sync] Synced "${addonNameAttr}" into Step 5 cart state review array.`);
      }
    } else {
      window.currentCartState.addons = window.currentCartState.addons.filter(addon => {
        return addon && addon.id !== catalogSlug && addon.title !== addonNameAttr;
      });
      console.log(`[Funnel Sync] Scrubbed "${addonNameAttr}" out of Step 5 cart state review array.`);
    }

    // ðŸŸ¢ FIXED SCOPED SEPARATION:
    // Narrow your checkbox scrapers strictly to the Step 3 marketplace canvas element node.
    // This stops it from scanning or overwriting background data fields belonging to Step 2!
    const step3MarketplaceCanvas = document.getElementById("wizard-dynamic-upsells-render-target") || document.getElementById("step-panel-3") || document;
    
    const activeCheckboxes = step3MarketplaceCanvas.querySelectorAll('.upsell-checkbox:checked');
    const compiledSelectedAddonsList = [];

    activeCheckboxes.forEach(box => {
      const itemPrice = parseFloat(box.getAttribute('data-price')) || 0;
      const itemName = box.getAttribute('data-name') || "Optional Asset Shield";
      const innerId = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === box.id) || box.id;
      
      compiledSelectedAddonsList.push({ id: innerId, title: itemName, name: itemName, price: itemPrice });
      localStorage.setItem(`wizard_field_${box.id}`, "true");
    });

    const inactiveCheckboxes = step3MarketplaceCanvas.querySelectorAll('.upsell-checkbox:not(:checked)');
    inactiveCheckboxes.forEach(box => {
      localStorage.setItem(`wizard_field_${box.id}`, "false");
    });

    window.currentSelectedAddonsListArrayMatrix = compiledSelectedAddonsList;
    localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(compiledSelectedAddonsList));

    // 3. AUTOMATED PRICING MATRIX UPDATES
    if (typeof window.autoSkinSelectedUpsellCards === "function") {
      window.autoSkinSelectedUpsellCards();
    }

    // ðŸŸ¢ FIXED SYNCHRONOUS COUPLING:
    // Execute pricing calculations and layout parameter states immediately by default.
    // This forces updates to lock into cache variables before multi-step redraw passes run.
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
      window.updateDynamicPricingMatrixVanilla();
    }

    if (typeof window.cacheAndRestoreWizardFormStatesVanilla === "function") {
      window.cacheAndRestoreWizardFormStatesVanilla(false);
    }
  }

  // ðŸ›¡ï¸ ANTI-FLICKER MOUNT: Bind cleanly back up to the primary window object UNCONDITIONALLY
  window.handleBackgroundUpsellTogglePass = handleBackgroundUpsellTogglePass;

  // 4. SEPARATE CONTEXTUAL INITIALIZATION PASS LOOKUPS safely below declarations
  if (window.CENTRAL_ADDON_DB && Object.keys(window.CENTRAL_ADDON_DB).length > 0) {
    if (typeof window.renderTargetUpsellsListPanel === "function") {
      console.log("[Stabilizer Core] Database found pre-loaded in thread stack memory. Routing panel render loop...");
      window.renderTargetUpsellsListPanel();
    }
  }
})();

// ============================================================================ //
// âš¡ MASTER UNIFIED INTERCEPTOR: Anti-Flicker Execution Interlock Core         //
// ============================================================================ //

/**
 * Intercepts selection shifts and synchronizes variables directly down to global trackers.
 * @param {HTMLInputElement} checkboxElement - Active clicked selection checkbox node.
 */
window.executeUpsellStateToggleIntercept = function(checkboxElement) {
  if (!checkboxElement) return;

  // ðŸŸ¢ ATTRIBUTE FALLBACK FIX: Prioritizes target property attributes, fallback straight to element ID metrics
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

  // Backup state mapping markers straight to localStorage for automated script hydration
  localStorage.setItem(`wizard_field_${checkboxElement.id || rawPropertyKey}`, isChecked ? "true" : "false");

  // ðŸ›¡ï¸ ANTI-FLICKER INTERLOCK PASS:
  // Force synchronizations over background database tracking layers (active_addons_list)
  // before pricing crawlers read the state configurations!
  if (typeof window.handleBackgroundUpsellTogglePass === "function") {
    console.log(`[Sync Interceptor Interlock] Cascading interaction sequence to backend memory module...`);
    window.handleBackgroundUpsellTogglePass(checkboxElement);
  }

  // 2. SUMMARY CORES BRIDGING: Simultaneously sync options to the Step 5 review card state arrays
  if (!window.currentCartState) {
    window.currentCartState = { addons: [] };
  }
  if (!Array.isArray(window.currentCartState.addons)) {
    window.currentCartState.addons = [];
  }

  const addonLabelName = checkboxElement.getAttribute("data-name") || checkboxElement.getAttribute("data-label") || rawPropertyKey;
  const addonPriceAmount = parseFloat(checkboxElement.getAttribute("data-price")) || parseFloat(checkboxElement.value) || 0.00;

  // Cross-reference coordinate catalog database schemas backwards to discover short slugs safely
  const inverseCoordinatesMap = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
  const catalogSlug = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === (checkboxElement.id || rawPropertyKey)) || rawPropertyKey;

  if (isChecked) {
    const isCartDuplicate = window.currentCartState.addons.some(addon => addon && (addon.id === catalogSlug || addon.title === addonLabelName || addon.name === addonLabelName));
    if (!isCartDuplicate) {
      window.currentCartState.addons.push({ id: catalogSlug, title: addonLabelName, name: addonLabelName, price: addonPriceAmount });
      console.log(`[Funnel Hook] Synced "${addonLabelName}" into Step 5 cart state list.`);
    }
  } else {
    window.currentCartState.addons = window.currentCartState.addons.filter(addon => addon && addon.id !== catalogSlug && addon.title !== addonLabelName && addon.name !== addonLabelName);
    console.log(`[Funnel Hook] Scrubbed "${addonLabelName}" from Step 5 cart state list.`);
  }

  // 3. Force visual element card highlight updates
  if (typeof window.autoSkinSelectedUpsellCards === "function") {
    window.autoSkinSelectedUpsellCards();
  }

  // ðŸŸ¢ FIXED SYNCHRONOUS SEQUENCING PIPELINE:
  // We execute all three downstream calculation operations instantly inside the same task frame.
  // This blocks browser thread micro-lag gaps and guarantees choices write to cache *after* math updates finish!
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
  
  if (typeof window.populatePurchaseSummaryReviewMatrix === "function") {
    window.populatePurchaseSummaryReviewMatrix();
  }
  
  if (typeof window.saveWizardFormStatesVanilla === "function") {
    window.saveWizardFormStatesVanilla();
  }
};

// ============================================================================ //
// ðŸ“Š MEMORY ENGINE STABILIZER (ASYNCHRONOUS SYSTEM PROPERTY PROTECTOR - FIXED) //
// ============================================================================ //

// ðŸ›¡ï¸ ANTI-FLICKER DEBOUNCE TIMER REGISTER
let asyncCatalogUpdateDebounceTimeout = null;
let currentDbVal = window.CENTRAL_ADDON_DB;

Object.defineProperty(window, 'CENTRAL_ADDON_DB', {
  get() { return currentDbVal; },
  set(newVal) {
    // FIX 1: Strict equality check gate instantly blocks infinite structural recursion loops
    if (currentDbVal === newVal) return;
    currentDbVal = newVal;

    // Recalculate dynamic array tracking tags if data returns
    if (newVal && typeof newVal === 'object') {
      window.auxiliaryAddonsArray = Object.keys(newVal);
    }

    // FIX 2: Debounce the asynchronous streaming pass!
    // This allows deep JSON catalog structures to finish reading into system memory
    // before triggering a DOM paint pass, completely stopping the flash-and-wipe bug.
    if (newVal && typeof newVal === 'object') {
      if (asyncCatalogUpdateDebounceTimeout) {
        clearTimeout(asyncCatalogUpdateDebounceTimeout);
      }
      
      asyncCatalogUpdateDebounceTimeout = setTimeout(() => {
        // ðŸŸ¢ BOUNDARY CHECK: Only run layout generation if the user is actively on Step 3
        const activeFunnelStep = parseInt(window.currentWizardActiveStep, 10) || 0;
        if (activeFunnelStep === 3 && typeof window.executeStepThreeUpsellStreaming === "function") {
          console.log("[Memory Guard] Asynchronous database stabilized. Streaming fields to layout...");
          window.executeStepThreeUpsellStreaming();
        }
      }, 30); // 30ms window guarantees all asynchronous processing completes safely
    }
  },
  configurable: true,
  enumerable: true
});

// Re-render when DOM loading lifecycle updates safely
document.addEventListener("DOMContentLoaded", () => {
  const currentActiveStep = parseInt(window.currentWizardActiveStep, 10) || 0;
  
  // ðŸŸ¢ FIXED SYNCHRONOUS INITIALIZATION INITIALIZER:
  // Execute the layout generation pass instantly without async frame breaks.
  // This guarantees elements render completely before data recovery sweeps can overwrite them!
  if (currentActiveStep === 3 && typeof window.executeStepThreeUpsellStreaming === "function") {
    console.log("[Memory Guard Lifecycle] Executing instant synchronous view layout compilation pass...");
    window.executeStepThreeUpsellStreaming();
  }
});

// ðŸ›¡ï¸ CRITICAL FIX: DO NOT OVERWRITE THE BACKGROUND SYNC ENGINE WITH THE INTERCEPTOR!
// We preserve both references cleanly in global scope so the Master Interceptor
// can cascade updates directly into your tracking payloads without creating an infinite loop.
if (typeof window.handleBackgroundUpsellTogglePass === "undefined") {
  console.log("[Memory Guard Warning] handleBackgroundUpsellTogglePass was missing, routing safety hook.");
  window.handleBackgroundUpsellTogglePass = function(node) {
    console.warn("[Memory Guard Fallback] Executing baseline field change event mapping.");
    if (node && typeof node.dispatchEvent === "function") {
      node.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };
}
// ============================================================================ //
// ðŸ“Š UNIFIED DATA-DRIVEN MATRIX ENGINE: SELF-CORRECTING CONTEXT REBOOT         //
// ============================================================================ //
function finalizePricingMatrixUiRender() {
  
  // ðŸ›¡ï¸ RE-HYDRATION LAYER: Build execution context on the fly if uninitialized
  if (!window._tempCalcContext) {
    window._tempCalcContext = {
      currentCartState: window.currentCartState || {},
      currentServiceKey: window.routeActiveServiceKey || "",
      baseTierPrice: window.computedWizardBaseTierAmount || 0,
      incrementalAddonTotal: 0,
      descriptiveInvoiceRowsHtml: ""
    };
  }

  const ctx = window._tempCalcContext;

  // ðŸŸ¢ FIXED CONTEXT REBOOT: Always pull fresh totals directly from the active cart state 
  // to prevent stagnant variables from blocking calculations.
  let freshAddonTotal = 0;
  const activeAddonsList = window.currentCartState?.addons || window.currentSelectedAddonsListArrayMatrix || [];
  
  if (Array.isArray(activeAddonsList)) {
    activeAddonsList.forEach(addon => {
      if (addon && addon.price) {
        freshAddonTotal += parseFloat(addon.price) || 0;
      }
    });
    ctx.incrementalAddonTotal = freshAddonTotal;
  }

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
  if (baseGovAgencyFee === 0 && window.FILINGS4U_GOVERNMENT_PRICING && ctx.currentServiceKey && window.FILINGS4U_GOVERNMENT_PRICING[ctx.currentServiceKey]) {
    agencyTariff = parseFloat(window.FILINGS4U_GOVERNMENT_PRICING[ctx.currentServiceKey]) || 0;
  }

  // Calculate final absolute matrix grand totals accurately
  const finalGovFee = baseGovAgencyFee > 0 ? baseGovAgencyFee : agencyTariff;
  const dynamicTotalValue = (parseFloat(ctx.baseTierPrice) || 0) + (parseFloat(ctx.incrementalAddonTotal) || 0) + finalGovFee;

  // Synchronize final calculated numbers out to global variables for gateway processors
  window.computedWizardGrandTotalAmount = dynamicTotalValue;
  window.computedWizardStateGovernmentFee = finalGovFee;

  // Render to structural nodes if elements are active on layout
  const dynamicInvoiceArea = document.getElementById("matrix-invoice-rows-container") || document.getElementById("summary-purchase-rows-container");
  const dynamicTotalElement = document.getElementById("matrix-invoice-grand-total") || document.getElementById("grand-total-display");

  if (dynamicInvoiceArea) {
    if (ctx.descriptiveInvoiceRowsHtml && ctx.descriptiveInvoiceRowsHtml.trim() !== "") {
      let appendStateFeeRow = ctx.descriptiveInvoiceRowsHtml;
      if (finalGovFee > 0) {
        appendStateFeeRow += `
          <div class="summary-item-row government-fee-row" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 6px; width: 100%; box-sizing: border-box; clear: both;">
            <span>+ Mandatory ${stateFriendlyName} Filing Fee</span>
            <span style="font-family: monospace; font-weight: 700; color: #475569;">$${finalGovFee.toFixed(2)}</span>
          </div>`;
      }
      dynamicInvoiceArea.innerHTML = appendStateFeeRow;
    } else {
      // ðŸ›¡ï¸ VISUAL RE-FALLBACK PROTECTION: Summary line builder
      let baselineRowsHtml = "";
      if (Array.isArray(activeAddonsList)) {
        activeAddonsList.forEach(addon => {
          baselineRowsHtml += `
            <div class="summary-item-row dynamic-addon-invoice-row" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #475569; margin-top: 4px;">
              <span>${addon.title || addon.name}</span>
              <span style="font-family: monospace;">$${parseFloat(addon.price || 0).toFixed(2)}</span>
            </div>`;
        });
      }
      if (finalGovFee > 0) {
        baselineRowsHtml += `
          <div class="summary-item-row government-fee-row" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 6px; width: 100%; box-sizing: border-box; clear: both;">
            <span>+ Mandatory ${stateFriendlyName} Filing Fee</span>
            <span style="font-family: monospace; font-weight: 700; color: #475569;">$${finalGovFee.toFixed(2)}</span>
          </div>`;
      }
      if (baselineRowsHtml !== "") {
        dynamicInvoiceArea.innerHTML = baselineRowsHtml;
      }
    }
  }

  // ðŸŸ¢ FIXED SCOPED SEPARATION FILTER:
  // Isolate marketplace checkbox labeling updates strictly inside the Step 3 panel view layers.
  // This completely stops this loop from overwriting input text labels belonging to Step 2!
  const step3WrapperBox = document.getElementById("wizard-dynamic-upsells-render-target") || document.getElementById("step-panel-3") || document.getElementById("step-3");
  
  if (step3WrapperBox) {
    const visibleStep3Checkboxes = step3WrapperBox.querySelectorAll('.upsell-checkbox, input[type="checkbox"]');
    
    visibleStep3Checkboxes.forEach(checkbox => {
      const rawPriceAttr = checkbox.getAttribute('data-price') || checkbox.dataset.price;
      if (rawPriceAttr) {
        const parentCard = checkbox.closest('.upsell-market-card') || checkbox.closest('.wizard-input-group') || checkbox.closest('.form-group-wrapper');
        if (parentCard) {
          const priceLabelNode = parentCard.querySelector('.upsell-card-price-render') || parentCard.querySelector('.price') || parentCard.querySelector('.product-price') || parentCard.querySelector('.upsell-price');
          if (priceLabelNode) {
            const parsedPriceValue = parseFloat(rawPriceAttr) || 0;
            priceLabelNode.innerText = parsedPriceValue > 0 ? `$${parsedPriceValue.toFixed(2)}` : 'Included';
          } else {
            console.warn(`[Matrix UI Engine] Found product card for checkbox ${checkbox.id || checkbox.name}, but couldn't find its price text element to inject $${rawPriceAttr}`);
          }
        }
      }
    });
  }

  if (dynamicTotalElement) {
    const formattedTotalString = `$${dynamicTotalValue.toFixed(2)}`;
    if (dynamicTotalElement.innerText !== formattedTotalString) {
      dynamicTotalElement.innerText = formattedTotalString;
    }
  }
}

window.finalizePricingMatrixUiRender = finalizePricingMatrixUiRender;


// ============================================================================ // 
// ðŸ“Š UNIFIED DATA-DRIVEN MATRIX ENGINE: CORES PIPELINE RUNNER 
// ============================================================================ // 
window.isMatrixPipelineCurrentlyExecuting = false; 

// ðŸ©¹ SELF-HEALING HOOKS: Fallbacks to prevent uninstantiated early-exit blocks
if (typeof window.executeCleanInvoiceCalculationPass !== "function") {
    console.warn("[Matrix Pipeline Recovery] Instantiating fallback structure for executeCleanInvoiceCalculationPass.");
    window.executeCleanInvoiceCalculationPass = function(state) {
        // Fallback state mapping to ensure Step 7 receives baseline properties
        window.calculatedInvoiceResult = window.calculatedInvoiceResult || { total: 0, items: [] };
    };
}

if (typeof window.runPricingMatrixDataCrawlPass !== "function") {
    console.warn("[Matrix Pipeline Recovery] Instantiating fallback structure for runPricingMatrixDataCrawlPass.");
    window.runPricingMatrixDataCrawlPass = function() {
        return true; 
    };
}

window.updateDynamicPricingMatrixVanilla = function(state) {
    // ðŸŸ¢ RECURSION INTERLOCK GUARD: Instantly kill re-entrant loop calls from step-2 
    if (window.isMatrixPipelineCurrentlyExecuting) { 
        console.log("[Matrix Pipeline Guard] Blocked recursive calculation loop pass from interrupting active execution thread."); 
        return; 
    } 

    const activeStatePayload = state || window.currentCartState || {}; 

    // Verify calculation dependencies exist safely 
    const isCoreEngineReady = typeof window.executeCleanInvoiceCalculationPass === "function" && typeof window.runPricingMatrixDataCrawlPass === "function"; 
    
    if (!isCoreEngineReady) { 
        console.log("[Matrix Pipeline] Core calculation sub-methods are uninstantiated. Postponing..."); 
        return; 
    } 

    try { 
        // Lock the thread execution pass 
        window.isMatrixPipelineCurrentlyExecuting = true; 
        
        window.executeCleanInvoiceCalculationPass(activeStatePayload); 
        window.runPricingMatrixDataCrawlPass(); 
        
        if (typeof window.finalizePricingMatrixUiRender === "function") { 
            window.finalizePricingMatrixUiRender(); 
        } 
    } catch (matrixCalculationErr) { 
        console.error("[Matrix Pipeline Exception] Calculation pipeline encounter a runtime error:", matrixCalculationErr); 
    } finally { 
        // Always release the thread lock cleanly to accept future real-time clicks 
        window.isMatrixPipelineCurrentlyExecuting = false; 
    } 
};

// ============================================================================ //
// ðŸ§¼ STEP 3 MARKETPLACE DUPLICATIONS SHIELD CLEANER (ANTI-FLICKER CORE)        //
// ============================================================================ //
function cleanStep3MarketplaceDuplications() {
  const targetContainer = document.getElementById("wizard-dynamic-upsells-render-target") || 
                          document.getElementById("step-panel-3") || 
                          document.getElementById("step-3");
  if (!targetContainer) return;

  // Narrow evaluation strictly to elements rendered within the Step 3 panel container context
  const productCheckboxes = targetContainer.querySelectorAll('input[type="checkbox"]');
  
  productCheckboxes.forEach(box => {
    if (!box) return;

    // FIX 1: Prioritize explicit type metadata checks
    const stepOrigin = box.dataset.stepOrigin || box.getAttribute("data-step-origin");
    if (stepOrigin === "3") return;

    // FIX 2: BULLETPROOF WORKSPACE PROTECTION LAYER
    const targetWrapper = box.closest(".wizard-input-group") || box.closest(".form-group-wrapper");
    const containsVisiblePrice = targetWrapper ? targetWrapper.querySelector('.price, [class*="price"], .product-price, .upsell-price') : null;

    // Protect valid marketplace cards or wrappers holding active prices from accidental structural pruning paths
    const isPartofValidMarketplaceCard = box.closest(".upsell-market-card") || 
                                         box.closest(".sub-form-markup-carrier") || 
                                         box.classList.contains("upsell-checkbox") || 
                                         box.id.includes("modal_input_box_") || 
                                         containsVisiblePrice;

    // ðŸ›‘ Halt instantly if a valid marketplace element pattern matches
    if (isPartofValidMarketplaceCard) return;

    const boxId = String(box.id).toLowerCase();
    const boxName = String(box.name).toLowerCase();
    const boxClass = String(box.className).toLowerCase();

    // FIX 3: Strict validation filtering logic matches ONLY unshielded background duplicate fields.
    const isStep2Element = (boxId.startsWith("nea_") || boxId.startsWith("nea-") || boxName.startsWith("nea_") || boxName.startsWith("nea-") || boxClass.includes("nea-service") || boxClass.includes("nea_service"));
    
    if (isStep2Element) {
      // ðŸŸ¢ FIXED SEPARATION BOUNDARY PRUNING:
      // Verify the element is truly detached from Step 3 marketplace grids before calling .remove().
      // This protects your active pricing cards from accidental deletion!
      const isRogueNode = !box.closest("#wizard-dynamic-upsells-render-target") && !box.closest(".upsell-market-card");
      
      if (isRogueNode) {
        if (targetWrapper && targetWrapper !== document.body && !targetWrapper.classList.contains("isolated-marketplace-grid-canvas")) {
          targetWrapper.remove();
          console.log(`[Marketplace Shield] Safely removed duplicate Step 2 element node container: ${box.id}`);
        } else {
          box.remove();
          console.log(`[Marketplace Shield] Safely targeted and unmounted loose duplicate input element: ${box.id}`);
        }
      }
    }
  });
}

window.cleanStep3MarketplaceDuplications = cleanStep3MarketplaceDuplications;


// ============================================================================ //
// ðŸ“¡ STEP 3 PANEL TRANSITION CLEANER OBSERVER MOUNT MATRIX                     //
// ============================================================================ //
window.isMarketplaceObserverProcessing = false;
let cleanupDebounceTimeout = null;

const step3TargetPanel = document.getElementById("step-panel-3") || document.getElementById("step-3");
if (step3TargetPanel) {
  const layoutObserver = new MutationObserver(() => {
    if (step3TargetPanel.style.display !== "none") {
      if (window.isMarketplaceObserverProcessing) return;
      window.isMarketplaceObserverProcessing = true;
      console.log("[Marketplace Shield] Panel transition captured. Scheduling cleanup pass...");

      if (cleanupDebounceTimeout) clearTimeout(cleanupDebounceTimeout);
      
      // ðŸŸ¢ FIXED OBSERVER PIPELINE:
      // Run the cleanup pass cleanly once inside a single debounced window frame.
      // This stops dual-firing calculation loops from corrupting DOM selections!
      cleanupDebounceTimeout = setTimeout(() => {
        if (typeof window.cleanStep3MarketplaceDuplications === "function") {
          window.cleanStep3MarketplaceDuplications();
        }
        window.isMarketplaceObserverProcessing = false;
      }, 50);
    }
  });

  layoutObserver.observe(step3TargetPanel, { attributes: true, attributeFilter: ["style"] });
  window.step3LayoutObserverInstance = layoutObserver;
}

window.renderOnboardingPlanOverviewCard = typeof window.renderOnboardingPlanOverviewCard !== "undefined" ? window.renderOnboardingPlanOverviewCard : null;
window.cleanStep3MarketplaceDuplications = cleanStep3MarketplaceDuplications;

// ============================================================================ //
// ðŸ“¡ AUTOMATED UI ENGINE: FULL-CARD INTUITIVE CLICK INTERCEPTOR MAPPER         //
// ============================================================================ //
function initializeIntuitiveFullCardClickListeners() {
  console.log("[Marketplace UI] Binding full-card interactive click handlers...");
  
  // Target all your white up-sell cards sitting inside the viewport layout
  const marketplaceCards = document.querySelectorAll(".upsell-market-card");

  marketplaceCards.forEach(card => {
    // Prevent double binding if this hydration script re-runs during wizard movement
    if (card.dataset.clickBound) return;
    card.dataset.clickBound = "true";

    // 1. Add interactive cursor hints to signal clickability to the customer
    card.style.cursor = "pointer";

    // 2. Intercept the click event loop on the card container envelope
    card.addEventListener("click", function(event) {
      // Locate the actual checkbox input resting inside this card container node
      const targetCheckbox = card.querySelector(".upsell-checkbox");
      if (!targetCheckbox) return;

      // ðŸŸ¢ SAFETY FIX: If the user explicitly clicked the tiny input box directly, 
      // let the browser's default behavior handle it so we don't cause an infinite toggle loop.
      if (event.target.closest('input[type="checkbox"]') || event.target.closest('label')) {
        return;
      }

      // 3. Programmatically flip the checked binary flag state parameters
      targetCheckbox.checked = !targetCheckbox.checked;

      // 4. Fire the exact native event dispatch routines your wizard script expects
      if (typeof window.executeUpsellStateToggleIntercept === "function") {
        window.executeUpsellStateToggleIntercept(targetCheckbox);
      } else if (typeof window.handleBackgroundUpsellTogglePass === "function") {
        window.handleBackgroundUpsellTogglePass(targetCheckbox);
      }

      // 5. Add a premium visual feedback pop to the capsule pill label state on click
      const labelButtonCapsule = card.querySelector("label");
      if (labelButtonCapsule) {
        labelButtonCapsule.style.transform = "scale(0.95)";
        setTimeout(() => { labelButtonCapsule.style.transform = "scale(1)"; }, 100);
      }
    });
  });
}

// Automatically invoke the script framework on a clean timeout fallback lifecycle loop
setTimeout(initializeIntuitiveFullCardClickListeners, 400);

// Also expose it to the window global registry so core.js can trigger it on step changes
window.initializeIntuitiveFullCardClickListeners = initializeIntuitiveFullCardClickListeners;
