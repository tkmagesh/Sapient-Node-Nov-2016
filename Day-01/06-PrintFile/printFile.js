var fs = require('fs');

try {
	var fileContents = fs.readFileSync('./test.txt', {encoding : 'utf8'});
	console.log(fileContents);
} catch (e){
	console.log('something went wrong!');
}
console.log('------------------- done ----------------');
