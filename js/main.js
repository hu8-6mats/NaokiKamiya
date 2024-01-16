$(function() {
    /*================== HAMBURGER ==================*/
    $('.hamburger').on('click', function() {
        hamburger();
    });

    $('#navi a').on('click', function() {
        hamburger();
    });

    /*================== hover ==================*/
    $('#contact .item1').hover(
        function() {
            $('#contact .item1').css({'background': 'rgba(65, 55, 50, 1)'});
            $('#contact .item1').css({'color': 'rgb(255, 255, 255)'});
            $('#contact .item1 .item-name').css({'visibility': 'hidden'});
            $('#contact .item1 .item-price').css({'visibility': 'visible'});
        },
        function() {
            $('#contact .item1').css({'background-color': 'rgba(65, 55, 50, 0)'});
            $('#contact .item1 .item-name').css({'visibility': 'visible'});
            $('#contact .item1 .item-price').css({'visibility': 'hidden'});
        }
    );

    $('#contact .item2').hover(
        function() {
            $('#contact .item2').css({'background-color': 'rgba(65, 55, 50, 1)'});
            $('#contact .item2').css({'color': 'rgb(255, 255, 255)'});
            $('#contact .item2 .item-name').css({'visibility': 'hidden'});
            $('#contact .item2 .item-price').css({'visibility': 'visible'});
        },
        function() {
            $('#contact .item2').css({'background-color': 'rgba(65, 55, 50, 0)'});
            $('#contact .item2 .item-name').css({'visibility': 'visible'});
            $('#contact .item2 .item-price').css({'visibility': 'hidden'});
        }
    );

    $('#contact .item3').hover(
        function() {
            $('#contact .item3').css({'background-color': 'rgba(65, 55, 50, 1)'});
            $('#contact .item3').css({'color': 'rgb(255, 255, 255)'});
            $('#contact .item3 .item-name').css({'visibility': 'hidden'});
            $('#contact .item3 .item-price').css({'visibility': 'visible'});
        },
        function() {
            $('#contact .item3').css({'background-color': 'rgba(65, 55, 50, 0)'});
            $('#contact .item3 .item-name').css({'visibility': 'visible'});
            $('#contact .item3 .item-price').css({'visibility': 'hidden'});
        }
    );

    /*================== SMOOTH-SCROLL ==================*/
    $('a[href^="#"]').click(function() {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;

        $("html, body").animate({scrollTop:position}, 600, swing);
        return false;
    });

    /*================== SCROLL-EVENTS ==================*/
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        /*-------- FADE-IN --------*/
        $(function () {
            $(window).scroll(function () {
              const windowHeight = $(window).height();
          
              $('.fade-in').each(function () {
                const targetPosition = $(this).offset().top;
                if (scroll > targetPosition - windowHeight + 150) {
                  $(this).addClass("is-fadein");
                }
              });
            });
        });

        /*-------- l-header --------*/
        if (scroll > 150) {
            $('#l-header').css({'background-color': 'rgba(255, 255, 255, 0.8)'});
        } else {
            $('#l-header').css({'background-color': 'rgba(235, 255, 255, 0)'});
        }

        /*-------- MAIN-VISUAL --------*/
        if (scroll > 400) {
            $('#mainvisual img').css({'opacity': '0'});
        } else {
            $('#mainvisual img').css({'opacity': '1'});
        }

        /*-------- SIDE-BUTTON --------*/
        let topics_position = $('#topics').offset().top - $(window).height() + 650;
        let footer_position = $('#footer').offset().top - $(window).height();

        if (window.innerWidth > 900) {
            if(scroll > topics_position) {
                if(scroll < footer_position) {
                    $('#side-btn').css({
                        'transform': 'rotate(-90deg) translateY(30px)'
                    });
                } else {
                    $('#side-btn').css({
                        'transform': 'rotate(-90deg) translateY(100px)'
                    });
                }
            } else {
                $('#side-btn').css({
                    'transform': 'rotate(-90deg) translateY(100px)'
            });
            }
        }
    });
});

$(function() {
    $('#slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "30%",
        dots: true,
        responsive: [
            {
              breakpoint: 675,
              settings: {
              slidesToShow: 1,
              },
            },
        ],
    });
});

/*================== HAMBURGER "COMMON-PROCESS" ==================*/
function hamburger() {
    $('.hamburger').toggleClass('active');

    if ($('.hamburger').hasClass('active')) {
        $('#navi').addClass('active');
        $('.l-header__logo').addClass('active');
    } else {
        $('#navi').removeClass('active');
        $('.l-header__logo').removeClass('active');
    }
}