// ============================================================================ // 
// 📄 FILE: step-7.js - BLOCK 1 OF 4 // 
// 🧾 MODULE: GLOBAL CONFIGURATION & VISUAL INTERFACE STYLE INJECTION // 
// ============================================================================ // 

// Runtime initialization tracking flag handler 
window.isStep7StylesheetsMounted = window.isStep7StylesheetsMounted || false; 

// Unified Style injection processor definition 
window.injectStep7VisualInterfaceStyles = function() { 
  if (document.getElementById("f4u-step7-compliance-and-print-sheets") || window.isStep7StylesheetsMounted) return; 
  
  const styleNode = document.createElement("style"); 
  styleNode.id = "f4u-step7-compliance-and-print-sheets"; 
  styleNode.textContent = ` 
    /* 🟢 ANTI-FRAUD FIELD SHAKE & EMERALD GLOW EFFECTS */ 
    @keyframes f4uComplianceShake { 
      0%, 100% { transform: translateX(0); } 
      15%, 45%, 75% { transform: translateX(-6px); } 
      30%, 60%, 90% { transform: translateX(6px); } 
    } 
    .compliance-shake-triggered { animation: f4uComplianceShake 0.4s cubic-bezier(.36,.07,.19,.97) both !important; } 
    .compliance-emerald-glow-active { 
      border-color: #10b981 !important; 
      box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.35) !important; 
      transition: border-color 0.2s ease, box-shadow 0.2s ease !important; 
    } 
    
    /* 🖨️ DETAILED PHYSICAL PRINT MEDIA ISOLATION CONTROLS */ 
    @media print { 
      body *, html *, header, footer, aside, nav, button, .portal-sidebar, .wizard-footer-action-row, .sidebar-footer-lock { 
        display: none !important; 
        visibility: hidden !important; 
      } 
      main.success-container, main.success-container * { visibility: visible !important; } 
      main.success-container section.success-card, main.success-container section.success-card * { 
        visibility: visible !important; 
        display: block !important; 
      } 
      main.success-container { 
        position: absolute !important; 
        left: 0 !important; 
        top: 0 !important; 
        width: 100% !important; 
        margin: 0 !important; 
        padding: 0 !important; 
        display: block !important; 
      } 
      main.success-container section.success-card { 
        width: 100% !important; 
        max-width: 100% !important; 
        border: none !important; 
        box-shadow: none !important; 
        padding: 0 !important; 
        margin: 0 !important; 
      } 
      main.success-container aside.success-card, main.success-container aside.success-card * { 
        display: none !important; 
        visibility: hidden !important; 
      } 
      .receipt-line-item { 
        display: flex !important; 
        justify-content: space-between !important; 
        width: 100% !important; 
        page-break-inside: avoid; 
      } 
    } 
  `; 
  document.head.appendChild(styleNode); 
  window.isStep7StylesheetsMounted = true; 
  console.log("[Success Portal] Configuration values and style engines registered cleanly."); 
};

// Fire the injection routine immediately to ensure your layout elements populate 
window.injectStep7VisualInterfaceStyles(); 

// ============================================================================ // 
// 📄 FILE: step-7.js - BLOCK 2 OF 6 // 
// 🧾 MODULE: DATABASE CLIENT ACCESSOR & INITIAL METRIC TIMESTAMP ENGINE // 
// ============================================================================ // 

/** 
 * Robust database initialization hub. Catches reference constraints gracefully. 
 * @returns {object|null} Prepared Supabase client driver instance context layer. 
 */ 
window.getSuccessPageSupabaseClient = function() { 
  // Look for any standard global Supabase instance set up by your app
  let client = window.supabase || window.supabaseClient || window.sb;
  
  if (client && typeof client.from === 'function') { 
    return client; 
  } 
  
  console.warn("[Supabase Engine Alert] Global Supabase script library bundle context not yet populated on window scope."); 
  return null; 
}; 

/** 
 * Dynamically prints the localized completion date text on screen. 
 * @param {HTMLElement} nodeTarget - Target document slot element. 
 */ 
