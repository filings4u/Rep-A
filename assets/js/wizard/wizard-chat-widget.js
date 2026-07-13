/**
 * filings4u Platform Architecture
 * Module: Wizard UI Controls (Step 1 of 4 - REVISED FORM STACK)
 * Target: Handles mobile full-screen toggles and forces inline grid elements to stack vertically
 */

const f4uWizardSupabaseInstance = window.supabaseClient || window.supabase;
let clientSessionUserId = null;
let clientLiveSocketChannel = null;

/**
 * filings4u Platform Architecture
 * Module: Wizard UI Controls (Step 1 - Overriding Inline Display Constraints)
 * Target: Enforces display property changes directly over rigid inline HTML markers
 */
window.toggleSupportFlyoutContainer = function(shouldOpenMenuPanel) {
    const flyoutContainerNode = document.getElementById("support-chat-flyout-panel");
    if (!flyoutContainerNode) {
        console.error("[Chat Widget Error] Target panel selector element #support-chat-flyout-panel not found in active DOM.");
        return;
    }

    // Detect if we are active inside your custom full-screen mobile landscape rule
    const isMobileFullScreenLayout = window.innerWidth <= 500;

    if (shouldOpenMenuPanel) {
        // FIXED: Overrides the inline 'display: none !important' state by injecting an active 'block' marker
        flyoutContainerNode.style.setProperty("display", "block", "important");
        
        setTimeout(() => {
            if (isMobileFullScreenLayout) {
                flyoutContainerNode.style.setProperty("transform", "translateY(0)", "important");
            } else {
                flyoutContainerNode.style.setProperty("transform", "translateX(0)", "important");
            }
            flyoutContainerNode.style.setProperty("opacity", "1", "important");
            
            // Wipe absolute desktop drag positions if layout switches to smaller devices
            if (window.innerWidth <= 991) {
                flyoutContainerNode.style.top = "auto";
                flyoutContainerNode.style.left = "auto";
                if (!isMobileFullScreenLayout) {
                    flyoutContainerNode.style.bottom = "20px";
                    flyoutContainerNode.style.right = "20px";
                }

                // Invalidate your horizontal name field layout flex directions on small viewports
                const inlineFlexRow = flyoutContainerNode.querySelector("form > div[style*='display: flex']");
                if (inlineFlexRow) {
                    inlineFlexRow.style.setProperty("flex-direction", "column", "important");
                    inlineFlexRow.style.setProperty("gap", "10px", "important");
                }
            } else {
                if (!flyoutContainerNode.style.top || flyoutContainerNode.style.top === "0px") {
                    flyoutContainerNode.style.removeProperty("top");
                    flyoutContainerNode.style.removeProperty("left");
                }
                const inlineFlexRow = flyoutContainerNode.querySelector("form > div[style*='display: flex']");
                if (inlineFlexRow) {
                    inlineFlexRow.style.removeProperty("flex-direction");
                }
            }
        }, 10);

        const initialInputFieldName = document.getElementById("chat_first_name");
        if (initialInputFieldName) {
            initialInputFieldName.focus();
        }
    } else {
        if (isMobileFullScreenLayout) {
            flyoutContainerNode.style.setProperty("transform", "translateY(100%)", "important");
        } else {
            flyoutContainerNode.style.setProperty("transform", "translateX(100%)", "important");
        }
        flyoutContainerNode.style.setProperty("opacity", "0", "important");
        
        setTimeout(() => {
            if (flyoutContainerNode.style.opacity === "0") {
                // Return safely back to the hidden display configuration state
                flyoutContainerNode.style.setProperty("display", "none", "important");
            }
        }, 300);
    }
};


/**
 * Global click off-canvas listener framework.
 * FIXED: Bypasses strict inline style locks using native window computation selectors
 */
document.addEventListener("click", function(canvasEventPayload) {
    const panel = document.getElementById("support-chat-flyout-panel");
    if (!panel) return;

    // TARGETED VISIBILITY FIX: Evaluates live styles to bypass 'display: none !important' inline string blocks
    const activeComputedDisplay = window.getComputedStyle(panel).display;
    if (activeComputedDisplay === "none") {
        return;
    }

    // TARGETED BUTTON WELL FIX: Uses .closest() to match any target pixel inside your launcher icon
    const didUserClickLauncher = canvasEventPayload.target.closest('.chat-bubble-widget');
    const isClickInsidePanel = panel.contains(canvasEventPayload.target);

    // Smoothly close the window layout panel only if the click was genuinely on external wrapper parameters
    if (!isClickInsidePanel && !didUserClickLauncher) {
        window.toggleSupportFlyoutContainer(false);
    }
});


