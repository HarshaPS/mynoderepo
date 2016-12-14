var weather = require('./weatherapp.js');
var location = require('./location.js');
weather(function(currentWeather){
    console.log(currentWeather);
});

location(function(location){
    console.log(location);
});


