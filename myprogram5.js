(function() {
	var fs = require('fs');
	var path = require('path');

	fs.readdir(process.argv[2], function(error, list) {
	list2 = path.extname(list);
	console.log(list2);
	console.log('');
	//console.log("file path: " + obj);
	var strObj = list.toString();
	//console.log(strObj);
	console.log('');
	var Obj2 = path.extname(strObj);
	//console.log(Obj2);
	var files = strObj.split(',');
	//console.log(files);
	var sorted = files.sort();
	//console.log(sorted);

	//var numberLines = strObj.split('\n').length - 1;
	//console.log(numberLines);
	});
}).call(this);

