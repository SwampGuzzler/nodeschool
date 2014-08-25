var q = require('q');
var defer = q.defer();


//defer.promise.then(console.log("I FIRED"),console.log("I DID NOT FIRE"));
//defer.promise.then(null,console.log("I DID NOT FIRE"));

/*function fulfill() {
	console.log("I FIRED");
};
function reject(error) {
	//console.log("I DID NOT FIRE");
};*/
defer.promise.then(console.log,console.log);
defer.resolve("I FIRED");
defer.reject("I DID NOT FIRE");
//defer.promise.then(null,reject);
//setTimeout(defer.reject,300,new Error("I DID NOT FIRE"));
/*

var rejection = "REJECTED!";
defer.promise.then(console.log);
setTimeout(defer.resolve, 300, rejection);
*/

//Other Syntax could have been: 

/*
function rejection(error) {
	console.log(error.message);
};
defer.promise.then(null,rejection);
setTimeout(defer.reject,300,new Error("REJECTED"));
*/