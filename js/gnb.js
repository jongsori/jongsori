
/**
 * gnb jQuery
 */

$(function(){

  // 선언부
  function checkDepth1(){

    if (depth1 == 'sub1'){

      $('.gnb-depth1-link').eq(0).addClass('on');
      $('.gnb-depth2-wrap').eq(0).addClass('on');

    } else if(depth1 == 'sub2'){

      $('.gnb-depth1-link').eq(1).addClass('on');
      $('.gnb-depth2-wrap').eq(1).addClass('on');

    } else if(depth1 == 'sub3'){

      $('.gnb-depth1-link').eq(2).addClass('on');
      $('.gnb-depth2-wrap').eq(2).addClass('on');
    }

  }

  function checkDepth2(){
    if(depth2 == 'sub1-1'){

      $('.gnb-depth2-link').eq(0).addClass('on');

    } else if(depth2 == 'sub1-2'){

      $('.gnb-depth2-link').eq(1).addClass('on');

    } else if(depth2 == 'sub1-3'){

      $('.gnb-depth2-link').eq(2).addClass('on');

    } else if(depth2 == 'sub1-4'){

      $('.gnb-depth2-link').eq(3).addClass('on');

    } else if(depth2 == 'sub1-5'){

      $('.gnb-depth2-link').eq(4).addClass('on');

    }

    else if(depth2 == 'sub2') {

      $('.gnb-depth2-link').eq(5).addClass('on');

    }

    else if(depth2 == 'sub3-1'){

      $('.gnb-depth2-link').eq(6).addClass('on');

    } else if(depth2 == 'sub3-2'){

      $('.gnb-depth2-link').eq(7).addClass('on');

    } else if(depth2 == 'sub3-3') {

      $('.gnb-depth2-link').eq(8).addClass('on');

    }
  }


  //실행부

  //로딩시 현재 페이지 체크
  checkDepth1();
  checkDepth2();


  $('.gnb-depth1-link').on('mouseenter', function(){

    $('.gnb-depth2-wrap').removeClass('on');
    $(this).next('.gnb-depth2-wrap').addClass('on');

  });

  $('.gnb').on('mouseleave', function(){

    $('.gnb-depth2-wrap').removeClass('on');

    checkDepth1();

  });

  $('.gnb-depth2-wrap').on('mouseenter', function(){
    $(this).addClass('on');
  });

  $('.gnb-depth2-link').on('click', function(){


    $(this).parents('.gnb-depth2-wrap').addClass('on');

  });





});
/**
 * Created by Administrator on 2017-08-28.
 */
