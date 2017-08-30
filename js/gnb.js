
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

    });

  $('.close-button').on('click',function(){
    $(this).parent('.popup-wrap').stop().fadeOut(300);
    $('.photo-list-button').removeClass('on');
  });




  function init(){
    $('.photo-list').eq(0).css({left : 0});
    $('.photo-list').eq(1).css({left : 850});
    $('.photo-list').eq(2).css({left : -850});
    $('.photo-list').eq(3).css({left : -850});

    //marginControlWrap();
    //paging();
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

    console.log( currentIndex );
  }

  function moveRight(){

    if(nextIndex <= -1) {
      nextIndex = $('.photo-list').length-1;
    }

    $('.photo-list').eq(currentIndex).stop().animate({left : 850}, 2000, 'easeOutExpo');
    $('.photo-list').eq(nextIndex).css({left : -850}).stop().animate({left : 0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;
    nextIndex--;
  }



  function paging(){

    var imgNumber = $('.photo-list').length;
    for(var i=0; i<imgNumber; i++){
      $('.radio-box').append('<li class="radio-box-item"><a href="#" class="radio-box">' + (i+1) + '</a></li>');
    }
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzJfMS5qcyIsIl9qc3JfMl8yXzIuanMiLCJfanNyXzNfMS5qcyIsIl9qc3JfM18xXzEuanMiLCJfanNyXzNfMV8yLmpzIiwiX2pzcl80XzEuanMiLCJfanNyXzRfMl8xLmpzIiwiX2pzcl80XzMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogZ25iIGpRdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcbiAgZnVuY3Rpb24gY2hlY2tEZXB0aDEoKXtcclxuXHJcbiAgICBpZiAoZGVwdGgxID09ICdzdWIxJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMS1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgxID09ICdzdWIyJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMS1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5lcSgxKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgxID09ICdzdWIzJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMS1saW5rJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5lcSgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0RlcHRoMigpe1xyXG4gICAgaWYoZGVwdGgyID09ICdzdWIxLTEnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIxLTInKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSgxKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIxLTMnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSgyKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIxLTQnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSgzKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIxLTUnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSg0KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZihkZXB0aDIgPT0gJ3N1YjInKSB7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoZGVwdGgyID09ICdzdWIzLTEnKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSg2KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIzLTInKXtcclxuXHJcbiAgICAgICQoJy5nbmItZGVwdGgyLWxpbmsnKS5lcSg3KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoZGVwdGgyID09ICdzdWIzLTMnKSB7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoOCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8v7Iuk7ZaJ67aAXHJcblxyXG4gIC8v66Gc65Sp7IucIO2YhOyerCDtjpjsnbTsp4Ag7LK07YGsXHJcbiAgY2hlY2tEZXB0aDEoKTtcclxuICBjaGVja0RlcHRoMigpO1xyXG5cclxuXHJcbiAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmInKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmduYi1kZXB0aDItd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICAgIGNoZWNrRGVwdGgxKCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi13cmFwJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDItbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICQodGhpcykucGFyZW50cygnLmduYi1kZXB0aDItd3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjguXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0MicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDMnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDYwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ0JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCA5MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTIwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ2JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAxNTAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NycpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTgwMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDgnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDIxMDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ5JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyNDAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDEwJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyNzAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDExJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xNy5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEoMCkuY3NzKHtsZWZ0IDogMH0pO1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcSgxKS5jc3Moe2xlZnQgOiA4NTB9KTtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEoMikuY3NzKHtsZWZ0IDogLTg1MH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDo4NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG5cclxuICAgIG5leHRJbmRleCsrO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBjdXJyZW50SW5kZXggKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSkge1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdCA6IC04NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIC8v7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcuc2xpZGUtYXJyb3ctcmlnaHQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgaWYoICEkKCcuc2xpZGUtbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5zbGlkZS1hcnJvdy1sZWZ0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIGlmKCAhJCgnLnNsaWRlLWxpc3QnKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG5cclxuICB2YXIgb25tb3VzZW92ZXIgPSB7XHJcbiAgICAkaW1hZ2VCaWc6ICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJyksXHJcbiAgICAkaW1hZ2VUaHVtYjogJCgnLnNsaWRlLWxpc3QtaW1hZ2UnKSxcclxuXHJcbiAgICBjaGFuZ2VJbWFnZSA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XHJcbiAgICAgIHZhciBzcmMgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XHJcbiAgICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuYXR0cignc3JjJywgc3JjKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkKCcuc2xpZGUtbGlzdC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIG9ubW91c2VvdmVyLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgfSk7XHJcbiAgJCgnLnNsaWRlJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgb25tb3VzZW92ZXIuY2hhbmdlSW1hZ2UoICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5lcSgwKSApO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xMS5cclxuICovXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZ3VpZGUtYm94Jykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5ndWlkZS1ib3gtaGVhZGluZycpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmd1aWRlLWJveCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZ3VpZGUtYm94LWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDIuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgcm91dGU9IFtcclxuICAgICAgJ+yduOyCrOuPmS3sjIjsp4DquLgt65ah67CV66y86rSALeyiheusmC3ruYTsm5At7LC96rK96raBJyxcclxuICAgICAgJ+qyveuzteq2gS3qta3rpr3rr7zsho3rsJXrrLzqtIAt7IK87LKt64+Z6ri4LeywveuNleq2gScsXHJcbiAgICAgICdERFAt64+Z64yA66y4Leq0keyepeyLnOyepS3sooXrrJgnLFxyXG4gICAgICAn64yA7ZWZ66GcLeuniOuhnOuLiOyXkOqzteybkC3rgpnsgrDqs7Xsm5At7J207ZmU67K97ZmU66eI7J2ELeywveqyveq2gScsXHJcbiAgICAgICfssq3qs4Tsspwm7LKt6rOE6rSR7J6lLeq1reumve2YhOuMgOuvuOyIoOq0gChNTUNBKS3rtoHstIztlZzsmKXrp4jsnYQt6rK967O16raBJ1xyXG4gIF07XHJcbiAgdmFyIHRpbWVEaXN0YW5jZSA9IFtcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDM167aEICwg7J2064+Z6rGw66asIDogMi4xN2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDMw67aEICwg7J2064+Z6rGw66asIDogMi4wM2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS45MWttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS44MmttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDQw67aEICwg7J2064+Z6rGw66asIDogMi4yM2ttJ1xyXG4gIF07XHJcblxyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBodG1sTm9kZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5jb3Vyc2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJjb3Vyc2Utd3JhcFwiPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJyb3V0ZVwiPicgKyByb3V0ZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJ0aW1lLWRpc3RhbmNlXCI+JyArIHRpbWVEaXN0YW5jZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAkKCcuY291cnNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmNvdXJzZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIOyVhOueq+ykhCDrqqjshZjsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgJCgnLmNvdXJzZS12aWV3JykuYWRkQ2xhc3MoJ2ZyYW1lMScpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8vIOyZvOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAgICQoJy5jb3Vyc2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuICAgICAgLy8g7Jik66W47Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDAuNey0iFxyXG4gICAgICAkKCcuY291cnNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIOycl+ykhCDrqqjshZhcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQoJy5jb3Vyc2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMycpO1xyXG5cclxuICAgIH0sIDYwMCk7XHJcblxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wOS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzdGFydCA9IHRydWU7XHJcblxyXG4gICQoJy5wbGFjZS1saXN0LWl0ZW0+aW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBwbGFjZSA9IFtcclxuICAgICAgJ+qyveuzteq2gScsICfqtJHsnqXsi5zsnqUnLCAn64KZ7IKw6rO17JuQJyAsJ+uMgOumvOuvuOyIoOq0gCcsICfrj5nrjIDrrLgnLFxyXG4gICAgICAn67aB7LSM7ZWc7Jil66eI7J2EJywgJ+yCvOyyreqzteybkCcsICfsjIjsp4DquLgnLCAn7KKF66yYJywgJ+ywveqyveq2gSdcclxuICAgIF07XHJcblxyXG4gICAgdmFyIGh0bWxOb2RlID0gJyc7XHJcbiAgICB2YXIgY2hvaWNlUGxhY2UgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCcucGxhY2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgY2hvaWNlUGxhY2UgKz0gcGxhY2VbaW5kZXhOdW1iZXJdO1xyXG5cclxuICAgIGlmKCBzdGFydCApe1xyXG5cclxuICAgICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJwbGFjZS13cmFwXCI+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwiY2hvaWNlLXBsYWNlXCI+JyArIGNob2ljZVBsYWNlICsgJzwvcD4nO1xyXG4gICAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5odG1sKGh0bWxOb2RlKTtcclxuICAgICAgc3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwiY2hvaWNlLXBsYWNlXCI+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJy0gICcgKyBjaG9pY2VQbGFjZSArICc8L3A+JztcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QgLnBsYWNlLXdyYXAnKS5hcHBlbmQoaHRtbE5vZGUpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLnBsYWNlLXJlbG9hZC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wbGFjZS1saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5wbGFjZS1yZWxvYWQtYnRuJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgLy8g7JWE656r7KSEIOuqqOyFmOyggeyaqSDtgbTrnpjsiqQgLSAx7LSIXHJcbiAgICAkKCcucGxhY2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTEnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvLyDsmbzsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgICAkKCcucGxhY2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuICAgICAgLy8g7Jik66W47Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDAuNey0iFxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuYWRkQ2xhc3MoJ2ZyYW1lMicpO1xyXG5cclxuICAgIH0sIDUwMCk7XHJcblxyXG4gICAgLy8g7JyX7KSEIOuqqOyFmFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTMnKTtcclxuXHJcbiAgICB9LCA2MDApO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIlxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLnRpcC1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcudGlwLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnRpcC1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nICwgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIiwgXCIjZGRkXCIpO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2RkZFwiKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcudGlwLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTguXHJcbiAqL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAvL+yEoOyWuOu2gFxyXG5cclxuICAkKCcucGhvdG8tbGlzdC1pdGVtLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQodGhpcykubmV4dCgnLnBvcHVwLXdyYXAnKS5zdG9wKCkuZmFkZUluKDMwMCk7XHJcbiAgICAkKCcucGhvdG8tbGlzdC1idXR0b24nKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgJCgnLmNsb3NlLWJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucGFyZW50KCcucG9wdXAtd3JhcCcpLnN0b3AoKS5mYWRlT3V0KDMwMCk7XHJcbiAgICAkKCcucGhvdG8tbGlzdC1idXR0b24nKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcSgwKS5jc3Moe2xlZnQgOiAwfSk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKDEpLmNzcyh7bGVmdCA6IDg1MH0pO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcSgyKS5jc3Moe2xlZnQgOiAtODUwfSk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKDMpLmNzcyh7bGVmdCA6IC04NTB9KTtcclxuXHJcbiAgICAvL21hcmdpbkNvbnRyb2xXcmFwKCk7XHJcbiAgICAvL3BhZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLnBob3RvLWxpc3QnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5waG90by1saXN0JykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0Ojg1MH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcblxyXG4gICAgbmV4dEluZGV4Kys7XHJcblxyXG4gICAgY29uc29sZS5sb2coIGN1cnJlbnRJbmRleCApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKSB7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5waG90by1saXN0JykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogODUwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0IDogLTg1MH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0IDogMH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBwYWdpbmcoKXtcclxuXHJcbiAgICB2YXIgaW1nTnVtYmVyID0gJCgnLnBob3RvLWxpc3QnKS5sZW5ndGg7XHJcbiAgICBmb3IodmFyIGk9MDsgaTxpbWdOdW1iZXI7IGkrKyl7XHJcbiAgICAgICQoJy5yYWRpby1ib3gnKS5hcHBlbmQoJzxsaSBjbGFzcz1cInJhZGlvLWJveC1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInJhZGlvLWJveFwiPicgKyAoaSsxKSArICc8L2E+PC9saT4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8g7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcucGhvdG8tbGlzdC1idXR0b24tcmlnaHQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgaWYoICEkKCcucGhvdG8tbGlzdCcpLmlzKCc6YW5pbWF0ZWQnKSl7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5waG90by1saXN0LWJ1dHRvbi1sZWZ0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIGlmKCAhJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG59KTsiLCJcclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLmZhcS1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcuZmFxLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRsaXN0TGluayApe1xyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1kZXRhaWwnKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmZhcS1saXN0LWxpbmsnKS5kYXRhKCdvcGVuJywgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIiwgXCIjZGRkXCIpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2RkZFwiKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG5cclxuICAkKCcuZmFxLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSgkKHRoaXMpKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
