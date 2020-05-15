let w = 1600;
let h = 800;
let xPadding = 50;
let yPadding = 50;
// put the svg onto the page:
 var svgContainer = d3.select('#container');
let viz = svgContainer
  .append("svg")
    .style("width", w)
    .style("height", h)
  //  .style("background-color","lavender")
;

// var container = viz.append("g").attr("class","lines")
// var lineData = [ { "x": 700,   "y": 590},  { "x": 100,  "y": 705},
//                    { "x": 70,  "y": 605}, { "x": 100,  "y": 650},
//                    { "x": 1620,  "y": 700}, ];
//
//
//   var lineFunction = d3.line()
//     .x(function(d) { return d.x; })
//     .y(function(d) { return d.y; })
//     .curve(d3.curveNatural);
//
//
//  var lineGraph = container.append("path")
//                              .attr("d", lineFunction(lineData))
//                              .attr("stroke", "#8B0101")
//                              .attr("stroke-width", 9)
//                              .attr("fill", "#8B0101")
//                              ;
//
//   var lineData = [ { "x": 950,   "y": 87},  { "x": 1400,  "y": 97},
//                    { "x": 900,  "y": 62}, { "x": 600,  "y": 32},
//                    { "x": 800,  "y": 47},  { "x": 600, "y": 52}];
//
//
//   var lineFunction = d3.line()
//    .x(function(d) { return d.x; })
//    .y(function(d) { return d.y; })
//    .curve(d3.curveNatural);
//
//
//
//   var lineGraph = container.append("path")
//                             .attr("d", lineFunction(lineData))
//                             .attr("stroke", "#8B0101")
//                             .attr("stroke-width", 8)
//                             .attr("fill", "#8B0101")
//                             ;
//   var lineData = [ { "x": 130,   "y": 117},  { "x": 30,  "y":157},
//                   //{ "x": 50,  "y": 112}, { "x": 80,  "y": 250},
//                   { "x": 70,  "y": 200},  { "x": 10, "y": 750}];
//
//
//   var lineFunction = d3.line()
//    .x(function(d) { return d.x; })
//    .y(function(d) { return d.y; })
//    .curve(d3.curveNatural);
//
//
//
//   var lineGraph = container.append("path")
//                             .attr("d", lineFunction(lineData))
//                             .attr("stroke", "#070E3F")
//                             .attr("stroke-width", 6)
//                             .attr("fill", "#070E3F")
//                             ;
//   var lineData = [ { "x": 1490,   "y": 707},  { "x": 1400,  "y": 107},
//                   { "x": 1400,  "y": 202}, { "x": 1400,  "y": 560},
//                   { "x":1350, "y": 710}];
//
//
//   var lineFunction = d3.line()
//    .x(function(d) { return d.x; })
//    .y(function(d) { return d.y; })
//    .curve(d3.curveNatural);
//
//
//
//   var lineGraph = container.append("path")
//                             .attr("d", lineFunction(lineData))
//                             .attr("stroke", "#070E3F")
//                             .attr("stroke-width", 5)
//                             .attr("fill", "#070E3F")
//                             ;

// intro = viz.append("g")
//             .attr("class","intro")
//             ;
//
// intro.append("text")
//       .attr("x",100)
//       .attr("y",100)
//       .attr("font-family","Kranky")
//       .attr("font-size","2em")
//       .attr("font-weight","bold")
//       .attr("fill","#8B0101")
//       .text("About this project")
//       .attr("class","introTitle")
//       ;
//
// intro.append("text")
//       .attr("x",200)
//       .attr("y",200)
//       // .attr("font-family","Kranky")
//       // .attr("font-size","2em")
//       // .attr("font-weight","bold")
//       // .attr("fill","#070E3F")
//       .text("Hi! This is Novia Wang. This project aims at showing an insight about gender")
//       ;
//
//       intro.append("text")
//             .attr("x",110)
//             .attr("y",230)
//             // .attr("font-family","Kranky")
//             // .attr("font-size","2em")
//             // .attr("font-weight","bold")
//             // .attr("fill","#070E3F")
//             .text("representation in Superheroes. ")
//             ;
