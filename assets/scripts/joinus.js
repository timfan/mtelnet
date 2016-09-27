$(document).ready(function () {
	$('html').niceScroll();
	
	$('.result').bind('click',function(){
	
		if ($(this).hasClass('showMore')){
			$('.result').removeClass('showMore');
		}else{
			$('.result').removeClass('showMore');
			$(this).addClass('showMore');
		}
	});

	$('#joinus .section.s2 .tabContainer .tabs').bind('click', function() {
		var current_width = $(window).width();
		if (current_width < 768){
			if ($(this).hasClass('expend')){
				$('#joinus .section.s2 .tabContainer .tabs').removeClass('expend');
				$(this).addClass('active');
			}else{
				$('#joinus .section.s2 .tabContainer .tabs').addClass('expend');
			}
		}

		$('#joinus .section.s2 .tabContainer .tabs').removeClass('active');
		$(this).addClass('active');

		if ($(this).hasClass('all')){
			$('.resultContainer .result').show();
		}
		if ($(this).hasClass('create')){
			$('.resultContainer .result').hide();
			$('.resultContainer .create').show();
		}
		if ($(this).hasClass('admin')){
			$('.resultContainer .result').hide();
			$('.resultContainer .admin').show();
		}
		if ($(this).hasClass('business')){
			$('.resultContainer .result').hide();
			$('.resultContainer .business').show();
		}

		$('.result').removeClass('lastResult');
		$('.result').removeClass('showMore');
		$('.result:visible').last().addClass('lastResult');
		$('.result:visible').first().addClass('showMore');
	});

	//$('.resultContainer .result').hide();
	//$('.resultContainer .program').show();
	$('.resultContainer .result').show();
	$('.result:visible').first().addClass('showMore');
	$('.result:visible').last().addClass('lastResult');
});