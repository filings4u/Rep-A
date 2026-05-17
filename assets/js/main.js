/* ==========================================================================
    Stellar by HTML5 UP | @ajlkn
   Free for personal and commercial use under the CCA 3.0 license
   ========================================================================== */
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints (Synchronized site-wide at 980px)
	breakpoints({
		xlarge:   [ '1281px',  '1680px' ],
		large:    [ '981px',   '1280px' ],
		medium:   [ '737px',   '980px'  ],
		small:    [ '481px',   '736px'  ],
		xsmall:   [ '361px',   '480px'  ],
		xxsmall:  [ null,      '360px'  ]
	});

	// Play initial animations on page load
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Nav
	var $nav = $('#nav');
	if ($nav.length > 0) {

		// Shrink effect
		$main.scrollex({
			mode: 'top',
			enter: function() { $nav.addClass('alt'); },
			leave: function() { $nav.removeClass('alt'); }
		});

		// Links
		var $nav_a = $nav.find('a');
		$nav_a.scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		})
		.on('click', function() {
			var $this = $(this);
			if ($this.attr('href').charAt(0) != '#') return;
			$nav_a.removeClass('active').removeClass('active-locked');
			$this.addClass('active').addClass('active-locked');
		})
		.each(function() {
			var	$this = $(this),
				id = $this.attr('href'),
				$section = $(id);

			if ($section.length < 1) return;

			$section.scrollex({
				mode: 'middle',
				initialize: function() {
					if (browser.canUse('transition')) $section.addClass('inactive');
				},
				enter: function() {
					$section.removeClass('inactive');
					if ($nav_a.filter('.active-locked').length == 0) {
						$nav_a.removeClass('active');
						$this.addClass('active');
					} else if ($this.hasClass('active-locked')) {
						$this.removeClass('active-locked');
					}
				}
			});
		});
	}

	// Scrolly
	$('.scrolly').scrolly({ speed: 1000 });

    // 🚀 FIXED: Forces jQuery to intercept and handle the mobile hamburger tap events on index.html
    $(document).on('click', '.mobile-menu-trigger, .mobile-toggle-btn', function(e) {
        e.preventDefault();
        toggleMobileMenu();
    });

})(jQuery);

/* ==========================================================================
   🌐 UNIFIED MOBILE NAVIGATION DRAWER CONTROLLER ENGINE
   ========================================================================== */

/**
 * 1. Primary Drawer Toggle: Handles opening, closing, and action icons transformations
 */
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    // 🚀 FIXED: Dual selector support ensures it catches all button configurations site-wide
    const toggleBtn = document.querySelector('.mobile-menu-trigger') || document.querySelector('.mobile-toggle-btn');
    
    if (navLinks && toggleBtn) {
        navLinks.classList.toggle('active');
        
        // Translate visual states based on the presence of the active layout class
        if (navLinks.classList.contains('active')) {
            toggleBtn.innerHTML = '✕';
            toggleBtn.style.color = '#e53e3e'; /* Crimson alert color on open */
        } else {
            toggleBtn.innerHTML = '☰';
            toggleBtn.style.color = '#0a1f44'; /* Restores brand deep navy on close */
        }
    } else {
        console.warn("Mobile Navigation Hub Warning: Required layout elements missing from DOM tree framework.");
    }
}

/**
 * 2. Mobile Touch Interface Category Dropdown Accordion Item Controller
 */
function toggleMobileDropdown(event, element) {
    if (window.innerWidth <= 980) {
        event.preventDefault();
        event.stopPropagation(); // Stops event bubbling crashes inside the nav block
        
        const dropdownParent = element.parentElement;
        dropdownParent.classList.toggle('active-toggle');
        
        // Close other open tabs to keep mobile navigation clean
        document.querySelectorAll('.nav-item-dropdown').forEach(item => {
            if (item !== dropdownParent) {
                item.classList.remove('active-toggle');
            }
        });
    }
}

/**
 * 3. Resolution Watchdog: Auto-closes open drawer links if screen is resized to desktop width
 */
window.addEventListener('resize', function() {
    if (window.innerWidth > 980) {
        const navLinks = document.querySelector('.nav-links');
        const toggleBtn = document.querySelector('.mobile-menu-trigger') || document.querySelector('.mobile-toggle-btn');
        
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (toggleBtn) {
                toggleBtn.innerHTML = '☰';
                toggleBtn.style.color = '#0a1f44';
            }
        }
        
        document.querySelectorAll('.nav-item-dropdown').forEach(item => {
            item.classList.remove('active-toggle');
        });
    }
});
