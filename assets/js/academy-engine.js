/**
 * ==========================================================================
 * FILINGS4U RESOURCE ACADEMY CONTENT PIPELINE ENGINE
 * ==========================================================================
 */
(function() {
  // Global reference cache array to store rows locally for frictionless filtering
  let globalPostStorageCache = [];
  
  // SECURE PRIVATE CLIENT: Isolated instance to prevent global namespace pollution
  let privateAcademyClient = null;

  window.addEventListener('DOMContentLoaded', () => {
    // Poll the window object scope for up to 4 seconds to guarantee the library is fully loaded
    const lookupTrack = setInterval(() => {
      
      // Look for the standard global CDN object wrapper safely
      if (typeof supabase !== 'undefined' && typeof supabase.createClient === 'function') {
        clearInterval(lookupTrack);
        initializeAcademyPipeline();
      }
    }, 100);
    setTimeout(() => clearInterval(lookupTrack), 4000);
  });

  /**
   * Core Database Initialization Entry Point
   */
  async function initializeAcademyPipeline() {
    const renderContainer = document.getElementById('academy-posts-render-target');
    if (!renderContainer) return;

    try {
      const url = 'https://lrbimrlbskjweynxlgas.supabase.co';
      const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYmltcmxic2tqd2V5bnhsZ2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjQ0NTYsImV4cCI6MjA5NDEwMDQ1Nn0.I8fQ6ZjA9oaTqJCF-7Z7vUboXC8zv2cogBv4PC_1ihU';

      // FIX: Securely build a dedicated database connection token instance isolated to this file scope
      privateAcademyClient = supabase.createClient(url, key);

      // Bulletproof Validation Check: Verify query methods are ready before firing network streams
      if (!privateAcademyClient || typeof privateAcademyClient.from !== 'function') {
        throw new TypeError('Private database client initialization failed to wrap query builder methods.');
      }

      // Fetch all valid records sorted chronologically
      const { data: records, error } = await privateAcademyClient
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Hydrate global cache storage array tracking nodes
      globalPostStorageCache = records || [];

      // Render initial full dashboard data grid presentation states
      executeGridRenderPipeline(globalPostStorageCache);

      // Initialize layout tracking filter node button clicks
      setupFilterEventHandlers();

    } catch (networkErr) {
      console.error("Critical database synchronization thread broke:", networkErr);
      renderContainer.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; color:#ef4444; font-weight:600; padding:40px 0;">
          ⚠️ Unable to establish compliance sync pipelines. Please reload page.
        </div>`;
    }
  }

  /**
   * UI Component Layout Rendering Core Engine
   */
  function executeGridRenderPipeline(postsArray) {
    const targetGrid = document.getElementById('academy-posts-render-target');
    if (!targetGrid) return;

    targetGrid.innerHTML = '';

    if (postsArray.length === 0) {
      targetGrid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; color:#64748b; font-weight:600; padding:60px 0;">
          No articles or guides currently mapped inside this taxonomy track.
        </div>`;
      return;
    }

    postsArray.forEach(post => {
      const formattedTimestamp = new Date(post.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      const displayTag = (post.category && post.category.toLowerCase() === 'education') ? 'Educational Guide' : 'Company Update';

      const cardAnchorNode = document.createElement('a');
      cardAnchorNode.href = `article.html?slug=${post.slug || '#'}`;
      cardAnchorNode.className = 'academy-card-item';

      cardAnchorNode.innerHTML = `
        <div class="card-img-surface" style="background: url('${post.image_url || 'images/blog-fallback.jpg'}') center/cover no-repeat; background-color:#f1f5f9;"></div>
        <div class="card-content-frame">
          <div class="card-meta-line">
            <span class="card-category-badge" style="background-color: ${post.category === 'education' ? '#0a1f44' : '#10b981'};">
              ${displayTag}
            </span>
            <span class="card-date-stamp">${formattedTimestamp}</span>
          </div>
          <h3 class="card-heading-title">${post.title}</h3>
          <p class="card-excerpt-summary">${post.summary || 'Click to access full compliance insight reports and analysis records...'}</p>
        </div>
      `;

      targetGrid.appendChild(cardAnchorNode);
    });
  }

  /**
   * Action Handler Mapping Rules for Category Toggles
   */
  function setupFilterEventHandlers() {
    const tabRowContainer = document.getElementById('academy-category-filter-row');
    if (!tabRowContainer) return;

    tabRowContainer.addEventListener('click', (event) => {
      const clickedButton = event.target.closest('.filter-pill-btn');
      if (!clickedButton) return;

      const selectedScope = clickedButton.getAttribute('data-filter');
      if (!selectedScope) return;

      tabRowContainer.querySelectorAll('.filter-pill-btn').forEach(btn => {
        btn.classList.remove('active-channel');
      });
      clickedButton.classList.add('active-channel');

      if (selectedScope === 'all') {
        executeGridRenderPipeline(globalPostStorageCache);
      } else {
        const matchingFilteredRows = globalPostStorageCache.filter(row => {
          return row.category && row.category.toLowerCase() === selectedScope.toLowerCase();
        });
        executeGridRenderPipeline(matchingFilteredRows);
      }
    });
  }
})();