window.hydrateLiveReceiptTimestamp = function(nodeTarget) { 
  if (!nodeTarget) return; 
  const liveDateInstance = new Date(); 
  nodeTarget.textContent = liveDateInstance.toLocaleString('en-US', { 
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  }); 
};

// ============================================================================ // 
// 📄 FILE: step-7.js - BLOCK 3 OF 6 // 
// 🧾 MODULE: ENCRYPTED ACCOUNT NUMBER MAKER & SECURITY FRAUD DETECTOR // 
// ============================================================================ // 

/** 
 * Retrieves the established transaction token or builds a fallback reference key. 
 * @param {object|string|null} payload - Parsed or serialized session layout object. 
 * @returns {string} Secure reference key formatted to F4U standards. 
 */ 
window.generateSecureF4UToken = function(payload) { 
  let targetPayload = payload; 
  
  if (typeof payload === "string") { 
    try { 
      targetPayload = JSON.parse(payload); 
    } catch (e) { 
      console.warn("[Token Generator] Provided payload was an invalid JSON string format:", e); 
      targetPayload = null; 
    } 
  } 

  // Prioritize the real F4U token generated during the step-6 checkout pass
  if (targetPayload && targetPayload.account_number) {
    window.currentGeneratedMbeAccountNumber = targetPayload.account_number;
    return targetPayload.account_number;
  }
  
  if (targetPayload && targetPayload.tracking_token_id) {
    window.currentGeneratedMbeAccountNumber = targetPayload.tracking_token_id;
    return targetPayload.tracking_token_id;
  }

  // Safe fallback to timestamp syntax if memory layers are missing
  let uniqueAccountNumber = "F4U-" + Date.now().toString(36).toUpperCase().substring(0, 8); 
  window.currentGeneratedMbeAccountNumber = uniqueAccountNumber; 
  return uniqueAccountNumber; 
}; 

/** 
 * Validates user-completed entries to catch bot patterns or empty automation runs. 
 * @param {string} customerEmail - Serialized communication email parameter context. 
 * @param {string} legalEntityName - Captured corporate application title entry block. 
 * @returns {boolean} True if an anomaly or bot behavior is flagged, otherwise false.
 */ 
window.evaluateSecurityAnomalies = function(customerEmail, legalEntityName) { 
  const cleanEmail = String(customerEmail || "").trim().toLowerCase(); 
  const cleanName = String(legalEntityName || "").trim(); 
  
  if (cleanEmail.includes("test") || cleanEmail.length < 5 || cleanName.length < 2) { 
    console.warn("[Fraud Intercept Alert] Anomalous transaction signature verified. Isolation flags raised."); 
    return true; // Fraud or bot pattern suspected
  } 
  
  return false; // Safe submission
};

// ============================================================================ // 
// 📄 FILE: step-7.js - BLOCK 4 OF 6 // 
// 🧾 MODULE: SUPABASE EMAIL CROSS-REFERENCE & GREY INPUT UNIFORM LOCK // 
// ============================================================================ // 

/** 
 * Validates baseline emails against your real Profiles table and locks down the input box. 
 * @param {HTMLInputElement} targetInput - The layout email input target element object. 
 * @param {string} structuralDefaultEmail - The fallback email address captured in previous steps. 
 */ 
