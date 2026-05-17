/* Stellar by HTML5 UP html5up.net | @ajlkn Free for personal and commercial use under the CCA 3.0 license (html5up.net/license) */ 
(function($) { 
    var $window = $(window), $body = $('body'), $main = $('#main'); 
    
    // Breakpoints (Stellar Default)
    breakpoints({ 
        xlarge: [ '1281px', '1680px' ], 
        large: [ '981px', '1280px' ], 
        medium: [ '737px', '980px' ], // 🌟 Note: Mobile view triggers at 980px here
        small: [ '481px', '736px' ], 
        xsmall: [ '361px', '480px' ], 
        xxsmall: [ null, '360px' ] 
    }); 
    
    // Play initial animations on page load. 
    $window.on('load', function() { 
        window.setTimeout(function() { $body.removeClass('is-preload'); }, 100); 
    }); 
    
    // Nav. 
    var $nav = $('#nav'); 
    if ($nav.length > 0) { 
        // Shrink effect. 
        $main.scrollex({ 
            mode: 'top', 
            enter: function() { $nav.addClass('alt'); }, 
            leave: function() { $nav.removeClass('alt'); }, 
        }); 
        
        // Links. 
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
            var $this = $(this), id = $this.attr('href'), $section = $(id); 
            if ($section.length < 1) return; 
            $section.scrollex({ 
                mode: 'middle', 
                initialize: function() { 
                    if (browser.canUse('transition')) $section.addClass('inactive'); 
                }, 
                enter: function() { 
                    $section.removeClass('inactive'); 
                    if ($nav_a.filter('.active-locked').length == 0) { 
                        $nav_a.removeClass('active'); $this.addClass('active'); 
                    } else if ($this.hasClass('active-locked')) {
                        $this.removeClass('active-locked'); 
                    }
                } 
            }); 
        }); 
    } 
    
    // Scrolly. 
    $('.scrolly').scrolly({ speed: 1000 }); 
})(jQuery); 

/* ========================================================================== 
   🌐 FILINGS4U MASTER SITE-WIDE RESPONSIVE INTERACTION CONTROLLER 
   ========================================================================== */ 

/** 
 * 1. Mobile Sidebar Navigation Drawer Menu Toggle Action Controller 
 */ 
function toggleMobileMenu() { 
    const navLinks = document.querySelector('.nav-links'); 
    const toggleBtn = document.querySelector('.mobile-toggle-btn'); 
    if (navLinks && toggleBtn) { 
        navLinks.classList.toggle('active'); 
        if (navLinks.classList.contains('active')) { 
            toggleBtn.innerHTML = '✕'; 
            toggleBtn.style.color = '#e53e3e'; 
        } else { 
            toggleBtn.innerHTML = '☰'; 
            toggleBtn.style.color = '#0a1f44'; 
        } 
    } 
} 

/** 
 * 2. Mobile Touch Interface Category Dropdown Accordion Item Controller 
 * FIXED: Threshold value lowered from 991 to 980 to sync with HTML5 UP templates
 */ 
function toggleMobileDropdown(event, element) { 
    if (window.innerWidth <= 980) { 
        event.preventDefault(); 
        const dropdownParent = element.parentElement; 
        dropdownParent.classList.toggle('active-toggle'); 
        document.querySelectorAll('.nav-item-dropdown').forEach(item => { 
            if (item !== dropdownParent) { 
                item.classList.remove('active-toggle'); 
            } 
        }); 
    } 
} 

/** 
 * 3. Automatic Resolution State Maintenance Watchdog Interceptor 
 * FIXED: Reset listener updated to 980 to match media queries exactly
 */ 
window.addEventListener('resize', function() { 
    if (window.innerWidth > 980) { 
        const navLinks = document.querySelector('.nav-links'); 
        const toggleBtn = document.querySelector('.mobile-toggle-btn'); 
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

/* ==========================================================================
   📱 RESPONSIVE INTERACTION CONTROLLER: MOBILE MENU DRAWER ENGINE
   ========================================================================== */

function toggleMobileMenu() {
    // 🌟 Matches the class wrappers assigned inside your site-elite.css stylesheet layout
    const navLinks = document.querySelector('.nav-links');
    const toggleBtn = document.querySelector('.mobile-menu-trigger');
    
    if (navLinks && toggleBtn) {
        navLinks.classList.toggle('active');
        
        // Dynamic icon graphic translations toggle based on state parameters
        if (navLinks.classList.contains('active')) {
            toggleBtn.innerHTML = '✕';
            toggleBtn.style.color = '#e53e3e'; /* Smooth alert red accent color */
        } else {
            toggleBtn.innerHTML = '☰';
            toggleBtn.style.color = '#0a1f44'; /* Restores brand deep navy contrast */
        }
    }
}
