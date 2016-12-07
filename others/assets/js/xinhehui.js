$(function(){
    /*你的代码我先注释了*/
/*    var a=$(".news-user-frame"),
    b=a.find("li")

        //首先对于对b来讲他已经是一个选择器对象了，所以在使用b是不需要$("b"),可以是$(b)或者b，括号里面的""可以去掉,所以导致你打开页面的时候没有效果
        $("b").mouseover(function(){
            c=$(this),//将当前的li赋值给c
            d=c.find(".user-play-bg-name"),//将当前li的左下的文字赋值给d
            e=c.find(".button-user-play"),//将当前li的点击查看的按钮赋值给e
            f=c.find(".iocn-user-em icon-user-zhiyin"),//将当前li的左上的图片赋值给f
            g=c.find(".user-play-text")//将当前li的左上的文字赋值给g
            $("li").animate({"width":'422px'});
            c.siblings().animate({"width":'150px'});//其实对width外面的""可以去掉{width:"150px"}
            d.css("opacity","0"),
            e.css("display","inline"),
            f.css("display","none"),
            g.css("display","block"),
            c.find("h4").show(),
            c.siblings().find("h4").hide()
            //上面的这部分操作只是对当前li的操作，没有对其他li的操作，除了h4，这样应该会出问题的
        });
        $("b").mouseout(function(){
         $("li").animate({"width":'241px'});
         c.siblings().animate({"width":'2410px'});
         d.css("opacity","1"),
         e.css("display","none"),
         f.css("display","inline-block"),
         g.css("display","none"),
         a.find("h4").show()

     });*/
        /*
        下面是我的思路，
        1、当我们把鼠标放上去的时候，我们先判断当前li是否已经展开了，如果展开了则只要对其他li进行只显示150宽度的操作，并将其对应的左上的图片、左下的文字显示出来，其他的都隐藏起来，并设置对应的透明度
        2、假如当前li没展开，那么我们就需要对其做展开操作，
        a、将左下文字部分的透明度设置为0,将宽度设置为422px;
        b、将左上的图片、左下的文字隐藏掉，将h4显示出来，将左上的文字和中间那部分的点击查看的按钮显示出来
        c、对其他li进行只显示150宽度的操作，并将其对应的左上的图片、左下的文字显示出来，其他的都隐藏起来，并设置对应的透明度
        */

        var a=$(".news-user-frame"),
        b=a.find("li");
        //绑定鼠标放上去事件
        $(b).mouseover(function(){//经叶老师测试发现，先隐藏一些再显示一些效果比较稍微好点，待改进，动态感不太足，需要稍微调整下显示和隐藏顺序
            var currentLi=this;
            if(!($(currentLi).is(":animated")&&$(currentLi).hasClass("isLoaded"))){//如果当前li没有展开,加上已加载的样式是为了稍微防一下鼠标上上去之后多次执行
                //1、将其他li下的左下文字部分的透明度设置为1
                $(currentLi).siblings().find(".user-play-bg-name").animate({opacity:1});
                //2、将当前li的宽度拉到422px,用300毫秒实现
                $(currentLi).animate({width:"422px"},300,function(){

                });
                //2、将其他li的宽度拉到150px,用300毫秒实现
                $(currentLi).siblings().animate({width:"150px"},300);
                //3、隐藏其他li的h4
                $(currentLi).siblings().find("h4").hide();
                //5、将其他li的左上文字隐藏
                $(currentLi).siblings().find(".user-play-text").hide();
                //6、将其他li下点击查看的按钮隐藏
                $(currentLi).siblings().find(".button-user-play").hide();

                //3、显示当前li的h4
                $(currentLi).find("h4").show();
                //4、将其他li的左上图片显示
                $(currentLi).siblings().find(".iocn-user-em").show();
                
                //1、将左下的文字部分的透明度设置为0,就是隐藏
                $(currentLi).find(".user-play-bg-name").animate({opacity:0},1);
                 //4、将当前li的左上的图片隐藏
                 $(currentLi).find(".iocn-user-em").hide();
                 //5、将当前li的左上文字显示出来
                 $(currentLi).find(".user-play-text").show();
                 //6、将当前li下点击查看的按钮显示出来
                 $(currentLi).find(".button-user-play").show();
                //7、加上已加载的样式
                $(currentLi).addClass("isLoaded");
                 //7移除已加载的样式
                 $(currentLi).siblings().removeClass("isLoaded");
             }
         })
/*       //绑定对li的鼠标移出事件
       function liMouseLeveal(){
        if($(b).is(":animated")){
            setTimeout(function(){
                liMouseLeveal();
            },500)
        }else{
                //1、先对所bbbbbbb有的li移除已加载的样式
                $(b).removeClass("isLoaded");
                //2、将每个li的左上图片显示，左下文字显示（透明度设为1），左上文字、点击查看按钮隐藏，将h4显示
                $(b).find(".user-play-text").hide();//左上文字
                $(b).find(".button-user-play").hide();//点击查看按钮
                $(b).animate({width:"241px"},300);//宽度设为241px
                $(b).find("h4").show();//h4
                $(b).find(".user-play-bg-name").animate({opacity:1});//左下文字
                $(b).find(".iocn-user-em").show();//左上图片
            }
        }
        $(a).mouseout(function(){
            liMouseLeveal();
        })*/
});
/*$(function() {
    var   m = $("#js-news-user-play li"),
    n = null;

    function a(b) {
        m.is(":animated") ? n = setTimeout(function() {
            a()
        }, 500) : (m.removeClass("hm"), m.find(".user-play-bg-name").animate({
            opacity: "1"
        }), m.animate({
            width: "241px"
        }, 300), m.find("h4").show(), m.find(".iocn-user-em").show(), m.find(".user-play-text").hide(), m.find(".user-play-txt").show(), m.find(".button-user-play").hide(), n = null)
    }
    m.animate({
        width: "241px"
    }, 300), m.on("mouseover", function(a) {
        var b = $(this);
        n = null, b.is(":animated") || b.hasClass("hm") || (b.siblings().removeClass("hm"), b.find(".user-play-bg-name").animate({
            opacity: "0"
        }), b.siblings().find(".user-play-bg-name").animate({
            opacity: "1"
        }), b.animate({
            width: "422px"
        }, 300).siblings().animate({
            width: "150px"
        }, 300), b.find("h4").show(), b.siblings().find("h4").hide(), b.find(".iocn-user-em").hide(), b.siblings().find(".iocn-user-em").show(), b.find(".user-play-text").show(), b.siblings().find(".user-play-text").hide(), b.find(".button-user-play").show(), b.siblings().find(".button-user-play").hide()), b.addClass("hm")
    }), $("#js-news-user-play").on("mouseleave", a);
});*/