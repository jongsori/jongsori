
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

  $('.photo-list-item-link').on('click', function(){
      $(this).next('.popup-wrap').stop().fadeIn(300);
    });


  $('.close-button').on('click',function(){
    $(this).parent('.popup-wrap').stop().fadeOut(300);
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

    $(document).on('click','.paging-item', function(e) {

      e.preventDefault();

  });
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzJfMS5qcyIsIl9qc3JfMl8yXzIuanMiLCJfanNyXzNfMS5qcyIsIl9qc3JfM18xXzEuanMiLCJfanNyXzNfMV8yLmpzIiwiX2pzcl80XzEuanMiLCJfanNyXzRfMl8xLmpzIiwiX2pzcl80XzMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIGduYiBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGNoZWNrRGVwdGgxKCl7XHJcblxyXG4gICAgaWYgKGRlcHRoMSA9PSAnc3ViMScpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMSA9PSAnc3ViMicpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDEpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMSA9PSAnc3ViMycpe1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDEtbGluaycpLmVxKDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKCcuZ25iLWRlcHRoMi13cmFwJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tEZXB0aDIoKXtcclxuICAgIGlmKGRlcHRoMiA9PSAnc3ViMS0xJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS0yJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS0zJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS00Jyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoMykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMS01Jyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYoZGVwdGgyID09ICdzdWIyJykge1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDUpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0xJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0yJyl7XHJcblxyXG4gICAgICAkKCcuZ25iLWRlcHRoMi1saW5rJykuZXEoNykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmKGRlcHRoMiA9PSAnc3ViMy0zJykge1xyXG5cclxuICAgICAgJCgnLmduYi1kZXB0aDItbGluaycpLmVxKDgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvL+yLpO2Wieu2gFxyXG5cclxuICAvL+uhnOuUqeyLnCDtmITsnqwg7Y6Y7J207KeAIOyytO2BrFxyXG4gIGNoZWNrRGVwdGgxKCk7XHJcbiAgY2hlY2tEZXB0aDIoKTtcclxuXHJcblxyXG4gICQoJy5nbmItZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmduYi1kZXB0aDItd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5nbmItZGVwdGgyLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICBjaGVja0RlcHRoMSgpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDItd3JhcCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgyLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTI4LlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDEnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDInKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQzJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCA2MDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgOTAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDEyMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0NicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5jb250ZW50LXRpdGxlLXdyYXAtdGV4dDcnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0sIDE4MDApO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQ4JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9LCAyMTAwKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLmNvbnRlbnQtdGl0bGUtd3JhcC10ZXh0OScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMjQwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQxMCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMjcwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcuY29udGVudC10aXRsZS13cmFwLXRleHQxMScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTcuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKDApLmNzcyh7bGVmdCA6IDB9KTtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEoMSkuY3NzKHtsZWZ0IDogODUwfSk7XHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKDIpLmNzcyh7bGVmdCA6IC04NTB9KTtcclxuXHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0Oi04NTB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6ODUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuXHJcbiAgICBuZXh0SW5kZXgrKztcclxuXHJcbiAgICBjb25zb2xlLmxvZyggY3VycmVudEluZGV4ICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpIHtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQgOiA4NTB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuICAgICQoJy5zbGlkZS13cmFwLWJpZ2ltYWdlJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQgOiAtODUwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQgOiAwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4LS07XHJcbiAgfVxyXG5cclxuICAvL+yLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLnNsaWRlLWFycm93LXJpZ2h0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgIGlmKCAhJCgnLnNsaWRlLWxpc3QnKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuc2xpZGUtYXJyb3ctbGVmdCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICBpZiggISQoJy5zbGlkZS1saXN0JykuaXMoJzphbmltYXRlZCcpKXtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgdmFyIG9ubW91c2VvdmVyID0ge1xyXG4gICAgJGltYWdlQmlnOiAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLFxyXG4gICAgJGltYWdlVGh1bWI6ICQoJy5zbGlkZS1saXN0LWltYWdlJyksXHJcblxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcuc2xpZGUtd3JhcC1iaWdpbWFnZScpLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJCgnLnNsaWRlLWxpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBvbm1vdXNlb3Zlci5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xyXG4gIH0pO1xyXG4gICQoJy5zbGlkZScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIG9ubW91c2VvdmVyLmNoYW5nZUltYWdlKCAkKCcuc2xpZGUtbGlzdC1pdGVtJykuZXEoMCkgKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTEuXHJcbiAqL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmd1aWRlLWJveCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZ3VpZGUtYm94LWhlYWRpbmcnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5ndWlkZS1ib3gnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmd1aWRlLWJveC1oZWFkaW5nJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTAyLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHJvdXRlPSBbXHJcbiAgICAgICfsnbjsgqzrj5kt7IyI7KeA6ri4LeuWoeuwleusvOq0gC3sooXrrJgt67mE7JuQLeywveqyveq2gScsXHJcbiAgICAgICfqsr3rs7XqtoEt6rWt66a966+87IaN67CV66y86rSALeyCvOyyreuPmeq4uC3ssL3rjZXqtoEnLFxyXG4gICAgICAnRERQLeuPmeuMgOusuC3qtJHsnqXsi5zsnqUt7KKF66yYJyxcclxuICAgICAgJ+uMgO2VmeuhnC3rp4jroZzri4jsl5Dqs7Xsm5At64KZ7IKw6rO17JuQLeydtO2ZlOuyve2ZlOuniOydhC3ssL3qsr3qtoEnLFxyXG4gICAgICAn7LKt6rOE7LKcJuyyreqzhOq0keyepS3qta3rpr3tmITrjIDrr7jsiKDqtIAoTU1DQSkt67aB7LSM7ZWc7Jil66eI7J2ELeqyveuzteq2gSdcclxuICBdO1xyXG4gIHZhciB0aW1lRGlzdGFuY2UgPSBbXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAzNeu2hCAsIOydtOuPmeqxsOumrCA6IDIuMTdrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAzMOu2hCAsIOydtOuPmeqxsOumrCA6IDIuMDNrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAyNeu2hCAsIOydtOuPmeqxsOumrCA6IDEuOTFrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAyNeu2hCAsIOydtOuPmeqxsOumrCA6IDEuODJrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiA0MOu2hCAsIOydtOuPmeqxsOumrCA6IDIuMjNrbSdcclxuICBdO1xyXG5cclxuXHJcbiAgJCgnLmNvdXJzZS1saXN0LWl0ZW0+aW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaHRtbE5vZGUgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCcuY291cnNlLWxpc3QtaXRlbScpO1xyXG5cclxuICAgIGh0bWxOb2RlICs9ICc8ZGl2IGNsYXNzPVwiY291cnNlLXdyYXBcIj4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwicm91dGVcIj4nICsgcm91dGVbaW5kZXhOdW1iZXJdICsgJzwvcD4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwidGltZS1kaXN0YW5jZVwiPicgKyB0aW1lRGlzdGFuY2VbaW5kZXhOdW1iZXJdICsgJzwvcD4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5odG1sKGh0bWxOb2RlKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jb3Vyc2UtbGlzdC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyDslYTrnqvspIQg66qo7IWY7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICQoJy5jb3Vyc2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTEnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvLyDsmbzsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgICAkKCcuY291cnNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAgIC8vIOyYpOuluOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAwLjXstIhcclxuICAgICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyDsnJfspIQg66qo7IWYXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAkKCcuY291cnNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTMnKTtcclxuXHJcbiAgICB9LCA2MDApO1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDkuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc3RhcnQgPSB0cnVlO1xyXG5cclxuICAkKCcucGxhY2UtbGlzdC1pdGVtPmlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgcGxhY2UgPSBbXHJcbiAgICAgICfqsr3rs7XqtoEnLCAn6rSR7J6l7Iuc7J6lJywgJ+uCmeyCsOqzteybkCcgLCfrjIDrprzrr7jsiKDqtIAnLCAn64+Z64yA66y4JyxcclxuICAgICAgJ+u2gey0jO2VnOyYpeuniOydhCcsICfsgrzssq3qs7Xsm5AnLCAn7IyI7KeA6ri4JywgJ+yiheusmCcsICfssL3qsr3qtoEnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBodG1sTm9kZSA9ICcnO1xyXG4gICAgdmFyIGNob2ljZVBsYWNlID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgnLnBsYWNlLWxpc3QtaXRlbScpO1xyXG5cclxuICAgIGNob2ljZVBsYWNlICs9IHBsYWNlW2luZGV4TnVtYmVyXTtcclxuXHJcbiAgICBpZiggc3RhcnQgKXtcclxuXHJcbiAgICAgIGh0bWxOb2RlICs9ICc8ZGl2IGNsYXNzPVwicGxhY2Utd3JhcFwiPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cImNob2ljZS1wbGFjZVwiPicgKyBjaG9pY2VQbGFjZSArICc8L3A+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuaHRtbChodG1sTm9kZSk7XHJcbiAgICAgIHN0YXJ0ID0gZmFsc2U7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cImNob2ljZS1wbGFjZVwiPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICctICAnICsgY2hvaWNlUGxhY2UgKyAnPC9wPic7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0IC5wbGFjZS13cmFwJykuYXBwZW5kKGh0bWxOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wbGFjZS1yZWxvYWQtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucGxhY2UtbGlzdC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcucGxhY2UtcmVsb2FkLWJ0bicpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIC8vIOyVhOueq+ykhCDrqqjshZjsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgJCgnLnBsYWNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUxJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLy8g7Jm87Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICAgJCgnLnBsYWNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAgIC8vIOyYpOuluOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAwLjXstIhcclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIOycl+ykhCDrqqjshZhcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgNjAwKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCJcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy50aXAtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLnRpcC1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRsaXN0TGluayApe1xyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy50aXAtbGlzdC1kZXRhaWwnKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnRpcC1saXN0LWxpbmsnKS5kYXRhKCdvcGVuJyAsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsIFwiI2RkZFwiKTtcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLnRpcC1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE4LlxyXG4gKi9cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgLy/shKDslrjrtoBcclxuXHJcbiAgJCgnLnBob3RvLWxpc3QtaXRlbS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5uZXh0KCcucG9wdXAtd3JhcCcpLnN0b3AoKS5mYWRlSW4oMzAwKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgJCgnLmNsb3NlLWJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykucGFyZW50KCcucG9wdXAtd3JhcCcpLnN0b3AoKS5mYWRlT3V0KDMwMCk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5waG90by1saXN0JykuZXEoMCkuY3NzKHtsZWZ0IDogMH0pO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcSgxKS5jc3Moe2xlZnQgOiA4NTB9KTtcclxuICAgICQoJy5waG90by1saXN0JykuZXEoMikuY3NzKHtsZWZ0IDogLTg1MH0pO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcSgzKS5jc3Moe2xlZnQgOiAtODUwfSk7XHJcblxyXG4gICAgLy9tYXJnaW5Db250cm9sV3JhcCgpO1xyXG4gICAgLy9wYWdpbmcoKTtcclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5waG90by1saXN0JykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkKCcucGhvdG8tbGlzdCcpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDo4NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG5cclxuICAgIG5leHRJbmRleCsrO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBjdXJyZW50SW5kZXggKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSkge1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcucGhvdG8tbGlzdCcpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5waG90by1saXN0JykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDg1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLnBob3RvLWxpc3QnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdCA6IC04NTB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdCA6IDB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gcGFnaW5nKCl7XHJcblxyXG4gICAgdmFyIGltZ051bWJlciA9ICQoJy5waG90by1saXN0JykubGVuZ3RoO1xyXG4gICAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspe1xyXG4gICAgICAkKCcucmFkaW8tYm94JykuYXBwZW5kKCc8bGkgY2xhc3M9XCJyYWRpby1ib3gtaXRlbVwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyYWRpby1ib3hcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLnBob3RvLWxpc3QtYnV0dG9uLXJpZ2h0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgIGlmKCAhJCgnLnBob3RvLWxpc3QnKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcucGhvdG8tbGlzdC1idXR0b24tbGVmdCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICBpZiggISQoJy5waG90by1saXN0JykuaXMoJzphbmltYXRlZCcpKXtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLnBhZ2luZy1pdGVtJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICB9KTtcclxuICB9KTtcclxuXHJcbn0pOyIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcuZmFxLWxpc3QtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuICAgICQoJy5mYXEtbGlzdC1kZXRhaWwnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkbGlzdExpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNmZmNkMTJcIik7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmZhcS1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLCBcIiNkZGRcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZGRkXCIpO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGluaXQoKTtcclxuXHJcblxyXG4gICQoJy5mYXEtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCQodGhpcykpO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuIl19
