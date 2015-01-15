// --------------------------------------------------------
// Pretty Photo for Lightbox Image
// -------------------------------------------------------- 
$(document).ready(function() {	
    $("a[data-gal^='prettyPhoto']").prettyPhoto(); 
});

// --------------------------------------------------------
//	Navigation Bar
// -------------------------------------------------------- 	
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$(".navbar").addClass("scroll-fixed-navbar");				
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// -------------------------------------------------------- 	
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});
// --------------------------------------------------------
//	Google Analytics Events
// -------------------------------------------------------- 	
// Try it Free quick scroll
$('#left-social-link').on('click', function() {
  ga('send', 'event', 'button', 'click', 'Share', 1);
});
// Get Early Access Button click
$('.untorch-submit-button').on('click', function() {
  ga('send', 'event', 'button', 'click', 'GetEarlyAccess', 1);
});
// Facebook Share
$('.btn-submit').on('click', function() {
  ga('send', 'event', 'button', 'click', 'QuickScroll', 1);
});