var fs = require('fs');
var source = "c://nodetutorial//";
var fileSizePrinter = require('./fileSizePrinter.js');

fs.readdir(source, processFiles);

//Process files
function processFiles(error, files) {

    files.forEach(function processFile(filename, fileIndex) {

        fileSizePrinter.print(source, filename);
    });
}