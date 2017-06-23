var fs = require('fs');
 
fs.readFile('/doesnt/exist/test.txt', handleFile);

function handleFile (error, contents) {
    if(error) return console.error('Error ', error);
}