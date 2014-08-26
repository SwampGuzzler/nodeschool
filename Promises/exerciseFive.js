var q = require('q');
var defer = q.defer();

//defer.promise.then(attachTitle);


// console.log("FIRST");

function attachTitle (name) {
	return "DR. " + name;
};


//defer.promise.then(attachTitle);
//defer.promise.then(console.log);
defer.promise
  .then(attachTitle)
  .then(console.log);

defer.resolve("MANHATTAN");



