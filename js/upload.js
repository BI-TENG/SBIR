$(document).ready(function() {
    $(".file").on("change", function() {
        //擷取路徑，獲取上傳檔名
        var urlArr = this.value.split("\\");
        if (this && this.files && this.files[0]) {
            // $(this).parent(".upload_btn_box").siblings(".file_name_box").children(".file_name").innerHTML = urlArr[urlArr.length - 1];
            //alert($(this).parent(".upload_btn_box").siblings(".file_name_box").children(".file_name").html());
            //alert($(this).parent(".upload_btn_box").siblings(".file_name_box").html());
            $(this).parent(".upload_btn_box").siblings(".file_name_box").children(".file_name").html(urlArr[urlArr.length - 1]);
            // document.getElementsByClassName("file_name").innerHTML = urlArr[urlArr.length - 1];
            // $(".fileName").html(urlArr[urlArr.length - 1]);
            var fileUrl = URL.createObjectURL(this.files[0]);

        } else {
            //相容IE9以下
            document.getElementsByClassName("file_name").innerHTML = urlArr[urlArr.length - 1];
        }
    });
});