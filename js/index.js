/**
 * Created by DYZ on 2017/3/2.
 */
$(function(){
    console.log(123);
    //part1字体显示特效
    $(".myShade").show(function () {
        $(".myIntro>h1").fadeIn(1500,function () {
            $(".myIntro>p").fadeIn(1500,function () {
                $(".myIntro>a").fadeIn(1500);
            });
        });
    })
    //切换背景图片
    var bgCounter = 0,
        backgrounds = [
            "images/BG1.jpg",
            "images/BG2.jpg",
            "images/BG3.jpg"
        ];
    function changeBackground()
    {
        bgCounter = (bgCounter+1) % backgrounds.length;
        //console.log(bgCounter)
        $('.part1').css('background', '#fff url('+backgrounds[bgCounter]+') no-repeat');
        $('.part1').css('background-size', 'cover');
        setTimeout(changeBackground, 5000);
    }
    changeBackground();
    //导航栏滑动到屏幕顶部时固定不动
    var navH = $(".navBar").offset().top;
    $(window).scroll(function() {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if (scroH >= navH) {
            $(".navBar").css({"position": "fixed", "top": 0});
        } else if (scroH<navH)
        {
            $(".navBar").css({"position": "static"});
        }
    });

    //关于我的小导航点击事
    var a=0;
    $(".myText").click(function () {
        $(".myText").css("color","#F07408");
        $(".mySkill").css("color","#7E7E7E");
        $(".myAim").css("color","#7E7E7E");
        $(".myInfo").show();
        $(".skillCon").hide();
        $(".dyzLabel").hide();
        a=0;
    });
    $(".mySkill").click(function () {
        $(".mySkill").css("color","#F07408");
        $(".myText").css("color","#7E7E7E");
        $(".myAim").css("color","#7E7E7E");
        $(".myInfo").hide();
        $(".dyzLabel").hide();
        $(".skillCon").show();
        a=0;
    });
    $(".myAim").click(function () {
        $(".myAim").css("color","#F07408");
        $(".myText").css("color","#7E7E7E");
        $(".mySkill").css("color","#7E7E7E");
        $(".myInfo").hide();
        $(".skillCon").hide();
        a=1;
        if($(window).width()>900){
            $(".myLabel").show();
        }else if($(window).width()<=900&&$(window).width()>516){
            $(".smallLabel").show();
        }else if($(window).width()<=516){
            $(".mobileLabel").show();
        }


    });
    $(window).resize(function(){
        if(a==1){
            if($(window).width()<=900&&$(window).width()>516){
                $(".smallLabel").show();
                $(".myLabel").hide();
                $(".mobileLabel").hide();
            }else if($(window).width()<=516){
                $(".myLabel").hide();
                $(".smallLabel").hide();
                $(".mobileLabel").show();
            }else {
                $(".myLabel").show();
                $(".smallLabel").hide();
                $(".mobileLabel").hide();
            }
        }

    });
    $(".myText").trigger("click");
    //显示小屏菜单
    $(".minMenu").click(function () {
        if($('.minBar').is(':hidden')){
            $('.minBar').show();

        }
        else{
            $('.minBar').hide();
        }
    });
    //当屏幕大于528时如果小菜单显示，将其隐藏起来
    $(window).resize(function(){
        if($(window).width()<=528){
            //do nothing;
        }else {
            $('.minBar').hide();
        }

    });
    //技能移入显示技能详情
    $(".skills").mousemove(function () {
        $(this).find($(".skillName")).css("margin-top","20px");
        $(this).find($(".skillsCon")).show();
    });
    $(".skills").click(function () {
        $(this).find($(".skillName")).css("margin-top", "20px");
        $(this).find($(".skillsCon")).show();
    });
});