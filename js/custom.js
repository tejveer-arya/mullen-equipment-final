$(document).ready(function(){
    $('.contact-btn, .black-banner .btn-theme').click(function(){
        $('.contact-form').addClass('open');
    });

    $('.close-btn').click(function(){
        $('.contact-form').removeClass('open');
    });
    $('#search').click(function(){
        $('.search-input-area').addClass('show');
    });
    $('#close').click(function(){
        $('.search-input-area').removeClass('show');
    });

});

// $(document).on('click', '#search', function () {
//     $(".search-input-area").addClass("show");
//     $("#anywhere-home").addClass("bgshow");
//   });
//   $(document).on('click', '#close', function () {
//     $(".search-input-area").removeClass("show");
//     $("#anywhere-home").removeClass("bgshow");
//   });
//   $(document).on('click', '#anywhere-home', function () {
//     $(".search-input-area").removeClass("show");
//     $("#anywhere-home").removeClass("bgshow");
//   });