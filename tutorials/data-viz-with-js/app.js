requirejs.config({paths: {"d3": "https://d3js.org/d3.v4.min"},
	              included: false
                }
               );

 requirejs(["d3"], function(d3) {
    
    console.log('latest attempt');
    console.log(d3.version);
 });