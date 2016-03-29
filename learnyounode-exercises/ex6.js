var globals = process.argv;

var mod6 = require('./module6.js');
var folder = globals[2];
var ext = globals[3];

mod6(folder, ext, cb);

function cb(err, data){
	if (err) {
		console.log(err);
	} else {
		data.forEach(function(item,indx){
			console.log(item);
		});
	}
};