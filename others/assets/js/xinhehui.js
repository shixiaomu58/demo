$(function(){
    var a=$(".news-user-frame"),
        b=a.find("li")
    $("b").mouseover(function(){
                c=$(this),
                d=c.find(".user-play-bg-name"),
                e=c.find(".button-user-play"),
                f=c.find(".iocn-user-em icon-user-zhiyin"),
                 g=c.find(".user-play-text")
                $("li").animate({"width":'422px'});
                c.siblings().animate({"width":'150px'});
                d.css("opacity","0"),
                e.css("display","inline"),
                f.css("display","none"),
                g.css("display","block"),
                c.find("h4").show(),
                c.siblings().find("h4").hide()
  });
  $("b").mouseout(function(){
                 $("li").animate({"width":'241px'});
                c.siblings().animate({"width":'2410px'});
                d.css("opacity","1"),
                e.css("display","none"),
                f.css("display","inline-block"),
                g.css("display","none"),
                a.find("h4").show()
              
  });

});