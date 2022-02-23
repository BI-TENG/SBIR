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

    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
    };

    var counterParent = document.getElementById('unique-id');
    var children = counterParent.children;

    function countStart() {
        for (var i = 0; i < children.length; i++) {
            var item = document.getElementById(children[i].id).querySelector('.case_total');
            var countValue = item.getAttribute('data-value');

            var countUP = new CountUp(item, 0, countValue, 0, 2, options);
            if (!countUP.error) {
                countUP.start();
            }
        }
    }

    ScrollReveal().reveal('.case', {
        beforeReveal: countStart
    });
})