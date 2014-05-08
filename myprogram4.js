(function() {
	var fs = require('fs');

	fs.readFile(process.argv[2], 'utf8', function(error, data) {

	
	//console.log("file path: " + obj);
	var strObj = data.toString();

	var numberLines = strObj.split('\n').length - 1;
	console.log(numberLines);
	});
}).call(this);