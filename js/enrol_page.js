$(document).ready(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        $('.mobile_title').click(function() {
            $('.mobile_dropdown').slideToggle();
        });
    };

    if (windowWidth < 768) {
        $('.color').addClass('sr-only');
    };

    $('.state').hide();
    $('.desktop').click(function() {
        $(this).next().slideToggle();
        $(this).closest('.case_inner').siblings('.case_inner').children('.state').slideUp();
    });
})