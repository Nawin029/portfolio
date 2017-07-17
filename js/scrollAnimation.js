var mastheadInitialHeight;
var mastheadLaterHeight;
var aboutStartHeight;
var timelineStartHeight;
var skillsStartHeight;
var portfolioStartHeight;
var contactStartHeight;
var skillsPageVisited = false;

$(document).ready(function(){
	
	if($(window).scrollTop() > $('#jumbo').height() * 0.30){
		$('#masthead').addClass('scrolled');
	}

	pie1.destroy();
	pie2.destroy();

	mastheadInitialHeight = ($(window).height() * 0.09).toFixed();
	mastheadLaterHeight = ($(window).height() * 0.084).toFixed();

	aboutStartHeight = $('#about').offset().top;
	timelineStartHeight = $('#timeline').offset().top;
	skillsStartHeight = $('#skills').offset().top;
	portfolioStartHeight = $('#portfolio').offset().top;
	contactStartHeight = $('#contact').offset().top;


	$('.pages').click(function(e){
		e.preventDefault();


		var page_href = $(this).attr('href');
		var demo = "#tab_"+page_href.substring(1);
		// first remove highlight from all tabs, then add highlight to the selected tab
		$('#masthead > div > a > span').removeClass('highlight');
		$(demo).addClass('highlight');


		$('html,body').animate({
			scrollTop: $(page_href).offset().top - $(window).height() * 0.084
		}, 1000);


		if(page_href == '#skills'){
			skillsPageVisited = true;
			setTimeout(function(){
				pie1.redraw();
				pie2.redraw();
			},500);
		}

	});


// if hovered on down arrow

	$('.fa-angle-down').mouseover(function(){

		$('html,body').animate({
			scrollTop: $('#about').offset().top - $(window).height() * 0.085
		}, 1500);
		$('#tab_about').addClass('highlight');

	});


});


$(document).scroll(function(){
	controlNavbarBehaviour();
});


var controlNavbarBehaviour = function(){

	$('.pages span').toggleClass('scrolled' , $(this).scrollTop() > $('#jumbo').height() * 0.30 );
	$('#masthead').toggleClass('scrolled' , $(this).scrollTop() >= 0.30 * (aboutStartHeight - mastheadLaterHeight));


	// had to uncomment most of the code here since things were not working as i had expected
	
	
	// $('#masthead > div > a > span').removeClass('highlight');

	// $('#tab_about').toggleClass('highlight',	$(this).scrollTop() >= 0.30 * (aboutStartHeight - mastheadLaterHeight) &&
	// 											$(this).scrollTop() < (timelineStartHeight - mastheadLaterHeight));



	// $('#tab_timeline').toggleClass('highlight',	$(this).scrollTop() >= (timelineStartHeight - mastheadLaterHeight) &&
	// 											$(this).scrollTop() < (skillsStartHeight - mastheadLaterHeight));




	// $('#tab_skills').toggleClass('highlight' ,	$(this).scrollTop() >= (skillsStartHeight - mastheadLaterHeight) && 
	// 											$(this).scrollTop() < (portfolioStartHeight - mastheadLaterHeight));


	// this is to redraw the pie chart if the person is scrolling
	if( $(this).scrollTop() >= (skillsStartHeight - mastheadLaterHeight) && $(this).scrollTop() < (portfolioStartHeight - mastheadLaterHeight) && !skillsPageVisited){
		skillsPageVisited = true;
		pie1.redraw();
		pie2.redraw();
	}




	
	// $('#tab_portfolio').toggleClass('highlight',	$(this).scrollTop() >= (portfolioStartHeight - mastheadLaterHeight) && 
	// 												$(this).scrollTop() < (contactStartHeight - mastheadLaterHeight));
	

	// $('#tab_contact').toggleClass('highlight' , $(this).scrollTop() >= (contactStartHeight - mastheadLaterHeight) );

}

var redrawPieOnScroll = function(){
	setTimeout(function(){
		pie1.redraw();
		pie2.redraw();
	},200);

	skillsPageVisited = true;
}

