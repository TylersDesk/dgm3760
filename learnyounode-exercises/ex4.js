var globals = process.argv;
var myFilePath = globals[2]; //testfile.txt
var fs = require('fs');

function callback(err,data){
	if (err) {
		//handle error
	} else {
		console.log(data.split('\n').length - 1);
	}
}

fs.readFile(myFilePath, 'utf8', callback);