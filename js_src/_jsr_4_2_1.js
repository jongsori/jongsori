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


