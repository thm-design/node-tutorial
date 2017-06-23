var fs = require('fs');
var source = "c://nodetutorial//"; //Change to location of this folder on your computer

fs.readdir(source, processFiles);

//Process files
function processFiles(error, files) {

    files.forEach(function processFile(filename, fileIndex) {

        fs.stat(source + filename, function printFileSize(err, stat) {

          console.log("%s is %d bytes", filename, stat.size);
          
        });
    });
}