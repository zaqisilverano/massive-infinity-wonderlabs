$(document).ready(function() {
	$('.navbar-menu').click(function() {
		var widthBody = $( window ).width();
		if(widthBody >= 768){
			$('.navbar').toggleClass('hide-menu');
		} else {
			$('.navbar').toggleClass('show-menu');
		}
	});
	$(window).resize(function() {		
		$('.navbar').removeClass('hide-menu');
		$('.navbar').removeClass('show-menu');
	});
});