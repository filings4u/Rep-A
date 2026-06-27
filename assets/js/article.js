/** * Filings4U Platform - Automated Single Article Rendering Engine */ 
(function () { 
  const SUPABASE_URL = "https://lrbimrlbskjweynxlgas.supabase.co"; 
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU"; 
  const TARGET_CONTAINER_ID = "article-content-container"; 

  initializeArticlePipeline(); 

  async function initializeArticlePipeline() { 
    const renderContainer = document.getElementById(TARGET_CONTAINER_ID); 
    if (!renderContainer) return; 

    const URLParameters = new URLSearchParams(window.location.search);
    const postSlug = URLParameters.get('slug');

    if (!postSlug) {
      renderContainer.innerHTML = `<div style="text-align:center; color:#ef4444; padding:100px 0;">Invalid address.</div>`;
      return;
    }

    if (typeof supabase === "undefined" && typeof supabaseJs === "undefined") { 
      renderContainer.innerHTML = `<div style="text-align:center; color:#ef4444; padding:100px 0;">Database connector error.</div>`;
      return; 
    } 

try { 
  const supabaseConnector = typeof supabase !== "undefined" ? supabase : supabaseJs; 
  const client = supabaseConnector.createClient(SUPABASE_URL, SUPABASE_KEY); 
  
  // Matches schema constraint: unique (slug) 
  const { data: post, error } = await client 
    .from("blog_posts") 
    .select("*") 
    .eq("slug", postSlug) 
    .single(); 
    
  if (error || !post) { 
    renderContainer.innerHTML = `<div style="text-align:center; color:#64748b; padding:100px 0;">Article could not be found.</div>`; 
    return; 
  } 
  
  const publicationDate = new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }); 
  renderContainer.innerHTML = ""; 
  
  // Dynamically updates the browser tab header text to show your SEO Title
  document.title = post.seo_title || post.title || "Platform Insights | filings4u";
  
  // Dynamically sets the dynamic browser SEO Description meta tag
  const metaDescriptionTag = document.getElementById("dynamic-meta-description");
  if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute("content", post.seo_description || post.summary || "");
  }

  // Inject the Google Font typography files and system maps directly into the public viewing header
  const publicFontImports = document.createElement("style");
  publicFontImports.textContent = `
    @import url('https://googleapis.com');
    
    /* System Typography Map Layout Rules */
    .ql-font-segoe-ui, [data-font="segoe-ui"] { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important; }
    
    /* Web Font Engine Mappings */
    .ql-font-plus-jakarta-sans, [data-font="plus-jakarta-sans"] { font-family: 'Plus Jakarta Sans', sans-serif !important; }
    .ql-font-inter, [data-font="inter"] { font-family: 'Inter', sans-serif !important; }
    .ql-font-roboto, [data-font="roboto"] { font-family: 'Roboto', sans-serif !important; }
    .ql-font-open-sans, [data-font="open-sans"] { font-family: 'Open Sans', sans-serif !important; }
    .ql-font-montserrat, [data-font="montserrat"] { font-family: 'Montserrat', sans-serif !important; }
  `;
  document.head.appendChild(publicFontImports);

  const articleWrapper = document.createElement("article"); 
  articleWrapper.style.width = "100%"; 
  articleWrapper.style.boxSizing = "border-box";



// Safety verification: Selects whichever image field is populated, falling back to a standard layout placeholder image if both are missing
const activeImageUrl = post.featured_image_url || post.cover_image_url || "images/blog-fallback.jpg";

// Compile parameters cleanly ahead of generation loops
const currentShareUrl = encodeURIComponent(window.location.href);
const currentShareTitle = encodeURIComponent(post.title || '');

articleWrapper.innerHTML = ` 
  <!-- TOP PRESENTATION METADATA AREA -->
  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;"> 
    <a href="index.html" style="font-size: 0.88rem; color: #10b981; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 4px;">&larr; Back to Insights</a> 
    <span style="color: #cbd5e1;">&bull;</span> 
    <span style="font-size: 0.75rem; padding: 4px 8px; border-radius: 4px; background: #10b981; color: #ffffff; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${post.category}</span> 
    <span style="color: #cbd5e1;">&bull;</span> 
    <span style="font-size: 0.88rem; color: #94a3b8; font-weight: 500;">Published ${publicationDate}</span> 
    <span style="color: #cbd5e1;">&bull;</span> 
    <span style="font-size: 0.88rem; color: #94a3b8; font-weight: 500;">${post.read_time_minutes} min read</span> 
  </div> 

  <h1 class="art-title" style="color: #0a1f44; font-size: 2.75rem; font-weight: 800; line-height: 1.25; margin: 0 0 20px 0; text-align: left; width: 100%; box-sizing: border-box; word-break: break-word;"></h1> 
  
  <p class="art-summary" style="font-size: 1.2rem; line-height: 1.6; color: #475569; font-weight: 500; margin: 0 0 40px 0; border-left: 4px solid #10b981; padding-left: 20px; width: 100%; box-sizing: border-box; word-break: break-word; overflow-wrap: break-word;"></p> 

  <!-- WIDESCREEN IMAGE WITH ADVANCED BOX SHADOW --> 
  <div style="width: 100%; height: 500px; background: url('${activeImageUrl}') center/cover no-repeat; border-radius: 16px; margin-bottom: 48px; border: 1px solid #e2e8f0; background-color: #f1f5f9; box-shadow: 0 20px 40px rgba(10, 31, 68, 0.12), 0 1px 3px rgba(10, 31, 68, 0.05);"></div> 

  <!-- THE WHITE CARD CONTAINER -->
  <div class="article-master-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 48px; box-shadow: 0 4px 20px rgba(10, 31, 68, 0.03); width: 100%; box-sizing: border-box; margin-bottom: 40px; position: relative;">

    <!-- Long-Form Editorial Body Content Box --> 
    <div id="article-body-copy" style="font-size: 1.1rem; line-height: 1.85; color: #334155; font-weight: 400; text-align: left; width: 100%; max-width: 100%; box-sizing: border-box; white-space: normal; word-break: break-word; overflow-wrap: break-word; margin-bottom: 48px;"> 
      ${post.content} 
    </div> 

    <!-- Author Profile Metadata Badge Signature Section -->
    <div class="author-signature-row" style="display: flex; align-items: center; gap: 16px; padding-top: 32px; border-top: 1px solid #e2e8f0; margin-top: 48px; width: 100%; box-sizing: border-box; flex-wrap: wrap; margin-bottom: 40px;">
      <div style="width: 48px; height: 48px; border-radius: 50%; background: #0a1f44; color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem; border: 2px solid #e2e8f0; box-shadow: 0 2px 8px rgba(10,31,68,0.05);">
        F4U
      </div>
      <div style="flex: 1; min-width: 200px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <h4 style="margin: 0; color: #0a1f44; font-size: 1.05rem; font-weight: 700;">Filings4U Compliance Editorial Desk</h4>
          <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.68rem; padding: 2px 6px; background: #e0f2fe; color: #0369a1; border-radius: 4px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Verified Publisher ✓</span>
        </div>
        <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.88rem; line-height: 1.4;">Automated corporate analytics insights, structural governance tracking guidelines, and platform operations compliance alerts.</p>
      </div>
    </div>

  <!-- FIXED SHARE PANEL BAR WITH LIVE DISPLAY BADGE -->
   <!-- FIXED SHARE PANEL BAR WITH LIVE BADGE DISPLAY -->
  <div class="social-share-container-block" style="display: flex; align-items: center; gap: 10px; padding-top: 24px; border-top: 1px solid #f1f5f9; width: 100%; box-sizing: border-box; flex-wrap: wrap; position: relative;">
    
    <!-- LIVE COUNTER DISPLAY BADGE -->
    <div style="display: inline-flex; align-items: center; gap: 6px; background: #e0f2fe; color: #0369a1; padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 10px;">
      🔥 <span id="live-share-badge-count">${post.total_shares || 0}</span> Shares
    </div>

    <span style="font-size: 0.8rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; padding-right: 4px;">Share This Update:</span>
    
    <!-- Added missing data-platform tracking parameters onto anchor layers below -->
    <a href="https://linkedin.com{currentShareUrl}&title=${currentShareTitle}" target="_blank" rel="noopener noreferrer" data-platform="LinkedIn" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 6px; background: #0077b5; color: white; text-decoration: none; font-size: 0.95rem; font-weight: bold;">in</a>
    <a href="https://x.com{currentShareUrl}&text=${currentShareTitle}" target="_blank" rel="noopener noreferrer" data-platform="X" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 6px; background: #000000; color: white; text-decoration: none; font-size: 0.95rem; font-weight: bold;">X</a>
    <a href="https://facebook.com{currentShareUrl}" target="_blank" rel="noopener noreferrer" data-platform="Facebook" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 6px; background: #1877f2; color: white; text-decoration: none; font-size: 1.15rem; font-weight: bold;">f</a>
    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" data-platform="TikTok" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 6px; background: #010101; color: white; text-decoration: none; font-size: 0.88rem; font-weight: bold;">🎵</a>
    <a href="https://reddit.com{currentShareUrl}&title=${currentShareTitle}" target="_blank" rel="noopener noreferrer" data-platform="Reddit" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 6px; background: #ff4500; color: white; text-decoration: none; font-size: 1.1rem; font-weight: bold;">r/</a>
    <a href="https://whatsapp.com{currentShareTitle}%20${currentShareUrl}" target="_blank" rel="noopener noreferrer" data-platform="WhatsApp" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 6px; background: #25d366; color: white; text-decoration: none; font-size: 1.1rem; font-weight: bold;">💬</a>
    
    <button onclick="navigator.clipboard.writeText(window.location.href); logShareClickEvent('Copy Link'); const b = document.getElementById('live-share-badge-count'); if(b) b.textContent = parseInt(b.textContent || 0) + 1; const toast = document.getElementById('toast-copy-notification'); if(toast) { toast.style.opacity = '1'; toast.style.transform = 'translateY(0)'; setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(10px)'; }, 2000); }" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 6px; background: #ffffff; color: #475569; border: 1px solid #cbd5e1; cursor: pointer; font-size: 0.95rem; font-weight: bold;" title="Copy Link Shortcut">🔗</button>

    <div id="toast-copy-notification" style="position: absolute; right: 0; bottom: 50px; background: #0a1f44; color: #ffffff; font-size: 0.78rem; font-weight: 700; padding: 6px 12px; border-radius: 6px; box-shadow: 0 4px 12px rgba(10,31,68,0.15); opacity: 0; transform: translateY(10px); transition: opacity 0.2s ease, transform 0.2s ease; pointer-events: none; white-space: nowrap; font-family: sans-serif; z-index: 10;">
      Link copied!
    </div>
  </div>

  </div> <!-- END WHITE CARD CONTAINER -->
`; 




// Inject supplementary global formatting scope target constraints directly into the container to style inner rich text tags smoothly 
const richTextStyles = document.createElement("style"); 
richTextStyles.textContent = ` 
  /* 🏛️ MASTER ARTICLE CONTAINER DESIGN LOGIC FOR 1450PX VIEW */
  .article-master-card {
    background: #ffffff !important; 
    border: 1px solid #e2e8f0 !important; 
    border-radius: 16px !important; 
    padding: 48px !important; 
    box-shadow: 0 4px 20px rgba(10, 31, 68, 0.03) !important; 
    width: 100% !important; 
    box-sizing: border-box !important; 
    margin-bottom: 40px !important;
    text-align: left !important;
  }

  #article-body-copy p { margin: 0 0 1.5rem 0; width: 100%; max-width: 100%; box-sizing: border-box; word-break: break-word; overflow-wrap: break-word; white-space: normal; } 
  #article-body-copy h1, #article-body-copy h2, #article-body-copy h3 { color: #0a1f44; margin: 2rem 0 1rem 0; font-weight: 700; line-height: 1.3; word-break: break-word; } 
  #article-body-copy h1 { font-size: 2rem; } 
  #article-body-copy h2 { font-size: 1.6rem; } 
  #article-body-copy h3 { font-size: 1.3rem; } 
  #article-body-copy ul, #article-body-copy ol { margin: 0 0 1.5rem 0; padding-left: 1.5rem; box-sizing: border-box; } 
  #article-body-copy li { margin-bottom: 0.5rem; word-break: break-word; overflow-wrap: break-word; white-space: normal; } 
  
  /* 🔗 STYLED INLINE HYPERLINKS LOOKUP AND HOVER ACTIONS */ 
  #article-body-copy a { 
    color: #10b981 !important; 
    text-decoration: underline !important; 
    text-underline-offset: 4px !important; 
    font-weight: 600 !important; 
    transition: color 0.15s ease, text-decoration-color 0.15s ease !important; 
  } 
  #article-body-copy a:hover { 
    color: #059669 !important; 
    text-decoration: underline !important; 
    text-decoration-thickness: 2px !important; 
  } 
  #article-body-copy a:active { 
    color: #047857 !important; 
  }

  /* 📱 MOBILE RESPONSIVE LAYOUT BREAKPOINTS FOR THE MASTER CARD COVERS */
  @media (max-width: 768px) {
    .article-master-card {
      padding: 24px !important;
      border-radius: 12px !important;
    }
    .social-share-container-block {
      width: 100% !important;
      display: grid !important;
      grid-template-columns: repeat(4, 1fr) !important;
      gap: 8px !important;
      padding: 12px !important;
    }
    .social-share-container-block span {
      grid-column: 1 / -1 !important;
      text-align: left !important;
      margin-bottom: 4px !important;
    }
    .social-share-container-block a, .social-share-container-block button {
      width: 100% !important;
    }
  }
`;


articleWrapper.appendChild(richTextStyles); 
articleWrapper.querySelector('.art-title').textContent = post.title; 
articleWrapper.querySelector('.art-summary').textContent = post.summary; 
renderContainer.appendChild(articleWrapper); 

} catch (pipelineError) { 
  console.error("Pipeline failure:", pipelineError); 
  renderContainer.innerHTML = `<div style="text-align:center; color:#ef4444; padding:100px 0;">Unable to load document logs.</div>`; 
} 
} 
})();

// Loop through your sharing icons to bind analytics listeners securely
setTimeout(() => {
  document.querySelectorAll('.social-share-container-block a').forEach(anchorNode => {
    anchorNode.addEventListener('click', () => {
      const platformName = anchorNode.getAttribute('data-platform');
      if (platformName) {
        logShareClickEvent(platformName);
      }
    });
  });
}, 500);

// Fixed telemetry log sender function
async function logShareClickEvent(platform) {
  const activeDbClient = window.supabaseClient || (typeof client !== 'undefined' ? client : null);
  const activeParams = new URLSearchParams(window.location.search);
  const activeArticleSlug = activeParams.get('slug');

  if (!activeDbClient || !activeArticleSlug) return;
  try {
    await activeDbClient.from('share_analytics').insert([
      { article_slug: activeArticleSlug, chosen_platform: platform }
    ]);
    
    const badgeElement = document.getElementById('live-share-badge-count');
    if (badgeElement) {
      badgeElement.textContent = parseInt(badgeElement.textContent || 0) + 1;
    }
  } catch (err) {
    console.error("Analytics failure log suppressed:", err);
  }
}
