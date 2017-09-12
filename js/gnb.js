
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

jQuery(document).ready(function($) {
  $.ajax({
    // 결과를 한글로 받을 수 있다.
    //url : "http://api.wunderground.com/api/d9f45faf33cb9139/geolookup/conditions/lang:KR/q/Korea/Seoul.json",
    //dataType : "jsonp",
    //success : function(parsed_json) {
    //  // 관측지에 대한 정보
    //  var observ = parsed_json.current_observation;
    //  //var observ_s = observ.display_location.full;
    //  // 날씨정보
    //  var weather_s = "<p class="+"weather-icon"+">"+"<img src='"+observ.icon_url+"'/></p>";
    //  weather_s += "<div class="+"weather-wrap"+">";
    //  weather_s += "<p class="+"weather-text"+">"+observ.weather+"</p>";
    //  weather_s += "<p class="+"weather-temp"+">"+observ.temp_c+" ℃ </p>";
    //  weather_s += "</div>";
    //  $("#weatherinfo").append(weather_s);
    //}
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzAuanMiLCJfanNyXzEuanMiLCJfanNyXzJfMS5qcyIsIl9qc3JfMl8yXzEuanMiLCJfanNyXzJfMl8yLmpzIiwiX2pzcl8zXzEuanMiLCJfanNyXzNfMV8xLmpzIiwiX2pzcl8zXzFfMi5qcyIsIl9qc3JfNF8xLmpzIiwiX2pzcl80XzJfMS5qcyIsIl9qc3JfNF8zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIGduYiBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGNoZWNrRGVwdGgxKCl7XHJcblxyXG4gICAgaWYgKGRlcHRoMSA9PSAnc3ViMScpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMSA9PSAnc3ViMicpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMSA9PSAnc3ViMycpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tEZXB0aDIoKXtcclxuICAgIGlmKGRlcHRoMiA9PSAnc3ViMS0xJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS0yJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS0zJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS00Jyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS01Jyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoZGVwdGgyID09ICdzdWIyJykge1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDUpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0xJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0yJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0zJykge1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvL+yLpO2Wieu2gFxyXG5cclxuICAvL+uhnOuUqeyLnCDtmITsnqwg7Y6Y7J207KeAIOyytO2BrFxyXG4gIGNoZWNrRGVwdGgxKCk7XHJcbiAgY2hlY2tEZXB0aDIoKTtcclxuXHJcblxyXG5cclxuICAkKCcuZ25iLWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykubmV4dCgnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmduYicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgY2hlY2tEZXB0aDEoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgyLXdyYXAnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOS0wNy5cclxuICovXHJcbiIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gICQuYWpheCh7XHJcbiAgICAvLyDqsrDqs7zrpbwg7ZWc6riA66GcIOuwm+ydhCDsiJgg7J6I64ukLlxyXG4gICAgLy91cmwgOiBcImh0dHA6Ly9hcGkud3VuZGVyZ3JvdW5kLmNvbS9hcGkvZDlmNDVmYWYzM2NiOTEzOS9nZW9sb29rdXAvY29uZGl0aW9ucy9sYW5nOktSL3EvS29yZWEvU2VvdWwuanNvblwiLFxyXG4gICAgLy9kYXRhVHlwZSA6IFwianNvbnBcIixcclxuICAgIC8vc3VjY2VzcyA6IGZ1bmN0aW9uKHBhcnNlZF9qc29uKSB7XHJcbiAgICAvLyAgLy8g6rSA7Lih7KeA7JeQIOuMgO2VnCDsoJXrs7RcclxuICAgIC8vICB2YXIgb2JzZXJ2ID0gcGFyc2VkX2pzb24uY3VycmVudF9vYnNlcnZhdGlvbjtcclxuICAgIC8vICAvL3ZhciBvYnNlcnZfcyA9IG9ic2Vydi5kaXNwbGF5X2xvY2F0aW9uLmZ1bGw7XHJcbiAgICAvLyAgLy8g64Kg7JSo7KCV67O0XHJcbiAgICAvLyAgdmFyIHdlYXRoZXJfcyA9IFwiPHAgY2xhc3M9XCIrXCJ3ZWF0aGVyLWljb25cIitcIj5cIitcIjxpbWcgc3JjPSdcIitvYnNlcnYuaWNvbl91cmwrXCInLz48L3A+XCI7XHJcbiAgICAvLyAgd2VhdGhlcl9zICs9IFwiPGRpdiBjbGFzcz1cIitcIndlYXRoZXItd3JhcFwiK1wiPlwiO1xyXG4gICAgLy8gIHdlYXRoZXJfcyArPSBcIjxwIGNsYXNzPVwiK1wid2VhdGhlci10ZXh0XCIrXCI+XCIrb2JzZXJ2LndlYXRoZXIrXCI8L3A+XCI7XHJcbiAgICAvLyAgd2VhdGhlcl9zICs9IFwiPHAgY2xhc3M9XCIrXCJ3ZWF0aGVyLXRlbXBcIitcIj5cIitvYnNlcnYudGVtcF9jK1wiIOKEgyA8L3A+XCI7XHJcbiAgICAvLyAgd2VhdGhlcl9zICs9IFwiPC9kaXY+XCI7XHJcbiAgICAvLyAgJChcIiN3ZWF0aGVyaW5mb1wiKS5hcHBlbmQod2VhdGhlcl9zKTtcclxuICAgIC8vfVxyXG4gIH0pO1xyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjguXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDMnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDYwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ0JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCA5MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTIwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ2JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAxNTAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NycpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTgwMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDgnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDIxMDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ5JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyNDAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDEwJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyNzAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDExJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOS0wNS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBkZWx0YURlZ3JlZSA9IDA7XHJcblxyXG4gICQoJy5hcnJvdy1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBkZWx0YURlZ3JlZSArPSA2MDtcclxuXHJcbiAgICAkKCcuY29udGVudC1saXN0JykuY3NzKHtcclxuICAgICAgdHJhbnNmb3JtIDogJ3RyYW5zbGF0ZVooLTI4OHB4KSByb3RhdGVYKC0xMGRlZykgcm90YXRlWSgnICsgZGVsdGFEZWdyZWUgKyAnZGVnICknXHJcbiAgICAgIC8vIO2VqOyImOyXkCDrs4DsiJgg64Sj64qUIOuwqeuylSBleCApIHJvdGF0ZVkoJyArIGRlbHRhRGVncmVlICsgJylcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJyb3ctcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGRlbHRhRGVncmVlIC09IDYwO1xyXG5cclxuICAgICQoJy5jb250ZW50LWxpc3QnKS5jc3Moe1xyXG4gICAgICB0cmFuc2Zvcm0gOiAndHJhbnNsYXRlWigtMjg4cHgpIHJvdGF0ZVgoLTEwZGVnKSByb3RhdGVZKCcgKyBkZWx0YURlZ3JlZSArICdkZWcpJ1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTcuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKDApLmNzcyh7bGVmdCA6IDB9KTtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEoMSkuY3NzKHtsZWZ0IDogODUwfSk7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKDIpLmNzcyh7bGVmdCA6IC04NTB9KTtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEoMykuY3NzKHtsZWZ0IDogODUwfSk7XHJcblxyXG4gICAgJCgnLnNsaWRlLWxpc3QtaXRlbScpLmVxKDApLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJylcclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDo4NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG5cclxuICAgIG5leHRJbmRleCsrO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBjdXJyZW50SW5kZXggKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSkge1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdCA6IC04NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIC8v7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcuc2xpZGUtYXJyb3ctcmlnaHQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICBpZiggISQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuaXMoJzphbmltYXRlZCcpKXtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLnNsaWRlLWFycm93LWxlZnQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICBpZiggISQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuaXMoJzphbmltYXRlZCcpKXtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuc2xpZGUtbGlzdC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgcmFkaW9JbmRleCA9ICQodGhpcykuaW5kZXgoJy5zbGlkZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBuZXh0SW5kZXggPSByYWRpb0luZGV4O1xyXG4gICAgLy9cclxuICAgIC8vaWYgKCEkKCcucGhvdG8tbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgLy8gIG1vdmVMZWZ0KCk7XHJcbiAgICAvL31cclxuXHJcblxyXG4gICAgaWYoIGN1cnJlbnRJbmRleCAhPSByYWRpb0luZGV4ICl7XHJcblxyXG4gICAgICBpZiggY3VycmVudEluZGV4ID09IDAgKXtcclxuXHJcbiAgICAgICAgaWYoIHJhZGlvSW5kZXggPT0gJCgnLnNsaWRlLWxpc3QnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgaWYoICEkKCcuc2xpZGUtbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmKCAhJCgnLnNsaWRlLWxpc3QnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLnNsaWRlLWxpc3QnKS5sZW5ndGgtMSApe1xyXG5cclxuICAgICAgICBpZiggcmFkaW9JbmRleCA9PSAwICl7XHJcbiAgICAgICAgICBpZiggISQoJy5zbGlkZS1saXN0JykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiggISQoJy5zbGlkZS1saXN0JykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBpZiggY3VycmVudEluZGV4IDwgcmFkaW9JbmRleCApe1xyXG4gICAgICAgICAgaWYoICEkKCcuc2xpZGUtbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYoICEkKCcuc2xpZGUtbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xMS5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZ3VpZGUtYm94Jykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5ndWlkZS1ib3gtaGVhZGluZycpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmd1aWRlLWJveCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZ3VpZGUtYm94LWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDIuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgcm91dGU9IFtcclxuICAgICAgJ+yduOyCrOuPmS3sjIjsp4DquLgt65ah67CV66y86rSALeyiheusmC3ruYTsm5At7LC96rK96raBJyxcclxuICAgICAgJ+qyveuzteq2gS3qta3rpr3rr7zsho3rsJXrrLzqtIAt7IK87LKt64+Z6ri4LeywveuNleq2gScsXHJcbiAgICAgICdERFAt64+Z64yA66y4Leq0keyepeyLnOyepS3sooXrrJgnLFxyXG4gICAgICAn64yA7ZWZ66GcLeuniOuhnOuLiOyXkOqzteybkC3rgpnsgrDqs7Xsm5At7J207ZmU67K97ZmU66eI7J2ELeywveqyveq2gScsXHJcbiAgICAgICfssq3qs4Tsspwm7LKt6rOE6rSR7J6lLeq1reumve2YhOuMgOuvuOyIoOq0gChNTUNBKS3rtoHstIztlZzsmKXrp4jsnYQt6rK967O16raBJ1xyXG4gIF07XHJcbiAgdmFyIHRpbWVEaXN0YW5jZSA9IFtcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDM167aEICwg7J2064+Z6rGw66asIDogMi4xN2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDMw67aEICwg7J2064+Z6rGw66asIDogMi4wM2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS45MWttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS44MmttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDQw67aEICwg7J2064+Z6rGw66asIDogMi4yM2ttJ1xyXG4gIF07XHJcblxyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBodG1sTm9kZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5jb3Vyc2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJjb3Vyc2Utd3JhcFwiPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJyb3V0ZVwiPicgKyByb3V0ZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJ0aW1lLWRpc3RhbmNlXCI+JyArIHRpbWVEaXN0YW5jZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAkKCcuY291cnNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmNvdXJzZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIOyVhOueq+ykhCDrqqjshZjsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgJCgnLmNvdXJzZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIOyZvOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAgICQoJy5jb3Vyc2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuICAgICAgLy8g7Jik66W47Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDAuNey0iFxyXG4gICAgICAkKCcuY291cnNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIOycl+ykhCDrqqjshZhcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wOS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzdGFydCA9IHRydWU7XHJcblxyXG4gICQoJy5wbGFjZS1saXN0LWl0ZW0+aW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBwbGFjZSA9IFtcclxuICAgICAgJ+qyveuzteq2gScsICfqtJHsnqXsi5zsnqUnLCAn64KZ7IKw6rO17JuQJyAsJ+uMgOumvOuvuOyIoOq0gCcsICfrj5nrjIDrrLgnLFxyXG4gICAgICAn67aB7LSM7ZWc7Jil66eI7J2EJywgJ+yCvOyyreqzteybkCcsICfsjIjsp4DquLgnLCAn7KKF66yYJywgJ+ywveqyveq2gSdcclxuICAgIF07XHJcblxyXG4gICAgdmFyIGh0bWxOb2RlID0gJyc7XHJcbiAgICB2YXIgY2hvaWNlUGxhY2UgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCcucGxhY2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgY2hvaWNlUGxhY2UgKz0gcGxhY2VbaW5kZXhOdW1iZXJdO1xyXG5cclxuICAgIGlmKCBzdGFydCApe1xyXG5cclxuICAgICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJwbGFjZS13cmFwXCI+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwiY2hvaWNlLXBsYWNlXCI+JyArIGNob2ljZVBsYWNlICsgJzwvcD4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5odG1sKGh0bWxOb2RlKTtcclxuICAgICAgc3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwiY2hvaWNlLXBsYWNlXCI+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJy0gICcgKyBjaG9pY2VQbGFjZSArICc8L3A+JztcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QgLnBsYWNlLXdyYXAnKS5hcHBlbmQoaHRtbE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBsYWNlLXJlbG9hZC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wbGFjZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5wbGFjZS1yZWxvYWQtYnRuJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgLy8g7JWE656r7KSEIOuqqOyFmOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAkKCcucGxhY2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTEnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvLyDsmbzsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgICAkKCcucGxhY2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuICAgICAgLy8g7Jik66W47Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDAuNey0iFxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8g7JyX7KSEIOuqqOyFmFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTMnKTtcclxuXHJcbiAgICB9LCA2MDApO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIlxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLnRpcC1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcudGlwLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnRpcC1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nICwgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIiwgXCIjZGRkXCIpO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2RkZFwiKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcudGlwLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTguXHJcbiAqL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAvLyDtjJ3sl4Ugc2hvdyAmICBoaWRlXHJcbiAgJCgnLnBob3RvLWxpc3QtaXRlbS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQodGhpcykubmV4dCgnLnBvcHVwLXdyYXAnKS5zdG9wKCkuZmFkZUluKDMwMCk7XHJcbiAgICAkKCcucGhvdG8tbGlzdC1idXR0b24nKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQoJy5yYWRpby1ib3gnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jbG9zZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgnLnBvcHVwLXdyYXAnKS5zdG9wKCkuZmFkZU91dCgzMDApO1xyXG4gICAgJCgnLnBob3RvLWxpc3QtYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcucmFkaW8tYm94JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLyDrpqzsiqTtirgg7Iqs65287J2065SpXHJcblxyXG4gIC8v7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICQoJy5waG90by1saXN0JykuZXEoMCkuY3NzKHtsZWZ0OiAwfSk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKDEpLmNzcyh7bGVmdDogODUwfSk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKDIpLmNzcyh7bGVmdDogLTg1MH0pO1xyXG5cclxuXHJcbiAgICAvL3JhZGlvLWJveCDsnZgg7Iic7ISc64yA66GcIHBob3RvLWxpc3Qg7Y6Y7J207KeA64+EIOuwlOuAnFxyXG4gICAgJCgnLnJhZGlvLWJveC1saXN0JykuZXEoMCkuY2hpbGRyZW4oKS5hZGRDbGFzcygnb24nKVxyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCkge1xyXG4gICAgaWYgKG5leHRJbmRleCA+PSAkKCcucGhvdG8tbGlzdCcpLmxlbmd0aCkge1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5waG90by1saXN0JykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDogLTg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDogODUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6IDB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcblxyXG4gICAgbmV4dEluZGV4Kys7XHJcblxyXG4gICAgLy/ri6TsnYwg67KE7Yq87J2YIOyDieq5lOydtCDrsJTrgJxcclxuICAgICQoJy5yYWRpby1ib3gtbGlzdCcpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcucmFkaW8tYm94LWxpc3QnKS5lcShjdXJyZW50SW5kZXgpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xyXG5cclxuICAgIGlmIChuZXh0SW5kZXggPD0gLTEpIHtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLnBob3RvLWxpc3QnKS5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5waG90by1saXN0JykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDogODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0OiAtODUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6IDB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuXHJcbiAgICAvLyDri6TsnYwg67KE7Yq87J2YIOyDieq5lOydtCDrsJTrgJxcclxuICAgICQoJy5yYWRpby1ib3gtbGlzdCcpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcucmFkaW8tYm94LWxpc3QnKS5lcShjdXJyZW50SW5kZXgpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8g7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcucGhvdG8tbGlzdC1idXR0b24tcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgaWYgKCEkKCcucGhvdG8tbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSkge1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcucGhvdG8tbGlzdC1idXR0b24tbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICBpZiAoISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpKSB7XHJcbiAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcucmFkaW8tYm94LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciByYWRpb0luZGV4ID0gJCh0aGlzKS5pbmRleCgnLnJhZGlvLWJveC1saW5rJyk7XHJcblxyXG4gICAgbmV4dEluZGV4ID0gcmFkaW9JbmRleDtcclxuICAgIC8vXHJcbiAgICAvL2lmICghJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykpIHtcclxuICAgIC8vICBtb3ZlTGVmdCgpO1xyXG4gICAgLy99XHJcblxyXG5cclxuICAgIGlmKCBjdXJyZW50SW5kZXggIT0gcmFkaW9JbmRleCApe1xyXG5cclxuICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcblxyXG4gICAgICAgIGlmKCByYWRpb0luZGV4ID09ICQoJy5waG90by1saXN0JykubGVuZ3RoLTEgKXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcucGhvdG8tbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0gZWxzZSBpZiggY3VycmVudEluZGV4ID09ICQoJy5waG90by1saXN0JykubGVuZ3RoLTEgKXtcclxuXHJcbiAgICAgICAgaWYoIHJhZGlvSW5kZXggPT0gMCApe1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgIGlmKCAhJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IHJhZGlvSW5kZXggKXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICBpZiggISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5mYXEtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLmZhcS1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsIFwiI2RkZFwiKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuXHJcbiAgJCgnLmZhcS1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoJCh0aGlzKSk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
