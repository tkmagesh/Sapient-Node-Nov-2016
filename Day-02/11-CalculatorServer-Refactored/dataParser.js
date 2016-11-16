var url = require('url');

module.exports = function(req){
	req.urlObj = url.parse(req.url === '/' ? '/index.html' : req.url);
}