/**
 * filings4u Platform Architecture
 * Module: section6.js (Part 1 of 2)
 * Harmonized Subscription Engine & Styles
 */
(function() {
    // 1. Establish unique frontend target configurations to prevent collision
    const targetConfig = {
        elementId: "filings4u-subscribe-newsletter-root",
        styleId: "filings4u-subscribe-styles"
    };

    // 2. Inject completely self-contained responsive CSS layout rules matching design system tokens
    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} .subscribe-split-grid {
                display: grid !important;
                grid-template-columns: 1.1fr 0.9fr !important;
                gap: 60px !important;
                align-items: center !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }

            /* UNIFIED MOBILE VIEW RESPONSIVE MEDIA HOOKS */
            @media (max-width: 991px) {
                #${targetConfig.elementId} section {
                    padding: 40px 0 !important;
                }
                #${targetConfig.elementId} h2 {
                    font-size: 1.8rem !important;
                }
                #${targetConfig.elementId} .site-width-alignment-guard {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 20px !important;
                }
                #${targetConfig.elementId} .subscribe-split-grid {
                    grid-template-columns: 1fr !important;
                    gap: 40px !important;
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
                #${targetConfig.elementId} .secure-gateway-label-row {
                    flex-wrap: wrap !important;
                    white-space: normal !important;
                    line-height: 1.4 !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    window.FILINGS4U_SUBSCRIBE_TARGET = targetConfig.elementId;
})();

/* Part 2: Data Pipeline Router & Core Template Compiler */
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
        console.error("Subscription engine initialization runtime failure:", err);
    }
}
/**
 * filings4u Platform Architecture
 * Module: section6.js (Part 2 of 2)
 * Normalized HTML Input Compiler, Database Pipelines, & Handlers
 */

function executeSubscribeCompiler(zone, displayTitle) {
    // Normalize and capitalize title text cleanly matching your uppercase patterns
    const titleUpperCaseFormatted = displayTitle.replace(/-/g, ' ').split(" ").map(function(w) {
        if(["llc", "ein", "dot", "ucr", "clia", "dba", "scac", "boc-3", "boc"].includes(w.toLowerCase())) return w.toUpperCase();
        return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");

    zone.innerHTML = `
        <section style="background: #ffffff; padding: 60px 0; font-family: system-ui, sans-serif; width: 100% !important; max-width: 100% !important; box-sizing: border-box; margin: 0 !important;">
            <div class="site-width-alignment-guard" style="width: 1450px; max-width: 1450px; margin: 0 auto !important; padding: 0 40px; box-sizing: border-box !important;">
                <div class="subscribe-split-grid">
                    
                    <!-- LEFT SIDE TEXT ATTRIBUTE PANEL -->
                    <div style="width: 100%; box-sizing: border-box; text-align: left;">
                        <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.15); width: fit-content; align-self: flex-start;">Compliance Bulletins</span>
                        
                        <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15; letter-spacing: -0.5px;">
                            Stay Informed. <br><span style="color: #10b981;">Secure Growth.</span>
                        </h2>
                        
                        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0; max-width: 580px;">
                            Get actionable regulatory deadline text flashes, corporate filing advice, and federal state policy change updates sent straight to your box. Zero clutter. Direct compliance updates for your ${titleUpperCaseFormatted} files.
                        </p>
                    </div>
                    
                    <!-- RIGHT SIDE SECURE CAPTURE FORM FIELD PANEL -->
                    <div style="width: 100%; box-sizing: border-box;" id="f4u-subscribe-interface-wrapper">
                        <form id="compliance-subscribe-form" style="display: flex; gap: 14px; width: 100%; background: #ffffff; border: 1px solid #f1f5f9; padding: 20px; border-radius: 16px; box-shadow: 0 20px 40px rgba(10,31,68,0.06), 0 1px 3px rgba(10,31,68,0.02); box-sizing: border-box; margin: 0;">
                            <input type="email" id="subscribe-email-field" placeholder="Enter your business email..." required aria-label="Business Email" style="flex: 1; padding: 16px 22px; font-size: 0.95rem; font-weight: 500; border-radius: 8px; border: none; background: #ffffff; color: #0a1f44; outline: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,31,68,0.08); transition: box-shadow 0.25s ease; box-sizing: border-box; min-height: 44px;">
                            <button type="submit" id="subscribe-button" style="background: #10b981; color: #ffffff; border: none; font-weight: 700; font-size: 0.95rem; padding: 0 32px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2); transition: all 0.2s; box-sizing: border-box; min-height: 44px;">Subscribe</button>
                        </form>
                        <div id="form-status-message" style="display: none; transition: opacity 0.2s ease;"></div>
                        
                        <!-- FIXED LOGIC LAYER: Inline white-space: nowrap avoids text foldings or wrap leaks -->
                        <div class="secure-gateway-label-row" style="display: flex; align-items: center; gap: 6px; margin-top: 14px; font-size: 0.75rem; color: #64748b; padding-left: 4px; white-space: nowrap !important;">
                            <span style="color: #10b981; font-weight: 800; letter-spacing: 0.05em; display: inline-block;">🔒 ENCRYPTED GATEWAY</span> Your data is fully shielded under 256-bit protocol architectures.
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    `;

    setTimeout(function() {
        const sForm = zone.querySelector("#compliance-subscribe-form");
        const sMsg = zone.querySelector("#form-status-message");
        const sBtn = zone.querySelector("#subscribe-button");
        const sField = zone.querySelector("#subscribe-email-field");
        if (!sForm || !sMsg || !sBtn || !sField) return;

        sForm.addEventListener("submit", async function(e) {
            e.preventDefault();
            const email = sField.value.trim().toLowerCase();
            if (!email) return;

            sBtn.disabled = true;
            sBtn.innerText = "Processing...";
            sMsg.style.display = "none";

            try {
                const url = 'https://supabase.co';
                const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
                
                const res = await fetch(`${url}/rest/v1/subscribers`, {
                    method: "POST",
                    headers: {
                        "apikey": key,
                        "Authorization": "Bearer " + key,
                        "Content-Type": "application/json",
                        "Prefer": "return=minimal"
                    },
                    body: JSON.stringify({ email: email, created_at: new Date().toISOString() })
                });

                if (res.status === 409 || !res.ok) {
                    if (res.status === 409) {
                        sMsg.innerText = "ℹ️ This business email is already signed up for updates!";
                        sMsg.style.cssText = "display: block; background: rgba(59,130,246,0.1); color: #3b82f6; border: 1px solid rgba(59,130,246,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; font-size: 0.9rem;";
                        sField.value = "";
                        return;
                    }
                    throw new Error("Pipeline network code: " + res.status);
                }

                sMsg.innerText = "🎉 Subscription successful! Welcome to your real-time compliance feed.";
                sMsg.style.cssText = "display: block; background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; font-size: 0.9rem;";
                sField.value = "";
            } catch (err) {
                sMsg.innerText = "⚠️ Connection timeout. Unable to dispatch registration data. Please try again.";
                sMsg.style.cssText = "display: block; background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.2); margin-top: 14px; padding: 12px 16px; border-radius: 8px; font-weight: 600; font-size: 0.9rem;";
            } finally {
                sBtn.disabled = false;
                sBtn.innerText = "Subscribe";
            }
        });
    }, 50);
}

window.renderMasterSubscribeEngine = renderMasterSubscribeEngine;
