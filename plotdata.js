function makeplot() {
  Plotly.d3.csv("https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_cases_switzerland.csv", 
  function(data) {
    processData(data)
  });
};

function processData(allRows) {
  //console.log(allRows);

  var x = [], y = [], standard_deviation = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['Date'] );
    y.push( row['CH'] );
  }

  //console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
  makePlotly( x, y, standard_deviation );
};

function makePlotly( x, y, standard_deviation ){
  var plotdiv = document.getElementById("plot");
  //console.log(plotdiv);
  var trace = [{
    x: x,
    y: y,
    line: {
      shape: 'spline'
    }
  }];

  var conf = {
    responsive: true,
    displayModeBar: false
  };

  var layout = {
    title: 'COVID-19 confirmed cases in Switzerland',
    font: { size: 18 },
    height: 500,
    width: 800,
    autosize: true,
    xaxis: {
      tickangle: 45,
    },
    yaxis: {
      title: ''
    }
  };

  Plotly.newPlot(plotdiv, trace, layout, conf);
};
makeplot();