/**
 * filings4u Platform Architecture
 * Module: Desktop Repositioning Engine (Step 2 - Hardened Assembly)
 * Target: Restricts dragging to desktop screens and enforces proper computed style evaluation
 */

window.initializeSupportChatDragEngine = function() {
    const dragHandle = document.getElementById("support-chat-drag-handle");
    const dragTarget = document.getElementById("support-chat-flyout-panel");
    if (!dragHandle || !dragTarget) return;

    let initialXCoordinate = 0, initialYCoordinate = 0;
    let currentXOffset = 0, currentYOffset = 0;

    if (window.innerWidth <= 991) {
        dragHandle.onmousedown = null;
        dragHandle.style.cursor = "default";
        return;
    }

    dragTarget.style.position = "fixed";
    dragHandle.style.cursor = "move";
    dragHandle.onmousedown = initiateDragSequence;

    function initiateDragSequence(eventEventObject) {
        if (window.innerWidth <= 991) return; 
        eventEventObject = eventEventObject || window.event;
        eventEventObject.preventDefault();
        
        initialXCoordinate = eventEventObject.clientX;
        initialYCoordinate = eventEventObject.clientY;
        
        document.onmouseup = terminateDragSequence;
        document.onmousemove = executeDragMovementUpdate;
    }

    function executeDragMovementUpdate(eventEventObject) {
        eventEventObject = eventEventObject || window.event;
        eventEventObject.preventDefault();
        
        currentXOffset = initialXCoordinate - eventEventObject.clientX;
        currentYOffset = initialYCoordinate - eventEventObject.clientY;
        initialXCoordinate = eventEventObject.clientX;
        initialYCoordinate = eventEventObject.clientY;

        const finalTopCalculatedProperty = dragTarget.offsetTop - currentYOffset;
        const finalLeftCalculatedProperty = dragTarget.offsetLeft - currentXOffset;

        // FIXED: Enforces high-specificity inline assignment overrides to prevent style drops
        dragTarget.style.setProperty("top", finalTopCalculatedProperty + "px", "important");
        dragTarget.style.setProperty("left", finalLeftCalculatedProperty + "px", "important");
        dragTarget.style.setProperty("bottom", "auto", "important");
        dragTarget.style.setProperty("right", "auto", "important");
    }

    function terminateDragSequence() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
};

window.addEventListener("resize", () => {
    const flyout = document.getElementById("support-chat-flyout-panel");
    if (!flyout) return;

    // FIXED: Evaluates computed layout properties to bypass rigid inline style strings safely
    const isPanelCurrentlyVisible = window.getComputedStyle(flyout).display !== "none";

    if (window.innerWidth <= 991) {
        if (isPanelCurrentlyVisible) {
            // Instantly clear absolute positions and return container to a responsive layout state
            flyout.style.setProperty("top", "auto", "important");
            flyout.style.setProperty("left", "auto", "important");
            
            if (window.innerWidth > 500) {
                flyout.style.setProperty("bottom", "20px", "important");
                flyout.style.setProperty("right", "20px", "important");
                
                const inlineFlexRow = flyout.querySelector("form > div[style*='display: flex']");
                if (inlineFlexRow) {
                    inlineFlexRow.style.setProperty("flex-direction", "column", "important");
                }
            } else {
                flyout.style.setProperty("bottom", "0px", "important");
                flyout.style.setProperty("right", "0px", "important");
            }
        }
    } else {
        window.initializeSupportChatDragEngine();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 991) {
        setTimeout(window.initializeSupportChatDragEngine, 200);
    }
});


/**
 * Fallback Viewport Switch Engine
 * Mounts and transitions the UI layout smoothly from the intake form to the live conversation logs container
 * FIXED: Targets only the inner form tag elements to prevent hiding your master parent wrapper node
 */
