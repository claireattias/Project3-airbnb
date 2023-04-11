var trace1 = {
    x: ['New York', 'Paris', 'Bangkok', 'London', 'Istanbul', 'Singapore', 'Hong Kong'],
    y: [4.715, 4.699, 4.673, 4.669, 4.629, 4.599, 4.555],
    type: 'bar',
    marker: {
        color: "darksalmon"
    }
  };

  // create layout 
var layout = {
    yaxis: {
      range: [4,5],
      title: "Rating"
    },
    xaxis: {
      title: "City"
    },
    title: "Average City Rating",
  };
  
  // plot new plot 
  Plotly.newPlot("bar", [trace1], layout);
  
  