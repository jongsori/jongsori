
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmIuanMiLCJfanNyXzNfMV8xLmpzIiwiX2pzcl80XzEuanMiLCJfanNyXzRfMy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Impzcl80XzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIGduYiBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5nbmItZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ25iLWRlcHRoMS1saW5rJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykubmV4dCgnLmduYi1kZXB0aDItd3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDItd3JhcCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCcuZ25iLWRlcHRoMi13cmFwJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmduYi1kZXB0aDItbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5wYXJlbnRzKCcuZ25iLWRlcHRoMi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTAyLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHJvdXRlPSBbXHJcbiAgICAgICfsnbjsgqzrj5kt7IyI7KeA6ri4LeuWoeuwleusvOq0gC3sooXrrJgt67mE7JuQLeywveqyveq2gScsXHJcbiAgICAgICfqsr3rs7XqtoEt6rWt66a966+87IaN67CV66y86rSALeyCvOyyreuPmeq4uC3ssL3rjZXqtoEnLFxyXG4gICAgICAnRERQLeuPmeuMgOusuC3qtJHsnqXsi5zsnqUt7KKF66yYJyxcclxuICAgICAgJ+uMgO2VmeuhnC3rp4jroZzri4jsl5Dqs7Xsm5At64KZ7IKw6rO17JuQLeydtO2ZlOuyve2ZlOuniOydhC3ssL3qsr3qtoEnLFxyXG4gICAgICAn7LKt6rOE7LKcJuyyreqzhOq0keyepS3qta3rpr3tmITrjIDrr7jsiKDqtIAoTU1DQSkt67aB7LSM7ZWc7Jil66eI7J2ELeqyveuzteq2gSdcclxuICBdO1xyXG4gIHZhciB0aW1lRGlzdGFuY2UgPSBbXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAzNeu2hCAsIOydtOuPmeqxsOumrCA6IDIuMTdrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAzMOu2hCAsIOydtOuPmeqxsOumrCA6IDIuMDNrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAyNeu2hCAsIOydtOuPmeqxsOumrCA6IDEuOTFrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiAyNeu2hCAsIOydtOuPmeqxsOumrCA6IDEuODJrbScsXHJcbiAgICAgICfsmIjsg4HshozsmpTsi5zqsIQgOiA0MOu2hCAsIOydtOuPmeqxsOumrCA6IDIuMjNrbSdcclxuICBdO1xyXG5cclxuXHJcbiAgJCgnLmNvdXJzZS1saXN0LWl0ZW0+aW5wdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaHRtbE5vZGUgPSAnJztcclxuXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCcuY291cnNlLWxpc3QtaXRlbScpO1xyXG5cclxuICAgIGh0bWxOb2RlICs9ICc8ZGl2IGNsYXNzPVwiY291cnNlLXdyYXBcIj4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwicm91dGVcIj4nICsgcm91dGVbaW5kZXhOdW1iZXJdICsgJzwvcD4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzxwIGNsYXNzPVwidGltZS1kaXN0YW5jZVwiPicgKyB0aW1lRGlzdGFuY2VbaW5kZXhOdW1iZXJdICsgJzwvcD4nO1xyXG4gICAgaHRtbE5vZGUgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgJCgnLmNvdXJzZS1zZWxlY3QnKS5odG1sKGh0bWxOb2RlKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCJcclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgJCgnLnRpcC1saXN0LWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcbiAgICAkKCcudGlwLWxpc3QtZGV0YWlsJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoeyAnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCkgfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogJGxpc3RMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZmZjZDEyXCIpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVDbG9zZSggJGxpc3RMaW5rICl7XHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnRpcC1saXN0LWRldGFpbCcpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcudGlwLWxpc3QtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRsaXN0TGluayApe1xyXG5cclxuICAgICRsaXN0TGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJykuY3NzKFwiY29sb3JcIixcIiNkZGRcIik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy50aXAtbGlzdC1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICQoJy5mYXEtbGlzdC1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG4gICAgJCgnLmZhcS1saXN0LWRldGFpbCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKHsgJ2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpIH0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodCA6ICRsaXN0TGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRsaXN0TGluay5kYXRhKHsnb3BlbicgOiAndHJ1ZSd9KS5hZGRDbGFzcygndXAnKS5jc3MoXCJjb2xvclwiLFwiI2ZmY2QxMlwiKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRsaXN0TGluayApe1xyXG4gICAgJGxpc3RMaW5rLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5mYXEtbGlzdC1kZXRhaWwnKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAkbGlzdExpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmZhcS1saXN0LWxpbmsnKS5kYXRhKCdvcGVuJywgJ2ZhbHNlJykucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51U2VsZkNsb3NlKCAkbGlzdExpbmsgKXtcclxuXHJcbiAgICAkbGlzdExpbmsubmV4dCgpLmNzcyh7XHJcbiAgICAgIGhlaWdodDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgJGxpc3RMaW5rLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpLmNzcyhcImNvbG9yXCIsXCIjZGRkXCIpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcuZmFxLWxpc3QtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBtZW51U2VsZkNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSk7XHJcbiJdfQ==
