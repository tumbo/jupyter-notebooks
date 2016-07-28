!function(global) {	

	console.log('app.js fired!');
	console.log('require version', requirejs.version);

	requirejs.config({
		paths: {"d3": "https://d3js.org/d3.v4.min"}
                });

 	define(["d3"], function(a) {
 		console.log(a.version);
 	});
	
	global.canvasObjects = [];
	
	// is it a race condition? answer... no
	setTimeout(function() {
		console.log(d3);
	}, 2000);

	var config = {
	   	type: 'bar',
	   	data: {
	       	labels: ['Red', 'Blue', 'Green'],
	       	datasets: [{	            	
	           	data: [32, 45, 67],
	           	backgroundColor: '#4d525a'
	        }]
	    },
	    options: {}
	};

	var el = $('#bar-graph');
	// $('.graph-wrapper').append('<h1>foo hello</h1>');
	
	var barGraph = new Chart(el, config);
	console.log(barGraph);
	global.canvasObjects.push(barGraph);

	
		
}(window)