
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


