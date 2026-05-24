/**
 * ==========================================================================
 * 📱 FILINGS4U INTERACTIVE NAVIGATION CORE ENGINE
 * FILE LOCATION: assets/js/toggle.js
 * DESCRIPTION: Handles Right-to-Left slide-out drawer, white background dropdown loops,
 *              and mobile accordion sub-menus.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. SELECT CORE ELEMENT INTERFACES
    const menuTrigger = document.getElementById('mobile-menu-trigger');
    const navLinksDrawer = document.querySelector('.nav-links');
    const bodyNode = document.body;

    // 2. CREATE ACTIVE DRAWER TOGGLE UTILITY
    function toggleMobileMenu() {
        // Toggle classes to fire your Right-to-Left slide-out CSS transitions
        const isMenuOpening = !navLinksDrawer.classList.contains('active');
        
        navLinksDrawer.classList.toggle('active');
        bodyNode.classList.toggle('nav-open');

        // Manage accessibility state attributes
        if (menuTrigger) {
            menuTrigger.setAttribute('aria-expanded', isMenuOpening);
            // Dynamic switch indicator icon text
            menuTrigger.innerHTML = isMenuOpening ? '✕' : '☰';
        }
    }

    // Bind event tracking actions directly to the trigger button element
    if (menuTrigger) {
        menuTrigger.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevents instant bubbling layout triggers
            toggleMobileMenu();
        });
    }

    // 3. SECURE PORTAL BUTTON DYNAMIC MOBILE CLASS & HOVER SWITCHER
    const portalButton = document.querySelector('.btn-client-portal');
    if (portalButton) {
        function enforcePortalMobileStyles() {
            if (window.innerWidth <= 991) {
                portalButton.classList.add('mobile-portal-lock');
            } else {
                portalButton.classList.remove('mobile-portal-lock');
            }
        }
        
        // JAVASCRIPT DESKTOP HOVER INJECTION: Bypasses stubborn template inline styles
        portalButton.addEventListener('mouseenter', function() {
            if (window.innerWidth > 991) {
                this.classList.add('desktop-portal-hover');
            }
        });
        
        portalButton.addEventListener('mouseleave', function() {
            this.classList.remove('desktop-portal-hover');
        });
        
        enforcePortalMobileStyles();
        window.addEventListener('resize', enforcePortalMobileStyles);
    }


    // 4. MOBILE DROPDOWN ACCORDION HANDLING (CLICK TRAPS)
    const dropdownTriggers = document.querySelectorAll('.static-dropdown > a');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            // Only capture clicks if the screen is inside the mobile viewport breakpoint
            if (window.innerWidth <= 991) {
                e.preventDefault(); // Stop native redirect link action loops
                
                const parentDropdown = this.parentElement;
                
                // Toggle active visibility states for current target container
                parentDropdown.classList.toggle('active-toggle');
                
                // Smoothly close any other active menus to prevent text layout clutter
                document.querySelectorAll('.static-dropdown').forEach(item => {
                    if (item !== parentDropdown) {
                        item.classList.remove('active-toggle');
                    }
                });
            }
        });
    });

    // 5. EXTERNAL INTERACT LOGIC OVERRIDES
    // Closes mobile menus instantly if user taps background viewport canvas rows
    document.addEventListener('click', function(e) {
        if (navLinksDrawer && navLinksDrawer.classList.contains('active')) {
            if (!navLinksDrawer.contains(e.target) && e.target !== menuTrigger) {
                toggleMobileMenu();
            }
        }
    });
});
