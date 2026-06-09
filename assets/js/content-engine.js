function renderHeroSection(data) {
    return `
    <main class="page-container" style="background: #ffffff; padding: 60px 0; width: 100%;">
        <div class="site-width-alignment-guard" style="max-width: 1450px; margin: 0 auto; padding: 0 40px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
                <article style="width: 100%;">
                    <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px;">${data.pill}</span>
                    <h1 style="color: #0a1f44; font-size: 3.2rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.1;">${data.title}</h1>
                    <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin: 0 0 24px 0;">${data.description}</p>
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 32px;">
                        <div style="height: 2px; width: 24px; background: #10b981;"></div>
                        <span style="color: #0a1f44; font-weight: 700; font-size: 0.9rem;">${data.badge}</span>
                    </div>
                    <a href="#pricing" style="background: #10b981; color: #ffffff; font-weight: 700; padding: 14px 32px; border-radius: 6px; display: inline-block; text-decoration: none;">Get Started &rarr;</a>
                </article>
                <aside style="display: flex; justify-content: center; width: 100%;">
                    <img src="${data.image}" style="width: 100%; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15);">
                </aside>
            </div>
        </div>
    </main>`;
}


function renderAlternatingSection(data) {
    const textColumn = `
        <div style="width: 100%;">
            <span style="color: #10b981; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; background: rgba(16, 185, 129, 0.08); padding: 6px 14px; border-radius: 20px; display: inline-block; margin-bottom: 12px;">${data.pill}</span>
            <h2 style="color: #0a1f44; font-size: 2.5rem; font-weight: 900; margin: 0 0 18px 0; line-height: 1.15;">${data.title}</h2>
            <p style="color: #475569; font-size: 1rem; line-height: 1.6; margin: 0 0 28px 0;">${data.description}</p>
        </div>`;
    const imageColumn = `
        <div style="display: flex; justify-content: center; width: 100%;">
            <img src="${data.image}" style="width: 100%; border-radius: 12px; border: 1px solid rgba(10, 31, 68, 0.15);">
        </div>`;

    return `
    <section style="background: #ffffff; padding: 60px 0; width: 100%;">
        <div style="max-width: 1450px; margin: 0 auto; padding: 0 40px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
                ${data.image_position === 'left' ? imageColumn + textColumn : textColumn + imageColumn}
            </div>
        </div>
    </section>`;
}

async function loadDynamicContent() {
    const serviceKey = getPricingServiceKey(); // Uses your Part 2 routing function
    const { data, error } = await supabase.from('services').select('sections').eq('slug', serviceKey).single();
    if (error || !data || !data.sections) return;

    let finalHtml = "";
    data.sections.forEach(section => {
        if (section.type === "hero") finalHtml += renderHeroSection(section);
        if (section.type === "alternating") finalHtml += renderAlternatingSection(section);
    });
    document.getElementById("dynamic-sections-root").innerHTML = finalHtml;
}
document.addEventListener("DOMContentLoaded", loadDynamicContent);


// DYNAMIC LAYOUT DIAGNOSTIC EYE
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const root = document.getElementById("dynamic-sections-root");
        if (root && root.innerHTML.trim() === "") {
            console.warn("⚠️ Frontend Warning: Dynamic container loaded empty. Check your browser console logs for network request blockages.");
        } else {
            console.log("🚀 Frontend Success: Rearrangeable text matrices generated safely.");
        }
    }, 1500);
});
