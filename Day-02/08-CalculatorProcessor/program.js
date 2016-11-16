var fs = require('fs');
var parser = require('./calculatorParser');
var calculator = require('./calculator');

fs.readFile('./calculatorData.csv', {encoding : 'utf8'}, function(err, fileContents){
	var parsedData = parser.parse(fileContents);

	for(var i=0; i < parsedData.length; i++){
		var input = parsedData[i],
			method = input.method,
			arg1 = input.arg1,
			arg2 = input.arg2;
		var result = calculator[method](arg1, arg2);
		console.log(result);
	}	
});
