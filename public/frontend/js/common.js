function bannerAdsSide(){var n=$(".banner-ads"),s=$(window),a=parseFloat(n.css("top"),10);s.on("scroll",function(){var s=$(this).scrollTop();n.stop().animate({top:s+a},100,"easeOutCirc")})}function changeContentTab(n){$(n).click(function(){var n=$(this).data("content");$(this).siblings().removeClass("active"),$(this).addClass("active"),$(n).siblings().removeClass("active"),$(n).addClass("active")})}function menu(n){$(n).off("click");var s=0;$(n).click(function(){var n=$(this).data("menu");0==s?($(n).addClass("transX0"),$(this).css({background:'url("http://lmhtgosu.besaba.com/dist/images/menu-close.png")'}),s++):($(n).removeClass("transX0"),$(this).css({background:'url("http://lmhtgosu.besaba.com/dist/images/menu-open.png")'}),s--)})}function notify(n){$("body").append("<div class='popup px'><div class='popup-content'><a href='javascript:void(0)' class='close-popup' title='Đóng lại'>X</a><div class='message'></div></div></div>"),$(".popup").fadeIn(),$(".message").html(n),$(".close-popup").click(function(){$(".popup").fadeOut()})}$(document).ready(function(){menu(".open-top-nav"),menu(".open-main-nav"),bannerAdsSide()}),$(".parentMenu>a").on("click",function(){var n=$(this).parent();n.find(".submenu").toggle()});