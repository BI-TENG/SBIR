$(document).ready(function() {
    // 主選單
    var windowWidth = $(window).width();
    var li = $('.main_navbar>li')
    if (windowWidth > 1320) {
        li.mouseenter(function() {
            $(this).find($('.dropdown-menu')).toggleClass('active');
            $(this).siblings(li).find('.dropdown-menu').removeClass('active');
        });

        li.mouseleave(function() {
            $(this).find($('.dropdown-menu')).removeClass('active');
        });

        $('.main_navbar>li>a').focus(function() {
            $(this).siblings($('.dropdown-menu')).toggleClass('active');
            $(this).parent(li).siblings(li).find('.dropdown-menu').removeClass('active');
        });

        $(".dropdown-menu li:last-of-type a").focusout(function() {
            $('.dropdown-menu').removeClass('active');
        });

    } else {
        li.click(function() {
            $(this).find($('.dropdown-menu')).slideToggle();
            $(this).siblings(li).find('.dropdown-menu').slideUp();
            $(this).find('a').toggleClass('active');
            $(this).siblings(li).find('a').removeClass('active');
        });
    };

    // 漢堡開關
    // $('.navbar').hide();
    $('.burger').click(function() {
        $(this).toggleClass('open');
        $('.navbar').toggleClass('show');
    });

    // footer
    $('footer .top').slideUp();
    $('.svg').click(function() {
        $('.top').slideToggle();
    })

    // top
    $("#top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

})