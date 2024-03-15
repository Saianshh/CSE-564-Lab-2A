d3.csv("./data/processed_final_data.csv").then(function(data) {
    d3.csv("./data/cluster_ids.csv").then(function(clusterData) {
        var k = elbow;
        window.addEventListener('elbowChange', function(event) {
            k = event.detail;
            updateScatterplotMatrix();
        });
        var scatterAttributeData = attributesFromTable;
        console.log(scatterAttributeData);
        window.addEventListener('tableChange', function(event) {
            scatterAttributeData = event.detail;
            console.log(scatterAttributeData);
            updateScatterplotMatrix();
        });
        updateScatterplotMatrix();
        function updateScatterplotMatrix() {
            d3.select("#scatterplot-matrix").selectAll("*").remove();
            var scatterWidth = 176;
            var scatterHeight = 140.5;
            const scatterMargin = { top: 10, bottom: 25, right: 10, left: 25 };
            for(let i = 0; i < 16; i++) {
                var scatterSvg = d3.select("#scatterplot-matrix")
                    .append("svg")
                    .attr("width", scatterWidth)
                    .attr("height", scatterHeight)
                    .style("background", "#F0F0F0")
                    .style("outline", "2px solid navy");
                if(i === 0) {
                    console.log(i)
                    scatterSvg.append("text")
                    .attr("x", 0)
                    .attr("y", 65)
                    .style("font-size", "9.5px")
                    .style("font-family", "Arial, sans-serif")
                    .style("stroke", "navy")
                    .style("font-weight", "bold")
                    .text(scatterAttributeData[0]);
                } else if(i === 5) {
                    scatterSvg.append("text")
                    .attr("x", 0)
                    .attr("y", 65)
                    .style("font-size", "9.5px")
                    .style("font-family", "Arial, sans-serif")
                    .style("stroke", "navy")
                    .style("font-weight", "bold")
                    .text(scatterAttributeData[1]);
                } else if(i === 10) {
                    scatterSvg.append("text")
                    .attr("x", 0)
                    .attr("y", 65)
                    .style("font-size", "9.5px")
                    .style("font-family", "Arial, sans-serif")
                    .style("stroke", "navy")
                    .style("font-weight", "bold")
                    .text(scatterAttributeData[2]);
                } else if(i === 15) {
                    scatterSvg.append("text")
                    .attr("x", 0)
                    .attr("y", 65)
                    .style("font-size", "9.5px")
                    .style("font-family", "Arial, sans-serif")
                    .style("stroke", "navy")
                    .style("font-weight", "bold")
                    .text(scatterAttributeData[3]);
                } else {
                    row = Math.floor(i / 4);
                    col = i % 4;
                    xSelected = scatterAttributeData[col];
                    ySelected = scatterAttributeData[row];
                    console.log(i)
                    console.log(xSelected, ySelected);
                    console.log("numericalVsnumerical");
                    xDomain1 = [0, d3.max(data, d => d[xSelected])];
                    yDomain1 = [0, d3.max(data, d => d[ySelected])];
                    xRange1 = [scatterMargin.left, scatterWidth - scatterMargin.right];
                    yRange1 = [scatterHeight - scatterMargin.bottom, scatterMargin.top];
                    var xScale = d3.scaleLinear(xDomain1, xRange1);
                    var yScale = d3.scaleLinear(yDomain1, yRange1);
                    var xAxis = d3.axisBottom(xScale);
                    var yAxis = d3.axisLeft(yScale);
            
                    scatterSvg.append("g")
                        .attr("transform", `translate(0, ${scatterHeight - scatterMargin.bottom})`)
                        .call(xAxis);
                    scatterSvg.append("g")
                        .attr("transform", `translate(${scatterMargin.left}, 0)`)
                        .call(yAxis);
                    plotPointsWithColor();
                    function plotPointsWithColor() {
                        scatterSvg.selectAll("circle").remove();
                        var clusterIdColorData = [];
                        for(let i = 0; i < clusterData.length; i++) {
                            clusterIdColorData.push(clusterData[i][k]);
                        }
                        scatterSvg.selectAll("circle")
                            .data(data)
                            .enter()
                            .append("circle")
                            .attr("cx", d => xScale(d[xSelected]))
                            .attr("cy", d => yScale(d[ySelected]))
                            .attr("r", 3)
                            .attr("fill", (d, i) => clusterIdColorData[i] === '0' ? 'red' : clusterIdColorData[i] === '1' ? 'green' : clusterIdColorData[i] === '2' ? 'blue' : clusterIdColorData[i] === '3' ? 'orange' : clusterIdColorData[i] === '4' ? 'purple' : clusterIdColorData[i] === '5' ? 'brown' : clusterIdColorData[i] === '6' ? 'yellow' : clusterIdColorData[i] === '7' ? 'navy' : clusterIdColorData[i] === '8' ? 'grey' : clusterIdColorData[i] === '9' ? 'black' : 'white');
                    }
                }
            }
        }
    }).catch(function(error){
        console.log(error);
    });
}).catch(function(error){
    console.log(error);
});