/** Global navigation interactions */
(function(){
  function bind(){
    const trigger=document.getElementById('mobile-menu-trigger');
    const drawer=document.getElementById('nav-links-container');
    if(!trigger||!drawer||trigger.dataset.bound==='true') return;
    trigger.addEventListener('click',function(e){e.stopPropagation();const open=!drawer.classList.contains('active');drawer.classList.toggle('active',open);drawer.classList.toggle('mobile-active',open);document.body.classList.toggle('nav-open',open);trigger.setAttribute('aria-expanded',open?'true':'false')});
    drawer.addEventListener('click',function(e){const toggle=e.target.closest('.dropdown-toggle');if(toggle&&window.innerWidth<=1024){e.preventDefault();const parent=toggle.parentElement;drawer.querySelectorAll('.nav-item-dropdown').forEach(x=>{if(x!==parent){x.classList.remove('mobile-open','active-toggle')}});parent.classList.toggle('mobile-open');parent.classList.toggle('active-toggle')}else if(e.target.closest('a')&&window.innerWidth<=1024&&!e.target.closest('.dropdown-toggle')){close()}});
    document.addEventListener('click',function(e){if(window.innerWidth<=1024&&drawer.classList.contains('active')&&!drawer.contains(e.target)&&!trigger.contains(e.target)) close()});
    function close(){drawer.classList.remove('active','mobile-active');document.body.classList.remove('nav-open');trigger.setAttribute('aria-expanded','false');drawer.querySelectorAll('.nav-item-dropdown').forEach(x=>x.classList.remove('mobile-open','active-toggle'))}
    trigger.dataset.bound='true';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(bind,0));else setTimeout(bind,0);
  document.addEventListener('filings4u:navigation-rendered',bind);
  const o=new MutationObserver(bind);o.observe(document.documentElement,{childList:true,subtree:true});setTimeout(()=>o.disconnect(),3000);
})();
