/* ==========================================================================
   📜 FILINGS4U GLOBAL JAVASCRIPT ARCHITECTURE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('mobile-menu-trigger');
  const drawer = document.getElementById('nav-links-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const topButton = document.getElementById('back-to-top-btn');

  // 1. MOBILE MAIN DRAWER TOGGLE (Right-to-Left Slide Logic)
  if (trigger && drawer && backdrop) {
    trigger.addEventListener('click', () => {
      drawer.classList.toggle('translate-x-full');
      drawer.classList.toggle('invisible');
      backdrop.classList.toggle('hidden');
      
      const isMenuOpen = !drawer.classList.contains('translate-x-full');
      trigger.innerHTML = isMenuOpen ? '✕' : '☰';
      trigger.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
    });

    // Close drawer if user clicks anywhere outside on the dark backdrop
    backdrop.addEventListener('click', () => trigger.click());
  }

  // 2. MOBILE INNER ACCORDION DROPDOWNS
  document.querySelectorAll('#nav-links-drawer > div > a').forEach(triggerLink => {
    triggerLink.addEventListener('click', function(e) {
      if (window.innerWidth >= 1024) return;
      e.preventDefault();
      
      const currentDropdown = this.nextElementSibling;
      if (currentDropdown) {
        currentDropdown.classList.toggle('hidden');
      }

      // Smooth UX Auto-Close: Hide all other open categories
      document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
        if (dropdown !== currentDropdown) {
          dropdown.classList.add('hidden');
        }
      });
    });
  });

  // 3. HARDWARE-ACCELERATED BACK-TO-TOP PERFORMANCE
  if (topButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        topButton.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
        topButton.classList.add('translate-y-0', 'opacity-100');
      } else {
        topButton.classList.remove('translate-y-0', 'opacity-100');
        topButton.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      }
    }, { passive: true }); // Passive flag ensures scrolling never drops smooth frame rates on mobile

    topButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. SUPABASE HOMEPAGE FEED ORCHESTRATION LAYER
  const checkInterval = setInterval(() => {
    if (window.supabase) {
      clearInterval(checkInterval);
      initializeHomepageFeed();
    }
  }, 100);
  
  // Safety timeout clears verification queue loop after 4 seconds
  setTimeout(() => clearInterval(checkInterval), 4000);
});

// Realtime Database Async Fetch Operations Pipe
async function initializeHomepageFeed() {
  const targetContainer = document.getElementById('public-homepage-blog-grid-target');
  if (!targetContainer) return;

  try {
    const clientInstance = window.supabase;
    const { data: articles, error } = await clientInstance
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);

    if (error) throw error;

    if (!articles || articles.length === 0) {
      targetContainer.innerHTML = '<div class="col-span-1 md:col-span-3 text-center text-[#64748b] font-semibold py-5">No articles found.</div>';
      return;
    }

    targetContainer.innerHTML = '';
    articles.forEach(item => {
      const dateFormatted = new Date(item.created_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });

      const postAnchor = document.createElement('a');
      postAnchor.href = `article.html?slug=${item.slug}`;
      postAnchor.className = "bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#10b981] transition-all duration-200 flex flex-col text-inherit no-underline";
      
      postAnchor.innerHTML = `
        <div style="height:180px; width:100%; background:url('${item.image_url || 'images/blog-fallback.jpg'}') center/cover no-repeat;" class="bg-gray-100 block"></div>
        <div class="p-5 lg:p-6 text-left flex flex-col box-border">
          <div class="flex justify-between items-center mb-3 gap-2 text-xs">
            <span class="bg-[#10b981] text-white font-bold uppercase tracking-wider px-2 py-0.5 rounded text-[10px]">${item.category}</span>
            <span class="text-[#94a3b8] font-semibold">${dateFormatted}</span>
          </div>
          <h3 class="text-[#0a1f44] font-bold text-base lg:text-lg leading-snug mb-2 text-left">${item.title}</h3>
          <p class="text-[#64748b] text-sm leading-relaxed text-left">${item.summary || 'Click to view full insight data analysis report...'}</p>
        </div>`;
        
      targetContainer.appendChild(postAnchor);
    });
  } catch (err) {
    console.error("Database streaming failure caught:", err);
    targetContainer.innerHTML = '<div class="col-span-1 md:col-span-3 text-center text-red-500 font-semibold py-5">Unable to load updates.</div>';
  }
}
