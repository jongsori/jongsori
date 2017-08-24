/**
 * Created by Administrator on 2017-08-24.
 */

$(function(){
  var sub = $(this).addClass('on', function(){
  });
});

/**
 * gnb jQuery
 */

$(function(){

  $('.gnb-depth1-link').on('mouseenter', function(){

    $(this).next('.gnb-depth2-wrap').addClass('on');

  });

  $('.gnb-depth1-link').on('mouseleave', function(){

    $(this).next('.gnb-depth2-wrap').removeClass('on');

  });

  $('.gnb-depth2-wrap').on('mouseenter', function(){
    $(this).addClass('on');
  });


  $('.gnb-depth2-wrap').on('mouseleave', function(){
    $(this).removeClass('on');
  });

  $('.gnb-depth2-link').on('click', function(){

    $(this).parents('.gnb-depth2-wrap').addClass('on');

  });

  $(function(){
    var sub = $(this).addClass('on', function(){
    });
  });

});
/**
 * Created by Administrator on 2017-08-17.
 */

$(function(){

  // 마우스 오버시
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

  $('.slide-list-item').on('mouseenter', function(){
    calculateRatio.changeImage( $(this) );
    calculateRatio.applyBig();
  });
  $('.slide').on('mouseleave', function(){
    calculateRatio.changeImage( $('.slide-list-item').eq(0) );
    calculateRatio.applyBig();
  });





  // 화살표 클릭시


});

/**
 * Created by Administrator on 2017-08-11.
 */


$(function(){

  $('.guide-box').on('mouseenter', function(){

    $(this).children('.guide-box-heading').addClass('on');

  });

  $('.guide-box').on('mouseleave', function(){

    $(this).children('.guide-box-heading').removeClass('on');

  });

});
/**
 * Created by Administrator on 2017-08-02.
 */

$(function(){

  var route= [
      '인사동-쌈지길-떡박물관-종묘-비원-창경궁',
      '경복궁-국립민속박물관-삼청동길-창덕궁',
      'DDP-동대문-광장시장-종묘',
      '대학로-마로니에공원-낙산공원-이화벽화마을-창경궁',
      '청계천&청계광장-국립현대미술관(MMCA)-북촌한옥마을-경복궁'
  ];
  var timeDistance = [
      '예상소요시간 : 35분 , 이동거리 : 2.17km',
      '예상소요시간 : 30분 , 이동거리 : 2.03km',
      '예상소요시간 : 25분 , 이동거리 : 1.91km',
      '예상소요시간 : 25분 , 이동거리 : 1.82km',
      '예상소요시간 : 40분 , 이동거리 : 2.23km'
  ];


  $('.course-list-item>input').on('change', function(){

    var htmlNode = '';

    var indexNumber = $(this).parent().index('.course-list-item');

    htmlNode += '<div class="course-wrap">';
    htmlNode += '<p class="route">' + route[indexNumber] + '</p>';
    htmlNode += '<p class="time-distance">' + timeDistance[indexNumber] + '</p>';
    htmlNode += '</div>';

    $('.course-select').html(htmlNode);

  });

  $('.course-list-item').on('click', function(){

    // 아랫줄 모션적용 클래스 - 1초
    $('.course-view').addClass('frame1');

    setTimeout(function(){

      // 왼쪽 줄 모션 적용 클래스 - 1초
      $('.course-view').addClass('frame2');
      // 오른쪽 줄 모션 적용 클래스 - 0.5초
      $('.course-select').addClass('frame2');

    }, 500);

    // 윗줄 모션
    setTimeout(function(){

      $('.course-select').addClass('frame3');

    }, 600);


  });

});
/**
 * Created by Administrator on 2017-08-09.
 */

