var q = require('q');
var defer = q.defer();

//defer.promise.then(attachTitle);


function parsePromised(json) {
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


parsePromised(process.argv[2]).then(null,console.log);