// ============================================================================ //
// 🔒 STEP 7 SUCCESS PORTAL: CLIENT ACCOUNT ACTIVATION LOGIC                    //
// ============================================================================ //
/**
 * Processes account submission workflows, runs validation rules, and initializes database vaults.
 * @param {Event} event - Form submission event context.
 */
async function handleClientAccountActivation(event) {
    if (event && typeof event.preventDefault === "function") {
        event.preventDefault();
    }
    console.log("[Success Portal] Initializing client credentials activation pass...");

    const emailInput = document.getElementById("portal_user_email");
    const passwordInput = document.getElementById("portal_user_password");
    const confirmInput = document.getElementById("portal_user_password_confirm");
    const submitBtn = document.getElementById("portal-activation-submit-btn");

    if (!passwordInput || !confirmInput) return false;

    const passwordVal = passwordInput.value;
    const confirmVal = confirmInput.value;

    // 🚩 Validation Gate 1: Check length requirements
    if (passwordVal.length < 8) {
        alert("Security Lockout: Your password must contain at least 8 characters.");
        passwordInput.focus();
        return false;
    }

    // 🚩 Validation Gate 2: Enforce parity alignment
    if (passwordVal !== confirmVal) {
        alert("Security Lockout: Passwords do not match. Please verify your typing arrays.");
        confirmInput.focus();
        return false;
    }

    // Alter visual configurations to prevent duplicate API submission cycles
    let originalBtnHtml = "";
    if (submitBtn) {
        originalBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.style.setProperty("background", "#64748b", "important");
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Encrypting Vault Locks...';
    }

    // Extract transaction tracking records cached during Step 6 checkout pass
    let receiptManifest = {};
    try {
        const cachedManifestString = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
        if (cachedManifestString) {
            receiptManifest = JSON.parse(cachedManifestString) || {};
        }
    } catch (e) {
        console.warn("[Success Portal] Receipt parameters unreadable:", e);
    }

    const registrationPayload = {
        username_email: emailInput ? emailInput.value : (receiptManifest.communications_email || ""),
        secure_phrase: passwordVal, // System database handles SHA-256 one-way hashing server-side
        associated_tx_hash: receiptManifest.transaction_hash_id || "",
        corporate_identity: receiptManifest.legal_entity_name || ""
    };

    try {
        console.log("[Success Portal] Dispatching initialization credentials down to database clusters...");
        const targetActivationRoute = window.PORTAL_ACTIVATION_API_ROUTE || "/api/portal/activate";
        const responseChannel = await fetch(targetActivationRoute, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registrationPayload)
        });

        const outcomeData = await responseChannel.json();

        if (responseChannel.ok && outcomeData.success) {
            console.log("[Success Portal] Security channel deployed. Vault initialized successfully.");
            alert("Success! Your secure client dashboard portal has been fully activated.");
            
            // Wipe out local caches upon complete funnel success to free memory blocks
            localStorage.removeItem("f4u_wizard_onboarding_state");
            
            // Redirect user directly onto their newly established portal workspace
            window.location.href = window.CLIENT_DASHBOARD_REDIRECT_URL || "/dashboard/index.html";
        } else {
            throw new Error(outcomeData.message || "Credential serialization rejected by backend core.");
        }
    } catch (activationErr) {
        console.error("[Success Portal Error] Activation thread aborted:", activationErr);
        alert(`Account Activation Failed: ${activationErr.message}`);
        
        // Restore active click states on validation gate exit
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.setProperty("background", "var(--primary)", "important");
            submitBtn.innerHTML = originalBtnHtml;
        }
    }
    return true;
}

window.handleClientAccountActivation = handleClientAccountActivation;

// 🟢 MOUNT TRACKER LAYER: Hydrates email from receipt variables as soon as Step 7 becomes visible
document.addEventListener("DOMContentLoaded", () => {
    const successPanelTarget = document.getElementById("step-panel-7") || document.querySelector(".success-container");
    if (successPanelTarget) {
        const successObserver = new MutationObserver(() => {
            if (successPanelTarget.style.display !== "none") {
                const targetEmailInput = document.getElementById("portal_user_email");
                if (targetEmailInput && (!targetEmailInput.value || targetEmailInput.value === "")) {
                    try {
                        const savedManifest = JSON.parse(sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest") || "{}");
                        if (savedManifest.communications_email) {
                            targetEmailInput.value = savedManifest.communications_email;
                        }
                    } catch(err) {}
                }
            }
        });
        successObserver.observe(successPanelTarget, { attributes: true, attributeFilter: ["style"] });
    }
});
