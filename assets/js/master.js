/**
 * ==========================================================================
 * FILINGS4U MASTER ENGINE FRAMEWORK
 * Handles responsive utilities, layout interactions, and pricing configurations
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollTopBtn) {
        // Monitor browser scroll depth thresholds
        window.addEventListener("scroll", function () {
            // Show the button once the user scrolls past 400px of content depth
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add("reveal-active");
            } else {
                scrollTopBtn.classList.remove("reveal-active");
            }
        });

        // Handle click event tracking to trigger the viewport sweep back up
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Native engine handles smooth acceleration transitions
            });
        });
    }
});

/**
 * ==========================================================================
 * AUTOMATED PLAN HIGHLIGHTER HANDLER
 * Visually selects and scrolls to the package chosen from the dashboard
 * ==========================================================================
 */
$(document).ready(function() {
    // 1. Parse the URL to look for the active plan parameter matching your cards
    const urlParams = new URLSearchParams(window.location.search);
    
    // Looks for incoming package tags (maps standard -> starter, elite -> compliance, enterprise -> enterprise)
    let selectedPlan = urlParams.get('plan') || urlParams.get('tier');

    if (selectedPlan) {
        // Standardize naming variables to catch your custom visual card names
        selectedPlan = selectedPlan.toLowerCase().trim();
        if (selectedPlan === 'starter') selectedPlan = 'standard';
        if (selectedPlan === 'compliance') selectedPlan = 'elite';

        console.log("Auto-selecting package tier: " + selectedPlan);
        
        // 2. Clear any existing active style highlights from your pricing grid elements
        $('.price-card').removeClass('active-highlight-plan standard-dim');

        // 3. Locate the card based on the text inside the <h3> header tag
        let targetCard = null;
        $('.price-card h3').each(function() {
            if ($(this).text().toLowerCase().trim() === selectedPlan) {
                targetCard = $(this).closest('.price-card');
            }
        });

        // 4. If a matching visual card is found, highlight it beautifully
        if (targetCard && targetCard.length > 0) {
            targetCard.addClass('active-highlight-plan');
            
            // Dim out the other choices to make the match instantly pop out
            $('.price-card').not(targetCard).addClass('standard-dim');
            
            // Smoothly slide the user's viewport right down to their plan choice matrix
            $('html, body').animate({
                scrollTop: targetCard.offset().top - 100
            }, 600);
        }
    }
});
