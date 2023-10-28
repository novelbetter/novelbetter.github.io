//smooth scrolling & offset saat navbar di klik
$('.nav-link').on('click', function(e) {
    // ambil isi href
    var section = $(this).attr('href');
    //ambil elemen tsb
    var link = $(section);
    console.log($('body').scrollTop());
    //pindahkan scroll
   $('html, body').animate ({
        scrollTop: link.offset().top - 100
    }, 1000);

   e.preventDefault();
});

// munculkan background navbar ketika di scroll
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navbar").css("background", "white");
        $(".navbar").css("transition", "0.2s ease-out");
        $(".navbar").addClass("shadow-sm");
    } else {
        $(".navbar").css("background", "transparent");
        $(".navbar").removeClass("shadow-sm");
    }
});