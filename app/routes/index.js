var express = require('express');
var router = express.Router();
var db = require('../fakedb');


router.use(function(req,res,next) {
	console.log(db.students);
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
