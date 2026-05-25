document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollToTopBtn");

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
});
