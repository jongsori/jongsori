/**
 * Created by Administrator on 2017-08-17.
 */

$(function(){

  function init(){
    $('.slide-wrap-bigimage').eq(0).css({left : 0});
    $('.slide-wrap-bigimage').eq(1).css({left : 850});
    $('.slide-wrap-bigimage').eq(2).css({left : -850});
    $('.slide-wrap-bigimage').eq(3).css({left : 850});

    $('.slide-list-item').eq(0).children().addClass('on')
  }

  var currentIndex = 0;
  var nextIndex = 0;

  function moveLeft(){
    if(nextIndex >= $('.slide-wrap-bigimage').length){
      nextIndex = 0;
    }

    $('.slide-wrap-bigimage').eq(currentIndex).stop().animate({left:-850}, 2000, 'easeOutExpo');
    $('.slide-wrap-bigimage').eq(nextIndex).css({left:850}).stop().animate({left:0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;

    nextIndex++;

    console.log( currentIndex );
  }

  function moveRight(){

    if(nextIndex <= -1) {
      nextIndex = $('.slide-wrap-bigimage').length-1;
    }

    $('.slide-wrap-bigimage').eq(currentIndex).stop().animate({left : 850}, 2000, 'easeOutExpo');
    $('.slide-wrap-bigimage').eq(nextIndex).css({left : -850}).stop().animate({left : 0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;
    nextIndex--;
  }

  //실행부
  init();

  $('.slide-arrow-right').on('click',function(){
    if( !$('.slide-wrap-bigimage').is(':animated')){
      nextIndex = currentIndex + 1;
      moveLeft();
    }
  });

  $('.slide-arrow-left').on('click',function(){
    if( !$('.slide-wrap-bigimage').is(':animated')){
      nextIndex = currentIndex - 1;
      moveRight();
    }

  });

  $('.slide-list-item').on('click', function(){

    var radioIndex = $(this).index('.slide-list-item');

    nextIndex = radioIndex;
    //
    //if (!$('.photo-list').is(':animated')) {
    //  moveLeft();
    //}


    if( currentIndex != radioIndex ){

      if( currentIndex == 0 ){

        if( radioIndex == $('.slide-list').length-1 ){
          if( !$('.slide-list').is(':animated') ){
          nextIndex = currentIndex - 1;
            moveRight();
          }
        } else {
          if( !$('.slide-list').is(':animated') ){
          nextIndex = currentIndex + 1;
            moveLeft();
          }
        }

      } else if( currentIndex == $('.slide-list').length-1 ){

        if( radioIndex == 0 ){
          if( !$('.slide-list').is(':animated') ){
          nextIndex = currentIndex + 1;
            moveLeft();
          }
        } else {
          if( !$('.slide-list').is(':animated') ){
          nextIndex = currentIndex - 1;
            moveRight();
          }
        }

      } else {

        if( currentIndex < radioIndex ){
          if( !$('.slide-list').is(':animated') ){
          nextIndex = currentIndex + 1;
            moveLeft();
          }
        } else {
          if( !$('.slide-list').is(':animated') ){
          nextIndex = currentIndex - 1;
            moveRight();
          }
        }

      }

    }

  });


});