$(function(){

    $('.content-title-wrap-text1').addClass('on');

    setTimeout(function(){
      $('.content-title-wrap-text2').addClass('on');
    }, 300);

    setTimeout(function(){
      $('.content-title-wrap-text3').addClass('on');
    }, 600);

    setTimeout(function(){
      $('.content-title-wrap-text4').addClass('on');
    }, 900);

    setTimeout(function(){
      $('.content-title-wrap-text5').addClass('on');
    }, 1200);

    setTimeout(function(){
      $('.content-title-wrap-text6').addClass('on');
    }, 1500);
    setTimeout(function(){
      $('.content-title-wrap-text7').addClass('on');
    }, 1800);
    setTimeout(function(){
      $('.content-title-wrap-text8').addClass('on');
    }, 2100);
    setTimeout(function(){
      $('.content-title-wrap-text9').addClass('on');
    }, 2400);

    setTimeout(function(){
      $('.content-title-wrap-text10').addClass('on');
    }, 2700);

    setTimeout(function(){
      $('.content-title-wrap-text11').addClass('on');
    }, 3000);

});
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
  //선언부

  $('.photo-list-item-link').on('click', function(e){
    e.preventDefault();
    $(this).next('.popup-wrap').stop().fadeIn(300);
    $('.photo-list-button').addClass('on');
    $('.radio-box').addClass('on');

    });

  $('.close-button').on('click',function(){
    $(this).parent('.popup-wrap').stop().fadeOut(300);
    $('.photo-list-button').removeClass('on');
    $('.radio-box').removeClass('on');
  });




  function init(){
    $('.photo-list').eq(0).css({left : 0});
    $('.photo-list').eq(1).css({left : 850});
    $('.photo-list').eq(2).css({left : -850});


    //radio-box 의 순서대로 photo-list 페이지도 바뀜
    $('.radio-box-list').eq(0).children().addClass('on')
  }

  var currentIndex = 0;
  var nextIndex = 0;

  function moveLeft(){
    if(nextIndex >= $('.photo-list').length){
      nextIndex = 0;
    }

    $('.photo-list').eq(currentIndex).stop().animate({left:-850}, 2000, 'easeOutExpo');
    $('.photo-list').eq(nextIndex).css({left:850}).stop().animate({left:0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;

    nextIndex++;

    //다음 버튼의 색깔이 바뀜
    $('.radio-box-list').children().removeClass('on');
    $('.radio-box-list').eq(currentIndex).children().addClass('on');

  }

  function moveRight(){

    if(nextIndex <= -1) {
      nextIndex = $('.photo-list').length-1;
    }

    $('.photo-list').eq(currentIndex).stop().animate({left : 850}, 2000, 'easeOutExpo');
    $('.photo-list').eq(nextIndex).css({left : -850}).stop().animate({left : 0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;
    nextIndex--;

    // 다음 버튼의 색깔이 바뀜
    $('.radio-box-list').children().removeClass('on');
    $('.radio-box-list').eq(currentIndex).children().addClass('on');
  }




  // 실행부
  init();

  $('.photo-list-button-right').on('click',function(){
    nextIndex = currentIndex + 1;
    if( !$('.photo-list').is(':animated')){
      moveLeft();
    }
  });

  $('.photo-list-button-left').on('click',function(){
    nextIndex = currentIndex - 1;
    if( !$('.photo-list').is(':animated')){
      moveRight();
    }
  });


  //indicator index
  $('.indicator a').click(function(){
    var paging = $(this).index();
    $('.photo-list').animate({left : 850}, 2000, 'easeOutExpo');
    $('.indicator a').removeClass('on');
    $('.indicator a').eq(paging).addClass('on');

  })

});

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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzJfMS5qcyIsIl9qc3JfMl8yXzIuanMiLCJfanNyXzNfMS5qcyIsIl9qc3JfM18xXzEuanMiLCJfanNyXzNfMV8yLmpzIiwiX2pzcl80XzEuanMiLCJfanNyXzRfMl8xLmpzIiwiX2pzcl80XzMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogZ25iIGpRdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gY2hlY2tEZXB0aDEoKXtcclxuXHJcbiAgICBpZiAoZGVwdGgxID09ICdzdWIxJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMS1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgxID09ICdzdWIyJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMS1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5lcSgxKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgxID09ICdzdWIzJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMS1saW5rJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5lcSgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0RlcHRoMigpe1xyXG4gICAgaWYoZGVwdGgyID09ICdzdWIxLTEnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIxLTInKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSgxKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIxLTMnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSgyKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIxLTQnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSgzKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIxLTUnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSg0KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjInKSB7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoZGVwdGgyID09ICdzdWIzLTEnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSg2KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIzLTInKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSg3KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIzLTMnKSB7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoOCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8v7Iuk7ZaJ67aAXHJcblxyXG4gIC8v66Gc65Sp7IucIO2YhOyerCDtjpjsnbTsp4Ag7LK07YGsXHJcbiAgY2hlY2tEZXB0aDEoKTtcclxuICBjaGVja0RlcHRoMigpO1xyXG5cclxuXHJcbiAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmInKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmduYi1kZXB0aDItd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICAgIGNoZWNrRGVwdGgxKCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi13cmFwJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDItbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICQodGhpcykucGFyZW50cygnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjguXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDMnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDYwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ0JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCA5MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTIwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ2JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAxNTAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NycpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTgwMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDgnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDIxMDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ5JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyNDAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDEwJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyNzAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDExJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xNy5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOydtOuvuOyngCDtgbTrpq3si5xcclxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XHJcbiAgICAkaW1hZ2VUb3A6ICQoJy5zbGlkZS13cmFwJyksXHJcbiAgICAkaW1hZ2VCaWc6ICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJyksXHJcbiAgICAkaW1hZ2VUaHVtYjogJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKSxcclxuXHJcbiAgICBhcmVhVmFsdWUgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XHJcbiAgICAgIHRoaXMuYXJlYVJhdGlvID0gdGhpcy5hcmVhV2lkdGggLyB0aGlzLmFyZWFIZWlnaHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGltYWdlVmFsdWUgOiBmdW5jdGlvbiAoJGltYWdlKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IHBhcnNlSW50KCRpbWFnZS5jc3MoJ3dpZHRoJykpO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQoJGltYWdlLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmltYWdlUmF0aW8gPSB0aGlzLmltYWdlV2lkdGggLyB0aGlzLmltYWdlSGVpZ2h0O1xyXG4gICAgfSxcclxuXHJcbiAgICBhcHBseUJpZyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlQmlnKTtcclxuICAgICAgaWYgKHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvKSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZVRodW1iLmVxKGkpKTtcclxuICAgICAgICBpZiAodGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8pIHtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJCgnLnNsaWRlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuICAkKCcuc2xpZGUnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCgnLnNsaWRlLWxpc3QtaXRlbScpLmVxKDApICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gICQoJy5zbGlkZS1hcnJvdy1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbi8vICBmdW5jdGlvbiBpbml0KCl7XHJcbi8vICAgICQoJy5zbGlkZS1saXN0LWltYWdlJykuZXEoMCkuY3NzKHtsZWZ0IDogMH0pO1xyXG4vLyAgICAkKCcuc2xpZGUtbGlzdC1pbWFnZScpLmVxKDEpLmNzcyh7bGVmdCA6IDQwMH0pO1xyXG4vLyAgICAkKCcuc2xpZGUtbGlzdC1pbWFnZScpLmVxKDIpLmNzcyh7bGVmdCA6IC00MDB9KTtcclxuLy8gICAgJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKS5lcSgzKS5jc3Moe2xlZnQgOiA4MDB9KTtcclxuLy8gICAgJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKS5lcSg0KS5jc3Moe2xlZnQgOiAtODAwfSk7XHJcbi8vICAgIG1hcmdpbkN0cmxXcmFwKCk7XHJcbi8vICAgIHBhZ2luZygpO1xyXG4vLyAgfVxyXG4vL1xyXG4vLyAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbi8vICB2YXIgbmV4dEluZGV4ID0gMDtcclxuLy9cclxuLy8gIHZhciB0aW1lSUQ7XHJcbi8vICB2YXIgY2hlY2tJRDtcclxuLy8gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbi8vXHJcbi8vICAgIGlmKG5leHRJbmRleCA+PSAkKCcuc2xpZGUtbGlzdC1pbWFnZScpLmxlbmd0aCl7XHJcbi8vICAgICAgbmV4dEluZGV4ID0gMDtcclxuLy8gICAgfVxyXG4vL1xyXG4vL1xyXG4vLyAgICAkKCcuc2xpZGUtbGlzdC1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTQwMH0sIDEwMDApO1xyXG4vL1xyXG4vLyAgICAkKCcuc2xpZGUtbGlzdC1pbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0OjQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAxMDAwKTtcclxuLy9cclxuLy8gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4vL1xyXG4vLyAgICBuZXh0SW5kZXgrKztcclxuLy8gIH1cclxuLy9cclxuLy8gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG4vL1xyXG4vLyAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4vLyAgICAgIG5leHRJbmRleCA9ICQoJy5zbGlkZS1saXN0LWltYWdlJykubGVuZ3RoLTE7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjQwMH0sIDEwMDApO1xyXG4vL1xyXG4vLyAgICAkKCcuc2xpZGUtbGlzdC1pbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0Oi00MDB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMTAwMCk7XHJcbi8vXHJcbi8vICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuLy9cclxuLy8gICAgbmV4dEluZGV4LS07XHJcbi8vICB9XHJcbi8vXHJcbi8vLy9cclxuLy9cclxuLy8gIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcbi8vICAgIHZhciB3cmFwV2lkdGggPSAkKCcuY29udHJvbC13cmFwJykud2lkdGgoKTtcclxuLy8gICAgJCgnLmNvbnRyb2wtd3JhcCcpLmNzcyh7XHJcbi8vICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0oIHdyYXBXaWR0aCAvIDIgKVxyXG4vLyAgICB9KTtcclxuLy8gIH1cclxuLy9cclxuLy8gIGZ1bmN0aW9uIHBhZ2luZygpe1xyXG4vLyAgICB2YXIgaW1nTnVtYmVyID0gJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKS5sZW5ndGg7IC8vIHNpemUoKSDqsJzsiJgg6rWs7ZWY64qUIO2VqOyImFxyXG4vLyAgICBmb3IodmFyIGk9MDsgaTxpbWdOdW1iZXI7IGkrKyl7XHJcbi8vICAgICAgJCgnLnBhZ2luZycpLmFwcGVuZCgnPGxpIGNsYXNzPVwicGFnaW5nLWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwicGFnaW5nLWxpbmtcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcbi8vICAgIH1cclxuLy8gIH1cclxuLy8gIGZ1bmN0aW9uIGNsaWNrUGFnaW5nKCl7XHJcbi8vICB9XHJcbi8vXHJcbi8vXHJcbi8vICBpbml0KCk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAkKCcuc2xpZGUtYXJyb3ctcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgICBjbGVhckludGVydmFsKCB0aW1lSUQgKTtcclxuLy8gICAgY2xlYXJJbnRlcnZhbCggY2hlY2tJRCApO1xyXG4vLyAgICB2YXIgY291bnQgPSAwO1xyXG4vLyAgICBjaGVja0lEID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuLy8gICAgICBpZihjb3VudCA9PSA1KXtcclxuLy8gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbi8vICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbi8vICAgICAgY291bnQrKztcclxuLy8gICAgfSwgMTAwMCk7XHJcbi8vICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbi8vICAgIGlmKCAhJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuLy8gICAgICBtb3ZlTGVmdCgpO1xyXG4vLyAgICB9XHJcbi8vICB9KTtcclxuLy9cclxuLy8gICQoJy5zbGlkZS1hcnJvdy1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuLy8gICAgY2xlYXJJbnRlcnZhbCggdGltZUlEICk7XHJcbi8vICAgIGNsZWFySW50ZXJ2YWwoIGNoZWNrSUQgKTtcclxuLy8gICAgdmFyIGNvdW50ID0gMDtcclxuLy8gICAgY2hlY2tJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgaWYoY291bnQgPT0gNSl7XHJcbi8vICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4vLyAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lEKTtcclxuLy8gICAgICB9XHJcbi8vICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4vLyAgICAgIGNvdW50Kys7XHJcbi8vICAgIH0sIDEwMDApO1xyXG4vLyAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4vLyAgICBpZiggISQoJy5zbGlkZS1saXN0LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbi8vICAgICAgbW92ZVJpZ2h0KCk7XHJcbi8vICAgIH1cclxuLy8gIH0pO1xyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTExLlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5ndWlkZS1ib3gnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmd1aWRlLWJveC1oZWFkaW5nJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ3VpZGUtYm94Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5ndWlkZS1ib3gtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciByb3V0ZT0gW1xyXG4gICAgICAn7J247IKs64+ZLeyMiOyngOq4uC3rlqHrsJXrrLzqtIAt7KKF66yYLeu5hOybkC3ssL3qsr3qtoEnLFxyXG4gICAgICAn6rK967O16raBLeq1reumveuvvOyGjeuwleusvOq0gC3sgrzssq3rj5nquLgt7LC9642V6raBJyxcclxuICAgICAgJ0REUC3rj5nrjIDrrLgt6rSR7J6l7Iuc7J6lLeyiheusmCcsXHJcbiAgICAgICfrjIDtlZnroZwt66eI66Gc64uI7JeQ6rO17JuQLeuCmeyCsOqzteybkC3snbTtmZTrsr3tmZTrp4jsnYQt7LC96rK96raBJyxcclxuICAgICAgJ+yyreqzhOyynCbssq3qs4TqtJHsnqUt6rWt66a97ZiE64yA66+47Iig6rSAKE1NQ0EpLeu2gey0jO2VnOyYpeuniOydhC3qsr3rs7XqtoEnXHJcbiAgXTtcclxuICB2YXIgdGltZURpc3RhbmNlID0gW1xyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMzXrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjE3a20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMzDrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjAza20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMjXrtoQgLCDsnbTrj5nqsbDrpqwgOiAxLjkxa20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMjXrtoQgLCDsnbTrj5nqsbDrpqwgOiAxLjgya20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogNDDrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjIza20nXHJcbiAgXTtcclxuXHJcblxyXG4gICQoJy5jb3Vyc2UtbGlzdC1pdGVtPmlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGh0bWxOb2RlID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgnLmNvdXJzZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBodG1sTm9kZSArPSAnPGRpdiBjbGFzcz1cImNvdXJzZS13cmFwXCI+JztcclxuICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cInJvdXRlXCI+JyArIHJvdXRlW2luZGV4TnVtYmVyXSArICc8L3A+JztcclxuICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cInRpbWUtZGlzdGFuY2VcIj4nICsgdGltZURpc3RhbmNlW2luZGV4TnVtYmVyXSArICc8L3A+JztcclxuICAgIGh0bWxOb2RlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuaHRtbChodG1sTm9kZSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8g7JWE656r7KSEIOuqqOyFmOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAkKCcuY291cnNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUxJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLy8g7Jm87Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICAgJCgnLmNvdXJzZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAvLyDsmKTrpbjsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMC417LSIXHJcbiAgICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8g7JyX7KSEIOuqqOyFmFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgNjAwKTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA5LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHN0YXJ0ID0gdHJ1ZTtcclxuXHJcbiAgJCgnLnBsYWNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHBsYWNlID0gW1xyXG4gICAgICAn6rK967O16raBJywgJ+q0keyepeyLnOyepScsICfrgpnsgrDqs7Xsm5AnICwn64yA66a866+47Iig6rSAJywgJ+uPmeuMgOusuCcsXHJcbiAgICAgICfrtoHstIztlZzsmKXrp4jsnYQnLCAn7IK87LKt6rO17JuQJywgJ+yMiOyngOq4uCcsICfsooXrrJgnLCAn7LC96rK96raBJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgaHRtbE5vZGUgPSAnJztcclxuICAgIHZhciBjaG9pY2VQbGFjZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5wbGFjZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBjaG9pY2VQbGFjZSArPSBwbGFjZVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgaWYoIHN0YXJ0ICl7XHJcblxyXG4gICAgICBodG1sTm9kZSArPSAnPGRpdiBjbGFzcz1cInBsYWNlLXdyYXBcIj4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJjaG9pY2UtcGxhY2VcIj4nICsgY2hvaWNlUGxhY2UgKyAnPC9wPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG4gICAgICBzdGFydCA9IGZhbHNlO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJjaG9pY2UtcGxhY2VcIj4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnLSAgJyArIGNob2ljZVBsYWNlICsgJzwvcD4nO1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCAucGxhY2Utd3JhcCcpLmFwcGVuZChodG1sTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucGxhY2UtcmVsb2FkLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBsYWNlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLnBsYWNlLXJlbG9hZC1idG4nKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAvLyDslYTrnqvspIQg66qo7IWY7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICQoJy5wbGFjZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIOyZvOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAgICQoJy5wbGFjZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAvLyDsmKTrpbjsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMC417LSIXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyDsnJfspIQg66qo7IWYXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcudGlwLWxpc3QtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuICAgICQoJy50aXAtbGlzdC1kZXRhaWwnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkbGlzdExpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNmZmNkMTJcIik7XHJcblxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy50aXAtbGlzdC1saW5rJykuZGF0YSgnb3BlbicgLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLCBcIiNkZGRcIik7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZGRkXCIpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy50aXAtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xOC5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIC8v7ISg7Ja467aAXHJcblxyXG4gICQoJy5waG90by1saXN0LWl0ZW0tbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCcucG9wdXAtd3JhcCcpLnN0b3AoKS5mYWRlSW4oMzAwKTtcclxuICAgICQoJy5waG90by1saXN0LWJ1dHRvbicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCgnLnJhZGlvLWJveCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAkKCcuY2xvc2UtYnV0dG9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoJy5wb3B1cC13cmFwJykuc3RvcCgpLmZhZGVPdXQoMzAwKTtcclxuICAgICQoJy5waG90by1saXN0LWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLnJhZGlvLWJveCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKDApLmNzcyh7bGVmdCA6IDB9KTtcclxuICAgICQoJy5waG90by1saXN0JykuZXEoMSkuY3NzKHtsZWZ0IDogODUwfSk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKDIpLmNzcyh7bGVmdCA6IC04NTB9KTtcclxuXHJcblxyXG4gICAgLy9yYWRpby1ib3gg7J2YIOyInOyEnOuMgOuhnCBwaG90by1saXN0IO2OmOydtOyngOuPhCDrsJTrgJxcclxuICAgICQoJy5yYWRpby1ib3gtbGlzdCcpLmVxKDApLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJylcclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5waG90by1saXN0JykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDo4NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG5cclxuICAgIG5leHRJbmRleCsrO1xyXG5cclxuICAgIC8v64uk7J2MIOuyhO2KvOydmCDsg4nquZTsnbQg67CU64CcXHJcbiAgICAkKCcucmFkaW8tYm94LWxpc3QnKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLnJhZGlvLWJveC1saXN0JykuZXEoY3VycmVudEluZGV4KS5jaGlsZHJlbigpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSkge1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcucGhvdG8tbGlzdCcpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5waG90by1saXN0JykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdCA6IC04NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuXHJcbiAgICAvLyDri6TsnYwg67KE7Yq87J2YIOyDieq5lOydtCDrsJTrgJxcclxuICAgICQoJy5yYWRpby1ib3gtbGlzdCcpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcucmFkaW8tYm94LWxpc3QnKS5lcShjdXJyZW50SW5kZXgpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5waG90by1saXN0LWJ1dHRvbi1yaWdodCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBpZiggISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpKXtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLnBob3RvLWxpc3QtYnV0dG9uLWxlZnQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgaWYoICEkKCcucGhvdG8tbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbiAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy9pbmRpY2F0b3IgaW5kZXhcclxuICAkKCcuaW5kaWNhdG9yIGEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgdmFyIHBhZ2luZyA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICQoJy5waG90by1saXN0JykuYW5pbWF0ZSh7bGVmdCA6IDg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLmluZGljYXRvciBhJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcuaW5kaWNhdG9yIGEnKS5lcShwYWdpbmcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KVxyXG5cclxufSk7IiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5mYXEtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLmZhcS1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsIFwiI2RkZFwiKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuXHJcbiAgJCgnLmZhcS1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoJCh0aGlzKSk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
