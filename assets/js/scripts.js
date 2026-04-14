$(document).ready(function() {

	$('.music-link').click(function(e) {
		$(this).next().toggle();;
	});

});

$(window).scroll(function() {
	var wH = $(window).height();
	var wS = $(this).scrollTop();
	$('.playlist').each(function() {
		var hT = $( this ).offset().top;
		var hH = $( this ).outerHeight();
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