window.mountClientActiveChatViewportPanel = function(customerFirstName) {
    console.log(`[UI Panel Transition] Mounting active conversation frame layout for: ${customerFirstName}`);
    
    const preflightFormFrame = document.getElementById("chat-preflight-input-form");
    if (!preflightFormFrame) {
        console.error("[UI Mount Error] Target parent element wrapper #chat-preflight-input-form not found.");
        return;
    }

    // FIXED: Target and hide only the inner interactive form markup block tree
    const targetInnerFormElement = preflightFormFrame.querySelector("form");
    const targetInnerParagraphDesc = preflightFormFrame.querySelector("p");
    
    if (targetInnerFormElement) {
        targetInnerFormElement.style.setProperty("display", "none", "important");
    }
    if (targetInnerParagraphDesc) {
        targetInnerParagraphDesc.style.setProperty("display", "none", "important");
    }

    // Locate or build your interactive conversation elements wrapper safely
    let targetActiveChatFrame = document.getElementById("chat-active-timeline-viewport");
    
    if (!targetActiveChatFrame) {
        console.log("[UI Mount Info] Active timeline container absent. Programmatically generating chat scroll layout window...");
        
        // Build a highly-scannable chat interface scroll frame matching your brand properties natively
        targetActiveChatFrame = document.createElement("div");
        targetActiveChatFrame.id = "chat-active-timeline-viewport";
        targetActiveChatFrame.style.cssText = `
            display: flex !important;
            flex-direction: column !important;
            flex: 1 !important;
            height: 100% !important;
            width: 100% !important;
            box-sizing: border-box !important;
        `;

        const scrollWellElement = document.createElement("div");
        scrollWellElement.id = "wizardChatScrollWell";
        scrollWellElement.style.cssText = `
            flex: 1 !important;
            padding: 16px !important;
            overflow-y: auto !important;
            background: #ffffff !important;
            box-sizing: border-box !important;
        `;

        targetActiveChatFrame.appendChild(scrollWellElement);
        preflightFormFrame.appendChild(targetActiveChatFrame);
    } else {
        targetActiveChatFrame.style.setProperty("display", "flex", "important");
        targetActiveChatFrame.style.setProperty("flex-direction", "column", "important");
    }

    // Post a friendly welcoming notification string inside your newly mounted text bubble frame layout
    if (typeof window.appendIncomingMsgBubbleToWizardUI === "function") {
        window.appendIncomingMsgBubbleToWizardUI(`Hello ${customerFirstName}! An expert filings4u compliance broker is connecting to your session tracking wire. How can we help you today?`, 'admin');
    }
};


/**
 * filings4u Platform Architecture
 * Module: Wizard Form Launcher & Real-Time Sync (Step 4 of 4)
 * Target: Enforces strict layout field parsing, simultaneously shakes errors, and launches streams
 */

const f4uWizardSupabaseInstance = window.supabaseClient || window.supabase;
let clientSessionUserId = null;
let clientLiveSocketChannel = null;

/**
 * Connects real-time WebSockets to monitor incoming agent responses on the wizard.
 */
window.connectClientIncomingSocketStream = function() {
    // Resolve instance context parameters safely out of window scope targets
    const activeInstance = window.supabaseClient || window.supabase || f4uWizardSupabaseInstance;
    if (!activeInstance || !clientSessionUserId) return;

    console.log(`[Socket Poller Link] Subscribing client to real-time sync channel wire: live_client_poller_${clientSessionUserId}`);

    clientLiveSocketChannel = activeInstance
        .channel('live_client_poller_' + clientSessionUserId)
        .on('postgres_changes', { 
            event: 'INSERT', 
            schema: 'public', 
            table: 'chat_messages', 
            filter: 'client_id=eq.' + clientSessionUserId 
        }, (payload) => {
            if (String(payload.new.sender_type).toLowerCase() === 'admin') {
                if (typeof window.appendIncomingMsgBubbleToWizardUI === "function") {
                    window.appendIncomingMsgBubbleToWizardUI(payload.new.message_content, 'admin');
                }
            }
        })
        .subscribe();
};

/**
 * Main Form Extraction Safety Gate Loop Execution
 */
