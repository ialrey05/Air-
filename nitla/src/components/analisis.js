function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.725391, lng: -100.313041 },
    zoom: 18
  });
}

function weatherApi() {
  fetch(
    "http://api.weatherstack.com/current?access_key=53d4b1b7e52193fb4dbe324c5dab1ba9&query=Argentina"
  )
    .then(convertir => {
      return convertir.json();
    })
    .then(data => {
      console.log(data);
    });
}

weatherApi();
