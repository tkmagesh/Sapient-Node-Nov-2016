
module.exports = function(req, res, next){
	console.log('beginning of notFoundHandler');
	/*console.log('sending 404');
	res.statusCode = 404;
	res.end();*/
	console.log('end of notFoundHandler');
	if (typeof next === 'function'){
		next();
	}
}