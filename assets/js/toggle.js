$(document).ready(function () {

    // 1. Mobile Menu Toggle Click Handler
    $('.mobile-toggle-btn').on('click', function (event) {
        event.stopPropagation(); // Prevents the body click listener from closing it instantly
        
        $('body').toggleClass('nav-open');
        $('.nav-links').toggleClass('active');

        var isMenuOpen = $('body').hasClass('nav-open');
        $(this).attr('aria-expanded', isMenuOpen ? 'true' : 'false');
        
        console.log('📱 Mobile menu toggled via jQuery. Open state:', isMenuOpen);
    });

    // 2. Click-Away Background Dim Overlay Handler
    $(document).on('click', function (event) {
        if ($('body').hasClass('nav-open')) {
            var $drawer = $('.nav-links');
            var $toggleBtn = $('.mobile-toggle-btn');

            // If the user clicks outside both the menu drawer and the toggle button
            if (!$drawer.is(event.target) && $drawer.has(event.target).length === 0 && !$toggleBtn.is(event.target) && $toggleBtn.has(event.target).length === 0) {
                $('body').removeClass('nav-open');
                $('.nav-links').removeClass('active');
                $('.mobile-toggle-btn').attr('aria-expanded', 'false');
                
                console.log('🔄 Menu closed automatically by clicking outside.');
            }
        }
    });

    // 3. Mobile Sub-Menu Dropdown Accordion Toggle
    $('.nav-item-dropdown > a').on('click', function (event) {
        if (window.innerWidth < 992) {
            event.preventDefault();
            event.stopPropagation();

            var $currentDropdown = $(this).parent('.nav-item-dropdown');

            // Collapse any other open dropdown accordions
            $('.nav-item-dropdown').not($currentDropdown).removeClass('active-toggle');

            // Toggle the clicked dropdown accordion layout view
            $currentDropdown.toggleClass('active-toggle');
            
            console.log('📂 Accordion sub-menu toggled.');
        }
    });

});
