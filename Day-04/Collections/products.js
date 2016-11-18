var products = [
	{id : 3, name : "Pen", cost : 60, units : 50, category : "Stationary"},
	{id : 8, name : "Hen", cost : 30, units : 40, category : "Grocery"},
	{id : 2, name : "Den", cost : 80, units : 30, category : "Stationary"},
	{id : 1, name : "Zen", cost : 20, units : 60, category : "Grocery"},
	{id : 9, name : "Ken", cost : 40, units : 90, category : "Stationary"},
	{id : 5, name : "Ten", cost : 70, units : 70, category : "Grocery"}
];

/*
sort,
filter
sum
min
max
groupBy
all
any
*/

function print(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

print("Default list", function(){
	console.table(products);
});

print("Sorting", function(){
	print("Default Sort [Products by id]", function(){
		function sort(){
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++){
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
				}

		}
		sort();
		console.table(products);
	});
	print("Any list by any attribute", function(){
		function sort(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++){
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
				}

		}
		print("Products by cost", function(){
			sort(products, "cost");
			console.table(products);
		});

		print("Products by units", function(){
			sort(products, "units");
			console.table(products);
		})
	});

	print("Any list by any comparer", function(){
		function sort(list, comparerFn){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++){
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
				}

		}
		function descending(comparerFn){
			return function(){
				return comparerFn.apply(this, arguments) * -1;
			}
		}
		var productComparerByValue = function(p1, p2){
			var p1Value = p1.cost * p1.units,
				p2Value = p2.cost * p2.units;
			if (p1Value < p2Value) return -1;
			if (p1Value > p2Value) return 1;
			return 0
		};
		print("Products by value [cost * units]", function(){
			sort(products, productComparerByValue);
			console.table(products);
		})
		print("Products by value [cost * units] [descending]", function(){
			var productComparerByValueDescending = descending(productComparerByValue);
			sort(products, productComparerByValueDescending);
			console.table(products);
		})
	})
});

print("Filtering", function(){
	print("All stationary products", function(){
		function filterAllStationaryProducts(){
			var result = [];
			for(var i=0; i < products.length; i++)
				if (products[i].category === 'Stationary')
					result.push(products[i]);
			return result;
		};
		var allStationaryProducts = filterAllStationaryProducts();
		console.table(allStationaryProducts);
	});

	print("Any list by any criteria", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i < list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		}

		function negate(criteriaFn){
			return function(){
				return !criteriaFn.apply(this, arguments);
			}
		}
		print("Products By Cost", function(){
			var costlyProductCriteria = function(product){
				return product.cost >= 50;
			};
			print("All costly products [cost >= 50]", function(){
				var allCostlyProducts = filter(products, costlyProductCriteria);
				console.table(allCostlyProducts);
			});
			print("All affordable products [!costly products]", function(){
				var affordableProductCriteria = negate(costlyProductCriteria);
				var affordableProducts = filter(products, affordableProductCriteria);
				console.table(affordableProducts);
			})
		})

		print("Products by Units", function(){
			var understockedProductCriteria = function(product){
				return product.units < 50;
			};
			print("All understocked products [units < 50]", function(){
				var allUnderstockedProducts = filter(products, understockedProductCriteria);
				console.table(allUnderstockedProducts);
			});
			print("All suffiently stocked products [!understocked products]", function(){
				var suffientlyStockedProductCriteria = negate(understockedProductCriteria);
				var suffientlyStockedProducts = filter(products, suffientlyStockedProductCriteria);
				console.table(suffientlyStockedProducts);
			})
		})
	})
});


























