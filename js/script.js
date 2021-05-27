$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".navbar").css("background", "white");
        $(".navbar").css("transition", "0.2s ease-out");
        $(".navbar").addClass("shadow-sm");
    } else {
        $(".navbar").css("background", "transparent");
        $(".navbar").removeClass("shadow-sm");
    }
});