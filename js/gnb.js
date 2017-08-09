
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

    $listLink.parent().siblings().children('.tip-list-link').data('open', 'false').removeClass('up');
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

    $listLink.parent().siblings().children('.faq-list-link').data('open', 'false').removeClass('up');
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

      menuSelfClose( $(this) );

    }
  });

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzNfMV8xLmpzIiwiX2pzcl80XzEuanMiLCJfanNyXzRfMy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogZ25iIGpRdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5nbmItZGVwdGgxLWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcuZ25iLWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi13cmFwJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcblxyXG4gICQoJy5nbmItZGVwdGgyLXdyYXAnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMi1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLnBhcmVudHMoJy5nbmItZGVwdGgyLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDIuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgcm91dGU9IFtcclxuICAgICAgJ+yduOyCrOuPmS3sjIjsp4DquLgt65ah67CV66y86rSALeyiheusmC3ruYTsm5At7LC96rK96raBJyxcclxuICAgICAgJ+qyveuzteq2gS3qta3rpr3rr7zsho3rsJXrrLzqtIAt7IK87LKt64+Z6ri4LeywveuNleq2gScsXHJcbiAgICAgICdERFAt64+Z64yA66y4Leq0keyepeyLnOyepS3sooXrrJgnLFxyXG4gICAgICAn64yA7ZWZ66GcLeuniOuhnOuLiOyXkOqzteybkC3rgpnsgrDqs7Xsm5At7J207ZmU67K97ZmU66eI7J2ELeywveqyveq2gScsXHJcbiAgICAgICfssq3qs4Tsspwm7LKt6rOE6rSR7J6lLeq1reumve2YhOuMgOuvuOyIoOq0gChNTUNBKS3rtoHstIztlZzsmKXrp4jsnYQt6rK967O16raBJ1xyXG4gIF07XHJcbiAgdmFyIHRpbWVEaXN0YW5jZSA9IFtcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDM167aEICwg7J2064+Z6rGw66asIDogMi4xN2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDMw67aEICwg7J2064+Z6rGw66asIDogMi4wM2ttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS45MWttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDI167aEICwg7J2064+Z6rGw66asIDogMS44MmttJyxcclxuICAgICAgJ+yYiOyDgeyGjOyalOyLnOqwhCA6IDQw67aEICwg7J2064+Z6rGw66asIDogMi4yM2ttJ1xyXG4gIF07XHJcblxyXG5cclxuICAkKCcuY291cnNlLWxpc3QtaXRlbT5pbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBodG1sTm9kZSA9ICcnO1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykucGFyZW50KCkuaW5kZXgoJy5jb3Vyc2UtbGlzdC1pdGVtJyk7XHJcblxyXG4gICAgaHRtbE5vZGUgKz0gJzxkaXYgY2xhc3M9XCJjb3Vyc2Utd3JhcFwiPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJyb3V0ZVwiPicgKyByb3V0ZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPHAgY2xhc3M9XCJ0aW1lLWRpc3RhbmNlXCI+JyArIHRpbWVEaXN0YW5jZVtpbmRleE51bWJlcl0gKyAnPC9wPic7XHJcbiAgICBodG1sTm9kZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAkKCcuY291cnNlLXNlbGVjdCcpLmh0bWwoaHRtbE5vZGUpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIlxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAkKCcudGlwLWxpc3QtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuICAgICQoJy50aXAtbGlzdC1kZXRhaWwnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuXHJcbiAgICAgICQodGhpcykuZGF0YSh7ICdoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKSB9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkbGlzdExpbmsubmV4dCgpLmRhdGEoJ2hlaWdodCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNmZmNkMTJcIik7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkbGlzdExpbmsgKXtcclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtZGV0YWlsJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy50aXAtbGlzdC1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGxpc3RMaW5rICl7XHJcblxyXG4gICAgJGxpc3RMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQ6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2RkZFwiKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLnRpcC1saXN0LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgIG1lbnVPcGVuKCAkKHRoaXMpICk7XHJcbiAgICAgIG1lbnVDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJcclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLmZhcS1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcuZmFxLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmZhcS1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuZmFxLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5mYXEtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIl19
