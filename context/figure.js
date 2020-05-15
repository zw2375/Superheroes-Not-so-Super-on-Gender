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


d3.csv("heroes_information.csv").then(figureViz);

function figureViz(basicInfo){

  femaleHeight = [];
  maleHeight = [];
  a = 0;
  b = 0;

  for (var i = 0; i < basicInfo.length; i++) {
    currentObject = {}

    if (basicInfo[i].Gender == "Female") {
      currentObject.name = basicInfo[i].name;
      currentObject.height = Math.abs(basicInfo[i].Height) ;
      currentObject.number =  a;
      femaleHeight.push(currentObject);
      a ++ ;
    }else if (basicInfo[i].Gender == "Male") {
      currentObject.name = basicInfo[i].name;
      currentObject.height = Math.abs(basicInfo[i].Height) ;
      currentObject.number =  b;
      maleHeight.push(currentObject)
      b ++
    }
  }

  // console.log(femaleHeight);

  let numberExtent = d3.extent(maleHeight, function(d, i){
    return d.number;
  });

  let heightExtent = d3.extent(basicInfo, function(d, i){
      return Math.abs(d.Height);
    });

  let xScale = d3.scaleLinear().domain(numberExtent).range([xPadding, w-xPadding]);
  let yScale = d3.scaleLinear().domain(heightExtent).range([h-yPadding, yPadding]);

  function buildXAndYAxis(xScale, yScale){

  let xAxisGroup = viz.append("g").attr("class", 'xaxis');
  let xAxis = d3.axisBottom(xScale);

  xAxisGroup.call(xAxis)
  xAxisGroup.attr("transform", "translate(0, "+ (h-yPadding) +")");
  xAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate("+w/2+", 40)")
    .append("text")
    .attr("fill", "black")
    .text("Heroes")
    .attr("font-family", "Kranky")
    .attr("font-weight","bold")
    .attr("font-size", "3em")
  ;

  let yAxisGroup = viz.append("g").attr("class", 'yaxis');
  let yAxis = d3.axisLeft(yScale);

  yAxisGroup.call(yAxis);
  yAxisGroup.attr("transform", "translate("+xPadding+", 0)");

  // yAxisGroup.append("g")
  //   .attr("transform", "translate(-33, "+h/2+") rotate(-90)")
  //   .append("text")
  //   .attr("fill", "black")
  //   .text("Height")
  //   .attr("font-family", "Kranky")
  //   .attr("font-weight","bold")
  //   .attr("font-size", "3em")
  //   .attr('class', 'yLabel')
  //   ;
  }

  buildXAndYAxis(xScale, yScale);


  console.log(femaleHeight);
    var linePath = d3.line()
                        .x(function(d){
                          return xScale(d.number)
                        })
                        .y(function(d){
                          return yScale(d.height)
                        });


  let enteringFemale = viz.append("g")
                          .attr("class","enteringFemale")
                          ;




  femaleLine = enteringFemale.append("path")
                  // .attr('transform', function(d,i){
                  //    let x = xScale(d.number);
                  //    let y = yScale(d.life);
                  //    return "translate (" + x +"," + y +")"
                  //  })
                  .attr('d', linePath(femaleHeight))
                  .attr('fill', 'none')
                  .attr('stroke-width', 2)
                  .attr('stroke', '#8B0101')
                  .attr("class","femaleLine");

  femaleCircle = enteringFemale.selectAll('circle')
                  .data(femaleHeight)
                  .enter()
                  .append('circle')
                  .attr('r', 2)
                  .attr('transform', getGroupLocation)
                  .attr('fill', '#8B0101')
                  .attr("class","femaleCircle")
                  ;


  let enteringMale = viz.append("g")
                          .attr("class","enteringMale")
                          ;



  maleLine = enteringMale.append("path")
                  // .attr('transform', function(d,i){
                  //    let x = xScale(d.number);
                  //    let y = yScale(d.life);
                  //    return "translate (" + x +"," + y +")"
                  //  })
                  .attr('d', linePath(maleHeight))
                  .attr('fill', 'none')
                  .attr('stroke-width', 2)
                  .attr('stroke', '#070E3F')
                  .attr("class","maleLine")
                  ;

  maleCircle = enteringMale.selectAll('circle')
                  .data(maleHeight)
                  .enter()
                  .append('circle')
                  .attr('r', 2)
                  .attr('transform', getGroupLocation)
                  .attr('fill', '#070E3F')
                  .attr("class","maleCircle");


  function getGroupLocation(d,i){
    let x = xScale(d.number);
    let y = yScale(d.height);
    return "translate (" + x +"," + y +")"
    }

heightViz()

function heightViz(){


  var linePath = d3.line()
                      .x(function(d){
                        return xScale(d.number)
                      })
                      .y(function(d){
                        return yScale(d.height)
                      });

  currentExtent = d3.extent(maleHeight, function(d, i){
    return d.height;
  });

    femaleLineForPage = viz.selectAll(".femaleLine")
                            .data(femaleHeight)
                            .transition()
                            .attr('d', linePath(femaleHeight))
                            ;
    // yAxisGroup = viz.select("class", 'yaxis');
    //
    // yAxisGroup.select(".yLabel")
    //     .text("Height")
    //     ;

    function getGroupLocation(d,i){
      let x = xScale(d.number);
      let y = yScale(d.height);
      return "translate (" + x +"," + y +")"
      }

    femaleCircleForPage = viz.selectAll(".femaleCircle")
                              .data(femaleHeight)
                              .transition()
                              .attr('transform', getGroupLocation)
                              ;

    maleLineForPage = viz.selectAll(".maleLine")
                            .data(maleHeight)
                            .transition()
                            .attr('d', linePath(maleHeight))
                            ;

    maleCircleForPage = viz.selectAll(".maleCircle")
                              .data(maleHeight)
                              .transition()
                              .attr('transform', getGroupLocation)
                              ;



}



  function weightViz(){

    femaleWeight = [];
    maleWeight = [];
    c = 0;
    d = 0;

    for (var i = 0; i < basicInfo.length; i++) {
      currentObject = {}

      if (basicInfo[i].Gender == "Female") {
        currentObject.name = basicInfo[i].name;
        currentObject.weight = Math.abs(basicInfo[i].Weight) ;
        currentObject.number =  c;
        femaleWeight.push(currentObject);
        c ++ ;
      }else if (basicInfo[i].Gender == "Male") {
        currentObject.name = basicInfo[i].name;
        currentObject.weight = Math.abs(basicInfo[i].Weight) ;
        currentObject.number =  d;
        maleWeight.push(currentObject)
        d ++
      }
    }

    var linePath = d3.line()
                        .x(function(d){
                          return xScale(d.number)
                        })
                        .y(function(d){
                          return yScale(d.weight)
                        });

    currentExtent = d3.extent(maleWeight, function(d, i){
      return d.weight;
    });

      femaleLineForPage = viz.selectAll(".femaleLine")
                              .data(femaleWeight)
                              .transition()
                              .attr('d', linePath(femaleWeight))
                              ;

      femaleCircleForPage = viz.selectAll(".femaleCircle")
                                .data(femaleWeight)
                                .transition()
                                .attr('transform', getGroupLocation)
                                ;

      maleLineForPage = viz.selectAll(".maleLine")
                              .data(maleWeight)
                              .transition()
                              .attr('d', linePath(maleWeight))
                              ;

      maleCircleForPage = viz.selectAll(".maleCircle")
                                .data(maleWeight)
                                .transition()
                                .attr('transform', getGroupLocation)
                                ;

      function getGroupLocation(d,i){
        let x = xScale(d.number);
        let y = yScale(d.weight);
        return "translate (" + x +"," + y +")"
        }

        // yAxisGroup = viz.select("class", 'yaxis');
        //
        // yAxisGroup.select(".yLabel")
        //     .text("Weight")
        //     ;



  }



  document.getElementById("weightButton").addEventListener("click", weightViz);
  document.getElementById("heightButton").addEventListener("click", heightViz);
}
