// ============================================================================ // 
// step-6-handshake-controller.js: RESOLVE BEFORE MOUNT ENGINE                 // 
// ============================================================================ // 
(function() {
  "use strict";

  async function executeSecurePaymentPreFetchHandshake(finalAmountDue) {
    const errorBanner = document.getElementById("step6-error-banner-target");
    const skeletonLoader = document.getElementById("stripe-loading-skeleton-text");
    const uniqueTrackingToken = localStorage.getItem("f4u_active_tracking_token") || "F4U-UNKNOWN";

    try {
      const isLocalSandboxTest = window.location.hostname === "localhost" || 
                                 window.location.hostname === "127.0.0.1";

      const edgeFunctionUrl = 'https://lrbimrlbskjweynxlgas.supabase.co/functions/v1/stripe-checkout';
      
      const response = await fetch(edgeFunctionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amountValue: finalAmountDue,
          trackingNumber: uniqueTrackingToken,
          isTestModeRequested: isLocalSandboxTest
        })
      });

      if (!response.ok) {
        throw new Error(`Edge Function authorization declined (${response.status})`);
      }

      const payloadResult = await response.json();
      window.stripeClientSecret = payloadResult.clientSecret;

      if (!window.stripeClientSecret) {
        throw new Error("Handshake failed: Secure client secret verification token was missing from response payload.");
      }

      console.log("[Supabase Gateway Success] Clientsecret token registered and verified successfully.");

      // Hide the initial loading placeholder message text string inside container node
      if (skeletonLoader) skeletonLoader.style.display = "none";

      // 🚀 ASYNC TIMING RESOLUTION: Trigger the mounter only after token is safely cached!
      if (typeof window.mountStripeVisualComponents === "function") {
        window.mountStripeVisualComponents(finalAmountDue);
      } else {
        throw new Error("Stripe layout mounter component (Part 2) is missing from application context framework.");
      }

    } catch (err) {
      console.error("[Pre-Fetch Handshake Pipeline Failure]", err);
      if (skeletonLoader) skeletonLoader.style.display = "none";
      if (errorBanner) {
        errorBanner.style.display = "block";
        errorBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> <strong>Gateway Connection Broken:</strong> ${err.message}`;
      }
    }
  }

  window.executeSecurePaymentPreFetchHandshake = executeSecurePaymentPreFetchHandshake;
})();
