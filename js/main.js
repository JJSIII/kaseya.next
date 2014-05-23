$(document).ready(function() {


	if (Modernizr.mq('only screen and (min-width: 767px)')) {

	// Development only - remove before deploying to production
		$('header a').click(function() {
			event.preventDefault();
		});

	}
	
	if (Modernizr.mq('only screen and (max-width: 768px)')) { // only execute if on phone or tablet screen sizes
	
		// Menu toggle
		$('.toggle-nav').click(function() {
			$('.inner-wrapper').toggleClass('global-nav-is-opened');
			$('.main-body').toggleClass('transparent');
			$('footer').toggleClass('transparent');
			$('.header-branding').toggleClass('transparent');
			$(this).toggleClass('rotate-clockwise-90-degrees');
			event.preventDefault();
		});

		// Menu item expand
		$('.global-nav > ul > li > a').click(function() {
			
			var clickedSubMenu = $(this).next('.global-nav-sub-menu');

			// Hide all sub menus except for the one clicked
			$('.global-nav-sub-menu').not(clickedSubMenu).addClass('visually-hidden');

			// Toggle visibility of clicked submenu
			if($(clickedSubMenu).hasClass('visually-hidden')) {
				clickedSubMenu.removeClass('visually-hidden');
			} else {
				clickedSubMenu.addClass('visually-hidden');
			}

			event.preventDefault();
		});

	}


});