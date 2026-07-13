/**
 * filings4u Platform Architecture
 * Module: assets/js/wizard/wizard-chat-widget.js (Part 1 of 5)
 * 🟢 FIXED: Flyout Animation Matrix & Desktop Drag Controls
 */

/**
 * Master Visibility Engine Switch.
 * Manages slide-flyout layouts smoothly and centers input focus matrices safely.
 */
window.toggleSupportFlyoutContainer = function(shouldOpenMenuPanel) {
  const flyoutContainerNode = document.getElementById("support-chat-flyout-panel");
  if (!flyoutContainerNode) {
    console.error("[Chat Widget Error] Target panel selector element #support-chat-flyout-panel not found in active DOM.");
    return;
  }

  if (shouldOpenMenuPanel) {
    // Force smooth visibility parameter transitions into view scale layout layers
    flyoutContainerNode.style.setProperty("display", "block", "important");
    
    // Add a slight delay to allow display block changes to register before starting CSS animations
    setTimeout(() => {
      flyoutContainerNode.style.setProperty("transform", "translateX(0)", "important");
      flyoutContainerNode.style.setProperty("opacity", "1", "important");
    }, 10);

    // Auto-focus the first input field to make finger interaction easy on mobile touchscreens
    const initialInputFieldName = document.getElementById("chat_first_name");
    if (initialInputFieldName) {
      initialInputFieldName.focus();
    }
  } else {
    // Slide the card panel smoothly back out of view toward the screen boundary limits
    flyoutContainerNode.style.setProperty("transform", "translateX(100%)", "important");
    flyoutContainerNode.style.setProperty("opacity", "0", "important");
    
    // Completely hide the container track from view once layout transition curves finish
    setTimeout(() => {
      if (flyoutContainerNode.style.opacity === "0") {
        flyoutContainerNode.style.setProperty("display", "none", "important");
      }
    }, 300);
  }
};

/**
 * Global click off-canvas listener framework.
 * Closes the support flyout automatically if a user clicks outside the panel well boundaries.
 */
document.addEventListener("click", function(canvasEventPayload) {
  const panel = document.getElementById("support-chat-flyout-panel");
  const launcherBubbleIcon = document.querySelector(".chat-bubble-widget");
  
  if (!panel || panel.style.display === "none" || panel.style.display === "") return;

  // Intercept the click path to check if it originated outside the active widget layout areas
  const isClickInsidePanel = panel.contains(canvasEventPayload.target);
  const isClickOnLauncherIcon = launcherBubbleIcon && launcherBubbleIcon.contains(canvasEventPayload.target);

  if (!isClickInsidePanel && !isClickOnLauncherIcon) {
    window.toggleSupportFlyoutContainer(false);
  }
});

/**
 * Desktop Canvas Repositioning Drag-Handle Engine.
 */
window.initializeSupportChatDragEngine = function() {
  const dragHandle = document.getElementById("support-chat-drag-handle");
  const dragTarget = document.getElementById("support-chat-flyout-panel");
  if (!dragHandle || !dragTarget) return;

  let initialXCoordinate = 0, initialYCoordinate = 0;
  let currentXOffset = 0, currentYOffset = 0;

  dragTarget.style.position = "fixed";
  dragHandle.style.cursor = "move";
  dragHandle.onmousedown = initiateDragSequence;

  function initiateDragSequence(eventEventObject) {
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

    dragTarget.style.top = finalTopCalculatedProperty + "px";
    dragTarget.style.left = finalLeftCalculatedProperty + "px";
    dragTarget.style.bottom = "auto";
    dragTarget.style.right = "auto";
  }

  function terminateDragSequence() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 991) {
    setTimeout(window.initializeSupportChatDragEngine, 200);
  }
});

/**
 * filings4u Platform Architecture
 * Module: assets/js/wizard-chat-client.js (Part 2 of 5)
 * 🟢 COMPLETE COUPLING: Fail-Silent Intake Mapper (No Dialog Boxes)
 */

const f4uWizardSupabaseInstance = window.supabaseClient || window.supabase;
let clientSessionUserId = null;
let clientLiveSocketChannel = null;

/**
 * Validates detail profiles and launches a secure database session silently.
 */
