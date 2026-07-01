// ============================================================================
// 🔒 SELF-CONTAINED SUPABASE CREDENTIALS CONFIGURATION
// ============================================================================
const SUPABASE_URL = "https://lrbimrlbskjweynxlgas.supabase.co"; // ⚠️ PASTE YOUR LIVE URL HERE
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";    // ⚠️ PASTE YOUR LIVE ANON KEY HERE

// Fallback dynamic initialization helper function
function getFailsafeSupabaseClient() {
  if (window.supabase && typeof window.supabase.from === 'function') {
    return window.supabase;
  }
  if (typeof window.supabase?.createClient === 'function') {
    window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return window.supabase;
  }
  return null;
}

// Bind your function explicitly to the window ecosystem
window.executeSaveAndExitWorkflow = function() {
  console.log("Save Progress Lifecycle Active!");

  if (document.getElementById('supabase-lead-modal-overlay')) return;

  // SAFE STEP FALLBACK: Discover active step safely
  let currentStepNumber = 1;
  try {
    const activePanel = document.querySelector('.wizard-panel.active') || document.querySelector('.wizard-panel');
    if (activePanel) {
      const dataStep = activePanel.getAttribute('data-step') || activePanel.id.replace('step-panel-', '');
      currentStepNumber = parseInt(dataStep) || 1;
    }
  } catch (stepError) {
    currentStepNumber = 1;
  }

  const overlay = document.createElement('div');
  overlay.id = 'supabase-lead-modal-overlay';
  overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(10, 31, 68, 0.4); backdrop-filter: blur(4px); z-index: 9999999; display: flex; align-items: center; justify-content: center; padding: 16px; box-sizing: border-box;';

  const card = document.createElement('div');
  card.style.cssText = 'background: #ffffff; width: 100%; max-width: 440px; border-radius: 12px; border: 1px solid #e2e8f0; padding: 24px; box-sizing: border-box; text-align: left;';
  card.innerHTML = `
    <div style="border-bottom:1px solid #e2e8f0; padding-bottom:14px; margin-bottom:18px; position:relative;">
      <h3 style="margin:0; color:#0a1f44; font-size:1.2rem; font-weight:900;">Save & Resume Progress</h3>
      <p style="margin:4px 0 0 0; color:#64748b; font-size:0.825rem;">We will email you a secure link so you can snap right back where you left off.</p>
      <button type="button" id="close-lead-modal-btn" style="position:absolute; top:-4px; right:-4px; background:none; border:none; font-size:1.25rem; color:#94a3b8; cursor:pointer;">&times;</button>
    </div>
    <form id="wizard-lead-capture-form" onsubmit="return false;" style="display:flex; flex-direction:column; gap:14px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div>
          <label style="font-size:0.75rem; font-weight:800; color:#0a1f44;">FIRST NAME *</label>
          <input type="text" id="lead_first_name" required style="width:100%; padding:8px 12px; border:1px solid #e2e8f0; border-radius:6px;">
        </div>
        <div>
          <label style="font-size:0.75rem; font-weight:800; color:#0a1f44;">LAST NAME *</label>
          <input type="text" id="lead_last_name" required style="width:100%; padding:8px 12px; border:1px solid #e2e8f0; border-radius:6px;">
        </div>
      </div>
     <div>
        <label style="font-size:0.75rem; font-weight:800; color:#0a1f44; display:block; margin-bottom:2px;">EMAIL ADDRESS *</label>
        <input type="email" id="lead_email" required style="width:100%; padding:10px 12px; border:1px solid #e2e8f0; border-radius:6px; box-sizing:border-box;">
        <!-- 🟢 HIGH-CONVERSION MICROCOPY: Alerting users to check alternative inbox folder trays -->
        <span style="display:block; font-size:0.7rem; color:#64748b; font-weight:400; margin-top:4px; line-height:1.3; text-align:left; padding-left:2px;">
          💡 <strong>Tip:</strong> If you don't see the message within 2 minutes, please verify your <strong>Spam, Junk, or Promotions folder</strong>.
        </span>
      </div>
      <div>
        <label style="font-size: 0.75rem; font-weight: 800; color: #0a1f44;">PHONE NUMBER <span style="color:#64748b;font-weight:400;">(OPTIONAL)</span></label>
        <input type="tel" id="lead_phone" placeholder="(512) 555-0199" style="width:100%; padding:10px 12px; border:1px solid #e2e8f0; border-radius:6px;">
      </div>
      <div id="lead-modal-status-feedback" style="display: none; font-size: 0.8rem; font-weight: 600; padding: 8px 12px; border-radius: 6px;"></div>
      <button type="submit" id="submit-lead-progress-btn" style="width:100%; background:#10b981; color:#ffffff; font-weight:700; border:none; padding:12px 0; border-radius:6px; cursor:pointer;">Send Magic Resume Link</button>
    </form>
  `;

  overlay.appendChild(card);
  document.body.appendChild(overlay);

  document.getElementById('close-lead-modal-btn').onclick = () => overlay.remove();

  document.getElementById('wizard-lead-capture-form').onsubmit = async function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-lead-progress-btn');
    const feedbackBox = document.getElementById('lead-modal-status-feedback');

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Securing application gateway...`;

    const emailValue = document.getElementById('lead_email').value.trim();
    const phoneElement = document.getElementById('lead_phone');

    const payload = {
      first_name: document.getElementById('lead_first_name').value.trim(),
      last_name: document.getElementById('lead_last_name').value.trim(),
      email: emailValue,
      phone: phoneElement ? phoneElement.value.trim() || null : null,
      current_step: currentStepNumber
    };

    try {
      const supabaseClient = getFailsafeSupabaseClient();
      if (!supabaseClient) {
        throw new Error('Supabase client library has failed to map onto the active page window.');
      }

      console.log("[Data Sync] Serializing lead parameters first...");
      feedbackBox.style.cssText = 'display: block; background: rgba(16, 185, 129, 0.05); color: #0a1f44; padding: 10px; margin-bottom: 10px; font-size: 0.825rem;';
      feedbackBox.innerHTML = `⚙ Writing workspace data records safely...`;
      
      // 1. DATA SUBMISSION FIRST (Ensures you capture the phone/email lead instantly)
      const { error: dbError } = await supabaseClient
        .from('wizard_abandoned_leads')
        .upsert([payload], { onConflict: 'email' });

      if (dbError) throw dbError;
      console.log("[Data Sync Success] Lead data written to database.");

      // 2. DISPATCH SECURE MAIL VERIFICATION SEGMENT
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Routing confirmation link...`;
      feedbackBox.innerHTML = `⚙ Dispatching access authorization token...`;
      
      const currentURL = window.location.origin + window.location.pathname;
      const { error: authError } = await supabaseClient.auth.signInWithOtp({
        email: emailValue,
        options: {
          emailRedirectTo: currentURL,
          shouldCreateUser: true
        }
      });

      // 3. HANDLE MICROSOFT 365 SMTP TIMEOUT GRACEFULLY
      if (authError) {
        console.warn("[Auth Notice] Custom SMTP relay timed out, but data was captured successfully:", authError);
        
        // If the email gateway drops (504), do not crash the user experience!
        feedbackBox.style.cssText = 'display: block; background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid #10b981; padding: 10px; margin-bottom: 10px; font-size: 0.825rem;';
        feedbackBox.innerHTML = `✓ Data secured! Our onboarding team will verify your compliance package setup coordinates shortly.`;
        submitBtn.innerHTML = `✓ Progress Saved`;
        
        setTimeout(() => { overlay.remove(); }, 3000);
        return;
      }

      // Standard operational success path
      feedbackBox.style.cssText = 'display: block; background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid #10b981; padding: 10px; margin-bottom: 10px; font-size: 0.825rem;';
      feedbackBox.innerHTML = `✓ Resume link dispatched! Check your professional inbox to resume your application.`;
      submitBtn.innerHTML = `✓ Link Delivered`;

      setTimeout(() => { overlay.remove(); }, 2500);

    } catch (err) {
      console.error("Save Progress Absolute Exception Caught:", err);
      
      let clearErrorMessage = "Connection interrupted.";
      if (err && typeof err === 'object') {
        clearErrorMessage = err.message || err.details || JSON.stringify(err);
      } else if (typeof err === 'string') {
        clearErrorMessage = err;
      }

      feedbackBox.style.cssText = 'display: block; background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid #ef4444; padding: 10px; margin-bottom: 10px; font-size: 0.825rem;';
      feedbackBox.innerHTML = `✕ Sync Error: ${clearErrorMessage}`;
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Send Magic Resume Link`;
    }
  };


};

// Cleaned, single-instance initialization script
document.addEventListener("DOMContentLoaded", () => {
  // Let the browser load completely to avoid script race condition crashes
  setTimeout(async () => {
    const supabaseClient = getFailsafeSupabaseClient();
    if (!supabaseClient || !supabaseClient.auth) return;

    try {
      const sessionCheck = await supabaseClient.auth.getSession();
      if (sessionCheck.data?.session?.user) {
        const { data } = await supabaseClient
          .from('wizard_abandoned_leads')
          .select('current_step')
          .eq('email', sessionCheck.data.session.user.email)
          .maybeSingle();
          
        if (data && typeof window.goToNextWizardStep === 'function') {
          window.goToNextWizardStep(parseInt(data.current_step) || 1);
        }
      }
    } catch (e) {
      console.warn("Auto-resume deferred safely.");
    }
  }, 1000); // 1-second delay ensures your main wizard engine is ready and won't collide
});
