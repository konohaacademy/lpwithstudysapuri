$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 3000) {
      $('#sp_btn').addClass('fixed');
    } else {
      $('#sp_btn').removeClass('fixed');
    }
  });
});

//テキストアニメーション
$(document).ready(function(){
    
$(window).on('scroll',function(){

  $(".JS_ScrollAnimationItem").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight+ 150 ){
      $(this).addClass('isActive');
    }
  });
  
 });    
    
});



//徐々にフェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