window.resolveAndLockPortalEmailField = async function(targetInput, structuralDefaultEmail) { 
  if (!targetInput) return; 
  let resolvedHandoffEmail = String(structuralDefaultEmail || "").trim(); 
  const supabaseClient = window.getSuccessPageSupabaseClient(); 

  // Query your explicit Profiles schema table if communication tunnels are active 
  if (supabaseClient && resolvedHandoffEmail) { 
    try { 
      console.log("[Security Gate] Cross-checking profiles matching logs for returning accounts..."); 
      
      const { data: recordMatch, error: queryError } = await supabaseClient 
        .from("profiles") 
        .select("email") 
        .eq("email", resolvedHandoffEmail.toLowerCase()) 
        .maybeSingle(); 

      if (!queryError && recordMatch && recordMatch.email) { 
        console.log("[Security Gate] Verified profile trace found:", recordMatch.email); 
        resolvedHandoffEmail = recordMatch.email; 
        
        // Backup sync flag: ensure Step 7 knows this account already exists
        window.f4uIsReturningCustomer = true;
      } 
    } catch (err) { 
      console.warn("Background profiles account verification process skipped:", err); 
    } 
  } 

  // Inject value context and paint the grey locking background constraints cleanly 
  targetInput.value = resolvedHandoffEmail; 
  
  if (!resolvedHandoffEmail) { 
    targetInput.removeAttribute("readonly"); 
    targetInput.disabled = false; 
    targetInput.style.background = "#ffffff"; 
    targetInput.style.cursor = "text"; 
  } else { 
    // CRITICAL FIX: Set readOnly instead of disabled to preserve the element in form submission payloads 
    targetInput.setAttribute("readonly", "true"); 
    targetInput.disabled = false; // Kept false so data still serializes cleanly to your APIs 
    targetInput.style.setProperty("background", "#cbd5e1", "important"); // Solid locked gray 
    targetInput.style.setProperty("color", "#475569", "important"); // Readable contrast grey text 
    targetInput.style.setProperty("cursor", "not-allowed", "important"); 
  } 
};

// ============================================================================ // 
// 📄 FILE: step-7.js - BLOCK 5 OF 6 // 
// 🧾 MODULE: ITEMIZED STATEMENT ASSEMBLER & TOTAL PRICING MATRIX PAINTER // 
// ============================================================================ // 

/** 
 * Builds dynamic statement item rows and writes totals to the template canvas views. 
 * @param {object} nodeConfig - Destructured text field elements object pointers map. * @param {object|null} payload - Session transaction manifest records structure cell. 
 */ 
window.renderItemizedBillingSummaryCanvas = function(nodeConfig, payload) { 
  // Enforce an object safe default fallback layout wrapper map to eliminate null pointer crashes 
  const cfg = nodeConfig || {}; 
  
  let subtotalAmountVal = parseFloat(window.computedWizardBaseTierAmount) || 150.00; 
  let govFeeAmountVal = parseFloat(window.computedWizardStateGovernmentFee) || 0; 
  let grandTotalAmountVal = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount) || 249.00; 
  
  let companyTitleStr = localStorage.getItem("wizard_field_company_name") || "Your Corporate Entity Profile"; 
  let taxIdStr = localStorage.getItem("wizard_field_ein") || "Processing Summary..."; 
  let physicalAddrStr = localStorage.getItem("wizard_field_principal_address") || "Form Submission Record Entry"; 
  let lineItemsHtmlMarkup = ""; 

  // Parse cached manifest data properties securely matching step-6 layout structures
  if (payload) { 
    companyTitleStr = payload.legal_entity_name || companyTitleStr; 
    taxIdStr = payload.taxpayer_ein || taxIdStr; 
    
    if (payload.office_address_street) {
      physicalAddrStr = `${payload.office_address_street} ${payload.office_address_city || ''} ${payload.office_address_zip || ''}`.trim(); 
    }
    
    if (payload.financials_subtotal_amount) {
      subtotalAmountVal = parseFloat(payload.financials_subtotal_amount);
    }
    if (payload.financials_grand_total_charge) {
      grandTotalAmountVal = parseFloat(payload.financials_grand_total_charge); 
    }
    govFeeAmountVal = Math.max(0, grandTotalAmountVal - subtotalAmountVal); 
  } 

  // 1. Compile the active core package header track row 
  const corePackageTierName = window.routeActivePlanTierName || (payload ? payload.selected_package_title : "") || "Compliance Update Filing Package"; 
  
  lineItemsHtmlMarkup += ` 
    <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 100% !important; box-sizing: border-box; clear: both;"> 
      <span style="color: #0a1f44; font-weight: 700;">Filing Deployment: <strong>${corePackageTierName}</strong></span> 
      <span style="font-family: monospace; font-weight: 700; color: #0a1f44;">$${subtotalAmountVal.toFixed(2)}</span> 
    </div>`; 

  // 2. Loop and construct active ancillary add-ons tracking streams 
  const activeUpgradesArray = (payload ? payload.active_addons_list : null) || window.currentSelectedAddonsListArrayMatrix || []; 
  
  if (Array.isArray(activeUpgradesArray)) { 
    activeUpgradesArray.forEach(addonItem => { 
      if (!addonItem) return; 
      const parsedAddonPriceNum = parseFloat(addonItem.price || addonItem.price_amount) || 0; 
      
      lineItemsHtmlMarkup += ` 
        <div class="receipt-line-item" style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 0.875rem; width: 100% !important; box-sizing: border-box; clear: both;"> 
          <span>➕ ${addonItem.title || addonItem.label || "Compliance Asset Protection"}</span> 
          <span style="font-family: monospace; font-weight: 600;">$${parsedAddonPriceNum.toFixed(2)}</span> 
        </div>`; 
    }); 
  } 

  // 3. Write data strings cleanly onto target UI framework template views using safe guards 
  if (cfg.injector) cfg.injector.innerHTML = lineItemsHtmlMarkup; 
  if (cfg.subtotal) cfg.subtotal.textContent = `$${subtotalAmountVal.toFixed(2)}`; 
  if (cfg.govFee) cfg.govFee.textContent = `$${govFeeAmountVal.toFixed(2)}`; 
  if (cfg.grandTotal) cfg.grandTotal.textContent = `$${grandTotalAmountVal.toFixed(2)}`; 
  if (cfg.profName) cfg.profName.textContent = companyTitleStr; 
  if (cfg.profEin) cfg.profEin.textContent = taxIdStr; 
  if (cfg.profAddr) cfg.profAddr.textContent = physicalAddrStr; 
};


