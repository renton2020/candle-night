/* ハンバーガーメニュー */
$(".header__hamburger").click(function () {
  $(".header__hamburger-span").toggleClass('active');
  $(".header__nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  $(".main,.footer").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
}
  // else {
  //   $(".main,.footer").addClass('mainblurnone');//ぼかしたいエリアにmainblurクラスを付与
  // }
);
$(".header__nav-item-a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".header__hamburger-span").removeClass('active');//ボタンの activeクラスを除去し
  $(".header__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
  $(".main,.footer").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});
/* ハンバーガーメニューここまで */


/* ヘッダーの出し入れ */
var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数
function scrollanime() {
  var elemTop = $('.mv-section__bg').offset().top;
  var scroll = $(window).scrollTop();
  if (scroll == beforePos) {
    //IE11対策で処理を入れない
  } else if (elemTop > scroll || 0 > scroll - beforePos) {
    //ヘッダーが上から出現する
    $('#header').removeClass('upmove'); //#headerにUpMoveというクラス名を除き
    $('#header').addClass('downmove');//#headerにDownMoveのクラス名を追加
  } else {
    //ヘッダーが上に消える
    $('#header').removeClass('downmove');//#headerにDownMoveというクラス名を除き
    $('#header').addClass('upmove');//#headerにUpMoveのクラス名を追加
  }

  beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}
/* ヘッダーの出し入れここまで */

/* 各要素のふわっと表示 */
function fadeanime() {
  $('.fadeintrigger').each(function () { //fadeInTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadein');// 画面内に入ったらfadeInというクラス名を追記
    } else {
      $(this).removeClass('fadein');// 画面外に出たらfadeInというクラス名を外す
    }
    /* 時間差フェードイン研究中 */
    // $('.fadeintrigger.fadein').each(function (i) {
    //   let delay = 100;
    //   $(this).delay(i * delay).queue(function (next) {
    //     $(this).addClass('show');
    //     next();
    //   })
  });
}
/* 各要素のふわっと表示ここまで */


// /*  ページ読み込み時に適用 */
// $(window).on('load', function () {
//   scrollanime();
//   fadeanime();
// });

/*  画面スクロール時に適用 */
$(window).scroll(function () {
  scrollanime();
  fadeanime();
});






//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
// var headerH = $("#header").outerHeight(true);//headerの高さを取得
// $('#g-navi li a').click(function () {
//   var elmHash = $(this).attr('href');
//   var pos = $(elmHash).offset().top - headerH;//header分の高さを引いた高さまでスクロール
//   $('body,html').animate({ scrollTop: pos }, 1000);
//   return false;
// });
