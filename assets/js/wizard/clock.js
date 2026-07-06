// ============================================================================ //
// 🕒 MODULE: UNIVERSAL SELF-HEALING 12-HOUR CHRONOMETER & CALENDAR ENGINE     //
// ============================================================================ //
(function() {
    "use strict";

    /**
     * Natively locates or creates a container block inside the main wizard container layout panel.
     * Dynamically builds a fresh clock on whatever step view is currently active on screen.
     * @returns {HTMLElement|null} The resolved active clock node container carrier element.
     */
    function secureGlobalClockPlaceholder() {
        // 1. Scan for our active dynamic real-time target indicator ID first
        let clockNode = document.getElementById("wizard-clock-display-dynamic");
        if (clockNode) {
            // Verify the clock is still attached to a visible container panel.
            // If the parent step swapped and hid it, remove it so we can prepend it to the new active step!
            if (clockNode.parentElement && clockNode.parentElement.style.display === "none") {
                clockNode.remove();
                clockNode = null;
            } else {
                return clockNode;
            }
        }

        // 2. TARGET SELECTION ALIGNMENT: Locate whichever step panel card is currently active on screen!
        // This ensures the clock adaptively walks across steps 0, 1, 2, 3, etc. automatically.
        const parentHeaderWrapper = document.querySelector(".wizard-panel.active") ||
                                    document.querySelector(".step-panel-form-card") ||
                                    document.querySelector(".wizard-panel:not([style*='display: none'])") ||
                                    document.getElementById("step-panel-2") ||
                                    document.getElementById("step-panel-3") ||
                                    document.querySelector(".wizard-container");

        if (!parentHeaderWrapper) return null;

        // 3. PURGE HARDCODED CONFLICT LABELS FROM WIZARD.HTML
        const legacyStaleClocks = parentHeaderWrapper.querySelectorAll("span[style*='monospace'], div[style*='monospace'], .chronometer-slot");
        legacyStaleClocks.forEach(oldClock => {
            if (oldClock && oldClock.id !== "wizard-clock-display-dynamic") {
                oldClock.remove();
            }
        });

        // 4. Build a perfectly integrated, container-aligned clock container row
        clockNode = document.createElement("div");
        clockNode.id = "wizard-clock-display-dynamic";
        clockNode.className = "chronometer-slot wizard-step-clock-live";
        
        // Custom CSS layout rules force it cleanly to the top-right inner padding margin edge of the active card
        clockNode.style.cssText = "display: flex; align-items: center; font-family: monospace; font-size: 0.85rem; font-weight: 700; color: #0a1f44; background: #f8fafc; padding: 6px 12px; border-radius: 6px; border: 1px solid #e2e8f0; white-space: nowrap; margin-left: auto; width: max-content; margin-bottom: 20px; clear: both; box-sizing: border-box; position: relative; z-index: 10;";

        // Prepend inside the parent layout wrapper to push it right to the top row above the form field titles
        parentHeaderWrapper.prepend(clockNode);

        return clockNode;
    }

    /**
     * Scans the viewport, updates time strings, and updates the self-healing container layout.
     */
    function updateCoreTickDisplayPass() {
        const activeClockTarget = secureGlobalClockPlaceholder();
        if (!activeClockTarget) return;

        const currentSystemTimeInstance = new Date();

        // 1. EXTRACT AND FORMAT CALENDAR DATE METRICS (MM/DD/YYYY)
        const numericalMonth = String(currentSystemTimeInstance.getMonth() + 1).padStart(2, '0');
        const numericalDay = String(currentSystemTimeInstance.getDate()).padStart(2, '0');
        const numericalYear = currentSystemTimeInstance.getFullYear();
        const formattedCalendarDateString = `${numericalMonth}/${numericalDay}/${numericalYear}`;

        // 2. EXTRACT AND FORMAT 12-HOUR TIME METRICS (HH:MM:SS AM/PM)
        let rawHours = currentSystemTimeInstance.getHours();
        const minutesValue = String(currentSystemTimeInstance.getMinutes()).padStart(2, '0');
        const secondsValue = String(currentSystemTimeInstance.getSeconds()).padStart(2, '0');
        const designatorAmPmToken = (rawHours >= 12) ? "PM" : "AM";
        
        rawHours = rawHours % 12;
        rawHours = rawHours ? rawHours : 12; // Formats hour '0' to '12'
        const paddedHoursValue = String(rawHours).padStart(2, '0');
        const formattedTime12HrString = `${paddedHoursValue}:${minutesValue}:${secondsValue} ${designatorAmPmToken}`;

        // 3. SECURE DOM INJECTION PASS 
        activeClockTarget.innerHTML = `<i class="fa-regular fa-calendar-days" style="margin-right: 6px; color: var(--slate, #64748b);"></i>${formattedCalendarDateString} &nbsp;|&nbsp; <i class="fa-regular fa-clock" style="margin-right: 6px; color: var(--slate, #64748b);"></i>${formattedTime12HrString}`;
    }

    // Initialize execution loops safely behind macro-task scheduling frames
    const initializeExecutionPass = () => {
        updateCoreTickDisplayPass();
        if (window.f4uGlobalChronometerInterval) {
            clearInterval(window.f4uGlobalChronometerInterval);
        }
        window.f4uGlobalChronometerInterval = setInterval(updateCoreTickDisplayPass, 1000);
    };

    if (document.readyState !== "loading") {
        initializeExecutionPass();
    } else {
        document.addEventListener("DOMContentLoaded", initializeExecutionPass);
    }

    // Globally expose the clock execution loop so dynamic panel view switchers can force-refresh it instantly
    window.initializeDynamicChronometerWidget12Hr = updateCoreTickDisplayPass;
})();