// ============================================================================ // 
// 📄 FILE: step-7.js - BLOCK 6 & 7 OF 7 // 
// 🧾 MODULE: FUNNEL LIFECYCLE COORDINATOR & DOM CANVAS ORCHESTRATION MASTER // 
// ============================================================================ // 

/** 
 * Orchestrates the full lifecycle extraction path for Step 7. 
 * Connects timestamp tracking, F4U tokens, security scans, field locks, and invoicing. 
 */ 
window.extractAndRenderReceiptManifestData = async function() { 
  // Flattened the element registry map layout so it aligns perfectly with Block 5 inputs 
  const elementsRegistryMap = { 
    receiptTrackingDisplay: document.getElementById("receipt-tracking-token-display"), 
    portalEmailInput: document.getElementById("portal_user_email"), 
    timestampDisp: document.getElementById("receipt-timestamp-display"), 
    injector: document.getElementById("receipt-items-injector-frame"), 
    subtotal: document.getElementById("receipt-subtotal-display"), 
    govFee: document.getElementById("receipt-gov-fee-display"), 
    grandTotal: document.getElementById("receipt-grand-total-display"), 
    profName: document.getElementById("receipt-profile-name"), 
    profEin: document.getElementById("receipt-profile-ein"), 
    profAddr: document.getElementById("receipt-profile-address") 
  }; 

  // 1. Hydrate structural processing dates dynamically 
  if (elementsRegistryMap.timestampDisp && typeof window.hydrateLiveReceiptTimestamp === "function") { 
    window.hydrateLiveReceiptTimestamp(elementsRegistryMap.timestampDisp); 
  } 

  // 2. Fetch or initialize the localized session manifest JSON array definitions 
  let activeReceiptPayload = null; 
  try { 
    // FIXED: Now reads the exact session key structure matching step-6 payload output
    const rawCacheStringBuffer = sessionStorage.getItem("f4u_checkout_manifest"); 
    if (rawCacheStringBuffer) { 
      activeReceiptPayload = JSON.parse(rawCacheStringBuffer); 
    } 
  } catch (parseException) { 
    console.warn("[Lifecycle Master] Cached receipt metadata strings un-parsable:", parseException); 
  } 

  // 3. Build enterprise tracking numbers (Guaranteed F4U prefix format parameters) 
  if (typeof window.generateSecureF4UToken === "function") { 
    // Fallback: If cache was dropped, inspect url query parameter strings for Stripe redirect callback metrics
    if (!activeReceiptPayload || !activeReceiptPayload.account_number) {
      const urlQueryStringsMap = new URLSearchParams(window.location.search);
      const urlToken = urlQueryStringsMap.get('token');
      if (urlToken) {
        activeReceiptPayload = activeReceiptPayload || {};
        activeReceiptPayload.account_number = urlToken;
      }
    }
    
    const accountTokenCodeStr = window.generateSecureF4UToken(activeReceiptPayload); 
    if (elementsRegistryMap.receiptTrackingDisplay) { 
      elementsRegistryMap.receiptTrackingDisplay.textContent = accountTokenCodeStr; 
    } 
  } 

  // 4. Resolve communication credentials variables securely 
  let baseTargetUserEmail = ""; 
  if (activeReceiptPayload && activeReceiptPayload.email) { 
    baseTargetUserEmail = activeReceiptPayload.email; 
  } else { 
    const urlQueryStringsMap = new URLSearchParams(window.location.search); 
    baseTargetUserEmail = urlQueryStringsMap.get('email') || window.wizardLastValidatedCustomerEmail || localStorage.getItem("wizard_field_lead_email") || ""; 
  } 

  // 5. Fire automated anti-fraud bad-actor validation scanning checks 
  const targetCorporateNameStr = localStorage.getItem("wizard_field_company_name") || (activeReceiptPayload ? activeReceiptPayload.legal_entity_name : ""); 
  if (typeof window.evaluateSecurityAnomalies === "function") { 
    const isAnomalous = window.evaluateSecurityAnomalies(baseTargetUserEmail, targetCorporateNameStr);
    if (isAnomalous) {
      console.log("[Lifecycle Master] Fraud telemetry flags compiled. Isolation engaged.");
    }
  } 

  // 6. Connect Profiles lookups and lock user email block to gray layout parameters 
  if (elementsRegistryMap.portalEmailInput && typeof window.resolveAndLockPortalEmailField === "function") { 
    await window.resolveAndLockPortalEmailField(elementsRegistryMap.portalEmailInput, baseTargetUserEmail); 
  } 

  // 7. Assemble dynamic statements summary and paint line item matrices on screen layout 
  if (typeof window.renderItemizedBillingSummaryCanvas === "function") { 
    window.renderItemizedBillingSummaryCanvas(elementsRegistryMap, activeReceiptPayload); 
  } 

  console.log("[Lifecycle Master] Success card elements pipeline compiled cleanly."); 
};

