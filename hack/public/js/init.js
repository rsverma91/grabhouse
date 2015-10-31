$(document).ready(function(){
	$("body > div.banner-wrap > div > div > div.rentbutton > input .rentbutton").click(function(){
		$('.rentbutton').css("background","#FF2300");$('.byebutton').css("background","#000000");
	});
	$('.rentbutton').click(function(){
		$('.rentbutton').css("background","#FF2300");$('.byebutton').css("background","#000000");
	});
	$("body > div.banner-wrap > div > div > div.byebutton > input .byebutton").click(function(){
		$('.rentbutton').css("background","#000000");$('.byebutton').css("background","#FF2300");
	});
	$('.byebutton').click(function(){
		$('.rentbutton').css("background","#000000");$('.byebutton').css("background","#FF2300");
	});
});