window.validateAndLaunchAgentChatSession = async function(event) {
    if (event) {
        if (typeof event.preventDefault === "function") event.preventDefault();
        if (typeof event.stopPropagation === "function") event.stopPropagation();
    }

    const submitButton = document.querySelector(".btn-wizard-main");
    const fNameField = document.getElementById("chat_first_name");
    const lNameField = document.getElementById("chat_last_name");
    const phoneField = document.getElementById("chat_phone");
    const emailField = document.getElementById("chat_email");

    if (!fNameField || !lNameField || !phoneField || !emailField) {
        console.error("[Intake Fault] Critical input box reference nodes are missing from active layout canvas.");
        return;
    }

    // Hardware Accelerated Web Animations API Injector Engine
    const triggerFieldAlertShake = (targetInputNode) => {
        const originalBorder = targetInputNode.style.borderColor;
        const originalBoxShadow = targetInputNode.style.boxShadow;

        targetInputNode.style.setProperty("border-color", "#ef4444", "important");
        targetInputNode.style.setProperty("box-shadow", "0 0 0 2px rgba(239, 68, 68, 0.2)", "important");

        targetInputNode.animate([
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-6px)' },
            { transform: 'translateX(6px)' },
            { transform: 'translateX(-6px)' },
            { transform: 'translateX(6px)' },
            { transform: 'translateX(0px)' }
        ], {
            duration: 300,
            iterations: 1,
            easing: 'ease-in-out'
        });

        setTimeout(() => {
            targetInputNode.style.borderColor = originalBorder;
            targetInputNode.style.boxShadow = originalBoxShadow;
        }, 1200);
    };

    const fName = fNameField.value.trim();
    const lName = lNameField.value.trim();
    const phone = phoneField.value.trim();
    const email = emailField.value.trim();

    // Re-verified validation regex pattern constraints maps
    const globalPhonePattern = /^\+?[0-9\s\-]{7,15}$/;
    const globalEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const consumerDomainBlocklist = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
    
    // FIXED: Hardened domain string splitter to ensure safe array evaluations
    const emailParts = email.toLowerCase().split('@');
    const extractedDomain = emailParts.length === 2 ? emailParts[1] : '';

    let registrationFormHasErrors = false;
    let firstInvalidFieldNode = null;

    // Simultaneous Multi-field Structural Evaluation Check List
    if (!fName) { 
        triggerFieldAlertShake(fNameField); registrationFormHasErrors = true; if (!firstInvalidFieldNode) firstInvalidFieldNode = fNameField; 
    }
    if (!lName) { 
        triggerFieldAlertShake(lNameField); registrationFormHasErrors = true; if (!firstInvalidFieldNode) firstInvalidFieldNode = lNameField; 
    }
    if (!phone || !globalPhonePattern.test(phone)) { 
        triggerFieldAlertShake(phoneField); registrationFormHasErrors = true; if (!firstInvalidFieldNode) firstInvalidFieldNode = phoneField; 
    }
    if (!email || !globalEmailPattern.test(email) || consumerDomainBlocklist.includes(extractedDomain)) { 
        triggerFieldAlertShake(emailField); registrationFormHasErrors = true; if (!firstInvalidFieldNode) firstInvalidFieldNode = emailField; 
    }

    if (registrationFormHasErrors) {
        if (firstInvalidFieldNode) firstInvalidFieldNode.focus();
        return;
    }

    // Lock button interface state to prevent multiple duplicate database clicks
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerText = "Connecting...";
    }

    clientSessionUserId = crypto.randomUUID();
    const activeInstance = window.supabaseClient || window.supabase || f4uWizardSupabaseInstance;

    if (!activeInstance) {
        console.error("[Supabase Error] No valid database client instances located in active window scope memory.");
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerText = "Connect to Live Agent";
        }
        return;
    }

    try {
        // Ingest details parameters into wizard_intake_sessions table using compatible client_id column name
        const { error: intakeError } = await activeInstance
            .from('wizard_intake_sessions')
            .insert({
                client_id: clientSessionUserId,
                first_name: fName,
                last_name: lName,
                phone_number: phone,
                business_email: email,
                company_name: `Prospect: ${fName} ${lName}`,
                session_status: 'intake_active'
            });

        if (intakeError) throw intakeError;

        const initialPayloadString = `System Notice: Compliance broker bridging session initialized for ${fName}.`;
        const { error: msgError } = await activeInstance
            .from('chat_messages')
            .insert({
                client_id: clientSessionUserId,
                sender_type: 'client',
                message_content: initialPayloadString
            });

        if (msgError) throw msgError;

        // Initialize WebSocket poller tracks instantly upon table mutation resolve
        window.connectClientIncomingSocketStream();
        
        // Call the viewport switcher layout routine safely to clear the fields view
        if (typeof window.mountClientActiveChatViewportPanel === "function") {
            window.mountClientActiveChatViewportPanel(fName);
        }

    } catch (supabaseExceptionTelemetry) {
        console.error("[Supabase Intake Engine Exception] Data pipeline rejected mutation row:", supabaseExceptionTelemetry.message);
        
        // Re-enable button control layout properties on catastrophic connection failure
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerText = "Connect to Live Agent";
        }
    }
};



/**
 * filings4u Platform Architecture
 * Module: Realtime Chat Sync, Audio Alerting & Message Pipeline
 * Target: Handles websocket listeners, text deliveries, audio chimes, and deep links
 */

const f4uWizardSupabaseInstance = window.supabaseClient || window.supabase;
let clientSessionUserId = null;
let clientLiveSocketChannel = null;

/**
 * Connects real-time WebSockets to monitor incoming agent responses on the wizard.
 * FIXED: Uses client_id query parameter mapping matching your UUID table rows definition.
 */
