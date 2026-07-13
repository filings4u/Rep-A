/**
 * filings4u Platform Architecture
 * Module: wizard-chat-widget.js (Repaired Visibility Core)
 * Part 2 of 2: Streamlined Slide Engine Shard
 */

window.toggleSupportFlyoutContainer = function(shouldOpen) {
  const panel = document.getElementById("support-chat-flyout-panel");
  if (!panel) return;

  if (shouldOpen) {
    // Reveal container well tracks from hidden memory maps instantly
    panel.style.setProperty("display", "block", "important");
    
    // Tiny browser rendering cycle buffer delay to execute translation animations smoothly
    setTimeout(() => {
      panel.style.setProperty("transform", "translateX(0px)", "important");
      panel.style.setProperty("opacity", "1", "important");
    }, 20);

    const targetFocusInput = document.getElementById("chat_first_name");
    if (targetFocusInput) {
      targetFocusInput.focus();
    }
  } else {
    // Slide layout container out to the right screen boundaries edge channel
    panel.style.setProperty("transform", "translateX(100%)", "important");
    panel.style.setProperty("opacity", "0", "important");
    
    // Completely terminate visibility footprint once translation curves finish running
    setTimeout(() => {
      if (panel.style.opacity === "0") {
        panel.style.setProperty("display", "none", "important");
      }
    }, 310);
  }
};

// Global click off-canvas listener framework adjustment configuration pass
document.addEventListener("click", function(e) {
  const panel = document.getElementById("support-chat-flyout-panel");
  const widgetBubble = document.querySelector(".chat-bubble-widget");
  
  if (!panel || panel.style.display === "none") return;

  if (!panel.contains(e.target) && widgetBubble && !widgetBubble.contains(e.target)) {
    window.toggleSupportFlyoutContainer(false);
  }
});


/**
 * filings4u Platform Architecture
 * Module: wizard-chat-client.js (Part 1 of 3)
 * 
 * Instructions: Place this directly within a script tag beneath your wizard chat layout markup.
 */

// 1. Setup workspace global indicators variables references safely
const f4uWizardSupabaseInstance = window.supabaseClient || window.supabase;
let clientSessionUserId = null;
let clientLiveSocketChannel = null;

/**
 * Intercepts form submissions to register placeholder tracking keys inside orders table logs.
 */
async function validateAndLaunchAgentChatSession(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const submitButton = event.target.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.innerText = "Initializing Secure Link...";
  }

  const fName = document.getElementById("chat_first_name").value.trim();
  const lName = document.getElementById("chat_last_name").value.trim();
  const phone = document.getElementById("chat_phone").value.trim();
  const email = document.getElementById("chat_email").value.trim();

  try {
    // Generate a secure pseudo random account identifier key sequence range (100000 - 999999)
    const simulatedAccountNum = Math.floor(100000 + Math.random() * 900000);
    clientSessionUserId = simulatedAccountNum;

    // A: Ingest a temporary fallback log inside orders ledger so staff see them on the console roster
    const { error: orderError } = await f4uWizardSupabaseInstance
      .from('orders')
      .insert({
        user_id: clientSessionUserId,
        company_name: `[LIVE CHAT] ${fName} ${lName}`,
        status: 'compliance_pending'
      });

    if (orderError) throw orderError;

    // B: Emit an initial baseline messaging block parameters payload to register timestamp references
    const welcomeTextPayload = `System Notice: Inbound queue bypass success. Profile created for ${fName} (${email}). Compliance Broker bridging initialization pipeline started.`;
    await f4uWizardSupabaseInstance
      .from('chat_messages')
      .insert({
        user_id: clientSessionUserId,
        sender_type: 'client',
        message_content: welcomeTextPayload
      });

    // C: Transition UI frames smoothly from inputs to conversations view container block panels
    mountClientActiveChatViewportPanel(fName);

  } catch (err) {
    console.error("Wizard chat socket link initiation breakdown error:", err.message);
    alert("Connection error: We could not open a dynamic communication session. Please retry.");
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.innerText = "Connect to Live Agent";
    }
  }
}

