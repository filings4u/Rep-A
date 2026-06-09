const fs = require('fs');
const path = require('path');

// 1. VERIFY MASTER BACKUP FILES ARE ALIGNED AND DISCOVERABLE
const backupDataPath = path.join(__dirname, 'production-content-backup.json');
if (!fs.existsSync(backupDataPath)) {
    console.error("❌ Fatal Error: production-content-backup.json is missing or corrupted!");
    process.exit(1);
}
const backupJson = fs.readFileSync(backupDataPath, 'utf8');

// 2. SETUP ENGINE ARCHITECTURE BASE STRINGS (USING SAFE QUOTE CONCATENATIONS)
let scriptContent = "/**\n * ==========================================================================\n * 🏛️ CENTRAL 44-SERVICE SEO & DESIGN MATRICES (PRODUCTION READY)\n * Generated Automatically via build.js\n * ==========================================================================\n */\n\n";
scriptContent += "const GLOBAL_SEO_CONTENT_MAP = " + backupJson.trim() + ";\n\n";
scriptContent += "const EXPLICIT_CONTENT_URL = 'https://supabase.co';\n";
scriptContent += "const EXPLICIT_CONTENT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';\n\n";
scriptContent += "const CONTENT_ENGINE_ONLY_SUPABASE = window.supabase.createClient(EXPLICIT_CONTENT_URL, EXPLICIT_CONTENT_KEY);\n\n";

