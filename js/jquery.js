
$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({ end: 10, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 250, duration: 2000 });
$('#number3').jQuerySimpleCounter({ end: 650, duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: 38, duration: 2500 });


/* AUTHOR LINK */
$('.about-me-img').hover(function () {
    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});



$(document).ready(function () {
    $(".scroll-btn").click(function () {
        $("body,html").animate(
            { scrollTop: 700 }
            , 0
        );
        return false;
    });


    $("#about-page").click(function () {
        $("body,html").animate(
            { scrollTop: 700 }
            , 0
        );
        return false;
    });
    $("#services-page").click(function () {
        $("body,html").animate(
            { scrollTop: 1500 }
            , 0
        );
        return false;
    });
    $("#resume-page ").click(function () {
        $("body,html").animate(
            { scrollTop: 2300 }
            , 0
        );
        return false;
    });
    $("#portfolio-page").click(function () {
        $("body,html").animate(
            { scrollTop: 3800 }
            , 0
        );
        return false;
    });
    $("#testimonial-page").click(function () {
        $("body,html").animate(
            { scrollTop: 5100 }
            , 0
        );
        return false;
    });
    $("#contact-page").click(function () {
        $("body,html").animate(
            { scrollTop: 5900 }
            , 0
        );
        return false;
    });

    $(".nav-link").click(function () {
        $("div#offcanvasScrolling").removeClass("show")
    })

    // Sticky Header

    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 0) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });



    // Customized Theme

    $(".theme-btn").click(function () {
        $(".theme-side-bar").toggleClass("active")
    });

    $(".theme-btn").click(function () {
        $(".theme-btn").toggleClass("button-slide")
    });

    $(".indigo").click(function () {
        $("body").css({
            "--green-color": "#6610f2"
        })
    });
    $(".blue").click(function () {
        $("body").css({
            "--green-color": "#007bff"
        })
    });
    $(".purple").click(function () {
        $("body").css({
            "--green-color": "#6f42c1"
        })
    });
    $(".cyan").click(function () {
        $("body").css({
            "--green-color": "#17a2b8"
        })
    });
    $(".red").click(function () {
        $("body").css({
            "--green-color": "#dc3545"
        })
    });
    $(".pink").click(function () {
        $("body").css({
            "--green-color": "#e83e8c"
        })
    });
    $(".green").click(function () {
        $("body").css({
            "--green-color": "#28a745"
        })
    });
    $(".yellow").click(function () {
        $("body").css({
            "--green-color": "#ffc107"
        })
    });
    $(".orange").click(function () {
        $("body").css({
            "--green-color": "#fd7e14"
        })
    });
    $(".brown").click(function () {
        $("body").css({
            "--green-color": "#795548"
        })
    });
    $(".reset-theme-btn").click(function () {
        $("body").css({
            "--green-color": "#20c997"
        })
    });

});

// Owl Carousel 

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});

//Back TO Top Button

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $(".back-to-top").fadeIn();
    } else {
        $(".back-to-top").fadeOut();
    }
});

$(".back-to-top").click(function () {
    $("body,html").animate(
        { scrollTop: 0 }
        , 0
    );
});

