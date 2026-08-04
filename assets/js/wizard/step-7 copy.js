/**
 * ============================================================================
 * MODULE: STEP-7.JS UNIVERSAL PROFILE FORM (BLOCK 1 OF 5 - REACTIVE ENGINE)
 * ============================================================================
 */
(function() {
    "use strict";

    window.formRegistry = window.formRegistry || {};

    // 🟢 SECURE STRUCTURAL PROFILE VALIDATION MATRIX
    window.formRegistry['account-creation-validation-engine'] = {
        requiredFields: [
            { id: 'first_name', errId: 'err_profile_first_name', msg: 'First name parameter is required.' },
            { id: 'last_name', errId: 'err_profile_last_name', msg: 'Last name parameter is required.' },
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

    console.log("✅ [Step 7] Validation engine successfully initialized.");
})();

/**
 * ============================================================================
 * MODULE: STEP-7.JS UNIVERSAL PROFILE FORM (BLOCK 2 OF 5 - TEMPLATE STRINGS)
 * ============================================================================
 */
(function() {
    "use strict";

    window.formRegistry = window.formRegistry || {};

    // 🟢 LAYOUT INJECTION ENGINE MAP (ALIGNED WITH SYSTEM SUITE SELECTORS)
    window.formRegistry['account-creation-layout'] = function(stateOptionsHtml, prefilledEmail) {
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
                    '<input type="email" id="email" value="' + prefilledEmail + '" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; background-color: #f8fafc;" readonly>' +
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

    console.log("✅ [Step 7] Layout template mapping registered.");
})();

/**
 * ============================================================================
 * MODULE: STEP-7.JS UNIVERSAL PROFILE FORM (BLOCK 3 OF 5 - IDENTITY SWITCHBOARD)
 * ============================================================================
 */
(function() {
    "use strict";

    window.initializeStep7AccountCreation = function() {
        console.log("[Step 7 Engine] Initializing account status verification rules...");

        // SELF-HEALING ENGINE DRIVER: Restores the global client safely if shifted or dropped
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
                return;
            }
        }

        var panelCanvas = document.getElementById("step-7-injection-placeholder");
        if (!panelCanvas) {
            console.error("[Step 7 Error] Element '#step-7-injection-placeholder' missing from main view canvas.");
            return;
        }

        var receiptManifest = {};
        try {
            var manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
            if (manifestRaw) receiptManifest = JSON.parse(manifestRaw);
        } catch(err) {
            receiptManifest = {};
        }

        // Pull active user session tracking variables
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
            .eq("email_address", cleanEmail) // 🟢 ALIGNED WITH NEW email_address DATABASE SCHEMA CHANGE
            .maybeSingle()
            .then(function(lookupResult) {
                if (lookupResult.error) throw lookupResult.error;

                // BYPASS ROUTE DETECTED: Profile exists! Route past Step 7 straight to Success Portal
                if (lookupResult.data) {
                    console.log("[Step 7 Identity Router] Account verified for " + cleanEmail + ". Executing Step 8 bypass link...");
                    localStorage.setItem("stripe_checkout_registered_userid", cleanEmail);
                    
                    if (window.f4uMasterInstanceApp) {
                        window.f4uMasterInstanceApp.currentStep = 8;
                    } else if (typeof window.executeStepTransitionIndex8 === "function") {
                        window.executeStepTransitionIndex8();
                    }
                    return;
                }

                // NO PROFILE FOUND: Render fields safely if Step 7 is actively focused
                var currentActiveStepVal = window.f4uMasterInstanceApp ? window.f4uMasterInstanceApp.currentStep : parseInt(window.currentWizardActiveStep, 10);
                if (currentActiveStepVal === 7) {
                    console.log("[Step 7 Identity Router] Fresh registration workspace required. Painting input forms layout.");
                    window.renderProfileForm(panelCanvas, cleanEmail);
                } else {
                    console.log("[Step 7 Identity Router] Setup engine standby. Rendering layout deferred to protect early step views.");
                }
            })
            .catch(function(lookupError) {
                console.error("[Step 7 Engine Switchboard Error Handled]:", lookupError.message || lookupError);
                var fallbackStepCheck = window.f4uMasterInstanceApp ? window.f4uMasterInstanceApp.currentStep : parseInt(window.currentWizardActiveStep, 10);
                if (fallbackStepCheck === 7) {
                    window.renderProfileForm(panelCanvas, cleanEmail);
                }
            });
    };
})();

/**
 * ============================================================================
 * MODULE: STEP-7.JS UNIVERSAL PROFILE FORM (BLOCK 4 OF 5 - FORM PAINTER)
 * ============================================================================
 */
(function() {
    "use strict";

    // 🟢 HELPER ISOLATION LAYER TO INJECT FORM LAYOUT SAFELY
    window.renderProfileForm = function(container, userEmail) {
        container.innerHTML = window.formRegistry['account-creation-layout']("", userEmail);
        
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

        window.bindFormSubmissionEvents();
    };

    console.log("✅ [Step 7] Form painter and data hydration configurations linked.");
})();
/**
 * ============================================================================
 * MODULE: STEP-7.JS UNIVERSAL PROFILE FORM (BLOCK 5 OF 5 - SUBMIT EXECUTOR)
 * ============================================================================
 */
(function() {
    "use strict";

    window.bindFormSubmissionEvents = function() {
        var formElement = document.getElementById("f4u-client-profile-creation-form");
        if (!formElement || formElement.getAttribute("data-interlock-bound") === "true") return;
        
        formElement.setAttribute("data-interlock-bound", "true");

        formElement.addEventListener("submit", function(event) {
            event.preventDefault();

            // Run structural validation matrix routines
            var validator = window.formRegistry['account-creation-validation-engine'];
            if (validator && typeof validator.validate === "function") {
                if (!validator.validate()) return;
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
                var manifestRaw = sessionStorage.getItem("f4u_finalized_checkout_receipt_manifest");
                if (manifestRaw) receiptManifest = JSON.parse(manifestRaw);
            } catch(err) {
                receiptManifest = {};
            }

            var targetTrackingNumber = receiptManifest.tracking_number || localStorage.getItem("tracking_number") || "";
            var temporaryPasswordSecureSeed = Math.random().toString(36).slice(-10) + Math.random().toString(36).toUpperCase().slice(-4) + "!9A";

            // 🟢 PAYLOAD OBJECT ALIGNED WITH THE NEW email_address COLUMN SCHEMA REQUIREMENT
            var profilePayload = {
                email_address: userEmail,
                first_name: document.getElementById("first_name") ? document.getElementById("first_name").value.trim() : "Customer",
                last_name: document.getElementById("last_name") ? document.getElementById("last_name").value.trim() : "User",
                phone_number: document.getElementById("phone_number") ? document.getElementById("phone_number").value.trim() : "Not Provided",
                street_address: document.getElementById("street_address") ? document.getElementById("street_address").value.trim() : "Not Provided",
                city: document.getElementById("city") ? document.getElementById("city").value.trim() : "Not Provided",
                state: document.getElementById("state") ? document.getElementById("state").value : "IL",
                zip_code: document.getElementById("zip_code") ? document.getElementById("zip_code").value.trim() : "00000",
                tracking_number: targetTrackingNumber
            };

            console.log("[Identity Core] Provisioning registration sequences via Supabase Auth for: " + userEmail);

            // Trigger secure authentication registration tracking loop
            window.supabase.auth.signUp({
                email: userEmail,
                password: temporaryPasswordSecureSeed,
                options: {
                    redirectTo: window.location.origin + "/portal/dashboard"
                }
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
                    // 🟢 TARGETS NEW email_address INDEX TRACK ON CONFLICTS
                    return window.supabase
                        .from("client_profiles")
                        .upsert([profilePayload], { onConflict: "email_address" });
                } else {
                    return window.supabase
                        .from("client_profiles")
                        .update(profilePayload)
                        .eq("email_address", userEmail);
                }
            })
            .then(function() {
                if (targetTrackingNumber) {
                    console.log("Syncing database columns for orders tracking token " + targetTrackingNumber);
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
                        .eq("tracking_number", targetTrackingNumber.trim());
                }
            })
            .then(function() {
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
                console.log("Identity provisioning pipeline execution complete. Advancing screens.");
                localStorage.setItem("stripe_checkout_registered_userid", userEmail);
                
                // Route forward securely via centralized Vue engine
                if (window.f4uMasterInstanceApp) {
                    window.f4uMasterInstanceApp.currentStep = 8;
                }
            })
            .catch(function(runtimeError) {
                console.error("Critical submission processing bypass engaged:", runtimeError);
                localStorage.setItem("stripe_checkout_registered_userid", userEmail);
                if (window.f4uMasterInstanceApp) {
                    window.f4uMasterInstanceApp.currentStep = 8;
                }
            });
        });
    };

    // Auto-mount handlers immediately
    window.attachAccountCreationFormEvents = window.initializeStep7AccountCreation;
    
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", window.initializeStep7AccountCreation);
    } else {
        window.initializeStep7AccountCreation();
    }

    console.log("✅ Step 7 master configuration script successfully closed.");
})();
