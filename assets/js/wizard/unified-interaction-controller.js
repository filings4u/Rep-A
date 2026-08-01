// ============================================================================
// FILE: assets/js/unified-interaction-controller.js (PART 1 OF 3)
// MODULE: POST-PURCHASE SCOPED HARVESTER & HARDWARE STYLE INJECTOR
// ============================================================================
(function() {
  "use strict";

  // 1️⃣ HARDWARE-ACCELERATED SHAKE STYLE INJECTOR
  (function injectUnifiedValidationStyles() {
    if (document.getElementById("f4u-validation-shake-keyframes")) return;
    const styleTag = document.createElement("style");
    styleTag.id = "f4u-validation-shake-keyframes";
    styleTag.textContent = `
      @keyframes f4uFieldValidationErrorShakePass {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-6px); }
        40%, 80% { transform: translateX(6px); }
      }
      .field-error-shake {
        animation: f4uFieldValidationErrorShakePass 0.35s ease-in-out !important;
        border: 1px solid #ef4444 !important;
        background-color: #fef2f2 !important;
      }
    `;
    document.head.appendChild(styleTag);
  })();

  // 2️⃣ DYNAMIC ACCURATE VIEWPORT SCOPED SCRAPER FIELD HARVESTER
  window.processUniversalWizardPurchaseFulfillment = async function(checkoutDetails) {
    console.log("[Inbound Ingestion] Processing form extraction pass across active service layout fields...");

    const txRecord = checkoutDetails || {};
    const orderId = txRecord.orderId || txRecord.id || "F4U-" + Date.now();
    const checkoutTotal = parseFloat(txRecord.total || txRecord.amount || 0).toFixed(2);

    const clientEmail = txRecord.email || document.getElementById("email")?.value || document.getElementById("client_email")?.value || "";
    const clientPhone = txRecord.phone || document.getElementById("phone_number")?.value || document.getElementById("client_phone")?.value || "";
    const serviceIdentifier = window.routeActiveServiceKey || document.querySelector("input[name='service_key_id']")?.value || "unknown-service-line";
    const entityTargetName = document.getElementById("company_name")?.value || document.getElementById("llc_proposed_name")?.value || "N/A";

    const harvestedPayload = {
      tracking_number: orderId,
      email_address: clientEmail,
      phone_number: clientPhone,
      company_name: entityTargetName,
      selected_plan: serviceIdentifier,
      total_fee: checkoutTotal
    };

    const activeStepIdx = window.currentWizardActiveStep || localStorage.getItem("f4u_active_wizard_step_index") || "7";
    const activePanelContainer = document.getElementById("step-panel-" + activeStepIdx) || document.getElementById("step-8-injection-placeholder") || document.body;
    const allWizardInputs = activePanelContainer.querySelectorAll("input, select, textarea");

    allWizardInputs.forEach(input => {
      if (input.id && input.type !== "button" && input.type !== "submit") {
        let valStr = "";
        if (input.type === "checkbox") {
          harvestedPayload[input.id] = input.checked;
          localStorage.setItem("wizard_field_" + input.id, input.checked ? "true" : "false");
        } else if (input.type === "radio") {
          if (input.checked) {
            valStr = input.value.trim();
            harvestedPayload[input.name || input.id] = valStr;
            localStorage.setItem(input.name || input.id, valStr);
          }
        } else {
          valStr = input.value.trim();
          if (valStr !== "") {
            harvestedPayload[input.id] = valStr;
            localStorage.setItem(input.id, valStr);
            localStorage.setItem("wizard_field_" + input.id, valStr);
          }
        }
      }
    });
    // 3️⃣ BUILD DATA MODEL SCHEMA MAPPED PRECISELY TO YOUR BACKEND COLUMNS
    const submissionRecord = {
      order_id: orderId,
      service_identifier: serviceIdentifier,
      selected_plan_tier: window.routeActivePlanKey || txRecord.planTier || "Standard",
      checkout_total: parseFloat(checkoutTotal),
      client_email: clientEmail,
      client_phone: clientPhone,
      entity_target_name: entityTargetName,
      form_payload: harvestedPayload,
      fulfillment_status: "purchased"
    };

    const SUPABASE_URL = window.FILINGS4U_SUPABASE_URL || "https://supabase.co";
    const SUPABASE_ANON_KEY = window.FILINGS4U_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";

    try {
      // Clean string addition eliminates template literal parsing truncation faults entirely
      const targetEndpointUrl = SUPABASE_URL + "/rest/v1/universal_wizard_submissions";
      const response = await fetch(targetEndpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": "Bearer " + SUPABASE_ANON_KEY,
          "Prefer": "return=representation"
        },
        body: JSON.stringify(submissionRecord)
      });

      if (!response.ok) throw new Error("Database REST Ingestion Error: " + response.statusText);

      // Package raw return data metrics into sessionStorage for your step 8 itemizers
      const successPageReceiptManifest = {
        tracking_number: orderId,
        customer_email: clientEmail,
        financials_subtotal_amount: checkoutTotal,
        financials_grand_total_charge: checkoutTotal,
        selected_package_title: serviceIdentifier || "Compliance Registration Order",
        filing_state: localStorage.getItem("schema_orders_principal_state") || "IL"
      };

      sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(successPageReceiptManifest));
      console.log("✅ Success manifest securely written to sessionStorage. Unblocking step 8 itemizers.");
      return true;
    } catch (error) {
      console.error("[Inbound Ingestion] Ingestion failure. Storing safety fallback...", error);
      localStorage.setItem("backup_order_recovery_" + orderId, JSON.stringify(submissionRecord));
      
      // Secondary safety fallback for the receipt panel even on broken network tracks
      const fallbackManifest = {
        tracking_number: orderId,
        customer_email: clientEmail,
        financials_subtotal_amount: checkoutTotal,
        financials_grand_total_charge: checkoutTotal,
        selected_package_title: "Compliance Registration Order"
      };
      sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(fallbackManifest));
      return false;
    }
  };

  // 4️⃣ UNIFIED PROFILE FIELD VALIDATOR ENGINE (REAL PRODUCTION IDS)
  window.validateBaseProfileMatrix = function() {
    let textFieldsValid = true;
    const inputs = ["first_name", "last_name", "email", "phone_number"];
    const stripeBox = document.getElementById("stripe-payment-element-mount-point");

    if (stripeBox) stripeBox.classList.remove("field-error-shake");
    inputs.forEach(id => {
      const node = document.getElementById(id);
      if (node) node.classList.remove("field-error-shake");
    });

    void document.body.offsetWidth;

    inputs.forEach(id => {
      const field = document.getElementById(id);
      if (field) {
        const fieldVal = field.value ? field.value.trim() : "";
        if (!fieldVal || (field.required && !field.checkValidity())) {
          field.classList.add("field-error-shake");
          textFieldsValid = false;
        }
      }
    });

    if (!textFieldsValid && stripeBox) stripeBox.classList.add("field-error-shake");
    return textFieldsValid;
  };
  // 5️⃣ TRANSACTION PROCESS CONTROLLER EVENT SUBMISSION
  window.attachSubmitButtonController = function() {
    const cleanBtn = document.getElementById("wizardSubmitBtnElement") || document.getElementById("f4u-submit-profile-btn");
    if (!cleanBtn) return;

    if (window.f4u_active_submit_handler) {
      cleanBtn.removeEventListener("click", window.f4u_active_submit_handler);
    }

    window.f4u_active_submit_handler = async (clickEvent) => {
      clickEvent.preventDefault();
      const errorBanner = document.getElementById("step6-error-banner-target") || document.getElementById("err_profile_email");
      if (errorBanner) errorBanner.style.display = "none";

      if (typeof window.validateBaseProfileMatrix === "function" && !window.validateBaseProfileMatrix()) {
        console.warn("[Submit Validation] Pipeline aborted. Fields missing.");
        if (errorBanner) {
          errorBanner.innerText = "Please complete all required contact fields before processing payment.";
          errorBanner.style.display = "block";
        }
        return;
      }

      cleanBtn.disabled = true;
      cleanBtn.style.opacity = "0.6";
      cleanBtn.innerHTML = "Processing Transaction <i class='fa-solid fa-spinner fa-spin' style='margin-left: 6px;'></i>";

      try {
        const resolvedFinalTotal = parseFloat(
          window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || localStorage.getItem("f4u_running_total") || 0
        );

        const activeCartMetadata = localStorage.getItem("f4u_active_cart_itemized_rows") || "[]";

        // Assigns parameters using your clean, corrected production element IDs
        if (window.currentOrderCorePayload) {
          window.currentOrderCorePayload.email = document.getElementById("email")?.value.trim() || "";
          window.currentOrderCorePayload.total_fee = resolvedFinalTotal;
          window.currentOrderCorePayload.collected_payload_metadata = {
            first_name: document.getElementById("first_name")?.value.trim() || "",
            last_name: document.getElementById("last_name")?.value.trim() || "",
            phone: document.getElementById("phone_number")?.value.trim() || "",
            wizard_step_checkpoint: 6,
            itemized_receipt_rows: JSON.parse(activeCartMetadata),
            timestamp_capture: new Date().toISOString()
          };
        }

        if (typeof window.executeOnboardingTransactionPayloadSubmitVanilla === "function") {
          console.log("[Stripe Pipeline] Running vanilla payload submit...");
          await window.executeOnboardingTransactionPayloadSubmitVanilla(clickEvent);
        } else if (typeof window.executeSecurePaymentConfirmationPipeline === "function") {
          console.log("[Stripe Pipeline] Running secure confirmation pipeline...");
          await window.executeSecurePaymentConfirmationPipeline(resolvedFinalTotal, cleanBtn);
        } else {
          // Direct local REST submission fallback processing path
          const extracted = await window.processUniversalWizardPurchaseFulfillment();
          if (extracted && typeof window.executeStepTransitionIndex8 === "function") {
            window.executeStepTransitionIndex8();
          } else {
            throw new Error("Stripe transaction pipelines are uninitialized.");
          }
        }
      } catch (pipelineException) {
        console.error("[Stripe Runtime Pipeline Error]", pipelineException);
        if (errorBanner) {
          errorBanner.innerText = pipelineException.message || "An unexpected processing error occurred.";
          errorBanner.style.display = "block";
        }
        cleanBtn.disabled = false;
        cleanBtn.style.opacity = "1";
        cleanBtn.innerHTML = "Secure Payment <i class='fa-solid fa-credit-card' style='margin-left: 6px;'></i>";
      }
    };

    cleanBtn.addEventListener("click", window.f4u_active_submit_handler);
    console.log("✅ [Stripe Controller] Secure Payment button event listener successfully attached.");
  };

  // 6️⃣ MASTER CORE INITIALIZATION GATEWAY
  window.bootloaderRuntimeGate = function() {
    const currentStep = (typeof window.currentWizardActiveStep === "number") ? window.currentWizardActiveStep : parseInt(localStorage.getItem("f4u_active_wizard_step_index") || "0", 10);
    
    // Flexible validation loop unblocks operations across both Step 6 and Step 7 paths
    if (currentStep !== 6 && currentStep !== 7) return;

    setTimeout(() => {
      if (typeof window.initializeFlatStripeCheckoutElement === "function") {
        window.initializeFlatStripeCheckoutElement();
        setTimeout(window.attachSubmitButtonController, 60);
      } else {
        window.attachSubmitButtonController();
      }
    }, 100);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.bootloaderRuntimeGate);
  } else {
    window.bootloaderRuntimeGate();
  }

// SECURE FILE CLOSURE
})();
