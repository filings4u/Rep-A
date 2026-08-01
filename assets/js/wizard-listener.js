       // ðŸŽ¯ INTERACTIVE CAPTURE LOGIC: Listens to the submit action asynchronously
        setTimeout(() => {
            const subscribeForm = document.getElementById("compliance-subscribe-form");
            const wrapperZone = document.getElementById("f4u-subscribe-interface-wrapper");
            const emailInput = document.getElementById("subscribe-email-field");

            if (!subscribeForm || !wrapperZone || !emailInput) return;

            subscribeForm.addEventListener("submit", function(event) {
                event.preventDefault(); // Blocks default webpage refresh bug
                
                const userEmail = emailInput.value.trim();
                if (!userEmail) return;

                // Optional: Fire data streams here out to your active tracking dashboard or data webhook
                console.log(`Filing subscription captured successfully for user: ${userEmail}`);

                // Smoothly swap out the form elements with an unbreachable success state block
                wrapperZone.style.transition = "opacity 0.2s ease";
                wrapperZone.style.opacity = "0";

                setTimeout(() => {
                    wrapperZone.innerHTML = `
                        <div style="background: rgba(16, 185, 129, 0.04); border: 1px solid rgba(16, 185, 129, 0.2); padding: 32px; border-radius: 16px; text-align: center; box-shadow: 0 10px 25px rgba(10,31,68,0.02); box-sizing: border-box; width: 100%;">
                            <div style="color: #10b981; font-size: 2rem; margin-bottom: 8px;">âœ“</div>
                            <h4 style="margin: 0 0 6px 0; font-size: 1.25rem; font-weight: 800; color: #0a1f44;">Subscription Confirmed</h4>
                            <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.5;">Your profile is synchronized. Compliance updates will stream straight to <strong>${userEmail}</strong>.</p>
                        </div>
                    `;
                    wrapperZone.style.opacity = "1";
                }, 200);
            });
        }, 50);
