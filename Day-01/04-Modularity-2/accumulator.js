/*module.exports = function(){
	var result = 0;
	return {
		add : function(n){
			result += n;
		},
		subtract : function(n){
			result -= n;
		},
		multiply : function(n){
			result *= n;
		},
		divide : function(n){
			result /= n;
		},
		getResult : function(){
			return result;
		}
	}
}*/

function Accumulator(){
	var result = 0;
	
	this.add = function(n){
		result += n;
	};
	this.subtract = function(n){
		result -= n;
	};
	this.multiply = function(n){
		result *= n;
	};
	this.divide = function(n){
		result /= n;
	};
	this.getResult = function(){
		return result;
	};
}

module.exports = Accumulator;