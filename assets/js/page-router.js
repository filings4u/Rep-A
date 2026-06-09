// Function to translate HTML filenames to script package keys
function getPricingServiceKey() {
    const path = window.location.pathname;
    const fileName = path.split("/").pop().replace(".html", "") || "llc-formation";

    // Explicit URL mapping to align filenames with your script keys
    const urlMap = {
        "limited-liability-company": "llc-formation",
        "corporations": "corporation",
        "nonprofits": "nonprofit-organization",
        "doing-business-as-dba": "dba-registration",
        "employer-identification-number-ein": "employer-id-ein",
        "federal-income-tax": "federal-tax",
        "state-income-tax": "state-tax",
        "sales-tax-registration": "sales-tax",
        "payroll-tax-940-941": "payroll-tax",
        "heavy-use-tax-2290": "heavy-use-tax",
        "duns-number-procurement": "duns-number",
        "driver-qualification-file": "driver-file",
        "process-agents-boc-3": "process-agent-boc3",
        "international-fuel-tax-agreement-ifta": "ifta-registration",
        "hazmat-registration": "dot-hazmat"
    };

    return urlMap[fileName] || fileName;
}


// Automatically tag the target container before the pricing script renders
document.addEventListener("DOMContentLoaded", function() {
    const pricingRoot = document.getElementById("website-package-pricing-cards-root");
    if (pricingRoot) {
        const structuralKey = getPricingServiceKey();
        pricingRoot.setAttribute("data-service-key", structuralKey);
    }
});
