
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
    areaWidth: 0,
    areaHeight: 0,
    imageWidth: 0,
    imageHeight: 0,
    areaRatio: 0,
    imageRatio: 0,

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

  calculateRatio.applyBig();
  calculateRatio.applyThumb();

  $('.slide-list-item').on('mouseenter', function(){
    calculateRatio.changeImage( $(this) );
    calculateRatio.applyBig();
  });
  $('.slide').on('mouseleave', function(){
    calculateRatio.changeImage( $('.slide-list-item').eq(0) );
    calculateRatio.applyBig();
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

$('.photo-list-item').on('mouseenter',function(){
  $(this).children('.photo-list-item-mask-heading').addClass('on');
});

$('.photo-list-item').on('click',function(){
  $(this).children('.item-wrap').addClass('on');


});
$('.btn-pop-close').on('click',function(){
  $(this).parents('.item-wrap').css({
    height :0,
    transition : 'height 1s ease-out'
  });
  $('.review').css({
    'padding-bottom' : 0,
    transition : 'padding-bottom .5s ease-out'
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzJfMl8yLmpzIiwiX2pzcl8zXzEuanMiLCJfanNyXzNfMV8xLmpzIiwiX2pzcl8zXzFfMi5qcyIsIl9qc3JfNF8xLmpzIiwiX2pzcl80XzJfMS5qcyIsIl9qc3JfNF8zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIGduYiBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5nbmItZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykubmV4dCgnLmduYi1kZXB0aDItd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDItd3JhcCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCcuZ25iLWRlcHRoMi13cmFwJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDItbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTE3LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g66eI7Jqw7IqkIOyYpOuyhOyLnFxyXG4gIHZhciBjYWxjdWxhdGVSYXRpbyA9IHtcclxuICAgICRpbWFnZVRvcDogJCgnLnNsaWRlLXdyYXAnKSxcclxuICAgICRpbWFnZUJpZzogJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKSxcclxuICAgICRpbWFnZVRodW1iOiAkKCcuc2xpZGUtbGlzdC1pbWFnZScpLFxyXG4gICAgYXJlYVdpZHRoOiAwLFxyXG4gICAgYXJlYUhlaWdodDogMCxcclxuICAgIGltYWdlV2lkdGg6IDAsXHJcbiAgICBpbWFnZUhlaWdodDogMCxcclxuICAgIGFyZWFSYXRpbzogMCxcclxuICAgIGltYWdlUmF0aW86IDAsXHJcblxyXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmFyZWFXaWR0aCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnd2lkdGgnKSk7XHJcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmFyZWFSYXRpbyA9IHRoaXMuYXJlYVdpZHRoIC8gdGhpcy5hcmVhSGVpZ2h0O1xyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24gKCRpbWFnZSkge1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCgkaW1hZ2UuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCRpbWFnZS5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgdGhpcy5pbWFnZVJhdGlvID0gdGhpcy5pbWFnZVdpZHRoIC8gdGhpcy5pbWFnZUhlaWdodDtcclxuICAgIH0sXHJcblxyXG4gICAgYXBwbHlCaWcgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XHJcbiAgICAgIGlmICh0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbykge1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtd2lkdGgnKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuJGltYWdlVGh1bWIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvKSB7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnNsaWRlLXdyYXAtYmlnaW1hZ2UnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlUaHVtYigpO1xyXG5cclxuICAkKCcuc2xpZGUtbGlzdC1pdGVtJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcbiAgJCgnLnNsaWRlJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQoJy5zbGlkZS1saXN0LWl0ZW0nKS5lcSgwKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMTEuXHJcbiAqL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmd1aWRlLWJveCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuZ3VpZGUtYm94LWhlYWRpbmcnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5ndWlkZS1ib3gnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmd1aWRlLWJveC1oZWFkaW5nJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTAyLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHJvdXRlPSBbXHJcbiAgICAgICfsnbjsgqzrj5kt7IyI7KeA6ri4LeuWoeuwleusvOq0gC3sooXrrJgt67mE7JuQLeywveqyveq2gScsXHJcbiAgICAgICfqsr3rs7XqtoEt6rWt66a966+87IaN67CV66y86rSALeyCvOyyreuPmeq4uC3ssL3rjZXqtoEnLFxyXG4gICAgICAnRERQLeuPmeuMgOusuC3qtJHsnqXsi5zsnqUt7KKF66yYJyxcclxuICAgICAgJ+uMgO2VmeuhnC3rp4jroZzri4jsl5Dqs7Xsm5At64KZ7IKw6rO17JuQLeydtO2ZlOuyve2ZlOuniOydhC3ssL3qsr3qtoEnLFxyXG4gICAgICAn7LKt6rOE7LKcJuyyreqzhOq0keyepS3qta3rpr3tmITrjIDrr7jsiKDqtIAoTU1DQSkt67aB7LSM7ZWc7Jil66eI7J2ELeqyveuzteq2gSdcclxuICBdO1xyXG4gIHZhciB0aW1lRGlzdGFuY2UgPSBbXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAzNeu2hCAsIOydtOuPmeqxsOumrCA6IDIuMTdrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAzMOu2hCAsIOydtOuPmeqxsOumrCA6IDIuMDNrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAyNeu2hCAsIOydtOuPmeqxsOumrCA6IDEuOTFrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAyNeu2hCAsIOydtOuPmeqxsOumrCA6IDEuODJrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiA0MOu2hCAsIOydtOuPmeqxsOumrCA6IDIuMjNrbSdcclxuICBdO1xyXG5cclxuXHJcbiAgJCgnLmNvdXJzZS1saXN0LWl0ZW0+aW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaHRtbE5vZGUgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCcuY291cnNlLWxpc3QtaXRlbScpO1xyXG5cclxuICAgIGh0bWxOb2RlICs9ICc8ZGl2IGNsYXNzPVwiY291cnNlLXdyYXBcIj4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwicm91dGVcIj4nICsgcm91dGVbaW5kZXhOdW1iZXJdICsgJzwvcD4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwidGltZS1kaXN0YW5jZVwiPicgKyB0aW1lRGlzdGFuY2VbaW5kZXhOdW1iZXJdICsgJzwvcD4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5odG1sKGh0bWxOb2RlKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jb3Vyc2UtbGlzdC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyDslYTrnqvspIQg66qo7IWY7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICQoJy5jb3Vyc2UtdmlldycpLmFkZENsYXNzKCdmcmFtZTEnKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvLyDsmbzsqr0g7KSEIOuqqOyFmCDsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgICAkKCcuY291cnNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAgIC8vIOyYpOuluOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAwLjXstIhcclxuICAgICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcblxyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyDsnJfspIQg66qo7IWYXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAkKCcuY291cnNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTMnKTtcclxuXHJcbiAgICB9LCA2MDApO1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDkuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc3RhcnQgPSB0cnVlO1xyXG5cclxuICAkKCcucGxhY2UtbGlzdC1pdGVtPmlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgcGxhY2UgPSBbXHJcbiAgICAgICfqsr3rs7XqtoEnLCAn6rSR7J6l7Iuc7J6lJywgJ+uCmeyCsOqzteybkCcgLCfrjIDrprzrr7jsiKDqtIAnLCAn64+Z64yA66y4JyxcclxuICAgICAgJ+u2gey0jO2VnOyYpeuniOydhCcsICfsgrzssq3qs7Xsm5AnLCAn7IyI7KeA6ri4JywgJ+yiheusmCcsICfssL3qsr3qtoEnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBodG1sTm9kZSA9ICcnO1xyXG4gICAgdmFyIGNob2ljZVBsYWNlID0gJyc7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5wYXJlbnQoKS5pbmRleCgnLnBsYWNlLWxpc3QtaXRlbScpO1xyXG5cclxuICAgIGNob2ljZVBsYWNlICs9IHBsYWNlW2luZGV4TnVtYmVyXTtcclxuXHJcbiAgICBpZiggc3RhcnQgKXtcclxuXHJcbiAgICAgIGh0bWxOb2RlICs9ICc8ZGl2IGNsYXNzPVwicGxhY2Utd3JhcFwiPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cImNob2ljZS1wbGFjZVwiPicgKyBjaG9pY2VQbGFjZSArICc8L3A+JztcclxuICAgICAgaHRtbE5vZGUgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0JykuaHRtbChodG1sTm9kZSk7XHJcbiAgICAgIHN0YXJ0ID0gZmFsc2U7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGh0bWxOb2RlICs9ICc8cCBjbGFzcz1cImNob2ljZS1wbGFjZVwiPic7XHJcbiAgICAgIGh0bWxOb2RlICs9ICctICAnICsgY2hvaWNlUGxhY2UgKyAnPC9wPic7XHJcblxyXG4gICAgICAkKCcucGxhY2Utc2VsZWN0IC5wbGFjZS13cmFwJykuYXBwZW5kKGh0bWxOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wbGFjZS1yZWxvYWQtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucGxhY2UtbGlzdC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcucGxhY2UtcmVsb2FkLWJ0bicpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIC8vIOyVhOueq+ykhCDrqqjshZjsoIHsmqkg7YG0656Y7IqkIC0gMey0iFxyXG4gICAgJCgnLnBsYWNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUxJyk7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLy8g7Jm87Kq9IOykhCDrqqjshZgg7KCB7JqpIO2BtOuemOyKpCAtIDHstIhcclxuICAgICAgJCgnLnBsYWNlLXZpZXcnKS5hZGRDbGFzcygnZnJhbWUyJyk7XHJcbiAgICAgIC8vIOyYpOuluOyqvSDspIQg66qo7IWYIOyggeyaqSDtgbTrnpjsiqQgLSAwLjXstIhcclxuICAgICAgJCgnLnBsYWNlLXNlbGVjdCcpLmFkZENsYXNzKCdmcmFtZTInKTtcclxuXHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIOycl+ykhCDrqqjshZhcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICQoJy5wbGFjZS1zZWxlY3QnKS5hZGRDbGFzcygnZnJhbWUzJyk7XHJcblxyXG4gICAgfSwgNjAwKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCJcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy50aXAtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLnRpcC1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRsaXN0TGluayApe1xyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy50aXAtbGlzdC1kZXRhaWwnKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnRpcC1saXN0LWxpbmsnKS5kYXRhKCdvcGVuJyAsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsIFwiI2RkZFwiKTtcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLnRpcC1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0xOC5cclxuICovXHJcblxyXG4kKCcucGhvdG8tbGlzdC1pdGVtJykub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcbiAgJCh0aGlzKS5jaGlsZHJlbignLnBob3RvLWxpc3QtaXRlbS1tYXNrLWhlYWRpbmcnKS5hZGRDbGFzcygnb24nKTtcclxufSk7XHJcblxyXG4kKCcucGhvdG8tbGlzdC1pdGVtJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICQodGhpcykuY2hpbGRyZW4oJy5pdGVtLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcblxyXG59KTtcclxuJCgnLmJ0bi1wb3AtY2xvc2UnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgJCh0aGlzKS5wYXJlbnRzKCcuaXRlbS13cmFwJykuY3NzKHtcclxuICAgIGhlaWdodCA6MCxcclxuICAgIHRyYW5zaXRpb24gOiAnaGVpZ2h0IDFzIGVhc2Utb3V0J1xyXG4gIH0pO1xyXG4gICQoJy5yZXZpZXcnKS5jc3Moe1xyXG4gICAgJ3BhZGRpbmctYm90dG9tJyA6IDAsXHJcbiAgICB0cmFuc2l0aW9uIDogJ3BhZGRpbmctYm90dG9tIC41cyBlYXNlLW91dCdcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5mYXEtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLmZhcS1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsIFwiI2RkZFwiKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuXHJcbiAgJCgnLmZhcS1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoJCh0aGlzKSk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
