var querystring = require('querystring'),
	memoize = require('./memoize'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	if (req.urlObj.pathname === '/calculator'){
		var calcData = req.method === 'GET' ? req.query : req.body;
		var operation = calcData.op,
			arg1 = parseInt(calcData.n1, 10),
			arg2 = parseInt(calcData.n2, 10);

		var result = calculate(operation, arg1, arg2)
		res.write(result.toString());
		res.end();
		//calculator operation requested
	} else {
		next();
	}
	
}

var calculate = memoize(function(operation, n1, n2){
	return calculator[operation](n1, n2);
});