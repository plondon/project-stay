// second nav-bar page navigation part 1
var jump = function(e) {
	if(e) {
		e.preventDefault();
		var target = $(this).attr("href");
	}
	else {
		var target = location.hash;
	}
	var jump_animation = function(position) {
		$('html, body').animate({
			scrollTop: $(target).offset().top - position
		}, 1500);
	}
	if ($('.second-nav').hasClass('active-second-header') === true) {
		jump_animation(181)
	}
	else {
		jump_animation(138)
	}
}
$('html, body').hide()

$(document).ready(function(){
	// hamburger menu
	$('#hamburger').on("click", function(){
		$('#hamburger-menu').toggleClass('active-header');
		$('#wrapper').toggleClass('active-header');
	});

	// second nav-bar reveal effect
	$('#bar .panel a').on("mouseover", function(){
		var second_nav_id = $(this).attr('id')
		$('.second-nav').removeClass('active-second-header')
		$('#' + second_nav_id + '.second-nav').addClass('active-second-header')
	});

	// second nav-bar page navigation part 2
	$('.second-nav ul a[href^=#]').on("click", jump)

	if (location.hash) {
		setTimeout(function(){
			$('html, body').scrollTop(0).show();
			jump();
		}, 0);
	}
	else {
		$('html, body').show();
	}

	// up arrow clicker
	$('.up-arrow').on("click", function(){
		$("html, body").animate({
			scrollTop: $('#wrapper').offset().top-181
		}, 'slow');
	});
	// expandable list
	var $item1 = $('.resources').children('ol').children('li')
 		$item1.click(function(){
 			$(this).children().slideToggle();
 		});
})