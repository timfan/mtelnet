$('.return').click(function(){
	window.location.href="news.html#"
	$(".newslist").load("newsList.html");
	$(".newsview").fadeOut(1000,function(){
		$(".newslist").show();
		$(".newslist").ready(function(){
			$('html').getNiceScroll().resize();
		});
	});
});