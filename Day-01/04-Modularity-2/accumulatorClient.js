// var accFactory = require('./accumulator'),
// 	accumulator = accFactory();

var Accumulator = require('./Accumulator');
var accumulator = new Accumulator();

console.log(accumulator.getResult()); //=> 0
accumulator.add(100);
accumulator.subtract(50);
accumulator.multiply(10);
accumulator.divide(2);
console.log(accumulator.getResult()); //=> 250