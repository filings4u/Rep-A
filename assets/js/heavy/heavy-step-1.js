// ============================================================================ //
// 🚛 FILINGS4U HEAVY TAX ENGINE - STEP 1: FLEET INTAKE & LIVE IRS PREFLIGHT (PART 1)
// ============================================================================ //
(function() {
  "use strict";

  // ============================================================================ //
  // 📱 AUTOMATED MOBILE RESPONSIVE CSS INJECTOR ENGINE                         //
  // ============================================================================ //
  function injectMobileResponsiveStep1Styles() {
    if (document.getElementById("f4u-step1-responsive-styles")) return;
    
    // Apply structural alignment wrappers onto native layout grids dynamically
    const nameField = document.getElementById("heavy_business_name");
    if (nameField && nameField.parentElement && !nameField.parentElement.classList.contains("f4u-form-row-grid")) {
      const einField = document.getElementById("heavy_ein_number");
      if (einField && nameField.parentElement === einField.parentElement) {
        const parentForm = nameField.parentElement;
        const rowWrapper = document.createElement("div");
        rowWrapper.className = "f4u-form-row-grid";
        parentForm.insertBefore(rowWrapper, nameField);
        rowWrapper.appendChild(nameField);
        rowWrapper.appendChild(einField);
      }
    }
  }

  // --- INTERACTIVE EIN MASKING MECHANICS ---
  function handleHeavyEinInputMasking(event) {
    const inputField = event.target;
    let rawDigits = inputField.value.replace(/\D/g, "");
    if (rawDigits.length > 2) {
      inputField.value = rawDigits.substring(0, 2) + "-" + rawDigits.substring(2, 9);
    } else {
      inputField.value = rawDigits;
    }
  }

  // --- CLEAN VISUAL VALIDATION ERROR FEEDBACK HELPER ---
  function displayOnScreenValidationError(inputNode, boldMessageText) {
    if (!inputNode) return;
    inputNode.classList.remove("f4u-shake-alert");
    void inputNode.offsetWidth; // Repaint frame layout
    
    inputNode.style.setProperty("border-color", "#ef4444", "important");
    inputNode.style.setProperty("box-shadow", "0 0 0 3px rgba(239, 68, 68, 0.15)", "important");
    inputNode.classList.add("f4u-shake-alert");
    inputNode.focus();
    
    console.warn(`[Validation Failed] Field issue: #${inputNode.id}. ${boldMessageText}`);
    setTimeout(() => {
      inputNode.classList.remove("f4u-shake-alert");
      inputNode.style.setProperty("border-color", "#cbd5e1", "important");
      inputNode.style.setProperty("box-shadow", "none", "important");
    }, 1500);
  }

  // Expose local setup modules out to global loop instances cleanly
  window.injectMobileResponsiveStep1Styles = injectMobileResponsiveStep1Styles;
  window.handleHeavyEinInputMasking = handleHeavyEinInputMasking;
  window.displayOnScreenValidationError = displayOnScreenValidationError;
})();


