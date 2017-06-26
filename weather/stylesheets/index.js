function checkWeather(weather) {
  if (weather == "Clouds") {
    return "wi wi-cloudy"
  } else if (weather== "Rain") {
    return "wi wi-rains"
  } else if (weather== "Snow") {
    return "wi wi-snow"
  } else {
    return "wi wi-day-sunny"
  }
}

function addWeather(weatherResult) {
  $(".weather-form").append("<div class='weather-image'> <i class=\"" + weatherResult + "\"></i></div>")
}

function stylePage() {
  $(".weather-form").empty();
  $(".message").show();
  $("body").css("background-color","#ffe529");
}

function displayStats(cityConditions) {
  stylePage();
  var weatherResult = checkWeather(cityConditions.weather)
  addWeather(weatherResult)
  $.each(cityConditions, function(info, value){
    $(".weather-form").append("<div class=" + info + "><p>" + value + "</p></div>")
  })
}

function createWeatherEndpoint(lat,lon) {
  return "http://worksample-api.herokuapp.com/weather?lat=" + lat + "&lon=" + lon + "&key=62fc4256-8f8c-11e5-8994-feff819cdc9f"
}

function getCityConditions(lat,lon) {
  var weatherUrl = createWeatherEndpoint(lat, lon)
  var cityConditions = {};
  $.getJSON(weatherUrl, function(data){
    cityConditions.temp =  data.main.temp + "°C";
    cityConditions.weather = data.weather[0].main
    cityConditions.city = data.name
    displayStats(cityConditions)
  });
}

function locateUser(){
  if (navigator.geolocation) {
    (navigator.geolocation.getCurrentPosition(function(position){
      var lat = (position.coords.latitude);
      var lon = (position.coords.longitude);
      getCityConditions(lat,lon);
    }));
  }
};

$(document).ready(function() {
  $(".message").hide();
});
