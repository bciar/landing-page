/*--------------------------------------------*/
/*  PRE LOADING
 /*------------------------------------------*/

$(window).load(function() {
    'use strict';
    $('#loading').delay(350).fadeOut('fast');
});


$(document).ready(function() {
    /* ------------------------------------- */
    /*   wow
     /* ------------------------------------- */

          var wow = new WOW(
             {
                animateClass: 'animated',
                offset: 50,
                mobile: true
             }
           );
          wow.init();

    /* ==============================================
     Smooth Scroll To Anchor
     =============================================== */

        'use strict';
        $('.navbar-nav a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

    /* ==============================================
     STICKY HEADER
     =============================================== */

   /* $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('#navbar-primary').removeClass('navbar-fixed-top sticky_header');
            $('#logo-main').removeClass('hidden');
        } else {
            $('#navbar-primary').addClass('navbar-fixed-top sticky_header');
             $('#logo-main').addClass('hidden');
        }
    });*/


    
    /* ==============================================
     OWL CAROUSEL
     =============================================== */

	 $(".testimonial_carousel").owlCarousel({
        itemsCustom : [
            [0, 1],
            [600,1],
            [720, 1],
            [1000, 1]
        ],
        slideSpeed : 1000,
        navigation: true,
        navigationText :["<<",">>"] ,
        pagination:true,
        autoPlay:false
    });
    

    $(".blog_carousel").owlCarousel({
        itemsCustom : [
            [0, 1],
            [450,1],
            [720, 2],
            [1000, 3]
        ],
        slideSpeed : 1000,
        pagination:false,
        autoPlay:true
    });


    $(".intro_owl_carousel").owlCarousel({
        itemsCustom : [
            [0, 1],
            [600,1],
            [720, 1],
            [1000, 1]
        ],
        slideSpeed : 1000,
        pagination:false,
        autoPlay:true
    });


    
    /* --------------------------------------------------------
     TEXTILLATE ANIMATE
     ----------------------------------------------------------- */
    "use strict";
    var tlt  = $(".tlt");
    if(tlt.length > 0 ) {
        tlt.textillate({
            loop: true,
            minDisplayTime: 5000,
            in: {
                // set the effect name
                effect: 'fadeInLeft',
                delayScale: 1.5
            },
            out: {
                effect: 'hinge',
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: false,
                callback: function () {}
            }
        });
    }


    /* --------------------------------------------------------
     TEXT ROTATOR
     ----------------------------------------------------------- */
    $(".rotate").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 3000 // How many milliseconds until the next word show.
    });


  });


$(function() {
    $("#submit-form").click(function(e) {
		e.preventDefault(); // cancel default behavior
		
        var data = {
			name: $("#form_name").val(),
			email: $("#form_email").val(),
			message: $("#msg_text").val()
		};
		$.ajax({
			type: "POST",
			url: "http://maknetix.com/contact.php",
			data: data,
			success: function(msg){
				if (msg === "success") {
					bootbox.alert("Thank You! We will contact you shortly");
				} else {
					bootbox.alert("Error occurred , please use facebook to contct us");
				}
			},
			error: function(){
				bootbox.alert("Error occurred , please use facebook to contct us");
			}
		});
    });
});
