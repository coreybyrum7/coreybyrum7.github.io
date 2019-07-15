$(document).ready(function () {

    $('#dev').fadeIn('fast');

    $('.portfolio-command').click(function () {
        var optionId = $(this).attr('id');
        $('.portfolio-command').removeClass('active');
        $('.portfolio-command').removeAttr("selected");
        $('.portfolio-command').removeAttr('aria-live');
        $('.portfolio-command').attr('aria-selected', 'false');

        $('.portfolio-content-container').hide();
        if (optionId == 'ux-command') {
            $('#ux').fadeIn('fast');
        }
        if (optionId == 'dev-command') {
            $('#dev').fadeIn('fast');
        }
        if (optionId == 'ui-command') {
            $('#ui').fadeIn('fast');
        }

        $(this).addClass('active');
        $(this).attr("selected", true);
        $(this).attr('aria-selected', 'true');
        $(this).attr('aria-live', 'polite');
    });

    $('.portfolio-command').on('keyup', function (e) {
        if (e.keyCode == 13) {
            $('.portfolio-command').removeClass('active');
            $('.portfolio-command').removeAttr("selected");
            $('.portfolio-command').removeAttr('aria-live');
            $('.portfolio-command').attr('aria-selected', 'false');
    
            // hide divs and show relevant one
    
            $(this).addClass('active');
            $(this).attr("selected", true);
            $(this).attr('aria-selected', 'true');
            $(this).attr('aria-live', 'polite');
        }
    });

    $(".article-header-wrapper").click(function() {
        var article = $(this).closest('.article');
        var articleArrow = article.find('.arrow');
        if (articleArrow.hasClass('article-drop-arrow')) {
            articleArrow.removeClass('article-drop-arrow');
            articleArrow.addClass('article-up-arrow');
            article.find('.article-description').slideUp('fast');
            article.find('.article-examples').slideUp('fast');
        } else {
            articleArrow.removeClass('article-up-arrow');
            articleArrow.addClass('article-drop-arrow');
            article.find('.article-description').slideDown('fast');
            article.find('.article-examples').slideDown('fast');
        }
    });

    $(".article-header-wrapper").on('keyup', function (e) {
        if (e.keyCode == 13) {

        }
    });

});