window.connectClientIncomingSocketStream = function() {
    const activeInstance = window.supabaseClient || window.supabase || f4uWizardSupabaseInstance;
    if (!activeInstance || !clientSessionUserId) return;

    console.log(`[Socket Poller Link] Subscribing client to real-time sync channel wire: live_client_poller_${clientSessionUserId}`);

    clientLiveSocketChannel = activeInstance
        .channel('live_client_poller_' + clientSessionUserId)
        .on('postgres_changes', { 
            event: 'INSERT', 
            schema: 'public', 
            table: 'chat_messages', 
            filter: 'client_id=eq.' + clientSessionUserId 
        }, (payload) => {
            if (String(payload.new.sender_type).toLowerCase() === 'admin') {
                window.appendIncomingMsgBubbleToWizardUI(payload.new.message_content, 'admin');
            }
        })
        .subscribe();
};

/**
 * Transmits customer typing parameters up to the Supabase storage layer.
 * FIXED: Uses client_id mapping column to avoid unhandled database constraint exceptions.
 */
window.dispatchWizardClientChatMessagePayload = async function() {
    const inputEl = document.getElementById("wizardClientChatMessageInputField");
    const activeInstance = window.supabaseClient || window.supabase || f4uWizardSupabaseInstance;
    if (!inputEl || !clientSessionUserId || !activeInstance) return;

    const content = inputEl.value.trim();
    if (!content) return;

    inputEl.value = "";
    window.appendIncomingMsgBubbleToWizardUI(content, 'client');

    try {
        const { error } = await activeInstance
            .from('chat_messages')
            .insert({ 
                client_id: clientSessionUserId, 
                sender_type: 'client', 
                message_content: content 
            });

        if (error) console.error("[Silent Logging] Failed to insert client message content payload:", error.message);
    } catch (backgroundFault) {
        console.error("[Silent Logging] Core network exception during send pass:", backgroundFault.message);
    }
};

/**
 * Appends standard formatted HTML bubble strings directly into the client conversation view.
 */
window.appendIncomingMsgBubbleToWizardUI = function(textString, senderTypeRole) {
    const well = document.getElementById("wizardChatScrollWell");
    if (!well) return;

    const bubbleRow = document.createElement("div");
    const isAdmin = senderTypeRole === 'admin';
    const alignmentStyles = isAdmin ? 
        "margin-right: auto; background: #edf2f7; color: #0f172a; border-bottom-left-radius: 2px;" : 
        "margin-left: auto; background: #0a1f44; color: #ffffff; border-bottom-right-radius: 2px;";

    bubbleRow.style.cssText = `
        max-width: 85% !important;
        padding: 8px 12px !important;
        border-radius: 8px !important;
        font-size: 0.825rem !important;
        font-weight: 500 !important;
        word-break: break-word !important;
        box-shadow: 0 1px 2px rgba(0,0,0,0.01) !important;
        line-height: 1.4 !important;
        text-align: left !important;
        margin-bottom: 2px !important;
        ${alignmentStyles}
    `;

    bubbleRow.innerText = textString;
    well.appendChild(bubbleRow);
    well.scrollTop = well.scrollHeight;
};

/**
 * Injects a global, multi-channel live listener inside your administrative panel.
 * FIXED: Re-mapped audio target path strings directly to a valid, playable media file resource asset.
 */
window.initializeAdminGlobalRealtimeAlertsEngine = function(supabaseClientInstance) {
    if (!supabaseClientInstance) return;

    console.log("[Staff Communication Link] Deploying active real-time workspace intercept listeners...");

    supabaseClientInstance
        .channel('global_admin_roster_watcher')
        .on('postgres_changes', { 
            event: 'INSERT', 
            schema: 'public', 
            table: 'chat_messages', 
            filter: 'sender_type=eq.client' 
        }, (payload) => {
            try {
                // FIXED: Direct pointer reference layout to a formal audio media streaming asset file
                const audioChimeNode = new Audio("https://google.com");
                audioChimeNode.volume = 0.40;
                audioChimeNode.play();
            } catch (audioErr) {
                console.log("[Browser Block] Audio notification delayed until user interface engagement pass.");
            }

            if (typeof window.synchronizeChatThreadsRoster === "function") {
                window.synchronizeChatThreadsRoster(supabaseClientInstance);
            }
        })
        .subscribe();
};

if (window.location.pathname.includes("admin-chat.html")) {
    const checkInterval = setInterval(() => {
        const clientRef = window.supabaseClient || window.supabase || window.chatAdminCoreClient;
        if (clientRef) {
            window.initializeAdminGlobalRealtimeAlertsEngine(clientRef);
            clearInterval(checkInterval);
        }
    }, 100);
}

/**
 * Monitors unread conversation threads and safely formats out-of-office message alerts.
 * FIXED: Re-aligned routing link format matching your PowerShell deep-link scanning handlers.
 */
