/*    =====================================
                   loader
     ====================================== */

	 $(window).on("load", function () {
		"use strict";
		setTimeout(function () {
			$(".loader").fadeOut(800);
		}, 1000);
	
	});
	
	
	
	jQuery(function ($) {
		"use strict";
	
		$(".nav-link.scroll").on("click", function (event) {
			event.preventDefault();
			$("html,body").animate({
				scrollTop: $(this.hash).offset().top - 60}, 300);
		});
	
		$(".side-nav .navbar-nav .nav-item .nav-link.scroll").on("click", function (event) {
			event.preventDefault();
			$("html,body").animate({
				scrollTop: $(this.hash).offset().top - 700}, 300);
		});
	
	
	
		$(window).on('scroll', function () {
			var h = $(window).height()

			var whtToggle = document.getElementById("toggle-wht-bg")
			var bluToggle = document.getElementById("toggle-blue-bg")


			if (($(this).scrollTop() > whtToggle.offsetTop - 350) && $(this).scrollTop() < (whtToggle.offsetTop + whtToggle.offsetHeight)) { // Set position from top to add class
				$('body').css('background', '#FFFFFF'), $('body').css('color', '#848484')
				$('header').addClass('header-wht'), $('header').removeClass('header-blu')
				// $('.navbar-fixed').css('background', 'rgba(50,50,50,0.46)')
				$(".logo-white").fadeOut(0)
				$(".logo-dark").fadeIn(300)
			}

			else if (($(this).scrollTop() > bluToggle.offsetTop - 350) && $(this).scrollTop() < bluToggle.offsetTop + (bluToggle.offsetHeight) - 350) { // Set position from top to add class
				$('body').css('background', '#5AD9FF'), $('body').css('color', '#FFFFFF')
				$('header').addClass('header-blu'), $('header').removeClass('header-wht')
				$(".logo-white").fadeIn(300)
				$(".logo-dark").fadeOut(0)
			}
			else {
				$('body').css('background', '#323232'), $('body').css('color', '#DDDDDD')
				$(".logo-white").fadeIn(300)
				$('.navbar-fixed').css('background', 'rgba(50,50,50,0.46)')
				$(".logo-dark").fadeOut(0)
				$('header').removeClass('header-wht'), $('header').removeClass('header-blu');
			}

			if ((($(this).scrollTop() * 100) / h) > 5) { // Set position from top to add class
				$('.head-nav').fadeOut(0);
				$('.scroll-nav').fadeIn(300);
				$('.navbar-top-default').addClass('navbar-fixed');
				if ($(window).width() > 991){
					$('.navigation-toggle').fadeOut(0);
				}
				else {
					$('.navigation-toggle').fadeIn(300);
				}
			}
			else {
				$('.head-nav').fadeIn(300);
				$('.scroll-nav').fadeOut(0);
				$('.navigation-toggle').fadeIn(300);
				$('.navbar-top-default').css('background', 'none')
				$('.navbar-top-default').removeClass('navbar-fixed');
			}
		});
	
		/*************************************/
		/******** open Navigation menu *******/
		/*************************************/
	
		if ($("#sidemenu_toggle").length) {
			$("#sidemenu_toggle").on("click", function () {
				$(".pushwrap").toggleClass("active");
				$(".slider-sec").addClass("push-slider-up");
				$(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
				$(".logo-white").fadeOut(0)
				$(".logo-dark").fadeIn(300)
			}), $("#close_side_menu").on("click", function () {
				$(".slider-sec").removeClass("push-slider-up");
				$(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
			}), $(".side-nav .navbar-nav .nav-link").on("click", function () {
				$(".slider-sec").removeClass("push-slider-up");
				$(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
			}), $("#btn_sideNavClose").on("click", function () {
				$(".slider-sec").removeClass("push-slider-up");
				$(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active"), $(".logo-white").fadeIn(300), $(".logo-dark").fadeOut(0)
			});
		}
	});





	