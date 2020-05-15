let w = 1500;
let h = 1500;
let xpadding = 50;
let ypadding = 50;
// put the svg onto the page:
 var svgContainer = d3.select('#visualizationWrapper');
let viz = svgContainer
  .append("svg")
    .style("width", w)
    .style("height", h)
  //  .style("background-color","lavender")
;
d3.csv("heroes_information.csv").then(basicViz);
let rScale = d3.scaleLinear().domain([0, 19]).range([50, 170]);


// function countedTitles(){
//
// }

function basicViz(basicInfo){
//  countedTitles = countedTitles(basicInfo)


  //specialNameWithQuantity = {"woman":5,"man":17,"girl":11,"boy":4,"ms":1,"mister":6,"king":2,"master":1,"captain":13}

      var woman = ["Batwoman V", "Catwoman", "Hawkwoman", "Hawkwoman II", "Hawkwoman III"];
      var man = ["Aquaman", "Batman", "Batman", "Batman II", "Birdman", "Cyborg Superman", "Darkman",
       "Deadman", "Hawkman", "Human Torch", "Iceman", "Liz Sherman", "Matt Parkman", "Ozymandias", "Plantman", "Sandman", "Superman"];
      var girl =["Batgirl", "Batgirl", "Batgirl III", "Batgirl IV", "Batgirl V", "Batgirl VI", "Elastigirl", "Hawkgirl", "Stargirl", "Supergirl", "Ultragirl"];
      var boy = ["Bumbleboy", "Hellboy", "Superboy", "Superboy-Prime"];
      var miss = ["Ms Marvel II"];
      var mister = ["Mister Fantastic", "Mister Freeze", "Mister Knife", "Mister Mxyzptlk", "Mister Sinister", "Mister Zsasz"];
      var king = ["Mockingbird", "Shrinking Violet"];
    // all can apply
      var master = ["Taskmaster"];
      var captain = ["Captain America", "Captain Atom", "Captain Britain", "Captain Cold", "Captain Epic", "Captain Hindsight", "Captain Mar-vell",
       "Captain Marvel", "Captain Marvel", "Captain Marvel II", "Captain Midnight", "Captain Planet", "Captain Universe"];




 let radiusforfemale = 1;
 let radiusformale = 1;
 let blue = "#020179";
 let red = "#dd0303";
 let femaleNum = "0";
 let maleNum = "0";
 let currentFemaleData = [];
 let  currentMaleData =[];
 // var tooltip = viz.append("div")
 //     // .style("position", "absolute")
 //     // .style("visibility", "hidden")
 //     .text("I'm a circle!")
 //     .attr("x",300)
 //     .attr("y",300)
 //     .attr("class","tooltip")
 //     ;

// viz.selectAll(".tooltip").append("text")
//                           .attr("x",0)
//                           .attr("y",0)
//                           .text("This is a toolti")

viz.append("text")
    .attr("x",400)
    .attr("y",200)
    .text("Female")
    .attr("font-family","Kranky")
    .attr("font-size","3em")
    .attr("font-weight","bold")
    .attr("fill","#8B0101")
    .attr("class","red")
    ;

viz.append("text")
    .attr("x",900)
    .attr("y",200)
    .text("Male")
    .attr("font-family","Kranky")
    .attr("font-size","3em")
    .attr("font-weight","bold")
    .attr("fill","#070E3F")
    .attr("class","blue")
    ;

let nameIntro = viz.append("text")
                  .attr("x",100)
                  .attr("y",100)
                  .text("Please scroll to check how gender-specific words are adopted in female and male characters")
                  .attr("font-family","Kranky")
                  .attr("font-size","2em")
                //  .attr("font-weight","bold")
                  ;

  let femaleCircleGroup= viz.append("g")
                             .attr("class","femaleCircle");

  let maleCircleGroup= viz.append("g")
                            .attr("class","maleCircle");

  femaleCircle = femaleCircleGroup.append("circle")
        .attr("cx",450)
        .attr("cy",400)
        .attr("r",120)
        .attr("class","femaleCircle")
        ;

        //
        // textElement = viz.append("text")
        //         .attr("x",w/2)
        //         .attr("y",h/2)
        //         .attr("font-size",50)
        //         .attr("fill","white")
        //         .attr("stroke","black")
        //         .attr("class","IDcard")
        //         ;

  femaleNumber =femaleCircleGroup.append("text")
    //    .text(femaleNum)
        .attr("x",440)
        .attr("y",420)
        .attr("fill","white")
        .attr("font-family","Kranky")
        .attr("font-size","3em")
        .attr("class","femaleCircle")
        ;




enteringFemaleNameForPage =  viz.selectAll(".femaleTexts").data(currentFemaleData).enter()
                          .append("text")
                           .text(function(d,i){
                             return d
                           })
                           .attr("x",290)
                           .attr("y",function(d,i){
                             return i*20+600
                           })
                          .attr("fill",red)
                          .attr("font-family","Kranky")
                          .attr("font-size","2em")
                          .attr("class","femaleTexts")
                          ;




  maleCircle =maleCircleGroup.append("circle")
        .attr("cx",950)
        .attr("cy",400)
        .attr("r", 120)
        .attr("class","maleCircle")
        ;

  maleNumber =maleCircleGroup.append("text")
    .text(maleNum)
    .attr("x",940)
    .attr("y",420)
    .attr("fill","white")
    .attr("font-family","Kranky")
    .attr("font-size","3em")
    .attr("class","maleCircle")
    ;

  enteringMaleNameForPage =  viz.selectAll(".maleTexts").data(currentMaleData).enter()
                            .append("text")
                             .text(function(d,i){
                               return d
                             })
                             .attr("x",390)
                             .attr("y",function(d,i){
                               return i*20+600
                             })
                            .attr("fill",red)
                            .attr("font-family","Kranky")
                            .attr("font-size","2em")
                            .attr("class","maleTexts")
                            ;

function updateCircle(){

  // femaleEnteringElements = femaleNameForPage.enter();
  // femaleExitingElements = femaleNameForPage.exit();
  femaleNameForPage = viz.selectAll(".femaleTexts").data(currentFemaleData)
                                                    .text(function(d,i){
                                                     return d
                                                   })
                                                     .attr("x",200)
                                                     .attr("y",function(d,i){
                                                       return i*30+600
                                                     });

enteringFemaleNameForPage = femaleNameForPage.enter();

enteringFemaleNameForPage.append("text")
                        .text(function(d,i){
                         return d
                          })
                         .attr("x",390)
                         .attr("y",function(d,i){
                           return i*25+500
                         })
                        .attr("fill",red)
                        .attr("font-family","Kranky")
                        .attr("font-size","30px")
                        .attr("class","femaleTexts")
                        ;

existingFemaleNameForPage = femaleNameForPage.exit();
existingFemaleNameForPage.remove();

      femaleCircle
  		 .transition()
       .duration(1000)
  			.attr("r", rScale(radiusforfemale))
  			.attr("fill", red)
  	    ;

        femaleNumber
          .transition()
          .duration(2000)
          .text(femaleNum)
          ;



        maleCircle
  			  .transition()
          .duration(1000)
  			  .attr("r", rScale(radiusformale))
  			  .attr("fill", blue)
  	      ;

        maleNumber
          .transition()
          .duration(1000)
          .text(maleNum)
          ;
          //
      maleNameForPage = viz.selectAll(".maleTexts").data(currentMaleData)
                                                        .text(function(d,i){
                                                         return d
                                                       })
                                                         .attr("x",800)
                                                         .attr("y",function(d,i){
                                                           return i*30+600
                                                         });
      enteringMaleNameForPage = maleNameForPage.enter();

      enteringMaleNameForPage.append("text")
                            .text(function(d,i){
                             return d
                              })
                             .attr("x",1100)
                             .attr("y",function(d,i){
                               return i*25+500
                             })
                            .attr("fill",blue)
                            .attr("font-family","Kranky")
                            .attr("font-size","30px")
                            .attr("class","maleTexts")
                            ;

      existingMaleNameForPage = maleNameForPage.exit();
      existingMaleNameForPage.remove();
      }

 updateCircle()

//
enterView({
	selector: '.womanAndMan',
	enter: function(el) {
	//	color = red;
    radiusforfemale = 5;
    radiusformale = 19;
    femaleNum = "5"
    maleNum = "19"
    // newFemaleX = 100;
    // newFemaleY = 600;
    currentFemaleData = woman;
    currentMaleData = man;
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
     maleNum = "0"
     currentFemaleData = [];
     currentMaleData = [];
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});
//
enterView({
	selector: '.girlAndBoy',
	enter: function(el) {
    radiusforfemale =11;
    radiusformale = 4;
    femaleNum = "11"
    maleNum = "4"
    currentFemaleData = girl;
    currentMaleData = boy;
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
    currentFemaleData =[];
    currentMaleData = [];
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({
	selector: '.MsAndMister',
	enter: function(el) {
    radiusforfemale= 1;
    radiusformale = 6;
    femaleNum = "1"
    maleNum = "6"
    currentFemaleData = miss;
    currentMaleData = mister;
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
    currentFemaleData = [];
    currentMaleData = [];
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});



enterView({
	selector: '.queenAndKing',
	enter: function(el) {
    radiusforfemale= 0;
    radiusformale = 2;
    femaleNum = "0"
    maleNum = "2"
  //  femalename ='';
  currentFemaleData = [];
  currentMaleData = king;
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
    currentFemaleData = [];
    currentMaleData = [];
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({
	selector: '.master',
	enter: function(el) {
    radiusforfemale= 0;
    radiusformale = 1;
    femaleNum = "0"
    maleNum = "1"
    currentFemaleData = [];
    currentMaleData = master;
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
    currentFemaleData = [];
    currentMaleData = [];
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});
enterView({
	selector: '.captain',
	enter: function(el) {
    radiusforfemale= 1;
    radiusformale = 12;
    femaleNum = "1"
    maleNum = "12"
    femalename = "Captain Marvel"
    function remove(captain, element) {
      return captain.filter(el => el !== element);
    }
    captain = remove(captain, "x");
    currentFemaleData = ["Captain Marvel"];
    currentMaleData = captain;
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
    currentFemaleData = [];
    currentMaleData = [];
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});


 }
