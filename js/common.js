
$(document).ready(function () {
    var navBar = $('.find-help__nav-bar');
    var burger = $('.burger');

    burger.on('click', function (event) {
        event.preventDefault();
        navBar.toggleClass('find-help__nav-bar__active');
    });

    $(".next").click(function (event) {
        event.preventDefault();
        var showingImage = $('.photo__item.showing');
        var showingImageIndex = $('.photo__item.showing').index();
        var nextImage = $('.photo__item').eq(showingImageIndex);
        console.log(showingImageIndex);
        showingImage.fadeOut("slow");
        showingImage.removeClass('showing');

        if(showingImageIndex === ($('.photo__item:last').index())){
            $('.photo__item').eq(0).fadeIn();
            $('.photo__item').eq(0).addClass('showing');

        }else {
            nextImage.fadeIn();
            nextImage.addClass('showing');
        }
    });

    $(".prev").click(function (event) {
        event.preventDefault();
        var showingImage = $('.photo__item.showing');
        var showingImageIndex = $('.photo__item.showing').index();
        var prevImageIndex = showingImageIndex - 1;
        console.log(prevImageIndex);
        var prevImage = $('.photo__item').eq(prevImageIndex -1);
        showingImage.fadeOut("slow");
        showingImage.removeClass('showing');
        prevImage.fadeIn("slow");
        prevImage.addClass('showing');

    });

});
