// ============================================================================ //
// 💳 STEP 6 SECURE GATEWAY REAL-TIME INVOICE REFRESHER & STRIPE BRIDGE         //
// ============================================================================ //
/**
 * Synchronizes the live checkout total straight onto the Step 6 indicator node
 * and automatically kicks off the Stripe inputs initialization routine.
 */
function forceStep6StripePaymentGatewayRefreshPass() { 
    console.log("[Payment Gate] Step 6 active view detected. Synchronizing invoicing values..."); 
    const paymentTotalTextNode = document.getElementById("payment-gateway-total-display"); 
    
    // 🧠 🟢 CRITICAL PRICING MATRIX REALIGNMENT: 
    // Extract the live grand total variable explicitly computed by your central calculations engine 
    const activeRunningTotalAmount = window.summaryCalculatedGrandTotal || window.finalComputedOnboardingInvoiceTotalAmount || window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || parseFloat(localStorage.getItem('wizard_calculated_grand_total')) || 0; 
    
    if (paymentTotalTextNode) { 
        paymentTotalTextNode.textContent = `$${parseFloat(activeRunningTotalAmount).toFixed(2)}`; 
        console.log(`[Payment Gate] Step 6 balance display successfully hydrated: $${parseFloat(activeRunningTotalAmount).toFixed(2)}`); 
    } 
    
    // 💳 AUTOMATED STRIPE INTERFACE INITIALIZER WITH SINGLE-MOUNT SAFETY GATE: 
    // Prevents double initialization loops from spawning duplicate credit card iframe inputs. 
    const stripeInputContainer = document.getElementById("stripe-card-element") || document.getElementById("card-element"); 
    if (stripeInputContainer && stripeInputContainer.children.length > 0) { 
        console.log("[Payment Gate] Stripe element context already pre-rendered safely inside container."); 
        return; 
    } 
    
    if (typeof window.initializeFlatStripeCheckoutElement === "function") { 
        window.initializeFlatStripeCheckoutElement(); 
    } else { 
        console.warn("[Payment Gate] 'initializeFlatStripeCheckoutElement' engine initialization is missing from global context."); 
    } 
} 

// Export the method safely to global scope window records 
window.forceStep6StripePaymentGatewayRefreshPass = forceStep6StripePaymentGatewayRefreshPass; 

// 🟢 MOUNT LAYER PROTECTION: Setup the Step 6 visibility observer inside DOMContentLoaded to ensure elements are active 
document.addEventListener("DOMContentLoaded", () => { 
    const step6PanelContainerNode = document.getElementById("step-panel-6") || document.getElementById("step-6"); 
    
    if (step6PanelContainerNode) { 
        const paymentPanelViewObserver = new MutationObserver(() => { 
            if (step6PanelContainerNode.style.display !== "none") { 
                forceStep6StripePaymentGatewayRefreshPass(); 
                setTimeout(forceStep6StripePaymentGatewayRefreshPass, 60); 
            } 
        }); 
        paymentPanelViewObserver.observe(step6PanelContainerNode, { attributes: true, attributeFilter: ["style"] }); 
        window.paymentPanelViewObserverInstance = paymentPanelViewObserver; 
        console.log("[Payment Gate] Step 6 structural MutationObserver attached cleanly."); 
    } else { 
        console.warn("[Payment Gate Warning] step-panel-6 container element was missing during observer allocation."); 
    } 
});


