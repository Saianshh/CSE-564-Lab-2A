const tableData = [
    [0.0018453, 0.0057907, 0.0006561, 0.0033782, 0.0001383, 0.000431, 0.000552, 0.0023481, 0.1400372, 0.1436795, 0.057733, 0.0453338, 0.1140033, 0.0873967, 0.0556136, 0.1506267, 0.1904363], 
    [0.0090162, 0.005814, 0.0041253, 0.0033792, 0.0003153, 0.0007257, 0.0035866, 0.0024148, 0.344659, 0.3486428, 0.3195685, 0.1469597, 0.1259173, 0.1270989, 0.0572052, 0.2498103, 0.2507612], 
    [0.0612627, 0.450623, 0.0041989, 0.2680663, 0.0044192, 0.0911874, 0.0495109, 0.0906867, 0.3463162, 0.3502214, 0.3199054, 0.1473948, 0.128474, 0.1286898, 0.0576556, 0.2498416, 0.251546], 
    [0.5249885, 0.498095, 0.0297065, 0.3020479, 0.0135991, 0.0981013, 0.4334265, 0.0977467, 0.3468084, 0.3507864, 0.3260813, 0.1517885, 0.1293619, 0.1295337, 0.0578473, 0.2509599, 0.259121], 
    [0.5259876, 0.499357, 0.1990487, 0.3023384, 0.0151639, 0.1118105, 0.4702958, 0.0978163, 0.4124693, 0.4137416, 0.3326395, 0.1681118, 0.366022, 0.3986546, 0.1309583, 0.2923571, 0.2632278], 
    [0.5264639, 0.5001681, 0.5267773, 0.3233219, 0.5479396, 0.1252424, 0.4704743, 0.1371246, 0.4164062, 0.4173594, 0.3328504, 0.1692414, 0.3898148, 0.417801, 0.140833, 0.2947272, 0.2634546], 
    [0.5400439, 0.5001684, 0.670929, 0.4138231, 0.8790896, 0.1908535, 0.56908, 0.2063598, 0.4191021, 0.420175, 0.3339397, 0.2026579, 0.4110552, 0.4352746, 0.2431676, 0.2959774, 0.2683034], 
    [0.5405214, 0.5001684, 0.680132, 0.4176373, 0.8889107, 0.7198678, 0.5736327, 0.5915303, 0.4193716, 0.4202422, 0.3401247, 0.2080695, 0.413275, 0.4355828, 0.2815643, 0.3010587, 0.2683108], 
    [0.5478342, 0.5001864, 0.8808857, 0.6923823, 0.9015685, 0.8473407, 0.6054215, 0.8835089, 0.4206788, 0.4216847, 0.3401275, 0.2105721, 0.4272529, 0.4424861, 0.3047225, 0.3037721, 0.269575], 
    [0.5482911, 0.5002436, 0.8975177, 0.6969634, 0.9230556, 0.8984913, 0.6159728, 0.8993687, 0.4644331, 0.4576433, 0.4109258, 0.2832319, 0.534211, 0.4479676, 0.7669861, 0.3763661, 0.278331], 
    [0.5489311, 0.5005106, 0.8975203, 0.6984467, 0.9242476, 0.8987647, 0.6161166, 0.8995547, 0.4730031, 0.4651548, 0.4399979, 0.961136, 0.5375304, 0.449045, 0.9565195, 0.4540763, 0.2794446], 
    [0.5489693, 0.5005402, 0.9016768, 0.6985503, 0.9257044, 0.8988764, 0.617917, 0.8995806, 0.4731946, 0.4655519, 0.4615857, 0.9809457, 0.7034696, 0.8877082, 0.9697607, 0.5095392, 0.5564295], 
    [0.5491656, 0.500564, 0.9032249, 0.6987891, 0.9258562, 0.899483, 0.617932, 0.8996574, 0.4738641, 0.466143, 0.461647, 0.9999292, 0.9895618, 0.9842219, 0.9935241, 0.7049038, 0.9315329], 
    [0.5492301, 0.5007852, 0.9058055, 0.6997935, 0.9263965, 0.8997057, 0.6186618, 0.8997025, 0.5034901, 0.4967892, 0.9999946, 0.9999913, 0.9999009, 0.9999873, 0.9998495, 0.999935, 0.9999812], 
    [0.9999708, 0.5007857, 0.9999851, 0.6997939, 0.9999921, 0.8997057, 0.9999674, 0.8997028, 0.5035081, 0.4968627, 0.9999972, 1.0, 0.9999116, 0.999999, 0.9998503, 0.9999733, 0.9999943], 
    [1.0, 0.500787, 1.0, 0.6997976, 1.0, 0.8997077, 1.0, 0.8997077, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], 
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
]
const labels = ['NUMBER OF PERSONS INJURED','NUMBER OF PERSONS KILLED',
'NUMBER OF PEDESTRIANS INJURED', 'NUMBER OF PEDESTRIANS KILLED', 'NUMBER OF CYCLIST INJURED', 'NUMBER OF CYCLIST KILLED', 'NUMBER OF MOTORIST INJURED', 'NUMBER OF MOTORIST KILLED', 'temp', 'feelslike', 'humidity','precip', 'snow', 'snowdepth', 'windspeed', 'cloudcover', 'visibility']

// for the current dimensionality index, find the indices of the top 4 features
currentDim = elbowPoint-1

console.log("Initial current dim:", currentDim);
window.addEventListener('dimChange', function(event) {
    currentDim = event.detail - 1;
    console.log(currentDim);
    updateTable();
});
var attributesFromTable = []
updateTable();
function updateTable() {
    const top4Table = [];
    const top4 = tableData[currentDim].map((d, i) => [d, i]).sort((a, b) => b[0] - a[0]).slice(0, 4).map(d => d[1])


    for (let i = 0; i < 4; i++) {
        top4Table.push([labels[top4[i]], tableData[currentDim][top4[i]]])
    }
    console.log("TOP4TABLE", top4Table)
    attributesFromTable = [];
    for(let i = 0; i < 4; i++) {
        attributesFromTable.push(labels[top4[i]]);
    }
    const tableChangeEvent = new CustomEvent('tableChange', { detail: attributesFromTable });
    window.dispatchEvent(tableChangeEvent);
    // 2 rows and 4 columns
    const transposedTable = [
        [top4Table[0][0], top4Table[1][0], top4Table[2][0], top4Table[3][0]],
        [top4Table[0][1], top4Table[1][1], top4Table[2][1], top4Table[3][1]]
    ];

    d3.select("table").remove();

    const table = d3.select("#table")
        .append("table")
        .style("border-collapse", "collapse")
        .style("border", "2px black solid")
        .attr("width", "100%")
        .attr("height", "100%");

    const rows = table.selectAll("tr")
        .data(transposedTable)
        .enter()
        .append("tr")
        .style("border", "1px navy solid")
        .style("padding", "12px")
        .style("text-align", "center")
        .style("font-size", "14px")
        .style("font-family", "Arial, sans-serif")
        .style("background-color", "#F0F0F0")
        .style("color", "navy")
        .style("font-weight", "bold");

    const cells = rows.selectAll("td")
        .data(d => d)
        .enter()
        .append("td")
        .text(d => d)
        .style("border", "1px solid navy")
        .style("padding", "12px")
        .style("text-align", "center")
        .style("font-size", "14px")
        .style("font-family", "Arial, sans-serif")
        .style("background-color", "#F0F0F0")
        .style("color", "navy")
        .style("font-weight", "bold");
}








