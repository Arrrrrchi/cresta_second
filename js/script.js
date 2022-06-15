
// スティッキーヘッダー
$(function(){
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHeight = $fv.outerHeight(),
        fixedClass = 'fixed',
        startPos = 0;

    $win.on('load scroll', function(){
        var value = $(this).scrollTop();
        if($win.width() > 768){
            if (value > fvHeight && value <= startPos){
                $header.addClass(fixedClass);
            } else {
                $header.removeClass(fixedClass);
            }
            startPos = value;
        }
    });
});

// スライドショー
$(function(){
    $('.slideshow').each(function(){
        var $slides = $(this).find('.slideshow__img'),            // すべてのスライド
            slideCount = $slides.length,              // スライドの点数
            currentIndex = 0;                         // 現在のスライドインデックス

        // 1番目のスライドをフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        // 7500ミリ秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 7500);

        // 次のスライドを表示する関数
        function showNextSlide(){

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn();

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }
    });
});


// ハンバーガーメニュー
$(function(){
    $('.burger-btn').click(function(){
        $(this).toggleClass('open');
        $('.header__nav').fadeToggle();
    })
})


// ページスクロール
$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function(){
      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      var adjust = 0;
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を調整
      var position = target.offset().top + adjust;
      // ハンバーガーメニューを閉じる
      $('.burger-btn').removeClass('open');
      if($(window).width() <= 768){
        $('.header__nav').fadeOut();
      };
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });