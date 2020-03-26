var csv1 = "https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_cases_switzerland.csv"; 
var csv2 = "https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_fatalities_switzerland.csv";

makeData(csv1)

function makeData(csv) {
  Plotly.d3.csv(csv, function(data) {
  });
  return data;
};

processData(data1);

function processData(allRows) {
  
  var xDate = [], yCH = [], standard_deviation = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    xDate.push( row['Date'] );
    yCH.push( row['CH'] );
  }
  makePlotly( xDate, yCH, standard_deviation);
};

function makePlotly( xDate, yCH){
  var plotDiv = document.getElementById("plotTotalCases");
  var trace1 = {x:xDate, y:yCH, line: { shape: 'spline' }}
  var trace2 = {}
  var traces = [ trace1, trace2 ];
  var conf = { responsive: true, displayModeBar: false };
  var layout = { title: '', font: { size: 18 }, height: 500, width: 800, autosize: true, xaxis: { tickangle: 45, } };
  
  Plotly.newPlot(plotDiv, traces, layout, conf);
};
makeplot();