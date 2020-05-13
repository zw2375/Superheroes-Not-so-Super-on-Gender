let w = 1450;
let h = 1500;
let xpadding = 100;
let ypadding = 50;



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
        .attr("height",100)
        .attr("width",1200)
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

  var lineData = [ { "x": 700,   "y": 670},  { "x": 100,  "y": 705},
                   { "x": 70,  "y": 605}, { "x": 100,  "y": 650},
                   { "x": 1320,  "y": 700}, ];


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
  var lineData = [ { "x": 1390,   "y": 707},  { "x": 1300,  "y": 107},
                  { "x": 1300,  "y": 202}, { "x": 1390,  "y": 560},
                  { "x":1250, "y": 710}];


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
