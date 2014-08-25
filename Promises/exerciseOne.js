var q = require('q');

var defer = q.defer();
// So now the variable defer is the promise itself

defer.promise.then(console.log("RESOLVED!"));
// Attaches a 'then' handler to the promise


//return defer.promise;

//defer.setTimeout(300);

//Other Syntax could have been: 
// defer.promise.then(console.log);
// setTimeout(defer.resolve, 300, "RESOLVED!");