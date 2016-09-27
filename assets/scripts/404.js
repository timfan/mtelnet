$(document).ready(function () {
	$('html').niceScroll();
	$('header').load('header.html',function(){
		$('footer').load('footer.html',function(){
			$('html').niceScroll();
		});
	});

	function resizeLayout(){

		var w = $(window).width();
		var h = $(window).height();
		var screenRatio = w/h;  
		//$('.section.s1').css('height',h+'px');    

		//console.log(screenRatio);

		if (w > 1800 || screenRatio > 2.6){
			$('#index .section.s1 .i1').css('background-size', '130% auto');
		}else{
			$('#index .section.s1 .i1').css('background-size', 'auto 130%');
		}

		
	}

	$( window ).resize(function() {
		resizeLayout();
	});

	var s1Swiper = new Swiper('.s1 .swiper-container',{
		mode:'vertical',
		speed:1000,
		simulateTouch:false,
		//loop: true,
		onlyExternal:true
	});  

	resizeLayout();
			
	$("#cover").delay(500).fadeOut(800);


});