$(function(){

  var start = true;

  $('.place-list-item>input').on('click', function(){

    var place = [
      '경복궁', '광장시장', '낙산공원' ,'대림미술관', '동대문',
      '북촌한옥마을', '삼청공원', '쌈지길', '종묘', '창경궁'
    ];

    var htmlNode = '';
    var choicePlace = '';

    var indexNumber = $(this).parent().index('.place-list-item');

    choicePlace += place[indexNumber];

    if( start ){

      htmlNode += '<div class="place-wrap">';
      htmlNode += '<p class="choice-place">' + choicePlace + '</p>';
      htmlNode += '</div>';

      $('.place-select').html(htmlNode);
      start = false;

    } else {

      htmlNode += '<p class="choice-place">';
      htmlNode += '-  ' + choicePlace + '</p>';

      $('.place-select .place-wrap').append(htmlNode);
    }

  });

  $('.place-reload-btn').on('click', function(e){

    e.preventDefault();
    location.reload();

  });

  $('.place-list-item').on('click', function(){

    $('.place-reload-btn').addClass('on');

    // 아랫줄 모션적용 클래스 - 1초
    $('.place-view').addClass('frame1');

    setTimeout(function(){

      // 왼쪽 줄 모션 적용 클래스 - 1초
      $('.place-view').addClass('frame2');
      // 오른쪽 줄 모션 적용 클래스 - 0.5초
      $('.place-select').addClass('frame2');

    }, 500);

    // 윗줄 모션
    setTimeout(function(){

      $('.place-select').addClass('frame3');

    }, 600);

  });

});


$(function(){

  function init(){

    $('.tip-list-link').data({'open' : 'false'});
    $('.tip-list-detail').each(function(index){

      $(this).data({ 'height' : $(this).height() }).css({height : 0});

    });

  }

  function menuOpen( $listLink ){

    $listLink.next().css({
      height : $listLink.next().data('height')
    });

    $listLink.data({'open' : 'true'}).addClass('up').css("color","#ffcd12");




  }

  function menuClose( $listLink ){
    $listLink.parent().siblings().children('.tip-list-detail').css({
      height : 0
    });

    $listLink.parent().siblings().children('.tip-list-link').data('open' , 'false').removeClass('up').css("color", "#ddd");



  }

  function menuSelfClose( $listLink ){

    $listLink.next().css({
      height: 0
    });

    $listLink.data({'open': 'false'}).removeClass('up').css("color","#ddd");
  }



  init();

  $('.tip-list-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false') {

      menuOpen( $(this) );
      menuClose( $(this) );


    } else {

      menuSelfClose( $(this) );

    }

  });


});

/**
 * Created by Administrator on 2017-08-18.
 */



$(function(){
  function moveRight(){

    if(nextIndex <= -1) {
      nextIndex = $('.view-image').length-1;
    }



    $('.photo-list-item').eq(currentIndex).stop().animate({left : 1050}, 2000, 'easeOutBounce');


    $('.photo-list-item').eq(nextIndex).css({left : -1050}).stop().animate({left : 0}, 2000, 'easeOutBounce');


    currentIndex = nextIndex;

    nextIndex--;

  }



  //$('.photo-list-item').data('open','false').on('click',function(){
  //  if($(this).data('open') == 'false'){
  //    $(this).next().addClass('hidden');
  //    $(this).data('open','true');
  //  }else{
  //    $(this).next().removeClass('hidden');
  //    $(this).data('open','false');
  //  }
  //
  //});


//
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
});

//
//
//  // 실행부
//  init();
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

$(function(){

  function init(){

    $('.faq-list-link').data({'open' : 'false'});
    $('.faq-list-detail').each(function(index){

      $(this).data({ 'height' : $(this).height() }).css({height : 0});

    });

  }

  function menuOpen( $listLink ){

    $listLink.next().css({
      height : $listLink.next().data('height')
    });

    $listLink.data({'open' : 'true'}).addClass('up').css("color","#ffcd12");


  }

  function menuClose( $listLink ){
    $listLink.parent().siblings().children('.faq-list-detail').css({
      height : 0
    });

    $listLink.parent().siblings().children('.faq-list-link').data('open', 'false').removeClass('up').css("color", "#ddd");

  }



  function menuSelfClose( $listLink ){

    $listLink.next().css({
      height: 0
    });

    $listLink.data({'open': 'false'}).removeClass('up').css("color","#ddd");

  }




  init();


  $('.faq-list-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false') {

      menuOpen( $(this) );
      menuClose( $(this) );




      } else {

      menuSelfClose($(this));

    }
  });



});



