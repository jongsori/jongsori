
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
 * Created by Administrator on 2017-09-07.
 */

//jQuery(document).ready(function($) {
//  $.ajax({
//     //결과를 한글로 받을 수 있다.
//    url : "http://api.wunderground.com/api/d9f45faf33cb9139/geolookup/conditions/lang:KR/q/Korea/Seoul.json",
//    dataType : "jsonp",
//    success : function(parsed_json) {
//      // 관측지에 대한 정보
//      var observ = parsed_json.current_observation;
//      //var observ_s = observ.display_location.full;
//      // 날씨정보
//      var weather_s = "<p class="+"weather-icon"+">"+"<img src='"+observ.icon_url+"'/></p>";
//      weather_s += "<div class="+"weather-wrap"+">";
//      weather_s += "<p class="+"weather-text"+">"+observ.weather+"</p>";
//      weather_s += "<p class="+"weather-temp"+">"+observ.temp_c+" ℃ </p>";
//      weather_s += "</div>";
//      $("#weatherinfo").append(weather_s);
//    }
//  });
//});
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
 * Created by Administrator on 2017-09-05.
 */

$(function(){

  var deltaDegree = 0;

  $('.arrow-left').on('click', function(){

    deltaDegree += 60;

    $('.content-list').css({
      transform : 'translateZ(-288px) rotateX(-10deg) rotateY(' + deltaDegree + 'deg )'
      // 함수에 변수 넣는 방법 ex ) rotateY(' + deltaDegree + ')
    });
  });

  $('.arrow-right').on('click', function(){

    deltaDegree -= 60;

    $('.content-list').css({
      transform : 'translateZ(-288px) rotateX(-10deg) rotateY(' + deltaDegree + 'deg)'
    });
  });

});
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

        if( radioIndex == $('.slide-list-item').length-1 ){
          if( !$('.slide-wrap-bigimage').is(':animated') ){
          //nextIndex = currentIndex - 1;
            moveRight();
          }
        } else {
          if( !$('.slide-wrap-bigimage').is(':animated') ){
          //nextIndex = currentIndex + 1;
            moveLeft();
          }
        }

      } else if( currentIndex == $('.slide-list-item').length-1 ){

        if( radioIndex == 0 ){
          if( !$('.slide-wrap-bigimage').is(':animated') ){
          //nextIndex = currentIndex + 1;
            moveLeft();
          }
        } else {
          if( !$('.slide-wrap-bigimage').is(':animated') ){
          //nextIndex = currentIndex - 1;
            moveRight();
          }
        }

      } else {

        if( currentIndex < radioIndex ){
          if( !$('.slide-wrap-bigimage').is(':animated') ){
          //nextIndex = currentIndex + 1;
            moveLeft();
          }
        } else {
          if( !$('.slide-wrap-bigimage').is(':animated') ){
          //nextIndex = currentIndex - 1;
            moveRight();
          }
        }

      }

    }

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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzAuanMiLCJfanNyXzEuanMiLCJfanNyXzJfMS5qcyIsIl9qc3JfMl8yXzEuanMiLCJfanNyXzJfMl8yLmpzIiwiX2pzcl8zXzEuanMiLCJfanNyXzNfMV8xLmpzIiwiX2pzcl8zXzFfMi5qcyIsIl9qc3JfNF8xLmpzIiwiX2pzcl80XzJfMS5qcyIsIl9qc3JfNF8zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIGduYiBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGNoZWNrRGVwdGgxKCl7XHJcblxyXG4gICAgaWYgKGRlcHRoMSA9PSAnc3ViMScpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMSA9PSAnc3ViMicpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMSA9PSAnc3ViMycpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tEZXB0aDIoKXtcclxuICAgIGlmKGRlcHRoMiA9PSAnc3ViMS0xJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS0yJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS0zJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS00Jyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS01Jyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoZGVwdGgyID09ICdzdWIyJykge1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDUpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0xJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0yJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0zJykge1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvL+yLpO2Wieu2gFxyXG5cclxuICAvL+uhnOuUqeyLnCDtmITsnqwg7Y6Y7J207KeAIOyytO2BrFxyXG4gIGNoZWNrRGVwdGgxKCk7XHJcbiAgY2hlY2tEZXB0aDIoKTtcclxuXHJcblxyXG5cclxuICAkKCcuZ25iLWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykubmV4dCgnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmduYicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgY2hlY2tEZXB0aDEoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgyLXdyYXAnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOS0wNy5cclxuICovXHJcbiIsIi8valF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcbi8vICAkLmFqYXgoe1xyXG4vLyAgICAgLy/qsrDqs7zrpbwg7ZWc6riA66GcIOuwm+ydhCDsiJgg7J6I64ukLlxyXG4vLyAgICB1cmwgOiBcImh0dHA6Ly9hcGkud3VuZGVyZ3JvdW5kLmNvbS9hcGkvZDlmNDVmYWYzM2NiOTEzOS9nZW9sb29rdXAvY29uZGl0aW9ucy9sYW5nOktSL3EvS29yZWEvU2VvdWwuanNvblwiLFxyXG4vLyAgICBkYXRhVHlwZSA6IFwianNvbnBcIixcclxuLy8gICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHBhcnNlZF9qc29uKSB7XHJcbi8vICAgICAgLy8g6rSA7Lih7KeA7JeQIOuMgO2VnCDsoJXrs7RcclxuLy8gICAgICB2YXIgb2JzZXJ2ID0gcGFyc2VkX2pzb24uY3VycmVudF9vYnNlcnZhdGlvbjtcclxuLy8gICAgICAvL3ZhciBvYnNlcnZfcyA9IG9ic2Vydi5kaXNwbGF5X2xvY2F0aW9uLmZ1bGw7XHJcbi8vICAgICAgLy8g64Kg7JSo7KCV67O0XHJcbi8vICAgICAgdmFyIHdlYXRoZXJfcyA9IFwiPHAgY2xhc3M9XCIrXCJ3ZWF0aGVyLWljb25cIitcIj5cIitcIjxpbWcgc3JjPSdcIitvYnNlcnYuaWNvbl91cmwrXCInLz48L3A+XCI7XHJcbi8vICAgICAgd2VhdGhlcl9zICs9IFwiPGRpdiBjbGFzcz1cIitcIndlYXRoZXItd3JhcFwiK1wiPlwiO1xyXG4vLyAgICAgIHdlYXRoZXJfcyArPSBcIjxwIGNsYXNzPVwiK1wid2VhdGhlci10ZXh0XCIrXCI+XCIrb2JzZXJ2LndlYXRoZXIrXCI8L3A+XCI7XHJcbi8vICAgICAgd2VhdGhlcl9zICs9IFwiPHAgY2xhc3M9XCIrXCJ3ZWF0aGVyLXRlbXBcIitcIj5cIitvYnNlcnYudGVtcF9jK1wiIOKEgyA8L3A+XCI7XHJcbi8vICAgICAgd2VhdGhlcl9zICs9IFwiPC9kaXY+XCI7XHJcbi8vICAgICAgJChcIiN3ZWF0aGVyaW5mb1wiKS5hcHBlbmQod2VhdGhlcl9zKTtcclxuLy8gICAgfVxyXG4vLyAgfSk7XHJcbi8vfSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTI4LlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDEnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDInKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQzJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCA2MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgOTAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDEyMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDcnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDE4MDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ4JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyMTAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0OScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMjQwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQxMCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMjcwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQxMScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDktMDUuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgZGVsdGFEZWdyZWUgPSAwO1xyXG5cclxuICAkKCcuYXJyb3ctbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgZGVsdGFEZWdyZWUgKz0gNjA7XHJcblxyXG4gICAgJCgnLmNvbnRlbnQtbGlzdCcpLmNzcyh7XHJcbiAgICAgIHRyYW5zZm9ybSA6ICd0cmFuc2xhdGVaKC0yODhweCkgcm90YXRlWCgtMTBkZWcpIHJvdGF0ZVkoJyArIGRlbHRhRGVncmVlICsgJ2RlZyApJ1xyXG4gICAgICAvLyDtlajsiJjsl5Ag67OA7IiYIOuEo+uKlCDrsKnrspUgZXggKSByb3RhdGVZKCcgKyBkZWx0YURlZ3JlZSArICcpXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmFycm93LXJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBkZWx0YURlZ3JlZSAtPSA2MDtcclxuXHJcbiAgICAkKCcuY29udGVudC1saXN0JykuY3NzKHtcclxuICAgICAgdHJhbnNmb3JtIDogJ3RyYW5zbGF0ZVooLTI4OHB4KSByb3RhdGVYKC0xMGRlZykgcm90YXRlWSgnICsgZGVsdGFEZWdyZWUgKyAnZGVnKSdcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE3LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcSgwKS5jc3Moe2xlZnQgOiAwfSk7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKDEpLmNzcyh7bGVmdCA6IDg1MH0pO1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcSgyKS5jc3Moe2xlZnQgOiAtODUwfSk7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKDMpLmNzcyh7bGVmdCA6IDg1MH0pO1xyXG5cclxuICAgICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5lcSgwKS5jaGlsZHJlbigpLmFkZENsYXNzKCdvbicpXHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0Oi04NTB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6ODUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuXHJcbiAgICBuZXh0SW5kZXgrKztcclxuXHJcbiAgICBjb25zb2xlLmxvZyggY3VycmVudEluZGV4ICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpIHtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQgOiA4NTB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQgOiAtODUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQgOiAwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4LS07XHJcbiAgfVxyXG5cclxuICAvL+yLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLnNsaWRlLWFycm93LXJpZ2h0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgaWYoICEkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5zbGlkZS1hcnJvdy1sZWZ0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgaWYoICEkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnNsaWRlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHJhZGlvSW5kZXggPSAkKHRoaXMpLmluZGV4KCcuc2xpZGUtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgbmV4dEluZGV4ID0gcmFkaW9JbmRleDtcclxuICAgIC8vXHJcbiAgICAvL2lmICghJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykpIHtcclxuICAgIC8vICBtb3ZlTGVmdCgpO1xyXG4gICAgLy99XHJcblxyXG5cclxuICAgIGlmKCBjdXJyZW50SW5kZXggIT0gcmFkaW9JbmRleCApe1xyXG5cclxuICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcblxyXG4gICAgICAgIGlmKCByYWRpb0luZGV4ID09ICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgaWYoICEkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgLy9uZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYoICEkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgLy9uZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSBpZiggY3VycmVudEluZGV4ID09ICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5sZW5ndGgtMSApe1xyXG5cclxuICAgICAgICBpZiggcmFkaW9JbmRleCA9PSAwICl7XHJcbiAgICAgICAgICBpZiggISQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAvL25leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmKCAhJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgIC8vbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IHJhZGlvSW5kZXggKXtcclxuICAgICAgICAgIGlmKCAhJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgIC8vbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYoICEkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgLy9uZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTExLlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5ndWlkZS1ib3gnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmd1aWRlLWJveC1oZWFkaW5nJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ3VpZGUtYm94Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5ndWlkZS1ib3gtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciByb3V0ZT0gW1xyXG4gICAgICAn7J247IKs64+ZLeyMiOyngOq4uC3rlqHrsJXrrLzqtIAt7KKF66yYLeu5hOybkC3ssL3qsr3qtoEnLFxyXG4gICAgICAn6rK967O16raBLeq1reumveuvvOyGjeuwleusvOq0gC3sgrzssq3rj5nquLgt7LC9642V6raBJyxcclxuICAgICAgJ0REUC3rj5nrjIDrrLgt6rSR7J6l7Iuc7J6lLeyiheusmCcsXHJcbiAgICAgICfrjIDtlZnroZwt66eI66Gc64uI7JeQ6rO17JuQLeuCmeyCsOqzteybkC3snbTtmZTrsr3tmZTrp4jsnYQt7LC96rK96raBJyxcclxuICAgICAgJ+yyreqzhOyynCbssq3qs4TqtJHsnqUt6rWt66a97ZiE64yA66+47Iig6rSAKE1NQ0EpLeu2gey0jO2VnOyYpeuniOydhC3qsr3rs7XqtoEnXHJcbiAgXTtcclxuICB2YXIgdGltZURpc3RhbmNlID0gW1xyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMzXrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjE3a20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMzDrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjAza20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMjXrtoQgLCDsnbTrj5nqsbDrpqwgOiAxLjkxa20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMjXrtoQgLCDsnbTrj5nqsbDrpqwgOiAxLjgya20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogNDDrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjIza20nXHJcbiAgXTtcclxuXHJcblxyXG4gICQoJy5jb3Vyc2UtbGlzdC1pdGVtPmlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGh0bWxOb2RlID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgnLmNvdXJzZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBodG1sTm9kZSArPSAnPGRpdiBjbGFzcz1cImNvdXJzZS13cmFwXCI+JztcclxuICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cInJvdXRlXCI+JyArIHJvdXRlW2luZGV4TnVtYmVyXSArICc8L3A+JztcclxuICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cInRpbWUtZGlzdGFuY2VcIj4nICsgdGltZURpc3RhbmNlW2luZGV4TnVtYmVyXSArICc8L3A+JztcclxuICAgIGh0bWxOb2RlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuaHRtbChodG1sTm9kZSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8g7JWE656r7KSEIOuqqOyFmOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAkKCcuY291cnNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUxJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLy8g7Jm87Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICAgJCgnLmNvdXJzZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAvLyDsmKTrpbjsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMC417LSIXHJcbiAgICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8g7JyX7KSEIOuqqOyFmFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgNjAwKTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA5LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHN0YXJ0ID0gdHJ1ZTtcclxuXHJcbiAgJCgnLnBsYWNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHBsYWNlID0gW1xyXG4gICAgICAn6rK967O16raBJywgJ+q0keyepeyLnOyepScsICfrgpnsgrDqs7Xsm5AnICwn64yA66a866+47Iig6rSAJywgJ+uPmeuMgOusuCcsXHJcbiAgICAgICfrtoHstIztlZzsmKXrp4jsnYQnLCAn7IK87LKt6rO17JuQJywgJ+yMiOyngOq4uCcsICfsooXrrJgnLCAn7LC96rK96raBJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgaHRtbE5vZGUgPSAnJztcclxuICAgIHZhciBjaG9pY2VQbGFjZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5wbGFjZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBjaG9pY2VQbGFjZSArPSBwbGFjZVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgaWYoIHN0YXJ0ICl7XHJcblxyXG4gICAgICBodG1sTm9kZSArPSAnPGRpdiBjbGFzcz1cInBsYWNlLXdyYXBcIj4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJjaG9pY2UtcGxhY2VcIj4nICsgY2hvaWNlUGxhY2UgKyAnPC9wPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG4gICAgICBzdGFydCA9IGZhbHNlO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJjaG9pY2UtcGxhY2VcIj4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnLSAgJyArIGNob2ljZVBsYWNlICsgJzwvcD4nO1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCAucGxhY2Utd3JhcCcpLmFwcGVuZChodG1sTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucGxhY2UtcmVsb2FkLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBsYWNlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLnBsYWNlLXJlbG9hZC1idG4nKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAvLyDslYTrnqvspIQg66qo7IWY7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICQoJy5wbGFjZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIOyZvOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAgICQoJy5wbGFjZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAvLyDsmKTrpbjsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMC417LSIXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyDsnJfspIQg66qo7IWYXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcudGlwLWxpc3QtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuICAgICQoJy50aXAtbGlzdC1kZXRhaWwnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkbGlzdExpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNmZmNkMTJcIik7XHJcblxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy50aXAtbGlzdC1saW5rJykuZGF0YSgnb3BlbicgLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLCBcIiNkZGRcIik7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZGRkXCIpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy50aXAtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xOC5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gIC8vIO2MneyXhSBzaG93ICYgIGhpZGVcclxuICAkKCcucGhvdG8tbGlzdC1pdGVtLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCcucG9wdXAtd3JhcCcpLnN0b3AoKS5mYWRlSW4oMzAwKTtcclxuICAgICQoJy5waG90by1saXN0LWJ1dHRvbicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCgnLnJhZGlvLWJveCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmNsb3NlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucGFyZW50KCcucG9wdXAtd3JhcCcpLnN0b3AoKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAkKCcucGhvdG8tbGlzdC1idXR0b24nKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5yYWRpby1ib3gnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vIOumrOyKpO2KuCDsiqzrnbzsnbTrlKlcclxuXHJcbiAgLy/shKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcSgwKS5jc3Moe2xlZnQ6IDB9KTtcclxuICAgICQoJy5waG90by1saXN0JykuZXEoMSkuY3NzKHtsZWZ0OiA4NTB9KTtcclxuICAgICQoJy5waG90by1saXN0JykuZXEoMikuY3NzKHtsZWZ0OiAtODUwfSk7XHJcblxyXG5cclxuICAgIC8vcmFkaW8tYm94IOydmCDsiJzshJzrjIDroZwgcGhvdG8tbGlzdCDtjpjsnbTsp4Drj4Qg67CU64CcXHJcbiAgICAkKCcucmFkaW8tYm94LWxpc3QnKS5lcSgwKS5jaGlsZHJlbigpLmFkZENsYXNzKCdvbicpXHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKSB7XHJcbiAgICBpZiAobmV4dEluZGV4ID49ICQoJy5waG90by1saXN0JykubGVuZ3RoKSB7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0OiAtODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0OiA4NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDogMH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuXHJcbiAgICBuZXh0SW5kZXgrKztcclxuXHJcbiAgICAvL+uLpOydjCDrsoTtirzsnZgg7IOJ6rmU7J20IOuwlOuAnFxyXG4gICAgJCgnLnJhZGlvLWJveC1saXN0JykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5yYWRpby1ib3gtbGlzdCcpLmVxKGN1cnJlbnRJbmRleCkuY2hpbGRyZW4oKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKSB7XHJcblxyXG4gICAgaWYgKG5leHRJbmRleCA8PSAtMSkge1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcucGhvdG8tbGlzdCcpLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0OiA4NTB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuICAgICQoJy5waG90by1saXN0JykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6IC04NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDogMH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG5cclxuICAgIC8vIOuLpOydjCDrsoTtirzsnZgg7IOJ6rmU7J20IOuwlOuAnFxyXG4gICAgJCgnLnJhZGlvLWJveC1saXN0JykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5yYWRpby1ib3gtbGlzdCcpLmVxKGN1cnJlbnRJbmRleCkuY2hpbGRyZW4oKS5hZGRDbGFzcygnb24nKTtcclxuICB9XHJcblxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5waG90by1saXN0LWJ1dHRvbi1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBpZiAoISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5waG90by1saXN0LWJ1dHRvbi1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIGlmICghJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykpIHtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5yYWRpby1ib3gtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHJhZGlvSW5kZXggPSAkKHRoaXMpLmluZGV4KCcucmFkaW8tYm94LWxpbmsnKTtcclxuXHJcbiAgICBuZXh0SW5kZXggPSByYWRpb0luZGV4O1xyXG4gICAgLy9cclxuICAgIC8vaWYgKCEkKCcucGhvdG8tbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgLy8gIG1vdmVMZWZ0KCk7XHJcbiAgICAvL31cclxuXHJcblxyXG4gICAgaWYoIGN1cnJlbnRJbmRleCAhPSByYWRpb0luZGV4ICl7XHJcblxyXG4gICAgICBpZiggY3VycmVudEluZGV4ID09IDAgKXtcclxuXHJcbiAgICAgICAgaWYoIHJhZGlvSW5kZXggPT0gJCgnLnBob3RvLWxpc3QnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLnBob3RvLWxpc3QnKS5sZW5ndGgtMSApe1xyXG5cclxuICAgICAgICBpZiggcmFkaW9JbmRleCA9PSAwICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcucGhvdG8tbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcucGhvdG8tbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBpZiggY3VycmVudEluZGV4IDwgcmFkaW9JbmRleCApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJcclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLmZhcS1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcuZmFxLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRsaXN0TGluayApe1xyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1kZXRhaWwnKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmZhcS1saXN0LWxpbmsnKS5kYXRhKCdvcGVuJywgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIiwgXCIjZGRkXCIpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2RkZFwiKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG5cclxuICAkKCcuZmFxLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSgkKHRoaXMpKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
