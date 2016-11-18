var chai = require('chai');


chai.should();

describe("Greeter", function() {
  var loadModule = require("./module-loader").loadModule;
  console.log(loadModule);

  var module, greeterServiceMock;
  beforeEach(function() {
    greeterServiceMock = function(){
    	return 'A very dummy message';
    }
    module = loadModule("./Greeter.js", {greetService: greeterServiceMock});
    console.log(module.greetService());
  });

  it("message populated from greeter service", function() {
    	var greeter = new module.Greeter();
    	greeter.greet('magesh');
    	greeter.message.should.equal(greeterServiceMock())
  });
});