var greetService = require('./greetService');

function Greeter(){
	
	this.message = '';
}
Greeter.prototype.greet = function(name){
	this.message = greetService(name);
}

module.exports = Greeter;