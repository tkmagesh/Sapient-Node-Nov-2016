console.log('arguments length = ', process.argv.length);
console.log(Array.isArray(process.argv));
for(var i=0; i < process.argv.length; i++)
	console.log(process.argv[i]);
