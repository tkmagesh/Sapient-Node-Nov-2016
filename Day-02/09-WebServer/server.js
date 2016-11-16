var http = require('http'),
	fs = require('fs'),
	path = require('path');

var server = http.createServer(function(req, res){
	var resourceRequested = path.join(__dirname, req.url);
	var stream = fs.createReadStream(resourceRequested);
	stream.pipe(res);
	stream.on('error', function(err){
		if (err.code === 'ENOENT'){
			res.statusCode = 404;
			res.end();
		}
	});
});

server.listen(8080);