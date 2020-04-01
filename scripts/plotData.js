var csv1 = "https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_cases_switzerland_openzh.csv"; 
var csv2 = "https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/covid19_fatalities_switzerland_openzh.csv";

/**
 * Load CSV and run DataProcess
 * 
 */

function makeAllPlots() {
  Plotly.d3.csv(csv1, function(csvdata1) {
    processDataTotalPositive(csvdata1);
    processDataNewCaseesPerDay(csvdata1);
  });
  Plotly.d3.csv(csv2, function(csvdata2) {
    processDataTotalDeath(csvdata2);
  });
};