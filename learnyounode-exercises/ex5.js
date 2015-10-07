var globals = process.argv;
var fs = require('fs');
var folderPath = globals[2];
var extension = globals[3];

function handleFiles(err,list){

	list.forEach(function(fileName, index){

		// item = "readm.md";

		// console.log('Found .' + extension + ' at character ' + fileName.indexOf('.' + extension) + ' in ' + fileName );
		if (fileName.indexOf('.' + extension) != -1) {
			console.log(fileName);
		}
	});
};

fs.readdir(folderPath, handleFiles);

		// var string = "Kaite";
		// console.log(string.indexOf('bob'));