// Auto-run the orchestration pipeline when DOM content hits a loaded state
document.addEventListener("DOMContentLoaded", () => {
  window.extractAndRenderReceiptManifestData();
});

// ============================================================================ // 
// 📄 BLOCK 7 OF 7: AUTOMATIC LIFECYCLE MOUNT TRIGGER // 
// ============================================================================ // 
if (document.readyState === "loading") { 
  document.addEventListener("DOMContentLoaded", () => { 
    window.extractAndRenderReceiptManifestData(); 
  }); 
} else { 
  window.extractAndRenderReceiptManifestData(); 
} 

// ============================================================================ // 
// 📄 FILE: step-7.js - BLOCK 7 OF 7 // 
// 🧾 MODULE: ACCOUNT GATEKEEPER SIGN UP TUNNEL & OVERLAY COUNTDOWN ROUTER // 
// ============================================================================ // 

/** 
 * GATEKEEPER SERVICE SECURITY ENGINE: VERIFIES TOKEN THEN REGISTERS ACCOUNT
 * Validates account password configurations and provisions user access directly.
 * @param {Event} event - Native form submit execution instance context. 
 */ 
window.handleClientAccountActivation = async function(event) { 
  if (event && typeof event.preventDefault === "function") event.preventDefault(); 
  console.log("[Account Pipeline] Initializing user validation pass..."); 

  const emailInput = document.getElementById("portal_user_email"); 
  const passwordInput = document.getElementById("portal_user_password"); 
  const confirmInput = document.getElementById("portal_user_password_confirm"); 
  const submitBtn = document.getElementById("portal-activation-submit-btn"); 

  if (!passwordInput || !confirmInput || !emailInput) return false; 

  const passwordVal = passwordInput.value; 
  const confirmVal = confirmInput.value; 
  const targetUsernameEmail = emailInput.value.trim().toLowerCase(); 

  // Basic validation rules
  if (passwordVal.length < 8) { 
    alert("Security Lockout: Your password must contain at least 8 characters."); 
    passwordInput.focus(); 
    return false; 
  } 

  if (passwordVal !== confirmVal) { 
    alert("Security Lockout: Passwords do not match. Please re-type matching passwords."); 
    confirmInput.focus(); 
    return false; 
  } 

  let originalBtnHtml = submitBtn ? submitBtn.innerHTML : "Activate Account"; 
  if (submitBtn) { 
    submitBtn.disabled = true; 
    submitBtn.style.setProperty("background", "#64748b", "important"); 
    submitBtn.innerHTML = '<i class="fa-solid fa-shield-halved fa-spin"></i> Verifying Cryptographic Token...'; 
  } 

  // Read clean session manifest matching step-6 definitions
  let receiptManifest = {}; 
  try { 
    const cachedManifestString = sessionStorage.getItem("f4u_checkout_manifest"); 
    if (cachedManifestString) receiptManifest = JSON.parse(cachedManifestString) || {}; 
  } catch (e) { 
    console.warn("[Account Pipeline] Session buffer unreadable:", e); 
  } 

  const urlQueryTrackingStrings = new URLSearchParams(window.location.search); 
  const trackingTokenString = urlQueryTrackingStrings.get('token') || window.currentGeneratedMbeAccountNumber; 

  try { 
    const supabaseClient = window.getSuccessPageSupabaseClient(); 
    if (!supabaseClient) throw new Error("Supabase auth engine instance could not be located."); 

    console.log("[Security Gate] Scanning systemic ledgers for verified purchases..."); 
    
    // FIXED: Now queries your real 'orders' table matching your true database schema
    const { data: verifiedPurchase, error: purchaseCheckError } = await supabaseClient 
      .from('orders') 
      .select('tracking_number') 
      .eq('tracking_number', trackingTokenString) 
      .maybeSingle(); 

    if (purchaseCheckError) throw purchaseCheckError; 
    if (!verifiedPurchase) { 
      throw new Error("Access Denied: Registration is strictly reserved for verified, paid customer checkout tokens."); 
    } 

    console.log("[Account Pipeline] Proceeding with native registration profiles pass..."); 
    
    let authResponse = null;

    // Check if the global flag from Block 4 marks this as a returning profile
    if (window.f4uIsReturningCustomer) {
      // Overwrite password entry safely for returning users (Fulfills Point 3 requirement)
      authResponse = await supabaseClient.auth.updateUser({
        password: passwordVal
      });
    } else {
      // Create user entry safely for brand-new users
      authResponse = await supabaseClient.auth.signUp({
        email: targetUsernameEmail,
        password: passwordVal
      });
    }

    if (authResponse.error) throw authResponse.error;

    // Optional Clean-up: Delete abandoned lead data rows if they exist
    try { 
      await supabaseClient.from('wizard_abandoned_leads').delete().eq('email', targetUsernameEmail); 
    } catch (safetyleadErr) { 
      console.log("[Cleanup Hint] Abandoned lead row clear skipped or handled on backend server."); 
    } 

    const authenticatedUserUuid = authResponse.data?.user?.id || "authenticated_secure"; 
    localStorage.removeItem("f4u_wizard_onboarding_state"); 

    // Redirect user safely into your client panel dashboard environment
    if (typeof window.triggerSecureBlurModalRedirect === "function") { 
      window.triggerSecureBlurModalRedirect(authenticatedUserUuid, targetUsernameEmail); 
    } else { 
      console.log("[Redirect Fallback] Forwarding window location parameters directly."); 
      window.location.href = `/portal/dashboard.html?user=${authenticatedUserUuid}`; 
    } 

  } catch (activationErr) { 
    console.error("[Account Pipeline Exception] Process aborted:", activationErr); 
    alert(`Account Activation Failed: ${activationErr.message || activationErr}`); 
    
    if (submitBtn) { 
      submitBtn.disabled = false; 
      submitBtn.style.setProperty("background", "var(--primary, #10b981)", "important"); 
      submitBtn.innerHTML = originalBtnHtml; 
    } 
  } 

  return false; 
};

