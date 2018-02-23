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