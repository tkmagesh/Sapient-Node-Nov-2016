var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	req.urlObj = url.parse(req.url === '/' ? '/index.html' : req.url);
	req.query = querystring.parse(req.urlObj.query);
	if (req.method === 'POST'){
		var rawData = '';
		req.setEncoding('utf8');
		req.on('data', function(chunk){
			rawData += chunk
		});
		req.on('end', function(){
			req.body = querystring.parse(rawData);
			next()
		})
	} else {
		next();	
	}
	
}