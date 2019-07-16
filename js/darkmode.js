$(document).ready(function () {

    $('.darkmode-toggle > #checked').on('click', function () {
        var toggled = $(this).prop('checked');
        darkmode($(this), toggled);
    });

    $('.darkmode-toggle > #checked-ux-ui').on('click', function () {
        var toggled = $(this).prop('checked');
        darkmode($(this), toggled);
    });

    $('.darkmode-toggle label.lbl').on('keypress', function (e) {
        if (e.keyCode == 13) {
            var elem = $(this).prev();
            if (elem.prop('checked')) {
                elem.prop('checked', false);
            }
            else {
                elem.prop('checked', true);
            }
            var toggled = $(elem).prop('checked');
            darkmode($(elem), toggled);
        }
    });

});

var darkmode = function (element, toggled) {
    if (toggled) {
        $(element).closest('.mdl-layout__content').addClass('darkmode');
        $(element).closest('.mdl-layout').find('footer').addClass('darkmode-footer');
        $(element).closest('.mdl-layout').find('header').addClass('darkmode-header');
        $('#checked').prop('checked', true);
        $('#checked-ux-ui').prop('checked', true);
    }
    else {
        $(element).closest('.mdl-layout__content').removeClass('darkmode');
        $(element).closest('.mdl-layout').find('footer').removeClass('darkmode-footer');
        $(element).closest('.mdl-layout').find('header').removeClass('darkmode-header');
        $('#checked').prop('checked', false);
        $('#checked-ux-ui').prop('checked', false);
    }
}