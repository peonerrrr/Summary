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


