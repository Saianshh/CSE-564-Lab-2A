const eigenvectors = [[-4.29572894e-02, -7.60970101e-02, -2.56137645e-02, -5.81226216e-02,
 -1.17591252e-02, -2.07601447e-02, -2.34951980e-02, -4.84575835e-02,
 -3.74215719e-01, -3.79051103e-01,  2.40276094e-01,  2.12918778e-01,
  3.37644723e-01,  2.95627706e-01,  2.35824088e-01,  3.88105335e-01,
 -4.36391554e-01],
[-8.46797034e-02, -4.82790153e-03, -5.88989497e-02, -1.02167795e-03,
 -1.33033694e-02, -1.71705691e-02, -5.50850617e-02,  8.16689861e-03,
  4.52347861e-01,  4.52725492e-01,  5.11708129e-01,  3.18799871e-01,
 -1.09090595e-01, -1.99270556e-01,  3.99047778e-02,  3.14963935e-01,
 -2.45563290e-01],
[-2.28576019e-01,  6.66939350e-01, -8.60296764e-03,  5.14475707e-01,
 -6.40627068e-02,  3.00769305e-01, -2.14298490e-01,  2.97106376e-01,
 -4.07553187e-02, -3.97758781e-02,  1.84782816e-02,  2.06348803e-02,
  5.06644472e-02,  3.98208456e-02,  2.12577511e-02,  1.46518629e-05,
 -2.84351339e-02],
[ 6.80973969e-01,  2.17882544e-01,  1.59710231e-01,  1.84345797e-01,
  9.58113443e-02,  8.31464490e-02,  6.19609770e-01,  8.40219962e-02,
  2.21688258e-02,  2.37532961e-02,  7.84988747e-02,  6.62942948e-02,
  2.98377656e-02,  2.90424483e-02, -1.37859147e-02,  3.36428155e-02,
 -8.70257568e-02],
[ 3.16086679e-02, -3.55246342e-02,  4.11512063e-01,  1.70428368e-02,
  3.95579807e-02, -1.17086003e-01, -1.92013785e-01,  8.34286495e-03,
  2.56243696e-01,  2.50908586e-01,  8.09823727e-02, -1.27762510e-01,
  4.86477215e-01,  5.18768674e-01, -2.70390333e-01, -2.03463079e-01,
 -6.40848256e-02],
[ 2.18245970e-02,  2.84804573e-02, -5.72475813e-01, -1.44857027e-01,
  7.29914804e-01,  1.15896388e-01, -1.33588838e-02,  1.98263195e-01,
  6.27450793e-02,  6.01480436e-02, -1.45236213e-02, -3.36103281e-02,
  1.54249215e-01,  1.38370593e-01, -9.93715727e-02, -4.86835165e-02,
 -1.50575737e-02],
[-1.16532882e-01, -5.39294308e-04, -3.79673252e-01, -3.00834069e-01,
 -5.75456365e-01,  2.56146537e-01,  3.14015590e-01,  2.63125687e-01,
  5.19222408e-02,  5.30624090e-02,  3.30036827e-02, -1.82801763e-01,
  1.45740803e-01,  1.32187767e-01, -3.19897859e-01,  3.53579134e-02,
 -6.96334047e-02],
[ 2.18533419e-02, -6.15839375e-05,  9.59321634e-02, -6.17591848e-02,
  9.91014437e-02,  7.27333720e-01, -6.74733598e-02, -6.20621060e-01,
 -1.64139777e-02, -8.19892994e-03,  7.86448785e-02, -7.35635929e-02,
 -4.71146738e-02,  1.75543427e-02, -1.95950759e-01,  7.12836378e-02,
 -2.71929825e-03],
[ 8.55149667e-02, -4.24542859e-03,  4.48055420e-01, -5.24161310e-01,
  1.12507090e-01,  3.57033454e-01, -1.78294193e-01,  5.40350441e-01,
 -3.61563210e-02, -3.79803528e-02,  1.69602726e-03,  5.00262117e-02,
 -1.18228208e-01, -8.30860808e-02,  1.52178220e-01,  5.20896598e-02,
  3.55562009e-02],
[-2.13744445e-02, -7.56147552e-03, -1.28965233e-01, -6.76832467e-02,
 -1.46584688e-01,  2.26165016e-01,  1.02719577e-01, -1.25935713e-01,
  2.09175157e-01,  1.89627431e-01, -2.66079354e-01,  2.69554761e-01,
  3.27044540e-01,  7.40372543e-02,  6.79899659e-01, -2.69432873e-01,
  9.35736970e-02],
[-2.52991458e-02, -1.63415807e-02,  1.59661311e-03, -3.85139707e-02,
 -3.45252831e-02,  1.65356702e-02, -1.19896815e-02,  1.36387941e-02,
 -9.25741428e-02, -8.66691965e-02, -1.70505574e-01,  8.23349346e-01,
 -5.76140008e-02,  3.28246265e-02, -4.35354376e-01, -2.78765524e-01,
 -3.33697707e-02],
[-6.18032417e-03,  5.43850406e-03, -6.44711704e-02,  1.01794887e-02,
 -3.81680364e-02, -1.05667518e-02,  4.24316223e-02,  5.08870500e-03,
  1.38384255e-02,  1.99258211e-02,  1.46927653e-01,  1.40746654e-01,
 -4.07356393e-01,  6.62316506e-01,  1.15070474e-01,  2.35505562e-01,
  5.26293564e-01],
[ 1.40091102e-02,  4.87263921e-03,  3.93457795e-02,  1.54534762e-02,
  1.23230219e-02, -2.46293193e-02,  3.86685528e-03,  8.76423269e-03,
 -2.58759864e-02, -2.43134839e-02, -7.83522543e-03,  1.37780746e-01,
  5.34875856e-01, -3.10666568e-01, -1.54153875e-01,  4.42000623e-01,
  6.12456835e-01],
[ 8.03144121e-03,  1.48755632e-02,  5.08001713e-02,  3.16923278e-02,
  2.32423648e-02, -1.49225959e-02, -2.70144746e-02, -6.72044600e-03,
  1.72122011e-01,  1.75060472e-01, -7.33721734e-01,  7.87886745e-03,
 -1.01681229e-01,  1.25560366e-01, -7.95323106e-02,  5.43167807e-01,
 -2.61626388e-01],
[ 6.71372277e-01,  7.09150092e-04, -3.06886890e-01,  5.94380639e-04,
 -2.71285117e-01,  5.45277235e-05, -6.17499489e-01,  4.99278022e-04,
  4.24397955e-03, -8.57747231e-03,  1.60744573e-03,  2.94973094e-03,
  3.27179536e-03, -3.42128584e-03, -8.58523655e-04,  6.18988092e-03,
  3.60976269e-03],
[-5.40011856e-03,  1.14108465e-03,  3.86074717e-03,  1.93423686e-03,
  2.81626062e-03,  1.40675562e-03,  5.71181926e-03, -2.20737874e-03,
  7.04621797e-01, -7.09321689e-01,  1.66917911e-03, -1.90209414e-04,
 -9.40354481e-03, -9.86259509e-04, -1.22366969e-02,  5.16294595e-03,
  2.39438513e-03],
[ 9.80898975e-16, -7.06550035e-01, -2.77555756e-16,  5.47907276e-01,
 -2.22044605e-16,  3.16689646e-01, -1.11022302e-15,  3.16689646e-01,
 -3.29597460e-16,  4.82253126e-16,  1.66533454e-16, -9.54097912e-17,
 -1.59594560e-16, -1.56125113e-16, -8.32667268e-17, -2.63677968e-16,
 -3.69496100e-16]]
