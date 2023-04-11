// Initializes the page with a default plot
function init() {
  var data = [{
    x: [100,147,184,278,263,414,171],
    y: [5477,14039,18605,20895,11441,432,752],
    mode:'markers+text',
    marker:{color:'orange',
    size:18
    },
    text: ['Bangkok',  'Instanbul', 'Paris', 'London', 'Newyork','Singapore ', 'Hongkong'],
  textfont : {size: 18,
    family:'Times New Roman'
  },
  textposition: 'Top center',
    }];

  var layout = {
      title: 'Listing count & price ',
      xaxis: {
        title: 'Average listing price',
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'Listing count ',
        showline: false
      }
    };
    
   Plotly.newPlot("plot", data, layout);
}
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
        
    // Initialize x and y arrays
    var x = [];
    var y = [];
    
  
    if (dataset === 'Entire home/apt') {
      x = [100,147,184,278,263,414,171];
      y = [5477,14039,18605,20895,11441,432,752];
    
    }
  
    else if (dataset === 'Private room') {
      x = [88,95,140,136,166,158,262];
      y = [2134,4977,2986,12661,8060,697,859];
                  
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  


init();