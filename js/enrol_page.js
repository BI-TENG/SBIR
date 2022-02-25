$(document).ready(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        $('.mobile_dropdown').hide();
        $('.mobile_title').click(function() {
            $('.mobile_dropdown').slideToggle();
        });
    };

    $('.state').hide();
    $('.desktop').click(function() {
        $(this).next().slideToggle();
        $(this).closest('.case_inner').siblings('.case_inner').children('.state').slideUp();
    });
})