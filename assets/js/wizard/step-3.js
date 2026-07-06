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
        { id: "dun-bradstreet-setup", name: "Dun & Bradstreet Business Credit Profile Setup", price: 175.00, tier: "Corporate Setup", description: "Launches your unique DUNS identification lookup profile to jumpstart institutional credit score tracking." },
        { id: "trademark-name-lock", name: "Corporate Trademark Name Search & Lock", price: 325.00, tier: "Enterprise Security", description: "Full multi-jurisdictional availability audits to securely protect your corporate brand logo text parameters." }
    ]
};

// ============================================================================ //
// 🎯 ROUTE ALIAS ALIGNMENT MATRIX EXTRACTION LAYER                             //
// ============================================================================ //
// FIX: Map explicit service slugs to your core database keys to prevent blank loading spaces
window.MASTER_UPSELLS_CATALOG["llc-formation"] = window.MASTER_UPSELLS_CATALOG["corp-formation"];
window.MASTER_UPSELLS_CATALOG["corporations"] = window.MASTER_UPSELLS_CATALOG["corp-formation"];

console.log("[Master Catalog Database] Route aliases successfully initialized.");


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

// ============================================================================ //
// 🎯 DYNAMIC LIFECYCLE EXTENSION ROUTING INTERLOCKS                            //
// ============================================================================ //
// FIX 1: Provide clean route mapping handles matching your lowercase layout keys
window.UPSELLS_ROUTER_DATABASE["llc-formation"] = window.UPSELLS_ROUTER_DATABASE["formations"];
window.UPSELLS_ROUTER_DATABASE["corporations"] = window.UPSELLS_ROUTER_DATABASE["formations"];

if (typeof Object.seal === "function") {Object.seal(window.UPSELLS_ROUTER_DATABASE);
    console.log("[Router Database Schema] Successfully initialized behind strict structural configuration keys.");}

// ============================================================================ //
// 📊 LAYER 2: PROGRAMMATIC LOOKUP ROUTER UTILITY ENGINE                       //
// ============================================================================ //
/**
 * Pure Dynamic Upsell Selector Utility.
 * Resolves packages programmatically without hardcoded fallback routing bypass arrays.
 * @param {string} routeKey - Category path key string (e.g. window.routeActiveServiceKey)
 * @returns {Array} List of upsell records matching the active category safely
 */
