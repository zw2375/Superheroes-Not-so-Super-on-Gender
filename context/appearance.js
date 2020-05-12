let w = 1500;
let h = 5000;
let xpadding = 100;
let ypadding = 50;
let rScale = d3.scaleLinear().domain([1, 143]).range([50, 300]);



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

for (var i = 0; i < femaleEye.length; i++) {
  if (femaleEye[i] in femaleEyeColorNum) {
    femaleEyeColorNum[femaleEye[i]]++
  }else {
    femaleEyeColorNum[femaleEye[i]] = 1
  }
}


maleEyeColorNum = []

for (var i = 0; i < maleEye.length; i++) {
  if (maleEye[i] in maleEyeColorNum) {
    maleEyeColorNum[maleEye[i]]++
  }else {
    maleEyeColorNum[maleEye[i]] = 1
  }
}

console.log(femaleEyeColorNum);
console.log(maleEyeColorNum);

femaleEyeGroups =  viz.data(femaleEyeColorNum).enter().append("g").attr("class","femaleEyeGroups");

coloredCircle = femaleEyeGroups.append("circle")
.attr("cx",200)
.attr("cy",200)
.attr("r",function(i){
  return rScale(femaleEyeColorNum[i])
})
.attr("fill",chooseColor)
;


function chooseColor(i) {
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
  }
}


// amber1 = femaleEyeGroups.append("circle")
//           .attr("cx",200)
//           .attr("cy",200)
//           .attr("r",rScale(1))
//           .attr("fill","#FFC200")
//           ;
// black1 = femaleEyeGroups.append("circle")
//           .attr("cx",300)
//           .attr("cy",200)
//           .attr("r",rScale(5))
//           .attr("fill","black")
//           ;

// blue1 = femaleEyeGroups.append("circle")
//           .attr("cx",800)
//           .attr("cy",200)
//           .attr("r",rScale(76))
//           .attr("fill","#2F5980")
//           ;
//
// brown1 = femaleEyeGroups.append("circle")
//           .attr("cx",1000)
//           .attr("cy",200)
//           .attr("r",rScale(15))
//           .attr("fill","#85430B")
//           ;

// green1 = femaleEyeGroups.append("circle")
//           .attr("cx",100)
//           .attr("cy",200)
//           .attr("r",rScale(43))
//           .attr("fill","#a8b461")
//           ;

// hazal1 = femaleEyeGroups.append("circle")
//           .attr("cx",300)
//           .attr("cy",200)
//           .attr("r",rScale(1))
//           .attr("fill","#8E7618")
//           ;
//
// indigo1 = femaleEyeGroups.append("circle")
//           .attr("cx",400)
//           .attr("cy",300)
//           .attr("r",rScale(2))
//           .attr("fill","#4B0082")
//           ;

// purple = femaleEyeGroups.append("circle")
//           .attr("cx",500)
//           .attr("cy",300)
//           .attr("r",rScale(2))
//           .attr("fill","#783185")
//           ;
// red1 = femaleEyeGroups.append("circle")
//           .attr("cx",600)
//           .attr("cy",300)
//           .attr("r",rScale(4))
//           .attr("fill","#e63946")
//           ;
// voilet1 = femaleEyeGroups.append("circle")
//           .attr("cx",900)
//           .attr("cy",300)
//           .attr("r",rScale(2))
//           .attr("fill","#EE82EE")
//           ;
//
// white1 = femaleEyeGroups.append("circle")
//           .attr("cx",600)
//           .attr("cy",300)
//           .attr("r",rScale(3))
//           .attr("fill","white")
//           ;

// yellow1 = femaleEyeGroups.append("circle")
//           .attr("cx",600)
//           .attr("cy",300)
//           .attr("r",rScale(4))
//           .attr("fill","#e9c46a")
//           ;






// let simulation = d3.forceSimulation(femaleEyeColorNum)
//      .force("cx",d3.forceX(w/2))
//      .force("cy",d3.forceY(680))
//      .force("manyBody",d3.forceManyBody().strength(-50))
//      .on("tick",simulationRan)
//     ;
//
// function simulationRan(){
// //  console.log(basicInfo[0].x);
//   viz.selectAll(".femaleEyeGroups")
//   .attr("transform",function(){
//     return "translate("+d.x+","+d.y+")"
//   })
// }




}
