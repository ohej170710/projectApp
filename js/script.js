
var slideIndex = 0;

function slideFunc(){
	$("#banner>li").removeClass("topImg");
	slideIndex++;
	var liIndex = slideIndex % 3;
	if(liIndex == 0){
		$("#banner>li").eq(liIndex).addClass("topImg");
	}else if(liIndex == 1){
		$("#banner>li").eq(liIndex).addClass("topImg");
	}else if(liIndex == 2){
		$("#banner>li").eq(liIndex).addClass("topImg");
	}
}	

function prevFun(){
	$("#banner").append($("#banner li").first().clone());
	$("#banner li").first().remove();
}

var slideAuto = setInterval("slideFunc()",3000);

$("#banner, #current_wrap").hover(function(){
	clearInterval(slideAuto);
},function(){
	slideAuto = setInterval("slideFunc()",3000);
});


function nextFun(){
	$("#banner").prepend($("#banner li").last().clone());
	$("#banner li").last().remove();
}


/*검색창*/
$(".search").click(function(){
    $("#search_bg").fadeIn();
    $("#search_bg").css("display","block"); 
    return false;
});

$("#closedBtn").click(function(){
	$("#search_bg").fadeOut();
    $("#search_bg").css("display","none");
});


$("#menu_btn").click(function(){
	$("nav").fadeToggle(200);
	$(this).toggleClass("menuAni");
});



var SlideWidth = 380; // 슬라이드 (이동) 할애의 가로 사이즈
function recommendNext(){
    $(".recommend_wrap ul").animate({"left":"-"+SlideWidth+"px"},function(){
        $(".recommend_wrap ul").css("left",0);
    });
    $(".recommend_wrap ul").append($(".recommend_wrap ul li").first().clone());
    $(".recommend_wrap ul li").first().remove();
}
function recommendPrev(){
	    $(".recommend_wrap ul").animate({"left":"-"+SlideWidth+"px"},function(){
        $(".recommend_wrap ul").css("left",0);
    });
    $(".recommend_wrap ul").prepend($(".recommend_wrap ul li").last().clone());
    $(".recommend_wrap ul li").last().remove();
}



var mdpickWidth = 275; // 슬라이드 (이동) 할애의 가로 사이즈
function mdpickNext(){
    $(".mdpick_wrap").animate({"left":"-"+mdpickWidth+"px"},function(){
        $(".mdpick_wrap").css("left",0);
    });
    $(".mdpick_wrap").append($(".mdpick_wrap ul").first().clone());
    $(".mdpick_wrap ul").first().remove();
}
function mdpickPrev(){
    $(".mdpick_wrap").animate({"left":"-"+mdpickWidth+"px"},function(){
        $(".mdpick_wrap").css("left",0);
    });
    $(".mdpick_wrap").prepend($(".mdpick_wrap ul").last().clone());
    $(".mdpick_wrap ul").last().remove();
}
