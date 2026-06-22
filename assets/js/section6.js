/**
 * filings4u Platform Architecture
 * Module: section6.js (Part 1 - Isolated Stylesheet Engine)
 */

(function() {
    // 1. Establish unique frontend target configurations to prevent collision
    const targetConfig = {
        elementId: "filings4u-subscribe-newsletter-root",
        styleId: "filings4u-subscribe-styles"
    };

    // 2. Inject completely self-contained responsive CSS layout rules
    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .subscribe-split-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 60px;
                align-items: center;
                width: 100%;
            }

            /* MOBILE SCREEN LAYOUT OVERRIDES */
            @media (max-width: 768px) {
                #${targetConfig.elementId} section {
                    padding: 40px 0 !important;
                }
                #${targetConfig.elementId} h2 {
                    font-size: 1.8rem !important;
                }
                #${targetConfig.elementId} .subscribe-split-grid {
                    grid-template-columns: 1fr !important;
                    gap: 30px !important;
                }
                #${targetConfig.elementId} form {
                    flex-direction: column !important;
                    gap: 12px !important;
                    padding: 16px !important;
                }
                #${targetConfig.elementId} button {
                    padding: 14px !important;
                    width: 100% !important;
                    height: auto !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    window.FILINGS4U_SUBSCRIBE_TARGET = targetConfig.elementId;
})();


/* Part 2 Update inside section6.js */
function renderMasterSubscribeEngine(overrideTargetId, metaDataRecord) {
    try {
        const targetId = overrideTargetId || window.FILINGS4U_SUBSCRIBE_TARGET || "filings4u-subscribe-newsletter-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        let slug = "index";
        const rawPathname = window.location.pathname.split("/").pop().toLowerCase().trim();
        if (rawPathname !== "" && !rawPathname.includes("index") && !rawPathname.includes("home")) {
            slug = rawPathname.replace(".html", "");
        }
        
        const contextSource = metaDataRecord || (window.PLATFORM_METRICS_CATALOG && window.PLATFORM_METRICS_CATALOG[slug]) || {};
        const displayTitle = contextSource.title || contextSource.hero_title || "Filing";

        executeSubscribeCompiler(zone, displayTitle);
    } catch (err) {
        console.error(err);
    }
}


