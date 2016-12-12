$(function(){
    $(".news-user-frame li").mouseover(function(){
        if (!($(this).is(":animated")&&$(this).hasClass("isLoaded"))){
            $(this).addClass("isLoaded");
            $(this).siblings("li").removeClass("isLoaded");
            $(this).siblings("li").animate({"width":"150px"},"fast");//将其余同胞li元素设置动画：宽度快速变为150px.
            $(this).siblings("li").find("h4").hide();//将其余同胞li元素下面的h4设置为隐藏
            $(this).animate({"width":"422px"},"fast");//将当前li元素设置动画：宽度快速变为422px.
            $(this).find("h4").show();//将当前li元素下面的h4设置为隐藏

            $(this).find(".user-play-bg-name").animate({opacity:0});//当前左下角文字设为透明即隐藏
            $(this).find(".button-user-play").show();//当前点击查看按钮设为：可见
            $(this).find(".iocn-user-em icon-user-zhiyin").hide();//当前左上角图片设为：隐藏
            $(this).find(".user-play-text").show();//当前左上角文字设为：可见

            $(this).siblings("li").find(".user-play-bg-name").animate({opacity: 1});//当前左下角文字设为透明即隐藏
            $(this).siblings("li").find(".button-user-play").hide();//当前点击查看按钮设为：可见
            $(this).siblings("li").find(".iocn-user-em icon-user-zhiyin").show();//当前左上角图片设为：隐藏
            $(this).siblings("li").find(".user-play-text").hide();//当前左上角文字设为：可见
        }
      })
   $(".news-user-frame li").mouseout(function(){
        if ($(".news-user-frame li").is(":animated")) {
             setTimeout(function(){
                 mouseout();
             },500)
        }
        else{
             $(".news-user-frame li").removeClass("isLoaded");
             $(".news-user-frame li").find(".user-play-text").hide();//左上文字
             $(".news-user-frame li").find(".button-user-play").hide();//点击查看按钮
             $(".news-user-frame li").animate({width:"241px"},300);//宽度设为241px
             $(".news-user-frame li").find("h4").show();//h4
             $(".news-user-frame li").find(".user-play-bg-name").animate({opacity:1});//左下文字
             $(".news-user-frame li").find(".iocn-user-em").show();//左上图片
        }
     })
})

  