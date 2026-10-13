(function(){
  // one-time entry disclaimer modal — shown once per browser via localStorage
  var modal = document.getElementById('site-disclaimer-modal');
  if (modal){
    var KEY = 'solaris-disclaimer-ack-v1';
    var seen = false;
    try { seen = !!localStorage.getItem(KEY); } catch(e){}
    if (!seen){
      modal.removeAttribute('hidden');
      document.documentElement.style.overflow = 'hidden';
    }
    var ackBtn = document.getElementById('disclaimer-ack');
    if (ackBtn){
      ackBtn.addEventListener('click', function(){
        modal.setAttribute('hidden', '');
        document.documentElement.style.overflow = '';
        try { localStorage.setItem(KEY, '1'); } catch(e){}
      });
    }
  }

  // scroll-reveal for cards, frames, stat boxes
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && revealEls.length){
    var ro = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('in-view'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function(el){ ro.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  }

  // animate composite-score bars from 0 once their frame scrolls into view
  var bars = Array.prototype.slice.call(document.querySelectorAll('.ev-bar-fill[data-fill]'));
  if ('IntersectionObserver' in window && bars.length){
    var bo = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){
          var el = e.target;
          var target = el.getAttribute('data-fill');
          requestAnimationFrame(function(){ el.style.width = target; });
          bo.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(function(b){ b.style.width = '0%'; bo.observe(b); });
  }

  // in-page jump-nav active state (pages with #stage sections + .page-nav anchors)
  var pageLinks = Array.prototype.slice.call(document.querySelectorAll('.page-nav a'));
  var pageSections = pageLinks.map(function(a){ return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  if ('IntersectionObserver' in window && pageSections.length){
    var current = null;
    function setActive(id){
      if (id === current) return;
      current = id;
      pageLinks.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href') === '#' + id); });
    }
    var io = new IntersectionObserver(function(entries){
      var visible = entries.filter(function(e){ return e.isIntersecting; })
        .sort(function(a,b){ return a.boundingClientRect.top - b.boundingClientRect.top; });
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-15% 0px -70% 0px', threshold: [0, 1] });
    pageSections.forEach(function(s){ io.observe(s); });
  }
})();
