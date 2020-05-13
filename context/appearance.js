let w = 1500;
let h = 1500;


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
    let xScale = d3.scaleLinear().domain([0,19]).range([20, w]);
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
console.log(maleEyeColorNum);
// femaleEyeData = [1,5,76,15,43,3,1,2,4,2,3,4]
// maleEyeData = [1,17,143,1,1,107,3,31,6,3,2,37,1,13,17]
// console.log(femaleEyeColorNum);
// console.log(maleEyeColorNum);

let femaleEyeGroups =  viz.selectAll(".femaleEyeGroups").data(femaleEyeColorNum).enter()
                                                                              .append("g")
// var color = "here"                                                                  //.attr("class","femaleEyeGroups");
//
//   // textElement = viz.append("text")
//   //         .attr("x",100)
//   //         .attr("y",200)
//   //         .attr("font-size",50)
//   //         .attr("fill","black")
//   //         .text(color)
//   //         ;
viz.append("text")
    .attr("x",200)
    .attr("y",200)
    .text("Female characters' Eye color")
    .attr("font-family","Nanum Brush Script")
    .attr("font-size","7em")
  //  .attr("fill","#F25F5C")
    ;

coloredCircle = femaleEyeGroups.append("circle")
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
                                // .on("mouseover", function(d,i){
                                //   color = d.color
                                // })
                               ;



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
    }else if (femaleEyeColorNum[a].color == "hazal") {
      return "#8E7618";
    }else if (femaleEyeColorNum[a].color == "indigo") {
      return "#4B0082";
    }else if (femaleEyeColorNum[a].color == "purple") {
      return "#783185";
    }else if (femaleEyeColorNum[a].color == "red") {
      return "#e63946";
    }else if (femaleEyeColorNum[a].color == "voilet") {
      return "#EE82EE";
    }else if (femaleEyeColorNum[a].color == "white") {
      return "white";
    }else if (femaleEyeColorNum[a].color == "yellow"||"yellow (without irises)"||"yellow / blue") {
      return "#e9c46a";
    }else {
      return "gray"
    }
  }


  let maleEyeGroups =  viz.selectAll(".maleEyeGroups").data(maleEyeColorNum).enter()
                                                                                .append("g")
                                                                                .attr("class","maleEyeGroups");
// var color = "here"
  //
  //   // textElement = viz.append("text")
  //   //         .attr("x",100)
  //   //         .attr("y",200)
  //   //         .attr("font-size",50)
  //   //         .attr("fill","black")
  //   //         .text(color)
  //   //         ;
  viz.append("text")
      .attr("x",200)
      .attr("y",500)
      .text("Male characters' Eye color")
      .attr("font-family","Nanum Brush Script")
      .attr("font-size","7em")
    //  .attr("fill","#F25F5C")
      ;

  maleEyeGroups.append("circle")
                  .attr("cx",function(d,i){
                    return xScale(i) +100
                  })
                  .attr("cy",700)
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
                  // .on("mouseover", function(d,i){
                  //   color = d.color
                  // })
                 ;



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
      }else if (maleEyeColorNum[a].color == "hazal") {
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
      }else {
        return "grey"
      }
    }
//  let simulation = d3.forceSimulation(femaleEyeData)
//      // .force("x",d3.forceX(w/2))
//      // .force("y",d3.forceY(680))
//      .force("manyBody",d3.forceManyBody().strength(-50))
// //      .on("tick",simulationRan)
//      ;
//
// function simulationRan(){
// //  console.log(basicInfo[0].x);
//   viz.selectAll(".femaleEyeGroups")
//   .attr("transform",function(d){
//     return "translate("+d.x+","+d.y+")"
//   })
// }
}
