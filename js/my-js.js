$(document).ready(function(){
    $('.navbar-items li').on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$('.show-btn').click(function() {
	sliderNavbar();
	$( ".navbar-items" ).slideToggle("slow");	
});
function sliderNavbar() {
	if (document.querySelector('.navbar-items').style.display == 'block'){
		$('.top-line').removeClass('rotateShowY');
		$('.center-line').removeClass('displayShow');				
		$('.bottom-line').removeClass('rotateShowX');

		$('.top-line').addClass('rotateHideY');
		$('.center-line').addClass('displayHide');				
		$('.bottom-line').addClass('rotateHideX');
	}	
	else {
		$('.top-line').addClass('rotateShowY');
		$('.center-line').addClass('displayShow');				
		$('.bottom-line').addClass('rotateShowX');

		$('.top-line').removeClass('rotateHideY');
		$('.center-line').removeClass('displayHide');				
		$('.bottom-line').removeClass('rotateHideX');
	}
}



