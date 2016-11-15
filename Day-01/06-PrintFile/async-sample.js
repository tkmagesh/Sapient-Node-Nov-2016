function addSync(x,y){
	console.log('addSync triggered for ', x , ' and ', y);
	if (x % 2 === 0 || y % 2 === 0) throw new Error('Invalid arguments');
	var result = x + y;
	return x + y;
}

function addSyncClient(x,y){
	console.log('triggering addSync');
	try{
		var result = addSync(x,y);
		console.log('result = ', result);
	} catch (e){
		console.log('something went wrong');
	}
}

function addAsync(x,y, onResult){
	console.log('addAsync triggered for ', x , ' and ', y);
	setTimeout(function(){
		if (x % 2 === 0 || y % 2 === 0) throw new Error('Invalid arguments');
		var result = x + y;
		onResult(result);
	}, 3000);
	
}

function addAsyncClient(x,y){
	console.log('triggering addAsync');
	try{
		addAsync(x,y, function(result){
			console.log('result = ', result);
		});
	} catch(e){
		console.log('something went wrong!');
	}
	
}

module.exports = {
	addSyncClient : addSyncClient,
	addAsyncClient : addAsyncClient
};