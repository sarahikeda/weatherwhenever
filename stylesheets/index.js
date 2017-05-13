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
  var weatherUrl = "http://worksample-api.herokuapp.com/weather?lat=" + lat + "&lon=" + lon + "&key=62fc4256-8f8c-11e5-8994-feff819cdc9f"
  $.getJSON(weatherUrl, function(data){
    var weatherConditions = [];
    weatherConditions.push(data.weather[0].description);
  });
}
