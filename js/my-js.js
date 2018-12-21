$('.show-btn').click(function() {
	slider();
	$( ".navbar-items" ).slideToggle("slow");	
		  // $( ".button-close" ).slideToggle("slow");
	  // $( ".show-btn" ).slideToggle(1200);
});
function slider() {
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
		// $('.center-line').addClass('displayHide');		
		// $('.top-line').addClass('rotateHideY');		
		// $('.bottom-line').addClass('rotateHideX');
	}
}
// $('.button-close').click(function() {
// 	  $( ".navbar-items" ).slideToggle("slow");
// 	  $( ".button-close" ).slideToggle("slow");
// 	  $( ".show-btn" ).slideToggle(1200);
// 	});

