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

    $('.plus').click(function() {
        $('.clone_field').first().clone().appendTo(".plus_field");
        $('.border_bt').addClass('active');

        // var cnt = $('.clone_fieldcnt').val();
        // var tab0 = '<div class="clone_field">aaaaa</div>';
        // $('.clone_field').appendTo('tab0');
        // $('.border_bt').addClass('active');
    });
})