$(document).ready(function(){
    $('.contact-btn, .black-banner .btn-theme').click(function(){
        $('.contact-form').addClass('open');
    });

    $('.close-btn').click(function(){
        $('.contact-form').removeClass('open');
    });
});