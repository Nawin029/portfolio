
$(document).ready(function(){

	$('#hamburger-button').click(function(){

		func();

		$('.pages').click(function(){

			$('.pages').slideUp();

			// if you're already in HOME page and clicking on HOME
			// then don't forget to make masthead transparent after slide up 329

			if( $(this).find('span').attr('id') === "tab_home"){
				
				setTimeout(function() {
					$('#masthead').removeClass('hamburger-show');	
	 			}, 400);
			}
			
		});

	});

});

var func = function(){

	$('.pages').slideToggle();

	if($('#masthead').hasClass('hamburger-show')){

			setTimeout(function() {
				$('#masthead').removeClass('hamburger-show');	
 			}, 400);
			// 400ms because slide toggle takes 400ms by default
	}
	else{
		$('#masthead').addClass('hamburger-show');
	}
}