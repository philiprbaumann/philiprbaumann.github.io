/* Minimal JS polish:
 * - Remove stray $('') and double semicolon
 * - Simplify lazy-load property set
 * - Throttle scroll handler with requestAnimationFrame
 */

$(function () {
  $('.music-link').on('click', function (e) {
    e.preventDefault();
    $(this).next().toggle();
  });
});

(function () {
  var ticking = false;

  function onScroll() {
    var wH = $(window).height();
    var wS = $(window).scrollTop();

    $('.playlist').each(function () {
      var $el = $(this);
      var hT = $el.offset().top;
      var hH = $el.outerHeight();

      if (wS > (hT + (hH / 2) - wH) && (hT > wS)) {
        $el.addClass('view');

        var dataSrc = $el.data('src');
        if (dataSrc) {
          $el.prop('src', dataSrc).data('src', false);
        }
      } else {
        $el.removeClass('view');
      }
    });

    ticking = false;
  }

  $(window).on('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  });

  // Run once on load to catch above-the-fold content
  onScroll();
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