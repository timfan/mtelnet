var ua = navigator.userAgent.toLowerCase();

$(document).ready(function() {
	$("#cover").delay(1000).fadeOut(800);
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//ga('create', 'UA-9797313-3', 'auto'); //Prod
ga('create', 'UA-78503281-1', 'auto'); //Dev
ga('send', 'pageview');

var ratio = 560/315; //youtube default ratio

function screenResize(){
	var w = $(window).width();
	
	if(w>1200){
		w=1200;
	}

	if($(window).width() > 768 ){
		$('.youtubePlayer').attr('width',w*.6*.8);
		$('.youtubePlayer').attr('height',w*.6*.8/ratio);
	}else{
		$('.youtubePlayer').attr('width',w*.9);
		$('.youtubePlayer').attr('height',w*.9/ratio);
	}
}


$( window ).resize(function() {
	screenResize();
});			


function setHeaderBG(){
	var yPos = $(window).scrollTop();
	var slide1H = $('section.s1').height();
	//console.log(yPos+','+slide1H);
	if(yPos > 10){
		$('nav').addClass('overlay');						
		//$('.navbar-header').addClass('overlay');						
	}else{
		$('nav').removeClass('overlay');			
		//$('.navbar-header').removeClass('overlay');			
	}
}

//header
$(document).ready(function() {
	var url = document.URL;
			
	$('.nav-item').removeClass('active');

	//console.log(url);

	if (url.indexOf('index.html') > -1){
		$('.nav-home').addClass('active');
	}else if (url.indexOf('works.html') > -1 ||url.indexOf('works/') > -1){
		$('.nav-works').addClass('active');
	}else if (url.indexOf('about.html') > -1){
		$('.nav-about').addClass('active');
	}else if (url.indexOf('products.html') > -1 ||url.indexOf('product_') > -1 ||url.indexOf('business/') > -1){
		$('.nav-products').addClass('active');
	}else if (url.indexOf('contactus.html') > -1){
		$('.nav-contact').addClass('active');
	}else if (url.indexOf('joinus.html') > -1){
		$('.nav-joinus').addClass('active');
	}else if (url.indexOf('news.html') > -1 ||url.indexOf('news/') > -1){
		$('.nav-news').addClass('active');
	}
	$(window).scroll(function() {
		setHeaderBG();
	}); 
	setHeaderBG();

	$('footer .copyright').html('copyright © 1999-'+new Date().getFullYear()+' mtel limited. all rights reserved.');
});