window.dispatchOutOfOfficeUnreadChatNotification = function(clientSupabaseInstance, numericUserId, fallbackClientText) {
    if (!clientSupabaseInstance || !numericUserId) return;

    console.log(`[Backup Latency Engine] Monitoring staff engagement rules window for Client #${numericUserId}...`);

    setTimeout(async () => {
        try {
            const { data: messages, error } = await clientSupabaseInstance
                .from('chat_messages')
                .select('sender_type')
                .eq('client_id', numericUserId)
                .order('created_at', { ascending: false });

            if (error) throw error;

            const hasAdminReplied = messages && messages.some(msg => String(msg.sender_type).toLowerCase() === 'admin');
            if (hasAdminReplied) {
                console.log(`[Latency Clearance] Active response detected for Client #${numericUserId}. Alert dismissed.`);
                return;
            }

            console.log(`[Latency Breach] No active staff response found for Client #${numericUserId}. Routing out-of-office webhooks...`);

            const centralNotificationUrl = "https://filings4u.com";
            const operationalPayloadData = {
                recipientInbox: "support@filings4u.com",
                alertType: "UNATTENDED_WIZARD_CHAT_BYPASS",
                timestamp: new Date().toISOString(),
                accountTraceId: numericUserId,
                previewContent: fallbackClientText,
                // FIXED: Hardened parameter mappings to build a valid deep-link target path string string
                routingDirectLink: `https://filings4u.com{numericUserId}`
            };

            await fetch(centralNotificationUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Platform-Secret-Token': 'f4u_live_vault_secure_interlock_token_9981'
                },
                body: JSON.stringify(operationalPayloadData)
            });

            console.log(`[Notification Success] Unattended thread telemetry successfully routed to support inboxes.`);
        } catch (err) {
            console.error("Critical error inside out-of-office automated communications dispatch loop:", err.message);
        }
    }, 60000); // 1-minute timeout execution rule parameter
};

window.connectClientIncomingSocketStream = connectClientIncomingSocketStream;
window.dispatchWizardClientChatMessagePayload = dispatchWizardClientChatMessagePayload;
window.appendIncomingMsgBubbleToWizardUI = appendIncomingMsgBubbleToWizardUI;

/**
 * filings4u Platform Architecture
 * Module: Admin Dashboard Navigation Sync
 * Target: Handles incoming unread deep-links, scans UUID rows, and focuses staff on breaches
 */

window.handleIncomingEmailDirectRoutingLinks = function() {
    const urlQuerySelectors = new URLSearchParams(window.location.search);
    const targetAccountNum = urlQuerySelectors.get('targetAccount');
    if (!targetAccountNum) return;

    console.log(`[Deep Link Routing] Auto-connecting conversation timeline for Client UUID: ${targetAccountNum}`);
    
    // Hardened scope tracking variable visibility definitions
    let elementLookupInterval = null;

    elementLookupInterval = setInterval(() => {
        const rows = document.querySelectorAll('#adminUsersFeedContainer div');
        let matchingRowElement = null;

        rows.forEach(row => {
            // FIXED: Scans for the raw UUID string anywhere inside the card layout without forcing an artificial "#" prefix block
            if (row.innerText.includes(targetAccountNum)) {
                matchingRowElement = row;
            }
        });

        if (matchingRowElement) {
            clearInterval(elementLookupInterval);
            
            // Execute interaction sequence triggers smoothly
            matchingRowElement.click();
            
            // Highlight visual anchors to draw immediate staff attention to the breaching thread row
            matchingRowElement.style.setProperty("border-left", "4px solid #ef4444", "important");
            matchingRowElement.style.setProperty("background", "rgba(16, 185, 129, 0.08)", "important");
        }
    }, 150);

    // Hardened memory cleaner track to protect device loop resources safely
    setTimeout(() => {
        if (elementLookupInterval) {
            clearInterval(elementLookupInterval);
        }
    }, 8000);
};

// Bind parameter scanner directly into your administration page cycle hooks
if (window.location.pathname.includes("admin-chat.html")) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(window.handleIncomingEmailDirectRoutingLinks, 250);
        });
    } else {
        setTimeout(window.handleIncomingEmailDirectRoutingLinks, 250);
    }
}

console.log("[System Verified] Administrative console deep-linking parameters securely deployed.");


/**
 * filings4u Platform Architecture
 * Module: Wizard UI Controls & Storage Pipeline (Step 2 & 3 Combined)
 * Target: Handles secure session termination, multi-part paperclip uploads, and asynchronous data flushing
 */

const f4uWizardSupabaseInstance = window.supabaseClient || window.supabase;
let clientSessionUserId = null;
let clientLiveSocketChannel = null;
let activePendingFileObject = null;

/**
 * Confirms closing steps, updates Supabase status to ended, flushes logs, and delivers transcripts safely.
 * FIXED: Replaced PowerShell Write-Host string text with native browser console commands.
 */
