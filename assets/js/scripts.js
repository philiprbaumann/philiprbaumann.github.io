$(document).ready(function() {

	$('.music-link').click(function(e) {
		$(this).next().toggle();;
	});

	$('')
	
});

$(window).scroll(function() {
	var wH = $(window).height();
	var wS = $(this).scrollTop();
	$('.playlist').each(function() {
		var hT = $( this ).offset().top;
		var hH = $( this ).outerHeight();
		if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
			$( this ).addClass('view')
			if ($( this ).data('src')) {
				$($( this ).prop('src', $( this ).data('src')).data('src', false));
			}
		} else {
			$( this ).removeClass('view')
		}
	});
});


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