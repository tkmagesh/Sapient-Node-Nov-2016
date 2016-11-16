var fs = require('fs');

var stream = fs.createReadStream('./test.txt', {encoding : 'utf8'});
//var readCount = 0;
/*stream.on('data', function(chunk){
	
	console.log(chunk);
});


stream.on('end', function(){
	console.log('------------------- done [with ' + readCount + ' reads ----------------');
});
stream.on('error', function(){
	console.log('something went wrong!');
})
*/

stream.on('end', function(){
	console.log('------------------- done  ----------------');
});
stream.pipe(process.stdout);