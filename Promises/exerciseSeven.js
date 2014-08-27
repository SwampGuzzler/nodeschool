var q = require('q');
var defer = q.defer();
// Use fcall to replace the whole parsePromised function from exercise 6

/*function parsePromised(json) {
	var defer = q.defer();
	try {
		//JSON.parse(process.argv[2]);
		defer.resolve(JSON.parse(json));
	}
	catch (e) {
		defer.reject(e);
	}
	return defer.promise;
}
parsePromised(process.argv[2]).then(null,console.log);*/

/*Q.fcall(var defer = q.defer());

	.then(defer.resolve(JSON.parse(json)),
	function (error) {
		defer.reject(error);
	})
	.then(return defer.promise);
	.done();*/
q.fcall(JSON.parse, process.argv[2])
.then(null, console.log);
