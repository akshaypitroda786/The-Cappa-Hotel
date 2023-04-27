$(document).ready(function () {
    $(function () {
        $("#check_in,#check_out").datepicker();
    }); 
});


// Owl Carousel JS

$(document).ready(function () {
    $(".slider-1.owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 1,
        autoplay:false,
    });
    $(".slider-2.owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1,
            },
            575:{
                items:1,
            },
            768:{
                items:1,
            },
            991:{
                items:1,
            },
            1024:{
                items:2,
            },
            1300:{
                items:2,
            }
        }
    });
    $(".slider-3.owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay:false,
        autoplayHoverPause:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1,
            },
            575:{
                items:1,
            },
            768:{
                items:1,
            },
            991:{
                items:1,
            },
            1300:{
                items:1,
            }
        }
    });
    $(".slider-4.owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1,
            },
            575:{
                items:1,
            },
            768:{
                items:2,
            },
            991:{
                items:3,
            },
            1300:{
                items:3,
            }
        }

    });
    $(".slider-5.owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 3,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1,
            },
            575:{
                items:3,
            },
            768:{
                items:3,
            },
            991:{
                items:4,
            },
            1300:{
                items:3,
            }
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(".back-to-top").fadeIn();
        }else{
            $(".back-to-top").fadeOut();
        }
    });

    $(".back-to-top-btn").click(function(){
        $("body,html").animate({scrollTop:0},1000);
    });

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 200) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

      $(".mobile-view-btn").click(function(){
        $(".header-navigation").toggleClass("mobile-view-active");
      });
});

