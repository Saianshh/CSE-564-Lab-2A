const eigenvalues = [2.83505110e+00, 2.22596837e+00, 2.01321638e+00, 1.81918924e+00,
    1.24575655e+00, 1.08846470e+00, 1.05427281e+00, 1.00685115e+00,
    9.78511647e-01, 8.95181612e-01, 7.23899033e-01, 5.40225272e-01,
    3.33126573e-01, 2.42977495e-01, 1.43057951e-02, 2.06056290e-03,
    2.71098787e-30];

const sortedEigenvalues = eigenvalues.sort((a, b) => b - a);

var totalVariance = 0;
for(let i = 0; i < sortedEigenvalues.length; i++) {
    totalVariance += sortedEigenvalues[i];
}
const explainedVariance = [];
for(let i = 0; i < sortedEigenvalues.length; i++) {
    explainedVariance.push((sortedEigenvalues[i] / totalVariance) * 100);
}
const cumulativeExplainedVariance = [];
var cumulativeVariance = 0;
for(let i = 0; i < explainedVariance.length; i++) {
    cumulativeVariance += explainedVariance[i];
    cumulativeExplainedVariance.push(cumulativeVariance);
}

const svgWidth = 710;
const svgHeight = 150;
const margin = { top: 25, right: 20, bottom: 30, left: 50 };
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

var elbowPoint = cumulativeExplainedVariance.findIndex(val => val > 75)+1;

const svg = d3.select('#scree-plot')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight) 
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

const xScale = d3.scaleBand()
    .domain(d3.range(1, sortedEigenvalues.length + 1))
    .range([0, width])
    .padding(0.5);

const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0])

linePoint = xScale(elbowPoint) + xScale.bandwidth() / 2;

svg.selectAll('.bar')
    .data(explainedVariance)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => xScale(i + 1))
    .attr('y', d => yScale(d))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d))
    .attr('fill', (d, i) => i === elbowPoint-1 ? 'orange' : 'navy')
    .on('click', function(d, i) {
        svg.selectAll('.bar').attr('fill', 'navy');
        d3.select(this).attr('fill', 'orange');
        elbowPoint = explainedVariance.indexOf(i)+1;
        const dimEvent = new CustomEvent('dimChange', { detail: elbowPoint });
        window.dispatchEvent(dimEvent);
        console.log("window event dispatched");
        linePoint = xScale(elbowPoint) + xScale.bandwidth() / 2;
        svg.selectAll('.elbow-line')
            .attr('x1', linePoint)
            .attr('x2', linePoint);
    });


const line = d3.line()
    .x((d, i) => xScale(i + 1) + xScale.bandwidth() / 2)
    .y(d => yScale(d))
    .curve(d3.curveMonotoneX);

svg.append('path')
    .datum(cumulativeExplainedVariance)
    .attr('fill', 'none')
    .attr('stroke', 'red')
    .attr('stroke-width', 2)
    .attr('d', line);

svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(xScale).tickFormat(d => d));

svg.append('g')
    .call(d3.axisLeft(yScale).tickValues(d3.range(0, 101, 10)));

svg.append('text')
    .attr('x', width / 2)
    .attr('y', height + margin.bottom - 3)
    .style('text-anchor', 'middle')
    .style('font-size', '12.9px')
    .text('Principal Component Number');

svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left + 5)
    .attr('x', 0 - (height / 1.8))
    .attr('dy', '1em')
    .style('text-anchor', 'middle')
    .style('font-size', '12px')
    .text('% of Explained Variance');

svg.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top - 30)
    .attr("text-anchor", "middle")
    .style("font-size", "15px")
    .style("stroke", "navy")
    .text("Scree Plot");

svg.append('line')
    .attr('class', 'elbow-line')
    .attr('x1', linePoint)
    .attr('y1', 0)
    .attr('x2', linePoint)
    .attr('y2', height)
    .attr('stroke', 'black')
    .attr('stroke-dasharray', '5, 5');
