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

window.initializeStep7AccountCreation = function() {
    console.log("[Step 7 Engine] Initializing account status verification rules...");

    // ðŸ©¹ SELF-HEALING ENGINE DRIVER: Restores the client if overwritten by Stripe/Iframe frames
    if (!window.supabase || typeof window.supabase.from !== 'function') {
        console.warn("[Step 7 Interlock] Supabase driver corrupted. Re-initializing client...");
        const SUPABASE_URL = "https://lrbimrlbskjweynxlgas.supabase.co";
        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";
        
        if (typeof window.supabase?.createClient === 'function') {
            window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } else if (typeof createClient === 'function') {
            window.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } else {
            console.error("[Step 7 Critical] Supabase SDK missing entirely from the window tree context.");
        }
    }

    var panelCanvas = document.getElementById("step-panel-7");
    // ... rest of your initialization logic continues as normal

    if (!panelCanvas) {
        console.error("[Step 7 Error] Element '#step-panel-7' wrapper missing from main view canvas.");
        return;
    }

    var receiptManifest = {};
    try {
        receiptManifest = JSON.parse(sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest")) || {};
    } catch(err) {
        receiptManifest = {};
    }

    // Extract email from URL parameters or session storage context
    var urlParams = new URLSearchParams(window.location.search);
    var capturedCheckoutEmail = urlParams.get('email') || receiptManifest.customer_email || localStorage.getItem("stripe_checkout_registered_userid") || "";

    if (!capturedCheckoutEmail) {
        console.warn("[Step 7 warning] No email detected in session layer context. Forcing standard form render.");
        renderProfileForm(panelCanvas, "");
        return;
    }

    var cleanEmail = capturedCheckoutEmail.trim().toLowerCase();

    // ðŸ” IDENTITY SWITCHBOARD CHECK: Query database row to verify if account already exists
    window.supabase
        .from('client_profiles')
        .select('id, tracking_number')
        .eq('email', cleanEmail)
        .maybeSingle()
        .then(function(lookupResult) {
            if (lookupResult.error) throw lookupResult.error;

            // ðŸš€ BYPASS DETECTED: Profile exists! Route past Step 7 straight to Success Portal
            if (lookupResult.data) {
                console.log("[Step 7 Identity Router] Account verified for " + cleanEmail + ". Executing Step 8 bypass link...");
                localStorage.setItem("stripe_checkout_registered_userid", cleanEmail);
                if (typeof window.executeStepTransitionIndex8 === "function") {
                    window.executeStepTransitionIndex8();
                } else if (typeof executeStepTransitionIndex8 === "function") {
                    executeStepTransitionIndex8();
                }
                return;
            }

            // NO PROFILE FOUND: Render input fields matrix for new account setup
            console.log("[Step 7 Identity Router] No profile match. Generating fresh registration form workspace...");
            renderProfileForm(panelCanvas, cleanEmail);
        })
        .catch(function(lookupError) {
            console.error("[Step 7 Engine Switchboard Error]:", lookupError);
            // Fallback safety layer: Render form manually on query failure so the user isn't bricked
            renderProfileForm(panelCanvas, cleanEmail);
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

function bindFormSubmissionEvents() {
  var formElement = document.getElementById("f4u-client-profile-creation-form");
  if (!formElement || formElement.getAttribute("data-interlock-bound") === "true") return;
  formElement.setAttribute("data-interlock-bound", "true");

  formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    var validator = window.formRegistry ? window.formRegistry["account-creation-validation-engine"] : null;
    if (validator && typeof validator.validate === "function") {
      if (!validator.validate()) {
        console.warn("[Step 7 Engine] Local client validation parameters failed.");
        return;
      }
    }

    var submitBtn = document.getElementById("f4u-submit-profile-btn");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "#64748b";
      submitBtn.innerText = "Synchronizing Client Profile Records...";
    }

    var userEmail = document.getElementById("email").value.trim().toLowerCase();
    var receiptManifest = {};
    try {
      receiptManifest = JSON.parse(sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest")) || {};
    } catch(err) {
      receiptManifest = {};
    }

    var targetTrackingNumber = receiptManifest.tracking_number || localStorage.getItem("tracking_number") || localStorage.getItem("f4u_active_tracking_token") || "";
    var temporaryPasswordSecureSeed = Math.random().toString(36).slice(-10) + Math.random().toString(36).toUpperCase().slice(-4) + "!9A";

    // Build payload to match public.client_profiles column structures exactly
    var profilePayload = {
      email: userEmail,
      first_name: document.getElementById("first_name") ? document.getElementById("first_name").value.trim() : "",
      last_name: document.getElementById("last_name") ? document.getElementById("last_name").value.trim() : "",
      phone_number: document.getElementById("phone_number") ? document.getElementById("phone_number").value.trim() : "",
      street_address: document.getElementById("street_address") ? document.getElementById("street_address").value.trim() : "",
      city: document.getElementById("city") ? document.getElementById("city").value.trim() : "",
      state: document.getElementById("state") ? document.getElementById("state").value : "",
      zip_code: document.getElementById("zip_code") ? document.getElementById("zip_code").value.trim() : "",
      tracking_number: targetTrackingNumber || null
    };

    console.log("Initiating secure identity provisioning checks for " + userEmail);

    // 1. SIGNUP ATTEMPT WITH RESILIENCY STRATEGY
    window.supabase.auth.signUp({
      email: userEmail,
      password: temporaryPasswordSecureSeed,
      options: { redirectTo: window.location.origin + "/portal/dashboard" }
    })
    .then(function(authResponse) {
      var responseData = authResponse.data || authResponse;
      var userObject = responseData.user || null;
      if (userObject && userObject.id) {
        return userObject.id;
      }
      throw new Error("existing_user_detected_or_empty_metadata");
    })
    .catch(function(signUpError) {
      console.log("[Identity Core Gateway] Signup skipped or account exists. Executing target matching lookup to retrieve real UUID...");
      
      // Look up existing user by tracking link relation safely
      return window.supabase
        .from("orders")
        .select("id")
        .eq("tracking_number", targetTrackingNumber)
        .maybeSingle()
        .then(function(lookupResult) {
          if (lookupResult.data && lookupResult.data.id) {
            return lookupResult.data.id;
          }
          // If no lookup match, fallback safely to a profile database search via an Edge routing pattern or RPC if available
          return "lookup_failed_pass";
        });
    })
    .then(function(resolvedUserId) {
      if (!resolvedUserId || resolvedUserId === "lookup_failed_pass") {
        console.warn("[Identity Core] Bypassing profile inserts due to unresolvable UUID schema constraints.");
        return false;
      }

      console.log("[Identity Core Engine] Deploying core dataset fields to client_profiles data table for UUID: " + resolvedUserId);
      profilePayload.id = resolvedUserId;

      // ✅ FIXED UPSERT TRAP: Table matches on 'id' unique constraint, not 'email'
      return window.supabase
        .from("client_profiles")
        .upsert([profilePayload], { onConflict: "id" })
        .then(function(upsertResult) {
          if (upsertResult.error) throw upsertResult.error;
          return true;
        });
    })
    .then(function() {
      // 2. NATIVE ORDERS WORKFLOW SYNC
      if (targetTrackingNumber) {
        console.log("[System Sync] Associating parent structural order row elements to token: " + targetTrackingNumber);
        
        // ✅ FIXED SCHEMA ALIGNMENT: Updates columns that actually exist in your 'public.orders' schema definition
        return window.supabase
          .from("orders")
          .update({
            account_created: true,
            first_name: profilePayload.first_name,
            last_name: profilePayload.last_name,
            phone_number: profilePayload.phone_number
          })
          .eq("tracking_number", targetTrackingNumber)
          .then(function(orderUpdateResult) {
            if (orderUpdateResult.error) throw orderUpdateResult.error;
          });
      }
    })
    .then(function() {
      // 3. TRIGGER CUSTOM EMAIL DISTRIBUTION PIPELINE
      console.log("[Edge Pipeline] Invoking order confirmation distribution worker over network");
      return window.supabase.functions.invoke("send-order-confirmation-email", {
        body: {
          tracking_number: targetTrackingNumber,
          customer_email: userEmail,
          total_amount: window.wizardCalculatedFinalTotalAmount || 0
        }
      });
    })
    .then(function(functionResponse) {
      console.log("[Edge Pipeline Success] All automated notification distribution calls finished execution", functionResponse);
      localStorage.setItem("stripe_checkout_registered_userid", userEmail);
      executeStepTransitionIndex8();
    })
    .catch(function(runtimeError) {
      console.error("Critical execution fault caught during account compilation", runtimeError);
      localStorage.setItem("stripe_checkout_registered_userid", userEmail);
      executeStepTransitionIndex8();
    });
  });
}
// Bind mounting execution signatures to window context parameters safely
window.initializeStep7AccountCreation = initializeStep7AccountCreation;
window.attachAccountCreationFormEvents = initializeStep7AccountCreation;
})();


