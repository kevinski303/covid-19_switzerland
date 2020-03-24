function makeplot() {
  Plotly.d3.csv("https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_cases_switzerland.csv", 
  function(data){ processData(data) 
  } );
};

function processData(allRows) {

  console.log(allRows);
  var x = [], y = [], standard_deviation = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['Date'] );
    y.push( row['CH'] );
  }
  console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
  makePlotly( x, y, standard_deviation );
}

function makePlotly( x, y, standard_deviation ){
  var plotDiv = document.getElementById("plot");
  var traces = [{
    x: x,
    y: y
  }];

  Plotly.newPlot('plot', traces,
    {title: 'COVID-19 Confirmed cases per day in Switzerland <br> Data: https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_cases_switzerland.csv'});
};
  makeplot();