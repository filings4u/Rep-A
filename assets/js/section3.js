/**
 * filings4u Platform Architecture
 * Module: section3.js (Part 1 - Mobile Fluid Style Sheet Setup)
 */
(function injectSection3VisualDesign() { 
  const targetId = "filings4u-processing-packages-root"; 
  const styleId = "f4u-section3-production-design-overrides"; 
  
  if (!document.getElementById(styleId)) { 
    const s = document.createElement("style"); 
    s.id = styleId; 
    s.textContent = ` 
      #${targetId} .pricing-section-container { background: #ffffff; padding: 60px 0; width: 100%; box-sizing: border-box; } 
      #${targetId} .pricing-header-block { text-align: center; margin-bottom: 50px; } 
      #${targetId} .pricing-main-title { color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 10px 0; } 
      #${targetId} .pricing-grid { display: grid!important; grid-template-columns: repeat(3, 1fr)!important; gap: 30px!important; width: 100%; box-sizing: border-box; } 
      #${targetId} .price-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 40px 30px; position: relative; box-sizing: border-box; display: flex; flex-direction: column; } 
      #${targetId} .price-card.featured { border: 2px solid #10b981; box-shadow: 0 20px 25px -5px rgba(16,185,129,0.1); } 
      #${targetId} .price-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #10b981; color: #fff; padding: 4px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; white-space: nowrap; z-index: 10; } 
      #${targetId} .price-card h3 { color: #0a1f44; font-size: 1.3rem; font-weight: 800; text-transform: uppercase; margin: 0 0 20px 0; text-align: center; } 
      #${targetId} .price-card .amount { color: #0a1f44!important; font-size: 2.8rem!important; font-weight: 800!important; display: flex; align-items: baseline; justify-content: center; gap: 4px; margin-bottom: 25px; } 
      #${targetId} .price-card .amount span { color: #94a3b8; font-size: 0.9rem; font-weight: 500; } 
      #${targetId} .price-features { list-style: none; padding: 0; margin: 0 0 35px 0; flex-grow: 1; } 
      #${targetId} .price-features li { color: #0a1f44!important; font-size: 0.95rem!important; font-weight: 500!important; margin-bottom: 14px; display: flex; align-items: flex-start; } 
      #${targetId} .btn-main { display: block; width: 100%; background: #0a1f44; color: #fff; text-align: center; padding: 14px; border-radius: 8px; font-weight: 700; text-decoration: none; box-sizing: border-box; margin-top: auto; } 
      #${targetId} .price-card.featured .btn-main { background: #10b981; } 

      /* === HIGH-PERFORMANCE MOBILE RESPONSIVE ENGINE (BELOW 991PX) === */
      @media (max-width: 991px) { 
        #${targetId} .pricing-section-container { padding: 40px 0 !important; }
        
        /* Fluids edge paddings context safely */
        #${targetId} .site-width-alignment-guard { padding: 0 20px !important; }

        /* FORCES THE INTERIOR TRACK LAYOUT CARDS TO STACK VERTICALLY IN ONE LINE */
        #${targetId} .pricing-grid { grid-template-columns: 1fr !important; gap: 24px !important; } 
        
        /* REDUCES MAIN SYSTEM HEADER AND TYPOGRAPHY SIZES COMPACTLY */
        #${targetId} .pricing-main-title { font-size: 1.6rem !important; }
        #${targetId} .price-card { padding: 30px 20px !important; }
        #${targetId} .price-card h3 { font-size: 1.15rem !important; margin-bottom: 15px !important; }

        /* SCALES THE LARGE PRICE DIGITS DOWN TO ENHANCE MOBILE RATIOS */
        #${targetId} .price-card .amount { font-size: 2.1rem !important; margin-bottom: 16px !important; }
        #${targetId} .price-card .amount span { font-size: 0.68rem !important; } /* Shrinks +State Fee text label compact */

        /* CONDENSES FEATURE BULLETS AND ACTION CHOOSER BUTTON INTERFACES */
        #${targetId} .price-features li { font-size: 0.8rem !important; margin-bottom: 10px !important; }
        #${targetId} .btn-main { padding: 12px 16px !important; font-size: 0.88rem !important; }
      } 
    `; 
    document.head.appendChild(s); 
  } 
  window.FILINGS4U_PACKAGES_TARGET = targetId; 
})();


/* Fragment 2 of 2: Dynamic Website Pricing Card Compiler Engine */
function executeProductionWebsitePricingCards(zone, targetServiceKey, displayTitle, serviceData) {
  var cardsHtml = "";
  var plansConfig = [
    { key: "starter", name: "Starter", class: "price-card" },
    { key: "compliance", name: "Compliance", class: "price-card featured" },
    { key: "enterprise", name: "Enterprise", class: "price-card" }
  ];

  plansConfig.forEach(function(plan) {
    var basePrice = serviceData[plan.key] || 0;
    var bullets = (serviceData.bullets && serviceData.bullets[plan.key]) ? serviceData.bullets[plan.key] : [];
    var bulletListHtml = "";

    bullets.forEach(function(bulletText) {
      bulletListHtml += '<li><span style="color: #10b981 !important; font-weight: 900; margin-right: 8px; display: inline-block;">✓</span>' + bulletText + '</li>';
    });

    // The script-side badge is rendered here safely without double overlays
    var badgeHtml = (plan.key === "compliance") ? '<div class="price-badge">Most Popular</div>' : '';

    cardsHtml += '<div class="' + plan.class + '">' + badgeHtml + '<h3>' + plan.name + '</h3>' + '<div class="amount">$' + Math.floor(basePrice) + '<span style="font-size: 1.5rem; font-weight: 800; align-self: flex-start; margin-top: 6px;">.00</span> <span>+ State Fee</span></div>' + '<ul class="price-features">' + bulletListHtml + '</ul>' + '<a href="wizard.html?service=' + targetServiceKey + '&plan=' + plan.key + '" class="btn-main">Select ' + plan.name + '</a>' + '</div>';
  });

  var containerHtml = '';
  containerHtml += '<section class="pricing-section-container">';
  containerHtml += ' <div class="site-width-alignment-guard" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; box-sizing: border-box;">';
  containerHtml += ' <div class="pricing-header-block">';
  containerHtml += ' <h2 class="pricing-main-title">' + displayTitle + ' Processing Options</h2>';
  containerHtml += ' </div>';
  containerHtml += ' <div class="pricing-grid">' + cardsHtml + '</div>';
  containerHtml += ' <div style="display: none;"><div class="price-badge">Most Popular</div></div>'; // Suppressed duplicate trap lock
  containerHtml += ' </div>';
  containerHtml += '</section>';
  zone.innerHTML = containerHtml;

  setTimeout(function() {
    const nodes = zone.querySelectorAll('a') || document.querySelectorAll('a');
    nodes.forEach(function(node) {
      if ((node.textContent || "").trim() !== "" && node.getAttribute("href") === "#pricing") {
        node.addEventListener("click", function(e) {
          const tgt = zone.querySelector(".pricing-section-container");
          if (tgt) { e.preventDefault(); tgt.scrollIntoView({ behavior: "smooth", block: "start" }); }
        });
      }
    });
  }, 60);
}
