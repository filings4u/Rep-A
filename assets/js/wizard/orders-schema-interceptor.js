// ============================================================================ //
// 📡 ENTERPRISE ORDERS DATA INTERCEPTOR & SYNC ENGINE                        //
// ============================================================================ //
(function initializeOrdersSchemaInterceptor() {
  "use strict";

  // Unified global memory data store mapping directly to public.orders columns
  window.currentOrderCorePayload = window.currentOrderCorePayload || {
    id: crypto.randomUUID ? crypto.randomUUID() : "gen_random_uuid()",
    company_name: "",
    service_key: "",
    service_title: "",
    plan_tier: "",
    total_fee: 0.00,
    status: "pending_initialization",
    tax_id_status: "pending",
    poa_signed_state: false,
    poa_signature_verification_string: "",
    collected_payload_metadata: {},
    tracking_number: "",
    user_id: "",
    email: "",
    stripe_payment_id: ""
  };

  /**
   * Scrapes DOM inputs and mirrors parameters instantly to the payload object
   */
  function syncFormFieldsToOrdersSchema() {
    const urlParams = new URLSearchParams(window.location.search);
    const payload = window.currentOrderCorePayload;

    // 1. Direct Context URL Parameter Extraction
    if (urlParams.get('service')) payload.service_key = urlParams.get('service').toLowerCase().trim();
    if (urlParams.get('plan')) payload.plan_tier = urlParams.get('plan').toLowerCase().trim();
    
    // 2. Core Text Identifier Extractions
    const companyInput = document.getElementById("wizard_company_name_input") || document.querySelector("input[name*='company']");
    const emailInput = document.getElementById("wizard_customer_email_input") || document.querySelector("input[type='email']");
    const routeServiceTitle = document.getElementById("wizard-route-service-id");

    if (companyInput && companyInput.value.trim() !== "") payload.company_name = companyInput.value.trim();
    if (emailInput && emailInput.value.trim() !== "") payload.email = emailInput.value.trim();
    if (routeServiceTitle && routeServiceTitle.value.trim() !== "") payload.service_title = routeServiceTitle.value.trim();

    // 3. Dynamic Metadata JSONB Sub-Field Assembly
    payload.collected_payload_metadata.client_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    payload.collected_payload_metadata.session_url_state = window.location.search;
    payload.collected_payload_metadata.target_jurisdiction = urlParams.get('state') || localStorage.getItem('wizard_selected_state') || "";
  }

  // Bind live listeners to document context tree inputs to capture parameters in real-time
  document.addEventListener("input", syncFormFieldsToOrdersSchema);
  document.addEventListener("change", syncFormFieldsToOrdersSchema);
  /**
   * Enterprise-grade strict database pre-flight integrity check validator.
   * Runs right before Stripe checkout compilation passes data forward.
   * Zero Tolerance: If any NOT NULL field is missing, it crashes execution explicitly.
   */
  function runPreFlightDatabaseIntegrityVerification() {
    syncFormFieldsToOrdersSchema();
    const orderRecord = window.currentOrderCorePayload;

    // Rigid assertion verification on required schema fields
    if (!orderRecord.company_name || orderRecord.company_name.trim() === "") {
      throw new Error("[Database Pre-Flight Crash] Missing mandatory column value: orders.company_name cannot be NULL.");
    }
    if (!orderRecord.service_key || orderRecord.service_key.trim() === "") {
      throw new Error("[Database Pre-Flight Crash] Missing mandatory column value: orders.service_key cannot be NULL.");
    }
    if (!orderRecord.service_title || orderRecord.service_title.trim() === "") {
      throw new Error("[Database Pre-Flight Crash] Missing mandatory column value: orders.service_title cannot be NULL.");
    }
    if (!orderRecord.plan_tier || orderRecord.plan_tier.trim() === "") {
      throw new Error("[Database Pre-Flight Crash] Missing mandatory column value: orders.plan_tier cannot be NULL.");
    }
    if (!orderRecord.email || orderRecord.email.trim() === "") {
      throw new Error("[Database Pre-Flight Crash] Missing mandatory column value: orders.email cannot be NULL.");
    }
    
    // Explicit numeric value assertions matching numeric(10,2) constraints
    const calculatedFee = parseFloat(window.computedWizardStateGovernmentFee || 0) + parseFloat(localStorage.getItem("wizard_base_package_fee") || 0);
    orderRecord.total_fee = calculatedFee > 0 ? parseFloat(calculatedFee.toFixed(2)) : 0.00;
    
    if (orderRecord.total_fee <= 0) {
      throw new Error("[Database Pre-Flight Crash] Financial validation failure: orders.total_fee must map to an active numeric value greater than 0.");
    }

    console.log("[Pre-Flight Verified] Orders table record compiled successfully with zero NULL fields. Proceeding to compilation payload.");
    return orderRecord;
  }

  // Expose verification gateway globally for your Stripe integration script to call
  window.runPreFlightDatabaseIntegrityVerification = runPreFlightDatabaseIntegrityVerification;
})();


/**
 * Global interface builder intended to wrap around your final Stripe checkout action handlers.
 * Transforms the verified orders table payload directly into standard metadata fields for transfer.
 * @param {Object} baseStripeCheckoutConfig - Your existing original Stripe parameter object literal.
 */
function compileStripeCheckoutMetadataPayload(baseStripeCheckoutConfig) {
  "use strict";

  if (!baseStripeCheckoutConfig) {
    throw new Error("[Stripe Bridge Error] Base checkout configuration object is unassigned.");
  }

  // Force strict schema check; execution stops completely if payload structures fail assertions
  const verifiedOrderData = window.runPreFlightDatabaseIntegrityVerification();

  // Inject straight structural mappings into your Stripe parameters
  baseStripeCheckoutConfig.clientReferenceId = verifiedOrderData.id;
  baseStripeCheckoutConfig.customerEmail = verifiedOrderData.email;
  
  // Format metadata keys neatly to allow direct insertion rules inside Supabase database webhooks
  baseStripeCheckoutConfig.metadata = baseStripeCheckoutConfig.metadata || {};
  baseStripeCheckoutConfig.metadata.database_id = verifiedOrderData.id;
  baseStripeCheckoutConfig.metadata.company_name = verifiedOrderData.company_name;
  baseStripeCheckoutConfig.metadata.service_key = verifiedOrderData.service_key;
  baseStripeCheckoutConfig.metadata.service_title = verifiedOrderData.service_title;
  baseStripeCheckoutConfig.metadata.plan_tier = verifiedOrderData.plan_tier;
  baseStripeCheckoutConfig.metadata.total_fee = verifiedOrderData.total_fee.toString();
  baseStripeCheckoutConfig.metadata.status = verifiedOrderData.status;
  baseStripeCheckoutConfig.metadata.tax_id_status = verifiedOrderData.tax_id_status;
  baseStripeCheckoutConfig.metadata.poa_signed_state = verifiedOrderData.poa_signed_state.toString();
  baseStripeCheckoutConfig.metadata.poa_signature_verification_string = verifiedOrderData.poa_signature_verification_string;
  baseStripeCheckoutConfig.metadata.collected_payload_metadata = JSON.stringify(verifiedOrderData.collected_payload_metadata);

  console.log("[Stripe Bridge Success] Payload context wrapped cleanly. Secure synchronization properties armed.");
  return baseStripeCheckoutConfig;
}

window.compileStripeCheckoutMetadataPayload = compileStripeCheckoutMetadataPayload;
