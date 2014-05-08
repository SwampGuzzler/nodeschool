(function() {
	var fs = require('fs');

	var obj = fs.readFileSync(process.argv[2], 'utf8');
	//console.log("file path: " + obj);
	var strObj = obj.toString();

	var numberLines = strObj.split('\n').length - 1;
	console.log(numberLines);
}).call(this);