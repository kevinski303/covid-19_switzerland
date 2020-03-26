/**
 * Process Data for Plots
 * 
 */

function processDataTotalPositive(allRows) {
    var date = [], CH = [], plotTitle = 'Total positive tested cases', divId = 'totalPositivePlot';
    for (var i=0; i < allRows.length; i++) {
      row = allRows[i];
      date.push( row['Date'] );
      CH.push( row['CH'] );
    };
    makeLinearPlotXY(date, CH, plotTitle, divId);
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
    makeBarChart( dateBar, chBar, plotTitleBar, divIdBar);
};
  
function processDataTotalDeath(allRows) {
    var dateTotalDeath = [], chTotalDeath = [], plotTitleTotalDeath = 'Total infected cases that died due to COVID-19', divIdTotalDeath = 'totalDeathPlot';
    for (var i=0; i < allRows.length; i++) {
        row = allRows[i];
        dateTotalDeath.push( row['Date'] );
        chTotalDeath.push( row['CH'] );
    };
    makeLinearPlotXY(dateTotalDeath, chTotalDeath, plotTitleTotalDeath, divIdTotalDeath);
};

/**
 * Run Everything!!!
 */
makeAllPlots();