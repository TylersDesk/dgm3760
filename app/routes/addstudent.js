var express = require('express');
var router = express.Router();
var db = require('../fakedb');


router.use(function(req,res,next) {
	console.log('We are trying to add a student');
	console.log('REQ BODY>>>>', req.body);
	console.log('REQ QUERY>>>>', req.query);
	next();
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.json({ student: req.body });
});

/* GET */
router.get('/', function(req, res, next) {
  res.json({ student: req.query });
});

module.exports = router;
