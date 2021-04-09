// change navbar when scroll

$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// change logo when scroll

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $('.navbar .navbar-brand img').attr('src', "images/orange-logo.png");
        }
        if ($(this).scrollTop() < 10) {
            $('.navbar .navbar-brand img').attr('src', "images/logo1.png");
        }
    })
});

$(function() {
    $("#includedContent").load("blog.html");
});