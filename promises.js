var restRequest = require('request');

makeRequest('https://referencedemo.iqmetrix.net/v1/countries/').then(function(result) {
    console.log(result);
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