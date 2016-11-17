var express = require('express');
var router = express.Router();

var bugsList = [
	
];



/* GET bugs listing. */
router.get('/', function(req, res, next) {
	req.session["bugs"] = req.session["bugs"] || [];
	var bugsList = req.session["bugs"];
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
	req.session["bugs"].push(newBug);
	res.redirect('/bugs');
});

router.post('/toggle/:id', function(req, res, next){
	var bugId = req.params.id;
	var bugsList = req.session["bugs"];
	for(var i=0; i < bugsList.length; i++){
		if (bugsList[i].id == bugId){
			bugsList[i].isClosed = !bugsList[i].isClosed;
			res.redirect('/bugs');
		}
	}
});

router.post('/removeClosed', function(req, res, next){
	var bugsList = req.session["bugs"];
	for(var i=bugsList.length-1; i >=0 ; i--){
		if (bugsList[i].isClosed)
			bugsList.splice(i,1);
	}
	res.redirect('/bugs');
});

module.exports = router;


















