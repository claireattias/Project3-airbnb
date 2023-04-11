// Creating our initial map object: 
// This gets inserted into the div with an id of "map"
var myMap = L.map("map", {
    center: [30, 19],
    zoom: 2
  });

// Add a tile layer (shows the actual map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define a markerSize() function that will give each city a different radius based on its rating
function markerSize(rating) {
    return Math.sqrt(rating) * 100000;
  }
  
// create cities variable to contain the city's name, location, rating, price
  var cities = [
    {
      name: "New York",
      location: [40.7128, -74.006],
      rating: 4.715,
      price: 216.803
    },
    {
        name: "Paris",
        location: [48.8566, 2.3522],
        rating: 4.699,
        price: 222.806
    },
    {
        name: "Bangkok",
        location: [13.7563, 100.5018],
        rating: 4.673,
        price: 93.555
    },
    {
        name: "London",
        location: [51.5072, -0.1276],
        rating: 4.669,
        price: 239.216
    },
    {
        name: "Istanbul",
        location: [41.0082, 28.9784],
        rating: 4.629,
        price: 122.364
    },
    {
        name: "Singapore",
        location: [1.3521, 103.8198],
        rating: 4.599,
        price: 352.754
    },
    {
        name: "Hong Kong",
        location: [22.3193, 114.1694],
        rating: 4.555,
        price: 434.64
    }

  ];
  
  // Loop through the cities array, and create one marker for each city object
  for (var i = 0; i < cities.length; i++) {
    L.circle(cities[i].location, {
      fillOpacity: 0.75,
      color: "brown",
      fillColor: "brown",
      // Set circle's radius equal to the output of our markerSize() function so marker size proportionate to rating
      radius: markerSize(cities[i].rating)
      // bindPopup displays a pop up when you click marker 
    }).bindPopup(`<h3>${cities[i].name}</h3> <h5>Rating: ${cities[i].rating.toLocaleString()}</h5> 
        <h5>Price:  $${cities[i].price.toFixed(0)}</h5`).addTo(myMap);
  }

