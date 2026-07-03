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