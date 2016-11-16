var http = require('http'),
	dataParser = require('./dataParser'),
	staticServer = require('./staticServer'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler');


var server = http.createServer(function(req, res){
	dataParser(req, res, function(){
		staticServer(req, res, function(){
			calculatorHandler(req, res, function(){
				notFoundHandler(req, res);
			})
		})
	})
});

server.listen(8080);