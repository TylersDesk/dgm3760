var express = require('express');
var router = express.Router();
var db = require('../fakedb');


router.use(function(req,res,next) {
	console.log('We are trying to add a student');
	console.log(req.body);
	next();
});

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('students', { student: req.body });
});

module.exports = router;
