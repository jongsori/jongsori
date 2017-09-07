/**
 * Created by Administrator on 2017-08-18.
 */


$(function() {


  // 팝업 show &  hide
  $('.photo-list-item-link').on('click', function (e) {
    e.preventDefault();
    $(this).next('.popup-wrap').stop().fadeIn(300);
    $('.photo-list-button').addClass('on');
    $('.radio-box').addClass('on');

  });

  $('.close-button').on('click', function () {
    $(this).parent('.popup-wrap').stop().fadeOut(300);
    $('.photo-list-button').removeClass('on');
    $('.radio-box').removeClass('on');
  });


  // 리스트 슬라이딩

  //선언부
  function init() {
    $('.photo-list').eq(0).css({left: 0});
    $('.photo-list').eq(1).css({left: 850});
    $('.photo-list').eq(2).css({left: -850});


    //radio-box 의 순서대로 photo-list 페이지도 바뀜
    $('.radio-box-list').eq(0).children().addClass('on')
  }

  var currentIndex = 0;
  var nextIndex = 0;

  function moveLeft() {
    if (nextIndex >= $('.photo-list').length) {
      nextIndex = 0;
    }

    $('.photo-list').eq(currentIndex).stop().animate({left: -850}, 2000, 'easeOutExpo');
    $('.photo-list').eq(nextIndex).css({left: 850}).stop().animate({left: 0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;

    nextIndex++;

    //다음 버튼의 색깔이 바뀜
    $('.radio-box-list').children().removeClass('on');
    $('.radio-box-list').eq(currentIndex).children().addClass('on');

  }

  function moveRight() {

    if (nextIndex <= -1) {
      nextIndex = $('.photo-list').length - 1;
    }

    $('.photo-list').eq(currentIndex).stop().animate({left: 850}, 2000, 'easeOutExpo');
    $('.photo-list').eq(nextIndex).css({left: -850}).stop().animate({left: 0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;
    nextIndex--;

    // 다음 버튼의 색깔이 바뀜
    $('.radio-box-list').children().removeClass('on');
    $('.radio-box-list').eq(currentIndex).children().addClass('on');
  }


  // 실행부
  init();

  $('.photo-list-button-right').on('click', function () {
    nextIndex = currentIndex + 1;
    if (!$('.photo-list').is(':animated')) {
      moveLeft();
    }
  });

  $('.photo-list-button-left').on('click', function () {
    nextIndex = currentIndex - 1;
    if (!$('.photo-list').is(':animated')) {
      moveRight();
    }
  });

  $('.radio-box-link').on('click', function(){

    var radioIndex = $(this).index('.radio-box-link');

    nextIndex = radioIndex;
    //
    //if (!$('.photo-list').is(':animated')) {
    //  moveLeft();
    //}


    if( currentIndex != radioIndex ){

      if( currentIndex == 0 ){

        if( radioIndex == $('.photo-list').length-1 ){
          nextIndex = currentIndex - 1;
          if( !$('.photo-list').is(':animated') ){
            moveRight();
          }
        } else {
          nextIndex = currentIndex + 1;
          if( !$('.photo-list').is(':animated') ){
            moveLeft();
          }
        }

      } else if( currentIndex == $('.photo-list').length-1 ){

        if( radioIndex == 0 ){
          nextIndex = currentIndex + 1;
          if( !$('.photo-list').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.photo-list').is(':animated') ){
            moveRight();
          }
        }

      } else {

        if( currentIndex < radioIndex ){
          nextIndex = currentIndex + 1;
          if( !$('.photo-list').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.photo-list').is(':animated') ){
            moveRight();
          }
        }

      }

    }



  });

});
