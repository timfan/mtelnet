(function (){
	var vg = $(".section.s1").vgrid({
		easing: "easeOutQuint",
		useLoadImageEvent: true,
		time: 400,
		delay: 20,
		fadeIn: {
			time: 500,
			delay: 50,
			wait: 500
		}
	});
	$(window).load(function(e){
		vg.vgrefresh();
	});
});
$(document).ready(function () {
	$('html').niceScroll();
	
	newBalance();
	initLayout();
	layoutPosition();
	
	$('.section.s1b .moreBtn').bind('click',function(){
		$('.moreClientsDiv').toggle(800, function(){$('.section.s1b .moreBtn').hide();});
	})
	$('.section.s1 .moreBtn').bind('click',function(){
		$('.section.s1 .yearSection.minor').toggle(500, function(){$('.section.s1 .moreBtn').hide();});
	})
});

$(window).resize(function() {
	newBalance();
	layoutPosition();
});
var newHeight;
var totalLayoutHeight;
var desktopLayoutQueue = [];
var mobileLayoutQueue = [];
var desktopLayoutQueueEmptySpace = [];
var mobileLayoutQueueEmptySpace = [];

function newBalance(){
	newHeight = $('.portfolio:first-child').width();
	if ($('.portfolio:first-child').hasClass('doubleCol')){
		newHeight = newHeight / 2;
	}else if ($('.portfolio:first-child').hasClass('tripleCol')){
		if ($('#mainContent').width()>=768){
			newHeight = newHeight / 3;
		}
	}else if ($('.portfolio:first-child').hasClass('fullCol')){
		if ($('#mainContent').width()>=768){
			newHeight = newHeight / 4;
		}
	}
	newHeight = Math.floor(newHeight/480*720);
	$('.portfolio img').css('height', newHeight);
}

function initLayout(){
	$('.portfolio').each(function(index, el) {
		var idNo = index+1;
		var idStr = 'layoutElement'+idNo;
		$(this).attr('id', idStr);

		if ($(this).hasClass('doubleCol')){
			if (desktopLayoutQueue.length % 4 == 3){
				desktopLayoutQueueEmptySpace[desktopLayoutQueueEmptySpace.length] = desktopLayoutQueue.length;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'EMPTY';
				desktopLayoutQueue[desktopLayoutQueue.length] = idStr;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
			}else{
				desktopLayoutQueue[desktopLayoutQueue.length] = idStr;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
			}

			if (mobileLayoutQueue.length % 2 == 1){
				mobileLayoutQueueEmptySpace[mobileLayoutQueueEmptySpace.length] = mobileLayoutQueue.length;
				mobileLayoutQueue[mobileLayoutQueue.length] = 'EMPTY';
				mobileLayoutQueue[mobileLayoutQueue.length] = idStr;
				mobileLayoutQueue[mobileLayoutQueue.length] = 'OCCUPY';
			}else{
				mobileLayoutQueue[mobileLayoutQueue.length] = idStr;
				mobileLayoutQueue[mobileLayoutQueue.length] = 'OCCUPY';
			}
		}else if ($(this).hasClass('tripleCol')){						
			if (desktopLayoutQueue.length % 4 >= 2){
				desktopLayoutQueueEmptySpace[desktopLayoutQueueEmptySpace.length] = desktopLayoutQueue.length;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'EMPTY';
				desktopLayoutQueueEmptySpace[desktopLayoutQueueEmptySpace.length] = desktopLayoutQueue.length;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'EMPTY';
				desktopLayoutQueue[desktopLayoutQueue.length] = idStr;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
			}else{
				desktopLayoutQueue[desktopLayoutQueue.length] = idStr;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
			}
			if (mobileLayoutQueueEmptySpace.length > 0){
				var emptyIndex = mobileLayoutQueueEmptySpace.shift();
				mobileLayoutQueue[emptyIndex] = idStr;
			}else{
				mobileLayoutQueue[mobileLayoutQueue.length] = idStr;
			}
		}else if ($(this).hasClass('fullCol')){						
			if (desktopLayoutQueue.length % 4 >= 3){
				desktopLayoutQueueEmptySpace[desktopLayoutQueueEmptySpace.length] = desktopLayoutQueue.length;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'EMPTY';
				desktopLayoutQueueEmptySpace[desktopLayoutQueueEmptySpace.length] = desktopLayoutQueue.length;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'EMPTY';
				desktopLayoutQueue[desktopLayoutQueue.length] = idStr;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
			}else{
				desktopLayoutQueue[desktopLayoutQueue.length] = idStr;
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
				desktopLayoutQueue[desktopLayoutQueue.length] = 'OCCUPY';
			}
			if (mobileLayoutQueueEmptySpace.length > 0){
				var emptyIndex = mobileLayoutQueueEmptySpace.shift();
				mobileLayoutQueue[emptyIndex] = idStr;
			}else{
				mobileLayoutQueue[mobileLayoutQueue.length] = idStr;
			}
		}else{
			if (desktopLayoutQueueEmptySpace.length > 0){
				var emptyIndex = desktopLayoutQueueEmptySpace.shift();
				desktopLayoutQueue[emptyIndex] = idStr;
			}else{
				desktopLayoutQueue[desktopLayoutQueue.length] = idStr;
			}
			
			if (mobileLayoutQueueEmptySpace.length > 0){
				var emptyIndex = mobileLayoutQueueEmptySpace.shift();
				mobileLayoutQueue[emptyIndex] = idStr;
			}else{
				mobileLayoutQueue[mobileLayoutQueue.length] = idStr;
			}
		}
	});
}

function layoutPosition(){
	if ($(window).width()>=768){
		for (var i = 0; i < desktopLayoutQueue.length; i++) {
			var idStr = desktopLayoutQueue[i];
			if (idStr != 'EMPTY' && idStr != 'OCCUPY'){
				var posx = (i%4)*($(window).width()*0.25);
				var posy = Math.floor(i/4)*newHeight;
				totalLayoutHeight = (Math.floor(i/4)+1)*newHeight;
				$('#'+idStr).css({
					position: 'absolute',
					top: posy,
					left: posx
				});
			}
		};
	}else{
		for (var i = 0; i < mobileLayoutQueue.length; i++) {
			var idStr = mobileLayoutQueue[i];
			if (idStr != 'EMPTY' && idStr != 'OCCUPY'){
				var posx = (i%2)*($(window).width()*0.5);
				var posy = Math.floor(i/2)*newHeight;
				totalLayoutHeight = (Math.floor(i/2)+1)*newHeight;
				$('#'+idStr).css({
					position: 'absolute',
					top: posy,
					left: posx
				});
			}
		};
	}
	$('.section.s1').css('height', totalLayoutHeight);
}