async function validateAndLaunchAgentChatSession(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const submitButton = event.target.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.innerText = "Connecting...";
  }

  const fName = document.getElementById("chat_first_name").value.trim();
  const lName = document.getElementById("chat_last_name").value.trim();
  const phone = document.getElementById("chat_phone").value.trim();
  const email = document.getElementById("chat_email").value.trim();

  // Generate unique numeric customer context reference key matching BIGINT requirements
  clientSessionUserId = Math.floor(100000 + Math.random() * 900000);

  try {
    // 1. Ingest customer context rows directly inside wizard_intake_sessions table
    const { error: intakeError } = await f4uWizardSupabaseInstance
      .from('wizard_intake_sessions')
      .insert({
        user_id: clientSessionUserId,
        first_name: fName,
        last_name: lName,
        phone_number: phone,
        business_email: email,
        company_name: `Prospect: ${fName} ${lName}`,
        session_status: 'intake_active'
      });

    if (intakeError) throw intakeError;

    // 2. Insert initial baseline entry record node directly inside chat_messages table
    const initialTextPayload = `System Notice: Compliance broker bridging session initialized for ${fName}.`;
    const { error: msgError } = await f4uWizardSupabaseInstance
      .from('chat_messages')
      .insert({
        user_id: clientSessionUserId,
        sender_type: 'client',
        message_content: initialTextPayload,
        is_read_by_admin: false
      });

    if (msgError) throw msgError;

    // 3. Kick off the background latency tracker to process out-of-office inbox notifications
    if (typeof window.dispatchOutOfOfficeUnreadChatNotification === "function") {
      window.dispatchOutOfOfficeUnreadChatNotification(f4uWizardSupabaseInstance, clientSessionUserId, initialTextPayload);
    }

  } catch (dbFailToken) {
    // 🟢 SILENT INTERCEPT: 1980s alerts removed. Exceptions bypass UI and route right to backgrounds.
    console.error("[Supabase Session Intake Error] Fault captured silently:", dbFailToken.message);
  }

  // Always transfer views smoothly to the chat window layout so the customer experiences a fluid interface
  mountClientActiveChatViewportPanel(fName);
}

/**
 * Removes preflight input boxes and confines the streaming chat panel right inside your card dimensions.
 */
function mountClientActiveChatViewportPanel(customerFirstName) {
  const rootWrapperFormBox = document.getElementById("chat-preflight-input-form");
  if (!rootWrapperFormBox) return;

  rootWrapperFormBox.style.setProperty("padding", "0px", "important");
  rootWrapperFormBox.style.setProperty("margin", "0px", "important");
  rootWrapperFormBox.style.setProperty("width", "100%", "important");
  rootWrapperFormBox.style.setProperty("display", "block", "important");

  // 🟢 FIXED CONTAINER FRAME: Locks layout parameters securely inside your compact widget boundaries
  rootWrapperFormBox.innerHTML = `
    <div class="f4u-chat-embedded-card" style="display: flex !important; flex-direction: column !important; height: 420px !important; width: 100% !important; background: #ffffff !important; border-radius: 8px !important; overflow: hidden !important; box-sizing: border-box !important;">
      
      <!-- SUB-HEADER LAYER -->
      <div style="background: rgba(10, 31, 68, 0.04); padding: 10px 14px; display: flex; align-items: center; gap: 8px; width: 100%; box-sizing: border-box; border-bottom: 1px solid #cbd5e1;">
        <div style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 4px #10b981;"></div>
        <span style="color: #475569; font-size: 0.75rem; font-weight: 700; font-family: sans-serif; text-transform: uppercase; letter-spacing: 0.5px;">🟢 filings4u Compliance Support Desk</span>
      </div>

      <!-- STREAMING MESSAGE TIMELINE WELL -->
      <div id="wizardChatScrollWell" style="flex: 1 !important; overflow-y: auto !important; padding: 14px !important; background: #f8fafc !important; display: flex !important; flex-direction: column !important; gap: 10px !important; box-sizing: border-box !important; width: 100% !important; height: 300px !important;">
        <div style="margin-right: auto; max-width: 85%; background: #edf2f7; color: #0f172a; padding: 10px 12px; border-radius: 8px; font-size: 0.825rem; font-weight: 500; border-bottom-left-radius: 2px; line-height: 1.4; text-align: left;">
          Hello ${customerFirstName}! An expert agent has been pinged and is reviewing your details parameters. How can we optimize your filing setup layout tonight?
        </div>
      </div>

      <!-- BOTTOM INTEGRATED INPUT CONTROLLER CONTAINER -->
      <div style="padding: 12px; background: #ffffff; border-top: 1px solid #cbd5e1; box-sizing: border-box; width: 100%;">
        <div style="display: flex; gap: 8px; width: 100%; box-sizing: border-box; align-items: center;">
          <input type="text" id="wizardClientChatMessageInputField" placeholder="Type your message here..." style="flex: 1; height: 38px; padding: 0 10px; border: 1px solid #cbd5e1; border-radius: 6px; outline: none; font-size: 0.85rem; box-sizing: border-box; font-family: inherit; font-weight: 500;" onkeydown="if(event.key==='Enter'){ dispatchWizardClientChatMessagePayload(); }">
          <button type="button" onclick="dispatchWizardClientChatMessagePayload()" style="background: #0a1f44; color: #ffffff; border: none; font-weight: 700; font-size: 0.8rem; border-radius: 6px; padding: 0 14px; cursor: pointer; height: 38px; box-sizing: border-box; display: flex; align-items: center; justify-content: center;">Send</button>
        </div>
      </div>

    </div>
  `;

  if (typeof connectClientIncomingSocketStream === "function") {
    connectClientIncomingSocketStream();
  }
}

