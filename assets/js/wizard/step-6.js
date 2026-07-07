// ============================================================================ // 
// 💳 SECURE STRIPE GATEWAY COMPONENT WITH LOOP BLOCK PROTECTION 
// ============================================================================ // 
(function() { 
 "use strict"; 
 const STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE'; 
 
 window.stripeInstance = window.stripeInstance || null; 
 window.stripeElementsContainer = window.stripeElementsContainer || null; 
 window.stripePaymentElementInstance = window.stripePaymentElementInstance || null; 
 
 // 🟢 ANTI-RECURSION LOCK LAYER: Stops layout cascades from triggering re-mount loops 
 let isCurrentlyMountingStripeGateway = false; 

 async function initializeFlatStripeCheckoutElement() { 
   // Abort instantly if another routing thread is actively running this block 
   if (isCurrentlyMountingStripeGateway) return; 

   // 🟢 FIX 1: RUN THE CALCULATIONS MATRIX FIRST TO SYNC SELECTED ADDONS
   if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
     window.updateDynamicPricingMatrixVanilla();
   }

   // Verify if the pricing parameters exist in window memory yet. If not, wait 50ms.
   if (window.computedWizardGrandTotalAmount === undefined && window.wizardCalculatedFinalTotalAmount === undefined) {
     setTimeout(initializeFlatStripeCheckoutElement, 50);
     return;
   }

   const currentGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 0; 
   const totalAmountCents = Math.round(currentGrandTotal * 100); 

   // DESTRUCTIVE LOOP BLOCK: If an element instance already exists for this exact amount, do not run a tear-down pass.
   if (window.stripePaymentElementInstance && window.lastProcessedStripeAmountCents === totalAmountCents) { 
     console.log("[Stripe Loader Guard] Identical checkout invoicing totals matched. Skipping duplicate mounting loop."); 
     return; 
   } 

   console.log("[Stripe Loader] Initiating payment element mount sequence..."); 
   const parentPanel = document.getElementById("step-panel-6") || document.getElementById("step-6"); 
   if (!parentPanel) return; 

   let mountPoint = document.getElementById("stripe-payment-element-mount-point"); 
   if (!mountPoint) { 
     console.warn("[Stripe Loader Intercept] '#stripe-payment-element-mount-point' was missing. Repairing DOM state programmatically..."); 
     mountPoint = document.createElement("div"); 
     mountPoint.id = "stripe-payment-element-mount-point"; 
     mountPoint.style.cssText = "min-height: 150px; margin: 20px 0; width: 100%; box-sizing: border-box;"; 
     const checkoutFormContainer = parentPanel.querySelector("form") || parentPanel; 
     checkoutFormContainer.appendChild(mountPoint); 
   } 

   // 🟢 FIX 2: ALIGN BUTTONS AND ONCLICK ACTIONS WITH THE SUBMISSION PIPELINE
   let step6FooterButtons = parentPanel.querySelector(".wizard-footer-action-row"); 
   if (!step6FooterButtons) { 
     const footerContainer = document.createElement("div"); 
     footerContainer.className = "wizard-footer-action-row"; 
     footerContainer.style.cssText = "display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border, #e2e8f0); clear: both; box-sizing: border-box;"; 
     footerContainer.innerHTML = ` 
       <button type="button" class="btn-wizard-nav-back" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;"> 
         <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Back to Summary 
       </button> 
       <button type="button" class="btn-wizard-main btn-wizard-nav-next" id="wizard-next-trigger-btn" onclick="if(typeof window.executeOnboardingTransactionPayloadSubmitVanilla === 'function') { window.executeOnboardingTransactionPayloadSubmitVanilla(); }" style="background: #0a1f44; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(10, 31, 68, 0.2);"> 
         Authorize & Create Account <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i> 
       </button> `; 
     const targetLocation = parentPanel.querySelector("form") || parentPanel; 
     targetLocation.appendChild(footerContainer); 
   } else {
     // Re-route the button ID and click handlers if the footer elements already exist on screen
     const nextActionBtn = step6FooterButtons.querySelector(".btn-wizard-main");
     if (nextActionBtn) {
       nextActionBtn.id = "wizard-next-trigger-btn";
       nextActionBtn.onclick = function() {
         if (typeof window.executeOnboardingTransactionPayloadSubmitVanilla === 'function') {
           window.executeOnboardingTransactionPayloadSubmitVanilla();
         }
       };
     }
   }

   if (typeof Stripe === "undefined") { 
     mountPoint.innerHTML = "<p style='color: red; font-size: 0.85rem; font-weight: 600;'>Payment system offline. Please refresh.</p>"; 
     return; 
   } 

   try { 
     isCurrentlyMountingStripeGateway = true; 
     
     if (!window.stripeInstance) { 
       window.stripeInstance = Stripe(STRIPE_PUBLISHABLE_KEY); 
     } 

     // Handle zero dollar check safely inside instantiation parameters 
     if (totalAmountCents <= 0) { 
       if (window.stripePaymentElementInstance) { 
         window.stripePaymentElementInstance.destroy(); 
         window.stripePaymentElementInstance = null; 
       } 
       window.stripeElementsContainer = null; 
       mountPoint.innerHTML = "<p style='color: #64748b; font-size: 0.85rem; font-family: sans-serif; text-align: center; padding: 20px;'>Your selected items total $0.00. No payment details are required to finalize this order.</p>"; 
       return; 
     } 

     if (window.stripePaymentElementInstance) { 
       window.stripePaymentElementInstance.destroy(); 
       window.stripePaymentElementInstance = null; 
     } 

     // 🟢 FIX 3: ADD AN HTML PRICING BANNER SUMMARY RIGHT ABOVE THE STRIPE IFRAME FRAME
     mountPoint.innerHTML = `
       <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding: 14px 18px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; box-sizing: border-box; width: 100%;">
         <span style="font-weight: 800; color: #0a1f44; font-size: 0.95rem;">Total Payment Authorization:</span>
         <strong style="font-family: monospace; color: #10b981; font-size: 1.3rem;">$${currentGrandTotal.toFixed(2)}</strong>
       </div>
       <div id="stripe-iframe-nested-injection-anchor"></div>
     `;

     const checkoutOptions = { 
       mode: 'payment', 
       amount: totalAmountCents, 
       currency: 'usd', 
       appearance: { 
         theme: 'stripe', 
         variables: { 
           colorPrimary: '#10b981', 
           colorBackground: '#ffffff', 
           colorText: '#0a1f44', 
           colorDanger: '#ef4444', 
           fontFamily: 'system-ui, sans-serif', 
           borderRadius: '8px' 
         } 
       } 
     }; 

     window.stripeElementsContainer = window.stripeInstance.elements(checkoutOptions); 
     window.stripePaymentElementInstance = window.stripeElementsContainer.create("payment", { 
       layout: { type: 'accordion', defaultCollapsed: false, radios: false, spacedAccordionItems: false } 
     }); 

     window.lastProcessedStripeAmountCents = totalAmountCents; 

     requestAnimationFrame(() => { 
       setTimeout(() => { 
         if (window.stripePaymentElementInstance) { 
           // Mount directly inside the nested frame node to preserve the layout wrapper banner
           window.stripePaymentElementInstance.mount("#stripe-iframe-nested-injection-anchor"); 
           console.log("[Stripe Loader Success] Secure Payment Gateway securely isolated and mounted."); 
         } 
       }, 30); 
     }); 

   } catch (mountError) { 
     console.error("[Stripe Loader Core Exception]:", mountError); 
     mountPoint.innerHTML = "<p style='color: #ef4444; font-size: 0.85rem;'>Secure gateway loading failed. Please refresh.</p>"; 
   } finally { 
     isCurrentlyMountingStripeGateway = false; 
   } 
 } 
 
 window.initializeFlatStripeCheckoutElement = initializeFlatStripeCheckoutElement; 
 window.forceStep6StripePaymentGatewayRefreshPass = initializeFlatStripeCheckoutElement; 
})();