var passwordImg = document.getElementById("password_img");
var passwordInput = document.getElementById("password");

function hideShowPsw() {
    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        passwordImg.src = "./images/show.png";
    } else {
        passwordInput.type = "password";
        passwordImg.src = "./images/hide.png";
    }
};

var passwordImg_b = document.getElementById("password_img_b");
var passwordInput_b = document.getElementById("password_b");

function hideShowPsw_b() {
    if (passwordInput_b.type == "password") {
        passwordInput_b.type = "text";
        passwordImg_b.src = "./images/show.png";
    } else {
        passwordInput_b.type = "password";
        passwordImg_b.src = "./images/hide.png";
    }
};