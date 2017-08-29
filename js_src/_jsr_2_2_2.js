/**
 * Created by Administrator on 2017-08-17.
 */

$(function(){

  // 이미지 클릭시
  var calculateRatio = {
    $imageTop: $('.slide-wrap'),
    $imageBig: $('.slide-wrap-bigimage'),
    $imageThumb: $('.slide-list-image'),

    areaValue : function () {
      this.areaWidth = parseInt(this.$imageTop.css('width'));
      this.areaHeight = parseInt(this.$imageTop.css('height'));
      this.areaRatio = this.areaWidth / this.areaHeight;
    },

    imageValue : function ($image) {
      this.imageWidth = parseInt($image.css('width'));
      this.imageHeight = parseInt($image.css('height'));
      this.imageRatio = this.imageWidth / this.imageHeight;
    },

    applyBig : function () {
      this.areaValue();
      this.imageValue(this.$imageBig);
      if (this.areaRatio > this.imageRatio) {
        this.$imageBig.removeClass('full-height').addClass('full-width');
      } else {
        this.$imageBig.removeClass('full-width').addClass('full-height');
      }
    },

    applyThumb : function () {
      this.areaValue();
      for (var i = 0; i < this.$imageThumb.length; i++) {
        this.imageValue(this.$imageThumb.eq(i));
        if (this.areaRatio > this.imageRatio) {
          this.$imageThumb.eq(i).addClass('full-width');
        } else {
          this.$imageThumb.eq(i).addClass('full-height');
        }
      }
    },

    changeImage : function( $overImage ){
      var src = $overImage.children().attr('src');
      $('.slide-wrap-bigimage').attr('src', src);
    }
  };

  $('.slide-list-item').on('click', function(){
    calculateRatio.changeImage( $(this) );
    calculateRatio.applyBig();
  });
  $('.slide').on('mouseleave', function(){
    calculateRatio.changeImage( $('.slide-list-item').eq(0) );
    calculateRatio.applyBig();
  });



  $('.slide-arrow-right').on('click', function(){



  });



//  function init(){
//    $('.slide-list-image').eq(0).css({left : 0});
//    $('.slide-list-image').eq(1).css({left : 400});
//    $('.slide-list-image').eq(2).css({left : -400});
//    $('.slide-list-image').eq(3).css({left : 800});
//    $('.slide-list-image').eq(4).css({left : -800});
//    marginCtrlWrap();
//    paging();
//  }
//
//  var currentIndex = 0;
//  var nextIndex = 0;
//
//  var timeID;
//  var checkID;
//  function moveLeft(){
//
//    if(nextIndex >= $('.slide-list-image').length){
//      nextIndex = 0;
//    }
//
//
//    $('.slide-list-image').eq(currentIndex).stop().animate({left:-400}, 1000);
//
//    $('.slide-list-image').eq(nextIndex).css({left:400}).stop().animate({left:0}, 1000);
//
//    currentIndex = nextIndex;
//
//    nextIndex++;
//  }
//
//  function moveRight(){
//
//    if(nextIndex <= -1){
//      nextIndex = $('.slide-list-image').length-1;
//    }
//
//    $('.slide-list-image').eq(currentIndex).stop().animate({left:400}, 1000);
//
//    $('.slide-list-image').eq(nextIndex).css({left:-400}).stop().animate({left:0}, 1000);
//
//    currentIndex = nextIndex;
//
//    nextIndex--;
//  }
//
////
//
//  function marginCtrlWrap(){
//    var wrapWidth = $('.control-wrap').width();
//    $('.control-wrap').css({
//      'margin-left' : -( wrapWidth / 2 )
//    });
//  }
//
//  function paging(){
//    var imgNumber = $('.slide-list-image').length; // size() 개수 구하는 함수
//    for(var i=0; i<imgNumber; i++){
//      $('.paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');
//    }
//  }
//  function clickPaging(){
//  }
//
//
//  init();
//
//
//
//  $('.slide-arrow-right').on('click', function(){
//
//    clearInterval( timeID );
//    clearInterval( checkID );
//    var count = 0;
//    checkID = setInterval(function(){
//      if(count == 5){
//        autoRolling();
//        clearInterval(checkID);
//      }
//      console.log(count);
//      count++;
//    }, 1000);
//    nextIndex = currentIndex + 1;
//    if( !$('.slide-list-image').is(':animated') ){
//      moveLeft();
//    }
//  });
//
//  $('.slide-arrow-left').on('click', function(){
//    clearInterval( timeID );
//    clearInterval( checkID );
//    var count = 0;
//    checkID = setInterval(function(){
//      if(count == 5){
//        autoRolling();
//        clearInterval(checkID);
//      }
//      console.log(count);
//      count++;
//    }, 1000);
//    nextIndex = currentIndex - 1;
//    if( !$('.slide-list-image').is(':animated') ){
//      moveRight();
//    }
//  });
});
