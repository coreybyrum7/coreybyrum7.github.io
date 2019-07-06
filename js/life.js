$(document).ready(function () {

    $('.gallery-item').click(function () {
        imageClick(this);
    });

    $('.gallery-item').on('keypress', function (e) {
        if (e.keyCode == 13) {
            imageClick(this);
        }
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

});

var imageClick = function (elem) {
    var $this = $(elem);
    var image = $this.find('.gallery-image');
    var imageSrc = image.attr('src');
    var alt = $this.find('.gallery-item-likes').text();

    var span = document.getElementsByClassName("close")[0];

    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modal-image');
    var modalCaption = document.getElementById('modal-caption');
    $('header.mdl-layout__header').addClass('darkHeader');
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalCaption.innerHTML = alt;


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        $('header.mdl-layout__header').removeClass('darkHeader');
        modal.style.display = "none";
    }
}