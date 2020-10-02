$(document).ready(function(){
	$(".jieshao").animate({"left":"40%","top":"40%"},3000,function(){
		$(".button").css("display:none"                                                                                                                       )
	});
	$(".jieshao .x").click(function(){
		$(".jieshao").remove();
	})
	$(window).scroll(function(){
		var shuzi = $(document).scrollTop()+$(window).height();
		if( Math.ceil(shuzi) >= $(document).height()){
			alert('到底啦');
		}
	})
	$("#up").click(function(){
			$(".test").slideUp(3000);
	})
	$("#down").click(function(){
		$(".test").slideDown(3000);
	})
	$("#stop").click(function(){
		$(".test").stop();	
	})
	var str = ''; 
	$("#yanzhengmabotton").click(function(){
				str = ''; //用来装验证码
				var a,n=0;
				for(var i=0;i>=0;i++){ //random =>[0,10)
					//str+= Math.floor(Math.random()*10);
					a = Math.floor(Math.random()*122);
					if(a >=0 && a<=9){
						str+=a;
						n++;
					}else if( (a>=65 && a<=90) || (a>=97 && a<=122) ){
						//进行转码 unicode=》字母
						//fromCharcode
						str+=String.fromCharCode(a);
						n++;
					}else{
						//其他不做处理
					}
					if(n == 6){
						break;
					}
				}
		$(".yanzhengma p").html(str);
	})
		
	$("ul li").hover(function(){
		$(".yanzhengma p").html("<p>ok</p>");
		$("li .yingxiong").css("display","block");
	},function(){
		$(".yanzhengma p").html("<p>right</p>");
		$("li .yingxiong").css("display","none");	
	})
})
