$(document).ready(function() {
    var $btn = $('.nav-pills li.tablink');
    $($btn.eq(0).find('a').attr('href')).siblings('.tab-pane').hide();

    $btn.click(function() {
        $($(this).find('a').attr('href')).show().siblings('.tab-pane').hide();
        $(this).addClass('active').siblings('.active').removeClass('active');
    });

    $('.nav-pills li.tablink').on('click', function(event) {
        event.preventDefault();
        $('html,body').stop();
    });

})