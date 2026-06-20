// ======================================================== 
// 💬 VALIDATED SLIDE-OUT INTERACTIVE CHAT ENGINE 
// ======================================================== 
function toggleSupportFlyoutContainer(openState) {
    const flyoutPanel = document.getElementById("support-chat-flyout-panel");
    if (!flyoutPanel) return;
    
    if (openState) {
        flyoutPanel.classList.add("open");
    } else {
        flyoutPanel.classList.remove("open");
    }
}

function validateAndLaunchAgentChatSession(event) {
    if (event && typeof event.preventDefault === "function") event.preventDefault();
    
    const firstName = document.getElementById("chat_first_name").value.trim();
    const lastName = document.getElementById("chat_last_name").value.trim();
    const phoneNum = document.getElementById("chat_phone").value.trim();
    const emailAddr = document.getElementById("chat_email").value.trim();
    const emailValidationExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName) {
        alert("Please provide your full first and last name variables.");
        return;
    }
    if (phoneNum.length < 7) {
        alert("Please provide a valid connection telephone contact number.");
        return;
    }
    if (!emailValidationExpression.test(emailAddr)) {
        alert("Email format check validation failed. Provide a matching syntactical email entry.");
        return;
    }

    const formBox = document.getElementById("chat-preflight-input-form");
    if (formBox) {
        // FIXED: Stripped out the backslash breakout error to allow valid template variable reading
        formBox.innerHTML = `
            <div style="text-align: center; color: var(--navy); padding: 40px 0;">
                <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2rem; color: var(--primary); margin-bottom: 16px;"></i>
                <h4 style="margin:0 0 8px 0; font-weight:800;">Allocating Support Node...</h4>
                <p style="font-size:0.8rem; color:var(--slate); margin:0;">Connecting ${firstName} to our on-duty compliance specialist liaison.</p>
            </div>
        `;
    }
}


// ============================================================================ //
// ⏱️ REAL-TIME CHRONOLOGICAL CLOCK COMPONENT (12-HOUR TIME REGIME)
// ============================================================================ //
function initializeDynamicChronometerWidget12Hr() {
  const clockNode = document.getElementById("wizard-live-clock-timestamp");
  if (!clockNode) return; // Prevent interval loops if element is missing

  function refreshLiveTime() {
    const nowTimestamp = new Date();
    let hourDigits = nowTimestamp.getHours();
    const minuteDigits = nowTimestamp.getMinutes().toString().padStart(2, '0');
    const secondDigits = nowTimestamp.getSeconds().toString().padStart(2, '0');
    const timePeriodMeridiem = hourDigits >= 12 ? 'PM' : 'AM';

    hourDigits = hourDigits % 12;
    hourDigits = hourDigits ? hourDigits : 12; 

    const formattedTimeStr = `${hourDigits}:${minuteDigits}:${secondDigits} ${timePeriodMeridiem}`;
    if (clockNode) clockNode.textContent = formattedTimeStr;
  }

  refreshLiveTime();
  setInterval(refreshLiveTime, 1000);
}
window.initializeDynamicChronometerWidget12Hr = initializeDynamicChronometerWidget12Hr;
