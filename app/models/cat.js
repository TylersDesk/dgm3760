var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var catSchema = new Schema({
	name: String,
	whiskers: Number,
	stripes: Boolean
});

catSchema.methods.speak = function () {
	console.log('Meooooww... I\'m' + this.name );
}

module.exports = mongoose.model('Cat', catSchema);