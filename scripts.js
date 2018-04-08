
$(document).ready(function() {
    
    //    Slideshow
    $("#slideshow > div:gt(0)").hide();
    
    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  4000);


    //    Mobile Navigation - Open/Close Nav
    $('.js--nav-icon').click(function() {
        var nav = $('.js--nav');
        var icon = $('.js--nav-icon i');
        //toggle of menu
        nav.slideToggle(200);
        //change of bar icon to close 
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
    
});
