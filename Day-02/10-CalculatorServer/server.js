var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticResExtns = ['.html','.css','.ico','.js','.png','.jpg'];

function isStatic(resourceName){
	return staticResExtns.indexOf(path.extname(resourceName)) !== -1;
}

var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url === '/' ? '/index.html' : req.url);
	if (isStatic(urlObj.pathname)){
		//static resource requested
		var resourceRequested = path.join(__dirname, urlObj.pathname);
		var stream = fs.createReadStream(resourceRequested);
		stream.pipe(res);
		stream.on('error', function(err){
			if (err.code === 'ENOENT'){
				res.statusCode = 404;
				res.end();
			}
		});
	} else if (urlObj.pathname === '/calculator'){
		var calcData = querystring.parse(urlObj.query);
		var operation = calcData.op,
			arg1 = parseInt(calcData.n1, 10),
			arg2 = parseInt(calcData.n2, 10);

		var result = calculator[operation](arg1, arg2);
		res.write(result.toString());
		res.end();
		//calculator operation requested
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);