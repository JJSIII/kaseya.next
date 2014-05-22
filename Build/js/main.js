$(document).ready(function() {
	

	// Menu toggle
	$('.toggle-nav').click(function() {
		$('.wrapper').toggleClass('global-nav-is-opened');
		$('.main-body').toggleClass('transparent');
		$(this).toggleClass('rotate-clockwise-90-degrees');
		event.preventDefault();
	});

	// Menu item expand
	$('.global-nav > ul a').click(function() {
		
		var clickedSubMenu = $(this).next('.global-nav-sub-menu');

		// Hide all sub menus except for the one clicked
		$('.global-nav-sub-menu').not(clickedSubMenu).addClass('visuallyhidden');

		// Toggle visibility of clicked submenu
		if($(clickedSubMenu).hasClass('visuallyhidden')) {
			clickedSubMenu.removeClass('visuallyhidden');
		} else {
			clickedSubMenu.addClass('visuallyhidden');
		}

		event.preventDefault();
	});


});