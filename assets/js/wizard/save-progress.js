// ============================================================================ //
// 📡 CENTRALIZED SUPABASE CONNECTION & INTERACTIVE FORM VAULT ENGINE           //
// ============================================================================ //
(function() {
    "use strict";

    // Read environment parameters natively from window configuration layers to avoid hardcoding variables
    const URL_VAULT_ROUTER = window.ENV_SUPABASE_URL || "";
    const ACCESS_TOKEN_VAULT = window.ENV_SUPABASE_ANON_KEY || "";

    if (typeof supabase !== "undefined" && URL_VAULT_ROUTER && ACCESS_TOKEN_VAULT) {
        window.supabaseClientInstance = supabase.createClient(URL_VAULT_ROUTER, ACCESS_TOKEN_VAULT);
        console.log("[Supabase Sync] Secure database connection pipeline initialized.");
    }
})();

/**
 * Programmatically assembles and injects the Save Progress Modal UI directly into the DOM tree canvas.
 */
function displaySaveProgressModalInterface() {
    // Prevent duplicate modal windows from mounting onto the active canvas
    if (document.getElementById("f4u-save-progress-modal-root")) return;

    const modalOverlayOverlay = document.createElement("div");
    modalOverlayOverlay.id = "f4u-save-progress-modal-root";
    modalOverlayOverlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(10, 31, 68, 0.6); backdrop-filter: blur(4px); display: flex; justify-content: center; align-items: center; z-index: 99999; box-sizing: border-box;";

    // Inject pure HTML directly to map out registration collection fields cleanly
    modalOverlayOverlay.innerHTML = `
        <div style="background: #ffffff; width: 100%; max-width: 500px; padding: 35px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); position: relative; box-sizing: border-box; font-family: sans-serif; text-align: left;">
            <button type="button" onclick="window.dismissSaveProgressModalInterface()" style="position: absolute; top: 16px; right: 16px; background: transparent; border: none; font-size: 1.25rem; color: #64748b; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
            
            <div style="margin-bottom: 24px;">
                <h3 style="margin: 0; color: #0a1f44; font-size: 1.35rem; font-weight: 800;">Save Your Progress</h3>
                <p style="margin: 6px 0 0 0; color: #64748b; font-size: 0.875rem;">Enter your contact information below to secure your application details and resume from any device.</p>
            </div>

            <form id="f4u-save-progress-vault-form" onsubmit="window.processSaveProgressSubmissionPass(event)" style="display: flex; flex-direction: column; gap: 16px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <label style="font-weight: 700; font-size: 0.8rem; color: #0a1f44;">First Name *</label>
                        <input type="text" id="vault_client_first_name" required style="width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; box-sizing: border-box;">
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <label style="font-weight: 700; font-size: 0.8rem; color: #0a1f44;">Last Name *</label>
                        <input type="text" id="vault_client_last_name" required style="width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; box-sizing: border-box;">
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 6px;">
                    <label style="font-weight: 700; font-size: 0.8rem; color: #0a1f44;">Email Address *</label>
                    <input type="email" id="vault_client_email" required style="width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; box-sizing: border-box;">
                </div>

                <div style="display: flex; flex-direction: column; gap: 6px;">
                    <label style="font-weight: 700; font-size: 0.8rem; color: #0a1f44;">Phone Number *</label>
                    <input type="tel" id="vault_client_phone" required style="width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; box-sizing: border-box;">
                </div>

                <button type="submit" id="vault-save-submit-btn" style="width: 100%; padding: 14px; background: #0a1f44; color: #ffffff; border: none; border-radius: 6px; font-weight: 700; cursor: pointer; margin-top: 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    Secure Progress Data <i class="fa-solid fa-cloud-arrow-up"></i>
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modalOverlayOverlay);
}

/**
 * Closes and unmounts the Save Progress interface from the viewport layout hierarchy.
 */
window.dismissSaveProgressModalInterface = function() {
    const targetModal = document.getElementById("f4u-save-progress-modal-root");
    if (targetModal) targetModal.remove();
};

/**
 * Captures collected HTML metadata alongside all localStorage form parameters and transmits to Supabase.
 */
window.processSaveProgressSubmissionPass = async function(event) {
    if (event && event.preventDefault) event.preventDefault();

    const db = window.supabaseClientInstance;
    const submitBtn = document.getElementById("vault-save-submit-btn");

    if (!db) {
        alert("Configuration Error: Connection to database vault is uninitialized.");
        return;
    }

    // Capture contact metrics explicitly from our newly rendered HTML fields node properties
    const firstName = document.getElementById("vault_client_first_name")?.value.trim();
    const lastName = document.getElementById("vault_client_last_name")?.value.trim();
    const email = document.getElementById("vault_client_email")?.value.trim().toLowerCase();
    const phone = document.getElementById("vault_client_phone")?.value.trim();

    // Visual loading state updates to lock multiple submission triggers
    let originalBtnHtml = "";
    if (submitBtn) {
        originalBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Synchronizing Records...';
    }

    // Scrape internal wizard variables dynamically straight from operational runtime caches
    const cacheKeyNamespace = "f4u_wizard_onboarding_state";
    const nestedFormCache = JSON.parse(localStorage.getItem(cacheKeyNamespace) || "{}");
    const activeStateCode = localStorage.getItem("wizard_selected_state") || window.selectedJurisdiction || "";
    const activeServiceSlug = localStorage.getItem("wizard_service_key") || window.routeActiveServiceKey || "";

    // Assemble the completely dynamic database row structure matching your Supabase columns
    const databaseRecordPayload = {
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        phone_number: phone,
        active_step_index: parseInt(window.currentWizardActiveStep, 10) || 1,
        jurisdiction_state: activeStateCode,
        selected_service_slug: activeServiceSlug,
        form_cache_metadata: nestedFormCache, // Pushes complete input pairs cleanly as a JSONB column map block
        saved_at: new Date().toISOString()
    };

    try {
        // Transmit row properties dynamically down to your custom progress table
        // Replace 'user_wizard_progress' with your explicit Supabase project table name
        const { error: transactionError } = await db.from('user_wizard_progress').upsert(databaseRecordPayload, {
            onConflict: 'email_address' // Upserts cleanly based on their unique email signature
        });

        if (transactionError) throw transactionError;

        alert("Success! Your progress metrics have been securely encrypted and cached.");
        window.dismissSaveProgressModalInterface();

    } catch (err) {
        console.error("[Supabase Write Loop Aborted]", err);
        alert(`Database Transaction Rejected: ${err.message}`);
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
        }
    }
};

window.displaySaveProgressModalInterface = displaySaveProgressModalInterface;

// Connect the programmatic HTML overlay generator straight to your sidebar click rows
document.addEventListener("DOMContentLoaded", () => {
    const saveProgressBtn = document.getElementById("sidebarFallbackLogoutBtn");
    if (saveProgressBtn) {
        // Intercept click triggers natively to invoke our dynamic rendering block interface loop
        saveProgressBtn.removeAttribute("onclick");
        saveProgressBtn.addEventListener("click", window.displaySaveProgressModalInterface);
    }
});
