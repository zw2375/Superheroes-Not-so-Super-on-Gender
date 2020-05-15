let w = 1500;
let h = 1200;


// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
  //  .style("background-color","lavender")
;
d3.json("heroes.json").then(visualizeAppearance);

let rScale = d3.scaleLinear().domain([1, 143]).range([10, 150]);
//    let yDomain = d3.extent(male, function(d){ return d.number });
    let xScale = d3.scaleLinear().domain([0,17]).range([20, w]);
    let xAxis = d3.axisBottom(xScale);
    let xAxisGroup = viz.append("g")
        .attr("class", "yaxisgroup")
        .attr("transform", "translate(0,"+h+")")
    ;
    xAxisGroup.call(xAxis);


function visualizeAppearance(basicInfo){
  femaleEye=[];
  maleEye = [];

 for (var i = 0; i < basicInfo.length; i++) {
   if (basicInfo[i].Gender == "Female") {
     femaleEye.push(basicInfo[i]['Eye color'])
   }else if (basicInfo[i].Gender == "Male") {
     maleEye.push(basicInfo[i]['Eye color'])
   }

 }

color = '';


femaleEyeColorNum = [];
femaleColor = [];

for (var i = 0; i < femaleEye.length; i++) {
  currentObject = {}
  if (femaleColor.includes(femaleEye[i])) {
     colorName = femaleEye[i]
     for (var a = 0; a < femaleEyeColorNum.length; a++) {
       if (femaleEyeColorNum[a].color == colorName){
         femaleEyeColorNum[a].number ++
       }
     }

  }else {
    femaleColor.push(femaleEye[i])
    currentObject.color= femaleEye[i];
    currentObject.number= 1
    femaleEyeColorNum.push(currentObject)
  }
}


maleEyeColorNum = [];
maleColor = [];
for (var i = 0; i < maleEye.length; i++) {
    currentMaleObject = {}
  if (maleColor.includes(maleEye[i])) {
     colorName = maleEye[i]
     for (var a = 0; a < maleEyeColorNum.length; a++) {
       if (maleEyeColorNum[a].color == colorName){
         maleEyeColorNum[a].number ++
       }
     }

  }else {
    maleColor.push(maleEye[i])
    currentMaleObject.color= maleEye[i];
    currentMaleObject.number= 1
    maleEyeColorNum.push(currentMaleObject)
  }
}
femaleEyeColorNum.splice(10,1)
femaleEyeColorNum.splice(12,1)
femaleEyeColorNum[1].number +=2
maleEyeColorNum.splice(10,1)
maleEyeColorNum.splice(12,1)
maleEyeColorNum.splice(13,1)
maleEyeColorNum.splice(13,1)
femaleEyeColorNum[4].number +=1


let femaleEyeGroups =  viz.selectAll(".femaleEyeGroups").data(femaleEyeColorNum).enter()
                                                                              .append("g")
                                                                              .attr("class","femaleEyeGroups")
                                                                              ;

viz.append("text")
    .attr("x",100)
    .attr("y",200)
    .text("Female characters' Eye color")
    .attr("font-family","Kranky")
    .attr("font-size","2.5em")
    .attr("font-weight","bold")
    ;

    viz.append("text")
        .attr("x",850)
        .attr("y",200)
        .text("Male characters' Eye color")
        .attr("font-family","Kranky")
        .attr("font-size","2.5em")
        .attr("font-weight","bold")
        ;

currentColor= viz.append("text")
                  .attr("x",100)
                  .attr("y",100)
                  .text("Please hover on the circles to see more")
                  .attr("font-family","Kranky")
                  .attr("font-size","2em")
            //      .attr("fill","#8B0101")
                  .attr("class","currentColor")
                  ;

coloredFemaleCircle = femaleEyeGroups.append("circle")
                                .attr("cx",function(d,i){
                                  return xScale(i) +100
                                })
                                .attr("cy",300)
                                 .attr("r",function(d,i){
                                  return rScale(d.number)
                                })
                                .attr("fill",chooseFemaleColor)
                                .attr("stroke",function(d,i){
                                  if (d.color == "white") {
                                    return "black"
                                  }else {
                                    return "transparent"
                                  }
                                })
                                .on("mouseover", function(d,i){
                                  d3.select(this)
                                    .transition()
                                    .duration(500)
                                    .attr("r",rScale(d.number)+10)
                                    ;

                                 let mouseInSVG = d3.mouse(viz.node());
                                      currentColor.transition()
                                                  .duration(1000)
                                                  .text(d.color + ":"+ d.number)
                                                  .attr("x",mouseInSVG[0])
                                                  .attr("y",mouseInSVG[1])
                                                //  .attr("fill","#8B0101")
                                                   ;
                                  })
                                  // .on("mousemove", function(d,i){
                                  //
                                  //  let mouseInSVG = d3.mouse(viz.node());
                                  //       currentColor.text(d.color + ":"+ d.number)
                                  //                   .transition()
                                  //                   .attr("x",mouseInSVG[0])
                                  //                   .attr("y",mouseInSVG[1])
                                  //                   ;
                                  //   })

                                  .on("mouseout",function(d,i){
                                    d3.select(this)
                                      .transition()
                                      .duration(500)
                                      .attr("r",rScale(d.number))
                                      ;
                                    currentColor.text("");
                                  })
                                 ;



console.log(femaleEyeColorNum);


function chooseFemaleColor(d,i) {
    a = i
    if (femaleEyeColorNum[a].color == "amber"){
      return "#FFC200";
    }else if (femaleEyeColorNum[a].color == "black") {
      return "black";
    }else if (femaleEyeColorNum[a].color == "blue") {
      return "#2F5980";
    }else if (femaleEyeColorNum[a].color == "brown") {
      return "#85430B";
    }else if (femaleEyeColorNum[a].color == "green") {
      return "#a8b461";
    }else if (femaleEyeColorNum[a].color == "hazel") {
      return "#8E7618";
    }else if (femaleEyeColorNum[a].color == "indigo") {
      return "#4B0082";
    }else if (femaleEyeColorNum[a].color == "purple") {
      return "#783185";
    }else if (femaleEyeColorNum[a].color == "red") {
      return "#CC221F";
    }else if (femaleEyeColorNum[a].color == "violet") {
      return "#EE82EE";
    }else if (femaleEyeColorNum[a].color == "white") {
      return "white";
    }else if (femaleEyeColorNum[a].color == "yellow") {
      return "#e9c46a";
    }else  {

      return "#805E7B";
    }
  }


  let maleEyeGroups =  viz.selectAll(".maleEyeGroups").data(maleEyeColorNum).enter()
                                                                                .append("g")
                                                                                .attr("class","maleEyeGroups");
  currentMaleColor= viz.append("text")
                    .attr("x",800)
                    .attr("y",100)
                    .text("Please hover on the circles to see more")
                    .attr("font-family","Kranky")
                    .attr("font-size","2em")
                  //  .attr("fill","#070E3F")
                    .attr("class","currentColor")
                    ;


  coloredMaleCircle =maleEyeGroups.append("circle")
                                  .attr("cx",function(d,i){
                                    return xScale(i) +100
                                  })
                                  .attr("cy",300)
                                   .attr("r",function(d,i){
                                    return rScale(d.number)
                                  })
                                  .attr("fill",chooseMaleColor)
                                  .attr("stroke",function(d,i){
                                    if (d.color == "white") {
                                      return "black"
                                    }else {
                                      return "transparent"
                                    }
                                  })
                                  .on("mouseover", function(d,i){
                                    d3.select(this)
                                      .transition()
                                      .duration(500)
                                      .attr("r",rScale(d.number)+10)
                                      ;

                                   let mouseInSVG = d3.mouse(viz.node());
                                        currentMaleColor.transition()
                                                    .duration(1000)
                                                    .text(d.color + ":"+ d.number)
                                                    .attr("x",mouseInSVG[0])
                                                    .attr("y",mouseInSVG[1])

                                                     ;
                                    })
                                    .on("mousemove", function(d,i){

                                     let mouseInSVG = d3.mouse(viz.node());
                                          currentMaleColor.text(d.color + ":"+ d.number)
                                                      .transition()
                                                      .attr("x",mouseInSVG[0])
                                                      .attr("y",mouseInSVG[1])
                                                      ;
                                      })

                                    .on("mouseout",function(d,i){
                                      d3.select(this)
                                        .transition()
                                        .duration(500)
                                        .attr("r",rScale(d.number))
                                        ;
                                      currentMaleColor.text("");
                                    })
                                   ;
  //
  function chooseMaleColor(d,i) {
      a = i
      if (maleEyeColorNum[a].color == "amber"){
        return "#FFC200";
      }else if (maleEyeColorNum[a].color == "black") {
        return "black";
      }else if (maleEyeColorNum[a].color == "blue") {
        return "#2F5980";
      }else if (maleEyeColorNum[a].color == "brown") {
        return "#85430B";
      }else if (maleEyeColorNum[a].color == "green") {
        return "#a8b461";
      }else if (maleEyeColorNum[a].color == "hazel") {
        return "#8E7618";
      }else if (maleEyeColorNum[a].color == "indigo") {
        return "#4B0082";
      }else if (maleEyeColorNum[a].color == "purple") {
        return "#783185";
      }else if (maleEyeColorNum[a].color == "red") {
        return "#e63946";
      }else if (maleEyeColorNum[a].color == "voilet") {
        return "#EE82EE";
      }else if (maleEyeColorNum[a].color == "white") {
        return "white";
      }else if (maleEyeColorNum[a].color == "yellow") {
        return "#e9c46a";
      }else if (maleEyeColorNum[a].color == "gold") {
        return "#CFB53B";
      }else if (maleEyeColorNum[a].color == "bown") {
        return "#D2691E"
      }else if (maleEyeColorNum[a].color == "grey") {
        return "grey"
      }else if (maleEyeColorNum[a].color == "silver") {
        return "#C0C0C0"
      }else {
          console.log(i);
        return "#805E7B"
      }
    }
console.log(maleEyeColorNum);
 let simulation = d3.forceSimulation(femaleEyeColorNum)
           .force("forceX",d3.forceX(400))
           .force("forceY",d3.forceY(580))
        //   .force("manyBody",d3.forceManyBody().strength(-10))
  //        .force('charge', d3.forceManyBody().strength(5))
          .force('center', d3.forceCenter(300, 500))
          .force("collide",d3.forceCollide().radius(function(d){
            return rScale(d.number) +3
            }))
          .on("tick",femaleSimulationRan)
          ;

function femaleSimulationRan(){
  // console.log(femaleEyeColorNum[0].x);
  // viz.selectAll(".femaleEyeGroups")
  // .attr("transform",function(d){
  //   return "translate("+d.x+","+d.y+")"
  // });

  coloredFemaleCircle
      .attr("cx",function(d,i){
        return d.x
      })
      .attr("cy",function(d,i){
        return d.y
      })
      ;
  }


   let simulation2 = d3.forceSimulation(maleEyeColorNum)
             .force("forceX",d3.forceX(400))
             .force("forceY",d3.forceY(580))
          //   .force("manyBody",d3.forceManyBody().strength(-10))
    //        .force('charge', d3.forceManyBody().strength(5))
            .force('center', d3.forceCenter(1200, 500))
            .force("collide",d3.forceCollide().radius(function(d){
              return rScale(d.number) +3
              }))
            .on("tick",simulationRan)
            ;

  function simulationRan(){
    // console.log(femaleEyeColorNum[0].x);
    // viz.selectAll(".femaleEyeGroups")
    // .attr("transform",function(d){
    //   return "translate("+d.x+","+d.y+")"
    // });

    coloredMaleCircle
        .attr("cx",function(d,i){
          return d.x
        })
        .attr("cy",function(d,i){
          return d.y
        })
        ;
    }


}
