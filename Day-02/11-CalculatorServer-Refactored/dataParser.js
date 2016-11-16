var url = require('url');

module.exports = function(req, res, next){
	req.urlObj = url.parse(req.url === '/' ? '/index.html' : req.url);
	if (typeof next === 'function'){
		next();
	}
}