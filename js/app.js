$(document).foundation();


var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true); //initialize request
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response); //JSON response
      } else {
        reject(status);
      }
    };
    xhr.send(); //send request  
  });
};


var currentTempPromise = getJSON('http://api.wunderground.com/api/255ae48d8a84420e/conditions/q/CA/San_Francisco.json').then(function(data) {
  return data.current_observation.temp_f
});

var historicalTempHiPromise = getJSON('http://api.wunderground.com/api/255ae48d8a84420e/almanac/q/CA/San_Francisco.json').then(function(data) {
  return data.almanac.temp_high.normal.F
});

var historicalTempLoPromise = getJSON('http://api.wunderground.com/api/255ae48d8a84420e/almanac/q/CA/San_Francisco.json').then(function(data) {
  return data.almanac.temp_low.normal.F
});