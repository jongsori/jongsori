
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzJfMl8yLmpzIiwiX2pzcl8zXzEuanMiLCJfanNyXzNfMV8xLmpzIiwiX2pzcl8zXzFfMi5qcyIsIl9qc3JfNF8xLmpzIiwiX2pzcl80XzJfMS5qcyIsIl9qc3JfNF8zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogZ25iIGpRdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgxLWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcuZ25iLWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi13cmFwJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcblxyXG4gICQoJy5nbmItZGVwdGgyLXdyYXAnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTcuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDrp4jsmrDsiqQg7Jik67KE7IucXHJcbiAgdmFyIGNhbGN1bGF0ZVJhdGlvID0ge1xyXG4gICAgJGltYWdlVG9wOiAkKCcuc2xpZGUtd3JhcCcpLFxyXG4gICAgJGltYWdlQmlnOiAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLFxyXG4gICAgJGltYWdlVGh1bWI6ICQoJy5zbGlkZS1saXN0LWltYWdlJyksXHJcblxyXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmFyZWFXaWR0aCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnd2lkdGgnKSk7XHJcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmFyZWFSYXRpbyA9IHRoaXMuYXJlYVdpZHRoIC8gdGhpcy5hcmVhSGVpZ2h0O1xyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24gKCRpbWFnZSkge1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCgkaW1hZ2UuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCRpbWFnZS5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgdGhpcy5pbWFnZVJhdGlvID0gdGhpcy5pbWFnZVdpZHRoIC8gdGhpcy5pbWFnZUhlaWdodDtcclxuICAgIH0sXHJcblxyXG4gICAgYXBwbHlCaWcgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XHJcbiAgICAgIGlmICh0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbykge1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtd2lkdGgnKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuJGltYWdlVGh1bWIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvKSB7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuICAkKCcuc2xpZGUnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCgnLnNsaWRlLWxpc3QtaXRlbScpLmVxKDApICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8g7ZmU7IK07ZGcIO2BtOumreyLnFxyXG5cclxuXHJcbn0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTEuXHJcbiAqL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmd1aWRlLWJveCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZ3VpZGUtYm94LWhlYWRpbmcnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5ndWlkZS1ib3gnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmd1aWRlLWJveC1oZWFkaW5nJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTAyLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHJvdXRlPSBbXHJcbiAgICAgICfsnbjsgqzrj5kt7IyI7KeA6ri4LeuWoeuwleusvOq0gC3sooXrrJgt67mE7JuQLeywveqyveq2gScsXHJcbiAgICAgICfqsr3rs7XqtoEt6rWt66a966+87IaN67CV66y86rSALeyCvOyyreuPmeq4uC3ssL3rjZXqtoEnLFxyXG4gICAgICAnRERQLeuPmeuMgOusuC3qtJHsnqXsi5zsnqUt7KKF66yYJyxcclxuICAgICAgJ+uMgO2VmeuhnC3rp4jroZzri4jsl5Dqs7Xsm5At64KZ7IKw6rO17JuQLeydtO2ZlOuyve2ZlOuniOydhC3ssL3qsr3qtoEnLFxyXG4gICAgICAn7LKt6rOE7LKcJuyyreqzhOq0keyepS3qta3rpr3tmITrjIDrr7jsiKDqtIAoTU1DQSkt67aB7LSM7ZWc7Jil66eI7J2ELeqyveuzteq2gSdcclxuICBdO1xyXG4gIHZhciB0aW1lRGlzdGFuY2UgPSBbXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAzNeu2hCAsIOydtOuPmeqxsOumrCA6IDIuMTdrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAzMOu2hCAsIOydtOuPmeqxsOumrCA6IDIuMDNrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAyNeu2hCAsIOydtOuPmeqxsOumrCA6IDEuOTFrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAyNeu2hCAsIOydtOuPmeqxsOumrCA6IDEuODJrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiA0MOu2hCAsIOydtOuPmeqxsOumrCA6IDIuMjNrbSdcclxuICBdO1xyXG5cclxuXHJcbiAgJCgnLmNvdXJzZS1saXN0LWl0ZW0+aW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaHRtbE5vZGUgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCcuY291cnNlLWxpc3QtaXRlbScpO1xyXG5cclxuICAgIGh0bWxOb2RlICs9ICc8ZGl2IGNsYXNzPVwiY291cnNlLXdyYXBcIj4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwicm91dGVcIj4nICsgcm91dGVbaW5kZXhOdW1iZXJdICsgJzwvcD4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwidGltZS1kaXN0YW5jZVwiPicgKyB0aW1lRGlzdGFuY2VbaW5kZXhOdW1iZXJdICsgJzwvcD4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5odG1sKGh0bWxOb2RlKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jb3Vyc2UtbGlzdC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyDslYTrnqvspIQg66qo7IWY7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICQoJy5jb3Vyc2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTEnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvLyDsmbzsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgICAkKCcuY291cnNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAgIC8vIOyYpOuluOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAwLjXstIhcclxuICAgICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyDsnJfspIQg66qo7IWYXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAkKCcuY291cnNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTMnKTtcclxuXHJcbiAgICB9LCA2MDApO1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDkuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc3RhcnQgPSB0cnVlO1xyXG5cclxuICAkKCcucGxhY2UtbGlzdC1pdGVtPmlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgcGxhY2UgPSBbXHJcbiAgICAgICfqsr3rs7XqtoEnLCAn6rSR7J6l7Iuc7J6lJywgJ+uCmeyCsOqzteybkCcgLCfrjIDrprzrr7jsiKDqtIAnLCAn64+Z64yA66y4JyxcclxuICAgICAgJ+u2gey0jO2VnOyYpeuniOydhCcsICfsgrzssq3qs7Xsm5AnLCAn7IyI7KeA6ri4JywgJ+yiheusmCcsICfssL3qsr3qtoEnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBodG1sTm9kZSA9ICcnO1xyXG4gICAgdmFyIGNob2ljZVBsYWNlID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgnLnBsYWNlLWxpc3QtaXRlbScpO1xyXG5cclxuICAgIGNob2ljZVBsYWNlICs9IHBsYWNlW2luZGV4TnVtYmVyXTtcclxuXHJcbiAgICBpZiggc3RhcnQgKXtcclxuXHJcbiAgICAgIGh0bWxOb2RlICs9ICc8ZGl2IGNsYXNzPVwicGxhY2Utd3JhcFwiPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cImNob2ljZS1wbGFjZVwiPicgKyBjaG9pY2VQbGFjZSArICc8L3A+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuaHRtbChodG1sTm9kZSk7XHJcbiAgICAgIHN0YXJ0ID0gZmFsc2U7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cImNob2ljZS1wbGFjZVwiPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICctICAnICsgY2hvaWNlUGxhY2UgKyAnPC9wPic7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0IC5wbGFjZS13cmFwJykuYXBwZW5kKGh0bWxOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wbGFjZS1yZWxvYWQtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucGxhY2UtbGlzdC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcucGxhY2UtcmVsb2FkLWJ0bicpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIC8vIOyVhOueq+ykhCDrqqjshZjsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgJCgnLnBsYWNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUxJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLy8g7Jm87Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICAgJCgnLnBsYWNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAgIC8vIOyYpOuluOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAwLjXstIhcclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIOycl+ykhCDrqqjshZhcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgNjAwKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCJcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy50aXAtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLnRpcC1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRsaXN0TGluayApe1xyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy50aXAtbGlzdC1kZXRhaWwnKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnRpcC1saXN0LWxpbmsnKS5kYXRhKCdvcGVuJyAsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsIFwiI2RkZFwiKTtcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLnRpcC1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xOC5cclxuICovXHJcblxyXG5cclxuLy8kKCcucGhvdG8tbGlzdC1pdGVtJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbi8vICAkKHRoaXMpLmNoaWxkcmVuKCcucGhvdG8tbGlzdC1pdGVtLW1hc2staGVhZGluZycpLmFkZENsYXNzKCdvbicpO1xyXG4vL30pO1xyXG4vL1xyXG4vLyQoJy5waG90by1saXN0LWl0ZW0nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbi8vICAkKHRoaXMpLmNoaWxkcmVuKCcuaXRlbS13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcbi8vXHJcbi8vXHJcbi8vfSk7XHJcbi8vJCgnLmJ0bi1wb3AtY2xvc2UnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbi8vICAkKHRoaXMpLnBhcmVudHMoJy5pdGVtLXdyYXAnKS5jc3Moe1xyXG4vLyAgICBoZWlnaHQgOjAsXHJcbi8vICAgIHRyYW5zaXRpb24gOiAnaGVpZ2h0IDFzIGVhc2Utb3V0J1xyXG4vLyAgfSk7XHJcbi8vICAkKCcucmV2aWV3JykuY3NzKHtcclxuLy8gICAgJ3BhZGRpbmctYm90dG9tJyA6IDAsXHJcbi8vICAgIHRyYW5zaXRpb24gOiAncGFkZGluZy1ib3R0b20gLjVzIGVhc2Utb3V0J1xyXG4vLyAgfSk7XHJcbi8vfSk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vJChmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgZnVuY3Rpb24gaW5pdCgpe1xyXG4vLyAgICAkKCcucGhvdG8nKS5lcSgwKS5jc3Moe2xlZnQgOiAwfSk7XHJcbi8vICAgICQoJy5waG90bycpLmVxKDEpLmNzcyh7bGVmdCA6IDEwNTB9KTtcclxuLy8gICAgJCgnLnBob3RvJykuZXEoMikuY3NzKHtsZWZ0IDogLTEwNTB9KTtcclxuLy8gICAgbWFyZ2luQ29udHJvbFdyYXAoKTtcclxuLy8gICAgcGFnaW5nKCk7XHJcbi8vICB9XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuLy8gIHZhciAgbmV4dEluZGV4ID0gMDtcclxuLy8gIHZhciB0aW1lSWQ7XHJcbi8vICB2YXIgY2hlY2tJZDtcclxuLy9cclxuLy9cclxuLy8gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbi8vXHJcbi8vICAgIGlmKG5leHRJbmRleCA+PSAkKCcucGhvdG8nKS5sZW5ndGgpe1xyXG4vLyAgICAgIG5leHRJbmRleCA9IDA7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgJCgnLnBob3RvJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotMTA1MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcbi8vXHJcbi8vXHJcbi8vICAgICQoJy5waG90bycpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0OjEwNTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuLy9cclxuLy8gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4vL1xyXG4vLyAgICBuZXh0SW5kZXgrKztcclxuLy8gIH1cclxuLy9cclxuLy9cclxuLy8gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG4vL1xyXG4vLyAgICBpZihuZXh0SW5kZXggPD0gLTEpIHtcclxuLy8gICAgICBuZXh0SW5kZXggPSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICQoJy5waG90by1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogMTA1MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcbi8vXHJcbi8vXHJcbi8vICAgICQoJy5waG90by1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdCA6IC0xMDUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQgOiAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuLy9cclxuLy9cclxuLy8gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4vL1xyXG4vLyAgICBuZXh0SW5kZXgtLTtcclxuLy9cclxuLy8gIH1cclxuLy9cclxuLy8gIGZ1bmN0aW9uIGF1dG9Sb2xsaW5nKCl7Ly8g7J6Q64+ZIOuhpOungVxyXG4vL1xyXG4vLyAgICB0aW1lSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4vLyAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbi8vICAgICAgbW92ZUxlZnQoKTtcclxuLy8gICAgfSwgMzAwMCk7XHJcbi8vXHJcbi8vICB9XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICBmdW5jdGlvbiBtYXJnaW5Db250cm9sV3JhcCgpe1xyXG4vLyAgICB2YXIgd3JhcFdpZHRoID0gJCgnLnBob3RvIC5yYWRpby1ib3gnKS53aWR0aCgpO1xyXG4vLyAgICAkKCcucGhvdG8gLnJhZGlvLWJveCcpLmNzcyh7XHJcbi8vICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0od3JhcFdpZHRoLzIpXHJcbi8vICAgIH0pO1xyXG4vLyAgfVxyXG4vL1xyXG4vLyAgLy8g7J2066+47KeAIOqwnOyImCDrp4ztgbxcclxuLy8gIC8vZnVuY3Rpb24gcGFnaW5nKCl7XHJcbi8vICAvLyAgdmFyIGltZ051bWJlciA9ICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykubGVuZ3RoOyAgIC8vIHNpemUoKSA6IOqwnOyImCDqtaztlZjripQg7ZWo7IiYXHJcbi8vICAvLyAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspeyAgICAvLyDsnbTrr7jsp4Ag6rCc7IiYIOunjO2BvCDrsJjrs7XtlaAgZm9yXHJcbi8vICAvLyAgICAkKCcuanMtc2xpZGluZyAucGFnaW5nJykuYXBwZW5kKCc8bGkgY2xhc3M9XCJwYWdpbmctaXRlbVwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwYWdpbmctbGlua1wiPicgKyAoaSsxKSArICc8L2E+PC9saT4nKTtcclxuLy8gIC8vICB9XHJcbi8vICAvL31cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy8gIC8vIOyLpO2Wieu2gFxyXG4vLyAgaW5pdCgpO1xyXG4vLyAgYXV0b1JvbGxpbmcoKTtcclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy8gICQoJy5hcnJvdy5yaWdodCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gICAgY2xlYXJJbnRlcnZhbChjaGVja0lkKTtcclxuLy8gICAgY2xlYXJJbnRlcnZhbCh0aW1lSWQpO1xyXG4vL1xyXG4vLyAgICB2YXIgIGNvdW50ID0gMDtcclxuLy8gICAgY2hlY2tJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgaWYoY291bnQgPT0gNSl7XHJcbi8vICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4vLyAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lkKTtcclxuLy8gICAgICB9XHJcbi8vICAgICAgY291bnQrKztcclxuLy8gICAgfSwxMDAwKTtcclxuLy8gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuLy8gICAgaWYoICEkKCcucGhvdG8tbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpKXtcclxuLy8gICAgICBtb3ZlTGVmdCgpO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICB9KTtcclxuLy9cclxuLy9cclxuLy8gICQoJy5hcnJvdy5sZWZ0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgICBjbGVhckludGVydmFsKGNoZWNrSWQpO1xyXG4vLyAgICBjbGVhckludGVydmFsKHRpbWVJZCk7XHJcbi8vXHJcbi8vICAgIHZhciAgY291bnQgPSAwO1xyXG4vLyAgICBjaGVja0lkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuLy8gICAgICBpZihjb3VudCA9PSA1KXtcclxuLy8gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbi8vICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSWQpO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICBjb3VudCsrO1xyXG4vLyAgICB9LDEwMDApO1xyXG4vLyAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLTE7XHJcbi8vXHJcbi8vICAgIGlmKCAhJCgnLnBob3RvLWxpc3QtaXRlbScpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbi8vICAgICAgbW92ZVJpZ2h0KCk7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gIH0pO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL30pOyIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcuZmFxLWxpc3QtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuICAgICQoJy5mYXEtbGlzdC1kZXRhaWwnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkbGlzdExpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNmZmNkMTJcIik7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmZhcS1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLCBcIiNkZGRcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZGRkXCIpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGluaXQoKTtcclxuXHJcblxyXG4gICQoJy5mYXEtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCQodGhpcykpO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuIl19