function getScopedUpsellsDataset(routeKey) {
    const database = window.UPSELLS_ROUTER_DATABASE;
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
    // If the exact routeKey is missing, scan the database keys programmatically 
    // and grab the first available non-empty array segment instead of forcing a hardcoded value.
    const discoverableKeys = Object.keys(database);
    for (let i = 0; i < discoverableKeys.length; i++) {
        const potentialKey = discoverableKeys[i];
        if (Array.isArray(database[potentialKey]) && database[potentialKey].length > 0) {
            console.log(`[Upsell Lookup Route] Specific key "${normalizedKey}" unmapped. Natively adaptive routed to schema: "${potentialKey}"`);
            return database[potentialKey];
        }
    }

    return [];
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
    } else {
        // 2. Adaptive Parameter Extraction: Pull the first available data array layer 
        // dynamically from your master file registries instead of mapping to a static fallback string
        const activeDatabaseKeys = Object.keys(window.MASTER_UPSELLS_CATALOG);
        const dynamicFallbackKey = activeDatabaseKeys.find(key => Array.isArray(window.MASTER_UPSELLS_CATALOG[key]) && window.MASTER_UPSELLS_CATALOG[key].length > 0);
        
        if (dynamicFallbackKey) {
            console.log(`[Step 3 Catalog] Route context "${lookupKey}" unmapped. Natively extracted data from active database stack: "${dynamicFallbackKey}"`);
            targetAddonsList = window.MASTER_UPSELLS_CATALOG[dynamicFallbackKey];
        }
    }

    const dictionaryPayload = {};
    targetAddonsList.forEach(item => {
        if (item && item.id) {
            dictionaryPayload[item.id] = item;
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
                checkbox.style.removeProperty("border-color");
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
    // Instantly refresh layout skin states when a user clicks an option card
    autoSkinSelectedUpsellCards();
};

// FIX: Eliminate raw setTimeout timers that execute on Step 2 background trees.
// We bind the skinner directly to a global initialization callback that fires on view change.
window.triggerStepThreeUiSkinPass = function() {
    console.log("[Step 3 Skinner] Form canvas mounted. Executing neutral card skin alignment pass...");
    autoSkinSelectedUpsellCards();
};

// ============================================================================ //
// 🗺️ STEP 3 RENDER TARGET SYNCHRONIZATION BRIDGE (BUTTON PRESERVATION REBOOT) //
// ============================================================================ //
function autoInitializeStep3MarketplaceCatalog() {
    // 1. ISOLATE AND ASSIGN INDEPENDENT PARENT WORKSPACE SHELLS
    const step3PanelContainer = document.getElementById("step-panel-3") || document.getElementById("step-3");
    if (!step3PanelContainer) {
        console.warn("[Marketplace Bridge Abort] Target step 3 master visibility panel not found in DOM tree.");
        return;
    }

    // FIX 1: TARGET AN INDEPENDENT SUB-GRID ELEMENT CONTAINER CARRIER ONLY
    // Instead of wiping the entire step3PanelContainer wrapper via innerHTML (which destroys your buttons),
    // we locate or build a dedicated sub-box layout grid to house the product cards safely.
    let htmlMarketplaceBox = document.getElementById("wizard-dynamic-upsells-render-target");
    
    if (!htmlMarketplaceBox) {
        console.log("[Marketplace Bridge] Target sub-grid container missing. Programmatically mounting isolated canvas card board row...");
        
        htmlMarketplaceBox = document.createElement("div");
        htmlMarketplaceBox.id = "wizard-dynamic-upsells-render-target";
        htmlMarketplaceBox.className = "isolated-marketplace-grid-canvas";
        
        // This preserves your elegant side-by-side column grid styling configuration natively
        htmlMarketplaceBox.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; width: 100%; box-sizing: border-box; clear: both; margin-bottom: 30px;";
        
        // FIX 2: Prepend the new grid card box right at the top entrance of the step panel layout tree,
        // ensuring your action navigation button elements sit safely preserved underneath the packages.
        if (step3PanelContainer.firstChild) {
            step3PanelContainer.insertBefore(htmlMarketplaceBox, step3PanelContainer.firstChild);
        } else {
            step3PanelContainer.appendChild(htmlMarketplaceBox);
        }
    }

    // 🛡️ TIMING PROTECTION SAFEGUARD: Gather whichever active catalog source handles are ready in memory
    const activeCatalog = window.MASTER_UPSELLS_CATALOG || window.CENTRAL_ADDON_DB || window.UPSELL_ADDON_REGISTRY || {};
    const urlParams = new URLSearchParams(window.location.search);
    const serviceSlug = String(urlParams.get('service') || window.routeActiveServiceKey || "").toLowerCase().trim();

    if (htmlMarketplaceBox) {
        // Wipe ONLY the inner product cards row payload out of the container before re-drawing items
        htmlMarketplaceBox.innerHTML = "";

        // ===================================================================== //
        // 🎯 POLYMORPHIC RUNTIME ROUTING HANDOVER MATRIX                       //
        // ===================================================================== //
        if (typeof window.renderTargetUpsellsListPanel === "function") {
            console.log("[Marketplace Bridge] Executing standard list panel component renderer...");
            window.renderTargetUpsellsListPanel(activeCatalog, htmlMarketplaceBox);
        } else {
            console.log("[Marketplace Bridge Fallback] Assembling card elements via local template builders...");
            
            let structuredItemsList = activeCatalog;

            // Resolve deep nested objects if database is a multi-service catalog schema
            if (activeCatalog[serviceSlug]) {
                structuredItemsList = activeCatalog[serviceSlug];
            } else if (typeof window.getCategoryAddonsByServiceKey === "function") {
                structuredItemsList = window.getCategoryAddonsByServiceKey(serviceSlug);
            } else if (typeof window.getScopedUpsellsDataset === "function") {
                structuredItemsList = window.getScopedUpsellsDataset(serviceSlug);
            }

            // Extract flat structures natively if database remains a raw tree node config
            if (typeof window.extractCatalogAddonsDynamically === "function" && !Array.isArray(structuredItemsList)) {
                structuredItemsList = window.extractCatalogAddonsDynamically(structuredItemsList);
            }

            // Fire your operational workspace component string builder to compile HTML markup parameters
            if (typeof window.buildMarketplaceCardsHtml === "function") {
                const compiledHtmlContent = window.buildMarketplaceCardsHtml(structuredItemsList);
                
                if (compiledHtmlContent && compiledHtmlContent.trim() !== "") {
                    htmlMarketplaceBox.innerHTML = compiledHtmlContent;
                    console.log("[Marketplace Bridge Success] Card templates rendered inside protected layout frames successfully.");
                } else {
                    htmlMarketplaceBox.innerHTML = `
                        <div style="grid-column: span 2; text-align: center; padding: 24px; color: #64748b; font-weight: 500;">
                            No additional operational up-sells are required for your selected service profile parameters.
                        </div>`;
                }
            } else {
                console.error("[Marketplace Bridge Fatal] Critical failure: No valid component layout string builder found inside step-3.js scope mapping.");
            }
        }

        // Run your dynamic section duplications erasers instantly once elements are printed
        if (typeof window.cleanStep3MarketplaceDuplications === "function") {
            window.cleanStep3MarketplaceDuplications();
        }

        // Proactively trigger your neutral design skinner once cards are successfully rendered
        if (typeof window.triggerStepThreeUiSkinPass === "function") {
            window.triggerStepThreeUiSkinPass();
        }
    }
}

// Ensure execution loops remain throttled correctly
window.isStep3PanelRenderPassCurrentlyActive = false;

window.executeStepThreeUpsellStreaming = function() {
    if (window.isStep3PanelRenderPassCurrentlyActive) return;
    
    window.isStep3PanelRenderPassCurrentlyActive = true;
    console.log("[Step 2 to 3 Handoff] Compiling wizard upsells canvas layout rows...");
    
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
        }, 100);
    }
};

