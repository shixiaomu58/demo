  $(function(){
        $(".news-user-frame li").mouseover(function(){//
            if(!($(this).is(":animated")&&$(this).hasClass("isLoaded"))){
                 //1、将其他li下的左下文字部分的透明度设置为1
                 $(this).siblings("li").find(".user-play-bg-name").animate({opacity:1});
                 //2、将当前li的宽度拉到422px,用300毫秒实现
                $(this).animate({width:"422px"},300,function(){ 
                 });
                 //2、将其他li的宽度拉到150px,用300毫秒实现
                 $(this).siblings("li").animate({width:"150px"},300);
                //3、隐藏其他li的h4
                $(this).siblings("li").find("h4").hide();
                //5、将其他li的左上文字隐藏
                 $(this).siblings("li").find(".user-play-text").hide();
                //6、将其他li下点击查看的按钮隐藏
                $(this).siblings("li").find(".button-user-play").hide();
 
                 //3、显示当前li的h4
                 $(this).find("h4").show();
                 //4、将其他li的左上图片显示
                 $(this).siblings("li").find(".iocn-user-em").show();
                 
                 //1、将左下的文字部分的透明度设置为0,就是隐藏
                 $(this).find(".user-play-bg-name").animate({opacity:0},1);
                  //4、将当前li的左上的图片隐藏
                  $(this).find(".iocn-user-em").hide();
                  //5、将当前li的左上文字显示出来
                  $(this).find(".user-play-text").show();
                  //6、将当前li下点击查看的按钮显示出来
                  $(this).find(".button-user-play").show();
                 //7、加上已加载的样式
                 $(this).addClass("isLoaded");
                  //7移除已加载的样式
                  $(this).siblings("li").removeClass("isLoaded");
            }
            function liMouseLeveal(){
                 //1、有的li移除已加载的样式
                 $(".news-user-frame li").removeClass("isLoaded");
                 //2、将每个li的左上图片显示，左下文字显示（透明度设为1），左上文字、点击查看按钮隐藏，将h4显示
                 $(".news-user-frame li").find(".user-play-text").hide();//左上文字
                 $(".news-user-frame li").find(".button-user-play").hide();//点击查看按钮
                 $(".news-user-frame li").animate({width:"241px"},300);//宽度设为241px
                 $(".news-user-frame li").find("h4").show();//h4
                 $(".news-user-frame li").find(".user-play-bg-name").animate({opacity:1});//左下文字
                 $(".news-user-frame li").find(".iocn-user-em").show();//左上图片
             }
            $(".news-user-frame").mouseout(function(){
            liMouseLeveal();
            })
            })
          })
         
