function locateUser(){
  if (navigator.geolocation) {
    (navigator.geolocation.getCurrentPosition(function(position){
      var lat = (position.coords.latitude);
      var lon = (position.coords.longitude);
      getWeather(lat,lon);
    }));
  }
};

function getWeather(lat,lon) {
  var weatherUrl = createWeatherEndpoint(lat, lon)
  $.getJSON(weatherUrl, function(data){
    console.log(data);
    var weatherConditions = [];
    weatherConditions.push(data.weather[0].description);
  });
}

function createWeatherEndpoint(lat,lon) {
  return "http://worksample-api.herokuapp.com/weather?lat=" + lat + "&lon=" + lon + "&key=62fc4256-8f8c-11e5-8994-feff819cdc9f"
}
