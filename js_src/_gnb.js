
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

  $('.gnb-depth1-link').on('click', function(){

    $(this).addClass('on')

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

  if(depth1 == 'sub1-1'){

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

  if(depth1 == 'sub2') {

    $('.gnb-depth2-link').eq(0).addClass('on');

  }

  if(depth1 == 'sub3'){

    $('.gnb-depth1-link').eq(2).addClass('on');


  } else if(depth2 == 'sub3-1'){

    $('.gnb-depth2-link').eq(0).addClass('on');

  } else if(depth2 == 'sub3-2') {

    $('.gnb-depth2-link').eq(1).addClass('on');
  } else if(depth2 == 'sub3-3') {

    $('.gnb-depth2-link').eq(2).addClass('on');
  }







});