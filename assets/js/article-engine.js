/** 
 * ========================================================================== 
 * FILINGS4U SINGLE ARTICLE DATA RECOVERY VIEWPORT CONTROLLER 
 * ========================================================================== 
 */ 
(function() { 
  let readerClientInstance = null; 

  window.addEventListener('load', async () => { 
    const isLibraryReady = typeof supabase !== 'undefined' || typeof supabaseJs !== 'undefined' || typeof window.supabase !== 'undefined' || typeof window.getFilings4uDbInstance === 'function'; 
    if (!isLibraryReady) { 
      renderErrorState("System Setup Error: Core script libraries failed to initialize in head."); 
      return; 
    } 
    try { 
      const url = 'https://lrbimrlbskjweynxlgas.supabase.co'; 
      const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU'; 

      // 1. Check for custom singletons first 
      if (window.getFilings4uDbInstance && typeof window.getFilings4uDbInstance === 'function') { 
        readerClientInstance = window.getFilings4uDbInstance(); 
      } 
      // 2. Check if a single instance already lives on the window object globally 
      if (!readerClientInstance && window.filings4uSharedSupabaseClient) { 
        readerClientInstance = window.filings4uSharedSupabaseClient; 
      } 
      // 3. Fallback: Create a new client ONLY if no active instance exists anywhere 
      if (!readerClientInstance) { 
        const supabaseLib = window.supabase || (typeof supabase !== 'undefined' ? supabase : null); 
        if (supabaseLib && typeof supabaseLib.createClient === 'function') { 
          window.filings4uSharedSupabaseClient = supabaseLib.createClient(url, key); 
          readerClientInstance = window.filings4uSharedSupabaseClient; 
        } 
      } 

      if (!readerClientInstance || typeof readerClientInstance.from !== 'function') { 
        throw new TypeError("Database interaction layer connection handshake failed."); 
      } 

      const urlParams = new URLSearchParams(window.location.search); 
      const activeSlug = urlParams.get('slug'); 
      if (!activeSlug) { 
        renderErrorState("Error: No valid article slug resource specified in URL query. format: ?slug=your-post-url"); 
        return; 
      } 

      await fetchArticleBodyPayload(activeSlug); 
    } catch (err) { 
      console.error("Reader initialization crash:", err); 
      renderErrorState("Failed to establish server connection handshake protocols safely."); 
    } 
  }); 

  /** 
   * Database Row Payload Streaming Engine 
   */ 
  async function fetchArticleBodyPayload(slugString) { 
    const contentStream = document.getElementById('articleViewContentWrapper'); 
    const sidebarStream = document.getElementById('sidebarRecentPostsTargetTrack'); 

    try { 
      const { data: posts, error } = await readerClientInstance 
        .from('blog_posts') 
        .select('*') 
        .eq('slug', slugString); 

      if (error || !posts || posts.length === 0) { 
        renderErrorState(`Article "${slugString}" Not Found. The resource may have been deleted, archived, or misspelled.`); 
        return; 
      } 

      // 🚀 FIXED: Must grab index 0 from database array output to access attributes safely
      const activePost = posts[0]; 
      
      const formattedDate = new Date(activePost.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); 
      const parsedParagraphs = activePost.content ? activePost.content.split('\n').map(p => p.trim() ? `<p style="margin-bottom:1.5rem; line-height:1.7; color:#334155;">${p}</p>` : '').join('') : `<p>${activePost.summary || 'No summary overview text provided.'}</p>`; 
      const definitiveImage = activePost.image_url || 'images/blog-fallback.jpg'; 

      if (contentStream) { 
        contentStream.innerHTML = ` 
          <a href="blog.html" class="btn-back-link" style="display:inline-block; margin-bottom: 20px; color:#10b981; font-weight:700; text-decoration:none;">← Return to Insights Feed</a> 
          <img src="${definitiveImage}" alt="${activePost.title || 'Blog Image'}" class="article-hero-image" style="width:100%; max-height:450px; object-fit:cover; border-radius:12px; margin-bottom:24px;" onerror="this.onerror=null; this.src='images/blog-fallback.jpg';"> 
          <div class="article-header-meta" style="margin-bottom:16px; font-size:0.9rem; color:#64748b;"> 
            <span class="category-tag" style="background: ${activePost.category === 'education' ? '#0a1f44' : '#10b981'} !important; color:#ffffff; padding:4px 10px; border-radius:4px; font-size:0.8rem; font-weight:700; text-transform:uppercase;"> 
              ${(activePost.category && activePost.category.toLowerCase() === 'education') ? 'Educational Guide' : 'Company Update'} 
            </span> 
            <span style="margin: 0 8px;">•</span> 
            <span>Published: ${formattedDate}</span> 
          </div> 
          <h1 style="color:#0a1f44; font-size:2.5rem; font-weight:900; margin-bottom:24px; line-height:1.2;">${activePost.title}</h1> 
          <div class="article-body-content">${parsedParagraphs}</div> 
        `; 
      } 

      if (sidebarStream) { 
        const { data: recentRows, error: sidebarErr } = await readerClientInstance 
          .from('blog_posts') 
          .select('title, slug, created_at') 
          .neq('slug', slugString) 
          .order('created_at', { ascending: false }) 
          .limit(4); 

        if (sidebarErr || !recentRows || recentRows.length === 0) { 
          sidebarStream.innerHTML = '<span style="font-size:0.85rem; color:#64748b;">No other recent topics mapped.</span>'; 
        } else { 
          sidebarStream.innerHTML = ''; 
          recentRows.forEach(row => { 
            const sideDate = new Date(row.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); 
            const itemNode = document.createElement('a'); 
            itemNode.href = `article.html?slug=${row.slug}`; 
            itemNode.style.cssText = "display:block; text-decoration:none; padding:12px 0; border-bottom:1px dashed #e2e8f0; color:#475569; font-size:0.9rem; font-weight:600; transition:color 0.2s;"; 
            itemNode.onmouseover = function() { this.style.color = '#10b981'; }; 
            itemNode.onmouseout = function() { this.style.color = '#475569'; }; 
            itemNode.innerHTML = ` 
              <div style="font-size:0.72rem; color:#94a3b8; font-weight:700; text-transform:uppercase; margin-bottom:2px;">${sideDate}</div> 
              <div style="line-height:1.3; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${row.title}</div> 
            `; 
            sidebarStream.appendChild(itemNode); 
          }); 
        } 
      } 
    } catch (networkError) { 
      console.error("Reader transaction crash logged:", networkError); 
      renderErrorState("A structural network error interrupted data stream protocols."); 
    } 
  } 

  function renderErrorState(errorMessageText) { 
    const errorTargetGrid = document.getElementById('articleViewContentWrapper'); 
    if (errorTargetGrid) { 
      errorTargetGrid.innerHTML = ` 
        <div style="text-align: center !important; padding: 50px 20px !important; font-family: system-ui, sans-serif !important; max-width: 550px !important; margin: 40px auto !important; background: #ffffff !important; border: 1px solid #e2e8f0 !important; border-radius: 12px !important; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05) !important;"> 
          <span style="font-size: 3.5rem !important; display: block !important; margin-bottom: 12px !important;">⚠️</span> 
          <h2 style="font-size: 1.35rem !important; font-weight: 800 !important; color: #0f172a !important; margin: 0 0 10px 0 !important;">Content Assembly Alert</h2> 
          <p style="font-size: 0.9rem !important; color: #64748b !important; line-height: 1.6 !important; margin: 0 0 24px 0 !important;">${errorMessageText}</p> 
          <a href="blog.html" style="display: inline-block !important; background: #10b981 !important; color: #ffffff !important; font-weight: 700 !important; font-size: 0.85rem !important; text-decoration: none !important; padding: 12px 24px !important; border-radius: 6px !important; transition: background 0.15s !important;">← Back to Insights Hub</a> 
        </div> 
      `; 
    } 
  } 
})();
