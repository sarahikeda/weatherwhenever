function locateUser(){
  if (navigator.geolocation) {
    (navigator.geolocation.getCurrentPosition(function(position){
      var lat = (position.coords.latitude);
      var lon = (position.coords.longitude);
      getWeather(lat,lon);
    }));
  }
};

function createWeatherEndpoint(lat,lon) {
  return "http://worksample-api.herokuapp.com/weather?lat=" + lat + "&lon=" + lon + "&key=62fc4256-8f8c-11e5-8994-feff819cdc9f"
}

function getWeather(lat,lon) {
  var weatherUrl = createWeatherEndpoint(lat, lon)
  var cityConditions = {};
  $.getJSON(weatherUrl, function(data){
    cityConditions.city = data.name
    cityConditions.temp =  data.main.temp;
    cityConditions.humidity =  data.main.humidity;
    cityConditions.weather = data.weather[0].main
    displayWeather(cityConditions)
  });
}

function displayWeather(cityConditions) {
  $.each(cityConditions, function(info, value){
    $(".weather-form").append(value)

  })
}
