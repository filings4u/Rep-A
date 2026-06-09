/**
 * ==========================================================================
 * SECURE SUBSCRIBER CAPTURE ENGINE (UNIFIED CONTEXT MATRIX)
 * ==========================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
    const subForm = document.getElementById('compliance-subscribe-form');
    if (!subForm) return; // Exit early if the form container is not on the page

    // REUSE CENTRAL SINGLETON CONNECTION TO INHIBIT MULTIPLE CLIENT INSTANCE WARNINGS
    function getSubscriberDatabaseClient() {
        if (window.FILINGS4U_MASTER_ENGINE && typeof window.FILINGS4U_MASTER_ENGINE.getSupabaseInstance === 'function') {
            return window.FILINGS4U_MASTER_ENGINE.getSupabaseInstance();
        }
        // Secure sub-domain fallback client connection context loop
        const backupUrl = 'https://supabase.co';
        const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
        return window.supabase.createClient(backupUrl, backupKey);
    }

    subForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const emailInput = document.getElementById('subscriber-email');
        const submitBtn = document.getElementById('subscribe-button');
        const statusMsg = document.getElementById('form-status-message');
        const emailValue = emailInput.value.trim().toLowerCase();

        // Regex field string validation check rules
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailValue)) {
            showStatus(statusMsg, '⚠️ Please enter a valid email address.', false);
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerText = 'Verifying...';
        statusMsg.style.display = 'none';
        try {
            // Retrieves the shared single instance database token context smoothly
            const activeSubClient = getSubscriberDatabaseClient();
            if (!activeSubClient) {
                throw new Error('Database connection client could not be built. Please reload.');
            }

            const { error } = await activeSubClient
                .from('subscribers')
                .insert([{ email: emailValue }]);

            if (error) {
                if (error.code === '23505') {
                    throw new Error('This email is already registered.');
                }
                throw error;
            }

            // Success Display States
            showStatus(statusMsg, '✨ <strong>Subscription Confirmed!</strong> Your update channel is active.', true);
            emailInput.value = '';
        } catch (err) {
            showStatus(statusMsg, `⚠️ ${err.message || 'Connection lost. Please try again.'}`, false);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Subscribe';
        }
    });
});


// UI Status Element Rendering Routine
function showStatus(element, message, isSuccess) {
    element.style.background = isSuccess ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)';
    element.style.border = isSuccess ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)';
    element.style.color = isSuccess ? '#10b981' : '#f87171';
    element.innerHTML = message;
    element.style.display = 'block';
}
