var path =require('path'),
	fs = require('fs');

var staticResExtns = ['.html','.css','.ico','.js','.png','.jpg'];

function isStatic(resourceName){
	return staticResExtns.indexOf(path.extname(resourceName)) !== -1;
}

module.exports = function(req, res, next){
	if (isStatic(req.urlObj.pathname)){
		//static resource requested
		var resourceRequested = path.join(__dirname, req.urlObj.pathname);
		var stream = fs.createReadStream(resourceRequested);
		stream.on('open', function(){
			console.log('file send initiated');
		});
		var i = 0;
		stream.on('data', function(chunk){
			console.log('writing chunk # - ', ++i);
			res.write(chunk);
		});
		stream.on('end', function(){
			res.end();
		})
		
		stream.on('error', function(err){
			if (err.code === 'ENOENT'){
				res.statusCode = 404;
				res.end();
			}
		});
		console.log('end of staticServer');
	} else {
		if (typeof next === 'function'){
			next();
		}
	}
}