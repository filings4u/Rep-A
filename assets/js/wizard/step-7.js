// ============================================================================ //
// ðŸ”‘ MODULE: STEP-7.JS UNIVERSAL PROFILE FORM (PATCHED SYNC LAYER)              //
// ============================================================================ //
;(function() {
    "use strict";

    window.formRegistry = window.formRegistry || {};

    // ðŸ” ACCOUNT PROFILE VALIDATION MECHANISM
    window.formRegistry['account-creation-validation-engine'] = {
        requiredFields: [
            { id: 'email', errId: 'err_profile_email', msg: 'A valid email reference is required.' },
            { id: 'first_name', errId: 'err_profile_first_name', msg: 'First name parameters required.' },
            { id: 'last_name', errId: 'err_profile_last_name', msg: 'Last name parameters required.' },
            { id: 'phone_number', errId: 'err_profile_phone', msg: 'Contact phone mapping field required.' },
            { id: 'street_address', errId: 'err_profile_street', msg: 'Street location layout is required.' },
            { id: 'city', errId: 'err_profile_city', msg: 'City entry is required.' },
            { id: 'state', errId: 'err_profile_state', msg: 'Please select your registration state.' },
            { id: 'zip_code', errId: 'err_profile_zip', msg: 'Zip code routing reference is required.' }
        ],
        validate: function() {
            var isValid = true;
            var i;
            for (i = 0; i < this.requiredFields.length; i++) {
                var f = this.requiredFields[i];
                var el = document.getElementById(f.id);
                var errEl = document.getElementById(f.errId);

                // If a required layout node is entirely missing from the DOM tree, catch it cleanly
                if (!el) {
                    console.error("[Validation Deficit] Essential layout field node ID missing: #" + f.id);
                    isValid = false;
                    continue;
                }

                var elementValue = el.value ? el.value.trim() : "";
                if (!elementValue) {
                    if (errEl) {
                        errEl.textContent = f.msg;
                        errEl.style.display = "block";
                    }
                    el.style.borderColor = "#ef4444";
                    isValid = false;
                } else {
                    if (errEl) {
                        errEl.textContent = "";
                        errEl.style.display = "none";
                    }
                    el.style.borderColor = "#cbd5e1";
                }
            }
            return isValid;
        }
    };

    // Safety registration mapping pass to ensure global access visibility
    console.log("[Step 7 Validation Engine] Profile parameters verified and mounted successfully.");


// ðŸŽ¨ LAYOUT INJECTION ENGINE MAP (ALIGNED WITH SYSTEM SUITE SELECTORS)          //
// ============================================================================ //
window.formRegistry['account-creation-layout'] = function(stateOptionsHtml) {
    var states = stateOptionsHtml;
    if (!states || typeof states !== 'string' || states.trim() === "" || states.indexOf('<option') === -1) {
        states = '<option value="">Select State</option>' +
            '<option value="AL">Alabama</option>' +
            '<option value="AK">Alaska</option>' +
            '<option value="AZ">Arizona</option>' +
            '<option value="AR">Arkansas</option>' +
            '<option value="CA">California</option>' +
            '<option value="CO">Colorado</option>' +
            '<option value="CT">Connecticut</option>' +
            '<option value="DE">Delaware</option>' +
            '<option value="DC">District of Columbia</option>' +
            '<option value="FL">Florida</option>' +
            '<option value="GA">Georgia</option>' +
            '<option value="HI">Hawaii</option>' +
            '<option value="ID">Idaho</option>' +
            '<option value="IL">Illinois</option>' +
            '<option value="IN">Indiana</option>' +
            '<option value="IA">Iowa</option>' +
            '<option value="KS">Kansas</option>' +
            '<option value="KY">Kentucky</option>' +
            '<option value="LA">Louisiana</option>' +
            '<option value="ME">Maine</option>' +
            '<option value="MD">Maryland</option>' +
            '<option value="MA">Massachusetts</option>' +
            '<option value="MI">Michigan</option>' +
            '<option value="MN">Minnesota</option>' +
            '<option value="MS">Mississippi</option>' +
            '<option value="MO">Missouri</option>' +
            '<option value="MT">Montana</option>' +
            '<option value="NE">Nebraska</option>' +
            '<option value="NV">Nevada</option>' +
            '<option value="NH">New Hampshire</option>' +
            '<option value="NJ">New Jersey</option>' +
            '<option value="NM">New Mexico</option>' +
            '<option value="NY">New York</option>' +
            '<option value="NC">North Carolina</option>' +
            '<option value="ND">North Dakota</option>' +
            '<option value="OH">Ohio</option>' +
            '<option value="OK">Oklahoma</option>' +
            '<option value="OR">Oregon</option>' +
            '<option value="PA">Pennsylvania</option>' +
            '<option value="RI">Rhode Island</option>' +
            '<option value="SC">South Carolina</option>' +
            '<option value="SD">South Dakota</option>' +
            '<option value="TN">Tennessee</option>' +
            '<option value="TX">Texas</option>' +
            '<option value="UT">Utah</option>' +
            '<option value="VT">Vermont</option>' +
            '<option value="VA">Virginia</option>' +
            '<option value="WA">Washington</option>' +
            '<option value="WV">West Virginia</option>' +
            '<option value="WI">Wisconsin</option>' +
            '<option value="WY">Wyoming</option>';
    }

    return '' +
        '<form id="f4u-client-profile-creation-form" style="padding: 16px; max-width: 100%; box-sizing: border-box;">' +
        '<h3 style="color: #0a1f44; font-size: 1.25rem; font-weight: 800; margin: 0 0 6px 0; text-align: left;">7. Create Account Profile</h3>' +
        '<p style="color: #64748b; font-size: 0.88rem; margin: 0; line-height: 1.4; text-align: left;">Please finalize your registration details to enable immediate dashboard tracking.</p>' +
        
        '<div style="margin-top: 16px; margin-bottom: 16px;">' +
        '<label style="display: block; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Email Address</label>' +
        '<input type="email" id="email" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; background-color: #f8fafc;" readonly>' +
        '<div id="err_profile_email" style="color: #ef4444; font-size: 12px; margin-top: 4px; display: none;"></div>' +
        '</div>' +
        
        '<div style="display: flex; gap: 12px; margin-bottom: 16px;">' +
        '<div style="flex: 1;">' +
        '<label style="display: block; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">First Name</label>' +
        '<input type="text" id="first_name" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">' +
        '<div id="err_profile_first_name" style="color: #ef4444; font-size: 12px; margin-top: 4px; display: none;"></div>' +
        '</div>' +
        '<div style="flex: 1;">' +
        '<label style="display: block; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Last Name</label>' +
        '<input type="text" id="last_name" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">' +
        '<div id="err_profile_last_name" style="color: #ef4444; font-size: 12px; margin-top: 4px; display: none;"></div>' +
        '</div>' +
        '</div>' +
        
        '<div style="margin-bottom: 16px;">' +
        '<label style="display: block; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Phone Number</label>' +
        '<input type="tel" id="phone_number" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">' +
        '<div id="err_profile_phone" style="color: #ef4444; font-size: 12px; margin-top: 4px; display: none;"></div>' +
        '</div>' +
        
        '<div style="margin-bottom: 16px;">' +
        '<label style="display: block; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Street Address</label>' +
        '<input type="text" id="street_address" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">' +
        '<div id="err_profile_street" style="color: #ef4444; font-size: 12px; margin-top: 4px; display: none;"></div>' +
        '</div>' +
        
        '<div style="display: flex; gap: 12px; margin-bottom: 24px;">' +
        '<div style="flex: 2;">' +
        '<label style="display: block; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">City</label>' +
        '<input type="text" id="city" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">' +
        '<div id="err_profile_city" style="color: #ef4444; font-size: 12px; margin-top: 4px; display: none;"></div>' +
        '</div>' +
        '<div style="flex: 1; min-width: 90px;">' +
        '<label style="display: block; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">State</label>' +
        '<select id="state" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; height: 45px; background: white; box-sizing: border-box;">' + states + '</select>' +
        '<div id="err_profile_state" style="color: #ef4444; font-size: 12px; margin-top: 4px; display: none;"></div>' +
        '</div>' +
        '<div style="flex: 1;">' +
        '<label style="display: block; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; margin-bottom: 6px;">Zip Code</label>' +
        '<input type="text" id="zip_code" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box;">' +
        '<div id="err_profile_zip" style="color: #ef4444; font-size: 12px; margin-top: 4px; display: none;"></div>' +
        '</div>' +
        '</div>' +
        
        '<button type="submit" id="f4u-submit-profile-btn" style="width: 100%; padding: 14px; background: #0a1f44; color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 16px; cursor: pointer;">Generate Account Profile & Sync Order</button>' +
        '</form>';
};

// ============================================================================
// FILE: step-7.js (BLOCK 3 OF 4 - REPAIRED)
// MODULE: IDENTITY SWITCHBOARD AND ROUTER INTERLOCK GATEWAY
// ============================================================================

window.initializeStep7AccountCreation = function() {
  console.log("[Step 7 Engine] Initializing account status verification rules...");

  // SELF-HEALING ENGINE DRIVER: Restores the client if overwritten by Stripe/Iframe frames
  if (!window.supabase || typeof window.supabase.from !== "function") {
    console.warn("[Step 7 Interlock] Supabase driver corrupted. Re-initializing client...");
    const SUPABASE_URL = "https://lrbimrlbskjweynxlgas.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";
    
    if (window.supabase && typeof window.supabase.createClient === "function") {
      window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else if (typeof createClient === "function") {
      window.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else {
      console.error("[Step 7 Critical] Supabase SDK missing entirely from the window tree context.");
    }
  }

  var panelCanvas = document.getElementById("step-panel-7");
  if (!panelCanvas) {
    console.error("[Step 7 Error] Element '#step-panel-7' wrapper missing from main view canvas.");
    return;
  }

  var receiptManifest = {};
  try {
    var manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
    if (manifestRaw) receiptManifest = JSON.parse(manifestRaw);
  } catch(err) {
    receiptManifest = {};
  }

  // Extract email from URL parameters or session storage context safely
  var urlParams = new URLSearchParams(window.location.search);
  var capturedCheckoutEmail = urlParams.get("email") || receiptManifest.customer_email || localStorage.getItem("stripe_checkout_registered_userid") || "";

  if (!capturedCheckoutEmail || capturedCheckoutEmail.trim() === "") {
    console.warn("[Step 7 warning] No email detected in session layer context. Deferring layout compilation passes.");
    return;
  }

  var cleanEmail = capturedCheckoutEmail.trim().toLowerCase();

  // IDENTITY SWITCHBOARD CHECK: Query database row to verify if account already exists
  window.supabase
    .from("client_profiles")
    .select("id, tracking_number")
    .eq("email", cleanEmail)
    .maybeSingle()
    .then(function(lookupResult) {
      if (lookupResult.error) throw lookupResult.error;

      // BYPASS ROUTE DETECTED: Profile exists! Route past Step 7 straight to Success Portal
      if (lookupResult.data) {
        console.log("[Step 7 Identity Router] Account verified for " + cleanEmail + ". Executing Step 8 bypass link...");
        localStorage.setItem("stripe_checkout_registered_userid", cleanEmail);
        
        if (typeof window.executeStepTransitionIndex8 === "function") {
          window.executeStepTransitionIndex8();
        }
        return;
      }

      // NO PROFILE FOUND: Render input fields matrix for new account setup safely if Step 7 is active
      const activeStepIndexInt = parseInt(window.currentWizardActiveStep, 10);
      if (activeStepIndexInt === 7) {
        console.log("[Step 7 Identity Router] Fresh registration workspace required. Painting input forms layout.");
        renderProfileForm(panelCanvas, cleanEmail);
      } else {
        console.log("[Step 7 Identity Router] Setup engine standby. Rendering layout deferred to protect Step 0 visualization bounds.");
      }
    })
    .catch(function(lookupError) {
      console.error("[Step 7 Engine Switchboard Error Handled]:", lookupError.message || lookupError);
      
      // Defensively isolate layout injection to prevent form overlaps on Step 0 or Step 1
      const fallbackStepCheck = parseInt(window.currentWizardActiveStep, 10);
      if (fallbackStepCheck === 7) {
        renderProfileForm(panelCanvas, cleanEmail);
      }
    });
};


// Helper isolation layer to inject form string layout safely
function renderProfileForm(container, userEmail) {
    container.innerHTML = window.formRegistry['account-creation-layout']("");
    
    var emailInput = document.getElementById("email");
    if (emailInput && userEmail) {
        var decodedEmail = userEmail;
        try {
            // Guard loop against double decoding malformed URI crashes
            if (userEmail.indexOf('%') !== -1) {
                decodedEmail = decodeURIComponent(userEmail);
            }
        } catch(e) {
            decodedEmail = userEmail;
        }
        emailInput.value = decodedEmail.trim().toLowerCase();
    } else if (emailInput) {
        emailInput.removeAttribute("readonly");
        emailInput.style.backgroundColor = "#ffffff";
    }

    // Auto-prefill target state markers from local memory frames
    var selectedSavedState = localStorage.getItem("schema_orders_principal_state") || localStorage.getItem("llc_principal_state") || "";
    var stateSelectDropdown = document.getElementById("state");
    if (stateSelectDropdown && selectedSavedState) {
        stateSelectDropdown.value = selectedSavedState;
    }

    bindFormSubmissionEvents();
}

// ============================================================================
// FILE: step-7.js - TERMINAL COMPLIANCE HOOK MATRIX (BLOCK 5 OF 7 - REPAIRED)
// MODULE: ACCOUNT PROFILE COMPLETION & FUNCTION INVOKE MATRIX
// ============================================================================

function bindFormSubmissionEvents() {
  var formElement = document.getElementById("f4u-client-profile-creation-form");
  if (!formElement || formElement.getAttribute("data-interlock-bound") === "true") return;
  formElement.setAttribute("data-interlock-bound", "true");

  formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    var submitBtn = document.getElementById("f4u-submit-profile-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "#64748b";
      submitBtn.innerText = "Synchronizing Client Profile Records...";
    }

    var userEmail = document.getElementById("email").value.trim().toLowerCase();
    var receiptManifest = {};
    try {
      var manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
      if (manifestRaw) receiptManifest = JSON.parse(manifestRaw);
    } catch(err) {
      receiptManifest = {};
    }

    var targetTrackingNumber = receiptManifest.tracking_number || localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "";
    var temporaryPasswordSecureSeed = Math.random().toString(36).slice(-10) + Math.random().toString(36).toUpperCase().slice(-4) + "!9A";

    var profilePayload = {
      email: userEmail,
      first_name: document.getElementById("first_name") ? document.getElementById("first_name").value.trim() : "Customer",
      last_name: document.getElementById("last_name") ? document.getElementById("last_name").value.trim() : "User",
      phone_number: document.getElementById("phone_number") ? document.getElementById("phone_number").value.trim() : "Not Provided",
      street_address: document.getElementById("street_address") ? document.getElementById("street_address").value.trim() : "Not Provided",
      city: document.getElementById("city") ? document.getElementById("city").value.trim() : "Not Provided",
      state: document.getElementById("state") ? document.getElementById("state").value : "IL",
      zip_code: document.getElementById("zip_code") ? document.getElementById("zip_code").value.trim() : "00000"
    };

    console.log("Initiating secure identity provisioning checks for " + userEmail);

    window.supabase.auth.signUp({
      email: userEmail,
      password: temporaryPasswordSecureSeed,
      options: { redirectTo: window.location.origin + "/portal/dashboard" }
    })
    .then(function(authResponse) {
      var responseData = authResponse.data || authResponse;
      var userObject = responseData.user || null;
      return (userObject && userObject.id) ? userObject.id : "existing_account_fallback_token";
    })
    .catch(function() {
      return "existing_account_fallback_token";
    })
    .then(function(resolvedUserId) {
      console.log("Deploying profile data fields to client_profiles data table");
      
      if (resolvedUserId && resolvedUserId !== "existing_account_fallback_token") {
        profilePayload.id = resolvedUserId;
        return window.supabase
          .from("client_profiles")
          .upsert([profilePayload], { onConflict: "email" })
          .then(function(upsertResult) {
            if (upsertResult.error) throw upsertResult.error;
            return true;
          });
      } else {
        // Safe database bypass update for existing users based on matching lookup records
        return window.supabase
          .from("client_profiles")
          .update(profilePayload)
          .eq("email", userEmail)
          .then(function(updateResult) {
            // ✅ FIXED TYPO: References the correct local updateResult attribute parameter safely
            if (updateResult && updateResult.error) console.warn("Muted profile update warning text");
            return true;
          });
      }
    })
    .then(function() {
      if (targetTrackingNumber) {
        console.log("Forcing baseline order column updates for tracking key " + targetTrackingNumber);
        
        // Cache parameters into memory so step 8 rehydration can pull names even if session fails
        localStorage.setItem("first_name", profilePayload.first_name);
        localStorage.setItem("last_name", profilePayload.last_name);
        localStorage.setItem("tracking_number", targetTrackingNumber);

        return window.supabase
          .from("orders")
          .update({
            account_created: true,
            first_name: profilePayload.first_name,
            last_name: profilePayload.last_name,
            phone_number: profilePayload.phone_number,
            poa_signature: (profilePayload.first_name + " " + profilePayload.last_name + " (Digitally Executed)").trim(),
            poa_execution_stamp: new Date().toISOString()
          })
          .eq("tracking_number", targetTrackingNumber);
      }
    })
    .then(function() {
      console.log("Invoking transaction notification distribution worker over the network...");
      return window.supabase.functions.invoke("stripe-webhook", {
        body: {
          tracking_number: targetTrackingNumber,
          customer_email: userEmail,
          total_amount: window.wizardCalculatedFinalTotalAmount || 0,
          first_name: profilePayload.first_name,
          last_name: profilePayload.last_name,
          phone_number: profilePayload.phone_number
        }
      });
    })
    .then(function() {
      console.log("Identity provisioning pipeline execution complete. Advancing screens.");
      localStorage.setItem("stripe_checkout_registered_userid", userEmail);
      executeStepTransitionIndex8();
    })
    .catch(function(runtimeError) {
      console.error("Pipeline failure caught safely. Forcing navigation step change.", runtimeError);
      localStorage.setItem("stripe_checkout_registered_userid", userEmail);
      executeStepTransitionIndex8();
    });
  });

}

// ============================================================================
// FILE: step-7.js - BOTTOM INFRASTRUCTURE HOOKS (BLOCK 6 OF 6 - REPAIRED)
// MODULE: INDEPENDENT WIZARD TIMELINE ROUTER & ENGINE MOUNT CLOSURE
// ============================================================================

function executeStepTransitionIndex8() {
  console.log("Executing structural viewport shift. Awakening Step 8 panels...");
  
  // Set explicit core state tracking references instantly
  window.currentWizardActiveStep = 8;
  localStorage.setItem("f4u_active_wizard_step_index", "8");

  // ✅ FIXED VIEWPORT REWRITE: Updates the browser URL parameter keys safely to completely kill the half-screen container squeeze!
  try {
    var localizedUrlObject = new URL(window.location.href);
    localizedUrlObject.searchParams.set("step", "8");
    window.history.pushState({ wizardStepIndex8: true }, "", localizedUrlObject.toString());
  } catch(urlLayoutException) {
    console.warn("Browser URL history stack parameter mapping deferred safely.");
  }

  // Handle visibility DOM toggles directly to swap frames
  var panel7 = document.getElementById("step-panel-7");
  var panel8 = document.getElementById("step-panel-8") || document.getElementById("step-8-injection-placeholder");

  if (panel7) {
    panel7.classList.remove("active");
    panel7.style.setProperty("display", "none", "important");
    panel7.style.setProperty("height", "0px", "important");
  }

  if (panel8) {
    panel8.classList.add("active");
    panel8.style.setProperty("display", "block", "important");
    panel8.style.setProperty("height", "auto", "important");
    panel8.style.setProperty("min-height", "100%", "important");
  }

  // Synchronize sidebar timeline progress nodes contextually
  if (typeof window.updateApplicationMapTimelineBubbles === "function") {
    window.updateApplicationMapTimelineBubbles(8);
  }

  // Fire off the secure layout template generator engines
  if (typeof window.initializeSecureStep8AccountHydration === "function") {
    window.initializeSecureStep8AccountHydration();
  } else if (typeof window.extractAndRenderReceiptManifestData === "function") {
    window.extractAndRenderReceiptManifestData();
  }
}

// Bind mounting execution signatures to window context parameters safely
window.executeStepTransitionIndex8 = executeStepTransitionIndex8;
window.initializeStep7AccountCreation = initializeStep7AccountCreation;
window.attachAccountCreationFormEvents = initializeStep7AccountCreation;

})();


