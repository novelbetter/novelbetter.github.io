$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $('.navbar .navbar-nav').addClass('darkHeader');
        $('.nav-link').addClass('darkLink');
    } else {
        $('.navbar .navbar-nav').removeClass('darkHeader');
        $('.nav-link').removeClass('darkLink');
    }
});