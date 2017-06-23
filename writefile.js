var fs = require('fs');

fs.writeFile('test.txt', 'Text to be written', (err) => {
  if (err) throw err;
  console.log('The file has been written!');
});

//Uncomment to cause exception to throw
throw "File Write Error";
