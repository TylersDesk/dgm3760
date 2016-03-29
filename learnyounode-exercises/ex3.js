var globals = process.argv;

var fs = require('fs');

var fileContents = fs.readFileSync(globals[2]).toString();

var fileArrayByNewLines = fileContents.split('\n');

var numberOfNewlines = fileArrayByNewLines.length;

console.log(numberOfNewlines - 1);

// var string = ["Th", "s ", "s my str", "ng"];

// string.split('i'); // [ 'Th', 's ', 's my str', 'ng' ]

// console.log(string.split('i'));