module.exports = {
	parse : function(fileContents){
		var result = [];
		var lines = fileContents.split('\r\n');
		for(var i=0; i < lines.length; i++){
			var line = lines[i],
				data = line.split(',');
			var obj = {
				method : data[0],
				arg1 : parseInt(data[1], 10),
				arg2 : parseInt(data[2], 10)
			};
			result.push(obj);
		}
		return result;
	}
}