document.addEventListener("DOMContentLoaded", () => {
  // 1. Immediately inject the subscription HTML section onto the page
  if (typeof renderDynamicComplianceSubscribeSection === "function") {
    renderDynamicComplianceSubscribeSection("dynamic-subscribe-placement-zone");
  }

  // 2. Now find the newly created form nodes in the DOM
  const subscribeForm = document.getElementById("compliance-subscribe-form");
  const statusMessage = document.getElementById("form-status-message");
  const submitButton = document.getElementById("subscribe-button");

  if (subscribeForm && statusMessage && submitButton) {
    subscribeForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // 🚫 STOPS THE PAGE FROM REFRESHING
      
      const emailInput = document.getElementById("subscriber-email");
      if (!emailInput) return;

      const targetCleanEmail = emailInput.value.trim().toLowerCase();
      if (!targetCleanEmail) return;

      // Enter loading processing states
      submitButton.disabled = true;
      submitButton.innerText = "Processing...";
      statusMessage.style.display = "none";

      try {
        const backupUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
        const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
        
        // Execute the direct network connection to your Supabase subscribers table
        const response = await fetch(`${backupUrl}/rest/v1/subscribers`, {
          method: "POST",
          headers: {
            "apikey": backupKey,
            "Authorization": `Bearer ${backupKey}`,
            "Content-Type": "application/json",
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({ 
            email: targetCleanEmail,
            created_at: new Date().toISOString()
          })
        });

        // Handle unique constraint duplicate email registrations gracefully
        if (response.status === 409) {
          statusMessage.innerText = "ℹ️ This business email is already signed up for real-time compliance updates!";
          statusMessage.style.cssText = "display: block; background: rgba(59,130,246,0.1); color: #3b82f6; border: 1px solid rgba(59,130,246,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600;";
          emailInput.value = "";
          return;
        }

        if (!response.ok) {
          throw new Error("Server rejected registration payload.");
        }

        // Output Subscription Success Message
        statusMessage.innerText = "🎉 Subscription successful! Welcome to your real-time compliance feed.";
        statusMessage.style.cssText = "display: block; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600;";
        emailInput.value = ""; // Reset input field smoothly
        
      } catch (err) {
        console.error("[Supabase Pipeline Error]:", err);
        statusMessage.innerText = "⚠️ Server pipeline timed out. Please try again.";
        statusMessage.style.cssText = "display: block; background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600;";
      } finally {
        submitButton.disabled = false;
        submitButton.innerText = "Subscribe";
      }
    });
  }
});
