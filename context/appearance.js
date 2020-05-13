let w = 1500;
let h = 5000;

let rScale = d3.scaleLinear().domain([1, 143]).range([10, 150]);



// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
  //  .style("background-color","lavender")
;
d3.json("heroes.json").then(visualizeAppearance);

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

// function getOccurrence(array, value) {
//     var count = 0;
//     array.forEach((v) => (v === value && count++));
//     return count;
// }
//
// femaleYellow = getOccurrence(femaleEye,"yellow")
// femaleBlue = getOccurrence(femaleEye,"blue")
// femaleBrown = getOccurrence(femaleEye,"brown")
// femaleRed = getOccurrence(femaleEye,"red")
// femaleViolet = getOccurrence(femaleEye,"violet")
femaleEyeColorNum = []
femaleColor = []
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


maleEyeColorNum = {}

for (var i = 0; i < maleEye.length; i++) {
  if (maleEye[i] in maleEyeColorNum) {
    maleEyeColorNum[maleEye[i]]++
  }else {
    maleEyeColorNum[maleEye[i]] = 1
  }
}

femaleEyeData = [1,5,76,15,43,3,1,2,4,2,3,4]
maleEyeData = [1,17,143,1,1,107,3,31,6,3,2,37,1,13,17]
console.log(femaleEyeColorNum);
console.log(maleEyeColorNum);

let femaleEyeGroups =  viz.selectAll(".femaleEyeGroups").data(femaleEyeData).enter()
                                                                              .append("g")
                                                                              .attr("class","femaleEyeGroups");



coloredCircle = femaleEyeGroups.append("circle")
                                .attr("cx",200)
                                .attr("cy",function(i){
                                  return i*50
                                })
                                 .attr("r",function(d,i){
                                  return rScale(d)
                                })
                                .attr("fill",chooseColor)
                               ;



function chooseColor(d,i) {
  for (var i = 0; i < femaleEyeData.length; i++) {
    if (femaleEyeColorNum[i] == "amber"){
      return "#FFC200";
    }else if (femaleEyeColorNum[i] == "black") {
      return "black";
    }else if (femaleEyeColorNum[i] == "blue") {
      return "#2F5980";
    }else if (femaleEyeColorNum[i] == "brown") {
      return "#85430B";
    }else if (femaleEyeColorNum[i] == "green") {
      return "#a8b461";
    }else if (femaleEyeColorNum[i] == "hazal") {
      return "#8E7618";
    }else if (femaleEyeColorNum[i] == "indigo") {
      return "#4B0082";
    }else if (femaleEyeColorNum[i] == "purple") {
      return "#783185";
    }else if (femaleEyeColorNum[i] == "red") {
      return "#e63946";
    }else if (femaleEyeColorNum[i] == "voilet") {
      return "#EE82EE";
    }else if (femaleEyeColorNum[i] == "white") {
      return "white";
    }else if (femaleEyeColorNum[i] == "yellow") {
      return "#e9c46a";
    }else {
      return "grey"
    }
  }

}





// let simulation = d3.forceSimulation(femaleEyeData)
//      .force("x",d3.forceX(w/2))
//      .force("y",d3.forceY(680))
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
}
