function parentWidth(elem) {
    return elem.parentElement.parentElement.clientWidth;
}

function parentHeight(elem) {
	return elem.parentElement.parentElement.clientHeight;
}

var pie1 = new d3pie("pieChart1", {
	header: {
		title: {
			text:    "../languages",
			color:    "#BBFF4C",
			fontSize: 14,
			font:     "Source Code Pro"
		},
		location: "top-left"
	},
	size: {
		canvasHeight: parentHeight(document.getElementById('pieChart1'))*0.95,
		canvasWidth: parentWidth(document.getElementById('pieChart1')),
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	data: {

		sortOrder: "random",
		content: [
			{
				label: "Java",
				value: 10,
				caption: "Kickass",
				color: "#A2558E"
			},
			{
				label: "C",
				value: 6,
				caption: "I got this!",
				color: "#8BB402"
			},
			{
				label: "C++",
				value: 10,
				caption: "Kickass",
				color: "#6B55A2"
			},
			{
				label: "Python",
				value: 8,
				caption: "I can do this!",
				color: "#C83B8F"
			}
		]
	},
	labels: {
		outer: {
			format: "label-percentage2",
			hideWhenLessThanPercentage: null,
			pieDistance: 30
		},
		inner: {
			format: "",
			hideWhenLessThanPercentage: null
		},
		mainLabel: {
			color: "#BBFF4C",
			font: "Source Code Pro",
			fontSize: 13,
		},
		percentage: {
			color: "skyblue",
			font: "Source Code Pro",
			fontSize: 13,
			decimalPlaces: 0
		},
		value: {
			color: "#cccc44",
			font: "arial",
			fontSize: 10
		},
		lines: {
			enabled: true,
			style: "curved",
			color: "skyblue" // "segment" or a hex color
		},
	},
	effects: {
		load: {
			effect: "default",
			speed: 1000
		},
		pullOutSegmentOnClick: {
			effect: "bounce",
			speed: 300,
			size: 10
		},
		highlightSegmentOnMouseover: true,
		highlightLuminosity: -0.4
	},
	tooltips: {
		enabled: true,
		type: "caption", // caption|placeholder
		placeholderParser: null,
		styles: {
			fadeInSpeed: 250,
			backgroundColor: "#000000",
			backgroundOpacity: 0.5,
			color: "#efefef",
			borderRadius: 2,
			font: "arial",
			fontSize: 12,
			padding: 4
		}
	},

	misc: {
		colors: {
			background: null, // transparent
			segmentStroke: "black"
		},
		gradient: {
			enabled: true,
			percentage: 40,
			color: "#000000"
		},
		cssPrefix: null
	},

	callbacks: {
		onload: function(){
			
		},
		onMouseoverSegment: function(){
			
		},
		onMouseoutSegment: function(){
			
		},
		onClickSegment: function(e){
			console.log(e);
		}
	}
	
});

var pie2 = new d3pie("pieChart2", {
	header: {
		title: {
			text:    "../web",
			color:    "#BBFF4C",
			fontSize: 14,
			font:     "Source Code Pro"
		},
		location: "top-left"
	},
	size: {
		canvasHeight: parentHeight(document.getElementById('pieChart2'))*0.95,
		canvasWidth: parentWidth(document.getElementById('pieChart2')),
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	data: {

		sortOrder: "random",
		content: [
			{
				label: "HTML5",
				value: 5,
				color: "#5499C7"
			},
			{
				label: "CSS3",
				value: 4,
				color: "#D96279"
			},
			{
				label: "Bootstrap",
				value: 4,
				color: "#90377E"
			},
			{
				label: "JavaScript",
				value: 2.5,
				color: "#8BB402"
			},
			{
				label: "Jquery",
				value: 2,
				color: "#7B7C7B"
			},
			{
				label: "Angular",
				value: 1,
				color: "#EB8F20"
			},
			{
				label: "Node.js",
				value: 0.3,
				color: "#FFCD00"
			}
		]
	},
	labels: {
		outer: {
			format: "label-percentage2",
			hideWhenLessThanPercentage: null,
			pieDistance: 30
		},
		inner: {
			format: "",
			hideWhenLessThanPercentage: null
		},
		mainLabel: {
			color: "#BBFF4C",
			font: "Source Code Pro",
			fontSize: 13,
		},
		percentage: {
			color: "skyblue",
			font: "Source Code Pro",
			fontSize: 13,
			decimalPlaces: 0
		},
		value: {
			color: "#cccc44",
			font: "arial",
			fontSize: 10
		},
		lines: {
			enabled: true,
			style: "curved",
			color: "skyblue" // "segment" or a hex color
		},
	},
	effects: {
		load: {
			effect: "default",
			speed: 1000
		},
		pullOutSegmentOnClick: {
			effect: "bounce",
			speed: 300,
			size: 10
		},
		highlightSegmentOnMouseover: true,
		highlightLuminosity: -0.4
		
	},
	tooltips: {
		enabled: true,
		type: "caption", // caption|placeholder
		placeholderParser: null,
		styles: {
			fadeInSpeed: 250,
			backgroundColor: "#000000",
			backgroundOpacity: 0.5,
			color: "#efefef",
			borderRadius: 2,
			font: "arial",
			fontSize: 12,
			padding: 4
		}
	},

	misc: {
		colors: {
			background: null, // transparent
			segmentStroke: "black"
		},
		gradient: {
			enabled: true,
			percentage: 40,
			color: "#000000"
		},
		cssPrefix: null
	},

	callbacks: {
		onload: function(){
			
		},
		onMouseoverSegment: function(){
			
		},
		onMouseoutSegment: function(){
			
		},
		onClickSegment: function(e){
			
		}
	}
	
});

//window.addEventListener("resize", function(){}, true);