// ============================================================================ //
// 💬 INTERACTIVE FLOATING CHAT CONTROLLER & DRAG MATRIX ENGINE                 //
// ============================================================================ //
function toggleSupportFlyoutContainer(shouldOpenDisplay) {
    const chatPanel = document.getElementById("support-chat-flyout-panel");
    if (!chatPanel) return;

    if (shouldOpenDisplay) {
        chatPanel.style.display = "flex";
        // Dynamically add a helper tag to the body layout to trigger width resets if necessary
        document.body.classList.add("chat-window-active");
    } else {
        chatPanel.style.display = "none";
        document.body.classList.remove("chat-window-active");
    }
}

/**
 * 🟢 MULTI-TOUCH DRAG ENGINE
 * Coordinates tracking vectors to allow fluid floating movements on the workspace canvas.
 */
function initializeFloatingChatDragMechanics() {
    const dragHandle = document.getElementById("support-chat-drag-handle");
    const targetFloatingPanel = document.getElementById("support-chat-flyout-panel");

    if (!dragHandle || !targetFloatingPanel) return;

    let coordOffsetX = 0, coordOffsetY = 0, currentPointerMouseX = 0, currentPointerMouseY = 0;

    dragHandle.onmousedown = function(e) {
        e = e || window.event;
        if (e.target !== dragHandle) return; // Prevent input elements conflict
        e.preventDefault();

        // Capture starting mouse pointer coordinates
        currentPointerMouseX = e.clientX;
        currentPointerMouseY = e.clientY;

        document.onmouseup = terminateFloatingPanelDragActionLoop;
        document.onmousemove = actuatePanelMovementTrackingPass;
    };

    function actuatePanelMovementTrackingPass(e) {
        e = e || window.event;
        e.preventDefault();

        // Compute coordinate movement deltas
        coordOffsetX = currentPointerMouseX - e.clientX;
        coordOffsetY = currentPointerMouseY - e.clientY;
        
        currentPointerMouseX = e.clientX;
        currentPointerMouseY = e.clientY;

        // Apply updated position coordinates straight to elements inline styles
        targetFloatingPanel.style.top = (targetFloatingPanel.offsetTop - coordOffsetY) + "px";
        targetFloatingPanel.style.left = (targetFloatingPanel.offsetLeft - coordOffsetX) + "px";
        targetFloatingPanel.style.right = "auto"; // Kill right orientation properties to permit left axes pulls
    }

    function terminateFloatingPanelDragActionLoop() {
        // Drop listener channels cleanly to stop dragging loops
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Map parameters back to window workspace records layers
window.toggleSupportFlyoutContainer = toggleSupportFlyoutContainer;
window.initializeFloatingChatDragMechanics = initializeFloatingChatDragMechanics;

// Launch listeners on DOM completion passes
if (document.readyState !== "loading") {
    initializeFloatingChatDragMechanics();
} else {
    document.addEventListener("DOMContentLoaded", initializeFloatingChatDragMechanics);
}


// ============================================================================ //
// 🕒 LIVE REGULATORY METADATA & COMPLIANCE CLOCK RUNNER                        //
// ============================================================================ //
/**
 * Automatically calculates standard regulatory timestamp tokens and user agent 
 * data strings to lock down valid audit trails.
 */
function hydrateComplianceTimestampAndClockMetrics() {
    console.log("[Metadata Clock] Synchronizing real-time compliance temporal anchors...");

    const timestampInput = document.getElementById("poa_meta_timestamp_utc");
    const userAgentInput = document.getElementById("poa_meta_user_agent");
    const intentStringInput = document.getElementById("poa_meta_intent_string");

    // 🟢 DYNAMIC UTILITY RESOLUTION PASS: 
    // Compiles an ISO-standard timestamp string (e.g., "2026-06-20T18:00:00.000Z")
    const currentUtcDateTime = new Date();
    const formattedIsoString = currentUtcDateTime.toISOString();

    if (timestampInput) {
        timestampInput.value = formattedIsoString;
        console.log(`[Metadata Clock] Secure timestamp anchor synced: ${formattedIsoString}`);
    }

    if (userAgentInput) {
        userAgentInput.value = navigator.userAgent || "Secure Wizard Core Browser Engine";
    }

    // 🟢 SYNCHRONIZE ACTIVE INTENT LOG LINES
    if (intentStringInput) {
        const signatureTextValue = (document.getElementById("poa_typed_signature") || document.getElementById("signature_input"))?.value || "";
        if (signatureTextValue.trim().length > 0) {
            intentStringInput.value = `ESIGN Affirmation compiled for signer: ${signatureTextValue.trim()} at localized anchor point.`;
        } else {
            intentStringInput.value = "Awaiting digital legal signature input text allocation parameters.";
        }
    }
}

// Automatically bind timestamp generators upon primary page load states
document.addEventListener("DOMContentLoaded", hydrateComplianceTimestampAndClockMetrics);

// Hook the clock into your signature input change routines to update intents in real-time
document.addEventListener("DOMContentLoaded", () => {
    const liveSignatureInputField = document.getElementById("poa_typed_signature") || document.getElementById("signature_input");
    if (liveSignatureInputField) {
        liveSignatureInputField.addEventListener("input", hydrateComplianceTimestampAndClockMetrics);
    }
});

// Real-time Visibility Observer: Refreshes clock parameters the exact split second Step 4 mounts
const poaClockTargetPanel = document.getElementById("step-panel-4") || document.getElementById("step-4");
if (poaClockTargetPanel) {
    const clockViewObserver = new MutationObserver(() => {
        if (poaClockTargetPanel.style.display !== "none") {
            hydrateComplianceTimestampAndClockMetrics();
        }
    });
    clockViewObserver.observe(poaClockTargetPanel, { attributes: true, attributeFilter: ["style"] });
}

window.hydrateComplianceTimestampAndClockMetrics = hydrateComplianceTimestampAndClockMetrics;

// ============================================================================ //
// 🕒 REAL-TIME SIDEBAR USER INTERFACE CLOCK TICK RUNNER (12-HOUR FORMAT)       //
// ============================================================================ //
function runMasterApplicationTimelineClockTick() {
    const liveClockDisplayNode = document.getElementById("wizard-live-clock-timestamp");
    if (!liveClockDisplayNode) return;

    const currentLocalMoment = new Date();

    // 🟢 UPDATED CONFIGURATION: Strictly enforces a standard 12-hour clock loop pass
    const timeFormattingOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true // 12-Hour AM/PM Marker Lock
    };

    const compiledDateString = currentLocalMoment.toLocaleString('en-US', timeFormattingOptions);
    liveClockDisplayNode.textContent = compiledDateString;
}
window.runMasterApplicationTimelineClockTick = runMasterApplicationTimelineClockTick;


// Map the execution thread to fire once immediately on DOM compilation completion
document.addEventListener("DOMContentLoaded", () => {
    runMasterApplicationTimelineClockTick();
    
    // 🟢 SECURED INTERVAL PASS: Starts a background 1000ms loop to update the seconds text live
    setInterval(runMasterApplicationTimelineClockTick, 1000);
    console.log("[Timeline Clock] Live 1-second interval thread ticker successfully started.");
});

window.runMasterApplicationTimelineClockTick = runMasterApplicationTimelineClockTick;
