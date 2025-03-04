let w = window.innerWidth - 50;  // Fit width to screen
let h = window.innerHeight - 100; // Fit height to screen
let xpadding = 100;
let ypadding = 0;



//put the svg onto the page:
// let viz = d3.select("#container")
//   .append("svg")
//     .style("width", w)
//     .style("height", h)
// ;
let viz = d3.select("#container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `0 0 ${w} ${h}`)
    .attr("preserveAspectRatio", "xMidYMid meet");
d3.json("heroes.json").then(basicViz);



//The viz of basic info

function basicViz(basicInfo){

  console.log(basicInfo);
var currentData =[]
let simulation = d3.forceSimulation(currentData)

    .force("forceX", d3.forceX(d => {
        if (d.Gender === "Female") return w / 4;  // Left side
        if (d.Gender === "Male") return (3 * w) / 4; // Right side
        return w / 2;  // Center for Non-Binary
    }).strength(0.5)) // Higher strength keeps nodes in place

    .force("forceY", d3.forceY(d => h/2 - 30).strength(0.2)) // Keeps nodes from spreading too much

    .force("manyBody", d3.forceManyBody().strength(-5)) // Reduces excessive repulsion
    .force("collide", d3.forceCollide().radius(12)) // Prevents overlap
    .force("radial", d3.forceRadial(120, (3 * w) / 4, h / 2).strength(d => d.Gender === "Male" ? 0.4 : 0)) 

    .on("tick", simulationRan);
// let simulation = d3.forceSimulation(currentData)
//      .force("forceX",d3.forceX(w*6/9))
//      .force("forceY",d3.forceY(380))
//      .force("manyBody",d3.forceManyBody().strength(-20))
//   //.force("center",d3.forceCenter([w/2,h/2]))
//   //  .force("collide",d3.forceCollide().radius(function(d){
//   //   return 10
//   // }))
//     .on("tick",simulationRan)
//     ;

function simulationRan(){
//  console.log(basicInfo[0].x);
  viz.selectAll(".basicInfoGroup")
  .attr("transform",function(d){
    return "translate("+d.x+","+d.y+")"
  })
}






let a = 0;
let maleNum = 0;
let femaleNum = 0;
let none = 0;

//let time = 1000;
femaleNumtxt = viz.append("text")
        .attr("x",30)
        .attr("y",600)
        .attr("font-size",30)
        .attr("fill","#8B0101")
        .attr("font-family","Kranky")
        .attr("background-color","white")
        ;
maleNumtxt = viz.append("text")
              .attr("x",30)
              .attr("y",630)
              .attr("font-size",30)
              .attr("fill","#070E3F")
              .attr("font-family","Kranky")
              ;
nonNumtxt = viz.append("text")
          .attr("x",30)
          .attr("y",660)
          .attr("font-size",30)
          .attr("fill","#E4A332")
          .attr("font-family","Kranky")
          ;


// let quickText = viz.append("text")
//                     .attr("x",120)
//                     .attr("y",200)
//                     .text("Hover to make it quicker")
//                     .attr("fill","#E4A332")
//                     .on("mouseover", function changeTime(){
//                     //  quickText.attr("fill","black")
//                       time = 1
//                     })
//                     ;

function enterHero(){

currentData.push(basicInfo[a])
//console.log(currentData);
let basicInfoGroups = viz.selectAll(".basicInfoGroup").data(currentData).enter()
                                                    .append("g")
                                                    .attr("class","basicInfoGroup")
                                                    ;

if (basicInfo[a].Gender == "Female"){
  femaleNum ++
}
if (basicInfo[a].Gender == "Male"){
  maleNum ++
}
if (basicInfo[a].Gender == "-"){
  none ++
}
femaleNumtxt.text("Current female number:" + femaleNum)
maleNumtxt.text("Current male number:" + maleNum)
nonNumtxt.text("Current non-binary/other number:" + none)
let defs = basicInfoGroups.append("defs")
let pattern = defs.append("pattern")
                    .attr("id",function(d, i){
                      return "image"+i
                    })
                    .attr("x","0%")
                    .attr("y","0%")
                    .attr("height","150%")
                    .attr("width","150%")
                    .attr("viewBox","100 100 512 512")
                    ;

let image = pattern.append("image")
                 .attr("x","0%")
                 .attr("y","0%")
                 .attr("width","512")
                 .attr("height","512")
                 .attr("xlink:href", function(d,i){
                        return d.imgURL
                      })
                  ;


singleImg = basicInfoGroups
                    .append("circle")
                    .attr("r",10)
                    .attr("fill",function(d){
                             if (d.Gender == "Female") {
                               return "#8B0101"
                             }
                             else if (d.Gender == "Male") {
                               return "#070E3F"
                             }
                             else {
                               return "#E4A332"
                             }
                           }
                         )
                    .on("mouseover",function(d,index){
                          let url = "url(#image"+index+")";
                          d3.select(this.parentNode).raise();
                          d3.select(this)
                            .attr("fill", url)
                            .transition()
                            .duration(500)
                            .attr("r",100)
                          })

                    .on("mouseout",function(d,i){
                          d3.select(this)
                          .transition()
                          .attr("r",10)
                        });


simulation.nodes(currentData);

simulation.alpha(1).restart();
simulation.tick(4);
a ++
if(a == basicInfo.length){
     clearInterval(enter);
 }
}
enter = setInterval(enterHero,20)






     // var tooltip = d3.select("#container")
      // 	.append("div")
      // 	.style("position", "absolute")
      // 	.style("z-index", "10")
      // 	.style("visibility", "hidden")
      // 	.text("a simple tooltip");


//
//     let yDomain = d3.extent(basicInfo, function(d){ return d.Weight });
//     let yScale = d3.scaleLinear().domain(yDomain).range([ypadding, w-ypadding]);
//     let yAxis = d3.axisBottom(yScale);
//     let yAxisGroup = viz.append("g")
//         .attr("class", "yaxisgroup")
//         .attr("transform", "translate(0,"+(h-ypadding)+")")
//     ;
//     yAxisGroup.call(yAxis);
//
//     let basicInfoGroup = viz.selectAll(".basicInfoGroup").data(basicInfo).enter()
//       .append("g")
//         .attr("class","basicInfoGroup")
//         ;
// //
//     let defs = basicInfoGroup.append("defs")
//     let pattern = defs.append("pattern")
//                         .attr("id",function(d, i){
//                           return "image"+i
//                         })
//                         .attr("x","0%")
//                         .attr("y","0%")
//                         .attr("height","150%")
//                         .attr("width","150%")
//                         .attr("viewBox","100 100 512 512")
//                         ;
//  let image = pattern.append("image")
//                      .attr("x","0%")
//                      .attr("y","0%")
//                      .attr("width","512")
//                      .attr("height","512")
//                      .attr("xlink:href", function(d,i){
//                             return d.imgURL
//                           })
//                       ;
//
// singleImg = basicInfoGroup.append("circle")
//                             .attr("cx",w/11)
//                             .attr("cy",h/2)
//                             .attr("r",chooseSize)
//                             .attr("class","singleHero")
//                             .attr("fill",function(d){
//                                 if (d.Gender == "Female") {
//                                   return "#8B0101"
//                                 }
//                                 else if (d.Gender == "Male") {
//                                   return "#070E3F"
//                                 }
//                                 else {
//                                   return "#E4A332"
//                                 }
//                               }
//                             )
//                             .on("mouseover",function(d,i){
//                                  d3.select(this)
//                                    .transition()
//                                    .duration(500)
//                                    .attr("r",100)
//                                    .attr("fill","url(#image"+i+")")
//                                    ;
//                              //   tooltip.style("visibility", "visible");
//                                  textElement.text(d.name)
//                                    .attr("x",w/9)
//                                    .attr("y",function(d){
//                                      return d3.event.clientY
//                                    })
//                                })
//                                .on("mouseout",function(d,i){
//                                   textElement.text('');
//                                  d3.select(this)
//                                  .transition()
//                                  .attr("r",chooseSize)
//                                // tooltip.style("visibility", "hidden");
//                                });

//
//
//
//
// textElement = viz.append("text")
//         .attr("x",w/2)
//         .attr("y",h/2)
//         .attr("font-size",50)
//         .attr("fill","white")
//         .attr("stroke","black")
//         .attr("class","IDcard")
//         ;

//

   // function chooseSize(){
   //   return (Math.random() * 10)
   // }
//
//
//   let simulation = d3.forceSimulation(basicInfo)
//     .force("forceX",d3.forceX(w/2))
//     .force("forceY",function(d){
//       return d3.forceY(yScale(d.Weight))
//     })
//     //.force("center",[100, 100])
//     .force("collide",d3.forceCollide().radius(function(d){
//       return 10
//     }))
//     .on("tick",simulationRan)
//     ;
//
//
//
//   basicInfo = basicInfo.map(function(datapoint){
//     datapoint.x = w/2
//     datapoint.y = yScale(datapoint.Weight)
//     return datapoint
//   })
//   //
//   function simulationRan(){
//   //  console.log(basicInfo[0].x);
//     viz.selectAll(".basicInfoGroup")
//     .attr("transform",function(d){
//       return "translate("+d.x+","+d.y+")"
//     })
// }
//
// var currentData = []
// setInterval(function(){
//
//   // Add a new random shape.
//
//
//
//   // Restart the layout.
//   forceSimulation.restart();
//
//   viz.selectAll("path")
//       .data(currentData)
//     .enter().append("path")
//       .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
//       .style("fill", "steelblue")
//       .style("stroke", "white")
//       .style("stroke-width", "1.5px")
//
// }, 1000);
//
//
//
//
 }
