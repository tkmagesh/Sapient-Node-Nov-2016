var express = require('express');
var router = express.Router();

var bugsList = [
	{id : 1, name : "Server communication failure",  isClosed : false},
	{id : 2, name : "user actions not recognized",  isClosed : true},
	{id : 3, name : "object referenence not set to an object", isClosed : false},
];

/* GET bugs listing. */
router.get('/', function(req, res, next) {
	var viewModel = { list : bugsList };
  	res.render('bugs/list', viewModel);
});

router.get('/new', function(req, res, next){
	res.render('bugs/new');
});

router.post('/new', function(req, res, next){
	var bugName = req.body.bugName;
	var newBug = {
		id : bugsList.length,
		name : bugName,
		isClosed : false
	};
	bugsList.push(newBug);
	res.redirect('/bugs');
});

router.post('/toggle/:id', function(req, res, next){
	var bugId = req.params.id;
	for(var i=0; i < bugsList.length; i++){
		if (bugsList[i].id == bugId){
			bugsList[i].isClosed = !bugsList[i].isClosed;
			res.redirect('/bugs');
		}
	}
});

router.post('/removeClosed', function(req, res, next){
	for(var i=bugsList.length-1; i >=0 ; i--){
		if (bugsList[i].isClosed)
			bugsList.splice(i,1);
	}
	res.redirect('/bugs');
});

module.exports = router;


















