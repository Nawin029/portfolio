$(function(){

    $("#introNote1").typed({
        strings: ["Hi^200! ^1500"],
        typeSpeed: 50,
        startDelay: 1000,
        callback: function() {
        	$('.typed-cursor').hide();
			next1();
        },
    });

    function next1(){

    	$("#introNote2").typed({
			strings: ["I'm Swagnik Dutta^1200. I'm a Front-end web developer<br>"],  
			typeSpeed: 10,
			callback: function() {
				$('.typed-cursor').hide();
				next2();
        	},
		});
  	}

  	function next2(){
		
    	$("#introNote3").typed({
			strings: ["Passionate about, ^1500"],
			typeSpeed: 10,
			callback: function() {
        		$('.typed-cursor').hide();
				next3();
        	},
		});
  	}

	function next3(){
		
    	$("#introNote4").typed({
			strings: ["Building beautiful responsive websites with strong focus on asthetics ^1200", "learning about Python and its awesome libraries ^1200", "automating mundane tasks by writing code ^1200"],
			typeSpeed: 10,
			backSpeed: 0,
			loop: true,
			callback: function() {
        		$('.typed-cursor').hide();
				
        	},
		});
  	}

});
