var myMap = L.map("map", {
    center: [41, 36],
    zoom: 3
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each city's name, Neighbourhood, location, 
let cities = [
    {
        name: "Paris",
        lsting: {
            Most: {
                Neighbourhood: 'Buttes-Montmartre',
                location: [48.88238, 2.33831]
            },
            Least: {
                Neighbourhood: 'Louvre',
                location: [48.86033, 2.34005]
            },

        },
    },
    {    
        name: "bangkok",
        lsting: {
            Most: {
                Neighbourhood: 'Khlong Toei',
                location: [13.73378, 100.56303]
            },
            Least: {
                Neighbourhood: 'Nong Chok',
                location: [13.83601, 100.83202]
            },

        },
    },
    {    
        name: "newyork",
        lsting: {
            Most: {
                Neighbourhood: 'Bedford-Stuyvesant',
                location: [40.68462, -73.93839]
            },
            Least: {
                Neighbourhood: 'Woodrow',
                location: [40.53777, -74.20674]
            },

        },
    },
    {    
        name: "london",
        lsting: {
            Most: {
                Neighbourhood: 'Westminster',
                location: [51.52195, -0.14094]
            },
            Least: {
                Neighbourhood: 'Sutton',
                location: [51.36578751, -0.193367004]
            },

        },
    },
    {
        
        name: "instanbul",
        lsting: {
            Most: {
                Neighbourhood: 'Beyoglu',
                location: [41.03254, 28.98153]
            },
            Least: {
                Neighbourhood: 'Sultanbeyli',
                location: [40.93624, 29.28133]
            },

        },
    },
    {    
        name: "hongkong",
        lsting: {
            Most: {
                Neighbourhood: 'Yau Tsim Mong',
                location: [22.32579, 114.16701]
            },
            Least: {
                Neighbourhood: 'Kwai Tsing',
                location: [22.35544, 114.10726]
            },

        },
    },
    {    
        
        name: "singapore",
        lsting: {
            Most: {
                Neighbourhood: 'Kallang',
                location: [1.3092, 103.86339]
            },
            Least: {
                Neighbourhood: 'Ang Mo Kio',
                location: [1.36747, 103.83865]
            },
        },
    }
        
];

console.log(cities);
// Looping through the cities array, create one marker for each city, bind a popup.
for (let i = 0; i < cities.length; i++) {

    let city = cities[i];
    console.log(city);
    L.marker(city.lsting.Most.location)
        .bindPopup(`<h1>${city.name}</h1> <hr> <h3> Neighbourhood ${city.lsting.Most.Neighbourhood.toLocaleString()}</h3>`)
        .addTo(myMap),
    L.marker(city.lsting.Least.location)
        .bindPopup(`<h1>${city.name}</h1> <hr> <h3> Neighbourhood ${city.lsting.Least.Neighbourhood.toLocaleString()}</h3>`)
        .addTo(myMap)  
};
