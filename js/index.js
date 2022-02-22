$(document).ready(function() {
    $(".carousel").slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slick-dots li button').attr('tabindex', '-1');
})