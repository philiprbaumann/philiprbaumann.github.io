$(document).ready(function() {

	$('.music-link').click(function(e) {
		$(this).next().toggle();;
	});

	$('')
	
});

$(window).scroll(function() {
	var wH = $(window).height(); // Get the current computed height
	var wS = $(this).scrollTop(); // Get the current vertical position of the scroll bar
	$('.playlist').each(function() {
		var hT = $( this ).offset().top; // returns the distance of the outer border of the current element relative to the closest positioned ancestor element. 
		var hH = $( this ).outerHeight(); // outerheight for this element
		if (wS > (hT+(hH/2)-wH) && (hT > wS) ){
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