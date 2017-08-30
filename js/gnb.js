
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

  function init(){
    $('.slide-wrap-bigimage').eq(0).css({left : 0});
    $('.slide-wrap-bigimage').eq(1).css({left : 850});
    $('.slide-wrap-bigimage').eq(2).css({left : -850});

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
    onmouseover.changeImage( $('.slide-list-item').eq(0) );
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
    $('.photo-list').eq(3).css({left : -850});


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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzJfMS5qcyIsIl9qc3JfMl8yXzIuanMiLCJfanNyXzNfMS5qcyIsIl9qc3JfM18xXzEuanMiLCJfanNyXzNfMV8yLmpzIiwiX2pzcl80XzEuanMiLCJfanNyXzRfMl8xLmpzIiwiX2pzcl80XzMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiBnbmIgalF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBjaGVja0RlcHRoMSgpe1xyXG5cclxuICAgIGlmIChkZXB0aDEgPT0gJ3N1YjEnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgxLWxpbmsnKS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCgnLmduYi1kZXB0aDItd3JhcCcpLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0gZWxzZSBpZihkZXB0aDEgPT0gJ3N1YjInKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgxLWxpbmsnKS5lcSgxKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCgnLmduYi1kZXB0aDItd3JhcCcpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0gZWxzZSBpZihkZXB0aDEgPT0gJ3N1YjMnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgxLWxpbmsnKS5lcSgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCgnLmduYi1kZXB0aDItd3JhcCcpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrRGVwdGgyKCl7XHJcbiAgICBpZihkZXB0aDIgPT0gJ3N1YjEtMScpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0gZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjEtMicpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0gZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjEtMycpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0gZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjEtNCcpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDMpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0gZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjEtNScpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDQpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMicpIHtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSg1KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjMtMScpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDYpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0gZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjMtMicpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0gZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjMtMycpIHtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSg4KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy/si6TtlonrtoBcclxuXHJcbiAgLy/roZzrlKnsi5wg7ZiE7J6sIO2OmOydtOyngCDssrTtgaxcclxuICBjaGVja0RlcHRoMSgpO1xyXG4gIGNoZWNrRGVwdGgyKCk7XHJcblxyXG5cclxuICAkKCcuZ25iLWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykubmV4dCgnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmduYicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgY2hlY2tEZXB0aDEoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgyLXdyYXAnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yOC5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQxJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQyJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MycpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgNjAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDQnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDkwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ1JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAxMjAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDYnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDE1MDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ3JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAxODAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0OCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMjEwMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDknKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDI0MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MTAnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDI3MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MTEnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDMwMDApO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE3LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcSgwKS5jc3Moe2xlZnQgOiAwfSk7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKDEpLmNzcyh7bGVmdCA6IDg1MH0pO1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcSgyKS5jc3Moe2xlZnQgOiAtODUwfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0Ojg1MH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcblxyXG4gICAgbmV4dEluZGV4Kys7XHJcblxyXG4gICAgY29uc29sZS5sb2coIGN1cnJlbnRJbmRleCApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKSB7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0IDogLTg1MH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogMH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgLy/si6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5zbGlkZS1hcnJvdy1yaWdodCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBpZiggISQoJy5zbGlkZS1saXN0JykuaXMoJzphbmltYXRlZCcpKXtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLnNsaWRlLWFycm93LWxlZnQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgaWYoICEkKCcuc2xpZGUtbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbiAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG4gIHZhciBvbm1vdXNlb3ZlciA9IHtcclxuICAgICRpbWFnZUJpZzogJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKSxcclxuICAgICRpbWFnZVRodW1iOiAkKCcuc2xpZGUtbGlzdC1pbWFnZScpLFxyXG5cclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgb25tb3VzZW92ZXIuY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICB9KTtcclxuICAkKCcuc2xpZGUnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICBvbm1vdXNlb3Zlci5jaGFuZ2VJbWFnZSggJCgnLnNsaWRlLWxpc3QtaXRlbScpLmVxKDApICk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTExLlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5ndWlkZS1ib3gnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmd1aWRlLWJveC1oZWFkaW5nJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ3VpZGUtYm94Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5ndWlkZS1ib3gtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wMi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciByb3V0ZT0gW1xyXG4gICAgICAn7J247IKs64+ZLeyMiOyngOq4uC3rlqHrsJXrrLzqtIAt7KKF66yYLeu5hOybkC3ssL3qsr3qtoEnLFxyXG4gICAgICAn6rK967O16raBLeq1reumveuvvOyGjeuwleusvOq0gC3sgrzssq3rj5nquLgt7LC9642V6raBJyxcclxuICAgICAgJ0REUC3rj5nrjIDrrLgt6rSR7J6l7Iuc7J6lLeyiheusmCcsXHJcbiAgICAgICfrjIDtlZnroZwt66eI66Gc64uI7JeQ6rO17JuQLeuCmeyCsOqzteybkC3snbTtmZTrsr3tmZTrp4jsnYQt7LC96rK96raBJyxcclxuICAgICAgJ+yyreqzhOyynCbssq3qs4TqtJHsnqUt6rWt66a97ZiE64yA66+47Iig6rSAKE1NQ0EpLeu2gey0jO2VnOyYpeuniOydhC3qsr3rs7XqtoEnXHJcbiAgXTtcclxuICB2YXIgdGltZURpc3RhbmNlID0gW1xyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMzXrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjE3a20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMzDrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjAza20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMjXrtoQgLCDsnbTrj5nqsbDrpqwgOiAxLjkxa20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogMjXrtoQgLCDsnbTrj5nqsbDrpqwgOiAxLjgya20nLFxyXG4gICAgICAn7JiI7IOB7IaM7JqU7Iuc6rCEIDogNDDrtoQgLCDsnbTrj5nqsbDrpqwgOiAyLjIza20nXHJcbiAgXTtcclxuXHJcblxyXG4gICQoJy5jb3Vyc2UtbGlzdC1pdGVtPmlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGh0bWxOb2RlID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgnLmNvdXJzZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBodG1sTm9kZSArPSAnPGRpdiBjbGFzcz1cImNvdXJzZS13cmFwXCI+JztcclxuICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cInJvdXRlXCI+JyArIHJvdXRlW2luZGV4TnVtYmVyXSArICc8L3A+JztcclxuICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cInRpbWUtZGlzdGFuY2VcIj4nICsgdGltZURpc3RhbmNlW2luZGV4TnVtYmVyXSArICc8L3A+JztcclxuICAgIGh0bWxOb2RlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuaHRtbChodG1sTm9kZSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8g7JWE656r7KSEIOuqqOyFmOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAkKCcuY291cnNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUxJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLy8g7Jm87Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICAgJCgnLmNvdXJzZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAvLyDsmKTrpbjsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMC417LSIXHJcbiAgICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8g7JyX7KSEIOuqqOyFmFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgNjAwKTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA5LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHN0YXJ0ID0gdHJ1ZTtcclxuXHJcbiAgJCgnLnBsYWNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHBsYWNlID0gW1xyXG4gICAgICAn6rK967O16raBJywgJ+q0keyepeyLnOyepScsICfrgpnsgrDqs7Xsm5AnICwn64yA66a866+47Iig6rSAJywgJ+uPmeuMgOusuCcsXHJcbiAgICAgICfrtoHstIztlZzsmKXrp4jsnYQnLCAn7IK87LKt6rO17JuQJywgJ+yMiOyngOq4uCcsICfsooXrrJgnLCAn7LC96rK96raBJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgaHRtbE5vZGUgPSAnJztcclxuICAgIHZhciBjaG9pY2VQbGFjZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5wbGFjZS1saXN0LWl0ZW0nKTtcclxuXHJcbiAgICBjaG9pY2VQbGFjZSArPSBwbGFjZVtpbmRleE51bWJlcl07XHJcblxyXG4gICAgaWYoIHN0YXJ0ICl7XHJcblxyXG4gICAgICBodG1sTm9kZSArPSAnPGRpdiBjbGFzcz1cInBsYWNlLXdyYXBcIj4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJjaG9pY2UtcGxhY2VcIj4nICsgY2hvaWNlUGxhY2UgKyAnPC9wPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG4gICAgICBzdGFydCA9IGZhbHNlO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJjaG9pY2UtcGxhY2VcIj4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnLSAgJyArIGNob2ljZVBsYWNlICsgJzwvcD4nO1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCAucGxhY2Utd3JhcCcpLmFwcGVuZChodG1sTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucGxhY2UtcmVsb2FkLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBsYWNlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLnBsYWNlLXJlbG9hZC1idG4nKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAvLyDslYTrnqvspIQg66qo7IWY7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICQoJy5wbGFjZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIOyZvOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAgICQoJy5wbGFjZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG4gICAgICAvLyDsmKTrpbjsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMC417LSIXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyDsnJfspIQg66qo7IWYXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcudGlwLWxpc3QtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuICAgICQoJy50aXAtbGlzdC1kZXRhaWwnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkbGlzdExpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNmZmNkMTJcIik7XHJcblxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy50aXAtbGlzdC1saW5rJykuZGF0YSgnb3BlbicgLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLCBcIiNkZGRcIik7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZGRkXCIpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy50aXAtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xOC5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIC8v7ISg7Ja467aAXHJcblxyXG4gICQoJy5waG90by1saXN0LWl0ZW0tbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCcucG9wdXAtd3JhcCcpLnN0b3AoKS5mYWRlSW4oMzAwKTtcclxuICAgICQoJy5waG90by1saXN0LWJ1dHRvbicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCgnLnJhZGlvLWJveCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAkKCcuY2xvc2UtYnV0dG9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoJy5wb3B1cC13cmFwJykuc3RvcCgpLmZhZGVPdXQoMzAwKTtcclxuICAgICQoJy5waG90by1saXN0LWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLnJhZGlvLWJveCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKDApLmNzcyh7bGVmdCA6IDB9KTtcclxuICAgICQoJy5waG90by1saXN0JykuZXEoMSkuY3NzKHtsZWZ0IDogODUwfSk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKDIpLmNzcyh7bGVmdCA6IC04NTB9KTtcclxuICAgICQoJy5waG90by1saXN0JykuZXEoMykuY3NzKHtsZWZ0IDogLTg1MH0pO1xyXG5cclxuXHJcbiAgICAvL3JhZGlvLWJveCDsnZgg7Iic7ISc64yA66GcIHBob3RvLWxpc3Qg7Y6Y7J207KeA64+EIOuwlOuAnFxyXG4gICAgJCgnLnJhZGlvLWJveC1saXN0JykuZXEoMCkuY2hpbGRyZW4oKS5hZGRDbGFzcygnb24nKVxyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLnBob3RvLWxpc3QnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5waG90by1saXN0JykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0Ojg1MH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcblxyXG4gICAgbmV4dEluZGV4Kys7XHJcblxyXG4gICAgLy/ri6TsnYwg67KE7Yq87J2YIOyDieq5lOydtCDrsJTrgJxcclxuICAgICQoJy5yYWRpby1ib3gtbGlzdCcpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcucmFkaW8tYm94LWxpc3QnKS5lcShjdXJyZW50SW5kZXgpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKSB7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5waG90by1saXN0JykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0IDogLTg1MH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogMH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG5cclxuICAgIC8vIOuLpOydjCDrsoTtirzsnZgg7IOJ6rmU7J20IOuwlOuAnFxyXG4gICAgJCgnLnJhZGlvLWJveC1saXN0JykuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5yYWRpby1ib3gtbGlzdCcpLmVxKGN1cnJlbnRJbmRleCkuY2hpbGRyZW4oKS5hZGRDbGFzcygnb24nKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLnBob3RvLWxpc3QtYnV0dG9uLXJpZ2h0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgIGlmKCAhJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcucGhvdG8tbGlzdC1idXR0b24tbGVmdCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICBpZiggISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpKXtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICAvL2luZGljYXRvciBpbmRleFxyXG4gICQoJy5pbmRpY2F0b3IgYScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgcGFnaW5nID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5hbmltYXRlKHtsZWZ0IDogODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcuaW5kaWNhdG9yIGEnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5pbmRpY2F0b3IgYScpLmVxKHBhZ2luZykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pXHJcblxyXG59KTsiLCJcclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLmZhcS1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcuZmFxLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRsaXN0TGluayApe1xyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1kZXRhaWwnKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmZhcS1saXN0LWxpbmsnKS5kYXRhKCdvcGVuJywgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIiwgXCIjZGRkXCIpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2RkZFwiKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG5cclxuICAkKCcuZmFxLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSgkKHRoaXMpKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
