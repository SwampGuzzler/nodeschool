var q = require('q');
var defer = q.defer();




var rejection = "REJECTED!";
defer.promise.then(console.log);
setTimeout(defer.resolve, 300, rejection);


//Other Syntax could have been: 

/*
function rejection(error) {
	console.log(error.message);
};
defer.promise.then(null,rejection);
setTimeout(defer.reject,300,new Error("REJECTED"));
*/