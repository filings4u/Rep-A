// ============================================================================ //
// 📡 CENTRALIZED SUPABASE CONNECTION & INTERACTIVE FORM VAULT ENGINE           //
// ============================================================================ //
(function() {
  "use strict";

  const URL_VAULT_ROUTER = window.ENV_SUPABASE_URL || "";
  const ACCESS_TOKEN_VAULT = window.ENV_SUPABASE_ANON_KEY || "";

  if (typeof supabase !== "undefined" && URL_VAULT_ROUTER && ACCESS_TOKEN_VAULT) {
    window.supabaseClientInstance = supabase.createClient(URL_VAULT_ROUTER, ACCESS_TOKEN_VAULT);
    console.log("[Supabase Sync] Secure database connection pipeline initialized.");
  }
})();

/**
 * Programmatically assembles and injects the Save Progress Modal UI directly into the DOM.
 */
function displaySaveProgressModalInterface() {
  if (document.getElementById("f4u-save-progress-modal-root")) return;

  const modalOverlayOverlay = document.createElement("div");
  modalOverlayOverlay.id = "f4u-save-progress-modal-root";
  modalOverlayOverlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(10, 31, 68, 0.6); backdrop-filter: blur(4px); display: flex; justify-content: center; align-items: center; z-index: 99999; box-sizing: border-box;";

  modalOverlayOverlay.innerHTML = `
    <div style="background: #ffffff; width: 100%; max-width: 500px; padding: 35px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); position: relative; box-sizing: border-box; font-family: sans-serif; text-align: left;">
      
      <button type="button" onclick="window.dismissSaveProgressModalInterface()" style="position: absolute; top: 16px; right: 16px; background: transparent; border: none; font-size: 1.25rem; color: #64748b; cursor: pointer;">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div style="margin-bottom: 24px;">
        <h3 style="margin: 0; color: #0a1f44; font-size: 1.35rem; font-weight: 800;">Save Your Progress</h3>
        <p style="margin: 6px 0 0 0; color: #64748b; font-size: 0.875rem;">Enter your contact information below to secure your application details and resume from any device.</p>
      </div>

      <form id="f4u-save-progress-vault-form" onsubmit="window.processSaveProgressSubmissionPass(event)" style="display: flex; flex-direction: column; gap: 16px;">
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label style="font-weight: 700; font-size: 0.8rem; color: #0a1f44;">First Name *</label>
            <input type="text" id="vault_client_first_name" required style="width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; box-sizing: border-box; outline: none; font-size: 0.9rem;">
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <label style="font-weight: 700; font-size: 0.8rem; color: #0a1f44;">Last Name *</label>
            <input type="text" id="vault_client_last_name" required style="width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; box-sizing: border-box; outline: none; font-size: 0.9rem;">
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 6px;">
          <label style="font-weight: 700; font-size: 0.8rem; color: #0a1f44;">Email Address *</label>
          <input type="email" id="vault_client_email" required style="width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; box-sizing: border-box; outline: none; font-size: 0.9rem;">
        </div>

        <div style="display: flex; flex-direction: column; gap: 6px;">
          <label style="font-weight: 700; font-size: 0.8rem; color: #0a1f44;">Phone Number *</label>
          <input type="tel" id="vault_client_phone" required style="width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; box-sizing: border-box; outline: none; font-size: 0.9rem;">
        </div>

        <button type="submit" id="vault-save-submit-btn" style="width: 100%; padding: 14px; background: #0a1f44; color: #ffffff; border: none; border-radius: 6px; font-weight: 700; cursor: pointer; margin-top: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.95rem; transition: background 0.2s;">
          Secure Progress Data <i class="fa-solid fa-cloud-arrow-up"></i>
        </button>
      </form>
    </div>
  `;
  document.body.appendChild(modalOverlayOverlay);
}

window.dismissSaveProgressModalInterface = function() {
  const targetModal = document.getElementById("f4u-save-progress-modal-root");
  if (targetModal) targetModal.remove();
};

/**
 * Transmits lead information straight to the custom wizard_abandoned_leads schema table.
 */
window.processSaveProgressSubmissionPass = async function(event) {
  if (event && event.preventDefault) event.preventDefault();
  
  const db = window.supabaseClientInstance || window.getSuccessPageSupabaseClient?.() || window.supabaseClient;
  const submitBtn = document.getElementById("vault-save-submit-btn");
  
  if (!db) {
    alert("Configuration Error: Connection to database vault is uninitialized.");
    return;
  }

  const firstName = document.getElementById("vault_client_first_name")?.value.trim();
  const lastName = document.getElementById("vault_client_last_name")?.value.trim();
  const email = document.getElementById("vault_client_email")?.value.trim().toLowerCase();
  const phone = document.getElementById("vault_client_phone")?.value.trim();

  let originalBtnHtml = "";
  if (submitBtn) {
    originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Synchronizing Records...';
  }

  // 🟢 TARGETING PRODUCTION SCHEMA: Maps elements perfectly to your column structures
  const leadPayload = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    current_step: parseInt(window.currentWizardActiveStep, 10) || 1
  };

  try {
    // Write data natively into your production table matching your exact unique keys
    const { error: transactionError } = await db
      .from('wizard_abandoned_leads')
      .upsert(leadPayload, { onConflict: 'email' });

    if (transactionError) throw transactionError;

    // Persist tracking parameters locally so Step 6 processing functions can evaluate states
    localStorage.setItem("f4u_is_returning_customer", "true");
    localStorage.setItem("f4u_saved_progress_email", email);

    alert("✓ Success! Your application data has been securely saved. You can complete your registration at any time.");
    window.dismissSaveProgressModalInterface();

  } catch (err) {
    console.error("[Abandoned Lead Write Error]", err);
    alert(`Database Transaction Rejected: ${err.message}`);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  }
};

window.displaySaveProgressModalInterface = displaySaveProgressModalInterface;

document.addEventListener("DOMContentLoaded", () => {
  const saveProgressBtn = document.getElementById("sidebarFallbackLogoutBtn");
  if (saveProgressBtn) {
    saveProgressBtn.removeAttribute("onclick");
    saveProgressBtn.addEventListener("click", window.displaySaveProgressModalInterface);
  }
});
