var csv1 = "https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_cases_switzerland.csv"; 
var csv2 = "https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_fatalities_switzerland.csv";

function makePlotTotalPositive(csv) {
  Plotly.d3.csv(csv, function(csvdata) {
    processDataTotalPositive(csvdata);
  });
};

function makePlotNewCasesPerDay(csv) {
  Plotly.d3.csv(csv, function(csvdata) {
    processDataNewCaseesPerDay(csvdata);
  });
};

function processDataTotalPositive(allRows) {
  var date = [], CH = [], plotTitle = 'Total positive tested cases', divId = 'totalPositivePlot';
  for (var i=0; i < allRows.length; i++) {
    row = allRows[i];
    date.push( row['Date'] );
    CH.push( row['CH'] );
  };
  makeLinearPlotXY(date, CH, plotTitle, divId)
};

function processDataNewCaseesPerDay(allRows) {
  var dateBar = [], chBar = [], plotTitleBar = 'New positive tested cases per day', divIdBar = 'newCasesPerDay', previousCH = 0;
  for (var i=0; i < allRows.length; i++) {
    //console.log('previousRowCH' + previousCH);
    row = allRows[i];
    dateBar.push( row['Date'] );
    rowCH = row['CH']
    //console.log( 'rowCH' + rowCH);
    rowCHdiff = rowCH - previousCH;
    chBar.push(rowCHdiff);
    //console.log(rowCHdiff);
    previousCH = rowCH;
    //chHistogram.push( rowCH );
    //console.log(dateHistogram, chHistogram);

  };

  makeBarChart( dateBar, chBar, plotTitleBar, divIdBar)
};

makePlotTotalPositive(csv1);
makePlotNewCasesPerDay(csv1);