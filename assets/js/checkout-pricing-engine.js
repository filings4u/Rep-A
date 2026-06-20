/**
 * filings4u, LLC - Fail-Safe Step 5 UI Formatter
 * Directly targets live screen text nodes to fix layout display rows.
 * Works dynamically across all 44+ compliance and formation paths.
 */
function updateDynamicPricingMatrixVanilla(currentCartState = {}) {
    const rowsContainer = document.getElementById("summary-purchase-rows-container");
    const subtotalDisplay = document.getElementById("summary-subtotal-display");
    const govFeesDisplay = document.getElementById("summary-gov-fees-display");
    const grandTotalDisplay = document.getElementById("summary-grand-total-display");

    if (!rowsContainer) return;

    const activeRows = Array.from(rowsContainer.children);
    let serviceSubtotal = 0;
    let governmentFees = 0;

    // Determine current service path context dynamically
    let serviceKey = currentCartState.serviceKey || window.currentServicePathKey || "";
    const formationServiceKeys = ["llc-formation", "corporations", "series-llc", "foreign-qualification", "nonprofits"];
    const isFormationTrack = formationServiceKeys.includes(serviceKey);

    // 1. PASS THROUGH LINE ITEMS IN THE CONTAINER
    activeRows.forEach(row => {
        let rowText = row.innerText || row.textContent || "";
        
        if (rowText.includes("State Filing Fee")) {
            // ALWAYS hide it from the main service list container to keep layout clean
            row.style.setProperty("display", "none", "important"); 
            
            if (isFormationTrack) {
                // If it's a formation track, extract its pricing from state-pricing.js / DOM row
                let priceElement = row.querySelector("strong");
                governmentFees = priceElement ? parseFloat(priceElement.innerText.replace(/[^0-9.]/g, "")) || 150.00 : 150.00;
            }
        } else {
            // Calculate regular add-ons and compliance services
            let priceElement = row.querySelector("strong");
            if (priceElement) {
                serviceSubtotal += parseFloat(priceElement.innerText.replace(/[^0-9.]/g, "")) || 0;
            }
        }
    });

    // 2. INSTRUCTION FIX: FILING & ADD-ON SUBTOTAL
    // Rewrite this line to say "Taxes & Agency Processing" and hard-code to $0.00
    if (subtotalDisplay) {
        subtotalDisplay.innerText = "$0.00";
        const labelNode = subtotalDisplay.previousElementSibling;
        if (labelNode) {
            labelNode.innerText = "Taxes & Agency Processing";
        }
    }

    // 3. DYNAMICALLY ALLOCATE GOVERNMENT FEES
    if (govFeesDisplay) {
        govFeesDisplay.innerText = "$" + governmentFees.toFixed(2);
        // Cleanly hide or show the entire row container based on track status
        const govRowParent = govFeesDisplay.parentElement;
        if (govRowParent) {
            govRowParent.style.display = isFormationTrack ? "flex" : "none";
        }
    }

    // 4. INSTRUCTION FIX: TOTAL SUMMARY AMOUNT
    // Calculate final clean sum: Service items + dynamic government fee allocation
    if (grandTotalDisplay) {
        let grandTotal = serviceSubtotal + (isFormationTrack ? governmentFees : 0);
        grandTotalDisplay.innerText = "$" + grandTotal.toFixed(2);
    }
}

// Bind cleanly back to global workspace scopes
window.updateDynamicPricingMatrixVanilla = updateDynamicPricingMatrixVanilla;

/**
 * UI Mutation Guard Hook
 * Automatically runs the formatter whenever your wizard updates the summary panel.
 */
(function activateSummaryObserver() {
    const summaryTarget = document.getElementById("summary-purchase-rows-container");
    if (!summaryTarget) {
        setTimeout(activateSummaryObserver, 250);
        return;
    }

    const summaryObserver = new MutationObserver(() => {
        summaryObserver.disconnect(); // Prevent infinite layout loops
        
        updateDynamicPricingMatrixVanilla(window.currentCartState || {});
        
        summaryObserver.observe(summaryTarget, { childList: true, subtree: true });
    });

    summaryObserver.observe(summaryTarget, { childList: true, subtree: true });
    console.log("[Observer Engine] Step 5 layout monitor active.");
})();
