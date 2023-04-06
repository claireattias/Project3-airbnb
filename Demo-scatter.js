// Initializes the page with a default plot
function init() {
  var data = [{
    x: [150,240,280,300,340,360,400],
    y: [5477,14039,752,20895,11441,18605,432,],
    mode:'lines+markers+text',
    line:{dash:'dashdot',
    shape: 'hvh',
    width:4,
    color:'rgb(49,170,189)',
       },
    marker:{color:'orange',
    size:14
    },
    text: ['Bangkok',  'Instanbul', 'Paris', 'London', 'Newyork','Singapore ', 'Hongkong'],
  textfont : {size: 18,
    family:'Times New Roman'
  },
  textposition: 'Top center',
    }];
  
   Plotly.newPlot("plot", data);
}
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
        layout = {
        title:'Adding Names to Line and Scatter Plot'
    };
    // Initialize x and y arrays
    var x = [];
    var y = [];
    var layout = {
      title:'Adding Names to Line and Scatter Plot'
    }
  
    if (dataset === 'Entire home/apt') {
      x = [150,240,280,300,340,360,400];
      y = [5477,432,14039,752,20895,11441,18605];
    
    }
  
    else if (dataset === 'Private room') {
      x = [70,120,140,150,180,170,200];
      y = [2134,697,4977,859,12661,8060,2986];
                  
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  


init();