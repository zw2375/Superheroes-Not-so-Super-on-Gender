// const container = d3.select('#scrolly-overlay');
// const stepSel = container.selectAll('.step');
//
// function updateText(index) {
// 	const sel = container.select(`[text-index='${index}']`);
// 	const textcontent = sel.attr('text');
// 	stepSel.classed('is-active', (d, i) => i === index);
// 	container.select('.text-inner').text('width', width);
// }
//
// function init() {
// Stickyfill.add(d3.select('.sticky').node());
//
// 	enterView({
// 		selector: stepSel.nodes(),
// 		offset: 0.5,
// 		enter: el => {
// 			const index = +d3.select(el).text('textcontent');
// 			updateText(index);
// 		},
// 		exit: el => {
// 			let index = +d3.select(el).attr('text-index');
// 			index = Math.max(0, index - 1);
// 			updateChart(index);
// 		}
// 	});
// }
//
// init();
