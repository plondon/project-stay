$(document).ready(function(){
	$('#hamburger').on("click", function(){
		$('#hamburger-menu').toggleClass('active-header');
		$('#wrapper').toggleClass('active-header');
	});
	$('.second-nav ul a').on("click", function(e) {
		var sti_position = $($(this).attr('href')).offset().top-180
		console.log(sti_position)
		e.preventDefault();
		$("html, body").animate({ 
	        scrollTop: sti_position
			    }, 'slow');
	});	
})