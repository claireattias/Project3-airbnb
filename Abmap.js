
var map = L.map('map', {
  center: [22.28327, 20.1127],
  zoom: 2.5
});
var basemap = { 
  StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',   {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
  Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?',   {layers: 'TOPO-WMS'}),
  Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'})
};

L.control.layers(basemap).addTo(map);

basemap.StreetView.addTo(map);

var Abicon = L.icon({iconUrl: 'https://raw.githubusercontent.com/shacheeswadia/leaflet-map/main/beach-icon-colorful.svg', iconSize: [30, 30], })


var marker1 = L.marker([22.28327, 114.14988], {icon: Abicon})
            .bindPopup('Hongkong, China')
            .addTo(map);
var marker2 = L.marker([41.03254, 28.98153], {icon: Abicon})
  .bindPopup('Instanbul, Turkey')
  .addTo(map);
var marker3 = L.marker([40.75356, -73.98559], {icon: Abicon})
  .bindPopup('NewYork, United States')
  .addTo(map);
var marker4 = L.marker([51.56861, -0.1127], {icon: Abicon})
  .bindPopup('London, England')
  .addTo(map);
var marker5 = L.marker([1.34754, 103.95958], {icon: Abicon})
  .bindPopup('Singapore, Singapore')
  .addTo(map);
var marker6 = L.marker([48.85247, 2.35835], {icon: Abicon})
  .bindPopup('Paris, France')
  .addTo(map);
var marker7 = L.marker([13.75983, 100.54134], {icon: Abicon})
  .bindPopup('Bangkok, Thailand')
  .addTo(map);
