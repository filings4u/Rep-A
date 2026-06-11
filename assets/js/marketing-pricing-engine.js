function renderMainWebsitePackagePricingCards() {
    const cardsRoot = document.getElementById("website-package-pricing-cards-root");
    if (!cardsRoot) return;

    const urlParams = new URLSearchParams(window.location.search);
    let activeServiceSlug = urlParams.get('service') || urlParams.get('package') || "llc-formation";
    activeServiceSlug = String(activeServiceSlug).toLowerCase().trim().replace(/[\s_]+/g, "-");

    const globalCatalog = window.GLOBAL_COMPANY_PRICING?.packages;
    let targetPackage = globalCatalog ? globalCatalog[activeServiceSlug] : null;

    // 🔄 ZERO HARDCODING ALGORITHMIC CHECKER: Resolves singular vs plural catalog mismatches dynamically
    if (!targetPackage && globalCatalog) {
        if (activeServiceSlug.endsWith('s')) {
            const singularKey = activeServiceSlug.slice(0, -1);
            targetPackage = globalCatalog[singularKey];
        } else {
            const pluralKey = activeServiceSlug + 's';
            targetPackage = globalCatalog[pluralKey];
        }
    }

    if (!targetPackage) {
        cardsRoot.innerHTML = `
        <div style="grid-column: span 3; text-align: center; padding: 40px; color: var(--text-muted); font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif;">
            Fulfillment pricing packages for "${activeServiceSlug}" are loading...
        </div>`;
        return;
    }

    const planTiers = [
        { key: "starter", title: "Basic", price: targetPackage.starter, highlight: false, tag: "Standard Processing" },
        { key: "compliance", title: "Elite", price: targetPackage.compliance, highlight: true, tag: "Most Popular" },
        { key: "enterprise", title: "Enterprise", price: targetPackage.enterprise, highlight: false, tag: "Complete Asset Suite" }
    ];

    let packagesHtmlPayload = "";

    planTiers.forEach((tier, index) => {
        const featureBullets = targetPackage.bullets?.[tier.key] || [];
        let bulletsListHtml = "";

        featureBullets.forEach(bulletText => {
            bulletsListHtml += `
            <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; margin-bottom: 12px; list-style: none; font-family: 'Plus Jakarta Sans', sans-serif;">
                <i class="fa-solid fa-circle-check" style="color: var(--emerald); margin-top: 3px; flex-shrink: 0; font-size: 0.95rem;"></i>
                <span style="line-height: 1.4; text-align: left; color: var(--navy); font-weight: 500; font-family: 'Plus Jakarta Sans', sans-serif;">${bulletText}</span>
            </li>`;
        });

        // 🎨 PRODUCTION VARIABLE ASSIGNMENT MATRIX (Strictly master.css Compliant)
        const cardBorder = tier.highlight 
            ? "border: 2px solid var(--emerald); transform: scale(1.02); box-shadow: 0 20px 25px -5px rgba(10,31,68,0.08);" 
            : "border: 1px solid var(--border); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.01);";
            
        const badgeStyle = tier.highlight 
            ? "background: rgba(16,185,129,0.15); color: var(--emerald); border: 1px solid rgba(16,185,129,0.2);" 
            : "background: var(--ice); color: var(--text-muted); border: 1px solid var(--border);";

        // 🟢 BUTTON PALETTE RESETS: Center use active emerald, side buttons use corporate deep navy
        const buttonBg = tier.highlight ? "var(--emerald)" : "var(--navy)";
        const buttonText = "var(--white)";
        const buttonBorder = "none";
        const hoverBg = tier.highlight ? "#0e9f6e" : "#112a59"; 

        // ⚡ STAGGERED REVEAL CARDS MATRIX 
        const animationDelay = index * 120;
        const animationStyles = `
            opacity: 0; 
            transform: translateY(20px); 
            animation: f4uCardFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
            animation-delay: ${animationDelay}ms;
        `;

        packagesHtmlPayload += `
        <div class="marketing-pricing-card" 
             style="background: var(--white); border-radius: 14px; padding: 36px 32px; display: flex; flex-direction: column; justify-content: space-between; position: relative; box-sizing: border-box; transition: var(--transition); font-family: 'Plus Jakarta Sans', sans-serif; ${cardBorder} ${animationStyles}"
             onmouseover="this.style.transform='${tier.highlight ? 'scale(1.04) translateY(-4px)' : 'translateY(-4px)'}'; this.style.boxShadow='0 20px 30px rgba(10,31,68,0.1)';"
             onmouseout="this.style.transform='${tier.highlight ? 'scale(1.02)' : 'none'}'; this.style.boxShadow='${tier.highlight ? '0 20px 25px -5px rgba(10,31,68,0.08)' : '0 4px 6px -1px rgba(0,0,0,0.01)'}';">
            
            <div style="width: 100%;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); font-family: 'Plus Jakarta Sans', sans-serif;">${tier.tag}</span>
                    <span style="font-size: 0.7rem; font-weight: 800; padding: 5px 12px; border-radius: 20px; text-transform: uppercase; font-family: 'Plus Jakarta Sans', sans-serif; ${badgeStyle}">${tier.title} Choice</span>
                </div>
                
                <h3 style="margin: 0 0 8px 0; font-size: 1.6rem; font-weight: 900; color: var(--navy); text-align: left; font-family: 'Plus Jakarta Sans', sans-serif;">${tier.title}</h3>
                
                <div style="display: flex; align-items: baseline; gap: 2px; margin-bottom: 24px; border-bottom: 2px solid var(--ice); padding-bottom: 20px;">
                    <span style="font-size: 2.6rem; font-weight: 800; color: var(--navy); font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.04em; line-height: 1;">$${tier.price.toFixed(2)}</span>
                    <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 700; margin-left: 6px; font-family: 'Plus Jakarta Sans', sans-serif;">+ State Fee</span>
                </div>

                <ul style="margin: 0 0 32px 0; padding: 0; display: flex; flex-direction: column; width: 100%;">
                    ${bulletsListHtml}
                </ul>
            </div>

            <a href="/wizard.html?service=${activeServiceSlug}&plan=${tier.key}" style="width: 100%; text-align: center; display: block; padding: 14px 0; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none; box-sizing: border-box; transition: var(--transition); background: ${buttonBg}; color: ${buttonText}; border: ${buttonBorder}; font-family: 'Plus Jakarta Sans', sans-serif;" onmouseover="this.style.background='${hoverBg}'" onmouseout="this.style.background='${buttonBg}'">
                Select ${tier.title} Setup
            </a>
        </div>
        `;
    });

    if (!document.getElementById("f4u-pricing-animation-keyframes")) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "f4u-pricing-animation-keyframes";
        styleSheet.innerHTML = `
            @keyframes f4uCardFadeIn {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    cardsRoot.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 32px; width: 100%; box-sizing: border-box; align-items: stretch; padding: 10px 0;">
        ${packagesHtmlPayload}
    </div>
    `;
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderMainWebsitePackagePricingCards);
} else {
    renderMainWebsitePackagePricingCards();
}
