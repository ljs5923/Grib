jQuery(function ($) {
    var $_gnbBtn = $('._gnb_btn');
    var $_gnbWrap = $('._gnb_wrap');
    var $_contentMenu = $('._content_menu');
    var $_contentMenuLst = $('._content_menu_lst');
    //menu event start
    $_gnbBtn.on('click', function () {
        $(this).toggleClass('_on');
        $_gnbWrap.toggleClass('_on');
    });
    var $_gnbLst = $('._gnb_lst');
    $_gnbLst.hover(
        function () {
            $(this).find('._gnb_sub').stop().slideDown(500);
        },
        function () {
            $(this).find('._gnb_sub').stop().slideUp(500);
        }
    );
    //menu envet end
    //local menu event start
    $_contentMenuLst.on('mouseenter', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $_contentMenu.on('mouseleave', function () {
        $('#fullpage .section').each(function () {
            if ($(this).hasClass('active') == true) {
                var index = $(this).index();
                $_contentMenuLst.eq(index).addClass('active').siblings().removeClass('active');
            }
        })
    });
    //local menu evnet end
})
