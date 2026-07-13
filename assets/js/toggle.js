/**
 * filings4u Platform Architecture
 * FILE LOCATION: assets/js/toggle.js (Part 1 of 2)
 * 🟢 FIXED: Resolved multi-file class naming collisions and event fighting loops.
 */
(function() {
  
  // 1. DYNAMIC ELEMENT OBSERVER BINDING CONTROLLER
  function bindPlatformInteractions() {
    const menuTrigger = document.getElementById('mobile-menu-trigger');
    const navLinksDrawer = document.querySelector('.nav-links');
    const bodyNode = document.body;
    const scrollBtn = document.getElementById('scrollToTopBtn');

    // Baseline fallback styling directly if CSS parameters fail
    if (scrollBtn && !scrollBtn.dataset.styled) {
      scrollBtn.style.position = 'fixed';
      scrollBtn.style.bottom = '30px';
      scrollBtn.style.right = '30px';
      scrollBtn.style.zIndex = '99999';
      scrollBtn.style.cursor = 'pointer';
      scrollBtn.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      scrollBtn.dataset.styled = "true";
    }

    // 2. EXPOSED DRAWER INTERACTIVE LOGIC MODULE
    window.toggleMobileMenu = function() {
      if (!navLinksDrawer) return;
      
      // 🟢 ALIGNED: Syncs across both .active and your navigation.js style keys (.mobile-active)
      const isMenuOpening = !navLinksDrawer.classList.contains('mobile-active') && !navLinksDrawer.classList.contains('active');
      
      navLinksDrawer.classList.toggle('active');
      navLinksDrawer.classList.toggle('mobile-active');
      bodyNode.classList.toggle('nav-open');
      
      if (menuTrigger) {
        menuTrigger.setAttribute('aria-expanded', isMenuOpening);
        menuTrigger.innerHTML = isMenuOpening ? '✕' : '☰';
      }
    };

    // Remove legacy event duplication blocks and bind clean fresh handlers
    if (menuTrigger && !menuTrigger.dataset.bound) {
      menuTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        window.toggleMobileMenu();
      });
      menuTrigger.dataset.bound = "true";
    }

    // 3. DROPDOWN COMPONENT ACCORDION HANDLERS
    const dropdownTriggers = document.querySelectorAll('.nav-item-dropdown > a, .static-dropdown > a');
    dropdownTriggers.forEach(trigger => {
      if (trigger.dataset.bound) return;
      
      trigger.addEventListener('click', function(e) {
        // Enforce the screen size checkpoint loop inside the click handler natively
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          
          const parentDropdown = this.parentElement;
          
          // 🟢 FIXED: Sweeps away other open submenus using the core 'mobile-open' class name layout
          document.querySelectorAll('.nav-item-dropdown, .static-dropdown').forEach(item => {
            if (item !== parentDropdown) {
              item.classList.remove('mobile-open');
              item.classList.remove('active-toggle');
            }
          });
          
          // 🟢 FIXED: Simultaneously toggles both class names to fix styling issues across files
          parentDropdown.classList.toggle('mobile-open');
          parentDropdown.classList.toggle('active-toggle');
        }
      });
      trigger.dataset.bound = "true";
    });

    /**
 * filings4u Platform Architecture
 * FILE LOCATION: assets/js/toggle.js (Part 2 of 2)
 */

    // 4. FLOATING CANVAS CLICK OVERRIDES
    if (!document.datasetBoundClick) {
      document.addEventListener('click', function(e) {
        // Targets active selectors across both layout class definitions
        const activeDrawer = document.querySelector('.nav-links.active') || document.querySelector('.nav-links.mobile-active');
        const triggerBtn = document.getElementById('mobile-menu-trigger');
        
        if (activeDrawer && !activeDrawer.contains(e.target) && e.target !== triggerBtn) {
          if (typeof window.toggleMobileMenu === 'function') {
            window.toggleMobileMenu();
          }
        }
      });
      document.datasetBoundClick = true;
    }

    // 5. SCROLL VELOCITY ENGINE TO CEILING STRIPPER
    if (scrollBtn && !scrollBtn.dataset.bound) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          scrollBtn.style.display = 'flex';
          scrollBtn.style.visibility = 'visible';
          scrollBtn.style.opacity = '1';
        } else {
          scrollBtn.style.opacity = '0';
          setTimeout(() => {
            if (window.scrollY <= 300) {
              scrollBtn.style.display = 'none';
              scrollBtn.style.visibility = 'hidden';
            }
          }, 200);
        }
      }, { passive: true });

      scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      scrollBtn.dataset.bound = "true";
    }
  }

  // 🌟 RUNTIME GUARD LAYER: Hooks interaction binding to early loads and ongoing DOM updates
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindPlatformInteractions);
  } else {
    bindPlatformInteractions();
  }

  // Active watcher observer checks for late injection mutations across page containers
  const coreObserverEngine = new MutationObserver(() => {
    bindPlatformInteractions();
  });
  
  coreObserverEngine.observe(document.body, { childList: true, subtree: true });
})();