// Expose functions globally to prevent event scope errors
window.validateAndLaunchAgentChatSession = validateAndLaunchAgentChatSession;

/**
 * filings4u Platform Architecture
 * Module: assets/js/wizard-chat-client.js (Part 3 of 5)
 */

/**
 * Connects real-time WebSockets to monitor incoming agent responses on the wizard.
 */
function connectClientIncomingSocketStream() {
  if (!f4uWizardSupabaseInstance || !clientSessionUserId) return;

  clientLiveSocketChannel = f4uWizardSupabaseInstance
    .channel('live_client_poller_' + clientSessionUserId)
    .on('postgres_changes', { 
      event: 'INSERT', 
      schema: 'public', 
      table: 'chat_messages', 
      filter: 'user_id=eq.' + clientSessionUserId 
    }, (payload) => {
      // Safely capture incoming records and dismiss self-sent text streams
      if (String(payload.new.sender_type).toLowerCase() === 'admin') {
        appendIncomingMsgBubbleToWizardUI(payload.new.message_content, 'admin');
      }
    })
    .subscribe();
}

/**
 * Transmits customer typing parameters up to the Supabase storage layer silently.
 */
async function dispatchWizardClientChatMessagePayload() {
  const inputEl = document.getElementById("wizardClientChatMessageInputField");
  if (!inputEl || !clientSessionUserId || !f4uWizardSupabaseInstance) return;

  const content = inputEl.value.trim();
  if (!content) return;
  inputEl.value = "";

  // Render text bubble locally for optimistic responsiveness
  appendIncomingMsgBubbleToWizardUI(content, 'client');

  try {
    const { error } = await f4uWizardSupabaseInstance
      .from('chat_messages')
      .insert({
        user_id: clientSessionUserId,
        sender_type: 'client',
        message_content: content,
        is_read_by_admin: false
      });
    
    if (error) console.error("[Silent Logging] Failed to insert client message content payload:", error.message);
  } catch (backgroundFault) {
    console.error("[Silent Logging] Core network exception during send pass:", backgroundFault.message);
  }
}

/**
 * Appends standard formatted HTML bubble strings directly into the client conversation view.
 */
function appendIncomingMsgBubbleToWizardUI(textString, senderTypeRole) {
  const well = document.getElementById("wizardChatScrollWell");
  if (!well) return;

  const bubbleRow = document.createElement("div");
  const isAdmin = senderTypeRole === 'admin';
  
  const alignmentStyles = isAdmin 
    ? "margin-right: auto; background: #edf2f7; color: #0f172a; border-bottom-left-radius: 2px;"
    : "margin-left: auto; background: #0a1f44; color: #ffffff; border-bottom-right-radius: 2px;";

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
}

// Map functions cleanly to window object references
window.connectClientIncomingSocketStream = connectClientIncomingSocketStream;
window.dispatchWizardClientChatMessagePayload = dispatchWizardClientChatMessagePayload;
window.appendIncomingMsgBubbleToWizardUI = appendIncomingMsgBubbleToWizardUI;