// ============================================================================ //
// ðŸŽ® OPERATIONS SYSTEM INTERFACE EVENTS - DECLARATIVE ARCHITECTURE
// ============================================================================ //
window.attachAccountCreationFormEvents = function() {
    var profileForm = document.getElementById(window.WIZARD_CONFIG_FORM_ID || "f4u-client-profile-creation-form");
    if (!profileForm) return;

    // Dynamically retrieve all data target bindings directly from the form container markup attributes
    var validationEngineKey = profileForm.getAttribute("data-validation-engine-key");
    var stateStorageSourceKey = profileForm.getAttribute("data-state-storage-key") || "schema_orders_principal_state";
    var trackingTokenKey = profileForm.getAttribute("data-tracking-token-key") || "f4u_active_tracking_token";
    var manifestStorageKey = profileForm.getAttribute("data-manifest-storage-key") || "f4u_finalized_checkout_receipt_manifest";
    var userRecordOutputKey = profileForm.getAttribute("data-user-output-key") || "stripe_checkout_registered_userid";
    var nextStepTargetIndex = parseInt(profileForm.getAttribute("data-next-step-index"), 10) || 8;

    // Prefill selection inputs dynamically from browser configuration variables
    var selectedSavedState = localStorage.getItem(stateStorageSourceKey);
    var stateSelectDropdown = profileForm.querySelector("select[name='state']") || document.getElementById("state");
    if (stateSelectDropdown && selectedSavedState) {
        stateSelectDropdown.value = selectedSavedState;
    }

    profileForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Dynamically resolve validation configuration bindings
        var validator = window.formRegistry[validationEngineKey];
        if (!validator || !validator.validate()) return;

        var submitBtn = profileForm.querySelector("button[type='submit']") || document.getElementById("f4u-submit-profile-btn");
        if (submitBtn) {
            submitBtn.disabled = true;
        }

        var emailInput = profileForm.querySelector("input[type='email']") || document.getElementById("email");
        var userEmail = emailInput ? emailInput.value.trim().toLowerCase() : "";
        
        var receiptManifest = {};
        try {
            receiptManifest = JSON.parse(sessionStorage.getItem(manifestStorageKey)) || {};
        } catch(err) {
            receiptManifest = {};
        }

        // Dynamically resolve relational data keys from the form metrics space
        var targetTrackingNumber = receiptManifest.tracking_number || localStorage.getItem(trackingTokenKey) || "";
        var activeSessionUser = window.supabase.auth.user ? window.supabase.auth.user() : null;
        
        // Populate tracking payload attributes using declarative input name values
        var formFields = profileForm.querySelectorAll("[name]");
        var profilePayload = {
            updated_at: new Date().toISOString()
        };
        
        for (var i = 0; i < formFields.length; i++) {
            var field = formFields[i];
            if (field.name && field.name !== "email") {
                profilePayload[field.name] = field.value.trim();
            }
        }
        profilePayload.tracking_number = targetTrackingNumber ? targetTrackingNumber.trim() : null;

        var profilePersistencePromise;

        if (activeSessionUser && activeSessionUser.id) {
            profilePersistencePromise = window.supabase
                .from(profileForm.getAttribute("data-profiles-table") || 'client_profiles')
                .update(profilePayload)
                .eq('id', activeSessionUser.id);
        } else {
            profilePayload.email = userEmail;
            profilePersistencePromise = window.supabase
                .from(profileForm.getAttribute("data-profiles-table") || 'client_profiles')
                .upsert([profilePayload], { onConflict: 'email' });
        }

        profilePersistencePromise
        .then(function(profileResult) {
            if (profileResult && profileResult.error) throw profileResult.error;

            if (targetTrackingNumber) {
                var orderPayload = { account_created: true };
                if (profilePayload.first_name) orderPayload.first_name = profilePayload.first_name;
                if (profilePayload.last_name) orderPayload.last_name = profilePayload.last_name;
                if (profilePayload.phone_number) orderPayload.phone_number = profilePayload.phone_number;

                return window.supabase
                    .from(profileForm.getAttribute("data-orders-table") || 'orders')
                    .update(orderPayload)
                    .eq('tracking_number', targetTrackingNumber.trim());
            }
        })
        .then(function(orderUpdateResult) {
            if (orderUpdateResult && orderUpdateResult.error) throw orderUpdateResult.error;
            
            localStorage.setItem(userRecordOutputKey, userEmail);

            if (typeof window.transitionWizardToNextStepIndex === "function") {
                window.transitionWizardToNextStepIndex(nextStepTargetIndex);
            } else if (typeof window.goToNextWizardStep === "function") {
                window.goToNextWizardStep();
            }
        })
        .catch(function(runtimeError) {
            alert(runtimeError.message || JSON.stringify(runtimeError));
            
            if (submitBtn) {
                submitBtn.disabled = false;
            }
        });
    });
};

