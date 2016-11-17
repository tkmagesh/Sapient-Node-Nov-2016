var express = require('express');
var router = express.Router();

var bugsList = [
	"Server communication failure", 
	"user actions not recognized", 
	"object referenence not set to an object"
];

/* GET bugs listing. */
router.get('/', function(req, res, next) {
	var viewModel = { list : bugsList };
  	res.render('bugs/list', viewModel);
});

module.exports = router;