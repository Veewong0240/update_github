
function displayMinute(){
    var date = new Date();
    var currentMinute = date.getMinutes();
    
    alert("Current minute:" + currentMinute)
}

function hideElement(){
    var element = document.getElementById('body')

    element.style.display = 'none';
}

$(document).ready(function() {
  mapLoad();
});

function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [53.4831, 2.2004];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}? access_token=pk.eyJ1IjoidmVld29uZyIsImEiOiJjbGkxOHNnOG0wZ2s3M2twY3FlYzYybTlzIn0.ggP6gOChOUogdbH6p36MMg';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
      L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
      .bindPopup("<b>Manchester City<br>Etihad Stadium</b>").openPopup();
  
  
  
  
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }

  function playAudio() { 
    var x = document.getElementById("myAudio"); 
    x.play(); 
} 

let players = [
  { name: "Pep Guardiola", age: 51, position: "Coach", salary: 15000000 },
  { name: "Rodolfo Borrell", age: 40, position: "Assistant Coach", salary: 5000000 },
  { name: "Carlos Vicens", age: 42, position: "Assistant Coach", salary: 5000000 },
  { name: "Phil Foden", age: 23, position: "Midfielder", salary: 12000000 },
  { name: "Bernardo Silva", age: 28, position: "Midfielder", salary: 10000000 },
  { name: "Erling Haaland", age: 26, position: "Forward", salary: 15000000 },
  { name: "Nathan Aké", age: 28, position: "Defender", salary: 6000000 },
  { name: "Kevin De Bruyne", age: 31, position: "Midfielder", salary: 18000000 },
  { name: "İlkay Gündoğan", age: 32, position: "Midfielder", salary: 6000000 },
  { name: "Julian Alvarez", age: 23, position: "Forward", salary: 8000000 },
  { name: "Aymeric Laporte", age: 28, position: "Defender", salary: 8000000 },
  { name: "Kyle Walker", age: 32, position: "Defender", salary: 7000000 },
  { name: "Ederson Moraes", age: 28, position: "Goalkeeper", salary: 7000000 },
  { name: "Rodri", age: 25, position: "Midfielder", salary: 8000000 },
  { name: "Ruben Dias", age: 25, position: "Defender", salary: 8000000 },
  { name: "Raheem Sterling", age: 28, position: "Forward", salary: 15000000 },
  { name: "Jack Grealish", age: 26, position: "Midfielder", salary: 12000000 }
];

function parseArray(array, property) {
  var clonedArray = [...array];
  clonedArray.sort(function(a, b) {
      if (a[property] < b[property]) {
          return -1;
      } else if (a[property] > b[property]) {
          return 1;
      } else {
          return 0;
      }
  });
  return clonedArray;
}

let sortedByAge = parseArray(players, 'age');
console.log(sortedByAge);


function wikiapi() {
  var searchTerm = document.getElementById('searchTerm').value;
  var connect = new XMLHttpRequest();
  var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

  connect.open('GET', url);

  connect.onload = function() {
      var wikiObject = JSON.parse(this.response);
      console.log(wikiObject.query.pages);

      var pages = wikiObject.query.pages;
      for (var i in pages) {
          var newDiv = document.createElement("div");
          newDiv.setAttribute('class', 'row h4');
          document.getElementById("wiki").appendChild(newDiv);
          newDiv.innerHTML = `<a href="https://en.wikipedia.org/?curid=${pages[i].pageid}" target="_blank">${pages[i].title}</a>`;
      }
  };

  connect.send();
}

