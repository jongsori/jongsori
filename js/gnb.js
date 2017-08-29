
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

  $('.slide-list-item').on('click', function(){
    calculateRatio.changeImage( $(this) );
    calculateRatio.applyBig();
  });
  $('.slide').on('mouseleave', function(){
    calculateRatio.changeImage( $('.slide-list-item').eq(0) );
    calculateRatio.applyBig();
  });

  $(function(){


  });

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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzJfMS5qcyIsIl9qc3JfMl8yXzIuanMiLCJfanNyXzNfMS5qcyIsIl9qc3JfM18xXzEuanMiLCJfanNyXzNfMV8yLmpzIiwiX2pzcl80XzEuanMiLCJfanNyXzRfMl8xLmpzIiwiX2pzcl80XzMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIGduYiBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGNoZWNrRGVwdGgxKCl7XHJcblxyXG4gICAgaWYgKGRlcHRoMSA9PSAnc3ViMScpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMSA9PSAnc3ViMicpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMSA9PSAnc3ViMycpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tEZXB0aDIoKXtcclxuICAgIGlmKGRlcHRoMiA9PSAnc3ViMS0xJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS0yJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS0zJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS00Jyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS01Jyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoZGVwdGgyID09ICdzdWIyJykge1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDUpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0xJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0yJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0zJykge1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvL+yLpO2Wieu2gFxyXG5cclxuICAvL+uhnOuUqeyLnCDtmITsnqwg7Y6Y7J207KeAIOyytO2BrFxyXG4gIGNoZWNrRGVwdGgxKCk7XHJcbiAgY2hlY2tEZXB0aDIoKTtcclxuXHJcblxyXG4gICQoJy5nbmItZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmduYi1kZXB0aDItd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICBjaGVja0RlcHRoMSgpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDItd3JhcCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgyLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTI4LlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDEnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDInKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQzJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCA2MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgOTAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDEyMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDcnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDE4MDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ4JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyMTAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0OScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMjQwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQxMCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMjcwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQxMScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTcuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDrp4jsmrDsiqQg7Jik67KE7IucXHJcbiAgdmFyIGNhbGN1bGF0ZVJhdGlvID0ge1xyXG4gICAgJGltYWdlVG9wOiAkKCcuc2xpZGUtd3JhcCcpLFxyXG4gICAgJGltYWdlQmlnOiAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLFxyXG4gICAgJGltYWdlVGh1bWI6ICQoJy5zbGlkZS1saXN0LWltYWdlJyksXHJcblxyXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmFyZWFXaWR0aCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnd2lkdGgnKSk7XHJcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmFyZWFSYXRpbyA9IHRoaXMuYXJlYVdpZHRoIC8gdGhpcy5hcmVhSGVpZ2h0O1xyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24gKCRpbWFnZSkge1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCgkaW1hZ2UuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCRpbWFnZS5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgdGhpcy5pbWFnZVJhdGlvID0gdGhpcy5pbWFnZVdpZHRoIC8gdGhpcy5pbWFnZUhlaWdodDtcclxuICAgIH0sXHJcblxyXG4gICAgYXBwbHlCaWcgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XHJcbiAgICAgIGlmICh0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbykge1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtd2lkdGgnKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuJGltYWdlVGh1bWIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvKSB7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcbiAgJCgnLnNsaWRlJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5lcSgwKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuXHJcbiAgJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTExLlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5ndWlkZS1ib3gnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmd1aWRlLWJveC1oZWFkaW5nJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ3VpZGUtYm94Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5ndWlkZS1ib3gtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciByb3V0ZT0gW1xyXG4gICAgICAn7J247IKs64+ZLeyMiOyngOq4uC3rlqHrsJXrrLzqtIAt7KKF66yYLeu5hOybkC3ssL3qsr3qtoEnLFxyXG4gICAgICAn6rK967O16raBLeq1reumveuvvOyGjeuwleusvOq0gC3sgrzssq3rj5nquLgt7LC9642V6raBJyxcclxuICAgICAgJ0REUC3rj5nrjIDrrLgt6rSR7J6l7Iuc7J6lLeyiheusmCcsXHJcbiAgICAgICfrjIDtlZnroZwt66eI66Gc64uI7JeQ6rO17JuQLeuCmeyCsOqzteybkC3snbTtmZTrsr3tmZTrp4jsnYQt7LC96rK96raBJyxcclxuICAgICAgJ+yyreqzhOyynCbssq3qs4TqtJHsnqUt6rWt66a97ZiE64yA66+47Iig6rSAKE1NQ0EpLeu2gey0jO2VnOyYpeuniOydhC3qsr3rs7XqtoEnXHJcbiAgXTtcclxuICB2YXIgdGltZURpc3RhbmNlID0gW1xyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMzXrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjE3a20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMzDrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjAza20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMjXrtoQgLCDsnbTrj5nqsbDrpqwgOiAxLjkxa20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMjXrtoQgLCDsnbTrj5nqsbDrpqwgOiAxLjgya20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogNDDrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjIza20nXHJcbiAgXTtcclxuXHJcblxyXG4gICQoJy5jb3Vyc2UtbGlzdC1pdGVtPmlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGh0bWxOb2RlID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgnLmNvdXJzZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBodG1sTm9kZSArPSAnPGRpdiBjbGFzcz1cImNvdXJzZS13cmFwXCI+JztcclxuICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cInJvdXRlXCI+JyArIHJvdXRlW2luZGV4TnVtYmVyXSArICc8L3A+JztcclxuICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cInRpbWUtZGlzdGFuY2VcIj4nICsgdGltZURpc3RhbmNlW2luZGV4TnVtYmVyXSArICc8L3A+JztcclxuICAgIGh0bWxOb2RlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuaHRtbChodG1sTm9kZSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8g7JWE656r7KSEIOuqqOyFmOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAkKCcuY291cnNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUxJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLy8g7Jm87Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICAgJCgnLmNvdXJzZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAvLyDsmKTrpbjsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMC417LSIXHJcbiAgICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8g7JyX7KSEIOuqqOyFmFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgNjAwKTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA5LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHN0YXJ0ID0gdHJ1ZTtcclxuXHJcbiAgJCgnLnBsYWNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHBsYWNlID0gW1xyXG4gICAgICAn6rK967O16raBJywgJ+q0keyepeyLnOyepScsICfrgpnsgrDqs7Xsm5AnICwn64yA66a866+47Iig6rSAJywgJ+uPmeuMgOusuCcsXHJcbiAgICAgICfrtoHstIztlZzsmKXrp4jsnYQnLCAn7IK87LKt6rO17JuQJywgJ+yMiOyngOq4uCcsICfsooXrrJgnLCAn7LC96rK96raBJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgaHRtbE5vZGUgPSAnJztcclxuICAgIHZhciBjaG9pY2VQbGFjZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5wbGFjZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBjaG9pY2VQbGFjZSArPSBwbGFjZVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgaWYoIHN0YXJ0ICl7XHJcblxyXG4gICAgICBodG1sTm9kZSArPSAnPGRpdiBjbGFzcz1cInBsYWNlLXdyYXBcIj4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJjaG9pY2UtcGxhY2VcIj4nICsgY2hvaWNlUGxhY2UgKyAnPC9wPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG4gICAgICBzdGFydCA9IGZhbHNlO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJjaG9pY2UtcGxhY2VcIj4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnLSAgJyArIGNob2ljZVBsYWNlICsgJzwvcD4nO1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCAucGxhY2Utd3JhcCcpLmFwcGVuZChodG1sTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucGxhY2UtcmVsb2FkLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBsYWNlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLnBsYWNlLXJlbG9hZC1idG4nKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAvLyDslYTrnqvspIQg66qo7IWY7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICQoJy5wbGFjZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIOyZvOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAgICQoJy5wbGFjZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAvLyDsmKTrpbjsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMC417LSIXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyDsnJfspIQg66qo7IWYXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcudGlwLWxpc3QtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuICAgICQoJy50aXAtbGlzdC1kZXRhaWwnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkbGlzdExpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNmZmNkMTJcIik7XHJcblxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy50aXAtbGlzdC1saW5rJykuZGF0YSgnb3BlbicgLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLCBcIiNkZGRcIik7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZGRkXCIpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy50aXAtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xOC5cclxuICovXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpIHtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICQoJy5waG90by1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogMTA1MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcblxyXG5cclxuICAgICQoJy5waG90by1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdCA6IC0xMDUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQgOiAwfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG5cclxuICAgIG5leHRJbmRleC0tO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8kKCcucGhvdG8tbGlzdC1pdGVtJykuZGF0YSgnb3BlbicsJ2ZhbHNlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gIC8vICBpZigkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKXtcclxuICAvLyAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgLy8gICAgJCh0aGlzKS5kYXRhKCdvcGVuJywndHJ1ZScpO1xyXG4gIC8vICB9ZWxzZXtcclxuICAvLyAgICAkKHRoaXMpLm5leHQoKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgLy8gICAgJCh0aGlzKS5kYXRhKCdvcGVuJywnZmFsc2UnKTtcclxuICAvLyAgfVxyXG4gIC8vXHJcbiAgLy99KTtcclxuXHJcblxyXG4vL1xyXG4vL1xyXG4vLyAgZnVuY3Rpb24gYXV0b1JvbGxpbmcoKXsvLyDsnpDrj5kg66Gk66eBXHJcbi8vXHJcbi8vICAgIHRpbWVJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuLy8gICAgICBtb3ZlTGVmdCgpO1xyXG4vLyAgICB9LCAzMDAwKTtcclxuLy9cclxuLy8gIH1cclxuLy9cclxuLy9cclxuLy9cclxuLy9cclxuLy8gIGZ1bmN0aW9uIG1hcmdpbkNvbnRyb2xXcmFwKCl7XHJcbi8vICAgIHZhciB3cmFwV2lkdGggPSAkKCcucGhvdG8gLnJhZGlvLWJveCcpLndpZHRoKCk7XHJcbi8vICAgICQoJy5waG90byAucmFkaW8tYm94JykuY3NzKHtcclxuLy8gICAgICAnbWFyZ2luLWxlZnQnIDogLSh3cmFwV2lkdGgvMilcclxuLy8gICAgfSk7XHJcbi8vICB9XHJcbi8vXHJcbi8vICAvLyDsnbTrr7jsp4Ag6rCc7IiYIOunjO2BvFxyXG4vLyAgLy9mdW5jdGlvbiBwYWdpbmcoKXtcclxuLy8gIC8vICB2YXIgaW1nTnVtYmVyID0gJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5sZW5ndGg7ICAgLy8gc2l6ZSgpIDog6rCc7IiYIOq1rO2VmOuKlCDtlajsiJhcclxuLy8gIC8vICBmb3IodmFyIGk9MDsgaTxpbWdOdW1iZXI7IGkrKyl7ICAgIC8vIOydtOuvuOyngCDqsJzsiJgg66eM7YG8IOuwmOuzte2VoCBmb3JcclxuLy8gIC8vICAgICQoJy5qcy1zbGlkaW5nIC5wYWdpbmcnKS5hcHBlbmQoJzxsaSBjbGFzcz1cInBhZ2luZy1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInBhZ2luZy1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG4vLyAgLy8gIH1cclxuLy8gIC8vfVxyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG59KTtcclxuXHJcbi8vXHJcbi8vXHJcbi8vICAvLyDsi6TtlonrtoBcclxuLy8gIGluaXQoKTtcclxuLy9cclxuLy9cclxuLy8gICQoJy5hcnJvdy5yaWdodCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gICAgY2xlYXJJbnRlcnZhbChjaGVja0lkKTtcclxuLy8gICAgY2xlYXJJbnRlcnZhbCh0aW1lSWQpO1xyXG4vL1xyXG4vLyAgICB2YXIgIGNvdW50ID0gMDtcclxuLy8gICAgY2hlY2tJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgaWYoY291bnQgPT0gNSl7XHJcbi8vICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4vLyAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0lkKTtcclxuLy8gICAgICB9XHJcbi8vICAgICAgY291bnQrKztcclxuLy8gICAgfSwxMDAwKTtcclxuLy8gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuLy8gICAgaWYoICEkKCcucGhvdG8tbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpKXtcclxuLy8gICAgICBtb3ZlTGVmdCgpO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICB9KTtcclxuLy9cclxuLy9cclxuLy8gICQoJy5hcnJvdy5sZWZ0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgICBjbGVhckludGVydmFsKGNoZWNrSWQpO1xyXG4vLyAgICBjbGVhckludGVydmFsKHRpbWVJZCk7XHJcbi8vXHJcbi8vICAgIHZhciAgY291bnQgPSAwO1xyXG4vLyAgICBjaGVja0lkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuLy8gICAgICBpZihjb3VudCA9PSA1KXtcclxuLy8gICAgICAgIGF1dG9Sb2xsaW5nKCk7XHJcbi8vICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSWQpO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICBjb3VudCsrO1xyXG4vLyAgICB9LDEwMDApO1xyXG4vLyAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLTE7XHJcbi8vXHJcbi8vICAgIGlmKCAhJCgnLnBob3RvLWxpc3QtaXRlbScpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbi8vICAgICAgbW92ZVJpZ2h0KCk7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gIH0pO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL30pOyIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcuZmFxLWxpc3QtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuICAgICQoJy5mYXEtbGlzdC1kZXRhaWwnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkbGlzdExpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNmZmNkMTJcIik7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmZhcS1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLCBcIiNkZGRcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZGRkXCIpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGluaXQoKTtcclxuXHJcblxyXG4gICQoJy5mYXEtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCQodGhpcykpO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuIl19
