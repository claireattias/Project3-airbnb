d3.csv("visual.csv").then(data =>{
    console.log(data)
});
var mostx = ['paris Buttes-Montmartre','bangkok Khlong Toei','Newyork Bedford-Stuyvesant','london Westminster','honkong Yau Tsim Mong','singapore Kallang','instanbul Beyoglu'];
var mosty = [2265,1345,4051,1526,753,170,5319];

 let mostData = {
    x:mostx,
    y:mosty,
    type :'bar'
};
var leastx = ['paris Louvre','bangkok Nong Chok','Newyork Woodrow','london Sutton','honkong Kwai Tsing','singapore Ang Mo Kio','instanbul Sultanbeyli'];
var leasty = [637,1,142,1,2,3,10];
let leastData = {
    x:leastx,
    y:leasty,
    type :'bar'
};
 
let titleMost = ['paris Buttes-Montmartre','bangkok Khlong Toei','Newyork Bedford-Stuyvesant','london Westminster','honkong Yau Tsim Mong','singapore Kallang','instanbul Beyoglu']
let layout1 = {
    title:titleMost
};
Plotly.newPlot("plot", [mostData],layout1);

var selDataset = d3.select("#selDataset");
selDataset.on("change", function(){
    var elem = d3.select(this);
    elemVal = elem.property("value");
    console.log(elemVal);
    if(elemVal=="theMostDatsSet"){
        mostx = ['paris Buttes-Montmartre','bangkok Khlong Toei','Newyork Bedford-Stuyvesant','london Westminster','honkong Yau Tsim Mong','singapore Kallang','instanbul Beyoglu'];
        leasty = [2265,1345,4051,1526,753,170,5319];
        type = "bar";
    }else{
        mostx = ['paris Louvre','bangkok Nong Chok','Newyork Woodrow','london Sutton','honkong Kwai Tsing','singapore Ang Mo Kio','instanbul Sultanbeyli'];
        leasty = [637,1,142,1,2,3,10];
        type = "bar";
    };
    Plotly.restyle("plot", "x", [mostx]);
    Plotly.restyle("plot", "y", [leasty]);
    Plotly.restyle("plot", "type", [type]);
    
});

var trace1 = {
    x: ['paris','bangkok','Newyork','london','honkong','singapore','instanbul'],
    y: [2265,1345,4051,1526,753,170,5319],
    text:['paris Buttes-Montmartre','bangkok Khlong Toei','Newyork Bedford-Stuyvesant','london Westminster','honkong Yau Tsim Mong','singapore Kallang','instanbul Beyoglu'],
    name: 'The most listing',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['paris','bangkok','Newyork','london','honkong','singapore','instanbul'],
    y: [637,1,142,1,2,3,10],
    text:['paris Louvre','bangkok Nong Chok','Newyork Woodrow','london Sutton','honkong Kwai Tsing','singapore Ang Mo Kio','instanbul Sultanbeyli'],
    name: 'The least listnig',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout2 = {barmode: 'group'};
  
  Plotly.newPlot('plotGroup', data, layout2);






