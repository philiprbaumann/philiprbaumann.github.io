$(document).ready(function() {

	$('.nav-toggle').click(function(e) {
		
		e.preventDefault();
		$("html").toggleClass("openNav");
		$(".nav-toggle").toggleClass("active");

	});

	$("li").on("mouseover", function() {
		$("li").removeClass("active");
		$(this).addClass("active");
	});
	
});