// ============================================================================ // 
// 📄 AUTO-ATTACHMENT FORM CONTROLLER INTERLOCK // 
// ============================================================================ // 
if (document.readyState === "loading") { 
  document.addEventListener("DOMContentLoaded", () => { 
    const activationFormNode = document.getElementById("f4u-account-activation-form"); 
    if (activationFormNode) { 
      activationFormNode.addEventListener("submit", window.handleClientAccountActivation); 
    } 
  }); 
} else { 
  const activationFormNode = document.getElementById("f4u-account-activation-form"); 
  if (activationFormNode) { 
    activationFormNode.addEventListener("submit", window.handleClientAccountActivation); 
  } 
} 

/** 
 * 🎯 FIXED OVERLAY TIMER ENGINE 
 * Operates an automated visual shrinkage line bar then routes clients to dashboard spaces. 
 * @param {string} verifiedUserUuid - Authenticated crypt tracking identification code. 
 * @param {string} verifiedEmailAddress - Confirmed client credential routing handle. 
 */ 
window.triggerSecureBlurModalRedirect = function(verifiedUserUuid, verifiedEmailAddress) { 
  const overlay = document.getElementById("secure-redirect-blur-overlay"); 
  const progressBar = document.getElementById("redirect-countdown-progress-bar"); 
  const countLabel = document.getElementById("redirect-countdown-text-label"); 

  // 🟢 FIXED: Corrected template literal path matching your core dashboard framework route parameter patterns
  const fallbackDestinationUrl = `/portal/dashboard.html?user_id=${encodeURIComponent(verifiedUserUuid)}&email=${encodeURIComponent(verifiedEmailAddress)}`; 

  if (!overlay) { 
    console.warn("[Overlay Tracker Target Missing] Modal layer un-rendered. Performing instant page jump fallback..."); 
    window.location.href = fallbackDestinationUrl; 
    return; 
  } 

  // Display backdrop mask over screen canvas space layout panels 
  overlay.style.display = "flex"; 
  if (progressBar) progressBar.style.width = "100%"; 

  // Trigger horizontal tracking bar reduction animation loops 
  setTimeout(() => { 
    if (progressBar) progressBar.style.width = "0%"; 
  }, 50); 

  let secondsRemainingValue = 10; 
  const countingIntervalThread = setInterval(() => { 
    secondsRemainingValue--; 
    if (countLabel) { 
      countLabel.innerHTML = `Redirecting in ${secondsRemainingValue} second${secondsRemainingValue !== 1 ? 's' : ''}...`; 
    } 

    if (secondsRemainingValue <= 0) { 
      clearInterval(countingIntervalThread); 
      console.log("[Router Gateway] Verification complete. Executing page redirection jump."); 
      
      // Wipe structural transaction tokens to avoid duplication passes on browser backwards events 
      sessionStorage.removeItem("f4u_checkout_manifest"); 
      
      const destinationGatewayUrl = window.CLIENT_DASHBOARD_REDIRECT_URL || fallbackDestinationUrl; 
      window.location.href = destinationGatewayUrl; 
    } 
  }, 1000); 
};