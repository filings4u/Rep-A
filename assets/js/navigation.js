/**
 * filings4u Platform Architecture
 * Module: navigation.js (Part 1 - Isolated Stylesheet Engine)
 */

(function() {
    // 1. Establish unique frontend target configurations to prevent collision
    const targetConfig = {
        elementId: "filings4u-global-navigation-root",
        styleId: "filings4u-nav-styles"
    };

    // 2. Inject completely self-contained responsive CSS layout rules
    if (!document.getElementById(targetConfig.styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = targetConfig.styleId;
        styleSheet.textContent = `
            #${targetConfig.elementId} nav {
                box-sizing: border-box;
            }
            #${targetConfig.elementId} .nav-item-dropdown {
                display: inline-block;
            }
            #${targetConfig.elementId} .dropdown-content {
                display: none;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                background-color: #ffffff;
                min-width: 480px;
                box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 24px;
                z-index: 9999;
                box-sizing: border-box;
            }
            #${targetConfig.elementId} .mega-panel-two-col {
                min-width: 480px;
                display: none; /* Controlled by JS/Hover */
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
            }
            #${targetConfig.elementId} .mega-panel-three-col {
                min-width: 720px;
                display: none; /* Controlled by JS/Hover */
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
            }
            #${targetConfig.elementId} .nav-item-dropdown:hover .dropdown-content {
                display: grid;
            }
            #${targetConfig.elementId} .mega-column a {
                display: block;
                color: #475569;
                text-decoration: none;
                font-size: 0.9rem;
                font-weight: 500;
                padding: 8px 0;
                transition: color 0.2s ease;
            }
            #${targetConfig.elementId} .mega-column a:hover {
                color: #10b981;
            }
            #${targetConfig.elementId} .mobile-toggle-btn {
                display: none;
                background: none;
                border: none;
                font-size: 1.75rem;
                color: #0a1f44;
                cursor: pointer;
            }
            
            /* MOBILE DISPLAY RULES */
            @media (max-width: 1024px) {
                #${targetConfig.elementId} .mobile-toggle-btn {
                    display: block;
                }
                #${targetConfig.elementId} .nav-links {
                    display: none !important;
                    flex-direction: column;
                    position: absolute;
                    top: 80px;
                    left: 0;
                    width: 100%;
                    background: #ffffff;
                    border-bottom: 1px solid #e2e8f0;
                    padding: 24px;
                    box-sizing: border-box;
                    gap: 20px !important;
                    align-items: flex-start !important;
                    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
                    z-index: 9998;
                    max-height: calc(100vh - 80px);
                    overflow-y: auto;
                }
                #${targetConfig.elementId} .nav-links.mobile-active {
                    display: flex !important;
                }
                #${targetConfig.elementId} .nav-item-dropdown {
                    width: 100%;
                }
                #${targetConfig.elementId} .dropdown-content {
                    position: static !important;
                    transform: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    padding: 12px 0 0 16px !important;
                    width: 100% !important;
                    min-width: 100% !important;
                    gap: 16px !important;
                }
                #${targetConfig.elementId} .nav-item-dropdown:hover .dropdown-content {
                    display: none; /* Disable hover triggers on touch viewports */
                }
                #${targetConfig.elementId} .nav-item-dropdown.mobile-open .dropdown-content {
                    display: grid !important;
                }
                #${targetConfig.elementId} .btn-client-portal {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                    margin-top: 10px;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
    
    window.FILINGS4U_NAV_TARGET = targetConfig.elementId;
})();

/* Part 2: Desktop Mega Menu Formats */
(function() {
    const styleSheet = document.getElementById("filings4u-nav-styles");
    if (styleSheet) {
        styleSheet.textContent += `
            #filings4u-global-navigation-root .mega-panel-two-col {
                min-width: 480px;
                display: none;
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
            }
            #filings4u-global-navigation-root .mega-panel-three-col {
                min-width: 720px;
                display: none;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
            }
            #filings4u-global-navigation-root .nav-item-dropdown:hover .dropdown-content {
                display: grid;
            }
            #filings4u-global-navigation-root .mega-column a {
                display: block;
                color: #475569;
                text-decoration: none;
                font-size: 0.9rem;
                font-weight: 500;
                padding: 8px 0;
                transition: color 0.2s ease;
            }
            #filings4u-global-navigation-root .mega-column a:hover {
                color: #10b981;
            }
            #filings4u-global-navigation-root .mobile-toggle-btn {
                display: none;
                background: none;
                border: none;
                font-size: 1.75rem;
                color: #0a1f44;
                cursor: pointer;
            }
        `;
    }
})();

/* Part 3: Mobile Layout Overrides */
(function() {
    const styleSheet = document.getElementById("filings4u-nav-styles");
    if (styleSheet) {
        styleSheet.textContent += `
            @media (max-width: 1024px) {
                #filings4u-global-navigation-root .mobile-toggle-btn {
                    display: block;
                }
                #filings4u-global-navigation-root .nav-links {
                    display: none !important;
                    flex-direction: column;
                    position: absolute;
                    top: 80px;
                    left: 0;
                    width: 100%;
                    background: #ffffff;
                    border-bottom: 1px solid #e2e8f0;
                    padding: 24px;
                    box-sizing: border-box;
                    gap: 20px !important;
                    align-items: flex-start !important;
                    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
                    z-index: 9998;
                    max-height: calc(100vh - 80px);
                    overflow-y: auto;
                }
                #filings4u-global-navigation-root .nav-links.mobile-active {
                    display: flex !important;
                }
                #filings4u-global-navigation-root .nav-item-dropdown {
                    width: 100%;
                }
                #filings4u-global-navigation-root .dropdown-content {
                    position: static !important;
                    transform: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    padding: 12px 0 0 16px !important;
                    width: 100% !important;
                    min-width: 100% !important;
                    gap: 16px !important;
                }
                #filings4u-global-navigation-root .nav-item-dropdown:hover .dropdown-content {
                    display: none;
                }
                #filings4u-global-navigation-root .nav-item-dropdown.mobile-open .dropdown-content {
                    display: grid !important;
                }
                #filings4u-global-navigation-root .btn-client-portal {
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                    margin-top: 10px;
                }
            }
        `;
    }
})();

/* Part 4: Core Engine Initialization & Structure */
function renderDynamicGlobalCorporateNavigation() {
    try {
        const targetId = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";
        const zone = document.getElementById(targetId);
        if (!zone) return;

        zone.innerHTML = `
        <nav style="font-family: system-ui, sans-serif; background: #ffffff; border-bottom: 1px solid #e2e8f0; width: 100%; position: relative;">
            <div class="nav-content-wrapper" style="max-width: 1450px; margin: 0 auto; padding: 0 40px; display: flex; justify-content: space-between; align-items: center; height: 80px; box-sizing: border-box;">
                <a href="index.html" class="logo-link" style="display: flex; align-items: center;">
                    <img src="images/logo.png" alt="filings4u" class="logo" style="height: 40px; width: auto; object-fit: contain;">
                </a>
                <button class="mobile-toggle-btn" id="mobile-menu-trigger" type="button" aria-label="Toggle Navigation" aria-expanded="false">☰</button>
                <div class="nav-links" id="nav-links-container" style="display: flex; align-items: center; gap: 32px;">
                    <!-- Dropdown blocks insert here -->
                </div>
            </div>
        </nav>
        `;
    } catch (err) {
        console.error("Navigation compiler core block failure:", err);
    }
}
window.renderDynamicGlobalCorporateNavigation = renderDynamicGlobalCorporateNavigation;

/* Part 5: Formations Dropdown Block Injection */
(function() {
    const targetId = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";
    setTimeout(function() {
        const linksContainer = document.querySelector("#" + targetId + " #nav-links-container");
        if (!linksContainer) return;

        const dropdownHTML = `
        <div class="nav-item-dropdown static-dropdown">
            <a href="#" class="dropdown-toggle" style="color: #0a1f44; text-decoration: none; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center; padding: 10px 0;">Formations <span style="font-size:0.7rem; margin-left:4px; pointer-events: none;">▼</span></a>
            <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Popular Formations</span>
                    <a href="llc-formation.html">LLC Formation</a>
                    <a href="corporations.html">Corporations (C/S-Corp)</a>
                    <a href="sole-proprietorship.html">Sole Proprietorship</a>
                </div>
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Specialty Structures</span>
                    <a href="dba-registration.html">DBA Registration</a>
                    <a href="nonprofits.html">Nonprofit Organization</a>
                    <a href="series-llc.html">Series LLC</a>
                </div>
            </div>
        </div>`;
        
        linksContainer.insertAdjacentHTML('beforeend', dropdownHTML);
    }, 10);
})();


/* Part 6: Compliance Dropdown Block Injection */
(function() {
    const targetId = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";
    setTimeout(function() {
        const linksContainer = document.querySelector("#" + targetId + " #nav-links-container");
        if (!linksContainer) return;

        const dropdownHTML = `
        <div class="nav-item-dropdown static-dropdown">
            <a href="#" class="dropdown-toggle" style="color: #0a1f44; text-decoration: none; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center; padding: 10px 0;">Compliance <span style="font-size:0.7rem; margin-left:4px; pointer-events: none;">▼</span></a>
            <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Entity Health</span>
                    <a href="annual-reports.html">Annual Reports</a>
                    <a href="operating-agreement.html">Operating Agreement</a>
                    <a href="registered-agent.html">Registered Agent</a>
                </div>
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Licensing & Exit</span>
                    <a href="business-licenses.html">Business Licenses</a>
                    <a href="employer-id-ein.html">Employer ID (EIN)</a>
                    <a href="dissolution.html">Entity Dissolution</a>
                </div>
            </div>
        </div>`;
        
        linksContainer.insertAdjacentHTML('beforeend', dropdownHTML);
    }, 20);
})();


/* Part 7: Tax Filings Dropdown Block Injection */
(function() {
    const targetId = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";
    setTimeout(function() {
        const linksContainer = document.querySelector("#" + targetId + " #nav-links-container");
        if (!linksContainer) return;

        const dropdownHTML = `
        <div class="nav-item-dropdown static-dropdown">
            <a href="#" class="dropdown-toggle" style="color: #0a1f44; text-decoration: none; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center; padding: 10px 0;">Tax Filings <span style="font-size:0.7rem; margin-left:4px; pointer-events: none;">▼</span></a>
            <div class="dropdown-content mega-panel-two-col">
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Income & Operations</span>
                    <a href="federal-tax.html">Federal Income Tax</a>
                    <a href="state-tax.html">State Income Tax</a>
                    <a href="franchise-tax.html">Franchise Tax Filing</a>
                </div>
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Sales & Payroll</span>
                    <a href="sales-tax-registration.html">Sales Tax Registration</a>
                    <a href="payroll-tax-940-941.html">Payroll Tax (940/941)</a>
                    <a href="heavy-use-tax-2290.html">Heavy Use Tax (2290)</a>
                </div>
            </div>
        </div>`;
        
        linksContainer.insertAdjacentHTML('beforeend', dropdownHTML);
    }, 30);
})();


/* Part 8: DOT & Fleet Dropdown Block Injection */
(function() {
    const targetId = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";
    setTimeout(function() {
        const linksContainer = document.querySelector("#" + targetId + " #nav-links-container");
        if (!linksContainer) return;

        const dropdownHTML = `
        <div class="nav-item-dropdown static-dropdown">
            <a href="#" class="dropdown-toggle" style="color: #0a1f44; text-decoration: none; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center; padding: 10px 0;">DOT & Fleet <span style="font-size:0.7rem; margin-left:4px; pointer-events: none;">▼</span></a>
            <div class="dropdown-content mega-panel-three-col">
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Authority Setup</span>
                    <a href="owner-operators.html">Owner Operators</a>
                    <a href="trucker-authority.html">Trucker Authority</a>
                    <a href="broker-authority.html">Broker Authority</a>
                    <a href="ucr-registration.html">UCR Registration</a>
                </div>
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Compliance & Regs</span>
                    <a href="dot-consortium.html">DOT Consortium</a>
                    <a href="driver-file.html">Driver Qualification File</a>
                    <a href="process-agents-boc-3.html">Process Agent (BOC-3)</a>
                    <a href="ifta-registration.html">IFTA Registration</a>
                </div>
                <div class="mega-column">
                    <span class="column-title" style="display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #10b981; margin-bottom: 10px;">Insurance & Risk</span>
                    <a href="licenses-permits.html">Licenses & Permits</a>
                    <a href="trucker-insurance-quote.html">Trucker Insurance</a>
                    <a href="broker-insurance-quote.html">Broker Insurance</a>
                    <a href="new-entrant-audit.html">New Entrant Audit</a>
                </div>
            </div>
        </div>`;
        
        linksContainer.insertAdjacentHTML('beforeend', dropdownHTML);
    }, 40);
})();


/* Part 9: Client Portal & Interactive Core Setup */
(function() {
    const targetId = window.FILINGS4U_NAV_TARGET || "filings4u-global-navigation-root";
    setTimeout(function() {
        const zone = document.getElementById(targetId);
        const linksContainer = zone ? zone.querySelector("#nav-links-container") : null;
        if (!zone || !linksContainer) return;

        // 1. Append the portal anchor button safely to the list array
        const portalHTML = `<a href="https://filings4u.com" class="btn-client-portal" style="background: #10b981; color: #ffffff; text-decoration: none; font-weight: 700; padding: 10px 20px; border-radius: 6px; font-size: 0.9rem; transition: background 0.2s;">Client Portal</a>`;
        linksContainer.insertAdjacentHTML('beforeend', portalHTML);

        // 2. Mobile layout menu trigger logic connection
        const menuTrigger = zone.querySelector("#mobile-menu-trigger");
        if (menuTrigger) {
            menuTrigger.addEventListener("click", function(e) {
                e.stopPropagation();
                const isActive = linksContainer.classList.toggle("mobile-active");
                menuTrigger.setAttribute("aria-expanded", isActive ? "true" : "false");
            });
        }

        // 3. Mobile accordion dropdown layout click events
        const dropdownToggles = zone.querySelectorAll(".dropdown-toggle");
        dropdownToggles.forEach(function(toggle) {
            toggle.addEventListener("click", function(e) {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    const parentDropdown = toggle.parentElement;
                    
                    zone.querySelectorAll(".nav-item-dropdown").forEach(function(item) {
                        if (item !== parentDropdown) item.classList.remove("mobile-open");
                    });
                    
                    parentDropdown.classList.toggle("mobile-open");
                }
            });
        });

        // 4. Click out canvas dismissal behavior rules
        document.addEventListener("click", function() {
            if (linksContainer) linksContainer.classList.remove("mobile-active");
            dropdownToggles.forEach(function(toggle) {
                toggle.parentElement.classList.remove("mobile-open");
            });
        });

    }, 50);
})();