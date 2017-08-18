/**
 * Created by Administrator on 2017-08-18.
 */

$('.photo-list-item-mask').on('click',function(){
  $('.item-wrap').css({
    height :0
  });
  $(this).parent().next().css({
    height : 690,
    transition : 'height .5s ease-out'
  });
  $('.review').css({
    'padding-bottom' : 690,
    transition : 'padding-bottom .5s ease-out'
  });

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


