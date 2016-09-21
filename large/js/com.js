

$(document).ready(function() {

    var Height = $(window).height();

    $('#particles').height(Height);


    $(window).scroll(function() {
        console.log(($(window).scrollTop() + 200) > $('.rotate-img').offset().top)
        if(($(window).scrollTop() + 200) > $('.rotate-img').offset().top) {
            $('.rotate-img').addClass('trans')
        } else {
            $('.rotate-img').removeClass('trans')

        }
    })

    $('.intr_auto a').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        console.log(index);
        $('.tabs-pm > div').eq(index).show().siblings().hide();
    })

});