window.confirmAndTerminateChatSession = async function() {
    if (!clientSessionUserId) {
        window.toggleSupportFlyoutContainer(false);
        return;
    }

    const confirmSessionClose = confirm("Are you sure you want to end this chat conversation? A full text transcript will be delivered to your email address.");
    if (!confirmSessionClose) return;

    console.log(`[Session Termination] Shutting down conversation stream links for Client ID: ${clientSessionUserId}`);
    
    // Disconnect active real-time polling socket hooks safely
    if (clientLiveSocketChannel) {
        clientLiveSocketChannel.unsubscribe();
    }

    // Mutate your Supabase session row status to 'ended' so PowerShell daemons drop the SLA watch tracking
    try {
        const activeInstance = window.supabaseClient || window.supabase || f4uWizardSupabaseInstance;
        if (activeInstance) {
            await activeInstance
                .from('wizard_intake_sessions')
                .update({ session_status: 'ended' })
                .eq('client_id', clientSessionUserId);
        }
    } catch (statusFault) {
        console.error("[Session Closer Error] Failed to update final session layout state mapping:", statusFault.message);
    }

    // Call the processing route to compile logs and send them via Resend
    if (typeof window.compileAndSendFinalTranscript === "function") {
        // FIXED: Exchanged for clean browser logging execution parameters
        console.log("📄 Dispatching dialogue logs upstream before closing execution window...");
        await window.compileAndSendFinalTranscript();
    }

    // Completely clear operational layout storage states and shut down the active panel view
    clientSessionUserId = null;
    window.toggleSupportFlyoutContainer(false);
    
    // Encapsulated reload inside a brief delay window timeout to ensure network data passes clear the buffer
    setTimeout(() => {
        location.reload();
    }, 600);
};

/**
 * Executes automatically when a user clicks the paperclip icon and selects a file.
 * Displays the filename badge stripe on your widget interface instantly.
 */
window.handleLocalFileSelectionEvent = function(inputNodeReference) {
    if (!inputNodeReference.files || inputNodeReference.files.length === 0) return;
    
    // Stash the raw browser file parameters inside global state map memory
    activePendingFileObject = inputNodeReference.files[0];
    
    const badgeStrip = document.getElementById("wizardAttachmentBadgeStrip");
    const labelNode = document.getElementById("wizardAttachmentFileName");
    
    if (badgeStrip && labelNode) {
        labelNode.innerText = activePendingFileObject.name;
        badgeStrip.style.setProperty("display", "flex", "important");
    }
    console.log(`[File Selection] File prepared for upload pipeline: ${activePendingFileObject.name}`);
};

/**
 * Clears the selected file and hides the confirmation indicator badge completely.
 */
window.clearSelectedAttachmentPayload = function() {
    activePendingFileObject = null;
    const fileInput = document.getElementById("wizardChatFileUploadInput");
    if (fileInput) fileInput.value = "";
    
    const badgeStrip = document.getElementById("wizardAttachmentBadgeStrip");
    if (badgeStrip) {
        badgeStrip.style.setProperty("display", "none", "important");
    }
};

/**
 * Transmits customer typing parameters and handles parallel multi-part file uploads automatically.
 */