/* Part 3: Responsive Subscription Template HTML Compiler (Fragment 1 of 2) */
function executeSubscribeCompiler(zone, displayTitle) {
    zone.innerHTML = `
    <section style="background: #ffffff; padding: 80px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; margin: 0 !important;">
        <div class="site-width-alignment-guard" style="width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important;">
            
            <div class="subscribe-split-grid">
                
                <!-- LEFT SIDE TEXT ATTRIBUTE PANEL -->
                <div style="width: 100%; box-sizing: border-box;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; background: rgba(16, 185, 129, 0.08); padding: 4px 12px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15);">Compliance Bulletins</span>
                    <h2 style="color: #0a1f44; font-size: 2.6rem; font-weight: 900; margin: 0 0 16px 0; line-height: 1.15; letter-spacing: -0.5px;">Stay Informed. <br><span style="color: #10b981;">Secure Growth.</span></h2>
                    <p style="color: #475569; font-size: 1.05rem; line-height: 1.6; margin: 0; max-width: 580px;">Get actionable regulatory deadline text flashes, corporate filing advice, and federal state policy change updates sent straight to your box. Zero clutter. Direct compliance updates for your ${displayTitle} files.</p>
                </div>
                
                <!-- RIGHT SIDE SECURE CAPTURE FORM FIELD PANEL -->
                <div style="width: 100%; box-sizing: border-box;" id="f4u-subscribe-interface-wrapper">
                    <form id="compliance-subscribe-form" style="display: flex; gap: 14px; width: 100%; background: #ffffff; border: 1px solid #f1f5f9; padding: 20px; border-radius: 16px; box-shadow: 0 20px 40px rgba(10,31,68,0.06), 0 1px 3px rgba(10,31,68,0.02); box-sizing: border-box; margin: 0;">
                        <input type="email" id="subscribe-email-field" placeholder="Enter your business email..." required aria-label="Business Email" style="flex: 1; padding: 16px 22px; font-size: 0.95rem; font-weight: 500; border-radius: 8px; border: none; background: #ffffff; color: #0a1f44; outline: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08); transition: box-shadow 0.25s ease; box-sizing: border-box;" onfocus="this.style.boxShadow='inset 0 2px 4px rgba(0,0,0,0.02), 0 0 0 3px rgba(16, 185, 129, 0.15), 0 0 0 1px #10b981'" onblur="this.style.boxShadow='inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08)'">
                        <button type="submit" id="subscribe-button" style="background: #10b981; color: #ffffff; border: none; font-weight: 700; font-size: 0.95rem; padding: 0 32px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); transition: all 0.2s; box-sizing: border-box;" onmouseover="this.style.backgroundColor='#0e9f6e'; this.style.transform='translateY(-1px)';" onmouseout="this.style.backgroundColor='#10b981'; this.style.transform='translateY(0)';">Subscribe</button>
                    </form>
                    
                    <div id="form-status-message" style="display: none; transition: opacity 0.2s ease;"></div>
                    
                    <div style="display: flex; align-items: center; gap: 6px; margin-top: 14px; font-size: 0.75rem; color: #64748b; padding-left: 4px;">
                        <span style="color: #10b981; font-weight: 800; letter-spacing: 0.05em;">🔒 ENCRYPTED GATEWAY</span> Your data is fully shielded under 256-bit protocol architectures.
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    `;

    // TIMING RESYNC FIX: Buffer to ensure elements are parsed before querying
    setTimeout(function() {
        const subscribeForm = zone.querySelector("#compliance-subscribe-form");
        const statusMessage = zone.querySelector("#form-status-message");
        const submitButton = zone.querySelector("#subscribe-button");
        const emailInput = zone.querySelector("#subscribe-email-field");

        if (!subscribeForm || !statusMessage || !submitButton || !emailInput) return;
        subscribeForm.addEventListener("submit", async function(e) {
            e.preventDefault();
            
            const targetCleanEmail = emailInput.value.trim().toLowerCase();
            if (!targetCleanEmail) return;

            // Enter loading processing states
            submitButton.disabled = true;
            submitButton.innerText = "Processing...";
            statusMessage.style.display = "none";

            try {
                const backupUrl = 'https://supabase.co';
                const backupKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
                
                // Direct network payload dispatch to the Supabase endpoint
                const response = await fetch(`${backupUrl}/rest/v1/subscribers`, {
                    method: "POST",
                    headers: {
                        "apikey": backupKey,
                        "Authorization": "Bearer " + backupKey,
                        "Content-Type": "application/json",
                        "Prefer": "return=minimal"
                    },
                    body: JSON.stringify({
                        email: targetCleanEmail,
                        created_at: new Date().toISOString()
                    })
                });

                // Evaluate response and catch row uniqueness constraint conflicts
                if (response.status === 409 || !response.ok) {
                    if (response.status === 409) {
                        statusMessage.innerText = "ℹ️ This business email is already signed up for real-time compliance updates!";
                        statusMessage.style.cssText = "display: block; background: rgba(59,130,246,0.1); color: #3b82f6; border: 1px solid rgba(59,130,246,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; text-align: left; font-size: 0.9rem;";
                        emailInput.value = "";
                        return;
                    }
                    throw new Error("Server returned error code profile: " + response.status);
                }

                // Output Subscription Success Message
                statusMessage.innerText = "🎉 Subscription successful! Welcome to your real-time compliance feed.";
                statusMessage.style.cssText = "display: block; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; text-align: left; font-size: 0.9rem;";
                emailInput.value = "";

            } catch (err) {
                console.error("[Supabase Pipeline Error]:", err);
                statusMessage.innerText = "⚠️ Connection timeout. Unable to dispatch registration data. Please try again.";
                statusMessage.style.cssText = "display: block; background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; text-align: left; font-size: 0.9rem;";
            } finally {
                submitButton.disabled = false;
                submitButton.innerText = "Subscribe";
            }
        });
    }, 50);
}


/* Part 4: Global Module Binding */
window.renderMasterSubscribeEngine = renderMasterSubscribeEngine;