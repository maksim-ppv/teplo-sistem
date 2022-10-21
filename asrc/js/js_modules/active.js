

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('source')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
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
// spoiler 
$('.spoiler').click(function(event){
	$(this).toggleClass('spoiler_active').next().slideToggle(300);
});
	$('.spoiler_small').click(function(event){
		if(window.matchMedia('(max-width: 767px)').matches){
		$(this).toggleClass('spoiler_active').next().slideToggle(300);
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


function getUrlParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) 
            {
                return sParameterName[1];
            }
        }
    }   
    
    var sendInfo = getUrlParameter('type');
    if(sendInfo=="success"){ 
       const popupThanks = document.querySelector('#popup-thanks');
	   popupThanks.classList.add('open');
        history.pushState(null, null, window.location.pathname); 
    }


AOS.init();