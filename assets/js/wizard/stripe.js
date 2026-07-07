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

   // 🟢 FIXED TIMING CHECK:
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

   // AUTOMATED CHECKOUT FOOTER BUTTON ASSURANCE
   let step6FooterButtons = parentPanel.querySelector(".wizard-footer-action-row");
   if (!step6FooterButtons) {
     const footerContainer = document.createElement("div");
     footerContainer.className = "wizard-footer-action-row";
     footerContainer.style.cssText = "display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border, #e2e8f0); clear: both; box-sizing: border-box;";
     footerContainer.innerHTML = `
       <button type="button" class="btn-wizard-nav-back" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
         <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Previous Step
       </button>
       <button type="button" class="btn-wizard-main btn-wizard-nav-next" id="stripe-submit-action-btn" style="background: #10b981; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.15);">
         Authorize Order Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>
       </button>
     `;
     const targetLocation = parentPanel.querySelector("form") || parentPanel;
     targetLocation.appendChild(footerContainer);
   }

   if (typeof Stripe === "undefined") { 
     mountPoint.innerHTML = "<p style='color: red; font-size: 0.85rem; font-weight: 600;'>Payment system offline. Please refresh.</p>"; 
     return; 
   } 

   try { 
     isCurrentlyMountingStripeGateway = true; 
     
     // 🟢 FIXED: Removed reference to the broken variable 'STRPublishableKey'
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

     mountPoint.innerHTML = ""; 
     window.lastProcessedStripeAmountCents = totalAmountCents; 

     requestAnimationFrame(() => { 
       setTimeout(() => { 
         if (window.stripePaymentElementInstance) { 
           window.stripePaymentElementInstance.mount("#stripe-payment-element-mount-point"); 
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



// ============================================================================ // 
// 💳 SECURE STRIPE GATEWAY COMPONENT WITH LOOP BLOCK PROTECTION 
// ============================================================================ // 
(function() { 
 "use strict"; 
 const STRIPE_PUBLISHABLE_KEY = 'pk_test_51TTy4u1hrjQxq47MgsMyTpdS4Aadnk4H63kILJaWbuUfppSySDt4Ijx9we7zkkCFEaeqzQ7C3k7Ql9HcSA5Urh3n00pEKGxNLE'; 
 
 window.stripeInstance = window.stripeInstance || null; 
 window.stripeElementsContainer = window.stripeElementsContainer || null; 
 window.stripePaymentElementInstance = window.stripePaymentElementInstance || null; 
 
 let isCurrentlyMountingStripeGateway = false; 

 async function initializeFlatStripeCheckoutElement() { 
   if (isCurrentlyMountingStripeGateway) return; 

   // 1. RE-EVALUATE MATRIX PRIOR TO MOUNT TO FORCE CAPTURE ACTIVE ADDONS
   if (typeof window.updateDynamicPricingMatrixVanilla === "function") {
     window.updateDynamicPricingMatrixVanilla();
   }

   if (window.computedWizardGrandTotalAmount === undefined && window.wizardCalculatedFinalTotalAmount === undefined) {
     setTimeout(initializeFlatStripeCheckoutElement, 50);
     return;
   }

   const currentGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 0; 
   const totalAmountCents = Math.round(currentGrandTotal * 100); 

   if (window.stripePaymentElementInstance && window.lastProcessedStripeAmountCents === totalAmountCents) { 
     console.log("[Stripe Loader Guard] Identical checkout invoicing totals matched. Skipping duplicate mounting loop."); 
     return; 
   } 

   console.log("[Stripe Loader] Initiating payment element mount sequence..."); 
   const parentPanel = document.getElementById("step-panel-6") || document.getElementById("step-6"); 
   if (!parentPanel) return; 

   let mountPoint = document.getElementById("stripe-payment-element-mount-point"); 
   if (!mountPoint) { 
     mountPoint = document.createElement("div"); 
     mountPoint.id = "stripe-payment-element-mount-point"; 
     mountPoint.style.cssText = "min-height: 150px; margin: 20px 0; width: 100%; box-sizing: border-box;"; 
     const checkoutFormContainer = parentPanel.querySelector("form") || parentPanel; 
     checkoutFormContainer.appendChild(mountPoint); 
   } 

   // 🟢 FIX: ASSIGNED DUAL-ID TO ALIGN WITH TRANSACTION SUBMISSION PIPELINE
   let step6FooterButtons = parentPanel.querySelector(".wizard-footer-action-row");
   if (!step6FooterButtons) {
     const footerContainer = document.createElement("div");
     footerContainer.className = "wizard-footer-action-row";
     footerContainer.style.cssText = "display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border, #e2e8f0); clear: both; box-sizing: border-box;";
     footerContainer.innerHTML = `
       <button type="button" class="btn-wizard-nav-back" onclick="if(typeof window.goToPreviousWizardStep === 'function') { window.goToPreviousWizardStep(); }" style="background: transparent; border: 1px solid #cbd5e1; color: #475569; padding: 12px 24px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
         <i class="fa-solid fa-arrow-left" style="margin-right: 6px;"></i> Previous Step
       </button>
       <button type="button" class="btn-wizard-main btn-wizard-nav-next" id="wizard-next-trigger-btn" onclick="if(typeof window.executeOnboardingTransactionPayloadSubmitVanilla === 'function') { window.executeOnboardingTransactionPayloadSubmitVanilla(); }" style="background: #10b981; border: none; color: #ffffff; padding: 12px 32px; border-radius: 6px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.15);">
         Authorize Order Payment <i class="fa-solid fa-credit-card" style="margin-left: 6px;"></i>
       </button>
     `;
     const targetLocation = parentPanel.querySelector("form") || parentPanel;
     targetLocation.appendChild(footerContainer);
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

     mountPoint.innerHTML = ""; 
     window.lastProcessedStripeAmountCents = totalAmountCents; 

     requestAnimationFrame(() => { 
       setTimeout(() => { 
         if (window.stripePaymentElementInstance) { 
           window.stripePaymentElementInstance.mount("#stripe-payment-element-mount-point"); 
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

// ============================================================================ // 
// 💳 PURIFIED DYNAMIC TRANSACTION PIPELINE (ZERO FALLBACKS - ZERO HARDCODES)   // 
// ============================================================================ // 
window.executeOnboardingTransactionPayloadSubmitVanilla = async function() { 
 const submitBtn = document.getElementById("wizard-next-trigger-btn"); 
 const errorBanner = document.getElementById("step6-error-banner-target"); 
 
 if (errorBanner) { 
   errorBanner.style.display = "none"; 
   errorBanner.innerHTML = ""; 
 } 
 if (submitBtn) { 
   submitBtn.disabled = true; 
   submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...'; 
 } 

 try { 
   // 1. Core database provider verification guard 
   let supabaseClient = window.supabaseClient || window.supabase || window.sb; 
   if (!supabaseClient || typeof supabaseClient.from !== 'function') { 
     throw new Error("Validation Failure: Database driver reference context is uninitialized."); 
   } 

   // 2. Core active service descriptor configuration guard 
   const serviceKey = window.routeActiveServiceKey; 
   if (!serviceKey) { 
     throw new Error("Validation Failure: Active routing service tracking key is missing from window memory."); 
   } 

   // Generate absolute state-neutral cryptographic reference tracking identifier parameters 
   const uniqueTrackingToken = "F4U-" + Math.random().toString(36).substring(2, 10).toUpperCase(); 

   // 3. 🎯 DYNAMIC DATA ACQUISITION FROM ACTIVE REGISTRY SERIALIZER 
   const activeRegistry = window.formRegistry && window.formRegistry[serviceKey]; 
   let serializedDataPayload = {}; 
   if (activeRegistry && typeof activeRegistry.serialize === "function") { 
     serializedDataPayload = activeRegistry.serialize(); 
   } else { 
     const fieldsContainer = document.getElementById('dynamic-onboarding-fields-root'); 
     if (fieldsContainer) { 
       const activeFormInputs = fieldsContainer.querySelectorAll('input, select, textarea'); 
       activeFormInputs.forEach(inputNode => { 
         if (inputNode.id) serializedDataPayload[inputNode.id] = inputNode.value.trim(); 
       }); 
     } 
   } 

   // 4. 🎯 PURE DATA EXTRACTS & CONSTRAINT ENFORCEMENT 
   const rawEmailString = document.getElementById("lead_email")?.value || document.getElementById("portal_user_email")?.value || serializedDataPayload.email || window.currentCapturedUserEmailAddress || ""; 
   const customerEmail = String(rawEmailString).trim().toLowerCase(); 
   if (!customerEmail) { 
     throw new Error("Validation Failure: Customer communication email coordinate cannot be verified."); 
   } 

   const companyTitleInputNode = document.querySelector('input[id*="name"], input[id*="legal"], input[id*="company"]'); 
   const businessName = ( 
     companyTitleInputNode?.value || serializedDataPayload.company_name || serializedDataPayload.mbe_legal_name || document.getElementById("wizard-route-service-id")?.value || document.querySelector(".wizard-review-company-name")?.textContent || "" 
   ).trim(); 
   if (!businessName) { 
     throw new Error("Validation Failure: Active corporate registration or proposed company name field is unpopulated."); 
   } 

   const stateFormationField = document.querySelector('select[id*="state"], select[id*="formation"]'); 
   const stateFormation = (stateFormationField?.value || serializedDataPayload.state_of_formation || serializedDataPayload.mbe_state_of_formation || "").trim(); 
   if (!stateFormation) { 
     throw new Error("Validation Failure: Entity regional state of formation parameter selection is required."); 
   } 

   const rawServiceTitle = document.querySelector(".step-main-title")?.textContent || ""; 
   const cleanServiceTitle = rawServiceTitle.replace("YOUR SELECTION OVERVIEW", "").trim(); 
   if (!cleanServiceTitle) { 
     throw new Error("Validation Failure: Core enrollment catalog item title element is missing from layout view."); 
   } 

   const dynamicAddonsList = window.currentSelectedAddonsListArrayMatrix || []; 

   let activePlanTierLabel = window.routeActivePlanTierName; 
   if (!activePlanTierLabel) { 
     if (dynamicAddonsList.length > 0) { 
       activePlanTierLabel = dynamicAddonsList.map(addonItem => addonItem.title).join(" + "); 
     } else { 
       activePlanTierLabel = document.querySelector('span[id*="tier"], div[id*="plan"]')?.textContent?.trim(); 
     } 
   } 
   if (!activePlanTierLabel) { 
     throw new Error("Validation Failure: Purchased service tier descriptor configuration parameter cannot be compiled."); 
   }

   // 🟢 FIX: 5. FINANCIAL STRING EXTRACTION & COMPUTATION PASS
   // Pull data directly out of secure math memory nodes instead of breaking on missing element selectors.
   const calculatedBaseCost = parseFloat(window.computedWizardBaseTierAmount);
   const calculatedGrandCost = parseFloat(window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount);

   if (isNaN(calculatedBaseCost) || isNaN(calculatedGrandCost)) { 
     throw new Error("Validation Failure: Global invoice tracking variables are uncalculated or empty."); 
   } 

   // 6. BUILD SYSTEM DATA PROFILE DICTIONARY (JSONB METADATA SCHEMA CELL) 
   const secureMetadataPacket = { 
     email: customerEmail, 
     service_form_inputs: serializedDataPayload, 
     active_addons: dynamicAddonsList, 
     financials_subtotal: calculatedBaseCost, 
     selected_package_title: cleanServiceTitle, 
     plan_tier_label: activePlanTierLabel 
   }; 

   console.log("[Pipeline Engine] Metadata built successfully. Registering records with Supabase CRM database layers..."); 

   // 7. 🚀 SUPABASE DATA ARCHIVAL TRANSACTION PASS 
   const { error: dbError } = await supabaseClient 
     .from('wizard_onboarding_orders') 
     .insert([{ 
       tracking_token: uniqueTrackingToken, 
       customer_email: customerEmail, 
       company_name: businessName, 
       jurisdiction_state: stateFormation.toUpperCase(), 
       service_slug: serviceKey, 
       package_tier: activePlanTierLabel, 
       total_amount_paid: calculatedGrandCost, 
       form_payload_metadata: secureMetadataPacket, 
       payment_status: 'pending_gateway' 
     }]); 

   if (dbError) { 
     throw new Error(`Database Archival Abort: ${dbError.message}`); 
   } 

   console.log("[Pipeline Engine] Supabase log complete. Triggering Stripe secure cross-origin merchant handshake..."); 

   // 8. 🚀 STRIPE SECURE DISPATCH GATEWAY CONFIRMATION PASS 
   if (!window.stripeInstance || !window.stripeElementsContainer) { 
     throw new Error("Payment Gateway Abort: Stripe core engine references are missing or uninitialized."); 
   } 

   // Direct Stripe Payment Element confirmation loop 
   const { error: stripeConfirmationError } = await window.stripeInstance.confirmPayment({ 
     elements: window.stripeElementsContainer, 
     confirmParams: { 
       return_url: `${window.location.origin}/onboarding-confirmation-success?token=${uniqueTrackingToken}`, 
       receipt_email: customerEmail, 
       shipping: { 
         name: businessName, 
         address: { 
           line1: serializedDataPayload.billing_address || serializedDataPayload.street_address || "Form Entry", 
           state: stateFormation.toUpperCase(), 
           country: 'US' 
         } 
       } 
     } 
   }); 

   if (stripeConfirmationError) { 
     throw new Error(stripeConfirmationError.message); 
   } 

 } catch (pipelineException) { 
   console.error("[Transaction Engine Fatal Error]:", pipelineException); 
   
   if (submitBtn) { 
     submitBtn.disabled = false; 
     submitBtn.innerHTML = 'Complete Order & Submit Application'; 
   } 

   if (errorBanner) { 
     errorBanner.style.display = "block"; 
     errorBanner.innerHTML = `<div style="padding: 12px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; color: #991b1b; font-size: 0.85rem; font-family: sans-serif; font-weight: 600;">⚠️ ${pipelineException.message}</div>`; 
     errorBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); 
   } 
 } 
};