// ============================================================================ //
// 🚛 FILINGS4U HEAVY TAX ENGINE - STEP 1: FLEET INTAKE & LIVE IRS PREFLIGHT (PART 2)
// ============================================================================ //
(function() {
  "use strict";

  // Re-pull core helper properties out of local lexical namespace memory paths safely
  const displayOnScreenValidationError = window.displayOnScreenValidationError;

  // --- ATOMIC INTAKE DATA DISPATCHER WITH LIVE EDGE INTENTS ---
  window.saveHeavyIntakeStep1 = async function() {
    let client = window.supabaseClient || window.supabase || window.f4uWizardSupabaseInstance;
    if (!client || typeof client.from !== "function") {
      if (typeof window.supabase?.createClient === "function" && window.SUPABASE_URL && window.SUPABASE_ANON_KEY) {
        window.f4uWizardSupabaseInstance = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
        client = window.f4uWizardSupabaseInstance;
      }
    }

    // 1. Ingest flat layout form element nodes precisely
    const nameEl = document.getElementById("heavy_business_name");
    const einEl = document.getElementById("heavy_ein_number");
    const typeEl = document.getElementById("heavy_business_type");
    const streetEl = document.getElementById("heavy_address_street");
    const cityEl = document.getElementById("heavy_address_city");
    const stateEl = document.getElementById("heavy_address_state");
    const zipEl = document.getElementById("heavy_address_zip");
    const titleEl = document.getElementById("heavy_signing_title");
    const emailEl = document.getElementById("heavy_contact_email");

    // 2. ALERT-FREE FRONTEND PREFLIGHT LOGIC VALIDATIONS
    if (!nameEl?.value.trim()) { displayOnScreenValidationError(nameEl, "Legal Business Name is required."); return; }
    if (!einEl?.value.trim()) { displayOnScreenValidationError(einEl, "EIN is required."); return; }
    
    const cleanEin = einEl.value.replace(/\D/g, "");
    if (cleanEin.length !== 9) { displayOnScreenValidationError(einEl, "EIN must contain exactly 9 numerical digits."); return; }
    if (!streetEl?.value.trim()) { displayOnScreenValidationError(streetEl, "Street Address is required."); return; }
    if (!cityEl?.value.trim()) { displayOnScreenValidationError(cityEl, "City parameter is required."); return; }
    if (!stateEl?.value.trim()) { displayOnScreenValidationError(stateEl, "Two-letter state code is required."); return; }
    if (!zipEl?.value.trim()) { displayOnScreenValidationError(zipEl, "Zip Code is required."); return; }
    if (!titleEl?.value.trim()) { displayOnScreenValidationError(titleEl, "Authorized Signing Title is required."); return; }
    if (!emailEl?.value.trim()) { displayOnScreenValidationError(emailEl, "Contact Email Address is required."); return; }

    // Lock button view layout elements into an active processing loading status state
    const actionButton = document.querySelector("#heavy-panel-1 button");
    const originalBtnText = actionButton ? actionButton.innerHTML : "";
    if (actionButton) {
      actionButton.disabled = true;
      actionButton.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Verifying EIN with IRS...`;
    }

    try {
      // =========================================================================
      // 📡 LIVE IRS DATABASE RECORD VERIFICATION PASS (EDGE INTERCEPT)
      // =========================================================================
      const supabaseProjectUrl = window.SUPABASE_URL || "https://lrbimrlbskjweynxlgas.supabase.co";
      const edgeFunctionEndpoint = `${supabaseProjectUrl}/functions/v1/irs-ein-validator`;
      
      console.log("[IRS Preflight] Invoking remote backend verification gateways...");
      const edgeResponse = await fetch(edgeFunctionEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${window.SUPABASE_ANON_KEY || client?.supabaseKey}`
        },
        body: JSON.stringify({
          einNumber: cleanEin,
          businessName: nameEl.value.trim(),
          businessType: typeEl.value
        })
      });

      const verificationResult = await edgeResponse.json();

      // If the IRS validation fails, highlight the entry fields and block step progression
      if (verificationResult && verificationResult.isValid === false) {
        console.error("[IRS Rejection] Identity mismatch returned from verification node.");
        if (actionButton) {
          actionButton.disabled = false;
          actionButton.innerHTML = originalBtnText;
        }
        displayOnScreenValidationError(einEl, verificationResult.message || "IRS Name Control mismatch.");
        displayOnScreenValidationError(nameEl, "Ensure name matches exactly with IRS registration documents.");
        return; 
      }

      // 3. PERSIST VALID DATA TO POSTGRESQL TABLES
      const fleetPayload = {
        legal_business_name: nameEl.value.trim(),
        ein_number: cleanEin,
        business_type: typeEl.value,
        street_address: streetEl.value.trim(),
        city: cityEl.value.trim(),
        state_code: stateEl.value.trim().toUpperCase().substring(0, 2),
        zip_code: zipEl.value.trim(),
        signing_title: titleEl.value.trim(),
        contact_email: emailEl.value.trim().toLowerCase(),
        tax_year_start: "2026"
      };

      let sessionResultUuid = window.activeHeavySessionUuid;
      if (client && typeof client.from === "function") {
        if (sessionResultUuid) {
          await client.from("heavy_tax_sessions").update(fleetPayload).eq("id", sessionResultUuid);
        } else {
          const { data, error } = await client.from("heavy_tax_sessions").insert([fleetPayload]).select("id").single();
          if (error) throw error;
          sessionResultUuid = data.id;
          window.activeHeavySessionUuid = sessionResultUuid;
          localStorage.setItem("f4u_heavy_session_id", sessionResultUuid);
        }
      }

      console.log("[Heavy Step 1 Success] Verification cleared. Advancing workspace views.");
      if (typeof window.switchHeavyTaxViewPanel === "function") {
        window.switchHeavyTaxViewPanel(2);
      }

    } catch (faultTrace) {
      console.error("[Heavy Step 1 Server Exception Intercepted]", faultTrace.message);
      if (typeof window.switchHeavyTaxViewPanel === "function") {
        window.switchHeavyTaxViewPanel(2);
      }
    } finally {
      if (actionButton) {
        actionButton.disabled = false;
        actionButton.innerHTML = originalBtnText;
      }
    }
  };

  // --- HOOK MASK AND RESPONSIVE LISTENERS AUTOMATICALLY ON BOOT ---
  function bindHeavyIntakeStep1Routines() {
    if (typeof window.injectMobileResponsiveStep1Styles === "function") {
      window.injectMobileResponsiveStep1Styles();
    }
    
    const einInputField = document.getElementById("heavy_ein_number");
    if (einInputField) {
      einInputField.addEventListener("input", window.handleHeavyEinInputMasking);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindHeavyIntakeStep1Routines);
  } else {
    bindHeavyIntakeStep1Routines();
  }
})();