// ============================================================================ //
// 💳 MASTER TRANSACTION SUBMISSION ROUTER (COMBINED & WRAPPED)                  //
// ============================================================================ //
async function executeOnboardingTransactionPayloadSubmitVanilla() { 
    console.log("[Stripe Dispatch] Packing customer inputs and preparing secure gateway channels..."); 
    
    let liveStripe = window.stripeInstance; 
    let liveElements = window.stripeElementsContainer; 
    let livePaymentElement = window.stripePaymentElementInstance; 

    if (!liveStripe && typeof Stripe !== "undefined") { 
        window.stripeInstance = Stripe('pk_live_51TTy4i0dNjSlvyScbq19wWCQjOhDKdFMUzkV4Et4ok1NAWFFab4qV2KyZB5CwAp6dAvpLSuMZq2xKAR3BZ1gfuTM00KtmvEgc4'); 
        liveStripe = window.stripeInstance; 
    } 

    if (!liveStripe || !livePaymentElement || !liveElements) { 
        alert("Stripe Integration Failure: The secure gateway payment component has not finished mounting inside Step 6."); 
        return; 
    } 

    var activeNextButtonReference = document.getElementById('wizard-next-trigger-btn') || document.getElementById('poa-next-btn') || document.querySelector("#step-panel-6 .btn-wizard-main"); 
    if (activeNextButtonReference) { 
        activeNextButtonReference.disabled = true; 
        activeNextButtonReference.style.background = '#64748b'; 
        activeNextButtonReference.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Secure Payment...'; 
    } 

    let auxiliaryAddonsArray = []; 
    if (window.currentCartState && Array.isArray(window.currentCartState.addons)) { 
        window.currentCartState.addons.forEach(addon => { 
            if(addon.id) auxiliaryAddonsArray.push(addon.id); 
        }); 
    } else { 
        document.querySelectorAll('.addon-checkbox:checked, .upsell-checkbox:checked').forEach(checkbox => { 
            auxiliaryAddonsArray.push(checkbox.id || checkbox.getAttribute('data-id')); 
        }); 
    } 

    const extractProductionFieldValue = (elementIdentifier) => { 
        const targetNode = document.getElementById(elementIdentifier) || document.querySelector(`[name="${elementIdentifier}"]`) || document.querySelector(`[name="${elementIdentifier}[]"]`); 
        return targetNode ? targetNode.value.trim() : ''; 
    }; 

    const safeServiceKey = window.routeActiveServiceKey || ""; 
    const safePlanKey = window.routeActivePlanKey || ""; 
    const targetRunningGrandTotal = window.computedWizardGrandTotalAmount || window.wizardCalculatedFinalTotalAmount || 0; 
    const targetRunningGovFee = window.computedWizardStateGovernmentFee || 0; 

    const primarySubmissionPayloadData = { 
        transaction_hash_id: window.f4u_tx_session_hash || "", 
        target_service_id: safeServiceKey, 
        deployment_speed_tier: safePlanKey, 
        authority_jurisdiction: extractProductionFieldValue('wizard-target-jurisdiction') || extractProductionFieldValue('formation_state'), 
        legal_entity_name: extractProductionFieldValue('llc_proposed_name') || extractProductionFieldValue('ent_legal_name') || extractProductionFieldValue('company_name'), 
        taxpayer_ein: extractProductionFieldValue('llc_existing_ein_field') || extractProductionFieldValue('ent_ein') || '', 
        office_address_street: extractProductionFieldValue('ent_address_street') || extractProductionFieldValue('member_street_1'), 
        office_address_city: extractProductionFieldValue('ent_address_city') || extractProductionFieldValue('member_city_1'), 
        office_address_zip: extractProductionFieldValue('ent_address_zip') || extractProductionFieldValue('member_zip_1'), 
        communications_email: extractProductionFieldValue('company_email') || extractProductionFieldValue('portal_user_email'), 
        active_addons_list: auxiliaryAddonsArray, 
        printed_signature_auth: extractProductionFieldValue('poa_typed_signature') || extractProductionFieldValue('signature_input'), 
        digital_signature_raster_vector: localStorage.getItem("poa-signature-pad-data") || null, 
        financials_subtotal_amount: targetRunningGrandTotal - targetRunningGovFee, 
        financials_grand_total_charge: targetRunningGrandTotal, 
        client_session_timestamp: new Date().toISOString() 
    }; 

    try { 
        sessionStorage.setItem("f4u_finalized_checkout_receipt_manifest", JSON.stringify(primarySubmissionPayloadData)); 
    } catch (sessionCacheError) { 
        console.error("[Storage Error] Receipt serialization failed:", sessionCacheError); 
    } 

    if (typeof window.processFinalSecureCheckoutSubmission === "function") { 
        try { 
            await window.processFinalSecureCheckoutSubmission(primarySubmissionPayloadData); 
        } catch (backendError) { 
            console.error("[Database Sync Error] Pre-checkout registry failed:", backendError); 
        } 
    } else { 
        console.warn("[Database Sync Warning] window.processFinalSecureCheckoutSubmission missing from memory runtime mapping layers."); 
    } 

    const baseOriginPath = window.location.origin + window.location.pathname.replace('wizard.html', ''); 
    const successRedirectionUrl = baseOriginPath + "success.html"; 
    const communicationEmailValue = primarySubmissionPayloadData.communications_email || ''; 

    try { 
        const { error } = await liveStripe.confirmPayment({ 
            elements: liveElements, 
            confirmParams: { 
                return_url: successRedirectionUrl, 
                receipt_email: communicationEmailValue 
            } 
        }); 
        
        if (error) { 
            alert("Payment Transaction Rejected: " + error.message); 
            if (activeNextButtonReference) { 
                activeNextButtonReference.disabled = false; 
                activeNextButtonReference.style.background = '#10b981'; 
                activeNextButtonReference.innerHTML = ' Complete Order & Submit'; 
            } 
        } 
    } catch (stripeGatewayException) { 
        console.error("[Stripe Connection Error] Critical network exception caught:", stripeGatewayException); 
        if (activeNextButtonReference) { 
            activeNextButtonReference.disabled = false; 
            activeNextButtonReference.style.background = '#10b981'; 
            activeNextButtonReference.innerHTML = ' Complete Order & Submit'; 
        } 
    } 
} 

window.executeOnboardingTransactionPayloadSubmitVanilla = executeOnboardingTransactionPayloadSubmitVanilla;
