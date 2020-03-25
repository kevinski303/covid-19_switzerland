var csvdata1 = "https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_cases_switzerland.csv";
var csvdata2 = "https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_fatalities_switzerland.csv";

function makeplot() {
  Plotly.d3.csv(csvdata1, function(data1) {
    processData(data1);
    console.log(data1);
  });
  Plotly.d3.csv(csvdata2, function(data2) {
  });
};

function processData(allRows) {
  
  //console.log(allRows);
  var xDate = [], yCH = [], standard_deviation = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    xDate.push( row['Date'] );
    yCH.push( row['CH'] );
  }
  //console.log( 'X',xDate, 'Y',yCH, 'Y2',yBE, 'SD',standard_deviation );
  makePlotly( xDate, yCH, standard_deviation);
};

function makePlotly( xDate, yCH){
  var plotDiv = document.getElementById("plot");
  var trace1 = {x:xDate, y:yCH, line: { shape: 'spline' }}
  var trace2 = {x:xDate}
  var traces = [ trace1, trace2 ];
  var conf = { responsive: true, displayModeBar: false };
  var layout = { title: '', font: { size: 18 }, height: 500, width: 800, autosize: true, xaxis: { tickangle: 45, } };
  
  Plotly.newPlot(plotDiv, traces, layout, conf);
};
makeplot();