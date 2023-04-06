/*
// read in csv file 
const csvMax = "review_max_df.csv"
const csvMin = "review_min_df.csv"

d3.csv(csvMax).then(maxData => {
    console.log(maxData);
    buildCharts(maxData, "bar1");
});

d3.csv(csvMin).then(minData => {
  console.log(minData);
  buildCharts(minData, "bar2");
});

function buildCharts(data, divId) {
    let categoryNames = data.map(d => d.Category);
    let cityNames, scoreNames, colors;

    if (divId === "bar1") {
      cityNames = data.map(d => d['Highest Rated City']);
      scoreNames = data.map(d => Number(d.Score));
      colors = cityNames.map(city => {
        if (city === 'Bangkok') {
          return {color: 'indianred', label: 'Bangkok'};
        } else if (city === 'New York') {
          return {color: 'seagreen', label: 'New York'};
        } else if (city === 'Paris') {
          return {color: 'steelblue', label: 'Paris'};
        }
      });
    } else if (divId === "bar2") {
      cityNames = data.map(d => d['Lowest Rated City']);
      scoreNames = data.map(d => Number(d.Score));
      colors = cityNames.map(city => {
        if (city === 'Bangkok') {
          return {color: 'indianred', label: 'Bangkok'};
        } else if (city == 'Hong Kong') {
          return {color: 'rosybrown', label: 'Hong Kong'};
        } else if (city == 'Singapore') {
          return {color: 'coral', label: 'Singapore'};
        }
      });
    }
      
      let trace = [{
        x: categoryNames,
        y: scoreNames,
        type: "bar",
        marker: {
          color: colors.map(color => color.color),
        }
      }];
    
      let layout = {
        title: divId === "bar1" ? "Highest Reviews" : "Lowest Reviews",
        xaxis: {
          title: "Category"
        },
        yaxis: {
          title: "Score",
          range: [4,5]
        },
      };

      Plotly.newPlot(divId, trace, layout);
    }
*/

// Since datafram was small, manually input data for graph 

// create trace for highest reviews
var traceMax = {
  x: ['Cleanliness', 'Checkin', 'Communication', 'Location', 'Value'],
  y: [4.682, 4.823, 4.813, 4.827, 4.655],
  text: ['Bangkok', 'New York', 'New York', 'Paris', 'Bangkok'],
  name: 'Highest rated',
  type: 'bar',
  marker: {
    color: 'darkseagreen'
  }
};

// create trace for lowest reviews 
var traceMin = {
  x: ['Cleanliness', 'Checkin', 'Communication', 'Location', 'Value'],
  y: [4.497, 4.725, 4.730, 4.625, 4.483],
  text: ['Hong Kong', 'Hong Kong', 'Hong Kong', 'Bangkok', 'Singapore'],
  name: 'Lowest rated',
  type: 'bar',
  marker: {
    color: 'indianred'
  }
};

// combine traces 
var data = [traceMax, traceMin];

// create layout 
var layout = {
  barmode: 'group',
  yaxis: {
    range: [4,5],
    title: "Rating"
  },
  xaxis: {
    title: "Category"
  },
  title: "Highest and Lowest Rated City by Category",
};

// plot new plot 
Plotly.newPlot("barPlot", data, layout);

