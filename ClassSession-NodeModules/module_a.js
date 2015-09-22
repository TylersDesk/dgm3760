//Here we are exporting a module's exports. Because exports is always availabed
//in the context of Node's require method;

//Not Available in Application Context
var myName = "YourNameHere";

// Exporting a property;
exports.getName = myName;

// Exporting a function;
exports.sayName = function(myName) {
	console.log("Hello, my name is " + exports.getName);
};
