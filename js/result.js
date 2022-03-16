$(document).ready(function() {
    $(".plan_slider_title").slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 8
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 609,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 336,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    // $(".plan_slider").slick({
    //     autoplay: false,
    //     dots: true,
    //     fade: true,
    //     arrows: false,
    //     customPaging: function(slider, i) {
    //         var thumb = $(slider.$slides[i]).data();
    //         return '<a href="" class="dot">' + '11' + i + '年' + '</a>';
    //     },
    // });

    /*
    $(".plan_slider").slick({
        autoplay: false,
        dots: true,
        fade: true,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dot">' + i + '</a>';
        },
        responsive: [{
            breakpoint: 500,
            settings: {
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });
    */

})