<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzJfMl8yLmpzIiwiX2pzcl8zXzEuanMiLCJfanNyXzNfMV8xLmpzIiwiX2pzcl8zXzFfMi5qcyIsIl9qc3JfNF8xLmpzIiwiX2pzcl80XzJfMS5qcyIsIl9qc3JfNF8zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiBnbmIgalF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykubmV4dCgnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgyLXdyYXAnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCgnLmduYi1kZXB0aDItd3JhcCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgyLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykucGFyZW50cygnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xNy5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOuniOyasOyKpCDsmKTrsoTsi5xcclxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XHJcbiAgICAkaW1hZ2VUb3A6ICQoJy5zbGlkZS13cmFwJyksXHJcbiAgICAkaW1hZ2VCaWc6ICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJyksXHJcbiAgICAkaW1hZ2VUaHVtYjogJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKSxcclxuXHJcbiAgICBhcmVhVmFsdWUgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XHJcbiAgICAgIHRoaXMuYXJlYVJhdGlvID0gdGhpcy5hcmVhV2lkdGggLyB0aGlzLmFyZWFIZWlnaHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlVmFsdWUgOiBmdW5jdGlvbiAoJGltYWdlKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IHBhcnNlSW50KCRpbWFnZS5jc3MoJ3dpZHRoJykpO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQoJGltYWdlLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmltYWdlUmF0aW8gPSB0aGlzLmltYWdlV2lkdGggLyB0aGlzLmltYWdlSGVpZ2h0O1xyXG4gICAgfSxcclxuXHJcbiAgICBhcHBseUJpZyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlQmlnKTtcclxuICAgICAgaWYgKHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvKSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZVRodW1iLmVxKGkpKTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8pIHtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJCgnLnNsaWRlLWxpc3QtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG4gICQoJy5zbGlkZScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKCcuc2xpZGUtbGlzdC1pdGVtJykuZXEoMCkgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyDtmZTsgrTtkZwg7YG066at7IucXHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xMS5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZ3VpZGUtYm94Jykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5ndWlkZS1ib3gtaGVhZGluZycpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmd1aWRlLWJveCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZ3VpZGUtYm94LWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDIuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgcm91dGU9IFtcclxuICAgICAgJ+yduOyCrOuPmS3sjIjsp4DquLgt65ah67CV66y86rSALeyiheusmC3ruYTsm5At7LC96rK96raBJyxcclxuICAgICAgJ+qyveuzteq2gS3qta3rpr3rr7zsho3rsJXrrLzqtIAt7IK87LKt64+Z6ri4LeywveuNleq2gScsXHJcbiAgICAgICdERFAt64+Z64yA66y4Leq0keyepeyLnOyepS3sooXrrJgnLFxyXG4gICAgICAn64yA7ZWZ66GcLeuniOuhnOuLiOyXkOqzteybkC3rgpnsgrDqs7Xsm5At7J207ZmU67K97ZmU66eI7J2ELeywveqyveq2gScsXHJcbiAgICAgICfssq3qs4Tsspwm7LKt6rOE6rSR7J6lLeq1reumve2YhOuMgOuvuOyIoOq0gChNTUNBKS3rtoHstIztlZzsmKXrp4jsnYQt6rK967O16raBJ1xyXG4gIF07XHJcbiAgdmFyIHRpbWVEaXN0YW5jZSA9IFtcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDM167aEICwg7J2064+Z6rGw66asIDogMi4xN2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDMw67aEICwg7J2064+Z6rGw66asIDogMi4wM2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS45MWttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS44MmttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDQw67aEICwg7J2064+Z6rGw66asIDogMi4yM2ttJ1xyXG4gIF07XHJcblxyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBodG1sTm9kZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5jb3Vyc2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJjb3Vyc2Utd3JhcFwiPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJyb3V0ZVwiPicgKyByb3V0ZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJ0aW1lLWRpc3RhbmNlXCI+JyArIHRpbWVEaXN0YW5jZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAkKCcuY291cnNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmNvdXJzZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIOyVhOueq+ykhCDrqqjshZjsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgJCgnLmNvdXJzZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIOyZvOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAgICQoJy5jb3Vyc2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuICAgICAgLy8g7Jik66W47Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDAuNey0iFxyXG4gICAgICAkKCcuY291cnNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIOycl+ykhCDrqqjshZhcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wOS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzdGFydCA9IHRydWU7XHJcblxyXG4gICQoJy5wbGFjZS1saXN0LWl0ZW0+aW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBwbGFjZSA9IFtcclxuICAgICAgJ+qyveuzteq2gScsICfqtJHsnqXsi5zsnqUnLCAn64KZ7IKw6rO17JuQJyAsJ+uMgOumvOuvuOyIoOq0gCcsICfrj5nrjIDrrLgnLFxyXG4gICAgICAn67aB7LSM7ZWc7Jil66eI7J2EJywgJ+yCvOyyreqzteybkCcsICfsjIjsp4DquLgnLCAn7KKF66yYJywgJ+ywveqyveq2gSdcclxuICAgIF07XHJcblxyXG4gICAgdmFyIGh0bWxOb2RlID0gJyc7XHJcbiAgICB2YXIgY2hvaWNlUGxhY2UgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCcucGxhY2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgY2hvaWNlUGxhY2UgKz0gcGxhY2VbaW5kZXhOdW1iZXJdO1xyXG5cclxuICAgIGlmKCBzdGFydCApe1xyXG5cclxuICAgICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJwbGFjZS13cmFwXCI+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwiY2hvaWNlLXBsYWNlXCI+JyArIGNob2ljZVBsYWNlICsgJzwvcD4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5odG1sKGh0bWxOb2RlKTtcclxuICAgICAgc3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwiY2hvaWNlLXBsYWNlXCI+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJy0gICcgKyBjaG9pY2VQbGFjZSArICc8L3A+JztcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QgLnBsYWNlLXdyYXAnKS5hcHBlbmQoaHRtbE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBsYWNlLXJlbG9hZC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wbGFjZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5wbGFjZS1yZWxvYWQtYnRuJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgLy8g7JWE656r7KSEIOuqqOyFmOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAkKCcucGxhY2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTEnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvLyDsmbzsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgICAkKCcucGxhY2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuICAgICAgLy8g7Jik66W47Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDAuNey0iFxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8g7JyX7KSEIOuqqOyFmFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTMnKTtcclxuXHJcbiAgICB9LCA2MDApO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIlxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLnRpcC1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcudGlwLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnRpcC1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nICwgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIiwgXCIjZGRkXCIpO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2RkZFwiKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcudGlwLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE4LlxyXG4gKi9cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSkge1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgJCgnLnBob3RvLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQgOiAxMDUwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcblxyXG4gICAgJCgnLnBob3RvLWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0IDogLTEwNTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG5cclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcblxyXG4gICAgbmV4dEluZGV4LS07XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvLyQoJy5waG90by1saXN0LWl0ZW0nKS5kYXRhKCdvcGVuJywnZmFsc2UnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgLy8gIGlmKCQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpe1xyXG4gIC8vICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAvLyAgICAkKHRoaXMpLmRhdGEoJ29wZW4nLCd0cnVlJyk7XHJcbiAgLy8gIH1lbHNle1xyXG4gIC8vICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAvLyAgICAkKHRoaXMpLmRhdGEoJ29wZW4nLCdmYWxzZScpO1xyXG4gIC8vICB9XHJcbiAgLy9cclxuICAvL30pO1xyXG5cclxuXHJcbi8vXHJcbi8vXHJcbi8vICBmdW5jdGlvbiBhdXRvUm9sbGluZygpey8vIOyekOuPmSDroaTrp4FcclxuLy9cclxuLy8gICAgdGltZUlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuLy8gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4vLyAgICAgIG1vdmVMZWZ0KCk7XHJcbi8vICAgIH0sIDMwMDApO1xyXG4vL1xyXG4vLyAgfVxyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgZnVuY3Rpb24gbWFyZ2luQ29udHJvbFdyYXAoKXtcclxuLy8gICAgdmFyIHdyYXBXaWR0aCA9ICQoJy5waG90byAucmFkaW8tYm94Jykud2lkdGgoKTtcclxuLy8gICAgJCgnLnBob3RvIC5yYWRpby1ib3gnKS5jc3Moe1xyXG4vLyAgICAgICdtYXJnaW4tbGVmdCcgOiAtKHdyYXBXaWR0aC8yKVxyXG4vLyAgICB9KTtcclxuLy8gIH1cclxuLy9cclxuLy8gIC8vIOydtOuvuOyngCDqsJzsiJgg66eM7YG8XHJcbi8vICAvL2Z1bmN0aW9uIHBhZ2luZygpe1xyXG4vLyAgLy8gIHZhciBpbWdOdW1iZXIgPSAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmxlbmd0aDsgICAvLyBzaXplKCkgOiDqsJzsiJgg6rWs7ZWY64qUIO2VqOyImFxyXG4vLyAgLy8gIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXsgICAgLy8g7J2066+47KeAIOqwnOyImCDrp4ztgbwg67CY67O17ZWgIGZvclxyXG4vLyAgLy8gICAgJCgnLmpzLXNsaWRpbmcgLnBhZ2luZycpLmFwcGVuZCgnPGxpIGNsYXNzPVwicGFnaW5nLWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwicGFnaW5nLWxpbmtcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcbi8vICAvLyAgfVxyXG4vLyAgLy99XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbn0pO1xyXG5cclxuLy9cclxuLy9cclxuLy8gIC8vIOyLpO2Wieu2gFxyXG4vLyAgaW5pdCgpO1xyXG4vL1xyXG4vL1xyXG4vLyAgJCgnLmFycm93LnJpZ2h0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgICBjbGVhckludGVydmFsKGNoZWNrSWQpO1xyXG4vLyAgICBjbGVhckludGVydmFsKHRpbWVJZCk7XHJcbi8vXHJcbi8vICAgIHZhciAgY291bnQgPSAwO1xyXG4vLyAgICBjaGVja0lkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuLy8gICAgICBpZihjb3VudCA9PSA1KXtcclxuLy8gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbi8vICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSWQpO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICBjb3VudCsrO1xyXG4vLyAgICB9LDEwMDApO1xyXG4vLyAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4vLyAgICBpZiggISQoJy5waG90by1saXN0LWl0ZW0nKS5pcygnOmFuaW1hdGVkJykpe1xyXG4vLyAgICAgIG1vdmVMZWZ0KCk7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gIH0pO1xyXG4vL1xyXG4vL1xyXG4vLyAgJCgnLmFycm93LmxlZnQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbi8vXHJcbi8vICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJZCk7XHJcbi8vICAgIGNsZWFySW50ZXJ2YWwodGltZUlkKTtcclxuLy9cclxuLy8gICAgdmFyICBjb3VudCA9IDA7XHJcbi8vICAgIGNoZWNrSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4vLyAgICAgIGlmKGNvdW50ID09IDUpe1xyXG4vLyAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuLy8gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJZCk7XHJcbi8vICAgICAgfVxyXG4vLyAgICAgIGNvdW50Kys7XHJcbi8vICAgIH0sMTAwMCk7XHJcbi8vICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtMTtcclxuLy9cclxuLy8gICAgaWYoICEkKCcucGhvdG8tbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpKXtcclxuLy8gICAgICBtb3ZlUmlnaHQoKTtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgfSk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vfSk7IiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5mYXEtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLmZhcS1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsIFwiI2RkZFwiKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuXHJcbiAgJCgnLmZhcS1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoJCh0aGlzKSk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiLCJfZ25iLmpzIiwiX2pzcl8yXzJfMi5qcyIsIl9qc3JfM18xLmpzIiwiX2pzcl8zXzFfMS5qcyIsIl9qc3JfM18xXzIuanMiLCJfanNyXzRfMS5qcyIsIl9qc3JfNF8yXzEuanMiLCJfanNyXzRfMy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjQuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIHZhciBzdWIgPSAkKHRoaXMpLmFkZENsYXNzKCdvbicsIGZ1bmN0aW9uKCl7XHJcbiAgfSk7XHJcbn0pOyIsIlxyXG4vKipcclxuICogZ25iIGpRdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgxLWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcuZ25iLWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi13cmFwJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcblxyXG4gICQoJy5nbmItZGVwdGgyLXdyYXAnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoZnVuY3Rpb24oKXtcclxuICAgIHZhciBzdWIgPSAkKHRoaXMpLmFkZENsYXNzKCdvbicsIGZ1bmN0aW9uKCl7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xNy5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOuniOyasOyKpCDsmKTrsoTsi5xcclxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XHJcbiAgICAkaW1hZ2VUb3A6ICQoJy5zbGlkZS13cmFwJyksXHJcbiAgICAkaW1hZ2VCaWc6ICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJyksXHJcbiAgICAkaW1hZ2VUaHVtYjogJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKSxcclxuXHJcbiAgICBhcmVhVmFsdWUgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XHJcbiAgICAgIHRoaXMuYXJlYVJhdGlvID0gdGhpcy5hcmVhV2lkdGggLyB0aGlzLmFyZWFIZWlnaHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlVmFsdWUgOiBmdW5jdGlvbiAoJGltYWdlKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IHBhcnNlSW50KCRpbWFnZS5jc3MoJ3dpZHRoJykpO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQoJGltYWdlLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmltYWdlUmF0aW8gPSB0aGlzLmltYWdlV2lkdGggLyB0aGlzLmltYWdlSGVpZ2h0O1xyXG4gICAgfSxcclxuXHJcbiAgICBhcHBseUJpZyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlQmlnKTtcclxuICAgICAgaWYgKHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvKSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZVRodW1iLmVxKGkpKTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8pIHtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJCgnLnNsaWRlLWxpc3QtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG4gICQoJy5zbGlkZScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKCcuc2xpZGUtbGlzdC1pdGVtJykuZXEoMCkgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyDtmZTsgrTtkZwg7YG066at7IucXHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xMS5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZ3VpZGUtYm94Jykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5ndWlkZS1ib3gtaGVhZGluZycpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmd1aWRlLWJveCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZ3VpZGUtYm94LWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDIuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgcm91dGU9IFtcclxuICAgICAgJ+yduOyCrOuPmS3sjIjsp4DquLgt65ah67CV66y86rSALeyiheusmC3ruYTsm5At7LC96rK96raBJyxcclxuICAgICAgJ+qyveuzteq2gS3qta3rpr3rr7zsho3rsJXrrLzqtIAt7IK87LKt64+Z6ri4LeywveuNleq2gScsXHJcbiAgICAgICdERFAt64+Z64yA66y4Leq0keyepeyLnOyepS3sooXrrJgnLFxyXG4gICAgICAn64yA7ZWZ66GcLeuniOuhnOuLiOyXkOqzteybkC3rgpnsgrDqs7Xsm5At7J207ZmU67K97ZmU66eI7J2ELeywveqyveq2gScsXHJcbiAgICAgICfssq3qs4Tsspwm7LKt6rOE6rSR7J6lLeq1reumve2YhOuMgOuvuOyIoOq0gChNTUNBKS3rtoHstIztlZzsmKXrp4jsnYQt6rK967O16raBJ1xyXG4gIF07XHJcbiAgdmFyIHRpbWVEaXN0YW5jZSA9IFtcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDM167aEICwg7J2064+Z6rGw66asIDogMi4xN2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDMw67aEICwg7J2064+Z6rGw66asIDogMi4wM2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS45MWttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS44MmttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDQw67aEICwg7J2064+Z6rGw66asIDogMi4yM2ttJ1xyXG4gIF07XHJcblxyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBodG1sTm9kZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5jb3Vyc2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJjb3Vyc2Utd3JhcFwiPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJyb3V0ZVwiPicgKyByb3V0ZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJ0aW1lLWRpc3RhbmNlXCI+JyArIHRpbWVEaXN0YW5jZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAkKCcuY291cnNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmNvdXJzZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIOyVhOueq+ykhCDrqqjshZjsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgJCgnLmNvdXJzZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIOyZvOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAgICQoJy5jb3Vyc2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuICAgICAgLy8g7Jik66W47Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDAuNey0iFxyXG4gICAgICAkKCcuY291cnNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIOycl+ykhCDrqqjshZhcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wOS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzdGFydCA9IHRydWU7XHJcblxyXG4gICQoJy5wbGFjZS1saXN0LWl0ZW0+aW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBwbGFjZSA9IFtcclxuICAgICAgJ+qyveuzteq2gScsICfqtJHsnqXsi5zsnqUnLCAn64KZ7IKw6rO17JuQJyAsJ+uMgOumvOuvuOyIoOq0gCcsICfrj5nrjIDrrLgnLFxyXG4gICAgICAn67aB7LSM7ZWc7Jil66eI7J2EJywgJ+yCvOyyreqzteybkCcsICfsjIjsp4DquLgnLCAn7KKF66yYJywgJ+ywveqyveq2gSdcclxuICAgIF07XHJcblxyXG4gICAgdmFyIGh0bWxOb2RlID0gJyc7XHJcbiAgICB2YXIgY2hvaWNlUGxhY2UgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCcucGxhY2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgY2hvaWNlUGxhY2UgKz0gcGxhY2VbaW5kZXhOdW1iZXJdO1xyXG5cclxuICAgIGlmKCBzdGFydCApe1xyXG5cclxuICAgICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJwbGFjZS13cmFwXCI+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwiY2hvaWNlLXBsYWNlXCI+JyArIGNob2ljZVBsYWNlICsgJzwvcD4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5odG1sKGh0bWxOb2RlKTtcclxuICAgICAgc3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwiY2hvaWNlLXBsYWNlXCI+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJy0gICcgKyBjaG9pY2VQbGFjZSArICc8L3A+JztcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QgLnBsYWNlLXdyYXAnKS5hcHBlbmQoaHRtbE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBsYWNlLXJlbG9hZC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wbGFjZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5wbGFjZS1yZWxvYWQtYnRuJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgLy8g7JWE656r7KSEIOuqqOyFmOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAkKCcucGxhY2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTEnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvLyDsmbzsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgICAkKCcucGxhY2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuICAgICAgLy8g7Jik66W47Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDAuNey0iFxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8g7JyX7KSEIOuqqOyFmFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTMnKTtcclxuXHJcbiAgICB9LCA2MDApO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIlxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLnRpcC1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcudGlwLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnRpcC1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nICwgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIiwgXCIjZGRkXCIpO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2RkZFwiKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcudGlwLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE4LlxyXG4gKi9cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcucGhvdG8tbGlzdC1pdGVtJykuZGF0YSgnb3BlbicsJ2ZhbHNlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgaWYoJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyl7XHJcbiAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKCdvcGVuJywndHJ1ZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQodGhpcykubmV4dCgpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKCdvcGVuJywnZmFsc2UnKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG4vL1xyXG4vLyAgICBpZihuZXh0SW5kZXggPD0gLTEpIHtcclxuLy8gICAgICBuZXh0SW5kZXggPSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICQoJy5waG90by1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogMTA1MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcbi8vXHJcbi8vXHJcbi8vICAgICQoJy5waG90by1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdCA6IC0xMDUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQgOiAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuLy9cclxuLy9cclxuLy8gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4vL1xyXG4vLyAgICBuZXh0SW5kZXgtLTtcclxuLy9cclxuLy8gIH1cclxuLy9cclxuLy8gIGZ1bmN0aW9uIGF1dG9Sb2xsaW5nKCl7Ly8g7J6Q64+ZIOuhpOungVxyXG4vL1xyXG4vLyAgICB0aW1lSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4vLyAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbi8vICAgICAgbW92ZUxlZnQoKTtcclxuLy8gICAgfSwgMzAwMCk7XHJcbi8vXHJcbi8vICB9XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICBmdW5jdGlvbiBtYXJnaW5Db250cm9sV3JhcCgpe1xyXG4vLyAgICB2YXIgd3JhcFdpZHRoID0gJCgnLnBob3RvIC5yYWRpby1ib3gnKS53aWR0aCgpO1xyXG4vLyAgICAkKCcucGhvdG8gLnJhZGlvLWJveCcpLmNzcyh7XHJcbi8vICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0od3JhcFdpZHRoLzIpXHJcbi8vICAgIH0pO1xyXG4vLyAgfVxyXG4vL1xyXG4vLyAgLy8g7J2066+47KeAIOqwnOyImCDrp4ztgbxcclxuLy8gIC8vZnVuY3Rpb24gcGFnaW5nKCl7XHJcbi8vICAvLyAgdmFyIGltZ051bWJlciA9ICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykubGVuZ3RoOyAgIC8vIHNpemUoKSA6IOqwnOyImCDqtaztlZjripQg7ZWo7IiYXHJcbi8vICAvLyAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspeyAgICAvLyDsnbTrr7jsp4Ag6rCc7IiYIOunjO2BvCDrsJjrs7XtlaAgZm9yXHJcbi8vICAvLyAgICAkKCcuanMtc2xpZGluZyAucGFnaW5nJykuYXBwZW5kKCc8bGkgY2xhc3M9XCJwYWdpbmctaXRlbVwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwYWdpbmctbGlua1wiPicgKyAoaSsxKSArICc8L2E+PC9saT4nKTtcclxuLy8gIC8vICB9XHJcbi8vICAvL31cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy8gIC8vIOyLpO2Wieu2gFxyXG4vLyAgaW5pdCgpO1xyXG4vL1xyXG4vL1xyXG4vLyAgJCgnLmFycm93LnJpZ2h0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgICBjbGVhckludGVydmFsKGNoZWNrSWQpO1xyXG4vLyAgICBjbGVhckludGVydmFsKHRpbWVJZCk7XHJcbi8vXHJcbi8vICAgIHZhciAgY291bnQgPSAwO1xyXG4vLyAgICBjaGVja0lkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuLy8gICAgICBpZihjb3VudCA9PSA1KXtcclxuLy8gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbi8vICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSWQpO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICBjb3VudCsrO1xyXG4vLyAgICB9LDEwMDApO1xyXG4vLyAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4vLyAgICBpZiggISQoJy5waG90by1saXN0LWl0ZW0nKS5pcygnOmFuaW1hdGVkJykpe1xyXG4vLyAgICAgIG1vdmVMZWZ0KCk7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gIH0pO1xyXG4vL1xyXG4vL1xyXG4vLyAgJCgnLmFycm93LmxlZnQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbi8vXHJcbi8vICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJZCk7XHJcbi8vICAgIGNsZWFySW50ZXJ2YWwodGltZUlkKTtcclxuLy9cclxuLy8gICAgdmFyICBjb3VudCA9IDA7XHJcbi8vICAgIGNoZWNrSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4vLyAgICAgIGlmKGNvdW50ID09IDUpe1xyXG4vLyAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuLy8gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJZCk7XHJcbi8vICAgICAgfVxyXG4vLyAgICAgIGNvdW50Kys7XHJcbi8vICAgIH0sMTAwMCk7XHJcbi8vICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtMTtcclxuLy9cclxuLy8gICAgaWYoICEkKCcucGhvdG8tbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpKXtcclxuLy8gICAgICBtb3ZlUmlnaHQoKTtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgfSk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vfSk7IiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5mYXEtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLmZhcS1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsIFwiI2RkZFwiKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuXHJcbiAgJCgnLmZhcS1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoJCh0aGlzKSk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
>>>>>>> 454d75cfcd4e278f4e929118d63ab51a6e78b7be