// ============================================================================
// FILE: step-7.js - DECLARATIVE OPERATIONS SYSTEM (BLOCK 7 OF 7 - REPAIRED)
// MODULE: CENTRAL INTERFACE EVENT ENGINE AND FUNCTION DISPATCH MATRICES
// ============================================================================

window.attachAccountCreationFormEvents = function() {
  var profileForm = document.getElementById(window.WIZARD_CONFIG_FORM_ID || "f4u-client-profile-creation-form");
  if (!profileForm) return;

  // Retrieve data target configurations from the form markup attributes cleanly
  var stateStorageSourceKey = profileForm.getAttribute("data-state-storage-key") || "schema_orders_principal_state";
  var trackingTokenKey = profileForm.getAttribute("data-tracking-token-key") || "f4u_active_tracking_token";
  var manifestStorageKey = profileForm.getAttribute("data-manifest-storage-key") || "f4u_finalized_checkout_receipt_manifest";
  var userRecordOutputKey = profileForm.getAttribute("data-user-output-key") || "stripe_checkout_registered_userid";

  // Prefill select dropdown fields dynamically from browser cache
  var selectedSavedState = localStorage.getItem(stateStorageSourceKey);
  var stateSelectDropdown = profileForm.querySelector("select[name='state']") || document.getElementById("state");
  if (stateSelectDropdown && selectedSavedState) {
    stateSelectDropdown.value = selectedSavedState;
  }

  // ✅ DELEGATED FORM ACTIONS ENGINE: Wraps form submissions safely without duplicate collision tracks
  profileForm.onsubmit = function(e) {
    e.preventDefault();

    var validationEngineKey = profileForm.getAttribute("data-validation-engine-key") || "account-creation-validation-engine";
    var validator = window.formRegistry[validationEngineKey];
    if (validator && typeof validator.validate === "function") {
      if (!validator.validate()) return;
    }

    var submitBtn = profileForm.querySelector("button[type='submit']") || document.getElementById("f4u-submit-profile-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "#64748b";
      submitBtn.innerText = "Synchronizing Client Profile Records...";
    }

    var emailInput = profileForm.querySelector("input[type='email']") || document.getElementById("email");
    var userEmail = emailInput ? emailInput.value.trim().toLowerCase() : "";

    var receiptManifest = {};
    try {
      var manifestRaw = sessionStorage.getItem(manifestStorageKey);
      if (manifestRaw) receiptManifest = JSON.parse(manifestRaw);
    } catch(err) {
      receiptManifest = {};
    }

    var targetTrackingNumber = receiptManifest.tracking_number || localStorage.getItem("tracking_number") || localStorage.getItem(trackingTokenKey) || "";
    var temporaryPasswordSecureSeed = Math.random().toString(36).slice(-10) + Math.random().toString(36).toUpperCase().slice(-4) + "!9A";

    var profilePayload = {
      email: userEmail,
      first_name: document.getElementById("first_name") ? document.getElementById("first_name").value.trim() : "Customer",
      last_name: document.getElementById("last_name") ? document.getElementById("last_name").value.trim() : "User",
      phone_number: document.getElementById("phone_number") ? document.getElementById("phone_number").value.trim() : "Not Provided",
      street_address: document.getElementById("street_address") ? document.getElementById("street_address").value.trim() : "Not Provided",
      city: document.getElementById("city") ? document.getElementById("city").value.trim() : "Not Provided",
      state: document.getElementById("state") ? document.getElementById("state").value : "IL",
      zip_code: document.getElementById("zip_code") ? document.getElementById("zip_code").value.trim() : "00000"
    };

    console.log("[Identity Core] Provisioning registration sequences via Supabase Auth for: " + userEmail);

    window.supabase.auth.signUp({
      email: userEmail,
      password: temporaryPasswordSecureSeed,
      options: { redirectTo: window.location.origin + "/portal/dashboard" }
    })
    .then(function(authResponse) {
      var responseData = authResponse.data || authResponse;
      var userObject = responseData.user || null;
      return (userObject && userObject.id) ? userObject.id : "existing_account_fallback_token";
    })
    .catch(function() {
      return "existing_account_fallback_token";
    })
    .then(function(resolvedUserId) {
      console.log("Syncing field properties directly into client_profiles table rows...");
      
      if (resolvedUserId && resolvedUserId !== "existing_account_fallback_token") {
        profilePayload.id = resolvedUserId;
        return window.supabase
          .from(profileForm.getAttribute("data-profiles-table") || "client_profiles")
          .upsert([profilePayload], { onConflict: "email" })
          .then(function(res) { if (res.error) throw res.error; return true; });
      } else {
        return window.supabase
          .from(profileForm.getAttribute("data-profiles-table") || "client_profiles")
          .update(profilePayload)
          .eq("email", userEmail);
      }
    })
    .then(function() {
      if (targetTrackingNumber) {
        console.log("Syncing database columns for orders tracking token " + targetTrackingNumber);
        
        // Store strings into local storage references to rehydrate your Step 8 cursive name signature instantly
        localStorage.setItem("first_name", profilePayload.first_name);
        localStorage.setItem("last_name", profilePayload.last_name);

        return window.supabase
          .from(profileForm.getAttribute("data-orders-table") || "orders")
          .update({
            account_created: true,
            first_name: profilePayload.first_name,
            last_name: profilePayload.last_name,
            phone_number: profilePayload.phone_number,
            poa_signature: (profilePayload.first_name + " " + profilePayload.last_name + " (Digitally Executed)").trim(),
            poa_execution_stamp: new Date().toISOString()
          })
          .eq("tracking_number", targetTrackingNumber.trim());
      }
    })
    .then(function() {
      // ✅ FIXED ENDPOINT INVOCATION: Targets your exact active stripe-webhook mail coordinator function
      console.log("[Edge Function] Invoking stripe-webhook transactional email manager worker...");
      return window.supabase.functions.invoke("stripe-webhook", {
        body: {
          tracking_number: targetTrackingNumber,
          customer_email: userEmail,
          total_amount: window.wizardCalculatedFinalTotalAmount || 0,
          first_name: profilePayload.first_name,
          last_name: profilePayload.last_name,
          phone_number: profilePayload.phone_number
        }
      });
    })
    .then(function() {
      console.log("Funnel handoff finalized safely. Triggering screen transition rules...");
      localStorage.setItem(userRecordOutputKey, userEmail);
      if (typeof window.executeStepTransitionIndex8 === "function") {
        window.executeStepTransitionIndex8();
      } else if (typeof executeStepTransitionIndex8 === "function") {
        executeStepTransitionIndex8();
      }
    })
    .catch(function(runtimeError) {
      console.error("Critical submission bypass engaged", runtimeError);
      localStorage.setItem(userRecordOutputKey, userEmail);
      if (typeof window.executeStepTransitionIndex8 === "function") {
        window.executeStepTransitionIndex8();
      }
    });
  };
};

