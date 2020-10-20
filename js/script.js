$(document).ready(function () {

    //Superslides for top images
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    //Fancy typed introductions
    var typed = new Typed(".typed", {
        strings: ["March 20, 2021 at the Friday Musicale"],
        typeSpeed: 40,
        loop: false,
        startDelay: 1000,
        showCursor: false
    });
});
