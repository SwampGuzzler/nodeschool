//console.log(process.argv);
(function(val, index, array) {
  //console.log(index + ': ' + val);
  var neww = process.argv.slice(2);
  //console.log(neww);
  var j = 0;
  for (i in neww) {
  	
  	var h = neww[i];
  	var g = parseInt(h);
  	//console.log("g: " + g);
  	j = j + g;
  	//console.log("j: " + j);
  }
  
  console.log(j);
  //return j;

}).call(this);
//console.log(j);
