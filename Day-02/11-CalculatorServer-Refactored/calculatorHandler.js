var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res){
	var urlObj = req.urlObj;
	if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var calcData = querystring.parse(urlObj.query);
		var operation = calcData.op,
			arg1 = parseInt(calcData.n1, 10),
			arg2 = parseInt(calcData.n2, 10);

		var result = calculator[operation](arg1, arg2);
		res.write(result.toString());
		res.end();
		//calculator operation requested
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.setEncoding('utf8');
		req.on('data', function(chunk){
			rawData += chunk
		});
		req.on('end', function(){
			var calcData = querystring.parse(rawData);
			var operation = calcData.op,
				arg1 = parseInt(calcData.n1, 10),
				arg2 = parseInt(calcData.n2, 10);

			var result = calculator[operation](arg1, arg2);
			res.write(result.toString());
			res.end();
			
		})
	}
}