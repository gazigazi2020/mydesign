(function () {
    //横スクロール操作
    var listSize = $('.li-slideLink').outerWidth();
    var maxPosition = $('.li-slideLink').outerWidth() * ($('.li-slideLink').length - 1);
    var minPosition = 0;
    $('.leftBtn-slideLink').on('click touch', function () {
        var position = $('.ul-slideLink').scrollLeft();
        if (position <= minPosition) {
            return;
        }
        $('.ul-slideLink').animate({
            scrollLeft: position - listSize
        }, 500, "swing");
    });

    $('.rightBtn-slideLink').on('click touch', function () {
        var position = $('.ul-slideLink').scrollLeft();
        if (position >= maxPosition) {
            return;
        }
        $('.ul-slideLink').animate({
            scrollLeft: position + listSize
        }, 500, "swing");
    });
})();

(function () {
    //ハンバーガーメニュー
    $('.hambergur-head').on('click touch', function () {
        $('.ul-nav').toggle();
    });
})();

(function(){
    //サブリスト
    $('.li__nav').eq(1).on('click touch',function(e){
        e.preventDefault
        $('.ul-sublist').toggle();
    })
})();