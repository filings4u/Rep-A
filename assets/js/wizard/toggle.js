// ============================================================================ // 
// 🔌 FILE: toggle.js                                                           // 
//                                                                              // 
// 🧭 MODULE: INTERACTIVE RESPONSIVE MENUS OVERLAY STATE CONTROLLER ENGINE      // 
// ============================================================================ // 
(function() { 
  "use strict"; 

  // Matrix array data directly integrated into the scope 
  const timelineRegistryMatrix = [ 
    { idx: 0, title: "State Selection", desc: "State of Formation or Registration" }, 
    { idx: 1, title: "1. Selected Package", desc: "Items and inclusions" }, 
    { idx: 2, title: "2. Corporate Profile Intake", desc: "Corporate entity details" }, 
    { idx: 3, title: "3. Add-Ons", desc: "Compliance assets & shields" }, 
    { idx: 4, title: "4. Power of Attorney", desc: "Digital signature execution" }, 
    { idx: 5, title: "5. Purchase Summary", desc: "Order item breakdowns" }, 
    { idx: 6, title: "6. Secure Payment", desc: "Encrypted checkout gateway" }, 
    { idx: 7, title: "7. Success Portal", desc: "Account creation systems" } 
  ]; 

  /** 
   * Programmatically opens and collapses the app navigation tracker drawer. 
   */ 
  function toggleMobileSidebarMenuOverlay(explicitEventRef) { 
    if (explicitEventRef && typeof explicitEventRef.stopPropagation === "function") { 
      explicitEventRef.stopPropagation(); 
    } 
    if (explicitEventRef && typeof explicitEventRef.preventDefault === "function") { 
      explicitEventRef.preventDefault(); 
    } 
    const bodyElement = document.body; 
    const triggerIcon = document.getElementById("mobileNavTriggerIcon"); 
    const isOpenClassActive = bodyElement.classList.contains("mobile-sidebar-overlay-open"); 

    if (isOpenClassActive) { 
      bodyElement.classList.remove("mobile-sidebar-overlay-open"); 
      bodyElement.classList.remove("mobile-scroll-lock"); 
      if (triggerIcon) triggerIcon.textContent = "☰"; 
      console.log("[Navigation Overlay] Mobile layout menu collapsed."); 
    } else { 
      bodyElement.classList.add("mobile-sidebar-overlay-open"); 
      bodyElement.classList.add("mobile-scroll-lock"); 
      if (triggerIcon) triggerIcon.textContent = "✕"; 
      console.log("[Navigation Overlay] Mobile layout menu expanded active."); 
    } 
  } 
  window.toggleMobileSidebarMenuOverlay = toggleMobileSidebarMenuOverlay; 

  /** 
   * 🛠️ DYNAMIC LIST RENDERER 
   * Generates navigation items from the registry matrix and renders them to the sidebar list. 
   * UPDATED: Wraps the information inside a hidden tray directly below the title.
   */ 
  function generateMenuMarkupFromMatrix() { 
    const listContainer = document.querySelector('.portal-sidebar ul, .wizard-navigation-sidebar ul, .multi-sidebar-progress ul'); 
    if (!listContainer) { 
      console.warn("[Menu Engine] Navigation container list element target missing. Retrying..."); 
      setTimeout(generateMenuMarkupFromMatrix, 100); 
      return; 
    } 

    // Build markup placing step-desc in its own panel below the interactive title node
    const menuItemsHTML = timelineRegistryMatrix.map(step => ` 
      <li data-index="${step.idx}" class="menu-toggle-wrapper"> 
        <a href="#" class="step-node" style="display: block; cursor: pointer;"> 
          <span class="step-title" style="font-weight: bold; display: block;">${step.title}</span> 
        </a> 
        <div class="step-info-panel" style="display: none; padding: 10px 0;">
          <span class="step-desc" style="display: block; color: #666;">${step.desc}</span> 
        </div>
      </li> 
    `).join(''); 

    listContainer.innerHTML = menuItemsHTML; 
    console.log("[Menu Engine] Timeline registry items populated successfully."); 

    // Bind layout listeners
    attachAutoCloseTriggersToMenuNodes(); 
    attachToggleMenuInformationListeners();
  } 

  /**
   * 🔄 INFO TOGGLE INTERCEPTOR
   * Binds click events to display or hide the step description panel directly below the title.
   */
  function attachToggleMenuInformationListeners() {
    const listContainer = document.querySelector('.portal-sidebar ul, .wizard-navigation-sidebar ul, .multi-sidebar-progress ul');
    if (!listContainer) return;

    listContainer.querySelectorAll('.menu-toggle-wrapper').forEach(itemNode => {
      const clickTarget = itemNode.querySelector('.step-node');
      const infoPanel = itemNode.querySelector('.step-info-panel');

      clickTarget.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Collapse all other information panels first
        listContainer.querySelectorAll('.step-info-panel').forEach(panel => {
          if (panel !== infoPanel) panel.style.display = 'none';
        });

        // Toggle the visibility of the specific panel directly below this item
        const isCurrentlyHidden = infoPanel.style.display === 'none';
        infoPanel.style.display = isCurrentlyHidden ? 'block' : 'none';
      });
    });
  }

  /** 
   * 🔥 DYNAMIC EXTRACTION LAYER: 
   * Pulls the logo out of your sidebar and creates a static header for mobile. 
   */ 
  function extractLogoForMobileHeader() { 
    if (document.getElementById("f4u-mobile-header-bar")) return; 

    const sidebarLogo = document.querySelector('.portal-sidebar [class*="logo"], .wizard-navigation-sidebar [class*="logo"], .multi-sidebar-progress [class*="logo"], .portal-sidebar img'); 
    if (!sidebarLogo) { 
      console.warn("[Logo Extractor] Sidebar logo element not found in DOM yet. Retrying..."); 
      setTimeout(extractLogoForMobileHeader, 100); 
      return; 
    } 

    const mobileHeader = document.createElement("div"); 
    mobileHeader.id = "f4u-mobile-header-bar"; 
    mobileHeader.className = "f4u-mobile-header-bar"; 

    const logoClone = sidebarLogo.cloneNode(true); 
    mobileHeader.appendChild(logoClone); 

    document.body.insertBefore(mobileHeader, document.body.firstChild); 
    console.log("[Logo Extractor] Logo successfully extracted out of sidebar for mobile view."); 
  } 

  function attachAutoCloseTriggersToMenuNodes() { 
    const applicationMapElements = document.querySelectorAll( 
      '.portal-sidebar, .wizard-navigation-sidebar, .multi-sidebar-progress' 
    ); 
    applicationMapElements.forEach(menuContainer => { 
      if (!menuContainer) return; 
      const interactiveClickTargets = menuContainer.querySelectorAll('button, [class*="step-node"]'); 
      interactiveClickTargets.forEach(targetNode => { 
        if (!targetNode || targetNode.id === "mobileNavToggleBtn" || targetNode.dataset.overlayListenerHooked) return; 
        
        targetNode.addEventListener("click", () => { 
          const bodyElement = document.body; 
          if (bodyElement.classList.contains("mobile-sidebar-overlay-open")) { 
            bodyElement.classList.remove("mobile-sidebar-overlay-open"); 
            bodyElement.classList.remove("mobile-scroll-lock"); 
            const triggerIcon = document.getElementById("mobileNavTriggerIcon"); 
            if (triggerIcon) triggerIcon.textContent = "☰"; 
          } 
        }); 
        targetNode.dataset.overlayListenerHooked = "true"; 
      }); 
    }); 
  } 

  function setupBlankSpaceDismissalInterceptor() { 
    document.addEventListener("click", function(eventStream) { 
      const bodyNode = document.body; 
      if (!bodyNode.classList.contains("mobile-sidebar-overlay-open")) return; 

      const pathCheck = eventStream.target.closest('.portal-sidebar') || 
                        eventStream.target.closest('.wizard-navigation-sidebar') || 
                        eventStream.target.closest('.multi-sidebar-progress') || 
                        eventStream.target.closest('#mobileNavToggleBtn'); 
      if (!pathCheck) { 
        bodyNode.classList.remove("mobile-sidebar-overlay-open"); 
        bodyNode.classList.remove("mobile-scroll-lock"); 
        const triggerIcon = document.getElementById("mobileNavTriggerIcon"); 
        if (triggerIcon) triggerIcon.textContent = "☰"; 
      } 
    }); 
  } 

  function initializeOverlayMenuAssets() { 
    generateMenuMarkupFromMatrix(); 
    extractLogoForMobileHeader(); 
    setupBlankSpaceDismissalInterceptor(); 

    const baselineSwitchViewFunc = window.switchWizardActiveViewLayout; 
    if (typeof baselineSwitchViewFunc === "function" && !window.isToggleScriptHarnessed) { 
      window.switchWizardActiveViewLayout = function(stepIndexTarget) { 
        baselineSwitchViewFunc(stepIndexTarget); 
        requestAnimationFrame(attachAutoCloseTriggersToMenuNodes); 
      }; 
      window.isToggleScriptHarnessed = true; 
    } 
  } 

  if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", initializeOverlayMenuAssets); 
  } else { 
    initializeOverlayMenuAssets(); 
  } 
})();
