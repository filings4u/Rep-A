/**
 * ==========================================================================
 * 📱 FILINGS4U INTERACTIVE NAVIGATION & UTILITY MATRIX ENGINE
 * FILE LOCATION: assets/js/toggle.js
 * ==========================================================================
 */

(function() {
  // 1. DYNAMIC ELEMENT OBSERVER BINDING CONTROLLER
  function bindPlatformInteractions() {
    const menuTrigger = document.getElementById('mobile-menu-trigger');
    const navLinksDrawer = document.querySelector('.nav-links');
    const bodyNode = document.body;
    const scrollBtn = document.getElementById('scrollToTopBtn');

    // 🌟 FALLBACK EMULATOR CODE: Inject baseline styling directly if CSS parameters fail
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

      const isMenuOpening = !navLinksDrawer.classList.contains('active');
      navLinksDrawer.classList.toggle('active');
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

    // 3. DROPDOWN COMPONENT ACCORDION HANDLERS (Screen size check wrapper)
    const dropdownTriggers = document.querySelectorAll('.static-dropdown > a');
    dropdownTriggers.forEach(trigger => {
      if (trigger.dataset.bound) return;
      trigger.addEventListener('click', function(e) {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          const parentDropdown = this.parentElement;
          parentDropdown.classList.toggle('active-toggle');

          document.querySelectorAll('.static-dropdown').forEach(item => {
            if (item !== parentDropdown) {
              item.classList.remove('active-toggle');
            }
          });
        }
      });
      trigger.dataset.bound = "true";
    });

    // 4. FLOATING CANVAS CLICK OVERRIDES
    if (!document.datasetBoundClick) {
      document.addEventListener('click', function(e) {
        const activeDrawer = document.querySelector('.nav-links.active');
        const triggerBtn = document.getElementById('mobile-menu-trigger');
        if (activeDrawer && !activeDrawer.contains(e.target) && e.target !== triggerBtn) {
          if (typeof window.toggleMobileMenu === 'function') window.toggleMobileMenu();
        }
      });
      document.datasetBoundClick = true;
    }

    // 5. SCROLL VELOCITY ENGINE TO CEILING STRIPPER
    if (scrollBtn && !scrollBtn.dataset.bound) {
      // Passive track thread mapping layer execution parameters
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
  
  coreObserverEngine.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
})();
