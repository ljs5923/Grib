jQuery(function ($) {
    var $_gnbBtn = $('._gnb_btn');
    var $_gnb_wrap = $('._gnb_wrap');
    $_gnbBtn.on('click',function(){
        $(this).toggleClass('_on');
        $_gnb_wrap.toggleClass('_on');
    });
    var $_gnbLst = $('._gnb_lst');
    $_gnbLst.hover(
        function () {
            $(this).find('._gnb_sub').stop().slideDown(300);
        },
        function () {
            $(this).find('._gnb_sub').stop().slideUp(300);
        }
    );
})
