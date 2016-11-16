var http = require('http'),
	dataParser = require('./dataParser'),
	staticServer = require('./staticServer'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler');


var server = http.createServer(function(req, res){
	dataParser(req);
	staticServer(req, res);
	calculatorHandler(req, res);
	notFoundHandler(res);
});

server.listen(8080);