// ============================================================================
// 🗂️ MODULE 4: AUTOMATED DIRECTORY CATALOG MATRIX FOR GET-STARTED HUB
// ============================================================================

const SUPABASE_PROJECT_URL = "https://lrbimrlbskjweynxlgas.supabase.co"; 
const SUPABASE_PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU";

document.addEventListener("DOMContentLoaded", async function() {
    const directoryGrid = document.getElementById("homepage-service-directory-grid");
    if (!directoryGrid) return; 

    try {
        if (typeof supabase === 'undefined' || typeof supabase.createClient !== 'function') {
            throw new Error("Supabase Production CDN Script missed initialization on this element context.");
        }

        const localSupabaseInstance = supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_PUBLIC_ANON_KEY);

        // 1. Fetch your 44 dynamic categories 
        const { data: serviceRecords, error: queryError } = await localSupabaseInstance
            .from('services')
            .select('slug, service_title, pill_tag, description_paragraph')
            .order('service_title', { ascending: true });

        if (queryError || !serviceRecords) {
            console.error("Home Page Catalog Loop Query Error:", queryError);
            directoryGrid.innerHTML = `<p style="color: #475569; font-weight: 500;">Services repository is currently updating. Please refresh shortly.</p>`;
            return;
        }

        directoryGrid.innerHTML = "";

        // 2. Build the individual catalog dashboard options
        serviceRecords.forEach(record => {
            const truncatedSummary = record.description_paragraph && record.description_paragraph.length > 110 
                ? record.description_paragraph.substring(0, 110) + "..." 
                : (record.description_paragraph || "");

            directoryGrid.innerHTML += `
            <div class="directory-catalog-card" style="background: #ffffff; border: 1px solid rgba(10, 31, 68, 0.1); border-radius: 12px; padding: 28px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; gap: 20px; box-shadow: 0 4px 12px rgba(10, 31, 68, 0.01); transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);" onmouseover="this.style.borderColor='#10b981'; this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 24px rgba(10, 31, 68, 0.06), 0 4px 8px rgba(16, 185, 129, 0.04)';" onmouseout="this.style.borderColor='rgba(10, 31, 68, 0.1)'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(10, 31, 68, 0.01)';">
                <div>
                    <span style="color: #10b981; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; background: rgba(16, 185, 129, 0.05); padding: 4px 10px; border-radius: 4px; margin-bottom: 12px;">${record.pill_tag || 'Filing Infrastructure'}</span>
                    <h3 style="color: #0a1f44; font-size: 1.4rem; font-weight: 800; margin: 0 0 8px 0; letter-spacing: -0.3px; line-height: 1.2;">${record.service_title}</h3>
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">${truncatedSummary}</p>
                </div>
                
                <!-- 🔗 NAVIGATION STEP 2 HANDSHAKE: Forwards customer straight into their unique landing profile section -->
                <a href="service.html?id=${record.slug}" class="directory-catalog-link" style="color: #10b981; font-weight: 700; text-decoration: none; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 6px; margin-top: auto;">View Features & Pricing &rarr;</a>
            </div>`;
        });

    } catch (unexpectedException) {
        console.error("Critical intercept crash inside Directory loop: ", unexpectedException);
    }
});
