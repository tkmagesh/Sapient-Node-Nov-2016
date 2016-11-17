function getCachedPrime(n){
	function isPrime(n){
	   console.log('processing ', n);
	   if (n <= 3) return true;
	   for(var i=2; i <= (n/2); i++)
	      if (n % 2 === 0) return false;
	   return true;
	}
	var cache = {};
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = isPrime(n);
		return cache[n];
	}
}

var cachedPrime = getCachedPrime();
cachedPrime(10)

function isPrime(n){
	   console.log('processing ', n);
	   if (n <= 3) return true;
	   for(var i=2; i <= (n/2); i++)
	      if (n % 2 === 0) return false;
	   return true;
	}

function memoize(algoFn){
	var cache = {};
	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = algoFn.apply(this, arguments);
		return cache[key];
	}
}

















