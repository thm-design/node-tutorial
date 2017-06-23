var fs = require('fs');
var source = "c://nodetutorial//"; //Change to location of this folder on your computer

//Read all files in folder
fs.readdir(source, function (err, files) {

  //Process each file
  files.forEach(function (filename, fileIndex) {

    //Get file size
    fs.stat(source + filename, function(err, stat) {

      console.log("%s is %d bytes", filename, stat.size);

    });
  });
});