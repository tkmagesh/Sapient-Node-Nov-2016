console.log('evaluating a.js');
var b = require('./b');
return {
	name : 'a' + b.name
};
