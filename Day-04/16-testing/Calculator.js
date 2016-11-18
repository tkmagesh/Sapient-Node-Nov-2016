function Calculator(){
	this.result = 0;
}
Calculator.prototype.add = function(x,y){
	this.result = x + y;
}
module.exports = Calculator;