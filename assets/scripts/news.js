$(function(){
	$('html').niceScroll();
	if (getParams(window.location.href)!=undefined) {
		$.ajax({
			url: "asset/news/"+getParams(window.location.href)+".html",
			type: 'GET',
			success: function(content){
				$(".newslist").hide();
				$(".newsview").show();
				$(".newsview").html(content);
			}
		});
	}else{
		$(".newsview").hide();
		$(".newslist").load("newsList.html");
		$(".newslist").show();
	}
	
	var subID = '406'; //DEV
	//var subID = '100'; //Prod
	
	$('.subscribeFormBtn').click(function(){
		setTimeout(function(){
			
			var email = $('.subsrcibeInput input[type=email]').val();
			
			var posting = $.post('http://campaignbird.com/sub/'+subID+'/', {
				'Subscriber[subscriber_list_id]': ''+subID,
				'Subscriber[status]': '1',
				'Subscriber[email]':email
			});
			
			posting.done(function( data ) {
				//console.log(JSON.stringify(data,null,'\t'));
				console.log(email);
				console.log(data.indexOf('error')>-1);
			
				if(data.indexOf('error') > -1){
					TINY.box.show({html:'Email is not a valid email address.',width:250,height:50,animate:true,close:true,closejs:function(){
					}});
				}else{
					TINY.box.show({html:'<div><span>Subscription Successful</span><br/><br/></div><div><span>Thank you for subscribing!</span><br/><br/></div>',width:250,height:50,animate:true,close:true,closejs:function(){
					}});
				}
			});		

			posting.fail(function( data ) {				
				TINY.box.show({html:'Email is not a valid email address.',width:250,height:50,animate:true,close:true,closejs:function(){
				}});
			});							
		},500);
	});
});

$('.subscribeBtn').click(function(){
	$(".subscribeBtn").hide();
	$("#news .section .content form").css('display', 'inline-block');
	$('.subsrcibeInput').css('width', '0px');
	$('.subsrcibeInput label').hide();
	if($(window).width()>600){
		$('.subsrcibeInput').animate({
			'width': '300px',
		},{
			duration: 1000,
			easing: 'easeOutQuart',
			complete: function(){
				$('.subsrcibeInput label').show();
			}
		});
	}else{
		$('.subsrcibeInput').animate({
			'width': '140px',
		},{
			duration: 1000,
			easing: 'easeOutQuart',
			complete: function(){
				$('.subsrcibeInput label').show();
			}
		});
	}
});

$(window).resize(function(){
	if($(window).width()>600){
		$('.subsrcibeInput').css('width', '300px');
	}else{
		$('.subsrcibeInput').css('width', '140px');
	}
});

function getParams(url) {
    var queryStart = url.indexOf("#") + 1,
        queryEnd   = url.length + 1,
        query = url.slice(queryStart, queryEnd - 1)

    if (query === url || query === "") {
        return;
    }
    return query;
}