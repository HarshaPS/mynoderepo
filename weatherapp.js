var request = require('request');
var url= 'http://api.openweathermap.org/data/2.5/weather?appid=6ba8ed8d344889b5e70eece8473b042f&units=metric&q=Bangalore,in';


module.exports = function(callback){
    request({
    url: url,
    json: true
}, function (error, response, body) {
    if(error){
        console.log('Unable to fetch weather...');
    }else{
        console.log('%c It is '+ body.main.temp + ' in ' + body.name + '!' , 'background: #222; color: #bada55');
        console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
    }
});
};
