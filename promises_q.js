var restRequest = require('request');
var Q = require('Q');

var requests = [ 'https://referencedemo.iqmetrix.net/v1/countries/',
                  'https://referencedemo.iqmetrix.net/v1/timeZones'];

var promises = [];

for(var i = 0; i < requests.length; i++) {
    promises.push(makeRequest(requests[i]));
}

Q.allSettled(promises).then(function(results) {
    console.log(results); 
});
 
function makeRequest(url) {

    return new Promise(resolve => {

        var options = { 
            method: 'GET',
            url: url 
        };

        restRequest(options, function (error, response, body) {
            
            if (error) throw new Error(error);  
            
            body = JSON.parse(body);
            
            resolve(body[0]);
        });
    });
}