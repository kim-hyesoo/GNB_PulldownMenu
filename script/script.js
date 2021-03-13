$(function(){
    $("gnb>ul#mainMenu>li").mouseover(function(){
        $(this).children("ul").stop().fadeIn(1000);
         // $(this).children("ul").stop().slideDown(800);
    });
     $("#gnb>ul#mainMenu>li").mouseout(function () {
         $(this).children("ul").stop().fadeOut(400);
         // $(this).children("ul").stop().slideUp(800);
     });
});
