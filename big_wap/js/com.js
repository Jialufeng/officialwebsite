$(function() {
    var $popup = $('.popup-c');


    var template = "<ul>" +
        "<li><a href='index.html'>首页</a></li>" +
        "<li><a href='pm.html'>产品介绍</a></li>" +
        "<li><a href='index.html#contact' class='contact'>联系我们</a></li>" +
        "</ul>"

    $popup.html(template);

    // $('body').on('click','.event-icon', function() {
    //     if($('.popup').hasClass('trans')) {
    //         $('.popup').removeClass('trans')
    //     } else {
    //         $('.popup').addClass('trans');

    //     }
    // })
    $('body').on('click','.contact', function() {
        $('.popup').removeClass('trans');
    })

    // var trigger = $('#menu-icon-trigger');


    // $('body').on('tap','#menu-icon-trigger', function() {
 
    // })

})