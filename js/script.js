$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navebar').addClass("sticky");
        } else {
            $('.navebar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

    // slide-up script

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });



    // toggle menu/navebar script

    $('.menu-btn').click(function () {
        $('.navebar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// typing Animation script

var typed = new Typed(".typing", {
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});