/**
 * Erases input parameters fields and mounts a running text scroll timeline view container box.
 */
function mountClientActiveChatViewportPanel(customerFirstName) {
  const rootWrapperFormBox = document.getElementById("chat-preflight-input-form");
  if (!rootWrapperFormBox) return;

  rootWrapperFormBox.style.padding = "0px";
  rootWrapperFormBox.innerHTML = `
    <div style="display:flex; flex-direction:column; height:450px; background:#ffffff; border-radius:12px; border:1px solid #cbd5e1; overflow:hidden; box-sizing:border-box; width:100%;">
      
      <!-- TOP INTERACTIVE METADATA HEADER BAR -->
      <div style="background:#0a1f44; padding:14px; display:flex; align-items:center; gap:10px; width:100%; box-sizing:border-box;">
        <div style="width:8px; height:8px; background:#10b981; border-radius:50%; box-shadow:0 0 6px #10b981;"></div>
        <span style="color:#ffffff; font-size:0.85rem; font-weight:700; font-family:sans-serif;">filings4u Compliance Support Desk</span>
      </div>

      <!-- STREAMING TIMELINE MESSAGE ROW VIEWBOX WELL -->
      <div id="wizardChatScrollWell" style="flex:1; overflow-y:auto; padding:20px; background:#f8fafc; display:flex; flex-direction:column; gap:12px; box-sizing:border-box; width:100%;">
        <div style="margin-right:auto; max-width:85%; background:#edf2f7; color:#0f172a; padding:10px 12px; border-radius:8px; font-size:0.85rem; font-weight:500; border-bottom-left-radius:2px;">
          Hello ${customerFirstName}! An expert agent has been pinged and is reviewing your details parameters. How can we optimize your filing setup layout tonight?
        </div>
      </div>

      <!-- FOOTER TEXT ENTRY CONTROLLER INTERFACES -->
      <div style="padding:14px; background:#ffffff; border-top:1px solid #cbd5e1; box-sizing:border-box; width:100%;">
        <div style="display:flex; gap:10px; width:100%; box-sizing:border-box;">
          <input type="text" id="wizardClientChatMessageInputField" placeholder="Type your secure message payload here..." style="flex:1; height:40px; padding:0 12px; border:1px solid #cbd5e1; border-radius:6px; outline:none; font-size:0.88rem; box-sizing:border-box;" onkeydown="if(event.key==='Enter'){ dispatchWizardClientChatMessagePayload(); }">
          <button type="button" onclick="dispatchWizardClientChatMessagePayload()" style="background:#0a1f44; color:#ffffff; border:none; font-weight:700; font-size:0.825rem; border-radius:6px; padding:0 16px; cursor:pointer; height:40px; box-sizing:border-box;">Send</button>
        </div>
      </div>

    </div>
  `;

  // Start real-time sub-tier WebSockets links to pull agent responses immediately
  connectClientIncomingSocketStream();
}


/**
 * filings4u Platform Architecture
 * Module: wizard-chat-client.js (Part 2 of 3)
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
      // Catch incoming messages and filter out self-sent echoes
      if (String(payload.new.sender_type).toLowerCase() === 'admin') {
        appendIncomingMsgBubbleToWizardUI(payload.new.message_content, 'admin');
      }
    })
    .subscribe();
}

/**
 * Transmits customer typing parameters up to the Supabase storage layer.
 */
async function dispatchWizardClientChatMessagePayload() {
  const inputEl = document.getElementById("wizardClientChatMessageInputField");
  if (!inputEl || !clientSessionUserId || !f4uWizardSupabaseInstance) return;

  const content = inputEl.value.trim();
  if (!content) return;
  inputEl.value = "";

  // Append client text instantly locally for optimistic responsiveness
  appendIncomingMsgBubbleToWizardUI(content, 'client');

  try {
    const { error } = await f4uWizardSupabaseInstance
      .from('chat_messages')
      .insert({
        user_id: clientSessionUserId,
        sender_type: 'client',
        message_content: content
      });
    if (error) throw error;
  } catch (err) {
    console.error("Message broadcast execution failure:", err.message);
  }
}

