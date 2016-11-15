console.log('evaluating b.js');
var a = require('./a');
return {
	name : 'b' + a.name
};