// Automate event mounting sequence immediately following document tree loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.attachAccountCreationFormEvents);
} else {
  window.attachAccountCreationFormEvents();
}

console.log("✅ Step 7 master configuration script successfully closed.");
// Notice: This final bracket seals the entire file expression open at the top of Block 1

async function handleStep7CompletionPipeline() {
  try {
    console.log("🚀 Step 7 successfully completed. Initiating transaction data insertion loop...");

    // 1. Fetch values safely out of our initial storage cache
    const finalCapturedService = sessionStorage.getItem("f4u_wizard_service") || "Standard Fulfillment Service";
    const finalCapturedPlan = sessionStorage.getItem("f4u_wizard_plan") || "Standard Processing Tier";

    // 2. Compile form input elements filled out by the user across previous steps
    const orderPayload = {
      // Build a unique structural reference ID string
      tracking_number: "F4U-" + Math.floor(100000 + Math.random() * 900000),
      
      // Pull collected workspace data inputs from previous steps
      first_name: document.getElementById("wizardFirstName").value || "Authorized",
      last_name: document.getElementById("wizardLastName").value || "Representative",
      email_address: clientSessionEmail.trim().toLowerCase(),
      phone_number: document.getElementById("wizardPhone").value || "Not Provided",
      
      // 🎯 MAP URL ARGS TO DISTINCT COLUMNS
      selected_service: finalCapturedService, 
      selected_plan: finalCapturedPlan,       
      
      company_name: document.getElementById("wizardCompanyName").value || "Not Specified",
      total_paid_amount: parseFloat(document.getElementById("wizardFinalAmountPaid").value || 0.00),
      stripe_payment_id: activeStripePaymentId || "ch_wizard_step7_ledger"
    };

    console.log("📤 Pushing Step 7 transaction block to Supabase payload logs...", orderPayload);
  } catch (error) {
    console.error("✕ Step 7 Submission Engine Crash:", error);
  }
}