// Map methods cleanly back into global scope contexts
window.autoInitializeStep3MarketplaceCatalog = autoInitializeStep3MarketplaceCatalog;
window.executeStepThreeUpsellStreaming = window.executeStepThreeUpsellStreaming;


// Remove raw automatic startup execution triggers that run on initial script load.
// The parent lifecycle manager will control when this script runs using the handle above.

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
// 📊 PART 2 OF 3: WORKSPACE COMPONENT STRING BUILDER (BUTTON AUTOMATION REBOOT)//
// ============================================================================ //
function buildMarketplaceCardsHtml(catalogItems) {
    let accumulatorHtml = "";

    // Safety check guarantees we don't attempt loops over non-iterable unassigned data types
    if (!catalogItems || typeof catalogItems !== 'object') {
        console.warn("[Marketplace Skinner] Provided catalog items parameters are un-iterable.");
        return "";
    }

    const coordinateMaps = window.UPSELLS_GLOBAL_STATE_PROPERTY_MAP || {};
    const iterableKeys = Array.isArray(catalogItems) ? catalogItems : Object.keys(catalogItems);

    iterableKeys.forEach(keyOrItem => {
        const item = (typeof keyOrItem === 'object' && keyOrItem !== null) ? keyOrItem : catalogItems[keyOrItem];
        if (!item || !item.id) return;

        const catalogSlug = item.id;
        const itemDesc = item.description || item.desc || "";
        if (!itemDesc || itemDesc.trim() === "") return; // Skip empty descriptors

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
                    <input type="checkbox" class="upsell-checkbox" id="${trackingKey}" data-id="${trackingKey}" data-price="${itemPrice}" data-name="${itemName}" style="width:18px; height:18px; cursor:pointer;" ${isChecked ? 'checked' : ''} onchange="if(typeof window.executeUpsellStateToggleIntercept === 'function') { window.executeUpsellStateToggleIntercept(this); } else if(typeof window.handleBackgroundUpsellTogglePass === 'function') { window.handleBackgroundUpsellTogglePass(this); }"> Activate
                </label>
            </div>
        </div>`;
    });

    // ============================================================================ //
    // 🚀 FIX: AUTOMATED NAVIGATION INTERRUPT ACTION FOOTER INJECTION PASS          //
    // ============================================================================ //
    // We append a beautifully integrated, full-width action panel row that matches your 
    // global workspace theme parameters perfectly and hooks straight into goToNextWizardStep()
    accumulatorHtml += `
    <div class="wizard-footer-action-row" style="grid-column: span 2; display: flex; justify-content: space-between; align-items: center; width: 100% !important; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border, #e2e8f0); clear: both; box-sizing: border-box;">
        <button type="button" class="btn-wizard-nav-back" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
            <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Previous Step
        </button>
        <button type="button" class="btn-wizard-main btn-wizard-nav-next" onclick="if(typeof window.goToNextWizardStep === 'function') { window.goToNextWizardStep(4, event); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.15);">
            Continue to Form <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>
        </button>
    </div>`;

    return accumulatorHtml;
}

// Ensure global reference map hooks are synced up natively
window.buildMarketplaceCardsHtml = buildMarketplaceCardsHtml;




// ============================================================================ //
// 📡 4. REACTIVE STATE INTERCEPTOR ENGINE (NETWORKING DATA HOOKS)              //
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
                // Check if the value is changing to block infinite recursion loops
                if (internalValue === newValue) return;
                
                internalValue = newValue;

                // FIX: Instead of calling a blank function that throws errors,
                // route the data change safely through the parent-level rendering wrapper
                if (newValue && typeof newValue === 'object') {
                    if (typeof window.executeStepThreeUpsellStreaming === "function") {
                        console.log(`[Step 3 Proxy] Addon data arrived via global hook "${hookKey}". Streaming fields...`);
                        window.executeStepThreeUpsellStreaming();
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
    // Only compile if Step 3 is confirmed as the currently open panel
    const currentStep = parseInt(window.currentWizardActiveStep, 10) || 0;
    if (currentStep === 3 && typeof window.executeStepThreeUpsellStreaming === "function") {
        window.executeStepThreeUpsellStreaming();
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
            return addon && (addon.id === catalogSlug || addon.title === addonNameAttr);
        });
        if (!isCartDuplicate) {
            // FIX: Normalize property object structures so title matches down-stream step 5 template engines safely
            window.currentCartState.addons.push({ id: catalogSlug, title: addonNameAttr, name: addonNameAttr, price: addonPriceAttr });
            console.log(`[Funnel Sync] Synced "${addonNameAttr}" into Step 5 cart state review array.`);
        }
    } else {
        // FIX: Re-targeted filter loops to cross-evaluate against catalogSlug ID parameters instead of broken name properties
        window.currentCartState.addons = window.currentCartState.addons.filter(function(addon) {
            return addon && addon.id !== catalogSlug && addon.title !== addonNameAttr;
        });
        console.log(`[Funnel Sync] Scrubbed "${addonNameAttr}" out of Step 5 cart state review array.`);
    }

    // Reconstruct the array format expected by your summary card engine loop
    const activeCheckboxes = document.querySelectorAll('.upsell-checkbox:checked');
    const compiledSelectedAddonsList = [];

    activeCheckboxes.forEach(box => {
        const itemPrice = parseFloat(box.getAttribute('data-price')) || 0;
        const itemName = box.getAttribute('data-name') || "Optional Asset Shield";
        const innerId = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === box.id) || box.id;
        compiledSelectedAddonsList.push({ id: innerId, title: itemName, name: itemName, price: itemPrice });
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

        const paragraphNode = card.querySelector("p") || card.querySelector(".toc-step-desc");
        const cardText = card.innerText || "";
        let isDescriptionMissing = false;

        // FIX 1: Enforce deterministic element checking over broad, hardcoded string matching pools.
        // We look for a physical paragraph node carrier and verify if its text length is genuinely unassigned.
        if (paragraphNode) {
            if (paragraphNode.textContent.trim() === "") {
                isDescriptionMissing = true;
            }
        } else {
            // FIX 2: If no description paragraph element tag is declared, analyze genuine layout text arrays.
            // We verify line lengths while discarding operational button string metrics natively.
            const cleanLines = cardText.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0 && !line.includes("Activate") && !line.includes("Choose"));
            
            // If the card only contains a title and an operational input element with zero description lines, mark it missing.
            if (cleanLines.length < 2) {
                isDescriptionMissing = true;
            }
        }

        if (isDescriptionMissing) {
            // Unmount the empty data node safely without risking recursive structural loops
            card.remove();
            console.log(`[Marketplace Guard] Successfully destroyed empty-description element frame block: "${cardText.split('\n')[0] || 'Unknown Addon'}"`);
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
        const observer = new MutationObserver((mutationsList) => {
            // FIX: Concurrency Mutex Gate breaks recursive observer execution paths instantly
            if (window.isStep3CleanupCurrentlyProcessing) return;

            for (const mutation of mutationsList) {
                if (mutation.addedNodes.length > 0) {
                    window.isStep3CleanupCurrentlyProcessing = true;
                    try {
                        eliminateBlankDescriptionUpsellsFromStep3();
                    } catch (err) {
                        console.error("[Marketplace Guard Fatal] Processing error caught:", err);
                    } finally {
                        // Safe microtask reset channel allows the DOM tree to settle completely
                        window.isStep3CleanupCurrentlyProcessing = false;
                    }
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
            
            // FIX: Re-routed inline onchange to execute the universal background form synchronizer function safely 
            // and passed 'this' reference to maintain secure transactional object context layers.
            contentRowsHtml += `
            <div style="display: flex; flex-direction: column; gap: 12px; background: rgba(10, 31, 68, 0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border, #e2e8f0); width: 100%; box-sizing: border-box; text-align: left;" title="${staticHelpTooltip}">
                <div style="display: flex; justify-content: space-between; font-weight: 700; color: var(--navy, #0a1f44); align-items: center;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" id="modal_input_box_${item.id}" data-target-target="${item.targetId}" style="width: 16px; height: 16px; cursor: pointer; accent-color: #10b981; margin: 0;" ${isChecked ? 'checked' : ''} onchange="if(typeof window.executeModalCheckboxDataSyncPass === 'function') { window.executeModalCheckboxDataSyncPass('${item.targetId}', this.checked); }">
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

/**
 * FIX: Central Data Synchronization Controller.
 * Locates background canvas input fields, reflects modal changes natively, 
 * and triggers a live cart total recalculation loop pass.
 */
window.executeModalCheckboxDataSyncPass = function(targetFieldId, isCheckedState) {
    console.log(`[Modal Sync] Processing field alignment vector for parameter: #${targetFieldId}`);
    
    // Find the master background checkbox component
    let underlyingInput = document.getElementById(targetFieldId) || document.querySelector(`input[name="${targetFieldId}"]`);
    
    if (underlyingInput) {
        // Match state value natively and dispatch a trusted interaction event chain
        underlyingInput.checked = isCheckedState;
        
        if (typeof window.handleBackgroundUpsellTogglePass === "function") {
            window.handleBackgroundUpsellTogglePass(underlyingInput);
        } else {
            underlyingInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
    } else {
        console.warn(`[Modal Sync Warning] Target background field input element not found: #${targetFieldId}`);
        // Back-write directly to global window variables if the visual field is missing from viewport frames
        window[targetFieldId] = isCheckedState;
        localStorage.setItem(`wizard_field_${targetFieldId}`, isCheckedState ? "true" : "false");
    }

    // Refresh pricing totals instantly to mirror calculations on the sidebar panel
    if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
        window.updateDynamicPricingMatrixVanilla();
    }
};

// Bind cleanly back up to the primary document tree window reference context
window.launchNewEntrantAuditRequirementsGuideModal = launchNewEntrantAuditRequirementsGuideModal;

/**
 * Event bridge linking internal modal checkbox states back to your background forms.
 */
function syncModalCheckboxActionDirectToForm(backgroundFormId, isChecked) {
    if (!backgroundFormId) return;

    const backgroundCheckboxNode = document.getElementById(backgroundFormId) || 
                                   document.querySelector("input[id*='" + backgroundFormId + "']") || 
                                   document.querySelector("input[class*='" + backgroundFormId + "']");

    if (backgroundCheckboxNode) {
        // Update the checkbox value state parameter natively
        backgroundCheckboxNode.checked = isChecked;

        // FIX: Route execution directly to your active up-sell toggler handle instead of a raw change event loop.
        // This ensures the visual step 3 cards instantly skin themselves and sync into Step 5 review matrices.
        if (typeof window.handleBackgroundUpsellTogglePass === "function") {
            window.handleBackgroundUpsellTogglePass(backgroundCheckboxNode);
        } else {
            backgroundCheckboxNode.dispatchEvent(new Event('change', { bubbles: true }));
        }
    } else {
        // Fallback: If the layout element hasn't mounted yet, cache values safely to preserve metrics
        console.log(`[Modal Interlock Fallback] Syncing unmounted field ID parameters: ${backgroundFormId}`);
        localStorage.setItem(`wizard_field_${backgroundFormId}`, isChecked ? "true" : "false");
        window[backgroundFormId] = isChecked;
    }

    // 2. FIXED MEMORY SYNC INTERLOCK:
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
                // Avoid creating double entries in the data schema
                const isAlreadyListed = targetPayload.active_addons_list.some(addon => {
                    const currentId = (addon && typeof addon === 'object') ? addon.id : addon;
                    return currentId === catalogSlug;
                });

                if (!isAlreadyListed) {
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

        // ============================================================================ //
        // 🏁 FIX: INTEGRATED MASTER STEP 5 WIZARD SUMMARY CART SYNCHRONIZATION DATA   //
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

        // Reconstruct local storage selections cleanly for state hydrator scripts
        const activeCheckboxes = document.querySelectorAll('.upsell-checkbox:checked');
        const compiledSelectedAddonsList = [];

        activeCheckboxes.forEach(box => {
            const itemPrice = parseFloat(box.getAttribute('data-price')) || 0;
            const itemName = box.getAttribute('data-name') || "Optional Asset Shield";
            const innerId = Object.keys(inverseCoordinatesMap).find(key => inverseCoordinatesMap[key] === box.id) || box.id;
            compiledSelectedAddonsList.push({ id: innerId, title: itemName, name: itemName, price: itemPrice });
            localStorage.setItem(`wizard_field_${box.id}`, "true");
        });

        const inactiveCheckboxes = document.querySelectorAll('.upsell-checkbox:not(:checked)');
        inactiveCheckboxes.forEach(box => {
            localStorage.setItem(`wizard_field_${box.id}`, "false");
        });

        window.currentSelectedAddonsListArrayMatrix = compiledSelectedAddonsList;
        localStorage.setItem('wizard_selected_addons_matrix', JSON.stringify(compiledSelectedAddonsList));

        // 3. AUTOMATED PRICING MATRIX UPDATES
        if (typeof window.autoSkinSelectedUpsellCards === "function") {
            window.autoSkinSelectedUpsellCards();
        }
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

    // Backup state mapping markers straight to localStorage for automated script hydration
    localStorage.setItem(`wizard_field_${checkboxElement.id || rawPropertyKey}`, isChecked ? "true" : "false");

    // 2. 🟢 SUMMARY CORES BRIDGING: Simultaneously sync options to the Step 5 review card state arrays
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
            // FIX: Normalized property layout maps to match both template engines and payment schemas concurrently
            window.currentCartState.addons.push({ 
                id: catalogSlug, 
                title: addonLabelName, 
                name: addonLabelName, 
                price: addonPriceAmount 
            });
            console.log(`[Funnel Hook] Synced "${addonLabelName}" into Step 5 cart state list.`);
        }
    } else {
        // FIX: Re-targeted filter arrays to evaluate accurately using our structural catalog slug IDs
        window.currentCartState.addons = window.currentCartState.addons.filter(addon => addon && addon.id !== catalogSlug && addon.title !== addonLabelName && addon.name !== addonLabelName);
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
        // FIX 1: Strict equality check gate instantly blocks infinite structural recursion loops
        if (currentDbVal === newVal) return;
        
        currentDbVal = newVal;

        // Recalculate dynamic array tracking tags if data returns
        if (newVal && typeof newVal === 'object') {
            window.auxiliaryAddonsArray = Object.keys(newVal);
        }

        // FIX 2: Route the update through the controlled step 3 streaming entry point wrapper.
        // This ensures proper DOM target parameter handling and blocks bare method runtime crashes.
        if (newVal && typeof newVal === 'object') {
            if (typeof window.executeStepThreeUpsellStreaming === "function") {
                console.log("[Memory Guard] Asynchronous catalog array updated. Re-drawing upsells panel...");
                window.executeStepThreeUpsellStreaming();
            }
        }
    },
    configurable: true,
    enumerable: true
});

// Re-render when DOM loading lifecycle updates safely
document.addEventListener("DOMContentLoaded", () => {
    const currentActiveStep = parseInt(window.currentWizardActiveStep, 10) || 0;
    
    // Only execute layout parsing rules if the user is physically navigating Step 3 views
    if (currentActiveStep === 3 && typeof window.executeStepThreeUpsellStreaming === "function") {
        window.executeStepThreeUpsellStreaming();
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

    // FIX 1: Prevent double-taxing loops. 
    // Prioritize the real-time state array lookup, and fallback to agencyTariff only if the primary state fee evaluates as zero.
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
        // FIX 2: Safeguard inner rows. Append your calculated state fee element without blanking out structural companion addons
        let appendStateFeeRow = ctx.descriptiveInvoiceRowsHtml || "";
        
        if (finalGovFee > 0) {
            appendStateFeeRow += `
            <div class="summary-item-row government-fee-row" style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 6px; width: 100%; box-sizing: border-box; clear: both;">
                <span>+ Mandatory ${stateFriendlyName} Filing Fee</span>
                <span style="font-family: monospace; font-weight: 700; color: #475569;">$${finalGovFee.toFixed(2)}</span>
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
// 📊 UNIFIED DATA-DRIVEN MATRIX ENGINE: CORES PIPELINE RUNNER                  //
// ============================================================================ //
window.updateDynamicPricingMatrixVanilla = function(state) {
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

        // FIX 1: Prioritize explicit type metadata checks over loose string prefix scanning.
        const stepOrigin = box.dataset.stepOrigin || box.getAttribute("data-step-origin");
        if (stepOrigin === "3") return; // Instantly protect valid step 3 cards

        // FIX 2: BULLETPROOF WORKSPACE PROTECTION LAYER
        // If the checkbox is contained anywhere inside an active marketplace product card,
        // we bypass evaluation entirely to ensure valid upsell fields are never wiped.
        const isPartofValidMarketplaceCard = box.closest(".upsell-market-card") || 
                                            box.closest(".sub-form-markup-carrier") || 
                                            box.classList.contains("upsell-checkbox");
        if (isPartofValidMarketplaceCard) return;

        const boxId = String(box.id).toLowerCase();
        const boxName = String(box.name).toLowerCase();
        const boxClass = String(box.className).toLowerCase();

        // FIX 3: Strict validation filtering logic matches ONLY unshielded background duplicate fields.
        const isStep2Element = (boxId.startsWith("nea_") || boxId.startsWith("nea-") || boxName.startsWith("nea_") || boxName.startsWith("nea-") || boxClass.includes("nea-service") || boxClass.includes("nea_service"));

        if (isStep2Element) {
            // Trace all the way up to find the outer marketplace box panel container element
            const marketCardWrap = box.closest(".wizard-input-group") || box.closest(".form-group-wrapper") || box.parentElement?.parentElement;
            
            if (marketCardWrap && marketCardWrap !== document.body && !marketCardWrap.classList.contains("upsell-market-card")) {
                marketCardWrap.remove();
                console.log(`[Marketplace Shield] Safely removed duplicate Step 2 element node container: ${box.id}`);
            }
        }
    });
}

window.cleanStep3MarketplaceDuplications = cleanStep3MarketplaceDuplications;



// ============================================================================ //
// 📡 STEP 3 PANEL TRANSITION CLEANER OBSERVER MOUNT MATRIX                    //
// ============================================================================ //
// Global locking parameter keeps observer persistent across repetitive multi-pass navigation sweeps
window.isMarketplaceObserverProcessing = false;

const step3TargetPanel = document.getElementById("step-panel-3") || document.getElementById("step-3");
if (step3TargetPanel) {
    const layoutObserver = new MutationObserver(() => {
        if (step3TargetPanel.style.display !== "none") {
            // FIX: Use a temporary boolean check lock instead of killing the observer reference completely.
            // This preserves the listener instance if the user navigates back and forth between steps.
            if (window.isMarketplaceObserverProcessing) return;
            window.isMarketplaceObserverProcessing = true;

            console.log("[Marketplace Shield] Panel transition captured active. Initiating structural cleanup pass...");

            // FIX: Replaced timing guesswork loops with clear, reliable requestAnimationFrame scheduling poles.
            // This runs the cleanup engine directly in alignment with browser redraw ticks, blocking flashing artifacts.
            requestAnimationFrame(() => {
                cleanStep3MarketplaceDuplications();
                
                // Secondary fallback pass catches deeply nested dynamic components as they finish mounting
                setTimeout(() => {
                    cleanStep3MarketplaceDuplications();
                    window.isMarketplaceObserverProcessing = false; // Release lock only after full queue settles
                }, 80);
            });
        }
    });

    layoutObserver.observe(step3TargetPanel, { attributes: true, attributeFilter: ["style"] });
    window.step3LayoutObserverInstance = layoutObserver;
}

// Export methods cleanly back into global window records namespaces
window.renderOnboardingPlanOverviewCard = typeof window.renderOnboardingPlanOverviewCard !== "undefined" ? window.renderOnboardingPlanOverviewCard : null;
window.cleanStep3MarketplaceDuplications = cleanStep3MarketplaceDuplications;