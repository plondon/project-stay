$(document).ready(function(){
	//hamburger
	$('#hamburger').on("click", function(){
		$('#hamburger-menu').toggleClass('active-header');
		$('#wrapper').toggleClass('active-header');
	});
	//second nav-bar page navigation
	$('.second-nav ul a').on("click", function(e) {
		var sti_position = $($(this).attr('href')).offset().top-180
		console.log(sti_position)
		e.preventDefault();
		$("html, body").animate({ 
	        scrollTop: sti_position
			    }, 'slow');
	});	
	$('.up-arrow').on("click", function(){
		$("html, body").animate({
			scrollTop: $('#wrapper').offset().top-181
		}, 'slow');
	});
})