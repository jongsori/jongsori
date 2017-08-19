/**
 * Created by Administrator on 2017-08-18.
 */


//$('.photo-list-item').on('mouseenter',function(){
//  $(this).children('.photo-list-item-mask-heading').addClass('on');
//});
//
//$('.photo-list-item').on('click',function(){
//  $(this).children('.item-wrap').addClass('on');
//
//
//});
//$('.btn-pop-close').on('click',function(){
//  $(this).parents('.item-wrap').css({
//    height :0,
//    transition : 'height 1s ease-out'
//  });
//  $('.review').css({
//    'padding-bottom' : 0,
//    transition : 'padding-bottom .5s ease-out'
//  });
//});
//
//
//
//$(function(){
//
//  function init(){
//    $('.photo').eq(0).css({left : 0});
//    $('.photo').eq(1).css({left : 1050});
//    $('.photo').eq(2).css({left : -1050});
//    marginControlWrap();
//    paging();
//  }
//
//
//
//  var currentIndex = 0;
//  var  nextIndex = 0;
//  var timeId;
//  var checkId;
//
//
//  function moveLeft(){
//
//    if(nextIndex >= $('.photo').length){
//      nextIndex = 0;
//    }
//
//    $('.photo').eq(currentIndex).stop().animate({left:-1050}, 2000, 'easeOutBounce');
//
//
//    $('.photo').eq(nextIndex).css({left:1050}).stop().animate({left:0}, 2000, 'easeOutBounce');
//
//    currentIndex = nextIndex;
//
//    nextIndex++;
//  }
//
//
//  function moveRight(){
//
//    if(nextIndex <= -1) {
//      nextIndex = $('.view-image').length-1;
//    }
//
//
//
//    $('.photo-list-item').eq(currentIndex).stop().animate({left : 1050}, 2000, 'easeOutBounce');
//
//
//    $('.photo-list-item').eq(nextIndex).css({left : -1050}).stop().animate({left : 0}, 2000, 'easeOutBounce');
//
//
//    currentIndex = nextIndex;
//
//    nextIndex--;
//
//  }
//
//  function autoRolling(){// 자동 롤링
//
//    timeId = setInterval(function(){
//      nextIndex = currentIndex + 1;
//      moveLeft();
//    }, 3000);
//
//  }
//
//
//
//
//  function marginControlWrap(){
//    var wrapWidth = $('.photo .radio-box').width();
//    $('.photo .radio-box').css({
//      'margin-left' : -(wrapWidth/2)
//    });
//  }
//
//  // 이미지 개수 만큼
//  //function paging(){
//  //  var imgNumber = $('.js-sliding .view-image').length;   // size() : 개수 구하는 함수
//  //  for(var i=0; i<imgNumber; i++){    // 이미지 개수 만큼 반복할 for
//  //    $('.js-sliding .paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');
//  //  }
//  //}
//
//
//
//
//
//
//  // 실행부
//  init();
//  autoRolling();
//
//
//
//
//
//  $('.arrow.right').on('click',function(){
//
//    clearInterval(checkId);
//    clearInterval(timeId);
//
//    var  count = 0;
//    checkId = setInterval(function(){
//      if(count == 5){
//        autoRolling();
//        clearInterval(checkId);
//      }
//      count++;
//    },1000);
//    nextIndex = currentIndex + 1;
//    if( !$('.photo-list-item').is(':animated')){
//      moveLeft();
//    }
//
//  });
//
//
//  $('.arrow.left').on('click',function(){
//
//    clearInterval(checkId);
//    clearInterval(timeId);
//
//    var  count = 0;
//    checkId = setInterval(function(){
//      if(count == 5){
//        autoRolling();
//        clearInterval(checkId);
//      }
//      count++;
//    },1000);
//    nextIndex = currentIndex -1;
//
//    if( !$('.photo-list-item').is(':animated')){
//      moveRight();
//    }
//
//  });
//
//
//
//});