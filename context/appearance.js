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

femaleEyeData = [1,5,76,15,43,3,1,2,4,2,3,4]
femaleEyeData = [1,17,143,1,1,107,3,31,6,3,2,37,1,13,17]
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
  a = i
  if (femaleEyeColorNum[a] == "amber"){
    return "#FFC200";
  }else if (femaleEyeColorNum[a] == "black") {
    return "black";
  }else if (femaleEyeColorNum[a] == "blue") {
    return "#2F5980";
  }else if (femaleEyeColorNum[a] == "brown") {
    return "#85430B";
  }else if (femaleEyeColorNum[a] == "green") {
    return "#a8b461";
  }else if (femaleEyeColorNum[a] == "hazal") {
    return "#8E7618";
  }else if (femaleEyeColorNum[a] == "indigo") {
    return "#4B0082";
  }else if (femaleEyeColorNum[a] == "purple") {
    return "#783185";
  }else if (femaleEyeColorNum[a] == "red") {
    return "#e63946";
  }else if (femaleEyeColorNum[a] == "voilet") {
    return "#EE82EE";
  }else if (femaleEyeColorNum[a] == "white") {
    return "white";
  }else if (femaleEyeColorNum[a] == "yellow") {
    return "#e9c46a";
  }else {
    return "grey"
  }
}





let simulation = d3.forceSimulation(femaleEyeData)
     .force("x",d3.forceX(w/2))
     .force("y",d3.forceY(680))
     .force("manyBody",d3.forceManyBody().strength(-50))
//      .on("tick",simulationRan)
     ;
//
// function simulationRan(){
// //  console.log(basicInfo[0].x);
//   viz.selectAll(".femaleEyeGroups")
//   .attr("transform",function(d){
//     return "translate("+d.x+","+d.y+")"
//   })
// }




}
