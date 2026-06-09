// 1. ISOLATED DATABASE CLIENT INITIALIZATION
const ENGINE_URL = 'https://lrbimrlbskjweynxlgas.supabase.co'; 
const ENGINE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';
const LOCAL_ENGINE_SUPABASE = supabase.createClient(ENGINE_URL, ENGINE_KEY);

function getUnifiedServiceKey() {
    const path = window.location.pathname;
    const fileName = path.split("/").pop().replace(".html", "") || "llc-formation";
    const urlMap = {
        "limited-liability-company": "llc-formation",
        "corporations": "corporation",
        "nonprofits": "nonprofit-organization",
        "doing-business-as-dba": "dba-registration",
        "employer-identification-number-ein": "employer-id-ein",
        "federal-income-tax": "federal-tax",
        "state-income-tax": "state-tax",
        "sales-tax-registration": "sales-tax",
        "payroll-tax-940-941": "payroll-tax",
        "heavy-use-tax-2290": "heavy-use-tax",
        "duns-number-procurement": "duns-number",
        "driver-qualification-file": "driver-file",
        "process-agents-boc-3": "process-agent-boc3",
        "international-fuel-tax-agreement-ifta": "ifta-registration",
        "hazmat-registration": "dot-hazmat"
    };
    return urlMap[fileName] || fileName;
}

// 2. CORE LAYOUT GENERATION MATRIX
function makeHero(data) {
    return `<main class="page-container" style="background:#ffffff; padding:60px 0; width:100%;"><div style="max-width:1450px; margin:0 auto; padding:0 40px;"><div style="display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center;"><article><span style="color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px;">${data.pill}</span><h1 style="color:#0a1f44; font-size:3.2rem; font-weight:900; margin:0 0 18px 0; line-height:1.1;">${data.title}</h1><p style="color:#475569; font-size:1.1rem; line-height:1.6; margin:0 0 24px 0;">${data.description}</p></article><aside><img src="${data.image}" style="width:100%; border-radius:12px; border:1px solid rgba(10,31,68,0.15);"></aside></div></div></main>`;
}

function makeAlternating(data) {
    const text = `<div><span style="color:#10b981; font-size:0.8rem; font-weight:800; text-transform:uppercase; background:rgba(16,185,129,0.08); padding:6px 14px; border-radius:20px; display:inline-block; margin-bottom:12px;">${data.pill}</span><h2 style="color:#0a1f44; font-size:2.5rem; font-weight:900; margin:0 0 18px 0; line-height:1.15;">${data.title}</h2><p style="color:#475569; font-size:1rem; line-height:1.6; margin:0 0 28px 0;">${data.description}</p></div>`;
    const img = `<div style="display:flex; justify-content:center; width:100%;"><img src="${data.image}" style="width:100%; border-radius:12px; border:1px solid rgba(10,31,68,0.15);"></div>`;
    return `<section style="background:#ffffff; padding:60px 0; width:100%;"><div style="max-width:1450px; margin:0 auto; padding:0 40px;"><div style="display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center;">${data.image_position === 'left' ? img + text : text + img}</div></div></section>`;
}

async function renderMasterSystem() {
    const activeKey = getUnifiedServiceKey();
    const pricingRoot = document.getElementById("website-package-pricing-cards-root");
    if (pricingRoot) pricingRoot.setAttribute("data-service-key", activeKey);

       // Using the isolated client instance to safely fetch rows
    const { data, error } = await LOCAL_ENGINE_SUPABASE.from('services').select('sections').eq('slug', activeKey).single();
    if (error || !data || !data.sections) return;

    // RUN THE AUTOMATED HEAD METADATA UPDATER
    syncHeadMetadata(data.sections, activeKey);

    let buildHtml = "";

    data.sections.forEach(sec => {
        if (sec.type === "hero") buildHtml += makeHero(sec);
        if (sec.type === "alternating") buildHtml += makeAlternating(sec);
    });
    document.getElementById("dynamic-sections-root").innerHTML = buildHtml;
}
document.addEventListener("DOMContentLoaded", renderMasterSystem);


// DYNAMIC HEAD METADATA SYNCHRONIZER
function syncHeadMetadata(sectionsArray, slugKey) {
    const heroBlock = sectionsArray.find(sec => sec.type === "hero");
    if (heroBlock && heroBlock.title) {
        // Automatically injects a clean title: "Service Title | filings4u"
        document.title = `${heroBlock.title} | filings4u`;
    } else {
        // Fallback title formatting from the structural slug token
        const fallbackName = slugKey.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        document.title = `${fallbackName} | filings4u`;
    }
}
