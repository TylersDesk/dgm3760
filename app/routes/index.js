var express = require('express');
var router = express.Router();
var mongoose = ('mongoose');
var Cat = require('../models/cat');


router.use(function(req,res,next) {
	var kitters = new Cat({
		name: 'Kitters',
		whiskers: 14,
		stripes: false
	});

	kitters.speak();

	console.log(kitters);

	kitters.save( function(err, doc) {
		if (err) {
			console.log(err)
		} else {
			console.log('Document from database = ', doc);
		}
	});


	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
