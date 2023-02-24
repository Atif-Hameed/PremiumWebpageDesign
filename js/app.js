$(document).ready(function () {
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        smartspeed: 1000,
        dots: false,
        navText: ['PREV', 'NEXT'],
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })
    //PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        smartspeed: 1000,
        dots: true,
        margin: 24,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
            },
        }
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 800,
    });
});