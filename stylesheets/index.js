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
    cityConditions.temp =  data.main.temp + "°C";
    cityConditions.weather = data.weather[0].main
    displayWeather(cityConditions)
  });
}

function displayWeather(cityConditions) {
  $(".weather-form").empty();
  rainOrShine(cityConditions.weather)

  $.each(cityConditions, function(info, value){
    $(".weather-form").append("<div class=" + info + "><p>" + value + "</p></div>")
  })
}

function rainOrShine(weather) {
  if (weather == "Clouds") {
    $(".weather-form").append('<div class="weather-image"> <i class="wi wi-cloudy"></i></div>')
  } else if (weather== "Rain") {
    $(".weather-form").append('<div class="weather-image"> <i class="wi wi-rains"></i></div>')
  } else if (weather== "Snow") {
    $(".weather-form").append('<div class="weather-image"> <i class="wi wi-snow"></i></div>')
  } else {
    $(".weather-form").append('<div class="weather-image"> <i class="wi wi-day-sunny"></i></div>')
  }
}
