
if($(window).width() > 680 ){
	$('#category').ddslick({
		width:660,
		onSelected: function(data){
			if(data.selectedData.value=="all"){
				$('.resultContainer .result').show();
			}else{
				$('.resultContainer .result').hide();
				$('.resultContainer .'+data.selectedData.value.replace(/\s+/g, "-")).show();
			}
			$('.result').removeClass('lastResult');
			$('.result:visible').last().addClass('lastResult');
		}
	});
}else{
	$('#category').ddslick({
		width:260,
		onSelected: function(data){
			if(data.selectedData.value=="all"){
				$('.resultContainer .result').show();
			}else{
				$('.resultContainer .result').hide();
				$('.resultContainer .'+data.selectedData.value.replace(/\s+/g, "-")).show();
			}
			$('.result').removeClass('lastResult');
			$('.result:visible').last().addClass('lastResult');
		}
	});
}


$('.result').removeClass('lastResult');
$('.result:visible').last().addClass('lastResult');

$('.result').click(function(){
	window.location.href="news.html#"+$(this).attr("data-name")
	$.ajax({
		url: "asset/news/"+getParams(window.location.href)+".html",
		type: 'GET',
		success: function(content){
			$(".newslist").fadeOut(1000,function(){
				$(".newsview").show();
				window.location.href="#"+getParams(window.location.href)
			});
			$(".newsview").html(content);
			$('html').getNiceScroll().resize();
		}
	});
});

