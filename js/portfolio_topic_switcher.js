$(document).ready(function () {

    $(".card").on('click', function () {
        $('.card').removeClass('activeCard');
        $('.card-details').hide();

        $(this).addClass('activeCard');

        var id = ($(this)).attr('id');
        var detailsCard = '#' + id + '-content';

        $(detailsCard).fadeIn();
    });

    $(".card").on('keypress', function (e) {
        if (e.keyCode == 13) {
            $('.card').removeClass('activeCard');
            $('.card-details').hide();
    
            $(this).addClass('activeCard');
    
            var id = ($(this)).attr('id');
            var detailsCard = '#' + id + '-content';
    
            $(detailsCard).fadeIn();
        }
    });

});