/*
*
*  

myFunction('folder', 'md', function(err,data){
	
	if (err) {
		i broke
	} else {
		i worked;
	}
});


*
*/
var fs = require('fs');

module.exports = function (dirName, ext, cb) {

	//take the dirname, get a list of files
	fs.readdir(dirName, function (err, arrayOfFiles) {
		var returnArray = [];

		if (err) {
			cb(err);
		} else {
			arrayOfFiles.forEach(function(fileName, index){
				// console.log('Found .' + extension + ' at character ' + fileName.indexOf('.' + extension) + ' in ' + fileName );
				if (fileName.indexOf('.' + ext) != -1) {
					returnArray.push(fileName)
				}
			});

			cb(null,returnArray);
		}

	});
};

// function handleFiles(list){

// 	list.forEach(function(fileName, index){

// 		// item = "readm.md";

// 		// console.log('Found .' + extension + ' at character ' + fileName.indexOf('.' + extension) + ' in ' + fileName );
// 		if (fileName.indexOf('.' + extension) != -1) {
// 			console.log(fileName);
// 		}
// 	});
// };
