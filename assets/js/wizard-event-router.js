// ============================================================
// 📡 ENGINE MODULE C: AGNOSTIC GLOBAL EVENT INTERCEPT PIPELINE
// ============================================================
document.addEventListener("change", function(event) {
  const node = event.target;
  if (!node || node.type !== "checkbox") return;

  // Scenario A: Captured dynamic checkbox matching Module A schema layout parameters
  const addonId = node.getAttribute("data-addon-id");
  if (addonId) {
    window[`state_addon_${addonId}`] = node.checked;
    
    // Security Sanity Guard: Force verification baseline state check pass
    if (typeof window.handleBackgroundUpsellTogglePass === "function") {
      window.handleBackgroundUpsellTogglePass(node);
    }
    window.updateDynamicPricingMatrixVanilla();
    return;
  }

  // Scenario B: Captured structural HTML component hardcoded inputs from preceding step layouts
  const matchedMappingId = node.id || node.name;
  if (matchedMappingId) {
    // Agnostic data reference linking: Extract identifier substrings safely
    const catalogLookupSlug = matchedMappingId.replace("nea_service_", "").replace("_", "-");
    const s2Registry = window.GLOBAL_MASTER_CATALOG?.step2_embedded || {};
    
    if (s2Registry[catalogLookupSlug] !== undefined) {
      window[`state_addon_${catalogLookupSlug}`] = node.checked;
      window.updateDynamicPricingMatrixVanilla();
    }
  }
});

// Initialization automation sequence triggers
function runMarketplaceBootstrapPipeline() {
  if (typeof window.executeMarketplaceUIRenderLoop === "function") {
    window.executeMarketplaceUIRenderLoop();
  }
  if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
    window.updateDynamicPricingMatrixVanilla();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runMarketplaceBootstrapPipeline);
} else {
  runMarketplaceBootstrapPipeline();
}
