//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
$.each($('input.phone'), function (index, val) {
	$(this).attr('type', 'tel');
	$(this).focus(function () {
		$(this).inputmask('+375(99)999-99-99', {
			clearIncomplete: true,
			clearMaskOnLostFocus: false,
			"onincomplete": function () {
				maskclear($(this));
			}
		});
		$(this).addClass('focus');
		$(this).parent().addClass('focus');
		$(this).parent().removeClass('err');
		$(this).removeClass('err');
	});
});
$('input.phone').focusout(function (event) {
	maskclear($(this));
});





//SLIDERS
if ($('.slider').length > 0) {
	$('.slider').slick({
		autoplay: true,
		infinite: true,
		dots: false,
		arrows: true,
		fade: false,
		accessibility: false,
		slidesToShow: 3,
		speed: 1000,
		autoplaySpeed: 5000,
		adaptiveHeight: false,
		//asNavFor:'',
		// appendDots:$('.step-slider__controls'),
		// appendArrows:$('.slider-btn__group'),
		// nextArrow:'<button type="button" class="slider__prev slick-prev"></button>',
		// prevArrow:'<button type="button" class="slider__next slick-next"></button>',
		responsive: [{
				breakpoint: 1198,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
			
		]
	});


};


if ($('.slider-three').length > 0) {
	$('.slider-three').slick({
		// autoplay: true,
		infinite: true,
		dots: true,
		arrows: true,
		fade: false,
		accessibility: false,
		slidesToShow: 3,
		speed: 1000,
		autoplaySpeed: 3000,
		adaptiveHeight: false,
		//asNavFor:'',
		appendDots: $('.step-slider__controls'),
		// appendArrows:$('.slider-btn__group'),
		// nextArrow:'<button type="button" class="slider__prev slick-prev"></button>',
		// prevArrow:'<button type="button" class="slider__next slick-next"></button>',
		responsive: [{
				breakpoint: 1198,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});


};

if ($('.project-slider').length > 0) {
	$('.project-slider').slick({
		autoplay: true,
		infinite: true,
		dots: true,
		arrows: true,
		fade: false,
		accessibility: false,
		slidesToShow: 3,
		speed: 1000,
		autoplaySpeed: 5000,
		adaptiveHeight: false,
		//asNavFor:'',
		appendDots: $('.project-slider__controls'),
		// appendArrows:$('.slider-btn__group'),
		// nextArrow:'<button type="button" class="slider__prev slick-prev"></button>',
		// prevArrow:'<button type="button" class="slider__next slick-next"></button>',
		responsive: [{
				breakpoint: 1198,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});


};



// parallax

if (window.matchMedia('(min-width: 991px)').matches) {
	var scene = document.querySelectorAll('.parallax');
	scene.forEach(item => {
		const picture = item.querySelector('picture');
		picture.classList.toggle('parallax');
		var parallaxInstance = new Parallax(picture);
	})

}
// //ibg

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();







$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		$('.navbar-header').addClass('fixed');
		$('.up').addClass('show');
	} else if (!menu.classList.contains('show')) {
		$('.navbar-header').removeClass('fixed');
		$('.up').removeClass('show');

	}
});


// scroll 
$(document).ready(() => {
	$(".arrow__link").click(function (e) {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		// var destinationCurrent = destination/100*80-120;		
		
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination - 140
		}, 800);
		if(menu.classList.contains('show')){
			menu.classList.add('hide');
			menu.classList.remove('show');
			btn.classList.remove('line_active');
		}
		e.preventDefault();
		return false;
	});
});

// a = document.getElementsByTagName('html');
// a[0].style.transform = "scale(0.75)";


AOS.init();