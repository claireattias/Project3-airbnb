var map = L.map('map', {
    center: [22.28327, 20.1127],
    zoom: 2.5
  });
  
  // Adding  3 basemap layers (the background map image) to our map:
  
  var basemap = { 
    StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',   {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?',   {layers: 'TOPO-WMS'}),
    Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'})
  };
  
  L.control.layers(basemap).addTo(map);
  
  basemap.StreetView.addTo(map);
  
  var Abicon = L.icon({iconUrl: 'https://raw.githubusercontent.com/shacheeswadia/leaflet-map/main/beach-icon-colorful.svg', iconSize: [30, 30], })
  
  let cities = [
    {    
        name: "Hongkong",
        listing: { EntireHomePrice : 'Entire Home Price $171',
        PrivateRoomPrice : 'Private Room Price $262',
        location: [22.28327, 114.14988]
    },
    },
    {   name: "Paris",
        listing: { EntireHomePrice : 'Entire Home Price $184',
                PrivateRoomPrice : 'Private Room Price $140',
                location: [48.85247, 2.35835]
            },
            },
    
  
    {    
        name: "Newyork",
        listing: { EntireHomePrice : 'Entire Home Price $263',
        PrivateRoomPrice : 'Private Room Price $166',
        location: [40.75356, -73.98559]
    },
    },
    {    
        name: "London",
        listing: { EntireHomePrice : 'Entire Home Price $278',
        PrivateRoomPrice : 'Private Room Price $136',
        location: [51.56861, -0.1127]
    },
    },
    {
        name: "Instanbul",
        listing: { EntireHomePrice : 'Entire Home Price $147',
        PrivateRoomPrice : 'Private Room Price $95',
        location: [41.03254, 28.98153]
    },
    },
    
    {                
        name: "Singapore",
        listing: { EntireHomePrice : 'Entire Home Price $414',
        PrivateRoomPrice : 'Private Room Price $158',
        location: [1.34754, 103.95958]
    },
    },

    {   
        name: "Bangkok",
    listing: { EntireHomePrice : 'Entire Home Price $100',
            PrivateRoomPrice : 'Private Room Price $88',
            location: [13.75983, 100.54134]
        },
        },    
];

console.log(cities);   


 //looking through the list  

    for (let i = 0; i < cities.length; i++) {

        var city = cities[i];
        console.log(city);
        L.marker(city.listing.location, {icon: Abicon})
            .bindPopup(`<h2>${city.name}</h2> <h5> ${city.listing.EntireHomePrice}</h5><h5> ${city.listing.PrivateRoomPrice}</h5>`)
            .addTo(map)
        
    };

