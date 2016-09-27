$(document).ready(function() {
	var map;
	var mapCenter = new google.maps.LatLng(22.314644, 114.219711);

	function initialize() {
		// Create an array of styles.
		// var styles = [ { "stylers": [ { "saturation": -100 }, { "lightness": 29 } ] } ] ;
		// var styles = [ { "stylers": [ { "saturation": -100 },{"gamma":0.93},{ "lightness": -77 } ] } ] ;
		var styles = [{
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": -77
			}]
		}];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles, {
			name: "Styled Map"
		});

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

		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		var markerImage = new google.maps.MarkerImage('images/7.0_mtel_lab_ouput_assets/find_us_location_2.png', new google.maps.Size(129, 129), null, new google.maps.Point(64, 65));

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
});

var s5Swiper;

$(document).ready(function() {

	/*read more news start*/
	$("#readMoreNews1").click(function() {
		$('#news1_popup').show();
		$(".top_icon.overlay").hide();
	})
	$("#readMoreNews2").click(function() {
		$('#news2_popup').show();
		$(".top_icon.overlay").hide();
	})
	$("#readMoreNews3").click(function() {
		$('#news3_popup').show();
		$(".top_icon.overlay").hide();
	})
	$("#readMoreNews4").click(function() {
			$('#news4_popup').show();
			$(".top_icon.overlay").hide();
		})
		/*read more news end*/

	resizePosition();

	$(" #cd-vertical-nav a").mouseover(function() {
		$(this).children("span").css("opacity", "1");
	});
	$(" #cd-vertical-nav a").mouseout(function() {

		$(this).children("span.cd-label").not(".is-selected .cd-label").css("opacity", "0");
	});

	$('#nav_a_1').addClass('is-selected');
	$("#nav_a_1 .cd-label").css({
		"opacity": "1",
		"-webkit-transform": "scale((1.0))",
		"-moz-transform": "scale((1.0))",
		"-ms-transform": "scale((1.0))",
		"transform": "scale((1.0))"
	});

	$(window).scroll(function() {
		if (($("#section1").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section1").offset().top + $("#section1").height() - $(window).height() / 2 > $(window).scrollTop())) {
			var navigationItems = $('#nav_a_1');
			navigationItems.addClass('is-selected');
			$("#nav_a_1 .cd-label").css({
				"opacity": "1",
				"-webkit-transform": "scale((1.0))",
				"-moz-transform": "scale((1.0))",
				"-ms-transform": "scale((1.0))",
				"transform": "scale((1.0))"
			});
			$(".cd-label").not("#nav_a_1 .cd-label").css({
				"opacity": "0"
			});
			$("#nav_circle li a").not("#nav_a_1").removeClass('is-selected');
			$(" #cd-vertical-nav .cd-dot").css({
				"background-color": "white",
				"border": "solid 5px white"
			});
			$(" #cd-vertical-nav .cd-label").css("color", "white");
			$(" #cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px white"
			});
			$("#line_bg .line_bg_item").css("background-color", "white");

		}

		if (($("#section2").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section2").offset().top + $("#section2").height() - $(window).height() / 2 > $(window).scrollTop())) {

			$(" #cd-vertical-nav .cd-dot").css({
				"background-color": "#ffc716",
				"border": "solid 5px #ffc716"
			});
			$(" #cd-vertical-nav .cd-label").css("color", "#ffc716");
			$(" #cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px #ffc716"
			});
			$("#line_bg .line_bg_item").css("background-color", "#ffc716");

		}

		if (($("#section3").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section3").offset().top + $("#section3").height() - $(window).height() / 2 > $(window).scrollTop())) {
			var navigationItems = $('#nav_a_3');
			navigationItems.addClass('is-selected');
			$("#nav_a_3 .cd-label").css({
				"opacity": "1",
				"-webkit-transform": "scale((1.0))",
				"-moz-transform": "scale((1.0))",
				"-ms-transform": "scale((1.0))",
				"transform": "scale((1.0))"
			});
			$(".cd-label").not("#nav_a_3 .cd-label").css({
				"opacity": "0"
			});

			$("#nav_circle li a").not("#nav_a_3").removeClass('is-selected');
			$(" #cd-vertical-nav .cd-dot").css({
				"background-color": "white",
				"border": "solid 5px white"
			});
			$(" #cd-vertical-nav .cd-label").css("color", "white");
			$(" #cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px white"
			});
			$("#line_bg .line_bg_item").css("background-color", "white");

		}
		if (($("#section4").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section4").offset().top + $("#section4").height() - $(window).height() / 2 > $(window).scrollTop())) {
			var navigationItems = $('#nav_a_4');
			navigationItems.addClass('is-selected');
			$("#nav_a_4 .cd-label").css({
				"opacity": "1",
				"-webkit-transform": "scale((1.0))",
				"-moz-transform": "scale((1.0))",
				"-ms-transform": "scale((1.0))",
				"transform": "scale((1.0))"
			});
			$(".cd-label").not("#nav_a_4 .cd-label").css("opacity", "0");
			$("#nav_circle li a").not("#nav_a_4").removeClass('is-selected');
			$(" #cd-vertical-nav .cd-dot").css({
				"background-color": "white",
				"border": "solid 5px white"
			});
			$(" #cd-vertical-nav .cd-label").css("color", "white");
			$(" #cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px white"
			});
			$("#line_bg .line_bg_item").css("background-color", "white");

		}

		if (($("#section5").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section5").offset().top + $("#section5").height() - $(window).height() / 2 > $(window).scrollTop())) {
			var navigationItems = $('#nav_a_5');
			navigationItems.addClass('is-selected');
			$("#nav_a_5 .cd-label").css({
				"opacity": "1",
				"-webkit-transform": "scale((1.0))",
				"-moz-transform": "scale((1.0))",
				"-ms-transform": "scale((1.0))",
				"transform": "scale((1.0))"
			});
			$(".cd-label").not("#nav_a_5 .cd-label").css("opacity", "0");
			$("#nav_circle li a").not("#nav_a_5").removeClass('is-selected');
			$(" #cd-vertical-nav .cd-label").css("color", "#259500");
			$(" #cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px #259500"
			});
			$(" #cd-vertical-nav .cd-dot").css({
				"background-color": "#259500",
				"border": "solid 5px #259500"
			});
			$(" #cd-vertical-nav .cd-label").css("color", "#259500");
			$(" #cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px #259500"
			});
			$("#line_bg .line_bg_item").css("background-color", "#259500");

		}

		if (($("#section6").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section6").offset().top + $("#section6").height() - $(window).height() / 2 > $(window).scrollTop())) {
			var navigationItems = $('#nav_a_6');
			navigationItems.addClass('is-selected');
			$("#nav_a_6 .cd-label").css({
				"opacity": "1",
				"-webkit-transform": "scale((1.0))",
				"-moz-transform": "scale((1.0))",
				"-ms-transform": "scale((1.0))",
				"transform": "scale((1.0))"
			});
			$(".cd-label").not("#nav_a_6 .cd-label").css("opacity", "0");
			$("#nav_circle li a").not("#nav_a_6").removeClass('is-selected');
			$(" #cd-vertical-nav .cd-dot").css({
				"background-color": "white",
				"border": "solid 5px white"
			});
			$(" #cd-vertical-nav .cd-label").css("color", "white");
			$(" #cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px white"
			});
			$("#line_bg .line_bg_item").css("background-color", "white");

		}

		if (($("#section7").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section7").offset().top + $("#section7").height() - $(window).height() / 2 > $(window).scrollTop())) {
			var navigationItems = $('#nav_a_7');
			navigationItems.addClass('is-selected');
			$("#nav_a_7 .cd-label").css({
				"opacity": "1",
				"-webkit-transform": "scale((1.0))",
				"-moz-transform": "scale((1.0))",
				"-ms-transform": "scale((1.0))",
				"transform": "scale((1.0))"
			});
			$(".cd-label").not("#nav_a_7 .cd-label").css("opacity", "0");
			$("#nav_circle li a").not("#nav_a_7").removeClass('is-selected');
			$("#cd-vertical-nav .cd-dot").css({
				"background-color": "black",
				"border": "solid 5px black"
			});
			$("#line_bg .line_bg_item").css("background-color", "black");
			$("#cd-vertical-nav .cd-label").css("color", "black");
			$("#cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px black"
			});


		}
		if (($("#section8").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section8").offset().top + $("#section8").height() - $(window).height() / 2 > $(window).scrollTop())) {
			var navigationItems = $('#nav_a_8');
			navigationItems.addClass('is-selected');
			$("#nav_a_8 .cd-label").css({
				"opacity": "1",
				"-webkit-transform": "scale((1.0))",
				"-moz-transform": "scale((1.0))",
				"-ms-transform": "scale((1.0))",
				"transform": "scale((1.0))"
			});
			$(".cd-label").not("#nav_a_8 .cd-label").css("opacity", "0");
			$("#nav_circle li a").not("#nav_a_8").removeClass('is-selected');
			$("#cd-vertical-nav .cd-dot").css({
				"background-color": "white",
				"border": "solid 5px white"
			});
			$("#cd-vertical-nav .cd-label").css("color", "white");
			$("#cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px white"
			});
			$("#line_bg .line_bg_item").css("background-color", "white");


		}

		if (($("#section9").offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($("#section9").offset().top + $("#section9").height() - $(window).height() / 2 > $(window).scrollTop())) {
			var navigationItems = $('#nav_a_9');
			navigationItems.addClass('is-selected');
			$("#nav_a_9 .cd-label").css({
				"opacity": "1",
				"-webkit-transform": "scale((1.0))",
				"-moz-transform": "scale((1.0))",
				"-ms-transform": "scale((1.0))",
				"transform": "scale((1.0))"
			});
			$(".cd-label").not("#nav_a_9 .cd-label").css("opacity", "0");
			$("#nav_circle li a").not("#nav_a_9").removeClass('is-selected');
			$("#cd-vertical-nav .cd-dot").css({
				"background-color": "white",
				"border": "solid 5px white"
			});
			$("#cd-vertical-nav .cd-label").css("color", "white");
			$("#cd-vertical-nav a.is-selected .cd-dot").css({
				"background": "none",
				"border": "solid 5px white"
			});
			$("#line_bg .line_bg_item").css("background-color", "white");
		}
	});

	//header mouseover and mouseout
	$("#right_link_1 a img").mouseover(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/menu_linkin_icon_hover.png");
	});
	$("#right_link_1 a img").mouseout(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/menu_linkin_icon.png");
	});
	$("#right_link_2 a img").mouseover(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/menu_youtube_icon_hover.png");
	});
	$("#right_link_2 a img").mouseout(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/menu_youtube_icon.png");
	});
	$("#right_link_3 a img").mouseover(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/menu_facebook_icon_hover.png");
	});
	$("#right_link_3 a img").mouseout(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/menu_facebook_icon.png");
	});
	$(".hamburger").mouseover(function() {
		$(".hamburger__icon").removeClass().addClass("hamburger__icon hamburger__icon_hover");
	});
	$(".hamburger").mouseout(function() {
		$(".hamburger__icon").removeClass().addClass("hamburger__icon");
	});
	//foooter mouseover and mouseout

	$("#footer_icon_1 a img").mouseover(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/footer_linkin_hover.png");
	});
	$("#footer_icon_1 a img").mouseout(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/footer_linkin.png");
	});
	$("#footer_icon_2 a img").mouseover(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/footer_facebook_hover.png");
	});
	$("#footer_icon_2 a img").mouseout(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/footer_facebook.png");
	});
	$("#footer_icon_3 a img").mouseover(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/footer_youtubel_hover.png");
	});
	$("#footer_icon_3 a img").mouseout(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/footer_youtubel.png");
	});
	$("#footer_icon_4 a img").mouseover(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/footer_mtel_hover.png");
	});
	$("#footer_icon_4 a img").mouseout(function() {
		$(this).attr("src", "images/7.0_mtel_lab_ouput_assets/footer_mtel.png");
	});

	/*NiceScroll*/
	$("html").niceScroll();
	/*$('#news_main1').niceScroll();*/

	$(".news_main").mCustomScrollbar({
		setTop: "540px",
		theme: "dark"
	});
	/*KickOff More Click*/

	var window_width = $(window).width();
	var section3Height = $("#index .section.s3 ").height();

	$("#kickoff_collapse").click(function() {
		$("#index .section.s3 .rightPhoneFootball").slideUp(function() {
			$(this).css('display', '');
			$(this).addClass('hideMobile');
		});
		$("#kick_off_Mobile_textBlock").slideUp(function() {
			$(this).css('display', '');
			$(this).addClass('hideMobile');
		});

		$("#index .section.s3 .menuCenter .btnMenu").slideUp(function() {
			$(this).css('display', '');
			$(this).addClass('hideMobile');
		});

		if (window_width <= 767 && window_width > 600) {
			var collapseHeight = 445;
		}
		if (window_width <= 600 && window_width > 500) {
			var collapseHeight = 420;
		}
		if (window_width <= 500 && window_width > 400) {
			var collapseHeight = 380;
		}
		if (window_width <= 400 && window_width >= 361) {
			var collapseHeight = 325;
		}
		if (window_width < 361 && window_width >= 350) {
			var collapseHeight = 285;
		}
		if (window_width <= 350 && window_width >= 320) {
			var collapseHeight = 272;
		}

		var srollHeight = section3Height - collapseHeight;
		$(this).hide();
		$("#index .section.s3 .more_info").show();
		$("#index .section.s3 .menuCenter").addClass('paddingBottom');
	});
	$("#kickoff_more").click(function() {

		$("#index .section.s3 .rightPhoneFootball").removeClass('hideMobile');
		$("#kick_off_Mobile_textBlock").slideDown(function() {
			$(this).css('display', '');
			$(this).removeClass('hideMobile');
		});
		$("#index .section.s3 .menuCenter .btnMenu").slideDown(function() {
			$(this).css('display', '');
			$(this).removeClass('hideMobile');
		});

		$(this).hide();
		$("#kickoff_collapse").show();
		$("#index .section.s3 .menuCenter").removeClass('paddingBottom');
	});

	$(window).resize(function() {
		if ($('#movieexpress_more').css('display') === "block") {
			$('#index .section.s4').css('height', 'auto');
		}

		if ($('#movieexpress_more').css('display') === "block") {
			$("#index .section.s4").removeClass("paddingBottom");
		}

	});

	$("#movieexpress_more").click(function() {

		$("#index .section.s4 .textBlock").slideDown(function() {

			$(this).css('display', '');
			$(this).addClass('showMobile');
		});
		$("#index .section.s4 .menuCenter .btnMenu").slideDown(function() {

			$(this).css('display', '');
			$(this).addClass('showMobile');
		});

		$("#movie_express_Mobile_rightPhoneFootball").addClass('showMobile');
		$(this).hide();
		$("#movieexpress_collapse").show();
		$("#index .section.s4").addClass("paddingBottom");

	});
	$("#movieexpress_collapse").click(function() {
		$("#index .section.s4 .textBlock").slideUp(function() {

			$(this).css('display', '');
			$(this).removeClass('showMobile');
		});
		$("#index .section.s4 .menuCenter .btnMenu").slideUp(function() {

			$(this).css('display', '');
			$(this).removeClass('showMobile');
		});
		$("#movie_express_Mobile_rightPhoneFootball").removeClass('showMobile');

		$(this).hide();
		$("#movieexpress_more").show();
		$("#index .section.s4").removeClass("paddingBottom");


	});

	/*   whatscap more  click **/
	var section5Height = parseInt(($('#index .section.s5').css('padding-top')).replace('px', '')) + parseInt(($('#index .section.s5').css('padding-bottom')).replace('px', '')) + $('#index .section.s5 .menuCenter .textItem').innerHeight();
	$(window).resize(function() {
		if ($('#whatscap_more').css('display') === "block") {
			$('#index .section.s5').css('height', 'auto');

		}

		var section5Height = parseInt(($('#index .section.s5').css('padding-top')).replace('px', '')) + parseInt(($('#index .section.s5').css('padding-bottom')).replace('px', '')) + $('#index .section.s5 .menuCenter .textItem').innerHeight();
	});

	$("#whatscap_more").click(function() {

		$("#index .section.s5 .rightPhoneFootball").slideDown();
		$("#index .section.s5 .textBlock").slideDown(function() {
			$(this).css('display', '');
			$(this).addClass('showMobile');
		});
		$("#index .section.s5 .menuCenter .btnMenu").slideDown(function() {
			$(this).css('display', '');
			$(this).addClass('showMobile');
		});
		$("#index .section.s5 .menuCenter .btnMenu .readMoreBtn").css("display", "inline-block");
		$("#index .section.s5 .content").css("display", "block");
		$(this).hide();
		$("#whatscap_collapse").show();


	});

	$("#whatscap_collapse").click(function() {
		$("#index .section.s5 .rightPhoneFootball").slideUp();
		$("#index .section.s5 .textBlock").slideUp(function() {
			$(this).css('display', '');
			$(this).removeClass('showMobile');
		});
		$("#index .section.s5 .menuCenter .btnMenu").slideUp(function() {
			$(this).css('display', '');
			$(this).removeClass('showMobile');
		});
		$(this).hide();
		$("#whatscap_more").show();

	});

	/*Buy more click*/
	var section6Height = $("#index .section.s6 ").height();
	$(window).resize(function() {
		if ($('#whatscap_more').css('display') === "block") {
			$('#index .section.s5').css('height', 'auto');
		}
		var section5Height = parseInt(($('#index .section.s5').css('padding-top')).replace('px', '')) + parseInt(($('#index .section.s5').css('padding-bottom')).replace('px', '')) + $('#index .section.s5 .menuCenter .textItem').innerHeight();
	});

	$("#buy_more").click(function() {

		$("#index .section.s6 .rightPhoneFootball").slideDown();
		$("#buy_Mobile_textBlock").slideDown(function() {
			$(this).css('display', '');
			$(this).addClass('showMobile');
		});
		$("#index .section.s6 .menuCenter .btnMenu").slideDown(function() {
			$(this).css('display', '');
			$(this).addClass('showMobile');
		});
		$("#index .section.s6 .menuCenter .btnMenu .readMoreBtn").css("display", "inline-block");
		$("#index .section.s6 .content").css("display", "block");
		$(this).hide();
		$("#buy_collapse").show();
	});

	$("#buy_collapse").click(function() {
		$("#index .section.s6 .rightPhoneFootball").slideUp();
		$("#buy_Mobile_textBlock").slideUp(function() {
			$(this).css('display', '');
			$(this).removeClass('showMobile');
		});
		$("#index .section.s6 .menuCenter .btnMenu").slideUp(function() {
			$(this).css('display', '');
			$(this).removeClass('showMobile');
		});

		$(this).hide();
		$("#buy_more").show();
	});


	/*Pure more click*/
	if (window_width <= 450 && window_width > 319) {
		var section7Height = $("#index .section.s7 ").height() + 90;
	}

	if (window_width <= 520 && window_width > 450) {
		var section7Height = $("#index .section.s7 ").height() + 115;
	}
	if (window_width <= 767 && window_width > 520) {
		var section7Height = $("#index .section.s7 ").height() + 128;
	}


	$("#pure_more").click(function() {

		$("#index .section.s7 .rightPhoneFootball").slideDown();
		$("#pure_Mobile_textBlock").slideDown(function() {
			$(this).css('display', '');
			$(this).addClass('showMobile');
		});
		$("#index .section.s7 .menuCenter .btnMenu").slideDown(function() {
			$(this).css('display', '');
			$(this).addClass('showMobile');
		});
		$("#pure_Mobile_textBlock .content").css("display", "block");
		$("#index .section.s7 .menuCenter .btnMenu .readMoreBtn").css("display", "inline-block");
		$(this).hide();
		$("#pure_collapse").show();
	});
	$("#pure_collapse").click(function() {
		$("#index .section.s7 .rightPhoneFootball").slideUp();
		$("#index .section.s7 .textBlock").slideUp(function() {
			$(this).css('display', '');
			$(this).removeClass('showMobile');
		});
		$("#index .section.s7 .menuCenter .btnMenu").slideUp(function() {
			$(this).css('display', '');
			$(this).removeClass('showMobile');
		});
		$(this).hide();
		$("#pure_more").show();

	});

	/*Menu Show And Hide*/
	$('.fat-menu__wrapper ul li a').click(function() {
		$('.fat-menu').removeClass('showMenu');
		$('#icon_right4').show();
		$('#icon_right5').hide();
	});

	$('#icon_right4').click(function() {
		$(this).hide();
		$('#icon_right5').show();
		$('.fat-menu').addClass('showMenu');
		if ($('.top_icon').hasClass('overlay')) {
			$('.top_icon').removeClass('overlay');
		}
	});
	$('#icon_right5').click(function() {
		$(this).hide();
		$('#icon_right4').show();
		$('.fat-menu').removeClass('showMenu');
		if ($(window).scrollTop() == 0) {
			$('.top_icon').removeClass('overlay');

		} else {
			$('.top_icon').addClass('overlay');
		}
	});
	function resizeWindowWidth() {
		if ($(window).width() > 767) {

			$('#index .section.s4').css('height', '860px');
			$('#index .section.s5').css('height', '860px');
		}
		if ($(window).width() < 768) {
			$('#index .section.s4').css('height', 'auto');
			$('#index .section.s5').css('height', 'auto');
		}
	}

	function resizeLayout() {

		var w = $(window).width();
		var h = $(window).height();
		var screenRatio = w / h;

		if (w > 1800 || screenRatio > 2.6) {
			$('#index .section.s1 .i1').css('background-size', '130% auto');
		} else {
			$('#index .section.s1 .i1').css('background-size', 'auto 130%');
		}
		if (w > 1700) {
			$('#index .section.s2').css('background-size', '100% auto');
		} else {
			$('#index .section.s2').css('background-size', 'auto 130%');
		}
		if (w > 1000) {
			$('#index .section.s6').css('background-size', '120% auto');
		} else {
			$('#index .section.s6').css('background-size', 'auto 130%');
		}
		$('#index .section.s3 .left').css('background-size', 'auto 130%');
		$('#index .section.s3 .right').css('background-size', 'auto 130%');
	}

	function resizePosition() {
		var w = $(window).width();
		var h = $(window).height();
		var screenRatio = w / h;

		if (w > 1600) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "0px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "177px",
				"left": ""
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "177px",
				"right": "0px"
			});
		}

		if (w > 1550 && w <= 1600) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "23px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "190px",
				"left": "43px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "190px",
				"right": "43px"
			});
		}
		if (w > 1500 && w <= 1550) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "40px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "170px",
				"left": "35px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "170px",
				"right": "35px"
			});
		}
		if (w > 1450 && w <= 1500) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "57px");

		}
		if (w > 1400 && w <= 1450) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "85px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "170px",
				"left": "20px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "170px",
				"right": "20px"
			});

		}
		if (w > 1350 && w <= 1400) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "103px");

		}
		if (w > 1300 && w <= 1350) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "122px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "137px",
				"left": "-3px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "137px",
				"right": "-3px"
			});

		}
		if (w > 1250 && w <= 1300) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "142px");

		}
		if (w > 1200 && w <= 1250) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "150px");

		}
		if (w > 1150 && w <= 1200) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "177px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "96px",
				"left": "-35px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "96px",
				"right": "-35px"
			});

		}
		if (w > 1100 && w <= 1150) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "199px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "88px",
				"left": "-60px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "88px",
				"right": "-60px"
			});

		}
		if (w > 1050 && w <= 1100) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "215px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "96px",
				"left": "-57px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "96px",
				"right": "-57px"
			});

		}
		if (w > 1024 && w <= 1050) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "233px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "105px",
				"left": "-51px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "105px",
				"right": "-51px"
			});


		}
		if (w > 1000 && w <= 1024) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "255px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "105px",
				"left": "7px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "105px",
				"right": "7px"
			});


		}
		if (w > 950 && w <= 1000) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "263px");

		}

		if (w > 900 && w <= 950) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "284px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "88px",
				"left": "-11px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "88px",
				"right": "-11px"
			});


		}
		if (w > 850 && w <= 900) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "302px");

		}
		if (w > 800 && w <= 850) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "317px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "68px",
				"left": "-32px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "68px",
				"right": "-32px"
			});

		}
		if (w > 767 && w <= 800) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "343px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "77px",
				"left": "9px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "77px",
				"right": "9px"
			});



		}
		if (w > 720 && w <= 767) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "181px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "315px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "315px",
				"right": "0px"
			});
		}
		if (w > 700 && w <= 720) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "197px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "309px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "309px",
				"right": "0px"
			});
		}
		if (w > 668 && w <= 700) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "220px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "288px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "288px",
				"right": "0px"
			});
		}

		if (w > 630 && w <= 668) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "263px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "271px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "271px",
				"right": "0px"
			});
		}

		if (w > 592 && w <= 630) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "236px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "271px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "271px",
				"right": "0px"
			});
		}


		if (w > 555 && w <= 592) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "167px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "244px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "244px",
				"right": "0px"
			});
		}

		if (w > 521 && w <= 555) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "149px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "229px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "229px",
				"right": "0px"
			});
		}

		if (w > 500 && w <= 521) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "127px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "210px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "210px",
				"right": "0px"
			});
		}

		if (w > 468 && w <= 500) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "127px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "210px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "210px",
				"right": "0px"
			});
		}

		if (w > 440 && w <= 468) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "115px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "190px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "190px",
				"right": "0px"
			});
		}

		if (w > 420 && w <= 440) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "115px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "182px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "182px",
				"right": "0px"
			});
		}

		if (w > 413 && w <= 420) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "120px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "165px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "165px",
				"right": "0px"
			});
		}

		if (w > 396 && w <= 413) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "126px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "150px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "150px",
				"right": "0px"
			});
		}

		if (w > 372 && w <= 396) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "113px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "150px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "150px",
				"right": "0px"
			});
		}

		if (w > 344 && w <= 372) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "95px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "135px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "135px",
				"right": "0px"
			});
		}

		if (w > 325 && w <= 344) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "105px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "135px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "135px",
				"right": "0px"
			});
		}

		if (w > 321 && w <= 325) {
			$("#index .section.s1 .main_visual .top_btn").css("margin-top", "74px");
			$("#index .section.s1 .main_visual .left_btn").css({
				"bottom": "126px",
				"left": "0px"
			});
			$("#index .section.s1 .main_visual .right_btn").css({
				"bottom": "126px",
				"right": "0px"
			});
		}








	}

	$(window).resize(function() {

		resizePosition();
		resizeLayout();
		resizeWindowWidth();


	});

	var s1Swiper = new Swiper('.s1 .swiper-container', {
		mode: 'vertical',
		speed: 1000,
		simulateTouch: false,
		//loop: true,
		onlyExternal: true
	});

	var s2Swiper = new Swiper('.s2 .swiper-container', {
		//loop: true,
		slidesPerView: 'auto',
		calculateHeight: true
	});

	var s4Swiper = new Swiper('.s4 .swiper-container', {
		//loop: true,
		slidesPerView: 'auto',
		calculateHeight: true
	});
	s5Swiper = new Swiper('.s5 .swiper-container', {
		//loop: true,
		speed: 1000,
		slidesPerView: 'auto',
		calculateHeight: true
	});
	var s8Swiper = new Swiper('.s8 .swiper-container', {
		//loop: true,
		slidesPerView: 'auto',
		calculateHeight: true
	});
	var s9Swiper = new Swiper('.s9 .swiper-container', {
		//loop: true,
		slidesPerView: 'auto',
		calculateHeight: true
	});

	$('.s1 .prevBtn').bind('click touchstart', function() {
		s1Swiper.swipePrev();
		updateArrow();
	});

	$('.s1 .nextBtn').bind('click touchstart', function() {
		s1Swiper.swipeNext();
		updateArrow();
	});

	$('.s2 .prevBtn').bind('click', function() {
		s2Swiper.swipePrev();
	});

	$('.s2 .nextBtn').bind('click', function() {
		s2Swiper.swipeNext();
	});

	$('.s8 .prevBtn').bind('click', function() {
		s8Swiper.swipePrev();
	});
	$('.s9 .prevBtn').bind('click', function() {
		s9Swiper.swipePrev();
	});

	$('.s8 .nextBtn').bind('click', function() {
		s8Swiper.swipeNext();
	});
	$('.s9 .nextBtn').bind('click', function() {
		s9Swiper.swipeNext();
	});
	$('.s9 .explore').bind('click', function() {
		s9Swiper.swipeNext();
	});

	$('.s5 .prevBtn').bind('click', function() {
		// s5Swiper.swipePrev();
		var w = $(window).width();
		var currentIndex = s5Swiper.activeIndex;
		if (w > 1400) {
			var goToIndex = currentIndex - 7;
			if (goToIndex < 0) {
				goToIndex = 0;
			}
			s5Swiper.swipeTo(goToIndex, 1000, false);
		} else if (w > 1000) {
			var goToIndex = currentIndex - 7;
			if (goToIndex < 0) {
				goToIndex = 0;
			}
			s5Swiper.swipeTo(goToIndex, 1500, false);
		} else {
			var goToIndex = currentIndex - 3;
			if (goToIndex < 0) {
				goToIndex = 0;
			}
			s5Swiper.swipeTo(goToIndex, 1500, false);
		}
	});

	$('.s5 .nextBtn').bind('click', function() {
		// s5Swiper.swipeNext();
		var w = $(window).width();
		var currentIndex = s5Swiper.activeIndex;
		if (w > 1400) {
			var goToIndex = currentIndex + 7;
			s5Swiper.swipeTo(goToIndex, 1000, false);
		} else if (w > 1000) {
			var goToIndex = currentIndex + 7;
			s5Swiper.swipeTo(goToIndex, 1500, false);
		} else {
			var goToIndex = currentIndex + 3;
			s5Swiper.swipeTo(goToIndex, 1500, false);
		}
	});


	resizeLayout();

	function updateArrow() {
		var currentSlide = $(s1Swiper.activeSlide()).attr('rel');
		if (currentSlide == 'slide2') {
			$('#index .section.s1 .prevBtn').css({
				'background': 'url("images/0.1_home_expand_output-assets/arrows_black_up.png") 50% 50% no-repeat',
				'background-size': '38px'
			});
			$('#index .section.s1 .nextBtn').css({
				'background': 'url("images/0.1_home_expand_output-assets/arrows_black_down.png") 50% 50% no-repeat',
				'background-size': '38px'
			});
			$('#index .section.s1').addClass('slide2');
		} else {
			$('#index .section.s1 .prevBtn').css({
				'background': 'url("images/0.0_home_output-assets/arrows_white_up.png") 50% 50% no-repeat',
				'background-size': '38px'
			});
			$('#index .section.s1 .nextBtn').css({
				'background': 'url("images/0.0_home_output-assets/arrows_white_down.png") 50% 50% no-repeat',
				'background-size': '38px'
			});
			$('#index .section.s1').removeClass('slide2');
		}
	}

	$(window).stellar({
		horizontalScrolling: false,
		responsive: false
	});

	$(window).scroll(function() {
		var yPos = $(window).scrollTop();
		if (yPos > 10) {
			$('.top_icon').addClass('overlay');
		} else {
			$('.top_icon').removeClass('overlay');		
		}
	});

	$("#cover").delay(500).fadeOut(800);

});