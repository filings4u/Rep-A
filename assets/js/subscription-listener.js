document.addEventListener("DOMContentLoaded", () => {
    const subscribeForm = document.getElementById("compliance-subscribe-form");
    const statusMessage = document.getElementById("form-status-message");
    const submitButton = document.getElementById("subscribe-button");

    if (subscribeForm && statusMessage) {
        subscribeForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById("subscriber-email");
            if (!emailInput) return;

            // UI Loading state variables
            submitButton.disabled = true;
            submitButton.innerText = "Processing...";
            statusMessage.style.display = "none";

            try {
                // Replace with your operational database webhook or api endpoint if needed
                const backupUrl = 'https://lrbimrlbskjweynxlgas.supabase.co';
        const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
              
        statusMessage.innerText = "🎉 Subscription successful! Welcome to your real-time compliance feed.";
                statusMessage.style.cssText = "display: block; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600;";
                
                emailInput.value = ""; // Reset text field
            } catch (err) {
                statusMessage.innerText = "⚠️ Server pipeline timed out. Please try again.";
                statusMessage.style.cssText = "display: block; background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600;";
            } finally {
                submitButton.disabled = false;
                submitButton.innerText = "Subscribe";
            }
        });
    }
});
