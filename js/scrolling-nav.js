$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $('.navbar-default .navbar-nav>li>a').css({"color": "#535353", "display": "inline-block", "margin-top": "10px"});
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $('.navbar-default .navbar-nav>li>a').css({"color": "white", "margin-top": ""});
    }
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});