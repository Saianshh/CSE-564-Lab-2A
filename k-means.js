mseValues = [107.51043765674049, 59.216760083837755, 39.05189895779478, 30.385175206032, 25.000714000389504, 21.771945468019204, 18.896541769475498, 17.3899590369557, 16.120943824046453, 15.138651455805991];
var elbow = 3;

const kSvgWidth = 710;
const kSvgHeight = 160;
const kMargin = { top: 12, right: 20, bottom: 43, left: 50 };
const kWidth = kSvgWidth - kMargin.left - kMargin.right;
const kHeight = kSvgHeight - kMargin.top - kMargin.bottom;

const kSvg = d3.select('#k-means')
    .append('svg')
    .attr('width', kSvgWidth)
    .attr('height', kSvgHeight) 
    .append('g')
    .attr('transform', 'translate(' + kMargin.left + ',' + kMargin.top + ')');

const kXScale = d3.scaleBand()
    .domain(d3.range(1, 11))
    .range([0, kWidth])
    .padding(0.5);

const kYScale = d3.scaleLinear()
    .domain([0, d3.max(mseValues)+10])
    .range([kHeight, 0])

kLinePoint = kXScale(elbow) + kXScale.bandwidth() / 2;

kSvg.selectAll('.bar')
    .data(mseValues)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => kXScale(i + 1))
    .attr('y', d => kYScale(d))
    .attr('width', kXScale.bandwidth())
    .attr('height', d => kHeight - kYScale(d))
    .attr('fill', (d, i) => i === elbow-1 ? 'orange' : 'navy')
    .on('click', function(d, i) {
        kSvg.selectAll('.bar').attr('fill', 'navy');
        d3.select(this).attr('fill', 'orange');
        elbow = mseValues.indexOf(i)+1;
        const elbowChangeEvent = new CustomEvent('elbowChange', { detail: elbow });
        window.dispatchEvent(elbowChangeEvent);
        kLinePoint = kXScale(elbow) + kXScale.bandwidth() / 2;
        kSvg.selectAll('.elbow-line')
            .attr('x1', kLinePoint)
            .attr('x2', kLinePoint);
    })
    .on('mouseover', function(d, i) {
        d3.select(this).attr('fill', 'orange');
    })
    .on('mouseout', function(d, i) {
        if (mseValues.indexOf(i)+1 !== (elbow)) {
            console.log(mseValues.indexOf(i)+1, elbow);
            d3.select(this).attr('fill', 'navy');
        } else {
            d3.select(this).attr('fill', 'orange');
        }
    });

kSvg.append('line')
    .attr('class', 'elbow-line')
    .attr('x1', kLinePoint)
    .attr('y1', 0)
    .attr('x2', kLinePoint)
    .attr('y2', kHeight)
    .attr('stroke', 'black')
    .attr('stroke-dasharray', '5, 5');


kSvg.append('g')
    .attr('transform', 'translate(0,' + kHeight + ')')
    .call(d3.axisBottom(kXScale));

kSvg.append('g')
    .call(d3.axisLeft(kYScale));

kSvg.append('text')
    .attr('x', kWidth / 2)
    .attr('y', kHeight + 30)
    .attr('text-anchor', 'middle')
    .text('Number of clusters');

kSvg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('x', -kHeight / 2)
    .attr('y', -kMargin.left + 20)
    .style('text-anchor', 'middle')
    .text('MSE');

kSvg.append('text')
    .attr('x', kWidth / 2)
    .attr('y', -kMargin.top + 20)
    .style('text-anchor', 'middle')
    .style('font-size', '15px')
    .style('stroke', 'navy')
    .text('K-Means MSE Plot');

function getK() {
    return elbow;
}