var k = elbow;
console.log(k);
d3.csv("./data/cluster_ids.csv").then(function(data) {
    d3.csv("./data/pca1and2ScaledData.csv").then(function(pcaData) {
        console.log(data);
        // Extracting the k'th column
        window.addEventListener('elbowChange', function(event) {
            k = event.detail;
            updateGraph();
        });
        console.log(pcaData);
        const biSvgWidth = 710;
        const biSvgHeight = 377;
        const biMargin = { top: 12, right: 20, bottom: 43, left: 50 };
        const biWidth = biSvgWidth - biMargin.left - biMargin.right;
        const biHeight = biSvgHeight - biMargin.top - biMargin.bottom;

        const biSvg = d3.select('#biplot')
            .append('svg')
            .attr('width', biSvgWidth)
            .attr('height', biSvgHeight) 
            .append('g')
            .attr('transform', 'translate(' + biMargin.left + ',' + biMargin.top + ')');
        
        const biXScale = d3.scaleLinear()
            .domain([-1, 1])
            .range([0, biWidth]);
        
        const biYScale = d3.scaleLinear()
            .domain([-1, 1])
            .range([biHeight, 0]);

        biSvg.append('g')
            .attr('transform', 'translate(0,' + biHeight + ')')
            .call(d3.axisBottom(biXScale));
        biSvg.append('g')
            .call(d3.axisLeft(biYScale));
        updateGraph();
        function updateGraph() {
            var clusterData = [];
            for (let i = 0; i < data.length; i++) {
                clusterData.push(data[i][k])
            }
            biSvg.selectAll('.cluster').remove();
            biSvg.selectAll('.cluster')
                .data(pcaData)
                .enter().append('circle')
                .attr('class', 'cluster')
                .attr('cx', d => biXScale(d.PC1))
                .attr('cy', d => biYScale(d.PC2))
                .attr('r', 3)
                .attr('fill', (d, i) => clusterData[i] === '0' ? 'red' : clusterData[i] === '1' ? 'green' : clusterData[i] === '2' ? 'blue' : clusterData[i] === '3' ? 'orange' : clusterData[i] === '4' ? 'purple' : clusterData[i] === '5' ? 'brown' : clusterData[i] === '6' ? 'yellow' : clusterData[i] === '7' ? 'navy' : clusterData[i] === '8' ? 'grey' : clusterData[i] === '9' ? 'black' : 'white');
        }
        
        for(let i = 0; i < eigenvectors.length; i++) {
            var magnitude = Math.sqrt(eigenvectors[i][0] ** 2 + eigenvectors[i][1] ** 2);
            var direction = Math.atan2(eigenvectors[i][1], eigenvectors[i][0]);
            const marker = svg.append('defs')
                .append('marker')
                .attr('id', `arrow${i}`)
                .attr('refX', 3)
                .attr('refY', 2)
                .attr('markerWidth', 5)
                .attr('markerHeight', 5)
                .attr('orient', 'auto');
    
            marker.append('path')
                .attr('d', 'M0,0 L0,4 L4,2 z')
                .attr('fill', i === 0 ? 'red' : i === 1 ? 'green' : i === 2 ? 'blue' : i === 3 ? 'orange' : i === 4 ? 'purple' : i === 5 ? 'brown' : i === 6 ? 'yellow' : i === 7 ? 'navy' : i === 8 ? 'grey' : i === 9 ? 'pink' : i === 10 ? 'darkred' : i === 11 ? 'darkgreen' : i === 12 ? 'cyan' : i === 13 ? 'magenta' : i === 14 ? 'black' : i === 15 ? 'teal' : i === 16 ? 'coral' : 'white');

            biSvg.append('line')
                .attr('x1', biXScale(0))
                .attr('y1', biYScale(0))
                .attr('x2', biXScale(magnitude * Math.cos(direction)))
                .attr('y2', biYScale(magnitude * Math.sin(direction)))
                .attr('stroke', i === 0 ? 'red' : i === 1 ? 'green' : i === 2 ? 'blue' : i === 3 ? 'orange' : i === 4 ? 'purple' : i === 5 ? 'brown' : i === 6 ? 'yellow' : i === 7 ? 'navy' : i === 8 ? 'grey' : i === 9 ? 'pink' : i === 10 ? 'darkred' : i === 11 ? 'darkgreen' : i === 12 ? 'cyan' : i === 13 ? 'magenta' : i === 14 ? 'black' : i === 15 ? 'teal' : i === 16 ? 'coral' : 'white')
                .attr('stroke-width', 2)
                .attr('marker-end', `url(#arrow${i})`);
        }
        var attributeLabels = ['Number of persons injured', 'Number of persons killed', 'Number of pedestrians injured', 'Number of pedestrians killed', 'Number of cyclist injured', 'Number of cyclist killed', 'Number of motorist injured', 'Number of motorist killed', 'temp', 'feelslike', 'humidity', 'precip', 'snow', 'snowdepth', 'windspeed', 'cloudcover', 'visibility']

        const legend = biSvg.append('g')
            .attr('transform', `translate(${biWidth - 320}, 0)`)
            .attr('outline', 'black');
        legend.append('text')
            .attr('x', 120)
            .attr('y', 5)
            .text('Eigenvectors');
        for(let i = 0; i < eigenvectors.length; i++) {
            if (i < 5) {
                legend.append('rect')
                    .attr('x', 10)
                    .attr('y', 20 + i * 20)
                    .attr('width', 10)
                    .attr('height', 10)
                    .attr('fill', i === 0 ? 'red' : i === 1 ? 'green' : i === 2 ? 'blue' : i === 3 ? 'orange' : i === 4 ? 'purple' : i === 5 ? 'brown' : i === 6 ? 'yellow' : i === 7 ? 'navy' : i === 8 ? 'grey' : i === 9 ? 'pink' : i === 10 ? 'darkred' : i === 11 ? 'darkgreen' : i === 12 ? 'cyan' : i === 13 ? 'magenta' : i === 14 ? 'black' : i === 15 ? 'teal' : i === 16 ? 'coral' : 'white');
                legend.append('text')
                    .attr('x', 23)
                    .attr('y', 29 + i * 20)
                    .text(attributeLabels[i])
                    .style('font-size', '10px');
            } else if(i >= 5 && i < 10) {
                legend.append('rect')
                    .attr('x', 148)
                    .attr('y', 20 + (i - 5) * 20)
                    .attr('width', 10)
                    .attr('height', 10)
                    .attr('fill', i === 0 ? 'red' : i === 1 ? 'green' : i === 2 ? 'blue' : i === 3 ? 'orange' : i === 4 ? 'purple' : i === 5 ? 'brown' : i === 6 ? 'yellow' : i === 7 ? 'navy' : i === 8 ? 'grey' : i === 9 ? 'pink' : i === 10 ? 'darkred' : i === 11 ? 'darkgreen' : i === 12 ? 'cyan' : i === 13 ? 'magenta' : i === 14 ? 'black' : i === 15 ? 'teal' : i === 16 ? 'coral' : 'white');
                legend.append('text')
                    .attr('x', 162)
                    .attr('y', 29 + (i - 5) * 20)
                    .text(attributeLabels[i])
                    .style('font-size', '10px');
            } else if(i >= 10 && i < eigenvectors.length) {
                legend.append('rect')
                    .attr('x', 276)
                    .attr('y', 20 + (i - 10) * 20)
                    .attr('width', 10)
                    .attr('height', 10)
                    .attr('fill', i === 0 ? 'red' : i === 1 ? 'green' : i === 2 ? 'blue' : i === 3 ? 'orange' : i === 4 ? 'purple' : i === 5 ? 'brown' : i === 6 ? 'yellow' : i === 7 ? 'navy' : i === 8 ? 'grey' : i === 9 ? 'pink' : i === 10 ? 'darkred' : i === 11 ? 'darkgreen' : i === 12 ? 'cyan' : i === 13 ? 'magenta' : i === 14 ? 'black' : i === 15 ? 'teal' : i === 16 ? 'coral' : 'white');
                legend.append('text')
                    .attr('x', 288)
                    .attr('y', 28 + (i - 10) * 20)
                    .text(attributeLabels[i])
                    .style('font-size', '10px');
            }

            biSvg.append('text')
                .attr('x', biWidth / 2)
                .attr('y', biHeight + 31)
                .attr('text-anchor', 'middle')
                .text('PC1');
            
            biSvg.append('text')
                .attr('transform', 'rotate(-90)')
                .attr('x', -biHeight / 2)
                .attr('y', -biMargin.left + 20)
                .style('text-anchor', 'middle')
                .text('PC2');
            
            biSvg.append('text')
                .attr('x', 100)
                .attr('y', -biMargin.top + 20)
                .style('text-anchor', 'middle')
                .style('font-size', '15px')
                .style('stroke', 'navy')
                .text('Biplot');
        }        
    }).catch(function(error){
        console.log(error);
    });
}).catch(function(error){
    console.log(error);
});