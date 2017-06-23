module.exports.print = print

var fs = require('fs');

function print(source, fileName) {
    fs.stat(source + fileName, function(err, stat) {
      console.log("%s is %d bytes", fileName, stat.size);
    });
}
