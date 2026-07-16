/**
 * Filings4U Platform Architecture
 * Target Module: assets/js/section4.js (Form 2290 Launchpad Features)
 * Standalone Step Matrix Injection Engine
 */
(function() {
    // 1. Verify existence of the launchpad section target container
    const launchpadTargetNode = document.getElementById("filings4u-launchpad-feature-root");
    if (!launchpadTargetNode) return;

    // 2. Inject structured step marketing matrix explaining the Form 2290 wizard mechanics
    launchpadTargetNode.innerHTML = `
        <div class="f4u-features-section" style="width: 100%; box-sizing: border-box; background: #ffffff; padding: 80px 24px; color: var(--navy, #0a1f44);">
            <div style="max-width: 1200px; margin: 0 auto;">
                
                <!-- CONTAINER CENTRAL SECTION HEADER -->
                <div style="text-align: center; margin-bottom: 50px; width: 100%;">
                    <h2 style="font-size: 2.2rem; font-weight: 900; margin: 0; color: var(--navy, #0a1f44);">
                        How the Heavy Use Tax 2290 Wizard Works
                    </h2>
                    <p style="color: var(--slate, #64748b); font-size: 1rem; margin-top: 10px; max-width: 600px; margin-left: auto; margin-right: auto;">
                        Skip the complex tax worksheets. Our structured sequence processes your tax filings efficiently and securely.
                    </p>
                </div>

                <!-- 3-STEP FLOW LOGISTICS GRID (FULL ROW WITH grid-column: span 2 OVERRIDES TO STOP HORIZONTAL SQUEEZING) -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; width: 100%; box-sizing: border-box;">
                    
                    <!-- STEP 1 CONTAINER CARD -->
                    <div style="background: var(--bg-light, #f8fafc); border: 1px solid var(--border, #e2e8f0); padding: 30px; border-radius: 8px; box-sizing: border-box; position: relative;">
                        <div style="position: absolute; top: -20px; left: 30px; background: var(--navy, #0a1f44); color: #ffffff; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(10,31,68,0.2);">
                            1
                        </div>
                        <h3 style="font-size: 1.25rem; font-weight: 800; margin: 15px 0 10px 0; color: var(--navy, #0a1f44);">
                            Enter Corporate &amp; Vehicle Data
                        </h3>
                        <p style="color: var(--slate, #64748b); font-size: 0.9rem; line-height: 1.5; margin: 0;">
                            Input your Employer Identification Number (EIN) and operating state data. The wizard validates your 17-digit alphanumeric structural VIN parameters automatically to prevent typos.
                        </p>
                    </div>

                    <!-- STEP 2 CONTAINER CARD -->
                    <div style="background: var(--bg-light, #f8fafc); border: 1px solid var(--border, #e2e8f0); padding: 30px; border-radius: 8px; box-sizing: border-box; position: relative;">
                        <div style="position: absolute; top: -20px; left: 30px; background: var(--navy, #0a1f44); color: #ffffff; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(10,31,68,0.2);">
                            2
                        </div>
                        <h3 style="font-size: 1.25rem; font-weight: 800; margin: 15px 0 10px 0; color: var(--navy, #0a1f44);">
                            Calculate Weight Thresholds
                        </h3>
                        <p style="color: var(--slate, #64748b); font-size: 0.9rem; line-height: 1.5; margin: 0;">
                            Declare taxable gross weight categories from 55,000 to over 75,000 lbs. If fleet assets accumulate fewer than 5,000 annual miles, the engine designates them as suspended and exempt from tax assessments.
                        </p>
                    </div>

                    <!-- STEP 3 CONTAINER CARD -->
                    <div style="background: var(--bg-light, #f8fafc); border: 1px solid var(--border, #e2e8f0); padding: 30px; border-radius: 8px; box-sizing: border-box; position: relative;">
                        <div style="position: absolute; top: -20px; left: 30px; background: var(--primary, #10b981); color: #ffffff; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(16,185,129,0.3);">
                            3
                        </div>
                        <h3 style="font-size: 1.25rem; font-weight: 800; margin: 15px 0 10px 0; color: var(--navy, #0a1f44);">
                            Receive Watermarked Schedule 1
                        </h3>
                        <p style="color: var(--slate, #64748b); font-size: 0.9rem; line-height: 1.5; margin: 0;">
                            Review your integrated invoice and finalize checkout metrics. The system immediately transmits records to IRS data servers, delivering your official watermarked Schedule 1 confirmation back to your dash.
                        </p>
                    </div>

                </div>

                <!-- DOWNWARD ACTION CONVERSION ROW -->
                <div style="text-align: center; margin-top: 50px; width: 100%;">
                    <a href="wizard-heavy-use-tax-2290.html" style="display: inline-block; background: var(--navy, #0a1f44); color: #ffffff; text-decoration: none; font-weight: 700; font-size: 0.95rem; padding: 14px 36px; border-radius: 6px; transition: background 0.2s ease;">
                        Launch Form 2290 Filing Wizard <i class="fa-solid fa-bolt" style="margin-left: 6px; color: var(--primary, #10b981);"></i>
                    </a>
                </div>

            </div>
        </div>
    `;
})();
