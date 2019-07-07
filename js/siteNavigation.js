var homeUrl = "https://coreybyrum7.github.io/index.cshtml";
var portfolioUrl = "https://coreybyrum7.github.io/pages/portfolio.html";
var lifeUrl = "https://coreybyrum7.github.io/pages/life.html";

$(document).ready(function () {

    $(".sidebar-logo").on('click', function () {
        window.location.href = homeUrl;
    });

    $(".life").on('click', function () { 
        window.location.href = lifeUrl;
    });

    $(".life").on('keyup', function (e) {
        if (e.keyCode == 13) {
            window.location.href = lifeUrl;
        }
    });

    $(".portfolio").on('click', function () { 
        window.location.href = portfolioUrl;
    });

    $(".portfolio").on('keyup', function (e) {
        if (e.keyCode == 13) {
            window.location.href = portfolioUrl;
        }
    });

});