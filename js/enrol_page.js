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
        //$('.clone_field').first().clone().appendTo(".plus_field");
        //$('.border_bt').addClass('active');

        var currRowCount = $(".clone_field").length; //獲取當前總行數
        var nextRowIndex = Number(currRowCount) + 1; //新增一行 index
        var tab0 = '<div class="clone_field">' +
            '<div class="form-group">' +
            '<label for="clone_field[' + nextRowIndex + '].compname">單位名稱：</label>' +
            '<input type="text" class="form-control" name="clone_field[' + nextRowIndex + '].compname" id="clone_field[' + nextRowIndex + '].compname" placeholder="請填全名">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="clone_field[' + nextRowIndex + '].sn">統一編號：</label>' +
            '<input type="number" class="form-control" name="clone_field[' + nextRowIndex + '].sn" id="clone_field[' + nextRowIndex + '].sn">' +
            '</div>' +
            '<div class="mb-2">' +
            '<p class="">項目：</p>' +
            '<div class="d-flex flex-wrap align-items-center">' +
            '<div class="form-check mr-4">' +
            '<input class="form-check-input" type="radio" name="clone_field[' + nextRowIndex + ']" id="clone_field[' + nextRowIndex + '].item01" value="" checked>' +
            '<label class="form-check-label" for="clone_field[' + nextRowIndex + '].item01">技術(關鍵智財)引進</label>' +
            '</div>' +

            '<div class="form-check mr-4">' +
            '<input class="form-check-input" type="radio" name="clone_field[' + nextRowIndex + ']" id="clone_field[' + nextRowIndex + '].item02" value="">' +
            '<label class="form-check-label" for="clone_field[' + nextRowIndex + '].item02">委託研究</label>' +
            '</div>' +

            '<div class="form-check">' +
            '<input class="form-check-input" type="radio" name="clone_field[' + nextRowIndex + ']" id="clone_field[' + nextRowIndex + '].item03" value="">' +
            '<label class="form-check-label" for="clone_field[' + nextRowIndex + '].item03">委託勞務</label>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<div class="border_bt">' +
            '<div class="form-group">' +
            '<label for="clone_field[' + nextRowIndex + '].money">金額：</label>' +
            '<input type="number" class="form-control" name="clone_field[' + nextRowIndex + '].money" id="clone_field[' + nextRowIndex + '].money" placeholder="單位/千元">' +
            '</div>' +
            '</div>' +
            '</div>';

        $('.border_bt').addClass('active_bt');
        $('.clone_field').last().append(tab0);

    });
})