/**
 * Appends localized bubble strings directly into the client conversation view.
 */
function appendIncomingMsgBubbleToWizardUI(textString, senderTypeRole) {
  const well = document.getElementById("wizardChatScrollWell");
  if (!well) return;

  const bubbleRow = document.createElement("div");
  const isAdmin = senderTypeRole === 'admin';
  
  const alignmentStyles = isAdmin 
    ? "margin-right: auto; background: #edf2f7; color: #0f172a; border-bottom-left-radius: 2px;"
    : "margin-left: auto; background: #0a1f44; color: #ffffff; border-bottom-right-radius: 2px;";

  bubbleRow.style.cssText = `max-width: 85%; padding: 10px 12px; border-radius: 8px; font-size: 0.85rem; font-weight: 500; word-break: break-word; ${alignmentStyles}`;
  bubbleRow.innerText = textString;
  
  well.appendChild(bubbleRow);
  well.scrollTop = well.scrollHeight;
}

// ============================================================================ //
// 🛠️ ADMIN SIDE REAL-TIME ALERTS CORES: PLACE IN admin-chat.html HEAD SCRIPTS   //
// ============================================================================ //

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
        audioChimeNode.volume = 0.45;
        audioChimeNode.play();
      } catch (audioErr) {
        console.log("Audio alert blocked by browser media security permissions policy guidelines.");
      }

      // 2. Automatically refresh the left-hand account lists view index layout 
      if (typeof window.synchronizeChatThreadsRoster === "function") {
        window.synchronizeChatThreadsRoster(supabaseClientInstance);
      }
    })
    .subscribe();
};

// Auto-inject global notification hook listener inside your active admin console window properties
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
 * Module: backend-edge-alerter.js (Part 3 of 3)
 * 
 * Target Environment: Supabase Database Functions / Edge Webhook Controller
 */

// ============================================================================ //
// 📡 DATABASE TRIGGERS LAYER: OUT-OF-OFFICE EMAIL ALERTER MODULES            //
// ============================================================================ //

/**
 * Monitors unread conversation threads and safely formats out-of-office message alerts.
 * Injects a 3-minute grace window before forwarding data payloads straight to help desking endpoints.
 */
window.dispatchOutOfOfficeUnreadChatNotification = async function(clientSupabaseInstance, numericUserId, fallbackClientText) {
  if (!clientSupabaseInstance || !numericUserId) return;

  console.log(`[Backup Pipeline] Monitoring response latency metrics for Client #${numericUserId}...`);

  // Wait exactly 3 minutes (180,000 milliseconds) for staff engagement tracking
  await new Promise(resolve => setTimeout(resolve, 180000));

  try {
    // Check if a staff member has replied or marked the channel as active
    const { data: messages, error } = await clientSupabaseInstance
      .from('chat_messages')
      .select('sender_type')
      .eq('user_id', numericUserId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Check if the most recent message was sent by an admin
    const hasAdminReplied = messages && messages.some(msg => String(msg.sender_type).toLowerCase() === 'admin');
    
    if (hasAdminReplied) {
      console.log(`[Latency Clearance] Active response detected for Client #${numericUserId}. Email dispatch canceled.`);
      return;
    }

    console.log(`[Latency Breach] No active staff response found for Client #${numericUserId}. Routing out-of-office alerts...`);

    // Complete the payload handover pass to your central customer communications routing endpoint
    const centralNotificationWebhookUrl = "https://filings4u.com";
    
    const operationalPayloadData = {
      recipientInbox: "support@filings4u.com",
      alertType: "UNATTENDED_WIZARD_CHAT_BYPASS",
      timestamp: new Date().toISOString(),
      accountTraceId: numericUserId,
      previewContent: fallbackClientText,
      routingDirectLink: `https://filings4u.com{numericUserId}`
    };

    // Forward telemetry arrays down to standard mail processing relays via network fetch operations
    const webhookResponse = await fetch(centralNotificationWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Platform-Secret-Token': 'f4u_live_vault_secure_interlock_token_9981'
      },
      body: JSON.stringify(operationalPayloadData)
    });

    if (!webhookResponse.ok) {
      throw new Error(`Mailing webhook relay returned code: ${webhookResponse.status}`);
    }

    console.log(`[Notification Success] Unattended thread telemetry successfully routed to support inboxes.`);

  } catch (err) {
    console.error("Critical error inside out-of-office automated communications dispatch loop:", err.message);
  }
};

