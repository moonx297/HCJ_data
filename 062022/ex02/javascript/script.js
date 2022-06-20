// JavaScript Document

var imgs = 4;
var now = 0;

jQuery(document).ready(function() {       //메뉴에 대한 내용
   $(".nav>li").mouseover(function(){          //마우스를 올릴때 슬라이드 내려라
	$(this).children(".submenu").stop().slideDown();
	});
   $(".nav>li").mouseleave(function(){          //마우스가 떠날때 슬라이드 올려라
	$(this).children(".submenu").stop().slideUp();
   });
   
   start(); 
   
   $(".partner img").click(function (){
      $("#partner_up").addClass("active");
   });
   $("#partner_up button").click(function (){
      $("#partner_up").removeClass("active");
   });
   
});

function start(){
   $(".imgs>img").eq(0).siblings().css({"margin-top":"-800px"});
   setInterval(function(){slide();},2000);
}
function slide(){
   now = now==imgs?0:now+=1;
   $(".imgs>img").eq(now-1).css({"margin-top":"-800px"});   
   $(".imgs>img").eq(now).css({"margin-top":"0px"});
}