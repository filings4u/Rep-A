// ============================================================================ //
// 🔌 FILE: toggle.js                                                          //
// 🧭 MODULE: INTERACTIVE RESPONSIVE MENUS OVERLAY STATE CONTROLLER ENGINE     //
// ============================================================================ //
(function() {
    "use strict";

    /**
     * Programmatically opens and collapses the app navigation tracker drawer.
     * Toggles layout classes on the structural body element to avoid mutation loop conflicts.
     */
    function toggleMobileSidebarMenuOverlay(explicitEventRef) {
        // Intercept click propagation traces to defend against immediate close triggers
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
            // Close the overlay drawer canvas window
            bodyElement.classList.remove("mobile-sidebar-overlay-open");
            bodyElement.classList.remove("mobile-scroll-lock");
            if (triggerIcon) triggerIcon.textContent = "☰";
            console.log("[Navigation Overlay] Mobile layout menu collapsed.");
        } else {
            // Open the overlay drawer canvas window
            bodyElement.classList.add("mobile-sidebar-overlay-open");
            bodyElement.classList.add("mobile-scroll-lock");
            if (triggerIcon) triggerIcon.textContent = "✕";
            console.log("[Navigation Overlay] Mobile layout menu expanded active.");
        }
    }

    // 🔥 CRITICAL FIX: Explicitly expose the function to the global window scope 
    // This allows inline HTML onclick="..." attributes to see and execute the function!
    window.toggleMobileSidebarMenuOverlay = toggleMobileSidebarMenuOverlay;

    /**
     * Scans the active progress bar tree list items and hooks up click listener events.
     * When a step item is tapped on smartphone screens, the modal menu closes automatically.
     */
    function attachAutoCloseTriggersToMenuNodes() {
        const applicationMapElements = document.querySelectorAll(
            '.portal-sidebar, .wizard-navigation-sidebar, .multi-sidebar-progress'
        );

        applicationMapElements.forEach(menuContainer => {
            if (!menuContainer) return;

            const interactiveClickTargets = menuContainer.querySelectorAll('a, li, button, [class*="step-node"]');
            
            interactiveClickTargets.forEach(targetNode => {
                if (!targetNode || targetNode.id === "mobileNavToggleBtn" || targetNode.dataset.overlayListenerHooked) return;

                targetNode.addEventListener("click", () => {
                    const bodyElement = document.body;
                    if (bodyElement.classList.contains("mobile-sidebar-overlay-open")) {
                        bodyElement.classList.remove("mobile-sidebar-overlay-open");
                        bodyElement.classList.remove("mobile-scroll-lock");
                        
                        const triggerIcon = document.getElementById("mobileNavTriggerIcon");
                        if (triggerIcon) triggerIcon.textContent = "☰";
                        console.log("[Navigation Overlay] Self-closing panel overlay menu pass completed.");
                    }
                });
                
                targetNode.dataset.overlayListenerHooked = "true";
            });
        });
    }

    /**
     * Intercept click loops outside the drawer window boundary blocks.
     */
    function setupBlankSpaceDismissalInterceptor() {
        document.addEventListener("click", function(eventStream) {
            const bodyNode = document.body;
            if (!bodyNode.classList.contains("mobile-sidebar-overlay-open")) return;

            const pathCheck = eventStream.target.closest('.portal-sidebar') || 
                              eventStream.target.closest('.wizard-navigation-sidebar') || 
                              eventStream.target.closest('.multi-sidebar-progress') || 
                              eventStream.target.closest('#mobileNavToggleBtn');

            if (!pathCheck) {
                console.log("[Navigation Overlay] Click outside sidebar detected. Dismissing drawer interface safely.");
                bodyNode.classList.remove("mobile-sidebar-overlay-open");
                bodyNode.classList.remove("mobile-scroll-lock");
                
                const triggerIcon = document.getElementById("mobileNavTriggerIcon");
                if (triggerIcon) triggerIcon.textContent = "☰";
            }
        });
    }

    // Initialize layout interlock configurations safely after compilation settles
    function initializeOverlayMenuAssets() {
        attachAutoCloseTriggersToMenuNodes();
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
