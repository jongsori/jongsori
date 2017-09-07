/**
 * Created by Administrator on 2017-08-17.
 */

$(function(){

  function init(){
    $('.slide-wrap-bigimage').eq(0).css({left : 0});
    $('.slide-wrap-bigimage').eq(1).css({left : 850});
    $('.slide-wrap-bigimage').eq(2).css({left : -850});
    $('.slide-wrap-bigimage').eq(3).css({left : 850});

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
    nextIndex = currentIndex + 1;
    if( !$('.slide-list').is(':animated')){
      moveLeft();
    }
  });

  $('.slide-arrow-left').on('click',function(){
    nextIndex = currentIndex - 1;
    if( !$('.slide-list').is(':animated')){
      moveRight();
    }

  });


  var onmouseover = {
    $imageBig: $('.slide-wrap-bigimage'),
    $imageThumb: $('.slide-list-image'),

    changeImage : function( $overImage ){
      var src = $overImage.children().attr('src');
      $('.slide-wrap-bigimage').attr('src', src);
    }
  };

  $('.slide-list-item').on('click', function(){
    onmouseover.changeImage( $(this) );
  });
  $('.slide').on('mouseleave', function(){
    onmouseover.changeImage();
  });

});
