jQuery(function ($) {
    var $_gnbBtn = $('._gnb_btn');
    var $_gnbWrap = $('._gnb_wrap');
    var $_contentMenu = $('._content_menu_lst');
    $_gnbBtn.on('click',function(){
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
    $_contentMenu.hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
        }
    );
})
