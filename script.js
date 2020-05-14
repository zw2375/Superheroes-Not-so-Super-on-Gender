let w = 1450;
let h = 1600;
let xpadding = 100;
let ypadding = 50;

var string = "Hello there ! (please keep scrolling)";
var str = string.split("");
var el = document.getElementById('begin');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();

function updateText(){
  var str = string.split("");
  var el = document.getElementById(id);
  (function animate() {
  str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
  var running = setTimeout(animate, 90);
  })();
}


enterView({

	selector: '.question',
	enter: function(el) {
    id  = "question";
    string = "Quick question!";
    string = "If I ask you to quickly come up with a superhero that you are familiar with.Who do you think of?";
		updateText();
	},
	exit: function(el) {
    string = ""
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({

	selector: '.answer',
	enter: function(el) {
    id  = "answer";
    string = "Superman? Batman? Iron Man? Spiderman?";
		updateText();
	},
	exit: function(el) {
    string = ""
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({

	selector: '.assumption',
	enter: function(el) {
    id  = "assumption";
    string = "No matter who do you think of,I am more than 70% sure it's a male character.";
		updateText();
	},
	exit: function(el) {
    string = ""
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({

	selector: '.reason',
	enter: function(el) {
    id  = "reason";
    string = "Why?Becase only 26.7 percent of all DC and Marvel characters are female. Surprise?Superhero actually are not that super when it comes to gender.";
		updateText();
	},
	exit: function(el) {
    string = ""
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({

	selector: '.transToContext',
	enter: function(el) {
    id  = "transToContext";
    string = "Let’s take a detailed look AT that!";
		updateText();
	},
	exit: function(el) {
    string = ""
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

//put the svg onto the page:
let viz = d3.select(".sticky")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

var textBar = viz.append("g")
                  .attr("class","textBar")
                  ;


textBar.append("rect")
        .attr("x",0)
        .attr("y",0)
        .attr("height",200)
        .attr("width",1400)
        .attr("fill","white")
        ;

textBar.append("text")
    .attr("x",200)
    .attr("y",100)
    .text( "Superheroes")
    .attr("font-size",70)
    .attr("fill","#8B0101")
    ;

var container = viz.append("g").attr("class","lines")

container.append("rect")
        .attr("x",0)
        .attr("y",700)
        .attr("height",200)
        .attr("width",1400)
        .attr("fill","white")
        ;

viz.append("image")
          .attr("x",1000)
          .attr("y",70)
          .attr("width",500)
          .attr("height",650)
          .attr("xlink:href","https://thumbs.gfycat.com/BlaringCoolGemsbuck-small.gif")
          ;


var lineData = [ { "x": 700,   "y": 590},  { "x": 100,  "y": 705},
                   { "x": 70,  "y": 605}, { "x": 100,  "y": 650},
                   { "x": 1620,  "y": 700}, ];


  var lineFunction = d3.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .curve(d3.curveNatural);


 var lineGraph = container.append("path")
                             .attr("d", lineFunction(lineData))
                             .attr("stroke", "#8B0101")
                             .attr("stroke-width", 9)
                             .attr("fill", "#8B0101")
                             ;

  var lineData = [ { "x": 950,   "y": 87},  { "x": 1400,  "y": 97},
                   { "x": 900,  "y": 62}, { "x": 600,  "y": 32},
                   { "x": 800,  "y": 47},  { "x": 600, "y": 52}];


  var lineFunction = d3.line()
   .x(function(d) { return d.x; })
   .y(function(d) { return d.y; })
   .curve(d3.curveNatural);



  var lineGraph = container.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "#8B0101")
                            .attr("stroke-width", 8)
                            .attr("fill", "#8B0101")
                            ;
  var lineData = [ { "x": 130,   "y": 117},  { "x": 30,  "y":157},
                  //{ "x": 50,  "y": 112}, { "x": 80,  "y": 250},
                  { "x": 70,  "y": 200},  { "x": 10, "y": 750}];


  var lineFunction = d3.line()
   .x(function(d) { return d.x; })
   .y(function(d) { return d.y; })
   .curve(d3.curveNatural);



  var lineGraph = container.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "#070E3F")
                            .attr("stroke-width", 6)
                            .attr("fill", "#070E3F")
                            ;
  var lineData = [ { "x": 1490,   "y": 707},  { "x": 1400,  "y": 107},
                  { "x": 1400,  "y": 202}, { "x": 1400,  "y": 560},
                  { "x":1350, "y": 710}];


  var lineFunction = d3.line()
   .x(function(d) { return d.x; })
   .y(function(d) { return d.y; })
   .curve(d3.curveNatural);



  var lineGraph = container.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "#070E3F")
                            .attr("stroke-width", 5)
                            .attr("fill", "#070E3F")
                            ;
container.attr("x",400)
          .attr("y",100)