scriptContent += "function getUnifiedServiceKey() {\n";
scriptContent += "    const path = window.location.pathname;\n";
scriptContent += "    const fileName = path.split('/').pop().replace('.html', '').trim().toLowerCase() || 'limited-liability-company';\n";
scriptContent += "    const urlMap = {\n";
scriptContent += "        'limited-liability-company': 'llc-formation', 'corporations': 'corporation', 'sole-proprietorship': 'sole-proprietorship',\n";
scriptContent += "        'doing-business-as-dba': 'dba-registration', 'nonprofits': 'nonprofit-organization', 'series-llc': 'series-llc',\n";
scriptContent += "        'foreign-qualification': 'foreign-qualification', 'llc-reinstatement': 'llc-reinstatement', 'trademark-filing': 'trademark-filing',\n";
scriptContent += "        'servicemark-filing': 'servicemark-filing', 'annual-reports': 'annual-reports', 'operating-agreement': 'operating-agreement',\n";
scriptContent += "        'registered-agent': 'registered-agent', 'business-licenses': 'business-licenses', 'employer-identification-number-ein': 'employer-id-ein',\n";
scriptContent += "        'dissolution': 'entity-dissolution', 'good-standing': 'good-standing', 'apostille-services': 'apostille-services',\n";
scriptContent += "        'clia-certificate': 'clia-certificate', 'regulatory-consulting': 'legal-consulting', 'federal-income-tax': 'federal-tax',\n";
scriptContent += "        'state-income-tax': 'state-tax', 'franchise-tax': 'franchise-tax', 'sales-tax-registration': 'sales-tax',\n";
scriptContent += "        'payroll-tax-940-941': 'payroll-tax', 'heavy-use-tax-2290': 'heavy-use-tax', 'owner-operators': 'owner-operators',\n";
scriptContent += "        'trucker-authority': 'trucker-authority', 'broker-authority': 'broker-authority', 'ucr-registration': 'ucr-registration',\n";
scriptContent += "        'scac-code': 'scac-code', 'dot-consortium': 'dot-consortium', 'driver-qualification-file': 'driver-file',\n";
scriptContent += "        'process-agents-boc-3': 'process-agent-boc3', 'international-fuel-tax-agreement-ifta': 'ifta-registration',\n";
scriptContent += "        'hazmat-registration': 'dot-hazmat', 'new-entrant-audit': 'new-entrant-audit'\n";
scriptContent += "    };\n";
scriptContent += "    return urlMap[fileName] || fileName;\n";
scriptContent += "}\n\n";
// 3. COMPILE ALL 5 INTERACTIVE SECTIONS SAFELY WITHOUT TRIGGERING NODE REF ERRORS
scriptContent += "function compileFullTemplateLayoutHtml(data) {\n";
scriptContent += "    var out = '';\n";
scriptContent += "    out += '<main class=\"page-container\" style=\"background:#ffffff; padding:60px 0; font-family:system-ui,sans-serif; width:100% !important; max-width:100% !important; box-sizing:border-box;\"><div class=\"site-width-alignment-guard\" style=\"width:100% !important; max-width:1450px !important; margin:0 auto !important; padding:0 40px !important; box-sizing:border-box !important;\"><div style=\"display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%;\"><article style=\"width:100%; box-sizing:border-box;\"><span style=\"color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.15);\">' + data.heroPill + '</span><h1 style=\"color:#0a1f44; font-size:3.2rem; font-weight:900; margin:0 0 18px 0; line-height:1.1; letter-spacing:-1px;\">' + data.heroHeadline + '</h1><p style=\"color:#475569; font-size:1.1rem; line-height:1.6; margin:0 0 24px 0;\">' + data.heroBody + '</p><div style=\"display:flex; align-items:center; gap:10px; margin-bottom:32px;\"><div style=\"height:2px; width:24px; background:#10b981;\"></div><span style=\"color:#0a1f44; font-weight:700; font-size:0.9rem;\">' + data.heroBadge + '</span></div><a href=\"#pricing\" class=\"btn-main\" style=\"background:#10b981; color:#ffffff; font-weight:700; text-decoration:none; padding:14px 32px; border-radius:6px; display:inline-block; box-shadow:0 10px 20px rgba(16,185,129,0.2);\">Get Started &rarr;</a></article><aside style=\"display:flex; justify-content:center; width:100%;\"><img src=\"' + data.heroImage + '\" style=\"width:100%; height:auto; display:block; border-radius:12px; border:1px solid rgba(10,31,68,0.15); box-shadow:0 20px 40px rgba(10,31,68,0.25);\"></aside></div></div></main>';\n";
scriptContent += "    out += '<section class=\"enterprise-metrics-section\" style=\"padding:60px 0 !important; background:#0a1f44; color:#f4f7fa; width:100% !important; max-width:100% !important; box-sizing:border-box; overflow:hidden; margin:0 !important;\"><div class=\"site-width-alignment-guard\" style=\"width:100% !important; max-width:1450px !important; margin:0 auto !important; padding:0 40px !important; box-sizing:border-box !important;\"><div style=\"display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid rgba(244,247,250,0.1); padding-bottom:24px; margin-bottom:40px; flex-wrap:wrap; gap:24px; width:100%; box-sizing:border-box;\"><h2 style=\"margin:0; font-size:2.2rem; font-weight:800; color:#ffffff; letter-spacing:-0.5px; line-height:1.2;\">Corporate Filing Infrastructure</h2><div style=\"display:flex; align-items:center; gap:8px; font-size:0.8rem; font-weight:700; color:#10b981; font-family:monospace; background:rgba(16,185,129,0.1); padding:8px 16px; border-radius:30px; border:1px solid rgba(16,185,129,0.2);\"><span style=\"width:8px; height:8px; background:#10b981; border-radius:50%; display:inline-block;\"></span> ALL CLEAR: SECURE REST GATEWAYS ACTIVE</div></div><div style=\"display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:30px; width:100%; box-sizing:border-box; margin:0;\"><div style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:30px 24px;\">🏢<div style=\"font-size:2.4rem; font-weight:900; color:#ffffff; font-family:monospace;\">142K+</div><div style=\"font-size:0.95rem; font-weight:800; color:#cbd5e1; margin-top:4px;\">Corporate Entities Formed</div></div><div style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:30px 24px;\">🚛<div style=\"font-size:2.4rem; font-weight:900; color:#ffffff; font-family:monospace;\">38,410</div><div style=\"font-size:0.95rem; font-weight:800; color:#cbd5e1; margin-top:4px;\">Active Transits Monitored</div></div><div style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:30px 24px;\">⚡<div style=\"font-size:2.4rem; font-weight:900; color:#10b981; font-family:monospace;\">1.8s</div><div style=\"font-size:0.95rem; font-weight:800; color:#cbd5e1; margin-top:4px;\">Average API Pipeline Turn</div></div><div style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:30px 24px;\">🔒<div style=\"font-size:2.4rem; font-weight:900; color:#ffffff; font-family:monospace;\">99.98%</div><div style=\"font-size:0.95rem; font-weight:800; color:#cbd5e1; margin-top:4px;\">Filing Accuracy Quotient</div></div></div></div></section>';\n";
scriptContent += "    out += '<section style=\"background:#ffffff; padding:60px 0; font-family:system-ui,sans-serif; width:100% !important; max-width:100% !important; box-sizing:border-box;\"><div class=\"site-width-alignment-guard\" style=\"width:100% !important; max-width:1450px !important; margin:0 auto !important; padding:0 40px !important; box-sizing:border-box !important;\"><div style=\"display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%;\"><div style=\"display:flex; justify-content:center; width:100%;\"><img src=\"' + data.secBImage + '\" style=\"width:100%; height:auto; display:block; border-radius:12px; border:1px solid rgba(10,31,68,0.15); box-shadow:0 20px 40px rgba(10,31,68,0.25);\"></div><div style=\"width:100%; box-sizing:border-box;\"><span style=\"color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.15);\">' + data.secBPill + '</span><h2 style=\"color:#0a1f44; font-size:2.5rem; font-weight:900; margin:0 0 18px 0; line-height:1.15; letter-spacing:-0.5px;\">' + data.secBHeadline + '</h2><p style=\"color:#0a1f44; font-weight:700; font-size:1.05rem; margin:0 0 12px 0; line-height:1.4;\">' + data.secBSub + '</p><p style=\"color:#475569; font-size:1rem; line-height:1.6; margin:0 0 28px 0;\">' + data.secBBody + '</p></div></div></div></section>';\n";
scriptContent += "    out += '<section style=\"background:#ffffff; padding:60px 0; font-family:system-ui,sans-serif; width:100% !important; max-width:100% !important; box-sizing:border-box;\"><div class=\"site-width-alignment-guard\" style=\"width:100% !important; max-width:1450px !important; margin:0 auto !important; padding:0 40px !important; box-sizing:border-box !important;\"><div style=\"display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%;\"><div style=\"width:100%; box-sizing:border-box;\"><span style=\"color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.15);\">' + data.secCPill + '</span><h2 style=\"color:#0a1f44; font-size:2.5rem; font-weight:900; margin:0 0 18px 0; line-height:1.15; letter-spacing:-0.5px;\">' + data.secCHeadline + '</h2><p style=\"color:#0a1f44; font-weight:700; font-size:1.05rem; margin:0 0 12px 0; line-height:1.4;\">' + data.secCSub + '</p><p style=\"color:#475569; font-size:1rem; line-height:1.6; margin:0 0 28px 0;\">' + data.secCBody + '</p></div><div style=\"display:flex; justify-content:center; width:100%;\"><img src=\"' + data.secCImage + '\" style=\"width:100%; height:auto; display:block; border-radius:12px; border:1px solid rgba(10,31,68,0.15); box-shadow:0 20px 40px rgba(10,31,68,0.25);\"></div></div></div></section>';\n";
scriptContent += "    out += '<section class=\"enterprise-metrics-section\" style=\"padding:80px 0 !important; background:#0a1f44; color:#f4f7fa; width:100% !important; max-width:100% !important; box-sizing:border-box; overflow:hidden; position:relative; margin:0 !important;\"><div style=\"position:absolute; top:0; left:0; width:100%; height:100%; opacity:0.04; pointer-events:none; background-image:radial-gradient(#ffffff 1px, transparent 1px); background-size:20px 20px;\"></div><div class=\"site-width-alignment-guard\" style=\"width:100% !important; max-width:1450px !important; margin:0 auto !important; padding:0 40px !important; box-sizing:border-box !important; position:relative; z-index:10; display:flex; flex-direction:row; flex-wrap:wrap; align-items:center; gap:60px;\"><div style=\"flex:1; min-width:320px; max-width:550px; display:flex; justify-content:center; box-sizing:border-box;\"><img src=\"' + data.secDImage + '\" style=\"width:100%; height:auto; display:block; border-radius:12px; border:1px solid rgba(255,255,255,0.08); box-shadow:0 25px 50px rgba(0,0,0,0.65);\"></div><div style=\"flex:1; min-width:320px; box-sizing:border-box;\"><span style=\"color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em; background:rgba(16,185,129,0.12); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px; border:1px solid rgba(16,185,129,0.25);\">' + data.secDPill + '</span><h2 style=\"color:#ffffff; font-size:2.5rem; font-weight:900; margin:0 0 18px 0; line-height:1.15; letter-spacing:-0.5px;\">' + data.secDHeadline + '</h2><p style=\"color:#cbd5e1; font-weight:700; font-size:1.05rem; margin:0 0 12px 0; line-height:1.4;\">' + data.secDSub + '</p><p style=\"color:#94a3b8; font-size:1rem; line-height:1.6; margin:0 0 28px 0;\">' + data.secDBody + '</p></div></div></section>';\n";
scriptContent += "    return out;\n";
scriptContent += "}\n\n";
// 4. SECURE BROWSER ENGINE RUNTIME BOOTSTRAPPER LOOP
scriptContent += "function renderMasterSystem() {\n";
scriptContent += "    const activeKey = getUnifiedServiceKey();\n";
scriptContent += "    const pageData = GLOBAL_SEO_CONTENT_MAP[activeKey];\n";
scriptContent += "    if (!pageData) {\n";
scriptContent += "        console.warn('Missing content map parameters for key: ' + activeKey);\n";
scriptContent += "        return;\n";
scriptContent += "    }\n";
scriptContent += "    document.title = pageData.title + ' | filings4u';\n";
scriptContent += "    let metaDescTag = document.querySelector('meta[name=\"description\"]');\n";
scriptContent += "    if (!metaDescTag) {\n";
scriptContent += "        metaDescTag = document.createElement('meta');\n";
scriptContent += "        metaDescTag.setAttribute('name', 'description');\n";
scriptContent += "        document.head.appendChild(metaDescTag);\n";
scriptContent += "    }\n";
scriptContent += "    metaDescTag.setAttribute('content', pageData.heroBody.substring(0, 150));\n";
scriptContent += "    const pricingRoot = document.getElementById('website-package-pricing-cards-root');\n";
scriptContent += "    if (pricingRoot) {\n";
scriptContent += "        pricingRoot.setAttribute('data-service-key', pageData.pricingKey || activeKey);\n";
scriptContent += "        pricingRoot.style.cssText = 'width: 100% !important; max-width: 1450px !important; margin: 0 auto !important; padding: 0 40px !important; box-sizing: border-box !important; display: block !important;';\n";
scriptContent += "    }\n";
scriptContent += "    const dynamicSectionsRoot = document.getElementById('dynamic-sections-root');\n";
scriptContent += "    if (dynamicSectionsRoot) {\n";
scriptContent += "        dynamicSectionsRoot.innerHTML = compileFullTemplateLayoutHtml(pageData);\n";
scriptContent += "        console.log('✅ Content Engine: Loaded all 5 color-swapping sections safely.');\n";
scriptContent += "    }\n";
scriptContent += "}\n";
scriptContent += "document.addEventListener('DOMContentLoaded', renderMasterSystem);\n";

const targetPath = path.join(__dirname, 'assets', 'js', 'content-engine.js');

// Verify subdirectory pathway existence
if (!fs.existsSync(path.dirname(targetPath))) {
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

fs.writeFileSync(targetPath, scriptContent, 'utf8');

console.log("\n==========================================================================");
console.log("🚀 SUCCESS: Built your complete content-engine.js file perfectly!");
console.log("📁 Output file written to: assets/js/content-engine.js");
console.log("==========================================================================\n");
