var path =require('path'),
	fs = require('fs');

var staticResExtns = ['.html','.css','.ico','.js','.png','.jpg'];

function isStatic(resourceName){
	return staticResExtns.indexOf(path.extname(resourceName)) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.urlObj.pathname)){
		//static resource requested
		var resourceRequested = path.join(__dirname, req.urlObj.pathname);
		var stream = fs.createReadStream(resourceRequested);
		stream.pipe(res);
		stream.on('error', function(err){
			if (err.code === 'ENOENT'){
				res.statusCode = 404;
				res.end();
			}
		});
	}
}