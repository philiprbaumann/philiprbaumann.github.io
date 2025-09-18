/**
 * Vanilla JS replacement for jQuery interactions.
 * - Toggle the adjacent .music-info when a .music-link is clicked
 * - Lazy-load and reveal .playlist iframes using IntersectionObserver
 * - Apply native loading="lazy" for iframes where possible
 */

document.addEventListener('DOMContentLoaded', function () {
  // Delegate clicks on the music toggle button to control its associated panel
  document.addEventListener('click', function (e) {
    var button = e.target.closest('button.music-link');
    if (!button) return;

    var panelId = button.getAttribute('aria-controls');
    var panel = panelId ? document.getElementById(panelId) : null;

    // Fallback: try the sibling .music-info within the same list item
    if (!panel && button.parentElement) {
      var maybe = button.parentElement.querySelector('.music-info');
      if (maybe) panel = maybe;
    }
    if (!panel) return;

    var expanded = button.getAttribute('aria-expanded') === 'true';
    var next = !expanded;
    button.setAttribute('aria-expanded', next ? 'true' : 'false');

    // Toggle visibility for both visual display and accessibility
    if (next) {
      panel.removeAttribute('hidden');
      panel.style.display = 'block';
    } else {
      panel.setAttribute('hidden', '');
      panel.style.display = 'none';
    }
  });
});

// Lazy-load and "view" state for Spotify iframes
(function () {
  var iframes = document.querySelectorAll('iframe.playlist');
  if (iframes.length === 0) return;

  // Ensure native lazy loading where supported
  iframes.forEach(function (el) {
    try {
      if (!el.hasAttribute('loading')) {
        el.setAttribute('loading', 'lazy');
      }
    } catch (e) {
      // no-op
    }
  });

  function reveal(el) {
    el.classList.add('view');
    var dataSrc = el.getAttribute('data-src');
    if (dataSrc) {
      el.setAttribute('src', dataSrc);
      el.removeAttribute('data-src');
    }
  }

  function conceal(el) {
    el.classList.remove('view');
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var el = entry.target;
        if (entry.isIntersecting) {
          reveal(el);
        } else {
          conceal(el);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -25% 0px',
      threshold: 0.1
    });

    iframes.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: check in-view on scroll/resize
    function inView(el) {
      var rect = el.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh && rect.bottom > 0;
    }
    function check() {
      iframes.forEach(function (el) {
        if (inView(el)) {
          reveal(el);
        } else {
          conceal(el);
        }
      });
    }
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    window.addEventListener('load', check);
    check();
  }
})();


// function toogleIframe(iframe) {
//   //Check if is show with opacity property,
//   if (iframe.style.opacity == 0) {
//     //and set to original values,
//     iframe.style.opacity = 1;
//     iframe.style.height = '500px';
//   } else {
//     //or hide it.
//     iframe.style.opacity = 0;
//     iframe.style.height = '0px';
//   }
// }