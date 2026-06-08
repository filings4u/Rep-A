// subscription-listener.js
document.addEventListener('DOMContentLoaded', () => {
  const subForm = document.getElementById('compliance-subscribe-form');
  if (!subForm) return;

  // Replace these placeholders with your actual project keys
  const SUB_PROJECT_URL = 'https://lrbimrlbskjweynxlgas.supabase.co';
  const SUB_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';

  let privateSubClient = null;

  try {
    // Safely initialize an isolated client using the global CDN library object
    if (typeof supabase !== 'undefined' && typeof supabase.createClient === 'function') {
      privateSubClient = supabase.createClient(SUB_PROJECT_URL, SUB_ANON_KEY);
    }
  } catch (initErr) {
    console.error('Subscription gateway initialization failed:', initErr);
  }

  subForm.addEventListener('submit', async (event) => {
    event.preventDefault(); 
    
    const emailInput = document.getElementById('subscriber-email');
    const submitBtn = document.getElementById('subscribe-button');
    const statusMsg = document.getElementById('form-status-message');
    const emailValue = emailInput.value.trim().toLowerCase();

    // Strict validation check
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
      showStatus(statusMsg, '⚠️ Please enter a valid email address.', false);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = 'Verifying...';
    statusMsg.style.display = 'none';

    try {
      // Check against our private, isolated instance variable
      if (!privateSubClient) {
        throw new Error('Database connection client could not be built. Please reload.');
      }

      const { error } = await privateSubClient
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

function showStatus(element, message, isSuccess) {
  element.style.background = isSuccess ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)';
  element.style.border = isSuccess ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)';
  element.style.color = isSuccess ? '#10b981' : '#f87171';
  element.innerHTML = message;
  element.style.display = 'block';
}
