
var trace1 = {
    x: ['Bangkok',  'Instanbul', 'Paris', 'London', 'Newyork','Singapore ', 'Hongkong'],
    y: [100,147,184,278,263,414,171],
    type: 'bar',
    name: 'Entire home/apt',
    marker: {
      color: 'orange',
      opacity: 0.8,
    }
  };

  var trace2 = {
    x: ['Bangkok',  'Instanbul', 'Paris', 'London', 'Newyork','Singapore ', 'Hongkong'],
    y: [88,95,3,136,166,158,262],
    type: 'bar',
    name: 'Private room',
    marker: {
      color: 'rgb(49,170,189)',
      opacity: 0.8
    }
  };

  var data = [trace1, trace2];

var layout = {
  title: 'Price per property type',
  font: {size: 18},
  xaxis: {
    title: 'Popular cities',
    tickfont: {
    size: 14,
    color: 'rgb(107, 107, 107)'
},
    tickangle: -45
  },
  yaxis: {
    title: 'Room price (USD)',
    titlefont: {
      size: 16,
      color: 'rgb(107, 107, 107)'
    },
    tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }
  },
  legend: {
    x: 0,
    y: 1.0,
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  },
  barmode: 'stack',
  bargap: 0.15,
  bargroupgap: 0.1
};

Plotly.newPlot('BarDiv', data, layout);