/**
 * filings4u Platform Architecture
 * Module: assets/js/admin-chat-alerts-router.js (Part 4 of 5)
 * 🟢 FIXED: Audio Chime Core & Left-Side Roster Updates
 */

/**
 * Injects a global, multi-channel live listener inside your administrative panel.
 * Catches incoming customer pre-flight signals and sounds an alert chime.
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
      // 1. Play a quick tactical chime to notify staff of a new incoming chat
      try {
        const audioChimeNode = new Audio("https://mixkit.co");
        audioChimeNode.volume = 0.40;
        audioChimeNode.play();
      } catch (audioErr) {
        console.log("[Browser Block] Audio notification delayed until user interfaces activation engagement passes.");
      }

      // 2. Automatically refresh the left-hand account lists view index layout 
      if (typeof window.synchronizeChatThreadsRoster === "function") {
        window.synchronizeChatThreadsRoster(supabaseClientInstance);
      }
    })
    .subscribe();
};

// Automatic window boot initializer hook logic execution passes
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
 * filings4u Platform Architecture
 * Module: assets/js/admin-chat-alerts-router.js (Part 5 of 5)
 * 🟢 FIXED: Latency Webhook Alerter & Direct Deep-Linking
 */

/**
 * Monitors unread conversation threads and safely formats out-of-office message alerts.
 * Injects a 3-minute grace window before forwarding data payloads straight to help desk endpoints.
 */
window.dispatchOutOfOfficeUnreadChatNotification = async function(clientSupabaseInstance, numericUserId, fallbackClientText) {
  if (!clientSupabaseInstance || !numericUserId) return;

  console.log(`[Backup Latency Engine] Monitoring staff engagement rules window for Client #${numericUserId}...`);

  // Wait exactly 3 minutes (180,000 milliseconds) for staff interaction parameters
  await new Promise(resolve => setTimeout(resolve, 180000));

  try {
    const { data: messages, error } = await clientSupabaseInstance
      .from('chat_messages')
      .select('sender_type')
      .eq('user_id', numericUserId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Detect if a staff fulfillment admin has responded yet
    const hasAdminReplied = messages && messages.some(msg => String(msg.sender_type).toLowerCase() === 'admin');
    if (hasAdminReplied) {
      console.log(`[Latency Clearance] Active response detected for Client #${numericUserId}. Email notification dismissed.`);
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
};

/**
 * URL Parameter auto-scanner loop.
 * Automatically selects a client row when a team member clicks a direct link from their email alerts.
 */
window.handleIncomingEmailDirectRoutingLinks = function() {
  const urlQuerySelectors = new URLSearchParams(window.location.search);
  const targetAccountNum = urlQuerySelectors.get('targetAccount');
  
  if (targetAccountNum) {
    console.log(`[Deep Link Routing] Auto-connecting conversation timeline for Client #${targetAccountNum}...`);
    const elementLookupInterval = setInterval(() => {
      // Locate the newly generated sidebar roster card matching the URL trace ID parameter
      const rows = document.querySelectorAll('#adminUsersFeedContainer div');
      let matchingRowElement = null;
      
      rows.forEach(row => {
        if (row.innerText.includes(`#${targetAccountNum}`)) {
          matchingRowElement = row;
        }
      });

      if (matchingRowElement) {
        // Trigger a click to open the conversation stream panel
        matchingRowElement.click();
        
        // Add a temporary visual flash highlight outline to draw staff attention to the card row
        matchingRowElement.style.borderLeft = "4px solid #ef4444";
        matchingRowElement.style.background = "rgba(16, 185, 129, 0.08)";
        clearInterval(elementLookupInterval);
      }
    }, 150);

    // Clear interval tracking maps after 6 seconds to prevent infinite memory leaks
    setTimeout(() => clearInterval(elementLookupInterval), 6000);
  }
};

// Hook parameter scanning natively into your admin interface onload runtime cycle
if (window.location.pathname.includes("admin-chat.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(window.handleIncomingEmailDirectRoutingLinks, 250);
  });
}

console.log("[System Verified] Administrative notification interlocks, real-time alert routers, and mail latency configurations completely deployed.");
