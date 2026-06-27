/** * Filings4U Platform - Automated Blog Data Processing Architecture */ 
(function () { 
  const SUPABASE_URL = "https://lrbimrlbskjweynxlgas.supabase.co"; 
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU"; 
  const TARGET_GRID_ID = "blog-posts-grid"; 

  initializeBlogDataPipeline(); 

  async function initializeBlogDataPipeline() { 
    const renderContainer = document.getElementById(TARGET_GRID_ID); 
    if (!renderContainer) return; 

    if (typeof supabase === "undefined" && typeof supabaseJs === "undefined") { 
      renderContainer.innerHTML = `<div style="grid-column:1/-1; text-align:center; color:#ef4444; padding:40px 0;">Database connector error.</div>`;
      return; 
    } 

    try { 
      const supabaseConnector = typeof supabase !== "undefined" ? supabase : supabaseJs; 
      const client = supabaseConnector.createClient(SUPABASE_URL, SUPABASE_KEY); 

      const { data: posts, error } = await client 
        .from("blog_posts") 
        .select("*") 
        .order("created_at", { ascending: false }) 
        .limit(3); 

      if (error) throw error; 

      if (!posts || posts.length === 0) { 
        renderContainer.innerHTML = `<div style="grid-column:1/-1; text-align:center; color:#64748b; padding:40px 0;">No updates found.</div>`; 
        return; 
      } 

      renderContainer.innerHTML = ""; 

      posts.forEach(post => { 
        const publicationDate = new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }); 
        const cardElement = document.createElement("a"); 
        
        // Matches schema: post.slug
        cardElement.href = `article.html?slug=${post.slug}`; 
        
        cardElement.style.cssText = ` 
          display: block; text-decoration: none; background: #ffffff; border: 1px solid #e2e8f0; 
          border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(10, 31, 68, 0.02); 
          transition: transform 0.2s ease, box-shadow 0.2s ease; width: 100%; box-sizing: border-box;
        `; 

        cardElement.addEventListener("mouseenter", () => { cardElement.style.transform = "translateY(-4px)"; cardElement.style.boxShadow = "0 10px 20px rgba(10, 31, 68, 0.06)"; }); 
        cardElement.addEventListener("mouseleave", () => { cardElement.style.transform = "translateY(0)"; cardElement.style.boxShadow = "0 4px 12px rgba(10, 31, 68, 0.02)"; }); 

        // Matches schema: post.featured_image_url
        cardElement.innerHTML = ` 
          <div style="height: 180px; width: 100%; background: url('${post.featured_image_url}') center/cover no-repeat; background-color: #f1f5f9;"></div> 
          <div style="padding: 24px; text-align: left; box-sizing: border-box;"> 
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; gap: 10px;"> 
              <span style="font-size: 0.68rem; padding: 4px 8px; border-radius: 4px; background: #10b981; color: #ffffff; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap;"> 
                ${post.category} 
              </span> 
              <span style="font-size: 0.75rem; color: #94a3b8; font-weight: 600; white-space: nowrap;"> 
                ${publicationDate} 
              </span> 
            </div> 
            <h3 class="card-title" style="margin: 0 0 12px 0; font-size: 1.2rem; color: #0a1f44; font-weight: 700; line-height: 1.4;"></h3> 
            <p class="card-summary" style="margin: 0; color: #64748b; font-size: 0.88rem; line-height: 1.6;"></p> 
          </div> 
        `; 

        cardElement.querySelector('.card-title').textContent = post.title;
        cardElement.querySelector('.card-summary').textContent = post.summary;
        renderContainer.appendChild(cardElement); 
      }); 
    } catch (pipelineError) { 
      console.error("Pipeline caught error:", pipelineError); 
      renderContainer.innerHTML = `<div style="grid-column:1/-1; text-align:center; color:#ef4444; padding:40px 0;">Unable to load records.</div>`;
    } 
  } 
})();