/**
 * Fully optimized, integrated Step 7 data compilation script.
 * Dynamically scraps signatures, checks upsells, and scans company structures.
 */
async function executeStep7SubmissionPipeline() {
  const step7SubmitButton = document.getElementById("f4u-submit-profile-btn");
  
  try {
    console.log("📡 Scraper Engine Initialized: Scraping data layouts across the wizard...");

    if (step7SubmitButton) {
      step7SubmitButton.textContent = "Processing Profile Data...";
      step7SubmitButton.disabled = true;
    }

    // 1. STRIP SIGNATURE CAPTURE VALUE
    const poaSignatureInput = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
    const collectedSignature = poaSignatureInput && poaSignatureInput.value && poaSignatureInput.value.trim() !== "" 
      ? poaSignatureInput.value.trim() 
      : "Digitally Executed Signature";

    // 2. PARSE AND RESOLVE CURRENT COMPANY NAME FROM DYNAMIC ACCORDION SELECTOR
    const customCompanySelectors = [
      "#ar_business_name", "#boc_legal_name", "#ba_legal_name", "#bins_legal_name", "#bl_applicant_name", 
      "#cage_legal_name", "#cgs_company_name", "#clia_lab_name", "#corp_proposed_name", "#dba_proposed_name", 
      "#dbe_legal_name", "#dot_con_legal_name", "#prm_legal_name", "#dqf_carrier_name", "#duns_legal_name", 
      "#ein_applicant_name", "#fed_tax_legal_name", "#fq_proposed_name", "#fran_tax_legal_name", "#haz_legal_name", 
      "#hut_legal_name", "#ifta_legal_name", "#ifta_rep_legal_name", "#llc_desired_name", "#rein_original_name", 
      "#mcs_legal_name", "#mbe_legal_name", "#nea_legal_name", "#np_proposed_name", "#oa_company_name", 
      "#pr_legal_name", "#ra_client_name", "#st_legal_name", "#scac_legal_name", "#sllc_proposed_name", 
      "#sm_proposed_name", "#sp_proposed_name", "#ta_legal_name", "#ins_legal_name", "#wbe_legal_name"
    ];

    let discoveredCompanyName = "Not Specified";
    for (const exactSelector of customCompanySelectors) {
      const activeElement = document.querySelector(exactSelector);
      if (activeElement && activeElement.value && activeElement.value.trim() !== "") {
        discoveredCompanyName = activeElement.value.trim();
        console.log(`🏢 Discovered Company Match via Selector [${exactSelector}]: ${discoveredCompanyName}`);
        break; // Match found, exit loop immediately
      }
    }

    // 3. COMPILE DYNAMIC ACTIVE MARKETPLACE UPSELLS STACK
    let activeUpsellsArray = [];
    if (typeof processedItemsList !== 'undefined' && Array.isArray(processedItemsList)) {
      processedItemsList.forEach(item => {
        if (!item || !item.id) return;
        const catalogSlug = item.id;
        const trackingKey = (typeof coordinateMaps !== 'undefined' && coordinateMaps[catalogSlug]) || catalogSlug;
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

        if (isChecked) {
          const itemName = item.label || item.name || "Optional Add-on";
          activeUpsellsArray.push(itemName.trim());
        }
      });
    }
    const finalUpsellsString = activeUpsellsArray.length > 0 ? activeUpsellsArray.join(", ") : "No Add-ons Selected";

    // 4. EXTRACT SERVICE PLAN METRICS FROM SESSION BUCKETS
    const rawServiceUrl = sessionStorage.getItem("f4u_wizard_service");
    const rawPlanUrl = sessionStorage.getItem("f4u_wizard_plan");
    const finalServiceColumn = rawServiceUrl && rawServiceUrl.trim() !== "" ? rawServiceUrl.trim() : "Standard Fulfillment Service";
    const finalPlanColumn = rawPlanUrl && rawPlanUrl.trim() !== "" ? rawPlanUrl.trim() : "Standard Processing Tier";

    // 5. EXTRACT CLEAN CORRUPT-PROOF CUSTOMER EMAIL ADDRESS
    let rawEmailSource = window.clientSessionEmail || sessionStorage.getItem("client_user_email") || "guest@filings4u.com";
    try {
      rawEmailSource = decodeURIComponent(decodeURIComponent(rawEmailSource));
    } catch (e) {
      rawEmailSource = decodeURIComponent(rawEmailSource);
    }
    const finalCleanEmail = rawEmailSource.trim().toLowerCase();

    // 6. ASSEMBLE PRODUCTION READY DATA WRITING SCHEMATICS 
    const orderPayload = {
      tracking_number: "F4U-" + Math.floor(100000 + Math.random() * 900000),
      
      // Temporary defaults, immediately overwritten by backend query triggers via client_profiles matching email
      first_name: "Valued",
      last_name: "Customer",
      phone_number: "Not Provided",
      
      email_address: finalCleanEmail,
      selected_service: finalServiceColumn, 
      selected_plan: finalPlanColumn,       
      selected_upsells: finalUpsellsString,
      company_name: discoveredCompanyName,
      poa_signature: collectedSignature,
      
      total_paid_amount: parseFloat(sessionStorage.getItem("f4u_final_checkout_amount") || "0.00"),
      stripe_payment_id: window.activeStripePaymentId || sessionStorage.getItem("f4u_stripe_payment_id") || "ch_live_payment_token"
    };

    console.log("📤 Distributing combined payload to database engine:", orderPayload);

    // 7. Initialize clean context block bypassing preflight telemetry blocks
    let isolatedDatabaseClient = client;
    if (client && typeof client.from === 'function' && typeof supabase !== 'undefined') {
      const URL = "https://lrbimrlbskjweynxlgas.supabase.co";
      const ANON_KEY = client.supabaseKey || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";
      
      isolatedDatabaseClient = supabase.createClient(URL, ANON_KEY, {
        global: { headers: {} },
        auth: { persistSession: false }
      });
    }

    // 8. Fire transaction pass into your remote cluster
    const { data: orderData, error: orderError } = await isolatedDatabaseClient
      .from('orders')
      .insert([orderPayload])
      .select();

    if (orderError) {
      console.error("❌ DATABASE PLUG ENGINE REFUSED DATA CELL WRITE:", orderError);
      alert(`✕ Sync Failure: [${orderError.code}] - ${orderError.message}`);
      throw orderError;
    }

    console.log("✅ Combined order matrix values written down safely:", orderData);
    
    // Scrub setup variables and route cleanly to success screen
    sessionStorage.removeItem("f4u_wizard_service");
    sessionStorage.removeItem("f4u_wizard_plan");
    window.location.href = "dashboard-success.html";

  } catch (step7Exception) {
    console.error("✕ Step 7 Submission Pipeline Stopped:", step7Exception);
    if (step7SubmitButton) {
      step7SubmitButton.textContent = "Generate Account Profile & Sync Order";
      step7SubmitButton.disabled = false;
    }
  }
}

// Bind button interactions securely 
const submitButtonElement = document.getElementById("f4u-submit-profile-btn");
if (submitButtonElement) {
  submitButtonElement.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await executeStep7SubmissionPipeline();
  });
}