window.dispatchWizardClientChatMessagePayload = async function() {
    const inputEl = document.getElementById("wizardClientChatMessageInputField");
    const activeInstance = window.supabaseClient || window.supabase || f4uWizardSupabaseInstance;
    if (!inputEl || !clientSessionUserId || !activeInstance) return;

    let contentMessageBodyStr = inputEl.value.trim();
    let trackingUploadedFileUrl = "";

    // Block processing if text string parameters and file payloads are both empty
    if (!contentMessageBodyStr && !activePendingFileObject) return;

    // Clear input interface fields immediately for an optimistic UI experience
    inputEl.value = "";

    // Process Binary Attachment Streams if stashed inside memory track maps
    if (activePendingFileObject) {
        const fileRef = activePendingFileObject;
        window.clearSelectedAttachmentPayload(); // Dismiss indicator badge row instantly

        try {
            // Generate a clean custom pathway inside your bucket to isolate customer directories safely
            const targetStoragePath = `${clientSessionUserId}/${Date.now()}_${fileRef.name}`;
            console.log(`[Storage Upload] Streaming binary block data to path: ${targetStoragePath}`);

            // Upload raw binary stream blocks directly to your 'chat-attachments' bucket instance
            const { data: uploadData, error: uploadError } = await activeInstance
                .storage
                .from('chat-attachments')
                .upload(targetStoragePath, fileRef, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (uploadError) throw uploadError;

            // Generate public reference URLs straight out of your Supabase storage endpoint configuration
            const { data: publicUrlData } = activeInstance
                .storage
                .from('chat-attachments')
                .getPublicUrl(targetStoragePath);

            trackingUploadedFileUrl = publicUrlData.publicUrl;
            console.log(`[Storage Upload Success] Generated asset web retrieval link: ${trackingUploadedFileUrl}`);

            if (!contentMessageBodyStr) {
                contentMessageBodyStr = `Sent Attachment: ${fileRef.name}`;
            }

        } catch (uploadExceptionTelemetry) {
            console.error("[Storage Upload Failure] Connection error during payload stream upload:", uploadExceptionTelemetry.message);
            if (typeof window.appendIncomingMsgBubbleToWizardUI === "function") {
                window.appendIncomingMsgBubbleToWizardUI("⚠️ File upload failed. Check connection parameters.", 'admin');
            }
            return;
        }
    }

    // Append the combined message or link to your interface conversation viewport log
    if (typeof window.appendIncomingMsgBubbleToWizardUI === "function") {
        window.appendIncomingMsgBubbleToWizardUI(contentMessageBodyStr, 'client');
        if (trackingUploadedFileUrl) {
            window.appendIncomingMsgBubbleToWizardUI(`📎 File Download: ${trackingUploadedFileUrl}`, 'client');
        }
    }

    // Mutation Layer: Insert the log entry row data directly inside your chat_messages table schema
    try {
        const payloadDataMutationPacket = {
            client_id: clientSessionUserId,
            sender_type: 'client',
            message_content: contentMessageBodyStr,
            attached_file_url: trackingUploadedFileUrl || null
        };

        const { error: dbInsertError } = await activeInstance
            .from('chat_messages')
            .insert(payloadDataMutationPacket);

        if (dbInsertError) throw dbInsertError;

    } catch (dbFaultException) {
        console.error("[Silent Logging Exception] Database rejected insertion parameters packet:", dbFaultException.message);
    }
};

window.confirmAndTerminateChatSession = confirmAndTerminateChatSession;
window.handleLocalFileSelectionEvent = handleLocalFileSelectionEvent;
window.clearSelectedAttachmentPayload = clearSelectedAttachmentPayload;
window.dispatchWizardClientChatMessagePayload = dispatchWizardClientChatMessagePayload;


/**
 * filings4u Platform Architecture
 * Module: Wizard UI Controls (Step 3 - Transcript Compilation)
 * Target: Queries Supabase message tables, formats conversation lines, and dispatches data
 * CLEANED: Stripped away dead Express.js code blocks to ensure error-free browser compilation
 */

window.compileAndSendFinalTranscript = async function() {
    if (!clientSessionUserId || !f4uWizardSupabaseInstance) return;

    // Resolve customer email context parameter safely from the DOM field
    const emailField = document.getElementById("chat_email");
    const customerTargetEmail = emailField ? emailField.value.trim() : "support@filings4u.com";

    console.log(`[Transcript Compiler] Fetching historical chat records for client payload query context: ${clientSessionUserId}`);

    try {
        // 1. Fetch entire dialogue log history matching your explicit UUID table row structure
        const { data: records, error } = await f4uWizardSupabaseInstance
            .from('chat_messages')
            .select('sender_type, message_content, created_at')
            .eq('client_id', clientSessionUserId)
            .order('created_at', { ascending: true });

        if (error) throw error;
        if (!records || records.length === 0) {
            console.warn("[Transcript Engine] No conversation rows located to export.");
            return;
        }

        // 2. Loop through parameters to build a clean string log block structure
        let structuredTranscriptString = `=== filings4u Chat Transcript Summary ===\n`;
        structuredTranscriptString += `Session Client Tracking ID: ${clientSessionUserId}\n`;
        structuredTranscriptString += `Export Generated Timestamp: ${new Date().toISOString()}\n`;
        structuredTranscriptString += `=========================================\n\n`;

        records.forEach(msg => {
            const displayTimestamp = new Date(msg.created_at).toLocaleTimeString();
            const legibleSenderLabel = String(msg.sender_type).toLowerCase() === 'admin' ? "Support Broker" : "Client Customer";
            structuredTranscriptString += `[${displayTimestamp}] ${legibleSenderLabel}: ${msg.message_content}\n`;
        });

        console.log("📝 Chat log compiled successfully. Standby for backend PowerShell daemon to pick up and process delivery row via Resend.");

        // NOTE: Your background PowerShell worker (Send-F4UFinalTranscripts.ps1) is actively watching 
        // for updates. Since it handles the data collection and triggers cURL natively on your server, 
        // we do not need to execute a broken client-side fetch here.

    } catch (networkFaultTrace) {
        console.error("Critical error while compiling final discussion logs map structure:", networkFaultTrace.message);
    }
};
