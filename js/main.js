$(document).ready(function() {

	// Smart resize
	(function($,sr){
		var debounce = function (func, threshold, execAsap) {
			var timeout;

			return function debounced () {
				var obj = this, args = arguments;
					function delayed () {
					if (!execAsap) {
						func.apply(obj, args);
					}
					timeout = null;
				}

				if (timeout) {
					clearTimeout(timeout);
				}
				else if (execAsap) {
					func.apply(obj, args);
				}

				timeout = setTimeout(delayed, threshold || 300);
			};
		};

		jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

	})(jQuery,'smartresize');


	
	// Debounce function for slowing down jittery events
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	};


	$(window).smartresize(function() {
		location.reload();
	});







	if (Modernizr.mq('only screen and (min-width: 767px)')) { // only execute if on desktop screen sizes

		// Development only - remove before deploying to production
		$('header a').click(function() {
			event.preventDefault();
		});


		// Sticky navigation

		// jQuery Headroom
		var headerContainer = document.querySelector('header .container');
		var headroom  = new Headroom(headerContainer, {
			onUnpin : function() {

			},
			onPin : function() {
				
			}
		});
		headroom.init();

		// Set width of header to width of inner-wrapper
		var innerWrapperWidth = $('.inner-wrapper').innerWidth();
		$('header .container').css('width', innerWrapperWidth);

	}







	
	if (Modernizr.mq('only screen and (max-width: 768px)')) { // only execute if on phone or tablet screen sizes
	
		// Menu toggle
		$('.toggle-nav').click(function() {
			$('.inner-wrapper').toggleClass('global-nav-is-opened');
			$('.main-body').toggleClass('transparent');
			$('footer').toggleClass('transparent');
			$('.kaseya-logo').toggleClass('transparent');
			$(this).toggleClass('rotate-clockwise-90-degrees');
			event.preventDefault();
		});


		// Menu item expand
		$('.global-nav .js-root-menu').click(function() {
			
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