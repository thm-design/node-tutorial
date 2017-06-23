var restRequest = require('request');

//Service token call
var options = { 
    method: 'POST',
    url: 'https://accountsdemo.iqmetrix.net/v1/oauth2/token',
    headers: { 
        'content-type': 'application/x-www-form-urlencoded' 
    },
    form: { 
        grant_type: '', //Extract from config file
        client_id: '', //Extract from config file
        client_secret: '' //Extract from config file
    } 
};

restRequest(options, function (error, response, body) {
    
    if (error) throw new Error(error);  
    
    body = JSON.parse(body);
    
    console.log(body['access_token']);
});