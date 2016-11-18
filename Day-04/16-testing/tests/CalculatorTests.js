var chai = require('chai'),	
	Calculator = require('../calculator');

chai.should();

describe("A Calculator", function(){
	it("Should be able to add two numbers", function(){
		
		//Arrange
		var calculator = new Calculator(),
			n1 = 10,
			n2 = 20,
			expectedResult = 30;

		//Act
		calculator.add(n1, n2);

		//Assert
		calculator.result.should.equal(expectedResult);
		console.log(calculator.result);
	})
})