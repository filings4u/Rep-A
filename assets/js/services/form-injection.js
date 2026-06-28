// ============================================================================ //
// 🌐 FILINGS4U, LLC - FRONTEND UNIVERSAL INGESTION CONTROLLER ENGINE           //
// ============================================================================ //

/**
 * filings4u, LLC - Universal Post-Purchase Data Harvest & Ingestion Engine
 * Dynamically converts form structures from any of your 100+ wizard configurations 
 * into a single unified JSON storage profile matching your Supabase environment rows.
 */
window.processUniversalWizardPurchaseFulfillment = async function(checkoutDetails) {
  console.log("[Inbound Ingestion] Processing form extraction pass across active service layout fields...");

  // 1. Extract transactional details from your billing provider callback matrices
  const txRecord = checkoutDetails || {};
  const orderId = txRecord.orderId || txRecord.id || "F4U-" + Date.now();
  const checkoutTotal = parseFloat(txRecord.total || txRecord.amount || 0).toFixed(2);
  
  // 2. Safely capture active customer contact profile traits
  const clientEmail = txRecord.email || document.getElementById("client_email")?.value || document.getElementById("rein_contact_email")?.value || "";
  const clientPhone = txRecord.phone || document.getElementById("client_phone")?.value || document.getElementById("rein_contact_phone")?.value || "";
  
  // 3. Dynamically read active service string identifier parameters
  const serviceIdentifier = window.routeActiveServiceKey || document.querySelector("input[name='service_key_id']")?.value || "unknown-service-line";
  
  // 4. Capture any primary corporate naming targets if present in form elements
  const entityTargetName = document.getElementById("llc_proposed_name")?.value || document.getElementById("rein_original_name")?.value || document.getElementById("proposed_business_name")?.value || "N/A";

  // 5. Universal Page Scraper: Automatically harvests EVERY text, drop-down, and text block on the screen
  const harvestedPayload = {};
  const allWizardInputs = document.querySelectorAll("input, select, textarea");
  
  allWizardInputs.forEach(input => {
    if (input.id && input.type !== "button" && input.type !== "submit") {
      if (input.type === "checkbox") {
        harvestedPayload[input.id] = input.checked;
      } else if (input.type === "radio") {
        if (input.checked) harvestedPayload[input.name || input.id] = input.value;
      } else {
        harvestedPayload[input.id] = input.value.trim();
      }
    }
  });

  // 6. Build data model schema mapped precisely to your universal_wizard_submissions schema
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

  // 7. Inject environment configurations parameters to access your database endpoint via REST API loops
  const SUPABASE_URL = window.FILINGS4U_SUPABASE_URL || "https://lrbimrlbskjweynxlgas.supabase.co";
  const SUPABASE_ANON_KEY = window.FILINGS4U_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/universal_wizard_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=representation" // Asks database to return the payload row string including the newly populated f4u- user ID
      },
      body: JSON.stringify(submissionRecord)
    });

    if (!response.ok) {
      throw new Error(`Supabase REST ingestion pipeline error: ${response.statusText}`);
    }

    const savedRowDetails = await response.json();
    const assignedCustomerId = savedRowDetails?.[0]?.customer_id || "f4u-Generated";
    
    console.log(`[Inbound Ingestion] Submission saved. Assigned Customer Tracker ID Reference: ${assignedCustomerId}`);
    return true;

  } catch (error) {
    console.error("[Inbound Ingestion] Critical ingestion failure. Storing safety local fallback layer...", error);
    localStorage.setItem("backup_order_recovery_" + orderId, JSON.stringify(submissionRecord));
    return false;
  }
};
