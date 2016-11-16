var http = require('http'),
	dataParser = require('./dataParser'),
	staticServer = require('./staticServer'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler');


var middlewares = [dataParser, staticServer, calculatorHandler, notFoundHandler];
var server = http.createServer(function(req, res){
	function exec(req, res, middlewares){
		var first = middlewares[0],
			remaining = middlewares.slice(1),
			next = function(){
				exec(req, res, remaining);
			};
		if (first)
			first(req, res, next);
	}
	exec(req,res, middlewares);
});

server.listen(8080);