// ============================================================================ //
// 🛠️ ADMIN SIDE REAL-TIME INTEGRATION: PLACE IN admin-chat.html REVIEWS      //
// ============================================================================ //

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

// Attach the auto-selection router loop to your admin interface layout
if (window.location.pathname.includes("admin-chat.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(window.handleIncomingEmailDirectRoutingLinks, 250);
  });
}


/**
 * filings4u Platform Architecture
 * Module: wizard-chat-widget.js (Part 1 of 2)
 * 
 * Instructions: Place this codebase straight into your assets/js/wizard/wizard-chat-widget.js directory.
 */

/**
 * 🟢 FIXED: Master Visibility Engine Switch.
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
 * filings4u Platform Architecture
 * Module: wizard-chat-widget.js (Part 2 of 2)
 */

/**
 * 🟢 FIXED: Desktop Repositioning Engine.
 * Adds drag handling to the header row so desktop users can move the chat box out of the way of form fields.
 */
window.initializeSupportChatDragEngine = function() {
  const dragHandle = document.getElementById("support-chat-drag-handle");
  const dragTarget = document.getElementById("support-chat-flyout-panel");
  if (!dragHandle || !dragTarget) return;

  let initialXCoordinate = 0, initialYCoordinate = 0;
  let currentXOffset = 0, currentYOffset = 0;

  // Set initial position rules cleanly to prevent layout jumps on first click
  dragTarget.style.position = "fixed";

  dragHandle.style.cursor = "move";
  dragHandle.onmousedown = initiateDragSequence;

  function initiateDragSequence(eventEventObject) {
    eventEventObject = eventEventObject || window.event;
    // Prevent default selection highlighted transformations
    eventEventObject.preventDefault();
    
    // Capture starting cursor tracking matrix references
    initialXCoordinate = eventEventObject.clientX;
    initialYCoordinate = eventEventObject.clientY;
    
    document.onmouseup = terminateDragSequence;
    document.onmousemove = executeDragMovementUpdate;
  }

  function executeDragMovementUpdate(eventEventObject) {
    eventEventObject = eventEventObject || window.event;
    eventEventObject.preventDefault();
    
    // Calculate distance traveled since last tracking snapshot
    currentXOffset = initialXCoordinate - eventEventObject.clientX;
    currentYOffset = initialYCoordinate - eventEventObject.clientY;
    initialXCoordinate = eventEventObject.clientX;
    initialYCoordinate = eventEventObject.clientY;
    
    // Apply new offset markers back to position properties
    const finalTopCalculatedProperty = dragTarget.offsetTop - currentYOffset;
    const finalLeftCalculatedProperty = dragTarget.offsetLeft - currentXOffset;

    dragTarget.style.top = finalTopCalculatedProperty + "px";
    dragTarget.style.left = finalLeftCalculatedProperty + "px";
    // Clear out bottom/right overrides to lock custom coordinates securely
    dragTarget.style.bottom = "auto";
    dragTarget.style.right = "auto";
  }

  function terminateDragSequence() {
    // Release pointer capture listeners from document canvas maps safely
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

// Initialize interactive layers once the DOM finishes parsing asset elements
document.addEventListener("DOMContentLoaded", () => {
  // Only trigger desktop dragging mechanics if running on an explicit cursor display viewport
  if (window.innerWidth > 991) {
    setTimeout(window.initializeSupportChatDragEngine, 200);
  }
  
  // Set default panel view parameters layout state to clean closed values on fresh load
  const panel = document.getElementById("support-chat-flyout-panel");
  if (panel) {
    panel.style.display = "none";
    panel.style.transition = "transform 0.3s ease, opacity 0.3s ease";
  }
});
