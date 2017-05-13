function getWeather() {
    console.log('test');
    $.getJSON('http://worksample-api.herokuapp.com/weather?q=Stockholm,SE&key=62fc4256-8f8c-11e5-8994-feff819cdc9f', function(data){
      console.log(data);
    });
}
