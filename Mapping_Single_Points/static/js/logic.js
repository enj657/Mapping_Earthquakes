// Add console.log to check to see if our code is working.
console.log("working2");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// or 
// let map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });


const LA_latlon = L.latLng(34.0522, -118.2437);

console.log(LA_latlon.lng);

// Add a marker to the map for Los Angeles, California
let marker = L.marker(LA_latlon).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

let C1 = L.circle(LA_latlon, {radius: 5000});

let C2 = L.circle(LA_latlon, {radius: 25000, color: '#cc00cc', fillcolor: '#d1d1d1'});

let C3 = L.circle(LA_latlon, {radius: 50000, color: '#dddd00', fillcolor: '#a1a1a1'});

// C1.addTo(map);

console.log(C1);

// C1.on("add", function(){
//     console.log("added C1")
//     setTimeout(function(){
//         C2.addTo(map);
//     }, 10000)
// });

// C2.on("add", function(){
//     setTimeout(function(){
//         C3.addTo(map);
//     }, 10000)
// });

// Add a circle marker to the map
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: 'ffffa1'
}).addTo(map);