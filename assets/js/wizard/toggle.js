// ============================================================================ //
// 🔌 FILE: toggle.js                                                          //
// 🧭 MODULE: INTERACTIVE RESPONSIVE MENUS OVERLAY STATE CONTROLLER ENGINE     //
// ============================================================================ //
(function() {
    "use strict";

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
     * 🔥 DYNAMIC EXTRACTION LAYER: 
     * Pulls the logo out of your sidebar and creates a static header for mobile.
     */
    function extractLogoForMobileHeader() {
        // Prevent creating multiple headers on hot-reloads
        if (document.getElementById("f4u-mobile-header-bar")) return;

        // Auto-discover your logo container inside the sidebar
        const sidebarLogo = document.querySelector('.portal-sidebar [class*="logo"], .wizard-navigation-sidebar [class*="logo"], .multi-sidebar-progress [class*="logo"], .portal-sidebar img');
        
        if (!sidebarLogo) {
            console.warn("[Logo Extractor] Sidebar logo element not found in DOM yet. Retrying...");
            setTimeout(extractLogoForMobileHeader, 100);
            return;
        }

        // Create the top header bar element
        const mobileHeader = document.createElement("div");
        mobileHeader.id = "f4u-mobile-header-bar";
        mobileHeader.className = "f4u-mobile-header-bar";

        // If the query selector caught the raw img, wrap it. Otherwise clone the parent container.
        const logoClone = sidebarLogo.cloneNode(true);
        mobileHeader.appendChild(logoClone);

        // Inject the newly generated header directly into the body at the top of the viewport
        document.body.insertBefore(mobileHeader, document.body.firstChild);
        console.log("[Logo Extractor] Logo successfully extracted out of sidebar for mobile view.");
    }

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
        extractLogoForMobileHeader();
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
