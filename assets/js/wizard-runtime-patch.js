/**
 * filings4u, LLC - Unified Runtime Utilities & Analytics Ticker
 * Handles environmental live clocks, workspace greetings, and input keystroke mirrors.
 * REMOVED CONFLICTING HARDCODED PANEL LAYER STEPS TO PREVENT DOUBLE-CLICK LOOPS.
 */
(function() {
    "use strict";

    function bootProductionPatchEngine() {
        const clockSpan = document.getElementById("wizard-live-clock-timestamp");
        if (!clockSpan) return;

        // 1. CHRONOMETER TICKER TIMING ENGINE
        function renderLiveClockTicker() {
            const timeOutput = document.getElementById("wizard-live-clock-timestamp");
            if (!timeOutput) return;
            const timeNow = new Date();
            let hours = timeNow.getHours();
            const minutes = String(timeNow.getMinutes()).padStart(2, '0');
            const seconds = String(timeNow.getSeconds()).padStart(2, '0');
            const meridiem = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            timeOutput.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
        }
        renderLiveClockTicker();
        setInterval(renderLiveClockTicker, 1000);

        // 2. PRODUCTION SCHEMA GREETING CONFIGURATION
        function refreshWelcomeBadge() {
            let verifiedUserFirstName = "";
            const validatedNameSchemaKeys = ["applicant_first_name", "applicant_name", "contact_person_name", "user_legal_name", "oa_sole_member_name"];
            try {
                for (let i = 0; i < validatedNameSchemaKeys.length; i++) {
                    const cachedValue = localStorage.getItem(validatedNameSchemaKeys[i]);
                    if (cachedValue && cachedValue.trim().length > 1) {
                        verifiedUserFirstName = cachedValue.trim().replace(/[,.]/g, "").split(" ")[0];
                        break;
                    }
                }
            } catch (e) {
                return;
            }
            if (verifiedUserFirstName) {
                let welcomeAlert = document.getElementById("wizard-user-welcome-back");
                if (!welcomeAlert) {
                    welcomeAlert = document.createElement("span");
                    welcomeAlert.id = "wizard-user-welcome-back";
                    welcomeAlert.style.cssText = "color: #0284c7; font-weight: 800; margin-right: 6px;";
                    clockSpan.parentNode.insertBefore(welcomeAlert, clockSpan);
                }
                welcomeAlert.textContent = `Welcome Back, ${verifiedUserFirstName}! | `;
            }
        }
        refreshWelcomeBadge();

        // 3. APPLICANT KEYSTROKE LIVE CAPTURE
        document.body.addEventListener("input", function(event) {
            const fieldNode = event.target;
            if (!fieldNode || (!fieldNode.id && !fieldNode.name)) return;
            const id = fieldNode.id || fieldNode.name;
            if (id === "applicant_name" || id === "oa_sole_member_name" || id === "applicant_first_name") {
                localStorage.setItem(id, fieldNode.value);
                refreshWelcomeBadge();
            }
        });
    }

    setTimeout(bootProductionPatchEngine, 40);
})();
