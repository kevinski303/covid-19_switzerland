function makeLinearPlotXY(xgiven , ygiven, headTitle, divElement){
  var plotDiv = document.getElementById(divElement);
  var trace = [{x:xgiven, y:ygiven, line: { shape: 'spline' }}]
  var conf = { responsive: true, displayModeBar: false };
  var layout = { title: headTitle, font: { size: 14 }, height: 500, width: 800, autosize: true, xaxis: { tickangle: 45, }, yaxis: { }, paper_bgcolor: '#F5F5F5', plot_bgcolor: '#F5F5F5' };
  Plotly.newPlot(plotDiv, trace, layout, conf);
}

function makeBarChart(xgiven , ygiven, headTitleHistogram, divElementHistogram){
  var plotDiv = document.getElementById(divElementHistogram);
  var trace = [{x:xgiven, y:ygiven, type: 'bar'}]
  var conf = { responsive: true, displayModeBar: false };
  var layout = { title: headTitleHistogram, font: { size: 14 }, height: 500, width: 800, autosize: true, xaxis: { tickangle: 45, }, yaxis: { }, bargap: 0.01, paper_bgcolor: '#F5F5F5', plot_bgcolor: '#F5F5F5' };
  Plotly.newPlot(plotDiv, trace, layout, conf);
}