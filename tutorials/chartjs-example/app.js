!function(global) {	

	console.log('app.js fired!');
	
	global.canvasObjects = [];
	
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