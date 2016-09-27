$(document).ready(function () {
	var s5Swiper;
	
	$('html').niceScroll();

	function resizeLayout(){

		var w = $(window).width();
		var h = $(window).height();
		var screenRatio = w/h;
		
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
		if (isAndroid) {
			$('.section.s1').css('min-height',h+'px');	
			$('.section.s1 .i1').css('height',h+'px');	
		}
		
		//console.log(screenRatio);

		if (w > 1800 || screenRatio > 2.6){
			$('#index .section.s1 .i1').css('background-size', '130% auto');
		}else{
			$('#index .section.s1 .i1').css('background-size', 'auto 130%');
		}
		if (w > 1700){
			$('#index .section.s2').css('background-size', '100% auto');
		}else{
			$('#index .section.s2').css('background-size', 'auto 130%');
		}
		if (w > 1000){
			$('#index .section.s6').css('background-size', '120% auto');
		}else{
			$('#index .section.s6').css('background-size', 'auto 130%');
		}
		// if (w > 1500){
		// 	$('#index .section.s3 .left').css('background-size', '100% auto');
		// 	$('#index .section.s3 .right').css('background-size', '100% auto');
		// }else{
			$('#index .section.s3 .left').css('background-size', 'auto 130%');
			$('#index .section.s3 .right').css('background-size', 'auto 130%');
		// }

		// if (w<=1000){
		// 	s5Swiper.swipeTo(2,300,false);
		// }else if (w<=1400){
		// 	s5Swiper.swipeTo(1,300,false);
		// }else{
		// 	s5Swiper.swipeTo(0,300,false);
		// }
		
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
	
	var s2Swiper = new Swiper('.s2 .swiper-container',{					
		//loop: true,
		slidesPerView:'auto',
		calculateHeight:true
	});  
	
	var s4Swiper = new Swiper('.s4 .swiper-container',{					
		//loop: true,
		slidesPerView:'auto',
		calculateHeight:true
	});  
	s5Swiper = new Swiper('.s5 .swiper-container',{					
		//loop: true,
		speed: 1000,
		slidesPerView:'auto',
		calculateHeight:true
	}); 
	var s7Swiper = new Swiper('.s7 .swiper-container',{					
		//loop: true,
		slidesPerView:'auto',
		calculateHeight:true
	});  
	var s8Swiper = new Swiper('.s8 .swiper-container',{					
		//loop: true,
		slidesPerView:'auto',
		calculateHeight:true
	});  
		
	$('.s1 .prevBtn').bind('click touchstart',function(){
		s1Swiper.swipePrev();
		updateArrow();
	});
	
	$('.s1 .nextBtn').bind('click touchstart',function(){
		s1Swiper.swipeNext();					
		updateArrow();
	});

	$('.s2 .prevBtn').bind('click',function(){
		s2Swiper.swipePrev();
	});
	
	$('.s2 .nextBtn').bind('click',function(){					
		s2Swiper.swipeNext();
	});	
	
	$('.s7 .prevBtn').bind('click',function(){
		s7Swiper.swipePrev();
	});
	
	$('.s7 .nextBtn').bind('click',function(){					
		s7Swiper.swipeNext();
	});	
	
	$('.s8 .prevBtn').bind('click',function(){
		s8Swiper.swipePrev();
	});
	
	$('.s8 .nextBtn').bind('click',function(){					
		s8Swiper.swipeNext();
	});	
	
	
	$('.s5 .prevBtn').bind('click',function(){
		// s5Swiper.swipePrev();
		var w = $(window).width();
		var currentIndex = s5Swiper.activeIndex;
		if (w>1400){
			var goToIndex = currentIndex-6;
			if (goToIndex<0){
				goToIndex = 0;
			}
			s5Swiper.swipeTo(goToIndex,1000,false);
		}else if (w>1000){
			var goToIndex = currentIndex-6;
			if (goToIndex<0){
				goToIndex = 0;
			}
			s5Swiper.swipeTo(goToIndex,1500,false);
		}else{
			var goToIndex = currentIndex-3;
			if (goToIndex<0){
				goToIndex = 0;
			}
			s5Swiper.swipeTo(goToIndex,1500,false);
		} 
	});
	
	$('.s5 .nextBtn').bind('click',function(){					
		// s5Swiper.swipeNext();
		var w = $(window).width();
		var currentIndex = s5Swiper.activeIndex;
		if (w>1400){
			var goToIndex = currentIndex+6;
			s5Swiper.swipeTo(goToIndex,1000,false);
		}else if (w>1000){
			var goToIndex = currentIndex+6;
			s5Swiper.swipeTo(goToIndex,1500,false);
		}else{
			var goToIndex = currentIndex+3;
			s5Swiper.swipeTo(goToIndex,1500,false);
		} 
	});	
	

	resizeLayout();

	function updateArrow(){
		var currentSlide = $(s1Swiper.activeSlide()).attr('rel');
		if(currentSlide == 'slide2'){
			$('#index .section.s1 .prevBtn').css({
				'background':'url("images/0.1_home_expand_output-assets/arrows_black_up.png") 50% 50% no-repeat',
				'background-size':'38px'
			});
			$('#index .section.s1 .nextBtn').css({
				'background':'url("images/0.1_home_expand_output-assets/arrows_black_down.png") 50% 50% no-repeat',
				'background-size':'38px'
			});
			$('#index .section.s1').addClass('slide2');
		}else{
			$('#index .section.s1 .prevBtn').css({
				'background':'url("images/0.0_home_output-assets/arrows_white_up.png") 50% 50% no-repeat',
				'background-size':'38px'
			});
			$('#index .section.s1 .nextBtn').css({
				'background':'url("images/0.0_home_output-assets/arrows_white_down.png") 50% 50% no-repeat',
				'background-size':'38px'
			});
			$('#index .section.s1').removeClass('slide2');
		}
	}
	
	var map;
	var mapCenter = new google.maps.LatLng(22.314644, 114.219711);

	function initialize() {
		// Create an array of styles.
		var styles = [ { "stylers": [ { "saturation": -100 }, { "lightness": 29 } ] } ] ;

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

		// Create a map object, and include the MapTypeId to add
		// to the map type control.
		var mapOptions = {
			zoom: 17,
			scrollwheel: false,
			center: mapCenter,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};
		
		map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');					
		
		var markerImage = new google.maps.MarkerImage('images/0.0_home_output-assets/map_location.png', new google.maps.Size(129, 129), null, new google.maps.Point(64, 65));

		var myLatlng = new google.maps.LatLng(22.314644, 114.219711);
		
		var beachMarker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: markerImage
		});
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(mapCenter);
	});

	// $(window).stellar({
	// 	horizontalScrolling: false,
	// 	responsive: true
	// });
			
	// $(window).scroll(function() {
	// 	var yPos = $(window).scrollTop();
	// 	var slide1H = $('section.s1').height();
	// 	//console.log(yPos+','+slide1H);
	// 	if(yPos > 10){
	// 		$('nav').addClass('overlay');						
	// 		//$('.navbar-header').addClass('overlay');						
	// 	}else{
	// 		$('nav').removeClass('overlay');			
	// 		//$('.navbar-header').removeClass('overlay');			
	// 	}
	// }); 

	$("#cover").delay(500).fadeOut(800);

	// $('a').each(function(){
	
	// 	$(this).bind('click', function(){
	// 		href_url = $(this).attr('href');
		
	// 			$("#cover").fadeIn({duration:800, easing:"linear", complete:function(){ location.href = href_url; }});
	// 			return false;
	// 	});
	// });
});