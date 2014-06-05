$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#m_home").offset().top
    }, 500);
});

$("#order").click(function() {
    $('html, body').animate({
        scrollTop: $("#m_order").offset().top
    }, 500);
});
